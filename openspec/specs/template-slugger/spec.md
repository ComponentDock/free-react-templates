# Template: Slugger (Sports — Baseball Club & Match Center)

## Purpose

Slugger is a single-page baseball-club / match-center website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Phoenix" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, sporty baseball club site for the "Phoenix" team: a
transparent-over-hero navbar with a yellow logo mark, dark "Buy Ticket" CTA and
Oswald nav links; a full-height hero ("Fieldrun Baseball Club") with photo
background and blue "Watch match" + green "Get ticket" buttons; a dark
upcoming-match strip (Phoenix vs Jacksonville, "Baseball Champions League",
Semi-Final) with a live countdown and a green "Buy Tickets" button; a
scoreboard section ("Latest Game Result", Phoenix 12 – 8 Mighty Falcons) on a
skewed diagonal slash split (blue #207dff / green #00bd56); a game-schedule
carousel; a video-highlights block; an about section on a photo background
with the same slash split; a "Next Match" preview with four schedule cards;
a dark team-squad carousel ("Our Team Squad", 9 players with field positions);
four light service blocks (Baseball Training, Softball Training, Basic
Defense, Basic Tactics); a "Happy Viewers" testimonial carousel; a "Recent
News" blog grid with date blocks; four animated counters (Game Played,
Coaches, Trophies, Members); a photo subscribe section ("Subcribe to our
upcoming match"); and a black footer with five link widgets plus contact
details. Slugger recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Phoenix" — baseball club / sports match-center
  website template (source: https://colorlib.com/wp/template/phoenix/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/phoenix/ (HTTP
  200, full rendered DOM + `css/style.css` (86KB) + Bootstrap 4 + Owl
  Carousel + AOS + Magnific Popup + datepicker + timepicker + Flaticon +
  Icomoon + Ionicons + countdown plugin extracted 2026-08-12 during prep).
  The TEMPLATES.md screenshot (`phoenix-free-template.jpg`, 1200×946, AVIF)
  was also viewed in the browser and confirms the design: dark navbar over a
  baseball-photo hero, uppercase white headline "FIELDRUN BASEBALL CLUB",
  blue "Watch match" + green "Get ticket" buttons, dark match strip with the
  Phoenix vs Jacksonville matchup, "BASEBALL CHAMPIONS LEAGUE / Semi-Final",
  a countdown (171 Days / 11 Hours / 10 Minutes / 39 Seconds) and a green
  "Buy Tickets" button, and a yellow phoenix logo mark + "PHOENIX" wordmark
  top-left.
- **Section order (1:1):**
  1. Header (`nav.ftco-navbar-light`, transparent, `position: absolute; top:
20px`, z-index 3, over the hero): `.navbar-brand` logo left — yellow
     icon (`.navbar-brand i`, **#fdd043**, 40px) + "Phoenix" wordmark with a
     dark mark (`.navbar-brand:before`, **#171b21**) behind it; centered nav
     `.navbar-nav` — Home, About, Games, Blog, Contact (Oswald, uppercase);
     right `.nav-item.cta > a` dark "Buy Ticket" pill (bg **#171b21**, white
     text, radius 4px, padding .8rem 18px). Nav turns white (`.scrolled`)
     after scrolling. Mobile: hamburger toggler with the same links.
  2. Hero (`.hero-wrap.js-fullheight`, bg image `images/bg_1.jpg` cover,
     top center) + `.overlay` dark: left column `.slider-text` — h1
     "Fieldrun Baseball Club" (80px, white, 900, uppercase, Oswald, line
     height 1.2), paragraph (Duden placeholder copy), buttons:
     `.btn.btn-secondary` "Watch match" (bg **#207dff**) + `.btn.btn-primary`
     "Get ticket" (bg **#00bd56**, white; hover → black bg #000).
  3. Upcoming match strip (`.game-wrap-1`, bg **#171b21**, padding 30px,
     full-bleed container-fluid): left team block — circular logo
     (`images/team-1.jpg`) + h3 "Phoenix" (uppercase); center — h3 `.league`
     "Baseball Champions League" (24px, rgba(255,255,255,.5), uppercase) +
     span "Semi-Final"; countdown `#timer` (4 `.time` blocks: days, hours,
     minutes, seconds; 40px, 600, white, Oswald, 25% width, left border
     1px solid rgba(255,255,255,.1)); right — green `.btn.btn-primary`
     "Buy Tickets".
  4. Latest Game Result (`.scoreboard` section on `.slash` diagonal split):
     `.heading-section` h2 "Latest Game Result" (50px, 700, uppercase,
     Oswald; accent word in green **#00bd56** span); scoreboard row
     `.sport-team-wrap`: team block (logo + h4 "Phoenix") — score h3 "12"
     (`.score`, 60px, 800) — "vs" divider — score "8" — team block (logo +
     h4 "Mighty Falcons"); "Game Report" link. Slash: `:before` skewed
     -40deg **#207dff** left half + `:after` **#00bd56** right half,
     z-index -1.
  5. Game Schedule (`.ftco-game-schedule ftco-no-pt`): `.heading-section` h2
     "Game Schedule"; `.carousel-game-schedule.owl-carousel` with 6 `.item`
     cards `.game-sched` (white bg, 1px solid rgba(0,0,0,.1), padding 20px 0,
     shadow 0 42px 29px -31px rgba(0,0,0,.05)): team logos + h3
     (Phoenix / Jacksonville, 18px 700), divider, "Home @ Arena", date
     "June 7, 2018", "Watch Game" link; green owl dots (`.owl-dot.active` bg
     **#00bd56**).
  6. Highlights (`.ftco-highlights ftco-no-pt`): `.video-wrap` (bg image
     `images/video.jpg`, height 400px, radius 5px, shadow
     0 -18px 93px -56px rgba(0,0,0,.59)), centered circular play button.
  7. About (`.ftco-about.img`, bg image `images/bg_2.jpg` + `.overlay` +
     slash split `:before` **#00bd56** right 50% / `:after` **#207dff** left
     50%, opacity .8): `.heading-section-white` h2 "About the Phoenix" +
     3 paragraphs (Duden/Vokalia copy) + "Watch Game" link with arrow icon;
     right image column.
  8. Next Match (`.ftco-game-schedule`): `.heading-section` h2 "Next Match";
     left image `.img-game`; right column of 4 `.game-sched` cards:
     "Home @ Arena - June 7, 2018", "vs", team names Phoenix / Jacksonville,
     "Watch Game".
  9. Team Squad (`.ftco-team.img` + `.overlay`, slash split `:before`
     **#207dff** right / `:after` **#171b21** left, opacity .5/.8):
     `.heading-section-white` h2 "Our Team **Squad**" (accent word green
     span) + paragraph; `.carousel-team.owl-carousel` with 9 `.team-wrap`
     cards: player photo (`images/team-3.jpg`…), h3 name "David Scott"
     (22px, white, 800), span position — Catcher, Tight End, Pitcher, First
     Baseman, Second Baseman, Third Baseman, Right Fielder, Center Fielder,
     Left Fielder; green owl dots.
  10. Services (`.services-section.bg-light`): 4 `.block-6.services` media
      blocks: green icon (`.services .icon span`, **#00bd56**), h3 (22px,
      700, uppercase) — Baseball Training, Softball Training, Basic Defense,
      Basic Tactics — + paragraph (Duden copy).
  11. Testimonials (`.testimony-section.slash` + `.overlay` **#171b21**):
      `.heading-section-white` h2 "Happy Viewers"; `.carousel-testimony`
      with 5 `.testimony-wrap` cards: avatar `.user-img`, green quote icon
      (**. #00bd56**), quote paragraph (Duden copy), name "Jason Smith"
      (white, Oswald), role "Viewer".
  12. Recent News (`.ftco-section`): `.heading-section` h2 "Recent News";
      4 `.blog-entry` cards: image, date block `.topp` ("29 / May / 2019"),
      h3 heading "Why Lead Generation is Key for Business Growth" (20px,
      600), paragraph, "More Details" link (hover green).
  13. Counters (`.section-counter`): 4 `.counter-wrap` > `.block-18.text-
center`: animated count-up number + label — Game Played, Coaches,
      Trophies, Members.
  14. Subscribe (`.ftco-subscribe.img` + `.overlay`): `.heading-section-white`
      h2 "Subcribe to our upcoming match" + text + `.subscribe-form`:
      email input (height 70px, white, radius 5px 0 0 5px) + `.submit`
      button (bg **#00bd56**, black text, 16px, radius 0 5px 5px 0).
  15. Footer (`.ftco-footer`, bg **#000000**, padding 7em 0): 5 widgets —
      "Phoenix" (logo + about text + `.ftco-footer-social` icons, hover
      green), "Services" (Senior Team, For Kids, Reviews, FAQs), "About Us"
      (Our Story, Meet the team, Coach), "Company" (About Us, Press, Contact,
      Careers), "Have a Questions?" (`.block-23`: address "203 Fake St.
      Mountain View, San Francisco, California, USA", phone "+2 392 3929
      210", email "info@yourdomain.com"); bottom row (text-center): copyright
      "Copyright ©<year> All rights reserved | This template is made with ♥
      by Colorlib".
- **Design tokens extracted from `css/style.css` + computed styles:**
  - Primary green **#00bd56** — `.btn.btn-primary` bg ("Get ticket", "Buy
    Tickets"), links, nav hover/active, `.heading-section h2 span` accent
    word, `.slash:after` (right half), owl-dot active, `.services .icon
span`, `.subscribe-form .submit`, `.ftco-footer-social li a:hover`,
    `.ftco-about:before` (slash left... see note), quote icon.
  - Secondary blue **#207dff** — `.btn.btn-secondary` ("Watch match"),
    `.slash:before` (left half), `.ftco-about:after`, `.ftco-team:before`,
    `.block-27` pagination.
  - Dark **#171b21** — nav CTA "Buy Ticket" pill, `.navbar-brand:before`
    mark, `.game-wrap-1` strip, `.ftco-team:after`, `.testimony-section
.overlay`.
  - Yellow **#fdd043** — `.navbar-brand i` logo icon.
  - Footer **#000000**; hero/about/subscribe overlays rgba(0,0,0,…);
    `.game-sched` white cards, border rgba(0,0,0,.1), shadow
    0 42px 29px -31px rgba(0,0,0,.05); `.scoreboard` radius 4px; video-wrap
    radius 5px; `.league` text rgba(255,255,255,.5).
  - Fonts: **"Oswald", Arial, sans-serif** for headings/nav/buttons
    (`.h1–.h4`, `.navbar-brand`, `.navbar-nav .nav-link`, `#timer .time`,
    `.testimony-wrap .name`, table cells) + **"Lato", Arial, sans-serif**
    body (16px, line-height 1.8, weight 400, color **#999999**); Google
    Fonts via `<link>` in `index.html`.
  - Type scale: hero h1 80px/900/uppercase; section h2 50px/700/uppercase;
    score 60px/800; countdown 40px/600; team name 22px/800; service h3
    22px/700/uppercase; blog heading 20px/600; league label 24px.
  - Buttons: `.btn-primary` green bg → hover black; `.btn-secondary` blue
    #207dff; CTA pill dark #171b21 radius 4px; subscribe submit radius
    0 5px 5px 0 (input 5px 0 0 5px); base radius 0.25rem.
  - Rhythm: nav top 20px; game-wrap-1 padding 30px; section vertical padding
    ~7em (`ftco-subscribe` / `ftco-footer`); `.game-sched` padding 20px 0;
    video-wrap height 400px; scoreboard padding 60px 0.
- **Visual design (screenshot `phoenix-free-template.jpg`):** dark, sporty,
  athletic baseball club site — dark header over a bright baseball-photo
  hero, big white uppercase Oswald headline, blue + green CTA buttons, dark
  match strip with two circular team logos, league label and a large
  countdown, green accents everywhere (buttons, links, icons, dots) on a
  white/light canvas below, skewed diagonal blue→green "slash" band behind
  the scoreboard and about sections, dark team-squad band, light services
  row, white blog cards with date blocks, black footer.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/slugger-<n>/<w>/<h>`); flaticon/icomoon/ionicons →
  lucide-react (Play, Calendar, MapPin, Phone, Mail, ArrowRight, Twitter,
  Facebook, Instagram, Youtube, Menu, X); Oswald + Lato via Google Fonts
  `<link>`; countdown → live ticking timer (days/hours/minutes/seconds) to a
  fixed future date; owl carousels (schedule, team, testimonials) →
  auto-advancing sliders with green dots; counters → animated count-up on
  view; hero/nav scroll state → transparent navbar that turns solid white
  after scroll; mobile nav → hamburger panel with same links; subscribe +
  footer forms → front-end only; original copy paraphrased keeping the same
  content kinds; no assets copied.

Slugger lives in `apps/slugger` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a transparent-over-hero header with a logo, centered
nav links, and a dark "Buy Ticket" button that turns solid white after
scrolling.

#### Scenario: Header content

- **GIVEN** the Slugger page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Slugger" as a logo (yellow mark +
  uppercase wordmark) on the left
- **AND** it SHALL show centered nav links: Home, About, Games, Blog, and
  Contact
- **AND** it SHALL show a dark "Buy Ticket" pill button on the right

#### Scenario: Scrolled header

- **GIVEN** the page is at the top
- **WHEN** the user scrolls down
- **THEN** the header SHALL switch from transparent to a solid light
  background

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a hamburger menu SHALL expand to show the same nav links and the
  Buy Ticket button

### Requirement: Hero

The system SHALL render a full-height hero with a photo background, an
overlay, a large uppercase headline, a paragraph, and two buttons ("Watch
match" blue, "Get ticket" green).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Fieldrun Baseball Club" (white,
  uppercase, ~80px)
- **AND** it SHALL show a short paragraph
- **AND** it SHALL show a blue "Watch match" button and a green "Get ticket"
  button

### Requirement: Upcoming match strip

The system SHALL render a dark full-width strip with two teams, a league
label, a live countdown, and a green "Buy Tickets" button.

#### Scenario: Match strip content

- **GIVEN** the page is rendered
- **WHEN** the strip is displayed
- **THEN** it SHALL show the home team "Sluggers" (logo) on the left and the
  away team "Jacksonville" (logo) on the right
- **AND** it SHALL show the league label "Baseball Champions League" and the
  round "Semi-Final" in the middle
- **AND** it SHALL show a countdown with four units: days, hours, minutes,
  seconds
- **AND** it SHALL show a green "Buy Tickets" button

#### Scenario: Countdown ticks

- **GIVEN** the match strip is displayed
- **WHEN** time passes (or the timer is mocked)
- **THEN** the countdown SHALL count down toward the target date and the
  displayed units SHALL update

### Requirement: Scoreboard

The system SHALL render a scoreboard section on a skewed diagonal split
background with a heading, two teams with scores, and a "Game Report" link.

#### Scenario: Scoreboard content

- **GIVEN** the page is rendered
- **WHEN** the scoreboard section is displayed
- **THEN** it SHALL show the heading "Latest Game Result"
- **AND** it SHALL show the home team with score 12 and the away team
  "Mighty Falcons" with score 8
- **AND** it SHALL show a "Game Report" link
- **AND** the section background SHALL use the diagonal blue/green slash
  treatment

### Requirement: Game schedule carousel

The system SHALL render a game schedule section with a heading and a
carousel of schedule cards, each with two team logos, a venue, a date, and a
"Watch Game" link.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show the heading "Game Schedule"
- **AND** it SHALL show multiple schedule cards (Sluggers vs Jacksonville)
  with "Home @ Arena", a date, and a "Watch Game" link
- **AND** the carousel SHALL advance automatically with green dot indicators

### Requirement: Video highlights

The system SHALL render a video highlights block with a large rounded image
and a centered play button.

#### Scenario: Highlights content

- **GIVEN** the page is rendered
- **WHEN** the highlights block is displayed
- **THEN** it SHALL show a wide image (radius 5px) with a circular play
  button in the center

### Requirement: About section

The system SHALL render an about section on a photo background with the
diagonal slash treatment, a heading, paragraphs, a "Watch Game" link, and an
image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About the Phoenix"
- **AND** it SHALL show paragraphs and a "Watch Game" link with an arrow
- **AND** it SHALL show a team photo on the right

### Requirement: Next match preview

The system SHALL render a "Next Match" section with a heading, a large image,
and four schedule cards.

#### Scenario: Next match content

- **GIVEN** the page is rendered
- **WHEN** the next-match section is displayed
- **THEN** it SHALL show the heading "Next Match"
- **AND** it SHALL show an image on the left and four schedule cards on the
  right (venue/date "Home @ Arena - June 7, 2018", "vs", team names, "Watch
  Game")

### Requirement: Team squad carousel

The system SHALL render a dark team section with the diagonal slash
treatment, a heading, and a carousel of player cards (photo, name, position).

#### Scenario: Squad content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Team Squad" with the accent word
  highlighted
- **AND** it SHALL show player cards with a photo, the name "David Scott",
  and a field position (Catcher, Pitcher, First Baseman, etc.)
- **AND** the carousel SHALL advance automatically with green dot indicators

### Requirement: Services

The system SHALL render a light services section with four blocks, each with
a green icon, an uppercase title, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show four services: "Baseball Training", "Softball
  Training", "Basic Defense", and "Basic Tactics"
- **AND** each block SHALL show a green icon, an uppercase title, and a
  description paragraph

### Requirement: Testimonial carousel

The system SHALL render a testimonials section with a dark overlay, a
heading, and a carousel of testimonial cards (avatar, quote, name, role).

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Happy Viewers"
- **AND** each card SHALL show an avatar, a quote, the name "Jason Smith",
  and the role "Viewer"
- **AND** the carousel SHALL advance automatically

### Requirement: Recent news

The system SHALL render a blog section with a heading and four news cards,
each with an image, a date block, a title, a snippet, and a "More Details"
link.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show the heading "Recent News"
- **AND** it SHALL show four cards, each with a date block ("29 / May /
  2019"), the title "Why Lead Generation is Key for Business Growth", a
  snippet, and a "More Details" link

### Requirement: Counters

The system SHALL render a counter strip with four animated count-up stats and
labels.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show four stats: Game Played, Coaches, Trophies, and
  Members
- **AND** the numbers SHALL count up when they enter the viewport (or render
  at their final values in tests)

### Requirement: Subscribe

The system SHALL render a subscribe section on a photo background with a
heading, text, an email input, and a green submit button.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the heading "Subcribe to our upcoming match"
- **AND** it SHALL show an email input with a green "Subscribe" submit
  button (joined input/button pill)

#### Scenario: Subscribe submit

- **GIVEN** the subscribe form is displayed
- **WHEN** the user enters an email and submits
- **THEN** the form SHALL prevent default navigation and show a success
  state (or a front-end validation message on an invalid email)

### Requirement: Footer

The system SHALL render a black footer with five link widgets, contact
details, and a copyright row crediting ColorLib.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand widget (logo, about text, social icons)
- **AND** it SHALL show link widgets: Services (Senior Team, For Kids,
  Reviews, FAQs), About Us (Our Story, Meet the team, Coach), and Company
  (About Us, Press, Contact, Careers)
- **AND** it SHALL show a "Have a Questions?" widget with an address, a
  phone number, and an email
- **AND** the bottom row SHALL show the copyright line "Copyright © All
  rights reserved | This template is made with ♥ by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Slugger app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, match strip, scoreboard,
  game schedule, highlights, about, next match, team squad, services,
  testimonials, news, counters, subscribe, and footer in order
- **AND** the document title SHALL be "Slugger — Baseball Club Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/slugger`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/slugger`)
- [ ] Section order matches the reference 1:1 (header → hero → match strip → scoreboard → game schedule → highlights → about → next match → team squad → services → testimonials → news → counters → subscribe → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #00bd56, secondary #207dff, dark #171b21, yellow #fdd043, footer #000000, text #999999; Oswald + Lato Google Fonts)
- [ ] Header: transparent over hero → solid after scroll, logo (yellow mark + wordmark) + nav (Home/About/Games/Blog/Contact) + dark "Buy Ticket" pill, mobile hamburger
- [ ] Hero: full-height photo bg + overlay, h1 "Fieldrun Baseball Club" (80px white uppercase), paragraph, blue "Watch match" + green "Get ticket" buttons
- [ ] Match strip: dark #171b21, Sluggers vs Jacksonville logos, "Baseball Champions League" + "Semi-Final", live countdown (days/hours/minutes/seconds), green "Buy Tickets"
- [ ] Scoreboard: "Latest Game Result", 12 : 8 vs Mighty Falcons, "Game Report", diagonal blue/green slash background
- [ ] Game schedule: heading + auto-advancing carousel of cards (logos, "Home @ Arena", date, "Watch Game"), green dots
- [ ] Highlights: 400px image radius 5px + centered play button
- [ ] About: photo bg + slash treatment, "About the Phoenix", paragraphs, "Watch Game" link, right image
- [ ] Next match: heading + left image + 4 schedule cards ("Home @ Arena - June 7, 2018", "vs", "Watch Game")
- [ ] Team squad: dark slash section, "Our Team Squad" (accent word), 9 player cards (photo, name, position), auto carousel + green dots
- [ ] Services: light bg, 4 blocks (Baseball Training, Softball Training, Basic Defense, Basic Tactics) with green icons
- [ ] Testimonials: dark overlay, "Happy Viewers", auto carousel (avatar, quote, "Jason Smith", "Viewer")
- [ ] News: "Recent News" + 4 cards with date block "29 / May / 2019", title, snippet, "More Details"
- [ ] Counters: 4 animated stats (Game Played, Coaches, Trophies, Members)
- [ ] Subscribe: photo bg, "Subcribe to our upcoming match", email input + green submit pill
- [ ] Footer: black bg, brand + Services/About Us/Company link widgets + "Have a Questions?" contact info + ColorLib credit row
