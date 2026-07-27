"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 3-second loading screen with percentage counter.
 * Counts 0 → 100 over ~3s, then fades out.
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // small delay before fade-out so 100% is visible
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-gradient"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Decorative rotating ring */}
          <div className="relative mb-10 flex h-32 w-32 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border border-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute inset-2 rounded-full border-t-2 border-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-forest-ink/60"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-serif text-3xl font-bold text-gold">S</span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-2xl font-bold text-cream sm:text-3xl">
              Saroja <span className="text-gold">Polasapalli</span>
            </h1>
            <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold/80 sm:text-xs">
              Mayor · Leader · Reformer
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-10 h-px w-60 overflow-hidden bg-cream/15 sm:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-gold/40 via-gold to-gold-bright"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage counter */}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-serif text-4xl font-bold tabular-nums text-cream sm:text-5xl">
              {progress}
            </span>
            <span className="font-serif text-xl font-semibold text-gold">%</span>
          </div>

          <p className="mt-6 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-cream/40">
            Loading the journey
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
