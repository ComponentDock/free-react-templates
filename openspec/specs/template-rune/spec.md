# Template: Rune (Bootstrap Wizards — Multi-step Travel Booking)

## Purpose

Rune is a multi-step travel-booking wizard in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Colorlib Wizard 22"
template design (see TEMPLATES.md line 860; source slug
`wp/template/colorlib-wizard-22/`), built under a DIFFERENT name (Rune — a
single lowercase word evoking the wizard/magic naming theme of the sibling
wizard preps: Conjure, Conjury, Banish, Dispel, Abjure, Bewitch, Enthrall,
Spellbind, Beguile, Mesmerize, Incant, Stepwise, Enchant, Grimoire; no
collision with `apps/` or existing spec folders) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-22/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-22.jpg).
Category: Bootstrap Wizards — one of the 30 ColorLib "Wizard" mini-templates.

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-22/ — **404**
(known wizard-family pattern — do NOT re-probe the naive URL; same hosting as
Grimoire/Enchant preps). The real demo lives at
https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html (HTTP 200,
~5.3 KB HTML, `<title>Wizard-v2</title>`, `css/style.css` ~9.0 KB parsed for
tokens, `js/main.js` ~1.3 KB). The screenshot in TEMPLATES.md
(`colorlib-free-wizard-22.jpg`, 1200×972, analyzed in the browser) matches
the demo.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 22" — a single-page three-step
  travel-booking wizard (personal details → travel details → confirmation).
  The whole page is one white card (`993px` wide, radius 10px, shadow
  `0 8px 20px rgba(0,0,0,.15)`, vertical margin 180px) floating on the same
  full-bleed mesh-gradient background image as wizard-21 (`images/wizard-v2-bg.jpg`,
  1400×939, cover). Sampled stops: top-left `#8778ef`, top-right `#c088d3`,
  center `#e08f7e`, bottom-left `#f3e29c`, bottom-right `#e69c77` (recreate
  in CSS — no image asset copied). The card splits vertically: a left
  **image panel** (66.61% of card width, empty div, background photo of a
  Japan street scene — wooden buildings, stone-paved street, figure with a
  traditional umbrella) and the form panel on the right. Stack is jQuery +
  jquery.steps + jQuery UI datepicker, NOT Tailwind. All interactivity must
  be recreated client-side in React (no jQuery).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html
  (HTTP 200; `css/style.css` ~9.0 KB; `js/main.js` ~1.3 KB). Structure:
  `div.page-content` (bg image, flex-centered) > `div.wizard-v2-content`
  (white card, flex row) > `div.wizard-image` (empty, bg photo) + `div.wizard-form`
  > header (`h3` "Form Wizard" + `p` "Nostrud exercitation commodo consequat.")
  > `form.form-register` > `div#form-total` with three `h2` + `section` pairs
  > (jquery-steps turns each into a step). Steps: (1) First Name + Last Name
  > (side-by-side) and Phone Number + Email (side-by-side) — placeholder-only
  > fields, NO labels; (2) Travel Location select (full-width) + chevron,
  > Date input (jQuery UI datepicker + chevron trigger) + Time select
  > (side-by-side); (3) summary `<table>` with rows Full Name / Phone / Email /
  > Travel Location / Date / Time, pre-filled with demo defaults (Benjamin
  > Harrison / +1 888-999-2222 / hello@example-ish.org / Tokyo Japan /
  > 15 Jan, 2018 / 7:00am - 18:00pm). `.actions` bar carries Previous (hidden
  > entirely by CSS — `li:first-child { display: none }`) and Next Step/Submit
  > (160×50px blue rectangle). Icons are Material Design Iconic Font glyphs
  > (zmdi-chevron-down on selects and the date trigger) — recreate with
  > lucide-react.
- **Screenshot note:** `colorlib-free-wizard-22.jpg` (1200×972, viewed in the
  browser): full-screen purple/blue → warm yellow/orange mesh gradient; white
  rounded card centered; left half is the Japan-street photo panel; right half
  shows the "Form Wizard" heading, three step circles (step 1 solid blue with
  white "1", steps 2–3 grey), four bordered inputs in a 2×2 grid (First Name,
  Last Name, Phone Number, Email), and a blue rectangular "Next Step" button.
  The live demo matches the screenshot (gradient image + identical card).

### Design tokens (from css/style.css + image sampling)

