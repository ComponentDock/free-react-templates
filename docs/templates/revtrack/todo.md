# RevTrack — Implementation Todo

## Pre-implementation
- [x] Spec written (openspec/specs/template-revtrack/spec.md)
- [x] Design notes written (docs/templates/revtrack/design-notes.md)
- [ ] Copy simplest existing app as scaffold (e.g. apps/aurora → apps/revtrack)
- [ ] Rename package to @free-react-templates/revtrack
- [ ] Run npm install at root to register workspace
- [ ] Create public/CNAME with revtrack.free.componentdock.com
- [ ] Set homepage in package.json

## Component implementation (TDD order)
- [ ] Navbar — brand + nav links + mobile hamburger
- [ ] Hero — bg image + headline + search form
- [ ] HowItWorks — 3 step cards + video link
- [ ] PromoSection — two-column image + text + CTA
- [ ] CarListings — 6 car cards in grid
- [ ] Features — 6 feature items in grid
- [ ] Testimonials — 3 testimonial cards
- [ ] CTABanner — blue banner with CTA
- [ ] Footer — 4-column + social + copyright
- [ ] App.tsx — compose all sections in order
- [ ] index.css — Tailwind @theme with brand tokens

## Verification
- [ ] 100% test coverage (vitest + testing library)
- [ ] Typecheck passes (tsc --noEmit)
- [ ] Lint passes (oxlint)
- [ ] Build succeeds (vite build)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
