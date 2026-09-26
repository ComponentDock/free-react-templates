# Conundrum — Implementation Tasks & Design Notes

Source: ColorLib "Riddle" — https://colorlib.com/wp/template/riddle/
Preview: https://preview.colorlib.com/theme/riddle/

## Design Notes

### Overall Aesthetic
- Ultra-clean, white-background portfolio for freelance designers
- Minimal chrome — lots of whitespace, no decorative elements
- Typography-driven: large centered headline, small nav text
- Black-and-white palette with gray accent for italic emphasis
- Pill-shaped buttons (fully rounded corners)

### Section-by-Section Fidelity

1. **Header**
   - Left: logo text "Conundrum" (Josefin Sans, bold, ~20px)
   - Center: nav links (Josefin Sans, 14px, normal weight, letter-spacing)
   - Right: black pill button "Get in touch" (white text, `rounded-full`)
   - Sticky on scroll (optional — original appears to scroll away)
   - Mobile: hamburger icon, slide-out or dropdown nav

2. **Intro / Hero**
   - Full-width white section, generous vertical padding (~120px top/bottom)
   - Centered headline, max-width ~800px
   - "I'm a freelance" in regular weight, dark `#001418`
   - "digital designer" in italic, muted `#979797`
   - ", with +10 years of experience" continues in regular weight
   - Font size: ~40-48px on desktop, scales down on mobile

3. **Portfolio Filter Bar**
   - Horizontal row of text-based filter tabs
   - Categories: All, Web design, Digital design, 3D Rendering, Brand Identity
   - Active tab: bold/dark text; inactive: normal weight, slightly muted
   - No underlines, no pill highlights — just text weight/color change
   - Centered or left-aligned within container

4. **Portfolio Grid**
   - Masonry-style 2-column layout (not uniform rows)
   - 8 items total with varying column spans:
     - Items 1-2: 2 equal columns (6-col each)
     - Items 3-5: 3 equal columns (4-col each)
     - Item 6: full width (12-col)
     - Items 7-8: 2 equal columns (6-col each)
   - Each item: full-bleed image, aspect ratio varies
   - Hover: dark semi-transparent overlay, centered "+ See Project" text
   - Uses picsum.photos for placeholder images (seeded per item)
   - No gaps between images (flush grid)

5. **Footer**
   - White background, centered layout
   - "Let's work together" heading (Josefin Sans, ~30px)
   - Black pill "Get in touch" button below heading
   - Social icons row: Pinterest, LinkedIn, Instagram, Facebook, Twitter
   - Icons: Font Awesome style (use lucide-react equivalents)
   - Copyright line at bottom
   - Component Dock link replaces Colorlib attribution

### Color Palette Reference
```
Background:   #ffffff  (white)
Text:         #001418  (very dark navy-black)
Muted/Italic: #979797  (medium gray)
Button:       #000000  (black) with #ffffff text
Hover overlay: rgba(0,0,0,0.5) approximately
```

### Typography
```
Font: Josefin Sans (Google Fonts)
Weights: 400 (body/nav), 600 (headings), 700 (bold emphasis)
Headline: ~40-48px desktop, ~28px mobile
Nav: ~14px, letter-spacing ~1px
Button: ~14px, uppercase optional
```

## Implementation Tasks

- [ ] Scaffold app: `apps/conundrum/` from simplest existing template
- [ ] Configure `package.json`, `vite.config.ts`, `index.html`, `public/CNAME`
- [ ] Set up `index.css` with Tailwind + `@theme` tokens (colors, font)
- [ ] Implement `Header.tsx` — logo + nav + CTA button
- [ ] Implement `Intro.tsx` — centered headline with italic span
- [ ] Implement `PortfolioFilter.tsx` — category filter tabs
- [ ] Implement `PortfolioGrid.tsx` — masonry grid + hover overlay
- [ ] Implement `Footer.tsx` — CTA + social icons + copyright + Component Dock
- [ ] Compose `App.tsx` — assemble all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run test:coverage` — verify 100%
- [ ] Run `scripts/verify-app.sh conundrum` — full per-app gate
