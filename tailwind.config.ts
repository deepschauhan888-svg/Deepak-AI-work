import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light ("editorial page") surface
        ivory: "#F3EEE3",
        "ivory-raised": "#EBE4D4",
        "ivory-line": "#DCD3BE",
        charcoal: "#221F1A",
        "charcoal-dim": "#8C8573",

        // Dark ("editorial ink") surface — deep charcoal, never pure black
        ink: "#221F1B",
        "ink-raised": "#2B2822",
        "ink-line": "#3C3730",
        cream: "#F3EEE3",
        "cream-dim": "#B4AC98",

        // Shared restrained accent
        gold: "#A9812E",
        "gold-soft": "#C9A227",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },

    },
  },
  plugins: [],
};
export default config;
