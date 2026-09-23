# Sworn — Design Notes & Task Outline

Recreation of ColorLib "Notary" (https://colorlib.com/wp/template/notary/).
Preview: https://preview.colorlib.com/theme/notary/

## Section Order (must match source 1:1)

1. **Navbar** — absolute, `#fee2b3` warm gold bg, black logo, nav links
   with Practice Areas dropdown (6 sub-items)
2. **Hero** — background image + dark overlay, white Playfair Display
   heading "Notary Public & Legal Solutions", description, booking form
   card (Name, Email, Date, Submit) on right
3. **Practice Areas** — `bg-light` (#f8f9fa), heading + subtitle, 3×2 grid
   of 6 cards with lucide icons: Bankruptcy, Business, Civil Rights,
   Criminal, Immigration, Family Law
4. **About** — white bg, 3-column: left image, center heading + description
   + checklist (3 items, gold checkmarks) + CTA button, right accordion
   FAQ (3 items, first open)
5. **Testimonials** — `bg-light`, "Happy Customers" heading, 3 cards with
   circular author photos, name/role, quote
6. **Footer** — dark bg image overlay, logo + social icons (4), 4 link
   columns (Quick Links, Resources, Support, Company), copyright with
   Component Dock link

## Fidelity Notes

- Brand color `#fee2b3` (warm gold/tan) is used for: navbar bg, form focus
  border, checklist checkmarks, dropdown top border, active nav link color
- Heading font: Playfair Display (serif) — all h1-h5
- Body font: Roboto (sans-serif) — body text, form controls, nav
- Hero overlay: dark semi-transparent `:before` pseudo on `.hero.overlay`
- Accordion: Bootstrap collapse pattern, `border-radius: 4px`, first item
  expanded by default
- Testimonials: circular author photos (border-radius 50%)
- Footer: background-image with dark overlay, white text, rgba(255,255,255,0.5) links
- Flaticon icons → replace with lucide-react (no font files shipped)
- No assets copied: use picsum.photos for images, Google Fonts for fonts

## Component Breakdown

```
apps/sworn/src/
  App.tsx            — composes all sections in order
  components/
    Navbar.tsx       — sticky/absolute navbar with dropdown
    Hero.tsx         — hero with overlay + booking form
    PracticeAreas.tsx — 3×2 grid of practice area cards
    About.tsx        — 3-col: image + checklist + accordion
    Testimonials.tsx — 3 testimonial cards
    Footer.tsx       — dark footer with background image
  index.css          — Tailwind entry + @theme tokens
  main.tsx           — entry point (excluded from coverage)
```

## Tasks

- [ ] Scaffold `apps/sworn/` (copy simplest existing app, rename package)
- [ ] Install deps, verify `npm install` at root
- [ ] Write tests for Navbar (desktop links, mobile menu, dropdown)
- [ ] Write tests for Hero (heading, form fields, date picker, submit)
- [ ] Write tests for PracticeAreas (6 cards, grid layout, icons)
- [ ] Write tests for About (image, checklist, accordion expand/collapse)
- [ ] Write tests for Testimonials (3 cards, author info, quotes)
- [ ] Write tests for Footer (social icons, link columns, Component Dock)
- [ ] Write tests for App (section order, accessibility)
- [ ] Implement components (TDD green)
- [ ] Run `npm run verify:app -- sworn`
- [ ] Visual review vs preview
- [ ] Responsive check at 768px
- [ ] Remove any ColorLib references from app code
