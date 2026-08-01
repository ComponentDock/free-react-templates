# Pulse (Colorlib Error 404 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-pulse`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V16" — free **creative** error
  page template based on the Bootstrap framework, released 2025, license
  CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-16/).
- **Official description:** "A free creative error page template based on the
  popular Bootstrap Framework and latest technologies to guarantee amazing
  performance. You are welcome to perform customization tweaks and tailor it
  to your liking."
- **Layout observed from the description/preview:** responsive creative error
  page with a bold "404" display, a "page not found" message, a homepage
  button, and social media icons, built on Bootstrap-style structure.
- **Recreation name:** Pulse (evokes the creative/energetic theme). App folder
  `apps/pulse`, package `@free-react-templates/pulse`.
- **Design approach:** recreate the creative element as an original decorative
  SVG illustration (`role="img"` + accessible label) using the repo primary
  indigo palette; social icons (GitHub, X, LinkedIn) in the error section;
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-pulse/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pulse` (copy `apps/drift`; rename package to
      `@free-react-templates/pulse`).
- [ ] TDD: tests first for Navbar, ErrorSection (creative illustration, 404
      content, home button, social links), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
