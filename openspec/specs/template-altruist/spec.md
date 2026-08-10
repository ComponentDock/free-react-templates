# Template: Altruist (Charity / Nonprofit Landing)

## Purpose

Altruist is a single-page charity / nonprofit donation website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib "Cause" template (see TEMPLATES.md — line 358, Bootstrap category;
the same source is DUPLICATED at line 1252 in the Charity category — BOTH
rows must be marked `[x]` when done), built under a NEW name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light charity landing page: a fixed header (logo + nav
with Blog/Pages dropdowns), a white hero carousel split between copy
("New way to give back", lorem, "Watch our intro video" play link) and a
photo with a white donation box overlay ("Enter Monthly Donation Amount" —
USD select, amount input, green "Donate Now" button), an "Our Major Causes"
section with three cause cards (image, title, blurb, 76% progress bar,
Funded/Pledged/Days stats, "View Details" + "Donate Here"), a light-grey
"Experience / How your Donation Reach Over Years" stats band (USD 21M/15M/
23M/25M over 2015–2018 in colored numerals), a "condition" carousel (image

- "New way to give back" copy with teal check bullets), a full-width
  donation banner ("Donate to help People Around the World" on a photo
  background) with an overlapping white donation form (USD, amount, One
  Time/Ongoing radios, green "Donate Now"), a brand logo strip, an "Upcoming
  Events" carousel (three date + title cards), and a dark navy footer
  (About Us, Newsletter, Follow Us). The brand accent is **green `#61c524`**
  with a **teal `#46dbb7`** secondary, a two-font system (**Playfair Display**
  headings + **Roboto** body), square (radius-0) buttons, and a large
  `150px` vertical section rhythm. Altruist recreates that structure
  section-for-section with matching layout, colors, typography, and content
  types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cause" — `https://colorlib.com/wp/template/cause/`
  (Bootstrap category item, charity/nonprofit donation style). TEMPLATES.md
  has **TWO copies** of this item (lines 358 and 1252 — both `- [ ]`);
  mark BOTH `[x]` when done. Neither is shipped yet.
- **Preview URL:** `https://preview.colorlib.com/theme/cause/` — **HTTP 200**
  (41.5 KB), fully reachable; structure + tokens below are from this live
  DOM and its `css/main.css` (65.4 KB). Screenshot used to confirm the
  visual design (see below).
- **Screenshot:** `cause-free-template-1.jpg` (1200×946, verified via
  browser vision): logo = leaf icon + serif "Cause" wordmark; nav HOME /
  ABOUT / CAUSES / EVENTS / BLOG▾ / PAGES▾ / CONTACT (the search bar in the
  screenshot is the colorlib.com preview chrome, NOT part of the template);
  hero split-screen: left serif headline "New way to give back" + lorem +
  teal circular video-play button "Watch our intro video"; right a photo of
  a boy running through a grassy field with a semi-transparent WHITE
  donation box overlaid ("Enter Monthly Donation Amount", USD dropdown,
  "125.00" input, green "Donate Now"); below, centered carousel arrows;
  then centered "Our Major Causes" serif heading. Clean, airy, minimalist;
  white background, dark text, green + teal accents, natural photo imagery.
