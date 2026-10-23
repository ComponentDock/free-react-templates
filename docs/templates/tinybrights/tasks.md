# TinyBrights — Implementation Notes

Recreation of ColorLib "Kiddos" (children's education / kindergarten template).

## Section Order (from preview DOM)

1. **TopInfoBar** — address, email, phone with colored circular icons on brand-blue bg
2. **Navbar** — transparent overlay on hero, scrolls to fixed white with shadow
3. **HeroSlider** — Swiper carousel, 2 slides, full-width bg images, large heading + CTA button, pagination dots
4. **ServicesBar** — 4 equal columns (certified teachers, special education, book & library, certification) on colored bg (primary, tertiary, fifth, quarternary), white icon circles
5. **AboutSection** — 2-col: left (welcome text + CTA), right (4-feature grid with blue circular icons)
6. **IntroBanner** — parallax bg image, dark overlay, centered heading text
7. **StaffSection** — 4 teacher cards, hover reveals social links bar
8. **CoursesSection** — 4 course cards, thumbnail + category tag (orange) + title + description
9. **CounterSection** — parallax bg, 4 statistic counters with large numbers
10. **Testimonials** — carousel with quote, user image, name, position; pagination dots
11. **ConsultSection** — dark parallax bg, appointment/consultation form
12. **Footer** — dark bg #232323, logo, about text, newsletter subscribe, social links, Component Dock link

## Design Notes

### Color Palette (Tailwind @theme)

```
--color-brand-blue: #1eaaf1;
--color-brand-orange: #fda638;
--color-brand-green: #8cc152;
--color-brand-red: #f1453d;
--color-brand-purple: #5d50c6;
--color-surface-light: #fafafa;
--color-surface-dark: #232323;
```

### Typography

- Google Fonts link: Work Sans (300–900) + Fredericka the Great (400)
- Body: Work Sans 16px/1.8, color rgba(0,0,0,0.5)
- Headings: Work Sans 400–600, color rgba(0,0,0,0.8)
- Hero H1: 60px desktop / 40px mobile, weight 800, white

### Button Shape

- All buttons: border-radius 40px (pill)
- Primary: solid brand-blue, hover → transparent with blue border
- Secondary/CTA: solid brand-orange

### Section Backgrounds

- Services bar: 4 columns, each a different solid brand color
- Intro/Counter/Consult: parallax bg images with dark/red overlay
- Testimonials: light (#fafafa) background
- Footer: dark (#232323) background

### Images

- Use picsum.photos for placeholder images
- Hero slider: `https://picsum.photos/seed/tinybrights-hero-1/1920/600`
- Staff: `https://picsum.photos/seed/tinybrights-staff-N/300/300`
- Courses: `https://picsum.photos/seed/tinybrights-course-N/250/180`

### Icons

- Use lucide-react icons (Teacher, BookOpen, GraduationCap, Shield, etc.)
- Icon circles: white bg, 120px (services) or 80px (about features), rounded full

### Fidelity Notes

- Match the 4-column services bar with different colored backgrounds exactly
- The "Welcome" about section has a specific asymmetric layout (5/12 + 7/12)
- Staff cards have a hover effect that slides social links up from below
- Counter section uses a parallax background image with stat numbers
- Footer subscribe form has a purple (#5d50c6) submit button
- Navbar is transparent over the hero, becomes white fixed on scroll

## Component Mapping

| Section        | Component File        | Notes                            |
| -------------- | --------------------- | -------------------------------- |
| TopInfoBar     | TopInfoBar.tsx        | 3-column flex, colored circles   |
| Navbar         | Navbar.tsx            | Scroll listener, fixed class     |
| HeroSlider     | HeroSlider.tsx        | Swiper or CSS animation fallback |
| ServicesBar    | ServicesBar.tsx       | 4-column grid, different bg colors |
| AboutSection   | AboutSection.tsx      | 2-col asymmetric layout          |
| IntroBanner    | IntroBanner.tsx       | Parallax bg + overlay            |
| StaffSection   | StaffSection.tsx      | 4-card grid with hover effect    |
| CoursesSection | CoursesSection.tsx    | Course cards with category tag   |
| CounterSection | CounterSection.tsx    | Animated counters + parallax bg  |
| Testimonials   | Testimonials.tsx      | Carousel with pagination         |
| ConsultSection | ConsultSection.tsx    | Form on dark parallax bg         |
| Footer         | Footer.tsx            | Component Dock link required     |
