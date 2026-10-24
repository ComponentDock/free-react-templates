# Template: Chic (Fashion E-Commerce)
<!-- prep-status: shipped-as=silkthread -->
> **SHIPPED-UNDER** — the ColorLib `malefashion` design this prep describes already
> ships as `apps/silkthread` (<https://silkthread.free.componentdock.com>).
> Do not scaffold `apps/chic`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-silkthread/spec.md`.

## Purpose

Recreation of ColorLib "Malefashion" — a men's fashion e-commerce template with hero slider, promotional banners, product grid, categories, Instagram feed, and blog/latest trends section.

- **ColorLib source:** [Malefashion](https://colorlib.com/wp/template/malefashion/)
- **Preview URL:** https://preview.colorlib.com/theme/malefashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `chic` (apps/chic, @free-react-templates/chic)

## Design Tokens

Extracted from the preview's CSS (style.css):

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#e53637` | Accent red — hero subtitle, footer heart, sale badges, links |
| `--color-dark` | `#111111` | Header top bar, site-btn bg, footer bg, headings, product labels |
| `--color-black` | `#000000` | Primary CTA button bg |
| `--color-text` | `#333333` | Body text |
| `--color-text-secondary` | `#707070` | Secondary text |
| `--color-text-muted` | `#b7b7b7` | Footer text, copyright |
| `--color-bg` | `#f5f5f5` | Page background |
| `--color-bg-warm` | `#f3f2ee` | Categories section background |
| `--color-white` | `#ffffff` | Cards, inputs, dropdown bg |
| `--font-family` | `"Nunito Sans", sans-serif` | Body + headings |
| `--btn-radius` | `0` | Sharp/square buttons (no border-radius) |
| `--btn-padding` | `14px 30px` | Standard button padding |
| `--btn-font-weight` | `700` | Bold buttons |
| `--btn-text-transform` | `uppercase` | All buttons |
| `--btn-letter-spacing` | `4px` | Primary CTA button |
| `--radius-pill` | `60px` | Rounded elements (some category items) |
| `--radius-circle` | `50%` | Circular elements |

### Visual Design Notes (from screenshot)

- **Overall:** Clean, minimal, masculine fashion e-commerce aesthetic. White/light gray background with dark (#111111) accents. Red (#e53637) used sparingly for emphasis.
- **Header:** Dark (#111111) top bar with white text (shipping info, sign in, FAQs, currency). White nav bar below with centered logo "Male fashion." and nav links. Right side: search, wishlist, cart with price.
- **Hero:** Full-width slider with large product photo (model in brown turtleneck), left-aligned text overlay. Subtitle "SUMMER COLLECTION" in red uppercase with letter-spacing. Large heading "Fall - Winter Collections 2030" in dark. Descriptive paragraph. Black "SHOP NOW →" button with arrow icon. Social media icons at bottom left.
- **Banners:** 3-column grid with product images and overlay text. "Clothing Collections 2030", "Accessories", "Shoes Spring 2030". Underlined "SHOP NOW" links.
- **Products:** 4-column grid of product cards with images, labels (New/Sale), product names, and prices. Tabbed filter: Best Sellers, New Arrivals, Hot Sales.
- **Categories:** Warm gray (#f3f2ee) background. Centered product image (bag) with countdown timer for sale. "Multi-pocket Chest Bag Black" heading, "$29.99" price, Days/Hours/Minutes/Seconds countdown.
- **Instagram:** 6-image grid (3×2) showing fashion photos. "Instagram" heading centered.
- **Latest Blog:** 3-column blog post cards with images, dates, and article titles: "What Curling Irons Are The Best Ones", "Eternity Bands Do Last Forever", "The Health Benefits Of Sunglasses".
- **Footer:** Dark (#111111) background. 4-column layout: About (logo + description), Shopping links, Information links, Newsletter signup. Copyright bar at bottom with heart icon in red.

## Requirements

### Header

Feature: Chic Header

#### Scenario: Top bar displays shipping info and account links

- **GIVEN** the user is on the chic homepage
- **THEN** a dark top bar shows "Free shipping, 30-day return or refund guarantee."
- **AND** the top bar has "SIGN IN", "FAQS", and "USD" currency selector links

#### Scenario: Main navigation displays correctly

- **GIVEN** the user is on the chic homepage
- **THEN** the nav bar shows the logo "Chic."
- **AND** navigation links include "Home", "Shop", "Pages", "About Us", "Blog", "Contacts"
- **AND** the nav bar shows search, wishlist, and cart icons with "$0.00"

### Hero Section

Feature: Chic Hero

#### Scenario: Hero slider shows collection info

- **GIVEN** the user views the hero section
- **THEN** the subtitle reads "SUMMER COLLECTION" in red uppercase
- **AND** the heading reads "Fall - Winter Collections 2030"
- **AND** a description paragraph is displayed
- **AND** a "SHOP NOW →" black button is visible

#### Scenario: Hero has social media links

- **GIVEN** the user views the hero section
- **THEN** social media icons (Facebook, Twitter, Pinterest, Instagram) are shown below the CTA

### Banner Section

Feature: Chic Banners

#### Scenario: Three promotional banners are displayed

- **GIVEN** the user scrolls to the banner section
- **THEN** three banners are shown side by side
- **AND** banner 1 shows "Clothing Collections 2030" with "SHOP NOW" link
- **AND** banner 2 shows "Accessories" with "SHOP NOW" link
- **AND** banner 3 shows "Shoes Spring 2030" with "SHOP NOW" link

### Product Section

Feature: Chic Products

#### Scenario: Product grid displays with tab filters

- **GIVEN** the user scrolls to the product section
- **THEN** tab filters show "Best Sellers", "New Arrivals", "Hot Sales"
- **AND** "Best Sellers" is active by default
- **AND** a grid of product cards is displayed

#### Scenario: Product card shows details

- **GIVEN** a product card is rendered
- **THEN** it shows the product image
- **AND** it shows the product name
- **AND** it shows the price
- **AND** it may show a "New" or "Sale" label

#### Scenario: Tab switching works

- **GIVEN** the user clicks "New Arrivals" tab
- **THEN** the product grid updates to show new arrivals
- **AND** "New Arrivals" tab becomes active

### Categories Section

Feature: Chic Categories

#### Scenario: Featured product with countdown

- **GIVEN** the user scrolls to the categories section
- **THEN** the section has a warm gray (#f3f2ee) background
- **AND** a featured product image is centered
- **AND** the product name "Multi-pocket Chest Bag Black" is shown
- **AND** the price "$29.99" is displayed
- **AND** a countdown timer shows Days, Hours, Minutes, Seconds

### Instagram Section

Feature: Chic Instagram

#### Scenario: Instagram image grid

- **GIVEN** the user scrolls to the Instagram section
- **THEN** the heading "Instagram" is displayed
- **AND** a 3×2 grid of 6 fashion images is shown
- **AND** images are clickable links

### Latest Blog Section

Feature: Chic Latest Blog

#### Scenario: Blog posts are displayed

- **GIVEN** the user scrolls to the latest section
- **THEN** the heading "Fashion New Trends" is shown
- **AND** 3 blog post cards are displayed in a row
- **AND** each card shows an image, date, and article title
- **AND** post titles are "What Curling Irons Are The Best Ones", "Eternity Bands Do Last Forever", "The Health Benefits Of Sunglasses"

### Footer

Feature: Chic Footer

#### Scenario: Footer layout and content

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark (#111111) background
- **AND** column 1 shows the logo and about text
- **AND** column 2 shows Shopping links: "Clothing Store", "Trending Shoes", "Accessories", "Sale"
- **AND** column 3 shows Information links: "Contact Us", "Payment Methods", "Delivery", "Return & Exchanges"
- **AND** column 4 shows a Newsletter signup with email input and button
- **AND** a copyright bar at the bottom reads "© 2026 All rights reserved" with Component Dock link

#### Scenario: Footer newsletter form

- **GIVEN** the user is in the newsletter section of the footer
- **THEN** an email input field with placeholder text is shown
- **AND** a submit button is positioned to the right of the input

## Verification checklist

- [ ] Header: dark top bar + white nav bar with logo and navigation
- [ ] Hero: slider with subtitle, heading, description, CTA button, social icons
- [ ] Banners: 3-column promotional grid with overlay text
- [ ] Products: tabbed grid (Best Sellers / New Arrivals / Hot Sales) with card components
- [ ] Categories: warm gray background, featured product with countdown timer
- [ ] Instagram: 3×2 image grid with heading
- [ ] Latest Blog: 3-column blog post cards
- [ ] Footer: dark bg, 4-column layout, newsletter form, copyright with Component Dock
- [ ] Design tokens: #e53637 accent, #111111 dark, Nunito Sans font, sharp buttons
- [ ] Responsive: mobile-friendly layout (hero stacks, banners stack, products 2-col)
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
