# Template: Rayloom (Creative Portfolio & Resource Showcase)

## Purpose

Recreation of ColorLib's **Rea** template (https://colorlib.com/wp/template/rea/).
Live preview: https://preview.colorlib.com/theme/rea/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rea-free-template.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Deployed as `rayloom.free.componentdock.com`.

## Design tokens

| Token               | Value                         | Source           |
|---------------------|-------------------------------|------------------|
| font-family         | Lato, sans-serif              | CSS `body`       |
| font-weight-light   | 300                           | Header title     |
| font-weight-normal  | 400                           | Body text        |
| font-weight-bold    | 700                           | Headings, bold   |
| brand-color         | #f271ab (pink/magenta)        | CSS `a:hover`, `.cd-headline`, buttons, selection |
| body-text           | #2f2f2f (dark gray)           | CSS `body` color |
| body-bg             | #ffffff (white)               | CSS `body` bg    |
| grid-bg             | #F5F5F5 (light gray)          | `.blog-background` |
| footer-text         | #7e7e7e (medium gray)         | `.footer` color  |
| footer-bg           | #ffffff (white)               | `.footer` bg     |
| link-color          | #2f2f2f default, #f271ab hover | `body a`         |
| selection-bg        | #f271ab                       | `::selection`    |
| selection-color     | #ffffff                       | `::selection`    |
| image-radius        | 2px 2px 0 0 (top corners only)| `.grid-item img` |
| grid-gap            | 15px (transparent border)     | `.grid-item`     |
| button-border       | 2px solid, transparent bg     | Contact submit   |
| button-text-transform | uppercase                   | Contact submit   |
| button-padding      | 30px 0                        | Contact submit   |
| header-font-size    | 28px                          | `.header-txt .entry-title` |
| body-font-size      | 20px                          | CSS `body`       |
| body-line-height    | 35px                          | CSS `body`       |
| content-width       | 1170px                        | `.content-1170`  |

## Design notes

- The original uses a **fullscreen fixed-position layout** with a sliding sidebar menu.
- The header has a small logo (80×95px) on the left, with an animated typewriter headline to its right cycling through "web resources", "psd files", "mockups".
- The hamburger menu is 4 black lines that toggle a fixed-position left sidebar with nav links + social icons + search.
- The portfolio grid is **Isotope masonry** with variable card sizes: full-width (1×1), half-width (½), and quarter-width (¼).
- Each grid card has an image with a hover overlay showing view count + download count, plus a category tag, title, and heart/like button with count.
- Below the grid is a centered "load more" arrow image.
- The footer is a simple 3-column layout: categories list, footer menu links, and social icons + copyright.
- The design is **minimal, white-background, pink-accent** with clean typography.

## Gherkin requirements

### Header section

Scenario: Logo and animated headline render
  Given I visit the home page
  Then the logo image should be visible in the header area
  And the headline should display "pixel precise" followed by animated cycling words ("web resources", "psd files", "mockups")
  And the subtitle "to suit all your needs." should be visible below the headline

Scenario: Hamburger menu toggle
  Given I visit the home page
  Then the hamburger toggle button should be visible with 4 horizontal lines
  When I click the toggle button
  Then the sidebar navigation should become visible

### Sidebar navigation

Scenario: Sidebar navigation links
  Given the sidebar menu is open
  Then the following links should be present: Home, About, Contact, Features
  And social media icons should be present: Twitter, Behance, Dribbble, Facebook, RSS
  And a search input field should be present with placeholder "Search"

### Portfolio grid

Scenario: Grid items render
  Given I visit the home page
  Then a masonry grid of portfolio items should be displayed
  And the first item should be full-width (spanning the grid)
  And subsequent items should mix half-width and quarter-width cards

Scenario: Grid item content
  Given a portfolio grid item is displayed
  Then it should show an image with hover overlay containing view and download counts
  And it should display a category tag (e.g., "Mockup", "Branding", "Icons")
  And it should display a linked title
  And it should show a heart/like button with a like count

Scenario: Load more button
  Given the portfolio grid is displayed
  Then a centered "load more" arrow should be visible below the grid

### Footer section

Scenario: Footer renders
  Given I visit the home page
  Then the footer should display a categories list (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
  And it should display footer navigation links (About, Features, Contact)
  And it should display social media icons (Twitter, Behance, Dribbble, Facebook, RSS)
  And it should display a copyright line with "Component Dock" link (not ColorLib)

### Responsiveness

Scenario: Grid collapses on mobile
  Given I visit the home page on a viewport width less than 805px
  Then all grid items should stack to single column
  And the header content should be centered

### Accessibility

Scenario: Semantic structure
  Given I visit the home page
  Then the header should use a <header> element
  And the navigation should use a <nav> element
  And the footer should use a <footer> element
  And all images should have alt text
  And interactive elements should be keyboard-focusable

## Verification checklist

- [ ] Logo image renders in header with correct dimensions
- [ ] Animated headline cycles through "web resources", "psd files", "mockups"
- [ ] Subtitle "to suit all your needs." displays below headline
- [ ] Hamburger toggle opens/closes sidebar navigation
- [ ] Sidebar contains Home, About, Contact, Features links
- [ ] Sidebar contains social icons (Twitter, Behance, Dribbble, Facebook, RSS)
- [ ] Sidebar contains search input
- [ ] Portfolio grid renders with masonry layout (full, half, quarter cards)
- [ ] Each grid card shows image with hover overlay (views + downloads)
- [ ] Each grid card shows category tag, title, and like button
- [ ] Load more arrow button is centered below grid
- [ ] Footer displays 3-column layout: categories, nav links, social + copyright
- [ ] Footer copyright links to Component Dock (not ColorLib)
- [ ] Brand color #f271ab is used for accents (hover, selection, highlights)
- [ ] Font is Lato with correct weights (300, 400, 700)
- [ ] Grid background is #F5F5F5, body background is white
- [ ] Images use deterministic placeholder URLs (picsum.photos)
- [ ] Responsive: grid stacks to single column on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
