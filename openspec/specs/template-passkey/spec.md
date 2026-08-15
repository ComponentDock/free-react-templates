# Template: Passkey (Sign-In Form Dropdown)

## Purpose

Passkey is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 06" demo design
(source: https://colorlib.com/wp/template/dropdown-06/), built under a
DIFFERENT name (Passkey) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
sign-in form dropdown — a pink "Sign In" button (Bootstrap-style caret) that
opens a white card with an Email address field, a Password field, a "Remember
me" checkbox and a full-width "Sign in" submit button — a minimal,
functional component-showcase page on a flat light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 06" — sixth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 759). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley** (see `docs/templates/menubar/`,
  `docs/templates/popmenu/`, `docs/templates/skycast/`,
  `docs/templates/chime/`, `docs/templates/trolley/`).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-06/`
  (HTTP 200, 15.2 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-06/` 404s — the dropdown
  demos live under the `/theme/bootstrap/` subpath (the ColorLib template
  page links the correct preview). Stylesheet `css/style.css` (222 KB,
  ftco-style Bootstrap 4 theme; the template-specific rules are the LAST
  ~90 lines, around line 8150 — this demo's tail differs from Trolley's:
  it styles `.form-control`, `.btn`, `.btn-primary` and
  `.btn-group .dropdown-menu`, with NO `.dropdown-toggle::after` suppression
  and NO `.split` bar, so the trigger keeps the standard Bootstrap caret);
  libs: jquery, popper, bootstrap.min.js, ionicons (4.5.6 — loaded but NOT
  used by this demo). Google Font **Roboto** (weights 400/500/700) loaded
  via a Cloudflare `/cf-fonts/s/roboto/` @font-face block in the preview
  HTML (for the recreation, use a Google Fonts `<link>` per conventions).
  `js/main.js` is only a `fullHeight` helper — no dropdown logic (Bootstrap
  handles it).
  Cross-checked against the TEMPLATES.md screenshot (`dropdown-06.jpg`,
  1200×972, viewed in browser) — all match. The demo brands itself
  "Dropdown #06"; the recreation uses the NEW name **Passkey**.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat very-light-gray background `#fafafa`
  (confirmed by both the CSS `body` rule and the screenshot). Centered dark
  heading "Dropdown #06" (28px Roboto, `#000`, `.heading-section` with
  `mb-5 pb-md-4` margins); below it a single centered column holding the
  trigger button. The button is `button.btn.btn-primary.dropdown-toggle`
  — Bootstrap base `position: relative; display: inline-block`, brand
  background `#fa697c` (salmon pink), `border-radius: 5px`,
  `padding: 12px 16px`, font-size 14px, white text "Sign In", soft shadow
  `0px 10px 20px -6px rgba(0,0,0,.12)`; hover/focus background `#f83851`
  (deeper pink). The standard Bootstrap caret is PRESENT
  (`.dropdown-toggle::after` is NOT suppressed in this demo — unlike
  Dropdown 05/Trolley): a small solid triangle
  (`border-top: .3em solid`, `margin-left: .255em`, inline-block, 0×0).
  The screenshot confirms the caret ("small downward-pointing caret (arrow)
  to the right of the text"). `aria-haspopup="true"`, `aria-expanded="false"`.
- **The menu card** is a `<form class="dropdown-menu dropdown-menu-right p-4">`
  — white, borderless, `min-width: 20rem` (320px), `padding: 1.5rem` (the
  `p-4` class — note `.btn-group .dropdown-menu` base sets `padding: 0` but
  the `p-4` utility wins on the element), `margin-top: 20px` (NOT 80px like
  Trolley), right-aligned under the trigger (`dropdown-menu-right`;
  Bootstrap base `right: 0; left: auto`), shadow
  `0 10px 34px -20px rgba(0,0,0,.41)`, with a small white caret triangle
  near its top-RIGHT (`.dropdown-menu:after`, `top: -.7em`, `right: 35px`,
  `border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`; a
  translucent `rgba(0,0,0,.02)` duplicate `:before` at `top: -.8em` casts a
  soft shadow; both `z-index: -1`). NOTE: `right: 35px` here, NOT 20px
  (Trolley) — each demo in the series has its own tail CSS. On ≤767.98px
  the menu centers under the trigger (`left: 50% !important;
transform: translateX(-50%) !important`) and `margin-top: 70px`.
- **Form content (from live DOM, verbatim):** the menu is a real `<form>`
  (Bootstrap 4's "sign in" example):
  - `div.form-group` → `label[for=exampleDropdownFormEmail2]` "Email
    address" + `input[type=email].form-control#exampleDropdownFormEmail2`
    placeholder "email@example.com".
  - `div.form-group` → `label[for=exampleDropdownFormPassword2]` "Password"
    - `input[type=password].form-control#exampleDropdownFormPassword2`
      placeholder "Password".
  - `div.form-check.mb-2` → `input[type=checkbox].form-check-input#dropdownCheck2`
    - `label.form-check-label[for=dropdownCheck2]` "Remember me".
  - `button[type=submit].btn.btn-primary.btn-block` "Sign in" (note the
    submit label is lowercase "Sign in" while the trigger button reads
    "Sign In").
    Inputs: `.form-control` — `height: 52px !important`, `background: #fff`,
    `color: rgba(0,0,0,.7)`, `font-size: 16px`, `border-radius: 4px`,
    `border: 2px solid rgba(0,0,0,.05)` (focus: `rgba(0,0,0,.1)`),
    placeholder `rgba(0,0,0,.4)`. Labels: Bootstrap default (inline-block,
    `margin-bottom: .5rem`, ~14px). Submit: full-width (`btn-block`), brand
    pink `#fa697c`, hover `#f83851`.
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding 7em 0) → `div.container`.
  2. Header row (`div.row` → `div.col-md-12.text-center`): `h2.heading-section.mb-5.pb-md-4`
     "Dropdown #06" (28px, `#000`, centered).
  3. Demo row (`div.row.justify-content-center` → `div.col-md-12.d-flex.justify-content-center`):
     `div.btn-group` containing:
     - Trigger: `button.btn.btn-primary.dropdown-toggle` "Sign In"
       (`data-toggle="dropdown"`, `aria-haspopup="true"`,
       `aria-expanded="false"`, standard Bootstrap caret, brand pink,
       hover `#f83851`).
     - Menu: `form.dropdown-menu.dropdown-menu-right.p-4` — white card
       (320px, shadow, caret top-right `right: 35px`), right-aligned under
       the trigger, containing the four form controls above (email,
       password, remember-me checkbox, full-width submit).
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                           | Source                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Page background | `#fafafa` (flat very light gray — confirmed in screenshot)                                                                                                                                                                                                                                                                                                                                                      | `body` ftco rule                                 |
| Brand pink      | `#fa697c` (salmon/coral pink — trigger button, submit button, plain `a` link color)                                                                                                                                                                                                                                                                                                                             | `.btn.btn-primary` + `a` ftco rule               |
| Trigger button  | `.btn.btn-primary.dropdown-toggle` — brand pink `#fa697c`, `border-radius: 5px`, `padding: 12px 16px`, font-size 14px, weight 400, white text "Sign In", shadow `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`; hover/focus `#f83851`; standard Bootstrap caret PRESENT (`::after` triangle, NOT suppressed — differs from Trolley)                                                                | `.btn` + `.btn.btn-primary` + BS base            |
| Heading color   | `#000` (black), 28px Roboto, centered, `mb-5 pb-md-4` (2rem/1.5rem bottom margins)                                                                                                                                                                                                                                                                                                                              | `.heading-section`                               |
| Menu card       | `min-width: 20rem` (320px; centered + `margin-top: 70px` on ≤767.98px), bg `#fff`, border none, `padding: 1.5rem` via `p-4`, `margin-top: 20px`, right-aligned (`dropdown-menu-right`), shadow `0 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle near top-RIGHT (`right: 35px`; `:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em`, both `z-index: -1`) | `.btn-group .dropdown-menu` + `::before/::after` |
| Form inputs     | `.form-control` — `height: 52px`, bg `#fff`, `color: rgba(0,0,0,.7)`, `font-size: 16px`, `border-radius: 4px`, `border: 2px solid rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`), placeholder `rgba(0,0,0,.4)`                                                                                                                                                                                                       | `.form-control` ftco override                    |
| Labels          | Bootstrap default label (inline-block, `margin-bottom: .5rem`)                                                                                                                                                                                                                                                                                                                                                  | BS base `label`                                  |
| Checkbox row    | `div.form-check.mb-2` — `input.form-check-input` + `label.form-check-label` "Remember me"                                                                                                                                                                                                                                                                                                                       | BS base `.form-check*`                           |
| Submit button   | `button[type=submit].btn.btn-primary.btn-block` "Sign in" — full-width, brand pink `#fa697c`, hover `#f83851`                                                                                                                                                                                                                                                                                                   | `.btn.btn-primary` + `.btn-block`                |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                                                                                    | `body` + preview HTML @font-face block           |
| Section rhythm  | `7em 0` padding; container max-width 1140px                                                                                                                                                                                                                                                                                                                                                                     | `.ftco-section`, `.container`                    |
| Icons           | None — this demo uses no icons (ionicons is loaded but unused)                                                                                                                                                                                                                                                                                                                                                  | preview HTML                                     |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Passkey app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Passkey — Sign-In Form Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #06".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #06"
- **AND** the heading SHALL use the brand font (Roboto), black color, 28px,
  with generous bottom margins (mb-5 pb-md-4 equivalent)

### Requirement: Sign In trigger

The system SHALL render the brand-pink "Sign In" trigger button exactly like
the reference: a standard Bootstrap-style dropdown toggle with caret, on the
flat `#fafafa` page background.

#### Scenario: Trigger renders with label and caret

- **GIVEN** the demo section is rendered
- **WHEN** the trigger area loads
- **THEN** a button SHALL be visible with the text "Sign In"
- **AND** the button SHALL have the brand background `#fa697c`,
  `border-radius: 5px`, `padding: 12px 16px`, white text, and a soft shadow
  `0px 10px 20px -6px rgba(0,0,0,.12)`
- **AND** the button SHALL show the standard dropdown caret (a small solid
  triangle after the label — NOT suppressed, unlike Trolley)
- **AND** the trigger SHALL have `aria-haspopup="menu"` and dynamic
  `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the sign-in menu on trigger click, close it on outside
click, Escape, or submit, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the trigger, right-aligned
  with it (white card 320px, shadow, small white caret triangle near its
  top-right, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Submitting the form closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates the "Sign in" submit button
- **THEN** the menu SHALL close (the demo form is a non-navigating
  placeholder — no HTTP submit required, but closing is required)

### Requirement: Sign-in form

The system SHALL render the four reference form controls in order inside the
menu, mirroring the reference markup exactly: email address, password,
remember-me checkbox, and a full-width submit button.

#### Scenario: Form fields in order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL contain, in order:
  1. a labeled "Email address" text input with placeholder
     "email@example.com"
  2. a labeled "Password" password input with placeholder "Password"
  3. a "Remember me" checkbox
  4. a full-width submit button labeled "Sign in" (lowercase "in", unlike
     the trigger's "Sign In")
- **AND** each input SHALL use the reference field styling: 52px height,
  white background, 16px text, `border-radius: 4px`, 2px border
  `rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`), placeholder `rgba(0,0,0,.4)`
- **AND** each label SHALL be associated with its input (htmlFor/id
  pairing)

### Requirement: Accessibility

The system SHALL expose dropdown semantics to assistive technology.

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button and menu are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** the form fields SHALL have programmatic labels (htmlFor/id)

### Requirement: Footer

The system SHALL render the mandatory monorepo footer with the Component
Dock credit link (the source demo has no footer — this is a monorepo
addition per conventions.md).

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer area loads
- **THEN** the footer SHALL contain a link to
  `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app passkey` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #06" (black, 28px Roboto, centered) on
      flat `#fafafa` background
- [ ] Trigger is brand pink `#fa697c` (hover `#f83851`), radius 5px, padding
      12px 16px, white "Sign In" text, soft shadow, standard caret visible
- [ ] Menu opens right-aligned under the trigger (margin-top 20px), white
      card 320px, shadow `0 10px 34px -20px rgba(0,0,0,.41)`, white caret
      near top-right (`right: 35px`); centers + `margin-top: 70px` on small
      screens
- [ ] Form renders in order: "Email address" (placeholder email@example.com),
      "Password" (placeholder Password), "Remember me" checkbox, full-width
      "Sign in" submit — reference field styling (52px, radius 4px, 2px
      `rgba(0,0,0,.05)` border)
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and submit
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/passkey` (provenance lives only here + TEMPLATES.md + PR)
