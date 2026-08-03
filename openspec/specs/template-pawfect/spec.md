# Template: Pawfect (Pet Care Website)

## Purpose

Pawfect is a multi-section pet-care website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Anipat" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a pet-care/animal-services landing page: top info bar,
navbar, hero slider ("We Care Your Pets"), services cards, about section,
team, testimonials/counters, a contact CTA band, and a rich footer. Pawfect
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns. All imagery is recreated with seeded placeholder images
(no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Anipat" — free pet-care website template
  (source: https://colorlib.com/wp/template/anipat/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/anipat/`
  (HTTP 200) + stylesheets (`css/style.css`, `css/responsive.css`).
- **Structure (1:1, section order):**
  1. Top info bar — phone `+880 4664 216`, hours `Mon - Sat 10:00 - 7:00`,
     email `Demomail@gmail.Com`.
  2. Navbar — logo, section links, phone CTA, "Contact Us" button.
  3. Hero slider (`slider_area` / `single_slider slider_bg_1`) — headline
     "We Care Your Pets" (accent on "Your Pets"), short paragraph, "Contact
     Us" button (`boxed-btn4`).
  4. Services — heading "Services for every dog" with three cards:
     Pet Boarding, Healthy Meals, Pet Spa (icon + title + copy).
  5. About (`adapt_about`) — image + copy + "About Us" button
     (`boxed-btn3`).
  6. Team (`team_area`) — "Our Team", member cards (Rala Emaia,
     jhon Smith, ...) with photo + name + role.
  7. Testimonials — quote cards (Jhon Walker) + counter stats (452...).
  8. Contact CTA (`contact_anipat anipat_bg_1`) — "Why go with Anipat?"
     heading + "Contact Us" button.
  9. Footer (`footer`) — logo + social links, four widget columns
     (Pet Care links: Pet Insurance, Pet surgeries, Pet Adoption, Dog
     Insurance; About: About Us, Privacy Policy, Terms of Service, Login
     info, Knowledge Base).
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand colors: **#eb592d** / **#ff3500** (orange — CTAs), **#f0e9ff**
    (light purple — section backgrounds), **#f9f9ff** (light lavender),
    **#415094** (indigo — headings/links), **#4cd3e3** (teal accent),
    **#f4e700** (yellow accent), **#222222** (text), **#999999** (muted).
  - Fonts: **"Poppins"** (headings/body) + **"Open Sans"** (secondary) via
    Google Fonts.
  - Buttons: filled rounded (`boxed-btn3`/`boxed-btn4` — filled orange/
    indigo with hover states), pill contact buttons.
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the top bar + nav; all sections recreated with Tailwind tokens
  (`--color-brand` = orange, plus the lavender/indigo accents in `@theme`);
  placeholder images via `https://picsum.photos/seed/pawfect-<n>/<w>/<h>`;
  icons from lucide-react; social icons inline SVG; no assets copied.

Pawfect lives in `apps/pawfect` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a top bar with a phone number, opening hours, and an
email address.

#### Scenario: Top bar content

- **GIVEN** the Pawfect page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the phone number, the opening hours, and the email address

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Pawfect", links
to the main sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pawfect page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pawfect" and links to the main sections
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the headline "We Care Your Pets"
(with the accent on "Your Pets"), a short supporting paragraph, and a
"Contact Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "We Care Your Pets"
- **AND** it SHALL show a supporting paragraph
- **AND** it SHALL show a "Contact Us" link/button

### Requirement: Services section

The system SHALL render a services section titled "Services for every dog"
with three cards: Pet Boarding, Healthy Meals, and Pet Spa.

#### Scenario: Services cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services for every dog"
- **AND** it SHALL show cards for Pet Boarding, Healthy Meals, and Pet Spa, each with an icon, title, and copy

### Requirement: About section

The system SHALL render an about section with an image, descriptive copy, and
an "About Us" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the image with an accessible label
- **AND** it SHALL show descriptive copy and an "About Us" link/button

### Requirement: Team section

The system SHALL render a team section titled "Our Team" with at least three
member cards (photo, name, role).

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Team"
- **AND** it SHALL show member cards each with a name and a role

### Requirement: Testimonials and counters

The system SHALL render a testimonials section with quote cards and a counter
stat.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least one quote card with a name
- **AND** it SHALL show a counter stat

### Requirement: Contact CTA band

The system SHALL render a contact CTA band with the heading "Why go with
Pawfect?" and a "Contact Us" button.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the contact band is displayed
- **THEN** it SHALL show the heading "Why go with Pawfect?"
- **AND** it SHALL show a "Contact Us" link/button

### Requirement: Footer

The system SHALL render a footer with the site name, a tagline, social links,
and link columns (Pet Care, About, and Contact columns).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pawfect", a tagline, and social links
- **AND** it SHALL show the link columns (Pet Care and About)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pawfect app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pawfect — Pet Care Website Template"
