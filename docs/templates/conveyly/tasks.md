# Conveyly — Implementation Tasks

## Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/aurora or similar minimal template)
- [ ] Rename package to `@free-react-templates/conveyly`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Update `public/CNAME` to `conveyly.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://conveyly.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify: `grep -c "free-react-templates/conveyly" package-lock.json`

## Phase 2: Design Tokens
- [ ] Add brand colors to `src/index.css` via `@theme`
- [ ] Import Roboto font via Google Fonts link in `index.html`

## Phase 3: Components (TDD — test first)
- [ ] Navbar.tsx — sticky nav, logo, links, icons, mobile hamburger
- [ ] HeroSlider.tsx — full-width bg image, overlay, headline, 2 CTA buttons
- [ ] FreightCards.tsx — 3 service cards with images, icons, titles, "Read More"
- [ ] QuoteForm.tsx — 7-field form with validation
- [ ] AboutSection.tsx — split layout with QuoteForm + about content + stats
- [ ] ServiceSection.tsx — title, WhyChooseUs checklist, 4 hexagon service items
- [ ] PromoFeatures.tsx — 2×2 icon grid
- [ ] ParallaxCTA.tsx — full-width parallax banner with CTA
- [ ] Testimonials.tsx — photo carousel, quote, name/role, nav arrows
- [ ] Footer.tsx — newsletter, 4 columns, copyright, social icons, Component Dock link

## Phase 4: Assembly
- [ ] Compose all sections in App.tsx in correct order
- [ ] Verify responsive behavior at all breakpoints
- [ ] Run `npm run test:coverage` — must be 100% lines/functions/branches/statements

## Phase 5: Verification
- [ ] Run `scripts/verify-app.sh conveyly` (FAST_MODE per-app gate)
- [ ] Visual comparison with screenshot (dev server)
- [ ] No ColorLib references in app code (grep)
- [ ] Footer links to componentdock.com
- [ ] CNAME and homepage correct
