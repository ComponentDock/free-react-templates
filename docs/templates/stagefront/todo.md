# Stagefront — Design Notes & Implementation Tasks

Source: ColorLib "Staging" → https://preview.colorlib.com/theme/staging/
New name: stagefront (never reuse "Staging" in app code)

## Section Order (1:1 fidelity)

1. **Header** — Transparent overlay header with centered nav
2. **Hero** — Full-width image slider with white text + CTA buttons
3. **About** — Two-column (text left, image right with decorative frame)
4. **Projects** — Carousel of image cards with hover overlay
5. **Services** — 4-column grid (icon + title + description)
6. **Stats / Counter** — 4 animated counters on dark bg
7. **Testimonials** — Parallax bg, quote carousel, avatar carousel, logo strip
8. **Team** — 3-column cards with hover reveal (name, role, bio, social)
9. **Call to Action** — Parallax bg, headline, solid golden button
10. **Latest / Blog** — 3-column blog cards (image, category, title, link)
11. **Footer** — Newsletter form, 4-column links, copyright bar

## Design Token Reference

- Brand: #dfa667 (golden amber) — use as CSS custom property
- Heading font: Aldrich (Google Fonts, weight 400)
- Body font: Poppins (Google Fonts, weights 300–700)
- Dark text: #111111
- Body text: #707070
- Light text: #b7b7b7
- Primary button: transparent bg, white text, decorative corner pseudo-elements (4px radius corners)
- CTA button: #dfa667 solid bg, white text, no decorations
- Section padding: py-24 (100px)
- Team card: 480px height, hover reveals bottom text area
- Testimonial avatars: rounded-full
- Parallax: background-attachment: fixed on bg images

## Component Plan

| Component | File | Notes |
|---|---|---|
| Navbar | src/components/Navbar.tsx | Fixed/absolute, transparent → solid on scroll, centered nav, phone right |
| Hero | src/components/Hero.tsx | Swiper carousel (replace owl-carousel), bg images, white text |
| About | src/components/About.tsx | Two-col, section-title span in #dfa667 |
| Projects | src/components/Projects.tsx | Swiper carousel, hover overlay |
| Services | src/components/Services.tsx | 4-col grid, lucide-react icons |
| StatsCounter | src/components/StatsCounter.tsx | 4 counters, animated on scroll |
| Testimonials | src/components/Testimonials.tsx | Parallax bg, Swiper text + avatars, logo strip |
| Team | src/components/Team.tsx | 3 cards, hover reveal |
| CallToAction | src/components/CallToAction.tsx | Parallax bg, solid CTA button |
| Blog | src/components/Blog.tsx | 3-column cards |
| Footer | src/components/Footer.tsx | Newsletter form, 4-col, copyright, Component Dock link |
| App | src/App.tsx | Compose all sections in order |

## Fidelity Notes

- Original uses owl-carousel → replace with Swiper.js (already in ecosystem)
- Original uses data-setbg (jQuery background setter) → use inline styles or Tailwind bg classes with picsum.photos placeholders
- Original parallax via data-setbg → use `bg-fixed` / `background-attachment: fixed`
- Social icons: Font Awesome → lucide-react equivalents
- Offcanvas mobile menu: implement as React state toggle
- No page loader animation needed (skip preloader)
- Stats counters: use IntersectionObserver to trigger count-up animation
