# Template: Attire

Recreation of ColorLib **Fashi** (https://colorlib.com/wp/template/fashi/).
Preview: https://preview.colorlib.com/theme/fashi/

## Purpose

Attire is a fashion e-commerce landing page template with a golden amber palette, clean lines, and the Muli typeface. It recreates the ColorLib Fashi design under a different name with React 19 + Tailwind CSS 4.

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#e7ab3c` | Golden amber — used for buttons, accents, price highlights, countdown numbers |
| Font family | `"Muli", sans-serif` | Google Fonts, weights 300–900 |
| Primary button | `#e7ab3c` bg, `#fff` text, `font-weight: 700`, `text-transform: uppercase`, no border-radius (square) | |
| Dark bg | `#191919` | Footer background |
| Text primary | `#252525` | Headings, nav |
| Text secondary | `#636363` | Body copy, descriptions |
| Light gray bg | `#e5e5e5` | Input backgrounds |
| White | `#ffffff` | Cards, countdown boxes |
| Off-card circle | `#e7ab3c` bg, `border-radius: 50%` | Hero badge |
| Countdown timer | `border-radius: 5px`, white bg, `#e7ab3c` numbers | Deal section |
| Section padding | `spad` class → ~80px vertical padding | |

## Requirements

### Requirement: Header top bar

The template SHALL display a top bar with contact information and utility links.

#### Scenario: Contact info visible

- **WHEN** the page loads
- **THEN** an email address and phone number are displayed in the top bar
- **AND** a login link and social media icons (Facebook, Twitter, LinkedIn, Pinterest) are present

### Requirement: Main header with logo and search

The template SHALL display a main header row with the brand logo, a category search bar, and wishlist/cart icons.

#### Scenario: Logo and search bar

- **WHEN** the page loads
- **THEN** the Attire logo is visible
- **AND** a search input with an "All Categories" dropdown and search button is present

#### Scenario: Wishlist and cart icons

- **WHEN** the page loads
- **THEN** a wishlist icon with count badge and a cart icon with count badge are visible

### Requirement: Navigation bar

The template SHALL display a horizontal navigation menu below the header.

#### Scenario: Desktop nav links

- **WHEN** the page loads
- **THEN** navigation links for Home, Shop, Collection, Blog, Contact, and Pages are visible

#### Scenario: Collection dropdown

- **WHEN** the user hovers over Collection
- **THEN** a dropdown with Men's, Women's, and Kid's links appears

### Requirement: Hero carousel

The template SHALL display a full-width hero image carousel with headline overlays and call-to-action buttons.

#### Scenario: Hero slides visible

- **WHEN** the page loads
- **THEN** a carousel with at least 2 hero slides is displayed
- **AND** each slide has a background image, a tag line, a heading, description text, and a "Shop Now" button

#### Scenario: Off-card badge

- **WHEN** a hero slide is active
- **THEN** a circular badge showing a percentage discount is visible on the slide

### Requirement: Category banners section

The template SHALL display a three-column banner section with category images and labels.

#### Scenario: Three category banners

- **WHEN** the page loads
- **THEN** three banner cards are visible labeled "Men's", "Women's", and "Kid's"
- **AND** each banner has a background image and an overlay heading

### Requirement: Women's products section

The template SHALL display a women's product showcase with a large featured image and a product carousel with filter tabs.

#### Scenario: Women's section layout

- **WHEN** the page loads
- **THEN** a large image panel labeled "Women's" with a "Discover More" link is visible on the left
- **AND** filter tabs for Clothings, HandBag, Shoes, and Accessories are present

#### Scenario: Product carousel

- **WHEN** the page loads
- **THEN** at least 4 product cards are visible in the women's product carousel
- **AND** each product card shows an image, name, and price
- **AND** products with original prices show both current and strikethrough prices

### Requirement: Deal of the week section

The template SHALL display a deal-of-the-week section with a countdown timer on a background image.

#### Scenario: Deal content

- **WHEN** the page loads
- **THEN** a "Deal Of The Week" heading is visible
- **AND** a product name and price are shown
- **AND** a countdown timer displays Days, Hours, Minutes, and Seconds

#### Scenario: Shop Now CTA

- **WHEN** the page loads
- **THEN** a "Shop Now" primary button is visible below the countdown

### Requirement: Men's products section

The template SHALL display a men's product showcase mirroring the women's section with a product carousel and large featured image.

#### Scenario: Men's section layout

- **WHEN** the page loads
- **THEN** a product carousel is visible on the left with filter tabs
- **AND** a large image panel labeled "Men's" with a "Discover More" link is on the right

### Requirement: Instagram photo strip

The template SHALL display a full-width row of six Instagram-style image thumbnails with hover overlay.

#### Scenario: Six images

- **WHEN** the page loads
- **THEN** six equal-width image tiles are visible in a horizontal row
- **AND** each tile has an Instagram icon and handle on hover

### Requirement: Blog section

The template SHALL display a blog section titled "From The Blog" with three article cards.

#### Scenario: Three blog cards

- **WHEN** the page loads
- **THEN** three blog article cards are visible in a row
- **AND** each card shows an image, date, comment count, title, and excerpt text

### Requirement: Partner logos carousel

The template SHALL display a carousel of partner/brand logos.

#### Scenario: Partner logos visible

- **WHEN** the page loads
- **THEN** a row of partner brand logos is displayed in a carousel

### Requirement: Footer with Component Dock link

The template SHALL have a footer with logo, contact info, navigation columns, newsletter form, and Component Dock attribution.

#### Scenario: Footer columns

- **WHEN** the page loads
- **THEN** the footer displays a logo, address, phone, email, and social media links
- **AND** an "Information" column with links is present
- **AND** a "My Account" column with links is present

#### Scenario: Newsletter form

- **WHEN** the page loads
- **THEN** a "Join Our Newsletter Now" heading with an email input and Subscribe button is visible in the footer

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "www.componentdock.com" is present in the footer

#### Scenario: Copyright and payment

- **WHEN** the page loads
- **THEN** a copyright bar with payment method icons is visible at the bottom of the footer

### Requirement: Document title

The template SHALL set the browser tab title.

#### Scenario: Title on load

- **WHEN** the page loads
- **THEN** the document title is "Attire — Fashion E-Commerce Template"

## Verification checklist

- [ ] Header top bar with contact info, login, social icons
- [ ] Main header with logo, category search, wishlist, cart
- [ ] Navigation bar with Home, Shop, Collection, Blog, Contact, Pages
- [ ] Hero carousel with 2+ slides, off-card badge, CTA buttons
- [ ] Three category banners (Men's, Women's, Kid's)
- [ ] Women's product section with featured image, filter tabs, product carousel
- [ ] Deal of the week with countdown timer
- [ ] Men's product section mirroring women's
- [ ] Instagram photo strip (6 images)
- [ ] Blog section "From The Blog" with 3 cards
- [ ] Partner logos carousel
- [ ] Footer with logo, contact, nav columns, newsletter, Component Dock link
- [ ] Copyright bar with payment icons
- [ ] Brand color #e7ab3c used consistently for buttons and accents
- [ ] Font family Muli loaded from Google Fonts
- [ ] Primary buttons: uppercase, bold, no border-radius
- [ ] Footer background #191919
- [ ] All placeholder images use picsum.photos with deterministic seeds
