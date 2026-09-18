# Rigcraft — Design Notes & Implementation Outline

**Source:** ColorLib Equipo — https://colorlib.com/wp/template/equipo/
**Preview:** https://preview.colorlib.com/theme/equipo/
**New name:** rigcraft (heavy equipment rental)

## Section Order (from preview DOM)

1. **TopBar** — utility bar with brand logo (road-roller flaticon), phone number, location
2. **Navbar** — dark Bootstrap navbar with links: Home, About, Rental Services, Gallery, Blog, Contact, Request A Quote (CTA)
3. **Hero** — full-viewport background image + dark overlay, centered headline + CTA button
4. **WhyChoose** — navy bg (`#042e4f`), 4-column grid: icon + heading + description for each service
5. **AboutCounter** — split layout: image left, text + animated counter right (equipment numbers)
6. **CTABanner** — full-width parallax image (`images/bg_3.jpg`), centered text
7. **RentalServices** — 4-column card grid: image + title + price (Bulldozer, Forklift, Crane, Excavator)
8. **Testimonials** — background image section, owl-carousel with avatar + quote + name
9. **Blog** — light gray bg (`#f8f9fa`), 3-column card grid: thumbnail + meta + excerpt + "Read more" btn
10. **Footer** — dark bg, 4-column widget grid (brand/social, links, services, contact info)
11. **FooterBar** — navy bg (`#042e4f`), copyright text (replaced with Component Dock link)

## Fidelity Notes

- Navbar uses Bootstrap 4 dark theme; needs responsive collapse with hamburger
- Hero uses `js-fullheight` (parallax scroll + JS height calc) — in React, use `min-h-screen` + background-attachment fixed
- Services section background is solid navy — use `bg-brand-primary` Tailwind class
- Counter section has animated numbers counting up on scroll — use IntersectionObserver + animated counter
- Parallax on CTA banner: use `background-attachment: fixed` or `background-position` technique
- Testimonials use owl-carousel — replace with a simple React carousel (CSS snap or state-based)
- Blog cards use a Bootstrap `block-20` class for image aspect ratio — use Tailwind `aspect-video` or similar
- All placeholder images: `https://picsum.photos/seed/rigcraft-<n>/<w>/<h>`
- Footer: replace Colorlib attribution with Component Dock link

## Design Tokens (for Tailwind @theme)

```
--color-brand-primary: #042e4f;   /* navy */
--color-brand-accent: #ffa931;    /* amber/orange */
--color-brand-light: #f8f9fa;     /* light gray sections */
--color-brand-dark: #141414;      /* footer bg */
--font-family-brand: 'Roboto', sans-serif;
```

## Component List

1. `TopBar` — utility bar with logo, phone, location
2. `Navbar` — responsive dark nav with links + CTA
3. `Hero` — full-screen background image + overlay + headline
4. `WhyChoose` — 4-column service highlights on navy
5. `AboutCounter` — split layout with animated counters
6. `CTABanner` — full-width parallax CTA
7. `RentalServices` — 4-column equipment card grid
8. `Testimonials` — carousel with customer quotes
9. `Blog` — 3-column blog card grid
10. `Footer` — 4-column footer widgets + bottom bar

## Key Implementation Details

- **Parallax:** Use `background-attachment: fixed` on hero and CTA sections
- **Counter animation:** `useEffect` + `IntersectionObserver` to trigger count-up when visible
- **Carousel:** Simple CSS snap or React state for testimonials (no heavy lib)
- **Responsive:** Mobile-first; 1-column on small, 2 on md, 4 on lg
- **Icons:** Use `lucide-react` for service icons (replace Font Awesome)
- **Images:** All via picsum.photos with seed for consistency
