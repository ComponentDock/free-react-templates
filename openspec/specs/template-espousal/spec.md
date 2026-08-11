# Template: Espousal (Wedding Template)

## Purpose

Espousal is a single-page wedding website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hookup"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hookup" — wedding/ceremony website template
  (source: https://colorlib.com/wp/template/hookup/, Bootstrap 4).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/hookup/
  (HTTP 200, "Hookup - Free Bootstrap 4 Template by Colorlib"). Live DOM
  fetched and parsed, plus `css/style.css` (unminified, complete) for tokens;
  `js/main.js` for countdown labels. The rendered page was also screenshotted
  in a browser (hero + nav visually confirmed: photo hero with dark overlay,
  white Great Vibes script names, uppercase tracking-wide subheading, 4-cell
  countdown, top-right white uppercase nav, watercolor florals in the video
  frame). Screenshot `hookup-free-template.jpg` (AVIF) reviewed visually —
  bride & groom photo, script typography, coral accents.
- **Section order (1:1, from the DOM):**
  1. Navbar (`nav#ftco-navbar`, fixed): brand "Hookup" (script font, white),
     right-aligned links — Home, Groom & Bride, Love Story, Greetings, People,
     When & Where, RSVP, Gallery (small white uppercase); hamburger on mobile.
  2. Hero (`section#home.video-hero.js-fullheight`, ~700px/full-height):
     background photo (`images/bg_1.jpg`, cover, top-center) + dark overlay
     `<div class="overlay">` + optional background YouTube video (mb.YTPlayer,
     muted loop); centered content — rose/flower icon
     (`flaticon-rose-outline-variant-with-vines-and-leaves`), subheading
     "The Wedding of" (12px, uppercase, white, letter-spacing 7px), h1
     "Francisco &amp; Laura" (Great Vibes, 9vw, white), and a countdown
     `#timer` with 4 cells (`#days`, `#hours`, `#minutes`, `#seconds`) —
     JS labels "Days / Hours / Minutes / Seconds".
  3. Invitation (`section#groom-bride-section.ftco-about`): left half = tall
     image (`images/about.jpg`); right half = centered serif text block:
     subheading "Join us to celebrate the wedding day of" (Libre Caslon Text,
     w700, uppercase), h2 "Francisco &amp; Laura" (Great Vibes, coral), rose
     icon, subheading "Which is celebration on", "Dec | 28 | 2019" (large
     time line), subheading "Starting at 2:00 in the afternoon", subheading
     "Saint John Paul Church in YorkNew.in".
  4. Bride & Groom (`section.ftco-section.bg-section`): section heading —
     clone watermark `<span class="clone">Bride &amp; Groom</span>` behind
     h2 "Bride & Groom" (Great Vibes 90px coral); two profile cards in a row:
     **Francisco Fredricksen** (groom) and **Laura Moorey** (bride) — photo,
     name, bio paragraph.
  5. Love Story (`section#lovestory-section`): clone "Love Story" + h2 "Love
     Story"; central vertical timeline (1px `#f67e7d` line at 50%), items
     alternate left/right (`timeline-inverted`): circular `timeline-badge`
     marker on the line + white `timeline-panel` (43% width, 30px padding,
     1px `rgba(0,0,0,0.15)` border) with date, `timeline-title`, and body
     text. Events: June 10, 2017 — First We Meet; June 10, 2017 — First Date;
     June 14, 2017 — In A Relationship; (date) — We're Engaged.
  6. Sweet Messages (`section#greeting-section.bg-light`): clone "Testimony"
     - h2 "Sweet Messages"; auto-rotating carousel (owl.carousel) of quote
       cards — quote paragraph + author block (avatar, name "Roger Scott",
       role "Marketing Manager").
  7. Family & Friends (`section#people-section`): clone "People" + h2 "Family
     &amp; Friends"; responsive grid of 8 member cards (photo, name, role
     label): Groomsmen — Mark Tomy, John Henceworth, Rey Cooper, Robert Chan;
     Bridesmaid — Rose Jones, Mary Dell, Alicia Brean, Angel Worth.
  8. Place & Time (`section#when-where-section.bg-light`): clone "Place" +
     h2 "Place &amp; Time"; 3 equal cards — The Reception, The Ceremony, The
     Party; each with icon, title, date "Saturday, 28, 2019", time
     "02:00 pm-10:00 pm", address "203 Fake St. Mountain View, San Francisco,
     California, USA", phone "+0 (123) 456 78 910", and a "See Map" link
     (`.btn-custom`: uppercase 12px w600, letter-spacing 1px, 1px solid
     `#fddddc` border, 8px 10px padding).
  9. RSVP (`section#rsvp-section.bg-secondary`, background `#dcf4e6` mint):
     clone "RSVP" + h2 "Are Your Attending?"; centered form (`col-md-7`):
     Name input, "Your email" input, Guest select (options Guest/1/2/3/4/5),
     Message textarea, submit button "I am attending" (`.btn.btn-primary
py-3 px-4` pill).
  10. Gallery (`section#gallery-section`): clone "Photos" + h2 "Gallery";
      `container-fluid px-md-4`; 4-column grid (`col-md-3`) of 8 square image
      tiles (`a.gallery.img.image-popup`, background-image style), hover
      reveals a centered icon (`ion-ios-image`) in a circle; opens
      magnific-popup lightbox on click.
  11. Footer (`footer.ftco-footer`, dark with overlay): brand "Hookup" + one-
      line blurb + social icon circles (Twitter, Facebook, Instagram);
      Quick Links column (Wellness, Vintge stores, Trekking, Tour,
      Sightseeing, Many more..); Links column (Home, Groom & Bride, Story,
      Greetings, People, When & Where, RSVP, Gallery); Services column
      (Organizer, Venue, Wedding Ceremony, Accomodation); "Have a
      Questions?" block (address 203 Fake St., phone, email); bottom
      copyright bar (replace the ColorLib credit with monorepo credit,
      e.g. "© <year> Espousal. All rights reserved.").
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Primary brand **coral/rose `#f67e7d`** — `.btn.btn-primary` background,
    section h2 headings (`Great Vibes`, 90px), timeline center line, hover
    accents.
  - Light coral **`#fddddc`** — `.btn-custom` border (See Map).
  - Mint/sage **`#dcf4e6`** — `.bg-secondary` (RSVP section background).
  - Light gray **`#f8f9fa`** — `.bg-light` (Sweet Messages + Place & Time
    section backgrounds).
  - Surfaces: `#fff` (cards, timeline panels, navbar text over hero);
    watermark clone text `rgba(0,0,0,0.05)` at 100px w700; body text
    `rgba(0,0,0,0.7)`.
  - Fonts: **"Great Vibes"** (cursive script) — logo, hero h1 (9vw), all
    section h2 headings (90px, `#f67e7d`); **"Poppins"** — UI/body default
    sans; **"Libre Caslon Text"** (serif, w700, uppercase) — invitation
    subheadings (`.ftco-about .subheading`). Loaded via Google Fonts in the
    recreation (`<link>` in `index.html`).
  - Buttons `.btn`: pill — `border-radius: 30px`; `.btn-primary` bg
    `#f67e7d`, border `#f67e7d`, white text. `.btn-custom` (See Map):
    text-only uppercase 12px w600 ls 1px, `border: 1px solid #fddddc`,
    `padding: 8px 10px`.
  - Form controls: height 52px, `border-radius: 0`, white bg, 16px,
    `border: 1px solid rgba(0,0,0,0.1)`, placeholder/color
    `rgba(0,0,0,0.7)`, focus border `#000`.
  - Hero subheading: 12px w600 uppercase white `letter-spacing: 7px`.
    Countdown `#timer`: 60% width, 4 cells, numbers 40px w500 white
    (30px mobile), hairline `border-left: 1px solid rgba(0,0,0,0.05)`
    dividers (none on first), labels 12px uppercase white ls 2px.
  - Section heading pattern: `.heading-section .clone` — absolute 100px
    `rgba(0,0,0,0.05)` w700 text behind `.heading-section h2` — Great Vibes
    90px coral (30px/50px on mobile).
  - Timeline: center vertical 1px `#f67e7d` line (left side on mobile);
    panels 43% width, `#fff`, 30px padding, 1px `rgba(0,0,0,0.15)` border.
  - Spacing rhythm: sections ~7em padding (`.ftco-section`), `bg-light`/
    `bg-secondary` alternate; `heading-section` margin-bottom ~80px; footer
    `ftco-section` with `.overlay` darkening.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/espousal-<n>/<w>/<h>`); icons → lucide-react (menu,
  socials, phone, mail, map-pin, calendar, clock, image, heart, users,
  chevrons); Great Vibes + Poppins + Libre Caslon Text via Google Fonts
  `<link>`; brand coral in `@theme` so shared Button/ButtonLink `primary`
  variants resolve to `#f67e7d`; pill (radius 30px) button shape via theme
  tokens; background video is optional — static hero photo + dark overlay
  is the baseline; countdown targets a fixed future demo wedding date with
  Days/Hours/Minutes/Seconds labels; no asset/CSS/font-file copying.

