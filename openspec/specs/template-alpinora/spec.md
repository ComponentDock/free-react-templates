# Template: Alpinora (Travel Template)

## Purpose

Alpinora is a single-page travel/adventure website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Adventure" travel website template (see TEMPLATES.md, Travel
section, line 2974), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Despite its source name, the reference is a landscape-travel / adventure
agency page: a full-bleed coastal-cliffs hero photo slider with centered
white copy and a white pill CTA, a split image + shadowed white intro card,
a portfolio carousel on a lavender background, a 6-card features grid whose
cards flood with a purple gradient on hover, an image gallery carousel with
vertical arrow controls, an FAQ section with gradient-text stat counters,
a full-bleed video CTA with a purple gradient overlay, a contact form, and
a dark footer with newsletter + social widgets. The whole design is a light
white page anchored by a purple brand gradient.

Brand colors: purple gradient `#b21aff` → `#732bde` (linear-gradient 0deg,
used on primary buttons, feature-card hover, video overlay, newsletter
button, counter numbers as gradient text, social-icon hover); headings
`#222222`; body text `#777777`; light lavender `#f9f9ff` (project
background + feature cards); footer background `#222222`; newsletter input
background `#191919`. Fonts: Poppins 300/400/500/600/700 throughout.

## Design reference (replication findings)

