# Blaze (Colorlib Error 404 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Drift PR awaits review.
> Implementation ships later on `feat/template-blaze`.

## Design notes

- **Original:** ColorLib "Colorlib Error 404 V13" — free **bold** error page
  template, released 2025, license CC BY 3.0
  (source: https://colorlib.com/wp/template/colorlib-error-404-13/).
- **Official description:** "Grab this free bold error page template now and
  enjoy the smooth integration into your website, blog or online store. Along
  with the icons and main notification, you can also add extra text and take
  users back to the front page with the home button."
- **Layout observed from the description/preview:** bold, high-contrast error
  page; a set of decorative icons, a main "404" notification, a "page not
  found" message plus extra supporting text, and a home button.
- **Recreation name:** Blaze (bold and striking — matches the bold-design
  theme). App folder `apps/blaze`, package `@free-react-templates/blaze`.
- **Design approach:** recreate the icon set as original inline SVGs
  (`role="img"` + accessible labels); bold display typography for the "404"
  notification; repo primary indigo palette; dark-mode support via
  `@custom-variant dark`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation on `apps/drift` (simplest existing 404 app) — it already
  has Navbar/ErrorSection/Footer structure to adapt.

## Tasks

- [ ] Write `openspec/specs/template-blaze/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/blaze` (copy `apps/drift`; rename package to
      `@free-react-templates/blaze`).
- [ ] TDD: tests first for Navbar, ErrorSection (icon illustrations, bold 404
      content, extra text, home button), Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
