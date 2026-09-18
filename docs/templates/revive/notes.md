# Revive — Implementation Notes

Source: ColorLib Rea — https://preview.colorlib.com/theme/rea/
New name: revive

## Section Order (match source 1:1)

1. Header (logo + animated typing headline + hamburger toggle)
2. Portfolio Grid (masonry layout with mixed column sizes)
3. Load More (arrow-down trigger)
4. Footer (categories + nav + social/copyright)

## Design Fidelity Notes

### Header
- Logo: left-aligned, 80×95px, links to home
- Headline: Lato 300, 28px, inline with animated typing effect
  - Static: "pixel precise" + "to suit all your needs."
  - Animated: cycles "web resources" / "psd files" / "mockups"
  - Use a typing animation library or CSS keyframes
- Hamburger: 4-line icon (widths: 30/24/15/30px), animates to X on open
  - Toggle reveals full-screen white overlay with centered nav + social icons + search

### Portfolio Grid
- Masonry layout: use CSS grid or a masonry library (e.g. react-masonry-css)
- Column widths: full (1200px), half (600px), quarter (300px)
- Grid items have 15px transparent border for spacing
- Each item: image container with hover swap (second image fades in)
  - Semi-transparent dark overlay: rgba(22,31,50, 0.5)
  - View count (eye icon) and download count (arrow icon) in top-right
- Content area below image: white bg, 25px padding, 2px bottom radius
  - Category label: 13px uppercase, letter-spacing 3px, #a5a5a5
  - Post title: Lato 400, 20px, #222222
  - Heart like button + count: bottom-right, absolute positioned

### Like Heart
- Heart image/icon, 25×25px
- Click: increments count, fills heart (pink), pulse animation (box-shadow)
- Animation: keyframes pulse from scale(1.1) to scale(0.8) and back

### Load More
- Single arrow-down image, 85×85px, centered
- Hover: opacity 0.5

### Footer
- White background, centered text
- 3 columns (~30.6% each, 4% margin):
  1. Categories list (inline, comma-separated): Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video
  2. Navigation: About, Features, Contact
  3. Social icons (Font Awesome) + copyright with heart animation
- Font Awesome heart: pink, infinite pulse animation (scale)
- Copyright text: 14px, #7e7e7e
- Replace Colorlib attribution with Component Dock link

### Colors in @theme

```
--color-brand: #f271ab;
--color-text: #2f2f2f;
--color-text-dark: #222222;
--color-bg: #ffffff;
--color-bg-light: #F5F5F5;
--color-text-muted: #a5a5a5;
--color-text-secondary: #8d8d8d;
--color-text-footer: #7e7e7e;
--color-overlay: rgba(22, 31, 50, 0.5);
--color-error: #FD3137;
```

### Fonts
- Google Fonts: Lato (300, 400, 700)
- Link in index.html: https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap

### Components to Create
- `Header.tsx` — logo + typing headline + hamburger toggle
- `TypingHeadline.tsx` — animated typing effect for headline words
- `HamburgerMenu.tsx` — full-screen overlay nav
- `PortfolioGrid.tsx` — masonry grid container
- `PortfolioItem.tsx` — single grid item with hover effects
- `LikeHeart.tsx` — heart interaction with count
- `LoadMore.tsx` — arrow-down load more trigger
- `Footer.tsx` — 3-column footer with categories, nav, social

### Placeholder Images
- Grid items: `https://picsum.photos/seed/revive-<n>/<w>/<h>`
  - Full: seed rev1-1, 1200×600
  - Half: seed rev1-2/3, 600×400
  - Quarter: seed rev1-4/5, 300×300
- Logo: use a simple text-based or SVG logo placeholder
- Load more arrow: use lucide-react ChevronDown icon

### Animations
- Typing headline: CSS keyframes or a lightweight library
- Heart pulse: CSS keyframes (scale 1.1 → 0.8 → 1.1)
- Image hover: CSS transition opacity 0.3s
- Menu overlay: CSS transition for slide/fade in
