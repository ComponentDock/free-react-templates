# Template: Lendly (Loans / Finance Template)

## Purpose

Lendly is a loans-and-finance landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Loans2go" template design (see TEMPLATES.md — appears 3×:
lines 440, 1079, 1760; all three rows point to the same source, one prep
covers all; verified with `grep -c 'wp/template/loans2go/'` = 3), built
under a DIFFERENT name (Lendly — lend + -ly, matching the project's naming
pattern) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/loans2go/ (Bootstrap category,
loans "LOANS2GO | Loans HTML Template")
Preview URL: https://preview.colorlib.com/theme/loans2go/

## Design reference (replication findings)

- **Original:** ColorLib "Loans2go" (`<title>LOANS2GO | Loans HTML
Template</title>`). A dark-and-orange one-page loan landing: a translucent
  black header bar (logo left, 5-link menu, orange "Call us now!" pill +
  orange phone block right) over a full-height hero slider (blurred coins +
  clock photos, dark overlay, carousel dots) with a left text column
  ("Looking for a same day loan?", paragraph, dark pill "Find out more") and
  a right dark `#22242b` lead form (Your Name / Your E-mail / Your Phone
  inputs + small disclaimer + orange "Apply for a loan now!" pill); a white
  "Why Choose us?" section (3 icon cards with 76px orange-ring circles —
  clock / headset / info — plus a big orange "Apply Now!" pill); a full-width
  photo CTA band ("Already have a L2Go Bank Loan?" with the brand word in
  orange + "Find out More"); two alternating image+text feature rows ("Get a
  personal loan from just 8.5% APR" / "Get aproved in minutes after you apply
  online", orange "Apply for a loan now →" links); a dark `#22242b` "How a
  personal loan can help" section (2 intro paragraphs + 3 columns of
  checkmarked items); a light "We're here to help" info split (photo left,
  hours + phone + email right); a photo "Calculate my Score" band with a
  large orange "show my score" pill and a decorative hand image; and a
  `#22242b` footer (logo, 4 link widgets — What we do / About us / Legal /
  Site Info, italic small print, copyright bar).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/loans2go/
  (HTTP 200, ~60 KB HTML fetched; `css/style.css` ~22 KB parsed for tokens —
  the page also imports bootstrap.min, font-awesome, owl.carousel, flaticon,
  slicknav; site is jQuery + Bootstrap 4 + owl-carousel + slicknav, NOT
  Tailwind).
- **Screenshot note:** `loans2go-free-template.jpg` (1200×946, served as
  AVIF) MATCHES the live template: dark grey/black header bar with the
  white uppercase "LOANS2GO" logo (the "2" stylized as a slash), orange
  "Call us now!" button + orange phone block; hero over blurred coins-and-
  clock photo with dark gradient: left white 60px headline "Looking for a
  same day loan?", small white paragraph, dark grey "FIND OUT MORE" pill,
  three carousel dots (white/orange/white); right dark form box with 3
  white inputs + orange "APPLY FOR A LOAN NOW!" pill; below, the white "Why
  Choose us?" centered heading. The live preview DOM + parsed stylesheet are
  the authoritative reference; the screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `header.header-section` (position absolute, width 100%, top 0, padding-
   left 53px, background `rgba(0,0,0,0.7)`, z-index 999):
   - `a.site-logo` (float left, inline-block, padding 33px 0) — `<img
src="img/logo.png">` (white uppercase "LOANS2GO" wordmark; recreate as
     a text brand "LENDLY" — bold uppercase white).
   - `nav.header-nav` (text-align right) > `ul.main-menu` (inline-block,
     padding-right 50px): `li` × 5 — Home (`a.active`), About Us, Pages
     (dropdown), News, Contact — `a` 16px #fff weight 600, padding 33px 5px,
     margin-right 55px; hover/active color `#f43f00`.
     - "Pages" opens `ul.sub-menu` (absolute, width 220px, top 100%, bg #fff,
       padding 20px 0, shadow `2px 7px 20px rgba(0,0,0,0.15)`, hidden →
       visible on hover): About Us / Loans / elements — `a` 16px #000,
       padding 5px 20px, hover `#f43f00`.
   - `div.header-right` (inline-flex): `a.hr-btn` "Call us now!" — color
     #fff 16px weight 700, bg `#313038`, padding 36px 30px 36px 60px, with a
     `i.flaticon-029-telephone-1` (32px circle, bg `#f43f00`, radius 50%,
     absolute left 12px → lucide Phone); then `div.hr-btn.hr-btn-2` "+45 332
     65767 42" — bg `#f43f00`, padding 36px 20px, min-width 236px, center.
   - Mobile: slicknav (jQuery) → recreate as client-side hamburger menu.
