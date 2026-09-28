# Forkfully — Implementation Tasks

## Phase 1: Project Setup
- [ ] Copy simplest existing app as boilerplate
- [ ] Rename package to `@free-react-templates/forkfully`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Update `public/CNAME` to `forkfully.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://forkfully.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Set up `src/index.css` with Tailwind v4 + theme tokens (#f42f2c brand, Oswald/Roboto fonts)

## Phase 2: Components (in section order)
- [ ] `Navbar.tsx` — fixed/sticky nav, mobile hamburger, off-canvas menu
- [ ] `Hero.tsx` — split layout, headline, description, CTA button, decorative right panel
- [ ] `TopDishes.tsx` — section title, 3-column dish card grid
- [ ] `MenuSection.tsx` — section title, two-column menu item list
- [ ] `Gallery.tsx` — section title, masonry image grid with hover overlay
- [ ] `Testimonials.tsx` — carousel slider with person image + text
- [ ] `Reservation.tsx` — section title, booking form with all fields
- [ ] `Footer.tsx` — 4 link columns, newsletter signup, copyright, social icons, Component Dock link

## Phase 3: App Composition
- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point (excluded from coverage)

## Phase 4: Testing (TDD)
- [ ] Navbar tests: renders links, mobile toggle, sticky behavior
- [ ] Hero tests: renders headline, CTA, split layout
- [ ] TopDishes tests: renders 3 cards with image, name, price
- [ ] MenuSection tests: renders 2-column list with items
- [ ] Gallery tests: renders image grid with hover overlay
- [ ] Testimonials tests: renders carousel slides
- [ ] Reservation tests: renders form fields, handles input
- [ ] Footer tests: renders columns, newsletter, social links
- [ ] Achieve 100% coverage

## Phase 5: Verification
- [ ] `scripts/verify-app.sh forkfully` passes
- [ ] No ColorLib references in app code
- [ ] Component Dock link in footer
- [ ] Placeholder images use picsum.photos
