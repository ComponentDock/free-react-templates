# Template: Resonance (Digital Marketing & SEO Agency Landing)

## Purpose

Resonance is a single-page digital marketing & SEO agency landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Echo" website template (https://colorlib.com/wp/template/echo/),
built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a clean, light, SaaS-style marketing site: a transparent
navbar over a split hero with a vector illustration, a 3-column features grid,
a split about section with a check-list, a 2-column services grid, a
testimonials band on a light-gray background, and a 4-column footer. Resonance
follows the same section structure, layout, and content types, replacing the
original's raster illustration with a seeded picsum placeholder and its
flaticon icon font with lucide-react icons.

Resonance lives in `apps/resonance` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Resonance",
section anchor links, and a "Download now" call-to-action pill.

#### Scenario: Navbar content

- **GIVEN** the Resonance page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Resonance" linking to the page root
- **AND** the navbar SHALL show links to Home, About, Services, Testimonials, and Contact
- **AND** the navbar SHALL show a "Download now" pill-style call-to-action

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the menu toggle
- **AND** the mobile menu is shown
- **THEN** the menu SHALL list the same section links
- **AND** pressing a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a split hero with a heading, supporting copy, two
call-to-action buttons, and a placeholder illustration.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show an uppercase pill label "Welcome to our site"
- **AND** it SHALL show a level-1 heading "Expert SEO, SEM Services in London"
- **AND** it SHALL show a short paragraph describing the agency
- **AND** it SHALL show a primary "How we work" button and an outline "Contact us" button
- **AND** it SHALL show a placeholder illustration image on the right

### Requirement: Features section

The system SHALL render a centered features section with three cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show an uppercase pill label "Features" and a level-1 heading "Our Features"
- **AND** it SHALL show three feature cards titled Marketing Analysis, Digital Marketing, and SEO and Backlinks
- **AND** each card SHALL contain an icon, a heading, and a short description

### Requirement: About section

The system SHALL render a split about section with an image, a check-list, and
a call-to-action button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a placeholder image on the left
- **AND** it SHALL show an uppercase pill label "About us" and a level-2 heading "Why our agency?"
- **AND** it SHALL show two paragraphs of agency copy
- **AND** it SHALL show a check-list with three items
- **AND** it SHALL show an "About us" button

### Requirement: Services section

The system SHALL render a services section with six cards in a two-column grid.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show an uppercase pill label "Services" and a level-2 heading "Our Services"
- **AND** it SHALL show six service cards: Design Marketing, Internet Marketing, Social Marketing, SEO Marketing, BackLinks Marketing, and Design Marketing
- **AND** each card SHALL contain an icon, a heading, and a short description

### Requirement: Testimonials section

The system SHALL render a testimonials band on a light background with three
quote cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show an uppercase pill label "Testimonials" and a level-1 heading "Testimonials"
- **AND** it SHALL show three quote cards with a quotation, an author avatar, name, and role

### Requirement: Footer

The system SHALL render a four-column footer with a branded Component Dock
attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About column with the site name, a blurb, and social links
- **AND** it SHALL show Pages and Resources link columns
- **AND** it SHALL show a Contact column with an email, a phone number, and an address
- **AND** the copyright bar SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Resonance app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the page sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Resonance — SEO & Digital Marketing Agency Template"
