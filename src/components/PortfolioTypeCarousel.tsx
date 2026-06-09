import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { artTypes, type ArtTypeId } from "@/data/artTypes";
import { cn } from "@/lib/utils";

interface PortfolioTypeCarouselProps {
  selectedTypeId?: ArtTypeId | null;
}

export default function PortfolioTypeCarousel({ selectedTypeId }: PortfolioTypeCarouselProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const moveCards = (direction: "prev" | "next") => {
    const step = scrollerRef.current ? Math.max(180, Math.round(scrollerRef.current.offsetWidth * 0.68)) : 220;
    const offset = direction === "next" ? step : -step;
    scrollerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => moveCards("prev")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/30 bg-white/70 text-text-main shadow-sm transition hover:border-accent-gold/55 hover:bg-white/90"
          aria-label="Scroll portfolio types left"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => moveCards("next")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/30 bg-white/70 text-text-main shadow-sm transition hover:border-accent-gold/55 hover:bg-white/90"
          aria-label="Scroll portfolio types right"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
      <div className="flex snap-x snap-mandatory gap-4 py-2">
        {artTypes.map((artType, index) => {
          const selected = selectedTypeId === artType.id;

          return (
            <motion.button
              key={artType.id}
              type="button"
              onClick={() => navigate(`/portfolio?type=${artType.id}`)}
              className={cn(
                "glass-panel relative flex min-h-[12.5rem] min-w-[72vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[1.6rem] p-3 text-left transition sm:min-w-[46vw] md:min-w-[18rem] md:rounded-[2rem]",
                selected ? "border-accent-gold/60 shadow-card" : "hover:-translate-y-1.5",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: 0.08 + index * 0.05 }}
            >
              <div className="absolute inset-0">
                <img src={artType.image} alt={artType.name} className="h-full w-full object-cover opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(31,36,48,0.6)] via-[rgba(31,36,48,0.14)] to-white/20" />
              </div>

              <div className="relative rounded-[1.2rem] border border-white/40 bg-[rgba(250,248,245,0.82)] p-3 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-display text-xl text-text-main">{artType.name}</p>
                  </div>
                  <span
                    className={cn(
                      "mt-1 flex h-9 w-9 items-center justify-center rounded-full border transition",
                      selected
                        ? "border-accent-gold/60 bg-accent-gold/15 text-accent-red"
                        : "border-border-soft bg-white/70 text-text-main",
                    )}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
    </div>
  );
}
