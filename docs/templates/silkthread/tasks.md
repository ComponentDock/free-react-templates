# SilkThread — Implementation Notes

## Source
- ColorLib slug: `malefashion`
- Preview: https://preview.colorlib.com/theme/malefashion/
- New name: `silkthread`

## Section order (fidelity)

1. Navbar — top bar (shipping text, sign in, FAQs, currency), logo, nav (Home, Shop, Pages dropdown, Blog, Contacts), search/heart/cart icons, offcanvas mobile
2. Hero — 2-slide carousel, dark image bg, "Summer Collection" subtitle + "Fall - Winter Collections 2030" h2 + black "Shop now" CTA
3. Banner — 3 category items: "Clothing Collections 2030", "Accessories", "Shoes Spring 2030" (image + text)
4. Product — product cards grid, hover overlay icons, color swatches, New/Sale labels, prices
5. Categories — light beige bg (#f3f2ee), large text left, hot deal + countdown timer right
6. Instagram — 6 images in single row (16.67% each)
7. Latest — "Latest News", 2 blog post cards with image, date, title, excerpt
8. Footer — dark bg (#111111), about + widgets, copyright with Component Dock

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #e53637 (red) |
| dark | #111111 |
| body text | #3d3d3d |
| categories bg | #f3f2ee |
| footer bg | #111111 |
| button bg | #000000 |
| button text | #ffffff |
| button radius | 60px (pill) |
| font | Nunito Sans |

## Component mapping

- `Navbar.tsx` — header with top bar, logo, nav, icons, offcanvas toggle
- `Hero.tsx` — 2-slide carousel with dark bg
- `Banner.tsx` — 3 category banners in row
- `ProductGrid.tsx` — product cards with hover effects, swatches, labels
- `Categories.tsx` — split: text left, hot deal + countdown right
- `InstagramFeed.tsx` — 6-image grid
- `Latest.tsx` — blog post cards
- `Footer.tsx` — dark footer with widgets

## Fidelity notes

- Match section order exactly as listed above
- Use placeholder images from picsum.photos with seed `silkthread-N`
- Icons from lucide-react (replace image-based icons)
- Google Font: Nunito Sans via index.html link
- All buttons pill-shaped (rounded-full or border-radius: 60px)
- Categories section has large decorative text on left, hot deal on right
- Product hover effects: overlay with compare/wishlist/quickview icons
- Countdown timer in categories section (can use a simple state-based timer)
- Instagram section: 6 images in a single row, each ~16.67% width
- Footer must link Component Dock (https://www.componentdock.com/)
- No ColorLib references in app code
