import { motion } from "framer-motion";
import { ArrowRight, FileText, GalleryVerticalEnd, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const shortcuts = [
  {
    title: "ToS",
    description: "Review payment flow, usage rights, and revision policy.",
    to: "/tos",
    icon: FileText,
    shape: "rounded-[3.1rem_1.6rem_3rem_1.8rem]",
    accent: "before:left-5 before:top-5 before:h-16 before:w-16",
  },
  {
    title: "About",
    description: "Meet the artist, the process, and the quiet intent behind the work.",
    to: "/about",
    icon: UserRound,
    shape: "rounded-[1.8rem_3rem_1.8rem_3.2rem]",
    accent: "before:right-6 before:top-6 before:h-14 before:w-14",
  },
  {
    title: "Commission Portfolio",
    description: "Jump straight into artworks by type and explore finished samples.",
    to: "/portfolio",
    icon: GalleryVerticalEnd,
    shape: "rounded-[3rem_1.9rem_2.4rem_3rem]",
    accent: "before:left-6 before:bottom-5 before:h-[4.5rem] before:w-[4.5rem]",
  },
];

export default function ShortcutCards() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
      {shortcuts.map((shortcut, index) => {
        const Icon = shortcut.icon;

        return (
          <motion.div
            key={shortcut.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link
              to={shortcut.to}
              className={cn(
                "glass-panel group relative col-span-1 flex min-h-[13rem] overflow-hidden border border-white/60 p-4 shadow-card transition duration-500 sm:min-h-[15rem] sm:p-6",
                "before:absolute before:rounded-full before:border before:border-accent-gold/25 before:opacity-70 before:content-['']",
                "hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(107,104,120,0.18)]",
                index === 2 && "col-span-2 md:col-span-1",
                shortcut.shape,
                shortcut.accent,
              )}
            >
              <span className="pointer-events-none absolute inset-[10px] rounded-[inherit] border border-accent-gold/25 opacity-75" />
              <span className="pointer-events-none absolute left-5 top-4 text-[0.68rem] tracking-[0.45em] text-accent-gold/85">✦ ✦</span>
              <span className="pointer-events-none absolute bottom-5 left-6 h-px w-20 bg-gold-line opacity-80" />
              <span className="pointer-events-none absolute right-5 top-5 h-14 w-14 rounded-full border border-accent-gold/30" />
              <span className="pointer-events-none absolute bottom-4 right-6 text-sm text-accent-gold/70">✧</span>
              <span className="pointer-events-none absolute right-12 top-12 text-[0.65rem] text-accent-gold/55">✦</span>
              <span className="pointer-events-none absolute left-10 bottom-7 text-[0.6rem] text-accent-gold/50">✦</span>

              <div className="relative flex w-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1.35rem] border border-accent-gold/25 bg-white/70 text-text-main shadow-sm sm:h-14 sm:w-14 sm:rounded-[1.6rem]">
                    <Icon className="h-5 w-5 stroke-[1.3] sm:h-6 sm:w-6" />
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/25 bg-white/55 text-text-main transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                  </span>
                </div>

                <div className="mt-8 max-w-xs sm:mt-10">
                  <p className="font-display text-[1.5rem] text-text-main sm:text-[2rem]">{shortcut.title}</p>
                  <p className="mt-3 text-sm leading-6 text-text-muted sm:leading-7">{shortcut.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
