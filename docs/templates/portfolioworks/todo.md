# Portfolioworks — Implementation Tasks

Source: ColorLib "Portfolio" (slug: `portfolio`)
Preview: https://preview.colorlib.com/theme/portfolio/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-free-template.jpg

## Section-by-Section Fidelity Notes

### 1. Navbar
- Transparent background over hero, solid white on scroll
- Logo: "PortfolioWorks" with a simple icon (use lucide-react `Layers` or similar)
- Nav links: Home, Portfolio, Services, Testimonial
- "Pages" dropdown: Generic, Elements (simplified — can skip or make static)
- Mobile: hamburger toggle, full-screen overlay nav
- Use `packages/ui` Navbar if available, otherwise build fresh

### 2. Hero Banner
- Full viewport height (`min-h-screen`)
- Background image via `picsum.photos/seed/portfolioworks-hero/1920/1080`
- Dark overlay: `bg-black/50`
- Rounded corners: `rounded-xl` (10px)
- Subtitle: uppercase, `text-[#8ab92d]`, 12px, tracking-[3px], font-light
- Headline: 72px (`text-7xl`), bold, white
- CTA: pill button, `bg-[#8ab92d]`, white text, uppercase, `rounded-full`
- Content centered with flex

### 3. Portfolio Grid
- Section heading + subtitle (centered)
- Filter tabs: ALL, VECTOR, RASTER, UI/UX, PRINTING
  - Active tab: `text-[#8ab92d]`
  - Use `useState` for active filter, filter items by category prop
- 3-column grid (`grid grid-cols-3 gap-4`)
- 12 items total, each with:
  - Image from `picsum.photos/seed/portfolioworks-N/600/400`
  - Overlay on hover: slide up with title + category
  - `rounded` corners (3px)
- Categories: corporate, personal, agency, portal (mapped to Vector, Raster, UI/UX, Printing)

### 4. Services Parallax
- Background image via `picsum.photos/seed/portfolioworks-service/1920/600`
- Dark overlay: `bg-[#04091e]/80`
- Rounded corners: `rounded-xl`
- White heading + subtitle text
- Minimal section — just heading + subtitle

### 5. Services Grid
- 3 columns, white bg
- Each service card: icon (lucide-react), title, description
- Icons: `Pen`, `Briefcase`, `Palette` (or similar)
- Titles: "Vector Artworks", "Corporate Identity", "Art Direction Design"
- Generous padding between cards

### 6. Testimonials
- Centered heading + subtitle
- 2x2 grid of review cards
- Each: circular avatar (picsum.photos/seed/portfolioworks-avatar-N/100/100), name, star rating, paragraph
- Star ratings: use lucide-react `Star` (filled vs outline)
- Reviewers: Fannie Rowe (3★), Lillie Summers (3★), Hulda Sutton (4★), Ruth Burns (2★)

### 7. Footer
- Dark bg: `bg-[#04091e]`
- 3 columns:
  - About Us: heading + lorem paragraph + copyright with year
  - Newsletter: heading + email input + submit arrow button
  - Follow Us: heading + social icons (Facebook, Twitter, Dribbble, Behance via lucide-react)
- Must include "Made with Component Dock" link (replacing Colorlib attribution)

## Build Order

1. Scaffold `apps/portfolioworks/` (copy simplest existing app, rename package)
2. Set up `index.css` with `@theme` tokens: `--color-brand: #8ab92d`, `--color-dark: #04091e`
3. Build Navbar component
4. Build Hero component (full-screen + overlay + CTA)
5. Build PortfolioGrid component (filter tabs + grid + hover effects)
6. Build ServicesParallax component
7. Build ServicesGrid component
8. Build Testimonials component
9. Build Footer component
10. Compose in App.tsx
11. Write tests (TDD — one describe per component, scenario-style its)
12. Verify 100% coverage
13. Build succeeds
