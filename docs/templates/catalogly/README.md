# Catalogly — Design Notes

**Source:** ColorLib ListAshop → https://colorlib.com/wp/template/listashop/
**Preview:** https://preview.colorlib.com/theme/listashop/

## Section Order (top to bottom)

1. TopBar — dark navy strip with email + welcome text + social icons
2. Navbar — white, logo left, links center, cart+search right
3. HomeBanner — full-width hero, light blue-gray bg, left text + right image
4. HotDeals — two side-by-side image cards with overlay text
5. FeaturedProducts — centered title + owl-carousel of product cards
6. TimerCTA — countdown section, light blue-gray bg
7. LatestProducts — carousel, same card layout as featured
8. ClientLogos — row of partner/client logos
9. MostProducts — additional product grid
10. Footer — 4-column layout, light blue-gray bg, copyright bar

## Design Tokens (from CSS)

- Brand: #c5322d (red)
- Fonts: Roboto (primary), Poppins (secondary/imported)
- Body: #777777
- Headings: #222222
- Banner bg: #e8f0f2
- Timer/Footer bg: #e5ecee
- CTA button: #c5322d bg, white text, sharp corners (0px radius)
- Banner CTA: white bg, 5px radius
- Borders: #eeeeee

## Fidelity Notes

- Top bar is dark navy (#04091e) — use a dark strip above the navbar
- Navbar items have uppercase text, hover turns brand red
- Dropdowns appear on hover (desktop), no shadows, border-bottom on items
- Banner heading is large (48px), with a product image overlapping right side
- Hot deals cards are image-heavy with text overlay at bottom-left
- Product cards use owl-carousel → use a horizontal scroll or carousel lib
- Heart and cart icons on product hover (overlay)
- Timer uses countdown display with large numbers + labels
- Footer newsletter has inline email input + arrow submit button
- Instagram feed shows 8 small thumbnail images in a grid
- Social icons in footer: Facebook, Twitter, Dribbble, Behance
- Copyright bar: centered text with heart icon, red accent links

## Component Structure (suggested)

```
App.tsx
├── TopBar.tsx
├── Navbar.tsx
├── HomeBanner.tsx
├── HotDeals.tsx
├── FeaturedProducts.tsx
├── TimerCTA.tsx
├── LatestProducts.tsx
├── ClientLogos.tsx
├── MostProducts.tsx
└── Footer.tsx
```

## Images (placeholder mapping)

- Banner hero: `https://picsum.photos/seed/catalogly-hero/800/600`
- Hot deal 1: `https://picsum.photos/seed/catalogly-hot1/600/400`
- Hot deal 2: `https://picsum.photos/seed/catalogly-hot2/600/400`
- Product images: `https://picsum.photos/seed/catalogly-prod-{1-8}/400/500`
- Instagram thumbs: `https://picsum.photos/seed/catalogly-insta-{1-8}/100/100`
- Client logos: use text placeholders or SVG
