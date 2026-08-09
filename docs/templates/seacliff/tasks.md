# Seacliff (ColorLib The Grand Azure) — Tasks & Design Notes

> Recreation of ColorLib "The Grand Azure"
> (https://colorlib.com/wp/template/the-grand-azure/) under the NEW name
> **Seacliff** (single lowercase word, no collision with `apps/` or spec
> folders), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "The Grand Azure" — luxury oceanfront hotel /
  resort landing template (Astro + Travel categories, April 2026, CC BY
  3.0, Aigars Silkalns). Demo's internal brand is "The Grand Azure"; the
  recreation brands itself **Seacliff**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://grandazure-colorlib.pages.dev/` (HTTP 200, ~77 KB HTML +
  `/_astro/Base.Exk2XG8Q.css` ~66 KB parsed for tokens; the official
  `https://preview.colorlib.com/theme/the-grand-azure/` returns 404 — Astro
  demos are hosted on Cloudflare Pages, confirmed via
  `preview.colorlib.com/assets/js/products.js`: slug `grandazure` →
  `https://grandazure-colorlib.pages.dev/`, same pattern as
  Workhub→Deskly / Serenite→Sooth / Saasify→Zenith / Swiftmove→Movere). The
  TEMPLATES.md screenshot (`grandazure-template-1771943856380.jpg`,
  2400×1892, viewed in browser) matches the live demo.
- **Visual design (screenshot + live render):** luxury, tropical,
  sophisticated 5-star resort aesthetic. Full-viewport hero photo of an
  oceanfront pool resort with dark navy gradient overlay
  (`from-primary-900/70 via-primary-900/50 to-primary-900/80`); white serif
  H1 "Experience" + gold/amber (`text-accent-400`) typewriter span
  ["Unforgettable Moments", "Pure Elegance", "True Comfort"]; white blurb;
  floating translucent booking widget (`bg-primary-900/60 backdrop-blur-md
rounded-2xl`: Check-in, Check-out, Guests select, gold "Check
  Availability"); scroll-down indicator. White stats band (Guests Hosted /
  Luxury Rooms / Guest Rating / Years of Service — count-up counters);
  light sections alternate white/gray-50, dark sections gray-950; gold
  `accent-500` primary buttons; deep-navy gradient CTA band
  (`from-primary-700 to-primary-900`); dark gray-900 footer. Full dark mode
  (`.dark` variants, toggle in navbar).
- **Structure (1:1, section order, verified live):**
  1. Sticky navbar (white/80 blur, border-b): diamond logo + "The Grand
     Azure" wordmark; links About, Rooms, Amenities, Dining, Gallery,
     Rates, Blog, Experiences, Contact (Rates/Blog/Experiences/Contact
     are dead anchors in the source — keep same-kind links);
     dark-mode toggle (`aria-label="Toggle dark mode"`); "Book Now"
     (accent gold); mobile hamburger (`aria-label="Open menu"`).
  2. Hero (min-h-screen resort photo + navy gradient overlay): H1
     "Experience" + typewriter accent-400 span, Miami Beach blurb,
     floating booking widget (Check-in, Check-out, Guests 1–5+,
     gold "Check Availability"), scroll-down indicator.
  3. Stats band (border-y border-gray-200 bg-gray-50 py-16 lg:py-20):
     4 count-up counters — Guests Hosted (10,000+), Luxury Rooms
     (150+), Guest Rating (4.9), Years of Service (25+).
  4. Rooms & Suites (id="rooms", py-20 lg:py-28, dark:bg-gray-950):
     "Rooms & Suites" + blurb; 3 cards with photo, name, price, feature
     row, "Book This Room":
     - Deluxe Ocean Room — $299/night: King Bed, Ocean View, 45 sqm,
       Balcony.
     - Premium Suite — $499/night: King Bed, Panoramic View, 75 sqm,
       Jacuzzi.
     - Presidential Villa — $899/night: 2 Bedrooms, Private Pool, 150
       sqm, Butler Service.
  5. Amenities (id="amenities", bg-gray-50 py-20 lg:py-28,
     dark:bg-gray-900): "World-Class Amenities" — 6 icon cards:
     Infinity Pool, Full-Service Spa, Fine Dining, Fitness Center,
     Private Beach, Concierge.
  6. Dining (id="dining", py-20 lg:py-28, dark:bg-gray-950): "Culinary
     Excellence" — 3 venue cards: The Azure (Contemporary Fine Dining;
     Dinner 6:00 PM – 11:00 PM), Coral Bar (Craft Cocktails & Small
     Plates; Open 4:00 PM – 1:00 AM), Sunrise Cafe (International
     Breakfast & Brunch; Breakfast 6:30 AM – 11:00 AM).
  7. Gallery (id="gallery", bg-gray-50 py-20 lg:py-28, dark:bg-gray-900):
     "A Glimpse of Paradise" — 6 image tiles with captions (Resort
     infinity pool overlooking the ocean; Luxurious hotel suite with
     ocean view; Pristine private beach at sunset; Spa treatment room
     with relaxing ambiance; Elegant restaurant with ambient lighting;
     Grand hotel lobby with modern design).
  8. Testimonials (id="testimonials", py-20 lg:py-28, dark:bg-gray-950):
     "What Our Guests Say" — carousel, 5+ slides (Victoria Hartwell —
     Traveled with Family; James & Olivia Chen — Anniversary
     Celebration; Marcus Beaumont — Business Traveler; The Patels —
     Wedding Guests; …), each quote + initials avatar + name + occasion
     label; prev/next controls (`aria-label="Previous/Next
testimonial"`).
  9. FAQ (id="faq", bg-white py-20 lg:py-28, dark:bg-gray-950):
     "Frequently Asked Questions" — 5 accordion items with rounded-full
     +/- toggle icons: check-in/check-out times, cancellation policy,
     pets, airport transfer, room service.
  10. CTA band (relative overflow-hidden, bg-gradient-to-br
      from-primary-700 to-primary-900, py-20 lg:py-28): "Make Your Stay
      Extraordinary" + blurb + "Book Your Stay" / "View Offers".
  11. Footer (bg-gray-900 pt-16 lg:pt-24 text-gray-300): brand + blurb;
      address 1 Ocean Drive, Miami Beach, FL 33139; phone (555) 456-7890;
      email reservations@grandazure.com → reservations@seacliff.com;
      link columns — Hotel (Rooms, Amenities, Dining, Spa), Explore
      (Local Attractions, Activities, Events, Transportation), Guest
      Services (Concierge, FAQ, Accessibility, Policies); "Stay Updated"
      newsletter (email input + Subscribe); socials (Facebook, Instagram,
      Twitter); copyright row (Privacy Policy, Terms of Service, Style
      Guide).
