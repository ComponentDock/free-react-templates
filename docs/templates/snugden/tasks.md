# Snugden — Prep Notes

## Source
- **ColorLib:** Cozy → https://colorlib.com/wp/template/cozy/
- **Preview:** https://preview.colorlib.com/theme/cozy/
- **New name:** Snugden

## Structure (section order, top → bottom)

| # | Section | Key Details |
|---|---------|-------------|
| 1 | Navbar | Dark bg (#404044), logo left, 7 nav links, sticky on scroll |
| 2 | Hero Slider | 3-slide carousel, dark overlay, left-aligned heading + CTA |
| 3 | Reservation Form | Inline booking (date pickers + guest count + submit), right-aligned on overlay |
| 4 | Services (Tabbed) | Vertical nav-pills (8 tabs), content panel right. bg-light. |
| 5 | Rooms Gallery | 4-column card grid (Double/Family/Deluxe/Suite), image + name + price + CTA |
| 6 | Parallax | Full-width bg image, "Conference Centre" heading overlay |
| 7 | Menu / Restaurant | Tabbed categories, food items with image + name + price. bg-light. |
| 8 | Testimonials | Carousel, guest quotes with name + role. bg-white. |
| 9 | Blog | 3-column card grid, image + date + title + excerpt. bg-light. |
| 10 | Events | 2-column layout, event images + descriptions |
| 11 | Instagram | Photo grid with dark overlay + count |
| 12 | Footer | Dark bg (#2c2727), 4 columns: About, Hours, Contact, Newsletter |

## Design Tokens (from preview CSS)

- Primary: `#ff6138` (orange-red)
- Dark: `#404044`
- Footer: `#2c2727`
- Light section bg: `#f0f0f0`
- Fonts: `"Playfair Display"` (headings), `"Muli"` (body)
- Button: pill-shaped (border-radius: 30px), bg #ff6138, text white
- Cards/sections: sharp corners (border-radius: 0px)

## Fidelity Notes

- Match the vertical nav-pills layout for services (not horizontal tabs).
- Hero is a carousel with multiple slides — not a static hero.
- Reservation form is visually part of the hero area (dark overlay bg).
- Menu section has tabbed categories with food items showing prices.
- Parallax section is simple — just a dark bg image with a centered heading.
- Instagram section uses a grid with hover overlay showing photo count.
- Footer has a newsletter signup with email input.
- The template uses owl-carousel and Bootstrap grid — in React, use CSS grid/flex + simple carousel logic.
- Placeholder images: use `https://picsum.photos/seed/snugden-<n>/<w>/<h>` pattern.

## Implementation Order (suggested)

1. App scaffold + index.css with design tokens in @theme
2. Navbar component
3. Hero Slider component
4. Reservation Form component
5. Services (Tabbed) component
6. Rooms Gallery component
7. Parallax section component
8. Menu Section component
9. Testimonials component
10. Blog component
11. Events component
12. Instagram grid component
13. Footer component
14. App.tsx composition
15. Tests for all components
