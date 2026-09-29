# Template: SearchGlow (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V22" — a standalone search bar
widget overlaid on a photographic background image. Features a single input
field with a large magnifying glass icon on the left, transparent background,
white text, and a semi-transparent white bottom border that brightens on focus.

- **Source:** https://colorlib.com/wp/template/colorlib-search-22/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-22/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-22.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-22.zip (full HTML+CSS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                       | Value                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| Font family                 | `'Montserrat', sans-serif` (weight 500)                                                                   |
| Page background             | Full-viewport background image (`search-bg.jpg`), `background-size: cover`, `background-position: center` |
| Layout                      | Full viewport, flexbox centered, `padding: 15px`                                                          |
| Form max-width              | `390px`                                                                                                   |
| Input container height      | `80px` (desktop), `50px` (mobile ≤767px)                                                                  |
| Input background            | `transparent`                                                                                             |
| Input border                | `border-bottom: 2px solid rgba(255, 255, 255, 0.5)` (semi-transparent white)                              |
| Input border on focus/hover | `border-bottom-color: #fff` (solid white)                                                                 |
| Input text color            | `#fff` (white)                                                                                            |
| Input font size             | `18px` (desktop), `16px` (mobile)                                                                         |
| Input padding               | `10px 32px 10px 70px` (desktop), `10px 16px 10px 45px` (mobile)                                           |
| Placeholder color           | `#fff` (white)                                                                                            |
| Search icon button          | Absolute left, `width: 70px`, transparent bg, `height: 100%`                                              |
| Search icon SVG             | `fill: #fff`, `50×50px` (desktop), `36×36px` (mobile)                                                     |
| Input focus state           | `box-shadow: none`, `outline: 0`, bottom border turns solid white                                         |
| Transition                  | `all .2s ease-out, color .2s ease-out`                                                                    |

## Visual description (from screenshot + downloaded HTML)

The page displays a full-viewport photographic background image (appears to
be a dark/moody scene). Centered on the background is a single search input
field:

- The input has a **transparent background** so the background image shows through.
- Text is white, with a white placeholder "What are you looking for?"
- A large white magnifying glass icon (50×50 SVG) sits on the left side of
  the input, absolutely positioned.
- The input has a **semi-transparent white bottom border** (2px, 50% opacity)
  that becomes fully opaque white on hover/focus.
- The overall effect is a clean, minimal search bar that floats over the
  background image with an elegant underline-style border.
- On mobile, the input shrinks in height and the icon/padding scale down.

## Requirements (Gherkin)

### Section: Page layout

```gherkin
Feature: Page layout
  Scenario: Full viewport background
    Given the page loads
    Then the page has a full-viewport background image
    And the background image covers the entire viewport
    And the background is centered

  Scenario: Centered form
    Given the page loads
    Then a form is centered vertically and horizontally
    And the form has a max-width of approximately 390px
```

### Section: Search input

```gherkin
Feature: Search input
  Scenario: Default state
    Given the page loads
    Then a single search input is displayed
    And the input has a transparent background
    And the input text color is white
    And the placeholder text is "What are you looking for?" in white
    And the input has a semi-transparent white bottom border (2px, 50% opacity)
    And the input height is approximately 80px

  Scenario: Search icon
    Given the page loads
    Then a white magnifying glass icon is displayed on the left side of the input
    And the icon is approximately 50×50px
    And the icon is absolutely positioned within the input container

  Scenario: Focus state
    Given the user clicks on the search input
    Then the bottom border becomes solid white (full opacity)
    And the input shows a focus ring (none in original — no outline, no shadow)
    And the cursor appears in the input

  Scenario: Hover state
    Given the user hovers over the search input
    Then the bottom border becomes solid white
```

### Section: Responsive behavior

```gherkin
Feature: Responsive behavior
  Scenario: Mobile layout
    Given the page is viewed on a screen narrower than 768px
    Then the input height reduces to approximately 50px
    And the input left padding reduces (to accommodate smaller icon)
    And the font size reduces to 16px
    And the search icon scales down to approximately 36×36px
```

### Section: Accessibility

```gherkin
Feature: Accessibility
  Scenario: Keyboard navigation
    Given the page loads
    Then the search input is focusable via keyboard
    And focus-visible styling is applied

  Scenario: Screen reader support
    Given the page loads
    Then the input has an appropriate aria-label
    And the search icon button has an aria-label
```

## Verification checklist

- [ ] Full-viewport background image layout
- [ ] Single centered search input with transparent background
- [ ] White text and placeholder on dark background
- [ ] Semi-transparent white bottom border (2px)
- [ ] Bottom border brightens to solid white on focus/hover
- [ ] Large magnifying glass icon (50×50) on the left
- [ ] Montserrat font family (weight 500)
- [ ] Responsive: shrinks on mobile (50px height, smaller icon)
- [ ] No border, no shadow on input (clean minimal style)
- [ ] Component structure: `src/components/SearchInput.tsx` (or similar)
- [ ] App.tsx composes the template section(s)
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `searchglow.free.componentdock.com`
