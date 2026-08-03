# Petsitting (Colorlib Petsitting) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-petsitting`.

## Design notes

- **Original:** ColorLib "Petsitting" — free pet sitting services website
  template (source: https://colorlib.com/wp/template/petsitting/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/petsitting/`
  (HTTP 200) + stylesheet `css/style.css` (HTTP 200, ~317 KB, Bootstrap 5
  based).
- **Structure observed (1:1, section order):**
  1. Navbar — Home, About, Veterinarian, Services, Gallery, Pricing, Blog,
     Contact + "Get Started".
  2. Hero — h1 "Highest Quality Care For Pets You'll Love", "Learn more" +
     "Get Started".
  3. Intro (`bg-light`) — Dog Walking, Pet Daycare, Pet Grooming.
  4. Why Choose Us — Care Advices, Customer Supports, Emergency Services,
     Veterinary Help.
  5. Counters — stat strip.
  6. FAQ (`bg-light`) — "Frequently Asks Questions"; 4 questions.
  7. Testimonials — "Happy Clients & Feedbacks".
  8. Pricing — "Choose Your Plan"; Monthly/Yearly toggle (Save 20%);
     Starter $29/month (3 Dog Walks per week, 1 Vet Check-up, Basic
     Grooming, Email Support, Pet Spa Access, Emergency), Professional,
     Premium.
  9. Gallery — "Pets Gallery"; breed labels: Persian Cat, Pomeranian,
     Sphynx Cat, British Shorthair, Beagle, Pug.
  10. Blog — "Latest news from our blog"; 3 posts.
  11. Appointment — "Free Consultation" booking band.
  12. Footer — brand + blurb, Latest News / Quick Links / "Have a
      Questions?", bottom bar.
- **Design tokens:** brand green **#00bd56** (primary), accent blue
  **#207dff**; dark text **#212529**, light sections **#f8f9fa**; font
  **Montserrat** via Google Fonts; filled rounded green buttons.
- **Recreation name:** Petsitting (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder
  `apps/petsitting`, package `@free-react-templates/petsitting`.
- **Design approach:** green brand tokens in `@theme`
  (`--color-brand: #00bd56`); seeded picsum placeholders
  `https://picsum.photos/seed/petsitting-<n>/<w>/<h>`; lucide-react icons
  (Footprints, Dog, Scissors for intro services); pricing monthly/yearly
  toggle as a stateful control with tests; consultation form with
  client-side validation (zod); repo-standard Navbar (dark-mode toggle) and
  Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  pricing/FAQ/testimonials/gallery/blog/footer).

## Tasks

- [ ] Write `openspec/specs/template-petsitting/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/petsitting` (copy `apps/sage`; rename package to
      `@free-react-templates/petsitting`).
- [ ] TDD: tests first for Navbar, Hero, Intro Services, Why Choose Us,
      Counters, FAQ, Testimonials, Pricing (+ billing toggle), Gallery, Blog,
      Consultation form, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
