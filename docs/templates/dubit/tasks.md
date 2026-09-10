# Dubit — Implementation Tasks & Design Notes

**Source:** ColorLib Bitcoin (`https://preview.colorlib.com/theme/bitcoin/`)
**New name:** Dubit
**Package:** `@free-react-templates/dubit`
**Deploy:** `dubit.free.componentdock.com`

## Section order (top to bottom)

1. **Navbar** — Fixed, transparent over hero, logo + nav links (Home, Convert, Feature, Price, Blog, Pages dropdown)
2. **Hero/Banner** — Fullscreen dark bg image + navy overlay, centered white text ("Currently Purchase Rate", price headline, description, "Buy Bitcoin" CTA)
3. **Currency Converter** — Overlapping card (gradient bg), Bitcoin logo, 4 inputs, CTA button
4. **Simple Services** — 3-column horizontal: icon + title per card
5. **About Us** — Dark bg (#222), image carousel left, heading right
6. **Service Features** — 2×3 grid: icon + title cards
7. **Stat Area** — Light bg (#f9f9ff), heading + text + CTA
8. **CTA Banner** — Gradient bg, centered white text + CTA button
9. **Pricing** — 3 cards side by side (Ripple, Ethereum, Bitcoin)
10. **Blog** — 3-column cards with images + excerpts
11. **Footer** — Very dark navy (#04091e), newsletter form, social icons, copyright

## Design token notes

- Brand orange: `#f78f3d`
- Gradient: `linear-gradient(0deg, #f3c400 0%, #f88845 100%)`
- Hero overlay: `rgba(4,9,30,0.85)`
- Dark sections: `#222` (about), `#04091e` (footer)
- Light bg: `#f9f9ff` (stat area, inputs)
- Footer form bg: `#1e2235`
- Font: Poppins (Google Fonts)
- Buttons: pill (border-radius 25px), except hero button is squared (3px)
- Button text: uppercase, white, font-weight 500

## Fidelity notes

- The converter card MUST overlap the hero (negative margin-top: -105px, z-index: 2).
- The about section uses a carousel — implement as a simple image slider or static image.
- The pricing cards have a gradient bottom half — use a div with the gradient bg.
- The footer newsletter form uses rounded inputs (border-radius: 20px, dark bg).
- The nav becomes solid dark on scroll (scroll listener toggling class).
- Use placeholder images from picsum.photos for hero bg, about images, and blog images.
- Replace ColorLib attribution in footer with Component Dock link.

## Component structure

```
src/
  main.tsx
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    CurrencyConverter.tsx
    SimpleServices.tsx
    AboutUs.tsx
    ServiceFeatures.tsx
    StatArea.tsx
    CtaBanner.tsx
    Pricing.tsx
    Blog.tsx
    Footer.tsx
  index.css
  test/setup.ts
```

## Implementation order (suggested)

1. Scaffold from simplest existing app (copy + rename)
2. Write tests for Navbar (fixed position, scroll behavior)
3. Implement Navbar
4. Write tests for Hero (bg image, overlay, headline, CTA)
5. Implement Hero
6. Write tests for CurrencyConverter (overlap, inputs, CTA)
7. Implement CurrencyConverter
8. Write tests for SimpleServices (3 items)
9. Implement SimpleServices
10. Write tests for AboutUs (dark bg, carousel area)
11. Implement AboutUs
12. Write tests for ServiceFeatures (6 items)
13. Implement ServiceFeatures
14. Write tests for StatArea (heading, text, CTA)
15. Implement StatArea
16. Write tests for CtaBanner (gradient, text, CTA)
17. Implement CtaBanner
18. Write tests for Pricing (3 cards)
19. Implement Pricing
20. Write tests for Blog (3 cards)
21. Implement Blog
22. Write tests for Footer (newsletter, social, copyright)
23. Implement Footer
24. Wire up App.tsx, configure Tailwind theme tokens
25. Run full verification: typecheck + lint + test:coverage + build
