# Zephyr (Colorlib Error 404 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-zephyr`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V17" — free **simple** error page
  template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-17/).
- **Official description:** "Simplicity wins every time, and this free 404
  error website template is an excellent example of it. It is a tool that
  sports a completely mobile-friendly structure and a home button, so everyone
  can take action instead of leave."
- **Layout observed from the description/preview:** minimal, simple, centered
  error page with a large "404" display, a short "page not found" message, and
  a home button; fully responsive/mobile-friendly.
- **Recreation name:** Zephyr (evokes the light, simple, airy theme). App
  folder `apps/zephyr`, package `@free-react-templates/zephyr`.
- **Design approach:** keep it simple and clean — centered large "404" + "Page
  not found" + short message + "Back to home" button; no heavy illustration
  (matches the original's simplicity-first philosophy); dark-mode support via
  `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has the exact Navbar/ErrorSection/Footer structure this design needs.

## Tasks

- [ ] Write `openspec/specs/template-zephyr/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/zephyr` (copy `apps/drift`; rename package to
      `@free-react-templates/zephyr`).
- [ ] TDD: tests first for Navbar, ErrorSection (404 content, home button),
      Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
