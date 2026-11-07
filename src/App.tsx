import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Sliders,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  Film,
  Layers,
} from "lucide-react";
import { CHAPTERS } from "./scene/chapters";
import { TerraVideoViewer } from "./components/TerraVideoViewer";
import { TerraCanvas3D } from "./components/TerraCanvas3D";
import { TelemetryModal } from "./components/TelemetryModal";
import { TerraSoundscape } from "./scene/audio";

export const App: React.FC = () => {
  // Default to 3D Orbit Simulation as the primary hero experience, matching mentor standard
  const [viewMode, setViewMode] = useState<"3d" | "video">("3d");
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOverview, setIsOverview] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isMuted, setIsMuted] = useState(true);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);

  // Shader & Atmosphere Parameters
  const [sunElevation, setSunElevation] = useState(0.78);
  const [waveStrength, setWaveStrength] = useState(0.64);
  const [mistDensity, setMistDensity] = useState(0.88);
  const [waterClarity, setWaterClarity] = useState(0.94);

  const soundscapeRef = useRef<TerraSoundscape | null>(null);

  useEffect(() => {
    soundscapeRef.current = new TerraSoundscape();
  }, []);

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
      } else if (e.key.toLowerCase() === "s") {
        setIsSplit((prev) => !prev);
      } else if (e.key.toLowerCase() === "v") {
        setViewMode((prev) => (prev === "3d" ? "video" : "3d"));
      } else if (e.key.toLowerCase() === "t") {
        setIsTelemetryOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeChapter]);

  const currentChapterSpec = CHAPTERS[activeChapter];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#070C10] text-[#F7F4ED]">
      {/* Background Main Engine View: 3D Simulation vs Video Mode */}
      {viewMode === "3d" ? (
        <TerraCanvas3D
          activeChapter={activeChapter}
          isDirector={isPlaying}
          isSplit={isSplit}
          isOverview={isOverview}
          sunElevation={sunElevation}
          waveStrength={waveStrength}
          mistDensity={mistDensity}
          waterClarity={waterClarity}
        />
      ) : (
        <TerraVideoViewer
          activeChapter={activeChapter}
          isPlaying={isPlaying}
          onChapterChange={setActiveChapter}
          onPlayPauseToggle={() => setIsPlaying((p) => !p)}
          isMuted={isMuted}
          onToggleMute={handleToggleAudio}
          sliderPosition={sliderPosition}
          onSliderChange={setSliderPosition}
        />
      )}

      {/* Top Floating Glass HUD Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-start justify-between p-6 pointer-events-none">
        {/* Brand Lockup (Strictly Matching Mentor Typography) */}
        <div className="pointer-events-auto flex flex-col gap-1 text-shadow-md">
          <span className="font-sans text-lg font-semibold tracking-[0.24em] text-white leading-tight">
            TERRA
          </span>
          <span className="font-sans text-xs font-medium tracking-[0.2em] text-white/80 origin-left scale-[0.80] uppercase">
            A PACIFIC ATOLL IN ULTRA-FIDELITY
          </span>
        </div>

        {/* Center Mode Switcher */}
        <div className="pointer-events-auto hidden md:flex items-center p-1 rounded-full bg-[rgba(244,240,230,0.94)] border border-[rgba(30,38,41,0.12)] shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode("3d")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "3d"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Sparkles size={13} className={viewMode === "3d" ? "text-[#D4893B]" : ""} />
            <span>3D Simulation</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("video")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "video"
                ? "bg-white text-[#1E2629] shadow-sm font-bold"
                : "text-[#727670] hover:text-[#1E2629]"
            }`}
          >
            <Film size={13} className={viewMode === "video" ? "text-[#D4893B]" : ""} />
            <span>Video Reel (Ground Truth)</span>
          </button>
        </div>

        {/* Top Right Action Tools */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          {/* Telemetry Button */}
          <button
            type="button"
            onClick={() => setIsTelemetryOpen(true)}
            className="circle-btn"
            title="Open Technical Benchmark Matrix (Key T)"
            aria-label="Technical Benchmark"
          >
            <BarChart3 size={18} className="text-[#1E2629]" />
          </button>

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`circle-btn ${!isMuted ? "is-active" : ""}`}
            title="Toggle Spatial Ocean Sound (Key M)"
            aria-label="Toggle Spatial Ocean Sound"
          >
            {!isMuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Atmosphere & Scene Controls Button (Mentor ...) */}
          <button
            type="button"
            onClick={() => setIsControlsOpen((p) => !p)}
            className={`circle-btn ${isControlsOpen ? "is-active" : ""}`}
            title="Scene Atmosphere & Realism Controls"
            aria-label="Atmosphere Controls"
          >
            <Sliders size={18} />
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
            <span className="text-[11px] font-semibold text-[#1A6B7C]">60 FPS · ACES</span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#1E2629]">Mediterranean Sun Elevation</span>
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
                <span className="font-medium text-[#1E2629]">Sea Swell &amp; Breeze</span>
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
                <span className="font-medium text-[#1E2629]">Volumetric Mist &amp; God Rays</span>
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
                <span className="font-medium text-[#1E2629]">Water Caustics &amp; Clarity</span>
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

          <div className="pt-3 border-t border-black/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsSplit((p) => !p)}
              className={`w-full py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                isSplit
                  ? "bg-[#1E2629] text-white border-[#1E2629]"
                  : "bg-white text-[#1E2629] border-black/15 hover:bg-black/5"
              }`}
            >
              <Layers size={13} />
              <span>{isSplit ? "Exit Split Compare" : "Compare 9th vs 1st Engine"}</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-[#727670] text-center">
            Drag to orbit · Scroll to zoom · Keys 1–4
          </div>
        </aside>
      )}

      {/* Bottom Left Editorial Copy (Exact Mentor Typography) */}
      <section className="hud-editorial">
        <p className="editorial-kicker">{currentChapterSpec.kicker}</p>
        <h1 className="editorial-title">
          <span>{currentChapterSpec.titleLines[0]}</span>
          <span>{currentChapterSpec.titleLines[1]}</span>
        </h1>
        <p className="editorial-subtitle">{currentChapterSpec.subtitle}</p>
      </section>

      {/* Bottom Center Chapter Dock (Exact Mentor Cream Pill Dock) */}
      <nav className="hud-dock" aria-label="Village camera chapters">
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

      {/* Bottom Right Overview Flyover Button (Exact Mentor ArrowUpRight) */}
      <div className="fixed right-6 bottom-6 z-40">
        <button
          type="button"
          onClick={() => setIsOverview((p) => !p)}
          className={`circle-btn ${isOverview ? "is-active" : ""}`}
          title="Toggle Aerial Atoll Overview (Key O)"
          aria-label="Toggle Aerial Overview"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Telemetry Benchmark Modal */}
      <TelemetryModal isOpen={isTelemetryOpen} onClose={() => setIsTelemetryOpen(false)} />
    </div>
  );
};
