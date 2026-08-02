# Nova (Colorlib Error 404 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-nova`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V19" — free **modern responsive**
  error page template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-19/).
- **Official description:** "Thanks to the modern technologies and latest
  trends, this free responsive error page template is here for everyone.
  Regardless of your web project, the page skin will adapt to it without a
  hitch. It also includes social icons and an option to guide your users back
  to the homepage."
- **Layout observed from the description/preview:** responsive centered error
  page with a large "404", a "page not found" message, a homepage button, and
  social media icons; modern adaptive styling.
- **Recreation name:** Nova (evokes modern, bright, adaptive). App folder
  `apps/nova`, package `@free-react-templates/nova`.
- **Design approach:** centered large "404" + "Page not found" + short message
  + "Back to home" button + social icon links (GitHub, X, LinkedIn) in the
  error section; dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure, with social links added to the error
  section (as `apps/pulse` does).

## Tasks

- [ ] Write `openspec/specs/template-nova/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/nova` (copy `apps/drift`; rename package to
      `@free-react-templates/nova`).
- [ ] TDD: tests first for Navbar, ErrorSection (404 content, home button,
      social links), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
