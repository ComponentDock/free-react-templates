# Montage (ColorLib Videomag) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-montage`.

## Design notes (replication findings)

- **Original:** ColorLib "Videomag" — HTML template for video & magazine
  (source: https://colorlib.com/wp/template/videomag/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/videomag/
  (HTTP 200; ~78 KB HTML + `style.css` ~37 KB parsed for tokens; sub-CSS:
  bootstrap, classy-nav, owl.carousel, animate, magnific-popup,
  font-awesome, nice-select). Screenshot `videomag-free-template.jpg`
  (1200×946, AVIF) viewed in browser.
- **Visual design (from screenshot):** bright pink (#ff1662) top header
  with "Video Mag" logo (play icon) left + "ADD BANNER" placeholder
  right; dark charcoal navbar strip below (Home highlighted pink, Videos,
  Pages ▾, Features ▾, Music, Contact + search field far right). Hero =
  masonry-style featured grid: large left card (photo, centered
  semi-transparent play button, FEATURED tag, title, author/date,
  comment/view icons) + right column of three cards (all tagged
  FEATURED). Below: white section with tabs LATEST / TOP VIEWED / SEE ALL
  VIDEOS and carousel arrows. Stark white content background, pink
  accents everywhere.
- **Structure (1:1, section order):**
  1. Top header (`div.top-header-area`): `.logo-area` (play icon + "Video
     Mag" wordmark) → `.top-add-area.text-right` (ad banner placeholder).
  2. Navbar (`nav.classy-navbar.justify-content-between`, id
     `videomagNav`): links Home (active, pink) / Videos / Pages ▾ /
     Features ▾ / Music / Contact; `.top-search-area` with `#topSearch`
     input (type search, placeholder "Search") on the right.
  3. Hero grid (`div.hero-area.d-flex.flex-wrap`, bg #EDF1F4): four
     `.single-welcome-post.bg-img.item1..item4` featured cards (heights
     700px primary → 200px small; right cards flex-basis
     calc(50% - 10px), margin 5px). Each: `.welcome-post-content` >
     `.single-blog-post.white` > `.blog-content` (FEATURED tag, h4
     title) > `.post-meta` (author / calender / chat / like icons).
     Primary card has a play-button overlay.
  4. Tabs + carousels (`div.video-mag-tabs-area.mt-50`): Bootstrap tab
     nav — "Latest" / "Top Viewed" / "See All Videos" (owl prev/next
     arrows). `.tab-content` > three `.tab-pane.fade` (Latest =
     `.latest-videos-slide`, others `.videos-slide`, all `owl-carousel`):
     rows of `.single-blog-post.style2` cards — `.blog-thumb.mb-30`
     image, `.blog-content` title, `.post-meta`.
  5. Travel videos (`section.travel-videos-area`):
     `.travel-videos-content` — `.single-welcome-post.style-2.bg-img
.mb-30` featured card + `.single-blog-post.style3.mb-30` rows
     (`.post-meta.d-flex.justify-content-between`). Heading "Travel
     Videos".
  6. Small videos (`section.small-videos-area`): `.small-videos-content`
     — `.single-blog-post.style2.mb-50` vertical cards (`.blog-thumb
.mb-5`) + `.single-blog-post.style4.d-flex.mb-30` horizontal rows
     (thumb left, `.blog-content` right). Headings "Fashion" /
     "Technology" / "July Top" (h2s seen in DOM).
  7. Big ad (`div.big-add-area.mb-100`): full-width `img/bg-img/add.png`
     banner placeholder.
  8. Footer (`footer.footer-area.section-padding-100`, bg #1F1C1C):
     widget columns — "Usefull Links" (About us, Categories,
     Testimonials, Contact Us, Jobs, Terms, Conditions, About), "About
     Us", "Video Categories" (Travel, Games); social `nav`; copywrite
     bar (© current year, ColorLib-style attribution).
- **Design tokens (from CSS):**
  - Brand: **#FF1662** (hot pink) — top-header bg, active nav, tags,
    buttons, footer hover. Put in `@theme` as `--color-brand`.
  - Secondary: **#E10735** (hover red-pink).
  - Dark: #282828, #312E2E (navbar), #1F1C1C (footer bg), #565151
    (`.video-catagory` bar: 45px tall, flex, padding 0 30px, white 14px
    text).
  - Light: #EDF1F4 (hero bg), #FFFFFF (content/cards).
  - Text/muted: #6A6A6A (meta, footer muted), #A5A5A5, #DCDCDC
    (borders), #000000 (headings), #404040/#606060.
  - Font: **"Montserrat"** (300/400/500/600/700) via Google Fonts
    `@import` in preview CSS; body base Montserrat sans-serif.
  - Cards: `.single-blog-post.style2` = thumb + title + `.post-meta`
    (author/calender/chat/like icons from `img/core-img/*.png`);
    `.style4.d-flex` = horizontal thumb-left rows; `.style3` rows with
    meta spread `justify-content-between`.
  - Footer: `section-padding-100`; widget titles 18px #fff; links 14px
    #6A6A6A hover #FF1662; copywrite 12px #666666.

## Implementation tasks (order)

1. Scaffold `apps/montage` (copy simplest existing app, rename package to
   `@free-react-templates/montage`; register workspace via root
   `npm install`; verify `grep -c "free-react-templates/montage"`
   package-lock.json). Remember `injectUiSource()` in vite.config.ts.
2. `src/index.css`: Tailwind entry + `@theme` tokens — `--color-brand:
#FF1662`, `--color-ink: #1F1C1C`, dark navbar #312E2E, hero bg
   #EDF1F4, muted #6A6A6A; font Montserrat (300–700) via Google Fonts
   `<link>` in `index.html`.
3. `src/components/Header.tsx` (top header + navbar): pink bar — logo
   (Play icon in a circle + wordmark "Montage") left, styled ad-banner
   placeholder box right; dark navbar — links Home (active, brand pink),
   Videos, Pages, Features, Music, Contact + search input (placeholder
   "Search", aria-label). Tests: header shows logo + ad placeholder;
   navbar shows all 6 links with Home active; search input present;
   links focusable.
4. `src/components/HeroGrid.tsx`: light (#EDF1F4) masonry-style featured
   grid — one large primary card (cover image, play-button overlay,
   FEATURED tag, title, meta) + smaller cards (tag, title, meta). Card
   data as a typed array (title, author, date, comments, likes, large?).
   Tests: primary card larger + play overlay; every card has tag/title/
   meta; meta shows author/date/comments/likes with icons.
5. `src/components/TabsCarousel.tsx`: tab nav (Latest / Top Viewed / See
   All Videos) with active tab switching (state), each pane a horizontal
   row of video cards (thumb, title, meta) with prev/next arrow buttons
   (scroll the row). Tests: tabs render, Latest active by default;
   switching tabs swaps the visible card set and active styling; arrows
   present and scroll.
6. `src/components/TravelVideos.tsx` + `SmallVideos.tsx`: "Travel Videos"
   section (featured card + style3 rows, meta justify-between) and small
   videos area (vertical style2 cards + horizontal style4 thumb-left
   rows). Tests per component: heading + card rows render with title and
   meta.
7. `src/components/AdBanner.tsx`: full-width banner placeholder box
   between content and footer. Test: banner region renders.
8. `src/components/Footer.tsx`: dark footer — widget columns "Useful
   Links" (About us, Categories, Testimonials, Contact Us, Jobs, Terms,
   Conditions), "About Us" (blurb), "Video Categories" (Travel, Games),
   social icon links, copyright bar with current year + attribution.
   Tests: three widget columns render; links list; copyright present.
9. `src/App.tsx`: compose Header + HeroGrid + TabsCarousel + TravelVideos
   - SmallVideos + AdBanner + Footer in reference order; document title
     "Montage — Video Magazine Template"; main landmark.
10. Gate: `scripts/verify-app.sh montage` (typecheck + lint + 100%
    coverage + build). PR: `feat: Montage — video magazine template
(ColorLib Videomag)` → merge immediately.

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `scripts/verify-app.sh montage` green (100% coverage)
- [ ] Section order 1:1 with reference; tab switching works
- [ ] Brand #FF1662 in @theme; Montserrat loaded
- [ ] Placeholder images seeded per template; no copied assets
