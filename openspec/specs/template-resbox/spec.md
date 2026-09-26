# Template: Resbox (Resource Blog / Portfolio Gallery)

## Purpose

Recreation of ColorLib **Rea** — a resource-sharing blog/portfolio template with
masonry grid layout, animated headline, category system, and heart/like
interaction on each item.

- **Source:** https://colorlib.com/wp/template/rea/
- **Preview:** https://preview.colorlib.com/theme/rea/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/rea-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Blog / Resource Portfolio

## Design Tokens (extracted from preview)

| Token            | Value                         | Notes                                  |
| ---------------- | ----------------------------- | -------------------------------------- |
| Brand color      | `#f271ab` (pink)              | Accent, buttons, links, active states  |
| Text primary     | `#2f2f2f` (dark gray)         | Body text                              |
| Text secondary   | `#a5a5a5` (medium gray)       | Category labels, metadata              |
| Footer text      | `#7e7e7e` (gray)              | Footer copyright, links                |
| Background main  | `#ffffff` (white)             | Header, blog grid, footer              |
| Background alt   | `#F5F5F5` (off-white)         | Alternate section backgrounds          |
| Image overlay    | `rgba(22,31,50, 0.5)`        | Dark blue-black overlay on hover       |
| Font family      | `Lato, sans-serif`            | Weights: 300, 400, 700                 |
| Border radius    | `2px`                         | Very subtle rounding on cards          |
| Grid max width   | `1200px`                      | Content container                      |

## Visual Design Notes

- **Layout:** Full-width white background. Centered content at 1200px max-width.
- **Navigation:** Top menu bar with logo left, nav links (Home, About, Contact,
  Features) right-aligned, hamburger toggle for mobile. Social icons in menu.
- **Search:** Full-width search input below nav, placeholder "search anything &
  hit enter", large bold placeholder text (35px).
- **Hero/Header:** Animated rotating headline — "pixel precise / web resources /
  psd files / mockups / to suit all your needs." Uses animated headline effect
  (typewriter/rotate). Text is light weight (300), 28px.
- **Blog Grid:** Masonry layout with 3 item sizes:
  - Full width (1200px) — large featured items
  - Half width (600px) — standard items
  - Quarter width (300px) — small items
  Each item has: image, heart/like icon (bottom-right), category label (uppercase,
  letter-spaced, gray), title, download count. Image overlay on hover with dark
  blue-black tint.
- **Categories:** Sidebar/footer section with category list: Branding, Fonts, Icons,
  Misc, Mockup, Play, Vectors, Video.
- **Footer:** White background, centered. Social links, nav links (About, Features,
  Contact), copyright line with Colorlib credit.
- **Color scheme:** Predominantly white with pink (#f271ab) accents. Clean,
  minimal aesthetic with heavy use of whitespace.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Resbox Navbar

  Scenario: Navigation links are visible
    Given I visit the Resbox homepage
    Then I see navigation links for Home, About, Contact, and Features

  Scenario: Logo links to homepage
    Given I visit the Resbox homepage
    When I click the logo
    Then I am taken to the homepage

  Scenario: Mobile hamburger menu toggles
    Given I visit the Resbox homepage on a mobile viewport
    When I click the hamburger menu icon
    Then the navigation menu expands/collapses
```

### Search Bar

```gherkin
Feature: Resbox Search

  Scenario: Search input is displayed
    Given I visit the Resbox homepage
    Then I see a search input with placeholder "search anything & hit enter"

  Scenario: Search input accepts text
    Given I visit the Resbox homepage
    When I type "mockup" into the search input
    Then the search input contains "mockup"
```

### Hero / Animated Headline

```gherkin
Feature: Resbox Hero Headline

  Scenario: Headline rotates through phrases
    Given I visit the Resbox homepage
    Then I see an animated headline rotating through phrases like
      "pixel precise", "web resources", "psd files", "mockups"
      "to suit all your needs."

  Scenario: Headline is styled correctly
    Given I visit the Resbox homepage
    Then the headline uses Lato font at 28px with font-weight 300
```

### Blog Grid / Masonry Layout

```gherkin
Feature: Resbox Blog Grid

  Scenario: Grid displays resource items
    Given I visit the Resbox homepage
    Then I see a masonry grid of resource items
    And each item has an image, title, category, and download count

  Scenario: Grid items have heart/like interaction
    Given I visit the Resbox homepage
    When I hover over a grid item
    Then a heart/like icon is visible at bottom-right

  Scenario: Grid items show category labels
    Given I visit the Resbox homepage
    Then each grid item displays its category in uppercase gray text

  Scenario: Grid uses masonry sizing
    Given I visit the Resbox homepage
    Then grid items use masonry layout with full-width, half-width, and quarter-width items

  Scenario: Grid item image has hover overlay
    Given I visit the Resbox homepage
    When I hover over a grid item image
    Then a dark blue-black overlay appears on the image
```

### Categories Section

```gherkin
Feature: Resbox Categories

  Scenario: Category list is displayed
    Given I visit the Resbox homepage
    Then I see a categories section with items like Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video

  Scenario: Category items are clickable
    Given I visit the Resbox homepage
    When I click a category name
    Then it functions as a navigation link
```

### Footer

```gherkin
Feature: Resbox Footer

  Scenario: Footer shows navigation links
    Given I visit the Resbox homepage
    Then I see footer links for About, Features, and Contact

  Scenario: Footer shows copyright
    Given I visit the Resbox homepage
    Then I see a copyright line

  Scenario: Footer links to Component Dock
    Given I visit the Resbox homepage
    Then the footer contains a link to https://www.componentdock.com/
```

### Responsive Design

```gherkin
Feature: Resbox Responsive

  Scenario: Mobile layout adjusts grid
    Given I visit the Resbox homepage on a mobile viewport
    Then the masonry grid stacks items vertically

  Scenario: Mobile layout collapses navigation
    Given I visit the Resbox homepage on a mobile viewport
    Then the navigation menu is replaced by a hamburger toggle
```

## Verification Checklist

- [ ] Navbar with 4 links (Home, About, Contact, Features) + logo
- [ ] Search input with placeholder text
- [ ] Animated headline rotating through resource-related phrases
- [ ] Masonry blog grid with 3 item sizes (full, half, quarter)
- [ ] Each grid item: image, category label, title, download count, heart icon
- [ ] Image hover overlay (dark blue-black tint)
- [ ] Categories section with 8 category links
- [ ] Footer with nav links + copyright + Component Dock link
- [ ] Responsive: mobile hamburger, stacked grid
- [ ] Design tokens: pink #f271ab accent, Lato font, 2px radius, white bg
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
