# Template: TaskFlow (Personal Portfolio / Creative Agency)

## Purpose

TaskFlow is a single-page personal portfolio and creative agency template.
It is a React recreation of the ColorLib "Work" template
(preview: https://preview.colorlib.com/theme/work/), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand orange-red `#F75940` (links, buttons, selection highlight)
- Typeface: Quicksand (Google Fonts via `<link>`)
- Fixed left sidebar with black logo, navigation, and social footer
- Hero slider with dark overlay and centered text
- Accordion in About section, 2-column service cards, portfolio grid, blog cards

TaskFlow lives in `apps/taskflow` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Sidebar navigation

The system SHALL render a fixed left sidebar with the logo "TaskFlow", navigation
links (Home, Work, About, Services, Blog, Contact), and a footer with copyright
and social media icon links.

#### Scenario: Desktop sidebar display

- **GIVEN** the page is rendered on desktop
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the logo "TaskFlow" in a black box with white text
- **AND** it SHALL show navigation links: Home, Work, About, Services, Blog, Contact
- **AND** it SHALL show a footer with copyright and Component Dock link

#### Scenario: Mobile sidebar toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user taps the hamburger menu button
- **THEN** the sidebar SHALL slide in from the left
- **AND** the toggle button SHALL change to a close icon

### Requirement: Hero slider

The system SHALL render a full-height hero section with slides containing background
images, dark overlays, centered headings, and CTA buttons.

#### Scenario: Hero slide display

- **GIVEN** the page is rendered
- **WHEN** the hero slider is visible
- **THEN** it SHALL display the heading "Strategic Design for Brands"
- **AND** it SHALL show a "Learn More" CTA button

### Requirement: About section with accordion

The system SHALL render an About section with overlapping images, a welcome
heading, descriptive text, and a 3-panel accordion.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** the About section is visible
- **THEN** it SHALL show a "Welcome & Introduce" meta heading
- **AND** it SHALL show the name heading "Hola! my name is Louie Jie!"
- **AND** it SHALL render an accordion with 3 panels

#### Scenario: Accordion expand and collapse

- **GIVEN** the About section accordion is visible with the first panel open
- **WHEN** the user clicks "What I do?"
- **THEN** the first panel SHALL collapse
- **AND** the "What I do?" panel SHALL expand

### Requirement: Services section

The system SHALL render a Services section with 6 expertise cards in a 2-column
grid, each with an icon, title, and description.

#### Scenario: Service cards display

- **GIVEN** the page is rendered
- **WHEN** the Services section is visible
- **THEN** it SHALL show the heading "Here are some of my expertise"
- **AND** it SHALL display 6 cards: Branding, Web Design, SEO, Web Development, UI, Help & Support

### Requirement: Portfolio section

The system SHALL render a Work/Portfolio section with 6 project cards in a
2-column grid, each with a background image, overlay, title, tags, and metrics.

#### Scenario: Portfolio grid display

- **GIVEN** the page is rendered
- **WHEN** the Work section is visible
- **THEN** it SHALL show the heading "Recent Work"
- **AND** it SHALL display 6 project cards with background images

### Requirement: Blog section

The system SHALL render a Blog section with 3 post cards in a 3-column layout,
each with an image, date, category, title, excerpt, and "Read More" link.

#### Scenario: Blog cards display

- **GIVEN** the page is rendered
- **WHEN** the Blog section is visible
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL display 3 blog cards

### Requirement: CTA section

The system SHALL render a CTA section with a light gray background, heading,
description, and contact button.

#### Scenario: CTA section content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is visible
- **THEN** it SHALL show the heading "Get in Touch!"
- **AND** it SHALL display a "Contact me!" button

### Requirement: Brand styling

The system SHALL apply the correct brand colors, fonts, and button styles
matching the original design.

#### Scenario: Brand color application

- **GIVEN** the page is rendered
- **WHEN** any interactive element is displayed
- **THEN** links and buttons SHALL use the brand color #F75940
- **AND** buttons SHALL have 2px border-radius, uppercase text, 12px font size

### Requirement: Footer branding

The system SHALL include a footer link to Component Dock.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **WHEN** the sidebar footer is visible
- **THEN** it SHALL contain a link to https://www.componentdock.com/
