# Curator — Implementation Notes

**Source:** ColorLib "Reopen" (https://colorlib.com/wp/template/reopen/)
**Preview:** https://preview.colorlib.com/theme/reopen/
**New name:** Curator (apps/curator)

## Structure order (section-by-section)

1. **Header/Nav** — centered logo + horizontal nav (collapses to hamburger)
2. **Hero** — large heading with bold keyword + subtitle
3. **Portfolio Grid** — masonry layout with 9 items (1/3 + 2/3 widths)
4. **Load More** — centered arrow icon
5. **Footer** — copyright + social icons

## Fidelity notes

### Header/Nav
- Logo: centered image at top (use a text-based "Curator" logo in
  Playfair Display or similar — no image assets)
- Nav: horizontal list (Home, About, Story, Blog, Contact, More)
- Contact has dropdown sub-menu: "Contact + Map"
- Mobile: hamburger 3-line icon toggles slide-out nav
- Use SmartMenus-style dropdown or simple CSS hover dropdown

### Hero
- Large centered heading: "Handpicked **design resources** crafted with
  much ♥ and care for every detail"
- "design resources" is bold
- Heart icon: use lucide-react Heart icon inline
- Subtitle: "free downloads only on fridays" in smaller muted text

### Portfolio Grid
- Isotope masonry → use CSS Grid with `grid-auto-flow: dense` and
  span-2 items for the 2/3 width tiles
- 9 items total:
  1. Smartphone / GALLERY (1/3)
  2. Book / VIDEO (1/3)
  3. Doodle / VIDEO (1/3)
  4. Foster / GALLERY (2/3) — spans 2 columns
  5. Starlight / ARTICLE (1/3)
  6. Open Book / VIDEO (1/3)
  7. Burger / VIDEO (1/3)
  8. Printscreen / ARTICLE (1/3)
  9. Bottle / ARTICLE (1/3)
- Each item: full-size image (picsum.photos), overlay text holder
  (30px inset, category name + type badge)
- Hover: pink box-shadow pulse animation (#f277ae, 0→10px→0)
- Gallery items → lightbox/modal (use a simple React modal or
  photo-view library)
- Video items → embedded YouTube/Vimeo player (react-player or iframe)

### Load More
- Centered arrow image → use a lucide-react ArrowDown icon
- Hover: scale(0.9) with 0.2s transition
- No actual load-more logic needed (static demo)

### Footer
- Minimal: copyright line + 5 social icon links
- Social: Twitter, Behance, Dribbble, Facebook, RSS → lucide-react icons
- Copyright includes Component Dock link

## Design tokens to set in @theme

```css
@theme {
  --color-brand: #f277ae;
  --color-brand-hover: #e56a9e;
  --color-red: #FD3137;
  --color-ink: #222222;
  --color-muted: #6f6f6f;
  --color-grey: #9a9a9a;
  --color-grey-light: #b1b1b1;
  --color-line: #cccccc;
  --color-bg-alt: #ECECEC;
}
```

Fonts: Google Fonts `<link>` for Roboto (300, 400, 500, 700) in index.html.

## Key implementation decisions

- **Masonry grid:** CSS Grid with `grid-auto-flow: dense` and
  `grid-column: span 2` for the 2/3 width item. No library needed.
- **Lightbox:** Use a lightweight React modal or photo-view for gallery
  items. Skip PrettyPhoto entirely.
- **Video embed:** Use react-player or simple iframe for YouTube/Vimeo.
- **Navigation dropdown:** CSS-only hover dropdown for Contact sub-menu.
  No SmartMenus library.
- **Scroll animations:** Use Intersection Observer for scroll-reveal
  effects on portfolio items.
- **Images:** All placeholder via `https://picsum.photos/seed/curator-{n}/w/h`
