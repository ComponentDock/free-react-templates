# Petvet (Colorlib Petvet) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-petvet`.

## Design notes

- **Original:** ColorLib "Petvet" — free pet care/veterinary website template
  (source: https://colorlib.com/wp/template/petvet/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petvet/`
  (HTTP 200) + stylesheet `css/style.css` (HTTP 200, Bootstrap 4 based).
- **Structure observed (1:1, section order):**
  1. Navbar — Home, About, Groomers, Services, Blog, Pricing, Contact us +
     "Free Consultation".
  2. Hero — brand "Petvet Pet Care", h1 "The Kind of Care Your Pets
     Deserve", "Make An Appointment", phone 11-234-5678-9102.
  3. Intro (`bg-light`) — Veterinary Service, Pet Grooming, Pet Setting.
  4. Counters — stat strip.
  5. Services — "We Are Best Agency For Your Pets" + "Make An Appointment".
  6. Groomers (`bg-light`) — "Our Groomers": Lloyd Wilson, Rachel Parker,
     Ian Smith, Alicia Henderson.
  7. Testimonials — "happy Customers Says".
  8. Pricing (`bg-light`) — "Affordable Packages": Basic $49/mos, Personal
     $79/mos, Business $109/mos (5 Dog Walk, 3 Vet Visit, 3 Pet Spa, Free
     Supports + "Get Started").
  9. Blog (`bg-light`) — "Latest Blog Updates"; 3 posts + "Read more".
  10. Footer — "Petvet Pet Care" + blurb, Services / Links / "Have a
      Questions?", bottom bar.
- **Design tokens:** brand pink **#fd4c82** (primary), accent green
  **#91c235**; dark text **#212529**, muted **#6c757d**, light sections
  **#f8f9fa**; font **Roboto** via Google Fonts; filled rounded pink
  buttons.
- **Recreation name:** Petvet (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/petvet`,
  package `@free-react-templates/petvet`.
- **Design approach:** pink brand tokens in `@theme`
  (`--color-brand: #fd4c82`); seeded picsum placeholders
  `https://picsum.photos/seed/petvet-<n>/<w>/<h>`; lucide-react icons
  (Stethoscope, Scissors, PawPrint for intro services); repo-standard Navbar
  (dark-mode toggle) and Footer chrome; social icons (GitHub, X, LinkedIn)
  inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  team/pricing/testimonials/blog/footer).

## Tasks

- [ ] Write `openspec/specs/template-petvet/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/petvet` (copy `apps/sage`; rename package to
      `@free-react-templates/petvet`).
- [ ] TDD: tests first for Navbar, Hero, Intro Services, Counters, Services,
      Groomers, Testimonials, Pricing, Blog, Footer, App composition; run
      red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
