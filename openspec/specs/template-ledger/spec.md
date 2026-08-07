# Template: Ledger (Blog Template)

## Purpose

Ledger is a single-page blog/magazine template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Daren" entry in TEMPLATES.md (Blog category), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a clean editorial magazine blog: a header with a serif
logo (left), centered uppercase nav (Home, Archive, Category, Contact,
Pages ▾) and a right utility cluster (expanding "Search here" input +
Facebook/Twitter/Instagram icons); a split banner hero — a 36% left block
with a white text card at the bottom and a 63.5% right block whose white
text card overlaps the image's bottom edge (category label in red
uppercase, big serif headline, "By Michal / March 30, 2019" meta); a
5px light-pink `border_top` divider; a row of three featured posts
(image + red category label + serif title + meta + comment/like/share
icons separated by a hairline); a three-column category grid whose
images carry white pill labels ("abstract design", "illustration",
"brand identity"); another pink divider; the main blog list (5
horizontal posts: image left with a white category pill, bordered text
card right, "LOADING MORE" red button) next to a sidebar (Search
Objects input, Popular Feeds with 3 thumbnails, Categories list,
Popular Tags pills); and a near-black footer (About Me, Contact us with
red icons, Newsletter email input with red arrow button, copyright bar
with red heart and link). The brand accent is a vivid red (`#ef1313`);
headings are Source Serif Pro, body/UI is Open Sans. Ledger recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Daren" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/daren/). Listed in
  TEMPLATES.md under **Blog (60)** (line 253).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/daren/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/daren-preview.html`,
  29 KB); stylesheet
  `https://preview.colorlib.com/theme/daren/css/style.css` (123 KB,
  Sass-compiled, per-file source maps) extracted for tokens; screenshot
  (`daren-free-template.jpg`, 1200×946, TEMPLATES.md) reviewed visually
  in the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header `header.main_menu` (container → `nav.navbar
navbar-expand-lg navbar-light`; navbar padding 33px 0): logo
     `a.navbar-brand > img` (left on desktop, absolutely centered on
     mobile, top 24px), burger `button.navbar-toggler` (mobile),
     centered `div.collapse.navbar-collapse.main-menu-item
justify-content-center` → `ul.navbar-nav`: Home (active), Archive,
     Category, Contact, Pages ▾ (`li.nav-item.dropdown` →
     `div.dropdown-menu` with "Single blog", "elements"; dropdown bg
     `#fafafa`, items 14px padding 8px 20px), right
     `div.header_social_icon.d-none.d-sm-block` (`ul`: expanding search
     `div#wrap > form > input#search[placeholder="Search here"]` +
     `span.ti-search`, then 3 social links `i.ti-facebook`,
     `i.ti-twitter-alt`, `i.ti-instagram` — `d-none d-lg-block`).
     Nav links: Source Serif Pro 600 13px uppercase `#2a2a2a`, padding
     7px 20px. Mobile: collapse panel absolute top 71px, full-width,
     white, centered.
  2. Banner `section.banner_post` (container-fluid → row → col-lg-12,
     two float-left blocks, no gap except margin-left .5%):
     - `.banner_post_1.banner_post_bg_1` — background-image cover,
       center; desktop width 36%, height 810px. Inner
       `.banner_post_iner.text-center`: white card, max-width 490px,
       margin auto, absolutely positioned at the bottom of the block
       (padding 45px; responsive variants bottom 0/top 0). Contents:
       `a > h5` "Creative & Design" (11px, uppercase, `#ef1313`, Open
       Sans 700, margin-bottom 12px), `a > h2` "All said replenish
       years void <br> kind say void" (Source Serif Pro 600 `#2a2a2a`,
       line-height 1.333, hover `#ef1313`), `p` meta "By Michal /
       March 30, 2019" (`#8a8a8a` 13px, margin-top 15px; `span` author
       `#0a0a0a` weight 800).
     - `.banner_post_2.banner_post_bg_2` — background-image cover,
       center; desktop width 63.5%, height 810px, margin-left .5%.
       Inner `.banner_post_iner`: white card, absolute right 0,
       left 23%, bottom -96px (overlaps below the image edge), padding
       45px 144px 50px 50px. Same content pattern: h5 "Creative &
       Design", h2 "Behold given land one first face fish which all
       said male fruit void king saying", meta p.
     - Responsive (md/lg): stacks to full-width blocks, height 400px,
       cards become full-width inset boxes.
  3. Feature posts `section.feature_post` (container; padding 70px 0;
     3 columns): `div.single_feature_post.post_1` (width 33.33%,
     float left): `img` (width 100%) then `div.post_text_1` (margin
     20px 0): `h5` category (11px uppercase `#ef1313`, margin-bottom
     14px), `a > h3` title link (18px), `p` meta, `div.post_icon > ul`
     (margin-top 20px, padding-top 20px, border-top 1px solid
     `#ecf0f2`): `li` "2 Comment" (`ti-comment`), "0 Like"
     (`ti-heart`), "Share" (`ti-export`), each padding-left 16px.
     Middle column (`.d-block d-sm-none d-lg-block`) renders the text
     BEFORE the image (image below text, padding variant `pl_pr_30`).
  4. `div.border_top` — 5px solid `#ffe4e4`, width 1110px (90% on
     small), margin 0 auto (pink divider line).
  5. Category posts `section.catagory_post` (container; padding 70px
     0 50px): 3 × `div.col-sm-6.col-lg-4` →
     `div.single_catagory_post.post_2`: `div.category_post_img`
     (position relative): `img` + `a.category_btn` overlay (absolute
     bottom -5px, `border-top-right-radius: 10px`, padding 15px 30px,
     background `#fff`, color `#ef1313`, uppercase 11px, weight 600):
     "abstract design", "illustration", "brand identity"; then
     `div.post_text_1.pr_30` (margin 21px 0 55px): `p` meta
     (13px `#8a8a8a`, `span` `#0a0a0a` 800), `a > h3` title link
     (24px), `div.post_icon` (same comment/like/share row).
  6. `div.border_top` — second pink divider.
  7. Main list + sidebar `section.all_post.section_padding`
     (padding 100px 0; container → row):
     - `div.col-lg-8`: 5 × `div.single_post.media.post_3`
       (margin-bottom 20px): `div.single_post_img` (relative): `img` +
       `a.category_btn` (absolute bottom 0 left 0,
       `border-top-left-radius: 10px`, padding 15px 30px, white bg,
       red text, uppercase 11px): "Tours & travel", "branding",
       "Culture", "Creative design", "Illustration"; then
       `div.post_text_1.media-body.align-self-center` (border 1px solid
       `#e9ecee`, border-left 0, padding 35px 15px 40px 40px): `p`
       meta, `a > h3` title (20px), `div.post_icon` row. After the
       5th post: `div.load_btn.text-center` (margin-top 80px) →
       `a.btn_1` "LOADING MORE" + `i.ti-angle-right` (inline-block,
       padding 14.5px 22px, 14px, `#fff`, bg `#ef1313`, capitalize,
       .4s transition, hover bg `#2a2a2a`).
     - `div.col-lg-4` → `div.sidebar_widget` (margin-top 50px):
       - `div.sidebar_tittle > h3` "Search Objects" (24px `#2a2a2a`
         weight 600, margin-bottom 45px; `::before` 15×4px `#ef1313`
         at left 0 bottom -13px, `::after` 40×1px `#ef1313` at left
         25px bottom -12px — red underline pair) + `form`: `input.form-
control` (border-radius 0, 13px `#999999`, height 52px,
         placeholder "Search Keyword", focus border `#e9ecee`) +
         `div.input-group-append > button.btn` (bg `#ef1313`, white,
         50px wide, radius 0, `ti-search` icon, margin-left 10px).
       - `div.sidebar_tittle > h3` "Popular Feeds" + 3 ×
         `div.single_catagory_post.post_2.single_border_bottom` (last
         without border): `div.category_post_img > img`
         (sidebar_1/2/3.png) + `div.post_text_1.pr_30` (margin
         30px 0): `p` meta, `a > h3` title link.
       - `div.sidebar_tittle > h3` "Categories" +
         `div.single_catagory_item.category > ul > li > a` (Source
         Serif Pro, `#888888`, 18px, margin-bottom 12px): Culture
         (12), Creative Design (15), Illustration (25), Production
         (16), Mangement (10), Branding (15).
       - `div.sidebar_tittle > h3` "Popular Tags" +
         `div.single_catagory_item.tags > ul > li > a` (inline-block,
         white bg, `#888888` 13px, border 1px solid transparent,
         hover border `#ef1313`): Nature, business, tech, News, html.
  8. Footer `footer.footer-area` (background `#111516`, padding
     100px 0 30px; container → row):
     - `div.col-xl-4.col-md-4.col-sm-6 > div.single-footer-widget
footer_1`: `h4` "About Me" (white, 24px, weight 700,
       margin-bottom 23px), `p` (14px `#8f8f8f`): "Do you want to be
       even more successful? Learn to love learning and growth. The
       more effort you put into improving your skills, the bigger the
       payoff you will get. Realize that things will be hard at first,
       but the rewards will be worth it."
     - `div.single-footer-widget.footer_2`: `h4` "Contact us" + 2 ×
       `div.contact_info` (position relative, padding-left 35px,
       margin-bottom 20px; `span` icon 18px `#ef1313` absolute left 0
       top 5px): `span.ti-home` + `h5` "Los angeles, United States"
       (16px white) + `p` "659, Rocky beach bullevard, santa monica,
       Rocky beach, USA."; `span.ti-headphone-alt` + `h5` "+44 6532
       986 652" + `p` "Mon to Fri 9am to 6 pm."
     - `div.single-footer-widget.footer_3`: `h4` "Newsletter" + `p`
       (intro copy) + `form`: `input.form-control` (radius 0, 13px
       `#999999`, height 48px, border 1px solid `#3b3f40`, placeholder
       "Enter email address", focus border `#e9ecee`) +
       `div.input-group-append > button.btn` (bg `#ef1313`, white,
       width 49px, height 48px, radius 0, `span.lnr
lnr-arrow-right` icon, margin-top 23px).
     - `div.row.align-items-center > div.col-lg-12 >
div.copyright_part_text.text-center` (border-top 1px solid
       `#41404f`, padding-top 30px, margin-top 83px): `p.footer-text`
       "© <year> All rights reserved | This template is made with
       <i.ti-heart> by <a href colorlib>" (text `#8f8f8f` 14px; heart
       icon 12px; link `#ef1313`).
