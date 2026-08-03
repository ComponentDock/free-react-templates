# Saasify (Colorlib Saasify) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-saasify`.

## Design notes (replication findings)

- **Original:** ColorLib "Saasify" — SaaS / software product template
  (source: https://colorlib.com/wp/template/saasify/).
- **Demo DOM analyzed:** https://saasify-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/saasify/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** clean SaaS landing —
  light surfaces with violet (#7c3aed) primary accents, Inter font, rounded
  cards, pill buttons, stats strip in hero, dark footer with newsletter,
  full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Features, Pricing, Testimonials, Documentation, Blog, Help
     Center, Contact + "Get Started".
  2. Hero: "Build better products, faster than ever" + Watch demo + stats
     (10k+ users, 99.9% uptime, 50+ integrations, 4.9★).
  3. Features: Workflow Automation, Real-time Collaboration, Advanced
     Analytics, Enterprise Security, API & Integrations, 24/7 Support.
  4. Pricing: Starter, Pro, Enterprise (14-day free trial).
  5. Testimonials: "Loved by teams worldwide".
  6. CTA: "Ready to transform your workflow?" + Contact sales.
  7. Footer: Product / Company / Legal / Stay Updated (Subscribe) + © 2026
     SaaSify.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#7c3aed** (violet-600; scale #8b5cf6, #a78bfa,
    #6d28d9).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #374151, #1f2937, #111827)/
    black.
  - Font: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Saasify (kept — matches ColorLib name). App folder
  `apps/saasify`, package `@free-react-templates/saasify`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/saasify-<n>/<w>/<h>`); lucide-react icons; Inter via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-saasify/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/saasify` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/saasify`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-saasify`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
