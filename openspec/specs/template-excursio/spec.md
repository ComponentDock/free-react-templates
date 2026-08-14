# Template: Excursio (Travel / Tourism)

## Purpose

Excursio is a single-page travel & tourism website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tourbi" design (source:
https://colorlib.com/wp/template/tourbi/), built under a DIFFERENT name
(**Excursio** — evoking "excursion"/tour travel; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bright, cheerful travel agency landing page on a
**sunny yellow (`#ffcc00`) + sky blue (`#00c0ff`) + white** palette: a
full-viewport sky-blue hero (photo illustration of clouds + a red/yellow
hot air balloon) under a transparent navbar (white links, yellow "Hot Line
052" pill button, cursive yellow logo), a script-font sub-headline
("Best way to tour", Kaushan Script) over a big white bold headline with a
marker-style highlight streak, a **yellow search bar** that overlaps the
hero's bottom edge (Country + City dropdowns + a blue square "Search"
button), three white "Donation" info cards with script "Read More" links, an
"Amazing Tour" feature split (balloon photo + three white mini-cards London
35 Places / Kashmir 75 Places / Chaina 85 Places), a "Most Popular Place"
section of three white shadowed cards (Life of Egeft / Biking in Norway /
Tour of iceland — each with a script "Book Now" link), a "place details"
split with a photo + play overlay and a yellow "View All" pill, a "Tour
Package" carousel of image-top cards (star ratings + script "Join Now"
links) with the section heading beside a balloon card and its own "Join
Now", a bright-blue newsletter CTA band (jagged brush bottom edge, white
input + yellow "SUBSCRIBE NOW"), a white blog section (three image-top
cards with calendar/heart/comment meta), and a white footer (About Agency /
Navigation Links / Newsletter with paper-plane submit / Instafeed image
grid) with a decorative overlay illustration, an `#cad7dc` divider, gray
copyright text, and social icons. Excursio recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied; images are deterministic picsum
placeholders, icons come from `lucide-react`).

> NAMING NOTE: the ColorLib source name "Tourbi" is FORBIDDEN as the app
> name. **Excursio** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below. The `tourbi` slug appears in TEMPLATES.md at lines 517, 1207 and
> 2999 (three `- [ ]` duplicate rows — mark ALL of them `[x]` at ship time).

> PREVIEW URL NOTE: `https://preview.colorlib.com/theme/tourbi/` is
> REACHABLE (HTTP 200, 34.9KB HTML, `<title>travel</title>`). Stylesheets:
> `css/style.css` (171KB — the custom token source), `css/bootstrap.min.css`
> (Bootstrap 4), `css/all.css` (Font Awesome), `css/flaticon.css`,
> `css/themify-icons.css` (icon fonts), `css/nice-select.css`,
> `css/slick.css` + `css/owl.carousel.min.css` (sliders),
> `css/magnific-popup.css`, `css/animate.css`. JS: jQuery 1.12.1 + popper +
> bootstrap + slick (tour-package carousel) + owl.carousel + nice-select
> (dropdowns) + waypoints + counterup + magnific-popup (place-details video
> lightbox) + ajaxchimp (footer newsletter) + `js/custom.js`. The page
> renders correctly without JS except the carousels (which stack) and the
> custom dropdowns — the React implementation replaces carousels with
> scrollable rows/static grids and the dropdowns with native `<select>`s.

> SCREENSHOT NOTE (consistent with live): the TEMPLATES.md screenshot
> (`tourbi-free-template.jpg`, 1200×946, browser-verified 2026-08-14)
> shows the same design above the fold: sky-blue hero with clouds and a
> red/yellow hot air balloon, transparent navbar with white links and a
> yellow "Hot Line 052" pill, cursive "Best way to tour" script line,
> white bold headline, the yellow search bar overlapping the hero bottom
> (Country/City selects + blue "Search" button), the three white donation
> cards, and the blue/white balloon art. The live DOM is authoritative for
> the sections below the fold.

## Design reference (replication findings)

- **Original:** ColorLib "Tourbi". Listed in TEMPLATES.md under **Tourbi**
  (line 517, Bootstrap section). Free travel & tourism website template.
  The `tourbi` slug appears THREE times in TEMPLATES.md (lines 517, 1207,
  2999 — all `- [ ]`; mark all three at ship time).
