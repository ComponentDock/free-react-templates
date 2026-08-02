# Transcend (Colorlib Transcend) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-transcend`.

## Design notes (replication findings)

- **Original:** ColorLib "Transcend" — creative studio / digital experiences
  landing page (source: https://colorlib.com/wp/template/transcend/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/transcend/
  (HTTP 200, full rendered DOM + `css/main.css` (70KB) extracted).
- **Visual design (from DOM + CSS tokens):** creative studio landing with a
  **magenta/pink** brand (`#cc147f`), Domine (serif) + Metropolis (sans)
  fonts, a "Hello folks, we are Transcend Studio." hero with social links,
  a Who We Are section with a 4-step process (Define, Design, Build,
  Launch), and a What We Do services grid.
- **Structure (1:1, section order):**
  1. Navbar: logo "Transcend Studio" + Home, About, Services, Works,
     Contact.
  2. Hero: h1 "Hello folks, we are Transcend Studio." + blurb + quick
     links (About / Services / Contact) + social (Facebook, X, LinkedIn) +
     Scroll Down.
  3. Who We Are: "Who We Are" + blurb + 4 steps — **Define, Design, Build,
     Launch** (number + title + blurb).
  4. What We Do: "What We Do" + blurb + cards — **Brand Identity,
     Illustration, ...** (icon + title + blurb).
  5. Works: portfolio grid.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **magenta `#cc147f`**.
  - White / dark `#000`; muted `#626262`.
  - Fonts: **"Domine"** (serif) + **"Metropolis"** (sans) — approximate
    with Google Fonts (Domine + e.g. Open Sans) via `<link>`.
  - Pink accents with white text.
- **Recreation name:** Transcend (kept — matches ColorLib name, distinct
  from existing names). App folder `apps/transcend`, package
  `@free-react-templates/transcend`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/transcend-<n>/<w>/<h>`); lucide-react icons; Domine
  via Google Fonts; magenta primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-transcend/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/transcend` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/transcend`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-transcend`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
