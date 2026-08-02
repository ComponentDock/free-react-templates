# Haven (Colorlib Animal Shelter) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Orbit PR awaits review.
> Implementation ships later on `feat/template-haven`.

## Design notes

- **Original:** ColorLib "Animal Shelter" — free **animals & pets** website
  template, complete with unique features and sleek web design
  (source: https://colorlib.com/wp/template/animal-shelter/).
- **Official description:** "Animal Shelter is a complete and free animals and
  pets website template with unique features and sleek web design. If you are
  looking for a way to push your pet shelter and bring it to the online space,
  Animal Shelter is the right way of doing it." The template also includes
  pages for animals, volunteers and blog, a drop-down menu, promotional videos
  and a testimonials slider.
- **Recreation name:** Haven (a shelter is a haven for pets). App folder
  `apps/haven`, package `@free-react-templates/haven`.
- **Single-page scope:** navbar (site name + section links + dark-mode toggle,
  mobile menu on small screens), hero with pet illustration, About with stats,
  Adopt section with pet cards (name/description/badge), Testimonials quote
  cards, Volunteers call-to-action, minimal footer.
- **Design approach:** warm, friendly palette (repo primary indigo + amber
  accents); pet illustrations recreated as original inline SVGs
  (`role="img"` + accessible label); dark-mode support via
  `@custom-variant dark`; reuse `packages/ui` (Button, Badge, Card, cn) — do
  NOT duplicate components.
- Base implementation on `apps/aurora` (the existing full landing page) for
  navbar/mobile-menu/contact-free section patterns, and on `apps/drift` for
  dark-mode and footer conventions.

## Tasks

- [ ] Write `openspec/specs/template-haven/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/haven` (copy `apps/aurora`; rename package to
      `@free-react-templates/haven`; drop the contact form or replace with the
      Volunteers CTA per the spec).
- [ ] TDD: tests first for Navbar (desktop + mobile menu + dark mode), Hero,
      About, Adopt, Testimonials, Volunteers, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