- **Section structure (from the live DOM, in order):**
  1. `header#header` (fixed; `padding: 14px 0`; transparent over the white
     hero; scrolled state `background: rgba(0,0,0,0.8)`; mobile `#222`):
     `div#logo` with `img/logo.png` (recreate as text logo "Altruist" with
     a lucide leaf/heart icon) + `nav#nav-menu-container > ul.nav-menu`:
     **Home** (menu-active), **About, Causes, Events**,
     **Blog** ▾ (Blog Home, Blog Single), **Pages** ▾ (Donation, Event
     Details, Elements), **Contact**. Nav links: 12px, `#333`, padding 10px,
     hover + active green `#61c524` (`.nav-menu ul li:hover > a`).
  2. `section.home-banner-area.relative` (bg `#fff`; owl hero carousel,
     2 slides): per slide — `.banner-content`: `h1` "New way to give back"
     (Playfair Display), lorem `p`, play link (youtube modal, `lnr`
     video icon img + "Watch our intro video"); right column `img` photo
     (`home-banner-img.jpg`) + `.donation-box` overlay (white, padding
     50px, shadow `0px 20px 50px 0 rgba(153,153,153,0.2)`): "Enter Monthly
     Donation Amount" label, USD `select`, `input` placeholder "125.00"
     (bg `#f9f9ff`, border `#ddd`), green `.primary-btn` "Donate Now".
     Vertical owl-nav arrows (up/down, rotated 90°) on the left edge.
  3. `section.causes-area.section-gap` (white): `.section-title`
     (text-center, padding-bottom 95px) — `h2` "Our Major Causes" +
     blurb `p`; grid of **3** `.single-cause` cards (`border: 1px solid
#eee`): `.top` (padding 30px) `img` photo + `.middle` (padding 30px,
     bg `#f9f9ff`, border-top/bottom `#eee`): `h3` "Help Restoring
     Uganda's Water Pipelines Construction" (21px, hover green), lorem
     `p`, progress bar (height 10px, radius 0, bg `#fff`, fill green
     `#61c524`, width 76%), stats `h5` row: **76% Funded · $7,689
     Pledged · 29 Days Remaining**; `.bottom` (padding 30px): "View
     Details" link + green "Donate Here" `.primary-btn` (13px, padding
     0 30px).
  4. `section.collection-area.section-gap` (bg **#f9f9ff**): section-title
     "Experience" + "How your Donation Reach Over Years" + blurb; 4
     `.collection-box` stat cards (white, padding 20px, text-center,
     border transparent; hover → teal `#46dbb7` effect): `h3` 36px
     "USD 21 M" (colored: color1 `#f9a22b`, color2 default black,
     color3 `#61c524`, color4 `#a978e0`) + year `p`/h6: **2015, 2016,
     2017, 2018**.
  5. `section.condition-area.section-gap` (white; owl carousel, 2 slides):
     slide = left `img` photo (`condition/c1.jpg`) + right content: `h1`
     "New way to give back", 2–3 lorem paragraphs, `.condition-right`
     `ul` checklist with **teal `#46dbb7`** square bullets
     (`.condition-right li:before`). Owl-nav arrows on the right
     (up arrow teal).
  6. `section.donation-area.relative.section-gap-top` (bg image
     `donation-bg.jpg` cover + dark overlay; white text): `h1` "Donate to
     help People Around the World" + `p` ("Las Vegas has more than 100,000
     hotel rooms to choose from…").
  7. `section.donation-form-area.section-gap-bottom` (white;
     `margin-top: -170px` — overlaps the donation banner): `.donation-box`
     (white, padding 50px, shadow): "USD" `select` + amount `input`
     (placeholder "125.00", bg `#f9f9ff`, border `#ddd`); `.donation-type`
     (padding 20px, `border: 1px solid #ddd`) two radio options
     (`.donation-type .form-check-label`, Playfair Display 14px bold):
     **One Time** ("Donate your amount for this session only") and
     **Ongoing** (same caption); green `.primary-btn` "Donate Now".
  8. `section.brand-area.section-gap-bottom` (white): logo strip of **5**
     partner logo images (`img/brands/b1.png` … `b5.png`).
  9. `section.event-area.section-gap-bottom` (white): section-title h2
     "Upcoming Events" + blurb; owl carousel of **3** `.single-event`
     cards (bg `#f9f9ff`, padding 30px 40px, margin-top 45px): `h6` date
     "12th September, 2018" + `h4` title link "Help Restoring Uganda's
     Water Pipelines Construction" (21px, hover green). Owl-nav arrows.
  10. `footer.footer-area.section-gap` (bg **#04091e** dark navy): 3
      columns — **About Us**: lorem paragraph + copyright line ("Copyright
      © <year> All rights reserved | This template is made with ❤ by
      Colorlib" → recreation credit line); **Newsletter**: "Stay update
      with our latest" + email `input` (bg `#14192c`, white text, radius
      0, padding 10px 18px) + teal `.click-btn` (`#46dbb7`, radius 0,
      padding 8px 12px, Mailchimp form in the original); **Follow Us**:
      "Let us be social" + social icon links (hover teal
      `.footer-social a:hover i`).
- **Behavior notes:** header is fixed and transparent over the hero,
  gaining a dark translucent background on scroll (`header-scrolled`); the
  hero, condition, and events sections are owl carousels (recreation:
  static grids or lightweight carousels both acceptable — desktop shows
  slides with the rotated up/down nav arrows on the left/right edge); the
  video play link opens a youtube modal; the donation form has a
  One Time/Ongoing radio choice; the newsletter form posts to Mailchimp in
  the original (recreation: client-side validation + success state). The
  original is a multi-page demo; the recreation is ONE page with nav links
  as in-page anchors.

## Design tokens (extracted from `css/main.css`)

- Brand primary: **#61c524** (bright green; 35 uses — `.primary-btn` bg,
  `#header #logo h1 a`, `.nav-menu ul li:hover > a`, `.single-cause:hover
h3`, `.collection-box h3.color3`, progress-bar fill
  `.progress-bar.progress-bar2`, donation input focus border).
- Brand secondary: **#46dbb7** (mint teal; 30 uses — `.collection-box:hover`
  border/effect, `.condition-right li:before` bullets, `.single-footer-widget
.click-btn`, `.footer-social a:hover i`, owl-nav up-arrow, blog/other-page
  accents).
