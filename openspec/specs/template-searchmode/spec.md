# Template: SearchMode (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search 8" — a standalone search form widget
with a primary text search input (icon on right), advanced search section with
dark/black background, 6 dropdown filters (3×2 grid), result count, and
orange Search button. The form is centered on a full-viewport background
with a fashion clothing photo, giving it a retail/e-commerce aesthetic.

- **Source:** https://colorlib.com/wp/template/colorlib-search-8/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-8/ — returned 404
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-8.zip (full HTML+CSS analyzed)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-8.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS and screenshot visual analysis.

| Token                       | Value                                                                          |
| --------------------------- | ------------------------------------------------------------------------------ |
| Font family                 | `'Roboto', sans-serif` (weights 400, 700)                                     |
| Page background             | Background image (`images/Searchs_008.png`), `background-size: cover`, full viewport |
| Layout                      | Full viewport, flexbox centered both axes, `padding: 15px`                     |
| Form max-width              | `790px`                                                                        |
| Basic search card background| `#fff` (white)                                                                 |
| Basic search card box-shadow| `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                        |
| Basic search card border-radius | `3px`                                                                      |
| Basic search input height   | `70px`                                                                         |
| Search input padding        | `10px 80px 10px 40px` (icon on right, less left padding than Search 7)        |
| Search input font size      | `18px`                                                                         |
| Search input text color     | `#555`                                                                         |
| Search input placeholder color | `#999`                                                                     |
| Search icon position        | Absolute RIGHT, centered vertically, `width: 60px`                            |
| Search icon SVG size        | `34px` (desktop), `26px` (mobile)                                             |
| Search icon fill            | `#ccc`                                                                         |
| Advanced search background  | `#000` (black)                                                                 |
| Advanced search padding     | `40px`                                                                         |
| Advanced search border-radius | `3px`                                                                       |
| Advanced search box-shadow  | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                        |
| Advanced search heading     | "Advanced Search", font-size `15px`, color `#999`, margin-bottom `26px`       |
| Filter row layout           | `display: flex`, `justify-content: space-between`, `align-items: center`, margin-bottom `20px` |
| Filter row 2 margin-bottom  | `46px` (extra space before action row)                                         |
| Filter input field width    | `calc(33.333% - 30px)` per item                                               |
| Filter select height        | `40px`                                                                         |
| Filter select background    | `transparent`                                                                  |
| Filter select border        | `2px solid #ccc` (bottom only)                                                 |
| Filter select text color    | `#666` (from cl-sel classes)                                                   |
| Filter dropdown chevron     | SVG data URI, fill `#999`, size `18px × 18px`, background-position `right center` |
| Third row layout            | `display: flex`, `justify-content: space-between`, `align-items: center`, width 100% |
| Result count position       | Left side of third row, flex, `width: 110px`                                  |
| Result count font weight    | Bold                                                                           |
| Result count font size      | `14px`                                                                         |
| Result count color          | `#fff` (white)                                                                 |
| Result count span color     | `#e45c27` (orange)                                                             |
| Search button background    | `#e45c27` (orange)                                                            |
| Search button hover bg      | `#d7501b` (darker orange)                                                     |
| Search button color         | `#fff` (white text)                                                           |
| Search button font weight   | Bold                                                                           |
| Search button font size     | `14px`                                                                         |
| Search button height        | `40px`                                                                         |
| Search button min-width     | `100px`                                                                       |
| Search button border-radius | `3px`                                                                         |
| Delete button text          | "Reset" (not "Delete")                                                         |
| Delete button background    | `transparent`                                                                  |
| Delete button color         | `#fff` (white, for dark background)                                           |
| Delete button hover color   | `#fff` (stays white)                                                          |
| Delete button height        | `40px`                                                                         |
| Delete button min-width     | `100px`                                                                       |
| Delete button font weight   | Bold                                                                           |
| Delete button font size     | `14px`                                                                         |
| Button transition           | `all .2s ease-out, color .2s ease-out`                                         |
| Mobile breakpoint (stack)   | `767px` — filter rows stack vertically (`display: block`), each filter full-width |
| Mobile input padding        | `10px 60px 10px 40px`                                                         |
| Mobile icon width           | `60px`, centered                                                               |

### Screenshot visual notes

