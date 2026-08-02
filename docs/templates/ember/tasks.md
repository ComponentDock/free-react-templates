# Ember (Colorlib Error 404 4) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-ember`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V4" — free **Bootstrap** error
  page template, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-4/).
- **Official description:** "The best free Bootstrap error page template with
  a CTA button to redirect your users back to the home page or somewhere else."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-4/): full-viewport centered
  composition (max-width ~520px); a giant Montserrat 200 (light) "Oops!"
  display (236px, uppercase, #211b19) with a solid white pill label
  "404 - The Page can't be found" (Montserrat 400, 28px, uppercase) overlapping
  its base; below it an orange (#ff6300) "Go TO Homepage" CTA button
  (Montserrat 700, uppercase, white text; hover inverts to dark #211b19
  background with orange text). The original CTA href is a "#" placeholder —
  the recreation links to the page root instead.
- **Recreation name:** Ember (the orange CTA glows like an ember). App folder
  `apps/ember`, package `@free-react-templates/ember`.
- **Design approach:** centered composition with a giant font-extralight
  (weight 200) "Oops!" display, an uppercase "404 - The Page can't be found"
  label as a solid pill overlapping the base of the display, and a
  suite-standard "Back to home" button with an orange accent; light canvas +
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the
  light-display variant (giant "Oops!" + pill label + orange CTA; no search
  bar, no illustration).

## Tasks

- [ ] Write `openspec/specs/template-ember/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ember` (copy `apps/drift`; rename package to
      `@free-react-templates/ember`).
- [ ] TDD: tests first for Navbar, ErrorSection ("Oops!" display, pill label,
      orange back-to-home button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
