# Template: SearchBlue (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search 7" — a standalone search form widget
with a primary text search input, result count badge, advanced search section
with 6 dropdown filters (3×2 grid), and green Search/Delete action buttons.
The form is centered on a full-viewport sky blue background with a white card
container, subtle box-shadow, and two visual tiers (basic search + advanced).

- **Source:** https://colorlib.com/wp/template/colorlib-search-7/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-7/ — returned 404
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-7.zip (full HTML+CSS analyzed)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-7.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS and screenshot visual analysis.

| Token                       | Value                                                                          |
| --------------------------- | ------------------------------------------------------------------------------ |
| Font family                 | `'Roboto', sans-serif` (weights 400, 700)                                     |
| Page background             | Solid color `#00b5e9` (sky blue), full viewport, `background-size: cover`     |
| Layout                      | Full viewport, flexbox centered both axes, `padding: 15px`                     |
| Form max-width              | `790px`                                                                        |
| Basic search card background| `#fff` (white)                                                                 |
| Basic search card box-shadow| `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                        |
| Basic search card border-radius | `3px`                                                                      |
| Basic search input height   | `70px`                                                                         |
| Search input padding        | `10px 110px 10px 70px`                                                        |
| Search input font size      | `18px`                                                                         |
| Search input text color     | `#555`                                                                         |
| Search input placeholder color | `#999`                                                                     |
| Search icon position        | Absolute left, centered vertically, `width: 60px`                             |
| Search icon SVG size        | `34px` (desktop), `26px` (mobile)                                             |
| Search icon fill            | `#ccc`                                                                         |
| Result count position       | Absolute right, centered vertically, `width: 110px`                           |
| Result count font weight    | Bold                                                                           |
| Result count font size      | `14px`                                                                         |
| Result count color          | `#555`                                                                         |
| Result count span color     | `#57b846` (green)                                                              |
| Advanced search background  | `#fff` (white)                                                                 |
| Advanced search padding     | `40px`                                                                         |
| Advanced search border-radius | `3px`                                                                       |
| Advanced search box-shadow  | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                        |
| Advanced search heading     | "Advanced Search", font-size `15px`, color `#999`, `display: block`, margin-bottom `26px` |
| Filter row layout           | `display: flex`, `justify-content: space-between`, `align-items: center`, margin-bottom `20px` |
| Filter row 2 margin-bottom  | `46px` (extra space before buttons)                                            |
| Filter input field width    | `calc(33.333% - 30px)` per item                                               |
| Filter select height        | `40px`                                                                         |
| Filter select background    | `transparent`                                                                  |
| Filter select border        | `2px solid #ccc` (bottom only)                                                 |
| Filter select text color    | `#888` (placeholder), inherit (selected)                                       |
| Filter dropdown chevron     | SVG data URI, fill `#999`, size `18px × 18px`, background-position `right center` |
| Search button background    | `#57b846` (green)                                                             |
| Search button hover bg      | `#4ea63f` (darker green)                                                      |
| Search button color         | `#fff` (white text)                                                           |
| Search button font weight   | Bold                                                                           |
| Search button font size     | `14px`                                                                         |
| Search button height        | `40px`                                                                         |
| Search button min-width     | `100px`                                                                       |
| Search button border-radius | `3px`                                                                         |
| Delete button background    | `transparent`                                                                  |
| Delete button color         | `#555`                                                                         |
| Delete button hover color   | `#000`                                                                         |
| Delete button height        | `40px`                                                                         |
| Delete button min-width     | `100px`                                                                       |
| Delete button font weight   | Bold                                                                           |
| Delete button font size     | `14px`                                                                         |
| Button transition           | `all .2s ease-out, color .2s ease-out`                                         |
| Mobile breakpoint (stack)   | `767px` — filter rows stack vertically (`display: block`), each filter full-width |
| Mobile input padding        | `10px 110px 10px 60px`                                                        |
| Mobile icon width           | `60px`, centered                                                               |

### Screenshot visual notes

The screenshot shows a clean, minimal search form widget centered on a vivid
sky blue (`#00b5e9`) background. The form is a white card split into two
sections: a top search bar with a gray magnifying glass icon on the left, a
"Search..." placeholder input, and "108 results" in green+gray text on the
right. Below is an "Advanced Search" panel with 6 dropdown filters in a 3×2
grid (ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE), each with a light gray
bottom border and chevron. At the bottom: a green "Search" button and a gray
"Delete" text link. The overall aesthetic is modern, flat, and professional —
the sky blue background gives it a fresh, tech-forward feel. The card has a
subtle drop shadow.