- **Live preview DOM — REACHABLE (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/tourbi/` (HTTP 200, 34.9KB HTML,
  `<title>travel</title>`). Structure, copy, and tokens below are from the
  live DOM + `style.css` + computed styles, cross-checked against the
  screenshot (which matches above the fold).
- **Visual design (live browser render, verified 2026-08-14):** bright,
  cheerful travel landing page. Sky-blue hero (illustration with clouds +
  hot air balloon), transparent navbar, yellow `#ffcc00` accents (search
  bar, pill buttons, subscribe button, script-link hovers) and blue
  `#00c0ff` accents (Search button, newsletter band, banner art, social
  hovers). White page background, white cards with soft shadows. Script
  typography (Kaushan Script) for accent lines and inline links; Poppins
  for headings/buttons/nav; Roboto for body.
- **Section order (1:1 from live DOM):**
  1. **Navbar** — `header.main_menu.home_menu` (absolute over hero,
     transparent): `a.navbar-brand` with `img/logo.png` (cursive logo
     text, yellow in the reference art); nav links **Home About Packages
     Blog Pages Contact** (white, 15px, padding `36px 23px`; Blog and
     Pages have dropdowns: Blog → Blog / Single Blog; Pages → Elements);
     right side `a.btn_1.d-none.d-lg-block` **Hot Line 052** (yellow pill,
     desktop-only). Mobile: hamburger → slide-in menu (Bootstrap
     collapse).
  2. **Banner hero** — `section.banner_part` (height 1050px; bg image
     `img/banner_bg.png` — sky-blue `#00c0ff` illustration with clouds and
     a red/yellow hot air balloon; CSS fallback `#ffcc00`; decorative
     `img/banner_overlay.svg` wave across the bottom via `:after`):
     - `h5` **BEST WAY TO TOUR** — Kaushan Script, 36px, uppercase,
       white, `margin-bottom: 34px`
     - `h1` **Lorem Ipsum Dolor Amet Consec** — 66px, weight 700,
       line-height 75px, white, capitalize, with a marker-style highlight
       streak behind the text (`h1:after` — `img/heading_bg.png`, 50%
       width, positioned `bottom: -86px`)
     - banner text centered, `padding-top: 235px`
  3. **Search bar + donation cards** — `section.search_your_country`
     (white section, `padding: 165px 0 100px`, `margin-top: -254px` so
     the inner bar overlaps the banner):
     - `.search_form` — **solid yellow `#ffcc00` bar**, padding
       `80px 95px`, absolute `top: -265px`, white text. Contains a
       `form-row`: left `col-lg-9` `.search_form_iner` (flex) with TWO
       square 60px-tall dropdowns **Country** / **City** (options
       "One/Two/Three" in the reference — use real country/city options),
       gray `#c3c3c3` text, 1px `#c3c3c3` divider line between them,
       `border-radius: 0`; right `col-lg-3` `a.search_btn` **search** —
       blue `#00c0ff`, padding `19px 60px`, white, uppercase, full-width,
       square.
     - Below (3 × `col-lg-4` `.single_donation_item`): **donation** cards
       — `img/icon/money_bag.svg` icon (recreate with a lucide icon, e.g.
       HandCoins/DollarSign), `h4` **donation**, lorem paragraph, script
       link **read more** (`.read_btn` — Kaushan Script, 17px, `#000`,
       `margin-top: 30px`, hover yellow). White bg, NO card box/shadow.
  4. **Feature — "Amazing tour"** — `section.feature_part` (section title
     pattern: `img/section_tittle_img.png` decorative icon + `h2`
     **Amazing tour** 36px `#14182d` weight 500): split layout — left:
     about photo (`img/about_img.png`), right (or vice versa per
     reference): three mini cards (`.single_feature`-style): icon +
     title **london / Kashmir / chaina** (reference spelling preserved,
     `#14182d`) + count **35 Places / 75 Places / 85 Places**. White cards
     with soft shadow, rounded corners.
  5. **Most Popular place** — `section.popular_place` (white): centered
     section title **Most Popular place** + reference subtext; 3 ×
     `.single_popular_place` white cards (padding `60px 25px 56px`,
     centered, `border-radius: 0`, box-shadow `0px 3px 81px 0px
rgba(216,216,216,0.45)`): image (photo), `h4` **Life of Egeft** /
     **Biking in Norway** / **Tour of iceland**, lorem paragraph, script
     link **book now** (Kaushan Script, `#000`).
  6. **Place details** — `section.place_details` (split, two columns):
     left `.place_detauls_text` — section title **Amazing tour** (icon +
     h2), lorem paragraph, a `span` lorem line, and a photo
     (`img/plase_details_1.png`) below the text; right `.place_details_img`
     — full-width photo (`img/plase_details_2.png`, `width: 100%`) with a
     circular play-button overlay (magnific-popup video lightbox in the
     reference; render as a decorative play button, non-functional or
     `#` link). Below: centered `a` **view all** (`.view_all_btn` — yellow
     `#ffcc00` pill, `btn_1` styling: Poppins 500, `padding: 13px 40px`,
     radius 50px, black text).
  7. **Tour Package** — `section.tour_package` (heading row: section title
     **tour package** on the left + a `.single_tour_package`-style card
     with balloon image + script **join now** on the right of the heading);
     below: Slick carousel of **6** `.single_tour_package` cards (3 unique
     images × 2 loop): `img` top (`img/tour_plan_1.png` /
     `img/tour_plan_2.png`), `.tour_pack_content` (`#fafafa`, padding
     `45px 48px`): `h4` **Sawpalo, Brasil** (24px, capitalize), lorem
     paragraph, 5 star icons (Font Awesome `fa-star` — use lucide Star),
     script link **join now** (`.btn1` — Kaushan Script, 17px, `#000`).
     Carousel arrows (Next/Prev) — render as a horizontally scrollable
     row with all 6 cards instead.
  8. **Newsletter CTA** — `section.cta_part` (bg image `img/cta_bg.png` —
     bright blue `#00c0ff`, 1920×743, with a jagged/brush bottom edge):
     centered `.cta_text`: `h5` **Join Our Newsletter** (Kaushan Script,
     20px, white, `margin-bottom: 35px`), `h2` **Subscribe to get Updated
     with new offers** (white), `.input-group`: white text input
     (placeholder **Enter email address**) + `a.subs_btn` **subscribe
     now** — yellow `#ffcc00`, padding `19px 29px`, uppercase, black text,
     `margin-left: 10px`.
  9. **Blog** — `section.blog_part` (white): section title **our blog** +
     subtext; 3 × `.single_blog_part` cards: `img` top
     (`img/blog/blog_1..3.png`), `.blog_text`: `h2` **Luxerious Car
     Rental**, lorem paragraph, meta `ul` — calendar icon + **13th Dec**,
     heart icon + **15**, comment icon + **10** (themify/Font Awesome
     icons — use lucide Calendar/Heart/MessageCircle).
  10. **Footer** — `footer.footer_part` (white bg; decorative
      `img/overlay_2.png` absolute at top — dark/red brush marks on white,
      `display: none` ≤991px): 4 × `col-sm-6 col-lg-3`
      `.single_footer_part`:
      - **About Agency** — lorem paragraph
      - **Navigation Links** — links **Home Features Services Portfolio
        team Pricing Blog Contact**
      - **Newsletter** — blurb + form: email input (placeholder **Email
        Address**) + paper-plane submit button (`.email_icon` —
        `.button-contactForm`)
      - **Instafeed** — 8-image grid (`img/footer_img/footer_1..8.png`,
        links `#`)
      - `<hr>` divider `background-color: #cad7dc` (margin 50px top /
        25px bottom)
      - copyright row: `p` **Copyright © [year] All rights reserved |
        This template is made with [heart] by Colorlib** — text `#888`,
        link/span `#00c0ff`; the Colorlib attribution is REPLACED by the
        Component Dock link per repo convention; social icons list
        (facebook/twitter/etc., hover `#00c0ff`).
