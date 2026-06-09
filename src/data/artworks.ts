import type { ArtTypeId } from "@/data/artTypes";

const imageBase = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=";

const createImage = (prompt: string, imageSize = "portrait_4_3") =>
  `${imageBase}${encodeURIComponent(prompt)}&image_size=${imageSize}`;

export interface Artwork {
  id: string;
  title: string;
  type: ArtTypeId;
  image: string;
  alt: string;
  summary: string;
}

// Local-first artwork data. Later this can be sourced from Sanity CMS or
// Supabase while keeping the same gallery and lightbox interfaces.
export const artworks: Artwork[] = [
  {
    id: "character-moonlit-muse",
    title: "Moonlit Muse",
    type: "character",
    image: createImage(
      "editorial anime character portrait, graceful pose, moonlit cream dress, pale silver hair, soft gray blue atmosphere, gold ornament details, premium artist portfolio",
    ),
    alt: "A graceful character portrait in a moonlit gray-blue palette.",
    summary: "Elegant full illustration with textile detail and quiet motion.",
  },
  {
    id: "character-gilded-letter",
    title: "Gilded Letter",
    type: "character",
    image: createImage(
      "anime style refined character holding sealed letter, brick red ribbon, cream blouse, gold trim, soft gray blue studio lighting, premium commission artwork",
    ),
    alt: "A character artwork with a sealed letter and brick-red accent ribbon.",
    summary: "Story-forward commission piece with soft contrast and ornamented styling.",
  },
  {
    id: "chibi-petite-blossom",
    title: "Petite Blossom",
    type: "chibi",
    image: createImage(
      "premium chibi illustration, delicate floral accessories, cream and gray blue palette, gentle expression, artist portfolio showcase",
    ),
    alt: "A chibi artwork with floral accessories and a soft cream palette.",
    summary: "Compact character charm with polished linework and balanced softness.",
  },
  {
    id: "chibi-tea-note",
    title: "Tea Note",
    type: "chibi",
    image: createImage(
      "refined chibi character seated with tea cup, elegant cafe mood, subtle red and gold accents, gray blue cream background, premium anime art",
    ),
    alt: "A chibi character seated with tea in an elegant setting.",
    summary: "Warm miniature commission with a calm premium finish.",
  },
  {
    id: "sketch-silent-study",
    title: "Silent Study",
    type: "sketch",
    image: createImage(
      "graphite style anime portrait sketch, premium paper texture, editorial lighting, refined artist study, minimal palette",
    ),
    alt: "A graphite portrait sketch with soft paper texture.",
    summary: "Line-focused portrait study that preserves gesture and atmosphere.",
  },
  {
    id: "sketch-gesture-page",
    title: "Gesture Page",
    type: "sketch",
    image: createImage(
      "artist sketchbook page with graceful character gestures, premium concept art presentation, soft cream paper, gray lines, subtle red notation",
    ),
    alt: "A graceful sketchbook page of character gesture studies.",
    summary: "Loose concept work with elegant motion and thoughtful annotation.",
  },
  {
    id: "l2d-celestial-rig",
    title: "Celestial Rig",
    type: "l2d",
    image: createImage(
      "live2d ready character sheet, separated hair and outfit layers, premium anime commission visual, soft gray blue and cream colors, gold detailing",
    ),
    alt: "A Live2D-ready character sheet with layered details.",
    summary: "Layer-aware commission prepared for expressive motion workflows.",
  },
  {
    id: "l2d-ornament-frame",
    title: "Ornament Frame",
    type: "l2d",
    image: createImage(
      "live2d character half body concept with elegant frame ornaments, brick red accents, gold line details, premium anime art portfolio",
    ),
    alt: "A half-body Live2D concept framed by ornamental details.",
    summary: "Presentation-ready layered art with premium framing cues.",
  },
  {
    id: "other-atrium-light",
    title: "Atrium Light",
    type: "other",
    image: createImage(
      "anime environment illustration, elegant atrium interior, soft daylight, cream stone, gray blue atmosphere, premium background art",
      "landscape_16_9",
    ),
    alt: "A luminous interior environment artwork with cream stone architecture.",
    summary: "Atmospheric scene study with restrained light and editorial balance.",
  },
  {
    id: "other-keepsake-collage",
    title: "Keepsake Collage",
    type: "other",
    image: createImage(
      "premium mixed artwork collage with postcards, ribbon, sketch fragments, gold ornament details, gray blue and cream palette, artist portfolio showcase",
    ),
    alt: "A collage of premium artwork fragments and keepsake objects.",
    summary: "A curated display of side pieces, studies, and personal explorations.",
  },
];
