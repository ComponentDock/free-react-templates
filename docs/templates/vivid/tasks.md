# Vivid (ColorLib "Creativex 3") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-vivid` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/). Listed in
  TEMPLATES.md (Astro section, line 138).
- **Preview URL NOTE:** legacy
  `https://preview.colorlib.com/theme/creativex-3/` returns HTTP 404. Per
  `preview.colorlib.com/assets/js/products.js`, the slug `creativex` maps to
  the NEW preview host `https://creativex-colorlib.pages.dev/` (modern
  Astro + Tailwind rebuild, brand "Pixel Studio"). That is the LIVE
  reference — fetched (`/tmp/creativex3-preview.html`, 58 KB) + stylesheet
  (`/_astro/Base.BjbRLE8f.css`, 41 KB) + screenshot
  (`creativex-template-1770211073725.jpg`, 2400×1892, viewed in browser).
  Screenshot and modern preview agree (fuchsia `#d946ef`, stats row,
  awards strip, "Pixel Studio" branding) — treat the modern preview as
  authoritative; say so in the PR.
- **Visual design:** modern SaaS/agency aesthetic. Soft lavender→peach
  gradient mesh behind a white hero; vibrant hot-pink/magenta `#d946ef`
  dominant accent (logo icon, "Bold Digital" headline span, primary CTA,
  navbar CTA); dark charcoal text; pill-shaped buttons and badge; white
  cards with subtle shadows; awards strip + stats row for social proof.
  Clean, whitespace-heavy, rounded, friendly-premium.
- **Structure (1:1 from the preview DOM):**
  1. Header `header[data-header]` — `fixed top-0 z-50 bg-white/95
shadow-sm backdrop-blur-sm dark:bg-gray-950/95`; `nav` (max-w-7xl,
     px-4 py-4): logo img (h-8; `logo.svg` / `logo-light.svg`), menu Work
     / Services / About / Contact, pill CTA "Start a Project"
     (`rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold
text-white shadow-lg shadow-primary-500/25`), mobile hamburger
     (`lg:hidden`).
  2. Hero `section.relative.overflow-hidden.bg-gray-50.dark:bg-gray-900`:
     glow circles `absolute` (top-left `bg-primary-500`, bottom-right
     `bg-accent-500`, both `h-72 w-72 rounded-full blur-[128px]`, wrapper
     `opacity-30 dark:opacity-20`); centered content (max-w-4xl, py-24
     lg:py-32): badge pill (border-primary-200 bg-primary-50, ping dot,
     text-primary-700) "Award-Winning Creative Agency"; h1 "We Create
     **Bold Digital** Experiences" (`text-4xl sm:text-5xl lg:text-6xl
font-bold tracking-tight`, "Bold Digital" in `.text-gradient`);
     subtitle; CTA row: primary "View Our Work" (arrow icon) + outline
     "Start a Project" (`border-2 border-gray-300 bg-white`); stats row
     `mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-200
pt-12`: 150+ Projects Delivered · 50+ Happy Clients · 12 Team Members
     · 8 Years Experience (values `text-3xl font-bold`); "Scroll"
     indicator with mouse icon.
  3. Awards strip `section.border-y.border-gray-200.bg-white.py-8
dark:bg-gray-950`: Awwwards Site of the Day 2024 · CSS Design Awards
     2024 · FWA of the Month 2023 · Webby Awards Honoree 2023.
  4. Services `section.bg-white.py-20.lg:py-28`: h2 "What We Do" +
     subtitle; 4 cards — Web Design, Mobile Apps, Brand Identity, Digital
     Marketing. Each: svg icon, title, description, 4 feature bullets with
     check icons, "Learn More" link (`text-primary-500 font-semibold` +
     arrow). Bullets: Web Design → Custom Design / Responsive Development
     / CMS Integration / SEO Optimization; Mobile Apps → iOS & Android /
     React Native / UI/UX Design / App Store Launch; Brand Identity → Logo
     Design / Brand Guidelines / Visual Identity / Brand Strategy;
     Digital Marketing → (4 data-driven campaign bullets, paraphrase).
  5. Featured Work `section.bg-gray-50.py-20.lg:py-28`: heading + "View
     All Projects" link; 3 cards `a.group.relative.overflow-hidden
