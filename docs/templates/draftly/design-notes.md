# Draftly — Design Notes

Recreation of ColorLib "Clyde" personal portfolio template.

## Source Analysis

- **Preview**: https://preview.colorlib.com/theme/clyde/
- **Font**: Poppins (Google Fonts) — weights 300, 400, 500, 600, 700
- **Primary**: #007bff (Bootstrap blue)
- **Dark sections**: #000000 (navbar, hero, footer, CTA banner)
- **Light sections**: #f8f9fa
- **Body text**: #999999
- **Headings**: #000000

## Key Design Patterns

1. Hero: full-width background image with dark overlay, text left, image right
2. Counter: horizontal stats bar with icons and numbers
3. About: split layout — image left, personal info right
4. Skills: circular progress indicators (CSS-based, using conic-gradient)
5. Services: icon + title cards in grid
6. Projects: image grid with hover overlay
7. Testimonials: blue background carousel
8. Blog: 3-column post cards
9. Contact: full-width form
10. Footer: 4-column dark layout

## Differences from Original

- No carousel/slider JS — single static hero
- Circular progress bars simplified to static percentage display
- No scroll animations (AOS)
- Placeholder images via picsum.photos
- Footer links to Component Dock instead of Colorlib
