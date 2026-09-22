# FlexZone — Implementation Tasks

## Pre-implementation
- [x] Spec written (openspec/specs/template-flexzone/spec.md)
- [x] Design notes (docs/templates/flexzone/design-notes.md)
- [ ] Spec validated (`npm run spec:validate`)

## Implementation order

### Phase 1: Scaffold
- [ ] Create `apps/flexzone/` (copy simplest existing app, rename package to `@free-react-templates/flexzone`)
- [ ] Set up `public/CNAME` → `flexzone.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Register `injectUiSource()` in `vite.config.ts`
- [ ] Configure `src/index.css` with Tailwind + brand tokens (`--color-brand: #f73471`)
- [ ] Add Open Sans font via Google Fonts link in `index.html`

### Phase 2: Components (TDD — write tests first)
- [ ] `Navbar.tsx` — dark navbar with logo, nav links, mobile toggle
- [ ] `HeroSlider.tsx` — full-width carousel with 2 slides, CTAs
- [ ] `FeaturedClasses.tsx` — section heading + class card carousel (4 cards)
- [ ] `Schedule.tsx` — 2-column layout, 4 schedule items with image/text/time
- [ ] `Trainers.tsx` — section heading + trainer card carousel (3 cards)
- [ ] `Testimonials.tsx` — section heading + testimonial card row (3 cards)
- [ ] `Blog.tsx` — section heading + 2 blog post cards
- [ ] `Footer.tsx` — dark footer with 3 columns + Component Dock link

### Phase 3: Compose & verify
- [ ] Compose all sections in `App.tsx`
- [ ] Run `scripts/verify-app.sh flexzone` (typecheck + lint + coverage + build)
- [ ] Fix any issues, ensure 100% coverage

### Phase 4: Deploy
- [ ] Commit: `feat: add flexzone template (ColorLib fitnezz)`
- [ ] Push to main, verify Surge deploy
- [ ] Update TEMPLATES.md: `[~]` → `[x]` + surge URL
