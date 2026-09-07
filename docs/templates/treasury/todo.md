# Treasury — Implementation Todo

## Phase 1: Project Setup
- [ ] Copy simplest existing app as template (e.g. `apps/aurora` or similar)
- [ ] Rename package to `@free-react-templates/treasury`
- [ ] Update `public/CNAME` to `treasury.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://treasury.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/treasury" package-lock.json`

## Phase 2: Component Scaffolding
- [ ] Create `src/components/Navbar.tsx`
- [ ] Create `src/components/Hero.tsx`
- [ ] Create `src/components/Features.tsx`
- [ ] Create `src/components/AboutAmortization.tsx`
- [ ] Create `src/components/AboutUs.tsx`
- [ ] Create `src/components/Team.tsx`
- [ ] Create `src/components/Gallery.tsx`
- [ ] Create `src/components/HowItWorks.tsx`
- [ ] Create `src/components/Services.tsx`
- [ ] Create `src/components/Testimonials.tsx`
- [ ] Create `src/components/Pricing.tsx`
- [ ] Create `src/components/FAQ.tsx`
- [ ] Create `src/components/AboutFeatures.tsx`
- [ ] Create `src/components/Blog.tsx`
- [ ] Create `src/components/Contact.tsx`
- [ ] Create `src/components/Footer.tsx`

## Phase 3: Design Tokens
- [ ] Set up `src/index.css` with Tailwind `@theme` block
- [ ] Define brand color `--color-primary: #fd7e14`
- [ ] Define footer bg `--color-footer: #343a40`
- [ ] Define check success `--color-check: #71bc42`
- [ ] Import Open Sans from Google Fonts in `index.html`

## Phase 4: TDD Implementation
- [ ] Write tests for Navbar (logo, links, sticky, mobile toggle, dropdown)
- [ ] Implement Navbar
- [ ] Write tests for Hero (slides, carousel, scroll indicator)
- [ ] Implement Hero
- [ ] Write tests for Features (3 cards, icons, titles)
- [ ] Implement Features
- [ ] Write tests for AboutAmortization (image, checklist, form)
- [ ] Implement AboutAmortization
- [ ] Write tests for AboutUs (heading, image, text)
- [ ] Implement AboutUs
- [ ] Write tests for Team (8 members, social overlay)
- [ ] Implement Team
- [ ] Write tests for Gallery (filters, grid, lightbox)
- [ ] Implement Gallery
- [ ] Write tests for HowItWorks (3 steps)
- [ ] Implement HowItWorks
- [ ] Write tests for Services (6 cards)
- [ ] Implement Services
- [ ] Write tests for Testimonials (4 quotes)
- [ ] Implement Testimonials
- [ ] Write tests for Pricing (3 tiers, feature lists, highlighted tier)
- [ ] Implement Pricing
- [ ] Write tests for FAQ (8 items, 2 columns)
- [ ] Implement FAQ
- [ ] Write tests for AboutFeatures (2 items, links)
- [ ] Implement AboutFeatures
- [ ] Write tests for Blog (3 cards, meta info)
- [ ] Implement Blog
- [ ] Write tests for Contact (info columns, form fields)
- [ ] Implement Contact
- [ ] Write tests for Footer (links, social, newsletter, copyright)
- [ ] Implement Footer
- [ ] Compose all sections in `src/App.tsx`

## Phase 5: Verification
- [ ] Run `npm run test:coverage` — must be 100% lines/functions/branches/statements
- [ ] Run `npx tsc --noEmit` — no type errors
- [ ] Run `npm run build` — successful build
- [ ] Run `npm run lint` — no lint errors
- [ ] Verify no ColorLib references in app code
- [ ] Verify footer links to https://www.componentdock.com/
- [ ] Verify `public/CNAME` contains `treasury.free.componentdock.com`
- [ ] Verify responsive layout (mobile menu, stacked columns)
- [ ] Verify pill-shaped buttons (border-radius: 30px)
- [ ] Verify Open Sans font throughout
