# Template: Solebay (E-Commerce / Sneaker Shop — Bootstrap)

## Purpose

Solebay is a single-page sneaker/sportswear e-commerce website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Karma" sneaker shop HTML template design (see TEMPLATES.md,
E-Commerce category, line 1585), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Karma" — free sneaker/sportswear e-commerce HTML
  template (page `<title>` "Karma Shop"; source:
  https://colorlib.com/wp/template/karma/). Single page: sticky white navbar
  (logo + Home / Shop dropdown / Blog dropdown / Pages dropdown / Contact +
  bag icon + search), hero banner carousel (dark bg photo, large "Nike New
  Collection!" headline with "Add to Bag" CTA, sneaker product image right),
  4-column features strip (Free Delivery, Return Policy, 24/7 Support, Secure
  Payment), asymmetric category grid (2×2 + tall right, overlay labels),
  "Latest Products" carousel (4 product cards per slide with prices, ratings,
  bag icon), Exclusive Deal section (countdown timer left on bg photo + product
  carousel right, split layout), Brand logos row (5 brand images), "Deals of
  the Week" related products grid (8 product cards with thumbnails, titles,
  prices), dark footer (About Us, Newsletter form, Instagram feed, Follow Us
  social icons, copyright).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/karma/` (fetched HTML, plus stylesheet
  `css/main.css` for design tokens). Screenshot: `karma-free-template.jpg`
  from TEMPLATES.md.
- **Visual design (live DOM + CSS):** Modern e-commerce sneaker shop
  aesthetic. Dark hero banner with product image, bright orange-to-amber
  gradient brand accent (`linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)`).
  Clean white sections with grey body text, rounded pill buttons, dark
  `#222222` footer. The countdown deal section has a dark photo background
  on the left half. Category grid uses overlay labels on photos. Overall
  feel: bold, sporty, product-focused.

## Design tokens (from `css/main.css` of the live preview)

- **Brand gradient:** `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` —
  used on `.primary-btn` bg, `.add-bag .add-btn` bg, `.search_input_box`
  bg, `.single-footer-widget .click-btn` bg, pagination active/hover,
  owl-dots active. Amber `#ffba00` is the primary brand color; orange
  `#ff6c00` is the gradient end.
- **Body text:** `#777777` — paragraphs, general body copy. `font-size: 14px`,
  `line-height: 24px`. Headings/nav: `#222222`.
- **Fonts:** `"Roboto", sans-serif` for body (weight 400); `"Poppins",
  sans-serif` for headings `h1`–`h6` (weight 500, `line-height: 1.2`).
  Load both via Google Fonts `<link>` in `index.html`.
- **Backgrounds:** page white `#fff`; `.exclusive-deal-area` bg `#f9f9ff`;
  `.footer-area` bg `#222222`; `.banner-area` dark photo bg
  (`banner-bg.jpg` — use `picsum.photos/seed/solebay-hero/1920/1080`).
- **Buttons (`.primary-btn`):** `border-radius: 50px` (pill), `line-height:
  50px`, `padding: 0 30px`, white text, weight 500, gradient bg
  `#ffba00 → #ff6c00`, 0.3s transition. Hover: skewed dark overlay
  (`#000` at 30% opacity, `skew(40deg)` sliding from left — recreate as
  simple bg shift). Add-to-bag button (`.add-btn`): same gradient bg,
  50px circle with bag icon inside, white text.
- **Header (`.header_area.sticky-header`):** White bg, sticky on scroll
  (`.main_box` padding, `navbar-expand-lg`). Logo left, nav links center
  (12px uppercase 500 `#222222`, padding `38.5px 8px`, dropdown menus
  white bg with shadow), bag icon + search icon right.
- **Hero (`.banner-area`):** Full-screen height (`100vh`), dark photo bg
  center/cover. Left col (`col-lg-5`): `.banner-content` h1 "Nike New
  Collection!" (60px Poppins 700, `line-height: 66px`, white, mb 30px)
  + paragraph + `.add-bag` (mt 30px). Right col (`col-lg-7`): product
  image (`.banner-img img.img-fluid`). Slider with owl-carousel dots.
- **Features (`.features-area.section_gap`):** 4 equal columns, each
  `.single-features` with `.f-icon` (feature icon image) + h6 title (14px
  Poppins) + p description. Padding `100px 0`.
