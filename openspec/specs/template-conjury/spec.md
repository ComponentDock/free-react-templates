# Template: Conjury (Hotel Booking Wizard)

## Purpose

Conjury is a hotel reservation wizard in the free-react-templates monorepo. It
is an original React recreation of the ColorLib free "Colorlib Wizard 2"
template design (see TEMPLATES.md line 857; `grep -c
'wp/template/colorlib-wizard-2/'` = 1), built under a DIFFERENT name
(Conjury — a single lowercase word, noun form of "conjure", continuing the
spell-themed naming series already used for the other wizard recreations:
Conjure, Banish, Dispel, Abjure, Bewitch, Enthrall, Spellbind, Beguile,
Mesmerize, Incant, Stepwise; no collision with `apps/` or existing spec
folders) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-2/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-2.jpg).
Category: Wizard — one of the 30 ColorLib "Wizard" mini-templates.

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-2/ — **404**
(the wizard mini-template demos have no preview.colorlib.com mirror). The real
demo lives at https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
(HTTP 200, ~12.5 KB HTML, `<title>FormWizard_v2</title>`, `css/style.css`
~10.3 KB parsed for tokens, `js/main.js` for behavior). The screenshot in
TEMPLATES.md (`colorlib-free-wizard-2.jpg`, 1200×972, viewed in the browser)
matches the demo 1:1. Stack is jQuery + jquery.steps — recreate all wizard
behavior client-side in React (no jQuery).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 2" — a single-page, 4-step hotel
  reservation wizard. The page is a full-viewport warm-peach photo gradient
  background (`form-wizard-bg.jpg`, fallback `#f9f6f1`), with one centered
  909px-wide card. The card's top is a wide hotel-room banner photo
  (`form-wizard.jpg`, 909×316) with the page title "YOUR RESERVATION" overlaid
  dead-center in a white-outlined translucent box (Bitter 30px uppercase,
  white text on a 1px `rgba(255,255,255,0.5)` border, padding 9px 23px,
  letter-spacing 0.3px). Below the banner, the wizard body is a solid deep
  navy panel (`form-content-bg.png` tile = flat `#012353` with a barely
  visible geometric line pattern — recreate as solid `#012353`) containing a
  vertical 4-step sidebar on the left (26% width, separated from the content
  area by a 3px `rgba(242,242,242,0.4)` left border and 68px gutter) and the
  active step's content on the right. All wizard text is white on the navy.
  All input controls are underline-style (transparent background, `1px solid
#5d718e` bottom border, 34px tall, 14px white text, placeholder/label
  floating inline as a suffix like "Check in :" at the field's left, chevron
  or calendar icon at the right). Custom dropdowns open a white popup
  (`border 1px solid #81acee`, dark grey `#999` text, hover row `#81acee` bg
  with white text). Buttons are gold pill shapes (`#edc948` bg,
  `border-radius 21px`, 42px tall × 164px wide, Poppins-Medium 14px
  uppercase, dark navy `#012353` text, hover `#d4b43f`) with an arrow icon
  after the label. Steps 2 and 4 additionally use a white summary "board"
  (`bg #fff`, navy `#012353` text) on the left half and a form/bill area on
  the right half. The 4 steps: **Choose Date** (dates + stay options →
  "Book now"), **Choose Room** (stay summary board + room/guest selects →
  "Book now"), **Make a Reservation** (guest contact form + terms checkbox →
  "Book by email"), **Confirmation** (stay recap + itemized bill with prices,
  VAT and total, payment radio choices → "Confirmation" button).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
  (HTTP 200, ~12.5 KB HTML; `css/style.css` ~10.3 KB parsed). Structure:
  `div.wrapper > div.inner > div.image-holder (img.form-wizard.jpg + h3 "Your
reservation") + div#wizard` where `#wizard` is jquery.steps with `headerTag
h4` + `bodyTag section`; jquery.steps generates the `.steps` vertical tab
  list (numbered "1. Choose Date" … "4. Confirmation"), and the four `h4` +
  `section` pairs are the step contents. `js/main.js` config:
  `transitionEffect: "fade"` (500ms), `enableAllSteps: true` (all steps
  clickable), `enablePagination: false` (no auto Previous/Next — each step
  carries its own custom `.forward` button that calls `steps('next')`), and
  all four datepickers initialize to today's date. Custom dropdowns: clicking
  the `.select-control` toggles the `.dropdown`; clicking an option sets its
  `rel` text on the control. There is NO form validation in the original, and
  the final "Confirmation" button has no click handler (dead end) — the
  recreation should add lightweight required-field handling on step 3 and a
  success state on final submit as a documented improvement. Icons come from
  Linearicons (`lnr-chevron-down`, `lnr-calendar-full`) and Material Design
  Iconic Font (`zmdi-long-arrow-right`, checkbox glyph `\f26b`) — recreate
  with `lucide-react` (`ChevronDown`, `Calendar`, `ArrowRight`, `Check`).
