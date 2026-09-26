# ApertureX — Implementation Todo

## Setup
- [ ] Copy simplest existing app as base, rename package to `@free-react-templates/aperturex`
- [ ] Update `public/CNAME` to `aperturex.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://aperturex.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper

## Components (in section order)
- [ ] `Sidebar.tsx` — Fixed left sidebar (250px, black bg), logo, nav links, social icons; collapses to top bar on mobile with hamburger
- [ ] `MobileMenu.tsx` — Offcanvas slide-in menu (300px, white bg, slides from right)
- [ ] `Hero.tsx` — Full-viewport bg image, dark overlay (40%), "Welcome" heading, subtext, pill CTA button
- [ ] `PhotoGallery.tsx` — 3-column grid of 18 photo items, hover overlay with search icon, lightbox-ready
- [ ] `Testimonials.tsx` — Centered section, carousel with circular portraits, author names, blockquotes, dots navigation
- [ ] `Biography.tsx` — Dark bg (#1a1a1a), accent line, heading, portrait, bio text, two-column checklist
- [ ] `Blog.tsx` — Dark bg, 4 entries with side image + text, numbered pagination
- [ ] `Contact.tsx` — Dark bg, form with 5 fields (first/last name, email, subject, message), pill submit button
- [ ] `Footer.tsx` — Centered copyright line with Component Dock link

## App Composition
- [ ] `App.tsx` — Compose all sections in order (Sidebar + main content area)
- [ ] `index.css` — Tailwind entry + theme tokens (#df0e62 accent, Oswald + Quicksand fonts)

## Tests (TDD)
- [ ] Sidebar tests — renders logo, nav links, social icons; collapses on mobile
- [ ] MobileMenu tests — opens/closes on hamburger click
- [ ] Hero tests — renders heading, background image, overlay, CTA button
- [ ] PhotoGallery tests — renders 18 photos in grid, hover overlay
- [ ] Testimonials tests — renders carousel with cards, dots navigation
- [ ] Biography tests — renders dark section, portrait, bio, checklist
- [ ] Blog tests — renders 4 entries with pagination
- [ ] Contact tests — renders form fields and submit button
- [ ] Footer tests — renders copyright with Component Dock link
- [ ] App tests — renders all sections in correct order

## Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npx tsc --noEmit` — no type errors
- [ ] `npm run build` — builds successfully
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
