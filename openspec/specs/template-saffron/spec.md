# Template: Saffron (Lifestyle Blog Template)

## Purpose

Saffron is a single-page lifestyle/fashion blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Juli" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Saffron recreates the ColorLib "Juli" free Bootstrap lifestyle blog template —
a clean, white, feminine blog layout with an orange (`#ffad4d`) brand accent:
a three-row header (welcome top bar with search + social icons, centered
script-font logo with "PERSONAL BLOG" tagline, centered uppercase nav with a
HOME dropdown), a full-width LayerSlider hero with a dark translucent content
card (category chip + headline + date), a 2-column blog area (left: 7 post
cards in mixed layouts with share/likes/comments meta and READ MORE buttons;
right: sidebar with about-author card, search, dark newsletter subscribe box,
image categories, latest posts, advertisement, Instagram grid, tags), a
7-image "Follow me © instagram" strip, and a dark footer with copyright and
social icons.

## Design reference (replication findings)

- **Original:** ColorLib "Juli" — lifestyle / fashion blog template (source:
  https://colorlib.com/wp/template/juli/). TEMPLATES.md has TWO copies of this
  item (lines 266 and 2400 — mark EVERY copy `[x]` when done).
- **Preview URL:** the bare `https://preview.colorlib.com/theme/juli/` returns
  HTTP 404 (this template's demo lives at a numbered path). The real demo is
  **https://preview.colorlib.com/theme/juli/01-homepage.html** (HTTP 200,
  36 KB, reached via the Live Preview button on colorlib.com which loads
  `preview.colorlib.com/#juli` → iframe `01-homepage.html`). Full rendered DOM
  analyzed (title "TITLE" — demo placeholder). Stylesheets: `common-css/
bootstrap.css`, `common-css/ionicons.css` (icons), `common-css/
layerslider.css` (hero slider), `01-homepage/css/styles.css` (~11.5 KB
  master, fully extracted) + `01-homepage/css/responsive.css`. Fonts: Roboto
  (300/400/500) via inlined Cloudflare `@font-face`, Maven Pro for paragraphs
  — load both via Google Fonts `<link>` in the recreation. Cross-checked
  against the TEMPLATES.md screenshot (`juli-free-lifestyle-blog-website-
template.jpg`, 1200×908, viewed in browser) and a live browser render of
  `01-homepage.html` — all match. The demo brands itself "Juli"; our
  recreation uses the NEW name **Saffron** (the brand orange is the color of
  saffron).
- **Section order (1:1):** Header (`header`, position absolute top, z-index
  1000, white bg, box-shadow `0 2px 10px rgba(0,0,0,.3)`, font-size .95em):
  (1) `.top-menu` (height 45px, line-height 45px, font-style italic,
  overflow hidden): left `ul.welcome-area` — li.hello-blog "Hello nice
  people, welcome to my blog" + li `a` mailto `contact@juliblog.com` (li
  separators `border-left: 1px solid #ddd`); right `.right-area` —
  `.src-area` (250px wide, float left, `border-left/right: 1px solid #ddd`,
  bg #fff): `input.src-input` placeholder "Search" (padding 0 40px 0 20px)
  - `button.src-btn` (40px wide, ion-ios-search-strong, opacity .6) +
    `ul.social-icons` (padding 0 35px, color #aaa): fa facebook / twitter /
    instagram / vimeo / pinterest outline → (2) `.middle-menu.center-text`
    (`border-top/bottom: 1px solid #ddd`): centered `a.logo` (padding 30px 0,
    height 160px) `img src="images/logo.png"` (brand wordmark + "PERSONAL
    BLOG" tagline — recreation renders Saffron wordmark + tagline as text) →
    (3) `.bottom-area` (text-align center): `.menu-nav-icon` hamburger
    (`ion-navicon`, 60px × 50px, display none on desktop) + `ul.main-menu`
    (weight 500): `li.drop-down` HOME▾ (`ion-ios-arrow-down`) → `.drop-down-
menu` (absolute top 60px, min-width 200px, bg #fff, box-shadow `0 3px
10px rgba(0,0,0,.3)`, li border-top 1px solid #ddd): FEATURED / ABOUT /
    CATEGORIES▸ (`.drop-down-inner` nested, `left: 100%`): FEATURED / ABOUT /
    CATEGORIES; then plain li: FEATURED / ABOUT / CATEGORIES / CONTACT (links
    `height/line-height 60px, padding 0 25px`, hover bg #eee) → Hero
    (`div.main-slider`, **margin-top 265px** = header height, height
    `calc(100vh - 265px)` min-height 550px, overflow hidden): `#slider`
    LayerSlider with **2 `div.ls-slide`** (data-ls `bgsize:cover; duration
:4000`), each: `img.ls-bg` **1600×800** (`slider-1-1600x800.jpg`,
    `slider-2-1600x800.jpg`) + `.slider-content.ls-l` (style `top:60%;
left:30%`; **padding 25px 60px 25px 40px, border-radius 3px, background
    rgba(0,0,0,.6), color #fff**): `a.btn` category chip **TRAVEL** (padding
    7px 15px) + `h3.title` **bold "Travel, Love, Live"** (letter-spacing 3px,
    margin 10px 0 0) + `h6` **"29 October, 2017"** — BOTH slides share this
    identical demo content (paraphrase per-slide in the recreation); slider
    arrows (`.ls-nav-prev`/`.ls-nav-next` chevrons) + bottom-center pagination
    bullets (`.ls-nav-start`/dots) → Blog area (`section.section.blog-area`,
    padding 70px 0 40px; container > row): **left col-lg-8** `div.blog-posts`:
    (1) post 1 `div.single-post` (margin-bottom 60px) full width —
    `.image-wrapper` `img blog-1-1000x600.jpg` → `.icons` (overflow hidden,
    line-height 30px, margin 30px 0 10px): left `a.btn.caegory-btn` **TRAVEL**
    (padding 0 20px, height/line-height 30px — solid orange, white text),
    right `ul.social-icons` (color #666): `li a` Share (`ion-android-share-
alt` + label), 03 (`ion-android-favorite-outline` hearts), 06
    (`ion-android-textsms` comments); (note: post 1 uses `p.date em`,
    later posts `h6.date em` — keep `<em>` italic date either way) → `p.date`
    em **"Monday, October 13, 2017"** (color #999) → `h3.title` `a` `b.light-
color` (color #444, hover #FFAD4D) **"This is post about travel, adventure
    and fun"** (margin 20px 0 15px) → excerpt `p` (Maven Pro, #555, lh 1.6)
    → `a.btn.read-more-btn` **READ MORE** (clear both, margin-top 30px, bg
    #fff, 1px solid #FFAD4D, color #FFAD4D, box-shadow `1px 10px 15px
rgba(0,0,0,.15)`; hover: bg #FFAD4D color #fff, shadow `1px 3px 15px`) →
    (2) post 2 full width (`blog-2-1000x600.jpg`) **"This is post for the
    ones that love to travel"** → (3-6) `div.row` of two `col-lg-6 col-md-12`
    pairs, `single-post` with **500×400** images (`blog-3..6-500x400.jpg`):
    **"How to paint the wall and street" / "One more night in the local
    clubs" / "A new festival in your town" / "How to make your home modern"**
    → (7) `col-lg-12` `div.single-post.post-style-2` — split card: left
    `.image-wrapper.width-50.left-area` (`blog-7-500x400.jpg`, padding-right
    30px) + right `.post-details.width-50.right-area` (`.icons` margin-top 0):
    **"How to througn the best engagement party"** (typo in demo — fix to
    "How to throw the best engagement party" in recreation) → `a.btn.load-
more-btn` **LOAD OLDER POSTS** (clear both, margin 70px 0 30px, solid
    orange) → **right col-lg-4** `div.sidebar-area` (sidebar-section
    margin-bottom 50px; `.title` margin-bottom 30px): (1) `.sidebar-section.
about-author.center-text` (margin-top 30px, padding 0 30px 30px,
    box-shadow `0 10px 40px rgba(0,0,0,.2)`): `.author-image` (max-width
    150px, margin 0 auto 20px, **transform translateY(-30px)** — pulls card
    up over the hero/sidebar top, border-radius 3px, box-shadow `0 0 30px
rgba(0,0,0,.1)`) `img author-1-200x200.jpg` + `ul.social-icons` (margin
    0 10px, color #888, font-size 1.05em — same 5 outline icons) +
    `h4.author-name` b.light-color **"Cristine Smith"** (margin 20px 0) + bio
    `p` + `.signature-image` (max-width 120px, margin 20px auto 0) +
    `a.read-more-link` **READ MORE** (color #FFAD4D, letter-spacing 2px,
    underline `::after` 1px #FFAD4D that slides out on hover) → (2)
    `.sidebar-section.src-area` search: `input` (border-bottom 1px solid
    #bbb) + `button.src-btn` → (3) `.sidebar-section.newsletter-area`
    (**background #29333C, padding 30px**): `h5.title` white **"Subscribe to
    our newsletter"** (margin 0) + form: `input.email-input` (width 100%,
    margin 15px 0, border 0, padding 10px 20px, bg #fff, placeholder "Your
    email here") + `button.btn.btn-2` **SUBSCRIBE** (bg none, color #FFAD4D,
    border 1px solid #FFAD4D; hover: bg #FFAD4D color #fff) → (4)
    `.sidebar-section.category-area`: `h4.title` b.light-color **"Categories"**
  - 4 `a.category` links (position relative, margin-bottom 20px): `img`
    400×150 (`category-1..4-400x150.jpg`) + `h6.name` **TRAVEL / FASHION /
    LIFESTYLE / DESIGN** (absolute bottom 0 left/right 0, padding 7px 20px,
    **background #FFAD4D, color #fff**) → (5) `.sidebar-section.latest-post-
area`: `h4.title` **"Latest Posts"** + 4 `div.latest-post` (overflow
    hidden, margin-bottom 20px): `.l-post-image` (width 80px, float left,
    `recent-post-1..4-150x200.jpg`) + `.post-info` (margin-left 100px):
    `a.btn.category-btn` **TRAVEL** (padding 5px 10px, margin-bottom 5px) +
    `h5` a b.light-color **"One more night in the clubs" / "Travel lights in
    winter" / "How to travel with no money" / "Smile 10 times a day"** +
    `h6.date` em (margin-top 5px, color #888) → (6) `.sidebar-section.
advertisement-area`: `h4.title` **"Advertisement"** + `a.advertisement-
img` (position relative): `img advertise-1-400x500.jpg` + `h6.btn.btn-2.
discover-btn` **DISCOVER** (absolute bottom 30px, width 200px, left 50%,
    margin-left -100px, border-color #fff, color #fff; hover border-color
    #FFAD4D) → (7) `.sidebar-section.instagram-area`: `h4.title` **"Instagram"**
  - `ul.instagram-img` (overflow hidden): 6 `li` (width 30%, float left,
    margin 0 5px 5px 0) `img` 150×150 (`instragram-side-1..6-150x150.jpg`) →
    (8) `.sidebar-section.tags-area`: `h4.title` **"Tags"** + `ul.tags` (li
    float left, margin 0 5px 5px 0; a padding 10px 15px): **design, fasinon
    (typo — fix "fashion"), travel, music, video, photography, adventure** →
    Footer instagram (`section.footer-instagram-area`, overflow hidden,
    **border-top 1px solid #ccc**): `h5.title` center **"Follow me ©
    instagram"** (padding 20px 0) + `ul.instagram` of **7** `li` (float left,
    **width 14.285%** each) `img` 300×400 (`instragram-1..7-300x400.jpg`) →
    Footer (`footer`, **background #29333C, color #ddd**): container > row:
    `div.col-sm-6` `.footer-section` (margin 30px 0): `p.copyright` color
    #ddd **"Juli © 2018. All rights reserved. | This template is made with
    <ion-heart> by <a href=colorlib.com>Colorlib</a>"** (recreation credits
    Saffron) + `div.col-sm-6` `.footer-section` `ul.social-icons` (text-align
    right, li a padding-left 15px — same 5 outline icons).
- **Design tokens extracted from the live preview CSS (`01-homepage/css/
styles.css`):**
  - Brand **orange `#FFAD4D`** (primary): `.btn` background + border +
    hover text; read-more-btn text + border; category chip; category-name
    bars; about read-more-link color + underline; link hover (`a b.light-
color:hover`); discover-btn hover border.
  - Dark slate **`#29333C`** — newsletter-area background, footer
    background (with light text #ddd inside).
  - Text — body `#000` (Roboto 15px w400); headings `b.light-color` **#444**
    (w500); paragraphs `#555` (Maven Pro 1.05em, line-height 1.6); post
    dates `#999`; latest-post dates `#888`; post icons `#666`; top-bar
    social icons `#aaa`; footer text `#ddd`.
  - Grays/borders — `#ddd` (top-menu separators, middle-menu borders,
    dropdown item borders), `#bbb` (sidebar search underline), `#ccc`
    (footer-instagram top border), `#eee` (nav link hover bg), `#F2F3F4`
    (dropdown link hover bg), `#fff` everywhere else.
  - Buttons — `.btn`: font-size .9em, padding **15px 30px**, border-radius
    **1px**, letter-spacing 2px, 1px solid #FFAD4D, bg #FFAD4D, color #fff;
    hover: transparent bg + orange text. `.btn-2`: transparent bg, orange
    text; hover: orange bg + white. `.read-more-btn`: white bg + orange
    border/text, box-shadow `1px 10px 15px rgba(0,0,0,.15)`; hover orange
    bg + white, shadow `1px 3px 15px`. `.caegory-btn` (post icons): padding
    0 20px, height/line-height 30px. `.category-btn` (latest posts): padding
    5px 10px. `.discover-btn`: width 200px, white border/text on image.
  - Headings — h1 4em / h2 2.8em / h3 1.8em / h4 1.5em / h5 1.2em / h6 .9em
    letter-spacing 1px, line-height 1.5, weight inherited (bold only via
    `<b>` w500); `b` weight 500.
  - Slider content card — padding 25px 60px 25px 40px, border-radius 3px,
    background `rgba(0,0,0,.6)`, white text; `.title` letter-spacing 3px;
    chip btn padding 7px 15px; card positioned ~top 60% / left 30%.
  - Shadows — header `0 2px 10px rgba(0,0,0,.3)`; dropdown `0 3px 10px
rgba(0,0,0,.3)`; about card `0 10px 40px rgba(0,0,0,.2)` + author image
    `0 0 30px rgba(0,0,0,.1)`; read-more `1px 10px 15px rgba(0,0,0,.15)`.
  - Radii — **1px** buttons; **3px** slider content card + author image;
    nothing else rounded.
  - Spacing — `.section` padding 70px 0 40px; header top-menu 45px; logo
    padding 30px 0 / height 160px; nav links 60px tall, padding 0 25px;
    `.main-slider` margin-top 265px; single-post margin-bottom 60px; icons
    margin 30px 0 10px; title margin 20px 0 15px; read-more margin-top
    30px; load-more margin 70px 0 30px; sidebar-section margin-bottom 50px;
    title margin-bottom 30px; newsletter padding 30px; category margin-
    bottom 20px; latest-post margin-bottom 20px + post-info margin-left
    100px; footer-section margin 30px 0.
- **Visual design (from screenshot + live render):** clean white feminine
  lifestyle blog. Top white bar (italic "Hello nice people, welcome to my
  blog" + email left; search field + 5 outline social icons right); centered
  large script-style logo "Juli" with small-caps "PERSONAL BLOG" tagline
  below (recreation: Saffron + "PERSONAL BLOG"); centered uppercase nav
  (HOME▾ / FEATURED / ABOUT / CATEGORIES / CONTACT). Hero: full-width
  flat-lay photo (dark blue textured surface with open book, strawberry
  toast, white mugs of tea, notebook — cozy travel/food/lifestyle mood),
  dimmed by a dark translucent card bottom-left holding an orange TRAVEL
  chip, big white headline "Travel, Love, Live" and a date; chevron arrows
  at the sides and pagination dots bottom-center. Below (per DOM): white
  blog list with large post photos (1000×600 full-width / 500×400 pairs),
  small orange category chips, gray Share/03/06 meta, dates in italic gray,
  bold dark titles that turn orange on hover, white READ MORE buttons with
  orange border and soft drop shadow; sidebar with a floating about-author
  card (portrait pulled up over its top edge, signature image, orange READ
  MORE), search underline field, dark slate (#29333C) newsletter box with
  white heading + orange SUBSCRIBE outline button, image category rows with
  orange name bars (TRAVEL/FASHION/LIFESTYLE/DESIGN), latest posts with
  80px thumbnails, a DISCOVER advertisement block, 3×2 Instagram grid, tag
  pills; a 7-image "Follow me © instagram" strip above a dark footer with
  copyright + right-aligned social icons. Demo copy is placeholder lorem —
  paraphrase into travel/lifestyle-themed copy.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/saffron-<n>/<w>/<h>`); icons → lucide-react (search,
  share-2, heart, message-circle, chevron-left/right, menu, heart for the
  footer; social brand icons as inline SVG per repo rule — lucide-react
  removed brand icons); Roboto + Maven Pro via Google Fonts `<link>`; logo
  = text wordmark "Saffron" + "PERSONAL BLOG" tagline (no image asset); no
  assets copied. Fix the demo typos ("How to througn the best engagement
  party" → "How to throw the best engagement party", tag "fasinon" →
  "fashion"). Copy paraphrased but same content kinds (top bar, nav +
  dropdown, 2 hero slides, 7 posts with meta + READ MORE, LOAD OLDER
  POSTS, sidebar widgets, instagram strip, dark footer).

Saffron will live in `apps/saffron` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top bar and header

The system SHALL render a white three-row header: a welcome top bar, a
centered logo, and a centered navigation bar with a dropdown.

#### Scenario: Welcome bar

- **GIVEN** the Saffron page is rendered on a wide viewport
- **WHEN** the top bar is displayed
- **THEN** the top bar SHALL show the italic greeting "Hello nice people,
  welcome to my blog" and a contact email link on the left, separated by
  `#ddd` rules
- **AND** the top bar SHALL show a search input with a search button and 5
  social icon links (Facebook, Twitter, Instagram, Vimeo, Pinterest) on the
  right

#### Scenario: Logo and navigation

- **GIVEN** the Saffron page is rendered
- **WHEN** the header middle area is displayed
- **THEN** a centered Saffron wordmark with a "PERSONAL BLOG" tagline SHALL
  be displayed between `#ddd` rules
- **AND** the nav SHALL show centered uppercase links: HOME (with dropdown),
  FEATURED, ABOUT, CATEGORIES, CONTACT
- **AND** the HOME dropdown SHALL list FEATURED, ABOUT, and CATEGORIES with a
  nested CATEGORIES submenu (FEATURED / ABOUT / CATEGORIES)
- **AND** nav links SHALL highlight on hover

#### Scenario: Mobile menu toggle

- **GIVEN** the Saffron page is rendered on a narrow viewport
- **WHEN** the hamburger menu icon is activated
- **THEN** a mobile menu SHALL open showing the nav links
- **AND** the menu SHALL close when the toggler is activated again

### Requirement: Hero slider

The system SHALL render a full-width hero slider with two slides, each
showing a background photo and a dark content card with category chip,
headline, and date.

#### Scenario: Slide content and controls

- **GIVEN** the Saffron page is rendered
- **WHEN** the hero slider is displayed
- **THEN** the slider SHALL show a full-bleed 1600×800 background photo per
  slide with a translucent `rgba(0,0,0,0.6)` content card (radius 3px)
  positioned lower-left
- **AND** each card SHALL show an orange category chip (TRAVEL), a bold
  white headline with letter-spacing, and a date line
- **AND** slide 1 SHALL show the headline "Travel, Love, Live" and slide 2 a
  distinct travel-themed headline (demo repeats the same copy on both slides
  — paraphrase slide 2)
- **AND** the slider SHALL provide accessible previous/next controls and
  slide indicators to switch between the two slides

### Requirement: Blog posts list

The system SHALL render a main blog column with seven post cards in the
original's mixed layouts (full-width, paired grid, split card) plus a load-
more button.

#### Scenario: Post card content

- **GIVEN** the Saffron page is rendered
- **WHEN** the blog posts column is displayed
- **THEN** the column SHALL show post 1 and post 2 as full-width cards
  (1000×600 image, category chip TRAVEL, Share / 03 likes / 06 comments
  meta, italic date, bold title, excerpt, white READ MORE button with orange
  border)
- **AND** posts 3-6 SHALL be shown in a 2-column grid with 500×400 images
- **AND** post 7 SHALL be a split card with the image on the left half and
  the details on the right half
- **AND** every card title SHALL turn orange `#FFAD4D` on hover
- **AND** a solid orange LOAD OLDER POSTS button SHALL appear below the
  list

#### Scenario: Post titles

- **GIVEN** the blog posts column is rendered
- **WHEN** the post cards are displayed
- **THEN** the post titles SHALL be: "This is post about travel, adventure
  and fun", "This is post for the ones that love to travel", "How to paint
  the wall and street", "One more night in the local clubs", "A new festival
  in your town", "How to make your home modern", and "How to throw the best
  engagement party"

### Requirement: Sidebar widgets

The system SHALL render a sidebar with eight stacked widgets: about author,
search, newsletter, categories, latest posts, advertisement, Instagram, and
tags.

#### Scenario: About author widget

- **GIVEN** the Saffron page is rendered
- **WHEN** the about author widget is displayed
- **THEN** the widget SHALL show a portrait card that overlaps upward
  (`translateY(-30px)` effect) with 5 social icons, the author name, a bio,
  a signature image, and an orange READ MORE link with an underline that
  slides away on hover

#### Scenario: Newsletter widget

- **GIVEN** the Saffron page is rendered
- **WHEN** the newsletter widget is displayed
- **THEN** the widget SHALL show a dark `#29333C` box with the white heading
  "Subscribe to our newsletter", an email input, and an orange outline
  SUBSCRIBE button that fills orange on hover

#### Scenario: Newsletter submission

- **GIVEN** the Saffron page is rendered
- **WHEN** the newsletter form is submitted
- **THEN** the form SHALL prevent the default page reload
- **AND** the form SHALL show a confirmation message

#### Scenario: Remaining widgets

- **GIVEN** the Saffron page is rendered
- **WHEN** the sidebar is displayed
- **THEN** the sidebar SHALL show a search field with an underline border
- **AND** the sidebar SHALL show 4 category images with orange name bars:
  TRAVEL, FASHION, LIFESTYLE, DESIGN
- **AND** the sidebar SHALL show 4 latest posts, each with an 80px thumbnail,
  a category chip, a title, and a date
- **AND** the sidebar SHALL show an Advertisement image with a white-outline
  DISCOVER button
- **AND** the sidebar SHALL show a 3×2 Instagram image grid and a Tags list
  (design, fashion, travel, music, video, photography, adventure)

### Requirement: Instagram strip and footer

The system SHALL render a 7-image "Follow me © instagram" strip above a dark
footer with copyright and social icons.

#### Scenario: Instagram strip

- **GIVEN** the Saffron page is rendered
- **WHEN** the footer instagram strip is displayed
- **THEN** the strip SHALL show a centered heading "Follow me © instagram"
  above a horizontal row of 7 equally sized images

#### Scenario: Footer

- **GIVEN** the Saffron page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark `#29333C` background with light text
- **AND** the footer SHALL show the copyright line with the current year,
  "All rights reserved", a heart icon, and a credit link to the template
  author
- **AND** the footer SHALL show 5 right-aligned social icon links

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/saffron` created from a blog/landing app pattern, package renamed
      to `@free-react-templates/saffron`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
    test:coverage -- --project apps/saffron` or `scripts/verify-app.sh
    saffron`)
- [ ] Brand orange `#FFAD4D` + dark slate `#29333C` + title `#444` + body
      gray `#555` + date grays `#888/#999` in `@theme`; Roboto + Maven Pro
      via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Header: italic welcome bar (greeting + email left, search + 5 social
      icons right), centered Saffron wordmark + "PERSONAL BLOG" tagline,
      centered uppercase nav (HOME▾ dropdown with nested CATEGORIES ▸,
      FEATURED, ABOUT, CATEGORIES, CONTACT); mobile hamburger toggles the
      menu
- [ ] Hero: 2 full-bleed slides (1600×800) with `rgba(0,0,0,0.6)` card
      (radius 3px) — orange TRAVEL chip, letter-spaced bold headline, date;
      accessible prev/next + slide indicators
- [ ] Blog list: post 1-2 full width, posts 3-6 in 2-col grid, post 7 split
      card (image left / details right); each with category chip, Share/03/06
      meta, italic date, title (orange hover), excerpt, white READ MORE
      (orange border, soft shadow); LOAD OLDER POSTS button
- [ ] Sidebar: about-author card with upward-overlapping portrait, signature,
      orange READ MORE; search underline field; dark newsletter box (white
      heading + orange SUBSCRIBE outline, confirm on submit); 4 category
      images with orange name bars (TRAVEL/FASHION/LIFESTYLE/DESIGN); 4
      latest posts with 80px thumbnails; Advertisement + DISCOVER overlay;
      3×2 Instagram grid; Tags list
- [ ] Footer: 7-image "Follow me © instagram" strip (top border `#ccc`);
      dark footer with copyright (year + heart + credit) and right-aligned
      social icons
- [ ] Radii: 1px buttons, 3px slider card + author portrait; nothing else
      rounded
- [ ] Placeholder images via `picsum.photos/seed/saffron-<n>/<w>/<h>`; logo
      as text wordmark; lucide icons + inline SVG brand icons; no assets
      copied
- [ ] Demo typos fixed ("througn" → "throw", tag "fasinon" → "fashion");
      slide-2 headline paraphrased (demo duplicates slide 1 copy)
- [ ] PR description: source template, preview URL (incl. the
      `01-homepage.html` demo path), design tokens, what differs
- [ ] After merge: TEMPLATES.md Juli (lines 266 and 2400) `[~]` → `[x]` +
      Surge URL (`free-react-templates-saffron.surge.sh`) + homepage + `npm
    run readme:status`
