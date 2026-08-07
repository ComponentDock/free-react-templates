# Pixelpress (ColorLib "Endgam") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-pixelpress` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Endgam" — gaming blog/magazine template
  (source: https://colorlib.com/wp/template/endgam/). Listed in TEMPLATES.md
  (Blog section, line 257).
- **Preview URL:** https://preview.colorlib.com/theme/endgam/ — reachable.
  Fetched: `/tmp/endgam.html` (49 KB), `css/style.css` (29 KB). Screenshot
  `endgam-free-template.jpg` (1200×946, viewed in browser). Preview DOM and
  screenshot agree — dark purple/magenta gaming magazine, giant hero
  headline, white offset-shadow buttons, purple gradient section bands.
- **Visual design:** dark gaming-magazine aesthetic. Deep purple/indigo
  backgrounds everywhere; magenta `#b01ba5` accents (category links, hero
  bottom border, active slider dot, social hovers, button offset shadows);
  white headlines on dark; muted lavender-grey body text `#68647d`; one white
  panel (featured section) for contrast. Fonts: Roboto; buttons + read-more
  links italic bold; hero headline huge (160px) and light (weight 500).
  Signature detail: every CTA is a WHITE squared button with a MAGENTA
  offset block behind it (9px right / 10px down) plus a magenta glow — the
  single most recognizable element; replicate it exactly (::after/absolute
  div).
- **Structure (1:1 from the preview DOM):**
  1. Header `header.header-section`
     - `div.header-warp` — top row: `div.header-social.d-flex.justify-content-
end`: `<p>Follow us:</p>` + 5 icon links (pinterest, facebook,
       twitter, dribbble, behance; `fa fa-*` icons).
     - `div.header-bar-warp.d-flex` — bg `#081624`, `padding: 39px 40px 0`,
       glow shadow `0 0 9px 3px rgba(226,30,228,0.24)`: `a.site-logo` (img →
       text logo) left; `nav.top-nav-area.w-100`: `div.user-panel` right
       ("Login" / "Register" links) + `ul.main-menu.primary-menu`: Home ·
       Games (`li` + `ul.sub-menu` → "Game Singel" [sic] — rename to "Game
       Single") · Reviews · News · Contact. Nav links white uppercase.
  2. Hero `section.hero-section.overflow-hidden` → `div.hero-slider.owl-
carousel` — 2 × `div.hero-item.set-bg.d-flex.align-items-center.justify-
content-center.text-center` (bg slider-bg-1.jpg / slider-bg-2.jpg,
     purple-tinted game art): container → `h2` "Game on!" (160px white,
     weight 500, lh 1), `p` (24px, `rgba(255,255,255,0.4)`, weight 500, mb
     70px), `a.site-btn` "Read More" + arrow img. CSS: height 921px,
     `border-bottom: 2px solid #b01ba5`. Owl dots 01/02 (active = magenta
     circle). Slide-in animation: h2 → p → btn staggered (0.4s / 0.6s /
     0.8s delays).
  3. Intro `section.intro-section` — bg `#0c062e`, `padding: 115px 0`;
     container → row → 3 × `div.col-md-4` > `div.intro-text-box.text-box.text-
white`: `div.top-meta` "11.11.18 / in <a>Games|Playstation|Reviews</a>"
     (date muted white-ish, category link `#b01ba5`), `h3` (mb 40px, max-w
     370px), `p` (15px weight 500 `#68647d`, mb 35px), `a.read-more` (15px
     700 italic white + arrow). Copy: "The best online game is out now!" /
     "Top 5 best games in november" / "Get this game at a promo price".
  4. Featured `section.featured-section` — split: `div.featured-bg.set-bg`
     (featured-bg.jpg, absolute left, `width: calc(50% - 156px)`, full
     height) + `div.featured-box` (float right, white, `width: calc(50% +
156px)`, `padding: 100px 50px 130px 79px`; inner `div.text-box` max-w
     810px): top-meta (dark `#68647d`), `h3` 60px "The game you've been
     waiting for is out now", `p` 16px, `a.read-more` color `#251e2f`.
  5. Blog `section.blog-section.spad` — bg `linear-gradient(45deg, #501755,
#2d1854)`; container → row:
     - main `div.col-xl-9.col-lg-8.col-md-7`: `div.section-title.text-white`
       `h2` "Latest News" + `ul.blog-filter` (Racing · Shooters · Strategy ·
       Online) + 3 × `div.blog-item` (`div.blog-thumb` img + `div.blog-text.
text-box.text-white`: top-meta, h3 "The best online game is out now!",
       p, read-more).
     - sidebar `div.col-xl-3.col-lg-4.col-md-5.sidebar` → `div#stickySidebar`
       (sticky on desktop): `div.widget-item` `h4.widget-title` "Trending" +
       `div.trending-widget` 4 × `div.tw-item` (`div.tw-thumb` 100px img +
       `div.tw-text`: `div.tw-meta` "11.11.18 / in Games" + `h5` title);
       `div.widget-item` `h4.widget-title` "categories" + `div.categories-
widget` `ul` (Games · Gaming Tips & Tricks · Online Games · Team
       Games · Community · Uncategorized).
  6. Video `section.intro-video-section.set-bg.d-flex.align-items-end` — bg
     promo-bg.jpg, height 757px: `a.video-play-btn.video-popup` (href
     https://www.youtube.com/watch?v=uFsGy5x_fyQ; circular play button) +
     container → `div.video-text`: `h2` "Promo video of the game" + `p`
     (15px-ish muted).
  7. Newsletter `section.newsletter-section` — bg `linear-gradient(left,
#3e0f3d, #1c0f3b)`: container → `h2` "Subscribe to our newsletter" +
     `form.newsletter-form`: `input[type=text]` placeholder "ENTER YOUR
     E-MAIL" + `button.site-btn` "subscribe" + arrow.
  8. Footer `footer.footer-section` — bg `linear-gradient(left, #330d38,
#190d36)`: container — decorative `div.footer-left-pic` /
     `div.footer-right-pic` (SKIP — decorative images, replace with CSS or
     omit), `a.footer-logo` (img → text logo), `ul.main-menu.footer-menu`
     (Home · Games · Reviews · News · Contact), `div.footer-social` (5 icon
     links), `div.copyright` ("Copyright ©2018 All rights reserved | This
     template is made with Colorlib" → paraphrase "© 2026 Pixelpress — Game
     news template").
- Page also has `#preloder` + `.loader` spinner overlay — optional, skip.
- `data-setbg` images used: slider-bg-1.jpg, slider-bg-2.jpg (hero),
  featured-bg.jpg (featured), promo-bg.jpg (video) — all replaced with
  picsum placeholders.

## Implementation tasks (implementer)

- [ ] Scaffold `apps/pixelpress` from the simplest existing app; package
      `@free-react-templates/pixelpress`; `npm install` at root to register
      the workspace in package-lock.json; keep `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #b01ba5`,
      `--color-brand-bright: #c313b7`, `--color-ink: #081624`,
      `--color-royal: #0c062e`, `--color-muted: #68647d`,
      `--color-darktext: #251e2f`, gradient utilities for blog/newsletter/
      footer bands; Roboto via `<link>` in `index.html`.
- [ ] Shared UI: use `Button`/`ButtonLink`/`cn` from `packages/ui`; social
      icons typed with `BrandName` (satisfy knip — see repo memory).
- [ ] Components (each with colocated 100%-coverage tests):
      `Navbar` (social row + navy bar + dropdown + mobile toggle),
      `Hero` (2-slide slider, dots, staggered animation), `Intro` (3 teaser
      cards), `Featured` (split image + panel), `BlogSection` (filter +
      cards) + `TrendingWidget` + `CategoriesWidget` (sidebar, sticky),
      `VideoPromo` (play button + YouTube modal), `Newsletter` (zod
      validation), `Footer`.
- [ ] Tests mirror the Gherkin scenarios in
      `openspec/specs/template-pixelpress/spec.md`; keep 100% coverage.
- [ ] `App.tsx` composes sections in order: Navbar → Hero → Intro → Featured
      → BlogSection → VideoPromo → Newsletter → Footer; document title
      "Pixelpress — Gaming Blog Template".
- [ ] Self-review (docs/self-review.md) + `scripts/verify-app.sh pixelpress`
      green; README status regenerated after merge.
- [ ] Commit `feat: Pixelpress — gaming blog template (ColorLib Endgam)`;
      PR + immediate squash merge; surge deploy
      https://free-react-templates-pixelpress.surge.sh.
