# Umbra (Colorlib Error 404 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-umbra`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V6" — free **dark** error page
  template, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-6/).
- **Official description:** "The best responsive free dark error page template
  that you can quickly and effortlessly integrate into your website or blog."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-6/): full-viewport centered
  composition (max-width ~767px, Montserrat) on a near-black canvas
  (#030005); a giant "404" (Montserrat 900, 224px) colored exactly like the
  canvas with dual neon text-shadows — `-1px -1px 0 #8400ff` (purple) and
  `1px 1px 0 #ff005a` (pink) — creating a cut-out glitch effect
  (letter-spacing -20px); a white uppercase "Page not found" (Montserrat 700,
  42px, letter-spacing 13px, text-shadow `0 2px 0 #8400ff`) overlapping the
  base of the digits; and a pink outlined "HOMEPAGE" link (2px border,
  transparent background, padding 10px 40px; hover turns purple #8400ff). The
  original CTA href is a "#" placeholder — the recreation links to the page
  root instead.
- **Recreation name:** Umbra (the darkest part of a shadow — a dark neon
  error page). App folder `apps/umbra`, package `@free-react-templates/umbra`.
- **Design approach:** near-black canvas by default; giant font-black "404" in
  the canvas color with purple/pink offset shadows (glitch effect); white
  uppercase "Page not found" with wide letter spacing; suite-standard "Back to
  home" button with a pink outline accent. The dark-mode toggle remains the
  suite-standard `.dark` class mechanism (see the Navbar requirement) — the
  near-black canvas is the template's default look.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the dark neon
  glitch variant (no search bar, no illustration).

## Tasks

- [ ] Write `openspec/specs/template-umbra/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/umbra` (copy `apps/drift`; rename package to
      `@free-react-templates/umbra`).
- [ ] TDD: tests first for Navbar, ErrorSection (glitch "404" display,
      "Page not found" heading, pink outlined back-to-home button, dark
      canvas), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
