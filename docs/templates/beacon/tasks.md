# Beacon (Colorlib Error 404 5) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-beacon`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V5" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-5/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-5/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-5/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  centered `.notfound` block (max-width 520px, left-aligned): `.notfound-404`
  (150×200px, absolute top-left, z-index -1) with a giant watermark
  `<h1>404</h1>` (Poppins 700, 238px, `#e3e3e3`, letter-spacing 7px) behind
  the content; `<h2>` "Oops, The Page you are looking for can't be found!"
  (Poppins 400, 28px, uppercase, `#222`); `.notfound-search` form — white
  input (height 40px, 2px `rgba(21,23,35,0.2)` border, focus `#57a3f8`) +
  solid blue "Search" button (120×40px, `#57a3f8`, white bold); "Go Back"
  link (Poppins 700, blue `#57a3f8`, radius 15px) with a CSS arrow.
- **Design tokens:** brand blue **#57a3f8**, watermark **#e3e3e3**, text
  **#222**, white; font **Poppins** via Google Fonts; square input + solid
  button; light (white) page.
- **Recreation name:** Beacon (evokes the blue guiding light). App folder
  `apps/beacon`, package `@free-react-templates/beacon`.
- **Design approach:** light page; watermark "404" recreated as an oversized
  light-gray heading behind the content (`dark:` variant); search form =
  labeled input + blue button with lucide `Search` icon; "Go Back" → `/` with
  lucide `ArrowLeft`; repo-standard Navbar (dark-mode toggle) and Footer
  chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/scarlet` or `apps/flick` (existing 404 apps
  with Navbar/ErrorSection/Footer/SocialLinks structure to adapt).

## Tasks

- [ ] Write `openspec/specs/template-beacon/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/beacon` (copy `apps/scarlet`; rename package to
      `@free-react-templates/beacon`).
- [ ] TDD: tests first for Navbar, ErrorSection (watermark 404, heading,
      search form, Go Back link), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
