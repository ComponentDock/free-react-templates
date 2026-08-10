# Template: Antler (Blog Template)

## Purpose

Antler is a personal-blog website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Moose"
website template design (source: https://colorlib.com/wp/template/moose/),
built under a DIFFERENT name (Antler — a moose's antler, evoking the source's
animal namesake, per the monorepo naming mandate), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Moose" — a minimalist personal blog / digital-news
  theme: a subtle white navbar (lowercase wordmark left, Home / Articles /
  About / Contact right), a white hero dominated by a HUGE 16vw wordmark
  (with a mid-word span rendered as a hollow outline), a two-line intro
  (headline left, small author card right), then 6 full-width alternating
  blog rows (image left / text right on white, image right / text left on a
  dark `#313b44` band), a centered "View all articles" link, a light-gray
  newsletter band, a dark 3-column footer, and a black copyright bar.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/moose/`
  (HTTP 200, 22,007 bytes; title "Moose - Free Bootstrap 4 Template by
  Colorlib"). Master stylesheet `css/style.css` (59,987 bytes, 2,442 lines,
  fully extracted for tokens), plus Bootstrap 4 (`navbar`, `grid`), animate,
  Owl Carousel, magnific-popup, flaticon, and Font Awesome 4.7 icon fonts.
  Fonts: **Poppins** (200/300/400/500/700/800/900) via Cloudflare Fonts
  (`/cf-fonts/...`). Cross-checked against the TEMPLATES.md screenshot
  (`moose-colorlib-template.jpg`, 1200×946, viewed in browser — see visual
  design below). The demo brands itself "Moose"; the recreation uses the NEW
  name **Antler**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  personal blog on white. Navbar sits over the hero (transparent bg, subtle
  1px rgba(255,255,255,.2) top/bottom borders — effectively invisible on
  white): lowercase brand "moose" (#000), nav links #000 weight 500 with
  hairline `border-left` separators, active item **#588da8**, hover **#313b44**;
  on mobile the navbar flips to a solid black bg with white links + "Menu"
  burger. Hero (white): giant wordmark "M<span>oo</span>se" — font-size
  **16vw**, weight 900, color #313b44, with the "oo" span hollowed
  (`color: transparent` + 1px `-webkit-text-stroke: #313b44`); below it a
  `row`: `col-md-8` h2 (weight 300) "Hello! I'm Giller Moose, I Provide
  Newest News Update About Digital" + intro paragraph (18px), and
  `col-md-4` author card: 70px circular photo, name h3 (18px bold #313b44),
  short bio (16px). Blog list section (container-fluid, px-md-4, no top/bottom
  padding): **6 full-width alternating rows** — `blog-wrap` (white) and
  `blog-wrap.bg-darken` (background **#313b44 !important**, text
  rgba(255,255,255,.5), title + author name white); each row is a 2-col
  split: `col-md-6` cover image (rows 1,3,5: image LEFT; rows 2,4,6 via
  `order-md-last`: image RIGHT) + `col-md-6` text block (`p-md-5 py-5 px-4`):
  `p.meta` (12px uppercase weight 500, links **#588da8**, icons calendar /
  user / comment + "Sept. 27, 2020", "Admin", "3"), `h2` title (45px weight
  800, color #313b44, white on dark rows), author row: 60px circular avatar +
  h4 name (16px bold) + span role (12px uppercase letter-spacing 1px,
  **#588da8**). After the rows: centered `a.btn-custom-blog` "View all
  articles" (24px weight 500) + chevron-right icon (row py-5). Newsletter
  band (`ftco-intro ftco-section bg-light`, centered): h2 "Subscribe to our
  Newsletter", `form.subscribe-form` d-flex: email input (50px, border 1px
  #313b44, radius 5px 0 0 5px, text #588da8, focus border #588da8) + submit
  "Subscribe" (bg **#313b44**, white, radius 0 5px 5px 0, 16px). Footer
  (`ftco-footer`, bg **#141b25**, white text, padding 6em 0 0): 3 columns —
  `col-md-4` logo h2 "Moose" + blurb (rgba(255,255,255,.9)) + 3 social circles
  (40×40, radius 50%, bg **#588da8**, white twitter/facebook/instagram
  icons); `col-md-2` "Info" links (Blog, Career, Team, Team with
  chevron-right); `col-md-4` "Have a Questions?" block-23 contact list
  (map-marker address "203 Fake St. Mountain View, San Francisco, California,
  USA", phone "+2 392 3929 210", email "info@yourdomain.com"). Bottom
  copyright bar (`container-fluid px-0 py-5 bg-black`, centered, white):
  "Copyright © {year} All rights reserved | This template is made with ♥ by
  Colorlib" — recreation keeps the copyright + ♥ wording, drops the Colorlib
  credit (precedent: Newsprint/Lede/Wire footers).
- **Section order (1:1, from live demo DOM):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light#ftco-navbar`
     (transparent-over-hero on desktop; black + white links ≤991px) —
     `div.container`: `a.navbar-brand` "moose" (#000) + burger
     (`button.navbar-toggler`, "Menu" text, d-lg-none); `ul.navbar-nav.ml-auto`:
     Home (active), Articles, About, Contact (15px #000 weight 500, hairline
     border-left separators; active #588da8; hover #313b44).
  2. `section.hero-wrap.py-md-4` — `div.overlay`; `div.container` >
     `div.row.no-gutters.justify-content-center.slider-text.align-items-center`
     > `div.col-md-10.ftco-animate.py-5`: `h1.text-center` "M<span>oo</span>se"
     > (16vw/900/#313b44; span hollow stroke) then `div.row.pb-md-5`:
     > `div.col-md-8` h2 (300) "Hello! I'm Giller Moose, I Provide Newest News
     > Update About Digital" + p (18px/1.5); `div.col-md-4` `div.author`:
     > `div.img` (70px circle, `images/person_1.jpg`) + `div.text` h3 "Giller
     > Moose" (18px bold #313b44) + p bio (16px).
  3. `section.ftco-section.ftco-no-pb.ftco-no-pt` — `div.container-fluid.px-md-4`
     > `div.row.no-gutters` with **6×** `div.col-md-12.blog-wrap` alternating
     > `bg-darken` (dark rows also flip the image column with `order-md-last`):
     - `div.col-md-6.img.img-blog.js-fullheight` (cover background-image
       `images/image_1.jpg` / image_2 / image_3 / image_5 / image_6 / image_7
       / image_8 — note: no image_4 in the source, 6 posts).
     - `div.col-md-6` > `div.text.p-md-5.py-5.px-4.ftco-animate`:
       `p.meta` (calendar + "Sept. 27, 2020", user + "Admin", comment + "3",
       12px uppercase #588da8) ; `h2.mb-4` > `a` title "Turning a digital
       brand into a real world experience" (45px/800; #313b44, white +
       underline-offset on dark rows); `div.icon.d-flex.align-items-center`:
       `div.img` (60px circle, person_1..person_4.jpg) + `div.position.pl-3`:
       h4.mb-0 "Jamie Jonson" (16px bold; white on dark rows) + span "CEO,
       Product Designer" (12px uppercase ls 1px #588da8).
     - After row 6: `div.row.py-5` > `div.col-md-12.py-md-5.text-center` >
       `a.btn-custom-blog` "View all articles" + `span.fa.fa-chevron-right`
       (24px weight 500, link to blog.html).
  4. `section.ftco-intro.ftco-section.bg-light` — `div.container` >
     `div.row.justify-content-center` > `div.col-md-12.text-center`: h2
     "Subscribe to our Newsletter" + `div.row.justify-content-center` >
     `div.col-md-5` > `form.subscribe-form` > `div.form-group.d-flex`:
     `input.form-control` placeholder "Enter email address" (50px, border 1px
     #313b44, radius 5px 0 0 5px, text #588da8) + `input[type=submit].submit.px-3`
     value "Subscribe" (bg #313b44, white, radius 0 5px 5px 0, 16px).
  5. `footer.ftco-footer` (bg #141b25) — `div.container` >
     `div.row.mb-5.justify-content-between`:
     - `div.col-sm-12.col-md-4` `div.ftco-footer-widget.mb-4`: h2.logo "Moose"
       (20px/600 white) + p blurb (rgba(255,255,255,.9)) +
       `ul.ftco-footer-social.list-unstyled.mt-2`: 3× `li.ftco-animate` >
       `a` (40×40 circle, bg #588da8, white icon): twitter, facebook,
       instagram.
     - `div.col-sm-12.col-md-2` `div.ftco-footer-widget.mb-4.ml-md-4`: h2
       "Info" + `ul.list-unstyled`: 4× li > a with chevron-right icon: Blog,
       Career, Team, Team.
     - `div.col-sm-12.col-md-4` `div.ftco-footer-widget.mb-4`: h2 "Have a
       Questions?" + `div.block-23.mb-3` `ul`: li map-marker + "203 Fake St.
       Mountain View, San Francisco, California, USA"; li phone + "+2 392
       3929 210"; li envelope + "info@yourdomain.com".
  6. `div.container-fluid.px-0.py-5.bg-black` — `div.container` >
     `div.row` > `div.col-md-12` (centered, white): "Copyright © {year} All
     rights reserved | This template is made with ♥ by Colorlib".
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand accent: **#588da8** (slate blue; 35 occurrences) — `.meta` links
    (12px uppercase weight 500), `.blog-wrap .icon .position span` role text
    (12px uppercase ls 1px), active nav item, social circle bg, subscribe
    input text + focus border (#588da8 !important), breadcrumb hover.
  - Ink: **#313b44** (dark slate; 12 occurrences) — hero wordmark h1 color,
    `.bg-darken` background (`background: #313b44 !important`), blog title
    h2 color (45px/800), `.submit` button bg, subscribe input border, author
    name h3/h4, nav link hover, `.slider-text .author .text h3`.
  - Footer bg: **#141b25** (`.ftco-footer { background: #141b25 }`);
    copyright bar: **#000** (`bg-black`, py-5); mobile navbar bg **#000**.
  - Text: body default #212529 (Bootstrap), headings #313b44, nav #000,
    footer text rgba(255,255,255,.9), darken-row muted text
    rgba(255,255,255,.5), darken-row title/author-name **#fff**.
  - Fonts: body **"Poppins"** (`font-family: "Poppins", Arial, sans-serif`,
    weights 200–900; h1 900, h2 titles 800, meta 500 uppercase).
  - Buttons/inputs: subscribe submit — **radius 0 5px 5px 0** (right-rounded,
    left square), bg #313b44, color #fff, 16px; email input — 50px height,
    border 1px #313b44, **radius 5px 0 0 5px**, color #588da8, focus border
    #588da8; pair sits in a `d-flex` form-group (no gap, one rounded unit).
  - Avatars/socials: author avatar 60px circle (hero author 70px circle);
    footer social links 40×40 circle bg #588da8, white 18px icon centered.
  - Rhythm: `.ftco-section` padding 7em 0 (6em ≤767px); `.blog-wrap`
    margin-bottom 80px; blog text padding p-md-5 (py-5 px-4 mobile);
    `.ftco-footer` padding 6em 0 0; footer widget h2 20px/600 white
    margin-bottom 30px; hero h2 weight 300, hero p 18px/1.5; `.meta` margin
    bottom 10px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/antler-<n>/<w>/<h>` — 6 blog images image_1..8 (skip
  _4) + 4 author avatars person_1..4 ≈ 10 seeds); icons → lucide-react
  (calendar, user, message-circle/comment, chevron-right, map-pin, phone,
  mail, twitter, facebook, instagram, menu); Poppins via Google Fonts
  `<link>` in `index.html`; hollow wordmark span via CSS `-webkit-text-stroke:
1px #313b44` + transparent fill (implementer picks the mid-word 2-letter
  span, e.g. "Antler" → hollow "nt", matching the source's hollow "oo");
  navbar transparent-on-white desktop / black mobile via a scroll or
  width-based class; newsletter form validated per repo conventions (zod),
  success state swaps in a message; skip jQuery/Bootstrap JS/Owl
  (static page, no carousel); alt text on images; focus-visible rings on
  links/buttons; persona + post copy paraphrased (e.g. author "Avery Antler"
  in the hero, post bylines "Jamie Jonson" → a different name + role).

Antler lives in `apps/antler` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a navbar with the site wordmark on the left and
Home / Articles / About / Contact links on the right.

#### Scenario: Navbar content

- **GIVEN** the Antler page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the lowercase site name "antler" as the brand on
  the left
- **AND** it SHALL show links Home, Articles, About, and Contact on the
  right, with Home active
- **AND** the nav links SHALL be dark (#000), weight 500, with hairline
  left separators between them
- **AND** the active link SHALL be the brand slate blue #588da8
- **AND** on mobile a "Menu" burger SHALL expand/collapse the links with
  aria-expanded, over a solid black navbar with white links

### Requirement: Hero with giant wordmark and author card

The system SHALL render a white hero with a huge outlined-part wordmark, an
intro headline + paragraph, and a small author card.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the wordmark "Antler" at very large size (16vw,
  weight 900, color #313b44) centered
- **AND** a mid-word two-letter span of the wordmark SHALL be hollow
  (transparent fill with a 1px #313b44 text stroke)
- **AND** below the wordmark an intro headline (light weight) and an 18px
  intro paragraph SHALL be shown on the left
- **AND** a small author card SHALL be shown on the right with a circular
  photo, the author name (18px bold #313b44), and a short bio

### Requirement: Alternating blog list

The system SHALL render six full-width blog rows alternating between a
white variant (image left) and a dark `#313b44` variant (image right).

#### Scenario: Blog rows content

- **GIVEN** the page is rendered
- **WHEN** the blog list section is displayed
- **THEN** it SHALL show six blog rows, each split into a cover image
  column and a text column
- **AND** the rows SHALL alternate: white rows with the image on the LEFT,
  dark rows (background #313b44) with the image on the RIGHT
- **AND** each row SHALL show meta (date, author, comment count in 12px
  uppercase, slate blue #588da8), a large 45px/800 title, and an author
  block (circular avatar, name, uppercase role in #588da8)
- **AND** on dark rows the title and author name SHALL be white
- **AND** after the rows a centered "View all articles" link (24px weight 500) with a chevron-right icon SHALL be shown

### Requirement: Newsletter band

The system SHALL render a light-gray newsletter band with a heading and a
subscribe form (email input + Subscribe button fused into one rounded unit).

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show the centered heading "Subscribe to our Newsletter"
  on a light-gray background
- **AND** it SHALL show an email input (50px, 1px #313b44 border, left-
  rounded 5px, slate-blue text) and a "Subscribe" button (background
  #313b44, white text, right-rounded 5px) side by side as one unit
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission
- **AND** submitting a valid email SHALL show a success message

### Requirement: Footer

The system SHALL render a dark 3-column footer (about + socials, Info
links, contact block) and a black copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark background #141b25 with white text
- **AND** the first column SHALL show the logo, a blurb, and three circular
  social links (slate blue #588da8 background) for twitter, facebook, and
  instagram
- **AND** the second column SHALL show the heading "Info" with links Blog,
  Career, Team, and Team, each with a chevron-right icon
- **AND** the third column SHALL show "Have a Questions?" with an address,
  a phone number, and an email
- **AND** below the footer a black bar SHALL show "Copyright © {year} All
  rights reserved | This template is made with ♥" (no Colorlib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Antler app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, blog list, newsletter
  band, footer, and copyright bar in the expected order
- **AND** the document title SHALL be "Antler — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh antler` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero wordmark + intro +
      author card, 6 alternating blog rows + view-all link, newsletter,
      footer, copyright bar)
- [ ] Design tokens in `@theme`: brand `#588da8`, ink `#313b44`, footer bg
      `#141b25`, black `#000`, light `#f8f9fa`
- [ ] Font: Poppins (weights 200–900) via Google Fonts `<link>`
- [ ] Navbar: transparent over hero on desktop (black text, hairline link
      separators, active #588da8); black bg + white links + "Menu" burger
      with aria-expanded on mobile
- [ ] Hero: wordmark "Antler" 16vw/900/#313b44 with a hollow mid-word
      2-letter span (1px stroke), light-weight intro headline + 18px
      paragraph left, 70px circular avatar author card right
- [ ] Blog list: 6 alternating rows (white/image-left, #313b44/image-right),
      meta (12px uppercase #588da8), 45px/800 titles (white on dark rows),
      author block with circular avatar + name + uppercase #588da8 role;
      centered 24px "View all articles" + chevron-right
- [ ] Newsletter: bg-light band, "Subscribe to our Newsletter", fused
      input (radius 5px 0 0 5px, border #313b44) + Subscribe button (bg
      #313b44, radius 0 5px 5px 0), zod-validated with error + success states
- [ ] Footer: #141b25, logo + blurb + 3 circular #588da8 social links,
      "Info" links with chevron-right, "Have a Questions?" contact block
- [ ] Copyright bar: black, centered "Copyright © {year} All rights
      reserved | This template is made with ♥" (neutral credit)
- [ ] Placeholder images seeded (`picsum.photos/seed/antler-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on line 274
      "Moose", + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
