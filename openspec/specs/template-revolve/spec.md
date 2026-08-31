# Template: Revolve (Full-Screen Carousel)

## Purpose

Revolve is a full-screen carousel landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Carousel 01"
design, built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based full-screen carousel with large background
images, overlay text (heading + subtext + CTA), navigation dots, and left/right
arrows. The design is minimal and modern — the hero IS the entire page with a
carousel taking up the full viewport. A small header bar sits at the top with
a logo and hamburger menu. Revolve recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 01" — free full-screen carousel template
  (source: https://colorlib.com/wp/template/carousel-01/).
- **Live preview DOM:** unreachable (HTTP 404 at
  `https://preview.colorlib.com/theme/carousel-01/`). Falling back to the
  TEMPLATES.md screenshot (`carousel-01.jpg`) and the ColorLib page description:
  "An attention-grabbing free full-screen carousel template that operates on all
  popular devices without a hutch."
- **Section order (1:1):**
  1. Header/Navbar: site name "Revolve" (or similar brand) + hamburger menu for
     mobile, clean minimal bar at top.
  2. Full-screen carousel (hero): 3–4 slides, each with a full-viewport
     background image, a centered heading, subtext, and a CTA button.
     Navigation dots at the bottom center, left/right arrow buttons on the sides.
     Auto-advances every 5 seconds; pauses on hover; arrow click advances manually.
  3. Footer: simple copyright bar with "Made with Component Dock" link.
- **Design tokens (inferred from screenshot + typical carousel template):**
  - Brand color: **#ffffff** (white text on dark/image backgrounds)
  - Accent/CTA color: **#007bff** (blue) or a bold color for CTA buttons
  - Background: full-screen images (dark overlays for text readability)
  - Font: **"Poppins"** (sans-serif) via Google Fonts
  - Buttons: white or accent filled, rounded, uppercase
  - Dark overlay: semi-transparent black over images for contrast
- **Recreation decisions:** repo-standard Navbar with site name "Revolve" and
  hamburger toggle; full-screen carousel component with state management (current
  slide index, auto-advance interval, pause-on-hover); navigation dots and arrow
  buttons; footer with Component Dock branding; all images picsum-seeded
  (`picsum.photos/seed/revolve-N/w/h`); Google Fonts via `<link>`.

Revolve lives in `apps/revolve` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a minimal top navigation bar with the site name "Revolve"
and a hamburger menu button for mobile navigation.

#### Scenario: Navbar renders site name

- **GIVEN** the Revolve page is rendered
- **WHEN** the user inspects the header
- **THEN** the text "Revolve" SHALL be visible in the navigation bar

#### Scenario: Hamburger menu toggle

- **GIVEN** the Revolve page is rendered on mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the menu SHALL toggle open/closed
- **AND** the button SHALL have an accessible `aria-expanded` attribute

#### Scenario: Dark mode toggle

- **GIVEN** the Revolve page is rendered
- **WHEN** the user clicks the dark mode toggle button
- **THEN** the page SHALL switch between light and dark themes

### Requirement: Full-screen carousel

The system SHALL render a full-screen carousel with multiple slides, each
displaying a background image, heading text, subtext, and a CTA button.

#### Scenario: Carousel displays slides

- **GIVEN** the Revolve page is rendered
- **WHEN** the user views the carousel
- **THEN** the first slide SHALL be visible with a background image, heading,
  subtext, and a call-to-action button

#### Scenario: Carousel auto-advances

- **GIVEN** the Revolve page is rendered
- **WHEN** the user waits approximately 5 seconds without interaction
- **THEN** the carousel SHALL advance to the next slide automatically

#### Scenario: Carousel manual navigation via arrows

- **GIVEN** the Revolve page is rendered
- **WHEN** the user clicks the right arrow button
- **THEN** the carousel SHALL advance to the next slide
- **AND** clicking the left arrow SHALL go to the previous slide

#### Scenario: Carousel manual navigation via dots

- **GIVEN** the Revolve page is rendered
- **WHEN** the user clicks a navigation dot
- **THEN** the carousel SHALL navigate to the corresponding slide

#### Scenario: Carousel pauses on hover

- **GIVEN** the Revolve page is rendered and the carousel is auto-advancing
- **WHEN** the user hovers over the carousel area
- **THEN** the auto-advance SHALL pause
- **AND** when the user moves the mouse away, auto-advance SHALL resume

#### Scenario: Carousel accessible navigation

- **GIVEN** the Revolve page is rendered
- **WHEN** the user inspects the arrow and dot buttons
- **THEN** each SHALL have descriptive `aria-label` attributes

### Requirement: Footer

The system SHALL render a simple footer with a Component Dock branding link.

#### Scenario: Footer content

- **GIVEN** the Revolve page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" SHALL be visible
- **AND** the text "Made with Component Dock" or similar branding SHALL appear

### Requirement: Responsive design

The system SHALL be responsive and work on mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout

- **GIVEN** the Revolve page is rendered on a 375px viewport
- **WHEN** the user views the carousel
- **THEN** the slide content SHALL be readable and properly sized
- **AND** the hamburger menu SHALL replace horizontal navigation

#### Scenario: Desktop layout

- **GIVEN** the Revolve page is rendered on a 1280px viewport
- **WHEN** the user views the carousel
- **THEN** the slide content SHALL fill the viewport with proper spacing
