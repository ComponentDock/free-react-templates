# Jewel (Colorlib Error 404 9) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-jewel`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V9" — free error page **with
  CTA** template, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-9/).
- **Official description:** "A convenient, versatile and quick to implement
  free error page with a CTA template that adapts to any website or blog."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-9/): full-viewport centered
  composition (max-width ~460px, Cabin); a 180×180 rotated-square emblem
  (45°, orange fill #ffa200, 5px dashed black border, rounded 5px, inset
  shadow ring) containing a black "404" (Cabin 700, 90px); uppercase
  "Page not found" (Cabin 700, 33px, letter-spacing 7px); a gray message
  (Cabin 400, 16px) — original copy has a typo ("removed had its name
  changed") which the recreation fixes; and a gray pill "HOME PAGE" button
  (bg #8f8f8f, white text, border-radius 40px, uppercase; hover dark #2c2c2c).
  The original CTA href is a "#" placeholder — the recreation links to the
  page root instead.
- **Recreation name:** Jewel (the diamond emblem is a gem). App folder
  `apps/jewel`, package `@free-react-templates/jewel`.
- **Design approach:** centered composition with a rotated-square emblem
  (orange fill + dashed dark border) containing a heavy dark "404", uppercase
  "Page not found" with wide letter spacing, an explanatory message, and a
  suite-standard "Back to home" button styled as a gray pill; light canvas +
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the emblem
  variant (rotated-square badge around the "404"; no search bar).

## Tasks

- [ ] Write `openspec/specs/template-jewel/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/jewel` (copy `apps/drift`; rename package to
      `@free-react-templates/jewel`).
- [ ] TDD: tests first for Navbar, ErrorSection (diamond emblem, "404"
      heading, "Page not found" heading, message, gray pill back-to-home
      button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
