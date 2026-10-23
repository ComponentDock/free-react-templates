# Template: Seekgate (Search Form)

## Purpose

An advanced search form bar with keyword input, category filter dropdowns, result count, and action buttons on a clean pastel background. Recreation of ColorLib "Colorlib Search 9".

- **Source:** https://colorlib.com/wp/template/colorlib-search-9/
- **Preview:** https://preview.colorlib.com/theme/colorlib-search-9/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-9.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot analysis.

| Token                | Value                                    |
| -------------------- | ---------------------------------------- |
| Font family          | `'Roboto', sans-serif` (weight 400)      |
| Page background      | `#dce9ef` light blue-gray                |
| Card background      | `#ffffff` white                          |
| Card shadow          | `shadow-lg` subtle drop shadow           |
| Card padding         | `p-6` (mobile), `p-8` (desktop)          |
| Card max-width       | `560px`                                  |
| Accent color         | `#5fb8c2` teal (button, results)         |
| Accent hover         | `#4a9faa` darker teal                    |
| Text color           | `#333333` dark gray                      |
| Muted text           | `#888888` medium gray                    |
| Border color         | `#cccccc` light gray                     |
| Divider color        | `#5fb8c2` teal (under search)            |
| Input placeholder    | `Type Keywords`                          |
| Search icon          | Magnifying glass, right-aligned          |
| Advanced search text | Uppercase, `text-xs`, tracking-wide      |
| Filter grid          | 2 rows × 3 columns, `gap-3`              |
| Select appearance    | No native arrow, custom ChevronDown      |
| Result count         | Teal number + gray "results" text        |
| Reset button         | Text only, dark gray, hover teal         |
| Search button        | Rounded teal bg, white text, `px-5 py-2` |

## Requirements

### Requirement: Page shell

The page SHALL display a full-viewport centered layout with a light blue-gray background (`#dce9ef`) and a white card containing the search form.

#### Scenario: Page renders with centered card

- **WHEN** the page loads
- **THEN** a white card is centered vertically and horizontally
- **AND** the card has a max-width of approximately 560px
- **AND** the page background is light blue-gray

### Requirement: Keyword search input

The card SHALL contain a text input with placeholder "Type Keywords" and a magnifying glass icon on the right, separated by a teal divider line below.

#### Scenario: Search input renders

- **WHEN** the page loads
- **THEN** a text input with placeholder "Type Keywords" is visible
- **AND** a magnifying glass icon is displayed to the right of the input
- **AND** a teal horizontal line separates the input from the advanced section

#### Scenario: User can type in search input

- **WHEN** the user types "shoes" in the search input
- **THEN** the input displays "shoes"

### Requirement: Advanced search section

The card SHALL contain an "ADVANCED SEARCH" heading and a 2×3 grid of filter dropdowns (Accessories, Color, Size, Sale, Time, Type).

#### Scenario: Filter dropdowns render

- **WHEN** the page loads
- **THEN** six select dropdowns are visible in a 2×3 grid
- **AND** the labels are Accessories, Color, Size (row 1) and Sale, Time, Type (row 2)
- **AND** each dropdown has "All" as the default value

#### Scenario: User can change filter values

- **WHEN** the user selects "Red" from the Color dropdown
- **THEN** the Color dropdown displays "Red"

### Requirement: Result count

The card SHALL display a result count with the number in teal and the word "results" in gray.

#### Scenario: Result count is displayed

- **WHEN** the page loads
- **THEN** the text "108 results" is visible
- **AND** "108" is styled in the teal accent color

### Requirement: Action buttons

The card SHALL contain a text-only "RESET" button and a teal "SEARCH" button.

#### Scenario: Reset clears all fields

- **WHEN** the user types in the search input and changes a filter
- **AND** clicks the RESET button
- **THEN** the search input is empty
- **AND** all filter dropdowns return to "All"

#### Scenario: Search button submits form

- **WHEN** the user clicks the SEARCH button
- **THEN** the form submission is prevented (no page reload)

### Requirement: Footer

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible at the bottom
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/seekgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/seekgate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
