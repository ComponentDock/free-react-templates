# Craftline — Implementation Tasks & Design Notes

**Source:** ColorLib Breed2 (https://preview.colorlib.com/theme/breed2/)
**New name:** craftline
**Stack:** Vite + React 19 + Tailwind 4 + TypeScript

## Section-by-section implementation order

### 1. Project scaffold
- Copy simplest existing app as base (e.g. apps/abjure or similar minimal template)
- Rename package to `@free-react-templates/craftline`
- Set up `public/CNAME` with `craftline.free.componentdock.com`
- Add Google Fonts link for Roboto (300, 400, 500, 700) in `index.html`
- Configure theme tokens in `src/index.css`:
  ```
  --color-brand-primary: #1345e6;    /* blue */
  --color-brand-accent: #ed239f;     /* pink */
  --color-heading: #05364d;          /* dark teal */
  --color-body: #797979;             /* muted gray */
  --color-card-bg: #f8faff;          /* light blue-gray */
  --color-service-hover: #5f30ff;    /* purple */
  --color-nav-active: #efb6df;       /* light pink */
  --color-star: #ffd804;             /* gold */
  --color-footer-bg: #021017;        /* very dark */
  --color-footer-link: #a932c7;      /* purple */
  ```

### 2. Navbar component
- Transparent overlay at top, fixed on scroll (white bg + box-shadow)
- Logo left, nav links right (Home, About, Portfolio, Blog, Contact)
- Mobile hamburger toggle
- Use `useScroll` hook or IntersectionObserver for scroll detection

### 3. Hero / Banner component
- Split layout: left text column + right illustration
- Greeting "Hey There!", name heading, subtitle, social icons row, CTA
- Background image covering full width
- Social icons: use lucide-react icons (Twitter → Twitter, Skype → Phone, Instagram → Instagram, Dribbble → Palette, Vimeo → Video)
- CTA button with gradient bg (blue → pink → blue), 5px radius

### 4. Statistics component
- 3-column row with negative top margin (overlap hero)
- Light blue-gray background cards
- Numbers with gradient text (blue → pink via background-clip)
- Counter animation optional (original uses counter.js)

### 5. About component
- Two-column: left image, right text
- Section title with pink blur underline accent
- Heading + paragraph + Download CV button
- Responsive: hide image on mobile

### 6. Services component
- 3-column grid of service cards
- Each card: icon/image, title, description, "Learn More" link
- Cards have `#f8faff` bg; hover transitions to purple bg + white text
- Use CSS transition for the hover effect

### 7. Testimonials component
- Carousel/slider (consider embla-carousel or similar)
- Each slide: two-column — left image, right text
- Client name, role, testimonial paragraph, 5-star rating
- Decorative background shape (optional)

### 8. Portfolio component
- Filter tabs: all, popular, latest, following, upcoming
- Mixed grid layout (varying column widths)
- Each item: image with hover overlay (blue bg, project title + category)
- Implement filter with React state

### 9. Blog component
- 3-column cards
- Each: image thumbnail, meta row (author icon + date icon), title, excerpt, "Learn More" link
- Cards have `#f8faff` bg; hover adds box-shadow
- Hover also scales image slightly

### 10. Brands component
- Auto-scrolling logo carousel
- 5-6 brand logos (use placeholder SVGs or simple text logos)

### 11. Footer component
- Dark background (#021017)
- Centered logo
- Nav links row
- Social icons in circular white buttons with gradient hover
- Copyright with Component Dock link (mandatory)

## Fidelity notes

- The original uses Bootstrap grid — translate to Tailwind grid/flex utilities
- Original carousel uses Owl Carousel — replace with a React carousel solution
- Original uses Isotope for portfolio filtering — implement with React state + CSS transitions
- The statistics section has negative margin to overlap the hero — replicate with relative positioning
- Social icons use Themify Icons — replace with lucide-react equivalents
- Service card hover effect: background transitions from #f8faff to #5f30ff
- Footer social buttons are circular (border-radius: 36px) with gradient on hover
- The pink blur underline on section titles is achieved via a `span` with `filter: blur(4px)` — recreate with a pseudo-element or a small div with blur
