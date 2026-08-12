"use client";

import { motion } from "framer-motion";
import { LINKEDIN_URL } from "@/lib/constants";

const TOOLS = ["ChatGPT", "Claude", "Excel", "Canva", "GitHub", "Vercel"];

export default function PhilosophyAndCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-ink plot-grid-dark overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark mb-8"
        >
          Philosophy
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-3xl md:text-5xl leading-tight text-balance text-cream"
        >
          AI doesn&rsquo;t replace the person doing the work.
          <br />
          It changes what that person is capable of doing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-[15px] text-cream-dim"
        >
          I don&rsquo;t use AI to think less. I use it to think further.
        </motion.p>

        {/* Tool strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 font-mono text-[12px] tracking-wide text-cream-dim"
        >
          {TOOLS.map((tool, i) => (
            <span key={tool} className="flex items-center gap-3">
              {tool}
              {i < TOOLS.length - 1 && <span className="text-ink-line">·</span>}
            </span>
          ))}
        </motion.div>

        {/* Final CTA */}
        <div className="mt-14 border-t border-ink-line pt-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-dark mb-5"
          >
            Curious About How I Work?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl text-balance text-cream"
          >
            Explore the workflow.
            <br />
            <span className="italic text-gold-soft">Then let&rsquo;s talk.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream text-ink px-7 py-3.5 text-[12px] tracking-widest uppercase hover:bg-gold-soft transition-colors"
            >
              View LinkedIn
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 border border-ink-line px-7 py-3.5 text-[12px] tracking-widest uppercase text-cream hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              Back to top
            </a>
          </motion.div>

          <p className="mt-10 font-mono text-[11px] tracking-wide text-cream-dim/70">
            Designed &amp; built with AI as an execution layer. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
