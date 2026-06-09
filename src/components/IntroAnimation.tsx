import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

interface IntroAnimationProps {
  show: boolean;
  onComplete: () => void;
}

export default function IntroAnimation({ show, onComplete }: IntroAnimationProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!show) {
      return;
    }

    const duration = reduceMotion ? 80 : 1500;
    const timer = window.setTimeout(onComplete, duration);

    return () => window.clearTimeout(timer);
  }, [onComplete, reduceMotion, show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-[linear-gradient(180deg,rgba(238,241,248,0.94),rgba(245,243,239,0.96))]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.01 : 0.45, ease: "easeInOut" } }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-8 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ornament-ring absolute -left-16 top-[-3rem] h-24 w-24 rounded-full"
              initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
              animate={reduceMotion ? {} : { scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            />
            <motion.div
              className="ornament-ring absolute -right-10 bottom-2 h-16 w-16 rounded-full"
              initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
              animate={reduceMotion ? {} : { scale: 1, opacity: 0.58 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            />

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -18 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center gap-3 text-[clamp(2rem,3vw,3rem)] text-text-main"
            >
              <span className="text-xl text-accent-gold">✦</span>
              <span className="font-display">52hertz</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? {} : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="h-40 w-20 rounded-[2rem] border border-white/80 bg-white/45 shadow-card backdrop-blur-sm"
                  initial={reduceMotion ? false : { opacity: 0, y: 70, rotate: index === 1 ? 0 : index === 0 ? -8 : 8 }}
                  animate={reduceMotion ? {} : { opacity: 1, y: 0, rotate: index === 1 ? 0 : index === 0 ? -4 : 5 }}
                  transition={{ duration: 0.65, delay: 0.35 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </motion.div>

            <motion.p
              className="max-w-md text-balance font-display text-[clamp(1.75rem,3.2vw,3.5rem)] text-text-main"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              Art that speaks in color
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
