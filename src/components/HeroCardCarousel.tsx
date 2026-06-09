import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { artTypes } from "@/data/artTypes";
import { cn } from "@/lib/utils";

export default function HeroCardCarousel() {
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

  const cards = useMemo(() => artTypes, []);
  const moveCards = (direction: "prev" | "next") => {
    const step = containerRef.current ? Math.max(220, Math.round(containerRef.current.offsetWidth * 0.44)) : 260;
    const offset = direction === "next" ? -step : step;
    setPosition((currentPosition) => clampPosition(currentPosition + offset, dragLimit));
  };

  return (
    <section className="relative lg:pl-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="max-w-sm">
          <p className="text-fine text-xs uppercase text-accent-gold">Selected Styles</p>
          <p className="mt-2 text-sm leading-7 text-text-muted">Drag through the collection or use the arrows to move between portfolio categories.</p>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => moveCards("prev")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/35 bg-white/65 text-text-main shadow-sm transition hover:-translate-y-0.5 hover:border-accent-gold/60 hover:bg-white/80"
            aria-label="Move cards left"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => moveCards("next")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/35 bg-white/65 text-text-main shadow-sm transition hover:-translate-y-0.5 hover:border-accent-gold/60 hover:bg-white/80"
            aria-label="Move cards right"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden rounded-[2.5rem]">
        <motion.div
          ref={trackRef}
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.12}
          animate={{ x: position }}
          onDragEnd={(_, info) => setPosition((currentPosition) => clampPosition(currentPosition + info.offset.x, dragLimit))}
          className="flex cursor-grab gap-4 px-1 py-5 active:cursor-grabbing sm:gap-5 lg:justify-start"
        >
          {cards.map((artType, index) => (
            <motion.button
              key={artType.id}
              type="button"
              onClick={() => navigate(`/portfolio?type=${artType.id}`)}
              className={cn(
                "group relative shrink-0 overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/40 text-left shadow-card backdrop-blur-md transition",
                "hover:-translate-y-2",
                index === 0 ? "h-[30rem] w-[18rem] sm:h-[33rem] sm:w-[20rem]" : "mt-8 h-[24rem] w-[14.5rem] sm:h-[28rem] sm:w-[16.2rem]",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 88, rotate: index === 0 ? -8 : index % 2 === 0 ? -10 : 10, scale: 0.94 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotate: index === 0 ? -2.5 : index % 2 === 0 ? -3 : 3, scale: 1 }
              }
              transition={{
                duration: 0.86,
                delay: 0.18 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: index === 0 ? -10 : -8, rotate: 0, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0">
                <img src={artType.image} alt={artType.name} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(31,36,48,0.46)] via-transparent via-45% to-white/18" />
                <div className="pointer-events-none absolute inset-x-3 top-3 h-16 rounded-[1.5rem] border border-white/30 bg-gradient-to-b from-white/14 to-transparent opacity-80" />
                <div className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/35 text-white backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between gap-3 rounded-full border border-white/80 bg-[rgba(245,243,239,0.9)] px-4 py-3 text-sm shadow-lg backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-text-main">{artType.name}</p>
                    <p className="truncate text-xs text-text-muted">{artType.shortDescription}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-gold/30 bg-white/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-text-main">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                    View
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
