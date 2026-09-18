# Elevate — Implementation Notes

Source: ColorLib Life Coaching (https://colorlib.com/wp/template/life-coaching/)
Preview: UNREACHABLE (404) — design based on screenshot + CSS analysis only.

## Section order (top → bottom)

1. Navbar — white/transparent bg, logo + links
2. HeroSlider — full-width carousel, heading + CTA
3. About — split: image + text intro
4. Services — 3-4 cards with icons, titles, descriptions
5. Statistics — animated counter bar (e.g. "150+ Happy Clients", "10+ Years Experience")
6. Pricing — 3 tier cards (Basic, Standard, Premium)
7. Testimonials — carousel of client quotes
8. CTA — banner with heading + button
9. Blog — 3 post cards
10. Contact — form + map
11. Footer — 4 columns, newsletter, social icons, copyright

## Design fidelity notes

- **Colors:** Brand green `#81d742` for buttons and accents. Predominantly white background. Light gray `#f7f7f7` for alternating sections.
- **Typography:** Clean sans-serif headings and body. Modern, professional feel.
- **Buttons:** Rounded/pill-shaped with green bg. Hover state darkens or shifts.
- **Layout:** Clean grid-based. Generous whitespace. Max-width container (~1200px).
- **Hero:** Full-width slider with overlay text. Multiple slides with different images.
- **Stats:** Animated number counters with icon + label. Background may be slightly tinted.
- **Pricing:** 3-column card layout. Middle card often highlighted/scaled up.
- **Testimonials:** Carousel with avatar, name, quote text.
- **Contact:** Split layout — form on one side, map on the other.
- **Footer:** Dark or light bg with 4 columns.

## Component mapping

| Section | Component |
|---|---|
| Navbar | `Navbar.tsx` |
| HeroSlider | `HeroSlider.tsx` (needs carousel) |
| About | `About.tsx` |
| Services | `Services.tsx` |
| Statistics | `StatsCounter.tsx` (animated counters) |
| Pricing | `Pricing.tsx` |
| Testimonials | `Testimonials.tsx` (carousel) |
| CTA | `Cta.tsx` |
| Blog | `Blog.tsx` |
| Contact | `Contact.tsx` (form + map) |
| Footer | `Footer.tsx` |

## Carousel/slider considerations

The original uses a slider library. For React:
- Hero: CSS scroll-snap or lightweight carousel
- Testimonials: Same approach
- Keep deps minimal

## Animated counters

Implement with IntersectionObserver — animate number from 0 to target when section enters viewport. Use requestAnimationFrame for smooth animation.

## Placeholder images

Use `https://picsum.photos/seed/elevate-<n>/<w>/<h>`:
- Hero slides: `seed/elevate-hero-1/1920/800` (3 slides)
- About: `seed/elevate-about/800/600`
- Services: `seed/elevate-service-1/200/200` (4 icons)
- Team/testimonials: `seed/elevate-person-1/200/200` (3-4)
- Blog: `seed/elevate-blog-1/600/400` (3 posts)
