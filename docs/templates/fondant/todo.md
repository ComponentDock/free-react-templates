# Fondant — Prep Notes

Source: ColorLib "Cake" (https://colorlib.com/wp/template/cake/)
Preview: https://preview.colorlib.com/theme/cake/
New name: fondant (apps/fondant)

## Structure order (top → bottom)

1. Header — top bar (currency/language/sign-in) + sticky nav (logo, links, icons)
2. Hero Slider — full-width carousel, headline + CTA
3. About — stat bars (4 items)
4. Products — orange bg, 4 product cards
5. Team — 3 member cards with hover social overlay
6. Testimonial — peach bg, slider with quotes
7. Instagram — background image + heading + thumbnail row
8. Footer — 4 columns (About, Nav, Info, Newsletter)

## Design token mapping to Tailwind

- `--brand`: #f08632 → `bg-fondant-brand` (custom @theme color)
- `--dark`: #111111 → `bg-fondant-dark`
- `--cream`: #fdf3ea → `bg-fondant-cream`
- `--light-gray`: #e1e1e1 → `bg-fondant-gray`
- Heading font: Playfair Display via Google Fonts `<link>` in index.html
- Body font: Montserrat via Google Fonts `<link>` in index.html

## Fidelity notes

- Hero: owl-carousel → use a simple React state carousel (left/right arrows + auto-advance). Match the white background + centered text + CTA.
- About stat bars: these are horizontal progress bars with animated fill (barfiller.js). Use Tailwind progress bars or a simple CSS animation.
- Products: 4-item grid, orange background. Cards have image with a hover zoom effect and a small price label overlay.
- Team: 3 circular portrait cards. Social icons appear on hover (overlay transition).
- Testimonial: owl-carousel → React state carousel with dots/arrows. Warm peach background.
- Instagram: full-width background image with text overlay + 4 small image thumbnails.
- Footer: dark background (#111), 4-column grid. Newsletter has email input + subscribe button.

## Placeholder images

Use `https://picsum.photos/seed/fondant-hero/1920/800` for hero,
`https://picsum.photos/seed/fondant-product-1/360/360` for products,
`https://picsum.photos/seed/fondant-team-1/300/300` for team,
`https://picsum.photos/seed/fondant-testimonial/100/100` for testimonial avatars,
`https://picsum.photos/seed/fondant-insta-1/150/150` for instagram thumbnails,
`https://picsum.photos/seed/fondant-insta-bg/1920/400` for instagram bg.
