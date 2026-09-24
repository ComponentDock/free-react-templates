# Newscast — Implementation Tasks & Design Notes

**Source:** ColorLib Aznews (https://preview.colorlib.com/theme/aznews/)
**New name:** newscast
**Stack:** Vite + React 19 + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. TopHeaderBar — black bar, weather info left, social icons right (md+ only)
2. MidHeader — logo left, banner ad right (md+ only)
3. StickyNav — logo, main nav links, Pages dropdown, search icon; sticky on scroll
4. TrendingArea — ticker bar, featured article (8-col), 3 bottom cards, 5 sidebar items
5. WeeklyNewsCarousel1 — "Weekly Top News" horizontal carousel, dots nav
6. WhatsNew — tabbed section (All/Lifestyle/Travel/Fashion/Sports/Tech) + Follow Us sidebar
7. WeeklyNewsCarousel2 — "Weekly Top News" on gray bg, cards with dates
8. VideoSection — large video + description left, thumbnail grid right
9. RecentArticles — carousel of article cards with dots
10. Pagination — page numbers + arrow buttons
11. Footer — 3-col (brand+social, newsletter, instagram grid) + footer bottom (copyright + links)

## Component Map

| Section              | Component File          | Notes                                      |
|----------------------|-------------------------|--------------------------------------------|
| TopHeaderBar         | `TopHeaderBar.tsx`      | d-none d-md-block, weather + social icons  |
| MidHeader            | `MidHeader.tsx`         | d-none d-md-block, logo + banner ad        |
| StickyNav            | `StickyNav.tsx`         | sticky, dropdown, search toggle            |
| TrendingArea         | `TrendingArea.tsx`      | complex: ticker, featured, 3 cards, sidebar|
| WeeklyNewsCarousel1  | `WeeklyNews1.tsx`       | carousel with dots, 4+ cards               |
| WhatsNew             | `WhatsNew.tsx`          | tabs component + FollowUs sidebar          |
| WeeklyNewsCarousel2  | `WeeklyNews2.tsx`       | gray bg, cards with dates                  |
| VideoSection         | `VideoSection.tsx`      | iframe embed + thumbnail grid              |
| RecentArticles       | `RecentArticles.tsx`    | carousel with dots                         |
| Pagination           | `Pagination.tsx`        | page numbers + prev/next arrows            |
| Footer               | `Footer.tsx`            | 3-col + bottom bar, Component Dock link    |

## Design Notes

### Colors (from CSS extraction)
- Brand: `#fc3f00` (orange-red) — buttons, accents, scroll-to-top
- Nav secondary: `#415094` (navy blue)
- Category tags: `.color1`=`#ffe7e6`, `.color2`=`#f4ffd5`, `.color3`=`#e1fcff`, `.color4`=`#fff9c6`
- Text primary: `#000`, body text: `#506172`
- Backgrounds: white `#fff`, gray `#f5f5f5` / `#f7f7fd`
- Header top bar: `#000`

### Typography
- Font: Roboto (Google Fonts)
- Headings: weight 500, color `#000`, no text-transform
- Body: 16px, line-height 30px, color `#506172`

### Buttons
- `.boxed-btn`: transparent bg, 1px border `#fc3f00`, uppercase, letter-spacing 3px
- `.border-btn`: 2px border `#fc3f00`, 5px radius
- `.btn`: `#ff656a` bg, 5px radius, hover `#e6373d`

### Layout Notes
- Bootstrap-style 12-col grid (migrate to Tailwind grid/flex)
- Trending area: 8/4 column split
- WhatsNew: 8/4 column split
- Video section: 6/6 column split
- Footer: 5/3/3 column split
- Section padding varies: 50px top, 20-45px bottom

### Fidelity Priorities
1. Match the exact section order as listed above
2. Match the 3-tier header (top bar, mid, sticky nav)
3. Match the trending area layout (featured + cards + sidebar)
4. Tabbed What's New with Follow Us sidebar is the most complex section
5. Two separate carousel sections with different styling
6. Footer newsletter form + Instagram grid

### Placeholder Strategy
- All images → `https://picsum.photos/seed/newscast-<n>/<w>/<h>`
- Weather icon → lucide-react `CloudSun`
- Social icons → lucide-react or font-awesome via Tailwind
- Search icon → lucide-react `Search`
- Category tags → colored background spans with Tailwind bg-color classes
