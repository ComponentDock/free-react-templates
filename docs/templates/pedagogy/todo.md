# Pedagogy — Implementation Notes

**Source:** ColorLib Onedu (https://preview.colorlib.com/theme/onedu/)
**New name:** pedagogy
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order (top to bottom)

1. Navbar
2. Hero (search form)
3. About (split layout)
4. Popular Courses (carousel)
5. Featured Courses (carousel)
6. Become an Instructor (split layout)
7. Testimonials (carousel)
8. Explore Categories (grid)
9. Footer (4-column)
10. Footer Bottom (copyright)

## Component Breakdown

### Navbar (`Navbar.tsx`)

- Sticky header with logo, pill-shaped search input, nav links
- Nav: Home, Browse Courses, About, Blog (with dropdown submenu), Contact
- Cart icon (use lucide-react `ShoppingCart`) with badge count
- "Sign In" button (styled with `.btn` — bg #5A4E8C)
- Mobile: hamburger menu using React state toggle
- Search input: rounded-full, height 48px, placeholder "Search courses.."

### Hero (`Hero.tsx`)

- Full-width section with background image (use picsum.photos)
- Two-column: left text + search, right hero image
- Headline: "Learn new skills online with top educators" (h1, Jost font)
- Subtext: "Learn 100% online with world-class universities and industry experts."
- Search form: large input (h-20) with orange (#EA5252) search icon button on right

### About (`About.tsx`)

- Background: #EFFDFF (section-bg)
- Two-column: image left (5 cols), text right (5 cols with offset)
- Heading: "The world's largest selection of online courses"
- Description paragraph about the platform
- CTA: "Browse Courses" button (bg #5A4E8C, border-radius 4px)

### PopularCourses (`PopularCourses.tsx`)

- Heading: "Students are viewing" (centered, h2)
- Carousel of course cards (use a simple CSS grid with horizontal scroll or a lightweight carousel)
- Card structure: image with price badge overlay, title, author, 5-star rating
- Course data: 4+ items with title, author, price, rating, image seed

### FeaturedCourses (`FeaturedCourses.tsx`)

- Heading: "The world's largest selection of courses"
- Subtitle: "Choose from 130,000 online video courses with new additions published every month"
- Same card layout as PopularCourses

### BecomeInstructor (`BecomeInstructor.tsx`)

- Background: #EFFDFF
- Two-column: left text + features, right image/video placeholder
- Heading: "Become an Instructor"
- 3 feature items with checkmark icons (use lucide-react `Check`)
- CTA: "Become a Instructor" button
- "Watch Video" link with play icon (use lucide-react `Play`)

### Testimonials (`Testimonials.tsx`)

- Heading: "Student says about us"
- Carousel with testimonial slides
- Each slide: avatar image, quote paragraph, student name, role "Student at Pedagogy"
- 2+ slides with auto-rotation

### ExploreCategories (`ExploreCategories.tsx`)

- Heading: "Explore top categories"
- Grid: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Each card: image, category title, "View Categories" link
- Categories: Programming, VFX, App Development, Technology, etc.

### Footer (`Footer.tsx`)

- Dark background (#1A213D or similar dark shade)
- 4 columns: Logo + description + social, Subjects, Community, Company
- Newsletter subscribe form: email input + "Subscribe" button
- Social icons: Twitter, Facebook, Pinterest (use lucide-react)
- MUST include link to https://www.componentdock.com/

### FooterBottom (`FooterBottom.tsx`)

- Copyright line with current year
- Attribution text (no ColorLib — replaced with Component Dock reference)

## Design Token Usage in Tailwind

```css
/* src/index.css @theme block */
@theme {
  --color-brand-primary: #ff6f00;
  --color-brand-secondary: #ea5252;
  --color-brand-dark: #1a213d;
  --color-brand-purple: #5a4e8c;
  --color-heading: #3c3b37;
  --color-body: #6a6a6a;
  --color-section-light: #f9f9ff;
  --color-section-alt: #fbf9ff;
  --color-section-about: #effdff;
  --color-border: #f0e9ff;
}
```

## Fidelity Notes

- The original uses Bootstrap grid (col-xl-3, col-lg-4, etc.) — translate to Tailwind grid/flex
- Original course cards use Owl Carousel — use CSS scroll-snap or a lightweight React carousel
- Original hero uses Slick slider — simplify to static hero with search form
- Star ratings: use lucide-react `Star` filled icons (5 per card)
- Price badge: absolute positioned top-left on card image, bg white with padding
- The "Become an Instructor" section has a video popup — use a placeholder play button that could open a modal
- Mobile menu: the original uses slicknav jQuery plugin — implement with React state
- All images should use picsum.photos with deterministic seeds matching the category

## Image Seeds (picsum.photos)

- Hero background: `picsum.photos/seed/pedagogy-hero/1920/700`
- Hero image: `picsum.photos/seed/pedagogy-student/600/500`
- About image: `picsum.photos/seed/pedagogy-about/500/600`
- Course images: `picsum.photos/seed/pedagogy-course-{1..8}/400/300`
- Category images: `picsum.photos/seed/pedagogy-cat-{1..6}/400/250`
- Testimonial avatars: `picsum.photos/seed/pedagogy-avatar-{1..3}/100/100`
- Instructor image: `picsum.photos/seed/pedagogy-instructor/500/600`
