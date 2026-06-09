import { describe, expect, it } from "vitest";

import { artTypeMap } from "@/data/artTypes";
import { getArtworksByType, getSelectedArtType, isArtTypeId } from "@/utils/portfolio";

describe("portfolio helpers", () => {
  it("recognizes valid art type ids", () => {
    expect(isArtTypeId("character")).toBe(true);
    expect(isArtTypeId("other")).toBe(true);
    expect(isArtTypeId("landscape")).toBe(false);
    expect(isArtTypeId(null)).toBe(false);
  });

  it("returns the selected art type when the query value is valid", () => {
    expect(getSelectedArtType("chibi")).toEqual(artTypeMap.chibi);
    expect(getSelectedArtType("unknown")).toBeNull();
  });

  it("filters artworks by the selected type", () => {
    const characterWorks = getArtworksByType("character");
    const l2dWorks = getArtworksByType("l2d");

    expect(characterWorks.length).toBeGreaterThan(0);
    expect(characterWorks.every((artwork) => artwork.type === "character")).toBe(true);
    expect(l2dWorks.every((artwork) => artwork.type === "l2d")).toBe(true);
  });
});
