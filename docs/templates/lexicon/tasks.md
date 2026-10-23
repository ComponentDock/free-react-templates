# Lexicon — Template Prep Notes

**Source:** ColorLib Rolax (https://colorlib.com/wp/template/rolax/)
**Preview:** https://preview.colorlib.com/theme/rolax/
**New name:** lexicon

## Section order (from live preview)

1. **Navbar** — top info bar (maroon #2e0000) + sticky nav (dark #191514) + logo + 5 links + Book Now CTA
2. **Hero** — full-width image, warm brown gradient overlay, centered heading, booking search form (dates + guests + search btn)
3. **About** — 2-col: left image + right text (heading, paragraph, Learn More btn_01) + side image (desktop only)
4. **Rooms** — carousel of room cards: image + gradient overlay + name + occupancy + price
5. **Services** — centered heading + dotted link, split image-text card with View Project btn_01
6. **Video** — full-width bg image + play button (YouTube popup)
7. **Guests** — 3-col image cards with hover overlay (Free Drinks, Free Breakfast, Free Dinner)
8. **Testimonials** — carousel of quote cards with heading + quoted text + author name
9. **Footer** — 4-col: logo/social, Navigation, Contact, Newsletter signup; Component Dock link in copyright

## Fidelity notes

- **Fonts:** Baskervville (serif) for headings, Jost (sans) for body. Import via Google Fonts in index.html.
- **Brand color #E29C89:** used on buttons, submenu bg, scroll-to-top, btn_01 outline, submit-btn, boxed-btn.
- **Hero overlay:** warm brown gradient from #b86e5a to dark transparent — implement as a ::before pseudo-element or Tailwind gradient overlay.
- **Sticky header:** transitions from transparent to solid #191514 on scroll.
- **Buttons:** pill-shaped (border-radius: 35px) for primary .btn; square/0-radius for header-btn2 (Book Now); outlined for btn_01 (Learn More, View Project).
- **Room/Guest cards:** bottom gradient overlay (transparent to #292621) on hover reveals text.
- **Testimonial carousel:** simple slide with heading, paragraph, author name (dash prefix).
- **Footer newsletter:** email input + submit button inline.
- **Mobile:** hamburger menu (d-block d-lg-none), stacked columns, reduced section padding.

## Implementation tasks outline

- [ ] Scaffold apps/lexicon from simplest existing app
- [ ] Set up index.html with Google Fonts (Baskervville + Jost)
- [ ] Create index.css with @theme tokens (brand #E29C89, dark #191514, header-top #2e0000, etc.)
- [ ] Build Navbar component (top bar + sticky nav + mobile menu)
- [ ] Build Hero component (image + gradient overlay + heading + booking form)
- [ ] Build About component (2-col with images)
- [ ] Build Rooms carousel component
- [ ] Build Services / Seasonal specials component
- [ ] Build Video section component
- [ ] Build Guest services component (3-col cards)
- [ ] Build Testimonials carousel component
- [ ] Build Footer component (4-col + Component Dock link)
- [ ] Compose all in App.tsx
- [ ] Write tests (Vitest + RTL) — 100% coverage
- [ ] Verify with scripts/verify-app.sh lexicon
