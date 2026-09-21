# Template: Threadline (Men's Fashion E-Commerce)

## Purpose

Threadline is a single-page men's fashion e-commerce template — a React recreation of the
ColorLib free "Malefashion" template
(preview: https://preview.colorlib.com/theme/malefashion/ — fashion/e-commerce landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand red `#e53e3e` (CTAs, sale badges, accents), dark `#1a1a1a` header/footer,
  light gray `#f5f5f5` section backgrounds
- Typeface: Nunito Sans (Google Fonts via `<link>`)
- Uppercase nav links, red pill buttons, product cards with hover effects
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Threadline lives in `apps/threadline` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Header with navigation

The system SHALL render a header with a top bar (sign-in link, FAQs link, free shipping message), a main navigation bar with the "Threadline" logo, navigation links (Home, Shop, Pages, About, Contacts), search icon, and cart icon with item count.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the "Threadline" logo linking to `/`
- **AND** it SHALL show links to Home, Shop, About, and Contacts
- **AND** it SHALL show a search button and cart link with count badge

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu SHALL open
- **AND** tapping a navigation link SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero section with a background image, overlay text including "Summer Collection" label, a heading "Fall - Winter Collections 2030", descriptive text, and a "Shop now" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the "Summer Collection" label
- **AND** it SHALL display the heading "Fall - Winter Collections 2030"
- **AND** it SHALL display a "Shop now" button

### Requirement: Category banners

The system SHALL render a 3-column grid of category banners: "Clothing Collections 2030", "Accessories", and "Shoes Spring 2030", each with a background image and "Shop now" link.

#### Scenario: Category display

- **GIVEN** the page is rendered
- **WHEN** the category section is visible
- **THEN** it SHALL show three category cards
- **AND** each card SHALL have a "Shop now" link

### Requirement: Product tabs

The system SHALL render a tabbed product section with "Best Sellers", "New Arrivals", and "Hot Sales" tabs. Each tab shows a 4-column grid of product cards with image, name, price, compare button, and "Add To Cart" button. Sale items show a "Sale" badge; new items show a "New" badge.

#### Scenario: Tab switching

- **GIVEN** the page is rendered
- **WHEN** the "Best Sellers" tab is active
- **THEN** it SHALL display best seller products
- **WHEN** the user clicks "New Arrivals"
- **THEN** it SHALL display new arrival products
- **WHEN** the user clicks "Hot Sales"
- **THEN** it SHALL display sale products

#### Scenario: Product card content

- **GIVEN** a product card is rendered
- **THEN** it SHALL show the product name and price
- **AND** it SHALL have an "Add To Cart" button
- **AND** it SHALL have a compare button

### Requirement: Hot deal countdown

The system SHALL render a dark-background "Deal of the Week" section with category list (Clothings Hot, Shoe Collection, Accessories), sale price "$29.99", a countdown timer (Days, Hours, Minutes, Seconds), and a "Shop now" button.

#### Scenario: Countdown timer

- **GIVEN** the hot deal section is visible
- **THEN** the countdown timer SHALL display Days, Hours, Minutes, and Seconds
- **AND** the timer SHALL decrement every second
- **AND** when all values reach zero, the timer SHALL stop (not go negative)

### Requirement: Instagram feed

The system SHALL render a 6-column Instagram image grid with centered "#Threadline" hashtag overlay and descriptive text.

#### Scenario: Instagram posts

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is visible
- **THEN** it SHALL show 6 Instagram post images
- **AND** it SHALL display the "#Threadline" hashtag

### Requirement: Blog posts

The system SHALL render a 3-column blog section with "Latest News" heading, showing 3 blog cards each with image, date, title, and "Read More" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display 3 blog post cards
- **AND** each card SHALL have a date, title, and "Read More" link

### Requirement: Footer with newsletter

The system SHALL render a dark footer with 4 columns: About (logo + description), Shopping links, Contact links, and Newsletter signup form with email input and submit button. The footer copyright SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show Shopping links (Clothing Store, Trending Shoes, Accessories, Sale)
- **AND** it SHALL show Contact links (Contact Us, Payment Methods, Delivery, Return & Exchanges)

#### Scenario: Component Dock link

- **GIVEN** the footer is visible
- **WHEN** the user looks at the copyright line
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link text SHALL be "Component Dock"

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is visible
- **THEN** it SHALL show an email input field
- **AND** it SHALL show a subscribe button
