# Sky (Colorlib Error 404 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-sky`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V2" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-2/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-2/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-2/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` (bg `#f6f6f6`) →
  centered white card (max-width 767px, padding 110px 40px, shadow
  `0 15px 15px -10px rgba(0,0,0,.1)`): 180px-tall `.notfound-404` with
  `<h1>4<span>0</span>4</h1>` (Roboto 700, 165px, uppercase, `#262626`, the
  "0" in blue `#00b7ff`); `<h2>` "the page you requested could not found"
  (Roboto 400, 22px, uppercase, `#151515`); `.notfound-search` pill form
  (input height 50px, 2px `#c5c5c5` border, radius 40px, focus border
  `#00b7ff`) with a 40×40px circular magnifier button (icon `#c5c5c5`,
  hover `#00b7ff`).
- **Design tokens:** brand blue **#00b7ff**, text **#262626**/**#151515**,
  borders/icon **#c5c5c5**, page bg **#f6f6f6**, card **#fff**; font
  **Roboto** via Google Fonts; pill input + circular icon button.
- **Recreation name:** Sky (evokes the bright blue). App folder `apps/sky`,
  package `@free-react-templates/sky`.
- **Design approach:** light-gray page; error card in white with the blue "0"
  (`<span className="text-brand">`); search form = label + pill input +
  lucide `Search` icon button; repo-standard Navbar (dark-mode toggle) and
  Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-sky/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sky` (copy `apps/scarlet`; rename package to
      `@free-react-templates/sky`).
- [ ] TDD: tests first for Navbar, ErrorSection (blue-zero 404, message,
      search form), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
