# Template: Summit (Conference Template)

## Purpose

Summit is a single-page conference / event template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Confer" design (see TEMPLATES.md — Bootstrap category, line
363; the slug also repeats at lines 947 and 1669 — one recreation covers all
three checklist rows), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern dark conference/event site: a **fixed dark
header** (logo + uppercase menu + "Get Tickets" button); a full-screen
**hero swiper** (2 slides, photo background with a dark navy/indigo overlay,
big white uppercase headline + venue line + pill CTAs, circular prev/next
arrows and a mouse-scroll indicator); a dark navy **about + countdown**
section (subtitle in pink, giant white heading, bordered countdown boxes);
a **speakers** section over a photo with the pink→indigo gradient overlay
(6 cards, name + pink role over the photo, social icons); a **schedule**
section with 3 day tabs and bordered schedule cards; a **ticket pricing**
section over the same gradient overlay (3 white cards, gradient plan labels);
a **partners/sponsors** section (bordered logo tiles + a testimonial
carousel); a **latest news** section over the gradient overlay (3 white
cards); a **contact** section (info blocks + underline-style form) and a
dark navy **4-column footer** with a copyright bar. Signature look: deep
navy `#111343`/`#151853` surfaces, white uppercase headings, and a vibrant
pink `#df42b1` → indigo `#505add` diagonal gradient on buttons, overlays and
the active ticket plan. Font: **Poppins**.

## Design reference (replication findings)

