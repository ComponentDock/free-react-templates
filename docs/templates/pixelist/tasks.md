# Pixelist — Implementation Tasks & Design Notes

Source: ColorLib "Rea" (https://colorlib.com/wp/template/rea/)
Preview: https://preview.colorlib.com/theme/rea/
New name: pixelist (apps/pixelist, @free-react-templates/pixelist)

## Section order (source fidelity)

1. Header with logo + animated typing headline
2. Hamburger toggle (absolute positioned, top-right)
3. Full-screen overlay menu (hidden by default, toggle-activated)
4. Blog/grid section (masonry layout with mixed-width resource cards)
5. Load-more arrow indicator
6. Blog illustration image
7. Footer (categories + menu + social links + copyright)
8. Component Dock attribution (replaces Colorlib copyright)

## Component breakdown

- `App.tsx` — Root layout: header + overlay menu + grid + footer
- `Header.tsx` — Logo + animated headline + hamburger toggle
  - `TypingHeadline.tsx` — Animated typewriter effect cycling words
  - `HamburgerToggle.tsx` — 4-bar toggle with open/close animation
- `OverlayMenu.tsx` — Full-screen white overlay with nav + search + social
  - `MenuNav.tsx` — Centered navigation links (Home, About, Contact, Features)
  - `MenuSearch.tsx` — Search input with helper text
  - `MenuSocial.tsx` — 5 social icon links
- `ResourceGrid.tsx` — Masonry-style grid container
  - `GridSizer.tsx` — CSS grid sizer element
  - `ResourceCard.tsx` — Single card: image + hover image + overlay + content
    - `CardImage.tsx` — Main image + hover image crossfade
    - `CardOverlay.tsx` — View/download count overlay
    - `CardContent.tsx` — Category + title + like button
    - `LikeButton.tsx` — Heart icon with pulse animation + count
- `LoadMoreArrow.tsx` — Centered arrow indicator
- `BlogIllustration.tsx` — Decorative bottom image
- `Footer.tsx` — 3-column footer with categories, menu, social

## Design notes

### Layout structure
- Content max-width 1170px, centered via margin auto
- Grid max-width 1200px with 15px transparent border on items
- No page wrapper margin (unlike Craftfolio) — full-width white canvas
- Sections: header (auto height) → grid (padding-top 50px) → footer

### Typography
- Lato 300/400/700 from Cloudflare Fonts (add inline or Google Fonts link)
- Body: weight 400, color #2f2f2f, 20px, line-height 35px
- Headlines: weight 300–400, color #222222
- Header title: 28px weight 300, with bold (700) animated words
- Menu links: 35px weight 700, color #222222
- Categories: 13px uppercase, letter-spacing 3px, color #a5a5a5
- Post titles: 20px weight 400
- Footer text: 14px, color #7e7e7e

### Color palette
- Brand/accent: #f271ab (pink/magenta) — links, hovers, selection, hearts, buttons
- Text body: #2f2f2f
- Text headings: #222222
- Category text: #a5a5a5
- Footer text: #7e7e7e
- Menu social icons: #CACACA
- Background body: #ffffff
- Blog background: #F5F5F5
- Card content bg: #ffffff
- Info overlay: rgba(22,31,50, 0.5) — semi-transparent dark
- Text selection: #f271ab bg, white text
- Heart pulse: rgba(242,119,174, 0.4)

### Button/link style (primary CTA — used in button class)
- Pink (#f271ab) text and 2px solid border
- Padding: 18px top, 20px bottom, 50px left/right
- Weight 700, 20px, no text-decoration
- Hover: pink bg, white text (inverted)
- Border-radius: none (sharp rectangle)

### Header mechanics
- Logo: inline-block, 80×95px, left side
- Headline: inline-block, left of logo (30px padding-left)
- Hamburger: absolute positioned (top 130px, right 0), z-index 101
- 4 bars: 30px/24px/15px/30px widths, 4px height, 3px gap, black
- Toggle animation: bars rotate to X via CSS transforms (0.3s transition)
- Logo + headline + toggle float/position to create the layout

### Typing animation
- Replace jQuery animated-headline.js with React state + CSS
- Cycle: "web resources" → "psd files" → "mockups"
- Each word types letter-by-letter with pink (#f271ab) highlight bg
- After full word displays, erase letter-by-letter, then next word
- Timing: ~100ms per letter, ~2s pause at full word
- Static text: "pixel precise" before, "to suit all your needs." after

### Overlay menu
- Fixed position, full viewport, white bg, z-index 100
- Hidden by default (display: none), shown via React state toggle
- Centered nav container: max-width 350px
- Links: 35px bold, color #222222, hover → #f271ab
- Search input: 35px bold, centered, no border, transparent bg
- Helper text: 14px, opacity 0 → 1 on input focus
- Social icons: 26px FA icons, #CACACA, 10px padding

### Grid mechanics
- Replace Isotope.js with CSS Grid or flexbox masonry in React
- Grid container: 1200px, overflow hidden
- Items use CSS classes for widths: p_one (1200px), p_one_half (600px),
  p_one_fourth (300px)
- 15px transparent border on all items (spacing between cards)
- 5 demo items: 1 full + 2 half + 2 quarter
- In React: use a CSS grid with grid-template-columns and span values
- Cards: 2px image border-radius, white content area, 25px padding

### Card hover effects
- Main image and hover image stacked (position relative/absolute)
- Hover: main image opacity 0, hover image opacity 1 (0.3s transition)
- Info overlay (views/downloads): rgba(22,31,50,0.5), position absolute
  top-right, opacity 0 → 1 on hover
- Content area stays visible always (white bg, below images)

### Like button
- Heart icon: 25×25px, background-image sprite (normal/liked states)
- Click triggers pulse animation: box-shadow 0→10px in pink rgba
- Liked state: background-position shifts to filled heart sprite
- Count: 18px, color #a5a5a5, right of heart

### Footer
- White bg, centered text, 60px top / 50px bottom padding
- 3 columns: each 30.6% width, 4% margin-right, float left
- Categories: inline list, 8 items, #7e7e7e links
- Menu: vertical list (About, Features, Contact), #7e7e7e
- Social: 5 FA icons (23px), #7e7e7e, below icons copyright line
- Copyright: animated pulsing heart (pink) + Component Dock link
- Hidden widget titles (h4.widgettitle display: none)

### Responsive breakpoints
- ≥1220px: full layout, 1170px content, 1200px grid
- 806–1219px: content max-width 870px, grid max-width 870px
  - Grid items: p_one_half/p_one_fourth → 50% width each
  - Footer columns: 100% width, stacked, centered
- ≤805px: content width 540px, header becomes block layout
  - Grid: 540px, all items 50% width (2-col)
- ≤576px: grid items 100% width (1-col)

### Placeholder images
- Card images: picsum.photos/seed/pixelist-N/600/400 (N=1..5)
- Hover images: picsum.photos/seed/pixelist-Nb/600/400
- Blog illustration: picsum.photos/seed/pixelist-blog/1200/600
- Logo: use a simple text/SVG logo (no external image)

### Accessibility improvements over source
- Source uses font-awesome PNG icons → replace with lucide-react
- Source has no ARIA on toggle → add aria-expanded, aria-label
- Source has no keyboard support for overlay → add Escape to close,
  focus trap in overlay
- Source uses jQuery for typing animation → React state + CSS
- Source uses Isotope for layout → CSS Grid (no JS dependency)
- Source has no focus styles → add focus-visible rings on interactive elements
- Source search input has no label → add aria-label

### Files to create
- apps/pixelist/ (full Vite + React + Tailwind app)
- openspec/specs/template-pixelist/spec.md (done)
- docs/templates/pixelist/tasks.md (this file)
