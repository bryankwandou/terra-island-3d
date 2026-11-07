import * as THREE from "three";

export interface RaymarchEngineHandles {
  render: (
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    targetPos: THREE.Vector3,
    options: {
      elapsed: number;
      sceneId: number;
      sunElevationScale: number;
      waveStrength: number;
      mistDensity: number;
      waterClarity: number;
      isSplitMode: boolean;
    },
  ) => void;
  resize: (width: number, height: number) => void;
}

export function createRaymarchEngine(): RaymarchEngineHandles {
  const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadScene = new THREE.Scene();

  const uniforms = {
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTime: { value: 0 },
    uSceneId: { value: 0 },
    uIsBaseline: { value: 0 },
    uCamPos: { value: new THREE.Vector3() },
    uCamTarget: { value: new THREE.Vector3() },
    uFov: { value: 45.0 },
    uSunScale: { value: 0.78 },
    uWaveStrength: { value: 0.64 },
    uMistDensity: { value: 0.88 },
    uClarity: { value: 0.94 },
  };

  const vertexShader = /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `;

  const fragmentShader = /* glsl */ `
    precision highp float;

    uniform vec2 uResolution;
    uniform float uTime;
    uniform int uSceneId;
    uniform int uIsBaseline;
    uniform vec3 uCamPos;
    uniform vec3 uCamTarget;
    uniform float uFov;
    uniform float uSunScale;
    uniform float uWaveStrength;
    uniform float uMistDensity;
    uniform float uClarity;

    varying vec2 vUv;

    #define PI 3.14159265359

    // ==========================================================================
    // HIGH-SPEED ANALYTICAL NOISE & FRACTAL BROWNIAN MOTION
    // ==========================================================================
    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    vec2 hash22(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xx + p3.yz) * p3.zy);
    }

    float noise2D(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
      float a = hash12(i);
      float b = hash12(i + vec2(1.0, 0.0));
      float c = hash12(i + vec2(0.0, 1.0));
      float d = hash12(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    const mat2 ROT2 = mat2(0.80, 0.60, -0.60, 0.80);

    float fbm4(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 4; i++) {
        v += a * noise2D(p);
        p = ROT2 * p * 2.03;
        a *= 0.5;
      }
      return v;
    }

    float fbm6(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 6; i++) {
        v += a * noise2D(p);
        p = ROT2 * p * 2.04;
        a *= 0.5;
      }
      return v;
    }

    float ridgedFbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        float n = 1.0 - abs(noise2D(p) * 2.0 - 1.0);
        v += a * n * n;
        p = ROT2 * p * 2.08;
        a *= 0.5;
      }
      return v;
    }

    // Optical Voronoi-style water caustics
    float causticPattern(vec2 p, float t) {
      vec2 uv = p * 1.45;
      float c1 = sin(uv.x * 3.1 + t * 1.6 + cos(uv.y * 2.7 - t * 1.2));
      float c2 = cos(uv.y * 3.5 - t * 1.4 + sin(uv.x * 3.0 + t * 1.8));
      float c3 = sin((uv.x + uv.y) * 2.6 - t * 1.9);
      float v = abs(c1 + c2 + c3 * 0.5);
      return pow(clamp(1.0 - v * 0.42, 0.0, 1.0), 3.4);
    }

    // ACES Filmic Tone Mapping
    vec3 acesToneMap(vec3 x) {
      const float a = 2.51;
      const float b = 0.03;
      const float c = 2.43;
      const float d = 0.59;
      const float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    // ==========================================================================
    // PHYSICAL ATMOSPHERIC SKY, SOLAR DISK & VOLUMETRIC CLOUDS
    // ==========================================================================
    vec3 getSunDir(int sceneId) {
      float elevScale = 0.65 + uSunScale * 0.50;
      if (sceneId == 0) {
        // Scene 1: Golden sunset low on left of the island
        return normalize(vec3(-0.27, 0.088 * elevScale, -0.95));
      } else if (sceneId == 1) {
        // Scene 2: Warm coastal sunset ahead-right
        return normalize(vec3(-0.18, 0.12 * elevScale, -0.97));
      } else if (sceneId == 2) {
        // Scene 3: Slanting golden afternoon light from upper-right mountain ridge
        return normalize(vec3(0.58, 0.26 * elevScale, -0.76));
      } else {
        // Scene 4: Golden hour sun in upper-right over Crescent Bay
        return normalize(vec3(0.52, 0.19 * elevScale, -0.83));
      }
    }

    vec3 renderSky(vec3 rd, vec3 sunDir, int sceneId, bool isBaseline) {
      float h = clamp(rd.y, 0.0, 1.0);
      vec3 zenithCol = vec3(0.20, 0.34, 0.48);
      vec3 horizonCol = vec3(0.92, 0.67, 0.46);

      if (sceneId == 0) {
        zenithCol = isBaseline ? vec3(0.38, 0.56, 0.72) : vec3(0.18, 0.30, 0.44);
        horizonCol = isBaseline ? vec3(0.84, 0.72, 0.62) : vec3(0.95, 0.66, 0.42);
      } else if (sceneId == 1) {
        zenithCol = isBaseline ? vec3(0.45, 0.60, 0.74) : vec3(0.24, 0.38, 0.54);
        horizonCol = isBaseline ? vec3(0.86, 0.76, 0.66) : vec3(0.94, 0.70, 0.48);
      } else if (sceneId == 2) {
        zenithCol = vec3(0.32, 0.46, 0.56);
        horizonCol = vec3(0.88, 0.80, 0.66);
      } else {
        zenithCol = vec3(0.28, 0.42, 0.56);
        horizonCol = vec3(0.94, 0.74, 0.52);
      }

      vec3 sky = mix(horizonCol, zenithCol, pow(h, 0.52));

      float sunDot = max(dot(rd, sunDir), 0.0);
      // Warm Mie scattering halo
      sky += vec3(1.0, 0.65, 0.30) * pow(sunDot, 5.0) * 0.48 * (1.0 - h * 0.6);
      sky += vec3(1.0, 0.84, 0.55) * pow(sunDot, 36.0) * 0.65;
      // Intense solar disk
      float sunDisk = smoothstep(0.9985, 0.9998, sunDot);
      sky += vec3(1.8, 1.5, 1.1) * sunDisk;

      // Volumetric sunset cloud bands in Ultra mode
      if (!isBaseline && rd.y > 0.008 && rd.y < 0.42) {
        vec2 cUv = rd.xz / (rd.y + 0.14) * 0.55 + vec2(uTime * 0.008, 0.0);
        float c1 = fbm4(cUv);
        float c2 = fbm4(cUv * 2.2 - vec2(uTime * 0.012, 0.0));
        float cloudAlpha = smoothstep(0.45, 0.76, c1 * 0.68 + c2 * 0.32) *
                           smoothstep(0.01, 0.06, rd.y) *
                           smoothstep(0.40, 0.10, rd.y);
        vec3 cloudDark = mix(zenithCol * 0.72, horizonCol * 0.78, 0.5);
        vec3 cloudLit = vec3(1.0, 0.78, 0.52) * (0.75 + pow(sunDot, 3.0) * 0.95);
        vec3 cloudCol = mix(cloudDark, cloudLit, smoothstep(0.38, 0.75, c2));
        sky = mix(sky, cloudCol, cloudAlpha * 0.68);
      }

      return sky;
    }

    // ==========================================================================
    // PROCEDURAL 3D COCONUT PALM TREE EVALUATOR (CURVED TRUNK + PINNATE FRONDS)
    // ==========================================================================
    // Returns vec4(hitAlpha, shadeFactor, isTrunk, hitT)
    vec4 evalPalmTree(
      vec3 ro,
      vec3 rd,
      vec3 basePos,
      float height,
      vec2 lean,
      float seed,
      vec3 sunDir,
      bool isBaseline,
      float maxT
    ) {
      vec3 crownCenter = basePos + vec3(lean.x, height, lean.y);
      float crownRadius = isBaseline ? 1.55 : 2.35;

      // Bounding sphere test around entire palm tree
      vec3 treeMid = mix(basePos, crownCenter, 0.55);
      float boundR = height * 0.65 + crownRadius;
      vec3 oc = ro - treeMid;
      float b = dot(oc, rd);
      float c = dot(oc, oc) - boundR * boundR;
      if (b > 0.0 && c > 0.0) return vec4(0.0);
      float disc = b * b - c;
      if (disc < 0.0) return vec4(0.0);

      float bestAlpha = 0.0;
      float bestShade = 0.0;
      float bestIsTrunk = 0.0;
      float bestT = maxT;

      // 1. Curved Trunk Intersection (Analytical Ray-Curve Closest Approach)
      float tApprox = clamp(dot(treeMid - ro, rd), 0.5, maxT);
      for (int stepIdx = 0; stepIdx < 3; stepIdx++) {
        vec3 p = ro + rd * tApprox;
        float hNorm = clamp((p.y - basePos.y) / height, 0.0, 1.0);
        float curveF = isBaseline ? hNorm : pow(hNorm, 1.45);
        vec3 spine = basePos + vec3(lean.x * curveF, hNorm * height, lean.y * curveF);
        tApprox = clamp(dot(spine - ro, rd), 0.5, maxT);
      }

      if (tApprox < maxT) {
        vec3 p = ro + rd * tApprox;
        float hNorm = (p.y - basePos.y) / height;
        if (hNorm >= -0.02 && hNorm <= 1.02) {
          float hc = clamp(hNorm, 0.0, 1.0);
          float curveF = isBaseline ? hc : pow(hc, 1.45);
          vec3 spine = basePos + vec3(lean.x * curveF, hc * height, lean.y * curveF);
          float trunkR = mix(0.18, 0.075, hc) * (1.0 + (hc < 0.15 ? (0.15 - hc) * 2.2 : 0.0));
          if (!isBaseline) {
            trunkR *= 1.0 + 0.04 * sin(hc * 55.0);
          }
          float distToSpine = length(p.xz - spine.xz);
          if (distToSpine < trunkR) {
            bestAlpha = smoothstep(trunkR, trunkR * 0.65, distToSpine);
            vec3 trunkN = normalize(vec3(p.x - spine.x, 0.1, p.z - spine.z));
            float ringTex = isBaseline ? 1.0 : (0.75 + 0.25 * sin(hc * 65.0));
            bestShade = clamp(dot(trunkN, sunDir) * 0.5 + 0.5, 0.1, 1.0) * ringTex;
            bestIsTrunk = 1.0;
            bestT = tApprox;
          }
        }
      }

      // 2. Arching Pinnate Frond Crown Intersection
      vec3 ocCrown = ro - crownCenter;
      float bC = dot(ocCrown, rd);
      float cC = dot(ocCrown, ocCrown) - crownRadius * crownRadius;
      float discC = bC * bC - cC;
      if (discC > 0.0) {
        float sqrtD = sqrt(discC);
        float t0 = max(0.2, -bC - sqrtD);
        float t1 = min(bestT, -bC + sqrtD);
        if (t1 > t0) {
          // Sample 5 slices through the crown volume to capture multi-layered arching fronds
          for (int s = 0; s < 5; s++) {
            float frac = (float(s) + 0.5) / 5.0;
            float tS = mix(t0, t1, frac);
            vec3 q = ro + rd * tS - crownCenter;

            // Gentle tropical breeze sway on crown
            float sway = sin(uTime * 2.1 + seed * 3.7 + q.x * 0.8) * 0.09 * (0.4 + uWaveStrength * 0.8);
            q.y += sway * length(q.xz) * 0.35;

            float rXZ = length(q.xz);
            float r3D = length(q);
            if (r3D < crownRadius && rXZ > 0.04) {
              float angle = atan(q.z, q.x) + seed * 2.1;
              float numFronds = isBaseline ? 7.0 : 13.0;

              // Two overlapping spiral whorls of fronds
              for (int w = 0; w < 2; w++) {
                float wOffset = float(w) * 1.9 + seed;
                float whorlPitch = w == 0 ? 0.28 : -0.08;
                float reach = rXZ / crownRadius;

                // Parabolic gravity arch of the frond rachis
                float expectedY = (whorlPitch + sin(reach * PI * 0.72) * 0.52 - pow(reach, 1.85) * 1.15) * crownRadius * 0.62;
                float dy = abs(q.y - expectedY);

                // Angular distance to nearest frond rachis
                float sector = (angle + wOffset + reach * 0.28) * (numFronds / (2.0 * PI));
                float frondPhase = abs(fract(sector) - 0.5) * 2.0; // 0 along rachis -> 1 between fronds

                // Envelope of frond width along its length
                float frondWidthEnv = sin(pow(clamp(reach, 0.0, 1.0), 0.75) * PI);
                float thicknessY = isBaseline ? 0.22 : (0.14 + reach * 0.16);

                if (dy < thicknessY && frondPhase < frondWidthEnv * 0.92) {
                  float leafletMask = 1.0;
                  if (!isBaseline) {
                    // Individual feathery pinnate leaflets combed along each frond!
                    float comb = sin(reach * 48.0 - frondPhase * 22.0 + float(w) * 3.1);
                    leafletMask = smoothstep(-0.35, 0.45, comb) * (1.0 - pow(frondPhase / max(0.01, frondWidthEnv), 1.6));
                    // Central rachis stem is always solid
                    leafletMask = max(leafletMask, smoothstep(0.14, 0.03, frondPhase));
                  } else {
                    leafletMask = smoothstep(frondWidthEnv * 0.7, 0.0, frondPhase);
                  }

                  float sliceAlpha = leafletMask * smoothstep(thicknessY, thicknessY * 0.2, dy) * smoothstep(1.0, 0.78, reach);
                  if (sliceAlpha > 0.22) {
                    float sunLit = clamp(dot(normalize(q + vec3(0.0, 0.4, 0.0)), sunDir) * 0.5 + 0.5, 0.08, 1.0);
                    bestAlpha = max(bestAlpha, sliceAlpha);
                    bestShade = mix(bestShade, sunLit, sliceAlpha);
                    bestIsTrunk = 0.0;
                    bestT = min(bestT, tS);
                    if (bestAlpha > 0.85) break;
                  }
                }
              }
            }
          }
        }
      }

      return vec4(bestAlpha, bestShade, bestIsTrunk, bestT);
    }

    // ==========================================================================
    // OCEAN WAVE NORMAL & CORAL REEF WATER OPTICS
    // ==========================================================================
    vec3 getOceanNormal(vec2 p, float t, bool isBaseline) {
      if (isBaseline) {
        float dx = cos(p.x * 1.8 + t * 1.6) * 0.08;
        float dz = sin(p.y * 1.8 - t * 1.4) * 0.08;
        return normalize(vec3(-dx, 1.0, -dz));
      }
      float amp = 0.05 + uWaveStrength * 0.075;
      vec2 d = vec2(0.0);
      // Multi-directional Gerstner + FBM capillary facets
      d.x += cos(p.x * 0.65 + p.y * 0.35 + t * 1.8) * 0.65;
      d.y += cos(p.x * 0.65 + p.y * 0.35 + t * 1.8) * 0.35;

      d.x += -sin(p.x * 1.4 - p.y * 1.1 + t * 2.4) * 0.45;
      d.y += cos(p.x * 1.4 - p.y * 1.1 + t * 2.4) * 0.45;

      d.x += cos(p.x * 3.8 + p.y * 2.9 - t * 3.5) * 0.28;
      d.y += sin(p.x * 3.8 + p.y * 2.9 - t * 3.5) * 0.28;

      // High-frequency micro-ripples for realistic anisotropic sun sparkle
      float n1 = noise2D(p * 4.5 + vec2(t * 1.1, -t * 0.9)) - 0.5;
      float n2 = noise2D(p * 11.2 - vec2(t * 1.7, t * 1.4)) - 0.5;
      d += vec2(n1 * 0.55 + n2 * 0.35, -n1 * 0.45 + n2 * 0.38);

      return normalize(vec3(-d.x * amp * 2.4, 1.0, -d.y * amp * 2.4));
    }

    // ==========================================================================
    // SCENE 01: SUNSET ATOLL (00:00 - 00:05)
    // ==========================================================================
    float getAtollSandHeight(vec2 p, bool isBaseline) {
      // Elongated coral sandbar island centered at (2.2, -9.0)
      vec2 q = (p - vec2(2.4, -9.0)) / vec2(12.2, 4.4);
      // Left tip tapers into a low sandy spit
      float r2 = dot(q, q);
      if (r2 > 1.8) return -2.5;
      float spitProfile = smoothstep(-1.1, 0.2, q.x);
      float baseH = (1.0 - r2) * (0.45 + spitProfile * 0.65);
      if (!isBaseline) {
        baseH += (fbm4(p * 0.45) - 0.5) * 0.25;
      }
      return baseH;
    }

    float getAtollShrubHeight(vec2 p, bool isBaseline) {
      if (isBaseline) return -5.0;
      vec2 q = (p - vec2(3.4, -9.0)) / vec2(9.8, 3.3);
      float r2 = dot(q, q);
      if (r2 > 1.05) return -5.0;
      float dome = sqrt(max(0.0, 1.0 - r2)) * 1.85;
      // Billowy tropical shrub clusters
      float bushFbm = fbm6(p * 1.35 + vec2(2.1, 4.7));
      return 0.35 + dome * (0.55 + bushFbm * 0.85);
    }

    vec3 renderScene1Atoll(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 0, isBaseline);
      vec3 finalCol = skyCol;
      float maxT = 180.0;

      // 1. Raymarch Island Sandbar & Lush Tropical Shrub Undergrowth
      float hitT = maxT;
      int hitMat = 0; // 0=sky, 1=sand, 2=shrub
      vec3 hitPos = vec3(0.0);

      // Bounding slab for island (z in [-16, -2], y in [-0.2, 3.8])
      float tStart = max(0.5, (-2.0 - ro.z) / min(-0.001, rd.z));
      float tEnd = min(80.0, (-16.5 - ro.z) / min(-0.001, rd.z));
      if (rd.z < 0.0 && tEnd > tStart) {
        float t = tStart;
        for (int i = 0; i < 48; i++) {
          vec3 p = ro + rd * t;
          if (p.y < -0.05 || t > tEnd) break;
          float hSand = getAtollSandHeight(p.xz, isBaseline);
          float hShrub = getAtollShrubHeight(p.xz, isBaseline);
          float hMax = max(hSand, hShrub);
          float diff = p.y - hMax;
          if (diff < 0.03) {
            hitT = t;
            hitPos = p;
            hitMat = (hShrub > hSand) ? 2 : 1;
            break;
          }
          t += max(0.14, diff * 0.55);
        }
      }

      if (hitMat == 1) {
        // Coral Sand Beach Spit
        vec2 eps = vec2(0.08, 0.0);
        vec3 N = normalize(vec3(
          getAtollSandHeight(hitPos.xz - eps.xy, isBaseline) - getAtollSandHeight(hitPos.xz + eps.xy, isBaseline),
          0.16,
          getAtollSandHeight(hitPos.xz - eps.yx, isBaseline) - getAtollSandHeight(hitPos.xz + eps.yx, isBaseline)
        ));
        float wetness = smoothstep(0.35, 0.02, hitPos.y);
        vec3 sandAlbedo = mix(vec3(0.84, 0.73, 0.58), vec3(0.45, 0.38, 0.30), wetness);
        float diff = max(dot(N, sunDir), 0.0);
        finalCol = sandAlbedo * (vec3(0.26, 0.30, 0.36) + vec3(1.1, 0.78, 0.45) * diff);
      } else if (hitMat == 2) {
        // Dense Tropical Undergrowth Foliage with Golden Rim Scattering
        vec2 eps = vec2(0.06, 0.0);
        vec3 N = normalize(vec3(
          getAtollShrubHeight(hitPos.xz - eps.xy, false) - getAtollShrubHeight(hitPos.xz + eps.xy, false),
          0.12,
          getAtollShrubHeight(hitPos.xz - eps.yx, false) - getAtollShrubHeight(hitPos.xz + eps.yx, false)
        ));
        float leafDetail = fbm4(hitPos.xz * 4.5);
        vec3 leafDark = vec3(0.04, 0.09, 0.04);
        vec3 leafLit = vec3(0.22, 0.38, 0.12);
        float sunFace = clamp(dot(N, sunDir) * 0.5 + 0.5, 0.0, 1.0);
        float rim = pow(clamp(1.0 - max(dot(-rd, N), 0.0), 0.0, 1.0), 2.5) * pow(max(dot(rd, sunDir), 0.0), 2.0);
        finalCol = mix(leafDark, leafLit, sunFace * leafDetail) + vec3(0.85, 0.55, 0.18) * rim * 0.75;
      }

      // 2. Evaluate 22 Curved Coconut Palms across the Atoll Island
      int palmCount = isBaseline ? 9 : 22;
      for (int i = 0; i < 22; i++) {
        if (i >= palmCount) break;
        float fi = float(i);
        float u = fi / float(palmCount - 1);
        float px = mix(-6.8, 12.2, u) + (isBaseline ? 0.0 : sin(fi * 4.7) * 0.55);
        float pz = -8.8 + cos(fi * 3.3) * 1.9;
        float env = sin(pow(u, 0.85) * PI);
        float ph = (isBaseline ? 3.2 : 3.6) + env * (isBaseline ? 1.4 : 3.1) + mod(fi, 3.0) * 0.45;
        vec2 lean = isBaseline
          ? vec2(0.0)
          : vec2((u - 0.38) * 1.9 + sin(fi * 2.9) * 0.55, cos(fi * 4.1) * 0.65);
        vec3 baseP = vec3(px, max(0.15, getAtollSandHeight(vec2(px, pz), isBaseline)), pz);

        vec4 pHit = evalPalmTree(ro, rd, baseP, ph, lean, fi * 1.7 + 1.0, sunDir, isBaseline, hitT);
        if (pHit.x > 0.05 && pHit.w < hitT) {
          float sunBack = pow(max(dot(rd, sunDir), 0.0), 3.0);
          vec3 trunkCol = isBaseline
            ? vec3(0.55, 0.38, 0.24) * (0.4 + pHit.y * 0.6)
            : mix(vec3(0.05, 0.04, 0.03), vec3(0.28, 0.20, 0.13), pHit.y);
          vec3 frondCol = isBaseline
            ? vec3(0.32, 0.48, 0.20) * (0.4 + pHit.y * 0.6)
            : mix(vec3(0.03, 0.07, 0.02), vec3(0.24, 0.38, 0.11), pHit.y) +
              vec3(0.95, 0.64, 0.20) * sunBack * (1.0 - pHit.y * 0.4) * 0.65;
          vec3 treeCol = mix(frondCol, trunkCol, pHit.z);
          finalCol = mix(finalCol, treeCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Ocean Plane Intersection (y = 0.0) with Coral Reef Caustics & Island Reflection
      if (rd.y < -0.001) {
        float tWater = -ro.y / rd.y;
        if (tWater > 0.1 && tWater < hitT) {
          vec3 wPos = ro + rd * tWater;
          vec3 N = getOceanNormal(wPos.xz, uTime, isBaseline);
          vec3 viewDir = -rd;

          if (isBaseline) {
            float fres = pow(1.0 - max(dot(viewDir, N), 0.0), 3.0);
            finalCol = mix(vec3(0.14, 0.52, 0.66), skyCol, fres * 0.45);
          } else {
            // Shallow reef distance & coral patch reefs (matching dark reef patches on right of Scene 1)
            float islandGroundH = getAtollSandHeight(wPos.xz, false);
            float waterDepth = clamp(0.65 - islandGroundH, 0.05, 4.0);
            float shallowMask = smoothstep(3.8, 0.2, waterDepth);

            float reefFbm = fbm6(wPos.xz * 0.28 + vec2(1.4, 2.8));
            float rightBias = smoothstep(-3.0, 5.0, wPos.x);
            float coralPatch = smoothstep(0.43, 0.63, reefFbm) * mix(0.45, 1.0, rightBias);

            float caustics = causticPattern(wPos.xz * 0.9 + N.xz * 0.4, uTime);
            vec3 sandBed = vec3(0.18, 0.72, 0.70) + vec3(0.95, 0.85, 0.60) * caustics * 0.42;
            vec3 darkCoral = vec3(0.02, 0.08, 0.13) + vec3(0.08, 0.24, 0.28) * caustics * 0.20;
            vec3 reefBed = mix(sandBed, darkCoral, coralPatch * 0.88);

            vec3 deepSea = vec3(0.03, 0.16, 0.26);
            vec3 midSea = vec3(0.07, 0.42, 0.52);
            vec3 seaBody = mix(deepSea, midSea, smoothstep(0.0, 0.6, shallowMask));
            seaBody = mix(seaBody, reefBed, shallowMask * 0.82 * uClarity);

            // Reflection of sky AND dark island silhouette in the water ripples
            vec3 reflDir = reflect(rd, N);
            reflDir.y = max(0.01, reflDir.y);
            vec3 reflCol = renderSky(reflDir, sunDir, 0, false);

            // Check if reflected ray points toward the dark backlit island & palms
            if (wPos.z > -8.5 && reflDir.z < -0.1) {
              float tIsl = (-9.0 - wPos.z) / reflDir.z;
              vec3 rIsl = wPos + reflDir * tIsl;
              float rMask = smoothstep(13.0, 7.0, abs(rIsl.x - 2.8)) * smoothstep(7.5, 1.5, rIsl.y);
              reflCol = mix(reflCol, vec3(0.04, 0.07, 0.04), rMask * 0.78);
            }

            float fresnel = pow(1.0 - max(dot(viewDir, N), 0.0), 4.0);
            vec3 col = mix(seaBody, reflCol, clamp(0.18 + fresnel * 0.76, 0.0, 0.95));

            // Blazing golden solar glitter path across the water facets
            vec3 halfV = normalize(sunDir + viewDir);
            float NdotH = max(dot(N, halfV), 0.0);
            float glint = pow(NdotH, 280.0) * 4.2 + pow(NdotH, 32.0) * 0.65;
            col += vec3(1.0, 0.85, 0.55) * glint;

            // Gentle white shoreline foam lapping the left sandy spit
            float shoreFoam = smoothstep(0.28, 0.02, waterDepth) *
                              smoothstep(0.45, 0.85, sin(waterDepth * 18.0 - uTime * 2.5) * 0.5 + 0.5);
            col = mix(col, vec3(0.96, 0.95, 0.92), shoreFoam * 0.65);

            finalCol = col;
          }
        }
      }

      // Crepuscular golden sun flare
      float sunGlow = pow(max(dot(rd, sunDir), 0.0), 8.0);
      finalCol += vec3(1.0, 0.65, 0.28) * sunGlow * (isBaseline ? 0.05 : 0.18);

      return finalCol;
    }

    // ==========================================================================
    // SCENE 02: CLIFFSIDE LUXURY VILLAS & WET SHORELINE (00:05 - 00:10)
    // ==========================================================================
    float sdBox(vec3 p, vec3 b) {
      vec3 q = abs(p) - b;
      return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
    }

    // Evaluates the 3 stepped cantilevered luxury villas & lower terrace
    // Returns vec2(dist, matId): matId 3=travertine, 4=teak wood, 5=glass/interior
    vec2 mapVillas(vec3 p) {
      vec2 res = vec2(1e5, 0.0);

      // Foreground-left lower limestone beachfront terrace (z in [3.5, 11.5], x in [-8.5, -2.5])
      float dTerrace = sdBox(p - vec3(-5.5, 0.95, 7.5), vec3(3.2, 0.95, 3.8));
      if (dTerrace < res.x) res = vec2(dTerrace, 3.0);

      // 3 Stepped Two-Story Modern Villas along the coastal bluff
      for (int v = 0; v < 3; v++) {
        float fv = float(v);
        vec3 vc = vec3(-8.2 - fv * 1.1, 2.2 + fv * 0.45, 4.2 - fv * 10.5);
        vec3 q = p - vc;

        // Ground & Upper Floor Travertine Slabs & Piers
        float slab1 = sdBox(q - vec3(0.2, 0.0, 0.0), vec3(4.2, 0.22, 3.8));
        float slab2 = sdBox(q - vec3(0.4, 2.35, 0.0), vec3(4.5, 0.24, 4.0));
        float pier = sdBox(q - vec3(-2.6, 2.2, 0.0), vec3(0.8, 2.2, 3.6));
        float dStone = min(min(slab1, slab2), pier);
        if (dStone < res.x) res = vec2(dStone, 3.0);

        // Warm Fluted Teak Roof Overhangs
        float teakMid = sdBox(q - vec3(0.45, 2.62, 0.0), vec3(4.6, 0.22, 4.1));
        float teakTop = sdBox(q - vec3(0.3, 4.85, 0.0), vec3(4.8, 0.32, 4.3));
        float dTeak = min(teakMid, teakTop);
        if (dTeak < res.x) res = vec2(dTeak, 4.0);

        // Floor-to-ceiling Architectural Glass Rooms
        float glass1 = sdBox(q - vec3(0.2, 1.2, 0.0), vec3(3.4, 1.1, 3.2));
        float glass2 = sdBox(q - vec3(-0.1, 3.6, 0.0), vec3(3.2, 1.05, 3.0));
        float dGlass = min(glass1, glass2);
        if (dGlass < res.x) res = vec2(dGlass, 5.0);
      }

      return res;
    }

    float mapCliffRock(vec3 p, bool isBaseline) {
      // Coastal headland bluff on the left (x < -3.2, z > -26.0)
      float endCap = smoothstep(-28.0, -21.0, p.z);
      if (endCap <= 0.001) return 1e5;

      if (isBaseline) {
        // Voxelized cubic rock blocks matching "1st Attempt" in the video!
        vec3 vp = floor(p * 0.85) / 0.85 + 0.58;
        float wallX = -4.2 - max(0.0, (-12.0 - vp.z) * 0.15) + sin(vp.z * 0.3) * 0.8;
        float maxH = (2.8 + smoothstep(-2.0, -8.0, vp.x) * 2.5) * endCap;
        if (p.y > maxH + 0.8 || p.x > wallX + 1.8) return max(p.x - wallX, p.y - maxH);
        return max(p.x - wallX, p.y - maxH);
      } else {
        float f = fbm6(p.yz * 0.28 + vec2(p.x * 0.18, 1.3));
        float strata = sin(p.y * 4.5 + f * 3.0) * 0.18;
        float wallX = -3.8 - max(0.0, (-10.0 - p.z) * 0.14) + (f - 0.5) * 2.4 + strata;
        float maxH = (2.6 + smoothstep(-2.5, -9.5, p.x) * 3.2) * endCap + f * 0.8;
        return max(p.x - wallX, p.y - maxH);
      }
    }

    vec3 shadeCliffAndVillas(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline, out float hitDist) {
      vec3 skyCol = renderSky(rd, sunDir, 1, isBaseline);
      hitDist = 180.0;

      // Trace Cliff & Villas on the left side
      float t = 1.0;
      int matId = 0;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        if (t > 95.0 || p.y > 16.0 || p.y < -0.5) break;

        vec2 dVilla = mapVillas(p);
        float dCliff = mapCliffRock(p, isBaseline);
        float dMin = min(dVilla.x, dCliff);

        if (dMin < 0.035) {
          hitDist = t;
          hitPos = p;
          matId = (dVilla.x < dCliff) ? int(dVilla.y) : 2;
          break;
        }
        t += max(0.12, dMin * 0.55);
      }

      vec3 col = skyCol;
      if (matId > 0) {
        // Numerical normal
        vec2 e = vec2(0.04, 0.0);
        vec3 N;
        if (matId == 2) {
          N = normalize(vec3(
            mapCliffRock(hitPos + e.xyy, isBaseline) - mapCliffRock(hitPos - e.xyy, isBaseline),
            mapCliffRock(hitPos + e.yxy, isBaseline) - mapCliffRock(hitPos - e.yxy, isBaseline),
            mapCliffRock(hitPos + e.yyx, isBaseline) - mapCliffRock(hitPos - e.yyx, isBaseline)
          ));
        } else {
          N = normalize(vec3(
            mapVillas(hitPos + e.xyy).x - mapVillas(hitPos - e.xyy).x,
            mapVillas(hitPos + e.yxy).x - mapVillas(hitPos - e.yxy).x,
            mapVillas(hitPos + e.yyx).x - mapVillas(hitPos - e.yyx).x
          ));
        }

        float diff = max(dot(N, sunDir), 0.0);
        vec3 sunLightCol = vec3(1.15, 0.82, 0.52);
        vec3 ambCol = vec3(0.28, 0.34, 0.42);

        if (matId == 2) {
          if (isBaseline) {
            // Blocky beige voxel rock
            col = vec3(0.84, 0.72, 0.58) * (ambCol + sunLightCol * diff);
          } else {
            // Weathered dark coastal basalt + cascading lush tropical cliff shrubs
            float rockTex = fbm6(hitPos.yz * 1.8);
            float foliageMask = smoothstep(0.25, 0.68, N.y + (rockTex - 0.45) * 0.75) *
                                smoothstep(0.4, 1.4, hitPos.y);
            vec3 rockAlb = mix(vec3(0.16, 0.13, 0.11), vec3(0.36, 0.30, 0.24), rockTex);
            vec3 shrubAlb = mix(vec3(0.08, 0.18, 0.06), vec3(0.26, 0.42, 0.14), rockTex);
            vec3 alb = mix(rockAlb, shrubAlb, foliageMask);
            col = alb * (ambCol + sunLightCol * diff);
          }
        } else if (matId == 3) {
          // Cream architectural travertine limestone
          vec3 alb = vec3(0.88, 0.81, 0.71);
          col = alb * (ambCol + sunLightCol * diff);
        } else if (matId == 4) {
          // Warm fluted teak timber overhangs
          float plank = isBaseline ? 1.0 : (0.85 + 0.15 * sin(hitPos.z * 14.0));
          vec3 alb = (isBaseline ? vec3(0.76, 0.62, 0.46) : vec3(0.62, 0.36, 0.18)) * plank;
          col = alb * (ambCol + sunLightCol * diff);
        } else if (matId == 5) {
          // Architectural Glass Curtain Wall with Warm 2700K Lit Interior + Sky Reflection
          float mullion = smoothstep(0.06, 0.02, abs(fract(hitPos.z * 0.55) - 0.5));
          vec3 refl = renderSky(reflect(rd, N), sunDir, 1, isBaseline);
          float fres = pow(1.0 - max(dot(-rd, N), 0.0), 3.0);
          vec3 interiorWarm = isBaseline
            ? vec3(0.25, 0.30, 0.34)
            : mix(vec3(0.18, 0.22, 0.26), vec3(1.15, 0.76, 0.38), 0.65 * (0.5 + 0.5 * sin(hitPos.z * 1.2)));
          col = mix(interiorWarm, refl, 0.35 + fres * 0.55) * (1.0 - mullion * 0.7);
        }

        // Distance aerial perspective haze
        float fog = 1.0 - exp(-hitDist * 0.006);
        col = mix(col, skyCol, fog);
      }

      // Evaluate foreground-left hero palm & cliff palms
      vec3 palmCoords[6];
      palmCoords[0] = vec3(-3.8, 1.2, 12.5); // Hero foreground-left palm
      palmCoords[1] = vec3(-5.2, 1.8, 9.2);
      palmCoords[2] = vec3(-5.6, 2.4, -1.2);
      palmCoords[3] = vec3(-6.4, 2.8, -11.8);
      palmCoords[4] = vec3(-7.2, 3.1, -22.5);
      palmCoords[5] = vec3(-8.0, 3.2, -25.0);

      for (int i = 0; i < 6; i++) {
        if (isBaseline && i < 2) continue; // Baseline has no foreground palm on left
        float fi = float(i);
        vec2 lean = vec2(1.4 + sin(fi * 2.1) * 0.5, cos(fi * 3.3) * 0.5);
        vec4 pHit = evalPalmTree(
          ro,
          rd,
          palmCoords[i],
          6.2 - fi * 0.25,
          lean,
          fi * 3.1 + 10.0,
          sunDir,
          isBaseline,
          hitDist
        );
        if (pHit.x > 0.05 && pHit.w < hitDist) {
          vec3 treeCol = mix(
            vec3(0.14, 0.26, 0.08) * (0.35 + pHit.y * 0.85),
            vec3(0.22, 0.16, 0.11) * (0.35 + pHit.y * 0.75),
            pHit.z
          );
          col = mix(col, treeCol, pHit.x);
          if (pHit.x > 0.75) hitDist = pHit.w;
        }
      }

      return col;
    }

    vec3 renderScene2Villas(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      float sceneHitDist = 180.0;
      vec3 upperCol = shadeCliffAndVillas(ro, rd, sunDir, isBaseline, sceneHitDist);

      // Sloped Sandy Beach & Rolling Shorebreak Swash Plane Intersection
      // Beach surface: y = clamp(0.35 - (x - shoreCurve) * 0.065, -0.1, 1.2)
      if (rd.y < 0.02) {
        float tBeach = (0.12 - ro.y) / min(-0.001, rd.y);
        if (tBeach > 0.2 && tBeach < sceneHitDist) {
          vec3 bPos = ro + rd * tBeach;
          float shoreCurve = sin(bPos.z * 0.08) * 1.4 + cos(bPos.z * 0.17) * 0.55;
          float relX = bPos.x - shoreCurve;

          // Animated rolling swash waves coming from the right (+x)
          float swash1 = 1.2 + sin(uTime * 1.4 - bPos.z * 0.22 + sin(bPos.z * 0.1) * 1.5) * (1.8 + uWaveStrength * 0.9);
          float swash2 = 3.6 + sin(uTime * 1.85 - bPos.z * 0.26 + 2.2) * (1.6 + uWaveStrength * 0.8);
          float swash3 = 6.4 + sin(uTime * 2.1 - bPos.z * 0.20 + 4.1) * 1.5;

          float sandN = fbm4(bPos.xz * 4.5);
          float maxWetX = -1.8 + sin(bPos.z * 0.18) * 0.65;
          float wetness = isBaseline
            ? smoothstep(0.2, 2.2, relX)
            : smoothstep(maxWetX - 1.2, maxWetX + 1.5, relX);
          float waterMask = smoothstep(swash1 - 0.25, swash1 + 0.45, relX);

          // Base dry coral sand vs darkened wet sand
          vec3 drySand = vec3(0.78, 0.67, 0.54) + (sandN - 0.5) * (isBaseline ? 0.01 : 0.06);
          vec3 wetSand = vec3(0.46, 0.38, 0.31);
          vec3 col = mix(drySand, wetSand, wetness);

          // TRUE 3D RAY-TRACED REFLECTION ON THE MIRROR-WET SAND & SHALLOW SURF!
          vec3 surfNormal = normalize(vec3(
            0.05 + (sandN - 0.5) * 0.03 * (1.0 - wetness * 0.8),
            1.0,
            (noise2D(bPos.xz * 8.0) - 0.5) * 0.025
          ));
          if (waterMask > 0.1) {
            surfNormal = mix(surfNormal, getOceanNormal(bPos.xz, uTime, isBaseline), waterMask * 0.75);
          }

          vec3 reflRd = reflect(rd, surfNormal);
          reflRd.y = max(0.015, abs(reflRd.y));
          float dummyDist;
          vec3 reflScene = shadeCliffAndVillas(bPos + vec3(0.0, 0.08, 0.0), reflRd, sunDir, isBaseline, dummyDist);

          float fresnel = pow(1.0 - max(dot(-rd, surfNormal), 0.0), 3.2);
          float reflWeight = wetness * (isBaseline ? 0.22 : (0.38 + fresnel * 0.52));

          // Turquoise ocean water on the right side (relX > swash1)
          vec3 oceanTint = mix(vec3(0.22, 0.68, 0.72), vec3(0.08, 0.42, 0.54), clamp((relX - swash1) * 0.18, 0.0, 1.0));
          col = mix(col, oceanTint, waterMask * 0.78);
          col = mix(col, reflScene, clamp(reflWeight, 0.0, 0.88));

          // Multi-layered lacy white seafoam swash lines
          float lace = isBaseline ? 0.5 : fbm4(bPos.xz * 3.6 + vec2(uTime * 0.4, -uTime * 0.25));
          float foam1 = smoothstep(0.65, 0.05, abs(relX - swash1)) +
                        smoothstep(2.2, 0.0, relX - swash1) * smoothstep(-0.1, 0.4, relX - swash1) * smoothstep(0.32, 0.68, lace) * 0.65;
          float foam2 = smoothstep(0.85, 0.08, abs(relX - swash2)) * (0.65 + lace * 0.35);
          float foam3 = smoothstep(1.05, 0.10, abs(relX - swash3)) * (0.55 + lace * 0.45);

          float totalFoam = isBaseline
            ? clamp(smoothstep(0.45, 0.05, abs(relX - swash1)) + foam2 * 0.5, 0.0, 1.0)
            : clamp(foam1 * 0.92 + foam2 * 0.85 + foam3 * 0.75, 0.0, 1.0);

          col = mix(col, vec3(0.96, 0.95, 0.92), totalFoam);
          upperCol = col;
        }
      }

      return upperCol;
    }

    // ==========================================================================
    // SCENE 03: RAINFOREST CANOPY & TWIN-CLIFF WATERFALL GORGE (00:10 - 00:15)
    // ==========================================================================
    // Returns vec2(height, matType): matType 1=striated cliff rock, 2=waterfall chute, 3=rainforest canopy
    vec2 getWaterfallGorgeSurface(vec2 p, bool isBaseline) {
      // Back canyon cliff wall at z < -18
      float canyonNotch = abs(p.x) - (3.8 + max(0.0, (p.y + 24.0) * 0.15));
      float cliffMask = smoothstep(-14.0, -24.0, p.y);

      // Steep valley side ridges rising on left (x < -8) and right (x > +8)
      float sideValley = pow(max(0.0, (abs(p.x) - 2.2) / 18.0), 1.45) * 18.0;

      if (p.y < -18.5) {
        // Towering Twin Canyon Cliffs & Central Waterfall Notch
        float fRock = isBaseline ? 0.4 : ridgedFbm(p * 0.22);
        float cliffH = 26.0 + sideValley * 0.55 + fRock * 5.5;
        // Central V-notch where the cataract plunges (|x| < 4.8)
        float notchFactor = smoothstep(1.8, 5.8, abs(p.x));
        float lipH = 19.8 + sin(p.x * 1.4) * 0.45;
        float h = mix(lipH, cliffH, notchFactor);

        // Top of cliffs is carpeted in lush rainforest canopy
        if (abs(p.x) > 5.8 && h > 24.5) {
          float topTree = isBaseline
            ? sin(p.x * 1.5) * cos(p.y * 1.5) * 1.2
            : fbm6(p * 0.85) * 3.8;
          return vec2(h + topTree, 3.0);
        }
        return vec2(h, abs(p.x) < 4.9 ? 2.0 : 1.0);
      } else {
        // Foreground & Midground Undulating Rainforest Canopy Valley
        // Narrow central river channel at |x| < 1.8
        float riverCut = smoothstep(0.8, 3.2, abs(p.x));
        float treeCanopy = 0.0;
        if (isBaseline) {
          // Repetitive smooth spherical blobs matching "1st Attempt"
          vec2 cell = fract(p * 0.24) - 0.5;
          treeCanopy = sqrt(max(0.0, 0.28 - dot(cell, cell))) * 7.5;
        } else {
          // Billowy multi-octave cauliflower rainforest domes
          float domes = 1.0 - abs(noise2D(p * 0.32) * 2.0 - 1.0);
          float detail = fbm6(p * 1.15);
          treeCanopy = domes * 3.6 + detail * 2.8;
        }
        float h = 1.5 + (sideValley + 3.2 + treeCanopy) * riverCut;
        return vec2(h, riverCut < 0.2 ? 0.0 : 3.0);
      }
    }

    vec3 renderScene3Waterfall(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 2, isBaseline);
      vec3 col = skyCol;
      float hitT = 160.0;

      // 1. Raymarch the Canyon Cliffs, Waterfall Cataract & Rainforest Canopy
      float t = 1.5;
      int hitType = -1;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 84; i++) {
        vec3 p = ro + rd * t;
        if (t > 92.0 || p.y > 42.0 || p.y < 0.0) break;

        // Vertical waterfall cliff wall check around z in [-26, -18]
        vec2 surf = getWaterfallGorgeSurface(p.xz, isBaseline);
        float diff = p.y - surf.x;
        if (diff < 0.06) {
          hitT = t;
          hitPos = p;
          hitType = int(surf.y);
          break;
        }
        t += max(0.16, diff * 0.38);
      }

      if (hitType >= 0) {
        vec2 eps = vec2(0.12, 0.0);
        float hC = getWaterfallGorgeSurface(hitPos.xz, isBaseline).x;
        float hX = getWaterfallGorgeSurface(hitPos.xz + eps.xy, isBaseline).x;
        float hZ = getWaterfallGorgeSurface(hitPos.xz + eps.yx, isBaseline).x;
        vec3 N = normalize(vec3(hC - hX, 0.22, hC - hZ));

        float diff = clamp(dot(N, sunDir), 0.0, 1.0);

        if (hitType == 0) {
          // Glimpsed jungle river channel below the canopy
          col = vec3(0.08, 0.28, 0.36) + vec3(0.65, 0.75, 0.80) * pow(max(0.0, sin(hitPos.z * 3.0 + uTime * 3.0)), 4.0) * 0.25;
        } else if (hitType == 1) {
          // Striated vertical limestone/basalt canyon walls
          float strata = sin(hitPos.y * 2.8 + fbm4(hitPos.xy * 0.45) * 4.0);
          float vertStreaks = fbm6(vec2(hitPos.x * 1.8, hitPos.y * 0.25));
          vec3 rockCol = mix(vec3(0.14, 0.14, 0.13), vec3(0.38, 0.35, 0.31), vertStreaks * 0.75 + strata * 0.25);
          // Moss on gentler ledges
          float moss = smoothstep(0.35, 0.75, N.y) * smoothstep(10.0, 26.0, hitPos.y);
          rockCol = mix(rockCol, vec3(0.12, 0.26, 0.09), moss * 0.75);
          col = rockCol * (vec3(0.32, 0.38, 0.42) + vec3(1.1, 0.90, 0.65) * diff * 0.85);
        } else if (hitType == 2) {
          // Roaring Multi-Chute Waterfall Cataract!
          vec2 wfUv = vec2(hitPos.x * 0.55, hitPos.y * 0.18 + uTime * 1.45);
          float s1 = fbm6(wfUv * vec2(3.2, 1.8));
          float s2 = fbm4(vec2(hitPos.x * 3.8, hitPos.y * 0.42 + uTime * 2.4));
          float chuteMask = smoothstep(4.8, 2.2, abs(hitPos.x)) * (0.35 + 0.65 * sin(hitPos.x * 3.4 + s1 * 2.0));
          float lipFoam = smoothstep(16.5, 20.0, hitPos.y) * 0.65;
          float baseFoam = smoothstep(11.0, 5.5, hitPos.y) * 0.75;
          float waterIntensity = clamp((s1 * 0.6 + s2 * 0.5) * chuteMask + lipFoam + baseFoam, 0.0, 1.0);

          vec3 wetBasalt = vec3(0.15, 0.17, 0.18) * (0.5 + 0.5 * fbm4(hitPos.xy * 1.2));
          vec3 whiteWater = vec3(0.88, 0.93, 0.96);
          col = mix(wetBasalt, whiteWater, isBaseline ? 0.85 : smoothstep(0.18, 0.78, waterIntensity));
        } else {
          // Undulating Rainforest Canopy Domes
          float leafTex = isBaseline ? 0.5 : fbm6(hitPos.xz * 2.8);
          float canopyAO = smoothstep(3.5, 14.0, hitPos.y);
          vec3 darkLeaf = vec3(0.03, 0.08, 0.03);
          vec3 midLeaf = vec3(0.11, 0.26, 0.08);
          vec3 sunLeaf = vec3(0.34, 0.48, 0.14);
          vec3 treeCol = mix(darkLeaf, midLeaf, canopyAO * (0.5 + leafTex * 0.5));
          treeCol = mix(treeCol, sunLeaf, diff * (isBaseline ? 0.45 : (0.35 + leafTex * 0.65)));
          col = treeCol;
        }
      }

      // 2. Emergent Coconut & Royal Palms rising above the Rainforest Canopy (including the solitary waterfall-base palm!)
      for (int i = 0; i < 15; i++) {
        float fi = float(i);
        vec3 baseP;
        float ph = 6.2;
        vec2 lean = vec2(0.0);

        if (i == 0) {
          // Iconic solitary palm silhouetted against the misty base of the waterfall!
          baseP = vec3(0.35, 3.8, -14.5);
          ph = 5.4;
          lean = vec2(0.25, 0.35);
        } else {
          float row = floor(fi / 2.0);
          float side = mod(fi, 2.0) < 0.5 ? -1.0 : 1.0;
          float pz = 18.0 - row * 4.4 + sin(fi * 3.1) * 1.2;
          float px = side * (3.6 + mod(fi * 3.7, 7.5));
          float py = getWaterfallGorgeSurface(vec2(px, pz), isBaseline).x - 1.4;
          baseP = vec3(px, py, pz);
          ph = 5.2 + mod(fi, 3.0) * 1.1;
          lean = isBaseline ? vec2(0.0) : vec2(-side * 0.85 + sin(fi * 2.3) * 0.4, cos(fi * 1.9) * 0.5);
        }

        vec4 pHit = evalPalmTree(ro, rd, baseP, ph, lean, fi * 2.9 + 30.0, sunDir, isBaseline, hitT);
        if (pHit.x > 0.05 && pHit.w < hitT) {
          vec3 frondCol = mix(vec3(0.04, 0.11, 0.03), vec3(0.32, 0.46, 0.14), pHit.y);
          vec3 trunkCol = mix(vec3(0.06, 0.05, 0.04), vec3(0.24, 0.18, 0.13), pHit.y);
          vec3 pCol = mix(frondCol, trunkCol, pHit.z);
          col = mix(col, pCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Volumetric Waterfall Spray Mist & Diagonal Golden God-Ray Shafts
      if (!isBaseline) {
        // Rising mist cloud in the waterfall gorge basin (around x=0, y=8, z=-18)
        float tMist = clamp((-17.5 - ro.z) / min(-0.001, rd.z), 1.0, hitT);
        if (rd.z < 0.0 && tMist < hitT) {
          vec3 mPos = ro + rd * tMist;
          float mistRadial = exp(-dot(mPos.xy - vec2(0.0, 9.5), (mPos.xy - vec2(0.0, 9.5)) * vec2(0.018, 0.022)));
          float mistNoise = fbm4(mPos.xy * 0.35 - vec2(0.0, uTime * 0.28));
          float mistAlpha = clamp(mistRadial * (0.45 + mistNoise * 0.65) * uMistDensity * 0.68, 0.0, 0.78);
          col = mix(col, vec3(0.84, 0.88, 0.89), mistAlpha);
        }

        // Slanting Golden God-Ray Shafts from the top-right mountain ridge
        float rayCoord = rd.x * 0.78 - rd.y * 0.62;
        float shaftPattern = 0.5 + 0.5 * sin(rayCoord * 28.0 + uTime * 0.25) * cos(rayCoord * 17.0 - uTime * 0.18);
        float rightSunMask = smoothstep(-0.25, 0.45, rd.x) * smoothstep(-0.15, 0.35, rd.y) * smoothstep(8.0, 35.0, hitT);
        col += vec3(1.0, 0.78, 0.42) * shaftPattern * rightSunMask * 0.22 * uMistDensity;
      }

      // Valley atmospheric haze
      float haze = 1.0 - exp(-hitT * 0.0085);
      col = mix(col, vec3(0.76, 0.82, 0.78), haze * 0.55);

      return col;
    }

    // ==========================================================================
    // SCENE 04: CRESCENT BAY & COASTAL SANCTUARY PANORAMA (00:15 - 00:20)
    // ==========================================================================
    // Returns vec2(height, matType): 0=ocean, 1=mountain/forest, 2=white sand beach, 3=villa roof, 4=infinity pool
    vec2 getCrescentBayTerrain(vec2 p, bool isBaseline) {
      // Sweeping Crescent Coastline Curve:
      // Foreground valley at z > 8 opens out onto a curved bay on the left (x < 0) and headlands in distance
      float bayArc = -4.0 + sin(p.y * 0.065 + 0.8) * 14.0 - max(0.0, (p.y + 15.0) * 0.35);

      // 3 Receding Mountain Headlands jutting out on the left/background (z < -8)
      float headland1 = exp(-dot(p - vec2(-16.0, -24.0), (p - vec2(-16.0, -24.0)) * vec2(0.006, 0.012))) * 22.0;
      float headland2 = exp(-dot(p - vec2(-28.0, -56.0), (p - vec2(-28.0, -56.0)) * vec2(0.004, 0.009))) * 29.0;
      float headland3 = exp(-dot(p - vec2(-42.0, -92.0), (p - vec2(-42.0, -92.0)) * vec2(0.003, 0.007))) * 35.0;

      // Right-hand lush peninsula & foreground river valley slopes
      float rightHill = max(0.0, (p.x - bayArc) * 0.42);
      // Carve narrow river valley notch in the foreground (z > 6, x near 3.0)
      float fgValley = smoothstep(2.0, 12.0, p.y) * exp(-pow((p.x - 3.5) * 0.28, 2.0)) * 6.5;

      float baseTerrain = max(headland1, max(headland2, headland3)) + rightHill - fgValley - 1.2;

      if (baseTerrain < 0.0) {
        return vec2(baseTerrain, 0.0); // Underwater
      }

      // White-sand Crescent Beach zone along the waterline (0.0 <= baseTerrain < 0.85)
      if (baseTerrain < 0.78 && p.y < 8.0 && p.y > -38.0 && p.x > -18.0) {
        return vec2(baseTerrain * 0.45, 2.0);
      }

      // Luxury Eco-Resort Pavilion Cluster & Glowing Infinity Pools along the peninsula (p.x in [-3, 18], p.y in [-24, 6])
      if (p.y > -25.0 && p.y < 5.0 && baseTerrain > 0.45 && baseTerrain < 6.5) {
        vec2 cellId = floor(p * 0.22);
        vec2 cellLocal = fract(p * 0.22) - 0.5;
        float cellRand = hash12(cellId + vec2(7.3, 2.1));
        if (cellRand > 0.52) {
          // Resort Villa Pavilion Roof
          float boxD = max(abs(cellLocal.x), abs(cellLocal.y));
          if (boxD < 0.28) {
            float roofH = (0.28 - boxD) * 3.8 + 1.1;
            return vec2(baseTerrain + roofH, 3.0);
          }
          // Beachfront Infinity Pool deck on sea-facing side (-x) of front villas
          if (!isBaseline && baseTerrain < 2.2 && cellLocal.x < -0.26 && cellLocal.x > -0.44 && abs(cellLocal.y) < 0.22) {
            return vec2(baseTerrain + 0.35, 4.0);
          }
        }
      }

      // Forest canopy & mountain ridge roughness
      float detail = isBaseline
        ? sin(p.x * 0.8) * cos(p.y * 0.8) * 0.45
        : (ridgedFbm(p * 0.14) * 2.8 + fbm6(p * 0.95) * 1.45);

      return vec2(baseTerrain + detail, 1.0);
    }

    vec3 renderScene4CrescentBay(vec3 ro, vec3 rd, vec3 sunDir, bool isBaseline) {
      vec3 skyCol = renderSky(rd, sunDir, 3, isBaseline);
      vec3 col = skyCol;
      float hitT = 220.0;

      // 1. Raymarch the Coastal Mountains, Crescent Beach & Resort Peninsula
      float t = 2.0;
      int hitMat = -1;
      vec3 hitPos = vec3(0.0);

      for (int i = 0; i < 90; i++) {
        vec3 p = ro + rd * t;
        if (t > 145.0 || p.y > 46.0) break;
        if (p.y < 0.0) break; // Hits ocean plane

        vec2 terr = getCrescentBayTerrain(p.xz, isBaseline);
        float diff = p.y - max(0.0, terr.x);
        if (diff < 0.08 && terr.x > 0.0) {
          hitT = t;
          hitPos = p;
          hitMat = int(terr.y);
          break;
        }
        t += max(0.22, diff * 0.45);
      }

      if (hitMat > 0) {
        vec2 eps = vec2(0.18, 0.0);
        float hC = getCrescentBayTerrain(hitPos.xz, isBaseline).x;
        float hX = getCrescentBayTerrain(hitPos.xz + eps.xy, isBaseline).x;
        float hZ = getCrescentBayTerrain(hitPos.xz + eps.yx, isBaseline).x;
        vec3 N = normalize(vec3(hC - hX, 0.36, hC - hZ));

        float diff = clamp(dot(N, sunDir), 0.0, 1.0);

        if (hitMat == 2) {
          // Pristine white-sand Crescent Beach
          col = vec3(0.88, 0.80, 0.68) * (vec3(0.38, 0.42, 0.46) + vec3(1.05, 0.85, 0.62) * diff);
        } else if (hitMat == 3) {
          // Luxury Resort Pavilion Roofs (warm weathered timber & slate)
          col = (isBaseline ? vec3(0.48, 0.46, 0.44) : vec3(0.32, 0.25, 0.20)) *
                (vec3(0.35, 0.38, 0.42) + vec3(1.15, 0.88, 0.58) * diff);
        } else if (hitMat == 4) {
          // Glowing Turquoise Beachfront Infinity Pools!
          col = vec3(0.18, 0.88, 0.86) * 1.15;
        } else {
          // Lush Rainforest Canopy & Emergent Palms on Peninsula & Mountains
          float canopyFbm = isBaseline ? 0.5 : fbm6(hitPos.xz * 2.2);
          float palmDots = isBaseline ? 0.0 : smoothstep(0.68, 0.88, noise2D(hitPos.xz * 3.8));
          vec3 darkForest = vec3(0.04, 0.10, 0.04);
          vec3 midForest = vec3(0.12, 0.26, 0.09);
          vec3 sunlitCrown = vec3(0.38, 0.50, 0.16);
          vec3 alb = mix(darkForest, midForest, 0.35 + canopyFbm * 0.65);
          alb = mix(alb, sunlitCrown, diff * (0.4 + canopyFbm * 0.6) + palmDots * 0.35);
          col = alb * (0.55 + 0.65 * diff);
        }

        // Physical Golden Aerial Perspective Haze across the receding coastal headlands
        float hazeFactor = 1.0 - exp(-hitT * 0.0115);
        vec3 goldenHaze = mix(vec3(0.56, 0.66, 0.72), vec3(0.95, 0.76, 0.54), pow(max(dot(rd, sunDir), 0.0), 1.8));
        col = mix(col, goldenHaze, hazeFactor * 0.78);
      }

      // 2. Foreground Emergent Palm Crowns framing the River Valley (at z > 10)
      for (int i = 0; i < 8; i++) {
        float fi = float(i);
        float side = mod(fi, 2.0) < 0.5 ? -1.0 : 1.0;
        float pz = 14.0 + floor(fi / 2.0) * 3.8;
        float px = 3.5 + side * (3.2 + mod(fi * 2.3, 4.5));
        float py = max(1.0, getCrescentBayTerrain(vec2(px, pz), isBaseline).x - 1.2);
        vec4 pHit = evalPalmTree(
          ro,
          rd,
          vec3(px, py, pz),
          4.8 + mod(fi, 2.0) * 0.9,
          vec2(-side * 0.7, 0.3),
          fi * 3.7 + 70.0,
          sunDir,
          isBaseline,
          hitT
        );
        if (pHit.x > 0.05 && pHit.w < hitT) {
          vec3 pCol = mix(vec3(0.06, 0.14, 0.04), vec3(0.34, 0.46, 0.15), pHit.y);
          col = mix(col, pCol, pHit.x);
          if (pHit.x > 0.75) hitT = pHit.w;
        }
      }

      // 3. Turquoise Coral Lagoon & Crescent Bay Ocean Plane (y = 0.0)
      if (rd.y < -0.001) {
        float tWater = -ro.y / rd.y;
        if (tWater > 0.5 && tWater < hitT) {
          vec3 wPos = ro + rd * tWater;
          vec3 N = getOceanNormal(wPos.xz * 0.85, uTime, isBaseline);
          float bathy = getCrescentBayTerrain(wPos.xz, false).x; // negative underwater depth
          float depth = clamp(-bathy, 0.05, 6.0);
          float shallow = smoothstep(4.2, 0.15, depth);

          if (isBaseline) {
            col = mix(vec3(0.10, 0.46, 0.62), vec3(0.22, 0.68, 0.74), shallow * 0.65);
          } else {
            // Coral patch reefs inside the turquoise crescent bay
            float reefNoise = fbm6(wPos.xz * 0.32);
            float coralPatch = smoothstep(0.45, 0.66, reefNoise) * smoothstep(0.3, 2.2, depth);
            float caustics = causticPattern(wPos.xz * 0.7, uTime);

            vec3 aquaLagoon = vec3(0.16, 0.76, 0.74) + vec3(0.85, 0.92, 0.70) * caustics * 0.28;
            vec3 darkReef = vec3(0.03, 0.13, 0.19);
            vec3 shallowCol = mix(aquaLagoon, darkReef, coralPatch * 0.82);

            vec3 deepMarine = vec3(0.05, 0.25, 0.38);
            vec3 waterCol = mix(deepMarine, shallowCol, shallow * uClarity);

            // Concentric curved white breaking wave lines wrapping into the Crescent Bay
            float waveCrests = pow(max(0.0, sin(depth * 9.5 + uTime * 2.2)), 8.0) *
                               smoothstep(2.4, 0.15, depth) *
                               smoothstep(0.02, 0.22, depth);
            float shoreSwash = smoothstep(0.22, 0.02, depth);
            waterCol = mix(waterCol, vec3(0.95, 0.96, 0.94), clamp(waveCrests * 0.65 + shoreSwash * 0.78, 0.0, 1.0));

            // Fresnel reflection & golden aerial haze over water
            float fres = pow(1.0 - max(dot(-rd, N), 0.0), 3.6);
            waterCol = mix(waterCol, skyCol, fres * 0.48);

            float hazeW = 1.0 - exp(-tWater * 0.009);
            col = mix(waterCol, skyCol, hazeW * 0.62);
          }
        }
      }

      return col;
    }

    // ==========================================================================
    // MAIN ENTRY POINT
    // ==========================================================================
    void main() {
      vec2 p = (vUv * 2.0 - 1.0);
      p.x *= uResolution.x / max(1.0, uResolution.y);

      // Construct 3D camera basis from live OrbitControls / Director camera
      vec3 cw = normalize(uCamTarget - uCamPos);
      vec3 cu = normalize(cross(cw, vec3(0.0, 1.0, 0.0)));
      vec3 cv = cross(cu, cw);

      float fovRad = radians(uFov);
      float focal = 1.0 / tan(fovRad * 0.5);
      vec3 rd = normalize(p.x * cu + p.y * cv + focal * cw);
      vec3 ro = uCamPos;

      bool isBaseline = (uIsBaseline == 1);
      vec3 sunDir = getSunDir(uSceneId);
      vec3 color = vec3(0.0);

      if (uSceneId == 0) {
        color = renderScene1Atoll(ro, rd, sunDir, isBaseline);
      } else if (uSceneId == 1) {
        color = renderScene2Villas(ro, rd, sunDir, isBaseline);
      } else if (uSceneId == 2) {
        color = renderScene3Waterfall(ro, rd, sunDir, isBaseline);
      } else {
        color = renderScene4CrescentBay(ro, rd, sunDir, isBaseline);
      }

      // Filmic Tone Mapping + Subtle Optical Vignette + Gamma Correction
      color = acesToneMap(color * 1.06);
      float vig = 1.0 - dot(vUv - 0.5, vUv - 0.5) * 0.28;
      color *= vig;
      color = pow(max(color, 0.0), vec3(1.0 / 2.2));

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const quadMat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    depthWrite: false,
    depthTest: false,
  });

  const quadMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), quadMat);
  quadScene.add(quadMesh);

  return {
    render: (renderer, camera, targetPos, options) => {
      uniforms.uTime.value = options.elapsed;
      uniforms.uSceneId.value = options.sceneId;
      uniforms.uCamPos.value.copy(camera.position);
      uniforms.uCamTarget.value.copy(targetPos);
      uniforms.uFov.value = camera.fov;
      uniforms.uSunScale.value = options.sunElevationScale;
      uniforms.uWaveStrength.value = options.waveStrength;
      uniforms.uMistDensity.value = options.mistDensity;
      uniforms.uClarity.value = options.waterClarity;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const pr = renderer.getPixelRatio();

      if (!options.isSplitMode) {
        renderer.setScissorTest(false);
        renderer.setViewport(0, 0, w, h);
        uniforms.uResolution.value.set(w * pr, h * pr);
        uniforms.uIsBaseline.value = 0;
        renderer.render(quadScene, orthoCamera);
      } else {
        // Dual-Viewport Live Split-Screen Comparison (Top: Ultra Realism, Bottom: 1st Attempt)
        const halfH = Math.floor(h / 2);
        renderer.setScissorTest(true);
        uniforms.uResolution.value.set(w * pr, halfH * pr);

        // Top Viewport: Ultra Realism
        uniforms.uIsBaseline.value = 0;
        renderer.setViewport(0, halfH, w, h - halfH);
        renderer.setScissor(0, halfH, w, h - halfH);
        renderer.render(quadScene, orthoCamera);

        // Bottom Viewport: 1st Attempt Baseline
        uniforms.uIsBaseline.value = 1;
        renderer.setViewport(0, 0, w, halfH);
        renderer.setScissor(0, 0, w, halfH);
        renderer.render(quadScene, orthoCamera);
      }
    },
    resize: (width, height) => {
      uniforms.uResolution.value.set(width, height);
    },
  };
}