- **Original:** ColorLib "Confer" — free Bootstrap 5 conference event HTML
  template (source: https://colorlib.com/wp/template/confer/). New name:
  **summit** (a summit is a conference of leaders — fits the brand; single
  word, no collision with `ls apps/`, `openspec/specs/`, or
  `docs/templates/`).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/confer/`
  (HTTP 200, ~75KB HTML; title "Confer - Conference Event HTML Template").
  Stylesheets: `style.css` (~273KB — Bootstrap 5 base + custom theme),
  plus fontawesome, animate, aos, swiper-bundle, glightbox,
  material-design-iconic-font. The custom theme rules are the `.confer-*`,
  `.welcome-*`, `.section-heading*`, `.single-*`, `.countdown-*` selectors
  listed below.
- **Screenshot viewed** (`confer-free-template-1.jpg`, 1200×946, in
  browser): desktop view — dark hero photo (man speaking at a podium) under
  a heavy blue/purple overlay, "CONFER" logo top-left, white uppercase menu
  top-right with an outline "GET TICKETS" button; right-aligned white
  uppercase headline "SCIENCE CONFERENCE" with a bright blue accent bar
  under "SCIENCE", venue line, pill "MORE INFORMATION" button; below the
  fold the page alternates solid dark navy blocks and pink→blue gradient
  sections; pill-shaped magenta buttons; clean modern sans typography.
- **Live render verified** (browser, desktop width): header fixed on top
  (HOME active, PAGES dropdown, SPEAKERS, BLOG, CONTACT + GET TICKETS);
  hero swiper renders 2 slides with slide-2 meta (calendar icon + "January
  14, 2032", user icon + "Laura Green"); about section with the 5-box
  countdown ("3 Months / 9 Days / 20 Hours / 22 Minutes / 5 Seconds");
  speakers grid of 6 cards; schedule tabs (MONDAY/TUESDAY/WEDNESDAY, each
  with a date) switching 4 schedule cards; 3 ticket cards (FULL PASS is the
  highlighted "active" one with the gradient plan label); 8 sponsor tiles;
  a 3-slide testimonial carousel (quotes by "Maria Hernandez — UX Manager",
  "Jacqueline Myers", "Maria Hernandez"); 3 blog cards; contact form; dark
  footer with 4 columns (About / Contact / Workshops / Gallery) + copyright
  bar.
- **Placeholder-copy caveats:** hero slide 2 meta and blog meta repeat the
  same date ("January 14, 2032") and author ("Laura Green") everywhere; the
  two testimonial carousel slides that are NOT the first repeat the first
  slide's name ("Maria Hernandez") — the recreation keeps the same content
  KINDS but writes distinct names/dates where the source repeats them.
  All `href="#"` links (nav, speaker socials, sponsor tiles, blog cards,
  footer links) become meaningful-looking placeholder hrefs.
- **Section order (1:1) from the rendered DOM:**
  1. Header (`header.header-area`, `position: fixed`, z-index 999,
     `background-color: rgba(0,0,0,0.8)`; `.sticky` → `#000` +
     `box-shadow: 0 2px 40px 8px rgba(15,15,15,0.15)`): `nav.navbar`
     container — logo ("Confer" image in source → wordmark, Poppins 700
     uppercase white, ~30px); `ul.navbar-nav`: **HOME** (active), **PAGES**
     (dropdown: Home, About Us, Speakers, Schedule, Tickets, Blog, Single
     Blog, Contact — white panel, radius 4px, shadow, hover items pink
     `#df42b1` on `rgba(223,66,177,0.1)`), **SPEAKERS**, **BLOG**,
     **CONTACT** (uppercase white links, letter-spaced); right side:
     **GET TICKETS** link/button (outline pill — transparent bg, pink
     border + pink text; hover fills gradient). Mobile: white-bar
     hamburger toggler.
  2. Hero (`section.welcome-area` > `div.welcome-slides` swiper,
     `overflow: hidden`, full-viewport slide height with cover photo +
     dark blue/purple overlay): each `div.welcome-slide` — slide 1:
     `h2` "SCIENCE CONFERENCE" (huge white uppercase) + `h6` venue
     "SHANGRI-LA HOTEL, BANGKOK, BANGKOK, THAILAND" (smaller white
     uppercase) + **MORE INFORMATION** pill button; slide 2: `h5` small
     label "THE EVENT CONSISTENTLY", `h2` "OSHA COMPLIANCE", meta row
     (calendar icon + "January 14, 2032" + user icon + "Laura Green") and
     two buttons **VIEW MORE** + **GET TICKETS**. Controls: circular
     prev/next (`border-radius: 50%`, 46×46, `2px solid #9293bc`, hover
     `rgba(255,255,255,0.5)` bg + black icon) and swiper pagination dots.
     Scroll-down mouse indicator (`div.icon-scroll`, 26×39, `inset 0 0 0
2px #fff`, radius 25px, animated white dot, absolute bottom 40px,
     centered).
  3. About + countdown (`section.about-us-countdown-area`, id="about",
     `background-color: #151853`, `section-padding-100-0`): two columns —
     left: `p.section-subtitle` "ABOUT CONFERENCE" (14px, 500, uppercase,
     pink `#df42b1`, letter-spacing 1px, `border-bottom: 2px solid
#4b4d7b`, inline-block) + `h3` "WELCOME TO THE PROJECT MANAGEMENT"
     (40px white uppercase, letter-spacing 1px, margin-bottom 20px) +
     paragraph (white) + **INTERESTED** confer-btn; right: subtitle
     "CONFERENCE DATE" + `h4` "COUNT EVERY SECOND UNTIL THE EVENT" (white
     uppercase) + `div.countdown-timer` → `#clock` (flex row): 5 boxes
     (62px/600 white number, `padding: 20px 5px`, `width: 20%`, `margin:
0 15px`, `border: 2px solid rgba(255,255,255,0.15)`, text-align
     center) each with a `span` label (18px, `#5d5e8d`, 500) —
     Months / Days / Hours / Minutes / Seconds.
  4. Speakers (`section.our-speaker-area`, `bg-img bg-gradient-overlay`,
     photo background + `::after` gradient overlay `linear-gradient(120deg,
#df42b1 0%, #505add 100%)` at `opacity: 0.9`, `section-padding-100-60`):
     `div.section-heading` centered — `p` "OUR SPEAKINGS" (white, uppercase,
     letter-spacing 1px) + `h4` "WHO'S SPEAKING" (38px white uppercase);
     grid of 6 `div.single-speaker-area` (radius 10px, overflow hidden,
     margin-bottom 40px): photo (hover zoom), `div.speaker-info` absolute
     bottom-left (bottom 25px, left 25px): `h5` name (20px 500 white,
     letter-spacing 1px) + `p` role (pink `#df42b1`, letter-spacing 1px);
     top-right row of 4 social icon links over the photo. Below the grid:
     **VIEW ALL SPEAKER** confer-btn link.
  5. Schedule (`section.our-schedule-area`, `background-color: #151853`,
     `section-padding-100`): `div.section-heading-2` — `p` "OUR TIMETABLE"
     (pink `#df42b1`) + `h4` "SCHEDULE PLAN" (38px white uppercase);
     `div.schedule-tab` nav-tabs — 3 tabs (MONDAY January 14, 2032 /
     TUESDAY January 15, 2032 / WEDNESDAY January 16, 2032; uppercase 18px
     600; inactive bg `#1f2371` + text `#9293bc`; active bg `#5d5e8d` +
     white; `border-right: 1px solid #4c4f8d`; padding 15px 30px; radius
     0); per day: 4 × `div.single-schedule-area` (border `1px solid
#444675`, radius 10px, padding 25px, margin-bottom 20px, hover border
     pink `#df42b1`): 90×90 thumb + info — title (20px white), "by Gary
     Armstrong / Ceo of Confer" (`p` `#9293bc`, name span white),
     time/place row (`p` white, pink `#df42b1` icons): "12-14 Jan 2032 ·
     Mountain Resort, Phoenix, USA", **VIEW MORE** pink link; below:
     **DOWLOAD SCHEDULE (PDF)** confer-btn (source typo "DOWLOAD" — fix to
     "DOWNLOAD").
  6. Tickets (`section.our-ticket-pricing-table-area`, `bg-img
bg-gradient-overlay jarallax`, photo + gradient overlay,
     `section-padding-100-0`): `div.section-heading-2` — "CHOOSE A TICKET"
     - "TICKET PRICING"; 3 × `div.single-ticket-pricing-table` (white bg,
       radius 10px, `padding: 0 40px 40px`, `box-shadow: 0 10px 30px
rgba(0,0,0,0.1)`; hover `translateY(-10px)` + `0 25px 50px
rgba(0,0,0,0.25)`; `.active` = FULL PASS — larger shadow + gradient
       plan label): `h6.ticket-plan` (gradient bg, white, uppercase, 13px
       600, letter-spacing 1px, `padding: 12px 30px`, `border-radius: 0 0
8px 8px`) — "1 DAY PASS" / "FULL PASS" / "GROUP PASS"; `h2.ticket-price`
       (60px 700 `#111343`, `span` "$" 24px 600 `#5d5e8d`, top -25px) + "per
       person"/"for 3 people" (`#9293bc`); **GET TICKETS** confer-btn;
       feature list (check icons): 1 Day — Single Day Access, Coffee Breaks,
       Lunch Included, Workshop Access, Networking Dinner; Full — All Days
       Access, Coffee Breaks, Lunch Included, Workshop Access, Networking
       Dinner; Group — All Days Access (x3), Coffee Breaks, Lunch Included,
       Workshop Access, VIP Networking Event.
  7. Sponsors + testimonials (`section.our-sponsor-client-area`,
     `background-color: #151853`, `section-padding-100`): `div.section-
heading-2` — "PARTNERS & SPONSORS" + "OFFICIAL SPONSOR"; `div.our-
sponsor-area` flex-wrap grid of 8 `div.single-sponsor` (border `1px
solid #444675`, `flex: 0 0 25%`, height 240px→200px, centered logo
     placeholder); then `div.client-area` swiper (mt-100) — 3 slides
     `div.single-client-content` (bg `rgba(255,255,255,0.1)`, padding
     40px 50px, radius 10px, margin 5px): quote `p` (white lorem), avatar
     thumb + `div.client-info` (`h6` name white + `p` role `#9293bc`), and
     a huge quote icon top-left (`fa-quote-right`, 80px, gradient text
     fill, opacity 0.7); prev/next controls + pagination. Write 3 DISTINCT
     names (source repeats "Maria Hernandez" on slides 1 and 3).
  8. Blog (`section.our-blog-area`, `bg-img bg-gradient-overlay`, photo +
     gradient overlay, `section-padding-100-60`): `div.section-heading` —
     "OUR BLOG" (white) + "LATEST NEWS" (38px white uppercase); 3 ×
     `div.single-blog-area` (margin-bottom 70px): `div.single-blog-thumb`
     (cover image, radius `10px 10px 0 0`, hover zoom) + `div.single-blog-
text` (white bg, `padding: 30px 30px 50px`, radius `0 0 10px 10px`):
     `h6.blog-title` link (20px 600 `#111343`, hover pink `#df42b1`),
     `div.post-meta` (links `#9293bc` 14px, hover pink: calendar icon +
     date, user icon + author), excerpt `p` (dark), read-more link/icon.
     Write 3 DISTINCT titles/excerpts (source repeats one lorem text).
  9. Contact (`section.contact-our-area`, `background-color: #151853`,
     `section-padding-100-0`): two columns — left: `div.section-heading-2`
     "HAVE QUESTION?" + "CONTACT US" + `div.contact-information`: 4 ×
     `div.single-contact-info` (margin-bottom 25px; icon + label line +
     `h6` value): "Address: 184 Main Collins Street", "Phone: (226) 446
     9371", "Email: confer@gmail.com", "Website: www.confer.com"; right:
     `div.contact_input_area` form: 2×2 input grid (Your Name / Last Name /
     E-mail / Your Number) + textarea "Your Message *" + **SEND MESSAGE**
     confer-btn. Inputs: transparent bg, no border except `border-bottom:
1px solid #dbdcf1`, radius 0, 15px, color `#5d5e8d`, `padding: 5px 0
8px`; focus/active `border-bottom-color: #111343`, no shadow.
  10. Footer (`footer.footer-area`, `background-color: #111343`): container
      with 4 × `div.single-footer-widget` columns: (a) About — logo +
      lorem paragraph (`p` `#9293bc` 14px) + social icon row (hover bg
      `#5d5e8d`); (b) Contact — `h5.widget-title` "Contact" (20px white,
      margin-bottom 20px) + 4 lines (address / phone / email / website);
      (c) Workshops — title + `ul` links (OSHA Compliance, Microsoft Excel
      Basics, Forum Speaker Series, Tedx Moscow Conference); (d) Gallery —
      title + 6 thumbnail links. Copyright bar (`div.copywrite-text`):
      "Copyright © <year> All rights reserved | This template is made with
      ♥ by Colorlib" → paraphrase to the recreation (no ColorLib
      attribution/link) + Terms of Service / Privacy Policy links
      (`p` `#9293bc` 14px).

