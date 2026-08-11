# Template: Gatherly (Bootstrap / Event Conference)

## Purpose

Gatherly is a single-page event/conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Meetup" website template (source:
https://colorlib.com/wp/template/meetup/), built under a DIFFERENT name
(Gatherly — "gather", an event gathering/conference, plus the "-ly" suffix,
matching the Booking Forms family convention Reservly/Roomzy/Roostly/Stayly/
Ridely/Triply/Innly/Lodgely/Hostly/Guestly/Skyly/Coastly; re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-11): the live preview
> `https://preview.colorlib.com/theme/meetup/` is REACHABLE (curl verified,
> HTTP 200, ~46 KB HTML) and was analyzed for this prep; the stylesheet
> `css/style.css` (~82 KB) was fetched and token-extracted. The TEMPLATES.md
> screenshot (`meetup-free-template.jpg`, 1200×946 AVIF, viewed in browser)
> matches the live DOM section-for-section.

## Design reference (replication findings)

- **Original:** ColorLib "Meetup" — page title "MeetUp - Free Bootstrap 4
  Template by Colorlib" (template page
  `https://colorlib.com/wp/template/meetup/`). Category in TEMPLATES.md:
  **Bootstrap (216)** — NOTE the item is DUPLICATED in TEMPLATES.md at 4
  line positions (lines 451, 1096, 1684, 2339), all `- [ ]`; the source is
  NOT shipped anywhere (no `[x]` row references it). The recreation brands
  itself **Gatherly** but keeps the same section structure, copy kinds and
  token palette.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/meetup/` (HTTP 200, ~46 KB). Classic
  ColorLib `ftco-` single-page event layout, 10 `<section>`s + `<footer>`:
  1. `#ftco-navbar` — `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar`
     (transparent, absolute over the hero): brand `Meet<span>Up.</span>`
     (recreation: **Gatherly.**), links Home / About / Speakers / Schedule /
     Pricing / Blog / Contact (each `#section` anchor), a `li.nav-item.cta`
     "Buy Ticket" button, and a mobile toggler (`oi oi-menu` + "Menu").
  2. `#home-section.hero.js-fullheight` — contains, in order:
     - `h3.vr` — **vertical (rotated) edge text** `<span>Welcome</span> to
MeetUp.` on the far left of the hero.
     - `#timer` — absolute bottom-right **countdown bar**: `background:
#fbb901`, `width: 100%` (40% at ≥1200px), `box-shadow: -16px -16px
38px -17px rgba(0,0,0,0.19)`, four `.time` cells (`#days`,
       `#hours`, `#minutes`, `#seconds`) each `width: 25%`, `font-size:
30px`, `color: #fff`, `border-left: 1px solid rgba(255,255,255,0.2)`
       (JS target in `js/main.js`: `new Date("21 December 2019 9:56:00
GMT+01:00")` — a hardcoded future date; the recreation picks its own
       fixed target date constant).
     - `.home-slider.owl-carousel` — TWO `.slider-item` slides, each a
       split row: right half image (`background-image: url(images/bg_1.jpg)`
       / `bg_2.jpg` + overlay), left half text: `h1` "Annual
       `<span>Conference</span> 2019`" / "Business Conference 2019", `h2`
       date "November 26-30, 2019 - 08:00am-12:00pm", and two buttons:
       `btn btn-primary py-3 px-4` "Get Ticket" + `btn btn-white py-3 px-4`
       "Watch Video".
  3. `#about-section.ftco-about.ftco-counter` — "Welcome" small label +
     "About Me" heading + long Lorem (Duden) paragraph; `.counter-wrap`
     box (`bg-primary`, `p-4 pr-5`) with `<span class="number"
data-number="50">0</span> Years Experienced` (JS counts 0→50 on
     scroll; the recreation may render the final value statically).
  4. `ftco-section.ftco-no-pb.ftco-no-pt` — full-bleed **4-up gallery
     strip**: four `.gallery.img` tiles (`images/gallery-1..4.jpg`), row
     `no-gutters`, each `col-md-6 col-lg-3` (2×2 on tablet, 4-across on
     desktop).
  5. `ftco-section.ftco-subscribe.img` — `background-image:
url(images/bg_1.jpg)` + `.overlay`; centered `heading-section-white`:
     h2 "Join Our Event" + paragraph + `.subscribe-form` (email text input
     placeholder "Enter email address" + submit "Subscribe").
  6. `#speakers-section.ftco-speakers` — **background `#0d0cb5`**; h2
     "MeetUp Speakers" + intro; 4 `.staff` cards (`col-sm-6 col-md-6
col-lg-3`): `.img-wrap` photo (`images/staff-1..4.jpg`), name split
     over two lines (John / Wilson, Robert / Wills, Mike / Smith, Adrian /
     Henderson), `.position` role (CEO, Founder / Businessman /
     Entrepreneur / Web Developer), `.ftco-social` with icon-twitter,
     icon-facebook, icon-google-plus, icon-instagram.
  7. `#schedule-section.ftco-section.bg-light` — h2 "Program Schedule" +
     intro; Bootstrap **vertical pill tabs** (`nav-pills`) — 4 day tabs
     "Day 01" … "Day 04" (dates 21–24 November 2019); per-day entries
     `.speaker-wrap.d-flex`: speaker photo (`images/person_1.jpg` etc.),
     `.time` span ("08:00AM - 10:00AM"), h2 title link ("Introduction to
     Wordpress 5.0", "Best Practices For Programming WordPress", …),
     description paragraph, `h3.speaker-name` "&mdash; Name" + `.position`
     role ("Founder of Wordpress" …).
  8. `#pricing-section.ftco-section` — h2 "Buy Tickets" + intro; FOUR
     `.pricing-entry` cards (`border: 2px solid #033fff`): **Basic
     $29.00/month**, **Standard $59.00/month**, **Premium $79.00/month**,
     **Gold $89.50/month**; feature list: Visit 4 Events (Gold: Visit 10
     Events) · Regular Seat (Gold: VIP Seat) · Free Coffee · Lunch Item
     (Gold: Free Lunch) · Free Entrance; each closes with a "Buy Ticket"
     button. `.price` — `font-weight: 900`, `font-size: 28px`, `color:
#033fff`; on card hover → `color: #fbb901` (yellow).
  9. `#blog-section.ftco-section.bg-light` — h2 "Our Blog" + intro; THREE
     `.blog-entry` cards: image (`images/image_1..3.jpg`), `.meta` (date
     "March 23, 2019" · "Admin" link · `.meta-chat` "3"), h3 title link
     ("Why Lead Generation is Key for Business Growth", …), excerpt
     paragraph.
  10. `#contact-section.ftco-section.contact-section.ftco-no-pb` — h2
      "Contact Me" + intro; LEFT column info blocks (icon + label + value):
      Address "198 West 21th Street, Suite 721 New York NY 10016", Contact
      Number "+ 1235 2355 98", Email Address "info@yoursite.com", Website
      "yoursite.com"; RIGHT column `.contact-form` (`bg-light p-4 p-md-5`):
      inputs "Your Name", "Your Email", "Subject", textarea (rows 7)
      "Message", submit `btn btn-primary py-3 px-5` "Send Message".
  11. `#map` — `ftco-section.ftco-no-pt.ftco-no-pb` with `<div id="map"
class="bg-white">` (Google-map embed; recreation uses a static map
      placeholder — no Google Maps dependency).
  12. `footer.ftco-footer` — **background `#232931`**, `padding: 7em 0`;
      FOUR `.ftco-footer-widget` columns: (1) "About MeetUp." brand +
      paragraph; (2) "Links" (Home / About / Schedule / Speakers / Contact
      - Privacy / Career / About Us / Contact Us / Buy Ticket); (3) "Have
        a Questions?" — "203 Fake St. Mountain View, San Francisco,
        California, USA", "+2 392 3929 210", "info@yourdomain.com"; (4)
        social `.ftco-footer-social` (twitter/facebook/instagram/google-plus);
        bottom copyright bar: "Copyright © … All rights reserved | This
        template is made with by Colorlib" (recreation: own credit line,
        no Colorlib link needed).
