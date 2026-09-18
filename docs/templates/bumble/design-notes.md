# Bumble — Template Implementation Notes

**Source:** ColorLib Bee → https://preview.colorlib.com/theme/bee/
**New name:** bumble
**Category:** Construction Company Landing Page

## Section Order (top → bottom)

| # | Section | Component Name | Key Notes |
|---|---------|---------------|-----------|
| 1 | Top Info Bar | `TopBar` | 3-column row: phone, email, hours. Each with icon. Bootstrap `.topper` classes. |
| 2 | Navbar | `Navbar` | Dark bg, logo with bee icon, 5 nav links + search. Sticky on scroll. |
| 3 | Hero Slider | `HeroSlider` | 2 slides, parallax bg images, dark overlay, text on right half (`col-md-6`). Use Swiper or custom carousel. |
| 4 | About + Quote Form | `AboutSection` | Left: heading + paragraph. Right: "Request A Quote" card with amber header bar, form fields (name, email, phone, service select). |
| 5 | Services Grid | `ServicesGrid` | 4 cards in a row (col-md-3). Icon + heading + short description per card. |
| 6 | Intro CTA | `IntroCTA` | Full-width parallax bg, dark overlay, centered heading + subtext + pill button. |
| 7 | Team | `TeamSection` | 4 member cards (col-lg-3). Photo (bg-image), name, title, social icon row on hover. |
| 8 | Projects Gallery | `ProjectsGallery` | 2-col masonry grid of 8 images. Hover overlay effect. |
| 9 | Counter Stats | `CounterStats` | Parallax bg, 4 stat blocks: animated number + label. Use `data-number` pattern. |
| 10 | Services Detail | `ServicesDetail` | Left: subheading + heading. Right: 3 stacked service items with icon + text. |
| 11 | Blog | `BlogSection` | 3 cards (col-md-4). Image with date overlay, title, excerpt, "Read More" btn. |
| 12 | Footer | `Footer` | Dark bg, 4 cols: logo+social, services list, recent blog, newsletter form. Copyright bar with Component Dock link. |

## Design Token Extraction (from style.css)

### Brand palette
- `#fda729` — amber/golden (primary accent, used on `.bg-primary` override, CTA buttons, quote-form header)
- `#007bff` — Bootstrap blue (secondary links, hovers)
- `#212529` — dark (footer, overlays)
- `#343a40` — dark alt (navbar)
- `#f8f9fa` — light gray (alternating sections)
- `#6c757d` — muted text
- `#000000` — body text

### Typography
- Headings: `"Poppins", Arial, sans-serif` — weight 700
- Body: `"Nunito Sans", Arial, sans-serif` — weight 400
- Subheadings: `"Poppins"` — weight 400, smaller size

### Button/CTA
- Primary: `#fda729` background, white text, `border-radius: 50px` (pill)
- Padding: `px-4 py-3`
- Hover: darken

### Backgrounds
- Parallax images on: hero slider, intro CTA, counter stats (use `bg_3.jpg` pattern)
- Dark overlay on parallax sections
- White default for content sections
- `bg-light` for blog section

### Fidelity Notes
- The original uses Owl Carousel for the hero; replace with Swiper or custom carousel
- Stellar parallax.js for parallax effects; replace with CSS `background-attachment: fixed` or Framer Motion
- Bootstrap 4 grid; replace with Tailwind responsive utilities
- AOS (Animate On Scroll) for fade-in effects; replace with Tailwind + IntersectionObserver or Framer Motion
- Icons: flaticon + ionicons + linearicons; replace with lucide-react
- Images: use `https://picsum.photos/seed/bumble-<n>/<w>/<h>` placeholders
- Footer copyright: replace Colorlib attribution with Component Dock link
