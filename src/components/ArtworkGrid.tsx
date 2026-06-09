import { motion } from "framer-motion";
import { Expand } from "lucide-react";

import type { Artwork } from "@/data/artworks";

interface ArtworkGridProps {
  artworks: Artwork[];
  onSelect: (artwork: Artwork) => void;
}

export default function ArtworkGrid({ artworks, onSelect }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {artworks.map((artwork, index) => (
        <motion.button
          key={artwork.id}
          type="button"
          onClick={() => onSelect(artwork)}
          onPointerUp={() => onSelect(artwork)}
          className="group glass-panel relative overflow-hidden rounded-[1.25rem] border border-white/65 text-left sm:rounded-[1.6rem] md:rounded-[2rem]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.42, delay: index * 0.04 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={artwork.image}
              alt={artwork.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(31,36,48,0.58)] via-transparent to-white/12" />
            <div className="pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/55 bg-white/35 text-white backdrop-blur-sm sm:right-3 sm:top-3 sm:h-10 sm:w-10">
              <Expand className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/75 bg-[rgba(245,243,239,0.88)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-text-main shadow-sm backdrop-blur-sm sm:bottom-4 sm:px-4 sm:py-2 sm:text-xs">
              Open
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