- **Visual design (TEMPLATES.md screenshot `meetup-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11 + live DOM):** modern high-energy
  conference landing. Dark photo hero (concert crowd, hands raised,
  darkened overlay) with a large bold white uppercase headline ("BUSINESS
  CONFERENCE 2019"), the date/time line, a white "Get Ticket" and an
  outlined "Watch Video" button, a rotated "Welcome" edge text on the left,
  and the signature **bright-yellow countdown box** ("258 DAYS / 09 HOURS /
  37 MINUTES / 13 SECONDS") overlapping the hero's right side. Above it a
  transparent navbar with white logo + links and a blue "Buy Ticket" pill.
  Below: an About split with a large blue square image block on the left
  and text on the right, a 4-image photo strip, a dark photo CTA band
  ("Join Our Event"), a DARK-BLUE speakers band (#0d0cb5), a light-grey
  schedule section with day tabs, a white pricing row of 4 blue-bordered
  cards, a light blog row, a contact section with info blocks + form, and a
  dark grey footer. Electric blue `#033fff` + bright yellow `#fbb901` on
  white/dark-grey neutrals; clean sans-serif (Lato) typography.
- **Section order (1:1, verified from live DOM):** navbar → hero (vr text +
  countdown timer + 2-slide carousel) → about + counter → 4-up gallery
  strip → subscribe band → speakers (dark blue) → schedule (light) →
  pricing → blog (light) → contact → map → footer.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-11):**
  - Theme/brand blue: **`#033fff`** — links (`a { color: #033fff }`),
    nav active-link underline (2px `#033fff` bar, scaleX 0→1 animation),
    nav CTA "Buy Ticket" background (`background: #033fff`, radius **5px**,
    white text, hover keeps `#033fff`), pricing card `border: 2px solid
#033fff`, `.price` color, scrolled navbar background `#033fff`.
  - Accent yellow: **`#fbb901`** — hero countdown `#timer` background;
    pricing card hover `.price` color.
  - Speakers band background: **`#0d0cb5`** (deep blue).
  - Footer background: **`#232931`** (dark grey-charcoal).
  - Bootstrap-primary button (Get Ticket / Send Message): **`#007bff`**
    (the source keeps Bootstrap's default; `.btn` base `border-radius:
2px`); white button (Watch Video): `.btn-white` (white bg + dark text).
  - Light section background (schedule, blog): `#f8f9fa` (`bg-light`).
  - Text: headings/body dark `#000` / `#212529` / `#343a40`; muted body
    `#6c757d` / `#495057`; hero light text `#fff`.
  - Font: **Lato** (`font-family: "Lato", Arial, sans-serif`; weights 400
    regular, 700/600 headings, 900 price). Google Fonts `<link>` Lato.
  - `heading-section h2`: `font-size: 40px`, `font-weight: 600`.
  - Buttons: `py-3 px-4` (Get Ticket / Watch Video), `py-3 px-5` (Send
    Message); nav CTA pill radius 5px; `.btn` radius 2px.
  - Hero: `.hero` overlay + `.js-fullheight` (100vh); timer bar
    `#fbb901`, 4 × 25% cells, 30px white text, 1px
    `rgba(255,255,255,0.2)` left cell borders, shadow `-16px -16px 38px
-17px rgba(0,0,0,0.19)`, absolute bottom-right, 40% width ≥1200px.
  - Countdown JS target (source `js/main.js`):
    `new Date("21 December 2019 9:56:00 GMT+01:00")`.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); the navbar is transparent over the hero
  and turns solid `#033fff` (blue) on scroll with a mobile hamburger;
  carousel = two slides rendered with a simple prev/next (or auto-advance
  with a documented, tested timer) — the recreation must keep BOTH slides'
  copy in the DOM; countdown = a ticking Days/Hours/Minutes/Seconds
  display computed from a FIXED future target date constant (source
  hardcodes "21 December 2019" — pick e.g. a near-future constant date and
  note it; tests use fake timers via `vi.useFakeTimers()` wrapped in
  `act()`); the counter box (50 Years Experienced) may render the final
  value statically; the map is a static/placeholder block (no Google Maps
  iframe dependency — or an inert iframe placeholder); placeholder images
  `picsum.photos/seed/gatherly-<n>/<w>/<h>` (hero slides, gallery strip,
  speakers, schedule persons, blog); social icons via inline SVG brand
  icons (lucide-react removed brand icons); document title "Gatherly —
  Event Conference Template"; brand "MeetUp"/"MeetUp." → "Gatherly"/
  "Gatherly." everywhere; nav labels (Home/About/Speakers/Schedule/
  Pricing/Blog/Contact) and copy kinds kept 1:1, Lorem text may be
  paraphrased.

