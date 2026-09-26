# Template: Echo (Personal Portfolio)

## Purpose

Echo is a single-page personal portfolio template — a creative portfolio
for web designers and developers. It is an original React recreation of
the ColorLib free "Beckham" template
(preview: https://preview.colorlib.com/theme/beckham/ — personal/creative portfolio),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Font: Montserrat (Google Fonts via `<link>`)
- Primary accent: #79efb4 (mint green)
- Dark sidebar/nav: #1a1a1a
- Light background: #fff (content areas)
- Counter section: dark background (#222)
- Footer: dark background (#222)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Echo lives in `apps/echo` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Structure (from ColorLib Beckham preview)

1. **Sidebar Navigation** — dark left sidebar with author photo, numbered menu items (01–06)
2. **Top Header** — sticky top bar with author photo + name logo
3. **Hero Slider** — full-height background images with overlay, centered text
4. **About Section** — split layout: author image left, bio + social links + contact right
5. **Services Section** — 3-column grid with icons and service lists
6. **Portfolio Section** — 6 alternating image/text project cards
7. **Counter Section** — 3 achievement counters (Clients, Projects, Coffee)
8. **Footer** — dark footer with social links, contact email, copyright

## Requirements

### Requirement: Sidebar Navigation

The system SHALL render a dark sidebar navigation with the site name,
an author photo, and numbered navigation links (Home, Resume, Services,
Portfolio, Blog, Contact).

#### Scenario: Desktop sidebar

- **GIVEN** the page is rendered on desktop
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the site name "Echo"
- **AND** it SHALL show an author photo
- **AND** it SHALL show numbered links (01 Home, 02 Resume, 03 Services, 04 Portfolio, 05 Blog, 06 Contact)

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible

### Requirement: Header

The system SHALL render a sticky top header with the author photo and site name.

#### Scenario: Header content

- **GIVEN** the header renders
- **WHEN** I look at the top bar
- **THEN** I SHALL see the author photo and "Echo" as the site name

### Requirement: Hero Section

The system SHALL render a full-height hero section with a background image,
overlay, and centered text.

#### Scenario: Hero content

- **GIVEN** the hero section renders
- **WHEN** I read the content
- **THEN** I SHALL see a greeting line ("Hello! I'm")
- **AND** I SHALL see the name "Echo" in large heading

### Requirement: About Section

The system SHALL render an about section with a split layout:
author image on the left, bio text on the right.

#### Scenario: About content

- **GIVEN** the about section renders
- **WHEN** I read the content
- **THEN** I SHALL see an "About" heading
- **AND** I SHALL see a bio paragraph
- **AND** I SHALL see social media links
- **AND** I SHALL see contact information (email, phone)

### Requirement: Services Section

The system SHALL render a services section with 3 service cards.

#### Scenario: Service cards

- **GIVEN** the services section renders
- **WHEN** I count the service cards
- **THEN** I SHALL see 3 service items with icons and lists of sub-services

### Requirement: Portfolio Section

The system SHALL render a portfolio section with 6 project items
in an alternating image/text layout.

#### Scenario: Portfolio items

- **GIVEN** the portfolio section renders
- **WHEN** I count the project items
- **THEN** I SHALL see 6 project items with images, category labels, titles, and descriptions

### Requirement: Counter Section

The system SHALL render a counter section with 3 achievement statistics.

#### Scenario: Counter items

- **GIVEN** the counter section renders
- **WHEN** I count the statistics
- **THEN** I SHALL see 3 counter items (Clients, Projects done, Cups of coffee)

### Requirement: Footer

The system SHALL render a dark footer with social links, contact email,
and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **GIVEN** the footer renders
- **WHEN** I look for the attribution
- **THEN** I SHALL see a link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"
