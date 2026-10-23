# Template: CarouselVane (Feedback Carousel / Testimonials)

## Purpose

Recreation of ColorLib Carousel V16 (`https://colorlib.com/wp/template/carousel-16/`), a modern and minimal free feedback/testimonial carousel template featuring customer reviews, opinions, avatars, and ratings. Built as a Vite + React 19 + Tailwind CSS 4 + TypeScript app in `apps/carousel-vane`.

## Design Tokens & Theme

- **Brand Colors**:
  - Primary Accent: `#3b82f6` (Blue / Trust)
  - Neutral Dark: `#1e293b` (Slate 800)
  - Neutral Light: `#f8fafc` (Slate 50)
  - Card Background: `#ffffff` with subtle border/shadow (`shadow-sm`)
- **Typography**: Sans-serif (Inter / System font stack)
- **Component Styling**: Rounded card containers (`rounded-xl`), circular avatar thumbnails (`rounded-full`), clean carousel navigation arrows and pagination dots.

## Requirements

### Requirement: Interactive Feedback Carousel

Users SHALL be able to view and interact with a customer testimonial carousel containing avatars, names, titles, and review copy.

#### Scenario: Display testimonials with avatars and feedback text

- Given the CarouselVane application is loaded
- When the user views the feedback section
- Then multiple testimonial cards should be displayed showing customer avatars, names, titles, and review paragraphs.

#### Scenario: Navigate through carousel slides

- Given the carousel is active
- When the user clicks the next/previous navigation controls or pagination dots
- Then the active testimonial slide should update smoothly with slide transition effects.

#### Scenario: Footer Attribution

- Given any page in the application
- When the user scrolls to the footer
- Then it must display a link to `https://www.componentdock.com/` branded as "Component Dock".

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carousel-vane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carousel-vane/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% on changed code
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-16/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
<!-- live-palette-unverified:end -->
