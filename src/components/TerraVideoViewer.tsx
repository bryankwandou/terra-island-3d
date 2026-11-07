import React, { useRef, useEffect, useState, useCallback } from "react";

interface TerraVideoViewerProps {
  activeChapter: number;
  isPlaying: boolean;
  onChapterChange: (chapter: number) => void;
  onPlayPauseToggle: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  displayMode: "photorealistic" | "reel" | "split" | "baseline";
  sliderPosition: number;
  onSliderChange: (pos: number) => void;
}

const CHAPTER_TIMESTAMPS = [0.0, 5.0, 10.0, 15.0];
const CHAPTER_POSTERS = [
  "./posters/chapter_0.jpg",
  "./posters/chapter_1.jpg",
  "./posters/chapter_2.jpg",
  "./posters/chapter_3.jpg",
];

export const TerraVideoViewer: React.FC<TerraVideoViewerProps> = ({
  activeChapter,
  isPlaying,
  onChapterChange,
  onPlayPauseToggle: _onPlayPauseToggle,
  isMuted,
  onToggleMute: _onToggleMute,
  displayMode,
  sliderPosition,
  onSliderChange,
}) => {
  const videoPrimaryRef = useRef<HTMLVideoElement | null>(null);
  const videoSecondaryRef = useRef<HTMLVideoElement | null>(null);
  const videoAmbientRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSec, setCurrentSec] = useState(0);

  // Synchronize playback between primary, secondary, and ambient video
  useEffect(() => {
    const v1 = videoPrimaryRef.current;
    const v2 = videoSecondaryRef.current;
    const vAmb = videoAmbientRef.current;

    if (v1) {
      v1.muted = isMuted;
      if (isPlaying) {
        v1.play().catch(() => { });
      } else {
        v1.pause();
      }
    }
    if (v2) {
      v2.muted = true;
      if (isPlaying) {
        v2.play().catch(() => { });
      } else {
        v2.pause();
      }
    }
    if (vAmb) {
      vAmb.muted = true;
      if (isPlaying) {
        vAmb.play().catch(() => { });
      } else {
        vAmb.pause();
      }
    }
  }, [isPlaying, isMuted, displayMode]);

  // Sync active chapter seeking
  useEffect(() => {
    const v1 = videoPrimaryRef.current;
    const v2 = videoSecondaryRef.current;
    const vAmb = videoAmbientRef.current;
    const target = CHAPTER_TIMESTAMPS[activeChapter] ?? 0;

    if (v1 && Math.abs(v1.currentTime - target) > 0.45) {
      v1.currentTime = target;
      if (isPlaying) v1.play().catch(() => { });
    }
    if (v2 && Math.abs(v2.currentTime - target) > 0.45) {
      v2.currentTime = target;
      if (isPlaying) v2.play().catch(() => { });
    }
    if (vAmb && Math.abs(vAmb.currentTime - target) > 0.45) {
      vAmb.currentTime = target;
      if (isPlaying) vAmb.play().catch(() => { });
    }
  }, [activeChapter, isPlaying]);

  const handleTimeUpdate = () => {
    const v1 = videoPrimaryRef.current;
    if (!v1) return;
    const cur = v1.currentTime;
    setCurrentSec(cur);

    // Sync secondary video if drifting
    const v2 = videoSecondaryRef.current;
    if (v2 && Math.abs(v2.currentTime - cur) > 0.12) {
      v2.currentTime = cur;
    }

    // Sync ambient video if drifting
    const vAmb = videoAmbientRef.current;
    if (vAmb && Math.abs(vAmb.currentTime - cur) > 0.15) {
      vAmb.currentTime = cur;
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

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="absolute inset-0 w-screen h-screen overflow-hidden bg-[#070C10] select-none"
    >
      {/* ------------------------------------------------------------- */}
      {/* MODE 1: PHOTOREALISTIC 9TH ITERATION FULLSCREEN (CINEMATIC)   */}
      {/* ------------------------------------------------------------- */}
      {displayMode === "photorealistic" && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoPrimaryRef}
            src="./video/terra-comparison.mp4"
            poster={CHAPTER_POSTERS[activeChapter]}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "220%",
              objectFit: "cover",
              objectPosition: "center 22%",
              transform: "translateY(-11%)",
              filter: "contrast(1.03) saturate(1.05)",
            }}
            className="pointer-events-none"
          />

          {/* Cinematic Status Pill */}
          <div className="absolute top-20 left-8 z-30 pointer-events-none">
            <div className="px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md text-white/95 border border-white/20 flex items-center gap-2 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2EC492] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                GPT-6.1 Terra · 9th Iteration (Photorealistic Ultra-Fidelity)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 2: MASTER COMPARISON REEL (NATIVE 9:16 VERTICAL DUAL)    */}
      {/* ------------------------------------------------------------- */}
      {displayMode === "reel" && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#05080B]">
          {/* Ambient Video Backlight Illumination */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45 blur-3xl scale-125">
            <video
              ref={videoAmbientRef}
              src="./video/terra-comparison.mp4"
              playsInline
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>

          {/* Precision 9:16 Studio Bezel Container */}
          <div className="relative h-[88vh] max-h-[960px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-white/20 bg-black/90 z-10">
            <video
              ref={videoPrimaryRef}
              src="./video/terra-comparison.mp4"
              poster={CHAPTER_POSTERS[activeChapter]}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover"
            />

            {/* In-Reel HUD Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
              <div className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white/95 text-[11px] font-semibold tracking-wide">
                <span>00:{Math.floor(currentSec).toString().padStart(2, "0")} / 00:20</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase">
                Dual Iteration Reel
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 3: FULL-BLEED INTERACTIVE SPLIT COMPARISON SLIDER        */}
      {/* ------------------------------------------------------------- */}
      {displayMode === "split" && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Layer 1: Left Viewport (9th Iteration) */}
          <div
            className="absolute inset-0 h-full overflow-hidden z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-screen h-full overflow-hidden">
              <video
                ref={videoPrimaryRef}
                src="./video/terra-comparison.mp4"
                poster={CHAPTER_POSTERS[activeChapter]}
                playsInline
                autoPlay
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "220%",
                  objectFit: "cover",
                  objectPosition: "center 22%",
                  transform: "translateY(-11%)",
                  filter: "contrast(1.03) saturate(1.05)",
                }}
                className="pointer-events-none"
              />
              <div className="absolute top-20 left-8 z-30 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2EC492] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide">
                    9th Iteration · Photorealistic
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2: Right Viewport (1st Attempt Baseline) */}
          <div
            className="absolute inset-0 h-full overflow-hidden z-0"
            style={{ left: 0, width: "100%" }}
          >
            <div className="absolute inset-0 w-screen h-full overflow-hidden">
              <video
                ref={videoSecondaryRef}
                src="./video/terra-comparison.mp4"
                poster={CHAPTER_POSTERS[activeChapter]}
                playsInline
                autoPlay
                loop
                muted={true}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "235%",
                  objectFit: "cover",
                  objectPosition: "center 75%",
                  transform: "translateY(-56%)",
                }}
                className="pointer-events-none"
              />
              <div className="absolute top-20 right-8 z-30 pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E59846]" />
                  <span className="text-xs font-semibold tracking-wide">
                    1st Attempt · Baseline
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize group"
            style={{ left: `${sliderPosition}%` }}
            onPointerDown={handlePointerDown}
          >
            <div className="w-[3px] h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)] group-hover:bg-[#E59846] transition-colors" />
            <div className="absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-black/15 group-hover:scale-110 transition-transform">
              <span className="text-sm font-bold leading-none select-none">↔</span>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 4: BASELINE 1ST ATTEMPT FULLSCREEN                       */}
      {/* ------------------------------------------------------------- */}
      {displayMode === "baseline" && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoPrimaryRef}
            src="./video/terra-comparison.mp4"
            poster={CHAPTER_POSTERS[activeChapter]}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "235%",
              objectFit: "cover",
              objectPosition: "center 75%",
              transform: "translateY(-56%)",
            }}
            className="pointer-events-none"
          />

          <div className="absolute top-20 right-8 z-30 pointer-events-none">
            <div className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center gap-2 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E59846]" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                GPT-6.1 Terra · 1st Attempt (Baseline)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
