# Template: CarouselGlide (Carousel / Interactive UI)

## Purpose

Recreation of ColorLib **Carousel 18** (`https://colorlib.com/wp/template/carousel-18/`), a modern split-design responsive carousel featuring an immersive image showcase on one side and interactive testimonial/content cards with smooth slide navigation on the other. Built for Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens & Theme

- **Brand Colors:**
  - Primary: `#7f53ac` (Rich Purple / Indigo accent)
  - Secondary: `#647dee` (Vibrant Blue gradient)
  - Neutral Dark: `#1a202c` (Slate 900)
  - Neutral Light: `#f7fafc` (Slate 50)
  - Accent / Highlight: `#ff6b6b` (Coral pink for active indicators/badges)
- **Typography:**
  - Font Family: `"Inter", "Poppins", sans-serif`
  - Heading Weights: 600, 700
  - Body Weights: 400, 500
- **UI Styling:**
  - Card & Container Border Radius: `rounded-2xl` / `rounded-3xl`
  - Transitions: Smooth cubic-bezier transitions (`transition-all duration-300 ease-in-out`)
  - Shadows: Soft elevated shadows (`shadow-xl`, `shadow-2xl`)

## Requirements

### Requirement: Split hero carousel

The system SHALL render a split-screen carousel with an image on the left and tabbed content on the right, with prev/next navigation arrows.

#### Scenario: Navigating carousel slides via tabs

- **GIVEN** the CarouselGlide page is loaded
- **WHEN** the user clicks a category tab (e.g. TRAVEL, PHOTOGRAPHY, CREATIVITY)
- **THEN** the active slide transitions, updating both the featured image and the headline text

#### Scenario: Navigating carousel slides via arrows

- **GIVEN** the carousel is loaded with the first slide active
- **WHEN** the user clicks the "Next slide" button
- **THEN** the active slide advances to the next one (wrapping to the first when at the last)
- **AND** the tab selection updates to reflect the new active slide

#### Scenario: Previous slide navigation wraps

- **GIVEN** the first slide is active
- **WHEN** the user clicks the "Previous slide" button
- **THEN** the carousel wraps to the last slide

### Requirement: Features section

The system SHALL render a features section with a heading and four feature cards, each containing an icon, title, and description.

#### Scenario: Feature cards are displayed

- **GIVEN** the user scrolls to the features section
- **WHEN** the features section is visible
- **THEN** it SHALL display four cards with icons (Camera, Zap, Sparkles, Palette), titles, and descriptions

### Requirement: Footer with Component Dock link

The system SHALL render a footer containing a link to `https://www.componentdock.com/`.

#### Scenario: Footer attribution

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it SHALL display a "Made with Component Dock" link pointing to `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carousel-glide/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carousel-glide/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification Checklist

- [x] TypeScript strict mode compilation (`npm run typecheck`) passes without errors.
- [x] Tailwind CSS 4 build succeeds with `injectUiSource()` configured in `vite.config.ts`.
- [x] Vitest test suite passes with 100% coverage on new code (`npm run test:coverage`).
- [x] Footer correctly links `https://www.componentdock.com/`.
- [x] Zero references to ColorLib in app source files.
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
