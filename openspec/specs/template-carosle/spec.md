# Template: Carosle (Carousel / Testimonial category)

## Purpose

- Recreation of ColorLib **Carousel V04** (`https://colorlib.com/wp/template/carousel-04/`).
- Preview URL: `https://preview.colorlib.com/theme/carousel-04/`
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, interactive Testimonial Slider / Carousel.

## Design tokens

- Primary Brand Color: `#3b82f6` (Blue) / dark slate `#1e293b`
- Font Family: "Inter", system-ui, sans-serif
- Button Shapes: Rounded-full for carousel navigation controls
- Section Backgrounds: Light gray `#f1f5f9`, clean white `#ffffff` cards

## Requirements

### Requirement 1: Testimonial Carousel Section

#### Scenario: Testimonial Carousel Section

- The template must display a clean, centered testimonial carousel featuring quote cards with quotation marks icon, descriptive quote text, author name, and role/title.
- Interactive slide navigation (prev/next controls and clickable pagination dots).

### Requirement 2: Footer Component

#### Scenario: Footer Component

- Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carosle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carosle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] Tailwind CSS v4 styling and `@theme` tokens correctly applied.
- [ ] Responsive design verified for mobile, tablet, and desktop viewports.
- [ ] 100% test coverage on all components.
- [x] Footer correctly includes link to `https://www.componentdock.com/`.
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Testimonial Carousel Section — The template must display a clean, centered testimonial carousel featuring quote cards with quotation marks icon, descriptive quote text, author name, and role/title

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-04/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
<!-- live-palette-unverified:end -->
