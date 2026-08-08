# Sapphire (ColorLib The Grand Azure) — Tasks & Design Notes

> Recreation of ColorLib "The Grand Azure"
> (https://colorlib.com/wp/template/the-grand-azure/) under the NEW name
> **Sapphire** (the deep-blue gemstone — luxury + azure-ocean association),
> per the monorepo naming mandate (never reuse the ColorLib source name —
> the stale prep at `openspec/specs/template-grandazure/` used the
> source-derived name "Grandazure" and was deleted, see spec NOTE).

## Design notes (replication findings)

- **Original:** ColorLib "The Grand Azure" — oceanfront luxury resort /
  hotel landing template (Astro category). Demo's internal brand is
  "The Grand Azure" (Miami Beach resort); the recreation brands itself
  **Sapphire**.
- **Demo DOM analyzed:** `https://grandazure-colorlib.pages.dev/` (HTTP
  200, ~77 KB HTML + `/_astro/Base.Exk2XG8Q.css` ~66 KB parsed for
  tokens; the official `https://preview.colorlib.com/theme/the-grand-azure/`
  returns 404 — demo hosted on Cloudflare Pages, same pattern as
  Serenite→Sooth / Saasify→Zenith / Swiftmove→Haulio, confirmed via
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md
  screenshot (`grandazure-template-1771943856380.jpg`, 2400×1892, fetched
  and visually analyzed) matches the live demo.
- **Visual design (live render):** full-screen hero photo of an overwater-
  bungalow resort (pool, loungers) under a dark gradient overlay; white +
  gold Playfair Display headline; floating dark-glass booking bar with
  date inputs + guests select + gold "Check Availability"; white navbar
  with gold "Book Now"; white stats strip (10000+ / 150+ / 4.9 / 25+);
  deep-blue brand with gold accents; alternating dark (gray-950/900) and
  light (gray-50/white) sections.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur, border-b): wordmark + About, Rooms,
     Amenities, Dining, Gallery, Rates, Blog, Experiences, Contact;
     gold "Book Now" button (`rounded-lg bg-accent-500`); mobile
     hamburger; dark-mode toggle.
  2. Hero (min-h-screen, image bg + dark overlay): H1 "Experience
     Timeless Luxury", Miami Beach blurb, floating booking widget
     (Check-in, Check-out dates, Guests select 1–5+, "Check
     Availability"), scroll indicator.
  3. Stats strip (border-y, gray-50): 4 animated counters — 10000+
     Guests Hosted, 150+ Luxury Rooms, 4.9 Guest Rating, 25+ Years of
     Service.
  4. Rooms & Suites (dark): eyebrow "Accommodations", 3 cards — Deluxe
     Ocean Room $299 (King Bed · Ocean View · 45 sqm · Balcony),
     Premium Suite $499 (King Bed · Panoramic View · 75 sqm · Jacuzzi),
     Presidential Villa $899 (2BR, private pool, butler) — each with
     "Book This Room".
  5. Amenities (light): "World-Class Amenities" — 6 icon cards: Infinity
     Pool, Full-Service Spa, Fine Dining, Fitness Center, Private Beach,
     Concierge.
  6. Dining (dark): "Culinary Excellence" — The Azure (Contemporary Fine
     Dining, Dinner 6–11 PM), Coral Bar (Craft Cocktails), Sunrise Cafe
     — venue + descriptor + hours.
  7. Gallery (light): "A Glimpse of Paradise" — 6 captioned images
     (infinity pool, suite, beach at sunset, spa room, restaurant,
     lobby).
  8. Testimonials (dark): "What Our Guests Say" — 6 quote cards (quote +
     name + tag, e.g. Victoria Hartwell — Traveled with Family).
  9. FAQ (white): 5 accordion items (check-in/out times, cancellation,
     pets, airport transfer, room service).
  10. CTA band (blue gradient from-primary-700 to-primary-900): "Make
      Your Stay Extraordinary" + "Book Your Stay" + "View Offers".
  11. Footer (dark gray-900): brand + blurb + address/phone/email;
      columns Hotel / Explore / Guest Services; "Stay Updated"
      newsletter (email + Subscribe); bottom bar © 2026 + Privacy
      Policy / Terms of Service / Style Guide.
  - Extras: skip-to-content link, mobile menu (aria-expanded),
    dark-mode toggle (class-based `.dark`, localStorage), scroll-reveal
    animations, back-to-top floating button (fixed bottom-right).
- **Design tokens (verified from `Base.Exk2XG8Q.css` + DOM, 2026-08-09):**
  - Primary deep blue: 100 `#dbeafe`, 200 `#bfdbfe`, 300 `#93c5fd`, 400
    `#60a5fa` (on dark), 500 `#3b82f6`, 600 `#1e40af`, 700 `#1e3a8a`
    (CTA gradient start), 900 `#172554` (gradient end, implied).
  - Accent gold: 100 `#fef3c7`, 400 `#fbbf24`, 500 `#f59e0b` (button
    bg), 600 `#d97706` (hover), 700 `#b45309`.
  - Neutrals: white; gray-50 `#f9fafb`, gray-100 `#f3f4f6`, gray-200
    `#e5e7eb`, gray-300 `#d1d5db` (borders), gray-700 `#374151`,
    gray-800 `#1f2937`, gray-900 `#111827`, gray-950 `#030712` (dark
    bands), slate-900 `#0f172a`.
  - Fonts: **Playfair Display** (400–800, headings) + **Plus Jakarta
    Sans** (300–800, body), Google Fonts.
  - Shapes: buttons `rounded-lg bg-accent-500 text-white` hover
    `bg-accent-600`; nav CTA `px-5 py-2.5 text-sm font-medium`; hero CTA
    `px-8 py-3 shadow-lg shadow-accent-500/25`; ghost buttons (white
    border) on the CTA band; cards `rounded-xl/2xl`; feature chips
    `rounded-full`; booking bar dark glass (translucent dark bg + blur);
    section rhythm `py-20 lg:py-28`, alternating dark/light bands.
  - Dark mode: class-based `.dark` — gray-950/900 swap with
    white/gray-50, text gray-100/gray-400; toggle persisted to
    localStorage ("theme").

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/sapphire` (copy simplest existing app, rename package
      to `@free-react-templates/sapphire`, register in vite.config with
      `injectUiSource()`, run `npm install` at root so package-lock.json
      registers the workspace)
- [ ] `@theme` tokens in `src/index.css`: primary blue scale
      (#dbeafe/#bfdbfe/#93c5fd/#60a5fa/#3b82f6/#1e40af/#1e3a8a/#172554),
      accent gold scale (#fef3c7/#fbbf24/#f59e0b/#d97706/#b45309), gray
      neutrals (#030712…#f9fafb), fonts Playfair Display + Plus Jakarta
      Sans (Google Fonts `<link>` in index.html)
- [ ] Components: Navbar (sticky, blur, dark-mode toggle, mobile menu
      w/ aria-expanded, gold "Book Now"), Hero (min-h-screen image + dark
      overlay + BookingWidget form: check-in/check-out dates, guests
      select 1–5+, availability confirmation), Stats (4 count-up
      counters), Rooms (3 cards: price, 4 chips, "Book This Room"),
      Amenities (6 icon cards), Dining (3 venues), Gallery (6 captioned
      images), Testimonials (6 quotes), Faq (5-item accordion), CtaBand
      (blue gradient + 2 buttons), Footer (dark, 3 link columns +
      newsletter + bottom bar) + BackToTop + SkipLink
- [ ] TDD: tests before components, one describe per component, scenario
      `it` blocks mirroring the spec, 100% coverage
- [ ] Placeholder images `picsum.photos/seed/sapphire-<n>/<w>/<h>`;
      icons lucide-react (Waves, BedDouble, Dumbbell, Utensils,
      ConciergeBell, Umbrella, Car, Calendar, Users, Clock, MapPin,
      Phone, Mail, Menu, X, ChevronDown, ArrowUp, ArrowRight, Check —
      verify exports; brand icons removed from lucide-react)
- [ ] Verify: `scripts/verify-app.sh sapphire` (typecheck + lint + 100%
      coverage tests + build)
- [ ] Push `feat/template-sapphire`, open PR (source template, preview
      URL, design tokens used, renames), merge immediately with squash
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in
      TEMPLATES.md, `npm run readme:status`, deploy on merge (surge)
