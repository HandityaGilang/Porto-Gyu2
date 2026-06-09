import { motion } from "framer-motion";
import { ArrowRight, House } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ArtworkGrid from "@/components/ArtworkGrid";
import BackButton from "@/components/BackButton";
import ImageLightbox from "@/components/ImageLightbox";
import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";
import PortfolioTypeCarousel from "@/components/PortfolioTypeCarousel";
import type { Artwork } from "@/data/artworks";
import { getArtworksByType, getSelectedArtType } from "@/utils/portfolio";

export default function Portfolio() {
  const [searchParams] = useSearchParams();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const selectedType = useMemo(() => getSelectedArtType(searchParams.get("type")), [searchParams]);
  const filteredArtworks = useMemo(
    () => (selectedType ? getArtworksByType(selectedType.id) : []),
    [selectedType],
  );

  return (
    <PageTransition>
      <main className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] pb-2">
          <OrnamentLayer intensity="rich" />

          {!selectedType ? (
            <section className="relative space-y-8 rounded-[2.5rem] border border-white/55 bg-white/28 px-6 py-10 backdrop-blur-[8px] sm:px-8 lg:px-12 lg:py-14">
              <div className="flex justify-start">
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 rounded-full border border-border-soft bg-white/75 px-5 py-3 text-sm font-medium text-text-main shadow-sm backdrop-blur-sm transition hover:border-accent-gold/45 hover:bg-white/95"
                >
                  <House className="h-4 w-4 text-accent-gold" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="max-w-2xl">
                <p className="text-fine text-xs uppercase text-accent-gold">Curated Portfolio</p>
                <h1 className="mt-4 font-display text-[clamp(3rem,6vw,4.8rem)] leading-none text-text-main">
                  This is my portfolio
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-text-muted">Explore my artwork by type.</p>
              </div>

              <PortfolioTypeCarousel />
            </section>
          ) : (
            <section className="relative space-y-10 rounded-[2.5rem] border border-white/55 bg-white/28 px-6 py-10 backdrop-blur-[8px] sm:px-8 lg:px-12 lg:py-14">
              <div className="flex flex-wrap items-center gap-3">
                <BackButton fallbackTo="/portfolio" label="Back to Portfolio" />
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 rounded-full border border-border-soft bg-white/75 px-5 py-3 text-sm font-medium text-text-main shadow-sm backdrop-blur-sm transition hover:border-accent-gold/45 hover:bg-white/95"
                >
                  <House className="h-4 w-4 text-accent-gold" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end">
                <div>
                  <p className="text-fine text-xs uppercase text-accent-gold">Selected Type</p>
                  <h1 className="mt-4 font-display text-[clamp(3rem,6vw,4.8rem)] leading-none text-text-main">
                    {selectedType.name}
                  </h1>
                  <p className="mt-5 max-w-lg text-lg leading-8 text-text-muted">{selectedType.description}</p>
                </div>

                <div className="glass-panel rounded-[2rem] border border-white/60 p-4 shadow-card">
                  <img
                    src={selectedType.image}
                    alt={selectedType.name}
                    className="h-[18rem] w-full rounded-[1.6rem] object-cover"
                  />
                </div>
              </div>

              <PortfolioTypeCarousel selectedTypeId={selectedType.id} />
              <ArtworkGrid artworks={filteredArtworks} onSelect={setSelectedArtwork} />

              <motion.div
                className="glass-panel rounded-[2.25rem] border border-white/65 px-6 py-8 sm:px-8 lg:flex lg:items-center lg:justify-between"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
              >
                <div>
                  <p className="text-fine text-xs uppercase text-accent-gold">Commission Call</p>
                  <h2 className="mt-3 font-display text-4xl text-text-main">Like this style?</h2>
                </div>

                <Link
                  to="/tos"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent-red px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-red/25 transition hover:bg-accent-red-dark lg:mt-0"
                >
                  <span>Commission Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </section>
          )}
        </div>

        <ImageLightbox artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      </main>
    </PageTransition>
  );
}
