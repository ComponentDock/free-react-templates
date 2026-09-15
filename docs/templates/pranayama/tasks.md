# Pranayama — Prep Notes & Design Details

Source: ColorLib "Yoga Studio" (https://colorlib.com/wp/template/yoga-studio/)
Preview: https://preview.colorlib.com/theme/yogastudio/

## Section order (top to bottom)

1. Header/Nav — fixed top, dark parallax bg, logo + nav links
2. Hero Slider — Owl Carousel, 3 slides, "Find Your Zen"
3. Yoga Classes — 3 cards: Yoga, Pilates, Hatha
4. Different Yoga — parallax bg, quotes, stats
5. Yoga Name — 3-column yoga style titles
6. Client Testimonials — image left, carousel right
7. Call-to-Action — parallax bg, "Take a free class now"
8. Footer — contact form + info, social links, copyright

## Design tokens captured

| Token         | Value                   | Usage                          |
|---------------|-------------------------|--------------------------------|
| Brand color   | `#9482AC` (muted purple)| Primary buttons, links, accents|
| Secondary     | `#FFDD8D` (warm yellow) | Secondary buttons              |
| Dark text     | `#111111`               | Headings                       |
| Body text     | `#464646`               | Body paragraphs                |
| Muted text    | `#939393`               | Subtitles, captions            |
| Button radius | `50px`                  | Pill-shaped buttons            |
| Body font     | Montserrat, sans-serif  | All body text                  |
| Heading font  | Playfair Display, serif | h1, h2, accents                |

## Component structure

- `App.tsx` — root, composes all sections in order
- `components/Navbar.tsx` — fixed header with logo, nav links, mobile toggle
- `components/HeroSlider.tsx` — Owl Carousel with 3 parallax slides
- `components/YogaClasses.tsx` — 3-column card grid
- `components/DifferentYoga.tsx` — parallax section with quotes + stats
- `components/YogaNameSection.tsx` — 3-column yoga styles
- `components/Testimonials.tsx` — client image + carousel
- `components/CallToAction.tsx` — parallax CTA section
- `components/Footer.tsx` — contact form, info, social links, copyright

## Fidelity notes

- Match parallax background behavior: use `background-attachment: fixed` or a
  parallax library equivalent to the original `data-setbg` + SlickNav parallax.
- Hero slider: the original uses Owl Carousel with autoplay. Implement with
  a lightweight carousel (e.g. embla-carousel or a custom React solution) to
  avoid heavy jQuery dependencies.
- The class icons use Flaticon. Replace with lucide-react equivalents that
  match the yoga/fitness theme (e.g. `Flame`, `Dumbbell`, `Heart`).
- Contact form: original is purely visual (no backend). Keep it visual only
  with zod validation for the form fields.
- All background images: replace with `https://picsum.photos/seed/pranayama-<n>/<w>/<h>`
  deterministic placeholders.
