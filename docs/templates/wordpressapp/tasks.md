# WordpressApp (Colorlib Wordpress App Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-wordpressapp`.

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress App Themes" — app WordPress theme
  (source: https://colorlib.com/wp/template/wordpress-app-themes/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/wordpress-app-themes/
  — **UNREACHABLE** (HTTP 404). Per `docs/replication.md`, fall back to the
  screenshot (`app-wordpress-themes.jpg`) as the sole visual reference.
- **Visual design (from screenshot):** classic marketing/app landing — top
  nav with logo + menu links, hero with headline + CTA over a light
  background, feature/service cards with icons, app showcase split, dark
  footer with link columns; blue accent color.
- **Structure (planned, standard ColorLib app landing):**
  1. Navbar: logo "WordpressApp" + Home, Features, About, Contact +
     dark-mode toggle.
  2. Hero: h1 + blurb + CTA button.
  3. Features: heading + 3+ cards (icon + title + blurb).
  4. App split: heading + blurb + CTA.
  5. CTA band (optional): call-to-action strip.
  6. Footer: link columns + social (GitHub, X, LinkedIn) + copyright.
- **Design tokens (from screenshot):** light background, **blue** accent
  (approximated as repo primary indigo `#4f46e5` unless a specific brand
  color is visible); white cards; dark footer.
- **Recreation name:** WordpressApp (distinct from existing names). App
  folder `apps/wordpressapp`, package `@free-react-templates/wordpressapp`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/wordpressapp-<n>/<w>/<h>`); lucide-react icons;
  system font stack; blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-wordpressapp/spec.md` (Gherkin
      requirements + scenarios reflecting the screenshot-based design).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/wordpressapp` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/wordpressapp`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-wordpressapp`, open PR (source template, preview
      URL (unreachable — screenshot fallback), design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