- **Design tokens (extracted from style.css):**
  - Brand color: **`#ef1313`** vivid red (46 usages) — category `h5`
    labels, `.btn_1` bg, sidebar search/submit btns, sidebar tittle
    underline pair (`::before` 15×4px + `::after` 40×1px), banner h2
    hover, footer contact icons + links + form button + copyright
    link, tag hover border. Hover variant for `.btn_1`: bg `#2a2a2a`.
  - Tint: **`#ffe4e4`** light pink — `border_top` dividers (5px solid)
    and the expanding header search input border (2px).
  - Text: `#2a2a2a` (nav links, banner h2, sidebar tittle h3),
    `#2f373d` (global h1–h6), `#0a0a0a` (author name spans, weight
    800), `#8a8a8a` (dates/meta), `#888888` (category links, tags),
    `#8f8f8f` (footer body text), `#999999` (input text), `#555`
    (search input text).
  - Backgrounds: page `#fff`; footer `#111516`; dropdown `#fafafa`;
    header search input bg `#fafafa`; white cards over banner images.
  - Borders: `#e9ecee` (post_3 text card border, input focus),
    `#ecf0f2` (post_icon top hairline), `#3b3f40` (footer input),
    `#41404f` (copyright top border).
  - Fonts: **Source Serif Pro** (headings: h1–h6, post titles, nav
    links, category list links; weights 400/600/700) + **Open Sans**
    (body, meta, buttons, inputs; 400/400i/600/700) — Google Fonts
    `@import` at the top of style.css.
  - Headings: `h2` 30px line-height 1.222 `#2f373d` 600; banner h2
    `#2a2a2a` line-height 1.333, hover `#ef1313`; `h3` base 24px
    (post_2), 18px (post_1 feature), 20px (post_3 list); category
    `h5` 11px uppercase `#ef1313` Open Sans 700 margin-bottom 12px
    (banner) / 600 margin-bottom 14px (post text).
  - Buttons: `.btn_1` (LOADING MORE) — inline-block, padding
    14.5px 22px, font-size 14px, `#fff` on `#ef1313`, text-transform
    capitalize, 0.4s ease-in-out, hover bg `#2a2a2a`; square (no
    radius). `.category_btn` — white bg, `#ef1313` uppercase 11px
    weight 600, padding 15px 30px, one 10px top corner radius
    (`border-top-right-radius` on post_2, `border-top-left-radius` on
    post_3). Sidebar search btn 50×52-ish (height 52px row), footer
    submit btn 49×48 — both red square with white icon.
  - Forms: sidebar `.form-control` radius 0, 13px, `#999999`, height
    52px; footer `.form-control` radius 0, height 48px, border 1px
    `#3b3f40`; header search input width 0 → expands on focus, border
    2px `#ffe4e4`, bg `#fafafa`, 10px corner radius.
  - `.post_icon` row: margin-top 20px, padding-top 20px, border-top
    1px solid `#ecf0f2`; `li` padding-left 16px.
  - `.single_border_bottom .post_text_1`: margin 30px 0.
  - Sidebar tittle underline: `::before` 15px×4px `#ef1313` left 0
    bottom -13px + `::after` 40px×1px `#ef1313` left 25px bottom -12px.
