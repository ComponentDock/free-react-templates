# Template: Serif (Blog Template)

## Purpose

Serif is a single-page blog homepage template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Sensive"
blog design (see TEMPLATES.md, lines 286 and 2212 — mark BOTH `[x]` when
done), built under a different name with the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

The original is a magazine-style blog homepage: a white header with a serif
wordmark, centered nav (Home active / Archive / Category / Pages / Contact),
social icons and a search icon; a 550px full-width hero banner (mountain
photo + dark overlay) with centered white category label ("Tours & Travels"),
a large serif headline ("Amazing Places on earth") and a date; an
owl-carousel "featured" slider of 3-up cards (photo, black "FASHION" label
chip with orange text, serif title, "2 days ago" meta, notch arrows); a
two-column body — left column with 4 large recent blog posts (photo with a
white meta bar overlay "Admin / January 12,2019 / 2 Comments", serif title,
tag links, excerpt, black READ MORE button with orange text) plus
Previous/1/2/Next pagination, and a right sidebar of four #f9f9ff widgets
(Newsletter with black SUBSCRIBE button, Category list with post counts,
Popular Post thumbnails, Tag cloud pills); and a pure-black footer with
About Us / Newsletter / Instagram Feed / Follow Us columns and a copyright
bar. Serif recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Sensive" — free blog website template
  (source: https://colorlib.com/wp/template/sensive/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/sensive/`
  (HTTP 200, 25.0KB) + stylesheet `css/style.css` (26.0KB, SCSS-compiled,
  `@import` Google Fonts: `Source+Sans+Pro` and `Lora:400,700`). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`sensive-free-template.jpg`) confirms the visual design: white header with
  dark serif logo + orange active link + small dark social icons; hero photo
  of a mountain landscape with autumn foliage under a cool filter, centered
  white serif text; 3-up featured cards with a black uppercase label bar on
  the photo; left main column of large post images + black READ MORE buttons
  with orange arrows; right sidebar on a light lavender (#f9f9ff) background
  with orange widget-title underlines; near-black footer. Overall aesthetic:
  editorial magazine blog, serif headlines (Lora) + sans body (Source Sans
  Pro), orange-on-black accents, sharp (0 radius) buttons.
- **Section order (1:1):**
  1. `header` → `header_area` (bg #fff, z-index 99; sticky state
     `.navbar_fixed .main_menu`: fixed, top -70px, bg #dddd, shadow
     0 3px 16px rgba(0,0,0,.1), slide-down 500ms): `navbar-brand logo_h`
     (img/logo.png) left; `navbar` — `menu_nav` centered: nav-links Home
     (active), Archive, Category, Pages ▾ (submenu: Blog Details, dropdown
     items; hover: blue gradient #4dabff→#62ddff bg + white text), Contact —
     Lora 15px/700 #3a414e, padding 30px 0, active/hover #ff9907; right
     `navbar-social` (4 `ti` icons: facebook, twitter-alt, instagram, skype,
     13px #222, hover #ff9907) + `search` icon (12px, margin-left 80px);
     `navbar-collapse` (mobile hamburger on <lg).
  2. `section.mb-30px` → `hero-banner` (height 550px, `background:
url(../img/banner/hero-banner.png) left center no-repeat / cover`,
     `::after` overlay rgba(1,3,15,0.2)): `hero-banner__content` (absolute
     center, text-center): `h3` "Tours & Travels" (27px, mb 0), `h1`
     "Amazing Places on earth" (mb 12px), `h4` "December 12, 2018" (18px) —
     all white.
  3. `blog-slider` (owl-carousel, `.container`): 6 `card blog__slide
text-center` (border 0, radius 0, transparent bg) — `blog__slide__img`
     (img/blog/blog-slider/blog-slide1..3.png, repeated ×2) +
     `blog__slide__content` (padding 30px 15px): `blog__slide__label` "FASHION"
     (13px #ff9907 uppercase, bg #222, padding 4px 40px, mb 18px), h3/a
     "New york fashion week's continued the evolution" (Lora, #3a414e), p "2
     days ago" (15px, mb 0); `blog-slider__leftArrow`/`__rightArrow` notch
     arrows (bg #f5f9fc, `::before` white rotated sliver, hover bg #222; on
     <lg hidden, arrows sit at -105px on wide).
  4. `section.blog-post-area section-margin mt-4` (`.section-margin` margin
     100px 0) → `.row`: `col-lg-8` main + `col-lg-4 sidebar-widgets`.
     Main: 4 `single-recent-blog-post` (mb 60px) — `thumb` (relative) img
     (blog1..4.png) + `thumb-info` (absolute bottom-left, white bg,
     max-width 415px, padding-left 20px) `li`s: Admin (user icon), January
     12,2019 (calendar icon), 2 Comments (comment icon) — 15px #777777,
     margin-right 22px; `details` (padding-top 30px): h3 title (27px, Lora,
     #3a414e; posts: "Woman claims husband wants to name baby girl after his
     ex-lover sparking." ×2, "Tourist deaths in Costa Rica jeopardize safe
     dest ination reputation all time." ×2), `tag-list-inline` "Tag: travel,
     life style, technology, fashion" (Lora, #555555), p excerpt (#777777,
     "Over yielding doesn't so moved green saw meat hath fish he him from
     given yielding lesser cattle were fruitful lights. ..."), `button`
     "READ MORE" + arrow icon (bg #222, border 1px #222, color #ff9907,
     uppercase 13px/500, padding 12px 42px, radius 0; hover bg #ff9907,
     border #ff9907, color #000022). Below: `nav.blog-pagination
justify-content-center d-flex` — Previous / 1 / 2 / Next links.
  5. `aside` → `sidebar-widgets` → `widget-wrap` (mt 80px): 4
     `single-sidebar-widget` (bg #f9f9ff, padding 48px 30px, mb 30px):
     - `newsletter-widget`: title "Newsletter" (20px/700, `::after` orange
       underline 4px, 20% width, bottom 4px), p "Stay update with our
       latest" (centered, margin 20px 0), `form-group`: `form-control` email
       input (height 50px, radius 0, 14px #999999, border rgba(112,111,135,
       .2), placeholder "Enter email") + `bbtns` "SUBCRIBE" button (bg #222,
       border 1px #222, color #ff9907, uppercase 13px/500, padding 12px
       20px, radius 0).
     - `post-category-widget`: title "Catgory" (sic — keep or fix to
       "Category"; implementer choice, note in PR); `cat-list` 5 `li`s
       (white bg, padding 13px 20px, mb 15px): Technology (03), Software
       (09), Lifestyle (12), Shopping (02), Food (10) — 14px/300 #797979;
       hover: shadow 0 10px 30px rgba(153,153,153,.2) + text #ff9907.
     - `popular-post-widget`: title "Popular Post"; `popular-post-list` 3
       `single-post-list` (mb 5px): `thumb` img + `thumb-info` (white bar,
       max-width 160px: Admin | Dec 15, 14px #999999) + `details` h6 (16px/
       700, lh 26px, mb 10px; hover #ff9907): "Accused of assaulting flight
       attendant miktake alaways", "Tennessee outback steakhouse the worker
       diagnosed" ×2.
     - `tag_cloud_widget`: title "Popular Post" (sic — original reuses the
       previous title; implementer should use "Tags" and note it); `ul li a`
       pills (white bg, border transparent, padding 3px 21px, mb 10px, mr
       6px, 14px #777777; hover bg #222, color #ff9907): project, love,
       technology, travel, software, life style, design, illustration.
  6. `footer` → `footer-area section-padding` (bg #000000, padding 70px 0):
     `row` of 4 columns — (a) `col-lg-3` `single-footer-widget`: h6 "About
     Us" (18px/600 #fff, mb 15px) + p lorem + a "Colorlib" (#ff9907);
     (b) `col-lg-4` `mail-chimp`: h6 "Newsletter" + p "Stay update with our
     latest" + `form-inline`: input (width 80%, bg #191919, color #555555,
     padding-left 20px, radius 0, 14px) + `click-btn` (bg #ff9907, color
     #222, radius 0, padding 6px 12px, arrow icon); (c) `col-lg-3`: h6
     "Instragram Feed" + 6 imgs (img/instagram/i1..6.jpg); (d) `col-lg-2`
     - `footer-social`: h6 "Follow Us" + p "Let us be social" + 4 social
       icons (13px #555555, padding-right 25px, hover #ff9907);
       `footer-bottom` (centered, `footer-text` 14px, a/i #ff9907): copyright
       bar "Copyright ©... All rights reserved | This template is made with by
       Colorlib" → replace with repo-standard footer credit.
- **Design tokens extracted from `css/style.css`:**
  - Brand orange: **#ff9907** — active nav link + nav hover, slide label
    text, widget-title underline (`::after` 4px/20%), category hover text,
    popular-post h6 hover, tag-cloud hover text, READ MORE button text +
    hover bg, footer links/icons, footer newsletter `click-btn` bg.
  - Dark text: **#3a414e** — nav links, slide + post titles (Lora).
  - Grays: **#777777** (post excerpt, thumb-info text), **#797979** (category
    links, footer text), **#999999** (input placeholder, popular-post meta),
    **#555555** (tag-list-inline, footer input text, social icons).
  - Blacks: **#222** (READ MORE + SUBSCRIBE button bg/border, slide label
    bg, tag hover bg), **#000000** (footer bg), **#191919** (footer input
    bg), **#000022** (READ MORE hover text), #dddd (sticky header bg).
  - Light tints: **#f9f9ff** (sidebar widget bg), **#f5f9fc** (slider arrow
    bg), #ffffff (cards, category items, tag pills), #ededed/#eeeeee
    (submenu borders).
  - Submenu hover gradient: **#4dabff → #62ddff** (blue, white text).
  - Fonts: **'Lora', serif** (400/700 — nav links, all headings, slide/post
    titles, tag-list) + **'Source Sans Pro', sans-serif** (body copy) via
    Google Fonts `https://fonts.googleapis.com/css?family=Source+Sans+Pro`
    and `.../css?family=Lora:400,700` (free, use directly via `<link>`).
  - Buttons: `.button` READ MORE — bg #222, border 1px #222, color #ff9907,
    uppercase 13px/500, padding 12px 42px, `border-radius: 0`; hover bg
    #ff9907 + color #000022. `bbtns` SUBSCRIBE — same recipe (padding 12px
    20px). Footer `click-btn` — bg #ff9907, color #222, radius 0, padding
    6px 12px. Inputs: radius 0 (sidebar 50px tall, footer 14px in #191919).
  - Headings: hero h3 27px / h1 (default h1, mb 12px) / h4 18px; slide h3
    (default); post h3 27px; widget titles 20px/700; footer h6 18px/600;
    popular-post h6 16px/700 (lh 26px).
  - Spacing: hero 550px; section-margin 100px 0; post mb 60px; sidebar
    widgets padding 48px 30px (mb 30px, mt 80px wrap); footer padding 70px 0;
    nav-link padding 30px 0; header+section margin-top ~117px (offset).
  - Section backgrounds: header white (sticky #dddd); hero = hero-banner.png
    cover + rgba(1,3,15,0.2) overlay; body white; sidebar widgets #f9f9ff;
    footer #000000.
- **Recreation decisions:** repo-standard navbar (white over hero, sticky
  #dddd-style dark on scroll with slide-down shadow) with "Serif" logo
  (serif wordmark + orange accent), nav links (home active, Archive,
  Category, Pages dropdown, Contact), social icons + search icon, hamburger
  mobile menu; hero = 550px banner section (picsum photo + dark overlay)
  with centered category label, "Amazing Places on earth" headline, and
  date; featured slider = 3-up card carousel (auto-advance + prev/next notch
  arrows) with black uppercase label chip (orange text), serif title, "2
  days ago" meta; recent posts = 4 large posts (image with white meta bar
  overlay, serif title, tag links, excerpt, READ MORE button); pagination
  (Previous/1/2/Next); sidebar = Newsletter (input + black SUBSCRIBE),
  Category list (5 entries with counts), Popular Post (3 thumbnails + title
  - author/date), Tag cloud pills (8 tags); footer black #000000 (About Us,
    Newsletter + orange arrow button, Instagram Feed 6 picsum thumbs, Follow
    Us social icons, copyright bar with repo-standard credit); all images
    picsum-seeded (`picsum.photos/seed/serif-N/w/h`); Google Fonts Lora +
    Source Sans Pro via `<link>`; icons via lucide-react.

Serif lives in `apps/serif` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a white header with a logo, primary navigation, a
Pages dropdown, social icons, a search icon, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Serif page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Serif" as a serif logo
- **AND** it SHALL show nav links home (active), Archive, Category, Pages,
  and Contact
- **AND** the Pages link SHALL reveal a dropdown submenu with the Pages
  entries (e.g. Blog Details)
- **AND** it SHALL show four social icons and a search icon on the right
- **AND** the active nav link SHALL be colored in brand orange (#ff9907)

#### Scenario: Sticky header

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the header SHALL become fixed with a dark translucent background
  and a drop shadow

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a mobile menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero banner with a background photo, a
dark overlay, and centered white text.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a background image with a dark overlay
- **AND** it SHALL show the category label "Tours & Travels"
- **AND** it SHALL show the headline "Amazing Places on earth" in large
  serif white type
- **AND** it SHALL show the date "December 12, 2018"

### Requirement: Featured posts slider

The system SHALL render a carousel of featured post cards with a label, a
title, meta text, and navigation arrows.

#### Scenario: Slider cards

- **GIVEN** the page is rendered
- **WHEN** the featured slider section is displayed
- **THEN** it SHALL show a carousel of post cards, three visible at a time
- **AND** each card SHALL show a photo, a black uppercase label chip with
  orange text (e.g. "FASHION"), a serif title, and meta text (e.g. "2 days
  ago")

#### Scenario: Slider navigation

- **GIVEN** the featured slider is displayed
- **WHEN** the user activates the prev/next arrows
- **THEN** the carousel SHALL move to the previous/next set of cards

### Requirement: Recent blog posts

The system SHALL render a main column with four recent blog posts, each with
a photo, meta bar, title, tags, excerpt, and a READ MORE button.

#### Scenario: Post cards

- **GIVEN** the page is rendered
- **WHEN** the recent posts section is displayed
- **THEN** it SHALL show four posts, each with a large photo
- **AND** each photo SHALL have a white meta bar overlay showing "Admin",
  the date (e.g. "January 12,2019"), and "2 Comments"
- **AND** each post SHALL show a serif title, a tag line (e.g. "Tag:
  travel, life style, technology, fashion"), and an excerpt paragraph
- **AND** each post SHALL show a black READ MORE button with orange text
  and an arrow icon

#### Scenario: READ MORE hover

- **GIVEN** a READ MORE button is displayed
- **WHEN** the user hovers over it
- **THEN** the button SHALL invert to orange background with dark text

### Requirement: Pagination

The system SHALL render pagination links below the post list.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the pagination area is displayed
- **THEN** it SHALL show Previous, page 1, page 2, and Next links

### Requirement: Sidebar — Newsletter widget

The system SHALL render a Newsletter widget with an email input and a
subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter widget is displayed
- **THEN** it SHALL show the title "Newsletter" with an orange underline
- **AND** it SHALL show the text "Stay update with our latest"
- **AND** it SHALL show an email input with placeholder "Enter email" and a
  black SUBSCRIBE button with orange text

### Requirement: Sidebar — Category widget

The system SHALL render a Category widget listing categories with post
counts.

#### Scenario: Category content

- **GIVEN** the page is rendered
- **WHEN** the category widget is displayed
- **THEN** it SHALL show the title "Category" with an orange underline
- **AND** it SHALL list Technology (03), Software (09), Lifestyle (12),
  Shopping (02), and Food (10)
- **AND** hovering over a category SHALL highlight it in orange with a
  shadow

### Requirement: Sidebar — Popular Post widget

The system SHALL render a Popular Post widget with thumbnail entries.

#### Scenario: Popular post content

- **GIVEN** the page is rendered
- **WHEN** the popular post widget is displayed
- **THEN** it SHALL show the title "Popular Post" with an orange underline
- **AND** it SHALL show at least three entries, each with a thumbnail, a
  bold title, and an author/date meta (e.g. "Adam Colinge", "Dec 15")

### Requirement: Sidebar — Tag cloud widget

The system SHALL render a tag cloud of pill links.

#### Scenario: Tag cloud content

- **GIVEN** the page is rendered
- **WHEN** the tag cloud widget is displayed
- **THEN** it SHALL show pill links for project, love, technology, travel,
  software, life style, design, and illustration
- **AND** hovering over a tag SHALL invert it to black background with
  orange text

### Requirement: Footer

The system SHALL render a black footer with About Us, Newsletter, Instagram
Feed, and Follow Us columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" column with a short description
- **AND** it SHALL show a "Newsletter" column with an email input and an
  orange arrow button
- **AND** it SHALL show an "Instragram Feed" column with six thumbnail
  images
- **AND** it SHALL show a "Follow Us" column with social icons
- **AND** it SHALL show a copyright bar with the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Serif app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero banner, featured slider,
  recent posts with sidebar, and footer inside the main landmark in the
  original's order
- **AND** the document title SHALL be "Serif — Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- serif` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero banner →
      featured slider → recent posts + sidebar → pagination → footer).
- [ ] Design tokens applied: brand orange #ff9907 (active nav, label chips,
      widget-title underlines, READ MORE text, footer accents), dark text
      #3a414e, grays #777777/#797979/#999999, blacks #222 (buttons, labels)
      / #000000 (footer) / #191919 (footer input), light #f9f9ff sidebar
      widgets, Lora + Source Sans Pro fonts, sharp radius-0 buttons, hero
      overlay rgba(1,3,15,0.2).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Sensive), preview URL, tokens,
      and renames.
