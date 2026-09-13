# Indigo — Implementation Tasks

> Recreation of ColorLib "Parason" (https://colorlib.com/wp/template/parason/)

## Pre-work (done)

- [x] Fetch and analyze preview HTML + CSS
- [x] Extract design tokens (brand colors, fonts, button shapes)
- [x] Write spec (`openspec/specs/template-indigo/spec.md`)

## Implementation

- [ ] Scaffold app directory (`apps/indigo`)
- [ ] Create `Navbar.tsx` — fixed top nav with mobile toggle
- [ ] Create `Hero.tsx` — hero banner with illustration + copy
- [ ] Create `Features.tsx` — 3 feature cards with icons
- [ ] Create `About.tsx` — split section (text + image)
- [ ] Create `OfferFeatures.tsx` — 2×2 feature grid + image
- [ ] Create `Solutions.tsx` — split section (image + text)
- [ ] Create `Pricing.tsx` — 3 pricing cards
- [ ] Create `Testimonials.tsx` — testimonial cards
- [ ] Create `ClientLogos.tsx` — grayscale logo strip
- [ ] Create `Footer.tsx` — 5-column footer with newsletter + social
- [ ] Compose all in `App.tsx`
- [ ] Add Tailwind theme tokens in `index.css`

## Testing

- [ ] Write component tests for each section
- [ ] Achieve 100% coverage (lines, functions, branches, statements)
- [ ] Run per-app gate: `scripts/verify-app.sh indigo`

## Deployment

- [ ] Set `homepage` in package.json
- [ ] Add `public/CNAME`
- [ ] Create PR and merge
- [ ] Bookkeeping: TEMPLATES.md `[~]` → `[x]`, readme:status
