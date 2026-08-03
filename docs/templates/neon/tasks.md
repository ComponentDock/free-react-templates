# Neon (Colorlib Error 404 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-neon`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V6" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-6/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-6/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-6/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` (bg `#030005`) →
  centered `.notfound` block (max-width 767px, text-center): `.notfound-404`
  (180px tall, z-index -1) with `<h1>404</h1>` (Montserrat 900, 224px, color
  `#030005`, letter-spacing −20px, text-shadow
  `-1px -1px 0 #8400ff, 1px 1px 0 #ff005a`); `<h2>Page not found</h2>`
  (Montserrat 700, 42px, white, uppercase, letter-spacing 13px, text-shadow
  `0 2px 0 #8400ff`); `<a>Homepage</a>` (Montserrat 700, 14px uppercase,
  transparent bg, 2px solid border, `#ff005a`, padding 10px 40px; hover
  `#8400ff`).
- **Design tokens:** dark bg **#030005**, purple **#8400ff** + magenta
  **#ff005a** (offset shadows/button), white; font **Montserrat** via Google
  Fonts; outlined button.
- **Recreation name:** Neon (evokes the offset glow). App folder `apps/neon`,
  package `@free-react-templates/neon`.
- **Design approach:** dark error section; offset-glow "404" recreated with
  Tailwind arbitrary text-shadow utilities (or a `@utility`/CSS class in
  `index.css`); "Homepage" outline button → `/` with magenta→purple hover;
  repo-standard Navbar (dark-mode toggle) and Footer chrome; social icons
  (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-neon/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/neon` (copy `apps/scarlet`; rename package to
      `@free-react-templates/neon`).
- [ ] TDD: tests first for Navbar, ErrorSection (offset-glow 404, heading,
      homepage button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
