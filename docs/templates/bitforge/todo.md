# Bitforge — Implementation Todo

## Phase 1: Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/sage or apps/bloom)
- [ ] Rename package to `@free-react-templates/bitforge`
- [ ] Update `public/CNAME` to `bitforge.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://bitforge.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + theme tokens

## Phase 2: Components (TDD order)

### Navbar.tsx

- [ ] Test: renders 5 nav links (Home, Convert, Features, Price, Blog)
- [ ] Test: fixed positioning on scroll, dark bg transition
- [ ] Implement: fixed header with logo + nav + mobile toggle
- [ ] Verify: 100% coverage

### Hero.tsx

- [ ] Test: renders price display, subtitle, CTA button
- [ ] Test: dark overlay rendering
- [ ] Implement: fullscreen section with bg image, overlay, content
- [ ] Verify: 100% coverage

### Converter.tsx

- [ ] Test: renders form inputs and submit button
- [ ] Test: negative margin overlap layout
- [ ] Implement: overlapping gradient card with form
- [ ] Verify: 100% coverage

### Services.tsx

- [ ] Test: renders 3 service cards with icon, title, desc
- [ ] Implement: 3-column card grid with lucide icons
- [ ] Verify: 100% coverage

### About.tsx

- [ ] Test: renders split layout, heading, description
- [ ] Test: dark background section
- [ ] Implement: dark section with carousel placeholder + text
- [ ] Verify: 100% coverage

### Features.tsx

- [ ] Test: renders 6 feature items in grid
- [ ] Test: hover color change on title
- [ ] Implement: 3x2 grid with linear icons, titles, descriptions
- [ ] Verify: 100% coverage

### Statistics.tsx

- [ ] Test: renders chart placeholder + heading + button
- [ ] Implement: split layout with image and text
- [ ] Verify: 100% coverage

### CallToAction.tsx

- [ ] Test: renders gradient bar, heading, button
- [ ] Implement: gradient section with white text + button
- [ ] Verify: 100% coverage

### Pricing.tsx

- [ ] Test: renders 3 pricing cards with name, price, CTA
- [ ] Test: hover gradient effect
- [ ] Implement: 3-column pricing cards
- [ ] Verify: 100% coverage

### Blog.tsx

- [ ] Test: renders 3 blog cards with image, title, author meta
- [ ] Test: hover title color change
- [ ] Implement: 3-column blog cards
- [ ] Verify: 100% coverage

### Footer.tsx

- [ ] Test: renders 3 columns, newsletter form, social icons
- [ ] Test: Component Dock link present
- [ ] Implement: dark footer with columns + newsletter + social
- [ ] Verify: 100% coverage

## Phase 3: Integration

- [ ] Compose all sections in App.tsx in correct order
- [ ] Add responsive breakpoints (mobile: single-column)
- [ ] Run full test suite — 100% coverage
- [ ] Typecheck: `npx tsc --noEmit`
- [ ] Lint: `npx oxlint src/`
- [ ] Build: `npm run build`

## Phase 4: Polish & Ship

- [ ] Verify no ColorLib references in any app file
- [ ] Footer links https://www.componentdock.com/ as "Component Dock"
- [ ] Run `scripts/verify-app.sh bitforge`
- [ ] Commit: `feat: add bitforge template (ColorLib bitcoin)`
- [ ] Open PR, merge, push
