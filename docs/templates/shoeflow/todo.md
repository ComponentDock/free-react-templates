# ShoeFlow — Implementation Outline

Source: ColorLib Solestyle (https://preview.colorlib.com/theme/solestyle/)
New name: shoeflow
Category: E-commerce / Footwear

## Component structure order

1. `AnnouncementBar.tsx` — Promo banner, gradient bg (orange-600 → orange-500)
2. `Navbar.tsx` — Sticky header, logo, desktop nav, mobile menu, search modal, dark mode toggle, cart badge
3. `Hero.tsx` — Split layout: left content (headline, subtitle, 2 CTAs, stats), right product image with floating badges
4. `Categories.tsx` — 6 category cards in responsive grid (sm:2col, lg:3col)
5. `TrendingProducts.tsx` — 8 product cards, 4-col grid, badges, hover quick-actions
6. `TrustBar.tsx` — 4 trust features in a row (icon + title + description)
7. `NewArrivals.tsx` — 4 product cards (subset of trending), same card component
8. `Testimonials.tsx` — 3 review cards on dark bg + trust stats bar
9. `CtaNewsletter.tsx` — Orange bg CTA with email form + app store badges
10. `Footer.tsx` — Newsletter strip, 4-col links, social icons, payment badges, Component Dock

## Shared sub-components

- `ProductCard.tsx` — Reusable card used by TrendingProducts and NewArrivals
  - Props: image, name, category, rating, price, salePrice?, colors, badges, isNew?
- `StarRating.tsx` — 5-star rating display
- `CategoryCard.tsx` — Category image card with overlay
- `StatItem.tsx` — Hero stats and testimonial trust stats

## Design token notes (from CSS extraction)

- Brand palette: orange-500 (#f97316) primary, orange-600 (#ea580c) dark variant
- Headings: "Outfit" font family (font-display class)
- Body: "Inter" font family
- Card radius: rounded-2xl (1rem)
- Buttons: rounded-full for CTAs, rounded-lg for icon buttons
- Dark mode: full class-based dark: variant support
- Star rating color: yellow-400
- Badges: NEW = green-500, BESTSELLER = amber-500, sale = primary-500

## Section-by-section fidelity notes

### AnnouncementBar
- Simple centered text on gradient background
- Text: "Free shipping on orders over $75 | Use code STRIDE20 for 20% off your first order"
- Replace with generic promo text, keep gradient style

### Navbar
- Sticky with bg-white/95 backdrop-blur-md
- Logo: rounded-xl gradient bg (orange) + icon + brand name (Outfit font)
- Desktop nav: Shop, Categories, New Arrivals, Sale, About
- Right side: search icon, dark mode toggle, wishlist (hidden mobile), cart with count badge
- Mobile: hamburger → slide-down menu with all links + Wishlist + My Account
- Search modal: full overlay, rounded search input, popular tags

### Hero
- Dark bg (gray-950) with gradient mesh, decorative circles, grid pattern overlay
- Two-col grid (lg:grid-cols-2): content left, image right
- Content: pill badge "New Collection 2032", h1 "Step Into Your Best" (gradient text), subtitle, 2 CTAs, stats bar
- Stats: "50K+ Happy Customers | 4.9 Average Rating | 300+ Styles Available"
- Image: floating product photo with 2 floating glass-morphism badges (Free Shipping, Money Back)

### Categories
- Section header with "View All" link
- 6 cards in sm:2col lg:3col grid
- Each: full-bleed image, gradient overlay (bottom-up dark), product count pill, category name (h3 Outfit), description, "Shop Now" arrow link
- Hover: image scale-105

### TrendingProducts
- Section header: "Most Popular Styles" with "Shop All" link
- 8 product cards in 4-col grid
- Each card: square image, overlay quick-actions (Add to Cart + wishlist icon) on hover, badge (NEW/BESTSELLER/sale%), category label, product name, star rating, price, sale price (strikethrough), color swatches, sizes count
- Hover: image scale-105, quick-actions fade in

### TrustBar
- 4 items in row, each: icon in rounded-xl primary-100 bg, title, description
- Items: Free Shipping ($75+), 60-Day Returns, Size Guarantee, Secure Checkout

### NewArrivals
- "Just Dropped" green pill badge, heading, description
- 4 product cards (same ProductCard component)
- "Shop New Arrivals" link

### Testimonials
- Dark section (bg-gray-950)
- 3 cards in lg:3col grid, each: rounded-2xl bg-gray-900, 5-star rating, blockquote, author (avatar + name + role)
- Trust stats bar below: 50K+ customers, 4.9/5 rating, 15K+ 5-star reviews, 98% recommend

### CtaNewsletter
- Orange bg (primary-600) with grid pattern overlay + decorative circles
- Heading: "Ready to Step Up Your Game?"
- Subtitle: Join community, 15% off, early access
- Email form: rounded-full input + "Get 15% Off" button
- Disclaimer: "No spam, ever. Unsubscribe anytime."
- App Store + Google Play badges below

### Footer
- Newsletter strip at top: "Stay in the loop" + email input + Subscribe button
- 4-column grid: Shop (link list), Help (link list), Company (link list), Legal (link list)
- Social icons row: Instagram, Twitter/X, Facebook, YouTube
- Payment icons: Visa, Mastercard, AMEX, PayPal, Apple Pay
- Component Dock attribution at bottom
