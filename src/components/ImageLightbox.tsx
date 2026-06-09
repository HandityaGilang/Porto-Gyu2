import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

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

  return (
    <AnimatePresence>
      {artwork ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(21,25,33,0.78)] backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close artwork preview"
          />

          <button
            type="button"
            onClick={onClose}
            className="fixed right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/45 sm:right-6 sm:top-6"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            className="relative z-10 mx-auto flex min-h-screen w-full items-center justify-center p-4 sm:p-6"
            initial={{ scale: 0.94, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-[rgba(12,14,18,0.24)] shadow-2xl">
              <div className="flex max-h-[calc(100vh-2rem)] min-h-[18rem] items-center justify-center overflow-auto p-3 sm:max-h-[calc(100vh-3rem)] sm:p-5">
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  className="h-auto max-h-[calc(100vh-7rem)] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
