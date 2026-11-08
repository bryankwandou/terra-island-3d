import * as THREE from "three";
import { CHAPTERS } from "./chapters";
import {
  createSandTexture,
  createBasaltRockTexture,
  createTeakWoodTexture,
  createConcreteTexture,
  createWaveNormalTexture,
  createRadialMistTexture,
  createGodRayTexture,
} from "./proceduralTextures";

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
  // ============================================================================
  // SCENE CREATION (100% PURE PROCEDURAL 3D WEBGL)
  // ============================================================================
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xe29b5b, 0.0035);

  const baselineScene = new THREE.Scene();
  baselineScene.fog = new THREE.Fog(0x8bc3db, 30, 180);

  // Textures
  const sandTex = createSandTexture();
  const basaltTex = createBasaltRockTexture();
  const teakTex = createTeakWoodTexture();
  const concreteTex = createConcreteTexture();
  const waveNormalTex = createWaveNormalTexture();
  const mistTexture = createRadialMistTexture();
  const godRayTexture = createGodRayTexture();

  // ============================================================================
  // PROCEDURAL SKY DOME (360° Infinite Atmospheric Depth)
  // ============================================================================
  const skyGeo = new THREE.SphereGeometry(280, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTopColor: { value: new THREE.Color(0x1a3a5c) },
      uBottomColor: { value: new THREE.Color(0xf69c5e) },
      uSunColor: { value: new THREE.Color(0xfff2d4) },
      uSunPos: { value: new THREE.Vector3(-40, 30, -60).normalize() },
    },
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunPos;
      varying vec3 vWorldPos;

      void main() {
        vec3 dir = normalize(vWorldPos);
        float h = clamp(dir.y * 1.8 + 0.12, 0.0, 1.0);
        vec3 sky = mix(uBottomColor, uTopColor, pow(h, 0.72));

        float cosTheta = dot(dir, uSunPos);
        float sunDisc = smoothstep(0.9982, 0.9996, cosTheta);
        float sunGlow = pow(max(cosTheta, 0.0), 16.0) * 0.75;
        vec3 col = sky + uSunColor * (sunDisc * 2.8 + sunGlow);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const skyDome = new THREE.Mesh(skyGeo, skyMat);
  scene.add(skyDome);

  // Baseline Sky
  const baseSkyMat = new THREE.MeshBasicMaterial({
    color: 0x82b8d2,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const baseSkyDome = new THREE.Mesh(skyGeo, baseSkyMat);
  baselineScene.add(baseSkyDome);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffeedb, 1.4);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffdfb8, 0x142b3d, 1.3);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffecc2, 3.4);
  sunLight.position.set(-40, 30, -60);
  scene.add(sunLight);

  // Baseline lighting
  const baseAmb = new THREE.AmbientLight(0xffffff, 1.8);
  baselineScene.add(baseAmb);
  const baseDir = new THREE.DirectionalLight(0xffffff, 1.2);
  baseDir.position.set(20, 40, 20);
  baselineScene.add(baseDir);

  // ============================================================================
  // PROCEDURAL PALM TREE BUILDER
  // ============================================================================
  function createPalmTree(height = 7.5, curve = 0.8, angle = 0, isBaseline = false): THREE.Group {
    const palm = new THREE.Group();
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.sin(angle) * curve * 0.4, height * 0.35, Math.cos(angle) * curve * 0.4),
      new THREE.Vector3(Math.sin(angle) * curve, height * 0.72, Math.cos(angle) * curve),
      new THREE.Vector3(Math.sin(angle) * curve * 1.5, height, Math.cos(angle) * curve * 1.5),
    ]);

    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 12, 0.22, isBaseline ? 5 : 8, false);
    const trunkMat = isBaseline
      ? new THREE.MeshBasicMaterial({ color: 0x5a483a })
      : new THREE.MeshStandardMaterial({
          color: 0x423226,
          map: teakTex.map,
          bumpMap: teakTex.bumpMap,
          bumpScale: 0.04,
          roughness: 0.9,
        });
    palm.add(new THREE.Mesh(trunkGeo, trunkMat));

    const crownPos = trunkCurve.getPoint(1.0);
    const crown = new THREE.Group();
    crown.position.copy(crownPos);

    // Coconuts
    if (!isBaseline) {
      const nutGeo = new THREE.SphereGeometry(0.24, 6, 6);
      const nutMat = new THREE.MeshStandardMaterial({ color: 0x3d2919, roughness: 0.8 });
      for (let n = 0; n < 4; n++) {
        const nut = new THREE.Mesh(nutGeo, nutMat);
        nut.position.set(Math.sin(n * 1.5) * 0.25, -0.2, Math.cos(n * 1.5) * 0.25);
        crown.add(nut);
      }
    }

    const frondCount = isBaseline ? 6 : 14;
    for (let f = 0; f < frondCount; f++) {
      const fAngle = (f / frondCount) * Math.PI * 2;
      const frondCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.sin(fAngle) * 1.4, 0.4, Math.cos(fAngle) * 1.4),
        new THREE.Vector3(Math.sin(fAngle) * 3.0, -0.6, Math.cos(fAngle) * 3.0),
        new THREE.Vector3(Math.sin(fAngle) * 4.2, -1.8, Math.cos(fAngle) * 4.2),
      ]);
      const frondGeo = new THREE.TubeGeometry(frondCurve, 8, 0.09, 4, false);
      const frondMat = isBaseline
        ? new THREE.MeshBasicMaterial({ color: 0x3d7045 })
        : new THREE.MeshStandardMaterial({
            color: 0x2e5c33,
            roughness: 0.65,
            side: THREE.DoubleSide,
          });
      crown.add(new THREE.Mesh(frondGeo, frondMat));
    }
    palm.add(crown);
    return palm;
  }

  // ============================================================================
  // PROCEDURAL DYNAMIC GERSTNER OCEAN WATER SHADER
  // ============================================================================
  const oceanGeo = new THREE.PlaneGeometry(180, 110, 90, 60);
  oceanGeo.rotateX(-Math.PI / 2);

  const oceanMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uWaveStrength: { value: 0.64 },
      uWaterClarity: { value: 0.94 },
      uSunDir: { value: new THREE.Vector3(-0.35, 0.18, -0.92).normalize() },
      uCamPos: { value: new THREE.Vector3(0, 3, 18) },
      uNormalMap: { value: waveNormalTex },
    },
    vertexShader: `
      uniform float uTime;
      uniform float uWaveStrength;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv * 6.0;
        vec3 p = position;
        float w1 = sin(p.x * 0.25 + uTime * 2.2) * cos(p.z * 0.2 + uTime * 1.8) * 0.38;
        float w2 = sin(p.x * 0.55 - uTime * 3.1 + p.z * 0.35) * 0.16;
        float w3 = cos(p.x * 1.1 + p.z * 0.8 + uTime * 4.2) * 0.08;
        p.y += (w1 + w2 + w3) * uWaveStrength;

        vec4 worldP = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldP.xyz;
        vNormal = normalize(vec3(-cos(p.x * 0.25) * 0.2 * uWaveStrength, 1.0, -sin(p.z * 0.2) * 0.2 * uWaveStrength));
        gl_Position = projectionMatrix * viewMatrix * worldP;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uWaterClarity;
      uniform vec3 uSunDir;
      uniform vec3 uCamPos;
      uniform sampler2D uNormalMap;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vec3 V = normalize(uCamPos - vWorldPos);
        vec2 uvOff1 = vUv + vec2(uTime * 0.035, uTime * 0.022);
        vec2 uvOff2 = vUv * 1.5 - vec2(uTime * 0.028, -uTime * 0.04);
        vec3 n1 = texture2D(uNormalMap, uvOff1).rgb * 2.0 - 1.0;
        vec3 n2 = texture2D(uNormalMap, uvOff2).rgb * 2.0 - 1.0;
        vec3 N = normalize(vNormal + (n1 + n2) * 0.22);

        float fresnel = pow(1.0 - max(dot(V, N), 0.0), 3.8);
        vec3 deepWater = vec3(0.04, 0.28, 0.42);
        vec3 shallowWater = vec3(0.12, 0.78, 0.72) * uWaterClarity;
        vec3 waterColor = mix(shallowWater, deepWater, clamp(vWorldPos.y * -0.6 + 0.4, 0.0, 1.0));

        vec3 skyReflection = mix(vec3(0.96, 0.68, 0.45), vec3(0.42, 0.68, 0.88), fresnel * 0.6);
        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.4;
        vec3 sunColor = vec3(1.0, 0.94, 0.82);

        vec3 finalColor = mix(waterColor, skyReflection, fresnel * 0.8) + sunColor * spec;
        gl_FragColor = vec4(finalColor, 0.92);
      }
    `,
    transparent: true,
  });

  // ============================================================================
  // CHAPTER 0: SUNSET ATOLL (Coral Reef Lagoon & Sand Spit)
  // ============================================================================
  const scene0Group = new THREE.Group();
  scene.add(scene0Group);
  const baseScene0Group = new THREE.Group();
  baselineScene.add(baseScene0Group);

  // Ocean
  const s0Ocean = new THREE.Mesh(oceanGeo, oceanMat);
  s0Ocean.position.set(0, 0.0, 0);
  scene0Group.add(s0Ocean);

  const baseOcean = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 90),
    new THREE.MeshBasicMaterial({ color: 0x4888a8 })
  );
  baseOcean.rotateX(-Math.PI / 2);
  baseScene0Group.add(baseOcean);

  // Atoll Ring Outer Landspit
  const atollSpitGeo = new THREE.TorusGeometry(38, 7.5, 16, 52, Math.PI * 0.85);
  atollSpitGeo.rotateX(Math.PI / 2);
  const atollSpitMat = new THREE.MeshStandardMaterial({
    map: sandTex.map,
    bumpMap: sandTex.bumpMap,
    bumpScale: 0.035,
    roughness: 0.65,
  });
  const atollSpit = new THREE.Mesh(atollSpitGeo, atollSpitMat);
  atollSpit.position.set(2.0, 0.22, -18.0);
  scene0Group.add(atollSpit);

  // Inner White Sand Spit Shoreline
  const sandSpitGeo = new THREE.PlaneGeometry(36, 55, 32, 32);
  sandSpitGeo.rotateX(-Math.PI / 2);
  const sandSpit = new THREE.Mesh(sandSpitGeo, atollSpitMat);
  sandSpit.position.set(8.5, 0.16, 4.0);
  scene0Group.add(sandSpit);

  // Wet Shoreline Swash Mirror Plane
  const wetSandGeo = new THREE.PlaneGeometry(28, 48, 16, 16);
  wetSandGeo.rotateX(-Math.PI / 2);
  const wetSandMat = new THREE.MeshStandardMaterial({
    color: 0xd8c4a0,
    roughness: 0.2,
    metalness: 0.35,
  });
  const wetSand = new THREE.Mesh(wetSandGeo, wetSandMat);
  wetSand.position.set(2.5, 0.18, 4.0);
  scene0Group.add(wetSand);

  // Subsurface Coral Rock Formations
  const coralMat = new THREE.MeshStandardMaterial({
    color: 0x2d483e,
    map: basaltTex.map,
    bumpMap: basaltTex.bumpMap,
    bumpScale: 0.05,
    roughness: 0.88,
  });
  for (let c = 0; c < 10; c++) {
    const coral = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.4 + (c % 3) * 0.6, 1),
      coralMat
    );
    coral.position.set(-6.0 + (c % 4) * 3.5, -0.4, 2.0 - c * 2.8);
    coral.scale.set(1.4, 0.6, 1.4);
    scene0Group.add(coral);
  }

  // Palms for Scene 0
  for (let p = 0; p < 20; p++) {
    const angle = (p % 2 === 0 ? 0.35 : -0.32) + (p * 0.09);
    const height = 6.4 + (p % 4) * 0.6;
    const palm = createPalmTree(height, 0.75, angle, false);
    palm.position.set(5.0 + (p % 4) * 2.5, 0.25, 10.0 - p * 2.0);
    scene0Group.add(palm);

    const basePalm = createPalmTree(height, 0.75, angle, true);
    basePalm.position.set(5.0 + (p % 4) * 2.5, 0.25, 10.0 - p * 2.0);
    baseScene0Group.add(basePalm);
  }

  // ============================================================================
  // CHAPTER 1: CLIFFSIDE LUXURY VILLAS (Modern Cantilevered Architecture)
  // ============================================================================
  const scene1Group = new THREE.Group();
  scene.add(scene1Group);
  const baseScene1Group = new THREE.Group();
  baselineScene.add(baseScene1Group);

  // Sandy Beach & Wet Shoreline
  const s1Beach = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 60, 24, 24),
    new THREE.MeshStandardMaterial({
      map: sandTex.map,
      bumpMap: sandTex.bumpMap,
      bumpScale: 0.03,
      roughness: 0.55,
    })
  );
  s1Beach.rotateX(-Math.PI / 2);
  s1Beach.position.set(2.0, 0.08, 4.0);
  scene1Group.add(s1Beach);

  // Wet sand reflection
  const s1WetSand = new THREE.Mesh(wetSandGeo, wetSandMat);
  s1WetSand.position.set(3.0, 0.1, 4.0);
  scene1Group.add(s1WetSand);

  // Coastal Basalt Cliff Bluff
  const cliffMat = new THREE.MeshStandardMaterial({
    map: basaltTex.map,
    bumpMap: basaltTex.bumpMap,
    bumpScale: 0.08,
    roughness: 0.88,
  });
  const cliff = new THREE.Mesh(new THREE.BoxGeometry(26, 22, 54), cliffMat);
  cliff.position.set(-18.0, 9.5, -8.0);
  scene1Group.add(cliff);

  // 3 Stepped Modern Cantilevered Teak Villas
  const teakMat = new THREE.MeshStandardMaterial({
    map: teakTex.map,
    bumpMap: teakTex.bumpMap,
    bumpScale: 0.02,
    roughness: 0.45,
  });
  const concreteMat = new THREE.MeshStandardMaterial({
    map: concreteTex.map,
    bumpMap: concreteTex.bumpMap,
    bumpScale: 0.03,
    roughness: 0.7,
  });
  const steelMat = new THREE.MeshStandardMaterial({
    color: 0x1f2224,
    roughness: 0.35,
    metalness: 0.85,
  });
  const interiorGlowMat = new THREE.MeshStandardMaterial({
    color: 0xffe0a3,
    emissive: 0xffa438,
    emissiveIntensity: 0.95,
    roughness: 0.25,
  });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xcee8f5,
    roughness: 0.1,
    metalness: 0.9,
    transparent: true,
    opacity: 0.45,
  });

  for (let v = 0; v < 3; v++) {
    const villa = new THREE.Group();
    const vz = 6.0 - v * 13.0;
    const vx = -6.2 - v * 1.5;
    const vy = 2.8 + v * 1.2;

    // Board-formed concrete foundation cantilever beam
    const foundation = new THREE.Mesh(new THREE.BoxGeometry(4.0, 3.2, 5.0), concreteMat);
    foundation.position.set(vx - 2.5, vy - 1.2, vz);
    villa.add(foundation);

    // Teak floor slab & deck
    const deck = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.45, 7.8), teakMat);
    deck.position.set(vx, vy, vz);
    villa.add(deck);

    // Teak roof canopy
    const roof = new THREE.Mesh(new THREE.BoxGeometry(10.0, 0.35, 8.2), teakMat);
    roof.position.set(vx, vy + 3.4, vz);
    villa.add(roof);

    // Modern steel posts
    for (let c = 0; c < 4; c++) {
      const px = vx + (c % 2 === 0 ? -4.2 : 4.2);
      const pz = vz + (c < 2 ? -3.4 : 3.4);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.4, 0.18), steelMat);
      post.position.set(px, vy + 1.7, pz);
      villa.add(post);
    }

    // Warm Interior Glowing Room
    const room = new THREE.Mesh(new THREE.BoxGeometry(6.8, 2.9, 5.4), interiorGlowMat);
    room.position.set(vx - 1.0, vy + 1.7, vz);
    villa.add(room);

    // Glass walls
    const glass = new THREE.Mesh(new THREE.BoxGeometry(7.0, 2.9, 5.6), glassMat);
    glass.position.set(vx - 0.9, vy + 1.7, vz);
    villa.add(glass);

    // Cantilevered infinity plunge pool
    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.3, 5.2),
      new THREE.MeshStandardMaterial({
        color: 0x1dbcc4,
        roughness: 0.08,
        metalness: 0.88,
      })
    );
    pool.position.set(vx + 3.4, vy + 0.22, vz);
    villa.add(pool);

    scene1Group.add(villa);

    // Baseline Villa
    const baseVilla = new THREE.Mesh(
      new THREE.BoxGeometry(7.5, 3.5, 6.0),
      new THREE.MeshBasicMaterial({ color: 0xb5a490 })
    );
    baseVilla.position.set(vx, vy + 1.7, vz);
    baseScene1Group.add(baseVilla);
  }

  // Cliffside Palms
  for (let p = 0; p < 10; p++) {
    const palm = createPalmTree(6.8 + (p % 3) * 0.7, 0.75, -0.4, false);
    palm.position.set(-7.5 - (p % 3) * 2.2, 3.2 + p * 0.8, 5.0 - p * 3.2);
    scene1Group.add(palm);
  }

  // ============================================================================
  // CHAPTER 2: JUNGLE WATERFALL GORGE (Towering Canyon Cataract)
  // ============================================================================
  const scene2Group = new THREE.Group();
  scene.add(scene2Group);
  const baseScene2Group = new THREE.Group();
  baselineScene.add(baseScene2Group);

  // Towering Left & Right Canyon Limestone Rock Walls
  const leftCanyon = new THREE.Mesh(new THREE.BoxGeometry(22, 42, 38), cliffMat);
  leftCanyon.position.set(-16.0, 19.0, -14.0);
  scene2Group.add(leftCanyon);

  const rightCanyon = new THREE.Mesh(new THREE.BoxGeometry(22, 42, 38), cliffMat);
  rightCanyon.position.set(16.0, 19.0, -14.0);
  scene2Group.add(rightCanyon);

  // Back canyon horseshoe wall
  const backCanyon = new THREE.Mesh(new THREE.BoxGeometry(40, 42, 16), cliffMat);
  backCanyon.position.set(0.0, 19.0, -28.0);
  scene2Group.add(backCanyon);

  // Dynamic Animated Waterfall Fluid Chute
  const wfGeo = new THREE.PlaneGeometry(10.5, 34, 28, 64);
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
        float speed = uTime * 4.8;
        float y = vUv.y * 14.0 + speed;
        float x = vUv.x * 18.0;
        float noise = sin(x * 1.6 + y) * cos(y * 1.9 + x * 0.4) * 0.5 + 0.5;
        float foam = smoothstep(0.32, 0.82, noise);

        vec3 blueBase = vec3(0.52, 0.82, 0.94);
        vec3 whiteFoam = vec3(0.98, 0.99, 1.0);
        vec3 col = mix(blueBase, whiteFoam, foam * 0.94);

        float edgeFade = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);
        gl_FragColor = vec4(col, edgeFade * 0.94);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  });
  const waterfallMesh = new THREE.Mesh(wfGeo, wfMat);
  waterfallMesh.position.set(0.0, 17.0, -19.5);
  scene2Group.add(waterfallMesh);

  // Basin River Plunge Pool
  const plungePoolGeo = new THREE.CircleGeometry(28, 36);
  plungePoolGeo.rotateX(-Math.PI / 2);
  const plungePoolMat = new THREE.MeshStandardMaterial({
    color: 0x145242,
    roughness: 0.18,
    metalness: 0.72,
  });
  const plungePool = new THREE.Mesh(plungePoolGeo, plungePoolMat);
  plungePool.position.set(0.0, 1.4, -10.0);
  scene2Group.add(plungePool);

  // 60 Volumetric Mist Sprites rising from the cataract basin
  interface MistSpriteItem {
    mesh: THREE.Sprite;
    basePos: THREE.Vector3;
    speed: number;
    rotSpeed: number;
  }
  const mistSprites: MistSpriteItem[] = [];
  for (let m = 0; m < 60; m++) {
    const sMat = new THREE.SpriteMaterial({
      map: mistTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(sMat);
    const radius = 2.5 + Math.random() * 9.0;
    const ang = Math.random() * Math.PI * 2;
    const basePos = new THREE.Vector3(
      Math.cos(ang) * radius,
      1.5 + Math.random() * 5.0,
      -15.0 + Math.sin(ang) * radius * 0.6
    );
    sprite.position.copy(basePos);
    sprite.scale.setScalar(5.0 + Math.random() * 7.0);
    scene2Group.add(sprite);
    mistSprites.push({
      mesh: sprite,
      basePos,
      speed: 0.9 + Math.random() * 1.5,
      rotSpeed: (Math.random() - 0.5) * 0.8,
    });
  }

  // Diagonal Volumetric God-Rays
  const godRayMat = new THREE.MeshBasicMaterial({
    map: godRayTexture,
    transparent: true,
    opacity: 0.38,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const godRayMesh = new THREE.Mesh(new THREE.PlaneGeometry(18, 46), godRayMat);
  godRayMesh.position.set(3.8, 19.0, -12.0);
  godRayMesh.rotation.z = -0.32;
  godRayMesh.rotation.y = 0.18;
  scene2Group.add(godRayMesh);

  // Gorge Jungle Palms & Ferns
  for (let p = 0; p < 16; p++) {
    const side = p % 2 === 0 ? -1 : 1;
    const palm = createPalmTree(6.4 + (p % 3) * 0.7, 0.75, side * 0.45, false);
    palm.position.set(side * (5.8 + (p % 3) * 2.5), 2.5 + (p % 4) * 2.4, -6.0 - p * 1.6);
    scene2Group.add(palm);
  }

  // Baseline Waterfall & Cliffs
  const baseWaterfall = new THREE.Mesh(
    new THREE.PlaneGeometry(10.5, 34),
    new THREE.MeshBasicMaterial({ color: 0x8ec9e6 })
  );
  baseWaterfall.position.set(0.0, 17.0, -19.5);
  baseScene2Group.add(baseWaterfall);

  const baseCliffMat = new THREE.MeshBasicMaterial({ color: 0x5a544c });
  const baseLeftCanyon = new THREE.Mesh(new THREE.BoxGeometry(22, 42, 38), baseCliffMat);
  baseLeftCanyon.position.set(-16.0, 19.0, -14.0);
  baseScene2Group.add(baseLeftCanyon);

  const baseRightCanyon = new THREE.Mesh(new THREE.BoxGeometry(22, 42, 38), baseCliffMat);
  baseRightCanyon.position.set(16.0, 19.0, -14.0);
  baseScene2Group.add(baseRightCanyon);

  // ============================================================================
  // CHAPTER 3: CRESCENT BAY (Layered Headlands & Turquoise Lagoon)
  // ============================================================================
  const scene3Group = new THREE.Group();
  scene.add(scene3Group);
  const baseScene3Group = new THREE.Group();
  baselineScene.add(baseScene3Group);

  // Turquoise Bay Ocean
  const bayWater = new THREE.Mesh(oceanGeo, oceanMat);
  bayWater.position.set(0, 0.0, 0);
  scene3Group.add(bayWater);

  // Sweeping Crescent Beach Sandspit
  const crescentGeo = new THREE.TorusGeometry(34, 6.0, 16, 52, Math.PI * 0.8);
  crescentGeo.rotateX(Math.PI / 2);
  const crescentMat = new THREE.MeshStandardMaterial({
    map: sandTex.map,
    bumpMap: sandTex.bumpMap,
    bumpScale: 0.035,
    roughness: 0.7,
  });
  const crescentMesh = new THREE.Mesh(crescentGeo, crescentMat);
  crescentMesh.position.set(4.5, 0.2, -18.0);
  scene3Group.add(crescentMesh);

  // Volcanic Mountain Headlands on left
  const headland = new THREE.Mesh(new THREE.ConeGeometry(38, 28, 8), cliffMat);
  headland.position.set(-28.0, 12.0, -32.0);
  scene3Group.add(headland);

  // Modern Cliffside Infinity Pavilion
  const pavilion = new THREE.Group();
  pavilion.position.set(-8.0, 6.5, -20.0);
  const pavSlab = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.45, 8.5), teakMat);
  pavilion.add(pavSlab);
  const pavRoof = new THREE.Mesh(new THREE.BoxGeometry(11.4, 0.35, 8.8), teakMat);
  pavRoof.position.y = 3.2;
  pavilion.add(pavRoof);
  const pavRoom = new THREE.Mesh(new THREE.BoxGeometry(7.0, 2.8, 5.5), interiorGlowMat);
  pavRoom.position.set(-1.0, 1.6, 0);
  pavilion.add(pavRoom);
  scene3Group.add(pavilion);

  // Ridge Coconut Palms
  for (let p = 0; p < 14; p++) {
    const ang = -0.4 + (p / 13) * 0.8;
    const palm = createPalmTree(6.8 + (p % 3) * 0.8, 0.7, ang, false);
    palm.position.set(-10.0 + p * 2.8, 1.8, -10.0 - (p % 2) * 2.2);
    scene3Group.add(palm);
  }

  // ============================================================================
  // CHAPTER ATMOSPHERIC COLOR CONFIGURATIONS
  // ============================================================================
  const chapterAtmospheres = [
    { top: new THREE.Color(0x1a3a5c), bottom: new THREE.Color(0xf69c5e), sun: new THREE.Color(0xfff2d4) }, // Sunset Atoll
    { top: new THREE.Color(0x284a6c), bottom: new THREE.Color(0xe6a172), sun: new THREE.Color(0xffecc8) }, // Cliffside Villas
    { top: new THREE.Color(0x163426), bottom: new THREE.Color(0x2d684c), sun: new THREE.Color(0xdffff0) }, // Jungle Waterfall
    { top: new THREE.Color(0x2478a0), bottom: new THREE.Color(0x56c4d4), sun: new THREE.Color(0xfffedc) }, // Crescent Bay
  ];

  function updateChapterVisibility(sceneId: number) {
    scene0Group.visible = sceneId === 0;
    scene1Group.visible = sceneId === 1;
    scene2Group.visible = sceneId === 2;
    scene3Group.visible = sceneId === 3;

    baseScene0Group.visible = sceneId === 0;
    baseScene1Group.visible = sceneId === 1;
    baseScene2Group.visible = sceneId === 2;
    baseScene3Group.visible = sceneId === 3;

    const atm = chapterAtmospheres[sceneId] || chapterAtmospheres[0];
    skyMat.uniforms.uTopColor.value.copy(atm.top);
    skyMat.uniforms.uBottomColor.value.copy(atm.bottom);
    skyMat.uniforms.uSunColor.value.copy(atm.sun);
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

      updateChapterVisibility(sceneId);

      // Animate ocean shader
      oceanMat.uniforms.uTime.value = elapsed;
      oceanMat.uniforms.uWaveStrength.value = waveStrength;
      oceanMat.uniforms.uWaterClarity.value = waterClarity;
      oceanMat.uniforms.uCamPos.value.copy(camera.position);

      // Animate waterfall shader & mist particles
      wfMat.uniforms.uTime.value = elapsed;

      for (let i = 0; i < mistSprites.length; i++) {
        const item = mistSprites[i];
        const yOffset = (elapsed * item.speed + i * 0.4) % 8.0;
        item.mesh.position.y = item.basePos.y + yOffset;
        item.mesh.material.opacity = Math.sin((yOffset / 8.0) * Math.PI) * 0.45 * mistDensity;
        item.mesh.material.rotation += item.rotSpeed * 0.02;
      }

      godRayMesh.material.opacity = (0.3 + Math.sin(elapsed * 1.2) * 0.08) * mistDensity;

      // Sun position & intensity
      const sunElev = 18.0 + sunElevationScale * 22.0;
      sunLight.position.set(-30, sunElev, -60);
      sunLight.intensity = 2.8 + sunElevationScale * 1.4;
      skyMat.uniforms.uSunPos.value.copy(sunLight.position).normalize();

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
        // 9:16 Vertical Top/Bottom Dual Viewport
        const halfH = Math.floor(h / 2);
        renderer.setScissorTest(true);

        // Top: 9th Iteration PBR
        renderer.setViewport(0, halfH, w, h - halfH);
        renderer.setScissor(0, halfH, w, h - halfH);
        renderer.render(scene, camera);

        // Bottom: 1st Attempt Baseline
        renderer.setViewport(0, 0, w, halfH);
        renderer.setScissor(0, 0, w, halfH);
        renderer.render(baselineScene, camera);
      } else if (viewMode === "split") {
        // Interactive Horizontal Split-Screen Slider Wipe
        const splitX = Math.max(1, Math.min(w - 1, Math.floor(w * (sliderPosition / 100))));
        renderer.setScissorTest(true);

        // Left: 9th Iteration PBR
        renderer.setViewport(0, 0, splitX, h);
        renderer.setScissor(0, 0, splitX, h);
        renderer.render(scene, camera);

        // Right: 1st Attempt Baseline
        renderer.setViewport(splitX, 0, w - splitX, h);
        renderer.setScissor(splitX, 0, w - splitX, h);
        renderer.render(baselineScene, camera);
      }
    },

    resize: (_width: number, _height: number) => {
      // standard dynamic canvas resize
    },
  };
}
