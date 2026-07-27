"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Phone } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
        >
          <a
            href="tel:+919505065555"
            aria-label="Call Saroja"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest shadow-[0_10px_30px_-8px_rgba(14,42,34,0.4)] ring-1 ring-line transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream shadow-[0_14px_30px_-8px_rgba(27,77,62,0.7)] transition-all hover:bg-forest-deep"
          >
            <Handshake className="h-4 w-4 text-gold" />
            Get Involved
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
