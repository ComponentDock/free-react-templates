# Template: Querygate (Search Form Bar)

## Purpose

Querygate is a single-page search-form hero in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib Search
1" free template (source: https://colorlib.com/wp/template/colorlib-search-1/),
built under a DIFFERENT name (**Querygate**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based search form landing page: a full-viewport
hero section with a scenic harbor/cityscape background image, a large white
heading "Discover the Amazing City", and a dark semi-transparent search bar
overlay containing two text inputs ("What are you looking for?" and
"location") plus a blue "Search" button. The design is minimal and clean —
a single-section hero with no additional content sections, footer, or
navigation visible in the screenshot.

**Preview URL (UNREACHABLE):** `https://preview.colorlib.com/theme/colorlib-search-1/`
returns 404. Falling back to the screenshot as sole reference (verified
2026-09-28).

**WHAT MAKES QUERYGATE DISTINCT (signature behaviors):**

1. **Full-viewport scenic hero with dark overlay.** A harbor/cityscape photo
   fills the entire viewport; a dark semi-transparent overlay (`rgba(0,0,0,0.5)`
   approx) sits behind the heading and search bar to ensure readability. The
   heading is large, white, centered, bold.

2. **Two-field inline search bar.** The search form is a horizontal bar
   (dark background, semi-transparent) with two input fields side by side
   and a blue "Search" button on the right. Fields: "What are you looking
   for?" (keyword query) and "location" (place/area). The inputs have white
   backgrounds, subtle borders, and placeholder text.

3. **Single-section design.** Unlike most ColorLib templates which have
   multiple sections (hero + features + gallery + newsletter + footer),
   Search 1 is JUST the hero with the search bar — no navigation, no
   additional sections, no footer visible in the reference screenshot. This
   makes it the simplest kind of search-form template.

## Design tokens (screenshot reference — preview unreachable)

| Token         | Value                                    | Use                                                     |
| ------------- | ---------------------------------------- | ------------------------------------------------------- |
| Page bg       | Scenic photo (harbor/cityscape)          | Full-viewport background image, covers entire hero      |
| Overlay       | `rgba(0,0,0,0.4–0.5)` dark semi-transparent | Sits between bg image and text/form content           |
| Heading       | White `#ffffff`, large (~48–56px), bold | Centered, uppercase or title-case "Discover the Amazing City" |
| Search bar bg | `rgba(0,0,0,0.6)` dark semi-transparent | Horizontal bar container holding inputs + button       |
| Input bg      | `#ffffff` white                         | Both input fields have white backgrounds               |
| Input text    | `#333` or `#666` grey                   | Placeholder text color                                 |
| Input border  | `#ddd` light grey                       | Subtle borders on input fields                         |
| Button bg     | `#4a7cda` or `#5b9bd5` blue             | "Search" button, slightly rounded corners (4–6px)      |
| Button text   | `#ffffff` white                          | Button label                                           |
| Button radius | 4–6px                                    | Slightly rounded corners on the Search button          |
| Font          | System/Bootstrap default (sans-serif)    | Likely 'Open Sans' or 'Poppins' — use system sans-serif |
| Search bar radius | ~4px or 0                             | Minimal rounding on the search bar container           |

**Note:** These tokens are derived from the screenshot only (preview
unreachable). Implementer should match the visual proportions and colors
as closely as possible from the reference screenshot.

## Gherkin requirements

### Feature: Querygate — Search Form Hero

  Scenario: Page loads with full-viewport hero
    Given the user opens the Querygate page
    Then a full-viewport hero section is visible
    And a scenic background image fills the hero
    And a dark overlay is visible over the background
    And the heading "Discover the Amazing City" is displayed in white

  Scenario: Search bar displays two input fields and a button
    Given the user views the hero section
    Then a search bar with dark semi-transparent background is visible
    And a text input with placeholder "What are you looking for?" is shown
    And a text input with placeholder "location" is shown
    And a blue "Search" button is shown to the right of the inputs

  Scenario: Search form accepts user input
    Given the user focuses the keyword input
    When the user types "coffee shops"
    Then the keyword input contains "coffee shops"
    Given the user focuses the location input
    When the user types "New York"
    Then the location input contains "New York"

  Scenario: Search button is clickable
    Given the user has filled in the search fields
    When the user clicks the "Search" button
    Then the form does not navigate away (SPA behavior)
    And the button responds to the click (visual feedback)

  Scenario: Responsive layout on mobile
    Given the user opens the page on a 375px viewport
    Then the hero still fills the viewport
    And the search bar stacks vertically or adjusts to fit
    And the heading text scales appropriately
    And the inputs and button are usable on touch

  Scenario: Footer links to Component Dock
    Given the user scrolls to the bottom of the page
    Then a footer section is visible
    And the footer contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] Full-viewport hero with scenic background image (picsum placeholder)
- [ ] Dark semi-transparent overlay for text readability
- [ ] Large white heading "Discover the Amazing City"
- [ ] Dark semi-transparent search bar container
- [ ] Two input fields with correct placeholders
- [ ] Blue "Search" button with white text
- [ ] Responsive layout (stacked on mobile)
- [ ] Component Dock footer link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `npm run verify:app -- querygate` passes (typecheck + lint + 100% coverage + build)
- [ ] `public/CNAME` = `querygate.free.componentdock.com`
- [ ] `homepage` = `https://querygate.free.componentdock.com`
