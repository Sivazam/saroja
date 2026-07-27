"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Gallery() {
  const g = profile.gallery;
  const [active, setActive] = useState<number | null>(null);
  const categories = ["All", ...Array.from(new Set(g.items.map((i) => i.category)))];

  return (
    <section id="gallery" className="bg-cream-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index={g.index}
          label={g.label}
          line1={g.headingLine1}
          line2={g.headingLine2}
          subheading={g.subheading}
        />

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {g.items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(i)}
              className="zoom-img lift group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_14px_34px_-22px_rgba(14,42,34,0.35)]"
            >
              <img
                src={it.src}
                alt={it.caption}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/85 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-4 bottom-4 text-left">
                <div className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {it.category}
                </div>
                <div className="mt-0.5 font-serif text-sm font-bold text-cream">
                  {it.caption}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl border border-gold/20 bg-forest"
            >
              <img
                src={g.items[active].src}
                alt={g.items[active].caption}
                className="max-h-[75vh] w-full object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="font-serif text-base font-bold text-cream">
                  {g.items[active].caption}
                </span>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {g.items[active].category}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
