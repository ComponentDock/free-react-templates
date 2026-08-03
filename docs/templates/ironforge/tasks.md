# Ironforge (Colorlib Ironforge) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-ironforge`.

## Design notes (replication findings)

- **Original:** ColorLib "Ironforge" — fitness center / gym website
  template (source: https://colorlib.com/wp/template/ironforge/).
- **Demo DOM analyzed:** https://ironforge-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/ironforge/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** energetic gym landing —
  dark surfaces with orange (#ea580c) primary accents, Space Grotesk
  display + DM Sans body fonts, rounded cards, pill buttons, stats strip in
  hero, dark footer with newsletter, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: About, Programs, Schedule, Trainers, Pricing, Blog, Contact +
     "Join Now".
  2. Hero: "Push Beyond Your Limits" + View Programs / Watch Demo + stats
     (5,000+ Members, 50+ Classes/Week, 15+ Expert Trainers, 24/7 Access).
  3. Training Programs: Strength Training, HIIT, Yoga & Flexibility, Boxing
     & MMA, CrossFit, Personal Training.
  4. This Week's Classes: Monday–Friday timetable.
  5. Expert Trainers: Marcus Johnson, Sarah Chen, Diego Reyes, Emily Park.
  6. Choose Your Plan: Basic, Pro, Elite (7-day free trial).
  7. Real Results, Real People: testimonials.
  8. FAQ (5 questions: freeze membership, personal training, group classes,
     locker rooms, guests).
  9. CTA: "Your Transformation Starts Today" + Talk to a Trainer.
  10. Footer: Programs / Company / Support / Stay Updated (Subscribe) +
      © 2026 IronForge.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#ea580c** (orange-600; scale #f97316, #fb923c, #c2410c).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827)/black.
  - Fonts: **"Space Grotesk"** (display) + **"DM Sans"** (body) via Google
    Fonts.
  - Shapes: rounded-lg/xl/2xl cards, pill buttons.
- **Recreation name:** Ironforge (kept — matches ColorLib name). App folder
  `apps/ironforge`, package `@free-react-templates/ironforge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/ironforge-<n>/<w>/<h>`); lucide-react icons; Space
  Grotesk + DM Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-ironforge/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ironforge` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/ironforge`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-ironforge`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
