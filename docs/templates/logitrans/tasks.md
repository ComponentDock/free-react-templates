# Logitrans (Colorlib Logitrans) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-logitrans`.

## Design notes (replication findings)

- **Original:** ColorLib "Logitrans" — logistics / freight / shipping
  company template (source: https://colorlib.com/wp/template/logitrans/).
- **Demo DOM analyzed:** https://logitrans-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/logitrans/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** professional logistics
  landing — light surfaces with blue (#3b82f6) primary accents and amber
  (#f59e0b) highlights, Inter font, rounded cards, pill buttons, tracking
  widget in hero, dark footer, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: Services, Why Us, Calculator, Testimonials, Contact +
     1-800-SWIFT-GO + Get a Quote.
  2. Hero: "Ship Anywhere, Anytime" + Explore Services + tracking widget
     (In Transit, est. delivery tomorrow) + trust badges.
  3. Services: Air Freight, Ocean Freight, Ground Transport, Warehousing,
     Customs Brokerage, Express Delivery.
  4. Why Us: On-Time Delivery (98.5%), Global Network (150+ countries),
     Cargo Insurance, 24/7 Support + stats.
  5. Calculator: destination select + Economy (7–10d), Standard (3–5d,
     Most Popular), Express (1–2d), Same Day + Estimated Total.
  6. Testimonials: 3 quotes + certifications (ISO 9001, IATA, C-TPAT, WCA).
  7. CTA: "Ready to Ship?" + Call 1-800-SWIFT-GO.
  8. Contact: Phone / Email / Headquarters / Business Hours + message form.
  9. Footer: Services / Quick Links / Contact + © 2026 SwiftCargo.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#3b82f6** (blue-500; scale #2563eb, #93c5fd).
  - Secondary accent: **#f59e0b** (amber-500).
  - Neutrals: white/gray (#d1d5db, #374151, #1f2937, #111827)/black.
  - Font: **"Inter"** (400–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation name:** Logitrans (kept — matches ColorLib name). App folder
  `apps/logitrans`, package `@free-react-templates/logitrans`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/logitrans-<n>/<w>/<h>`); lucide-react icons; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-logitrans/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/logitrans` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/logitrans`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-logitrans`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
