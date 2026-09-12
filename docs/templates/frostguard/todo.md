# FrostGuard — Implementation TODO

## Setup
- [ ] Create `apps/frostguard/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/frostguard`
- [ ] Set up `public/CNAME` with `frostguard.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace

## Components (TDD: tests first)
- [ ] `Header.tsx` — Social icons bar + nav bar with logo, links, phone
- [ ] `Hero.tsx` — Background image slider, headline, CTA button
- [ ] `Benefits.tsx` — 4 benefit cards in a row (icons + titles)
- [ ] `Services.tsx` — Carousel of service cards with images, icons, descriptions
- [ ] `Counter.tsx` — Dark bg with 4 animated stat counters
- [ ] `About.tsx` — Split layout: images left, text + checklist + CTA right
- [ ] `Quote.tsx` — Form left, video thumbnail right
- [ ] `Testimonials.tsx` — Carousel of testimonial cards
- [ ] `CallToAction.tsx` — Dark bg image, centered text, yellow CTA button
- [ ] `Products.tsx` — Grid of 4 product cards with labels
- [ ] `LatestNews.tsx` — 3 blog cards with images, categories, dates
- [ ] `Footer.tsx` — CTA bar + multi-column layout + copyright
- [ ] `App.tsx` — Compose all sections in order

## Verification
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run build` — clean vite build
- [ ] `scripts/verify-app.sh frostguard` — full per-app gate passes

## Deployment
- [ ] Commit as `docs: prep FrostGuard (ColorLib Hvacompany) spec + research`
- [ ] Push to main
