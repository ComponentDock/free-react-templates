# Learnfold — Implementation Notes

Source: ColorLib Webuni (https://colorlib.com/wp/template/webuni/)
Preview: https://preview.colorlib.com/theme/webuni/
New name: learnfold (apps/learnfold)

## Design Notes

### Visual Aesthetic
Clean, professional education platform. Crimson-red (#d82a4e) as the dominant
brand color on buttons, section backgrounds, and accent borders. Light blue-grey
(#edf4f6) as the secondary surface for cards and footer. White for contrast.
Raleway font gives a modern, geometric feel. Large vertical spacing (115px
section padding) creates an airy, premium layout.

### Section Structure (implementation order)

1. **Navbar** — Logo left, nav links + login button right. Transparent/white BG.
   Use `flex` with `justify-between`. Login button: `.site-btn` style.

2. **Hero** — Full-width bg image via `<img>` or CSS background. White text
   overlay. Form at bottom with two inputs + CTA button. The form sits inside
   a `col-lg-10 offset-lg-1` (centered, slightly narrower than full width).

3. **CourseCategories** — Section heading + subtitle + 3×2 grid. Each card:
   image thumb (top), text block below with title, description, course count.
   Card BG: #edf4f6. Use `grid grid-cols-3 gap-6` or Tailwind grid.

4. **SearchSection** — Full-width #d82a4e BG. White heading. Two inputs
   (Course, Category) + Search button. Form centered with `max-w-3xl`.

5. **FeaturedCourses** — Filter tabs row (mixItUp pattern → simple React state
   filter). 4-column grid of course cards. Each card: image with price badge
   (absolute positioned, #d82a4e BG, white text), text info, author row
   (avatar circle + name). 8 sample courses across 4 categories.

6. **SignupSection** — Two-column layout: left = form on #d82a4e, right =
   background image (parallax/cover). Form fields: name, email, phone, file
   upload (styled label), submit button. Heading + subtitle above form.

7. **BannerCTA** — Centered text + button. Simple section with padding and
   centered content. Button uses .site-btn style.

8. **Footer** — 5-column widget row on white BG with #d82a4e top border.
   Contact Info, 3 link columns, Newsletter form. Footer-bottom with
   #edf4f6 BG, terms links + copyright + Component Dock attribution.

### Fidelity Notes

- **Button shape:** Rectangular, NO border-radius. min-width ~196px, padding
  15px 10px. This is critical — do not round.
- **Section padding:** 115px top and bottom for .spad sections. Large rhythm.
- **Background images:** Hero and signup-section use large background images.
  Use picsum.photos with deterministic seeds.
- **Course filter:** Original uses MixItUp JS. Implement with React state
  filter on a `category` field per course.
- **Author avatars:** Small circular images in course cards. Use picsum.
- **Price badges:** Absolute-positioned on course thumbnails, #d82a4e BG.
- **Footer attribution:** Replace Colorlib credit with Component Dock link.

### Component Map

```
App.tsx
├── Navbar.tsx
├── Hero.tsx
├── CourseCategories.tsx
├── SearchSection.tsx
├── FeaturedCourses.tsx
│   └── CourseCard.tsx (reusable)
├── SignupSection.tsx
├── BannerCTA.tsx
└── Footer.tsx
```
