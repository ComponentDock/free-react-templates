# Stamina — Design Notes & Implementation Outline

## Source

- ColorLib Endurance: https://colorlib.com/wp/template/endurance/
- Preview: https://preview.colorlib.com/theme/endurance/
- Category: Crossfit / Gym landing page

## Section Order (1:1 fidelity)

1. TopBar — black strip, phone + email + hours
2. Navbar — dark, sticky, transparent→solid scroll
3. HeroSlider — 2 slides, full-height bg images, overlay, pill CTAs
4. About — image left, text right, counter strip (4 stats)
5. Features/Goals — bg-light, 5 icon items
6. Programs — bg-darken (#1d1919), 6-card carousel
7. Pricing — bg-light, 3 plan cards
8. Testimonials — carousel with avatars
9. Appointment/Contact — parallax bg, form (name, email, subject, message)
10. Blog — bg-light, 3 card grid
11. Counter — dark parallax, 4 animated numbers
12. Footer — dark, 3 widget columns

## Design Token Notes

- Primary brand: #007bff (Bootstrap blue, used on buttons, links)
- Yellow accent: #fcd307 (pulsing animation dot)
- Orange accent: #fc6b29 (pulsing animation dot)
- Dark backgrounds: #1d1919 (programs section, counter)
- Navbar: transparent default, black on scroll (#000)
- Hero overlay: rgba(0,0,0,0.2)
- Font: Roboto (300,400,500,700,900) — load via Google Fonts link
- Hero CTA buttons: pill (border-radius 30px), white border 1px solid rgba(255,255,255,0.4)
- Standard button radius: 0.25rem (Bootstrap default)

## Component Breakdown

```
src/
  App.tsx          — compose all sections
  components/
    TopBar.tsx     — contact info strip
    Navbar.tsx     — sticky nav with scroll listener
    HeroSlider.tsx — carousel (manual, no owl-carousel lib)
    About.tsx      — 2-col with counter strip
    Features.tsx   — 5-item icon grid
    Programs.tsx   — 6-card carousel
    Pricing.tsx    — 3 pricing cards
    Testimonials.tsx — carousel with dots
    ContactForm.tsx  — form with parallax bg
    Blog.tsx       — 3-card grid
    Counter.tsx    — animated counters on dark bg
    Footer.tsx     — 3-column footer + Component Dock link
```

## Fidelity Notes

- Original uses owl-carousel for hero and programs — replace with a simple
  React carousel (CSS scroll-snap or lightweight custom, no heavy lib needed).
- Original uses Bootstrap 4 grid — translate to Tailwind grid/flex utilities.
- The pulsing dot animation on About section uses #fcd307 and #fc6b29 with a
  linear-gradient 45deg — reproduce with Tailwind keyframe animation.
- Counter section uses parallax background image — use CSS
  `background-attachment: fixed` or a lightweight JS approach.
- Form fields: standard inputs with validation.
- All images: picsum.photos/seed/stamina-N/W/H for deterministic placeholders.
- Icons: lucide-react (dumbbell, flame, bike, boxing-glove, etc.)
