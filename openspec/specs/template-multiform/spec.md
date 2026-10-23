# Template: Multiform (Form Element — Multiselect Dropdown)

## Purpose

A free state multiselect dropdown snippet using Bootstrap Framework. Recreation of ColorLib "Multiselect V15".

- **Source**: https://colorlib.com/wp/template/multiselect-15/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-15/
- **Source slug**: `multiselect-15`
- **New name**: `multiform`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/multiselect-15.zip (HTTP 200, 254,363 B, sha256 `eb14db12889e…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#dae0e5` | 2 declarations — `.btn-light:hover`, `.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).` |
| Other chromatic values | `#80bdff` (1), `#e1f2fb` (1), `#e5e9ed` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 9 declarations — `.cl-form-control`, `.ms-options-wrap > button:focus, .ms-options-wrap > button` |
| Ink / dark surface | `#000000` | 5 declarations — `.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before`, `.close` |
| Typeface | `Roboto` (3 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `4px`, `0.25rem` | `4px` (`.ms-options-wrap > .ms-options`); `0.25rem` (`.btn`) |

Palette in order of use: `#ffffff` ×9, `#212529` ×9, `#6c757d` ×5, `#f8f9fa` ×5, `#000000` ×5, `#efefef` ×3, `#495057` ×3, `#aaaaaa` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Page renders correctly

The page SHALL display a centered heading "State Selector" and a dropdown trigger button below it.

#### Scenario: Page renders correctly

- **GIVEN** the user navigates to the multiform page
- **THEN** a centered heading "State Selector" is visible
- **AND** a dropdown trigger button is visible below the heading

### Requirement: Dropdown opens on click

The dropdown SHALL open when the trigger button is clicked, showing a search input, select-all toggle, and 50 US states.

#### Scenario: Dropdown opens on click

- **GIVEN** the user sees the dropdown trigger
- **WHEN** the user clicks the trigger button
- **THEN** a dropdown panel appears below the trigger
- **AND** the panel contains a search input
- **AND** the panel contains a "select all" toggle
- **AND** the panel lists 50 US states with checkbox indicators

### Requirement: Single state selection

Clicking a state SHALL toggle its selection state.

#### Scenario: Single state selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Alabama"
- **THEN** "Alabama" gets a light blue (#e1f2fb) background
- **AND** the trigger button text shows "1 selected"

### Requirement: Multiple state selection

Multiple states SHALL be selectable simultaneously.

#### Scenario: Multiple state selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects "California"
- **AND** the user selects "New York"
- **AND** the user selects "Texas"
- **THEN** all three items show light blue (#e1f2fb) background
- **AND** the trigger button text shows "3 selected"

### Requirement: Deselect a state

Clicking a selected state SHALL deselect it.

#### Scenario: Deselect a state

- **GIVEN** the user has selected "California" and "Texas"
- **WHEN** the user clicks "California" again
- **THEN** "California" loses the light blue background
- **AND** the trigger button text shows "1 selected"

### Requirement: Select all states

The select-all toggle SHALL select all visible states.

#### Scenario: Select all states

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "select all" toggle
- **THEN** all 50 states are selected
- **AND** the trigger button text shows "50 selected"

### Requirement: Deselect all states

The deselect-all toggle SHALL deselect all states.

#### Scenario: Deselect all states

- **GIVEN** all states are selected
- **WHEN** the user clicks the "select all" toggle again
- **THEN** no states are selected
- **AND** the trigger button text shows "None selected"

### Requirement: Search filters states

The search input SHALL filter the state list in real time.

#### Scenario: Search filters states

- **GIVEN** the dropdown is open
- **WHEN** the user types "New" in the search input
- **THEN** only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
- **AND** other states are hidden

#### Scenario: Search with no results

- **GIVEN** the dropdown is open
- **WHEN** the user types "ZZZ" in the search input
- **THEN** no states are visible in the list

### Requirement: Dropdown closes on outside click

Clicking outside the dropdown SHALL close it.

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown panel closes

### Requirement: Keyboard accessibility

The dropdown SHALL support keyboard navigation.

#### Scenario: Keyboard accessibility

- **GIVEN** the dropdown trigger is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown opens
- **AND** the user can close with Escape

### Requirement: Responsive layout

The dropdown SHALL be responsive on mobile viewports.

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the heading is centered
- **AND** the dropdown takes full width within its container

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/multiform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/multiform/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders correctly — a centered heading "State Selector" is visible
- [ ] Dropdown opens on click — a dropdown panel appears below the trigger
- [x] Single state selection — "Alabama" gets a light blue (#e1f2fb) background
- [ ] Multiple state selection — all three items show light blue (#e1f2fb) background
- [x] Deselect a state — "California" loses the light blue background
- [ ] Select all states — all 50 states are selected
- [ ] Deselect all states — no states are selected
- [x] Search filters states — only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
- [ ] Dropdown closes on outside click — the dropdown panel closes
- [ ] Keyboard accessibility — the dropdown opens
- [ ] Responsive layout — the heading is centered
