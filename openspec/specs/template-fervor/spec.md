# Template: Fervor (E-commerce Fashion Shop)

## Purpose

Fervor is a single-page e-commerce fashion shop template — a React recreation of
the ColorLib free "Karma" template
(preview: https://preview.colorlib.com/theme/karma/ — fashion/shoe e-commerce),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand gradient `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` (golden yellow
  to orange) used on primary buttons, product hover states, and newsletter CTA
- Solid brand colors: `#ffba00` (gold), `#ff6c00` (orange)
- Product accent palette: `#4cd3e3` (cyan), `#38a4ff` (blue), `#f4e700` (yellow),
  `#f44a40` (red) — used on product card hover action icons
- Body typeface: Poppins (Google Fonts via `<link>`)
- Text colors: `#222222` (dark headings), `#777777` (grey body), `#555555` (medium)
- Backgrounds: `#ffffff` (white sections), `#f9f9ff` (light blue-tinted alt sections),
  dark gradient overlay for exclusive deal section
- Button shapes: `border-radius: 50px` pill for primary buttons; `border-radius: 3px`
  for small elements
- Sticky white header with Bootstrap-style navbar
- Full-width hero with background image, product image, and "Add to Bag" CTA
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Fervor lives in `apps/fervor` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky white navbar with the brand name "Fervor",
desktop nav links (Home, Shop, Blog, Pages, Contact), a cart icon, and a search
toggle. On mobile, the navbar SHALL collapse with a hamburger toggle that opens
a mobile menu.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on a wide viewport
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Fervor" as a link
- **AND** it SHALL show navigation links for Home, Shop, Blog, Pages, and Contact
- **AND** it SHALL show a cart icon and a search icon button
- **AND** the navbar SHALL be sticky (fixed to top on scroll)

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile nav menu SHALL become visible
- **AND** the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

#### Scenario: Search toggle

- **GIVEN** the page is rendered
- **WHEN** the user clicks the search icon
- **THEN** a search input overlay SHALL slide open
- **AND** the search input SHALL be focused
- **AND** pressing the close icon SHALL hide the search overlay

### Requirement: Hero banner

The system SHALL render a full-width hero section with a background image and
a two-column layout: left column with a headline "Nike New Collection!", a
paragraph, and an "Add to Bag" button; right column with a product image.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline "Nike New Collection!"
- **AND** it SHALL contain a supporting paragraph
- **AND** it SHALL contain an "Add to Bag" button (pill-shaped, gradient)
- **AND** it SHALL contain a product hero image

#### Scenario: Hero layout

- **GIVEN** the page is rendered on desktop
- **WHEN** the hero section is displayed
- **THEN** the headline and CTA SHALL occupy the left ~40% of the viewport
- **AND** the product image SHALL occupy the right ~60%

### Requirement: Features bar

The system SHALL render a four-column features section with icons and text for
"Free Delivery", "Return Policy", "24/7 Support", and "Secure Payment".

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show four feature items in a row
- **AND** each item SHALL have an icon and a title ("Free Delivery",
  "Return Policy", "24/7 Support", "Secure Payment")
- **AND** each item SHALL have a subtitle description

### Requirement: Category deals grid

The system SHALL render an asymmetric category deals section with five image
cards arranged in a 2-column grid layout: a large card (top-left), a tall card
(top-right), two medium cards (bottom-left), and a tall card (bottom-right).
Each card SHALL have a dark overlay and a title.

#### Scenario: Category grid layout

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL show five category deal cards
- **AND** each card SHALL have an image, a dark overlay, and a title
- **AND** the layout SHALL use an asymmetric grid (not uniform rows)

#### Scenario: Category card content

- **GIVEN** the page is rendered
- **WHEN** a category card is displayed
- **THEN** it SHALL show a title such as "Sneaker for Sports" or
  "Product for Couple"
- **AND** the card SHALL have a hover effect showing the overlay

### Requirement: Latest Products carousel

The system SHALL render a "Latest Products" section with a section title and
a horizontal scrollable row of product cards. Each card SHALL have an image,
a product name, a price (with optional strikethrough original price), and
hover action icons (add to bag, wishlist, compare, view more).

#### Scenario: Products section header

- **GIVEN** the page is rendered
- **WHEN** the latest products section is displayed
- **THEN** it SHALL show the heading "Latest Products"
- **AND** it SHALL show a subtitle paragraph

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** a product card is displayed
- **THEN** it SHALL show a product image
- **AND** it SHALL show a product title
- **AND** it SHALL show a current price (e.g. "$150.00")
- **AND** it SHALL optionally show a strikethrough original price (e.g. "$210.00")
- **AND** it SHALL show four hover action icons: add to bag, wishlist, compare,
  view more

