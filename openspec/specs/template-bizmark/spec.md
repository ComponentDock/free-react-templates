# Template: Bizmark (Business / Consulting)

## Purpose

Recreation of ColorLib's **Bizcon** template — a business/consulting website
with a gradient-orange accent, clean corporate aesthetic, and animated decorative
elements.

- **Source slug:** `bizcon`
- **ColorLib page:** https://colorlib.com/wp/template/bizcon/
- **Preview URL:** https://preview.colorlib.com/theme/bizcon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizcon-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the preview CSS (`css/style.css`) and live DOM:

| Token             | Value                                                 | Notes                                |
| ----------------- | ----------------------------------------------------- | ------------------------------------ |
| Primary gradient  | `linear-gradient(131deg, #feb47b, #ff7e5f)`          | Orange → salmon, used on all CTAs    |
| Accent / hover    | `#ff7e5f`                                             | Coral-orange                         |
| Secondary accent  | `#ff8b23`                                             | Bright orange                        |
| Banner bg         | `#f0eed4` (fallback on mobile), white + bg image desktop | Light yellow-green tint          |
| Section bg        | `#f7f7f7`                                             | Light gray (services area)           |
| Headings color    | `#2f373d`                                             | Dark blue-gray                       |
| Body text color   | `#646464` / `#666666`                                 | Medium gray                          |
| Footer bg         | `#303030`                                             | Dark charcoal                        |
| Body font         | Roboto, sans-serif                                    | 14px base, line-height 1.929         |
| Heading font      | Poppins, sans-serif                                   | Weight 600–800                       |
| Button radius     | `50px` (fully rounded pills)                          | White text on gradient               |
| Green accent      | `#e3f1da`                                             | Light green, service card decoration |
| Border accent     | `#fdcb9e`                                             | Warm tan border on icons             |

## Section Order (from live preview DOM)

1. **Navbar** — Sticky top, logo left, nav links right (Home, About, Blog dropdown, Page dropdown, Contact). Mobile hamburger collapse.
2. **Banner (Hero)** — Full-height (~880px desktop, ~650px mobile). Left-aligned headline "Lead from Front in Business Innovation." + subtext + gradient "Learn More" button + "Intro Video" link with play icon. Animated decorative SVG/icon blobs float around (purely decorative).
3. **About** — Two-column: illustration image right, text left. Headline "We Have 24 Year Experience in consulting" + sub-headline + paragraph + "Read More" gradient button. Decorative animated blobs.
4. **Services** — Gray background (`#f7f7f7`). Left column: intro text + "Load More" button. Two service cards: "Business Opportunity" and "Commercial Approach" — each with icon, title, paragraph, "Learn More" link with arrow.
5. **Testimonials (Reviews)** — "Customer Are Saying" centered section title. Thumbnail avatars on left, main slide with quote icon, testimonial text, reviewer name and title. Carousel/slider.
6. **Portfolio** — Masonry/card-columns layout. One quote card ("Explore Our Best Practice Area") + four project cards each with image, title "Startup Project", short description.
7. **Advisory Service** — Mirror of About section (image left, text right). "We Providing high quality adviser service" headline + sub-headline + paragraph + "Read More" button. Decorative animated blobs.
8. **Blog** — "Update From Blog" centered section. Three blog cards in a row: each with image, category + date, title, comments + likes count.
9. **Footer** — Four columns (Top Products, Quick Links, Features, Resources) + Newsletter column with email input + "Subscribe" gradient button. Light background.
10. **Copyright** — Dark (`#303030`) bar with copyright text.

## Gherkin Requirements

### Navbar
```gherkin
Feature: Navbar
  Scenario: Desktop navbar shows all links
    Given the page is loaded at desktop width
    Then the navbar is visible at the top
    And links "Home", "About", "Blog", "Page", "Contact" are visible

  Scenario: Mobile navbar shows hamburger
    Given the page is loaded at mobile width
    Then a hamburger toggle button is visible
    When the user clicks the toggle
    Then the nav menu expands with all links
```

### Banner
```gherkin
Feature: Banner / Hero
  Scenario: Hero displays headline and CTA
    Given the page is loaded
    Then a headline containing "Lead from" is visible
    And a "Learn More" button with gradient styling is visible
    And an "Intro Video" link is visible

  Scenario: Hero has decorative animated elements
    Given the page is loaded
    Then decorative SVG/icon elements are present (purely decorative)
```

### About
```gherkin
Feature: About Section
  Scenario: About displays experience headline
    Given the page is scrolled to the about section
    Then a headline mentioning "Experience" or "consulting" is visible
    And a "Read More" button is visible
    And an illustration image is visible
```

### Services
```gherkin
Feature: Services Section
  Scenario: Services section shows cards on gray background
    Given the page is scrolled to the services section
    Then the section has a light gray background
    And a section headline "We Provide Best Services" is visible
    And at least two service cards are visible
    And each card has an icon, title, and "Learn More" link

  Scenario: Service cards have green accent decoration
    Given the services section is visible
    Then service card icons have warm tan (#fdcb9e) borders
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Testimonials show customer quotes
    Given the page is scrolled to the testimonials section
    Then a headline "Customer Are Saying" is visible
    And thumbnail avatars are visible
    And a testimonial quote with reviewer name and title is displayed
```

### Portfolio
```gherkin
Feature: Portfolio Section
  Scenario: Portfolio shows masonry grid of projects
    Given the page is scrolled to the portfolio section
    Then a quote card with "Explore Our Best Practice Area" is visible
    And at least four project cards with images are visible
    And each card has a title and short description
```

### Advisory Service
```gherkin
Feature: Advisory Service Section
  Scenario: Advisory section mirrors about layout
    Given the page is scrolled to the advisory section
    Then a headline about "adviser service" is visible
    And an illustration image is visible
    And a "Read More" button is visible
```

### Blog
```gherkin
Feature: Blog Section
  Scenario: Blog section shows post cards
    Given the page is scrolled to the blog section
    Then a headline "Update From Blog" is visible
    And at least three blog cards are visible
    And each card has an image, category, date, title, and engagement counts
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer has columns and newsletter
    Given the page is scrolled to the footer
    Then four link columns are visible (Top Products, Quick Links, Features, Resources)
    And a newsletter section with email input and "Subscribe" button is visible

  Scenario: Copyright bar
    Given the page is scrolled to the bottom
    Then a dark copyright bar is visible
    And it contains a link to componentdock.com
```

## Verification Checklist

- [ ] Navbar: sticky, logo + links, mobile hamburger toggle
- [ ] Banner: headline, subtext, gradient CTA button, video link, decorative blobs
- [ ] About: two-column image + text, headline, "Read More" CTA
- [ ] Services: gray bg, intro text, 2 service cards with icons
- [ ] Testimonials: centered headline, thumbnail carousel, quote + reviewer
- [ ] Portfolio: masonry grid, quote card + 4 project cards
- [ ] Advisory Service: mirror about layout (reversed), headline + image + CTA
- [ ] Blog: 3 blog cards with image, category, date, title, engagement
- [ ] Footer: 4 link columns + newsletter with email input
- [ ] Copyright: dark bar with copyright text
- [ ] Design tokens: gradient buttons (#feb47b → #ff7e5f), pill shape (50px radius), Poppins headings, Roboto body
- [ ] Responsive: all sections stack properly at mobile widths
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to componentdock.com
