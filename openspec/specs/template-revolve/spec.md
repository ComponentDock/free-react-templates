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

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/carousel-01/` | HTTP 200 · 3,202 B · title `Carousel 01` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/carousel-01/css/style.css?v=9a407492` | HTTP 200 · 21,811 B · sha256 `3e1cad54430d` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×7,
`#000000`×2, `#d6d6d6`×2, `#869791`×2, `#212529`×1, `#007bff`×1,
`#0056b3`×1, `#3e64ff`×1, `#e6e6e6`×1, `#4d4d4d`×1.

**Low-chroma values the sheet actually uses** — `#d6d6d6`, `#869791`,
`#212529`, `#e6e6e6`; any sampled Tailwind grey above is an approximation of
these.

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/revolve/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/revolve/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation bar — the text "Revolve" SHALL be visible in the navigation bar
- [ ] Full-screen carousel — the first slide SHALL be visible with a background image, heading,
- [ ] Responsive design — the slide content SHALL be readable and properly sized
