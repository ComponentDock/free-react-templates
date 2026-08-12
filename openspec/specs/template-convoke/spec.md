# Template: Convoke (Conference / Event Template)

## Purpose

Convoke is a single-page conference & event website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wemeet" website template design (see TEMPLATES.md — appears
TWICE: line 532 and line 1690; mark BOTH rows `[x]` when shipped), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wemeet" — conference / design-event landing page
  (source: https://colorlib.com/wp/template/wemeet/).
- **Preview URL:** https://preview.colorlib.com/theme/wemeet/ — HTTP 200,
  full rendered DOM analyzed (title: "wemeet", 30,702 bytes); master
  stylesheet `css/style.css` (134,261 bytes) extracted and parsed. Libs:
  Bootstrap 4 grid, Owl Carousel, Isotope, jQuery countdown, SlickNav,
  magnific-popup, themify-icons + flaticon icon fonts. Font **Poppins**
  (300–900) via Google Fonts `<link>`. Cross-checked against the TEMPLATES.md
  screenshot (`wemeet-free-template.jpg`, viewed in browser) — designs match.
  The demo brands itself "Wemeet"; our recreation uses the NEW name
  **Convoke**.
- **Section order (1:1):**
  1. Header (`header-area` + `main-header-area`, sticky): logo "Wemeet"
     left; nav right — home / Schedule / blog (dropdown: blog, single-blog,
     elements) / Speakers / Venue / Contact; CTA "Buy Ticket"
     (`boxed-btn-white`). Mobile: SlickNav hamburger menu.
  2. Hero (`slider_area slider_bg_1`, bg image `banner_1.png` — fluid
     multi-color gradient waves): faint huge "CONFERENCE" watermark text;
     h1 white bold "Digital Design Conference" + "2019 NYC"; "Add to your
     Calendar" button (`boxed-btn-white`).
  3. Countdown strip (`countDOwn_area`, inside hero bottom): location pin
     icon + "City Hall, New York City"; alarm-clock icon + "12-15 Sep 2019";
     live countdown clock (`#clock`, jQuery countdown → React countdown in
     recreation).
  4. Welcome (`about_area`): "Welcome To" subheading + "The Biggest Design
     Conference of the Year 2019" heading + paragraph (Duden-river copy) +
     "Learn More" button (`boxed-btn-red`).
  5. Speakers (`speakers_area`): section title "Speakers"; 4 speaker cards
     — photo, name, role: Jonson Miller (Creative Director), Albert Jackey
     (Product Designer), Marked Macau (UI/UX Designer), Kelvin Cooper (Art
     Director); hover overlay with social icons (gradient fill).
  6. Event schedule (`event_area`): "Event Schedule" heading; day tabs
     "08 Sep 2019" / "09 Sep 2019"; per day 3 schedule rows — speaker photo
     - name + time ("10-11 am" / "12-1.00 pm" / "2.30-4.00 pm") + blurb;
       gradient `double_line` divider above.
  7. Register / book (`resister_book resister_bg_1`, bg image
     `resister.png`): "Register Now to Book" subheading + "Your Presence"
     heading + "Book Now ($150)" button (`boxed-btn-white`).
  8. Brands (`brand_area`): "Sponsors"-style logo row — 6 grayscale brand
     logos (hover restores contrast).
  9. FAQ (`faq_area`): "Frequently Ask" heading; Bootstrap accordion with 4
     items — "Is WordPress hosting worth it?", "What are the advantages of
     WordPress hosting over shared?", "Where the Venue?", "How can I attend
     the Event from Asia?" (each with Duden-river answer).
  10. Footer (`footer footer_bg_1`, bg image `footer_bg_1.png`): 3 columns
      — "Follow Us" (social: Facebook, Twitter, Instagram, Youtube), "Links"
      (Schedule, Speakers, Contact, Venue), "Venue" (address "200, D-block,
      Green lane USA", email "edumark@contact.com", phone "+10 367 467
      8934"); copyright bar ("Copyright ©{year} All rights reserved | This
      template is made with ♥ by Colorlib" → paraphrased credit).
- **Design tokens extracted from the live preview CSS (`style.css`):**
  - Signature **rainbow gradient** `linear-gradient(to right, #ff9600 0%,
#fe531e 26%, #c022a5 57%, #1bb8f9 100%)` — speaker social-icon hover
    fill, event `double_line` divider. THE brand element of the design.
  - Hero/countdown text: **white** on the gradient image; hero h1 90px /
    700 (mobile 36px), countdown numbers h3 46px / 600, date row 20px / 600.
  - Buttons (`.boxed-btn-*`, Poppins, border 0 + explicit border):
    - `boxed-btn-white`: transparent bg, 2px solid #fff border, white text,
      padding 16px 43px, weight 500, text-transform capitalize; hover →
      white bg + black text.
    - `boxed-btn-red`: white bg, 2px solid #FF0000 border, #FF0000 text,
      padding 16px 44px; hover → #FF0000 bg + white text. ("Learn More")
  - Section titles: `.section_title h3` 46px / 500 (mobile 26px);
    subheading block uppercase 15px / 500, color `#c9c9c9`, margin-bottom
    22px.
  - FAQ: question h5 22px / 400, color `#1F1F1F`; `.card-body` padding
    `0 0 40px 76px` (icon gutter left); cards bordered `#f0e9ff`-family
    light purple-gray.
  - Body text `#707070` (16px / 28px); light section tints `#f9f9ff`,
    `#fbf9ff`, `#f0e9ff` (border/link tint); neutrals `#131313`, `#1f1f1f`.
  - Spacing: `.slider_area` padding-top 300px / bottom 100px (mobile
    140/30); `.speakers_area` 100px top/bottom; `.event_area` padding-bottom
    120px + `double_line` 100px top margin; `.faq_area` 100px top/bottom;
    `.footer .footer_top` 145px/129px.
  - Secondary blue `#0181F5` appears in the generic `.boxed-btn` variant but
    the rendered page uses only the white and red variants.
- **Visual design (from screenshot + live view):** high-energy, flat-design
  event landing. Full-bleed hero of smooth, sweeping multi-color gradient
  waves (yellow/orange → magenta/purple → cyan/blue) with stark white bold
  headline, huge faint "CONFERENCE" watermark, and white-bordered
  transparent CTA; white nav over the gradient with a white "Buy Ticket"
  button; light sections below with photo speaker cards, tabbed schedule,
  gradient accents, and a light footer with a wave-pattern top edge.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/convoke-<n>/<w>/<h>`); icons → lucide-react (social
  brand icons as inline SVG per repo rule); Poppins via Google Fonts
  `<link>`; no assets copied. The jQuery countdown becomes a React
  countdown timer; the hero gradient background is recreated with CSS
  gradients (Tailwind arbitrary values) instead of the banner image; brand
  logos → simple grayscale SVG wordmarks. Copy paraphrased but same content
  kinds (event details, speaker names/roles, schedule times, FAQ
  questions, venue contact info).

Convoke lives in `apps/convoke` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a sticky header with logo, nav links, and a Buy
Ticket CTA.

#### Scenario: Header content

- **GIVEN** the Convoke page is rendered
- **WHEN** the header is displayed
- **THEN** the brand "Convoke" SHALL appear on the left
- **AND** the nav SHALL show links Home, Schedule, Blog, Speakers, Venue,
  and Contact
- **AND** the nav SHALL show a "Buy Ticket" button (white border,
  transparent fill, white text)

#### Scenario: Mobile navigation

- **GIVEN** the Convoke page is rendered on a narrow viewport
- **WHEN** the viewport is below the breakpoint
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the menu

### Requirement: Hero

The system SHALL render a full-width gradient hero with a headline and a
calendar CTA.

#### Scenario: Hero content

- **GIVEN** the Convoke page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a multi-color gradient background
- **AND** the hero SHALL show a large white bold heading "Digital Design
  Conference" with "2019 NYC" below it
- **AND** the hero SHALL show an "Add to your Calendar" button (white
  border, transparent fill)
- **AND** the hero SHALL show a large faint "CONFERENCE" watermark text

### Requirement: Event info and countdown

The system SHALL render the event location, dates, and a live countdown.

#### Scenario: Event details

- **GIVEN** the Convoke page is rendered
- **WHEN** the countdown strip is displayed
- **THEN** the strip SHALL show a location icon with "City Hall, New York
  City"
- **AND** the strip SHALL show a clock icon with the dates "12-15 Sep 2019"
- **AND** the strip SHALL show a live countdown timer (days/hours/minutes/
  seconds) counting down to the event start

### Requirement: Welcome section

The system SHALL render a welcome block after the hero.

#### Scenario: Welcome content

- **GIVEN** the Convoke page is rendered
- **WHEN** the welcome section is displayed
- **THEN** the section SHALL show the subheading "Welcome To"
- **AND** the section SHALL show the heading "The Biggest Design Conference
  of the Year 2019"
- **AND** the section SHALL show a descriptive paragraph
- **AND** the section SHALL show a "Learn More" button (red border/text,
  white fill)

### Requirement: Speakers

The system SHALL render four speaker cards.

#### Scenario: Speaker cards

- **GIVEN** the Convoke page is rendered
- **WHEN** the speakers section is displayed
- **THEN** the section SHALL show the heading "Speakers"
- **AND** the section SHALL show four speaker cards, each with a photo, a
  name, and a role (Creative Director, Product Designer, UI/UX Designer,
  Art Director)
- **AND** each card SHALL reveal social icons on hover

### Requirement: Event schedule

The system SHALL render a day-tabbed event schedule.

#### Scenario: Schedule tabs

- **GIVEN** the Convoke page is rendered
- **WHEN** the schedule section is displayed
- **THEN** the section SHALL show the heading "Event Schedule"
- **AND** the section SHALL show day tabs "08 Sep 2019" and "09 Sep 2019"
- **AND** clicking a tab SHALL switch the visible schedule day

#### Scenario: Schedule entries

- **GIVEN** the Convoke page is rendered
- **WHEN** a schedule day is displayed
- **THEN** the day SHALL list three talks, each with a speaker photo, a
  speaker name, a time slot (e.g. "10-11 am", "12-1.00 pm", "2.30-4.00 pm"),
  and a short description

### Requirement: Register / book

The system SHALL render a register-to-book band.

#### Scenario: Book content

- **GIVEN** the Convoke page is rendered
- **WHEN** the register section is displayed
- **THEN** the section SHALL show a background graphic band
- **AND** the section SHALL show the subheading "Register Now to Book" and
  the heading "Your Presence"
- **AND** the section SHALL show a "Book Now ($150)" button (white border,
  transparent fill)

### Requirement: Brand logos

The system SHALL render a row of sponsor brand logos.

#### Scenario: Brand row

- **GIVEN** the Convoke page is rendered
- **WHEN** the brands section is displayed
- **THEN** the section SHALL show at least six brand logos in grayscale
- **AND** each logo SHALL restore full contrast on hover

### Requirement: FAQ accordion

The system SHALL render a collapsible FAQ accordion.

#### Scenario: FAQ items

- **GIVEN** the Convoke page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** the section SHALL show the heading "Frequently Ask"
- **AND** the section SHALL show four questions, including "Is WordPress
  hosting worth it?", "What are the advantages of WordPress hosting over
  shared?", "Where the Venue?", and "How can I attend the Event from Asia?"
- **AND** each question SHALL expand to reveal an answer when clicked

### Requirement: Footer

The system SHALL render a three-column footer with a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Convoke page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show a "Follow Us" column with social icons
  (Facebook, Twitter, Instagram, Youtube)
- **AND** the footer SHALL show a "Links" column (Schedule, Speakers,
  Contact, Venue)
- **AND** the footer SHALL show a "Venue" column with the address, email,
  and phone

#### Scenario: Copyright bar

- **GIVEN** the Convoke page is rendered
- **WHEN** the footer bottom is displayed
- **THEN** a copyright bar SHALL show the year and the phrase "All rights
  reserved" with a credit line (paraphrased, not claiming ColorLib)

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes.
- [ ] App folder `apps/convoke`, package `@free-react-templates/convoke`; no
      collision with existing apps/specs (checked before prepping).
- [ ] Section order matches the reference 1:1 (header → hero → countdown →
      welcome → speakers → schedule → register → brands → faq → footer).
- [ ] Rainbow gradient stops (#ff9600, #fe531e, #c022a5, #1bb8f9) in
      `@theme`; Poppins via Google Fonts `<link>`; white/red button variants
      match `.boxed-btn-white` / `.boxed-btn-red` tokens.
- [ ] Placeholder images: `picsum.photos/seed/convoke-<n>/<w>/<h>`; icons
      from lucide-react; no assets copied from the demo.
- [ ] Countdown implemented in React (no jQuery); hero background via CSS
      gradient, not a copied image.
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage` for the app.
- [ ] PR description includes: source template (Wemeet), preview URL,
      design tokens used, and what differs (rename, placeholders, CSS
      gradient hero, React countdown, neutral copyright credit).
- [ ] TEMPLATES.md lines 532 AND 1690 both marked `[x]` with the surge URL
      after deploy.
