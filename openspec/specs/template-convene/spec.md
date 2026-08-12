# Template: Convene (Event / Conference Template)

> **SUPERSEDED** — ColorLib "Eventure" already shipped as **rally**
> (apps/rally, PR #347, live at https://rally.free.componentdock.com,
> TEMPLATES.md lines 389/1681 marked `[x]`). Do NOT implement this spec —
> delete on next cleanup. (Annotated 2026-08-13 by stream 2 implementer after
> the Rally run detected the dup-prep via source-slug scan.)

## Purpose

Convene is a single-page conference & business-event template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Eventure" event website template (see TEMPLATES.md, Bootstrap
section, line 389; duplicate row at line 1681 in the Event section — mark
EVERY copy `[x]` when done), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is an event landing page (demo brand in the preview:
"Eventure Multi"): a transparent navbar over a full-bleed crowd/conference
photo hero with a huge white uppercase headline "International Digital
Business Event", a ghost "View More Details" button, and a white countdown
card overlapping the hero's bottom edge ("Next Event will Start in" with
days/hours/minutes/seconds boxes); a two-column welcome intro ("Welcome to
Eventure" with a photo and a gradient "View More Details" CTA); a light
`#f9f9ff` "Meet Head Speakers" section with four photo cards (name with
gradient text + role, hover social overlays); an "Event Schedule" section
with Day 01/02/03 tabs and per-day rows (thumbnail + 09.00 am time + session
title + "Speech by: …"); a venue section (map panel + white info box with
location/date/email rows); a "Ticket Pricing" section (`#fafcff` bg) with
four tier cards (Basic £39 → Enterprise £99, five feature lines each,
gradient "Get Started" button with rounded bottom); and a near-black
`#04091e` footer (Top Products links, Newsletter email form with a gradient
Subscribe button, Instagram Feed image grid, copyright bar). The design is
an indigo→purple gradient brand (`#2c28b1 → #9b5cf6`) on a clean white
layout with Roboto body text and Heebo headings.

## Design tokens (from `https://preview.colorlib.com/theme/eventure/`)

- **Brand gradient (primary CTAs):** `linear-gradient(to right, #2c28b1 0%,
#9b5cf6 51%, #2c28b1 100%)` with `background-size: 200% auto` (hover slides
  the gradient) — used by `.main_btn` (padding 0 35px), `.tickets_btn`
  (padding 0 28px), `.submit_btn`, `.sub-btn` (Subscribe). White text,
  font-size 13–14px, ~46–50px line-height, SQUARE corners (no radius).
- **Nav scrolled-state gradient:** `linear-gradient(0deg, #141da2 0%,
#9b5cf6 100%)` (applied to `.main_menu` when the page scrolls; the navbar
  starts transparent over the hero).
- **Small button gradient (`.bbtns`):** `linear-gradient(0deg, #bc2bff 0%,
#7249fb 100%)`, white 12px uppercase text, line-height 38px, radius 0.
- **Pricing button gradient (`.price_btn`):** `linear-gradient(0deg,
#141da2 0%, #9b5cf6 100%)`, white, line-height 50px, `border-radius: 0 0
10px 10px` (rounded bottom corners only).
- **Speaker-name gradient text:** `linear-gradient(to right, #2c28b1 0%,
#9b5cf6 70%)` with background-clip: text (h4 names in the team cards).
- **Ghost hero button (`.banner_btn`):** `background: rgba(255,255,255,0.1)`,
  1px solid `#7a8186` border, white 13px text, padding 0 30px, line-height
  50px, `border-radius: 5px`.
- **Fonts:** body/nav `"Roboto", sans-serif`; headings/numbers/footer titles
  `"Heebo", sans-serif`. Load both via Google Fonts `<link>` in `index.html`
  (Roboto 300/400/500, Heebo 500/700).
- **Section titles (`.main_title h2`):** Heebo 36px bold, `#222222`,
  `text-transform: uppercase`, centered, margin-bottom 15px; subtitle
  (`.main_title p`): Roboto 16px 300 `#777777`, max-width 570px, centered.
- **Headings / body:** welcome `h3` Heebo 36px bold uppercase `#222222`;
  team name `h4` Roboto 500 20px `#222222` (gradient-clipped text); team role
  p Roboto 14px `#777777`; default body `#777777` on white.
- **Nav links (`.nav-link`):** Roboto 500 12px uppercase white, line-height
  80px, padding 0; transparent navbar over the hero; gradient bar after
  scroll.
- **Countdown card (`.event_time_inner`):** white, `max-width: 944px`,
  `margin: auto; margin-top: -90px` (overlaps the hero's bottom edge),
  `border-radius: 5px`, padding 45px 0 50px; `.timer__number` Heebo bold
  36px `#222222`; `.timer__label` small lowercase text; four equal 25% boxes
  (days / hours / minutes / seconds).
- **Section backgrounds:** speakers/team `#f9f9ff`; pricing `#fafcff`;
  schedule + welcome white; footer `#04091e` with `#fff` text and footer
  titles (`footer_title` Heebo 18px bold uppercase, margin-bottom 28px).
- **Newsletter input:** white bg, `border: 1px solid transparent`, radius 0
  (square), 14px `#777777`; Subscribe button `.sub-btn` gradient.
- **Venue info box (`.box_home_details`):** white, `max-width: 457px`,
  `float: right`, padding 92px; rows are `.media` (icon + `h4` + `p`).
- **Pricing card (`.price_item`):** `border-top: 2px solid #fff`;
  `.price_text` padding 75px 0 75px 45px; `.price_btn` full-width gradient
  bar with rounded bottom corners.

## Design reference (replication findings)

- **Original:** ColorLib "Eventure" — event/conference template
  (source: https://colorlib.com/wp/template/eventure/). Listed in
  TEMPLATES.md line 389 (Bootstrap section); duplicate at line 1681 (Event
  section) — mark every copy `[x]` when done. Screenshot:
  `eventure-free-template.jpg` (1200×946, viewed in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/eventure/ (title
  "Eventure Multi"; reachable via curl). HTML saved to
  `/tmp/eventure-prep/preview.html` (27 KB); stylesheet
  `https://preview.colorlib.com/theme/eventure/css/style.css` saved to
  `/tmp/eventure-prep/style.css` (72 KB). The screenshot and preview agree:
  transparent navbar over a dark crowd-photo hero, white countdown card
  overlapping the hero bottom, indigo→purple gradient buttons. The screenshot
  only shows header + hero + countdown (it cuts off below the countdown);
  the remaining sections (welcome, speakers, schedule, venue, pricing,
  footer) come from the preview DOM.
- **Demo brand in the preview is "Eventure"** → rename to **Convene** (to
  convene = to gather for an event; text logo "CONVENE" recreated as styled
  text, never the copied `img/logo.png`).
- **Buttons / links (from style.css):** see Design tokens above — gradient
  `.main_btn`/`.tickets_btn`/`.sub-btn` (square), ghost `.banner_btn` (5px
  radius, translucent white bg + `#7a8186` border), `.bbtns` small gradient,
  `.price_btn` bottom-rounded gradient bar.
- **Section structure (1:1 from the preview DOM):**
  1. Navbar `div.main_menu > nav.navbar` — transparent over the hero;
     `div.container.box_1620`: `a.navbar-brand.logo_h` (left, image logo —
     recreate as text "CONVENE") · `button.navbar-toggler` (3 `.icon-bar`
     spans, hamburger) · `ul.nav.navbar-nav.menu_nav.ml-auto` (right): Home
     (`.active`) · About · Speakers · Pages ▾ (dropdown: Schedule, Venue,
     Pricing, Elements) · Blog ▾ (dropdown: Blog, Blog Details) · Contact ·
     gradient `a.tickets_btn` "Get Tickets" (padding 0 28px). Nav links
     Roboto 500 12px uppercase white, line-height 80px, ~45px gaps; scrolled
     state: gradient `#141da2 → #9b5cf6`.
  2. Hero `section.home_banner_area` — `min-height: 900px`, full-bleed
     `img/banner/home-banner.jpg` (crowd/conference photo), centered
     `.banner_content`: `h2` "International Digital<br>Business Event"
     (uppercase, white, bold) · `p` lorem · ghost `a.banner_btn` "View More
     Details".
  3. Countdown `section.event_time_area` (padding-bottom 120px) — white card
     `.event_time_inner` overlapping the hero (`margin-top: -90px`,
     max-width 944px, radius 5px): left `col-lg-6 .event_text` (padding-left
     65px): `h3` "Next Event will Start in" + `p` lorem; right `col-lg-6
.timer_inner`: `div#timer.timer` with four `.timer__section`
     (days/hours/minutes/seconds): `.timer__number` (empty in HTML — filled
     by JS) + `.timer__label`. Countdown targets the next event start
     (fixed future date, computed at runtime).
  4. Welcome `section.welcome_area.pad_btm` — `.welcome_inner.row`:
     `col-lg-5 .welcome_img` (`img/welcome-1.jpg` photo) · `col-lg-6
offset-lg-1 .welcome_text`: `h3` "Welcome to Eventure" (reword to
     "Welcome to Convene") · 2 `p` lorem · gradient `a.main_btn` "View More
     Details".
  5. Speakers `section.team_area.p_120` — background `#f9f9ff`;
     `.main_title`: `h2` "Meet Head Speakers" + `p` sub; `.price_inner`-style
     row of 4 `col-lg-3 col-sm-6 .team_item`: `.team_img` photo with hover
     social overlay (twitter/facebook/linkedin — inline SVG brand icons,
     NOT lucide) · `.team_name` (margin-top 20px): `h4` name (gradient text:
     "Ethel Davis" → paraphrase e.g. "Ethan Cole") + `p` role ("Managing
     Director (Sales)").
  6. Schedule `section.event_schedule_area.p_120` — `.main_title`: `h2`
     "Event Schedule" + `p` sub; tabs Day 01 / Day 02 / Day 03 (`.nav` tab
     pills; active tab gradient); each `.tab-pane` has ~5 `.media` rows:
     `div.d-flex` thumbnail (`img/schedule-1.jpg` — 60×60-ish rounded) +
     `.media-body`: `h5` time ("09.00 am") · `h4` session title ("Opening
     Ceremony") · `p` "Speech by: Mark weins". Paraphrase session titles but
     keep time/title/speaker row shape.
  7. Venue `section.home_map_area` — `div#mapBox2.mapBox2` (Google Map,
     `data-lat="40.701083" data-lon="-74.1522848"` — New York; replace with
     a map-style placeholder image, never embed a real map) + `.home_details
     > .container > .box_home_details`(white, max-width 457px, float right,
padding 92px) with 3`.media`rows:`i.lnr.lnr-home`+`h4`"California,
United States" +`p`"Santa monica bullevard" ·`i.lnr.lnr-clock`+`h4`"Monday to Wednesday" +`p`"17-19 June, 218" ·`i.lnr.lnr-envelope`
     - `h4` "support@colorlib.com" + `p` "Send us your query anytime!"
       (use a neutral placeholder email; keep the address/date rows).
  8. Pricing `section.price_area.p_120` — background `#fafcff`; `.main_title`:
     `h2` "Ticket Pricing" + `p` sub; `.price_inner.row.m0`: 4 `col-lg-3
col-sm-6.p0 .price_item` (`border-top: 2px solid #fff`): `.price_text`
     (padding 75px 0 75px 45px): `h3` tier (Basic / Starter / Business /
     Enterprise) · `h5` subtitle (Individuals/Freelancers · Small Companies ·
     Medium Companies · Large Companies) · `h2` price (`£39`/`£59`/`£79`/
     `£99` + `<span>/mo</span>`) · `ul.list` of 5 `li a` features (source
     uses hosting-plan copy "RAM 1 GB / Core CPU 1 / SSD Storage 20 GB /
     Transfer 1 TB / Network In 40 Gb" — paraphrase to ticket-style
     features, e.g. "Full conference access / All workshop sessions …",
     keeping 5 lines) + gradient `a.price_btn` "Get Started" (bottom radius
     10px).
  9. Footer `footer.footer-area.p_120` — background `#04091e`, white text:
     `row` of columns: (1) `.single-footer-widget.tp_widgets` — `h6`/`p`
     `.footer_title` "Top Products" + 4 links (Managed Website · Manage
     Reputation · Power Tools · Marketing Service); (2) `.single-footer-widget
.news_widgets` — `.footer_title` "Newsletter" + text "You can trust us.
     we only send promo offers, not a single spam." + `.input-group` email
     input + gradient "Subscribe" button (`.sub-btn`); (3)
     `.single-footer-widget.instafeed` — `.footer_title` "Instagram Feed" +
     grid of square images (`img/instagram/Image-07.jpg` …). Then
     `.footer-bottom` copyright bar: "Copyright © All rights reserved | This
     template is made with by Colorlib" → reword for Convene and replace the
     ColorLib credit with a link to https://www.componentdock.com/
     (mandatory, per AGENTS.md).
- **Inner pages:** the original ships separate pages (about-us.html,
  speakers.html, schedule.html, venue.html, price.html, elements.html,
  blog.html, single-blog.html, contact.html) and the nav targets them — NOT
  required; recreate the single index page only (nav links become scroll
  anchors `#about`/`#speakers`/`#schedule`/`#venue`/`#pricing` or dead
  anchors `#`). The Pages and Blog dropdowns may be kept as static
  dropdowns.
- **Logo is an image asset** (`img/logo.png`) — recreate as styled text
  ("CONVENE").
- **Hero is a static centered headline** (no slider). The countdown timer is
  JS-driven — implement as a real countdown to a fixed future target date
  (deterministic in tests; see test note below).

## Requirements

### Requirement: Gradient navbar with text logo, links and tickets CTA

The system SHALL render a fixed navbar that starts transparent over the hero
and turns into the indigo→purple gradient on scroll, with a text logo, nav
links, two dropdowns, and a "Get Tickets" CTA.

#### Scenario: Desktop navbar

- **GIVEN** the Convene app is rendered
- **WHEN** the page loads at the top
- **THEN** the navbar SHALL be transparent over the hero and span the full
  width at the very top
- **AND** the left side SHALL show the brand as styled text "CONVENE"
  (recreated text — never a copied image asset)
- **AND** the right side SHALL list Home (active) · About · Speakers · Pages
  · Blog · Contact as white uppercase Roboto 500 12px links
- **AND** a gradient "Get Tickets" button (square corners, padding 0 28px)
  SHALL sit right of the menu

#### Scenario: Scrolled navbar and dropdowns

- **GIVEN** the navbar is rendered
- **WHEN** the page is scrolled past the hero
- **THEN** the navbar background SHALL be the brand gradient
  (`#141da2 → #9b5cf6`)
- **AND** hovering "Pages" SHALL open a dropdown listing Schedule, Venue,
  Pricing, Elements
- **AND** hovering "Blog" SHALL open a dropdown listing Blog and Blog
  Details

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger toggler is tapped
- **THEN** a stacked menu panel SHALL open with `aria-expanded` reflecting
  the open state

### Requirement: Hero with centered headline and ghost CTA

The system SHALL render a full-height hero photo with a centered white
uppercase headline and a ghost outline button.

#### Scenario: Hero render

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-width background photo (crowd/conference
  subject, `picsum.photos/seed/convene-<n>/...` — implementer must screen
  the seed per the seed-screening process) at ~900px min-height with a dark
  overlay for text contrast
- **AND** the centered headline "International Digital Business Event"
  SHALL be white, bold, uppercase
- **AND** a ghost "View More Details" button SHALL render with a
  translucent white background, 1px `#7a8186` border and 5px radius

### Requirement: Countdown card overlapping the hero

The system SHALL render a white countdown card overlapping the hero's bottom
edge with a live days/hours/minutes/seconds timer.

#### Scenario: Countdown render

- **GIVEN** the countdown section is rendered
- **WHEN** the page loads
- **THEN** a white card (max-width 944px, 5px radius, negative top margin so
  it overlaps the hero bottom) SHALL show "Next Event will Start in" on the
  left and four timer boxes (days / hours / minutes / seconds) on the right
- **AND** the numbers SHALL be Heebo bold 36px `#222222` and update from a
  fixed future target date
- **AND** when the timer is tested with fake timers (wrapped in `act()`),
  the displayed units SHALL count down correctly

### Requirement: Welcome intro section

The system SHALL render a two-column welcome section with a photo, heading,
copy and a gradient CTA.

#### Scenario: Welcome render

- **GIVEN** the welcome section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show a photo (placeholder image)
- **AND** the right column SHALL show the uppercase heading "Welcome to
  Convene", two paragraphs of lorem-style copy and a gradient "View More
  Details" button (square corners, padding 0 35px)

### Requirement: Meet Head Speakers section

The system SHALL render a light `#f9f9ff` speaker section with four photo
cards with gradient-text names, roles and hover social overlays.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Meet Head Speakers" (centered,
  Heebo 36px bold uppercase `#222222`) with a subtitle paragraph
- **AND** four cards SHALL render in a 4-column row, each with a speaker
  photo, a name `h4` styled with the brand gradient text (`#2c28b1 →
#9b5cf6`) and a role `p` in `#777777`
- **AND** on hover each photo SHALL reveal social icon overlays (inline SVG
  brand icons — twitter, facebook, linkedin)

### Requirement: Event Schedule with day tabs

The system SHALL render a schedule section with Day 01/02/03 tabs and
per-day session rows (thumbnail, time, title, speaker).

#### Scenario: Schedule tabs and rows

- **GIVEN** the schedule section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Event Schedule" with a subtitle
  paragraph
- **AND** tabs "Day 01", "Day 02", "Day 03" SHALL be shown with the active
  tab styled with the brand gradient
- **AND** the active day SHALL list at least five rows, each with a
  thumbnail image, a time `h5` (e.g. "09.00 am"), a session title `h4` and
  a "Speech by: …" line
- **AND** switching tabs SHALL change the visible day's rows

### Requirement: Venue section with map and info box

The system SHALL render a venue section with a map panel (placeholder) and a
white info box with location, date and contact rows.

#### Scenario: Venue render

- **GIVEN** the venue section is rendered
- **WHEN** it loads
- **THEN** the left side SHALL show a map-style placeholder image (the
  original embeds a Google Map — replace with a static placeholder, never
  embed the live map)
- **AND** the right side SHALL show a white box with three icon rows:
  location ("California, United States" / "Santa monica bullevard"),
  schedule ("Monday to Wednesday" / "17-19 June"), and email (a neutral
  placeholder address / "Send us your query anytime!")
- **AND** each row SHALL pair an icon with an `h4` label and a `p` detail

### Requirement: Ticket Pricing section

The system SHALL render a `#fafcff` pricing section with four tier cards
(price, tagline, five features, gradient CTA with rounded bottom).

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **WHEN** it loads
- **THEN** the section title SHALL read "Ticket Pricing" with a subtitle
  paragraph
- **AND** four cards SHALL render in a 4-column row: Basic (£39),
  Starter (£59), Business (£79), Enterprise (£99), each with a tagline
  (Individuals/Freelancers · Small Companies · Medium Companies · Large
  Companies), a `/mo` price suffix and a five-line feature list
- **AND** each card SHALL end with a full-width gradient "Get Started"
  button with rounded bottom corners (10px)
- **AND** the source's hosting-plan feature copy SHALL be paraphrased to
  ticket-style features (same five-line shape)

### Requirement: Dark footer with links, newsletter and Instagram feed

The system SHALL render a near-black `#04091e` footer with a Top Products
link list, a Newsletter email form, an Instagram Feed image grid and a
copyright bar linking Component Dock.

#### Scenario: Footer render

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the first column SHALL show "Top Products" with four links
  (Managed Website · Manage Reputation · Power Tools · Marketing Service)
- **AND** the second column SHALL show "Newsletter" with a short trust line,
  an email input and a gradient "Subscribe" button
- **AND** the third column SHALL show "Instagram Feed" as a grid of square
  images
- **AND** the copyright bar SHALL read "© 2026 Convene — All rights
  reserved | This template is made with ❤ by
  [Component Dock](https://www.componentdock.com/)" (the Component Dock link
  is mandatory — the ColorLib credit is never kept)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-convene`
- [ ] Scaffold `apps/convene` (package `@free-react-templates/convene`,
      homepage `https://convene.free.componentdock.com`, `public/CNAME` =
      `convene.free.componentdock.com`); workspace registered in
      package-lock.json
- [ ] Tests written FIRST (TDD) mirroring every Gherkin scenario above;
      100% lines/functions/branches/statements via
      `scripts/verify-app.sh convene` (typecheck + lint + knip + fallow +
      coverage + build)
- [ ] No ColorLib reference anywhere in `apps/convene` (comments included)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via `https://picsum.photos/seed/convene-<n>/<w>/<h>`
      (hero seed screened for a crowd/dark subject); Google Fonts via
      `<link>`; brand icons as inline SVG (lucide-react has no brand icons)
- [ ] Countdown uses a fixed future target date; timer tests wrapped in
      `act()` with fake timers
- [ ] PR description states: source (ColorLib "Eventure"), preview URL,
      design tokens, what differs (rename, placeholder images, map
      replaced, paraphrased pricing copy)
- [ ] After merge: mark TEMPLATES.md lines 389 AND 1681 `[x]` with surge
      URL `https://convene.free.componentdock.com`, run `npm run
  readme:status`, push
