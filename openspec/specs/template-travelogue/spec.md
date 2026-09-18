# Template: Travelogue (Travel Agency Landing)

## Purpose

Travelogue is a single-page travel-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Travel Wordpress Themes" free template (source:
https://colorlib.com/wp/template/travel-wordpress-themes/), built under a
DIFFERENT name (**Travelogue**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a full-width hero-driven travel page branded "The Valley"
with a mountain/valley logo. The hero features an aerial photograph of
turquoise ocean water with boats, a large white heading ("Travel WordPress
Themes"), and a dark semi-transparent "Let's go now" CTA button. A
transparent navbar overlays the hero with white text links (Home, Destination,
Regions, Shop, Blog), a phone number, and a search icon. Left/right slider
arrows suggest a carousel-style hero.

**Design reference (replication findings):**

- **Original:** ColorLib "Travel Wordpress Themes" — free travel agency
  website template (source: https://colorlib.com/wp/template/travel-wordpress-themes/).
- **Live preview DOM:** https://preview.colorlib.com/theme/travel-wordpress-themes/
  returned HTTP 404 — preview unreachable. Fallback to TEMPLATES.md screenshot
  (`travel-wordpress-themes.jpg`) as sole reference.
- **Screenshot analysis:** The screenshot shows:
  1. Transparent navbar with "The Valley" mountain logo (left), navigation
     links (Home, Destination, Regions, Shop, Blog), phone number
     (+03 86 600 888 33), search icon (right).
  2. Full-viewport hero with an aerial photo of turquoise/teal ocean water
     with traditional boats, large white serif/display heading
     ("Travel WordPress Themes"), dark semi-transparent rounded CTA button
     ("Let's go now"), and left/right chevron slider arrows.
  3. The overall aesthetic is: turquoise/teal ocean tones, white text on dark
     overlay, transparent navbar, luxury travel vibe.
- **Design tokens (estimated from screenshot):**
  - Brand color: **#00b4d8** (turquoise/teal from ocean imagery)
  - Hero overlay: semi-transparent dark (rgba(0,0,0,0.3)–rgba(0,0,0,0.5))
  - Text: **#ffffff** (white) on hero, **#333333** (dark) on light sections
  - Button: dark semi-transparent background, white text, rounded corners
    (~4px radius)
  - Font: **"Playfair Display"** or similar serif/display for hero heading;
    **"Poppins"** or similar sans-serif for body/nav
  - Navbar: transparent background, white text links
  - Overall: light/airy with ocean-teal accents
- **Section order (from screenshot — only hero visible, full structure inferred):**
  1. Header/Navbar: transparent, logo + nav links + phone + search
  2. Hero: full-viewport, aerial ocean photo, heading, CTA, slider arrows
  3. (Inferred) Destinations: featured travel destinations/cards
  4. (Inferred) About/Features: why choose this agency
  5. (Inferred) Popular Trips: tour packages with images and prices
  6. (Inferred) Testimonials: customer reviews
  7. (Inferred) Newsletter: email signup
  8. Footer: links, social, copyright, Component Dock attribution

**Recreation decisions:** repo-standard Navbar (site name "Travelogue",
Home link, dark-mode toggle) + hero with seeded picsum aerial photo +
heading + CTA button; destinations section with card grid; features/about
section; popular trips with pricing; testimonials; newsletter signup;
footer with Component Dock link. All images picsum-seeded
(`picsum.photos/seed/travelogue-N/w/h`). Google Fonts via `<link>`.

Travelogue lives in `apps/travelogue` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Travelogue",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the navigation bar
- **THEN** the system SHALL display "Travelogue" as the site name
- **AND** the system SHALL display a "Home" link
- **AND** the system SHALL display a dark-mode toggle button

#### Scenario: Navbar transparency

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the navigation bar
- **THEN** the navbar SHALL have a transparent background overlaying the hero

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a background image,
a heading, a call-to-action button, and slider navigation arrows.

#### Scenario: Hero content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the system SHALL display a heading "Explore the World"
- **AND** the system SHALL display a subheading describing travel services
- **AND** the system SHALL display a "Let's Go" call-to-action button

#### Scenario: Hero background

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the hero SHALL display a full-viewport background image
- **AND** the background SHALL have a dark semi-transparent overlay
- **AND** all text SHALL be white and readable over the overlay

#### Scenario: Hero slider arrows

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the hero section
- **THEN** the system SHALL display left and right chevron navigation arrows
- **AND** the arrows SHALL be positioned at the vertical center of the hero

### Requirement: Destinations section

The system SHALL render a destinations section showcasing travel destinations.

#### Scenario: Destinations content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the destinations section
- **THEN** the system SHALL display a section heading "Popular Destinations"
- **AND** the system SHALL display a grid of destination cards
- **AND** each card SHALL have an image, a destination name, and a brief description

#### Scenario: Destination cards

- **GIVEN** the destinations section is visible
- **WHEN** the user views a destination card
- **THEN** the card SHALL display a seeded placeholder image
- **AND** the card SHALL display the destination name
- **AND** the card SHALL display a short description

### Requirement: Features section

The system SHALL render a features section explaining why users should
choose this travel agency.

#### Scenario: Features content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the features section
- **THEN** the system SHALL display a section heading "Why Choose Us"
- **AND** the system SHALL display 3–4 feature cards
- **AND** each card SHALL have an icon, a title, and a description

### Requirement: Popular trips section

The system SHALL render a popular trips section with tour packages.

#### Scenario: Trips content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the trips section
- **THEN** the system SHALL display a section heading "Popular Trips"
- **AND** the system SHALL display a grid of trip cards
- **AND** each card SHALL have an image, trip name, duration, price, and a
  "Book Now" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with customer reviews.

#### Scenario: Testimonials content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the system SHALL display a section heading "What Our Clients Say"
- **AND** the system SHALL display 2–3 testimonial cards
- **AND** each card SHALL have a quote, the customer name, and a role/location

### Requirement: Newsletter section

The system SHALL render a newsletter signup section.

#### Scenario: Newsletter content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user scrolls to the newsletter section
- **THEN** the system SHALL display a heading "Subscribe to Our Newsletter"
- **AND** the system SHALL display an email input field
- **AND** the system SHALL display a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with navigation, social links, and
Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the Travelogue page is rendered
- **WHEN** the user views the footer
- **THEN** the footer SHALL display the site name "Travelogue"
- **AND** the footer SHALL display navigation links
- **AND** the footer SHALL display a "Made with Component Dock" link
  pointing to https://www.componentdock.com/
- **AND** the footer SHALL display a copyright notice

### Requirement: Dark mode

The system SHALL support dark mode via a toggle in the navbar.

#### Scenario: Dark mode toggle

- **GIVEN** the Travelogue page is rendered in light mode
- **WHEN** the user clicks the dark-mode toggle
- **THEN** the page SHALL switch to dark mode
- **AND** all sections SHALL update their backgrounds and text colors
  for dark-mode readability

#### Scenario: Dark mode persistence

- **GIVEN** the user has enabled dark mode
- **WHEN** the user reloads the page
- **THEN** the page SHALL remain in dark mode

## Verification checklist

- [ ] Navbar renders with "Travelogue" site name and Home link
- [ ] Hero displays full-viewport background with overlay, heading, CTA, arrows
- [ ] Destinations section displays card grid with images and descriptions
- [ ] Features section displays icon cards with titles and descriptions
- [ ] Popular trips section displays trip cards with pricing
- [ ] Testimonials section displays customer quotes
- [ ] Newsletter section displays email input and subscribe button
- [ ] Footer displays Component Dock link (https://www.componentdock.com/)
- [ ] Dark mode toggle works and persists across reloads
- [ ] All images use picsum-seeded placeholders
- [ ] Google Fonts loaded via <link> in index.html
- [ ] No ColorLib references in app code (comments, strings, data)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeCheck passes with strict TypeScript
- [ ] Lint passes (oxlint + prettier)
- [ ] Build succeeds (vite build)
