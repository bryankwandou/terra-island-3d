import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronRight,
  Sparkles,
  Layers,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

interface TerraVideoViewerProps {
  activeChapter: number;
  isPlaying: boolean;
  onChapterChange: (chapter: number) => void;
  onPlayPauseToggle: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  sliderPosition: number;
  onSliderChange: (pos: number) => void;
}

const CHAPTER_TIMESTAMPS = [0.0, 5.0, 10.0, 15.0];
const CHAPTER_POSTERS = [
  "/posters/chapter_0.jpg",
  "/posters/chapter_1.jpg",
  "/posters/chapter_2.jpg",
  "/posters/chapter_3.jpg",
];

const CHAPTER_METADATA = [
  {
    title: "Sunset Atoll",
    time: "00:00 – 00:05",
    baseline: "Uniform cyan plane, 9 straight cylinder palms",
    iteration9: "Subsurface caustics, 44 curved palms, anisotropic solar glitter",
    fps: "120 FPS",
    samples: "512 spp",
  },
  {
    title: "Cliffside Villas",
    time: "00:05 – 00:10",
    baseline: "Blocky voxel rock steps, flat unlit boxes",
    iteration9: "Mirror-wet sand reflection, rolling foam swash, warm teak cantilever",
    fps: "118 FPS",
    samples: "512 spp",
  },
  {
    title: "Jungle Waterfall",
    time: "00:10 – 00:15",
    baseline: "Smooth green hill spheres, flat white ribbon",
    iteration9: "Limestone canyon strata, multi-chute fluid cascade, volumetric mist",
    fps: "115 FPS",
    samples: "768 spp",
  },
  {
    title: "Crescent Bay",
    time: "00:15 – 00:20",
    baseline: "Low-poly green terrain cones, flat gray boxes",
    iteration9: "Layered mountain headlands in golden haze, turquoise reef lagoon",
    fps: "122 FPS",
    samples: "512 spp",
  },
];

export const TerraVideoViewer: React.FC<TerraVideoViewerProps> = ({
  activeChapter,
  isPlaying,
  onChapterChange,
  onPlayPauseToggle,
  isMuted,
  onToggleMute,
  sliderPosition,
  onSliderChange,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(20);
  const [hasStarted, setHasStarted] = useState(false);

  // Sync play/pause and muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (isPlaying) {
      video.play().then(() => setHasStarted(true)).catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying, isMuted]);

  // Sync active chapter seeking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const target = CHAPTER_TIMESTAMPS[activeChapter] ?? 0;
    if (Math.abs(video.currentTime - target) > 0.45) {
      video.currentTime = target;
      video.play().then(() => setHasStarted(true)).catch(() => {});
    }
  }, [activeChapter]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const cur = video.currentTime;
    setCurrentTime(cur);

    let ch = 0;
    if (cur >= 15.0) ch = 3;
    else if (cur >= 10.0) ch = 2;
    else if (cur >= 5.0) ch = 1;
    else ch = 0;

    if (ch !== activeChapter) {
      onChapterChange(ch);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 20);
      videoRef.current.play().then(() => setHasStarted(true)).catch(() => {});
    }
  };

  // Draggable comparison slider
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
      onSliderChange(pct);
    },
    [isDragging, onSliderChange],
  );

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const meta = CHAPTER_METADATA[activeChapter];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#070C10] select-none"
    >
      {/* Blurred Ambient Backdrop Glow matching the current scene */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none scale-110 filter blur-3xl">
        <img
          src={CHAPTER_POSTERS[activeChapter]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Studio Frame Layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-6 lg:p-8 gap-6">
        {/* Left Telemetry Panel (Desktop) */}
        <aside className="hidden lg:flex flex-col justify-between w-72 h-[720px] p-6 rounded-3xl bg-[#0E161D]/80 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#E59846]" />
              <span className="text-xs font-bold tracking-widest text-[#E59846] uppercase">
                Active Benchmark
              </span>
            </div>
            <h3 className="font-serif text-2xl font-normal text-white">
              {meta.title}
            </h3>
            <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-semibold bg-white/10 text-white/80">
              {meta.time}
            </span>

            <div className="pt-3 border-t border-white/10 space-y-3 text-xs">
              <div>
                <span className="text-white/50 block font-medium mb-1">
                  GPT-6.1 Terra | 9th Iteration
                </span>
                <p className="text-[#2EC492] font-semibold leading-relaxed">
                  {meta.iteration9}
                </p>
              </div>

              <div>
                <span className="text-white/50 block font-medium mb-1">
                  GPT-6.1 Terra | 1st Attempt
                </span>
                <p className="text-white/70 leading-relaxed">
                  {meta.baseline}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-white/60">
              <span>Frame Rate</span>
              <span className="text-[#2EC492] font-bold">{meta.fps}</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Ray Samples</span>
              <span className="text-white font-bold">{meta.samples}</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Color Space</span>
              <span className="text-white font-bold">ACES Filmic</span>
            </div>
          </div>
        </aside>

        {/* Center Vertical 9:16 Video Reel (Faithful to Original Post) */}
        <div className="relative flex-1 h-full max-h-[820px] flex items-center justify-center">
          <div className="relative h-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.85)] border border-white/15 bg-black">
            {/* Poster image visible instantly while video initializes */}
            {!hasStarted && (
              <img
                src={CHAPTER_POSTERS[activeChapter]}
                alt="Terra Preview"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}

            {/* Ground Truth Video Element */}
            <video
              ref={videoRef}
              src="/video/terra-comparison.mp4"
              poster={CHAPTER_POSTERS[activeChapter]}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="relative z-10 w-full h-full object-cover pointer-events-none"
            />

            {/* Horizontal Split Line from Video */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 pointer-events-none shadow-sm z-20" />

            {/* Vertical Interactive Draggable Comparison Divider */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize group"
              style={{ left: `${sliderPosition}%` }}
              onPointerDown={handlePointerDown}
            >
              <div className="w-[3px] h-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] group-hover:bg-[#E59846] transition-colors" />
              <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-black/10 group-hover:scale-110 transition-transform">
                <span className="text-xs font-bold leading-none select-none">↔</span>
              </div>
            </div>

            {/* Floating Video Quick Controls */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPlayPauseToggle}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} className="translate-x-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={onToggleMute}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium font-mono px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
                  {currentTime.toFixed(1)}s / {duration.toFixed(1)}s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chapter Navigation Panel (Desktop) */}
        <aside className="hidden lg:flex flex-col justify-between w-72 h-[720px] p-6 rounded-3xl bg-[#0E161D]/80 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-[#2EC492]" />
              <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
                World Chapters
              </span>
            </div>

            <div className="space-y-2">
              {CHAPTER_METADATA.map((item, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => onChapterChange(idx)}
                    className={`w-full p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-[#E59846]/15 border-[#E59846] text-white"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-[#E59846] block uppercase">
                        0{idx + 1} / {item.time}
                      </span>
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <ChevronRight size={16} className={isActive ? "text-[#E59846]" : "text-white/30"} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1">
            <span className="font-semibold text-white block">Draggable Split Comparison</span>
            <p className="leading-relaxed">
              Drag the white handle ↔ horizontally to inspect pixel fidelity between 1st attempt and 9th iteration.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
