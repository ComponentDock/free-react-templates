# Template: Ease (Hotel Booking / Hospitality)

## Purpose

Recreation of the ColorLib **Unwind** template — a hotel booking agency single-page website.

- **Source:** https://colorlib.com/wp/template/unwind/
- **Preview:** https://preview.colorlib.com/theme/unwind/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unwind-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `ease` (apps/ease, @free-react-templates/ease)

## Design tokens

| Token            | Value                                         | Source                                              |
| ---------------- | --------------------------------------------- | --------------------------------------------------- |
| Brand accent     | `#c5a880` (warm gold/brandy)                  | Links, hover states, service icons, heading accents |
| Primary button   | `#0d6efd` (Bootstrap blue)                    | `.btn-primary` (default Bootstrap 5)                |
| Hero overlay     | `#222222` at ~0.5–0.7 opacity                 | `.hero-wrap .overlay`, `.vid-section .overlay`      |
| Dark background  | `#151515`, `#1a1a1a`                          | Footer, dark sections                               |
| Light section bg | `#f8f9fa` (Bootstrap light)                   | `.bg-light` sections                                |
| Body font        | `"Nunito", Arial, sans-serif`                 | Primary body text                                   |
| Heading font     | `"Old Standard TT", Arial, sans-serif`        | Headings, decorative text                           |
| Border radius    | Default Bootstrap (0.375rem buttons)          | Standard Bootstrap 5                                |
| Button style     | Bootstrap `.btn-primary` with rounded corners | Standard Bootstrap 5 button                         |

## Visual design (from screenshot)

Dark, elegant hotel booking template with:

- Full-viewport hero with dark overlay on hotel imagery, white centered text
- Gold/brandy accent color (#c5a880) on links and icons
- Clean white sections with warm photography
- Dark video/parallax section with overlay
- Light gray testimonial and gallery sections
- Footer with dark background, multiple columns (logo, services, quick links, contact)

## Requirements

### Hero Section

#### Scenario: Full-viewport hero with booking form

- **GIVEN** the user visits the home page
- **THEN** a full-viewport hero section is displayed with a dark overlay background
- **AND** the heading reads "Most Relaxing Place"
- **AND** a booking form is visible with Check-In, Check-Out, Rooms, and Guests fields
- **AND** a "Book Now" submit button is present

### About Section

#### Scenario: Hotel description with service icons

- **GIVEN** the user scrolls past the hero
- **THEN** an about section displays the heading "Unwind A Hotel Booking Agency"
- **AND** a descriptive paragraph is shown
- **AND** a "Learn More" link is visible

### Services Section

#### Scenario: Six service cards in a grid

- **GIVEN** the user views the services area
- **THEN** six service cards are displayed: Free Wifi, Easy Booking, Restaurant, Swimming Pool, Beauty & Health, Help & Support
- **AND** each card has a gold (#c5a880) icon, heading, and description
- **AND** cards have a white background with subtle shadow on hover

### Call to Action / Intro Section

#### Scenario: Parallax banner with vacation heading

- **GIVEN** the user scrolls to the intro section
- **THEN** a full-width parallax image section is shown
- **AND** the heading reads "Find the Best Hotel in Your Next Vacation"
- **AND** a CTA button is present

### Featured Rooms Section

#### Scenario: Room cards with pricing

- **GIVEN** the user views the featured rooms
- **THEN** the heading reads "Featured Rooms"
- **AND** room cards are displayed with images, names, and pricing
- **AND** a "Take A Tour" button links to more details

### Restaurant & Bar Section

#### Scenario: Restaurant showcase

- **GIVEN** the user scrolls to the restaurant area
- **THEN** the heading reads "Restaurant & Bar"
- **AND** a descriptive paragraph is shown
- **AND** food/drink imagery is displayed

### Video Section

#### Scenario: Dark parallax video background

- **GIVEN** the user reaches the video section
- **THEN** a dark overlay section with background image is displayed
- **AND** the section has a 600px height with parallax effect

### Testimonials Section

#### Scenario: Guest testimonials

- **GIVEN** the user views the testimonials
- **THEN** the heading reads "Happy Guests"
- **AND** testimonial cards are displayed with guest names and quotes
- **AND** the section has a light gray (#f8f9fa) background

### Counter Section

#### Scenario: Statistics display

- **GIVEN** the user reaches the counter section
- **THEN** numerical counters are displayed (e.g., number of rooms, guests, staff)
- **AND** counters animate on scroll into view

### Gallery Section

#### Scenario: Photo gallery grid

- **GIVEN** the user views the gallery
- **THEN** a grid of hotel photos is displayed
- **AND** images are responsive with consistent spacing

### Footer

#### Scenario: Multi-column footer

- **GIVEN** the user reaches the page bottom
- **THEN** a dark footer is displayed with the brand name "Ease Hotel Booking"
- **AND** columns include: Services, Quick Links, and Have a Questions? (contact form)
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] `npm run verify:app -- ease` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 11 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
