import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sliders,
  Sparkles,
  Columns,
  Box,
  ArrowUpRight,
  X,
  Film,
} from "lucide-react";
import { CHAPTERS } from "./scene/chapters";
import { TerraCanvas3D } from "./components/TerraCanvas3D";
import { TerraViewMode } from "./scene/raymarchEngine";
import { TerraSoundscape } from "./scene/audio";

export const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOverview, setIsOverview] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<TerraViewMode>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const m = params.get("mode") as TerraViewMode | null;
      if (m === "photorealistic" || m === "reel" || m === "split" || m === "baseline") return m;
      if (window.location.hash === "#baseline") return "baseline";
      if (window.location.hash === "#split") return "split";
      if (window.location.hash === "#reel") return "reel";
    } catch (_) {
      // fallback
    }
    return "photorealistic";
  });
  const [sliderPosition, setSliderPosition] = useState(50);

  // Atmosphere & Light Parameters for Real-time Simulation
  const [sunElevation, setSunElevation] = useState(0.78);
  const [waveStrength, setWaveStrength] = useState(0.64);
  const [mistDensity, setMistDensity] = useState(0.88);
  const [waterClarity, setWaterClarity] = useState(0.94);

  const soundscapeRef = useRef<TerraSoundscape | null>(null);

  useEffect(() => {
    soundscapeRef.current = new TerraSoundscape();
  }, []);

  const changeViewMode = (mode: TerraViewMode) => {
    setViewMode(mode);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("mode", mode);
      window.history.replaceState({}, "", url.toString());
    } catch (_) {}
  };

  const handleToggleAudio = () => {
    if (!soundscapeRef.current) return;
    const active = soundscapeRef.current.toggle();
    setIsMuted(!active);
    soundscapeRef.current.setChapterAtmosphere(activeChapter, waveStrength);
  };

  const handleChapterSelect = (idx: number) => {
    setIsOverview(false);
    setActiveChapter(idx);
    if (soundscapeRef.current) {
      soundscapeRef.current.setChapterAtmosphere(idx, waveStrength);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") {
        handleChapterSelect(Number(e.key) - 1);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.key.toLowerCase() === "m") {
        handleToggleAudio();
      } else if (e.key.toLowerCase() === "o") {
        setIsOverview((prev) => !prev);
      } else if (e.key.toLowerCase() === "v") {
        setViewMode((prev) =>
          prev === "photorealistic"
            ? "reel"
            : prev === "reel"
            ? "split"
            : prev === "split"
            ? "baseline"
            : "photorealistic",
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeChapter]);

  const currentChapterSpec = CHAPTERS[activeChapter];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#070C10] text-[#F7F4ED]">
      {/* ============================================================= */}
      {/* 100% PURE REAL-TIME 3D WEBGL ENGINE VIEWPORT (ZERO VIDEO TAG) */}
      {/* ============================================================= */}
      <TerraCanvas3D
        activeChapter={activeChapter}
        isDirector={isPlaying}
        viewMode={viewMode}
        sliderPosition={sliderPosition}
        onSliderChange={setSliderPosition}
        isOverview={isOverview}
        sunElevation={sunElevation}
        waveStrength={waveStrength}
        mistDensity={mistDensity}
        waterClarity={waterClarity}
        onChapterAdvance={handleChapterSelect}
      />

      {/* ============================================================= */}
      {/* TOP FLOATING GLASS HUD BAR (UNIFIED, NON-COLLIDING)           */}
      {/* ============================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-start justify-between p-6 pointer-events-none">
        {/* Brand Lockup */}
        <div className="pointer-events-auto flex flex-col gap-1 text-shadow-md">
          <span className="font-sans text-xl font-semibold tracking-[0.24em] text-white leading-tight">
            TERRA
          </span>
          <span className="font-sans text-xs font-medium tracking-[0.2em] text-white/80 origin-left scale-[0.82] uppercase">
            A PACIFIC ATOLL IN ULTRA-FIDELITY
          </span>
        </div>

        {/* Top Center Mode Segmented Pill: 100% Real-Time 3D Engine Modes */}
        <div className="pointer-events-auto flex items-center p-1 rounded-full bg-[rgba(244,240,230,0.94)] border border-[rgba(30,38,41,0.14)] shadow-2xl backdrop-blur-xl">
          <button
            type="button"
            onClick={() => changeViewMode("photorealistic")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "photorealistic"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Sparkles size={13} className={viewMode === "photorealistic" ? "text-[#E59846]" : ""} />
            <span>9th Iteration (Photorealistic 3D)</span>
          </button>

          <button
            type="button"
            onClick={() => changeViewMode("reel")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "reel"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Film size={13} className={viewMode === "reel" ? "text-[#D4893B]" : ""} />
            <span>Comparison Reel (9:16 Vertical 3D)</span>
          </button>

          <button
            type="button"
            onClick={() => changeViewMode("split")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "split"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Columns size={13} className={viewMode === "split" ? "text-[#2EC492]" : ""} />
            <span>Interactive Split Wipe 3D</span>
          </button>

          <button
            type="button"
            onClick={() => changeViewMode("baseline")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "baseline"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Box size={13} className={viewMode === "baseline" ? "text-[#1A6B7C]" : ""} />
            <span>1st Attempt (Low-Poly Baseline)</span>
          </button>
        </div>

        {/* Top Right Action Tools */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          {/* Play / Pause Toggle (Cinematic Flythrough vs Free Orbit) */}
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="circle-btn"
            title={isPlaying ? "Pause Camera Flythrough (Space)" : "Resume Cinematic Flythrough (Space)"}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={17} /> : <Play size={17} className="translate-x-0.5" />}
          </button>

          {/* Sound Toggle Button (100% Procedural Web Audio API) */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`circle-btn ${!isMuted ? "is-active" : ""}`}
            title="Toggle Spatial Ocean Soundscape (Key M)"
            aria-label="Toggle Spatial Ocean Soundscape"
          >
            {!isMuted ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>

          {/* Atmosphere & Scene Controls Button */}
          <button
            type="button"
            onClick={() => setIsControlsOpen((p) => !p)}
            className={`circle-btn ${isControlsOpen ? "is-active" : ""}`}
            title="Scene Atmosphere & Realism Controls"
            aria-label="Atmosphere Controls"
          >
            <Sliders size={17} />
          </button>
        </div>
      </header>

      {/* Atmosphere & Shader Controls Popover */}
      {isControlsOpen && (
        <aside className="fixed top-20 right-6 z-40 w-80 p-5 rounded-2xl bg-[rgba(244,240,230,0.96)] text-[#1E2629] border border-[rgba(30,38,41,0.14)] shadow-2xl space-y-4 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <span className="text-xs font-bold tracking-wider text-[#727670] uppercase">
              Atmosphere &amp; Light
            </span>
            <span className="text-[11px] font-semibold text-[#1A6B7C]">60 FPS · ACES PBR</span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E2629]">Sun Elevation &amp; Glint</span>
                <span className="text-[#727670] font-semibold">
                  {Math.round(sunElevation * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={Math.round(sunElevation * 100)}
                onChange={(e) => setSunElevation(Number(e.target.value) / 100)}
                className="w-full accent-[#D4893B] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E2629]">Gerstner Ocean Waves</span>
                <span className="text-[#727670] font-semibold">{Math.round(waveStrength * 100)}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={Math.round(waveStrength * 100)}
                onChange={(e) => setWaveStrength(Number(e.target.value) / 100)}
                className="w-full accent-[#D4893B] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E2629]">Volumetric Mist &amp; Spray</span>
                <span className="text-[#727670] font-semibold">{Math.round(mistDensity * 100)}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={Math.round(mistDensity * 100)}
                onChange={(e) => setMistDensity(Number(e.target.value) / 100)}
                className="w-full accent-[#D4893B] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E2629]">Lagoon Water Clarity &amp; Caustics</span>
                <span className="text-[#727670] font-semibold">
                  {Math.round(waterClarity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={Math.round(waterClarity * 100)}
                onChange={(e) => setWaterClarity(Number(e.target.value) / 100)}
                className="w-full accent-[#D4893B] cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#727670] text-center border-t border-black/10">
            Drag to orbit · Scroll to zoom · Keys 1–4 · Key V toggles mode
          </div>
        </aside>
      )}

      {/* ============================================================= */}
      {/* BOTTOM LEFT EDITORIAL COPY                                    */}
      {/* ============================================================= */}
      <section className="hud-editorial">
        <p className="editorial-kicker">{currentChapterSpec.kicker}</p>
        <h1 className="editorial-title">
          <span>{currentChapterSpec.titleLines[0]}</span>
          <span>{currentChapterSpec.titleLines[1]}</span>
        </h1>
        <p className="editorial-subtitle">{currentChapterSpec.subtitle}</p>
      </section>

      {/* ============================================================= */}
      {/* BOTTOM CENTER CHAPTER DOCK                                    */}
      {/* ============================================================= */}
      <nav className="hud-dock" aria-label="Atoll camera chapters">
        {CHAPTERS.map((chapter, idx) => {
          const isActive = activeChapter === idx && !isOverview;
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => handleChapterSelect(idx)}
              className={`dock-item ${isActive ? "is-active" : ""}`}
            >
              <span className="dock-index">0{idx + 1}</span>
              <span className="dock-label">{chapter.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ============================================================= */}
      {/* BOTTOM RIGHT ACTION BUTTON                                    */}
      {/* ============================================================= */}
      <div className="fixed right-6 bottom-6 z-40">
        <button
          type="button"
          onClick={() => setIsDetailsOpen((p) => !p)}
          className={`circle-btn ${isDetailsOpen ? "is-active" : ""}`}
          title="Scene Telemetry & Technical Specs"
          aria-label="Scene Details"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Technical Specs & Telemetry Drawer */}
      {isDetailsOpen && (
        <aside className="fixed bottom-20 right-6 z-40 w-88 p-5 rounded-2xl bg-[rgba(244,240,230,0.96)] text-[#1E2629] border border-[rgba(30,38,41,0.14)] shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <span className="text-xs font-bold tracking-wider text-[#727670] uppercase">
              GPT-6.1 Terra Engine Specs
            </span>
            <button
              type="button"
              onClick={() => setIsDetailsOpen(false)}
              className="text-[#727670] hover:text-[#1E2629]"
            >
              <X size={15} />
            </button>
          </div>

          <div className="py-3 space-y-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-[#727670]">Chapter</span>
              <span className="font-semibold">{currentChapterSpec.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Rendering Pipeline</span>
              <span className="font-semibold">100% WebGL PBR (Zero Video)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Frame Rate</span>
              <span className="font-semibold">60 FPS Native WebGL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Atmospheric Model</span>
              <span className="font-semibold">Mie &amp; Rayleigh Solar Scattering</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Ocean Engine</span>
              <span className="font-semibold">4-Octave Gerstner Analytical Wave</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Underwater Caustics</span>
              <span className="font-semibold">Dynamic Voronoi Light Dispersion</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#727670]">Audio Synthesis</span>
              <span className="font-semibold">100% Procedural Web Audio API</span>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};
