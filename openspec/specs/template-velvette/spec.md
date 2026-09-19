# Template: Velvette (Fashion E-Commerce)

Recreation of the ColorLib "Shionhouse" fashion e-commerce template.

## Purpose

The Velvette template is a fashion e-commerce landing page featuring a full-height hero slider with call-to-action, popular category cards, new arrival product grid, parallax collection banner, featured product highlights, service features, and a multi-column footer with Component Dock attribution. Recreation of ColorLib Shionhouse — https://colorlib.com/wp/template/shionhouse/

**Preview URL (verified reachable):** https://preview.colorlib.com/theme/shionhouse/

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`assets/css/style.css`) on 2026-09-19.

| Token          | Value                           | Use                                                                          |
| -------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| Brand purple   | `#9F78FF`                       | Primary accent: buttons, links, badges, preloader, hover states             |
| Hover purple   | `#8c6ae4`                       | Button hover pseudo-element background                                       |
| Dark navy      | `#1D2547`                       | Nav link text, section titles, social icon borders                           |
| Deep navy      | `#1f2b7b`                       | Headings body, sub-brand accent (blockquotes, lists, switch toggles)        |
| Heading ink    | `#140C40`                       | h1–h6 base color                                                             |
| Body text      | `#646D77`                       | Paragraph text, body copy                                                    |
| Light bg       | `#f9f9ff`                       | Page sections, form inputs, sidebar widgets                                  |
| Lilac tint     | `#f0e9ff`                       | Border accents, hover states, blog pagination                                |
| Gray bg        | `#f7f7fd` / `#f5f5f5`          | Alternate section backgrounds                                                |
| Green accent   | `#31ff7a`                       | Hero subtitle / accent text (slider caption span)                            |
| Card shadow    | `rgba(0,0,0,0.05)`             | Dropdown submenu, product hover                                              |
| Font headings  | `'Cinzel', serif`               | All h1–h6 and boxed-btn (Google Fonts: Cinzel 400/700/900)                  |
| Font body      | `'Poppins', sans-serif`         | Body, nav links, paragraphs (Google Fonts: Poppins 300–900)                 |
| Button radius  | 4px                             | `.btn` primary CTA                                                           |
| Cart badge     | border-radius 30px              | Cart count pill                                                              |
| Social icons   | border-radius 50%               | Header + footer social icon circles                                          |
| Section overlay| `rgba(29,37,71,0.4)`           | Parallax section dark overlay (`.section-over1::before`)                     |
| Dropdown top   | 3px solid `#9F78FF`             | Submenu top border accent                                                    |
| Body margin    | `0 35px`                        | `.full-wrapper` horizontal margin (15px at ≤1199px, 0 at ≤991px)            |

**No other brand colors used in the primary template sections.** The secondary palette (teal `#4cd3e3`, pink `#ff3368`, yellow `#f4e700`, red `#f44a40`, blue `#38a4ff`) only appears in element-demo utility classes — skip for the homepage recreation.

## Requirements

### Requirement: Page renders all sections in order

The Velvette template SHALL render all sections in the correct order from top to bottom.

#### Scenario: All sections are visible

- **WHEN** the Velvette template loads
- **THEN** the Header is visible at the top
- **AND** the HeroSlider is visible below the Header
- **AND** the PopularCategories is visible
- **AND** the NewArrivals is visible
- **AND** the CollectionBanner is visible
- **AND** the FeaturedProducts is visible
- **AND** the Services is visible
- **AND** the Footer is visible at the bottom

#### Scenario: Document title is set correctly

- **WHEN** the Velvette template loads
- **THEN** the document title is "Velvette — Fashion Store"

### Requirement: Header provides navigation with search and cart

The Header SHALL display the brand logo, navigation links, social icons, search, and a cart icon.

#### Scenario: Displays brand and navigation links

- **WHEN** I inspect the header
- **THEN** the brand logo is displayed
- **AND** navigation links for Home, Shop, About, Blog, and Contact are present

#### Scenario: Blog submenu appears on hover

- **WHEN** I hover over the "Blog" navigation link
- **THEN** a dropdown submenu appears with links for Blog, Blog Details, Elements, and Product Details

#### Scenario: Social icons are displayed

- **WHEN** I inspect the header social icons
- **THEN** there are links for Twitter, Facebook, and Pinterest

#### Scenario: Cart icon shows count

- **WHEN** I inspect the header
- **THEN** a cart icon with a count badge is visible

#### Scenario: Mobile menu toggle

- **WHEN** I click the mobile menu toggle on mobile viewport
- **THEN** the mobile navigation menu opens

### Requirement: HeroSlider displays fullscreen hero with CTA

The HeroSlider SHALL display a full-height slider with headline text and a call-to-action button.

#### Scenario: Displays hero headline

- **WHEN** I inspect the HeroSlider
- **THEN** the headline "fashion changing always" is displayed
- **AND** a "Shop Now" button is visible

#### Scenario: Slider has multiple slides