- **JS behaviors (original):** Slick tour-package carousel (6 cards, 3
  unique × 2), nice-select custom dropdowns, counterup counters (not
  visibly used), magnific-popup video lightbox on the place-details play
  button, ajaxchimp footer newsletter, Bootstrap collapse mobile menu.
  The React recreation: tour packages as a horizontally scrollable row
  (all 6 cards reachable), native `<select>`s, play button as a decorative
  link, newsletter form with success state per repo patterns, mobile menu
  per repo patterns.
- **Design tokens (from `style.css` + computed styles):**

  | Token                 | Value                                                                                                                                                                                               | Usage                                                                                                      |
  | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
  | **Brand yellow**      | `#ffcc00` (sunny yellow-gold)                                                                                                                                                                       | search bar bg, `btn_1`/pill buttons, subs_btn, script-link hovers, banner CSS fallback                     |
  | **Brand blue**        | `#00c0ff` (sky blue)                                                                                                                                                                                | Search button, newsletter band (`cta_bg.png`), banner art (`banner_bg.png`), social hovers, copyright span |
  | Body font             | **Roboto** (300–700)                                                                                                                                                                                | `body`                                                                                                     |
  | Heading/button font   | **Poppins** (300–700)                                                                                                                                                                               | nav, buttons, section headings, card titles                                                                |
  | Script accent font    | **Kaushan Script** (cursive)                                                                                                                                                                        | banner h5, cta h5, "read more"/"book now"/"join now" inline links                                          |
  | Section headings      | h2 36px, `#14182d`, weight 500, with decorative `section_tittle_img.png` icon above (recreate with a small lucide icon or SVG shape)                                                                | all section titles                                                                                         |
  | Banner                | bg image (blue `#00c0ff` sky art) + `#ffcc00` fallback; height 1050px; h5 Kaushan Script 36px uppercase white; h1 66px weight 700 white capitalize; marker streak behind h1; wave overlay at bottom | `banner_part`                                                                                              |
  | Search bar            | bg `#ffcc00`, padding `80px 95px`, overlaps hero bottom (`top: -265px`); selects 60px tall square `#c3c3c3` text with 1px divider; Search button `#00c0ff` padding `19px 60px` white square         | `.search_form`                                                                                             |
  | Pill button (`btn_1`) | padding `13px 40px`, `border-radius: 50px`, Poppins 500 15px, bg `#ffcc00`, text `#000`; hover: transparent + 2px `#ffcc00` border                                                                  | Hot Line 052, View All                                                                                     |
  | Script inline links   | Kaushan Script, 17px, `#000`, `margin-top: 30px`, hover `#ffcc00`                                                                                                                                   | read more / book now / join now                                                                            |
  | Popular place cards   | white, padding `60px 25px 56px`, centered, `border-radius: 0`, shadow `0px 3px 81px rgba(216,216,216,.45)`                                                                                          | `.single_popular_place`                                                                                    |
  | Tour package card     | img top + `.tour_pack_content` bg `#fafafa`, padding `45px 48px`; h4 24px capitalize; 5 star icons; script Join Now                                                                                 | `.single_tour_package`                                                                                     |
  | Newsletter CTA        | bg image `#00c0ff` band with jagged bottom edge; h5 Kaushan Script white 20px; white input; subs_btn `#ffcc00` padding `19px 29px` uppercase black                                                  | `cta_part`                                                                                                 |
  | Blog cards            | img top + `.blog_text`; h2 title; meta icons (calendar/heart/comments) with date/numbers                                                                                                            | `.single_blog_part`                                                                                        |
  | Footer                | white bg; decorative overlay img; hr `#cad7dc` (margin 50/25px); copyright text `#888`; spans/links `#00c0ff`; social hover `#00c0ff`                                                               | `footer_part`                                                                                              |
  | Section padding       | `.section_padding` = 180px 0 (desktop), 100px 0 (≤1200px), ~70px 0 (mobile)                                                                                                                         | place_details, tour_package, cta_part, blog_part                                                           |

