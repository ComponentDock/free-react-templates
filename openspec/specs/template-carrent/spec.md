# Template: Carrent (Car Rental Landing)

## Purpose

Carrent is a single-page car-rental landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Carrent"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean, light-blue-and-white car rental landing page: a
full-screen photo hero with a white "featured car" spec card, a trip booking
form, an "Our Offer" carousel of rentable cars with prices and specs, a photo
backdrop services strip, a 5-step "How it works", testimonials, a blog row, and
a dark footer. Carrent recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Carrent" — car rental website template
  (source: https://colorlib.com/wp/template/carrent/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/carrent/`
  (HTTP 200, 23.7KB) + stylesheet `css/style.css` (23KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot (`carrent-free-template.jpg`)
  confirms the visual design (white/blue, photo hero, car cards).
- **Section order (1:1):**
  1. Sticky/absolute navbar: "CarRent" logo + nav (Home, Services, Cars, About,
     Blog, Contact) — white links over the hero photo.
  2. Full-viewport hero (`ftco-cover-1 overlay`, background photo): left column
     with a white "featured car" card (`.feature-car-rent-box-1`, 10px blue top
     bar `#007bff`): `<h3>Range Rover S7</h3>`, spec list (Doors 4 · Seats 6 ·
     Luggage 2 Suitcase/2 Bags · Transmission Automatic · Minimum age
     Automatic), and a light-gray footer strip with `$150/day` + blue "Rent
     Now" button.
  3. Light-gray trip form section (`bg-light`): "Begin your trip here" +
     "32 cars available" counter, then a 4-field form (Where you from · Where
     you go · Journey date · Return date) + blue "Submit" button.
  4. "Our Offer" section (`bg-light`): left column heading + blurb + Previous/Next
     buttons; right column a carousel of `.item-1` car cards: photo, name
     ("Range Rover S64 Coupe"), 5 star rating, `$250/day`, specs (Doors · Seats
     · Transmission · Minimum age), blue "Rent Now" button.
  5. "Our services" strip (`section-3`, photo background + dark overlay): white
     "Our services" heading + 3 columns (Repair · Car Accessories · Own a Car)
     each with an icon, title, and blurb.
  6. "How it works": centered heading + blurb + 5 steps (01 Time & Place · 02
     Car · 03 Details · 04 Checkout · 05 Done) as numbered circles with
     captions.
  7. "Customer Testimony" (`bg-light`): centered heading + blurb + 3
     testimonial cards (quote, avatar, name: Mike Fisher · Jean Stanley · Katie
     Rose).
  8. "Our Blog" (`bg-white`): centered heading + blurb + 3 post cards (photo,
     title "The best car rent in the entire planet", meta "July 17, 2019 by
     Admin", excerpt).
  9. Footer (`site-footer`, dark): "About Us" blurb + 3 "Quick Links" columns
     (About Us · Testimonials · Terms of Service · Privacy · Contact Us) +
     copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#007bff** (bootstrap blue) — active nav, hover, blue top
    bar on the featured car card, all primary buttons.
  - Font: **"DM Sans"** (Google Fonts) — body and headings.
  - Surfaces: white cards on light-gray (`#f8f9fa`) sections; white section
    alternation; photo-backdrop hero and services strip with dark overlay.
  - Buttons: solid blue, white text, standard radius; price emphasized in
    bold.
  - Testimonial avatars and blog/offer photos: rounded images.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with a
  dark overlay; featured car card with blue top accent; trip form (zod-typed,
  controlled inputs); car cards with lucide icons for specs and seeded photos;
  "How it works" numbered steps; testimonials with initials avatars; blog cards
  with seeded photos. All images picsum-seeded, icons lucide-react (no assets
  copied).

Carrent lives in `apps/carrent` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Carrent", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Carrent page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Carrent" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero with featured car

The system SHALL render a full-width hero section with a background image, a
featured car card showing the car name, a spec list, a daily price, and a
"Rent Now" button.

#### Scenario: Featured car card

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL show a featured car card with a level-2 heading (e.g. "Range Rover S7")
- **AND** the card SHALL list car specs (doors, seats, luggage, transmission)
- **AND** the card SHALL show a daily price and a "Rent Now" button

### Requirement: Trip booking form

The system SHALL render a trip booking form with pickup address, drop-off
address, journey date, and return date fields and a submit button.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the trip form is displayed
- **THEN** the form SHALL contain labeled inputs for pickup address, drop-off address, journey date, and return date
- **AND** the form SHALL show a "Submit" button
- **AND** submitting the form SHALL NOT reload the page (client-side only)

### Requirement: Offer carousel

The system SHALL render an "Our Offer" section with Previous/Next controls and
a list of car cards, each with a name, rating, price, specs, and a "Rent Now"
button.

#### Scenario: Offer cards

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show a level-2 heading "Our Offer" with Previous/Next buttons
- **AND** it SHALL render at least two car cards, each with a name, a star rating, a daily price, spec items, and a "Rent Now" button

### Requirement: Services strip

The system SHALL render a services section with a heading and three service
cards, each with an icon, title, and description.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a level-2 heading "Our services"
- **AND** it SHALL render three service cards (Repair, Car Accessories, Own a Car)

### Requirement: How it works

The system SHALL render a "How it works" section with five numbered steps.

#### Scenario: Steps

- **GIVEN** the page is rendered
- **WHEN** the "How it works" section is displayed
- **THEN** it SHALL show five steps numbered 01 through 05 with captions

### Requirement: Testimonials

The system SHALL render a "Customer Testimony" section with three testimonial
cards, each containing a quote and an author name.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a level-2 heading "Customer Testimony"
- **AND** it SHALL render three quotes with author names

### Requirement: Blog row

The system SHALL render an "Our Blog" section with three post cards, each with
a title, a date/author meta line, and an excerpt.

#### Scenario: Post cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a level-2 heading "Our Blog"
- **AND** it SHALL render three post cards with titles and excerpts

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Carrent" and quick links
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Carrent app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Carrent — Car Rental Template"
