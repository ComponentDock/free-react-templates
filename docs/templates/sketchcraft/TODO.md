# SketchCraft — Implementation TODO

Source: ColorLib Calvin (https://colorlib.com/wp/template/calvin/)
Preview: https://preview.colorlib.com/theme/calvin/

## Section build order

1. **Header** — sticky transparent navbar, responsive mobile menu
2. **Hero** — split layout (portrait left, headline right)
3. **About Info Bar** — horizontal contact strip below hero
4. **Services** — 2x2 grid of service cards
5. **Gallery** — 2x2 portfolio grid with hover overlays
6. **About Me + Skills** — two-column: text left, animated progress bars right
7. **Brand Logos** — auto-scrolling logo carousel
8. **Testimonials** — centered quote card carousel
9. **Blog** — horizontal scrolling blog card carousel
10. **Footer** — CTA area + bottom bar with nav

## Fidelity notes

- **Layout**: Hero is a split portrait + text layout. About info bar is a full-width strip directly under the hero slider area. Services and gallery are both 2-column grids.
- **Typography**: Body font DM Sans (weight 300-500), headings Roboto Condensed (weight 400/700). Headings are uppercase in some sections.
- **Colors**: Primary accent is warm orange #FF8553. Background is white. Light gray #f7f7f7 for alternating sections. Black text.
- **Buttons**: Pill-shaped with 25px border-radius. "Let's Talk" = solid orange gradient with hover slide. "Download CV" = white border on dark bg.
- **Progress bars**: Animated fill using a gradient (#FF8553 → #ec703f → #FF8553). Skills: UI Design (60%), UX (89%), Illustration (95%).
- **Gallery overlays**: Semi-transparent hover overlay with category label text.
- **Testimonials**: Carousel with dot navigation, centered text, author photo in circle.
- **Blog**: Horizontal scroll of cards with image + category badge + meta + title.
- **Footer**: Two-tier. Top: CTA area (logo + blurb + social + buttons). Bottom: copyright + nav links.
- **Footer attribution**: Must link to https://www.componentdock.com/ as "Component Dock".
- **No ColorLib references** in any app source code.

## Reuse candidates from packages/ui

- Button / ButtonLink (CTA buttons)
- Card (service cards, blog cards)
- cn() utility for class merging
- Check for existing carousel or slider component
