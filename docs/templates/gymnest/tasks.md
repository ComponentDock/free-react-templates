# GymNest — Implementation Tasks & Design Notes

**Source:** ColorLib Sportsfit (https://preview.colorlib.com/theme/sportsfit/)
**New name:** GymNest → `apps/gymnest`
**Package:** `@free-react-templates/gymnest`

## Section-by-Section Build Order

### 1. Header
- Dark background (`#262626`), container layout
- Logo: icon dot + "Gym" text + "Nest" text (colored span for "Nest")
- Nav: Home, About us, Classes & Services, Blog, Contact
- Phone number on right (`ml-auto`)
- Custom hamburger bar below header (not inside header)
- **Fidelity note:** Original uses Font Awesome for phone icon; use lucide-react Phone icon

### 2. Hero
- Full-width background image with dark overlay (use `picsum.photos/seed/gymnest-hero/1920/1080`)
- Centered content: video play button (circle + "See Workout Video"), headline "Get fit with us", subtitle, "Join Now" button
- **Fidelity note:** Original hero has video link to Vimeo; implement as styled button/link (no actual video embed needed)
- Home button: outlined white border, transparent bg, pill shape (`border-radius: 22px`)

### 3. Boxes (Feature Highlights)
- Three equal-width boxes in flex row (responsive: stack on mobile)
- Each: icon (use lucide-react icons: Dumbbell, Waves, Apple), title, description, "+" link
- **Fidelity note:** Original uses PNG icons; replace with lucide-react

### 4. About
- Two-column: left content (6 cols), right image on separate background row
- Subtitle "welcome to gymnest", title "About GymNest" with "GymNest" in brand orange
- Highlighted text block, paragraph, "Join Now" button
- **Fidelity note:** Original has a split layout where image sits on a separate full-width row with offset; use CSS grid or flex for equivalent

### 5. Testimonials
- Parallax background image (`picsum.photos/seed/gymnest-test/1920/1080`)
- Two-column layout, 4 testimonial cards (2 per column)
- Each: circular avatar (`border-radius: 50%`), name (linked), "client" label, paragraph, 4-star rating
- Centered "Join Now" button with orange glow shadow
- **Fidelity note:** Use lucide-react Star icons for ratings; circular images via `picsum.photos/seed/gymnest-test-N/200/200`

### 6. Gallery
- Owl-carousel equivalent → use a simple horizontal scroll or CSS grid carousel
- 5 gym-themed images (`picsum.photos/seed/gymnest-gallery-N/600/400`)
- **Fidelity note:** Original uses OwlCarousel2; implement with a lightweight React carousel or CSS scroll-snap

### 7. Services / Our Courses
- Subtitle "welcome to gymnest", title "Our Courses"
- 6 cards in 3×2 grid (responsive: 2-col on tablet, 1-col on mobile)
- Each: icon (lucide-react), title, description
- Courses: Weight Loss Class, Yoga Classes, Spinning Class, Private Fit Class, Nutrition Classes, Pilates Class
- **Fidelity note:** Original uses PNG icons; replace with lucide-react (Scale, Flower2, Bike, User, Salad, Dumbbell)

### 8. Blog
- Parallax background with dark overlay
- Subtitle "welcome to gymnest", title "The Blog", "View all blog posts" link
- 3 blog post cards: image, title, date, description, "Read More" link
- **Fidelity note:** Use `picsum.photos/seed/gymnest-blog-N/600/400` for blog images

### 9. Footer
- Dark background (`#262626`), centered logo
- Nav links (same as header)
- Newsletter form: pill-shaped input (`border-radius: 31px`, `border: solid 1px #ff880f`, `background: rgba(0,0,0,0.58)`) + "go" button
- Copyright bar → replace with "Made with Component Dock" + link to https://www.componentdock.com/
- Decorative footer image (use picsum or omit)
- **Fidelity note:** Original footer has a decorative image; can be replaced with a subtle pattern or omitted

## Key Design Tokens Summary

| Element | Token |
|---------|-------|
| Brand orange | `#f98c00` / `#ff9711` |
| Dark bg | `#262626` |
| Light bg | `#F7F7F7` |
| Font | Montserrat (Google Fonts) |
| Button radius | `22px` (pill) |
| Newsletter input radius | `31px` |
| Heading style | Uppercase, weight 600-700 |

## Assets to Generate

- Placeholder images via `picsum.photos/seed/gymnest-<section>-<n>/<w>/<h>`
- Icons via lucide-react (no external icon files needed)
- Fonts via Google Fonts `<link>` in index.html

## Common Pitfalls

- Original uses Bootstrap 4 grid — convert to Tailwind grid/flex equivalents
- Parallax sections: use CSS `background-attachment: fixed` or a lightweight parallax library
- Carousel: avoid heavy dependencies; CSS scroll-snap is sufficient for gallery
- Newsletter form is decorative — no actual submission logic needed
- Footer copyright must NOT reference ColorLib
