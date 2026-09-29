# Template: SearchGate (Search Form Component)

## Purpose

Recreation of ColorLib **Search Form Bar 06** — a standalone animated search form bar with a circular search icon button that expands the input on hover/focus.

- **Source slug:** `search-form-bar-06`
- **Preview URL:** https://preview.colorlib.com/theme/search-form-bar-06/ (404; bootstrap variant available at https://preview.colorlib.com/theme/bootstrap/search-form-bar-06/)
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-06.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Note:** Primary reference extracted from bootstrap preview CSS + screenshot analysis.

## Design Tokens

Extracted from the preview CSS (`css/style.css` at bootstrap variant):

| Token | Value | Notes |
|-------|-------|-------|
| **Brand color** | `#76a21e` (olive green) | Used on `.search-icon-btn` background and border |
| **Brand hover** | `#6b9319` (darker olive) | Button hover state |
| **Background** | `#fafafa` (off-white) | Page/body background |
| **Input background** | `#ffffff` (white) | Search input field |
| **Text color** | `gray` (body), `#000` (headings) | Body text gray, headings black |
| **Placeholder color** | `rgba(0,0,0,0.7)` | Dark semi-transparent placeholder |
| **Font family** | `"Poppins", Arial, sans-serif` | Google Fonts — Poppins |
| **Font size** | `16px` body, `28px` heading | Body line-height 1.8 |
| **Heading weight** | `400` (normal) | Heading is light-weight |
| **Button radius** | `50%` (circle) | 60×60px circular button |
| **Input border-radius** | `40px` (pill shape) | Rounded pill input |
| **Input width (rest)** | `150px` | Collapsed state |
| **Input width (expanded)** | `300px` | On hover/focus container |
| **Input height** | `50px` | Consistent with button |
| **Button size** | `60px × 60px` | Circle diameter |
| **Shadow** | `0px 5px 20px -12px rgba(0,0,0,0.36)` | On button; `0.34` on input |
| **Icon color** | `#ffffff` (white) | Search icon inside button |
| **Section padding** | `7em 0` | Vertical spacing around section |
| **Transition** | `0.3s` ease | On hover width expansion |

## Component Structure

The template is a single centered search form component:

1. **Page title** — "Search Form/Bar #06" (Poppins, 28px, normal weight, black, centered)
2. **Search form container** — centered, flex, relative positioned
   - **Circular search button** (z-index: 2) — 60×60px olive green (#76a21e) circle with white magnifying glass icon (lucide-react Search icon)
   - **Search input** (z-index: 1, absolutely positioned) — starts at 150px wide, pill-shaped (border-radius 40px), white background, left-padded 70px to clear the button
3. **Animation** — on hover/focus of the container, the input expands from 150px to 300px width with a 0.3s transition, and padding adjusts

The form uses no framework (self-contained CSS), no category dropdown, and no additional sections. It is a minimal single-component template.

## Gherkin Scenarios

```gherkin
Feature: SearchGate animated search form

  Background:
    Given the SearchGate component is rendered on the page

  Scenario: renders the search bar with all elements
    Then a heading "SearchGate" should be visible above the search bar
    And a circular search icon button should be visible
    And a search input should be visible with placeholder "Search..."

  Scenario: search input starts in collapsed state
    Then the search input should have a width near 150px
    And the search icon button should be a 60×60px circle

  Scenario: hover expands the search input
    Given the search container is hovered
    Then the search input width should expand toward 300px
    And the expansion should animate over approximately 0.3s

  Scenario: focus expands the search input
    When the user clicks the search input
    Then the search input width should expand toward 300px

  Scenario: typing in the search input
    When the user clicks the search input
    And the user types "react templates"
    Then the search input should contain "react templates"

  Scenario: submitting the search form
    Given the user has typed "dashboard" in the search input
    When the user presses Enter
    Then the form should submit with the query "dashboard"

  Scenario: submitting with empty search
    When the user presses Enter without typing
    Then the form should not submit

  Scenario: button is visually a circle
    Then the search icon button should have border-radius 50%
    And the search icon button should have background color #76a21e

  Scenario: input has pill shape
    Then the search input should have border-radius near 40px

  Scenario: respects prefers-reduced-motion
    Given the user prefers reduced motion
    When the user hovers over the search container
    Then the input width change should be instant (no transition)
```

## Verification Checklist

- [ ] Circular olive-green search button renders at 60×60px
- [ ] Search input starts at ~150px width with pill shape
- [ ] Hover/focus expands input to ~300px with 0.3s transition
- [ ] Poppins font loads from Google Fonts
- [ ] Background is #fafafa, input is white
- [ ] Shadow matches original (subtle, spread-limited)
- [ ] Form submits on Enter key
- [ ] Reduced motion preference disables transition
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Public/CNAME contains searchgate.free.componentdock.com
- [ ] Package name is @free-react-templates/searchgate
