# Template: Solebound (E-Commerce Footwear)

## Purpose

Recreation of ColorLib's **Solestyle** template as a modern React component.

- **Source:** [colorlib.com/wp/template/solestyle/](https://colorlib.com/wp/template/solestyle/)
- **Preview:** [preview.colorlib.com/theme/solestyle/](https://preview.colorlib.com/theme/solestyle/)
- **Source slug:** `solestyle`
- **New name:** `solebound` (never reuse ColorLib source name)
- **Package:** `@free-react-templates/solebound`
- **Deploy URL:** `https://solebound.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** E-Commerce / Footwear Landing Page

## Design Tokens

Extracted from the live preview CSS and HTML class analysis:

| Token            | Value                                    | Notes                                      |
| ---------------- | ---------------------------------------- | ------------------------------------------ |
| Brand / primary  | `#f97316` (orange-500)                   | Buttons, accents, CTA                      |
| Primary 600      | `#ea580c`                                | Button default bg, newsletter bg           |
| Primary 400      | `#fb923c`                                | Badge text, gradient text highlights       |
| Primary 950      | `#431407`                                | Hero gradient endpoint                     |
| Font display     | `Outfit`                                 | Headings, stats, display text              |
| Font sans        | `Inter`                                  | Body, nav, paragraphs                      |
| Button radius    | `rounded-full` (pill shape)              | Primary CTAs, newsletter input             |
| Card radius      | `rounded-2xl`                            | Category cards, testimonial cards          |
| Nav icon radius  | `rounded-lg`                             | Header icon buttons                        |
| Hero bg          | `gray-950` (`#030712`)                  | Dark hero with gradient mesh               |
| Hero gradient    | `from-gray-900 via-gray-950 to-primary-950` | Subtle directional gradient           |
| Section bg (alt) | `gray-50`                                | Featured products section                  |
| Section bg (dark)| `gray-950`                               | Testimonials section                       |
| CTA section bg   | `primary-600`                            | Newsletter / download CTA                  |
| Footer bg        | `gray-50`                                | Light footer                               |
| Testimonial card | `gray-900` with `rounded-2xl p-8`        | Dark card on dark section                  |
| Star color       | `yellow-400`                             | Rating stars                               |
| Border accent    | `border-white/10`                        | Hero stat dividers, grid overlay           |
| Shadow           | `shadow-primary-500/25` / `shadow-primary-500/50` | Primary button glow, sale badge   |

### Visual Design

- Dark, premium aesthetic with orange accent on near-black backgrounds
- Hero: full-viewport dark section with gradient mesh, grid pattern overlay, floating glass-morphism badges (Free Shipping, Easy Returns), sale badge circle, sneaker hero image with float animation
- Categories: white section, 3x2 grid of image cards with gradient overlay and hover-reveal text
- Featured Products: gray-50 section, horizontal scroll or grid of product cards with images, prices, add-to-cart/wishlist buttons
- Testimonials: dark section, 3-column grid of quote cards with star ratings, author photos
- CTA/Newsletter: solid orange section with grid pattern, email signup form, app store badges
- Footer: light gray with newsletter form, 3-column links (Shop, Help, About), social icons, copyright
- Sticky header with logo, nav links, search/dark-mode/wishlist/cart icons

## Requirements

### Requirement: Announcement bar renders at top

The template SHALL render a top announcement bar with a gradient background.

#### Scenario: Announcement bar display
- **WHEN** the page loads
- **THEN** a full-width bar is visible at the very top
- **AND** the bar has a gradient from primary-600 to primary-500
- **AND** the bar displays promotional text (e.g. "STRIDE20 — Extra 20% off all sale items!")
- **AND** the text is white, small, centered

### Requirement: Sticky header with navigation

The template SHALL render a sticky header with logo, navigation links, and utility icons.

#### Scenario: Header layout
- **WHEN** the header is rendered
- **THEN** it is sticky at the top with white background and backdrop-blur
- **AND** the logo "Solebound" is displayed with a primary-gradient icon
- **AND** navigation links include: Shop, Categories, New Arrivals, Sale, About
- **AND** utility icons include: Search, Dark mode toggle, Wishlist, Cart (with item count badge)

#### Scenario: Mobile menu
- **WHEN** the viewport is narrow (< lg breakpoint)
- **THEN** a hamburger menu icon is visible
- **AND** clicking it reveals a vertical mobile menu with the same nav links

### Requirement: Hero section with full-viewport dark background

The template SHALL render a hero section with dark gradient background and product showcase.

#### Scenario: Hero layout
- **WHEN** the hero section is rendered
- **THEN** it occupies at least 90vh height
- **AND** the background is dark (gray-950) with gradient mesh overlay
- **AND** a subtle grid pattern is visible over the background
- **AND** decorative blurred circles (primary-500/10 and primary-600/10) provide ambient glow

#### Scenario: Hero content
- **WHEN** the hero section is rendered
- **THEN** a "New Collection 2032" badge is shown (primary-500/10 bg, rounded-full)
- **AND** the heading reads "Step Into" + "Your Best" (gradient text primary-400 to primary-500)
- **AND** a subtitle describes premium footwear
- **AND** two CTA buttons are shown: "Shop Now" (filled primary) and "Browse Categories" (outlined white)
- **AND** stats row shows: 50K+ Happy Customers, 4.9 Rating, 300+ Styles Available

#### Scenario: Hero floating badges and sale circle
- **WHEN** the hero image area is rendered
- **THEN** a "Free Shipping" floating badge appears (glass-morphism, rounded-xl)
- **AND** an "Easy Returns" floating badge appears (glass-morphism, rounded-xl)
- **AND** a circular sale badge shows "UP TO 40% OFF" (primary-500 bg, rounded-full)

### Requirement: Categories grid section

The template SHALL render a categories section with a grid of category cards.

#### Scenario: Categories layout
- **WHEN** the categories section is rendered
- **THEN** a heading "Shop by Category" or similar is displayed
- **AND** 6 category cards are shown in a 3-column grid (Running, Sneakers, Basketball, Casual, Boots, Sandals)
- **AND** each card has a background image with gradient overlay
- **AND** each card shows the category name and a short description
- **AND** each card has a "Browse" arrow link

### Requirement: Featured products section

The template SHALL render a featured products section with product cards.

#### Scenario: Products layout
- **WHEN** the featured products section is rendered
- **THEN** a heading "Our Bestsellers" or similar is displayed
- **AND** product cards are shown in a grid
- **AND** each card shows a product image, name, price, and optional sale price
- **AND** each card has an "Add to Cart" button and a wishlist icon button

### Requirement: Testimonials section

The template SHALL render a testimonials section with customer reviews.

#### Scenario: Testimonials layout
- **WHEN** the testimonials section is rendered
- **THEN** it has a dark background (gray-950)
- **AND** a "Customer Love" badge and heading "What Our Customers Say" are displayed
- **AND** 3 testimonial cards are shown in a 3-column grid
- **AND** each card has star ratings, a quote, author name, and author photo
- **AND** a trust badges row below shows stats: 50K+ Happy Customers, 4.9/5 Average Rating, 15K+ 5-Star Reviews, 98% Would Recommend

### Requirement: CTA / newsletter section

The template SHALL render a call-to-action section with email signup.

#### Scenario: CTA layout
- **WHEN** the CTA section is rendered
- **THEN** it has a solid primary-600 background with subtle grid pattern
- **AND** the heading reads "Ready to Step Up Your Game?"
- **AND** an email input with "Get 15% Off" button is displayed
- **AND** a "No spam, ever" disclaimer is shown below

#### Scenario: App store badges
- **WHEN** the CTA section is rendered
- **THEN** App Store and Google Play download badges are displayed below the form

### Requirement: Footer with newsletter and links

The template SHALL render a footer with newsletter signup, navigation links, and social icons.

#### Scenario: Footer layout
- **WHEN** the footer is rendered
- **THEN** it has a gray-50 background
- **AND** a "Join the Stride Club" newsletter form is at the top
- **AND** the logo and site tagline are displayed
- **AND** 3 columns of links are shown: Shop (categories), Help (FAQ, Shipping, Size Guide, Contact, Track Order), About (Our Story, Sustainability, Athletes, Careers, Store Locator)
- **AND** social icons are displayed (Instagram, Facebook, Twitter, YouTube, TikTok)
- **AND** a copyright line and Component Dock attribution link are at the bottom

## Verification Checklist

- [ ] Announcement bar renders with gradient and promo text
- [ ] Header is sticky with backdrop-blur, logo, nav links, utility icons
- [ ] Mobile hamburger menu toggles open/closed
- [ ] Hero section is 90vh with dark gradient, grid pattern, floating badges
- [ ] Hero heading uses gradient text (primary-400 to primary-500)
- [ ] Hero stats row shows 3 metrics with dividers
- [ ] Sale badge circle displays "UP TO 40% OFF"
- [ ] Categories section shows 6 cards in 3-column grid
- [ ] Each category card has image, overlay, name, description, arrow link
- [ ] Featured products section shows product cards with image, price, cart/wishlist buttons
- [ ] Testimonials section shows 3 cards with stars, quotes, authors
- [ ] Trust badges row below testimonials shows 4 stats
- [ ] CTA section has primary-600 bg, email form, app store badges
- [ ] Footer has newsletter form, logo, 3 link columns, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] Dark mode toggle works across all sections
- [ ] Search modal opens and closes
- [ ] All images use picsum.photos placeholder URLs
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