Gatherly lives in `apps/gatherly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Fixed transparent navbar with brand, section links and Buy Ticket CTA

The system SHALL render a navbar fixed at the top over the hero: the brand
"Gatherly.", one anchor per section (Home, About, Speakers, Schedule,
Pricing, Blog, Contact), and a "Buy Ticket" call-to-action button, with a
mobile hamburger that expands the links.

#### Scenario: Navbar desktop state

- **GIVEN** the Gatherly page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a navbar SHALL be shown at the top, transparent over the hero
- **AND** the brand SHALL read "Gatherly." with the "Gatherly" part white
- **AND** the navbar SHALL contain links Home, About, Speakers, Schedule,
  Pricing, Blog and Contact, each anchored to its section
- **AND** a "Buy Ticket" button SHALL be shown at the right end of the
  navbar, styled with the brand blue `#033fff` background, white text and
  ~5px radius

#### Scenario: Navbar scrolled state

- **GIVEN** the user scrolls the page past the hero
- **WHEN** the navbar is scrolled
- **THEN** the navbar SHALL switch to a solid brand-blue `#033fff`
  background (source `.ftco-navbar-light.scrolled`) with white links

#### Scenario: Mobile hamburger

- **GIVEN** the Gatherly page is rendered on a viewport narrower than
  992px
