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
    <section id="impact" className="argyle-pattern relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-forest-gradient opacity-90" />
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
                className="lift glass relative overflow-hidden rounded-2xl p-6 lg:p-7"
              >
                {/* watermark numeral */}
                <span className="pointer-events-none absolute -right-2 -top-4 font-serif text-[6rem] font-bold leading-none text-gold/10">
                  {s.id}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 font-serif text-4xl font-bold text-cream lg:text-5xl">
                  {s.stat}
                </div>
                <div className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {s.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
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
          className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-cream/70"
        >
          <BadgeCheck className="h-4 w-4 text-gold" />
          {imp.trustBadge}
        </motion.div>
      </div>
    </section>
  );
}
