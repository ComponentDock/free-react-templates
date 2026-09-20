# StudyPad — Implementation Todo & Design Notes

Source: ColorLib "StudyLab" → https://colorlib.com/wp/template/studylab/
Preview: https://preview.colorlib.com/theme/studylab/
New name: `studypad` (apps/studypad, @free-react-templates/studypad)

## Section order (from top to bottom)

1. Navbar
2. Hero banner (with overlaid registration form)
3. Course categories (circular thumbnails)
4. Pick Your Course (course cards grid)
5. Statistics counter (parallax)
6. About section (background image)
7. Testimonials (carousel)
8. Intro CTA (gradient band)
9. Services (icon cards)
10. Recent blog posts
11. Footer (multi-column)

## Section-by-section fidelity notes

### 1. Navbar
- Dark background (#1a1a1a), white text
- Logo: "Study" in normal weight + "Lab" in bold → "StudyPad"
- Links: Home, About, Course, Instructor, Blog, Contact
- Mobile: hamburger toggle with collapse
- Sticky on scroll (becomes lighter/shadowed)
- Use: `packages/ui` Navbar or build custom with `cn()`

### 2. Hero banner + Registration form
- Full-width background image (use picsum.photos placeholder)
- Dark overlay at 50% opacity
- Left side: subheading "Welcome to StudyPad", heading "We Are Online Platform For Make Learning"
- Two buttons: "Our Course" (primary blue #4986fc, filled) + "Learn More" (white outline)
- Right side: WHITE CARD overlapping hero
  - "Register Now" heading
  - 4 fields: Full Name, Email, Password, Confirm Password
  - Submit button: blue circle with paper-plane icon (Lucide: Send)
  - "Already have an account? Sign In" link below form
- Form card position: absolute or negative margin to float over hero

### 3. Course categories
- White background section
- "Start Learning Today" subheading (blue #4986fc, uppercase)
- "Browse Online Course Category" heading
- 6 circular thumbnails (border-radius: 50%, ~110px)
- Categories: IT & Software, Music, Photography, Marketing, Health, Audio Video
- Each circle shows category name + "100 Course" in white overlay text
- Use picsum.photos for circular images
- "See All Courses" button: pink (#e449ad), rounded, centered

### 4. Pick Your Course
- Light grey background (#f8f9fa)
- "Pick Your Course" heading centered
- 6 course cards in a 3-column grid
- Each card: image thumbnail, price badge (blue), instructor name, course title
- Star rating (5 stars), student count, duration
- Cards have subtle box-shadow
- Use `packages/ui` Card component

### 5. Statistics counter
- Full-width section with parallax background image
- Dark overlay
- 4 columns: students, courses, staff, awards
- Each has animated number (count up from 0) + label text
- Numbers: use a simple useEffect + IntersectionObserver for scroll trigger
- Counter colors: white numbers on dark overlay

### 6. About section
- Full-width background image with dark overlay
- "Learn Anything You Want Today" heading
- Descriptive paragraph text
- White text on overlay

### 7. Testimonials
- Light grey background (#f8f9fa)
- "What Are Students Says" heading (left-aligned)
- Carousel/slider with student testimonials
- Each testimonial: avatar image, student name, quote text
- Dot navigation or arrows
- Use simple CSS snap or a lightweight carousel approach

### 8. Intro CTA
- Two-column layout
- Left: "We Are StudyLab An Online Learning Center" heading + description + "Enroll Now" button
- Right: same heading repeated (original has duplicate)
- Background: gradient from blue (#4986fc) to purple (#ce4be8)
- White text
- This is a visually prominent call-to-action band

### 9. Services
- White background
- Two-column layout: left has heading + description, right has 2x2 grid of service items
- Each service: icon (Lucide equivalent), heading, short description
- Services: Top Quality Content, Highly Skilled Instructor, World Class Quiz, Get Certified
- Use Lucide icons (BookOpen, GraduationCap, Trophy, Award or similar)

### 10. Recent blog posts
- Light grey background (#f8f9fa)
- "Recent Post" heading centered
- 3 blog post cards in a row
- Each card: image, date, author, title, brief excerpt
- Use picsum.photos for blog images

### 11. Footer
- Dark background (#1a1a1a)
- Multi-column: logo + description, Customer Care links, Legal Help links, Recent posts
- Social media icons in the bottom bar
- Copyright line
- MUST include "Component Dock" link (replace any Colorlib attribution)

## Component mapping

| Section        | Component file               | Notes                          |
| -------------- | ---------------------------- | ------------------------------ |
| Navbar         | Navbar.tsx                   | Dark, sticky, mobile collapse  |
| Hero+Form      | Hero.tsx                     | Background image + overlay + form card |
| Categories     | CourseCategories.tsx         | 6 circular thumbnails          |
| Course cards   | CourseCards.tsx              | 3x2 grid, card component       |
| Counter        | StatisticsCounter.tsx        | Animated numbers, parallax     |
| About          | About.tsx                    | Background image section       |
| Testimonials   | Testimonials.tsx             | Carousel/slider                |
| Intro CTA      | IntroCTA.tsx                 | Gradient band                  |
| Services       | Services.tsx                 | Icon cards 2x2 grid            |
| Blog posts     | RecentPosts.tsx              | 3 blog cards                   |
| Footer         | Footer.tsx                   | Multi-column, dark             |

## Placeholder images

- Hero: `https://picsum.photos/seed/studypad-hero/1920/1080`
- Course categories: `https://picsum.photos/seed/studypad-cat-1/110/110` through `-cat-6`
- Course cards: `https://picsum.photos/seed/studypad-course-1/400/300` through `-course-6`
- Parallax counter: `https://picsum.photos/seed/studypad-parallax/1920/800`
- About background: `https://picsum.photos/seed/studypad-about/1920/700`
- Testimonial avatars: `https://picsum.photos/seed/studypad-avatar-1/80/80` through `-avatar-3`
- Blog posts: `https://picsum.photos/seed/studypad-blog-1/400/250` through `-blog-3`

## Design tokens (Tailwind theme)

```css
@theme {
  --color-brand-primary: #4986fc;
  --color-brand-secondary: #e449ad;
  --color-brand-accent: #fc9927;
  --color-brand-teal: #24d2c8;
  --color-brand-purple: #ce4be8;
}
```
