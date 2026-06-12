import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

import HeroCardCarousel from "@/components/HeroCardCarousel";
import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";
import ShortcutCards from "@/components/ShortcutCards";

export default function Home() {
  const isOpen = false; // Set to false to show as closed
  const commissionTone = isOpen
    ? "border-green-500/40 bg-green-500/10 text-green-600"
    : "border-red-500/40 bg-red-500/10 text-red-600";

  return (
    <PageTransition>
      <main className="relative">
        <section className="relative px-4 pb-14 pt-10 sm:px-6 lg:px-10 lg:pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
            <div className="relative min-w-0">
              <OrnamentLayer className="-z-10" intensity="rich" />

              <div className="flex flex-col gap-2 items-start">
                <motion.span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm ${commissionTone}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                >
                  <BadgeCheck className={`h-4 w-4 ${isOpen ? "text-green-600" : "text-red-600"}`} />
                  Commission: {isOpen ? "Open" : "Closed"}
                </motion.span>
              </div>

              <motion.h1
                className="mt-8 font-display text-[clamp(2.2rem,8vw,6.6rem)] leading-[0.96] text-text-main"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                52hertz
              </motion.h1>

              <motion.div
                className="mt-7 h-px w-40 bg-gold-line"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              />

              <motion.p
                className="mt-7 text-[0.95rem] leading-7 text-text-muted sm:text-lg sm:leading-8 lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.44 }}
              >
                Please read and respect the existing TOS
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-3 rounded-full bg-accent-red px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-red/25 transition hover:-translate-y-0.5 hover:bg-accent-red-dark"
                  >
                    <span>View Works</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-xs tracking-[0.18em] text-text-muted sm:text-sm sm:tracking-[0.28em]">Check my art here</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/tos#contact"
                    className="inline-flex items-center gap-3 rounded-full border border-accent-gold/40 bg-white/60 px-6 py-4 text-sm font-semibold text-accent-red shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    <span>Contact Me Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-w-0"
            >
              <HeroCardCarousel />
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <ShortcutCards />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
