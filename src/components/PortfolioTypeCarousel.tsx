import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useRef } from "react";
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
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const moveCards = (direction: "prev" | "next") => {
    const step = scrollerRef.current ? Math.max(180, Math.round(scrollerRef.current.offsetWidth * 0.68)) : 220;
    const offset = direction === "next" ? step : -step;
    scrollerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    didDrag.current = false;
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) {
      didDrag.current = true;
      const el = scrollerRef.current;
      if (!el.hasPointerCapture(e.pointerId)) {
        el.setPointerCapture(e.pointerId);
        el.style.scrollSnapType = "none";
        el.style.scrollBehavior = "auto";
      }
    }
    if (didDrag.current) {
      scrollerRef.current.scrollLeft = startScroll.current - dx;
    }
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = scrollerRef.current;
    if (!el) return;
    if (el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    el.style.scrollSnapType = "";
    el.style.scrollBehavior = "";
  }, []);

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
        className="flex cursor-grab gap-4 overflow-x-auto overscroll-x-contain px-5 select-none snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing sm:gap-5"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {artTypes.map((artType, index) => {
          const selected = selectedTypeId === artType.id;

          return (
            <motion.button
              key={artType.id}
              type="button"
              onClick={() => {
                if (didDrag.current) return;
                navigate(`/portfolio?type=${artType.id}`);
              }}
              className={cn(
                "group relative min-w-[72vw] shrink-0 snap-center overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/40 text-left shadow-card sm:min-w-[46vw] will-change-transform",
                selected ? "border-accent-gold/70 shadow-[0_0_0_1px_rgba(223,164,85,0.22),var(--shadow-card)]" : "",
                "h-[24rem] sm:h-[29rem] lg:h-[32rem] lg:min-w-[19rem]",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 48, rotate: index === 0 ? -5 : index % 2 === 0 ? -6 : 6, scale: 0.97 }}
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotate: index === 0 ? -2.5 : index % 2 === 0 ? -3 : 3, scale: 1 }
              }
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 18,
                delay: 0.08 + index * 0.06,
              }}
              whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="pointer-events-none absolute inset-0">
                <img src={artType.image} alt={artType.name} draggable={false} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,36,48,0.46)] via-transparent via-45% to-white/18" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/35 text-white backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between gap-3 rounded-full border border-white/80 bg-[rgba(245,243,239,0.9)] px-5 py-3.5 shadow-lg backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-text-main">{artType.name}</p>
                    <p className="mt-0.5 text-xs font-medium text-accent-red">Start from ${artType.price}</p>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
