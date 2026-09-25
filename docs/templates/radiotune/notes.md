# Radiotune — Implementation Notes

**Source:** ColorLib "Razo" (https://colorlib.com/wp/template/razo/)
**Preview:** https://preview.colorlib.com/theme/razo/
**New name:** Radiotune
**Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Structure Order (sections top → bottom)

1. `Navbar.tsx` — Sticky header: logo left, nav links right (Home, Shows, Charts, Podcasts, Mega). Hamburger on mobile. Social share slide-out panel.
2. `HeroCarousel.tsx` — Full-viewport carousel (4 slides). Each slide: bg image + dark overlay + heading + subtitle + "Book Now" outline button.
3. `BlogArea.tsx` — Two-column: left (8 cols) "Blog New" with featured post + 4 smaller posts; right (4 cols) "Trending" with featured + 5 posts.
4. `MusicCharts.tsx` — Dark parallax bg section. 5 ranked items: rank + thumbnail + audio player + title/artist + price button.
5. `TrendingVideo.tsx` — Featured YouTube embed + 6 video post cards in 3x2 grid.
6. `AppDownload.tsx` — Dark parallax bg. iPhone mockup left, text + download badges right.
7. `WeeklySchedule.tsx` — Responsive table with 6 day columns (Mon–Sat), 4 rows of show entries.
8. `LatestNews.tsx` — Dark parallax bg. Carousel of 3 news cards with bg image + overlay + content + date + "Read More".
9. `Footer.tsx` — 3-column: Logo/contact, Twitter Feed, Instagram grid. Copyright bar. Component Dock attribution.

## Design Token Notes (for index.css @theme)

```
brand-magenta: #dc2878
heading: #191919
body-text: #6e6e6e
bg-blue: #e7f2fd
white: #ffffff
dark: #000000
border: #e5e5e5
secondary: #a6a6a6
```

Fonts: Open Sans (body, Google Fonts) + Oswald (headings, Google Fonts). Load via `<link>` in index.html.

## Component Implementation Notes

### Navbar
- Desktop: flex container — logo left, nav links right
- Mobile: hamburger toggle → vertical slide-down menu
- Social share: slide-out panel from right edge with social icons
- Sticky: on scroll > threshold, add fixed positioning + dark bg

### HeroCarousel
- Controlled carousel (4 slides)
- Each slide: full-viewport height, bg image via `picsum.photos/seed/radiotune-hero-<n>`, dark overlay (`bg-black/50`)
- Heading: white, Oswald font, ~44px, font-weight 500
- "Book Now" button: outline style (transparent bg, white border, white text), `border-radius: 3px`
- Auto-play with 5s interval

### BlogArea
- Two-column grid: left 8 cols, right 4 cols
- Left "Blog New": featured post (full-width bg image + overlay + title + meta), then 2x2 grid of smaller posts (thumbnail + title + meta)
- Right "Trending": featured post (smaller bg image) + 5 list posts (thumbnail + title + meta)
- Each post shows comment count (fa-comments-o) and view count (fa-eye)

### MusicCharts
- Full-width section with parallax bg image + dark overlay
- Header row: "Music Chart" heading left, "Show All Trending" button right
- 5 ranked items: flex row — rank number, thumbnail, audio player, title/artist, price button
- Audio: native `<audio controls>` element
- Price buttons: outline style (`razo-btn btn-2`)

### TrendingVideo
- Centered heading "Trending Video"
- Featured video: full-width YouTube iframe embed
- 6 post cards in 3-column grid (2 rows): each card flex row — thumbnail + content (meta counts + title)

### AppDownload
- Full-width dark parallax section
- Two-column: left = iPhone mockup image, right = heading + description + download badges
- Use `picsum.photos/seed/radiotune-app` for mockup placeholder

### WeeklySchedule
- Centered heading "Weekly Schedule"
- Responsive HTML table with `<thead>` (Mon–Sat) and `<tbody>` (4 rows)
- Each cell: show name + time slot, or empty
- Use `table-responsive` wrapper for mobile

### LatestNews
- Full-width dark parallax section
- Header row: "Latest News" heading left, "Show All Blog" button right
- Carousel of 3 news cards: each card is a full-width bg image + dark overlay + content (title, excerpt, date, "Read More" button)
- Date display: large day number + month name

### Footer
- 3-column grid: Logo/contact | Twitter Feed | Instagram
- Logo column: footer logo image + description + 3 contact items (address, phone, email with icons)
- Twitter Feed: 3 tweet items with twitter icon + username + text
- Instagram: 3x3 grid of square image thumbnails
- Copyright bar at bottom
- MUST include Component Dock attribution link

## Placeholder Images

Use `picsum.photos/seed/radiotune-<n>` for all images:
- Hero backgrounds: `radiotune-hero-1` through `radiotune-hero-4`
- Blog featured: `radiotune-blog-feat`
- Blog posts: `radiotune-blog-1` through `radiotune-blog-8`
- Music chart thumbnails: `radiotune-music-1` through `radiotune-music-5`
- Video thumbnails: `radiotune-video-1` through `radiotune-video-6`
- App mockup: `radiotune-app`
- News cards: `radiotune-news-1` through `radiotune-news-3`
- Instagram grid: `radiotune-insta-1` through `radiotune-insta-9`

## Audio Player

Use native HTML5 `<audio controls>` element in music chart items. No custom player needed.

## Testing Notes

- Navbar: test sticky behavior, mobile toggle, all nav links present
- HeroCarousel: test slide transitions, auto-play, "Book Now" buttons
- BlogArea: test two-column layout, featured posts, smaller post grid
- MusicCharts: test 5 ranked items render with audio players and price buttons
- TrendingVideo: test video embed + 6 post cards
- AppDownload: test mockup image + heading + download badges
- WeeklySchedule: test table renders with 6 columns, empty cells handled
- LatestNews: test carousel of 3 cards with dates + "Read More"
- Footer: test 3 columns, Component Dock link, contact info, social icons