#### Scenario: Product hover interaction

- **GIVEN** the page is rendered
- **WHEN** the user hovers over a product card
- **THEN** the action icons row SHALL become visible
- **AND** each icon SHALL have a distinct brand accent color on hover

### Requirement: Exclusive Deal countdown

The system SHALL render a split exclusive deal section with a dark gradient
background. The left side SHALL show a countdown timer (days, hours, minutes,
seconds) with a heading "Exclusive Hot Deal Ends Soon!" and a "Shop Now"
button. The right side SHALL show a product carousel with product image,
price, and "Add to Bag" button.

#### Scenario: Countdown timer

- **GIVEN** the page is rendered
- **WHEN** the exclusive deal section is displayed
- **THEN** it SHALL show four countdown blocks: Days, Hours, Minutes, Seconds
- **AND** each block SHALL display a number and a label

#### Scenario: Deal heading and CTA

- **GIVEN** the page is rendered
- **WHEN** the exclusive deal section is displayed
- **THEN** it SHALL show the heading "Exclusive Hot Deal Ends Soon!"
- **AND** it SHALL show a subtitle "Who are in extremely love with eco friendly system."
- **AND** it SHALL show a "Shop Now" primary button

#### Scenario: Exclusive product display

- **GIVEN** the page is rendered
- **WHEN** the exclusive deal section is displayed
- **THEN** the right side SHALL show a product with image, price, and title
- **AND** it SHALL show an "Add to Bag" button with the gradient style

### Requirement: Brand logos

The system SHALL render a row of five brand partner logos in a horizontal strip.

#### Scenario: Brand logos display

- **GIVEN** the page is rendered
- **WHEN** the brand section is displayed
- **THEN** it SHALL show five brand logo images in a horizontal row
- **AND** each logo SHALL be centered and evenly spaced

### Requirement: Deals of the Week

The system SHALL render a "Deals of the Week" section with a title, a 3-column
grid of related product items (thumbnail + title + price) on the left (9 cols),
and a promotional sidebar image on the right (3 cols).

#### Scenario: Deals section header

- **GIVEN** the page is rendered
- **WHEN** the deals of the week section is displayed
- **THEN** it SHALL show the heading "Deals of the Week"
- **AND** it SHALL show a subtitle paragraph

#### Scenario: Related product items

- **GIVEN** the page is rendered
- **WHEN** the deals section is displayed
- **THEN** it SHALL show 9 related product items in a 3-column grid
- **AND** each item SHALL show a thumbnail image, a title, and a price
  (with optional strikethrough)

#### Scenario: Sidebar promo image

- **GIVEN** the page is rendered
- **WHEN** the deals section is displayed
- **THEN** the right sidebar SHALL show a promotional image

### Requirement: Footer

The system SHALL render a four-column footer with "About Us" text, a newsletter
signup form, an Instagram feed grid (8 small images), and "Follow Us" social
links. Below the columns, a centered footer-bottom bar SHALL show copyright
text with a "Component Dock" link.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column with descriptive text
- **AND** it SHALL show a "Newsletter" column with an email input and submit button
- **AND** it SHALL show an "Instagram Feed" column with 8 thumbnail images
- **AND** it SHALL show a "Follow Us" column with social media icon links

#### Scenario: Footer bottom

- **GIVEN** the page is rendered
- **WHEN** the footer bottom bar is displayed
- **THEN** it SHALL show centered copyright text
- **AND** it SHALL include a link to "https://www.componentdock.com/" branded
  as "Component Dock"

## Verification checklist

- [ ] Sticky white navbar with brand "Fervor", nav links, cart, search
- [ ] Mobile hamburger toggle with accessible `aria-expanded`
- [ ] Search overlay opens/closes on icon click
- [ ] Hero: background image, two-column layout, headline, CTA button, product image
- [ ] Features: four-column grid with icons (Free Delivery, Return Policy, 24/7 Support, Secure Payment)
- [ ] Category deals: asymmetric 5-card grid with overlay titles
- [ ] Latest Products: section title + product card row with hover actions
- [ ] Exclusive Deal: split layout, countdown timer, product carousel, gradient background
- [ ] Brand logos: 5 logos in horizontal row
- [ ] Deals of the Week: 3-col product grid + sidebar promo image
- [ ] Footer: 4 columns (About Us, Newsletter, Instagram, Follow Us)
- [ ] Footer bottom: copyright with Component Dock link
- [ ] Design tokens: gold-orange gradient `#ffba00 → #ff6c00`, Poppins font, white/light backgrounds
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Icons from lucide-react
