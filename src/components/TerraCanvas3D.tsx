import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createRaymarchEngine } from "../scene/raymarchEngine";
import { CHAPTERS } from "../scene/chapters";

interface TerraCanvas3DProps {
  activeChapter: number;
  isDirector: boolean;
  isSplit: boolean;
  sunElevation: number;
  waveStrength: number;
  mistDensity: number;
  waterClarity: number;
  onChapterProgress?: (progress: number) => void;
}

export const TerraCanvas3D: React.FC<TerraCanvas3DProps> = ({
  activeChapter,
  isDirector,
  isSplit,
  sunElevation,
  waveStrength,
  mistDensity,
  waterClarity,
  onChapterProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<ReturnType<typeof createRaymarchEngine> | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const chapterElapsedRef = useRef(0);
  const prevChapterRef = useRef(activeChapter);

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

    const camera = new THREE.PerspectiveCamera(
      CHAPTERS[activeChapter].fov,
      window.innerWidth / window.innerHeight,
      0.1,
      500,
    );
    camera.position.set(...CHAPTERS[activeChapter].startCamPos);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(...CHAPTERS[activeChapter].startLookAt);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI * 0.495;
    controls.minDistance = 1.5;
    controls.maxDistance = 110;
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
      const spec = CHAPTERS[activeChapter];

      if (isDirector) {
        chapterElapsedRef.current += delta;
        const dur = spec.durationSec;
        const t = THREE.MathUtils.clamp((chapterElapsedRef.current % dur) / dur, 0, 1);
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
        if (onChapterProgress) {
          onChapterProgress(t);
        }
      }

      controls.update();

      engine.render(renderer, camera, controls.target, {
        elapsed,
        sceneId: activeChapter,
        sunElevationScale: sunElevation,
        waveStrength,
        mistDensity,
        waterClarity,
        isSplitMode: isSplit,
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
      if (cameraRef.current && controlsRef.current) {
        cameraRef.current.fov = spec.fov;
        cameraRef.current.updateProjectionMatrix();
        cameraRef.current.position.set(...spec.startCamPos);
        controlsRef.current.target.set(...spec.startLookAt);
        controlsRef.current.update();
      }
    }
  }, [activeChapter]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing" />;
};