- **Original:** ColorLib "Adventure" — travel template
  (source: https://colorlib.com/wp/template/adventure/). Listed in
  TEMPLATES.md `## Travel (44)` at line 2974; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/adventure/
  (HTTP 200, 29,492 bytes, verified 2026-10-01). HTML saved to
  `/tmp/adventure-preview.html`; stylesheet `css/main.css` (HTTP 200,
  34,840 bytes) saved to `/tmp/adventure-main.css`. The preview DOM is
  authoritative for section order and copy; the screenshot
  (`adventure-free-travel-website-template.jpg`, real JPEG 1200×946,
  reviewed visually) is authoritative for the hero's white text treatment
  over the photo.
- **Stylesheets in the reference:** `linearicons.css`, `font-awesome.min.css`,
  `bootstrap.css`, `magnific-popup.css`, `animate.min.css`,
  `owl.carousel.css`, `main.css` (theme — canonical tokens). Icon fonts and
  the owl carousel are NEVER copied: recreation uses lucide-react icons and
  a React-state slider.
- **Fonts:** `font-family: "Poppins", sans-serif` on every rule in main.css
  (headings 600, h1 700, body copy 300/400). Load Poppins 300–700 via
  Google Fonts `<link>` in `index.html`.
- **Buttons / links (from main.css):**
  - `.primary-btn` — background-image `linear-gradient(0deg, #b21aff 0%,
    #732bde 100%)`, `border-radius: 25px`, `line-height: 42px`,
    `padding-left: 30px; padding-right: 60px`, white text (font-weight 500),
    inline-block; an arrow icon absolutely positioned `right: 30px` slides
    to `right: 20px` on hover (0.3s transition); hover keeps white text.
  - `.header-btn` (hero CTA) — `background-color: #fff; color: #222;
    padding: 8px 40px; font-weight: 600; border-radius: 20px;
    box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.1)`; uppercase text; hover →
    `background: transparent; border: 1px solid #fff; color: #fff`.
  - `.single-footer-widget .bb-btn` (newsletter) — same purple gradient,
    white, font-weight 300, `border-radius: 0` (square), sits beside the
    dark input.
  - Utility palette (`.genric-btn.*`, not core to the home page): success
    `#4cd3e3`, info `#38a4ff`, warning `#f4e700`, danger `#f44a40`;
    progress-table bar colors `#6382e6` / `#e66686` / `#f09359` / `#73fbaf`
    (elements-page extras — not required on the index page).
- **Section backgrounds / layout (from adventure-preview.html + main.css):**
  - header `header.default-header` — `position: absolute; top: 0;
    width: 100%; z-index: 9; background-color: transparent` over the hero;
    mobile (<992px) and sticky-scrolled states get solid `#222`. Brand:
    a diamond (4-square) logo mark + wordmark ("Adventure" → Alpinora).
    Nav: Home · About · Service · Gallery · Faq · Contact + a "Pages"
    dropdown (Generic · Elements) — recreation keeps the dropdown as a
    static menu; inner pages are NOT recreated.
  - hero `section#home.banner-area` > `.default-banner.active-blog-slider`
    — full-width coastal photo slider (`margin-top: -48px` under the
    absolute header); 3 slides, each: eyebrow h4 "Discover the Colorful
    World", giant h1 ("New Adventure" / "New Trip" / "New Experience" —
    72px/700 desktop per `.default-banner h1`, white on the photo per the
    screenshot), lorem subtext, white pill "Discover Now" `.header-btn`.
    Recreation: React-state autoplay slider (no owl).
  - about `section#about.info-area` — centered section title h1 "Why
    Choose Us Your Fitness Builder" + gray subtitle "Who are in extremely
    love with eco friendly system."; split row: image left (`.info-thumb`,
    overflow hidden) + white card right (`.info-content`: `background: #fff;
    padding: 80px 100px 80px 40px; box-shadow: 0px 0px 50px 0px
    rgba(157,157,157,0.3)` plus a 70px-wide white strip on its left edge
    with a diagonal shadow `-35.355px 35.355px 50px 0px
    rgba(157,157,157,0.3)`); card content: h2 with `<br>` line breaks
    ("We Realize that / there are reduced / Wastege Stand out") + 3
    paragraphs.
  - project `section#project.project-area` (`background-color: #f9f9ff`,
    `section-gap` padding) — title h1 "Latest Project on the go" + lorem
    subtitle; 5 project cards, each image + h6 "Vector Illustration" +
    LCD-screens blurb; the reference lays them out as an owl slider —
    recreation: React-state carousel/grid (screenshot shows a multi-card
    row; implement responsive 2–3-up with scroll/next-prev).
  - features `section#secvice.feature-area` (note the reference's typo id
    `secvice`) — title h1 "Some Features that Made us Unique" + gray
    subtitle; 6 `.single-feature` cards (`background-color: #f9f9ff;
    padding: 30px 30px 15px; transition: all 0.3s`): LinearIcon (#222,
    20px, margin-right 12px) + h4 title + blurb; titles: Expert
    Technicians · Professional Service · Great Support · Technical Skills ·
    Highly Recomended · Positive Reviews; hover → purple gradient
    background + white text/icon (same gradient rule group as
    `.primary-btn`).
  - gallery `section#gallery.gallery-area` — owl slider of 6 landscape
    images (`img/g1.jpg`–`img/g6.jpg` → picsum seeds); `.single-gallery-image
    { height: 200px; background-size: cover; margin-top: 30px }`;
    vertical prev/next controls (`.lnr-arrow-up` / `.lnr-arrow-down`)
    positioned bottom-right (`left: 90%; top: 89%`): white boxes,
    `box-shadow: -14.142px 14.142px 20px 0px rgba(157,157,157,0.2)`,
    `padding: 14px`, `border: 1px solid #f5f5f5`.
  - faq `section#faq.faq-area` (`background: #fff`) — title h1 "Frequently
    Asked Questions" + gray subtitle; `.counter-left` stat block
    (right-aligned): h2 48px/700 with the purple gradient applied as
    gradient TEXT (`background-clip: text`): 5962 Projects Completed ·
    2394 New Projects · 1439 Tickets Submitted · 933 Cup of Coffee (each
    fact `margin-bottom: 26px`); accordion FAQ with 3 questions ("Are your
    Templates responsive?", "Does it have all the plugin as mentioned?",
    "Can i use the these theme for my client?") + body copy. Recreation:
    2-column layout — facts + accordion; accordion is open/close stateful.
  - video `section.video-area` — `padding: 200px 0 60px 0;
    background: url(../img/video-bg.jpg) no-repeat center center/cover`
    (→ picsum seed); `.overlay-bg` = the purple gradient at `opacity: .6`;
    centered content: play-icon link (magnific-popup popover → React
    popover/modal), h3 "Being unique is the preference" (600, 18px,
    letter-spacing 2px), h4 "Youtube video will appear in popover" (300,
    14px); a right-aligned `.video-desc` block at the bottom
    (`margin-top: 120px`).
  - logos `section.logo-area` — **empty in the live preview** (container
    with an empty row; no img assets). Fidelity: render the section as
    empty spacing only — do NOT invent a partner-logo grid.
  - contact `section#contact.contact-area` — title h1 "If you need, Just
    drop us a line" + gray subtitle; form with `input name="name"`
    (placeholder "Enter your name", required), `input name="email"`
    (placeholder "Enter email address", `pattern` email regex, required),
    `input name="subject"` (placeholder "Enter your subject", required),
    `textarea name="message"` (placeholder "Messege" [sic in reference —
    may be corrected to "Message"]), submit `.primary-btn` "Send Message".
    Recreation: zod + react-hook-form validation, block submit until valid,
    local success state.
  - footer `footer.footer-area` (`background-color: #222222;
    padding-top: 100px`) — widgets: About Us (h6 + lorem paragraph),
    Newsletter ("Stay update with our latest" + `input` with
    `background: #191919; color: #777; border: none; border-radius: 0;
    width: 80%; padding-left: 20px` + square gradient `.bb-btn`),
    Follow Us ("Let us be social" + social icons `color: #cccccc`, hover →
    gradient). Copyright bar: "Copyright © <year> All rights reserved |
    This template is made with ❤ by Colorlib" — reword for Alpinora, no
    ColorLib credit; footer MUST link https://www.componentdock.com/
    ("Component Dock").
