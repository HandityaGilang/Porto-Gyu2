export type ArtTypeId = "character" | "chibi" | "sketch" | "l2d" | "other";

export interface ArtType {
  id: ArtTypeId;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  price: number;
}

// Local-first content structure. These entries can later be replaced with
// records fetched from Sanity CMS or Supabase without changing UI consumers.
export const artTypes: ArtType[] = [
  {
    id: "character",
    name: "Character",
    shortDescription: "Poised portraits and expressive silhouettes.",
    description:
      "Refined character illustrations with elegant posing, textile detail, and a cinematic sense of storytelling.",
    image: "/InShot_20230927_014033702.jpg",
    price: 80,
  },
  {
    id: "chibi",
    name: "Chibi",
    shortDescription: "Small-scale charm with polished detail.",
    description:
      "Cute stylized portraits with careful finishing, balanced softness, and premium presentation rather than novelty overload.",
    image: "/InShot_20251011_133741490.jpg",
    price: 45,
  },
  {
    id: "sketch",
    name: "Sketch",
    shortDescription: "Quiet lines, gesture, and atmosphere.",
    description:
      "Loose-to-refined sketch work focused on pose, mood, and the beauty of intentional line weight.",
    image: "/Eric Violetto.png",
    price: 30,
  },
  {
    id: "l2d",
    name: "L2D",
    shortDescription: "Layered assets prepared for motion.",
    description:
      "Illustration sets designed with separated forms and clean depth cues suitable for Live2D-ready presentation.",
    image: "/Cayu Kouhei Display (L2D).png",
    price: 150,
  },
  {
    id: "other",
    name: "Other Art",
    shortDescription: "Experiments, studies, and special formats.",
    description:
      "A curated selection of background studies, personal works, and alternate commission styles beyond the core categories.",
    image: "/Background Commission.png",
    price: 50,
  },
];

export const artTypeMap = Object.fromEntries(artTypes.map((artType) => [artType.id, artType])) as Record<
  ArtTypeId,
  ArtType
>;
