# Unfurl — Implementation Tasks

## Phase 1: Scaffold

- [x] Copy drift app structure, rename to unfurl
- [x] Set package.json name to @free-react-templates/unfurl
- [x] Set homepage to https://unfurl.free.componentdock.com
- [x] Create public/CNAME with unfurl.free.componentdock.com
- [x] Add Google Fonts (Raleway + Arimo) to index.html
- [x] Set theme tokens in index.css

## Phase 2: Components

- [ ] Navbar.tsx — fixed top, dark bg, logo + links + hamburger + dark mode toggle
- [ ] Hero.tsx — full viewport dark bg, centered heading + subtitle + scroll arrow
- [ ] Portfolio.tsx — 3x3 grid of portfolio items with hover overlay
- [ ] About.tsx — two-column, heading + text + CV button
- [ ] Services.tsx — 3x2 grid of service cards with icons
- [ ] Skills.tsx — progress bars with labels and percentages
- [ ] Testimonials.tsx — 3 testimonial cards
- [ ] Journal.tsx — 3 blog post cards
- [ ] Contact.tsx — form + contact info
- [ ] Footer.tsx — social icons + Component Dock branding

## Phase 3: Tests (TDD — write first)

- [ ] Navbar.test.tsx
- [ ] Hero.test.tsx
- [ ] Portfolio.test.tsx
- [ ] About.test.tsx
- [ ] Services.test.tsx
- [ ] Skills.test.tsx
- [ ] Testimonials.test.tsx
- [ ] Journal.test.tsx
- [ ] Contact.test.tsx
- [ ] Footer.test.tsx
- [ ] App.test.tsx

## Phase 4: Verify

- [ ] scripts/verify-app.sh unfurl passes
- [ ] npm run spec:validate passes
- [ ] 100% coverage

## Phase 5: Deploy

- [ ] Push branch, open PR
- [ ] Merge PR
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)
