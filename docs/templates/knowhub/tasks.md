# KnowHub — Implementation Tasks

Source: ColorLib Knowledge (https://colorlib.com/wp/template/knowledge/)
Preview: https://preview.colorlib.com/theme/knowledge/

## Task list

1. Scaffold app from simplest existing template (copy + rename)
2. Set up index.html with Google Fonts (Rubik) link
3. Set up Tailwind theme tokens in index.css (brand-primary #4586ff, brand-accent #F7AF1D, bg-dark #302a39, etc.)
4. Implement Navbar component (fixed top, transparent → solid on scroll, mobile hamburger)
5. Implement HeroSlider component (4 slides, background images with dark overlay, heading, CTA button)
6. Implement CourseCategories component (floating search bar, 6 category tiles with icons)
7. Implement PopularCourses component (carousel of course cards)
8. Implement Counters component (parallax bg, animated number counters, testimonial)
9. Implement Instructors component (grid of instructor cards)
10. Implement OurCourses component (detailed course listing cards)
11. Implement Events component (event cards with date, title, description)
12. Implement Blog component (blog post cards on #f2f3f7 background)
13. Implement Footer component (dark bg, multi-column, Component Dock link)
14. Compose all sections in App.tsx in correct order
15. Write tests for all components (100% coverage)
16. Set up public/CNAME and package.json homepage
17. Run verify-app.sh and gate checks

## Design notes

### Section order (1:1 with source)
1. Navbar (fixed, transparent → solid)
2. HeroSlider (4 slides, full viewport)
3. CourseCategories (floating dark bar, 6 tiles)
4. PopularCourses (carousel)
5. Counters (parallax, animated numbers, testimonial)
6. Instructors (grid)
7. OurCourses (detailed cards)
8. Events (date-based listing)
9. Blog (light grey bg #f2f3f7)
10. Footer (dark #1a1a1a, multi-column)

### Key fidelity points
- Sharp/square button edges (no border-radius) — this is distinctive
- Search bar floats over hero with negative margin-top
- Parallax effect on counters section (background-attachment: fixed)
- Gold accent (#F7AF1D) on some icons/highlights
- Rubik font throughout, weight 300 body / 400 headings
- Dark overlays on hero images and parallax sections
- Owl Carousel equivalent → can use a simple CSS-based carousel or a lightweight React carousel

### Placeholder images
- Hero slides: `https://picsum.photos/seed/knowhub-hero-1/1920/1080` etc.
- Course images: `https://picsum.photos/seed/knowhub-course-1/400/300` etc.
- Instructor photos: `https://picsum.photos/seed/knowhub-instructor-1/200/200` etc.
- Event/blog images: `https://picsum.photos/seed/knowhub-event-1/400/250` etc.

### CSS token mapping to Tailwind
```css
@theme {
  --color-brand-primary: #4586ff;
  --color-brand-secondary: #5f97ff;
  --color-brand-accent: #F7AF1D;
  --color-bg-dark: #302a39;
  --color-bg-dark-2: #1a1a1a;
  --color-bg-light: #f2f3f7;
}
```
