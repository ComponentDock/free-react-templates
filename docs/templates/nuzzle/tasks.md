# Nuzzle (Colorlib Anipat) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Orbit PR awaits review.
> Implementation ships later on `feat/template-nuzzle`.

## Design notes

- **Original:** ColorLib "Anipat" — free **pet care** website template, cute,
  adorable, modern and sophisticated
  (source: https://colorlib.com/wp/template/anipat/).
- **Official description:** "Anipat is a cute, adorable, modern, and
  sophisticated pet care website template. You can utilize this impressive and
  eye-catchy design for all sorts of animal and pet services." Features:
  animations, testimonials slider, Google Maps, and a functional contact form.
- **Recreation name:** Nuzzle (affectionate pet-themed word). App folder
  `apps/nuzzle`, package `@free-react-templates/nuzzle`.
- **Single-page scope:** navbar (site name + section links + dark-mode toggle,
  mobile menu on small screens), hero with pet illustration, Services grid,
  About with stats, Testimonials quote cards, validated Contact form (zod),
  minimal footer.
- **Design approach:** friendly palette (repo primary indigo + warm accents);
  pet illustrations recreated as original inline SVGs (`role="img"` +
  accessible label); dark-mode support via `@custom-variant dark`; reuse
  `packages/ui` (Button, Card, cn). The contact form follows Aurora's zod
  pattern (`zod` schema + `z.infer` type, per-field errors, success message +
  clearing) — do NOT add new dependencies.
- Base implementation on `apps/aurora` (full landing page with navbar/mobile
  menu/contact form) — adapt sections, colors, and copy.

## Tasks

- [ ] Write `openspec/specs/template-nuzzle/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/nuzzle` (copy `apps/aurora`; rename package to
      `@free-react-templates/nuzzle`).
- [ ] TDD: tests first for Navbar (desktop + mobile menu + dark mode), Hero,
      Services, About, Testimonials, Contact (validation + success), Footer,
      App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
