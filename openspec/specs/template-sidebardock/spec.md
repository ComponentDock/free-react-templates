# Template: Sidebardock (Sidebar / Journal)

## Purpose

Recreation of the ColorLib **Sidebar V10** template.
- Source: https://colorlib.com/wp/template/colorlib-sidebar-v10/
- Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (404 — unreachable; design derived from screenshot)
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
- Category: Sidebar layout — fixed left sidebar with author portrait, navigation, and social links; scrollable content grid of blog/article cards.

## Design tokens

Extracted from the screenshot (preview was unreachable):

| Token              | Value                                          |
| ------------------ | ---------------------------------------------- |
| Brand color        | `#00b4d8` (cyan-blue, sidebar gradient start)  |
| Brand color 2      | `#7b2ff7` (violet, sidebar gradient end)       |
| Sidebar bg         | Gradient from `#00b4d8` → `#7b2ff7` (top→bottom) |
| Content bg         | `#ffffff` (white)                              |
| Text primary       | `#333333` (dark gray, card titles)             |
| Text secondary     | `#999999` (gray, card dates)                   |
| Text on sidebar    | `#ffffff` (white)                              |
| Social icon bg     | `rgba(255,255,255,0.2)` (semi-transparent white) |
| Social icon border | none (rounded-full)                            |
| Font – heading     | Playfair Display (serif, sidebar title)        |
| Font – body        | Poppins (sans-serif, navigation + card text)   |
| Font – card date   | Poppins 300, `#999`                            |
| Border radius      | 0 (sidebar, cards — flat edges)                |
| Sidebar width      | ~33% (fixed, full height)                      |
| Social icon size   | 40×40px circles                                |
| Card layout        | 2-column grid in content area                   |
| Card gap           | ~30px vertical, ~20px horizontal               |
| Portrait overlay   | Blue gradient overlay on author photo           |

## Section structure

1. **Sidebar** (fixed left, full height)
   - Author portrait image with blue-cyan gradient overlay
   - Site title ("Journal") in serif display font
   - Tagline / description paragraph
   - Navigation links (Latest, Projects, About)
   - Social icon row (Facebook, Twitter, Instagram, Globe/Dribbble, LinkedIn)
2. **Content area** (scrollable, right side)
   - Toggle button (X icon) to show/hide sidebar
   - Article grid: 2 columns of post cards
   - Each card: thumbnail image (circular or rounded), post title, date

## Gherkin scenarios

### Sidebar

```gherkin
Feature: Sidebar component

  Scenario: Sidebar displays author portrait with gradient overlay
    Given the sidebar is visible
    Then the author portrait image is displayed
    And a blue-to-violet gradient overlay covers the portrait

  Scenario: Sidebar displays site title
    Given the sidebar is visible
    Then the title "Journal" is displayed in a large serif font
    And the title text is white

  Scenario: Sidebar displays tagline
    Given the sidebar is visible
    Then a tagline paragraph is displayed below the title
    And the tagline text is white

  Scenario: Sidebar displays navigation links
    Given the sidebar is visible
    Then navigation links for "Latest", "Projects", and "About" are shown
    And the link text is white

  Scenario: Sidebar displays social icons
    Given the sidebar is visible
    Then 5 social icons are displayed in a horizontal row
    And each icon is a circular button with semi-transparent white background
    And the icons represent Facebook, Twitter, Instagram, Dribbble, and LinkedIn
```

### Content area

```gherkin
Feature: Content area

  Scenario: Toggle button controls sidebar visibility
    Given the sidebar is visible
    When the user clicks the toggle button (X)
    Then the sidebar slides out of view
    When the user clicks the toggle button again
    Then the sidebar slides back into view

  Scenario: Article grid displays post cards in 2 columns
    Given the content area is visible
    Then post cards are arranged in a 2-column grid
    And each card contains a thumbnail image
    And each card contains a post title
    And each card contains a posted date

  Scenario: Post cards display correct content
    Given the content area is visible
    Then each card title is displayed in dark text
    And each card date is displayed in gray text
    And each card date reads "Posted: [date]"
```

### Responsive behavior

```gherkin
Feature: Responsive layout

  Scenario: Sidebar is full width on mobile
    Given the viewport is less than 768px wide
    Then the sidebar occupies the full width
    And the content area is hidden or below the sidebar

  Scenario: Content grid collapses to single column on small screens
    Given the viewport is less than 768px wide
    Then the article grid shows 1 column instead of 2
```

## Verification checklist

- [ ] Sidebar gradient matches blue→violet from screenshot
- [ ] Author portrait has gradient overlay effect
- [ ] Title uses serif font (Playfair Display)
- [ ] Navigation links are white and clickable
- [ ] Social icons are circular with semi-transparent bg
- [ ] Toggle button shows/hides sidebar with animation
- [ ] Article grid is 2-column on desktop, 1-column on mobile
- [ ] Cards show thumbnail, title, and date
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
- [ ] Uses lucide-react for social icons
- [ ] 100% test coverage
- [ ] Spec + docs committed and pushed to main
