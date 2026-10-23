## Purpose

Spinwheel is a single-page template built around a testimonial carousel. It recreates the ColorLib **Carousel 17** design (https://colorlib.com/wp/template/carousel-17/).

## Requirements

### Requirement: Testimonial Carousel Section

The template SHALL render a featured testimonial carousel with navigation controls.

#### Scenario: Testimonials are visible with controls

- **GIVEN** the user opens the Spinwheel application
- **WHEN** the testimonial carousel renders
- **THEN** testimonial cards show the author name, avatar and feedback quote
- **AND** navigation controls are present for moving between testimonials

### Requirement: Footer & Branding

The template SHALL render a branded footer that links to Component Dock and carries no external template attribution.

#### Scenario: Footer shows Component Dock branding

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** it links to Component Dock (https://www.componentdock.com/)
- **AND** it contains no ColorLib or external template attribution

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spinwheel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spinwheel/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
