"use client";

import { motion } from "framer-motion";

const TOOLS = ["ChatGPT", "Claude", "Excel", "Canva", "GitHub", "Vercel"];

export default function ToolStack() {
  return (
    <section className="relative py-24 md:py-32 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            The Tools Behind The Work
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display italic text-xl text-paper-dim"
          >
            The tool changes. The thinking doesn&rsquo;t.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
          {TOOLS.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display text-2xl md:text-3xl text-paper-dim hover:text-brass transition-colors"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
