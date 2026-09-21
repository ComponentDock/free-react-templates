# InnerGlow — Task Outline

## Prep (done)
- [x] Fetch and analyze ColorLib Ahana preview DOM
- [x] Extract design tokens from CSS
- [x] View and analyze screenshot
- [x] Write OpenSpec spec (openspec/specs/template-innerglow/spec.md)
- [x] Write design notes (docs/templates/innerglow/notes.md)
- [x] Write task outline (this file)

## Implementation tasks (for implementer)

### Phase 1: Scaffolding
- [ ] Create `apps/innerglow/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/innerglow`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.html` with Google Fonts (Open Sans, Playfair Display)
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens:
  - `--color-brand-coral: #f65d5d`
  - `--color-brand-peach: #fdb07d`
  - `--color-heading: #333333`
  - `--color-body: #666666`

### Phase 2: Layout & Navigation
- [ ] Implement Navbar component (top info bar + main nav + mobile hamburger)
- [ ] Implement mobile nav toggle

### Phase 3: Sections (in order)
- [ ] Hero — gradient background, headline, CTA, social sidebar
- [ ] About — section title, 2-column layout, feature items, CTA
- [ ] Classes — section title, carousel of class cards
- [ ] Trainers — section title, carousel of trainer profiles
- [ ] Testimonials — gradient overlay, carousel of quotes
- [ ] Events — section title, video thumbnail, event list items
- [ ] Pricing — section title, 4 pricing cards
- [ ] Sign-up — map embed, contact form with fields
- [ ] Gallery — image carousel with Instagram hover
- [ ] Footer — 4-column layout, social links, copyright, Component Dock link

### Phase 4: Tests
- [ ] Write tests for each section component (100% coverage)
- [ ] Run `npm run test:coverage` — verify 100% lines/functions/branches/statements

### Phase 5: Polish & Deploy
- [ ] Verify visual fidelity against screenshot
- [ ] Set up `public/CNAME` → `innerglow.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `scripts/verify-app.sh innerglow` (typecheck + lint + tests + build)
- [ ] `npm install` at root to register workspace in package-lock.json
- [ ] Commit: `feat: add innerglow template (recreation of ColorLib Ahana)`
- [ ] Push to feat branch, open PR, merge, deploy
