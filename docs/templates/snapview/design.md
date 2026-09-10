# Snapview — Implementation Guide

Source: ColorLib Bato (https://colorlib.com/wp/template/bato/)
Preview: https://preview.colorlib.com/theme/bato/

## Implementation tasks

### Phase 1: Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/bolt)
- [ ] Rename package to @free-react-templates/snapview
- [ ] Set CNAME to snapview.free.componentdock.com
- [ ] Set homepage to https://snapview.free.componentdock.com
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Add Karla + Playfair Display fonts via Google Fonts link in index.html
- [ ] Configure @theme tokens in index.css for brand colors

### Phase 2: Sections (top to bottom)

- [ ] Header.tsx — logo "Snapview" (Playfair Display, uppercase, letter-spacing: 10px), hamburger toggle
- [ ] SideNav.tsx — slide-in panel from left, search input, nav links (Home, Work, Blog, About, Contact), gallery thumbnail grid (4 images)
- [ ] HeroCarousel.tsx — full-height split layout (3/4 image + 1/4 text), 3 slides with tag, headline, description, CTA
- [ ] HeroSlide.tsx — individual slide component (tag, headline, desc, "View Galleries" button, slide number)
- [ ] App.tsx — compose Header + SideNav + HeroCarousel (single-page index)
- [ ] Footer.tsx — minimal footer with Component Dock attribution

### Phase 3: Tests + Verification

- [ ] Write tests for each section component (Vitest + RTL)
- [ ] Ensure 100% coverage
- [ ] Run scripts/verify-app.sh snapview
- [ ] Build check
- [ ] Push and deploy

## Design notes

### Section order

1. Header (fixed top, z-50, logo + hamburger toggle)
2. Side Navigation (slide-in overlay panel, toggled by hamburger)
3. Hero Carousel (full-height, split layout: image 3/4 + text 1/4)
   - 3 slides with unique images, tags, headlines, descriptions
   - Large slide numbers (01/03, 02/03, 03/03) as decorative element
4. Footer (minimal, Component Dock attribution only)

### Color palette for Tailwind @theme

- brand-primary: #F9CE00 (bright yellow — active states, accents)
- brand-dark: #000 (black — text, buttons, nav links)
- brand-light: #fafafa (light section backgrounds)
- brand-border: #e6e6e6 (subtle separators)
- brand-muted: #b7c2c2 (secondary text)
- brand-overlay: rgba(0, 0, 0, 0.4) (hero image dark overlay)

### Typography

- Body font: Karla (300, 400, 700) — clean sans-serif
- Display font: Playfair Display (400, 700, italic) — serif for logo and headings
- Logo: uppercase, letter-spacing: 10px, font-weight: 700
- Tags: uppercase, letter-spacing: 7px, font-size: 13px
- Slide numbers: font-size: 220px (decorative, hidden on mobile)

### Component patterns

- Buttons: square (no border-radius), border: 1px solid #000, text uppercase with wide letter-spacing
- Hero: split layout using flex — 75% image, 25% text panel
- Side nav: CSS transform translateX for slide-in/out, overlay backdrop
- Carousel: CSS transitions between slides, or a simple state-based slide switcher
- Images: picsum.photos with seed "snapview-1", "snapview-2", etc.
- Icons: lucide-react (ArrowRight for CTA, Search for search, Menu/X for hamburger)

### Fidelity notes

- The original is a SINGLE-PAGE photography portfolio (hero only on index)
- Gallery, Blog, About, Contact are separate HTML pages in the original — in React we compose them as sections on one page or as separate routes
- Hero carousel is the centerpiece: full-height, split layout with large image
- Side nav is a distinctive feature: slides in from the left with search + thumbnails
- Large decorative slide numbers (01/03) are a signature visual element
- Yellow (#F9CE00) is used sparingly — mostly for active/hover states
- Black and white palette dominates — very editorial/premium feel
- No ColorLib references anywhere in the app code
