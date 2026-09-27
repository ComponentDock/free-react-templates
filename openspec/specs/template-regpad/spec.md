# Template: RegPad (Registration Form)

## Purpose

RegPad is a single-page EVENT REGISTRATION FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib
Regform 3" free template (source: https://colorlib.com/wp/template/colorlib-regform-3/
, live demo: https://colorlib.com/etc/regform/colorlib-regform-3/),
built under a DIFFERENT name (**RegPad**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a plain HTML + CSS registration form (no Bootstrap required,
works with Bootstrap 4/5/6 or standalone). It renders a two-column split card
centered on a pink-to-purple gradient background: the LEFT half is a
full-height photo (a person surrounded by pink smoke), and the RIGHT half is
a dark form panel with the heading "Registration Info" in white and five
underline-only input fields (Name, Birthdate with calendar icon, Gender
dropdown, Email, Phone) followed by a green pill-shaped Submit button. The
card uses CSS `display: table` / `table-cell` for the split layout, with a
10px border-radius and a soft drop shadow. On mobile (<768px) the card
stacks vertically (image on top, form below).

## Naming

The ColorLib source name "Colorlib Regform 3" is FORBIDDEN as the app name
(and "regform" must not be reused). **RegPad** is the new, original name —
single lowercase word, kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/`, or any TEMPLATES.md name (verified 2026-09-28: zero hits
for `regpad` in `ls apps/`, `openspec/specs/`, `docs/templates/`). Source
slug: `colorlib-regform-3`. Preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Regform 3" (page title: "Colorlib
  Reg Form V3 — Free Event Registration Template 2026"). Listed in
  TEMPLATES.md under the Regform family. The description reads:
  "Collecting details about attendees happens easier than you think with
  this free event registration template."

- **Live preview — REACHABLE at alternate path:** The naive
  `https://preview.colorlib.com/theme/colorlib-regform-3/` returns 404;
  the REAL demo is at
  **`https://colorlib.com/etc/regform/colorlib-regform-3/`**
  (HTTP 200, 3,635 bytes, `<title>Au Register Forms by Colorlib</title>`).
  Stylesheet: `css/style.css` (10,694 bytes, 495 lines — all custom CSS,
  no Bootstrap dependency). The demo uses `Material-Design-Iconic-Font`
  for the calendar icon (zmdi-calendar-note) — replace with lucide-react
  `Calendar` icon, do NOT ship the font. No JS framework — plain HTML/CSS.

- **Live DOM structure (from fetched HTML + style.css):**
  - `body` → `div.page-wrapper.bg-gra-01.p-t-180.p-b-100.font-poppins`
    (full-viewport, gradient bg, Poppins font, centered vertically via
    top/bottom padding)
    - `div.wrapper.wrapper--w780` (max-width container)
      - `div.cl-card.card-3` (the split card: bg `#000`, border-radius
        10px, shadow `0px 8px 20px 0px rgba(0,0,0,0.15)`, width 100%,
        `display: table`)
        - `div.card-heading` (left half: `display: table-cell; width: 50%`,
          bg image `bg-heading-03.jpg` — a person with pink smoke, cover,
          no text content)
        - `div.cl-card-body` (right half: `display: table-cell; padding:
          57px 65px; padding-bottom: 65px`)
          - `h2.title` ("Registration Info" — 24px, white, weight 400,
            margin-bottom 36px)
          - `form[method=POST]` containing five `div.cl-input-group`
            (each has `border-bottom: 1px solid rgba(255,255,255,0.2)`,
            margin-bottom 33px):
              1. `input.input--style-3[type=text]` placeholder "Name"
              2. `input.input--style-3[type=text].js-datepicker` placeholder
                 "Birthdate" + `i.input-icon.js-btn-calendar` (calendar SVG icon)
              3. `div.rs-select2` → custom select wrapper → `<select>` with
                 options: "Gender" (disabled selected), "Male", "Female", "Other"
              4. `input.input--style-3[type=email]` placeholder "Email"
              5. `input.input--style-3[type=text]` placeholder "Phone"
          - `div.p-t-10` → `button.cl-btn.btn--pill.btn--green[type=submit]`
            "Submit" (green pill: bg `#57b846`, radius 20px, 18px white text,
            line-height 40px, padding 0 33px; hover `#4dae3c`)
  - Mobile (<767px): card switches to `display: block` (stacked), image gets
    `padding-top: 400px; background-position: center center` (tall image block),
    card-body gets `padding: 37px 30px; padding-bottom: 45px`

- **Screenshot (`colorlib-reg-form-3.jpg`, viewed 2026-09-28):**
  A pink-to-purple vertical gradient fills the viewport. Centered in it is a
  horizontal split card (~780px wide). The LEFT ~50% is a full-height photo
  of a person in dark clothing wearing a hat, surrounded by vivid pink/magenta
  smoke — the smoke fills the lower portion and blends into a moody dark
  background at the top. The RIGHT ~50% has a pure black background with the
  white heading "Registration Info" at top, then five form fields stacked
  vertically with thin translucent white underline borders and light grey
  placeholder text. The Birthdate field has a small calendar icon at the
  right edge. The Gender field shows a dropdown arrow. At the bottom is a
  bright green rounded/pill "Submit" button. The card has subtly rounded
  corners (10px) and a soft shadow. Aesthetic: modern, moody, split-layout
  registration form with a strong photo+dark-panel contrast. **The recreation
  needs a picsum placeholder for the left image** (deterministic seed
  matching the pink/dark mood or a generic portrait).

## Design tokens

| Token                | Value                                      | Notes                                                                |
| -------------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| `--color-page-from`  | `#fbc2eb`                                  | Gradient start (bottom) — soft pink                                   |
| `--color-page-to`    | `#a18cd1`                                  | Gradient end (top) — lavender/purple; `.bg-gra-01`                   |
| `--color-card-bg`    | `#000`                                     | Card background (`.card-3` overrides `.cl-card` white)               |
| `--color-heading-img` | `bg-heading-03.jpg` (cover)              | Left column photo background — use picsum placeholder                |
| `--color-text-white` | `#fff`                                     | Title text ("Registration Info") and button text                     |
| `--color-placeholder` | `#ccc`                                    | Input placeholder color and input text color                         |
| `--color-border`     | `rgba(255, 255, 255, 0.2)`                | Input underline border (1px solid)                                   |
| `--color-btn`        | `#57b846`                                  | Submit button background (green)                                     |
| `--color-btn-hover`  | `#4dae3c`                                  | Submit button hover background                                       |
| `--font-body`        | 'Poppins', sans-serif                      | Google Fonts; base font throughout                                   |
| `--card-radius`      | `10px`                                     | Card border-radius (`.card-3`)                                       |
| `--card-shadow`      | `0px 8px 20px 0px rgba(0,0,0,0.15)`       | Card box-shadow                                                      |
| `--card-max-w`       | `780px`                                    | `.wrapper--w780` max-width                                           |
| `--btn-radius`       | `20px`                                     | Submit button pill shape                                             |
| `--btn-padding`      | `0 33px`                                   | Submit button horizontal padding                                     |
| `--btn-line-h`       | `40px`                                     | Submit button line-height                                            |
| `--btn-font`         | `18px` white                               | Submit button font-size and color                                    |
| `--input-font`       | `16px`                                     | Input font-size                                                      |
| `--input-padding`    | `5px 0`                                    | Input padding                                                        |
| `--input-group-mb`   | `33px`                                     | Space between input groups                                           |
| `--title-size`       | `24px`                                     | "Registration Info" heading size                                     |
| `--title-weight`     | `400`                                      | Heading font-weight (regular)                                        |
| `--title-mb`         | `36px`                                     | Heading bottom margin                                                |
| `--card-body-pad`    | `57px 65px` (desktop), `37px 30px` (mobile) | Right column internal padding                                     |

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport page with a pink-to-purple
vertical gradient background and a centered 780px split card.

#### Scenario: Gradient background

- **GIVEN** the RegPad app is rendered on a desktop viewport
- **THEN** the page background SHALL be a vertical linear gradient from
  `#fbc2eb` (pink, bottom) to `#a18cd1` (lavender, top)
- **AND** the page SHALL use the Poppins font family from Google Fonts
- **AND** the page SHALL fill the full viewport height

#### Scenario: Centered card

- **GIVEN** the RegPad app is rendered on desktop (>767px)
- **THEN** a 780px-wide card SHALL render centered horizontally with
  **10px border-radius** and the shadow
  `0px 8px 20px 0px rgba(0,0,0,0.15)`
- **AND** the card SHALL use `display: table` for a two-column split layout
- **AND** the card background SHALL be black (`#000`)

### Requirement: Two-column split card

The card SHALL display a photo on the left and a dark form panel on the
right using CSS table-cell layout.

#### Scenario: Desktop split layout

- **GIVEN** the viewport is wider than 767px
- **THEN** the left column SHALL occupy 50% width and display a
  full-bleed cover photo (picsum placeholder, deterministic seed)
- **AND** the right column SHALL occupy 50% width with `padding: 57px 65px`
  and contain the form
- **AND** both columns SHALL be vertically aligned at full card height
  (via `display: table-cell`)

#### Scenario: Mobile stacked layout

- **GIVEN** the viewport is at or below 767px
- **THEN** the card SHALL switch to `display: block` (stacked vertically)
- **AND** the image column SHALL render as a 400px-tall block (via
  `padding-top: 400px` with `background-position: center center`)
- **AND** the form panel SHALL render below with `padding: 37px 30px;
  padding-bottom: 45px`
- **AND** no horizontal overflow SHALL occur

### Requirement: Form heading

The form panel SHALL display a white "Registration Info" heading at the top.

#### Scenario: Heading rendering

- **GIVEN** the form panel is rendered
- **THEN** an `h2` heading SHALL read "Registration Info" in white (`#fff`),
  24px, font-weight 400, with 36px bottom margin
- **AND** the heading SHALL be the first child of the card body, above
  the form

### Requirement: Five-field registration form

The form SHALL contain five underline-only input fields and a green
pill-shaped Submit button, matching the source order.

#### Scenario: Field inventory

- **GIVEN** the RegPad form is rendered
- **THEN** the fields SHALL appear in this order:
  1. Name — `type="text"`, placeholder "Name"
  2. Birthdate — `type="text"`, placeholder "Birthdate", with a calendar
     icon (lucide `Calendar`) at the right edge
  3. Gender — `<select>` dropdown with options: "Gender" (disabled,
     selected as placeholder), "Male", "Female", "Other"
  4. Email — `type="email"`, placeholder "Email"
  5. Phone — `type="text"`, placeholder "Phone"
- **AND** no other controls SHALL exist in the form (no checkboxes,
  radio buttons, file inputs, or textarea)

#### Scenario: Input styling

- **GIVEN** any input field is rendered
- **THEN** it SHALL have transparent background, 16px font, `#ccc` text
  and placeholder color, 5px vertical padding, no border except the
  parent group's underline
- **AND** each input group SHALL have a `1px solid rgba(255,255,255,0.2)`
  bottom border with 33px bottom margin

#### Scenario: Gender select styling

- **GIVEN** the Gender select is rendered
- **THEN** it SHALL appear as a custom-styled dropdown matching the
  underline aesthetic (transparent background, no native browser chrome)
- **AND** the first option "Gender" SHALL be disabled and selected
  (serving as the placeholder)

#### Scenario: Submit button

- **GIVEN** the form is rendered
- **THEN** a Submit button SHALL appear below the fields with:
  - Background: `#57b846` (green)
  - Text: "Submit", white, 18px
  - Border-radius: 20px (pill shape)
  - Line-height: 40px, padding: 0 33px
- **WHEN** the user hovers the button
- **THEN** the background SHALL change to `#4dae3c` (darker green)
- **AND** the transition SHALL be 0.4s ease

### Requirement: Form submission

The form SHALL handle submission client-side with no real network request.

#### Scenario: Mock submit

- **GIVEN** the user fills in the form fields
- **WHEN** the user clicks Submit
- **THEN** the form SHALL NOT make a real network request
- **AND** a simple confirmation SHALL be shown (e.g. inline success
  message or form reset — document the chosen approach)

### Requirement: Responsive design

The template SHALL be fully responsive across desktop and mobile.

#### Scenario: Breakpoint behavior

- **GIVEN** the viewport is at or below 767px
- **THEN** the card SHALL stack vertically (image top, form bottom)
- **AND** the image area SHALL be 400px tall with centered background
- **AND** the form padding SHALL reduce to `37px 30px` (top/sides) and
  `45px` bottom
- **AND** the card SHALL fill the available width minus horizontal margins

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Form semantics

- **GIVEN** the RegPad form is rendered
- **THEN** each input SHALL have an associated `<label>` or
  `aria-label` (matching the placeholder text as the visible label)
- **AND** the form SHALL use semantic `<form>`, `<select>`, and `<button>`
  elements
- **AND** the calendar icon button SHALL expose `aria-label` for screen
  readers
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (inputs, select, button)

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the RegPad app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- regpad` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/regform/colorlib-regform-3/:
      pink-to-purple gradient background, centered 780px split card
      (10px radius, black bg, photo left / form right), white heading
      "Registration Info", five underline-only fields, green pill Submit.
- [ ] Behavior check: form fields render in correct order, Gender
      select shows disabled placeholder, calendar icon next to Birthdate,
      Submit shows hover color change, form mock-submits without network.
- [ ] Responsive check at 375px (stacked layout, image 400px tall,
      form padded 37px/30px, no overflow).
