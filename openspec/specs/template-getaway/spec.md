# Template: Getaway (Travel Agency Landing)

## Purpose

Getaway is a single-page travel agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Vacation" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a travel agency page with an orange accent, a full-height
hero ("Make Your Tour Amazing With Us"), a search form (destination, dates,
price), a services section ("It's time to start your adventure" with 4
service cards), a statistics counter (300 tours, 24000 tourists, 200
places), best destination cards (4 locations), tour destination cards (6
Bali tours), tourist testimonials carousel, recent blog posts, and a
4-column footer. Getaway recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Vacation" — free travel agency website template
  (source: https://colorlib.com/wp/template/vacation/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/vacation/`
  (HTTP 200). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`vacation-free-template.jpeg`) confirms the visual design
  (dark hero, orange accents, travel imagery).
- **Section order (1:1):**
  1. Navbar: "Vacation" brand with "Travel Agency" subtitle + nav links
     (Home, About, Destination, Blog, Contact) + "Book Now" CTA. Dark bg.
  2. Hero: full-height bg image with dark overlay, play button, tagline
     "Travel to the any corner of the world", heading "Make Your Tour
     Amazing With Us".
  3. Search Form: overlapping card with destination, check-in/check-out
     dates, price limit dropdown, Search button.
  4. Services: heading "It's time to start your adventure" + left text
     - right 2x2 grid (Activities, Travel Arrangements, Private Guide,
       Location Manager). Light bg.
  5. Statistics: "Make Your Tour Memorable and Safe With Us" + image
     - 3 counters (300 Successful Tours, 24000 Happy Tourist, 200 Place
       Explored).
  6. Best Place Destination: 4 destination cards (Singapore, Canada,
     Thailand, Australia) with bg images and tour counts.
  7. Tour Destination: 6 tour cards with image, price/person, duration,
     location, amenities (shower, bed, mountain/beach).
  8. Testimonials: "Tourist Feedback" with bg image + 3 testimonial cards.
  9. Blog: "Recent Post" with 3 blog cards (date badge, title, excerpt).
  10. Footer: 4 columns (brand + social, Information links, Experience
      links, Contact info) + copyright with Component Dock link.
- **Design tokens extracted from preview DOM + CSS:**
  - Brand color: **#F96D00** (orange — CTA buttons, accents).
  - Dark background: **#1a1a2e** / gray-900 (navbar, hero overlay).
  - Light section bg: **#f8f9fa** / gray-50 (services, stats).
  - Font: **Poppins** (300–700) via Google Fonts.
  - Buttons: orange rounded filled, white text.
- **Recreation decisions:** repo-standard Navbar with "Getaway" brand +
  "Travel Agency" subtitle + responsive mobile menu; hero with seeded
  picsum bg photo + gradient overlay + play button + tagline + heading;
  search form with lucide icons (Search, Calendar, ChevronDown); services
  with lucide icons (Plane, Route, UserCheck, MapPin); stats with numeric
  counters; destination cards with gradient overlays; tour cards with
  amenity icons (Droplets, BedDouble, Mountain, Umbrella); testimonials
  with avatars; blog with date badges; footer with MapPin/Phone/Mail icons
  - Component Dock link. All images picsum-seeded.

Getaway lives in `apps/getaway` and uses shared components from
`packages/ui`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Getaway",
a "Travel Agency" subtitle, nav links (Home, About, Destination, Blog,
Contact), and a "Book Now" CTA button.

#### Scenario: Navbar brand and links

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the navbar
- **THEN** the brand text "Getaway" with "Travel Agency" is visible
- **AND** links for Home, About, Destination, Blog, Contact are present
- **AND** a "Book Now" CTA button is visible

#### Scenario: Mobile menu toggle

- **GIVEN** the Getaway page is rendered on a narrow viewport
- **WHEN** the user taps the menu button
- **THEN** the mobile menu expands showing all nav links
- **AND** the menu closes when a link is tapped

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image,
a play button, a tagline, and the main heading.

#### Scenario: Hero content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the hero section
- **THEN** the heading "Make Your Tour Amazing With Us" is visible
- **AND** the tagline "Travel to the any corner of the world" is visible
- **AND** a play button is displayed

### Requirement: Search form

The system SHALL render a search form with destination, check-in date,
check-out date, price limit, and a search button.

#### Scenario: Search form fields

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the search form
- **THEN** a destination text input is present
- **AND** check-in and check-out date inputs are present
- **AND** a price limit select dropdown is present
- **AND** a Search button is visible

### Requirement: Services section

The system SHALL render a services section with 4 service cards.

#### Scenario: Services content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the services section
- **THEN** the heading "It's time to start your adventure" is visible
- **AND** 4 service cards are displayed (Activities, Travel Arrangements,
  Private Guide, Location Manager)

### Requirement: Statistics section

The system SHALL render a statistics section with 3 counters.

#### Scenario: Statistics content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the statistics section
- **THEN** counters for "300 Successful Tours", "24,000 Happy Tourists",
  and "200 Places Explored" are visible

### Requirement: Best places section

The system SHALL render a best places section with 4 destination cards.

#### Scenario: Best places content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the best places section
- **THEN** 4 destination cards are displayed (Singapore, Canada, Thailand,
  Australia) with tour counts

### Requirement: Tour packages section

The system SHALL render a tour packages section with 6 tour cards.

#### Scenario: Tour packages content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the tour packages section
- **THEN** 6 tour cards are displayed with price and duration

### Requirement: Testimonials section

The system SHALL render a testimonials section with testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the testimonials section
- **THEN** testimonial cards with names and quotes are visible

### Requirement: Blog section

The system SHALL render a blog section with 3 blog post cards.

#### Scenario: Blog content

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the blog section
- **THEN** 3 blog post cards are displayed

### Requirement: Footer

The system SHALL render a footer with a Component Dock link.

#### Scenario: Footer Component Dock link

- **GIVEN** the Getaway page is rendered
- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the text "More templates at Component Dock" or similar is shown
