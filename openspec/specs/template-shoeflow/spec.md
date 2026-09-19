# Template: ShoeFlow (E-commerce / Footwear)

## Purpose

Recreation of ColorLib **Solestyle** — a premium footwear e-commerce single-page
template.

- **ColorLib source:** https://colorlib.com/wp/template/solestyle/
- **Preview URL:** https://preview.colorlib.com/theme/solestyle/
- **New name:** `shoeflow` (apps/shoeflow, @free-react-templates/shoeflow)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens (from live preview CSS)

| Token              | Value                         | Source                        |
| ------------------ | ----------------------------- | ----------------------------- |
| Brand color        | `#f97316` (orange-500)        | CSS primary-500               |
| Brand dark         | `#ea580c` (orange-600)        | CSS primary-600               |
| Brand light        | `#ffedd5` (orange-100)        | CSS primary-100               |
| Display font       | "Outfit", system-ui, sans-serif | --font-display              |
| Body font          | "Inter", sans-serif           | @font-face declarations       |
| Card radius        | `rounded-2xl` (1rem)          | Product cards, categories     |
| Button radius      | `rounded-full` (9999px)       | Hero CTAs, newsletter         |
| Button solid bg    | primary-600, hover: primary-500 | Shop Now, Subscribe         |
| Dark mode          | Class-based (dark:)           | Tailwind dark variant         |
| Announcement bar   | gradient from-primary-600 to-primary-500 | Top banner          |
| Testimonial bg     | bg-gray-900                   | Dark section cards            |
| Newsletter section | bg-primary-600                | CTA block                     |
| Star color         | text-yellow-400               | Ratings throughout            |

## Visual design (from preview)

A modern, premium footwear e-commerce landing page. The hero section dominates
with a dark gradient mesh background (gray-950), floating decorative circles, a
subtle grid pattern, and a large product image on the right. Two CTAs: solid
orange "Shop Now" pill and outlined "Browse Categories" pill. Stats bar below
(50K+ Happy Customers, 4.9 Average Rating, 300+ Styles).

Category cards use full-bleed images with gradient overlays (bottom-to-top dark)
and product counts. Product cards have square aspect-ratio images, hover zoom
(scale-105), overlay quick-action buttons (Add to Cart, Wishlist), badges
(NEW/BESTSELLER/sale %), category labels, star ratings, prices, and color
swatches.

The testimonials section is dark (bg-gray-950) with 3 review cards, 5-star
ratings, and a trust stats bar. The CTA/newsletter section uses the primary
orange background with a grid pattern overlay, email signup form, and app store
badges. Footer has a newsletter strip, 4-column link grid, social icons, and
payment badges.

## Section order (top to bottom)

1. AnnouncementBar — promo banner (free shipping + coupon code)
2. Navbar — sticky header, logo, nav links, search, dark mode, cart badge
3. Hero — split: headline + CTA + stats | product image + floating badges
4. Categories — 6 category cards in responsive grid
5. TrendingProducts — 8 product cards, 4-col grid, badges + hover actions
6. TrustBar — 4-column icon+text trust features
7. NewArrivals — 4 product cards (subset of trending)
8. Testimonials — 3 review cards + trust stats bar
9. CtaNewsletter — orange CTA section with email form + app store badges
10. Footer — newsletter strip, 4-col links, social icons, payment badges, Component Dock link

## Gherkin requirements

### Scenario: Announcement bar displays promo
  **Given** the page loads
  **When** the user views the top of the page
  **Then** an announcement bar is visible with a promotional message about free shipping
  **And** the bar has an orange gradient background

### Scenario: Navbar is sticky
  **Given** the user scrolls down the page
  **When** the header passes the viewport top
  **Then** the header remains fixed (sticky) with a blur backdrop

### Scenario: Mobile menu toggles
  **Given** the viewport width is below lg breakpoint
  **When** the user clicks the hamburger menu button
  **Then** the mobile navigation menu expands
  **And** the hamburger icon changes to a close icon

