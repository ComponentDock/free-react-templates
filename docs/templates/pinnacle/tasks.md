# Pinnacle (ColorLib Sparsh) — Tasks & Design Notes

> Recreation of ColorLib "Sparsh" (https://colorlib.com/wp/template/sparsh/).
> Implemented on `feat/template-pinnacle` (source-name spec/docs renamed:
> template-sparsh → template-pinnacle).

## Design notes (replication findings)

- **Original:** ColorLib "Sparsh" — architecture template
  (source: https://colorlib.com/wp/template/sparsh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sparsh/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** dark navy
  architecture landing with a **yellow** brand (`#f9cc41`), Oswald +
  Roboto fonts, a "Dream Heaven City" hero carousel, an about section with
  a "26 Years of Creativity" yellow badge, an overview band with four
  counters (286+, 942+, 263+, 2000+), an alternating portfolio grid, a
  full-width yellow "Get Estimate" CTA, testimonials, and a dark footer
  with a newsletter form.
- **Structure (1:1, section order):**
  1. Navbar: Pinnacle logo + Home, About, Projects, Service, Contact.
  2. Hero: "Dream Heaven City" carousel (3 slides) + **Details**.
  3. About: "About our Company" + "We've been creating Awesome Since 1992"
     - "26 Years of Creativity" badge + Read More.
  4. Overview: 286+, 942+, 263+, 2000+ counters.
  5. Portfolio: "Latest Completed Projects" + 4 alternating cards + Load More.
  6. CTA: **Get to Know Project Estimate?** + **Get Estimate** (yellow band).
  7. Testimonials: "What People Say About Us" + Falcon Astle cards.
  8. Footer: Top Products / Quick Links / Features / Resources + Newsletter
     - socials + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents); dark navy `#262533`.
  - Light backgrounds `#f9f9ff`; muted text `#8f8f8f`.
  - Fonts: **"Oswald"** (Google Fonts `<link>`, display) + **"Roboto"**
    (body).
  - Overview cards: `rgba(255,255,255,0.1)` translucent white, hover →
    yellow fill; bordered Details/Read More links (white/yellow border
    lines); `.tips-bg` yellow CTA band with dark "Get Estimate" button.
- **Recreation name:** Pinnacle (NEW name — differs from ColorLib source
  "Sparsh"). App folder `apps/pinnacle`, package
  `@free-react-templates/pinnacle`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/pinnacle-<n>/<w>/<h>`); lucide-react icons; inline
  SVG brand icons (Facebook/X/Instagram/LinkedIn); Oswald + Roboto via
  Google Fonts; yellow primary in `@theme`; repo-standard Navbar
  (dark-mode toggle, starts dark to match the original design) + Footer
  chrome with newsletter form.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-pinnacle/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Scaffold `apps/pinnacle` (copy of the chisel app; rename workspace
      package to `@free-react-templates/pinnacle`; `npm install` at root).
- [x] Tests first (App, Navbar, Hero, About, Overview, Portfolio, Estimate,
      Testimonials, Footer) — 100% coverage.
- [x] Implement sections (Navbar, Hero carousel, About, Overview, Portfolio
      with Load More, Estimate, Testimonials, Footer with newsletter).
- [x] `bash scripts/verify-app.sh pinnacle` (typecheck + lint + 100%
      coverage tests + build) + `npm run spec:validate`.
- [x] Open PR `feat: Pinnacle — architecture template (ColorLib Sparsh)`
      and merge immediately.
- [ ] Bookkeeping on main: TEMPLATES.md `[~]`→`[x]` (both copies) + surge
      URL, `homepage` set, `npm run readme:status`, commit + push.
