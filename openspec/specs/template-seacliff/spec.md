# Template: Seacliff (Luxury Hotel / Travel)

## Purpose

Seacliff is a single-page luxury resort hotel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Grand Azure" website template design
(source: https://colorlib.com/wp/template/the-grand-azure/), built under a
DIFFERENT name per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): this is a fresh prep for the "The Grand
> Azure" item in TEMPLATES.md (Astro category, unchecked). The name
> **Seacliff** is new — single lowercase word, no collision with `apps/` or
> existing spec folders (verified 2026-08-09). The demo's internal brand is
> "The Grand Azure"; the recreation brands itself **Seacliff** but keeps the
> same section structure, content kinds, and design tokens.

## Design reference (replication findings)

- **Original:** ColorLib "The Grand Azure" — luxury oceanfront hotel /
  resort landing template (source:
  https://colorlib.com/wp/template/the-grand-azure/, "Astro" + "Travel"
  categories, published April 2026, CC BY 3.0, author Aigars Silkalns).
- **Preview DOM analyzed (verified 2026-08-09):** the official
  `https://preview.colorlib.com/theme/the-grand-azure/` returns 404 (Astro
  category — the preview portal loads demos from `<slug>-colorlib.pages.dev`,
  confirmed via `preview.colorlib.com/assets/js/products.js`: slug
  `grandazure` → `https://grandazure-colorlib.pages.dev/`). Live demo fetched
  at `https://grandazure-colorlib.pages.dev/` (HTTP 200, ~77 KB HTML +
  `/_astro/Base.Exk2XG8Q.css` ~66 KB parsed for tokens). The TEMPLATES.md
  screenshot (`grandazure-template-1771943856380.jpg`, 2400×1892, viewed in
  browser) matches the live demo: luxury tropical resort, deep-blue hero
  photo with gold accents, serif headings, floating booking widget.
- **Visual design (screenshot + live render):** luxury, tropical,
  sophisticated 5-star resort aesthetic. Full-viewport hero photograph of an
  oceanfront pool resort with a dark navy gradient overlay
  (`from-primary-900/70 via-primary-900/50 to-primary-900/80`) for text
  readability; white serif H1 "Experience" with a **gold/amber**
  (`text-accent-400`) typewriter span rotating
  ["Unforgettable Moments", "Pure Elegance", "True Comfort"]; white
  sans-serif blurb; floating **booking widget** (check-in / check-out /
  guests / gold "Check Availability" button) on a translucent
  `bg-primary-900/60 backdrop-blur-md` bar; scroll-down indicator. Below:
  white stats band (4 counters), alternating light sections (white /
  gray-50), dark gray-950 sections for rooms/dining/testimonials, gold
  `accent-500` primary buttons, deep-navy gradient CTA band
  (`from-primary-700 to-primary-900`), dark gray-900 footer. Full dark mode
  via `.dark` variants (toggle in navbar).
