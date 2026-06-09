import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "ToS", to: "/tos" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const activePrefix = useMemo(() => location.pathname.split("/")[1], [location.pathname]);

  return (
    <header className="sticky top-0 z-40 px-4 pb-3 pt-4 sm:px-6 lg:px-10">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-7">
        <NavLink to="/" className="flex items-center gap-3 text-text-main transition hover:text-accent-red">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/30 bg-white/50 text-accent-gold">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-2xl">52hertz</span>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const isActive =
              item.to === "/"
                ? location.pathname === "/"
                : activePrefix !== "" && item.to.startsWith(`/${activePrefix}`);

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-text-muted transition duration-300 hover:text-text-main",
                  isActive && "text-text-main",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-1 h-px rounded-full bg-gradient-to-r from-accent-red via-accent-gold to-accent-red opacity-0 transition",
                    isActive && "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-[0.38rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-gold opacity-0 transition",
                    isActive && "opacity-100",
                  )}
                />
              </NavLink>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white/55 text-text-main transition hover:border-accent-gold/50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl md:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-panel rounded-[2rem] p-4">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-white/80 text-text-main shadow-sm"
                          : "text-text-muted hover:bg-white/55 hover:text-text-main",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
