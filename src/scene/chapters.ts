export interface ChapterSpec {
  id: number;
  kicker: string;
  label: string;
  titleLines: [string, string];
  subtitle: string;
  startCamPos: [number, number, number];
  endCamPos: [number, number, number];
  startLookAt: [number, number, number];
  endLookAt: [number, number, number];
  fov: number;
  durationSec: number;
}

export const CHAPTERS: ChapterSpec[] = [
  {
    id: 0,
    kicker: "01 / SUNSET ATOLL · 00:00–00:05",
    label: "Sunset Atoll",
    titleLines: ["Golden light over", "the coral lagoon."],
    subtitle:
      "Subsurface coral reef caustics, anisotropic solar glint, and 22 backlit pinnate coconut palms.",
    startCamPos: [-2.4, 1.85, 22.0],
    endCamPos: [0.4, 1.65, 14.5],
    startLookAt: [1.5, 2.0, -7.5],
    endLookAt: [2.2, 2.1, -7.5],
    fov: 44,
    durationSec: 5.0,
  },
  {
    id: 1,
    kicker: "02 / CLIFFSIDE VILLAS · 00:05–00:10",
    label: "Cliffside Villas",
    titleLines: ["Cantilevered teak", "above wet sand."],
    subtitle:
      "Mirror-wet shoreline swash reflections, weathered coastal basalt cliffs, and warm 2700K architectural interiors.",
    startCamPos: [3.2, 2.1, 21.5],
    endCamPos: [2.5, 1.95, 10.5],
    startLookAt: [-4.2, 3.6, -12.0],
    endLookAt: [-4.8, 3.8, -16.0],
    fov: 45,
    durationSec: 5.0,
  },
  {
    id: 2,
    kicker: "03 / JUNGLE WATERFALL · 00:10–00:15",
    label: "Jungle Waterfall",
    titleLines: ["Roaring cataract", "in emerald mist."],
    subtitle:
      "Striated limestone canyon walls, multi-chute fluid simulation, rising spray clouds, and diagonal god-ray shafts.",
    startCamPos: [0.0, 14.5, 26.0],
    endCamPos: [0.0, 16.8, 8.5],
    startLookAt: [0.0, 15.8, -24.0],
    endLookAt: [0.0, 18.2, -24.0],
    fov: 46,
    durationSec: 5.0,
  },
  {
    id: 3,
    kicker: "04 / CRESCENT BAY · 00:15–00:20",
    label: "Crescent Bay",
    titleLines: ["Where the valley", "meets the reef."],
    subtitle:
      "Layered volcanic headlands in golden aerial haze, turquoise coral lagoon, and cliffside infinity pavilions.",
    startCamPos: [8.5, 21.5, 28.0],
    endCamPos: [2.8, 24.0, 11.5],
    startLookAt: [-9.5, 6.2, -32.0],
    endLookAt: [-12.5, 5.2, -36.0],
    fov: 46,
    durationSec: 5.0,
  },
];