- **Icons (lucide-react equivalents):** money bag (donation cards —
  HandCoins or DollarSign), star (tour package ratings), calendar/heart/
  message-circle (blog meta), paper-plane (footer newsletter submit),
  play (place-details video button), facebook/twitter/instagram/etc.
  (footer socials — inline SVG brand paths, NOT lucide, which dropped
  brand icons), map-pin/world for the search bar. `section_tittle_img.png`
  decorative icon under headings — recreate as a small inline SVG or
  lucide icon (e.g. Plane/Compass) per repo pattern.
- **UPPERCASE:** banner h5 and the Search/SUBSCRIBE NOW buttons are
  uppercase via CSS; section titles and card titles are NOT uppercase.

## Requirements

### Requirement: Page structure

The system SHALL render the Excursio page as a single scrolling page with
the reference section order: navbar, banner hero, search bar + donation
cards, amazing-tour features, popular places, place details, tour packages,
newsletter CTA, blog, footer.

#### Scenario: Default render

- **GIVEN** the Excursio page is rendered
- **WHEN** the user views the page
- **THEN** the sections SHALL render in order: Navbar → Banner hero →
  Search bar + donation cards → Amazing Tour features → Most Popular Place
  → Place Details → Tour Package → Newsletter CTA → Blog → Footer
