# Tasks: Unveil (ColorLib Unbrew Recreation)

## Phase 1: Scaffolding & Setup

- [ ] Copy base app structure to `apps/unveil`
- [ ] Update `package.json` with workspace name `@free-react-templates/unveil` and dependencies
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Configure `src/index.css` with Tailwind v4 theme tokens (`#553be6`, `#a87ffa`, `#1fb6fc`, `#2a3a60`, `#eaedff`, `#f9faff`, Roboto font)

## Phase 2: Core Components & Sections

- [ ] `Navbar.tsx`: Sticky navigation with branding "Unveil." and section links
- [ ] `Hero.tsx`: Gradient banner with productivity headline and CTA buttons
- [ ] `Services.tsx`: 6-card service grid with hover/active states
- [ ] `AboutTeam.tsx`: Agency overview and digital experts team cards
- [ ] `Testimonials.tsx`: Stats counter and customer carousel
- [ ] `WhyChooseUs.tsx`: 4-feature management benefits grid
- [ ] `Portfolio.tsx`: Awesome work gallery with image placeholders (`picsum.photos`)
- [ ] `Pricing.tsx`: Pricing tier cards with "GET STARTED" CTAs
- [ ] `Blog.tsx`: Recent blog posts grid
- [ ] `Newsletter.tsx`: Email subscription form
- [ ] `Footer.tsx`: Multi-column links, contact info, and mandatory Component Dock link (`https://www.componentdock.com/`)
- [ ] `App.tsx`: Compose all sections in exact ColorLib order

## Phase 3: Testing & Verification

- [ ] Write unit and integration tests for all components with 100% coverage
- [ ] Run `scripts/verify-app.sh unveil`
- [ ] Register workspace in root `package-lock.json` via `npm install`
