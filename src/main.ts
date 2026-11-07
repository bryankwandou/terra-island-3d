import "./styles/tokens.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CHAPTERS } from "./scene/chapters";
import { createRaymarchEngine } from "./scene/raymarchEngine";
import { TerraSoundscape } from "./scene/audio";

const canvas = document.getElementById("terra-canvas") as HTMLCanvasElement | null;
if (!canvas) {
  throw new Error("Missing #terra-canvas element.");
}

// 1. High-DPI WebGLRenderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);

// 2. Camera & OrbitControls (Drives the 3D Raymarching Engine in real time)
const camera = new THREE.PerspectiveCamera(
  CHAPTERS[0].fov,
  window.innerWidth / window.innerHeight,
  0.1,
  500,
);
camera.position.set(...CHAPTERS[0].startCamPos);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(...CHAPTERS[0].startLookAt);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 1.5;
controls.maxDistance = 95;
controls.update();

const raymarchEngine = createRaymarchEngine();
const soundscape = new TerraSoundscape();

// 3. UI & State Management
const editorialContainer = document.querySelector(".hud-editorial") as HTMLElement;
const kickerEl = document.getElementById("chapter-kicker") as HTMLElement;
const titleEl = document.getElementById("chapter-title") as HTMLElement;
const subtitleEl = document.getElementById("chapter-subtitle") as HTMLElement;
const dockButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".dock-item"));
const progBars = [0, 1, 2, 3].map((i) => document.getElementById(`prog-${i}`) as HTMLElement);

const btnModeUltra = document.getElementById("btn-mode-ultra") as HTMLButtonElement;
const btnModeSplit = document.getElementById("btn-mode-split") as HTMLButtonElement;
const badgeTopText = document.getElementById("badge-top-text") as HTMLElement;
const splitDivider = document.getElementById("split-divider") as HTMLElement;

const btnDirector = document.getElementById("btn-director") as HTMLButtonElement;
const directorLabel = document.getElementById("director-label") as HTMLElement;
const btnSound = document.getElementById("btn-sound") as HTMLButtonElement;
const btnMenu = document.getElementById("btn-menu") as HTMLButtonElement;
const atmospherePanel = document.getElementById("atmosphere-panel") as HTMLElement;
const btnCleanUi = document.getElementById("btn-clean-ui") as HTMLButtonElement;

const sliderSun = document.getElementById("slider-sun") as HTMLInputElement;
const valSun = document.getElementById("val-sun") as HTMLElement;
const sliderWaves = document.getElementById("slider-waves") as HTMLInputElement;
const valWaves = document.getElementById("val-waves") as HTMLElement;
const sliderMist = document.getElementById("slider-mist") as HTMLInputElement;
const valMist = document.getElementById("val-mist") as HTMLElement;
const sliderClarity = document.getElementById("slider-clarity") as HTMLInputElement;
const valClarity = document.getElementById("val-clarity") as HTMLElement;

let activeChapterIndex = 0;
let chapterElapsed = 0;
let isDirectorPlaying = true;
let isSplitMode = false;

let sunElevationScale = 0.78;
let waveStrength = 0.64;
let mistDensity = 0.88;
let waterClarity = 0.94;

function selectChapter(index: number, resetTimer = true): void {
  const clamped = ((index % CHAPTERS.length) + CHAPTERS.length) % CHAPTERS.length;
  activeChapterIndex = clamped;
  if (resetTimer) {
    chapterElapsed = 0;
  }

  const spec = CHAPTERS[clamped];
  dockButtons.forEach((btn, i) => {
    btn.classList.toggle("is-active", i === clamped);
    if (i < clamped) {
      progBars[i].style.width = "100%";
    } else if (i > clamped) {
      progBars[i].style.width = "0%";
    }
  });

  editorialContainer.classList.add("is-switching");
  window.setTimeout(() => {
    kickerEl.textContent = spec.kicker;
    titleEl.innerHTML = `<span>${spec.titleLines[0]}</span><span>${spec.titleLines[1]}</span>`;
    subtitleEl.textContent = spec.subtitle;
    editorialContainer.classList.remove("is-switching");
  }, 110);

  camera.fov = spec.fov;
  camera.updateProjectionMatrix();
  camera.position.set(...spec.startCamPos);
  controls.target.set(...spec.startLookAt);
  controls.update();

  soundscape.setChapterAtmosphere(clamped, waveStrength);
}

