# ClosetCraft — Implementation Notes

## Source
- ColorLib slug: `shionhouse`
- Preview: https://preview.colorlib.com/theme/shionhouse/
- New name: `closetcraft`

## Section order (fidelity)

1. Nav — logo, centered nav links, search/cart, sticky
2. Hero — 3-slide carousel, dark overlay, "fashion changing always" heading, "Shop Now" CTA
3. PopularItems — "new arrival" title, 4 product cards
4. Collection — "collection houses our first-ever" heading, dark overlay bg
5. Footer — logo, about, links, contact, social, copyright

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #9F78FF (purple) |
| headings | #140C40 (dark navy) |
| body text | #646D77 |
| heading font | Cinzel (serif) |
| body font | Poppins (sans-serif) |
| button bg | #9F78FF |
| button radius | 4px |

## Component mapping

- `Navbar.tsx` — sticky header with logo, nav, icons
- `Hero.tsx` — 3-slide carousel with dark overlay
- `PopularItems.tsx` — 4 product cards grid
- `Collection.tsx` — collection section with dark overlay bg
- `Footer.tsx` — logo, links, social, copyright

## Fidelity notes

- Use placeholder images from picsum.photos with seed `closetcraft-N`
- Icons from lucide-react
- Google Fonts: Cinzel + Poppins via index.html
- Hero: dark overlay on bg images, white Cinzel heading at 120px
- Product hover: overlay with cart/heart icons
- Collection: dark overlay with semi-transparent background
- Footer must link Component Dock
- No ColorLib references in app code
