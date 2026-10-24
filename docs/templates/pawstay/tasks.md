# Pawstay (Colorlib Petsitting) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-pawstay`.

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
- **Recreation name:** Pawstay — an original pet-sitting name, distinct from
  the source design name. App folder `apps/pawstay`, package
  `@free-react-templates/pawstay`.
- **Design approach:** green brand tokens in `@theme`
  (`--color-brand: #00bd56`); seeded picsum placeholders
  `https://picsum.photos/seed/pawstay-<n>/<w>/<h>`; lucide-react icons
  (Footprints, Dog, Scissors for intro services); pricing monthly/yearly
  toggle as a stateful control with tests; consultation form with
  client-side validation (zod); repo-standard Navbar (dark-mode toggle) and
  Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/pawly` (multi-section landing architecture with
  navbar/hero/services/why-choose-us/counters/faq/testimonials/pricing/gallery/
  blog/appointment/footer).

## Tasks

- [ ] Write `openspec/specs/template-pawstay/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pawstay` (copy `apps/pawly`; rename package to
      `@free-react-templates/pawstay`).
- [ ] TDD: tests first for Navbar, Hero, Intro Services, Why Choose Us,
      Counters, FAQ, Testimonials, Pricing (+ billing toggle), Gallery, Blog,
      Consultation form, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pawstay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pawstay/public/CNAME` = `pawstay.free.componentdock.com`
  and the package `homepage` = `https://pawstay.free.componentdock.com`.
