import React, { useRef, useEffect, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface TerraVideoViewerProps {
  activeChapter: number;
  isPlaying: boolean;
  onChapterChange: (chapter: number) => void;
  onPlayPauseToggle: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  sliderPosition: number; // 0 to 100
  onSliderChange: (pos: number) => void;
}

const CHAPTER_TIMESTAMPS = [0.0, 5.0, 10.0, 15.0];
const CHAPTER_DURATIONS = [5.0, 5.0, 5.0, 5.0];

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

  // Sync video play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Sync active chapter seeking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const targetTime = CHAPTER_TIMESTAMPS[activeChapter] || 0;
    if (Math.abs(video.currentTime - targetTime) > 0.45) {
      video.currentTime = targetTime;
    }
  }, [activeChapter]);

  // Track video time update and chapter transitions
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const cur = video.currentTime;
    setCurrentTime(cur);

    // Determine active chapter from current time
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
    }
  };

  // Draggable Split Divider handlers
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

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* 9:16 Video Frame Container */}
      <div className="relative h-full max-h-screen aspect-[9/16] shadow-2xl overflow-hidden bg-[#0C1217]">
        {/* Ground Truth Video Element */}
        <video
          ref={videoRef}
          src="/video/terra-comparison.mp4"
          playsInline
          autoPlay
          loop
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Video Overlays matching the original post badges */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-5 py-2 rounded-xl bg-[#FAF8F4]/95 text-[#181A1C] shadow-lg flex items-center gap-2 border border-black/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2EC492] animate-pulse" />
            <span className="text-sm font-semibold tracking-tight">GPT-6.1 Terra | 9th Iteration</span>
          </div>
        </div>

        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-5 py-2 rounded-xl bg-[#FAF8F4]/95 text-[#181A1C] shadow-lg flex items-center gap-2 border border-black/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E59846]" />
            <span className="text-sm font-semibold tracking-tight">GPT-6.1 Terra | 1st Attempt</span>
          </div>
        </div>

        {/* Horizontal Split Line from Video */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30 pointer-events-none shadow-sm" />

        {/* Vertical Interactive Comparison Wipe Bar */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize group"
          style={{ left: `${sliderPosition}%` }}
          onPointerDown={handlePointerDown}
        >
          <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] group-hover:bg-[#E59846] transition-colors" />
          <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-black shadow-xl flex items-center justify-center border border-black/10 backdrop-blur-md group-hover:scale-110 transition-transform">
            <span className="text-xs font-bold leading-none select-none">↔</span>
          </div>
        </div>

        {/* Interactive In-Video Quick HUD Controls */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPlayPauseToggle}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
            </button>
            <button
              type="button"
              onClick={onToggleMute}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium font-mono px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
              {currentTime.toFixed(1)}s / {duration.toFixed(1)}s
            </span>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