## Design tokens (extracted from `style.css` + DOM)

- Fonts (Google Fonts, via `<link>` in `index.html`): **Poppins**
  (400/500/600/700) — everything: headings (uppercase, letter-spacing
  1px), nav, buttons, body, countdown numbers. (The source pulls Poppins
  through Bootstrap's `--bs-body-font-family`; the custom rules also set
  `font-family: "Poppins", sans-serif`.)
- Brand gradient (THE signature): `linear-gradient(120deg, #df42b1 0%,
#505add 100%)` (pink → indigo) — `.confer-btn` fill, `.bg-gradient-
overlay::after` (opacity 0.9), `.ticket-plan`, `.client-icon` text-fill.
- Brand pink: **`#df42b1`** — all accents: subtitles, section-heading-2
  `p`, role text, schedule hover border, blog-title hover, post-meta
  hover, dropdown hover, schedule time icons, "VIEW MORE" links. Darker
  shade `#c63fa4` (overlay base color).
- Brand indigo/blue: **`#505add`** — gradient partner; `.ticket-plan`
  gradient start; hero accent bar.
- Dark navy surfaces: **`#151853`** (about/countdown, schedule, sponsor,
  contact sections), **`#111343`** (footer, ticket price text, blog title,
  form focus underline), **`#1f2371`** (schedule tab inactive bg),
  **`#5d5e8d`** (schedule tab active bg, "$" span, countdown labels, form
  text).
