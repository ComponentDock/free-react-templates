# Template: Vita (Blog Template)

## Purpose

Vita is a single-page lifestyle/fashion blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lifeleck" website template design
(source: https://colorlib.com/wp/template/lifeleck/), built under a DIFFERENT
name (Vita — Latin for "life", matching the source's life-themed lifestyle
blog) per the monorepo naming mandate, with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lifeleck" — clean serif lifestyle blog template.
  TEMPLATES.md has TWO copies of this item (lines 269 and 439 — Blog and
  Bootstrap categories, duplicate rows); ONE recreation (Vita) covers both.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/lifeleck/`
  (HTTP 200, 28.9 KB HTML; page title "lifeleck BLOG || HOME"). Master
  stylesheet `css/style.css` (~153 KB, fully extracted for tokens); libs:
  bootstrap, owl.carousel, animate, themify-icons, liner_icon, search.css.
  Cross-checked against the TEMPLATES.md screenshot
  (`lifeleck-free-template.jpg`, 1200×946, viewed in browser) — all match.
  The demo brands itself "Lifeleck"; the recreation uses the NEW name
  **Vita** (brand orange #fc4600).
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  magazine-style lifestyle blog on a stark white background. Serif italic
  logo top-left ("Lifeleck"), centered serif nav (Home, Archive, Category,
  Pages dropdown, Contact), search icon + circular social icons top-right.
  Below: three tall vertical banner cards (full-bleed photos) each with a
  white text card overlapping the bottom edge (category tag in orange
  uppercase, Cardo serif headline, "Posted on" date line). Then a newsletter
  subscribe band (thick #fbf2ee border box, "Subscribe Our Newsletter" +
  email field + orange rectangular Subscribe button). The main blog section
  is a left 8-column content area (1 full-width feature post + 7 posts in a
  2-column grid; each post = photo, orange category tag, serif headline, date
  line) with centered text + circular-ish pagination (Previous 1 2 3 Next),
  and a right 4-column sidebar (search box with orange "search" button,
  Categories list with counts, Popular Feeds mini-posts, social share icons).
  Below that a full-width strip of 6 Instagram-style square image tiles with
  hover overlays, and finally a light-gray footer (#f7f7f7) with 4 columns
  (About us, Contact Info, Important Link, Newsletter form) and a copyright
  row with social icons. Demo copy is placeholder lorem — paraphrase into
  lifestyle/fashion blog copy.
- **Section order (1:1, from live demo DOM):**
  1. Header (`header.main_menu`) — `div.container` > `div.row.align-items-center`
     > `div.col-lg-12`: `nav.navbar.navbar-expand-lg.navbar-light` with
     > `.navbar-brand` serif italic logo (brands "Lifeleck" → "Vita") and
     > `div.collapse.navbar-collapse.main-menu-item.justify-content-center` —
     > `ul.nav.navbar-nav` links Home, Archive, Category, Pages (with
     > `div.dropdown-menu`), Contact (font-size 18px, Cardo, #2a2a2a,
     > capitalize; hover → orange). Right: `div.header_social_icon.d-none.d-lg-block`
     > — search icon + 4 social icons (themify: facebook, twitter-alt,
     > pinterest, instagram).
  2. Hero banner (`section.banner_post`) — `div.container-fluid` >
     `div.row.justify-content-between`: three `div.banner_post_1.banner_post_bg_1/2/3`
     (background-image cover, no explicit height class in CSS — the card
     defines the height) each containing `div.banner_post_iner.text-center`
     (white bg, padding 45px, absolute bottom -150px, left/right 0,
     max-width 490px, margin auto): `p` category tag ("Fashion / Life
     style", 11px uppercase #fc4600 weight 600) + `h2` headline (Cardo 600,
     #2a2a2a, line-height 1.333) + `p` "Posted on April 15, 2019" (13px
     #8a8a8a, margin-top 15px).
  3. Subscribe form (`div.subscribe_form.padding_top.margin_top`) —
     `div.container` > `div.row` > `div.col-lg-12`: `div.subscribe_form_iner`
     (padding 55px, border 8px solid #fbf2ee) > `div.form-row.align-items-center.justify-content-center`:
     `div.col-md-12.col-lg-3` with `h3` "Subscribe Our Newsletter"
     (font-weight 700) + three `div.col-12.col-sm-6.col-md-4.col-lg-3`
     (email/name inputs + `a.btn_1` "Subscribe" — display block, text-align
     center). Button style `.btn_1`: padding 14.5px 58px, font-size 14px,
     white text, bg #fc4600, text-transform capitalize, no radius, hover bg
     #2a2a2a.
  4. All posts (`section.all_post.section_padding`) — `div.container` >
     `div.row`: `div.col-lg-8` > `div.row`:
     - `div.col-lg-12`: `div.single_post.post_1.feature_post` —
       `div.single_post_img` (image) + `div.single_post_text.text-center`:
       `a h5` category ("Fashion / Life style", #fc4600) + `h2` headline
       (30px, Cardo) + `p` "Posted on April 15, 2019".
     - Seven `div.col-lg-6.col-sm-6` > `div.single_post.post_1` (same
       structure, `h2` 24px).
     - `div.page_pageniation` — `nav` pagination: "Previous" + page links
       1 2 3 + "Next" (`.page-link` 20px, #2a2a2a, border 0).
  5. Sidebar (`div.col-lg-4` > `div.sidebar_widget`):
     - `div.single_sidebar_wiget.search_form_widget` — search input +
       `a.btn_1` "search" (same orange button).
     - `div.single_sidebar_wiget` — `div.sidebar_tittle` `h3` "Categories"
       (24px, #2a2a2a, weight 600, with `:after` 60×2px #fc4600 underline at
       left 200px) + `div.single_catagory_item.category` list: Culture (15),
       Creative Design (15), Illustration (15), Production (15), Mangement
       (15), Branding (15).
     - `div.single_sidebar_wiget` — `h3` "Popular Feeds" (sidebar_tittle) +
       three `div.single_catagory_post.post_2` (thumbnail + title + "By
       Michal / March 30" meta line; hover → orange).
     - `div.single_sidebar_wiget` — `div.social_share_icon.tags`:
       `ul.list-unstyled` of 4 social links (facebook, twitter-alt,
       pinterest, instagram).
  6. Social connect (`section.social_connect_part`) — `div.container-fluid`
     > `div.row` > `div.col-xl-12`: `div.social_connect` flex row of six
     > `div.single-social_connect` — `div.social_connect_img` (square
     > instagram-style image `img/insta/instagram_1..6.png`) with
     > `div.social_connect_overlay` (hover reveals an instagram icon link).
  7. Footer (`footer.footer-area`, bg #f7f7f7, padding 130px 0 25px) —
     `div.container` > `div.row`: four `div.col-xl-3.col-lg-6.col-sm-6.single-footer-widget`:
     - About us: heading + paragraph (text #7b838a).
     - Contact Info: address / phone (+8880 44338899) / email
       (info@colorlib.com) lines.
     - Important Link: link list (WHMCS-bridge, Search Domain, My Account,
       Shopping Cart, Our Main Shop).
     - Newsletter: `div.form-wrap` email input + subscribe button.
       Footer widget h4: 20px, #2a2a2a, weight 700, capitalize, margin-bottom
       30px. Then `div.copyright_text` row: `div.copyright_part`
       ("Copyright © 2019 All rights reserved | This template is Made with ♥
       by Colorlib") + `div.footer-social` (4 social icons: facebook,
       twitter, instagram, skype).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#fc4600** (orange — `.btn_1` background, category tags,
    sidebar heading underline, `.post_2` hover links). Supporting: **#2a2a2a**
    (dark — headings, nav links, `.btn_1` hover background, pagination
    text); **#646464/#888888** (body paragraph gray, line-height 1.929,
    15px); **#8a8a8a** (banner date line, 13px); **#7b838a** (footer text);
    **#fbf2ee** (subscribe form 8px border); **#f7f7f7** (footer
    background); **#fff** (page background, card backgrounds, button text).
  - Fonts: **Lora** (body — `font-family: "Lora", serif`, weight 400/700,
    body 14px) + **Cardo** (headings — `h1–h6 { font-family: "Cardo",
serif; color: #2a2a2a }`, weight 400/700) via Google Fonts
    (`@import` in style.css; use `<link>` in index.html).
  - Buttons (`.btn_1`): padding 14.5px 58px, font-size 14px, color #fff,
    background #fc4600, text-transform capitalize, NO border-radius
    (rectangular), hover background #2a2a2a, transition all .4s ease-in-out.
  - Nav links: 18px, Cardo, #2a2a2a, capitalize, weight 400.
  - Category tag: 11px uppercase, #fc4600, weight 600 (banner `p`);
    post cards use `h5` in #fc4600.
  - Section padding: `.section_padding` = 140px 0 (80px on tablet).
  - Subscribe box: 8px solid #fbf2ee border, inner padding 55px; heading
    font-weight 700.
  - Sidebar heading: 24px #2a2a2a weight 600 with a 60×2px #fc4600
    underline offset right (left 200px in the source — approximate with a
    short orange underline below the text).
  - Footer: bg #f7f7f7, h4 20px weight 700 capitalize, body text #7b838a.
  - Pagination: 20px #2a2a2a links, no borders; "Previous" / "Next" text
    links + numbered pages.
  - Social connect: 6 square image tiles in a full-width flex row, hover
    overlay reveals an icon.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/vita-<n>/<w>/<h>` — 3 banner bgs + 8 post images +
  6 social tiles = 17 seeds); icons → lucide-react (search, facebook,
  twitter, pinterest, instagram, skype, chevron); Lora + Cardo via Google
  Fonts `<link>`; no carousel dependency needed (static banner cards);
  hamburger/mobile nav collapses per Bootstrap behavior (implement with a
  simple accessible toggle); forms (newsletter + search) with zod
  validation per repo conventions; pagination is a static 3-page control
  (page 1 active or none active per source — source has no active state in
  DOM, page links are plain).

Vita lives in `apps/vita` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with logo, navigation, and social icons

The system SHALL render a header with the site name in serif italic type,
a centered navigation menu, and a right-aligned group of search + social
icons.

#### Scenario: Header content

- **GIVEN** the Vita page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Vita" in serif italic type
- **AND** the header SHALL show navigation links Home, Archive, Category,
  Pages, and Contact
- **AND** the header SHALL show a search icon and social media icons
  (facebook, twitter, pinterest, instagram)

### Requirement: Hero banner cards

The system SHALL render three full-width banner cards side by side, each
with a background photo and a white text card overlapping the bottom edge.

#### Scenario: Banner card content

- **GIVEN** the page is rendered
- **WHEN** the hero banner section is displayed
- **THEN** it SHALL show three banner cards
- **AND** each card SHALL show an uppercase orange category tag (e.g.
  "Fashion / Life style"), a serif headline, and a "Posted on" date line
- **AND** the text SHALL be centered on a white card overlapping the photo
  bottom edge

### Requirement: Newsletter subscribe form

The system SHALL render a subscribe section with a heading, an email field,
and a rectangular orange subscribe button inside a thick bordered box.

#### Scenario: Subscribe form content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the heading "Subscribe Our Newsletter"
- **AND** it SHALL show an email input and a "Subscribe" button styled
  with the brand orange fill (no border radius)
- **AND** the section SHALL be enclosed by an 8px solid #fbf2ee border

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits an invalid email address
- **THEN** a per-field error SHALL be shown and the submit SHALL be blocked

### Requirement: Feature post

The system SHALL render a full-width feature post with an image, an orange
category tag, a large serif headline, and a date line, centered.

#### Scenario: Feature post content

- **GIVEN** the page is rendered
- **WHEN** the all-posts section is displayed
- **THEN** a full-width feature post SHALL appear first
- **AND** it SHALL show the image, category tag, 30px serif headline, and
  date line centered

### Requirement: Blog grid

The system SHALL render seven posts in a two-column grid below the feature
post, each with an image, category tag, headline, and date line.

#### Scenario: Grid posts content

- **GIVEN** the page is rendered
- **WHEN** the all-posts section is displayed
- **THEN** seven posts SHALL appear in a two-column grid
- **AND** each post SHALL show an image, orange category tag, 24px serif
  headline, and date line, centered

### Requirement: Pagination

The system SHALL render pagination controls below the post grid.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the post grid is displayed
- **THEN** pagination SHALL show "Previous", pages 1, 2, 3, and "Next"

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with a search widget, a categories
list, popular feeds, and social share icons.

#### Scenario: Sidebar content

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show a search input with an orange "search" button
- **AND** it SHALL show a Categories list with at least five categories
  and item counts
- **AND** it SHALL show three Popular Feeds entries with thumbnail, title,
  and author/date meta
- **AND** it SHALL show four social share icons

### Requirement: Social connect strip

The system SHALL render a full-width strip of six square image tiles with a
hover overlay.

#### Scenario: Social tiles

- **GIVEN** the page is rendered
- **WHEN** the social connect section is displayed
- **THEN** six square image tiles SHALL appear in a single row
- **AND** hovering a tile SHALL reveal an overlay icon

### Requirement: Footer

The system SHALL render a light-gray footer with four widget columns and a
copyright row.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: About us, Contact Info, Important
  Link, and a Newsletter form
- **AND** it SHALL show a copyright line and social icons at the bottom

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vita app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, banner cards, subscribe form,
  feature post, blog grid, pagination, sidebar, social strip, and footer in
  the expected order
- **AND** the document title SHALL be "Vita — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh vita` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, banner cards, subscribe
      form, feature post + grid + pagination + sidebar, social strip,
      footer)
- [ ] Design tokens in `@theme`: brand orange `#fc4600`, dark `#2a2a2a`,
      grays `#646464`/`#888888`, `#8a8a8a`, `#7b838a`, `#fbf2ee` border,
      `#f7f7f7` footer bg
- [ ] Fonts: Lora (body) + Cardo (headings) via Google Fonts `<link>`
- [ ] Buttons: `.btn_1` style — orange fill, white 14px text, padding
      14.5px 58px, no radius, hover #2a2a2a
- [ ] Banner cards: 3 side-by-side bg images + white overlapping text card
      (orange uppercase category tag, Cardo headline, date line)
- [ ] Subscribe box: 8px solid #fbf2ee border, "Subscribe Our Newsletter"
      heading, validated email form
- [ ] Feature post 30px heading; grid posts 24px headings; centered text
- [ ] Sidebar: search button, categories with counts, 3 popular feeds,
      4 social share icons
- [ ] Social strip: 6 square tiles with hover overlay icon
- [ ] Footer: 4 widget columns on #f7f7f7 + copyright row with social icons
- [ ] Placeholder images seeded (`picsum.photos/seed/vita-<n>/<w>/<h>`); no
      copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on BOTH dup
      rows, lines 269 AND 439, + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
