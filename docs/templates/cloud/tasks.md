# Cloud (Colorlib Error 404 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-cloud`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V14" — free **minimalist cloud**
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-14/).
- **Official description:** "For all the minimalists out there who like adding
  fun elements, this free cloud error page template is the perfect solution to
  opt for. It keeps things very clean and light, with great adaptation to
  different screen sizes, a home button and social icons."
- **Layout observed from the description/preview:** clean, light, minimalist
  layout; a cloud motif as the fun element, a "404" display, a "page not found"
  message, a home button, and social icons.
- **Recreation name:** Cloud (matches the cloud-motif theme). App folder
  `apps/cloud`, package `@free-react-templates/cloud`.
- **Design approach:** recreate the cloud as an original inline SVG illustration
  (`role="img"` + accessible label); light, airy layout with generous whitespace
  and the repo primary indigo palette; social icons (GitHub, X, LinkedIn) in the
  error section; dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-cloud/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/cloud` (copy `apps/drift`; rename package to
      `@free-react-templates/cloud`).
- [ ] TDD: tests first for Navbar, ErrorSection (cloud illustration, 404
      content, home button, social links), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
