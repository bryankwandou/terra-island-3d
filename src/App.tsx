import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Sliders,
  BarChart3,
  Volume2,
  VolumeX,
  Compass,
  Film,
  Sparkles,
  Info,
  Maximize2,
  Share2,
} from "lucide-react";
import { CHAPTERS } from "./scene/chapters";
import { TerraVideoViewer } from "./components/TerraVideoViewer";
import { TerraCanvas3D } from "./components/TerraCanvas3D";
import { TelemetryModal } from "./components/TelemetryModal";
import { TerraSoundscape } from "./scene/audio";

export const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<"video" | "3d">("video");
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSplit, setIsSplit] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
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
      } else if (e.key.toLowerCase() === "s") {
        setIsSplit((prev) => !prev);
      } else if (e.key.toLowerCase() === "v") {
        setViewMode((prev) => (prev === "video" ? "3d" : "video"));
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
      {/* Background Main Engine View: Video Mode vs 3D Simulation Mode */}
      {viewMode === "video" ? (
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
      ) : (
        <TerraCanvas3D
          activeChapter={activeChapter}
          isDirector={isPlaying}
          isSplit={isSplit}
          sunElevation={sunElevation}
          waveStrength={waveStrength}
          mistDensity={mistDensity}
          waterClarity={waterClarity}
        />
      )}

      {/* Top Floating Glass HUD Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 sm:p-6 pointer-events-none">
        {/* Brand Lockup */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-widest text-white leading-none">
                TERRA
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#E59846] text-[#070C10] uppercase">
                GPT-6.1 Engine
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-wider text-white/60 uppercase">
              100% Live Photorealistic MVP
            </span>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div className="pointer-events-auto hidden md:flex items-center p-1 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 shadow-xl">
          <button
            type="button"
            onClick={() => setViewMode("video")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "video"
                ? "bg-[#E59846] text-[#070C10] shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Film size={13} />
            <span>Video Reel (Ground Truth)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("3d")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "3d"
                ? "bg-[#E59846] text-[#070C10] shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Sparkles size={13} />
            <span>3D Orbit Simulation</span>
          </button>
        </div>

        {/* Top Right Action Tools */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Telemetry Button */}
          <button
            type="button"
            onClick={() => setIsTelemetryOpen(true)}
            className="h-10 px-3.5 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 flex items-center gap-2 text-xs font-semibold shadow-lg transition-all"
            title="Open Technical Telemetry & Benchmark Matrix"
          >
            <BarChart3 size={15} className="text-[#2EC492]" />
            <span className="hidden sm:inline">Telemetry</span>
          </button>

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`w-10 h-10 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 shadow-lg transition-all ${
              !isMuted ? "text-[#E59846] border-[#E59846]/40" : ""
            }`}
            title="Toggle Spatial Audio (Key M)"
            aria-label="Toggle Spatial Audio"
          >
            {!isMuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Shader & Atmosphere Controls Toggle */}
          <button
            type="button"
            onClick={() => setIsControlsOpen((p) => !p)}
            className={`w-10 h-10 rounded-full bg-[#0E161D]/80 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-white/30 shadow-lg transition-all ${
              isControlsOpen ? "text-[#E59846] border-[#E59846]" : ""
            }`}
            title="Shader and Atmosphere Controls"
            aria-label="Shader and Atmosphere Controls"
          >
            <Sliders size={16} />
          </button>
        </div>
      </header>

      {/* Atmosphere & Shader Controls Drawer / Popover */}
      {isControlsOpen && (
        <aside className="fixed top-20 right-4 sm:right-6 z-40 w-80 p-5 rounded-3xl bg-[#0E161D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold tracking-wider text-white/60 uppercase">
              Shader &amp; Atmosphere Engine
            </span>
            <span className="text-[11px] font-semibold text-[#2EC492]">60 FPS · ACES</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Solar Elevation &amp; Warmth</span>
                <span className="font-semibold text-[#E59846]">
                  {Math.round(sunElevation * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={Math.round(sunElevation * 100)}
                onChange={(e) => setSunElevation(Number(e.target.value) / 100)}
                className="w-full accent-[#E59846] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Wave Swell &amp; Swash Reach</span>
                <span className="font-semibold text-[#E59846]">{Math.round(waveStrength * 100)}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={Math.round(waveStrength * 100)}
                onChange={(e) => setWaveStrength(Number(e.target.value) / 100)}
                className="w-full accent-[#E59846] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Volumetric Mist &amp; God Rays</span>
                <span className="font-semibold text-[#E59846]">{Math.round(mistDensity * 100)}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={Math.round(mistDensity * 100)}
                onChange={(e) => setMistDensity(Number(e.target.value) / 100)}
                className="w-full accent-[#E59846] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Coral Reef Water Clarity</span>
                <span className="font-semibold text-[#E59846]">
                  {Math.round(waterClarity * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={Math.round(waterClarity * 100)}
                onChange={(e) => setWaterClarity(Number(e.target.value) / 100)}
                className="w-full accent-[#E59846] cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
            <span>Keys 1–4 switch scenes</span>
            <span>Space: Play/Pause</span>
          </div>
        </aside>
      )}

      {/* Bottom Left Editorial Scene Copy */}
      <section className="fixed bottom-24 sm:bottom-28 left-4 sm:left-8 z-30 max-w-sm sm:max-w-md pointer-events-none drop-shadow-md">
        <p className="text-xs font-bold tracking-widest text-[#E59846] uppercase mb-1">
          {currentChapterSpec.kicker}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white mb-2">
          {currentChapterSpec.titleLines[0]} <br />
          {currentChapterSpec.titleLines[1]}
        </h1>
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          {currentChapterSpec.subtitle}
        </p>
      </section>

      {/* Bottom Center 4-Scene Chapter Navigation Dock */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-[#0E161D]/85 backdrop-blur-2xl border border-white/15 shadow-2xl">
        {CHAPTERS.map((chapter, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => handleChapterSelect(idx)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                isActive
                  ? "bg-[#E59846] text-[#070C10] shadow-md scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className={`text-[10px] font-bold ${isActive ? "text-[#070C10]" : "text-[#E59846]"}`}>
                0{idx + 1}
              </span>
              <span className="hidden sm:inline whitespace-nowrap">{chapter.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Telemetry Benchmark Modal */}
      <TelemetryModal isOpen={isTelemetryOpen} onClose={() => setIsTelemetryOpen(false)} />
    </div>
  );
};
