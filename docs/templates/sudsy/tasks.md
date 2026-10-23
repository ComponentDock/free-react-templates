# Sudsy — Implementation Todo

Template: Sudsy (recreation of ColorLib Carwash)
Preview: https://preview.colorlib.com/theme/carwash/

## Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. apps/aurora) to apps/sudsy
- [ ] Rename package to @free-react-templates/sudsy
- [ ] Update package.json: name, homepage (https://sudsy.free.componentdock.com)
- [ ] Create public/CNAME with "sudsy.free.componentdock.com"
- [ ] Run `npm install` at root to register workspace
- [ ] Register injectUiSource() in vite.config.ts
- [ ] Update index.css with @theme tokens

## Phase 2: Components (TDD — test first)

- [ ] Navbar.tsx — sticky header, logo, nav links, phone CTA button
- [ ] Hero.tsx — bg image, dark overlay, heading, subtitle, CTA
- [ ] About.tsx — light blue bg, overlapping image + white card
- [ ] PricingCards.tsx — 3-column pricing grid
- [ ] Testimonials.tsx — slider with avatars and quotes
- [ ] Services.tsx — 4 service feature items
- [ ] VideoCTA.tsx — dark bg section with heading + description
- [ ] Footer.tsx — 4-column dark bg footer + copyright

## Phase 3: Integration

- [ ] Compose all sections in App.tsx in correct order
- [ ] Ensure index.html loads Google Fonts (Poppins + Work Sans)
- [ ] Verify responsive behavior on mobile viewports
- [ ] Run full test suite with 100% coverage
- [ ] Run `scripts/verify-app.sh sudsy`

## Phase 4: Ship

- [ ] Commit and push to main
- [ ] Verify Surge deploy
- [ ] Update TEMPLATES.md status to [x]
