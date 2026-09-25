# Groove — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Dj" — https://colorlib.com/wp/template/dj/
- **Preview:** https://preview.colorlib.com/theme/dj/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dj-free-template.jpg
- **Preview fetched:** Yes (17,421 bytes HTML, 852 lines main CSS)
- **CSS tokens extracted:** Yes — brand gold `#e4ae50`, Montserrat font, pill buttons, dark hero, date badges

## Section Order (top → bottom)

1. **Navbar** — sticky, logo "Groove." left, nav right, hamburger → slide-in menu
2. **Hero** — dark bg, DJ image left, headline + CTA right
3. **Featured Events** — white bg, 3 event cards with date badges
4. **Upcoming Events** — white bg, asymmetric masonry grid (1 large + 2 stacked)
5. **About / We Love Music** — white bg, two-col: video thumbnail left, text + CTA right
6. **Footer** — dark bg, 3-col: about/nav, social/subscribe, video

## Fidelity Notes

### Navbar
- Logo: "Groove." in bold white, with gold dot accent (`.text-primary` in original)
- Nav items: Home, Shows (dropdown), Events, About, Contact
- Shows dropdown has sub-items: Top 20, Featured Artist, Interviews, Sub Menu
- Mobile: slide-in menu from right
- Use simple React state for mobile toggle; no need for full-screen overlay

### Hero
- Dark background (`#000`) with DJ performer image (left half)
- Large heading: "DJ Kathy Music Fest" (can rephrase to "Groove Music Fest" or similar)
- Subtext paragraph about events
- "Join Us" button: outline style, gold border + gold text, pill shape (border-radius: 30px)
- Replace DJ image with `picsum.photos/seed/groove-hero/800/900`

### Featured Events
- Centered heading with decorative bottom border
- 3-column equal grid (Bootstrap `col-lg-4`)
- Each event card structure:
  - Image container with date badge overlay (gold circle, positioned absolute, top-right)
  - Date badge: day (large) + month abbreviation (smaller), stacked vertically
  - Title as `<h3>` link
  - Description paragraph
  - "Info" link (styled as `.more`)
- Replace images with `picsum.photos/seed/groove-event-<n>/400/300`

### Upcoming Events (Masonry Grid)
- Asymmetric layout: left column is 1 tall item, right column has 2 stacked items
- Use CSS Grid or Tailwind grid with row spans
- Each item: background-image cover, overlay text centered
- Hover effect: gold overlay (`rgba(228,174,80,0.8)`) transitions in
- Text: "Classic Songs For Classic People" (can rephrase per event)

### About / We Love Music
- Two-column layout (50/50)
- Left: image with play button overlay (circle, centered, icon-play)
  - Play button triggers a modal/lightbox (use simple React state + modal)
  - Replace image with `picsum.photos/seed/groove-about/600/400`
- Right: "We Love Music" heading, "Join with us today" lead text, 2 description paragraphs
- "Join Us" solid gold button (pill shape)

### Footer
- Dark background (`#25262a`)
- 3 equal columns:
  - Col 1: "About Us" + description, "Navigations" + link list
  - Col 2: "Follow Us" + social icons (Facebook, Twitter, Instagram, LinkedIn via lucide-react)
  - Col 2 continued: "Subscribe" + email input (transparent bg, white text, secondary border) + gold pill button
  - Col 3: "Watch Video" + thumbnail with play button overlay
- Bottom: copyright + Component Dock attribution (replace Colorlib credit)
- Subscribe input: `form-control border-secondary text-white bg-transparent`
- Subscribe button: `btn btn-primary rounded-top-right-0` (gold, pill)

## Component Mapping

| Original class | React component | Notes |
|----------------|-----------------|-------|
| `site-hero` | `Hero.tsx` | Dark bg, flex row, image + content |
| `site-section` (events) | `FeaturedEvents.tsx` | 3-col grid, event cards |
| `site-block-retro` (upcoming) | `UpcomingEvents.tsx` | CSS Grid masonry |
| `site-section` (about) | `AboutSection.tsx` | Two-col, video modal |
| `site-footer` | `Footer.tsx` | 3-col, dark bg |
| `event` | `EventCard.tsx` | Reusable card with date badge |
| `unit-9` | `EventGridItem.tsx` | Background image + overlay |

## Key Implementation Details

- **No OwlCarousel needed** — Featured Events is a static 3-col grid; Upcoming Events is a static masonry grid
- **Video popup** — simple React modal/lightbox (no external dependency needed)
- **Mobile menu** — slide-in from right with close button, no full-screen overlay needed
- **Date badges** — absolute positioned gold circles on event images
- **Hover effects** — CSS transitions for gold overlay on upcoming events
- **All images** — use `picsum.photos/seed/groove-<n>/<w>/<h>` for deterministic placeholders
