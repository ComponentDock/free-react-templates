# Focalpoint — Implementation Notes

Source: ColorLib Tulen (https://preview.colorlib.com/theme/tulen/)
New name: Focalpoint
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Section Order

1. Offcanvas Sidebar (fixed left)
2. Hero Section (pana-accordion)
3. About Section (split layout)
4. Gallery Section (masonry grid + filters)
5. Footer

## Section-by-Section Fidelity Notes

### 1. Offcanvas Sidebar
- Fixed left sidebar: 90px desktop, 60px mobile (< 420px)
- Hamburger toggle: uses ti-menu icon → replace with lucide-react Menu icon
- Social panel slides out from hamburger button area
- Slide-out nav panel (side-menu-wrapper): back arrow, logo, nav links, social icons, copyright
- Body needs `padding-left: 90px` (Tailwind `pl-[90px]` or inline)
- Sidebar shadow: `box-shadow: 14px 0px 103px rgba(0,0,0,0.08)`
- Use React state for toggle (open/closed), no external library
- Nav links: Home, About, Gallery, Blog, Contact (smooth scroll to sections)
- Social icons: lucide-react equivalents for Facebook, Twitter, LinkedIn, Instagram

### 2. Hero Section (Pana-Accordion)
- Horizontal accordion with 5+ items, each a full-cover background image
- Each item: category tag (small badge), title (h2), author avatar + name
- Accordion: clicking an item expands it, others collapse (CSS transitions)
- Below accordion: owl-carousel slider with same items (dual display)
- For React: use state to track active index, CSS transitions for width
- Bottom gradient overlay: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 94%)`
- Author avatars: use picsum.photos/seed/focalpoint-author-<n>/80/80
- Background images: use picsum.photos/seed/focalpoint-hero-<n>/1920/1080

### 3. About Section
- Split layout: left half (profile) + right half (text + skills)
- Left: profile photo with dark gradient overlay at bottom, white text
  - "Hello!" (h2), "I'm **Glen Cross**" (h2 strong), bio paragraph
  - "Say Hello" pill button (brand accent #2916e0, border-radius: 50px)
  - Email link below button
- Right: "About Me" heading, multiple paragraphs, "My Skills" heading
- Skills: 4-column grid of animated progress circles
  - Each: SVG circle with stroke-dasharray animation, label below
  - Skills: Photoshop 90%, Make Up 95%, Fashion 80%, Photography 85%
  - Circle color: brand accent #2916e0
  - Use CSS animation or framer-motion for circle fill on scroll

### 4. Gallery Section
- Masonry grid layout with filter tabs at top
- Filter tabs: All, Featured, People, Nature, Animal, Travel
  - Active tab: brand accent bottom border, uppercase, letter-spacing
- Gallery items: mixed sizes (standard, 2x width, 2x height)
  - Standard: single grid cell
  - gi-big: spans 2 columns
  - gi-long: spans 2 rows
- Each item: image with hover overlay (author avatar + name)
- Filter: React state filter, CSS display:none for filtered items (no layout shift)
- Grid: CSS Grid with `grid-auto-rows` and spans, or use masonry-like flex

### 5. Footer
- Dark background (#0f0f0f)
- Simple single-line: copyright + Component Dock link
- White text, small font, centered

## Key Implementation Decisions

- **No owl-carousel** — replace with CSS accordion + simple state (no Swiper needed for accordion)
- **No pana-accordion.js** — implement accordion behavior in React with state
- **No isotope** — use CSS Grid for masonry-like layout (no library needed)
- **No circle-progress.js** — implement SVG circles with CSS animation
- **No jquery** — all interactions in React
- **Font** — load Montserrat (400–700, italic variants) from Google Fonts in index.html
- **Images** — use picsum.photos/seed/focalpoint-<n>/... for deterministic placeholders
- **Mobile sidebar** — React state toggle, CSS transition transform

## Props / Component Shape

- `Sidebar` — manages open/closed state, renders hamburger + slide-out panel
- `HeroAccordion` — no props, hardcoded slides array, manages active index state
- `AboutSection` — no props, hardcoded bio + skills data
- `GallerySection` — no props, hardcoded items array, manages active filter state
- `Footer` — no props
- `App` — composes Sidebar + HeroAccordion + AboutSection + GallerySection + Footer

## Design Tokens (Tailwind @theme)

```css
@theme {
  --color-brand: #2916e0;
  --color-brand-hover: #1e10b0;
  --color-bg-dark: #0f0f0f;
  --color-bg-light: #e9e9e9;
  --color-text-heading: #252525;
  --color-text-body: #636363;
  --color-text-muted: #b2b2b2;
  --font-family-heading: "Montserrat", sans-serif;
  --font-family-body: "Montserrat", sans-serif;
}
```
