# Template: Flamingo (Blog Template)

## Purpose

Flamingo is a single-page blog template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Fantom" blog website
template (see TEMPLATES.md, Blog section, line 260; duplicate at line 1705 —
mark EVERY copy `[x]` when done), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a modern, minimal blog/magazine site (demo brand in the
preview: "Fantom Blog"): a two-row header (a centered cursive-script wordmark
logo on white, then a bright magenta navigation bar with uppercase white
links and a search icon); a hero featured-posts slider (photo cards with a
deep-purple overlay, category pill, headline, excerpt and date/comments meta,
shown 4-up on desktop); a main blog listing (large photo with a white card
overlapping its bottom edge, category pill, headline, excerpt, date/comments
meta; 2 full-width + 2 half-width + 2 full-width posts) with numbered
pagination; a right sidebar (pill search box, centered author widget with
circular avatar and social icons, popular-posts thumbnail list, ad banner,
post-categories list with counts, tag cloud); and a dark footer with an About
column, a newsletter subscribe form (email input + magenta arrow button), an
Instagram-feed thumbnail grid, social icons and a copyright bar. The whole
design is a light, white editorial layout: magenta `#ff2f92` brand accent,
black `#222222` Roboto headings, grey `#777777` Open Sans body text, and a
dark `#222222` footer.

Brand colors: primary magenta/pink `#ff2f92` (nav bar background, category
pill borders, hover states, active pagination page, newsletter arrow button,
tag-cloud hover, widget-title left border); darker pink `#cc2675` (nav item
hover/active background); headings `#222222`; body text `#777777`; meta
`#999999` / `#cccccc`; borders `#eeeeee` / `#eee` (dotted `#eee` category
rows); page background white; footer background `#222222`. Fonts: Roboto 500
(headings, nav, pills) and Open Sans (body), per the stylesheet's
`font-family` declarations.

## Design reference (replication findings)

