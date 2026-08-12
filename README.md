# How I Work With AI

An interactive personal site showing how real estate research, analytics and
valuation work is done with AI as an execution layer — built with Next.js
(App Router), TypeScript, Tailwind CSS and Framer Motion.

## Before you deploy — one edit

Open `lib/constants.ts` and replace the placeholder LinkedIn URL:

```ts
export const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile/";
```

This single constant powers every "LinkedIn" button and link on the site.

If your name isn't Deepak, also update:
- `SITE_NAME` in `lib/constants.ts`
- The title/description in `app/layout.tsx` (`metadata`)
- "Deepak" in the page `<title>` if you want a different name shown in the browser tab

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles every section in order
  globals.css         Design tokens, base styles, reduced-motion handling
components/
  Navigation.tsx      Sticky nav, scroll progress bar, mobile menu
  Hero.tsx             Hero + animated IDEA→REFINE→BUILD→AUTOMATE→DELIVER line
  About.tsx            "Who I Am"
  WhatIDo.tsx          8 expandable "What I Do" categories
  AIWorkflow.tsx       THINK→REFINE→PROMPT→BUILD→ITERATE→AUTOMATE→DELIVER
  AIWorkbench.tsx      12-card workbench grid + expandable modal
  WorkbenchCard.tsx    Single workbench card
  ExcelHighlight.tsx   "2 days → 20 minutes" highlight moment
  PromptDemo.tsx       Raw idea → refined prompt → output demo
  CaseStudies.tsx      5 interactive case studies
  Impact.tsx           "What AI changes for me"
  Philosophy.tsx       Full-width philosophy statement
  ToolStack.tsx        Tools used
  Footer.tsx           Final CTA
lib/
  constants.ts         LinkedIn URL, nav items (edit this)
  workbench.ts          Content for the 12 workbench cards
  caseStudies.ts         Content for the 5 case studies
```

## Deploy to GitHub + Vercel

### 1. Push to GitHub

```bash
cd how-i-work-with-ai
git init
git add .
git commit -m "Initial commit: How I Work With AI"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't initialise it
with a README so the push above doesn't conflict.)

### 2. Deploy on Vercel

1. Go to vercel.com → **Add New… → Project**.
2. Import the GitHub repository you just pushed.
3. Framework Preset: Vercel will auto-detect **Next.js** — leave defaults as-is.
4. Build command: `next build` (default). Output directory: default. No
   environment variables are required.
5. Click **Deploy**.
6. You'll get a live URL like `https://<project-name>.vercel.app`.

### 3. Add it to LinkedIn

Go to your LinkedIn profile → **Add profile section → Featured → Add a link**,
paste your Vercel URL, and add a title/description.

## Notes

- No backend or environment variables are required.
- Fonts (Fraunces, Inter, IBM Plex Mono) are loaded via `next/font/google` at
  build time — an internet connection is needed when running `npm run build`
  or `npm run dev` for the first time so the fonts can be fetched and
  self-hosted by Next.js.
- All content follows the brief's factual constraints: no invented employers,
  clients, revenue, percentages or certifications. The "2 days → 20 minutes"
  figure is the one real example provided, phrased as "selected complex
  Excel workflows" / "in selected cases" throughout, not as a universal claim.
- Reduced-motion preferences are respected (`prefers-reduced-motion`).
- Keyboard focus states are visible throughout (`:focus-visible`).
