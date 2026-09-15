# Airy — Implementation Notes

Recreation of ColorLib Whitespace as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

## Source Reference

- ColorLib slug: `whitespace`
- Preview: https://preview.colorlib.com/theme/whitespace/
- Category: Business / Agency

## Section Structure (implementation order)

| # | Component file         | Section          | Notes                                                |
|---|------------------------|------------------|------------------------------------------------------|
| 1 | `Navbar.tsx`           | Navigation       | Dark bg, brand "Airy", responsive hamburger, sticky  |
| 2 | `Hero.tsx`             | Hero             | Split: 60% text (left) + 40% image (right)           |
| 3 | `About.tsx`            | About / What We Do | Split: image left + 4 service items right          |
| 4 | `Services.tsx`         | Services Grid    | 4-column grid, centered icons, titles + descriptions |
| 5 | `Counter.tsx`          | Stats / Facts    | Full-width parallax bg, 4 animated counters          |
| 6 | `Projects.tsx`         | Projects         | Mixed 2-col grid, 6 cards with overlays              |
| 7 | `Testimonials.tsx`     | Testimonials     | Carousel with 5 user testimonials                     |
| 8 | `Blog.tsx`             | Case Study       | 3 blog cards with image header + meta                |
| 9 | `Pricing.tsx`          | Pricing Plans    | 4 cards: Free/Startup/Premium/Pro, light bg          |
| 10 | `Partners.tsx`         | Partners         | 5 placeholder logos in horizontal row                |
| 11 | `Footer.tsx`           | Footer           | Dark bg, 4 columns: brand, links, contact            |

## Fidelity Notes

- **Hero split layout:** The original uses a 2/3 + 1/3 column split with a
  background image on the right. Use `grid-cols-3` with `col-span-2` for the
  text area.
- **About section:** Uses `order-md-last` to swap sides at medium breakpoint.
  Image on left, service items right-aligned on md+.
- **Services grid:** 4 equal columns (`grid-cols-4` on lg), each with a
  centered flaticon icon above title + description.
- **Counter parallax:** Uses a background image with `background-attachment:
  fixed`. Four columns of animated numbers.
- **Projects mixed grid:** The original uses a non-uniform grid — 1 small +
  1 large top row, then large + small bottom row. Use `grid-cols-3` with
  row-span.
- **Testimonials carousel:** The original uses Owl Carousel. Use a simple
  CSS-based carousel or a React carousel library (e.g. `embla-carousel-react`
  if already in packages/ui, or a lightweight custom implementation).
- **Blog cards:** Standard card layout: bg image top, meta (date, author,
  comments) middle, title bottom.
- **Pricing cards:** 4 cards with centered content. First is solid primary
  button, rest are outline. Features list below price.
- **Partners:** Simple horizontal row of 5 placeholder logos.
- **Footer:** 4 columns, dark bg. Social icons (Twitter, Facebook, Instagram).
  Contact column has map marker, phone, email icons.

## Placeholder Images

- Hero background: `https://picsum.photos/seed/airy-hero/800/750`
- About image: `https://picsum.photos/seed/airy-about/600/700`
- Counter background: `https://picsum.photos/seed/airy-counter/1920/800`
- Projects: `https://picsum.photos/seed/airy-proj-{1-6}/800/600`
- Testimonial avatars: `https://picsum.photos/seed/airy-user-{1-3}/150/150`
- Blog images: `https://picsum.photos/seed/airy-blog-{1-3}/800/500`
- Partner logos: SVG placeholders or simple text logos

## Key Design Decisions

1. **Poppins** as primary font (loaded via Google Fonts), overriding the
   original's Work Sans in the CSS. The preview loads Poppins @font-face
   prominently and it is the visual typeface the user sees.
2. **Brand color #78d5ef** — light sky-cyan used for all interactive elements
   (links, buttons, accents). Use as the Tailwind `primary` theme color.
3. **Dark footer #343a40** — matches the original's `.ftco-bg-dark` class.
4. **No parallax JS** — use CSS `background-attachment: fixed` for the counter
   section instead of jQuery Stellar.
5. **No carousel dependency** — implement testimonials with a simple
   auto-rotating CSS carousel or lightweight React solution.
6. **No reference to ColorLib** in any app file — provenance is in the spec
   and TEMPLATES.md only.
