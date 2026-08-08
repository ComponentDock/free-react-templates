# Template: Scribe (Blog / Magazine Template)

## Purpose

Scribe is a single-page personal news blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Moose" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Moose" — personal blog / digital news magazine
  template (source: https://colorlib.com/wp/template/moose/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/moose/
  (HTTP 200, 22 KB rendered DOM, title "Moose - Free Bootstrap 4 Template
  by Colorlib"). Stylesheets: `css/style.css` (59.9 KB, extracted) on a
  Bootstrap 4 base, plus animate.css, flaticon.css, magnific-popup,
  owl.carousel (loaded but unused on this page), font-awesome 4.7.
  Google/Poppins loaded via Cloudflare @font-face (cf-fonts) in the head
  (weights 200–400+). No section `id`s — sections use classes only.
- **Screenshot:** `moose-colorlib-template.jpg` (TEMPLATES.md line 274) —
  also verified against the live rendered page in a browser (vision
  analysis): clean minimal white blog; black navbar with lowercase "moose"
  logo left and Home/Articles/About/Contact right; hero features a giant
  "Moose" wordmark (the two "o"s are thin outlined circles — a
  `-webkit-text-stroke` effect) centered, then a two-column intro: left a
  greeting headline + paragraph, right a small circular-avatar author card;
  below, full-width alternating article rows (image left/right), each with
  uppercase meta (date/category/comment count), a bold headline, and an
  author chip (avatar + name + role); a light-grey newsletter band with a
  square subscribe form; a very dark footer with logo + blurb + round
  social icons, an Info link column, a "Have a Questions?" contact block,
  and a black copyright bar.
- **Visual design (from DOM + CSS tokens + rendered screenshot):** minimal
  editorial blog aesthetic — white page background, dark slate
  `#313b44` body text/headlines, dusty blue `#588da8` interactive accent
  (links, active nav, social circles, contact icons, newsletter highlight),
  alternating article rows alternate white / dark slate `#313b44` (dark
  rows flip text to white), black navbar and footer bottom bar, very dark
  `#141b25` footer body, `#f8f9fa` light newsletter band, square-ish
  subscribe controls (5px radius), 400px article images, Poppins display
  headings. The demo brands itself "moose"; recreation uses the NEW name
  **Scribe**.

- **Structure (1:1, section order):**
  1. Navbar `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark`
     (bg `#000000`) — `div.container`: `a.navbar-brand` **"moose"**
     (white); `div.collapse.navbar-collapse` > `ul.navbar-nav.ml-auto`:
     **Home** (`li.active`, link color `#588da8`) / **Articles** /
     **About** / **Contact** (links `rgba(255,255,255,0.5)`). Mobile:
     hamburger toggler (`oi oi-menu` + "Menu" label), Bootstrap collapse.
  2. Hero `section.hero-wrap.py-md-4` (white bg, `div.overlay` absolute,
     opacity .5) — `div.container` > `div.row.no-gutters.justify-content-center.slider-text.align-items-center`
     > `div.col-md-10.ftco-animate.py-5`:
     - `h1.text-center` **"M<span>oo</span>se"** — `.slider-text h1`:
       font-size **16vw** (20vw mobile), color `#313b44`, line-height 1.2,
       font-weight **900**; the inner `<span>` is outlined:
       `color: transparent; -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #313b44` (the hollow "o" circles).
     - `div.row.pb-md-5`: `div.col-md-8` — `h2` **"Hello! I'm Giller
       Moose, I Provide Newest News Update About Digital"** (weight 300)
       - `p` (18px, lh 1.5) "A small river named Duden flows by their
         place…"; `div.col-md-4` — `div.author`: `div.img` (70×70 circle,
         bg image person_1.jpg) + `div.text` with `h3` **Giller Moose**
         (18px, weight 700, `#313b44`) + `p` (16px) short bio.
  3. Articles `section.ftco-section.ftco-no-pb.ftco-no-pt` —
     `div.container-fluid.px-md-4` > `div.row.no-gutters` — **SEVEN**
     `div.col-md-12.blog-wrap` rows (alternating
     `blog-wrap` / `blog-wrap.bg-darken` [`#313b44`], images 1,2,3,5,6,7,8;
     image_4 skipped in source). Each row `div.row.no-gutters.align-items-center`:
     - `div.col-md-6.img.img-blog.js-fullheight` (400px bg image,
       `order-md-last` on dark rows → image right, text left)
     - `div.col-md-6` > `div.text.p-md-5.py-5.px-4.ftco-animate`:
       `p.meta` with `a` links: `fa fa-calendar` + **Sept. 27, 2020**,
       `fa fa-user` + **Admin**, `fa fa-comment` + **3**;
       `h2.mb-4` (45px, weight 800, lh 1.4, link `#313b44`) >
       `a` headline "Turning a digital brand into a real world
       experience" (same copy in all 7 rows in source);
       `div.icon.d-flex.align-items-center`: `div.img` (small avatar) +
       `div.position.pl-3` with `h4.mb-0` **Jamie Jonson** + `span`
       **CEO, Product Designer** (persons 1–4 cycle).
       Dark rows: `.text` color `rgba(255,255,255,0.5)`, `h2 a` and
       author `h4` white.
  4. Newsletter `section.ftco-intro.ftco-section.bg-light` (bg `#f8f9fa`)
     — `div.container` > `div.row.justify-content-center` >
     `div.col-md-12.text-center`: `h2` **"Subscribe to our Newsletter"**
     (color `#313b44`, weight 600, inner `span` bg `#588da8` — the span
     is present in CSS but the source h2 has no span; optional);
     `div.row.justify-content-center` > `div.col-md-5` >
     `form.subscribe-form` > `div.form-group.d-flex`: `input.form-control`
     placeholder **"Enter email address"** (transparent bg, 1px solid
     `#313b44` border, color `#588da8`, 50px height, radius **5px 0 0
     5px**) + `input.submit.px-3` value **"Subscribe"** (bg `#313b44`,
     white text, radius **0 5px 5px 0**, 16px).
  5. Footer `footer.ftco-footer` (bg `#141b25`, padding 6em 0 0, font-size
     16px, text `rgba(255,255,255,0.9)`) — `div.container` >
     `div.row.mb-5.justify-content-between`:
     - `div.col-sm-12.col-md-4` — `div.ftco-footer-widget.mb-4`:
       `h2.ftco-heading-2.logo` > `a` **Moose**; `p` "Far far away,
       behind the word mountains…"; `ul.ftco-footer-social.list-unstyled.mt-2`
       — 3 `li.ftco-animate` > `a` (40×40 circle, radius 50%, bg
       `#588da8`, white icon) with `fa fa-twitter` / `fa fa-facebook` /
       `fa fa-instagram`.
     - `div.col-sm-12.col-md-2` — `div.ftco-footer-widget.mb-4.ml-md-4`:
       `h2.ftco-heading-2` **Info**; `ul.list-unstyled` — 4 `li` > `a`
       (`fa fa-chevron-right.mr-2` + **Blog / Career / Team / Team**,
       links `rgba(255,255,255,0.7)`).
     - `div.col-sm-12.col-md-4` — `div.ftco-footer-widget.mb-4`:
       `h2.ftco-heading-2` **"Have a Questions?"**; `div.block-23.mb-3` >
       `ul`: address `li` (icon `fa fa-map marker` + "203 Fake St.
       Mountain View, San Francisco, California, USA"), phone `li` >
       `a` (`fa fa-phone` + **+2 392 3929 210**), email `li` > `a`
       (`fa fa-paper-plane` + **info@yourdomain.com**); block-23 icons
       color `#588da8`.
     - `div.container-fluid.px-0.py-5.bg-black` — `div.container` >
       `div.row` > `div.col-md-12` > `p.mb-0` (color
       `rgba(255,255,255,0.5)`): "Copyright © <year> All rights reserved
       | This template is made with ♥ by Colorlib".

- **Design tokens extracted from `css/style.css`:**
  - Accent dusty blue **`#588da8`** — `a` links, active nav link
    (`#588da8`), footer social circle bg, `.block-23` icons, subscribe
    input text color, `.ftco-intro h2 span` bg.
  - Dark slate **`#313b44`** — body text color (17px, lh 1.8), headings
    (`h1–h5` color `rgba(0,0,0,0.8)` but hero h1 explicitly `#313b44`),
    `.bg-darken` article rows, hero wordmark, `.slider-text .author h3`,
    blog `h2 a`, subscribe button bg + input border, newsletter h2.
  - Black **`#000000`** — navbar bg (`bg-dark`), footer bottom bar
    (`bg-black`).
  - Footer bg **`#141b25`** — `.ftco-footer`; text
    `rgba(255,255,255,0.9)`; widget headings `#fff` (20px, weight 600);
    links `rgba(255,255,255,0.7)`.
  - Light band **`#f8f9fa`** (`bg-light`) — newsletter section.
  - Body: white page bg; 17px, lh 1.8, weight 400, color `#313b44`
    (Bootstrap system font stack); `a` color `#588da8`, hover
    text-decoration underline.
  - Headings font: **Poppins** (cf-fonts @font-face, weights 200–400+ in
    head; `h1–h5` font-family "Poppins", Arial, sans-serif, weight 400,
    color `rgba(0,0,0,0.8)`, lh 1.5, mb 20px).
  - Hero wordmark `.slider-text h1`: **16vw** (20vw ≤767px), weight 900,
    `#313b44`, lh 1.2; inner `span` outlined (`-webkit-text-stroke-width:
1px`, stroke `#313b44`, fill transparent).
  - Article rows: image `.img-blog` height **400px** (bg-image, cover);
    text padding `p-md-5 py-5 px-4`; `h2` 45px, weight **800**, lh 1.4;
    `.meta` small grey with Font Awesome icons (calendar/user/comment);
    author chip: avatar + `h4` (name) + `span` (role), dark rows white.
  - Buttons/subscribe: 50px controls, radius **5px 0 0 5px** (input) /
    **0 5px 5px 0** (submit); submit bg `#313b44`, white text, 16px;
    input transparent bg, 1px `#313b44` border, text `#588da8`.
  - Social circles `.ftco-footer-social li a`: 40×40, border-radius 50%,
    bg `#588da8`, white 18px icon centered.
  - Section spacing: `.ftco-section` default Bootstrap padding; footer
    padding 6em 0 0; bottom bar `py-5` black.
  - Loader (pre-hydration only): `#ftco-loader` circular spinner, stroke
    `#F96D00` on `#eeeeee` track — decorative, may be dropped in the
    React app.
  - Fonts: **Poppins** for headings (Google/cf-fonts); body uses the
    Bootstrap system stack (`-apple-system, BlinkMacSystemFont, "Segoe
UI", Roboto, …`).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/scribe-<n>/<w>/<h>`); icons → lucide-react
  (calendar, user, message-circle/comment; brand socials as inline SVG
  since lucide-react removed brand glyphs; chevron-right, map-pin,
  phone, mail); Poppins via Google Fonts `<link>` in `index.html`; no
  assets copied; article rows render as `img` with `object-cover` (400px)
  or bg-image divs — either is fine as long as the alternating
  white/dark treatment and `order`-flipped images match. No carousel on
  this page (owl.carousel loaded but unused).

Scribe lives in `apps/scribe` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a black header with the site name, a navigation
menu with section links, and a mobile collapse menu.

#### Scenario: Header content

- **GIVEN** the Scribe page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Scribe" on the left in
  white
- **AND** nav links Home, Articles, About, and Contact SHALL be visible
  on the right
- **AND** the Home link SHALL be marked as the active section in the
  accent color `#588da8`

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same section links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero section

The system SHALL render a white hero with a giant outlined wordmark, a
greeting headline, a paragraph, and an author card with a circular avatar.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** a giant "Scribe" wordmark SHALL be shown centered (very large
  responsive size, weight 900)
- **AND** the two "o" letters of the wordmark SHALL be rendered as thin
  outlined circles (transparent fill, 1px stroke in the ink color)
- **AND** a two-column row SHALL show a greeting headline ("Hello! I'm
  …" style) with a paragraph on the left
- **AND** an author card with a 70px circular avatar, the author's name,
  and a short bio SHALL appear on the right

### Requirement: Article rows

The system SHALL render seven full-width alternating article rows, each
with an image, metadata, a headline, and an author chip; every other row
SHALL use the dark slate background with inverted text.

#### Scenario: Alternating article rows

- **GIVEN** the articles section is displayed
- **WHEN** the page loads
- **THEN** seven article rows SHALL be shown, each split 50/50 between a
  ~400px image and a text block
- **AND** rows SHALL alternate between white and dark slate `#313b44`
  backgrounds
- **AND** on dark rows the image SHALL be on the right and the text on
  the left (flipped on light rows)
- **AND** each text block SHALL show meta (date, author, comment count),
  a bold headline (45px, weight 800), and an author chip with avatar,
  name, and role
- **AND** on dark rows the headline, author name, and meta SHALL be
  white/light

### Requirement: Newsletter subscribe

The system SHALL render a light-background centered subscribe section
with a heading, an email input, and a square-ish subscribe button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the user enters an email and presses the Subscribe button
- **THEN** the section SHALL indicate the subscription was received
  (success message)

#### Scenario: Invalid email

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits without a valid email
- **THEN** a validation error SHALL be shown and no success message SHALL
  appear

### Requirement: Footer

The system SHALL render a very dark footer with a logo and blurb column
with round social icons, an Info link column, a "Have a Questions?"
contact block, and a black copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name, a blurb, and three circular
  social icon buttons in the accent color
- **AND** an "Info" column SHALL list links (Blog, Career, Team, …)
- **AND** a "Have a Questions?" block SHALL show an address, a phone
  number, and an email with accent-colored icons
- **AND** a black bottom bar SHALL show the copyright line "Copyright ©
  <year> All rights reserved" with a credit to the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Scribe app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, articles, and newsletter sections in the main landmark, and the
  footer in the contentinfo landmark
- **AND** the document title SHALL be "Scribe — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/scribe`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/scribe`)
- [ ] Section order matches the reference 1:1 (navbar → hero → 7 article rows → newsletter → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #588da8, ink #313b44, black #000000, footer #141b25, bg-light #f8f9fa, Poppins font)
- [ ] Hero wordmark: huge (16vw-class), weight 900, ink color, "o" letters outlined via text-stroke (transparent fill, 1px stroke)
- [ ] Article rows: 7 rows, 50/50 image/text, 400px images, alternating white/dark-slate, image side flips on dark rows, dark rows invert text to white; h2 45px/800
- [ ] Subscribe form: 50px controls, radius 5px/0 split, input transparent with 1px ink border + accent text, submit ink bg + white text
- [ ] Footer: #141b25 bg, 40px circular accent social buttons, Info links, contact block with accent icons, black copyright bar
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + TEMPLATES.md Moose line (274) marked `[x]` after merge
