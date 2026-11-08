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
  createJungleLeafTexture,
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
      wireframe?: boolean;
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
  const leafTex = createJungleLeafTexture();

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
  const ambientLight = new THREE.AmbientLight(0xffeedb, 1.5);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffdfb8, 0x142b3d, 1.4);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffecc2, 3.6);
  sunLight.position.set(-40, 30, -60);
  scene.add(sunLight);

  // Baseline lighting
  const baseAmb = new THREE.AmbientLight(0xffffff, 1.8);
  baselineScene.add(baseAmb);
  const baseDir = new THREE.DirectionalLight(0xffffff, 1.2);
  baseDir.position.set(20, 40, 20);
  baselineScene.add(baseDir);

  // ============================================================================
  // COMMON MATERIALS & PROCEDURAL BUILDERS
  // ============================================================================
  const cliffMat = new THREE.MeshStandardMaterial({
    color: 0xa49886,
    map: basaltTex.map,
    bumpMap: basaltTex.bumpMap,
    bumpScale: 0.065,
    roughness: 0.86,
    metalness: 0.03,
  });

  const jungleCanopyMat = new THREE.MeshStandardMaterial({
    color: 0x2b6a26,
    map: leafTex.map,
    roughness: 0.65,
    metalness: 0.04,
  });

  const jungleCanopyDarkMat = new THREE.MeshStandardMaterial({
    color: 0x1d4d1a,
    map: leafTex.map,
    roughness: 0.72,
    metalness: 0.03,
  });

  const jungleCanopyBrightMat = new THREE.MeshStandardMaterial({
    color: 0x3d8230,
    map: leafTex.map,
    roughness: 0.6,
    metalness: 0.05,
  });

  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0xc8c2b6,
    map: concreteTex.map,
    bumpMap: concreteTex.bumpMap,
    bumpScale: 0.03,
    roughness: 0.72,
  });

  const teakMat = new THREE.MeshStandardMaterial({
    color: 0x6e4e32,
    map: teakTex.map,
    bumpMap: teakTex.bumpMap,
    bumpScale: 0.02,
    roughness: 0.45,
  });

  const steelMat = new THREE.MeshStandardMaterial({
    color: 0x181a1c,
    roughness: 0.32,
    metalness: 0.88,
  });

  const interiorGlowMat = new THREE.MeshStandardMaterial({
    color: 0xffe6b3,
    emissive: 0xffa438,
    emissiveIntensity: 1.15,
    roughness: 0.25,
  });

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xd6f0fc,
    roughness: 0.08,
    metalness: 0.92,
    transparent: true,
    opacity: 0.48,
  });

  // Procedural Coconut Palm Tree with Realistic Tapered Pinnate Fronds
  function createPalmTree(height = 7.5, curve = 0.8, angle = 0, isBaseline = false): THREE.Group {
    const palm = new THREE.Group();
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.sin(angle) * curve * 0.4, height * 0.35, Math.cos(angle) * curve * 0.4),
      new THREE.Vector3(Math.sin(angle) * curve, height * 0.72, Math.cos(angle) * curve),
      new THREE.Vector3(Math.sin(angle) * curve * 1.5, height, Math.cos(angle) * curve * 1.5),
    ]);

    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 14, 0.26, isBaseline ? 5 : 8, false);
    const trunkMat = isBaseline
      ? new THREE.MeshBasicMaterial({ color: 0x6e5844 })
      : new THREE.MeshStandardMaterial({
          color: 0x68523c,
          map: teakTex.map,
          bumpMap: teakTex.bumpMap,
          bumpScale: 0.05,
          roughness: 0.88,
        });
    palm.add(new THREE.Mesh(trunkGeo, trunkMat));

    const crownPos = trunkCurve.getPoint(1.0);
    const crown = new THREE.Group();
    crown.position.copy(crownPos);

    // Coconuts
    if (!isBaseline) {
      const nutGeo = new THREE.SphereGeometry(0.25, 6, 6);
      const nutMat = new THREE.MeshStandardMaterial({ color: 0x48321e, roughness: 0.82 });
      for (let n = 0; n < 5; n++) {
        const nut = new THREE.Mesh(nutGeo, nutMat);
        nut.position.set(Math.sin(n * 1.25) * 0.28, -0.22, Math.cos(n * 1.25) * 0.28);
        crown.add(nut);
      }
    }

    const frondCount = isBaseline ? 6 : 18;
    const frondMat = isBaseline
      ? new THREE.MeshBasicMaterial({ color: 0x3d7842 })
      : new THREE.MeshStandardMaterial({
          color: 0x2e6f34,
          roughness: 0.58,
          metalness: 0.05,
          side: THREE.DoubleSide,
        });

    for (let f = 0; f < frondCount; f++) {
      const fAngle = (f / frondCount) * Math.PI * 2;
      const length = 4.2 + (f % 3) * 0.5;
      const frondGeo = new THREE.PlaneGeometry(0.65, length, 3, 10);
      const pos = frondGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const px = pos.getX(i);
        const py = pos.getY(i);
        const t = (py + length * 0.5) / length;
        const taper = Math.sin(t * Math.PI) * 0.85 + 0.15;
        pos.setX(i, px * taper);
        const droop = -Math.pow(t, 2.1) * (1.6 + (f % 2) * 0.4);
        const vFold = -Math.abs(px) * 0.2;
        pos.setZ(i, droop + vFold);
      }
      frondGeo.computeVertexNormals();

      const frondMesh = new THREE.Mesh(frondGeo, frondMat);
      frondMesh.rotation.order = "YXZ";
      frondMesh.rotation.y = fAngle;
      frondMesh.rotation.x = -Math.PI * 0.38 - (f % 3) * 0.08;
      crown.add(frondMesh);
    }
    palm.add(crown);
    return palm;
  }

  // Procedural Multi-Lobed Rainforest Canopy Crown Cluster
  function createJungleCanopyCluster(radius = 4.2, variant = 0, isBaseline = false): THREE.Group {
    const group = new THREE.Group();
    const mat = isBaseline
      ? new THREE.MeshBasicMaterial({ color: 0x2a6628 })
      : variant === 0
      ? jungleCanopyMat
      : variant === 1
      ? jungleCanopyDarkMat
      : jungleCanopyBrightMat;

    const lobes = [
      { pos: [0, 0, 0], scale: [radius, radius * 0.72, radius] },
      { pos: [radius * 0.35, radius * 0.12, radius * 0.22], scale: [radius * 0.65, radius * 0.55, radius * 0.65] },
      { pos: [-radius * 0.32, radius * 0.1, -radius * 0.25], scale: [radius * 0.62, radius * 0.5, radius * 0.62] },
      { pos: [0, radius * 0.28, 0], scale: [radius * 0.7, radius * 0.55, radius * 0.7] },
    ];

    for (const lobe of lobes) {
      const geo = new THREE.SphereGeometry(1.0, 10, 8);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        const noise = Math.sin(x * 3.2 + y * 2.6) * 0.09 + Math.cos(z * 3.8) * 0.07;
        pos.setXYZ(i, x * (1 + noise), y * (1 + noise), z * (1 + noise));
      }
      geo.computeVertexNormals();

      const m = new THREE.Mesh(geo, mat);
      m.position.set(lobe.pos[0], lobe.pos[1], lobe.pos[2]);
      m.scale.set(lobe.scale[0], lobe.scale[1], lobe.scale[2]);
      group.add(m);
    }
    return group;
  }

  // ============================================================================
  // PROCEDURAL DYNAMIC GERSTNER OCEAN WATER SHADER
  // ============================================================================
  const oceanGeo = new THREE.PlaneGeometry(240, 160, 120, 80);
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
        vUv = uv * 8.0;
        vec3 p = position;
        float w1 = sin(p.x * 0.22 + uTime * 2.2) * cos(p.z * 0.18 + uTime * 1.8) * 0.38;
        float w2 = sin(p.x * 0.52 - uTime * 3.1 + p.z * 0.32) * 0.16;
        float w3 = cos(p.x * 1.05 + p.z * 0.75 + uTime * 4.2) * 0.08;
        p.y += (w1 + w2 + w3) * uWaveStrength;

        vec4 worldP = modelMatrix * vec4(p, 1.0);
        vWorldPos = worldP.xyz;
        vNormal = normalize(vec3(-cos(p.x * 0.22) * 0.2 * uWaveStrength, 1.0, -sin(p.z * 0.18) * 0.2 * uWaveStrength));
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
        vec3 deepWater = vec3(0.04, 0.26, 0.42);
        vec3 shallowWater = vec3(0.12, 0.78, 0.72) * uWaterClarity;
        vec3 waterColor = mix(shallowWater, deepWater, clamp(vWorldPos.y * -0.6 + 0.4, 0.0, 1.0));

        vec3 skyReflection = mix(vec3(0.96, 0.68, 0.45), vec3(0.42, 0.68, 0.88), fresnel * 0.6);
        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.6;
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
  const atollSpitGeo = new THREE.TorusGeometry(42, 8.5, 16, 56, Math.PI * 0.88);
  atollSpitGeo.rotateX(Math.PI / 2);
  const atollSpitMat = new THREE.MeshStandardMaterial({
    map: sandTex.map,
    bumpMap: sandTex.bumpMap,
    bumpScale: 0.035,
    roughness: 0.62,
  });
  const atollSpit = new THREE.Mesh(atollSpitGeo, atollSpitMat);
  atollSpit.position.set(2.0, 0.24, -20.0);
  scene0Group.add(atollSpit);

  // Inner White Sand Spit Shoreline
  const sandSpitGeo = new THREE.PlaneGeometry(42, 60, 32, 32);
  sandSpitGeo.rotateX(-Math.PI / 2);
  const sandSpit = new THREE.Mesh(sandSpitGeo, atollSpitMat);
  sandSpit.position.set(9.5, 0.18, 2.0);
  scene0Group.add(sandSpit);

  // Wet Shoreline Swash Mirror Plane
  const wetSandGeo = new THREE.PlaneGeometry(32, 52, 16, 16);
  wetSandGeo.rotateX(-Math.PI / 2);
  const wetSandMat = new THREE.MeshStandardMaterial({
    color: 0xdfcbab,
    roughness: 0.18,
    metalness: 0.38,
  });
  const wetSand = new THREE.Mesh(wetSandGeo, wetSandMat);
  wetSand.position.set(3.0, 0.2, 2.0);
  scene0Group.add(wetSand);

  // Subsurface Coral Rock Formations
  for (let c = 0; c < 12; c++) {
    const coral = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.5 + (c % 3) * 0.6, 1),
      new THREE.MeshStandardMaterial({ color: 0x224854, roughness: 0.9 })
    );
    coral.position.set(-8.0 + (c % 4) * 3.8, -0.45, 3.0 - c * 2.8);
    coral.scale.set(1.5, 0.6, 1.5);
    scene0Group.add(coral);
  }

  // 28 Coconut Palms for Sunset Atoll
  for (let p = 0; p < 28; p++) {
    const angle = (p % 2 === 0 ? 0.36 : -0.34) + (p * 0.08);
    const height = 6.6 + (p % 4) * 0.65;
    const palm = createPalmTree(height, 0.75, angle, false);
    palm.position.set(5.5 + (p % 5) * 2.6, 0.28, 12.0 - p * 1.8);
    scene0Group.add(palm);

    const basePalm = createPalmTree(height, 0.75, angle, true);
    basePalm.position.set(5.5 + (p % 5) * 2.6, 0.28, 12.0 - p * 1.8);
    baseScene0Group.add(basePalm);
  }

  // ============================================================================
  // CHAPTER 1: CLIFFSIDE LUXURY VILLAS (Modern Cantilevered Architecture)
  // ============================================================================
  const scene1Group = new THREE.Group();
  scene.add(scene1Group);
  const baseScene1Group = new THREE.Group();
  baselineScene.add(baseScene1Group);

  // Sandy Beach & Wet Shoreline on Right
  const s1Beach = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 75, 24, 24),
    atollSpitMat
  );
  s1Beach.rotateX(-Math.PI / 2);
  s1Beach.position.set(4.0, 0.1, 2.0);
  scene1Group.add(s1Beach);

  const s1WetSand = new THREE.Mesh(
    new THREE.PlaneGeometry(42, 65, 16, 16),
    wetSandMat
  );
  s1WetSand.rotateX(-Math.PI / 2);
  s1WetSand.position.set(5.5, 0.14, 2.0);
  scene1Group.add(s1WetSand);

  // Gentle Shoreline Ocean Plane
  const s1Ocean = new THREE.Mesh(new THREE.PlaneGeometry(100, 75, 48, 36), oceanMat);
  s1Ocean.rotateX(-Math.PI / 2);
  s1Ocean.position.set(28.0, 0.0, 2.0);
  scene1Group.add(s1Ocean);

  // Natural Coastal Cliff Rock Formation
  const cliffGeo = new THREE.PlaneGeometry(42, 28, 32, 24);
  const clPos = cliffGeo.attributes.position;
  for (let i = 0; i < clPos.count; i++) {
    const lx = clPos.getX(i);
    const ly = clPos.getY(i);
    const strata = Math.sin(ly * 0.7) * 1.4 + Math.cos(lx * 0.45) * 1.2;
    clPos.setZ(i, strata);
  }
  cliffGeo.computeVertexNormals();
  const cliffMesh = new THREE.Mesh(cliffGeo, cliffMat);
  cliffMesh.position.set(-18.0, 11.0, -8.0);
  cliffMesh.rotation.y = 0.48;
  scene1Group.add(cliffMesh);

  // Natural Rock Terraces
  for (let r = 0; r < 5; r++) {
    const ledge = new THREE.Mesh(
      new THREE.BoxGeometry(11.0 + (r % 3) * 2.5, 1.8, 8.5),
      cliffMat
    );
    ledge.position.set(-14.0 - r * 1.8, 1.8 + r * 2.6, 4.0 - r * 5.5);
    ledge.rotation.y = r * 0.18;
    scene1Group.add(ledge);
  }

  // 3 Stepped Modern Multi-Tiered Cantilevered Teak Villas
  for (let v = 0; v < 3; v++) {
    const villa = new THREE.Group();
    const vz = 4.0 - v * 12.0;
    const vx = -7.5 - v * 2.2;
    const vy = 2.6 + v * 2.6;

    // Foundation concrete slab
    const foundation = new THREE.Mesh(new THREE.BoxGeometry(9.6, 2.2, 7.8), concreteMat);
    foundation.position.set(vx - 2.5, vy - 1.1, vz);
    villa.add(foundation);

    // Level 1: Living Pavilion & Teak Deck
    const deck1 = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.4, 7.6), teakMat);
    deck1.position.set(vx, vy, vz);
    villa.add(deck1);

    // Warm Interior Room
    const room1 = new THREE.Mesh(new THREE.BoxGeometry(6.6, 2.6, 5.4), interiorGlowMat);
    room1.position.set(vx - 1.2, vy + 1.4, vz);
    villa.add(room1);

    // Glass walls
    const glass1 = new THREE.Mesh(new THREE.BoxGeometry(6.8, 2.6, 5.6), glassMat);
    glass1.position.set(vx - 1.1, vy + 1.4, vz);
    villa.add(glass1);

    // Steel columns
    for (let c = 0; c < 4; c++) {
      const px = vx + (c % 2 === 0 ? -4.4 : 4.4);
      const pz = vz + (c < 2 ? -3.4 : 3.4);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.8, 0.14), steelMat);
      post.position.set(px, vy + 1.4, pz);
      villa.add(post);
    }

    // Mid cantilever slab / ceiling of L1
    const midSlab = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.35, 8.0), teakMat);
    midSlab.position.set(vx, vy + 2.8, vz);
    villa.add(midSlab);

    // Level 2: Cantilevered Master Suite
    const room2 = new THREE.Mesh(new THREE.BoxGeometry(5.8, 2.4, 4.8), interiorGlowMat);
    room2.position.set(vx - 1.6, vy + 4.2, vz);
    villa.add(room2);

    const glass2 = new THREE.Mesh(new THREE.BoxGeometry(6.0, 2.4, 5.0), glassMat);
    glass2.position.set(vx - 1.5, vy + 4.2, vz);
    villa.add(glass2);

    const roof2 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.35, 6.2), teakMat);
    roof2.position.set(vx - 1.4, vy + 5.5, vz);
    villa.add(roof2);

    // Balcony glass railings
    const railing1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.9, 7.4), glassMat);
    railing1.position.set(vx + 4.7, vy + 0.65, vz);
    villa.add(railing1);

    const railing2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.9, 5.2), glassMat);
    railing2.position.set(vx + 2.2, vy + 3.45, vz);
    villa.add(railing2);

    // Infinity plunge pool on the ocean side
    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.3, 5.2),
      new THREE.MeshStandardMaterial({
        color: 0x14bec8,
        roughness: 0.08,
        metalness: 0.88,
      })
    );
    pool.position.set(vx + 3.6, vy + 0.2, vz);
    villa.add(pool);

    scene1Group.add(villa);

    // Baseline Villa
    const baseVilla = new THREE.Mesh(
      new THREE.BoxGeometry(8.0, 5.4, 6.2),
      new THREE.MeshBasicMaterial({ color: 0xb5a490 })
    );
    baseVilla.position.set(vx, vy + 2.7, vz);
    baseScene1Group.add(baseVilla);
  }

  // Cliffside Palms for Scene 1
  for (let p = 0; p < 14; p++) {
    const palm = createPalmTree(7.0 + (p % 3) * 0.7, 0.75, -0.4, false);
    palm.position.set(-9.5 - (p % 3) * 2.4, 3.6 + p * 0.8, 6.0 - p * 2.8);
    scene1Group.add(palm);
  }

  // ============================================================================
  // CHAPTER 2: JUNGLE WATERFALL GORGE (Epic V-Notch Cataract & Rainforest Canopy)
  // ============================================================================
  const scene2Group = new THREE.Group();
  scene.add(scene2Group);
  const baseScene2Group = new THREE.Group();
  baselineScene.add(baseScene2Group);

  // Central Vertical Limestone Cliff Face (Backdrop for Waterfall)
  const wfCliffGeo = new THREE.PlaneGeometry(32, 46, 32, 40);
  const cPos = wfCliffGeo.attributes.position;
  for (let i = 0; i < cPos.count; i++) {
    const cy = cPos.getY(i);
    const cx = cPos.getX(i);
    const strata = Math.sin(cy * 0.65) * 1.5 + Math.cos(cx * 0.35) * 1.1;
    cPos.setZ(i, strata);
  }
  wfCliffGeo.computeVertexNormals();
  const wfCliff = new THREE.Mesh(wfCliffGeo, cliffMat);
  wfCliff.position.set(0.0, 21.0, -32.0);
  scene2Group.add(wfCliff);

  // Background Forested Mountains (Far Behind, Framing Notch)
  const leftMountainGeo = new THREE.ConeGeometry(24, 42, 16);
  leftMountainGeo.scale(1.4, 1.0, 1.2);
  const leftMountain = new THREE.Mesh(leftMountainGeo, jungleCanopyDarkMat);
  leftMountain.position.set(-28.0, 18.0, -42.0);
  scene2Group.add(leftMountain);

  const rightMountainGeo = new THREE.ConeGeometry(24, 40, 16);
  rightMountainGeo.scale(1.4, 1.0, 1.2);
  const rightMountain = new THREE.Mesh(rightMountainGeo, jungleCanopyDarkMat);
  rightMountain.position.set(28.0, 17.0, -42.0);
  scene2Group.add(rightMountain);

  // Flanking Forested Slopes (Along the Sides, Guiding View to Center)
  for (let s = 0; s < 12; s++) {
    const sz = 18.0 - s * 4.2;
    const lDome = createJungleCanopyCluster(5.5 + (s % 3) * 0.8, (s + 1) % 3, false);
    lDome.position.set(-18.0 - (s % 3) * 3.5, 4.0 + s * 1.4, sz);
    scene2Group.add(lDome);

    const rDome = createJungleCanopyCluster(5.5 + (s % 3) * 0.8, s % 3, false);
    rDome.position.set(18.0 + (s % 3) * 3.5, 3.8 + s * 1.4, sz);
    scene2Group.add(rDome);
  }

  // Grand Cascading Waterfall Cataract (Wide Roaring Fluid Sheet)
  const wfGeo = new THREE.PlaneGeometry(15.0, 36.0, 32, 64);
  const wfMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.z += sin(uv.y * 3.14159 * 0.85) * 1.5;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uvRibbon = vec2(vUv.x * 6.0, vUv.y * 28.0 - uTime * 9.5);
        float stream = sin(uvRibbon.x * 2.8 + sin(uvRibbon.y * 0.6)) * 0.5 + 0.5;
        float turb = sin(uvRibbon.y * 1.8 + uvRibbon.x * 3.6) * cos(uvRibbon.y * 2.4 - uvRibbon.x * 1.9) * 0.5 + 0.5;
        float pulse = sin(vUv.y * 18.0 - uTime * 16.0) * 0.5 + 0.5;
        float foam = smoothstep(0.24, 0.74, stream * 0.5 + turb * 0.35 + pulse * 0.25);

        vec3 deepWater = vec3(0.08, 0.44, 0.46);
        vec3 rushingTurquoise = vec3(0.38, 0.82, 0.88);
        vec3 pureWhiteFoam = vec3(0.99, 1.0, 1.0);

        vec3 col = mix(deepWater, rushingTurquoise, smoothstep(0.1, 0.48, foam));
        col = mix(col, pureWhiteFoam, smoothstep(0.52, 0.85, foam));

        float edgeAlpha = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        float bottomMistFade = smoothstep(0.0, 0.12, vUv.y);

        gl_FragColor = vec4(col, clamp(edgeAlpha * 0.96 * bottomMistFade, 0.0, 0.98));
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  });
  const waterfallMesh = new THREE.Mesh(wfGeo, wfMat);
  waterfallMesh.position.set(0.0, 18.0, -31.2);
  scene2Group.add(waterfallMesh);

  // Plunge Pool at Base
  const plungePoolGeo = new THREE.CircleGeometry(32, 44);
  plungePoolGeo.rotateX(-Math.PI / 2);
  const plungePoolMat = new THREE.MeshStandardMaterial({
    color: 0x16463e,
    roughness: 0.14,
    metalness: 0.78,
  });
  const plungePool = new THREE.Mesh(plungePoolGeo, plungePoolMat);
  plungePool.position.set(0.0, 1.2, -24.0);
  scene2Group.add(plungePool);

  // Rolling Rainforest Canopy Carpet Filling Valley Floor (Matching Video Frame)
  const canopyRows = 8;
  const canopyCols = 9;
  for (let r = 0; r < canopyRows; r++) {
    for (let c = 0; c < canopyCols; c++) {
      const cz = 22.0 - r * 5.8;
      const cx = -18.0 + c * 4.5 + ((r % 2) * 2.2);
      const distFromCenter = Math.abs(cx) / 18.0;
      // Keep central river gorge unobstructed for the waterfall cataract plunge
      if (Math.abs(cx) < 4.8 && cz < 10.0) continue;
      const cy = 1.2 + Math.pow(distFromCenter, 2.0) * 8.0 - (r * 0.25);
      const rad = 3.6 + ((r + c) % 3) * 0.7;
      const variant = (r + c) % 3;

      const cluster = createJungleCanopyCluster(rad, variant, false);
      cluster.position.set(cx, cy, cz);
      scene2Group.add(cluster);

      if ((r + c) % 4 === 0) {
        const pHeight = 6.0 + ((r * c) % 3) * 0.6;
        const pAngle = (cx > 0 ? -1 : 1) * 0.28;
        const palm = createPalmTree(pHeight, 0.7, pAngle, false);
        palm.position.set(cx, cy + rad * 0.55, cz);
        scene2Group.add(palm);
      }

      const baseCluster = createJungleCanopyCluster(rad, variant, true);
      baseCluster.position.set(cx, cy, cz);
      baseScene2Group.add(baseCluster);
    }
  }

  // Volumetric Billowing Mist Sprites at Waterfall Base
  const mistSprites: { mesh: THREE.Sprite; basePos: THREE.Vector3; speed: number; rotSpeed: number }[] = [];
  const mistMat = new THREE.SpriteMaterial({
    map: mistTexture,
    color: 0xddf8f2,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: THREE.NormalBlending,
  });

  for (let m = 0; m < 55; m++) {
    const sprite = new THREE.Sprite(mistMat.clone());
    const bx = (Math.random() - 0.5) * 22.0;
    const by = 2.0 + Math.random() * 8.5;
    const bz = -24.0 + (Math.random() - 0.5) * 8.0;
    const s = 7.0 + Math.random() * 8.0;
    sprite.scale.set(s, s, 1.0);
    sprite.position.set(bx, by, bz);
    scene2Group.add(sprite);

    mistSprites.push({
      mesh: sprite,
      basePos: new THREE.Vector3(bx, by, bz),
      speed: 0.35 + Math.random() * 0.45,
      rotSpeed: (Math.random() - 0.5) * 0.4,
    });
  }

  // Soft Diagonal God-Ray Shaft
  const godRayGeo = new THREE.PlaneGeometry(36, 52);
  const godRayMat = new THREE.MeshBasicMaterial({
    map: godRayTexture,
    color: 0xfff6d8,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const godRayMesh = new THREE.Mesh(godRayGeo, godRayMat);
  godRayMesh.position.set(10.0, 24.0, -18.0);
  godRayMesh.rotation.z = -0.42;
  godRayMesh.rotation.y = 0.25;
  scene2Group.add(godRayMesh);

  // Baseline Chapter 2
  const baseWaterfall = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 34),
    new THREE.MeshBasicMaterial({ color: 0x64b8d8 })
  );
  baseWaterfall.position.set(0, 18.0, -27.0);
  baseScene2Group.add(baseWaterfall);

  // ============================================================================
  // CHAPTER 3: CRESCENT BAY (Volcanic Headlands & Coral Sanctuary)
  // ============================================================================
  const scene3Group = new THREE.Group();
  scene.add(scene3Group);
  const baseScene3Group = new THREE.Group();
  baselineScene.add(baseScene3Group);

  const s3Ocean = new THREE.Mesh(oceanGeo, oceanMat);
  s3Ocean.position.set(0, 0, 0);
  scene3Group.add(s3Ocean);

  // Crescent Sand Spit
  const crescentGeo = new THREE.TorusGeometry(46, 9.5, 16, 56, Math.PI * 0.78);
  crescentGeo.rotateX(Math.PI / 2);
  const crescentMesh = new THREE.Mesh(crescentGeo, atollSpitMat);
  crescentMesh.position.set(4.5, 0.22, -18.0);
  scene3Group.add(crescentMesh);

  // Volcanic Mountain Headlands on left
  const headland = new THREE.Mesh(new THREE.ConeGeometry(42, 32, 10), cliffMat);
  headland.position.set(-32.0, 14.0, -34.0);
  scene3Group.add(headland);

  // Modern Cliffside Infinity Pavilion
  const pavilion = new THREE.Group();
  pavilion.position.set(-8.5, 7.0, -20.0);
  const pavSlab = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.45, 9.0), teakMat);
  pavilion.add(pavSlab);
  const pavRoof = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.35, 9.4), teakMat);
  pavRoof.position.y = 3.4;
  pavilion.add(pavRoof);
  const pavRoom = new THREE.Mesh(new THREE.BoxGeometry(7.4, 2.9, 5.8), interiorGlowMat);
  pavRoom.position.set(-1.0, 1.7, 0);
  pavilion.add(pavRoom);
  scene3Group.add(pavilion);

  // Ridge Coconut Palms
  for (let p = 0; p < 18; p++) {
    const ang = -0.4 + (p / 17) * 0.8;
    const palm = createPalmTree(7.0 + (p % 3) * 0.8, 0.7, ang, false);
    palm.position.set(-12.0 + p * 2.8, 2.0, -10.0 - (p % 2) * 2.2);
    scene3Group.add(palm);
  }

  // ============================================================================
  // CHAPTER ATMOSPHERIC COLOR & LIGHTING CONFIGURATIONS
  // ============================================================================
  const chapterAtmospheres = [
    {
      top: new THREE.Color(0x1a3a5c),
      bottom: new THREE.Color(0xf69c5e),
      sun: new THREE.Color(0xfff2d4),
      sunPos: new THREE.Vector3(-45, 18, -45),
      hemiSky: new THREE.Color(0xffaa66),
      hemiGround: new THREE.Color(0x183848),
      fogColor: 0xe29b5b,
      fogDensity: 0.0035,
    },
    {
      top: new THREE.Color(0x284a6c),
      bottom: new THREE.Color(0xe6a172),
      sun: new THREE.Color(0xfff0d0),
      sunPos: new THREE.Vector3(35, 24, 30),
      hemiSky: new THREE.Color(0xffd8b4),
      hemiGround: new THREE.Color(0x283834),
      fogColor: 0xdeb894,
      fogDensity: 0.0032,
    },
    {
      top: new THREE.Color(0x184838),
      bottom: new THREE.Color(0x3e8a64),
      sun: new THREE.Color(0xfff8e2),
      sunPos: new THREE.Vector3(30, 48, 15),
      hemiSky: new THREE.Color(0x8ce0b4),
      hemiGround: new THREE.Color(0x163e20),
      fogColor: 0x386850,
      fogDensity: 0.0055,
    },
    {
      top: new THREE.Color(0x2478a0),
      bottom: new THREE.Color(0x56c4d4),
      sun: new THREE.Color(0xfffedc),
      sunPos: new THREE.Vector3(40, 38, 25),
      hemiSky: new THREE.Color(0x78c4ea),
      hemiGround: new THREE.Color(0x22482c),
      fogColor: 0x54a8b8,
      fogDensity: 0.004,
    },
  ];

  function updateChapterAtmosphere(sceneId: number, sunElevationScale: number) {
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

    const sunElev = atm.sunPos.y * (0.8 + sunElevationScale * 0.4);
    sunLight.position.set(atm.sunPos.x, sunElev, atm.sunPos.z);
    sunLight.color.copy(atm.sun);
    sunLight.intensity = 3.2 + sunElevationScale * 0.8;
    skyMat.uniforms.uSunPos.value.copy(sunLight.position).normalize();

    hemiLight.color.copy(atm.hemiSky);
    hemiLight.groundColor.copy(atm.hemiGround);

    if (scene.fog && (scene.fog as THREE.FogExp2).density !== undefined) {
      scene.fog.color.setHex(atm.fogColor);
      (scene.fog as THREE.FogExp2).density = atm.fogDensity;
    }
  }

  updateChapterAtmosphere(0, 0.78);

  // Track wireframe state to avoid traversing scene every frame
  let currentWireframe = false;

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
        wireframe,
      } = options;

      updateChapterAtmosphere(sceneId, sunElevationScale);

      // Wireframe mesh toggle
      if (wireframe !== undefined && wireframe !== currentWireframe) {
        currentWireframe = wireframe;
        scene.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            const m = (obj as THREE.Mesh).material;
            if (Array.isArray(m)) {
              m.forEach((mat) => (mat.wireframe = currentWireframe));
            } else if (m) {
              m.wireframe = currentWireframe;
            }
          }
        });
      }

      // Animate ocean shader
      oceanMat.uniforms.uTime.value = elapsed;
      oceanMat.uniforms.uWaveStrength.value = waveStrength;
      oceanMat.uniforms.uWaterClarity.value = waterClarity;
      oceanMat.uniforms.uCamPos.value.copy(camera.position);

      // Animate waterfall shader & mist particles
      wfMat.uniforms.uTime.value = elapsed;

      for (let i = 0; i < mistSprites.length; i++) {
        const item = mistSprites[i];
        const yOffset = (elapsed * item.speed + i * 0.35) % 8.5;
        item.mesh.position.y = item.basePos.y + yOffset;
        item.mesh.material.opacity = Math.sin((yOffset / 8.5) * Math.PI) * 0.45 * mistDensity;
        item.mesh.material.rotation += item.rotSpeed * 0.02;
      }

      godRayMesh.material.opacity = (0.28 + Math.sin(elapsed * 1.2) * 0.08) * mistDensity;

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
      // dynamic canvas resize
    },
  };
}