- **Background:** full-bleed mesh gradient (was a JPEG in the source; recreate
  in CSS — same gradient family as Grimoire: `#8778ef` → `#c088d3` →
  `#e08f7e` → `#f3e29c` → `#e69c77`; e.g.
  `bg-[linear-gradient(135deg,#8778ef,#c088d3_35%,#e08f7e_60%,#f3e29c_85%,#e69c77)]`).
- **Surface:** white card `#fff`, max-width 993px, `border-radius: 10px`,
  shadow `0 8px 20px rgba(0,0,0,0.15)`, margin 180px 0, flex row.
- **Brand blue:** `#56a3f2` (active/done step circles + Next/Submit button),
  hover `#4582bf`.
- **Left image panel:** 66.61% of card width, `border-top-left-radius: 10px`
  - `border-bottom-left-radius: 10px`, cover photo (Japan street scene in
    source; use a picsum portrait image screened for a street/travel subject —
    verified travel IDs 1036/1055/1015 are safe fallbacks), hidden ≤575px.
- **Form panel:** width 100%, padding 40px 73px 40px 52px (40px all around
  ≤1199px, 40px 20px ≤575px).
- **Header:** h3 "Form Wizard" `#333` 36px w800; subtitle `#666` 16px w600,
  margin 6px 0 26px.
