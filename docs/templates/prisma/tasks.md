# Prisma (ColorLib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-prisma`.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency portfolio template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/creativex-3/
  returns HTTP 404. Used the canonical live preview from the products.js slug
  map instead: https://creativex-colorlib.pages.dev/ (HTTP 200, full DOM +
  `_astro/Base.BjbRLE8f.css` extracted), cross-checked against the
  TEMPLATES.md screenshot (`creativex-template-1770211073725.jpg`) — designs
  match exactly. The demo brands itself "Pixel Studio"; recreation uses the
  NEW name **Prisma**.
- **Visual design (from DOM + CSS tokens):** modern creative-agency landing —
  white + gray-50 alternating sections, hero with pastel mesh-gradient blobs
  (lavender/pink/peach), **fuchsia `#d946ef` → orange `#f97316`** brand
  gradient, pill buttons, bold Inter-style sans, stats + awards trust rows,
  dark portfolio cards with hover overlays, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: logo mark + wordmark, links Work/Services/About/Contact,
     dark-mode toggle, pill "Start a Project" CTA, mobile menu button.
  2. Hero: badge "Award-Winning Creative Agency", h1 "We Create **Bold
     Digital** Experiences" (gradient span), subhead, primary "View Our
     Work" + outline "Start a Project" buttons, mesh-gradient bg, scroll
     indicator.
  3. Stats strip (border-y): 150+ Projects Delivered, 50+ Happy Clients,
     12 Team Members, 8 Years Experience.
  4. Awards strip: Awwwards Site of the Day (2024), CSS Design Awards
     (2024), FWA of the Month (2023), Webby Awards Honoree (2023).
  5. Services "What We Do": 4 cards — Web Design, Mobile Apps, Brand
     Identity, Digital Marketing (gray-50 bg).
  6. Selected Work: 3 dark cards (gray-900, rounded-2xl, photo + title +
     category, hover gradient overlay + "View Case Study") — e.g. Nova
     Fintech Rebrand, Mindful Wellness App, Urban Eats Platform (white bg).
  7. Testimonials "What Clients Say": quote + name + role cards (gray-50).
  8. Contact "Let's Work Together": 4 chips — Email Us (mailto), Call Us
     (tel), Visit Us (address), Follow Us (social chips) (white bg).
  9. Footer (border-t, gray-50): wordmark + tagline, quick links, social
     chips, bottom bar with copyright.
- **Design tokens extracted from the preview CSS:**
  - Primary **fuchsia `#d946ef`** (primary-500), hover `#c026d3`; accent
    **orange `#f97316`**; gradient text `to right #d946ef → #f97316`.
  - Fuschias: `#fdf4ff/50`, `#fae8ff/100`, `#f5d0fe/200`, `#f0abfc/300`,
    `#e879f9/400`, `#d946ef/500`, `#c026d3/600`, `#a21caf/700`, `#86198f/800`,
    `#701a75/900`; orange-100 `#ffedd5`.
  - Grays (Tailwind scale): 50 `#f9fafb` … 950 `#030712`.
  - Buttons: pill (rounded-full); primary solid fuchsia + white text +
    `shadow-lg shadow-primary-500/25`, hover bg-primary-600; secondary white
    with 1px border. Radii: full / 2xl (work cards) / lg (icon chips).
  - Dark mode: page gray-950, sections gray-900, cards gray-800, toggle in
    navbar (aria-label "Toggle dark mode").
- **Recreation name:** Prisma (NEW — differs from source "Creativex 3").
  App folder `apps/prisma`, package `@free-react-templates/prisma`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/prisma-<n>/<w>/<h>`); lucide-react icons; social
  brand icons as inline SVG; Inter via Google Fonts `<link>`; fuchsia +
  orange in `@theme`; gradient span via `bg-clip-text`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-prisma/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/prisma` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/prisma`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-prisma`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-prisma.surge.sh`) + homepage + `npm run
    readme:status`.
