# Wanderlust (Colorlib Wanderlust) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-wanderlust`.

## Design notes (replication findings)

- **Original:** ColorLib "Wanderlust" — travel agency / tours landing
  template (source: https://colorlib.com/wp/template/wanderlust/).
- **Demo DOM analyzed:** https://wanderlust-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (45KB, minified) extracted;
  `https://preview.colorlib.com/theme/wanderlust/` returns 404 — preview
  portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** adventurous travel landing on a
  full-screen hero image, **teal** brand color (`#0d9488` teal-600 scale),
  Inter typography, rounded destination/tour cards, pill buttons,
  alternating gray-50/white sections, dark-gray (`#111827`) footer, full
  dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "Wanderlust" logo + Destinations, Tours,
     About, Resources, Travel Blog, Travel Guides, FAQ, Contact + "Book
     Now".
  2. Hero (`min-h-screen`): "Discover Your Next Adventure" + "Explore
     Tours" / "Watch Our Story" + "Search Tours" bar.
  3. Destinations: "Explore the World" — 6 cards (Bali, Santorini, Machu
     Picchu, Tokyo, Maldives, Swiss Alps) with rating/tour count +
     "Explore destination".
  4. Tours: "Unforgettable Experiences" — 4 cards (Bali Cultural Journey,
     Greek Island Hopping, Peru Discovery, Japan Explorer) + "View Tour".
  5. Confidence: "Travel with Confidence" — 6 cards (Safe & Secure, Expert
     Guides, Curated Experiences, Best Price, Flexible Booking, 24/7
     Support).
  6. Testimonials: "What Our Travelers Say".
  7. CTA (image bg): "Ready for Your Next Adventure?" + "Start Planning" /
     "Contact Us" + subscribe form.
  8. Footer (`bg-gray-900`): blurb + Destinations / Company / Support +
     "Travel Inspiration" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **teal scale** — #0d9488 primary (dark: #0f766e,
    #115e59; light: #14b8a6, #2dd4bf, #5eead4, #99f6e4, #ccfbf1, #f0fdfa).
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Wanderlust (kept — matches ColorLib name). App folder
  `apps/wanderlust`, package `@free-react-templates/wanderlust`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/wanderlust-<n>/<w>/<h>`); lucide-react icons (MapPin,
  Plane, Compass, Star, ShieldCheck, Users, Sparkles, BadgePercent,
  CalendarClock, Headphones, Play, Search, ChevronRight, Mail, Globe); Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-wanderlust/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/wanderlust` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/wanderlust`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-wanderlust`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
