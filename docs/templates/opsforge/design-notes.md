# Opsforge — Design Notes (ColorLib Services)

Source: https://preview.colorlib.com/theme/services/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/services-free-template.jpg
New name: opsforge (ColorLib slug: services)

## Section Order (top to bottom)

1. **Navbar** — sticky, logo left, 6 nav links right, white bg + shadow when scrolled
2. **Hero** — full-viewport, background image + overlay, centered white heading + subtitle + CTA button
3. **About Us** — white bg, 3-col: text / image / text
4. **Services** — white bg, centered title, 2-col grid of 6 service cards (icon + title + description)
5. **Projects** — white bg, centered title, filter buttons (All/Web/Design/Brand), 3-col image grid (12 items, no gaps)
6. **Testimonials** — lime-green bg (`#C2E54F`), centered white title, owl-carousel of 3 testimonials (blockquote + cite)
7. **Blog** — light bg, centered title, 3-col blog cards (image + white content area)
8. **Contact** — white bg, centered title, 2-col: form (left) + office locations (right)
9. **Footer** — light bg, 4-col: address / Services links / Resources links / Templates links / social icons / copyright

## Design Token Mapping (Tailwind)

| Token | CSS Value | Tailwind usage |
|-------|-----------|----------------|
| brand | `#C2E54F` | `@theme { --color-brand: #C2E54F; }` + `bg-brand`, `text-brand`, `border-brand` |
| text-body | `#666666` | `text-gray-600` or custom |
| text-heading | `#000000` | `text-black` |
| bg-light | `#f8f9fa` | `bg-gray-100` or `bg-gray-50` |
| font-heading | `"Jost"` | Google Fonts link in index.html, `font-family: 'Jost'` in index.css |
| btn-radius | `30px` | `rounded-full` |
| btn-padding | `10px 30px` | `px-8 py-2.5` |
| btn-hover-bg | `#000000` | `hover:bg-black` |
| section-padding-mobile | `2.5em 0` | `py-10` |
| section-padding-desktop | `7em 0` | `lg:py-28` |
| sticky-shadow | `4px 0 20px -5px rgba(0,0,0,0.1)` | custom class or inline |

## Component Breakdown

### App.tsx
Compose sections in order: Navbar, Hero, About, Services, Projects, Testimonials, Blog, Contact, Footer.

### Components to create:
- `Navbar.tsx` — sticky header with logo + nav links, scroll-aware bg
- `Hero.tsx` — full-vh bg image, overlay, heading, subtitle, CTA button
- `About.tsx` — 3-column text-image-text
- `Services.tsx` — 2-col grid of ServiceCard items (icon + title + desc)
- `Projects.tsx` — filter buttons + image gallery grid
- `Testimonials.tsx` — carousel with 3 slides on lime bg
- `Blog.tsx` — 3 blog cards on light bg
- `Contact.tsx` — form + office locations
- `Footer.tsx` — 4-col with links + social icons + Component Dock attribution

## Fidelity Notes

- Match the original's section-by-section order exactly
- The hero uses a background image with dark overlay (use `bg-black/50` overlay)
- Projects section has a no-gutter grid (images flush against each other) — use `gap-0` or negative margins
- The testimonials section uses the brand color as a full-section background
- Blog cards have a white content area below the image with padding
- Contact form inputs use rounded pill style (border-radius: 30px)
- Social icons in footer use circle backgrounds (use lucide-react icons in circles)
- Navbar logo should be a bordered box with text (not an image)
