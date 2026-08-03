# Cove (Colorlib Error 404 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-cove`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V18" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-18/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-18/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-18/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 560px, padding-left 160px): 140×140px
  emoji illustration (`img/emoji.png`) with a light-gray circle behind it
  (`#f2f5f8`, scaled 2.4×, radius 50%); `<h1>404</h1>` (Nunito 700, 65px,
  uppercase, `#151723`); `<h2>Oops! Page Not Be Found</h2>` (Nunito 400,
  21px, uppercase, `#151723`); `<p>` "Sorry but the page you are looking for
  does not exist, have been removed. name changed or is temporarily
  unavailable" (Nunito 400, `#999fa5`); "Back to homepage" pill link (radius
  40px, Nunito 700, blue `#388dbc`).
- **Design tokens:** brand blue **#388dbc**, dark navy **#151723**, gray
  **#999fa5**, light circle **#f2f5f8**; font **Nunito** via Google Fonts;
  circular emoji backdrop + pill link.
- **Recreation name:** Cove (evokes the calm blue tone). App folder
  `apps/cove`, package `@free-react-templates/cove`.
- **Design approach:** light page; emoji recreated as an original inline SVG
  (`role="img"` + accessible label) inside a light-gray circle (dark-mode
  friendly via `dark:` variants); "Back to homepage" pill linking to `/` in
  brand blue; repo-standard Navbar (dark-mode toggle) and Footer chrome;
  social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [x] Write `openspec/specs/template-cove/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/cove` (copy `apps/scarlet`; rename package to
      `@free-react-templates/cove`).
- [x] TDD: tests first for Navbar, ErrorSection (emoji illustration + circle,
      404 content, homepage pill), Footer, App composition; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
