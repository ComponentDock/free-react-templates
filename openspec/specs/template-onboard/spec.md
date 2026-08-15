# Template: Onboard (Sign-Up Form Dropdown)

## Purpose

Onboard is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 07" demo design
(source: https://colorlib.com/wp/template/dropdown-07/), built under a
DIFFERENT name (Onboard) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page showcases a
sign-up / account-creation form dropdown — a blue "Sign Up" button
(Bootstrap-style caret) that opens a white card titled "Create Your Account"
with a Full Name field, an Email address field, a Password field, a "Remember
me" checkbox and an inline "Sign in" submit button — a minimal, functional
component-showcase page on a flat periwinkle-blue background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 07" — seventh demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 760). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey** (see
  `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`, `docs/templates/chime/`,
  `docs/templates/trolley/`, `docs/templates/passkey/`).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-07/`
  (HTTP 200, 15.6 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-07/` fails to connect — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet `css/style.css`
  (222 KB, 8282 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~150 lines, from the `body` rule at line 8135 through
  the `.btn-group .dropdown-menu::after` rule at line 8282); libs: jquery,
  popper, bootstrap.min.js, ionicons 4.5.6 (loaded but NOT used by this
  demo). Google Font **Roboto** (weights 400/500/700) loaded via a
  Cloudflare `/cf-fonts/s/roboto/` @font-face block in the preview HTML (for
  the recreation, use a Google Fonts `<link>` per conventions).
  `js/main.js` is only a `fullHeight` helper — no dropdown logic (Bootstrap
  handles it).
  Cross-checked against the TEMPLATES.md screenshot (`dropdown-07.jpg`,
  1200×972, viewed in browser) — all match. The demo brands itself
  "Dropdown #07"; the recreation uses the NEW name **Onboard**.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat **periwinkle-blue background `#79a0eb`**
  (the ftco `body` rule at line 8135 — this is the inverse of Dropdown
  06/Passkey's `#fafafa`, and matches Dropdown 04/Chime's white-on-periwinkle
  treatment). Centered WHITE heading "Dropdown #07" (28px Roboto, `#fff`,
  `.heading-section` with `mb-4 pb-md-4` margins — `mb-4`, NOT Passkey's
  `mb-5`). Below it a single centered column holding the trigger button
  (left-aligned inside the column). The button is
  `button.btn.btn-primary.dropdown-toggle` — Bootstrap base
  `position: relative; display: inline-block`, brand background `#4d80e4`
  (blue), `border-radius: 5px`, `padding: 12px 16px`, font-size 14px, white
  text "Sign Up", soft shadow `0px 10px 20px -6px rgba(0,0,0,.12)`;
  hover/focus background `#2161dd` (deeper blue). The standard Bootstrap
  caret IS PRESENT (`.dropdown-toggle::after` is NOT suppressed): a small
  solid triangle (`border-top: .3em solid`, `margin-left: .255em`,
  inline-block, 0×0) — the screenshot shows it as a ">" after the label.
  `aria-haspopup="true"`, `aria-expanded="false"`. The screenshot shows the
  menu OPEN (default demo state): white card with a small caret on its top
  edge pointing at the button, "Create Your Account" bold black title, three
  grey-bordered inputs, and a bottom row with a "Remember me" checkbox left
  and a blue "Sign in" button right.
