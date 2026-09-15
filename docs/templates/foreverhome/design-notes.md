# ForeverHome — Design Notes & Task Outline

## Source
- ColorLib "Adopted": https://colorlib.com/wp/template/adopted/
- Preview DOM: https://preview.colorlib.com/theme/adopted/
- Fetched: 2026-09-15, preview was reachable

## Section Order (from preview DOM, top to bottom)

1. **Top Bar** — social icons (left), Sponsor button + Login CTA (right), brand `#bc5148` background
2. **Navbar** — white bg, brand "ForeverHome", 5 nav items with dropdown on Adoption
3. **Hero Slider** — full-bleed image carousel (2 slides), child name in Sacramento cursive, headline, paragraph, CTA button (`btn btn-primary`)
4. **Steps to Adopt** — white section, SVG illustration (left, 5 cols), accordion with 7 expandable steps (right, 6 cols); first item expanded by default
5. **Waiting Children** — light gray bg, 5 child cards in grid (photo left, name/age/description right); section heading uppercase
6. **Featured Stories** — white section with border-top, 3 story cards (date + headline); cards have media-custom styling
7. **Newsletter Subscribe** — light gray bg, 2-col layout (text left, form right); name + email inputs + subscribe button
8. **Footer** — brand `#bc5148` bg, 4 columns (About, Contact & Address, Quick Links, Social), copyright line

## Design Token Notes (for Tailwind `@theme`)

```css
/* In src/index.css @theme block */
--color-brand: #bc5148;
--color-brand-hover: #ca746d;
--color-gold: #f4b214;
--color-footer-link: #ffc107;
```

- Body font: `font-family: 'Open Sans', sans-serif`
- Cursive accent: `font-family: 'Sacramento', cursive` (child names in slider)
- Buttons: no border-radius (square), 2px border, hover shadow
- Footer: brand bg, white text at 50% opacity, gold links

## Fidelity Notes

- The original uses Bootstrap 4 grid classes — replicate with Tailwind equivalents (`col-md-5` → `md:w-5/12` etc.)
- Accordion is Bootstrap collapse — use React state for open/close
- Hero slider is Owl Carousel — use a React carousel (or CSS-only with state)
- SVG illustration in Steps section is an inline SVG of two hands holding a heart — can use a Lucide icon or keep as inline SVG
- Original has Font Awesome icons — use `lucide-react` instead
- Footer copyright must replace Colorlib attribution with "Made with ❤ by Component Dock" linking to https://www.componentdock.com/

## Tasks

- [ ] Set up `apps/foreverhome/` workspace (copy simplest existing app)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Create `src/index.css` with `@theme` brand tokens + font imports
- [ ] Create `src/components/TopBar.tsx`
- [ ] Create `src/components/Navbar.tsx`
- [ ] Create `src/components/HeroSlider.tsx` (carousel with 2 slides)
- [ ] Create `src/components/StepsToAdopt.tsx` (accordion, 7 items)
- [ ] Create `src/components/WaitingChildren.tsx` (5 cards grid)
- [ ] Create `src/components/FeaturedStories.tsx` (3 story cards)
- [ ] Create `src/components/Newsletter.tsx` (form with name + email)
- [ ] Create `src/components/Footer.tsx` (4 columns, componentdock link)
- [ ] Create `src/App.tsx` composing all sections
- [ ] Write tests for each component (TDD)
- [ ] Update `public/CNAME` → `foreverhome.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root for lockfile
- [ ] Verify: `scripts/verify-app.sh foreverhome`
