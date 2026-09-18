# Template: Lumiere (Creative / Portfolio)

## Purpose

Recreation of the ColorLib **Rea** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **Source**: https://colorlib.com/wp/template/rea/
- **Preview**: https://preview.colorlib.com/theme/rea/
- **Package**: `@free-react-templates/lumiere`
- **Surge URL**: https://lumiere.free.componentdock.com
- **Category**: Creative — portfolio / resource showcase

A minimalist creative portfolio template with an animated headline hero,
masonry image grid with hover overlays, category tags, like/heart counts,
and a clean three-column footer.

## Design tokens

Extracted from the live preview CSS (`style.css`, `common.css`).

| Token              | Value                  | Notes                                  |
| ------------------ | ---------------------- | -------------------------------------- |
| Brand color        | `#f271ab`              | Pink/rose — used for highlights, hearts, selection, links |
| Text primary       | `#2f2f2f`              | Dark charcoal                          |
| Text secondary     | `#7e7e7e`              | Footer text, muted elements            |
| Text light         | `#a5a5a5`              | Like count secondary                   |
| Background         | `#ffffff`              | Page and content card backgrounds      |
| Blog background   | `#F5F5F5`              | Light gray behind the grid             |
| Image overlay      | `rgba(22,31,50, 0.5)`  | Hover overlay on portfolio items       |
| Font family        | `Lato`                 | Weights: 300 (light), 400 (regular), 700 (bold) |
| Border radius      | `2px`                  | Subtle rounding on cards               |
| Content max-width  | `1170px`               | Centered container                     |
| Header height      | auto, padding-top 80px | Logo + animated headline               |
| Card padding       | `25px`                 | Inside entry-content                   |
| Footer padding     | `60px` top, `50px` bottom | Three-column layout                |

## Visual design notes (from screenshot)

- **Hero/header**: White background. Stylized pink "R" logo (left) + inline text
  "pixel precise [animated-word] to suit all your needs." The animated word
  cycles through "web resources", "psd files", "mockups" with a pink highlight
  background (typewriter effect). Hamburger menu toggle in top-right (3 black
  bars of decreasing width).
- **Content grid**: Light gray `#F5F5F5` background. Masonry/isotope layout with
  varying column widths (`p_one`, `p_one_half`, `p_one_fourth`). Each item has:
  - Thumbnail image with hover overlay (dark semi-transparent) showing view/download counts
  - White content card below with: uppercase category tag (spaced letters),
    article title, and a heart/like icon with count (absolute positioned bottom-right)
- **Load-more**: Circular arrow icon centered below the grid.
- **Footer**: Three columns — (1) categories list, (2) navigation links
  (About, Features, Contact), (3) social icons (Twitter, Behance, Dribbble,
  Facebook, RSS) + copyright line. Muted gray text.

## Gherkin requirements

```gherkin
Feature: Lumiere — Creative portfolio template

  Background:
    Given the Lumiere app is loaded at the root URL

  Scenario: Page loads with header section
    Then the header contains a logo image
    And the header displays the animated headline "pixel precise web resources to suit all your needs."
    And a hamburger menu toggle button is visible in the top-right

  Scenario: Animated headline cycles words
    Given the page has loaded
    When 3 seconds pass
    Then the highlighted word changes from "web resources" to "psd files"
    When 3 more seconds pass
    Then the highlighted word changes to "mockups"
    And the cycle repeats back to "web resources"

  Scenario: Hamburger menu opens full-screen overlay
    Given the hamburger toggle is visible
    When the user clicks the hamburger toggle
    Then a full-screen white overlay appears
    And navigation links "Home", "About", "Contact", "Features" are shown
    And social media icons (Twitter, Behance, Dribbble, Facebook, RSS) are shown
    When the user clicks the toggle again
    Then the overlay closes

  Scenario: Portfolio grid displays items
    Then a masonry grid of portfolio items is visible
    And each item shows a thumbnail image
    And each item shows a category label in uppercase with letter-spacing
    And each item shows an article title
    And each item shows a heart/like icon with a count

  Scenario: Portfolio item hover overlay
    Given a portfolio grid item is displayed
    When the user hovers over the item image
    Then a dark semi-transparent overlay appears
    And view count and download count are displayed on the overlay

  Scenario: Load-more button
    Then a load-more arrow button is centered below the grid

  Scenario: Footer content
    Then the footer displays three columns
    And column 1 shows a categories list (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
    And column 2 shows navigation links (About, Features, Contact)
    And column 3 shows social icons and a copyright notice
    And the footer links to Component Dock

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then the portfolio grid items stack in a single column
    And the header layout adjusts for mobile
    And the footer columns stack vertically
```

## Verification checklist

- [ ] Header: logo + animated typewriter headline + hamburger toggle
- [ ] Animated headline cycles through words with pink highlight
- [ ] Hamburger menu opens full-screen overlay with nav + social links
- [ ] Portfolio masonry grid with varying column widths
- [ ] Each portfolio item: image + hover overlay + category tag + title + heart/like
- [ ] Hover overlay shows view/download counts with dark semi-transparent bg
- [ ] Load-more arrow centered below grid
- [ ] Footer: three columns (categories, nav, social + copyright)
- [ ] Footer links to Component Dock
- [ ] Design tokens match: brand #f271ab, font Lato, border-radius 2px, bg #F5F5F5
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `lumiere.free.componentdock.com`
- [ ] `homepage` in package.json is `https://lumiere.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/`
