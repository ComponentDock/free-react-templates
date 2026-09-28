# Palatable — Prep Notes

Source: ColorLib Delicious (https://preview.colorlib.com/theme/delicious/)

## Section Order (top → bottom)

1. Top Header Bar — breaking news ticker (left) + social icons (right)
2. Navbar — logo left, nav links (Home, Pages dropdown, Mega Menu, Receipies, 4 Vegans, Contact), search icon right; sticky
3. Hero Carousel — 3 slides, full-width bg images, dark overlay, heading + text + "See Receipe" CTA button
4. Top Categories — 2-column, each card: bg image + overlay text (title, subtitle, CTA)
5. Best Recipes — "The best Receipies" heading, 6 cards in 3-col grid, each: image + title + 4-star rating
6. CTA Banner — full-width bg image, dark overlay, centered heading + text
7. Small Recipes — 9 items in 2-col layout, each: thumbnail + title + meta (date/comments)
8. Quote/Newsletter/Ad — 3-col: quote (centered, big quotation mark), newsletter form (bg image overlay), ad image
9. Instagram Gallery — "Follow Us Instragram" heading, 6 images horizontal row, Instagram icon hover overlay
10. Footer — social icons, centered logo, copyright with Component Dock link

## Fidelity Notes

- **Primary color:** Green #40ba37 (NOT orange/red like many food templates)
- **Button style:** Square corners (border-radius 0), 60px height — distinct from pill buttons
- **Font:** Open Sans only (single font family, weights 300-800)
- **Section padding:** 80px top/bottom on most sections
- **Overlay:** rgba(10, 12, 18, 0.55) on hero, CTA, and newsletter background images
- **No parallax** — standard background images
- **Recipe cards:** Simple image + text + star rating, no price tags
- **Small recipes list:** 2-column flex layout with thumbnail + text + meta, NOT cards
- **Instagram:** 6 equal-width images in a flex row, no gaps, hover shows Instagram icon
- **Footer:** Minimal — social icons + logo + copyright, no columns or newsletter
- **Top header:** Breaking news ticker is a simple scrolling text, social icons on right

## Implementation Notes

- Use `picsum.photos/seed/palatable-<n>/<w>/<h>` for all placeholder images
- Hero: implement as manual carousel (prev/next + dots), no external carousel lib needed
- Star ratings: use lucide-react Star icon, 4 filled + 1 empty per card
- Instagram gallery: flex row with 6 equal images, hover overlay with Instagram icon
- Newsletter form: email input + submit button over a bg image with overlay
- Mobile: hamburger menu, single-column stacking for all grids