- **Design tokens extracted from the live CSS + DOM (verified 2026-08-09):**
  - Brand colors — **primary (deep blue/navy) scale**: #dbeafe (100),
    #3b82f6 (500), #1e40af (600), **#1e3a8a (700)** (CTA gradient start,
    hover), **#0f172a (900)** (CTA gradient end, hero overlay tints).
    Hero overlay `from-primary-900/70 via-primary-900/50
to-primary-900/80`; booking widget `bg-primary-900/60
backdrop-blur-md`.
  - Brand colors — **accent (gold/amber) scale**: **#fbbf24 (400)** (H1
    typewriter span, `bg-accent-400` divider), **#f59e0b (500)** (primary
    buttons), #d97706 (600 hover), #b45309 (700).
  - Neutrals: gray scale — #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300 borders), #9ca3af (400), #6b7280 (500), #4b5563 (600),
    #374151 (700), #1f2937 (800), #111827 (900 body), #030712 (950 dark
    bg).
  - Fonts: **Playfair Display** (serif headings, weights 400–800) +
    **Plus Jakarta Sans** (body, weights 300–800) via Google Fonts.
  - Buttons: rounded-lg, px-5 py-2.5, text-sm font-medium; primary =
    bg accent-500 + white text + shadow accent-500/25, hover accent-600;
    secondary = white, gray-300 border, gray-700 text. Hero submit =
    rounded-lg bg-accent-500 px-8 py-3 shadow-lg shadow-accent-500/25.
  - Shapes: rounded-lg buttons/inputs, rounded-xl/2xl cards, rounded-full
    FAQ toggle icons/avatars, booking widget rounded-2xl translucent bar;
    sections alternate white/gray-50/dark gray-950, py-20 lg:py-28;
    container mx-auto px-4 lg:px-8.
  - Dark mode: `.dark` on root, dark:bg-gray-900/gray-950 sections,
    dark:text-white headings; toggle persisted (window.localStorage +
    Storage polyfill).
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/seacliff-<n>/<w>/<h>` — hero 1920×1080, rooms
  800×600, gallery 800×600); lucide-react icons (Diamond, Waves, Users,
  Star, Clock, ConciergeBell, Dumbbell, UtensilsCrossed, Droplets,
  Palmtree, Wifi, Check, ChevronDown, ChevronLeft, ChevronRight, Plus,
  Minus, Menu, X, Phone, Mail, MapPin, ArrowRight — verify exports; brand
  socials via inline SVG per repo pattern); Playfair Display + Plus
  Jakarta Sans via Google Fonts `<link>` in index.html; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Rename demo brand "The Grand Azure"/"Grand Azure" → "Seacliff" everywhere
  (logo wordmark, email reservations@seacliff.com, copyright "© 2026
  Seacliff"). Headings keep same-kind copy, may be paraphrased.
- Optional animated extras: typewriter headline span (["Unforgettable
  Moments", "Pure Elegance", "True Comfort"]), count-up stats, scroll-
  reveal, back-to-top. Implement typewriter + count-up if cheap; static
  equivalents acceptable. Keep FAQ accordion + testimonial carousel
  functional.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — apps MUST
  import these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/seacliff`
      (package `@free-react-templates/seacliff`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: navbar, hero (photo + overlay + typewriter H1 +
      booking widget), stats band (counters), rooms, amenities, dining,
      gallery, testimonials (carousel), FAQ, CTA band, footer.
- [ ] Hero: full-viewport resort photo (picsum seed) + navy gradient
      overlay, H1 "Experience" + accent-400 typewriter span, blurb,
      floating booking widget (Check-in / Check-out / Guests / gold
      "Check Availability"), scroll indicator.
- [ ] Rooms: 3 cards (Deluxe Ocean Room $299 / Premium Suite $499 /
      Presidential Villa $899) with photo, feature row, "Book This Room".
      Amenities: 6 icon cards. Dining: 3 venue cards with hours. Gallery:
      6 captioned tiles.
- [ ] Testimonials: carousel with prev/next controls, ≥3 slides with
      initials avatar + name + occasion label. FAQ: 5 accordion items
      (expand on activation, rounded-full +/- toggles).
- [ ] CTA: from-primary-700 to-primary-900 gradient band, "Book Your
      Stay" + "View Offers". Stats band: 4 count-up counters.
- [ ] Footer: 3 link columns + "Stay Updated" newsletter + contact +
      socials + legal row; landmarks banner/main/contentinfo; document
      title "Seacliff — Luxury Resort Hotel".
- [ ] `scripts/verify-app.sh seacliff` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
