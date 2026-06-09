import { artTypeMap, type ArtTypeId } from "@/data/artTypes";
import { artworks } from "@/data/artworks";

export const isArtTypeId = (value: string | null): value is ArtTypeId =>
  value === "character" || value === "chibi" || value === "sketch" || value === "l2d" || value === "other";

export const getSelectedArtType = (value: string | null) => (isArtTypeId(value) ? artTypeMap[value] : null);

export const getArtworksByType = (type: ArtTypeId) => artworks.filter((artwork) => artwork.type === type);
