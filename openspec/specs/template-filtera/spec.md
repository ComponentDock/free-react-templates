# Template: Filtera (Fancy Search Form with Advanced Filters)

## Purpose

Filtera is a single-page fancy search form template in the free-react-templates
monorepo. It recreates the ColorLib "Search Form V10" template
(https://colorlib.com/wp/template/colorlib-search-10/) under a different name.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/searchf/colorlib-search-10/ (HTTP 200, 5,786 B, fetched 2026-10-23) and its theme stylesheet `etc/searchf/colorlib-search-10/css/style.css` (13,012 B, sha256 `788f0e78bc6d…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#2c6dd5` | 6 declarations — `.s010 form .inner-form .input-field .btn-search`, `.s010 form .inner-form .input-field .btn-search:before` |
| Other chromatic values | `#ff4b5a` | `#ff4b5a` × 6 (.s010 form .inner-form .input-field input) |
| Surface | `#ffffff` | 8 declarations — `.s010 form .inner-form .input-field input`, `.s010 form .inner-form .input-field input.placeholder` |
| Ink / dark surface | `#333333` | 3 declarations — `.choices[data-type*="select-one"]:after`, `.choices[data-type*="select-one"].is-open:after` |
| Typeface | `Lato, sans-serif` (6 rules — .cl-sel-0)<br>`'Lato', sans-serif` (2 rules — .s010) | `font-family` declarations in the theme sheet |
| Radii | `20px`, `10px`, `2.5px` | `20px` (.s010 form .inner-form .input-field .btn-search); `10px` (.s010 form .inner-form .advance-search); `2.5px` (.choices__inner) |

Palette in order of use: `#ffffff` ×8, `#2c6dd5` ×6, `#ff4b5a` ×6, `#333333` ×3, `#000000` ×1, `#555555` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Search input bar

The template SHALL display a full-width gradient search bar (blue-to-pink)
with a "Type Keywords" placeholder, a white search icon, and rounded pill shape.

#### Scenario: User types in search bar

- **WHEN** the user visits the page
- **THEN** a text input with placeholder "Type Keywords" is visible
- **AND** a search icon is displayed to the right of the input

#### Scenario: Search input accepts text

- **WHEN** the user types "shoes" into the search input
- **THEN** the input value updates to "shoes"

### Requirement: Advanced search panel

The template SHALL display an "ADVANCED SEARCH" panel below the search bar
with 6 filter dropdowns arranged in a 3-column grid (2 rows).

#### Scenario: Filter dropdowns are present

- **WHEN** the user visits the page
- **THEN** 6 filter dropdowns are visible: Category, Color, Size, Sale, Time, Type

#### Scenario: User selects a filter value

- **WHEN** the user selects "Red" from the Color dropdown
- **THEN** the Color dropdown value updates to "Red"

### Requirement: Result count display

The template SHALL display a result count (e.g. "108 results") in the
advanced search panel.

#### Scenario: Result count is visible

- **WHEN** the user visits the page
- **THEN** the text "108" and "results" are displayed

### Requirement: Reset functionality

The template SHALL provide a RESET button that clears all filter selections.

#### Scenario: Reset clears all filters

- **WHEN** the user selects values in the Color and Size dropdowns
- **AND** clicks the "RESET" button
- **THEN** all dropdowns return to their default empty values
- **AND** the search input is cleared

### Requirement: Search submission

The template SHALL provide a SEARCH button that triggers form submission
without page reload.

#### Scenario: Search button submits form

- **WHEN** the user clicks the "SEARCH" button
- **THEN** the form submission is handled without page navigation

### Requirement: Footer

The template SHALL display a footer with the template name and a link to
Component Dock (https://www.componentdock.com/).

#### Scenario: Footer link to Component Dock

- **WHEN** the user visits the page
- **THEN** a footer is visible with a link to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/filtera/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/filtera/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Search input bar — a text input with placeholder "Type Keywords" is visible
- [ ] Advanced search panel — 6 filter dropdowns are visible: Category, Color, Size, Sale, Time, Type
- [x] Result count display — the text "108" and "results" are displayed
- [ ] Reset functionality — all dropdowns return to their default empty values
- [ ] Search submission — the form submission is handled without page navigation
