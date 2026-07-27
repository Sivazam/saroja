"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Journey() {
  const items = profile.journey;

  return (
    <section id="journey" className="relative overflow-hidden bg-cream-warm py-24 lg:py-32">
      {/* subtle top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="JOURNEY"
          line1="Two decades of"
          line2="service"
          subheading="From a 24-year-old Mayor to a movement for reform — the milestones that defined a career in public life."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* center spine (desktop) */}
          <div className="journey-spine absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block" />
          {/* left spine (mobile) */}
          <div className="journey-spine absolute left-4 top-0 h-full w-px lg:hidden" />

          <div className="space-y-10 lg:space-y-4">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <JourneyCard key={i} item={item} index={i} isLeft={isLeft} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type Item = (typeof profile.journey)[number];

function JourneyCard({
  item,
  index,
  isLeft,
}: {
  item: Item;
  index: number;
  isLeft: boolean;
}) {
  return (
    <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">
      {/* Center dot (desktop) */}
      <div className="absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 lg:block">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-gold ring-4 ring-cream-warm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-forest" />
        </motion.span>
      </div>
      {/* Mobile dot */}
      <div className="absolute left-4 top-6 z-10 -translate-x-1/2 lg:hidden">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold ring-4 ring-cream-warm">
          <span className="h-1 w-1 rounded-full bg-forest" />
        </span>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`ml-10 lg:ml-0 ${
          isLeft ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"
        }`}
      >
        <article className="lift group overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_44px_-26px_rgba(14,42,34,0.35)]">
          <div className={`flex flex-col sm:flex-row ${isLeft ? "lg:flex-row-reverse" : ""}`}>
            <div className="zoom-img relative sm:w-2/5">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover sm:h-full"
              />
              <span className="absolute left-3 top-3 rounded-full bg-forest/90 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold">
                {item.tag}
              </span>
            </div>
            <div className="flex-1 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-gold">
                  {item.year}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-bold text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                {item.description}
              </p>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
