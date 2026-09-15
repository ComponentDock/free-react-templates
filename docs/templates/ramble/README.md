# Ramble — Task Outline & Design Notes

**Source:** ColorLib "Vacation" — https://preview.colorlib.com/theme/vacation/
**New name:** ramble
**Spec:** openspec/specs/template-ramble/spec.md

## Section-by-section implementation order

### 1. Navbar
- Dark navbar (`bg-dark`) with brand "Ramble" / "Travel Agency"
- Nav links: Home, About, Destination, Blog, Contact
- CTA button "Book Now" — orange `#f9ab30` background
- Sticky on scroll (IntersectionObserver or scroll listener)
- Mobile: hamburger menu collapse

### 2. Hero
- Full-height section with background image (parallax optional, skip complex scroll effects)
- Play button (circle with play icon) — link to placeholder
- Tagline + main heading centered
- Dark overlay on background image

### 3. Search Bar
- Dark `#33313b` background bar overlapping hero (negative margin on desktop)
- 4 form fields in a row: Destination (text), Check-in (date picker), Check-out (date picker), Price Limit (select dropdown)
- Orange `#f9ab30` Search button
- Icons inside each input (search, calendar, chevron)

### 4. Services
- Light `#f7f7f7` background
- 2-column layout: left = heading + 2 paragraphs + CTA button, right = 2x2 grid
- 4 service cards: Activities, Travel Arrangements, Private Guide, Location Manager
- Each: icon (use lucide-react equivalents), title, short description

### 5. Counter / About
- Split layout: left = large image, right = text + counters
- Heading: "Make Your Tour Memorable and Safe With Us"
- 3 counter blocks: 300 Successful Tours, 24000 Happy Tourist, 200 Place Explored
- Counter animation on scroll (use IntersectionObserver + requestAnimationFrame)

### 6. Best Place Destinations
- 4 cards in a row (4-column grid)
- Each: background image with overlay text (destination name + tour count)
- Hover effect: scale or opacity transition

### 7. Tour Destinations
- 3-column x 2-row grid (6 cards)
- Each card: image at top, text block below
- Text: price badge (e.g. "$300/person"), days badge (e.g. "8 Days Tour"), title, location with map icon, 3 amenity icons (shower count, bed count, nearby landmark)
- Rounded corners on image

### 8. Testimonials
- Parallax background image with dark overlay
- Heading: "Tourist Feedback"
- Carousel of review cards: avatar circle, name, position, quote text
- Use CSS-only carousel or simple auto-scrolling div

### 9. Blog / Recent Posts
- 3-column grid of blog cards
- Each: cover image, date badge (day + month + year stacked), title link, excerpt text
- Date badge styled as floating block over image

### 10. Footer
- Dark background image with overlay
- 4 columns:
  1. Brand name + paragraph + social icons (Twitter, Facebook, Instagram)
  2. "Information" links list
  3. "Experience" links list
  4. "Have a Questions?" — address, phone, email with icons
- Footer MUST include link to https://www.componentdock.com/

## Design tokens summary

| Token        | Value       | Usage                        |
| ------------ | ----------- | ---------------------------- |
| brand        | `#f9ab30`   | CTA buttons, search button   |
| search-bg    | `#33313b`   | Search bar background        |
| footer-bg    | `#201e25`   | Footer widget background     |
| light-bg     | `#f7f7f7`   | Services section bg          |
| text-dark    | `#000`/`#333` | Body text on light bg      |
| text-light   | `#fff`      | Text on dark backgrounds     |
| font         | Poppins     | All text                     |
| btn-radius   | 0.25rem     | Buttons                      |

## Key fidelity notes

- Match section ORDER exactly: Navbar → Hero → Search → Services → Counter → Best Places → Tour Destinations → Testimonials → Blog → Footer
- The search bar MUST overlap the hero (negative margin-top on desktop)
- The counter section has a split image+text layout, not centered
- Tour destination cards have 3 amenities with flaticon-style icons (use lucide: Shower, Bed, Mountain)
- Blog date badge is a floating block with day on top, month below
- Footer uses a background image (use picsum for placeholder)
- All placeholders use `picsum.photos/seed/ramble-<n>/<w>/<h>`
