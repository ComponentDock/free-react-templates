# Template: Scroll (Blog)

## Purpose

Scroll is a single-page blog/magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Blogger" website template (see TEMPLATES.md, Blog category,
line 247), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, minimalist magazine-style blog with a light-blue
(`#69B4FD`) accent and a blue gradient (`#62bdfc → #8490ff`) on white and
`#222` neutrals: a white fixed header (logo + uppercase nav links Home /
News / Travel / fashion / team + a Pages dropdown) over a full-screen
parallax hero (river-city photo with a `rgba(34,34,34,0.4)` overlay, big
white 48px headline "A Discount Toner Cartridge Is Better Than Ever.",
likes/comments meta, and a bottom-right author block "Mark wiens · 12 Dec,
2017 11:21 am" with a circular avatar); a "Latest News from all categories"
section with 3 image cards (black date bar, title link) in an owl carousel;
a light-grey (`#f9f9ff`) "Hot topics from Travel Section" section with 4
image list rows (black "20 Dec" date block, headline with a gradient-text
hover, description, 15 Likes); a white "Fashion News This Week" section
with 4 image cards (black date bar, headline, 15 Likes); a light-grey
"About Blogger Team" section with 2 photo cards whose hover overlay
(`rgba(105,180,253,0.7)`) reveals the name and role; and a `#222222` footer
with Top Products links, a Newsletter signup (pill input), an Instagram
feed strip (8 tiles), social circles, and a copyright bar. Typography is
Poppins (body 14px weight 300; section titles 36px weight 600; hero 48px
weight 700). Scroll recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Blogger" — Free Blogging Website Template
  (source: https://colorlib.com/wp/template/blogger/). Listed in
  TEMPLATES.md under the Blog category (line 247). Single row, no dup rows
  (verified: grep for `blogger` in TEMPLATES.md returns only line 247).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/blogger/` (the slug matches the
  template slug directly — no redirect/alias needed). DOM fetched
  (`/tmp/blogger-ref/blogger.html`, 25.6 KB); stylesheet
  `https://preview.colorlib.com/theme/blogger/css/main.css` (35.4 KB)
  extracted for tokens; screenshot
  (`blogger-free-blogging-website-template.jpg`, 1200×935, TEMPLATES.md)
  reviewed visually in the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header `header.default-header` (absolute, top 0, `background: #fff`,
     `box-shadow: -21.213px 21.213px 30px 0 rgba(158,158,158,0.3)`,
     z-index 9) > `nav.navbar.navbar-expand-lg.navbar-light` —
     `a.navbar-brand` (image logo `img/logo.png` — recreate as text
     wordmark) + `ul.navbar-nav`: Home (`#home`), News (`#news`), Travel
     (`#travel`), fashion (`#fashion`), team (`#team`) —
     `text-transform: uppercase; font-weight: 600; color: #222; padding:
20px`; hover `#69B4FD`; plus a `li.nav-item.dropdown` "Pages"
     (`a.dropdown-toggle`) with `div.dropdown-menu`: Single, Category,
     Search, Archive, Generic, Elements (14px, no radius) + a
     `button.navbar-toggler` for mobile.
  2. Banner `section.banner-area.relative#home` (data-parallax, bg image
     `img/header-bg.jpg` — river/city photo; `div.overlay` full-cover
     `background: #222; opacity: .4`): `div.banner-content`
     (`margin-top: 25%`, centered at ≤991px) → `h1` white 48px / weight
     700 / line-height 1.15em / margin-bottom 20px: "A Discount Toner
     Cartridge / Is Better Than Ever." (two lines via `<br>`); below, a
     meta row with `span.lnr.lnr-heart` "15 Likes" + `span.lnr.lnr-bubble`
     "02 Comments"; `div.head-bottom-meta` (white, `padding-bottom: 60px`)
     at the banner bottom: left "Mark wiens" (author name) + `img.user-img`
     circular avatar (`img/user.jpg`), right `h4.text-white` "12 Dec, 2017
     11:21 am".
  3. Category `section.category-area.section-gap#news` (white;
     `.section-gap` = `padding: 120px 0`): `h1.mb-10` (36px, weight 600,
     `#222`) "Latest News from all categories" + `p` lorem (14px `#777`);
     `.category_active.owl-carousel` → 3 × `div.single-cat` (col-lg-4,
     padding 15px): `img` (`img/c1.jpg` c2 c3 — hover `transform:
scale(1.1)`) + `div.date` (`background-color: #000; color: #fff;
font-weight: 100; padding: 2px 15px; width: 115px; text-align:
center; margin-top: 20px`) "10 Jan 2018" + `h4`/`a` (18px, `#222`)
     titles: "It S Hurricane Season Visiting Hilton", "What Makes A Hotel
     Boutique", "Les Houches The Hidden Gem Valley"; carousel arrows
     `.lnr-arrow-up` / `.lnr-arrow-down` (white bg, `-14.142px 14.142px
20px rgba(157,157,157,0.2)` shadow, padding 14px, 1px `#f5f5f5`
     border).
  4. Travel `section.travel-area.section-gap#travel` (bg `#f9f9ff`):
     `h1.mb-10` "Hot topics from Travel Section" + lorem `p`; 4 ×
     `div.single-travel` (col-lg-6, `media`): `img` (`img/t1.jpg` t3 t2 t4
     — `mr-3`, hover scale 1.1) + `div.dates` (absolute, `background:
#222; color: #fff; padding: 18px 24px`): `span` 24px / weight 600
     "20" + `p` 14px "Dec"; `div.media-body`: `h4.mt-0` (18px, `#222`,
     margin-bottom 12px; hover = gradient text via
     `background-clip: text`) "Addiction When Gambling Becomes A Problem"
     - `p` lorem + `span`/`a` "15 Likes" (heart icon). Below the grid:
       `a.primary-btn.load-more.pbtn-2.text-uppercase.mx-auto.mt-60` "Load
       More".
  5. Fashion `section.fashion-area.section-gap#fashion` (white): `h1.mb-10`
     "Fashion News This Week" + lorem `p`; 4 × `div.single-fashion`
     (col-lg-3 col-md-6): `img` (`img/f1.jpg`…f4, hover scale 1.1) +
     `div.date` (black bar, same as category) "10 Jan 2018" + `h4`
     (margin-bottom 12px, gradient-text hover) "Addiction When Gambling
     Becomes A Problem" (demo repeats the same headline in all 4 cards) +
     `p` lorem + "15 Likes"; then a second "Load More" pill button
     (`.load-more.mt-60`).
  6. Team `section.team-area.section-gap#team` (bg `#f9f9ff`): `h1.mb-10`
     "About Blogger Team" + `p` "Who are in extremely love with eco
     friendly system."; `.team_active.owl-carousel` → 2 × `div.single-team`
     (col-lg-6, padding 10px): `div.thumb` (relative): `img`
     (`img/team1.jpg`, team2) + `div` hover overlay (absolute cover, `top:
0; left: 0; background-color: rgba(105,180,253,0.7); color: #fff;
opacity: 0 → 1`): `span` name `text-transform: uppercase; font-size:
18px; font-weight: 600; letter-spacing: 3px` (bottom 30px, left
     20px) + `p` role `font-weight: 100` (bottom 10px, left 20px) + white
     social icons; below the thumb: `h4` 18px name + `p` role — Dora
     Walker (Senior Core Developer), Lena Keller (Creative Content
     Developer).
  7. Footer `footer.footer-area.section-gap` (bg `#222222`, padding-top
     100px): 3 × `div.single-footer-widget` (white text): `h6` 18px /
     weight 600 / white / margin-bottom 25px "Top Products" with
     `ul.footer-nav` (margin-top 8px per li) links white, hover `#69B4FD`:
     Managed Website, Manage Reputation, Power Tools, Marketing Service;
     `h6` "Newsletter" + `p` "You can trust us. we only send promo offers,
     not a single spam." + `form.form-inline` (mailchimp action) with
     `input` (`line-height: 38px; border: none; background: #fff;
border-radius: 20px; padding-left: 20px; color: #777`) + submit
     button; `h6` "Instragram Feed" with `ul.instafeed` (8 × `img`
     `img/i1.jpg`…i8, `width: 25%`, margin 5px). `div.footer-bottom`
     (padding-top 80px): `div.footer-social` (right-aligned): 5 × `a`
     40px circles (`background: #111111`, `i` `#cccccc`; hover = blue
     gradient bg + white icon): Facebook, Twitter, Linkedin, Dribbble,
     Behance (inline SVG); `p.footer-text` copyright: "Copyright ©2024 All
     rights reserved | This template is made with ♥ by
     [Colorlib](https://colorlib.com)" (link + heart `#69B4FD`).
- **Visual design (screenshot):** minimalist, magazine-style blog. The top
  half is a full-width scenic hero photo (European river/city view with
  boats and red-roofed buildings) darkened by a semi-transparent overlay,
  with a large bold white centered headline "A Discount Toner Cartridge Is
  Better Than Ever."; below the headline are like/comment counts, and at
  the bottom right an author block with a circular avatar, "Mark wiens"
  and a date. Below the hero: a white content area with a dark centered
  heading "Latest News from all categories" + lorem line, then a row of
  three image cards (cityscape, hiker, two people) with a "1" carousel
  pagination. Accent color is a medium light blue (logo, nav links, hover
  states). Airy whitespace, grid-based layout, Poppins sans-serif, clean
  magazine aesthetic.
- **Design tokens (extracted from css/main.css):**
  - Font: **Poppins**, sans-serif (Google Fonts); body 14px weight 300,
    line-height 1.625em, `#777`.
  - Headings: Poppins weight 600, `#222`; h1 36px (section titles,
    `mb-10`), h4 18px, h6 14px — footer widget h6 18px white (margin-bottom
    25px); banner h1 48px / 700 / line-height 1.15em / white.
  - Accent blue `#69B4FD`: `::selection` bg, nav-link hover, `.load-more`
    hover border + text, footer link hover, footer-text links/heart, team
    overlay `rgba(105,180,253,0.7)`.
  - Gradient `linear-gradient(45deg, #62bdfc 0%, #8490ff 100%)`:
    `.primary-btn` background, `.footer-social a:hover` background,
    h4 hover text (`-webkit-background-clip: text;
-webkit-text-fill-color: transparent`), `.generic-banner` background.
  - Darks: `#222` (headings, nav links, banner overlay `rgba(34,34,34,0.4)`,
    travel `.dates` block bg, footer bg `#222222`, `single-list`/`single-posts`
    date bg), `#000` (category/fashion `.date` bars), `#111111`
    (footer-social circle bg).
  - Lights: `#fff` (page, category + fashion section bgs, header bg, footer
    text, newsletter input bg), `#f9f9ff` (travel + team section bgs),
    `#777` (body text, placeholder), `#cccccc` (footer social icons),
    `#f5f5f5` (carousel arrow border).
  - Buttons: `.primary-btn` — `line-height: 42px; padding-left: 30px;
padding-right: 60px; border-radius: 25px` (pill); white, uppercase,
    weight 500, gradient bg, no border; `.load-more` / `.pbtn-2` —
    padding-left/right 30px; hover: transparent bg + 1px `#69B4FD` border
    - `#69B4FD` text.
  - Cards/date bars: category + fashion `.date` — `#000` bg, white,
    weight 100, `padding: 2px 15px`, width 115px, centered, `margin-top:
20px`; travel `.dates` block — absolute, `#222` bg, white, `padding:
18px 24px`, `span` 24px/600, `p` 14px; card image hover
    `transform: scale(1.1)`; h4 hover = gradient text.
  - Team overlay: `rgba(105,180,253,0.7)`, white; name `span` uppercase
    18px / 600 / letter-spacing 3px (bottom 30px, left 20px); role `p`
    weight 100 (bottom 10px, left 20px); opacity 0 → 1 on hover, 0.5s.
  - Section rhythm: `.section-gap` = 120px vertical padding; titles `h1
mb-10` + lorem `p`; "Load More" `mt-60`, centered (`mx-auto`);
    footer pt 100, footer-bottom pt 80.
  - Header: absolute over the banner, white bg, soft shadow
    `-21.213px 21.213px 30px 0 rgba(158,158,158,0.3)`; nav links
    uppercase 600 `#222` padding 20px, hover `#69B4FD`; dropdown items
    14px, no radius, margin-top 15px.
- **Recreation name:** Scroll (NEW name, differs from ColorLib "Blogger").
  App folder `apps/scroll`, package `@free-react-templates/scroll`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/scroll-<n>/<w>/<h>`: hero banner 1600×900, category
  cards 600×400 ×3, travel rows 400×400 ×4, fashion cards 600×400 ×4,
  team photos 600×400 ×2, instagram tiles 200×200 ×8, author avatar
  120×120); lucide-react icons (Heart, MessageCircle, ChevronUp, ChevronDown;
  brand icons Facebook/Twitter/Linkedin/Dribbble/Behance as inline SVG —
  lucide has no brand icons); Poppins via Google Fonts; owl carousels
  (category, team) → simple grids with prev/next buttons (document the
  choice); parallax hero (`data-parallax="scroll"`) → fixed/cover
  background (document); newsletter form → local state with a success
  message (no mailchimp endpoint); keep the banner headline, section
  titles, and category card titles 1:1; travel/fashion cards repeat the
  same demo headline in the original — vary them with article-style
  headlines of the same kind (document the deviation); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header and navigation

The system SHALL render a white fixed header with a logo, uppercase nav
links, a Pages dropdown, and a mobile toggler.

#### Scenario: Header content

- **GIVEN** the Scroll page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site logo on the left (text
  wordmark)
- **AND** the header SHALL show nav links: Home, News, Travel, fashion,
  team
- **AND** the header SHALL show a Pages dropdown with items: Single,
  Category, Search, Archive, Generic, Elements

#### Scenario: Nav link style

- **GIVEN** the header is rendered
- **WHEN** a nav link is inspected
- **THEN** nav links SHALL be uppercase, weight 600, `#222`, with 20px
  padding
- **AND** the hover state SHALL color the link `#69B4FD`

#### Scenario: Header placement

- **GIVEN** the page is rendered at desktop width
- **WHEN** the header is inspected
- **THEN** the header SHALL be positioned at the top of the page with a
  white background and a soft `rgba(158,158,158,0.3)` shadow

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered at mobile width
- **WHEN** the user taps the toggler
- **THEN** the navigation links SHALL expand/collapse

### Requirement: Hero banner

The system SHALL render a full-screen photo banner with a dark overlay, a
large white headline, engagement meta, and an author block.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner is displayed
- **THEN** it SHALL use a cover background image (river/city photo) with
  a dark `rgba(34,34,34,0.4)` overlay
- **AND** it SHALL show the headline "A Discount Toner Cartridge Is
  Better Than Ever." in white 48px weight 700 (two lines)
- **AND** it SHALL show engagement meta: "15 Likes" (heart icon) and "02
  Comments" (bubble icon)

#### Scenario: Banner author block

- **GIVEN** the banner is rendered
- **WHEN** the bottom of the banner is inspected
- **THEN** it SHALL show the author name "Mark wiens" with a circular
  avatar image
- **AND** it SHALL show the timestamp "12 Dec, 2017 11:21 am" in white

### Requirement: Latest News section

The system SHALL render a "Latest News from all categories" section with
three image cards.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show the heading "Latest News from all categories"
  with a lorem description
- **AND** it SHALL show three cards: "It S Hurricane Season Visiting
  Hilton", "What Makes A Hotel Boutique", "Les Houches The Hidden Gem
  Valley"
- **AND** each card SHALL show an image (zoom on hover), a black
  centered date bar "10 Jan 2018" (width 115px, white, weight 100), and
  a `#222` title link

### Requirement: Travel section

The system SHALL render a light-grey "Hot topics from Travel Section"
section with four image list rows and a Load More button.

#### Scenario: Travel content

- **GIVEN** the page is rendered
- **WHEN** the travel section is displayed
- **THEN** it SHALL use the `#f9f9ff` background
- **AND** it SHALL show the heading "Hot topics from Travel Section"
  with a lorem description
- **AND** it SHALL show four rows, each with an image, a black "20 Dec"
  date block (`span` 24px/600 + `p` 14px), a title (gradient-text on
  hover), a lorem description, and "15 Likes"
- **AND** a centered pill "Load More" button SHALL appear below the grid

#### Scenario: Travel row hover

- **GIVEN** a travel row is rendered
- **WHEN** the user hovers over the title
- **THEN** the title SHALL show the blue gradient text effect

### Requirement: Fashion section

The system SHALL render a white "Fashion News This Week" section with
four image cards and a Load More button.

#### Scenario: Fashion content

- **GIVEN** the page is rendered
- **WHEN** the fashion section is displayed
- **THEN** it SHALL show the heading "Fashion News This Week" with a
  lorem description
- **AND** it SHALL show four cards (col-lg-3), each with an image (zoom
  on hover), a black centered date bar "10 Jan 2018", a title, a lorem
  description, and "15 Likes"
- **AND** a centered pill "Load More" button SHALL appear below the grid

### Requirement: Team section

The system SHALL render a light-grey "About Blogger Team" section with
photo cards that reveal the member name and role on hover.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL use the `#f9f9ff` background
- **AND** it SHALL show the heading "About Blogger Team" with the
  subheading "Who are in extremely love with eco friendly system."
- **AND** it SHALL show two members: Dora Walker (Senior Core Developer)
  and Lena Keller (Creative Content Developer)

#### Scenario: Team card hover

- **GIVEN** a team card is rendered
- **WHEN** the user hovers over the photo
- **THEN** a `rgba(105,180,253,0.7)` overlay SHALL appear with the name
  (uppercase, 18px, weight 600, letter-spacing 3px) and the role
  (weight 100) in white

### Requirement: Footer

The system SHALL render a dark footer with a links widget, a newsletter
form, an Instagram feed, social circles, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL use the `#222222` background
- **AND** it SHALL show a "Top Products" widget with links: Managed
  Website, Manage Reputation, Power Tools, Marketing Service
- **AND** it SHALL show a "Newsletter" widget with the text "You can
  trust us. we only send promo offers, not a single spam." and a pill
  input (white bg, border-radius 20px)
- **AND** it SHALL show an "Instragram Feed" widget with eight square
  image tiles
- **AND** it SHALL show social circles (Facebook, Twitter, Linkedin,
  Dribbble, Behance) with a blue-gradient hover
- **AND** it SHALL show the copyright line "Copyright ©2024 All rights
  reserved | This template is made with ♥ by Colorlib"

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an email
- **THEN** the form SHALL show a success message (no external
  mailchimp call)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Scroll app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Scroll — Blog"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/scroll`
      (`scripts/verify-app.sh scroll` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: white fixed header (wordmark + 5 uppercase nav
      links + Pages dropdown + mobile toggler), parallax hero (cover
      river/city photo, `rgba(34,34,34,0.4)` overlay, 48px white
      headline, "15 Likes"/"02 Comments", "Mark wiens" author block),
      news (3 image cards with black date bars), travel (`#f9f9ff`, 4
      rows with "20 Dec" date blocks + gradient-text hover + Load More),
      fashion (4 cards + Load More), team (`#f9f9ff`, 2 photo cards with
      `rgba(105,180,253,0.7)` hover overlay), `#222222` footer (Top
      Products / Newsletter pill form / Instagram feed / social circles /
      copyright) match the ColorLib "Blogger" preview 1:1.
- [ ] Design tokens in `@theme`: accent `#69B4FD`, gradient
      `#62bdfc → #8490ff`, ink `#222`, black `#000`, `#111111`,
      `#f9f9ff`, body `#777`; Poppins loaded via Google Fonts.
- [ ] Placeholder images use `picsum.photos/seed/scroll-<n>/<w>/<h>`;
      brand icons are inline SVG (no lucide brand icons); no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Blogger"), preview
      URL (`https://preview.colorlib.com/theme/blogger/`), design tokens,
      and what differs (name, placeholder images, carousels → grids,
      parallax → fixed/cover, varied travel/fashion card headlines,
      newsletter → local success state, no assets copied).
