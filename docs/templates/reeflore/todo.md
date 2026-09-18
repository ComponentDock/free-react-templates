# Reeflore — Implementation Todo & Design Notes

## Source

- ColorLib slug: `travel-wordpress-themes`
- ColorLib URL: https://colorlib.com/wp/template/travel-wordpress-themes/
- Preview URL: https://preview.colorlib.com/theme/travel-wordpress-themes/ (404)
- Screenshot: travel-wordpress-themes.jpg (sole reference — preview unreachable)

## Section order (top → bottom)

1. **Navbar** — transparent → fixed on scroll; brand (mountain icon + "Reeflore"),
   5 nav links (Home↓, Destinations↓, Regions↓, Shop, Blog), phone right
2. **Hero Carousel** — full-viewport slides; each: travel bg photo, large white
   headline, subtitle, white "Let's go now" CTA; left/right chevrons
3. **Popular Destinations** — centered heading; 4 cards: photo, location tag,
   title, short description, "Explore" link
4. **About / Features** — split: photo left; heading + paragraph + 3
   icon-feature blocks (Compass, Globe, Camera icons) right
5. **Gallery** — centered heading; 6 travel photos in responsive 3-col grid
6. **Testimonials** — dark bg; centered white heading; carousel: quote, name,
   role/location; prev/next controls
7. **Newsletter** — teal/sea-foam bg or background image; heading, paragraph,
   email input, "Subscribe" button
8. **Footer** — dark `#0f3b4a`; 4 cols (brand+socials / Quick Links /
   Destinations / Contact); bottom bar: "Made with ♥ by Component Dock"

## Fidelity notes

- **Hero is a carousel** (left/right arrows visible in screenshot) — implement
  as a React state-driven slider, not a static hero.
- **CTA button style**: white bg, dark text, rounded corners ~4px — matches
  the "Let's go now" button in the screenshot.
- **Navbar dropdowns**: Home, Destinations, Regions have dropdown arrows in the
  screenshot — implement as hover/click dropdown menus.
- **Phone number**: +03 86 600 888 33 shown in the top right — include as
  a decorative element (link to `tel:`).
- **Brand icon**: mountain/peak logo in the screenshot — use a `lucide-react`
  Mountain icon or inline SVG.
- **Preview 404**: all design tokens are derived from the screenshot only.
  Implementer should use the screenshot as the canonical visual reference.
  Token values (teal brand, dark ocean footer) are approximate from the
  ocean-dominant photo palette.

## Design tokens (screenshot-derived)

| Token | Value | Usage |
|-------|-------|-------|
| brand | #1a6a7a | Accents, active states, section highlights |
| deep | #0f3b4a | Dark backgrounds (footer, overlay panels) |
| seafoam | #e8f4f5 | Alternating section backgrounds |
| white | #fff | Hero text, CTA button bg, navbar over hero |
| ink | #1a1a2e | Body text on light backgrounds |
| font | Poppins | Headlines 700, body 400 |
| radius | 4px | CTA buttons, cards |
