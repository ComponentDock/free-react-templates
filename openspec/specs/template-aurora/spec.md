# Template: Aurora (Style & Fashion Landing)

## Purpose

Aurora is a single-page style & fashion template — the flagship template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Maze" template
(preview: https://preview.colorlib.com/theme/maze/ — personal/fashion landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand pink `#f66483` (banner/newsletter backgrounds), white content areas,
  dark grey text
- Typeface: Poppins (Google Fonts via `<link>`)
- White pill buttons with pink text; uppercase section headings
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Aurora lives in `apps/aurora` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a pink navbar with the site name "Aurora", section links
(Home, Arrivals, Gallery, Features, Contact), and a hamburger toggle that opens
a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Aurora" linking to `#home`
- **AND** it SHALL show links to Home, Arrivals, Gallery, Features and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a split hero on the brand pink background with a
headline, supporting paragraph, a white pill "Send Message" button, and a
portrait image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "New Styles, Suited for You Unlike Any
  Other"
- **AND** it SHALL contain a "Send Message" button and a portrait image with an
  accessible label

### Requirement: Arrivals section

The system SHALL render a white "What's New" section with three cards, each with
an image, a title, a blurb and a "Learn Details" link.

#### Scenario: Arrival cards

- **GIVEN** the page is rendered
- **WHEN** the arrivals section is displayed
- **THEN** it SHALL show the section heading
- **AND** it SHALL show cards titled "Fresh Arrivals", "Online Store" and
  "New Collection", each with a "Learn Details" link

### Requirement: Parallax tiles

The system SHALL render two full-width image tiles with dark gradient overlays,
titles and captions.

#### Scenario: Image tiles

- **GIVEN** the page is rendered
- **WHEN** the parallax section is displayed
- **THEN** it SHALL show tiles titled "Peak Collection" and "Night Market",
  each with an image and a caption

### Requirement: Gallery section

The system SHALL render a "Lookbook" gallery with a grid of six images.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery is displayed
- **THEN** it SHALL show the "Lookbook" heading
- **AND** it SHALL show six images with accessible labels

### Requirement: Features section

The system SHALL render a "Why Aurora" section with six feature tiles, each with
a pink icon, a title and a blurb.

#### Scenario: Feature tiles

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the "Why Aurora" heading
- **AND** it SHALL show tiles titled "Parallax Support", "HTML5 Video",
  "Retina Ready Graphics", "Endless Possibilities", "Documentation" and
  "Boxed & Wide Layouts"

### Requirement: Performance section

The system SHALL render a two-column "Built to Perform" section with two points
("Powerful Performance", "Light & Dark Color Schemes") and an image.

#### Scenario: Performance content

- **GIVEN** the page is rendered
- **WHEN** the performance section is displayed
- **THEN** it SHALL show the "Built to Perform" heading and both point headings
- **AND** it SHALL show the section image

### Requirement: Newsletter form

The system SHALL render a pink newsletter section with an email form. Submitting
an invalid email SHALL show an error; a valid email SHALL show a success message
and clear the field.

#### Scenario: Invalid email

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an empty or invalid email
- **THEN** an error message SHALL be displayed
- **AND** the success message SHALL NOT be shown

#### Scenario: Successful subscription

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email
- **THEN** a success message SHALL be displayed
- **AND** the email field SHALL be cleared

### Requirement: Footer

The system SHALL render a dark footer with the site name, a tagline, and social
links (Facebook, Twitter, Instagram, LinkedIn) that open in a new tab.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name and tagline
- **AND** it SHALL show the four social links with `target="_blank"`

### Requirement: Page composition

The system SHALL compose all sections in order (Navbar, Hero, Arrivals,
Parallax, Gallery, Features, Performance, Newsletter, Footer) inside a main
landmark, and set the document title.

#### Scenario: Full page render

- **GIVEN** the Aurora app is rendered
- **WHEN** the page loads
- **THEN** all sections SHALL be present in the main landmark
- **AND** the document title SHALL be "Aurora — Style & Fashion Template"
