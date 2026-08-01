# Vista (Colorlib Error 404 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-vista`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V11" — free **image background**
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-11/).
- **Official description:** "Instead of keeping the backdrop dull, this free
  image background error page template knows how to spice things up. It also
  features a transparent box with a search bar, social media icons and a 'back
  to homepage' button."
- **Layout observed from the description/preview:** full-page scenic background
  image; a transparent (glass) content box centered over it containing a large
  "404" display, a short "page not found" message, a search bar, social media
  icons, and a home button.
- **Recreation name:** Vista (a scenic view — matches the image-background
  theme). App folder `apps/vista`, package `@free-react-templates/vista`.
- **Design approach:** recreate the background as an original inline SVG scenic
  illustration (mountains/sky, `role="img"` + accessible label) instead of a
  raster asset; glass content box with backdrop blur (`backdrop-blur` +
  translucent white); repo primary indigo palette; dark-mode support via
  `@custom-variant dark`.
- **Search bar:** `<form role="search">` with a labeled input and a submit
  button; submit is prevented (`preventDefault`) since there is no search
  backend — never navigates away.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-vista/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/vista` (copy `apps/drift`; rename package to
      `@free-react-templates/vista`).
- [ ] TDD: tests first for Navbar, ErrorSection (background illustration, 404
      content, search bar, social links), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
