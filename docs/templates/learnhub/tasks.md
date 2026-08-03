# Learnhub (Colorlib Learnhub) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-learnhub`.

## Design notes (replication findings)

- **Original:** ColorLib "Learnhub" — e-learning / online courses platform
  template (source: https://colorlib.com/wp/template/learnhub/).
- **Demo DOM analyzed:** https://learnhub-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/learnhub/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** modern e-learning
  platform landing — light surfaces with indigo (#6366f1) primary accents,
  Plus Jakarta Sans display + Inter body fonts, rounded cards, pill
  buttons/badges, gradient hero, dark footer, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Courses, Categories, Instructors, Pricing, About + Sign In /
     Get Started.
  2. Hero: "Learn Without Limits" + View Pricing + trust badges (4.8
     rating, 30-day guarantee, Lifetime access) + stats (50K+ Students).
  3. Top Categories: Web Development (156), Data Science, UI/UX Design
     (124), Business, Digital Marketing, Mobile Development, Cloud &
     DevOps, Photography.
  4. Most Popular Courses: Web Dev Bootcamp 2032 (BESTSELLER, 55% OFF),
     Machine Learning A-Z, UI/UX Complete Guide, AWS Solutions Architect.
  5. Why Learnify: Learn at Your Pace, Expert Instructors, Hands-on
     Projects, Certificates.
  6. Instructors: Sarah Johnson (Google), Michael Chen (Netflix), Emily
     Rodriguez (Airbnb), David Kim (AWS).
  7. Testimonials: 3 quotes (Stripe, Meta, Figma alumni).
  8. Pricing: Free, Pro, Team (+ billing toggle).
  9. CTA: "Ready to Start Learning?" + Browse Courses.
  10. Footer: Categories / Company / Support + © 2026 Learnify.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#6366f1** (indigo-500; scale #818cf8, #312e81,
    #1e1b4b).
  - Accents: emerald #10b981, amber #fbbf24, red #82181a (BESTSELLER).
  - Neutrals: white/gray/black (#101828).
  - Fonts: **"Plus Jakarta Sans"** + **"Inter"** via Google Fonts.
  - Shapes: rounded-xl/2xl cards, pill buttons/badges.
- **Recreation name:** Learnhub (kept — matches ColorLib name). App folder
  `apps/learnhub`, package `@free-react-templates/learnhub`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/learnhub-<n>/<w>/<h>`); lucide-react icons; Plus
  Jakarta Sans + Inter via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-learnhub/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/learnhub` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/learnhub`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-learnhub`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
