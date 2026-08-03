# Sage (Dogger) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-sage`.

## Design notes

- **Original:** ColorLib "Dogger" — free dog-care website template
  (source: https://colorlib.com/wp/template/dogger/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dogger/`
  (HTTP 200) + `css/style.css`.
- **Structure observed (1:1):** navbar → hero ("Welcome to Dogger Pet Care",
  sage CTA) → services (Love & Care, Fearsome, Beautiful) → About Us →
  Our Trainers (Jessica White, Valerie Elash, Alicia Jones) → Pricing Table
  (Basic, Premium, Professional) → Frequently Ask Questions → Happy
  Customers (Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward) →
  Photo Gallery → footer.
- **Design tokens:** sage **#a2c0be** (primary), dark teal **#405a58**
  (headings), muted grays, light **#f8f9fa** sections; fonts **Vollkorn**
  (serif display) + **Open Sans** (body) via Google Fonts; filled sage
  rounded buttons.
- **Recreation name:** Sage (evokes the sage-green palette). App folder
  `apps/sage`, package `@free-react-templates/sage`.
- **Design approach:** full multi-section landing page; `@theme` tokens for
  the sage/teal palette; seeded picsum placeholders; lucide-react icons;
  repo-standard Navbar (dark-mode toggle) + Footer; social icons (GitHub,
  X, LinkedIn) inline SVG; reuse packages/ui (Button, ButtonLink, Card,
  Badge, cn).
- Base implementation on `apps/aurora` (multi-section landing app) — adapt
  sections to the Dogger structure above.

## Tasks

- [ ] Write `openspec/specs/template-sage/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sage` (copy `apps/aurora`; rename package to
      `@free-react-templates/sage`).
- [ ] TDD: tests first for Navbar, Hero, Services, About, Trainers, Pricing,
      Faq, Testimonials, Gallery, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
