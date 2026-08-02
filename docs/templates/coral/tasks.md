# Coral (Colorlib Error 404 7) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-coral`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V7" — free error page **with
  search bar** template (Bootstrap), license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-7/).
- **Official description:** "The best and simplest-to-use free error page with
  a search bar template that uses Bootstrap Framework for flexibility."
- **Layout observed from the live demo**
  (https://colorlib.com/etc/404/colorlib-error-404-7/): full-viewport centered
  composition (max-width ~710px); a large rounded "404" (Fredoka One, 168px,
  uppercase, pink #ff508e); uppercase heading "Oops, The Page you are looking
  for can't be found!" (Raleway 400, 22px, #222); a search bar — input
  (bg #f8fafb, 1px border, radius 3px) + pink "Search" button (#ff508e, white
  text, radius 3px, 120px); and a teal "Return To Homepage" link
  (#39b1cb, bold, radius 15px, left arrow). The original CTA href is a "#"
  placeholder — the recreation links to the page root instead. Structurally a
  sibling of V5 (same heading copy and search layout) but with pink/teal
  accents and a solid rounded pink "404" instead of V5's gray watermark.
- **Recreation name:** Coral (pink reef tones). App folder `apps/coral`,
  package `@free-react-templates/coral`.
- **Design approach:** centered composition with a large rounded font-black
  "404" in a pink tone, uppercase
  "Oops, The Page you are looking for can't be found!" heading, a search bar
  (labeled input + pink submit button, submits an encoded query), and a
  suite-standard "Back to home" button with a teal accent; light canvas +
  dark-mode support via `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — same
  Navbar/ErrorSection/Footer structure; the ErrorSection is the rounded-display
  + search variant (mirror `apps/dune`'s search-bar scenario for the form
  behavior).

## Tasks

- [ ] Write `openspec/specs/template-coral/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/coral` (copy `apps/drift`; rename package to
      `@free-react-templates/coral`).
- [ ] TDD: tests first for Navbar, ErrorSection (pink "404" display, heading,
      search bar submit, teal back-to-home button), Footer, App composition;
      run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
