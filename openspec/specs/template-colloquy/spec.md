# Template: Colloquy (Event — Conference)

## Purpose

Colloquy is a single-page conference/event website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Conference" event website template design (see
TEMPLATES.md, Event category, line 511 — duplicate row at line 1688 under
another category, same template, ONE app only), built under a different name
("Colloquy" — an academic conference/meeting, an event-brand word) with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "The Conference" — free event/conference HTML
  template (source: https://colorlib.com/wp/template/the-conference/). Single
  page: white header over the hero (logo + date tagline + social icons +
  nav: Home / About Us / Speakers / Events / News / Contact + search icon +
  blue "Buy Tickets Now!" button), full-viewport parallax hero (date, big
  title, location, blurb, two blue buttons), six intro cards (Conference
  Program / Supersessions / The Speakers / Explore Sessions / Directory /
  Speakers Schedule), an "events calendar" list (4 schedule rows with time +
  icon + title + meta), a parallax pricing section ("Choose a plan", 3
  plans), a parallax CTA band ("Get your tickets now!"), and a dark footer
  (about + social + link columns + copyright bar).
- **Live preview REACHABLE (HTTP 200) — SLUG HAS NO HYPHEN:**
  `https://preview.colorlib.com/theme/theconference/`. The hyphenated URL
  (`/theme/the-conference/`) returns 404; products.js registers the slug as
  `theconference` (Event category, preview `2018/06/theconference-demo-preview.jpg`).
  DOM fetched (`/tmp/theconference.html`, 22,900 bytes) + stylesheet
  `styles/main_styles.css` (`/tmp/theconference-main.css`, 22,761 bytes) +
  responsive.css + TEMPLATES.md screenshot (`theconference-free-template.jpg`,
  1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** professional conference
  aesthetic on white, brand-blue `#4867c0` + light-blue `#329fec` gradient
  accents, Raleway. Screenshot shows: white top header with a blue geometric
  crystal logo mark + "The Conference." wordmark, small date under the logo,
  social icons right, nav strip with "Home" highlighted dark blue, full-width
  hero photo of an audience at a conference (hands raised) with white
  left-aligned text — "August 25, 2018", big "2018 Public Policy Conference"
  title, "Miami Marina Bay, FL" location, blurb paragraph — and two blue
  rectangular buttons ("Buy Tickets Now!" darker, "Find out more" lighter).
  Below, the intro grid (6 image cards) starts a clean white content area.
  Source copy is placeholder/Lorem — paraphrase freely, keep the same content
  kinds (nav links, date + title + location + blurb + CTAs, card title +
  blurb, schedule time + title + meta, plan name + price + feature list,
  footer link lists).

## Design tokens (from `styles/main_styles.css` of the live preview)

- **Brand blue:** `#4867c0` — logo text (34px/500), button gradient start,
  active nav, intro-card hover overlay, `.pricing_item::after` 4px top bar,
  full-screen mobile menu bg.
- **Light blue (gradient partner):** `#329fec`. Buttons and fills use the
  **blue gradient** `linear-gradient(to right, #4867c0, #329fec)`:
  `.button::before` (205×52 header/home/CTA buttons, animated slide),
  `.intro_item:hover .intro_body::after` (full-card overlay),
  `.pricing_item_mid` (middle plan full-bleed gradient, white text),
  `.menu` (mobile full-screen overlay). A `.button::before` variant repeats
  `#4867c0 → #329fec → #4867c0` for the moving shimmer.
- **White:** `#FFFFFF` — hero text, button text (`.button a`, 14px/500),
  intro text on hover, `.pricing_price`/`.pricing_level` on the middle plan,
  menu text, logo_sub.
- **Ink/text:** `#4c4c4c` — body/card text (`.intro_title a` 24px/500,
  `.calendar_item_time div:first-child` 30px/500, `.calendar_item_text
div:first-child` 18px/500, `.pricing_price` 60px, `.pricing_level` 14px
  uppercase, `.pricing_button a` 14px/600). Greys: `#888888` (calendar meta
  16px/14px), `#bbbbbb` (footer/about muted text), `#a5a5a5`, `#929191`,
  `#a09fa1`.
- **Light backgrounds/borders:** `#f3f7f9` (`.intro_item` card bg),
  `#f0f2f6` (`.calendar_container` bg), `#e9eef2` (`.header_nav` top border
  1px).
- **Orange accent:** `#ff8416` — `.pricing_info` 19×19px circular info badge
  (radius 50%) after the plan feature list.
- **Footer darks:** `#0c081d` (`.footer` bg), `#050210` (`.footer_extra`
  copyright bar bg).
- **Fonts:** `'Raleway', sans-serif` (300–900) via Google Fonts
  `@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800,900')`
  — load via `<link>` in `index.html`.
- **Buttons (`.button`):** width 205px, height 52px, text-center, 14px/500
  white text; rectangular (NO border-radius; only `.pricing_info` is 50%);
  `.button::before` blue-gradient animated fill. Variants: `.header_button`
  (nav, margin-left 26px), `.home_button` (hero; two in `.home_buttons`,
  margin-top 58px, 10px gap), `.cta_button` (centered, margin-top 27px),
  `.pricing_button` (180×54, white bg, `#4c4c4c` 14px/600 text; on the middle
  plan transparent with white text).
- **Header:** `.header` absolute over hero, white bg. `.header_top`: logo
  (`.logo_image` + `.logo_text` "Colloquy" 34px/500 `#4867c0`, line-height
  0.94; `.logo_sub` tagline "August 25, 2018 - Miami Marina Bay" — white on
  dark, `#4c4c4c`-ish on white) + `.header_social` social icons right +
  `.hamburger` (hidden desktop). `.header_nav` border-top 1px `#e9eef2`:
  `.main_nav` links (Home / About Us / Speakers / Events / News / Contact),
  `.header_extra`: `.header_search` icon (padding 10px) + `.header_button`
  "Buy Tickets Now!" (205×52 blue gradient).
- **Hero (`.home`, 100vh):** parallax background image (source
  `images/index.jpg` via `data-image-src` — use a screened picsum seed of a
  conference/audience scene); `.home_date` 18px/700 white, `.home_title`
  60px/500 white (line-height 1.2), `.home_location` 36px/500 white,
  `.home_text` 14px/500 white (line-height 2.14), `.home_buttons` margin-top
  58px with two 205×52 gradient buttons: "Buy Tickets Now!" + "Find out
  more".
- **Intro (`.intro`, white bg, padding 115px 144px 67px):** 6 `.intro_item`
  cards, `width: calc((100% - 60px) / 3)` (3-col grid, 2 rows, 48px row gap),
  bg `#f3f7f9`: `.intro_image` (full-width photo) + `.intro_body` (padding
  39px left, 33px top, 39px bottom): `.intro_title a` 24px/500 `#4c4c4c` +
  `.intro_subtitle` (grey → white). Hover: `.intro_body::after` blue-gradient
  full-card overlay (opacity 1) + title/subtitle white. Titles: Conference
  Program, Supersessions, The Speakers, Explore Sessions, Directory, Speakers
  Schedule.
- **Calendar (`.calendar`, `.calendar_container` bg `#f0f2f6`, padding 115px
  141px 111px):** `.calendar_title` 18px/500 uppercase + 27×25 icon
  (calendar glyph — lucide `Calendar`), "22 april events calendar". 4
  `.calendar_item` rows (`.calendar_items` padding 55px 0 61px): left
  `.calendar_item_time` (margin-left 74px; div 30px/500 `#4c4c4c` time +
  14px/500 "08 AM - 04 PM"), center 27×25 icon, right `.calendar_item_text`
  (margin-left 111px; 18px/500 `#4c4c4c` venue/title, 16px `#888888` event
  name, 14px `#888888` "Speaker: …"). Data: 14:00 Auditorium Business 101 /
  15:00 Auditorium About technology / 17:00 Auditorium Conference calls /
  20:00 Auditorium Drinks and dinner — all "08 AM - 04 PM Speaker: Daniel
  Hill".
- **Pricing (`.pricing`, parallax bg `images/pricing.jpg`, padding 87px 0
  73px):** `.pricing_section_title` "Choose a plan" + 3 `.pricing_item` white
  cards (text-center, padding 57px 0 70px, `::after` 4px blue-gradient top
  bar; middle `.pricing_item_mid` full gradient bg + white text):
  `.pricing_level` 14px uppercase (Beginner / recommended / Professional —
  NOTE: the source's middle-plan label is literally "recommended"; keep or
  rename to "Standard" and note the deviation in the PR), `.pricing_price`
  60px (`Free` / `$29 90` / `$59 90`), `.pricing_list` (margin-top 59px, 97px
  on mid): 3 Conference Tickets, Vip Table Drinks, Special PASS, VIP Dinner,
  `.pricing_info` 19px `#ff8416` circle (margin-top 34px), `.pricing_button`
  "Order plan" (180×54, white bg / transparent on mid).
- **CTA (`.cta`, parallax bg `images/cta_1.jpg`, padding 105px 0 101px):**
  `.cta_title` 48px/400 white "Get your tickets now!" + `.cta_button` "Find
  out more".
- **Footer (`.footer`, bg `#0c081d`):** `.footer_content` (padding 108px 0
  115px): `.footer_about` (logo + text 14px `#bbbbbb`-ish + `.footer_social`
  with `.footer_social_title` "Follow us on Social Media" + `.footer_social_list`
  social icon links, margin-left 42px), two `.footer_links` columns (About
  Us / Services / Speakers / Event Dates and Information / Calendar /
  Logistics / Our Partners / Testimonials / Price Plans / News / Contact),
  `.footer_extra` (bg `#050210`): copyright bar.
- **Mobile menu (`.menu`, hidden on desktop):** fixed full-screen
  `100vw/100vh` overlay, blue gradient `#4867c0 → #329fec`, `.menu_content`
  centered column: `.menu_logo` + 6 `.menu_item` links (3px gap) +
  `.menu_close` (21×3px white bar, top 9px) + `.menu_social` + `.menu_social_title`.
- **Placeholder images:** `https://picsum.photos/seed/colloquy-<n>/<w>/<h>`.
  Subject-critical photos (hero conference audience, 6 intro card images,
  pricing/CTA parallax bands) MUST be screened per the seed-screening method
  (pixel metric + browser verify) — pick seeds that provably render
  conference/audience/stage scenes, and pin the verified seeds in the PR +
  this spec.

## Requirements

### Requirement: Header — top bar and navigation

The system SHALL render a white header overlaid on the hero with a top row
(logo mark + "Colloquy" wordmark 34px/500 `#4867c0` + tagline "August 25,
2018 - Miami Marina Bay" + social icons right) and a nav strip (1px `#e9eef2`
top border) with links Home / About Us / Speakers / Events / News / Contact,
a search icon, and a blue-gradient "Buy Tickets Now!" button (205×52, white
14px/500 text). On mobile a hamburger SHALL open the full-screen blue-gradient
overlay menu with the same links, a close control, and social icons.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the wordmark + tagline, the social icons, the nav links,
  and the "Buy Tickets Now!" button

#### Scenario: Mobile overlay menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a full-screen blue-gradient menu with the nav links, close
  control, and social icons appears and can be closed

### Requirement: Hero

The system SHALL render a full-viewport (100vh) hero with a parallax
conference/audience background photo, white left-aligned content: date
"August 25, 2018" (18px/700), title "2018 Public Policy Conference"
(60px/500), location "Miami Marina Bay, FL" (36px/500), a blurb paragraph
(14px/500, line-height 2.14), and two 205×52 blue-gradient rectangular
buttons "Buy Tickets Now!" and "Find out more".

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the date, title, location, blurb, and the two CTA buttons

### Requirement: Intro cards

The system SHALL render a white section (padding 115px 144px 67px) with six
`#f3f7f9` cards in a 3-column grid (2 rows, 48px gap), each with a photo and
a body (padding-left 39px) containing a 24px/500 `#4c4c4c` title and a grey
subtitle: Conference Program, Supersessions, The Speakers, Explore Sessions,
Directory, Speakers Schedule. On hover the card SHALL fill with the blue
gradient (`#4867c0 → #329fec`) and turn title + subtitle white.

#### Scenario: Intro grid renders

- **GIVEN** the intro section is rendered
- **WHEN** it is inspected
- **THEN** it shows six cards with the titles Conference Program,
  Supersessions, The Speakers, Explore Sessions, Directory, Speakers Schedule

#### Scenario: Intro card hover

- **GIVEN** an intro card is rendered
- **WHEN** it is hovered
- **THEN** its background becomes the blue gradient and its text turns white

### Requirement: Events calendar

The system SHALL render a `#f0f2f6` calendar section (padding 115px 141px
111px) with the title "22 april events calendar" (18px/500 uppercase + a
27×25 calendar icon) and four schedule rows, each with a time (30px/500
`#4c4c4c` + 14px "08 AM - 04 PM"), a small icon, and text (18px/500 `#4c4c4c`
venue, 16px `#888888` event name, 14px `#888888` "Speaker: Daniel Hill"):
14:00 Auditorium Business 101 / 15:00 Auditorium About technology / 17:00
Auditorium Conference calls / 20:00 Auditorium Drinks and dinner.

#### Scenario: Calendar rows

- **GIVEN** the calendar section is rendered
- **WHEN** it is inspected
- **THEN** it shows the title and four schedule rows with time, venue,
  event name, and speaker meta

### Requirement: Pricing plans

The system SHALL render a parallax pricing section ("Choose a plan") with
three white cards, each topped with a 4px blue-gradient bar: Beginner
(Free), the middle plan ($29 90 — full blue-gradient background + white
text in the source, label "recommended"), and Professional ($59 90). Each
plan SHALL list the features 3 Conference Tickets, Vip Table Drinks, Special
PASS, VIP Dinner, show a 19px `#ff8416` circular info badge, and an "Order
plan" button (180×54, white bg / transparent on the middle plan).

#### Scenario: Plan cards render

- **GIVEN** the pricing section is rendered
- **WHEN** it is inspected
- **THEN** it shows three plans with names, prices (Free / $29.90 /
  $59.90), the four feature lines, and Order plan buttons, the middle plan
  highlighted with the blue gradient

### Requirement: CTA band

The system SHALL render a parallax CTA section with the white 48px/400
headline "Get your tickets now!" and a centered "Find out more" button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline and the Find out more button

### Requirement: Footer

The system SHALL render a dark footer (bg `#0c081d`) with an about column
(wordmark + text + "Follow us on Social Media" title + social icon links),
two link columns (About Us / Services / Speakers / Event Dates and
Information / Calendar / Logistics / Our Partners / Testimonials / Price
Plans / News / Contact), and a copyright bar (bg `#050210`) reading
"Copyright © <year> All rights reserved | This template is made with ♥ by
**Component Dock**" where "Component Dock" links
https://www.componentdock.com/ (replacing the source's Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the about text, social links, the two link columns, and
  the copyright bar

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-colloquy/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/colloquy`, package `@free-react-templates/colloquy`, no
      ColorLib references in app code (grep for colorlib/The Conference in apps/colloquy)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh colloquy`
- [ ] Section order matches the source: header (top row + nav) → hero →
      intro (6 cards) → events calendar (4 rows) → pricing (3 plans) → CTA →
      footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #4867c0`,
      `--color-brand-light: #329fec`, `--color-ink: #4c4c4c`,
      `--color-meta: #888888`, `--color-card: #f3f7f9`,
      `--color-calendar: #f0f2f6`, `--color-border: #e9eef2`,
      `--color-accent: #ff8416`, `--color-footer: #0c081d`,
      `--color-footer-extra: #050210`; Raleway Google Fonts `<link>` in
      `index.html`
- [ ] Header: white over hero, wordmark + tagline + socials, nav with 6
      links + search icon + blue "Buy Tickets Now!" button; mobile
      full-screen blue-gradient overlay menu
- [ ] Hero: 100vh, parallax audience photo, date / 60px title / 36px
      location / blurb, two 205×52 blue-gradient buttons (Buy Tickets Now! /
      Find out more)
- [ ] Intro: 6 `#f3f7f9` cards (3-col, 2 rows), 24px titles, hover → blue
      gradient + white text
- [ ] Calendar: `#f0f2f6` section, "22 april events calendar" title + icon,
      4 rows (time + icon + venue/event/speaker)
- [ ] Pricing: parallax band, 3 white cards with 4px blue top bar, middle
      plan full gradient + white text (Free / $29.90 / $59.90), 4 features +
      orange info circle + Order plan buttons
- [ ] CTA: parallax band, "Get your tickets now!" 48px + Find out more
      button
- [ ] Footer: `#0c081d` bg, about + socials + 2 link columns, `#050210`
      copyright bar with Component Dock link
- [ ] Placeholder images via `https://picsum.photos/seed/colloquy-<n>/<w>/<h>`,
      subject-screened (conference/audience/stage) per the seed-screening
      method; icons from `lucide-react` + inline SVG brand icons for socials
      (lucide removed brand icons)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/theconference/` — NO hyphen), design
      tokens, diffs (name, placeholder images, middle-plan label
      "recommended" kept or renamed, parallax via CSS background-attachment
      or fixed-position bg)
