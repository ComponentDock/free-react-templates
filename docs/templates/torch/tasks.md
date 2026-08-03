# Torch (Colorlib Error 404 8) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-torch`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V8" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-8/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-8/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-8/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` (bg `#222`) →
  centered `.notfound` block (max-width 460px, text-center): `.notfound-404`
  (158px tall) with `<h1>4<span>0</span>4</h1>` (Josefin Sans 700, 220px,
  letter-spacing 10px, color `#222`, text-shadow
  `2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9`; the "0" span adds amber
  `#ffab00` outline + `0 0 8px #ff8700` glow); `<p>` explanatory copy
  (Josefin Sans 400, 16px, `#c9c9c9`); "home page" link (Josefin Sans 700,
  14px uppercase, transparent bg, 2px `#c9c9c9` border, padding 10px 25px;
  hover amber).
- **Design tokens:** dark bg **#222**, amber **#ffab00** + glow **#ff8700**,
  gray **#c9c9c9**; font **Josefin Sans** via Google Fonts; outlined button.
- **Recreation name:** Torch (evokes the amber glow). App folder
  `apps/torch`, package `@free-react-templates/torch`.
- **Design approach:** dark error section; outlined "404" recreated with
  Tailwind arbitrary text-shadow utilities (or CSS classes in `index.css`)
  with the amber "0"; "home page" outline button → `/` with amber hover;
  repo-standard Navbar (dark-mode toggle) and Footer chrome; social icons
  (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-torch/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/torch` (copy `apps/scarlet`; rename package to
      `@free-react-templates/torch`).
- [ ] TDD: tests first for Navbar, ErrorSection (outlined 404 + amber zero,
      paragraph, home page button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
