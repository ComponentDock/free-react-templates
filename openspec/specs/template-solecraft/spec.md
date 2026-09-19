# Template: Solecraft (E-Commerce Shoe Store)

## Purpose

Solecraft is a single-page E-COMMERCE SHOE STORE landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Solestyle" free template (source:
https://colorlib.com/wp/template/solestyle/), built under a DIFFERENT name
(**Solecraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

**Preview URL — REACHABLE (verified 2026-09-19):**
`https://preview.colorlib.com/theme/solestyle/`
(title: "Stride - Step Into Style", HTTP 200, full Tailwind 4.3.3 Astro site).

The original is a dark-themed shoe e-commerce landing page with a
prominent announcement bar, sticky header with dark-mode toggle, a
full-viewport hero with gradient mesh background and floating product
imagery, a product grid (4 items with ratings/color swatches),
category cards with hover overlays, a newsletter/CTA section with
app store badges, testimonials with trust stats, and a comprehensive
footer. It uses Inter (body) + Outfit (display) fonts, with orange
(#ea580c / #f97316) as the primary accent color on a near-black
(#030712) background.

**WHAT MAKES SOLECRAFT DISTINCT (signature behaviors):**

1. **Dark-first e-commerce with gradient mesh hero.** The hero section
   uses a multi-stop gradient (gray-900 → gray-950 → primary-950) with
   decorative blurred circles (primary-500/10 at 100px blur). The product
   image floats with a `float-animation` (4s ease-in-out, translateY +
   rotate). This is NOT a flat hero — it's a moody, depth-layered scene.
2. **Announcement bar with promo code.** A thin gradient bar
   (primary-600 → primary-500) spans the full width above the header,
   displaying "Free shipping on orders over $75 | Use code STRIDE20 for
   20% off". This bar is always visible (not dismissible).
3. **Product cards with add-to-cart animation + wishlist toggle.**
   Each product card has a quick-add button that triggers a `scale(0.95)`
   bounce animation, a wishlist heart icon that toggles between filled
   and outline states, color swatch dots, star ratings, and price display.
   Cards use `card-hover` (translateY(-4px) + shadow on hover).
4. **Category cards with overlay reveal.** Six category cards (Running,
   Sneakers, Basketball, Casual, Boots, Sandals) use a dark overlay
   (opacity 0→0.6 on hover) with the category name sliding up from
   below (transform translateY). Background images use picsum placeholders.
5. **Primary-600 CTA section with grid pattern.** The newsletter/CTA
   section has a primary-600 background with a subtle repeating grid
   pattern (32px square, white/5% lines), decorative blur circles, and
   a rounded-full email input + button. Below: App Store + Google Play
   badges in semi-transparent black containers.
6. **Testimonials with trust stats.** Three-column testimonial grid
   with dark (gray-900) rounded-2xl cards, yellow star ratings, author
   avatars (circular), and a horizontal stats bar (50K+ customers,
   4.9/5 rating, 15K+ reviews, 98% recommend) separated by gray-800
   vertical dividers.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/solestyle/_astro/Base.LD3yxqgO.css`
(Tailwind 4.3.3 compiled output):

### Colors
| Token              | Value         | Notes                              |
| ------------------ | ------------- | ---------------------------------- |
| primary-50         | #fff7ed       | Very light orange (hover bg)       |
| primary-100        | #ffedd5       | Light orange                       |
| primary-200        | #fed7aa       |                                    |
| primary-400        | #fb923c       |                                    |
| primary-500        | #f97316       | Main accent (buttons, links)       |
| primary-600        | #ea580c       | CTA buttons, announcement bar      |
| primary-700        | #c2410c       | Button hover                       |
| primary-800        | #9a3412       |                                    |
| primary-900        | #7c2d12       |                                    |
| primary-950        | #431407       | Darkest orange (hero gradient end) |
| gray-50            | #f9fafb       | Light bg (footer)                  |
| gray-100           | #f3f4f6       | Border light                       |
| gray-200           | #e5e7eb       | Border                             |
| gray-300           | #d1d5db       | Border dark                        |
| gray-400           | #9ca3af       | Muted text                         |
| gray-500           | #6b7280       | Secondary text                     |
| gray-600           | #4b5563       | Body text                          |
| gray-700           | #374151       | Dark text on light                 |
| gray-800           | #1f2937       | Dark card bg, dividers             |
| gray-900           | #111827       | Card bg (testimonials), header     |
| gray-950           | #030712       | Page bg (dark mode default)        |

### Typography
| Token          | Value                                |
| -------------- | ------------------------------------ |
| font-sans      | "Inter", system-ui, sans-serif       |
| font-display   | "Outfit", system-ui, sans-serif      |
| font-weight    | 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold) |

### Radii / Shapes
| Token      | Value    | Usage                           |
| ---------- | -------- | ------------------------------- |
| radius-lg  | 0.5rem   | Buttons, inputs                 |
| radius-xl  | 0.75rem  | Input containers                |
| radius-2xl | 1rem     | Cards, product images           |
| radius-3xl | 1.5rem   | Hero image container            |
| rounded-full | 9999px | Pill buttons, badges, avatars   |

### Shadows
- `shadow-sm`: subtle (cards at rest)
- `shadow-lg`: medium (cards hover, product overlays)
- `shadow-2xl`: heavy (modals, search overlay)
- `shadow-primary-500/25-50`: orange glow on primary buttons

### Animations
- `float`: 4s ease-in-out infinite (hero product image)
- `add-to-cart`: 0.2s ease-in-out scale bounce
- `sale-pulse`: 2s ease-in-out opacity pulse
- `skeleton-loading`: 1.5s infinite gradient shimmer
- `card-hover`: transform translateY(-4px) + shadow on hover

## Gherkin requirements

### Feature: Solecraft landing page

As a shopper visiting the Solecraft landing page,
I want to browse shoes, view product details, and sign up for deals,
so that I can find and purchase footwear I like.

#### Scenario: Announcement bar displays promo information
  Given I am on the landing page
  Then I should see an announcement bar at the top
  And the bar should display "Free shipping on orders over $75"
  And the bar should display a promo code

#### Scenario: Header shows navigation and utilities
  Given I am on the landing page
  Then I should see a sticky header with logo "Solecraft"
  And I should see navigation links: Shop, Categories, New Arrivals, Sale, About
  And I should see a search button
  And I should see a dark mode toggle button
  And I should see a cart icon with item count badge

#### Scenario: Hero section displays main call-to-action
  Given I am on the landing page
  Then I should see a full-viewport dark hero section
  And I should see a headline "Step Into Style" (or similar)
  And I should see a subtitle describing premium footwear
  And I should see "Shop Now" and "Explore Collection" buttons
  And I should see a floating product image with a badge

#### Scenario: Featured products display correctly
  Given I am on the landing page
  When I scroll to the featured products section
  Then I should see 4 product cards in a grid
  And each card should show an image, category, name, price, and star rating
  And each card should have color swatch dots
  And each card should have an add-to-cart button
  And hovering a card should lift it (translateY + shadow)

#### Scenario: Product add-to-cart animation
  Given I am viewing the featured products
  When I click the add-to-cart button on a product
  Then the button should play a scale bounce animation
  And the cart badge count should increment

#### Scenario: Wishlist toggle
  Given I am viewing the featured products
  When I click the wishlist heart icon on a product
  Then the heart icon should toggle between outline and filled state

#### Scenario: Category cards display with hover effect
  Given I am on the landing page
  When I scroll to the categories section
  Then I should see 6 category cards (Running, Sneakers, Basketball, Casual, Boots, Sandals)
  And each card should have a background image
  And hovering a card should reveal the category name with an overlay

#### Scenario: Newsletter/CTA section
  Given I am on the landing page
  When I scroll to the CTA section
  Then I should see a primary-colored background with grid pattern
  And I should see a headline inviting signup
  And I should see an email input and "Get 15% Off" button
  And I should see App Store and Google Play download badges

#### Scenario: Testimonials section
  Given I am on the landing page
  When I scroll to the testimonials section
  Then I should see 3 testimonial cards in a grid
  And each card should show star ratings, a quote, and an author with avatar
  And I should see trust stats (50K+ customers, 4.9/5 rating, etc.)

#### Scenario: Footer with links and newsletter
  Given I am on the landing page
  When I scroll to the footer
  Then I should see a newsletter signup form
  And I should see 4 columns of links (Brand, Shop, Help, About)
  And I should see social media icon links
  And I should see payment method icons (Visa, Mastercard, Amex, Apple Pay)
  And I should see a copyright line
  And I should see a "Component Dock" attribution link

#### Scenario: Dark mode toggle
  Given I am on the landing page
  When I click the dark mode toggle button
  Then the page theme should switch between light and dark modes
  And my preference should be saved to localStorage

#### Scenario: Search modal opens
  Given I am on the landing page
  When I click the search button
  Then a search modal should overlay the page
  And I should see a search input with popular tag suggestions
  And pressing Escape should close the modal

#### Scenario: Mobile responsive layout
  Given I am viewing the page on a mobile viewport
  Then the header should show a hamburger menu
  And the product grid should stack to a single column
  And the category cards should stack to a single column
  And the testimonial cards should stack to a single column

## Verification checklist

- [ ] Announcement bar visible with promo text
- [ ] Sticky header with logo, nav, search, dark mode, cart
- [ ] Hero section: gradient mesh bg, headline, CTAs, floating image
- [ ] Featured products: 4 cards, ratings, colors, add-to-cart, wishlist
- [ ] Category cards: 6 cards, hover overlay reveal
- [ ] CTA section: primary bg, grid pattern, email signup, app badges
- [ ] Testimonials: 3 cards, stars, quotes, avatars, trust stats
- [ ] Footer: newsletter, 4 link columns, social icons, payment icons, copyright, Component Dock link
- [ ] Dark mode toggle persists to localStorage
- [ ] Search modal opens/closes (button + Escape)
- [ ] Mobile: hamburger menu, stacked grids
- [ ] No references to ColorLib in app code
- [ ] Footer links to componentdock.com
- [ ] Tailwind @theme tokens match extracted values
