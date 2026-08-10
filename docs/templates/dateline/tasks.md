# Dateline (ColorLib Newsflex) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dateline` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Newsflex" — free responsive news website template
  (source: https://colorlib.com/wp/template/newsflex/). Listed in
  TEMPLATES.md under Blog (line 276; slug repeats at line 2207 — one
  recreation covers both dup rows). New name: **dateline**.
- **Live preview REACHABLE — SLUG MISMATCH:** `preview.colorlib.com/theme/
newsflex/` returns 404; the real preview is
  **`https://preview.colorlib.com/theme/newsbox/`** (HTTP 200, ~71KB HTML,
  title "Newsbox - Modern Magazine & Newspaper HTML Template"). The
  screenshot file in TEMPLATES.md is also named `newsbox-free-template.jpg`.
  CSS: `style.css` (~47KB custom theme, CRLF) + `@import`s (bootstrap,
  classy-nav, owl.carousel, animate, magnific-popup, font-awesome) +
  Raleway Google Font. Screenshot + live render both verified in browser.
- **Structure (1:1, section order from the DOM):**
  1. Header (`header.header-area`, z-index 1000; `.newsbox-main-menu`
     125px → 90px, `padding: 0 5%`, white): logo wordmark left ("News" dark
     - "Flex" pink in source → "Date"+"line" for Dateline, Raleway bold) +
       menu links International / Local News / Pages / Sport / Lifestyle +
       top-right ad slot "YOUR ADD HERE".
  2. Breaking news (`section.breaking-news-area`, bg `#f0f4f8`, `padding:
35px 4%` → `20px 1%`, `margin: 0 20px 20px`): `div.breaking-news-
ticker` — `div.title` "Trending" solid pink block (55px tall,
     `flex: 0 0 180px` → 150px, bg `#ef1b48`) + `div.ticker` rotating
     headline links.
  3. Hero (`div.hero-area` > `div.hero-post-slides` owl carousel, 2
     slides): each slide = 1 large `single-blog-post.style-1` card
     (`blog-thumbnail.bg-overlay` photo + content: date, title, "By
     <author>") + 2 stacked style-1 cards beside it.
  4. Intro news (`section.intro-news-area.section-padding-100-0.mb-70`):
     col-lg-8 main column — `h6` "ALL THE NEWS" + `div.intro-news-filter`
     (height 32px→64px, bg `#f0f4f8`, mb-30) with nav-tabs LATEST /
     POPULAR / INTERNATIONAL / LOCAL + 4 tab-panes (each: 2 × style-2 big
     cards `mb-5` + 4 × style-4 d-flex thumb-left rows `mb-30`); sidebar
     col-lg-4 — `newsletter-widget` (bg `#f0f4f8`, padding 50px 20px,
     centered; h4 "Subscribe to our newsletter"; email input bg `#d4dfe3`
     54px italic; Subscribe newsbox-btn) + `add-widget` (360×370 ad
     placeholder).
  5. Video (`section.video-area.bg-img.bg-overlay.bg-fixed`,
     `background-image: url(img/bg-img/10.jpg)` — fixed parallax + dark
     overlay): `featured-video-area` (height 430px, centered): `a.video-
btn` 63×63 circle bg `#ef1b48` white play icon (hover `#000`) +
     `span.published-date` + `h3` white title; below `video-slideshow.py-5`
     — owl carousel of 6 × style-3 video cards.
  6. Top news (`section.top-news-area.section-padding-100`): 6 ×
     col-sm-6 col-lg-4 style-2 cards (`mb-5`) + `div.load-more-button.text-
center` "Load More" newsbox-btn.
  7. Big ad (`div.big-add-area.mb-100`): full-width bordered placeholder.
  8. Footer (`footer.footer-area`, dark charcoal/black): centered
     `footer-logo.mb-100` wordmark on `#d6dfe2` 2px divider line
     (`.footer-logo::after`; logo on white inline-block `padding: 0 10px`)
     - `footer-content.text-center`: `footer-nav` (Contact Us / Closed
       Captioning / Site Map) + `footer-social-info` (circular social icons,
       `padding: 0 15px`, 14px, `#404040`) + copyright paragraph.
- **Tokens (from `style.css`):** Raleway (200–900) everywhere; brand
  `#ef1b48` (Trending label, all buttons, video play, logo suffix); hover →
  `#000`; panels `#f0f4f8` (breaking bar, filter, newsletter widget);
  newsletter input `#d4dfe3` / text `#4c4c4c` italic 12px; footer divider
  `#d6dfe2`; social text `#404040`; `.newsbox-btn`: radius **0**, min-width
  170px, height 54px, line-height 54px, padding 0 30px, 18px/600,
  capitalize; variant `.btn-2` bg `#2f2f2f`; video-btn 63×63 radius 50%;
  header menu height 125px → 90px.
- **Caveats to fix in recreation:** dates all repeat "June 20, 2018";
  author always "By Michael Smith"; several titles repeat verbatim across
  the grid ("Nearly a quarter have no emergency savings", "Top bitcoin
  exchange…", "Dow falls 287 points…" ×2 each; "Traffic Problems in Time
  Square" used for both the video title and a sidebar post) — write
  DISTINCT titles/dates/authors of the same kinds. All `href="#"` → real
  placeholder hrefs. Ad slots become bordered "YOUR ADD HERE" panels.
  Copyright → paraphrase, drop Colorlib credit.

## Tasks (implementation order)

1. Scaffold `apps/dateline` from the simplest existing app (copy app,
   rename package to `@free-react-templates/dateline`); `bun install` at
   root to register the workspace in the lockfile; verify
   `grep -c "free-react-templates/dateline" package-lock.json`.
2. `index.html`: title "Dateline — News & Magazine", Raleway Google Fonts
   `<link>` (200–900).
3. `src/index.css` `@theme` tokens (see Verification checklist in spec):
   brand `#ef1b48`, ink `#000`, panel `#f0f4f8`, input `#d4dfe3`, line
   `#d6dfe2`, muted `#404040`, btn-alt `#2f2f2f`; `--font-sans: Raleway`;
   add a reusable `bg-overlay` utility (photo + dark gradient overlay for
   hero thumbnails and the video section).
4. Components with colocated tests (TDD, 100% coverage):
   - `Header` — wordmark, menu links, ad slot, mobile hamburger.
   - `BreakingTicker` — pink "Trending" label + auto-rotating headlines
     (pause on hover).
   - `HeroPosts` — carousel of slides (1 large + 2 stacked cards),
     prev/next + dots.
   - `NewsTabs` — "All the News" + 4 tabs; active pane = 2 big cards + 4
     list rows; distinct content per pane.
   - `Sidebar` — newsletter form (email validation, success state) + ad
     panel.
   - `VideoArea` — parallax bg, circular play button, date + title,
     video-card slideshow.
   - `TopNews` — 6-card 3-col grid + Load More (reveals more cards).
   - `BigAd` — full-width placeholder panel.
   - `Footer` — wordmark on divider, links, socials, copyright.
5. `App.tsx`: Header → BreakingTicker → HeroPosts → NewsTabs + Sidebar →
   VideoArea → TopNews → BigAd → Footer.
6. Images: `https://picsum.photos/seed/dateline-<n>/<w>/<h>` only; ad
   panels are bordered placeholders (no images).
7. Verify: `npm run verify:app dateline` (typecheck + lint + vitest 100% +
   build). PR: branch `feat/template-dateline`, conventional commits,
   merge immediately with `gh pr merge --squash --delete-branch`.
8. PR description must include: source (Newsflex), preview URL
   (`https://preview.colorlib.com/theme/newsbox/` — note the slug
   mismatch), design tokens, renames, placeholder images, dup-row note
   (line 2207 covered by the same recreation).
