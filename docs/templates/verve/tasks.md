# Racks (Colorlib Racks) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-racks`.

## Design notes (replication findings)

- **Original:** ColorLib "Racks" — Free Bootstrap 4 services template
  (source: https://colorlib.com/wp/template/racks/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/racks/
  (HTTP 200, full rendered DOM + `css/style.css` (68KB) extracted).
- **Visual design (from DOM + CSS tokens):** services site with a **cyan**
  brand (`#78d5ef`) + **pink** accent (`#ee76ad`), Work Sans font, a
  text-centered hero, 4 service cards, a CTA band, a works grid, and
  testimonials.
- **Structure (1:1, section order):**
  1. Navbar: logo "Racks" + Home, About, Solution, Portfolio, Blog,
     Contact.
  2. Hero: h1 "I love to" + blurb + **Watch Video**.
  3. Services: "Our Services — Racks provides a fully featured text
     services platform!" + 4 cards — **Unlimited Features, Multiple
     Functions, Advanced Visualizations, Community & Supports** (icon +
     title + blurb).
  4. CTA: "Turn every channel into a revenue channel and drive business
     growth" + **View more details**.
  5. Works: "Recent Works" + **Illustration, Application, Web Design**
     project cards.
  6. Testimonials: "Customer Says — Our satisfied customer says" + quote +
     **Dennis Green — Marketing Manager / Interface Designer**.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **cyan `#78d5ef`**; **pink `#ee76ad`** accent.
  - Dark `#404044`, `#212529`; muted `#6c757d`.
  - Font: **"Work Sans"** (Google Fonts `<link>`).
  - Cyan buttons with white text.
- **Recreation name:** Racks (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/racks`, package
  `@free-react-templates/racks`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/racks-<n>/<w>/<h>`); lucide-react icons; Work Sans
  via Google Fonts; video button as styled play button; cyan primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-racks/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/racks` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/racks`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-racks`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
