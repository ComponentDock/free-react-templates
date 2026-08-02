# Lumen (Colorlib Error 404 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-lumen`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V20" — free **flexible** Bootstrap
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-20/).
- **Official description:** "If you are on the hunt for a flexible free
  Bootstrap error page template, you came to the right place. You can perform
  customization tweaks and improvements or use it as is, the choice is yours.
  One thing's for sure, the outcome will be splendid."
- **Layout observed from the description/preview:** clean, light page; centered
  content block with a large "404" display, a short "page not found" message,
  and a blue "Back to home" button; simple, easy-to-customize responsive
  composition.
- **Recreation name:** Lumen (evokes a clean, bright, flexible canvas). App
  folder `apps/lumen`, package `@free-react-templates/lumen`.
- **Design approach:** centered large "404" + "Page not found" + short message
  + a distinct blue-accent "Back to home" button (accent via the repo primary
  palette); clean light canvas; dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the minimal
  centered layout with the accent button (no search bar, no illustration).

## Tasks

- [ ] Write `openspec/specs/template-lumen/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/lumen` (copy `apps/drift`; rename package to
      `@free-react-templates/lumen`).
- [ ] TDD: tests first for Navbar, ErrorSection (404 content, home button,
      blue accent), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
