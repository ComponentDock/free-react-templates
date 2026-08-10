# Template: Iris (Photography Template)

## Purpose

Iris is a single-page photography portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Flash" photography website template design (see TEMPLATES.md,
Bootstrap section, line 400; duplicate at line 2447 under Photography — mark
EVERY copy `[x]` when done), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a dark/editorial photography portfolio (demo brand in the
preview: "Flash" / title "Flash Photography"): a black fixed navbar over a
nature-photo hero with a big serif headline, alternating photo/text feature
rows, an image+text services mosaic, a light testimonial panel, an Instagram
strip that overlaps the black footer, and a black footer with About /
Newsletter / Follow-Me widgets.

## Design reference (replication findings)

- **Original:** ColorLib "Flash" — photography portfolio template (source:
  https://colorlib.com/wp/template/flash/). Listed in TEMPLATES.md at lines
  400 (Bootstrap) and 2447 (Photography). Screenshot:
  `flash-free-template.jpg` (1200×946, viewed in browser with vision
  analysis).
- **Live preview URL:** https://preview.colorlib.com/theme/flash/ —
  reachable (HTTP 200, 18.1 KB, title "Flash Photography"). HTML saved to
  `/tmp/flash-preview.html`; stylesheets
  `https://preview.colorlib.com/theme/flash/css/style.css` (62.5 KB) saved
  to `/tmp/flash-style.css` and `css/responsive.css` to
  `/tmp/flash-responsive.css`. Other linked assets: bootstrap.css,
  linericon (Linearicons icon font), font-awesome, owl-carousel,
  simpleLightbox, nice-select, animate-css, magnific-popup.
- **Screenshot (vision analysis):** black navbar with a white logo
  (camera glyph + uppercase wordmark — recreated as a text logo) and small
  white uppercase menu items (HOME active); hero is a full-width nature
  photo (green leaves + red flower bud, bokeh, dark overlay for
  readability) with a centered large WHITE SERIF headline "Nature
  Photoshoot", a small white sans paragraph, and a flat coral-red
  (≈#ff4d4d, actual token #fa333f) slightly-rounded "Explore Gallery"
  button; below, on white, an alternating image + serif-heading row starts
  ("Spreading…"). The screenshot cuts off shortly after the first feature
  row — the DOM + CSS are the authoritative reference for the services,
  testimonials, Instagram and footer sections (DOM wins, as usual).
- **Visual design (from DOM + CSS tokens + rendered screenshot):** dark
  photography portfolio with a strong editorial contrast — black navbar
  (transparent over the hero, solid black when fixed on scroll) and black
  footer, big PT Serif headings (80px hero, 42px section/feature titles)
  in `#222222` on white/`#f9f9ff` sections, body copy in Roboto
  14px/24px `#777777`, and one vibrant red accent `#fa333f` used for the
  primary CTA, nav hover/active, newsletter submit, and social/link
  hovers. Sections: hero photo card (radius 12px, pulled down over a black
  band), four alternating photo/text rows with overlapping white cards
  (radius 10px), a services mosaic of 8 alternating image/text cells on
  `#f9f9ff`, a testimonials panel (light `#f9f9ff` panel + white slider
  card with soft shadow), an Instagram strip of 6 equal squares with a
  centered white button that overhangs the footer (negative margin), and a
  black footer with three widget columns.

- **Structure (1:1 from the preview DOM, section order):**
  1. Header `header.header_area` (**absolute, top 0, z-index 99**; `.main_menu`
     becomes **fixed with `background: #000`** and 70px link line-height when
     scrolled — `.navbar_fixed` class): `nav.navbar.navbar-expand-lg` >
     `div.container`:
     - Brand `a.navbar-brand.logo_h` — image `img/logo.png` (camera glyph +
       uppercase wordmark in the screenshot) → recreate as a white
       uppercase text wordmark (e.g. "Iris" + optional lucide Camera icon).
     - `ul.nav.navbar-nav.menu_nav.ml-auto` — SIX items, Roboto **500 12px
       uppercase**, white, `line-height: 120px` (desktop), `margin-right:
45px`: **Home** (`.active`), **About**, **Projects ▾** (dropdown:
       Projects / Project Details), **Pages ▾** (dropdown: Elements),
       **Blog ▾** (dropdown: Blog / Blog Details), **Contact**. Hover &
       active → `#fa333f`.
     - Dropdowns `.dropdown-menu`: white bg, `box-shadow: 0px 3px 16px 0px
rgba(0,0,0,0.1)`, `min-width: 200px`, shown on hover (opacity +
       visibility transition).
     - Mobile (`max-width: 991px`): `.navbar` bg `#000`; hamburger
       `.navbar-toggler` = three white bars (25×3px, `#fff`, 4px gap),
       animated to an X when `aria-expanded=true`; collapsed links
       `line-height: 40px` with `border-bottom: 1px solid
rgba(237,237,237,0.2)`; hero below gets `margin-top: 117px`.
  2. Hero `section.home_banner_area` (**bg `#000`, `margin-bottom: 120px`**)
     > `div.box_1620` (**photo background `img/banner/home-banner.jpg`,
     > `background-size: cover`, `min-height: 650px`, `border-radius: 12px`,
     > `position: relative; bottom: -120px` — the photo card overlaps the
     > black band and the white section below**) > `div.banner_inner` (flex,
     > centered) > `div.container` > `div.banner_content.text-center` (white):
     - `h3` **"Nature <br /> Photoshoot"** — PT Serif bold **80px**,
       `line-height: 76px`, `margin-bottom: 20px`.
     - `p` — "If you are looking at blank cassettes on the web, you may be
       very confused at the difference in price. You may see some for as
       low as $.17 each." — Roboto 14px/24px, `max-width: 620px`, `margin:
auto`.
     - `a.main_btn` **"Explore Gallery"** (`margin-top: 40px`).
  3. Feature rows `section.home_blog_area.pad_top` (**padding-top 120px**;
     `home_blog_inner` `margin-bottom: -50px`) — FOUR `div.row.h_blog_item`
     (`margin-bottom: 50px`), each a 2-col split, sides ALTERNATING
     (img-left, img-right, img-left, img-right):
     - Image col `div.col-lg-6` > `div.h_blog_img` (`border-radius: 10px`)
       > `img.img-fluid` (`img/home-blog/h-blog-1..4.jpg`).
     - Text col `div.col-lg-6` > `div.h_blog_text` (padding 60px 0) >
       `div.h_blog_text_inner.left|.right` — white card, `padding: 75px
90px`, `border-radius: 10px`, `.left` `margin-left: -67px` /
       `.right` `margin-right: -67px` (card overlaps the photo):
       - `h4` **"Spreading <br /> Peace to world"** — `#222222`, PT Serif
         **42px**, `margin-bottom: 15px`.
       - `p` — blank-cassette copy, `margin-bottom: 30px`.
       - `a.main_btn2` **"Explore Gallery"**.
  4. Services `section.service_area.p_120` (**padding: 120px 0**) >
     `div.container.box_1620`:
     - `div.main_title` (centered, `max-width: 670px`, `margin: 0 auto
75px`): `h2` **"Services Offered by Us"** (PT Serif 42px,
       `#222222`, mb 15px) + `p` (Roboto 14px/24px `#777777`).
     - `div.row.m0.service_inner` — EIGHT cells (4 photo + 4 text)
       alternating in DOM order: **img(1), text(2), img(3), text(4),
       text(5), img(6), text(7), img(8)**; each `col-lg-3.col-md-6.p0`:
       - `div.service_img` > `img.img-fluid` (`img/service/service-1..4.jpg`).
       - `div.service_text` — `background: #f9f9ff`, `height: 100%`,
         `padding: 95px 40px 0`: `h4` **"Spreading <br /> Peace to world"**
         (`#222222`, 20px/27px, mb 15px) + `p` (14px `#777777`).
  5. Testimonials `section.feedback_area.pad_bt` (**padding-bottom 120px**) >
     `div.container` > `div.feedback_inner.p_100` (**bg `#f9f9ff`,
     `border-radius: 10px`, padding 100px 0**) > `div.row`:
     - Left `div.col-lg-5` > `div.feedback_text` (`padding: 0 55px 0 95px`,
       vertically centered): `h3` **"Client's Feedback"** (`#222222`, PT
       Serif 36px, mb 15px) + `p` ("Quis nostrud exercitation …").
     - Right `div.col-lg-7` > `div.testi_slider_inner` (**white card,
       `border-radius: 10px`, `box-shadow: 0px 10px 30px 0px
rgba(157,157,157,0.2)`, `margin-right: 95px`**) >
       `div.testi_slider.owl-carousel` (`padding: 40px`) — THREE identical
       `.item` slides, each `div.media`:
       - `div.d-flex` — round avatar `img/testimonials/testi-1.jpg`
         (`padding-right: 25px`).
       - `div.media-body`: `p` ITALIC quote ("Accessories Here you can find
         the best computer accessory for your laptop, monitor, printer,
         scanner, speaker, projector, hardware".) + `h4` **"Mark Alviro
         Wiens"** (`#222222`, 18px) + `h5` **"CEO at Google"** (Roboto
         14px, normal).
       - (owl-carousel — a simple carousel or static list of the three
         items is acceptable; the reference shows one slide at a time.)
  6. Instagram `section.instagram_area` (**position: relative**) >
     `div.container.box_1620`:
     - `div.insta_btn` — **absolutely centered** (`left: 50%; top: 50%;
translate(-50%,-50%)`, z-index 2): `a.btn.theme_btn` **"Follow us
       on instagram"** — white bg, `#222222` text, `border-radius: 5px`,
       `padding: 0 45px`, `line-height: 50px`, Roboto 13px 500.
     - `div.instagram_image.row.m0` — SIX `a` links, each `flex: 0 0
16.667%` (6 equal squares) with `img` (`img/instagram/ins-1..6.jpg`,
       `width: 100%`, hover `transform: scale(1.05)`); the strip has
       **`margin-bottom: -120px`** so it overlaps the footer below.
  7. Footer `footer.footer_area` (**bg `#000`, `padding: 230px 0 120px`** —
     the tall top padding is where the Instagram strip overhangs) >
     `div.container` > `div.row.footer_inner`, THREE widget columns:
     - `div.col-lg-5.col-sm-6` > `aside.f_widget.ab_widget`: `div.f_title`
       > `h3` **"About Me"** (white, PT Serif 18px bold, mb 35px); `p`
       > ("Do you want to be even more successful? Learn to love learning
       > and growth. The more effort you put into improving your skills, …"
       > — Roboto 14px/24px `#777777`, mb 30px); `p` copyright line
       > "Copyright © <year> All rights reserved | This template is made
       > with ❤ by **Colorlib**" (KEEP the Colorlib credit per CC BY 3.0;
       > heart = `fa fa-heart-o` → lucide Heart; the credit link color is
       > `#fa333f`).
     - `div.col-lg-5.col-sm-6` > `aside.f_widget.news_widget`: `h3`
       **"Newsletter"** + `p` "Stay updated with our latest trends"; form
       `form.subscribe_form.relative` (`#mc_embed_signup` wrapper):
       - `input` email, `placeholder: "Enter email address"` — height
         40px, transparent bg, `border: 1px solid #1e233b`, `color:
#cccccc`, Roboto 14px.
       - `button.btn.sub-btn` — **bg `#fa333f`**, white, `width: 42px`,
         arrow icon `lnr lnr-arrow-right` (→ lucide ArrowRight), radius 0.
     - `div.col-lg-2` > `aside.f_widget.social_widget`: `h3` **"Follow
       Me"** + `p` "Let us be social"; `ul.list` of FOUR social links
       (facebook, twitter, dribbble, behance — font-awesome `fa fa-*`):
       `color: #cccccc`, `margin-right: 17px`, hover → `#fa333f`. Brand
       icons must be inline SVG (lucide-react removed brand glyphs).

- **Design tokens extracted from `css/style.css` + `css/responsive.css`:**
  - Brand red **`#fa333f`** — `.main_btn` fill (white text),
    `.main_btn2:hover` fill + border + shadow
    (`rgba(250,51,63,0.25)` `0px 10px 20px`), nav link hover/active,
    newsletter `.sub-btn` fill, footer copyright link + social hover.
  - Black **`#000`** — hero band (`home_banner_area` bg),
    `.footer_area` bg, fixed navbar (`.navbar_fixed .main_menu`), mobile
    navbar bg; white text on all of them.
  - Ink **`#222222`** — headings (`h2/h3/h4`), `.main_btn2` text,
    `.theme_btn` (Instagram) text.
  - Body/muted **`#777777`** — main-title p, `.service_text p`, `.ab_widget
p`, `.news_widget p`, `.social_widget p` (Roboto 14px/24px).
  - Light section bg **`#f9f9ff`** — `.feedback_inner`, `.service_text`,
    `.main_btn2` bg.
  - Card borders/accents — `.main_btn2` border `#eeeeee`; newsletter input
    border `#1e233b`; newsletter placeholder/text `#cccccc` (also social
    idle color).
  - Shadows — testimonial card `0px 10px 30px 0px rgba(157,157,157,0.2)`;
    dropdown + fixed nav `0px 3px 16px 0px rgba(0,0,0,0.1)`; `main_btn2`
    hover red shadow above.
  - Fonts — body/nav/buttons **"Roboto", sans-serif** (300/400/500/700,
    loaded via `@import` in style.css from Google Fonts); headings
    **"PT Serif", serif** (400/700). Body 14px/24px; nav 500 12px
    uppercase (desktop line-height 120px, fixed 70px, mobile 40px);
    `.main_title h2` / feature h4 42px; hero h3 80px (line-height 76px);
    `.feedback_text h3` 36px; `.service_text h4` 20px/27px; `.f_title h3`
    white 18px bold.
  - Radii — hero photo card **12px**, feature/testimonial cards **10px**,
    buttons **5px** (`.main_btn`, `.main_btn2`, `.theme_btn`); newsletter
    input + `.sub-btn` radius 0.
  - Buttons — flat, `line-height: 48px`, `padding: 0 40px` (`.main_btn`) /
    `0 45px` (`.main_btn2`), Roboto 13px 500, `border-radius: 5px`;
    `.main_btn` = red fill + 1px red border, hover inverts (transparent,
    red text); `.main_btn2` = `#f9f9ff` fill + `#eeeeee` border, hover
    fills red w/ red shadow; `.theme_btn` = white fill, `line-height:
50px`.
  - Icons (font-awesome `fa fa-*` / Linearicons `lnr lnr-*` in source →
    swap to lucide-react): arrow-right (newsletter submit), heart-o
    (copyright), instagram/camera (logo + Instagram strip button);
    brand socials (facebook, twitter, dribbble, behance) must be inline
    SVG (lucide-react removed brand glyphs).

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/iris-<n>/<w>/<h>`; hero 1600×750 nature landscape,
  feature rows 700×500, service cells 400×400, testimonial avatar 90×90,
  Instagram squares 320×320); icons → lucide-react (ArrowRight, Heart,
  Camera, Instagram; brand socials → inline SVG); Roboto + PT Serif via
  Google Fonts `<link>` in `index.html`; logo recreated as a white
  uppercase text wordmark ("Iris" + optional Camera icon); the four
  feature rows → a static array of 4 items rendered with alternating
  sides; the three identical testimonial slides → render all three in a
  simple carousel (or stacked list) with the same content structure; the
  Instagram strip keeps its negative-margin overlap onto the black footer;
  the fixed-on-scroll navbar (`.navbar_fixed`) → implement as a scroll
  listener flipping the navbar to solid black with 70px links; hero
  background photo → seeded picsum with a dark overlay for text
  readability; the demo brand "Flash" → **Iris** (new name); copy may be
  paraphrased but keeps the same kind of content (headline + subtext +
  CTA patterns).

Iris lives in `apps/iris` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Fixed header with logo, navigation and dropdowns

The system SHALL render an absolute transparent header over the hero with
a brand wordmark, six uppercase nav links (Home active), and hover
dropdowns for Projects, Pages and Blog; on scroll the header SHALL become
a fixed solid-black bar.

#### Scenario: Header content

- **GIVEN** the Iris page is rendered
- **WHEN** the page loads
- **THEN** a transparent header SHALL show the "Iris" wordmark on the left
- **AND** the navigation SHALL list Home (active), About, Projects, Pages,
  Blog and Contact in white uppercase Roboto 500 12px text
- **AND** hovering or activating a nav link SHALL turn it `#fa333f`

#### Scenario: Dropdown menus

- **GIVEN** the header is displayed
- **WHEN** the user hovers Projects, Pages or Blog
- **THEN** a white dropdown SHALL appear with the sub-links (Projects /
  Project Details; Elements; Blog / Blog Details)

#### Scenario: Fixed header on scroll

- **GIVEN** the user scrolls past the hero
- **WHEN** the header becomes fixed
- **THEN** it SHALL show a solid black background with the same white
  links

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the collapsed menu SHALL slide open with a black navbar, white
  hamburger bars animating to an X
- **AND** the nav links SHALL stack with bottom borders

### Requirement: Hero banner with headline and CTA

The system SHALL render a black-banded hero with a rounded nature-photo
card that overhangs the following section, a big serif headline, an intro
paragraph and a red "Explore Gallery" button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** a 650px-tall photo card with 12px radius SHALL be shown on a
  black background, pulled down so it overlaps the section below
- **AND** the headline "Nature Photoshoot" SHALL be shown in white 80px
  PT Serif bold
- **AND** an intro paragraph SHALL be shown in white Roboto 14px/24px
- **AND** an "Explore Gallery" button SHALL be shown as a flat
  `#fa333f` red button with 5px radius

#### Scenario: Hero button hover

- **GIVEN** the hero button is displayed
- **WHEN** the user hovers it
- **THEN** the button SHALL invert to a transparent background with red
  text

### Requirement: Feature rows

The system SHALL render four alternating photo/text feature rows, each
text block as a white rounded card overlapping the photo, with a serif
heading, a paragraph and a light "Explore Gallery" button.

#### Scenario: Feature row layout

- **GIVEN** the feature section is displayed
- **WHEN** the page loads
- **THEN** four rows SHALL be shown alternating image-left and
  image-right
- **AND** each text card SHALL be white with 10px radius, overlapping the
  photo by ~67px
- **AND** each card SHALL show a 42px PT Serif heading ("Spreading Peace
  to world"), a paragraph and an "Explore Gallery" button with a
  `#f9f9ff` background and `#eeeeee` border

#### Scenario: Feature button hover

- **GIVEN** a feature-row button is displayed
- **WHEN** the user hovers it
- **THEN** the button SHALL fill `#fa333f` with white text and a red
  shadow

### Requirement: Services section

The system SHALL render a centered "Services Offered by Us" title block
and a mosaic of eight alternating image/text cells on light
`#f9f9ff` text panels.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** the heading "Services Offered by Us" SHALL be shown in 42px PT
  Serif with an intro paragraph
- **AND** eight cells SHALL be shown alternating image and text panels
  (image, text, image, text, text, image, text, image)
- **AND** each text panel SHALL have a `#f9f9ff` background with a 20px
  serif heading and a paragraph

### Requirement: Client feedback section

The system SHALL render a light `#f9f9ff` rounded panel split into a
"Client's Feedback" heading on the left and a white shadowed testimonial
card on the right showing the client quotes.

#### Scenario: Testimonial content

- **GIVEN** the feedback section is displayed
- **WHEN** the page loads
- **THEN** the heading "Client's Feedback" SHALL be shown in 36px PT
  Serif with an intro paragraph
- **AND** a white card SHALL show the three client slides (avatar, italic
  quote, name "Mark Alviro Wiens" and role "CEO at Google")

### Requirement: Instagram strip

The system SHALL render a centered white "Follow us on instagram" button
over a row of six equal square photos that overlaps the footer below.

#### Scenario: Instagram content

- **GIVEN** the Instagram section is displayed
- **WHEN** the page loads
- **THEN** a white button with 5px radius SHALL be centered over the
  strip
- **AND** six equal-width square photos SHALL be shown in a row
- **AND** the strip SHALL extend over the black footer beneath it

### Requirement: Footer

The system SHALL render a black footer with three widget columns (About
Me with the Colorlib credit, Newsletter with an email form, Follow Me
with social links) and a bottom copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** an "About Me" column SHALL show an intro paragraph and the
  copyright line crediting the template source
- **AND** a "Newsletter" column SHALL show an email input with a
  `#1e233b` border and a red arrow submit button
- **AND** a "Follow Me" column SHALL show four social icon links
  (Facebook, Twitter, Dribbble, Behance) in `#cccccc` turning `#fa333f`
  on hover

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Iris app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, feature rows, services,
  feedback, Instagram and footer in the correct order
- **AND** the document title SHALL be "Iris — Photography Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/iris`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/iris`)
- [ ] Section order matches the reference 1:1 (header → hero → feature rows
      → services → feedback → instagram → footer)
- [ ] Design tokens from the reference used in `@theme` (brand red
      #fa333f, ink #222222, body #777777, light #f9f9ff, borders #eeeeee /
      #1e233b, muted #cccccc, black #000; Roboto + PT Serif fonts)
- [ ] Header: transparent over hero, "Iris" wordmark, 6 uppercase white
      Roboto 500 12px links (Home active), hover/active #fa333f, hover
      dropdowns, fixed solid-black on scroll, mobile hamburger (3 white
      bars → X) + stacked links with bottom borders
- [ ] Hero: black band, rounded (12px) 650px photo card pulled down
      (-120px overlap), "Nature Photoshoot" 80px PT Serif bold white,
      intro paragraph, red #fa333f "Explore Gallery" button (5px radius,
      hover inverts)
- [ ] Feature rows: 4 alternating photo/text rows, white cards (10px
      radius, ±67px overlap), 42px serif headings, #f9f9ff/#eeeeee
      "Explore Gallery" buttons (hover → red fill + red shadow)
- [ ] Services: "Services Offered by Us" 42px serif title + 8
      alternating image/text cells (#f9f9ff text panels, 20px serif
      headings)
- [ ] Feedback: #f9f9ff rounded panel, "Client's Feedback" 36px serif +
      white shadowed testimonial card with 3 slides (avatar, italic
      quote, name + role)
- [ ] Instagram: centered white button over 6 equal squares, strip
      overlaps black footer (-120px)
- [ ] Footer: #000 bg, About Me (+ Colorlib credit kept), Newsletter
      (email input #1e233b border + red arrow submit), Follow Me (4
      socials #cccccc → #fa333f hover)
- [ ] Placeholder images are seeded picsum (no copied assets); icons from
      lucide-react + inline SVG brand socials; Roboto + PT Serif via
      Google Fonts link; logo as white uppercase text wordmark
- [ ] README Templates status + TEMPLATES.md Flash lines (400 AND 2447)
      marked `[x]` after merge
