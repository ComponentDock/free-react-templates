# Vignette — Implementation Todo

## Phase 1: Scaffold
- [ ] Create `apps/vignette/` from a simple existing app (copy + rename)
- [ ] Update package.json: name → `@free-react-templates/vignette`
- [ ] Create `public/CNAME` with `vignette.free.componentdock.com`
- [ ] Update homepage in package.json
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify lockfile: `grep -c "free-react-templates/vignette" package-lock.json`

## Phase 2: Theme tokens
- [ ] Set up `src/index.css` with Tailwind @theme tokens:
  - brand: #F9CE00
  - brand-hover: #ffd614
  - footer-bg: #b7c2c2
  - heading-font: "Playfair Display"
  - body-font: "Karla"
- [ ] Add Google Fonts link in `index.html` (Karla + Playfair Display)
- [ ] Configure `vite.config.ts` with `injectUiSource()`

## Phase 3: Components (TDD — tests first)
- [ ] `Navbar.tsx` — logo + nav links + hamburger toggle (mobile)
- [ ] `HeroCarousel.tsx` — 3-slide carousel with split layout
- [ ] `HeroSlide.tsx` — single slide: image + text panel
- [ ] `Gallery.tsx` — responsive portfolio image grid
- [ ] `About.tsx` — split layout with image + description
- [ ] `Contact.tsx` — contact form with validation
- [ ] `Footer.tsx` — Component Dock branding
- [ ] `App.tsx` — compose all sections

## Phase 4: Verify
- [ ] `npm run test:coverage` → 100% lines/functions/branches/statements
- [ ] `npm run typecheck` → passes
- [ ] `npm run lint` → passes
- [ ] `npm run build` → succeeds
- [ ] Visual check: responsive layout, brand colors, typography
- [ ] No ColorLib references in `apps/vignette/`
- [ ] Footer links to Component Dock
- [ ] `scripts/verify-app.sh vignette` passes

## Phase 5: Ship
- [ ] Commit: `feat: add Vignette (ColorLib Bato) photography portfolio`
- [ ] Open PR, merge immediately
- [ ] Update TEMPLATES.md: `[~]` → `[x]` for Bato
- [ ] `npm run readme:status`
