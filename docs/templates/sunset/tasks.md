# Sunset (Colorlib Error 404 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-sunset`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V19" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-19/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-19/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-19/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 767px, text-center): 220px-tall
  `.notfound-404` with a giant `<h1>404</h1>` (Kanit 200, 186px, uppercase,
  gradient text `linear-gradient(130deg, #ffa34f, #ff6f68)` via
  `background-clip: text`); `<h2>Oops! Nothing was found</h2>` (Kanit 200,
  33px, uppercase, letter-spacing 3px); `<p>` explanatory copy with an inline
  "Return to homepage" link (Kanit 200, coral `#ff6f68`, dashed 1px bottom
  border); `.notfound-social` — four 40×40px circular icons (coral on
  `#efefef` border, hover white on coral).
- **Design tokens:** coral **#ff6f68** + orange **#ffa34f** (gradient), circle
  border **#efefef**; font **Kanit** (200) via Google Fonts; gradient text,
  dashed-underline link, circular social icons; light (white) page.
- **Recreation name:** Sunset (evokes the orange→coral gradient). App folder
  `apps/sunset`, package `@free-react-templates/sunset`.
- **Design approach:** light page; "404" recreated with Tailwind
  `bg-gradient-to-br` + `bg-clip-text text-transparent` (dark-mode friendly);
  "Return to homepage" dashed link → `/`; repo-standard Navbar (dark-mode
  toggle) and Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-sunset/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sunset` (copy `apps/scarlet`; rename package to
      `@free-react-templates/sunset`).
- [ ] TDD: tests first for Navbar, ErrorSection (gradient 404, "Oops! Nothing
      was found", return link, socials), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
