# Looklens — Implementation Todo

Source: ColorLib TheLook (https://colorlib.com/wp/template/thelook/)
Preview: https://preview.colorlib.com/theme/thelook/
New name: looklens

## Section Order (matching original 1:1)

1. **Navbar** — Logo left, 6-item nav right (Home, Gallery, Artists, Shop, News, Contact)
2. **Hero Carousel** — Full-width slider, 3 slides, background images, large heading + subtext + CTA
3. **Gallery** — Two-column split: left (pull-quote + 3 items), right (3 items + "see all" CTA)
4. **Blog** — Gray bg, title left (39%), 2 posts right (57%) with thumbnails
5. **Footer** — Dark bg, "Get in touch" + contact form (4 fields), copyright, Component Dock link

## Design Notes

### Tokens
- Brand: #081624 (near-black navy) — headings, nav, button fills, borders
- Body: #5c5c5c
- Blog bg: #f6f7f9
- Footer bg: #222222
- Secondary: #828282 (dates, categories)
- Muted: #c1c1c1 (stat numbers)
- Font: Lato 300/400/700 via Google Fonts

### Layout
- Hero: 950px height, carousel with Owl-style prev/next nav at bottom-right
- Gallery: 2 col-md-6 columns, ~127px top padding, items have ~123px bottom margin
- Blog: 39%/57% float layout, thumbnails 264px wide floated left
- Footer: 4-col left text + 8-col right form, inputs have bottom-border only

### Buttons
- Default: transparent bg, uppercase, 11px-14px, arrow icon inline
- Solid: #081624 bg, white text
- Light: white text on dark bg
- All buttons: no border-radius (sharp rectangular)

### Fidelity Notes
- Original uses Bootstrap grid — implement with Tailwind grid/flex
- Hero uses Owl Carousel — implement with React carousel or CSS scroll-snap
- Gallery items repeat "Red Passion 2017" placeholder text — use varied names
- Contact form inputs have only bottom-border styling (not full border)
- Footer copyright uses italic + bold text
- Original has page preloader (spinner) — omit or implement as optional

### Placeholder Images
- Hero slides: `https://picsum.photos/seed/looklens-hero-1/1298/950` etc.
- Gallery items: `https://picsum.photos/seed/looklens-gallery-1/600/400` etc.
- Blog thumbnails: `https://picsum.photos/seed/looklens-blog-1/264/180` etc.