- **The menu card** is a
  `<form class="dropdown-menu dropdown-menu-left px-4 pt-4">` — white,
  borderless, `min-width: 20rem` (320px), `padding: 1.5rem` top + sides
  (from `px-4 pt-4` — note NO bottom padding; the `.btn-group .dropdown-menu`
  base sets `padding: 0` and the utilities add it back), `margin-top: 20px`,
  LEFT-aligned under the trigger (`dropdown-menu-left`; Bootstrap base
  `left: 0; right: auto` — NOT `dropdown-menu-right` like Passkey), shadow
  `0 10px 34px -20px rgba(0,0,0,.41)`, with a small white caret triangle
  near its top-LEFT (`.dropdown-menu:after`, `top: -.7em`, `left: 30px`,
  `border-width: 0 .7em .8em .7em`, `border-bottom-color: #fff`; a
  translucent `rgba(0,0,0,.02)` duplicate `:before` at `top: -.8em` casts a
  soft shadow; both `z-index: -1`). NOTE: `left: 30px` here — NOT
  right-aligned like Passkey (`right: 35px`) or Trolley (`right: 20px`); the
  caret sits near the button's left edge. On ≤767.98px the menu centers
  under the trigger (`left: 50% !important; transform: translateX(-50%)
!important`), the caret centers too (`left: 50%; margin-left: -.7em`), and
  `margin-top: 70px`.
