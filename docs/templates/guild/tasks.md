# Guild (ColorLib "The Quest") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-guild` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "The Quest" — free gaming blog/community website
  template (source: https://colorlib.com/wp/template/the-quest/). Listed in
  TEMPLATES.md under the Gaming category (line 512); duplicate row at line
  1821 (another category) — same template, ONE app only.
- **Preview REACHABLE (HTTP 200) — SLUG HAS NO HYPHEN:**
  `https://preview.colorlib.com/theme/thequest/`. The hyphenated URL
  (`/theme/the-quest/`) returns 404; products.js registers the slug as
  `thequest`. DOM fetched (`/tmp/thequest.html`, 56,835 bytes) + stylesheet
  `css/style.css` (`/tmp/thequest-style.css`, 25,874 bytes) + TEMPLATES.md
  screenshot (`thequest-free-template.jpg`, 1200×946, viewed in browser).
- **Aesthetic:** dark-mode gaming blog — black/dark-grey surfaces, white
  headings, bright mint/teal `#10ddb4` accent (pill buttons, date badges,
  search underline, active slider dot), colorful category count badges,
  Roboto. Screenshot: dark grey header ("THE QUEST" logo with "Gaming
  Community Website" subtitle in the logo art + nav + fantasy-character
  promo ad on the right), dark atmospheric hero with centered white "Enter
  the Battle" + teal "READ MORE" pill, dark blog area with featured post
  (blocky game-scene photo, teal date badge, "By Admin | In Games | 3
  Comments") and sidebar (search, Categories with rainbow badges, Latest
  News).
- **No social icons anywhere** (header + footer have none) — do NOT add
  any; no brand-icon SVGs needed.
- **Sliders/menus are jQuery plugins in the source** (owl-carousel for the
  hero + slicknav for the mobile menu) — implement with React state: a
  2-slide hero with dots + auto-advance, a hamburger mobile menu with the 6
  nav links (dark `#353535` treatment).
- **Buttons:** `.site-btn` = pill (radius 50px), uppercase 14px/600,
  min-width 164px, padding 21px 47px, bg `#10ddb4`, text `#161616`; hover
  keeps bg + text. Used for hero "Read More" and every post's "Read More".
- **Copy is placeholder/Lorem** — paraphrase freely, keep the same kinds:
  nav links (Home / Characters / Games / Reviews / News / Page), hero title
  "Enter the Battle" + blurb + CTA, post date "April 1, 2019" + titles
  ("The best games of 2019" / "Tips to play a better game" / "10 Amazing
  new games") + "By Admin | in Games | 3 Comments" metas, categories + count
  numbers (20/23/25/17/15/22), widget titles, footer link lists (note the
  source's typo'd "Usfull Links" and "Careeres" titles — fix to "Useful
  Links"/"Careers" in the recreation).

## Structure (top → bottom, single page)

1. **Header** (`.header-section`, absolute over hero, bg `#353535`,
   z-index 9999) — `.site-logo` img left, `.main-menu` inline (padding-left
   44px): **Home / Characters / Games / Reviews / News / Page** (16px/500
   white, padding 44px 7px, margin-right 55px), `.header-add` promo ad img
   right. Mobile: hamburger toggle → dark menu with the same 6 links.
2. **Hero slider** (`.hero-section` → `.hero-slider` owl-carousel) — 2
   `.hero-item` slides (height 804px, flex-centered, cover bg image,
   position top center; source `img/slider/1.jpg`, `2.jpg`): centered
   `col-lg-10 offset-lg-1` content: `h2` "Enter the Battle" (96px/700
   white, mb 15px), `p` blurb (20px, mb 35px), `.site-btn` "Read More".
   Dots: 9×9px circles, `#7a7e7d` inactive / `#10ddb4` active, right 35px /
   bottom 20px.
3. **Blog section** (`.blog-section.spad`, bg `#1c1c1c`; `.spad` = 106px
   top/bottom padding) — row 8/4:
   - Posts (`col-lg-8 .blog-posts`, margin-bottom -70px): 1
     `.blog-post.featured-post` (full-width img mb 34px, `.post-date` mint
     badge "April 1, 2019" 14px/700, `h3` white "The best games of 2019",
     `.post-metas` "By Admin | in Games | 3 Comments" — 14px `#8c8c8c`
     inline items separated by `|`, category link `#ffea00` — excerpt,
     `.site-btn` "Read More") + 4 `.blog-post` (same, `h4` white titles
     alternating "The best games of 2019" / "Tips to play a better game").
   - Sidebar (`col-lg-4`) widgets in order: `.sb-search` (input 53px tall,
     italic 14px, borderless, 3px `#10ddb4` bottom border) → **Categories**
     (`.sb-title` 18px/700 white mb 60px; `.sb-cata-list` 6 links 16px
     `#8c8c8c` with 25px circle count badges, 11px `#1c1c1c` text, radius
     35px: **Games 20 · Gaming Tips & Tricks 23 · Online Games 25 · Team
     Games 17 · Community 15 · Uncategorized 22** — badge colors nth-child
     1–6: `#10ddb4` `#ff1980` `#ffe119` `#5da9e4` `#bd9bd2` `#f89843`) →
     **Latest News** (4 `.ln-item`s: 85×85 thumb left + `.ln-date` + `h6`
     - `.ln-metas`) → ad banner img (`.add`) → **Latest Comments** (4
       `.lc-item`s: 55×55 round avatar + `h6` "Jane Smith In [post]" +
       `.lc-date`).
4. **Blog list section** (`.blog-list-section.spad`, bg `#222222`) — row
   8/4:
   - Left: 4 `.sb-item`s (mb 43px): img 166px left mr 27px + `.sb-text`
     (`.sb-date`, `h6` white, `.sb-metas` meta row, `p` excerpt) — titles
     "10 Amazing new games".
   - Sidebar: ONE widget — **Top 5 this week** (`.sb-title` +
     `.latest-news-widget.top-five`): 5 `.ln-item`s with `.ln-index`
     "01"–"05" + 85×85 thumb + `.ln-text` (date, h6, metas).
5. **Video section** (`.video-section`, bg `#2d2d2d`, padding 70px 0,
   text-center) — `.video-logo` (logo-2 img + `p` "2018's Best Game") +
   `.video-popup-warp` (relative: video thumbnail img + `.video-play`
   absolute 100×56 pill radius 50px, bg `#ff2260`, centered
   `top: calc(50% - 28px); left: calc(50% - 50px)`, 26px white lucide
   `Play`, links the source's YouTube URL
   `https://www.youtube.com/watch?v=xzCEdSKMkdU` or a placeholder).
6. **Footer** (`.footer-section`, bg `#000000`, padding-top 73px) — 5
   columns: `col-lg-3` `.about-widget` (logo img mb 40px + `p`), `col-lg-2`
   **Useful Links** (Games / testimonials / Reviews / Characters / Latest
   news), `col-lg-2` **Services** (About us / Services / Become a writer /
   Jobs / FAQ), `col-lg-2` **Careers** (Donate / Services / Subscriptions /
   Careers / Our team), `col-lg-3` `.footer-widget.fw-latest-post` titled
   "Useful Links" with 2 text `.ln-item`s (`.ln-date` + `h6` + `.ln-metas`).
   `.fw-title` 18px/700 white (padding-top 42px, mb 44px); `ul li a` 16px
   `#8c8c8c` (mb 10px). `.copyright` bar (16px `#8c8c8c`, padding 35px 0
   30px, text-center): "Copyright © <year> All rights reserved | This
   template is made with ♥ by **Component Dock**" — Component Dock MUST link
   https://www.componentdock.com/ (replaces source's Colorlib credit).

## Implementation tasks (implementer)

- [ ] Scaffold `apps/guild` from the simplest existing app; package
      `@free-react-templates/guild`; `npm install` at root so the lockfile
      registers the workspace; CNAME `guild.free.componentdock.com`;
      homepage `https://guild.free.componentdock.com`
- [ ] `@theme` tokens (see spec checklist) + Roboto Google Fonts link
- [ ] Components: `Header` (logo + nav + ad + mobile hamburger menu),
      `HeroSlider` (2 slides, dots, auto-advance), `BlogSection` (featured +
      4 posts + sidebar: Search/Categories/LatestNews/Ad/LatestComments),
      `BlogListSection` (4 compact posts + Top 5 widget),
      `VideoSection` (logo + tagline + play button), `Footer` (5 columns +
      copyright bar with Component Dock link)
- [ ] Screen picsum seeds for subject-critical photos (2 hero slider
      backgrounds — dark game/fantasy landscapes; featured + regular post
      photos; video thumbnail) — pixel-metric screening + browser verify,
      pin verified seeds in spec + PR
- [ ] TDD: Vitest + RTL, 100% coverage; `bash scripts/verify-app.sh guild`
- [ ] PR: source = ColorLib The Quest, preview
      `https://preview.colorlib.com/theme/thequest/` (NO hyphen), tokens,
      diffs (name, placeholder images, owl-carousel → React slider,
      slicknav → React mobile menu, fixed "Usfull Links"/"Careeres" typos)
