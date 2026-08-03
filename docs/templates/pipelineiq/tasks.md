# Pipelineiq (Colorlib Pipelineiq) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-pipelineiq`.

## Design notes (replication findings)

- **Original:** ColorLib "Pipelineiq" — sales / CRM platform template
  (source: https://colorlib.com/wp/template/pipelineiq/).
- **Demo DOM analyzed:** https://pipelineiq-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/pipelineiq/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** clean sales-CRM landing —
  light surfaces with blue (#2563eb) primary accents, Inter font, rounded
  cards, pill buttons, app-window mock in hero, stats strip, dark footer,
  full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Features, Pricing, Integrations, About, Blog, Contact + "Start
     Free Trial".
  2. Hero: "Close More Deals with AI-Powered CRM" + stats (10K+ Teams,
     50M+ Deals, 99.9% Uptime, 4.9/5).
  3. Features: Pipeline Management, Contact Management, Email Automation,
     Sales Analytics, Team Collaboration, AI Lead Scoring.
  4. Testimonials: "Trusted by Sales Leaders".
  5. Contact: Phone / Email / Address / Office Hours cards.
  6. FAQ (6 questions: setup time, CRM import, integrations, security,
     trial, support).
  7. CTA: "Ready to Close More Deals?" + Book a Demo.
  8. Footer: Product / Company / Support + © 2026 PipelineIQ.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#2563eb** (blue-600; scale #3b82f6, #60a5fa).
  - Neutrals: white/gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827)/black.
  - Font: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Pipelineiq (kept — matches ColorLib name). App
  folder `apps/pipelineiq`, package `@free-react-templates/pipelineiq`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/pipelineiq-<n>/<w>/<h>`); lucide-react icons; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-pipelineiq/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pipelineiq` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/pipelineiq`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-pipelineiq`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
