# Template: SearchHook (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V24" — a standalone search bar widget overlaid on a photographic background image. Features a horizontal form with three segments: a text input field, a category dropdown selector, and a blue SEARCH button. All three are aligned in a single row centered on a full-viewport background photo.

- **Source:** https://colorlib.com/wp/template/colorlib-search-24/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-24/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-24.jpg (AVIF format, converted to PNG for analysis)
- **Downloaded source CSS:** extracted from `colorlib-search-24.zip` — `css/style.css` with full design tokens
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                        | Value                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Font family                  | `'Poppins', sans-serif` (weight 400)                                                       |
| Page background              | Full-viewport background image, `background-size: cover`, `background-position: center`   |
| Layout                       | Full viewport, flexbox centered, `padding: 15px`                                          |
| Form max-width               | `940px`                                                                                    |
| Form layout                  | Horizontal flex, `justify-content: space-between`, `align-items: center`                  |
| Input height (desktop)       | `68px`                                                                                     |
| Input height (tablet ≤992px) | `60px`                                                                                     |
| Input background             | `#fff` (white)                                                                             |
| Input border                 | `1px solid #e5e5e5` (light gray)                                                           |
| Input border-right (first)   | `0` (no right border — seamless join to dropdown)                                         |
| Input text color             | `#333`                                                                                     |
| Input font size              | `16px`                                                                                     |
| Input padding                | `10px 32px`                                                                                |
| Placeholder color            | `#9a9a9a` (gray)                                                                           |
| Placeholder font size        | `20px`                                                                                     |
| Dropdown min-width           | `260px`                                                                                    |
| Dropdown background          | `#fff`                                                                                     |
| Dropdown border              | `1px solid #e5e5e5`                                                                        |
| Dropdown border-radius       | `0` (sharp corners)                                                                        |
| Dropdown chevron             | SVG data URI, `fill: #999`, `18×18px`, positioned `right: 15px`                            |
| Dropdown text color          | `#333`                                                                                     |
| Dropdown font size           | `20px`, weight `400`                                                                       |
| Dropdown height              | `68px` (matches input)                                                                     |
| Button width                 | `164px`                                                                                    |
| Button background            | `#4272d7` (brand blue)                                                                     |
| Button hover background      | `#2d62d3` (darker blue)                                                                    |
| Button text color            | `#fff` (white)                                                                             |
| Button font size             | `20px`                                                                                     |
| Button font weight           | `300` (light)                                                                              |
| Button text                  | `SEARCH` (uppercase)                                                                       |
| Transition                   | `all .2s ease-out, color .2s ease-out`                                                     |
| Mobile breakpoint            | `≤767px` — flex-wrap, input stacks, padding `20px`                                         |
| Mobile dropdown border       | `1px solid rgba(255, 255, 255, 0.3)` (semi-transparent white in source — likely a mobile override) |

## Requirements

### Requirement: Full viewport background

The page SHALL display a full-viewport photographic background image that covers the entire viewport, centered, with the search form overlaid on top.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the background image covers the entire viewport
- **AND** the background is centered

### Requirement: Centered search form

The search form SHALL be centered vertically and horizontally on the page with a max-width of approximately 940px.

#### Scenario: Form is centered on page

- **WHEN** the page loads
- **THEN** a form is centered vertically and horizontally
- **AND** the form has a max-width of approximately 940px
- **AND** the form has `padding: 15px`

### Requirement: Horizontal three-segment form layout

The form SHALL display three segments in a horizontal row: text input (flex-grow), category dropdown (min-width 260px), and search button (164px wide), aligned at center.

#### Scenario: Three segments render in a row

- **WHEN** the page loads
- **THEN** the form contains three segments laid out horizontally
- **AND** the first segment (text input) fills available space
- **AND** the second segment (dropdown) has a minimum width of approximately 260px
- **AND** the third segment (button) has a width of approximately 164px
- **AND** all segments are vertically aligned at center

### Requirement: Search text input

