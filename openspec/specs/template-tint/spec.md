# Spec: Tint — Interior Design Studio Template

> Recreation of ColorLib "Pastel Interior" (https://colorlib.com/wp/template/pastel/)
> Preview: https://preview.colorlib.com/theme/pastel/

## Design tokens (extracted from preview CSS)

| Token           | Value                                 | Usage                                     |
| --------------- | ------------------------------------- | ----------------------------------------- |
| Brand / accent  | `#f9cc41` (golden yellow)             | CTA buttons, hover highlights, active nav |
| Dark background | `#262533` (dark navy)                 | Navbar, CTA banner, dark sections         |
| Text primary    | `#262533`                             | Headings                                  |
| Text body       | `#8f8f8f`                             | Body text, paragraphs                     |
| Surface         | `#ffffff`                             | Page background                           |
| Font — headings | `"Barlow Condensed"`                  | H1–H6, nav links                          |
| Font — body     | `"Barlow"`                            | Paragraphs, spans                         |
| Button shape    | `border-radius: 0px` (square corners) | `.main_btn`                               |
| CTA button      | `#f9cc41` bg, `#000` text, no radius  | Banner CTAs                               |
| Dark CTA button | `#f9cc41` bg, `#000` text, arrow icon | CTA banner                                |

## Section order (matching original)

1. **Navbar** — Logo, nav links (Home, About, Works, Services, Blog dropdown, Contact), phone CTA right-aligned. Dark background `#262533`, white text, golden active state.
2. **Hero** — Full-viewport carousel with 3 slides. Each: centered headline + CTA button. Background images (use picsum). Dark overlay.
3. **About** — Two-column: left = image with "26 Years of Awesomeness" badge (golden bg); right = heading + paragraph + CTA.
4. **Portfolio** — 4-column grid, each card: image + hover overlay with "Interior Structure" title + description + play arrow icon. No-gutters layout.
5. **Call to Action** — Dark background banner (`#262533`): left heading "Get to Know Project Estimate?", right = golden CTA button with arrow.
6. **Numbers** — 4 stats: 258+ projects done, 942+ happy clients, 958+ real professionals, 2000+ cups of coffee. Icon + counter + label.
7. **Video** — Full-width dark section with play button centered + heading text.
8. **Services** — 3×2 grid: icon + title + description per card. 6 services (Flexible working hours, Building Construction, Building Renovation, Building Maintenance ×3).
9. **Testimonials** — Carousel of testimonial cards: quote text + avatar + name + role.
10. **Blog** — 3-column cards: image, date/comments meta, title, excerpt.
11. **Footer** — Dark bg `#262533`: 4 link columns (Top Products, Quick Links, Features, Resources) + Newsletter signup. Bottom: copyright line linking Component Dock + social icons.

## Scenarios

### Gherkin

```gherkin
Feature: Tint template renders all sections

  Scenario: Page loads with correct title
    Given the user visits the Tint page
    Then the document title is "Tint — Interior Design Studio"

  Scenario: Navbar is visible with all links
    Given the user visits the Tint page
    Then the banner landmark is visible
    And navigation links include Home, About, Works, Services, Blog, Contact

  Scenario: Hero section shows headline and CTA
    Given the user visits the Tint page
    Then the hero headline mentions Interior Design Conference
    And a "Learn more about this" CTA button is visible

  Scenario: About section displays company info
    Given the user visits the Tint page
    Then the about heading mentions Creating Awesomeness
    And the "26 Years" badge is visible

  Scenario: Portfolio grid shows 4 projects
    Given the user visits the Tint page
    Then 4 portfolio items are displayed

  Scenario: CTA banner is visible
    Given the user visits the Tint page
    Then the CTA banner shows "Get to Know Project Estimate"

  Scenario: Stats counters are displayed
    Given the user visits the Tint page
    Then 4 stat items are visible with numeric values

  Scenario: Services section shows 6 services
    Given the user visits the Tint page
    Then 6 service cards are displayed

  Scenario: Testimonials section is present
    Given the user visits the Tint page
    Then the testimonials section contains at least 1 testimonial

  Scenario: Blog section shows 3 posts
    Given the user visits the Tint page
    Then 3 blog post cards are displayed

  Scenario: Footer has Component Dock link
    Given the user visits the Tint page
    Then the footer links to https://www.componentdock.com/

  Scenario: Mobile menu toggle
    Given the user visits the Tint page
    When the user clicks the mobile menu toggle
    Then the mobile menu becomes visible
    When the user clicks the mobile menu toggle again
    Then the mobile menu is hidden
```