- **Visual design (screenshot, 1200×946):** clean white editorial
  magazine blog. Header: serif logo "DarEn." top-left, centered small
  uppercase nav (HOME, ARCHIVE, CATEGORY, CONTACT, PAGES ▾), right
  search + social icons. Split hero banner: left ~36% block is a pink
  summer-accessories photo (straw hat, sunglasses, fan) with a white
  text card at its bottom; right ~63.5% block is a lime-green Easter
  eggs photo whose white text card overlaps the bottom edge of the
  image; both cards carry a tiny red uppercase category, a large serif
  headline, and "By Michal | March 30, 2019". Below: a row of three
  featured posts (beetle photo / "ART & ILLUSTRATION" text / feathery
  yellow photo) then category grid posts with white pill labels and
  the pink divider; the screenshot cuts off before the list/sidebar
  and footer, which were captured from the live DOM/CSS instead. Red
  `#ef1313` accents on category labels everywhere; serif headlines vs
  Open Sans UI; dark `#111516` footer.
- **Recreation decisions:** banner photos → seeded picsum placeholders
  (`picsum.photos/seed/ledger-<n>/<w>/<h>`: banner 1 900×810, banner 2
  1600×810; feature posts 700×470; category posts 700×470; list post
  images 470×350; sidebar thumbs 110×110); icons → lucide-react
  (MessageCircle, Heart, Share2, Search, ArrowRight, Menu, X,
  Home, Headphones; Facebook/Twitter/Instagram as inline SVG brand
  icons — lucide has no brand icons); Source Serif Pro + Open Sans via
  Google Fonts `<link>`; logo → serif text wordmark "Ledger."; no
  assets copied.

