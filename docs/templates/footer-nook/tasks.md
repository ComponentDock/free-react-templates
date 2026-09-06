# FooterNook — Implementation Tasks

## Pre-Implementation

- [ ] Create `apps/footer-nook/` directory
- [ ] Copy simplest existing footer app as starter
- [ ] Rename package to `@free-react-templates/footer-nook`
- [ ] Update `vite.config.ts` with `injectUiSource()` helper
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `grep -c "free-react-templates/footer-nook" package-lock.json` returns 1

## Component Build Order

### 1. Theme Setup
- [ ] Add Poppins font link to `index.html`
- [ ] Define theme tokens in `src/index.css` (`@theme` block):
  - `--color-brand: #12cc94`
  - `--color-footer-bg: #f1f6f5`
  - `--color-submit-blue: #2f89fc`
  - `--color-text-muted: rgba(0, 0, 0, 0.3)`
  - `--color-social-bg: rgba(0, 0, 0, 0.05)`

### 2. Hero Section
- [ ] `HeroSection.tsx` — centered heading, `py-48` (12em) padding
- [ ] Test: renders heading text, has correct padding

### 3. Footer Container
- [ ] `Footer.tsx` — wrapper with `bg-footer-bg` background, `py-28` (7em) padding
- [ ] Two-column grid layout (9/12 + 3/12)
- [ ] Test: renders two columns, correct background

### 4. Footer Left — About Column
- [ ] `AboutColumn.tsx` — "About us" heading, paragraph, 3 social icons
- [ ] Social icons: 40×40px circles, `bg-social-bg`, centered icons
- [ ] Test: renders heading, paragraph, 3 icon links

### 5. Footer Left — Link Columns (reusable)
- [ ] `LinkColumn.tsx` — heading + `ul` of links
- [ ] Links: `text-text-muted`, `py-1 d-block` spacing
- [ ] Test: renders heading, correct number of links

### 6. Footer Left — Copyright
- [ ] `Copyright.tsx` — dynamic year, muted text, Component Dock link
- [ ] Test: renders copyright text with current year

### 7. Footer Right — Sidebar
- [ ] `FooterRight.tsx` — green sidebar (`bg-brand`)
- [ ] `::after` pseudo-element for infinite right extension
- [ ] "Contact us" heading in white
- [ ] Test: renders green background, white heading

### 8. Contact Form
- [ ] `ContactForm.tsx` — Name, Email, Subject, Message, Send button
- [ ] Inputs: `h-[50px] rounded-[5px] border-none bg-white text-text-muted`
- [ ] Submit button: `bg-submit-blue text-white`
- [ ] Test: renders all 5 form elements, button has correct styles

### 9. Assembly
- [ ] `App.tsx` — compose HeroSection + Footer
- [ ] Test: full page renders all sections

## Verification

- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run typecheck` — no errors
- [ ] `npm run lint` — no warnings
- [ ] `npm run build` — succeeds
- [ ] Visual check: matches ColorLib screenshot layout and colors
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `footer-nook.free.componentdock.com`
- [ ] `package.json` homepage is `https://footer-nook.free.componentdock.com`
