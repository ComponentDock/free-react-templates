# Physique — Implementation Tasks

## Pre-implementation
- [x] Spec written (openspec/specs/template-physique/spec.md)
- [x] Design notes (docs/templates/physique/design-notes.md)
- [ ] Spec validated (`npm run spec:validate`)

## Implementation order

### Phase 1: Scaffold
- [ ] Create `apps/physique/` (copy simplest existing app, rename package to `@free-react-templates/physique`)
- [ ] Set up `public/CNAME` → `physique.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Register `injectUiSource()` in `vite.config.ts`
- [ ] Configure `src/index.css` with Tailwind + brand tokens (`--color-brand: #f6214b`)
- [ ] Add Poppins font via Google Fonts link in `index.html`

### Phase 2: Components (TDD — write tests first)
- [ ] `Header.tsx` — top bar + nav
- [ ] `HeroBanner.tsx` — fullscreen hero with overlay
- [ ] `TopCourses.tsx` — course carousel cards
- [ ] `CtaSplit.tsx` — two-panel CTA section
- [ ] `Features.tsx` — image + 3 feature items
- [ ] `BmiCalculator.tsx` — calculator form with red overlay
- [ ] `ImageGallery.tsx` — 3x2 image grid
- [ ] `Testimonials.tsx` — testimonial carousel
- [ ] `BrandLogos.tsx` — grayscale logo strip
- [ ] `CtaBanner.tsx` — final CTA with dark overlay
- [ ] `Footer.tsx` — 3-column footer + Component Dock link

### Phase 3: Compose & verify
- [ ] Compose all sections in `App.tsx`
- [ ] Run `scripts/verify-app.sh physique` (typecheck + lint + coverage + build)
- [ ] Fix any issues, ensure 100% coverage

### Phase 4: Deploy
- [ ] Commit: `feat: add physique template (ColorLib fitness)`
- [ ] Push to main, verify Surge deploy
- [ ] Update TEMPLATES.md: `[~]` → `[x]` + surge URL
