# Template: Somersault (Interactive Carousel & Slider Showcase)

## Purpose

Somersault is a clean, modern interactive carousel and slider showcase template.
It is an original React recreation of the ColorLib free "Carousel 01" template
(preview: https://colorlib.com/wp/template/carousel-01/ — interactive carousel/slider
showcase), built under a new name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand primary indigo/blue `#4f46e5` (active dots, buttons, accents), white content areas,
  dark charcoal text (`#1f2937`), neutral light gray background (`#f9fafb`)
- Typeface: Inter (Google Fonts via `<link>`)
- Rounded cards with soft shadows (`shadow-lg`, `rounded-2xl`), smooth transition controls
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Somersault lives in `apps/somersault` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky header with the site logo "Somersault", navigation links
(Demos, Features, Showcase, Pricing, Contact), and a CTA button.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Somersault" linking to `#home`
- **AND** it SHALL show links to Demos, Features, Showcase, Pricing, and Contact
- **AND** a prominent "Get Started" CTA button

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is mobile width
- **WHEN** the user clicks the hamburger menu toggle
- **THEN** the mobile navigation drawer SHALL open with all section links
- **AND** clicking any link SHALL close the drawer

### Requirement: Hero slider section

The system SHALL render an interactive hero slider/carousel featuring multiple slides with headline,
subheadline, CTA buttons, and interactive navigation arrows and pagination dots.

#### Scenario: Slide rotation and controls

- **GIVEN** the hero carousel is displayed with multiple slides
- **WHEN** the user clicks the next arrow or pagination dot
- **THEN** the active slide SHALL transition smoothly to the selected slide
- **AND** the active pagination indicator SHALL update accordingly

### Requirement: Interactive Carousel Showcase section

The system SHALL render a multi-item carousel showcasing interactive card components with images,
titles, descriptions, and action buttons.

#### Scenario: Browsing carousel items

- **GIVEN** the carousel showcase section is visible
- **WHEN** the user clicks slide navigation controls
- **THEN** the carousel items SHALL scroll or transition to reveal adjacent cards

### Requirement: Features grid section

The system SHALL render a grid of feature highlight cards with icons, titles, and descriptive text.

#### Scenario: Feature cards display

- **GIVEN** the features section is rendered
- **WHEN** the user views the grid
- **THEN** it SHALL display 3-4 feature cards with clear visual hierarchy

### Requirement: Testimonials / Stats section

The system SHALL render a testimonials or stats counter section highlighting user feedback and metrics.

#### Scenario: Stats display

- **GIVEN** the testimonials section is reached
- **WHEN** the user scrolls to view
- **THEN** stats and testimonial cards SHALL be clearly legible against a contrasting background

### Requirement: Footer

The system SHALL render a comprehensive footer with brand description, quick links, newsletter signup,
and a mandatory credit link to Component Dock (`https://www.componentdock.com/`).

#### Scenario: Footer links and attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it SHALL display copyright information and a link to "Component Dock" (`https://www.componentdock.com/`)
