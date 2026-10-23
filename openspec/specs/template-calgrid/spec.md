# Template: CalGrid (Calendar & Date Picker)

## Purpose

A clean calendar date picker template featuring a centered dual-calendar grid layout with month navigation and a minimal footer. Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/calendar-12/ (HTTP 200, 1,051 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/calendar-12/css/style.css` (16,331 B, sha256 `862721b277d3…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f2d1c5` | 5 declarations — `.picker__nav--next:hover`, `.picker__nav--prev:hover` |
| Other chromatic values | `#f78b65` | `#f78b65` × 4 (.picker__select--month:focus) |
| Surface | `#ffffff` | 9 declarations — `.picker__holder`, `.picker__day--selected` |
| Ink / dark surface | `#000000` | 4 declarations — `.picker`, `.picker__nav--next:hover` |
| Typeface | `"Roboto", sans-serif` (2 rules — body)<br>`-apple-system, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Radii | `.25rem`, `0 0 5px 5px` | `.25rem` (.cl-form-control); `0 0 5px 5px` (.picker__holder) |

Palette in order of use: `#ffffff` ×9, `#6c757d` ×5, `#f2d1c5` ×5, `#f5f5f5` ×5, `#000000` ×4, `#f78b65` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Centered page layout with dual calendar grids

The CalGrid page SHALL display a centered vertical layout with white background, a prominent title heading, and two calendar instances displayed side by side on desktop and stacked on mobile.

#### Scenario: Page load renders layout

- **WHEN** the user visits the CalGrid page
- **THEN** the page shows a centered heading and two calendar grids

### Requirement: Calendar grid with month header and weekday row

Each calendar instance SHALL display a month/year header in uppercase bold text, flanked by previous/next navigation chevron buttons, with a weekday abbreviations row (Sun–Sat) and a 7-column date grid.

#### Scenario: Calendar renders correct day grid

- **WHEN** the calendar displays a given month
- **THEN** it shows the correct number of day buttons with empty cells before the 1st

### Requirement: Month navigation with year rollover

Clicking the previous or next button SHALL navigate to the prior or subsequent month respectively, correctly handling year rollover (December → January increments the year).

#### Scenario: Navigate to next month

- **WHEN** the user clicks the "next month" button
- **THEN** the calendar displays the subsequent month with correct day positions

#### Scenario: Year rollover from December to January

- **WHEN** the calendar shows December and the user clicks "next month"
- **THEN** the calendar displays January of the following year

### Requirement: Today highlighting with accent color

Today's date SHALL be visually highlighted with the accent background color and white text, and its aria-label SHALL include "(today)".

#### Scenario: Today is highlighted

- **WHEN** the calendar renders the current month
- **THEN** today's date button has the accent background and "(today)" in its label

### Requirement: Accessible date buttons and navigation

All date buttons SHALL have descriptive aria-labels including day number, month, year, and "(today)" for the current date. Navigation buttons SHALL have aria-labels distinguishing them per calendar instance.

#### Scenario: Date buttons have accessible labels

- **WHEN** the calendar renders a date button
- **THEN** its aria-label includes the day number, month name, and year

### Requirement: Component Dock footer

The template footer SHALL link to `https://www.componentdock.com/` branded as "Component Dock" with a message like "More templates at Component Dock".

#### Scenario: Footer branding

- **WHEN** the page footer is rendered
- **THEN** it contains a link to componentdock.com with rel="noopener noreferrer"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/calgrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/calgrid/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Centered page layout with dual calendar grids — the page shows a centered heading and two calendar grids
- [ ] Calendar grid with month header and weekday row — it shows the correct number of day buttons with empty cells before the 1st
- [ ] Month navigation with year rollover — the calendar displays the subsequent month with correct day positions
- [x] Today highlighting with accent color — today's date button has the accent background and "(today)" in its label
- [ ] Accessible date buttons and navigation — its aria-label includes the day number, month name, and year
