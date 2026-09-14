# Workhive — Task Outline

## Source

- ColorLib Sharespace: https://colorlib.com/wp/template/sharespace/
- Preview: https://preview.colorlib.com/theme/sharespace/

## Tasks

### Phase 1: Scaffold

- [x] Create apps/workhive/ from fulcrum template
- [x] Rename package to @free-react-templates/workhive
- [x] Set homepage to https://workhive.free.componentdock.com
- [x] Create public/CNAME
- [x] Add injectUiSource() to vite.config.ts
- [x] Configure index.css with @theme tokens

### Phase 2: Components (TDD)

- [x] Navbar — logo, nav links, social icons
- [x] Hero — heading, subtitle, CTA, hero image, rating badge
- [x] About — split layout with image and text
- [x] Testimonials — peach bg, heading, quote
- [x] Spaces — 3 gallery cards with overlay
- [x] Features — 4 feature cards with check icons
- [x] Video — background section with play button
- [x] Brands — logo placeholders
- [x] Blog — 3 blog cards
- [x] Footer — subscribe, nav, social, Component Dock link

### Phase 3: Verification

- [ ] Run scripts/verify-app.sh workhive
- [ ] Run npm run spec:validate
- [ ] Open PR and merge

### Phase 4: Bookkeeping

- [ ] Mark TEMPLATES.md [x] + surge URL
- [ ] Set homepage in package.json
- [ ] Run npm run readme:status
- [ ] Commit and push
