# Template: Landly (Real Estate / Property)

## Purpose

Landly is a single-page real estate / property-listing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Realtors" free template (source:
https://colorlib.com/wp/template/realtors/), built under a DIFFERENT name
(**Landly** — evoking land/real estate; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a light, modern real-estate site on a **lime-olive green
(`#91b029`) + black + white** palette with a full-bleed photo hero, a green
property-search filter bar that overlaps the hero bottom edge, a dark
services/about split, a black "Latest Properties" carousel, agent cards with
green-corner frames, a green testimonial carousel, a light blog section, and
a black footer with a newsletter form. The signature brand color is
`#91b029` (used for CTAs, the filter bar, prices, section-heading rules,
icons, active nav, and the testimonial section), body text is a dark slate
`#364d59` at weight 300, and the theme font is **DM Sans**. One notable
authoring artifact: the footer's middle link-list column heading is a
copy-paste duplicate "Subscribe" (same as the newsletter column) — see the
Footer requirement for the documented treatment.

Landly recreates the structure section-for-section with matching layout,
tokens, typography, and content kinds (no ColorLib assets copied; images are
deterministic picsum placeholders, icons come from `lucide-react`).

> NAMING NOTE: the ColorLib source name "Realtors" is FORBIDDEN as the app
> name. **Landly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL NOTE: `https://preview.colorlib.com/theme/realtors/` is
> REACHABLE (HTTP 200, 32.5KB HTML, `<title>Realtors &mdash; Website
Template by Colorlib</title>`) — no subpath quirk (unlike the
> Bootstrap-Buttons siblings). Stylesheets: `css/style.css` (26KB — the
> custom token source), `css/bootstrap.min.css` (Bootstrap 4 — primary
> `#91b029` theme via `$primary`), `css/bootstrap-datepicker.css`,
> `css/jquery.fancybox.min.css`, `css/owl.carousel.min.css`,
> `css/owl.theme.default.min.css`, `fonts/flaticon/font/flaticon.css`
> (property/agent icon glyphs), `css/aos.css`. JS: jQuery 3.3.1 + migrate +
> popper + bootstrap + owl.carousel + jquery.sticky + waypoints +
> animateNumber + fancybox + stellar + easing + datepicker + `js/main.js`
> (sticky navbar, carousels, mobile menu, counters). The page renders
> correctly without JS except the carousels (which stack) and the sticky
> navbar — the React implementation replaces carousels with scrollable
> rows/static grids and the sticky behavior with a scroll listener.

> SCREENSHOT NOTE (consistent with live): the TEMPLATES.md screenshot
> (`realtors-free-template.jpg`, 1200×946, browser-verified 2026-08-14)
> shows the same design: white uppercase "REALTORS" logo + white nav links
> over the dark hero photo (modern interior with fireplace), green
> `$1,570,000` price, white "Beautiful House In Australia" headline, address
> with pin, 2911 Sq Ft / 2 / 2 specs, green "Learn More" button, and the
> solid green search bar overlapping the hero bottom with "For Rent" (white
> bg / green text, active) and "For Sale" (green bg / white text) tabs and
> white form fields + black "Submit" button. The screenshot cuts off right
> after the filter bar; the live DOM is authoritative for the sections
> below the fold.

## Design reference (replication findings)

- **Original:** ColorLib "Realtors". Listed in TEMPLATES.md under
  **Realtors** (line 485). Free real-estate website template. The
  `realtors` slug appears exactly once in TEMPLATES.md (no duplicate rows to
  mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/realtors/` (HTTP 200, 32.5KB HTML,
  `<title>Realtors &mdash; Website Template by Colorlib</title>`). Structure,
  copy, and tokens below are from the live DOM + `style.css` +
  `bootstrap.min.css` + computed styles, cross-checked against the
  screenshot (which matches above the fold).
- **Visual design (live browser render, verified 2026-08-14):** modern,
  light, spacious real-estate site. Dark full-bleed hero photo under a
  transparent navbar (white logo + links); green `#91b029` accents
  everywhere (price, Learn More CTA, filter bar, active tab, icons, section
  heading rules, testimonial section, agent card frames, link hovers); a
  green filter bar overlapping the hero's bottom edge; a black services
  panel beside an About column; a black Latest Properties section with
  dark-grey `#222` card panels; light (white) agents section; green
  testimonial section with white text; light-grey `#f6f5f5` blog section;
  black footer with white/grey text. Body text `#364d59` weight 300, DM
  Sans. Sections padded `7rem` vertical (desktop) / `3rem` (mobile).
- **Section order (1:1 from live DOM):**
  1. **Navbar** — `header.site-navbar.site-navbar-target` (absolute,
     transparent over hero, padding `3rem` top/bottom; on scroll: white bg,
     shadow `4px 0 20px -5px rgba(0,0,0,.2)`, reduced padding). Logo
     "Realtors" (uppercase, `1.7rem`; white over hero → green `#91b029`
     scrolled). Nav links: **Home Agents Property About Blog Contact**
     (white over hero → black scrolled; `.active`/hover = green). Mobile:
     hamburger → slide-in menu (`site-mobile-menu`).
  2. **Hero** — `div.site-section-cover.overlay`, bg image
     `images/hero_1.jpg` (modern interior), overlay `rgba(0,0,0,.6)`, row
     height `calc(70vh - 196px)` min `600px`, centered `col-md-7`:
     - `span.h4.text-primary.mb-4` **$1,570,000** (green, `1.5rem`/24px
       block)
     - `h1.mb-2` **Beautiful House In Australia** (`3rem`/48px white,
       line-height 1; `2rem` at ≤767px)
     - address line: `icon-room` (map-pin, green) + **156/10 Sapling
       Street, Harrison, ACT 2914** (18px white, centered)
     - spec row `media-38289 d-flex justify-content-around mb-5`: **2911 Sq
       Ft.** (fullscreen icon), **2** (bed icon), **2** (bath icon) — white
       13px, green icons
     - CTA: `a.btn.btn-primary.text-white.px-4.py-3` **Learn More** (green
       button, white text)
  3. **Filter bar** — `div.realestate-filter` bg `#91b029`,
     `translateY(-100%)` so it overlaps the hero's bottom edge, `z-index 6`.
     Tabs (`realestate-filter-wrap nav`): **For Rent** (`a.active` — white
     bg, green text) / **For Sale** (green bg, white text). Two tab panes
     (`#for-rent` active, `#for-sale`) — each contains the same search form:
     - row 1: **All Types** select (All Types / Townhouses / Duplexes /
       Quadplexes / Condominiums), **Title** text input, **Address** text
       input (placeholder "Title" / "Address")
     - row 2: **Any Bedrooms** select (Any Bedrooms / 0 / 1 / 2 / 3+),
       **Any Bathrooms** select (Any Bathrooms / 0 / 1 / 2 / 3+), **Min
       Price** select ($100 $200 $300 $400), **Max Price** select ($25,000
       $50,000 $75,000 $100,000 $100,000,000)
     - **Submit** button — `input.btn.btn-black.py-3.btn-block` (black,
       full-width)
     - all fields: `form-control` 55px tall, white bg, 4px radius, border
       `1px solid #e6e6e6` (focus border `#666666` + outline `#91b029`)
  4. **Services + About** — `div.site-section` with `row align-items-stretch`:
     - left `col-lg-6` → `div.h-100.p-5.bg-black` with a 2×2 grid
       (`col-md-6 text-center mb-4` ×4) of `service-38201` items: icon
       (flaticon house/bathtub/house/calculator, green `#91b029`, `3rem`),
       `h3` **Estate Insurance / Elegant Bathtub / Fresh Air / Estate
       Calculator** (white, uppercase, 15px), `p` **Estate Management**
       (white, 14px)
     - right `col-lg-5.ml-auto`: `h3.heading-29201` **About Us** (uppercase
       22px, black, green 70×2px rule above), `p.mb-5` "Perspiciatis quidem
       harum provident repellat sint.", then two `service-39290
d-flex align-items-start.mb-5` rows: icon in `media-icon.mr-4`
       (green) + `h3` **Mission** / **Vission** (sic — reference spelling)
       - `p` lorem copy
  5. **Latest Properties** — `div.site-section.bg-black.block-14`:
     centered `col-md-6` heading **Latest Properties** (`heading-29201
text-center text-white`, green centered rule) + subtext "Perspiciatis
     quidem, harum provident, repellat sint officia quos fugit tempora id
     deleniti." (white). Below: `owl-carousel nonloop-block-14` of **6**
     `media-38289` property cards (3 unique × 2 for the carousel loop):
     image link → `div.text` (padding 30px, bg `#222`): spec row (sq ft /
     bed / bath with green icons, white 13px), `h3.mb-3` price link
     **$570,000 / $1,570,000 / $980,000** (white), address line with green
     `icon-room` + **156/10 Sapling Street, Harrison, ACT 2914**
     (rgba(255,255,255,.7)). Each card links to `property-single.html` (use
     `#` in the SPA).
  6. **Our Agents** — `div.site-section`: centered heading **Our Agents** +
     same subtext; `row` of 3 `col-md-4` `person-29381` cards: `div.media-
39912` (photo, with a decorative green frame: `:before` 2px solid
     `#91b029` box at `top:-20px; left:-20px; width:50%` — an L-corner
     outline behind the photo), `h3` name link (**Josh Long** / **Melinda
     David** / **Jessica Soft**, 18px black), `span.meta.d-block.mb-4`
     **4 Properties / 10 Properties / 18 Properties** (14px `#999`),
     `div.social-32913` with 3 round 40px `#efefef` icon links (facebook /
     twitter / instagram).
  7. **Testimonials** — `div.site-section.bg-primary` (`#91b029`):
     `owl-carousel nonloop-block-13` of 3 `testimonial-38920
d-flex align-items-start`: `div.pic.mr-4` (photo, fixed 90px) + text:
     `span.meta` **Business Man / Business Woman / Business Woman**
     (rgba(255,255,255,.3)), `h3.mb-4` **Josh Long / Jean Doe / Jean Doe**
     (white, 20px), `p` quote (rgba(255,255,255,.9)), 4 star icons
     (white) in `div.mt-4`.
  8. **Blog Posts** — `div.site-section.bg-light` (`#f6f5f5`): centered
     heading **Blog Posts** + subtext; `row` of 3 `col-lg-4.col-md-6.mb-4`
     `post-entry-1.h-100`: image link → `div.post-entry-1-contents` (white
     bg, padding 20px): `h2` title link **Lorem ipsum dolor sit amet**
     (22px black; hover green), `span.meta` **July 17, 2019 by Admin**
     (`#ccc`), `p` excerpt.
  9. **Footer** — `footer.site-footer` (bg `#000`, padding `4em 0`):
     `row` of 3 columns — (a) `col-md-4`: `h3.text-white.h5` **Subscribe**
     - newsletter form (`form.d-flex`: email input `form-control.mr-3`
       placeholder "Enter your email" + `input.btn.btn-primary.text-white`
       **Send Now**); (b) `col-md-3.ml-auto`: link list `ul.list-unstyled
menu-arrow` (green `\e315` arrow bullets): **About Us, Testimonials,
       Terms of Service, Privacy, Contact Us**; (c) `col-md-4`: `h3` **About**
     - lorem paragraph. Bottom bar: `row.pt-5.mt-5` → `div.border-top.pt-5`
       (1px rgba(255,255,255,.1)) with copyright line "Copyright © [year] All
       rights reserved | This template is made with [heart] by Colorlib" —
       the Colorlib attribution is REPLACED by the Component Dock link per
       repo convention.
- **Authoring artifact (footer):** the middle link-list column's `h3`
  heading in the source is ALSO "Subscribe" — a copy-paste duplicate of the
  newsletter column's heading (the reference renders "Subscribe" twice).
  Recommended treatment (documented deviation): render the link column with
  a sensible heading (e.g. "Quick Links") since two identical "Subscribe"
  headings over a link list is an authoring bug; keep the link list itself
  1:1 (About Us, Testimonials, Terms of Service, Privacy, Contact Us).
- **JS behaviors (original):** sticky navbar (white bg + shadow + padding
  shrink on scroll), owl-carousel property/testimonial sliders, tab
  switching (For Rent / For Sale panes), mobile slide-in menu,
  animateNumber counters (not visibly used on this page). The React
  recreation: scroll listener for the sticky navbar; For Rent/For Sale as
  React tabs; carousels as horizontally scrollable rows (or static grids)
  with the SAME card content; mobile menu per repo patterns.
- **Design tokens (from `style.css` + `bootstrap.min.css` + computed):**

  | Token                    | Value                                                                                                                                                                         | Usage                                                                                                         |
  | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
  | **Primary / brand**      | `#91b029` (lime-olive green); hover `#779122` (Bootstrap `$primary` darken)                                                                                                   | CTAs, filter bar bg, active tab, prices, icons, heading rules, agent frames, link hovers, testimonial section |
  | Body text                | `#364d59` (dark slate blue-grey), `font-weight: 300`, `line-height: 1.7`, `1rem`                                                                                              | `body`                                                                                                        |
  | Headings                 | `#364d59`, `font-weight: 300`                                                                                                                                                 | `h1`–`h5` (on light sections)                                                                                 |
  | Section headings         | uppercase, 22px, `#000` (`.heading-29201`), `padding-top: 20px`, 70×2px `#91b029` rule above (centered via `.text-center`)                                                    | "About Us", "Latest Properties", "Our Agents", "Blog Posts"                                                   |
  | Font                     | **DM Sans** (300 weight base) — preview loads no Google Fonts (falls back to system sans); load DM Sans via Google Fonts `<link>` in `index.html` per repo convention         | `body`, `form-control`                                                                                        |
  | Page/section backgrounds | white (default), `#f6f5f5` (`bg-light` — Blog Posts), `#000` (`bg-black` — services panel, Latest Properties, footer), `#91b029` (`bg-primary` — testimonials)                | section-level                                                                                                 |
  | Hero                     | bg image + overlay `rgba(0,0,0,.6)`; row height `calc(70vh - 196px)`, min `600px`; `h1` 3rem/48px white `line-height:1` (2rem ≤767px); body copy 18px white                   | `site-section-cover overlay`                                                                                  |
  | Buttons                  | height 55px, `border-radius: 4px`, padding `10px 20px`, `border-color: transparent`; no shadow on focus                                                                       | `.btn`                                                                                                        |
  | Primary button           | bg `#91b029`, text `#fff` (hero "Learn More" has explicit `text-white`; Bootstrap `.btn-primary` rest color is `#212529` but the `.text-white` class wins)                    | "Learn More", "Send Now"                                                                                      |
  | Black button             | bg `#000`, text `#fff` (`.btn-black`)                                                                                                                                         | filter "Submit" (also `py-3 btn-block` = full width)                                                          |
  | Form controls            | height 55px, `border-radius: 4px`, bg `#fff`, border `1px solid #e6e6e6` (hover/focus border `#666666`, focus border-color `#91b029`), padding `0 20px`, `margin-right: 10px` | selects + inputs in filter bar and footer                                                                     |
  | Property card panel      | bg `#222`, padding 30px, text white; specs 13px white, icons green; address `rgba(255,255,255,.7)`                                                                            | `.media-38289 .text` (Latest Properties)                                                                      |
  | Agent card frame         | 2px solid `#91b029` box at `top:-20px; left:-20px; width:50%` behind the photo (decorative L-corner)                                                                          | `.person-29381 .media-39912:before`                                                                           |
  | Agent meta / social      | name 18px `#000`; meta 14px `#999`; social circles 40px, bg `#efefef`, radius 50%                                                                                             | `person-29381` cards                                                                                          |
  | Testimonial              | photo fixed 90px; meta `rgba(255,255,255,.3)`; name 20px white; quote `rgba(255,255,255,.9)`; 4 white star icons                                                              | `testimonial-38920`                                                                                           |
  | Blog cards               | contents bg `#fff`, padding 20px; title 22px `#000` (hover `#91b029`); meta `#ccc`                                                                                            | `post-entry-1`                                                                                                |
  | Footer                   | bg `#000`, padding `4em 0`; headings white; links `rgba(255,255,255,.5)` (hover white); link arrows green `#91b029`; bottom border `rgba(255,255,255,.1)`                     | `site-footer`                                                                                                 |
  | Section padding          | `7rem 0` (desktop) / `3rem 0` (mobile)                                                                                                                                        | `.site-section`                                                                                               |

- **Icons (lucide-react equivalents):** fullscreen/maximize (Sq Ft), Bed
  Double (beds), Bath (baths), Map Pin (address), House/Home + Calculator +
  Wind/Bathtub (services — map each flaticon to the closest lucide icon),
  Star (testimonials), Facebook / Twitter / Instagram (agent socials).
- **UPPERCASE:** logo and section headings are uppercase via CSS
  (`text-transform: uppercase` on `.site-logo a` and `.heading-29201`);
  service card h3s too. Nav links are NOT uppercase.

## Requirements

### Requirement: Page structure

The system SHALL render the Landly page as a single scrolling page with the
reference section order: navbar, hero, filter bar, services + about, latest
properties, agents, testimonials, blog posts, footer.

#### Scenario: Default render

- **GIVEN** the Landly page is rendered
- **WHEN** the user views the page
- **THEN** the sections SHALL render in order: Navbar → Hero → Filter bar →
  Services + About → Latest Properties → Our Agents → Testimonials → Blog
  Posts → Footer
- **AND** the page SHALL use the brand palette: primary `#91b029`, body text
  `#364d59`, white/`#f6f5f5`/`#000` section backgrounds

#### Scenario: Content column

- **GIVEN** the page is displayed at desktop width
- **WHEN** the user inspects the layout
- **THEN** section content SHALL sit in the Bootstrap-style 12-column grid
  with the reference column spans (e.g. centered `col-md-6`/`col-md-7`
  headings, `col-lg-6` + `col-lg-5` split for services/about, `col-md-4`
  agent/blog columns)

### Requirement: Navbar

The system SHALL render a transparent-over-hero navbar that turns white and
sticky on scroll, with the brand logo and the reference nav links.

#### Scenario: Default state

- **GIVEN** the page is at the top
- **WHEN** the user views the navbar
- **THEN** the navbar SHALL be transparent over the hero with the brand logo
  **"Landly"** (uppercase, `1.7rem`) in white
- **AND** nav links SHALL read **Home, Agents, Property, About, Blog,
  Contact** in white

#### Scenario: Scrolled state

- **GIVEN** the user scrolls past the hero
- **WHEN** the navbar is in view
- **THEN** the navbar SHALL gain a white background with shadow
  (`4px 0 20px -5px rgba(0,0,0,.2)`) and reduced padding
- **AND** the logo and links SHALL turn dark (`#000`), with the active link
  and hover state in brand green `#91b029`

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a viewport ≤767px
- **WHEN** the user opens the menu
- **THEN** a hamburger button SHALL toggle a slide-in mobile menu with the
  same nav links
- **AND** the menu SHALL be accessible (aria-expanded, focusable links) and
  close on link selection

### Requirement: Hero

The system SHALL render the full-bleed photo hero with the reference copy,
specs, and CTA.

#### Scenario: Hero content

- **GIVEN** the Landly hero is displayed
- **WHEN** the user views it
- **THEN** a background photo with a `rgba(0,0,0,.6)` overlay SHALL fill the
  hero (min height 600px)
- **AND** the price **$1,570,000** SHALL render in brand green `#91b029`
  above the headline
- **AND** the headline **Beautiful House In Australia** SHALL render in
  white at 3rem (2rem on mobile)
- **AND** the address **156/10 Sapling Street, Harrison, ACT 2914** SHALL
  render with a map-pin icon in brand green
- **AND** the spec row SHALL render **2911 Sq Ft.**, **2** (beds), **2**
  (baths) with icons
- **AND** a **Learn More** button SHALL render in brand green with white
  text

### Requirement: Filter bar

The system SHALL render the green search bar overlapping the hero's bottom
edge with For Rent / For Sale tabs and the reference search form.

#### Scenario: Tabs

- **GIVEN** the filter bar is displayed
- **WHEN** the user views it
- **THEN** the bar SHALL have a solid `#91b029` background and overlap the
  hero's bottom edge
- **AND** two tabs SHALL render: **For Rent** (active — white background,
  green text) and **For Sale** (green background, white text)
- **AND** clicking a tab SHALL switch the active state and show its form
  pane

#### Scenario: Search form

- **GIVEN** the active tab's form is displayed
- **WHEN** the user inspects the fields
- **THEN** row 1 SHALL contain: **All Types** select (All Types, Townhouses,
  Duplexes, Quadplexes, Condominiums), **Title** input, **Address** input
- **AND** row 2 SHALL contain: **Any Bedrooms** select (Any Bedrooms, 0, 1,
  2, 3+), **Any Bathrooms** select (Any Bathrooms, 0, 1, 2, 3+), **Min
  Price** select ($100, $200, $300, $400), **Max Price** select ($25,000,
  $50,000, $75,000, $100,000, $100,000,000)
- **AND** a full-width black **Submit** button SHALL render
- **AND** all fields SHALL be 55px tall, white, 4px radius, with focus
  indication in brand green

### Requirement: Services + About

The system SHALL render the two-column split: a black services grid beside
an About column with Mission/Vision rows.

#### Scenario: Services grid

- **GIVEN** the services panel is displayed
- **WHEN** the user views it
- **THEN** a black panel SHALL render a 2×2 grid of four services: **Estate
  Insurance, Elegant Bathtub, Fresh Air, Estate Calculator**
- **AND** each service SHALL show an icon (brand green), an uppercase white
  15px title, and a white 14px subtitle **Estate Management**
- **AND** the icons SHALL map to lucide-react equivalents (house, bathtub,
  wind/fresh-air, calculator)

#### Scenario: About column

- **GIVEN** the About column is displayed
- **WHEN** the user views it
- **THEN** the heading **About Us** SHALL render uppercase with the brand
  green 70×2px rule above
- **AND** two rows SHALL render: **Mission** and **Vission** (reference
  spelling preserved), each with a brand-green icon, heading, and lorem
  copy
- **AND** the section SHALL keep the reference two-column split
  (`col-lg-6` black panel + `col-lg-5` about) stacking on mobile

### Requirement: Latest Properties

The system SHALL render the black Latest Properties section with six
property cards (3 unique properties × 2) in the reference card anatomy.

#### Scenario: Section heading

- **GIVEN** the Latest Properties section is displayed
- **WHEN** the user views its heading
- **THEN** **Latest Properties** SHALL render centered, white, uppercase,
  with the centered brand-green rule above
- **AND** the reference subtext SHALL render below it in white

#### Scenario: Property cards

- **GIVEN** the property cards are displayed
- **WHEN** the user views a card
- **THEN** the card SHALL contain: image link, a `#222` panel with a spec
  row (**2911 Sq Ft.**, **2**, **2** with green icons), a price link
  (**$570,000**, **$1,570,000**, or **$980,000**), and the address
  **156/10 Sapling Street, Harrison, ACT 2914** with a green map-pin icon
- **AND** the three unique cards SHALL repeat once (6 total) to mirror the
  reference carousel loop
- **AND** the cards SHALL be reachable — as a horizontally scrollable row
  on all viewports (carousel replacement) or an equivalent layout that
  shows the same 6 cards without JS

### Requirement: Our Agents

The system SHALL render the three agent cards with the reference names,
property counts, and social icons.

#### Scenario: Agent cards

- **GIVEN** the Our Agents section is displayed
- **WHEN** the user views a card
- **THEN** three cards SHALL render with names **Josh Long**, **Melinda
  David**, **Jessica Soft** and property counts **4 Properties**, **10
  Properties**, **18 Properties**
- **AND** each photo SHALL have the decorative brand-green L-corner frame
  (2px solid `#91b029` box offset behind the top-left of the photo)
- **AND** each card SHALL show three round social icon links (facebook,
  twitter, instagram) on `#efefef` circles
- **AND** the section heading **Our Agents** SHALL use the reference
  uppercase style with green rule

### Requirement: Testimonials

The system SHALL render the brand-green testimonial section with three
quotes, names, and star ratings.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL have a solid `#91b029` background
- **AND** three testimonials SHALL render with a 90px photo, a role meta
  (**Business Man** / **Business Woman**), a white 20px name (**Josh Long**
  / **Jean Doe** / **Jean Doe**), a quote, and four white star icons
- **AND** the cards SHALL be reachable at all viewports (scrollable row or
  equivalent)

### Requirement: Blog Posts

The system SHALL render the light-grey blog section with three post cards.

#### Scenario: Post cards

- **GIVEN** the Blog Posts section is displayed
- **WHEN** the user views it
- **THEN** the section SHALL have a `#f6f5f5` background with the centered
  **Blog Posts** heading and reference subtext
- **AND** three cards SHALL render, each with: image link, white content
  panel, 22px title link (**Lorem ipsum dolor sit amet**, black, hover
  green), meta **July 17, 2019 by Admin**, and an excerpt paragraph

### Requirement: Footer

The system SHALL render the black footer with a newsletter form, link list,
about text, and the Component Dock attribution.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the user views it
- **THEN** three columns SHALL render: (a) **Subscribe** newsletter form
  (email input placeholder "Enter your email" + green **Send Now** button),
  (b) a link list — **About Us, Testimonials, Terms of Service, Privacy,
  Contact Us** — with brand-green arrow bullets, (c) **About** heading +
  lorem paragraph
- **AND** the link column's heading SHALL be a sensible non-duplicated
  label (e.g. **Quick Links**) — documented deviation: the reference
  duplicates the "Subscribe" heading in both columns (authoring artifact)

#### Scenario: Copyright / attribution

- **GIVEN** the bottom of the footer
- **WHEN** the user views the copyright bar
- **THEN** a top border (`rgba(255,255,255,.1)`) SHALL separate the bottom
  bar
- **AND** the copyright line SHALL link to
  `https://www.componentdock.com/` branded as "Component Dock" (repo
  convention — replaces the reference's Colorlib attribution)

### Requirement: Responsive behavior

The system SHALL keep all sections usable at every viewport width.

#### Scenario: Mobile layout

- **GIVEN** the page is rendered at a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** the hero headline SHALL drop to 2rem and the section padding to
  `3rem 0`
- **AND** the services/about, agent, and blog columns SHALL stack vertically
- **AND** the filter form fields SHALL stack without horizontal overflow
- **AND** the property/testimonial cards SHALL remain reachable (scrollable
  rows)

### Requirement: Footer Component Dock link (covered above) and a11y

The system SHALL apply repo a11y conventions: semantic landmarks, labeled
form fields, `aria-expanded` on the mobile menu toggle, focus-visible rings
on all interactive elements, and alt text on images.

#### Scenario: Accessibility

- **GIVEN** the page is rendered
- **WHEN** the user navigates with a keyboard
- **THEN** every interactive element SHALL be reachable and show a visible
  focus indicator
- **AND** form fields SHALL have accessible labels (visually-hidden labels
  matching the reference placeholder text are acceptable)
- **AND** the mobile menu toggle SHALL expose `aria-expanded` state

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-landly`
- [ ] `scripts/verify-app.sh landly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section order 1:1 with reference: Navbar → Hero (photo + overlay,
      green price, headline, address, specs, Learn More) → green Filter bar
      (For Rent/For Sale tabs + search form + black Submit) → Services
      (black 2×2) + About (Mission/Vission) → Latest Properties (black, 6
      cards with `#222` panels) → Our Agents (3 cards with green L-corner
      frames) → Testimonials (`#91b029` bg) → Blog Posts (`#f6f5f5` bg) →
      Footer (newsletter + links + about + Component Dock copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#91b029` (hover `#779122`), body text `#364d59`, bg-light `#f6f5f5`,
      bg-black `#000`, card panel `#222`, footer text rgba whites; heading
      rule 70×2px
- [ ] Font: DM Sans (300–700) via Google Fonts `<link>` in `index.html`;
      body weight 300; title "Landly — Real Estate" (reference `<title>`
      is the ColorLib preview label — use the app's own title per repo
      convention)
- [ ] Buttons: 55px tall, 4px radius, transparent border; primary `#91b029`
      white text; black `#000` white text for Submit; form controls 55px
      white with green focus
- [ ] Sticky navbar: transparent over hero (white logo/links) → white bg +
      shadow + dark text on scroll; active/hover green
- [ ] Carousels replaced by reachable non-JS layouts (scrollable rows) with
      the same card content; tabs are React state
- [ ] `focus-visible` rings + labeled form fields + `aria-expanded` mobile
      menu (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] No ColorLib strings in app code (provenance only in spec/TEMPLATES.md/
      PR); footer links https://www.componentdock.com/ as "Component Dock"
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Realtors" row, line 485)
