# Template: Leopet (Pet Care Website)

## Purpose

Leopet is a multi-section pet-care website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Leopet"
design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a teal-and-purple pet-care landing page: hero with a
"Give your pet Best Care" headline, an about section, three pet services
(Pet Surgeries, Pet Adoption, Pet Care), an adoption appeal with stat
counters, customer testimonials, and a footer with a newsletter signup.
Leopet follows the same structure and adds the repo's standard dark-mode
toggle and accessible patterns. All imagery is recreated with seeded
placeholder images (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Leopet" — free pet care website template
  (source: https://colorlib.com/wp/template/leopet/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/leopet/`
  (HTTP 200) + `css/style.css` (HTTP 200). Both were re-fetched during
  implementation (2026-08-04) and the findings below were verified against
  the rendered HTML.
- **Structure (1:1, section order):**
  1. Header (`header_area`) — sub-header with logo, phone `+02 213 - 256
(365)` and a "Become a Volunteer" pill button; main nav: Home, About,
     Services, Gallery, Pages, Blog, Contact.
  2. Banner (`banner_part`, ~800px, background image) — h5 "Welcome to
     Leopet", h1 "Give your pet Best Care", "Our Services" CTA (the rendered
     button text is "OUR SERVIECS" — a ColorLib typo; recreated as "Our
     Services").
  3. About (`about_part`) — h2 "We care your pet As you care", copy, "About
     Us" button, image.
  4. Services (`service_part services_bg`, background `#F2F8F8`) — h2 "We
     Provide Best Services"; three cards: Pet Surgeries, Pet Adoption, Pet
     Care (icon + copy + "Read More" link).
  5. Adopt / counters (`abopt_number_counter`) — h2 "We need your help Adopt
     Us", copy, stat counters "590+ Pets Available", "300+ Happy Clients",
     "Brows Now" button (recreated as "Browse Now").
  6. Testimonials (`client_review`, background image) — three customer
     quotes (the original repeats "- Jon Miller" on all three; recreated
     with three distinct names).
  7. Footer (`footer_area`) — "Subscribe Newsletter" (copy: "We strictly
     follow the State Board's sanitary and disinfection guidelines." + email
     input + "Free Trial" button), columns Menu / Contact / Address /
     Opening Hour, social links, bottom bar.
  - NOTE: the earlier prep draft listed a standalone "Volunteer" section
    ("Become a Volunteer To help them"); the live preview does NOT render
    such a section — "Become a Volunteer" appears only as the header CTA.
    The spec therefore requires the CTA in the navbar instead of a separate
    section.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#53C9BB** (teal/mint — primary buttons, icons, accents;
    43 occurrences); secondary accent **#FF5B5B** (red, CTAs).
  - Headings: **#415094** (purple); muted text **#999999**; light section
    backgrounds **#f9f9ff** / **#F2F8F8**; white sections.
  - Fonts: **"Quicksand"** (body + headings) via Google Fonts.
  - Buttons (`btn_1`): filled teal, white uppercase text, `border-radius:
50px`, padding 15px 31px.
- **Recreation decisions:** the repo-standard Navbar (with dark-mode toggle)
  wraps the header; sections recreated with Tailwind tokens in `@theme`
  (`--color-brand` = `#53C9BB`, `--color-heading` = `#415094`, `--color-accent`
  = `#FF5B5B`); placeholder images via
  `https://picsum.photos/seed/leopet-<n>/<w>/<h>`; icons from lucide-react;
  stat counters as static accessible numbers; newsletter form is a
  controlled form with HTML5 `required` validation (the repo's established
  pattern — no zod dependency, consistent with the other shipped apps);
  social icons inline SVG; no assets copied.

Leopet lives in `apps/leopet` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navigation bar with the site name "Leopet", links
to the main sections, a "Become a Volunteer" button, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Leopet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Leopet" and links to the main sections
- **AND** the navbar SHALL show a "Become a Volunteer" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero section with the eyebrow "Welcome to Leopet",
the headline "Give your pet Best Care", and CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Give your pet Best Care"
- **AND** it SHALL show the eyebrow text and CTA buttons

### Requirement: About section

The system SHALL render an about section titled "We care your pet As you
care" with an image, descriptive copy, and action buttons.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We care your pet As you care"
- **AND** it SHALL show an image with an accessible label, copy, and action buttons

### Requirement: Services section

The system SHALL render a services section titled "We Provide Best Services"
with three cards: Pet Surgeries, Pet Adoption, and Pet Care.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We Provide Best Services"
- **AND** it SHALL show the three service cards, each with an icon, title, and copy

### Requirement: Adoption/counters section

The system SHALL render an adoption section titled "We need your help Adopt
Us" with at least two stat counters.

#### Scenario: Adoption content

- **GIVEN** the page is rendered
- **WHEN** the adoption section is displayed
- **THEN** it SHALL show the heading "We need your help Adopt Us"
- **AND** it SHALL show at least two stat counters

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three customer
quotes.

#### Scenario: Testimonial quotes

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least three testimonial quotes

### Requirement: Footer

The system SHALL render a footer with a "Subscribe Newsletter" signup, link
columns (Menu, Contact, Address, Opening Hour), and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Leopet" and a newsletter input
- **AND** it SHALL show link columns and social links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Leopet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Leopet — Pet Care Website Template"
