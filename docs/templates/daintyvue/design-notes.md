# Daintyvue — Design Notes & Tasks

## Source
- ColorLib slug: `simples`
- Preview: https://preview.colorlib.com/theme/simples/
- Original name: Simples

## New Name
`daintyvue` — evokes the feminine, delicate gradient aesthetic; completely different from "simples"

## Design Tokens (from live CSS)

```
Brand pink:      #fcd2ff
Gradient start:  #f6d0c5 (salmon/peach)
Gradient end:    #fbd2f6 (light pink)
Body text:       #777
Heading text:    #222
Light bg:        #f9f9ff
Footer bg:       #000
Font (all):      Poppins, sans-serif
Button radius:   20px (rounded)
Button bg:       #fcd2ff (pink), hover: transparent + border
Text shadow:     13px 15px 8px #f2c4d0 (banner h1)
Section padding: 120px (.section-gap)
```

## Section Order (must match 1:1)

1. **Navbar** — Transparent, absolute positioned, logo + nav links
2. **Hero** — Full-screen gradient bg, large heading with pink shadow, CTA
3. **Features** — 4-column grid: icons + uppercase titles
4. **Core Feature 1** — Light bg, image + text split layout, carousel nav
5. **Core Feature 2** — Light bg, reversed split layout
6. **Process** — Gradient bg, 6 steps in a row with icons + borders
7. **Service/Article** — Dark overlay, carousel of article cards
8. **Subscription** — Light bg, "Subscribe" heading, pill input + CTA
9. **Contact** — White bg, contact form
10. **Footer** — Black (#000), 5 columns + social icons

## Implementation Tasks

- [ ] Create `apps/daintyvue/` (copy simplest existing app, rename package)
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper
- [ ] Create `src/index.css` with Tailwind `@theme` tokens for pink + gradient
- [ ] Add Google Fonts link (Poppins) in `index.html`
- [ ] Create `src/components/Navbar.tsx` — transparent absolute nav
- [ ] Create `src/components/Hero.tsx` — gradient bg, heading, CTA
- [ ] Create `src/components/Features.tsx` — 4-column icon grid
- [ ] Create `src/components/CoreFeature.tsx` — reusable split layout (used twice)
- [ ] Create `src/components/Process.tsx` — gradient bg, 6-step grid
- [ ] Create `src/components/ServiceArticles.tsx` — dark overlay carousel
- [ ] Create `src/components/Subscription.tsx` — light bg, email input
- [ ] Create `src/components/Contact.tsx` — contact form
- [ ] Create `src/components/Footer.tsx` — black footer, 5 columns
- [ ] Create `src/App.tsx` — compose all sections in order
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Run `npm run verify:app daintyvue`
- [ ] Add `public/CNAME` with `daintyvue.free.componentdock.com`

## Fidelity Notes

- Banner is a full-screen gradient (#f6d0c5 → #fbd2f6) — NO background image
- The heading has a pink text-shadow: `13px 15px 8px #f2c4d0`
- Core Feature sections use a split layout (image + text) with carousel arrows
- Process section shares the same gradient as the banner
- Service area has a dark overlay (rgba(0,0,0,0.8)) over a bg image
- Subscription input is pill-shaped (border-radius: 25px)
- Footer is pure black (#000) with 5 equal columns
- All buttons use border-radius: 20px
- The primary accent color #fcd2ff is used everywhere: icons, links, borders, toggles
- Light sections use #f9f9ff background consistently
