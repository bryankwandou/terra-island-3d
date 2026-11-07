import React, { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Sliders,
  ArrowUpRight,
} from "lucide-react";
import { CHAPTERS } from "./scene/chapters";
import { TerraCanvas3D } from "./components/TerraCanvas3D";
import { TerraSoundscape } from "./scene/audio";

export const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOverview, setIsOverview] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  // Atmosphere & Light Parameters
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
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeChapter]);

  const currentChapterSpec = CHAPTERS[activeChapter];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#070C10] text-[#F7F4ED]">
      {/* Background Main Engine View: Pure Photorealistic Fullscreen 3D World */}
      <TerraCanvas3D
        activeChapter={activeChapter}
        isDirector={isPlaying}
        isSplit={false}
        isOverview={isOverview}
        sunElevation={sunElevation}
        waveStrength={waveStrength}
        mistDensity={mistDensity}
        waterClarity={waterClarity}
      />

      {/* Top Floating Glass HUD Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-start justify-between p-6 pointer-events-none">
        {/* Brand Lockup */}
        <div className="pointer-events-auto flex flex-col gap-1 text-shadow-md">
          <span className="font-sans text-lg font-semibold tracking-[0.24em] text-white leading-tight">
            TERRA
          </span>
          <span className="font-sans text-xs font-medium tracking-[0.2em] text-white/80 origin-left scale-[0.80] uppercase">
            A PACIFIC ATOLL IN ULTRA-FIDELITY
          </span>
        </div>

        {/* Top Right Action Tools */}
        <div className="pointer-events-auto flex items-center gap-2.5">
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

          {/* Atmosphere & Scene Controls Button */}
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
                <span className="font-medium text-[#1E2629]">Sun Elevation</span>
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

          <div className="pt-2 text-[11px] text-[#727670] text-center border-t border-black/10">
            Drag to orbit · Scroll to zoom · Keys 1–4
          </div>
        </aside>
      )}

      {/* Bottom Left Editorial Copy */}
      <section className="hud-editorial">
        <p className="editorial-kicker">{currentChapterSpec.kicker}</p>
        <h1 className="editorial-title">
          <span>{currentChapterSpec.titleLines[0]}</span>
          <span>{currentChapterSpec.titleLines[1]}</span>
        </h1>
        <p className="editorial-subtitle">{currentChapterSpec.subtitle}</p>
      </section>

      {/* Bottom Center Chapter Dock */}
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

      {/* Bottom Right Overview Flyover Button */}
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
    </div>
  );
};