### Scenario: Search modal opens and closes
  **Given** the user clicks the search icon in the header
  **When** the search modal appears
  **Then** a search input is focused
  **And** popular search tags are displayed
  **And** pressing Escape closes the modal

### Scenario: Dark mode toggles
  **Given** the user clicks the dark mode toggle button
  **When** dark mode is activated
  **Then** the page background changes to dark
  **And** text colors adapt for readability
  **And** the sun icon replaces the moon icon

### Scenario: Hero section renders
  **Given** the page loads
  **When** the user views the hero section
  **Then** a headline "Step Into Your Best" is displayed
  **And** a subtitle describes the brand
  **And** two CTAs are visible: "Shop Now" (solid) and "Browse Categories" (outlined)
  **And** stats show: 50K+ customers, 4.9 rating, 300+ styles
  **And** a featured product image is displayed

### Scenario: Categories section renders
  **Given** the page loads
  **When** the user scrolls to the categories section
  **Then** 6 category cards are displayed in a responsive grid
  **And** each card shows: image, overlay gradient, product count badge, category name, description, and "Shop Now" link
  **And** the categories are: Running, Sneakers, Basketball, Casual, Boots, Sandals

### Scenario: Product cards display correctly
  **Given** the page loads
  **When** the user views a product card
  **Then** the card shows: square image, product name, category label, star rating, price
  **And** color swatches are shown
  **And** hovering reveals quick-action buttons (Add to Cart, Add to Wishlist)
  **And** badges display when applicable (NEW, BESTSELLER, sale percentage)

### Scenario: Trust bar displays
  **Given** the page loads
  **When** the user views the trust bar section
  **Then** 4 trust items are shown: Free Shipping, 60-Day Returns, Size Guarantee, Secure Checkout
  **And** each has an icon and description text

### Scenario: Testimonials section renders
  **Given** the page loads
  **When** the user views the testimonials section
  **Then** 3 review cards are displayed
  **And** each card shows: 5-star rating, quote text, author name, author role, and avatar image
  **And** trust stats show: 50K+ Happy Customers, 4.9/5 Average Rating, 15K+ 5-Star Reviews, 98% Would Recommend

### Scenario: CTA newsletter section renders
  **Given** the page loads
  **When** the user views the newsletter CTA section
  **Then** an orange background section is displayed
  **And** a heading "Ready to Step Up Your Game?" is shown
  **And** an email input and "Get 15% Off" submit button are present
  **And** App Store and Google Play download badges are displayed

### Scenario: Footer renders with all elements
  **Given** the page loads
  **When** the user scrolls to the footer
  **Then** a newsletter subscribe strip is shown
  **And** 4 link columns are displayed: Shop, Help, Company, Legal
  **And** social media icons are present
  **And** payment method icons are displayed
  **And** a "Component Dock" attribution link is present in the footer

## Verification checklist

- [ ] Announcement bar with gradient background renders
- [ ] Sticky navbar with blur backdrop on scroll
- [ ] Mobile hamburger menu toggles open/close
- [ ] Search modal opens on icon click, closes on Escape
- [ ] Dark mode toggle switches theme
- [ ] Hero section: headline, subtitle, 2 CTAs, stats, product image
- [ ] 6 category cards with images, overlays, counts, CTAs
- [ ] Product cards with images, badges, hover actions, ratings, prices, swatches
- [ ] Trust bar with 4 feature items
- [ ] 3 testimonial cards with stars, quotes, avatars, roles
- [ ] Trust stats bar (50K+, 4.9/5, 15K+, 98%)
- [ ] Newsletter CTA section with email form
- [ ] Footer: newsletter, 4-col links, social icons, payment icons, Component Dock link
- [ ] Dark mode works across all sections
- [ ] Responsive layout: mobile, tablet, desktop
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code
