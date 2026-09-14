# Template: Grain (Interior Design Portfolio)

## Purpose

Grain is a single-page interior design portfolio landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Spacewood" free template (source:
https://colorlib.com/wp/template/spacewood/), built under a
DIFFERENT name (**Grain**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 interior design portfolio with Poppins +
Abril Fatface fonts, warm brown accent (#a3816a), full-viewport hero
slider with project slides, a project gallery grid, about section with
stats, and a simple footer. Grain recreates this as a modern React
single-page app with Tailwind CSS utility classes.

## Requirements

### Requirement: Navigation

Grain SHALL display a fixed top navbar with the brand name "Grain",
a hamburger menu button for mobile, and navigation links (Home, Work,
About, Contact).

#### Scenario: Navbar renders brand and links

- **GIVEN** the user visits the Grain template
- **WHEN** the page loads
- **THEN** the navbar displays the "Grain" brand name
- **AND** navigation links for Home, Work, About, and Contact are visible

#### Scenario: Mobile menu toggle

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the side navigation panel slides open from the right
- **AND** the button aria-expanded attribute is true

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the side navigation panel closes

### Requirement: Hero Section

Grain SHALL display a full-viewport hero section with a background image,
dark overlay, project title, category tag, description, and a CTA button.

#### Scenario: Hero displays project info

- **GIVEN** the hero section is visible
- **THEN** the project title "White Sofas" is displayed
- **AND** the category tag "Interior" is shown
- **AND** a description paragraph is visible
- **AND** a "View Project" CTA link points to the gallery section

### Requirement: Project Gallery

Grain SHALL display a grid of 6 portfolio project cards, each with an
image, title, category label, and a hover overlay with "View Project" link.

#### Scenario: Gallery renders project cards

- **GIVEN** the gallery section is visible
- **THEN** 6 project cards are displayed
- **AND** each card shows a title, category, and image
- **AND** each card has a "View Project" link

### Requirement: About Section

Grain SHALL display an about section with a split layout: image on the
left, text content on the right with heading, description paragraphs,
and statistics counters.

#### Scenario: About displays content and stats

- **GIVEN** the about section is visible
- **THEN** the heading "About Grain" is displayed
- **AND** description paragraphs are visible
- **AND** three statistics are shown (120+ Projects, 50+ Clients, 15+ Awards)

### Requirement: Footer

Grain SHALL display a footer with copyright text and a link to
Component Dock (https://www.componentdock.com/).

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **THEN** there is a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab with rel="noopener noreferrer"

#### Scenario: Footer shows copyright

- **GIVEN** the footer is visible
- **THEN** the current year is displayed in the copyright text

## Design Tokens

| Token        | Value         | Usage                                    |
| ------------ | ------------- | ---------------------------------------- |
| brand        | #a3816a       | Logo accent, hover states, category tags |
| surface      | #ffffff       | Page background                          |
| surface-dark | #1a1a1a       | Dark sections, overlay                   |
| text-primary | #212529       | Headings                                 |
| text-body    | #6b7280       | Body copy                                |
| font-sans    | Poppins       | Body text                                |
| font-display | Abril Fatface | Logo/brand display                       |

## Sections (in order)

1. **Navbar** — Fixed top, logo "Grain", hamburger menu, links: Home, Work, About, Contact
2. **Hero** — Full-viewport, background image + dark overlay, project title + category + description + CTA
3. **ProjectGallery** — 3-column grid of 6 portfolio items with hover overlays
4. **About** — Split layout: image left, text + stats right
5. **Footer** — Copyright + Component Dock link
