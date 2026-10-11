# Ecohive — tasks / todo outline (prep)

Spec: `openspec/specs/template-ecohive/spec.md`
Design notes: `docs/templates/ecohive/design-notes.md`
Source: ColorLib **Ecohosting** (`ecohosting`) —
https://preview.colorlib.com/theme/ecohosting/

## Setup

- [ ] Copy the simplest existing hosting app to `apps/ecohive`; rename package to
      `@free-react-templates/ecohive`.
- [ ] `public/CNAME` = `ecohive.free.componentdock.com`; `homepage` =
      `https://ecohive.free.componentdock.com`.
- [ ] Load Poppins + Open Sans via `<link>` in `index.html`.
- [ ] Add `@theme` tokens: brand `#2d0a31`, accent `#f067ff`, accent-strong
      `#a838bf`, gradient `#7346d6`/`#a136b8`, eyebrow `#9f78ff`, muted-on-dark
      `#a5a7c5`, surface `#f9f9ff`, ink `#4c1e51`, ink-eyebrow `#140c40`.

## Sections (build in this order)

- [ ] Header — transparent sticky, wordmark + 5 nav + Sign Up pill + Sign In.
- [ ] Hero — 2-col plum band; eyebrow, H1, paragraph, gradient CTA, illustration
      placeholder; carousel indicator.
- [ ] Domain search — title/paragraph + pill search bar (globe icon, magenta
      circular submit) + TLD price chips.
- [ ] Features — "Most amazing features" + 6 icon cards, 3-col grid.
- [ ] Pricing — dark band + 3 overlapping white tiers (Shared $2.95, Dedicated
      $89.99, Cloud $14.99) with outline pill buttons.
- [ ] About #1 — "Global server location" (image left / text right), light band.
- [ ] About #2 — "Dedicated support" (text left / image right), light band.
- [ ] FAQ — "Frequently ask questions" accordion (3 items).
- [ ] Testimonial — plum rounded card, quote + initials avatar + name/role.
- [ ] Footer — wordmark, newsletter form, 3 link columns, socials, copyright,
      Component Dock link.

## Tests (TDD, 100% coverage)

- [ ] Write failing tests per section (render + interaction: nav toggle, FAQ
      expand/collapse, search submit, carousel) before implementation.
- [ ] `scripts/verify-app.sh ecohive` green (typecheck + lint + 100% coverage +
      build).

## Finish

- [ ] No ColorLib reference in any app file.
- [ ] Footer links https://www.componentdock.com/.
- [ ] Conventional commit + PR; mark `[x]` in TEMPLATES.md with surge URL only
      after the implementer merges (this prep stream does NOT touch markers).
