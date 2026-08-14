# Template: Dugout (Bootstrap Sports — Baseball Club)

## Purpose

Dugout is a single-page baseball-club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Phoenix" free template (source:
https://colorlib.com/wp/template/phoenix/), built under a DIFFERENT name
(**Dugout** — the dugout is where a baseball team sits during a game, a
baseball-native name; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Phoenix" is FORBIDDEN as the app
> name. **Dugout** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

The original is a dark-and-bold baseball club site: a full-screen hero photo
overlaid with a near-black `rgba(0,0,0,.3)` scrim, a dark `#171b21` match
strip with a countdown timer, a blue-slash scoreboard, a highlights video
block, game-schedule cards, an about section, a 9-player team squad, four
service cards, a blue testimonial slider, a news grid, animated counters, an
email subscribe form, and a black footer. The palette is emerald green
`#00bd56` (primary CTA) + electric blue `#207dff` (secondary CTA) + dark
navy `#171b21` on white/light `#f8f9fa` sections, with gold `#fdd043` in the
brand mark. Typography is Oswald (uppercase headings) + Lato (body). Dugout
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Phoenix". Listed in TEMPLATES.md under
  **Bootstrap (216)** (line 474). Free baseball-club website template. The
  slug `phoenix` appears exactly once (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/phoenix/` (HTTP 200, 49.5KB HTML,
  `<title>Phoenix - Free Bootstrap 4 Template by Colorlib</title>`). Custom
  stylesheet: `css/style.css` (85.9KB — Bootstrap 4.2.1 base + the theme's
  custom overrides; token source). Vendor sheets (owl carousel, animate,
  aos, magnific-popup, ionicons, icomoon, flaticon, open-iconic) are for
  sliders/icons and are NOT copied. Structure, copy, and tokens below are
  from the live DOM + `style.css`.
- **Visual design (screenshot `phoenix-free-template.jpg`, 1200×946,
  browser-verified 2026-08-14):** modern sports-team aesthetic — dark
  semi-transparent navbar over a full-width photo of baseball players
  celebrating; gold bird/flame brand icon + white "PHOENIX" wordmark; white
  uppercase hero headline "FIELDRUN BASEBALL CLUB" with a Lato paragraph and
  TWO buttons (blue "Watch match", bright-green "Get ticket"); a dark navy
  match strip with two round team logos facing a "VS", "BASEBALL CHAMPIONS
  LEAGUE / Semi-Final", a digital countdown (171 days…), and a green "Buy
  Tickets" button; below, a white/light area with "GAME REPORT". Emerald
  green + electric blue + dark navy on white — bold, high-contrast,
  professional.
- **Section order (1:1 from live DOM):**
  1. **Navbar** — `nav.ftco-navbar-light` (transparent, absolute over the
     hero): Oswald uppercase brand "Phoenix" with a gold `#fdd043` icon
     mark, links **Home / About / Games / Blog / Contact**, and a dark CTA
     button **Buy Ticket** (`#171b21` bg, 4px radius, white text). On
     scroll the bar turns solid white with black links.
  2. **Hero slider** — `div.hero-wrap` full-width background image
     (`images/bg_2.jpg`) with overlay `rgba(0,0,0,.3)`; `div.slider-text`:
     `h1` "Fieldrun Baseball Club" (80px, white, weight 900, uppercase
     Oswald), a Lato paragraph ("A small river named Duden flows by their
     place…"), and two buttons — **Watch match** (`btn-secondary` = blue
     `#207dff`) and **Get ticket** (`btn-primary` = green `#00bd56`);
     hover turns either button black.
  3. **Match / countdown strip** — `div.game-wrap-1` (bg `#171b21`, padding
     30px, inside a full-width section): four columns — (a) `vs` badge
     centered over two round 60px team-logo images + uppercase team names
     (Phoenix vs Jacksonville, 14px white 700); (b) league block: `h3.league`
     "Baseball Champions League" (24px, `rgba(255,255,255,0.5)`, uppercase)
     - span "Semi-Final" (`rgba(255,255,255,0.8)`); (c) countdown timer
       `#timer` with four `.time` cells (#days #hours #minutes #seconds —
       40px Oswald 600 white, `border-left: 1px solid rgba(255,255,255,0.1)`,
       25% width each); (d) green **Buy Tickets** button.
  4. **Game Report / Latest Game Result** — centered `heading-section`:
     `span.subheading` "Game Report" (16px, uppercase, letter-spacing 1px) +
     `h2` "Latest Game Result" (50px, weight 700, uppercase, dark; span
     accent green `#00bd56`). Below, `div.scoreboard.slash` (radius 4px,
     padding 60px 0; the `.slash:before` paints a SKEWED blue `#207dff`
     panel, `skewX(-40deg)`, behind it): a divider line "Mon. June 3, 2019;
     Baseball Champions League" and a `sport-team-wrap` with a centered `vs`
     badge and two team blocks with scores (**12** vs **8**).
  5. **Watch Highlights** — `ftco-highlights`: `div.video-wrap` (height
     400px, radius 5px, `margin-top: -8em` so it OVERLAPS the scoreboard's
     tall padding-bottom; shadow `0 -18px 93px -56px rgba(0,0,0,0.59)`) with
     a play button; heading "Watch Highlights".
  6. **Game Schedule** — centered heading "Game Schedule" + a horizontal
     carousel (owl) of schedule cards `div.game-sched` (white bg, `1px solid
rgba(0,0,0,0.1)` border, shadow `0 42px 29px -31px rgba(0,0,0,0.05)`,
     padding 20px 0) — six cards, each "Home @ Arena - June 7, 2018 vs
     Phoenix Jacksonville" with team logos. Owl dots: 10px circles
     `rgba(0,0,0,0.1)`, active dot green `#00bd56`.
  7. **About the Phoenix** — `ftco-about` (image bg): two columns with
     photos (`images/about.jpg`, `about-1.jpg`), heading "About the Phoenix",
     "Far far away, behind the word mountains…" copy, and a blue **Watch
     Game** button (`btn-secondary`).
  8. **Next Match / Schedule** — second `ftco-game-schedule` section:
     heading "Schedule" + "Next Match" + four more of the same schedule
     cards.
  9. **Our Team Squad** — `ftco-team` (image bg): heading "Our Team Squad"
     - NINE player cards (name + role; photo). DOM has the placeholder name
       "David Scott" repeated 9×; roles: Catcher, Tight End [sic — football
       position in the original], Pitcher, First Baseman, Second Baseman,
       Third Baseman, Right Fielder, Center Fielder, Left Fielder.
  10. **Services** — `services-section bg-light` (`#f8f9fa`): heading + four
      cards — **Baseball Training**, **Softball Training**, **Basic
      Defense**, **Basic Tactics** — each with a 75px icon area and "A small
      river named Duden flows by their place and supplies…" copy.
  11. **Happy Viewers** — `testimony-section slash` (same skewed blue
      `#207dff` treatment): heading "Happy Viewers" + testimonial slider
      (FIVE slides), each "Far far away…" copy + author "Jason Smith
      Viewer" + round avatar.
  12. **Recent News** — blog section: THREE news cards, each a date block
      (**29 May 2019**), title "Why Lead Generation is Key for Business
      Growth" (repeated in the original), and a 270px cover image
      (`images/image_1..4.jpg`).
  13. **Counter** — `ftco-counter bg-light`: FOUR counters — **Game Played,
      Coaches, Trophies, Members** — numbers 60px, weight 300, black
      (JS count-up in the original; static values are fine).
  14. **Subscribe** — `ftco-subscribe img` (bg photo): heading "Subcribe to
      our upcoming match" (typo present in the original — may be fixed to
      "Subscribe…") + `subscribe-form`: 70px white email input (radius
      `5px 0 0 5px`, font-size 20px, placeholder "Enter email address") +
      green submit "Subscribe" (bg `#00bd56`, black text, radius
      `0 5px 5px 0`).
  15. **Footer** — `ftco-footer` (bg `#000000`, padding 7em 0): FIVE
      widgets — brand block (about text + social icons), **Services**
      (Senior Team, For Kids, Reviews, FAQs), **About Us** (Our Story, Meet
      the team, Coach, Contact), **Company** (About Us, Press, Contact,
      Careers), and **Have a Questions?** contact widget (203 Fake St.
      Mountain View, San Francisco, California, USA / +2 392 3929 210 /
      info@yourdomain.com). Copyright line ends "This template is made with
      by Colorlib" → per monorepo convention replace with a **Component
      Dock** attribution linking `https://www.componentdock.com/`.
- **JS behaviors (original):** hero is a slider (owl/hero), the countdown
  timer fills `#days/#hours/#minutes/#seconds` via JS, counters count up via
  JS, testimonial + schedule use owl carousels. Recreate in React: countdown
  as a simple ticking timer component (or static target date), counters as
  static numbers (count-up optional), carousels as CSS scroll/horizontal
  overflow rows or a lightweight index-based slider (no new deps — use
  overflow-x-auto with snap, or index state). All copy is static
  presentational text (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#00bd56` — emerald green, the PRIMARY accent: `btn-primary` bg
    (`background: #00bd56 !important; border: 1px solid #00bd56 !important`),
    `heading-section h2 span` accent, active owl dot, subscribe submit bg,
    link hover color.
  - `#207dff` — electric blue, SECONDARY: `btn-secondary` bg (Watch match /
    Watch Game buttons), the skewed `.slash` background panels (scoreboard +
    testimony sections).
  - `#171b21` — dark navy: `.game-wrap-1` match-strip bg (padding 30px),
    nav CTA "Buy Ticket" bg (`border-radius: 4px`), navbar-brand skew
    panel, testimony overlay.
  - `#fdd043` — gold: navbar-brand icon (bird/flame mark).
  - `#000000` — black: footer bg, hero overlay `rgba(0,0,0,.3)`, counter
    numbers, button HOVER state (both primary and secondary flip to black).
  - `#ffffff` — white: cards, subscribe input, hero text, footer headings.
  - `#f8f9fa` — light section bg (`bg-light`: services, counter).
  - `rgba(0,0,0,0.8)` — heading color on light (`h1-h4` Oswald default);
    `rgba(255,255,255,0.5)` league text / `rgba(255,255,255,0.8)` muted
    white text on dark strips; `rgba(0,0,0,0.5)` uppercase small labels
    (e.g. team roles); `rgba(0,0,0,0.7)` subscribe input text.
  - Card border `rgba(0,0,0,0.1)`; card shadow `0 42px 29px -31px
rgba(0,0,0,0.05)`; video-wrap shadow `0 -18px 93px -56px
rgba(0,0,0,0.59)`; countdown cell divider `1px solid rgba(255,255,255,0.1)`.
- **Fonts:** **Oswald** for ALL headings + brand + countdown (`h1-h4`:
  `font-family: "Oswald", Arial, sans-serif`, uppercase, weight 400 default;
  hero h1 weight 900; countdown `.time` weight 600, 40px) and **Lato** for
  body (`body { font-family: "Lato", Arial, sans-serif; font-size: 16px }`).
  Load both via Google Fonts `<link>` in `index.html` (the preview itself
  has no visible fonts link — served locally — but our convention is Google
  Fonts).
- **Buttons:** primary = `#00bd56` bg, white text, 1px `#00bd56` border;
  secondary = `#207dff` bg, white text; hover = black `#000000` bg/border
  for BOTH; radius ~4px (`btn` base); nav CTA "Buy Ticket" = `#171b21` bg,
  4px radius, white text; subscribe submit = `#00bd56` bg, BLACK text,
  radius `0 5px 5px 0`; hero buttons are `py-3 px-4`.
- **Radii:** 4px (buttons, scoreboard, nav CTA), 5px (video-wrap,
  subscribe input `5px 0 0 5px`), 50% (team logos 60px, avatars 60px),
  0 elsewhere (sharp cards).
- **Shadows:** schedule cards `0 42px 29px -31px rgba(0,0,0,0.05)`; video
  wrap `0 -18px 93px -56px rgba(0,0,0,0.59)`; scrolled navbar
  `0 0 10px 0 rgba(0,0,0,0.1)`.
- **Spacing rhythm:** section padding `7em 0` (subscribe, footer); heading
  `h2` 50px with `mb-4`; scoreboard padding 60px 0 (variant `padding-bottom:
12em` under the overlapping highlights video); game-wrap padding 30px;
  schedule card padding 20px 0; subscribe input height 70px; team-logo/
  avatar 60px circles; icon area 75px.
- **Icons:** lucide-react only — gold brand mark (e.g. `Flame` or a custom
  inline SVG bird mark), play button (`Play`), service icons (probe
  exports: e.g. `Dumbbell`/`Target`/`Shield`/`Swords` — check with the
  typeof probe before committing, lucide-react has renamed/removed icons
  silently before), social icons in footer, `ChevronLeft/ChevronRight` for
  carousels if index-based. The original's icomoon/flaticon/ionicons font
  files are NOT copied.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed/absolute transparent navbar over the hero
with the brand, page links, and a dark Buy Ticket CTA.

#### Scenario: Brand and links

- **GIVEN** the Dugout page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand wordmark in uppercase Oswald
  (new name, e.g. "DUGOUT") with a gold `#fdd043` icon mark
- **AND** it SHALL show links Home, About, Games, Blog, Contact
- **AND** it SHALL show a dark `#171b21` CTA button "Buy Ticket" (white
  text, 4px radius)

#### Scenario: Scroll behavior

- **GIVEN** the navbar is transparent over the hero
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become a solid white bar with black links and a
  subtle shadow

### Requirement: Hero slider

The system SHALL render a full-width hero with a photo background, scrim,
headline, subtext, and two CTAs.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width background image with a
  `rgba(0,0,0,.3)` overlay
- **AND** a large white uppercase headline (80px, weight 900, Oswald) in
  the same kind as the reference ("Fieldrun Baseball Club" → e.g. "Dugout
  Baseball Club")
- **AND** a Lato paragraph of muted intro copy (same kind; paraphrase
  allowed)
- **AND** two buttons: "Watch match" (blue `#207dff`) and "Get ticket"
  (green `#00bd56`)

#### Scenario: Button hover

- **GIVEN** either hero button is displayed
- **WHEN** the user hovers it
- **THEN** the button SHALL turn black (`#000000`) with white text

### Requirement: Match countdown strip

The system SHALL render a dark `#171b21` match strip with team logos, league
info, a live countdown, and a Buy Tickets CTA.

#### Scenario: Strip layout

- **GIVEN** the match strip is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a `vs` badge centered over two round team-logos
  with uppercase team names (home "Dugout" vs away "Jacksonville")
- **AND** the league block SHALL read "Baseball Champions League" (24px,
  uppercase, muted white `rgba(255,255,255,0.5)`) with "Semi-Final" below
- **AND** a four-cell countdown timer (Days / Hours / Minutes / Seconds,
  40px Oswald 600 white, separated by `1px solid rgba(255,255,255,0.1)`)
  SHALL count down to a future match time
- **AND** a green "Buy Tickets" button SHALL be present

### Requirement: Latest game result scoreboard

The system SHALL render a centered scoreboard on a skewed blue panel with
the latest game score.

#### Scenario: Scoreboard content

- **GIVEN** the scoreboard section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show the subheading "Game Report" (16px,
  uppercase, letter-spacing 1px) and heading "Latest Game Result" (50px,
  uppercase, weight 700; an accent span in green `#00bd56`)
- **AND** the scoreboard SHALL sit on a skewed blue `#207dff` panel
  (radius 4px, padding 60px 0) with a divider date line ("Mon. June 3,
  2019; Baseball Champions League")
- **AND** it SHALL show two teams with scores (e.g. **12** vs **8**) and a
  centered `vs` badge

### Requirement: Highlights video block

The system SHALL render a highlights video block overlapping the scoreboard
with a play button.

#### Scenario: Video block

- **GIVEN** the highlights section is displayed
- **WHEN** the page loads
- **THEN** a 400px-tall media block (radius 5px, soft shadow) SHALL overlap
  the section above (`-8em` pull-up) and show a play button
- **AND** the section SHALL be headed "Watch Highlights"

### Requirement: Game schedule cards

The system SHALL render game-schedule cards (home/away teams, venue, date)
in a horizontally scrollable row.

#### Scenario: Schedule cards

- **GIVEN** the game schedule section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL be headed "Game Schedule"
- **AND** it SHALL show at least six schedule cards, each with a
  `rgba(0,0,0,0.1)` border, soft shadow, white background, 20px padding,
  and content of the same kind as "Home @ Arena - June 7, 2018 vs Dugout
  Jacksonville" (venue, date, opposing team)

#### Scenario: Next match section

- **GIVEN** the second schedule section is displayed
- **WHEN** the page loads
- **THEN** it SHALL be headed "Schedule" with a "Next Match" sub-label and
  SHALL show four more of the same schedule cards

### Requirement: About section

The system SHALL render an about section with photos, club story copy, and a
Watch Game CTA.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the page loads
- **THEN** it SHALL show photos on one side and a heading "About the
  [Club]" with placeholder club-story copy on the other
- **AND** a blue "Watch Game" button SHALL be present

### Requirement: Team squad

The system SHALL render nine player cards with name, role, and photo.

#### Scenario: Squad grid

- **GIVEN** the team section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL be headed "Our Team Squad"
- **AND** it SHALL show nine player cards, each with a photo, a name, and a
  role from the reference: Catcher, Tight End, Pitcher, First Baseman,
  Second Baseman, Third Baseman, Right Fielder, Center Fielder, Left
  Fielder
- **AND** player names SHALL be present (the reference repeats one
  placeholder name; unique placeholder names are acceptable — roles are the
  meaningful data)

### Requirement: Services

The system SHALL render four service cards with icons on a light `#f8f9fa`
background.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL have a light `#f8f9fa` background
- **AND** it SHALL show four cards — Baseball Training, Softball Training,
  Basic Defense, Basic Tactics — each with a 75px icon area and a short
  muted description (same kind as "A small river named Duden flows by their
  place and supplies…")

### Requirement: Testimonials

The system SHALL render a testimonial slider on a skewed blue panel.

#### Scenario: Testimonial slides

- **GIVEN** the testimony section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL sit on the skewed blue `#207dff` panel
- **AND** it SHALL be headed "Happy Viewers" and show at least three
  testimonial slides (quote copy, author name, "Viewer" label, round
  avatar), navigable by arrows/dots

### Requirement: Recent news

The system SHALL render three news cards with date block, image, and title.

#### Scenario: News cards

- **GIVEN** the news section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL be headed "Recent News" and show three cards,
  each with a date block (day + month, e.g. 29 May 2019), a cover image
  (270px), and a title of the same kind as "Why Lead Generation is Key for
  Business Growth"

### Requirement: Stats counter

The system SHALL render four stat counters on a light background.

#### Scenario: Counter numbers

- **GIVEN** the counter section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL have a light `#f8f9fa` background
- **AND** it SHALL show four counters — Game Played, Coaches, Trophies,
  Members — each with a large number (60px, weight 300, black) and a
  label

### Requirement: Subscribe form

The system SHALL render a subscribe section with an email input and a green
submit button.

#### Scenario: Subscribe form

- **GIVEN** the subscribe section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show a heading of the same kind as "Subscribe
  to our upcoming match" (fixing the original's "Subcribe" typo is
  acceptable)
- **AND** a white email input (70px tall, radius `5px 0 0 5px`, 20px text,
  "Enter email address" placeholder)
- **AND** a green `#00bd56` submit button ("Subscribe", black text, radius
  `0 5px 5px 0`)

#### Scenario: Submit validation

- **GIVEN** the subscribe form is displayed
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a validation error and NOT submit
- **AND** when a valid email is submitted the form SHALL show a success
  confirmation (no backend — client-side only)

### Requirement: Footer

The system SHALL render a black footer with five widgets and the Component
Dock attribution.

#### Scenario: Footer widgets

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the footer SHALL have a black `#000000` background and show the
  brand block with social icons, the link lists Services / About Us /
  Company, and a "Have a Questions?" contact widget (address, phone,
  email)

#### Scenario: Attribution link

- **GIVEN** the footer copyright line is displayed
- **WHEN** the page loads
- **THEN** it SHALL link to `https://www.componentdock.com/` ("Component
  Dock") — replacing the original's "made with by Colorlib" line per repo
  convention

### Requirement: Page composition

The system SHALL compose all sections in order inside a main landmark with a
document title.

#### Scenario: Full page render

- **GIVEN** the Dugout app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar → hero → match strip → game result
  → highlights → game schedule → about → next match → team → services →
  testimonials → news → counter → subscribe → footer in order inside a
  `main` landmark
- **AND** the document title SHALL be "Dugout — Baseball Club Template" (or
  similar new-name title)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/dugout`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/dugout`)
- [ ] Section order matches the reference 1:1 (navbar → hero → match strip → game result → highlights → game schedule → about → next match → team → services → testimonials → news → counter → subscribe → footer)
- [ ] Design tokens from the reference in `@theme` (green #00bd56, blue #207dff, navy #171b21, gold #fdd043, black #000, light #f8f9fa; Oswald + Lato Google Fonts)
- [ ] Navbar: transparent over hero, gold icon + uppercase brand, Home/About/Games/Blog/Contact, dark `#171b21` "Buy Ticket" CTA; white solid bar + black links when scrolled
- [ ] Hero: full-width bg photo, `rgba(0,0,0,.3)` overlay, 80px 900 uppercase Oswald headline, Lato intro, blue "Watch match" + green "Get ticket" buttons (hover → black)
- [ ] Match strip: `#171b21` bg, vs badge + two 60px round team logos + uppercase names, league "Baseball Champions League" + "Semi-Final", 4-cell countdown (40px Oswald 600), green "Buy Tickets"
- [ ] Game result: subheading "Game Report" + 50px heading with green span; skewed blue `#207dff` scoreboard (4px radius, 60px padding), date divider, scores 12 vs 8 with vs badge
- [ ] Highlights: 400px media block radius 5px pulled up `-8em`, play button, "Watch Highlights" heading
- [ ] Schedule: "Game Schedule" heading + ≥6 cards (white, `rgba(0,0,0,0.1)` border, soft shadow, venue/date/opponent content); second section "Schedule" + "Next Match" + 4 cards
- [ ] About: photos + "About the [Club]" + story copy + blue "Watch Game" button
- [ ] Team: "Our Team Squad" + nine cards with the nine reference roles (Catcher … Left Fielder) and photos
- [ ] Services: `#f8f9fa` bg, four cards (Baseball Training, Softball Training, Basic Defense, Basic Tactics), 75px icons
- [ ] Testimonials: skewed blue panel, "Happy Viewers", ≥3 slides with author + avatar, arrows/dots
- [ ] News: "Recent News", three cards (date block, 270px image, title)
- [ ] Counter: `#f8f9fa` bg, Game Played / Coaches / Trophies / Members with 60px weight-300 numbers
- [ ] Subscribe: heading (typo fixed or kept), 70px white input radius `5px 0 0 5px`, green submit radius `0 5px 5px 0` black text; invalid email blocked, valid shows success
- [ ] Footer: black bg, brand + social, Services/About Us/Company links, "Have a Questions?" contact widget, Component Dock attribution link
- [ ] Document title set; no ColorLib strings anywhere in app code (provenance only in this spec + TEMPLATES.md + PR)
