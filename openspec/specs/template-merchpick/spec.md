# Template: Merchpick (E-commerce Product Display)
<!-- prep-status: shipped-as=merch -->
> **SHIPPED-UNDER** — the ColorLib `product` design this prep describes already
> ships as `apps/merch` (<https://merch.free.componentdock.com>).
> Do not scaffold `apps/merchpick`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-merch/spec.md`.

## Purpose

Recreation of ColorLib "Product" template.
- **Source slug:** `product`
- **Preview URL:** https://preview.colorlib.com/theme/product/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/product-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Description:** Clean, modern e-commerce product display template with hero slider, feature highlights, product grid, weekly deal banner, popular items carousel, and footer with newsletter signup.

## Design Tokens

### Colors
- **Primary/Brand:** `#0fb78d` (teal-green)
- **Primary hover:** `#11ca9c` / `#11cf9f`
- **Black (buttons, text):** `#000000`
- **White (backgrounds, text on dark):** `#ffffff`
- **Text dark:** `#333333`
- **Text muted:** `rgba(0, 0, 0, 0.5)`
- **Light gray backgrounds:** `#f8f9fa`
- **Footer background:** `#303030`
- **Badge "New":** `#0fb78d` background
- **Badge "Sale":** `#ffc107` (amber) background

### Typography
- **Body font:** `"Muli", sans-serif` → Use `Inter` or `Mulish` (Google Fonts)
- **Heading font:** `"Libre Baskerville", serif` (used for product titles, deal section)
- **Heading color:** `#000000`

### Buttons
- **Primary (filled):** `btn-black` — black background, white text, `border-radius: 0`
- **Outline:** `btn-outline-black` — transparent background, black border, `border-radius: 0`
- **Border-radius:** Mostly `0` (sharp/square edges) for main buttons; `border-radius: 30px` for pill-shaped elements (nav search, newsletter input)
- **Hover:** Brand teal `#0fb78d` background

### Section Backgrounds
- **Hero:** Full-width background images with dark overlay
- **Features strip:** Light gray `#f8f9fa`
- **Product grid:** White `#ffffff`
- **Deal banner:** Background image with dark overlay + teal text
- **Popular items:** White background
- **Footer:** Dark `#303030`
- **Newsletter input:** White background with border-radius 30px

## Page Structure (Section Order)

1. **Navbar** — Sticky navigation with logo ("Product."), dropdown menus (New, Men, Women, Accessories, Jewelry, About, Contact), search icon, user profile icon, cart icon with item count
2. **Hero Slider** — Full-width carousel with background images, heading text, CTA button ("Explore now")
3. **Features Strip** — 3-column row: "Worldwide Delivery" (truck icon), "Secure Payments" (shield icon), "Simple Returns" (return arrow icon) — light gray background
4. **Product Grid** — 3x2 grid of product cards with image, badge (New/Sale), title, price (with optional strikethrough original price)
5. **Weekly Deal Banner** — Background image with overlay text: "Limited Offers 20% OFF", "Week Deal" heading, description, "Shop Now" CTA
6. **Popular Items Carousel** — Heading "Popular Items" with prev/next navigation, owl-carousel of product cards (same items as grid)
7. **Footer** — 4-column layout: Help links, About links, Shop links, Newsletter signup form; copyright bar at bottom

## Requirements

### Feature: Navbar

#### Scenario: Sticky navbar is visible and fixed at top

- **GIVEN** I visit the Merchpick homepage
- **THEN** the navbar should be sticky at the top of the viewport

#### Scenario: Logo displays "Merchpick" with teal period

- **GIVEN** I visit the Merchpick homepage
- **THEN** the logo text should show "Merchpick" with a teal-colored period

#### Scenario: Navigation links are present

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see navigation links: "New", "Men", "Women", "Accessories", "Jewelry", "About", "Contact"

#### Scenario: Cart icon shows item count

- **GIVEN** I visit the Merchpick homepage
- **THEN** the cart icon should display a badge with the number "2"

### Feature: Hero Slider

#### Scenario: Hero slider displays full-width background images

- **GIVEN** I visit the Merchpick homepage
- **THEN** the hero section should display a full-width background image

#### Scenario: Hero heading is centered with white text

- **GIVEN** I visit the Merchpick homepage
- **THEN** the hero heading should be centered with white text

#### Scenario: Hero CTA button exists

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see an "Explore now" button in the hero section

### Feature: Features Strip

#### Scenario: Three feature items displayed in a row

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see three feature items: "Worldwide Delivery", "Secure Payments", "Simple Returns"

#### Scenario: Each feature has an icon

- **GIVEN** I visit the Merchpick homepage
- **THEN** each feature item should have a visible icon

#### Scenario: Features strip has light gray background

- **GIVEN** I visit the Merchpick homepage
- **THEN** the features section should have a light gray background

### Feature: Product Grid

#### Scenario: Product grid displays 6 items in 3 columns

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see 6 product cards arranged in a 3-column grid

#### Scenario: Product cards show image, title, and price

- **GIVEN** I visit the Merchpick homepage
- **THEN** each product card should display an image, title, and price

#### Scenario: Product cards with badges show "New" or "Sale"

- **GIVEN** I visit the Merchpick homepage
- **THEN** product cards with badges should show either "New" or "Sale" text

#### Scenario: Sale items show original price with strikethrough

- **GIVEN** I visit the Merchpick homepage
- **THEN** sale product cards should show the original price with strikethrough followed by the sale price

### Feature: Weekly Deal Banner

#### Scenario: Deal banner displays with background image

- **GIVEN** I visit the Merchpick homepage
- **THEN** the deal banner should have a background image

#### Scenario: Deal banner shows discount text

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see "Limited Offers 20% OFF" subtitle text

#### Scenario: Deal banner shows "Shop Now" CTA

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see a "Shop Now" button in the deal banner

### Feature: Popular Items Carousel

#### Scenario: Popular Items carousel displays with navigation

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see a "Popular Items" heading with prev/next navigation arrows

#### Scenario: Carousel shows product cards

- **GIVEN** I visit the Merchpick homepage
- **THEN** the carousel should display multiple product cards

#### Scenario: Carousel navigation arrows are clickable

- **GIVEN** I visit the Merchpick homepage
- **THEN** the prev and next arrows should be visible and clickable

### Feature: Footer

#### Scenario: Footer displays four content columns

- **GIVEN** I visit the Merchpick homepage
- **THEN** the footer should contain four sections: "Help", "About", "Shop", and newsletter signup

#### Scenario: Footer has newsletter signup form

- **GIVEN** I visit the Merchpick homepage
- **THEN** I should see an email input field and a "Subscribe" button in the footer

#### Scenario: Footer shows copyright text

- **GIVEN** I visit the Merchpick homepage
- **THEN** the footer should display a copyright notice with the current year

#### Scenario: Footer links to Component Dock

- **GIVEN** I visit the Merchpick homepage
- **THEN** the footer should contain a link to https://www.componentdock.com/

## Verification checklist

- [ ] All sections from original template are present in same order
- [ ] Design tokens match: brand teal `#0fb78d`, fonts Muli/Libre Baskerville
- [ ] Product grid displays 6 items in 3-column layout
- [ ] Badges (New/Sale) styled correctly with appropriate colors
- [ ] Hero slider uses background images with centered white text
- [ ] Features strip has 3 items with icons on light gray background
- [ ] Weekly deal banner has background image with overlay text
- [ ] Popular items carousel with navigation arrows
- [ ] Footer has 4 columns including newsletter signup
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] All images use picsum.photos placeholder URLs
- [ ] Google Fonts loaded via link tag in index.html
- [ ] Icons from lucide-react (replacing Bootstrap icons)
- [ ] Tests achieve 100% coverage