2. `section.hero-section` (padding 191px 0 108px, position relative) >
   `div.container` (position relative, z-index 99) > `div.row`:
   - `div.col-lg-6` > `div.hs-text` (padding-top 95px, padding-right 10px):
     `h2` "Looking for a same day loan?" — 60px #fff, lh 1.1, mb 30px
     (responsive: 50px at <992px, 36px below — scale with clamp or break-
     points); `p` #fff mb 30px; `a.site-btn.sb-dark` "Find out more" —
     bg `#22242b`, white, 14px weight 600, uppercase, min-width 188px,
     padding 22px 35px, radius 50px.
   - `div.col-lg-6` > `form.hero-form` (bg `#22242b`, padding 63px 42px 73px):
     3 × `input[type=text]` — placeholder "Your Name" / "Your E-mail" /
     "Your Phone"; width 100%, height 49px, padding 5px 26px, mb 30px,
     border none, 14px italic color `#838383` (white input bg);
     `p` 11px italic mb 25px (small disclaimer — paraphrase);
     `button.site-btn` "Apply for a loan now!" — bg `#f43f00` (same pill
     shape). Client-side submit → success state.
   - `div.hero-slider.owl-carousel` (absolute bg slides, 100% height) — 3 ×
     `div.hs-item.set-bg` (bg images `img/hero-slider/1..3.jpg`, cover top
     center; recreate as 3 stock-style photos, e.g. picsum seeds); dots
     bottom center (8px white circles, active `#f43f00`). Carousel →
     client-side state (prev/next + dots), no owl-carousel.
3. `section.why-section.spad` (padding 102px 0) > `div.container`:
   - `div.text-center.mb-5.pb-4` > `h2` "Why Choose us?" (36px, dark ink).
   - `div.row`: 3 × `div.col-md-4` > `div.icon-box-item` (mb 30px):
     - `div.ib-icon` (width/height 76px, flex center, font-size 39px, color
       `#f43f00`, border 3px solid `#f43f00`, radius 50%, float left,
       margin-right 20px; hover: bg `#f43f00`, color #fff) —
       `i.flaticon-012-24-hours` / `i.flaticon-036-customer-service` /
       `i.flaticon-039-info` → lucide Clock / Headset / Info.
     - `div.ib-text` (overflow hidden, padding-top 3px): `h5` (18px, mb 15px)
       "Money in 1 Hour!" / "Helpfull Staff" / "Credit History Considered"
       - `p` 14px `#74757b`.
   - `div.text-center.pt-3` > `a.site-btn.sb-big` "Apply Now!" (orange, min-
     width 257px).
4. `section.cta-section.set-bg` (bg image `img/cta-bg.jpg`, cover, top
   center; text-align center, padding 100px 0 78px) > `div.container`:
   - `h2` "Already have a <strong>L2Go</strong> Bank Loan?" — 48px;
     `strong` weight 900 color `#f43f00` (→ "LENDLY").
   - `h5` "If you're thinking about borrowing more, we're here to help." —
     color `#74757b`, mb 35px.
   - `a.site-btn.sb-dark.sb-big` "Find out More".
5. `section.feature-section.spad` > `div.container` — 2 × `div.feature-item`
   (mb 70px, last mb 0) > `div.row` (image side alternates via
   `order-lg-2`/`order-lg-1`):
   - Item 1: `div.col-lg-6` `img` (feature-1.jpg) + `div.col-lg-6` >
     `div.feature-text` (padding-top 50px): `h2` "Get a personal loan from
     just 8.5% APR" (mb 35px) + `p` (mb 38px) + `a.readmore` "Apply for a
     loan now" + arrow img (16px weight 900 `#f43f00`, arrow → lucide
     ArrowRight).
   - Item 2: image right (`col-lg-6.order-lg-2`), text left
     (`col-lg-6.order-lg-1`): `h2` "Get aproved in minutes after you apply
     online" + `p` + `a.readmore`.
