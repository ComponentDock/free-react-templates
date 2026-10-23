# Template: Gathr (Event Conference Landing)

## Purpose

Gathr is a single-page event/conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Evento" free template (source:
https://colorlib.com/wp/template/evento/), built under a DIFFERENT name
(**Gathr**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based event landing page with a hero slider,
event info cards, countdown timer, speaker gallery, pricing table, event
calendar, partner logos, and a multi-column footer. Brand color is
`#f50136` (vivid red), dark backgrounds `#18181c`, font is Montserrat.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Evento** — https://colorlib.com/wp/template/evento/
- **Preview**: `https://preview.colorlib.com/theme/evento/` — HTTP 200 on 2026-10-23, **33,617 bytes**, title `Evento - Event Html Template`.
- **Stylesheet measured**: `assets/css/main.css` — **37,385 bytes**, sha256 `76a91dd19c22…`, over `assets/css/bootstrap.min.css` (31,431 B) plus owl-carousel / animate / ionicons / et-line.
- **Measured how**: hex-literal census of `main.css`, then the winning rule per selector. Not a rebuild (fixed-top Bootstrap 4 header, no version marker).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand red | `#f50136` | 43 | `.section_title .title:before` rule · `.icon_list li i` · `.loader .loader-inner` · nav hover · `.btn-primary` · `.price_highlight` · `.table.event_calender thead.event_title` · footer social hover |
| Ink | `#18181c` | 20 | `h1–h6` · `header` / `.sticky_header` · `.btn` fill · `.price_tag` · event titles |
| Body copy | `#838383` | 10 | `body` · `p` · link hover · footer menu links · price captions |
| Light panel | `#f0f2f6` | 6 | `.bg-gray` · `.icon_box_one` · `.price_box` · calendar `tbody` |
| Footer | `#0b031b` | 1 | `footer` |
| Copyright bar | `#080113` | 1 | `.copyright_footer` |
| Newsletter field | `#1f1039` | 2 | `footer .newsletter_form .form-control` |
| Scrim | `rgba(0,0,0,0.4)` | — | `.bg-img .overlay_dark` (photo bands); inner pages `rgba(31,31,32,0.6)` |
| On-brand | `#fff` | — | `.btn-primary` label, footer headings, calendar head |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Montserrat", sans-serif` · 14 px / 25 px / 400 · `#838383` | `body` (Google import in the same sheet) |
| Headings | Montserrat · **700** · `#18181c` (H1 48 px, H2 42 px) | `h1–h6` |
| Section title | 36 px · **uppercase** · 10 px padding | `.section_title .title` |
| Buttons | 12 px / 500 · uppercase · `padding: 12px 40px` | `.btn` |
| Price tag | 48 px / 700 · `#18181c`, `sup` 24 px `#838383` | `.price_box .price_tag` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **0** on `.btn` (square CTAs); `.btn-rounded` 50 px pill variant; 4 px on `.bg-img` photo bands; `50px` circles on footer social |
| Photo bands | `.bg-img` cover photo + `rgba(0,0,0,0.4)` overlay, 70 px vertical padding (`pt70 pb70`), 100 px (`pt100 pb100`) |
| Pricing | `.price_box` `#f0f2f6`, `padding: 75px 30px`, highlight chip `#f50136`, hover/active flips the card to `#fff` |
| Calendar | `.table.event_calender thead` `#f50136` white label; `tbody` `#f0f2f6`; 30 px date numerals |
| Header | fixed-top, transparent → `#18181c` when sticky |
| Footer | `#0b031b` with a `#1f1039` newsletter field, 50 px social circles, `#080113` copyright strip |

Section order measured in the reference DOM: `.header.navbar.fixed-top` (Home/Speakers/Events/News/Contact + search) → `.home-cover` ("Prepare yourself for the conference", 12-14 February 2018 · Los Angeles CA, "Buy Tickets Now") → event-info strip (DATE / location / speakers / tickets) → `.bg-img pt70 pb70` "Counter until the big event" → About the event → our speakers (4) → pricing table (Early Bird 65 $, "recommended") → next events calendar table → `.bg-gray` our partners → `.bg-img` "GEt your tikets" CTA → footer (`#0b031b` + `#080113`).

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- The four core literals are exact (`#f50136`, `#18181c`, `#838383`, Montserrat).
- **Two surfaces are missing from the app's palette**: the `#f0f2f6` panel (partners band, pricing card, calendar body) and the near-black footer ladder (`#0b031b` footer + `#080113` copyright + `#1f1039` field). The app models only `--color-light: #ffffff`, so those bands cannot be reproduced from tokens.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-top navigation bar with logo text and
nav links.

#### Scenario: Desktop navbar

- **GIVEN** the Gathr app is rendered on a desktop viewport
- **THEN** a fixed-top navbar SHALL display with the logo text "Gathr"
- **AND** nav links SHALL include: Home, Speakers, Events, News, Contact
- **AND** the navbar background SHALL be dark (`#18181c`)

#### Scenario: Mobile navbar toggle

- **GIVEN** the viewport is at or below 768px
- **THEN** a hamburger menu button SHALL be visible
- **AND** the nav links SHALL be collapsed by default
- **WHEN** the hamburger button is clicked
- **THEN** the nav links SHALL become visible

### Requirement: Hero section

The system SHALL render a full-screen hero with event headline, date,
and CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **THEN** the headline "Prepare yourself for the conference" SHALL
  be displayed
- **AND** the event date "15-17 March 2026 — San Francisco, CA" SHALL
  be displayed
- **AND** a "Get Tickets" CTA button SHALL be rendered with rounded
  style and primary brand color (`#f50136`)

#### Scenario: Hero background

- **GIVEN** the hero section is rendered
- **THEN** a dark background with image overlay SHALL be displayed
- **AND** the text SHALL be white and centered

### Requirement: Event info cards

The system SHALL render 4 event info cards in a row.

#### Scenario: Info cards content

- **GIVEN** the event info section is rendered
- **THEN** 4 cards SHALL be displayed: Date, Location, Speakers, Tickets
- **AND** each card SHALL have an icon, a label, and detail text

### Requirement: Countdown timer

The system SHALL render a countdown section with a timer counting down
to a target date.

#### Scenario: Countdown display

- **GIVEN** the countdown section is rendered
- **THEN** a heading "Countdown to the big event" SHALL be displayed
- **AND** 4 countdown units SHALL be shown: Days, Hours, Minutes, Seconds
- **AND** the section SHALL have a dark background with overlay

### Requirement: About section

The system SHALL render an "About the Event" section with descriptive
text.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **THEN** the heading "About the Event" SHALL be displayed
- **AND** two columns of descriptive paragraph text SHALL be shown

### Requirement: Features grid

The system SHALL render 4 feature cards with icons.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **THEN** 4 cards SHALL be displayed in a row
- **AND** each card SHALL have an icon, title, description, and
  "read more" link
- **AND** the features are: Expert Speakers, All-Day Summit,
  Live Broadcast, Early Bird

### Requirement: Speakers gallery

The system SHALL render a speakers section with speaker cards.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is rendered
- **THEN** the heading "Our Speakers" SHALL be displayed
- **AND** 8 speaker cards SHALL be shown in a 4-column grid
- **AND** each card SHALL have a placeholder image, name, and role

### Requirement: Pricing table

The system SHALL render 3 pricing tiers with feature lists.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** 3 pricing cards SHALL be displayed
- **AND** the tiers are: Early Bird ($65), Standard ($85),
  Corporate ($95)
- **AND** Early Bird SHALL be visually highlighted as recommended
- **AND** each card SHALL have a feature list and "Purchase" button

### Requirement: Event calendar table

The system SHALL render an upcoming events table.

#### Scenario: Calendar rows

- **GIVEN** the calendar section is rendered
- **THEN** a table with 3 event rows SHALL be displayed
- **AND** each row SHALL have: event image, date, title, time,
  speaker name, and "Buy Now" link

### Requirement: Partners section

The system SHALL render partner logos on a gray background.

#### Scenario: Partner logos

- **GIVEN** the partners section is rendered
- **THEN** the heading "Our Partners" SHALL be displayed
- **AND** partner logo placeholders SHALL be shown in a row

### Requirement: CTA banner

The system SHALL render a full-width dark CTA section.

#### Scenario: CTA content

- **GIVEN** the CTA banner is rendered
- **THEN** the heading "Get Your Tickets" SHALL be displayed
- **AND** descriptive text and a "Buy Now" CTA button SHALL be shown
- **AND** the section SHALL have a dark background image with overlay

### Requirement: Footer

The system SHALL render a 3-column footer with brand info, instagram
grid, and newsletter form.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** 3 columns SHALL be displayed
- **AND** column 1 SHALL have logo, description, and social icons
- **AND** column 2 SHALL show an instagram photo grid
- **AND** column 3 SHALL have a newsletter subscription form with
  email input and "Subscribe" button

#### Scenario: Footer attribution

- **GIVEN** the footer copyright area is rendered
- **THEN** it SHALL include a link to https://www.componentdock.com/
  branded as "Component Dock"
- **AND** nav links (Home, Speakers, Events, News, Contact) SHALL
  be displayed

### Requirement: No ColorLib references

The system SHALL NOT contain any reference to "ColorLib" or
"colorlib.com" in any app source file, comment, or metadata.

#### Scenario: Clean source

- **GIVEN** any source file under apps/gathr/
- **THEN** the file SHALL NOT contain the string "colorlib" or
  "ColorLib" in any case

### Requirement: Component Dock footer link

The system SHALL link to https://www.componentdock.com/ in the
footer, branded as "Component Dock".

#### Scenario: Footer link present

- **GIVEN** the footer copyright is rendered
- **THEN** a link to https://www.componentdock.com/ SHALL be present
- **AND** the link text SHALL contain "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- gathr` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 17 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navbar
      - Hero section
      - Event info cards
      - Countdown timer
      - About section
      - Features grid
      - Speakers gallery
      - Pricing table
      - Event calendar table
      - Partners section
      - CTA banner
      - Footer
      - Component Dock footer link
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
- [x] Navbar — a fixed-top navbar SHALL display with the logo text "Gathr"
- [x] Hero section — the headline "Prepare yourself for the conference" SHALL
- [ ] Event info cards — 4 cards SHALL be displayed: Date, Location, Speakers, Tickets
- [x] Countdown timer — a heading "Countdown to the big event" SHALL be displayed
- [x] About section — the heading "About the Event" SHALL be displayed
- [ ] Features grid — 4 cards SHALL be displayed in a row
- [x] Speakers gallery — the heading "Our Speakers" SHALL be displayed
- [ ] Pricing table — 3 pricing cards SHALL be displayed
- [ ] Event calendar table — a table with 3 event rows SHALL be displayed
- [x] Partners section — the heading "Our Partners" SHALL be displayed
- [x] CTA banner — the heading "Get Your Tickets" SHALL be displayed
