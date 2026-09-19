# Template: Riviere (E-Commerce)

## Purpose

Recreation of the ColorLib "eStore" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [eStore](https://colorlib.com/wp/template/estore/)
- **Preview URL:** https://preview.colorlib.com/theme/estore/
- **New name:** `riviere` (apps/riviere)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token          | Value                            | Notes                                                    |
| -------------- | -------------------------------- | -------------------------------------------------------- |
| Heading color  | `#0b1c39`                        | Very dark navy for headings                              |
| Body text      | `#506172`                        | Gray for body paragraphs                                 |
| Secondary text | `#635c5c`                        | Warm gray for meta text                                  |
| Primary        | `#ff003c`                        | Bright red. Buttons border, hover fill, accents          |
| Accent blue    | `#2577fd`                        | Secondary accent for some elements                       |
| Light blue     | `#00b1ff`                        | Tertiary accent                                          |
| Footer bg      | `#f7f7f7`                        | Light gray footer background                             |
| Heading font   | `"Playfair Display", serif`      | Headings and hero text                                   |
| Body font      | `"Poppins", sans-serif`          | Body paragraphs, nav, general text                       |
| Accent font    | `"Yellowtail", cursive`          | Decorative accent text                                   |
| Button style   | Pill (25px radius)               | Uppercase, 3px letter-spacing, Playfair Display font     |
| Primary button | `#ff003c` bg, dark text on hover | `.boxed-btn` — white bg + red border → red fill on hover |

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Preloader** with logo centered (optional, skip in React SPA).
- **Two-tier header:** Top bar with flag icon + country/language selector + phone number, right side has account links (My Account, Wish List, Shopping, Cart, Checkout). Main header has logo, horizontal nav (Home, Categories, Latest dropdown, Blog dropdown, Pages dropdown, Contact), search input, heart icon, cart icon, "Sign in" button.
- **Hero slider** — large background image with person model, text overlay: "60% Discount" span, "Winter Collection" headline, subtext, "Shop Now" pill button. Uses bounce/fade animations.
- **Shop by Category** — 4 cards (Owmen's, Winter Cloth, Man's Cloth, + one more) with image backgrounds and text overlays.
- **Latest Products** — section with "Latest Products" heading, product cards.
- **Best Collection of This Month** — featured collection section with product grid and a man-shaped promotional image.
- **Shop Method** — 3-column feature strip: Free Shipping, Secure Payment, Returns/Exchange. Icons from lucide-react.
- **Gallery** — horizontal row of 5 gallery images, full-width.
- **Footer** — 4 columns: logo + description, Quick Links, New Products, Support. Social icons (Twitter, Facebook, Behance, Globe). Copyright bar.

## Requirements

### Requirement: Header utility bar

The page SHALL display a top utility bar with country flag, phone number, and account navigation links (My Account, Wish List, Shopping, Cart, Checkout).

#### Scenario: Top bar shows utility info

- **WHEN** the user visits the Riviere homepage
- **THEN** the top bar should display a country flag indicator and phone number
- **AND** utility links: My Account, Wish List, Shopping, Cart, Checkout

### Requirement: Main header navigation

The page SHALL display a sticky main header with site logo, horizontal navigation links, search input, wishlist icon, cart icon, and Sign in button.

#### Scenario: Main header has logo, nav, and actions

- **WHEN** the user visits the Riviere homepage
- **THEN** the header should display the site logo
- **AND** navigation links: Home, Categories, Latest, Blog, Pages, Contact
- **AND** a search input, wishlist icon, cart icon, and "Sign in" button

#### Scenario: Header becomes sticky on scroll

- **WHEN** the user scrolls past the header
- **THEN** the main header should be fixed to the top

### Requirement: Hero slider

The page SHALL display a hero section with a background image, promotional text, and a Shop Now pill button.

#### Scenario: Hero slider shows promotional content

- **WHEN** the user visits the Riviere homepage
- **THEN** the hero slider should display a background image
- **AND** text: "60% Discount", "Winter Collection", "Best Cloth Collection By 2020!"
- **AND** a "Shop Now" pill button

### Requirement: Shop by Category

The page SHALL display a category section with 4 category cards showing background images and category names.

#### Scenario: Category section shows category cards

- **WHEN** the user scrolls to the category section
- **THEN** the "Shop by Category" section should display 4 category cards
- **AND** each card should show a category name and background image

### Requirement: Latest Products

The page SHALL display a product grid with product cards showing images, names, and prices.

#### Scenario: Latest products section displays products

- **WHEN** the user scrolls to the latest products section
- **THEN** the "Latest Products" section should display product cards
- **AND** each card should show an image, name, and price

### Requirement: Best Collection

The page SHALL display a featured collection section with a promotional image alongside a product grid.

#### Scenario: Best collection shows featured products

- **WHEN** the user scrolls to the best collection section
- **THEN** the "Best Collection of This Month" section should display products
- **AND** include a promotional image alongside the product grid

### Requirement: Shop Methods

The page SHALL display 3 feature cards (Free Shipping, Secure Payment, Returns & Exchange) with icons and descriptions.

#### Scenario: Shop methods show 3 features

- **WHEN** the user scrolls to the shop methods section
- **THEN** the shop methods section should display 3 feature cards
- **AND** each card should show an icon, title, and description

### Requirement: Gallery

The page SHALL display 5 images in a horizontal row.

#### Scenario: Gallery shows 5 images

- **WHEN** the user scrolls to the gallery section
- **THEN** the gallery section should display 5 images in a horizontal row

### Requirement: Footer

The page SHALL display a footer with 4 columns (About/Logo, Quick Links, New Products, Support), social icons, copyright text, and a Component Dock link.

#### Scenario: Footer shows 4 columns

- **WHEN** the user scrolls to the footer
- **THEN** the footer should display 4 columns: About/Logo, Quick Links, New Products, Support

#### Scenario: Footer has social links

- **WHEN** the user looks at the footer
- **THEN** the footer should show social icons: Twitter, Facebook, Behance, Website

#### Scenario: Footer copyright

- **WHEN** the user looks at the footer bottom bar
- **THEN** the footer bottom should show copyright text and a "Component Dock" link

### Requirement: Responsive design

The page SHALL collapse navigation to a hamburger menu on mobile and stack grids to fewer columns on smaller viewports.

#### Scenario: Mobile view collapses nav

- **WHEN** the viewport width is less than 991px
- **THEN** the desktop navigation should be hidden
- **AND** a mobile hamburger menu should appear

#### Scenario: Mobile view adjusts grids

- **WHEN** the viewport width is less than 768px
- **THEN** category and product grids should stack to 2 columns