- Muted text: `#9293bc` (footer text, copyright, post-meta, schedule info
  `p`, tab inactive text, nav arrow borders); `#dbdcf1` (form underline).
- Borders: schedule/sponsor tiles `1px solid #444675`; schedule-tab item
  `1px solid #4c4f8d`; about subtitle `2px solid #4b4d7b`; countdown box
  `2px solid rgba(255,255,255,0.15)`.
- White surfaces: ticket cards (with `box-shadow: 0 10px 30px
rgba(0,0,0,0.1)`; hover `translateY(-10px)` + `0 25px 50px
rgba(0,0,0,0.25)`), blog cards (radius `0 0 10px 10px`), dropdown panel.
- Header: fixed, `rgba(0,0,0,0.8)` → `#000` sticky + `0 2px 40px 8px
rgba(15,15,15,0.15)`.
- Shapes: `.confer-btn` pill — height 46px, `line-height: 46px`, 14px 500
  uppercase, letter-spacing 0.5px, `padding: 0 25px`, radius **23px**,
  white text, gradient bg; hover → white bg + `#111343` text + shadow
  `0 2px 40px 8px rgba(15,15,15,0.15)`. Hero nav arrows 46×46 circles
  (`2px solid #9293bc`). Cards radius 10px. `ticket-plan` label radius
  `0 0 8px 8px`. Scroll indicator 26×39 radius 25px. Section headings
  h4 = 38px (26px responsive) white uppercase.
