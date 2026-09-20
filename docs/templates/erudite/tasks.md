# Erudite — Implementation Tasks & Design Notes

## Structure Order (section-by-section)

1. **Navbar** — Sticky header with logo + nav links. Top bar above with contact info and search.
2. **Hero** — Full-width bg image, dark overlay, heading + subtitle + CTA button.
3. **Featured Courses (Horizontal)** — 2-column course list with heading + "view all" CTA.
4. **About Section** — Stats counters + video thumbnail in 2-column layout.
5. **Testimonials** — Swiper/carousel with avatar + quote + author.
6. **Featured Courses (Vertical)** — Category filter tabs + 3-column card grid.
7. **Latest News & Events** — Featured event (large) + event list (smaller).
8. **Home Gallery** — Asymmetric image grid.
9. **Footer** — 4-column: about, contact, quick links, social.
10. **Footer Bar** — Copyright + app store links.

## Fidelity Notes

### Top Header Bar
- Left side: email icon + email, phone icon + phone number
- Right side: search input with magnifier icon, Register/Login text links
- White background, light border bottom
- Hidden on mobile (`d-none d-md-flex`)

### Navbar
- Logo on left, nav links right-aligned
- Links: Home, About, Courses, Pages, Blog, Contact
- Sticky positioning

### Hero Section
- Full-width background image with dark semi-transparent overlay
- Heading: "Learn to Code" — uppercase, 60px, weight 500, white
- Subtitle text in white
- CTA: "read more" as a square green button

### Featured Courses — Horizontal
- 2-column grid layout
- Each course card: left thumbnail image, right content area
- Content: star rating (filled/unfilled), title (link), author + date, price badge
- "Free" badge in green for free courses
- "view all" square button at top-right of heading

### About Section
- Left: heading "About Erudite", description paragraph, 4 stats in a row
  - Stats: number + unit (M+, K+, M+, +), label below each
  - Green accent on numbers
- Right: video thumbnail with centered play button overlay

### Testimonials
- Carousel/slider layout
- Each slide: circular avatar left, quote + author right
- Dark background area
- Author format: "Name — Affiliation"

### Featured Courses — Vertical
- Category filter nav tabs: All, Business, Design, Web Development, Photography
- 3-column card grid
- Each card: thumbnail, title, author + date, price + strikethrough original, star rating
- "All" tab active by default

### Latest News & Events
- Featured event: large image with date badge overlay (day + month stacked), title, location icon + address, calendar icon + date range
- Side events: smaller thumbnail + date + title in a list

### Home Gallery
- Asymmetric grid using flex wrap
- Mix of 1x1 and larger (2x2, 2x1) tiles
- Images fill tiles, no padding

### Footer
- Dark background (#383749)
- 4 columns on desktop, stacked on mobile
- Column 1: Logo + description paragraph + copyright
- Column 2: "Contact Us" — email, phone, address
- Column 3: "Quick Links" — list of links
- Column 4: "Follow Us" — social icons (Facebook, Google+, Instagram, Twitter) with colored brand backgrounds

### Footer Bar
- Darker background
- Copyright text centered
- App store links (Apple, Google Play) — can use placeholder or omit

## Component Plan

| Component           | Props                              | Notes                                  |
| ------------------- | ---------------------------------- | -------------------------------------- |
| `TopHeaderBar`      | —                                  | Contact info + search + auth links     |
| `Navbar`            | —                                  | Logo + nav links, sticky               |
| `Hero`              | bgImage, heading, subtitle, cta    | Full-width bg + overlay                |
| `FeaturedCoursesH`  | courses[], viewAllHref             | 2-column horizontal cards              |
| `CourseCardH`        | thumbnail, rating, title, author, date, price, isFree | Horizontal layout |
| `AboutSection`      | stats[], heading, description, videoThumb | 2-col: stats + video            |
| `StatCounter`       | number, unit, label                | Reusable stat item                     |
| `TestimonialSlider` | testimonials[]                     | Carousel with avatar + quote           |
| `TestimonialSlide`  | avatar, quote, name, affiliation   | Single testimonial slide               |
| `FeaturedCoursesV`  | courses[], categories[]            | Vertical grid + filter tabs            |
| `CourseCardV`        | thumbnail, title, author, date, price, originalPrice, rating | Vertical card |
| `CategoryFilter`    | categories[], activeCategory       | Tab navigation                         |
| `LatestNews`        | featuredEvent, events[]            | Featured + list layout                 |
| `EventCard`         | thumbnail, title, date, location, duration | Reusable event item            |
| `DateBadge`         | day, month                         | Overlaid date on event thumbnail       |
| `Gallery`           | images[]                           | Asymmetric image grid                  |
| `Footer`            | logo, description, contact, links, social | 4-column footer                |
| `FooterBar`         | copyright, year                    | Bottom bar                             |

## Placeholder Images

Use `https://picsum.photos/seed/erudite-<n>/<w>/<h>` for all images:
- Hero bg: `seed/erudite-hero/1920/1080`
- Course thumbnails: `seed/erudite-course-1/400/300`, `seed/erudite-course-2/400/300`, etc.
- Avatar: `seed/erudite-avatar-1/200/200`
- Video thumbnail: `seed/erudite-video/800/500`
- Gallery images: `seed/erudite-gallery-1/600/400`, etc.
- Event images: `seed/erudite-event-1/800/500`, `seed/erudite-event-2/400/300`

## Dependencies

- No new dependencies expected. Use existing packages/ui components (Button, ButtonLink, Card, cn).
- For the testimonial slider, consider a simple CSS-based carousel or use a lightweight approach — avoid adding swiper as a dependency.
- For stat counters, use Intersection Observer for animate-on-scroll effect.

## Testing Strategy

- One `describe` per component
- Test rendering of each section with correct content
- Test navbar sticky behavior
- Test category filter tab switching (vertical courses)
- Test testimonial carousel navigation
- Test responsive breakpoints
- Ensure 100% line/function/branch/statement coverage
