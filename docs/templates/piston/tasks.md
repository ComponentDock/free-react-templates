# Piston — Implementation Tasks

Source: ColorLib "Bodyfit" → https://preview.colorlib.com/theme/bodyfit/
New name: piston
Category: Health Fitness

## Structure (section order)

1. Navbar (dark, sticky, logo + 7 links + mobile hamburger)
2. Hero carousel (2 slides, dark overlay, CTA button)
3. Info bar (yellow #e5ce48 bg, 3 columns: phone/address/hours)
4. About (split: image+play button | "Welcome to Piston" + text)
5. Services "Our Process" (dark bg, 4 icon cards)
6. Programs "Fitness Programs" (split: text+CTA | 5 program items)
7. Counter (dark parallax bg, 4 animated stats)
8. Coaches "Our Coaches" (4 profiles in 2-col grid)
9. Testimonials (dark parallax bg, quote cards with avatars)
10. Packages "Our Packages" (3 pricing cards with price + CTA)
11. Blog "Recent From Our Blog" (3 blog cards with metadata)
12. Gallery (4-column image grid with hover overlay)
13. Appointment (split: map | form with 6 fields + submit)
14. Footer (4 columns, dark parallax, Component Dock link)

## Component plan

- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx` — dark navbar, sticky, mobile toggle
- `src/components/Hero.tsx` — carousel with 2 slides
- `src/components/InfoBar.tsx` — yellow strip, 3 contact items
- `src/components/About.tsx` — split layout, play button
- `src/components/Services.tsx` — dark bg, 4 icon cards
- `src/components/Programs.tsx` — split, 5 program items
- `src/components/StatsCounter.tsx` — parallax, 4 animated numbers
- `src/components/Coaches.tsx` — 4 coach profiles
- `src/components/Testimonials.tsx` — parallax, quote cards
- `src/components/Packages.tsx` — 3 pricing cards
- `src/components/Blog.tsx` — 3 blog post cards
- `src/components/Gallery.tsx` — 4-column image grid
- `src/components/AppointmentForm.tsx` — split: map + form
- `src/components/Footer.tsx` — 4-column footer
- `src/components/SocialIcons.tsx` — inline SVG brand icons

## Design tokens to use

- `--color-brand: #78d5ef` (light blue, buttons/links)
- `--color-accent: #e5ce48` (yellow, info bar, subheadings)
- `--color-dark: #141414` (dark sections)
- `--color-darker: #0d0d0d` (counter bg)
- `--color-ink: #212529` (body text)
- `--color-mist: #6c757d` (muted text)
- Font: "Work Sans" via Google Fonts link in index.html