Espousal lives in `apps/espousal` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) and the repo-standard
Navbar/Footer chrome.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed top navigation bar with the site brand and
the wedding-site anchor links.

#### Scenario: Navbar content

- **GIVEN** the Espousal page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Espousal" in the script font
- **AND** the navbar SHALL show links Home, Groom & Bride, Love Story,
  Greetings, People, When & Where, RSVP, and Gallery that anchor to their
  sections

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the user activates the hamburger trigger
- **THEN** the navigation links SHALL be revealed in a collapsible menu

### Requirement: Hero

The system SHALL render a full-height hero with a photo background, dark
overlay, script names, subheading, and a countdown timer.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the subheading "The Wedding of", the couple names
  (e.g. "Francisco & Laura") in a large white script font, and a
  decorative floral icon above the names
- **AND** the hero SHALL show a countdown with four cells labeled Days,
  Hours, Minutes, and Seconds

#### Scenario: Countdown ticks

- **GIVEN** the hero countdown is displayed
- **WHEN** time advances
- **THEN** the countdown SHALL update toward the configured wedding date

### Requirement: Invitation

The system SHALL render an invitation section with an image on one side and
the celebration details on the other.

#### Scenario: Invitation content

- **GIVEN** the page is rendered
- **WHEN** the invitation section is displayed
- **THEN** it SHALL show an image beside a text block with "Join us to
  celebrate the wedding day of", the couple names, the celebration date,
  the start time, and the venue name

