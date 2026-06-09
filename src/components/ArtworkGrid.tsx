import { motion } from "framer-motion";
import { Expand } from "lucide-react";

import type { Artwork } from "@/data/artworks";

interface ArtworkGridProps {
  artworks: Artwork[];
  onSelect: (artwork: Artwork) => void;
}

export default function ArtworkGrid({ artworks, onSelect }: ArtworkGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {artworks.map((artwork, index) => (
        <motion.button
          key={artwork.id}
          type="button"
          onClick={() => onSelect(artwork)}
          className="group glass-panel relative overflow-hidden rounded-[2rem] border border-white/65 text-left"
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
            <div className="pointer-events-none absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/35 text-white backdrop-blur-sm">
              <Expand className="h-4 w-4" />
            </div>
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/75 bg-[rgba(245,243,239,0.88)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-text-main shadow-sm backdrop-blur-sm">
              Open
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
