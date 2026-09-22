# Template: AzurePeak (Luxury Hotel / Resort)

## Purpose

AzurePeak is a single-page luxury hotel/resort landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Grand Azure" hotel design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original design is a premium oceanfront hotel page with a full-viewport
hero, booking form, stats bar, rooms showcase, amenities grid, dining venues,
photo gallery, testimonials, FAQ accordion, and a newsletter CTA — all on a
dark/light theme with serif headings (Playfair Display) and sans-serif body
(Plus Jakarta Sans).

## Design reference (replication findings)

- **Original:** ColorLib "The Grand Azure" — free hotel template
  (source: https://colorlib.com/wp/template/the-grand-azure/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/grandazure/`
  (HTTP 200) + stylesheet `_astro/Base.CVaHg8hR.css`. The preview slug is
  `grandazure` (not `the-grand-azure`).
- **Section order (1:1):** Navbar → Hero (booking form) → Stats Bar →
  Rooms & Suites → Amenities → Dining → Gallery → Testimonials → FAQ → CTA → Footer
- **Design tokens:**
  - Primary brand color: **#1e40af** (blue-800)
  - Primary dark: **#1e3a8a** (blue-900)
  - Primary light: **#60a5fa** (blue-400)
  - Accent color: **#f59e0b** (amber-500)
  - Body font: "Plus Jakarta Sans" via Google Fonts
  - Heading font: "Playfair Display" via Google Fonts
  - Card radius: rounded-2xl; Button radius: rounded-lg; Badge radius: rounded-full
  - Section backgrounds: alternating white / gray-50 / dark (gray-950)
  - Glass morphism on booking form: bg-primary-900/60, backdrop-blur-md

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navbar with backdrop blur, logo text
"AzurePeak", navigation links (Rooms, Amenities, Dining, Gallery, Testimonials,
FAQ), a "Book Now" CTA button, a dark mode toggle, and a mobile hamburger menu.

#### Scenario: Desktop navbar renders with all links and CTA

- **GIVEN** the page is rendered on a desktop viewport (≥1024px)
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the logo text "AzurePeak" linking to the top
- **AND** it SHALL show links to Rooms, Amenities, Dining, Gallery, Testimonials, FAQ
- **AND** it SHALL show a "Book Now" CTA button
- **AND** it SHALL show a dark mode toggle button
- **AND** the navbar SHALL have backdrop blur and a subtle bottom border

#### Scenario: Mobile navbar shows hamburger menu

- **GIVEN** the page is rendered on a mobile viewport (<1024px)
- **WHEN** the hamburger toggle is displayed
- **THEN** clicking it SHALL toggle a slide-down mobile nav with all links
- **AND** clicking a link SHALL close the mobile nav

#### Scenario: Navbar dark mode toggle

- **GIVEN** the user clicks the dark mode toggle
- **WHEN** dark mode activates
- **THEN** the toggle SHALL call the dark mode callback
- **AND** the navbar SHALL adapt to light-on-dark colors

### Requirement: Hero section with booking form

The system SHALL render a full-viewport hero section with an ocean background
image, gradient overlay, heading "Experience Luxury", subheading, and a
glass-morphism booking form with check-in, check-out, guests, rooms fields,
and a "Check Availability" button.

#### Scenario: Hero displays background image and heading

- **GIVEN** the page is rendered
- **WHEN** the hero section loads
- **THEN** it SHALL display a full-viewport section with an ocean background image
- **AND** it SHALL display a gradient overlay over the image
- **AND** the heading "Experience Luxury" SHALL be centered in white serif font
- **AND** a subheading about the oceanfront resort SHALL be displayed

#### Scenario: Booking form fields render correctly

- **GIVEN** the hero section is visible
- **WHEN** the booking form is displayed
- **THEN** four input fields SHALL be displayed: check-in date, check-out date, guests, rooms
- **AND** a "Check Availability" button SHALL be visible
- **AND** the form SHALL have a glass-morphism appearance

#### Scenario: Booking form is responsive

- **GIVEN** the user is on a mobile viewport
- **WHEN** the booking form renders
- **THEN** fields SHALL stack vertically

### Requirement: Stats bar

The system SHALL render a stats bar with four metrics: 5+ Years of Excellence,
10000+ Happy Guests, 150+ Luxury Rooms, 25+ Awards Won.

#### Scenario: Stats section displays four metrics

- **GIVEN** the page is rendered
- **WHEN** the stats section is visible
- **THEN** four stats SHALL be displayed in a horizontal grid
- **AND** stat numbers SHALL be in the primary brand color (blue)
- **AND** stat labels SHALL be in muted gray text

### Requirement: Rooms and suites section

The system SHALL render a Rooms & Suites section with three room cards
(Deluxe Ocean Room, Premium Suite, Presidential Villa) in a 3-column grid,
each with an image, price badge, name, description, and amenity icons.

#### Scenario: Room cards display with images, prices, and details

- **GIVEN** the Rooms & Suites section is visible
- **WHEN** the section loads
- **THEN** three room cards SHALL be displayed in a 3-column grid
- **AND** each card SHALL have an image, price badge, room name, description, and amenity icons
- **AND** price badges SHALL be accent-colored (amber) with white text

#### Scenario: Room cards are responsive

- **GIVEN** the user is on a mobile viewport
- **WHEN** the rooms section renders
- **THEN** cards SHALL stack vertically in a single column

### Requirement: Amenities section

The system SHALL render an amenities section with six items in a 3×2 grid:
Infinity Pool, Full-Service Spa, Fine Dining, Fitness Center, Private Beach,
Concierge.

#### Scenario: Six amenities display in a grid

- **GIVEN** the Amenities section is visible
- **WHEN** the section loads
- **THEN** six amenity cards SHALL be displayed in a 3×2 grid
- **AND** each card SHALL have an icon, title, and short description

### Requirement: Dining section

The system SHALL render a dining section with three venue cards (The Azure,
Coral Bar, Sunrise Cafe) in a 3-column grid.

#### Scenario: Three dining venues display

- **GIVEN** the Dining section is visible
- **WHEN** the section loads
- **THEN** three venue cards SHALL be displayed in a 3-column grid
- **AND** each card SHALL have an image, venue name, and description

### Requirement: Gallery section

The system SHALL render a gallery section with a grid of placeholder images
and the heading "A Glimpse of Paradise".

#### Scenario: Photo gallery displays in a grid

- **GIVEN** the Gallery section is visible
- **WHEN** the section loads
- **THEN** a grid of placeholder images SHALL be displayed
- **AND** images SHALL use picsum.photos URLs with deterministic seeds
- **AND** the section heading SHALL read "A Glimpse of Paradise"

### Requirement: Testimonials section

The system SHALL render a testimonials section with three cards containing
star ratings, quotes, and author names.

#### Scenario: Guest testimonials display with ratings

- **GIVEN** the Testimonials section is visible
- **WHEN** the section loads
- **THEN** three testimonial cards SHALL be displayed
- **AND** each card SHALL have star ratings, a quote, and author name/role
- **AND** the section heading SHALL read "What Our Guests Say"

### Requirement: FAQ section

The system SHALL render an FAQ section with an accordion of expandable items.

#### Scenario: FAQ accordion renders and toggles

- **GIVEN** the FAQ section is visible
- **WHEN** the section loads
- **THEN** multiple FAQ items SHALL be displayed in an accordion
- **AND** clicking a question SHALL toggle the answer visibility
- **AND** only one answer SHALL be expanded at a time

### Requirement: CTA / newsletter section

The system SHALL render a CTA section with a gradient background, heading
"Make Your Stay Extraordinary", and an email input with "Subscribe" button.

#### Scenario: CTA section displays email signup

- **GIVEN** the CTA section is visible
- **WHEN** the section is displayed
- **THEN** a gradient background SHALL be displayed
- **AND** the heading "Make Your Stay Extraordinary" SHALL be in white
- **AND** an email input and "Subscribe" button SHALL be centered

### Requirement: Footer

The system SHALL render a dark footer with logo, description, Quick Links,
Contact Info, Connect columns, social icons, and a "Component Dock" link.

#### Scenario: Footer renders with links and social icons

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** a dark footer SHALL be displayed
- **AND** the site logo/description, Quick Links, Contact Info, and Connect columns SHALL be visible
- **AND** social icons (Facebook, Instagram, X) SHALL be displayed
- **AND** a copyright line and "Component Dock" link SHALL be at the bottom

### Requirement: Dark mode

The system SHALL support dark mode toggled via the navbar, persisted in
localStorage, and applied to all sections.

#### Scenario: Dark mode toggle switches all sections

- **GIVEN** the user clicks the dark mode toggle
- **WHEN** dark mode activates
- **THEN** all sections SHALL render with dark backgrounds and light text
- **AND** the toggle SHALL persist across page reloads via localStorage

### Requirement: Responsive design

The system SHALL be fully responsive across mobile, tablet, and desktop viewports.

#### Scenario: Page is fully responsive

- **GIVEN** the user views the page on any viewport
- **WHEN** the page renders
- **THEN** all sections SHALL adapt: grids collapse to fewer columns, text scales
  down, navigation switches to mobile menu, booking form stacks vertically
