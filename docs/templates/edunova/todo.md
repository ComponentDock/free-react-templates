# EduNova — Implementation Notes

## Source

- ColorLib: Onedu (https://colorlib.com/wp/template/onedu/)
- Preview: https://preview.colorlib.com/theme/onedu/
- New name: edunova

## Section Order (implement top to bottom)

1. **Navbar** — Sticky header with logo, search input (rounded, 30px radius), nav links, cart icon, "Sign In" button
2. **Hero** — Full-width with background image, headline + subtext, large search form (input + red search button), hero illustration on right
3. **PopularCourses** — Owl-carousel style: section title, 4+ course cards with image/price badge/title/author/stars
4. **AboutCTA** — Two-column: image left, headline + description + 2 buttons (purple primary + ghost) right
5. **Categories** — Grid of category image+label cards
6. **Testimonials** — Carousel with quote + avatar + name + role
7. **Instructors** — Grid of instructor cards
8. **Features** — Light blue (#EFFDFF) bg, two-column: 3 feature items (icon+title+desc) left, illustration right
9. **Newsletter** — Orange (#FF6F00) bg, centered text, email input + subscribe button
10. **Footer** — Dark bg, 4 columns (logo+desc+social, Subjects, Our Company, Support), copyright bar, Component Dock link

## Design Token Mapping (Tailwind)

```
brand-red: #EA5252        (accents, hover, search button)
brand-purple: #5A4E8C     (primary CTA)
brand-orange: #FF6F00     (newsletter bg, submit buttons)
section-light: #EFFDFF    (features section bg)
heading-color: #3C3B37    (h1-h6)
body-text: #6A6A6A        (paragraphs)
subtitle-text: #6B5A5A    (section descriptions)
eyebrow-text: #7EA0FF     (category spans above titles)
font: "Jost"              (Google Fonts)
```

## Fidelity Notes

- Hero: search input is large (80px height), rounded (30px radius), with a red search button appended
- Course cards have an orange price badge overlay on the image (top-left or top-right)
- Star ratings use Font Awesome star icons (yellow/gold)
- About section has a purple primary button and a white outlined secondary button
- Features section background is a soft light blue (#EFFDFF)
- Newsletter section is a bold orange (#FF6F00) full-width band
- Footer is dark with social icons (Font Awesome)
- Mobile: hamburger menu replaces desktop nav, all sections stack

## Component Plan

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/PopularCourses.tsx`
- `src/components/AboutCTA.tsx`
- `src/components/Categories.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Instructors.tsx`
- `src/components/Features.tsx`
- `src/components/Newsletter.tsx`
- `src/components/Footer.tsx`
- `src/App.tsx` — compose all sections
