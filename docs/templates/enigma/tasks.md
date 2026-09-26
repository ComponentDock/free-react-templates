# Enigma — Implementation Tasks

Source: ColorLib Riddle (https://colorlib.com/wp/template/riddle/)

## Task Breakdown

### Phase 1: Scaffold

- [ ] Copy simplest existing app as base (e.g. `apps/reap` or similar small portfolio app)
- [ ] Rename package to `@free-react-templates/enigma`
- [ ] Update `public/CNAME` → `enigma.free.componentdock.com`
- [ ] Update `package.json` homepage → `https://enigma.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `grep -c "free-react-templates/enigma" package-lock.json`

### Phase 2: Components

- [ ] `src/components/Header.tsx` — logo text + nav links (Home/About/Work/Contact) + "Get in touch" CTA button. Hamburger nav switch for mobile.
- [ ] `src/components/IntroSection.tsx` — centered large headline "I'm a freelance **digital designer**, with +10 years of experience". Gray accent on highlighted span.
- [ ] `src/components/PortfolioSection.tsx` — filter tabs (All/Web design/Digital design/3D Rendering/Brand Identity) + grid of 8 portfolio items with background images, hover overlay with "+ See Project" text animation.
- [ ] `src/components/PortfolioItem.tsx` — individual portfolio item with background image, hover overlay (rgba(0,20,24,0.8)), "+ See Project" heading that fades in.
- [ ] `src/components/Footer.tsx` — centered "Let's work together" heading, "Get in touch" button, social icon row (Pinterest/LinkedIn/Instagram/Facebook/Twitter via lucide-react), copyright with Component Dock link.

### Phase 3: Styling

- [ ] `src/index.css` — Tailwind entry + `@theme` with brand tokens: `--color-brand: #000`, `--color-accent: #979797`, `--color-dark: #001418`
- [ ] Google Fonts: Josefin Sans (400, 700) loaded in `index.html`
- [ ] Buttons: rectangular (no radius), solid black bg, white text, 14px font
- [ ] Portfolio items: 600px height, background-position center, hover overlay transition
- [ ] Filter tabs: inline-block, gray color (#979797), cursor pointer

### Phase 4: Tests (TDD)

- [ ] Header.test.tsx — logo, nav links, CTA button, mobile hamburger
- [ ] IntroSection.test.tsx — headline text, highlighted span
- [ ] PortfolioSection.test.tsx — filter tabs, grid items, filter functionality
- [ ] PortfolioItem.test.tsx — hover overlay, "+ See Project" visibility
- [ ] Footer.test.tsx — CTA, social links, Component Dock copyright
- [ ] App.test.tsx — all sections compose correctly
- [ ] 100% coverage via `npm run test:coverage`

### Phase 5: Verification

- [ ] `scripts/verify-app.sh enigma` passes (typecheck + lint + tests + build)
- [ ] Visual check: layout matches reference (header, intro, portfolio grid, footer)
- [ ] No ColorLib references in `apps/enigma/`
- [ ] Footer links to Component Dock

## Design Notes

### Structure Order
1. Header (logo + nav + CTA)
2. Intro Section (centered headline)
3. Portfolio Section (filter tabs + grid)
4. Footer (CTA + social + copyright)

### Fidelity Notes

- The original uses Mixitup.js for portfolio filtering — implement with React state + CSS transitions
- Original uses Bootstrap grid (col-lg-6, col-lg-4, col-lg-12) — replicate with Tailwind grid/flex
- Portfolio item hover: background transitions to `rgba(0,20,24,0.8)`, heading fades in with letter-spacing animation
- The "+ See Project" text uses letter-spacing: 10px → 0 animation on hover
- Filter tabs are simple text items (no underline/active state in CSS — just color change via Mixitup)
- Footer is minimal: centered text, single button, icon row, small copyright text
- Mobile: hamburger icon triggers full-screen nav overlay
- The original has a page preloader (loader spinner) — optional, could skip for simplicity
