# ApertureX — Implementation Notes

## Source
- ColorLib "Elit": https://colorlib.com/wp/template/elit/
- Preview: https://preview.colorlib.com/theme/elit/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- New name: aperturex

## Section Order (top → bottom)

1. **Sidebar** — Fixed left (250px, black bg), logo "ApertureX", nav links (Home, Photos, Biography, Blog, Contact), social icons; collapses to top bar (70px) on mobile with hamburger
2. **Hero** — Full-viewport bg image, dark overlay (40%), centered "Welcome" heading, subtext, "Contact Me" pill button
3. **Photo Gallery** — Full-width 3-col grid, 18 photos, hover overlay + search icon, lightbox
4. **Testimonials** — Centered section, carousel with circular portraits, quotes, dots nav
5. **Biography** — Dark bg (#1a1a1a), magenta accent line, heading, portrait, bio text, 2-col checklist
6. **Blog** — Dark bg, 4 entries (image + text), numbered pagination
7. **Contact** — Dark bg, form (first/last name, email, subject, message), pill submit button
8. **Footer** — Centered copyright with Component Dock link

## Fidelity Notes

### Sidebar (Most distinctive feature)
- FIXED position, left side, 250px wide, full viewport height, black bg (#000)
- Logo: white, uppercase, bold, 20px at top
- Nav links: white, uppercase, 0.8rem, padding 4px 0, active/hover → #df0e62
- Social icons: inline-block, white, hover → #df0e62, padding 10px
- On mobile (< 992px): collapses to fixed top bar (70px), nav hidden, hamburger icon visible
- Hamburger opens offcanvas menu sliding from right (300px, white bg)
- Close button: icon-close2, 30px font size
- Mobile menu body: scrollable, padding 0 20px 20px

### Hero
- Full viewport height (100vh, min 500px)
- Background image with cover, parallax (stellar) effect
- Dark overlay: rgba(0,0,0,0.4) via ::before pseudo-element
- Heading: "Welcome", Oswald, uppercase, white, 4rem (desktop) / 2.5rem (mobile)
- Subtext: white, lead paragraph
- "Contact Me" button: btn-primary, pill shape (border-radius: 30px), padding 15px 30px, uppercase, bold, letter-spacing 0.1em
- Content centered (justify-content-center, align-items-center)
- AOS fade-up animation

### Photo Gallery
- Full-width container (container-fluid, no padding on desktop, 15px on mobile)
- 3-column responsive grid: col-6 col-md-6 col-lg-4
- 18 photo items (original uses img_1 through img_10, repeated)
- Each photo: block link, object-fit cover, height 300px (200px on mobile), margin-bottom 5px
- Hover: dark overlay rgba(0,0,0,0.6) fades in + centered search icon (white, 20px)
- Overlay/overlay-content positioned absolute, z-index management
- AOS fade-up with staggered delays (0, 100, 200ms per column)
- Click opens Fancybox lightbox (use React lightbox alternative)

### Testimonials
- Centered section (col-md-8), white text on default dark bg
- "Testimonial" heading: Oswald, uppercase, 4rem
- Carousel with cards, each card: circular photo (25% width, rounded-full), name (white, bold), blockquote
- Navigation dots: 10px circles, active #df0e62, inactive #333333
- Prev/next arrows: semi-transparent white circles (rgba(255,255,255,0.15)), hover → #df0e62
- Use Swiper or Embla for carousel

### Biography
- Dark bg: #1a1a1a
- Accent line: pseudo-element, 100px × 4px, #df0e62, positioned top-left
- "Biography" heading: Oswald, uppercase, white, 4rem
- Portrait: 50% width, rounded corners, AOS fade-up
- Subheading "Hi I'm Jed" + bio paragraphs (white)
- "Photographer for 10 years" subheading
- Two-column checklist: ul-check success class, green (#8bc34a) checkmarks
- AOS fade-up with delay

### Blog
- Dark bg: #1a1a1a (same section continues from Biography)
- "Blog" heading: Oswald, uppercase, white
- 4 blog entries: each col-md-12, flex layout on desktop
  - Image wrap: 250px fixed width
  - Text: title (24px, white, linked), meta (gray #737373, uppercase, 13px), description
- Pagination: numbered links (1, 2, 3, ..., 7), circular (50% radius), hover → #df0e62 bg + white text

### Contact
- Dark bg: #1a1a1a
- "Contact" heading: white
- Form layout:
  - Row 1: First Name (col-md-6) + Last Name (col-md-6)
  - Row 2: Email (col-md-12)
  - Row 3: Subject (col-md-12)
  - Row 4: Message textarea (30 cols × 7 rows, placeholder "Write your notes or questions here...")
  - Row 5: "Send Message" submit button
- Input styling: no border, bottom border only (2px solid gray), no bg, white text, padding-left 0
- Focus: white border, no bg, no shadow
- Submit button: btn-primary, pill shape, same as hero CTA

### Footer
- Simple centered layout
- Copyright: "Copyright © [year] All rights reserved | Made with ❤ by Component Dock"
- Link to https://www.componentdock.com/

## Key Differences from Original
- Replace ColorLib attribution with Component Dock link
- Use picsum.photos for placeholder images (seeded per template)
- Use lucide-react for icons (Search, Facebook, Twitter, Instagram)
- Use Swiper/Embla for carousel instead of Owl Carousel
- Remove AOS dependency — use CSS animations or Intersection Observer
- Remove jQuery dependencies
- Use Tailwind classes with @theme tokens for brand colors
