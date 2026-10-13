# Template: Shopvibe (Ecommerce)

## Purpose

Shopvibe is a single-page e-commerce TEMPLATE in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Listashop" free template
(source: https://colorlib.com/wp/template/listashop/), built under a
DIFFERENT name (**Shopvibe**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery e-commerce landing page: a white
navbar with logo + dropdown nav + cart/search icons, a light blue-gray
hero banner with headline + CTA + product image, two hot-deal promo cards,
a featured-products carousel, a countdown timer section, a latest-products
grid, a brand-logos carousel, a most-searched-products grid, and a
four-column footer with newsletter signup.

**Preview URL (REACHABLE):** https://preview.colorlib.com/theme/listashop/

## Design Tokens (extracted from preview CSS)

| Token              | Value                   | Notes                                      |
| ------------------ | ----------------------- | ------------------------------------------ |
| Brand color        | `#c5322d`               | Red — buttons, hover states, accents       |
| Hero background    | `#e8f0f2`               | Light blue-gray                            |
| Timer background   | `#fafaff`               | Very light purple-gray                     |
| Page background    | `#ffffff`               | White                                      |
| Heading text       | `#222222`               | Near-black                                 |
| Body text          | `#777777`               | Medium gray                                |
| Button text (on brand) | `#ffffff`          | White                                      |
| Primary font       | `"Roboto", sans-serif`  | Body + headings, weights 300-700           |
| Secondary font     | `"Poppins", sans-serif` | Available via Google Fonts import          |
| Hero CTA button    | White bg, `border-radius: 5px` | "View Collection"               |
| Primary button     | `#c5322d` bg, `border-radius: 45px` | Pill-shaped, white text  |
| Product hover      | `rgba(34,34,34,0.8)` overlay with heart/cart icons | |
| Card hover icon bg | `rgba(197,50,45,0.8)`  | Red semi-transparent                       |
| Footer bg          | `#ffffff`               | White                                      |
| Top menu bg        | `#ffffff`               | White, light border                        |

## Section Structure (top-to-bottom, 1:1 fidelity)

1. **TopMenu** — thin bar with contact email + welcome text left, social icons right
2. **Navbar** — logo left, nav links (Home, Shop, Blog, Pages, Contact) center-left, cart + search icons right
3. **Hero** — light blue-gray `#e8f0f2` bg, headline + paragraph + white CTA button left, product image right
4. **HotDeals** — two side-by-side promo cards with product image + overlay text "Hot Deals of this Month" + "Shop Now" link
5. **FeaturedProducts** — section heading, carousel of product cards (image + heart/cart hover icons + name + price)
6. **DealTimer** — "Exclusive Hot Deal Ends Soon!" heading + subtitle + countdown timer (days/hours/minutes/seconds) + "Shop Now" button
7. **LatestProducts** — 8-item grid of product cards (image + hover icons + name + price)
8. **TopBrands** — "Top Brands of this Month" heading + row of brand logo images
9. **MostSearched** — 4-column grid with thumbnail + product name + price per item (3 items per column)
10. **Footer** — 4 columns: About Us, Newsletter (email input + arrow button), Instagram Feed (8 thumbnails), Follow Us (social icons) + copyright bar

## Requirements

### Feature: Shopvibe template behaviour

Feature: Shopvibe Ecommerce Landing Page

#### Scenario: Top menu displays contact info and social links

- **GIVEN** I visit the Shopvibe homepage
- **THEN** I see a top menu bar with "support@shopvibe.com" email
- **AND** I see "Welcome to Catalogue" text
- **AND** I see social media icon links (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Navbar shows logo, navigation, cart and search

- **GIVEN** I visit the Shopvibe homepage
- **THEN** I see the Shopvibe logo on the left
- **AND** I see nav links: Home, Shop, Blog, Pages, Contact
- **AND** I see a cart icon and a search icon on the right
- **AND** "Home" is the active nav link

#### Scenario: Hero section renders with headline and CTA

- **GIVEN** I visit the Shopvibe homepage
- **THEN** I see a hero section with light blue-gray background
- **AND** I see the headline "Collections!" (paraphrased from original)
- **AND** I see a description paragraph below the headline
- **AND** I see a "View Collection" button styled with white background and rounded corners
- **AND** I see a product image on the right side

#### Scenario: Hot deals section shows two promo cards

- **GIVEN** I scroll to the hot deals section
- **THEN** I see two side-by-side promo cards
- **AND** each card has a product image with text overlay
- **AND** each card shows "Hot Deals of this Month" heading
- **AND** each card has a "Shop Now" link

#### Scenario: Featured products carousel

- **GIVEN** I scroll to the featured products section
- **THEN** I see "Featured Products" heading with subtitle
- **AND** I see a horizontal carousel of product cards
- **AND** each product card shows an image, product name, and price
- **AND** hovering a product card reveals heart and cart icons

#### Scenario: Deal countdown timer

- **GIVEN** I scroll to the deal timer section
- **THEN** I see "Exclusive Hot Deal Ends Soon!" heading
- **AND** I see a countdown timer with days, hours, minutes, seconds
- **AND** I see a "Shop Now" primary button (red pill-shaped)

#### Scenario: Latest products grid

- **GIVEN** I scroll to the latest products section
- **THEN** I see "Latest Products" heading
- **AND** I see 8 product cards in a responsive grid (4 cols desktop, 2 cols mobile)
- **AND** each card has an image, hover icons, name, and price

#### Scenario: Top brands logo carousel

- **GIVEN** I scroll to the brands section
- **THEN** I see "Top Brands of this Month" heading
- **AND** I see brand logo images in a carousel

#### Scenario: Most searched products grid

- **GIVEN** I scroll to the most searched section
- **THEN** I see "Most Searched Products" heading
- **AND** I see 4 columns of product listings
- **AND** each listing has a thumbnail image, product name, and price

#### Scenario: Footer layout

- **GIVEN** I scroll to the footer
- **THEN** I see 4 footer columns: About Us, Newsletter, Instagram Feed, Follow Us
- **AND** the Newsletter column has an email input with arrow submit button
- **AND** the Instagram Feed shows 8 thumbnail images in a grid
- **AND** the Follow Us column has social media icon links
- **AND** the footer bottom shows a copyright line with Component Dock link

## Verification Checklist

- [ ] Top menu renders with email and social icons
- [ ] Navbar has logo, 5 nav links, cart icon, search icon
- [ ] Hero section: blue-gray bg, headline, description, white CTA button, product image
- [ ] Hot deals: 2-column promo cards with image overlay
- [ ] Featured products: carousel with product cards (image + name + price + hover icons)
- [ ] Deal timer: countdown with 4 time units + red pill button
- [ ] Latest products: 8-item responsive grid with hover states
- [ ] Top brands: logo carousel section
- [ ] Most searched: 4-column grid with thumbnail + name + price
- [ ] Footer: 4 columns (About, Newsletter, Instagram, Social) + copyright with Component Dock link
- [ ] All design tokens match (brand #c5322d, Roboto font, #e8f0f2 hero bg)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos
- [ ] Google Fonts loaded via link tag in index.html
- [ ] Responsive layout (mobile-friendly)
