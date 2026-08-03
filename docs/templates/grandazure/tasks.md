# Grandazure (Colorlib The Grand Azure) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-grandazure`.

## Design notes (replication findings)

- **Original:** ColorLib "The Grand Azure" — oceanfront luxury resort /
  hotel landing template
  (source: https://colorlib.com/wp/template/the-grand-azure/).
- **Demo DOM analyzed:** https://grandazure-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.Exk2XG8Q.css` (66KB, minified)
  extracted; pages.dev slug is `grandazure` per
  `preview.colorlib.com/assets/js/products.js`;
  `https://preview.colorlib.com/theme/the-grand-azure/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`).
- **Visual design (from DOM + CSS tokens):** elegant luxury resort landing
  on a full-screen hero image, **deep blue** brand color (`#1e40af`
  blue-800 scale) with gold accents, Playfair Display display + Plus Jakarta
  Sans body fonts, rounded cards, pill buttons, alternating gray-50/white
  sections, dark-blue CTA band, dark-gray (`#111827`) footer, full dark
  mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "The Grand Azure" logo + About, Rooms,
     Amenities, Dining, Gallery, Rates, Blog, Experiences, Contact + "Book
     Now".
  2. Hero (`min-h-screen`): "Experience Timeless Luxury" + "Check
     Availability".
  3. Rooms & Suites: 3 cards (Deluxe Ocean Room, Premium Suite, Presidential
     Villa) + "Book This Room".
  4. Amenities: "World-Class Amenities" — 6 cards (Infinity Pool,
     Full-Service Spa, Fine Dining, Fitness Center, Private Beach,
     Concierge).
  5. Dining: "Culinary Excellence" — 3 venues (The Azure, Coral Bar,
     Sunrise Cafe) with hours.
  6. Gallery: "A Glimpse of Paradise" — 6 captioned images.
  7. Testimonials: "What Our Guests Say".
  8. FAQ: "Frequently Asked Questions" — 5 accordions (check-in/out,
     cancellation, pets, airport transfer, room service).
  9. CTA band (gradient primary-700 → 900): "Make Your Stay Extraordinary"
     - "Book Your Stay" / "View Offers".
  10. Footer (`bg-gray-900`): blurb + address/phone/email + Hotel / Explore
      / Guest Services + "Stay Updated" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **deep blue scale** — #1e40af (800 primary; #1e3a8a,
    #172554 dark; #2563eb, #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe,
    #eff6ff light); gold accent #fbbf24; CTA gradient primary-700 → 900.
  - Neutrals: gray scale — #f3f4f6 → #111827 (footer bg).
  - Fonts: **"Playfair Display"** (display) + **"Plus Jakarta Sans"** (body)
    via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Grandazure (shortened from "The Grand Azure"). App
  folder `apps/grandazure`, package `@free-react-templates/grandazure`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/grandazure-<n>/<w>/<h>`); lucide-react icons (Waves,
  BedDouble, Sparkles, UtensilsCrossed, Dumbbell, Umbrella, Bell, Star,
  ChevronDown, MapPin, Phone, Mail, Clock, CalendarCheck, Plane, PawPrint,
  ConciergeBell); Playfair Display + Plus Jakarta Sans via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-grandazure/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/grandazure` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/grandazure`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-grandazure`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
