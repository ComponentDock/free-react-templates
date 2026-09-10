# Musecraft — Design Notes

## Source

- ColorLib "Boxus" — https://colorlib.com/wp/template/boxus/
- Preview: https://preview.colorlib.com/theme/boxus/

## Fidelity analysis

- All sections matched 1:1 (Hero, Services, Portfolio, Crafters, Stories, Offer, Expertise, Contact, Footer)
- Section number pills alternate colors: green (#32DB8A) → yellow (#FFBA42) → pink (#E64B77)
- Dark navy (#221C5A) background throughout
- Fonts: Montserrat (headings), Roboto (body), PT Serif (descriptions)
- Responsive: single-column below 1024px, stacked mobile menu

## Differences from original

- Placeholder images via picsum.photos (deterministic seeds)
- No parallax/collage image backgrounds (solid gradients instead)
- Simplified portfolio grid (no masonry library)
- Footer links Component Dock instead of Colorlib
- No ColorLib references anywhere in app source
