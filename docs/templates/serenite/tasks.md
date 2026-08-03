# Serenite (Colorlib Serenite) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-serenite`.

## Design notes (replication findings)

- **Original:** ColorLib "Serenite" — luxury spa / wellness center template
  (source: https://colorlib.com/wp/template/serenite/).
- **Demo DOM analyzed:** https://serenite-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/serenite/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** elegant luxury spa
  landing — light, airy surfaces with rose (#e11d48) accents, Playfair
  Display display + Lora body fonts, rounded cards, pill buttons, gallery
  section, dark footer with newsletter, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: About, Services, Specialists, Gallery, Packages, Blog, Contact
     - "Book Now".
  2. Hero: "Indulge in Pure Luxury & Serenity" + stats (15+ Years, 50+
     Treatments, 5-Star).
  3. Services: Facials ($85), Massage ($95), Body ($120), Hair ($65), Nails
     ($45), Wellness ($150).
  4. Our Expert Team: Isabella Laurent, Marcus Chen, Sofia Ramirez, Amara
     Johnson.
  5. Gallery: 6 images (treatment room, lounge, products, massage suite,
     ambiance, facial).
  6. Results: before/after transformations.
  7. Signature Packages: Refresher, Indulgence, Ultimate Retreat.
  8. Testimonials: "What Our Clients Say".
  9. FAQ (5 questions: booking advance, prep, health conditions, gift
     cards, groups).
  10. Gift CTA: "Give the Gift of Relaxation" + Book a Visit.
  11. Footer: Services / Visit Us / Connect / Stay Updated (Subscribe) +
      © 2026 Serenite.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#e11d48** (rose-600; scale #f43f5e, #fb7185).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827)/black.
  - Fonts: **"Playfair Display"** (display) + **"Lora"** (body) via Google
    Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Serenite (kept — matches ColorLib name). App folder
  `apps/serenite`, package `@free-react-templates/serenite`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/serenite-<n>/<w>/<h>`); lucide-react icons; Playfair
  Display + Lora via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-serenite/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/serenite` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/serenite`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-serenite`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
