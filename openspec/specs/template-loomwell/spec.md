# Template: Loomwell (E-commerce / Fashion)

## Purpose

Recreation of ColorLib "Karma" — a clean, white e-commerce fashion/shoe shop template with warm orange gradient accents, category grid, product carousels, and an exclusive deal countdown.

- **Source slug:** `karma`
- **Preview URL:** https://preview.colorlib.com/theme/karma/
- **Source page:** https://colorlib.com/wp/template/karma/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token               | Value                                  | Notes                                                          |
| ------------------- | -------------------------------------- | -------------------------------------------------------------- |
| Font (headings)     | `'Poppins', sans-serif`                | Weights 500, 700                                              |
| Font (body)         | `'Roboto', sans-serif`                 | Weight 400                                                    |
| Brand gradient      | `linear-gradient(90deg, #ffba00, #ff6c00)` | Gold-to-orange gradient — buttons, accents, CTAs          |
| Brand primary       | `#ffba00`                              | Gold — button solid bg, highlights                            |
| Brand secondary     | `#ff6c00`                              | Orange — gradient endpoint                                    |
| Heading color       | `#222222`                              | Dark charcoal — all headings                                  |
| Body text           | `#777777`                              | Medium gray — paragraphs, secondary text                      |
| Body background     | `#ffffff`                              | White — main page bg                                          |
| Feature box bg      | `#ffffff`                              | White cards with shadow                                       |
| Feature box shadow  | `0 10px 30px rgba(0,0,0,0.1)`          | Subtle drop shadow on features row                            |
| Exclusive deal bg   | `#f9f9ff`                              | Very light blue-gray — exclusive deal section                 |
| Footer bg           | `#222222`                              | Dark charcoal — footer                                        |
| Footer heading      | `#ffffff`                              | White headings in footer                                      |
| Footer text         | `#777777`                              | Gray body text in footer                                      |
| Button radius       | `50px`                                 | Pill-shaped primary buttons                                   |
| Accent/selection    | `#ffba00`                              | Gold — list markers, links, highlights                        |
| Strikethrough price | `#777777` with line-through           | Original price styling                                        |
| Category overlay    | `rgba(0,0,0,0.x)`                     | Semi-transparent dark overlay on category cards               |
| Search bar bg       | `linear-gradient(270deg, #ffba00, #ff6c00)` | Gold-to-orange gradient (reversed) for search input bg   |
| Button hover skew   | `skew(40deg)`                         | Skewed pseudo-element sweep on primary button hover           |

## Page Structure (section order)

1. **Header** — Sticky top navbar: logo (left), nav menu (right) with dropdowns: Home, Shop (→ Shop Category, Product Details, Product Checkout, Shopping Cart, Confirmation), Blog (→ Blog, Blog Details), Pages (→ Login, Tracking, Elements), Contact. Right side: cart icon (ti-bag), search toggle icon. Below nav: expandable search input bar with gradient bg.

2. **Banner/Hero** — Full-width background image (`banner-bg.jpg`), owl-carousel slider with 2 slides. Each slide: 5/12 left column with heading "Nike New Collection!", description paragraph, "Add to Bag" CTA (circular add-btn with cross icon + uppercase text). 7/12 right column: product hero image. Fullscreen height.

3. **Features** — 4-column row inside a shadow box (`.features-inner`). Each column: icon image (f-icon1–4), h6 heading (Free Delivery, Return Policy, 24/7 Support, Secure Payment), description paragraph. Columns separated by right borders (last column no border).

4. **Category** — Product category grid. Left side (8 cols): 2x2 grid of category cards — each has product image + dark overlay + title at bottom ("Sneaker for Sports", "Product for Couple"). Right side (4 cols): single tall category card. Each card has overlay and popup link.

5. **Latest Products** — Carousel section with owl-carousel. Section title "Latest Products" centered. Each slide: 8 product cards in a 4-column grid (2 rows). Each product card: product image, h6 title, price (current + strikethrough original), prd-bottom with 4 action icons: add to bag (ti-bag), wishlist (lnr-heart), compare (lnr-sync), view more (lnr-move). Hover reveals action row.

6. **Coming Products** — Same carousel structure, section title "Coming Products". Another 8 product cards with identical layout.

7. **Exclusive Deal** — Split layout (`.exclusive-deal-area`). Left (6 cols): background image, heading "Exclusive Hot Deal Ends Soon!", subtitle, countdown timer with Days/Hours/Mins/Secs boxes, "Shop Now" primary button (pill). Right (6 cols): exclusive product carousel with product image, price, title, "Add to Bag" CTA. Background: `#f9f9ff`.

8. **Brand Logos** — 5-column row of brand logo images (grayscale), each wrapped in an anchor tag. Simple horizontal strip.

9. **Related Products / Deals of the Week** — Section title "Deals of the Week". Left (9 cols): 3x3 grid of related product items, each with small thumbnail image + title link ("Black lace Heels") + price (current + strikethrough). Right (3 cols): sidebar category image link (c5.jpg).

