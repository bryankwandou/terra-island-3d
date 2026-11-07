import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createRaymarchEngine, TerraViewMode } from "../scene/raymarchEngine";
import { CHAPTERS, OVERVIEW_CAMERA } from "../scene/chapters";
import { Sparkles, Box, MoveHorizontal } from "lucide-react";

interface TerraCanvas3DProps {
  activeChapter: number;
  isDirector: boolean;
  viewMode: TerraViewMode;
  sliderPosition: number;
  onSliderChange?: (val: number) => void;
  isOverview: boolean;
  sunElevation: number;
  waveStrength: number;
  mistDensity: number;
  waterClarity: number;
  onChapterProgress?: (progress: number) => void;
  onChapterAdvance?: (nextChapter: number) => void;
}

export const TerraCanvas3D: React.FC<TerraCanvas3DProps> = ({
  activeChapter,
  isDirector,
  viewMode,
  sliderPosition,
  onSliderChange,
  isOverview,
  sunElevation,
  waveStrength,
  mistDensity,
  waterClarity,
  onChapterProgress,
  onChapterAdvance,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<ReturnType<typeof createRaymarchEngine> | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const chapterElapsedRef = useRef(0);
  const prevChapterRef = useRef(activeChapter);
  const prevOverviewRef = useRef(isOverview);
  const isDraggingRef = useRef(false);

  // Keep a mutable ref of current state to avoid stale closures in requestAnimationFrame loop
  const stateRef = useRef({
    activeChapter,
    isDirector,
    viewMode,
    sliderPosition,
    isOverview,
    sunElevation,
    waveStrength,
    mistDensity,
    waterClarity,
    onChapterProgress,
    onChapterAdvance,
  });

  stateRef.current = {
    activeChapter,
    isDirector,
    viewMode,
    sliderPosition,
    isOverview,
    sunElevation,
    waveStrength,
    mistDensity,
    waterClarity,
    onChapterProgress,
    onChapterAdvance,
  };

  // Slider pointer interactions
  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode !== "split") return;
    isDraggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) {}
  };

  const updateSliderFromClientX = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const pct = Math.round((x / rect.width) * 100);
      onSliderChange?.(pct);
    },
    [onSliderChange],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const initialSpec = CHAPTERS[activeChapter];
    const camera = new THREE.PerspectiveCamera(
      initialSpec.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      500,
    );
    camera.position.set(...initialSpec.startCamPos);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(...initialSpec.startLookAt);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.minDistance = 1.5;
    controls.maxDistance = 120;
    controlsRef.current = controls;

    const engine = createRaymarchEngine();
    engineRef.current = engine;

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      engine.resize(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    window.addEventListener("resize", handleResize);

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clockRef.current.getDelta(), 0.1);
      const elapsed = clockRef.current.getElapsedTime();

      const {
        activeChapter: currentChapter,
        isDirector: currentDirector,
        viewMode: currentViewMode,
        sliderPosition: currentSliderPos,
        isOverview: currentOverview,
        sunElevation: currentSun,
        waveStrength: currentWave,
        mistDensity: currentMist,
        waterClarity: currentClarity,
        onChapterProgress: currentProgressCb,
        onChapterAdvance: currentAdvanceCb,
      } = stateRef.current;

      const spec = CHAPTERS[currentChapter];

      if (currentOverview) {
        // Smoothly interpolate toward aerial overview perspective
        camera.position.lerp(new THREE.Vector3(...OVERVIEW_CAMERA.pos), delta * 1.8);
        controls.target.lerp(new THREE.Vector3(...OVERVIEW_CAMERA.lookAt), delta * 1.8);
      } else if (currentDirector) {
        chapterElapsedRef.current += delta;
        const dur = spec.durationSec;

        if (chapterElapsedRef.current >= dur) {
          chapterElapsedRef.current = 0;
          if (currentAdvanceCb) {
            currentAdvanceCb((currentChapter + 1) % CHAPTERS.length);
          }
        }

        const t = THREE.MathUtils.clamp((chapterElapsedRef.current % dur) / dur, 0, 1);
        const smoothT = t * t * (3 - 2 * t) * 0.35 + t * 0.65;

        const targetCam = new THREE.Vector3(
          THREE.MathUtils.lerp(spec.startCamPos[0], spec.endCamPos[0], smoothT),
          THREE.MathUtils.lerp(spec.startCamPos[1], spec.endCamPos[1], smoothT),
          THREE.MathUtils.lerp(spec.startCamPos[2], spec.endCamPos[2], smoothT),
        );
        const targetLook = new THREE.Vector3(
          THREE.MathUtils.lerp(spec.startLookAt[0], spec.endLookAt[0], smoothT),
          THREE.MathUtils.lerp(spec.startLookAt[1], spec.endLookAt[1], smoothT),
          THREE.MathUtils.lerp(spec.startLookAt[2], spec.endLookAt[2], smoothT),
        );

        camera.position.lerp(targetCam, 0.15);
        controls.target.lerp(targetLook, 0.15);

        if (currentProgressCb) {
          currentProgressCb(t);
        }
      }

      controls.update();

      engine.render(renderer, camera, controls.target, {
        elapsed,
        sceneId: currentChapter,
        sunElevationScale: currentSun,
        waveStrength: currentWave,
        mistDensity: currentMist,
        waterClarity: currentClarity,
        viewMode: currentViewMode,
        sliderPosition: currentSliderPos,
      });
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  // Update scene when chapter changes
  useEffect(() => {
    if (prevChapterRef.current !== activeChapter) {
      prevChapterRef.current = activeChapter;
      chapterElapsedRef.current = 0;
      const spec = CHAPTERS[activeChapter];
      if (cameraRef.current && controlsRef.current && !stateRef.current.isOverview) {
        cameraRef.current.fov = spec.fov;
        cameraRef.current.updateProjectionMatrix();
        cameraRef.current.position.set(...spec.startCamPos);
        controlsRef.current.target.set(...spec.startLookAt);
        controlsRef.current.update();
      }
    }
  }, [activeChapter]);

  // Update when overview mode is toggled
  useEffect(() => {
    if (prevOverviewRef.current !== isOverview) {
      prevOverviewRef.current = isOverview;
      if (!isOverview && cameraRef.current && controlsRef.current) {
        const spec = CHAPTERS[activeChapter];
        cameraRef.current.fov = spec.fov;
        cameraRef.current.updateProjectionMatrix();
        cameraRef.current.position.set(...spec.startCamPos);
        controlsRef.current.target.set(...spec.startLookAt);
        controlsRef.current.update();
      }
    }
  }, [isOverview, activeChapter]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* ============================================================= */}
      {/* 3D RENDER HUD OVERLAYS & COMPARISON LABELS                    */}
      {/* ============================================================= */}

      {/* Mode: Photorealistic 9th Iteration */}
      {viewMode === "photorealistic" && (
        <div className="absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
          <Sparkles size={13} className="text-[#E59846]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/90">
            9th Iteration · Photorealistic 3D (100% WebGL)
          </span>
        </div>
      )}

      {/* Mode: Baseline 1st Attempt */}
      {viewMode === "baseline" && (
        <div className="absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
          <Box size={13} className="text-[#8BC3DB]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/90">
            1st Attempt · Low-Poly Baseline (100% WebGL)
          </span>
        </div>
      )}

      {/* Mode: Reel (9:16 Vertical Top/Bottom Dual Viewport) */}
      {viewMode === "reel" && (
        <>
          <div className="absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-[#E59846]/40 backdrop-blur-md">
            <Sparkles size={13} className="text-[#E59846]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white">
              Top: 9th Iteration (Photorealistic PBR)
            </span>
          </div>

          {/* Horizontal Split Line Divider */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

          <div className="absolute top-[calc(50%+16px)] left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
            <Box size={13} className="text-[#8BC3DB]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white">
              Bottom: 1st Attempt (Low-Poly Baseline)
            </span>
          </div>
        </>
      )}

      {/* Mode: Split (Interactive Draggable Slider Wipe) */}
      {viewMode === "split" && (
        <>
          {/* Left Side Label */}
          <div className="absolute top-24 left-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-[#2EC492]/50 backdrop-blur-md">
            <Sparkles size={13} className="text-[#2EC492]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white">
              Left: 9th Iteration (PBR)
            </span>
          </div>

          {/* Right Side Label */}
          <div className="absolute top-24 right-8 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
            <Box size={13} className="text-[#8BC3DB]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white">
              Right: 1st Attempt (Baseline)
            </span>
          </div>

          {/* Draggable Vertical Divider Bar & Pill Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 cursor-ew-resize flex items-center justify-center group"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Vertical Line */}
            <div className="w-[3px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.6)] group-hover:bg-[#2EC492] transition-colors" />

            {/* Draggable Center Pill */}
            <div className="absolute w-9 h-9 rounded-full bg-[#1E2629]/90 border-2 border-white shadow-2xl backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-active:scale-95 transition-transform">
              <MoveHorizontal size={16} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
