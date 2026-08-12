"use client";

import { motion } from "framer-motion";

const FLOW = ["Research", "Analysis", "Insight", "Communication", "Decision"];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Who I Am
            </motion.p>
          </div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl md:text-4xl leading-snug text-balance text-paper"
            >
              I work in real estate research and analytics, where my work sits between
              data, market intelligence, valuation and communication.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-[17px] leading-relaxed text-paper-dim max-w-2xl"
            >
              My role often means taking complex information — market data, property
              fundamentals, valuation inputs — and turning it into insights, analytical
              frameworks, valuation outputs, research reports, presentations, visual
              stories and workflows that can be used again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-4"
            >
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="font-mono text-[13px] tracking-wide text-paper border border-ink-line px-3 py-1.5">
                    {step}
                  </span>
                  {i < FLOW.length - 1 && <span className="text-brass">→</span>}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
