# Template: SearchDock (Search Form Bar)

## Purpose

Recreation of ColorLib **colorlib-search-8** — a single-page advanced search form bar template.

- **Source:** https://colorlib.com/wp/template/colorlib-search-8/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-8/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-8.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `'Roboto', sans-serif` | Google Fonts, weights 400 + 700 |
| Brand color | `#e45c27` | Orange — search button, accent count |
| Brand hover | `#d7501b` | Darker orange for hover states |
| Background | Full-page image | Dark overlay aesthetic (placeholder via picsum) |
| Section bg (advanced) | `#000` | Black background for advanced panel |
| Input bg | `#fff` | White search input |
| Input text | `#555` | Dark grey text |
| Placeholder | `#999` | Light grey placeholder |
| Button height | `40px` | Both Search and Reset buttons |
| Input height | `70px` | Main search input |
| Border radius | `3px` | Buttons and input |
| Box shadow | `0 8px 20px rgba(0,0,0,0.15)` | On basic search and advanced panel |
| Select text | `#fff` | White text in advanced search selects |
| Select border | `2px solid #ccc` | Bottom border on select dropdowns |
| Result count | `#e45c27` for number, `#fff` for label | Bold, 14px |
| Reset button | Transparent bg, white text, bold | No background, hover keeps white |
| Search button | `#e45c27` bg, white text, bold | Hover: `#d7501b` |

## Structure (top → bottom)

1. **Full-page container** — centered flex layout, background image
2. **Search form** (max-width: 790px)
   - **Basic search** — white input with magnifying glass icon (right side), box-shadow
   - **Advanced search** — black panel, expandable/collapsible
     - "Advanced Search" label (grey text)
     - Row 1: 3 dropdown selects (ACCESSORIES, COLOR, SIZE)
     - Row 2: 3 dropdown selects (SALE, TIME, TYPE)
     - Row 3: Results count ("108 results"), Reset button, Search button

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the user loads the SearchDock page
- **THEN** a full-page search interface is displayed

### Basic Search

#### Scenario: Display basic search input

- **GIVEN** the page is loaded
- **THEN** a search input with placeholder "Type Keywords" is visible
- **AND** a magnifying glass icon is displayed inside the input (right side)
- **AND** the input has a white background with rounded corners (3px)

#### Scenario: Submit basic search

- **GIVEN** the user types "shoes" in the search input
- **WHEN** the user presses Enter or clicks the search icon
- **THEN** the search form is submitted

### Advanced Search Panel

#### Scenario: Toggle advanced search panel

- **GIVEN** the basic search is visible
- **WHEN** the user clicks the "Advanced Search" label/toggle
- **THEN** the advanced search panel expands below the basic search
- **AND** the panel has a black background with padding (40px)

#### Scenario: Display filter dropdowns

- **GIVEN** the advanced search panel is open
- **THEN** 6 filter dropdowns are displayed in a 3x2 grid
- **AND** the dropdowns are: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE
- **AND** each dropdown has a bottom border (2px solid #ccc)
- **AND** dropdown text is white on transparent background

#### Scenario: Select a filter value

- **GIVEN** the advanced search panel is open
- **WHEN** the user clicks the "COLOR" dropdown
- **THEN** a list of options appears (GREEN, SUBJECT B, SUBJECT C)
- **WHEN** the user selects "GREEN"
- **THEN** the dropdown displays "GREEN" as the selected value

### Results and Actions

#### Scenario: Display results count

- **GIVEN** the advanced search panel is open
- **THEN** a results count is displayed showing "108 results"
- **AND** the number "108" is styled in orange (#e45c27)
- **AND** the word "results" is styled in white

#### Scenario: Reset filters

- **GIVEN** the user has selected filter values
- **WHEN** the user clicks the "Reset" button
- **THEN** all filter dropdowns return to their default values
- **AND** the search input is cleared

#### Scenario: Submit advanced search

- **GIVEN** the user has selected filter values
- **WHEN** the user clicks the "Search" button
- **THEN** the search form is submitted with the selected filters

### Responsive Behavior

#### Scenario: Mobile layout

- **GIVEN** the viewport width is less than 768px
- **THEN** the dropdown grid stacks to single column
- **AND** the search input padding adjusts for smaller screens
- **AND** the search icon scales down

## Verification Checklist

- [ ] Font: Roboto loaded from Google Fonts
- [ ] Background: full-page placeholder image (picsum)
- [ ] Basic search: white input, 70px height, 3px radius, box-shadow
- [ ] Magnifying glass icon positioned right inside input
- [ ] Advanced search: black panel, 40px padding, expandable
- [ ] 6 dropdowns in 3x2 grid with white text, transparent bg, bottom border
- [ ] Results count: orange number + white label
- [ ] Reset button: transparent, white text, clears all inputs
- [ ] Search button: orange bg, white text, bold
- [ ] Hover states: search button darkens, reset stays white
- [ ] Responsive: single-column on mobile (<768px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME: searchdock.free.componentdock.com
- [ ] Tests: 100% coverage (Vitest + Testing Library)
