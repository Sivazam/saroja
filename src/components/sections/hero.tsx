"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone, Star, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const h = profile.hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Decorative background rings */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full border border-gold/15" />
        <div className="absolute -left-24 top-24 h-[20rem] w-[20rem] rounded-full border border-gold/10" />
        <div className="absolute right-[8%] top-1/3 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
        <Star className="absolute right-[6%] top-24 h-4 w-4 text-gold/60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:px-10">
        {/* Left: content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {h.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.32 }}
            className="mt-6 font-serif text-[3.4rem] font-bold leading-[0.98] tracking-tight text-forest sm:text-7xl lg:text-[5.2rem]"
          >
            {h.headlineLine1}
            <br />
            <span className="bg-gradient-to-r from-gold-bright via-gold to-[#b8923f] bg-clip-text text-transparent">
              {h.headlineLine2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.44 }}
            className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-ink/80 sm:text-xl"
          >
            {h.intro}
          </motion.p>

          {/* Role tags */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.56 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-soft"
          >
            {h.roles.map((role, i) => (
              <li key={role} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                {role}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.68 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_14px_30px_-10px_rgba(27,77,62,0.6)] transition-all hover:bg-forest-deep hover:shadow-[0_18px_36px_-10px_rgba(27,77,62,0.7)]"
            >
              {h.primaryCta}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-forest transition-all hover:border-forest hover:bg-forest hover:text-cream"
            >
              <Phone className="h-4 w-4" />
              {h.secondaryCta}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-line pt-6"
          >
            {h.stats.map((s, i) => (
              <div key={s.id} className="flex items-center gap-8">
                {i > 0 && <span className="hidden h-10 w-px bg-line sm:block" />}
                <div>
                  <div
                    className={`font-serif text-3xl font-bold ${
                      i === 1 ? "text-gold" : "text-forest"
                    }`}
                  >
                    {s.stat}
                  </div>
                  <div className="mt-1 max-w-[9rem] text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-soft">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="zoom-img relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_30px_70px_-25px_rgba(14,42,34,0.45)]">
              <img
                src={h.portrait}
                alt="Portrait of Saroja Polasapalli, former Mayor of Kakinada"
                className="aspect-[4/5] w-full object-cover"
              />
              {/* Bottom frosted name card */}
              <div className="glass-light absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4">
                <div className="font-serif text-lg font-bold text-forest">
                  {profile.fullName}
                </div>
                <div className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  M.Sc., Computers · Kakinada Municipal Corporation
                </div>
              </div>
            </div>

            {/* Top established badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.6, delay: 3.7 }}
              className="absolute -left-3 -top-5 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-6"
            >
              <div className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-slate-soft">
                Established
              </div>
              <div className="font-serif text-2xl font-bold text-forest">
                {h.established}
              </div>
            </motion.div>

            {/* Term badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 3.85, type: "spring" }}
              className="absolute -bottom-5 -right-3 rounded-2xl bg-forest px-5 py-3 text-center shadow-xl sm:-right-5"
            >
              <div className="text-[0.5rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {h.termLabel}
              </div>
              <div className="font-serif text-base font-bold text-cream">
                {h.term}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 lg:mt-20"
      >
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-slate-soft">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-soft/50 p-1"
        >
          <span className="h-1.5 w-1 rounded-full bg-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}
