# Template: Bodega (E-Commerce / Fashion Store)

## Purpose

Recreation of the ColorLib **Store** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** [ColorLib Store](https://colorlib.com/wp/template/store/)
- **Preview:** https://preview.colorlib.com/theme/store/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/store-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Navbar displays logo and navigation

The navbar SHALL display the "Bodega" logo and navigation links (Home, Shop, Blog, About, Contact) with a cart icon showing item count.

#### Scenario: Navbar renders logo and links

- **GIVEN** the user visits the homepage
- **WHEN** the page loads
- **THEN** the navbar shows the "Bodega" logo on the left
- **AND** the navigation links are: Home, Shop, Blog, About, Contact
- **AND** a cart icon with item count is visible

#### Scenario: Shop dropdown shows sub-pages

- **GIVEN** the navbar is visible
- **WHEN** the user hovers over "Shop"
- **THEN** a dropdown appears with: Product Detail, Shipping Cart, Checkout, Order Complete, Wishlist

### Requirement: Hero slider displays promotional slides

The hero section SHALL display a full-width slider with 3 promotional slides that auto-rotate.

#### Scenario: Hero slider displays 3 promotional slides

- **GIVEN** the user is on the homepage
- **WHEN** the hero section loads
- **THEN** a full-width hero slider is visible
- **AND** slide 1 shows "Men's Jeans Collection" with a Shop Now button
- **AND** slide 2 shows "Huge Sale 45% off" with a Shop Now button
- **AND** slide 3 shows "New Arrival up to 30% off" with a Shop Now button

#### Scenario: Slides auto-rotate

- **GIVEN** the hero slider is displayed
- **WHEN** 5 seconds pass without user interaction
- **THEN** the slider advances to the next slide

### Requirement: Featured products grid displays category cards

The featured products section SHALL display a 2×2 grid of category cards with background images and dark overlays.

#### Scenario: Featured products grid shows 4 category cards

- **GIVEN** the user scrolls to the featured products section
- **WHEN** the section renders
- **THEN** a 2×2 grid of product category cards is visible
- **AND** card 1 shows "Fashion for men"
- **AND** card 2 shows "New Arrival Dress"
- **AND** card 3 shows "Sale 20% off"
- **AND** card 4 shows "Shoes for men"

### Requirement: Sale banner displays promotional content

The sale banner section SHALL display a prominent "45 Sale" message with a call-to-action.

#### Scenario: Sale banner displays countdown

- **GIVEN** the user scrolls past the featured products
- **WHEN** the sale banner section renders
- **THEN** a promotional banner shows "45 Sale" prominently
- **AND** the text "Just hurry up limited offer!" is displayed

### Requirement: New arrivals section displays product grid

The shop section SHALL display a grid of product cards with images, names, prices, and add-to-cart buttons.

#### Scenario: Product grid shows new arrival items

- **GIVEN** the user scrolls to the shop section
- **WHEN** the section renders
- **THEN** a heading "New Arrival" with a yellow underline is visible
- **AND** a grid of product cards is displayed
- **AND** each product card shows an image, product name, price, and add-to-cart button

#### Scenario: Add to cart button interaction

- **GIVEN** a product card is displayed
- **WHEN** the user clicks the add-to-cart button
- **THEN** the cart count increments by 1

### Requirement: Testimonials section displays customer reviews

The testimonials section SHALL display customer reviews on a light grey background with star ratings.

#### Scenario: Testimonials section displays customer reviews

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section renders
- **THEN** the section has a light grey background
- **AND** the heading reads "Our Satisfied Customer says"
- **AND** testimonial cards with avatar, name, star rating, and quote are visible

### Requirement: Blog section shows recent posts

The blog section SHALL display 3 recent blog post cards with images, titles, and excerpts.

#### Scenario: Blog section shows 3 recent posts

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section renders
- **THEN** a heading "Recent Blog" is visible
- **AND** 3 blog post cards are displayed in a row
- **AND** each card shows an image, title, and excerpt

### Requirement: Newsletter subscription form

The newsletter section SHALL have a golden yellow background and display an email subscription form.

#### Scenario: Newsletter section has yellow background

- **GIVEN** the user scrolls to the newsletter section
- **WHEN** the section renders
- **THEN** the section background is golden yellow
- **AND** a heading "Sign Up for a Newsletter" with a send icon is visible
- **AND** an email input field and subscribe button are present

#### Scenario: Email subscription form validation

- **GIVEN** the newsletter section is displayed
- **WHEN** the user submits with a valid email
- **THEN** a success message is shown

### Requirement: Footer displays site information

The footer SHALL display 5 columns of information with a Component Dock link.

#### Scenario: Footer displays 5 columns of information

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** 5 columns are visible: About Store, Customer Care, Information, News, Contact Information
- **AND** the About Store column shows a description and social icons
- **AND** the copyright bar shows a link to Component Dock

### Requirement: No external attribution in app code

The app SHALL NOT reference ColorLib anywhere in source files, comments, or data.

#### Scenario: No ColorLib references in app code

- **GIVEN** the app source code is inspected
- **WHEN** searching for "colorlib" in apps/bodega/
- **THEN** no matches are found

## Design Tokens

| Token            | Value                       | Usage                                            |
| ---------------- | --------------------------- | ------------------------------------------------ |
| Brand color      | `#FFC300` (golden yellow)   | Shop icons, subscribe section background, accent |
| Secondary accent | `#DD3E3E` (red)             | Sale badges, price highlights                    |
| Body text        | `#595959`                   | Paragraph text                                   |
| Heading text     | `#333333`                   | Headings                                         |
| Muted text       | `#999999`                   | Secondary/muted copy                             |
| Background light | `#fafafa`                   | Testimonial section                              |
| Font family      | `Roboto, Arial, sans-serif` | All text                                         |
| Button radius    | `0` (square/sharp)          | All buttons                                      |

## Section Structure (in order)

1. Navbar — Logo "Bodega", nav links, Shop dropdown, Cart icon
2. Hero Slider — 3 slides with background images + overlay + CTA
3. Featured Products — 2×2 grid of category cards
4. Sale Banner — "45 Sale" promotional display
5. New Arrivals — Product grid with add-to-cart
6. Testimonials — Customer reviews on light grey
7. Recent Blog — 3 blog post cards
8. Newsletter — Golden yellow subscription form
9. Footer — 5-column layout with Component Dock link
