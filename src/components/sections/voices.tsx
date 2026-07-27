"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Voices() {
  const v = profile.voices;
  return (
    <section id="voices" className="relative overflow-hidden bg-forest py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index={v.index}
          label={v.label}
          line1={v.headingLine1}
          line2={v.headingLine2}
          subheading={v.subheading}
          dark
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {v.quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="lift relative overflow-hidden rounded-2xl border border-gold-bright/40 bg-forest-ink/70 p-7 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.5)] lg:p-8"
            >
              {/* gold accent left bar */}
              <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-bright via-gold to-transparent" />
              <Quote className="h-10 w-10 text-gold-bright" />
              <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-cream lg:text-2xl">
                {q.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-gold-bright" />
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-bright">
                  {q.context}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
