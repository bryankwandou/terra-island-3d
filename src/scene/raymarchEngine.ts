import * as THREE from "three";

export type TerraViewMode = "photorealistic" | "reel" | "split" | "baseline";

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
      viewMode: TerraViewMode;
      sliderPosition: number;
    },
  ) => void;
  resize: (width: number, height: number) => void;
}

export function createRaymarchEngine(): RaymarchEngineHandles {
  // Main World 3D Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e1822);
  scene.fog = new THREE.FogExp2(0xe29b5b, 0.0055);

  // Baseline World Scene (for 1st Attempt low-poly comparison)
  const baselineScene = new THREE.Scene();
  baselineScene.background = new THREE.Color(0x73a8c6);
  baselineScene.fog = new THREE.Fog(0x8bc3db, 30, 160);

  // ============================================================================
  // 1. LIGHTING SETUP
  // ============================================================================
  const ambientLight = new THREE.AmbientLight(0x354a5c, 1.4);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffdfb8, 0x142b3d, 1.1);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffecc2, 3.4);
  sunLight.position.set(-80, 26, -140);
  scene.add(sunLight);

  // Baseline lighting
  const baseAmbient = new THREE.AmbientLight(0xffffff, 1.2);
  baselineScene.add(baseAmbient);
  const baseSun = new THREE.DirectionalLight(0xffeedd, 1.8);
  baseSun.position.set(-60, 40, -100);
  baselineScene.add(baseSun);

  // ============================================================================
  // 2. ATMOSPHERIC SUNSET SKY DOME
  // ============================================================================
  const skyGeo = new THREE.SphereGeometry(350, 32, 16);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uSunDir: { value: new THREE.Vector3(-0.35, 0.12, -0.93).normalize() },
      uTime: { value: 0 },
      uSunScale: { value: 0.78 },
    },
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vWorldPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uSunDir;
      uniform float uTime;
      uniform float uSunScale;
      varying vec3 vWorldPos;

      void main() {
        vec3 dir = normalize(vWorldPos);
        float h = clamp(dir.y, 0.0, 1.0);

        // Zenith sapphire to golden sunset horizon gradient
        vec3 zenith = vec3(0.14, 0.26, 0.42);
        vec3 midSky = vec3(0.55, 0.44, 0.46);
        vec3 horizon = vec3(0.98, 0.68, 0.38);

        vec3 sky = mix(horizon, midSky, pow(h, 0.45));
        sky = mix(sky, zenith, pow(h, 1.2));

        // Mie Solar scattering halo & solar disk
        float sunDot = max(dot(dir, uSunDir), 0.0);
        float halo = pow(sunDot, 6.0) * 0.65 + pow(sunDot, 32.0) * 0.95;
        sky += vec3(1.0, 0.72, 0.38) * halo;

        float sunDisk = smoothstep(0.9982, 0.9997, sunDot);
        sky += vec3(2.2, 1.8, 1.2) * sunDisk * (0.8 + uSunScale * 0.4);

        // Subtle drifting sunset cloud bands
        if (dir.y > 0.02 && dir.y < 0.35) {
          float cloud = sin(dir.x * 12.0 + uTime * 0.04) * cos(dir.z * 10.0 - uTime * 0.03);
          float band = smoothstep(0.2, 0.7, cloud * 0.5 + 0.5) * smoothstep(0.02, 0.08, dir.y) * smoothstep(0.35, 0.15, dir.y);
          sky = mix(sky, vec3(1.0, 0.62, 0.45), band * 0.42);
        }

        gl_FragColor = vec4(sky, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  scene.add(skyMesh);

  // Baseline sky
  const baseSkyMat = new THREE.MeshBasicMaterial({ color: 0x82b4cc, side: THREE.BackSide });
  const baseSkyMesh = new THREE.Mesh(skyGeo, baseSkyMat);
  baselineScene.add(baseSkyMesh);

  // ============================================================================
  // 3. PHYSICAL GERSTNER OCEAN WATER SYSTEM
  // ============================================================================
  const oceanGeo = new THREE.PlaneGeometry(500, 500, 180, 180);
  oceanGeo.rotateX(-Math.PI / 2);

  const oceanMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uWaveStrength: { value: 0.64 },
      uWaterClarity: { value: 0.94 },
      uSunDir: { value: new THREE.Vector3(-0.35, 0.12, -0.93).normalize() },
      uCamPos: { value: new THREE.Vector3() },
    },
    vertexShader: `
      uniform float uTime;
      uniform float uWaveStrength;
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying float vWaveHeight;

      // Analytical Gerstner wave displacement
      vec3 gerstnerWave(vec2 p, vec2 dir, float steepness, float wavelength, float speed, inout vec3 tangent, inout vec3 binormal) {
        float k = 6.2831853 / wavelength;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(dir);
        float f = k * (dot(d, p) - speed * c * uTime);
        float a = steepness / k;

        tangent += vec3(
          -d.x * d.x * (steepness * sin(f)),
          d.x * (steepness * cos(f)),
          -d.x * d.y * (steepness * sin(f))
        );
        binormal += vec3(
          -d.x * d.y * (steepness * sin(f)),
          d.y * (steepness * cos(f)),
          -d.y * d.y * (steepness * sin(f))
        );

        return vec3(
          d.x * (a * cos(f)),
          a * sin(f),
          d.y * (a * cos(f))
        );
      }

      void main() {
        vec3 p = position;
        vec3 gridP = position;

        vec3 tangent = vec3(1.0, 0.0, 0.0);
        vec3 binormal = vec3(0.0, 0.0, 1.0);

        float ampScale = 0.35 + uWaveStrength * 0.85;

        vec3 wave = vec3(0.0);
        wave += gerstnerWave(p.xz, vec2(1.0, 0.35), 0.18 * ampScale, 18.0, 1.2, tangent, binormal);
        wave += gerstnerWave(p.xz, vec2(-0.4, 0.9), 0.14 * ampScale, 11.0, 1.4, tangent, binormal);
        wave += gerstnerWave(p.xz, vec2(0.6, -0.8), 0.09 * ampScale, 6.5, 1.7, tangent, binormal);
        wave += gerstnerWave(p.xz, vec2(-0.8, -0.5), 0.06 * ampScale, 3.8, 2.1, tangent, binormal);

        p += wave;
        vWaveHeight = wave.y;

        vNormal = normalize(cross(binormal, tangent));
        vec4 worldP = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldP.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldP;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uWaterClarity;
      uniform vec3 uSunDir;
      uniform vec3 uCamPos;
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      varying float vWaveHeight;

      // Optical Voronoi Caustics
      float causticVoronoi(vec2 p) {
        vec2 g = floor(p);
        vec2 f = fract(p);
        float d = 1.0;
        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 lattice = vec2(float(x), float(y));
            vec2 offset = fract(sin(lattice + g) * 43758.5453);
            offset = 0.5 + 0.4 * sin(uTime * 2.2 + 6.28 * offset);
            d = min(d, length(lattice + offset - f));
          }
        }
        return pow(clamp(1.0 - d * 0.75, 0.0, 1.0), 3.2);
      }

      void main() {
        vec3 V = normalize(uCamPos - vWorldPos);
        vec3 N = normalize(vNormal);

        // Water depth & distance to island center (2.2, -9.0)
        float distToIsland = length(vWorldPos.xz - vec2(2.2, -9.0));
        float shallow = smoothstep(24.0, 4.0, distToIsland);

        // Crystal turquoise shallow lagoon fading to deep marine sapphire
        vec3 deepSea = vec3(0.04, 0.16, 0.28);
        vec3 aquaLagoon = vec3(0.12, 0.72, 0.74);
        vec3 sandBed = vec3(0.88, 0.82, 0.65);

        float caustics = causticVoronoi(vWorldPos.xz * 1.2);
        vec3 seabed = mix(aquaLagoon, sandBed, caustics * 0.45 * shallow);

        vec3 waterBody = mix(deepSea, seabed, shallow * uWaterClarity * 0.85);

        // Fresnel reflection
        float fresnel = pow(1.0 - max(dot(V, N), 0.0), 4.2);
        vec3 skyReflection = mix(vec3(0.96, 0.68, 0.42), vec3(0.22, 0.42, 0.65), clamp(V.y * 1.5, 0.0, 1.0));

        vec3 finalCol = mix(waterBody, skyReflection, 0.18 + fresnel * 0.78);

        // Sun specular glint column
        vec3 H = normalize(uSunDir + V);
        float NdotH = max(dot(N, H), 0.0);
        float glint = pow(NdotH, 240.0) * 3.8 + pow(NdotH, 36.0) * 0.75;
        finalCol += vec3(1.0, 0.86, 0.58) * glint;

        // White foam crests on wave peaks
        float foam = smoothstep(0.35, 0.65, vWaveHeight) * 0.75;
        finalCol = mix(finalCol, vec3(0.96, 0.96, 0.94), foam);

        gl_FragColor = vec4(finalCol, 0.96);
      }
    `,
    transparent: true,
  });
  const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
  scene.add(oceanMesh);

  // Baseline flat ocean
  const baseOceanGeo = new THREE.PlaneGeometry(500, 500, 24, 24);
  baseOceanGeo.rotateX(-Math.PI / 2);
  const baseOceanMat = new THREE.MeshStandardMaterial({
    color: 0x36a9b8,
    roughness: 0.25,
    metalness: 0.1,
    flatShading: true,
  });
  const baseOceanMesh = new THREE.Mesh(baseOceanGeo, baseOceanMat);
  baselineScene.add(baseOceanMesh);

  // ============================================================================
  // 4. PROCEDURAL PALM TREE BUILDER
  // ============================================================================
  function createPalmTree(height: number, leanAngle: number, leanDir: number, isBaseline: boolean): THREE.Group {
    const palm = new THREE.Group();

    // Curved Trunk
    const trunkCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.cos(leanDir) * leanAngle * 0.4, height * 0.55, Math.sin(leanDir) * leanAngle * 0.4),
      new THREE.Vector3(Math.cos(leanDir) * leanAngle, height, Math.sin(leanDir) * leanAngle),
    );

    const trunkGeo = new THREE.TubeGeometry(trunkCurve, isBaseline ? 8 : 22, isBaseline ? 0.18 : 0.22, isBaseline ? 5 : 10, false);
    const trunkMat = isBaseline
      ? new THREE.MeshStandardMaterial({ color: 0x8a623e, roughness: 0.8, flatShading: true })
      : new THREE.MeshStandardMaterial({ color: 0x3b2b1d, roughness: 0.72 });
    const trunkMesh = new THREE.Mesh(trunkGeo, trunkMat);
    palm.add(trunkMesh);

    // Arching Palm Fronds Crown
    const crownPos = trunkCurve.getPoint(1.0);
    const crownGroup = new THREE.Group();
    crownGroup.position.copy(crownPos);

    const frondCount = isBaseline ? 8 : 16;
    for (let f = 0; f < frondCount; f++) {
      const angle = (f / frondCount) * Math.PI * 2;
      const frondLen = isBaseline ? 2.4 : 3.4;
      const droop = isBaseline ? 0.9 : 1.35;

      const fCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * frondLen * 0.5, 0.45, Math.sin(angle) * frondLen * 0.5),
        new THREE.Vector3(Math.cos(angle) * frondLen, -droop, Math.sin(angle) * frondLen),
      );

      const fGeo = new THREE.TubeGeometry(fCurve, isBaseline ? 6 : 14, isBaseline ? 0.08 : 0.12, 4, false);
      const fMat = isBaseline
        ? new THREE.MeshStandardMaterial({ color: 0x4f7832, roughness: 0.7, flatShading: true })
        : new THREE.MeshStandardMaterial({ color: 0x245818, roughness: 0.55 });
      const fMesh = new THREE.Mesh(fGeo, fMat);
      crownGroup.add(fMesh);

      // Pinnate frond leaves (ultra mode)
      if (!isBaseline) {
        const leafGeo = new THREE.PlaneGeometry(0.35, 1.4);
        leafGeo.rotateZ(Math.PI / 2);
        const leafMat = new THREE.MeshStandardMaterial({
          color: 0x34701e,
          roughness: 0.6,
          side: THREE.DoubleSide,
        });
        const leafMesh = new THREE.Mesh(leafGeo, leafMat);
        leafMesh.position.set(Math.cos(angle) * frondLen * 0.55, -droop * 0.4, Math.sin(angle) * frondLen * 0.55);
        leafMesh.rotation.y = angle;
        crownGroup.add(leafMesh);
      }
    }
    palm.add(crownGroup);
    return palm;
  }

  // ============================================================================
  // 5. SCENE 0: SUNSET ATOLL (Coral Lagoon & 22 Backlit Palms)
  // ============================================================================
  const scene0Group = new THREE.Group();
  scene.add(scene0Group);

  const baseScene0Group = new THREE.Group();
  baselineScene.add(baseScene0Group);

  // Atoll Coral Sandbar Island
  const atollGeo = new THREE.CylinderGeometry(14.5, 18.5, 2.2, 48);
  atollGeo.scale(1.4, 1.0, 0.65);
  const atollMat = new THREE.MeshStandardMaterial({
    color: 0xd9c5a7,
    roughness: 0.88,
  });
  const atollMesh = new THREE.Mesh(atollGeo, atollMat);
  atollMesh.position.set(2.2, 0.35, -9.0);
  scene0Group.add(atollMesh);

  // Wet sand ring around island
  const wetSandGeo = new THREE.RingGeometry(12, 19, 48);
  wetSandGeo.rotateX(-Math.PI / 2);
  wetSandGeo.scale(1.42, 0.68, 1.0);
  const wetSandMat = new THREE.MeshStandardMaterial({
    color: 0x6e5c49,
    roughness: 0.25,
    metalness: 0.2,
  });
  const wetSandMesh = new THREE.Mesh(wetSandGeo, wetSandMat);
  wetSandMesh.position.set(2.2, 0.08, -9.0);
  scene0Group.add(wetSandMesh);

  // Baseline atoll
  const baseAtollGeo = new THREE.ConeGeometry(14, 2.4, 12);
  const baseAtollMat = new THREE.MeshStandardMaterial({ color: 0xd6c29b, flatShading: true });
  const baseAtollMesh = new THREE.Mesh(baseAtollGeo, baseAtollMat);
  baseAtollMesh.position.set(2.2, 0.4, -9.0);
  baseScene0Group.add(baseAtollMesh);

  // Populate 22 Palms on the Atoll
  for (let i = 0; i < 22; i++) {
    const u = i / 21;
    const px = THREE.MathUtils.lerp(-8.5, 13.0, u) + Math.sin(i * 3.7) * 1.2;
    const pz = -9.0 + Math.cos(i * 2.8) * 3.2;
    const h = 4.2 + Math.sin(u * Math.PI) * 2.6 + (i % 3) * 0.4;
    const lean = 1.4 + Math.sin(i * 1.7) * 0.8;
    const dir = Math.atan2(pz - (-9.0), px - 2.2);

    const palm = createPalmTree(h, lean, dir, false);
    palm.position.set(px, 1.2, pz);
    scene0Group.add(palm);

    if (i < 8) {
      const basePalm = createPalmTree(3.8, 0.2, 0, true);
      basePalm.position.set(px, 1.2, pz);
      baseScene0Group.add(basePalm);
    }
  }

  // ============================================================================
  // 6. SCENE 1: CLIFFSIDE LUXURY VILLAS & WET BEACH
  // ============================================================================
  const scene1Group = new THREE.Group();
  scene.add(scene1Group);

  const baseScene1Group = new THREE.Group();
  baselineScene.add(baseScene1Group);

  // Coastal Cliff Rock Bluff on the left
  const cliffGeo = new THREE.BoxGeometry(16, 12, 42);
  const cliffMat = new THREE.MeshStandardMaterial({
    color: 0x2b2724,
    roughness: 0.9,
  });
  const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
  cliffMesh.position.set(-14, 5.0, -8.0);
  scene1Group.add(cliffMesh);

  // Baseline blocky cliff
  const baseCliffGeo = new THREE.BoxGeometry(16, 12, 42);
  const baseCliffMat = new THREE.MeshStandardMaterial({ color: 0x8a7a67, flatShading: true });
  const baseCliffMesh = new THREE.Mesh(baseCliffGeo, baseCliffMat);
  baseCliffMesh.position.set(-14, 5.0, -8.0);
  baseScene1Group.add(baseCliffMesh);

  // 3 Stepped Modern Cantilevered Villas
  for (let v = 0; v < 3; v++) {
    const villaGroup = new THREE.Group();
    const vz = 6.0 - v * 12.0;
    const vx = -5.8 - v * 1.2;
    const vy = 2.4 + v * 0.8;

    // Limestone Foundation Terrace
    const slabGeo = new THREE.BoxGeometry(7.5, 0.45, 6.5);
    const slabMat = new THREE.MeshStandardMaterial({ color: 0xdfd7cb, roughness: 0.65 });
    const slab = new THREE.Mesh(slabGeo, slabMat);
    slab.position.set(vx, vy, vz);
    villaGroup.add(slab);

    // Floor-to-ceiling Glass Living Pavilion with Warm Glowing Interior
    const glassGeo = new THREE.BoxGeometry(6.2, 2.4, 5.2);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xffe2aa,
      emissive: 0xdd8833,
      emissiveIntensity: 0.42,
      roughness: 0.1,
      metalness: 0.15,
      transparent: true,
      opacity: 0.82,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(vx, vy + 1.45, vz);
    villaGroup.add(glass);

    // Cantilevered Teak Wood Roof Overhang
    const roofGeo = new THREE.BoxGeometry(8.2, 0.35, 7.2);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x5a381e, roughness: 0.6 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(vx + 0.4, vy + 2.85, vz);
    villaGroup.add(roof);

    // Beachfront Infinity Pool deck on lower terrace of Villa 1
    if (v === 0) {
      const poolGeo = new THREE.BoxGeometry(4.2, 0.25, 3.2);
      const poolMat = new THREE.MeshStandardMaterial({
        color: 0x22d4c8,
        emissive: 0x118880,
        emissiveIntensity: 0.35,
        roughness: 0.1,
      });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.set(vx + 3.8, vy + 0.15, vz);
      villaGroup.add(pool);
    }

    scene1Group.add(villaGroup);

    // Baseline villa
    const baseVilla = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 3.2, 5.5),
      new THREE.MeshStandardMaterial({ color: 0xc4b29a, flatShading: true })
    );
    baseVilla.position.set(vx, vy + 1.6, vz);
    baseScene1Group.add(baseVilla);
  }

  // White Sandy Beach with Mirror-Wet Shoreline Reflection Area
  const beachGeo = new THREE.PlaneGeometry(38, 55, 32, 32);
  beachGeo.rotateX(-Math.PI / 2);
  const beachMat = new THREE.MeshStandardMaterial({
    color: 0xd4c2a5,
    roughness: 0.42,
    metalness: 0.18,
  });
  const beachMesh = new THREE.Mesh(beachGeo, beachMat);
  beachMesh.position.set(4.5, 0.12, -8.0);
  scene1Group.add(beachMesh);

  // ============================================================================
  // 7. SCENE 2: JUNGLE WATERFALL GORGE
  // ============================================================================
  const scene2Group = new THREE.Group();
  scene.add(scene2Group);

  const baseScene2Group = new THREE.Group();
  baselineScene.add(baseScene2Group);

  // Towering Twin Canyon Cliffs
  const leftCanyon = new THREE.Mesh(
    new THREE.BoxGeometry(22, 34, 18),
    new THREE.MeshStandardMaterial({ color: 0x283020, roughness: 0.95 })
  );
  leftCanyon.position.set(-16, 17, -26);
  scene2Group.add(leftCanyon);

  const rightCanyon = new THREE.Mesh(
    new THREE.BoxGeometry(22, 34, 18),
    new THREE.MeshStandardMaterial({ color: 0x26321e, roughness: 0.95 })
  );
  rightCanyon.position.set(16, 17, -26);
  scene2Group.add(rightCanyon);

  // Cascading Waterfall Chute
  const wfGeo = new THREE.PlaneGeometry(7.5, 26, 12, 48);
  const wfMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        float flow = vUv.y * 3.5 + uTime * 4.2;
        float streaks = sin(vUv.x * 24.0 + flow) * cos(vUv.x * 14.0 - flow * 0.7);
        float foam = smoothstep(0.15, 0.85, streaks * 0.5 + 0.5);

        vec3 whiteWater = vec3(0.92, 0.96, 0.98);
        vec3 deepFoam = vec3(0.65, 0.82, 0.88);

        vec3 col = mix(deepFoam, whiteWater, foam);
        gl_FragColor = vec4(col, 0.94);
      }
    `,
    transparent: true,
  });
  const wfMesh = new THREE.Mesh(wfGeo, wfMat);
  wfMesh.position.set(0, 16.5, -23.5);
  scene2Group.add(wfMesh);

  // Plunge Pool Mist Cloud (Billowing at waterfall base)
  const mistGeo = new THREE.SphereGeometry(6.5, 16, 12);
  const mistMat = new THREE.MeshBasicMaterial({
    color: 0xd8e8ee,
    transparent: true,
    opacity: 0.45,
  });
  const mistMesh = new THREE.Mesh(mistGeo, mistMat);
  mistMesh.position.set(0, 5.5, -20);
  scene2Group.add(mistMesh);

  // Emergent Palms framing the Waterfall
  const wfPalm = createPalmTree(7.5, 0.6, 0.4, false);
  wfPalm.position.set(0.8, 3.2, -15.5);
  scene2Group.add(wfPalm);

  // ============================================================================
  // 8. SCENE 3: CRESCENT BAY & MOUNTAIN RIDGE
  // ============================================================================
  const scene3Group = new THREE.Group();
  scene.add(scene3Group);

  const baseScene3Group = new THREE.Group();
  baselineScene.add(baseScene3Group);

  // Receding Layered Mountain Headlands
  const m1 = new THREE.Mesh(
    new THREE.ConeGeometry(24, 28, 16),
    new THREE.MeshStandardMaterial({ color: 0x2a3824, roughness: 0.9 })
  );
  m1.position.set(-18, 14, -36);
  scene3Group.add(m1);

  const m2 = new THREE.Mesh(
    new THREE.ConeGeometry(32, 38, 16),
    new THREE.MeshStandardMaterial({ color: 0x364835, roughness: 0.92 })
  );
  m2.position.set(-36, 19, -70);
  scene3Group.add(m2);

  const m3 = new THREE.Mesh(
    new THREE.ConeGeometry(44, 48, 16),
    new THREE.MeshStandardMaterial({ color: 0x485854, roughness: 0.95 })
  );
  m3.position.set(-60, 24, -115);
  scene3Group.add(m3);

  // Crescent Beach Landspit
  const crescentGeo = new THREE.TorusGeometry(26, 4.5, 12, 36, Math.PI * 0.7);
  crescentGeo.rotateX(Math.PI / 2);
  const crescentMat = new THREE.MeshStandardMaterial({ color: 0xdcc7aa, roughness: 0.85 });
  const crescentMesh = new THREE.Mesh(crescentGeo, crescentMat);
  crescentMesh.position.set(8.0, 0.2, -22.0);
  scene3Group.add(crescentMesh);

  // Hide non-active chapter groups by default
  function updateChapterVisibility(sceneId: number) {
    scene0Group.visible = sceneId === 0;
    scene1Group.visible = sceneId === 1;
    scene2Group.visible = sceneId === 2;
    scene3Group.visible = sceneId === 3;

    baseScene0Group.visible = sceneId === 0;
    baseScene1Group.visible = sceneId === 1;
    baseScene2Group.visible = sceneId === 2;
    baseScene3Group.visible = sceneId === 3;
  }
  updateChapterVisibility(0);

  // ============================================================================
  // ENGINE HANDLES & RENDER LOOP
  // ============================================================================
  return {
    render: (renderer, camera, targetPos, options) => {
      const {
        elapsed,
        sceneId,
        sunElevationScale,
        waveStrength,
        mistDensity,
        waterClarity,
        viewMode,
        sliderPosition,
      } = options;

      // Update active chapter scene
      updateChapterVisibility(sceneId);

      // Update uniforms & dynamic parameters
      skyMat.uniforms.uTime.value = elapsed;
      skyMat.uniforms.uSunScale.value = sunElevationScale;

      oceanMat.uniforms.uTime.value = elapsed;
      oceanMat.uniforms.uWaveStrength.value = waveStrength;
      oceanMat.uniforms.uWaterClarity.value = waterClarity;
      oceanMat.uniforms.uCamPos.value.copy(camera.position);

      wfMat.uniforms.uTime.value = elapsed;
      mistMesh.scale.setScalar(0.85 + Math.sin(elapsed * 1.8) * 0.25 * mistDensity);
      mistMesh.position.y = 5.5 + Math.sin(elapsed * 1.4) * 0.8;

      // Sun position based on scene and elevation
      const sunElev = 18.0 + sunElevationScale * 24.0;
      if (sceneId === 0) {
        sunLight.position.set(-80, sunElev, -140);
      } else if (sceneId === 1) {
        sunLight.position.set(-60, sunElev * 1.2, -120);
      } else if (sceneId === 2) {
        sunLight.position.set(70, sunElev * 1.5, -90);
      } else {
        sunLight.position.set(80, sunElev * 1.3, -110);
      }
      sunLight.intensity = 2.8 + sunElevationScale * 1.2;

      const w = window.innerWidth;
      const h = window.innerHeight;

      if (viewMode === "photorealistic") {
        renderer.setScissorTest(false);
        renderer.setViewport(0, 0, w, h);
        renderer.render(scene, camera);
      } else if (viewMode === "baseline") {
        renderer.setScissorTest(false);
        renderer.setViewport(0, 0, w, h);
        renderer.render(baselineScene, camera);
      } else if (viewMode === "reel") {
        // Live Split-Screen Comparison (9:16 Vertical Top/Bottom)
        // Top Viewport: Photorealistic 9th Iteration
        const halfH = Math.floor(h / 2);
        renderer.setScissorTest(true);

        renderer.setViewport(0, halfH, w, h - halfH);
        renderer.setScissor(0, halfH, w, h - halfH);
        renderer.render(scene, camera);

        // Bottom Viewport: 1st Attempt Baseline
        renderer.setViewport(0, 0, w, halfH);
        renderer.setScissor(0, 0, w, halfH);
        renderer.render(baselineScene, camera);
      } else if (viewMode === "split") {
        // Interactive Horizontal Split-Screen Slider Wipe
        // Left Viewport: Photorealistic 9th Iteration
        // Right Viewport: 1st Attempt Baseline
        const splitX = Math.max(1, Math.min(w - 1, Math.floor(w * (sliderPosition / 100))));
        renderer.setScissorTest(true);

        // Left viewport: 9th Iteration PBR
        renderer.setViewport(0, 0, splitX, h);
        renderer.setScissor(0, 0, splitX, h);
        renderer.render(scene, camera);

        // Right viewport: 1st Attempt Baseline
        renderer.setViewport(splitX, 0, w - splitX, h);
        renderer.setScissor(splitX, 0, w - splitX, h);
        renderer.render(baselineScene, camera);
      }
    },
    resize: (width, height) => {
      // Handled via renderer.setSize in TerraCanvas3D
    },
  };
}
