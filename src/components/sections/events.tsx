"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Events() {
  const e = profile.events;
  return (
    <section id="events" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index={e.index}
          label={e.label}
          line1={e.headingLine1}
          line2={e.headingLine2}
          subheading={e.subheading}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {e.clippings.map((c, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className="lift group overflow-hidden rounded-xl border border-line bg-white p-2 shadow-[0_14px_34px_-22px_rgba(14,42,34,0.35)]"
            >
              <div className="zoom-img relative overflow-hidden rounded-lg">
                <img
                  src={c.src}
                  alt={c.caption}
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/50 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-1.5 rounded-md bg-forest-ink/60 px-2 py-1.5 backdrop-blur-sm">
                  <Newspaper className="h-3 w-3 shrink-0 text-gold-bright" />
                  <span className="text-[0.58rem] font-bold uppercase leading-tight tracking-[0.1em] text-cream">
                    {c.caption}
                  </span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
