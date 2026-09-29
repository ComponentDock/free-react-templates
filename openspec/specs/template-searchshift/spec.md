# Template: SearchShift (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V25" — a dark-overlay search
widget with a category dropdown, text input, and a gradient blue-to-red
 SEARCH button that shifts colors on hover. Features a semi-transparent dark
background overlay on a full-viewport photo, creating a cinematic look.

- **Source:** https://colorlib.com/wp/template/colorlib-search-25/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-25/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-25.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-25.zip (full HTML+CSS+JS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                      | Value                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| Font family                | `'Poppins', sans-serif` (weights 300, 400)                        |
| Page background            | Full-viewport background image, `background-size: cover`, `background-position: center` |
| Layout                     | Full viewport, flex centered, `padding: 15px`                      |
| Form max-width             | `790px`                                                            |
| **Inner form (dark overlay)** | `background: rgba(0, 0, 0, 0.5)` (50% black), flex layout       |
| Input field height         | `68px` (desktop), `50px` (≤992px)                                 |
| **Category dropdown (left)** | `width: 200px`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)` |
| Dropdown text              | White (`#fff`), `font-size: 16px`                                  |
| Dropdown chevron           | `fill: #e5e5e5`, positioned `right: 30px`                          |
| **Text input (middle)**    | `flex-grow: 1`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)`, `border-left: 0`, `border-right: 0` |
| Input text color           | `#fff` (white)                                                     |
| Placeholder color          | `#e5e5e5` (light gray)                                             |
| Input font size            | `16px`                                                             |
| **Search button (right)**  | `width: 164px`, gradient background: `linear-gradient(45deg, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)` (blue to red) |
| Button text                | `#fff` (white), `20px`, `font-weight: 300`, "Search" (title case)  |
| Button hover               | Pseudo-element with reversed gradient: `linear-gradient(45deg, #ff4b5a 0%, #ff4b5a 28%, #2c6dd5 91%, #2c6dd5 100%)` fades in via `opacity: 0→1` |
| Button transition          | `all .2s ease-out, color .2s ease-out`                             |
| Mobile (≤767px)            | Flex-wrap, all fields full-width, `padding: 20px`, margin-bottom between fields |

## Visual description (from downloaded HTML + CSS)

The page has a full-viewport background image with a semi-transparent dark
overlay (`rgba(0,0,0,0.5)`) covering the entire inner form area. Centered on
the page is a search form (max-width 790px) with three sections:

1. **Left — Category dropdown**: Fixed width (200px), transparent background
   with a subtle white border (`rgba(255,255,255,0.3)`). Shows "Category"
   in white text with a chevron-down icon. Options: Subject A, B, C.

2. **Middle — Text input**: Takes remaining space (flex-grow), transparent
   background, white text, placeholder "Enter Keywords" in light gray.
   No left or right borders (connects visually to dropdown and button).

3. **Right — SEARCH button**: Fixed width (164px), gradient background
   shifting from blue (`#2c6dd5`) on the left to red (`#ff4b5a`) on the
   right. On hover, the gradient reverses (red→blue) via a CSS pseudo-element
   that fades in. White text "Search" in title case.

The overall effect is a dark, cinematic search bar floating over a background
photo, with the gradient button providing a striking color accent.

## Requirements (Gherkin)

### Section: Page layout

```gherkin
Feature: Page layout
  Scenario: Full viewport with dark overlay
    Given the page loads
    Then the page has a full-viewport background image
    And the search form has a dark semi-transparent overlay (rgba(0,0,0,0.5))
    And the form is centered on the page
    And the form has a max-width of approximately 790px
```

### Section: Category dropdown

```gherkin
Feature: Category dropdown
  Scenario: Default state
    Given the page loads
    Then the left section contains a category dropdown
    And the dropdown has a transparent background with white border
    And the dropdown shows "Category" as the default option
    And the dropdown text is white
    And the dropdown width is approximately 200px
    And a chevron-down icon is visible

  Scenario: Open dropdown
    Given the user clicks on the category dropdown
    Then the dropdown options are displayed
    And the options include "Subject A", "Subject B", "Subject C"
```

### Section: Text input

```gherkin
Feature: Text input
  Scenario: Default state
    Given the page loads
    Then the middle section contains a text input
    And the input has a transparent background
    And the input text color is white
    And the placeholder text is "Enter Keywords" in light gray (#e5e5e5)
    And the input has no left or right borders
    And the input takes up the remaining horizontal space

  Scenario: Focus state
    Given the user clicks on the text input
    Then the input receives focus
    And the border color changes to white
    And no outline or shadow appears
```

### Section: Search button

```gherkin
Feature: Search button
  Scenario: Default state
    Given the page loads
    Then a gradient SEARCH button is displayed on the right
    And the button has a blue-to-red gradient (left to right)
    And the button text is white and reads "Search"
    And the button width is approximately 164px

  Scenario: Hover state
    Given the user hovers over the SEARCH button
    Then the gradient reverses (red-to-blue)
    And the transition is smooth (~0.2s)
    And the color shift happens via a fading pseudo-element

  Scenario: Click
    Given the user clicks the SEARCH button
    Then the form submits (or triggers search action)
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Tablet layout
    Given the page is viewed on a screen narrower than 993px
    Then the input field height reduces to approximately 50px

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
    Then the category dropdown is focusable via keyboard
    And the text input is focusable via keyboard
    And the SEARCH button is focusable via keyboard
    And focus-visible styling is applied

  Scenario: Screen reader support
    Given the page loads
    Then the category dropdown has an accessible label
    And the text input has an appropriate aria-label
    And the SEARCH button has an accessible label
```

## Verification checklist

- [ ] Full-viewport background image with dark overlay (rgba(0,0,0,0.5))
- [ ] Three-section horizontal layout (dropdown + input + button)
- [ ] Category dropdown: transparent bg, white border, white text, 200px width
- [ ] Text input: transparent bg, white text, no left/right borders
- [ ] Search button: blue-to-red gradient, reverses on hover
- [ ] Gradient hover animation (pseudo-element fade, ~0.2s)
- [ ] Form max-width 790px, centered
- [ ] Poppins font family (weights 300, 400)
- [ ] Responsive: stacks vertically on mobile (≤767px)
- [ ] Input height: 68px desktop, 50px tablet
- [ ] Component structure: `src/components/SearchForm.tsx` (or similar)
- [ ] App.tsx composes the template section(s)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchshift.free.componentdock.com`