- **Screenshot note:** `colorlib-free-wizard-2.jpg` (1200×972, viewed in the
  browser): browser-window preview on a soft peach/rose gradient; centered
  card with a luxury hotel bedroom photo on top (white bed, sofa, ocean
  view) and "YOUR RESERVATION" in a thin-outlined white box over its center;
  below it a solid deep-navy panel with the vertical step list (step 1
  "1. Choose Date" gold, the rest white), underline dropdown fields with
  "Check in :"/"Check out :" suffix labels showing dates, and a gold pill
  "BOOK NOW →" button. The screenshot is the same design as the live demo.

### Design tokens (from css/style.css + sampled images)

- **Page background:** full-bleed warm-peach gradient photo
  (`form-wizard-bg.jpg`, 1400×939 — sampled dominant `#fed6b3` → `#fec7a0`,
  corners toward dusty rose `#d39076`; CSS fallback `#f9f6f1` cream).
  Recreate as a CSS gradient approximating the photo:
  `bg-gradient-to-br from-[#fed6b3] via-[#fec7a0] to-[#f6b08a]` over a
  `#f9f6f1` base, full viewport min-height, flex-centered.
- **Wizard card:** width 909px (`max-w-[909px]`); body panel solid deep navy
  **`#012353`** (texture tile sampled flat — the pattern is invisible at
  scale), padding ~62px 60px 58px 62px (recreate `p-10 md:p-14`); banner
  image on top full card width with the overlay title.
- **Brand gold:** **`#edc948`** — active step text + 3px left bar, all
  buttons, bill prices, terms-and-conditions link; hover **`#d4b43f`**.
- **Navy:** **`#012353`** — wizard panel bg, button text, board (summary)
  text on white, datepicker/board accents.
- **Slate blue:** **`#5d718e`** — 1px bottom borders of inputs/selects, bill
  row separator borders.
- **Light blue:** **`#81acee`** — custom dropdown popup border + hover row
  bg (white text on hover).
- **White:** **`#ffffff`** — body text on navy, input text, placeholders,
  bill text and border (1px), checkbox/radio outlines, board bg.
- **Greys:** `#999` — dropdown option text; `#e6e6e6` — input focus bottom
  border; `rgba(242,242,242,0.4)` — steps rail border.
- **Typography:** "Poppins" 400 (body 15px, white) and 500/Medium (step
  links 15px, buttons 14px uppercase, prices), plus "Bitter" 400 for the
  banner title (30px uppercase, letter-spacing 0.3px) — all via Google Fonts
  `<link>` in `index.html` (the source ships ttfs; do not copy font files).
- **Buttons:** pill `rounded-full` (source `border-radius: 21px`), 42px
  tall × 164px (step 3/4 buttons override to 195px), gold bg, navy uppercase
  Medium text, arrow icon at right (`margin-left: 10px`), centered under the
  form content, `margin-top` ~44–50px, hover darkens to `#d4b43f`.
- **Inputs/selects:** underline style only — transparent bg, `border-bottom:
1px solid #5d718e`, height 34px, 14px white text, zero horizontal padding;
  date fields get left padding (85–96px) so the inline suffix label
  ("Check in :") positioned at the field's left (bottom-anchored, 14px) does
  not overlap the value; decor icons (chevron/calendar) fixed at bottom-right
  of the field (10–12px); focus underline turns `#e6e6e6`. Labels above
  select groups are 14px.
