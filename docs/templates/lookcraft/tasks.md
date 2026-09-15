# LookCraft — Implementation Notes

Source: ColorLib "Thelook" — https://preview.colorlib.com/theme/thelook/
New name: lookcraft (replaces ColorLib source name per naming rules)

## Section order (matches reference 1:1)

1. **Header** — transparent, logo left, nav right (Home, Gallery, Artists, Shop, News, Contact)
2. **Hero slider** — 3 slides with background images + white overlay (opacity 0.4), heading "The Look", exhibition date, "Read More" pill CTA, dot navigation
3. **Gallery** — split 2-column layout:
   - Left: gallery quote text + 3 gallery items (thumbnail + "View Gallery" button)
   - Right: 3 gallery items (thumbnail + "View Gallery" button)
   - "See All Galleries" CTA at bottom
4. **Blog** — light gray `#f6f7f9` background, 2-column:
   - Left: section title "Latest from the blog"
   - Right: 2 blog items (thumbnail + title + date + excerpt)
5. **Footer** — dark `#222222` background, 4-column layout, copyright bar

## Fidelity notes

- Hero overlay: use `bg-white/40` (Tailwind) to match `background: #fff; opacity: 0.4`
- Hero heading: very large (160px in reference), use responsive text `text-[80px] md:text-[120px] lg:text-[160px]`
- Buttons: pill-shaped with `rounded-[60px]`, transparent bg, uppercase, font-bold
- Gallery items: each has a thumbnail image + "View Gallery" button below
- Blog items: thumbnail image + title + date + excerpt text
- Footer: 4-column grid on desktop, stacked on mobile
- Header: transparent over hero, becomes solid on scroll
- White overlay on hero slides creates a washed-out/bright effect on photos

## Image placeholders

- Hero backgrounds: `picsum.photos/seed/lookcraft-hero-N/1920/1080`
- Gallery thumbnails: `picsum.photos/seed/lookcraft-gallery-N/600/400`
- Blog thumbnails: `picsum.photos/seed/lookcraft-blog-N/600/400`

## Component plan

| Component | Section | Notes |
|-----------|---------|-------|
| Navbar | 1 | Transparent, logo + 6 nav links |
| HeroSlider | 2 | 3-slide carousel with dots, white overlay, large text |
| GallerySection | 3 | 2-column split, 6 gallery items, CTAs |
| BlogSection | 4 | 2-column, title left, 2 blog items right |
| Footer | 5 | 4-column dark bg, copyright |

## Design token CSS (for index.css @theme)

```
--color-dark-navy: #081624;
--color-red-accent: #f44336;
--color-purple-accent: #673ab7;
--color-light-bg: #f6f7f9;
--color-footer-dark: #222222;
--color-body-gray: #333;
--color-muted-gray: #5c5c5c;
--font-family-primary: 'Lato', sans-serif;
```
