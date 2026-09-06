# Popwise — Implementation Tasks

## Phase 1: Setup

- [ ] Create `apps/popwise/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/popwise`
- [ ] Set CNAME to `popwise.free.componentdock.com`
- [ ] Set homepage to `https://popwise.free.componentdock.com`
- [ ] Add Roboto font link to index.html (Google Fonts, weights 300, 400)
- [ ] Configure Tailwind theme tokens (#efefef bg, #000 headings, #777 body text, etc.)

## Phase 2: Components

- [ ] `src/components/LaunchButton.tsx` — centered btn-secondary, triggers modal
- [ ] `src/components/ProductModal.tsx` — Bootstrap-style modal, split-screen layout
  - [ ] Modal overlay/backdrop (click to close)
  - [ ] Modal dialog (centered, lg, 7px radius, heavy shadow)
  - [ ] Product image panel (50% width, bg-image, price badge)
  - [ ] Product info panel (text-center, share icon, heading, divider, stars, description, social row)
- [ ] `src/components/StarRating.tsx` — 5-star rating display (4 filled + 1 empty)
- [ ] `src/components/SocialRow.tsx` — heart/message/add icons with counts
- [ ] `src/App.tsx` — compose LaunchButton + ProductModal

## Phase 3: Testing

- [ ] Test LaunchButton renders and triggers modal
- [ ] Test ProductModal opens/closes (backdrop, close button, Escape)
- [ ] Test split-screen layout structure
- [ ] Test StarRating renders correct filled/empty stars
- [ ] Test SocialRow renders icons and counts
- [ ] Test accessibility (aria attributes, focus trap, keyboard)
- [ ] Test responsive stacking

## Phase 4: Verification

- [ ] `npm run test:coverage` — 100% coverage
- [ ] `npm run typecheck` — no errors
- [ ] `npm run lint` — no errors
- [ ] `npm run build` — successful build
- [ ] `scripts/verify-app.sh popwise` passes
