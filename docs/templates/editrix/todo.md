# Editrix — Implementation Notes

Recreation of ColorLib **Megazine** → https://preview.colorlib.com/theme/megazine/

## Structure order (top to bottom)

1. **Sidebar** (fixed left, full height) — brand logo, vertical nav, copyright + socials
2. **Hero Slider** (FlexSlider-equivalent carousel, full viewport height)
3. **Blog Grid** (mixed-column article cards, 6 rows)
4. **Pagination** (numbered page links)

## Section-by-section fidelity notes

### Sidebar (Navbar.tsx)

- Fixed left position, 20% width (30% at 768–1200px), white background, full height.
- Logo: "Editrix" in uppercase Montserrat 400, 22px, wide letter-spacing, right-aligned.
- Nav: vertical list — Home, Style, Fashion, Travel, Sports, Video, Archives.
  - 14px, uppercase, letter-spacing 1px, color rgba(0,0,0,0.4) inactive, #000 active.
  - Active item: underline/bold indicator.
  - Hover: color black, underline transition 0.5s.
- Footer section at bottom:
  - Copyright text: 12px, rgba(0,0,0,0.6), Montserrat 300.
  - Social icons row: Facebook, Twitter, Instagram, LinkedIn — circular (50%), rgba(0,0,0,0.7), hover #F75940.
- Mobile (<768px): off-screen 270px drawer, slide-in via hamburger toggle.

### Hero Slider (Hero.tsx)

- Full viewport height (100vh).
- 3 slides with background images, each has:
  - Dark overlay: rgba(0,0,0,0.7) positioned absolute over image.
  - Text centered vertically: category tag pill → headline → description.
  - Tag pill: 13px, uppercase, letter-spacing 2px, border-radius 30px, background #F75940, color white, padding.
  - Headline: Montserrat 400, white, 40px+, line-height 1.3.
  - Description: Montserrat 300, white, 15px, max-width ~600px.
- Carousel dots: bottom-right, small circles, active = #F75940.
- Auto-advance every ~5 seconds (or manual via dots).

### Blog Grid (BlogGrid.tsx)

Cards use background images with dark overlay (rgba(0,0,0,0.7)), centered white text.

**Row structure (repeated pattern with different content):**

| Row | Left | Center | Right | Notes |
|-----|------|--------|-------|-------|
| 1 | 50% (large) | 25% (small) | 25% (small) | blog-img height: full vs 235px |
| 2 | 100% (full-width small) | — | — | Single card spanning full width |
| 3 | 40% (large) | 30% (small) | 30% (medium) | Mixed split |
| 4 | 60% (large) | 40% split (two 20% stacked) | — | Two stacked small cards right |
| 5 | 50% (large) | 50% split (two 25% stacked) | — | Same pattern, different content |
| 6 | 50% (large) | 50% split (two 25% stacked) | — | Another variation |

- Large cards: full height background image, text centered.
- Small cards (blog-img2): height 235px (400px on mobile), text centered.
- All cards: tag pill (border: 1px solid rgba(255,255,255,0.5), padding 7px 15px, border-radius 30px), headline (Montserrat 400, white), description (Montserrat 300, white, truncated on small cards).

### Pagination (Pagination.tsx)

- Centered below the grid.
- Numbered links: 1–4 with « and » arrows.
- Active page: 50% border-radius, background #F75940, color white.
- Disabled prev arrow (on page 1).

## Design tokens (CSS → Tailwind @theme mapping)

```
--color-brand: #F75940;         /* brand-primary */
--color-brand-light: #f86e58;   /* brand-secondary */
--color-heading: #000000;
--color-body: rgba(0,0,0,0.7);
--color-muted: #b3b3b3;
--color-nav-inactive: rgba(0,0,0,0.4);
--color-sidebar-bg: #FFFFFF;
--color-overlay: rgba(0,0,0,0.7);
```

Font: `Montserrat` from Google Fonts, weights 300/400/700.

## Placeholder images

Use `https://picsum.photos/seed/editrix-<n>/<w>/<h>` for all images:
- Hero slides: `editrix-hero-1/1920/1080`, etc.
- Blog cards: `editrix-blog-1/800/600`, `editrix-blog-2/400/300`, etc.

## Implementation approach

1. Create `apps/editrix/` by copying simplest existing sidebar-layout app.
2. Components: Navbar (sidebar), Hero (slider), BlogGrid (mixed cards), Pagination.
3. Use Tailwind @theme for brand colors. Use `cn()` from packages/ui.
4. No new dependencies needed — carousel can be CSS-based or a lightweight option.
5. Footer must link https://www.componentdock.com/.
