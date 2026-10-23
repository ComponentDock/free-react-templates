# Template: Luma (Photography Portfolio)

Recreation of ColorLib "Photon" (https://colorlib.com/wp/template/photon/).

## Purpose

Luma is a photography portfolio single-page template featuring a full-screen image carousel with category slides, a sticky navbar with social links, and a branded footer. The design uses a teal (#20c997) accent, Josefin Sans font, and dark overlay on hover.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/photon/ (HTTP 200, 11,447 B, sha256 `7e25dac7d1f4…`, fetched 2026-10-23) and its design stylesheet(s) `style.min.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#147c5d` | 43 declarations — `.form-check-input:focus`, `.form-control:focus` |
| Other chromatic values | `#ccd5e3` (3), `#8abeae` (3), `#b9d8ce` (2) | secondary hues in the same sheet |
| Surface | `#ffffff` | 45 declarations — `.form-range:focus::-moz-range-thumb`, `.form-range:focus::-webkit-slider-thumb` |
| Ink / dark surface | `#000000` | 46 declarations — `.text-bg-info`, `.text-bg-light` |
| Typeface | not declared in the design sheet | inherits the framework/system stack |
| Radii | `4px`, `8px`, `50%`, `1rem` | `4px` (`.kit-form-status`); `8px` (`.blog-card`); `50%` (`.form-check-input[type=radio]`); `1rem` (`.form-range::-moz-range-thumb`) |
| Gradients | 4 declarations | `.mission-card:before`, `.process-number` |

Palette in order of use: `#000000` ×46, `#ffffff` ×45, `#147c5d` ×43, `#5c626e` ×17, `#25262a` ×8, `#8abeae` ×3, `#ccd5e3` ×3, `#6c757d` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/photon/css/style.min.css?v=3.0.1` — 177,492 B, sha256 `dd859c424a26…`.

## Requirements

### Requirement: Navbar renders with brand and navigation

The template SHALL display a sticky navbar with the brand name "Luma", navigation links (Home, Gallery, Services, Blog, About, Reviews, Contact), and social icon links (Facebook, Twitter, Instagram, YouTube).

#### Scenario: Desktop navbar elements

- **WHEN** the page loads
- **THEN** the navbar displays the brand name "Luma"
- **AND** all 7 navigation links are visible
- **AND** all 4 social icon links are rendered

#### Scenario: Mobile menu toggle

- **WHEN** the mobile toggle button is clicked
- **THEN** the mobile menu opens with navigation links
- **AND** clicking a navigation link closes the mobile menu

### Requirement: Hero carousel displays photography categories

The template SHALL display a full-screen image carousel with 7 category slides (Nature, Portrait, People, Architecture, Animals, Sports, Travel), each with a background image, centered title, and "More Photos" button. Navigation arrows and pagination dots SHALL be provided.

#### Scenario: Carousel renders all slides

- **WHEN** the page loads
- **THEN** 7 category slides are rendered in the DOM
- **AND** prev/next navigation buttons are visible
- **AND** 7 pagination dots are rendered

#### Scenario: Carousel navigation

- **WHEN** the next button is clicked
- **THEN** the carousel advances to the next slide
- **WHEN** the previous button is clicked
- **THEN** the carousel wraps to the previous slide

#### Scenario: Pagination dot navigation

- **WHEN** a pagination dot is clicked
- **THEN** the corresponding slide becomes visible

### Requirement: Footer displays copyright and Component Dock link

The template SHALL display a dark footer with copyright text and a "Component Dock" link pointing to https://www.componentdock.com/ that opens in a new tab.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer displays copyright text with "Luma Photography"
- **AND** a "Component Dock" link is rendered with href "https://www.componentdock.com/"
- **AND** the link opens in a new tab (target="_blank" rel="noopener noreferrer")

### Requirement: App composes all sections

The App component SHALL render Navbar, Hero carousel, and Footer in the correct order.

#### Scenario: Full page render

- **WHEN** the App renders
- **THEN** the navbar with brand name is visible
- **AND** the hero carousel is visible
- **AND** the footer with Component Dock link is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/luma/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/luma/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar renders with brand and navigation — the navbar displays the brand name "Luma"
- [ ] Hero carousel displays photography categories — 7 category slides are rendered in the DOM