- **AND** the page SHALL use the brand palette: yellow `#ffcc00`, sky blue
  `#00c0ff`, white backgrounds, `#14182d` headings, dark `#000` script
  links

#### Scenario: Content column

- **GIVEN** the page is displayed at desktop width
- **WHEN** the user inspects the layout
- **THEN** section content SHALL sit in the Bootstrap-style 12-column grid
  with the reference column spans (e.g. `col-lg-9` search fields +
  `col-lg-3` Search button, 3× `col-lg-4` cards, 4× `col-lg-3` footer
  columns)

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand
logo, the reference nav links, and the Hot Line pill.

#### Scenario: Default state

- **GIVEN** the page is at the top
- **WHEN** the user views the navbar
- **THEN** the navbar SHALL be transparent over the hero with the brand
  logo **Excursio** (cursive script style) on the left
- **AND** nav links SHALL read **Home, About, Packages, Blog, Pages,
  Contact** in white (15px)
- **AND** a yellow pill button **Hot Line 052** SHALL render on the right,
  hidden below desktop width

#### Scenario: Dropdowns

- **GIVEN** the navbar is displayed
- **WHEN** the user activates the **Blog** or **Pages** item
- **THEN** a dropdown SHALL reveal **Blog / Single Blog** (Blog) and
  **Elements** (Pages)
- **AND** the dropdowns SHALL be keyboard-accessible (aria-expanded,
  focusable items)

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a viewport ≤991px
- **WHEN** the user opens the menu
- **THEN** a hamburger button SHALL toggle the mobile menu with the same
  nav links
- **AND** the menu SHALL be accessible (aria-expanded, focusable links)
  and close on link selection

### Requirement: Banner hero

The system SHALL render the full-height sky-blue hero with the script
sub-headline, bold headline, and decorative highlight.

#### Scenario: Hero content

- **GIVEN** the Excursio hero is displayed
- **WHEN** the user views it
- **THEN** a full-viewport (1050px desktop) hero SHALL render with a
  sky-blue background (photo-style image or gradient) featuring clouds and
  a hot air balloon
- **AND** the sub-headline **Best Way To Tour** SHALL render in Kaushan
  Script, uppercase, white
- **AND** the main headline **Lorem Ipsum Dolor Amet Consec** SHALL render
  in white, bold, ~66px desktop (responsive scale-down on mobile), with a
  decorative highlight streak behind the text
- **AND** a wave/curve decorative edge SHALL separate the hero from the
  section below

### Requirement: Search bar + donation cards

The system SHALL render the yellow search bar overlapping the hero's bottom
edge, and the three donation info cards below it.

#### Scenario: Search bar

- **GIVEN** the search section is displayed
- **WHEN** the user views it
- **THEN** a solid yellow `#ffcc00` bar SHALL overlap the hero's bottom
  edge
- **AND** the bar SHALL contain two square dropdowns **Country** and
  **City** (60px tall, gray text, divider between) and a blue `#00c0ff`
  square **Search** button
- **AND** the dropdowns SHALL offer real travel options (countries /
  cities) — the reference's "One/Two/Three" placeholders may be replaced
  with sensible options

#### Scenario: Donation cards