Ledger lives in `apps/ledger` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a header with a serif logo, a centered nav menu
(Home, Archive, Category, Contact, Pages ▾), an expanding search input
and social icon links.

#### Scenario: Header content

- **GIVEN** the Ledger page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the logo wordmark "Ledger." on the left
- **AND** it SHALL show the centered nav links Home (active), Archive,
  Category, Contact and Pages
- **AND** it SHALL show a search input (placeholder "Search here") and
  three social icon links (Facebook, Twitter, Instagram) on the right

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the Pages menu item is hovered/focused
- **THEN** a dropdown SHALL open with the links "Single blog" and
  "elements"

#### Scenario: Search expansion

- **GIVEN** the header is rendered
- **WHEN** the user focuses the search input
- **THEN** the input SHALL expand from a collapsed icon to a visible
  field with the placeholder "Search here"

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a full-width white menu panel SHALL open below the header
  with the nav links

### Requirement: Split banner hero

The system SHALL render a split banner with two background-image
blocks, each carrying a white text card with category, headline and
meta.

#### Scenario: Left banner block

- **GIVEN** the banner is displayed
- **WHEN** the left block (~36% width on desktop) is shown
- **THEN** it SHALL show a cover background image
- **AND** it SHALL show a white card at the bottom with the category
  "Creative & Design" (red, uppercase), the serif headline "All said
  replenish years void kind say void" and the meta "By Michal /
  March 30, 2019"

