# Template: Crestone (Creative Agency Landing)

## Purpose

Crestone is a single-page creative agency template — a React recreation of the
ColorLib free "Bobsled" template
(preview: https://preview.colorlib.com/theme/bobsled/ — creative website),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand gradient `#3e69fe` → `#4cd4e3` (blue to cyan, applied to hero banner,
  featured area, story area, and social icon backgrounds)
- Text dark `#222222`, text muted `#777777`, light bg `#f9f9ff`
- Typeface: Poppins (Google Fonts via `<link>`)
- Pill buttons: transparent bg, white/dark border, border-radius 20px,
  gradient text on hover
- Section backgrounds: white (working process, featured, contact),
  gradient (banner, story), dark (footer)
- Accent colors: `#38a4ff`, `#4cd3e3`, `#6382e6`, `#a367e7`, `#e66686`,
  `#f44a40`, `#f09359`, `#73fbaf`, `#f4e700` (used as icon/step colors)
- Icons: Linearicons + Font Awesome (REPLACE with lucide-react)

Crestone lives in `apps/crestone` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent navbar overlaid on the hero gradient with
the brand name "Crestone" and section links (Home, Generic, Elements), plus a
hamburger menu toggle for mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Crestone" linking to `#home`
- **AND** it SHALL show links to Home, Generic, and Elements

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero banner with the blue-to-cyan gradient
background (`#3e69fe` → `#4cd4e3`), a headline, a supporting paragraph, and a
pill "Get Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL contain the headline "Don't look anywhere, This is the best
  place on web"
- **AND** it SHALL contain a supporting paragraph
- **AND** it SHALL contain a "Get Started" pill button

#### Scenario: Hero gradient background

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** its background SHALL use the blue-to-cyan gradient (`#3e69fe` →
  `#4cd4e3`)

### Requirement: Working process section

The system SHALL render a white-background section titled "Our Working Process"
with a description paragraph and four numbered steps (Researching, Wireframing,
Prototyping, Final Design) displayed horizontally with colored circular icon
boxes and arrow connectors between them.

#### Scenario: Process steps

- **GIVEN** the page is rendered
- **WHEN** the working process section is displayed
- **THEN** it SHALL show the section heading "Our Working Process"
- **AND** it SHALL show four steps: "1. Researching", "2. Wireframing",
  "3. Prototyping", "4. Final Design"
- **AND** each step SHALL have a circular colored icon box
- **AND** steps SHALL be connected by arrow elements

#### Scenario: Process step colors

- **GIVEN** the page is rendered
- **WHEN** the working process section is displayed
- **THEN** step 1 SHALL use color `#3e69fe`
- **AND** step 2 SHALL use color `#73fbaf`
- **AND** step 3 SHALL use color `#4cd4e3`
- **AND** step 4 SHALL use color `#e66686`

### Requirement: Featured features section

The system SHALL render a gradient-background section titled "Our Exclusive
Features" with a description paragraph and three feature cards in a row, each
with an icon, a title ("Creative Design", "Appropriate UX", "Super Clean Code"),
a blurb, and a "Read More" link.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the featured features section is displayed
- **THEN** it SHALL show the section heading "Our Exclusive Features"
- **AND** it SHALL show three feature cards with icons, titles, and blurbs
- **AND** each card SHALL have a "Read More" link

#### Scenario: Feature card titles

- **GIVEN** the page is rendered
- **WHEN** the featured features section is displayed
- **THEN** card 1 title SHALL be "Creative Design"
- **AND** card 2 title SHALL be "Appropriate UX"
- **AND** card 3 title SHALL be "Super Clean Code"

### Requirement: Remarkable works gallery

The system SHALL render a white-background section titled "Remarkable Works"
with a description paragraph and three project cards in a row, each with a
placeholder image, a title "Vector Illustration", a description, and a
"View Project" link.

#### Scenario: Gallery cards

- **GIVEN** the page is rendered
- **WHEN** the remarkable works section is displayed
- **THEN** it SHALL show the section heading "Remarkable Works"
- **AND** it SHALL show three project cards with images
- **AND** each card SHALL have a "View Project" link

#### Scenario: Gallery images

- **GIVEN** the page is rendered
- **WHEN** the remarkable works section is displayed
- **THEN** each card image SHALL use a picsum.photos placeholder with
  deterministic seed (e.g. `https://picsum.photos/seed/crestone-1/400/300`)

### Requirement: Story/CTA section

The system SHALL render a full-width gradient-background section with the
headline "From the part of beginning", a supporting paragraph, and a pill
"Get Started" button.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL contain the headline "From the part of beginning"
- **AND** it SHALL contain a "Get Started" pill button

#### Scenario: Story gradient background

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** its background SHALL use the blue-to-cyan gradient

### Requirement: Newsletter subscription section

The system SHALL render a gradient-background section titled "Subscribe for our
Newsletter" with a description and a pill "Get Started" button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the subscription section is displayed
- **THEN** it SHALL show the heading "Subscribe for our Newsletter"
- **AND** it SHALL contain a "Get Started" pill button

### Requirement: Contact form section

The system SHALL render a white-background section titled "Keep in Touch" with a
description paragraph, a contact form (name, email, subject, message fields + Send
Message button), and contact info (address, email, phone).

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact form section is displayed
- **THEN** it SHALL show the heading "Keep in Touch"
- **AND** it SHALL contain input fields for name, email, subject, and message
- **AND** it SHALL contain a "Send Message" submit button

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the contact form section is displayed
- **THEN** it SHALL show an address, two email addresses, and two phone numbers

### Requirement: Footer

The system SHALL render a dark-background footer with social media icon links
(each with gradient circular backgrounds), and a copyright line.

#### Scenario: Footer social icons

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain social media icon links with gradient backgrounds

#### Scenario: Footer copyright

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a copyright line linking to Component Dock

### Requirement: Responsive layout

The system SHALL be fully responsive across desktop, tablet, and mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the page is rendered on a viewport ≤ 768px
- **WHEN** any section is displayed
- **THEN** all content SHALL be single-column and readable
- **AND** the navbar SHALL collapse to a hamburger menu

#### Scenario: Tablet layout

- **GIVEN** the page is rendered on a viewport ≤ 1024px
- **WHEN** multi-column sections are displayed
- **THEN** columns SHALL reflow to a reduced grid (e.g. 2-column → 1-column)

## Verification checklist

- [ ] Spec covers every section in the original template
- [ ] Design tokens match extracted CSS values (gradient, colors, font, radius)
- [ ] Gherkin scenarios cover all interactive elements (nav, buttons, form)
- [ ] Responsive breakpoints addressed
- [ ] No ColorLib references in app code (provenance in spec + TEMPLATES.md only)
- [ ] Footer links to Component Dock
- [ ] Placeholder images use picsum.photos with deterministic seeds
