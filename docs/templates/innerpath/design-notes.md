# InnerPath — Design Notes & Task Outline

## Template Identity
- **Name:** innerpath
- **Source:** ColorLib Counselor (slug: `counselor`)
- **Preview:** https://preview.colorlib.com/theme/counselor/
- **Deploy:** https://innerpath.free.componentdock.com
- **Category:** Counseling & Therapy

## Design Notes

### Color Palette
- Primary green: #589167 (sage) — hero overlays, testimonial background, CTA buttons, active carousel dots
- Teal accent: #01d28e — intro area accent
- Dark: #1a1a1a — navbar, footer, text
- Light gray: #f5f4f0 — alternating section backgrounds (pricing)
- White: #fff — cards, main backgrounds
- Text: #4d4d4d (body), #999 (metadata), #fff (on dark)

### Typography
- Font: Roboto (Google Fonts)
- Weight: 400 body, 600-700 headings
- Sizes: h1 ~36px, h2 ~30px, body ~16px

### Layout Patterns
- Max-width container ~1200px centered
- 3-column grids for features, steps, pricing, blog
- 3x2 grid for services (6 cards)
- 2-column layout for contact form (form + services list)
- Full-width parallax sections for hero and contact

### Component Breakdown
1. **Navbar** — Dark sticky, logo + links, mobile hamburger
2. **Hero** — Background image + green overlay, heading, subtitle, 3 feature cards
3. **HowItWorks** — 3 numbered steps horizontal flow
4. **Welcome** — Two-column: text left, video CTA right, background image
5. **Services** — 3x2 card grid with image overlays
6. **Testimonials** — Green overlay, carousel with avatar cards
7. **Pricing** — 3 pricing cards, light gray background
8. **Contact** — Parallax bg + green overlay, 2-column form + checklist
9. **Blog** — 3 post cards in a row
10. **Footer** — Dark, 4 columns, copyright bar

## Task Outline

### Phase 1: Scaffolding
- [ ] Create `apps/innerpath/` by copying simplest existing app
- [ ] Update package.json: name → @free-react-templates/innerpath
- [ ] Create `public/CNAME` with `innerpath.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Component Implementation (TDD order)
- [ ] **Navbar.tsx** — Dark navbar, links, hamburger, sticky
- [ ] **Hero.tsx** — Green overlay bg, heading, 3 feature cards
- [ ] **HowItWorks.tsx** — 3-step process with numbers
- [ ] **Welcome.tsx** — Intro text + video CTA button
- [ ] **Services.tsx** — 6-card grid with image overlays + hover
- [ ] **Testimonials.tsx** — Carousel with avatar cards
- [ ] **Pricing.tsx** — 3 pricing tiers with feature lists
- [ ] **ContactForm.tsx** — Parallax bg, form fields, services checklist
- [ ] **Blog.tsx** — 3 blog post cards
- [ ] **Footer.tsx** — 4-column dark footer

### Phase 3: Assembly
- [ ] **App.tsx** — Compose all sections in order
- [ ] **index.css** — Tailwind entry + @theme tokens for #589167, Roboto
- [ ] Verify component export/import chain

### Phase 4: Testing
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run test:coverage` — verify 100% lines/functions/branches/statements
- [ ] Run `npm run build` — verify no errors
- [ ] Run `npm run lint` — verify no warnings

### Phase 5: Fidelity Cross-Check
- [ ] Compare section order with preview DOM
- [ ] Verify brand color #589167 used consistently
- [ ] Verify Roboto font loaded
- [ ] Verify all placeholder images use picsum.photos/seed/innerpath-*
- [ ] Verify no ColorLib references in app code
- [ ] Verify footer links to componentdock.com

## Section-by-Section Fidelity Notes

| Section | Preview Order | CSS Class | Key Visual |
|---------|--------------|-----------|------------|
| Navbar | 1 | .navbar-dark | Dark bg, white links |
| Hero/Intro | 2 | .ftco-intro | Green overlay, 3 feature cards |
| How It Works | 3 | .ftco-section | White bg, 3 numbered steps |
| Welcome/About | 4 | .ftco-section.ftco-no-pb | Background image, 2-col |
| Services | 5 | .ftco-section | 3x2 card grid, hover |
| Testimonials | 6 | .testimony-section | Green overlay, carousel |
| Pricing | 7 | .ftco-section.bg-light | Light gray bg, 3 cards |
| Contact | 8 | .ftco-appointment | Parallax bg, form |
| Blog | 9 | .ftco-section | 3 post cards |
| Footer | 10 | footer | Dark, 4 columns |