#### Scenario: Right banner block

- **GIVEN** the banner is displayed
- **WHEN** the right block (~63.5% width) is shown
- **THEN** it SHALL show a cover background image
- **AND** it SHALL show a white card overlapping the bottom edge of
  the image with the category, headline and meta in the same pattern

#### Scenario: Responsive stacking

- **GIVEN** a tablet or mobile viewport is active
- **WHEN** the banner is displayed
- **THEN** the two blocks SHALL stack vertically at full width with
  the white cards inset

### Requirement: Featured posts

The system SHALL render a three-column row of featured posts (image,
category, title, meta, comment/like/share row).

#### Scenario: Featured post card

- **GIVEN** the featured section is displayed
- **WHEN** a featured post is shown
- **THEN** it SHALL show the post image, a red uppercase category
  label, a serif title link, the meta line "By Michal / March 30,
  2019"
- **AND** it SHALL show a comment/like/share row ("2 Comment",
  "0 Like", "Share") separated by a top hairline

#### Scenario: Alternate middle card

- **GIVEN** the featured section is displayed
- **WHEN** the middle post is shown
- **THEN** its text block SHALL appear above the image (image below
  text)

### Requirement: Category posts grid

The system SHALL render a three-column grid of category posts whose
images carry a white pill label.

#### Scenario: Category post card

- **GIVEN** the category section is displayed
- **WHEN** a category post is shown
- **THEN** it SHALL show the image with a white pill label at its
  bottom-left (red uppercase text, e.g. "abstract design",
  "illustration", "brand identity")
- **AND** it SHALL show below the image the meta line, a serif title
  link and the comment/like/share row

#### Scenario: Pink divider

- **GIVEN** the category section is displayed
- **WHEN** the section ends
- **THEN** a 5px light-pink (`#ffe4e4`) divider line SHALL separate it
  from the following section

### Requirement: Main post list

The system SHALL render a main list of five horizontal posts (image
left with white category pill, bordered text card right) plus a
LOADING MORE button.

#### Scenario: List post row

- **GIVEN** the all-posts section is displayed
- **WHEN** a list post is shown
- **THEN** it SHALL show the image on the left with a white category
  pill (e.g. "Tours & travel", "branding")
- **AND** it SHALL show a bordered text card on the right with the
  meta line, a serif title link and the comment/like/share row

#### Scenario: Loading more button

- **GIVEN** the all-posts section is displayed
- **WHEN** the end of the list is reached
- **THEN** a centered red "LOADING MORE" button with an arrow icon
  SHALL be shown

### Requirement: Sidebar widgets

The system SHALL render a sidebar with Search Objects, Popular Feeds,
Categories and Popular Tags widgets.

#### Scenario: Search widget

- **GIVEN** the sidebar is displayed
- **WHEN** the first widget is shown
- **THEN** it SHALL have the title "Search Objects" with a red
  underline pair
- **AND** it SHALL show a square input (placeholder "Search Keyword")
  with a red search button

#### Scenario: Popular Feeds widget