6. `section.help-section.spad` (bg `#22242b`) > `div.container`:
   - `div.text-center.text-white.mb-5.pb-4` > `h2` "How a personal loan can
     help" (white).
   - `div.row`: 2 × `div.col-md-6` > `p` (14px, lh 2 — source keeps the
     muted grey `#74757b` on dark; recreate with a lightened grey for
     legibility or match source exactly).
   - `div.row`: 3 × `div.col-md-4` > `ul.help-list` (list-style none,
     padding-top 55px): 4 × `li` each (padding 6px 0 6px 60px, mb 22px,
     18px weight 600 #fff, position relative; `::after` content
     `url(../img/ok-icon.png)` checkmark absolute left 0 top -1px →
     lucide Check in a small orange/white treatment):
     - Col 1: Buying a car · Take control of your finances · Pay school
       tuitions · Adding value to your home
     - Col 2: Increese your budget · Have a day to remember · Get a new
       card · Go on a holliday
     - Col 3: Get an Insurance · Take a trip · Help your kids · Renovate
       your home
7. `section.info-section.spad` (padding-bottom 90px) > `div.container` >
   `div.row`:
   - `div.col-lg-5` > `img` (info-img.jpg — desk/office photo).
   - `div.col-lg-7` > `div.info-text`: `h2` "We're here to help" (36px) +
     `h5` "Monday to Thursday (8am to 8pm), and Friday (8am to 5pm)." (18px)
     - `p` 14px `#74757b` + `ul`: `li` "+34 56873 2246" (phone),
       `li` "contact@loans2go.com" (email) — plain list in source (optionally
       lucide Phone/Mail).
8. `section.score-section.text-white.set-bg` (bg image `img/score-bg.jpg`,
   cover) > `div.container` (padding 103px 15px 95px, position relative) >
   `div.row` > `div.col-xl-6.col-lg-8`:
   - `h2` "Calculate my Score" — 60px #fff, mb 13px (responsive down).
   - `h4` "Check your credit reports as often as you want, it won't affect
     your scores." — mb 45px, lh 1.4.
   - `a.site-btn.sb-big` "show my score" — orange, min-width 257px
     (lowercase label in source — keep lowercase).
   - Decorative `img.hand-img` (absolute, right 170px, bottom 0 — hand
     holding a phone; optional, recreate or omit).
9. `footer.footer-section` (bg `#22242b`, padding 100px 0 0) >
   `div.container`:
   - `a.footer-logo` (inline-block, mb 50px) — logo.png (→ text brand).
   - `div.row`: 4 × `div.col-lg-3.col-sm-6` > `div.footer-widget` (mb 50px):
     `h2` (18px weight 700 #fff, mb 30px) + `ul` > 6×/5× `li > a` (14px #fff,
     mb 15px, inline-block):
     - What we do: Loans · Car loans · Debt consolidation loans · Home
       improvement loans · Wedding loans · Innovative Finance ISA
     - About us: About us · Our story · Meet the board · Meet the leadership
       team · Awards · Careers
     - Legal: Privacy policy · Loans2go principles · Website terms · Cookie
       policy · Conflicts policy
     - Site Info: Support · FAQ · Sitemap · Careers · Contact us
   - `p` italic mb 40px (small print).
   - `div.copyright` (color `#74757b`, 14px, padding-bottom 20px; heart icon
     `#f43f00`): ColorLib credit line → recreate as "© 2026 Lendly — Loans &
     Finance · All rights reserved".

### Content (for copy paraphrase)

- Header: logo "LENDLY"; Home (active), About Us, Pages ▸ (About Us, Loans,
  elements), News, Contact; "Call us now!" + "+45 332 65767 42".
- Hero: h2 "Looking for a same day loan?"; paragraph; "Find out more"; form
  — Your Name / Your E-mail / Your Phone + disclaimer + "Apply for a loan
  now!"; 3-slide photo carousel with dots.
- Why: "Why Choose us?" + Money in 1 Hour! / Helpfull Staff / Credit History
  Considered + "Apply Now!".
- CTA: "Already have a LENDLY Bank Loan?" + "If you're thinking about
  borrowing more, we're here to help." + "Find out More".
- Features: "Get a personal loan from just 8.5% APR" / "Get aproved in
  minutes after you apply online" + "Apply for a loan now →".
- Help: "How a personal loan can help" + 12 checkmarked items (3 cols).
- Info: "We're here to help" + hours + phone "+34 56873 2246" + email
  "contact@loans2go.com".
