# Bezel — Design Notes

## Source

- ColorLib "Watch": https://preview.colorlib.com/theme/watch/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/watch-free-template.jpg
- Fallback: screenshot analyzed (preview was reachable)

## Visual Analysis

### Color Palette

- Primary brand: #235ee7 (vibrant blue — CTAs, highlights, icon accents)
- Body text: #222222 (near-black)
- Muted text: #777777
- Surface: #ffffff (default sections)
- Surface alt: #f9f9ff (very light blue tint for alternating sections)
- Dark surface: #04091e (deep navy — used for the Product Catalog section)

### Typography

- Font: Poppins (Google Fonts) — weights 300–700
- Headings: bold, dark text
- Body: regular weight, muted color

### Layout Patterns

- Full-height hero with background image
- Section-gap spacing between sections (~80px)
- Grid layouts: 2-col split (about), 3-col (services, reviews), 4-col (products)
- Centered headings with subtitle pattern throughout
- Pill-shaped buttons (border-radius: 25px, white/blue variants)

### Button Styles

- Primary: white bg, dark text, rounded pill, uppercase
- On dark sections: blue bg, white text
- Hover: color inversion or brand accent

### Key Sections

1. **Hero**: full-screen with parallax-like background image, white text overlay
2. **Video Section**: 2-col — text left, video thumbnail right with play button overlay
3. **Feature Grid**: 2x2 cards flanking a center product image
4. **About Split**: 50/50 image + text
5. **Services**: 6 icon+title+text cards in 3-col grid
6. **Product Catalog**: dark bg, 4 product cards with image/name/price/CTA
7. **Reviews**: 6 cards with star ratings
8. **FAQ**: accordion with expand/collapse
9. **Footer**: 3-col — about, newsletter, social

### Design Token Notes

- Primary brand: #235ee7 (blue — the dominant accent throughout)
- Deep navy: #04091e (product catalog background)
- Surface alt: #f9f9ff (alternating light sections)
