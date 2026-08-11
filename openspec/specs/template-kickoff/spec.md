# Template: Kickoff (Sports Club Website Template)

## Purpose

Kickoff is a single-page sports-club landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Knights" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Knights" — sports/football club one-pager
  ("How long can you last?", game report scoreboard, game schedule, team
  squad, counters, testimonials, recent news, match subscribe form; source:
  https://colorlib.com/wp/template/knights/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/knights/
  (HTTP 200, ~41 KB HTML fetched; `css/style.css` ~79 KB parsed for tokens).
  Title tag: "Knights - Free Bootstrap 4 Template by Colorlib". Bootstrap 4 +
  jQuery stack (owl-carousel, waypoints, animateNumber, stellar, AOS,
  magnific-popup), no Tailwind.
- **Screenshot analyzed:** `knights-free-template.jpg` (1200×946, TEMPLATES.md
  line 430) — bright yellow nav bar with the "Knights" logo in a dark slate
  box, white nav links, white "Buy Ticket" button; full-width hero photo of
  football players at dusk with centered white headline "How long can you
  last?" and a "Watch Games" play button; below it a dark slate event bar with
  team matchups (Knights Warrior vs Mighty Falcons, "FIFA Champions League
  Semi-Final"), a countdown timer and a gold "Buy Tickets" button; below that a
  white "Game Report / Great Win In Final Game" block. Matches the live DOM
  1:1 (the DOM's event bar is `game-wrap-1`, dark #232931, floating -60px over
  the hero).
- **Section order (1:1):** Navbar (`ftco-navbar-light`: dark #232931 brand box
  "Knights" left, links Home/About/Games/Blog/Contact + white pill CTA "Buy
  Ticket") → Hero (`hero-wrap js-fullheight`, bg image + 40% black overlay,
  left column: H1 "How long can you last?" 56px/700/white, 20px subtext, play
  icon + "Watch Games" vimeo popup) → Event bar (`game-wrap-1` inside the next
  section, bg #232931, radius 5px, margin-top -60px, 4 columns: overlapping
  circular team logos + "Knights Warrior / Mighty Falcons" | "FIFA Champions
  League" + "Semi-Final" | countdown timer days/hours/minutes/seconds |
  gold "Buy Tickets" button) → Game Report (`ftco-section`: subheading "Game
  Report" + H2 "Great Win In Final Game"; divider "Tue. Feb 21, 2019; FIFA
  Champions League"; scoreboard 3 (Knight Warrior, win) vs 1 (Mighty Falcons,
  lost) with team logos; gold "More Details" button; right column victory
  image with play button + "Watch Highlights") → Game Schedule
  (`ftco-game-schedule`: H2 "Game Schedule", owl-carousel of 6 cards — "Home @
  Arena" | "Knight Warrior" | "April 17, 2018" — with prev/next nav) →
  Services (`services-section bg-light` #f8f9fa: 4 cards — Senior Team, For
  Kids, Football Schools, Basic Tactics — gradient icon + title + blurb) →
  Team squad (`ftco-team img`, bg image: H2 "Our Team Squad", carousel of
  players "David Scott" + position: Wide Receiver, Tight End, Defensive,
  Quarterback, Running Back, Center, Offensive Guard) → About + counters
  (`ftco-counter img`: H2 "About the Knights Team" + copy + 4 animated
  counters — 100 Game Played, 10 Coaches, 20 Trophies, 80 Members) →
  Testimonial (`testimony-section`, bg image + overlay: subheading
  "Testimonial" + H2 "Happy Viewers"; quote carousel — "Arthur Browner",
  Viewer) → Blog (`ftco-section`: subheading "Blog" + H2 "Recent News"; 3
  cards — date block "08 2019 March" + title "Why Lead Generation is Key for
  Business Growth") → Subscribe (`ftco-subscribe img`, bg image + overlay:
  H2 "Subcribe to our upcoming match" + email input + gold "Subscribe"
  button) → Footer (`ftco-footer-2` dark: brand "Knights" + blurb; "Have a
  Questions?" widget — address "203 Fake St. Mountain View, San Francisco,
  California, USA", phone +2 392 3929 210, email info@yourdomain.com; link
  columns; copyright bar with ColorLib credit replaced by original
  attribution).
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand gold: **#ffb400** — `.btn.btn-primary` override (bg + border), hero
    "Buy Tickets", "More Details", "Subscribe" buttons; `.heading-section
.heading-section-white h2 span`; services icon color; `.btn.btn-black`
    hover.
  - Periwinkle: **#6b75ff** — service icon gradient start; **#59b7ff** light
    blue gradient end; icon text rendered with `linear-gradient(45deg,
#6b75ff, #59b7ff)` + `background-clip: text` + `-webkit-text-fill-color:
transparent` (60px icon glyph).
  - Dark slate: **#232931** — `.game-wrap-1` event bar bg, `.navbar-brand` bg,
    nav CTA hover, footer dark bg.
  - Light section bg: **#f8f9fa** (`bg-light`, services section); body text
    **#212529**; muted **#6c757d**; white headings on dark/image sections.
  - Fonts: **"Nunito Sans"**, Arial, sans-serif (body + headings). H1 56px /
    700 / line-height 1.2 (mobile 40px); section H2 40px / weight 900 (mobile
    28px); `.subheading` 16px, uppercase, letter-spacing 1px; hero subtext
    20px rgba(255,255,255,.8). Google Fonts `<link>` in `index.html`.
  - Buttons: `.btn` — border-radius **3px**, shadow `0 24px 36px -11px
rgba(0,0,0,.09)`; primary = bg/border #ffb400 + **black** text; hover =
    black bg + white text. Nav CTA = white bg, 2px white border, radius 4px,
    hover → #232931.
  - Hero: fullscreen (`js-fullheight`), bg image cover, black overlay at 40%
    opacity.
  - Event bar `.game-wrap-1`: bg #232931, radius 5px, `margin-top: -60px`
    (floats over hero), shadow `0 75px 94px -66px rgba(0,0,0,.66)`; team names
    18px white, league 18px rgba(255,255,255,.5), misc spans
    rgba(255,255,255,.8); team logos 60px circles overlapping 50%.
  - Counters: `strong.number` animated 7s count-up via waypoint at 95% offset,
    comma-separated; targets 100 Game Played / 10 Coaches / 20 Trophies / 80
    Members.
  - Scoreboard: score `<h3 class="score win">` (winner) vs `score lost`,
    team logos 50% circles, divider line "Tue. Feb 21, 2019; FIFA Champions
    League".
  - Blog cards: date block with big day number + month/year; title + meta +
    image; 3 columns stacking on mobile.
  - Subscribe: bg image + overlay, centered white H2, inline email input +
    gold submit button.
  - Footer: bg #232931, white headings, copyright bar with border-top
    rgba(255,255,255,.1).
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/kickoff-<n>/<w>/<h>`): hero, team logos,
  victory image, squad portraits, blog thumbnails, testimonial avatar;
  icons → lucide-react (Play for watch games/highlights, Calendar/Clock for
  schedule, Users/Heart/Trophy for services, quotes for testimonial, Mail/
  MapPin/Phone for footer); social icons → inline SVG (lucide removed brand
  icons); countdown implemented with a client-side timer hook targeting a
  fixed future date; fonts Nunito Sans via Google Fonts `<link>`. Tokens
  #ffb400 / #6b75ff / #59b7ff / #232931 / #f8f9fa / #212529 / #6c757d in
  `@theme`.

Kickoff lives in `apps/kickoff` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navbar with the brand in a dark box, the menu links,
and a "Buy Ticket" CTA button.

#### Scenario: Navbar content

- **GIVEN** the Kickoff page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Kickoff" on the left in a dark
  (#232931) box with white text (bold span, ~20px)
- **AND** the navbar SHALL show the links Home, About, Games, Blog, and
  Contact (Home styled as active)
- **AND** the navbar SHALL show a "Buy Ticket" CTA button on the right with a
  white background, 2px white border, 4px radius, and dark text (hover: dark
  #232931 background)

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user activates the hamburger toggle
- **THEN** the nav links SHALL be reachable via the collapsible menu
  (aria-expanded toggled) and the CTA SHALL remain visible

### Requirement: Hero cover

The system SHALL render a fullscreen hero with a background image, dark
overlay, headline, subtext, and a "Watch Games" play link.

#### Scenario: Hero content

- **GIVEN** the Kickoff page is rendered
- **WHEN** the hero is in view
- **THEN** the hero SHALL cover the full viewport height with a background
  image and a 40%-opacity black overlay
- **AND** the hero SHALL show the headline "How long can you last?" (white,
  56px, weight 700, line-height 1.2; 40px on mobile)
- **AND** the hero SHALL show a 20px subtext paragraph at 80% white opacity
- **AND** the hero SHALL show a circular play icon followed by the text
  "Watch Games" (opens the video lightbox)

### Requirement: Event bar with countdown

The system SHALL render a dark floating bar with the upcoming matchups, a
countdown timer, and a "Buy Tickets" button.

#### Scenario: Event bar content

- **GIVEN** the event bar is rendered
- **WHEN** the page loads
- **THEN** the bar SHALL have a dark #232931 background, 5px radius, a large
  soft shadow, and SHALL overlap the hero bottom by ~60px (negative margin)
- **AND** the first column SHALL show two overlapping circular team logos with
  the names "Knights Warrior" and "Mighty Falcons" (18px white)
- **AND** the second column SHALL show "FIFA Champions League" (18px, 50%
  white) with "Semi-Final" below it
- **AND** the third column SHALL show a live countdown split into days,
  hours, minutes, and seconds (client-side timer targeting a fixed future
  date)
- **AND** the fourth column SHALL show a gold (#ffb400) "Buy Tickets" button
  with black text

### Requirement: Game report scoreboard

The system SHALL render a "Game Report" section with a scoreboard of the last
match and a highlights link.

#### Scenario: Game report content

- **GIVEN** the game report section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the uppercase subheading "Game Report"
  and the 40px/900 heading "Great Win In Final Game"
- **AND** the scoreboard SHALL show the divider "Tue. Feb 21, 2019; FIFA
  Champions League"
- **AND** the scoreboard SHALL show two teams with circular logos — "Knight
  Warrior" with score 3 styled as the winner and "Mighty Falcons" with score 1
  styled as the loser
- **AND** a gold "More Details" button SHALL sit below the scoreboard
- **AND** the right column SHALL show a tall background image (victory photo)
  with a circular play button and the label "Watch Highlights"

### Requirement: Game schedule

The system SHALL render a "Game Schedule" section listing upcoming matches as
carousel cards.

#### Scenario: Schedule content

- **GIVEN** the game schedule section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Game Schedule" (40px/900)
- **AND** it SHALL render six schedule cards, each showing the venue "Home @
  Arena", the team "Knight Warrior", and the date "April 17, 2018"
- **AND** the cards SHALL be navigable as a carousel with prev/next controls
  (on mobile they stack)

### Requirement: Services section

The system SHALL render a light-gray (#f8f9fa) section with four service
cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** it SHALL render four cards in a row (2×2 on tablet, stacked on
  mobile)
- **AND** each card SHALL show a 60px icon glyph in the periwinkle gradient
  (#6b75ff → #59b7ff, `background-clip: text`) — Senior Team, For Kids,
  Football Schools, Basic Tactics (lucide equivalents)
- **AND** each card SHALL show an 18px bold title and a short gray paragraph

### Requirement: Team squad carousel

The system SHALL render a background-image section with the squad heading and
a player carousel.

#### Scenario: Squad content

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a dark background image with the centered
  white heading "Our Team Squad"
- **AND** it SHALL render a carousel of player cards (photo, name "David
  Scott" pattern, position label — Wide Receiver, Tight End, Defensive,
  Quarterback, Running Back, Center, Offensive Guard)
- **AND** the carousel SHALL cycle with prev/next controls and SHALL be
  keyboard-accessible

### Requirement: About and counters

The system SHALL render an about section with club copy and four animated
stat counters.

#### Scenario: About content

- **GIVEN** the about/counter section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "About the Knights Team" and two
  supporting paragraphs

#### Scenario: Animated counters

- **GIVEN** the counters row is in view
- **WHEN** the user scrolls to it (95% viewport offset)
- **THEN** four counters SHALL animate up over ~7s to their targets,
  comma-formatted: 100 Game Played, 10 Coaches, 20 Trophies, 80 Members
- **AND** each counter SHALL show a small uppercase label under the number

### Requirement: Testimonial section

The system SHALL render a background-image section with a quote carousel.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a dark background image with the uppercase
  subheading "Testimonial" and the white heading "Happy Viewers"
- **AND** it SHALL render a carousel of at least three quote slides, each with
  an avatar photo, a name ("Arthur Browner" pattern), a viewer role label, and
  a quote paragraph
- **AND** the carousel SHALL cycle with prev/next controls

### Requirement: Recent news section

The system SHALL render a "Recent News" section with three blog cards.

#### Scenario: Blog cards

- **GIVEN** the recent news section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the uppercase subheading "Blog" and the
  heading "Recent News"
- **AND** it SHALL render three cards in a row (stacking on mobile), each with
  a thumbnail image, a date block (day "08"/"07", year "2019", month "March"),
  and the title "Why Lead Generation is Key for Business Growth"
- **AND** each card SHALL show a meta line and a "read more" link

### Requirement: Subscribe form

The system SHALL render a background-image subscribe band with an email form.

#### Scenario: Subscribe content

- **GIVEN** the subscribe section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a dark background image with the centered
  white heading "Subcribe to our upcoming match"
- **AND** it SHALL show an inline form with an email input (placeholder
  "Enter email address") and a gold (#ffb400) "Subscribe" submit button with
  black text

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a per-field error and SHALL NOT submit
- **AND** when the user submits a valid email the form SHALL confirm
  subscription (success message)

### Requirement: Footer

The system SHALL render a dark footer with brand info, contact details, link
columns, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a dark #232931 background with white headings
- **AND** the first column SHALL show the brand "Kickoff" with a short blurb
- **AND** the second column SHALL show "Have a Questions?" with the address
  "203 Fake St. Mountain View, San Francisco, California, USA", a phone
  number, and an email address, each with an icon
- **AND** the footer SHALL show navigation link columns (e.g. Home, About,
  Games, Blog, Contact)
- **AND** the footer SHALL show a centered copyright bar with the current year
  and an original attribution (the ColorLib credit is replaced)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Kickoff app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections (Hero + Event bar, Game Report, Game Schedule, Services, Team,
  About + Counters, Testimonial, Recent News, Subscribe) in the main
  landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Kickoff — Sports Club Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/kickoff` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- kickoff` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#ffb400, #6b75ff, #59b7ff, #232931, #f8f9fa, #212529, #6c757d, Nunito Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `kickoff-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Countdown and counters implemented with client-side hooks (fake timers in tests)
