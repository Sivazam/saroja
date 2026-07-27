"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Users, Home, Scale } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

const factIcons = [Calendar, GraduationCap, Users, Home, Scale, MapPin];

export function About() {
  const a = profile.about;
  return (
    <section id="about" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="zoom-img relative overflow-hidden rounded-[1.5rem] border border-line bg-white p-2 shadow-[0_28px_60px_-26px_rgba(14,42,34,0.4)]">
              <img
                src={a.image}
                alt="Saroja Polasapalli engaging with constituents"
                className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
              />
              <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-forest shadow">
                {a.badge}
              </div>
            </div>
            {/* floating quote chip */}
            <div className="absolute -bottom-6 -right-4 hidden max-w-[14rem] rounded-2xl bg-forest px-5 py-4 text-cream shadow-xl sm:block">
              <p className="font-serif text-sm italic leading-relaxed">
                “A clean record is the only answer I have ever owed the public.”
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <SectionHeading
              index={a.index}
              label={a.label}
              line1={a.headingLine1}
              line2={a.headingLine2}
            />
            <div className="mt-7 space-y-5">
              {a.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="text-base leading-relaxed text-ink sm:text-[1.05rem]"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Quick facts grid */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-9 grid gap-3 sm:grid-cols-2"
            >
              {a.quickFacts.map((f, i) => {
                const Icon = factIcons[i % factIcons.length];
                return (
                  <div
                    key={f.label}
                    className="flex items-start gap-3 rounded-xl border border-line bg-white/60 p-3.5"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cream-warm text-forest">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                        {f.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-ink">
                        {f.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