- Spacing: section padding `100px` (top/bottom; `-60`/`-0` variants cut
  bottom); `.single-speaker-area` margin-bottom 40px; `.single-schedule-
area` padding 25px, margin-bottom 20px; ticket card `padding: 0 40px
40px`; blog text `padding: 30px 30px 50px`; testimonial `padding: 40px
50px`; sponsor tile height 240px (200px responsive); countdown boxes
  width 20%, `margin: 0 15px`.
- Icons (source: Font Awesome — recreation: lucide-react): Calendar
  (dates), User (author), Check (ticket features), Quote (testimonial
  icon — lucide `Quote`), Menu (hamburger), ChevronLeft/ChevronRight
  (hero/testimonial arrows), MousePointer/ChevronDown for the scroll
  indicator (or a CSS-only animated dot like the source), MapPin / Phone /
  Mail / Globe (contact info), social icons (Facebook, Twitter, Instagram,
  Linkedin, Youtube, Pinterest as needed), ArrowRight on buttons (source
  has `i` after button text).

## Requirements

### Requirement: Header

The system SHALL render a fixed dark header with the logo, uppercase menu
and a Get Tickets button.

#### Scenario: Desktop header

- **GIVEN** the Summit page is rendered on a desktop viewport
- **WHEN** the header is displayed
- **THEN** it SHALL be fixed at the top with a `rgba(0,0,0,0.8)`
  background (solid `#000` + soft shadow once the page is scrolled)
- **AND** it SHALL show the "Summit" wordmark (Poppins 700, white
  uppercase) on the left
- **AND** an uppercase menu (letter-spaced white links): Home (active),
  Pages (dropdown), Speakers, Blog, Contact
- **AND** a "Get Tickets" button on the right styled as an outline pill
  (transparent bg, pink `#df42b1` border + text)

#### Scenario: Pages dropdown

- **GIVEN** the header menu is displayed
- **WHEN** "Pages" is hovered/focused
- **THEN** a white dropdown SHALL appear (radius 4px, soft shadow) with
  the links Home, About Us, Speakers, Schedule, Tickets, Blog, Single
  Blog, Contact
- **AND** hovering a dropdown item SHALL tint it pink on a
  `rgba(223,66,177,0.1)` background

#### Scenario: Mobile header

- **GIVEN** a narrow viewport (≤768px)
- **WHEN** the page is rendered
- **THEN** the header SHALL collapse the menu behind a white-bar hamburger
  toggler that opens/closes the navigation with an aria-expanded state

### Requirement: Hero slider

The system SHALL render a full-screen hero swiper with two slides, arrows
and a scroll indicator.

#### Scenario: Slide layout

- **GIVEN** the hero slider is displayed
- **WHEN** a slide is inspected
- **THEN** it SHALL show a full-viewport cover photo under a dark
  blue/purple overlay
