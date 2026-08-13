# Template: Benefact (Charity / Fundraising Template)

## Purpose

Benefact is a single-page charity / fundraising website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fundraiser" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fundraiser" — free responsive Bootstrap 4 charity /
  fundraising website template (source:
  https://colorlib.com/wp/template/fundraiser/). TEMPLATES.md has TWO copies
  of this item (line 404 in the Bootstrap category and line 1267 in the
  Charity category — mark BOTH `[x]` when done). Both rows reference the
  correct screenshot (`fundraiser-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/fundraiser/`
  returns HTTP 200 (curl verified 2026-08-11). Page title: "Fundraiser —
  Website Template by Colorlib". The rendered page is the full template:
  green top bar, dark navbar, 3-slide hero with static caption, tinted
  cause-strip cards, Latest Causes with progress bars, Why Choose Us with
  numbered features, Latest Event, Donate Now form, CTA strip, footer.
  Stylesheets analyzed: `css/bootstrap.min.css` (custom-compiled — carries
  the real `--primary`/`--secondary` tokens) + `css/style.css` (component
  styling).
- **Screenshot:** `fundraiser-free-template.jpg` — consistent with the live
  preview (bright green brand bar, dark navy navbar, children-photography
  hero with handwritten-script headline, red/yellow/green tinted cause
  cards). The screenshot's left card reads "Lifesaving" while the live DOM
  says "Livelihood" — the DOM is the ground truth for text.
- **Visual design (from live preview + browser vision):** warm, hopeful
  charity aesthetic. Bright green `#00a651` brand color on the top bar,
  CTAs, badges and progress fills; dark slate `#21323b` navbar; white page
  with light-gray `#f6f5f5` CTA strip and gray `#c9ccd4` footer. Headlines
  and section titles use the handwritten script font **Mansalva** (hero h1
  at 5rem/900, section titles, feature-card titles, CTA heading) over the
  Roboto body — a personal, human touch contrasting with the clean
  sans-serif UI. Photos are charity-typical (children, classrooms,
  caregivers) with red/yellow/green screen-blend overlays on the three
  cause-strip cards. The demo brands itself "Fundraiser"; recreation uses
  the NEW name **Benefact**.

- **Structure (1:1, section order — from the live DOM):**
  1. Top bar (`bg-primary py-3 top-bar shadow`, hidden below md) — bright
     green strip: LEFT links **Home / Events / Become A Volunteer** (white,
     spaced p-3); RIGHT social icon links (twitter, facebook, icomoon
     glyphs).
  2. Navbar (`site-navbar site-navbar-target bg-secondary shadow`) — dark
     slate `#21323b` bar: white text wordmark **"Fundraiser"** (recreated as
     "Benefact") left; nav links (white) **Home (active) / About Us / Our
     Causes / Blog / Contact** right; mobile hamburger toggle (white icon).
  3. Hero (`owl-carousel-wrapper`) — static centered caption box
     (`box-92819`, absolute 50/50, max-width 700px) over a 3-slide owl
     carousel of full-bleed background photos (`ftco-cover-1 overlay`,
     100vh / min-600px, black overlay at opacity .3): h1 (Mansalva 5rem
     white) **"Join The Movement To end Child Poverty"** + green
     **"Donate Now"** button (`btn btn-primary py-3 px-4 rounded-0` —
     square corners). Slides rotate behind the static caption.
  4. Cause strip (`feature-29192-wrap d-md-flex`, negative margin-top -20px,
     z-index 2 overlapping the hero) — THREE 33.33%-wide × 300px photo cards,
     each with a colored screen-blend overlay (opacity .9,
     `mix-blend-mode: screen`) and white Mansalva text block pinned
     bottom-left (`.text` at bottom 20px / left 20px: `span.meta` +
     `h3.h1`):
     - **Livelihood** — red tint `#dc3545` (class `overlay-danger`)
     - **Natural Remedies** (meta "Health") — yellow tint `#ffc107`
       (class `overlay-success`)
     - **New Class Rooms** (meta "School") — green tint `#00a651`
       (class `overlay-warning`)
       NOTE: the class names are swapped vs. their actual colors in the
       reference CSS — use the colors above as rendered.
  5. "Latest Causes" (`site-section`) — heading row: LEFT `heading-20219`
     with Mansalva h2 **"Latest Causes"**; RIGHT col-md-8 lorem paragraph.
     THREE cause cards (col-md-4 `cause shadow-sm`):
     - `cause-link` image with the progress overlay pinned to its bottom
       (`custom-progress-wrap`): caption **"80% complete"** (white 12px,
       bottom-right) + 7px track (`#ccc`) with a colored fill at 80% —
       card 1 `bg-danger` `#dc3545`, card 2 `bg-primary` `#00a651`,
       card 3 `bg-warning` `#ffc107` (right side radius 4px).
     - Bordered content box (`px-3 pt-3 border-top-0 border shadow-sm`):
       small rounded category badge (School / Health / Livelihood →
       `badge-danger` / `badge-primary` / `badge-warning`), h3 title link
       (26px, black, "Alias Odit Ipsam Quas Unde Obcaecati"), Donated row
       (`border-top border-light border-bottom py-2 d-flex`: label
       "Donated" + green `text-primary` **"$32,919"**), organizer row
       (50px rounded-circle avatar + "James Smith").
  6. "Why Choose Us" (`site-section bg-image overlay` — fixed-attachment
     background photo with dark overlay) — white Mansalva h2 **"Why Choose
     Us"** + white lorem paragraph; 2×2 grid (col-md-6) of
     `feature-29012 d-flex` rows: white-outlined number circle (80×80px,
     2px white border, 1.5rem white numeral) + h3 title + paragraph —
     **Odit Reiciendis, Nisi Sint Explicabo, Accusamus Labore
     Necessitatibus, Consectetur Dolor Elit**.
  7. "Latest Event" (`site-section`) — Mansalva h2 **"Latest Event"**; TWO
     event cards (col-md-6 `event-29191 mb-5`): rounded photo; row below —
     green date badge (`bg-primary p-3 rounded`, flex 0 0 100px: white h3
     day **"22"** + white small **"Oct 2019"**) + meta block: clock + room
     line (**"9:30 AM — 11:30 AM" · "Ghana Africa"**, muted icons) and h3
     title link (**"Ratione Delectus Assumenda Rem Modi Quaerat Laborum"**).
  8. "Donate Now" (`site-section bg-image overlay-primary` — green overlay
     over a photo) — LEFT photo (`img-fluid shadow`); RIGHT white card
     (`bg-white h-100 p-4 shadow`): Mansalva h3 **"Donate Now"** + form
     with fields **Name, Email, Amount in dollar** (form-control) and a
     green **"Donate Now"** submit (`btn btn-primary`).
  9. CTA strip (`site-section`) — `d-md-flex cta-20101 bg-light p-5`
     (light gray `#f6f5f5`): Mansalva h2 **"Helping the Homeless, Hungry,
     and Hurtings Children"** left + right-aligned green **"Donate Now"**
     button.
  10. Footer (`site-footer`, CSS background **`#c9ccd4`** despite the
      `bg-white` class) — LEFT half: **About Us** widget (col-md-7 lorem
      paragraph) + **Features** widget (col-md-4 ml-auto link list: About
      Us, Testimonials, Terms of Service, Privacy, Contact Us); RIGHT
      col-md-4: **Subscribe to Newsletter** form (input-group: rounded-0
      input with secondary border + green **Subscribe** button) and
      **Follow Us** social icon row (facebook, twitter, instagram,
      linkedin); bottom copyright bar (`border-top` white/10): "Copyright
      © <year> All rights reserved | made with ♥ by Colorlib".

- **Design tokens (extracted from `css/bootstrap.min.css` + `css/style.css`):**
  - Brand green **`#00a651`** (`--primary`) — top bar bg, btn-primary bg +
    border, text-primary, badges, date badge, progress fills, hero button,
    footer link hover, focus border, carousel dots active.
  - Dark slate **`#21323b`** (`--secondary`) — navbar bg, badge-warning
    text color.
  - Body/heading text **`#364d59`** (font-weight 300; headings Roboto).
  - Danger red **`#dc3545`** — badge-danger, cause card 1 progress fill,
    Livelihood card tint.
  - Warning yellow **`#ffc107`** — badge-warning, cause card 3 progress
    fill, Natural Remedies card tint.
  - Light gray **`#f6f5f5`** — `bg-light` override (CTA strip).
  - Footer background **`#c9ccd4`**; footer links `rgba(0,0,0,0.5)` →
    hover `#00a651`; copyright border `rgba(255,255,255,0.1)`.
  - Fonts — **Roboto** (body + headings) and **Mansalva** (cursive display:
    hero h1 5rem/900, `text-cursive` section titles, feature-card h1s, CTA
    h2, Donate Now h3) — Google Fonts `<link>`s in `index.html`.
  - Buttons — `.btn-primary`: bg `#00a651`, white text; hero button
    `py-3 px-4 rounded-0` (square); standard buttons radius 4px/0.25rem
    (Bootstrap default); no pill shapes.
  - Hero — 100vh / min-600px slides, black overlay opacity .3, static
    centered caption box (max-width 700px).
  - Cause strip — 3 cards × 300px tall, colored screen-blend overlay at
    opacity .9, text bottom-left (bottom 20px / left 20px).
  - Progress bar — 7px tall, track `#ccc`, fill with 4px right radius,
    caption 12px white bottom-right.
  - Number circles — 80px, 2px white border, 1.5rem numeral.
  - Section rhythm — `.site-section` padding 2.5em mobile / 5em desktop;
    headings left-aligned in a `heading-20219` block with copy to the
    right (Latest Causes) or centered (Latest Event).
  - `bg-image` sections use `background-attachment: fixed` (parallax).

- **Recreation decisions:** photos → picsum placeholders
  (hero slides pinned to verified warm/people scenes: `picsum.photos/id/64`,
  `id/823`, `id/996` — the arbitrary `benefact-hero-N` seeds collided to the
  same night-sky photo; cause/event/avatar seeds verified distinct); icons →
  lucide-react (Menu, Clock, MapPin) with social brand icons as inline SVG
  (lucide-react removed brand glyphs); fonts via Google Fonts `<link>`
  (Roboto + Mansalva) in `index.html`; logo recreated as a text wordmark
  "Benefact" (white on the dark navbar); the hero's 3 rotating background
  slides keep the static caption box; the carousel auto-rotates every 5s and
  the caption stays fixed.

Benefact lives in `apps/benefact` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Green top bar with links and social icons

The system SHALL render a bright green `#00a651` top bar (hidden on small
screens) with three left links and two right social icon links.

#### Scenario: Top bar layout

- **GIVEN** the Benefact page is rendered
- **WHEN** the page loads
- **THEN** a green `#00a651` top bar SHALL show the links Home, Events, and
  Become A Volunteer in white on the left
- **AND** social icon links (Twitter, Facebook) SHALL be shown on the right
- **AND** the top bar SHALL be hidden on narrow (mobile) viewports

### Requirement: Dark navbar with wordmark and nav links

The system SHALL render a dark slate `#21323b` navbar with the Benefact
wordmark, five white nav links, and a mobile hamburger toggle.

#### Scenario: Navbar layout

- **GIVEN** the Benefact page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the white wordmark "Benefact" on the left
- **AND** the links Home (active), About Us, Our Causes, Blog, and Contact
  SHALL be shown in white on the right

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the same five links

### Requirement: Hero with static caption and rotating backgrounds

The system SHALL render a full-viewport hero with a static centered caption
box (script headline + green Donate Now button) over three rotating
background photos with a dark overlay.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the caption box SHALL show the Mansalva headline "Join The
  Movement To end Child Poverty" in white
- **AND** a green `#00a651` square-cornered "Donate Now" button SHALL be
  shown beneath the headline
- **AND** the background SHALL cycle through three photos under a dark
  overlay

### Requirement: Cause strip with three tinted cards

The system SHALL render three 300px-tall photo cards overlapping the hero
bottom, each with a colored tint overlay and a white script title.

#### Scenario: Cause cards

- **GIVEN** the cause strip is displayed
- **WHEN** the page loads
- **THEN** three cards SHALL be shown side by side: Livelihood (red
  `#dc3545` tint), Natural Remedies (yellow `#ffc107` tint), and New Class
  Rooms (green `#00a651` tint)
- **AND** each card SHALL show a small white meta label and a large white
  Mansalva title pinned to the bottom-left
- **AND** on a narrow viewport the cards SHALL stack vertically

### Requirement: Latest Causes section with progress cards

The system SHALL render a "Latest Causes" heading with three cause cards,
each with a photo, an 80% progress bar, a category badge, a title, a
donation amount, and an organizer.

#### Scenario: Cause card content

- **GIVEN** the Latest Causes section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show the Mansalva heading "Latest Causes" with
  a description paragraph to its right
- **AND** three cards SHALL be shown, each with a photo and a progress bar
  labelled "80% complete" (fill colors: red `#dc3545`, green `#00a651`,
  yellow `#ffc107`)
- **AND** each card SHALL show a small category badge (School, Health, or
  Livelihood), a title link, a "Donated" row with the green amount
  "$32,919", and an organizer row with a circular avatar and the name
  "James Smith"

### Requirement: Why Choose Us numbered features

The system SHALL render a photo-background section with a white script
heading, white copy, and four numbered feature rows in a 2×2 grid.

#### Scenario: Feature rows

- **GIVEN** the Why Choose Us section is displayed
- **WHEN** the page loads
- **THEN** the heading "Why Choose Us" SHALL appear in white Mansalva above
  the copy
- **AND** four feature rows SHALL be shown, each with a white-outlined
  number circle (1–4), a title, and a paragraph: Odit Reiciendis, Nisi
  Sint Explicabo, Accusamus Labore Necessitatibus, Consectetur Dolor Elit

### Requirement: Latest Event section

The system SHALL render a "Latest Event" heading and two event cards, each
with a photo, a green date badge, a time/location line, and a title.

#### Scenario: Event cards

- **GIVEN** the Latest Event section is displayed
- **WHEN** the page loads
- **THEN** two cards SHALL be shown, each with a rounded photo and a green
  `#00a651` date badge reading "22" over "Oct 2019"
- **AND** each card SHALL show the meta line "9:30 AM — 11:30 AM" with a
  clock icon and "Ghana Africa" with a location icon
- **AND** each card SHALL show the title "Ratione Delectus Assumenda Rem
  Modi Quaerat Laborum"

### Requirement: Donate Now form

The system SHALL render a green-overlay photo section with a framed photo
on the left and a white card containing a "Donate Now" form on the right.

#### Scenario: Donation form

- **GIVEN** the Donate Now section is displayed
- **WHEN** the page loads
- **THEN** the white card SHALL show the Mansalva heading "Donate Now" and
  input fields Name, Email, and Amount in dollar
- **AND** a green "Donate Now" submit button SHALL be shown

#### Scenario: Donation form validation

- **GIVEN** the donation form is displayed
- **WHEN** the user submits without filling required fields or with an
  invalid email
- **THEN** per-field validation errors SHALL be shown and no submission
  occurs

### Requirement: CTA strip

The system SHALL render a light-gray `#f6f5f5` strip with a script heading
and a right-aligned green Donate Now button.

#### Scenario: CTA content

- **GIVEN** the CTA strip is displayed
- **WHEN** the page loads
- **THEN** the heading "Helping the Homeless, Hungry, and Hurtings
  Children" SHALL be shown in Mansalva
- **AND** a green "Donate Now" button SHALL be shown on the right

### Requirement: Footer with About, Features, Subscribe, Follow

The system SHALL render a gray `#c9ccd4` footer with About Us and Features
widgets, a newsletter subscribe form, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed on the `#c9ccd4` background
- **WHEN** the page loads
- **THEN** the About Us paragraph and the Features link list (About Us,
  Testimonials, Terms of Service, Privacy, Contact Us) SHALL be shown
- **AND** a Subscribe to Newsletter form (email input + green Subscribe
  button) and Follow Us social icons (Facebook, Twitter, Instagram,
  LinkedIn) SHALL be shown
- **AND** a copyright bar SHALL credit ColorLib

#### Scenario: Subscribe validation

- **GIVEN** the footer subscribe form is displayed
- **WHEN** the user enters an invalid email and presses Subscribe
- **THEN** a validation error SHALL be shown and no success message appears

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Benefact app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar, navbar, hero, cause strip,
  Latest Causes, Why Choose Us, Latest Event, Donate Now, CTA strip, and
  footer in order
- **AND** the document title SHALL be "Benefact — Charity Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/benefact`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/benefact`)
- [ ] Section order matches the reference 1:1 (top bar → navbar → hero → cause strip → Latest Causes → Why Choose Us → Latest Event → Donate Now → CTA strip → footer)
- [ ] Design tokens in `@theme` (brand green #00a651, dark slate #21323b, text #364d59, red #dc3545, yellow #ffc107, light #f6f5f5, footer #c9ccd4, Roboto + Mansalva stacks)
- [ ] Top bar: green #00a651, links Home / Events / Become A Volunteer + 2 social icons, hidden on mobile
- [ ] Navbar: dark slate #21323b, "Benefact" wordmark, 5 white links, mobile hamburger
- [ ] Hero: 100vh, static centered caption (Mansalva headline + square green Donate Now button), 3 rotating background photos, dark overlay
- [ ] Cause strip: 3 × 300px cards overlapping hero, red/yellow/green tints (Livelihood / Natural Remedies / New Class Rooms), white script titles bottom-left, stack on mobile
- [ ] Latest Causes: heading + copy row, 3 cards with 80% progress bars (red/green/yellow fills), badges (School/Health/Livelihood), "$32,919" green amount, avatar + "James Smith"
- [ ] Why Choose Us: photo bg, white Mansalva heading, 4 numbered feature rows (80px white-bordered number circles)
- [ ] Latest Event: 2 cards, green date badge (22 / Oct 2019), "9:30 AM — 11:30 AM · Ghana Africa" meta, title link
- [ ] Donate Now: green overlay photo section, white card form (Name, Email, Amount in dollar), validation errors
- [ ] CTA strip: bg-light #f6f5f5, Mansalva heading, right green Donate Now button
- [ ] Footer: #c9ccd4, About Us + Features widgets, Subscribe form with green button, Follow Us social icons, ColorLib credit
- [ ] Document title "Benefact — Charity Template"
- [ ] BOTH TEMPLATES.md rows marked `[x]` on completion: line 404 (Bootstrap) and line 1267 (Charity)
