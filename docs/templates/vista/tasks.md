# Vista (Colorlib Error 404 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships on `feat/template-vista` (PR #4).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V11" — free **image background**
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-11/).
- **Demo DOM analyzed:** https://colorlib.com/etc/404/colorlib-error-404-11/
  (`preview.colorlib.com/theme/<slug>/` 404s for this slug — canonical demo
  used instead).
- **Structure (1:1):** `#notfound` (100vh) → `.notfound-bg` (full-cover scenic
  photo + `rgba(0,0,0,0.25)` overlay) → centered glass box
  (`rgba(255,255,255,0.7)` + 30px inset ring) with: huge "404" (Passion One,
  220px/146px) → h2 "Oops! Page Not Found" (Muli 26px uppercase) → search form
  (dark `#222225` input + pink `#ff00b4` "Search" button 120×40) → 4 social
  squares (40×40 dark, white icons, hover pink) → "Back To Homepage" uppercase
  text link.
- **Design tokens:**
  - Ink `#222225` — heading, h2, input bg, social squares, home link.
  - Accent `#ff00b4` — search button bg, social hover.
  - Fonts: **Passion One** (display) + **Muli** (body) via Google Fonts.
  - Square corners everywhere; glass box max-width 600px.
- **Recreation name:** Vista (a scenic view — matches the image-background
  theme). App folder `apps/vista`, package `@free-react-templates/vista`.
- **Recreation approach:** background = seeded picsum placeholder
  (`picsum.photos/seed/vista-1/1920/1080`, decorative `alt=""`) + `bg-black/25`
  overlay; brand tokens in `@theme` (`--color-brand`, `--color-accent`,
  `--font-display`, `--font-sans`); social squares use inline SVG brand icons
  (Facebook, X, Pinterest, YouTube — Google+ is defunct); repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- **Search bar:** `<form role="search">` with sr-only labeled input + submit
  button; submit is prevented (`preventDefault`) since there is no search
  backend — never navigates away.
- Reuse `packages/ui` (Button) — do NOT duplicate components.
- Base implementation on `apps/orbit` (the newest 404 app, same
  Navbar/ErrorSection/Footer structure).

## Tasks

- [x] Write `openspec/specs/template-vista/spec.md` (Gherkin requirements +
      scenarios) — prep on main; refined with replication findings on the
      implementation branch.
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/vista` (copy `apps/orbit`; rename package to
      `@free-react-templates/vista`).
- [x] TDD: tests first for Navbar, ErrorSection (background, 404 content,
      search bar, social links), Footer, App composition; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D) + append Surge URL.
- [x] Update README structure + `docs/ai-context.md` app list (on the branch).
