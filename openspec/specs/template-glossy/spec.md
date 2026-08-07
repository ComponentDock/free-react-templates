# Template: Glossy (Megazine/Blog Template)

## Purpose

Glossy is a single-page magazine/blog template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Eden"
website template (see TEMPLATES.md, Megazine), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, white magazine layout: a tall header-top bar
(line-height 100px) with social icons (left), a centered logo, and a
search/About/Subscribe cluster (right); a transparent centered navbar (Home,
Categories, Archive, Blog ▾, Latest news, Contact us) whose active/hover link
is coral `#ff7a7f`; a full-width asymmetric featured grid (one large post with
image + meta + title, one centered-card post, two stacked small posts); an
"Editor Picks" section (centered area-heading + big featured card + horizontal
text-left/image-right rows, then a full-width ad banner); a "Travel News"
video section on a light-pink `#fbf1f2` background with a 70px white circular
play button over the video thumb and comment/like/view meta counts; a
"Fashion News" three-column card block; a second "Fashion News" two-column
latest-news grid; and a footer with four widgets (About Us + footer logo,
Contact Info, Important Link list, Newsletter email form with a rounded coral
submit button) plus a copyright bar with social icons. Typography is Josefin
Sans (headings) + Open Sans (body); the brand accent is coral `#ff7a7f` used
on category links (11px uppercase), hover states, the area-heading underline,
buttons, and footer links. Glossy recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Eden" — Megazine HTML Template
  (source: https://colorlib.com/wp/template/eden/). Listed in TEMPLATES.md
  under the Megazine/Blog area (line 255).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/eden/`
  (HTTP 200). DOM fetched and analyzed (`/tmp/eden-preview.html`, 41.5 KB);
  stylesheets `css/style.css` (76.4 KB) and `css/responsive.css` (9.6 KB)
  extracted for tokens; screenshot (`eden-free-template.jpg`, 1200×946,
  TEMPLATES.md) reviewed visually in the browser. All references verified
  live.
- **Section order (1:1 from the preview DOM):**
  1. Header top `section.header-top` (line-height 100px, `border-bottom:
1px solid #e8edf1`): 3 columns — `ul.header_social` (ti-facebook,
     ti-twitter, ti-instagram, ti-skype, ti-vimeo; hover `#ff7a7f`) |
     centered `div.logo-wrapper > a.logo > img` (logo.png) | `div.right-button`
     (search icon `fas fa-search`, "About", "Subscribe" links).
  2. Navbar `nav.navbar.navbar-expand-lg.navbar-light` (transparent, menu
     `ul.menu_nav.ml-auto.mr-auto`): Home (active), Categories, Archive,
     Blog (dropdown → Blog, Blog Details), Latest news, Contact us. Hover
     and active links turn `#ff7a7f`.
  3. Fullwidth block `section.fullwidth-block.area-padding-bottom`
     (`container-fluid`): asymmetric featured grid — `col-xl-5`
     `div.single-blog` (thumb img + `div.short_details`: `div.meta-top.d-flex
     > a`"Tours & Travel" (11px uppercase`#ff7a7f`), `a.d-block > h4`title,`div.meta-bottom.d-flex`"March 12, 2019" + "By Alen Mark") ·`col-xl-4` `div.single-blog.style_two`(thumb +`short_details
     > text-center`, centered meta) · `col-xl-3`two stacked`div.single-blog.style-three` ("Lifestyle", etc.).
  4. Editor Picks `section.editors_pick.area-padding`: centered
     `div.area-heading` — `h3` "Editor Picks" (36px 600 `#33353b` Josefin
     Sans + 70×2px `::after` underline) + `p` "Abundantly creeping saw forth
     spirit can made appear fourth us." — then `col-lg-5 col-xl-6`
     `div.single-blog` (thumb + `short_details.pad_25`) + `col-lg-7 col-xl-6`
     two `div.single-blog.row.no-gutters.style-four` (col-sm-7 details +
     col-sm-5 thumb side by side); section ends with full-width
     `div.addvertise > a > img` ad banner (text-align center, margin-top
     100px).
  5. Travel News video area `div.video-area.background_one.area-padding`
     (background `#fbf1f2`): area-heading `h3` "Travel News" + same subtitle;
     `col-lg-7` `div.single-blog.video-style` — `div.thumb > img` with
     `div.play_btn > a.play-video` (70×70px white circle, `border: 2px solid
#fff`, border-radius 50%, absolute center, `ti-control-play` 29px, opens
     YouTube lightbox) + `div.short_details`: meta-top ("shoes" / "March 15,
     2019"), `h4` title, `div.meta-bottom` counts (ti-comment "05 comment",
     ti-heart "0 like", ti-eye "1k view") — plus `col-lg-5` with more
     style-five cards.
  6. three-block `div.three-block.area-padding`: area-heading `h3` "Fashion
     News" + same subtitle; 3 × `col-lg-4` `div.single-blog.style-five`
     (thumb + short_details + meta-top).
  7. Latest news `div.latest-news.area-padding-bottom`: area-heading `h3`
     "Fashion News" + same subtitle; 2-column grid of
     `div.single-blog.style-five` (`col-lg-6`).
  8. Footer `footer.footer-area` (padding-top 115px): 4 × `col-lg-3
col-sm-6` `div.single-footer-widget` — "About Us" (blurb + `div
.footer-logo > img`), "Contact Info" (`div.footer-address`: Address /
     Phone / Email lines), "Important Link" (`ul` → WHMCS-bridge, Search
     Domain, My Account, Shopping Cart, Our Shop), "Newsletter" (blurb +
     `div.form-wrap > form` with `input.form-control` email placeholder
     "Your Email Address" (height 50px, `border-color #f0e9ff`, radius 0) +
     `button.btn.click-btn` (border-radius 24px, padding 6px 21px 4px 14px,
     background `#ff7a7f`, color #fff, `fa-telegram-plane` icon)). Bottom
     `div.footer-bottom` (`border-top: 1px solid #e8edf1`, margin-top 51px,
     padding 20px 0): copyright "© <year> All rights reserved | This
     template is made with <heart> by Colorlib" (link `#ff7a7f`) +
     `div.footer-social` (ti-facebook, ti-twitter-alt, ti-dribbble,
     ti-linkedin).
- **Visual design (screenshot):** clean modern magazine/blog on a white
  background. Top thin utility bar with social icons (left), centered logo
  ("Eden" in black serif), search/About/Subscribe (right). Nav below with the
  active item in coral. Hero = asymmetric featured grid of bright, high-key
  photography on bold color backdrops (vintage camera on yellow, camera/film
  on pink-purple gradient, people on blue, makeup brushes on purple) with
  white headline overlays / white text cards; below it a row of image+text
  post cards with coral category tags ("Fours & Travel"). Palette: white +
  black text + coral `#ff7a7f` accents; vivid image colors carry the rest.
- **Design tokens (extracted from style.css):**
  - Brand accent: `#ff7a7f` (coral/pink; 79 usages) — category meta links
    (11px uppercase 600 Open Sans), nav active/hover, card-title hover,
    social hover, `.main_btn` background, footer `.click-btn` background,
    footer-bottom link color, area-heading underline (70×2px `::after`).
  - Headings: `#33353b` (`.area-heading h3`: 36px, weight 600, Josefin
    Sans, margin-bottom 23px); card titles `.single-blog h4` 27px weight 600
    line-height 36px; `short_details h4` 20px.
  - Body: `#797979` (Open Sans 14px/27px); footer-bottom text `#777777`.
  - Section backgrounds: `#fbf1f2` (light pink — `background_one`, Travel
    News video area); white elsewhere; `#f0e9ff` (newsletter input border);
    `#e8edf1` (header-top + footer-bottom borders).
  - Fonts: **"Josefin Sans"** (bold; h1–h6) + **"Open Sans"** (body/UI).
    Both Google Fonts — recreate via `<link>` in `index.html`.
  - Buttons: `.main_btn` (inline-block, bg `#ff7a7f`, padding 0 18px,
    color #fff; hover: bg #fff, color `#ff7a7f`, 1px `#ff7a7f` border);
    `.click-btn` (footer newsletter: border-radius 24px, padding 6px 21px
    4px 14px, bg `#ff7a7f`, color #fff); `.play_btn a` (70×70 circle,
    radius 50%, 2px white border, white, absolute center, 29px icon);
    `.button` (Josefin Sans, 1px border; hover bg `#ff7a7f`); `.link-border`
    (transparent, 1px `#ff7a7f` border).
  - Post cards: `div.single-blog` (position relative) with `div.thumb` img +
    `div.short_details`; meta-top 11px uppercase coral category links;
    meta-bottom small gray date/author (`.dark_font` author) or
    comment/like/view counts; style variants: `style_two` (centered),
    `style-three` (stacked small), `style-four` (row no-gutters image-left),
    `style-five` (grid card), `video-style` (play overlay).
- **Recreation name:** Glossy (NEW name, differs from ColorLib "Eden"). App
  folder `apps/glossy`, package `@free-react-templates/glossy`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/glossy-<n>/<w>/<h>`: featured 760×520, video thumb
  800×450, cards 350×240); logo → text wordmark in Josefin Sans (no asset
  copy); lucide-react icons (Search, Play, Send, Heart, MessageCircle, Eye,
  Facebook, Twitter, Instagram, Dribbble, Linkedin); Josefin Sans + Open
  Sans via Google Fonts `<link>`; video play button opens a lightbox (or is
  a focusable button per a11y); ad banner → placeholder image; no assets
  copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header top bar

The system SHALL render a header-top bar with social icons on the left, the
site logo centered, and a search icon + About/Subscribe links on the right.

#### Scenario: Header top content

- **GIVEN** the Glossy page is rendered
- **WHEN** the page loads
- **THEN** the header-top bar SHALL show social icons (Facebook, Twitter,
  Instagram, and at least one more) on the left
- **AND** the site logo SHALL be centered in the bar
- **AND** the bar SHALL show a search icon, an "About" link, and a
  "Subscribe" link on the right

### Requirement: Navigation bar

The system SHALL render a navigation bar below the header-top bar with links
to Home, Categories, Archive, Blog (with dropdown), Latest news, and Contact
us, and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Glossy page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links Home, Categories, Archive, Blog, Latest news,
  and Contact us
- **AND** Home SHALL be styled as the active item in the brand color
- **AND** hovering a link SHALL change its color to the brand color
  `#ff7a7f`

#### Scenario: Blog dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user activates the Blog item
- **THEN** a dropdown SHALL open with "Blog" and "Blog Details" links

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Featured grid (fullwidth block)

The system SHALL render an asymmetric featured grid: one large post card
(image, category, title, date/author), one centered post card, and two
stacked smaller post cards.

#### Scenario: Featured grid content

- **GIVEN** the page is rendered
- **WHEN** the featured block is displayed
- **THEN** it SHALL show a large card with an image, a category link (e.g.
  "Tours & Travel"), a level-4 heading, and a date/author meta line
- **AND** it SHALL show a centered-style card (category, heading, meta)
- **AND** it SHALL show two stacked smaller cards with category + heading

### Requirement: Editor Picks section

The system SHALL render an "Editor Picks" section with a centered heading and
subtitle, a large featured card, two horizontal image-left/text-right cards,
and a full-width ad banner at the bottom.

#### Scenario: Editor Picks content

- **GIVEN** the page is rendered
- **WHEN** the Editor Picks section is displayed
- **THEN** it SHALL show the heading "Editor Picks" with a subtitle
- **AND** it SHALL show a large featured post card with image, category,
  heading, and meta
- **AND** it SHALL show two horizontal cards with the image on the left and
  details on the right

#### Scenario: Ad banner

- **GIVEN** the Editor Picks section is rendered
- **WHEN** the section bottom is inspected
- **THEN** it SHALL show a full-width advertisement banner placeholder

### Requirement: Travel News video section

The system SHALL render a "Travel News" section on a light-pink background
with a video post (thumbnail, circular play button, category/date, heading,
comment/like/view counts) and additional post cards.

#### Scenario: Travel News content

- **GIVEN** the page is rendered
- **WHEN** the Travel News section is displayed
- **THEN** it SHALL use the light-pink section background `#fbf1f2`
- **AND** it SHALL show the heading "Travel News" with a subtitle
- **AND** it SHALL show a video post with a circular play button overlaid on
  the thumbnail
- **AND** the video post SHALL show comment, like, and view counts in the
  meta line

#### Scenario: Play button

- **GIVEN** the Travel News video post is rendered
- **WHEN** the user presses the play button
- **THEN** a video lightbox SHALL open (or the button SHALL be present and
  focusable with an accessible label)

### Requirement: Fashion News blocks

The system SHALL render two "Fashion News" blocks: a three-column card grid
and a two-column latest-news grid, each with a centered heading and subtitle.

#### Scenario: Three-column block

- **GIVEN** the page is rendered
- **WHEN** the first Fashion News block is displayed
- **THEN** it SHALL show the heading "Fashion News" with a subtitle
- **AND** it SHALL show exactly three post cards, each with a thumbnail,
  category/date meta, and a heading

#### Scenario: Two-column latest news block

- **GIVEN** the page is rendered
- **WHEN** the second Fashion News block is displayed
- **THEN** it SHALL show the heading "Fashion News" with a subtitle
- **AND** it SHALL show a two-column grid of post cards with thumbnail, meta,
  and heading

### Requirement: Footer

The system SHALL render a footer with four widget columns (About Us, Contact
Info, Important Link, Newsletter), a copyright bar, and social links.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" widget with a blurb and the site logo
- **AND** it SHALL show a "Contact Info" widget with address, phone, and
  email
- **AND** it SHALL show an "Important Link" widget with a link list
- **AND** it SHALL show a "Newsletter" widget with an email input and a
  rounded submit button in the brand color

#### Scenario: Newsletter form

- **GIVEN** the Newsletter widget is rendered
- **WHEN** the user submits the email form
- **THEN** the form SHALL validate the email (blocking invalid values with a
  per-field error)
- **AND** on success SHALL show a confirmation message (or a no-op success
  state)

#### Scenario: Footer bottom bar

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is inspected
- **THEN** it SHALL show a copyright line with the current year
- **AND** it SHALL show social links (Facebook, Twitter, Dribbble,
  LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Glossy app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header (top bar + navbar) in the banner
  landmark, all sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Glossy — Megazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/glossy`
      (`scripts/verify-app.sh glossy` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header-top (socials / centered logo / search +
      About + Subscribe), navbar (coral active/hover), featured grid (3-part
      asymmetric), Editor Picks (heading + featured + horizontal rows + ad
      banner), Travel News video section (`#fbf1f2` bg + circular play
      button + counts), Fashion News 3-col + 2-col blocks, footer (4 widgets + newsletter form + bottom bar) match the ColorLib Eden preview 1:1.
- [ ] Design tokens in `@theme`: brand `#ff7a7f`, headings `#33353b`, body
      `#797979`, section bg `#fbf1f2`, borders `#e8edf1`/`#f0e9ff`; Josefin
      Sans + Open Sans loaded via Google Fonts.
- [ ] Placeholder images use `picsum.photos/seed/glossy-<n>/<w>/<h>`;
      lucide-react icons; no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Eden"), preview URL,
      design tokens, and what differs (name, placeholders, text logo).
