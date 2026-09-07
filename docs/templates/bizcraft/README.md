# Bizcraft — Implementation Tasks & Design Notes

**Source:** ColorLib BizPro (`bizpro`)
**Preview:** https://preview.colorlib.com/theme/bizpro/
**New name:** `bizcraft`

## Section implementation order

1. **Navbar** — Sticky header, logo left, 10 nav links right. Hamburger on mobile. Use `<nav>` semantic element. Active link = brand color (#d73e4d).
2. **Hero / Banner** — Full-width section with dark/image background. Centered heading (48px Raleway), subtitle (16px), square CTA button (border: 2px solid #d73e4d, color: #fff, border-radius: 0).
3. **About Us** — Section title with red underline pseudo-element (25px × 3px). 3-column grid. Each card: round icon (50% radius, #d73e4d bg), h5 heading, paragraph, "more" link.
4. **Services** — Dark bg (#232a34). Section title white. 3-column grid of cards: icon + h6 heading + paragraph. Hover: card bg shifts to accent.
5. **Portfolio** — Filter menu tabs (active = #d73e4d bg, white text). Image gallery grid. Hover overlay with opacity transition + scale(1.15).
6. **Middle Banner** — Parallax-style section with dark overlay (rgba(0,0,0,0.8)). Centered h3 + CTA button.
7. **Team** — 3-column grid. Photo with hover opacity overlay revealing social icons. Name + role below.
8. **Skills** — Dark bg (#232a34). Left: image. Right: progress bars with #d73e4d fill. Labels in white, bold.
9. **Clients** — Testimonial slider. Avatar circle, quote text, client name. Auto-cycle with dots.
10. **Pricing** — Light gray bg (#f3f3f3). 3-column pricing cards. White bg, #dfdfdf border. Plan name, price, feature list, red CTA button.
11. **Blog** — 3-column grid of post cards. Image + date + title + excerpt + "read more" link (#d73e4d).
12. **Partners** — Logo carousel. Horizontal scrolling logos.
13. **Contact** — Two-column: left = info with red icons; right = form (name, email, subject, message, send button).
14. **Footer** — Dark bg (#1e1e1e). Centered logo, social icons, copyright with Component Dock link.

## Fidelity notes

- **Font:** Raleway only (no Roboto, no Poppins). Load via Google Fonts link in index.html.
- **Brand color:** #d73e4d — used for: nav active/hover, section title underlines, button backgrounds, skill bar fills, icon circles, form focus borders.
- **Section backgrounds alternate:** light (white) → dark (#232a34) → light → dark → light gray (#f3f3f3) → white → dark (#1e1e1e).
- **Buttons:** Square corners (border-radius: 0) on CTA and form buttons. Only icon circles and some decorative elements use border-radius: 50%.
- **Headings:** Always uppercase, font-weight 700, color #292929 (or white on dark sections).
- **Original uses Bootstrap grid + jQuery plugins (owl-carousel, revolution slider, WOW.js).** In React: use Tailwind grid, CSS animations, and a lightweight carousel library or custom implementation.
- **No parallax images copied.** Use picsum.photos/seed/bizcraft-N/W/H for placeholder images.
- **The original "page middle banner"** is a parallax image section between Portfolio and Team. Recreate as a CSS background-attachment: fixed section with dark overlay.

## Key differences from original

- No jQuery, no Bootstrap JS, no revolution slider dependency
- React components replace jQuery plugins
- Placeholder images instead of originals
- "Component Dock" link in footer replaces any external attribution
- No ColorLib references in app code
