# Template: LookCraft (Photography Portfolio)

## Purpose

Recreation of the ColorLib "Thelook" template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page photography/artist portfolio landing
page.

- Source slug: `thelook`
- Source URL: https://colorlib.com/wp/template/thelook/
- Preview URL: https://preview.colorlib.com/theme/thelook/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thelook-free-template.jpg
- Package: `@free-react-templates/lookcraft`
- Deploy target: `lookcraft.free.componentdock.com`

## Design tokens (from reference CSS analysis)

### Brand colors

| Token | Hex | Usage |
|-------|-----|-------|
| Dark navy | `#081624` | Primary text, button text, dark tones |
| Red accent | `#f44336` | Accent/CTA hover |
| Purple accent | `#673ab7` | Secondary accent |
| Light gray bg | `#f6f7f9` | Blog section background |
| Medium gray | `#5c5c5c` / `#656565` | Secondary text |
| Dark gray | `#222222` | Footer background |
| Body gray | `#333` / `#515151` | Body text |
| Light border | `#c1c1c1` / `#e0e0e0` | Dividers, borders |
| White | `#fff` | Overlays (opacity 0.4), text on dark |

### Typography

| Role | Font | Fallback |
|------|------|----------|
| All text | Lato | sans-serif |

### Shape / spacing

- Button radius: `60px` (pill-shaped)
- Section radius: `0` (sharp edges)
- Buttons: transparent bg, uppercase text, font-weight 700, min-width 167px
- Hero heading: 160px font-size, line-height 0.9
- White overlay on hero images: `opacity: 0.4`

### Section structure (order from reference)

1. **Header** — transparent, logo left, nav right (Home, Gallery, Artists, Shop, News, Contact)
2. **Hero slider** — 3 slides, each with background image + white semi-transparent overlay (`#fff` at 0.4), large heading ("The Look"), exhibition date/artist info, "Read More" CTA (pill button)
3. **Gallery section** — split 2-column layout:
   - Left column: gallery text (quote), 3 gallery items with thumbnails + "View Gallery" buttons
   - Right column: 3 gallery items with thumbnails + "View Gallery" buttons
   - "See All Galleries" CTA at bottom
4. **Blog section** — light gray `#f6f7f9` background, 2-column layout:
   - Left column: section title "Latest from the blog"
   - Right column: 2 blog items (thumbnail + title + date + excerpt)
5. **Footer** — dark `#222222` background, 4-column layout:
   - Logo + description text
   - Useful links
   - Instagram/contact info
   - Copyright bar

## Gherkin requirements

```gherkin
Feature: LookCraft photography portfolio page
  As a visitor to the photography portfolio website
  I want to see a sleek, editorial-style landing page
  So that I can explore galleries and learn about the artist

  Background:
    Given the page is loaded at lookcraft.free.componentdock.com

  Scenario: Transparent header with navigation
    Then the header should display the logo on the left
    And navigation links should include: Home, Gallery, Artists, Shop, News, Contact
    And the header should be transparent over the hero

  Scenario: Hero slider with three slides
    Then a full-width hero slider should be visible
    And there should be 3 slides with background images
    And each slide should have a white semi-transparent overlay
    And each slide should display the heading "The Look"
    And each slide should show exhibition date and artist info
    And each slide should have a "Read More" pill-shaped button
    And dot navigation should be visible for slide switching

  Scenario: Gallery section with split layout
    Then a 2-column gallery layout should be visible
    And the left column should display a gallery quote text
    And 3 gallery items should appear in the left column
    And 3 gallery items should appear in the right column
    And each gallery item should have a thumbnail image
    And each gallery item should have a "View Gallery" button
    And a "See All Galleries" CTA should be at the bottom

  Scenario: Blog section on light background
    Then the blog section should have a light gray (#f6f7f9) background
    And a section title "Latest from the blog" should be visible on the left
    And 2 blog items should appear on the right
    And each blog item should have a thumbnail, title, date, and excerpt

  Scenario: Dark footer with multiple columns
    Then the footer should have a dark (#222222) background
    And it should contain: logo + description, useful links, contact info
    And a copyright bar should be visible at the bottom
    And the footer should link to https://www.componentdock.com/

  Scenario: Pill-shaped buttons throughout
    Then all CTA buttons should have pill shape (border-radius: 60px)
    And buttons should be transparent with uppercase text
    And buttons should have font-weight 700

  Scenario: Mobile responsive
    Given the viewport is 375px wide
    Then a hamburger menu icon should be visible
    And the hero slider should display single slide
    And gallery columns should stack vertically
    And blog columns should stack vertically
    And footer columns should stack vertically

  Scenario: Hero heading scale
    Then the hero heading "The Look" should be displayed at very large scale
    And the heading should use the Lato font family
```

## Verification checklist

- [ ] Header: transparent, sticky, logo + 6 nav links
- [ ] Hero: 3-slide slider with white overlay, large heading, date info, pill CTA, dots
- [ ] Gallery: 2-column split, 6 items total, "View Gallery" buttons, "See All" CTA
- [ ] Blog: light gray bg, 2-column, section title left, 2 blog items right
- [ ] Footer: dark bg, 4-column, Component Dock link, copyright
- [ ] Buttons: pill shape (60px radius), transparent, uppercase
- [ ] Mobile: hamburger, stacked layouts
- [ ] Colors match tokens: #081624 dark, #f44336 red, #673ab7 purple, #f6f7f9 light bg, #222222 footer
- [ ] Font: Lato throughout
- [ ] 100% test coverage (lines, functions, branches, statements)
