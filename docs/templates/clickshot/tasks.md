# ClickShot — Implementation Tasks

## Phase 1: Setup
- [ ] Create `apps/clickshot/` from a minimal existing app template
- [ ] Rename package to `@free-react-templates/clickshot`
- [ ] Set `public/CNAME` to `clickshot.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://clickshot.free.componentdock.com`
- [ ] Add Google Fonts link for Oswald + Roboto in `index.html`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + design tokens (`@theme` block)

## Phase 2: Components (TDD)
- [ ] **Navbar.tsx** — Responsive navbar with logo, nav links, dropdowns, cart icon
- [ ] **Hero.tsx** — Full-width banner with background image, headline, subtitle, CTA
- [ ] **About.tsx** — Centered text section with studio description
- [ ] **Gallery.tsx** — Filterable masonry grid with category tabs
- [ ] **Services.tsx** — Asymmetric 2-column service cards with images
- [ ] **Testimonials.tsx** — Split layout with image + testimonial slider
- [ ] **Pricing.tsx** — 3-column pricing cards
- [ ] **Blog.tsx** — 3-column blog post cards
- [ ] **Footer.tsx** — 4-column footer with newsletter, social icons, copyright

## Phase 3: Integration
- [ ] Compose all sections in `App.tsx`
- [ ] Ensure footer links to Component Dock
- [ ] Verify no ColorLib references in any app file
- [ ] Run `npm install` at repo root to register workspace

## Phase 4: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
- [ ] Visual comparison with original preview