- **GIVEN** the sidebar is displayed
- **WHEN** the second widget is shown
- **THEN** it SHALL have the title "Popular Feeds"
- **AND** it SHALL show three thumbnail rows (small image left, meta
  line + title right)

#### Scenario: Categories widget

- **GIVEN** the sidebar is displayed
- **WHEN** the third widget is shown
- **THEN** it SHALL have the title "Categories"
- **AND** it SHALL list Culture (12), Creative Design (15),
  Illustration (25), Production (16), Mangement (10) and Branding
  (15) as serif links

#### Scenario: Popular Tags widget

- **GIVEN** the sidebar is displayed
- **WHEN** the fourth widget is shown
- **THEN** it SHALL have the title "Popular Tags"
- **AND** it SHALL show the tag pills Nature, business, tech, News and
  html that gain a red border on hover

### Requirement: Footer

The system SHALL render a dark footer with About Me, Contact us and
Newsletter widgets plus a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Me" column with a paragraph
- **AND** it SHALL show a "Contact us" column with two contact rows
  (red home icon + address; red headphone icon + phone + hours)
- **AND** it SHALL show a "Newsletter" column with an email input
  (placeholder "Enter email address") and a red arrow submit button

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is shown
- **THEN** it SHALL show the line "© <year> All rights reserved |
  This template is made with <heart> by Colorlib" with the heart and
  the link in the brand red, separated by a top border

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Ledger app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark,
  all sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Ledger — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-ledger`.
- [ ] App renders all sections 1:1 in the order above (header →
      split banner → featured posts → pink divider → category grid →
      pink divider → main list + sidebar → footer).
- [ ] Design tokens match the reference: brand red `#ef1313`, tint
      `#ffe4e4` dividers, text `#2a2a2a`/`#2f373d`, meta `#8a8a8a`,
      footer bg `#111516`, borders `#e9ecee`/`#ecf0f2`/`#3b3f40`/
      `#41404f`; Source Serif Pro (headings/nav) + Open Sans (body).
- [ ] Header: logo left, centered uppercase nav with Pages dropdown
      (Single blog, elements), expanding "Search here" input, 3 social
      icons (Facebook/Twitter/Instagram); mobile burger opens white
      panel.
- [ ] Banner: two background-image blocks (36% / 63.5% on desktop,
      810px tall), white cards with red category h5, serif h2
      (hover red), meta "By Michal / March 30, 2019"; right card
      overlaps the image bottom edge; stacks full-width on smaller
      screens.
- [ ] `border_top` dividers: 5px solid `#ffe4e4` between sections.
- [ ] Featured row: 3 columns, image + red category + 18px serif
      title + meta + post_icon row (top hairline `#ecf0f2`,
      comment/like/share); middle card has text above image.
- [ ] Category grid: 3 columns, white pill label on image
      (border-top-right-radius 10px, padding 15px 30px), meta +
      24px title + icon row below.
- [ ] Main list: 5 horizontal rows (image + white pill
      border-top-left-radius 10px; bordered text card `#e9ecee`,
      20px title), "LOADING MORE" `btn_1` (red bg, hover `#2a2a2a`).
- [ ] Sidebar: Search Objects (red underline pair, square input +
      red button), Popular Feeds (3 thumbnail rows), Categories
      (6 serif links), Popular Tags (5 pills, red border on hover).
- [ ] Footer: `#111516` bg, 3 widgets (About Me, Contact us with red
      icons, Newsletter with red arrow button), copyright bar with
      red heart + link.
- [ ] Fonts (Source Serif Pro + Open Sans) loaded via Google Fonts
      `<link>`; no font or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/ledger-<n>/<w>/<h>`); logo recreated as
      text wordmark "Ledger.".
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/ledger` (lines/functions/
      branches/statements).
- [ ] PR description includes: source template (ColorLib "Daren"),
      preview URL (https://preview.colorlib.com/theme/daren/ —
      reachable), design tokens used, what differs (name, placeholder
      images, text logo).
