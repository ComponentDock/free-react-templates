# Photon — Implementation TODO

**Source:** ColorLib "Atomic" → **New name:** Photon
**Preview:** https://preview.colorlib.com/theme/atomic/

## Tasks

- [ ] Scaffold app from template (copy simplest existing app, rename package)
- [ ] Set up `apps/photon/public/CNAME` → `photon.free.componentdock.com`
- [ ] Set up `apps/photon/package.json` homepage → `https://photon.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.css` with Tailwind @theme tokens (#0389FF, Work Sans)
- [ ] Implement Navbar component (transparent, dark text, dropdown)
- [ ] Implement Hero component (bg image, headline, CTA, play button)
- [ ] Implement Features component (3-column icon grid)
- [ ] Implement About component (2-column: text + image)
- [ ] Implement Gallery component (image carousel)
- [ ] Implement Services component (3-column on light bg)
- [ ] Implement Counter component (animated stats on blue bg)
- [ ] Implement Testimonials component (carousel)
- [ ] Implement Footer component (multi-column + copyright + ComponentDock link)
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for every component (Vitest + RTL, 100% coverage)
- [ ] Run `npm run spec:validate` to verify spec
- [ ] Run `scripts/verify-app.sh photon` for FAST_MODE gate
- [ ] Commit as `feat: add Photon template (ColorLib Atomic)`

## Section order (must match original exactly)

1. Navbar
2. Hero
3. Features
4. About
5. Gallery Carousel
6. Services
7. Counter
8. Testimonials
9. Footer

## Key fidelity notes

- Primary blue: #0389FF, hover: #0075dc
- Font: "Work Sans" (Google Fonts), loaded via <link> in index.html
- Hero min-height: 800px, bg-size: cover
- Counter numbers: 50px white, labels uppercase + opacity 0.5
- Section padding: 7em vertical
- Play button: 80×80 circle, 2px border
- Button radius: 0.25rem
- All images via picsum.photos with deterministic seeds
- Icons via lucide-react
