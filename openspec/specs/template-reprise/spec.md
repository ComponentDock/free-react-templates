# Template: Reprise (Portfolio Gallery)

## Purpose

Recreation of ColorLib **Reopen** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio gallery.

- **ColorLib source:** https://colorlib.com/wp/template/reopen/
- **Live preview analyzed:** https://preview.colorlib.com/theme/reopen/
- **New name:** `reprise` (apps/reprise, @free-react-templates/reprise)
- **Surge URL:** https://reprise.free.componentdock.com
- **Package name:** @free-react-templates/reprise

## Design tokens (from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (accent) | `#f277ae` | Pink/rose — used on links, buttons, heart icon |
| Body background | `#ECECEC` | Light warm gray |
| Content wrapper background | `#ffffff` | White card wrapping all content |
| Body text color | `#222222` | Dark charcoal |
| Link hover color | `#f277ae` | Same as brand |
| Page description text | `#7e7e7e` | Medium gray subtitle |
| Footer text | `#7e7e7e` | Matches page description |
| Portfolio overlay text | `#6f6f6f` / `#7e7e7e` | Category + type labels |
| Toggle hamburger lines | `#c2c2c2` | Inactive, `#000` when menu open |
| Menu overlay border | `#cccccc` | 30px solid border on fullscreen menu |
| Load more button bg | `#eeeeee` | Circle, border-radius: 30px |
| Button style | 1px solid `#f277ae`, border-radius 50px | Hover: fill `#f277ae`, text white |

### Fonts

| Role | Family | Weights | Source |
|------|--------|---------|--------|
| Body text | Roboto | 300, 400, 700, 900 | Google Fonts via CDN |
| Headings (nav, portfolio) | Montserrat | 400, 700 | Google Fonts via CDN |
| Accents | PT Serif | 400 | Google Fonts via CDN |

- Body: `font-family: 'Roboto', sans-serif; font-size: 24px; line-height: 43px; font-weight: 300`
- h1: 38px/38px; h2: 34px/34px; h3: 32px/32px
- Page description: 16px, `#7e7e7e`

### Layout

- Max content width: 1170px (header, hero, grid); 970px (footer)
- Body wrapper: 30px margin on all sides, white background
- Hero: centered logo (80px top/bottom padding) + title + subtitle
- Portfolio grid: Masonry/Isotope-style 3-column (items ~400px), with `.p_one_third` (1/3) and `.p_two_third` (2/3) width classes
- Grid items have image + absolute-positioned overlay text (category + type) at top-left
- Load more: centered arrow icon in circular `#eeeeee` background

## Sections (order in HTML)

1. **Navbar/Logo** — centered logo, hamburger menu toggle (slides full-screen overlay with nav links)
2. **Hero** — title ("Handpicked design resources crafted with much ♥ and care for every detail") + subtitle ("free downloads only on fridays")
3. **Portfolio Grid** — 3-column masonry grid, 9 items total. Each item: full-bleed image + overlay text (category name + content type: GALLERY/VIDEO/ARTICLE)
4. **Load More** — centered arrow icon (cosmetic, no actual load)
5. **Footer** — copyright line with heart icon + Colorlib link (replaced by Component Dock link) + social icons (Twitter, Behance, Dribbble, Facebook, RSS)

## Gherkin requirements

### Feature: Reprise Portfolio Gallery

```gherkin
Feature: Reprise Portfolio Gallery

  Background:
    Given the user visits the Reprise template page
    Then the page has a white content wrapper with 30px margin on a light gray (#ECECEC) background

  Scenario: Logo and navigation bar
    Given the user sees the header area
    Then there is a centered logo image
    And there is a hamburger menu toggle (3 horizontal lines, #c2c2c2)
    When the user clicks the toggle
    Then a full-screen overlay menu appears with white background and 30px #cccccc border
    And the menu contains links: Home, About, Story, Blog, Contact, More
    And the toggle icon animates to an X when menu is open

  Scenario: Hero section
    Given the user is on the home page
    Then there is a centered title "Handpicked design resources crafted with much ♥ and care for every detail"
    And the heart icon is pink (#f277ae)
    And there is a subtitle "free downloads only on fridays" in gray (#7e7e7e)

  Scenario: Portfolio grid
    Given the user scrolls below the hero
    Then there is a 3-column masonry grid
    And each grid item shows a full-bleed image
    And each grid item has an overlay with category name and content type (GALLERY/VIDEO/ARTICLE)
    And the overlay text is positioned at the top-left with padding

  Scenario: Grid item hover effect
    Given the user hovers over a grid item
    Then the image displays a subtle hover effect
    And the overlay text remains visible

  Scenario: Load more button
    Given the user sees the bottom of the grid
    Then there is a centered arrow icon inside a circular #eeeeee background
    And the arrow is decorative (no pagination action)

  Scenario: Footer
    Given the user scrolls to the bottom
    Then there is a footer with copyright text and a heart icon
    And the attribution links to Component Dock
    And there are social icon links: Twitter, Behance, Dribbble, Facebook, RSS
    And the footer text color is #7e7e7e

  Scenario: Responsive behavior
    Given the viewport is narrow (mobile)
    Then the grid collapses to a single column
    And the logo and title stack vertically
    And the hamburger menu is accessible

  Scenario: Font loading
    Given the page loads
    Then the body text uses Roboto at weight 300
    And headings use Montserrat at weight 700
    And fonts load from Google Fonts CDN

  Scenario: Brand color consistency
    Given any interactive element is visible
    Then link hover states use #f277ae
    And the CTA button has 1px solid #f277ae border with 50px border-radius
    And on hover the button fills with #f277ae and text turns white
```

## Verification checklist

- [ ] Fonts: Roboto (300/400/700/900), Montserrat (400/700), PT Serif (400) loaded via Google Fonts
- [ ] Brand color #f277ae used on links, buttons, heart icon, hover states
- [ ] Body background #ECECEC, wrapper background #fff
- [ ] 3-column masonry grid with image + overlay text cards
- [ ] Grid items show category + content type labels
- [ ] Hamburger menu toggle with animated X state
- [ ] Full-screen overlay menu with #cccccc border
- [ ] Hero with centered title + subtitle
- [ ] Load more decorative arrow in circular gray background
- [ ] Footer with copyright, heart icon, Component Dock link, social icons
- [ ] Responsive: single-column grid on mobile
- [ ] No references to ColorLib in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Package: @free-react-templates/reprise
- [ ] CNAME: reprise.free.componentdock.com
- [ ] Homepage: https://reprise.free.componentdock.com
