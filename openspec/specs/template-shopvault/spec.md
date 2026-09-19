# Template: ShopVault (eCommerce / Online Store)

## Purpose

Recreation of ColorLib **Estore** — a full-featured eCommerce storefront template.

- **Source slug:** `estore`
- **Source URL:** https://colorlib.com/wp/template/estore/
- **Preview URL:** https://preview.colorlib.com/theme/estore/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Name rationale:** "ShopVault" conveys a curated shopping destination without reusing the ColorLib name.

## Design Tokens (extracted from live preview CSS)

### Colors

| Token              | Value     | Usage                                   |
| ------------------ | --------- | --------------------------------------- |
| brand-blue         | `#2577fd` | Primary buttons, CTA, accent           |
| brand-black        | `#000000` | Header top bar background               |
| heading-dark       | `#0b1c39` | Section headings                        |
| body-text          | `#506172` | Paragraph / body copy                   |
| gray-text          | `#635c5c` | Secondary text                          |
| light-bg           | `#f7f7f7` | Section alternate backgrounds           |
| discount-red       | `#ff003c` | Discount price, tab active border       |
| accent-teal        | `#00b1ff` | Button hover pseudo-element             |
| dark-accent        | `#191d34` | Dark section overlay                    |
| gold               | `#dca73a` | Star rating color                       |
| secondary-dark     | `#282828` | Shop method icons, headings             |
| white              | `#ffffff` | Card backgrounds, footer text           |
| footer-gray        | `#868c98` | Footer paragraph text                   |

### Typography

| Role        | Font Family              | Notes                          |
| ----------- | ------------------------ | ------------------------------ |
| Headings    | Playfair Display, serif  | Elegant serif for titles       |
| Body / UI   | Poppins, sans-serif      | Clean geometric sans-serif     |
| Decorative  | Yellowtail, cursive      | Logo / brand accent text       |

### Buttons

- **Primary CTA:** background `#2577fd`, white text, `border-radius: 25px` (pill shape)
- **Black button:** background `#000`, white text, `border-radius: 25px`
- **Hover:** uses `::before` pseudo-element with `#00b1ff` background, `border-radius: 5px`
- **Sign-in (header):** outlined pill button

### Section Backgrounds

- **Hero:** full-width background image with overlay
- **Latest Offer CTA:** full-width background image (`latest-offer.png`)
- **Category/Latest/Shop Method:** white (`#fff`)
- **Footer:** dark background with white/gray text

## Page Sections (top to bottom)

1. **Header** — Sticky. Top bar (black bg): flag icon, country dropdown, phone number, account links (My Account, Wish List, Shopping, Cart, Checkout). Bottom bar: logo, main nav (Home, Categories, Latest dropdown, Blog dropdown, Pages dropdown, Contact), search input, wishlist heart icon, shopping cart icon, Sign In button.
2. **Hero Slider** — Full-width slider (2 slides). Each slide: background image, left side hero image (person), right side text ("60% Discount" label, "Winter Collection" heading, subtitle, "Shop Now" pill button).
3. **Categories** — 4 category cards in a grid. Each: image + caption text below. Section heading: "Browse Top Categories".
4. **Latest Products** — Tabbed product grid (All / New / Featured / Offer tabs). 3-column grid of product cards: product image, star rating, product name, price (current + strikethrough original), "New" badge on some.
5. **Featured Best Products** — Full-width section with product images in a 2-row layout. Left: large product image. Mid: large product image. Right: 3 smaller product cards with star ratings and prices.
6. **Best Collection Banner** — Full-width banner with background image. Left: "60% Discount" label, "Winter Collection" heading, description text, "Shop Now" pill button. Right: model image.
7. **Shop Methods** — 3-column info bar: Free Shipping (package icon), Secure Payment (unlock icon), Return Policy (reload icon). Each: icon + title + description.
8. **Gallery** — 5-image horizontal strip (full-width, equal-width columns). Product/fashion photos.
9. **Footer** — 4-column layout: Logo + description, Quick Links, New Products, Support. Bottom row: copyright + social icons (Twitter, Facebook, Behance, Globe).

## Gherkin Scenarios

### Header

```gherkin
Feature: Header

  Scenario: Top bar displays contact and account links
    Given I visit the ShopVault homepage
    Then the header top bar shows a phone number "+777 2345 7886"
    And the top bar shows links: "My Account", "Wish List", "Shopping", "Cart", "Checkout"

  Scenario: Navigation contains expected menu items
    Given I visit the homepage
    Then the main navigation shows "Home", "Categories", "Latest", "Blog", "Pages", "Contact"
    And the "Latest" menu has a dropdown with "Product List" and "Product Details"

  Scenario: Header includes search, wishlist, cart, and sign-in
    Given I visit the homepage
    Then the header shows a search input with placeholder "Search products"
    And a wishlist heart icon is visible
    And a shopping cart icon is visible
    And a "Sign In" button is visible

  Scenario: Header is sticky on scroll
    Given I scroll down the page
    Then the header remains fixed at the top of the viewport
```

