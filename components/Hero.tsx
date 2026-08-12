"use client";

import { motion } from "framer-motion";
import { LINKEDIN_URL } from "@/lib/constants";

const STAGES = ["IDEA", "REFINE", "BUILD", "AUTOMATE", "DELIVER"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden plot-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Real Estate Research · Analytics · Valuation · AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-normal text-balance text-[13vw] leading-[0.95] md:text-[6.4rem] md:leading-[0.95] text-paper"
        >
          How I work
          <br />
          <span className="italic text-brass">with AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-[17px] leading-relaxed text-paper-dim"
        >
          I work at the intersection of real estate research, analytics, valuation and
          technology — using AI as an execution layer across the way I think, analyse,
          build and communicate.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 max-w-xl text-[17px] leading-relaxed text-paper"
        >
          The idea, context and judgement start with me.
          <br />
          AI helps me challenge, refine, build, automate and execute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#workflow"
            className="inline-flex items-center gap-2 bg-paper text-ink px-6 py-3 text-[12px] tracking-widest2 uppercase hover:bg-brass transition-colors"
          >
            Explore my AI workflow ↓
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink-line px-6 py-3 text-[12px] tracking-widest2 uppercase text-paper hover:border-brass hover:text-brass transition-colors"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Signature element: a survey line, plotting the workflow like a property boundary run */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-24"
        >
          <SurveyLine />
        </motion.div>
      </div>
    </section>
  );
}

function SurveyLine() {
  return (
    <div className="relative">
      <div className="hidden md:flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-ink-line" />
        <motion.div
          className="absolute left-0 top-1/2 h-px bg-brass origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
          style={{ width: "100%" }}
        />
        {STAGES.map((stage, i) => (
          <div key={stage} className="relative z-10 flex flex-col items-center gap-3 bg-ink px-2">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18, type: "spring", stiffness: 260, damping: 18 }}
              className="w-2 h-2 rotate-45 bg-brass"
            />
            <span className="eyebrow text-paper-dim">{stage}</span>
          </div>
        ))}
      </div>

      {/* Mobile: vertical run */}
      <div className="md:hidden relative pl-4">
        <div className="absolute left-[3px] top-1 bottom-1 w-px bg-ink-line" />
        <motion.div
          className="absolute left-[3px] top-1 w-px bg-brass origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ height: "100%" }}
        />
        <div className="flex flex-col gap-6">
          {STAGES.map((stage, i) => (
            <div key={stage} className="relative flex items-center gap-4">
              <span className="w-2 h-2 rotate-45 bg-brass -ml-[13px]" />
              <span className="eyebrow text-paper-dim">{stage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
