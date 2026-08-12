"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, LINKEDIN_URL } from "@/lib/constants";

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
        }`}
      >
        <motion.div
          className="h-[2px] bg-brass origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-sm tracking-wide text-paper"
            aria-label="Back to top"
          >
            D. — AI in Practice
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] tracking-wide text-paper-dim hover:text-paper transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center border border-ink-line px-4 py-2 text-[12px] tracking-widest2 uppercase text-paper hover:border-brass hover:text-brass transition-colors"
          >
            LinkedIn
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-[1.5px] bg-paper transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
              }`}
            />
            <span
              className={`h-[1.5px] bg-paper transition-all duration-300 ${
                open ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-paper transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink md:hidden flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-paper"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_ITEMS.length }}
              >
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass text-sm tracking-widest2 uppercase"
                >
                  Connect on LinkedIn
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
