# Mocha (ColorLib Brewhouse) — Tasks & Design Notes

> Recreation of the ColorLib "Brewhouse" coffee shop template under the new
> name **Mocha** (the original prep named it "Brewhouse", which reuses the
> ColorLib source name — renamed per the mandatory new-name rule).

## Design notes (replication findings)

- **Original:** ColorLib "Brewhouse" — coffee shop template
  (source: https://colorlib.com/wp/template/brewhouse/).
- **Demo DOM analyzed:** https://brewhouse-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brewhouse/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (screenshot + DOM + `_astro/Base.*.css`):** warm artisan
  coffee-shop landing. Cream `#fdf8f6` hero, mocha brown `#846358`
  buttons/accents (hover `#6f574d`), Playfair Display serif headings +
  DM Sans body, pill-shaped buttons, split hero with circular latte-art
  image on a soft amber circle, dark-brown (`primary-900`) Shop + Footer
  sections, amber Popular/Bestseller badges.
- **Structure (1:1, section order):**
  1. Navbar: Menu, Our Story, Process, Locations, Shop, Order Online.
  2. Hero: "Crafted with Passion & Precision".
  3. Menu: "Our Menu" + Espresso Drinks / Pour Overs / Cold Drinks cards.
  4. Story: stats + "From Portland, With Love".
  5. Process: "From Origin to Cup" — Sourcing, Roasting, Cupping, Serving.
  6. Shop: "Take It Home" — House Blend, Single Origin - Ethiopia,
     Decaf Blend.
  7. Testimonials: "What People Are Saying" (Michael Chen, Sarah Williams,
     David Park).
  8. Newsletter: "Join the Club" + Subscribe form.
  9. Footer: Menu/Shop/Company columns + Hours/Contact/Location +
     socials + copyright.
- **Design tokens extracted from the demo stylesheet:**
  - primary-50 `#fdf8f6`, 100 `#f2e8e5`, 200 `#eaddd7`, 300 `#e0cec7`,
    400 `#d2bab0`, 500 `#a18072`, 600 `#846358` (brand), 700 `#6f574d`,
    800 `#5c4a41`, 900 `#4a3b34`, 950 `#362b26`.
  - Fonts: **"Playfair Display"** (display) + **"DM Sans"** (body) via
    Google Fonts `<link>`.
- **Recreation name:** Mocha (NEW — differs from ColorLib "Brewhouse").
  App folder `apps/mocha`, package `@free-react-templates/mocha`, demo
  `https://free-react-templates-mocha.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/mocha-<n>/<w>/<h>`); lucide-react icons + inline
  SVG brand icons; DM Sans + Playfair Display via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-mocha/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/mocha` (copy the Fade landing app pattern; rename
      package to `@free-react-templates/mocha`; `npm install` + lockfile).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh mocha` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [x] Push `feat/template-mocha`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
