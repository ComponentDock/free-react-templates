# GraceWell — Implementation Tasks

## Phase 1: Setup
- [ ] Create `apps/gracewell/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/gracewell`
- [ ] Set up `public/CNAME` with `gracewell.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://gracewell.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Phase 2: Component Implementation (TDD)
- [ ] `Navbar.tsx` — fixed white navbar with logo, links, donate CTA
- [ ] `HeroBanner.tsx` — parallax hero with overlay, heading, CTA
- [ ] `DonationStats.tsx` — 3 colored stat cards (yellow/pink/green)
- [ ] `WelcomeSection.tsx` — two-column welcome with counters
- [ ] `CausesSection.tsx` — "Our Major Causes" heading + 3 image cards
- [ ] `FeaturesSection.tsx` — dark navy feature grid
- [ ] `EventsSection.tsx` — event listings
- [ ] `TestimonialsSection.tsx` — testimonial cards with photos
- [ ] `ClientsLogos.tsx` — partner logo row
- [ ] `Footer.tsx` — dark multi-column footer with newsletter
- [ ] `App.tsx` — compose all sections in order
- [ ] `index.css` — Tailwind theme tokens (`@theme` block)

## Phase 3: Verification
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes
- [ ] All tests pass at 100% coverage
- [ ] Build succeeds
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Visual match to reference screenshot
