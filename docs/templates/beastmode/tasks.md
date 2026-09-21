# BeastMode — Implementation Tasks & Design Notes

Source: ColorLib Crossfits (https://colorlib.com/wp/template/crossfits/)
Preview: https://preview.colorlib.com/theme/crossfits/

## Section Order (implement top → bottom)

1. **Navbar** — sticky top, site name + nav links, mobile hamburger
2. **Hero Slider** — full-viewport carousel, dark overlay, heading + subheading + CTA
3. **Popular Programs** — 4-col grid, image + title + description + "Learn More" pill button
4. **The Club** — split layout (image left, text right), heading + paragraph + "Join Our Club" pill button
5. **Featured Trainer** — circular avatar, name, description, "Make Me Your Trainer" pill button
6. **Crossfit Exercises** — masonry/grid gallery, hover overlay with title
7. **Testimonies** — testimonial cards with circular avatars
8. **Footer** — dark bg (#1e1e1c), 4 columns (About, Quick Menu, Program, Social Icons), copyright

## Design Fidelity Notes

- **Brand color:** #fd7e14 (vibrant orange) — use as primary CTA and accent color via Tailwind theme
- **Font:** Work Sans — load via Google Fonts link in index.html
- **Buttons:** pill shape (border-radius: 30px), orange bg on primary CTAs, hover shadow
- **Dark sections:** footer uses #1e1e1c background, white text at 50% opacity
- **Light sections:** #f8f9fa / #f4f4f4 alternating backgrounds for contrast
- **Card radius:** 7px border-radius on program cards and containers
- **Avatar circles:** 50% border-radius for trainer and testimonial avatars
- **Hero:** full-viewport height, background image with dark semi-transparent overlay
- **Exercise gallery:** CSS grid with hover state showing title overlay (translate + opacity)
- **Testimonials:** card-based layout with circular avatar on top, name below, text paragraph

## Component Plan

- `App.tsx` — compose all sections in order
- `components/Navbar.tsx` — sticky nav with mobile toggle
- `components/HeroSlider.tsx` — carousel with autoplay (manual or simple state cycling)
- `components/PopularPrograms.tsx` — 4-card grid, each card = ProgramCard sub-component
- `components/TheClub.tsx` — split layout with image + text
- `components/FeaturedTrainer.tsx` — trainer card with avatar
- `components/CrossfitExercises.tsx` — image grid with hover overlay
- `components/Testimonies.tsx` — testimonial cards grid
- `components/Footer.tsx` — 4-column dark footer with Component Dock link

## Placeholder Images

Use `https://picsum.photos/seed/beastmode-<n>/<w>/<h>` for all images:
- Hero slides: `beastmode-hero-1/1920/1080`
- Program cards: `beastmode-prog-1/400/300`
- Club section: `beastmode-club/600/400`
- Trainer avatar: `beastmode-trainer/200/200`
- Exercise gallery: `beastmode-ex-1/400/300`
- Testimonial avatars: `beastmode-test-1/100/100`

## Dependencies

No new dependencies expected — reuse packages/ui components and Tailwind utilities.
