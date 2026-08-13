"use client";

import { motion } from "framer-motion";
import { LINKEDIN_URL, FULL_NAME, POSITIONING } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center plot-grid-light overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-6 md:px-10 pt-16 pb-6 md:pt-16 md:pb-8">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left: copy */}
          <div className="md:col-span-7 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow-light mb-3"
            >
              {FULL_NAME}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-[13px] tracking-wide text-charcoal-dim mb-4"
            >
              {POSITIONING}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-normal text-balance text-[11vw] leading-[0.97] md:text-[4rem] md:leading-[0.96] text-charcoal"
            >
              How I work
              <br />
              <span className="italic text-gold">with AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal-dim"
            >
              I work across real estate research, analytics, valuation and
              communication — using AI to rethink how the work gets done.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.33 }}
              className="mt-2 max-w-md text-[15px] leading-relaxed text-charcoal"
            >
              The ideas, context and judgement start with me.
              <br />
              AI helps me refine, build, automate and execute.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-charcoal text-ivory px-6 py-3 text-[12px] tracking-widest uppercase hover:bg-gold transition-colors"
              >
                Explore my work ↓
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12px] tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
              >
                LinkedIn →
              </a>
            </motion.div>
          </div>

          {/* Right: editorial portrait — height is capped relative to the viewport so the
              full photo always sits above the fold instead of extending past it. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 order-1 md:order-2 flex flex-col items-center md:items-end"
          >
            <div
              className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-xs md:max-w-none md:w-auto md:h-[46vh] md:min-h-[320px] md:max-h-[520px] border border-ivory-line bg-charcoal"
              style={{
                backgroundImage: "url('/portrait.png')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
            <p className="mt-3 text-[12px] tracking-wide text-charcoal-dim text-center md:text-right">
              <span className="text-charcoal font-medium">DEEPAK CHAUHAN</span>
              <br />
              Real Estate Research · Analytics
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

