import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

import HeroCardCarousel from "@/components/HeroCardCarousel";
import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";
import ShortcutCards from "@/components/ShortcutCards";
import { siteSettings } from "@/data/siteSettings";

const commissionTone =
  siteSettings.commissionStatus === "open"
    ? "border-accent-gold/40 bg-white/75 text-text-main"
    : "border-accent-red/30 bg-white/75 text-accent-red";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-10 lg:pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
            <div className="relative">
              <OrnamentLayer className="-z-10" intensity="rich" />

              <motion.span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm ${commissionTone}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <BadgeCheck className="h-4 w-4 text-accent-gold" />
                Commission: {siteSettings.commissionStatus === "open" ? "Open" : "Closed"}
              </motion.span>

              <motion.h1
                className="mt-8 max-w-xl font-display text-[clamp(3.3rem,8vw,6.6rem)] leading-[0.96] text-text-main"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Art that speaks in color
              </motion.h1>

              <motion.div
                className="mt-7 h-px w-40 bg-gold-line"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              />

              <motion.p
                className="mt-7 max-w-lg text-lg leading-8 text-text-muted sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.44 }}
              >
                A collection of commissioned works made with love and quiet inspiration.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 rounded-full bg-accent-red px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-red/25 transition hover:-translate-y-0.5 hover:bg-accent-red-dark"
                >
                  <span>View Works</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-sm tracking-[0.28em] text-text-muted">Elegant commissions and curated studies</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
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
