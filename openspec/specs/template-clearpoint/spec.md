# Template: Clearpoint (Portfolio)

## Purpose

Clearpoint is a single-page portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Schmidt" free template, built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a professional portfolio page with gold/yellow accents: a
hero ("I'm John Clearpoint", "UI/UX Designer & Developer"), an about
section with skill bars, services grid, experiences/stats, works/case
studies, and a dark footer with Component Dock link. Clearpoint recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

- **Source:** https://colorlib.com/wp/template/schmidt/
- **Preview:** https://preview.colorlib.com/theme/schmidt/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `clearpoint` (no collision with existing apps/specs)

## Design Tokens

### Colors

| Token           | Hex       | Usage                                      |
| --------------- | --------- | ------------------------------------------ |
| `--color-brand` | `#d5c455` | Gold / Yellow accent — buttons, highlights |
| `--color-ink`   | `#1a1a1a` | Dark text / headings                       |
| `--color-mist`  | `#666666` | Muted body text                            |
| `--color-paper` | `#ffffff` | White section backgrounds                  |
| `--color-cloud` | `#f8f9fa` | Light gray section backgrounds             |

### Typography

| Role            | Font family | Notes                       |
| --------------- | ----------- | --------------------------- |
| Body / Headings | Poppins     | Sans-serif, used throughout |

### Buttons & Radii

| Element          | Style                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| Primary button   | bg brand gold (#d5c455), dark text, rounded, padding ~0.75rem vertical |
| Secondary button | Outline / transparent, border-radius rounded                           |
| CTA button       | bg dark (#1a1a1a), white text, rounded pill                            |

### Section Backgrounds

| Section     | Background                         |
| ----------- | ---------------------------------- |
| Hero        | Full-bleed image with dark overlay |
| About       | White                              |
| Services    | Light gray (#f8f9fa)               |
| Experiences | White                              |
| Works       | White                              |
| Footer      | Dark (#1a1a1a)                     |

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand name
"Clearp." and section links: Home, About, Services, Experiences, Works,
Blog, Contact. On mobile (< 768px), a hamburger button SHALL toggle the
navigation menu.

#### Scenario: Navbar content

- **GIVEN** the Clearpoint page is rendered
- **WHEN** the user views the navbar
- **THEN** the brand text "Clearp." is visible
- **AND** navigation links for Home, About, Services, Experiences, Works, Blog, Contact are present

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport is less than 768px wide
- **WHEN** the user taps the hamburger button
- **THEN** the navigation menu opens
- **AND** tapping the button again closes the menu

### Requirement: Hero section

The system SHALL render a hero section with a full-bleed background image,
a subheading "UI/UX Designer & Developer", the heading "I'm John
Clearpoint", and two CTA buttons: "More About Me" and "Hire Me".

#### Scenario: Hero content

- **GIVEN** the user lands on the Clearpoint page
- **WHEN** the hero section is displayed
- **THEN** the subheading "UI/UX Designer & Developer" is visible
- **AND** the heading "I'm John Clearpoint" is shown
- **AND** buttons "More About Me" and "Hire Me" are present

### Requirement: About section

The system SHALL render an about section with bio details and skill
progress bars. Personal info items (name, age, phone, email, address)
SHALL be displayed alongside the bio.

#### Scenario: About details visible

- **GIVEN** the user scrolls to the About section
- **WHEN** the section is in view
- **THEN** bio details and skill progress bars are displayed
- **AND** personal info items are shown

### Requirement: Services section

The system SHALL render a services grid with at least 4 service cards,
each containing an icon, title, and description.

#### Scenario: Services grid

- **GIVEN** the user scrolls to the Services section
- **WHEN** the section is in view
- **THEN** service cards with icons, titles, and descriptions are shown
- **AND** there are at least 4 service cards

### Requirement: Experiences / stats

The system SHALL render an experiences section with stat counters for key
metrics.

#### Scenario: Stats counters

- **GIVEN** the user scrolls to the Experiences section
- **WHEN** the section is in view
- **THEN** stat counters for key metrics are visible

### Requirement: Works / case studies

The system SHALL render a works section with case study items containing
images and titles.

#### Scenario: Case study showcase

- **GIVEN** the user scrolls to the Works section
- **WHEN** the section is in view
- **THEN** case study items with images and titles are shown

### Requirement: Footer

The system SHALL render a footer with a copyright notice and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link present

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is in view
- **THEN** a copyright notice is present
- **AND** a link to https://www.componentdock.com/ with text "Component Dock" is visible
