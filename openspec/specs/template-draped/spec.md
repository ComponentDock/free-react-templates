# Template: Draped (Fashion E-Commerce Landing)

## Purpose

Draped is a single-page fashion e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dealers" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, minimalist fashion e-commerce template with a white
navbar, a hero section featuring a transparent product image and pricing
display, a 3-column product grid, a featured "Jacket" promotional banner, a
carousel product collection, a "Denim Coat" promotional banner, and a
4-column footer with newsletter. Draped recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Dealers" — e-commerce website template
  (source: https://colorlib.com/wp/template/dealers/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/dealers/`
  (HTTP 200, 20.2KB) + stylesheet `css/style.css` (24.7KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`dealers-free-template.jpg`) confirms the visual design (clean white
  background, blue primary accent, minimalist product layout).
- **Section order (1:1):**
  1. Header/navbar (`site-navbar`, white bg): "Dealers" logo text + nav
     (Collection dropdown with Men/Women/Children + Shop + Catalogs + Contact)
     + icons (search, heart/wishlist, shopping bag with count badge "2").
  2. Hero (`site-blocks-cover`): left side has "Madewell" heading + "Summer
     Collection" subtitle + price display "1,499 ~~$1,999~~" + "Shop Now"
     buttons (outline primary + solid primary); right side has transparent
     product image (person with product).
  3. Product grid (`products-wrap`, border-top-0): 3-column no-gutters grid
     of product cards (image + item info: title + collection label + price).
     Products: "The Shoe" $9.50, "Marc Jacobs Bag" $9.50 (with "Sale" tag
     and strikethrough $30.00), "The Belt" $9.50.
  4. Featured banner 1 (`site-blocks-cover inner-page`): "#New Summer
     Collection 2019" subtitle + "Jacket" headline + "Shop Now" black button.
     Left-aligned content, right-aligned image.
  5. Collections carousel (`site-section` + `nonloop-block-3 owl-carousel`):
     "Collections" heading + 6-item product carousel (same products as grid).
  6. Featured banner 2 (`site-blocks-cover inner-page`): "#New Summer
     Collection 2019" subtitle + "New Denim Coat" headline + "Shop Now"
     black button. Left-aligned content, right-aligned image.
  7. Footer (`site-footer`, custom-border-top): 4-column layout — About Us
     blurb, Newsletter (email input + "Subscribe" button), Quick Links (3
     groups of links: Sell online/Features/Shopping cart/Store builder,
     Mobile commerce/Dropshipping/Website development, Point of sale/Hardware/
     Software), Contact Info (address, phone, email). Copyright bar at bottom.

- **Design tokens extracted from `css/style.css`:**
  - Primary color: **#207dff** (blue — buttons, links, active states).
  - Dark/background: **#25262a** (dark charcoal — `btn-black`).
  - Text: **#333333** headings, **#737b8a** body text.
  - Section backgrounds: white `#fff` default, `#f4f5f9` (light gray for
    alternate sections), `#f9f9f9` (near-white).
  - Border color: `#e6e8ed` (light borders), `#dee2e6`.
  - Font: **"Rubik"** (sans-serif, weights 400/700) via Google Fonts.
  - Buttons: `border-radius: 0` (square/sharp edges), `.btn-primary` (blue),
    `.btn-outline-primary` (blue outline), `.btn-black` (dark bg).
  - Hero: transparent background, product image with transparent PNG overlay.
  - Featured banners: full-width with background image, centered content.
  - Footer: light background with top border, dark headings.
  - Sale tag: yellow/gold `#ffe5ae` background.

- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero uses a seeded picsum photo with
  the product pricing display; product grid as 3-column cards with images,
  titles, collection labels, and prices; featured banners with dark overlay
  backgrounds; product carousel (implement as CSS scroll-snap or simple grid
  instead of owl-carousel); footer with newsletter, quick links, and contact
  info. All images picsum-seeded, icons lucide-react (no assets copied).

Draped lives in `apps/draped` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Draped",
nav links, and action icons.

#### Scenario: Renders site name and navigation

    Given the page is loaded
    When I look at the navigation bar
    Then I see the text "Draped" as the site name
    And I see navigation links: "Collection", "Shop", "Catalogs", "Contact"

#### Scenario: Icons are present

    Given the page is loaded
    When I look at the navigation bar
    Then I see a search icon
    And I see a wishlist (heart) icon
    And I see a shopping bag icon with a count badge

#### Scenario: Dark mode toggle

    Given the page is loaded
    When I look at the navigation bar
    Then I see a dark-mode toggle button

### Requirement: Hero banner

The system SHALL render a hero section with a product name, subtitle, pricing,
and call-to-action buttons.

#### Scenario: Hero content

    Given the page is loaded
    When I look at the hero section
    Then I see the heading "Madewell"
    And I see the subtitle "Summer Collection"
    And I see pricing: "1,499" with strikethrough "$1,999"
    And I see "Shop Now" buttons

#### Scenario: Hero layout

    Given the page is loaded
    When I look at the hero section
    Then the left column has the text content
    And the right column has a product image

### Requirement: Product grid

The system SHALL render a 3-column product grid with product cards.

#### Scenario: Product cards display

    Given the page is loaded
    When I scroll to the product grid
    Then I see 3 product cards
    And each card has an image, title, collection label, and price

#### Scenario: Product card content

    Given the page is loaded
    When I look at the product cards
    Then I see "The Shoe" at $9.50
    And I see "Marc Jacobs Bag" at $9.50 with a "Sale" tag
    And I see "The Belt" at $9.50

### Requirement: Featured promotional banners

The system SHALL render two full-width promotional banners with product
headlines and call-to-action buttons.

#### Scenario: First banner

    Given the page is loaded
    When I scroll to the first promotional banner
    Then I see "#New Summer Collection 2019" as subtitle
    And I see "Jacket" as the headline
    And I see a "Shop Now" button

#### Scenario: Second banner

    Given the page is loaded
    When I scroll to the second promotional banner
    Then I see "#New Summer Collection 2019" as subtitle
    And I see "New Denim Coat" as the headline
    And I see a "Shop Now" button

### Requirement: Collections carousel

The system SHALL render a "Collections" section with a horizontally scrollable
product carousel.

#### Scenario: Carousel heading

    Given the page is loaded
    When I scroll to the collections section
    Then I see the heading "Collections"

#### Scenario: Carousel products

    Given the page is loaded
    When I look at the collections carousel
    Then I see product cards that can be scrolled horizontally

### Requirement: Footer

The system SHALL render a footer with About, Newsletter, Quick Links, and
Contact Info sections. The footer MUST link to `https://www.componentdock.com/`.

#### Scenario: Footer columns

    Given the page is loaded
    When I look at the footer
    Then I see an "About Us" column with a description
    And I see a "Subscribe" newsletter section with email input
    And I see a "Quick Links" section with link groups
    And I see a "Contact Info" section with address, phone, email

#### Scenario: Footer links to Component Dock

    Given the page is loaded
    When I look at the footer
    Then I see a link to "https://www.componentdock.com/" labeled
      "Component Dock"

### Requirement: Responsive layout

The system SHALL be responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile navigation

    Given the viewport is 375px wide
    When I look at the navigation
    Then it adapts to mobile layout with a hamburger menu

#### Scenario: Product grid stacks on mobile

    Given the viewport is 375px wide
    When I look at the product grid
    Then cards stack vertically

## Verification checklist

- [ ] White navbar with "Draped" logo and nav links
- [ ] Hero with product name, pricing, and "Shop Now" buttons
- [ ] 3-column product grid with product cards
- [ ] First featured banner ("Jacket") with dark overlay
- [ ] Collections carousel section
- [ ] Second featured banner ("New Denim Coat") with dark overlay
- [ ] Footer with 4 columns + Component Dock link
- [ ] Primary blue (#207dff) for buttons and links
- [ ] Square buttons (border-radius: 0)
- [ ] Font: Rubik (Google Fonts)
- [ ] Dark mode toggle functional
- [ ] All images use picsum.photos seeded URLs
- [ ] No ColorLib references in app code
- [ ] Sale tag with gold/yellow background on discounted items
