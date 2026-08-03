# Hopehand (Colorlib Hopehand) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-hopehand`.

## Design notes (replication findings)

- **Original:** ColorLib "Hopehand" — nonprofit / charity organization
  template (source: https://colorlib.com/wp/template/hopehand/).
- **Demo DOM analyzed:** https://hopehand-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/hopehand/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** warm, mission-driven
  nonprofit landing — light surfaces with emerald (#059669) primary accents
  and orange (#f97316) secondary accents, Manrope font, rounded cards, pill
  buttons and donation chips, dark footer with newsletter.
- **Structure (1:1, section order):**
  1. Navbar: About, Mission, Programs, Impact, Stories, Get Involved,
     Donate, Blog, Contact + "Donate Now".
  2. Hero: "Change Lives, One Community at a Time" + Donate Now / See Our
     Impact + stats (50,000+ Lives Changed, 120+ Communities, 15 Countries,
     $10M+ Raised).
  3. Building a Better World Together: Education, Healthcare,
     Sustainability.
  4. How We Help: Education for All, Health & Wellness, Economic
     Empowerment, Environmental Action.
  5. Numbers That Matter (impact stats).
  6. Lives Transformed (testimonials).
  7. Join Our Mission: Volunteer, Fundraise, Partner.
  8. FAQ (5 questions: tax-deductible, fund allocation, volunteering,
     recurring donations, international work).
  9. Donate: "Every Dollar Makes a Difference" — $25/$50/$100/$250/Custom
     chips + "100% Tax Deductible" / "Charity Navigator 4-Star".
  10. Footer: Programs / Organization / Support / Stay Updated (Subscribe)
      - © 2026 HopeHand Foundation.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#059669** (emerald-600; scale #10b981, #34d399,
    #047857).
  - Secondary accent: **#f97316** (orange-500).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827)/black.
  - Font: **"Manrope"** (300–800) via Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons and amount chips.
- **Recreation name:** Hopehand (kept — matches ColorLib name). App folder
  `apps/hopehand`, package `@free-react-templates/hopehand`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/hopehand-<n>/<w>/<h>`); lucide-react icons; Manrope
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-hopehand/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hopehand` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/hopehand`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-hopehand`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
