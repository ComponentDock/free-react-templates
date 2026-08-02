# Rover (Colorlib Doglife) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-rover`.

## Design notes (replication findings)

- **Original:** ColorLib "DogLife" — free **dog care / pet care** website
  template
  (source: https://colorlib.com/wp/template/doglife/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/doglife/
  (HTTP 200, full rendered DOM + `css/style.css` fetched).
- **Structure (1:1, section order):**
  1. Navbar (absolute over hero): logo "DogLife"; links Home, About, Doctor,
     Pricing, Blog, Services, Contact.
  2. Hero (`site-blocks-cover bg-light` + dog image): h1 "We Love Dogs" +
     subtext + **"Get In Touch"** button (btn-primary).
  3. Welcome (`#about-section`): h2 "Welcome To Our Website" + blurb + two
     icon tiles **Happy Pets**, **Modern Equipment** + two dog photos.
  4. Trainer (`#trainers-section bg-light`): h2 "Meet Jean Smith — Our Dog
     Veterenarian" + photo + long bio (single featured vet, not a card grid).
  5. Pricing (`#pricing-section`): h2 "Pricing Table" + 3 tiers — **Basic
     $50/year**, **Premium**, **Professional** — bullet features + "Buy Now"
     (btn-primary).
  6. FAQ (`#faq-section`): h2 "Frequently Ask Questions" + 4 accordion
     questions.
  7. Testimonials (`#testimonials-section bg-light`): h2 "Happy Customers" +
     4 quote cards: **Ricky Fisher**, **Ken Davis**, **Mellisa Griffin**,
     **Robert Steward**.
  8. Blog (`#blog-section`): h2 "Dogger Blog" + 4 posts (title + date, e.g.
     "How to make first aid for your dog when in the house — April 17, 2019").
  9. Services (`#services-section`): h2 "Our Services" + 6 services: **Dog
     Checkup**, **Dog Dermatology**, **For Strong Teeth**, **Dog First Aid**,
     **Dog Dryer**, **Expert Veterinarian**.
  10. Contact (`#contact-section bg-light`): h2 "Contact Form" — first name,
      last name, email, subject, message textarea + "Send Message" submit
      (btn-dark); "Contact Us" info: Address "Melbourne St, South Birbane
      4101 Australia", Phone "+(000) 123 4567 89", Email
      "info@yourdomain.com".
  11. Footer (`site-footer`, dark): About Us blurb + Quick Links (About Us,
      Trainers, Services, Testimonials, Contact Us) + Follow Us + "Subscribe
      Newsletter" form + copyright.
  - **No gallery section** (unlike Dogger).
- **Design tokens extracted from `css/style.css`:**
  - Primary **deep red `#9c2c2c`** — buttons, active states, accents.
  - Hero: black h1 (uppercase, 900), gray `#999999` subtext, light `#f8f9fa`
    bg; footer `#333333` (like Dogger family).
  - Fonts: **Open Sans** (headings + body) + **Vollkorn** serif accents via
    Google Fonts `<link>`.
  - Buttons: 43px tall, 4px radius, .8rem text, 8px 20px padding.
- **Recreation name:** Rover (classic dog name, distinct from "DogLife" and
  all existing names). App folder `apps/rover`, package
  `@free-react-templates/rover`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/rover-<n>/<w>/<h>`); lucide-react icons for
  features/services; inline SVG brand icons for footer socials; red primary
  in `@theme`; forms prevent default (no backend); FAQ accordion with
  accessible buttons; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-rover/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/rover` (copy the section-rich landing app pattern — Aurora;
      rename package to `@free-react-templates/rover`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-rover`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
