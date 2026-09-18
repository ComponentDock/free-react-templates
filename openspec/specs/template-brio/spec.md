## Purpose

Brio is a bright app landing page template recreating the ColorLib Typo design.
It showcases a hero with warm gradient, feature sections, a dark offer area,
process grid, newsletter subscription, and a full footer — all built with
React 19, Tailwind CSS 4, and TypeScript.

Source: https://colorlib.com/wp/template/typo/
Preview: https://preview.colorlib.com/theme/typo/

## Requirements

### Requirement: Hero section with gradient overlay

The template SHALL display a full-width hero with a coral-to-yellow gradient background, heading, description text, and a "Get Started" CTA button linking to the about section.

#### Scenario: Hero renders with correct content

- **GIVEN** the page loads
- **WHEN** the user views the hero section
- **THEN** the heading "Bright App Landing" is visible
- **AND** a description paragraph is displayed
- **AND** a "Get Started" link points to `#about`

### Requirement: Navbar with mobile toggle

The template SHALL display a navigation bar with the "Brio" logo, desktop nav links (About, Features, Services, Process), and a mobile hamburger toggle.

#### Scenario: Desktop navigation displays all links

- **GIVEN** the page loads on desktop viewport
- **WHEN** the user views the header
- **THEN** the logo "Brio" and four navigation links are visible

#### Scenario: Mobile menu toggles on button click

- **GIVEN** the page loads on mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with navigation links
- **AND** tapping again closes the menu

### Requirement: About Top section with split layout

The template SHALL display a split layout with an image on the left and two feature items (icon + heading + description) on the right.

#### Scenario: About top renders two feature items

- **GIVEN** the page loads
- **WHEN** the user scrolls to the about section
- **THEN** two feature items with headings and descriptions are visible
- **AND** an about image is rendered

### Requirement: Features section with three columns

The template SHALL display a three-column features section with two text features and one image.

#### Scenario: Features section renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to features
- **THEN** "Reasons To Choose Notebook" and "Facts Why Inkjet Printing" headings are visible
- **AND** the feature illustration image is rendered

### Requirement: Offer section with dark background

The template SHALL display a dark-background offer section with heading, app screen image, and description.

#### Scenario: Offer section renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to services
- **THEN** "Main Application Features" heading and description are visible
- **AND** the app screen preview image is rendered

### Requirement: About Bottom section with CTA

The template SHALL display a split layout with text and a "Learn More" CTA on the left and an image on the right.

#### Scenario: About bottom renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to the bottom about section
- **THEN** "Powerful Performance" heading and description are visible
- **AND** a "Learn More" link is interactive

### Requirement: Process section with 3x3 grid

The template SHALL display a 3x3 grid of 9 process items, each with an icon, title, and description.

#### Scenario: Process section renders all 9 items

- **GIVEN** the page loads
- **WHEN** the user scrolls to the process section
- **THEN** all 9 process items with icons, titles, and descriptions are visible

### Requirement: Newsletter subscription form

The template SHALL display a dark-background newsletter section with an email subscription form.

#### Scenario: Newsletter form renders and submits

- **GIVEN** the page loads
- **WHEN** the user types an email and clicks submit
- **THEN** the email input is cleared after submission

### Requirement: Footer with Component Dock link

The template SHALL display a 4-column footer (Top Products, Navigation, Compare, About) with copyright and a link to Component Dock.

#### Scenario: Footer renders all columns and Component Dock link

- **GIVEN** the page loads
- **WHEN** the user scrolls to the footer
- **THEN** the 4-column layout is visible
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- **AND** the copyright with current year is displayed