- **WHEN** I inspect the HeroSlider
- **THEN** there are 3 slides with distinct background images

#### Scenario: Slider auto-advances

- **WHEN** I wait for the slider interval
- **THEN** the active slide advances to the next one

#### Scenario: Slider navigation dots

- **WHEN** I inspect the HeroSlider
- **THEN** navigation dots are visible for slide selection

### Requirement: PopularCategories displays category grid

The PopularCategories SHALL display a grid of 4 fashion category cards with images, labels, and shop buttons.

#### Scenario: Displays 4 category cards

- **WHEN** I inspect the PopularCategories section
- **THEN** there are 4 category cards

#### Scenario: Category labels

- **WHEN** I inspect each category card
- **THEN** the cards display labels: "Glasses", "Watches", "Jackets", "Clothes"

#### Scenario: Each card has a shop button

- **WHEN** I inspect each category card
- **THEN** each card has a "Shop Now" button

#### Scenario: Card hover shows shop button

- **WHEN** I hover over a category card
- **THEN** the "Shop Now" button becomes visible

### Requirement: NewArrivals displays product grid

The NewArrivals SHALL display a heading and a grid of 8 product cards.

#### Scenario: Section heading

- **WHEN** I inspect the NewArrivals section
- **THEN** the heading "new arrival" is displayed

#### Scenario: Displays 8 product cards

- **WHEN** I inspect the NewArrivals grid
- **THEN** there are 8 product cards arranged in a 4-column grid (2 rows)

#### Scenario: Product card contents

- **WHEN** I inspect a single product card
- **THEN** the card shows a product image, product name, star rating (5 stars), and a price

#### Scenario: Product cards have favorite icon

- **WHEN** I hover over a product card
- **THEN** a favorite/heart icon is visible on the card

### Requirement: CollectionBanner displays parallax call-to-action

The CollectionBanner SHALL display a full-width parallax image section with a centered text overlay and call-to-action button.

#### Scenario: Displays collection text

- **WHEN** I inspect the CollectionBanner
- **THEN** the text "collection houses our first-ever" is displayed

#### Scenario: Displays about button

- **WHEN** I inspect the CollectionBanner
- **THEN** an "About Us" button is visible

#### Scenario: Parallax background

- **WHEN** I inspect the CollectionBanner
- **THEN** a background image with a dark overlay is visible

### Requirement: FeaturedProducts displays product highlights

The FeaturedProducts SHALL display a 2-column grid of featured product cards.

#### Scenario: Displays 2 featured products

- **WHEN** I inspect the FeaturedProducts section
- **THEN** there are 2 product cards in a row

#### Scenario: Product card contents

- **WHEN** I inspect a featured product card
- **THEN** the card shows a product image and descriptive text

#### Scenario: Product card has read more button

- **WHEN** I inspect a featured product card
- **THEN** a "Read More" button is visible

### Requirement: Services displays feature icons

The Services section SHALL display a row of 4 service feature cards.

#### Scenario: Displays 4 service cards

- **WHEN** I inspect the Services section
- **THEN** there are 4 service feature cards

#### Scenario: Service card contents

- **WHEN** I inspect a service card
- **THEN** each card shows an icon, a title, and a description

#### Scenario: Gray background

- **WHEN** I inspect the Services section
- **THEN** the section has a light gray background

### Requirement: Footer displays content and Component Dock attribution

The Footer SHALL display multiple content columns with a link to Component Dock.

#### Scenario: Footer columns

- **WHEN** I inspect the Footer
- **THEN** the brand logo and description are displayed
- **AND** a "Quick links" column is present
- **AND** a "Shop Category" column is present
- **AND** a "Partners" column is present
- **AND** a "Get in touch" column is present

#### Scenario: Footer social links

- **WHEN** I inspect the Footer social icons
- **THEN** there are links for Twitter, Facebook, and Pinterest

#### Scenario: Component Dock attribution

- **WHEN** I inspect the copyright area
- **THEN** there is a link to "Component Dock" pointing to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

#### Scenario: Footer bottom border

- **WHEN** I inspect the Footer
- **THEN** a bottom border/divider separates the content from the copyright

## Verification checklist

- [ ] All 7 sections render in the correct order
- [ ] Header: sticky on scroll, nav links, dropdown, social icons, cart, mobile menu
- [ ] HeroSlider: 3 slides with hero text and CTA, auto-advance, dot navigation
- [ ] PopularCategories: 4 cards with labels and shop buttons
- [ ] NewArrivals: heading + 8 product cards (4-col grid), favorites, ratings, prices
- [ ] CollectionBanner: parallax image, text overlay, About Us button
- [ ] FeaturedProducts: 2-column layout, product images, descriptions, Read More
- [ ] Services: 4 feature cards with icons on gray background
- [ ] Footer: 4 content columns, social links, Component Dock link, bottom border
- [ ] Design tokens applied: brand purple #9F78FF, Cinzel headings, Poppins body
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile menu, stacked columns, readable text at all breakpoints
