# Loomwell — Implementation Tasks & Design Notes

## Source
- ColorLib: Karma → https://preview.colorlib.com/theme/karma/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure Order (section-by-section)

1. **Header** — `Navbar.tsx`
   - Logo left, nav right (Home, Shop w/dropdown, Blog w/dropdown, Pages w/dropdown, Contact)
   - Right side: cart icon, search toggle icon
   - Mobile: hamburger toggle → slide-down menu
   - Sticky positioning with white bg
   - Expandable search bar below nav (gradient bg)

2. **Banner** — `Hero.tsx`
   - Full-width background image (picsum.photos/seed/loomwell-hero/1920/900)
   - Owl-carousel-style slider with 2+ slides
   - Each slide: 5-col left (heading, description, "Add to Bag" CTA) + 7-col right (product image)
   - CTA: circular add-btn with icon + uppercase "Add to Bag" text
   - Fullscreen height alignment

3. **Features** — `Features.tsx`
   - Shadow box container (`.features-inner` style)
   - 4-column grid: icon + h6 heading + paragraph
   - Replace icon images with lucide-react icons (Package, RotateCcw, Headphones, Shield)
   - Columns separated by right border (last = no border)
   - Headings: Free Delivery, Return Policy, 24/7 Support, Secure Payment

4. **Category** — `CategoryGrid.tsx`
   - Asymmetric grid: left 8 cols (2x2) + right 4 cols (1 tall)
   - Each card: product image + dark overlay + title text centered at bottom
   - Overlay appears on hover
   - Images: picsum.photos/seed/loomwell-cat-{1..5}/
   - Category titles: "Sneaker for Sports", "Product for Couple", etc.

5. **Latest Products** — `ProductCarousel.tsx`
   - Section title "Latest Products" centered
   - Product card grid (4 columns, 2 rows = 8 cards per slide)
   - Each card: image, h6 title, price (current + strikethrough original), prd-bottom action row
   - Action row: 4 icons (ShoppingBag, Heart, RefreshCw, Eye from lucide-react)
   - Action row visible on hover (opacity/transform transition)
   - CSS carousel for multiple slides

6. **Coming Products** — `ProductCarousel.tsx` (reuse)
   - Section title "Coming Products"
   - Same layout as Latest Products, different content

7. **Exclusive Deal** — `ExclusiveDeal.tsx`
   - Two-column split layout
   - Left (6 cols): bg image (picsum.photos/seed/loomwell-deal/600/400), heading, subtitle, countdown timer, "Shop Now" pill button
   - Countdown: Days/Hours/Mins/Secs boxes with large numbers
   - Right (6 cols): exclusive product carousel with product image, price, title, "Add to Bag" CTA
   - Section bg: `#f9f9ff`

8. **Brand Logos** — `BrandLogos.tsx`
   - 5-column row of brand logo placeholders
   - Use simple text/SVG placeholders instead of actual logo images
   - Each wrapped in an anchor tag
   - Horizontal strip, subtle styling

9. **Deals of the Week** — `RelatedProducts.tsx`
   - Section title "Deals of the Week" centered
   - Left (9 cols): 3x3 grid of related product items
   - Each item: small thumbnail + title link + price (current + strikethrough)
   - Right (3 cols): sidebar category image (picsum.photos/seed/loomwell-sidebar/300/400)

10. **Footer** — `Footer.tsx`
    - Dark bg (`#222222`)
    - 4 widget columns:
      - About Us: h6 + description
      - Newsletter: h6 + subtitle + email form (input + gradient submit button)
      - Instagram Feed: h6 + 2x4 thumbnail grid (picsum.photos/seed/loomwell-insta-{1..8}/100/100)
      - Follow Us: h6 + "Let us be social" + 4 social icon links (Facebook, Twitter, Dribbble, Behance from lucide-react)
    - Bottom bar: copyright text, Component Dock link
    - Replace Colorlib attribution with Component Dock

## Key Design Decisions

- **Gradient brand color**: Use Tailwind `bg-gradient-to-r from-[#ffba00] to-[#ff6c00]` for all CTA buttons
- **Pill buttons**: `rounded-full` class, gradient bg, white text, uppercase
- **Button hover**: Skewed pseudo-element sweep animation (CSS `skewX(40deg)` on `::before`)
- **Product card hover**: Action row transitions from hidden to visible on card hover
- **Countdown timer**: Use `useState` + `useEffect` with `setInterval` for live countdown
- **Carousel**: CSS-based horizontal scroll or simple state-based carousel (avoid heavy deps)
- **Category overlay**: Semi-transparent dark overlay with title text, visible by default
- **Font loading**: Google Fonts link in `index.html` for Poppins (500, 700) and Roboto (400)
- **Search bar**: Expandable input with gradient background, toggled by search icon click
