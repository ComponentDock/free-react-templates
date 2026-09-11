# Flagship — Implementation Tasks & Design Notes

**Source:** ColorLib Dealers (https://colorlib.com/wp/template/dealers/)
**Preview:** https://preview.colorlib.com/theme/dealers/
**New name:** Flagship
**Type:** Fashion E-Commerce

## Section-by-Section Fidelity Notes

### 1. Navbar
- White bg, sticky positioning
- Logo: text "Flagship" (no image), bold
- Nav links: Collection (with nested dropdown Men/Women/Children), Shop, Catalogs, Contact
- Right icons: search (magnifying glass), wishlist (heart outline), shopping bag with numeric badge
- Search overlay: slides in from top, has close button + text input
- Mobile: hamburger toggle, sidebar/dropdown menu

### 2. Hero
- Light gray / transparent background
- Left column (5 cols): product name "Madewell" (h1, bold), "Summer Collection" (h4), price block (bold "$1,499" + strikethrough "$1,999"), two buttons side by side
- Right column (7 cols): transparent PNG person image, aligned to bottom-right
- AOS fade animation
- Use `picsum.photos/seed/flagship-hero/800/600` for hero product image

### 3. Product Grid
- Full-width container-fluid, no gutters (`row no-gutters`)
- 3 columns on desktop, 2 on mobile
- Each product: `<a>` wrapping full image + info block (h3 title, span.collection, strong.price)
- Some products have a `.tag` badge (absolute positioned, "Sale") with `#ffe5ae` bg
- Products separated by `border-left: 1px solid #eee` and `border-bottom`
- Use `picsum.photos/seed/flagship-prod-{n}/400/400` for product images (6 products)

### 4. Promo Banner 1
- Full-width section with light bg, `data-aos="fade"`
- Left (8 cols): model/person image (use `picsum.photos/seed/flagship-model1/600/800`)
- Right (4 cols): subtitle "#New Summer Collection 2019", h1 "Jacket", black button "Shop Now"
- Text aligned left within the right column

### 5. Collections Carousel
- Centered "Collections" heading (uppercase, h2)
- Horizontal carousel of product cards (same design as product grid cards)
- Implement as horizontal scrollable row or Swiper component
- 6 product cards reusing the same card design

### 6. Promo Banner 2
- Same layout as Banner 1 but with different content
- Left (6 cols): model image (use `picsum.photos/seed/flagship-model2/600/800`)
- Right (6 cols): subtitle "#New Summer Collection 2019", h1 "New Denim Coat", black button

### 7. Footer
- Dark bg (`#25262a` or Tailwind `slate-800`)
- 4-column grid:
  - Col 1: "About Us" paragraph + Subscribe form (email input + "Send" btn-primary)
  - Col 2 (wide): "Quick Links" with 3 sub-columns of link lists
  - Col 3: "Contact Info" — address, phone (tel: link), email
- Bottom bar: centered copyright text with Component Dock link
- Top border: `custom-border-top` (1px solid)

## Implementation Order

1. Set up app folder, package, vite config, index.html (Rubik font link)
2. Navbar component (with search overlay state)
3. Hero component
4. ProductGrid component (6 products with sale badges)
5. PromoBanner component (reusable, used twice with different content)
6. CollectionsCarousel component
7. Footer component
8. Compose in App.tsx
9. Tests (Vitest + RTL)
10. Verify coverage 100%, build passes

## Key Decisions

- **Carousel:** Use CSS horizontal scroll or Swiper.js (check if already in packages/ui)
- **Search overlay:** Local state toggle, no routing needed
- **Dropdown:** CSS-only or React state toggle for Collection menu
- **Product data:** Hardcoded array of 6 products (no API)
- **Images:** All `picsum.photos` with deterministic seeds
