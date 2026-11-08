import * as THREE from "three";
import { CHAPTERS } from "./chapters";

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

// ============================================================================
// PROCEDURAL TEXTURE GENERATORS
// ============================================================================

function createRadialMistTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(240, 248, 255, 0.85)");
  grad.addColorStop(0.35, "rgba(215, 235, 248, 0.45)");
  grad.addColorStop(0.7, "rgba(190, 220, 240, 0.12)");
  grad.addColorStop(1, "rgba(190, 220, 240, 0.0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function createGodRayTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, "rgba(255, 242, 205, 0.65)");
  grad.addColorStop(0.5, "rgba(255, 225, 165, 0.3)");
  grad.addColorStop(1, "rgba(255, 200, 130, 0.0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function createWaveNormalTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const imgData = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const nx = Math.sin(x * 0.15) * 0.5 + Math.sin((x + y) * 0.08) * 0.5;
      const ny = Math.cos(y * 0.15) * 0.5 + Math.cos((x - y) * 0.08) * 0.5;
      imgData.data[idx] = Math.floor((nx * 0.5 + 0.5) * 255);
      imgData.data[idx + 1] = Math.floor((ny * 0.5 + 0.5) * 255);
      imgData.data[idx + 2] = 255;
      imgData.data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  tex.needsUpdate = true;
  return tex;
}

export function createRaymarchEngine(): RaymarchEngineHandles {
  // Main World 3D Scene (Photorealistic 9th Iteration)
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5a260);
  scene.fog = new THREE.FogExp2(0xe29b5b, 0.0035);

  // Baseline World Scene (1st Attempt Low-poly)
  const baselineScene = new THREE.Scene();
  baselineScene.background = new THREE.Color(0x73a8c6);
  baselineScene.fog = new THREE.Fog(0x8bc3db, 30, 160);

  // Textures
  const textureLoader = new THREE.TextureLoader();
  const mistTexture = createRadialMistTexture();
  const godRayTexture = createGodRayTexture();
  const waveNormalTex = createWaveNormalTexture();

  // Load high-res scene backdrops
  const pbrBackdrops: THREE.Texture[] = [];
  const baseBackdrops: THREE.Texture[] = [];

  for (let i = 0; i < 4; i++) {
    const pTex = textureLoader.load(`./textures/scene_${i}_pbr.jpg`);
    pTex.colorSpace = THREE.SRGBColorSpace;
    pTex.minFilter = THREE.LinearMipmapLinearFilter;
    pbrBackdrops.push(pTex);

    const bTex = textureLoader.load(`./textures/scene_${i}_base.jpg`);
    bTex.colorSpace = THREE.SRGBColorSpace;
    bTex.minFilter = THREE.LinearMipmapLinearFilter;
    baseBackdrops.push(bTex);
  }

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffedd8, 1.4);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffdfb8, 0x142b3d, 1.3);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight(0xffecc2, 3.2);
  sunLight.position.set(-40, 30, -60);
  scene.add(sunLight);

  // Baseline lighting
  const baseAmb = new THREE.AmbientLight(0xffffff, 1.8);
  baselineScene.add(baseAmb);
  const baseDir = new THREE.DirectionalLight(0xffffff, 1.2);
  baseDir.position.set(20, 40, 20);
  baselineScene.add(baseDir);

  // Palm tree generator
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
      : new THREE.MeshStandardMaterial({ color: 0x423226, roughness: 0.9 });
    palm.add(new THREE.Mesh(trunkGeo, trunkMat));

    const crownPos = trunkCurve.getPoint(1.0);
    const crown = new THREE.Group();
    crown.position.copy(crownPos);

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

  // Curved Cinematic Backdrop Generator
  function createBackdropMesh(
    tex: THREE.Texture,
    camPos: [number, number, number],
    lookAt: [number, number, number],
    distance = 65,
    width = 150,
    height = 95,
  ): THREE.Mesh {
    const segments = 24;
    const geo = new THREE.PlaneGeometry(width, height, segments, 1);
    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = (x * x) / (width * width) * 18.0;
      posAttr.setZ(i, z);
    }
    geo.computeVertexNormals();

    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = -999;

    const cPos = new THREE.Vector3(...camPos);
    const lPos = new THREE.Vector3(...lookAt);
    const dir = new THREE.Vector3().subVectors(lPos, cPos).normalize();
    mesh.position.copy(cPos).addScaledVector(dir, distance);
    mesh.lookAt(cPos);

    return mesh;
  }

  // Ocean Shaders
  const oceanGeo = new THREE.PlaneGeometry(160, 90, 80, 50);
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
  // CHAPTER 0: SUNSET ATOLL
  // ============================================================================
  const scene0Group = new THREE.Group();
  scene.add(scene0Group);
  const baseScene0Group = new THREE.Group();
  baselineScene.add(baseScene0Group);

  const s0Backdrop = createBackdropMesh(pbrBackdrops[0], CHAPTERS[0].startCamPos, CHAPTERS[0].startLookAt);
  scene0Group.add(s0Backdrop);
  const baseS0Backdrop = createBackdropMesh(baseBackdrops[0], CHAPTERS[0].startCamPos, CHAPTERS[0].startLookAt);
  baseScene0Group.add(baseS0Backdrop);

  const s0Ocean = new THREE.Mesh(oceanGeo, oceanMat);
  s0Ocean.position.set(0, 0.0, 0);
  scene0Group.add(s0Ocean);

  const baseOcean = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 90),
    new THREE.MeshBasicMaterial({ color: 0x4888a8 })
  );
  baseOcean.rotateX(-Math.PI / 2);
  baseScene0Group.add(baseOcean);

  // Shoreline Sand Spit
  const sandSpitGeo = new THREE.PlaneGeometry(28, 44, 24, 24);
  sandSpitGeo.rotateX(-Math.PI / 2);
  const sandSpitMat = new THREE.MeshStandardMaterial({
    color: 0xddcaa8,
    roughness: 0.55,
    metalness: 0.15,
  });
  const sandSpit = new THREE.Mesh(sandSpitGeo, sandSpitMat);
  sandSpit.position.set(7.5, 0.14, 2.0);
  scene0Group.add(sandSpit);

  // Palms for Scene 0
  for (let p = 0; p < 14; p++) {
    const angle = (p % 2 === 0 ? 0.35 : -0.3) + (p * 0.12);
    const height = 6.2 + (p % 4) * 0.6;
    const palm = createPalmTree(height, 0.7, angle, false);
    palm.position.set(4.0 + (p % 4) * 2.8, 0.2, 8.0 - p * 2.2);
    scene0Group.add(palm);

    const basePalm = createPalmTree(height, 0.7, angle, true);
    basePalm.position.set(4.0 + (p % 4) * 2.8, 0.2, 8.0 - p * 2.2);
    baseScene0Group.add(basePalm);
  }

  // ============================================================================
  // CHAPTER 1: CLIFFSIDE LUXURY VILLAS
  // ============================================================================
  const scene1Group = new THREE.Group();
  scene.add(scene1Group);
  const baseScene1Group = new THREE.Group();
  baselineScene.add(baseScene1Group);

  const s1Backdrop = createBackdropMesh(pbrBackdrops[1], CHAPTERS[1].startCamPos, CHAPTERS[1].startLookAt);
  scene1Group.add(s1Backdrop);
  const baseS1Backdrop = createBackdropMesh(baseBackdrops[1], CHAPTERS[1].startCamPos, CHAPTERS[1].startLookAt);
  baseScene1Group.add(baseS1Backdrop);

  // Wet Sand Beach Shoreline
  const beachGeo = new THREE.PlaneGeometry(80, 50, 24, 24);
  beachGeo.rotateX(-Math.PI / 2);
  const beachMat = new THREE.MeshStandardMaterial({
    color: 0xd6c2a4,
    roughness: 0.38,
    metalness: 0.22,
  });
  const s1Beach = new THREE.Mesh(beachGeo, beachMat);
  s1Beach.position.set(0, 0.05, 2.0);
  scene1Group.add(s1Beach);

  // Cliff Rock Bluff on the left
  const cliffGeo = new THREE.BoxGeometry(22, 18, 48);
  const cliffMat = new THREE.MeshStandardMaterial({
    color: 0x332c26,
    roughness: 0.88,
  });
  const cliff = new THREE.Mesh(cliffGeo, cliffMat);
  cliff.position.set(-16.0, 7.5, -8.0);
  scene1Group.add(cliff);

  // 3 Cantilevered Modern Teak Villas
  for (let v = 0; v < 3; v++) {
    const villa = new THREE.Group();
    const vz = 5.0 - v * 12.0;
    const vx = -5.8 - v * 1.5;
    const vy = 2.4 + v * 1.1;

    // Foundation Slab
    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(9.0, 0.5, 7.5),
      new THREE.MeshStandardMaterial({ color: 0xc8b89d, roughness: 0.65 })
    );
    slab.position.set(vx, vy, vz);
    villa.add(slab);

    // Teak Roof Deck
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(9.5, 0.35, 8.0),
      new THREE.MeshStandardMaterial({ color: 0x5a3d28, roughness: 0.45 })
    );
    roof.position.set(vx, vy + 3.2, vz);
    villa.add(roof);

    // Warm Interior Glowing Room (2700K Architectural Lighting)
    const room = new THREE.Mesh(
      new THREE.BoxGeometry(7.0, 2.8, 5.5),
      new THREE.MeshStandardMaterial({
        color: 0xffe2aa,
        emissive: 0xffaa44,
        emissiveIntensity: 0.85,
        roughness: 0.3,
      })
    );
    room.position.set(vx - 0.8, vy + 1.6, vz);
    villa.add(room);

    // Cantilevered Infinity Plunge Pool
    const pool = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 0.3, 5.0),
      new THREE.MeshStandardMaterial({
        color: 0x1dbcc4,
        roughness: 0.1,
        metalness: 0.85,
      })
    );
    pool.position.set(vx + 3.2, vy + 0.25, vz);
    villa.add(pool);

    scene1Group.add(villa);
  }

  // Cliffside Palms
  for (let p = 0; p < 8; p++) {
    const palm = createPalmTree(6.8 + (p % 3) * 0.7, 0.75, -0.4, false);
    palm.position.set(-6.5 - (p % 3) * 2.5, 3.0 + p * 0.8, 4.0 - p * 3.5);
    scene1Group.add(palm);
  }

  // ============================================================================
  // CHAPTER 2: JUNGLE WATERFALL GORGE
  // ============================================================================
  const scene2Group = new THREE.Group();
  scene.add(scene2Group);
  const baseScene2Group = new THREE.Group();
  baselineScene.add(baseScene2Group);

  const s2Backdrop = createBackdropMesh(pbrBackdrops[2], CHAPTERS[2].startCamPos, CHAPTERS[2].startLookAt, 60, 160, 100);
  scene2Group.add(s2Backdrop);
  const baseS2Backdrop = createBackdropMesh(baseBackdrops[2], CHAPTERS[2].startCamPos, CHAPTERS[2].startLookAt, 60, 160, 100);
  baseScene2Group.add(baseS2Backdrop);

  // Left & Right Canyon Limestone Cliffs
  const canyonMat = new THREE.MeshStandardMaterial({
    color: 0x272e27,
    roughness: 0.92,
  });
  const leftCanyon = new THREE.Mesh(new THREE.BoxGeometry(18, 38, 32), canyonMat);
  leftCanyon.position.set(-14.5, 17.0, -14.0);
  scene2Group.add(leftCanyon);

  const rightCanyon = new THREE.Mesh(new THREE.BoxGeometry(18, 38, 32), canyonMat);
  rightCanyon.position.set(14.5, 17.0, -14.0);
  scene2Group.add(rightCanyon);

  // Dynamic Animated Waterfall Fluid Chute
  const wfGeo = new THREE.PlaneGeometry(9.5, 32, 24, 64);
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
        float speed = uTime * 4.2;
        float y = vUv.y * 12.0 + speed;
        float x = vUv.x * 16.0;
        float noise = sin(x * 1.5 + y) * cos(y * 1.8) * 0.5 + 0.5;
        float foam = smoothstep(0.35, 0.85, noise);

        vec3 blueBase = vec3(0.55, 0.82, 0.92);
        vec3 whiteFoam = vec3(0.98, 0.99, 1.0);
        vec3 col = mix(blueBase, whiteFoam, foam * 0.92);

        float edgeFade = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        gl_FragColor = vec4(col, edgeFade * 0.92);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
  });
  const waterfallMesh = new THREE.Mesh(wfGeo, wfMat);
  waterfallMesh.position.set(0.0, 16.0, -18.0);
  scene2Group.add(waterfallMesh);

  // Basin River Plunge Pool
  const plungePoolGeo = new THREE.CircleGeometry(26, 32);
  plungePoolGeo.rotateX(-Math.PI / 2);
  const plungePoolMat = new THREE.MeshStandardMaterial({
    color: 0x145242,
    roughness: 0.22,
    metalness: 0.65,
  });
  const plungePool = new THREE.Mesh(plungePoolGeo, plungePoolMat);
  plungePool.position.set(0.0, 1.2, -10.0);
  scene2Group.add(plungePool);

  // 45 Volumetric Mist Sprites rising from the cataract basin
  interface MistSpriteItem {
    mesh: THREE.Sprite;
    basePos: THREE.Vector3;
    speed: number;
    rotSpeed: number;
  }
  const mistSprites: MistSpriteItem[] = [];
  for (let m = 0; m < 45; m++) {
    const sMat = new THREE.SpriteMaterial({
      map: mistTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(sMat);
    const radius = 2.5 + Math.random() * 8.0;
    const ang = Math.random() * Math.PI * 2;
    const basePos = new THREE.Vector3(
      Math.cos(ang) * radius,
      1.5 + Math.random() * 4.0,
      -14.0 + Math.sin(ang) * radius * 0.6
    );
    sprite.position.copy(basePos);
    sprite.scale.setScalar(4.5 + Math.random() * 6.0);
    scene2Group.add(sprite);
    mistSprites.push({
      mesh: sprite,
      basePos,
      speed: 0.8 + Math.random() * 1.4,
      rotSpeed: (Math.random() - 0.5) * 0.8,
    });
  }

  // Diagonal Volumetric God-Rays
  const godRayMat = new THREE.MeshBasicMaterial({
    map: godRayTexture,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const godRayMesh = new THREE.Mesh(new THREE.PlaneGeometry(16, 42), godRayMat);
  godRayMesh.position.set(3.5, 18.0, -12.0);
  godRayMesh.rotation.z = -0.32;
  godRayMesh.rotation.y = 0.18;
  scene2Group.add(godRayMesh);

  // Gorge Jungle Palms & Ferns
  for (let p = 0; p < 12; p++) {
    const side = p % 2 === 0 ? -1 : 1;
    const palm = createPalmTree(6.2 + (p % 3) * 0.7, 0.75, side * 0.45, false);
    palm.position.set(side * (5.5 + (p % 3) * 2.4), 2.5 + (p % 4) * 2.2, -6.0 - p * 1.8);
    scene2Group.add(palm);
  }

  // ============================================================================
  // CHAPTER 3: CRESCENT BAY
  // ============================================================================
  const scene3Group = new THREE.Group();
  scene.add(scene3Group);
  const baseScene3Group = new THREE.Group();
  baselineScene.add(baseScene3Group);

  const s3Backdrop = createBackdropMesh(pbrBackdrops[3], CHAPTERS[3].startCamPos, CHAPTERS[3].startLookAt);
  scene3Group.add(s3Backdrop);
  const baseS3Backdrop = createBackdropMesh(baseBackdrops[3], CHAPTERS[3].startCamPos, CHAPTERS[3].startLookAt);
  baseScene3Group.add(baseS3Backdrop);

  // Turquoise Shallow Bay Lagoon
  const bayWater = new THREE.Mesh(oceanGeo, oceanMat);
  bayWater.position.set(0, 0.0, 0);
  scene3Group.add(bayWater);

  // Sweeping Crescent Beach Sandspit
  const crescentGeo = new THREE.TorusGeometry(32, 5.5, 16, 48, Math.PI * 0.75);
  crescentGeo.rotateX(Math.PI / 2);
  const crescentMat = new THREE.MeshStandardMaterial({
    color: 0xddc8aa,
    roughness: 0.78,
  });
  const crescentMesh = new THREE.Mesh(crescentGeo, crescentMat);
  crescentMesh.position.set(4.0, 0.15, -16.0);
  scene3Group.add(crescentMesh);

  // Ridge Coconut Palms
  for (let p = 0; p < 10; p++) {
    const ang = -0.4 + (p / 9) * 0.8;
    const palm = createPalmTree(6.8 + (p % 3) * 0.8, 0.7, ang, false);
    palm.position.set(-8.0 + p * 2.8, 1.8, -10.0 - (p % 2) * 2.2);
    scene3Group.add(palm);
  }

  // Chapter Sky Atmospheric Colors
  const chapterAtmospheres = [
    new THREE.Color(0xf5a260), // Sunset Atoll
    new THREE.Color(0xe6a172), // Cliffside Villas
    new THREE.Color(0x244837), // Jungle Waterfall
    new THREE.Color(0x3da8b8), // Crescent Bay
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

    scene.background = chapterAtmospheres[sceneId] || chapterAtmospheres[0];
  }
  updateChapterVisibility(0);

  // ============================================================================
  // RENDER LOOP & HANDLERS
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
        const yOffset = (elapsed * item.speed + i * 0.4) % 7.0;
        item.mesh.position.y = item.basePos.y + yOffset;
        item.mesh.material.opacity = Math.sin((yOffset / 7.0) * Math.PI) * 0.45 * mistDensity;
        item.mesh.material.rotation += item.rotSpeed * 0.02;
      }

      godRayMesh.material.opacity = (0.28 + Math.sin(elapsed * 1.2) * 0.08) * mistDensity;

      // Sun position & intensity
      const sunElev = 18.0 + sunElevationScale * 22.0;
      sunLight.position.set(-30, sunElev, -60);
      sunLight.intensity = 2.8 + sunElevationScale * 1.4;

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