10. **Footer** — Dark bg (`#222222`). 4 widget columns:
    - About Us: h6 heading + description paragraph
    - Newsletter: h6 heading + subtitle + email signup form (input + gradient submit button)
    - Instagram Feed: h6 heading + 2x4 grid of Instagram thumbnail images
    - Follow Us: h6 heading + "Let us be social" + 4 social icons (Facebook, Twitter, Dribbble, Behance)
    Bottom bar: centered copyright text with heart icon and Colorlib attribution (replaced with Component Dock).

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Loomwell — E-commerce Fashion Template

  Background:
    Given the user navigates to the Loomwell app

  Scenario: Header renders with logo and navigation
    Then the logo is visible in the header
    And navigation links "Home", "Shop", "Blog", "Pages", "Contact" are present
    And "Shop" has a dropdown with sub-links
    And "Blog" has a dropdown with sub-links
    And "Pages" has a dropdown with sub-links
    And a cart icon is visible
    And a search toggle icon is visible

  Scenario: Header is responsive with hamburger menu
    When the viewport is 768px or narrower
    Then the hamburger menu icon is visible
    And the desktop nav menu is hidden
    When the user clicks the hamburger icon
    Then the mobile navigation menu opens

  Scenario: Search bar expands on toggle
    When the user clicks the search icon
    Then an expandable search input appears with a gradient background
    And the search input is focused

  Scenario: Banner hero slider displays correctly
    Then a full-width hero background image is visible
    And the heading "Nike New Collection!" is displayed
    And a description paragraph is visible
    And an "Add to Bag" CTA is visible with circular button and uppercase text
    And the banner supports carousel navigation between slides

  Scenario: Features row displays four feature cards
    Then 4 feature cards are rendered in a horizontal row
    And each card has an icon, heading, and description
    And the cards are contained in a shadow box
    And headings are "Free Delivery", "Return Policy", "24/7 Support", "Secure Payment"

  Scenario: Category grid shows product categories
    Then a grid of category cards is displayed
    And each card has an image with a dark overlay and title text
    And the layout is asymmetric: 2x2 grid on left + 1 tall card on right

  Scenario: Latest Products section shows product carousel
    Then the heading "Latest Products" is displayed
    And multiple product cards are rendered in a grid
    And each product card has an image, title, current price, and original price with strikethrough
    And each card has action icons: add to bag, wishlist, compare, view more

  Scenario: Product action icons appear on hover
    Given a product card is displayed
    When the user hovers over the product card
    Then the action icons row (add to bag, wishlist, compare, view more) becomes visible

  Scenario: Coming Products section shows product carousel
    Then the heading "Coming Products" is displayed
    And product cards are rendered with the same layout as Latest Products

  Scenario: Exclusive deal section has countdown and product
    Then the heading "Exclusive Hot Deal Ends Soon!" is displayed
    And a countdown timer with Days, Hours, Mins, Secs is visible
    And a "Shop Now" pill button is visible
    And a product carousel with exclusive product is shown on the right
    And the section has a light gray background

  Scenario: Brand logos strip renders correctly
    Then 5 brand logo images are displayed in a horizontal row
    And each logo is wrapped in an anchor tag

  Scenario: Deals of the Week section shows related products
    Then the heading "Deals of the Week" is displayed
    And multiple related product items are shown with thumbnail, title, and price
    And a sidebar category image is displayed on the right

  Scenario: Footer contains widgets and copyright
    Then an "About Us" widget with description is present
    And a "Newsletter" signup form with email input is present
    And an "Instagram Feed" widget with thumbnail grid is present
    And a "Follow Us" widget with social icons is present
    And copyright text is displayed at the bottom
    And the footer links to componentdock.com

  Scenario: Footer has dark background theme
    Then the footer background is dark charcoal (#222222)
    And footer headings are white
    And footer body text is gray

  Scenario: Primary buttons use gold-to-orange gradient
    Then CTA buttons have a gold-to-orange gradient background
    And buttons have pill shape (border-radius: 50px)
    And button hover triggers a skewed sweep animation
```

## Verification Checklist

- [ ] All 10 sections render in correct order (header, banner, features, categories, latest products, coming products, exclusive deal, brand logos, deals of the week, footer)
- [ ] White theme applied: `#ffffff` body bg, `#222222` headings, `#777777` body text
- [ ] Gold-to-orange gradient `#ffba00 → #ff6c00` on all CTA buttons and accents
- [ ] Poppins font loaded for headings, Roboto for body text
- [ ] Pill-shaped buttons (border-radius: 50px) with gradient bg
- [ ] Header responsive: hamburger on mobile, full nav on desktop
- [ ] Banner hero with background image and carousel slider
- [ ] Features row: 4 cards in shadow box with icons
- [ ] Category grid: asymmetric layout with image overlays
- [ ] Product cards with hover action icons (add to bag, wishlist, compare, view more)
- [ ] Exclusive deal section with countdown timer
- [ ] Brand logos strip with 5 logos
- [ ] Deals of the Week grid with sidebar
- [ ] Footer with 4 widget columns, newsletter form, Instagram grid, social icons
- [ ] Footer dark theme with white headings
- [ ] Placeholder images via picsum.photos (deterministic seeds)
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