### Hero Slider

```gherkin
Feature: Hero Slider

  Scenario: Hero displays discount badge and collection heading
    Given I visit the homepage
    Then the hero section shows "60% Discount" badge text
    And the hero shows "Winter Collection" as the main heading
    And the hero shows "Best Cloth Collection By 2020!" as the subtitle

  Scenario: Hero has a call-to-action button
    Given I visit the homepage
    Then the hero shows a "Shop Now" button

  Scenario: Hero contains a model image
    Given I visit the homepage
    Then the hero section displays a person/model image on the left side
```

### Categories

```gherkin
Feature: Categories Section

  Scenario: Categories section displays 4 category cards
    Given I scroll to the categories section
    Then I see 4 category cards
    And each card has an image and a caption

  Scenario: Categories section has a heading
    Given I scroll to the categories section
    Then the section heading reads "Browse Top Categories"
```

### Latest Products

```gherkin
Feature: Latest Products

  Scenario: Tabbed product grid with filter tabs
    Given I scroll to the Latest Products section
    Then I see tabs: "All", "New", "Featured", "Offer"
    And the "All" tab is active by default

  Scenario: Product cards display key information
    Given the "All" tab is selected
    Then product cards show a product image
    And each card shows a star rating (5 stars)
    And each card shows a product name
    And each card shows a current price and an optional original price with strikethrough

  Scenario: Some products have a New badge
    Given I view the product grid
    Then some product cards display a "New" badge overlay

  Scenario: Switching tabs filters products
    Given I click the "New" tab
    Then the product grid updates to show only new products
    And the "New" tab becomes active
```

### Featured Best Products

```gherkin
Feature: Featured Best Products

  Scenario: Best products section displays product images
    Given I scroll to the featured products section
    Then I see a large product image on the left
    And I see a large product image in the middle
    And I see 3 smaller product cards on the right
```

### Best Collection Banner

```gherkin
Feature: Best Collection Banner

  Scenario: Banner displays discount and collection info
    Given I scroll to the collection banner
    Then the banner shows "60% Discount" label
    And the banner shows "Winter Collection" heading
    And the banner shows a description paragraph
    And the banner shows a "Shop Now" button
    And the banner displays a model image on the right
```

### Shop Methods

```gherkin
Feature: Shop Methods

  Scenario: Three service features are displayed
    Given I scroll to the shop methods section
    Then I see 3 method cards
    And the first card shows "Free Shipping Method" with a package icon
    And the second card shows "Secure Payment System" with an unlock icon
    And the third card shows a return/reload policy with a reload icon
    And each card has a description paragraph
```

### Gallery

```gherkin
Feature: Gallery

  Scenario: Gallery displays 5 product images in a row
    Given I scroll to the gallery section
    Then I see 5 gallery images displayed in a horizontal row
    And each image fills an equal column width
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays four columns
    Given I scroll to the footer
    Then the footer shows 4 columns: Logo/Description, Quick Links, New Products, Support

  Scenario: Footer Quick Links column
    Given I view the footer
    Then the Quick Links column shows: "About", "Offers & Discounts", "Get Coupon", "Contact Us"

  Scenario: Footer New Products column
    Given I view the footer
    Then the New Products column shows: "Woman Cloth", "Fashion Accessories", "Man Accessories", "Rubber made Toys"

  Scenario: Footer Support column
    Given I view the footer
    Then the Support column shows: "Frequently Asked Questions", "Terms & Conditions", "Privacy Policy", "Report a Payment Issue"

  Scenario: Footer bottom row with copyright and social
    Given I view the footer bottom
    Then a copyright notice is displayed
    And social icons are shown: Twitter, Facebook, Behance, Globe
    And the footer links to https://www.componentdock.com/ as "Component Dock"
```

## Verification Checklist

- [ ] Header: sticky, top bar with phone + account links, nav with dropdowns, search, wishlist, cart, Sign In
- [ ] Hero: slider with background image, model image, "60% Discount" badge, heading, subtitle, CTA button
- [ ] Categories: 4 cards with images and captions, section heading
- [ ] Latest Products: tabbed filter (All/New/Featured/Offer), 3-col product grid, star ratings, prices, New badges
- [ ] Featured Best Products: large images + smaller product cards
- [ ] Collection Banner: full-width bg image, discount text, heading, CTA, model image
- [   ] Shop Methods: 3 service cards with icons and descriptions
- [ ] Gallery: 5-image horizontal strip
- [ ] Footer: 4 columns, copyright, social icons, Component Dock link
- [ ] Design tokens: brand-blue #2577fd, Playfair Display headings, Poppins body, pill buttons (border-radius 25px)
- [ ] Responsive: mobile menu, stacked layout on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
