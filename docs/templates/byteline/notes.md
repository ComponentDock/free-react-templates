# Byteline — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Aznews" — https://colorlib.com/wp/template/aznews/
- **Preview:** https://preview.colorlib.com/theme/aznews/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/aznews-free-template.jpg
- **Preview fetched:** Yes (HTML + `assets/css/style.css` extracted)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds, category badge colors

## Section Order (top → bottom)

1. **Header Top Bar** — black strip, weather + date, social icons (desktop only)
2. **Header Mid** — logo left, banner ad right (desktop only)
3. **Header Bottom (Sticky Nav)** — logo, main nav links, search icon, hamburger (mobile)
4. **Trending Area** — ticker + large featured card + 3 small cards + 5 sidebar cards
5. **Weekly Top News** — horizontal carousel, 4 cards with dots
6. **What's New** — tabbed (6 tabs) + Follow Us sidebar with social counters
7. **Weekly News 2** — gray bg, horizontal carousel, 5 cards
8. **Video / YouTube** — video carousel + info section + thumbnail grid
9. **Recent Articles** — horizontal carousel, 4 cards
10. **Pagination** — numbered pages with arrows
11. **Footer** — logo + description, newsletter form, Instagram grid, social icons, copyright

## Fidelity Notes

### Header Top Bar
- Black background (`#000000`), white text
- Left: weather icon + temp + date string
- Right: social icons (Twitter, Instagram, Pinterest)
- Completely hidden on mobile

### Header Mid
- Logo image on left (3 cols), banner ad on right (9 cols)
- Hidden on mobile

### Sticky Nav
- White background, shadow on scroll
- Logo (smaller sticky logo shown when scrolled)
- Nav items: Home, Category, About, Latest News, Contact, Pages (with dropdown submenu)
- Search icon on far right with slide-in search input
- Mobile: hamburger menu icon

### Trending Area
- "Trending now" heading + animated ticker (jQuery ticker → implement with CSS animation or simple interval)
- Layout: 8-col left + 4-col right
- Left: Large featured image card with overlay gradient + category badge (red tint) + headline
  - Below: 3 equal-width cards, each with image + category badge (different tints: green, cyan, yellow)
- Right sidebar: 5 stacked thumbnail cards (small image left + text right)
- Use gradient overlay on featured image (CSS `::before` with linear-gradient)

### Weekly Top News
- Horizontal scrolling carousel (replace Slick with React carousel or CSS scroll-snap)
- 4 cards, each: image + category badge (`.color1` red tint) + headline
- Dot indicators below
- Section heading: "Weekly Top News"

### What's New (Tabbed Section)
- 8-col left: Tabbed news grid
  - Tabs: All, Lifestyle, Travel, Fashion, Sports, Technology (Bootstrap tabs → React state)
  - Each tab shows 4 cards in 2x2 grid (image + badge + headline)
- 4-col right sidebar:
  - "Follow Us" heading
  - 4 social rows: icon + follower count + "Fans" label (Facebook, Twitter, Instagram, YouTube)
  - Ad/promo poster image below

### Weekly News 2
- Gray background (`#f7f7fd`)
- Same carousel pattern as Weekly Top News
- 5 cards with dot navigation

### Video / YouTube Section
- Background: brand-tinted bg
- Video carousel: 5 YouTube iframe embeds (or placeholder video cards)
- Below carousel: two-column layout
  - Left (6 cols): "Politics" badge + headline + description paragraph
  - Right (6 cols): 5 small video thumbnail cards in a grid
- Replace YouTube iframes with placeholder video cards or play button overlays

### Recent Articles
- Same carousel pattern as Weekly sections
- 4 cards with dots

### Pagination
- Centered Bootstrap-style pagination
- Prev arrow, 01 (active), 02, 03, Next arrow
- For single-page implementation, make decorative only

### Footer
- Dark background (original uses dark with gradient overlay)
- 3-column layout:
  - Left (5 cols): Logo + paragraph + social icons (Twitter, Instagram, Pinterest)
  - Middle (3 cols): "Newsletter" heading + description + email form (input + submit)
  - Right (3 cols): "Instagram Feed" heading + 6 thumbnail grid
- Footer bottom bar: Copyright left, Terms/Privacy/Contact links right
- MUST replace Colorlib attribution with Component Dock link

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `HeaderTopBar.tsx` | Header top bar | Weather + date + social (desktop only) |
| `HeaderMid.tsx` | Header mid | Logo + banner ad |
| `Navbar.tsx` | Sticky nav | Sticky, search, hamburger, dropdown |
| `Trending.tsx` | Trending area | Ticker + featured card + small cards + sidebar |
| `WeeklyNews.tsx` | Weekly Top News | Horizontal carousel component (reused) |
| `WhatsNew.tsx` | What's New | Tabs + 2x2 grid + Follow Us sidebar |
| `WeeklyNews2.tsx` | Weekly News 2 | Same carousel on gray bg |
| `VideoSection.tsx` | Video/YouTube | Video carousel + info + thumbnail grid |
| `RecentArticles.tsx` | Recent Articles | Carousel (reused component) |
| `Pagination.tsx` | Pagination | Decorative numbered pagination |
| `Footer.tsx` | Footer | Logo, newsletter, Instagram grid, social |

## Placeholder Assets

- Featured trending image: `https://picsum.photos/seed/byteline-trending/800/500`
- Small trending cards: `https://picsum.photos/seed/byteline-trend-<n>/400/300`
- Sidebar thumbnails: `https://picsum.photos/seed/byteline-side-<n>/150/100`
- Weekly/What's New/Recent cards: `https://picsum.photos/seed/byteline-news-<n>/400/250`
- Instagram grid: `https://picsum.photos/seed/byteline-insta-<n>/200/200`
- Video thumbnails: `https://picsum.photos/seed/byteline-video-<n>/400/250`
- Footer logo: text-based or simple SVG
- All icons: `lucide-react`

## Key Differences from Original

- No jQuery — pure React (no Slick, no OwlCarousel, no Ticker plugin)
- No Bootstrap JS tabs — React state for What's New tabs
- No YouTube iframes — placeholder video cards with play button overlay
- No FontAwesome — `lucide-react` for all icons
- No external font files — Google Fonts `<link>` for Roboto
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Ticker animation: CSS keyframe or simple React interval (no jQuery ticker)
- Pagination is decorative (single-page implementation)
