const imageBase = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=";

const createImage = (prompt: string, imageSize = "portrait_16_9") =>
  `${imageBase}${encodeURIComponent(prompt)}&image_size=${imageSize}`;

export type ArtTypeId = "character" | "chibi" | "sketch" | "l2d" | "other";

export interface ArtType {
  id: ArtTypeId;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
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
    image: createImage(
      "luxury anime inspired character illustration, pale silver hair, soft cream garments, refined decorative lighting, editorial composition, premium artist portfolio image, gray blue and cream palette, subtle gold accents",
    ),
  },
  {
    id: "chibi",
    name: "Chibi",
    shortDescription: "Small-scale charm with polished detail.",
    description:
      "Cute stylized portraits with careful finishing, balanced softness, and premium presentation rather than novelty overload.",
    image: createImage(
      "premium chibi character illustration, elegant soft palette, gray blue background, cream clothing, delicate gold details, clean artist portfolio presentation, adorable but refined",
    ),
  },
  {
    id: "sketch",
    name: "Sketch",
    shortDescription: "Quiet lines, gesture, and atmosphere.",
    description:
      "Loose-to-refined sketch work focused on pose, mood, and the beauty of intentional line weight.",
    image: createImage(
      "refined artist sketch page, elegant graphite style portrait, soft paper tone, subtle warm red accents, premium editorial artwork, minimal background",
    ),
  },
  {
    id: "l2d",
    name: "L2D",
    shortDescription: "Layered assets prepared for motion.",
    description:
      "Illustration sets designed with separated forms and clean depth cues suitable for Live2D-ready presentation.",
    image: createImage(
      "live2d ready anime character design sheet, layered elegant outfit details, soft gray blue and cream palette, premium commission portfolio visual",
    ),
  },
  {
    id: "other",
    name: "Other Art",
    shortDescription: "Experiments, studies, and special formats.",
    description:
      "A curated selection of background studies, personal works, and alternate commission styles beyond the core categories.",
    image: createImage(
      "elegant mixed media anime art portfolio collage, refined decorative motifs, cream and gray blue palette, subtle brick red accents, premium artist showcase",
    ),
  },
];

export const artTypeMap = Object.fromEntries(artTypes.map((artType) => [artType.id, artType])) as Record<
  ArtTypeId,
  ArtType
>;
