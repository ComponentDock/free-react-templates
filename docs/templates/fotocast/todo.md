# Fotocast — Implementation Todo

## Setup
- [ ] Copy simplest existing app as base, rename package to `@free-react-templates/fotocast`
- [ ] Update `public/CNAME` to `fotocast.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://fotocast.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper

## Components (in section order)
- [ ] `Navbar.tsx` — Logo text + accent period, desktop nav with dropdown, social icons, mobile hamburger
- [ ] `HeroCover.tsx` — Full-width bg image, dark overlay, centered heading, AOS animation
- [ ] `ProfilePicture.tsx` — Centered small photo below hero
- [ ] `Specialties.tsx` — Section heading + 2×2 grid of specialty cards (image + text)
- [ ] `Testimonials.tsx` — Parallax bg, carousel with 3 testimonial cards
- [ ] `PhotoGallery.tsx` — Section heading + 3-col grid of 6 album cards with hover overlay
- [ ] `CtaSection.tsx` — Flex row: heading left, red button right
- [ ] `Footer.tsx` — Dark bg, 3-col layout (About, Navigations, Social), copyright with Component Dock link
- [ ] `MobileMenu.tsx` — Offcanvas slide-in menu (may be part of Navbar)

## App Composition
- [ ] `App.tsx` — Compose all sections in order
- [ ] `index.css` — Tailwind entry + theme tokens (#7971ea accent, etc.)

## Tests (TDD)
- [ ] Navbar tests — renders logo, nav links, social icons, hamburger toggle
- [ ] HeroCover tests — renders heading, background image, overlay
- [ ] ProfilePicture tests — renders centered image
- [ ] Specialties tests — renders 4 specialty cards in grid
- [ ] Testimonials tests — renders carousel with 3 cards
- [ ] PhotoGallery tests — renders 6 album cards
- [ ] CtaSection tests — renders heading and button
- [ ] Footer tests — renders 3 columns, copyright, Component Dock link
- [ ] App tests — renders all sections in correct order

## Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npx tsc --noEmit` — no type errors
- [ ] `npm run build` — builds successfully
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
