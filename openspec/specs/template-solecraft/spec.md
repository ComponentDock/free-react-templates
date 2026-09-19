# Template: Solecraft (E-Commerce / Footwear)

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

## Gherkin Requirements

### Feature: Solecraft Landing Page

#### Scenario: Announcement Bar
- **Given** the user loads the page
- **Then** an announcement bar is visible at the top
- **And** it has a gradient orange background
- **And** it displays "Free shipping on orders over $75" text
- **And** it shows a promo code

#### Scenario: Navigation Header
- **Given** the user loads the page
- **Then** a sticky header is visible
- **And** it contains the Solecraft logo with lightning bolt icon in an orange gradient box
- **And** desktop nav shows: Shop, Categories, New Arrivals, Sale, About links
- **And** action buttons include Search, Theme Toggle, Wishlist, Cart
- **And** the cart badge shows item count
- **And** header becomes opaque with shadow on scroll

#### Scenario: Mobile Menu
- **Given** the user is on a mobile viewport
- **Then** a hamburger menu button is visible
- **And** tapping it reveals the mobile nav with all links
- **And** tapping a link closes the mobile menu

#### Scenario: Hero Section
- **Given** the user loads the page
- **Then** a full-height dark hero section is displayed
- **And** it has gradient mesh background with decorative blurred circles
- **And** it contains a heading "Step Into Your Next Adventure"
- **And** it has a subtext about premium footwear
- **And** a "Shop the Collection" primary button is displayed
- **And** a "New Arrivals →" secondary link is shown

#### Scenario: Featured Products Grid
- **Given** the user scrolls past the hero
- **Then** a "Featured Collection" section is displayed
- **And** it shows a section badge "Curated Selection"
- **And** 4 product cards are displayed in a grid
- **And** each card shows: product image, category label, product name, star rating, price, color swatches
- **And** each card has Add to Cart and Add to Wishlist overlay buttons
- **And** product images use `picsum.photos` placeholders

#### Scenario: Testimonials Section
- **Given** the user scrolls past the product grid
- **Then** a "What Our Customers Say" section is displayed on dark background
- **And** it shows 3 testimonial cards with 5-star ratings
- **And** each card has a quote, author name, and role
- **And** each card has an avatar image (Unsplash placeholder)
- **And** trust badges below show: 50K+ Happy Customers, 4.9/5 Rating, 15K+ Reviews, 98% Recommend

#### Scenario: CTA / Newsletter Section
- **Given** the user scrolls past testimonials
- **Then** a primary-orange background section is displayed
- **And** it has a subtle grid pattern overlay
- **And** it contains heading "Ready to Step Up Your Game?"
- **And** an email input with "Get 15% Off" button is shown
- **And** App Store and Google Play badges are displayed

#### Scenario: Footer
- **Given** the user scrolls to the bottom
- **Then** a newsletter signup bar is visible with "Join the Stride Club" heading
- **And** a 4-column footer grid is shown
- **And** columns: Brand (with social icons), Shop links, Help links, About links
- **And** a bottom bar shows copyright, Privacy/Terms links, and payment icons
- **And** a "Component Dock" link is present (as per project rules)

#### Scenario: Dark Mode Toggle
- **Given** the user clicks the theme toggle button
- **Then** the page switches between light and dark themes
- **And** preference persists via localStorage

#### Scenario: Search Modal
- **Given** the user clicks the search icon
- **Then** a search modal overlay appears
- **And** it contains a text input with placeholder "Search shoes, brands, categories..."
- **And** popular search tags are shown
- **And** pressing Escape or clicking backdrop closes the modal

#### Scenario: Add to Cart Interaction
- **Given** the user clicks "Add to Cart" on a product card
- **Then** a success toast notification appears
- **And** the cart badge count increments

#### Scenario: Responsive Layout
- **Given** the user views on mobile viewport (< 640px)
- **Then** the product grid stacks to single column
- **And** the testimonial grid stacks to single column
- **And** the footer collapses to 2 columns
- **And** navigation switches to hamburger menu

## Verification Checklist

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
