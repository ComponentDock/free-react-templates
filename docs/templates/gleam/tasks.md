# Gleam (ColorLib Sparkleclean) — Tasks & Design Notes

> Recreation of ColorLib "Sparkleclean"
> (https://colorlib.com/wp/template/sparkleclean/) under the NEW name
> **Gleam** (the shine left behind by a professional clean), per the
> monorepo naming mandate (never reuse the ColorLib source name — the stale
> prep at `openspec/specs/template-sparkleclean/` was deleted, see spec
> NOTE).

## Design notes (replication findings)

- **Original:** ColorLib "Sparkleclean" — professional cleaning services
  landing template (Astro category). Demo's internal brand is
  "SparkleClean Pro"; the recreation brands itself **Gleam**.
- **Demo DOM analyzed:** `https://sparkleclean-colorlib.pages.dev/` (HTTP
  200, ~91 KB HTML + `/_astro/Base.qZrVslZM.css` ~60 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/sparkleclean/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Serenite→Sooth / Saasify→Zenith, confirmed via
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md
  screenshot (`sparkleclean-template.jpg`, HTTP 200) matches the live
  demo: light theme, split hero with a teal "Instant Quote" calculator
  card, teal accents, circular trust icons, big faint stat numbers.
- **Visual design (live render):** clean, modern, light-themed
  professional service site; **teal** brand (`#0d9488`/`#14b8a6`), Inter
  sans typography (300–800), white/gray-50 light sections, teal-900 dark
  hero/CTA accents, gray-950 dark footer, rounded-lg forms with teal
  focus rings, pill primary buttons.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/95 blur, border-b): "SparkleClean Pro" logo +
     About, Services, Pricing, Blog, Contact; "Get Free Quote" pill;
     dark-mode toggle; mobile hamburger.
  2. Hero (split): left — H1 "Professional Cleaning, Guaranteed
     Spotless", blurb (Austin, insured, background-checked,
     eco-friendly), "Get Free Quote" + "Call (555) 867-5309" buttons,
     stats (5000+ Homes Cleaned, 4.9★ Star Rating, 100% Satisfaction,
     200+ 5-Star Reviews). Right — "Instant Quote" calculator card:
     Property Type (House/Apartment/Condo/Office), Home Size slider
     (500–5000, default 1500), Bedrooms stepper (3), Frequency
     (One-Time/Weekly/Bi-Weekly/Monthly), "Estimated Price" ($315
     default), "Book Now".
  3. Trust row: 4 circular icons — Fully Insured ($2M liability),
     Background Checked, Eco-Friendly, Satisfaction Guaranteed
     (re-clean free within 24h).
  4. Stats band: animated counters — Homes Cleaned, Five-Star Reviews,
     Years Experience, Satisfaction Rate (count up on scroll).
  5. Services: "Cleaning Services for Every Need" — 6 cards: Regular,
     Deep, Move-In/Out, Commercial, Post-Construction, Green Cleaning.
  6. Pricing: "Choose Your Clean" — frequency toggle + 4 packages:
     Basic $99, Deep $199 (Most Popular), Move-In/Out $299, Commercial
     (Custom, "Get Quote"); feature lists + "Book ..." buttons.
  7. Before/After: "See the Difference" — 2 comparison sliders
     (Kitchen Deep Clean, Bathroom Restoration) with Before/After
     labels.
  8. Testimonials: "What Our Clients Say" — 5 quote cards (Sarah
     Mitchell, David Chen, Jessica Rodriguez, Amanda Foster, + 1).
  9. CTA band (teal-900): "Ready for a Spotless Space?" — 20% first
     clean discount — "Get Free Quote" + "Call Now".
  10. FAQ: "Frequently Asked Questions" — 5-item accordion (lead time,
      products, standard cleaning scope, insurance/bonding,
      rescheduling).
  11. Contact: "Get in Touch" — form (Full Name, Email, Phone, Service
      Needed, Preferred Date, Message, "Request Cleaning") + Visit Us /
      Call Us / Email Us / Office Hours cards + "Interactive map coming
      soon".
  12. Footer (bg-gray-950): brand blurb; SERVICES / RESOURCES /
      COMPANY / CONTACT US columns; © 2026 + Privacy / Terms / Style
      Guide.
