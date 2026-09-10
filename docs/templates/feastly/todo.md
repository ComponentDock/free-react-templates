# Feastly — Implementation Tasks

## Phase 1: Project Setup

- [ ] Copy simplest existing app as scaffold (e.g. from another restaurant template)
- [ ] Rename package to `@free-react-templates/feastly`
- [ ] Update `index.html` title, description, Google Fonts (Playfair Display + Montserrat)
- [ ] Set up `src/index.css` with Tailwind `@theme` custom colors
- [ ] Set up `vite.config.ts` with `injectUiSource()` pattern
- [ ] Create `public/CNAME` with `feastly.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace in lockfile

## Phase 2: Components (TDD)

- [ ] **Navbar** — Responsive sticky navbar with logo, 6 links, mobile hamburger
- [ ] **Banner** — Hero with background image, subtitle, heading, CTA button
- [ ] **About** — Two-column (7:5) with heading, paragraphs, button, image
- [ ] **FoodMenu** — Section title + 2-column grid of 6 food item cards
- [ ] **IntroVideo** — Dark background with centered play button (modal/popup)
- [ ] **Testimonials** — Cream bg, title, carousel of 3 review cards with stars
- [ ] **Contact** — Left-half info display (address, hours, phone, email)
- [ ] **Footer** — Dark bg, 3 columns (logo+social, links, newsletter form), copyright
- [ ] **App.tsx** — Compose all sections in order

## Phase 3: Polish

- [ ] Verify responsive layout (mobile/tablet/desktop)
- [ ] Check all placeholder images load via picsum.photos
- [ ] Ensure no Colorlib references in app code
- [ ] Footer links to Component Dock
- [ ] Run `npm run test:coverage` — 100% coverage
- [ ] Run `scripts/verify-app.sh feastly` — all gates pass
- [ ] Commit, push, open PR, merge, deploy
