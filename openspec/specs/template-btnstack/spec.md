# Template: BtnStack (Bootstrap Buttons)

Recreation of ColorLib Bootstrap Buttons 03 (`https://colorlib.com/wp/template/bootstrap-buttons-03/`) as **BtnStack**, a comprehensive, polished solid and outline button showcase with size variants, color palettes, states, and interactive playground.

## Purpose

BtnStack is a single-page button showcase template demonstrating solid and outline Bootstrap 4 button variants across multiple colors, sizes, shapes, and states, with an interactive playground for live preview.
- **Source design:** ColorLib "Bootstrap Buttons 03" — https://colorlib.com/wp/template/bootstrap-buttons-03/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/ (HTTP 200, 8,863 B, fetched 2026-10-23) and its theme stylesheet `theme/bb/bootstrap-buttons-03/css/style.css` (24,040 B, sha256 `9cef0291bdeb…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007bff` | 19 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled` |
| Other chromatic values | `#17a2b8`, `#28a745`, `#dc3545` | `#17a2b8` × 9 (.cl-btn-info); `#28a745` × 9 (.cl-btn-success); `#dc3545` × 9 (.cl-btn-danger) |
| Surface | `#ffffff` | 54 declarations — `.cl-btn-primary`, `.cl-btn-primary:hover` |
| Ink / dark surface | `#212529` | 13 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `4px`, `.25rem`, `.2rem` | `4px` (.cl-btn); `.25rem` (.cl-btn); `.2rem` (.cl-btn-sm) |

Palette in order of use: `#ffffff` ×54, `#007bff` ×19, `#212529` ×13, `#17a2b8` ×9, `#28a745` ×9, `#6c757d` ×9.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement 1: Navbar & Header

The template SHALL display a sticky navigation bar with the brand name "BtnStack", navigation links (Home, Sizes, Solid, Outline, Playground), and a Component Dock link. The hero section SHALL show the heading "#03 — Solid & Outline Bootstrap 4 Buttons" with subtitle and quick-jump action buttons.

#### Scenario: Navbar renders with brand and links

- **WHEN** the page loads
- **THEN** the navbar displays "BtnStack" brand text, navigation links for Home, Sizes, Solid, Outline, and Playground, and a Component Dock link

#### Scenario: Hero section renders heading and actions

- **WHEN** the page loads
- **THEN** the hero displays the heading "#03 — Solid & Outline Bootstrap 4 Buttons" with a subtitle and quick-jump buttons

### Requirement 2: Size Variants

The template SHALL showcase Large, Medium, and Small button sizes for both solid and outline styles with appropriate padding and text scaling.

#### Scenario: Size variants display for solid buttons

- **WHEN** the user views the size variants section
- **THEN** Large, Medium, and Small solid buttons are displayed with progressively smaller padding and text

#### Scenario: Size variants display for outline buttons

- **WHEN** the user views the size variants section
- **THEN** Large, Medium, and Small outline buttons are displayed with matching size progression

### Requirement 3: Solid Buttons Showcase

The template SHALL display a grid of solid color button variants including Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, and Blue Gray.

#### Scenario: All solid color variants render

- **WHEN** the user views the solid buttons section
- **THEN** all 18 solid color variant buttons are visible with their respective background colors

### Requirement 4: Outline Buttons Showcase

The template SHALL display a grid of outline color variants with transparent backgrounds and colored borders that fill on hover.

#### Scenario: All outline color variants render

- **WHEN** the user views the outline buttons section
- **THEN** all outline variant buttons are visible with transparent backgrounds and colored borders

### Requirement 5: Interactive Playground

The template SHALL provide an interactive playground where users can select style (solid/outline), size, color variant, roundedness, and icon options, with a live preview and JSX snippet copy functionality.

#### Scenario: Playground renders with controls

- **WHEN** the user views the playground section
- **THEN** dropdown selectors for style, size, color, and roundedness are displayed along with a live preview button and a code snippet

#### Scenario: Playground updates preview on selection change

- **WHEN** the user changes any playground option
- **THEN** the preview button updates to reflect the new selection and the code snippet regenerates

### Requirement 6: Footer

The template SHALL display a branded footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnstack/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnstack/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Size Variants — Large, Medium, and Small solid buttons are displayed with progressively smaller padding and text
- [ ] Solid Buttons Showcase — all 18 solid color variant buttons are visible with their respective background colors
- [ ] Outline Buttons Showcase — all outline variant buttons are visible with transparent backgrounds and colored borders
- [ ] Interactive Playground — dropdown selectors for style, size, color, and roundedness are displayed along with a live preview button and a code snippet
