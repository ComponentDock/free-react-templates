# Tender (Colorlib Petvet) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-tender`.

## Design notes (replication findings)

- **Original:** ColorLib "Petvet" — veterinary / pet care services
  (source: https://colorlib.com/wp/template/petvet/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/petvet/
  (HTTP 200, full rendered DOM + `css/style.css` (79KB, Bootstrap-based)
  extracted).
- **Visual design (from DOM + CSS tokens):** veterinary landing with a
  **pink** brand (`#fd4c82`) on a photo hero, **lime green** (`#91c235`)
  secondary accents, white cards, "Make an Appointment" CTA with a phone
  number, a groomers team grid, and a 4-tier pricing row.
- **Structure (1:1, section order):**
  1. Navbar: links Home, About, Groomers, Services, Blog, Pricing, Contact
     us + **Free Consultation** button.
  2. Hero (`hero-wrap`): h1 "The Kind of Care Your Pets Deserve" + blurb +
     **Make An Appointment** button + phone `11-234-5678-9102`.
  3. Intro tiles (`intro`, bg-light): **Veterinary Service, Pet Grooming,
     Pet Setting** — icon, title, blurb, **Read more**.
  4. About/counters (`ftco-counter`): kicker "Welcome to Petvet", h2 "We Are
     Best Agency For Your Pets", blurb + stats — **Qualified Groomer, Over
     20 Years of Experienced, Animal Lover, Best Pet Care**.
  5. Groomers (`ftco-section bg-light`): "Our Groomers" + 4 members —
     **Lloyd Wilson (CEO, Founder), Rachel Parker, Ian Smith, Alicia
     Henderson** — photo, name, role, social icons.
  6. Testimonials (`testimony-section img`): "happy Customers Says" +
     customer quotes.
  7. Pricing (`ftco-section bg-light`): "Affordable Packages" + 4 plans —
     **Basic $49/mos, Personal $79/mos, Business $109/mos, Exclusive
     $109/mos** — features (5 Dog Walk, 3 Vet Visit, 3 Pet Spa, Free
     Supports) + **Get Started**.
  8. Blog (`ftco-no-pt bg-light`): "Latest Blog Updates" + 3 posts
     ("Shelter and Feed Animals that Are in Need" + date/meta + **Read
     more**).
  9. Appointment: "Make An Appointment" + form — First Name, Last Name,
     Phone, Date, Time + services select (Select Your Services: Pet
     Adoption, Pet Grooming, Vaccination, Dog Training, Pet Daycare, Pet
     Sitter, Veterinary Help) + submit.
  10. Footer: brand "Petvet / Pet Care" + blurb, **Services** links (Pet
      Adoption, Pet Grooming, Vaccination, Dog Traning, Pet Daycare, Pet
      Sitter, Veterinary Help), **Links** (Home, About, Services, Groomer,
      Blog, Pricing, Contact), **Have a Questions?** (203 Fake St. Mountain
      View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com), social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#fd4c82`** — links, navbar brand, social hover,
    primary buttons.
  - Secondary **lime green `#91c235`** — `.btn-secondary`, scrolled navbar
    brand.
  - Font: **Roboto** (Google Fonts via `<link>` at implementation).
  - Light section bg `#f8f9fa`; white cards.
- **Recreation name:** Tender (caring/vet-themed, distinct from "Petvet" and
  all existing names). App folder `apps/tender`, package
  `@free-react-templates/tender`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/tender-<n>/<w>/<h>`); lucide-react icons (replaces
  FontAwesome/flaticon); Roboto via Google Fonts; counters as static stats;
  forms prevent default (no backend); pink primary + lime accent in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-tender/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/tender` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/tender`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-tender`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
