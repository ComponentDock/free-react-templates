# Azureflow — Implementation Tasks

Recreation of ColorLib Blueline as a React fullscreen business landing page.

## Task checklist

### Phase 1: Scaffolding

- [ ] Create `apps/azureflow/` from simplest existing app (copy + rename)
- [ ] Rename package to `@free-react-templates/azureflow`
- [ ] Update `public/CNAME` to `azureflow.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://azureflow.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Add Poppins font link to `index.html`

### Phase 2: Component architecture

- [ ] Create `src/App.tsx` — compose all sections in order
- [ ] Create `src/components/Navbar.tsx` — transparent header with logo + nav
- [ ] Create `src/components/Hero.tsx` — fullscreen banner with heading
- [ ] Create `src/components/Features.tsx` — 3-column numbered features
- [ ] Create `src/components/VideoSection.tsx` — video thumbnail + text
- [ ] Create `src/components/Services.tsx` — split black/white services
- [ ] Create `src/components/Portfolio.tsx` — latest works slider
- [ ] Create `src/components/Newsletter.tsx` — subscription form
- [ ] Create `src/components/Contact.tsx` — contact form with image
- [ ] Create `src/components/Footer.tsx` — dark footer with social icons

### Phase 3: Styling (fidelity)

- [ ] Page background: #f9f9ff
- [ ] Hero: fullscreen bg image, "azureflow" at 124px, letter-spacing 25px
- [ ] Hero text-shadow: -8px 15px 8px rgba(0,0,0,0.4)
- [ ] Gradient: linear-gradient(0deg, #3c50ca, #77d5f7) on buttons + numbers
- [ ] Feature numbers: 48px, gradient text, text-shadow
- [ ] Video: 20px border #f3f3f3, overlay 50% black, play button centered
- [ ] Services: full-width, left black bg, right white bg with 4 cards
- [ ] Service cards: 40px 50px padding, border 1px solid rgba(238,238,238,0.5)
- [ ] Newsletter input: 25px radius, #f9f9ff bg, gradient button
- [ ] Contact form: 70px horizontal padding, common-input styling
- [ ] Footer: black bg, social icons #1e1e1e bg, copyright with Component Dock
- [ ] All text uses Poppins font family
- [ ] Headings: weight 600, color #222
- [ ] Body: weight 300, color #777

### Phase 4: Interactivity

- [ ] Mobile hamburger menu toggle
- [ ] Newsletter form with email validation
- [ ] Contact form with name, email, message fields
- [ ] Portfolio carousel/slider navigation

### Phase 5: Footer + compliance

- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in any app file
- [ ] No `colorlib.com` or `preview.colorlib.com` strings in code

### Phase 6: Tests (TDD)

- [ ] Test: navbar renders with logo and nav links
- [ ] Test: hero displays heading text
- [ ] Test: features section renders 3 items
- [ ] Test: video section renders thumbnail and play button
- [ ] Test: services section renders split layout with 4 cards
- [ ] Test: portfolio section renders images
- [ ] Test: newsletter form renders input and button
- [ ] Test: contact form renders fields and submit button
- [ ] Test: footer renders with social icons and copyright
- [ ] Test: mobile menu toggle works
- [ ] Achieve 100% coverage

### Phase 7: Build + deploy

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] All tests pass with 100% coverage
- [ ] Build succeeds
- [ ] Commit: `feat: add azureflow (fullscreen business landing page)`
- [ ] Push and merge PR
