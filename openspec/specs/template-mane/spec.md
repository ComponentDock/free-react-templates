# Template: Mane (Hair Salon Landing)

## Purpose

Mane is a single-page hair-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Haircare" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light salon page with tan/gold accents and a dark plum
footer: a full-height hero slider ("We are professional care for your hair",
For Men / For Women), two service rows (Haircut & Styling, Beard, Makeup,
Body Treatment), a booking section with an appointment form, a five-member
team carousel, an "Our gallery" grid, a four-tier pricing list, a
"Happy Customer" testimonial carousel, and a dark footer with information
columns and a question form. Mane recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Haircare" — free hair salon website template
  (source: https://colorlib.com/wp/template/haircare/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/haircare/`
  (HTTP 200, 36.8KB) + stylesheet `css/style.css` (77.2KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`haircare-free-template.jpg`) confirms the visual design (light sections,
  tan/gold accents, dark plum footer).
- **Section order (1:1):**
  1. Header (`ftco-navbar`): "Haircare" logo + nav (Home, Services, Gallery,
     About, Blog, Contact).
  2. Hero (`hero-wrap js-fullheight`, photo slider): "We are professional
     care for your hair" + For Men / For Women split ("Welcome to our
     Salon").
  3. Services (`services-wrap`, 4 image blocks): Haircut & Styling, Beard,
     Makeup, Body Treatment — each with "Read more".
  4. Services icons (`services-section ftco-section`): 4 icon cards (e.g.
     Haircut & Styling, Beard, Makeup, Body Treatment).
  5. Booking (`ftco-booking bg-light`): "Make an Appointment" form
     (appointment_name, appointment_email, phone) + "Call Us: 012-3456-7890".
  6. Team (`ftco-team`): "Makeup Artist" heading + 5 member cards (Danica
     Lewis, Nicole Simon, Cloe Meyer, Rachel Clinton, Dave Buff).
  7. Gallery (`ftco-section`): "Our gallery" + 8 photo tiles (Beard,
     Haircut, Hairstylist, Makeup, Model).
  8. Pricing (`ftco-pricing`): "Our Prices" + 4 priced tiers (Hair Style
     $50.00/session, Manicure Pedicure $34.50/session, Makeup
     $54.50/session, Body Treatment $89.50/session, middle card active).
  9. Testimonials (`testimony-section bg-light`): "Happy Customer" + quote
     carousel.
  10. Footer (`ftco-footer`): Haircare (about), Information, Links, "Have a
      Questions?" contact column + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#bf925b** (tan/gold — headings accents, buttons) and
    **#563b4c** (dark plum — footer).
  - Font: **"Barlow Condensed"** for headings + **"Poppins"** for body
    (Google Fonts).
  - Sections: light (`#f8f9fa`/white, `bg-light` booking/testimony bands);
    footer dark plum `#563b4c`/black.
  - Buttons: rounded pill buttons in brand tan/gold; uppercase letter-spaced
    labels.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo with the
  headline and a For Men/For Women split; services with lucide icons and
  photo cards; booking form with name/email/phone inputs; team cards with
  initials avatars; gallery with seeded photo tiles; pricing tiers with
  highlighted middle card; testimonial with initials avatar; all images
  picsum-seeded (`picsum.photos/seed/mane-N/w/h`); Google Fonts via
  `<link>`.

Mane lives in `apps/mane` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Haircare", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Mane page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mane" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a category split (For Men / For Women).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "We are professional care for your hair")
- **AND** it SHALL show a For Men / For Women split with a call-to-action

### Requirement: Services

The system SHALL render a services section with at least four service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL render four service cards (Haircut & Styling, Beard, Makeup, Body Treatment)

### Requirement: Booking form

The system SHALL render a "Make an Appointment" section with a booking form
and contact phone.

#### Scenario: Booking content

- **GIVEN** the page is rendered
- **WHEN** the booking section is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL render a form with name, email, and phone inputs
- **AND** it SHALL show a contact phone (e.g. "Call Us: 012-3456-7890")

### Requirement: Team

The system SHALL render a team section with at least four member cards with
names and roles.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Makeup Artist"
- **AND** it SHALL render at least four member cards (e.g. Danica Lewis, Nicole Simon, Cloe Meyer, Rachel Clinton)

### Requirement: Gallery

The system SHALL render a gallery section with a heading and at least four
photo tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our gallery"
- **AND** it SHALL render at least four photo tiles

### Requirement: Pricing

The system SHALL render a pricing section with priced tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Prices"
- **AND** it SHALL render priced items (e.g. Hair Style $50.00, Manicure Pedicure $34.50, Makeup $54.50, Body Treatment $89.50)

### Requirement: Testimonials

The system SHALL render a testimonials section with a heading, a quote, and an
author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Customer"
- **AND** it SHALL show a quote with an author name

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, a contact
column, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Haircare" and quick links
- **AND** it SHALL show a contact column (e.g. "Have a Questions?")
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Mane app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mane — Hair Salon Template"
