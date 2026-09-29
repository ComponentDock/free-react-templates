# Template: SearchPea (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V23" — a pill-shaped search
widget with a green-tinted input area, dark green SEARCH button, and a subtle
hint text below. Features a floating card design with rounded corners and
box shadow, positioned in the upper portion of a full-viewport background.

- **Source:** https://colorlib.com/wp/template/colorlib-search-23/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-23/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-23.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-23.zip (full HTML+CSS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                      | Value                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| Font family                | `'Poppins', sans-serif` (weight 400, button weight 300)           |
| Page background            | Background image positioned `bottom right`, `background-size: 100%`, `background-repeat: no-repeat` |
| Layout                     | Full viewport, flex centered, `padding: 15px`                      |
| Form max-width             | `790px`                                                            |
| Form padding-top           | `24vh` (pushed down from top)                                      |
| **Inner form (pill card)** | `border-radius: 34px`, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`, `overflow: hidden`, flex layout |
| Input field height         | `68px` (desktop), `50px` (≤992px)                                 |
| **Input area (left side)** | `background: #d9f1e3` (light mint green), `flex-grow: 1`, flex centered |
| Input text color           | `#000` (black)                                                     |
| Placeholder color          | `#222` (dark gray)                                                 |
| Input font size            | `16px`                                                             |
| **Search icon**            | SVG magnifying glass, `fill: #222`, `36×36px` (desktop), `26×26px` (mobile) |
| Icon wrapper min-width     | `80px` (desktop), `40px` (mobile ≤767px)                          |
| **Search button (right)**  | `min-width: 216px` (desktop), `100px` (mobile), `background: #00ad5f` (green) |
| Button text                | `#fff` (white), `16px` (desktop), `13px` (mobile), `font-weight: 300`, uppercase |
| Button hover               | `background: #009451` (darker green)                               |
| Button transition          | `all .2s ease-out, color .2s ease-out`                             |
| **Hint text**              | `font-size: 15px`, `color: #ccc`, `padding-left: 26px`            |
| Hint text content          | "ex. Game, Music, Video, Photography"                              |

## Visual description (from downloaded HTML + CSS)

The page has a background image (positioned bottom-right, scaling to 100%
width). A floating pill-shaped search card sits in the upper-center of the
viewport (pushed down 24vh from top):

1. **Left side — Input area**: Light mint green (`#d9f1e3`) background
   containing a dark magnifying glass icon (36×36) on the left and a text
   input with placeholder "What are you looking for?" in dark text.

2. **Right side — SEARCH button**: Solid green (`#00ad5f`) background with
   white uppercase "SEARCH" text. On hover, darkens to `#009451`.

3. **Below the pill**: A small hint line in light gray (`#ccc`):
   "ex. Game, Music, Video, Photography"

The entire card has `border-radius: 34px` (fully rounded ends) and a soft
drop shadow. The two sections are separated by the natural flex layout — no
visible divider line.

## Requirements (Gherkin)

### Section: Page layout

```gherkin
Feature: Page layout
  Scenario: Full viewport background
    Given the page loads
    Then the page has a full-viewport background image
    And the background is positioned at the bottom-right
    And the background scales to 100% width

  Scenario: Centered form card
    Given the page loads
    Then a pill-shaped search card is displayed
    And the card is centered horizontally
    And the card is positioned approximately 24vh from the top
    And the card has a max-width of approximately 790px
    And the card has rounded corners (border-radius ~34px)
    And the card has a subtle drop shadow
```

### Section: Search input area

```gherkin
Feature: Search input area
  Scenario: Default state
    Given the page loads
    Then the left portion of the card has a light mint green background (#d9f1e3)
    And a dark magnifying glass icon is displayed on the left
    And the icon is approximately 36×36px
    And a text input is visible with placeholder "What are you looking for?"
    And the input text color is dark (#000)
    And the input has no visible border

  Scenario: Focus state
    Given the user clicks on the search input
    Then the input receives focus
    And no outline or shadow appears on the input
```

### Section: Search button

```gherkin
Feature: Search button
  Scenario: Default state
    Given the page loads
    Then a green SEARCH button is displayed on the right side of the card
    And the button background is #00ad5f
    And the button text is white and uppercase
    And the button text reads "SEARCH"
    And the button has a minimum width of approximately 216px

  Scenario: Hover state
    Given the user hovers over the SEARCH button
    Then the button background darkens to #009451
    And the transition is smooth (~0.2s)

  Scenario: Click
    Given the user clicks the SEARCH button
    Then the form submits (or triggers search action)
```

### Section: Hint text

```gherkin
Feature: Hint text
  Scenario: Display
    Given the page loads
    Then a hint text is displayed below the search card
    And the hint text reads "ex. Game, Music, Video, Photography"
    And the hint text color is light gray (#ccc)
    And the hint text is left-aligned with padding
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Tablet layout
    Given the page is viewed on a screen narrower than 993px
    Then the input field height reduces to approximately 50px

  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then the search icon scales down to approximately 26×26px
    And the icon wrapper minimum width reduces to 40px
    And the SEARCH button minimum width reduces to 100px
    And the button font size reduces to 13px
```

### Section: Accessibility

```gherkin
Feature: Accessibility
  Scenario: Keyboard navigation
    Given the page loads
    Then the search input is focusable via keyboard
    And the SEARCH button is focusable via keyboard
    And focus-visible styling is applied

  Scenario: Screen reader support
    Given the page loads
    Then the input has an appropriate aria-label
    And the SEARCH button has an accessible label
```

## Verification checklist

- [ ] Full-viewport background image (bottom-right positioned)
- [ ] Pill-shaped floating card with rounded corners (34px radius)
- [ ] Soft drop shadow on the card
- [ ] Light mint green (#d9f1e3) input area on the left
- [ ] Dark magnifying glass icon (36×36) in the input area
- [ ] Text input with "What are you looking for?" placeholder
- [ ] Green (#00ad5f) SEARCH button on the right
- [ ] Button hover darkens to #009451
- [ ] Hint text "ex. Game, Music, Video, Photography" below the card
- [ ] Poppins font family (weight 400, button 300)
- [ ] Responsive: shrinks on tablet (50px height) and mobile (smaller icon/button)
- [ ] Component structure: `src/components/SearchBar.tsx` (or similar)
- [ ] App.tsx composes the template section(s)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchpea.free.componentdock.com`
