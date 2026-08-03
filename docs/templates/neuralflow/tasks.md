# Neuralflow (Colorlib Neuralflow) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-neuralflow`.

## Design notes (replication findings)

- **Original:** ColorLib "Neuralflow" — AI / machine-learning platform
  template (source: https://colorlib.com/wp/template/neuralflow/).
- **Demo DOM analyzed:** https://neuralflow-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/neuralflow/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** dark, developer-focused
  AI platform landing — violet (#7c3aed) primary accents on dark surfaces,
  Space Grotesk display + Inter body + JetBrains Mono fonts, rounded cards,
  pill buttons, stats strip in hero, dark footer, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: About, Capabilities, How It Works, Use Cases, Pricing,
     Developers, Integrations, Blog, Changelog, Solutions, Contact + "Try
     Free".
  2. Hero: "Build Intelligent Apps with Zero Complexity" + stats (1M+ API
     Calls/Day, 99.99% Uptime, 50ms Latency, 10,000+ Developers).
  3. Capabilities: NLP, Computer Vision, Predictive Analytics, Voice AI,
     Code Generation, Custom Models.
  4. How It Works: Connect Your Data, Train & Fine-tune, Deploy & Scale.
  5. Use Cases: Healthcare, Finance, E-commerce, Manufacturing.
  6. Pricing: Free, Pro, Enterprise.
  7. Developers: SDKs in 8 Languages, OpenAPI Spec, Webhooks & Streaming,
     99.99% Uptime SLA.
  8. Testimonials: "Trusted by AI-first teams".
  9. FAQ (5 questions: free trial, data security, rate limits, custom
     models, enterprise).
  10. CTA: "The Future of AI is Here" + Talk to Sales.
  11. Footer: Product / Resources / Company / Stay Updated (Subscribe) +
      © 2026 NeuralFlow.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#7c3aed** (violet-600; scale #8b5cf6, #a78bfa).
  - Neutrals: white/gray (#d1d5db, #374151, #1f2937, #111827, #030712)/
    black.
  - Fonts: **"Space Grotesk"** + **"Inter"** + **"JetBrains Mono"** via
    Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons.
- **Recreation name:** Neuralflow (kept — matches ColorLib name). App
  folder `apps/neuralflow`, package `@free-react-templates/neuralflow`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/neuralflow-<n>/<w>/<h>`); lucide-react icons; Space
  Grotesk + Inter + JetBrains Mono via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome; FAQ as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-neuralflow/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/neuralflow` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/neuralflow`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-neuralflow`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
