# Workzone — Implementation Tasks & Design Notes

## Source
- ColorLib: Workshop (https://colorlib.com/wp/template/workshop/)
- Preview: https://preview.colorlib.com/theme/workshop/
- New name: workzone

## Structure order (section-by-section)

### 1. Navbar
- Sticky top bar with logo left, nav links right
- Links: About, Speakers, Programs, Sponsors, News, Contact
- Mobile: hamburger icon toggles slide-out menu
- Dark background consistent with hero

### 2. Hero
- Full-height dark section with background image (use picsum.photos)
- Centered: small caption "Conference 2019", large heading, date/location, CTA button
- Button: uppercase, letter-spacing 0.2em, #3f4046 bg, gradient hover (#c70039 → #ff5733)
- AOS fade-up animations with staggered delays

### 3. Speakers
- Section heading "Speakers" left-aligned with description paragraph right
- 4 speaker cards in 2 rows of 2
- Alternating layout: row 1 = image-left + bio-right, row 2 = image-right + bio-left
- Each bio: name (h2), role/title text
- Dark background behind photos, light text

### 4. Programs/Schedule
- Section heading "Programs" with description
- Timeline rows: dark bg (#232531), each row = time (h4 + AM/PM) + talk title (h2) + speaker name
- Top/bottom borders on rows
- 5-6 time slots from 8:00 AM to 12:00 NOON

### 5. Sponsors
- Section heading "Sponsors" with description
- 3-column grid of sponsor logos (use placeholder SVGs or picsum)
- Subtle fade animations

### 6. News/Blog
- Section heading "News"
- 3 blog post cards in a row
- Each: thumbnail image, post title (h2), author meta (avatar + name + date), excerpt paragraph

### 7. Footer
- Dark background
- 3 columns: About Event (text), Quick Links (list), Connect with Us (social icons)
- Copyright bar at bottom
- MUST include Component Dock link

## Design notes

- **Theme**: Dark, conference/event aesthetic. Monospace font (Roboto Mono) gives it a tech/developer conference feel.
- **Colors**: Dark bg (#1b1d24), orange-red accent (#ff5733), crimson gradient (#c70039 → #ff5733), muted gray (#818186).
- **Typography**: Roboto Mono throughout. Large headings (2.5-3rem). Uppercase buttons and captions.
- **Buttons**: Sharp corners (no border-radius). Dark gray default, gradient hover sweep from left.
- **Animations**: AOS (Animate On Scroll) library — fade-up, fade-right, fade-left with staggered delays.
- **Layout**: Bootstrap-style grid (12-col). Sections alternate between dark and light backgrounds.
- **Images**: Use picsum.photos/seed/workzone-{n}/w/h for all placeholder images. Sponsor logos can be simple SVG placeholders.
