# Template: SlideSpot (Carousel 06)

## Purpose

Recreation of ColorLib "Carousel 06" (https://colorlib.com/wp/template/carousel-06/, live preview at https://preview.colorlib.com/theme/bootstrap/carousel-06/). A split-screen carousel template with gorgeous background imagery, text overlay, contact details, and primary CTA buttons. New Name: SlideSpot (apps/slidespot, @free-react-templates/slidespot).

## Design Tokens & Replication Notes

- Layout: Split-screen full-width carousel with background imagery, text overlay / side content, contact details (phone, email), and primary CTA buttons ("Shop the collection", "Learn More"), plus navigation arrows (Prev / Next) and pagination dots.
- Colors:
  - Backgrounds: Deep charcoal / slate #111827, soft neutrals #f3f4f6, text panel #fff3f1 (peach).
  - Accent / Brand: Vibrant coral / rose #f43f5e.
  - Text: High-contrast white #ffffff on dark backgrounds, dark gray #1f2937 on light sections.
- Typography: Clean sans-serif (Poppins via Google Fonts).
- Footer: Mandatory footer linking https://www.componentdock.com/ (branded "Component Dock").

## Requirements

### Requirement: Interactive Split-Screen Carousel

The carousel SHALL display split-screen slides with a background image on one side and text content on the other. Users SHALL be able to navigate between slides using Prev/Next arrows and pagination dots.

#### Scenario: Default slide display

- **GIVEN** the user visits the SlideSpot home page
- **WHEN** the page loads
- **THEN** the first slide is displayed with the heading "Define Your Budget", contact information, description text, and two CTA buttons.

#### Scenario: Navigate to next slide via arrow

- **GIVEN** the user is viewing the first slide
- **WHEN** the user clicks the Next arrow button
- **THEN** the carousel transitions to display the second slide with the heading "Kids Collection".

#### Scenario: Navigate to previous slide via arrow

- **GIVEN** the user is viewing the second slide
- **WHEN** the user clicks the Previous arrow button
- **THEN** the carousel transitions back to the first slide.

#### Scenario: Navigate to specific slide via dot

- **GIVEN** the user is viewing any slide
- **WHEN** the user clicks a pagination dot
- **THEN** the carousel transitions to the corresponding slide.

#### Scenario: Auto-advance slides

- **GIVEN** the user is not hovering over the carousel
- **WHEN** the interval elapses
- **THEN** the carousel automatically advances to the next slide.

#### Scenario: Pause auto-advance on hover

- **GIVEN** the carousel is auto-advancing
- **WHEN** the user hovers over the dots area
- **THEN** the auto-advance pauses until the user moves the mouse away.

#### Scenario: Wrap around from last to first

- **GIVEN** the user is viewing the last slide
- **WHEN** the user clicks Next
- **THEN** the carousel wraps around and displays the first slide.

### Requirement: Component Dock Footer Attribution

The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer displays a "Made with Component Dock" link pointing to https://www.componentdock.com/.

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/slidespot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/slidespot/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Interactive Split-Screen Carousel — the first slide is displayed with the heading "Define Your Budget", contact information, description text, and two CTA buttons
