# Template: Conclave (Event / Conference)

## Purpose

Conclave is a single-page event/conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Umeet" free template (source:
https://colorlib.com/wp/template/umeet/), built under a
DIFFERENT name (**Conclave**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**Source slug:** `umeet`
**ColorLib page:** https://colorlib.com/wp/template/umeet/
**Live preview:** https://preview.colorlib.com/theme/umeet/

### Design tokens (extracted from preview CSS)

| Token           | Value                   | Notes                                 |
| --------------- | ----------------------- | ------------------------------------- |
| Primary brand   | `#3b1d82` (deep purple) | Used for headings, button bg, accents |
| Accent / CTA    | `#ea0763` (hot pink)    | Hover states, highlights, pricing CTA |
| Light bg        | `#f7f7f7`               | Section alternates                    |
| White bg        | `#fff`                  | Cards, main content                   |
| Dark footer bg  | `#111429` (navy)        | Footer background                     |
| Text primary    | `#242424`               | Headings, body text                   |
| Text muted      | `#797979`               | Subtitles, descriptions               |
| Font - headings | `Oswald, sans-serif`    | Used for large headings, hero title   |
| Font - body     | `Roboto, sans-serif`    | Body text, paragraphs, nav            |
| Button radius   | `4px`                   | Primary buttons                       |

## Requirements

### Requirement: Page structure and sections

The template MUST render 11 sections in the correct order.

#### Scenario: All sections render in order

- **WHEN** the page loads
- **THEN** the following sections are visible in order: Navbar, Hero Banner, Innovation/Countdown, Features, Speakers, Schedule, Pricing, Sponsors, Gallery, Blog, Footer

### Requirement: Navbar

The navbar MUST display logo, navigation links, and a CTA button.

#### Scenario: Desktop navigation

- **WHEN** the viewport is desktop-width
- **THEN** the navbar shows the brand name "Conclave" on the left
- **AND** navigation links (Home, About, Speakers, Schedule, Gallery, Pricing, Blog, Contact) are visible
- **AND** a "Get Ticket" button is visible on the right

#### Scenario: Mobile hamburger menu

- **WHEN** the viewport is mobile-width
- **THEN** a hamburger menu button is visible
- **AND** clicking it toggles the mobile navigation panel

### Requirement: Hero Banner

The hero MUST display event information with a background image.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** the date line "20-22 January, 2025, Buffalo City" is displayed
- **AND** the heading "UX CONFERENCE 2025" is displayed
- **AND** a "Buy Ticket" CTA button is visible

### Requirement: Innovation/Countdown section

The countdown section MUST display a countdown timer and event description.

#### Scenario: Countdown display

- **WHEN** the countdown section is visible
- **THEN** countdown boxes for Days, Hours, and Mins are displayed
- **AND** the heading "Innovative With Experience UX Design 2025" is visible

#### Scenario: Countdown updates

- **WHEN** 1 second passes
- **THEN** the countdown values update

### Requirement: Features section

The features section MUST display 3 feature cards.

#### Scenario: Feature cards render

- **WHEN** the features section is visible
- **THEN** 3 feature cards are displayed with icon, title, and description
- **AND** "Learn More" and "Buy Ticket" buttons are visible

### Requirement: Speakers section

The speakers section MUST display speaker cards in a grid.

#### Scenario: Speaker cards render

- **WHEN** the speakers section is visible
- **THEN** 6 speaker cards are displayed in a 3-column grid
- **AND** each card shows a photo, name, and role

### Requirement: Schedule section

The schedule section MUST display tabbed day views.

#### Scenario: Tab navigation

- **WHEN** the schedule section is visible
- **THEN** Day 1 is active by default
- **AND** clicking Day 2 switches to Day 2 sessions
- **AND** clicking Day 3 switches to Day 3 sessions
- **AND** clicking Day 4 switches to Day 4 sessions

#### Scenario: Session cards

- **WHEN** a day tab is active
- **THEN** session cards show speaker photo, name, role, time, title, and description

### Requirement: Pricing section

The pricing section MUST display 3 tier cards.

#### Scenario: Pricing cards render

- **WHEN** the pricing section is visible
- **THEN** 3 pricing cards are displayed: Normal ($45), Advance ($50), Ultimate ($60)
- **AND** each card shows a tier name, subtitle, price, feature list, and "Buy Now" button
- **AND** the Advance tier is highlighted as active

### Requirement: Sponsors section

The sponsors section MUST display sponsor logos in tiers.

#### Scenario: Sponsor tiers

- **WHEN** the sponsors section is visible
- **THEN** Gold tier shows 3 sponsor logos
- **AND** Silver tier shows 3 sponsor logos

### Requirement: Gallery section

The gallery section MUST display an image grid with hover overlay.

#### Scenario: Gallery images

- **WHEN** the gallery section is visible
- **THEN** 6 images are displayed in a grid
- **AND** hovering an image shows an overlay with a plus icon

### Requirement: Blog section

The blog section MUST display 3 blog preview cards.

#### Scenario: Blog cards

- **WHEN** the blog section is visible
- **THEN** 3 blog cards are displayed with image, title, date, and comment count

### Requirement: Footer

The footer MUST display 4 columns and a Component Dock link.

#### Scenario: Footer columns

- **WHEN** the footer is visible
- **THEN** 4 columns are displayed: About, Navigation, Newsletter, InstaFeed
- **AND** the Newsletter form validates email input
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present

### Requirement: Responsive layout

The template MUST be responsive across viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is mobile-width
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** pricing cards stack vertically

### Requirement: No ColorLib references

The app source code MUST NOT contain any references to ColorLib.

#### Scenario: Clean source

- **WHEN** searching for "colorlib" in the apps/conclave/ directory
- **THEN** no matches are found

### Requirement: Design fidelity

The template MUST match the original ColorLib Umeet design tokens.

#### Scenario: Brand colors match

- **WHEN** the template renders
- **THEN** primary color is #3b1d82 (deep purple)
- **AND** accent color is #ea0763 (hot pink)
- **AND** fonts are Oswald for headings and Roboto for body