### Requirement: Bride & Groom

The system SHALL render a "Bride & Groom" section with two profile cards.

#### Scenario: Profile cards

- **GIVEN** the Bride & Groom section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a section heading "Bride & Groom" with a large
  faint watermark word behind it
- **AND** it SHALL show two cards, each with a photo, a name, and a short
  bio, labeled as the groom and the bride

### Requirement: Love Story

The system SHALL render a central vertical timeline of relationship events
alternating left and right.

#### Scenario: Timeline content

- **GIVEN** the Love Story section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a vertical center line with at least four events,
  each with a date, a title, and a short description
- **AND** the events SHALL alternate between the left and right sides of
  the line with a circular marker on the line

### Requirement: Sweet Messages

The system SHALL render a "Sweet Messages" carousel of guest quotes.

#### Scenario: Carousel content

- **GIVEN** the Sweet Messages section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a rotating set of quote cards, each with a quote
  paragraph and an author block (name and role)
- **AND** the carousel SHALL advance automatically or via controls

### Requirement: Family & Friends

The system SHALL render a grid of wedding party member cards.

#### Scenario: Member grid

- **GIVEN** the Family & Friends section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a responsive grid of eight cards, each with a
  photo, a name, and a role label (Groomsmen or Bridesmaid)

### Requirement: Place & Time

The system SHALL render three event cards (Reception, Ceremony, Party) with
date, time, address, phone, and a map link.

#### Scenario: Event cards

- **GIVEN** the Place & Time section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show three cards titled The Reception, The Ceremony,
  and The Party
- **AND** each card SHALL show a date, a time range, an address, a phone
  number, and a "See Map" link

### Requirement: RSVP form

The system SHALL render an RSVP form with name, email, guest count, message,
and a submit button.

#### Scenario: Form validation

- **GIVEN** the RSVP form is displayed
- **WHEN** the user submits the form
- **THEN** the form SHALL validate the name and email fields
- **AND** the form SHALL show a confirmation on successful submission

#### Scenario: Guest count

- **GIVEN** the RSVP form is displayed
- **WHEN** the user selects the guest count
- **THEN** the guest select SHALL offer 1 through 5 guests

### Requirement: Gallery

The system SHALL render a four-column photo grid with lightbox tiles.

#### Scenario: Gallery grid

- **GIVEN** the Gallery section is displayed
- **WHEN** the user inspects it
- **THEN** it SHALL show a responsive grid of at least eight square image
  tiles
- **AND** hovering a tile SHALL reveal a centered image icon

#### Scenario: Lightbox

- **GIVEN** a gallery tile is displayed
- **WHEN** the user activates the tile
- **THEN** a lightbox SHALL open showing the enlarged image

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, link columns, contact
details, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand, a blurb, social icons, Quick Links,
  Links, Services, and a "Have a Questions?" contact block
- **AND** the footer SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Espousal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, invitation, Bride &
  Groom, Love Story, Sweet Messages, Family & Friends, Place & Time, RSVP,
  Gallery, and footer in order
- **AND** the document title SHALL be "Espousal — Wedding Template"

## Verification checklist

- [ ] `openspec/specs/template-espousal/spec.md` present with the REAL
      section list (navbar → hero → invitation → bride & groom → love story
      → sweet messages → family & friends → place & time → rsvp → gallery →
      footer).
- [ ] Design tokens above (coral `#f67e7d`, light coral `#fddddc`, mint
      `#dcf4e6`, `#f8f9fa`, Great Vibes + Poppins + Libre Caslon Text,
      pill 30px buttons, 52px radius-0 form controls, 90px script headings
      with 100px watermark clones) captured in the spec.
- [ ] `docs/templates/espousal/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    espousal`, PR lists source (ColorLib Hookup), preview URL, tokens,
      and what differs.
