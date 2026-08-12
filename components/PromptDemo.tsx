"use client";

import { motion } from "framer-motion";

export default function PromptDemo() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Prompt Engineering
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl mt-5 leading-snug text-balance"
            >
              How the problem is framed decides the output.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[15px] leading-relaxed text-paper-dim max-w-sm"
            >
              Prompt writing is itself part of my workflow — especially for tools such
              as Claude. A vague ask produces a vague result.
            </motion.p>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <PromptStep
              label="Raw idea"
              tone="dim"
              delay={0}
              content={<p className="italic text-paper-dim">&ldquo;Make this report look premium.&rdquo;</p>}
            />
            <Arrow />
            <PromptStep
              label="Refined prompt"
              tone="brass"
              delay={0.15}
              content={
                <p className="text-paper leading-relaxed">
                  &ldquo;Create a premium consulting-style real estate report with a
                  clear executive summary, market context, comparable analysis and a
                  restrained, editorial visual system — near-black background, one
                  accent colour, strong typographic hierarchy…&rdquo;
                </p>
              }
            />
            <Arrow />
            <PromptStep
              label="Output"
              tone="paper"
              delay={0.3}
              content={
                <p className="text-paper-dim">
                  A structured visual report / presentation, ready for review and
                  iteration.
                </p>
              }
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="eyebrow mt-2"
            >
              Prompt → Leverage
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-brass text-lg pl-1"
      aria-hidden
    >
      ↓
    </motion.div>
  );
}

function PromptStep({
  label,
  content,
  tone,
  delay,
}: {
  label: string;
  content: React.ReactNode;
  tone: "dim" | "brass" | "paper";
  delay: number;
}) {
  const borderTone =
    tone === "brass" ? "border-brass" : tone === "paper" ? "border-paper-dim" : "border-ink-line";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`border ${borderTone} p-6 bg-ink-raised/40`}
    >
      <span className="eyebrow">{label}</span>
      <div className="mt-3 text-[15px]">{content}</div>
    </motion.div>
  );
}
