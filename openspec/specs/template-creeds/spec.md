# Template: Creeds (Church Template)

## Purpose

Creeds is a single-page church landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Faith"
church website template (see TEMPLATES.md, Church section, line 391;
duplicates at lines 1263 and 1294 — mark EVERY copy `[x]` when done), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The reference is a modern, clean church landing ("Faith Church Multi"): a thin
white utility top bar (social icons + "My Account" + "Donate Now"), a white
main nav (cross logo wordmark, uppercase links, search icon), a full-bleed
church-interior photo hero (min-height 680px, dark overlay
`rgba(4,9,30,0.8)`, white eyebrow + bold 60px headline + two CTAs), a bright
cyan `#00c8e6` event-countdown band ("Our Next Event Starts in" + live
days/hours/minutes/seconds timer on a translucent white strip), an about
section (photo left + "Welcome to Faith Church" text right), a 4-up features
strip alternating cyan/dark cards, a light-grey `#f9f9ff` sermons carousel
("Sermons This Week"), a dark-overlay donation band with a donation form
("Your donation can save many lives"), an "Upcoming Events" 3-card section,
and a dark navy `#04091e` footer (About, Navigation Links, Newsletter
subscribe form, 8-image InstaFeed grid, socials + copyright bar).

Brand colors: primary cyan `#00c8e6` (countdown band, feature cards, primary
buttons, subscribe button, link hovers); dark `#04091e` (alternating feature
cards, footer); section bg `#f9f9ff` (sermons area); headings `#222222`;
body text `#777777`; secondary accents `#4cd3e3` (light cyan), `#38a4ff` /
`#52c5fd` (blues), `#f4e700` (yellow), `#f44a40` / `#f54940` (reds). Font:
Poppins (600/700 headings, 500 buttons, 400 body).

## Design reference (replication findings)