- **WHEN** the page loads
- **THEN** a hamburger toggler SHALL be shown instead of the inline links
- **AND** tapping it SHALL expand/collapse the link list

### Requirement: Hero with vertical welcome text, countdown timer and two-slide carousel

The system SHALL render a full-viewport hero section containing, in order:
a rotated "Welcome to Gatherly." edge text, a yellow countdown timer bar
(Days / Hours / Minutes / Seconds), and a two-slide carousel — each slide
with a right-half image, a left-half headline + date line, a "Get Ticket"
and a "Watch Video" button.

#### Scenario: Hero structure

- **GIVEN** the Gatherly page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL span the full viewport height
- **AND** a vertical (rotated) text element reading "Welcome to Gatherly."
  SHALL be shown at the hero's left edge
- **AND** a yellow `#fbb901` countdown bar SHALL be shown at the hero's
  bottom-right with four equal cells labelled Days, Hours, Minutes and
  Seconds
- **AND** the countdown SHALL tick down from a fixed future target date
  constant, with every cell showing a two-digit number (0-padded)

#### Scenario: Carousel slides

- **GIVEN** the hero is displayed
- **WHEN** the carousel renders
- **THEN** TWO slides SHALL exist: one headed "Annual Conference 2019"
  and one headed "Business Conference 2019"
- **AND** each slide SHALL show the date line "November 26-30, 2019 -
  08:00am-12:00pm"
- **AND** each slide SHALL show a "Get Ticket" button (brand-primary
  style) and a "Watch Video" button (white style)
- **AND** exactly one slide SHALL be active at a time, with a control
  (prev/next or dots) to switch between them
- **AND** each slide SHALL pair a right-half photo (seeded placeholder)
  with the left-half text

### Requirement: About section with counter box

The system SHALL render an About section with a "Welcome" label, an
"About Me" heading, a supporting paragraph, and a blue counter box reading
"50 Years Experienced".

#### Scenario: About content

- **GIVEN** the Gatherly page is rendered
- **WHEN** the About section is displayed
- **THEN** a small "Welcome" label SHALL precede the "About Me" heading
- **AND** a paragraph of event/conference copy SHALL follow
- **AND** a solid brand-blue box SHALL show the number 50 next to the text
  "Years Experienced"

### Requirement: Full-width four-image gallery strip

The system SHALL render a full-bleed, gap-free strip of four photographic
tiles between the About section and the Subscribe band.

#### Scenario: Gallery strip

- **GIVEN** the Gatherly page is rendered
- **WHEN** the gallery strip is displayed
- **THEN** four image tiles SHALL be shown edge-to-edge (no gutters),
  two-up on tablet and four-across on desktop
- **AND** each tile SHALL use a seeded placeholder image

### Requirement: Subscribe band

The system SHALL render a photo-background subscribe band with a dark
overlay, the heading "Join Our Event", a short paragraph, an email input
and a "Subscribe" button.

#### Scenario: Subscribe band

- **GIVEN** the Gatherly page is rendered
- **WHEN** the subscribe band is displayed
- **THEN** the band SHALL use a background photo with a dark overlay and
  white centered text
- **AND** the heading SHALL read "Join Our Event"
- **AND** an email input with placeholder "Enter email address" SHALL be
  shown next to a "Subscribe" button

### Requirement: Speakers section (dark blue band) with four speaker cards

The system SHALL render a speakers band on the deep-blue `#0d0cb5`
background with the heading "Gatherly Speakers" and four speaker cards,
each with a photo, a two-line name, a role and four social icons.

