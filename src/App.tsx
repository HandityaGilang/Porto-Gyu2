import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import OrnamentLayer from "@/components/OrnamentLayer";
import PageTransition from "@/components/PageTransition";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import TermsOfService from "@/pages/TermsOfService";

function NotFound() {
  return (
    <PageTransition>
      <main className="relative flex min-h-[60vh] items-center justify-center px-4 pb-20 pt-10">
        <div className="glass-panel rounded-[2.5rem] border border-white/55 px-8 py-14 text-center backdrop-blur-[8px] sm:px-14">
          <p className="text-fine text-xs uppercase text-accent-gold">404</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-text-main">Page not found</h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-text-muted">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent-red px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-accent-red/25 transition hover:bg-accent-red-dark"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </PageTransition>
  );
}

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  const routeKey = useMemo(() => `${location.pathname}${location.search}`, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen overflow-x-clip text-text-main">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute left-[-12rem] top-[-4rem] h-80 w-80 rounded-full bg-white/45 blur-2xl" />
        <div className="absolute right-[-6rem] top-24 h-72 w-72 rounded-full bg-bg-soft/60 blur-2xl" />
        <div className="absolute bottom-[-8rem] left-[28%] h-72 w-72 rounded-full bg-bg-soft/55 blur-2xl" />
      </div>

      <OrnamentLayer intensity="soft" />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={routeKey}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
