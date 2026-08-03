# Swiftmove (Colorlib Swiftmove) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-swiftmove`.

## Design notes (replication findings)

- **Original:** ColorLib "Swiftmove" — moving / relocation services landing
  template (source: https://colorlib.com/wp/template/swiftmove/).
- **Demo DOM analyzed:** https://swiftmove-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.Ce97irTr.css` (65KB, minified)
  extracted; `https://preview.colorlib.com/theme/swiftmove/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** professional moving company
  landing on a light blue-white gradient hero, **blue** brand color
  (`#2563eb` blue-600 scale), Outfit typography, rounded cards, pill
  buttons, alternating gray-50/white sections, blue CTA band, dark-gray
  (`#111827`) footer, full dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "SwiftMove" logo + About, Services, How
     It Works, Areas, Pricing, Testimonials, Quote, Blog, Contact + "Free
     Quote".
  2. Hero (gradient primary-50 → white): "Moving Made Simple &
     Stress-Free" + "Get Free Quote" / "Call (555) 890-1234".
  3. Services: "Moving Solutions for Every Need" — 6 cards (Local, Long
     Distance, Commercial, Packing, Storage, Specialty).
  4. Process: "Your Move in 4 Easy Steps" — Request a Quote, Schedule Your
     Move, We Handle Everything, Welcome Home.
  5. Coverage: "We Move You Anywhere" — Local Moves / Long Distance.
  6. Pricing: "Transparent, Honest Pricing" — Studio/1BR, 2-3 Bedrooms, 4+
     Bedrooms.
  7. Testimonials: "Trusted by Thousands of Families".
  8. Quote form: "Get Your Free Moving Quote" + "Get Free Quote" + Why
     Choose SwiftMove? / phone / Business Hours.
  9. FAQ: "Frequently Asked Questions" — 5 accordions (insurance, booking,
     packing, specialty items, storage).
  10. CTA band (gradient primary-600 → 800): "Ready to Make Your Move?" +
      "Get Free Quote" / "Call Now".
  11. Footer (`bg-gray-900`): blurb + Services / Company / Support +
      phone/email + copyright; cookie banner.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue scale** — #2563eb primary (dark: #1d4ed8,
    #1e40af; light: #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe, #eff6ff);
    hero gradient primary-50 → white; CTA gradient primary-600 → 800.
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Outfit"** (Outfit, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Swiftmove (kept — matches ColorLib name). App folder
  `apps/swiftmove`, package `@free-react-templates/swiftmove`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/swiftmove-<n>/<w>/<h>`); lucide-react icons (Truck,
  Package, Building2, Boxes, Warehouse, Piano, ClipboardCheck, CalendarDays,
  Phone, Mail, Clock, Star, ChevronDown, MapPin, Home); Outfit via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-swiftmove/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/swiftmove` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/swiftmove`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-swiftmove`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