- Score: "Calculate my Score" + "Check your credit reports as often as you
  want, it won't affect your scores." + "show my score".
- Footer: 4 link widgets + small print + copyright.

## Design tokens

| Token           | Value                           | Usage                                                                                                                                                                                                  |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| brand-orange    | `#f43f00`                       | site-btn (primary) bg, hr-btn-2 phone block bg, hr-btn phone icon circle bg, nav hover/active, ib-icon border+icon (hover fill bg), cta strong word, readmore link, slider active dot, copyright heart |
| ink             | `#22242b`                       | sb-dark buttons, hero-form bg, help-section bg, footer bg                                                                                                                                              |
| slate           | `#313038`                       | hr-btn "Call us now!" bg                                                                                                                                                                               |
| muted           | `#74757b`                       | body p, cta h5, copyright text, help-section intro p (on dark)                                                                                                                                         |
| input-text      | `#838383`                       | hero-form input text (italic)                                                                                                                                                                          |
| white           | `#ffffff`                       | hero text, nav links, hr-btn text, help-list li, footer headings/links, score-section text                                                                                                             |
| header-bg       | `rgba(0,0,0,0.7)`               | header bar over hero                                                                                                                                                                                   |
| sub-menu-shadow | `2px 7px 20px rgba(0,0,0,0.15)` | Pages dropdown shadow                                                                                                                                                                                  |
| font            | "Open Sans"                     | everything (sans-serif fallback): nav 16px/600, hero h2 60px/700, h2 base 36px, widget h2 18px/700, readmore 16px/900, help-list 18px/600, p 14px, buttons 14px/600 uppercase                          |

Radii: 50px pill on `.site-btn` (all buttons), 50% circles on ib-icon
(76px, 3px solid border) and hr-btn phone icon (32px); inputs square (no
radius). Buttons: 14px weight 600 uppercase, padding 22px 35px, min-width
188px (`sb-big` 257px), hover keeps white text. hero-form inputs: 100%
width, height 49px, padding 5px 26px, italic 14px. Spacing: `.spad` padding
102px 0; hero 191px top / 108px bottom; cta 100px 0 78px; score container
103px 15px 95px; footer 100px 0 0; feature-item mb 70px; help-list li mb
22px + padding-left 60px; container max-width 1176px. p: 14px, line-height 2. h1 70px / h2 36px / h3 30px / h4 24px / h5 18px / h6 16px (base scale).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a translucent-black header bar over the hero with a
text logo, five nav links (Home active), a Pages dropdown, and a right-side
call block.

#### Scenario: Brand and nav links

- **GIVEN** the Lendly app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit at the top with a `rgba(0,0,0,0.7)`
  background over the hero
- **AND** the brand SHALL read "LENDLY" in bold uppercase white
- **AND** the nav SHALL list Home (active), About Us, Pages, News, and
  Contact in 16px white 600
- **AND** the active/current link SHALL be highlighted in brand orange

#### Scenario: Call block

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** a "Call us now!" pill with a phone icon SHALL render on the
  right with a slate background and a small orange phone icon circle
- **AND** an orange phone-number block SHALL render beside it reading
  "+45 332 65767 42"

#### Scenario: Pages dropdown

- **GIVEN** the Pages nav item is rendered
- **WHEN** it is hovered (or focused)
- **THEN** a white dropdown SHALL open listing About Us, Loans, and
  elements
- **AND** dropdown links SHALL turn brand orange on hover

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full hero over a photo slider with a left text
column and a right dark lead-capture form.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show the 60px white headline "Looking for a same
  day loan?", a white paragraph, and a dark pill button "Find out more"
- **AND** a dark `#22242b` form box SHALL sit on the right with Your Name,
  Your E-mail, and Your Phone inputs plus a small italic disclaimer
- **AND** an orange pill button "Apply for a loan now!" SHALL submit the
  form (success state on submit)

#### Scenario: Photo slider

- **GIVEN** the hero slider is rendered
- **WHEN** the page loads
- **THEN** the background SHALL cycle through three cover photos
- **AND** three dots SHALL show at the bottom with the active one in brand
  orange

### Requirement: Why Choose Us

The system SHALL render the "Why Choose us?" section with three icon cards
and a big "Apply Now!" button.

#### Scenario: Icon cards

