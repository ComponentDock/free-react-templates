# Template: Guild (Blog — Gaming)

## Purpose

Guild is a single-page gaming-community blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Quest" gaming blog template design (see TEMPLATES.md,
line 512 — duplicate row at line 1821 under another category, same template,
ONE app only), built under a different name ("Guild" — a gaming-community
word, matching the source's "Gaming Community Website" positioning) with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "The Quest" — free gaming blog/community HTML
  template (source: https://colorlib.com/wp/template/the-quest/). Single
  page: dark grey header (logo + nav: Home / Characters / Games / Reviews /
  News / Page + a promo ad image on the right), a 2-slide full-width hero
  slider (dark game-scene background photos, centered "Enter the Battle"
  96px title + blurb + pill "Read More" button), a dark blog section
  (bg `#1c1c1c`: 1 featured post + 4 regular posts, each with photo, mint
  date badge, title, "By Admin | in Games | 3 Comments" meta row, excerpt
  and a pill "Read More" button; sidebar: search input with mint underline,
  Categories list with colorful count badges, Latest News (4 thumb items),
  an ad banner, Latest Comments (4 avatar items)), a second darker blog-list
  section (bg `#222222`: 4 compact posts with 166px thumbnails + a sidebar
  with only a numbered "Top 5 this week" widget), a video promo section
  (bg `#2d2d2d`: logo + "2018's Best Game" tagline + video thumbnail with a
  pink pill play button linking a YouTube video), and a black footer (5
  columns: about text, Useful Links, Services, Careers, latest-posts widget
  - centered copyright bar).
- **Live preview REACHABLE (HTTP 200) — SLUG HAS NO HYPHEN:**
  `https://preview.colorlib.com/theme/thequest/`. The hyphenated URL
  (`/theme/the-quest/`) returns 404; products.js registers the slug as
  `thequest`. DOM fetched (`/tmp/thequest.html`, 56,835 bytes) + stylesheet
  `css/style.css` (`/tmp/thequest-style.css`, 25,874 bytes) + TEMPLATES.md
  screenshot (`thequest-free-template.jpg`, 1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** dark-mode gaming blog
  aesthetic — black/dark-grey backgrounds, white headings, bright mint/teal
  `#10ddb4` accent (pill buttons, date badges, search underline, slider
  dots), colorful category badges, Roboto. Screenshot shows: dark grey
  header with "THE QUEST" logo (with "Gaming Community Website" subtitle in
  the logo art) + nav + a fantasy-character promo banner ("The best gaming
  collection" / BUY NOW) on the right; a large dark atmospheric hero image
  with centered white "Enter the Battle" + teal pill "READ MORE" button;
  below, a dark content area with the featured post (blocky Minecraft-like
  game scene photo, teal "April 1, 2019" badge, "The best games of 2019",
  "By Admin | In Games | 3 Comments") and a sidebar (search, Categories with
  colorful circular count badges, Latest News). Source copy is
  placeholder/Lorem — paraphrase freely, keep the same content kinds (nav
  links, hero title + blurb + CTA, post date + title + meta + excerpt +
  Read More, category names + counts, widget titles + items, footer link
  lists).

## Design tokens (from `css/style.css` of the live preview)

- **Brand mint/teal:** `#10ddb4` — `.site-btn` background, `.post-date` /
  `.ln-date`-style badges, `.sb-search input` 3px bottom border, active
  slider dot, first category count badge, `.copyright a:hover`, `.site-btn`
  hover text stays `#161616`.
- **Dark surfaces:** `#353535` (`.header-section` bg + `.main-menu` bg),
  `#1c1c1c` (`.blog-section` bg), `#222222` (`.blog-list-section` bg),
  `#2d2d2d` (`.video-section` bg), `#000000` (`.footer-section` bg).
- **Category count badge rainbow** (`.sb-cata-list li:nth-child(n) span`,
  25px circles, `#1c1c1c` text on color): 1 `#10ddb4`, 2 `#ff1980`,
  3 `#ffe119`, 4 `#5da9e4`, 5 `#bd9bd2`, 6 `#f89843`.
- **Secondary accents:** `#ffea00` (yellow — `.blog-post .post-metas a`
  category link), `#ff2260` (pink-red — `.video-play` button bg),
  `#ff1f56` (`.site-btn.sb-color` variant — unused on this page, skip).
- **Text:** `#fff` (headings: `.hero-item h2`, `.blog-post h3/h4`,
  `.sb-title`, `.fw-title`, `.main-menu li a`), `#8c8c8c` (body `p`,
  `.post-meta`, `.footer-widget ul li a`, `.copyright`, `.sb-cata-list li a`),
  `#161616` (`.site-btn` text).
- **Slider dots:** 9×9px circles, `#7a7e7d` inactive, `#10ddb4` active,
  positioned right 35px / bottom 20px of the hero.
- **Font:** `"Roboto", sans-serif` via Google Fonts — load via `<link>` in
  `index.html` (weights 400/500/700).
- **Buttons (`.site-btn`):** pill (`border-radius: 50px`), uppercase text,
  14px/600, `min-width: 164px`, `padding: 21px 47px`, `line-height: 1`,
  bg `#10ddb4`, color `#161616`; hover keeps bg, text stays `#161616`.
  Used for hero "Read More" and every post's "Read More".
- **Hero (`.hero-section` + `.hero-item`):** slider with 2 `.hero-item`
  slides, each `height: 804px`, flex-centered, `background-size: cover`,
  `background-position: top center` (source `img/slider/1.jpg`, `2.jpg` —
  use subject-screened picsum seeds of dark game/fantasy landscapes).
  `.hero-item h2` 96px/700 white, margin-bottom 15px; `.hero-item p` 20px
  (grey-ish), margin-bottom 35px; content column `col-lg-10 offset-lg-1`
  (centered).
- **Header (`.header-section`):** `position: absolute`, full-width, top 0,
  bg `#353535`, z-index 9999. `.site-logo` img left, `.main-menu` inline
  (padding-left 44px) with links 16px/500 white, `padding: 44px 7px`,
  `margin-right: 55px`; `.header-add` promo ad image on the right.
- **Blog section (`.blog-section.spad`, bg `#1c1c1c`, `.spad` = 106px
  top/bottom padding):** 8/4 split. `.blog-post` (margin-bottom 70px via
  `.blog-posts`), `.featured-post` first: img full-width (margin-bottom
  34px), `.post-date` inline-block 14px/700 `#161616`-ish on `#10ddb4`
  (padding 3px 16px, margin-bottom 25px), `.blog-post h3` white (featured)
  / `h4` white (regular), `.post-metas` (margin-bottom 30px; on featured
  30px, on regular 5px): `.post-meta` inline 14px `#8c8c8c`, padding-right
  15px / margin-right 14px, separated by `|` pseudo-element; category link
  `#ffea00`; then excerpt `p` and a `.site-btn` "Read More".
- **Sidebar (`.col-lg-4`):** `.sb-widget`s — `.sb-search` (input 53px tall,
  italic 14px, borderless, 3px `#10ddb4` bottom border), `.sb-title`
  18px/700 white (margin-bottom 60px), `.sb-cata-list` (link 16px `#8c8c8c`,
  count badge = 25px circle, 11px `#1c1c1c` text, radius 35px, rainbow
  colors), `.latest-news-widget` `.ln-item` (thumb 85×85 left, margin-right
  27px + `.ln-text`: `.ln-date` mint-ish small, `h6` white title, `.ln-metas`
  meta row), `.add` ad banner image, `.latest-comments-widget` `.lc-item`
  (55×55 rounded-50% avatar + `h6` "Name In [post link]" + `.lc-date`).
  Widgets in order: search → Categories → Latest News (4 items) → ad →
  Latest Comments (4 items).
- **Blog list section (`.blog-list-section.spad`, bg `#222222`):** 8/4
  split. Left: 4 `.sb-item`s (margin-bottom 43px): img 166px left,
  margin-right 27px + `.sb-text` (`.sb-date`, `h6` white, `.sb-metas` meta
  row, `p` excerpt). Sidebar: ONE widget — "Top 5 this week" (`.sb-title` +
  `.latest-news-widget.top-five`): 5 `.ln-item`s each with `.ln-index`
  (`01`–`05`) + 85×85 thumb + `.ln-text`.
- **Video section (`.video-section`, bg `#2d2d2d`, padding 70px 0,
  text-center):** `.video-logo` (logo-2 img + `p` "2018's Best Game"),
  `.video-popup-warp` (relative: `video-bg.jpg` img + `.video-play` absolute
  100×56 pill `border-radius: 50px`, bg `#ff2260`, centered via
  `top: calc(50% - 28px); left: calc(50% - 50px)`, 26px white play icon
  (lucide `Play`) linking the source's YouTube URL or a placeholder `#`).
- **Footer (`.footer-section`, bg `#000000`, padding-top 73px):** 5 columns
  — `col-lg-3` `.about-widget` (logo img, margin-bottom 40px + `p`), three
  `col-lg-2` `.footer-widget`s (`.fw-title` 18px/700 white, padding-top
  42px, margin-bottom 44px; `ul li a` 16px `#8c8c8c`, margin-bottom 10px):
  **Useful Links** (Games / testimonials / Reviews / Characters / Latest
  news), **Services** (About us / Services / Become a writer / Jobs / FAQ),
  **Careers** (Donate / Services / Subscriptions / Careers / Our team),
  `col-lg-3` `.footer-widget.fw-latest-post` titled "Useful Links" with a
  `.latest-news-widget` of 2 `.ln-item`s (text-only: `.ln-date`, `h6`,
  `.ln-metas`). `.copyright` bar (16px `#8c8c8c`, padding 35px 0 30px,
  text-center): "Copyright © <year> All rights reserved | This template is
  made with ♥ by **Component Dock**" where "Component Dock" links
  https://www.componentdock.com/ (replacing the source's Colorlib credit).
- **NO social icons anywhere** (header and footer have none) — do not add
  any.
- **Mobile:** source uses slicknav (jQuery) for a mobile menu + responsive
  single-column stacking. In React implement a hamburger toggle in the
  header showing the 6 nav links in a dark dropdown/overlay consistent with
  `#353535`; stack hero (auto height), posts, sidebar widgets, footer
  columns (col-sm-6 pattern) below `lg` breakpoints.
- **Placeholder images:** `https://picsum.photos/seed/guild-<n>/<w>/<h>`.
  Subject-critical photos (2 hero slider backgrounds — dark game/fantasy
  landscape scenes; featured/regular post photos; video thumbnail) MUST be
  screened per the seed-screening method (pixel metric + browser verify) —
  pick seeds that provably render game/fantasy/action scenes, pin the
  verified seeds in the PR + this spec. Icons from `lucide-react` (play,
  heart); no brand icons needed (no socials).

## Requirements

### Requirement: Header — logo, nav, ad

The system SHALL render a dark (`#353535`) header absolutely positioned over
the hero, full-width, containing a logo image (left), a nav with the links
Home / Characters / Games / Reviews / News / Page (16px/500 white, generous
44px vertical padding), and a promo ad image on the right. On mobile a
hamburger SHALL open a dark menu with the same links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the six nav links, and the ad image on the
  right

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a dark menu with the six nav links appears and can be closed

### Requirement: Hero slider

The system SHALL render a 2-slide hero slider (each slide 804px tall,
flex-centered, cover background image positioned top-center) with centered
content: an "Enter the Battle" title (96px/700 white), a blurb paragraph
(20px), and a pill "Read More" button (mint `#10ddb4` bg, `#161616`
uppercase 14px/600 text, radius 50px). Slider dots SHALL be 9×9px circles
(`#7a7e7d` inactive / `#10ddb4` active) at the right-bottom of the hero.

#### Scenario: Hero slides

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows two slides with the title, blurb, and Read More button,
  and the slider dots

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next slide control is used (dots or auto-advance)
- **THEN** the second slide with its own background image and content is
  shown

### Requirement: Blog section

The system SHALL render a dark (`#1c1c1c`, 106px vertical padding) section
with an 8-column posts column and a 4-column sidebar. The posts column SHALL
show a featured post (full-width photo, mint date badge "April 1, 2019",
white h3 title "The best games of 2019", meta row "By Admin | in Games | 3
Comments" with the category link in `#ffea00`, excerpt, pill Read More
button) followed by four regular posts (photo, date badge, white h4 title,
meta row, excerpt, Read More) with the same layout.

#### Scenario: Featured post

- **GIVEN** the blog section is rendered
- **WHEN** the first post is inspected
- **THEN** it shows the photo, date badge, "The best games of 2019" title,
  the meta row, an excerpt, and a Read More button

#### Scenario: Regular posts

- **GIVEN** the blog section is rendered
- **WHEN** the posts below the featured post are inspected
- **THEN** four regular posts are shown, each with photo, date badge, title
  ("The best games of 2019" / "Tips to play a better game" alternating),
  meta row, excerpt, and a Read More button

### Requirement: Blog sidebar

The system SHALL render the sidebar widgets in order: a search input (53px
tall, italic, 3px mint bottom border), a "Categories" widget (six links with
25px circular count badges in the rainbow colors: Games 20, Gaming Tips &
Tricks 23, Online Games 25, Team Games 17, Community 15, Uncategorized 22),
a "Latest News" widget (4 items with 85×85 thumbnails, date, h6 title, meta
row), an ad banner image, and a "Latest Comments" widget (4 items with
55×55 round avatars, "Name In [post]" text, date).

#### Scenario: Sidebar widgets

- **GIVEN** the blog section is rendered
- **WHEN** the sidebar is inspected
- **THEN** it shows search, Categories (6 links + colored count badges),
  Latest News (4 items), the ad banner, and Latest Comments (4 items) in
  order

### Requirement: Blog list section

The system SHALL render a second dark section (`#222222`) with an 8-column
list of 4 compact posts (166px left thumbnail, date, white h6 title, meta
row, excerpt) and a 4-column sidebar containing only a "Top 5 this week"
widget: 5 items each numbered `01`–`05` with a thumbnail, date, h6 title,
and meta row.

#### Scenario: Compact posts

- **GIVEN** the blog list section is rendered
- **WHEN** the posts column is inspected
- **THEN** four compact posts with thumbnails, titles, meta rows, and
  excerpts are shown

#### Scenario: Top 5 widget

- **GIVEN** the blog list section is rendered
- **WHEN** the sidebar is inspected
- **THEN** it shows the "Top 5 this week" widget with five numbered items
  (01–05)

### Requirement: Video promo section

The system SHALL render a video promo section (`#2d2d2d`, 70px vertical
padding, centered) with a logo image and the tagline "2018's Best Game",
plus a video thumbnail with a centered pink (`#ff2260`) pill play button
(100×56, radius 50px, white play icon) linking to the source's YouTube video
(or a placeholder).

#### Scenario: Video section content

- **GIVEN** the video section is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo + tagline and the video thumbnail with the
  play button

### Requirement: Footer

The system SHALL render a black footer with five columns: about (logo +
paragraph), Useful Links (Games / testimonials / Reviews / Characters /
Latest news), Services (About us / Services / Become a writer / Jobs / FAQ),
Careers (Donate / Services / Subscriptions / Careers / Our team), and a
latest-posts widget titled "Useful Links" (2 text items: date, h6 title,
meta row). A centered copyright bar (16px `#8c8c8c`) SHALL read "Copyright ©
<year> All rights reserved | This template is made with ♥ by **Component
Dock**" where "Component Dock" links https://www.componentdock.com/ (no
Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the about column, the three link columns, and the
  latest-posts widget

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-guild/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/guild`, package `@free-react-templates/guild`, no
      ColorLib references in app code (grep for colorlib/The Quest in apps/guild)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh guild`
- [ ] Section order matches the source: header (logo + nav + ad) → hero
      slider (2 slides) → blog section (featured + 4 posts + sidebar) →
      blog list section (4 compact posts + Top 5 widget) → video section →
      footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #10ddb4`,
      `--color-ink: #161616`, `--color-meta: #8c8c8c`,
      `--color-cata-1..6: #10ddb4/#ff1980/#ffe119/#5da9e4/#bd9bd2/#f89843`,
      `--color-post-link: #ffea00`, `--color-video-play: #ff2260`,
      `--color-header: #353535`, `--color-section: #1c1c1c`,
      `--color-section-2: #222222`, `--color-video: #2d2d2d`,
      `--color-footer: #000000`, `--color-dot: #7a7e7d`; Roboto Google Fonts
      `<link>` in `index.html`
- [ ] Header: `#353535` absolute, logo + 6 nav links + ad image; mobile
      hamburger → dark menu with the same links
- [ ] Hero: 2-slide slider, 804px slides, cover bg images, 96px "Enter the
      Battle", 20px blurb, mint pill "Read More", 9×9 dots (#7a7e7d /
      #10ddb4)
- [ ] Blog section: `#1c1c1c`, featured post (h3) + 4 regular posts (h4)
      with mint date badges, `|`-separated meta rows (yellow category link),
      pill Read More buttons
- [ ] Sidebar: search (mint underline) → Categories (rainbow count badges) →
      Latest News (4) → ad → Latest Comments (4)
- [ ] Blog list section: `#222222`, 4 compact posts (166px thumbs) +
      "Top 5 this week" numbered 01–05
- [ ] Video section: `#2d2d2d`, logo + "2018's Best Game" + thumbnail with
      pink pill play button
- [ ] Footer: black, 5 columns, `#8c8c8c` copyright bar with Component Dock
      link; NO social icons anywhere
- [ ] Placeholder images via `https://picsum.photos/seed/guild-<n>/<w>/<h>`,
      subject-screened (dark game/fantasy landscapes for the 2 hero slides;
      game-scene photos for posts; video thumbnail); icons from
      `lucide-react` (Play, Heart); no brand icons needed
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/thequest/` — NO hyphen), design tokens,
      diffs (name, placeholder images, slider implemented with React state
      instead of owl-carousel, mobile menu instead of slicknav)
