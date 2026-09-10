# Batcraft — Design Notes & Tasks

## Source
- **ColorLib:** Bato (https://colorlib.com/wp/template/bato/)
- **Preview:** https://preview.colorlib.com/theme/bato/
- **New name:** batcraft
- **Category:** Photography portfolio

## Section Order & Structure

1. **Header** — Sticky top bar. Logo text (Playfair Display). Hamburger toggle right.
2. **Hero** — Full-height carousel (3 slides). Split: 75% image / 25% text panel. Text has: decorative number (220px), tag label, h2 headline, paragraph, CTA button.
3. **About** — 50/50 flex. Left: image (could be carousel). Right: title label, heading (38px), paragraph, checklist with icons.
4. **Work/Portfolio** — Alternating entries (2-3). Each: 55% image / 45% text panel. Text has h2 heading + "View Gallery" button. Entries alternate image left/right.
5. **Blog** — Article cards (2-3). Image with hover zoom + dark overlay. Floating date badge (#FFE9E3). Heading + description below image.
6. **Subscribe** — Heading + description. Email input (underline border) + full-width black submit button.
7. **Footer** — Multi-column. Social icons (#F9CE00). Copyright. Component Dock link.

## Implementation Notes

### Layout approach
- All sections use flexbox split layouts (no CSS grid needed)
- Hero: use a state-controlled slide index instead of Owl Carousel
- About/Work: standard 2-column flex with alternating direction via `flex-row-reverse`
- Blog: standard card grid

### Key components to build
- `Hero.tsx` — carousel with state, slide navigation, split layout per slide
- `Navbar.tsx` — sticky header with hamburger toggle and slide-out overlay
- `About.tsx` — 50/50 split section
- `WorkEntry.tsx` — single portfolio entry (reusable with alternating layout)
- `Work.tsx` — container for work entries
- `BlogCard.tsx` — article card with hover effects
- `Blog.tsx` — blog section container
- `Subscribe.tsx` — newsletter form section
- `Footer.tsx` — footer with social icons

### Design token implementation
- Brand yellow `#F9CE00` → `--color-brand` in Tailwind theme
- Body font "Karla" → default sans-serif via Google Fonts link in index.html
- Display font "Playfair Display" → used via `font-display` class
- Buttons: nearly sharp (rounded-sm or rounded-[1px]), uppercase, wide letter-spacing
- Large decorative numbers: absolute positioned, 220px, opacity low, `--color-bg-decorative`

### Fidelity concerns
- The hero carousel should feel smooth — use CSS transitions for slide changes
- Blog hover effects (image zoom + overlay) are critical to the design feel
- The floating date badge on blog cards needs careful z-index layering
- Navigation slide-out needs backdrop overlay + smooth transform animation
- All decorative oversized text (250px) should be absolute-positioned and non-interactive

### Placeholder images
- Hero backgrounds: `https://picsum.photos/seed/batcraft-hero-1/1200/800` (and 2, 3)
- About image: `https://picsum.photos/seed/batcraft-about/800/600`
- Work entries: `https://picsum.photos/seed/batcraft-work-1/1200/800` (and 2, 3)
- Blog thumbnails: `https://picsum.photos/seed/batcraft-blog-1/600/400` (and 2, 3)
