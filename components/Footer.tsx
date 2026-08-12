"use client";

import { motion } from "framer-motion";
import { LINKEDIN_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-6"
        >
          Curious About How I Work?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-balance"
        >
          Explore the workflow.
          <br />
          <span className="italic text-brass">Then let&rsquo;s talk.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-paper text-ink px-7 py-3.5 text-[12px] tracking-widest2 uppercase hover:bg-brass transition-colors"
          >
            View LinkedIn
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 border border-ink-line px-7 py-3.5 text-[12px] tracking-widest2 uppercase text-paper hover:border-brass hover:text-brass transition-colors"
          >
            Back to top
          </a>
        </motion.div>

        <p className="mt-24 font-mono text-[11px] tracking-wide text-stone">
          Designed &amp; built with AI as an execution layer. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