- **Category (`.category-area`):** Asymmetric grid inside `.container`:
  left `.col-lg-8` holds a 2×2 inner row (`.single-deal` cards with
  `.overlay` + image + `.deal-details` with `.deal-title`); right
  `.col-lg-4` holds one tall `.single-deal`. All cards have dark overlay
  on hover showing label text.
- **Products (`.active-product-area.section_gap`):** Owl carousel of
  product slides. Each slide has `.section-title` centered (h1 + p) + row
  of 4 `.single-product` (col-lg-3): image, `.product-details` with h6
  title, `.price` (current + strikethrough), `.prd-bottom` with social
  icons (heart, compare, bag). Padding `100px 0`.
- **Exclusive Deal (`.exclusive-deal-area`):** Split layout — left
  `.exclusive-left` has dark photo bg (`exclusive.jpg` — use
  `picsum.photos/seed/solebay-deal/960/600`), centered content: h1
  "Exclusive Hot Deal Ends Soon!", paragraph, countdown timer (`.clock-wrap`
  with `.days`/`.hours`/`.minutes`/`.seconds` h1 numbers + `.smalltext`
  labels), `.primary-btn` "Shop Now". Right `.exclusive-right`: product
  carousel with `.single-exclusive-slider` cards (image + `.product-details`
  with price + h4 title + `.add-bag` CTA). bg `#f9f9ff`.
- **Brand logos (`.brand-area.section_gap`):** Row of 5 `.single-img` cols,
  each a linked grayscale brand logo image. Padding `100px 0`.
- **Related/Deals (`.related-product-area.section_gap_bottom`):** Section
  title "Deals of the Week" + row of `.single-related-product` (col-lg-4
  col-md-4 col-sm-6): thumbnail image + `.desc` with `.title` link + `.price`
  (current + strikethrough). Padding bottom `100px`.
- **Footer (`.footer-area.section_gap`, bg `#222222`):** 4 columns:
  col-lg-3 About Us (h6 white 18px weight 600 + paragraph `#777777`);
  col-lg-4 Newsletter (h6 + p + email input + `.click-btn` arrow submit
  button with gradient bg); col-lg-3 Instagram Feed (h6 + `.instafeed`
  8-image grid, 25% width cells); col-lg-2 Follow Us (h6 + p + 4 social
  icon links `#cccccc`, hover `#ffba00`). `.footer-bottom`: centered
  copyright text "Copyright © <year> All rights reserved | This template
  is made with ♥ by Component Dock" — "Component Dock" MUST link
  https://www.componentdock.com/ (replacing ColorLib credit).

## Requirements

### Requirement: Sticky header and navigation

The system SHALL render a sticky white navbar with a logo on the left, nav
links (Home, Shop, Blog, Pages, Contact) in the center, and a bag icon +
search icon on the right. Shop, Blog, and Pages are dropdown menus that
appear on hover/click. The header sticks to the top on scroll.

#### Scenario: Header renders with all nav items

```
Given the user loads the page
Then the header displays a logo
And nav links "Home", "Shop", "Blog", "Pages", "Contact" are visible
And a bag icon and search icon appear on the right
```

#### Scenario: Dropdown menus open on interaction

```
Given the user hovers over or clicks "Shop"
Then a dropdown appears with "Shop Category", "Product Details",
  "Product Checkout", "Shopping Cart", "Confirmation"
```

### Requirement: Hero banner carousel

The system SHALL render a full-height hero section with a dark background
image, a headline "Nike New Collection!", descriptive text, an "Add to Bag"
CTA button, and a large sneaker product image on the right. The banner
supports a carousel with navigation dots.

#### Scenario: Hero displays headline and CTA

```
Given the user loads the page
Then the hero section shows "Nike New Collection!" as the main heading
And a paragraph of descriptive text appears below the heading
And an "Add to Bag" button with a gradient background is visible
```

#### Scenario: Hero product image displays

```
Given the user loads the page
Then a large sneaker product image appears on the right side of the hero
```

### Requirement: Features strip

The system SHALL render a 4-column features section with icons and labels:
Free Delivery, Return Policy, 24/7 Support, Secure Payment. Each column
has an icon image, a title, and a description.

#### Scenario: Features display four items