- **Original:** ColorLib "Faith" — church website template
  (source: https://colorlib.com/wp/template/faith/). Listed in TEMPLATES.md
  line 391 (Church section); duplicates at lines 1263 and 1294 — mark every
  copy `[x]` when done. Screenshot: `faith-free-template.jpg` (1200×946,
  reviewed visually in the browser: dark church-interior hero with white
  centered text, cyan "Get Started" button, bright cyan countdown band below
  the hero with big white timer numbers, white nav).
- **Live preview URL:** https://preview.colorlib.com/theme/faith/
  (reachable, HTTP 200). HTML saved to `/tmp/faith.html` (29.2 KB);
  stylesheet `https://preview.colorlib.com/theme/faith/css/style.css` saved
  to `/tmp/faith.css` (62 KB). The preview DOM is authoritative for section
  order and copy; the screenshot is authoritative for the overall look.
- **Fonts:** `font-family` declarations in `style.css`:
  `"Poppins", sans-serif` (headings 600/700, body 400, buttons 500, timer
  numbers 600). Load via Google Fonts `<link>` in `index.html`. The logo is
  an image asset (`image/Logo.png`) — a cross icon + "Faith" wordmark;
  recreate as a lucide `Cross` icon + styled text "Creeds".
- **Buttons / links (from style.css):**
  - `.btn_hover` (secondary outline button, e.g. hero "Donate Now"): `font:
500 14px "Poppins"; text-transform: uppercase; padding: 4px 35px;
border: 1px solid #eeeeee; border-radius: 0px` (square); color `#222222`;
    hover: `background: #00c8e6; color: #fff`.
  - `.btn_hover_two` (primary CTA, e.g. hero "Get Started", donate "Donate
    Now"): `background: #00c8e6; color: #fff; border-color: #00c8e6`;
    hover: transparent background, cyan text.
  - `.view_btn` (feature "View Details"): `background: #fff`; hover:
    `border-color: #222222; background: #222222` (white text).
  - Footer newsletter `.sub-btn`: `background: #00c8e6; color: #fff;
font-weight: 300; border-radius: 0; line-height: 34px; padding: 4px
11px 0px`, absolutely positioned inside the email input.
- **Section backgrounds / layout (from faith.html + faith.css):**
  - top bar `header_top` — thin strip above the nav: "My Account"
    (lucide `User` icon) + "Donate Now" + social icons
    (fa-twitter/fa-facebook → inline SVG); search icon (`lnr-magnifier` →
    lucide `Search`) lives in the nav.
  - nav `.main_menu` — white bar, logo left, uppercase links HOME ·
    MINISTRIES · SERMONS · EVENT · PAGES · BLOG · CONTACT + search icon
    right. (Inner-page destinations — About, Donation, Gallery, Elements,
    Event Details, Blog Details, Contact — are NOT recreated; links can be
    dead anchors `#` or scroll targets. Note the source misspells
    "Ministries" — recreate it correctly.)
  - hero `section.banner_area.d-flex.text-center` — `min-height: 680px;
background: linear-gradient(to right, rgba(4,9,30,0.8), rgba(4,9,30,0.8)),
url("image/banner.jpg"); background-size: cover`. Centered `.banner_content`
    (white): eyebrow `h6` "Who Created Us" (14px, uppercase,
    `letter-spacing: 1.4px`, weight 400), `h1` "Keep faith always"
    (60px/60px, 700, `padding: 8px 0 20px`), a short paragraph, and two CTAs
    ("Get Started" `.btn_hover_two`, "Donate Now" `.btn_hover`).
  - countdown `section.event_date_area` — `background: #00c8e6; padding:
100px 0`. Left `.event_text`: `h3` "Spreading the faith to all" + event
    line "5th may, 2018, Saturday, 09.00 am to 05.00 pm". Right: `h4` "Our
    Next Event Starts in" + `.timer` strip (`background:
rgba(255,255,255,0.3); padding: 27px 0`) with 4 equal `.timer__section`
    columns (`width: calc(100% / 4)`): `.timer__number` (Poppins 600
    36px/45px, white) + `.timer__label` (14px/22px, capitalize:
    days/hours/Minutes/seconds). Countdown must tick in real time toward a
    future date and never show negative values.
  - about `section.about_area.section_gap` — two columns: `image/about.jpg`
    left, `.about_content` right (`padding-right: 70px`): `h2` "Welcome to
    Faith Church", two paragraphs (`padding: 15px 0 25px`), "Read Full
    Story" link (`.about_btn btn_hover`).
  - features `section.features_area` — 4 `.features_item` cards in a row
    (`padding: 73px 45px 80px 60px; color: #fff; background: #00c8e6`; even
    cards `background: #04091e`; `border-left: 1px solid #fff` between
    cards). Each: lucide icon, `h3` title (Spreading Light to world ·
    Spreading Peace to world · Spread Happyness to world · Spreading Light
    to world), lorem paragraph, "View Details" link (`.view_btn`).
  - sermons `section.sermons_work_area.section_gap` (`background: #f9f9ff`)
    — centered `h2` "Sermons This Week" + lorem subtext; `.sermons_slider`
    (owl-carousel, 3 slides): each slide = `.sermons_image` thumbnail +
    `.sermons_content` (title, paragraph, meta, "View More Details" link).
    Recreate as a static 3-card row (carousel behavior optional; a grid that
    stacks responsively is acceptable).
  - donate `section.donate_area` — full-width band, `background:
linear-gradient(to right, rgba(4,9,30,0.8), rgba(4,9,30,0.8)),
url("image/donate.jpg"); background-size: cover; padding: 110px 0`,
    centered white content: `h2` "Your donation can save many lives" +
    paragraph + `.donation_form`: `h3` "How much would you like to donate?"
    - amount input/select (`.form-group .form-control`) + "Donate Now"
      button (`.btn_hover_two`).
  - events `section.event_blog_area.section_gap` — centered `h2` "Upcoming
    Events" + lorem subtext; 3 `.event_post` cards: title (Spreading Peace
    to world · Spread Happyness to world · Spreading Light to world), date
    "Saturday, 5th may, 2018" (lucide `Calendar`), venue "Rocky beach
    Church, Santa monica, Los Angeles, USA" (lucide `MapPin`), "View
    Details" link (`.btn_hover`).
  - footer `footer.footer-area` (`background: #04091e`) — 4
    `.single-footer-widget` columns:
    1. "About Agency": logo + about paragraph.
    2. "Navigation Links": Home · Feature · Services · Portfolio · Team ·
       Pricing · Blog · Contact.
    3. "Newsletter": short line ("For business professionals caught between
       high OEM price and mediocre print and graphic output," — paraphrase)
       - email input with absolutely-positioned cyan subscribe button
         (`.sub-btn`, square).
    4. "InstaFeed": `ul.list d-flex flex-wrap` of 8 thumbnails
       (`image/instagram/Image-01..08.jpg`).
    - `.footer-bottom`: centered "Copyright © <year> All rights reserved |
      This template is made with ❤ by Colorlib" (reword for Creeds, no
      ColorLib credit) + social icons (fa-twitter/fa-facebook → inline SVG).