- **Inner pages:** the reference's Pages dropdown (Generic, Elements)
  destinations are NOT recreated — nav links become dead anchors `#` or
  scroll targets to the home sections.

## Requirements

### Requirement: Transparent header with Alpinora brand and nav

The system SHALL render an absolute, transparent header over the hero with
the Alpinora brand mark, primary nav links, and a Pages dropdown.

#### Scenario: Desktop header

- **GIVEN** the Alpinora app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit absolutely over the hero (transparent
  background, z-index above the hero image)
- **AND** it SHALL show the Alpinora brand: a diamond/four-square logo mark
  (inline SVG or lucide icon, white) + the word "Alpinora" in white
- **AND** the nav SHALL list Home · About · Service · Gallery · Faq ·
  Contact in white text, uppercase-styled, plus a "Pages" dropdown
- **AND** "Pages" SHALL open a dropdown listing Generic and Elements
  (static links, no inner pages)

#### Scenario: Sticky and mobile header

- **GIVEN** the header is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the header background SHALL become solid `#222222`
- **AND** on a viewport narrower than the desktop breakpoint a hamburger
  button SHALL open a stacked menu panel with `aria-expanded` reflecting
  the open state, on a `#222222` background

### Requirement: Hero photo slider with white copy and pill CTA

The system SHALL render a full-width hero slider of landscape photos with
centered white copy and a white pill CTA per slide.

#### Scenario: Hero slides

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show 3 slides, each with a full-bleed landscape photo
  (picsum seed placeholder), a small white eyebrow "Discover the Colorful
  World", a giant white h1 ("New Adventure" / "New Trip" / "New
  Experience" — first slide visible on load), white lorem subtext, and a
  white `.header-btn` pill ("Discover Now": white background, `#222` text,
  radius 20px, shadow `0 20px 20px rgba(0,0,0,0.1)`, uppercase; hover →
  transparent with white border/text)
- **AND** the slider SHALL auto-advance (React state; no owl carousel) with
  dot or arrow navigation and pause-on-hover behavior

### Requirement: About split section with shadowed white card

The system SHALL render a centered title above a split image + white
shadowed text card.

#### Scenario: About card

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** a centered section title SHALL show h1 "Why Choose Us Your
  Fitness Builder" + gray subtitle ("Who are in extremely love with eco
  friendly system." or paraphrase)
- **AND** below it a two-column split SHALL show a landscape/abstract image
  (picsum seed) on the left and a white card on the right (`#fff`,
  padding ~80px 100px 80px 40px, box-shadow `0 0 50px
  rgba(157,157,157,0.3)`, plus the 70px white edge-strip with the diagonal
  `-35px 35px 50px rgba(157,157,157,0.3)` shadow on its left)
