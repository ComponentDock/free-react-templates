# Template: Nuptial (Wedding Landing)

## Purpose

Nuptial is a single-page wedding / nuptials landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hookup" design (https://colorlib.com/wp/template/hookup/),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is an elegant wedding invitation site for "Francisco & Laura":
a full-height photo hero with a script-font couple name and a live countdown
timer ("The Wedding of" + rose crest + 100 days / 02 hours / 13 minutes / 38
seconds), a "Join us to celebrate the wedding day of" invite block with the
date (Dec | 28 | 2019) and venue (Saint John Paul Church in YorkNew.in), a
Bride & Groom double portrait section, a centered alternating Love Story
timeline (First We Meet → First Date → In A Relationship → We're Engaged), a
Sweet Messages testimonial carousel (Roger Scott, Marketing Manager), a
Family & Friends carousel of 4 Groomsmen + 4 Bridesmaids, a Place & Time row
of three photo cards (The Reception / The Ceremony / The Party) with date,
address, phone and a "See Map" button, a gray RSVP band with a
Name / Email / Guest count / Message form and an "I am attending" submit
button, an 8-photo Gallery grid with a hover zoom icon, and a white
five-column footer (brand + socials | Quick Links | Links | Services |
Have a Questions?) with contact details and the copyright bar. Nuptial
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hookup" — free wedding website Bootstrap 4 template
  (source: https://colorlib.com/wp/template/hookup/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hookup/`
  (HTTP 200, 43.5KB) + stylesheet `css/style.css` (62.5KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`hookup-free-template.jpg`, 1200×959) confirms the visual design: dark
  photographic hero (couple in a field) with white script names + countdown,
  coral-pink `#f67e7d` accents throughout, light gray sections, white footer.
- **Section order (1:1):**
  1. Navbar: transparent over the hero, brand "Hookup" left, right-side links
     (Home, Groom & Bride, Love Story, Greetings, People, When & Where, RSVP,
     Gallery) with a pink underline sweep on hover; "Menu" toggler on mobile.
     On scroll the bar turns solid white with a shadow, links go black, the
     active link + a brand span turn pink `#f67e7d`.
  2. Hero (`#home`, video-hero): ~700px full-width photo background
     (`bg_1.jpg`, top-center cover) with a black overlay (opacity .3); a
     YouTube background player (muted, looped) — the recreation uses the
     photo + overlay only; centered content: rose crest icon, uppercase
     kicker "The Wedding of" (12px, white, letter-spacing 7px, flanked by
     white lines), H1 "Francisco & Laura" in Great Vibes script (9vw,
     white), and a countdown timer (`#timer`: days / hours / minutes /
     seconds with DAYS/HOURS/MINUTES/SECONDS labels).
  3. Groom & Bride invite (`#groom-bride-section`, ftco-about, no top/bottom
     padding): photo left (`about.jpg`); right column centered text:
     kicker "Join us to celebrate the wedding day of", H2 "Francisco & Laura"
     (Great Vibes 64px pink `#f67e7d`), rose icon, kicker "Which is
     celebration on", date "Dec | 28 | 2019" (Libre Caslon Text 48px,
     rgba(0,0,0,.4)), kicker "Starting at 2:00 in the afternoon", kicker
     "Saint John Paul Church in YorkNew.in".
  4. Bride & Groom (bg-section): 300px decorative photo strips top
     (`top-bg.jpg`) and bottom (`bottom-bg.jpg`); heading block with ghost
     clone text + H2 "Bride & Groom" (Great Vibes 90px pink); two centered
     portrait cards: groom photo (`groom.jpg`) + H2 "Francisco Fredricksen"
     - blurb, bride photo (`bride.jpg`) + H2 "Laura Moorey" + blurb.
  5. Love Story (`#lovestory-section`): heading block (clone "Love Story" +
     H2 "Love Story"); centered alternating vertical timeline with a pink
     `#f67e7d` center line; four items, each a round 100px photo badge with a
     5px pink border (`couple-1..4.jpg`) alternating left/right with the
     panel: date (June 10, 2017 / June 10, 2017 / June 14, 2017 / May. 10,
     2019 — pink uppercase 13px) + title (First We Meet / First Date / In A
     Relationship / We're Engaged) + body copy.
  6. Sweet Messages (`#greeting-section`, bg-light `#f8f9fa`): heading block
     (clone "Testimony" + H2 "Sweet Messages"); carousel of five testimonial
     cards, each: quote text, circular photo (`person_1..5.jpg`), name
     "Roger Scott", position "Marketing Manager".
  7. Family & Friends (`#people-section`): heading block (clone "People" +
     H2 "Family & Friends"); carousel of eight people cards, each a circular
     photo (`groom-men-1..4.jpg`, `bridesmaid-1..4.jpg`) + name + role:
     4 Groomsmen (Mark Tomy, John Henceworth, Rey Cooper, Robert Chan) and 4
     Bridesmaid (Rose Jones, Mary Dell, Alicia Brean, Angel Worth).
  8. Place & Time (`#when-where-section`, bg-light): heading block (clone
     "Place" + H2 "Place & Time"); three equal photo cards (`place-1..3.jpg`)
     with centered overlay text: icon (reception bell / wedding kiss / cake
     flaticons → lucide equivalents), H3 title (The Reception / The Ceremony
     / The Party), "Saturday, 28, 2019 · 02:00 pm-10:00 pm", address "203
     Fake St. Mountain View, San Francisco, California, USA", phone
     "+0 (123) 456 78 910", and a "See Map" `btn-custom` link.
  9. RSVP (`#rsvp-section`, bg-secondary gray `#6c757d`): heading block
     (clone "RSVP" + H2 "Are Your Attending?"); centered form with "Name"
     and "Your email" text inputs, a "Guest" select (1–5), a "Message"
     textarea, and a pink `btn-primary` submit "I am attending".
  10. Gallery (`#gallery-section`): heading block (clone "Photos" + H2
      "Gallery"); 4-column grid of eight square photo tiles
      (`gallery-1..8.jpg`) with a hover zoom/expand icon (image-popup
      lightbox in the original → hover icon overlay in the recreation).
  11. Footer (white bg, ftco-footer): five columns — (1) brand "Hookup" +
      blurb + circular pink social icons (Twitter, Facebook, Instagram); (2)
      Quick Links (Wellness, Vintge stores, Trekking, Tour, Sightseeing, Many
      more..); (3) Links (Home, Groom & Bride, Story, Greetings, People,
      Where & When, RSVP, Gallery); (4) Services (Organizer, Venue, Wedding
      Ceremony, Accomodation); (5) Have a Questions? (address "203 Fake St.
      Mountain View, San Francisco, California, USA" · phone "+2 392 3929
      210" · email "info@yourdomain.com"). Bottom bar: copyright line
      (ColorLib attribution replaced with the Component Dock link per repo
      convention).
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f67e7d** (coral-pink — links, `.btn.btn-primary`, active
    nav link + underline, `.heading-section` subheading + h2, `.ftco-about`
    h2, timeline line + badges, `.date` labels, footer links + 50px circular
    social icons, brand span when scrolled).
  - Light border pink: **#fddddc** (`btn-custom` 1px border).
  - Section backgrounds: **#f8f9fa** (bg-light — Sweet Messages, Place &
    Time), **#6c757d** (bg-secondary — RSVP band), **#ffffff** (footer; hero
    has a black overlay rgba(0,0,0,.3) over the photo), white cards/badges
    elsewhere.
  - Headings: **#f67e7d** Great Vibes script; clone/ghost watermark text
    rgba(0,0,0,.05) at 100px; footer headings black.
  - Body text: #212529 / rgba(0,0,0,.7) (Poppins, weight 400, 16px).
  - Fonts (Google Fonts): **"Poppins"** (body + nav, weights 400/600),
    **"Great Vibes"** (cursive script — hero h1 9vw, section h2 90px
    (50px mobile), ftco-about h2 64px), **"Libre Caslon Text"** (serif —
    invite subheading + date 48px).
  - Kickers: 12px uppercase, weight 600, letter-spacing 2px (7px in the
    hero), color #f67e7d (white in hero), flanked by 2px white lines in the
    hero.
  - Buttons: `.btn-primary` = pink `#f67e7d` fill, white text, 1px pink
    border; `.btn-custom` = transparent, 1px solid #fddddc border, uppercase
    12px 600, letter-spacing 1px, padding 8px 10px; radius Bootstrap default
    (0.25rem) — keep small radius or square per repo Button style.
  - Form controls: height 52px, white bg, border-radius 0, 1px
    rgba(0,0,0,.1) border, focus border turns black.
  - Section rhythm: `ftco-section` padding 7em 0 (6em mobile); `bg-section`
    14em with 300px top/bottom image strips; section-padding rhythm
    consistent across sections.
  - Timeline: pink vertical line, badges 100px round with 5px #f67e7d
    border; panels alternate sides.
  - People/testimonial photos: circular (border-radius 50%).
  - Social icons: 50px circles, pink bg, white icon, radius 50%.
- **Recreation decisions:** repo-standard Navbar (site name "Nuptial",
  section links, dark-mode toggle) + Footer chrome (Component Dock
  attribution); hero = full-width seeded picsum photo band with dark overlay,
  rose/lucide ornament icon, script H1, and a live countdown timer (target
  date e.g. a fixed future date; days/hours/minutes/seconds with labels);
  invite block with the big date + venue kickers; Bride & Groom portrait
  cards; Love Story alternating timeline with round photo badges + dates;
  Sweet Messages testimonial cards (static row or simple carousel, 5 quotes);
  Family & Friends people row with circular photos + roles; Place & Time
  cards with lucide icons (Bell, Heart, Cake) + "See Map" outline buttons;
  RSVP form (Name / Email / Guest select / Message + "I am attending"
  submit — non-functional, client-validated); Gallery 4-column grid with
  hover icon overlay; white footer with 4 link columns + contact column +
  social circles; all images picsum-seeded
  (`picsum.photos/seed/nuptial-N/w/h`); Google Fonts via `<link>`.

Nuptial lives in `apps/nuptial` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Nuptial", a
"Home" link, section links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Nuptial page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nuptial" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show links for Groom & Bride, Love Story, Greetings, People, When & Where, RSVP, and Gallery
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the section links SHALL be shown in a mobile navigation
- **AND** the menu SHALL close when a link is chosen

### Requirement: Hero

The system SHALL render a full-height hero band with a kicker, a script-style
level-1 headline with the couple's names, and a live countdown timer.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the kicker "The Wedding of"
- **AND** it SHALL show a level-1 headline "Francisco & Laura"
- **AND** it SHALL show a countdown timer with days, hours, minutes, and seconds values and labels

#### Scenario: Countdown counts down

- **GIVEN** the hero countdown is displayed
- **WHEN** the timer ticks
- **THEN** the displayed values SHALL update toward the target date
- **AND** the countdown SHALL show zeroed values once the target date has passed

### Requirement: Wedding invite

The system SHALL render a "Groom & Bride" invite block with a photo, the
couple's names, the wedding date, and the venue.

#### Scenario: Invite content

- **GIVEN** the page is rendered
- **WHEN** the invite block is displayed
- **THEN** it SHALL show the kicker "Join us to celebrate the wedding day of"
- **AND** it SHALL show the heading "Francisco & Laura"
- **AND** it SHALL show the date "Dec | 28 | 2019"
- **AND** it SHALL show the venue "Saint John Paul Church in YorkNew.in"

### Requirement: Bride and Groom

The system SHALL render a "Bride & Groom" section with two portrait cards,
one for the groom and one for the bride.

#### Scenario: Portrait cards

- **GIVEN** the page is rendered
- **WHEN** the Bride & Groom section is displayed
- **THEN** it SHALL show the heading "Bride & Groom"
- **AND** it SHALL render a groom card with the name "Francisco Fredricksen" and a photo
- **AND** it SHALL render a bride card with the name "Laura Moorey" and a photo
- **AND** each card SHALL show at least one paragraph of copy

### Requirement: Love story timeline

The system SHALL render a "Love Story" section with an alternating timeline
of four milestones, each with a photo badge, a date, and a title.

#### Scenario: Timeline milestones

- **GIVEN** the page is rendered
- **WHEN** the Love Story section is displayed
- **THEN** it SHALL show the heading "Love Story"
- **AND** it SHALL render four milestones in order: First We Meet, First Date, In A Relationship, We're Engaged
- **AND** each milestone SHALL show a date and a round photo badge
- **AND** the panels SHALL alternate between the left and right sides

### Requirement: Sweet messages

The system SHALL render a "Sweet Messages" section with at least three
testimonial cards, each with a quote, a photo, and an author.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the Sweet Messages section is displayed
- **THEN** it SHALL show the heading "Sweet Messages"
- **AND** it SHALL render at least three testimonial cards
- **AND** each card SHALL show a quote, a circular photo, a name, and a position

### Requirement: Family and friends

The system SHALL render a "Family & Friends" section listing eight wedding
party members, each with a photo, a name, and a role.

#### Scenario: Wedding party

- **GIVEN** the page is rendered
- **WHEN** the Family & Friends section is displayed
- **THEN** it SHALL show the heading "Family & Friends"
- **AND** it SHALL render four Groomsmen (Mark Tomy, John Henceworth, Rey Cooper, Robert Chan)
- **AND** it SHALL render four Bridesmaids (Rose Jones, Mary Dell, Alicia Brean, Angel Worth)
- **AND** each member SHALL show a circular photo and their role

### Requirement: Place and time

The system SHALL render a "Place & Time" section with three event cards
(The Reception, The Ceremony, The Party), each with an icon, a date and time,
an address, a phone number, and a "See Map" button.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the Place & Time section is displayed
- **THEN** it SHALL show the heading "Place & Time"
- **AND** it SHALL render three cards: The Reception, The Ceremony, The Party
- **AND** each card SHALL show an icon, a date and time range, an address, a phone number, and a "See Map" link

### Requirement: RSVP form

The system SHALL render an RSVP section with a heading and a form collecting
a name, an email, a guest count, and a message, with an "I am attending"
submit button.

#### Scenario: RSVP form fields

- **GIVEN** the page is rendered
- **WHEN** the RSVP section is displayed
- **THEN** it SHALL show the heading "Are Your Attending?"
- **AND** it SHALL show a "Name" input, a "Your email" input, a "Guest" select with options 1 through 5, and a "Message" textarea
- **AND** it SHALL show an "I am attending" submit button

#### Scenario: RSVP validation

- **GIVEN** the RSVP form is displayed
- **WHEN** the user submits the form with empty required fields
- **THEN** the form SHALL show validation errors and SHALL NOT submit

### Requirement: Gallery

The system SHALL render a "Gallery" section with a grid of at least six
photos.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the Gallery section is displayed
- **THEN** it SHALL show the heading "Gallery"
- **AND** it SHALL render a grid of at least six photo tiles
- **AND** each tile SHALL show a photo and a hover icon

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, section
links, services, contact details, social links, and the Component Dock
attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Nuptial" with a blurb
- **AND** it SHALL show a Quick Links list and a section Links list
- **AND** it SHALL show a Services list (Organizer, Venue, Wedding Ceremony, Accommodation)
- **AND** it SHALL show contact details (address, phone number, email)
- **AND** it SHALL show social links (Twitter, Facebook, Instagram)
- **AND** it SHALL link to `https://www.componentdock.com/` (Component Dock attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Nuptial app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nuptial — Wedding Template"

## Verification checklist

- [ ] `openspec/specs/template-nuptial/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/nuptial/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Hookup preview DOM 1:1 (navbar →
      hero + countdown → invite → bride & groom → love story → sweet
      messages → family & friends → place & time → RSVP → gallery →
      footer).
- [ ] Tokens used in the app: coral-pink `#f67e7d`, border pink `#fddddc`,
      bg-light `#f8f9fa`, RSVP gray `#6c757d`; Poppins body + Great Vibes
      script headings + Libre Caslon Text accents via Google Fonts `<link>`;
      circular photos, round pink social icons, countdown timer.
- [ ] No ColorLib references in `apps/nuptial` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/nuptial-N/w/h`).
- [ ] Implementer gate: `scripts/verify-app.sh nuptial` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
