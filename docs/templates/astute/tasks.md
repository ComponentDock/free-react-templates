# Astute — Implementation Tasks & Design Notes

**Source:** ColorLib "Clever" (https://colorlib.com/wp/template/clever/)
**Preview:** https://preview.colorlib.com/theme/clever/
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section-by-section implementation order

### 1. App scaffolding
- Copy simplest existing app as starting point
- Rename package to `@free-react-templates/astute`
- Update `vite.config.ts` with `injectUiSource()` pattern
- Set up `src/index.css` with Tailwind entry + brand tokens:
  - `--color-brand: #3762F0`
  - `--color-brand-hover: #2C56DF`
  - `--color-text-heading: #1F1F1F`
  - `--color-text-body: #5A5A5A`
- Load Google Fonts (Open Sans + Raleway) in `index.html`

### 2. Header component (`Navbar.tsx`)
- Top bar: flex between contact info (phone, email) and social icons (FB, IG, Twitter)
- Main navbar: logo left, nav links center, search + register/login right
- Mobile hamburger toggle with slide-in menu
- Sticky on scroll (white bg transition)

### 3. Hero component (`Hero.tsx`)
- Full-width section with background image + dark overlay (20% black)
- Centered content: "Let's Study Together" h2 + "Get Started" pill button
- Use picsum.photos for background image
- Pill button: brand blue bg, white text, radius 50px, height 40px, min-width 160px

### 4. Stats component (`Stats.tsx`)
- 4-column responsive grid (col-3 on lg, col-6 on sm)
- Each stat: icon (lucide-react), animated counter number, label
- Data: 1912 Success Stories, 123 Dedicated Tutors, 89 Scheduled Events, 56 Available Courses
- White background, padding-top 100px

### 5. PopularCourses component (`PopularCourses.tsx`)
- Subtle texture/repeating bg (use a light pattern or solid light bg)
- Section heading "Popular Online Courses"
- 3-column grid of course cards
- Each card: image top, title, meta row (date + fee)
- Use placeholder images via picsum.photos

### 6. BestTutors component (`BestTutors.tsx`)
- White background
- Section heading "The Best Tutors in Town"
- Horizontal scrollable / carousel of tutor cards
- Each card: photo left, info right (name, role, bio paragraph, social icons)
- Use different tutor names (not all "Alex Parker")
- Carousel: simple horizontal scroll or CSS snap (avoid heavy deps)

### 7. RegisterNow component (`RegisterNow.tsx`)
- Texture/repeating bg + light blue overlay (`rgba(214,223,251,0.7)`)
- Flex layout: form (45%) + countdown promo (45%)
- Form: "Courses For Free" heading, Name/Email/Phone/Site inputs (border-radius 6px, border #EBEBEB), "Send Message" pill button (full-width)
- Countdown: heading, description, 3 countdown blocks with yellow (#E3D21B) bg
- Mobile: stack vertically

### 8. UpcomingEvents component (`Events.tsx`)
- White background
- Section heading "Upcoming events"
- 3-column grid of event cards
- Each card: image with date badge overlay + title, below: time + fee
- Data: Networking Day ($45), Open Doors Day (Free), Creative Leadership ($45)

### 9. Blog component (`Blog.tsx`)
- White background
- Section heading "From Our Blog"
- 2-column grid of blog cards
- Each card: image, headline link, author + category meta (dot separator), excerpt

### 10. Footer component (`Footer.tsx`)
- Top footer: logo + copyright with Component Dock link
- Bottom footer: contact info (phone, email) + social follow icons
- Dark overlay background (rgba(0,0,0,0.91))

## Fidelity notes

- Section order must match exactly: Header → Hero → Stats → Courses → Tutors → Register → Events → Blog → Footer
- All sections use `section-padding-100` (100px top and bottom) except hero (full height) and register (100px top, 0 bottom)
- Buttons are pill-shaped (radius 50px), brand blue (#3762F0), 40px height
- Form inputs have 6px border-radius with #EBEBEB border
- Texture background appears on courses section and register section
- The register section uses a semi-transparent light blue overlay
- Mobile: all grids stack, hamburger menu for nav
- Do NOT use Font Awesome — use lucide-react icons instead
- Do NOT copy images — use picsum.photos with deterministic seeds

## Dependencies to check
- lucide-react for icons (stat icons, social icons, search, clock, etc.)
- No carousel library needed — use CSS scroll-snap for tutors
