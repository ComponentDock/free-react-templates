# Template: Catalogly (E-commerce Shop)

## Purpose

Recreation of the ColorLib "ListAshop" template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/listashop/
- **Preview:** https://preview.colorlib.com/theme/listashop/
- **New name:** `catalogly` (app: `apps/catalogly`, package: `@free-react-templates/catalogly`)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript
- **Category:** E-commerce / Shop

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token                  | Value                          | Notes                                      |
| ---------------------- | ------------------------------ | ------------------------------------------ |
| Brand color            | `#c5322d`                      | Deep red — buttons, links, accents         |
| Font family (headings) | `"Roboto", sans-serif`         | weight 500                                 |
| Font family (body)     | `"Roboto", sans-serif`         | weight normal (400)                        |
| Font family (imported) | `"Poppins"`                    | 200–700, available but Roboto primary      |
| Body text color        | `#777777`                      | Medium gray                                |
| Heading text color     | `#222222`                      | Near-black                                 |
| Banner background      | `#e8f0f2`                      | Light blue-gray                            |
| Timer section bg       | `#e5ecee`                      | Light blue-gray                            |
| Footer background      | `#e5ecee`                      | Same as timer section                      |
| CTA button bg          | `#c5322d`                      | Red, white text, no border-radius (square) |
| CTA button hover       | transparent bg, `#c5322d` text | Inverted on hover                          |
| Banner CTA button      | white bg, `border-radius: 5px` | Rounded corners, dark text                 |
| Border/divider         | `#eeeeee`                      | Light gray borders                         |
| Top menu bg            | `#04091e`                      | Very dark navy/black                       |

## Section Structure (from preview DOM)

1. **Top Bar** — dark background (#04091e), email link "support@colorlib.com", "Welcome to Catalogue", social icons (Facebook, Twitter, Dribbble, Behance)
2. **Navbar** — white background, logo left, nav links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), cart icon + search icon right
3. **Home Banner** — full-width, light blue-gray bg (#e8f0f2), left column with heading "Georgia Helmet Collections!" + lorem ipsum + white rounded CTA button, right column with product image
4. **Hot Deals Feature** — two side-by-side image cards "Hot Deals of this Month" with "Shop Now" links
5. **Featured Products** — centered title "Featured Products", owl-carousel of product cards (image + heart/cart icons + product name + price)
6. **Timer / CTA Section** — light blue-gray bg (#e5ecee), centered heading with countdown timer display (days, hours, minutes, seconds)
7. **Latest Products** — carousel of latest products, same card style as featured
8. **Client Logos** — row of client/partner logos
9. **Most Products** — additional product grid/carousel
10. **Footer** — light blue-gray bg (#e5ecee), 4-column layout: About Us, Newsletter (email input + arrow submit), Instagram Feed (8 thumbnail images), Follow Us (social icons). Footer bottom: copyright with heart icon link

## Requirements

### Requirement: Navbar renders with logo and navigation links

The navbar SHALL display a logo on the left, navigation links (Home, Shop, Blog, Pages, Contact), and cart/search icons on the right.

#### Scenario: Navbar renders with logo and navigation links

- **WHEN** the user loads the Catalogly page
- **THEN** the navbar displays a logo on the left
- **AND** navigation links include "Home", "Shop", "Blog", "Pages", "Contact"
- **AND** a cart icon and search icon appear on the right

#### Scenario: Shop dropdown shows sub-pages

- **WHEN** the user hovers over the "Shop" nav link
- **THEN** a dropdown appears with "Shop Category", "Product Details", "Product Checkout", "Shopping Cart", "Confirmation"

#### Scenario: Blog dropdown shows sub-pages

- **WHEN** the user hovers over the "Blog" nav link
- **THEN** a dropdown appears with "Blog", "Blog Details"

### Requirement: Home banner displays heading, description, and CTA

The home banner SHALL show a heading, descriptive paragraph, white rounded CTA button, and product image.

#### Scenario: Banner displays heading and CTA

- **WHEN** the user loads the Catalogly page
- **THEN** a banner section shows a heading "Georgia Helmet Collections!"
- **AND** a descriptive paragraph below the heading
- **AND** a white rounded CTA button "View Collection"
- **AND** a product image occupies the right column

### Requirement: Hot deals section shows two deal cards

The hot deals section SHALL display two side-by-side image cards with overlay text and Shop Now links.

#### Scenario: Two hot deal cards render

- **WHEN** the user scrolls to the hot deals section
- **THEN** two side-by-side cards display
- **AND** each card shows a product image
- **AND** each card has text "Hot Deals of this Month" and a "Shop Now" link

### Requirement: Featured products carousel renders product cards

The featured products section SHALL show a centered title, subtitle, and a carousel of product cards with images, icons, names, and prices.

#### Scenario: Featured products carousel renders

- **WHEN** the user scrolls to the featured products section
- **THEN** a centered heading "Featured Products" appears
- **AND** a subtitle "Who are in extremely love with eco friendly system."
- **AND** a carousel of product cards is visible
- **AND** each product card shows an image, heart icon, cart icon, product name, and price

### Requirement: Timer section displays countdown and CTA

The timer section SHALL display a light blue-gray background with a countdown timer (days, hours, minutes, seconds) and a CTA button.

#### Scenario: Countdown timer displays time units

- **WHEN** the user scrolls to the timer section
- **THEN** a light blue-gray background section appears
- **AND** a countdown shows days, hours, minutes, seconds
- **AND** a CTA button is present

### Requirement: Latest products section renders

The latest products section SHALL display a carousel of product cards using the same layout as featured products.

#### Scenario: Latest products section renders

- **WHEN** the user scrolls to the latest products section
- **THEN** a carousel of product cards appears
- **AND** each card follows the same layout as featured products

### Requirement: Client logos row renders

The client logos section SHALL display a row of client/partner logo images.

#### Scenario: Client logos row renders

- **WHEN** the user scrolls to the client logos section
- **THEN** a row of client/partner logo images is displayed

### Requirement: Footer renders four columns with newsletter and social links

The footer SHALL have four columns (About Us, Newsletter, Instagram Feed, Follow Us) and a bottom bar with copyright text linking to Component Dock.

#### Scenario: Footer renders four columns

- **WHEN** the user scrolls to the footer
- **THEN** four columns appear: About Us, Newsletter, Instagram Feed, Follow Us
- **AND** the Newsletter column has an email input and submit button
- **AND** the Instagram Feed shows 8 thumbnail images
- **AND** the Follow Us column shows social icons (Facebook, Twitter, Dribbble, Behance)
- **AND** a footer bottom bar shows copyright text with a heart icon

#### Scenario: Newsletter form has email input

- **WHEN** the user is in the Newsletter footer column
- **THEN** an email input with placeholder "Email Address" is present
- **AND** a submit button with arrow icon is next to the input

## Verification Checklist

- [ ] Navbar renders with logo, nav links, dropdowns, cart/search icons
- [ ] Home banner shows heading, description, white CTA button, product image
- [ ] Hot deals section shows two side-by-side cards
- [ ] Featured products carousel renders with product cards
- [ ] Timer/CTA section has countdown display and button
- [ ] Latest products carousel renders
- [ ] Client logos row renders
- [ ] Footer has 4 columns: About, Newsletter, Instagram, Follow Us
- [ ] Newsletter email input and submit button work
- [ ] Footer bottom has copyright with heart icon
- [ ] Design tokens match: #c5322d brand, Roboto font, #e8f0f2/#e5ecee backgrounds
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
