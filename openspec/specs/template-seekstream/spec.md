# Template: Seekstream (Advanced Search Form)

Recreation of ColorLib Search 8 (https://colorlib.com/wp/template/colorlib-search-8/)

## Purpose

Seekstream provides a full-viewport advanced search form with keyword input and six category filter dropdowns, styled with a split white/dark card over a gray background. Users SHALL be able to type keywords, filter by category, view result counts, and trigger search/reset actions.
- **Source design:** ColorLib "Colorlib Search 8" — https://colorlib.com/wp/template/colorlib-search-8/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/searchf/colorlib-search-8/ (HTTP 200, 6,179 B, fetched 2026-10-23) and its theme stylesheet `etc/searchf/colorlib-search-8/css/style.css` (13,674 B, sha256 `ccc4b73d2242…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#e45c27` | 2 declarations — `.s008 form .inner-form .input-field .btn-search`, `.s008 form .inner-form .advance-search .cl-row.third .input-field .result-count span` |
| Surface | `#ffffff` | 6 declarations — `.s008 form .inner-form .input-field .btn-search`, `.s008 form .inner-form .input-field .btn-delete` |
| Ink / dark surface | `#333333` | 2 declarations — `.choices[data-type*="select-one"]:after`, `.choices[data-type*="select-one"].is-open:after` |
| Typeface | `Roboto, sans-serif` (6 rules — .cl-sel-0)<br>`'Roboto', sans-serif` (1 rule — .s008) | `font-family` declarations in the theme sheet |
| Radii | `3px`, `2.5px`, `2.5px 2.5px 0 0` | `3px` (.s008 form .inner-form .input-field input); `2.5px` (.choices__inner); `2.5px 2.5px 0 0` (.is-open .choices__inner) |

Palette in order of use: `#ffffff` ×6, `#999999` ×4, `#333333` ×2, `#e45c27` ×2, `#000000` ×1, `#555555` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Search form rendering

The page SHALL render a search form with aria-label "Search form" centered on a gray background.

#### Scenario: Page loads with search form

- **WHEN** the page loads
- **THEN** a form element with aria-label "Search form" is visible
- **AND** the document title is "Seekstream — Advanced Search Form"

### Requirement: Search bar

The search bar SHALL display a text input with "Type Keywords" placeholder and a magnifying glass icon.

#### Scenario: User types in search input

- **WHEN** the user types "shoes" in the search input
- **THEN** the input value updates to "shoes"

#### Scenario: Search icon is visible

- **WHEN** the page renders
- **THEN** a magnifying glass icon is displayed to the right of the input

### Requirement: Advanced search panel

The advanced search panel SHALL display "Advanced Search" heading, six filter dropdowns, result count, Reset button, and Search button.

#### Scenario: Filter dropdowns are rendered

- **WHEN** the page renders
- **THEN** six select elements are visible
- **AND** filter labels ACCESSORIES, COLOR, SIZE, SALE, TIME, and TYPE are displayed

#### Scenario: Default filter option

- **WHEN** the page renders
- **THEN** each dropdown has "All" as the default selected option

#### Scenario: Result count displayed

- **WHEN** the page renders
- **THEN** "108 results" text is displayed in the accent color

### Requirement: User interactions

The form SHALL support search, reset, and keyboard interactions.

#### Scenario: Search button triggers callback

- **WHEN** the user clicks the "Search" button
- **THEN** the onSearch callback is invoked

#### Scenario: Reset button triggers callback

- **WHEN** the user clicks the "Reset" button
- **THEN** the onReset callback is invoked

#### Scenario: Enter key is prevented

- **WHEN** the user presses Enter in the search input
- **THEN** form submission is prevented

#### Scenario: Filter selection fires onChange

- **WHEN** the user selects "Black" from the COLOR dropdown
- **THEN** the onChange callback is called with "Black"

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page renders
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/seekstream/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/seekstream/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Search form rendering — a form element with aria-label "Search form" is visible
- [x] Search bar — the input value updates to "shoes"
- [ ] Advanced search panel — six select elements are visible
- [ ] User interactions — the onSearch callback is invoked