- **Section order (1:1, verified from live DOM):**
  1. Sticky navbar (white/80 backdrop-blur, border-b, h-16 lg:h-20):
     diamond logo + "The Grand Azure" wordmark; links About, Rooms,
     Amenities, Dining, Gallery, Rates, Blog, Experiences, Contact;
     dark-mode toggle (`aria-label="Toggle dark mode"`); "Book Now"
     button (accent gold); mobile hamburger (`aria-label="Open menu"`).
     (Note: Rates / Blog / Experiences / Contact have no target sections —
     they are dead anchors in the source; keep same-kind links.)
  2. Hero (min-h-screen, oceanfront resort photo):
     H1 "Experience" + typewriter accent-400 span ["Unforgettable
     Moments", "Pure Elegance", "True Comfort"], blurb about Miami
     Beach, floating booking widget (Check-in date, Check-out date,
     Guests select 1/2/3/4/5+, gold "Check Availability" submit),
     scroll-down indicator.
  3. Stats band (`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`):
     4 count-up counters — Guests Hosted (10,000+), Luxury Rooms (150+),
     Guest Rating (4.9), Years of Service (25+).
  4. Rooms & Suites (`id="rooms"`, py-20 lg:py-28, dark:bg-gray-950):
     heading "Rooms & Suites" + blurb; 3 cards, each with photo, name,
     price ($299 / $499 / $899 per night), feature row (bed, view, size,
     extra), "Book This Room" button:
     - Deluxe Ocean Room — King Bed, Ocean View, 45 sqm, Balcony.
     - Premium Suite — King Bed, Panoramic View, 75 sqm, Jacuzzi.
     - Presidential Villa — 2 Bedrooms, Private Pool, 150 sqm, Butler
       Service.
  5. Amenities (`id="amenities"`, bg-gray-50 py-20 lg:py-28,
     dark:bg-gray-900): heading "World-Class Amenities"; 6 icon cards —
     Infinity Pool, Full-Service Spa, Fine Dining, Fitness Center,
     Private Beach, Concierge (each icon + title + blurb).
  6. Dining (`id="dining"`, py-20 lg:py-28, dark:bg-gray-950): heading
     "Culinary Excellence" + blurb; 3 venue cards — The Azure
     (Contemporary Fine Dining; Dinner 6:00 PM – 11:00 PM), Coral Bar
     (Craft Cocktails & Small Plates; Open 4:00 PM – 1:00 AM), Sunrise
     Cafe (International Breakfast & Brunch; Breakfast 6:30 AM – 11:00
     AM).
  7. Gallery (`id="gallery"`, bg-gray-50 py-20 lg:py-28, dark:bg-gray-900):
     heading "A Glimpse of Paradise" + blurb; 6 image tiles with
     captions (Resort infinity pool, Luxurious suite, Private beach at
     sunset, Spa treatment room, Elegant restaurant, Grand hotel lobby).
  8. Testimonials (`id="testimonials"`, py-20 lg:py-28, dark:bg-gray-950):
     heading "What Our Guests Say" + blurb; carousel with prev/next
     controls (`aria-label="Previous/Next testimonial"`), 5+ slides —
     each with quote, initials avatar, name, occasion label (Traveled
     with Family, Anniversary Celebration, Business Traveler, Wedding
     Guests, …).
  9. FAQ (`id="faq"`, bg-white py-20 lg:py-28, dark:bg-gray-950): heading
     "Frequently Asked Questions" + blurb; 5 accordion items with
     rounded-full +/- toggle icons: check-in/check-out times,
     cancellation policy, pets, airport transfer, room service.
  10. CTA band (relative overflow-hidden, `bg-gradient-to-br
from-primary-700 to-primary-900`, py-20 lg:py-28): "Make Your Stay
      Extraordinary" + blurb + "Book Your Stay" / "View Offers" buttons.
  11. Footer (bg-gray-900 pt-16 lg:pt-24, text-gray-300): brand + blurb;
      address 1 Ocean Drive, Miami Beach, FL 33139; phone (555) 456-7890;
      email reservations@grandazure.com; link columns — Hotel (Rooms,
      Amenities, Dining, Spa), Explore (Local Attractions, Activities,
      Events, Transportation), Guest Services (Concierge, FAQ,
      Accessibility, Policies); "Stay Updated" newsletter form (email
      input + Subscribe button); social icons (Facebook, Instagram,
      Twitter); copyright row with Privacy Policy, Terms of Service,
      Style Guide links.
- **Design tokens extracted from the live CSS + DOM (verified 2026-08-09):**
  - Brand colors — **primary (deep blue/navy) scale**: **#dbeafe (100)**,
    #3b82f6 (500), **#1e40af (600)**, **#1e3a8a (700)** (CTA gradient
    start, hover), **#0f172a (900)** (CTA gradient end, hero overlay
    tints). Hero overlay: `bg-gradient-to-b from-primary-900/70
via-primary-900/50 to-primary-900/80`. Booking widget:
    `bg-primary-900/60 backdrop-blur-md`.
  - Brand colors — **accent (gold/amber) scale**: **#fbbf24 (400)** (H1
    typewriter span, divider line `bg-accent-400`), **#f59e0b (500)**
    (primary buttons "Book Now", "Check Availability", "Book Your Stay"),
    **#d97706 (600)** (hover), **#b45309 (700)**.
  - Neutrals: gray scale — #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300 borders), #9ca3af (400), #6b7280 (500), #4b5563 (600),
    #374151 (700), #1f2937 (800), #111827 (900 body text), #030712 (950
    dark bg).
  - Fonts: **"Playfair Display"** (serif — headings; weights 400–800) +
    **"Plus Jakarta Sans"** (body; weights 300–800) via Google Fonts
    (`family=Playfair+Display:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800`).
  - Buttons: `.btn` = rounded-lg, px-5 py-2.5, text-sm font-medium,
    inline-flex, gap-2. `.btn-primary` = bg accent-500 (gold), white text,
    shadow tinted accent-500/25, hover:bg-accent-600. `.btn-secondary` =
    white bg, border gray-300, text gray-700. Hero booking submit =
    rounded-lg bg-accent-500 px-8 py-3 shadow-lg shadow-accent-500/25
    hover:bg-accent-600.
  - Shapes: rounded-lg buttons/inputs, rounded-xl/rounded-2xl cards,
    rounded-full FAQ toggle icons + avatar circles, booking widget
    rounded-2xl translucent bar; sections alternate white / gray-50 /
    dark gray-950 with py-20 lg:py-28 rhythm; container mx-auto px-4
    lg:px-8; headings text-3xl/4xl font-bold tracking-tight.
  - Dark mode: `.dark` class on root; dark:bg-gray-900 / gray-950 section
    backgrounds, dark:text-white headings, dark:border-gray-800; toggle
    persisted per repo pattern (window.localStorage + Storage polyfill).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/seacliff-<n>/<w>/<h>`); icons → lucide-react
  (Diamond, Waves, Users, Star, Clock, ConciergeBell, Dumbbell,
  UtensilsCrossed, Droplets, Palmtree, Wifi, Check, ChevronDown,
  ChevronLeft, ChevronRight, Plus, Minus, Menu, X, Phone, Mail, MapPin,
  ArrowRight); Playfair Display + Plus Jakarta Sans via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome. Brand text
  renames "The Grand Azure"/"Grand Azure" → "Seacliff" everywhere (logo
  wordmark, email reservations@seacliff.com, copyright); heading copy
  stays same-kind, paraphrased where needed. Optional animated extras:
  typewriter headline span + count-up stats + scroll-reveal — implement
  the typewriter + count-up if cheap, static equivalents acceptable; keep
  the FAQ accordion + testimonial carousel functional.

Seacliff lives in `apps/seacliff` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Seacliff", anchor links, a "Book Now" button, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Seacliff page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Seacliff" and links to
  About, Rooms, Amenities, Dining, Gallery, Rates, Blog, Experiences, and
  Contact
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle
  button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a full-viewport hero with a headline, blurb, a
floating booking widget, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Experience" with a
  typewriter span rotating between "Unforgettable Moments", "Pure
  Elegance", and "True Comfort"
- **AND** it SHALL show a short blurb about the oceanfront resort
- **AND** it SHALL show a booking widget with Check-in, Check-out, and
  Guests fields and a "Check Availability" button

### Requirement: Stats band

The system SHALL render an about band with four hotel statistics.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show four statistics: Guests Hosted, Luxury Rooms,
  Guest Rating, and Years of Service

### Requirement: Rooms section

The system SHALL render a rooms section with three accommodation cards.

#### Scenario: Room cards

- **GIVEN** the page is rendered
- **WHEN** the Rooms section is displayed
- **THEN** it SHALL contain a heading "Rooms & Suites"
- **AND** it SHALL show cards for Deluxe Ocean Room, Premium Suite, and
  Presidential Villa, each with a price, a feature list, and a "Book This
  Room" button

### Requirement: Amenities section

The system SHALL render an amenities section with six feature cards.

#### Scenario: Amenity cards

- **GIVEN** the page is rendered
- **WHEN** the amenities section is displayed
- **THEN** it SHALL contain a heading "World-Class Amenities"
- **AND** it SHALL show cards for Infinity Pool, Full-Service Spa, Fine
  Dining, Fitness Center, Private Beach, and Concierge

### Requirement: Dining section

The system SHALL render a dining section with three venue cards.

#### Scenario: Venue cards

- **GIVEN** the page is rendered
- **WHEN** the dining section is displayed
- **THEN** it SHALL contain a heading "Culinary Excellence"
- **AND** it SHALL show cards for The Azure, Coral Bar, and Sunrise Cafe,
  each with a cuisine description and opening hours

### Requirement: Gallery section

The system SHALL render a gallery with six captioned images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Paradise"
- **AND** it SHALL show at least six image tiles with captions

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Guests Say"
- **AND** it SHALL show at least three quote slides with an avatar, a
  name, and an occasion label

#### Scenario: Carousel navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user activates the next/previous control
- **THEN** the displayed testimonial SHALL change to the adjacent slide

### Requirement: FAQ section

The system SHALL render an FAQ accordion with expandable questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA band with a headline and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Make Your Stay Extraordinary"
- **AND** it SHALL show "Book Your Stay" and "View Offers" buttons

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact details,
a newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Seacliff" brand and a blurb
- **AND** it SHALL show link columns (Hotel, Explore, Guest Services)
- **AND** it SHALL show the street address, phone number, and email
  address
- **AND** it SHALL show a "Stay Updated" newsletter form with an email
  input and a Subscribe button
- **AND** it SHALL show a copyright line with Privacy Policy and Terms
  links

### Requirement: Page chrome and accessibility

The system SHALL render standard page chrome: landmarks, skip link, and a
document title.

#### Scenario: Document and landmarks

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** the Header SHALL be in the `banner` landmark, the main content
  in the `main` landmark, and the Footer in the `contentinfo` landmark
- **AND** the document title SHALL be "Seacliff — Luxury Resort Hotel"
- **AND** a skip-to-content link SHALL be available

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh seacliff` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero + booking widget,
      stats band, rooms, amenities, dining, gallery, testimonials, FAQ,
      CTA band, footer)
