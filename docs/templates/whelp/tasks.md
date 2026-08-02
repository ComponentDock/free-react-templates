# Whelp (Colorlib Breed) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Orbit PR awaits review.
> Implementation ships later on `feat/template-whelp`.

## Design notes

- **Original:** ColorLib "Breed" — free **dog breeding** website template,
  plain and simplistic design
  (source: https://colorlib.com/wp/template/breed/).
- **Official description:** "Out of the box, Breed comes as a free dog
  breeding website template. However, due to the ease of use and pliability,
  you can quickly and effortlessly tailor Breed to other breeding needs."
  Features: plain and simplistic web design, great attention to detail, basic
  drop-down menu, different inner pages, and a working contact form.
- **Recreation name:** Whelp (a young dog/puppy — breeding term). App folder
  `apps/whelp`, package `@free-react-templates/whelp`.
- **Single-page scope:** navbar (site name + section links + dark-mode toggle,
  mobile menu on small screens), hero with dog illustration, About with stats,
  Puppies grid (name/description/badge), validated Contact form (zod), minimal
  footer.
- **Design approach:** clean, plain aesthetic (repo primary indigo + neutral
  tones); dog illustrations recreated as original inline SVGs (`role="img"` +
  accessible label); dark-mode support via `@custom-variant dark`; reuse
  `packages/ui` (Button, Badge, Card, cn). The contact form follows Aurora's
  zod pattern (`zod` schema + `z.infer` type, per-field errors, success message
  + clearing) — do NOT add new dependencies.
- Base implementation on `apps/aurora` (full landing page with navbar/mobile
  menu/contact form) — adapt sections, colors, and copy.

## Tasks

- [ ] Write `openspec/specs/template-whelp/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/whelp` (copy `apps/aurora`; rename package to
      `@free-react-templates/whelp`).
- [ ] TDD: tests first for Navbar (desktop + mobile menu + dark mode), Hero,
      About, Puppies, Contact (validation + success), Footer, App composition;
      run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
