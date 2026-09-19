# Template: Shopnova (Ecommerce — Bootstrap)

## Purpose

Shopnova is a single-page ecommerce/shopping website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Karma" ecommerce website template design (see TEMPLATES.md,
Ecommerce category, line 1585), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Karma" — free ecommerce/online-shop HTML template
  (page `<title>` "Karma Shop"; source:
  https://colorlib.com/wp/template/karma/). Single page: sticky header
  (logo + Home/Shop/Blog/Pages/Contact nav + bag icon + search toggle),
  fullscreen product hero carousel ("Nike New Collection!" + "Add to Bag"),
  4-column features row (Free Delivery, Return Policy, 24/7 Support,
  Secure Payment), category image grid (2+1 / 1+2 layout), product carousel
  (Latest Products → Coming Products tabs, 8 cards per slide), exclusive
  deal countdown section (split: left countdown + CTA, right product slider),
  brand logos row, "Deals of the Week" related products grid (9 cards +
  sidebar promo), and a dark footer (About Us, Newsletter, Instagram Feed,
  Follow Us, copyright).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/karma/` (fetched to `/tmp/karma.html`,
  full HTML retrieved) plus stylesheet `css/main.css` (fetchable from the
  same base URL) and the TEMPLATES.md screenshot
  (`karma-free-template.jpg`, viewed in browser).
- **Visual design (screenshot + live DOM + CSS):** bold, modern ecommerce
  aesthetic with a warm yellow-to-orange gradient brand accent. The hero is
  a fullscreen product image carousel with left-aligned text and a circular
  "Add to Bag" button. Product cards have clean white backgrounds with
  price strikethroughs and hover-reveal action icons (bag, wishlist, compare,
  view more). The exclusive deal section uses a bold countdown timer on the
  left with a product carousel on the right. Footer is light grey. Overall
  feel: sporty, energetic, product-focused.

## Design tokens (from `css/main.css` of the live preview)

- **Brand gradient:** `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` —
  used on `.primary-btn`, `.add-bag .add-btn`, `.prd-bottom .social-info
  span:after`, `.pagination a.active/:hover`, `.click-btn` (newsletter
  submit), and search bar background (`linear-gradient(270deg, ...)`).
  Yellow start `#ffba00`, orange end `#ff6c00`.
- **Body text:** `#777777` — paragraphs, feature descriptions, price
  strikethrough text, footer copy. Headings: `#222222` (Poppins, weight
  500). Page background: `#fff`.
- **Backgrounds:** page white `#fff`; `.exclusive-deal-area` white with
  product slider; `.footer-area` section gap with grey text. Product card
  hover: `prd-bottom` slides up with icon backgrounds using the brand
  gradient.
- **Fonts:** `"Poppins", sans-serif` for headings (weight 500);
  `"Roboto", sans-serif` for body text (weight 400). Load via Google Fonts
  `<link>` in `index.html`.
- **Buttons (`.primary-btn`):** `line-height: 50px`, `padding: 0 30px`,
  `border-radius: 50px` (pill), white text, uppercase, weight 500, 0.3s
  transition. Hover: skewed black overlay slides in. `.add-btn`: circular
  (46×46px), brand gradient bg, white icon (ti-bag), hover reveals text
  "Add to Bag" next to it.
- **Product cards (`.single-product`):** white bg, image `img-fluid`,
  `.product-details` with h6 name (14px `#222222`), `.price` with two h6
  (current price + `.l-through` strikethrough), `.prd-bottom` (4 icon
  buttons: add-to-bag, wishlist, compare, view-more — each `.social-info`
  with icon span + `.hover-text` label; on hover: icon gets brand gradient
  after pseudo-element, text slides in).
- **Exclusive deal:** `.exclusive-deal-area` — left side has countdown
  clock (`.clockinner` blocks: h1 number + smalltext label for
  Days/Hours/Mins/Secs), heading "Exclusive Hot Deal Ends Soon!", description,
  `.primary-btn` "Shop Now". Right side: product image carousel with price
  + "Add to Bag" overlay.
- **Category grid (`.category-area`):** 2+1 / 1+2 asymmetric grid with
  `.single-deal` cards: overlay + image + `.deal-details` with h6 title on
  hover.
- **Brand logos (`.brand-area`):** 5 brand images in a row, `img-fluid
  d-block mx-auto`.
- **Related products (`.related-product-area`):** "Deals of the Week"
  heading + 9 `.single-related-product` cards (col-lg-4 col-md-4 col-sm-6)
  with thumbnail + title + price, plus a sidebar promo image.
- **Header:** sticky header (`.sticky-header`), `.main_box` nav bar with
  logo left, nav links center (Home, Shop ▾, Blog ▾, Pages ▾, Contact),
  bag icon + search toggle right. Shop dropdown: Shop Category, Product
  Details, Product Checkout, Shopping Cart, Confirmation. Blog dropdown:
  Blog, Blog Details. Pages dropdown: Login, Tracking, Elements. Search
  bar: full-width input with brand gradient background.
- **Footer:** light section gap padding. 4 columns: About Us (text),
  Newsletter (email input + arrow submit button), Instagram Feed (8-square
  grid), Follow Us (4 social icon links: Facebook, Twitter, Dribbble,
  Behance). Bottom bar: copyright + "Made with ♥ by Component Dock"
  (replacing Colorlib credit, linking https://www.componentdock.com/).
- **Section spacing:** `.section_gap` = `padding: 100px 0` (80px on ≤991px).
  `.section_gap_bottom` = `padding-bottom: 100px`.
- **Section titles:** `.section-title h1` = 36px, centered, with grey
  subtitle paragraph below.

## Gherkin requirements

### Header

```gherkin
Feature: Navigation header
  Scenario: Logo and nav links are visible
    Given the page loads
    Then the "Shopnova" wordmark is displayed in the header
    And nav links "Home", "Shop", "Blog", "Pages", "Contact" are visible

  Scenario: Shop dropdown shows sub-links on hover
    Given the user hovers over "Shop"
    Then a dropdown appears with "Shop Category", "Product Details", "Product Checkout", "Shopping Cart", "Confirmation"

  Scenario: Blog dropdown shows sub-links on hover
    Given the user hovers over "Blog"
    Then a dropdown appears with "Blog", "Blog Details"

  Scenario: Pages dropdown shows sub-links on hover
    Given the user hovers over "Pages"
    Then a dropdown appears with "Login", "Tracking", "Elements"

  Scenario: Bag icon and search toggle are present
    Given the header is visible
    Then a shopping bag icon is displayed
    And a search toggle button is displayed

  Scenario: Search bar opens on toggle click
    Given the user clicks the search toggle
    Then a full-width search input field appears with brand gradient background
```

### Hero banner

```gherkin
Feature: Hero product carousel
  Scenario: Hero displays product headline and CTA
    Given the hero section is visible
    Then a headline "Nike New Collection!" is displayed
    And a description paragraph is shown
    And an "Add to Bag" circular button is visible

  Scenario: Hero is a fullscreen carousel
    Given the hero section loads
    Then the hero occupies the full viewport height
    And carousel navigation arrows are present
```

### Features

```gherkin
Feature: Features row
  Scenario: Four features are displayed
    Given the features section is visible
    Then 4 feature cards are shown in a row
    And each card has an icon, a title, and a description
    And the titles are "Free Delivery", "Return Policy", "24/7 Support", "Secure Payment"
```

### Category grid

```gherkin
Feature: Category image grid
  Scenario: Category grid shows deal cards
    Given the category section is visible
    Then 5 category cards are displayed in an asymmetric grid
    And each card has an overlay with a title on hover
```

### Product carousel

```gherkin
Feature: Product carousel
  Scenario: Product section shows Latest Products by default
    Given the product carousel section is visible
    Then the heading "Latest Products" is displayed
    And product cards are shown in a carousel

  Scenario: Each product card has name, price, and action icons
    Given a product card is visible
    Then it shows a product image, name, current price, and strikethrough old price
    And hover reveals 4 action icons: add to bag, wishlist, compare, view more
```

### Exclusive deal

```gherkin
Feature: Exclusive deal countdown
  Scenario: Countdown timer displays days, hours, minutes, seconds
    Given the exclusive deal section is visible
    Then a countdown timer with Days, Hours, Mins, Secs blocks is displayed
    And the heading "Exclusive Hot Deal Ends Soon!" is shown
    And a "Shop Now" primary button is visible

  Scenario: Right side shows product carousel
    Given the exclusive deal section is visible
    Then a product image with price and "Add to Bag" is shown on the right
```

### Brand logos

```gherkin
Feature: Brand logos row
  Scenario: Brand logos are displayed
    Given the brand section is visible
    Then 5 brand logo images are shown in a horizontal row
```

### Deals of the week

```gherkin
Feature: Deals of the week
  Scenario: Related products are displayed
    Given the deals section is visible
    Then the heading "Deals of the Week" is displayed
    And 9 related product cards with thumbnail, title, and price are shown
    And a sidebar promotional image is displayed
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer columns are displayed
    Given the footer is visible
    Then an "About Us" column with description text is shown
    And a "Newsletter" column with email input and submit button is shown
    And an "Instagram Feed" column with 8 thumbnail images is shown
    And a "Follow Us" column with 4 social icons is shown

  Scenario: Footer copyright links to Component Dock
    Given the footer bottom bar is visible
    Then "Copyright" text with current year is displayed
    And "Made with ♥ by Component Dock" links to https://www.componentdock.com/

  Scenario: Newsletter form validates email
    Given the newsletter email input is empty
    When the user clicks submit
    Then a validation message is shown
```

## Verification checklist

- [ ] All sections render in order: header → hero → features → category → products → exclusive deal → brands → deals of the week → footer
- [ ] Header sticky on scroll; dropdowns open on hover; search bar toggle works
- [ ] Hero is fullscreen with carousel navigation (dots or arrows)
- [ ] Product cards show all 4 hover action icons with brand gradient
- [ ] Countdown timer displays and counts down (static or animated)
- [ ] Footer has Component Dock link (not Colorlib)
- [ ] No ColorLib references anywhere in `apps/shopnova/`
- [ ] CNAME: `shopnova.free.componentdock.com`
- [ ] Homepage: `https://shopnova.free.componentdock.com`
- [ ] Images: `https://picsum.photos/seed/shopnova-<n>/<w>/<h>` (deterministic)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `bash scripts/verify-app.sh shopnova` passes
