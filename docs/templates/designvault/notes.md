# DesignVault — Implementation Notes

**Source:** ColorLib "Reopen" (https://colorlib.com/wp/template/reopen/)
**Preview:** https://preview.colorlib.com/theme/reopen/
**New name:** designvault
**Stack:** React 19 · Vite · Tailwind 4 · TypeScript

## Structure order (matches ColorLib section flow)

1. Navbar (hamburger overlay)
2. Header/Hero (logo + heading + subtext)
3. Portfolio Grid (masonry items)
4. Load More
5. Footer (copyright + social icons)

## Section-by-section fidelity notes

### 1. Navbar — Hamburger Overlay Menu
- Three horizontal lines (top-right) that toggle to X shape
- Full-screen white overlay with 30px #cccccc border
- Centered logo at top of overlay
- Horizontal nav links centered below logo
- Sub-menu under "Contact" → "Contact + Map"
- Animation: CSS transitions for toggle shape and overlay fade
- In React: useState for open/close, CSS transform for toggle animation

### 2. Header / Hero
- White background wrapper (30px margin from viewport edges)
- Logo centered with 80px top padding, opacity fade on hover
- Heading: "Handpicked **design resources** crafted with much ❤ and care for every detail"
  - "design resources" bold via `<b>` or Tailwind font-bold
  - Heart via lucide-react Heart icon
- Subtext: "free downloads only on fridays" — muted gray, smaller font
- Center-aligned, max-width ~1170px

### 3. Portfolio Grid (Masonry)
- CSS Grid or masonry-like layout with mixed column spans
- Items: `p_one_third` (1 col) and `p_two_third` (2 cols) — total 3 cols
- 18 portfolio items from the preview:
  SMARTPHONE, GALLERY, BOOK, VIDEO, DOODLE, VIDEO, FOSTER,
  GALLERY, STARLIGHT, ARTICLE, OPEN BOOK, VIDEO, BURGER,
  VIDEO, PRINTSCREEN, ARTICLE, BOTTLE, ARTICLE
- Each item: placeholder image (picsum.photos/seed/designvault-N/...),
  overlay with category tag (uppercase, small font) and title
- Hover: image zoom or dark overlay transition
- Mix of 1/3 and 2/3 width items:
  [1/3, 1/3, 1/3] → [2/3, 1/3] → [1/3, 1/3, 1/3] → [1/3, 2/3] → [1/3, 1/3, 1/3] → [2/3, 1/3] → [1/3, 1/3, 1/3]

### 4. Load More
- Centered text/button at bottom of grid section
- Simple styling: gray text, underline on hover, or pill button
- In React: useState to control visible items, load more adds next batch

### 5. Footer
- Copyright: "Made with ❤ by Colorlib" → replace with "Made with ❤ by Component Dock"
  (heart via lucide-react Heart icon)
- Social icons: Twitter, Behance, Dribbble, Facebook, RSS
  - Use lucide-react icons (Twitter → X icon, Behance/Dribbble → custom or similar)
  - All link to "#" (placeholder)
- Gray text on light background, centered

## Design tokens to set in index.css @theme

```css
@theme {
  --color-background: #ECECEC;
  --color-surface: #ffffff;
  --color-text: #222222;
  --color-text-light: #6f6f6f;
  --color-text-muted: #9a9a9a;
  --color-accent: #FD3137;
  --color-hover: #f277ae;
  --color-border: #cccccc;
  --color-toggle: #c2c2c2;
  --color-gray-dark: #191919;
}
```

## Component plan

- `Navbar.tsx` — hamburger toggle + full-screen overlay
- `Hero.tsx` — logo + heading + subtext
- `PortfolioGrid.tsx` — masonry grid of portfolio cards
- `PortfolioCard.tsx` — individual card with image + overlay
- `LoadMore.tsx` — load-more button
- `Footer.tsx` — copyright + social icons

## Placeholder images

Use `https://picsum.photos/seed/designvault-<n>/<w>/<h>` for deterministic
placeholder images:
- Grid items (1/3 width): 400x300
- Grid items (2/3 width): 800x300
- Hero/logo: use a text-based logo or SVG placeholder

## Icons (from lucide-react)

- Heart (for hero + footer)
- Twitter / X
- Facebook
- Rss
- Behance/Dribbble → use ExternalLink or Globe as fallback

## Pitfalls

- Masonry layout: CSS Grid with `grid-auto-flow: dense` or manual column
  spans. Tailwind's `col-span-1` / `col-span-2` in a 3-column grid.
- Overlay menu z-index must be above all content (z-50 or higher).
- Toggle animation: CSS transforms with transition, avoid layout shifts.
- The original uses Font Awesome icons — we replace with lucide-react.
- Footer MUST link to https://www.componentdock.com/ (branded "Component Dock").