- **AND** slide 1 SHALL show a giant white uppercase headline ("Science
  Conference"), a smaller uppercase venue line ("Shangri-La Hotel,
  Bangkok, Bangkok, Thailand") and a "More Information" pill button
- **AND** slide 2 SHALL show a small uppercase label, a large headline
  ("OSHA Compliance"), a meta row (calendar icon + date, user icon +
  author) and "View More" + "Get Tickets" buttons

#### Scenario: Controls

- **GIVEN** the hero slider is displayed
- **WHEN** its controls are inspected
- **THEN** circular prev/next arrows (46×46, `2px solid #9293bc`) and a
  pagination indicator SHALL be present
- **AND** clicking an arrow SHALL advance the slide (autoplay optional)

#### Scenario: Scroll indicator

- **GIVEN** the hero slider is displayed
- **WHEN** the bottom center is inspected
- **THEN** a mouse-shaped scroll indicator SHALL be visible (26×39, white
  border, radius 25px, animated dot) that scrolls to the about section on
  click

### Requirement: About and countdown

The system SHALL render the about text block and a live countdown timer on
a dark navy background.

#### Scenario: About block

- **GIVEN** the about section is displayed
- **WHEN** the left column is inspected
- **THEN** it SHALL show the uppercase pink subtitle "About Conference"
  (with a `2px solid #4b4d7b` bottom border), a 40px white uppercase
  heading ("Welcome to the Project Management"), a white paragraph and an
  "Interested" pill button

#### Scenario: Countdown

- **GIVEN** the countdown block is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the subtitle "Conference Date", the heading
  "Count Every Second Until the Event" and five bordered boxes (62px
  numbers, `2px solid rgba(255,255,255,0.15)`) labelled Months, Days,
  Hours, Minutes, Seconds
- **AND** the numbers SHALL tick down each second toward a fixed future
  target date (e.g. the event date "January 14, 2032" per slide meta)

### Requirement: Speakers

The system SHALL render a speakers grid over the pink→indigo gradient
overlay.

#### Scenario: Speaker cards

- **GIVEN** the speakers section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the centered heading ("Our Speakings" white
  subtitle + "Who's Speaking" 38px white uppercase)
- **AND** a responsive grid of SIX speaker cards, each a rounded (10px)
  photo card with the name (20px white, letter-spaced) and role (pink
  `#df42b1`) overlaid bottom-left, and four social icon links top-right
- **AND** a "View All Speaker" pill button below the grid

### Requirement: Schedule

The system SHALL render a day-tabbed schedule with bordered cards.

#### Scenario: Day tabs

- **GIVEN** the schedule section is displayed
- **WHEN** the tab bar is inspected
- **THEN** it SHALL show three tabs (Monday, Tuesday, Wednesday, each with
  its date) — inactive: `#1f2371` background, `#9293bc` text; active:
  `#5d5e8d` background, white text, `1px solid #4c4f8d` separators
- **AND** clicking a tab SHALL switch the visible schedule cards

#### Scenario: Schedule cards

- **GIVEN** a day's schedule is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show FOUR cards (border `1px solid #444675`, radius
  10px, padding 25px; hover → pink border) each with a 90×90 thumbnail, a
  white 20px title, an author line ("by <name> / <role>"), a time/place
  row with pink icons ("12-14 Jan 2032 · Mountain Resort, Phoenix, USA")
  and a "View More" pink link
- **AND** a "Download Schedule (PDF)" pill button below the cards

### Requirement: Ticket pricing

The system SHALL render three ticket cards over the gradient overlay.

#### Scenario: Ticket cards

