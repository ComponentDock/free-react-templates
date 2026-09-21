---
name: Sprintly
description: >
  Fitness & sport landing template recreating ColorLib "Activitar"
  (https://colorlib.com/wp/template/activitar/) under a new name.
  Dark-themed gym/fitness site with hero carousel, feature cards,
  class timetable, pricing plans, and blog section.
source:
  colorlib_slug: activitar
  preview_url: https://preview.colorlib.com/theme/activitar/
  screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/activitar-free-template.jpg
design_tokens:
  fonts:
    headings: Oswald
    body: Nunito Sans
  colors:
    primary: '#e16521'
    secondary: '#e4381C'
    accent_gold: '#ffca04'
    dark_bg: '#111111'
    dark_surface: '#1a1a1a'
---

## Purpose

Sprintly is a dark-themed fitness and sport landing page template. It recreates the ColorLib "Activitar" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with 100% test coverage.

## Requirements

### Requirement: Page structure and sections

The template SHALL render all sections in the correct order from top to bottom.

#### Scenario: Renders all sections

- **WHEN** the app loads
- **THEN** the page contains a Navbar, Hero, Features, About, Programs, Class Timetable, Pricing, Why Choose Us, Video CTA, Blog, and Footer sections

#### Scenario: Sets document title

- **WHEN** the app loads
- **THEN** the document title is "Sprintly — Fitness & Sport Template"

### Requirement: Navbar with navigation

The navbar SHALL display a logo, navigation links, and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the Navbar renders
- **THEN** it shows the logo "Sprintly" and links: Home, About, Classes, Schedule, Pricing, Blog, Contact

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu expands
- **WHEN** the user clicks the close button
- **THEN** the mobile menu collapses

### Requirement: Hero section

The hero section SHALL display a large heading, subtitle, and CTA button.

#### Scenario: Hero content

- **WHEN** the Hero section renders
- **THEN** it shows heading "Fitness & Sport", subtitle "Join Us Now", and a "Get Started" button

### Requirement: Features section with three cards

The features section SHALL display 3 feature cards with titles and descriptions.

#### Scenario: Three feature cards

- **WHEN** the Features section renders
- **THEN** it displays 3 cards each with a title and description

### Requirement: About section

The about section SHALL display a heading and description.

#### Scenario: About content

- **WHEN** the About section renders
- **THEN** it shows heading "Welcome to Sprintly" and a description paragraph

### Requirement: Programs section with four cards

The programs section SHALL display 4 program cards.

#### Scenario: Four program cards

- **WHEN** the Programs section renders
- **THEN** it displays 4 cards each with a title and description

### Requirement: Class timetable

The timetable section SHALL display a weekly schedule grid.

#### Scenario: Schedule grid

- **WHEN** the Class Timetable renders
- **THEN** it shows days of the week with class entries

### Requirement: Pricing section with three plans

The pricing section SHALL display 3 pricing plans.

#### Scenario: Three pricing plans

- **WHEN** the Pricing section renders
- **THEN** it displays 3 plans each with a name, price, features list, and CTA button

### Requirement: Why Choose Us section

The section SHALL display 6 items with icons and descriptions.

#### Scenario: Six reason items

- **WHEN** the Why Choose Us section renders
- **THEN** it displays 6 items each with an icon and description

### Requirement: Blog section with three posts

The blog section SHALL display 3 blog post cards.

#### Scenario: Three blog posts

- **WHEN** the Blog section renders
- **THEN** it displays 3 cards each with a title, excerpt, and image

### Requirement: Footer with Component Dock link

The footer SHALL link to Component Dock and display contact info.

#### Scenario: Footer content

- **WHEN** the Footer renders
- **THEN** it displays "More templates at Component Dock" linking to https://www.componentdock.com/
- **AND** it shows contact information and social links