- Stat number colors (`.collection-box h3`): color1 **#f9a22b** (orange),
  color2 default black, color3 **#61c524** (green), color4 **#a978e0**
  (purple).
- Fonts:
  - Headings (h1–h6): **"Playfair Display", sans-serif** — 600, color
    `#000000` (Google Fonts `<link>` in the recreation).
  - Body: **"Roboto", sans-serif** — 16px, weight 500, color `#777777`,
    line-height 1.625em.
  - Section h2 (`.section-title h2`): 36px; card h3 21px; stat h3 36px;
    event h4 21px; nav links 12px.
- Buttons (`.primary-btn`): bg `#61c524`, white text, 14px, weight 500,
  uppercase, padding `0 35px`, `line-height: 47px`, **border-radius: 0**
  (square); hover = transparent bg + `#61c524` border/text. Small variant
  (cause cards): 13px, padding `0 30px`. Footer `.click-btn`: bg `#46dbb7`,
  white, radius 0, padding `8px 12px`.
- Section backgrounds: hero white `#fff`; causes white; collection
  **#f9f9ff**; condition white; donation = photo bg (`donation-bg.jpg`,
  cover) + dark overlay, white text; donation form white (overlaps banner
  by -170px); brand white; events white with `#f9f9ff` cards; footer
  **#04091e** (newsletter input bg `#14192c`).
- Section rhythm: `.section-gap` = `padding: 150px 0`;
  `.section-gap-top` = 150px top; `.section-gap-bottom` = 150px bottom;
  `.section-title` = text-center, `padding-bottom: 95px`.
- Cause card progress bar: height 10px, `border-radius: 0`, track `#fff`,
  fill `#61c524` (76%).
- `.donation-box`: white, `padding: 50px` (50px 20px mobile), shadow
  `0px 20px 50px 0 rgba(153,153,153,0.2)`; inner form control bg `#f9f9ff`,
  `border: 1px solid #dddddd`, height 50px, font-size 18px, radius 0.
- `.donation-type`: padding 20px, `border: 1px solid #dddddd`; labels
  Playfair Display 14px bold black.
- `.single-event` card: bg `#f9f9ff`, padding `30px 40px`, margin-top 45px,
  margin-bottom 30px.
- `.single-cause`: `border: 1px solid #eeeeee`; `.middle` bg `#f9f9ff`,
  border-top/bottom `#eee`.
