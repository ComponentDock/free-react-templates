# Template: Trailhead (Blog Template)

## Purpose

Trailhead is a single-page blog/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hikers"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hikers" — blog / magazine template
  (source: https://colorlib.com/wp/template/hikers/). TEMPLATES.md has ONE
  copy of this item (line 264).
- **Preview URL:** https://preview.colorlib.com/theme/hikers/ — HTTP 200, full
  rendered DOM analyzed with curl AND verified in a browser (title: "Hikers
  Blog &mdash; Colorlib Website Template"). Stylesheets: `css/style.css`
  (main), plus bootstrap.min.css, owl.carousel.min.css, magnific-popup.css,
  jquery-ui.css, bootstrap-datepicker.css, aos.css, flaticon.css, icomoon.
  Fonts: Google Fonts **Muli 300/400/700 + Playfair Display 400/700/900**
  (Playfair is loaded but NOT used in the main stylesheet — every rule uses
  Muli; load Muli only, or keep both links for parity).
  Cross-checked against the TEMPLATES.md screenshot
  (`hikers-free-template.jpg`, viewed in browser) — designs match. The demo
  brands itself "Hikers"; our recreation uses the NEW name **Trailhead**.
- **Section order (1:1):** Mobile menu overlay (`#site-mobile-menu`: close
  button; body is JS-populated in the demo — render a slide-in menu with nav
  clone + social icons) → Header (`.site-navbar.pt-3`, white bg): row 1 =
  logo "Hikers" left (`h1`, black, font-weight 900, 40px) + right side =
  social icons (3 × 30px black circles, white glyphs: Facebook, Twitter,
  Instagram) + hamburger toggle (hidden ≥xl); row 2 = centered nav bar under
  `border-top` (hidden <xl): Homepage (active), Lifestyle, Inspiration
  (has-children dropdown: Architect, Minimal, Interior, Furniture),
  Technology, Latest → Hero slider (`.slide-one-item.home-slider` owl
  carousel, 2 slides in demo): each slide `.site-cover.site-cover-sm
.same-height.overlay` (bg photo, padding 7em 0, dark overlay), content
  `col-lg-6`: post-category chip (bg-success text-white "Nature"), `h2`
  white (3rem desktop / 2rem mobile, lh 1.2) post title, post-meta (white,
  13px): 30px circular author avatar + "By Carrol Atkinson" + "&ndash;
  February 10, 2019" → Featured strip (`.py-5`, `rounded border p-4`): 3
  `post-sm-entry` links (col-md-6 col-lg-4): figure (flex 110px, rounded
  image, hover opacity .5) + chip (Travel bg-danger, Lifestyle bg-warning,
  Nature bg-success) + h2 (1rem, black) → Retro layout (`.site-section`,
  `.retro-layout`): left col-md-5 = big hentry `.img-1.h-100.gradient`
  (photo 400px, gradient transparent → rgba(0,0,0,0.8) from 18%, chip
  top-left Travel bg-danger, `.text` absolute bottom: h2 26px white + date
  span rgba(255,255,255,0.5)); right col-md-7 = hentry `.img-2.v-height
.mb30.gradient` (300px, Nature bg-success) + `.two-col` with 2 hentry
  `.v-height.img-2.gradient` side by side (Sports bg-primary, Lifestyle
  bg-warning), each `.text.text-sm`: h2 18px white + date → Popular Posts
  (`.site-section`, `.section-heading` h2 black 700): left col-lg-6 =
  `.entry2` (img-fluid rounded mb 30px, chip, h2 24px 700 title, post-meta
  with author figure + "By <a>Carrol Atkinson</a> &ndash; February 10,
  2019", excerpt p #666666); right col-lg-6 pl-lg-4 = 3 × `.entry3
d-block.d-sm-flex` (figure order-2 flex 150px rounded + text order-1 mr-4:
  chip, h2 18px 700, date, short excerpt) → Category columns ×4
  (`.site-section`, col-lg-4 ×4: **Sports / Travel / Lifestyle / Nature**):
  `.section-heading.mb-5.d-flex` (h2 + `ml-auto` view-all-btn "View All":
  bg #d9d9d9, black, 12px 700, padding 5px 15px, radius 4px, hover bg
  #bfbfbf) + `.entry2.mb-5` (large card: image, chip, h2 24px, meta,
  excerpt) + 3 × `.entry4 d-block.d-sm-flex` (figure flex 100px, text: chip,
  h2 16px 700, date) → Footer (`.site-footer`, bg #333333, padding 4em 0 /
  5em desktop): About Us (col-md-4, h3 footer-heading 16px white + p
  #737373) + Quick Menu (col-md-3 ml-auto, two link columns: About Us /
  Advertise / Careers / Subscribes + Travel / Lifestyle / Sports / Nature;
  links #999999, hover white, li mb 10px) + Subscribe (col-md-4, form
  `.form-footer-subscribe`: `form-group d-flex` = text input + submit
  `.btn.btn-primary.text-white` "Subscribe") + Connect With Us (5 icon
  links: facebook, twitter, instagram, rss, envelope) + copyright bar
  (border-top rgba(255,255,255,0.1)): "Copyright &copy; <year> All rights
  reserved | This template is made with <heart> by Colorlib" → recreation
  credits Trailhead.
- **Design tokens extracted from the live preview CSS (`css/style.css`):**
  - Brand **blue `#2f89fc`** (13 uses) — active nav link, nav hover,
    dropdown top border (2px), tag-chip hover bg; darker hover **`#046df4`**.
  - Ink **`#000`** — nav links (weight 700), headings, post titles, logo,
    social-icon circle backgrounds; dark **`#25262a`** (dropdown hover text).
  - Body text default gray (`#808080`, weight 300, lh 1.7); entry body
    **`#666666`**; post-meta dates/byline **`#b3b3b3`**; dropdown links
    `#343a40`.
  - Light surfaces: white page + navbar; **`#edf0f5`** / **`#f4f5f9`**
    (dropdown hover bg, light blocks); **`#d9d9d9`** view-all-btn bg (hover
    **`#bfbfbf`**); **`#f7f7f7`** search input bg (search form exists on
    other pages, not home).
  - Category chip colors (Bootstrap utilities in the markup): Nature
    **bg-success `#28a745`**, Travel **bg-danger `#dc3545`**, Lifestyle
    **bg-warning `#ffc107`**, Sports **bg-primary `#007bff`** — all
    `text-white`, uppercase, letter-spacing .2em, weight 700, font-size
    .6rem, padding 2px 10px, border-radius 4px.
  - Footer: bg **`#333333`**; headings white; links **`#999999`** (hover
    white); paragraph text **`#737373`**; top border rgba(255,255,255,0.1).
  - Fonts: **"Muli", sans-serif** everywhere (body 300; nav/headings 700;
    logo 900). Playfair Display loaded but unused.
  - Buttons: `.btn { border-radius: 0 }` (square); footer subscribe submit
    = Bootstrap `.btn-primary` (blue `#007bff` — keep brand-consistent
    `#2f89fc` in the recreation); view-all-btn: radius 4px, 12px 700,
    padding 5px 15px.
  - Radii: 4px on chips, hentry cards, view-all, rounded images; 50%
    circles: social icons (30px, bg `#000` white glyphs, hover bg
    `#666666`), author avatars (30px), hero slider arrows (50px, white 25px
    glyphs, dark translucent bg, hover bg black).
  - Hero: `.site-cover` padding 7em 0; overlay rgba(0,0,0,0.6); post-entry
    h2 white 3rem (desktop) / 2rem; post-meta white 13px; author-figure
    30px circular. Owl arrows: 50×50 circles, absolute left/right 10px,
    top 50%.
  - Spacing: `.site-section` padding 2.5em 0 (5em desktop); `.site-footer`
    padding 4em 0 (5em desktop); `.entry2 h2` 24px mb 30px; `.entry3 h2`
    18px lh 1.5; `.entry4 h2` 16px lh 1.5; `.section-heading h2` weight 700
    black; `.hentry` radius 4px overflow hidden.
- **Visual design (from screenshot):** clean white magazine/blog layout —
  bold black "Hikers" wordmark top-left, three small black circular social
  icons top-right, centered nav row under a border-top; full-width hero
  slider with dark overlay, small green NATURE chip, large white sans-serif
  headline, tiny circular author avatar + byline, circular prev/next arrows
  at the sides; below the hero a bordered strip of three small thumbnail
  post cards with colored chips (TRAVEL red, LIFESTYLE orange/amber, NATURE
  green); then a "retro" photo-card section (one tall card + one medium +
  two small, titles bottom-left over gradient); "Popular Posts" heading with
  one large featured card and three compact rows; four category columns
  (Sports, Travel, Lifestyle, Nature) each with a grey View All pill; dark
  grey (#333) footer with white headings, two quick-menu link columns, a
  subscribe input + blue button, and five social icons. Demo copy uses the
  placeholder title "The 20 Biggest Fintech Companies In America 2019" for
  every post and author "Carrol Atkinson" — paraphrase into
  hiking/outdoor-themed post titles in the recreation.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/trailhead-<n>/<w>/<h>`); icons → lucide-react (social
  brand icons as inline SVG per repo rule); Muli via Google Fonts `<link>`;
  no assets copied. Copy paraphrased but same content kinds (post titles,
  category chips, bylines, dates, excerpts, footer blocks).

Trailhead lives in `apps/trailhead` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a white header with a bold logo, social icon circles,
a centered navigation bar with a dropdown, and a mobile menu toggle.

#### Scenario: Logo and social icons

- **GIVEN** the Trailhead page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL show a bold black "Trailhead" logo (weight 900,
  ~40px) on the left
- **AND** the header SHALL show at least 3 circular black social icon buttons
  (Facebook, Twitter, Instagram) on the right, turning grey on hover

#### Scenario: Navigation bar

- **GIVEN** the Trailhead page is rendered on a wide viewport
- **WHEN** the header is displayed
- **THEN** a centered navigation bar SHALL appear below the logo row,
  separated by a top border
- **AND** the nav SHALL show links Homepage (active), Lifestyle, Inspiration,
  Technology, and Latest in bold black text
- **AND** the Inspiration link SHALL open a dropdown with sub-links (Architect,
  Minimal, Interior, Furniture) bordered with a 2px brand-blue top edge
- **AND** links SHALL turn brand blue `#2f89fc` on hover and for the active
  item

#### Scenario: Mobile menu toggle

- **GIVEN** the Trailhead page is rendered on a narrow viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-in mobile menu SHALL open with a close control, the nav
  links, and the social icons
- **AND** the menu SHALL close when the close control is activated

### Requirement: Hero slider

The system SHALL render a full-width hero carousel with overlaid post content
and circular prev/next controls.

#### Scenario: Hero slide content

- **GIVEN** the Trailhead page is rendered
- **WHEN** the hero section is displayed
- **THEN** each slide SHALL show a large background photo with a dark overlay
  (rgba(0,0,0,0.6))
- **AND** each slide SHALL show a category chip (e.g. green "Nature"), a large
  white post title (3rem on desktop), and a byline with a circular author
  avatar, "By <Author>", and a date
- **AND** the slider SHALL cycle through at least 2 slides with accessible
  prev/next controls (50px circular buttons at the left/right edges)

### Requirement: Featured strip

The system SHALL render a bordered strip of three small featured post links.

#### Scenario: Featured entries

- **GIVEN** the Trailhead page is rendered
- **WHEN** the featured strip below the hero is displayed
- **THEN** the strip SHALL show 3 columns, each a small post link with a
  rounded thumbnail (~110px), a colored category chip (Travel red, Lifestyle
  amber, Nature green), and a short bold title
- **AND** the thumbnail SHALL fade to half opacity on hover

### Requirement: Retro layout

The system SHALL render a photo-card section with one tall card, one medium
card, and two small cards, each with overlaid text.

#### Scenario: Retro photo cards

- **GIVEN** the Trailhead page is rendered
- **WHEN** the retro layout section is displayed
- **THEN** the left column SHALL show one tall photo card (400px) with a
  gradient overlay, a category chip, and bottom-left white title (26px) with
  a date
- **AND** the right column SHALL show one medium photo card (300px) and two
  smaller cards side by side, each with a chip, a white title (18px), and a
  date
- **AND** the date text SHALL be semi-transparent white (rgba(255,255,255,0.5))

### Requirement: Popular Posts

The system SHALL render a "Popular Posts" section with one large featured post
and three compact post rows.

#### Scenario: Featured post and rows

- **GIVEN** the Trailhead page is rendered
- **WHEN** the Popular Posts section is displayed
- **THEN** the section SHALL show the heading "Popular Posts" in bold black
- **AND** the left column SHALL show a large post card (rounded image, chip,
  24px bold title, author byline with avatar, date, and excerpt paragraph)
- **AND** the right column SHALL show 3 compact rows, each with a 150px
  rounded thumbnail on the right, and on the left a chip, an 18px bold title,
  a date, and a short excerpt
- **AND** the row thumbnails SHALL fade to half opacity on hover

### Requirement: Category columns

The system SHALL render four category columns (Sports, Travel, Lifestyle,
Nature), each with a heading, a View All button, one large post, and three
small posts.

#### Scenario: Category column content

- **GIVEN** the Trailhead page is rendered
- **WHEN** the category columns section is displayed
- **THEN** the section SHALL show 4 equal columns headed Sports, Travel,
  Lifestyle, and Nature in bold black
- **AND** each column SHALL show a grey "View All" pill button (bg `#d9d9d9`,
  12px bold, radius 4px) aligned right of the heading
- **AND** each column SHALL show one large post card (image, category chip,
  24px title, byline, excerpt) followed by 3 small post rows (100px
  thumbnail, chip, 16px bold title, date)
- **AND** the category chips SHALL be colored per column: Sports blue
  `#007bff`, Travel red `#dc3545`, Lifestyle amber `#ffc107`, Nature green
  `#28a745`

### Requirement: Footer

The system SHALL render a dark footer with About Us text, Quick Menu links, a
Subscribe form, social links, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Trailhead page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark background (`#333333`) with white
  headings
- **AND** the About Us block SHALL show a short description paragraph
- **AND** the Quick Menu block SHALL show two link columns (About Us,
  Advertise, Careers, Subscribes and Travel, Lifestyle, Sports, Nature)
- **AND** the Subscribe block SHALL show an email/text input and a blue
  "Subscribe" submit button
- **AND** the Connect With Us block SHALL show 5 social icon links (Facebook,
  Twitter, Instagram, RSS, Email)
- **AND** submitting the Subscribe form SHALL NOT navigate away (prevented
  default) and SHALL show a confirmation message

#### Scenario: Copyright bar

- **GIVEN** the Trailhead page is rendered
- **WHEN** the footer bottom is displayed
- **THEN** a copyright bar SHALL show the current year, "All rights reserved",
  and a credit line for the template author

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `apps/trailhead` created from a blog/landing app pattern, package renamed
      to `@free-react-templates/trailhead`
- [ ] TDD: tests written first (red), then implementation (green)
- [ ] 100% coverage lines/functions/branches/statements (`npm run
    test:coverage -- --project apps/trailhead` or `scripts/verify-app.sh
    trailhead`)
- [ ] Brand blue `#2f89fc` + ink `#000` + muted `#b3b3b3` in `@theme`; Muli
      via Google Fonts link
- [ ] Section order matches the original 1:1 (see Design reference)
- [ ] Hero slider implemented with slide switching and accessible controls
      (aria-labels); dark overlay + chip + white title + avatar byline
- [ ] Category chips colored per category (Sports `#007bff`, Travel
      `#dc3545`, Lifestyle `#ffc107`, Nature `#28a745`), uppercase,
      letter-spaced, radius 4px
- [ ] Retro layout cards with gradient overlays and bottom-left titles;
      hentry radius 4px
- [ ] Radii: 4px on chips/cards; 50% circles only for social icons, author
      avatars, and slider arrows
- [ ] Footer `#333333` with white headings, two quick-menu columns, subscribe
      form (prevented default + confirmation), 5 social icons
- [ ] Placeholder images via `picsum.photos/seed/trailhead-<n>/<w>/<h>`; no
      assets copied; social brand icons as inline SVG
- [ ] PR description: source template, preview URL, design tokens, what
      differs
- [ ] After merge: TEMPLATES.md Hikers (line 264) `[~]` → `[x]` + Surge URL
      (`free-react-templates-trailhead.surge.sh`) + homepage + `npm run
    readme:status`