#### Scenario: Speaker cards

- **GIVEN** the Gatherly page is rendered
- **WHEN** the speakers section is displayed
- **THEN** the section SHALL have the `#0d0cb5` background and white text
- **AND** the heading SHALL read "Gatherly Speakers"
- **AND** four speaker cards SHALL be shown side by side on desktop
  (2×2 on smaller screens)
- **AND** each card SHALL show a photo, a name split over two lines, a
  role (e.g. CEO, Founder / Businessman / Entrepreneur / Web Developer)
  and four social icons (Twitter, Facebook, Google Plus, Instagram)

### Requirement: Schedule section with day tabs and per-day entries

The system SHALL render a light-background schedule section with the
heading "Program Schedule", four day tabs (Day 01–Day 04), and per-day
entries each showing a speaker photo, a time range, a session title, a
description and a speaker credit with role.

#### Scenario: Day tabs and entries

- **GIVEN** the Gatherly page is rendered
- **WHEN** the schedule section is displayed
- **THEN** the section SHALL use the light `#f8f9fa` background
- **AND** four day tabs SHALL be shown (Day 01, Day 02, Day 03, Day 04,
  with dates 21–24 November 2019)
- **AND** clicking a day tab SHALL switch the visible entry list
- **AND** each entry SHALL show a speaker photo, a time range (e.g.
  "08:00AM - 10:00AM"), a session title link, a short description and a
  speaker credit "— Name" with a role

### Requirement: Pricing section with four ticket tiers

The system SHALL render a pricing section with the heading "Buy Tickets"
and four blue-bordered ticket cards (Basic, Standard, Premium, Gold), each
with a monthly price, four feature lines and a "Buy Ticket" button.

#### Scenario: Pricing cards

- **GIVEN** the Gatherly page is rendered
- **WHEN** the pricing section is displayed
- **THEN** the heading SHALL read "Buy Tickets"
- **AND** four cards SHALL be shown: Basic $29.00/month, Standard
  $59.00/month, Premium $79.00/month and Gold $89.50/month
- **AND** every card SHALL have a 2px `#033fff` border
- **AND** every card SHALL list four features (e.g. Visit 4 Events,
  Regular Seat, Free Coffee, Free Entrance — Gold: Visit 10 Events, VIP
  Seat, Free Lunch)
- **AND** the price SHALL be styled bold (weight 900, ~28px) in the brand
  blue `#033fff`
- **AND** each card SHALL close with a "Buy Ticket" button

#### Scenario: Pricing card hover

- **GIVEN** a pricing card is displayed
- **WHEN** the user hovers over the card
- **THEN** the price SHALL switch to the accent yellow `#fbb901` (source
  hover treatment)

### Requirement: Blog section with three post cards

