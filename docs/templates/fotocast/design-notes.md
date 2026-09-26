# Fotocast — Implementation Notes

## Source
- ColorLib "Fotograp": https://colorlib.com/wp/template/fotograp/
- Preview: https://preview.colorlib.com/theme/fotograp/
- New name: fotocast

## Section Order (top → bottom)

1. **Navbar** — White bg, logo "fotocast." (accent period), desktop nav + social icons, mobile hamburger
2. **Hero Cover** — Full-width bg image, dark overlay (40%), centered heading, min-height 600px
3. **Profile Picture** — Small centered photo below hero
4. **My Specialties** — 2×2 grid, each item: image + text side-by-side (Nature, Portrait, Wedding, Food & Drink)
5. **Testimonials** — Parallax bg image, owl carousel, 3 cards (photo + quote + name)
6. **My Photography** — 3-col grid, 6 album cards (image + gradient overlay + title + count)
7. **CTA** — Flex row: "Need a photographer?" left, red "Contact Me" button right
8. **Footer** — Dark bg (#333), 3 cols: About, Navigations (2 sub-cols), Social icons; copyright line

## Fidelity Notes

### Navbar
- Logo is text "fotocast." with the period colored in accent (#7971ea)
- Desktop nav: uppercase, 12px, letter-spacing 0.1em, black text, purple hover
- Photography item has dropdown with nested submenu support
- Social icons: Facebook, Twitter, Instagram, YouTube (use lucide-react equivalents)
- Mobile: hamburger icon → offcanvas menu slides from right (300px, white bg)

### Hero
- Background image with rgba(0,0,0,0.4) overlay
- Centered text, large heading
- AOS fade-up animation on the content

### Profile Picture
- Small image centered below hero
- AOS fade with 200ms delay

### Specialties
- Section heading with 100px underline (use border-bottom or pseudo-element)
- 2×2 grid on desktop, single column on mobile
- Each item: half-width image (background-image) + half-width text
- Staggered AOS fade-up animations

### Testimonials
- Full-width section with parallax background image
- Owl Carousel (use a React carousel alternative like Swiper or Embla)
- 3 testimonial cards: image, quote, author name

### Gallery
- 3-column grid (col-md-6 col-lg-4)
- Each card: image with gradient overlay on hover, title, category text
- 6 items total, staggered AOS animations

### CTA
- Simple flex row with text left, button right
- Button: red (.btn-danger), square corners (border-radius: 0), large padding

### Footer
- Dark background (#333333)
- 3 columns: About text, Navigation links (2 sub-columns), Social icons
- Copyright line centered at bottom
- Replace "Colorlib" attribution with "Component Dock"

## Color Palette Summary

| Role | Hex |
|------|-----|
| Accent/primary | #7971ea |
| Body text | #4d4d4d |
| Headings | #000000 |
| Page bg | #ffffff |
| Footer bg | #333333 |
| Footer text | #737373 |
| Footer links | #999999 |
| CTA button | Bootstrap danger (red) |

## Dependencies to Consider

- AOS library (Animate On Scroll) — or implement with Intersection Observer
- Carousel for testimonials — Swiper or Embla Carousel (avoid jQuery plugins)
- Icomoon/Flaticon icons — replace with lucide-react
- Stellar parallax — implement with CSS or a lightweight JS solution
- LightGallery — not needed for single-page version (omit)
- Bootstrap grid — replace with Tailwind grid/flex utilities