- [ ] Design tokens in `@theme`: primary deep blue `#1e3a8a` / `#1e40af`
      / `#0f172a` (+ #dbeafe, #3b82f6), accent gold `#f59e0b` (+ #fbbf24,
      #d97706, #b45309), gray neutrals incl. #030712, #111827, #f9fafb
- [ ] Fonts: Playfair Display (headings) + Plus Jakarta Sans (body) via
      Google Fonts
- [ ] Buttons: primary gold `rounded-lg` accent-500 with accent-tinted
      shadow (hover accent-600); secondary white with gray-300 border;
      hero booking widget `bg-primary-900/60 backdrop-blur-md` rounded-2xl
- [ ] Hero: full-viewport resort photo with `from-primary-900/70
    via-primary-900/50 to-primary-900/80` overlay; H1 + typewriter
      accent-400 span; booking widget (Check-in, Check-out, Guests,
      Check Availability)
- [ ] Rooms: 3 cards with photos, prices $299/$499/$899, feature rows,
      "Book This Room". Amenities: 6 icon cards. Dining: 3 venue cards
      with hours. Gallery: 6 captioned images
- [ ] Stats band: 4 count-up counters (Guests Hosted, Luxury Rooms, Guest
      Rating, Years of Service)
- [ ] Testimonials: carousel with prev/next controls, ≥3 slides with
      avatar + name + occasion label
- [ ] FAQ: 5 accordion items expanding on activation
- [ ] CTA band: `from-primary-700 to-primary-900` gradient, "Book Your
      Stay" + "View Offers"
- [ ] Footer: 4 columns (Hotel, Explore, Guest Services, Stay Updated
      newsletter), address/phone/email, social icons, legal row
- [ ] Dark-mode toggle persists (window.localStorage + Storage polyfill
      per repo pattern); dark sections gray-900/950
- [ ] No copied assets: picsum.photos/seed/seacliff-<n> placeholders,
      lucide-react icons (socials via inline SVG per repo pattern)
- [ ] Brand renamed "The Grand Azure" → "Seacliff" everywhere (logo,
      email, copyright); document title "Seacliff — Luxury Resort Hotel"
- [ ] Uses packages/ui (Button, ButtonLink, Badge, Card, cn) — knip-safe
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge
      URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
