# Template: Grandazure (Astro Template)

## Purpose

Grandazure is a single-page luxury resort / hotel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Grand Azure" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "The Grand Azure" — oceanfront luxury resort /
  hotel landing template
  (source: https://colorlib.com/wp/template/the-grand-azure/).
- **Demo DOM analyzed:** https://grandazure-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.Exk2XG8Q.css` (66KB) extracted; the
  pages.dev slug is `grandazure` per
  `preview.colorlib.com/assets/js/products.js`;
  `https://preview.colorlib.com/theme/the-grand-azure/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev`). The
  TEMPLATES.md screenshot is the visual reference; the design below is
  reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo + links About, Rooms, Amenities,
     Dining, Gallery, Rates, Blog, Experiences, Contact + "Book Now"
     button; mobile nav.
  2. Hero (`min-h-screen` image): h1 "Experience Timeless Luxury", blurb,
     "Check Availability" button.
  3. Rooms & Suites: 3 cards (Deluxe Ocean Room, Premium Suite, Presidential
     Villa) + "Book This Room".
  4. Amenities: "World-Class Amenities" — 6 cards (Infinity Pool,
     Full-Service Spa, Fine Dining, Fitness Center, Private Beach,
     Concierge).
  5. Dining: "Culinary Excellence" — 3 venues (The Azure, Coral Bar,
     Sunrise Cafe) with hours.
  6. Gallery: "A Glimpse of Paradise" — 6 images with captions.
  7. Testimonials: "What Our Guests Say" — guest quotes.
  8. FAQ: "Frequently Asked Questions" — 5 accordion items (check-in/out,
     cancellation, pets, airport transfer, room service).
  9. CTA (`bg-gradient-to-br from-primary-700 to-primary-900`): "Make Your
     Stay Extraordinary" + "Book Your Stay" / "View Offers".
  10. Footer (`bg-gray-900`): brand blurb + address/phone/email + Hotel /
      Explore / Guest Services columns + "Stay Updated" newsletter +
      copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **deep blue scale** — #1e40af (blue-800 primary; #1e3a8a,
    #172554 darker; #2563eb, #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe,
    #eff6ff lighter). CTA gradient from-primary-700 to-primary-900. Gold
    accent #fbbf24 (stars/accents).
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Fonts: **"Playfair Display"** (display, Georgia serif) + **"Plus Jakarta
    Sans"** (body) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via dark:bg-gray-900 /
    dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/grandazure-<n>/<w>/<h>`); icons → lucide-react
  (Waves, BedDouble, Sparkles, UtensilsCrossed, Dumbbell, Umbrella, Bell,
  Star, ChevronDown, MapPin, Phone, Mail, Clock, CalendarCheck, Plane,
  PawPrint, ConciergeBell); Playfair Display + Plus Jakarta Sans via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Grandazure lives in `apps/grandazure` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "The Grand
Azure", anchor links to the page's sections, a "Book Now" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Grandazure page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "The Grand Azure" and links
  to Rooms and Amenities
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline and a booking
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Experience Timeless Luxury"
- **AND** it SHALL show a "Check Availability" button

### Requirement: Rooms section

The system SHALL render a rooms section with at least three room cards.

#### Scenario: Rooms content

- **GIVEN** the page is rendered
- **WHEN** the rooms section is displayed
- **THEN** it SHALL contain a heading "Rooms & Suites"
- **AND** it SHALL show cards for Deluxe Ocean Room, Premium Suite, and
  Presidential Villa

### Requirement: Amenities section

The system SHALL render an amenities section with six cards.

#### Scenario: Amenities content

- **GIVEN** the page is rendered
- **WHEN** the amenities section is displayed
- **THEN** it SHALL contain a heading "World-Class Amenities"
- **AND** it SHALL show cards for Infinity Pool, Full-Service Spa, and Fine
  Dining

### Requirement: Dining section

The system SHALL render a dining section with at least three venues.

#### Scenario: Dining content

- **GIVEN** the page is rendered
- **WHEN** the dining section is displayed
- **THEN** it SHALL contain a heading "Culinary Excellence"
- **AND** it SHALL show venues for The Azure, Coral Bar, and Sunrise Cafe

### Requirement: Gallery section

The system SHALL render a gallery section with captioned images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Paradise"
- **AND** it SHALL show at least six captioned images

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Guests Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

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

The system SHALL render a closing CTA with a headline and booking buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Make Your Stay Extraordinary"
- **AND** it SHALL show "Book Your Stay" and "View Offers" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Hotel, Explore, Guest Services) and
  a copyright line
- **AND** it SHALL show the address, phone number, and email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Grandazure app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "The Grand Azure — Resort Template"