The system SHALL render a light-background blog section with the heading
"Our Blog" and three post cards, each with an image, meta line (date ·
author · comment count), a title link and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Gatherly page is rendered
- **WHEN** the blog section is displayed
- **THEN** the heading SHALL read "Our Blog"
- **AND** three post cards SHALL be shown side by side on desktop
- **AND** each card SHALL show an image, a meta line (e.g. "March 23,
  2019 · Admin · 3"), a title link (e.g. "Why Lead Generation is Key for
  Business Growth") and an excerpt paragraph

### Requirement: Contact section with info blocks and form

The system SHALL render a contact section with the heading "Contact Me",
four info blocks (Address, Contact Number, Email Address, Website) on the
left and a contact form (Your Name, Your Email, Subject, Message, Send
Message) on the right.

#### Scenario: Contact info and form

- **GIVEN** the Gatherly page is rendered
- **WHEN** the contact section is displayed
- **THEN** the heading SHALL read "Contact Me"
- **AND** the left column SHALL show four labeled info blocks: Address,
  Contact Number, Email Address and Website with the source-style values
- **AND** the right column SHALL show a form with fields "Your Name",
  "Your Email", "Subject" and a "Message" textarea, plus a "Send Message"
  submit button

### Requirement: Map placeholder

The system SHALL render a full-width map placeholder block between the
contact section and the footer.

#### Scenario: Map block

- **GIVEN** the Gatherly page is rendered
- **WHEN** the page scrolls past the contact section
- **THEN** a full-width map block SHALL be shown (static map placeholder
  or inert embed; no external map dependency required)

### Requirement: Dark footer with four widget columns and copyright bar

The system SHALL render a dark `#232931` footer with four widget columns —
brand + about text, section links, "Have a Questions?" contact details,
and social icons — plus a bottom copyright bar.

#### Scenario: Footer content

- **GIVEN** the Gatherly page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL use the dark `#232931` background
- **AND** column one SHALL show the brand "Gatherly." and a short about
  paragraph
- **AND** column two SHALL list the section links (Home, About, Schedule,
  Speakers, Contact)
- **AND** column three SHALL be headed "Have a Questions?" with an
  address, a phone number and an email address
- **AND** column four SHALL show social icons
- **AND** a bottom bar SHALL show the copyright line with the recreation
  credit

### Requirement: Countdown and carousel timing behavior

The system SHALL implement the countdown tick with a fixed future target
date constant and testable timer logic (fake timers), and the carousel
with an active-slide state.

#### Scenario: Countdown ticking

- **GIVEN** the hero countdown is rendered with a fixed future target
  date
- **WHEN** time advances (fake timers in tests)
- **THEN** the Days/Hours/Minutes/Seconds cells SHALL decrease
  accordingly
- **AND** every cell SHALL display a 0-padded number

#### Scenario: Carousel active slide

- **GIVEN** the hero carousel is rendered
- **WHEN** the user activates the next/prev control
- **THEN** the active slide SHALL change and the other slide SHALL become
  inactive

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-gatherly`
- [ ] `scripts/verify-app.sh gatherly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the source): transparent navbar
      (brand "Gatherly.", Home/About/Speakers/Schedule/Pricing/Blog/
      Contact anchors, blue "Buy Ticket" CTA, hamburger <992px, solid
      `#033fff` on scroll) → hero (rotated "Welcome to Gatherly." edge
      text + yellow `#fbb901` countdown bar bottom-right with
      Days/Hours/Minutes/Seconds + 2-slide carousel: "Annual Conference
      2019" / "Business Conference 2019", date line, Get Ticket +
      Watch Video buttons) → About ("Welcome" label, "About Me" heading,
      paragraph, blue counter box "50 Years Experienced") → 4-up
      gap-free gallery strip → subscribe band ("Join Our Event", email
      input, Subscribe) → speakers band `#0d0cb5` ("Gatherly Speakers",
      4 cards: photo, two-line name, role, 4 social icons) → schedule
      (light bg, Day 01-04 tabs, entries with photo/time/title/desc/
      speaker credit) → pricing ("Buy Tickets", 4 cards Basic $29 /
      Standard $59 / Premium $79 / Gold $89.50, 2px `#033fff` border,
      price `#033fff` weight 900 → `#fbb901` on hover, Buy Ticket
      buttons) → blog (light bg, 3 post cards with meta + title +
      excerpt) → contact ("Contact Me", 4 info blocks + form Name/Email/
      Subject/Message/Send Message) → map placeholder → footer `#232931`
      (4 widgets + copyright bar)
- [ ] Brand color `#033fff` (blue) in `@theme` and used via Tailwind
      classes: links, nav active underline, nav CTA bg, scrolled navbar
      bg, pricing border + price
- [ ] Accent `#fbb901` (yellow): countdown bar bg + pricing hover price;
      speakers bg `#0d0cb5`; footer bg `#232931`; light sections
      `#f8f9fa`
- [ ] Lato 400/600/700/900 via Google Fonts `<link>` in `index.html`
- [ ] Buttons: Get Ticket / Send Message in brand-primary blue, Watch
      Video in white; nav CTA pill `#033fff` radius ~5px; `.btn` radius
      ~2px
- [ ] Countdown: fixed future target date constant; Days/Hours/Minutes/
      Seconds cells, 0-padded, tick with fake-timer-safe logic (tests use
      `vi.useFakeTimers()` + `act()`)
- [ ] Carousel: two slides both present in the DOM, one active, prev/next
      or dots control
- [ ] Placeholder images via `picsum.photos/seed/gatherly-<n>/<w>/<h>`;
      icons from lucide-react; inline SVG brand icons for socials
      (lucide-react has no brand icons)
- [ ] No copied assets (images, fonts, CSS); no Bootstrap/owl-carousel
      dependencies
- [ ] Map = static/inert placeholder (no Google Maps dependency)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (4 duplicate `- [ ]` rows for
      Meetup: implementer marks the row they claimed; sibling rows may be
      marked `[x]` with the same surge URL per the dup-row rule)
