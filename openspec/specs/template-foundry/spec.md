# Template: Foundry (Construction Template)

## Purpose

Foundry is a single-page construction/architecture services landing template
in the free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Architect" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Architect" — construction services template
  (source: https://colorlib.com/wp/template/architect/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/architect/
  (HTTP 200, full rendered DOM + `css/style.css` (32KB) extracted).
  The TEMPLATES.md screenshot (`architect-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):**
  1. Navbar: logo "Foundry" + Home, Projects (dropdown: Commercial,
     Apartment, House, Building), Services, Blog, About, Contact.
  2. Hero slider: "Providing all Kinds of Construction Services" + rotating
     taglines — **Constructing Spaces For You / Building Your Solid /
     High Class Building** (3 slides, dark photo bg, 3 yellow dots).
  3. Welcome: "Welcome! Secrets of Success of Our Projects" + **25 Years
     Experience** yellow box + blurb.
  4. Works: "Our Done Projects" + **California Mega Mall, Commercial
     Building, Miami Private Apartment** + **View All Projects**.
  5. Counters band: **Projects / Employees / Constructor / Partners**
     (photo background).
  6. Services: "We Offer Services" + **General Constructing, Building
     Modeling, Design Build, Construction Services, Pre-Construction
     Design, Construction Management**.
  7. Blog: "Read Our Blog" + 3 posts + **View All Blog Post**.
  8. Engineers: "Our Engineers" + **John Miller, Brian Smith**.
  9. Testimonials: "What Our Client Says" + 3 client quotes.
  10. Newsletter: "Sign up for a Newsletter" + email input + Subscribe.
  11. Footer: About Company, Recent Blog, Information, Contact Info
      columns + social icons + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#FFCD00`** (buttons, accents).
  - Dark text `#333333`, `#252525`; light `#fafafa`.
  - Font: **"Montserrat"** (Google Fonts).
  - Buttons: uppercase, letter-spacing, sharp corners (no radius), yellow
    background with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/foundry-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Foundry lives in `apps/foundry` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Foundry",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Foundry page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Foundry" and links to Home, Projects, Services, Blog, About, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero slider with a headline and a
call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Providing all Kinds of Construction Services"
- **AND** it SHALL show at least one of the taglines "Constructing Spaces For You", "Building Your Solid", or "High Class Building"

### Requirement: Welcome section

The system SHALL render a welcome section with a heading and a "25 Years
Experience" stat.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a heading "Secrets of Success of Our Projects"
- **AND** it SHALL show a "25 Years Experience" stat and a blurb

### Requirement: Works section

The system SHALL render a works section with a heading, at least three
project cards, and a "View All Projects" button.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL contain a heading "Our Done Projects"
- **AND** it SHALL show at least three project cards and a "View All Projects" button

### Requirement: Services section

The system SHALL render a services section listing at least six services.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We Offer Services"
- **AND** it SHALL list the six services: General Constructing, Building Modeling, Design Build, Construction Services, Pre-Construction Design, Construction Management

### Requirement: Blog section

The system SHALL render a blog section with at least three post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Read Our Blog"
- **AND** it SHALL show at least three blog post cards and a "View All Blog Post" button

### Requirement: Engineers section

The system SHALL render an engineers section listing team members.

#### Scenario: Engineers content

- **GIVEN** the page is rendered
- **WHEN** the engineers section is displayed
- **THEN** it SHALL contain a heading "Our Engineers"
- **AND** it SHALL show the engineers "John Miller" and "Brian Smith"

### Requirement: Testimonials section

The system SHALL render a testimonials section with client quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Client Says"
- **AND** it SHALL show at least one client quote

### Requirement: Newsletter section

The system SHALL render a newsletter signup section with an email input and
a subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Sign up for a Newsletter"
- **AND** it SHALL show an email input and a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Foundry app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Foundry — Construction Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh foundry` passes (typecheck, lint, 100% coverage, build)
- [ ] `npm run spec:validate` passes
- [ ] Screenshot comparison: hero slider, welcome, works, counters, services, blog, engineers, testimonials, newsletter, footer match the ColorLib "architect" preview layout and tokens
