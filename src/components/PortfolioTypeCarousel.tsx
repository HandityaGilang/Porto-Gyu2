import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { artTypes, type ArtTypeId } from "@/data/artTypes";
import { cn } from "@/lib/utils";

interface PortfolioTypeCarouselProps {
  selectedTypeId?: ArtTypeId | null;
}

export default function PortfolioTypeCarousel({ selectedTypeId }: PortfolioTypeCarouselProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dragLimit, setDragLimit] = useState(0);
  const [position, setPosition] = useState(0);
  const clampPosition = useCallback((value: number, limit: number) => Math.min(0, Math.max(-limit, value)), []);

  useEffect(() => {
    const updateDragLimit = () => {
      if (!containerRef.current || !trackRef.current) {
        return;
      }

      const nextLimit = Math.max(0, trackRef.current.scrollWidth - containerRef.current.offsetWidth);
      setDragLimit(nextLimit);
      setPosition((currentPosition) => clampPosition(currentPosition, nextLimit));
    };

    updateDragLimit();
    window.addEventListener("resize", updateDragLimit);

    return () => window.removeEventListener("resize", updateDragLimit);
  }, [clampPosition]);

  const moveCards = (direction: "prev" | "next") => {
    const step = containerRef.current ? Math.max(180, Math.round(containerRef.current.offsetWidth * 0.5)) : 220;
    const offset = direction === "next" ? -step : step;
    setPosition((currentPosition) => clampPosition(currentPosition + offset, dragLimit));
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

      <div ref={containerRef} className="overflow-hidden">
      <motion.div
        ref={trackRef}
        drag={reduceMotion ? false : "x"}
        dragConstraints={{ left: -dragLimit, right: 0 }}
        dragElastic={0.1}
        animate={{ x: position }}
        onDragEnd={(_, info) => setPosition((currentPosition) => clampPosition(currentPosition + info.offset.x, dragLimit))}
        className="flex gap-4 py-2"
      >
        {artTypes.map((artType, index) => {
          const selected = selectedTypeId === artType.id;

          return (
            <motion.button
              key={artType.id}
              type="button"
              onClick={() => navigate(`/portfolio?type=${artType.id}`)}
              className={cn(
                "glass-panel relative flex min-h-[14rem] w-[15rem] shrink-0 flex-col justify-end overflow-hidden rounded-[2rem] p-3 text-left transition",
                selected ? "border-accent-gold/60 shadow-card" : "hover:-translate-y-1.5",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.05 }}
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
      </motion.div>
    </div>
    </div>
  );
}
