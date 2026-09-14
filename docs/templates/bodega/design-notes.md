# Bodega — Implementation Notes

## Source Mapping

| Field | Value |
|-------|-------|
| ColorLib source | Store |
| ColorLib slug | `store` |
| Preview URL | https://preview.colorlib.com/theme/store/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/store-free-template.jpg |
| New name | `bodega` |
| Deploy target | `bodega.free.componentdock.com` |

## Section Build Order

Implement in this order (each section is a standalone component):

1. **Navbar** (`src/components/Navbar.tsx`)
   - Logo text "Bodega" left-aligned
   - Right-aligned nav links: Home, Shop, Blog, About, Contact
   - Shop has dropdown (Product Detail, Shipping Cart, Checkout, Order Complete, Wishlist)
   - Cart icon (lucide-react `ShoppingCart`) with item count badge
   - Mobile: hamburger menu toggle

2. **HeroSlider** (`src/components/HeroSlider.tsx`)
   - Full-width container, 650px height
   - 3 slides with background images (picsum.photos/seed/bodega-hero-N)
   - Dark overlay on each slide
   - Centered text: h1 (category) + h2 (item) + h2 (offer) + CTA button
   - Auto-rotation every 5s, manual prev/next arrows
   - Use a simple state-based slide transition (no external carousel lib needed)

3. **FeaturedProducts** (`src/components/FeaturedProducts.tsx`)
   - 2×2 grid layout
   - Each card: background image + dark overlay + white heading text
   - Cards: "Fashion for men", "New Arrival Dress", "Sale 20% off", "Shoes for men"
   - Hover effect: slight zoom or overlay lighten

4. **CountdownBanner** (`src/components/CountdownBanner.tsx`)
   - Large "45" number prominently displayed
   - "Sale" label
   - "Just hurry up limited offer!" subtext
   - Countdown timer display (days/hours/minutes/seconds)
   - Dark background with white/yellow text

5. **ShopGrid** (`src/components/ShopGrid.tsx`)
   - Section heading "New Arrival" with yellow (#FFC300) underline
   - 4-column product card grid
   - Each card: product image (picsum.photos/seed/bodega-prod-N), name, price, cart button
   - Cart button: square (no radius), uppercase, yellow accent on hover

6. **Testimonials** (`src/components/Testimonials.tsx`)
   - Light grey (#fafafa) background
   - Heading "Our Satisfied Customer says" centered
   - Carousel of testimonial cards
   - Each card: circular avatar (50% radius), customer name, 5-star rating, quote text
   - Implement as a simple auto-scrolling carousel or CSS scroll-snap

7. **RecentBlog** (`src/components/RecentBlog.tsx`)
   - 3-column grid of blog post cards
   - Each card: blog image, title, short excerpt
   - Images from picsum.photos/seed/bodega-blog-N

8. **Newsletter** (`src/components/Newsletter.tsx`)
   - Golden yellow (#FFC300) background
   - Heading "Sign Up for a Newsletter" with lucide-react `Send` icon
   - Email input + Subscribe button
   - Form validation: email format check

9. **Footer** (`src/components/Footer.tsx`)
   - 5-column layout:
     - Col 1: "About Store" — logo, description, social icons (lucide-react)
     - Col 2: "Customer Care" — link list
     - Col 3: "Information" — link list
     - Col 4: "News" — recent post titles
     - Col 5: "Contact Information" — address, phone, email
   - Copyright bar: "© 2024 All rights reserved | Made with Component Dock"
   - Component Dock link: `https://www.componentdock.com/`

## Design Fidelity Notes

- **Colors:** Brand yellow #FFC300 is dominant accent. Use as `bg-bodega-gold` in Tailwind theme. Red #DD3E3E for sale badges. Body text #595959, headings #333333.
- **Typography:** Roboto via Google Fonts `<link>` in index.html. Weights: 300, 400, 500, 700.
- **Buttons:** All square (border-radius: 0), uppercase, letter-spacing: 2px. Primary button bg: transparent or white with black text, hover: black bg.
- **Layout:** Bootstrap-style 12-column grid (recreate with Tailwind grid/flex). Container max-width ~1170px centered.
- **Hero:** Full-bleed slider, 650px tall, background-size: cover, dark overlay (rgba(0,0,0,0.5)).
- **Featured cards:** Background images with `background-size: cover`, dark overlay, white centered text.
- **Testimonial avatars:** 50% border-radius (circular).
- **Newsletter:** Full-width yellow bar, white text, email input with no border, button positioned absolutely inside input.
- **Footer:** White background, dark text, social icons in colored circles (first-child red, etc.).
- **Responsive:** Single column on mobile, hamburger nav, stacked product grid.

## Component Reuse from packages/ui

- `Button` / `ButtonLink` — for all CTA buttons (override to square style)
- `cn()` — class name utility throughout
- Check if `Card` compound component can be used for product cards
