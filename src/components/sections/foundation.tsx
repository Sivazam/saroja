"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wind,
  ShoppingBasket,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<string, LucideIcon> = {
  Droplets,
  Wind,
  ShoppingBasket,
  Stethoscope,
};

export function Foundation() {
  const f = profile.foundation;
  return (
    <section id="foundation" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          {/* Headline */}
          <div>
            <SectionHeading
              index={f.index}
              label={f.label}
              line1={f.headingLine1}
              line2={f.headingLine2}
            />
            <div className="mt-7 space-y-4">
              {f.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="text-base leading-relaxed text-ink sm:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                <span className="font-serif text-lg font-bold">PSR</span>
              </span>
              <div>
                <div className="font-serif text-base font-bold text-forest">
                  {f.founder}
                </div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-text">
                  {f.founderRole}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Initiative tiles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {f.initiatives.map((it, i) => {
              const Icon = icons[it.icon] ?? Droplets;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="lift rounded-2xl border border-line bg-white p-5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream-warm text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-serif text-base font-bold text-forest">
                    {it.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">
                    {it.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3 portrait cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {f.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="zoom-img lift group relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_44px_-26px_rgba(14,42,34,0.35)]"
            >
              <img
                src={c.image}
                alt={c.title}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/90 via-forest-ink/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  Foundation
                </div>
                <h4 className="mt-1 font-serif text-lg font-bold text-cream">
                  {c.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
