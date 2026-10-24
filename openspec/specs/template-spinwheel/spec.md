# Template: SpinWheel (Bootstrap Carousels)

## Purpose

Spinwheel is a single-page template built around a testimonial carousel. It recreates the ColorLib "Carousel 17" design (https://colorlib.com/wp/template/carousel-17/).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/carousel-17/ (HTTP 200, 1,782 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/carousel-17/css/style.css` (13,883 B, sha256 `77c73cac3f9b…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#0056b3` | 1 declarations — `a:hover` |
| Surface | `#ffffff` | 2 declarations — `body`, `.owl-1 .owl-nav .owl-next span` |
| Ink / dark surface | `#000000` | 1 declarations — `.owl-carousel .owl-video-wrapper` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `50%` | `50%` (.owl-1 .owl-dots .owl-dot > span) |

Palette in order of use: `#ffffff` ×2, `#000000` ×1, `#0056b3` ×1, `#007bff` ×1, `#212529` ×1, `#b3b3b3` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

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

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Testimonial Carousel Section — testimonial cards show the author name, avatar and feedback quote