- **Original:** ColorLib "Fantom" — blog template
  (source: https://colorlib.com/wp/template/fantom/). Listed in TEMPLATES.md
  line 260 (Blog section); duplicate at line 1705 — mark every copy `[x]`
  when done. Screenshot: `fantom-free-template.jpg` (1200×946, reviewed
  visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/fantom/ (title
  "Fantom Blog"; reachable). HTML saved to `/tmp/fantom-preview.html`
  (29 KB); stylesheet
  `https://preview.colorlib.com/theme/fantom/css/style.css` saved to
  `/tmp/fantom-style.css` (57 KB). Screenshot and preview agree (white
  editorial blog, magenta `#ff2f92` accent, script wordmark logo, 4-up
  featured-post hero, blog listing + sidebar) — the preview DOM is
  authoritative for section order; the screenshot is authoritative for the
  header layout (logo row above the pink nav bar) and the 4-column hero.
- **Fonts:** `font-family` declarations in `style.css`:
  `"Roboto", sans-serif` (h4 headings, nav links, category pills, date/meta
  rows) and `"Open Sans", sans-serif` (body paragraphs). Load both via
  `<link>` in `index.html`. The wordmark logo is an image asset
  (`img/logo.png`) — a cursive/script style; recreate as styled text or an
  inline SVG wordmark (never copy the asset).
- **Buttons / links (from style.css):**
  - Category pill (`.cat`): `border: 1px solid #ff2f92; line-height: 28px;
padding: 0 18px; border-radius: 15px; font-size: 12px; font-family:
"Roboto", sans-serif` — white text on the hero, `#777777` text in blog
    cards.
  - Newsletter `.sub-btn`: `background: #ff2f92; color: #fff; border-radius:
0; line-height: 34px; padding: 4px 11px 0; position: absolute; right: 0;
top: 0` (arrow icon, `lnr-arrow-right`).
  - Pagination: `.page-item.active .page-link { background-color: #ff2f92;
color: #fff; border-radius: 0 }`; inactive links `#8a8a8a`, no borders.
  - Tag-cloud links: `border: 1px solid #eee; background: #fff; padding:
0 13px; margin-bottom: 8px` — hover `background: #ff2f92; color: #fff`.
  - Widget titles (`.widget_title`): `font-size: 18px; color: #222222;
border-left: 3px solid #ff2f92; padding: 6px 0 6px 13px; margin-bottom:
30px`.
- **Section backgrounds / layout (from fantom-preview.html):**
  - header `header_area` — `div.logo_part` (centered script logo
    `img/logo.png`) + `div.main_menu` (pink `background: #ff2f92`; navbar
    links `font: 500 12px/60px "Roboto", sans-serif; text-transform:
uppercase; color: #fff; padding: 0 20px`; hover/active background
    `#cc2675`; "Pages" dropdown menu with Blog Details + Elements; search
    icon (`lnr-magnifier`) right; hamburger on mobile). The original offsets
    following content with `.header_area + section { margin-top: 210px }`
    (logo row ≈150px + 60px nav) — recreate the same vertical rhythm.
  - hero `section.post_slider_area` — `div.post_slider_inner` owl-carousel of
    4 `post_s_item` slides (screenshot shows 4 columns on desktop). Each
    slide: `.post_img` (photo with `:before` overlay `background: rgba(42,
20, 112, 0.5)`) + `.post_text` (`position: absolute; left: 40px; bottom:
50px; max-width: 355px`): `.cat` pill (white), h4 title (`font-size:
24px; line-height: 30px; color: #fff;` hover `#ff2f92`), excerpt `p`
    (14px/24px white), `.date` row (calendar icon + "March 14, 2018",
    comments icon + "05", white 12px, hover `#ff2f92`).
  - blog listing `section.blog_area.p_120` (`p_120` = `padding: 120px 0`)
    — `.row`: `col-lg-8` `blog_left_sidebar` with 6 `article.blog_style1`
    posts (2 full-width, then a `.row` of 2 `col-md-6` `blog_style1 small`,
    then 2 full-width). Each post: `.blog_img` (fluid photo) + `.blog_text`
    (`padding: 0 40px`) wrapping `.blog_text_inner` (`background: #fff;
margin-top: -100px; box-shadow: 0 10px 20px 0 rgba(153,153,153,0.1);
padding: 40px`): `.cat` pill (`#777777` text), h4 title (`24px;
#222222;` hover `#ff2f92`), excerpt, `.date` row (`#777777` 12px
    calendar + comments, hover `#ff2f92`).
  - pagination `nav.blog-pagination.justify-content-center` — `ul.pagination`
    with prev/next chevron links and numbered pages 01 02 03 04 (active page
    `#ff2f92`).
  - sidebar `div.blog_right_sidebar` (`col-lg-4`):
    1. `aside.single_sidebar_widget.search_widget` — `.input-group` with
       `input.form-control` (placeholder "Search Posts"; `border: 1px solid
#eeeeee; border-radius: 45px; padding-left: 20px`) and a transparent
       magnifier button (`position: absolute; right: 20px`).
    2. `aside.author_widget` — centered: circular avatar, h4 "Charlie
       Barber", p "Senior blog writer", `.social_icon` links (facebook ·
       twitter · github · behance, `#222222`, 20px gap, hover `#ff2f92`),
       bio paragraph.
    3. `aside.popular_post_widget` — `.widget_title` "Popular Posts" + 4
       `div.media.post_item` rows: thumb + h3 title + p "02 Hours ago"
       (title "Space The Final Frontier", "The Amazing Hubble", "Astronomy
       Or Astrology", "Asteroids telescope").
    4. ad banner `img.img-fluid` (`img/blog/add.jpg`).
    5. `aside.post_category_widget` — ".widget_title" "Post Catgories" +
       `ul.list.cat-list` of 7 rows (Technology 37 · Lifestyle 24 · Fashion
       59 · Art 29 · Food 15 · Architecture 09 · Adventure 44) — each
       `border-bottom: 2px dotted #eee`, hover border-color + text
       `#ff2f92`.
    6. `aside.tag_cloud_widget` — ".widget_title" "Tag Clouds" + inline
       pill links (Technology · Fashion · Architecture · Fashion · Food ·
       Technology · Lifestyle · Art · Adventure · Food · Lifestyle ·
       Adventure).
  - footer `footer.footer-area` (`background: #222222; padding: 150px 0
100px`) — 4 columns:
    1. `col-lg-3 col-md-6 col-sm-6` About Us: h6 `.footer_title` (16px/24px
       white 600, mb 28px) + lorem paragraph (`#777777`, max-width 235px).
    2. `col-lg-4 col-md-6 col-sm-6` Newsletter: heading "Stay updated with
       our latest trends" + `form.subscribe_form` — `input` (placeholder
       "Email Address"; `border: 1px solid #fff; background: #fff; height:
40px; padding: 0 40px 0 20px;`) + magenta `btn.sub-btn` arrow
       (absolute right).
    3. `col-lg-3 col-md-6 col-sm-6` Instagram Feed (`instafeed`): `ul.list
d-flex flex-wrap` of 8 thumbnails (5px margins, `img/instagram/
Image-01..08.jpg`).
    4. `col-lg-2 col-md-6 col-sm-6` Follow Us: heading "Let us be social" +
       `.f_social` icon links (facebook · twitter · dribbble · behance).
    - `row.footer-bottom` — centered copyright: "Copyright © <year> All
      rights reserved | This template is made with ❤ by Colorlib" (reword
      for Flamingo, no ColorLib credit).
