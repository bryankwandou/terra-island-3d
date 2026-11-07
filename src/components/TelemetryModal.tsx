import React from "react";
import { X, CheckCircle2, AlertTriangle, Cpu, Layers, Sun, Droplets } from "lucide-react";

interface TelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelemetryModal: React.FC<TelemetryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0D151D] border border-white/15 p-6 sm:p-8 text-[#F4F1EA] shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold tracking-widest text-[#E59846] uppercase">
                Architecture &amp; Benchmark Report
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#2EC492]/20 text-[#2EC492]">
                100% LIVE MVP
              </span>
            </div>
            <h2 className="text-2xl font-serif font-medium text-white">
              GPT-6.1 Terra System Telemetry
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wider text-white/80 uppercase">
            Iteration Variance Matrix
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-white/70">
                <tr>
                  <th className="p-3 font-semibold">Subsystem Feature</th>
                  <th className="p-3 font-semibold text-[#E59846]">1st Attempt (Baseline)</th>
                  <th className="p-3 font-semibold text-[#2EC492]">9th Iteration (Photoreal)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                <tr>
                  <td className="p-3 font-medium flex items-center gap-2">
                    <Droplets size={14} className="text-[#2EC492]" /> Water Optics
                  </td>
                  <td className="p-3 text-white/60">Uniform blue planar mesh, zero refraction</td>
                  <td className="p-3 text-[#2EC492]">
                    Subsurface Voronoi caustics, shallow reef depth gradient, solar glint
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium flex items-center gap-2">
                    <Sun size={14} className="text-[#E59846]" /> Solar Lighting
                  </td>
                  <td className="p-3 text-white/60">Single flat directional light, harsh shadow</td>
                  <td className="p-3 text-[#2EC492]">
                    ACES Filmic tone mapping, golden Rayleigh horizon, crepuscular rays
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium flex items-center gap-2">
                    <Layers size={14} className="text-purple-400" /> Botanical Canopy
                  </td>
                  <td className="p-3 text-white/60">Straight stick trunks with star cones</td>
                  <td className="p-3 text-[#2EC492]">
                    S-curved bark trunks, 3 phyllotactic whorls, pinnate feathery leaflets
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" /> Cliff &amp; Architecture
                  </td>
                  <td className="p-3 text-white/60">Blocky cubic voxels, untextured boxes</td>
                  <td className="p-3 text-[#2EC492]">
                    Stratified basalt ledges, cantilevered teak overhangs, warm 2700K rooms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 World Biome Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E59846]">01 / SUNSET ATOLL (00:00–00:05)</span>
            <p className="text-xs text-white/70 leading-relaxed">
              Low-altitude flight over shallow coral sandbar. Features 22 backlit coconut palms with
              translucent sub-surface chlorophyll scattering and anisotropic sun reflections across
              Gerstner wave crests.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E59846]">02 / CLIFFSIDE VILLAS (00:05–00:10)</span>
            <p className="text-xs text-white/70 leading-relaxed">
              Beach-level dolly across mirror-wet sand. Features dynamic rolling foamy shorebreak
              swash, travertine stone piers, fluted teak roofs, and glowing interior reflections.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E59846]">03 / JUNGLE WATERFALL (00:10–00:15)</span>
            <p className="text-xs text-white/70 leading-relaxed">
              Flight through deep rainforest canyon. Features twin towering limestone cliffs,
              multi-chute fluid cascade, rising volumetric spray clouds, and diagonal god-ray shafts.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E59846]">04 / CRESCENT BAY (00:15–00:20)</span>
            <p className="text-xs text-white/70 leading-relaxed">
              High mountain-pass reveal over jungle river valley. Features layered volcanic
              headlands in golden haze, turquoise lagoon, and beachfront infinity-pool pavilions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-between border-t border-white/10">
          <span className="text-xs text-white/50">
            Real-Time Engine: WebGL 2.0 · Three.js · React 19 · Vite 6
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#E59846] text-[#0C1217] text-xs font-bold tracking-wide hover:bg-[#F0A95D] transition-all"
          >
            Return to Simulation
          </button>
        </div>
      </div>
    </div>
  );
};
