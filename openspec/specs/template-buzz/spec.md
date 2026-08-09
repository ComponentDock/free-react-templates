# Template: Buzz (Barber Shop Landing)

## Purpose

Buzz is a single-page barber-shop landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Br" design
(see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The recreation carries the NEW name "Buzz" (never the
source name).

The original is a light barber landing page with orange-red accents: a
900px photo slider hero ("Modern barber shop in center of the city"), an
about split with opening hours, a three-card services grid, a tabbed pricing
section with six $8 price rows, a three-member barbers team, a photo
testimonial band, a "Make an Appointment" section with a booking form, and a
near-black footer. Buzz recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Br" — barber shop website template
  (source: https://colorlib.com/wp/template/br/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/br/`
  (HTTP 200, 48.5KB) + stylesheet `css/style.css` (142.1KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot (`br-free-template.jpg`)
  confirms the visual design (light sections, orange accents, photo slider).
- **Section order (1:1):**
  1. Header/navbar: "Barber" logo + nav (home, service, blog, pages, about,
     elements, Contact) + "Appointment" button.
  2. Hero slider (`slider_area`, 900px photo slides): "Modern barber shop in
     center of the city" headline + blurb + "Appointment" button.
  3. About (`about_area`, `#FDF9F6`): "About Us" heading + blurb +
     "Opening Hour: 10:00 am - 10:00 pm".
  4. Services (`service_area`): "Our Services" heading + 3 icon cards
     (Smooth Shave · Beard Triming · Haircut Styles) with blurbs.
  5. Pricing (`prising_area`, `#fdf9f6`): "Our Pricing" heading + tab menu
     (Hair Styling ×6) + pricing cards (Hair Cut $8 · Hair Style $8 ·
     Shaving $8) each with a blurb.
  6. Team (`team_area`): "Barber" heading + 3 member cards (Jhon Smith ·
     Jems Smith · Thomas J Watson) with "Junior Barber" roles.
  7. Testimonials (`testimonial_area`, photo band): "Testimonial" heading +
     quote slider (author: "Watson, web developer").
  8. Make an Appointment (`make_apppointment_area`, `#fdf9f6`): "Make an
     Appointment" heading + blurb + booking form (Choose services dropdown,
     Choose Barbers dropdown, Submit button).
  9. Footer (`footer`, `#0d0e0f`): Visit our studio address + Message us
     contacts + Working Hours + About blurb + Information links + Services
     links + Follow Us social + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#eb592d** (orange-red — buttons, accents, links).
  - Section background: **#fdf9f6** (warm light) for about/pricing/
    appointment; footer **#0d0e0f** (near black).
  - Font: **"Yeseva One"** (display/cursive) for headings + **"Lato"**
    (sans-serif) for body and buttons (Google Fonts).
  - Buttons: `boxed-btn` — white bg, 1px solid `#EB592D`, uppercase,
    letter-spacing 3px, padding 18px 44px.
  - Hero slides: 900px tall, cover backgrounds.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  headline; about split with opening hours; services with lucide icons;
  pricing with tabbed category headers and price rows; team cards with
  initials avatars; appointment section with a booking form (name/email + submit); testimonial with initials avatar; newsletter input in the footer.
  All images picsum-seeded, icons lucide-react (no assets copied).

Buzz lives in `apps/buzz` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Buzz", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Buzz page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Buzz" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Modern barber shop in center of the city")
- **AND** it SHALL show an "Appointment" button

### Requirement: About section

The system SHALL render an about section with a heading, a blurb, and opening
hours.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Us"
- **AND** it SHALL show opening hours (e.g. "10:00 am - 10:00 pm")

### Requirement: Services grid

The system SHALL render an "Our Services" section with at least three service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render three service cards (Smooth Shave, Beard Triming, Haircut Styles)

### Requirement: Pricing

The system SHALL render an "Our Pricing" section with at least three priced
items.

#### Scenario: Price rows

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Pricing"
- **AND** it SHALL render priced items (e.g. Hair Cut $8, Hair Style $8, Shaving $8)

### Requirement: Barbers team

The system SHALL render a team section with three member cards with names and
roles.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL render three member cards with names (e.g. Jhon Smith, Jems Smith, Thomas J Watson)
- **AND** each card SHALL show a role caption

### Requirement: Appointment form

The system SHALL render a "Make an Appointment" section with a heading and a
form with a submit button.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show the heading "Make an Appointment"
- **AND** it SHALL render a form with a submit button

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, a newsletter field, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Buzz" and quick links
- **AND** it SHALL show a newsletter input and social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Buzz app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Buzz — Barber Shop Template"