- **Step progress:** 45px circles (NOT 50px like wizard-21), radius 50%;
  inactive `#ccc`; current+done `#56a3f2`; white number 18px w600 inside
  (the step's h2 text — "1"/"2"/"3"); connector pseudo-element 30px × 2px
  `#e5e5e5` to the right of each circle except the last; circles spaced by
  30px margin-right. Circles are CLICKABLE links (jquery-steps
  `enableAllSteps: true` — direct jump navigation, no validation gate).
- **Inputs/selects:** w-full, padding 14px 15px, border 1px solid `#e5e5e5`,
  radius 5px, font 16px, color `#333` w600, placeholder `#666` 16px; selects
  color `#666` with transparent background and an absolutely-positioned
  chevron (`.select-btn`, right 6–12%, top ~27%, 19px, `#666`).
- **Date input:** styled like other inputs; chevron trigger button pinned
  right 10.5% / top 27.5% (source: jQuery UI datepicker, `dateFormat:
"MM - DD - yy"`, placeholder "15 / Jan / 2018").
- **Summary table:** wrapper 1px `#e5e5e5` border, radius 5px, padding
  22px 26px 16px, margin-bottom 35px; label cells `#666` 15px w600; value
  cells `#333` 18px w700; 18px row spacing.
- **Actions:** square button 160×50px, radius 5px, `#56a3f2` (hover
  `#4582bf`), white text 16px w600, "Next Step" → "Submit" on the last step;
  Previous button hidden in the source (display:none) — keep it hidden or
  show a grey "Previous" per repo a11y convention (documented divergence).
- **Font:** **Muli** via Google Fonts `<link>`
  (`https://fonts.googleapis.com/css2?family=Muli:wght@300;400;600;800&display=swap`
  — HTTP 200 verified; source weights used: 400/600/800).
- **Icons:** lucide-react: `ChevronDown` (selects + date trigger), `User` /
  `MapPin` / `Calendar` / `Check` where icon accents are needed.

### Copy (source-faithful, with typos fixed per Enchant precedent)

- Heading: "Form Wizard" · Subtitle: "Nostrud exercitation commodo consequat."
- Placeholders: First Name / Last Name / Phone Number / Email /
  15 / Jan / 2018.
- Step 2 select options: Choose A Location (disabled placeholder) / United
  States / United Kingdom / Viet Nam; Time: 7:00am - 18:00pm (selected) /
  9:00am - 21:00pm / 10:00am - 22:00pm / 12:00am - 24:00pm.
- Summary rows: Full Name / Phone / Email / Travel Location / Date / Time.
- Buttons: "Next Step" / "Submit" / "Previous" (hidden in source).

### Validation semantics (from js/main.js)

- `onStepChanging` reads every field and copies it into the summary cells
  (`.text()` on the `*-val` tds) on EVERY step change, then `return true` —
  **there is NO validation whatsoever in the source** (no jquery.validate
  loaded; empty fields flow to the summary).
- `enableAllSteps: true` — all three step circles are clickable and jump
  directly to any step.
- `datepicker` on `#date`: `dateFormat: "MM - DD - yy"`, `showOn: "both"`,
  chevron icon button.
- Source has **no onFinished handler** (form `action="#"`) — the final
  "Submit" would reload the page. Recreate as an **in-page success state**
  (confirmation panel replacing the card content) — same precedent as the
  Enchant and Grimoire preps.
- Recreation decision: per the repo form convention (zod schema + per-field
  errors) mark all fields required and validate email format on step 1 and
  required-on-step-2 — a documented, user-facing divergence that preserves
  the flow; summary values must still echo whatever the user typed.

## Requirements

### Requirement: Page scaffold

The system SHALL render a full-viewport page centered on the wizard card,
with the multi-stop mesh-gradient background, a main landmark, and a document
title.

#### Scenario: Full page render

- **GIVEN** the Rune app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL fill the viewport with the multi-stop mesh gradient
  background (purple → lavender → peach/yellow → rose)
- **AND** the white rounded wizard card SHALL be centered vertically and
  horizontally on top of it
- **AND** the main landmark SHALL contain the wizard
- **AND** the document title SHALL be "Rune — Travel Booking Wizard"

### Requirement: Split card layout

The system SHALL render the card as a horizontal split: a left photo panel and
a right form panel.

#### Scenario: Card renders split

- **GIVEN** the wizard card is displayed on a desktop viewport
- **WHEN** the card renders
- **THEN** the left side SHALL show the travel/street photo panel (≈66% of the
  card width, rounded on its outer corners)
- **AND** the right side SHALL show the "Form Wizard" heading, subtitle,
  step progress, and form content
- **AND** the photo panel SHALL be hidden on very narrow viewports (≤575px)

### Requirement: Step progress indicator

The system SHALL render the three-step progress bar with numbered circles and
connectors, and SHALL mark the current/done states with the brand blue.

#### Scenario: Progress bar render

- **GIVEN** the wizard is displayed
- **WHEN** the progress bar is visible
- **THEN** it SHALL show three 45px circular indicators in a row numbered 1, 2
  and 3 (white 18px numerals on the circles)
- **AND** connector lines SHALL link consecutive circles (none after the last)
- **AND** the active step's circle SHALL be blue (`#56a3f2`) while the others
  SHALL be grey (`#ccc`)

#### Scenario: Active step follows navigation

- **GIVEN** the user is on step 1
- **WHEN** the user advances to step 2
- **THEN** step 1's circle SHALL remain blue (done)
- **AND** step 2's circle SHALL become blue (current)

#### Scenario: Circles are direct navigation

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks a later or earlier step circle
- **THEN** the wizard SHALL jump directly to that step without a validation
  gate (source behavior: `enableAllSteps: true`)
- **AND** each circle SHALL be a keyboard-accessible link with an accessible
  name (e.g. "Step 1 of 3")

### Requirement: Step 1 — Personal details

The system SHALL render the personal details form: First Name + Last Name
side by side, Phone Number + Email side by side, each a bordered placeholder
input with no label (source has no labels).

#### Scenario: Step 1 fields render

- **GIVEN** the wizard starts on step 1
- **WHEN** the step 1 panel is displayed
- **THEN** it SHALL show four inputs in a 2×2 grid with the placeholders First
  Name, Last Name, Phone Number and Email
- **AND** the Email input SHALL be `type="email"`
- **AND** all inputs SHALL have the 1px `#e5e5e5` border, 5px radius, 16px
  `#333` text and `#666` placeholders

#### Scenario: Validation blocks advance

- **GIVEN** the user is on step 1
- **WHEN** the user clicks Next Step with empty or invalid fields
- **THEN** the system SHALL show per-field errors (e.g. "Please enter your
  first name", "Please enter a valid email address") and block the advance
- **AND** focus SHALL move to the first invalid field

#### Scenario: Valid step 1 advances

- **GIVEN** the user fills every step 1 field with valid values
- **WHEN** the user clicks Next Step
- **THEN** the wizard SHALL advance to step 2 with a fade transition

### Requirement: Step 2 — Travel details

The system SHALL render the travel details form: a full-width Travel Location
select with chevron, then a Date input with a date-picker trigger and a Time
select side by side, both with chevrons.

#### Scenario: Step 2 fields render

- **GIVEN** the wizard is on step 2
- **WHEN** the step 2 panel is displayed
- **THEN** it SHALL show the Travel Location select with the source option
  list (Choose A Location / United States / United Kingdom / Viet Nam)
- **AND** it SHALL show the Date input (placeholder "15 / Jan / 2018") with a
  calendar trigger chevron
- **AND** it SHALL show the Time select side by side with the source options
  (7:00am - 18:00pm pre-selected, 9:00am - 21:00pm, 10:00am - 22:00pm,
  12:00am - 24:00pm)
- **AND** every select SHALL render a chevron indicator (lucide `ChevronDown`)
  at the right edge

#### Scenario: Date selection

- **GIVEN** the user is on step 2
- **WHEN** the user opens the date picker and picks a date
- **THEN** the input SHALL show the selected date
- **AND** the picker SHALL be keyboard-accessible (native date input or a
  custom dialog with arrow-key navigation)

### Requirement: Step 3 — Confirmation summary

The system SHALL render the confirmation panel: a bordered summary table whose
rows echo the values from steps 1 and 2.

#### Scenario: Summary table render

- **GIVEN** the wizard is on step 3
- **WHEN** the confirmation panel is displayed
- **THEN** it SHALL show a semantic `<table>` with rows Full Name, Phone,
  Email, Travel Location, Date and Time
- **AND** the cells SHALL show the values entered in steps 1–2 (default demo
  values may seed the initial render: Benjamin Harrison, +1 888-999-2222,
  an example email, Tokyo Japan, 15 Jan, 2018, 7:00am - 18:00pm)

#### Scenario: Summary reflects edits

- **GIVEN** the user changes a value in an earlier step
- **WHEN** the user returns to step 3
- **THEN** the summary SHALL show the updated value

### Requirement: Wizard navigation

The system SHALL provide a Next Step / Submit button, hide the Previous
button per the source design, and finish with an in-page success state.

#### Scenario: Next Step behavior

- **GIVEN** the user is on step 1 or 2 with valid input
- **WHEN** the user clicks Next Step
- **THEN** the wizard SHALL advance to the next step keeping all values

#### Scenario: Previous behavior

- **GIVEN** the user is on step 2 or 3
- **WHEN** a Previous control is available
- **THEN** the wizard SHALL return to the previous step keeping all values
- **AND** per the source design the Previous control SHALL be visually hidden
  (source sets `display:none` on the Previous action) — show it as a quiet
  grey link if keyboard users need it (documented divergence)

#### Scenario: Submit shows success

- **GIVEN** the user is on step 3 with all values present
- **WHEN** the user clicks Submit
- **THEN** the wizard SHALL replace the card content with an in-page success
  state (green confirmation panel listing the submitted details and a
  "Done"/reset CTA) instead of submitting to a server (source form had no
  backend)

### Requirement: Responsive behavior

The system SHALL collapse the wizard gracefully on smaller viewports.

#### Scenario: Stacked layout on narrow screens

- **GIVEN** the viewport is ≤ 991px
- **WHEN** the wizard renders
- **THEN** side-by-side fields SHALL stack vertically full-width
- **AND** the form padding SHALL shrink (source breakpoints: ≤1199px → 40px
  padding, ≤991px → column layout, ≤575px → 40px 20px padding and the photo
  panel SHALL disappear)

### Requirement: Branding

The system SHALL carry the repo-standard footer attribution.

#### Scenario: Component Dock footer

- **GIVEN** the wizard is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show a "Made with Component Dock" link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the app SHALL NOT reference ColorLib anywhere in its source

## Verification checklist

- [ ] App folder `apps/rune` (package `@free-react-templates/rune`,
      `public/CNAME` = `rune.free.componentdock.com`, `homepage`
      https://rune.free.componentdock.com)
- [ ] Mesh-gradient background recreated in CSS (no image asset)
- [ ] White 10px-radius card, 993px max-width, soft shadow, 180px vertical
      margin
- [ ] Split layout: left travel photo panel (hidden ≤575px) + right form panel
- [ ] 3 numbered step circles (45px, blue current/done, grey inactive,
      connectors, clickable jump navigation)
- [ ] Step 1 personal fields (2×2 grid) + zod validation (required + email
      format)
- [ ] Step 2 travel selects + chevrons + date picker (native or custom,
      accessible)
- [ ] Step 3 summary table echoing all values
- [ ] Next Step/Submit blue button; Previous hidden per source; fade
      transitions
- [ ] In-page success state on submit
- [ ] Muli via Google Fonts; lucide-react icons only
- [ ] Responsive stacking at 1199px / 991px / 575px breakpoints
- [ ] Component Dock footer link; zero ColorLib references in app code
- [ ] 100% Vitest coverage (lines/functions/branches/statements)
- [ ] Per-app gate green: `npm run verify:app rune` + `npm run spec:validate`

## Metadata

- Source: https://colorlib.com/wp/template/colorlib-wizard-22/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html
- TEMPLATES.md line: 860
- Prep commit: `docs: prep Rune (ColorLib colorlib-wizard-22) spec + research`