- **GIVEN** the donation cards are displayed
- **WHEN** the user views them
- **THEN** three cards SHALL render, each with an icon (money-bag
  equivalent), heading **Donation**, a lorem paragraph, and a script-font
  **Read More** link
- **AND** the cards SHALL sit directly on the white background with no
  card box or shadow

### Requirement: Amazing Tour features

The system SHALL render the split feature section with the about photo and
three destination mini-cards.

#### Scenario: Feature section

- **GIVEN** the Amazing Tour section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL show the section title **Amazing Tour** with
  the decorative icon above it
- **AND** a photo (hot air balloon / travel subject) SHALL render in the
  split layout
- **AND** three white mini-cards SHALL render with titles **London**,
  **Kashmir**, **Chaina** (reference spelling preserved) and counts
  **35 Places / 75 Places / 85 Places**

### Requirement: Most Popular Place

The system SHALL render three white shadowed destination cards with Book
Now links.

#### Scenario: Popular place cards

- **GIVEN** the Most Popular Place section is displayed
- **WHEN** the user views a card
- **THEN** the section SHALL show the centered title **Most Popular Place**
  with the reference subtext
- **AND** three white cards SHALL render (centered, soft shadow,
  square corners) with a destination photo, titles **Life of Egeft** /
  **Biking in Norway** / **Tour of iceland** (reference spelling
  preserved), a lorem paragraph, and a script-font **Book Now** link

### Requirement: Place Details

The system SHALL render the two-column split with the photo + play button
and the View All pill.

#### Scenario: Place details layout

- **GIVEN** the Place Details section is displayed
- **WHEN** the user views it
- **THEN** the left column SHALL contain the section title **Amazing Tour**
  with decorative icon, a lorem paragraph, a lorem span line, and a photo
- **AND** the right column SHALL contain a full-width photo with a
  circular play-button overlay (decorative link)
- **AND** a yellow pill button **View All** SHALL render centered below
  the split

### Requirement: Tour Package

The system SHALL render the tour-package heading row and the six package
cards with ratings and Join Now links.

#### Scenario: Heading row

- **GIVEN** the Tour Package section is displayed
- **WHEN** the user views the heading row
- **THEN** the section title **Tour Package** SHALL render with the
  decorative icon, and a card with a balloon image + script **Join Now**
  link SHALL sit beside the heading (reference layout)

#### Scenario: Package cards

- **GIVEN** the package cards are displayed
- **WHEN** the user views a card
- **THEN** six cards SHALL render (3 unique designs repeated once to
  mirror the reference carousel loop), each with: image on top, `#fafafa`
  content panel, title **Sawpalo, Brasil**, a lorem paragraph, five star
  icons, and a script-font **Join Now** link
- **AND** the cards SHALL be reachable at all viewports — as a
  horizontally scrollable row (carousel replacement)

### Requirement: Newsletter CTA

The system SHALL render the bright-blue newsletter band with the input and
yellow subscribe button.

#### Scenario: CTA band

- **GIVEN** the newsletter section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL have a bright-blue `#00c0ff` background with
  a jagged/brush decorative bottom edge
- **AND** the script heading **Join Our Newsletter** SHALL render in
  Kaushan Script, white
- **AND** the main heading **Subscribe to get Updated with new offers**
  SHALL render in white
- **AND** a white email input (placeholder **Enter email address**) SHALL
  render beside a yellow **Subscribe Now** button (uppercase, black text)

#### Scenario: Subscribe interaction

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success state (per repo patterns) without
  a page reload

### Requirement: Blog

The system SHALL render the three blog cards with image, title, and
meta row.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the user views a card
- **THEN** the section SHALL show the title **Our Blog** with the
  decorative icon and reference subtext
- **AND** three cards SHALL render, each with: image on top, title
  **Luxerious Car Rental**, a lorem paragraph, and a meta row with
  calendar icon + **13th Dec**, heart icon + **15**, comment icon + **10**

### Requirement: Footer

The system SHALL render the four-column footer with newsletter form,
Instafeed grid, divider, and the Component Dock attribution.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the user views it
- **THEN** four columns SHALL render: **About Agency** (lorem paragraph),
  **Navigation Links** (**Home, Features, Services, Portfolio, team,
  Pricing, Blog, Contact**), **Newsletter** (blurb + email input with
  paper-plane submit button), **Instafeed** (8-image grid of `#` links)
