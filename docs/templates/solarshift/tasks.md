# Solarshift (Colorlib Solarshift) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-solarshift`.

## Design notes (replication findings)

- **Original:** ColorLib "Solarshift" — solar energy / clean power company
  landing template (source: https://colorlib.com/wp/template/solarshift/).
- **Demo DOM analyzed:** https://solarshift-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.DGIjEtFT.css` (59KB, minified)
  extracted; `https://preview.colorlib.com/theme/solarshift/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** clean solar-energy landing on a
  light green-white gradient hero, **green** brand color (`#16a34a`
  green-600 scale), Manrope typography, rounded cards, pill buttons,
  alternating gray-50/white sections, green impact/CTA bands, dark-gray
  (`#111827`) footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "SolarShift" logo + About, Products,
     Services, Residential Solar, Commercial Solar, Battery Storage,
     Pricing, Blog, Contact + "Get Free Quote".
  2. Hero (gradient primary-50 → white): "Power Your Home With Clean
     Energy" + "Get Free Quote" / "Call (555) 763-2748" + "Join 10,000+
     homeowners".
  3. Savings estimator: "Estimate Your Savings" + "Get Free Assessment".
  4. Solutions: "Complete Solar Solutions" — 6 cards (Residential Solar,
     Commercial Solar, Battery Storage, Solar Maintenance, Energy Audit,
     Roof Assessment).
  5. Equipment: "Premium Solar Equipment" — 3 brand cards (SunPower Maxeon
     6, LG NeON H+, Canadian Solar HiKu7).
  6. Impact band (`bg-primary-600`): "Our Environmental Impact" stats.
  7. Payment options: "Flexible Payment Options" — 3 cards (Cash Purchase,
     Solar Lease, Power Purchase Agreement) + "Learn More".
  8. Process: "How It Works" — 4 steps (Free Consultation, Design &
     Permits, Professional Installation, Activation & Monitoring).
  9. Testimonials: "What Our Customers Say".
  10. CTA band (`bg-primary-600`): "Ready to Go Solar?" + "Get Free Quote".
  11. FAQ: "Frequently Asked Questions" — 5 accordions (cost, installation
      time, cloudy days, power outage, maintenance).
  12. Quote form: "Get Your Free Quote" + "Submit Request" + Office Hours.
  13. Footer (`bg-gray-900`): blurb + Solutions / Resources / Company +
      copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **green scale** — #16a34a primary (dark: #15803d,
    #166534; light: #22c55e, #4ade80, #86efac, #bbf7d0, #dcfce7, #f0fdf4);
    impact/CTA bands bg-primary-600; hero gradient primary-50 → white.
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Manrope"** (Manrope, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Solarshift (kept — matches ColorLib name). App folder
  `apps/solarshift`, package `@free-react-templates/solarshift`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/solarshift-<n>/<w>/<h>`); lucide-react icons (Sun,
  Home, Building2, BatteryCharging, Wrench, Gauge, ClipboardCheck, Phone,
  Mail, Clock, Star, ChevronDown, Calculator, Zap, Leaf); Manrope via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-solarshift/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/solarshift` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/solarshift`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-solarshift`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
