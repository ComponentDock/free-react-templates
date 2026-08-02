# Nexus (Colorlib Nexus) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-nexus`.

## Design notes (replication findings)

- **Original:** ColorLib "Nexus" — SaaS software landing page
  (source: https://colorlib.com/wp/template/nexus/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nexus/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted).
- **Visual design (from DOM + CSS tokens):** SaaS landing with a **blue**
  brand (`#3bacf0` + cyan `#62ddff`), Heebo + Roboto fonts, a "Mass People
  Oriented Software" hero, how-it-works tiles, repeated CTA splits,
  screenshots, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: logo "Nexus SaaS" + Home, About, Services, Pages, Pricing,
     Blog, Contact + **Free Trial**.
  2. Hero: h1 "Mass People Oriented Software" + blurb + **Get Started /
     Download**.
  3. How It Works: "How It work for you" + blurb + 3 tiles — **Stunning
     Visuals: Easy to use, Unlimited Colors, Unique Features**.
  4. CTA splits (x4): "We've made a life that will change you" + blurb +
     **Get Started Now**.
  5. Screenshots: "Unique Screens that work perfectly" + image row.
  6. Pricing: plans + purchase buttons.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#3bacf0`**; cyan `#62ddff`; deep blue `#4dabff`;
    yellow `#f8b600` accent.
  - Dark `#222222`; light `#f9f9ff`.
  - Fonts: **"Heebo"** + **"Roboto"** (Google Fonts `<link>`).
  - Blue buttons with white text.
- **Recreation name:** Nexus (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/nexus`, package
  `@free-react-templates/nexus`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/nexus-<n>/<w>/<h>`); lucide-react icons; Heebo +
  Roboto via Google Fonts; blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-nexus/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/nexus` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/nexus`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-nexus`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
