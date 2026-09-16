## Purpose

Fellowship is a free church community landing page template. It recreates a
ColorLib Brotherlylove design under a different name with React 19, Tailwind
CSS 4, and TypeScript. The template provides a full church website landing
experience with navigation, hero, sermon highlights, ministry features,
services, events, testimonials, and footer.

## Requirements

### Requirement: Page renders all sections

The template SHALL render a complete church landing page with a top bar,
navbar, hero, latest sermon bar, welcome section, features section, church
services section, latest sermons and events section, testimonials section,
and footer.

#### Scenario: All sections are present

- **GIVEN** the Fellowship app loads
- **THEN** the top bar is visible with navigation links
- **AND** the navbar displays "Fellowship" brand
- **AND** the hero section shows the heading "Let your light so shine before men."
- **AND** the latest sermon bar is visible
- **AND** the welcome section is visible
- **AND** the features section shows 3 ministry cards
- **AND** the church services section shows service cards
- **AND** the latest sermons and events section is visible
- **AND** the testimonials section shows 3 testimonial cards
- **AND** the footer links to Component Dock

### Requirement: Navbar with dropdowns

The navbar SHALL display desktop navigation links including dropdown menus for
Ministries and Sermons, with a mobile hamburger toggle.

#### Scenario: Desktop dropdown on hover

- **GIVEN** the navbar is rendered on desktop
- **WHEN** I hover over "Ministries"
- **THEN** a dropdown menu appears with ministry sub-links

#### Scenario: Mobile menu toggle

- **GIVEN** I am on a mobile viewport
- **WHEN** I click the hamburger button
- **THEN** the mobile navigation menu opens
- **AND** all nav links are visible

### Requirement: Hero section

The hero section SHALL display a full-viewport background image with a dark
overlay, a heading, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the hero section is visible
- **THEN** there is an "About Us" button
- **AND** there is a "Visit Our Church" link

### Requirement: Footer with Component Dock link

The footer SHALL display church quick links, events, contact information,
and a link to Component Dock.

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is visible
- **THEN** there is a link to "https://www.componentdock.com/"
- **AND** the link text contains "Component Dock"

### Requirement: Design tokens

The template SHALL use the following design tokens: brand color #6c5b7b,
Rubik font family, pill-shaped buttons, and light/dark section alternation.

#### Scenario: Brand color usage

- **GIVEN** any interactive element with brand styling
- **THEN** it uses the brand purple color
