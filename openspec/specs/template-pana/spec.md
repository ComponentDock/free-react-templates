# Pana — Photography Accordion Gallery Template

Recreation of ColorLib "Tulen" (https://colorlib.com/wp/template/tulen/).

## Purpose

Pana is a photography portfolio single-page template featuring a dark-themed
accordion-style hero gallery where five full-bleed images expand/collapse to
reveal overlay text (category tag, title, author). The design uses Montserrat
font, a vivid purple (#2916e0) accent, dark background (#0f0f0f), and an
offcanvas sidebar menu. Social links and a branded footer complete the layout.

## Design tokens

| Token          | Value                     |
| -------------- | ------------------------- |
| Font           | Montserrat (Google Fonts) |
| Brand color    | #2916e0 (vivid purple)    |
| Background     | #0f0f0f (near-black)      |
| Surface        | #000000 (black)           |
| Text primary   | #ffffff (white)           |
| Text muted     | #b2b2b2 (gray)            |
| Tag background | #ffffff                   |
| Tag text       | #2916e0                   |
| Error/accent   | #e21010 (red)             |

## Requirements

### Requirement: Offcanvas sidebar menu

The template SHALL display a sidebar menu triggered by a hamburger icon in the
top-left corner. The menu contains the brand logo, navigation links (Home,
About, Gallery, Blog, Contact), social icon links, and a close button.

#### Scenario: Menu opens on hamburger click

- **WHEN** the hamburger menu button is clicked
- **THEN** the sidebar menu slides in from the left
- **AND** navigation links (Home, About, Gallery, Blog, Contact) are visible
- **AND** social icon links (Facebook, Twitter, LinkedIn, Instagram) are rendered

#### Scenario: Menu closes on close button

- **WHEN** the close button in the sidebar is clicked
- **THEN** the sidebar menu slides out

#### Scenario: Social icons in sidebar

- **WHEN** the sidebar is open
- **THEN** 4 social icon links are rendered in the sidebar footer area

### Requirement: Hero accordion gallery

The template SHALL display a full-bleed hero section with 5 photo items
arranged as an accordion. Each item shows a background image. When expanded,
the item reveals an overlay with a category tag, a title, and an author block
(avatar + name).

#### Scenario: Accordion renders 5 items

- **WHEN** the page loads
- **THEN** 5 accordion items are rendered
- **AND** the first item is expanded by default
- **AND** each item has a visible background image

#### Scenario: Accordion item content

- **WHEN** an accordion item is expanded
- **THEN** a category tag (e.g. "people") is displayed
- **AND** a title (e.g. "69 Flavio Burg Suite") is displayed
- **AND** an author block with avatar and name is displayed

#### Scenario: Accordion interaction

- **WHEN** a collapsed accordion item is clicked
- **THEN** it expands and the previously expanded item collapses
- **AND** the background image transitions smoothly

### Requirement: Footer with Component Dock branding

The template SHALL display a dark footer with copyright text and a "Component
Dock" link pointing to https://www.componentdock.com/ that opens in a new tab.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer displays copyright text
- **AND** a "Component Dock" link is rendered with href
  "https://www.componentdock.com/"
- **AND** the link opens in a new tab (target="_blank" rel="noopener noreferrer")
