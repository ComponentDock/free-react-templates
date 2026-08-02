# OnePage (Colorlib One Page Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-onepage`.

## Design notes (replication findings)

- **Original:** ColorLib "One Page Wordpress Themes" — one-page website
  template (source: https://colorlib.com/wp/template/one-page-wordpress-themes/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/one-page-wordpress-themes/
  — **UNREACHABLE** (HTTP 404; variants also 404). Per
  `docs/replication.md`, fall back to the screenshot
  (`one-page-wordpress-themes-2.jpg`) as the sole visual reference.
- **Visual design (from screenshot):** classic single-page marketing
  landing — top nav with logo + menu links, full-width hero with headline +
  CTA, feature/service cards with icons, portfolio or split section, dark
  footer with link columns; blue accent color.
- **Structure (planned, standard ColorLib one-page):**
  1. Navbar: logo "OnePage" + Home, Features, About, Contact + dark-mode
     toggle.
  2. Hero: h1 + blurb + CTA button.
  3. Features: heading + 3+ cards (icon + title + blurb).
  4. About split: heading + blurb + CTA.
  5. CTA band (optional): call-to-action strip.
  6. Footer: link columns + social (GitHub, X, LinkedIn) + copyright.
- **Design tokens (from screenshot):** light background, **blue** accent
  (approximated as repo primary indigo `#4f46e5` unless a specific brand
  color is visible); white cards; dark footer.
- **Recreation name:** OnePage (distinct from existing names). App folder
  `apps/onepage`, package `@free-react-templates/onepage`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/onepage-<n>/<w>/<h>`); lucide-react icons; system
  font stack; blue primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-onepage/spec.md` (Gherkin requirements +
      scenarios reflecting the screenshot-based design).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/onepage` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/onepage`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-onepage`, open PR (source template, preview URL
      (unreachable — screenshot fallback), design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
