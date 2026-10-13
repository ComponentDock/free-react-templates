# Template: SearchLens (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V24" — a three-section search
widget with a text input, a category dropdown, and a blue SEARCH button,
arranged horizontally on a full-viewport background image. Features a clean,
minimal design with separated input fields and a custom-styled select.

- **Source:** https://colorlib.com/wp/template/colorlib-search-24/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-24/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-24.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-24.zip (full HTML+CSS+JS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                      | Value                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| Font family                | `'Poppins', sans-serif` (weight 400, button weight 300)           |
| Page background            | Full-viewport background image, `background-size: cover`, `background-position: center` |
| Layout                     | Full viewport, flex centered, `padding: 15px`                      |
| Form max-width             | `940px`                                                            |
| Inner form                 | Flex layout, three sections side-by-side                           |
| **Input field height**     | `68px` (desktop), `60px` (≤992px)                                 |
| **Input field (left)**     | `flex-grow: 1`, white bg `#fff`, `border: 1px solid #e5e5e5`, `border-right: 0`, `padding: 10px 32px` |
| Input text color           | `#333`                                                             |
| Placeholder color          | `#9a9a9a`, `font-size: 20px` (input text `16px`)                  |
| **Category dropdown (mid)**| `min-width: 260px`, custom select with `#f9f9f9` bg, `1px solid #e5e5e5` border, `border-radius: 2.5px` |
| Dropdown chevron           | SVG arrow-down, `fill: #999`, `18×18`, absolutely positioned right |
| Dropdown text              | `#333`, `font-size: 20px`                                          |
| **Search button (right)**  | `width: 164px`, `background: #4272d7` (blue), white text, `font-size: 20px`, `font-weight: 300` |
| Button hover               | `background: #2d62d3` (darker blue)                               |
| Button transition          | `all .2s ease-out, color .2s ease-out`                             |
| Mobile (≤767px)            | Flex-wrap, all fields full-width, `padding: 20px`, margin-bottom between fields |

## Visual description (from downloaded HTML + CSS)

The page has a full-viewport background image (dark/moody scene, `cover`).
Centered on it is a wide search form (max-width 940px) with three sections
arranged horizontally:

1. **Left — Text input**: White background with a light gray border
   (`#e5e5e5`). Placeholder "What are you looking for?" in gray (`#9a9a9a`).
   Takes up remaining space (flex-grow). No right border (connects to
   category dropdown).

2. **Middle — Category dropdown**: Light gray background (`#f9f9f9`) with
   border. Shows "CATEGORY" as default text. Custom-styled select with a
   chevron-down icon on the right. Options: Subject A, B, C.

3. **Right — SEARCH button**: Solid blue (`#4272d7`) with white uppercase
   text. Fixed width (164px). On hover, darkens to `#2d62d3`.

On mobile (≤767px), the form wraps: all three sections stack vertically at
full width with spacing between them. The form gets internal padding.

## Requirements

### Section: Page layout

Feature: Page layout

#### Scenario: Full viewport background

- **GIVEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the background covers the entire viewport
- **AND** the background is centered

#### Scenario: Centered form

- **GIVEN** the page loads
- **THEN** a search form is centered on the page
- **AND** the form has a max-width of approximately 940px
- **AND** the form contains three sections arranged horizontally

### Section: Text input

Feature: Text input

#### Scenario: Default state

- **GIVEN** the page loads
- **THEN** the left section contains a text input
- **AND** the input has a white background
- **AND** the input has a light gray border (#e5e5e5)
- **AND** the input has no right border (connects to category)
- **AND** the placeholder text is "What are you looking for?" in gray (#9a9a9a)
- **AND** the input height is approximately 68px
- **AND** the input takes up the remaining horizontal space

#### Scenario: Focus state

- **GIVEN** the user clicks on the text input
- **THEN** the input receives focus
- **AND** no outline or shadow appears

### Section: Category dropdown

Feature: Category dropdown

#### Scenario: Default state

- **GIVEN** the page loads
- **THEN** the middle section contains a category dropdown
- **AND** the dropdown shows "CATEGORY" as the default option
- **AND** the dropdown has a light gray background (#f9f9f9)
- **AND** the dropdown has a border (#e5e5e5)
- **AND** a chevron-down icon is visible on the right side
- **AND** the dropdown minimum width is approximately 260px

#### Scenario: Open dropdown

- **GIVEN** the user clicks on the category dropdown
- **THEN** the dropdown options are displayed
- **AND** the options include "Subject A", "Subject B", "Subject C"
- **AND** the chevron icon changes direction (points up)

#### Scenario: Select option

- **GIVEN** the dropdown is open
- **WHEN** the user selects an option
- **THEN** the dropdown closes
- **AND** the selected option text is displayed

### Section: Search button

Feature: Search button

#### Scenario: Default state

- **GIVEN** the page loads
- **THEN** a blue SEARCH button is displayed on the right
- **AND** the button background is #4272d7
- **AND** the button text is white and uppercase
- **AND** the button text reads "SEARCH"
- **AND** the button width is approximately 164px

#### Scenario: Hover state

- **GIVEN** the user hovers over the SEARCH button
- **THEN** the button background darkens to #2d62d3
- **AND** the transition is smooth (~0.2s)

#### Scenario: Click

- **GIVEN** the user clicks the SEARCH button
- **THEN** the form submits (or triggers search action)

### Section: Responsive behavior

Feature: Responsive behavior

#### Scenario: Tablet layout

- **GIVEN** the page is viewed on a screen narrower than 993px
- **THEN** the input field height reduces to approximately 60px

#### Scenario: Mobile layout

- **GIVEN** the page is viewed on a screen narrower than 768px
- **THEN** the form sections stack vertically
- **AND** each section takes full width
- **AND** the form has internal padding (20px)
- **AND** there is spacing between the stacked sections

### Section: Accessibility

Feature: Accessibility

#### Scenario: Keyboard navigation

- **GIVEN** the page loads
- **THEN** the text input is focusable via keyboard
- **AND** the category dropdown is focusable via keyboard
- **AND** the SEARCH button is focusable via keyboard
- **AND** focus-visible styling is applied

#### Scenario: Screen reader support

- **GIVEN** the page loads
- **THEN** the text input has an appropriate aria-label
The category dropdown has an accessible label
- **AND** the SEARCH button has an accessible label

## Verification checklist

- [ ] Full-viewport background image (cover, centered)
- [ ] Three-section horizontal layout (input + dropdown + button)
- [ ] Text input: white bg, gray border, no right border, placeholder
- [ ] Category dropdown: light gray bg, custom select, chevron icon
- [ ] SEARCH button: blue (#4272d7), white text, hover darkens
- [ ] Form max-width 940px, centered
- [ ] Poppins font family (weight 400, button 300)
- [ ] Responsive: stacks vertically on mobile (≤767px)
- [ ] Input height: 68px desktop, 60px tablet
- [ ] Component structure: `src/components/SearchForm.tsx` (or similar)
- [ ] App.tsx composes the template section(s)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchlens.free.componentdock.com`
