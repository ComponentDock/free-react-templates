# Template: SearchQuest (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search 9" — an advanced search form widget
with a main keyword input field, six category dropdown filters (Accessories,
Color, Size, Sale, Time, Type) arranged in a 3×2 grid, a result count display,
and Reset/Search action buttons. The form is centered on a full-viewport light
blue background with a white card container, subtle box-shadow, and a cyan
accent border under the main search input.

- **Source:** https://colorlib.com/wp/template/colorlib-search-9/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-9/ — returned 404
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-9.zip (full HTML+CSS+JS analyzed)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-9.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS and screenshot visual analysis.

| Token                          | Value                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| Font family                    | `'Lato', sans-serif` (weights 400, 700)                                                  |
| Page background                | Solid color `#d9eff5` (light sky blue), full viewport, centered flexbox                   |
| Layout                         | Full viewport, flexbox centered both axes, `padding: 15px`                                |
| Form max-width                 | `790px`                                                                                   |
| Basic search card background   | `#fff` (white)                                                                            |
| Basic search box-shadow        | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                                  |
| Basic search border-bottom     | `2px solid #00bbec` (cyan accent)                                                        |
| Main input height              | `70px`                                                                                    |
| Main input padding             | `10px 80px 10px 40px`                                                                     |
| Main input font-size           | `18px`                                                                                    |
| Main input color               | `#555`                                                                                    |
| Main input placeholder color   | `#999`, `font-weight: 600`                                                               |
| Search icon (SVG) size         | `34px × 34px`, fill `#ccc`                                                               |
| Search icon container width    | `60px`                                                                                    |
| Advance search background      | `#fff`                                                                                    |
| Advance search padding         | `40px`                                                                                    |
| Advance search box-shadow      | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                                  |
| "ADVANCED SEARCH" label        | `font-size: 14px`, `color: #999`, `font-weight: bold`                                   |
| Select dropdowns row           | `display: flex`, `justify-content: space-between`, 3 columns                              |
| Select dropdown width          | `calc((100% - 40px) / 3)` each                                                           |
| Select height                  | `40px`                                                                                    |
| Select border                  | `1px solid rgba(0, 0, 0, 0.1)`                                                          |
| Select background              | `transparent`                                                                             |
| Select font                    | `Lato`, `14px`, `700`, color `rgb(102, 102, 102)` (`#666`)                               |
| Select arrow                   | SVG chevron-down in `#999`, `18px × 18px`                                                |
| Result count color             | `#666`, `14px`; count number in `#00bbec` (cyan)                                         |
| Reset button                   | `transparent` bg, `#666` text, `bold`, `min-width: 100px`, `height: 40px`               |
| Reset button hover             | `color: #000`                                                                             |
| Search button background       | `#00bbec` (cyan)                                                                          |
| Search button hover background | `#00a7d3` (darker cyan)                                                                  |
| Search button color            | `#fff`                                                                                    |
| Search button font             | `bold`, `14px`                                                                            |
| Search button border-radius    | `0` (sharp corners)                                                                       |
| Search button box-shadow       | `0px 2px 5px 0px rgba(0, 0, 0, 0.15)`                                                   |
| Search button min-width        | `100px`                                                                                   |
| Search button height           | `40px`                                                                                    |
| Row spacing (between rows)     | `20px`                                                                                    |
| Row spacing (second row)       | `46px`                                                                                    |
| Mobile breakpoint              | `767px` — rows stack vertically, padding adjusts to `15px` left                          |
| Mobile input padding           | `10px 80px 10px 15px`                                                                     |
| Mobile advance padding         | `30px 15px`                                                                               |
| Mobile select width            | `100%`, margin-bottom `20px`                                                              |

### Screenshot visual notes

The screenshot shows a clean, modern advanced search form widget centered on
a soft light blue (`#d9eff5`) background. The form has two distinct white
sections stacked vertically:

1. **Basic search (top):** A tall white input field with placeholder text
   "Type Keywords" in gray, and a large gray magnifying glass icon on the
   right side. A cyan (`#00bbec`) accent line runs along the bottom edge.
   The card has a subtle drop shadow.

