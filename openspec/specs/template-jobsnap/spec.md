# Template: Jobsnap (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 19**
- Source: https://colorlib.com/wp/template/search-form-bar-19/
- Preview: https://preview.colorlib.com/theme/search-form-bar-19/ (unreachable — design from screenshot)
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from screenshot analysis)

| Token | Value |
|-------|-------|
| Primary color | `#4A90E2` (blue — header links, nav, search button) |
| Background | `#FFFFFF` (white — page body, search card) |
| Hero image | Full-width warm-toned photograph (person with hat, neutral/desert tones) |
| Font | System/sans-serif default (no custom font visible) |
| Search button | Solid blue background, white text, rounded corners (border-radius ~4px) |
| Search card | White background, subtle shadow, rounded corners, horizontal layout |
| Header | White background, flex row with brand left, nav right |
| Section background | White/transparent |

## Gherkin Requirements

### Header

```gherkin
Feature: Header

  Scenario: Brand name displayed
    Given the page loads
    Then the header shows "Brand" as the logo text in blue

  Scenario: Navigation links
    Given the page loads
    Then the header shows links: "Home", "About", "Contact"
    And all nav links are styled in blue
```

### Hero Section

```gherkin
Feature: Hero Section

  Scenario: Background image renders
    Given the page loads
    Then a full-width hero section displays a background image
    And the hero fills the viewport width

  Scenario: Hero has no text overlay
    Given the page loads
    Then the hero section has no heading or paragraph text
```

### Search Form Bar

```gherkin
Feature: Search Form Bar

  Scenario: Search bar positioned over hero
    Given the page loads
    Then a white search card overlays the bottom of the hero section
    And the card is horizontally centered

  Scenario: Text input present
    Given the page loads
    Then the search card contains a text input with placeholder "Search Jobs..."
    And the input has a magnifying glass icon on the left

  Scenario: Categories dropdown present
    Given the page loads
    Then the search card contains a "Categories" dropdown select

  Scenario: Search button present
    Given the page loads
    Then the search card contains a blue "Search" button
    And the button has white text and rounded corners

  Scenario: Horizontal layout
    Given the page loads
    Then the search form elements are laid out in a horizontal row
    And the text input takes the majority of the width
    And the dropdown and button sit to the right
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer with Component Dock link
    Given the page loads
    Then a footer is present at the bottom
    And the footer links to "https://www.componentdock.com/"
```

## Verification Checklist

- [ ] Header renders with brand text and nav links
- [ ] Hero section displays full-width background image
- [ ] Search form bar overlays the hero bottom
- [ ] Text input, categories dropdown, and search button are all present
- [ ] Search form uses horizontal layout matching the original
- [ ] Brand colors match the original (blue primary, white background)
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] `public/CNAME` contains `jobsnap.free.componentdock.com`
- [ ] `package.json` homepage is `https://jobsnap.free.componentdock.com`
- [ ] No asset copying — placeholder images via picsum.photos
