# EduNex — Prep Notes

## Source
- ColorLib slug: `educature`
- Preview: https://preview.colorlib.com/theme/educature/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg

## New Name
`edunex` — `@free-react-templates/edunex`

## Section Order (from preview DOM)

1. **Header** — sticky nav bar (logo left, nav links right, hamburger on mobile)
2. **Hero** — full-height dark background image, white heading + subtext, search input, course tag pills (rounded buttons)
3. **About** — two-column (image left, text + CTA right), heading "Over 2500 Courses from 5 Platform"
4. **Courses** — light-blue bg (#f1f9ff), two-column category list with book icons, heading "This is Why We have Solid Idea"
5. **Features** — 3×2 grid of icon cards, heading "Features That Make Us Hero", colored circle icons per card
6. **Faculty** — 4-column instructor cards with photo, name, designation, bio, social icons
7. **Testimonials** — carousel slider with star ratings, quote text, thumbnail navigation
8. **Footer** — dark navy (#283367), 4 link columns + newsletter signup, bottom bar with copyright + social icons

## Design Token Mapping (to Tailwind)

| Original CSS           | Tailwind class / @theme value                    |
| ---------------------- | ----------------------------------------------- |
| `#39cfca`              | `--color-brand: #39cfca` (teal primary)         |
| `#3279bb`              | `--color-brand-dark: #3279bb` (gradient end)     |
| `#222222`              | `--color-text: #222222`                          |
| `#777777`              | `--color-muted: #777777`                         |
| `#f9f9ff`              | `--color-surface: #f9f9ff`                       |
| `#f1f9ff`              | `--color-surface-alt: #f1f9ff`                   |
| `#283367`              | `--color-footer: #283367`                        |
| `#3e4876`              | `--color-footer-bar: #3e4876`                    |
| Montserrat 400/600/700 | Google Fonts `<link>` + `font-heading`           |
| Roboto 300/400          | Google Fonts `<link>` + `font-body`              |
| `.primary-btn` gradient| `bg-gradient-to-r from-brand to-brand-dark`      |
| `.primary-btn.white`   | `bg-white text-brand`                            |
| Feature icon circles   | bg colors: `#6382e6`, `#e66686`, `#f09359`, `#73fbaf`, `#a367e7`, `#38a4ff` |

## Component Outline

| Component       | Source Section      | Notes                                      |
| --------------- | ------------------- | ------------------------------------------ |
| `Navbar.tsx`    | Header              | Sticky, logo + nav links, hamburger mobile |
| `Hero.tsx`      | home-banner-area    | Full-height bg, heading, search, tag pills |
| `About.tsx`     | about-area          | Two-column image + text + CTA              |
| `Courses.tsx`   | courses-area        | Light bg, heading, two-col category list   |
| `Features.tsx`  | feature-area        | 3×2 icon card grid                         |
| `Faculty.tsx`   | faculty-area        | 4-col instructor cards                     |
| `Testimonials.tsx` | testimonials-area| Carousel with ratings + thumbnails         |
| `Footer.tsx`    | footer-area         | 5-col layout, newsletter, social, copyright|

## Implementation Notes

- Replace FontAwesome + Themify icons with lucide-react equivalents
- Hero background: use a dark picsum image or solid dark gradient (no asset copying)
- Course tag pills: border-radius 20px, transparent background with white border, white text
- Testimonial carousel: implement with simple React state (no external carousel library needed)
- Faculty social icons: facebook, twitter, linkedin → lucide-react equivalents or generic social icons
- Newsletter input: flat styling, no border-radius (original has `border-radius: 0`)
- Footer bottom bar: slightly darker than footer bg, centered copyright with social icons
