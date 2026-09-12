# Planar — Prep Notes

## Source
- ColorLib: Flatter (https://colorlib.com/wp/template/flatter/)
- Preview: https://preview.colorlib.com/theme/flatter/
- Category: Food Catering Service

## Replication Research Summary

### DOM Structure (from live preview)
The template is a single-page food catering service landing page with 8 sections.
The original uses Bootstrap grid, owl-carousel for the hero slider, and custom
zigzag SVG decorations between sections.

### Key Design Decisions for React Recreation
1. **Hero slider** — Replace owl-carousel with CSS-based auto-rotating slides
   (React state + CSS transitions). 3 slides, all identical text structure.
2. **Zigzag borders** — Use inline SVG or CSS clip-path. The original uses a
   `zigzag.svg` image at top/bottom of sections. Recreate with CSS.
3. **Popular Orders grid** — 3-column grid of food cards with price badges.
   Each card: image + name + price overlay.
4. **Testimonials** — Dark banner background (`banner-3.png`), white text,
   customer name + review text. Use a carousel or stacked layout.
5. **Video/CTA** — Dark background section with centered "Watch Video" heading.
   No actual video embed needed — just the styled section.
6. **Brand logos** — Simple horizontal row of placeholder brand logos.
7. **Footer** — 4-column layout with link lists + newsletter signup. Dark bg
   with zigzag top decoration.

### Sections (in implementation order)

| # | Section | Component | Complexity |
|---|---------|-----------|-----------|
| 1 | Navbar | `Navbar.tsx` | Medium (responsive, mobile menu) |
| 2 | Hero Slider | `HeroSlider.tsx` | Medium (auto-rotate, 3 slides) |
| 3 | Services | `Services.tsx` | Low (6 cards, icons) |
| 4 | Video/CTA | `VideoCta.tsx` | Low (static dark section) |
| 5 | Popular Orders | `PopularOrders.tsx` | Medium (6 food cards, price badges) |
| 6 | Testimonials | `Testimonials.tsx` | Medium (dark bg, review cards) |
| 7 | Brands | `Brands.tsx` | Low (logo row) |
| 8 | Footer | `Footer.tsx` | Medium (4 cols + newsletter) |

### Icon mapping (lucide-react)
- Birthday Catering → `Cake`
- Wedding Service → `Heart`
- Party Catering → `PartyPopper`
- Event Catering → `CalendarDays`
- Corporate Service → `Building2`
- Catering On Demand → `Clock`

### Placeholder images
- Hero slides: `https://picsum.photos/seed/planar-hero-1/1920/1080` (etc.)
- Food items: `https://picsum.photos/seed/planar-food-1/400/300` (etc.)
- Brand logos: use lucide-react icons or simple text placeholders

### Fidelity notes
- Match the EXACT section order: Navbar → Hero → Services → Video → Orders → Testimonials → Brands → Footer
- Match button style: rectangular, bordered, green (#78b454) primary, white secondary
- Match font: Josefin Sans globally
- Match color palette: green primary (#78b454), lavender-white page bg (#f9f9ff)
- Zigzag decorative element between major sections (CSS clip-path or SVG)
- No border-radius on buttons (keep them rectangular)
