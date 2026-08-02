# Forever Always (Colorlib Forever Always) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-forever-always`.

## Design notes (replication findings)

- **Original:** ColorLib "Forever & Always" — wedding website/planner
  template (source: https://colorlib.com/wp/template/forever-always/).
- **Demo DOM analyzed:** https://foreveralways-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/forever-always/` returns
  404 — preview portal loads demos from `<slug>-colorlib.pages.dev`,
  confirmed via `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** elegant wedding planner
  landing — light neutral surfaces with rose (#e11d48) accents, Playfair
  Display + Lora fonts, pill buttons, rounded cards, dark footer with
  newsletter.
- **Structure (1:1, section order):**
  1. Navbar: Services, Portfolio, About, Packages, Testimonials, Blog,
     Gallery, Contact.
  2. Hero: "Your Dream Wedding Begins Here" + CTAs.
  3. Our Services: Full Planning, Day-of Coordination, Design & Decor,
     Venue Selection, Catering & Cake, Entertainment.
  4. Our Portfolio: Sarah & Michael, Emma & James, Olivia & William, Grace
     & Thomas, Isabella & Alexander, Charlotte & Benjamin.
  5. Venue Transformations.
  6. Meet Your Planner.
  7. Wedding Packages: Intimate, Classic, Grand.
  8. What Our Couples Say.
  9. FAQ accordion (5 questions: booking advance, pricing structure,
     destination weddings, involvement, rain plan).
  10. "Let's Create Your Perfect Day" CTA.
  11. Footer: Services / Information / Connect / Stay Inspired (email +
      Subscribe) + copyright.
- **Design tokens extracted from the DOM:**
  - Brand color: **#e11d48** (rose-600; hover/scale #f43f5e, #fb7185,
    #be123c, #881337).
  - Neutrals: white/gray-100/300/500/700/800/900/black.
  - Fonts: **"Playfair Display"** (display) + **"Lora"** (body) via Google
    Fonts.
- **Recreation name:** Forever Always (kept — matches ColorLib name). App
  folder `apps/forever-always`, package
  `@free-react-templates/forever-always`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/forever-always-<n>/<w>/<h>`); lucide-react icons;
  Playfair Display + Lora via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-forever-always/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/forever-always` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/forever-always`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-forever-always`, open PR (source template,
      preview URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