.rounded-2xl.bg-gray-900` — image (object-cover, hover scale-105),
     uppercase category tag `text-primary-400` (Branding / Mobile App /
     Web Design), title, one-line description: Nova Fintech Rebrand ·
     Mindful Wellness App · Urban Eats Platform.
  6. Testimonials `section.bg-gray-50.py-20.lg:py-28`: h2 "What Clients
     Say" + subtitle; 3 `figure` cards: 5 stars `text-yellow-400`, quote,
     avatar `h-12 w-12 rounded-full`, name + role — David Kim (CEO, Nova
     Financial) · Lisa Thompson · Michael Torres.
  7. Footer `footer.border-t.border-gray-200.bg-gray-50`: brand blurb +
     4 social buttons (`rounded-lg bg-gray-200 p-2.5 hover:bg-primary-500
hover:text-white`; X/Twitter, Instagram, LinkedIn, Facebook — inline
     SVG simple-icons, NOT lucide-react brand icons); columns: nav links
     (Work/Services/About/Contact), services links (Web Design / Mobile
     Apps / Brand Identity / Digital Marketing), contact
     (hello@pixelstudio.com · (555) 987-6543 · 456 Creative Ave, Suite
     200, Los Angeles, CA 90028); bottom bar "© <year> Pixel Studio. All
     rights reserved." + Privacy Policy + Terms of Service.
- **Design tokens (extracted from Base.BjbRLE8f.css + DOM):**
  - Brand primary **fuchsia `#d946ef`** (primary-500; 21 usages); shades
    `#f0abfc` (300), `#e879f9` (400), `#c026d3` (600).
  - Gradient accent **orange `#f97316`** (accent-500); `.text-gradient` =
    `linear-gradient(to right, #d946ef, #f97316)` + `background-clip:
text` + transparent color.
  - Font **Inter** 400/500/600/700/800 (Google Fonts `<link>`).
  - Buttons: primary pill `rounded-full bg-primary-500 text-white
font-semibold shadow-lg shadow-primary-500/25 hover:bg-primary-600`;
    secondary `rounded-full border-2 border-gray-300 bg-white text-gray-700
hover:border-gray-400 hover:bg-gray-50`; text link `text-sm
font-semibold text-primary-500 hover:text-primary-600`.
  - Radii: `rounded-full` pills · `rounded-lg` (0.5rem, social buttons) ·
    `rounded-2xl` (project cards).
  - Surfaces: hero/Featured/Testimonials `bg-gray-50`; awards/Services
    `bg-white`; dark `bg-gray-900` / `bg-gray-950`; headings
    `text-gray-900 dark:text-white`; body `text-gray-600 dark:text-gray-400`;
    borders `border-gray-200`; stars `text-yellow-400`.
  - Dark mode: class-based `.dark` on `<html>` (Tailwind
    `@custom-variant dark`), every section has `dark:` variants.
- **Recreation name:** Vivid (NEW name, differs from ColorLib "Creativex
  3"). App folder `apps/vivid`, package `@free-react-templates/vivid`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/vivid-<n>/<w>/<h>`: project cards 800×600, avatars
  100×100); logo → Inter text wordmark; lucide-react (ArrowRight, Menu,
  X, Star, Check, Sparkles, Mail, Phone, MapPin, Mouse) + inline SVG
  simple-icons for X/Instagram/LinkedIn/Facebook; Inter via Google Fonts;
  headline gradient via `bg-clip-text text-transparent bg-gradient-to-r
from-fuchsia-500 to-orange-500`; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-vivid/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/vivid` (copy a section-rich landing app pattern,
      e.g. Chronicle/Rivulet; rename package to
      `@free-react-templates/vivid`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (fixed
      glassy nav, pill CTA, mobile hamburger + menu), Hero (glow circles,
      badge pill, gradient headline, dual CTAs, stats row, scroll
      indicator), AwardsStrip (4 awards), Services (4 icon cards with
      feature bullets + Learn More), FeaturedWork (3 dark project cards +
      View All Projects), Testimonials (3 cards, yellow stars, avatars),
      Footer (blurb + socials + columns + contact + bottom bar), dark
      mode toggle.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh vivid` in
      FAST_MODE).
- [ ] Push `feat/template-vivid`, open PR (source template ColorLib
      "Creativex 3", preview URL
      https://creativex-colorlib.pages.dev/ with the legacy 404 noted,
      design tokens, what differs: name, placeholder images, text logo),
      merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-vivid.surge.sh) + homepage; run
      `npm run readme:status`; push.