- **Radii:** buttons only (pill). No border radius on the card, banner,
  boards or bill — keep corners square.
- **Layout:** sidebar `width: 26.05%` + 68px gutter, content `width:
73.95%`; vertical steps list with `border-left: 3px solid
rgba(242,242,242,0.4)`, each step link 31px tall with 18px left padding,
  16px gap between steps; active step gold with a full-height 3px gold bar
  flush at `left: -3px`. Steps 2/4 use a 2-column split (`flex`):
  `.board-wrapper` 50% (margin-right 30px) + `.form-wrapper`/`.pay-wrapper`
  50%. `.board-inner`: white bg, navy 14px text, padding 22px 33px 13px 21px,
  8px row gaps, label/span pairs (e.g. "Room 1 : Small Room"). `.bill`:
  `border: 1px solid #fff`, padding 18px 20px 11px, rows `space-between`,
  prices gold Medium; cells separated by `1px solid #5d718e`; VAT row; total
  price 17px; "20% Deposit" row (12px note + 14px sub-line "Pay the rest on
  arrival") shown under the payment radios.
- **Checkbox (terms):** custom 14×15 box, 1px white border, white check glyph
  when checked; label 14px with gold link "terms and conditions.".
- **Payment radios (Confirmation):** custom 12px circle, 1px white border,
  4px white dot when checked; label 12px; "Full Payment" checked by default;
  radios laid out in one row (space-between).

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport warm-peach gradient page with a
single centered card containing the banner and the wizard.

#### Scenario: Wizard page renders

- **GIVEN** the user opens the template
- **THEN** the page background SHALL be a warm-peach gradient
  (`#fed6b3` → `#fec7a0` → `#f6b08a` tones over a `#f9f6f1` base) covering
  the full viewport
- **AND** a single centered card (max-width 909px) SHALL be visible with a
  hotel banner photo strip on top and a deep navy `#012353` wizard panel
  below it
- **AND** all wizard text SHALL be white except explicitly styled accents

### Requirement: Banner header

The system SHALL render the banner photo with the page title overlaid at its
center.

#### Scenario: Banner title overlays the photo

- **GIVEN** the card is rendered
- **THEN** the banner area SHALL show a hotel-room photo spanning the card
  width (placeholder image, see below)
- **AND** the title "YOUR RESERVATION" SHALL be centered over the photo in
  Bitter 30px uppercase white
- **AND** the title SHALL sit inside a translucent white-bordered box
  (`1px solid rgba(255,255,255,0.5)`, padding ~9px 23px, letter-spacing
  0.3px)

### Requirement: Step navigation

The system SHALL render the numbered vertical step list on the left of the
navy panel, with the active step highlighted in gold, and SHALL let the user
jump to any step.

#### Scenario: Step list shows all four steps with the first active

- **GIVEN** the wizard is rendered
- **THEN** the sidebar SHALL list "1. Choose Date", "2. Choose Room",
  "3. Make a Reservation" and "4. Confirmation" in order
- **AND** the list SHALL have a 3px `rgba(242,242,242,0.4)` left rail
- **AND** the active step's text SHALL be gold `#edc948` with a 3px gold bar
  on the rail at its left
- **AND** the inactive step texts SHALL be white
- **AND** the first step SHALL be active on load

#### Scenario: Steps navigate the wizard

- **GIVEN** the step list is rendered
- **WHEN** the user clicks any step number/title
- **THEN** the wizard SHALL switch to that step
- **AND** the clicked step SHALL become active with gold styling and
  `aria-current` set
- **AND** the step content SHALL fade in

### Requirement: Step 1 — Choose Date

The system SHALL render the first step with check-in/check-out date fields
and stay option selects plus a Book now button.

#### Scenario: Choose Date step shows the stay fields

- **GIVEN** the wizard is on the "Choose Date" step
- **THEN** the content SHALL show "Check in" and "Check out" date fields
  side by side, each with an inline suffix label ("Check in :" / "Check
  out :"), a calendar icon at the field's right, and today's date prefilled
- **AND** SHALL show "Duration" and "Room" custom dropdowns side by side
  below them
- **AND** the Duration dropdown SHALL offer "1 Night" through "5 Nights"
- **AND** the Room dropdown SHALL offer "1 Room" through "5 Rooms"
- **AND** a gold pill "BOOK NOW" button with a right-arrow icon SHALL be
  centered below the fields

#### Scenario: Date fields open a date picker

- **GIVEN** the user is on the "Choose Date" step
- **WHEN** the user clicks a date field
- **THEN** a date picker SHALL open
- **WHEN** the user picks a date
- **THEN** the field SHALL display the date as "dd - m - yyyy" (e.g.
  "18 - 8 - 2026")
- **AND** the picker SHALL close

#### Scenario: Book now advances to Choose Room

- **GIVEN** the user has set the stay options
- **WHEN** the user clicks "BOOK NOW"
- **THEN** the wizard SHALL advance to the "Choose Room" step

### Requirement: Step 2 — Choose Room

The system SHALL render the second step as a stay-summary board plus
per-room guest-count selects, and SHALL persist the chosen dates.

#### Scenario: Choose Room shows the summary board and guest selects

- **GIVEN** the wizard is on the "Choose Room" step
- **THEN** the content SHALL show a white summary board on the left with
  "Room 1 : Small Room", "Room 2 : Luxury Room", and a line with "Adult : 2"
  and "Children : 0"
- **AND** the content SHALL show on the right two date fields (same values
  chosen on step 1) and two labeled groups "Room 1 :" and "Room 2 :", each
  with an "Adults" select ("1 Adult"/"2 Adults"/"3 Adults") and a "Children"
  select ("No Child"/"1 Child"/"2 Children"/"3 Children")
- **AND** a gold pill "BOOK NOW" button SHALL be centered below

#### Scenario: Room assignments persist on the summary

- **GIVEN** the user changes an adult or child count
- **WHEN** the user advances to later steps
- **THEN** the updated guest counts SHALL be reflected in the Confirmation
  step's bill

### Requirement: Step 3 — Make a Reservation

The system SHALL render the contact form with a terms checkbox and SHALL
complete the booking on submit.

#### Scenario: Reservation form collects guest details

- **GIVEN** the wizard is on the "Make a Reservation" step
- **THEN** the content SHALL show "First Name", "Last Name", "Phone" and
  "Mail" fields in two rows, a full-width "Address" field, and a full-width
  "Special Requirements" textarea (placeholder text at 14px white)
- **AND** SHALL show a custom checkbox "I have read and accept the terms
  and conditions." with the link in gold
- **AND** a wider gold pill "BOOK BY EMAIL" button (195px) SHALL be centered
  below

#### Scenario: Booking requires the terms checkbox

- **GIVEN** the user is on the "Make a Reservation" step
- **WHEN** the user clicks "BOOK BY EMAIL" without ticking the terms checkbox
- **THEN** a clear inline prompt SHALL appear asking to accept the terms
- **AND** the wizard SHALL stay on the step
- **WHEN** the user ticks the checkbox and clicks "BOOK BY EMAIL"
- **THEN** the wizard SHALL advance to the "Confirmation" step
  (recreation improvement: the original button is a UI dead end with no
  handler — see Design reference)

### Requirement: Step 4 — Confirmation

The system SHALL render the final step as a stay recap, an itemized bill
with payment options, and a final submit action with a success state.

#### Scenario: Confirmation shows the stay recap and bill

- **GIVEN** the wizard is on the "Confirmation" step
- **THEN** the content SHALL show a white board on the left with "Check In"
  and "Check Out" listing the dates chosen on step 1
- **AND** SHALL show on the right an itemized bill (white 1px border) with
  "Room 1 : Small Room — $34", "Adult : 2" / "Children : 0", "Room 2 :
  Luxury Room — $23", "Adult : 4" / "Children : 1", "Rooms & Services :
  $80", "Vat 8% : $08" and "Total Price : $88" — all prices in gold
- **AND** SHALL show payment radios "Full Payment" (checked by default) and
  "10% Deposit"
- **AND** SHALL show a "20% Deposit — Pay the rest on arrival — $78" row
  beneath the radios (visible under the deposit option)
- **AND** SHALL show a gold pill "CONFIRMATION" button (195px) centered below

#### Scenario: Final confirmation completes the booking

- **GIVEN** the user is on the "Confirmation" step
- **WHEN** the user clicks the "CONFIRMATION" button
- **THEN** a success state SHALL be shown confirming the reservation
  (recreation improvement: the original button has no click handler)

### Requirement: Custom dropdowns

The system SHALL render selects as custom dropdowns that open a popup list
and update the control on selection.

#### Scenario: Dropdown opens, selects and closes

- **GIVEN** a custom dropdown is rendered on the navy panel
- **WHEN** the user clicks the dropdown control
- **THEN** a white popup SHALL open beneath it (`border 1px solid #81acee`,
  `#999` text) listing the options
- **WHEN** the user clicks an option
- **THEN** the control SHALL display the selected option's text
- **AND** the popup SHALL close
- **AND** the selected option SHALL be announced to screen readers (aria)

### Requirement: Accessibility

The system SHALL be keyboard and screen-reader accessible.

#### Scenario: Wizard is accessible

- **GIVEN** the wizard is rendered
- **THEN** every input, select, checkbox, radio and textarea SHALL have an
  associated accessible name (visible suffix label or `aria-label`)
- **AND** the step list SHALL be a semantic tablist/landmark with
  `aria-current` on the active step
- **AND** icon-only controls (chevron/calendar glyphs) SHALL be decorative
  (`aria-hidden`) or carry aria-labels
- **AND** buttons SHALL have visible focus rings and keyboard activation
- **AND** the terms link SHALL be keyboard-focusable

### Requirement: Responsive layout

The system SHALL adapt to small screens.

#### Scenario: Wizard adapts to narrow viewports

- **GIVEN** the viewport is narrower than 768px
- **THEN** the wizard SHALL switch to a single column with the step sidebar
  on top of the content (full width)
- **AND** the two-column field rows SHALL stack into one column
- **AND** the summary board, form and bill areas SHALL stack vertically
- **AND** the card SHALL fit the viewport width with small padding
  (page padding collapses to ~20px)

## Verification checklist

- [ ] Warm-peach gradient full-viewport background; centered 909px card.
- [ ] Banner photo with centered "YOUR RESERVATION" in an outlined white box.
- [ ] Deep navy `#012353` wizard panel with 4-step vertical sidebar (gold
      active step + 3px gold bar; white inactive steps).
- [ ] Step 1: check-in/check-out date fields (suffix labels, calendar icons,
      today's date), Duration 1–5 Nights and Room 1–5 Rooms dropdowns,
      gold pill "BOOK NOW".
- [ ] Step 2: white summary board (Room 1 Small Room / Room 2 Luxury Room /
      Adult 2 / Children 0) + two date fields + Room 1 & Room 2 adult/child
      selects, "BOOK NOW".
- [ ] Step 3: First/Last name, Phone, Mail, Address, Special Requirements
      textarea, terms checkbox with gold link, "BOOK BY EMAIL" — terms
      required before advancing.
- [ ] Step 4: recap board (Check In/Out), itemized bill ($34/$23/$80/VAT
      $8/Total $88, gold prices), Full Payment vs 10% Deposit radios, 20%
      Deposit row, "CONFIRMATION" → success state.
- [ ] Custom dropdowns open white popups (`#81acee` border/hover), update
      control text, close on selection (and on outside click).
- [ ] Poppins (400/500) + Bitter (400) via Google Fonts; tokens in `@theme`
      (`brand` = `#edc948`, `navy` = `#012353`, `slate` = `#5d718e`).
- [ ] Icons via lucide-react (ChevronDown, Calendar, ArrowRight, Check) — no
      external icon fonts, no copied images (picsum placeholder for the
      banner, e.g. `https://picsum.photos/seed/conjury-banner/909/316`).
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
- [ ] No ColorLib references in app code; provenance only in this spec,
      TEMPLATES.md and the PR.
- [ ] No asset copies from the source; placeholders via picsum seeds.