2. **Advanced search (bottom):** Connected below the basic search with
   matching shadow. Contains:
   - A small gray bold label "ADVANCED SEARCH" at the top-left.
   - Two rows of 3 dropdown selectors each (total 6 filters):
     - Row 1: Accessories, Color, Size
     - Row 2: Sale, Time, Type
   - Each dropdown has a thin gray border, transparent background, gray bold
     text, and a small gray chevron-down icon on the right.
   - Bottom row: "108 results" (number in cyan) on the left, "RESET" text
     button and a solid cyan "SEARCH" button on the right.

The overall aesthetic is minimal, flat, and professional — the light blue
background creates a calm, focused search experience. Typography is Lato
(sans-serif), and the only accent color is the cyan `#00bbec` used on
borders, the result count, and the primary action button.

## Requirements

### Requirement: Full viewport light blue background

The page SHALL display a full-viewport solid light blue background (`#d9eff5`)
that covers the entire viewport.

#### Scenario: Background color covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background
- **AND** the background color is `#d9eff5` (light sky blue)

### Requirement: Centered search form container

The search form SHALL be displayed as a container centered vertically and
horizontally on the page, with a max-width of approximately 790px.

#### Scenario: Form container is centered on page

- **WHEN** the page loads
- **THEN** the form container is centered vertically and horizontally
- **AND** the form has a max-width of approximately 790px
- **AND** the form container has a padding of 15px

### Requirement: Basic search input section

The top section of the form SHALL display a white text input field for keyword
search with a search icon on the right, a cyan accent border on the bottom,
and a subtle box-shadow.

#### Scenario: Basic search input displays correctly

- **WHEN** the page loads
- **THEN** the basic search section is visible at the top of the form
- **AND** the basic search background is `#fff` (white)
- **AND** the basic search has a box-shadow of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **AND** the basic search has a bottom border of `2px solid #00bbec`

#### Scenario: Main keyword input field

- **WHEN** the page loads
- **THEN** a text input is visible with placeholder text "Type Keywords"
- **AND** the input has a height of 70px
- **AND** the input font-size is 18px
- **AND** the input text color is `#555`
- **AND** the input placeholder color is `#999`

#### Scenario: Search icon displays

- **WHEN** the page loads
- **THEN** a magnifying glass SVG icon is visible on the right side of the input
- **AND** the icon SVG is 34px × 34px
- **AND** the icon fill color is `#ccc`

### Requirement: Advanced search section with dropdown filters

The advanced search section SHALL display below the basic search section with
a "ADVANCED SEARCH" label and six category dropdown filters arranged in two
rows of three columns each.

#### Scenario: Advanced search section layout

- **WHEN** the page loads
- **THEN** the advanced search section is visible below the basic search
- **AND** the advanced search background is `#fff` (white)
- **AND** the advanced search has padding of 40px
- **AND** the advanced search has a box-shadow of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`

#### Scenario: Advanced search label

- **WHEN** the page loads
- **THEN** the text "ADVANCED SEARCH" is visible at the top-left of the advanced section
- **AND** the label has font-size 14px
- **AND** the label color is `#999`
- **AND** the label is bold (font-weight bold)

#### Scenario: First row of dropdown filters

- **WHEN** the page loads
- **THEN** three dropdown selectors are visible in the first row
- **AND** the first dropdown placeholder is "Accessories"
- **AND** the second dropdown placeholder is "Color"
- **AND** the third dropdown placeholder is "Size"
- **AND** the dropdowns are evenly spaced in a flex row with space-between justification

#### Scenario: Second row of dropdown filters

- **WHEN** the page loads
- **THEN** three dropdown selectors are visible in the second row
- **AND** the first dropdown placeholder is "Sale"
- **AND** the second dropdown placeholder is "Time"
- **AND** the third dropdown placeholder is "Type"
- **AND** the second row has a larger bottom margin (46px) than the first row (20px)

#### Scenario: Dropdown filter styling

