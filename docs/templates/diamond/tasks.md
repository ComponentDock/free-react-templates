# Diamond (Colorlib Error 404 9) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-diamond`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V9" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-9/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-9/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-9/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 460px, text-center): `.notfound-404`
  (180×180px, centered, margin-bottom 50px) — a `<div>` rotated 45°
  (orange `#ffa200`, 5px dashed black border, radius 5px, inset shadow
  `0 0 0 5px rgba(0,0,0,0.1)`) with the black `<h1>404</h1>` (Cabin 700,
  90px) centered on top; `<h2>Page not found</h2>` (Cabin 700, 33px,
  uppercase, letter-spacing 7px); `<p>` explanatory copy (Cabin 400, 16px,
  black); "home page" gray `#8f8f8f` pill (radius 40px, white text,
  padding 10px 25px; hover `#2c2c2c`).
- **Design tokens:** orange **#ffa200**, black, gray pill **#8f8f8f** (hover
  **#2c2c2c**), white; font **Cabin** via Google Fonts; rotated badge + pill
  button; light page.
- **Recreation name:** Diamond (evokes the rotated badge). App folder
  `apps/diamond`, package `@free-react-templates/diamond`.
- **Design approach:** light page; orange badge recreated as a rotated square
  (`rotate-45` + dashed border) with the "404" overlaid upright
  (`-rotate-45` on the text, or an absolutely positioned counter-rotated
  heading); "home page" pill → `/`; repo-standard Navbar (dark-mode toggle)
  and Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-diamond/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/diamond` (copy `apps/scarlet`; rename package to
      `@free-react-templates/diamond`).
- [ ] TDD: tests first for Navbar, ErrorSection (orange badge + 404, heading,
      paragraph, home page pill), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
