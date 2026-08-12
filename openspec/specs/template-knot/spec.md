# Template: Knot (Wedding — Bootstrap)

## Purpose

Knot is a single-page wedding website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sunshine" wedding website template design (see TEMPLATES.md,
Bootstrap category, line 507 — duplicate row at line 3100, same template, one
app only), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Sunshine" — free wedding website HTML template
  (page `<title>` "Weeding" — a typo in the source; source:
  https://colorlib.com/wp/template/sunshine/). Single page: sticky white
  header with logo + nav, full-bleed hero photo with a rotated brand-colored
  circle carrying the couple's names + date, wedding countdown, "Our Love
  Story" (groom card + timeline + bride card), masonry photo gallery, 3
  program cards, RSVP form card, map + venue info, cream footer.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/sunshine/` (fetched `/tmp/sunshine.html`,
  56,602 bytes) plus stylesheet `css/style.css` (`/tmp/sunshine.css`, 124,156
  bytes) and the TEMPLATES.md screenshot (`sunshine-free-template.jpg`,
  viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** romantic, elegant, soft
  wedding aesthetic. Hero: full-width outdoor couple photo, a
  large semi-transparent terracotta circle centered over the couple with
  "14 Jan 2020", "Anjelina & Jack — Wedding Ceremony" in a cursive script
  font, and "Get Married". Section headings sit under a small floral divider
  image and use uppercase Muli; accents (countdown digits, names, buttons,
  hover states) are warm copper `#C78665`; the countdown sits in a white box
  over a photo band with flower decorations; the RSVP form is a white
  shadowed card; the footer is warm cream `#FFFAF2` with a white copyright
  bar. Placeholder copy throughout the source (Lorem Ipsum) — paraphrase
  freely, keep the same content kinds (date, couple names, ceremony
  programs, venue address).

## Design tokens (from `css/style.css` of the live preview)

- **Brand (copper/terracotta rose):** `#C78665` — `.boxed_btn3` RSVP button
  bg (white text), `.slider_text` circle bg, `.section_title span` (18px),
  `.single_lover_story h3` (36px names), `.single_time_line h3` (24px),
  `.popup_box h3` (36px), `.location_info .location_inner h3` (36px) +
  address span, `.single_countdown h3` digits, nav underline `::before` (2px
  scaleX) + active/hover, footer link hover, `.location_info` phone.
- **Brand hover:** button hover bg `#FAF0F0` with text `#C78665`
  (`.boxed_btn3:hover`).
- **Decorative gold:** `#F2C64D` — `.slider_text:after` outer circle border.
  Slider inner circle border (`.slider_text:before`) reuses `#C78665`.
- **Body text:** `#727272` — paragraphs, nav links (15px Muli), address
  text, form helper copy. Placeholder `#919191`. Footer links `#1F1F1F`
  (15px, `margin: 0 27px`, hover `#C78665`).
- **Backgrounds:** white page; slider overlay white `opacity: 0.2`
  (`.overlay2::before`); `.weding_time_line` box `#FFFAF2` (padding 30px,
  mb 30px); `.footer .footer_top` `#FFFAF2` (padding 73px 0); copyright bar
  `#fff`; RSVP card `.popup_box` white, `padding: 51px 40px 60px`,
  `box-shadow: 0 10px 30px rgba(0,0,0,0.05)`; `.countdown_area .countdown_wrap`
  white (pt 30px, pb 36px, `justify-content: space-evenly`); `.location_inner`
  white 616px card (padding 54px 60px).
- **Fonts:** body/nav/headings `"Muli", sans-serif`; script accents
  `"Petit Formal Script", cursive` (hero date span 18px, hero h3 36px
  lh 46px, countdown digits 60px). Load both via Google Fonts `<link>` in
  `index.html`.
- **Buttons (`.boxed_btn3`):** bg `#C78665`, `padding: 9px 26px`, 20px
  white text, inline-block, 0.5s transition; hover bg `#FAF0F0` +
  text `#C78665`. In the RSVP form it is full-width.
- **Header:** `.main-header-area` padding 0 50px, sticky on scroll
  (`.sticky`: fixed, white bg, `box-shadow: 0 3px 16px rgba(0,0,0,0.1)`,
  logo 120px wide img). Nav links 15px Muli `#727272`, padding
  `38px 23px`, underline `::before` 2px `#C78665` scaleX(0)→1 on
  hover/active.
- **Hero (`.slider_area_inner.slider_bg_1`, 800px):** full-bleed cover photo
  - white 0.2 overlay; `.slider_text` centered circle: `transform:
translate(-50%,-50%) rotate(45deg)`, bg `#C78665`, `padding: 126px 55px`,
    `border-radius: 50%`; inner `.text_inner` counter-rotated -45deg: span
    date (Petit Formal Script 18px white), h3 "Anjelina & Jack<br>Wedding
    Ceremony" (Petit Formal Script 36px white lh 46px), span "Get Married"
    (Muli 16px 600 white). Decorative ring borders via `:before` (`#C78665`)
    and `:after` (`#F2C64D`). On mobile the circle unrotates and shrinks
    (270px, padding 35px 25px) — implement responsive rotation.
- **Countdown (`.weeding_countdown_area`):** flower decorations top/bottom
  (hidden below lg — recreate as decorative lucide/emoji or skip on mobile),
  `.section_title`: flowers divider img + span "14. January. 2020" (18px
  `#C78665`) + h3 "THE. WEDDING. Countdown" (36px Muli 400 uppercase).
  `.counter_bg` photo band; white `.countdown_wrap` with 4
  `.single_countdown` columns: h3 digits (60px Petit Formal Script
  `#C78665`, mb 17px) + span labels "DAYS"/"HOURS"/"MINUTES"/"SECONDS"
  (14px uppercase Muli). Source target date (14 Jan 2020) is in the past —
  use a dynamic future target date (e.g. today + 90 days or a fixed near
  date) and note the deviation in the PR.
- **Love story (`.love_story_area`):** `.section_title` (flowers img + h3
  "Our. Love. Story"). 3 columns: left/right `.single_lover_story
text-center` = `.story_thumb` circular portrait (247×247, radius 50%,
  margin auto) + span label ("Groom"/"Bride", 24px Muli) + h3 name
  ("Jack Wonner"/"Anjelina Kona", 36px `#C78665`) + 16px paragraph (mt 30px,
  mb 20px) + `.social_links` 3 circular icon links (Facebook, Twitter,
  Instagram — lucide). Center `.weding_time_line text-center` (bg
  `#FFFAF2`, padding 30px) with 4 `.single_time_line` items (pt 45px,
  pb 48px): h3 24px `#C78665` ("Fast Meet", "He Proposed", "Love Story",
  "Wedding Day") + 16px paragraph each.
- **Gallery (`.gallery_area`):** `.section_title` (flowers img + h3
  "Gallery. Photos"); full-bleed `container-fluid p-0` masonry grid of 9
  `.single_gallery` cells (410px tall cover images; source Bootstrap column
  spans: 4, 3, 5, 3, 5, 4, 4, 3, 5 of 12 → recreate as a flex/grid row with
  those width ratios, wrapping 2 per row on md, 1 on sm). Each cell is a
  `.popup-image` lightbox anchor (source uses magnific-popup — implement
  with a simple accessible lightbox dialog or an image-open-on-click; note
  the choice in the PR).
- **Program (`.program_details_area`):** `.section_title` (flowers img + h3
  "Program. Details"); 3 `.single_program` cards (col width 4/12, padding
  20px, mb 30px, cover bg photo) each wrapping `.program_inner` white panel
  (padding 57px 30px, text-center): time ("16.00" / "20.00" / "22.00") +
  h3 ("Wedding Ceremony" / "Lunch Time" / "WeParty Time") + lorem paragraph.
- **RSVP (`.attending_area`, pt 95px, pb 280px):** decorative flower
  illustrations top-left/bottom-right of `.main_attending_area` (skip or
  simplify on mobile); centered `.popup_box` white card (51px 40px 60px,
  shadow) with `.form_heading`: h3 "Are You Attending?" (36px `#C78665`) +
  p "Kindly respond before 30 August" (15px `#727272`, mb 34px). Form
  fields: text "Your Name", text "Email", select guests ("1 Guest" default,
  source shows a nice-select dropdown — use a native styled select), textarea
  "Additional Message" (120px), submit `.boxed_btn3` "R.S.V.P" (full width).
  Inputs: 50px high, `border: 1px solid #ddd`, padding 15px, mb 20px,
  placeholder `#919191`, no focus outline. Form has no backend — validate
  name + email client-side, show success state on submit (note in PR).
- **Location (`.location_area`, padding 0 50px, relative):** full-width
  Google Maps embed (source iframe; recreate with an OpenStreetMap or
  Google Maps embed iframe without API key, or a styled static map
  placeholder — note in PR) + `.location_info` white card (616px,
  `padding: 54px 60px`, absolutely centered at the bottom): `.location_top`
  h3 "Location" (36px `#C78665`) + p "Mas Montagnette, 19 West 21th Str." +
  "+1 843-853-1810" (`#C78665` span); `.address_info` two columns:
  "Where to stay" (h4, 16px 600 `#C78665`) with "4:00p – 12:00p / The
  Secret Shrine Club", and "Activities" (h4) with the same times/venue.
- **Footer:** `.footer_top` bg `#FFFAF2`, `padding: 73px 0`, centered
  `.quick_links` (Home, Our Story, Gallery, Accommodation, Contact — 15px
  `#1F1F1F`, margin 0 27px, hover `#C78665`); `.copy-right_text` white bar
  (pb 30px): "Copyright © <year> All rights reserved | This template is made
  with ♥ by Component Dock" — "Component Dock" MUST link
  https://www.componentdock.com/ (replacing the source's Colorlib credit).

## Requirements

### Requirement: Header and navbar

The system SHALL render a white header (padding 0 50px) with the brand logo
on the left (recreated wordmark/logo for "Knot" — no image asset copy)
and a right-aligned nav with links Home, Our Story, Gallery, Blog, Pages,
Contact (15px Muli, `#727272`, padding 38px 23px; hover/active shows a 2px
`#C78665` underline that scales in). When the page is scrolled, the header
SHALL become sticky/fixed with a white background and `box-shadow: 0 3px
16px rgba(0,0,0,0.1)`. Blog and Pages SHALL show dropdown menus on hover
(white panel, 14px links, hover `#C78665`). On mobile a hamburger SHALL open
a responsive menu with the same links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand logo and the nav links Home / Our Story /
  Gallery / Blog / Pages / Contact

#### Scenario: Sticky header on scroll

- **GIVEN** the page is at the top
- **WHEN** the page is scrolled down
- **THEN** the header becomes fixed with a white background and a subtle
  drop shadow

#### Scenario: Nav link hover underline

- **GIVEN** the header is rendered
- **WHEN** a nav link is hovered
- **THEN** a 2px brand-colored underline animates in beneath it

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a responsive menu with the nav links is shown and the close
  control dismisses it

### Requirement: Hero section

The system SHALL render an ~800px-tall full-bleed hero with a cover photo
(placeholder), a white overlay at 0.2 opacity, and a centered circular badge
(rotated 45°, background brand `#C78665`, decorative circular borders in
`#C78665` and gold `#F2C64D`) containing counter-rotated content: a date
line "14 Jan 2020" (Petit Formal Script 18px white), a headline "Anjelina &
Jack — Wedding Ceremony" (Petit Formal Script 36px white), and a "Get
Married" span (Muli 16px 600 white). On mobile the badge SHALL unrotate,
shrink to ~270px, and stay centered.

#### Scenario: Hero badge content

- **GIVEN** the hero is rendered
- **WHEN** the badge is inspected
- **THEN** it shows the date, the couple's names with "Wedding Ceremony",
  and a "Get Married" call-to-action inside the brand-colored circle

#### Scenario: Responsive hero badge

- **GIVEN** a mobile viewport
- **WHEN** the hero is inspected
- **THEN** the circular badge is unrotated and sized to fit the viewport
  while keeping all its content visible

### Requirement: Wedding countdown

The system SHALL render a countdown section: a floral divider + section
title "THE. WEDDING. Countdown" with a date span "14. January. 2020"
(brand color), over a photo band containing a white box with four columns
DAYS / HOURS / MINUTES / SECONDS — each with a live 60px Petit Formal Script
brand-colored digit value and a 14px uppercase label. The countdown SHALL
tick down to a future target date (dynamic, e.g. today + 90 days; the
source date is in the past).

#### Scenario: Countdown renders four units

- **GIVEN** the countdown section is rendered
- **WHEN** it is inspected
- **THEN** it shows four columns labeled DAYS, HOURS, MINUTES, SECONDS with
  brand-colored numeric values

#### Scenario: Countdown ticks

- **GIVEN** the countdown has a future target
- **WHEN** a second passes
- **THEN** the displayed values decrement according to real elapsed time

### Requirement: Love story

The system SHALL render a three-column love-story section: a groom card
(circular portrait, "Groom" label, name "Jack Wonner" in 36px brand color,
16px paragraph, three circular social icon links), a center timeline box
(background `#FFFAF2`) with four steps — "Fast Meet", "He Proposed", "Love
Story", "Wedding Day" (24px brand-colored headings with paragraphs), and a
mirrored bride card (label "Bride", name "Anjelina Kona", same layout).
Names/photos are placeholder copy — paraphrase freely.

#### Scenario: Couple cards

- **GIVEN** the love story section is rendered
- **WHEN** it is inspected
- **THEN** it shows a groom card and a bride card, each with a circular
  portrait, a label, a brand-colored name, a paragraph, and three social
  icon links

#### Scenario: Timeline steps

- **GIVEN** the love story section is rendered
- **WHEN** the center column is inspected
- **THEN** it shows four timeline steps titled Fast Meet, He Proposed, Love
  Story, and Wedding Day

### Requirement: Photo gallery

The system SHALL render a masonry-style gallery ("Gallery. Photos") of 9
cover-photo cells (410px tall, placeholder images) arranged with the source
width ratios (4, 3, 5, 3, 5, 4, 4, 3, 5 / 12), wrapping responsively (2 per
row on md, 1 on sm). Each cell SHALL open the photo in a simple accessible
lightbox when clicked.

#### Scenario: Gallery grid

- **GIVEN** the gallery section is rendered
- **WHEN** it is inspected
- **THEN** it shows a floral divider title "Gallery. Photos" and 9
  photo cells in the masonry arrangement

#### Scenario: Lightbox

- **GIVEN** a gallery cell is rendered
- **WHEN** the cell is activated
- **THEN** an accessible lightbox shows the enlarged photo and can be
  dismissed

### Requirement: Program details

The system SHALL render a "Program. Details" section with three equal-width
cards, each a cover photo panel wrapping a white inner panel (padding
57px 30px) with a time ("16.00", "20.00", "22.00"), a brand-styled heading
("Wedding Ceremony", "Lunch Time", "WeParty Time"), and a short paragraph.

#### Scenario: Program cards

- **GIVEN** the program section is rendered
- **WHEN** it is inspected
- **THEN** it shows three cards: 16.00 Wedding Ceremony, 20.00 Lunch Time,
  and 22.00 WeParty Time, each with a paragraph on a white inner panel

### Requirement: RSVP form

The system SHALL render an "Are You Attending?" section (subtext "Kindly
respond before 30 August") with a white shadowed card containing a form:
text input "Your Name", text input "Email", a guest-count select (default
"1 Guest"), a textarea "Additional Message", and a full-width brand "R.S.V.P"
button (bg `#C78665`, hover `#FAF0F0`/`#C78665`). Inputs SHALL be 50px high
with 1px `#ddd` borders, `#919191` placeholders. Submitting with an empty
name or invalid email SHALL be blocked with a validation message; a valid
submission SHALL show a success state (no backend).

#### Scenario: Form fields

- **GIVEN** the RSVP section is rendered
- **WHEN** the form is inspected
- **THEN** it shows the name and email inputs, the guest-count select, the
  message textarea, and the R.S.V.P button

#### Scenario: Validation

- **GIVEN** the RSVP form is rendered
- **WHEN** R.S.V.P is activated with an empty name or invalid email
- **THEN** submission is blocked and per-field validation errors are shown

#### Scenario: Successful RSVP

- **GIVEN** the RSVP form is rendered
- **WHEN** valid name and email are provided and R.S.V.P is activated
- **THEN** a success confirmation is shown in place of the form

### Requirement: Location

The system SHALL render a full-width map (embedded iframe or static map
placeholder — no API key) with a white venue card (616px, centered at the
bottom) containing the "Location" heading (36px brand), the venue line
"Mas Montagnette, 19 West 21th Str.", a brand-colored phone line
"+1 843-853-1810", and two address columns: "Where to stay" and "Activities"
(each with "4:00p – 12:00p / The Secret Shrine Club").

#### Scenario: Venue card

- **GIVEN** the location section is rendered
- **WHEN** the card is inspected
- **THEN** it shows the Location heading, venue address, phone, and the
  Where to stay / Activities details

### Requirement: Footer

The system SHALL render a cream footer (background `#FFFAF2`) with centered
quick links (Home, Our Story, Gallery, Accommodation, Contact — dark 15px
text, brand hover) and a white copyright bar reading "Copyright © <year>
All rights reserved | This template is made with ♥ by Component Dock" where
"Component Dock" links https://www.componentdock.com/ (replacing the
source's Colorlib credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the five quick links and a copyright line containing a
  link to https://www.componentdock.com/

## Verification checklist

- [ ] `openspec/specs/template-knot/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/knot`, package `@free-react-templates/knot`, no
      ColorLib references in app code (grep for colorlib/Sunshine in apps/knot)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh knot`
- [ ] Section order matches the source: header → hero → countdown → love
      story → gallery → program → RSVP → location → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #C78665`,
      `--color-brand-hover: #FAF0F0`, `--color-gold: #F2C64D`,
      `--color-body: #727272`, `--color-ink: #1F1F1F`,
      `--color-cream: #FFFAF2`, `--color-placeholder: #919191`; Muli +
      Petit Formal Script Google Fonts links in `index.html`
- [ ] Hero: 800px, cover photo, white 0.2 overlay, rotated `#C78665` circle
      with counter-rotated date/names/"Get Married", `#C78665` + `#F2C64D`
      ring borders; unrotates on mobile
- [ ] Countdown: 4 units (DAYS/HOURS/MINUTES/SECONDS), 60px Petit Formal
      Script brand digits, white wrap over photo band, flowers divider +
      "THE. WEDDING. Countdown" title with "14. January. 2020" span
- [ ] Love story: groom/bride circular portraits + social icons, `#FFFAF2`
      timeline box with 4 steps (Fast Meet / He Proposed / Love Story /
      Wedding Day)
- [ ] Gallery: 9 cells, 410px, width ratios 4/3/5/3/5/4/4/3/5, lightbox
- [ ] Program: 3 cards (16.00 / 20.00 / 22.00), white inner panels
- [ ] RSVP: white shadowed card, name/email/guests/message + full-width
      brand R.S.V.P button, client-side validation + success state
- [ ] Location: map embed + white 616px venue card (Location, address,
      phone, Where to stay / Activities)
- [ ] Footer: `#FFFAF2` quick links + white copyright bar with Component
      Dock link
- [ ] Placeholder images via `https://picsum.photos/seed/knot-<n>/<w>/<h>`;
      icons from `lucide-react`
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, countdown target date, RSVP no backend +
      validation, map embed choice, lightbox choice)
