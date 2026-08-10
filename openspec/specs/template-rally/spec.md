# Template: Rally (Event / Conference Template)

## Purpose

Rally is a single-page event/conference template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Eventure"
event website template (see TEMPLATES.md, Bootstrap section, line 389;
duplicate at line 1681 in the Event section — mark EVERY copy `[x]` when
done), built under a different name with the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

The reference is a bold purple-gradient conference site (demo brand in the
preview: "Eventure" — "International Digital Business Event"): a fixed header
that is transparent over the hero and turns into a purple gradient bar on
scroll (logo left, uppercase links, "Get Tickets" gradient CTA and a search
icon right); a full-bleed photo hero (min-height 900px, dark overlay,
uppercase white headline, lorem subtext, ghost "View More Details" button); a
white countdown card overlapping the hero's bottom edge ("Next Event will
Start in" + 4-part days/hours/minutes/seconds timer); a "Welcome to Eventure"
section (photo left, two paragraphs + link right); a "Meet Head Speakers"
team section (4 speaker cards whose photo gets a dark overlay + sliding white
social bar on hover); an "Event Schedule" section (purple-gradient Day
01/02/03 tab bar, each tab listing media rows of thumbnail + time + talk
title + "Speech by: <speaker>"); a venue/map section (dark area with
location, dates, contact info + embedded map); a "Ticket Pricing" section (4
cards Basic/Starter/Business/Enterprise whose gradient "Get Started" button
slides up on hover while the card border and price turn purple `#6247ea`);
and a dark navy footer (`#04091e`) with Top Products links, a Newsletter
subscribe form, an 8-thumbnail Instagram grid, social icons and a copyright
bar.

Brand colors: primary purple gradient `#141da2 → #9b5cf6` (fixed nav bar,
schedule tab bar, pricing button); CTA gradient `#2c28b1 → #9b5cf6 →
#2c28b1` (Get Tickets button, main buttons, gradient-text prices/speaker
names); accent purple `#6247ea` (price-card hover border, hover prices, link
accents); secondary accents `#4cd3e3` (cyan), `#38a4ff` (blue), `#f4e700`
(yellow), `#f8b600` (gold) — used sparsely in icon/social hover contexts;
headings `#222222`; body text `#777777`; section backgrounds white, `#f9f9ff`
(team), `#fafcff` (pricing); footer `#04091e`. Fonts: Heebo (headings, bold,
uppercase) and Roboto (body, buttons 500).

## Design reference (replication findings)

