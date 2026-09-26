# SnapVault — Design Notes & Implementation Outline

Source: ColorLib Fotograp (https://preview.colorlib.com/theme/fotograp/)

## Structure order

1. **Navbar** — fixed/sticky top, logo left, nav center, social icons right
2. **Hero** — full-viewport cover with overlay, heading, circular profile pic
3. **Specialties** — "My Specialties" heading, 4 half-image/half-text cards (2×2 grid)
4. **Testimonials** — parallax bg with dark overlay, carousel of 3 quote cards
5. **Gallery** — "My Photography" heading, 3-column photo grid (6 items)
6. **CTA Banner** — "Need a photographer?" + red rounded button
7. **Footer** — dark charcoal, 3 columns (About, Nav, Social), copyright

## Section-by-section fidelity notes

### Navbar
- Logo: "snapvault" text + primary-colored dot (like "fotograp.")
- Nav items: Home, Photography (dropdown with Nature/Portrait/Wedding), Services, About, Contact
- Social icons right-aligned on desktop; hamburger on mobile
- Use lucide-react for social icons (no icomoon)

### Hero
- Background: picsum.photos image (seeded for determinism)
- Overlay: `bg-black/40` (Tailwind)
- Heading: photographer intro text, white, centered
- Profile pic: circular, max-w-[200px], positioned below heading with negative margin-top overlap

### Specialties
- Section heading with black underline decoration (100px wide, 1px tall, centered)
- 4 cards in 2-column grid (stacks on mobile)
- Each card: 50% image (background-image) + 50% text, with box-shadow
- Card titles: h3, 20px, black
- Card text: placeholder description

### Testimonials
- Background: parallax image with `bg-fixed` (or `background-attachment: fixed`)
- Dark overlay before pseudo-element
- Owl Carousel equivalent: use a simple CSS-based carousel or custom component
- 3 testimonial cards with quote text + author name

### Gallery
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- 6 items, each with image + title overlay
- Hover: slight opacity/scale change

### CTA Banner
- Simple flex row: heading left, button right
- Button: red (#dc3545 or similar danger color), rounded, py-3 px-5

### Footer
- Background: #333333
- 3 columns: About (text), Navigation (links), Follow Me (social links)
- Footer headings: 20px, white
- Footer text: #737373
- Footer links: #999999, white on hover
- Bottom bar: copyright + Component Dock link

## Placeholder images

All images use `https://picsum.photos/seed/snapvault-<n>/<w>/<h>`:
- Hero bg: seed=snapvault-hero, 1920x1080
- Profile pic: seed=snapvault-profile, 400x400
- Specialty cards (4): seeds snapvault-spec-1 through snapvault-spec-4, 800x600
- Testimonial bg: seed=snapvault-testimonial, 1920x1080
- Gallery items (6): seeds snapvault-gallery-1 through snapvault-gallery-6, 800x600

## Component breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Logo, nav links with dropdown, social icons, mobile toggle |
| Hero | `Hero.tsx` | Background image, overlay, heading, profile pic |
| Specialties | `Specialties.tsx` | Section heading + 4 SpecialtyCard sub-components |
| Testimonials | `Testimonials.tsx` | Parallax bg, carousel of 3 testimonial cards |
| Gallery | `Gallery.tsx` | Section heading + 6 GalleryItem sub-components in grid |
| CtaBanner | `CtaBanner.tsx` | Flex row with heading + button |
| Footer | `Footer.tsx` | 3-column dark footer with Component Dock link |
| App | `App.tsx` | Composes all sections in order |
