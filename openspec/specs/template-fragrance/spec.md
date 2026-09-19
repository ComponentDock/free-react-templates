# Spec: Fragrance — Fashion E-Commerce Landing Template

## Purpose

Recreation of ColorLib "Aroma" (https://colorlib.com/wp/template/aroma/) as "Fragrance" — a fashion e-commerce landing page with navbar, hero banner, product carousels, offer section, blog section, newsletter, and 4-column footer. Built with React 19, Tailwind CSS 4, and TypeScript.

**Replication reference:**
- Source: ColorLib "Aroma" — Aroma Shop
- Preview: https://preview.colorlib.com/theme/aroma/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aroma-free-template.jpg
- Preview fetched: Yes (30,851 bytes HTML, 56,623 bytes style.css)
- CSS tokens extracted: Yes — brand colors, fonts, button styles, backgrounds

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| brand | `#384aeb` (blue-purple) | Primary accent, buttons, hover states, nav active, overlays |
| dark | `#002347` (navy) | Footer background, footer-bottom |
| body | `#222` (near-black) | Headings, nav text, product titles |
| secondary | `#777` (medium gray) | Body text, descriptions, secondary text |
| light-bg | `#F1F6F7` (light blue-gray) | Hero banner background, blog sidebar, form backgrounds |
| white | `#fff` | Card backgrounds, text on dark, subscribe card |
| red | `#c5322d` | Register button, sale accents |
| font-heading | Oswald (Google Fonts) | Section headings, nav, footer titles |
| font-body | Roboto (Google Fonts) | Body text, descriptions, form labels |
| button-radius | `30px` (pill/rounded) | All primary buttons are pill-shaped |
| button-hover | transparent + `#384aeb` border | Button hover inverts to outline style |
| hero-stripe | `#384aeb` | Left-side accent stripe on hero banner (20% width desktop) |
| subscribe-shadow | `rgba(56,74,235,0.1)` | Blue-tinted shadow under subscribe card |

## Requirements

### Requirement: Top navigation bar

A fixed/sticky top navbar with the Fragrance logo on the left, navigation links (Home, Shop with dropdown, Blog with dropdown, Pages with dropdown, Contact), and utility icons (search, cart with badge, Buy Now button).

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop (>= 992px)
- **THEN** the navbar is visible at the top
- **AND** the "Fragrance" logo is displayed on the left
- **AND** nav links "Home", "Shop", "Blog", "Pages", "Contact" are rendered
- **AND** search icon, cart icon with count badge "3", and "Buy Now" button are on the right

#### Scenario: Shop dropdown

- **WHEN** the user hovers over "Shop" on desktop
- **THEN** a dropdown appears with: Shop Category, Product Details, Product Checkout, Confirmation, Shopping Cart

#### Scenario: Mobile menu toggle

- **WHEN** the page loads on mobile (< 992px)
- **THEN** a hamburger toggle is visible
- **WHEN** the user clicks the toggle
- **THEN** the nav menu expands vertically

### Requirement: Hero banner with image and CTA

A two-column hero section with a product image on the left (hidden on small screens) and headline text "Shop is fun" / "Browse Our Premium Product" with description and "Browse Now" button on the right. The hero has a light blue-gray background (#F1F6F7) with a blue accent stripe on the left.

#### Scenario: Hero renders on desktop

- **WHEN** the page loads on desktop
- **THEN** the hero shows a product image on the left
- **AND** "Shop is fun" subtitle and "Browse Our Premium Product" heading on the right
- **AND** a "Browse Now" button is visible

#### Scenario: Hero image hidden on mobile

- **WHEN** the page loads on mobile (< 576px)
- **THEN** the hero image is hidden (d-none d-sm-block)
- **AND** the headline text fills the full width

### Requirement: Hero product carousel

A 3-slide carousel below the hero, each slide showing a product image with an overlay (product name "Wireless Headphone", category "Accessories Item"). Slides animate on hover.

#### Scenario: Carousel renders 3 slides

- **WHEN** the carousel section loads
- **THEN** 3 product slides are displayed
- **AND** each slide shows a product image

#### Scenario: Hover reveals slide overlay

- **WHEN** the user hovers over a carousel slide
- **THEN** an overlay appears with the product name and category
- **AND** the overlay has a blue (#384aeb) background with white text

### Requirement: Trending products grid

An 8-product grid with section heading "Trending Product", each card showing an image, hover action overlay (search, cart, heart icons), category label, product name, and price "$150.00".

#### Scenario: Trending products render

- **WHEN** the trending section loads
- **THEN** 8 product cards are displayed in a 4-column grid
- **AND** each card shows category, name, and price "$150.00"

#### Scenario: Hover reveals action icons

- **WHEN** the user hovers over a product card
- **THEN** action icons (search, cart, heart) slide up from the bottom
- **AND** icons have blue (#8894ff) background, white color

### Requirement: Offer/parallax promotional section

A full-width parallax background section with "Up To 50% Off" heading, "Winter Sale" subheading, description text, and "Shop Now" button.

#### Scenario: Offer section renders

- **WHEN** the offer section is visible
- **THEN** "Up To 50% Off" and "Winter Sale" headings are displayed
- **AND** a "Shop Now" button is present
- **AND** the background has a parallax image effect

### Requirement: Best sellers carousel

A carousel of 8+ product cards under "Best Sellers" heading, similar to trending products but in a horizontal scrollable carousel.

#### Scenario: Best sellers carousel renders

- **WHEN** the best sellers section loads
- **THEN** multiple product cards are displayed in a carousel
- **AND** each card shows image, category, name, and price "$150.00"

### Requirement: Blog/latest news section

A 3-column blog card grid under "Latest News" heading. Each card has an image, metadata (author "By Admin", comments count), title, excerpt, and "Read More" link.

#### Scenario: Blog cards render

- **WHEN** the blog section loads
- **THEN** 3 blog cards are displayed
- **AND** each card shows an image, author, comment count, title, and excerpt
- **AND** a "Read More" link is present on each card

#### Scenario: Blog card hover

- **WHEN** the user hovers over a blog card
- **THEN** the title and "Read More" link change to brand color (#384aeb)

### Requirement: Newsletter/subscribe section

A centered subscription card with "Get Update From Anywhere" heading, description text, email input, and "Subscribe Now" button. The card has a white background with a blue-tinted shadow.

#### Scenario: Subscribe section renders

- **WHEN** the subscribe section is visible
- **THEN** "Get Update From Anywhere" heading is displayed
- **AND** an email input with placeholder "Enter your email" is present
- **AND** a "Subscribe Now" button is rendered

#### Scenario: Subscribe form submission

- **WHEN** the user enters an email and clicks "Subscribe Now"
- **THEN** the form triggers a submit action (prevent default)

### Requirement: 4-column footer

A dark navy footer (#002347) with 4 columns: "Our Mission" (brand description), "Quick Links" (Home, Shop, Blog, Product, Brand, Contact), "Gallery" (6 thumbnail images), "Contact Us" (address, phone, email). Footer bottom has copyright + Component Dock link.

#### Scenario: Footer renders all columns

- **WHEN** the footer is visible
- **THEN** 4 columns are displayed: Mission, Quick Links, Gallery, Contact Us
- **AND** the footer background is dark navy (#002347)
- **AND** footer titles use Oswald font in white

#### Scenario: Footer bottom renders

- **WHEN** the footer bottom is visible
- **THEN** copyright text and Component Dock link are displayed

### Requirement: Responsive layout

The layout adapts from desktop multi-column to stacked mobile layout.

#### Scenario: Desktop layout

- **WHEN** viewport >= 992px
- **THEN** navbar is horizontal, hero is two-column, product grids are 4 columns

#### Scenario: Mobile layout

- **WHEN** viewport < 768px
- **THEN** navbar collapses to hamburger, hero is single-column, grids stack

## Verification Checklist

- [ ] Navbar renders logo, nav links, dropdowns, search, cart badge, Buy Now
- [ ] Mobile hamburger toggles nav menu
- [ ] Hero banner shows image + headline + CTA with blue accent stripe
- [ ] Hero carousel renders 3 slides with hover overlays
- [ ] Trending products grid shows 8 cards with hover action icons
- [ ] Offer section renders with parallax background and "Shop Now" CTA
- [ ] Best sellers carousel renders product cards
- [ ] Blog section shows 3 cards with author, comments, title, excerpt, Read More
- [ ] Subscribe section renders heading, email input, Subscribe Now button
- [ ] Subscribe form handles submit (prevent default)
- [ ] Footer renders 4 columns: Mission, Quick Links, Gallery, Contact
- [ ] Footer bottom shows copyright + Component Dock link
- [ ] Brand color #384aeb used for buttons, accents, hover states
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] Oswald headings + Roboto body text via Google Fonts
- [ ] All images use picsum-seeded placeholders
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links Component Dock
