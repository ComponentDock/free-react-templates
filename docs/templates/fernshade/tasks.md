# Fernshade — Design Notes & Task Outline

Source: ColorLib Bootstrap Footer 17 (`bootstrap-footer-17`)
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-17/

## Structure order (section-by-section)

### 1. Hero section
- White background, centered heading text
- Padding: 12em vertical (ftco-section)
- Purpose: visual spacer above the footer; displays template title

### 2. Footer
- Background: #121212 (very dark charcoal)
- Padding: 7em vertical, container-width horizontal
- Content (all centered):
  - Brand name (h2, white, bold, Poppins 30px)
  - Navigation menu (6 links, uppercase, 1px letter-spacing, rgba white 0.6)
  - Social icons row (3 icons: Twitter, Facebook, Instagram)
    - Each in 40px circle, #a3de83 border, transparent bg
    - Hover: fill circle green, icon white
  - Copyright line (muted white, dynamic year)

## Fidelity notes

- Font: Poppins (Google Fonts, weights 300-900). Load via `<link>` in index.html.
- Colors: brand accent #a3de83 (lime green), bg #121212, white headings, muted white text
- Icons: lucide-react (Twitter → X, Facebook, Instagram)
- No copied assets — use picsum.photos for any placeholder images
- Component Dock footer link replaces original Colorlib attribution

## Tasks

- [ ] Create app scaffold: `apps/fernshade/` (copy simplest existing footer app)
- [ ] Set up index.css with Tailwind @theme tokens: `--color-accent: #a3de83`, `--color-bg-dark: #121212`
- [ ] Build Hero.tsx: white section with centered heading
- [ ] Build Footer.tsx: dark bg, brand, nav menu, social icons, copyright
- [ ] Use lucide-react icons for social (Twitter/X, Facebook, Instagram)
- [ ] Ensure nav links are uppercase, letter-spaced, horizontal flex
- [ ] Social icons: 40px circle, #a3de83 border, hover fill green
- [ ] Copyright: dynamic year, muted text
- [ ] Add Component Dock footer link
- [ ] Write App.tsx composing Hero + Footer
- [ ] Write tests: 100% coverage (Vitest + Testing Library)
- [ ] Verify no ColorLib references in app code
- [ ] Set up public/CNAME: `fernshade.free.componentdock.com`
- [ ] Set up package.json homepage
- [ ] Run `npm install` at repo root to register workspace
- [ ] Run per-app gate: typecheck + lint + tests + build
