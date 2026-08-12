# How I Work With AI

A short, personal, interactive site showing how real estate research,
analytics and valuation work is done with AI as an execution layer. Built
with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Two edits before you deploy

**1. Add your portrait.**
Drop a photo at `public/portrait.jpg` (portrait/vertical crop, roughly a
4:5 ratio works best). The hero's image container references this path
directly — if the file isn't there yet, the container just shows as a
plain dark rectangle, so the layout stays intact either way.

**2. Add your LinkedIn URL.**
Open `lib/constants.ts` and replace the placeholder:

```ts
export const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile/";
```

This single constant powers every LinkedIn link on the site.

If your name isn't Deepak Chauhan, also update `FULL_NAME` and
`POSITIONING` in `lib/constants.ts`, and the title in `app/layout.tsx`.

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

The site is six sections, telling one story — who I am, how I use AI, what
I build, and the proof — rather than a long list of capabilities.

```
app/
  layout.tsx            Fonts, SEO metadata
  page.tsx               Assembles the 6 sections in order
  globals.css             Light/dark surface tokens, reduced-motion handling
components/
  Navigation.tsx          Sticky nav (About · AI · Work · Proof), scroll bar
  Hero.tsx                 Name, headline, portrait — one viewport, light
  WhoAndWhat.tsx           "Who I Am" + "What I Work On" merged — light
  AIWorkflow.tsx           7-step AI workflow — dark
  SelectedWork.tsx         6 expandable work areas + "What I Actually Build" — light
  Proof.tsx                 "2 days → 20 minutes" highlight — dark
  CaseStudies.tsx          4 case studies, collapsed by default — light
  PhilosophyAndCTA.tsx    Philosophy statement, tool strip, final CTA — dark
lib/
  constants.ts             LinkedIn URL, name, nav items (edit this)
  workbench.ts              Content for the 6 work-area cards
  caseStudies.ts             Content for the 4 case studies
```

### Light / dark rhythm

| Section | Surface |
|---|---|
| Hero | Warm ivory |
| Who I Am + What I Work On | Warm ivory |
| How AI Fits Into My Work | Deep charcoal |
| Selected Work + What I Actually Build | Warm ivory |
| Proof (2 days → 20 min) | Deep charcoal |
| Case Studies | Warm ivory |
| Philosophy + CTA | Deep charcoal |

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

(Create the empty repo on GitHub first at github.com/new — don't initialise
it with a README so the push above doesn't conflict.)

### 2. Deploy on Vercel

1. Go to vercel.com → **Add New… → Project**.
2. Import the GitHub repository you just pushed.
3. Framework Preset: Vercel auto-detects **Next.js** — leave defaults as-is.
4. No environment variables are required.
5. Click **Deploy** — you'll get a live URL like
   `https://<project-name>.vercel.app`.

### 3. Add it to LinkedIn

LinkedIn profile → **Add profile section → Featured → Add a link** → paste
your Vercel URL.

## Notes

- No backend or environment variables are required.
- Fonts (Fraunces, Inter, IBM Plex Mono) are loaded via `next/font/google`
  at build time — an internet connection is needed the first time you run
  `npm run build` or `npm run dev` so the fonts can be fetched and
  self-hosted by Next.js.
- The "2 days → 20 minutes" figure is the one real example provided,
  phrased throughout as "selected complex Excel workflows" / "in selected
  cases," not as a universal claim. No other statistics are invented.
- "AI doesn't replace the person doing the work..." appears exactly once,
  in the closing Philosophy section.
- Reduced-motion preferences are respected (`prefers-reduced-motion`).
- Keyboard focus states are visible throughout (`:focus-visible`).
