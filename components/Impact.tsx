"use client";

import { motion } from "framer-motion";

const SHIFTS = [
  { from: "2 days", to: "20 minutes", note: "Selected complex Excel workflows" },
  { from: "Idea", to: "Output", note: "Faster iteration" },
  { from: "Raw data", to: "Insight", note: "Better analytical storytelling" },
  { from: "Repetitive", to: "Repeatable", note: "Workflow automation" },
  { from: "Concept", to: "Presentation", note: "Faster execution" },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-12"
        >
          What AI Changes For Me
        </motion.p>

        <div className="border-t border-ink-line">
          {SHIFTS.map((s, i) => (
            <motion.div
              key={s.note}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-ink-line py-7 md:py-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
            >
              <div className="flex items-baseline gap-4 font-display text-2xl md:text-3xl">
                <span className="text-paper-dim">{s.from}</span>
                <span className="text-brass">→</span>
                <span className="text-paper">{s.to}</span>
              </div>
              <span className="font-mono text-[12px] tracking-wide text-stone">{s.note}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 max-w-xl text-[17px] leading-relaxed text-paper"
        >
          Speed is only one part of the value. The bigger gain is the ability to
          experiment, iterate and execute more ideas.
        </motion.p>
      </div>
    </section>
  );
}
