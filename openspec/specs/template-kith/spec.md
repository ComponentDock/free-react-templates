# Template: Kith (Fashion Ecommerce)

## Purpose

Recreation of ColorLib's **Karl** template
(preview: https://preview.colorlib.com/theme/karl/).

Kith is a fashion ecommerce single-page website with a top discount banner
strip, hero image carousel, category feature cards, product grid with filter
tabs, a full-width offer section, testimonials carousel, and a newsletter
footer. Built with React 19, Vite, Tailwind CSS 4, and TypeScript.

Source slug: `karl`
Preview URL: https://preview.colorlib.com/theme/karl/

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/core-style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#ff084e` | Hot pink/magenta — buttons, badges, discount area, accents |
| Dark accent | `#3a3a3a` | Dark discount area, text, header elements |
| Body text | `#3a3a3a` | Primary text color |
| Muted text | `#929191` / `#7a7a7a` | Secondary/muted text |
| Light section bg | `#f4f6f8` | Alternating section backgrounds |
| White | `#fff` | Card backgrounds, footer bg, hero text |
| Font family | `Open Sans`, sans-serif | Google Font — clean geometric sans-serif |
| Button style | `.karl-btn` — border-radius: 2px, min-width: 170px, bg `#ff084e`, white text | Primary CTA button |
| Badge | `.karl-level` — bg `#ff084e`, white text, 11px uppercase, bold | "hot" / "Share" badges |
| Section heading | 48px, uppercase | Section titles |
| Hero heading | 92px, uppercase, white | Hero carousel text |
| Footer | White bg, border-top 2px solid `#e5e5e5` | Clean white footer |
| Subscribe input | bg `#f0eded`, border-radius: 0, italic | Newsletter email input |
| Subscribe button | bg `#ff084e`, white text | Newsletter submit |
| Overlay | rgba(0,0,0,0.5) on hero images | Dark overlay on background images |
| Divider line | `#ddd`, 1px, margin 30px 0 | Section separator |

## Section structure (top to bottom)

1. **Top Header Area** — White background, 150px height. Logo on the left,
   shopping bag icon with item count and total ("Your Bag $20") + hamburger
   menu icon on the right.

2. **Main Header Area** — Social share icons (Pinterest, Facebook, Twitter,
   LinkedIn) on the left, main navigation menu in the center (Home, Pages
   dropdown, Dresses, Shoes with "hot" badge, Contact), helpline phone number
   with headphone icon on the right.

3. **Top Discount Area** — 3-column horizontal banner strip. Column 1:
   "Free Shipping & Returns" with "BUY NOW" link (light/white bg). Column 2:
   "20% Discount for all dresses" with "USE CODE: Kith" (hot pink #ff084e
   bg). Column 3: "20% Discount for students" with "USE CODE: Kith"
   (dark #3a3a3a bg). All text white, 18px headings, 12px bold subtexts.

4. **Welcome Slides (Hero Carousel)** — Full-width image carousel (800px
   height) with background images and dark overlay. Each slide has a small
   subtitle ("* Only today we offer free shipping"), large heading
   ("Fashion Trends" / "Summer Collection" / "Women Fashion"), and a CTA
   button ("Shop Now" / "Check Collection"). Auto-rotating with dots.

5. **Top Category Area** — Two side-by-side category cards with background
   images. Left: "On Accessories / Sale 30%". Right: "in Bags excepting the
   new collection / Designer bags". Each has a "SHOP NOW" CTA button.

6. **New Arrivals** — Section heading "New Arrivals". Filter tab bar (ALL,
   WOMAN, MAN, ACCESSORIES, SHOES, KIDS). 3-column product grid (6 items)
   with product image, quick-view overlay (+ icon), price ($39.90), product
   name, and "ADD TO CART" button. Products filter by category.

7. **Offer Area** — Full-width 700px height background image section with
   dark overlay. Content aligned bottom-right: "White t-shirt" heading with
   "Hot" badge, free shipping note, strikethrough pricing ($25.90 → $15.90),
   and "Shop Now" CTA button.

8. **Testimonials** — Section heading "Testimonials". Carousel of testimonial
   cards with large quote mark, testimonial text, author thumbnail photo,
   author name, and location. Centered layout.

9. **Footer** — White background with top border. 4-column layout: Logo +
   copyright text, quick links (About/Blog/Faq/Returns/Contact), account
   links (My Account/Shipping/Policies/Affiliates), newsletter subscription
   (heading + email input + Subscribe button). Bottom: divider line, social
   icons (Pinterest, Facebook, Twitter, LinkedIn).

## Gherkin requirements

### Top Header

```gherkin
Feature: Top header area

  Scenario: Header renders with logo and cart
    Given the page loads
    Then the top header displays the brand logo
    And a shopping bag icon shows item count "2" and total "$20"
    And a hamburger menu icon is visible

  Scenario: Cart dropdown shows items
    Given the user clicks the cart icon
    Then a dropdown shows 2 cart items with thumbnails and prices
    And a "Total: $20.00" line is displayed
    And "Cart" and "Checkout" buttons are visible
```

### Main Navigation

```gherkin
Feature: Main navigation

  Scenario: Navigation renders with all links
    Given the page loads
    Then the main nav shows "Home", "Pages", "Dresses", "Shoes", "Contact"
    And "Shoes" has a "hot" badge
    And social share icons (Pinterest, Facebook, Twitter, LinkedIn) are visible
    And a helpline phone number is displayed

  Scenario: Pages dropdown opens
    Given the user hovers over "Pages"
    Then a dropdown shows "Home", "Shop", "Product Details", "Cart", "Checkout"
```

### Top Discount Area

```gherkin
Feature: Discount banner strip

  Scenario: Three discount banners render
    Given the page loads
    Then three discount columns are displayed in a row
    And column 1 shows "Free Shipping & Returns" with "BUY NOW"
    And column 2 shows "20% Discount for all dresses" with pink background
    And column 3 shows "20% Discount for students" with dark background
```

### Hero Carousel

```gherkin
Feature: Welcome slides carousel

  Scenario: Hero carousel renders with slides
    Given the page loads
    Then a full-width image carousel is displayed
    And the first slide shows "Fashion Trends" heading
    And a "Shop Now" button is visible
    And carousel navigation dots are present

  Scenario: Carousel advances automatically
    Given the hero carousel is displayed
    When 5 seconds pass
    Then the carousel advances to the next slide
    And "Summer Collection" heading is shown
```

### Category Area

```gherkin
Feature: Top category cards

  Scenario: Two category cards render
    Given the page loads
    Then two side-by-side category cards are displayed
    And card 1 shows "On Accessories" with "Sale 30%" and "SHOP NOW"
    And card 2 shows "Designer bags" with "SHOP NOW"
```

### New Arrivals

```gherkin
Feature: Product grid with filters

  Scenario: Product grid renders with filter tabs
    Given the page loads
    Then "New Arrivals" heading is displayed
    And filter tabs show "ALL", "WOMAN", "MAN", "ACCESSORIES", "SHOES", "KIDS"
    And 6 product cards are displayed in a 3-column grid
    And each card shows a product image, price, name, and "ADD TO CART" button

  Scenario: Filter tabs filter products
    Given the product grid is displayed
    When the user clicks "WOMAN"
    Then only products tagged "women" are visible
    And other products are hidden

  Scenario: Quick view opens modal
    Given the product grid is displayed
    When the user hovers a product and clicks the quick-view icon
    Then a modal opens showing product image, title, rating, price, and description
```

### Offer Area

```gherkin
Feature: Featured offer section

  Scenario: Offer section renders with pricing
    Given the page loads
    Then a full-width background image section is displayed
    And "White t-shirt" heading with "Hot" badge is shown
    And strikethrough price "$25.90" and sale price "$15.90" are displayed
    And a "Shop Now" CTA button is visible
```

### Testimonials

```gherkin
Feature: Testimonials carousel

  Scenario: Testimonials render in carousel
    Given the page loads
    Then "Testimonials" heading is displayed
    And a carousel shows testimonial cards
    And each card has a quote mark, text, author photo, name, and location
```

### Footer

```gherkin
Feature: Page footer

  Scenario: Footer renders with all sections
    Given the page loads
    Then the footer shows the brand logo and copyright text
    And quick links (About, Blog, Faq, Returns, Contact) are displayed
    And account links (My Account, Shipping, Policies, Affiliates) are displayed
    And a newsletter subscription form with email input and "Subscribe" button is shown
    And social icons (Pinterest, Facebook, Twitter, LinkedIn) are at the bottom

  Scenario: Newsletter form has styled input
    Given the footer is visible
    Then the email input has italic placeholder text
    And the Subscribe button has pink background
```

## Verification checklist

- [ ] All 9 sections render in the correct order
- [ ] Top header: logo, cart icon with count/total, hamburger menu
- [ ] Main nav: all links present, "hot" badge on Shoes, social icons, helpline
- [ ] Discount strip: 3 columns with correct text and background colors
- [ ] Hero carousel: slides with headings, CTAs, auto-rotation, dots
- [ ] Category cards: 2 side-by-side with background images and CTAs
- [ ] Product grid: filter tabs work, 6 products render, quick-view modal works
- [ ] Offer section: background image, pricing with strikethrough, CTA
- [ ] Testimonials: carousel with quotes, author info
- [ ] Footer: logo, links, newsletter form, social icons, Component Dock link
- [ ] Design tokens match: `#ff084e` brand pink, Open Sans font, 2px button radius
- [ ] Responsive layout works on mobile
- [ ] All tests pass with 100% coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
