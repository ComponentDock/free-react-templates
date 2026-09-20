# StudyDeck — Implementation Tasks

Source: ColorLib Studylab (https://colorlib.com/wp/template/studylab/)
Preview: https://preview.colorlib.com/theme/studylab/

## Task list

1. Scaffold app from simplest existing template (copy + rename)
2. Set up index.html with Google Fonts (Poppins) link
3. Set up Tailwind theme tokens in index.css (brand-primary #4986fc, brand-teal #24d2c8, brand-orange #fc9927, etc.)
4. Implement Navbar component (fixed top, hamburger for mobile)
5. Implement Hero component (full-viewport bg image, dark overlay, heading, registration form)
6. Implement CourseCategories component (6 colored icon tiles in grid)
7. Implement PopularCourses component (card grid with images, prices, instructors)
8. Implement Counters component (parallax bg, animated numbers)
9. Implement About component (two-column: text + image)
10. Implement Testimonials component (carousel on light background)
11. Implement Services component (4 feature cards with icons)
12. Implement Blog component (post cards on light background)
13. Implement Footer component (dark bg, multi-column, Component Dock link)
14. Compose all sections in App.tsx in correct order
15. Write tests for all components (100% coverage)
16. Set up public/CNAME and package.json homepage
17. Run verify-app.sh and gate checks

## Design notes

### Section order (1:1 with source)
1. Navbar (fixed, hamburger)
2. Hero (full viewport, bg image + dark overlay, registration form)
3. Course Categories (6 colored tiles)
4. Popular Courses (card grid)
5. Counters (parallax bg, animated numbers)
6. About (text + image side-by-side)
7. Testimonials (carousel, light bg #f9faff)
8. Services/Features (4 icon cards)
9. Blog (light bg, post cards)
10. Footer (dark, multi-column)

### Key fidelity points
- Registration form overlaid on the hero section (right side)
- Category tiles have distinct colors per category (teal, orange, purple, pink)
- Counter section uses background-attachment: fixed (parallax)
- Poppins font throughout
- Testimonial section on #f9faff light blue-white background
- Course cards show instructor avatar, name, rating, and price
- Services section uses icon cards in a grid

### Placeholder images
- Hero: `https://picsum.photos/seed/studydeck-hero/1920/1080`
- Course images: `https://picsum.photos/seed/studydeck-course-1/400/300`
- Instructor avatars: `https://picsum.photos/seed/studydeck-instructor-1/100/100`
- Blog images: `https://picsum.photos/seed/studydeck-blog-1/400/250`

### CSS token mapping to Tailwind
```css
@theme {
  --color-brand-primary: #4986fc;
  --color-brand-teal: #24d2c8;
  --color-brand-orange: #fc9927;
  --color-brand-purple: #ce4be8;
  --color-brand-pink: #e449ad;
  --color-bg-light: #f9faff;
}
```
