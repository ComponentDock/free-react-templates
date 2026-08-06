# Landing Page (Colorlib Landing Page Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-landing`.

## Design notes (replication findings)

- **Original:** ColorLib "Landing Page Wordpress Themes" — landing-page
  website template (source: https://colorlib.com/wp/template/landing-page-wordpress-themes/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/landing-page-wordpress-themes/
  — **UNREACHABLE** (HTTP 404; variants `landing-page-wordpress`,
  `landing-page-themes`, `landing-page` also 404). Per
  `docs/replication.md`, fall back to the screenshot
  (`landing-page-themes.jpg`, HTTP 200) as the sole visual reference.
- **Visual design (from screenshot, programmatic color analysis of
  `landing-page-themes.jpg` 1200×891):** classic marketing landing — top
  nav with logo + menu links, hero with headline + CTA over a light
  background, feature/service cards with icons, an about split, footer
  with link columns; **violet** brand color on white/light-gray.
- **Structure (planned, standard ColorLib landing):**
  1. Navbar: logo "Landing" + Home, Features, About, Contact + dark-mode
     toggle.
  2. Hero: h1 + blurb + CTA button.
  3. Features: heading + 3 cards (icon + title + blurb).
  4. About split: heading + blurb + CTA.
  5. CTA band (optional): call-to-action strip.
  6. Footer: link columns + social (GitHub, X, LinkedIn) + copyright.
- **Design tokens (from screenshot):** light background `#ffffff` /
  `#f4f4f4` / `#fafafa`, **violet** accent — deep `#7020c0` (buttons/CTAs),
  mid `#7c44d6` (primary, avg of sampled violet pixels), light `#8060e0`
  (gradients/accents); white cards.
- **Recreation name:** Landing (distinct from existing names). App folder
  `apps/landing`, package `@free-react-templates/landing`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/landing-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts `<link>` (approximation); violet primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-landing/spec.md` (Gherkin requirements +
      scenarios reflecting the screenshot-based design).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/landing` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/landing`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-landing`, open PR (source template, preview URL
      (unreachable — screenshot fallback), design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