- **Form content (from live DOM, verbatim):** the menu is a real `<form>`
  (Bootstrap 4's "sign up" example):
  - `div.heading-title` (unstyled wrapper — no CSS rule) → `h3` "Create
    Your Account" (Bootstrap base `h3` = 1.75rem/28px; ftco `h1-h5` rule:
    Roboto, `font-weight: 400`, `color: #000`, `line-height: 1.5`).
  - `div.form-group` → `label[for=exampleDropdownFormFullName]` "Full Name"
    - `input[type=email].form-control#exampleDropdownFullName` placeholder
      "John Doe". (SOURCE BUG: label `for` points at
      `exampleDropdownFormFullName` but the input id is
      `exampleDropdownFullName` — fix the pairing in the recreation with a
      matching id; also the source uses `type=email` for a name field — use
      `type=text`.)
  - `div.form-group` → `label[for=exampleDropdownFormEmail2]` "Email
    address" + `input[type=email].form-control#exampleDropdownFormEmail2`
    placeholder "email@example.com".
  - `div.form-group` → `label[for=exampleDropdownFormPassword2]` "Password"
    - `input[type=password].form-control#exampleDropdownFormPassword2`
      placeholder "Password".
  - `div.d-flex.justify-content-between.align-items-center` →
    - `div.form-check.mb-4` → `input[type=checkbox].form-check-input#dropdownCheck2`
      - `label.form-check-label[for=dropdownCheck2]` "Remember me".
    - `button[type=submit].btn.btn-primary` "Sign in" — NOTE: NOT
      `btn-block` (unlike Passkey); it is an inline button sitting in the
      flex row with the checkbox, right-aligned.
      Inputs: `.form-control` — `height: 48px !important` (NOT Passkey's
      52px), `background: #fff`, `color: rgba(0,0,0,.7)`, `font-size: 16px`,
      `border-radius: 4px`, `border: 2px solid rgba(0,0,0,.05)` (focus:
      `rgba(0,0,0,.1)`, no shadow), placeholder `rgba(0,0,0,.4)`. Labels:
      Bootstrap default (inline-block, `margin-bottom: .5rem`, ~14px).
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding **5em 0** — NOT 7em like
     Passkey/Trolley) → `div.container` (max-width 1140px).
  2. Header row (`div.row` → `div.col-md-12.text-center`):
     `h2.heading-section.mb-4.pb-md-4` "Dropdown #07" (28px, **#fff
     white**, centered — `mb-4`, not Passkey's `mb-5`).
  3. Demo row (`div.row.justify-content-center` →
     `div.col-md-12.d-flex.justify-content-center`): `div.btn-group`
     containing:
     - Trigger: `button.btn.btn-primary.dropdown-toggle` "Sign Up"
       (`data-toggle="dropdown"`, `aria-haspopup="true"`,
       `aria-expanded="false"`, standard Bootstrap caret PRESENT, brand
       blue `#4d80e4`, hover `#2161dd`).
     - Menu: `form.dropdown-menu.dropdown-menu-left.px-4.pt-4` — white card
       (320px, shadow, caret top-LEFT `left: 30px`), left-aligned under the
       trigger, containing the heading-title, the three form controls
       (full name, email, password), and the flex row with the remember-me
       checkbox + inline "Sign in" submit.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Source                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Page background | `#79a0eb` (flat periwinkle/cornflower blue — confirmed in screenshot; INVERSE of Passkey's `#fafafa`, matches Chime's white-on-periwinkle)                                                                                                                                                                                                                                                                                                                                        | ftco `body` rule (line 8135)                     |
| Brand blue      | `#4d80e4` (trigger button, submit button, plain `a` link color); hover/focus `#2161dd`                                                                                                                                                                                                                                                                                                                                                                                            | `.btn.btn-primary` + `a` ftco rule               |
| Trigger button  | `.btn.btn-primary.dropdown-toggle` — brand blue `#4d80e4`, `border-radius: 5px`, `padding: 12px 16px`, font-size 14px, weight 400, white text "Sign Up", shadow `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`; hover/focus `#2161dd`; standard Bootstrap caret PRESENT (`::after` triangle, NOT suppressed)                                                                                                                                                         | `.btn` + `.btn.btn-primary` + BS base            |
| Heading color   | `#fff` (WHITE — on the periwinkle background, NOT black like Passkey), 28px Roboto, centered, `mb-4 pb-md-4` (1.5rem/1.5rem bottom margins)                                                                                                                                                                                                                                                                                                                                       | `.heading-section`                               |
| Menu card       | `min-width: 20rem` (320px; centered + `margin-top: 70px` on ≤767.98px), bg `#fff`, border none, `padding: 1.5rem` top+sides via `px-4 pt-4` (0 bottom), `margin-top: 20px`, left-aligned (`dropdown-menu-left`), shadow `0 10px 34px -20px rgba(0,0,0,.41)`; white caret triangle near top-LEFT (`left: 30px`; `:after` `top: -.7em` `border-bottom-color: #fff`, `:before` shadow-cast duplicate at `top: -.8em` `rgba(0,0,0,.02)`, both `z-index: -1`; caret centers on mobile) | `.btn-group .dropdown-menu` + `::before/::after` |
| Form inputs     | `.form-control` — `height: 48px`, bg `#fff`, `color: rgba(0,0,0,.7)`, `font-size: 16px`, `border-radius: 4px`, `border: 2px solid rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`, no shadow), placeholder `rgba(0,0,0,.4)`                                                                                                                                                                                                                                                              | `.form-control` ftco override                    |
| Card title      | `h3` "Create Your Account" — 28px (1.75rem), Roboto, weight 400, `color: #000`, `line-height: 1.5`, Bootstrap `margin-bottom: .5rem`; wrapper `div.heading-title` is UNSTYLED (no CSS rule)                                                                                                                                                                                                                                                                                       | BS base `h3` + ftco `h1-h5` rule                 |
| Labels          | Bootstrap default label (inline-block, `margin-bottom: .5rem`)                                                                                                                                                                                                                                                                                                                                                                                                                    | BS base `label`                                  |
| Checkbox row    | `div.d-flex.justify-content-between.align-items-center` → `div.form-check.mb-4` (input + label "Remember me") left, submit button right                                                                                                                                                                                                                                                                                                                                           | BS base `.form-check*` + flex utilities          |
| Submit button   | `button[type=submit].btn.btn-primary` "Sign in" — INLINE (NOT `btn-block`), brand blue `#4d80e4`, hover `#2161dd`, same `.btn` shape as the trigger (radius 5px, 12px 16px)                                                                                                                                                                                                                                                                                                       | `.btn.btn-primary`                               |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8)                                                                                                                                                                                                                                                                                                                                                                                      | ftco `body` + preview HTML @font-face block      |
| Section rhythm  | **5em 0** padding (NOT 7em like Passkey/Trolley); container max-width 1140px                                                                                                                                                                                                                                                                                                                                                                                                      | `.ftco-section`, `.container`                    |
| Icons           | None — this demo uses no icons (ionicons is loaded but unused)                                                                                                                                                                                                                                                                                                                                                                                                                    | preview HTML                                     |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Onboard app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Onboard — Sign-Up Form Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #07".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #07"
- **AND** the heading SHALL use the brand font (Roboto), WHITE color (#fff),
  28px, with generous bottom margins (mb-4 pb-md-4 equivalent)

### Requirement: Sign Up trigger

The system SHALL render the brand-blue "Sign Up" trigger button exactly like
the reference: a standard Bootstrap-style dropdown toggle with caret, on the
flat periwinkle `#79a0eb` page background.

#### Scenario: Trigger renders with label and caret

- **GIVEN** the demo section is rendered
- **WHEN** the trigger area loads
- **THEN** a button SHALL be visible with the text "Sign Up"
- **AND** the button SHALL have the brand background `#4d80e4`,
  `border-radius: 5px`, `padding: 12px 16px`, white text, and a soft shadow
  `0px 10px 20px -6px rgba(0,0,0,.12)`
- **AND** the button SHALL show the standard dropdown caret (a small solid
  triangle after the label — NOT suppressed)
- **AND** the trigger SHALL have `aria-haspopup="menu"` and dynamic
  `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the account form menu on trigger click, close it on
outside click, Escape, or submit, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the trigger, LEFT-aligned
  with it (white card 320px, shadow, small white caret triangle near its
  top-left, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu or presses Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

#### Scenario: Submitting the form closes the menu

- **GIVEN** the menu is open
- **WHEN** the user activates the "Sign in" submit button
- **THEN** the menu SHALL close (the demo form is a non-navigating
  placeholder — no HTTP submit required, but closing is required)

### Requirement: Account creation form

The system SHALL render the reference form controls in order inside the
menu, mirroring the reference markup exactly: a "Create Your Account" title,
full name, email address, password, remember-me checkbox, and an inline
submit button.

#### Scenario: Form fields in order

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL contain, in order:
  1. a heading "Create Your Account" (28px, black, Roboto)
  2. a labeled "Full Name" text input with placeholder "John Doe"
  3. a labeled "Email address" email input with placeholder
     "email@example.com"
  4. a labeled "Password" password input with placeholder "Password"
  5. a row with a "Remember me" checkbox on the LEFT and a submit button
     labeled "Sign in" on the RIGHT (inline — NOT full-width)
- **AND** each input SHALL use the reference field styling: 48px height,
  white background, 16px text, `border-radius: 4px`, 2px border
  `rgba(0,0,0,.05)` (focus `rgba(0,0,0,.1)`), placeholder `rgba(0,0,0,.4)`
- **AND** each label SHALL be associated with its input (htmlFor/id
  pairing — fix the source's mismatched Full Name id)

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

- [ ] `npm run verify:app onboard` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #07" (WHITE, 28px Roboto, centered) on
      flat periwinkle `#79a0eb` background (NOT #fafafa/black — that's
      Passkey)
- [ ] Trigger is brand blue `#4d80e4` (hover `#2161dd`), radius 5px, padding
      12px 16px, white "Sign Up" text, soft shadow, standard caret visible
- [ ] Menu opens LEFT-aligned under the trigger (margin-top 20px), white
      card 320px, shadow `0 10px 34px -20px rgba(0,0,0,.41)`, white caret
      near top-left (`left: 30px`); centers + `margin-top: 70px` on small
      screens
- [ ] Form renders in order: "Create Your Account" title, "Full Name"
      (placeholder John Doe, type=text, corrected id), "Email address"
      (placeholder email@example.com), "Password" (placeholder Password),
      "Remember me" checkbox + inline "Sign in" submit in a flex row —
      reference field styling (48px, radius 4px, 2px `rgba(0,0,0,.05)`
      border)
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and submit
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/onboard` (provenance lives only here + TEMPLATES.md + PR)
