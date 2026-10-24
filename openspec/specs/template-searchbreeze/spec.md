# Spec: Searchbreeze
<!-- prep-status: shipped-as=seekgate -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-9` design this prep describes already
> ships as `apps/seekgate` (<https://seekgate.free.componentdock.com>).
> Do not scaffold `apps/searchbreeze`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-seekgate/spec.md`.

## Purpose

Recreation of ColorLib "Colorlib Search Form V9" — an advanced search form with
keyword input and six filter dropdowns, centered on a pale ice blue background.
The form features a two-section card: a top keyword search bar with magnifying
glass icon, separated by a cyan divider from the advanced filter grid below.

> Source: https://colorlib.com/wp/template/colorlib-search-9/
> Preview: https://preview.colorlib.com/theme/colorlib-search-9/ (404; design based on screenshot)
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-9.jpg

## Design tokens

| Token              | Value                          | Notes                                           |
| ------------------ | ------------------------------ | ----------------------------------------------- |
| Page background    | `#dce8ef` pale ice blue        | Full-viewport solid color                       |
| Card background    | `#ffffff` white                | Centered card with subtle shadow                |
| Accent / brand     | `#5bc0c7` medium cyan-teal     | Search button, divider line, result count text  |
| Text primary       | `#555555` dark gray            | Input placeholders, dropdown labels              |
| Text secondary     | `#999999` mid gray             | "ADVANCED SEARCH" label, reset text             |
| Input border       | `#e0e0e0` light gray           | Dropdown and input borders                      |
| Font family        | Poppins (Google Fonts)          | Clean geometric sans-serif                      |
| Card border-radius | ~4–6px                         | Rounded corners on card and inputs              |
| Button radius      | ~4px                           | Slightly rounded SEARCH button                  |
| Divider            | 1px solid `#5bc0c7`            | Horizontal line between search bar and filters  |
| Shadow             | light box-shadow on card       | Subtle elevation                                |

<!-- slug-token-agreement: colorlib-search-9/typeface -->
> **Cross-prep token conflict, re-measured 2026-10-25.** This prep states the design's body typeface as `poppins`. The ColorLib `colorlib-search-9` design's live assets
> (`https://colorlib.com/etc/searchf/colorlib-search-9/`, 1 stylesheet fetched — every linked sheet, the inline `<style>` blocks and the `style="…"` attributes) declare that family **0 times**, neither in a `font-family:` rule nor in a Google Fonts URL.
> The sibling prep `searchquest` (`openspec/specs/template-searchquest/spec.md`) states `lato`, declared 12 times.
> The typeface row above is prep history for this role; re-read the sheet's `body{…}` rule before prescribing a face.
<!-- /slug-token-agreement -->

## Section structure (top to bottom)

1. **Full-viewport wrapper** — pale ice blue background, flex centered
2. **Search card** — white background, rounded corners, two sub-sections
3. **Top section: keyword search** — "Type Keywords" text input + magnifying glass icon (right-aligned)
4. **Divider** — thin cyan horizontal line
5. **Bottom section: advanced search**
   - "ADVANCED SEARCH" uppercase label
   - 6 filter dropdowns in 3×2 grid: Accessories, Color, Size, Sale, Time, Type
   - Each dropdown: label + select element with down chevron
6. **Footer row** — "108 results" count (cyan), "RESET" text button, "SEARCH" button (cyan)

## Requirements

### Requirement: Page layout and background

The page SHALL render a centered, full-viewport container with a pale ice blue
(`#dce8ef`) background and Poppins font family.

#### Scenario: Page loads with correct background

- **WHEN** the page loads
- **THEN** the viewport background color is pale ice blue
- **AND** the form card is centered both vertically and horizontally

### Requirement: Keyword search bar

The card's top section SHALL contain a text input with placeholder "Type Keywords"
and a magnifying glass icon aligned to the right side.

#### Scenario: Search input is visible

- **WHEN** the page loads
- **THEN** a text input with placeholder "Type Keywords" is visible
- **AND** a magnifying glass icon is displayed to the right of the input

#### Scenario: Search input is controlled

- **WHEN** I type "shoes" in the search input
- **THEN** the input value is "shoes"

### Requirement: Cyan divider

The card SHALL display a thin horizontal cyan line separating the search bar
from the advanced search section.

#### Scenario: Divider is visible

- **WHEN** the page loads
- **THEN** a horizontal divider line is visible between the search bar and the filter section

### Requirement: Advanced Search section with six filters

The card's bottom section SHALL contain an "ADVANCED SEARCH" label and six
dropdown filter selects arranged in a 3×2 grid: Accessories, Color, Size,
Sale, Time, Type. Each filter SHALL display a label and a select element
with a down chevron icon.

#### Scenario: All six filter dropdowns are visible

- **WHEN** the page loads
- **THEN** six dropdown selects are visible
- **AND** the filter labels are Accessories, Color, Size, Sale, Time, Type
- **AND** the label "ADVANCED SEARCH" is displayed above the grid

#### Scenario: Filter dropdown has default option

- **WHEN** a filter select renders
- **THEN** the first option is a default/placeholder value

#### Scenario: Filter select calls onChange

- **WHEN** I select an option in a filter select with an onChange handler
- **THEN** the onChange callback is called with the selected value

### Requirement: Footer action row

The card's bottom footer row SHALL display a result count ("108 results" in
cyan text), a "RESET" text button, and a "SEARCH" button styled with cyan
background and white text.

#### Scenario: Result count is visible

- **WHEN** the page loads
- **THEN** the text "108 results" is visible in cyan color

#### Scenario: Reset button is clickable

- **WHEN** I click the "RESET" button/link
- **THEN** no error occurs

#### Scenario: Search button is clickable

- **WHEN** I click the "SEARCH" button
- **THEN** no error occurs

### Requirement: Form submission prevention

The form SHALL prevent default submission when the user presses Enter in the
search input.

#### Scenario: Enter key does not navigate

- **WHEN** I press Enter in the search input
- **THEN** the form does not navigate away from the page

### Requirement: Footer with Component Dock link

The footer SHALL display "More templates at Component Dock" with a link to
https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to componentdock.com is visible
- **AND** the link text contains "Component Dock"

### Requirement: Document title

The app SHALL set the document title to "Searchbreeze — Advanced Search Form"
on mount.

#### Scenario: Title is set correctly

- **WHEN** the page loads
- **THEN** the document title is "Searchbreeze — Advanced Search Form"

## Verification checklist

- [ ] `npm run verify:app -- searchbreeze` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page layout and background
      - Keyword search bar
      - Cyan divider
      - Advanced Search section with six filters
      - Footer action row
      - Form submission prevention
      - Footer with Component Dock link
      - Document title
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
