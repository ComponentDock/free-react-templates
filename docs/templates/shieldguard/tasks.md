# Shieldguard (Colorlib Shieldguard) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-shieldguard`.

## Design notes (replication findings)

- **Original:** ColorLib "Shieldguard" — insurance company landing template
  (source: https://colorlib.com/wp/template/shieldguard/).
- **Demo DOM analyzed:** https://shieldguard-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.BZ-9KC9t.css` (63KB, minified)
  extracted; `https://preview.colorlib.com/theme/shieldguard/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** clean professional insurance
  landing on a light blue-white gradient hero, **blue** brand color
  (`#2563eb` blue-600 scale), Manrope typography, rounded cards, pill
  buttons, alternating gray-50/white sections, dark-gray (`#111827`) footer,
  full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "ShieldGuard Insurance" logo + About,
     Coverage, Why Us, Process, Testimonials, Pricing, Blog, Services,
     Contact + "Get a Quote".
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): "Protection You Can
     Count On" + blurb + "Get Free Quote" / "Call (555) 567-8901".
  3. Stats band: Claims Paid, Active Policies, Claims Approval, Years
     Trusted (animated counters).
  4. Coverage: "Insurance for Every Need" — 6 cards (Auto, Home, Life,
     Health, Business, Umbrella) + "Learn More".
  5. Why Us: "The Smart Choice for Coverage" — 4 cards (Save Up to 35%,
     Claims in 24 Hours, Personal Advisors, Digital First).
  6. Process: "Getting Covered is Easy" — 3 steps (Get a Quote, Choose Your
     Plan, You're Covered).
  7. Savings calculator: "See How Much You Could Save" → "Calculate
     Savings" reveals "Estimated Annual Savings / Up to $540/year".
  8. Testimonials: "What Our Clients Say" — 6 quotes (Jennifer Martinez,
     David Thompson, Patricia Chen, Tom & Lisa Park, Frank Morrison,
     Catherine Bell).
  9. FAQ: "Common Questions" — 6 accordions (coverage, claims, bundling,
     cancellation, premiums, new drivers/homebuyers).
  10. CTA: "Request Your Free Quote" + button.
  11. Footer (`bg-gray-900`): blurb + Coverage / Resources / Company /
      Contact Us + phone/email/hours + "Licensed in All 50 States" +
      copyright; cookie banner (Accept All / Decline).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue scale** — #2563eb primary (dark: #1d4ed8, #1e40af,
    #1e3a8a; light: #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe, #eff6ff);
    hero gradient from primary-50 to white.
  - Neutrals: gray scale — #f9fafb → #111827 (footer bg).
  - Success green accents: #16a34a, #22c55e, #4ade80, #15803d, #bbf7d0,
    #dcfce7, #f0fdf4.
  - Fonts: **"Manrope"** (Manrope, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Shieldguard (kept — matches ColorLib name). App folder
  `apps/shieldguard`, package `@free-react-templates/shieldguard`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/shieldguard-<n>/<w>/<h>`); lucide-react icons (Shield,
  Car, Home, HeartPulse, Briefcase, Umbrella, Phone, Mail, Clock, Star,
  ChevronDown, Calculator, CheckCircle); Manrope via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-shieldguard/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/shieldguard` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/shieldguard`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-shieldguard`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
