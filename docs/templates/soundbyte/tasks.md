# Soundbyte — Implementation Tasks & Design Notes

## Source
- ColorLib: Razo (https://colorlib.com/wp/template/razo/)
- Preview: https://preview.colorlib.com/theme/razo/
- Category: Radio & Music

## Section-by-section implementation order

### 1. Project scaffold
- Copy simplest existing app (e.g. apps/earworm or apps/sonata)
- Rename package to `@free-react-templates/soundbyte`
- Set `public/CNAME` to `soundbyte.free.componentdock.com`
- Set `homepage` to `https://soundbyte.free.componentdock.com`
- Run `npm install` at repo root

### 2. Design tokens (index.css @theme)
```
--color-primary: #dc2878;     /* brand pink */
--color-heading: #191919;     /* dark headings */
--color-body: #6e6e6e;        /* body text */
--color-gray-bg: #e7f2fd;     /* light blue-gray */
--color-border: #e5e5e5;      /* borders */
--color-secondary: #a6a6a6;   /* muted */
--font-heading: 'Oswald', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

### 3. index.html
- Add Google Fonts link: Open Sans (300,400,600,700) + Oswald (200,300,400,500,600,700)

### 4. Components (in order)

| # | Component | Notes |
|---|-----------|-------|
| 1 | Navbar | Sticky, logo left, nav links center (Home, Pages, Shows, Charts, Podcasts, Events, Blog), search icon right. Mobile hamburger. |
| 2 | HeroCarousel | 4 slides, each: bg image + dark overlay (rgba(0,0,0,0.65)), heading "Designed For Music, Engineered to Last", subtitle, "Book Now" button (pink bg, 3px radius). Auto-rotate. |
| 3 | BlogArea | Two-column 8/4 split. Left: "Blog New" heading + featured post (large image overlay + title) + 4 small posts (thumb + content). Right: "Trending" heading + featured post + 4 vertical posts. |
| 4 | MusicCharts | Dark parallax bg, white heading "Music Chart", "Show All" button. 5 track items: number, thumb, audio placeholder, title/artist, price button. |
| 5 | TrendingVideo | White bg, centered heading. Featured YouTube embed. 6 post thumbs in 3-col grid. |
| 6 | AppDownload | Dark parallax bg. Left: phone mockup. Right: subtitle, "Radio Music" heading, description, Play Store + App Store badges. |
| 7 | WeeklySchedule | White bg, centered heading. Responsive table: 6 columns (Mon–Sat), show name + time per cell. Borderless table style. |
| 8 | LatestNews | Dark parallax bg. Heading + "Show All" button. Carousel of cards: bg image, title, excerpt, date (day + month), "Read More" button. |
| 9 | Footer | White bg. 3-col: logo + contact (address/phone/email with icons), Twitter feed (3 items), Instagram grid (3×3). Copyright bar with Component Dock link. |

### 5. Placeholder images
- Hero slides: `https://picsum.photos/seed/soundbyte-hero-1/1920/1080` (4 variants)
- Blog images: `https://picsum.photos/seed/soundbyte-blog-{n}/800/500`
- Music thumbnails: `https://picsum.photos/seed/soundbyte-music-{n}/100/100`
- Trending video thumbs: `https://picsum.photos/seed/soundbyte-vid-{n}/400/300`
- App mockup: `https://picsum.photos/seed/soundbyte-phone/400/700`
- App download bg: `https://picsum.photos/seed/soundbyte-appbg/1920/800`
- Schedule bg: none needed (white)
- Latest news cards: `https://picsum.photos/seed/soundbyte-news-{n}/600/400`
- Instagram grid: `https://picsum.photos/seed/soundbyte-insta-{n}/200/200`

### 6. Fidelity notes
- Original uses Owl Carousel → use CSS-based carousel or simple state-based slider
- Original uses jarallax for parallax → use CSS `background-attachment: fixed`
- Original uses Bootstrap grid → use Tailwind grid/flex equivalents
- Original uses Font Awesome icons → use lucide-react
- Original audio players → use styled placeholder (no real audio in React template)
- Weekly schedule table: original uses Bootstrap table-borderless → use Tailwind table classes
- Social share sidebar: omit vertical sidebar, integrate social icons in header/footer
- Preloader: omit (not needed in SPA)

### 7. Testing
- One describe per component
- Test all interactive elements (carousel nav, hamburger toggle, search modal)
- Test responsive behavior (mobile vs desktop layouts)
- Verify 100% coverage
