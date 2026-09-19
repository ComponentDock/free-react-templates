# Template: Shopcraft (E-Commerce Store Template)

## Purpose

Shopcraft is a single-page e-commerce store template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Shop" website
template design (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shop" — e-commerce / shop template
  (source: https://colorlib.com/wp/template/shop/).
- **Preview URL:** `https://preview.colorlib.com/theme/shop/`
- **Screenshot:** `shop-free-ecommerce-website-template.jpg`
- **Font:** Poppins (Google Fonts)
- **Brand color:** #f41068 (hot pink/magenta)
- **Body text:** #777777, Headings: #222222
- **Light background:** #f9f9ff

## Sections (in order)

1. TopBar — phone, email, login (dark bg)
2. Navbar — logo, Home/Category/Men/Women/Latest/Pages
3. Hero Banner — "Flat 75% Off", "It's Happening this Season!", Purchase Now
4. Category Grid — "Shop for Different Categories", 4 cards with hover overlay
5. Men Products — dark overlay bg, 4 product cards with hover overlay icons
6. Women Products — light bg, 4 product cards
7. Countdown Timer — "Exclusive Hot Deal Ends in:", days/hours/minutes/seconds
8. Related Products — product cards with image + name + price
9. Brand Logos — 5 partner logos
10. Footer — About Us, Newsletter, Instagram Feed, Follow Us, Component Dock link

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with phone number, email address, and a login link.

#### Scenario: TopBar renders contact info

- **WHEN** the user visits the page
- **THEN** a top bar is visible containing a phone number
- **AND** an email address is displayed
- **AND** a login link is present

### Requirement: Navbar provides navigation

The template SHALL display a navigation bar with logo and links to main sections.

#### Scenario: Navbar renders all links

- **WHEN** the user visits the page
- **THEN** a navigation bar with a logo is visible
- **AND** nav links include Home, Category, Men, Women, Latest
- **AND** a Pages dropdown menu is present

### Requirement: Hero banner displays promotional content

The template SHALL display a full-width hero banner with sale messaging and a CTA button.

#### Scenario: Hero renders promotional content

- **WHEN** the user visits the page
- **THEN** the hero banner displays "Flat 75% Off"
- **AND** the heading "It's Happening this Season!" is visible
- **AND** a "Purchase Now" button is present

### Requirement: Category grid shows product categories

The template SHALL display a grid of product category cards with hover overlay titles.

#### Scenario: Category grid renders categories

- **WHEN** the user scrolls to the category section
- **THEN** the heading "Shop for Different Categories" is visible
- **AND** category cards are displayed for Women, Couple, and Men
- **AND** each card shows its title

### Requirement: Men's products section with dark overlay

The template SHALL display men's products on a dark overlay background with hover action icons.

#### Scenario: Men's products render correctly

- **WHEN** the user scrolls to the men's products section
- **THEN** the heading "New released Products for Men" is visible
- **AND** product cards with images, names, and prices are displayed
- **AND** hover overlay shows action icons (heart, layers, cart, expand)

### Requirement: Women's products section

The template SHALL display women's products on a light background.

#### Scenario: Women's products render correctly

- **WHEN** the user scrolls to the women's products section
- **THEN** the heading "New released Products for Women" is visible
- **AND** product cards with images, names, and prices are displayed

### Requirement: Countdown timer for deals

The template SHALL display a countdown timer with days, hours, minutes, and seconds.

#### Scenario: Countdown timer renders

- **WHEN** the user scrolls to the countdown section
- **THEN** "Exclusive Hot Deal Ends in:" heading is visible
- **AND** countdown units (Days, Hours, Minutes, Seconds) are displayed
- **AND** a "Shop Now" button is present

### Requirement: Related products grid

The template SHALL display a grid of related product cards with images, names, and prices.

#### Scenario: Related products render

- **WHEN** the user scrolls to the related products section
- **THEN** "Related Searched Products" heading is visible
- **AND** product cards with images, names, and prices are displayed

### Requirement: Brand logos row

The template SHALL display a row of brand/partner logos.

#### Scenario: Brand logos render

- **WHEN** the user scrolls to the brand section
- **THEN** brand logo images are displayed in a row

### Requirement: Footer with Component Dock link

The template SHALL display a footer with About Us, Newsletter, Instagram Feed, Follow Us sections, and a link to Component Dock.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** an About Us column with description is visible
- **AND** a Newsletter signup form is present
- **AND** social media links are present
- **AND** a "More templates at Component Dock" link to https://www.componentdock.com/ is present
