# Template: Petal (Fresh Flower & Gift Shop)

## Purpose

Petal is a flower shop landing template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Florist" design, built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm floral e-commerce landing page with hot-pink accents
(#f45d96), featuring a hero slider, benefits strip, product categories, about
section, product arrivals grid, call-to-action band, blog posts, testimonials,
Instagram gallery, and a full footer.

## Design reference (replication findings)

- **Original:** ColorLib "Florist" — free flower shop website template
  (source: https://colorlib.com/wp/template/florist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/florist/`
  (HTTP 200, 40KB HTML). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot confirms the visual design (white background,
  pink #f45d96 accents, warm floral aesthetic).
- **Stylesheet analyzed:** `css/style.css` (65KB). Extracted tokens below.
- **Section order (1:1):**
  1. Navbar — logo "Petal", nav links (Home, Shop, About Us, Blog, Contact)
  2. Hero slider — "Fresh Flower & Gift Shop" / "Making beautiful flowers a
     part of your life." / "Shop now" CTA
  3. Benefits strip — 4 icons: "100% Freshness", "Made by artist",
     "Own courier", "Fast Delivery"
  4. Categories — 4 cards with background images: "Fresh Flower (25 items)",
     "Succulent plants (162 items)", "Cactus plants (58 items)",
     "Furniture tree (25 items)"
  5. About — section title "About us" / "We provide all kinds of fresh flower
     services", description text, video area, secondary text with "Contact us" CTA
  6. New Arrivals — filter tabs (All, Bouquet, Flower box, Flower shelf,
     Basket, Gift combos), 10 product cards with image, title, price, "Add to
     cart" button, optional labels (New/Sale)
  7. Call-to-action — "Custom flower" / "Let our flowers make your party more
     perfect." / Order Now + Contact Us buttons
  8. Blog — "Latest posts" / "Florist tricks", 3 blog cards with image,
     category label, title, excerpt, date
  9. Testimonials — centered quote slider, author name + title
  10. Instagram — 5 image tiles with hover overlay "Follow us @petal"
  11. Footer — logo, description, social icons, quick links, services,
      newsletter, copyright with Component Dock link

## Design tokens

| Token          | Value                  | Usage                        |
| -------------- | ---------------------- | ---------------------------- |
| Brand pink     | #f45d96                | Buttons, accents, highlights |
| Primary text   | #111111                | Headings, body               |
| Secondary text | #444444                | Paragraphs, descriptions     |
| Body font      | Quicksand (sans-serif) | All body text                |
| Heading font   | Oswald (sans-serif)    | Section titles               |
| Background     | #ffffff                | Page background              |
| Button radius  | 0 (square/rectangular) | Primary CTA buttons          |
| Button bg      | #f45d96                | Primary buttons              |
| Button hover   | #111111                | Button hover state           |

## Gherkin scenarios

```gherkin
Feature: Petal flower shop template

  Scenario: Page renders all sections
    Given the user visits the Petal homepage
    Then the navbar, hero, benefits, categories, about, arrivals, CTA,
      blog, testimonials, instagram, and footer sections are visible

  Scenario: Hero displays tagline and CTA
    Given the hero section is visible
    Then a heading "Making beautiful flowers a part of your life" is shown
    And a "Shop now" button is present

  Scenario: Benefits section shows four items
    Given the benefits section is visible
    Then 4 benefit items are displayed with icons and text

  Scenario: Categories section shows four cards
    Given the categories section is visible
    Then 4 category cards with names and item counts are displayed

  Scenario: Arrivals section filters products
    Given the arrivals section is visible
    When the user clicks the "Bouquet" filter
    Then only bouquet products are displayed

  Scenario: CTA section shows action buttons
    Given the CTA section is visible
    Then "Order Now" and "Contact Us" buttons are present

  Scenario: Blog section shows three posts
    Given the blog section is visible
    Then 3 blog post cards are displayed

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to "https://www.componentdock.com/" is present
    And the link text mentions "Component Dock"
```
