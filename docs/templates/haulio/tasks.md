# Haulio (ColorLib Swiftmove) — Tasks & Design Notes

> Recreation of ColorLib "Swiftmove"
> (https://colorlib.com/wp/template/swiftmove/) under the NEW name
> **Haulio** (a nod to hauling/moving), per the monorepo naming mandate
> (never reuse the ColorLib source name — the stale prep at
> `openspec/specs/template-swiftmove/` was deleted, see spec NOTE).

## Design notes (replication findings)

- **Original:** ColorLib "Swiftmove" — moving / relocation services
  landing template (Astro category). Demo's internal brand is "SwiftMove";
  the recreation brands itself **Haulio**.
- **Demo DOM analyzed:** `https://swiftmove-colorlib.pages.dev/` (HTTP
  200, ~97 KB HTML + `/_astro/Base.Ce97irTr.css` ~65 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/swiftmove/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Serenite→Sooth / Saasify→Zenith / Sparkleclean→Gleam, confirmed via
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md
  screenshot (`swiftmove-template-1771943964825.jpg`, HTTP 200) matches
  the live demo: light moving-company site, blue primary + orange accent,
  hero with "Get Free Quote" + call CTAs.
- **Visual design (live render):** clean, modern, light-themed moving
  services site; **blue** brand (`#2563eb` family) + **orange** accent
  (`#f97316` family), Outfit sans typography, white/gray-50/primary-50
  light sections, gray-800/gray-900 dark bands (quote CTA + footer),
  rounded-lg blue buttons with hover:bg-primary-700, rounded-lg forms
  with blue focus rings.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur, border-b): "SwiftMove" logo + About,
     Services, How It Works, Areas, Pricing, Testimonials, Quote, Blog,
     Contact; "Free Quote" pill (rounded-full); mobile hamburger.
  2. Hero (light, from-primary-50 → white): H1 "Moving Made Simple &
     Stress-Free", blurb, "Get Free Quote" (primary) + "Call (555)
     890-1234" (outlined, phone icon) buttons.
  3. Services: "Moving Solutions for Every Need" — 6 cards (icon +
     title + blurb): Local Moving, Long Distance, Commercial Moving,
     Packing Services, Storage Solutions, Specialty Items.
  4. How It Works: "Your Move in 4 Easy Steps" — Request a Quote,
     Schedule Your Move, We Handle Everything, Welcome Home.
  5. Areas: "We Move You Anywhere" — Local Moves / Long Distance cards
     (coverage blurb + link).
  6. Pricing: "Transparent, Honest Pricing" — 3 plans: Studio / 1BR,
     2-3 Bedrooms, 4+ Bedrooms (price + features + CTA).
  7. Testimonials: "Trusted by Thousands of Families" — quote cards
     (initials avatar, quote, name/role).
  8. Quote: "Get Your Free Moving Quote" — form (Name, Email, Phone,
     City or ZIP, submit) + "Why Choose SwiftMove?" feature list +
     "Prefer to Call?" card (phone + Business Hours).
  9. FAQ: "Frequently Asked Questions" — accordion (5+ items).
  10. CTA band (dark): "Ready to Make Your Move?" + blurb + CTAs.
  11. Footer (dark): brand + blurb, link columns (About Us, Services,
      Contact Us), contact (info@swiftmove.com → info@haulio.com, (555)
      890-1234), copyright + Privacy Policy / Terms / Style Guide.
  - Extras: skip-to-content link, mobile menu (aria-expanded),
    scroll-reveal animations, back-to-top floating button (fixed
    bottom-right, rounded-full bg-primary-600, shadow-primary-600/25).
- **Design tokens (verified from `Base.Ce97irTr.css` + DOM, 2026-08-09):**
  - Primary blue: 600 `#2563eb` (buttons/links), 500 `#3b82f6`, 400
    `#60a5fa` (on dark), 700 `#1d4ed8` (hover), 800 `#1e40af`, 900
    `#1e3a8a` (dark bands), 100 `#dbeafe` (chips), 50 `#eff6ff` (hero).
  - Accent orange: 500 `#f97316`, 600 `#ea580c`, 900 `#7c2d12`, 50
    `#fff7ed`.
  - Neutrals: gray-950 `#030712` (footer), gray-900 `#111827`, gray-800
    `#1f2937` (dark bands), gray-700 `#374151`, gray-600 `#4b5563`,
    gray-500 `#6b7280` (muted), gray-300 `#d1d5db` (borders), gray-200
    `#e5e7eb`, gray-100 `#f3f4f6`, gray-50 `#f9fafb`.
  - Font: **Outfit** (Google Fonts).
  - Shapes: buttons `rounded-lg` bg-primary-600 hover:bg-primary-700;
    nav CTA pill `rounded-full`; badges `rounded-full`; cards
    `rounded-xl`/`rounded-2xl`; inputs `rounded-lg` border-gray-300 +
    blue focus ring; section rhythm py-16/py-20.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/haulio` (copy simplest existing app, rename package
      to `@free-react-templates/haulio`, register in vite.config with
      `injectUiSource()`, run `npm install` at root so package-lock.json
      registers the workspace)
- [ ] `@theme` tokens in `src/index.css`: primary blue scale
      (#2563eb/#3b82f6/#60a5fa/#1d4ed8/#1e40af/#1e3a8a/#dbeafe/#eff6ff),
      accent orange scale (#f97316/#ea580c/#7c2d12/#fff7ed), gray
      neutrals (#030712…#f9fafb), font Outfit
- [ ] Components: Navbar (sticky, blur, mobile menu w/ aria-expanded,
      "Free Quote" pill), Hero (gradient primary-50→white, 2 CTAs),
      Services (6 cards), HowItWorks (4 steps), Areas (2 cards), Pricing
      (3 plans), Testimonials (quote cards), Quote (form + why-choose +
      call card), Faq (accordion), CtaBand, Footer (dark) + BackToTop
- [ ] TDD: tests before components, one describe per component, scenario
      `it` blocks mirroring the spec, 100% coverage
- [ ] Placeholder images `picsum.photos/seed/haulio-<n>/<w>/<h>`;
      icons lucide-react (Truck, Home, Building2, Package, Warehouse,
      Phone, MapPin, Clock, Mail, Menu, ArrowUp, Star, Quote, Check…)
- [ ] Verify: `scripts/verify-app.sh haulio` (typecheck + lint + 100%
      coverage tests + build)
- [ ] Push `feat/template-haulio`, open PR (source template, preview
      URL, design tokens used, renames), merge immediately with squash
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in
      TEMPLATES.md, `npm run readme:status`, deploy on merge (surge)
