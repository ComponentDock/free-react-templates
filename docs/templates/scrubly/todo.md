# Scrubly — Implementation TODO

## Phase 1: Scaffolding
- [ ] Create apps/scrubly/ from simplest existing app
- [ ] Rename package to @free-react-templates/scrubly
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Create public/CNAME with "scrubly.free.componentdock.com"
- [ ] Add Roboto font link to index.html (weights 300,400,500,700)
- [ ] Define design tokens in src/index.css (@theme block)
- [ ] Run npm install at repo root for lockfile registration

## Phase 2: Components (order)
- [ ] TopBar.tsx — contact info + social icons bar
- [ ] Navbar.tsx — transparent→white scroll effect, brand with yellow accent
- [ ] Hero.tsx — bg image, dark overlay, left-aligned text + blue CTA
- [ ] AppointmentForm.tsx — floating white card with 4 fields + submit
- [ ] About.tsx — 2-col, business hours card, emergency, counters
- [ ] Services.tsx — 6-item grid with icon hover effects
- [ ] Team.tsx — 3 staff cards with social links
- [ ] Testimonials.tsx — dark bg carousel with user cards
- [ ] Portfolio.tsx — 8-item image grid with hover overlays
- [ ] Blog.tsx — 3-column cards with author info
- [ ] Footer.tsx — dark bg, newsletter, Component Dock link

## Phase 3: App.tsx composition
- [ ] Compose all sections in order in App.tsx
- [ ] Verify responsive layout at mobile/tablet/desktop breakpoints

## Phase 4: Testing
- [ ] Write tests for each component (TDD: red → green → refactor)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Test Navbar scroll behavior
- [ ] Test responsive breakpoints

## Phase 5: Verification
- [ ] Run scripts/verify-app.sh scrubly
- [ ] Verify no ColorLib references in apps/scrubly/
- [ ] Verify footer links to https://www.componentdock.com/
- [ ] Verify all placeholder images use picsum.photos
- [ ] Verify design tokens match spec