The screenshot shows a search form widget centered on a full-viewport
background image of fashion clothing hanging on a rack (monochrome gray
tones). The form has two distinct tiers: a white top bar with "Type Keywords"
placeholder and a gray magnifying glass icon on the RIGHT side; below is a
dark/black "Advanced Search" panel with 6 dropdown filters in a 3×2 grid
(ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE) with bottom border styling. The
bottom row shows "108 results" in orange on the left, a "Reset" text link in
the center, and an orange "Search" button on the right. The overall aesthetic
is modern, dark, and retail-oriented — the dark advanced section contrasts
sharply with the white search bar.

## Requirements

### Requirement: Full viewport background image

The page SHALL display a full-viewport background image (fashion clothing
photo) with `background-size: cover` that covers the entire viewport.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the background covers the entire viewport with `background-size: cover`

### Requirement: Centered search form card

The search form SHALL be displayed as a card centered vertically and
horizontally on the page, with a max-width of approximately 790px.

#### Scenario: Form card is centered on page

- **WHEN** the page loads
- **THEN** the form is centered both vertically and horizontally
- **AND** the form max-width is `790px`

### Requirement: Basic search input with icon on right

The basic search section SHALL contain a text input with a magnifying glass
icon positioned on the RIGHT side and "Type Keywords" placeholder text.

#### Scenario: Search input renders with right-aligned icon

- **WHEN** the page loads
- **THEN** a text input is visible with placeholder text "Type Keywords"
- **AND** a magnifying glass icon is displayed to the RIGHT of the input
- **AND** the icon is positioned absolute right, centered vertically

#### Scenario: Basic search card has shadow and rounded corners

- **WHEN** the page loads
- **THEN** the basic search card has a `box-shadow` of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **AND** the basic search card has a `border-radius` of `3px`

### Requirement: Dark advanced search section

The advanced search section SHALL have a black (`#000`) background with the
heading "Advanced Search" and a 3×2 grid of dropdown filter selects.

#### Scenario: Advanced search heading renders

- **WHEN** the page loads
- **THEN** the text "Advanced Search" is visible in the dark section
- **AND** the heading font size is `15px`
- **AND** the heading color is `#999`
- **AND** the section background is `#000` (black)

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

### Requirement: Result count in advanced search section

The result count SHALL be displayed inside the advanced search section's
bottom row, on the left side, showing "[number] results" in orange + white.

#### Scenario: Result count displays in action row

- **WHEN** the page loads
- **THEN** a result count badge is visible in the bottom row of the advanced section
- **AND** the badge shows "[number] results" text
- **AND** the number portion is in orange (`#e45c27`)
- **AND** the "results" text is in white (`#fff`)

### Requirement: Orange Search button and Reset link

The form SHALL contain an orange "Search" button and a "Reset" text link
in the bottom row of the advanced search section.

#### Scenario: Search button renders with correct styling

- **WHEN** the page loads
- **THEN** a "Search" button is visible
- **AND** the button background color is `#e45c27` (orange)
- **AND** the button text color is white (`#fff`)
- **AND** the button font weight is bold
- **AND** the button height is `40px`
- **AND** the button has a `border-radius` of `3px`

#### Scenario: Search button hover state

- **WHEN** the user hovers over the Search button
- **THEN** the button background changes to `#d7501b`

#### Scenario: Reset button renders with correct styling

- **WHEN** the page loads
- **THEN** a "Reset" button is visible
- **AND** the button background is transparent
- **AND** the button text color is white (`#fff`)
- **AND** the button font weight is bold

#### Scenario: Reset button hover state

- **WHEN** the user hovers over the Reset button
- **THEN** the button text color stays white (`#fff`)

### Requirement: Responsive layout for mobile

The form SHALL stack filter rows vertically on screens narrower than 767px,
and adjust search input padding and icon size.

#### Scenario: Filters stack vertically on mobile

- **WHEN** the viewport width is less than `767px`
- **THEN** each filter select takes full width
- **AND** the filter rows stack vertically (each on its own line)

#### Scenario: Search input adjusts for mobile

- **WHEN** the viewport width is less than `767px`
- **THEN** the search input padding changes to `10px 60px 10px 40px`
- **AND** the search icon size reduces to `26px`

### Requirement: Button hover transitions

Both the Search and Reset buttons SHALL have smooth hover transitions.

#### Scenario: Button transitions animate on hover

- **WHEN** the user hovers over either button
- **THEN** the color/background change transitions smoothly over `0.2s ease-out`

### Requirement: Component Dock branding

The template SHALL include a footer or attribution linking to Component Dock.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text or label includes "Component Dock"
