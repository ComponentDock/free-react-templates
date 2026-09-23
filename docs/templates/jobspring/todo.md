# JobSpring — Implementation Notes

Source: ColorLib Job Board 2
Preview: https://preview.colorlib.com/theme/job-board-2/ (unreachable, using screenshot)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobboard2-free-template.jpg

## Section implementation order

1. **Navbar.tsx** — Sticky top, white bg, logo + nav links + CTA button
2. **Hero.tsx** — Blue full-width, split layout (text left, illustration right)
3. **JobSearch.tsx** — White bg, search form (keyword + location + category + button), popular tags
4. **PopularCategories.tsx** — Light gray bg, 2×4 grid of cards with count badges
5. **FeaturedCompanies.tsx** — White bg, row of logo placeholders
6. **RecentJobs.tsx** — Light gray bg, list of job cards with details
7. **Testimonials.tsx** — White bg, testimonial cards with avatars
8. **CtaBanner.tsx** — Blue bg matching hero, heading + CTA button
9. **Footer.tsx** — Dark bg, 4-column layout, social icons, Component Dock link

## Design fidelity notes

- Hero blue: `bg-[#1a73e8]` or define in `@theme` as `--color-brand: #1a73e8`
- Green accent: `bg-[#28a745]` for buttons and badges
- Button style: `rounded-full` (pill), padding `px-6 py-3`, green bg, white text
- Category cards: `bg-white rounded-[10px] shadow-md p-6`
- Font: Import Poppins from Google Fonts in index.html
- Hero illustration: Use picsum.photos or an SVG placeholder
- Company logos: Use picsum.photos with grayscale filter

## Component structure

```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    JobSearch.tsx
    PopularCategories.tsx
    FeaturedCompanies.tsx
    RecentJobs.tsx
    Testimonials.tsx
    CtaBanner.tsx
    Footer.tsx
  index.css
  main.tsx
```

## Testing strategy

- One test file per component (colocated *.test.tsx)
- Test rendering of each section
- Test button click handlers (navigation, form submit)
- Test responsive behavior
- 100% coverage required