- **GIVEN** the why section is rendered
- **WHEN** the page loads
- **THEN** the centered 36px heading SHALL read "Why Choose us?"
- **AND** three cards SHALL render, each with a 76px circle icon (orange
  border + orange icon: Clock, Headset, Info) and a title + paragraph
  (Money in 1 Hour! / Helpfull Staff / Credit History Considered)

#### Scenario: Card hover + CTA

- **GIVEN** an icon card is rendered
- **WHEN** it is hovered
- **THEN** the circle SHALL fill brand orange and the icon SHALL turn white
- **AND** a large orange "Apply Now!" pill (min-width 257px) SHALL render
  centered below the cards

### Requirement: CTA band

The system SHALL render the full-width photo CTA band with an orange brand
word and a dark "Find out More" button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** the 48px heading SHALL read "Already have a LENDLY Bank Loan?"
  with the brand word in orange weight 900
- **AND** the sub-line SHALL read "If you're thinking about borrowing more,
  we're here to help."
- **AND** a dark "Find out More" pill SHALL render below

### Requirement: Features

The system SHALL render two alternating image/text feature rows with orange
"Apply for a loan now →" links.

#### Scenario: Feature rows

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** the first row SHALL show the image on the left and the heading
  "Get a personal loan from just 8.5% APR" on the right with a paragraph
  and an orange arrow link "Apply for a loan now"
- **AND** the second row SHALL mirror the layout (image right, text left)
  with the heading "Get aproved in minutes after you apply online"

### Requirement: Help section

The system SHALL render the dark "How a personal loan can help" section
with two intro paragraphs and three columns of checkmarked items.

#### Scenario: Help content

- **GIVEN** the help section is rendered
- **WHEN** the page loads
- **THEN** the white centered heading SHALL read "How a personal loan can
  help" over the `#22242b` background
- **AND** two intro paragraphs SHALL render above three columns
- **AND** each of the 12 items SHALL show a checkmark and white 18px text
  (Buying a car, Take control of your finances, Pay school tuitions, Adding
  value to your home / Increese your budget, Have a day to remember, Get a
  new card, Go on a holliday / Get an Insurance, Take a trip, Help your
  kids, Renovate your home)

### Requirement: Info section

The system SHALL render the "We're here to help" split with a photo, hours,
and contact lines.

#### Scenario: Info content

- **GIVEN** the info section is rendered
- **WHEN** the page loads
- **THEN** the left SHALL show a photo and the right SHALL show the 36px
  heading "We're here to help", the hours line "Monday to Thursday (8am to
  8pm), and Friday (8am to 5pm).", a paragraph, and a phone + email list
  ("+34 56873 2246", "contact@loans2go.com")

### Requirement: Score section

The system SHALL render the photo "Calculate my Score" band with a large
orange "show my score" button.

#### Scenario: Score content

- **GIVEN** the score section is rendered
- **WHEN** the page loads
- **THEN** the 60px white heading SHALL read "Calculate my Score" over the
  cover photo background
- **AND** the sub-line SHALL read "Check your credit reports as often as
  you want, it won't affect your scores."
- **AND** an orange "show my score" pill (min-width 257px) SHALL render
  below

### Requirement: Footer

The system SHALL render the dark footer with a logo, four link widgets,
small print, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the brand logo SHALL render at the top of the `#22242b` footer
- **AND** four widgets SHALL render — What we do, About us, Legal, Site
  Info — each with a white 18px heading and white 14px links
- **AND** an italic small-print paragraph and a copyright bar SHALL render
  below ("© 2026 Lendly — Loans & Finance · All rights reserved")

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh lendly`)
- [ ] Design tokens from this spec applied in `@theme` (brand-orange
      `#f43f00`, ink `#22242b`, slate `#313038`, muted `#74757b`,
      input-text `#838383`)
- [ ] Open Sans loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → hero →
      why → cta → features → help → info → score → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/lendly-<n>/<w>/<h>`
      (hero slides, feature images, info photo, cta/score backgrounds);
      NO assets copied from ColorLib
- [ ] Icons from lucide-react (Clock, Headset, Info, Phone, ArrowRight,
      Check) — brand/heart icons inline SVG if needed
- [ ] Interactivity client-side only: hero slider + Pages dropdown + mobile
      menu (no slicknav/owl-carousel/jquery)
- [ ] Form submit → success state (no backend)
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL returns 200
