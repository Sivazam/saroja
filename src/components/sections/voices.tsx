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
              className="lift relative overflow-hidden rounded-2xl border border-gold/15 bg-forest-ink/40 p-7 lg:p-8"
            >
              <Quote className="h-9 w-9 text-gold/40" />
              <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-cream lg:text-2xl">
                {q.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
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
