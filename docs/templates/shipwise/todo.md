# Shipwise — Implementation Tasks

Source: ColorLib "Carries" → https://preview.colorlib.com/theme/carries/
New name: shipwise

## Tasks

- [ ] Create app scaffold: `apps/shipwise/` (copy minimal starter, rename package)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind theme tokens (brand #f39c12, Roboto font)
- [ ] Add Google Fonts link for Roboto in `index.html`
- [ ] Implement Navbar component (sticky, search icon, nav links)
- [ ] Implement HeroSlider component (2 slides, parallax bg, CTA buttons)
- [ ] Implement BlogCards component (3-column grid, gray-bg)
- [ ] Implement AboutQuote component (2-column: text + counter stats + quote form)
- [ ] Implement ServiceArea component (hexagon icons: Warehouse, Road Freight, Sea Freight, Air Freight)
- [ ] Implement WhyChooseUs component (checklist + promo cards, parallax bg)
- [ ] Implement Testimonials component (carousel, client photos + quotes)
- [ ] Implement Footer component (dark bg, 4 columns, subscribe form, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for every component (Vitest + RTL, 100% coverage)
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Run `npm run verify:app shipwise` to confirm typecheck/lint/tests/build pass
- [ ] Commit and push

## Fidelity notes

- Section order: Navbar → Hero → Blog → About+Quote → Services → Catalog → Testimonials → Footer
- Hexagon icons: use CSS clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
- Parallax: background-attachment: fixed for promo-bottom section
- Button styles: hero buttons = border 2px, radius 3px, uppercase, letter-spacing 2px; form buttons = radius 5px, bg #f39c12 or #5d6b82
- Footer subscribe: amber button, inline with email input
