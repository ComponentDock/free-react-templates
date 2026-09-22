# RepFit — Implementation Tasks & Design Notes

## Template Info
- **New name:** repfit
- **Source:** ColorLib Ponigym (https://colorlib.com/wp/template/ponigym/)
- **Preview:** https://preview.colorlib.com/theme/ponigym/
- **Category:** Health Fitness

## Section Build Order

1. **Navbar** — Transparent header over hero. Logo left, nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), search icon. Becomes solid on scroll (optional — match reference if feasible).
2. **Hero** — Full-width carousel/slider. 3 slides with background images (picsum.photos/seed/repfit-hero-1 through -3), subtitle "Elite Personal Training Services", headline "Make it **Shape**" (Shape in brand color), primary button "Join Us Now".
3. **Services ("Our Program")** — Two-column layout. Left: section title with red accent bar, 4 service cards (Weight Lifting, Body Building, Healthy, Yoga) each with lucide-react icon + heading + description. Right: video thumbnail with play button overlay (use a static image, no actual video).
4. **CTA Banner** — Full-width background image, centered white text, headline + subtext + primary button. Dark overlay for contrast.
5. **Classes ("Our Class")** — Section title + "View All Schedule" button. Tabbed interface: 6 tabs with class images and descriptions. Below: 6 circular trainer-author thumbnails as tab selectors. Use state to manage active tab.
6. **Trainer Schedule** — Background image, section title, weekly timetable table. Color-coded cells: gym=#9d69d8, yoga=#62b3d3, cardio=#5acd57, running/boxing=#ed5e4c. Responsive: horizontal scroll on mobile.
7. **Team ("Our Trainer")** — 3 trainer cards in alternating photo-text layout (3-column grid). Each: large photo, specialty tag, name, description, social icon links.
8. **Latest News** — 3 blog cards in a 3-column grid. Each: image, date + comment count tags, headline link.
9. **Footer** — Two-column: left = map placeholder + address/phone widget; right = contact form ("Request A Call Back") with 4 fields + submit. Below: copyright bar with links + social icons. Replace Colorlib attribution with ComponentDock link.

## Fidelity Notes

### Colors
- Primary brand: #f34e3a (red-orange) — buttons, accent bars, active nav, schedule accents
- Headings: #191919 / #111111
- Body text: #8f8fa8 (muted purple-gray)
- Section descriptions: #6e6e6e
- Footer background: #232530
- Schedule cell colors: gym #9d69d8, yoga #62b3d3, cardio #5acd57, running #ed5e4c

### Typography
- Headings: Oswald (import from Google Fonts), weights 300–700
- Body: Roboto (import from Google Fonts), weights 400, 500, 700
- h1: 70px, h2: 36px, h3: 30px, h4: 24px, h5: 18px, h6: 16px

### Buttons
- Primary: #f34e3a bg, white text, Oswald 14px, uppercase, letter-spacing 2px, padding 12px 39px, **no border-radius** (sharp square)
- Schedule links: text-style with arrow icon

### Layout
- Section padding: 100px top/bottom (spad class)
- Section title: h2 with 3px-wide red accent bar on left (via ::before pseudo-element), 12px left padding
- Bootstrap-style 12-column grid (use Tailwind grid/flex equivalents)

### Images
- Hero: 3 background images (picsum.photos/seed/repfit-hero-{1,2,3}/1920/1080)
- Services: 4 icons (use lucide-react: Dumbbell, Heart, Apple, Flower2 or similar)
- Video thumbnail: picsum.photos/seed/repfit-video/600/400
- Class images: picsum.photos/seed/repfit-class-{1..6}/600/400
- Trainer photos: picsum.photos/seed/repfit-trainer-{1,2,3}/400/500
- Blog images: picsum.photos/seed/repfit-blog-{1,2,3}/400/300
- CTA background: picsum.photos/seed/repfit-cta/1920/600
- Schedule background: picsum.photos/seed/repfit-schedule/1920/800
- Contact form background: picsum.photos/seed/repfit-contact/960/600

### Key Differences from Reference
- No actual video playback (static thumbnail with play icon overlay)
- No actual Google Maps embed (static map placeholder or iframe)
- No actual blog detail pages (single-page template)
- Placeholder images replace original gym photography
- Colorlib attribution replaced with ComponentDock link
