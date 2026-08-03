# Slice (Colorlib Error 404 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-slice`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V3" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-3/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-3/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-3/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 520px, text-center): `.notfound-404`
  (240px tall) with `<h3>Oops! Page not found</h3>` (Cabin 700, 16px,
  uppercase, letter-spacing 3px, `#262626`) above a giant
  `<h1><span>4</span><span>0</span><span>4</span></h1>` (Montserrat 900,
  252px, uppercase, `#262626`, letter-spacing −40px, each digit
  `text-shadow: -8px 0 0 #fff`); `<h2>` "we are sorry, but the page you
  requested was not found" (Cabin 400, 20px, uppercase, black).
- **Design tokens:** digits/overline **#262626**, message **#000**, white
  cut-slivers; fonts **Montserrat** (900) + **Cabin** via Google Fonts;
  negative letter-spacing display with per-digit text-shadow; light page.
- **Recreation name:** Slice (evokes the cut-sliver digits). App folder
  `apps/slice`, package `@free-react-templates/slice`.
- **Design approach:** light page; digits rendered as three spans with tight
  negative tracking and a white cut-shadow (Tailwind arbitrary
  `tracking-[-0.16em]` + per-span text-shadow, `dark:` variants); overline +
  message in Cabin; repo-standard Navbar (dark-mode toggle) and Footer chrome;
  social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-slice/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/slice` (copy `apps/scarlet`; rename package to
      `@free-react-templates/slice`).
- [ ] TDD: tests first for Navbar, ErrorSection (overline, tight 404,
      message), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
