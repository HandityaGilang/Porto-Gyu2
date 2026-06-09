import { motion } from "framer-motion";
import { House, Mail, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "General Information",
    body: "Commissions are accepted for the styles presented in this portfolio. I reserve the right to decline requests that do not fit the current scope, schedule, or creative direction.",
  },
  {
    title: "Commission Process",
    body: "Requests begin with a concept discussion, scope review, and quotation. Work starts after agreement on the brief, timeline, and any required references.",
  },
  {
    title: "Payment",
    body: "Payment is typically requested upfront or through a split milestone structure for larger projects. Final files are delivered once the agreed payment has been completed.",
  },
  {
    title: "Revision Policy",
    body: "Reasonable revisions are included during the sketch and approval stages. Major changes after approval or during final rendering may require an additional fee.",
  },
  {
    title: "Usage Rights",
    body: "Personal commissions are for non-commercial use unless commercial rights are discussed in advance. The artist retains the right to display completed work in a portfolio unless confidentiality is agreed beforehand.",
  },
  {
    title: "Cancellation",
    body: "If a project is cancelled after work has started, compensation is based on the amount already completed. Refund eligibility depends on the progress stage and reserved schedule time.",
  },
  {
    title: "Contact",
    body: "For commission inquiries, timelines, or clarification on terms, please reach out through the listed social channels or your preferred commission contact method.",
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
              Everything here is presented with clarity so inquiries, approvals, and final delivery feel calm and transparent.
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
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl text-text-main">{section.title}</h2>
                </div>
                <div className="h-px w-full bg-gold-line opacity-80" />
                <p className="mt-5 text-sm leading-8 text-text-muted">{section.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="glass-panel relative mt-8 flex flex-wrap items-center gap-4 rounded-[2rem] border border-white/60 px-6 py-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-gold/30 bg-white/70 text-accent-red">
              <Mail className="h-5 w-5" />
            </span>
            <p className="text-sm leading-7 text-text-muted">
              Need a custom agreement for commercial work or private delivery? A tailored arrangement can be discussed before booking.
            </p>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}
