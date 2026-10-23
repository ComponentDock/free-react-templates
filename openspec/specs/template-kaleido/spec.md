# Template: Kaleido (One Page)

Recreation of ColorLib "Jellyfish Ui Kit"
(https://colorlib.com/wp/template/jellyfish-ui-kit/).

## Purpose

A clean, elegant UI kit showcase template. The original features an underwater
jellyfish hero image with centered title, followed by component showcase sections
(color palette, typography, buttons). The recreation uses an ocean-blue color
scheme with an underwater aesthetic.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/jellyfish/ (HTTP 200, 83,493 B, fetched 2026-10-23) and its theme stylesheet `theme/jellyfish/css/style.css` (21,881 B, sha256 `cec03225cb0c…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#037ef3` | 9 declarations — `.form-control:focus`, `.form-control:active` |
| Other chromatic values | `#2dde98`, `#8e43e7`, `#0dd3ff` | `#2dde98` × 5 (.bg-teal); `#8e43e7` × 5 (.bg-indigo); `#0dd3ff` × 3 (.custom-pagination.pagination-info .page-item.active .page-link) |
| Surface | `#ffffff` | 43 declarations — `.btn.btn-purple`, `.text-white` |
| Ink / dark surface | `#000000` | 4 declarations — `.tab-card .tab-menu .nav .nav-link`, `.custom-pagination .page-item .page-link` |
| Typeface | `"Work Sans", sans-serif` (1 rule — body) | `font-family` declaration in the theme sheet |
| Body type | `line-height: 1.7; color: gray; font-weight: 300` | `body{…}` rule |
| Radii | `50%`, `.25rem`, `30px` | `50%` (.navbar.navbar-dark .form-search button); `.25rem` (.tooltip-inner); `30px` (.form-control.form-pill) |

Palette in order of use: `#ffffff` ×43, `#037ef3` ×9, `#6c757d` ×7, `#2dde98` ×5, `#8e43e7` ×5, `#000000` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Hero section

The template SHALL display a full-viewport hero section with an ocean-blue gradient
background, centered heading, subtitle, and decorative jellyfish SVG elements.

#### Scenario: renders hero heading

- **WHEN** the user loads the page
- **THEN** a heading "Kaleido UI Kit" is visible

#### Scenario: renders hero subtitle

- **WHEN** the user loads the page
- **THEN** a subtitle describing the UI kit is visible

### Requirement: Color palette showcase

The template SHALL display a 3x3 grid of color swatches showing the design token
palette: Primary, Secondary, Success, Info, Warning, Danger, Indigo, Dark, Teal.

#### Scenario: renders color swatches

- **WHEN** the user loads the page
- **THEN** 9 color swatches are visible
- **AND** each swatch has a label (Primary, Secondary, etc.)

### Requirement: Typography showcase

The template SHALL display heading levels h1 through h6 plus a body text paragraph
to demonstrate the type scale.

#### Scenario: renders heading hierarchy

- **WHEN** the user loads the page
- **THEN** headings from h1 to h6 are visible

### Requirement: Button showcase

The template SHALL display button variants (primary, outline, ghost, danger) and
sizes (sm, md, lg) using the shared Button component.

#### Scenario: renders button variants

- **WHEN** the user loads the page
- **THEN** primary, outline, ghost, and danger buttons are visible

### Requirement: Footer with Component Dock link

The template footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: links to Component Dock

- **WHEN** the user loads the page
- **THEN** a link to componentdock.com is visible in the footer
- **AND** the link text mentions "Component Dock"

### Requirement: Dark mode toggle

The template SHALL support dark mode via a toggle in the navbar that adds a
.dark class to the html element.

#### Scenario: toggles dark mode

- **WHEN** the user clicks the dark mode toggle
- **THEN** the page switches to dark theme

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/kaleido/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/kaleido/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Hero section — a heading "Kaleido UI Kit" is visible
- [ ] Color palette showcase — 9 color swatches are visible
- [ ] Typography showcase — headings from h1 to h6 are visible
- [ ] Button showcase — primary, outline, ghost, and danger buttons are visible
- [ ] Dark mode toggle — the page switches to dark theme
