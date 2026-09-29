# Template: SeekLume (Full-Screen Overlay Search)

## Purpose

SeekLume is a full-page search overlay snippet in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Search Form/Bar
V16" free snippet (source: https://colorlib.com/wp/template/search-form-bar-16/),
built under a DIFFERENT name (**SeekLume**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a standalone snippet: a full-viewport white overlay triggered
by clicking a search icon in a navigation bar. The overlay covers the entire
page with a solid white background (`#fff`), displays a "PRESS [ESC] TO CLOSE"
note at ~10% from the top (centered, uppercase, 11px, letter-spacing 0.1rem,
color `#b3b3b3`), a close (X) button in the top-right corner (`position:
absolute; top: 20px; right: 20px; font-size: 20px; color: #000`), and a
search input field centered vertically in a 7-column grid. The input has no
border, only a 1px `#ccc` bottom rule (which turns `#000` on focus), 57px
height, `border-radius: 0`, and placeholder "Type here to search". Behind
the overlay sits a sticky navbar (`background: #fff; border-bottom: 1px
solid #dae0e5; box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1)`) with a "Brand"
heading, Home/About/Contact links, and a search icon that toggles the overlay.

**WHAT MAKES SEEKLUME DISTINCT (signature behaviors):**

1. **Full-viewport white overlay, not a dropdown or modal.** The search-wrap
   div is `position: fixed; width: 100%; height: 100vh; background: #fff;
   z-index: 9999; opacity: 0; visibility: hidden`. On activation it becomes
   `opacity: 1; visibility: visible` via a CSS class toggle. This is NOT a
   modal dialog — it has no backdrop, no rounded corners, no card shadow.
   It simply covers everything.

2. **ESC key dismissal.** The overlay listens for the Escape key to close.
   This is a keyboard-first interaction pattern (the close X is secondary).
   The "PRESS [ESC] TO CLOSE" text instructs the user explicitly.

3. **Search input with underline-only styling.** The input is stripped of
   default browser chrome: `border: none; border-bottom: 1px solid #ccc;
   border-radius: 0; height: 57px`. On focus: `border-color: #000` and no
   box-shadow. This is a minimal, editorial search style — no rounded pill,
   no search icon inside the input, no button.

4. **Navbar with search icon toggle.** The navbar is a simple horizontal bar
   with left-aligned "Brand" (h3), right-aligned nav links (Home, About,
   Contact), and a search icon (magnifying glass SVG) that opens the overlay.
   The nav links have `padding: 25px 0; margin-left: 20px` and a 0.3s ease
   transition.

5. **Instructional content area.** Behind the overlay, the page shows a
   centered content section (`padding: 7rem 0`) with a paragraph instructing
   the user to "Please click the search icon toggle button top right" —
   this is the demo state before the overlay is activated.

## Design Tokens

Extracted from the live preview CSS (`css/style.css` at
`https://preview.colorlib.com/theme/bootstrap/search-form-bar-16/`):

| Token              | Value                                                  | Source                         |
| ------------------ | ------------------------------------------------------ | ------------------------------ |
| **Background**     | `#fff` (white)                                         | body, search-wrap, navbar      |
| **Text primary**   | `#212529`                                              | body color                     |
| **Text secondary** | `#757575` (paragraphs), `#b3b3b3` (ESC note)          | p color, .custom-note color    |
| **Placeholder**    | `#6c757d`                                              | ::placeholder                  |
| **Input border**   | `#ccc` default, `#000` on focus                        | border-bottom only             |
| **Navbar border**  | `#dae0e5` (bottom), shadow `0 1px 5px rgba(0,0,0,.1)` | .custom-navbar                 |
| **Link color**     | `#007bff` (default blue), hover `#0056b3`              | a, a:hover                     |
| **Font family**    | `Roboto` (weight 300/400), system sans-serif fallback  | body, @font-face               |
| **Font weights**   | 300 (light paragraphs), 400 (regular body), 500 (headings) | body, h3/h4                |
| **Input height**   | `57px`                                                 | search-wrap input              |
| **Input radius**   | `0` (none — underline-only)                            | search-wrap input              |
| **Close button**   | `20px` font-size, `color: #000`, positioned `top: 20px; right: 20px` | .search-close |
| **ESC note**       | `11px`, uppercase, `letter-spacing: 0.1rem`, centered  | .custom-note                   |
| **Overlay z-index**| `9999`                                                 | .search-wrap                   |
| **Transition**     | `0.3s all ease` (overlay, links, navbar)               | multiple selectors             |

### Color Palette (Tailwind theme tokens)

| Tailwind Token     | Hex       | Usage                        |
| ------------------ | --------- | ---------------------------- |
| `--color-surface`  | `#ffffff` | Page background, overlay     |
| `--color-text`     | `#212529` | Primary text                 |
| `--color-muted`    | `#757575` | Paragraph text               |
| `--color-hint`     | `#b3b3b3` | ESC note text                |
| `--color-border`   | `#ccc`    | Input bottom border          |
| `--color-navbar-border` | `#dae0e5` | Navbar bottom border     |
| `--color-focus`    | `#000`    | Input focus border           |
| `--color-link`     | `#007bff` | Default link blue            |

## Gherkin Requirements

### Background

The page consists of a sticky navbar at the top and a content area below.
The search overlay is hidden by default and activated via the search icon.

### Scenario: Navbar renders with brand and navigation links

```gherkin
Given the page is loaded
When I look at the navbar
Then I should see a "Brand" heading on the left
And I should see "Home", "About", "Contact" links on the right
And I should see a search icon (magnifying glass) in the navbar
```

### Scenario: Navbar is sticky with shadow

```gherkin
Given the page is loaded
When I scroll down
Then the navbar should remain fixed at the top
And the navbar should have a bottom border (#dae0e5)
And the navbar should have a subtle box-shadow
```

### Scenario: Content area shows instruction text

```gherkin
Given the page is loaded
When the search overlay is not active
Then I should see a centered paragraph
And the paragraph should say "Please click the search icon toggle button top right"
```

### Scenario: Clicking search icon opens full-screen overlay

```gherkin
Given the page is loaded
When I click the search icon in the navbar
Then a full-screen white overlay should appear
And the overlay should cover the entire viewport
And I should see "PRESS [ESC] TO CLOSE" text at the top center
And I should see a close (X) button in the top-right corner
And I should see a search input with placeholder "Type here to search"
And the search input should be focused automatically
```

### Scenario: Overlay has correct styling

```gherkin
Given the search overlay is open
When I inspect the overlay
Then the background should be solid white (#ffffff)
And the overlay should fill the full viewport height and width
And the overlay z-index should be above the navbar
And the "PRESS [ESC] TO CLOSE" text should be uppercase, 11px, letter-spacing 0.1rem
And the close button should be positioned at top-right (20px, 20px)
```

### Scenario: Search input has underline-only styling

```gherkin
Given the search overlay is open
When I look at the search input
Then it should have no visible border except a 1px bottom border (#ccc)
And it should have no border-radius (sharp corners)
And it should be 57px tall
And the placeholder text should be "Type here to search"
And the placeholder color should be #6c757d
```

### Scenario: Search input focus changes border color

```gherkin
Given the search overlay is open
When I click into the search input
Then the bottom border should change from #ccc to #000
And there should be no box-shadow on focus
```

### Scenario: ESC key closes the overlay

```gherkin
Given the search overlay is open
When I press the Escape key
Then the overlay should fade out and become hidden
And the navbar should be visible again
And the page content should be accessible
```

### Scenario: Close button closes the overlay

```gherkin
Given the search overlay is open
When I click the X close button
Then the overlay should fade out and become hidden
And the navbar should be visible again
```

### Scenario: Overlay has smooth transition

```gherkin
Given the page is loaded
When I click the search icon to open the overlay
Then the overlay should transition with 0.3s ease
And when I close it, the overlay should transition with 0.3s ease
```

### Scenario: Responsive behavior on mobile

```gherkin
Given the page is loaded on a mobile viewport (< 768px)
When I look at the navbar
Then the "Brand" heading should be centered
And the nav links should still be visible
And the search overlay should still fill the full viewport
```

## Verification Checklist

- [ ] Overlay is full-viewport, white background, z-index 9999
- [ ] Overlay transitions with 0.3s ease (opacity + visibility)
- [ ] "PRESS [ESC] TO CLOSE" text: uppercase, 11px, letter-spacing 0.1rem, color #b3b3b3, centered
- [ ] Close (X) button: top-right, 20px font-size, color #000
- [ ] Search input: no border except 1px bottom (#ccc), no border-radius, 57px height, placeholder "Type here to search"
- [ ] Input focus: border changes to #000, no box-shadow
- [ ] ESC key closes overlay
- [ ] Close button closes overlay
- [ ] Navbar: sticky, white background, bottom border #dae0e5, subtle shadow
- [ ] Navbar: "Brand" heading left, nav links right, search icon toggle
- [ ] Content area: centered instruction paragraph in muted color (#757575)
- [ ] Font: Roboto (300/400 weights), system sans-serif fallback
- [ ] All text matches original colors and sizes
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
