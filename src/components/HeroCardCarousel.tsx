import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { artTypes } from "@/data/artTypes";
import { cn } from "@/lib/utils";

export default function HeroCardCarousel() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const cards = useMemo(() => artTypes, []);
  const moveCards = (direction: "prev" | "next") => {
    const step = scrollerRef.current ? Math.max(220, Math.round(scrollerRef.current.offsetWidth * 0.72)) : 260;
    const offset = direction === "next" ? step : -step;
    scrollerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative lg:pl-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="max-w-sm">
          <p className="text-fine text-xs uppercase text-accent-gold">Selected Styles</p>
          <p className="mt-2 text-sm leading-7 text-text-muted">Swipe on mobile or use the arrows to move between portfolio categories.</p>
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

      <div
        ref={scrollerRef}
        className="overflow-x-auto rounded-[2.5rem] scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex snap-x snap-mandatory gap-4 px-1 py-5 sm:gap-5 lg:justify-start">
          {cards.map((artType, index) => (
            <motion.button
              key={artType.id}
              type="button"
              onClick={() => navigate(`/portfolio?type=${artType.id}`)}
              className={cn(
                "group relative min-w-[72vw] shrink-0 snap-start overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/40 text-left shadow-card backdrop-blur-md transition sm:min-w-[46vw]",
                "hover:-translate-y-2",
                index === 0
                  ? "h-[24rem] sm:h-[29rem] lg:h-[33rem] lg:min-w-[20rem]"
                  : "mt-5 h-[21rem] sm:mt-8 sm:h-[24rem] lg:h-[28rem] lg:min-w-[16.2rem]",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 48, rotate: index === 0 ? -5 : index % 2 === 0 ? -6 : 6, scale: 0.97 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotate: index === 0 ? -2.5 : index % 2 === 0 ? -3 : 3, scale: 1 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.72,
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
        </div>
      </div>
    </section>
  );
}