function setSplitComparisonMode(enableSplit: boolean): void {
  isSplitMode = enableSplit;
  btnModeUltra.classList.toggle("is-active", !enableSplit);
  btnModeUltra.setAttribute("aria-pressed", String(!enableSplit));
  btnModeSplit.classList.toggle("is-active", enableSplit);
  btnModeSplit.setAttribute("aria-pressed", String(enableSplit));

  if (enableSplit) {
    splitDivider.removeAttribute("hidden");
    badgeTopText.textContent = "GPT-6.1 Terra | 9th Iteration";
  } else {
    splitDivider.setAttribute("hidden", "");
    badgeTopText.textContent = "GPT-6.1 Terra | 10th Iteration (Ultra Realism)";
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
  }
}

function setDirectorMode(playing: boolean): void {
  isDirectorPlaying = playing;
  btnDirector.classList.toggle("is-active", playing);
  btnDirector.setAttribute("aria-pressed", String(playing));
  directorLabel.textContent = playing ? "Director Reel" : "Free Orbit";
}

renderer.domElement.addEventListener("pointerdown", () => {
  if (isDirectorPlaying) {
    setDirectorMode(false);
  }
});

dockButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = Number(btn.dataset.chapter ?? "0");
    selectChapter(idx, true);
  });
});

btnModeUltra.addEventListener("click", () => setSplitComparisonMode(false));
btnModeSplit.addEventListener("click", () => setSplitComparisonMode(true));

btnDirector.addEventListener("click", () => {
  setDirectorMode(!isDirectorPlaying);
});

btnSound.addEventListener("click", () => {
  const active = soundscape.toggle();
  btnSound.setAttribute("aria-pressed", String(active));
  soundscape.setChapterAtmosphere(activeChapterIndex, waveStrength);
});

btnMenu.addEventListener("click", () => {
  const hidden = atmospherePanel.hasAttribute("hidden");
  if (hidden) {
    atmospherePanel.removeAttribute("hidden");
    btnMenu.setAttribute("aria-expanded", "true");
  } else {
    atmospherePanel.setAttribute("hidden", "");
    btnMenu.setAttribute("aria-expanded", "false");
  }
});

btnCleanUi.addEventListener("click", () => {
  const isClean = document.body.classList.toggle("is-clean-view");
  btnCleanUi.setAttribute("aria-pressed", String(isClean));
});

sliderSun.addEventListener("input", () => {
  sunElevationScale = Number(sliderSun.value) / 100;
  if (sunElevationScale < 0.4) {
    valSun.textContent = "Deep Dusk";
  } else if (sunElevationScale < 0.82) {
    valSun.textContent = "Golden Sunset";
  } else {
    valSun.textContent = "Late Afternoon";
  }
});

sliderWaves.addEventListener("input", () => {
  waveStrength = Number(sliderWaves.value) / 100;
  soundscape.setChapterAtmosphere(activeChapterIndex, waveStrength);
  if (waveStrength < 0.35) {
    valWaves.textContent = "Calm Glass";
  } else if (waveStrength < 0.72) {
    valWaves.textContent = "Natural Surf";
  } else {
    valWaves.textContent = "High Swash";
  }
});

sliderMist.addEventListener("input", () => {
  mistDensity = Number(sliderMist.value) / 100;
  valMist.textContent = `${Math.round(mistDensity * 100)}%`;
});

sliderClarity.addEventListener("input", () => {
  waterClarity = Number(sliderClarity.value) / 100;
  valClarity.textContent = `${Math.round(waterClarity * 100)}%`;
});

