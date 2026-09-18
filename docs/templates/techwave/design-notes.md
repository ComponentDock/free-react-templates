# TechWave — Implementation Notes

## Source mapping

| Item | Value |
|------|-------|
| ColorLib source | Portech |
| Source URL | https://colorlib.com/wp/template/portech/ |
| Preview URL | https://preview.colorlib.com/theme/portech/ |
| New name | techwave |
| Deploy URL | https://techwave.free.componentdock.com |

## Section order (1:1 match with source)

1. **TopBar** — contact info (phone + email) + social icons
2. **Navbar** — dark bg, brand "TechWave", 6 nav links, responsive hamburger
3. **Hero** — full-width slider with overlay, video icon (left), headline + CTAs (right)
4. **Services** — 4 service cards on light bg (#f8f9fa), white card bg, icon + title + desc + arrow
5. **About** — split: left image with "42 Years" stat overlay + right text + features
6. **Team** — dark bg (#141b25), heading + 3 staff cards (photo, name, role, social)
7. **Counter** — parallax bg, 4 stat counters with icons
8. **FAQ** — split: left image + feature list, right accordion
9. **Testimonials** — carousel with star ratings, quotes, avatars
10. **Portfolio** — 3x2 grid of project cards with bg images + overlay text
11. **Newsletter** — parallax bg, heading, email input + subscribe
12. **Footer** — dark bg, 5+ columns (brand, Explore, Info, Company, Contact), Component Dock link

## Design fidelity notes

- **Primary color:** #007bff (Bootstrap 4 default blue) — use as Tailwind `blue-500` or custom token
- **Dark sections:** #141b25 — team, footer, counter overlay
- **Light sections:** #f8f9fa — services, portfolio, testimonials bg
- **Font:** Roboto (Google Fonts), weights 300/400/500/700
- **Buttons:** Bootstrap 4 style — `.btn-primary` blue, `.btn-white` white outline→transparent on hover
- **Cards:** White bg with no border-radius (Bootstrap 4 default 0.25rem)
- **Hero:** OwlCarousel-style slider; implement as a simple CSS-only or React carousel (2 slides with bg images)
- **Parallax:** `background-attachment: fixed` on counter and newsletter sections
- **Icons:** Source uses Flaticon + FontAwesome 4; replace with lucide-react
- **Testimonial carousel:** Bootstrap carousel style; use a simple auto-rotating carousel
- **Accordion FAQ:** Bootstrap collapse; use React state for expand/collapse
- **About section:** Two overlapping images on left with "42 Years" callout overlay
- **Staff cards:** Photo background image, name, role, hidden social icons revealed on hover (fade-in)

## Component outline

```
src/
  App.tsx                    — compose all sections
  components/
    TopBar.tsx               — contact bar + social icons
    Navbar.tsx               — dark nav with hamburger
    Hero.tsx                 — slider with overlay + video + CTAs
    Services.tsx             — 4 service cards
    About.tsx                — image + text + features
    Team.tsx                 — staff cards on dark bg
    Counter.tsx              — 4 stat counters
    FAQ.tsx                  — features + accordion
    Testimonials.tsx         — carousel
    Portfolio.tsx            — 3x2 project grid
    Newsletter.tsx           — email subscribe CTA
    Footer.tsx               — multi-column footer
  index.css                  — Tailwind + theme tokens
```

## Placeholder images

- Hero bg 1: `https://picsum.photos/seed/techwave-hero1/1920/1080`
- Hero bg 2: `https://picsum.photos/seed/techwave-hero2/1920/1080`
- About image 1: `https://picsum.photos/seed/techwave-about1/600/800`
- About image 2: `https://picsum.photos/seed/techwave-about2/400/300`
- Staff 1-3: `https://picsum.photos/seed/techwave-staff1/400/500` (etc.)
- Counter bg: `https://picsum.photos/seed/techwave-counter/1920/600`
- FAQ image: `https://picsum.photos/seed/techwave-faq/600/400`
- Portfolio 1-6: `https://picsum.photos/seed/techwave-work1/600/400` (etc.)
- Testimonial avatars: `https://picsum.photos/seed/techwave-person1/100/100` (etc.)
- Newsletter bg: reuse counter bg