The text input SHALL have a white background, light gray border, placeholder text "What are you looking for?" in gray, and height of 68px.

#### Scenario: Input renders with correct styling

- **WHEN** the page loads
- **THEN** a text input is displayed with placeholder "What are you looking for?"
- **AND** the input has a white background
- **AND** the input has a `1px solid #e5e5e5` border
- **AND** the input text color is `#333`
- **AND** the placeholder color is `#9a9a9a`
- **AND** the input height is 68px

#### Scenario: Input focus state

- **WHEN** the user focuses the input
- **THEN** the input has no box-shadow
- **AND** the outline is removed

### Requirement: Category dropdown

The category dropdown SHALL display "CATEGORY" as the default label with a downward chevron icon, styled identically to the text input (white background, light gray border, 68px height).

#### Scenario: Dropdown renders with default label

- **WHEN** the page loads
- **THEN** a dropdown selector is displayed
- **AND** the default label shows "CATEGORY"
- **AND** a downward chevron icon is visible on the right side
- **AND** the dropdown has a white background and light gray border

#### Scenario: Dropdown has category options

- **WHEN** the user opens the dropdown
- **THEN** options including at least "Subject A", "Subject B", "Subject C" are shown

### Requirement: Search button

The search button SHALL have a blue background (#4272d7), white text "SEARCH" in uppercase, light font weight, and darken to #2d62d3 on hover.

#### Scenario: Button renders with correct styling

- **WHEN** the page loads
- **THEN** a button with text "SEARCH" is displayed
- **AND** the button has a blue background (#4272d7)
- **AND** the button text is white and uppercase
- **AND** the button font weight is light (300)
- **AND** the button font size is 20px

#### Scenario: Button hover state

- **WHEN** the user hovers the button
- **THEN** the button background changes to #2d62d3
- **AND** the transition is smooth (0.2s ease-out)

### Requirement: Seamless segment borders

The text input and dropdown SHALL appear seamlessly joined — the text input has no right border, and the segments share edges without gaps.

#### Scenario: Input and dropdown are seamlessly joined

- **WHEN** the page loads
- **THEN** the text input has no right border
- **AND** the dropdown has no left border or margin gap

### Requirement: Responsive mobile layout

On screens narrower than 768px, the form segments SHALL wrap vertically, each taking full width, with 20px padding around the form.

#### Scenario: Mobile layout adapts

- **WHEN** the page is viewed on a screen narrower than 768px
- **THEN** the form segments stack vertically
- **AND** each segment takes full width
- **AND** the form has 20px padding
- **AND** each segment has 20px bottom margin

#### Scenario: Tablet layout adapts

- **WHEN** the page is viewed on a screen narrower than 992px
- **THEN** the input and dropdown height reduces to 60px

### Requirement: Keyboard and screen reader accessibility

The search input and dropdown SHALL be focusable via keyboard with focus-visible styling, and SHALL have appropriate aria-labels for screen readers.

#### Scenario: Keyboard navigation works

- **WHEN** the page loads
- **THEN** the search input is focusable via keyboard
- **AND** the dropdown is focusable via keyboard
- **AND** focus-visible styling is applied

#### Scenario: Screen reader labels present

- **WHEN** the page loads
- **THEN** the input has an appropriate aria-label
- **AND** the button has an appropriate aria-label

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"

## Verification checklist

- [ ] Full-viewport background image renders correctly
- [ ] Form is centered with max-width 940px
- [ ] Three segments display in horizontal row
- [ ] Text input has white bg, gray border, correct placeholder
- [ ] Dropdown shows "CATEGORY" with chevron
- [ ] Search button is blue with white text
- [ ] Seamless join between input and dropdown (no double borders)
- [ ] Hover state on button (darker blue)
- [ ] Mobile responsive: segments stack vertically at ≤767px
- [ ] Tablet responsive: height reduces at ≤992px
- [ ] Keyboard accessible: tab navigation works
- [ ] Screen reader labels present
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
