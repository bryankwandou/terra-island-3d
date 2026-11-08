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
    kicker: "01 / CORAL ATOLL · Outer Lagoon Sanctuary",
    label: "Sunset Atoll",
    titleLines: ["Golden light over", "the coral lagoon."],
    subtitle:
      "Subsurface coral reef caustics, anisotropic solar glint, and 28 backlit pinnate coconut palms.",
    startCamPos: [-2.4, 1.85, 22.0],
    endCamPos: [0.4, 1.65, 14.5],
    startLookAt: [1.5, 2.0, -7.5],
    endLookAt: [2.2, 2.1, -7.5],
    fov: 44,
    durationSec: 5.0,
  },
  {
    id: 1,
    kicker: "02 / CLIFFSIDE VILLAS · Modern Cantilevered Teak",
    label: "Cliffside Villas",
    titleLines: ["Cantilevered teak", "above wet sand."],
    subtitle:
      "Mirror-wet shoreline swash reflections, weathered coastal basalt cliffs, and warm 2700K architectural interiors.",
    startCamPos: [7.2, 2.8, 22.0],
    endCamPos: [5.2, 2.4, 11.0],
    startLookAt: [-4.2, 4.2, -6.0],
    endLookAt: [-5.0, 4.5, -10.0],
    fov: 46,
    durationSec: 5.0,
  },
  {
    id: 2,
    kicker: "03 / JUNGLE WATERFALL · Emerald Canyon Cataract",
    label: "Jungle Waterfall",
    titleLines: ["Roaring cataract", "in emerald mist."],
    subtitle:
      "Striated limestone canyon walls, multi-chute fluid simulation, rising spray clouds, and diagonal god-ray shafts.",
    startCamPos: [0.0, 11.8, 22.0],
    endCamPos: [0.0, 10.5, 10.0],
    startLookAt: [0.0, 13.5, -30.0],
    endLookAt: [0.0, 14.8, -30.0],
    fov: 48,
    durationSec: 5.0,
  },
  {
    id: 3,
    kicker: "04 / CRESCENT BAY · Volcanic Headlands & Reef",
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

export const OVERVIEW_CAMERA = {
  pos: [0.0, 34.0, 48.0] as [number, number, number],
  lookAt: [0.0, 6.0, -10.0] as [number, number, number],
  fov: 52,
};