- **Design tokens extracted from the live CSS + DOM (verified
  2026-08-09):**
  - Brand colors: **teal scale** — #0d9488 (600 primary buttons),
    #14b8a6 (500), #2dd4bf (400 text-on-dark), #5eead4 (300), #99f6e4
    (200), #ccfbf1 (100 icon chips), #f0fdfa (50); dark #0f766e (700
    hover), #134e4a (900 dark sections).
  - Neutrals: #030712 (gray-950 footer), #111827 (gray-900), #1f2937
    (gray-800), #374151 (gray-700), #6b7280 (gray-500 muted), #9ca3af
    (gray-400), #d1d5db (gray-300 borders), #e5e7eb (gray-200), #f3f4f6
    (gray-100), #f9fafb (gray-50 light sections).
  - Fonts: **"Inter"** only (weights 300–800) via Google Fonts
    (`family=Inter:wght@300;400;500;600;700;800`).
  - Shapes: pill primary CTAs (rounded-full); cards rounded-xl/2xl;
    inputs rounded-lg, border-gray-300, focus teal ring
    (focus:border-primary-500, focus:ring-primary-500); section padding
    py-16/py-20.
  - Dark mode: `.dark` on root (prevent-flash inline script), toggle in
    navbar, persisted to localStorage.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/gleam-<n>/<w>/<h>`); lucide-react icons
  (Sparkles, ShieldCheck, BadgeCheck, Leaf, Star, Phone, MapPin, Clock,
  Mail, Menu, ChevronDown, ArrowUp, Home, Building2, Sofa, Brush, Ruler,
  Recycle, Quote, Plus, Minus); Inter via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Rename demo brand "SparkleClean"/"SparkleClean Pro" → "Gleam"
  everywhere (logo, hero copy, copyright). Product/service names and copy
  kinds stay the same kind of content; text may be paraphrased. Phone
  number/address may be kept as-is or lightly paraphrased.
- Quote calculator: implement price = base by property type + size +
  bedrooms, multiplied by frequency factor (One-Time 1.0, Weekly 0.75,
  Bi-Weekly 0.85, Monthly 0.9 — pick a simple documented formula; the
  demo shows $315 for House/1500 sq ft/3 BR/One-Time). Keep the
  computation in a pure exported function for easy 100%-coverage tests.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — apps MUST
  import these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: delete is NOT needed — the prep stream already removed
      the stale `openspec/specs/template-sparkleclean/` +
      `docs/templates/sparkleclean/` folders on main.
- [ ] Implementer: copy the simplest existing app → `apps/gleam`
      (package `@free-react-templates/gleam`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: navbar, hero + quote calculator, trust row,
      stats band, services, pricing, before/after, testimonials, CTA
      band, FAQ, contact, footer.
- [ ] Hero: split layout; left = headline, blurb, 2 CTAs, 4 trust
      stats; right = Instant Quote card (select, range slider, stepper,
      frequency toggle, price display, Book Now).
- [ ] Quote calculator: pure price function (exported for tests);
      updates on every input change; aria attributes on slider/stepper.
- [ ] Trust row 4-up (circular icon chips, title, blurb); stats band
      with count-up-on-scroll counters (IntersectionObserver or
      viewport hook).
- [ ] Services: 6 cards (icon chip bg-primary-100 → hover flips to
      bg-primary-600 text-white).
- [ ] Pricing: 4 packages with feature lists; "Most Popular" badge on
      Deep Clean; frequency toggle reflects selection.
- [ ] Before/After: 2 cards with a draggable comparison slider
      (Before/After labels); keep the slider logic simple + testable.
- [ ] Testimonials: 5 quote cards (initials avatar, quote, name, role).
- [ ] CTA band: teal-900 background, 20% first-time offer, 2 buttons.
- [ ] FAQ accordion: 5 items, expand/collapse with chevron rotation,
      aria-expanded.
- [ ] Contact form: labeled inputs (name/email/phone/service/date/
      message), client-side validation, "Request Cleaning" submit; info
      cards 4-up (Visit Us / Call Us / Email Us / Office Hours).
- [ ] Footer: 4 link columns + brand blurb + copyright; landmarks
      banner/main/contentinfo; document title "Gleam — Cleaning
      Services".
- [ ] Chrome: cookie consent banner (Decline/Accept All), back-to-top
      float, skip-to-content link, dark-mode toggle.
- [ ] `scripts/verify-app.sh gleam` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
