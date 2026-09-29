# Template: Searchveil (Fullscreen Search Overlay)

## Purpose

Recreation of ColorLib **Search Form Bar 16** — a fullscreen/viewport-height search overlay snippet. When toggled, it covers the entire viewport with a clean, centered search input and minimal chrome. Designed as a modal search experience.

- **Source:** [ColorLib Search Form Bar 16](https://colorlib.com/wp/template/search-form-bar-16/)
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-16/ (404 — unreachable at time of prep; screenshot used as sole reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-16.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Extracted from screenshot analysis (preview DOM unreachable).

| Token | Value | Notes |
| --- | --- | --- |
| **Overlay background** | `#FFFFFF` | Solid white, fullscreen |
| **Text color (heading)** | `#AAAAAA` | Light gray for "PRESS [ESC] TO CLOSE" |
| **Input text color** | `#333333` | Dark gray for typed text |
| **Input placeholder** | `#999999` | Muted gray for "Type here to search" |
| **Input border** | `#E0E0E0` | Light gray underline, full width |
| **Close button color** | `#333333` | Dark × icon, top-right corner |
| **Font family** | `"Inter", "Roboto", sans-serif` | Clean sans-serif |
| **Close text** | uppercase, letter-spacing | "PRESS [ESC] TO CLOSE" in caps |
| **Layout** | Centered vertically + horizontally | Input centered in viewport |
| **Input style** | Underline only (no box) | Bottom border, no background/shadow |
| **Animation** | Fade-in or slide-up on open | Smooth transition |

## Gherkin requirements

### Feature: Fullscreen search overlay renders correctly

#### Scenario: Search overlay opens fullscreen
  Given the user triggers the search overlay
  Then a fullscreen overlay covers the entire viewport
  And the overlay background is white (#FFFFFF)
  And a close (×) button appears in the top-right corner

#### Scenario: Heading text is displayed
  Given the search overlay is open
  Then the text "PRESS [ESC] TO CLOSE" appears centered near the top
  And the text is uppercase with letter-spacing
  And the text color is light gray (#AAAAAA)

#### Scenario: Search input is centered and styled
  Given the search overlay is open
  Then a search input appears centered in the viewport
  And the input has placeholder text "Type here to search"
  And the input has a full-width underline border (#E0E0E0)
  And the input has no background or box shadow

#### Scenario: Search input accepts text
  Given the search overlay is open
  When the user types "react components" into the search input
  Then the input displays "react components"

#### Scenario: Overlay is dismissed via close button
  Given the search overlay is open
  When the user clicks the close (×) button
  Then the overlay closes/fades out

#### Scenario: Overlay is dismissed via Escape key
  Given the search overlay is open
  When the user presses the Escape key
  Then the overlay closes/fades out

#### Scenario: Overlay is dismissed via clicking outside input
  Given the search overlay is open
  When the user clicks on the overlay background (not the input)
  Then the overlay closes/fades out

#### Scenario: Responsive layout — mobile
  Given the user opens the search overlay on a 375px viewport
  Then the overlay still covers the full viewport
  And the input remains centered and usable
  And the close button remains accessible

#### Scenario: Accessibility
  Given the search overlay is open
  Then the search input has an accessible label or placeholder
  And the close button has an aria-label ("Close search")
  And the overlay has role="dialog" or equivalent
  And focus is trapped within the overlay
  And pressing Escape closes the overlay

## Verification checklist

- [ ] Overlay opens fullscreen on trigger
- [ ] "PRESS [ESC] TO CLOSE" text displayed uppercase, gray
- [ ] Search input centered with underline border
- [ ] Input accepts text
- [ ] Close button (×) visible top-right
- [ ] Escape key closes overlay
- [ ] Click outside closes overlay
- [ ] Smooth open/close animation
- [ ] Responsive on mobile
- [ ] Keyboard accessible, focus trapped
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
