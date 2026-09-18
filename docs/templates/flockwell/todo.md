# Flockwell — Implementation Notes

Recreation of ColorLib **Salvation** (church template).
Source: https://preview.colorlib.com/theme/salvation/

## Section order (from top to bottom)

1. **TopBar** — location address + social media icon links
2. **Navbar** — dark bg, brand "Flockwell", nav links, Donate CTA
3. **Hero** — full-viewport slider, dark overlay, centered white text, CTA button
4. **About** — centered heading + subheading + description
5. **Features** — three icon cards (Worship, Connect, God's Love)
6. **Quote** — centered inspirational quote
7. **CallToAction** — "Connect, Grow and Serve with Us"
8. **MissionBanner** — dark bg, white text, donate CTA
9. **CounterStats** — primary blue bg, numeric counters
10. **Sermons** — alternating image+text sermon rows
11. **Testimony** — dark bg, testimonials
12. **Blog** — three-column blog card grid
13. **Events** — event cards with image + pink-tinted text panel
14. **Gallery** — image grid with hover overlays
15. **Footer** — dark bg, four columns, accent red links, Component Dock attribution
16. **DonateModal** — Bootstrap-style modal with donation form

## Design fidelity notes

### Colors
- Primary blue: #007bff — buttons, links, counter section bg
- Accent red: #ce0f3d — sermon title links, hero dashed accents, footer links
- Footer bg: #1a1a1a
- Event text panel: #f7e8f0 (light pink)
- Testimony bg: near-black
- Hero overlay: rgba(0,0,0,0.4)

### Typography
- Font: "Poppins" (Google Fonts), weights 300-800
- Hero h1: large, white, font-weight ~400-600
- Section headings: centered, bold
- Footer headings: 18px, uppercase, bold, white

### Layout
- Hero: full viewport height, centered text
- Sermons: alternating left/right image+text rows
- Blog: three-column card grid
- Events: full-width cards with side-by-side image + text panel
- Gallery: responsive image grid
- Footer: four-column layout

### Buttons
- Primary: blue bg, white text, rounded (0.25rem)
- Hover: darker blue (#0069d9)
- CTA style: larger padding (py-3 px-4)

### Interactive elements
- Navbar: sticky on scroll, hamburger on mobile
- Donate modal: triggered from navbar CTA and mission banner
- Gallery: hover overlay effect
- Counter: animated number counters

## Implementation approach

1. Create `apps/flockwell/` from simplest existing app scaffold
2. Build section components in `src/components/`
3. Use Tailwind theme tokens for colors (primary blue, accent red)
4. Use picsum.photos for placeholder images
5. Lucide-react for icons (replace Font Awesome)
6. Component Dock footer attribution required
7. TDD: tests before implementation, 100% coverage
