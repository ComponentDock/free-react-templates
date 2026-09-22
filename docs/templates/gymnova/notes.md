# GymNova — Implementation Notes

**Source:** ColorLib Gym2 ([preview](https://preview.colorlib.com/theme/gym2/))
**New name:** gymnova
**Spec:** `openspec/specs/template-gymnova/spec.md`

## Section Order (build order)

1. Navbar — sticky, logo + nav + CTA
2. Hero Slider — carousel (use CSS-only fade or simple React state for slides)
3. Category Split — two-column full-width image cards
4. Features — 4 icon cards on dark bg
5. Offer Banner — parallax image + CTA
6. Pricing — 3-column card grid
7. Gallery — masonry-like grid (2 big + 2 small rows)
8. Team — trainer cards on image bg
9. Big Offer — parallax banner + CTA
10. Footer — 3-column dark footer

## Fidelity Notes

- **Hero:** The original uses owl-carousel with 4 slides (2 alternating backgrounds). For React, a simple auto-playing carousel or static hero with one strong image is acceptable. Keep the radial overlay gradient (#FF1414 center → black edges).
- **Category split:** Full-width, two equal columns, each with a background image and overlay. Use `picsum.photos` for backgrounds.
- **Features:** Black background, centered title in white. 4 feature cards in a row (responsive: 2x2 on tablet, stacked on mobile). Use lucide-react icons.
- **Offer banner:** Background image with centered text. Keep the "50% Off" headline bold and red.
- **Pricing:** Dark cards (#1A1A1A), red accent on active plan. Price in Teko font. Feature list with checkmarks.
- **Gallery:** Mixed-size image grid. On hover: image scales slightly, dark overlay with "+" icon appears.
- **Team:** Dark background image with overlay. Trainer cards with photo, name, role, and social icons (lucide-react).
- **Big Offer:** Full-width parallax banner, centered heading and CTA.
- **Footer:** Dark bg, 3-column: logo + address, nav links, newsletter form.

## Key Design Decisions

- No owl-carousel dependency — use React state for hero carousel
- Use Tailwind `@theme` for brand color `--brand-red: #FF1414`
- Square buttons (no border-radius) per original design
- Paytone One for headings gives the bold, gym-typical feel
- Teko for buttons adds a condensed, athletic accent

## Assets

- All images → `https://picsum.photos/seed/gymnova-<n>/<w>/<h>` (deterministic)
- Icons → lucide-react
- Fonts → Google Fonts link in index.html
