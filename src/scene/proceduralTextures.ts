import * as THREE from "three";

export interface TexturePair {
  map: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
}

// 1. Tropical Beach Sand Texture (diffuse + bump)
export function createSandTexture(): TexturePair {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext("2d")!;

  // Base warm golden sand gradient
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, "#e8d7b8");
  grad.addColorStop(0.5, "#decba7");
  grad.addColorStop(1, "#d6bf96");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, size, size);

  // Micro granular sand noise
  const imgData = ctx.getImageData(0, 0, size, size);
  const bData = bCtx.getImageData(0, 0, size, size);
  const d = imgData.data;
  const bd = bData.data;

  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 24;
    d[i] = Math.min(255, Math.max(0, d[i] + n));
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n * 0.9));
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n * 0.7));
    const bn = 128 + Math.floor(n * 2.8);
    bd[i] = bn;
    bd[i + 1] = bn;
    bd[i + 2] = bn;
  }
  ctx.putImageData(imgData, 0, 0);
  bCtx.putImageData(bData, 0, 0);

  // Wind ripple lines
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  for (let y = 0; y < size; y += 18) {
    ctx.fillRect(0, y, size, 5);
  }

  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(10, 10);

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(10, 10);

  return { map, bumpMap };
}

// 2. Basalt & Limestone Cliff Rock Texture (diffuse + bump)
export function createBasaltRockTexture(): TexturePair {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext("2d")!;

  ctx.fillStyle = "#2b2926";
  ctx.fillRect(0, 0, size, size);
  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, size, size);

  // Horizontal geological rock strata bands
  for (let y = 0; y < size; y += 6 + Math.random() * 20) {
    const h = 4 + Math.random() * 14;
    const tone = 36 + Math.random() * 32;
    const isMossy = Math.random() > 0.62;
    ctx.fillStyle = isMossy
      ? `rgb(${Math.floor(tone * 0.72)}, ${Math.floor(tone * 1.2)}, ${Math.floor(tone * 0.68)})`
      : `rgb(${Math.floor(tone)}, ${Math.floor(tone * 0.94)}, ${Math.floor(tone * 0.86)})`;
    ctx.fillRect(0, y, size, h);

    const bVal = Math.floor(tone * 3);
    bCtx.fillStyle = `rgb(${bVal}, ${bVal}, ${bVal})`;
    bCtx.fillRect(0, y, size, h);
  }

  // Crag noise
  const imgData = ctx.getImageData(0, 0, size, size);
  const bData = bCtx.getImageData(0, 0, size, size);
  const d = imgData.data;
  const bd = bData.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 38;
    d[i] = Math.min(255, Math.max(0, d[i] + n));
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n));
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n));
    bd[i] = Math.min(255, Math.max(0, bd[i] + n * 2.2));
    bd[i + 1] = bd[i];
    bd[i + 2] = bd[i];
  }
  ctx.putImageData(imgData, 0, 0);
  bCtx.putImageData(bData, 0, 0);

  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(6, 6);

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(6, 6);

  return { map, bumpMap };
}

// 3. Architectural Teak Wood Texture (diffuse + bump)
export function createTeakWoodTexture(): TexturePair {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext("2d")!;

  ctx.fillStyle = "#724e30";
  ctx.fillRect(0, 0, size, size);
  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, size, size);

  // Planks
  const plankW = 64;
  for (let x = 0; x < size; x += plankW) {
    const toneVar = (Math.random() - 0.5) * 20;
    ctx.fillStyle = `rgb(${Math.floor(114 + toneVar)}, ${Math.floor(78 + toneVar * 0.7)}, ${Math.floor(48 + toneVar * 0.5)})`;
    ctx.fillRect(x + 2, 0, plankW - 4, size);

    // Dark seam between planks
    ctx.fillStyle = "#1e1005";
    ctx.fillRect(x, 0, 2, size);
    bCtx.fillStyle = "#101010";
    bCtx.fillRect(x, 0, 2, size);

    // Fine wood grain lines inside each plank
    ctx.fillStyle = "rgba(42, 24, 12, 0.18)";
    for (let gx = x + 4; gx < x + plankW - 4; gx += 4) {
      ctx.fillRect(gx, 0, 1.5, size);
    }
  }

  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(4, 4);

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(4, 4);

  return { map, bumpMap };
}

// 4. Board-Formed Architectural Concrete
export function createConcreteTexture(): TexturePair {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext("2d")!;

  ctx.fillStyle = "#98928a";
  ctx.fillRect(0, 0, size, size);
  bCtx.fillStyle = "#808080";
  bCtx.fillRect(0, 0, size, size);

  // Board form lines
  for (let y = 0; y < size; y += 48) {
    ctx.fillStyle = "#5e5a55";
    ctx.fillRect(0, y, size, 2);
    bCtx.fillStyle = "#222222";
    bCtx.fillRect(0, y, size, 2);
  }

  const imgData = ctx.getImageData(0, 0, size, size);
  const bData = bCtx.getImageData(0, 0, size, size);
  const d = imgData.data;
  const bd = bData.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 18;
    d[i] = Math.min(255, Math.max(0, d[i] + n));
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n));
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n));
    bd[i] = Math.min(255, Math.max(0, bd[i] + n * 1.6));
    bd[i + 1] = bd[i];
    bd[i + 2] = bd[i];
  }
  ctx.putImageData(imgData, 0, 0);
  bCtx.putImageData(bData, 0, 0);

  const map = new THREE.CanvasTexture(canvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(3, 3);

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(3, 3);

  return { map, bumpMap };
}

// 5. Procedural Wave Normal Map
export function createWaveNormalTexture(): THREE.CanvasTexture {
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
  return tex;
}

// 6. Volumetric Mist Particle Texture
export function createRadialMistTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(245, 250, 255, 0.85)");
  grad.addColorStop(0.35, "rgba(220, 238, 250, 0.45)");
  grad.addColorStop(0.7, "rgba(195, 225, 245, 0.12)");
  grad.addColorStop(1, "rgba(195, 225, 245, 0.0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

// 7. God-Ray Light Shaft Texture
export function createGodRayTexture(): THREE.CanvasTexture {
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
  return new THREE.CanvasTexture(canvas);
}
