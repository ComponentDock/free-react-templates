# Template: Schedura (Bootstrap Calendars)

Recreation of ColorLib Calendar 13 (`https://colorlib.com/wp/template/calendar-13/`), a clean date range picker template featuring a centered form with "From" and "To" date selection inputs and interactive calendar dropdowns.

## Purpose

Schedura is a bootstrap calendar component page. It recreates the ColorLib **Calendar 13** design (https://colorlib.com/wp/template/calendar-13/, preview: https://preview.colorlib.com/theme/bootstrap/calendar-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bootstrap/calendar-13/ (HTTP 200, 1,467 B, fetched 2026-10-23) and its theme stylesheet `theme/bootstrap/calendar-13/css/style.css` (16,539 B, sha256 `a449adfe812f…`).
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

### R1. Navbar & Header

#### Scenario: R1. Navbar & Header

- Feature a clean header with title "Schedura — Date Range Picker" and subtitle.
- Include a top navigation bar with branding and links.

### R2. Date Range Picker Form

#### Scenario: R2. Date Range Picker Form

- Centered card layout with two columns for "From" (Start Date) and "To" (End Date).
- Interactive date pickers allowing users to select start and end dates.
- Display month/year header with previous/next navigation buttons.
- Calendar grid displaying days of the week and days of the month with out-of-focus days for adjacent months.
- Highlight today's date and selected date range.

### R3. Component Dock Footer

#### Scenario: R3. Component Dock Footer

- Every template's footer MUST link `https://www.componentdock.com/` ("Component Dock") with a message like "More templates at Component Dock" or "Made with Component Dock".

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/schedura/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/schedura/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Scenarios

### S1. Interactive Date Range Selection

- Given the user is viewing the Schedura date range picker form,
- When they click the "From" input, the start date calendar dropdown opens,
- And when they select a start date and then click the "To" input, the end date calendar dropdown opens and allows selecting an end date.

### S2. Footer Branding

- Given the page is scrolled to the bottom,
- When the footer is rendered,
- Then it contains a link to `https://www.componentdock.com/` branded as "Component Dock".

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] R1. Navbar & Header — Feature a clean header with title "Schedura — Date Range Picker" and subtitle
- [x] R2. Date Range Picker Form — Centered card layout with two columns for "From" (Start Date) and "To" (End Date)
