# BoutiqueHaus — Implementation Notes

## Source
- ColorLib slug: `shop`
- Preview: https://preview.colorlib.com/theme/shop/
- New name: `boutiquehaus`

## Section order (fidelity)

1. Nav — logo, links, search icon
2. Banner — full-width hero, pink overlay, "Flat 75% Off"
3. Category — 3 category cards (Women, Couple, Men)
4. MenProduct — dark bg image, 4 product cards
5. WomenProduct — 4 product cards
6. HotDeal — countdown timer
7. RelatedProducts — product grid
8. Brand — brand logos
9. Footer — dark #222222, widgets, copyright

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #f41068 (hot pink) |
| dark bg | #222222 |
| body text | #777777 |
| headings | #222222 |
| font | Poppins (sans-serif) |
| btn-primary | #f41068 bg, white text |
| btn radius | 0 (square) |
| footer bg | #222222 |

## Component mapping

- `Navbar.tsx` — header with logo, links, search
- `Banner.tsx` — hero with pink overlay
- `CategoryCards.tsx` — 3 category items
- `MenProducts.tsx` — dark bg product section
- `WomenProducts.tsx` — product section
- `HotDeal.tsx` — countdown timer
- `RelatedProducts.tsx` — product grid
- `BrandLogos.tsx` — brand area
- `Footer.tsx` — dark footer

## Fidelity notes

- Use placeholder images from picsum.photos with seed `boutiquehaus-N`
- Icons from lucide-react
- Google Font: Poppins via index.html
- All buttons square, no border-radius
- Banner: pink overlay on background image
- Men section: dark overlay on bg image, white text
- Hot deal: countdown timer (use state-based timer)
- Footer must link Component Dock
- No ColorLib references in app code
