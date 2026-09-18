# Airy — Implementation Tasks

## Phase 1: Scaffolding
- [ ] Copy simplest existing app (e.g. `apps/adept`) to `apps/airy`
- [ ] Update `package.json`: name → `@free-react-templates/airy`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Update `public/CNAME` → `airy.free.componentdock.com`
- [ ] Update `index.html` title → "Airy — Free React Template"
- [ ] Add Poppins font link in `index.html` `<head>`
- [ ] Run `npm install` at repo root to register workspace

## Phase 2: Theme & Layout
- [ ] Set up `src/index.css` with Tailwind theme:
  - `--color-primary: #78d5ef`
  - `--color-primary-hover: #34c0e7`
  - `--color-dark: #343a40`
  - `--color-body-text: #212529`
  - Font family: Poppins
- [ ] Write `src/App.tsx` composing all section components
- [ ] Write `src/main.tsx` entry point

## Phase 3: Section Components (TDD — tests first)
- [ ] `Navbar.tsx` — dark bg, brand, responsive hamburger
- [ ] `Hero.tsx` — split layout, text + image
- [ ] `About.tsx` — split layout, image + 4 service items
- [ ] `Services.tsx` — 4-column grid with icons
- [ ] `Counter.tsx` — parallax bg, 4 animated counters
- [ ] `Projects.tsx` — mixed 2-col grid, 6 overlay cards
- [ ] `Testimonials.tsx` — carousel, 5 items
- [ ] `Blog.tsx` — 3 case study cards
- [ ] `Pricing.tsx` — 4 pricing cards, light bg
- [ ] `Partners.tsx` — 5 placeholder logos
- [ ] `Footer.tsx` — dark bg, 4 columns, social icons, contact

## Phase 4: Verification
- [ ] All tests pass at 100% coverage
- [ ] Build succeeds
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
