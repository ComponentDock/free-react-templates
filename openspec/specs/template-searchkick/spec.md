# Template: Searchkick (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V21" — a standalone expandable
search bar widget with two distinct input styles: a rounded pill that expands
on focus with a left-aligned magnifying glass icon and clear button, and a
square input that expands on focus with a right-aligned magnifying glass icon.
Both sit centered on a light blue full-viewport background.

- **Source:** https://colorlib.com/wp/template/colorlib-search-21/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-21/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-21.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-21.zip (full HTML+CSS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                      | Value                                              |
| -------------------------- | -------------------------------------------------- |
| Font family                | `'Poppins', sans-serif` (weights 300, 400)        |
| Page background            | `#d8f4fe` (very light ice-blue)                    |
| Layout                     | Full viewport, flexbox centered, `padding: 15px`   |
| Form max-width             | `570px`                                            |
| Form row spacing           | `margin-bottom: 80px` between the two input rows   |
| **Input base**             | Both inputs: `height: 60px`, `width: 60px` (collapsed), `border: 0`, `font-size: 18px` |
| **Input 1 (pill/rounded)** | `border-radius: 30px`, white bg `#fff`, left-aligned search icon SVG (magnifying glass, `#ccc` fill, 34×34 bg-size at `14px 14px`), expands to 100% width on focus with `transition: width .2s ease-in`, `padding-right: 60px` on focus for clear button |
| **Input 1 clear button**   | Absolute positioned, `60×60px`, transparent bg, X icon SVG (`#ccc` fill, `22×22`), opacity 0 → visible when input has text, hover `#333` |
| **Input 2 (square)**       | `border-radius: 3px`, white bg `#fff`, right-aligned search icon SVG (`#ccc` fill, 34×34 at `calc(100% - 14px) 14px`), expands to 100% width on focus with `transition: width .3s`, `padding-left: 15px` on focus |
| Placeholder color (input 1)| `#ccc`, weight 300                                  |
| Placeholder color (input 2)| `#666`                                              |
| Input focus state          | `box-shadow: none`, `outline: 0`                    |
| Input hover state          | `box-shadow: none`, `outline: 0`                    |

## Visual description (from screenshot + downloaded HTML)

The page has a full-viewport light ice-blue (`#d8f4fe`) background with a
form centered vertically and horizontally. The form contains two rows,
separated by `80px` of vertical space:

1. **Row 1 — Rounded pill input**: Starts as a 60×60px white circle with a
   gray magnifying glass icon centered inside. On click, it smoothly expands
   horizontally to the full form width (`570px`), revealing a text input with
   the placeholder "Keyword" and a clear (X) button that appears when text
   is present. The pill has fully rounded corners (`border-radius: 30px`).

2. **Row 2 — Square input**: Starts as a 60×60px white square with a gray
   magnifying glass icon right-aligned. On click, it expands to full width
   with a slight left padding, showing a search-type input with "Keyword"
   placeholder. The square has minimal rounding (`border-radius: 3px`).

Both inputs have no visible border, no shadow, and a clean minimal aesthetic.
The expand animations use CSS transitions (`.2s` for pill, `.3s` for square).
The overall design is a compact, elegant search widget demonstration.

## Requirements (Gherkin)

### Section: Page layout

```gherkin
Feature: Page layout
  Scenario: Full viewport centered layout
    Given the page loads
    Then the page has a light ice-blue background (#d8f4fe)
    And the content is centered vertically and horizontally in the viewport
    And the layout is responsive (padding adjusts on small screens)

  Scenario: Form container
    Given the page loads
    Then a form container is displayed centered on the page
    And the form has a max-width of approximately 570px
    And the form contains two input rows separated by vertical spacing
```

### Section: Rounded pill search input (Input 1)

```gherkin
Feature: Rounded pill search input
  Scenario: Collapsed state
    Given the page loads
    Then the first input appears as a 60×60px white circle
    And it displays a gray magnifying glass icon (left-aligned)
    And the border-radius is fully rounded (pill shape, ~30px)
    And there is no visible text input field

  Scenario: Expand on focus
    Given the user clicks on the pill input
    Then the input expands horizontally to fill the form width
    And a text input field becomes visible with placeholder "Keyword"
    And the transition completes smoothly (~0.2s)

  Scenario: Clear button appears with text
    Given the pill input is focused and expanded
    When the user types text into the input
    Then a clear (X) button appears on the right side of the input
    And the clear button is vertically centered

  Scenario: Clear button removes text
    Given the pill input has text entered
    When the user clicks the clear button
    Then the input text is cleared
    And the input returns to empty state

  Scenario: Collapse on blur
    Given the pill input is expanded
    When the user clicks outside the input area
    Then the input collapses back to the 60×60px circle
    And the magnifying glass icon is visible again
```

### Section: Square search input (Input 2)

```gherkin
Feature: Square search input
  Scenario: Collapsed state
    Given the page loads
    Then the second input appears as a 60×60px white square
    And it displays a gray magnifying glass icon (right-aligned)
    And the border-radius is minimal (~3px)
    And there is no visible text input field

  Scenario: Expand on focus
    Given the user clicks on the square input
    Then the input expands horizontally to fill the form width
    And a search-type input field becomes visible with placeholder "Keyword"
    And the transition completes smoothly (~0.3s)
    And the input has slight left padding when expanded
```

### Section: Accessibility and interaction

```gherkin
Feature: Accessibility and interaction
  Scenario: Keyboard navigation
    Given the page loads
    Then both inputs are focusable via keyboard (Tab)
    And focus-visible styling is applied

  Scenario: Screen reader support
    Given the page loads
    Then each input has an appropriate aria-label
    And the clear button has an aria-label for screen readers

  Scenario: Responsive behavior
    Given the page is viewed on a mobile device
    Then both inputs remain functional
    And the form width adapts to the viewport
    And the expand animations work correctly on touch devices
```

## Verification checklist

- [ ] Full-viewport light blue background centered layout
- [ ] Two distinct search inputs with expand-on-click animation
- [ ] Input 1: pill shape (border-radius: 30px), left icon, clear button, focus expand
- [ ] Input 2: square shape (border-radius: 3px), right icon, focus expand
- [ ] Poppins font family (weights 300, 400)
- [ ] Smooth CSS transitions for expand/collapse
- [ ] Clear button functionality on Input 1
- [ ] Responsive layout (works on mobile)
- [ ] No border, no shadow on inputs (clean minimal style)
- [ ] Correct placeholder colors (#ccc for pill, #666 for square)
- [ ] Component structure: `src/components/SearchForm.tsx` (or similar)
- [ ] App.tsx composes the template section(s)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchkick.free.componentdock.com`
