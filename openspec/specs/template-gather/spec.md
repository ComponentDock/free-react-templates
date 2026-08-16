# Template: Gather (Conference / Event Template)

## Purpose

Gather is a single-page conference / event website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Evento" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Evento" — conference / event website template
  (source: https://colorlib.com/wp/template/evento/).
  TEMPLATES.md has **THREE copies** of this item (line 1003 — Business
  category, line 1678 — Event category, line 2048 — Landing Page category;
  mark ALL THREE `[x]` when done). Neighbouring-but-different slugs
  (eventotemplate, eventcon, eventz, eventalk, eventor→podium) must NOT be
  confused with this one.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/evento/
  (HTTP 200, ~33.6 KB rendered DOM, title "Evento - Event Html Template").
  Stylesheets: `assets/css/main.css` (37.4 KB, extracted) + bootstrap.min /
  font-awesome / et-line / ionicons / owl.carousel / owl.theme / animate.
  Fonts: Google Fonts `@import` in main.css — **'Montserrat'** (400, 500,
  700, 900) used for headings AND body (the whole template is Montserrat) —
  recreate with Google Fonts `<link>`s. jQuery + bootstrap + owl.carousel +
  a JS countdown drive the loader, hero cover slider (3 slides with numbered
  dots), countdown timer, and mobile slide-down menu.
- **Screenshot:** `evento-free-template.jpg` (TEMPLATES.md lines 1003 /
  1678 / 2048) — verified live in a browser (vision analysis, full page):
  dark nav bar (script-style white "Evento" wordmark with a red dot + small
  uppercase white links Home / Speakers / Events / News / Contact + search
  icon); hero = dark concert-crowd photo bathed in purple/blue stage light
  with hand-drawn red + cyan doodle shapes, big white "PREPARE YOURSELF FOR
  THE" over a huge RED "CONFERENCE", white date line "12-14 FEBRUARY 2018 -
  LOS ANGELES, CA.", a red pill "BUY TICKETS NOW" button, and a numbered
  white pill (1·2·3) pagination at the hero's bottom edge; below: a stark
  WHITE four-column info bar (Date / Location / Speakers / Tickets icons);
  then a DARK countdown section ("Count until the big event"); footer dark.
- **Visual design (from DOM + CSS tokens + live computed styles + rendered
  screenshot):** energetic dark-mode music/tech-conference aesthetic —
  white/dark page on light sections, **brand red `#f50136`** everywhere
  (hero XL word, buttons, countdown numbers, price ribbon, event-table
  header, section-title markers, nav hover), near-black `#18181c` accents
  (button hover, speaker name strip, price digits), light-gray `#f0f2f6`
  panels (partners section, price boxes), and a dark-purple footer family
  (`#0b031b` / `#1f1039` / `#080113`). All buttons are PILL-shaped
  (`border-radius: 50px`). The demo brands itself "Evento"; the recreation
  uses the NEW name **Gather** with a script-style white wordmark (red dot)
  in the header.

## Design tokens (from assets/css/main.css + live computed styles)

| Token          | Value                                                                                                                                                                                                                                                       | Where                                                                                                                                                                                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand red      | `#f50136`                                                                                                                                                                                                                                                   | hero XL "conference" text (`.cover-xl-text` 90px weight 900 uppercase), `.btn-primary` bg + border, countdown numbers (`.counter` 48px weight 600), `.price_highlight` ribbon, `.event_title` thead bg, `.section_title .title::before` 30px×3px marker, `.footer_title::before` marker, nav link hover, `.cover_dots li.active` border |
| Near-black     | `#18181c`                                                                                                                                                                                                                                                   | `.btn-primary:hover` bg/border, `.price_tag` (48px weight 700), `.speaker_img .info_box` bg (bottom name strip), `header.sticky_header` bg (scrolled)                                                                                                                                                                                   |
| White          | `#ffffff`                                                                                                                                                                                                                                                   | hero cover-title + cover-date, button text, nav links, `.event_title` thead text, footer titles                                                                                                                                                                                                                                         |
| Body gray      | `#838383`                                                                                                                                                                                                                                                   | secondary/body text (footer blurb, about paragraphs)                                                                                                                                                                                                                                                                                    |
| Light gray     | `#f0f2f6`                                                                                                                                                                                                                                                   | `.bg-gray` (partners section), `.price_box` bg                                                                                                                                                                                                                                                                                          |
| Hairline       | `#e2e6f1`                                                                                                                                                                                                                                                   | light borders/dividers                                                                                                                                                                                                                                                                                                                  |
| Footer purples | `#0b031b` (footer bg), `#1f1039` (newsletter input bg/border), `#080113` (copyright bar bg)                                                                                                                                                                 | `footer`, `.newsletter_form .form-control`, `.copyright_footer`                                                                                                                                                                                                                                                                         |
| Overlay        | `rgba(0,0,0,0.4)`                                                                                                                                                                                                                                           | `.bg-img .overlay_dark` over bg-image sections (countdown `bg-img.png`, tickets `tickets.png`)                                                                                                                                                                                                                                          |
| Fonts          | **'Montserrat', sans-serif** (400 / 500 / 700 / 900) — headings AND body                                                                                                                                                                                    | Google Fonts `@import` in main.css; recreate with `<link>`s in index.html                                                                                                                                                                                                                                                               |
| Buttons        | pill: `border-radius: 50px`, bg `#f50136`, border 1px `#f50136`, white text, 300ms ease transition; hover → bg/border `#18181c`                                                                                                                             | `.btn-primary.btn-rounded`: hero "Buy Tickets Now", pricing "Purchase", events "Read More", tickets CTA "buy now", newsletter "SUBSCRIBE" (`.btn-block`)                                                                                                                                                                                |
| Section titles | uppercase, 36px, with 30px-wide 3px `#f50136` top-border marker (`::before`, left-aligned)                                                                                                                                                                  | `.section_title .title`, `footer .footer_title` (18px)                                                                                                                                                                                                                                                                                  |
| Hero XL        | `.cover-xl-text`: uppercase, 90px, weight 900, line-height 1.1, `#f50136`; `.cover-title` white weight 500; `.cover-date` white 18px uppercase                                                                                                              | hero slider slides                                                                                                                                                                                                                                                                                                                      |
| Section rhythm | `pt100 pb100` (100px pads); bg-img bands `pt70 pb70` (countdown) / `pt100 pb100` (tickets); `mt30` feature row, `mb50` title block                                                                                                                          | `.pt100.pb100`, `.bg-img.pt70.pb70`, `.bg-img.pt100.pb100`, `.section_title.mb50`                                                                                                                                                                                                                                                       |
| Header         | transparent over hero, `margin-top: 20px`, min-height 50px; sticky on scroll → bg `#18181c`, padding 5px, shadow `0 0 42px rgba(0,0,0,0.08)`                                                                                                                | `header`, `header.sticky_header`; nav links 12px uppercase `letter-spacing: 1px` white padding 20px 12px hover `#f50136`; search icon 30px                                                                                                                                                                                              |
| Icons (source) | ionicons + et-line (lnr) + font-awesome → lucide-react: `Calendar`/`MapPin`/`Users`/`Ticket` (info bar), `Mic`/`Rocket`/`Megaphone`/`Clock` (about features), `Search` (nav), `Heart` (copyright), brand socials (inline SVG — lucide dropped brand glyphs) | info boxes, about features, nav, footer socials (pinterest / facebook / twitter / dribbble / instagram)                                                                                                                                                                                                                                 |

## Requirements

### Requirement: Header with wordmark and navigation

The system SHALL render a fixed-top transparent header over the hero with a
script-style white wordmark on the left, uppercase white navigation links on
the right, and a search icon; scrolling SHALL switch it to a near-black
sticky bar.

#### Scenario: Desktop header

- **GIVEN** the Gather page is rendered
- **WHEN** the page loads
- **THEN** a fixed header SHALL show the white script wordmark "Gather"
  (with a brand-red dot) on the left
- **AND** uppercase white links Home, Speakers, Events, News, and Contact
  SHALL be shown on the right, 12px with 1px letter-spacing
- **AND** a search icon SHALL be shown right of the links
- **AND** hovering a link SHALL turn it brand red `#f50136`

#### Scenario: Sticky header

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header becomes fixed
- **THEN** it SHALL switch to the near-black `#18181c` background with the
  `0 0 42px rgba(0,0,0,0.08)` shadow and remain at the top of the viewport

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a mobile menu SHALL open showing the same navigation links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero cover slider

The system SHALL render a full-width hero carousel of three cover slides
over a crowd/concert background image, each with a title, a huge red
highlight word, an event date line, and a pill "Buy Tickets Now" button.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is rendered
- **WHEN** a slide is active
- **THEN** it SHALL show the white heading "Prepare yourself for the"
- **AND** the word "conference" SHALL be rendered uppercase in brand red
  `#f50136` at ~90px weight 900
- **AND** the white date line "12-14 February 2018 - Los Angeles, CA."
  SHALL be shown (recreate with the template's own placeholder event copy)
- **AND** a pill button labeled "Buy Tickets Now" SHALL be shown

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the user interacts with the numbered pagination (1, 2, 3)
- **THEN** the corresponding slide SHALL become active
- **AND** the active pagination dot SHALL show the brand-red border

### Requirement: Event info icon boxes

The system SHALL render a white section with four icon boxes (Date,
Location, Speakers, Tickets) each showing a large left icon, an uppercase
title, and a value line.

#### Scenario: Info boxes render

- **GIVEN** the info section is rendered below the hero
- **WHEN** the page loads
- **THEN** four equal-width boxes SHALL show: DATE ("12-14 february 2018"),
  LOCATION ("Los Angeles, CA."), SPEAKERS ("Natalie James + guests"), and
  TICKETS ("$65 early bird")
- **AND** each box SHALL have a 56px icon (lucide `Calendar`, `MapPin`,
  `Users`, `Ticket`) left of its content
- **AND** titles SHALL be uppercase weight 500

### Requirement: Countdown banner

The system SHALL render a dark background-image band with a light heading
"Counter until the big event" and a live countdown (days / hours / minutes /
seconds) with brand-red numerals.

#### Scenario: Countdown displays

- **GIVEN** the countdown band is rendered
- **WHEN** the page loads
- **THEN** a `rgba(0,0,0,0.4)` overlay SHALL darken the background image
- **AND** the heading "Counter until the big event" SHALL be centered in
  light text
- **AND** four countdown boxes SHALL show numbers in brand red `#f50136`
  (48px weight 600) with uppercase-ish labels below

#### Scenario: Countdown ticks

- **GIVEN** a live countdown target (e.g. the demo's 2018-02-14 or a fixed
  placeholder date)
- **WHEN** time advances
- **THEN** the displayed values SHALL decrement per second/minute and never
  go negative (freeze at zero)

### Requirement: About the event

The system SHALL render a section titled "About the event" with two intro
paragraphs and four feature blocks (icon + title + blurb).

#### Scenario: About section renders

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the uppercase section title "About the event" SHALL show with the
  30px×3px brand-red marker above it
- **AND** two side-by-side paragraphs SHALL describe the event
- **AND** four feature blocks SHALL show: "9 Speakers" (`Mic`), "8 hrs
  Marathon" (`Rocket`), "Live Broadcast" (`Megaphone`), and "Early Bird"
  (`Clock`), each with a short blurb

### Requirement: Speakers grid

The system SHALL render a grid of eight speaker cards, each with a photo and
a near-black bottom strip showing the speaker's name and position.

#### Scenario: Speaker cards render

- **GIVEN** the speakers section is rendered
- **WHEN** the page loads
- **THEN** the uppercase title "Our Speakers" SHALL show
- **AND** eight speaker cards SHALL be shown, each with a portrait image
  (picsum seed `gather-speaker-N`) and an `#18181c` strip at the bottom with
  the name (weight 500) and position ("CEO Company" — source repeats 3
  placeholder names across 8 photos; use 8 distinct names in the
  recreation)

### Requirement: Pricing table

The system SHALL render a three-plan pricing table (Early Bird, Start up,
Corporate) with pill "Purchase" buttons and a red "recommended" ribbon on
the featured plan.

#### Scenario: Plans render

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** three centered plans on `#f0f2f6` cards SHALL show: name (Early
  Bird / Start up / Corporate), subtitle ("For the fast ones" / "For the
  begginers" / "For the business"), price (65 / 85 / 95 with a `$` sup,
  48px weight 700 `#18181c`), feature list (Early Entrance, Front seat,
  Complementary Drinks, Promo Gift), and a pill "Purchase" button
- **AND** the featured plan SHALL carry the brand-red "recommended" ribbon
  on top

### Requirement: Events calendar

The system SHALL render an events table with a brand-red header row
"next events calendar" and three rows (calendar thumb, date, event info,
Read More button, buy-now link).

#### Scenario: Event rows render

- **GIVEN** the events section is rendered
- **WHEN** the page loads
- **THEN** the header row with background `#f50136` and white text SHALL
  show a calendar icon and "next events calendar"
- **AND** three rows SHALL each show a calendar thumbnail image, a date
  (14 / 18 / 22 February), the event name "Conference in Amsterdam", the
  time "08 AM - 04 PM", a "Speaker: Daniel Hill" line, a pill "Read More"
  button, and a "buy now" text link
- **AND** the table SHALL scroll horizontally on narrow viewports
  (source is `min-width: 1000px`)

### Requirement: Partners band

The system SHALL render a light-gray (`#f0f2f6`) section titled "Our
Partners" with a row of five brand logos.

#### Scenario: Partner logos render

- **GIVEN** the partners section is rendered
- **WHEN** the page loads
- **THEN** the uppercase title "Our Partners" SHALL show with the brand-red
  marker
- **AND** five grayscale brand logos (placeholder images, picsum seed
  `gather-brand-N`) SHALL be displayed in a row

### Requirement: Tickets call-to-action

The system SHALL render a dark background-image band titled "Get Your
Tickets" with a blurb and a right-aligned pill "Buy Now" button.

#### Scenario: CTA band renders

- **GIVEN** the tickets band is rendered
- **WHEN** the page loads
- **THEN** a `rgba(0,0,0,0.4)` overlay SHALL darken the background
- **AND** the title "Get Your Tickets" (source typo "GEt your tikets" —
  fix) SHALL show
- **AND** a blurb paragraph and a pill "Buy Now" button SHALL be shown

### Requirement: Footer with newsletter and socials

The system SHALL render a dark-purple footer with the wordmark + about text

- social icons, an "Instagram" image grid, a "Subscribe to our newsletter"
  form, and a copyright bar linking Component Dock.

#### Scenario: Footer columns render

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the first column SHALL show the "Gather" wordmark, an about
  paragraph, and five social icon links (Pinterest, Facebook, Twitter,
  Dribbble, Instagram — inline SVG)
- **AND** the second column SHALL show the uppercase white title "Instagram"
  with a 3+ image grid
- **AND** the third column SHALL show "Subscribe to our newsletter" with an
  email input (dark `#1f1039` field, placeholder "E-Mail here") and a
  block-width pill "SUBSCRIBE" button

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an empty or invalid email
- **THEN** an error SHALL be shown and no subscription SHALL be recorded
- **WHEN** the user submits a valid email
- **THEN** a success state SHALL be shown

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the `#080113` bottom bar SHALL show "Copyright © <year> All
  rights reserved | Made with ♥ by Component Dock" with the word "Component
  Dock" linking to https://www.componentdock.com/ (replaces the source's
  ColorLib credit — REQUIRED by AGENTS.md, no colorlib strings in the app)

## Verification checklist

- [ ] Preview URL https://preview.colorlib.com/theme/evento/ loads; all
      section structure matches the spec 1:1 (header → hero slider → info
      boxes → countdown → about → speakers → pricing → events → partners →
      tickets CTA → footer + copyright bar).
- [ ] Design tokens match the reference: brand red `#f50136` (buttons, hero
      XL word, countdown numbers, ribbon, event thead, section markers),
      near-black `#18181c` (button hover, speaker strip, price tag),
      `#f0f2f6` panels, dark-purple footer family, Montserrat throughout,
      pill buttons (radius 50px).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
- [ ] Every section has Gherkin scenarios covered by tests at 100%
      coverage (lines/functions/branches/statements).
- [ ] `npm run verify:app gather` green (typecheck + lint + knip + fallow +
      coverage + build).
- [ ] TEMPLATES.md: mark ALL THREE Evento copies `[x]` (lines 1003, 1678, 2048) with the live surge URL `gather.free.componentdock.com` +
      homepage after deploy; `npm run readme:status`.
