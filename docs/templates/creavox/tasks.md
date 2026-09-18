# Creavox — Implementation Tasks

## Phase 1: Setup
- [ ] Create `apps/creavox/` from an existing simple app (e.g. `apps/abjure/`)
- [ ] Rename package to `@free-react-templates/creavox`
- [ ] Update `public/CNAME` to `creavox.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Phase 2: Component Scaffold
- [ ] Create `src/App.tsx` composing all section components
- [ ] Create `src/components/Navbar.tsx`
- [ ] Create `src/components/Hero.tsx`
- [ ] Create `src/components/Services.tsx`
- [ ] Create `src/components/Portfolio.tsx`
- [ ] Create `src/components/About.tsx`
- [ ] Create `src/components/News.tsx`
- [ ] Create `src/components/Video.tsx`
- [ ] Create `src/components/Skills.tsx`
- [ ] Create `src/components/Contact.tsx`
- [ ] Create `src/components/Footer.tsx`

## Phase 3: Design Tokens
- [ ] Set up `@theme` in `src/index.css` with:
  - `--color-primary: #221C5A` (deep purple)
  - `--color-primary-dark: #26276D`
  - `--color-green: #32DB8A`
  - `--color-green-dark: #55B286`
  - `--color-rose: #e54b76`
  - `--color-rose-light: #ee87a4`
  - `--color-gold: #FFBA42`
  - `--color-gold-dark: #E3A536`
  - `--color-blue: #4C9EE7`
  - `--color-body: #23214c`
  - `--color-gray: #727190`
  - `--color-muted: #9a9a9a`
- [ ] Import Montserrat, PT Serif, Roboto via Google Fonts in `index.html`

## Phase 4: Section Implementation (TDD)
- [ ] Navbar: fixed position, 8 anchor links, mobile hamburger
- [ ] Hero: centered layout, purple bg with image, heading + subtitle
- [ ] Services: numbered badge, 2x2 grid cards with icon + title + desc
- [ ] Portfolio: masonry grid, hover overlay, load more button
- [ ] About: 2-column text, timeline with colored dates, team cards
- [ ] News: blog list with sequence numbers, testimonial carousel
- [ ] Video: feature with video thumbnail + play button, icon carousel
- [ ] Skills: 4 animated progress bars with different colors
- [ ] Contact: form with 4 fields + submit, Google Map iframe
- [ ] Footer: copyright + Component Dock link + social icons

## Phase 5: Verification
- [ ] Run `scripts/verify-app.sh creavox` — typecheck + lint + knip +
      fallow + vitest (100% coverage) + build
- [ ] Visual check: section order matches preview, numbered badges alternate
- [ ] All images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
