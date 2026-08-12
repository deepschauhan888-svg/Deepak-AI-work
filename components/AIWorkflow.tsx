"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Think", detail: "I identify the problem or idea." },
  { n: "02", title: "Refine", detail: "AI challenges my assumptions and sharpens it." },
  { n: "03", title: "Build", detail: "AI creates the first working version." },
  { n: "04", title: "Iterate", detail: "I review, correct and push it further." },
  { n: "05", title: "Automate", detail: "Where possible, it becomes repeatable." },
  { n: "06", title: "Deliver", detail: "The output is work-ready." },
];

export default function AIWorkflow() {
  return (
    <section id="ai" className="relative py-16 md:py-20 bg-ink plot-grid-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark mb-5"
        >
          How AI Fits Into My Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl text-cream"
        >
          Not a tool I reach for. <span className="italic text-gold-soft">A layer in how I work.</span>
        </motion.h2>

        <div className="mt-10 relative">
          <div className="hidden md:block absolute left-0 right-0 top-5 h-px bg-ink-line" />
          <motion.div
            className="hidden md:block absolute left-0 top-5 h-px bg-gold-soft origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-ink border border-gold-soft mb-4" />
                <span className="font-mono text-[10px] text-gold-soft">{step.n}</span>
                <h3 className="font-display text-lg mt-1.5 mb-1.5 text-cream">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-cream-dim">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
