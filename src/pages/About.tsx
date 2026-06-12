import { motion } from "framer-motion";
import { ArrowUpRight, House, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";

// Assuming we have a custom Discord icon since lucide-react doesn't have one built-in, 
// or we can use MessagesSquare as fallback. Let's use a simple SVG icon for Discord.
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const profileImage = "/hero.png";

const socials = [
  { label: "Instagram", handle: "@52herzt__", icon: Instagram, href: "https://www.instagram.com/52hertz__" },
  { label: "Twitter / X", handle: "@52herzt__", icon: Twitter, href: "https://x.com/52herzt__" },
  { label: "Discord", handle: "52herzt__", icon: DiscordIcon, href: "#" },
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
              <p className="text-fine text-xs uppercase text-accent-gold">About me!</p>
              <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-text-main">52hertz</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Hi im 52hertz !! <p>Im a cat and a vampire</p>
            
              </p>

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
