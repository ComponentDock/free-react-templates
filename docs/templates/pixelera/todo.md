# Pixelera — Implementation Todo

## Phase 1: Project scaffolding
- [ ] Copy simplest existing app as template base (e.g. `apps/amber` or similar minimal app)
- [ ] Rename package to `@free-react-templates/pixelera`
- [ ] Update `package.json` name, `vite.config.ts`, `index.html` title
- [ ] Create `public/CNAME` with `pixelera.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace in `package-lock.json`

## Phase 2: Theme tokens & global styles
- [ ] Add Google Fonts link (Roboto + Montserrat) to `index.html`
- [ ] Define CSS custom properties / Tailwind `@theme` tokens:
  - `--color-brand-primary: #221C5A`
  - `--color-brand-secondary: #32DB8A`
  - `--color-brand-accent: #E74C78`
  - `--color-brand-warm: #FFBA42`
  - `--color-brand-cool: #4C9EE7`
  - `--color-text-primary: #23214c`
  - `--color-text-secondary: #727190`
  - `--color-text-footer: #5b5881`

## Phase 3: Shared components
- [ ] `SectionTitleBox.tsx` — reusable green box with number + vertical title, side prop (left/right)

## Phase 4: Section components (in page order)
- [ ] `Navbar.tsx` — Fixed top nav, deep purple bg, 8 links, smooth scroll, mobile hamburger
- [ ] `Hero.tsx` — Centered logo + headline + subtitle
- [ ] `Services.tsx` — Section title box (left) + image slider + 8 service items
- [ ] `Portfolio.tsx` — Section title box (right) + masonry grid + hover overlays + load more
- [ ] `About.tsx` — Section title box (left) + 2-col text + timeline + image carousel + team slider
- [ ] `News.tsx` — Section title box (right) + 4 blog items with numbered badges
- [ ] `Video.tsx` — Section title box (left) + 2-col text + video popup + icon carousel
- [ ] `Skills.tsx` — Section title box (right) + 4 progress bars
- [ ] `Contact.tsx` — Section title box (left) + 2-col (text + form) + map
- [ ] `Footer.tsx` — Deep purple bg, copyright, social icons, Component Dock link

## Phase 5: App composition
- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point

## Phase 6: Testing (TDD)
- [ ] Write tests for each component before/alongside implementation
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Test responsive behavior, form validation, smooth scroll

## Phase 7: Verification
- [ ] Run `scripts/verify-app.sh pixelera` (typecheck + lint + tests + build)
- [ ] Visual check: section order, title box alternation, colors match tokens
- [ ] Responsive check: mobile hamburger, stacked layouts
- [ ] Footer has Component Dock link
- [ ] No Colorlib references in app code
