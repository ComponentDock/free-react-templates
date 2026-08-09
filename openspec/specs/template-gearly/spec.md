# Template: Gearly (Driving School Landing)

## Purpose

Gearly is a single-page driving-school landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dreams" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold yellow-and-navy driving school landing page: a
full-screen hero ("drive safe & get license"), a feature grid, an about/video
strip, an application inquiry form, three pricing plans, an instructors team
grid, and a dark multi-column footer. Gearly recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Dreams" — driving school website template
  (source: https://colorlib.com/wp/template/dreams/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dreams/`
  (HTTP 200, 42.9KB) + stylesheet `css/style.css` (43KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`dreams-free-template.jpg`) confirms the visual design (gold/navy, hero
  photo, pricing cards).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Courses, Blog, Contact) + search.
  2. Hero (`hero set-bg`, background photo, centered text): `<h5>Best options
for you</h5>`, `<h2>drive safe & get license</h2>`, "Contact us"
     (primary gold) + "See Courses" (second navy) buttons.
  3. Feature section (`feature spad`): left column "Why choose us?" /
     "Our feature" + blurb + "See Courses" button; right grid of 3 feature
     items with icon images: Unlimited Car Support · Driving School Insures ·
     Any Time Any Location.
  4. About video strip (`about-video`): left video background with play
     button; right "Welcome to Online trafic school" / "looking for lessons?"
     - blurb + "Learn more" button.
  5. Application form (`application-form spad`): centered "Giving Best Options
     For You" / "Application Form"; 6 fields (Your name · Your Email · Your
     Phone · Date & time · Courses type select · Car type select) + gold
     "SEND INQUIRY" button.
  6. Pricing (`pricing spad set-bg`, photo background): "Get Special Offer" /
     "Our Pricing"; 3 cards each with a "20% off" ribbon, price (`$199`,
     `$379`, `$259`), plan name (Personal Driving · Power Booster · Freight
     Driving), 5 bullet features, "get Started" button.
  7. Team (`team spad`): "Our Great Team" / "Our Instructors" + "View all"
     button; instructor cards (photo, name "DAVID WARNER", role Instructor,
     blurb, social icons).
  8. Footer (`footer`, dark navy): 3 link columns (COMPANY · Courses ·
     USEFUL LINKS) + About column (address, phone, email) + copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#f3bd00** (gold — primary buttons, accents) and
    **#0c2b4b** (dark navy — footer, secondary buttons, headings); text
    **#111111** / **#444444** on white.
  - Font: **"Open Sans"** (Google Fonts) — body and headings.
  - Buttons: solid gold `primary-btn` and solid navy `second-bg` variants,
    uppercase, white text.
  - Section rhythm: white sections with generous padding (`spad`), photo
    backdrops for hero/pricing.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with the
  "drive safe & get license" headline and two CTA buttons; feature items use
  lucide icons; the application form is client-side (no reload) with zod
  types; pricing cards with gold ribbon and navy accents; instructor cards
  with initials avatars and social links. All images picsum-seeded, icons
  lucide-react (no assets copied).

Gearly lives in `apps/gearly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Gearly", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Gearly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gearly" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, an overline,
a level-1 headline, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show an overline (e.g. "Best options for you") and a level-1 headline (e.g. "Drive safe & get license")
- **AND** it SHALL show a "Contact us" button and a "See Courses" button

### Requirement: Feature section

The system SHALL render a feature section with a heading column and three
feature items.

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** it SHALL show the heading "Our feature"
- **AND** it SHALL render three feature items (Unlimited Car Support, Driving School Insures, Any Time Any Location)

### Requirement: About strip

The system SHALL render an about section with a "Looking for lessons?" heading
and a "Learn more" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Looking for lessons?"
- **AND** it SHALL show a "Learn more" button

### Requirement: Application form

The system SHALL render an "Application Form" section with name, email, phone,
date, course type, and car type fields plus a submit button.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the application form is displayed
- **THEN** the form SHALL contain labeled inputs for name, email, phone, and date/time
- **AND** the form SHALL contain selects for course type and car type
- **AND** the form SHALL show a "Send inquiry" submit button
- **AND** submitting the form SHALL NOT reload the page (client-side only)

### Requirement: Pricing

The system SHALL render an "Our Pricing" section with three pricing cards, each
with a price, a plan name, a feature list, and a call-to-action button.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Pricing"
- **AND** it SHALL render three pricing cards (Personal Driving, Power Booster, Freight Driving), each with a price and at least three features
- **AND** each card SHALL show a "Get started" button

### Requirement: Team

The system SHALL render an "Our Instructors" section with instructor cards.

#### Scenario: Instructor cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Instructors"
- **AND** it SHALL render at least two instructor cards with names and roles

### Requirement: Footer

The system SHALL render a footer with the site name, a short tagline, quick
links, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Gearly" and quick links
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Gearly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Gearly — Driving School Template"
