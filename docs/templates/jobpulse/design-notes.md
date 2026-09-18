# JobPulse — Design Notes

Source: ColorLib Jobsco (https://preview.colorlib.com/theme/jobsco/)

## Section order and structure

1. **Navbar** — Fixed/sticky. Brand left ("JobPulse"), nav center, auth buttons right.
   - Desktop: horizontal links + login/register buttons
   - Mobile: hamburger menu, slide-in drawer
   - Transparent initially, solid white on scroll

2. **Hero** — Light grey (`#F1F5F9`) background, full-width.
   - Left side: subtitle "Easiest way to find a perfect job" (small, muted), heading "Find Your Next Dream Job" (large, navy), two CTAs
   - Right side: hero illustration image
   - Decorative: bouncing shape images, large "jobs" watermark text (extremely large, low opacity)
   - Primary button: solid `#000DFF`, white text, sharp corners (0 radius), shadow `0px 15px 20px rgba(0,13,255,0.12)`
   - Secondary button: outline/text style "Find Talent"

3. **Top Jobs** — White background section.
   - "Browse From Our Top Jobs" centered heading
   - Horizontal slider/carousel of 6 job cards
   - Each card: company icon (circular), job title, tag pills, salary text
   - Left/right arrow navigation
   - Cards on white background with subtle shadow

4. **About** — Light grey (`#F1F5F9`) background, padded section.
   - Split layout: image left (50%), content right (50%)
   - Heading: "We Build Lasting Relationships Between Candidates & Businesses"
   - Two descriptive paragraphs
   - "Find Talent" button (solid blue, sharp corners)
   - Large "Talents" watermark text in background (low opacity)

5. **Job Categories** — White background, padded section.
   - "Browse From Top Categories" centered heading
   - 6 category cards in 3×2 grid
   - Each card: circular icon image + category title below
   - Cards have hover effect

6. **Testimonials** — White background section.
   - Carousel with dot navigation
   - Each slide: quote icon, quote paragraph, founder avatar (circular), name, role
   - Decorative shape overlay on right side

7. **Footer** — Light grey (`#F1F5F9`) background, padded.
   - 3-column grid:
     - Col 1: Logo image + description paragraph + social icons (Instagram, Facebook, LinkedIn)
     - Col 2: "Useful links" heading + list of links
     - Col 3: "Subscribe Newsletter" heading + description + email input + arrow submit button
   - Bottom bar: border-top, copyright text centered, "Component Dock" link

## Fidelity notes

- The original uses Bootstrap 4 grid and classes. Recreate with Tailwind equivalents:
  - `container` → `max-w-7xl mx-auto px-4`
  - `row` → `flex flex-wrap`
  - `col-xl-6` → `w-full lg:w-1/2`
  - `section-padding` → `py-16 px-4`
  - `gray-bg` → `bg-[#F1F5F9]`
  - `btn` → `bg-[#000DFF] text-white px-6 py-3 uppercase text-sm font-medium`
  - `hero-btn` → add shadow `shadow-[0px_15px_20px_rgba(0,13,255,0.12)]`
  - `section-tittle` → `text-3xl font-bold text-[#00044A]`
  - `slider-height` → `min-h-[600px]` or similar

- Buttons are SHARP (border-radius: 0) — this is a key design trait of Jobsco. Do not add rounded corners.

- The hero has decorative shape images (bounce-animate). Use CSS animations for the bouncing effect, or simplified geometric shapes.

- The "jobs" and "Talents" watermark texts are extremely large (likely 200px+ font-size), very low opacity, positioned absolutely in the background.

- The Top Jobs carousel: implement with a simple overflow-x scroll or a state-managed carousel. Cards should be visible in a horizontal row with arrow navigation.

- Testimonial carousel: simple state-managed slider with dot indicators.

- All images use `picsum.photos/seed/<template>-<variant>/<w>/<h>` for deterministic placeholders.

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| App | `src/App.tsx` | Composes all sections in order |
| Navbar | `src/components/Navbar.tsx` | Sticky, transparent→solid on scroll, mobile drawer |
| Hero | `src/components/Hero.tsx` | Grey bg, headline, two CTAs, watermark, illustration |
| TopJobs | `src/components/TopJobs.tsx` | Horizontal card carousel with arrows |
| About | `src/components/About.tsx` | Split layout, watermark text |
| Categories | `src/components/Categories.tsx` | 3×2 grid of icon cards |
| Testimonials | `src/components/Testimonials.tsx` | Carousel with dots |
| Footer | `src/components/Footer.tsx` | 3-col grid + newsletter form |

## Theme tokens (for `src/index.css`)

```css
@theme {
  --color-brand: #000DFF;
  --color-brand-dark: #00044A;
  --color-text-muted: #6D6E8D;
  --color-text-secondary: #635c5c;
  --color-surface-light: #F1F5F9;
  --color-surface-offwhite: #FBFBFB;
  --color-surface-warm: #F7F7F7;
  --color-accent-green: #27CB8B;
  --color-white: #ffffff;
}
```
