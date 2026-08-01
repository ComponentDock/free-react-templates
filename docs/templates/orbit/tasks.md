# Orbit (Colorlib Error 404 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-orbit`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 10" — free **space-themed** error
  page template, Bootstrap-based, light background, clean and creative
  (source: https://colorlib.com/wp/template/colorlib-error-404-10/).
- **Layout observed from the preview:** light page; centered content block
  containing a rocket/planet illustration beside large "404" display glyphs, a
  short "page not found" message, and a link back to the home page; minimal
  footer strip.
- **Recreation name:** Orbit (space theme). App folder `apps/orbit`, package
  `@free-react-templates/orbit`.
- **Design approach:** recreate the space theme with an inline SVG illustration
  (rocket or planet, `role="img"` + accessible label), repo primary indigo
  palette, dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.

## Tasks

- [ ] Write `openspec/specs/template-orbit/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/orbit` (copy `apps/drift` — simplest existing app; rename
      package to `@free-react-templates/orbit`).
- [ ] TDD: tests first for Navbar, ErrorSection (with space illustration),
      Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
