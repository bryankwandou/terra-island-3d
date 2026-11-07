import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Layers,
  Monitor,
  Smartphone,
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
  const videoPrimaryRef = useRef<HTMLVideoElement | null>(null);
  const videoSecondaryRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [displayLayout, setDisplayLayout] = useState<"widescreen" | "reel">("widescreen");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(20);

  // Synchronize play/pause and muted between primary and secondary video elements
  useEffect(() => {
    const v1 = videoPrimaryRef.current;
    const v2 = videoSecondaryRef.current;
    if (v1) {
      v1.muted = isMuted;
      if (isPlaying) {
        v1.play().catch(() => {});
      } else {
        v1.pause();
      }
    }
    if (v2) {
      v2.muted = true; // keep secondary silent
      if (isPlaying) {
        v2.play().catch(() => {});
      } else {
        v2.pause();
      }
    }
  }, [isPlaying, isMuted]);

  // Sync active chapter seeking
  useEffect(() => {
    const v1 = videoPrimaryRef.current;
    const v2 = videoSecondaryRef.current;
    const target = CHAPTER_TIMESTAMPS[activeChapter] ?? 0;
    if (v1 && Math.abs(v1.currentTime - target) > 0.45) {
      v1.currentTime = target;
      if (isPlaying) v1.play().catch(() => {});
    }
    if (v2 && Math.abs(v2.currentTime - target) > 0.45) {
      v2.currentTime = target;
      if (isPlaying) v2.play().catch(() => {});
    }
  }, [activeChapter, isPlaying]);

  const handleTimeUpdate = () => {
    const v1 = videoPrimaryRef.current;
    if (!v1) return;
    const cur = v1.currentTime;
    setCurrentTime(cur);

    // Sync secondary video if drifting
    const v2 = videoSecondaryRef.current;
    if (v2 && Math.abs(v2.currentTime - cur) > 0.12) {
      v2.currentTime = cur;
    }

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
    if (videoPrimaryRef.current) {
      setDuration(videoPrimaryRef.current.duration || 20);
      if (isPlaying) videoPrimaryRef.current.play().catch(() => {});
    }
    if (videoSecondaryRef.current) {
      if (isPlaying) videoSecondaryRef.current.play().catch(() => {});
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
      className="relative w-screen h-screen overflow-hidden bg-[#070C10] select-none"
    >
      {displayLayout === "widescreen" ? (
        /* ==================================================================== */
        /* FULL-BLEED 16:9 WIDESCREEN CINEMATIC DUAL-VIEWPORT (NO BLACK BARS)   */
        /* ==================================================================== */
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Layer 1: Left Viewport (GPT-6.1 Terra | 9th Iteration - Top Crop) */}
          <div
            className="absolute inset-0 h-full overflow-hidden z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-screen h-full overflow-hidden">
              <video
                ref={videoPrimaryRef}
                src="/video/terra-comparison.mp4"
                poster={CHAPTER_POSTERS[activeChapter]}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                style={{
                  width: "100%",
                  height: "200%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  transform: "translateY(0%)",
                }}
                className="pointer-events-none"
              />
              {/* Badge: 9th Iteration */}
              <div className="absolute top-20 left-8 z-30 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2EC492] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide">
                    GPT-6.1 Terra · 9th Iteration (Photorealistic)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2: Right Viewport (GPT-6.1 Terra | 1st Attempt - Bottom Crop) */}
          <div
            className="absolute inset-0 h-full overflow-hidden z-0"
            style={{ left: 0, width: "100%" }}
          >
            <div className="absolute inset-0 w-screen h-full overflow-hidden">
              <video
                ref={videoSecondaryRef}
                src="/video/terra-comparison.mp4"
                poster={CHAPTER_POSTERS[activeChapter]}
                playsInline
                autoPlay
                loop
                muted={true}
                style={{
                  width: "100%",
                  height: "200%",
                  objectFit: "cover",
                  objectPosition: "bottom center",
                  transform: "translateY(-50%)",
                }}
                className="pointer-events-none"
              />
              {/* Badge: 1st Attempt */}
              <div className="absolute top-20 right-8 z-30 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E59846]" />
                  <span className="text-xs font-semibold tracking-wide">
                    GPT-6.1 Terra · 1st Attempt (Baseline)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize group"
            style={{ left: `${sliderPosition}%` }}
            onPointerDown={handlePointerDown}
          >
            <div className="w-[3px] h-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] group-hover:bg-[#E59846] transition-colors" />
            <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-black/10 group-hover:scale-110 transition-transform">
              <span className="text-sm font-bold leading-none select-none">↔</span>
            </div>
          </div>
        </div>
      ) : (
        /* ==================================================================== */
        /* STACKED ORIGINAL 9:16 REEL VIEW (FOR VERTICAL MOBILE COMPARISON)     */
        /* ==================================================================== */
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative h-[85vh] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
            <video
              ref={videoPrimaryRef}
              src="/video/terra-comparison.mp4"
              poster={CHAPTER_POSTERS[activeChapter]}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 pointer-events-none shadow-sm z-20" />
          </div>
        </div>
      )}

      {/* Layout Mode Switcher (Widescreen 16:9 vs Stacked Reel 9:16) */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 flex items-center p-1 rounded-full bg-[rgba(244,240,230,0.94)] border border-[rgba(30,38,41,0.12)] shadow-xl backdrop-blur-md">
        <button
          type="button"
          onClick={() => setDisplayLayout("widescreen")}
          className={`px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            displayLayout === "widescreen"
              ? "bg-white text-[#1E2629] shadow-sm font-bold"
              : "text-[#727670] hover:text-[#1E2629]"
          }`}
        >
          <Monitor size={12} />
          <span>Widescreen Split (16:9 HD)</span>
        </button>
        <button
          type="button"
          onClick={() => setDisplayLayout("reel")}
          className={`px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            displayLayout === "reel"
              ? "bg-white text-[#1E2629] shadow-sm font-bold"
              : "text-[#727670] hover:text-[#1E2629]"
          }`}
        >
          <Smartphone size={12} />
          <span>Stacked Reel (9:16)</span>
        </button>
      </div>

      {/* Floating Video Quick Controls */}
      <div className="fixed bottom-24 right-8 z-40 flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          onClick={onPlayPauseToggle}
          className="circle-btn"
          title={isPlaying ? "Pause" : "Play"}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
        </button>
        <button
          type="button"
          onClick={() => {
            const v = videoPrimaryRef.current;
            if (v) v.currentTime = CHAPTER_TIMESTAMPS[activeChapter] ?? 0;
          }}
          className="circle-btn"
          title="Replay Current Chapter"
          aria-label="Replay Chapter"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
};
