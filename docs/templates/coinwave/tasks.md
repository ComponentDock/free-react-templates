# CoinWave — Implementation Tasks

## Phase 1: Setup
- [ ] Create `apps/coinwave/` from simplest existing app scaffold
- [ ] Rename package to `@free-react-templates/coinwave`
- [ ] Set `public/CNAME` to `coinwave.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://coinwave.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Add Poppins font via Google Fonts link in index.html
- [ ] Define theme tokens in `src/index.css` (brand-orange, brand-gradient, bg-dark-nav, bg-dark, bg-light, etc.)

## Phase 2: Components (TDD)
- [ ] Header.tsx — fixed header, scroll bg effect, nav with dropdown, mobile hamburger + slide-in panel
- [ ] Hero.tsx — fullscreen bg image + dark overlay, price display, "Buy Bitcoin" CTA
- [ ] ConvertArea.tsx — orange gradient bg, form inputs, overlaps banner (-105px margin)
- [ ] SimpleServices.tsx — 3-column cards with icons, linked titles, descriptions
- [ ] AboutUs.tsx — dark bg, full-width, image carousel left + text right
- [ ] ServiceFeatures.tsx — 6 items in 3×2 grid, linear icons, hover → title orange
- [ ] Stats.tsx — light bg, chart image + heading + description + CTA
- [ ] CallToAction.tsx — orange gradient, white heading + text + CTA button
- [ ] Pricing.tsx — 3 bordered cards with names, prices, descriptions, buttons
- [ ] Blog.tsx — 3 cards with thumbnails, titles, descriptions, author rows
- [ ] Footer.tsx — 3-column (About, Products, Newsletter) + social icons + copyright + Component Dock

## Phase 3: Assembly
- [ ] App.tsx — compose all sections in order
- [ ] Verify responsive layout (mobile nav, stacked columns, scaled headings)

## Phase 4: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage
- [ ] Build succeeds
- [ ] Visual fidelity check against preview
- [ ] No ColorLib references in app code
