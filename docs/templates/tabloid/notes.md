# Tabloid — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Mag" — https://colorlib.com/wp/template/mag/
- **Preview:** https://preview.colorlib.com/theme/mag/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mag-free-template.jpg
- **Preview fetched:** Yes (1,254 lines HTML, 2,207 lines main CSS)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo left, nav center, search + login + Submit Video right
2. **Hero Slider** — 3-slide carousel with parallax bg + dark overlay, post meta + title + play button
3. **Mag Posts Area** — 3-column layout:
   - Left Sidebar: Most Popular (5 items), ad, Latest Videos (5 items)
   - Main Content: Trending Now (6 items), Featured Videos (large + 5 sidebar), Most Viewed Videos (carousel), Sports Videos (carousel + 4-col grid)
   - Right Sidebar: Social Followers, Categories, ad, Hot Channels (5 items), Newsletter
4. **Footer** — 4-column (logo+desc+social, Categories, Sport Videos, Channels) + copyright bar

## Fidelity Notes

### Navbar
- Sticky on scroll (original uses `#sticker` ID + classynav plugin)
- Logo is image-based — use placeholder or text brand "Tabloid"
- Nav links: Home, Archive, Pages (dropdown), Mega (mega-menu), About, Contact
- Right side: search input (expandable), login icon, "Submit Video" button (brand pink)
- Mobile: hamburger toggle → slide-in menu (not fullscreen overlay)

### Hero Slider
- Replace OwlCarousel with React carousel (CSS/JS slider or lightweight library)
- 3 slides, each with parallax background image + dark overlay (`rgba(0,0,0,0.5)`)
- Each slide: date tag + category tag (pink `.post-cata`), large white title, white circle play button
- Custom dot indicators
- Content animates in on active slide

### Left Sidebar — Most Popular
- 5 post items in a list layout
- Each: small thumbnail (left) + title + 3 stats (views, likes, comments with icons)
- White background, box-shadow

### Left Sidebar — Latest Videos
- Same layout as Most Popular but different posts
- 5 items with thumbnail + title + stats

### Main Content — Trending Now
- Horizontal row of 6 trending posts
- Each: thumbnail + category tag (pink) + title
- Compact layout

### Main Content — Featured Videos
- Split layout: 7-col large featured post + 5-col sidebar list
- Large post: big thumbnail with play button overlay, date/category, title, excerpt, share buttons (expand on hover)
- Sidebar list: 5 small post items (thumbnail + title + stats)

### Main Content — Most Viewed Videos
- Carousel of 6 video cards
- Each: thumbnail with play button + duration badge (e.g. "09:27"), title, 3 stats
- OwlCarousel-style with navigation

### Main Content — Sports Videos
- Carousel of 3 featured posts (same layout as Featured Videos large post)
- Below: 4-column grid of 4 video posts (thumbnail + title + stats)
- Each featured post has share buttons (Facebook, Twitter, Google+, Instagram)

### Right Sidebar — Social Followers
- 4 colored bars: Facebook (blue), Twitter (light blue), YouTube (red), Google+ (red)
- Each shows icon + follower count + label

### Right Sidebar — Categories
- List of 7 categories with angle-right icon + name + post count badge
- Categories: Life Style (35), Travel (30), Foods (13), Game (06), Sports (28), Football (08), TV Show (13)

### Right Sidebar — Hot Channels
- 5 channel items
- Each: thumbnail + channel title + Subscribe button (brand pink with play icon)

### Right Sidebar — Newsletter
- Description paragraph
- Email input + full-width Subscribe button (brand pink)

### Footer
- 4 equal columns:
  - Col 1: Logo + description + 5 social icons (Facebook, Google+, Instagram, Twitter, LinkedIn)
  - Col 2: Categories nav list (10 items with angle-right icons)
  - Col 3: Sport Videos — 2 post items (thumbnail + title + stats)
  - Col 4: Channels — 15 tag cloud links
- Copyright bar: copyright text left, footer nav (Home, Privacy, Advertisement, Contact Us) right
- Replace Colorlib attribution with Component Dock link

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Sticky, search expand, Submit Video CTA |
| `HeroSlider.tsx` | Hero Area | 3-slide carousel, parallax bg, dark overlay |
| `LeftSidebar.tsx` | Left Sidebar | Most Popular + Latest Videos widgets |
| `TrendingNow.tsx` | Trending Now | 6 horizontal post items |
| `FeaturedVideos.tsx` | Featured Videos | 7+5 split layout with share buttons |
| `MostViewedVideos.tsx` | Most Viewed Videos | Carousel of 6 video cards |
| `SportsVideos.tsx` | Sports Videos | Carousel + 4-col grid |
| `RightSidebar.tsx` | Right Sidebar | Social Followers + Categories + Hot Channels + Newsletter |
| `Footer.tsx` | Footer | 4-column + copyright bar |

## Placeholder Assets

- Hero images: `https://picsum.photos/seed/tabloid-hero-<n>/1920/1080` (n=1,2,3)
- Post thumbnails: `https://picsum.photos/seed/tabloid-post-<n>/300/200`
- Featured post images: `https://picsum.photos/seed/tabloid-featured-<n>/800/500`
- Channel thumbnails: `https://picsum.photos/seed/tabloid-channel-<n>/100/100`
- Footer sport videos: `https://picsum.photos/seed/tabloid-sport-<n>/100/80`
- Icons: `lucide-react` (replace FontAwesome)

## Key Differences from Original

- No FontAwesome — use `lucide-react` for all icons
- No jQuery/OwlCarousel — pure React carousel implementation
- No classynav plugin — CSS/Tailwind sticky navbar + mobile hamburger
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Newsletter form is display-only (no backend submission)