- **Inner pages:** Category / Archive / Pages (Blog Details, Elements) /
  Contact nav destinations exist in the original — NOT required; recreate
  the single index page only (nav links can be dead anchors `#` or scroll
  targets). The Pages dropdown may be omitted or kept as a static dropdown.

## Requirements

### Requirement: Header with script logo, pink nav bar and search

The system SHALL render a two-row header: a centered script-style wordmark
logo above a magenta navigation bar with uppercase links and a search icon.

#### Scenario: Desktop header

- **GIVEN** the Flamingo app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "Flamingo" centered in a
  white top row (cursive/script style, recreated as styled text — never a
  copied asset)
- **AND** below it a magenta `#ff2f92` bar SHALL list Home (active) ·
  Category · Archive · Pages · Contact in uppercase white Roboto 12px/60px
- **AND** the active/hover nav item SHALL get the darker pink `#cc2675`
  background
- **AND** a search (magnifying glass) icon SHALL sit on the right of the
  nav bar, white

#### Scenario: Pages dropdown and mobile menu

- **GIVEN** the nav is rendered
- **WHEN** "Pages" is hovered
- **THEN** a white dropdown SHALL open listing Blog Details and Elements
- **AND** on a viewport narrower than the desktop breakpoint a hamburger
  button SHALL open a stacked menu panel with `aria-expanded` reflecting the
  open state

### Requirement: Hero featured-posts slider

The system SHALL render a hero section with featured post cards overlaid on
photos.

#### Scenario: Featured slides

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show 4 featured post cards (4-up on desktop per the
  screenshot, stacking on smaller screens), each with: a background photo
  with a deep-purple overlay `rgba(42, 20, 112, 0.5)`, a category pill
  (1px `#ff2f92` border, 15px radius, white 12px text), a white 24px Roboto
  headline (hover `#ff2f92`), a white excerpt, and a date/comments meta row
  (calendar + "March 14, 2018", comments + "05")
- **AND** the cards SHALL be horizontally scrollable/auto-advancing (the
  original uses an owl-carousel) with controls or swipe

### Requirement: Blog listing with overlapping cards

The system SHALL render a blog listing of 6 posts with white cards
overlapping their photos.

#### Scenario: Post cards

- **GIVEN** the blog listing section is rendered
- **WHEN** it loads
- **THEN** it SHALL lay out 6 posts on the left column (col-lg-8): 2
  full-width, then a 2-column row of 2 smaller posts, then 2 full-width
- **AND** each post SHALL contain a full-width photo with a white card
  (`#fff`, shadow `0 10px 20px 0 rgba(153,153,153,0.1)`, padding 40px)
  overlapping its bottom edge by ~100px
- **AND** each card SHALL contain a category pill (`#777777` text, 1px
  `#ff2f92` border, 15px radius), a 24px `#222222` headline (hover
  `#ff2f92`), an excerpt, and a `#777777` 12px date/comments meta row

#### Scenario: Pagination

- **GIVEN** the blog listing is rendered
- **WHEN** the posts end
- **THEN** centered numbered pagination SHALL appear (prev/next chevrons +
  pages 01 02 03 04) with the active page in magenta `#ff2f92` white text
  and square corners

### Requirement: Sidebar widgets

The system SHALL render a right sidebar (col-lg-4) with search, author,
popular posts, ad, categories and tag-cloud widgets.

#### Scenario: Sidebar layout

- **GIVEN** the sidebar is rendered
- **WHEN** it loads
- **THEN** a search widget SHALL show a pill input (45px radius, `#eee`
  border, placeholder "Search Posts") with a transparent magnifier button