- **AND** a light divider (`#cad7dc`-style `<hr>`) SHALL separate the
  columns from the bottom bar

#### Scenario: Copyright / attribution

- **GIVEN** the bottom of the footer
- **WHEN** the user views the copyright bar
- **THEN** the copyright line SHALL render with gray text (e.g. `#888`)
  and link to `https://www.componentdock.com/` branded as "Component Dock"
  (repo convention — replaces the reference's Colorlib attribution)
- **AND** social icons SHALL render in the bar (hover `#00c0ff`)

### Requirement: Responsive behavior

The system SHALL keep all sections usable at every viewport width.

#### Scenario: Mobile layout

- **GIVEN** the page is rendered at a viewport ≤991px
- **WHEN** the page is displayed
- **THEN** the hero SHALL scale down (height ~700px per reference media
  query) and the headline SHALL scale responsively
- **AND** the search bar SHALL become full-width with stacked fields and a
  full-width Search button
- **AND** the feature, popular-place, tour-package, blog, and footer
  columns SHALL stack vertically without horizontal overflow
- **AND** the Hot Line pill SHALL be hidden (desktop-only per reference)
- **AND** the tour-package cards SHALL remain reachable (scrollable row)

### Requirement: Accessibility

The system SHALL apply repo a11y conventions: semantic landmarks, labeled
form fields, `aria-expanded` on menu toggles, focus-visible rings on all
interactive elements, and alt text on images.

#### Scenario: Keyboard access

- **GIVEN** the page is rendered
- **WHEN** the user navigates with a keyboard
- **THEN** every interactive element SHALL be reachable and show a visible
  focus indicator
- **AND** form fields SHALL have accessible labels (visually-hidden labels
  matching the reference placeholder text are acceptable)
- **AND** the mobile menu toggle and nav dropdowns SHALL expose
  `aria-expanded` state

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-excursio`
- [ ] `scripts/verify-app.sh excursio` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section order 1:1 with reference: Navbar (transparent, white links,
      Hot Line 052 pill, Blog/Pages dropdowns) → Banner hero (sky-blue
      balloon art, Kaushan Script sub-headline, bold white headline +
      highlight streak, wave edge) → Yellow search bar (Country/City
      selects + blue Search) + 3 donation cards → Amazing Tour split
      (photo + London/Kashmir/Chaina mini-cards) → Most Popular Place (3
      white shadowed cards + Book Now) → Place Details (text + photo +
      play overlay + View All pill) → Tour Package (heading card + 6
      scrollable package cards with stars + Join Now) → Newsletter CTA
      (blue band, jagged edge, Subscribe Now) → Blog (3 cards with
      meta) → Footer (4 columns, hr divider, copyright + Component Dock,
      socials)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: yellow
      `#ffcc00`, blue `#00c0ff`, heading ink `#14182d`, card content
      `#fafafa`, divider `#cad7dc`, muted text `#888`/`#c3c3c3`
- [ ] Fonts via Google Fonts `<link>` in `index.html`: Poppins (300–700),
      Roboto (300–700), Kaushan Script; body Roboto, buttons/nav Poppins,
      accent lines + inline links Kaushan Script
- [ ] Buttons: `btn_1` pill (13px/40px, radius 50px, `#ffcc00`, black
      text, hover outline); Search button square `#00c0ff` white;
      Subscribe Now `#ffcc00` uppercase black
- [ ] Carousel replaced by a reachable non-JS layout (scrollable row) with
      the same 6-card content; dropdowns are native `<select>`s / React
      state; newsletter form has a success state
- [ ] Reference spellings preserved: "chaina", "Life of Egeft", "Tour of
      iceland", "Sawpalo, Brasil" (document any paraphrase in the PR)
- [ ] `focus-visible` rings + labeled form fields + `aria-expanded` mobile
      menu (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] No ColorLib strings in app code (provenance only in spec/TEMPLATES.md/
      PR); footer links https://www.componentdock.com/ as "Component Dock"
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark ALL THREE "Tourbi" rows:
      lines 517, 1207, 2999)
