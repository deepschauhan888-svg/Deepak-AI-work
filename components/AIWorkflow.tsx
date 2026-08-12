"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Think",
    detail: "I identify the problem, opportunity or idea.",
  },
  {
    n: "02",
    title: "Refine",
    detail: "I use AI as a thinking partner to challenge assumptions and sharpen the idea.",
  },
  {
    n: "03",
    title: "Prompt",
    detail: "I convert the requirement into a precise instruction for the right AI tool.",
  },
  {
    n: "04",
    title: "Build",
    detail: "AI helps create the first working version.",
  },
  {
    n: "05",
    title: "Iterate",
    detail: "I review the output, correct it, refine it and push it further.",
  },
  {
    n: "06",
    title: "Automate",
    detail: "Where possible, I turn the workflow into something repeatable.",
  },
  {
    n: "07",
    title: "Deliver",
    detail: "The final output becomes work-ready.",
  },
];

export default function AIWorkflow() {
  return (
    <section id="workflow" className="relative py-28 md:py-36 border-t border-ink-line plot-grid">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-6"
        >
          How AI Fits Into My Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl leading-tight text-balance max-w-3xl"
        >
          AI is not a tool I use.
          <br />
          <span className="italic text-brass">It is a layer in how I work.</span>
        </motion.h2>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-ink-line" />
          <motion.div
            className="hidden md:block absolute left-0 top-6 h-px bg-brass origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-7 gap-x-4 gap-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative"
              >
                <div className="hidden md:flex w-3 h-3 rounded-full bg-ink border border-brass mb-6" />
                <span className="font-mono text-[11px] text-brass">{step.n}</span>
                <h3 className="font-display text-xl mt-2 mb-2 text-paper">{step.title}</h3>
                <p className="text-[14px] leading-relaxed text-paper-dim">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
