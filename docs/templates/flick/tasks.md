# Flick (Colorlib Error 404 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-flick`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V15" — free **animated canvas**
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-15/).
- **Official description:** "With this responsive and free page not found
  template, you can inform your users about the error conveniently. The free
  site canvas features a neat animation, homepage button and social media
  icons, so you lower the chance of losing the visitor."
- **Layout observed from the description/preview:** responsive error page whose
  canvas carries a neat animation; a "404" display, a "page not found" message,
  a homepage button, and social media icons.
- **Recreation name:** Flick (evokes the animated/motion theme). App folder
  `apps/flick`, package `@free-react-templates/flick`.
- **Design approach:** recreate the animated element as an original inline SVG
  illustration (`role="img"` + accessible label) with a CSS keyframe animation
  (e.g. gentle float/pulse via `@keyframes` in `src/index.css`); social icons
  (GitHub, X, LinkedIn) in the error section; repo primary indigo palette;
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-flick/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/flick` (copy `apps/drift`; rename package to
      `@free-react-templates/flick`).
- [ ] TDD: tests first for Navbar, ErrorSection (animated illustration, 404
      content, home button, social links), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
