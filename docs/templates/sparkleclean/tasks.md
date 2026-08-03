# Sparkleclean (Colorlib Sparkleclean) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-sparkleclean`.

## Design notes (replication findings)

- **Original:** ColorLib "Sparkleclean" — professional cleaning services
  landing template (source: https://colorlib.com/wp/template/sparkleclean/).
- **Demo DOM analyzed:** https://sparkleclean-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.qZrVslZM.css` (60KB, minified)
  extracted; `https://preview.colorlib.com/theme/sparkleclean/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** fresh professional cleaning
  landing on a light teal-white gradient hero, **teal** brand color
  (`#0d9488` teal-600 scale), Inter typography, rounded cards, pill buttons,
  alternating gray-50/white sections, teal CTA band, dark-gray (`#111827`)
  footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "SparkleClean" logo + About, Services,
     Pricing, Blog, Contact + "Get Free Quote".
  2. Hero (gradient primary-50 → white): "Professional Cleaning, Guaranteed
     Spotless" + "Get Free Quote" / "Call (555) 867-5309".
  3. Instant quote widget: frequency tabs (One-Time, Weekly, Bi-Weekly,
     Monthly) + "Book Now".
  4. Trust bar: Fully Insured, Background Checked, Eco-Friendly,
     Satisfaction Guaranteed.
  5. Services: "Cleaning Services for Every Need" — 6 cards (Regular, Deep,
     Move-In/Out, Commercial, Post-Construction, Green).
  6. Pricing: "Choose Your Clean" — 4 packages (Basic, Deep, Move-In/Out,
     Commercial) + "Get Quote".
  7. Gallery: "See the Difference".
  8. Testimonials: "What Our Clients Say".
  9. CTA band (gradient primary-600 → 800): "Ready for a Spotless Space?"
     - "Get Free Quote" / "Call Now".
  10. FAQ: "Frequently Asked Questions" — 5 accordions (duration, products,
      inclusions, insurance, reschedule).
  11. Contact: "Get in Touch" + "Request Cleaning" + Visit Us / Call Us /
      Email Us / Office Hours.
  12. Footer (`bg-gray-900`): blurb + Services / Resources / Company +
      copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **teal scale** — #0d9488 primary (dark: #0f766e,
    #115e59; light: #14b8a6, #2dd4bf, #5eead4, #99f6e4, #ccfbf1, #f0fdfa);
    hero gradient primary-50 → white; CTA gradient primary-600 → 800.
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Sparkleclean (kept — matches ColorLib name). App
  folder `apps/sparkleclean`, package `@free-react-templates/sparkleclean`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sparkleclean-<n>/<w>/<h>`); lucide-react icons
  (Sparkles, ShieldCheck, UserCheck, Leaf, ThumbsUp, Home, Brush, Truck,
  Building2, Hammer, Sprout, Phone, Mail, MapPin, Clock, Star, ChevronDown,
  Calculator, CalendarCheck); Inter via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-sparkleclean/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sparkleclean` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/sparkleclean`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-sparkleclean`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
