"use client";

import { motion } from "framer-motion";
import {
  Crown,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = {
  Crown,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
};

export function Impact() {
  const imp = profile.impact;
  return (
    <section id="impact" className="bg-forest-gradient relative overflow-hidden py-24 lg:py-32">
      <div className="argyle-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index={imp.index}
          label={imp.label}
          line1={imp.headingLine1}
          line2={imp.headingLine2}
          align="center"
          subheading={imp.subheading}
          dark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {imp.stats.map((s, i) => {
            const Icon = icons[s.icon] ?? Crown;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="lift relative overflow-hidden rounded-2xl bg-cream p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-gold/30 lg:p-7"
              >
                {/* gold accent top bar */}
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-bright via-gold to-gold-bright" />
                {/* watermark numeral */}
                <span className="pointer-events-none absolute -right-3 -top-6 font-serif text-[7rem] font-bold leading-none text-forest opacity-10">
                  {s.id}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-gold-bright shadow-md">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 font-serif text-4xl font-bold text-forest lg:text-5xl">
                  {s.stat}
                </div>
                <div className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-gold-ink">
                  {s.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 inline-flex items-center justify-center gap-2 rounded-full border border-gold-bright/40 bg-forest-ink/50 px-5 py-2.5 text-center text-sm font-semibold text-cream"
        >
          <BadgeCheck className="h-4 w-4 text-gold-bright" />
          {imp.trustBadge}
        </motion.div>
      </div>
    </section>
  );
}
