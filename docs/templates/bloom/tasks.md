# Bloom — Prep Notes

## Source
- ColorLib: Florist (https://colorlib.com/wp/template/florist/)
- Preview: https://preview.colorlib.com/theme/florist/
- Category: Flower Shop

## Replication Research Summary

### DOM Structure (from live preview)
Single-page flower shop landing. Uses Bootstrap grid, owl-carousel for hero and
testimonials, Magnific Popup for lightbox, nice-select for filters. Original
has custom SVG/SCSS decorations.

### Key Design Decisions for React Recreation
1. **Hero slider** — CSS auto-rotating slides (React state + CSS transitions).
   2+ slides, script-font subtitle + serif heading + dark button.
2. **Categories** — 4 image-bg cards in a row with white overlay boxes showing
   category name + item count. Simple grid, no carousel needed.
3. **About section** — 2-column layout: text left, video placeholder right.
   Below: 3 feature boxes (100% Freshness, Made by artist, Own courier).
4. **Products with filter tabs** — Tab-based filtering (All, Bouquet, Flower
   box, Flower shelf, Basket of flower, Gift combos). 10 product cards in a
   grid. Hover overlay with icon buttons.
5. **Blog** — 3 post cards with image, category tag, title, description.
6. **Testimonials** — Carousel with decorative floral background on left side.
7. **Footer** — 4-column dark footer with newsletter signup, address info,
   copyright.

### Sections (in implementation order)

| # | Section | Component | Complexity |
|---|---------|-----------|-----------|
| 1 | Navbar | `Navbar.tsx` | Medium (responsive, icons) |
| 2 | Hero Slider | `HeroSlider.tsx` | Medium (auto-rotate, script font) |
| 3 | Categories | `Categories.tsx` | Low (4 image cards) |
| 4 | About | `About.tsx` | Medium (2-col + 3 features) |
| 5 | New Arrivals | `NewArrivals.tsx` | High (filter tabs + product grid + hover) |
| 6 | Blog | `Blog.tsx` | Low (3 post cards) |
| 7 | Testimonials | `Testimonials.tsx` | Medium (carousel + decorative bg) |
| 8 | Footer | `Footer.tsx` | Medium (4 cols + newsletter + address) |

### Icon mapping (lucide-react)
- 100% Freshness → `Flower2`
- Made by artist → `Palette`
- Own courier → `Truck`
- Search → `Search`
- Cart → `ShoppingBag`
- Heart/wishlist → `Heart`

### Placeholder images
- Hero slides: `https://picsum.photos/seed/bloom-hero-1/1920/800` (etc.)
- Category cards: `https://picsum.photos/seed/bloom-cat-1/400/500` (etc.)
- Product cards: `https://picsum.photos/seed/bloom-prod-1/400/500` (etc.)
- Blog cards: `https://picsum.photos/seed/bloom-blog-1/600/400` (etc.)

### Fidelity notes
- Match EXACT section order: Navbar → Hero → Categories → About → Products → Blog → Testimonials → Footer
- Match font hierarchy: script (Hello Santtiny) for hero subtitle, serif (Libre Baskerville) for body, Oswald for headings/nav, Quicksand for descriptions
- Match color palette: pink (#f45d96) for section titles + active filters, dark (#111111) for buttons
- Match button style: rectangular, no radius, dark bg, white text, uppercase, letter-spacing
- Match generous section spacing (100px padding)
- Match product hover: semi-transparent overlay with icon buttons
- Category cards: image bg with white overlay box at bottom
- For Hello Santtiny (custom script font), use a similar Google Font like "Dancing Script" or "Great Vibes" as fallback
