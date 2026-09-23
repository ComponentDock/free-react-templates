# CurateLab — Implementation Notes

Source: ColorLib "Reopen" — https://preview.colorlib.com/theme/reopen/
New name: curatelab

## Structure Order (section components)

1. `Navbar.tsx` — centered logo + hamburger toggle
2. `Hero.tsx` — centered headline + subtitle
3. `PortfolioGrid.tsx` — masonry-like grid of portfolio items
4. `LoadMore.tsx` — centered arrow button
5. `Footer.tsx` — copyright + social icons

## Section-by-Section Fidelity Notes

### Navbar
- Logo: centered, with hover opacity fade (opacity → 0.2)
- Hamburger: 3 bars (height 4px, margin-bottom 3px, color #c2c2c2)
- Toggle animation: bars → X via CSS transforms (rotate 45deg translate, rotate -45deg translate)
- On open: full-screen overlay, links centered vertically
- Menu links: Home, About, Story, Blog, Contact, More (with sub-menu: Contact + Map)
- For React: use state to toggle open/close, CSS transitions for animation

### Hero
- White background (part of body-wrapper)
- Headline: mixed weight — "Handpicked" normal, "design resources" bold (700), rest normal
- Heart icon: use lucide-react Heart or emoji ❤
- Subtitle: smaller, lighter color
- Padding: generous (80px top/bottom)

### Portfolio Grid
- Grid layout: CSS Grid with explicit column widths (400px cells, 15px white border)
- 9 items total in specific arrangement:
  - Row 1: 3 × 1/3 (400px each)
  - Row 2: 1/3 + 2/3 (400px + 800px)
  - Row 3: 3 × 1/3 (400px each)
- Each item: `<a>` → `<img>` + overlay div (absolute positioned, hidden by default)
- Overlay on hover: white bg, centered title (20px) + category (11px, #9a9a9a)
- Images: border-radius 2px, block display, 100% width
- Use picsum.photos with seed per item for placeholder images

### Load More
- 100×100px arrow image (use lucide-react ArrowDown or ChevronDown icon)
- Hover: scale(0.9) transform
- Centered with generous padding (50px top/bottom)

### Footer
- Font: 16px, color #7e7e7e
- Top margin: 60px, bottom padding: 110px
- Border-top: 1px solid #cccccc
- Copyright: "© [year] All rights reserved | Made with ❤ by Component Dock"
- Social icons: use lucide-react (Twitter, Dribbble, Facebook, Rss, Figma for Behance)
- All social links → "#" (placeholder)
- Brand link to https://www.componentdock.com/

## Color Palette Summary

| Use | Hex |
|-----|-----|
| Page background | #ECECEC |
| Wrapper / card background | #FFFFFF |
| Primary text | #222222 |
| Link hover / accent | #f277ae (pink) |
| Hamburger bars | #c2c2c2 |
| Toggle active | #000000 |
| Portfolio category text | #9a9a9a |
| Footer text | #7e7e7e |
| Footer border | #cccccc |

## Key Implementation Decisions

1. **No Isotope/Masonry lib** — use CSS Grid with explicit column sizes matching original
2. **No prettyPhoto** — portfolio items link to # or detail pages (future)
3. **Hamburger menu** — pure CSS transitions (no JS animation library)
4. **Fonts** — Roboto via Google Fonts link in index.html
5. **Social icons** — lucide-react equivalents (Twitter → Twitter, Behance → Figma, Dribbble → Dribbble, Facebook → Facebook, RSS → Rss)
