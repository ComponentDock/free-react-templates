# Template: Peony (Beauty Salon Landing)

## Purpose

Peony is a single-page beauty-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Camille" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a rose-pink beauty salon page: a full-screen hero ("Get
Pretty Look" / "Beauty Salon"), an about split ("A World Class Beauty Salon
Company") with four service icons (Makeup, Hair Styling, Nails, Body
Treatment), a numbered services row (01 Manicure & Pedicure, 02 Haircut &
Coloring, 03 Professional Makeup, 04 Body Spa), a booking band ("Make an
Appointment"), a stylist team (Danica Lewis, Nicole Simon, Cloe Meyer,
Rachel Clinton, Dave Buff), a "Working on a Salon" gallery, an "Our Prices"
pricing grid (Hair Style, Manicure Pedicure, Makeup, Body Treatment), a
Happy Customer testimony band, and a footer with Information / Links /
"Have a Questions?" contact columns. Peony recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Camille" — free beauty salon website template
  (source: https://colorlib.com/wp/template/camille/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/camille/`
  (HTTP 200, 50.8KB) + stylesheet `css/style.css` (88.7KB, Bootstrap 4.3.1
  base + custom theme). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`camille-free-template.jpg`) confirms the visual
  design (light sections, rose-pink accents, dark plum text).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): site name "Peony" + nav (Home, Services,
     Gallery, About, Blog, Contact).
  2. Hero (`section.hero`): "Get Pretty Look" / "Beauty Salon" + "Discover
     Now" button.
  3. About (`ftco-section ftco-no-pb ftco-no-pt`): "About" / "A World Class
     Beauty Salon Company" + copy + 4 service icons (Makeup, Hair Styling,
     Nails, Body Treatment).
  4. Services (`services-section py-5 py-md-0 bg-light`): "Services" +
     "The beauty is not luxurious imagination".
  5. Numbered services (`ftco-section ftco-services`): 01 Manicure &
     Pedicure, 02 Haircut & Coloring, 03 Professional Makeup, 04 Body Spa
     - "Get Offer" buttons.
  6. Booking (`ftco-section ftco-no-pt ftco-booking`): "Make an
     Appointment" + service select (Professional Makeup, Manicure Pedicure,
     Body Treatment, Haircut Coloring).
  7. Team (`ftco-section ftco-team`): "Stylist" / "Makeup Artist" + member
     cards (Danica Lewis, Nicole Simon, Cloe Meyer, Rachel Clinton, Dave
     Buff).
  8. Gallery (`ftco-section ftco-no-pt ftco-no-pb`): "Gallery" / "Working
     on a Salon" + photo tiles labeled Makeup / Model.
  9. Pricing (`ftco-section ftco-pricing`): "Our Prices" + 4 pricing cards
     (Hair Style $50.00/session, Manicure Pedicure $34.50/session, Makeup
     $54.50/session, Body Treatment) with feature lists + "Get Offer".
  10. Testimony (`testimony-section bg-light`): "Happy Customer" band.
  11. Footer (`ftco-footer`): brand blurb + Information (FAQs, Privacy,
      Terms, Condition) + Links (Home, About, Services, Work, Blog,
      Contact) + "Have a Questions?" (203 Fake St. Mountain View, San
      Francisco, California, USA / +2 392 3929 210 / info@yourdomain.com).
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f18c8e** (rose pink — buttons, accents, headings) +
    dark plum **#563b4c** (text/headings); light pink **#f7b9bb** and
    section background **#f7f5f6** / `bg-light`.
  - Font: **"Pacifico"** (cursive — brand/hero display), **"Playfair
    Display"** (serif — section headings), **"Work Sans"** (sans — body)
    via Google Fonts.
  - Sections: white with alternating `bg-light` bands.
  - Buttons: `btn-primary` rose-pink filled, uppercase, rounded.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum background photo
  with the headline + CTA; about split; services with lucide icons;
  numbered service cards; booking band with service select; team cards with
  initials avatars; gallery grid with seeded photo tiles; pricing cards
  with feature lists; testimony band; footer with Information/Links/contact
  columns; all images picsum-seeded (`picsum.photos/seed/peony-N/w/h`);
  Google Fonts via `<link>`.

Peony lives in `apps/peony` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Peony", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Peony page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Peony" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a background image, a
level-1 headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Get Pretty Look" / "Beauty Salon")
- **AND** it SHALL show a call-to-action button ("Discover Now")

### Requirement: About section

The system SHALL render an about section with a heading and four service
features.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "A World Class Beauty Salon Company"
- **AND** it SHALL render four service features (Makeup, Hair Styling, Nails, Body Treatment)

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
numbered service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services"
- **AND** it SHALL render four numbered service cards (Manicure & Pedicure, Haircut & Coloring, Professional Makeup, Body Spa)
- **AND** each card SHALL show a "Get Offer" button

### Requirement: Booking band

The system SHALL render a booking band with the heading "Make an Appointment"
and a service selector.

#### Scenario: Booking content

- **GIVEN** the page is rendered
- **WHEN** the booking band is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL offer at least four selectable services (Professional Makeup, Manicure Pedicure, Body Treatment, Haircut Coloring)

### Requirement: Stylist team

The system SHALL render a "Stylist" section with at least four member cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the stylist section is displayed
- **THEN** it SHALL show the heading "Stylist"
- **AND** it SHALL render at least four member cards (Danica Lewis, Nicole Simon, Cloe Meyer, Rachel Clinton, Dave Buff)

### Requirement: Gallery

The system SHALL render a gallery section with the heading "Working on a
Salon" and at least six photo tiles.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Working on a Salon"
- **AND** it SHALL render at least six photo tiles

### Requirement: Pricing

The system SHALL render an "Our Prices" section with at least four pricing
cards, each with a price and a feature list.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Prices"
- **AND** it SHALL render four pricing cards (Hair Style, Manicure Pedicure, Makeup, Body Treatment)
- **AND** each card SHALL show a price and a "Get Offer" button

### Requirement: Testimony band

The system SHALL render a "Happy Customer" testimony band.

#### Scenario: Testimony content

- **GIVEN** the page is rendered
- **WHEN** the testimony band is displayed
- **THEN** it SHALL show the heading "Happy Customer"

### Requirement: Footer

The system SHALL render a footer with the site name, link columns, and
contact details.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Peony"
- **AND** it SHALL show link columns (Information, Links)
- **AND** it SHALL show contact details (address, phone, email)
