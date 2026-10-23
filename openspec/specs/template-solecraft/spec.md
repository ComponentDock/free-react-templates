# Template: Solecraft (E-Commerce / Footwear)
<!-- prep-status: shipped-as=lacecraft -->
> **SHIPPED-UNDER** — the ColorLib `solestyle` design this prep describes already
> ships as `apps/lacecraft` (<https://lacecraft.free.componentdock.com>).
> Do not scaffold `apps/solecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lacecraft/spec.md`.

## Purpose

Recreation of ColorLib "Solestyle" — a premium footwear e-commerce landing page.

- **Source:** https://colorlib.com/wp/template/solestyle/
- **Preview:** https://preview.colorlib.com/theme/solestyle/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `solecraft` (avoids reusing "solestyle")

## Design Tokens

Extracted from the live preview CSS and HTML:

| Token               | Value                                                                 |
| ------------------- | --------------------------------------------------------------------- |
| Brand primary       | Orange — `#f97316` (primary-500), `#ea580c` (primary-600)           |
| Primary gradient    | `from-primary-600 to-primary-500` (announcement bar, logo box)       |
| Background (dark)   | `gray-950` (`#030712`) — hero, product grid, testimonials, CTA       |
| Background (light)  | `white` — header, footer                                             |
| Card background     | `gray-900` (`#111827`) — testimonial cards                           |
| Text (dark bg)      | `white`, `gray-300`, `gray-400`, `gray-500`                         |
| Text (light bg)     | `gray-900`, `gray-700`, `gray-600`, `gray-500`                     |
| Font body           | Inter (weights 400, 500, 600, 700)                                   |
| Font display/headings | Outfit (weights 400, 500, 600, 700, 800)                           |
| Button primary      | `rounded-full`, `bg-primary-600`, white text, hover `bg-primary-700`  |
| Button secondary    | `rounded-full`, `bg-white`, `text-primary-600`                        |
| Input fields        | `rounded-full` (hero), `rounded-lg` (newsletter)                     |
| Card border radius  | `rounded-2xl` (testimonial cards, product images)                    |
| Logo box            | `rounded-xl`, gradient `from-primary-500 to-primary-600`            |
| Section padding     | `py-20 lg:py-28` (major sections)                                    |
| Container           | `max-w-7xl mx-auto px-4 lg:px-8`                                    |
| Announcement bar    | Gradient primary-600→primary-500, white text, small font             |
| Grid pattern        | Subtle white grid overlay on CTA section (`bg-[size:32px_32px]`)     |
| Star ratings        | `yellow-400` filled stars, SVG 5-star                                |
| Dark mode support   | Class-based toggle, `dark:bg-gray-950`, `dark:text-gray-100`        |
| Footer              | `bg-gray-50`, newsletter input + subscribe button, 4-col grid       |
| Trust badges        | Large stat numbers in Outfit font, `text-white`, `text-gray-500` label|

## Requirements

### Feature: Solecraft Landing Page

#### Scenario: Announcement Bar

- **GIVEN** the user loads the page
- **THEN** an announcement bar is visible at the top
- **AND** it has a gradient orange background
- **AND** it displays "Free shipping on orders over $75" text
- **AND** it shows a promo code

#### Scenario: Navigation Header

- **GIVEN** the user loads the page
- **THEN** a sticky header is visible
- **AND** it contains the Solecraft logo with lightning bolt icon in an orange gradient box
- **AND** desktop nav shows: Shop, Categories, New Arrivals, Sale, About links
- **AND** action buttons include Search, Theme Toggle, Wishlist, Cart
- **AND** the cart badge shows item count
- **AND** header becomes opaque with shadow on scroll

#### Scenario: Mobile Menu

- **GIVEN** the user is on a mobile viewport
- **THEN** a hamburger menu button is visible
- **AND** tapping it reveals the mobile nav with all links
- **AND** tapping a link closes the mobile menu

#### Scenario: Hero Section

- **GIVEN** the user loads the page
- **THEN** a full-height dark hero section is displayed
- **AND** it has gradient mesh background with decorative blurred circles
- **AND** it contains a heading "Step Into Your Next Adventure"
- **AND** it has a subtext about premium footwear
- **AND** a "Shop the Collection" primary button is displayed
- **AND** a "New Arrivals →" secondary link is shown

#### Scenario: Featured Products Grid

- **GIVEN** the user scrolls past the hero
- **THEN** a "Featured Collection" section is displayed
- **AND** it shows a section badge "Curated Selection"
- **AND** 4 product cards are displayed in a grid
- **AND** each card shows: product image, category label, product name, star rating, price, color swatches
- **AND** each card has Add to Cart and Add to Wishlist overlay buttons
- **AND** product images use `picsum.photos` placeholders

#### Scenario: Testimonials Section

- **GIVEN** the user scrolls past the product grid
- **THEN** a "What Our Customers Say" section is displayed on dark background
- **AND** it shows 3 testimonial cards with 5-star ratings
- **AND** each card has a quote, author name, and role
- **AND** each card has an avatar image (Unsplash placeholder)
- **AND** trust badges below show: 50K+ Happy Customers, 4.9/5 Rating, 15K+ Reviews, 98% Recommend

#### Scenario: CTA / Newsletter Section

- **GIVEN** the user scrolls past testimonials
- **THEN** a primary-orange background section is displayed
- **AND** it has a subtle grid pattern overlay
- **AND** it contains heading "Ready to Step Up Your Game?"
- **AND** an email input with "Get 15% Off" button is shown
- **AND** App Store and Google Play badges are displayed

#### Scenario: Footer

- **GIVEN** the user scrolls to the bottom
- **THEN** a newsletter signup bar is visible with "Join the Stride Club" heading
- **AND** a 4-column footer grid is shown
- **AND** columns: Brand (with social icons), Shop links, Help links, About links
- **AND** a bottom bar shows copyright, Privacy/Terms links, and payment icons
- **AND** a "Component Dock" link is present (as per project rules)

#### Scenario: Dark Mode Toggle

- **GIVEN** the user clicks the theme toggle button
- **THEN** the page switches between light and dark themes
- **AND** preference persists via localStorage

#### Scenario: Search Modal

- **GIVEN** the user clicks the search icon
- **THEN** a search modal overlay appears
- **AND** it contains a text input with placeholder "Search shoes, brands, categories..."
- **AND** popular search tags are shown
- **AND** pressing Escape or clicking backdrop closes the modal

#### Scenario: Add to Cart Interaction

- **GIVEN** the user clicks "Add to Cart" on a product card
- **THEN** a success toast notification appears
- **AND** the cart badge count increments

#### Scenario: Responsive Layout

- **GIVEN** the user views on mobile viewport (< 640px)
- **THEN** the product grid stacks to single column
- **AND** the testimonial grid stacks to single column
- **AND** the footer collapses to 2 columns
- **AND** navigation switches to hamburger menu

## Verification checklist

- [ ] Announcement bar renders with gradient orange background
- [ ] Sticky header with logo, nav links, action buttons
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Hero section is full-height with dark gradient background
- [ ] 4 product cards render with image, name, rating, price, color swatches
- [ ] Product card hover shows Add to Cart / Wishlist buttons
- [ ] Testimonials section shows 3 cards with stars, quote, author
- [ ] Trust badge stats render in large Outfit font
- [ ] CTA section has orange background with grid pattern
- [ ] Newsletter form with email input and CTA button
- [ ] Footer has newsletter bar, 4-column grid, bottom bar with payment icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] Dark mode toggle works and persists via localStorage
- [ ] Search modal opens/closes with Escape key support
- [ ] Add to Cart toast notification appears
- [ ] All responsive breakpoints work (mobile, tablet, desktop)
- [ ] No ColorLib references in app source code
- [ ] Footer CNAME and homepage configured for `solecraft.free.componentdock.com`
