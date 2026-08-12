"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    n: "01",
    title: "Real Estate Research",
    detail:
      "Market studies, sector reports and research frameworks that turn raw market signals into a point of view.",
  },
  {
    n: "02",
    title: "Valuation & Analytics",
    detail:
      "Property valuation, comparable analysis and the analytical models that support a defensible number.",
  },
  {
    n: "03",
    title: "Data & Excel",
    detail:
      "Complex Excel workflows — formulas, classifications, calculations and models built for repeat use.",
  },
  {
    n: "04",
    title: "Reports & Presentations",
    detail:
      "Research and valuation output shaped into documents and decks that are ready to sit in front of a client.",
  },
  {
    n: "05",
    title: "Content & Articles",
    detail:
      "Research-led articles and written content that carry an analytical point of view, not just commentary.",
  },
  {
    n: "06",
    title: "Maps & Market Intelligence",
    detail:
      "Location intelligence — market maps, corridor and connectivity visuals that make geography legible.",
  },
  {
    n: "07",
    title: "Strategy & New Initiatives",
    detail:
      "Turning early ideas and opportunities into structured initiatives worth discussing.",
  },
  {
    n: "08",
    title: "AI & Automation",
    detail:
      "Designing the workflows, prompts and repeatable tools that let AI carry more of the execution load.",
  },
];

export default function WhatIDo() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-12"
        >
          What I Do
        </motion.p>

        <div className="border-t border-ink-line">
          {CATEGORIES.map((cat, i) => {
            const isActive = active === i;
            return (
              <div key={cat.n} className="border-b border-ink-line">
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  className="w-full flex items-center gap-6 md:gap-10 py-6 md:py-8 text-left group"
                >
                  <span className="font-mono text-xs text-brass w-7 shrink-0">{cat.n}</span>
                  <span
                    className={`font-display text-2xl md:text-4xl transition-colors flex-1 ${
                      isActive ? "text-brass" : "text-paper group-hover:text-brass"
                    }`}
                  >
                    {cat.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-paper-dim shrink-0"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 md:pl-16 max-w-2xl text-[16px] leading-relaxed text-paper-dim">
                        {cat.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
