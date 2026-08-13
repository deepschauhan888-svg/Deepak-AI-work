// Single source of truth for the LinkedIn URL, used by every LinkedIn link on the site.
export const LINKEDIN_URL = "https://www.linkedin.com/in/chauhan09deepak/";

export const FULL_NAME = "Deepak Chauhan";
export const POSITIONING = "Real Estate Research × Analytics × AI";

// Nav order follows the page's actual reading order: About → AI → Work → Proof.
export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "AI", href: "#ai" },
  { label: "Work", href: "#work" },
  { label: "Proof", href: "#proof" },
] as const;
