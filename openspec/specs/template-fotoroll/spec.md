# Fotoroll — Photography Portfolio Template

> Recreation of ColorLib "Photography 2" (https://colorlib.com/wp/template/photography-2/)

## Design tokens (from screenshot analysis)

- **Accent color:** `#4ecdc4` (mint/teal) — used for logo dot, nav links, CTA hover
- **Text:** `#333333` (dark), `#888888` (light/muted)
- **Background:** `#ffffff` (white paper), `#f5f5f5` (gallery sections)
- **Font:** Montserrat (Google Fonts) — clean sans-serif, weights 300–700
- **Layout:** Full-width hero slider, masonry portfolio grid, 3-column blog cards
- **Footer:** Dark `#333` background, social icons (Facebook, Twitter, Instagram, Dribbble), Component Dock link

## Sections (in order)

1. **Navbar** — White sticky header, "Foto." logo with green dot, nav links (Home, Portfolio, Blog, About, Contact), green email CTA, mobile hamburger
2. **Hero** — Full-width image slider (3 slides), large centered heading, "View Projects" CTA, left/right arrow navigation, "1/3" pagination counter, auto-advance every 6s
3. **Portfolio** — Masonry-style 3-column grid, 12 photography projects with captions, hover scale effect
4. **Blog** — 3-column card grid, image + title + excerpt + date, `#f5f5f5` card backgrounds
5. **Footer** — Dark background, copyright with heart, social icon row, "More templates at Component Dock" link

## Scenarios

### Gherkin requirements

```gherkin
Feature: Fotoroll Photography Portfolio

  Scenario: Navbar renders all navigation links
    Given I visit the Fotoroll page
    Then I see the "Foto." logo
    And I see links: Home, Portfolio, Blog, About, Contact
    And I see the email "hello@fotoroll.com"

  Scenario: Mobile menu opens and closes
    Given I visit the Fotoroll page on mobile
    When I click the "Open menu" button
    Then I see the mobile navigation
    When I click "Close menu"
    Then the mobile navigation is hidden

  Scenario: Hero slider auto-advances
    Given I visit the Fotoroll page
    Then I see "Mountain Vistas" heading
    When I wait 6 seconds
    Then I see "Urban Streets" heading

  Scenario: Hero slider manual navigation
    Given I visit the Fotoroll page
    When I click "Next slide"
    Then I see "Urban Streets" heading
    When I click "Previous slide"
    Then I see "Mountain Vistas" heading

  Scenario: Portfolio grid displays images
    Given I visit the Fotoroll page
    Then I see 12 portfolio images

  Scenario: Blog section shows posts
    Given I visit the Fotoroll page
    Then I see 3 blog post cards with titles and dates

  Scenario: Footer has Component Dock link
    Given I visit the Fotoroll page
    Then I see a "Component Dock" link to componentdock.com
    And I see social media icons
```

## Preview analysis notes

- Preview URL (`https://preview.colorlib.com/theme/photography-2/`) returned 404
- Analysis based on ColorLib screenshot: `photography-2-free-template-1.jpg`
- Full-width hero slider is the dominant feature — the page is essentially a slider with a thin footer
- White navbar with green accent (`#4ecdc4` approximate), "Foto." brand name
- Slider has dark overlay, large white text, "VIEW PROJECTS" underline CTA
- Arrow navigation is circular dark buttons on left/right edges
- Footer: copyright + "made with ♥ by Colorlib" + "SHOW THUMBNAIL" + social icons
