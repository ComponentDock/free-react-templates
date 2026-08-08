# Template: Sapphire (Luxury Resort / Hotel Template)

## Purpose

Sapphire is a single-page oceanfront luxury resort landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Grand Azure" website template design
(source: https://colorlib.com/wp/template/the-grand-azure/), built under a
DIFFERENT name (Sapphire — the deep-blue gemstone, evoking the azure ocean
and the resort's luxury positioning) per the monorepo naming mandate, with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-grandazure/` (plus `docs/templates/grandazure/`)
> using a FORBIDDEN source-derived name ("Grandazure" is the ColorLib name
> "The Grand Azure" with "The " stripped and squashed — not an original
> name); both were deleted and replaced by this fresh prep (new name
> Sapphire), matching the Serenity→Hush / Solarshift→Helios /
> Swiftmove→Haulio precedent.

## Design reference (replication findings)

- **Original:** ColorLib "The Grand Azure" — oceanfront luxury resort /
  hotel landing template (category "Astro Website Templates"; "built with
  Astro and Tailwind CSS"). Demo internal brand: "The Grand Azure" (Miami
  Beach resort); the recreation brands itself **Sapphire**.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/the-grand-azure/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://grandazure-colorlib.pages.dev/` (HTTP 200, ~77 KB HTML +
  `/_astro/Base.Exk2XG8Q.css` ~66 KB parsed for tokens; the pages.dev slug
  is `grandazure` per `preview.colorlib.com/assets/js/products.js`). Same
  Cloudflare-Pages hosting pattern as Serenite→Sooth / Saasify→Zenith.
  The TEMPLATES.md screenshot (`grandazure-template-1771943856380.jpg`,
  2400×1892, fetched + visually analyzed) matches the live demo.
- **Visual design (screenshot + live render):** full-screen hero photo of a
  luxury overwater-bungalow resort (wooden deck, pool, loungers —
  Maldives/Bora Bora vibe) under a dark gradient overlay; white + gold serif
  headline; floating dark glass booking bar; white navbar with gold "Book
  Now"; white stats strip; gold accent CTAs throughout; deep-blue brand.
  (Screenshot hero copy reads "Experience Unforgettable Moments" — older
  copy; the live demo's "Experience Timeless Luxury" is authoritative.)
- **Section order (1:1, from live demo DOM):**
  1. Sticky navbar (white/80 blur, border-b): "The Grand Azure" wordmark +
     links About, Rooms, Amenities, Dining, Gallery, Rates, Blog,
     Experiences, Contact + gold "Book Now" button (`rounded-lg
bg-accent-500`); mobile hamburger menu; dark-mode toggle.
  2. Hero (`relative min-h-screen overflow-hidden`, full-bleed image with
     dark gradient overlay): H1 "Experience Timeless Luxury" (Playfair
     Display, gold/white), blurb "Nestled along the pristine shores of
     Miami Beach, The Grand Azure offers an unparalleled blend of elegance,
     comfort, and world-class hospitality.", and a floating **booking
     widget** bar (dark glass): Check-in date input, Check-out date input,
     Guests select (1, 2, 3, 4, 5+ Guests), gold "Check Availability"
     button; subtle scroll indicator.
  3. Stats strip (`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`):
     4 animated counters (start at 0, count up on view) — 10000+ Guests
     Hosted, 150+ Luxury Rooms, 4.9 Guest Rating, 25+ Years of Service.
  4. Rooms & Suites (`#rooms`, dark `bg-gray-950`): eyebrow "Accommodations",
     H2 "Rooms & Suites", subtext; 3 image cards with price + 4 feature
     chips + "Book This Room" button:
     - Deluxe Ocean Room — $299/night — King Bed, Ocean View, 45 sqm,
       Balcony.
     - Premium Suite — $499/night — King Bed, Panoramic View, 75 sqm,
       Jacuzzi.
     - Presidential Villa — $899/night — two bedrooms, private pool,
       butler service.
  5. Amenities (`#amenities`, `bg-gray-50 dark:bg-gray-900`): eyebrow
     "Amenities", H2 "World-Class Amenities", subtext; 6 icon cards
     (icon tile + title + blurb): Infinity Pool, Full-Service Spa, Fine
     Dining, Fitness Center, Private Beach, Concierge.
  6. Dining (`#dining`, dark `bg-gray-950`): eyebrow "Dining", H2
     "Culinary Excellence", subtext; 3 venue cards (title + cuisine
     descriptor + hours): The Azure (Contemporary Fine Dining — fresh
     seafood and seasonal tasting menus — Dinner 6:00–11:00 PM), Coral Bar
     (Craft Cocktails …), Sunrise Cafe (…).
  7. Gallery (`#gallery`, `bg-gray-50 dark:bg-gray-900`): eyebrow "Gallery",
     H2 "A Glimpse of Paradise", subtext; 6 images with captions: Resort
     infinity pool overlooking the ocean / Luxurious hotel suite with ocean
     view / Pristine private beach at sunset / Spa treatment room with
     relaxing ambiance / Elegant restaurant with ambient lighting / Grand
     hotel lobby with modern design.
  8. Testimonials (`#testimonials`, dark `bg-gray-950`): eyebrow "Guest
     Reviews", H2 "What Our Guests Say", subtext; 6 quote cards (quote +
     name + tag): Victoria Hartwell — Traveled with Family, James & Olivia
     Chen — Anniversary Celebration, + 4 more.
  9. FAQ (`#faq`, `bg-white dark:bg-gray-950`): H2 "Frequently Asked
     Questions"; 5 accordion items (aria-expanded buttons):
     check-in/check-out times, cancellation policy, pets allowed, airport
     transfer, room service.
  10. CTA band (`bg-gradient-to-br from-primary-700 to-primary-900 py-20
lg:py-28`): H2 "Make Your Stay Extraordinary", subtext
      ("Discover our exclusive seasonal packages and special offers…"),
      gold "Book Your Stay" + ghost "View Offers" buttons.
  11. Footer (`bg-gray-900 pt-16 text-gray-300 lg:pt-24`): brand + blurb
      ("An exquisite oceanfront resort where luxury meets tranquility.
      Unforgettable stays await.") + contact (1 Ocean Drive, Miami Beach,
      FL 33139 · (555) 456-7890 · reservations@…); link columns Hotel
      (Rooms, Amenities, Dining, Spa) / Explore (Local Attractions,
      Activities, Events, Transportation) / Guest Services (Concierge, FAQ,
      Accessibility, Policies); newsletter "Stay Updated" (email input +
      Subscribe); bottom bar © 2026 + Privacy Policy / Terms of Service /
      Style Guide.
  - Extras: skip-to-content link, mobile menu (aria-expanded), dark-mode
    toggle (class-based `.dark`, persisted to localStorage), scroll-reveal
    animations, back-to-top floating button (fixed bottom-right).
- **Design tokens extracted from `Base.Exk2XG8Q.css` + DOM (2026-08-09):**
  - Brand **primary = deep blue** (Tailwind blue scale): 100 `#dbeafe`,
    200 `#bfdbfe`, 300 `#93c5fd`, 400 `#60a5fa` (on dark), 500 `#3b82f6`,
    600 `#1e40af`, 700 `#1e3a8a` (CTA gradient start), 900 `#172554`
    (gradient end, implied); CTA band `bg-gradient-to-br from-primary-700
to-primary-900`.
  - **Accent = gold/amber** (buttons, CTAs, headline highlight): 100
    `#fef3c7`, 400 `#fbbf24`, 500 `#f59e0b` (button bg), 600 `#d97706`
    (hover), 700 `#b45309`.
  - Neutrals: white; gray-50 `#f9fafb` (stats/gallery), gray-100 `#f3f4f6`,
    gray-200 `#e5e7eb`, gray-300 `#d1d5db` (borders), gray-700 `#374151`,
    gray-800 `#1f2937`, gray-900 `#111827`, gray-950 `#030712` (dark
    sections), slate-900 `#0f172a`.
  - Fonts: **Playfair Display** (400–800, headings, Google Fonts) +
    **Plus Jakarta Sans** (300–800, body, Google Fonts).
  - Buttons: `rounded-lg bg-accent-500 text-white` hover `bg-accent-600`;
    nav CTA `px-5 py-2.5 text-sm font-medium`; hero CTA `px-8 py-3
shadow-lg shadow-accent-500/25`; ghost/outline buttons on the CTA band
    (white border).
  - Cards: image cards with price overlay, `rounded-*` (xl/lg), feature
    chips; section rhythm `py-20 lg:py-28`; alternating dark
    (gray-950/gray-900) and light (gray-50/white) bands; booking bar =
    dark glass (translucent dark bg, blur, white text, gold button).
  - Dark mode: class-based `.dark` on root — gray-950/gray-900 bands swap
    with white/gray-50; text gray-100/gray-400.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sapphire-<n>/<w>/<h>`); icons → lucide-react
  (verify exports — brand icons removed; Waves, BedDouble, Dumbbell,
  Utensils, ConciergeBell, Umbrella, Car, Calendar, Users, Clock, MapPin,
  Phone, Mail, Menu, X, ChevronDown, ArrowUp, ArrowRight, Check are safe);
  fonts via Google Fonts `<link>`; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; booking widget = a small client-side form hook (date
  inputs + guests select + inline availability confirmation on submit), no
  backend; counters = client-side count-up hook (values also asserted as
  final text).

Sapphire lives in `apps/sapphire` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sapphire",
anchor links to the page's sections, a "Book Now" CTA, a dark-mode toggle,
and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Sapphire page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sapphire" and links to
  About, Rooms, Amenities, Dining, Gallery, Rates, Blog, Experiences, and
  Contact
- **AND** the navbar SHALL show a gold "Book Now" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode
- **AND** the choice SHALL persist across reloads

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section with booking widget

The system SHALL render a full-screen hero with a headline, a blurb, and a
floating booking widget with check-in/check-out date inputs, a guests
select, and a "Check Availability" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Experience Timeless Luxury"
- **AND** it SHALL show the Miami Beach blurb text
- **AND** it SHALL show a scroll indicator

#### Scenario: Booking widget fields

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the booking widget
- **THEN** it SHALL show a Check-in date input and a Check-out date input
- **AND** a Guests select with the options 1, 2, 3, 4, and 5+ Guests
- **AND** a gold "Check Availability" button

#### Scenario: Availability submission

- **GIVEN** the booking widget is displayed
- **WHEN** the user submits valid check-in/check-out dates and a guest
  count
- **THEN** the widget SHALL show an inline availability confirmation
  message

### Requirement: Stats strip

The system SHALL render a stats strip with four resort metrics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show the metrics 10000+ Guests Hosted, 150+ Luxury
  Rooms, 4.9 Guest Rating, and 25+ Years of Service

### Requirement: Rooms & Suites section

The system SHALL render a rooms section with three room cards, each with a
price, feature chips, and a booking button.

#### Scenario: Rooms content

- **GIVEN** the page is rendered
- **WHEN** the rooms section is displayed
- **THEN** it SHALL contain a heading "Rooms & Suites"
- **AND** it SHALL show cards for Deluxe Ocean Room ($299/night), Premium
  Suite ($499/night), and Presidential Villa ($899/night)
- **AND** each card SHALL show an image, a blurb, four feature chips
  (e.g. King Bed, Ocean View, 45 sqm, Balcony), and a "Book This Room"
  button

### Requirement: Amenities section

The system SHALL render an amenities section with six icon cards.

#### Scenario: Amenities content

- **GIVEN** the page is rendered
- **WHEN** the amenities section is displayed
- **THEN** it SHALL contain a heading "World-Class Amenities"
- **AND** it SHALL show cards for Infinity Pool, Full-Service Spa, Fine
  Dining, Fitness Center, Private Beach, and Concierge
- **AND** each card SHALL show an icon tile, a title, and a blurb

### Requirement: Dining section

The system SHALL render a dining section with three venue cards.

#### Scenario: Dining content

- **GIVEN** the page is rendered
- **WHEN** the dining section is displayed
- **THEN** it SHALL contain a heading "Culinary Excellence"
- **AND** it SHALL show venues The Azure (Contemporary Fine Dining),
  Coral Bar (Craft Cocktails), and Sunrise Cafe
- **AND** each venue SHALL show a cuisine descriptor and opening hours

### Requirement: Gallery section

The system SHALL render a gallery section with six captioned images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Paradise"
- **AND** it SHALL show six images with captions, including "Resort
  infinity pool overlooking the ocean" and "Grand hotel lobby with modern
  design"

### Requirement: Testimonials section

The system SHALL render a testimonials section with six guest quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Guests Say"
- **AND** it SHALL show six quote cards, each with a quote, a guest name,
  and a tag (e.g. Victoria Hartwell — Traveled with Family, James & Olivia
  Chen — Anniversary Celebration)

### Requirement: FAQ section

The system SHALL render an FAQ section with five accordion items.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show five questions covering check-in/check-out times,
  cancellation policy, pets, airport transfer, and room service
- **WHEN** the user activates a question button
- **THEN** its answer SHALL expand and the button SHALL reflect the
  expanded state via `aria-expanded`

### Requirement: CTA band

The system SHALL render a gradient CTA band with booking and offers
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Make Your Stay Extraordinary" on a
  blue gradient background
- **AND** it SHALL show a "Book Your Stay" button and a "View Offers"
  button

### Requirement: Footer

The system SHALL render a dark footer with brand info, link columns, a
newsletter form, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name, a blurb, and contact details
  (address, phone, email)
- **AND** it SHALL show link columns Hotel (Rooms, Amenities, Dining,
  Spa), Explore (Local Attractions, Activities, Events, Transportation),
  and Guest Services (Concierge, FAQ, Accessibility, Policies)
- **AND** it SHALL show a "Stay Updated" newsletter form with an email
  input and a Subscribe button
- **AND** the bottom bar SHALL show the copyright line plus Privacy
  Policy, Terms of Service, and Style Guide links

#### Scenario: Newsletter submission

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits a valid email address
- **THEN** the form SHALL show a success confirmation

### Requirement: Accessibility and extras

The system SHALL include a skip-to-content link and a back-to-top button.

#### Scenario: Skip link

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sapphire`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh sapphire` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Fidelity: section order 1:1 with the demo; brand tokens from this
      spec (`primary` blue scale, `accent` gold scale, Playfair Display +
      Plus Jakarta Sans, `rounded-lg` gold buttons) in `@theme`
- [ ] Images are picsum placeholders (never copied assets); brand icons
      are inline SVG (lucide-react removed them)
- [ ] PR description states: source template (ColorLib "The Grand Azure"),
      preview URL, design tokens used, renames (Sapphire, email/domain,
      placeholder images)
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
