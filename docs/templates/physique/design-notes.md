# Physique — Design Notes

**Source:** ColorLib Fitness (https://colorlib.com/wp/template/fitness/)
**Preview:** https://preview.colorlib.com/theme/fitness/
**New name:** physique

## Component structure

```
App.tsx
├── Header.tsx
│   ├── TopBar (email | logo | phone)
│   └── Navbar (links + dropdowns)
├── HeroBanner.tsx
│   └── fullscreen bg + overlay + heading + CTA
├── TopCourses.tsx
│   └── section title + CourseCard[] (carousel)
├── CtaSplit.tsx
│   └── two side-by-side image panels
├── Features.tsx
│   └── image left + FeatureItem[] right
├── BmiCalculator.tsx
│   └── red overlay + form (height/weight) + button
├── ImageGallery.tsx
│   └── section title + GalleryImage[] (3x2 grid)
├── Testimonials.tsx
│   └── section title + TestimonialCard[] (carousel)
├── BrandLogos.tsx
│   └── logo strip (grayscale → color hover)
├── CtaBanner.tsx
│   └── dark overlay + centered heading + CTA
└── Footer.tsx
    ├── About Us column
    ├── Contact Us column
    ├── Newsletter column (email input + submit)
    └── copyright + social icons
```

## Section-by-section fidelity notes

### 1. Header
- Top bar: 3-column row (email left, logo center, phone right)
- Navbar below: horizontal links with dropdowns for Blog and Pages
- Mobile: hamburger menu (collapse nav)

### 2. Hero Banner
- Full viewport height (`100vh`)
- Background image with `rgba(0,0,0,0.2)` overlay
- Heading: white, uppercase, bold
- CTA: red `#f6214b` button, white text, no border-radius

### 3. Top Courses
- Carousel of course cards (use a React carousel library or CSS scroll-snap)
- Each card: image with "Join Now" overlay button (positioned bottom-left)
- Title + price row below image
- Red accent `#f6214b` for join button

### 4. CTA Split
- Two equal-width panels, each with background image
- Red overlay `rgba(246,33,75,0.75)` on each
- Heading + "Book Now" CTA per panel

### 5. Features
- Left: single image
- Right: 3 feature blocks (h4 title + paragraph)
- No icons — text-only feature items

### 6. BMI Calculator
- Background image with red overlay
- Form: 2 rows — height (label + input) and weight (label + input + button)
- White text, transparent inputs with white border

### 7. Image Gallery
- 3 columns × 2 rows = 6 images
- Use `picsum.photos/seed/physique-N/` for placeholders
- Clickable with lightbox (optional, can simplify)

### 8. Testimonials
- Carousel of testimonial cards
- Each: circular avatar, quote paragraph, name (h4), role
- Repeat items for carousel fill

### 9. Brand Logos
- 5 grayscale logos in a row
- On hover: full color + full opacity
- Use placeholder SVGs or brand-like images

### 10. Call-to-Action
- Dark overlay `rgba(0,0,0,0.5)` on background image
- Centered white heading + subtext + red CTA button

### 11. Footer
- White background, 3 columns
- Newsletter: email input + submit (red, pill-shaped `border-radius: 57px`)
- Social icons: Facebook, Twitter, Dribbble, Behance
- Copyright with Component Dock link (NOT Colorlib)

## Reuse opportunities from packages/ui

- `Button` / `ButtonLink` — primary CTA buttons
- `cn()` — all class composition
- Consider adding a `Section` wrapper if the pattern (section-gap + container + section-title) recurs enough
