# Platewell — Implementation Tasks

## Phase 1: Scaffold
- [ ] Create `apps/platewell/` (copy simplest existing app, rename package)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set `public/CNAME` → `platewell.free.componentdock.com`
- [ ] Set `homepage` in `package.json` → `https://platewell.free.componentdock.com`
- [ ] Load Google Fonts (Playfair Display + Raleway) in `index.html`
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens

## Phase 2: Components (TDD)
- [ ] `Navbar.tsx` — transparent → fixed on scroll, 7 nav links
- [ ] `Hero.tsx` — full-viewport bg image, heading, subheading, outline CTA
- [ ] `About.tsx` — split layout: text left, image right, secondary CTA
- [ ] `OfferCarousel.tsx` — horizontal scroll carousel of food cards
- [ ] `MenuTabs.tsx` — pill tabs (Breakfast/Lunch/Dinner), 2-col food grid per tab
- [ ] `News.tsx` — 3-column blog card grid
- [ ] `Gallery.tsx` — 3×2 thumbnail grid with lightbox
- [ ] `Contact.tsx` — form + contact info sidebar
- [ ] `Footer.tsx` — dark bg, about text, link columns, social icons, Component Dock link

## Phase 3: Integration
- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Add smooth scroll-to-section on nav link click
- [ ] Add scroll-to-top or anchor behavior

## Phase 4: Verification
- [ ] `npm run test:coverage` → 100% lines/functions/branches/statements
- [ ] `npx tsc --noEmit` → zero type errors
- [ ] `npm run build` → clean build
- [ ] Visual check against reference screenshot
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
