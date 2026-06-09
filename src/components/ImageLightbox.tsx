import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import type { Artwork } from "@/data/artworks";

interface ImageLightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function ImageLightbox({ artwork, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!artwork) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) {
    return null;
  }

  const modal = (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[100000] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Close preview"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative z-[99999] flex max-h-[92dvh] max-w-[92vw] items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <img
          src={artwork.image}
          alt={artwork.alt}
          className="max-h-[92dvh] max-w-[92vw] object-contain rounded-2xl"
        />
      </div>
    </motion.div>
  );

  return createPortal(modal, document.body);
}
