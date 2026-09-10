# JobBoard — Design Notes

Source: ColorLib Careers (https://preview.colorlib.com/theme/careers/)

## Section order and structure

1. **Navbar** — Fixed/sticky. Brand left ("JobBoard"), nav center, CTA right.
   - Desktop: horizontal links + Contact Us button
   - Mobile: hamburger menu, slide-in drawer

2. **Hero** — Full-bleed background image with blue-tinted overlay (`rgba(22,68,186,0.9)`).
   - Centered text: headline + subline
   - Search form row: 3 input groups (keyword text, location select, type select) + search button
   - Button: solid `#1644ba`, white text, rounded `0.3rem`, icon + label

3. **Stats banner** — Same blue overlay background image as hero.
   - "Job Board Statistics" heading
   - 4-column grid of stat counters with animated count-up on scroll-enter
   - Each: large number, small label beneath

4. **Job listings** — White background, padded section.
   - "Featured Jobs" heading
   - List of job cards separated by bottom borders
   - Each card: left blue border accent (`#1644ba`), title + company + type badge + location + salary + date
   - "View More Jobs" outline button at bottom

5. **Company logos** — White or light background.
   - "Top Companies Hiring" heading
   - Horizontal row of greyscale logo placeholders (flex, wrap)
   - Hover: full colour (CSS filter transition)

6. **Testimonials** — Light grey (`#f8f9fa`) background.
   - Carousel/swiper with avatar image, person name, role, quote text
   - Navigation dots below

7. **CTA banner** — Blue overlay on hero image (same treatment as hero).
   - "Ready to Start?" heading
   - Subtext
   - "Browse Jobs" button (solid blue)

8. **Footer** — Dark background.
   - 4-column grid: Brand + description, Quick Links, Company, Contact info
   - Social media icon row
   - Copyright: "© 2026 JobBoard. All rights reserved. Made with Component Dock."

## Fidelity notes

- The original uses Bootstrap 4 grid and classes. Recreate with Tailwind equivalents:
  - `container-fluid` → `w-full`
  - `row` → `flex flex-wrap`
  - `col-md-*` → responsive Tailwind grid or flex
  - `btn-primary` → `bg-[#1644ba] text-white rounded-[0.3rem]`
  - `site-section` → `py-16 px-4`
  - `overlay` → `bg-black/70` or `bg-[#1644ba]/90`
  - `bg-image` → `bg-cover bg-center`
  - `section-title` → `text-2xl font-bold mb-4`

- The stats counter animation: use IntersectionObserver to trigger count-up when section enters viewport.

- Search form: build as a responsive flex row. The original uses `form-control form-control-lg` — use Tailwind `text-lg py-3 px-4`.

- Job item list: each row is a flex grid. The original uses Bootstrap row/col inside `.job-item`. Recreate with a Tailwind grid: `grid grid-cols-1 md:grid-cols-6 gap-4 items-center`.

- Testimonials: implement as a simple carousel with state (active index) and dot navigation. No external dependency needed.

- All images use `picsum.photos/seed/<variant>/<w>/<h>` for deterministic placeholders.

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| App | `src/App.tsx` | Composes all sections in order |
| Navbar | `src/components/Navbar.tsx` | Sticky, mobile drawer |
| Hero | `src/components/Hero.tsx` | Background image, search form |
| Stats | `src/components/Stats.tsx` | 4 animated counters |
| JobListings | `src/components/JobListings.tsx` | List of job cards |
| Companies | `src/components/Companies.tsx` | Logo row |
| Testimonials | `src/components/Testimonials.tsx` | Carousel |
| CTA | `src/components/CTA.tsx` | Blue overlay banner |
| Footer | `src/components/Footer.tsx` | 4-col grid + social |

## Theme tokens (for `src/index.css`)

```css
@theme {
  --color-brand: #1644ba;
  --color-brand-hover: #1747c3;
  --color-brand-overlay: rgba(22, 68, 186, 0.9);
  --color-surface: #f8f9fa;
  --color-card: #ebeef0;
}
```
