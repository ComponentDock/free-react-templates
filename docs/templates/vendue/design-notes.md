# Vendue — Implementation Notes

## Source
- ColorLib "Dealers": https://colorlib.com/wp/template/dealers/
- Preview analyzed: https://preview.colorlib.com/theme/dealers/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dealers-free-template.jpg

## Section order (implement top-to-bottom)

1. **Navbar** (`components/Navbar.tsx`)
   - White bg, sticky top
   - Logo text "Vendue" (left)
   - Nav links: Collection (with dropdown), Shop, Catalogs, Contact
   - Icons: search, heart (wishlist), shopping bag with count badge
   - Mobile: hamburger toggle, collapsible nav
   - Note: dropdown has nested sub-menu (3-level depth) — simplify to 2-level for React version

2. **Hero** (`components/Hero.tsx`)
   - Full-width cover section, bg `#f9f9f9`
   - Two-column layout: left = text + CTAs, right = product image
   - Text: product name (h1), collection subtitle (h4), price with strikethrough
   - Two buttons: outline-primary + solid primary, both `rounded-0`
   - Use `picsum.photos/seed/vendue-hero/600/700` for product image

3. **ProductGrid** (`components/ProductGrid.tsx`)
   - 6 product cards in 3-column grid (no gaps)
   - Each card: image + name + collection label + price
   - Some cards have "Sale" badge (circular, `#ffe5ae` bg)
   - Cards are clickable (entire card is a link)
   - Use `picsum.photos/seed/vendue-prod-<1-6>/400/500` for images

4. **BannerCover** (`components/BannerCover.tsx`) — reusable for both banners
   - Two instances: "Jacket" and "New Denim Coat"
   - bg `#f9f9f9`, two-column: image left, text right
   - Hashtag subtitle (small, uppercase), title (h1), black CTA button
   - Use `picsum.photos/seed/vendue-banner-1/700/500` and `vendue-banner-2/700/500`

5. **CollectionsCarousel** (`components/CollectionsCarousel.tsx`)
   - "COLLECTIONS" centered heading (uppercase)
   - Horizontal scrolling carousel of product cards (same style as grid)
   - Use CSS scroll-snap or a lightweight carousel approach
   - 6+ product cards, horizontally scrollable

6. **Footer** (`components/Footer.tsx`)
   - 4-column layout (responsive: stacks on mobile)
   - Col 1: About Us text + email subscribe form (input + Send button)
   - Col 2: Quick Links in 3 sub-columns (10 links total)
   - Col 3: Contact Info (address, phone, email)
   - Copyright bar: centered text with heart icon + Component Dock link

## Design notes

- **Font:** Rubik (Google Fonts, weights 400, 700) — import in `index.html`
- **Brand color:** `#207dff` — use as Tailwind theme primary
- **Buttons:** all square corners (`rounded-0`), except sale badge which is `rounded-full`
- **Cover sections:** light gray `#f9f9f9` background, full-width
- **Product cards:** white bg, no border, hover state shows overlay
- **Section spacing:** generous vertical padding (`py-5` or `py-6`)
- **Layout:** Bootstrap-style grid → translate to Tailwind grid/flex

## Component dependencies
- No external dependencies needed (pure CSS carousel via scroll-snap)
- Icons: use lucide-react (search, heart, shopping-bag, menu, x, send)
- Form: simple controlled input for email subscribe
