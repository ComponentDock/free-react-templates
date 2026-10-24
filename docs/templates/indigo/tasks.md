# Indigo — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/indigo`
> (<https://indigo.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

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

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/indigo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/indigo/public/CNAME` = `indigo.free.componentdock.com`
  and the package `homepage` = `https://indigo.free.componentdock.com`.