- **WHEN** the page loads
- **THEN** each dropdown has a height of 40px
- **AND** each dropdown has a border of `1px solid rgba(0, 0, 0, 0.1)`
- **AND** each dropdown background is transparent
- **AND** each dropdown text is bold, 14px, Lato font, color `#666`
- **AND** each dropdown has a chevron-down icon in `#999`

### Requirement: Result count display

The form SHALL display a result count below the dropdown filters showing the
number of results in cyan with "results" text in gray.

#### Scenario: Result count displays

- **WHEN** the page loads
- **THEN** the text "108 results" is visible in the bottom-left of the advanced section
- **AND** the number "108" is colored in `#00bbec` (cyan)
- **AND** the word "results" is colored in `#666`
- **AND** the font-size is 14px

### Requirement: Reset and Search action buttons

The form SHALL display a Reset text button and a Search button in the bottom-right
of the advanced search section.

#### Scenario: Reset button

- **WHEN** the page loads
- **THEN** a "RESET" button is visible in the bottom-right
- **AND** the Reset button has a transparent background
- **AND** the Reset button text color is `#666`
- **AND** the Reset button text is bold
- **AND** the Reset button has no border-radius (sharp corners)

#### Scenario: Search button

- **WHEN** the page loads
- **THEN** a "SEARCH" button is visible to the right of the Reset button
- **AND** the Search button background is `#00bbec` (cyan)
- **AND** the Search button text color is `#fff` (white)
- **AND** the Search button text is bold
- **AND** the Search button has a min-width of 100px and height of 40px
- **AND** the Search button has a box-shadow of `0px 2px 5px 0px rgba(0, 0, 0, 0.15)`
- **AND** the Search button has no border-radius (sharp corners)

#### Scenario: Search button hover state

- **WHEN** the user hovers over the Search button
- **THEN** the Search button background changes to `#00a7d3` (darker cyan)

#### Scenario: Reset button hover state

- **WHEN** the user hovers over the Reset button
- **THEN** the Reset button text color changes to `#000`

### Requirement: Responsive layout for mobile

The form SHALL stack all sections vertically on mobile screens (viewport width
≤ 767px).

#### Scenario: Mobile layout

- **WHEN** the viewport width is 767px or less
- **THEN** the dropdown filters stack vertically (one per row)
- **AND** each dropdown takes full width (100%)
- **AND** the basic search input padding adjusts to `10px 80px 10px 15px`
- **AND** the advanced search padding adjusts to `30px 15px`

### Requirement: No external framework dependencies

The template SHALL not depend on any external JavaScript framework or library
beyond React. The original uses a minimal vanilla JS snippet only for
re-rendering selects after web fonts load — this should be replicated with
React state or a useEffect hook.

#### Scenario: No jQuery or external JS libraries

- **WHEN** the template is built
- **THEN** no jQuery, Choices.js, or other external JS libraries are included
- **AND** the select re-rendering is handled natively in React

## Verification checklist

- [ ] Page background is `#d9eff5` covering full viewport
- [ ] Form is centered with max-width ~790px
- [ ] Basic search input is 70px tall with "Type Keywords" placeholder
- [ ] Search icon SVG is visible on the right of the input
- [ ] Cyan accent border (`2px solid #00bbec`) on basic search bottom
- [ ] Box-shadow present on both basic and advanced sections
- [ ] "ADVANCED SEARCH" label is bold gray (#999)
- [ ] 6 dropdowns in 2 rows of 3 columns
- [ ] Dropdowns have correct labels (Accessories, Color, Size, Sale, Time, Type)
- [ ] Dropdowns are 40px tall with thin gray borders and chevron icons
- [ ] Result count shows "108 results" with cyan number
- [ ] RESET button is transparent with gray bold text
- [ ] SEARCH button is cyan (#00bbec) with white bold text
- [ ] Search button hover changes to darker cyan (#00a7d3)
- [ ] Reset button hover changes text to black
- [ ] Mobile layout stacks all elements vertically at ≤767px
- [ ] Font is Lato (Google Fonts)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
