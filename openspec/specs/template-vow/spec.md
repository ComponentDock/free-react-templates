# Template: Vow (Fashion Shop Landing Page)

## Purpose

Vow is a single-page fashion/e-commerce shop landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wish" free template (source:
https://colorlib.com/wp/template/wish/), built under a DIFFERENT name
(**Vow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 fashion shop page with a sticky header
(logo, nav, search, cart, wishlist, avatar), hero slider with background
images, promo cards section, new arrivals product grid, extra promo
banners, image gallery, testimonials slider, newsletter subscription, and
a centered dark footer. The design uses Open Sans (Google Fonts), warm
taupe brand color #937c6f, dark #232323 headings, and #929191 body text.

**WHAT MAKES VOW DISTINCT (signature behaviors):**

1. **Warm taupe-branded fashion shop theme.** Primary brand #937c6f
   (warm brown/taupe), with Open Sans font throughout. Dark header,
   light backgrounds, warm-toned buttons, and a dark footer.
2. **Full-featured header.** Logo "Vow", 5 nav links (home, clothes,
   accessories, lingerie, contact), search input, cart icon with count,
   wishlist star with count, and avatar icon.
3. **Hero slider.** Full-width background image carousel with "Promo
   Prices" subtitle and "New Collection" heading, slide dots (01, 02,
   03).
4. **Promo section.** "only the best" subtitle + "promo prices" title,
   3-column grid of promo cards with image overlays showing discount
   percentages and categories, each with a "Shop Now" link.
5. **New arrivals.** "only the best" subtitle + "new arrivals" title,
   3-column product grid (6 products) with image, star rating, product
   name, price, add-to-cart and wishlist buttons.
6. **Extra promos.** Two side-by-side promo banners — "30% off on all
   shoes" and "Mix & Match" — each with background image, price/title,
   description, and "check out" button.
