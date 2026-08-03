# Template: Medical (Healthcare Landing)

## Purpose

Medical is a single-page healthcare template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Medical
Wordpress Themes" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a green-accented medical page: a banner ("We Care for Your
Health Every Moment"), a servicing-hours / appointment band ("Book an
Appointment"), a facilities section ("Our Latest Facilities": 24/7
Emergency, Intensive Care, Family Planning), an offered-services section
(Cardiac Treatment, Routine Checkup, Departments), a consultants team
("Our Consultants": Andy Florence), a client feedback band ("Enjoy our
Client's Feedback": Fannie Rowe), a recent-blogs row ("Portable Fashion for
women", "Summer ware are coming"), and a footer with Top Products / Contact
Us / Newsletter columns. Medical recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medical Wordpress Themes" — free medical website
  template (source: https://colorlib.com/wp/template/medical-wordpress-themes/).
- **Live preview DOM analyzed:** the official preview portal
  (`https://preview.colorlib.com/theme/medical-wordpress-themes/`) returns
  404; the live demo resolves at `https://preview.colorlib.com/theme/medical/`
  (HTTP 200, 34.7KB) + stylesheet `css/main.css` (69.5KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`medical-website-templates.jpg`) confirms the visual design (light
  sections, green accents).
- **Section order (1:1):**
  1. Banner (`banner-area relative`): "We Care for Your Health Every
     Moment".
  2. Appointment (`appointment-area`): "Servicing Hours" / "Book an
     Appointment".
  3. Facilities (`facilities-area section-gap`): "Our Latest Facilities" +
     3 cards (24/7 Emergency, Intensive Care, Family Planning).
  4. Services (`offered-service-area section-gap`): "Our Offered Services"
     - cards (Cardiac Treatment, Routine Checkup, Departments).
  5. Team (`team-area section-gap`): "Our Consultants" + consultant cards
     (Andy Florence).
  6. Feedback (`feedback-area section-gap relative`): "Enjoy our Client's
     Feedback" + testimonial cards (Fannie Rowe).
  7. Brands (`brands-area`): logo strip.
  8. Blog (`recent-blog-area section-gap`): "Our Recent Blogs" + post
     cards ("Portable Fashion for women", "Summer ware are coming").
  9. Footer (`footer-area section-gap`): Top Products / Contact Us /
     Newsletter columns.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#69be00** (green — accents, buttons, headings) + dark
    **#222222** text; light **#f9f9ff** section backgrounds.
  - Font: **"Poppins"** (sans — headings/body) via Google Fonts.
  - Buttons: green filled, uppercase; FontAwesome icons.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; banner = seeded picsum photo + headline;
  appointment band; facilities cards; services with lucide icons; consultant
  cards with initials avatars; feedback band; blog cards with seeded photos;
  footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/medical-N/w/h`); Google Fonts via `<link>`.

Medical lives in `apps/medical` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Medical", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Medical page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Medical" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Banner hero

The system SHALL render a banner section with a level-1 headline.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "We Care for Your Health Every Moment")

### Requirement: Appointment band

The system SHALL render an appointment band with a "Book an Appointment"
call-to-action.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment band is displayed
- **THEN** it SHALL show the heading "Servicing Hours"
- **AND** it SHALL show a "Book an Appointment" button

### Requirement: Facilities

The system SHALL render an "Our Latest Facilities" section with at least
three cards.

#### Scenario: Facility cards

- **GIVEN** the page is rendered
- **WHEN** the facilities section is displayed
- **THEN** it SHALL show the heading "Our Latest Facilities"
- **AND** it SHALL render three cards (24/7 Emergency, Intensive Care, Family Planning)

### Requirement: Offered services

The system SHALL render an "Our Offered Services" section with service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Offered Services"
- **AND** it SHALL render service cards (Cardiac Treatment, Routine Checkup, Departments)

### Requirement: Consultants

The system SHALL render an "Our Consultants" section with at least one
consultant card.

#### Scenario: Consultant content

- **GIVEN** the page is rendered
- **WHEN** the consultants section is displayed
- **THEN** it SHALL show the heading "Our Consultants"
- **AND** it SHALL render at least one consultant card (Andy Florence)

### Requirement: Client feedback

The system SHALL render an "Enjoy our Client's Feedback" band with at least
one testimonial card.

#### Scenario: Feedback content

- **GIVEN** the page is rendered
- **WHEN** the feedback band is displayed
- **THEN** it SHALL show the heading "Enjoy our Client's Feedback"
- **AND** it SHALL render at least one testimonial card (Fannie Rowe)

### Requirement: Recent blogs

The system SHALL render an "Our Recent Blogs" section with at least two post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Our Recent Blogs"
- **AND** it SHALL render at least two post cards

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Medical"
- **AND** it SHALL show link columns (Top Products, Contact Us, Newsletter)