## Requirements

### Requirement: Utility top bar

The system SHALL render a thin white top bar above the nav with account,
donate and social links.

#### Scenario: Top bar content

- **GIVEN** the Creeds app is rendered
- **WHEN** the page loads
- **THEN** a thin top bar SHALL show a "My Account" link (with a user icon)
  and a "Donate Now" link
- **AND** social icon links (Twitter, Facebook — inline SVG) SHALL be present

### Requirement: White header with logo, uppercase nav and search

The system SHALL render a white header with a cross logo wordmark, uppercase
nav links and a search icon.

#### Scenario: Desktop header

- **GIVEN** the Creeds app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show a cross icon + "Creeds" wordmark (styled
  text, never a copied asset) on the left
- **AND** uppercase nav links SHALL follow: Home · Ministries · Sermons ·
  Event · Pages · Blog · Contact
- **AND** a search icon SHALL sit on the right

#### Scenario: Mobile menu

- **GIVEN** the nav is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a hamburger button SHALL open a stacked menu panel with
  `aria-expanded` reflecting the open state and a close control

### Requirement: Full-bleed photo hero

The system SHALL render a hero section with a background photo, dark
overlay, eyebrow, bold headline and two CTAs.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be at least 680px tall with a full-bleed background
  photo and a dark overlay (`rgba(4,9,30,0.8)`) ensuring white text contrast
- **AND** it SHALL show the uppercase letter-spaced eyebrow "Who Created
  Us", the bold 60px white headline "Keep faith always", a short subtext
  paragraph, a cyan "Get Started" button (`.btn_hover_two` style) and an
  outline "Donate Now" button (`.btn_hover` style — 1px `#eeeeee` border,
  square corners)

### Requirement: Cyan countdown band

The system SHALL render a bright cyan (`#00c8e6`) band with event info and a
live countdown timer.

#### Scenario: Countdown timer

- **GIVEN** the countdown section is rendered
- **WHEN** it loads
- **THEN** the band SHALL show "Spreading the faith to all" with the event
  date line ("5th may, 2018, Saturday, 09.00 am to 05.00 pm") on the left
- **AND** "Our Next Event Starts in" with a translucent white timer strip
  (`rgba(255,255,255,0.3)`) SHALL sit on the right
- **AND** the timer SHALL show 4 equal columns — days, hours, minutes,
  seconds — with white Poppins 600 36px numbers and 14px capitalized labels
- **AND** the numbers SHALL count down in real time toward a fixed future
  date and never show negative values

### Requirement: About section

The system SHALL render a two-column about section with a photo and text.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** a photo SHALL sit on the left and text on the right: a "Welcome
  to Faith Church" heading (paraphrased brand for Creeds, e.g. "Welcome to
  Creeds Church"), two paragraphs, and a "Read Full Story" link with the
  outline button treatment

### Requirement: Alternating features strip

The system SHALL render 4 feature cards alternating cyan and dark
backgrounds.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** it loads
- **THEN** 4 equal cards SHALL sit side by side (stacking on smaller
  screens), alternating `#00c8e6` and `#04091e` backgrounds, separated by
  white 1px dividers
- **AND** each card SHALL show a lucide icon, a title (Spreading Light to
  world · Spreading Peace to world · Spread Happyness to world · Spreading
  Light to world), a short paragraph, and a "View Details" link (white
  background, dark hover)

### Requirement: Sermons this week

The system SHALL render a light-grey (`#f9f9ff`) sermons section with 3
sermon cards.

#### Scenario: Sermon cards

- **GIVEN** the sermons section is rendered
- **WHEN** it loads
- **THEN** a centered title "Sermons This Week" with a lorem subtext SHALL
  appear above a 3-card row (stacking responsively)
- **AND** each card SHALL show a thumbnail image, a sermon title, a short
  description, a meta line (e.g. speaker/date), and a "View More Details"
  link

### Requirement: Donation band with form

