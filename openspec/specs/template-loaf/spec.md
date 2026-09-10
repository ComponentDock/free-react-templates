# Loaf — Bakery Template Spec

## Provenance

- **Source:** ColorLib "Bakery" — https://colorlib.com/wp/template/bakery/
- **Preview:** https://preview.colorlib.com/theme/bakery/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/bakery-free-template.jpg)

## Design Tokens (extracted from preview CSS)

| Token         | Value     | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| Brand color   | `#d1ab7f` | Buttons, accents, borders, active states |
| Body text     | `#777777` | Paragraphs, secondary text               |
| Heading text  | `#222222` | h1–h6, strong elements                   |
| Surface bg    | `#f9f9ff` | Alternating section backgrounds          |
| Navy bg       | `#04091e` | Footer background, hero overlay base     |
| Font family   | Poppins   | All text (300–700 weights)               |
| Button radius | 25px      | Primary CTA buttons                      |

## Sections (in order)

1. **Navbar** — Fixed white navbar with logo "Loaf" (left border accent #d1ab7f). Links: Home, About, Category, Video, Review, Blog, Contact. Mobile hamburger toggle.

2. **Hero** — Full-width section with background image and dark overlay (rgba(4,9,30,0.5)). Centered white text: H1 "Whenever we bake, bake with our heart", subtitle "Love with baking items", description paragraph, "Check Our Menu" CTA button (rounded, brand color).

3. **About** — Two-column layout on white background. Left: heading "Brand new app to blow your mind", sub-heading, description, "Get Started Now" button. Right: image with rounded corner accent.

4. **Categories** — Three-column grid on light surface (#f9f9ff). Each item: circular food image, h4 title (Pizza, Bread, Burgers), short description. "View Full Menu" button centered.

5. **Video** — Two-column layout. Left: heading, description, "Get Started Now" button (dark #222 bg). Right: background image with dark overlay and circular play button icon.

6. **Testimonials** — Full-width section with dark background image + overlay. "Enjoy our Client's Review" heading. Three testimonial cards: circular avatar, name, 5-star rating, review paragraph.

7. **Blog** — Three-column grid on white. Each card: image, uppercase title, author/date metadata, excerpt text.

8. **Footer** — Dark navy (#04091e) background. Three columns: "About Us" with description, "Newsletter" with email input + button, "Follow Us" with social icons. Bottom bar: copyright text + "More templates at Component Dock" link to https://www.componentdock.com/

## Scenarios

### Gherkin Requirements

```gherkin
Feature: Loaf bakery template

  Scenario: Navbar displays brand and navigation
    Given the page loads
    Then the navbar shows "Loaf" as the brand
    And the navbar has links: Home, About, Category, Video, Review, Blog, Contact

  Scenario: Hero section renders
    Given the page loads
    Then the hero shows heading "Whenever we bake, bake with our heart"
    And the hero shows subtitle "Love with baking items"
    And the hero shows a "Check Our Menu" button

  Scenario: About section renders
    Given the page loads
    Then the about section shows heading "Brand new app to blow your mind"
    And the about section shows a "Get Started Now" button

  Scenario: Categories section shows food items
    Given the page loads
    Then the categories section shows three items
    And each category item has a title (Pizza, Bread, or Burgers)
    And the section shows a "View Full Menu" button

  Scenario: Video section renders
    Given the page loads
    Then the video section shows a heading
    And the video section shows a "Get Started Now" button

  Scenario: Testimonials section renders
    Given the page loads
    Then the testimonials section shows heading "Enjoy our Client's Review"
    And there are three testimonial cards with names and review text

  Scenario: Blog section renders
    Given the page loads
    Then the blog section shows heading "Latest posts from our Blog"
    And there are three blog cards with titles

  Scenario: Footer renders with Component Dock link
    Given the page loads
    Then the footer shows "About Us" heading
    And the footer shows a newsletter section
    And the footer links to https://www.componentdock.com/
    And the footer text mentions "Component Dock"
```

## Notes

- All images use picsum.photos with seeded URLs (no copied assets)
- Social icons are inline SVGs (lucide-react brand icons removed)
- Font loaded via Google Fonts <link> in index.html
- Single-page layout (all sections in App.tsx)
