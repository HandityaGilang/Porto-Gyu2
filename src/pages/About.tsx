import { motion } from "framer-motion";
import { ArrowUpRight, House, Instagram, Mail, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";

const profileImage =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=" +
  encodeURIComponent(
    "refined anime inspired artist portrait, elegant cream studio clothing, soft gray blue background, minimal decorative gold accents, premium editorial portrait",
  ) +
  "&image_size=portrait_4_3";

const socials = [
  { label: "Instagram", handle: "@52hertzatelier", icon: Instagram, href: "https://instagram.com" },
  { label: "Email", handle: "hello@52hertz.art", icon: Mail, href: "mailto:hello@52hertz.art" },
  { label: "Message", handle: "Commission inquiry", icon: MessagesSquare, href: "/tos" },
];

export default function About() {
  return (
    <PageTransition>
      <main className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/55 bg-white/28 px-6 py-10 backdrop-blur-[8px] sm:px-8 lg:px-12 lg:py-14">
          <OrnamentLayer intensity="rich" />

          <div className="relative mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-border-soft bg-white/75 px-5 py-3 text-sm font-medium text-text-main shadow-sm backdrop-blur-sm transition hover:border-accent-gold/45 hover:bg-white/95"
            >
              <House className="h-4 w-4 text-accent-gold" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <motion.div
              className="glass-panel overflow-hidden rounded-[2.4rem] border border-white/60 p-4"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={profileImage} alt="52hertz artist portrait" className="h-[26rem] w-full rounded-[1.9rem] object-cover" />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <p className="text-fine text-xs uppercase text-accent-gold">About The Artist</p>
              <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-text-main">Quiet detail, tender composition</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                52hertz is an artist identity centered on commissioned illustration, soft storytelling, and graceful visual rhythm. Each piece is built to feel intimate, luminous, and quietly memorable.
              </p>

              <div className="glass-panel mt-8 rounded-[2rem] border border-white/60 p-6">
                <p className="text-fine text-xs uppercase text-accent-gold">Artist Note</p>
                <p className="mt-4 font-display text-3xl leading-relaxed text-text-main">
                  “I love work that feels calm at first glance, then slowly reveals small decisions in fabric, gesture, and light.”
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  const isInternal = social.href.startsWith("/");

                  const content = (
                    <motion.div
                      className="glass-panel group rounded-[1.75rem] border border-white/60 p-5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/25 bg-white/70 text-accent-red">
                          <Icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-accent-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-6 font-display text-2xl text-text-main">{social.label}</p>
                      <p className="mt-2 text-sm text-text-muted">{social.handle}</p>
                    </motion.div>
                  );

                  return isInternal ? (
                    <Link key={social.label} to={social.href}>
                      {content}
                    </Link>
                  ) : (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
