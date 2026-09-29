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

## Requirements (Gherkin)

### Section: Page layout

```gherkin
Feature: Page layout
  Scenario: Full viewport background
    Given the page loads
    Then the page has a full-viewport background image
    And the background covers the entire viewport
    And the background is centered

  Scenario: Centered form
    Given the page loads
    Then a search form is centered on the page
    And the form has a max-width of approximately 940px
    And the form contains three sections arranged horizontally
```

### Section: Text input

```gherkin
Feature: Text input
  Scenario: Default state
    Given the page loads
    Then the left section contains a text input
    And the input has a white background
    And the input has a light gray border (#e5e5e5)
    And the input has no right border (connects to category)
    And the placeholder text is "What are you looking for?" in gray (#9a9a9a)
    And the input height is approximately 68px
    And the input takes up the remaining horizontal space

  Scenario: Focus state
    Given the user clicks on the text input
    Then the input receives focus
    And no outline or shadow appears
```

### Section: Category dropdown

```gherkin
Feature: Category dropdown
  Scenario: Default state
    Given the page loads
    Then the middle section contains a category dropdown
    And the dropdown shows "CATEGORY" as the default option
    And the dropdown has a light gray background (#f9f9f9)
    And the dropdown has a border (#e5e5e5)
    And a chevron-down icon is visible on the right side
    And the dropdown minimum width is approximately 260px

  Scenario: Open dropdown
    Given the user clicks on the category dropdown
    Then the dropdown options are displayed
    And the options include "Subject A", "Subject B", "Subject C"
    And the chevron icon changes direction (points up)

  Scenario: Select option
    Given the dropdown is open
    When the user selects an option
    Then the dropdown closes
    And the selected option text is displayed
```

### Section: Search button

```gherkin
Feature: Search button
  Scenario: Default state
    Given the page loads
    Then a blue SEARCH button is displayed on the right
    And the button background is #4272d7
    And the button text is white and uppercase
    And the button text reads "SEARCH"
    And the button width is approximately 164px

  Scenario: Hover state
    Given the user hovers over the SEARCH button
    Then the button background darkens to #2d62d3
    And the transition is smooth (~0.2s)

  Scenario: Click
    Given the user clicks the SEARCH button
    Then the form submits (or triggers search action)
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Tablet layout
    Given the page is viewed on a screen narrower than 993px
    Then the input field height reduces to approximately 60px

  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then the form sections stack vertically
    And each section takes full width
    And the form has internal padding (20px)
    And there is spacing between the stacked sections
```

### Section: Accessibility

```gherkin
Feature: Accessibility
  Scenario: Keyboard navigation
    Given the page loads
    Then the text input is focusable via keyboard
    And the category dropdown is focusable via keyboard
    And the SEARCH button is focusable via keyboard
    And focus-visible styling is applied

  Scenario: Screen reader support
    Given the page loads
    Then the text input has an appropriate aria-label
    The category dropdown has an accessible label
    And the SEARCH button has an accessible label
```

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