- Header: fixed, `padding: 14px 0`, transparent over hero; scrolled
  `rgba(0,0,0,0.8)`; mobile bg `#222222`; links `#333` 12px, active/hover
  green.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/altruist-<n>/<w>/<h>` (deterministic per
  template); icons from `lucide-react` (play, leaf/heart for logo, check,
  mail, phone, map-pin, menu, x, calendar, arrow-right/up/down; brand
  social icons via inline SVG); no ColorLib assets.

## Requirements

### Requirement: Header

The system SHALL render a fixed header with a logo and the full navigation
menu.

#### Scenario: Header renders on desktop

- **GIVEN** the Altruist app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a fixed header SHALL render at the top with a logo ("Altruist"
  wordmark + leaf/heart icon) on the left
- **AND** the menu SHALL list Home, About, Causes, Events, Blog (dropdown:
  Blog Home, Blog Single), Pages (dropdown: Donation, Event Details,
  Elements) and Contact
- **AND** the active link and link hover SHALL use the `#61c524` green
  accent
- **AND** the header SHALL be transparent over the hero and gain a dark
  translucent background (`rgba(0,0,0,0.8)`) once the page is scrolled

#### Scenario: Mobile menu

- **GIVEN** the Altruist app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-in menu SHALL open with the same links (including the
  Blog and Pages submenus)
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable (close via toggle / Escape)

### Requirement: Hero with donation box

The system SHALL render a white hero split between copy and a photo with an
overlaid donation box.

#### Scenario: Hero renders

- **GIVEN** the Altruist app is rendered
- **WHEN** the hero section is displayed
- **THEN** a white hero SHALL render with a left column containing the
  Playfair Display `h1` "New way to give back", a lorem paragraph, and a
  "Watch our intro video" play link
- **AND** a right column SHALL render a photo with a white `.donation-box`
  overlay (shadow `0px 20px 50px 0 rgba(153,153,153,0.2)`)
- **AND** the box SHALL contain the label "Enter Monthly Donation Amount",
  a USD select, an amount input (placeholder "125.00"), and a green
  square "Donate Now" button

#### Scenario: Video link opens a modal

- **GIVEN** the hero play link is displayed
- **WHEN** the user activates it
- **THEN** a video modal SHALL open (embedded youtube player or a
  placeholder modal)

#### Scenario: Hero donation box submits

- **GIVEN** the hero donation box is displayed
- **WHEN** the user submits an amount
- **THEN** the form SHALL submit without a page reload and SHALL show a
  success confirmation

### Requirement: Major Causes cards

The system SHALL render a white section with three cause cards showing a
progress bar and stats.

#### Scenario: Cause cards render

- **GIVEN** the Altruist app is rendered
- **WHEN** the Our Major Causes section is displayed
- **THEN** the centered heading "Our Major Causes" with a blurb SHALL
  render
- **AND** three cards SHALL render (each with a `1px #eeeeee` border), each
  with a photo, the title "Help Restoring Uganda's Water Pipelines
  Construction" (21px, green on hover), a lorem paragraph, and a 10px
  progress bar filled 76% in green
- **AND** each card SHALL show the stats 76% Funded, $7,689 Pledged and 29
  Days Remaining
- **AND** each card SHALL render a "View Details" link and a green "Donate
  Here" button

### Requirement: Experience stats band

The system SHALL render a light-grey stats section with four colored
donation totals.

#### Scenario: Stats render

- **GIVEN** the Altruist app is rendered
- **WHEN** the Experience section is displayed
- **THEN** the section SHALL use the `#f9f9ff` background with the heading
  "Experience" and subline "How your Donation Reach Over Years"
- **AND** four white stat boxes SHALL render: USD 21 M (2015), USD 15 M
  (2016), USD 23 M (2017), USD 25 M (2018)
- **AND** the numbers SHALL be 36px and colored — `#f9a22b`, black,
  `#61c524`, `#a978e0` respectively — with the year below
- **AND** hovering a box SHALL apply the teal `#46dbb7` effect

### Requirement: Condition carousel

The system SHALL render a white section with a photo and "New way to give
back" copy with a teal checklist.

#### Scenario: Condition section renders

- **GIVEN** the Altruist app is rendered
- **WHEN** the condition section is displayed
- **THEN** a photo SHALL render on one side and the `h1` "New way to give
  back" with two lorem paragraphs on the other