window.addEventListener("keydown", (e) => {
  if (e.key >= "1" && e.key <= "4") {
    selectChapter(Number(e.key) - 1, true);
  } else if (e.key === "ArrowRight") {
    selectChapter(activeChapterIndex + 1, true);
  } else if (e.key === "ArrowLeft") {
    selectChapter(activeChapterIndex - 1, true);
  } else if (e.key.toLowerCase() === "s") {
    setSplitComparisonMode(!isSplitMode);
  } else if (e.key === " ") {
    e.preventDefault();
    setDirectorMode(!isDirectorPlaying);
  } else if (e.key.toLowerCase() === "h") {
    const isClean = document.body.classList.toggle("is-clean-view");
    btnCleanUi.setAttribute("aria-pressed", String(isClean));
  }
});

// Support URL query params (?chapter=1..4&mode=split&progress=0.5&clean=1)
const params = new URLSearchParams(window.location.search);
const initChapter = params.get("chapter");
const initMode = params.get("mode");
const initProgress = params.get("progress");
const initClean = params.get("clean");

if (initChapter) {
  const idx = Number(initChapter) - 1;
  if (!Number.isNaN(idx)) {
    selectChapter(idx, true);
  }
} else {
  selectChapter(0, true);
}

if (initMode === "split") {
  setSplitComparisonMode(true);
}

if (initProgress !== null) {
  const p = THREE.MathUtils.clamp(Number(initProgress), 0, 1);
  if (!Number.isNaN(p)) {
    chapterElapsed = p * CHAPTERS[activeChapterIndex].durationSec;
    setDirectorMode(false);
    const spec = CHAPTERS[activeChapterIndex];
    camera.position.set(
      THREE.MathUtils.lerp(spec.startCamPos[0], spec.endCamPos[0], p),
      THREE.MathUtils.lerp(spec.startCamPos[1], spec.endCamPos[1], p),
      THREE.MathUtils.lerp(spec.startCamPos[2], spec.endCamPos[2], p),
    );
    controls.target.set(
      THREE.MathUtils.lerp(spec.startLookAt[0], spec.endLookAt[0], p),
      THREE.MathUtils.lerp(spec.startLookAt[1], spec.endLookAt[1], p),
      THREE.MathUtils.lerp(spec.startLookAt[2], spec.endLookAt[2], p),
    );
    controls.update();
  }
}

if (initClean === "1") {
  document.body.classList.add("is-clean-view");
}

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  raymarchEngine.resize(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
});

// 4. Main Animation Loop
const clock = new THREE.Clock();

function animate(): void {
  requestAnimationFrame(animate);

  const delta = Math.min(clock.getDelta(), 0.1);
  const elapsed = clock.getElapsedTime();
  const spec = CHAPTERS[activeChapterIndex];

  if (isDirectorPlaying) {
    chapterElapsed += delta;
    if (chapterElapsed >= spec.durationSec) {
      selectChapter((activeChapterIndex + 1) % CHAPTERS.length, true);
    } else {
      const t = THREE.MathUtils.clamp(chapterElapsed / spec.durationSec, 0, 1);
      const smoothT = t * t * (3 - 2 * t) * 0.35 + t * 0.65;
      camera.position.set(
        THREE.MathUtils.lerp(spec.startCamPos[0], spec.endCamPos[0], smoothT),
        THREE.MathUtils.lerp(spec.startCamPos[1], spec.endCamPos[1], smoothT),
        THREE.MathUtils.lerp(spec.startCamPos[2], spec.endCamPos[2], smoothT),
      );
      controls.target.set(
        THREE.MathUtils.lerp(spec.startLookAt[0], spec.endLookAt[0], smoothT),
        THREE.MathUtils.lerp(spec.startLookAt[1], spec.endLookAt[1], smoothT),
        THREE.MathUtils.lerp(spec.startLookAt[2], spec.endLookAt[2], smoothT),
      );
      progBars[activeChapterIndex].style.width = `${(t * 100).toFixed(1)}%`;
    }
  }

  controls.update();

  raymarchEngine.render(renderer, camera, controls.target, {
    elapsed,
    sceneId: activeChapterIndex,
    sunElevationScale,
    waveStrength,
    mistDensity,
    waterClarity,
    isSplitMode,
  });
}

animate();
