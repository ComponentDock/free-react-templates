# Dispatch (ColorLib Avision) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dispatch` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Avision" — modern editorial/magazine blog with a
  full-viewport cinematic hero slider, mixed-size card feed, dark video
  section, gray sidebar carousels, and a dark footer with subscribe panel
  (source: https://colorlib.com/wp/template/avision/). Listed in TEMPLATES.md
  under Blog (line 242) — one recreation covers that single checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/avision/`
  (HTTP 200, ~68KB HTML). DOM + `styles/main_styles.css` (34KB) +
  `styles/responsive.css` extracted and analyzed. Screenshot
  `avision-free-template.jpg` viewed in browser: confirms dark cinematic hero
  (BMX rider photo, near-black overlay), large white sans headline, gray-blue
  "sport" pill, "Continue Reading →" link, white card feed on `#f7f7f7`,
  filter pill tabs (ALL / STYLE HUNTER / VOGUE / HEALTH & FITNESS / TRAVEL /
  MORE), dark `#ededed` sidebar ("Top Stories" thumbnail rows), near-black
  footer with logo + social icons + Subscribe panel. Green `#2ddf80` accent
  (active video marker, "-15%" ad badge), tan `#937c6f` mobile-menu hover.
- **Structure (1:1, section order from the DOM):**
  1. Fixed header (`header.header`, transparent; `header.scrolled` →
     `background: rgba(0,0,0,0.75)` + `box-shadow: 0 5px 5px
rgba(0,0,0,0.1)`; `header_content` height 106px): logo "avision"
     (`div.logo a`, Ubuntu 20px 700 white uppercase,
     `letter-spacing: 0.075em`) → `nav.main_nav` ul: Home (active) /
     Fashion / Gadgets / Lifestyle / Video / Contact (Ubuntu 14px 700,
     `rgba(255,255,255,0.5)`, active `rgba(255,255,255,1)`) →
     `div.search_container ml-auto`: `div.weather` (`div.temperature` "+10°"
     Ubuntu 14px 700 white + cloud img) + `form` with
     `input.header_search_input` (262×46, `background:
rgba(255,255,255,0.2)`, `border-radius: 5px`, padding-left 49px,
     white, placeholder "Type to Search...") → `div.hamburger ml-auto
menu_mm` (`fa fa-bars`). Mobile menu (`div.menu`): `menu_close`
     (two-bar X, hover `#937c6f`), logo, search, `nav.menu_nav` links
     (Ubuntu 12px; hover `#937c6f`).
  2. Hero slider (`div.home`, `height: 100vh`; `div.home_slider`
     owl-carousel, 3 `div.owl-item` slides). Per slide:
     `div.home_slider_background` (full-bleed cover image) →
     `div.home_slider_content_container` (absolute, top 45%, translateY
     -50%) → `div.home_slider_item_category` (83×28 pill,
     `background: #899091`, `border-radius: 14px`, white uppercase Ubuntu
     12px link, e.g. "sport") → `div.home_slider_item_title` (link, Work
     Sans 36px 600 white, `line-height: 1.27`; headline e.g. "How Did van
     Gogh's Turbulent Mind Depict One of the Most Complex Concepts in
     Physics?") → `div.home_slider_item_link` "Continue Reading" (Ubuntu
     14px 500 `rgba(255,255,255,0.5)`). Bottom: `div.similar_posts_container`
     (absolute bottom 0) → container/row → 3 × `div.similar_post_col` (col-
     lg-3) with `div.similar_post trans_200` (transparent, hover
     `background: #FFFFFF`) containing a truncated headline link. Right
     edge: `div.home_slider_next_container` (absolute bottom 0, left at the
     75% column line) → `div.home_slider_next` →
     `div.home_slider_next_background` (transparent, hover `rgba(0,0,0,0.5)`)
     - `div.home_slider_next_content` (padding 40px 30px) →
       `div.home_slider_next_title` "next" (Ubuntu 12px 700 uppercase white)
     - link. Nav: `div.custom_nav_container.home_slider_nav_container`
       (bottom 264px) with `custom_prev` / `custom_next` arrows.
  3. `div.page_content`: container → `div.row row-lg-eq-height` →
     `div.col-lg-9` (`div.main_content`) + `div.col-lg-3` (`div.sidebar`).
     - Main = 4 × `div.blog_section`:
       - Section panel (`div.section_panel d-flex flex-row align-items-center
justify-content-start`): `div.section_title` (Ubuntu 18px 700
         black, padding-bottom 10px) + `div.section_tags ml-auto` (ul of
         pills: li 28px tall, `background: #ededed`, `border-radius: 14px`,
         padding 0 22px; a Ubuntu 12px 500 uppercase
         `rgba(0,0,0,0.4)`; li:hover/.active `background: #FFFFFF`) +
         `div.section_panel_more` (55px wide, absolute right: "more" +
         pills new look 2018, street fashion, business, recipes, sport,
         celebrities).
         a. **"Don't Miss"** — `div.section_content` → `div.grid` (width
         calc(100% + 30px)): 1 × `div.card.card_largest_with_image
 grid-item` (555px) + 6 small (263px) `card_small_with_image` /
         `card_default_no_image` / `card_small_with_background`
         (`.card_background` absolute cover, radius 6px). Card body
         padding 16px 25px 15px; `card-title a` 18px 600 black
         (line-height 1.33).
         b. **"What's Trending"** — `div.grid` of 7: `card_large_with_`
         `background` (555px, bg image), `card_large_with_image`,
         `card_small_with_image`, 2 × `card_default_with_background`, 2 ×
         `card_default_no_image`.
         c. **"Most Popular Videos"** — `div.section_content` → `div.videos`
         (height 395px): `div.player_container` (width calc(100% - 228px);
         YTPlayer `#P1` — recreate as a placeholder player panel) +
         `div.playlist` (absolute right 0, 263px, `background: #1f1f1f`,
         padding 35px 0) with 4 × `div.video_container video_command`
         (margin-bottom 15px): `div.video d-flex` → `div.video_image`
         (thumb; `.video_image::after` 88px centered play marker; active:
         `background: #2ddf80` marker) + `div.video_content` (padding-left
         20px) → `div.video_title` (14px 500 `rgba(255,255,255,0.25)`;
         `.video_container.active .video_title` → white 1) +
         `div.video_info` (Ubuntu 12px 500 `rgba(255,255,255,0.1)`: "1.2M
         views · Sep 29"). First row `.active`.
         d. **"Latest Articles"** — `div.grid` of ~14 small cards + `div.load_
 more` (margin 80px 0 140px) → `div.load_more_button` (118×36,
         transparent, 1px `#d7d7d7` border, `border-radius: 18px`, Ubuntu
         14px 500 `rgba(0,0,0,0.5)`, "Load More").
     - Sidebar (`div.sidebar`; `div.sidebar_background` absolute 375px wide,
       `background: #ededed`). Sections:
       a. **"Top Stories"** (`div.sidebar_section`): `div.sidebar_title_`
       `container` → `div.sidebar_title` (Ubuntu 18px 700 black) +
       `div.sidebar_slider_nav` (custom prev/next) + `div.sidebar_section_`
       `content` (padding-top 55px) → `div.sidebar_slider_top` owl
       carousel of `div.side_post` rows: `div.d-flex` →
       `div.side_post_image` (thumb) + `div.side_post_content`
       (padding-left 20px, margin-top -5px) → `div.side_post_title`
       (14px 500 black, line-height 1.285) + small `post_meta` (Katy Liu
       · Sep 29).
       b. **Advertising 1** (`div.advertising`, 340px tall, margin-top 80px):
       `div.advertising_background` (cover image) +
       `div.advertising_content` (flex column, align-start,
       justify-end) → `div.advertising_perc` ("-15%", green `#2ddf80`) +
       `div.advertising_link`.
       c. **"Newest Videos"** (`div.sidebar_section.newest_videos`):
       title + nav (`custom_prev_vid`/`custom_next_vid`) +
       `div.sidebar_slider_vid` carousel of side posts (video thumbs).
       d. **Advertising 2** (`div.sidebar_section` → `div.advertising_2`):
       `div.advertising_background` + `div.advertising_2_content` (flex
       centered) → `div.advertising_2_link` ("Turbulent Mind").
       e. **"Future Events"** (`div.sidebar_section.future_events`): title +
       nav (`custom_prev_events`/`custom_next_events`) +
       `div.sidebar_slider_events` carousel of `div.side_post` rows:
       `div.event_date` (70×70 flex column centered) →
       `div.event_day` (40px 800 `rgba(0,0,0,0.15)`, line-height 0.75;
       days 13/27/02/09) + `div.event_month` ("apr"/"may") +
       `div.side_post_content` title.
  4. Footer (`footer.footer`, `background: #1f1f1f`): container →
     `row row-lg-eq-height` → `col-lg-9 order-lg-1 order-2`:
     `div.footer_content` → `div.footer_logo` (Ubuntu 20px 700 white
     uppercase, "avision") + `div.footer_social` (ul: facebook, twitter,
     pinterest, vimeo, instagram, google icons) + `div.copyright` (Ubuntu
     12px 500 `rgba(255,255,255,0.1)`, margin-top 40px: "Copyright © All
     rights reserved | This template is made with ♥ by Colorlib") +
     `col-lg-3 order-lg-2 order-1`: `div.subscribe` →
     `div.subscribe_background` (`#111111`) + `div.subscribe_content`
     (padding 45px 15px 0 30px) → `div.subscribe_title` "Subscribe"
     (Ubuntu 18px 700 white, margin-bottom 32px) + form:
     `input.sub_input` (email; transparent bg, `border-bottom: 1px solid
#888888`, padding-bottom 9px, white; focus border
     `rgba(255,255,255,1)`) + `button.sub_button` (absolute right,
     translateY(-50%), white arrow SVG polygon).
- **Design tokens (from `styles/main_styles.css`):**
  - Fonts: **Ubuntu** (300/400/500/700) + **Work Sans** (300–900) via
    `@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,
700|Work+Sans:300,400,500,600,700,800,900')`. Ubuntu: logo/nav/section
    titles/pills/buttons/meta. Work Sans: body + hero title + card titles.
  - Colors: pill `#899091`; green `#2ddf80` (active video, "-15%" badge);
    tan `#937c6f` (menu hover); link underline `#ffa07f`; page `#f7f7f7`;
    tag pills `#ededed`; sidebar `#ededed`; videos/footer `#1f1f1f`;
    subscribe `#111111`; header scrolled `rgba(0,0,0,0.75)`; body text
    `#a5a5a5`; titles black; borders `#d7d7d7` (load-more) / `#888888`
    (sub input).
  - Shapes: pills radius 14px (category/tag) & 18px (load-more); search
    radius 5px; card image radius 6px; event box 70×70; play marker 88px.
  - Layout: header 106px; hero 100vh; card widths 555/263px; videos 395px;
    playlist 263px; advertising 340px (margin-top 80px); load-more margins
    80/140px.
- **Recreation decisions:** name **Dispatch** ("a news dispatch" — fits an
  editorial magazine brand; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/`). Logo "dispatch" in Ubuntu uppercase. All images →
  `https://picsum.photos/seed/dispatch-<n>/<w>/<h>` (hero 1600×900, cards
  555×325 / 263×200, thumbs 150×100, ad 375×340). Icons from `lucide-react`
  (search, menu, x, cloud, sun, arrow-right, play, chevron-left/right,
  facebook, twitter, instagram, pinterest, youtube, linkedin, arrow-up-right).
  Video player recreated as a placeholder panel (selected video's thumbnail
  - play overlay + title/views) — no real YouTube embed. Tag filters filter
    the card grid (or show empty state). Load More appends more cards then
    disables. Subscribe validates email (zod) + success state. Dark mode via
    `.dark` class (`dark:` variants) per repo conventions.

## Implementation task outline (for the implementer stream)

1. `apps/dispatch` scaffold: copy the simplest existing app (e.g.
   `apps/postie` or `apps/slice`), rename package to
   `@free-react-templates/dispatch`; `npm install` at root so
   `package-lock.json` registers the workspace (verify with
   `grep -c "free-react-templates/dispatch" package-lock.json`); vite.config.ts
   MUST keep `injectUiSource()`.
2. `index.html`: Google Fonts `<link>` for Ubuntu (400,500,700) + Work Sans
   (400,500,600,700); title "Dispatch — Magazine & Lifestyle Blog".
3. `src/index.css`: `@theme` tokens — `--color-pill: #899091`,
   `--color-accent: #2ddf80`, `--color-tan: #937c6f`, `--color-page:
#f7f7f7`, `--color-chip: #ededed`, `--color-dark: #1f1f1f`,
   `--color-ink: #111111`, `--color-muted: #a5a5a5`, fonts sans (Work Sans)
   / display (Ubuntu).
4. Components (one per section, colocated tests, 100% coverage):
   - `Navbar.tsx` — fixed transparent header, scrolled dark state (scroll
     listener), logo, nav links with active state, weather + search input,
     mobile hamburger menu with aria-expanded + close.
   - `HeroSlider.tsx` — 3 slides (bg image, category pill, 36px title,
     Continue Reading link), similar-posts strip, "next" panel with hover
     overlay, prev/next arrows + dots, auto-advance.
   - `SectionPanel.tsx` — title + tag pills (active/hover) + "more" area;
     accepts optional filter callback.
   - `ArticleCard.tsx` — variants: image / background-image / text-only,
     small (263px) / large (555px); title link; rounded image.
   - `VideoSection.tsx` — player panel (placeholder: selected thumb + play
     overlay + title) + playlist of 4 rows with active state (green marker,
     white title, views · date meta).
   - `Sidebar.tsx` — composes: `StoryCarousel` (Top Stories),
     `AdBlock` (tall with "-15%" badge), `VideoCarousel` (Newest Videos),
     `AdBlockSquare` (centered link), `EventCarousel` (Future Events with
     70×70 date boxes).
   - `Footer.tsx` — logo, social icons, copyright, `SubscribeForm` (zod
     email validation + success).
5. `App.tsx` composes in DOM order: Navbar → HeroSlider → MainContent
   (Don't Miss → What's Trending → Most Popular Videos → Latest Articles +
   Load More) → Sidebar → Footer.
6. Verify: `npm run verify:app dispatch` (typecheck + lint + vitest 100% +
   build). Full gate runs in CI on merge.
7. PR: `feat: Dispatch — magazine blog template (ColorLib Avision)`; description
   must include source URL, preview URL, tokens used, renames, placeholder
   images. Merge immediately with `gh pr merge --squash --delete-branch`.
8. After merge: mark TEMPLATES.md line 242 `[~]`→`[x]` with surge URL
   (https://free-react-templates-dispatch.surge.sh) + homepage, run
   `npm run readme:status`, commit `chore: mark Dispatch (Avision) as
deployed with live Surge URL`.
