# Template: Findspot (Search Form)

## Purpose

Recreation of ColorLib "Search Form 23" — a minimal single-page search form
template. The original is a full-viewport landing page centered around a single
search input with a background image.

- **Source template:** ColorLib Search Form 23
- **ColorLib slug:** `colorlib-search-23`
- **ColorLib URL:** https://colorlib.com/wp/template/colorlib-search-23/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-23/ (404 — unreachable at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-23.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from screenshot analysis (preview unreachable):

| Token | Value | Notes |
|-------|-------|-------|
| Page background | `#ffffff` (white) | Full-viewport white page |
| Search bar background | `~#e8f0ea` (light sage green) | Pill-shaped container |
| Search button background | `~#5cb85c` (green) | Right side of search bar, rounded right end |
| Search button text | `#ffffff` (white) | "SEARCH" label, uppercase |
| Search icon | `~#666666` (gray) | Magnifying glass, left of input |
| Placeholder text | `~#999999` (gray) | "What are you looking for?" |
| Hint text | `~#aaaaaa` (light gray) | "ex. Game, Music, Video, Photography" below bar |
| Font family | System sans-serif | Clean, modern feel |
| Search bar shape | Pill / capsule | Large border-radius (~24px) |
| Background image | Dog photo (bottom-right) | Full-viewport, overlaid on white; replace with picsum placeholder |
| Search bar position | Centered, upper-third | Horizontally centered, vertically in upper 30-40% |

## Gherkin requirements

### Feature: Findspot search form page

#### Scenario: Page renders with full-viewport layout
  Given the user loads the Findspot page
  Then the page fills the full viewport
  And the background is white
  And a background image covers the lower-right portion of the page

#### Scenario: Search bar is centered and visible
  Given the user loads the Findspot page
  Then a search bar is horizontally centered
  And the search bar is positioned in the upper third of the page
  And the search bar has a pill/capsule shape with rounded corners
  And the search bar background is light sage green

#### Scenario: Search bar contains icon, input, and button
  Given the user loads the Findspot page
  Then a magnifying glass icon appears on the left of the search bar
  And a text input shows placeholder "What are you looking for?"
  And a green "SEARCH" button appears on the right of the search bar

#### Scenario: Hint text is displayed below the search bar
  Given the user loads the Findspot page
  Then hint text "ex. Game, Music, Video, Photography" appears below the search bar
  And the hint text is in a light gray color

#### Scenario: User can type in the search input
  Given the user loads the Findspot page
  When the user clicks the search input
  And types "photography"
  Then the input value shows "photography"

#### Scenario: Search button is clickable
  Given the user loads the Findspot page
  When the user clicks the SEARCH button
  Then the button responds to the click (no navigation, form submission handler)

#### Scenario: Responsive layout on mobile
  Given the user loads the Findspot page on a 375px wide viewport
  Then the search bar is still centered
  And the search bar spans most of the viewport width
  And the background image adjusts to the viewport

#### Scenario: Accessibility basics
  Given the user loads the Findspot page
  Then the search input has an associated label or aria-label
  And the search button has accessible text
  And the page has a proper document title

## Verification checklist

- [ ] Page renders full-viewport with white background
- [ ] Background image (dog/photo placeholder) covers lower-right
- [ ] Search bar is centered, pill-shaped, light green background
- [ ] Magnifying glass icon on left of search bar
- [ ] Placeholder text "What are you looking for?" in input
- [ ] Green "SEARCH" button on right
- [ ] Hint text "ex. Game, Music, Video, Photography" below bar
- [ ] Responsive on mobile (375px)
- [ ] Accessible: label/aria-label on input, button text
- [ ] 100% test coverage
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] CNAME file contains findspot.free.componentdock.com
- [ ] Homepage in package.json set correctly
