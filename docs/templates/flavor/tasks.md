# Flavor (Colorlib Flavor 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-flavor`.

## Design notes (replication findings)

- **Original:** ColorLib "Flavor 6" — restaurant template
  (source: https://colorlib.com/wp/template/flavor-6/).
- **Demo DOM analyzed:** https://flavor-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/flavor-6/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** warm Italian restaurant
  landing — light neutrals alternating white/gray-50 sections, red
  (#dc2626) primary buttons and accents, Inter + Playfair Display fonts,
  rounded-lg buttons / rounded-xl cards, dark reservation section, dark-mode
  support.
- **Structure (1:1, section order):**
  1. Navbar: Home, Menu, About, Gallery, Contact.
  2. Hero: "Authentic Italian Cuisine" + blurb (…since 1985) + Reserve a
     Table / View Our Menu / Our Story.
  3. Story: "A Family Tradition of Excellence".
  4. Chef's Selections: Burrata $18, Spaghetti alla Carbonara $24, Branzino
     al Forno $38, Tiramisu $12 + "Chef's Pick" + "View Full Menu".
  5. Reviews & Testimonials: "What Our Guests Say" (2+ quote cards with
     name, Yelp, date).
  6. Make a Reservation: form (name, email, date, time, guests, dietary
     notes) + "Request Reservation" + confirmation note.
  7. Gallery: "A Glimpse of La Tavola" (4+ images).
  8. Footer: brand + tagline + phone, Quick Links / Hours / Newsletter,
     Subscribe, copyright.
- **Design tokens extracted from the DOM:**
  - Brand color: **#dc2626** (primary-600; hover #b91c1c) — `--color-primary`
    can reuse the repo indigo OR define a red primary per template; the
    original is red.
  - Neutrals: white/gray-50/100/300/500/700/800/900; dark: gray-950/900.
  - Fonts: **"Inter"** (body) + **"Playfair Display"** (display) via Google
    Fonts.
- **Recreation name:** Flavor (dropped the " 6" suffix, like Creativex 3 →
  Creativex). App folder `apps/flavor`, package
  `@free-react-templates/flavor`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/flavor-<n>/<w>/<h>`); lucide-react icons; Inter +
  Playfair Display via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome; restaurant renamed "Flavor".
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-flavor/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/flavor` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/flavor`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-flavor`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
