# Bulletin (ColorLib Newsflex) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bulletin`.

## Design notes (replication findings)

- **Original:** ColorLib "NewsFlex" — news / magazine template
  (source: https://colorlib.com/wp/template/newsflex/).
  TEMPLATES.md has TWO copies of this item (lines 276 and 2207 — mark
  BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/newsbox/
  (HTTP 200, 71.5 KB rendered DOM, title "Newsbox - Modern Magazine &
  Newspaper HTML Template"). **Slug warning:** the live preview is
  `newsbox` — `https://preview.colorlib.com/theme/newsflex/` returns 404.
  Stylesheet `style.css` (47 KB) + bootstrap/classy-nav/owl.carousel/
  animate/magnific-popup/font-awesome imports; Raleway via Google Fonts
  `@import`.
- **Screenshot:** `newsbox-free-template.jpg` — verified live in a browser
  (vision, 1200×946): clean grid-based news portal on white; pink/red
  accent on the "News" part of the logo and the "Trending" button; light
  grey `#f4f4f8` breaking bar and newsletter box; hero mosaic (one large
  image + two stacked, dark bottom gradient, white captions with date);
  "ALL THE NEWS" tabbed section (LATEST active with pink underline,
  POPULAR / INTERNATIONAL / LOCAL); right sidebar with "Subscribe to our
  newsletter" form; image cards with date + headline below.
- **Visual design:** modern news/magazine — white page, hot-pink/red
  `#ef1b48` accent, light-grey `#f0f4f8` section fills, dark-grey
  `#232323`/`#404040` text, Raleway display font, square 54px buttons,
  image cards with hover zoom (style-1 scale 1.1) or lift (style-2
  translateY -15px), uppercase 12px tabs, 2px `#d6dfe2` footer hairline.

## Design tokens (from style.css)

| Token            | Value                                                                           | Where                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Accent pink/red  | `#ef1b48`                                                                       | `.newsbox-btn` bg, "Trending" box, active tab, title/author/nav/footer hover, video play buttons, video slideshow top border |
| Light grey bg    | `#f0f4f8`                                                                       | breaking-news area, newsletter widget, category featured posts                                                               |
| Ink text         | `#232323`                                                                       | style-2/3/4 card titles                                                                                                      |
| Grey text        | `#404040`                                                                       | nav links, footer nav + social, ticker headlines                                                                             |
| Meta grey        | `#636363`                                                                       | post dates, authors                                                                                                          |
| Inactive tab     | `#8a8a8a`                                                                       | unselected tabs (12px uppercase)                                                                                             |
| Copyright grey   | `#a9a9a9`                                                                       | footer copywrite text                                                                                                        |
| White            | `#ffffff`                                                                       | page bg, hero/overlay titles, button text                                                                                    |
| Dark overlay     | `rgba(0,0,0,.35)`                                                               | `.bg-overlay::after` on hero thumbnails / video bg image                                                                     |
| Button           | 54px tall, min-width 170px, radius 0, 18px/600, capitalize                      | `.newsbox-btn`; variants `.btn-2` `#2f2f2f`, `.btn-3` `#0b87d6`                                                              |
| Font             | **Raleway** (200–900)                                                           | Google Fonts `@import` in original; use `<link>` in recreation                                                               |
| Hero title       | 30px/500 white, bottom-left over image                                          | `.single-blog-post.style-1 .post-title`                                                                                      |
| Card title       | 22px/600 `#232323`, hover `#ef1b48`                                             | style-2 (thumbnail top) and style-3 (video, white title)                                                                     |
| Mini row title   | 16px/600, 120px thumb left + 15px gap                                           | style-4                                                                                                                      |
| Newsletter input | 54px, bg `#d4dfe3`, italic 12px centered, no border                             | newsletter widget form                                                                                                       |
| Tabs             | 12px uppercase, no border, active `#ef1b48`                                     | `.intro-news-filter .nav-tabs`                                                                                               |
| Footer hairline  | 2px `#d6dfe2`                                                                   | `.footer-logo::after` behind centered logo                                                                                   |
| Section padding  | 100px top/bottom (`section-padding-100`); intro-news `-100-0`; big add `mb-100` | vertical rhythm                                                                                                              |
| Video section    | `bg-img bg-overlay bg-fixed` + inline `img/bg-img/10.jpg`                       | featured video 430px tall, centered 63px circular play button                                                                |
| Slider strip     | `border-top: 2px solid #ef1b48`                                                 | `.video-slideshow`                                                                                                           |

## Implementation tasks (order)

1. Scaffold `apps/bulletin` from the simplest existing app; rename package
   to `@free-react-templates/bulletin`; `npm install` at root; keep
   `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` with `--color-accent: #ef1b48`,
   `--color-mist: #f0f4f8`, ink/grey/meta tokens; add Raleway `<link>` in
   `index.html`.
3. Components (one file per section, colocated tests):
   - `Navbar.tsx` — brand "Bulletin" (two-tone: accent suffix), nav
     links (International / Local News / Pages / Sport / Lifestyle),
     mobile menu, header add placeholder box.
   - `BreakingNews.tsx` — pink "Trending" box + auto-scrolling ticker.
   - `HeroCarousel.tsx` — 2 slides × (1 large + 2 stacked) style-1 posts,
     auto-advance + prev/next, picsum seeds `bulletin-1..6`.
   - `NewsTabs.tsx` — "All the news" + 4 tabs; pane = 2 style-2 cards +
     6 style-4 rows; sidebar column with newsletter widget (email input +
     Subscribe → success state) + ad placeholder.
   - `VideoSection.tsx` — fixed bg image, centered circular play button,
     date + title, then 6 style-3 video cards strip.
   - `TopNews.tsx` — 6 style-2 cards, 3-col grid.
   - `BigAdd.tsx` — placeholder ad box.
   - `Footer.tsx` — logo over hairline, Contact Us / Closed Captioning /
     Site Map, social icons (inline SVG BrandIcon), copyright bar.
4. Compose in `App.tsx` in the exact section order above.
5. TDD: scenario-style tests mirroring the spec; 100% coverage.
6. `bash scripts/verify-app.sh bulletin` + `npm run spec:validate`.
7. PR: `feat: Bulletin — news magazine template (ColorLib Newsflex)`,
   merge immediately, then bookkeeping (both TEMPLATES.md lines `[x]` +
   surge URL, homepage, `npm run readme:status`).

## Fidelity checklist

- [ ] Section order 1:1: header → breaking → hero carousel → news tabs +
      sidebar → video → top news → big add → footer
- [ ] Raleway font, `#ef1b48` accent, `#f0f4f8` section fills, square
      54px buttons
- [ ] Hero posts: dark overlay + bottom-left white date/title; hover zoom
- [ ] Tabs functional (LATEST default), active tab accent-colored
- [ ] Video section: fixed bg, circular play button, 2px accent top border
      on slideshow strip
- [ ] Newsletter form validates email and shows a success state
- [ ] picsum.photos/seed/bulletin-<n>/<w>/<h> placeholders; no copied assets
- [ ] lucide icons only (Play, Menu, Search, ChevronDown…) + inline SVG
      brand icons; verify `node -e "console.log(typeof
    require('lucide-react').Facebook)"` → undefined (use BrandIcon)
- [ ] Duplicate nav links in mobile + desktop DOM: use `getAllByRole` in
      tests