- **AND** the card SHALL contain an h2 with deliberate line breaks ("We
  Realize that / there are reduced / Wastege Stand out" or close paraphrase)
  and 3 body paragraphs

### Requirement: Project carousel on lavender background

The system SHALL render a project/portfolio section with 5 cards on the
`#f9f9ff` lavender background.

#### Scenario: Project cards

- **GIVEN** the project section is rendered
- **WHEN** it loads
- **THEN** the lavender background `#f9f9ff` SHALL fill the section
- **AND** a centered title h1 "Latest Project on the go" + lorem subtitle
  SHALL appear above the cards
- **AND** 5 project cards SHALL render (image via picsum seed, h6 caption
  "Vector Illustration", LCD-screens blurb), laid out as a responsive
  carousel/grid (multi-card row on desktop, stacked on mobile) with
  next/prev navigation state

### Requirement: Features grid with purple-gradient hover cards

The system SHALL render a 6-card features grid whose cards flood with the
brand gradient on hover.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** it loads
- **THEN** a centered title h1 "Some Features that Made us Unique" + gray
  subtitle SHALL appear
- **AND** 6 cards SHALL render (3-up desktop): Expert Technicians,
  Professional Service, Great Support, Technical Skills, Highly Recomended,
  Positive Reviews — each with a lucide icon (dark `#222`), h4 title, and
  a short blurb
- **AND** each card SHALL have the light lavender `#f9f9ff` background with
  padding ~30px 30px 15px
- **AND** on hover the card SHALL transition (0.3s) to the purple gradient
  background (`linear-gradient(0deg, #b21aff 0%, #732bde 100%)`) with white
  title, blurb, and icon

### Requirement: Gallery carousel with vertical arrow controls

The system SHALL render an image gallery slider of 6 photos with vertical
prev/next controls.

#### Scenario: Gallery slider

- **GIVEN** the gallery section is rendered
- **WHEN** it loads
- **THEN** it SHALL show landscape images (picsum seeds) in a React-state
  carousel (~200px tall, cover crop, 30px top gap per item)
- **AND** vertical prev/next controls (up/down arrow icons in white boxes:
  padding 14px, border `1px solid #f5f5f5`, shadow `-14px 14px 20px
  rgba(157,157,157,0.2)`) SHALL sit at the bottom-right of the section
- **AND** clicking them SHALL move the carousel one step with state-driven
  behavior

### Requirement: FAQ with gradient-text counters and accordion

The system SHALL render an FAQ section pairing 4 gradient-text stat
counters with a 3-item accordion.

#### Scenario: Counters

- **GIVEN** the FAQ section is rendered
- **WHEN** it loads
- **THEN** a centered title h1 "Frequently Asked Questions" + gray
  subtitle SHALL appear
- **AND** 4 facts SHALL render right-aligned: 5962 Projects Completed ·
  2394 New Projects · 1439 Tickets Submitted · 933 Cup of Coffee
- **AND** each number SHALL be large (~48px, weight 700) with the purple
  gradient applied as gradient text (`background-clip: text`, transparent
  fill) on a white section background

#### Scenario: FAQ accordion

- **GIVEN** the FAQ section is rendered
- **WHEN** the accordion renders
- **THEN** 3 questions SHALL appear: "Are your Templates responsive?",
  "Does it have all the plugin as mentioned?", "Can i use the these theme
  for my client?" (or close paraphrase) with body-copy answers
- **AND** clicking a question SHALL toggle its answer panel (stateful
  open/close; first item open by default is acceptable)

### Requirement: Video CTA with purple gradient overlay

The system SHALL render a full-bleed video call-to-action section with the
brand gradient overlay and a play popover.

#### Scenario: Video section

- **GIVEN** the video section is rendered
- **WHEN** it loads
- **THEN** a full-width background photo (picsum seed) SHALL sit under a
  purple gradient overlay (`linear-gradient(0deg, #b21aff 0%,
  #732bde 100%)` at opacity 0.6)
- **AND** centered content SHALL show a play-icon link, h3 "Being unique
  is the preference" (600, ~18px, letter-spacing 2px, white), and h4
  "Youtube video will appear in popover" (300, ~14px, white)
- **AND** clicking the play link SHALL open a lightweight popover/modal
  (local state; no third-party video embed required) with an accessible
  close control

### Requirement: Empty logo strip

The system SHALL render the logo section as empty spacing to match the
reference (which contains no partner logos).

#### Scenario: Logo area

- **GIVEN** the logo strip section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL render without any partner logos or invented
  logo grid (the live reference has an empty container)
- **AND** it SHALL preserve vertical spacing between the video CTA and the
  contact section

### Requirement: Contact form with validation

The system SHALL render a contact form with name, email, subject, and
message fields plus a gradient pill submit button.

#### Scenario: Contact form fields

- **GIVEN** the contact section is rendered
- **WHEN** it loads
- **THEN** a centered title h1 "If you need, Just drop us a line" + gray
  subtitle SHALL appear
- **AND** the form SHALL contain: name input (placeholder "Enter your
  name", required), email input (placeholder "Enter email address",
  email-pattern validated, required), subject input (placeholder "Enter
  your subject", required), and message textarea (placeholder "Message",
  required)
- **AND** the submit button SHALL be a `.primary-btn`-style pill (purple
  gradient, radius 25px, white text, arrow icon that slides on hover)
  labeled "Send Message"

#### Scenario: Validation behavior

- **GIVEN** the contact form is rendered
- **WHEN** the user submits with an invalid or empty field
- **THEN** submission SHALL be blocked and a per-field error message SHALL
  be shown
- **AND** when all fields are valid the form SHALL show a local success
  acknowledgment (no network call required)

### Requirement: Dark footer with About, Newsletter, and Follow Us

The system SHALL render a `#222222` dark footer with three widgets and a
Component Dock credit line.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the footer background SHALL be `#222222` with white widget
  headings (h6): About Us (lorem paragraph), Newsletter ("Stay update with
  our latest" + dark input `#191919`, `#777` text, square corners + square
  purple-gradient subscribe button), Follow Us ("Let us be social" +
  social icons `#cccccc`, hover → purple gradient)
- **AND** the copyright bar SHALL show the current year + an Alpinora
  credit line with NO ColorLib attribution
- **AND** the footer SHALL link https://www.componentdock.com/ labeled
  "Component Dock" (mandatory)

### Requirement: Page composition, landmarks, and responsiveness

The system SHALL compose all sections in document order with semantic
landmarks and stay responsive from 320px to 1920px.

#### Scenario: Composition

- **GIVEN** the Alpinora app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be in the banner landmark, hero → logo-strip
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Alpinora — Travel Template"
- **AND** the page SHALL be fully responsive (hero text scales down,
  split sections stack, features 3→2→1 columns, carousel items stack,
  footer widgets stack)
- **AND** no file under `apps/alpinora` SHALL reference ColorLib (strings,
  comments, or assets); images use `picsum.photos/seed/alpinora-<n>` and
  icons come from `lucide-react`

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/alpinora`
      (`scripts/verify-app.sh alpinora` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: transparent header (diamond mark + Alpinora +
      Pages dropdown, solid `#222` on scroll/mobile), 3-slide coastal hero
      (white eyebrow + giant white h1 + white pill CTA with shadow),
      about split (image + white card with layered gray shadow + edge
      strip), lavender project carousel (5 "Vector Illustration" cards),
      features grid (6 cards, purple-gradient hover flood), gallery
      (6 photos + bottom-right vertical arrow controls), FAQ (4
      gradient-text counters + 3-item accordion), video CTA (photo +
      purple overlay 0.6 + play popover), empty logo strip, contact form
      (4 fields + gradient pill submit), dark footer (About +
      Newsletter + Follow Us + Component Dock link) match the Adventure
      preview 1:1.
- [ ] Design tokens in `@theme`: brand gradient `#b21aff` → `#732bde`
      (0deg), headings `#222222`, body `#777777`, lavender `#f9f9ff`,
      footer `#222222`, newsletter input `#191919`, social idle `#cccccc`;
      Poppins 300–700 via Google Fonts `<link>` in `index.html`.
- [ ] Buttons: primary pill = gradient + radius 25px + sliding arrow span;
      hero CTA = white pill + radius 20px + `0 20px 20px rgba(0,0,0,0.1)`
      shadow + transparent hover; newsletter button = gradient, square
      corners.
- [ ] Placeholder images use `picsum.photos/seed/alpinora-<n>/<w>/<h>`
      (hero ×3, about image, project ×5, gallery ×6, video background);
      icons from lucide-react (diamond, arrow-right, play, chevrons,
      menu/x, socials via inline SVG); no ColorLib assets or strings
      copied.
- [ ] PR description states source template (ColorLib "Adventure"), preview
      URL (https://preview.colorlib.com/theme/adventure/), design tokens,
      and what differs (new name Alpinora, placeholder images, paraphrased
      copy, inner pages not recreated, empty logo strip kept empty).