## Requirements

### Requirement: Full viewport sky blue background

The page SHALL display a full-viewport solid sky blue background (`#00b5e9`) that covers the entire viewport.

#### Scenario: Background color covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background
- **AND** the background color is `#00b5e9` (sky blue)
- **AND** the background covers the entire viewport

### Requirement: Centered search form card

The search form SHALL be displayed as a white card centered vertically and horizontally on the page, with a max-width of approximately 790px, subtle box-shadow, and rounded corners.

#### Scenario: Form card is centered on page

- **WHEN** the page loads
- **THEN** the form is centered both vertically and horizontally
- **AND** the form max-width is `790px`
- **AND** the form has a `box-shadow` of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **AND** the form has a `border-radius` of `3px`

### Requirement: Basic search input with icon and result count

The basic search section SHALL contain a text input with a magnifying glass icon on the left, a "Search..." placeholder, and a result count badge on the right showing the number of results.

#### Scenario: Search input renders with icon and placeholder

- **WHEN** the page loads
- **THEN** a text input is visible with placeholder text "Search..."
- **AND** a magnifying glass icon is displayed to the left of the input
- **AND** the icon SVG fill color is `#ccc`

#### Scenario: Result count displays next to search input

- **WHEN** the page loads
- **THEN** a result count badge is displayed to the right of the search input
- **AND** the badge shows "[number] results" text
- **AND** the number portion is in green (`#57b846`)
- **AND** the "results" text is in `#555`

### Requirement: Advanced search section with heading

The advanced search section SHALL be displayed below the basic search input, containing the heading "Advanced Search" and a 3×2 grid of dropdown filter selects.

#### Scenario: Advanced search heading renders

- **WHEN** the page loads
- **THEN** the text "Advanced Search" is visible below the search input
- **AND** the heading font size is `15px`
- **AND** the heading color is `#999`

#### Scenario: Filter grid renders 6 dropdowns in 2 rows of 3

- **WHEN** the page loads
- **THEN** 6 dropdown filter selects are visible
- **AND** they are arranged in 2 rows of 3
- **AND** the first row contains ACCESSORIES, COLOR, SIZE
- **AND** the second row contains SALE, TIME, TYPE
- **AND** each dropdown has a chevron icon on the right

#### Scenario: Filter selects have bottom border styling

- **WHEN** the page loads
- **THEN** each filter select has a `border-bottom: 2px solid #ccc`
- **AND** each filter select has a `transparent` background
- **AND** each filter select has a height of `40px`

### Requirement: Search and Delete action buttons

The form SHALL contain a green "Search" button and a transparent "Delete" button below the filter grid.

#### Scenario: Search button renders with correct styling

- **WHEN** the page loads
- **THEN** a "Search" button is visible
- **AND** the button background color is `#57b846`
- **AND** the button text color is white (`#fff`)
- **AND** the button font weight is bold
- **AND** the button height is `40px`
- **AND** the button has a `border-radius` of `3px`

#### Scenario: Search button hover state

- **WHEN** the user hovers over the Search button
- **THEN** the button background changes to `#4ea63f`

#### Scenario: Delete button renders with correct styling

- **WHEN** the page loads
- **THEN** a "Delete" button is visible
- **AND** the button background is transparent
- **AND** the button text color is `#555`
- **AND** the button font weight is bold

#### Scenario: Delete button hover state

- **WHEN** the user hovers over the Delete button
- **THEN** the button text color changes to `#000`

### Requirement: Responsive layout for mobile

The form SHALL stack filter rows vertically on screens narrower than 767px, and adjust search input padding and icon size.

#### Scenario: Filters stack vertically on mobile

- **WHEN** the viewport width is less than `767px`
- **THEN** each filter select takes full width
- **AND** the filter rows stack vertically (each on its own line)

#### Scenario: Search input adjusts for mobile

- **WHEN** the viewport width is less than `767px`
- **THEN** the search input padding changes to `10px 110px 10px 60px`
- **AND** the search icon size reduces to `26px`

### Requirement: Button hover transitions

Both the Search and Delete buttons SHALL have smooth hover transitions.

#### Scenario: Button transitions animate on hover

- **WHEN** the user hovers over either button
- **THEN** the color/background change transitions smoothly over `0.2s ease-out`

### Requirement: Component Dock branding

The template SHALL include a footer or attribution linking to Component Dock.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text or label includes "Component Dock"
