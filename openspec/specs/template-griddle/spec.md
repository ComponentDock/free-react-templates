# Griddle — Burger Restaurant Template

Recreation of ColorLib "Burger" (https://colorlib.com/wp/template/burger/).

## Design tokens (extracted from preview CSS)

| Token        | Value      | Notes                                      |
| ------------ | ---------- | ------------------------------------------ |
| brand        | #F0542C    | Orange-red — primary CTA, buttons, accents |
| brand-gold   | #F2C64D    | Golden yellow — secondary button accent    |
| overlay      | #040E27    | Dark navy — hero overlay background        |
| heading      | #1F1F1F    | Near-black headings                        |
| body         | #4D4D4D    | Gray body text                             |
| font-display | Montserrat | Headings + buttons                         |
| font-sans    | Raleway    | Body text, navigation                      |

## Section order (1:1 with source)

1. **Header** — sticky nav: home / menu / about / blog ▾ / pages ▾ / contact; centered logo; right social icons + phone number
2. **HeroSlider** — 2 full-width slides with dark overlay, "Big Deal" kicker, "Burger Bachelor" title, "Maxican" subtitle
3. **MenuGrid** — "Burger Menu" kicker, "Best Ever Burgers" heading; 2×2 grid of burger items (image + name + description + price)
4. **About** — two-column: text paragraph + signature image
5. **VideoSection** — dark overlay background, title + "How we make delicious Burger" subtitle + play button
6. **Testimonials** — "Testimonials" kicker, "Happy Customers" heading; carousel of reviews (text + author image + stars)
7. **InstagramGrid** — 4-column image grid with Instagram overlay
8. **Footer** — 3-column: location cards (address + email + phone), newsletter signup form; social icon row; copyright bar with Component Dock link

## Gherkin scenarios

```gherkin
Feature: Griddle burger restaurant template

  Scenario: renders all sections
    Given the app loads
    Then the header is visible with navigation links
    And the hero slider shows "Big Deal" and "Burger Bachelor"
    And the menu grid shows 4 burger items with prices
    And the about section is visible
    And the video section is visible with a play button
    And the testimonials section shows customer reviews
    And the instagram grid shows 4 images
    And the footer links to componentdock.com

  Scenario: mobile menu toggle
    Given the viewport is narrow
    When I click the menu toggle button
    Then the mobile navigation opens
    When I click a navigation link
    Then the mobile menu closes

  Scenario: testimonial carousel advances
    Given the testimonials section is visible
    When I click the next arrow
    Then the next testimonial is shown

  Scenario: footer newsletter form
    Given the footer is visible
    When I enter an email in the newsletter input
    And I click "Sign Up"
    Then the form is submitted
```