- **AND** an author widget SHALL be centered: circular avatar, name
  "Charlie Barber", role "Senior blog writer", social icon links
  (facebook · twitter · github · behance, `#222222`, hover `#ff2f92`), and a
  short bio paragraph
- **AND** a popular-posts widget titled "Popular Posts" SHALL list 4
  thumbnail rows (thumb + title + relative time such as "02 Hours ago")
- **AND** an ad banner image SHALL appear after it

#### Scenario: Categories and tag cloud

- **GIVEN** the sidebar widgets render
- **WHEN** the category widget is shown
- **THEN** it SHALL be titled "Post Catgories" (sic — keep the same kind of
  content; may be fixed to "Post Categories") and SHALL list 7 categories
  with counts (Technology 37 · Lifestyle 24 · Fashion 59 · Art 29 · Food 15
  · Architecture 09 · Adventure 44), each with a dotted `#eee` bottom border
  turning `#ff2f92` on hover
- **AND** a tag-cloud widget titled "Tag Clouds" SHALL show inline pill
  links (1px `#eee` border, `#fff` background) that fill magenta with white
  text on hover

### Requirement: Footer with about, newsletter, Instagram and socials

The system SHALL render a dark footer with four widget columns and a
copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL have the dark `#222222` background with ~150px top /
  100px bottom padding and SHALL show four columns: About Us (white 16px
  title + grey paragraph), Newsletter ("Stay updated with our latest
  trends" + email input with a magenta `#ff2f92` arrow button, square
  corners), Instagram Feed (8-thumbnail flex grid) and Follow Us ("Let us
  be social" + social icons)
- **AND** the email input SHALL validate: submitting an invalid/empty email
  SHALL show an error; a valid email SHALL show a success confirmation and
  reset the field

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** social icon links SHALL be present (facebook · twitter ·
  dribbble · behance style — use lucide/inline SVG brand icons)
- **AND** the centered bottom bar SHALL read "© 2026 Flamingo. All rights
  reserved." with a reworded "Made with ❤" credit line (no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Flamingo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero + blog + sidebar sections in the main landmark, and the footer in
  the contentinfo landmark
- **AND** the document title SHALL be "Flamingo — Blog Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (hero
  cards and blog grid stack to 1–2 columns, mobile menu replaces the
  desktop nav, sidebar stacks below the blog listing)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/flamingo`
      (`scripts/verify-app.sh flamingo` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: header (script "Flamingo" wordmark centered on
      white + magenta `#ff2f92` nav bar with uppercase links, `#cc2675`
      hover, search icon, hamburger), hero (4 featured cards: photo +
      purple overlay `rgba(42,20,112,0.5)` + pill + headline + excerpt +
      meta), blog listing (6 posts: photo + overlapping white card +
      pill + headline + excerpt + meta + pagination), sidebar (search pill,
      author widget, popular posts, ad, categories, tag cloud), footer
      (`#222222` about + newsletter + instagram grid + socials +
      copyright) match the Fantom preview 1:1.
- [ ] Design tokens in `@theme`: primary magenta `#ff2f92`, hover pink
      `#cc2675`, headings `#222222`, body `#777777`, meta `#999999` /
      `#cccccc`, borders `#eeeeee` / `#eee`, footer `#222222`; Roboto 500
      (headings/nav/pills) + Open Sans (body) via Google Fonts `<link>` in
      `index.html`.
- [ ] Buttons/links: category pills = 1px `#ff2f92` border + 15px radius;
      newsletter sub-btn = magenta `#ff2f92` with white arrow icon, square
      corners; pagination active page magenta; widget titles have the 3px
      `#ff2f92` left border; tag-cloud pills hover to magenta.
- [ ] Placeholder images use `picsum.photos/seed/flamingo-<n>/<w>/<h>`
      (hero photos, blog photos, popular-post thumbs, instagram grid,
      ad banner, author avatar); icons from lucide-react (calendar,
      message-circle, search, arrow-right, menu, x, socials via inline
      SVG); no ColorLib assets copied (wordmark recreated as styled text).
- [ ] PR description states source template (ColorLib "Fantom"), preview
      URL (https://preview.colorlib.com/theme/fantom/), design tokens, and
      what differs (name, placeholders, paraphrased copy, inner pages not
      recreated).
