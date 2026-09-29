# Template: Searchbloom (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 15** — a minimal, search-focused template with a toggleable search overlay, clean navbar, and empty content area. Designed as a standalone search landing page or a searchable site shell.

- **Source:** [ColorLib Search Form Bar 15](https://colorlib.com/wp/template/search-form-bar-15/)
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-15/ (404 — unreachable at time of prep; screenshot used as sole reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-15.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Extracted from screenshot analysis (preview DOM unreachable).

| Token | Value | Notes |
| --- | --- | --- |
| **Brand color** | `#4A7DFA` | Blue — used on "Brand" text, nav links, search button |
| **Button background** | `#4A7DFA` | Solid blue pill button, white text |
| **Button radius** | `rounded-full` | Fully rounded / pill-shaped |
| **Body background** | `#FFFFFF` | Clean white |
| **Search bar background** | `#F5F5F5` or `#FAFAFA` | Light gray strip behind search input |
| **Text color** | `#333333` | Dark gray for body text |
| **Muted text** | `#999999` | Placeholder / helper text |
| **Font family** | `"Inter", "Roboto", sans-serif` | Clean sans-serif from screenshot |
| **Navbar** | White background, horizontal flex, logo left, links + icon right |
| **Search input** | White bg, rounded corners, placeholder "Search..." |
| **Search button** | Blue (#4A7DFA) pill, white "Search" label, right of input |
| **Search overlay** | Slides down from top, covers navbar area, has close "×" icon |

## Gherkin requirements

### Feature: Search Form Bar template renders correctly

#### Scenario: Page loads with navbar visible
  Given the user opens the Searchbloom page
  Then the navbar is visible at the top
  And the brand name "Brand" appears on the left in blue (#4A7DFA)
  And navigation links "Home", "About", "Contact" appear on the right
  And a search icon (magnifying glass) appears on the far right of the navbar

#### Scenario: Clicking search icon opens search overlay
  Given the user is on the Searchbloom page
  When the user clicks the search icon in the navbar
  Then a search overlay slides down from the top
  And the overlay contains a search input with placeholder "Search..."
  And the overlay contains a blue (#4A7DFA) "Search" pill button
  And a close (×) button appears on the right side of the overlay

#### Scenario: Search overlay is dismissed
  Given the search overlay is open
  When the user clicks the close (×) button
  Then the search overlay slides up and disappears
  And the navbar is fully visible again

#### Scenario: Search input accepts text
  Given the search overlay is open
  When the user types "react templates" into the search input
  Then the input displays "react templates"
  And the search button remains enabled

#### Scenario: Navbar links are visible and styled
  Given the user opens the Searchbloom page
  Then each nav link ("Home", "About", "Contact") is styled in blue (#4A7DFA)
  And the links have no underline by default
  And the brand text is bold or semi-bold

#### Scenario: Page body below navbar is clean
  Given the user opens the Searchbloom page
  Then the content area below the navbar is white (#FFFFFF)
  And placeholder/instructional text is centered in muted gray (#999999)

#### Scenario: Responsive layout — mobile
  Given the user opens the Searchbloom page on a 375px viewport
  Then the navbar collapses to a hamburger menu or simplified layout
  And the search overlay still opens and functions correctly

#### Scenario: Accessibility
  Given the user opens the Searchbloom page
  Then the search input has an accessible label or placeholder
  And the search button has an aria-label
  And the close button has an aria-label
  And all interactive elements are keyboard-focusable

## Verification checklist

- [ ] Navbar renders with brand, links, and search icon
- [ ] Search overlay opens on search icon click
- [ ] Search overlay closes on × click
- [ ] Search input is functional and accepts text
- [ ] Brand color (#4A7DFA) applied to brand, links, and search button
- [ ] Button is pill-shaped (rounded-full)
- [ ] Clean white body background
- [ ] Responsive: hamburger/menu on mobile
- [ ] Keyboard accessible
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
