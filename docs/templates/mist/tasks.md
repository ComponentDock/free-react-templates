# Mist (Colorlib Error 404 5) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-mist`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V5" — free error page **with
  search bar** template, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-5/).
- **Official description:** "An easy-to-use free error page with a search bar
  template that works fantastically well across all modern devices and
  platforms."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-5/): full-viewport centered
  composition (max-width ~520px, Poppins); a giant light-gray "404"
  (Poppins 700, 238px, #e3e3e3, letter-spacing 7px) placed as a watermark
  behind the content (z-index -1); uppercase heading "Oops, The Page you are
  looking for can't be found!" (Poppins 400, 28px, #222); a search bar — input
  with 2px border (focus border #57a3f8) + blue "Search" button (#57a3f8,
  white text, 120px); and a blue "Go Back" link (bold, border-radius 15px,
  with a left arrow). The original CTA hrefs are "#" placeholders — the
  recreation links to the page root instead.
- **Recreation name:** Mist (the faint gray watermark drifts like mist). App
  folder `apps/mist`, package `@free-react-templates/mist`.
- **Design approach:** centered composition with a giant heavy "404" in a
  light gray tone positioned behind the content (watermark effect), an
  uppercase "Oops, The Page you are looking for can't be found!" heading, a
  search bar (labeled input + blue submit button, submits an encoded query),
  and a suite-standard "Back to home" button with a blue accent; light canvas
  + dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the watermark +
  search variant (mirror `apps/dune`'s search-bar scenario for the form
  behavior).
- Watch the accessible-name whitespace quirk (`docs/ai-context.md`): the h1 is
  the plain string "404" — assert via `{ level: 1 }` + `textContent`.

## Tasks

- [ ] Write `openspec/specs/template-mist/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/mist` (copy `apps/drift`; rename package to
      `@free-react-templates/mist`).
- [ ] TDD: tests first for Navbar, ErrorSection (watermark "404", heading,
      search bar submit, back-to-home button), Footer, App composition; run
      red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
