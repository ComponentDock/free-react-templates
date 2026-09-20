---
name: eduforge
description: Online education and courses landing page
category: Education
source: ColorLib Edusite
source_url: https://colorlib.com/wp/template/edusite/
preview_url: https://preview.colorlib.com/theme/edusite/
---

# Eduforge — Education / Online Courses Template

Recreation of ColorLib "Edusite" (https://colorlib.com/wp/template/edusite/) as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Purpose

Provide a free, production-ready online education landing page template with hero, about, course catalog, call-to-action, and footer sections. Built for training providers, online course platforms, and education businesses.

## Design Tokens (extracted from preview)

| Token            | Value              | Notes                   |
| ---------------- | ------------------ | ----------------------- |
| font-heading     | Montserrat         | sans-serif              |
| font-body        | Montserrat         | sans-serif              |
| color-body       | #798696            | gray text               |
| color-heading    | #374050            | dark navy headings      |
| color-primary    | #FF6700            | orange brand accent     |
| color-gray-bg    | #EBEBEB            | light gray borders/bgs  |
| button-radius    | 40px               | rounded pill            |
| feature-icon-bg  | #FF6700            | circular orange icon bg |
| overlay-gradient | #374050 to #798796 | parallax overlay        |

## Requirements

### Requirement: Navbar

The template SHALL render a sticky navigation bar with logo and links.

#### Scenario: Logo text

- **WHEN** the page loads
- **THEN** the navbar displays "Eduforge" as logo text

#### Scenario: Navigation links

- **WHEN** the page loads
- **THEN** the navbar shows Home, About, Courses, Blog, and Contact links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero section

The template SHALL render a full-viewport hero with background image, headline, and CTA.

#### Scenario: Hero heading

- **WHEN** the page loads
- **THEN** the hero displays "Eduforge Online Training Courses" as the main heading

#### Scenario: Hero CTA

- **WHEN** the page loads
- **THEN** a "Get Started!" button is visible in the hero

### Requirement: About section

The template SHALL render an about section with features and an image.

#### Scenario: About heading

- **WHEN** the page loads
- **THEN** the about section displays "Welcome to Eduforge"

#### Scenario: Feature items

- **WHEN** the page loads
- **THEN** three features are shown: Online Courses, Expert Teachers, Community

### Requirement: Courses section

The template SHALL render a course catalog grid with 8 course cards.

#### Scenario: Course heading

- **WHEN** the page loads
- **THEN** the heading reads "Explore Courses"

#### Scenario: Course cards

- **WHEN** the page loads
- **THEN** 8 course cards are displayed, each with title, category badge, and price badge

#### Scenario: More Courses button

- **WHEN** the page loads
- **THEN** a "More Courses" button is visible below the grid

### Requirement: CTA section

The template SHALL render a call-to-action section with parallax background.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** the CTA section shows a headline mentioning Eduforge and a "Get Started!" button

### Requirement: Why Us section

The template SHALL render a "Why Eduforge" section with features and a video thumbnail.

#### Scenario: Why Us heading

- **WHEN** the page loads
- **THEN** the heading reads "Why Eduforge"

#### Scenario: Features and video

- **WHEN** the page loads
- **THEN** three feature items and a video thumbnail with play icon are displayed

### Requirement: Contact CTA section

The template SHALL render a contact call-to-action section.

#### Scenario: Contact heading

- **WHEN** the page loads
- **THEN** the heading reads "Contact Us"

#### Scenario: Contact button

- **WHEN** the page loads
- **THEN** a "Contact Us Now" button is visible

### Requirement: Footer

The template SHALL render a footer with Component Dock branding.

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Copyright

- **WHEN** the page loads
- **THEN** the footer shows the copyright text with the current year

#### Scenario: Social icons

- **WHEN** the page loads
- **THEN** social media icon links are displayed (Facebook, Twitter, Instagram, LinkedIn)
