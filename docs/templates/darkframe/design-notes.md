# DarkFrame — Design Notes & Implementation Outline

## Source
- ColorLib "Elit Photo": https://colorlib.com/wp/template/elit/
- Preview: https://preview.colorlib.com/theme/elit/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg

## Structure Order (top to bottom)

1. Sidebar (fixed left) → Navbar component
2. Hero (full-viewport, background image) → Hero component
3. Photo Grid (3-col masonry, hover overlays) → PhotoGrid component
4. Testimonials (carousel slider) → Testimonials component
5. Biography (dark bg, accent bar, photo + text + checklist) → Biography component
6. Blog (4-card grid) → BlogSection component
7. Contact (form with styled inputs) → Contact component
8. Footer (copyright + Component Dock link) → Footer component

## Section-by-Section Fidelity Notes

### Sidebar / Navbar
- Fixed left sidebar: 250px width, black background (#000), full viewport height
- Site logo text at top, uppercase, bold, white
- Nav links: vertical list, white text, uppercase, small font (0.8rem)
- Active link: brand color #df0e62
- Social icons row below nav (Facebook, Twitter, Instagram)
- Mobile: collapses to 70px top bar, nav links horizontal
- Implementation: Use a `<aside>` or fixed `<nav>` with Tailwind `fixed left-0 top-0 h-screen w-64 bg-black`

### Hero
- Full viewport height (100vh, min 500px)
- Background image with dark overlay (rgba(0,0,0,0.4))
- Centered content: heading "WELCOME" (Oswald, 4rem desktop, 2.5rem mobile)
- Subtext paragraph below heading
- Pill button "CONTACT ME" — brand color bg, white text, border-radius 30px
- z-index layering: overlay z-0, content z-1

### Photo Grid
- 12 photos in 3-column grid (col-6 col-md-6 col-lg-4)
- Each photo: object-fit cover, 300px height (200px on mobile)
- Hover: dark overlay fades in (opacity transition 0.3s), text appears centered
- Text: heading (uppercase) + meta (small, muted)
- Implementation: CSS Grid or flex, hover state via group-hover or CSS transition

### Testimonials
- Owl Carousel-like slider (implement with simple React carousel or CSS snap)
- Each slide: quote text, person name, role
- Dot navigation below, active dot = brand color
- Can simplify to a static layout with one visible testimonial + dots

### Biography
- Darkened section: bg #1a1a1a
- 4px brand-color accent bar at top-left (via ::before pseudo-element)
- Two-column layout: photo left, text right
- Heading: "Hi I'm [Name]" (Oswald, uppercase)
- Subtitle: "Photographer for 10 years"
- Check-list: brand-colored check icons (use lucide-react CheckCircle)
- Paragraph text below

### Blog
- 4 blog cards in a grid
- Each card: image left (250px flex-basis), text right
- Heading: bold, white, 24px
- Meta: date in muted color
- Excerpt paragraph in gray
- On mobile: stacked layout

### Contact
- Dark section with "Contact" heading
- Heading has 4px brand-color underline (border-bottom or ::after)
- Form: name, email, subject, message (textarea)
- Inputs: no border, bottom-border-only (2px gray, becomes white on focus)
- "Send Message" button: brand color bg, pill shape
- Form validation: required fields, email format

### Footer
- Simple copyright line
- "Made with Component Dock" link to https://www.componentdock.com/
- Dark background matching body

## Design Token Summary (for index.css @theme)

```
--color-brand: #df0e62;
--color-bg-body: #000000;
--color-bg-section: #1a1a1a;
--color-text: #ffffff;
--color-text-body: gray;
--color-text-muted: #737373;
--font-heading: 'Oswald', arial, sans-serif;
```

## Placeholder Images
- Hero: `https://picsum.photos/seed/darkframe-hero/1920/1080`
- Photos: `https://picsum.photos/seed/darkframe-photo-{1-12}/600/400`
- Biography: `https://picsum.photos/seed/darkframe-bio/600/700`
- Blog: `https://picsum.photos/seed/darkframe-blog-{1-4}/500/350`

## Dependencies
- lucide-react for social icons + check icons
- No carousel library needed (static testimonials or simple CSS snap)
- No new npm dependencies expected
