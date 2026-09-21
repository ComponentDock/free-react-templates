# Sartorial — Implementation Notes

**Source:** ColorLib Malefashion  
**Preview:** https://preview.colorlib.com/theme/malefashion/  
**New name:** sartorial  

## Section Build Order

1. TopBar — simple flex row, dark bg, utility text + links + dropdown
2. Header — 3-column flex: logo, centered nav with dropdown, icon nav options
3. Hero — Carousel with 2 slides, each with text overlay + CTA + social icons
4. Banner — Asymmetric 3-card grid (offset left, right, full-width bottom)
5. Product — Filter tabs + 4-col grid of product cards with hover overlays
6. Categories — 3-col: text, sale image, countdown timer
7. Instagram — 2-col: 6-image grid + text block
8. Blog — 3-col blog cards
9. Footer — 4-col dark footer with newsletter form
10. SearchModal — Full-screen overlay with input

## Fidelity Notes

- **Font:** Use Nunito Sans via Google Fonts link in index.html (weights 300–900)
- **Brand red (#e53637):** Applied on section title `<span>` elements (uppercase, 14px, 700, 2px letter-spacing). Also active nav underline and price hover.
- **Primary button:** Black bg (#000), white text, uppercase, 13px, letter-spacing 4px, padding 14px 30px. Sharp corners — NO border-radius.
- **Header top bar:** Full-width dark (#111111) with white text. Contains shipping promise left, sign-in/FAQs/currency dropdown right.
- **Nav dropdown:** Dark bg (#111111) with white text items.
- **Product cards:** Hover shows heart/compare/search icon overlay. Some cards have "New" or "Sale" badge labels. Color swatches at bottom.
- **Categories section:** Light bg (#f3f2ee). Left: heading text. Center: sale image with price sticker. Right: countdown timer with "Shop now" CTA.
- **Instagram:** 6 images in a grid (2 rows × 3 cols). Text block on right with heading + lorem + hashtag.
- **Footer:** Dark bg. 4 columns: logo/about/payment, Shopping links × 2, Newsletter form. Footer links to Component Dock.
- **Section spacing:** Most sections use 100px top/bottom padding.

## Placeholder Strategy

- Hero images: `https://picsum.photos/seed/sartorial-hero-1/1920/800`
- Banner images: `https://picsum.photos/seed/sartorial-banner-1/400/300`
- Product images: `https://picsum.photos/seed/sartorial-product-{1-8}/400/500`
- Sale product: `https://picsum.photos/seed/sartorial-sale/300/300`
- Instagram grid: `https://picsum.photos/seed/sartorial-insta-{1-6}/300/300`
- Blog images: `https://picsum.photos/seed/sartorial-blog-{1-3}/400/300`

## Icon Replacement

- Font Awesome → lucide-react equivalents:
  - `fa-facebook` → `Facebook`
  - `fa-twitter` → `Twitter`
  - `fa-pinterest` → `Pin`
  - `fa-instagram` → `Instagram`
  - `fa-star-o` / `fa-star` → `Star` (filled/outline)
  - `fa-bars` → `Menu`
  - `fa-heart-o` → `Heart`
  - Search icon → `Search`
  - Cart icon → `ShoppingCart`
  - Calendar icon → `Calendar`
  - Arrow down → `ChevronDown`
  - Arrow right → `ArrowRight`