- **AND** a checklist SHALL render with teal `#46dbb7` square bullets
- **AND** the section SHALL be a carousel with at least two slides
  (recreation: static two-slide grid acceptable on desktop)

### Requirement: Donation banner with form

The system SHALL render a photo-backed donation banner with an overlapping
white donation form.

#### Scenario: Donation banner renders

- **GIVEN** the Altruist app is rendered
- **WHEN** the donation area is displayed
- **THEN** a full-width photo background with a dark overlay SHALL render
  with white text: `h1` "Donate to help People Around the World" and a
  lorem paragraph

#### Scenario: Donation form renders

- **GIVEN** the donation area is displayed
- **WHEN** the overlapping form is shown
- **THEN** a white `.donation-box` SHALL render overlapping the banner's
  bottom edge (~170px)
- **AND** it SHALL contain a USD select, an amount input (placeholder
  "125.00"), and two radio options "One Time" and "Ongoing" with the
  caption "Donate your amount for this session only"
- **AND** a green square "Donate Now" button SHALL submit with a success
  confirmation and no page reload

### Requirement: Brand logo strip

The system SHALL render a row of partner logos.

#### Scenario: Brand logos render

- **GIVEN** the Altruist app is rendered
- **WHEN** the brand section is displayed
- **THEN** a row of five partner logo images SHALL render (placeholder
  logos via picsum or text-based logo marks)

### Requirement: Upcoming Events

The system SHALL render an events section with three date-and-title cards.

#### Scenario: Event cards render

- **GIVEN** the Altruist app is rendered
- **WHEN** the Upcoming Events section is displayed
- **THEN** the centered heading "Upcoming Events" with a blurb SHALL
  render
- **AND** three `#f9f9ff` cards SHALL render, each with the date "12th
  September, 2018" and the title link "Help Restoring Uganda's Water
  Pipelines Construction" (21px, green on hover)

### Requirement: Footer

The system SHALL render a dark navy three-column footer.

#### Scenario: Footer renders

- **GIVEN** the Altruist app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a `#04091e` footer SHALL render with three columns: About Us
  (lorem paragraph + copyright credit line), Newsletter ("Stay update with
  our latest" + email input with a teal `#46dbb7` click button), and
  Follow Us ("Let us be social" + social icon links that turn teal on
  hover)

#### Scenario: Newsletter validates the email

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user submits an invalid email
- **THEN** a per-field error SHALL show and the form SHALL NOT submit
- **AND** submitting a valid email SHALL show a success message

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Altruist app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: header → hero (copy +
  photo/donation box) → Major Causes → Experience stats → condition
  carousel → donation banner → donation form → brand logos → Upcoming
  Events → footer
- **AND** the document title SHALL be "Altruist — Charity & Donation"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- altruist` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: fixed header, white hero split with
      overlaid donation box, 3 cause cards, 4 stat boxes, condition
      carousel, photo donation banner with -170px overlapping form, brand
      strip, 3 event cards, dark footer (10 sections in the order above).
- [ ] Design tokens applied: primary `#61c524`, secondary `#46dbb7`, stat
      colors `#f9a22b` / black / `#61c524` / `#a978e0`, body Roboto 16px
      `#777777`, headings Playfair Display 600 black, `bg #f9f9ff`
      (collection + cause-card middle + event cards), footer `#04091e`
      (input `#14192c`).
- [ ] Buttons are square (radius 0) green `.primary-btn` with outline
      hover; footer click-btn teal; section rhythm `150px` with
      `95px`-padded centered section titles.
- [ ] Cause cards: 10px green progress bar at 76%, stats 76% Funded /
      $7,689 Pledged / 29 Days Remaining, "View Details" + "Donate Here".
- [ ] Donation forms (hero box + banner form) have USD select, amount
      input, One Time/Ongoing radios (banner form), validation/success
      states, no page reload.
- [ ] Header transparent → dark translucent on scroll; mobile menu
      keyboard-operable; Blog/Pages dropdowns present.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); icons
      from lucide-react / inline SVG.
- [ ] PR description records source (ColorLib Cause), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks BOTH copies
      (lines 358 and 1252) `[x]` when done.
