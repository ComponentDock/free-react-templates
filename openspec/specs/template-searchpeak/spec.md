# Template: Searchpeak (Search Form Bar)

## Purpose

Recreation of ColorLib "Colorlib Search 7" — an advanced search form with dropdown filters centered on a sky blue background. The form includes a search bar with result count, six filter dropdowns in a 2×3 grid, and Search/Delete action buttons.

> Source: https://colorlib.com/wp/template/colorlib-search-7/
> Preview: https://preview.colorlib.com/theme/colorlib-search-7/ (unavailable; design based on screenshot)

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-search-7.zip (HTTP 200, 131,357 B, sha256 `0d96294cfee6…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#57b846` | 2 declarations — `.s007 form .inner-form .basic-search .input-field .result-count span`, `.s007 form .inner-form .input-field .btn-search` |
| Other chromatic values | `#00b5e9` (1), `#4ea63f` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 4 declarations — `.s007 form .inner-form .advance-search`, `.s007 form .inner-form .input-field .btn-search` |
| Ink / dark surface | `#000000` | 1 declarations — `.s007 form .inner-form .input-field .btn-delete:hover` |
| Typeface | `Roboto` (7 rules — `.cl-sel-0`) | `font-family` declarations in the design sheet |
| Radii | `3px`, `2.5px`, `2.5px 2.5px 0 0` | `3px` (`.s007 form .inner-form .input-field .btn-delete`); `2.5px` (`.choices__inner`); `2.5px 2.5px 0 0` (`.is-open .choices__inner`) |

Palette in order of use: `#ffffff` ×4, `#999999` ×4, `#555555` ×3, `#333333` ×2, `#57b846` ×2, `#f9f9f9` ×1, `#b7b7b7` ×1, `#00b5e9` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page layout and background

The page SHALL render a centered, full-viewport container with a sky blue (#5BC0DE) background and Poppins font.

#### Scenario: Page loads with correct background

- **WHEN** the page loads
- **THEN** the viewport background color is sky blue
- **AND** the form card is centered both vertically and horizontally

### Requirement: Search bar with result count

The form SHALL contain a search bar with a magnifying glass icon, a "Search..." placeholder input, and a "108 results" count displayed on the right side in green text.

#### Scenario: Search input is visible

- **WHEN** the page loads
- **THEN** a search input with placeholder "Search..." is visible
- **AND** the text "108 results" is displayed next to the input
- **AND** a search icon is visible

#### Scenario: Search input is controlled

- **WHEN** I type "test" in the search input
- **THEN** the input value is "test"

### Requirement: Advanced Search section with six filters

The form SHALL contain an "Advanced Search" section with six dropdown filter selects arranged in a 2×3 grid: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE. Each filter SHALL display an uppercase label and a select element with a down chevron icon.

#### Scenario: All six filter dropdowns are visible

- **WHEN** the page loads
- **THEN** six dropdown selects are visible
- **AND** the filter labels are ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE

#### Scenario: FilterSelect has "All" default option

- **WHEN** a filter select renders
- **THEN** the first option is "All"

#### Scenario: FilterSelect calls onChange

- **WHEN** I select an option in a FilterSelect with an onChange handler
- **THEN** the onChange callback is called with the selected value

### Requirement: Action buttons

The form SHALL contain a green rounded "Search" button and a dark "Delete" text link.

#### Scenario: Search button is clickable

- **WHEN** I click the "Search" button
- **THEN** no error occurs

#### Scenario: Delete button is clickable

- **WHEN** I click the "Delete" button
- **THEN** no error occurs

### Requirement: Form submission prevention

The form SHALL prevent default submission when the user presses Enter in the search input.

#### Scenario: Enter key does not navigate

- **WHEN** I press Enter in the search input
- **THEN** the form does not navigate away from the page

### Requirement: Footer with Component Dock link

The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to componentdock.com is visible
- **AND** the link text contains "Component Dock"

### Requirement: Document title

The app SHALL set the document title to "Searchpeak — Advanced Search Form" on mount.

#### Scenario: Title is set correctly

- **WHEN** the page loads
- **THEN** the document title is "Searchpeak — Advanced Search Form"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/searchpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/searchpeak/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout and background — the viewport background color is sky blue
- [x] Search bar with result count — a search input with placeholder "Search..." is visible
- [ ] Advanced Search section with six filters — six dropdown selects are visible
- [ ] Action buttons — no error occurs
- [ ] Form submission prevention — the form does not navigate away from the page
- [x] Document title — the document title is "Searchpeak — Advanced Search Form"
