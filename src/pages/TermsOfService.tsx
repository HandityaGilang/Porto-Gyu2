import { motion } from "framer-motion";
import { ArrowUpRight, House, Mail, ScrollText, Instagram, Twitter, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const PayPalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.98 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106a.641.641 0 0 1-.633.74h4.606c.524 0 .968-.382 1.05-.9l.946-5.992c.082-.519.526-.901 1.05-.901h.436c4.298 0 7.664-1.748 8.646-6.796.163-.826.241-1.6.216-2.316a4.04 4.04 0 0 0-.662-1.351z"/>
  </svg>
);

const socials = [
  { label: "Instagram", handle: "@52hertz__", icon: Instagram, href: "https://www.instagram.com/52hertz__" },
  { label: "X / Twitter", handle: "@52hertz__", icon: Twitter, href: "https://x.com/52herzt__" },
  { label: "Discord", handle: "52herzt__", icon: DiscordIcon, href: "#" },
];

const sections = [
  {
    title: "TAT (Turnaround Time)",
    body: (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-accent-red">Normal art, Chibi, Sketch</h3>
          <p>1-3 weeks depending on difficulty</p>
        </div>
        <div>
          <h3 className="font-bold text-accent-red">L2D</h3>
          <p>1-3 months or more depending on complexity</p>
        </div>
      </div>
    ),
  },
  {
    title: "Terms of Service",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Payment after the sketch is finished</li>
        <li>No cancel and refund!!!</li>
        <li>Simple background free (Solid color, patterns etc)</li>
        <li>Revision max 3x (in sketch only)</li>
        <li>Work according to the antrean (queue)</li>
        <li>No NSFW and Mecha</li>
        <li>No BL / GL</li>
        <li>All artwork will be included in my portfolio unless discussed otherwise</li>
      </ul>
    ),
  },
  {
    title: "Payment",
    body: "Payment accepted via PayPal and BRI (Indonesia only).",
  },
  {
    title: "Additional Fee",
    body: (
      <div className="space-y-2">
        <div className="flex justify-between border-b border-border-soft pb-2">
          <span>Couple / Commercial use</span>
          <span className="font-bold text-accent-red">x2 Price</span>
        </div>
        <div className="flex justify-between border-b border-border-soft py-2">
          <span>Additional items</span>
          <span className="font-bold text-accent-red">2$-20$ (20-60k IDR)</span>
        </div>
        <div className="flex justify-between pt-2">
          <span>Background</span>
          <span className="font-bold text-accent-red">5$-30$ (60-300k IDR)</span>
        </div>
      </div>
    ),
  },
];

export default function TermsOfService() {
  return (
    <PageTransition>
      <main className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/55 bg-white/28 px-6 py-10 backdrop-blur-[8px] sm:px-8 lg:px-12 lg:py-14">
          <OrnamentLayer intensity="rich" />

          <div className="relative max-w-3xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-border-soft bg-white/75 px-5 py-3 text-sm font-medium text-text-main shadow-sm backdrop-blur-sm transition hover:border-accent-gold/45 hover:bg-white/95"
            >
              <House className="h-4 w-4 text-accent-gold" />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-3 rounded-full border border-accent-gold/35 bg-white/65 px-4 py-2 text-sm text-text-main">
              <ScrollText className="h-4 w-4 text-accent-gold" />
              Terms of Service
            </div>
            <h1 className="mt-6 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-text-main">Commission Terms</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted">
              Please read and respect the existing ToS
            </p>
          </div>

          <div className="relative mt-10 grid gap-5 lg:grid-cols-2">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                className="glass-panel rounded-[2rem] border border-white/60 p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/30 bg-white/70 text-accent-red">
                    <span className="text-xl">♦</span>
                  </span>
                  <h2 className="font-display text-3xl text-text-main">{section.title}</h2>
                </div>
                <div className="h-px w-full bg-gold-line opacity-80" />
                <div className="mt-5 text-sm leading-8 text-text-muted">{section.body}</div>
              </motion.article>
            ))}
          </div>

          <div id="contact" className="mt-16 flex flex-col items-center">
            <h2 className="font-display text-2xl text-text-main uppercase tracking-widest relative">
              Summon Me
              <div className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-0.5 h-6 bg-white/40"></div>
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-text-muted">
                <CreditCard className="h-5 w-5 text-accent-red" />
                <span>Payment accepted via</span>
              </div>
              <div className="flex gap-4 mt-2">
                <span className="flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-2 font-bold shadow-sm backdrop-blur-sm transition hover:bg-white/20">
                  <PayPalIcon className="h-5 w-5" />
                  PayPal
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-2 font-bold shadow-sm backdrop-blur-sm transition hover:bg-white/20">
                  BRI
                </span>
              </div>
            </div>

            <div className="mt-12 w-full grid gap-4 sm:grid-cols-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel group rounded-[1.75rem] border border-accent-red/30 p-8 text-center transition hover:border-accent-red hover:bg-white/40"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: 0.08 * index }}
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1rem] border border-accent-red/25 bg-white/70 text-accent-red shadow-sm transition group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </span>
                    <p className="mt-6 font-display text-2xl text-text-main">{social.label}</p>
                    <div className="mt-2 flex items-center justify-center gap-2 text-sm text-text-muted">
                      {social.handle}
                      {social.label === "Discord" ? (
                        <span className="rounded border border-border-soft px-1.5 py-0.5 text-[10px] uppercase">Copy</span>
                      ) : (
                        <ArrowUpRight className="h-3 w-3" />
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
