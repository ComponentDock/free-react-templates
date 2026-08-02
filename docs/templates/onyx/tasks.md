# Onyx (Colorlib Error 404 8) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-onyx`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V8" — free **dark** 404 page
  template (Bootstrap), license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-8/).
- **Official description:** "The best free dark 404 page template with a clean
  and creative design that uses Bootstrap Framework as a base."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-8/): full-viewport centered
  composition (max-width ~460px, Josefin Sans) on a dark canvas (#222); a
  giant "404" (Josefin Sans 700, 220px, letter-spacing 10px) colored exactly
  like the canvas with a gray outline text-shadow
  (`2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9`); the middle "0" digit (a span)
  glows amber (`2px 2px 0 #ffab00, -2px -2px 0 #ffab00, 0 0 8px #ff8700`); a
  gray message (Josefin Sans 400, 16px, #c9c9c9) — original copy has a typo
  ("removed had its name changed") which the recreation fixes; and a gray
  outlined "HOME PAGE" link (2px border #c9c9c9, uppercase, transparent bg;
  hover turns amber #ffab00). The original CTA href is a "#" placeholder —
  the recreation links to the page root instead.
- **Recreation name:** Onyx (a black gem — dark canvas with a warm glow). App
  folder `apps/onyx`, package `@free-react-templates/onyx`.
- **Design approach:** dark canvas by default; giant font-black "404" in the
  canvas color with a gray outline shadow; the middle "0" with an amber glow;
  a gray explanatory message; suite-standard "Back to home" button with a gray
  outline accent. The dark-mode toggle remains the suite-standard `.dark`
  class mechanism (see the Navbar requirement) — the dark canvas is the
  template's default look.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the dark
  outlined-display variant (no search bar, no illustration).

## Tasks

- [ ] Write `openspec/specs/template-onyx/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/onyx` (copy `apps/drift`; rename package to
      `@free-react-templates/onyx`).
- [ ] TDD: tests first for Navbar, ErrorSection (outlined "404" with amber "0",
      message, gray outlined back-to-home button, dark canvas), Footer, App
      composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
