# Template: Lodgely (Luxury Hotel Landing)

> Recreation of ColorLib "Sogo" (https://colorlib.com/wp/template/sogo/)

## Purpose

Lodgely is a luxury hotel landing template. It recreates the ColorLib **Colorlib Booking 16** design (https://colorlib.com/wp/template/colorlib-booking-16/, preview: https://colorlib.com/etc/bforms/colorlib-booking-16/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design Tokens

- **Font pairing:** Playfair Display (headings, serif) + Roboto (body, sans-serif)
- **Primary accent:** #ffba5a (golden amber)
- **Body text:** #6c757d (muted gray)
- **Headings:** #000000 (black)
- **Light background:** #f2f4fb
- **Overlay:** rgba(0, 0, 0, 0.45) on hero/CTA sections
- **Button:** rounded-full (pill shape), primary-500 bg, white text
- **Section padding:** 5rem vertical (lg: 7rem)

## Sections (in order)

### 1. Navbar

- Fixed top, transparent on hero, white bg on scroll
- Brand name "Lodgely" (Playfair Display, bold)
- Links: Home, Rooms, Restaurant, Events, Contact
- Mobile: hamburger menu toggle

### 2. Hero

- Full-screen height, background image with dark overlay
- Centered text: "Welcome To 5 Star Hotel" (subtitle with star icon)
- "A Best Place To Stay" (heading, large)
- Scroll-down indicator

### 3. Booking Form

- Light gray background (#f2f4fb)
- Form row: Check In (date), Check Out (date), Adults (select), Children (select), Check Availability button
- Pill-shaped button, golden amber

### 4. Welcome / About

- Split layout: large image left, text right
- Heading "Welcome!"
- Body paragraph
- "Learn More" button + "or See video" link

### 5. Rooms & Suites

- Centered heading "Rooms & Suites"
- 3-column grid of room cards
- Each card: image, room name, price per night
- Rooms: Single Room ($90), Family Room ($120), Presidential Room ($250)

### 6. Photos Gallery

- Centered heading "Photos"
- Grid of 6 images (3x2)

### 7. Restaurant Menu

- Full-width background image with dark overlay
- Heading "Our Restaurant Menu"
- Tabbed navigation: Mains, Desserts, Drinks
- 2-column grid of menu items per tab
- Each item: price (golden), name, description

### 8. Testimonials

- Centered heading "People Says"
- 3 testimonial cards: avatar, quote, author name

### 9. Events

- Light gray background
- Centered heading "Events"
- 3 event cards: image, date, title, excerpt

### 10. CTA Banner

- Full-width background image with dark overlay
- "A Best Place To Stay. Reserve Now!" heading
- "Reserve Now" outline button (white border, pill shape)

### 11. Footer

- 4-column layout: About links, Rooms links, Contact info, Newsletter form
- Copyright bar with Component Dock link
- Social media icons (Facebook, Twitter, LinkedIn, Instagram)

## Requirements

### Feature: Lodgely template behaviour

Feature: Lodgely hotel template

#### Scenario: Hero renders headline and subtitle

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see the heading "A Best Place To Stay"
- **AND** I should see "Welcome To" with star icons

#### Scenario: Booking form is present

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a booking form with check-in and check-out date fields
- **AND** I should see adults and children select fields
- **AND** I should see a "Check Availability" button

#### Scenario: Booking form prevents default submission

- **GIVEN** I visit the Lodgely homepage
- **WHEN** I click the "Check Availability" button
- **THEN** the form should not navigate away

#### Scenario: Welcome section renders

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a "Welcome!" heading
- **AND** I should see a "Learn More" button

#### Scenario: Rooms and suites are displayed

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a "Rooms & Suites" heading
- **AND** I should see 3 room cards with names and prices

#### Scenario: Photos gallery is displayed

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a "Photos" heading
- **AND** I should see a gallery of images

#### Scenario: Restaurant menu has tabs

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see "Our Restaurant Menu" heading
- **AND** I should see Mains, Desserts, and Drinks tabs
- **AND** the Mains tab should be active by default

#### Scenario: Restaurant menu tab switching

- **GIVEN** I visit the Lodgely homepage
- **WHEN** I click the "Desserts" tab
- **THEN** the Desserts tab should be active
- **AND** I should see dessert menu items

#### Scenario: Testimonials are displayed

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a "People Says" heading
- **AND** I should see testimonial cards with quotes and authors

#### Scenario: Events section is displayed

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see an "Events" heading
- **AND** I should see 3 event cards

#### Scenario: CTA banner with reserve button

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see "Reserve Now" text
- **AND** I should see a "Reserve Now" link

#### Scenario: Footer contains Component Dock link

- **GIVEN** I visit the Lodgely homepage
- **THEN** the footer should contain a "Component Dock" link
- **AND** the link should point to https://www.componentdock.com/

#### Scenario: Footer has newsletter form

- **GIVEN** I visit the Lodgely homepage
- **THEN** I should see a newsletter email input
- **AND** I should see a subscribe button

#### Scenario: Newsletter form clears on submit

- **GIVEN** I visit the Lodgely homepage
- **WHEN** I enter an email and click subscribe
- **THEN** the email input should be cleared

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lodgely/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lodgely/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
