import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import OrnamentLayer from "@/components/OrnamentLayer";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import TermsOfService from "@/pages/TermsOfService";

function AppLayout() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  const routeKey = useMemo(() => `${location.pathname}${location.search}`, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen overflow-x-clip text-text-main">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-12rem] top-[-4rem] h-80 w-80 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-72 w-72 rounded-full bg-bg-soft/60 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[28%] h-72 w-72 rounded-full bg-bg-soft/55 blur-3xl" />
      </div>

      <OrnamentLayer intensity="rich" />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={routeKey}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>

      <IntroAnimation show={showIntro} onComplete={() => setShowIntro(false)} />
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