7. **Gallery.** Background image overlay with hashtag links
   (#vow, #vowinstagram, #vowgirl), description, "submit" button, and
   a horizontal image slider below.
8. **Testimonials.** "only the best" subtitle + "testimonials" title,
   slider with customer quotes, circular author photo, name, and role.
9. **Newsletter.** Background image with "subscribe for a 20% discount"
   heading, email input + "subscribe" button, and description text.
10. **Footer.** Centered: "Vow" logo, nav links, social icons
    (Pinterest, LinkedIn, Instagram, Reddit, Twitter), copyright with
    Component Dock link.

## Design Tokens

| Token          | Value                 | Usage                         |
| -------------- | --------------------- | ----------------------------- |
| brand          | `#937c6f`             | buttons, accents, links       |
| brand-dark     | `#7d6a5f`             | hover state                   |
| heading        | `#2f2f2f`             | section titles, product names |
| body-text      | `#929191`             | paragraph text                |
| dark           | `#232323`             | footer bg, dark overlays      |
| light-bg       | `#FFFFFF` / `#f9f5f5` | page background, promo bg     |
| white          | `#FFFFFF`             | button text, nav text         |
| red-accent     | `#db5246`             | sale prices                   |
| font-body      | `Open Sans`           | body text, UI                 |
| font-heading   | `Open Sans` 700       | headings                      |
| button-radius  | `0` (square)          | buttons                       |
| button-padding | `12px 30px`           | buttons                       |

## Requirements

### Requirement: Page structure and branding

The app SHALL render a single-page fashion shop landing page with the
Vow brand name, Open Sans font, and the #937c6f color scheme.

#### Scenario: Document title and meta

- **GIVEN** the Vow app is rendered
- **THEN** the document title SHALL be "Vow — Fashion Shop Template"
- **AND** a meta description SHALL mention "fashion shop"

#### Scenario: Font loading

- **GIVEN** the Vow app is rendered
- **THEN** the page SHALL load Open Sans from Google Fonts
- **AND** Open Sans SHALL be used for headings and body text

### Requirement: Header

The header SHALL display the Vow logo, navigation links, search input,
cart icon with count, wishlist star with count, and avatar icon.

#### Scenario: Navigation links

- **GIVEN** the Vow app is rendered
- **THEN** the header SHALL contain links for Home, Clothes, Accessories,
  Lingerie, and Contact
- **AND** the logo text SHALL read "Vow"

#### Scenario: Header actions

- **GIVEN** the Vow app is rendered
- **THEN** a search input SHALL be present
- **AND** a cart icon with item count SHALL be visible
- **AND** a wishlist star icon with count SHALL be visible
- **AND** an avatar icon SHALL be visible

### Requirement: Hero slider

The hero section SHALL render a full-width background image carousel
with "Promo Prices" subtitle and "New Collection" heading.

#### Scenario: Hero content

- **GIVEN** the Vow app is rendered
- **THEN** a hero section SHALL be visible with a heading "New Collection"
- **AND** a subtitle "Promo Prices" SHALL be displayed
- **AND** the hero background SHALL use a placeholder image from
  picsum.photos
- **AND** slide indicator dots (01, 02, 03) SHALL be present

### Requirement: Promo section

A promo section SHALL display "only the best" subtitle and "promo prices"
title with 3 promo cards in a grid.

#### Scenario: Promo cards

- **GIVEN** the Vow app is rendered
- **THEN** a promo section SHALL be visible with title "promo prices"
- **AND** 3 promo cards SHALL be rendered in a grid
- **AND** each card SHALL show a discount percentage and category
- **AND** each card SHALL have a "Shop Now" link

### Requirement: New arrivals

A new arrivals section SHALL display 6 products in a 3-column grid with
images, ratings, names, prices, and action buttons.

#### Scenario: Product cards

- **GIVEN** the Vow app is rendered
- **THEN** a new arrivals section SHALL be visible with title "new arrivals"
- **AND** 6 product cards SHALL be rendered
- **AND** each card SHALL have a product image from picsum.photos
- **AND** each card SHALL show a star rating
- **AND** each card SHALL display a product name and price
- **AND** each card SHALL have add-to-cart and wishlist action buttons

### Requirement: Extra promos

Two side-by-side promo banners SHALL display with background images,
titles, descriptions, and "check out" buttons.

#### Scenario: Extra promo content

- **GIVEN** the Vow app is rendered
- **THEN** 2 extra promo banners SHALL be visible
- **AND** the first SHALL show "30% off" with "On all shoes"
- **AND** the second SHALL show "Mix & Match"
- **AND** each SHALL have a "check out" button

### Requirement: Gallery

A gallery section SHALL display hashtags, description, submit button,
and an image slider.

#### Scenario: Gallery content

- **GIVEN** the Vow app is rendered
- **THEN** hashtag links (#vow, #vowinstagram, #vowgirl) SHALL be visible
- **AND** a "submit" button SHALL be present
- **AND** gallery images SHALL use picsum.photos placeholders

### Requirement: Testimonials

A testimonials section SHALL display customer quotes with author details.

#### Scenario: Testimonial content

- **GIVEN** the Vow app is rendered
- **THEN** at least one testimonial SHALL be visible with a quote,
  author name, and role

### Requirement: Newsletter

A newsletter section SHALL render with a background image, heading,
email input, and subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the Vow app is rendered
- **THEN** a newsletter section SHALL be visible with text "subscribe
  for a 20% discount"
- **AND** an email input field SHALL be present
- **AND** a "subscribe" button SHALL be present

### Requirement: Footer

The footer SHALL render a centered layout with logo, nav links, social
icons, and copyright with Component Dock link.

#### Scenario: Footer structure

- **GIVEN** the Vow app is rendered
- **THEN** the footer SHALL display "Vow" logo
- **AND** navigation links SHALL be present
- **AND** social media icons SHALL be visible (Pinterest, LinkedIn,
  Instagram, Reddit, Twitter)

#### Scenario: Component Dock credit

- **GIVEN** the Vow app is rendered
- **THEN** the footer SHALL contain a link to
  https://www.componentdock.com/
- **AND** the link text SHALL be "Component Dock"
- **AND** there SHALL be NO references to "colorlib" in the rendered app

### Requirement: Semantics

The page SHALL use semantic HTML elements and aria labels where
appropriate.

#### Scenario: Semantic structure

- **GIVEN** the Vow app is rendered
- **THEN** a banner landmark SHALL be present
- **AND** a contentinfo landmark SHALL be present
- **AND** a main landmark SHALL be present
