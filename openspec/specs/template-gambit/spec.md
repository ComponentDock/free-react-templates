# Template: Gambit (Bootstrap)

## Purpose

Gambit is a single-page gaming / esports website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Comodo" (Comodo Games) design (see TEMPLATES.md, Bootstrap
category, line 362; duplicate rows at lines 1816 Gaming and 2029 Landing
Page — one recreation covers all three rows), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark gaming landing page: an absolute purple navbar over a
full-bleed hero (split: isometric game artwork left, headline + pulsing
video-play button right), an "About Us" intro row with a light section
heading, a 4-card "Upcoming Games" grid with image + centered overlay
titles, a tabbed "Recent Update" area (Live Streaming / Upcoming Challanges
/ Recent Famous Games) with image + text panes, a 4-image "Screens Gallery"
with popup eye icons, a centered testimonial carousel with star ratings, a
3-card pricing row (Silver / Golden / Platinum, middle card highlighted)
with gradient cards and outlined "Order Now" buttons, a 6-item FAQ list, a
3-card "Latest Blog Posts" row with meta icons, a cyan→mint gradient
newsletter band with a pill email input, and a dark-purple 4-column footer.
Signature look: **cyan `#3fcaff` → mint `#a4ffb0` gradient** accents on a
deep purple `#231a60`–`#3c338d` base, Rajdhani display headings, and ghost
72px section titles (cyan at 10% opacity) behind solid headings. Note: much
of the original copy is reused hair-salon placeholder text ("HairStyle is a
Must", "Basic hair Cut") — the recreation keeps the same content KINDS but
paraphrases into gaming-appropriate copy.

## Design reference (replication findings)

- **Original:** ColorLib "Comodo" — free Bootstrap 4 gaming / game
  community website template (source: https://colorlib.com/wp/template/comodo/).
  New name: **gambit** (a chess/gaming strategy term; single word, no
  collision with `ls apps/` or existing spec folders).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/comodo/`
  (HTTP 200, ~28.5KB HTML; page title "Comodo Games"). Stylesheets:
  `css/style.css` (~93.5KB — Bootstrap 4 base + custom theme rules),
  `css/bootstrap.css`, plus vendored linericon, font-awesome,
  owl-carousel, magnific-popup, nice-select, animate-css, flaticon. JS:
  jquery, bootstrap, owl.carousel, magnific-popup, main.js. The CSS opens
  with `@import url("https://fonts.googleapis.com/css?family=Rajdhani:600,700|Roboto:400,500,500i")`
  — **Rajdhani** (600/700) for headings, **Roboto** (400/500/500i) for
  body/buttons; load both from Google Fonts `<link>` in index.html (use
  `@import` is not valid in Tailwind 4; put the `<link>` in index.html).
- **Screenshot viewed** (`comodo-free-template.jpg`, 1200×946, in browser):
  confirms the visual design — dark purple background with a subtle
  geometric grid/mesh pattern, "COMODO GAMES" white uppercase logo top-left
  with a play-button mark, white uppercase nav links (HOME, ABOUT, GALLERY,
  PAGES, BLOG, CONTACT) with a neon mint-green pill "JOIN US" button
  top-right, split hero with a large isometric 3D illustration (futuristic
  tower with glowing cyan neon outlines + floating wireframe cubes on a
  white isometric platform) LEFT and text RIGHT ("For All Occasion HairStyle
  is a Must Try Fashion" + lorem + circular play button "WATCH THE VIDEO").
  The screenshot only reaches the top of the next section; the rest is
  specified from DOM + CSS.
- **Placeholder-copy caveat:** the template is a repurposed salon design —
  hero headline and pricing features ("Basic hair Cut") are salon copy
  while the section names (Upcoming Games, Screens Gallery) are gaming.
  Paraphrase to gaming-appropriate copy of the same kinds (see scenarios).
- **Section order (1:1) from the rendered DOM:**
  1. Navbar (`header.header_area`, `position: absolute; width: 100%; top:
0; z-index: 9999; background: #2c2172`): container row — logo
     (`img/logo.png`, recreated as inline SVG wordmark "Gambit Games"),
     centered link list (`.nav-link`: Roboto 500 12px/100px, uppercase,
     white): Home, About, Gallery, Pages, Pricing, Games, Elements, Blog,
     Blog Details, Contact; CTA `a.primary_btn` "join us" (uppercase,
     gradient). Collapses to a mobile toggler (hamburger) on small screens.
  2. Hero (`section.home_banner_area`, `background:
url(img/banner/home-banner.jpg) no-repeat center center / cover`;
     screenshot shows dark purple + geometric grid pattern; recreate with a
     dark purple base + CSS grid pattern): inner `banner_inner` row — left
     `div.home_left_img` (`img/banner/home-left.png`, the isometric game
     art; recreate as inline SVG or picsum-free placeholder per
     replication rules), right `div.banner_content` (`margin-left: 70px`,
     white text): `h2` 60px bold / line-height 72px ("For All Occasion
     HairStyle is a Must Try Fashion" → paraphrase, e.g. a gaming headline),
     `p` 16px white lorem, then a flex row: `a#play-home-video.video-play-button`
     (60px pulsing circle, `pulse-border` 2000ms infinite animation, black
     play triangle) + `div.watch_video.text-uppercase` "watch the video"
     (12px uppercase, `margin: 0 30px`).
  3. About (`section.about_us_area.section_gap_top`, `padding-bottom:
120px`): `row.about_content.align-items-center` — left `col-lg-6`
     `div.section_content`: `h1` white (line-height 45px, `padding: 30px 0`)
     "We Believe that Interior beauty Lasts Long" (paraphrase) + paragraph
     - `a.primary_btn` "Learn More"; right `col-lg-6`
       `div.about_us_image_box.justify-content-center` (`img/about_img.png`).
  4. Upcoming Games (`section.upcoming_games_area`, `padding: 120px 0
80px`): centered `div.main_title` — `h2` 72px cyan `#3fcaff` at
     opacity 0.1 (ghost, line-height 60px) + `h1` solid `#222222` with
     `margin-top: -40px` (overlapping double title); `row.text-center` of 4
     cards `col-lg-3 col-md-6 col-sm-6` `div.new_games_item` (position
     relative, inline-block, margin-bottom 40px): image (`img/b_map1..4.png`)
     - absolute `div.upcoming_title` overlay (`background:
rgba(44,37,93,0.8)`, centered vertically, full width, transition .4s)
       with `h3` 18px link: Best Ps4 Games, World Dart 2019, New XBox Games,
       Amarican Football (→ games.html).
  5. Recent Update (`section.recent_update_area.section_gap`,
     `background: url(img/recent_up_bg.png) no-repeat center`): Bootstrap
     tabs — `ul.nav.nav-tabs` of 3 `li.nav-item` `a.nav-link` (Rajdhani 600
     18px white, height 50px / line-height 50px; **active + hover**:
     `linear-gradient(90deg, #3fcaff, #a4ffb0)` background + 2px gradient
     `border-image`): "Live Streaming" (active), "Upcoming Challanges",
     "Recent Famous Games"; 3 `div.tab-pane` each with a `div.media`: image
     (`img/recent_up.png`) + `div.media-body` `div.section_content`: `h1`
     white 45px lh ("About Us", padding 30px 0) + paragraph + `a.primary_btn`
     "Learn More".
  6. Gallery (`section.gallery_area`, `padding: 120px 0 90px`):
     `div.main_title` "Screens Gallery" (ghost + solid); row of 4 images
     (`img/gallery_img1..4.png`, `col-lg-3`-ish grid) each wrapped in
     `a.pop-up-image` (magnific-popup lightbox) with a hover eye icon
     (Linearicons `lnr lnr-eye` → lucide `Eye` in the recreation).
  7. Testimonials (`section.testimonials_area.section_gap`,
     `background: url(img/testimonial_bg.png) no-repeat center / cover`):
     `div.testi_slider.owl-carousel` of 3 `div.testi_item` (centered):
     quote icon (`img/quote.png`), `h4` 18px white name (Fanny Spencer —
     paraphrase names), `ul.list` of 5 star icons (font-awesome `fa-star`,
     yellow `#f8b600`), `p` italic Roboto 18px white, `max-width: 555px`,
     `margin: auto` (quote text). Carousel with dots/arrows (owl → custom
     React carousel).
  8. Pricing (`section.pricing_area.section_gap`, `padding: 120px 0 80px`):
     `div.main_title` "Pricing Plans"; `row` of 3 cards `col-lg-4 col-md-6`
     (third `col-lg-4 hidden-md`) `div.pricing_item` — background
     `linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%)`:
     `h3` package name (Silver Package, **Golden Package** with extra class
     `active` — the highlighted middle card, Platinum Package), `h1.p_price`
     "$69.00" (bold white, `padding: 30px`, `background: #342b7e`), `ul`
     (`padding: 35px 50px 18px`, 3 list items — "Basic hair Cut" ×3 →
     paraphrase to gaming features), `a.gradient_btn` "Order Now"
     (uppercase; outlined gradient-border button).
  9. FAQ (`section.frequently_area`, `padding: 120px 0`): `div.main_title`
     "Frequently Asked Questions"; 6 `div.frequent_item` rows (the last
     with class `frequent_item last-child`) in `div.row.frequent_inner` —
     custom accordion (title row + collapsible answer; original questions
     are placeholder boilerplate — paraphrase to gaming/community FAQs).
  10. Blog (`section.blog_area`): `div.main_title` "Latest Blog Posts";
      `row` of 3 cards `col-lg-4 col-md-6` `div.blog_items`: `div.blog_img_box`
      (overflow hidden, `img/blog_img1..3.png`) + `div.blog_content`:
      `a.title` ("Portable Fashion for women" → paraphrase, e.g. game news
      headlines) + `p` excerpt (Roboto, `color: #ddd`, `padding: 20px 0 40px`)
      - `div.date` meta row (`a` 13px Roboto 400 `#ddd`, `margin-right:
30px`): calendar icon "13th Dec", heart icon "15", comments icon "05".
  11. Newsletter (`section.newsletter_area`, `background:
linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%)`, `padding: 68px
0 60px`): `div.newsletter_inner` (centered, margin-bottom 20px) —
      `h1` `#22195e` "Subscribe Our Newsletter" + blurb "We won't send any
      kind of spam"; `form.subscribe_form.relative` `div.input-group`:
      email input (`.form-control`: `background: #3fcaff`, white text,
      `border-radius: 45px`, `padding-left: 20px`, `line-height: 29px`,
      font-weight 300) + submit `button.btn.primary_btn` "Subscribe"
      positioned absolutely right (`top: 50%`, `transform: translateY(-50%)`,
      `right: 20px`).
  12. Footer (`footer.footer_area.section_gap_top`, `background:
linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%)`):
      `div.footer_inner` row of 4 `div.f_widget` columns — h4 titles 18px
      weight 600 white (`f_title`): **About Gambit** (brand column: "For
      Business", "Premium Plans", "Reviews", "How it Works", "Gambit Blog"),
      **Company** (Product Tour, Pricing, Founding Members, Case Studies,
      Product Updates), **Support** (Documentation, Data Securiry, Site
      Performance, Action Plan, Resources), **Legal** (Terms and conditions,
      Privacy Policy, Cookie Information, Opt-Out); `ul` links
      (`li` padding-bottom 15px, semi-transparent white → white hover);
      `div.single-footer-widget` copyright row: "Copyright © <year> All
      rights reserved | This template is made with ❤ by Colorlib" →
      paraphrase to the recreation ("made with by Free React Templates"),
      no ColorLib attribution.

## Design tokens (extracted from `css/style.css` + DOM)

- Fonts (Google Fonts): **Rajdhani** 600/700 — all display headings (nav
  tabs 18px/600, upcoming-game titles h3 18px, pricing h3, ghost titles);
  **Roboto** 400/500/500i — body text, nav links (500 12px uppercase),
  buttons (gradient_btn 500 12px uppercase, letter-spacing 1px), blog meta
  13px, testimonial quote 18px italic. Load via `<link>` in index.html.
- Brand gradient: **`linear-gradient(to right, #3fcaff 0%, #a4ffb0 100%)`**
  (cyan → mint) — `.primary_btn` backgrounds (with `background-size: 200%
auto`; hover shifts `background-position: right center`, text `#22195e`),
  newsletter section background, tab active/hover background, 2px gradient
  border-image on tab pills. Variant `90deg` used for tab gradients.
- Deep purple base: **`#231a60`** (darkest), **`#2c2172`** (navbar
  background), **`#342b7e`** (price block + gradient midpoint),
  **`#3b328b`**, **`#3c338d`** (gradient end), **`#22195e`** (newsletter h1,
  button hover text). Pricing cards + footer use
  `linear-gradient(to right, #231a60 0%, #3c338d 51%, #231a60 100%)`.
- Overlay tint: `rgba(44, 37, 93, 0.8)` — upcoming-game card title overlay.
- Ink / text: section headings `#222222`; light-section body gray
  `#777777`; blog text on dark `#ddd`; white text on dark sections.
- Ghost title: **`#3fcaff` at `opacity: 0.1`** — `h2` 72px (line-height
  60px) behind solid `h1` with `margin-top: -40px` in `.main_title`
  (centered, `margin-bottom: 80px`).
- Star / rating yellow: **`#f8b600`** (+ `#f4e700` in the palette) —
  testimonial stars.
- Shapes: `.primary_btn` — no radius in base (rectangular gradient pill
  feel; check `padding`/hover in source: gradient sweep right on hover);
  `.gradient_btn` — `border-radius: 10px`, `border: double 2px transparent`
  with `background-image: linear-gradient(#342b7e, #3b328b),
radial-gradient(circle at top left, #3fcaff, #a4ffb0)`, `line-height:
46px`; hover → text `#22195e` + `box-shadow: 0px 10px 30px rgba(130, 82,
250, 0.2)`. Newsletter input — pill `border-radius: 45px`, `background:
#3fcaff`, white text. Video play button — 60px circle, pulsing
  `pulse-border` animation (2000ms ease-out infinite), black play triangle.
  `.blog_btn` — white bg, `1px solid #fff`, 13px Roboto 500, `line-height:
34px`, `padding: 0 32px` (used on blog detail pages; not in home DOM).
- Section rhythm: `section_gap` = `padding: 120px 0`; `section_gap_top` =
  `padding-top: 120px`; about `padding-bottom: 120px`; upcoming games
  `120px 0 80px`; gallery `120px 0 90px`; newsletter `68px 0 60px`;
  `.main_title` `margin-bottom: 80px`.
- Surfaces: hero = dark photo bg (`home-banner.jpg` cover; recreate as
  dark purple `#231a60`-family base + subtle CSS grid pattern);
  recent-update = bg image (`recent_up_bg.png`); testimonials = bg image
  (`testimonial_bg.png`) cover; everything else transparent over white
  page.

## Requirements

### Requirement: Navbar

The system SHALL render an absolute dark-purple navbar over the hero with a
logo, ten links, and a gradient "join us" CTA.

#### Scenario: Brand and links

- **GIVEN** the Gambit page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL show a logo/wordmark ("Gambit Games") on the left
- **AND** it SHALL show uppercase white links Home, About, Gallery, Pages,
  Pricing, Games, Elements, Blog, Blog Details, Contact (Roboto 500, 12px)
- **AND** the navbar SHALL have the dark purple background `#2c2172` and
  sit absolutely at the top (over the hero)

#### Scenario: CTA button

- **GIVEN** the navbar is displayed
- **WHEN** the CTA is inspected
- **THEN** it SHALL show an uppercase "join us" button with the brand
  gradient (cyan `#3fcaff` → mint `#a4ffb0`) background
- **AND** on hover the gradient SHALL sweep to the right (background
  position shift) with text turning dark `#22195e`

#### Scenario: Mobile toggle

- **GIVEN** a narrow viewport
- **WHEN** the navbar is rendered
- **THEN** it SHALL collapse the links behind a hamburger toggle
- **AND** activating the toggle SHALL expand/collapse the link list with
  `aria-expanded` maintained

### Requirement: Hero

The system SHALL render a full-bleed dark hero split between game artwork
and a text block with a pulsing video-play button.

#### Scenario: Hero layout

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have a dark background (recreated purple base with a
  subtle grid pattern) covering the viewport width
- **AND** it SHALL show the game artwork on the left (desktop) and the
  text column on the right, matching the screenshot split

#### Scenario: Hero text and CTA

- **GIVEN** the hero text column is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a large bold white headline (60px / line-height
  72px, e.g. a gaming headline paraphrased from "For All Occasion HairStyle
  is a Must Try Fashion")
- **AND** a short white 16px paragraph
- **AND** a circular pulsing video-play button beside the uppercase text
  "watch the video" (12px)

### Requirement: About section

The system SHALL render an intro row with a light heading, paragraph,
"Learn More" button, and an image on the right.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a white heading (line-height 45px) on the left
  with a paragraph and a gradient "Learn More" button
- **AND** it SHALL show an image on the right (desktop), hidden or stacked
  on small screens

### Requirement: Upcoming Games

The system SHALL render a centered "Upcoming Games" section with four
image cards carrying centered overlay titles.

#### Scenario: Ghost title

- **GIVEN** the Upcoming Games section is displayed
- **WHEN** the section heading is inspected
- **THEN** it SHALL show a large ghost "Upcoming Games" word (cyan
  `#3fcaff` at 10% opacity, 72px) behind a solid dark heading overlapping
  it (negative top margin)

#### Scenario: Game cards

- **GIVEN** the card row is rendered
- **WHEN** it is inspected
- **THEN** it SHALL show four cards (4 columns on desktop, 2 on tablet)
  each with an image and an overlay band (`rgba(44,37,93,0.8)`) centered
  vertically showing the title (Rajdhani 18px): Best Ps4 Games, World Dart
  2019, New XBox Games, Amarican Football (paraphrase allowed)
- **AND** each title SHALL link to a games page (router link or `#`)

### Requirement: Recent Update tabs

The system SHALL render a tabbed "Recent Update" area with three tabs and
matching image+text panes.

#### Scenario: Tab pills

- **GIVEN** the Recent Update section is displayed
- **WHEN** the tab list is rendered
- **THEN** it SHALL show three tabs (Rajdhani 600, 18px, white, 50px tall):
  "Live Streaming" (active), "Upcoming Challanges", "Recent Famous Games"
- **AND** the active tab SHALL have the cyan→mint gradient background with
  a 2px gradient border; inactive tabs SHALL get the same treatment on
  hover

#### Scenario: Tab panes

- **GIVEN** a tab is active
- **WHEN** its pane is displayed
- **THEN** it SHALL show an image beside a white heading (line-height 45px),
  a paragraph, and a gradient "Learn More" button
- **AND** clicking another tab SHALL switch the visible pane (one pane at a
  time)

### Requirement: Screens Gallery

The system SHALL render a "Screens Gallery" section with four images that
open in a lightbox.

#### Scenario: Gallery grid

- **GIVEN** the Gallery section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the "Screens Gallery" ghost + solid title
- **AND** it SHALL show four screenshot images in a row
- **AND** clicking an image SHALL open a lightbox (larger view) with an
  eye icon hint on hover

### Requirement: Testimonials

The system SHALL render a centered testimonial carousel with star ratings.

#### Scenario: Carousel slides

- **GIVEN** the testimonials section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a dark background band with a centered carousel of
  three quotes
- **AND** each slide SHALL show a quote icon, a name (18px white), five
  yellow stars (`#f8b600`), and an italic white quote (18px, max-width
  ~555px)
- **AND** the carousel SHALL support next/prev navigation and dots

### Requirement: Pricing

The system SHALL render a "Pricing Plans" row with three gradient cards,
the middle one highlighted.

#### Scenario: Plan cards

- **GIVEN** the pricing section is displayed
- **WHEN** the card row is rendered
- **THEN** it SHALL show the "Pricing Plans" ghost + solid title
- **AND** it SHALL show three cards (3 columns on desktop) with a dark
  purple gradient background: Silver Package, Golden Package, Platinum
  Package
- **AND** the middle card (Golden Package) SHALL be visually highlighted
  (active state)

#### Scenario: Price, features, CTA

- **GIVEN** a plan card is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the plan name, a bold white price ($69.00) on a
  `#342b7e` block, three feature list items (paraphrased to gaming
  features), and an outlined gradient "Order Now" button (uppercase, 10px
  radius, gradient border, purple hover shadow)

### Requirement: FAQ

The system SHALL render a "Frequently Asked Questions" list of six
accordion items.

#### Scenario: Accordion behavior

- **GIVEN** the FAQ section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the "Frequently Asked Questions" ghost + solid
  title
- **AND** it SHALL show six question rows (gaming/community FAQs,
  paraphrased)
- **AND** clicking a question SHALL expand its answer and collapse the
  previously open one

### Requirement: Latest Blog Posts

The system SHALL render a "Latest Blog Posts" row with three blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the card row is rendered
- **THEN** it SHALL show the "Latest Blog Posts" ghost + solid title
- **AND** it SHALL show three cards (3 columns on desktop, 2 on tablet)
  each with an image, a title link, an excerpt (Roboto, `#ddd`), and a
  meta row with calendar date, heart count, and comment count (13px,
  `#ddd`)

### Requirement: Newsletter

The system SHALL render a cyan→mint gradient newsletter band with a pill
email input and a subscribe button.

#### Scenario: Newsletter band

- **GIVEN** the newsletter section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have the brand gradient background (cyan→mint)
- **AND** it SHALL show a dark `#22195e` heading "Subscribe Our Newsletter"
  with a "no spam" blurb
- **AND** it SHALL show an email input styled as a cyan pill (45px radius)
  with a "Subscribe" button inside it on the right
- **AND** submitting a valid email SHALL show a success state (no backend
  required)

### Requirement: Footer

The system SHALL render a dark-purple gradient footer with four link
columns and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL have the dark purple gradient background
  (`#231a60`→`#3c338d`)
- **AND** it SHALL show four columns with white 18px headings — About
  Gambit (brand links), Company, Support, Legal — each with a link list
  (semi-transparent white, full white on hover)
- **AND** the brand column SHALL read as the footer brand (name + links)

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom row is rendered
- **THEN** it SHALL show a copyright line referencing the recreation (e.g.
  "Copyright © All rights reserved | made with by Free React Templates") —
  no ColorLib attribution or assets

## Verification checklist

- [ ] `npm run verify:app gambit` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the rendered original 1:1 (navbar → hero →
      about → Upcoming Games → Recent Update tabs → gallery → testimonials
      → pricing → FAQ → blog → newsletter → footer)
- [ ] Tokens wired through `@theme`: brand gradient stops cyan `#3fcaff`
      and mint `#a4ffb0`, purples `#231a60` / `#2c2172` / `#342b7e` /
      `#3b328b` / `#3c338d` / `#22195e`, ink `#222222`, star yellow
      `#f8b600`, overlay `rgba(44,37,93,0.8)`
- [ ] Rajdhani 600/700 + Roboto 400/500 loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Ghost section titles: 72px cyan at 10% opacity behind solid headings
      with negative margin overlap (`.main_title` pattern)
- [ ] Buttons: `primary_btn` gradient sweep on hover (text `#22195e`);
      `gradient_btn` outlined (double 2px transparent border + gradient
      radial), 10px radius, uppercase, purple hover shadow
      `0 10px 30px rgba(130,82,250,0.2)`
- [ ] Navbar: absolute dark purple (`#2c2172`), 10 uppercase links + "join
      us" CTA, hamburger mobile toggle with aria-expanded
- [ ] Hero: dark background + split (art left / text right), 60px headline,
      pulsing circular video-play button + "watch the video" label
- [ ] Upcoming Games: 4 cards with `rgba(44,37,93,0.8)` centered overlay
      titles; Recent Update: 3 gradient-active tabs + 3 image/text panes
- [ ] Gallery: 4 images with lightbox + hover eye icon; Testimonials: 3
      slides, 5 yellow stars, italic quotes, carousel controls
- [ ] Pricing: 3 gradient cards, middle "active", $69.00 on `#342b7e` block,
      3 features each, "Order Now" gradient_btn
- [ ] FAQ: 6 accordion items, one open at a time; Blog: 3 cards with meta
      row (calendar / heart / comments)
- [ ] Newsletter: gradient band, `#22195e` heading, cyan pill input with
      embedded Subscribe button, submit success state
- [ ] Footer: purple gradient, 4 columns (About Gambit / Company / Support /
      Legal), copyright paraphrased
- [ ] Placeholder images use `https://picsum.photos/seed/gambit-<n>/<w>/<h>`;
      hero game art recreated as an inline SVG (no assets copied)
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
