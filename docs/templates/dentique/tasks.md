# Dentique — Implementation Notes

Source: ColorLib Dentamax
Preview: https://preview.colorlib.com/theme/dentamax/

## Section Order (match 1:1)

1. **Navbar** — transparent → white on scroll, 7 nav items, logo "Dentique"
2. **Hero** — full-width slider, 2 slides, gradient overlay (gold→cyan), dual CTAs
3. **Services 1** — 4 cards (Emergency, Qualified Dentist, General Treatment, Online Appointment), light bg
4. **Services 2** — 8 feature cards (Easy Booking, Experience, Flexible Schedule, Best Price, etc.), white bg
5. **About** — heading, text, CTA button, image right
6. **Stats/Counter** — 3+ stats, parallax bg with dark overlay
7. **Testimonials** — 3+ cards, carousel/grid, light bg
8. **Appointment Form** — form with 6 fields + submit, gradient bg
9. **CTA/Intro** — headline, text, CTA, gradient bg
10. **Footer** — dark bg (#1b262c), contact info, Component Dock link

## Design Tokens (from CSS extraction)

- Primary cyan: `#65d8ea` (buttons, active nav, highlights)
- Navy: `#0f4883` (headings)
- Gold: `#ffcf94` (gradient component)
- Dark: `#1b262c` (footer bg)
- Light: `#effcfd` (section bg)
- Muted: `#6c8faf` (secondary text)
- Gradient: `linear-gradient(-45deg, rgba(255,207,148,0.35) 0%, rgba(227,209,163,0.35) 18%, #65d8ea 100%)`
- Fonts: Roboto (body), Arizonia (display/headings)
- Buttons: pill shape (`border-radius: 50px`), cyan bg, white text

## Fidelity Notes

- Match the diagonal gradient overlay on hero exactly — it's the defining visual element
- Arizonia is a Google Font (script style) — load via `<link>` in index.html
- Hero uses owl carousel in original — use CSS-based slider or embla-carousel in React
- Stats section uses parallax scrolling — replicate with `bg-fixed` (Tailwind `bg-fixed`)
- Appointment form has date picker + time picker — use native HTML inputs or a lightweight library
- Services 2 section has 8 cards in 2×4 grid — use CSS grid
- Footer is dark navy with centered content
- Navbar uses Bootstrap classes in original — translate to Tailwind equivalents

## Implementation Steps

1. Copy simplest existing app as base, rename to `dentique`
2. Set up theme tokens in `index.css` (@theme)
3. Build Navbar component (transparent → scroll effect)
4. Build Hero with slider and gradient overlay
5. Build Services 1 (4 cards)
6. Build Services 2 (8 cards)
7. Build About section
8. Build Stats/Counter section
9. Build Testimonials section
10. Build Appointment Form
11. Build CTA/Intro section
12. Build Footer with Component Dock link
13. Compose all in App.tsx
14. Write tests for all components
15. Verify 100% coverage, typecheck, lint, build