The system SHALL render a dark-overlay photo band with a donation form.

#### Scenario: Donation form

- **GIVEN** the donation section is rendered
- **WHEN** it loads
- **THEN** the band SHALL show "Your donation can save many lives" (white),
  a paragraph, and a form headed "How much would you like to donate?" with
  an amount input and a cyan "Donate Now" button
- **AND** submitting an empty/invalid amount SHALL show an inline error
- **AND** submitting a valid amount SHALL show a success confirmation and
  reset the field

### Requirement: Upcoming events

The system SHALL render 3 event cards with date and venue meta.

#### Scenario: Event cards

- **GIVEN** the events section is rendered
- **WHEN** it loads
- **THEN** a centered title "Upcoming Events" with a lorem subtext SHALL
  appear above 3 cards
- **AND** each card SHALL show a title (e.g. "Spreading Peace to world"), a
  date (e.g. "Saturday, 5th may, 2018" with a calendar icon), a venue (e.g.
  "Rocky beach Church, Santa monica, Los Angeles, USA" with a map-pin icon)
  and a "View Details" link

### Requirement: Dark footer with newsletter, Instagram and socials

The system SHALL render a dark navy (`#04091e`) footer with widget columns
and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show an "About Agency" column (logo + paragraph), a
  "Navigation Links" column (Home · Feature · Services · Portfolio · Team ·
  Pricing · Blog · Contact), a "Newsletter" column with an email input and a
  cyan subscribe button, and an "InstaFeed" column (8-thumbnail flex grid)
- **AND** the email input SHALL validate: submitting an invalid/empty email
  SHALL show an error; a valid email SHALL show a success confirmation and
  reset the field

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the bottom bar SHALL read "© 2026 Creeds. All rights reserved."
  with a reworded "Made with ❤" credit line (no ColorLib credit)
- **AND** social icon links SHALL be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Creeds app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar + header in the banner
  landmark, the hero + countdown + about + features + sermons + donate +
  events sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Creeds — Church Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (hero text
  scales, countdown band stacks, features/sermons/events collapse to 1–2
  columns, mobile menu replaces the desktop nav, footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/creeds`
      (`scripts/verify-app.sh creeds` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: top bar (My Account + Donate Now + socials), white
      nav (cross + "Creeds" wordmark, uppercase links, search icon,
      hamburger), hero (680px photo bg + `rgba(4,9,30,0.8)` overlay +
      eyebrow + 60px white headline + cyan Get Started + outline Donate
      Now), cyan `#00c8e6` countdown band (translucent white timer strip, 4
      live columns), about (photo + text + Read Full Story), features (4
      cards alternating `#00c8e6`/`#04091e`, white dividers, View Details),
      sermons (`#f9f9ff`, 3 cards), donate (dark-overlay photo band +
      form), events (3 cards with date/venue meta), footer (`#04091e`, About
      / Navigation / Newsletter / InstaFeed / socials / copyright) match the
      Faith preview 1:1.
- [ ] Design tokens in `@theme`: primary cyan `#00c8e6`; dark `#04091e`;
      section bg `#f9f9ff`; headings `#222222`; body `#777777`; secondary
      accents `#4cd3e3`, `#38a4ff`, `#52c5fd`, `#f4e700`, `#f44a40`,
      `#f54940`; overlay `rgba(4,9,30,0.8)`; Poppins via Google Fonts
      `<link>` in `index.html`.
- [ ] Buttons: primary CTA = solid `#00c8e6`, white text, square corners;
      outline button = 1px `#eeeeee` border, `#222222` text, square corners,
      cyan hover; view button = white bg, dark hover; subscribe button =
      cyan, absolutely positioned in the email input.
- [ ] Placeholder images use `picsum.photos/seed/creeds-<n>/<w>/<h>` (hero
      banner, about photo, sermon thumbnails, donate band, event cards,
      instagram grid); icons from lucide-react (cross, user, search, menu,
      x, calendar, map-pin, database/building-2 for features, socials via
      inline SVG); no ColorLib assets copied (logo recreated as cross icon +
      styled text).
- [ ] PR description states source template (ColorLib "Faith"), preview URL
      (https://preview.colorlib.com/theme/faith/), design tokens, and what
      differs (name, placeholders, paraphrased copy, inner pages not
      recreated).
