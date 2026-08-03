# Azure (Colorlib Error 404 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-azure`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V20" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-20/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-20/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-20/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 920px, text-center): `.notfound-404`
  (100px tall, absolute top-center, z-index -1) with a giant watermark
  `<h1>404</h1>` (Maven Pro 900, 276px, `#ececec`) behind the content;
  `<h2>We are sorry, Page not found!</h2>` (Maven Pro 900, 46px, uppercase,
  black); `<p>` explanatory copy (Maven Pro 400, 16px, uppercase, black);
  "Back To Homepage" blue `#189cf0` pill (radius 40px, padding 16px 38px,
  white text; hover: white bg + blue border + blue text).
- **Design tokens:** brand blue **#189cf0**, watermark **#ececec**, black
  text, white; font **Maven Pro** via Google Fonts; pill button with hover
  inversion; light (white) page.
- **Recreation name:** Azure (evokes the blue). App folder `apps/azure`,
  package `@free-react-templates/azure`.
- **Design approach:** light page; watermark "404" recreated as an oversized
  light-gray heading behind the content (`dark:` variant for dark mode);
  "Back To Homepage" pill → `/` with blue→white hover inversion;
  repo-standard Navbar (dark-mode toggle) and Footer chrome; social icons
  (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-azure/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/azure` (copy `apps/scarlet`; rename package to
      `@free-react-templates/azure`).
- [ ] TDD: tests first for Navbar, ErrorSection (watermark 404, heading,
      message, homepage pill), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
