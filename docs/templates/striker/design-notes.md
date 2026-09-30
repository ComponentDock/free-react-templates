# Striker — Design Notes

## Source
- ColorLib: Soccer (soccer club site — results, standings, news, videos)
- URL: https://colorlib.com/wp/template/soccer/
- Preview (LIVE): https://preview.colorlib.com/theme/soccer/ (verified 2026-09-30, HTTP 200)
- Preview CSS: `css/style.css` (25,240 bytes) — tokens extracted; screenshot analyzed

## Structure order (top to bottom)
1. Navbar (absolute over hero): white wordmark + uppercase links Home/Matches/Players/Blog/Contact + mobile hamburger/panel
2. Hero (photo bg + dark overlay): headline "World Cup Event" + subtext + 5-unit countdown (weeks/days/hr/min/sec) + "Book Ticket" (red) + "Learn More" (white link) — right column on desktop
3. Match-result VS card (overlaps hero −90px): dark left half (crest + "LA LEGA (win)" + 4 scorers) | big white "4 – 1" | RED right half with diagonal split (crest + "JUVENDU (loss)" + 4 scorers)
4. Latest News: red-bar heading + 3 hover-caption photo cards (red diagonal + title + author row)
5. Dark section: two widgets — "Next Match" (red title bar, VS block, match info, ticking countdown) + "Football League" (red title bar, VS block, standings table P/W/D/L/PTS × 8 rows)
6. Videos: red-bar heading + prev/next arrows + 6-item carousel (thumb + red 50px play button w/ ring + caption)
7. Our Blog: 2 posts (image + red date pill + title + excerpt + "Read more")
8. Footer (#1a1e25): 4 link columns (News/Tickets/Matches/Social) + social icons + copyright + Component Dock link

## Fidelity notes

### Design tokens (canonical, from live CSS)
- Font: Montserrat (Google Fonts 300/700/900); body 16px, weight 300, line-height 1.7, color gray
- Page bg `#222831` · brand red `#ee1e46` · footer `#1a1e25` · match card `#0d0f13`
- Yellow `#f6d743` declared but overridden by red — unused
- Buttons: uppercase 12px/900/2px border; primary solid `#ee1e46`; hover transparent + white border/text
- Section headings: white 20px/700 with 10px `#ee1e46` left bar (`.heading:before`)
- Widget title bars: solid `#ee1e46`, white, padding 16px 20px; widget border `1px solid rgba(255,255,255,0.1)`
- Score: 3rem/700 white; match card: radius 10px, margin-top −90px, shadow `0 15px 30px rgba(0,0,0,0.1)`
- Section padding 2.5em→5em; `.latest-news` 100px 0
- Play button: 50px `#ee1e46` circle + 60px 2px red ring, white glyph

### Navbar
- Transparent, absolute over hero; active link underlined; hover `#ee1e46`
- OUR wordmark (never the source "SOCCER™" logo asset); mobile: hamburger → slide-in panel, aria-expanded

### Hero
- Ball-in-net photo via `picsum.photos/seed/striker-hero` + dark overlay
- h1 4rem/700 desktop (2.5rem mobile), right column `col-lg-5 ml-auto`
- Countdown: React `useEffect` + `setInterval`, fixed target date, padded numbers, cleanup on unmount — no jQuery plugin
- "Book Ticket" red button (hover → transparent + white border); "Learn More" white text link

### Match-result VS card (signature element)
- `#0d0f13` rounded card overlapping the hero (−90px)
- Centered "4 – 1" 3rem white; left dark half: crest + team + "(win)" + scorer list "Name (jersey#)"
- Right half solid `#ee1e46` with DIAGONAL left edge (CSS `clip-path` or skewed pseudo-element) cutting into the dark half; same content shape, "(loss)"
- Stacks vertically on mobile

### Latest News
- 3 photo cards (picsum `striker-1..3`); hover reveals red `#ee1e46` diagonal caption band (`left: -12%`) + white title + author (round avatar `striker-avatar`, name, date)

### Next Match / Football League widgets
- Two bordered cards in a dark section; red title bars: "Next Match" / "Football League"
- VS block: crest vs "vs" mark vs crest; info lines: competition ("Soccer" / "World Cup League"), date ("December 20th, 2020 9:30 AM GMT+0"), venue ("New Euro Arena") — paraphrase OK, same kinds of lines
- "Next Match" → ticking countdown (shared Countdown component); "Football League" → standings table (Team/P/W/D/L/PTS, 8 demo rows), readable on dark

### Videos
- Red-bar heading + circular chevron buttons (focusable, aria-labels)
- 6 cards (cycling 3 titles fine): thumb (picsum `striker-video-1..5`) + red play button + white caption
- Carousel: native scroll-snap or simple state slider — NO owl.carousel/jQuery

### Our Blog
- 2 posts: image + red 12px date pill + white bold title + gray excerpt + "Read more" (white → red hover)

### Footer
- `#1a1e25`, 70px padding, 14px `rgba(255,255,255,0.5)` text
- Columns: News (All Club News, Media Center, Video, RSS) · Tickets (Online Ticket, Payment and Prices, Contact & Booking, Tickets Coupon) · Matches (Standings, World Cup, La Lega, Hyper Cup, World League) · Social (Twitter, Facebook, Instagram, Youtube) — paraphrase OK, same kinds
- lucide social icons with aria-labels (muted → red hover)
- Copyright + heart + **Component Dock link** (https://www.componentdock.com/); zero ColorLib references

## Rules recap for implementer
- New name **Striker**, folder `apps/striker`, package `@free-react-templates/striker`
- Never copy assets — picsum placeholders, Google Fonts, lucide-react icons only
- No ColorLib strings in the app (comments included); provenance lives in spec + TEMPLATES.md + PR
- 100% coverage; `scripts/verify-app.sh striker` green
