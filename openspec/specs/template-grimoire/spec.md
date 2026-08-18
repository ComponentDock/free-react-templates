# Template: Grimoire (Bootstrap Wizards — Multi-step Registration)

## Purpose

Grimoire is a multi-step registration wizard in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Wizard 21" template design (see TEMPLATES.md line 859; source slug
`wp/template/colorlib-wizard-21/`), built under a DIFFERENT name (Grimoire — a
single lowercase word evoking the wizard/magic naming theme of the sibling
wizard preps: Conjure, Conjury, Banish, Dispel, Abjure, Bewitch, Enthrall,
Spellbind, Beguile, Mesmerize, Incant, Stepwise, Enchant; no collision with
`apps/` or existing spec folders) per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/colorlib-wizard-21/
(https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-21.jpg).
Category: Bootstrap Wizards — one of the 30 ColorLib "Wizard" mini-templates
(catalog description: "The best free account and payment details template with
confirmation that you can quickly integrate into your application").

Preview URL: https://preview.colorlib.com/theme/colorlib-wizard-21/ — **404**
(verified; also 404 for `/theme/bootstrap/colorlib-wizard-21/`). The real demo
lives at https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html (HTTP 200,
~7.4 KB HTML, `<title>Wizard-v1</title>`, `css/style.css` ~11.7 KB parsed for
tokens, `js/main.js` ~2.1 KB). The screenshot in TEMPLATES.md
(`colorlib-free-wizard-21.jpg`, 1200×972, analyzed in the browser) matches the
demo. This is a jquery-steps wizard demo — no preview.colorlib.com mirror
(same hosting pattern as the sibling Colorlib Wizard 20 → Enchant prep).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 21" — a single-page three-step
  sign-up wizard (account → payment → confirm). The whole page is one centered
  white card (`851px` wide, radius 10px, shadow `0 8px 20px rgba(0,0,0,.15)`)
  floating on a full-bleed mesh-gradient background image (`images/wizard-v1.jpg`,
  1400×939, `background-size: cover`). The gradient sweeps periwinkle purple
  (top-left) → lavender → peach/yellow → rose (bottom): sampled stops
  `#8e6ff1` → `#b27cd0` → `#e5b17f` → `#f3e779` → `#db6480`/`#e59d75`
  (recreate in CSS — no image asset copied). Above the form sits a 3-circle
  progress bar rendered by jquery-steps: 50px circles, inactive fill `#ccc`,
  active/done fill `#6eba2a` (green), white icon inside (20px), connected by a
  6px-tall `#e5e5e5` bar; the current circle gets a drop shadow
  (`0 5px 18px rgba(0,0,0,.2)`) and a 3px `#ccc` underline. Each circle has
  "Step N" (`#666`, weight 400) and a label (`#333`, weight 600) beneath it.
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
  (HTTP 200, ~7.4 KB HTML; `css/style.css` ~11.7 KB; `js/main.js` ~2.1 KB).
  Structure: `div.page-content` (bg image, flex-centered) > `div.wizard-v1-content`
  (white card) > `div.wizard-form` > `form#form-register` > `div#form-total`
  with three `h2` + `section` pairs (jquery-steps turns each into a step).
  Steps: (1) Account Information — Username*, Email Address* (full-width),
  Password* + Confirm Password* (side-by-side); (2) Payment Information —
  Card Type select (6 options), Card Number + CVC (side-by-side), Expiry Month
  - Expiry Year selects (side-by-side); (3) Confirm Your Details — heading +
    summary table (Username, Email Address, Card Type, Card Number, CVC, Expiry
    Month, Expiry Year cells filled from steps 1–2). `.actions` bar carries
    Previous ("Back", transparent, hidden on step 1) and Next (50px circular
    green button with white arrow). Stack is jQuery + jquery.steps +
    jquery.validate, NOT Tailwind. All interactivity must be recreated
    client-side in React (no jQuery). Icons are Material Design Iconic Font
    glyphs (zmdi-account / zmdi-card / zmdi-receipt / zmdi-arrow-right) —
    recreate with lucide-react. Font is Raleway (local font files in source) —
    load Raleway from Google Fonts.
- **Screenshot note:** `colorlib-free-wizard-21.jpg` (1200×972, viewed in the
  browser): full-screen purple→blue→peach mesh gradient; white rounded card
  centered with a subtle drop shadow; three step circles above the blue form
  block (step 1 green/active with person icon, steps 2–3 grey with card and
  receipt icons); a solid bright-blue form block (#359bfa) with darker-blue
  fields (#2f8be0), white labels; a circular lime-green arrow button straddling
  the card's bottom-right edge. The live demo matches the screenshot
  (gradient image + identical card layout).

### Design tokens (from css/style.css + screenshot image analysis)

- **Background:** full-bleed mesh gradient (was a JPEG in the source; recreate
  in CSS, e.g. `bg-[linear-gradient(135deg,#8e6ff1,#b27cd0_35%,#e5b17f_60%,#f3e779_85%,#db6480)]`
  or a radial mesh — sampled stops: top-left `#8e6ff1`, top-right `#b27cd0`,
  center `#e08f7e`, bottom-left `#f3e29c`, bottom-right `#e59d75`).
- **Surface:** white card `#fff`, width ≈ 851px, `border-radius: 10px`,
  shadow `0 8px 20px rgba(0,0,0,0.15)`.
- **Brand green:** `#6eba2a` (active/done step circles + next/submit button),
  hover `#5fa125`.
- **Form block:** `#359bfa` (content background), radius 5px, generous padding
  (≈ 32px 115px 23px 75px desktop; collapses at small widths).
- **Inputs/selects:** `#2f8be0`, radius 5px, padding 13px 25px, borderless,
  white text (16px), placeholder `rgba(255,255,255,0.6)`; selects get a
  chevron glyph (lucide `ChevronDown` in the React rework); select option
  list renders on white with black text.
- **Labels:** white 16px, weight 500, ~11px gap below.
- **Step progress:** 50px circles; inactive `#ccc`, active/done `#6eba2a`;
  current shadow `0 5px 18px rgba(0,0,0,0.2)`; connector bar 6px `#e5e5e5`;
  "Step N" label `#666` w400, step text `#333` w600.
- **Step 3 summary:** panel `#2f8be0` radius 5px padding 24px 26px 31px;
  label cells `rgba(255,255,255,0.6)`, values `#fff`, 16px, 18px row spacing;
  heading `#fff` 16px w600.
- **Actions:** Next/Submit = 50px circle `#6eba2a` (hover `#5fa125`), shadow
  `0 3px 15px rgba(0,0,0,0.19)`, white arrow icon; Previous = transparent with
  `#666` "Back" text, hidden (opacity 0) on step 1.
- **Font:** **Raleway** (400/600/800) via Google Fonts `<link>`.
- **Icons:** lucide-react: `User` (step 1), `CreditCard` (step 2),
  `Receipt`/`FileText` (step 3), `ArrowRight`/`ChevronRight` (Next/Submit),
  `ChevronDown` (selects).

### Copy (with source typos fixed, per Enchant precedent)

- "Account Infomation" → **Account Information**; "Payment Infomation" →
  **Payment Information**; "Comfirm Details" → **Confirm Details**;
  "Comfirm Your Details" (h2) → **Confirm Your Details**;
  "Please provide an username" → **Please provide a username**.
- Placeholders: Username / Your Email / Password / Confirm Password /
  ex: 489050625008xxxx / xxx / Select Credit Card Type / Expiry Month /
  Expiry Year.

### Validation semantics (from js/main.js)

- Username: required. Email: required + format (`[^@]+@[^@]+\.[a-zA-Z]{2,6}`).
  Password: required. Confirm Password: required + must equal password.
- Payment-step fields (card type, card number, CVC, month, year) are **not
  validated in the source** and flow to the summary even when empty. Recreation
  decision: validate the account step exactly as the source; for the payment
  step, prefer the repo form convention (zod schema + per-field errors) and
  mark the fields required — a documented, user-facing divergence that
  preserves the flow. If kept source-faithful instead, the fields must still
  appear in the summary.
- Source has **no onFinished handler** (form `action="#"`) — the final arrow
  would reload the page. Recreate as an **in-page success state** (green
  confirmation panel replacing the card content) — same precedent as the
  Enchant prep (`alert('Sumited')` → in-page success).

## Requirements

### Requirement: Page scaffold

The system SHALL render a full-viewport page centered on the wizard card,
with the mesh-gradient background, a main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Grimoire app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL fill the viewport with the multi-stop mesh gradient
  background (purple → lavender → peach/yellow → rose)
- **AND** the white rounded wizard card SHALL be centered vertically and
  horizontally on top of it
- **AND** the main landmark SHALL contain the wizard
- **AND** the document title SHALL be "Grimoire — Registration Wizard"

### Requirement: Step progress indicator

The system SHALL render the three-step progress bar with icon circles,
labels, and connector bars.

#### Scenario: Progress bar render

- **GIVEN** the wizard is displayed
- **WHEN** the progress bar is visible
- **THEN** it SHALL show three 50px circular icons in a row: person (User),
  credit card (CreditCard), receipt (Receipt)
- **AND** each circle SHALL have "Step N" and a label beneath it (Account
  Information, Payment Information, Confirm Your Details)
- **AND** connector bars SHALL link consecutive circles
- **AND** the active step's circle SHALL be green (`#6eba2a`) with a drop
  shadow while the others SHALL be grey (`#ccc`)

#### Scenario: Active step follows navigation

- **GIVEN** the user is on step 1
- **WHEN** the user advances to step 2
- **THEN** step 1's circle SHALL remain green (done)
- **AND** step 2's circle SHALL become green (current)
- **AND** the circles are fully keyboard-accessible (arrow-key focusable or
  clickable links with accessible names)

### Requirement: Step 1 — Account Information

The system SHALL render the account form: Username and Email Address
(full-width) then Password and Confirm Password (side by side), each with a
white label and a darker-blue rounded input, and SHALL validate before
advancing.

#### Scenario: Step 1 fields render

- **GIVEN** the wizard starts on step 1
- **WHEN** the step 1 panel is displayed
- **THEN** it SHALL show labeled fields Username*, Email Address*, Password*
  and Confirm Password*
- **AND** all four inputs SHALL have the #2f8be0 fill, 5px radius, white text
  and 60%-white placeholders (Username / Your Email / Password / Confirm
  Password)
- **AND** Password and Confirm Password SHALL be `type="password"`

#### Scenario: Validation blocks advance

- **GIVEN** the user is on step 1
- **WHEN** the user clicks Next with empty or invalid fields
- **THEN** the system SHALL show per-field errors ("Please provide a
  username", "Please provide an email", "Please provide a password",
  "Please enter the same password") and block the advance
- **AND** an invalid email format SHALL show a format error
- **AND** focus SHALL move to the first invalid field

#### Scenario: Valid step 1 advances

- **GIVEN** the user fills every account field with valid values
  (matching passwords)
- **WHEN** the user clicks Next
- **THEN** the wizard SHALL advance to step 2 with a fade transition

### Requirement: Step 2 — Payment Information

The system SHALL render the payment form: Card Type select, Card Number + CVC
side by side, Expiry Month + Expiry Year selects side by side, and SHALL keep
entered values when navigating back.

#### Scenario: Step 2 fields render

- **GIVEN** the wizard is on step 2
- **WHEN** the step 2 panel is displayed
- **THEN** it SHALL show the Card Type select with the source option list
  (Select Credit Card Type placeholder, Business Credit Cards, Limited Purpose
  Cards, Prepaid Cards, Charge Cards, Student Credit Cards)
- **AND** it SHALL show Card Number (placeholder "ex: 489050625008xxxx") and
  CVC (placeholder "xxx") side by side
- **AND** it SHALL show Expiry Month and Expiry Year selects side by side
  (months January–May, years 2013–2018 in source order)
- **AND** selects SHALL render a chevron indicator and white text on the
  #2f8be0 fill

#### Scenario: Values persist across steps

- **GIVEN** the user fills step 1 and step 2
- **WHEN** the user navigates back to step 1 and forward to step 2 again
- **THEN** all previously entered values SHALL still be present

### Requirement: Step 3 — Confirm Your Details

The system SHALL render the confirmation panel: a heading and a summary table
whose cells echo the values from steps 1 and 2.

#### Scenario: Summary table render

- **GIVEN** the wizard is on step 3
- **WHEN** the confirmation panel is displayed
- **THEN** it SHALL show the heading "Confirm Details"
- **AND** it SHALL list Username, Email Address, Card Type, Card Number, CVC,
  Expiry Month and Expiry Year with the values entered in steps 1–2
- **AND** the table SHALL be keyboard-navigable (semantic `<table>`)

#### Scenario: Summary reflects edits

- **GIVEN** the user changes a value in an earlier step
- **WHEN** the user returns to step 3
- **THEN** the summary SHALL show the updated value

### Requirement: Wizard navigation

The system SHALL provide Previous ("Back") and Next/Submit controls, hiding
Back on step 1 and finishing after step 3.

#### Scenario: Back behavior

- **GIVEN** the user is on step 2 or 3
- **WHEN** the user clicks Back
- **THEN** the wizard SHALL return to the previous step keeping all values
- **AND** the Back control SHALL be a transparent button with grey "Back" text
  at the left of the action bar

#### Scenario: Back hidden on first step

- **GIVEN** the user is on step 1
- **WHEN** the wizard renders
- **THEN** the Back control SHALL be visually hidden (invisible but removed
  from the tab order — source uses opacity 0 with disabled state)

#### Scenario: Submit shows success

- **GIVEN** the user is on step 3 with all values present
- **WHEN** the user clicks the Submit arrow
- **THEN** the wizard SHALL show an in-page success state (green confirmation
  panel with the submitted details summary and a "Done"/reset CTA) instead of
  submitting to a server (source form had no backend)

### Requirement: Responsive behavior

The system SHALL collapse the wizard gracefully on smaller viewports.

#### Scenario: Stacked layout on narrow screens

- **GIVEN** the viewport is ≤ 991px
- **WHEN** the wizard renders
- **THEN** side-by-side fields SHALL stack vertically full-width
- **AND** the form padding and step connector bars SHALL shrink (source
  breakpoints: 1199px → 75px padding, 991px → column layout, 575px → 30px
  padding and shortened connectors)

### Requirement: Branding

The system SHALL carry the repo-standard footer attribution.

#### Scenario: Component Dock footer

- **GIVEN** the wizard is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show a "Made with Component Dock" link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the app SHALL NOT reference ColorLib anywhere in its source

## Verification checklist

- [ ] App folder `apps/grimoire` (package `@free-react-templates/grimoire`,
      `public/CNAME` = `grimoire.free.componentdock.com`, `homepage`
      https://grimoire.free.componentdock.com)
- [ ] Mesh-gradient background recreated in CSS (no image asset)
- [ ] White 10px-radius card with 851px-max width and soft shadow
- [ ] 3-step progress bar with green/grey circles, icons, labels, connectors
- [ ] Step 1 fields + validation (required, email format, password match)
- [ ] Step 2 payment fields + selects with chevrons
- [ ] Step 3 summary table echoing all values
- [ ] Back/Next circular controls; Back hidden on step 1; fade transitions
- [ ] In-page success state on submit
- [ ] Raleway via Google Fonts; lucide-react icons only
- [ ] Responsive stacking at 991px / 575px breakpoints
- [ ] Component Dock footer link; zero ColorLib references in app code
- [ ] 100% Vitest coverage (lines/functions/branches/statements)
- [ ] Per-app gate green: `npm run verify:app grimoire` + `npm run spec:validate`

## Metadata

- Source: https://colorlib.com/wp/template/colorlib-wizard-21/
- Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html
- TEMPLATES.md line: 859
- Prep commit: `docs: prep Grimoire (ColorLib colorlib-wizard-21) spec + research`
