# Lightwell — Design Notes

**Source:** ColorLib Cellon (https://preview.colorlib.com/theme/cellon/)
**Category:** Consulting / Business
**Brand color:** #6cbb23 (green)

## Section Order

1. Navbar
2. Banner (Hero)
3. Video CTA
4. About
5. Features (7 cards)
6. FAQ + Stats
7. Contact Form
8. Footer (4 columns)

## Structural Notes

### Navbar

- Fixed/absolute positioned header, logo left, nav right
- Hamburger icon on mobile; nav slides in with green background

### Banner (Hero)

- Full-height split layout: illustration left (col-lg-6), text right
- Lightweight headline (font-weight: 100), "sp-1" is bold, "sp-2" is green
- CTA: green pill button with right arrow icon

### Video CTA

- Background image with green semi-transparent overlay (85% opacity)
- Centered play button, text right-aligned below
- Full-width section

### About

- Split: text left (col-lg-6), illustration right (col-lg-6)
- Heading is lightweight (weight 100), "About" keyword is bold
- CTA: green-bordered pill button with arrow

### Features

- 7 cards in 3-column responsive grid (col-lg-4 col-sm-6)
- Green overlay background covering the whole section
- Each card: white background, large icon in light green (#f0f8e9) box, heading (uppercase, letter-spacing), paragraph
- Icon hover: background transitions to green

### FAQ + Stats

- Left column (col-lg-3): 4 counter stats, right-aligned, large green numbers (weight 100)
- Right column (col-lg-9): 3 FAQ items with uppercase question headings

### Contact

- Green overlay background, full-width
- Centered heading "Send Us Message"
- Form: 2-column name/email, full-width message textarea, submit button right-aligned
- Inputs: transparent background, green borders (#a6d477), white text

### Footer

- White background, 4 equal columns
- Each column: heading + list of links
- Bottom bar: copyright text + social icons (FA icons)
- Social icon boxes: light background, hover turns green with white icon

## Design Tokens Summary

```
--brand: #6cbb23
--brand-light: #f0f8e9
--brand-medium: #a6d477
--body-bg: #f6f6fc
--card-bg: #ffffff
--text: #777777
--heading: #222222
--overlay-green: rgba(108,187,35,0.85)
--font: Poppins, sans-serif
--radius-pill: 9999px (20px in original)
```

## Fidelity Notes

- The original uses Bootstrap grid — recreate with Tailwind grid/flex equivalents
- Replace Linearicons (`lnr-*`) with lucide-react icons
- Replace Font Awesome social icons with lucide-react equivalents
- Replace placeholder images with `https://picsum.photos/seed/lightwell-<n>/<w>/<h>`
- The `oz-body-wrap` shadow wrapper can be recreated as a max-w-screen-xl container with shadow-2xl
- Counter animation (jQuery CounterUp) → use a simple React counter hook or static numbers
- FAQ accordion → use React state to toggle answer visibility
- Contact form is static HTML in original — use a non-functional React form with validation feedback
