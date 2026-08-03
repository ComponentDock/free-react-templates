# Candy (Colorlib Error 404 7) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-candy`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V7" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-7/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-7/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-7/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 710px, text-center): `.notfound-404`
  (200px line-height) with `<h1>404</h1>` (Fredoka One, 168px, pink
  `#ff508e`, uppercase); `<h2>` "Oops, The Page you are looking for can't be
  found!" (Raleway 400, 22px, uppercase, `#222`); `.notfound-search` form —
  input (height 40px, bg `#f8fafb`, 1px `rgba(34,34,34,0.2)` border, radius
  3px) + solid pink "Search" button (120×40px, `#ff508e`, white bold);
  "Return To Homepage" link (Raleway 700, teal `#39b1cb`, radius 15px) with a
  CSS arrow.
- **Design tokens:** pink **#ff508e** + teal **#39b1cb**, text **#222**,
  input bg **#f8fafb**, white; fonts **Fredoka One** (display) + **Raleway**
  (body) via Google Fonts; 3px-radius controls; light page.
- **Recreation name:** Candy (evokes the playful pink). App folder
  `apps/candy`, package `@free-react-templates/candy`.
- **Design approach:** light page; "404" in Fredoka One display font in brand
  pink; search form = labeled input + pink button with lucide `Search` icon;
  "Return To Homepage" → `/` with lucide `ArrowLeft`; repo-standard Navbar
  (dark-mode toggle) and Footer chrome; social icons (GitHub, X, LinkedIn)
  inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-candy/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/candy` (copy `apps/scarlet`; rename package to
      `@free-react-templates/candy`).
- [ ] TDD: tests first for Navbar, ErrorSection (pink 404, heading, search
      form, return link), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