- **Original:** ColorLib "Eventure" — event/conference template
  (source: https://colorlib.com/wp/template/eventure/). Listed in
  TEMPLATES.md line 389 (Bootstrap section); duplicate at line 1681 (Event
  section) — mark every copy `[x]` when done. Screenshot:
  `eventure-free-template.jpg` (1200×946, reviewed visually in the browser:
  dark crowd-photo hero with white uppercase headline, white countdown strip,
  purple accents throughout).
- **Live preview URL:** https://preview.colorlib.com/theme/eventure/
  (reachable). HTML saved to `/tmp/eventure.html` (27.6 KB); stylesheet
  `https://preview.colorlib.com/theme/eventure/css/style.css` saved to
  `/tmp/eventure-style.css` (73 KB). The preview DOM is authoritative for
  section order and copy; the screenshot is authoritative for the header
  (transparent over hero) and overall look.
- **Fonts:** `font-family` declarations in `style.css`:
  `"Heebo", sans-serif` (headings: section titles, timer numbers, footer
  titles, price-card titles) and `"Roboto", sans-serif` (body text, buttons,
  nav, timer labels). Load both via `<link>` in `index.html`. The logo is an
  image asset (`img/logo.png`) — a white wordmark; recreate as styled text.
- **Buttons / links (from style.css):**
  - Ghost hero button `.banner_btn`: `background: rgba(255, 255, 255, 0.1);
color: #fff; border: 1px solid #7a8186; border-radius: 5px; padding: 0
30px; line-height: 50px; font: 500 13px "Roboto", sans-serif`.
  - Primary CTA `.main_btn` / `.tickets_btn` (nav "Get Tickets"): `linear-
gradient(to right, #2c28b1 0%, #9b5cf6 51%, #2c28b1 100%)` with
    `background-size: 200% auto` (animated slide on hover), `padding: 0
35px; line-height: 50px; border-radius: 5px; color: #fff; font: 500 13px
"Roboto", sans-serif`.
  - Pricing button `.price_btn`: vertical gradient `#141da2 → #9b5cf6`,
    `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;
line-height: 50px; font: 500 12px "Roboto", sans-serif`; hidden by
    default (`opacity: 0; margin-bottom: -50px`) and slides into view on
    card hover (`opacity: 1`).
- **Section backgrounds / layout (from eventure.html + style.css):**
  - header `header_area` (absolute, z-index 99) + `div.main_menu`
    (fixed, full-width; transparent over hero, then `linear-gradient(0deg,
#141da2 0%, #9b5cf6 100%)` bar with `translateY` slide-in on scroll).
    Left: white "Eventure" logo wordmark; center/right: uppercase links
    (HOME · ABOUT · SPEAKERS · PAGES · SCHEDULE · VENUE · PRICING · ELEMENTS
    · BLOG) with `.nav-item { margin-right: 45px }`, a "Get Tickets"
    gradient CTA (`.tickets_btn`, `margin-left: 195px`), and a search icon
    (`lnr-magnifier`). Mobile: hamburger toggler. (Inner-page nav
    destinations — Blog, Blog Details, Elements, Contact — are NOT recreated;
    links can be dead anchors `#` or scroll targets.)
  - hero `section.home_banner_area` — `min-height: 900px; display: flex;
background: url(img/banner/home-banner.jpg) center/cover` with dark
    overlay; centered content: small eyebrow line, h1 "International Digital
    Business Event" (uppercase, white), lorem paragraph, ghost "View More
    Details" button.
  - countdown `section.event_time_area` — `.event_time_inner` white card
    (`max-width: 944px; margin: -90px auto 0; border-radius: 5px;
box-shadow: 0 8px 30px 0 rgba(153,153,153,0.1); padding: 45px 0 50px`)
    overlapping the hero bottom; left `.event_text` (h3 "Next Event will
    Start in" + lorem p, `padding-left: 65px`), right `.timer_inner` with
    `.timer__section` (4 equal columns, `flex: 0 0 25%`): `.timer__number`
    (36px Heebo bold `#222222`) + `.timer__label` (14px Roboto `#777777`,
    capitalize: days/hours/Minutes/seconds). Countdown must tick in real
    time toward a future date.
  - welcome `section.welcome_area.pad_btm` — two-column: `.welcome_img`
    (photo `img/welcome-1.jpg`) left, text right: h2 "Welcome to Eventure",
    two paragraphs, "View More Details" link (gradient hover).
  - speakers `section.team_area.p_120` (`background: #f9f9ff`) — centered
    `.main_title` ("Meet Head Speakers" + lorem subtext), then 4
    `.team_item` cards (4-up on desktop, `text-align: center`): `.team_img`
    photo with `:before` overlay (dark, opacity 0 → 1 on hover) and a white
    `.hover` social bar sliding up from `bottom: -70px` to 0 on hover; below:
    `.team_name` h4 (name, e.g. "Ethel Davis") + p role ("Managing Director
    (Sales)") — speaker names get the gradient text `#2c28b1 → #9b5cf6` on
    hover.
  - schedule `section.event_schedule_area.p_120` — centered `.main_title`
    ("Event Schedule"); `.event_schedule_inner .nav-tabs`: purple gradient
    `#141da2 → #9b5cf6` bar, `border-radius: 5px; overflow: hidden`, 3 tabs
    "Day 01 / Day 02 / Day 03". Each tab panel: repeated `.media` rows
    (`.d-flex` thumbnail `img/schedule-1.jpg` + `.media-body` with h5 time
    "09.00 am", h4 talk title "Opening Ceremony", p "Speech by: Mark weins").
  - venue/map `section.home_map_area` — dark section with `.map_info` block:
    h3 "California, United States", p "Santa monica bullevard"; rows
    "Monday to Wednesday" / "17-19 June, 218"; "support@colorlib.com" /
    "Send us your query anytime!"; plus embedded map (`.mapBox { height:
420px }`). Recreate with a static map placeholder (styled panel or
    OpenStreetMap iframe is acceptable; never copy ColorLib assets).
  - pricing `section.price_area.p_120` (`background: #fafcff`) — centered
    `.main_title` ("Ticket Pricing"); 4 `.price_item` cards (Basic
    Individuals/Freelancers £39/mo · Starter Small Companies £59/mo ·
    Business Medium Companies £79/mo · Enterprise Large Companies £99/mo).
    Each card: `.price_text` (`padding: 75px 45px`), title, subtitle, price
    h2 (36px, gradient text `#2c28b1 → #9b5cf6` via background-clip, with
    `span "/mo"` 14px Roboto 300 `#777777`), feature list rows (RAM · Core
    CPU · SSD Storage · Transfer · Network), bottom gradient `.price_btn`
    "Get Started". Hover: `border-color: #6247ea`, price + span color
    `#6247ea`, `.price_btn` slides in (opacity 1).
  - footer `footer.footer-area` (`background: #04091e`) — 4 columns:
    1. "Top Products": links Managed Website · Manage Reputation · Power
       Tools · Marketing Service.
    2. Newsletter: heading + "You can trust us. we only send promo offers,
       not a single spam." + subscribe form (email input + button).
    3. "Instagram Feed": `ul.list d-flex flex-wrap` of 8 thumbnails
       (`img/instagram/Image-01..08.jpg`).
    4. social icon links.
    - `.footer_title`: 18px Heebo bold uppercase white, `margin-bottom:
28px`. Bottom bar: "Copyright © <year> All rights reserved | This
      template is made with ❤ by Colorlib" (reword for Rally, no ColorLib
      credit).

## Requirements

### Requirement: Fixed header with logo, nav links, Get Tickets CTA and search

The system SHALL render a fixed header that is transparent over the hero and
becomes a purple gradient bar after scrolling.

#### Scenario: Desktop header

- **GIVEN** the Rally app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "Rally" (white, recreated
  as styled text — never a copied asset) on the left
- **AND** uppercase nav links SHALL follow (Home · About · Speakers · Pages ·
  Schedule · Venue · Pricing · Elements · Blog) with ~45px spacing
- **AND** a "Get Tickets" gradient CTA button (`#2c28b1 → #9b5cf6 → #2c28b1`,
  5px radius, 50px height) and a search icon SHALL sit on the right
- **AND** the header SHALL be transparent while at the top of the page and
  slide into a fixed purple gradient bar (`#141da2 → #9b5cf6`) once the page
  scrolls past the hero

#### Scenario: Mobile menu

- **GIVEN** the nav is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a hamburger button SHALL open a stacked menu panel with
  `aria-expanded` reflecting the open state and a close control

### Requirement: Full-bleed photo hero

The system SHALL render a hero section with a background photo, dark overlay,
uppercase headline and ghost button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be at least 900px tall with a full-bleed background photo
  and a dark overlay ensuring white text contrast
- **AND** it SHALL show a small eyebrow line, the uppercase white headline
  "International Digital Business Event", a lorem-style subtext paragraph,
  and a ghost "View More Details" button (translucent white background,
  1px `#7a8186` border, 5px radius, 50px height)

### Requirement: Countdown card overlapping the hero

The system SHALL render a white countdown card that overlaps the hero's
bottom edge and ticks in real time.

#### Scenario: Countdown timer

- **GIVEN** the countdown section is rendered
- **WHEN** it loads
- **THEN** a white card (`border-radius: 5px`, shadow
  `0 8px 30px 0 rgba(153,153,153,0.1)`, `margin-top: -90px`) SHALL overlap
  the hero's bottom edge, max-width ~944px, centered
- **AND** the left side SHALL show "Next Event will Start in" + a short
  paragraph
- **AND** the right side SHALL show 4 equal timer columns — days, hours,
  minutes, seconds — with 36px bold Heebo `#222222` numbers and 14px Roboto
  `#777777` capitalized labels
- **AND** the numbers SHALL count down in real time toward a fixed future
  date and never show negative values

### Requirement: Welcome section

The system SHALL render a two-column welcome section with a photo and text.

#### Scenario: Welcome content

- **GIVEN** the welcome section is rendered
- **WHEN** it loads
- **THEN** a photo SHALL sit on the left and text on the right: a "Welcome to
  Rally" heading, two paragraphs, and a "View More Details" link with a
  purple hover treatment

### Requirement: Head speakers section

The system SHALL render a light-grey (`#f9f9ff`) speakers section with 4
speaker cards.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is rendered
- **WHEN** it loads
- **THEN** a centered title "Meet Head Speakers" with a lorem subtext SHALL
  appear above a 4-up grid (stacking on smaller screens)
- **AND** each card SHALL show a photo, a name (e.g. "Ethel Davis") and a
  role (e.g. "Managing Director (Sales)")
- **AND** on hover the photo SHALL get a dark overlay and a white social-icon
  bar SHALL slide up from the bottom, and the name SHALL turn gradient
  (`#2c28b1 → #9b5cf6`) text

### Requirement: Event schedule with day tabs

The system SHALL render a schedule section with a purple gradient tab bar and
per-day talk listings.

#### Scenario: Schedule tabs and rows

- **GIVEN** the schedule section is rendered
- **WHEN** it loads
- **THEN** a centered title "Event Schedule" SHALL appear above a purple
  gradient (`#141da2 → #9b5cf6`) tab bar (5px radius) with three tabs:
  Day 01, Day 02, Day 03 — the active tab highlighted
- **AND** switching tabs SHALL swap the visible talk list
- **AND** each talk row SHALL show a small thumbnail, a time (e.g.
  "09.00 am"), a talk title (e.g. "Opening Ceremony") and a speaker line
  (e.g. "Speech by: Mark weins")

### Requirement: Venue and map section

The system SHALL render a venue section with location details and a map.

#### Scenario: Venue info

- **GIVEN** the venue section is rendered
- **WHEN** it loads
- **THEN** it SHALL show the venue name (e.g. "California, United States"),
  street (e.g. "Santa Monica Boulevard"), days/hours (e.g. "Monday to
  Wednesday", "17-19 June"), and contact info (email address + "Send us your
  query anytime!")
- **AND** a map panel (~420px tall) SHALL sit beside or below the info
  (embedded OpenStreetMap iframe or a styled placeholder — never a copied
  asset)

### Requirement: Ticket pricing cards

The system SHALL render 4 pricing cards with hover-revealed gradient buttons.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered (`background: #fafcff`)
- **WHEN** it loads
- **THEN** a centered title "Ticket Pricing" SHALL appear above 4 cards:
  Basic £39/mo · Starter £59/mo · Business £79/mo · Enterprise £99/mo, each
  with a plan name, audience subtitle, gradient-text price (36px,
  `#2c28b1 → #9b5cf6` background-clip), a 5-row feature list (RAM · Core CPU
  · SSD Storage · Transfer · Network) and a "Get Started" button
- **AND** on hover each card SHALL show a purple `#6247ea` border, the price
  turning `#6247ea`, and the gradient "Get Started" button SHALL slide up
  into view (`opacity 0 → 1`)

### Requirement: Dark footer with newsletter, Instagram and socials

The system SHALL render a dark navy (`#04091e`) footer with widget columns
and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show a "Top Products" column (Managed Website · Manage
  Reputation · Power Tools · Marketing Service links), a Newsletter column
  ("You can trust us. we only send promo offers, not a single spam." + email
  input and subscribe button), an "Instagram Feed" column (8-thumbnail flex
  grid), and social icon links
- **AND** each column title SHALL be 18px bold uppercase Heebo white
- **AND** the email input SHALL validate: submitting an invalid/empty email
  SHALL show an error; a valid email SHALL show a success confirmation and
  reset the field

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the centered bottom bar SHALL read "© 2026 Rally. All rights
  reserved." with a reworded "Made with ❤" credit line (no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Rally app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero + countdown + welcome + speakers + schedule + venue + pricing sections
  in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Rally — Event Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (hero text
  scales, countdown card stacks, speaker/pricing grids collapse to 1–2
  columns, mobile menu replaces the desktop nav, footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/rally`
      (`scripts/verify-app.sh rally` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header (transparent over hero → fixed purple gradient
      `#141da2 → #9b5cf6` bar on scroll, white "Rally" wordmark, uppercase
      links, gradient Get Tickets CTA, search icon, hamburger), hero (900px
      photo bg + dark overlay + uppercase white headline + ghost button),
      countdown (white overlapping card, 4 live columns), welcome (photo +
      text), speakers (4 cards, dark overlay + sliding white social bar +
      gradient name on hover), schedule (purple gradient Day tabs, media
      rows), venue (info + map), pricing (4 cards, hover reveal of gradient
      button + `#6247ea` accents), footer (`#04091e`, Top Products /
      Newsletter / Instagram grid / socials / copyright) match the Eventure
      preview 1:1.
- [ ] Design tokens in `@theme`: gradient stops `#141da2`, `#2c28b1`,
      `#9b5cf6`; accent purple `#6247ea`; secondary accents `#4cd3e3`,
      `#38a4ff`, `#f4e700`, `#f8b600`; headings `#222222`; body `#777777`;
      section bgs `#f9f9ff`, `#fafcff`; footer `#04091e`; Heebo (headings) + Roboto (body/buttons) via Google Fonts `<link>` in `index.html`.
- [ ] Buttons/links: ghost hero button = translucent white bg + 1px
      `#7a8186` border + 5px radius + 50px height; primary CTA + Get Tickets
      = animated 200% gradient `#2c28b1 → #9b5cf6 → #2c28b1`, 5px radius,
      50px height; pricing button = vertical `#141da2 → #9b5cf6` gradient
      with 10px bottom radius, hidden until card hover; price text =
      gradient background-clip with `/mo` span in 14px Roboto 300 `#777777`.
- [ ] Placeholder images use `picsum.photos/seed/rally-<n>/<w>/<h>` (hero
      banner, welcome photo, speaker photos, schedule thumbnails, instagram
      grid); icons from lucide-react (search, menu, x, clock/calendar,
      socials via inline SVG); no ColorLib assets copied (logo recreated as
      styled text).
- [ ] PR description states source template (ColorLib "Eventure"), preview
      URL (https://preview.colorlib.com/theme/eventure/), design tokens, and
      what differs (name, placeholders, paraphrased copy, inner pages not
      recreated).
