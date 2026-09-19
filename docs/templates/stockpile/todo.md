# Stockpile — Implementation Notes

## Source
- ColorLib slug: `product`
- Preview: https://preview.colorlib.com/theme/product/
- New name: `stockpile`

## Section order (fidelity)

1. Nav — centered links (New, Shop, Pages, Blog, Contact), search/person/cart icons
2. Hero — carousel, dark bg, white serif heading, "Explore now" outline button
3. Features — 3 icons: Worldwide Delivery, Secure Payments, Simple Returns
4. Products — 6 product cards grid (3×2), badges (New/Sale), hover cart overlay
5. WeekDeal — "Week Deal" heading, featured product
6. PopularItems — "Popular Items" heading, 5 product cards
7. Newsletter — email input + black "Subscribe" button
8. Footer — 4 columns (Help, About, social, copyright), Component Dock link

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #0fb78d (teal) |
| black | #000000 |
| body text | #333 |
| body bg | #ffffff |
| heading font | Libre Baskerville (serif) |
| body font | Muli (sans-serif) |
| button radius | 0 (square) |
| btn-primary | #0fb78d bg, white text |
| btn-black | #000 bg, white text |
| btn-outline | transparent bg, #000 border |

## Component mapping

- `Navbar.tsx` — centered nav with icons, mobile offcanvas
- `Hero.tsx` — carousel with dark bg overlay
- `Features.tsx` — 3 icon + text cards
- `ProductGrid.tsx` — product cards with hover overlay, badges
- `WeekDeal.tsx` — featured deal section
- `PopularItems.tsx` — popular products row
- `Newsletter.tsx` — email subscribe form
- `Footer.tsx` — 4-column footer

## Fidelity notes

- Use placeholder images from picsum.photos with seed `stockpile-N`
- Icons from lucide-react (replace SVG icons)
- Google Fonts: Libre Baskerville + Muli via index.html
- All buttons square/rectangular (no border-radius)
- Hero: dark overlay on background image, white serif heading
- Product hover: overlay with cart icon appears on image
- Newsletter: email input + black subscribe button
- Footer must link Component Dock (https://www.componentdock.com/)
- No ColorLib references in app code
