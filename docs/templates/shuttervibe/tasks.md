# Shuttervibe — Design Notes & Tasks

Source: ColorLib "Thumber" (https://colorlib.com/wp/template/thumber/)
Preview: https://preview.colorlib.com/theme/thumber/

## Section order (1:1 with original)

### Homepage
1. **Header bar** — Fixed black top bar: logo "Shuttervibe" left (uppercase, bold, white), hamburger "Menu" toggle right. Social icons (Facebook, Twitter, Instagram) in hidden desktop nav.
2. **Full-screen Swiper gallery** — 80% viewport height main image view + 20% thumbnail strip at bottom. Navigation arrows appear on hover. Each slide:
   - Cover background image
   - Expandable info panel (bottom-left, white bg): title + description, toggled by arrow button
   - Zoom button (bottom-right, white 60px square)
3. **Footer** — Minimal, links to Component Dock

### Photos page (photos.html)
4. **Photo grid** — Responsive grid of photo items (300px height images). Dark overlay on hover with centered icon + category label.

### About Me page (bio.html)
5. **Bio section** — Would include photographer bio, but not required for single-page recreation.

### Contact page (contact.html)
6. **Contact form** — Bootstrap form with underline-style inputs (border-bottom: 2px solid gray), white text on dark background.

## Fidelity notes

- **Dark theme** — The entire site is black-background with white text. Very immersive photographer aesthetic.
- **Pink accent #e44985** — Used sparingly: active nav link, thumbnail border, mobile menu active link. Not a primary color but a highlight.
- **Quicksand font** — Rounded, friendly sans-serif. Used for headings. Body uses Bootstrap default.
- **Swiper.js** — The core of the homepage. Main gallery syncs with thumbnail strip. Each slide has independent info panels.
- **Expandable info panels** — Bottom-left of each slide, white background. Starts as 60×60px (only arrow visible), expands to 400px max-width with title + description. CSS transition on opacity + visibility.
- **Photo grid hover** — Dark overlay (rgba 0,0,0,0.6) fades in, centered icon + category text fades in and slides up.
- **Mobile menu** — Off-canvas right slide-out with white background, 300px width. Triggered by hamburger toggle.
- **No hero section** — The gallery IS the hero. Full-screen immersive from the start.
- Use `picsum.photos/seed/shuttervibe-<n>/1200/800` for gallery placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/shuttervibe` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Quicksand) + Swiper CSS
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand pink #e44985)
- [ ] Install swiper package (or use CDN)
- [ ] Implement HeaderBar component (fixed, logo, hamburger toggle, social icons)
- [ ] Implement SwiperGallery component (main view + synced thumbnails)
- [ ] Implement ImageInfoPanel component (expandable, white bg, arrow toggle)
- [ ] Implement ZoomButton component (white square, icon)
- [ ] Implement MobileMenu component (off-canvas right, white bg, nav links)
- [ ] Implement PhotoGrid component (responsive grid, hover overlays)
- [ ] Compose App.tsx with homepage gallery
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/shuttervibe
