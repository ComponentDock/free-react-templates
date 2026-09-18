# AeroWorks — Implementation TODO

## Setup
- [ ] Create `apps/aeroworks/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/aeroworks`
- [ ] Set up `public/CNAME` with `aeroworks.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace

## Components (TDD: tests first)
- [ ] `Header.tsx` — TopBar + NavBar + "Add Car" button
- [ ] `Hero.tsx` — Background image, headline, search form with tabs
- [ ] `Services.tsx` — 4 service cards in a row
- [ ] `Feature.tsx` — Split layout: text + 6 icon items
- [ ] `CarListings.tsx` — Grid of car cards with image + price
- [ ] `ChooseUs.tsx` — Split layout: text + video placeholder
- [ ] `LatestNews.tsx` — 3 blog cards
- [ ] `Footer.tsx` — Dark multi-column footer
- [ ] `App.tsx` — Compose all sections in order

## Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` — clean vite build
- [ ] `scripts/verify-app.sh aeroworks` — full per-app gate passes

## Deployment
- [ ] Commit as `docs: prep AeroWorks (ColorLib Hvac) spec + research`
- [ ] Push to main
