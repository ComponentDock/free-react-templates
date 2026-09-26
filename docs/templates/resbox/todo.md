# Resbox — Implementation Notes

**Source:** ColorLib Rea (https://colorlib.com/wp/template/rea/)
**Preview:** https://preview.colorlib.com/theme/rea/
**New name:** resbox

## Structure Order (section-by-section)

1. **Navbar** — Top nav bar, logo left, 4 links right, hamburger for mobile
2. **Search Bar** — Full-width search input below nav
3. **Hero / Animated Headline** — Rotating text headline
4. **Blog Grid (Masonry)** — Resource items in masonry layout (3 sizes)
5. **Categories Section** — Category list with 8 items
6. **Footer** — Nav links, copyright, Component Dock link

## Section-by-Section Fidelity Notes

### 1. Navbar
- Logo: text-based ("Rea" → rename to "Resbox")
- Links: Home, About, Contact, Features (right-aligned)
- Mobile: hamburger toggle (4-line animated menu)
- Social icons in menu area (optional, can use lucide-react)
- Full-width, no background color (transparent on white)

### 2. Search Bar
- Below nav, centered, max-width 350px
- Placeholder: "search anything & hit enter"
- Large bold placeholder text (35px, weight 700)
- Simple underline/border style

### 3. Hero / Animated Headline
- Animated rotating headline with typewriter/rotate effect
- Phrases: "pixel precise", "web resources", "psd files", "mockups", "to suit all your needs."
- Font: Lato 300, 28px
- Center-aligned, generous padding

### 4. Blog Grid (Masonry)
- Masonry layout with 3 item sizes: full (1200px), half (600px), quarter (300px)
- Each item:
  - Image (full-width of item, auto height)
  - Heart/like icon bottom-right (use picsum.photos for images)
  - Category label: uppercase, letter-spacing 3px, gray #a5a5a5
  - Title: 20px, weight 400
  - Download count: gray text
- Image hover: dark overlay rgba(22,31,50, 0.5)
- Grid items: 2px border-radius

### 5. Categories Section
- Category list: Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video
- Inline display, each category as a link
- Clean, minimal styling

### 6. Footer
- White background, centered
- Social icon links
- Nav links: About, Features, Contact
- Copyright line
- MUST include Component Dock link (replaces Colorlib credit)

## Design Token Summary

- Primary: #f271ab (pink)
- Text: #2f2f2f (dark), #a5a5a5 (secondary), #7e7e7e (footer)
- Background: #fff (main), #F5F5F5 (alt)
- Overlay: rgba(22,31,50, 0.5)
- Font: Lato (300, 400, 700)
- Radius: 2px

## Implementation Approach

- Copy simplest existing app as base (e.g. `spread` or similar blog-style)
- Create `apps/resbox/` with standard structure
- Use `cn()` from packages/ui for class composition
- Use picsum.photos with seed "resbox-N" for deterministic images
- Lucide-react icons for heart, search, hamburger, social
- Tailwind theme tokens in index.css for brand colors
- Responsive: mobile-first with md/lg breakpoints
