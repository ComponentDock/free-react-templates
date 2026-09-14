# Palazzo — Implementation Todo

Recreation of ColorLib Roberto (Hotel & Resort template).
Source: https://colorlib.com/wp/template/roberto/
Preview: https://preview.colorlib.com/theme/roberto/

## Section order (top to bottom)

1. **Header** — Top bar (phone + email + social icons) + Main nav (logo, menu links, search, Book Now button)
2. **Hero / Welcome** — Full-width carousel, 3 slides, bg-image + dark overlay, centered text ("Hotel & Resort" subtitle + "Welcome To Palazzo" heading + "Discover Now" outline button)
3. **Hotel Search Form** — Overlapping bar below hero, 5 fields: Check In (date), Check Out (date), Room (select), Adult (select), Children (select), Check Availability button
4. **About Us** — Split layout: left = heading + paragraph + manager name + signature image; right = 2-column image grid (2 small on left, 1 large on right)
5. **Services** — Horizontal row of 5 icon+label cards (Transportation, Travel Service, Spa Relaxation, Restaurant, Bar & Drink)
6. **Rooms** — Carousel of room slides: each slide has bg-image left + content right (name, price/day, feature list with checkmarks, "View Details" button)
7. **Testimonials** — Split: left = image carousel (2 images), right = heading + testimonial carousel (quotes, 5 stars, name + role)
8. **Projects / Gallery** — Carousel of full-width bg-image slides with hover overlay (category, title, description, "Discover Now" button)
9. **Blog / Latest News** — 3-column post cards (thumbnail, date, category tag, title, excerpt, arrow button)
10. **CTA** — Full-width bg-image with dark overlay, "Contact us now!" heading, phone number, "Contact Now" button
11. **Partners** — Row of 5 partner logos
12. **Footer** — 4-column: (1) logo + phone + email + address, (2) "Our Blog" with 2 posts, (3) "Links" nav, (4) "Subscribe Newsletter" form; plus copyright bar + social icons

## Design notes

- **Brand color:** #1cc3b2 (teal/mint) — used for buttons, preloader, hover states, accents
- **Dark palette:** #0e2737 (header bg, overlays), rgba(14,39,55,0.7) (image overlays)
- **Text colors:** #2a303b (headings), #636a76 (body), #afb4bf (placeholders)
- **Button style:** solid teal bg + white text + 2px radius; variant = transparent + 2px teal border
- **Font:** Poppins (400/500/600/700), Google Fonts
- **Section rhythm:** ~100px vertical padding between sections
- **Overlays:** all hero/CTA/project images use dark semi-transparent overlay (rgba(14,39,55,0.7))
- **Carousel behavior:** owl-carousel style — auto-rotating with dot/arrow navigation
- **Hover effects on projects:** reveal overlay with description + CTA button

## Component mapping

| Section       | Component file          | Notes                                      |
|---------------|------------------------|---------------------------------------------|
| Header        | `Navbar.tsx`            | Top bar + main nav + search + Book Now       |
| Hero          | `Hero.tsx`              | Carousel with 3 slides, bg images + overlay  |
| SearchForm    | `SearchForm.tsx`        | Date pickers + selects + submit               |
| About         | `About.tsx`             | Split: text left, image grid right            |
| Services      | `Services.tsx`          | 5 icon cards in flex row                     |
| Rooms         | `Rooms.tsx`             | Carousel of room slides                       |
| Testimonials  | `Testimonials.tsx`      | Split: images left, quotes right             |
| Projects      | `Projects.tsx`          | Carousel with hover overlays                  |
| Blog          | `Blog.tsx`              | 3-column post cards                           |
| CTA           | `CallToAction.tsx`      | Bg image + text + button                      |
| Partners      | `Partners.tsx`          | 5 logo images in row                          |
| Footer        | `Footer.tsx`            | 4-column + copyright + social                 |
