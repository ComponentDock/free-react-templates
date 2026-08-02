# Wisp (Colorlib Error 404 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-wisp`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V18" — free **sad-emoji** error
  page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-18/).
- **Official description:** "A Bootstrap-based free error page with a home
  button template that displays the message beautifully in combination with a
  sad emoji. When working with this particular tool, you also don't need to
  worry about responsiveness and excellent performance."
- **Layout observed from the description/preview:** centered error page with a
  large "404", the message displayed together with a sad emoji, and a home
  button; responsive Bootstrap-style structure.
- **Recreation name:** Wisp (evokes a soft, delicate, fleeting feel matching
  the gentle sad-emoji tone). App folder `apps/wisp`, package
  `@free-react-templates/wisp`.
- **Design approach:** recreate the sad emoji as an accessible decorative
  element (e.g. an emoji character or original inline SVG with an accessible
  label, `aria-hidden` + `aria-label` handled per repo conventions); centered
  large "404" + "Page not found" + short message + "Back to home" button;
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure, with the emoji added to the error
  section.

## Tasks

- [ ] Write `openspec/specs/template-wisp/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/wisp` (copy `apps/drift`; rename package to
      `@free-react-templates/wisp`).
- [ ] TDD: tests first for Navbar, ErrorSection (sad emoji, 404 content, home
      button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
