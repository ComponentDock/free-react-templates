# Scarlet (Colorlib Error 404 16) — Tasks & Design Notes

> Spec + design notes for the Scarlet recreation (Colorlib Error 404 16).
> Implementation ships on `feat/template-scarlet`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V16" — free error page template
  (source: https://colorlib.com/wp/template/colorlib-error-404-16/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-16/`
  (HTTP 200) + stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-16/` and variants)
  returns 404 — the ColorLib template page's "Preview" target hosts the
  rendered page and is the reference.
- **Structure observed (1:1):** full-viewport `#notfound` container →
  `.notfound-bg` (photo `img/bg.jpg`, cover) with `rgba(255, 0, 36, 0.7)`
  overlay → centered `.notfound` block: giant `<h1>404</h1>` (Montserrat 900,
  220px, white, uppercase, letter-spacing 10px), `<h2>` "we are sorry, but the
  page you requested was not found", `.home-btn` "Go Home" (white pill, red
  text), `.contact-btn` "Contact us" (transparent pill, white border), and
  `.notfound-social` (4 circular social icons, white → red-on-white hover).
- **Design tokens:** brand red **#ff0024** (overlay at 70%), white text,
  **Montserrat** (900/700) via Google Fonts, pill buttons (radius 40px),
  circular social icons.
- **Recreation name:** Scarlet (evokes the red-overlay warmth). App folder
  `apps/scarlet`, package `@free-react-templates/scarlet`. NOTE: "ember" is
  already reserved by the prep spec for Colorlib Error 404 4 — do not reuse.
- **Design approach:** photographic background recreated with a seeded picsum
  placeholder (`https://picsum.photos/seed/scarlet-404/1600/900`,
  `role="img"` + accessible label) under a `bg-brand/70` overlay; "Go Home" →
  `/` (white pill), "Contact us" → `mailto:hello@example.com` (outline pill);
  social icons (GitHub, X, LinkedIn) inline SVG; repo-standard Navbar
  (dark-mode toggle) and Footer chrome; dark mode via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/flick` (most recent 404 app) — it already has
  Navbar/ErrorSection/Footer/SocialLinks structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-scarlet/spec.md` (Gherkin requirements +
      scenarios + replication findings).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/scarlet` (copy `apps/flick`; rename package to
      `@free-react-templates/scarlet`).
- [ ] TDD: tests first for Navbar, ErrorSection (photographic background +
      overlay, 404 content, Go Home/Contact us links, social links), Footer,
      App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
