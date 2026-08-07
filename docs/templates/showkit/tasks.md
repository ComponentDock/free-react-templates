# Showkit (Colorlib SuSan) — Tasks & Design Notes

> Prep artifacts originally prepared under `template-susan` on `main`;
> renamed to `template-showkit` when the template was claimed (the
> recreation MUST get a NEW name, never the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "SuSan" — app landing page template with demo
  showcase (source: https://colorlib.com/wp/template/susan/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/susan/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted; live
  preview visually verified in-browser).
- **Visual design:** demo-showcase landing: full-width hero with a
  **purple → pink gradient** (`#a640d0` → `#f8395d`, 150°, ~70% opacity
  over a background image), big uppercase white "SuSan" headline, rotating
  tagline (typed.js in the original — recreated as a static tagline),
  blurb, two white pill buttons ("View Demos" / "Buy SuSan"); then two
  demo-card sections (Home onepage Demos: 2 cards; Blog Page Demos: 4
  cards) with hover-pink captions; dark footer.
- **Structure (1:1, section order):**
  1. Navbar: site name "Showkit" + dark-mode toggle (repo-standard chrome;
     the original has no navbar).
  2. Hero: h1 "Showkit" + tagline "Showkit App Landing Page Template" +
     blurb "A Complete Landing Page and Multipurpose Package" + **View
     Demos** / **Buy Showkit** white pill buttons.
  3. Home onepage Demos: heading + **OnePage - 01**, **OnePage - 02**
     cards (mockup image + caption).
  4. Blog Page Demos: heading + **Blog List - 01/02**, **Blog Details -
     01/02** cards, on light gray `#f7f7f7` background.
  5. Footer: centered copyright line on dark `#161716`.
- **Design tokens extracted from `style.css`:**
  - Gradient: `linear-gradient(150deg, #a640d0, #f8395d)` @ ~70% opacity.
  - Accent pink `#f8395d`; dark text `#191919` / `#4f4f4f` / `#222`.
  - White pill buttons: radius 50px, padding 15px 62px, uppercase 13px
    Montserrat; hover text `#f8395d`.
  - Card caption hover: pink bg + white text + full radius.
  - Fonts: **Montserrat** (headings/body) + **Open Sans** (titles/buttons)
    via Google Fonts `<link>`.
- **Recreation name:** Showkit (NEW name — distinct from the ColorLib
  source "SuSan" and from all existing apps). App folder `apps/showkit`,
  package `@free-react-templates/showkit`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/showkit-<n>/<w>/<h>`); lucide-react icons;
  Montserrat + Open Sans via Google Fonts; gradient + pink tokens in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-showkit/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Rename prep artifacts to `template-showkit` on the claim branch.
- [ ] Create `apps/showkit` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/showkit`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh showkit` + `spec:validate`
      (FAST_MODE; full gate runs in CI on merge + nightly).
- [ ] Push `feat/template-showkit`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main, state D).