```
Given the user scrolls to the features section
Then four feature cards are visible in a row
And each card shows an icon, a title, and a description
And the titles are "Free Delivery", "Return Policy", "24/7 Support",
  "Secure Payment"
```

### Requirement: Category grid

The system SHALL render an asymmetric category grid with overlay labels.
The left side is a 2×2 grid of category cards; the right side is one tall
category card. Each card has a dark overlay with a category label.

#### Scenario: Category grid displays five cards

```
Given the user scrolls to the category section
Then five category cards are visible
And four are arranged in a 2×2 grid on the left
And one tall card is on the right
And each card shows a label on hover or by default
```

### Requirement: Latest Products carousel

The system SHALL render a "Latest Products" section with a centered title
and a carousel of product cards. Each product card shows an image, title,
price (current and strikethrough original), and action icons (heart,
compare, bag).

#### Scenario: Product carousel shows cards

```
Given the user scrolls to the products section
Then "Latest Products" heading is displayed centered
And product cards are visible in a carousel
And each card shows an image, title, current price, and original price
```

### Requirement: Exclusive Deal section

The system SHALL render a split-layout exclusive deal section. The left
half has a dark background photo, a headline "Exclusive Hot Deal Ends
Soon!", a countdown timer (days, hours, minutes, seconds), and a "Shop
Now" button. The right half shows a product carousel.

#### Scenario: Countdown timer displays

```
Given the user scrolls to the exclusive deal section
Then a countdown timer shows days, hours, minutes, and seconds
And a "Shop Now" gradient button is visible
```

#### Scenario: Deal product carousel shows items

```
Given the user views the exclusive deal section
Then a product image and details (price, title, "Add to Bag") appear
  on the right side
```

### Requirement: Brand logos row

The system SHALL render a row of 5 brand logo images, each inside a
linked column, evenly spaced across the container.

#### Scenario: Brand logos display

```
Given the user scrolls to the brand section
Then five brand logo images are visible in a horizontal row
And each logo is wrapped in a link
```

### Requirement: Deals of the Week grid

The system SHALL render a "Deals of the Week" section with a centered
title and a grid of related product cards. Each card shows a thumbnail
image, product title, current price, and strikethrough original price.

#### Scenario: Deals grid displays products

```
Given the user scrolls to the deals section
Then "Deals of the Week" heading is displayed centered
And at least 8 product cards are visible in a grid
And each card shows a thumbnail, title, current price, and original price
```

### Requirement: Footer

The system SHALL render a dark footer with four columns: About Us text,
Newsletter form (email input + submit), Instagram feed (8-square grid),
Follow Us with social icons. Below, a centered copyright line with
"Component Dock" linking to https://www.componentdock.com/.

#### Scenario: Footer columns display

```
Given the user scrolls to the footer
Then four columns are visible: About Us, Newsletter, Instagram Feed,
  Follow Us
And social icons (Facebook, Twitter, Dribbble, Behance) are present
```

#### Scenario: Footer copyright links Component Dock

```
Given the user reads the footer copyright
Then it says "This template is made with ♥ by Component Dock"
And "Component Dock" links to https://www.componentdock.com/
```

## Verification checklist

- [ ] Sticky header with logo, nav links (Home, Shop, Blog, Pages,
      Contact), bag icon, search icon
- [ ] Hero banner with background image, "Nike New Collection!" headline,
      description, "Add to Bag" CTA, sneaker product image
- [ ] Features section: 4 columns (Free Delivery, Return Policy, 24/7
      Support, Secure Payment) with icons
- [ ] Category grid: asymmetric layout with 5 cards and overlay labels
- [ ] Latest Products carousel with product cards (image, title, price,
      action icons)
- [ ] Exclusive Deal: countdown timer on dark bg left + product carousel
      right
- [ ] Brand logos row: 5 evenly spaced brand images
- [ ] Deals of the Week: grid of related product cards
- [ ] Dark footer: About Us, Newsletter form, Instagram feed, Follow Us
      social icons, copyright with "Component Dock" link
- [ ] Design tokens: gradient `#ffba00 → #ff6c00`, Poppins headings,
      Roboto body, `#222222` footer bg, pill buttons (50px radius)
- [ ] No ColorLib references in app code
- [ ] Footer links https://www.componentdock.com/