- **GIVEN** the ticket section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the heading ("Choose a Ticket" + "Ticket
  Pricing") and THREE white cards (radius 10px, soft shadow, hover lift)
  with a gradient plan label ("1 Day Pass" / "Full Pass" / "Group Pass"),
  a 60px dark price with a smaller "$" span, a per-person line and a
  "Get Tickets" pill button
- **AND** the Full Pass card SHALL be highlighted as active (stronger
  shadow, gradient plan label)
- **AND** each card SHALL list its features with check icons (e.g. Single
  Day Access, Coffee Breaks, Lunch Included, Workshop Access, Networking
  Dinner; Group adds "VIP Networking Event")

### Requirement: Sponsors and testimonials

The system SHALL render a sponsor logo grid and a testimonial carousel.

#### Scenario: Sponsor grid

- **GIVEN** the sponsor section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the heading ("Partners & Sponsors" + "Official
  Sponsor") and EIGHT bordered tiles (25% width, ~240px tall, `1px solid
#444675`) each holding a sponsor logo placeholder

#### Scenario: Testimonial carousel

- **GIVEN** the testimonial carousel is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show translucent cards (`rgba(255,255,255,0.1)`,
  radius 10px) each with a quote paragraph, an avatar thumbnail, the
  author name and role, and a large gradient quote icon
- **AND** THREE DISTINCT testimonials SHALL be present (the source repeats
  "Maria Hernandez" on slides 1 and 3 — write distinct names)
- **AND** prev/next controls and a pagination indicator SHALL switch
  slides

### Requirement: Latest news

The system SHALL render three blog cards over the gradient overlay.

#### Scenario: Blog cards

- **GIVEN** the news section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the heading ("Our Blog" white subtitle + "Latest
  News") and THREE white cards (rounded thumbnail with hover zoom + white
  body `padding: 30px 30px 50px`) each with a 20px dark title (hover →
  pink), a meta row (calendar + date, user + author, `#9293bc` → pink
  hover) and an excerpt
- **AND** the three titles and dates SHALL be distinct (the source repeats
  one lorem excerpt and the date "January 14, 2032")

### Requirement: Contact

The system SHALL render contact information blocks and a message form.

#### Scenario: Contact info

- **GIVEN** the contact section is displayed
- **WHEN** the left column is inspected
- **THEN** it SHALL show the heading ("Have Question?" + "Contact Us") and
  FOUR info rows with icons: Address (184 Main Collins Street), Phone
  ((226) 446 9371), Email (confer@gmail.com), Website (www.confer.com)

#### Scenario: Message form

- **GIVEN** the contact form is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a 2×2 grid of inputs (Your Name, Last Name,
  E-mail, Your Number) and a "Your Message *" textarea styled with only a
  `1px solid #dbdcf1` bottom border (transparent elsewhere) that darkens
  to `#111343` on focus
- **AND** a "Send Message" pill button that validates the fields (required
  name/message, valid email) and shows a success state without a backend

### Requirement: Footer

The system SHALL render a dark four-column footer with a copyright bar.

#### Scenario: Columns

- **GIVEN** the footer is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be on a `#111343` background with FOUR columns: About
  (wordmark + paragraph + social icons), Contact (address / phone / email
  / website), Workshops (links: OSHA Compliance, Microsoft Excel Basics,
  Forum Speaker Series, Tedx Moscow Conference) and Gallery (six
  thumbnail links), each under a 20px white widget title

#### Scenario: Copyright

- **GIVEN** the footer bottom is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a paraphrased copyright line for the recreation
  (e.g. "Copyright © <year> All rights reserved | made with ♥ by Free
  React Templates") plus Terms of Service / Privacy Policy links — no
  ColorLib attribution or link

## Verification checklist

- [ ] `apps/summit` scaffolded from the simplest existing app; package
      renamed `@free-react-templates/summit`; workspace registered in
      `package-lock.json` (repo is bun-managed — `bun install` at root,
      never `npm add`)
- [ ] `index.html` loads Poppins (400/500/600/700) via Google Fonts
      `<link>`; title "Summit — Conference & Event"
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #df42b1`,
      `--color-brand-deep: #c63fa4`, `--color-indigo: #505add`,
      `--color-navy: #151853`, `--color-navy-deep: #111343`,
      `--color-tab: #1f2371`, `--color-tab-active: #5d5e8d`,
      `--color-muted: #9293bc`, `--color-line: #444675`,
      `--color-form-line: #dbdcf1`; `--font-sans: Poppins`; a
      `bg-brand-gradient` utility for `linear-gradient(120deg, #505add
    0%, #df42b1 100%)`; `bg-gradient-overlay` pattern (pseudo-element,
      opacity 0.9)
- [ ] Components (one per section, colocated Vitest tests, 100% coverage):
      Header (fixed → sticky dark, dropdown, mobile hamburger), HeroSlider
      (2 slides, arrows, pagination, scroll indicator), AboutCountdown
      (live ticking timer), Speakers (6 cards + socials), Schedule (3
      tabs × 4 cards + PDF button), TicketPricing (3 cards, active state),
      Sponsors (8 tiles) + Testimonials (3-slide carousel), LatestNews (3
      cards), Contact (info + validated form), Footer (4 columns +
      copyright)
- [ ] `App.tsx` composes sections in the DOM order above (Header → Hero →
      About/Countdown → Speakers → Schedule → Tickets → Sponsors/
      Testimonials → News → Contact → Footer)
- [ ] All images `https://picsum.photos/seed/summit-<n>/<w>/<h>` (hero
      1920×1080, speaker 400×400, schedule thumb 90×90, sponsor 200×120,
      testimonial avatar 80×80, blog 600×400, gallery 100×100, contact
      none); no ColorLib assets copied
- [ ] `npm run verify:app summit` passes (typecheck + lint + vitest 100% +
      build); full gate runs in CI on merge
- [ ] PR description includes: source template (Confer), preview URL,
      design tokens, renames, placeholder images
