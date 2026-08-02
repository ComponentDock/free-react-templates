# Echo (Colorlib Error 404 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-echo`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V3" — free **bold** error page
  template, published 2021-03-19 (Rok Krivec), license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-3/).
- **Official description:** "Instead of using a boring 404 page, use this
  responsive free bold error page template with a minimal and impactful
  design."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-3/): full-viewport centered
  composition (max-width ~520px); a huge Montserrat 900 "404" (252px) rendered
  as three separate digits with a white slice gap between them
  (`text-shadow: -8px 0 0 #fff`, `letter-spacing: -40px`); an uppercase
  "Oops! Page not found" label (Cabin 700, 16px, letter-spacing 3px) above the
  digits; an uppercase apology "we are sorry, but the page you requested was
  not found" (Cabin 400, 20px) below. The original has **no search bar and no
  button** — the suite-standard "Back to home" button is added (mirrors
  drift's ErrorSection).
- **Recreation name:** Echo (bold, minimal, impactful — the "404" that echoes
  back at you). App folder `apps/echo`, package `@free-react-templates/echo`.
- **Design approach:** centered composition with a huge font-black "404" (three
  digits with a white slice-gap effect, e.g. tight negative tracking + white
  text-shadow gap), uppercase "Oops! Page not found" label with wide letter
  spacing, uppercase apology message, and a suite-standard accent "Back to
  home" button; light canvas + dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the
  typography-driven variant (bold sliced digits, uppercase labels, apology
  message, accent button; no search bar, no illustration).

## Tasks

- [ ] Write `openspec/specs/template-echo/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/echo` (copy `apps/drift`; rename package to
      `@free-react-templates/echo`).
- [ ] TDD: tests first for Navbar, ErrorSection (404 digits, "Oops! Page not
      found" label, apology message, back-to-home button, bold-typography
      styles), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
