# Template: Inquire (Quote Form Dropdown)

## Purpose

Inquire is a single-page UI-component demo template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dropdown 10" demo design
(source: https://colorlib.com/wp/template/dropdown-10/), built under a
DIFFERENT name (Inquire — request-a-quote / consultation semantics) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page showcases a button-triggered quote-request form
dropdown: a centered olive "Request A Quote" button (with the standard white
caret) that opens a left-aligned white card below it holding an olive header
strip ("Consultation") and a stacked contact form (Full Name, Email Address,
Subject, Message, "Send A Message" submit) — a minimal, functional
component-showcase page on a flat light-gray background.

## Design reference (replication findings)

- **Original:** ColorLib "Dropdown 10" — tenth demo in the "Bootstrap
  Dropdowns (20)" series. TEMPLATES.md has ONE copy (line 763). Series
  siblings: Dropdown 01 was prepped as **Menubar**, Dropdown 02 as
  **Popmenu**, Dropdown 03 as **Skycast**, Dropdown 04 as **Chime**,
  Dropdown 05 as **Trolley**, Dropdown 06 as **Passkey**, Dropdown 07 as
  **Onboard**, Dropdown 08 as **Marquee**, Dropdown 09 as **Glimpse** (see
  `docs/templates/menubar/` … `docs/templates/glimpse/`). This prep:
  Dropdown 10 → **Inquire**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-10/`
  (HTTP 200, 15.2 KB HTML). NOTE: the naive
  `https://preview.colorlib.com/theme/dropdown-10/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet `css/style.css`
  (222 KB, 8294 lines, ftco-style Bootstrap 4 theme; the template-specific
  rules are the LAST ~145 lines, from the ftco `body` rule at line ~8150
  through `.btn-group .dropdown-menu:after` at line 8294); libs: jquery,
  popper, bootstrap.min.js, js/main.js (only a `fullHeight` helper — no
  dropdown logic, Bootstrap handles it); ionicons 4.5.6 CSS is loaded but
  NOT used (no icons in the markup). Google Font **Roboto** (weights
  400/500/700) via a Cloudflare `/cf-fonts/s/roboto/` @font-face block in
  the preview HTML (for the recreation, use a Google Fonts `<link>` per
  conventions). Cross-checked against the TEMPLATES.md screenshot
  (`dropdown-10.jpg`, 1200×972, viewed in browser) — all match.
- **Visual design (from live DOM + CSS tokens + screenshot):** minimalist
  component-showcase page on a flat **light-gray background `#fafafa`**
  (the ftco `body` rule — SAME treatment as Passkey/Marquee/Glimpse).
  Centered BLACK heading "Dropdown #10" (28px Roboto, `#000`,
  `.heading-section` with **`mb-4`** (1.5rem) — NOTE `mb-4`, NOT Glimpse's
  `mb-5 pb-md-4`). Below it a single centered column holding the demo
  group:
  - **Trigger** = a real `<button type="button" class="btn btn-primary
dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
aria-expanded="false">` with text "Request A Quote". ftco `.btn`
    override: `padding: 12px 16px; border-width: 1px; border-radius: 5px;
font-size: 14px; font-weight: 400; box-shadow: 0px 10px 20px -6px
rgba(0,0,0,.12); position: relative; margin-bottom: 20px`. Brand fill:
    `.btn.btn-primary { background: #94aa2a !important; border-color:
#94aa2a !important; color: #fff }`, hover/focus `#708120`. **The
    standard Bootstrap caret IS PRESENT** (`.dropdown-toggle::after` base
    rule at line 2531 untouched — white on the olive button; NOT suppressed
    like Marquee). No split/bar/logo — the button is the whole trigger.
  - **Menu** = `form.dropdown-menu.dropdown-menu-left` — **LEFT-aligned**
    (Bootstrap base `left: 0; right: auto` — the INVERSE of Glimpse's
    right-aligned card), `border: none`, bg `#fff`, shadow `0px 10px 34px
-20px rgba(0,0,0,.41)`, **`padding: 0`** (the form supplies its own
    spacing — NOT Glimpse's 20px card padding), **`min-width: 20rem`
    (320px)**, `margin-top: 20px`. Brand-colored caret triangle near its
    top-LEFT (`.btn-group .dropdown-menu:after`, `left: 30px`, `top: -.7em`,
    `border-width: 0 .7em .8em .7em`, **`border-bottom-color: #94aa2a`** —
    brand olive, NOT Glimpse's white; a translucent `rgba(0,0,0,.02)`
    duplicate `:before` at `top: -.8em` casts a soft shadow; both
    `z-index: -1`). **MOBILE media query (max-width: 767.98px):** the menu
    CENTERS under the button (`left: 50% !important; transform:
translateX(-50%) !important`), `margin-top: 70px`, and the caret moves
    to `left: 50%; margin-left: -.7em` (same treatment as Onboard/Glimpse).
  - **Header strip** = `div.heading-title.py-4.px-4` (1.5rem padding all
    around): bg `#94aa2a` (olive), `margin-bottom: 20px`, `border-radius:
4px 4px 0 0` (rounded TOP corners only, flush with the card's top) →
    `h3.mb-0` "Consultation" (20px, weight 700, white).
  - **Form body** = `div.px-4` (1.5rem horizontal padding), four
    `.form-group` (Bootstrap `margin-bottom: 1rem`) stacked:
    1. `input.form-control` placeholder "Full Name"
    2. `input.form-control` placeholder "Email Address"
    3. `input.form-control` placeholder "Subject"
    4. `textarea.form-control` rows=3 placeholder "Message"
       then `button.btn.btn-primary` "Send A Message" (same olive styling;
       its `margin-bottom: 20px` creates the card's bottom gap since the card
       has padding 0). Form controls (`.form-control` override): `height: 48px`,
       bg `#fff`, text `rgba(0,0,0,.7)`, font-size 16px, `border-radius: 4px`,
       **`border: 2px solid rgba(0,0,0,.05)`** (subtle light border), focus →
       `border-color: rgba(0,0,0,.1)`, no shadow, no outline; placeholder
       `rgba(0,0,0,.4)`; textarea `height: inherit` (auto).
- **Section order (1:1, from live demo DOM):**
  1. Section (`section.ftco-section`, padding **3em 0** — NOT Glimpse's 7em
     nor Marquee's 5em) → `div.container` (max-width 1140px).
  2. Header row (`div.row` → `div.col-md-12.text-center`):
     `h2.heading-section.mb-4` "Dropdown #10" (28px, **#000 black**,
     centered — the light-background treatment, **`mb-4`** only, no
     `pb-md-4`).
  3. Demo row (`div.row.justify-content-center` →
     `div.col-md-12.d-flex.justify-content-center`): `div.btn-group`
     containing:
     - Trigger: `button.btn.btn-primary.dropdown-toggle` "Request A Quote"
       (olive `#94aa2a`, radius 5px, padding 12px 16px, 14px font, shadow
       `0px 10px 20px -6px rgba(0,0,0,.12)`, margin-bottom 20px, WHITE
       caret present, `aria-haspopup="true"` / `aria-expanded="false"`).
     - Menu: `form.dropdown-menu.dropdown-menu-left` — white card (320px
       min-width, padding 0, shadow, brand-olive caret top-left at
       `left: 30px`), LEFT-aligned under the trigger, containing the olive
       "Consultation" header strip + the 4-field form + olive "Send A
       Message" submit. On mobile (<768px) the card centers under the
       button with margin-top 70px.
  4. (Monorepo addition, source has none) minimal footer with the mandatory
     Component Dock credit link — see conventions.md.

## Design tokens (from the reference)

| Token           | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Page background | `#fafafa` (flat light gray — SAME as Passkey/Marquee/Glimpse)                                                                                                                                                                                                                                                                                                                                                                                               | ftco `body` rule (~line 8150)                     |
| Brand olive     | `#94aa2a` (button background AND border, menu header strip bg, menu caret, plain `a` link color); hover/focus `#708120`                                                                                                                                                                                                                                                                                                                                     | `.btn.btn-primary` + `.heading-title` + `a` rules |
| Button          | `btn.btn-primary` — `padding: 12px 16px`, `border-width: 1px`, `border-radius: 5px`, `font-size: 14px`, `font-weight: 400`, shadow `0px 10px 20px -6px rgba(0,0,0,.12)`, `margin-bottom: 20px`, white text; **standard caret PRESENT** (white triangle, base `.dropdown-toggle::after` untouched)                                                                                                                                                           | `.btn` + `.btn.btn-primary`                       |
| Menu card       | `min-width: 20rem` (320px), bg `#fff`, border none, **`padding: 0`** (form provides spacing — NOT Glimpse's 20px), `margin-top: 20px`, LEFT-aligned (`dropdown-menu-left` → `left: 0; right: auto`), shadow `0px 10px 34px -20px rgba(0,0,0,.41)`; **brand-olive** caret triangle near top-LEFT (`left: 30px`; `:after` `top: -.7em` `border-bottom-color: #94aa2a`, `:before` shadow-cast duplicate at `top: -.8em` `rgba(0,0,0,.02)`, both `z-index: -1`) | `.btn-group .dropdown-menu` + `::before/::after`  |
| Mobile menu     | `@media (max-width: 767.98px)`: menu `left: 50% !important; transform: translateX(-50%) !important`, `margin-top: 70px`; caret `left: 50%; margin-left: -.7em` (menu CENTERS under the button — same as Onboard/Glimpse)                                                                                                                                                                                                                                    | `.btn-group .dropdown-menu` media query           |
| Header strip    | `div.heading-title` — bg `#94aa2a`, `margin-bottom: 20px`, `border-radius: 4px 4px 0 0` (rounded top corners only); `h3` 20px, weight 700, white, `mb-0`; strip padding `py-4 px-4` (1.5rem)                                                                                                                                                                                                                                                                | `.btn-group .heading-title`                       |
| Form controls   | `.form-control` — `height: 48px`, bg `#fff`, text `rgba(0,0,0,.7)`, font-size 16px, `border-radius: 4px`, **`border: 2px solid rgba(0,0,0,.05)`**; focus/active → `border-color: rgba(0,0,0,.1)`, no shadow/outline; placeholder `rgba(0,0,0,.4)`; textarea `height: inherit` (auto); `.form-group` margin-bottom 1rem                                                                                                                                      | `.form-control` + `.form-group`                   |
| Heading color   | `#000` (BLACK — on the light `#fafafa` background), 28px Roboto, centered, **`mb-4`** (1.5rem bottom margin — NOTE: `mb-4`, NOT Glimpse's `mb-5 pb-md-4`)                                                                                                                                                                                                                                                                                                   | `.heading-section`                                |
| Font family     | `"Roboto", Arial, sans-serif` (weights 400/500/700 via Cloudflare @font-face; body 18px/1.8, body text gray)                                                                                                                                                                                                                                                                                                                                                | ftco `body` + preview HTML @font-face block       |
| Section rhythm  | **3em 0** padding (NOT Glimpse's 7em, NOT Marquee's 5em); container max-width 1140px                                                                                                                                                                                                                                                                                                                                                                        | `.ftco-section`, `.container`                     |
| Icons           | NONE — this demo uses no icons (ionicons is loaded but unused, same as Glimpse); the only adornments are the standard caret on the button and the brand caret on the card                                                                                                                                                                                                                                                                                   | preview HTML (ionicons loaded but unused)         |

## Requirements

### Requirement: Page composition

The system SHALL render a single-page demo with the demo content in a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Inquire app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the demo section inside the main landmark
- **AND** the document title SHALL be "Inquire — Quote Form Dropdown"

### Requirement: Section heading

The system SHALL render the page heading centered at the top of the section,
mirroring the reference heading "Dropdown #10".

#### Scenario: Page heading

- **GIVEN** the page is rendered
- **WHEN** the demo section loads
- **THEN** a level-2 heading SHALL be visible, centered, with the text
  "Dropdown #10"
- **AND** the heading SHALL use the brand font (Roboto), BLACK color (#000),
  28px, with a 1.5rem bottom margin (mb-4 equivalent — NOT Glimpse's mb-5)

### Requirement: Trigger button

The system SHALL render the centered olive "Request A Quote" button with the
standard white caret and full dropdown semantics.

#### Scenario: Button renders with caret

- **GIVEN** the demo section is rendered
- **WHEN** the demo row loads
- **THEN** a centered button SHALL be visible with the text "Request A Quote"
- **AND** the button SHALL use the brand fill `#94aa2a` (background AND
  border), white text, `border-radius: 5px`, padding 12px 16px, 14px font
  size, and the reference shadow `0px 10px 20px -6px rgba(0,0,0,.12)`
- **AND** the button SHALL show the standard dropdown caret (a small white
  triangle — it is NOT suppressed in this demo, unlike Marquee)
- **AND** on hover/focus the button SHALL darken to `#708120`
- **AND** the trigger SHALL be a semantic `<button>` with
  `aria-haspopup="menu"` and dynamic `aria-expanded` (menu closed → `false`)

### Requirement: Dropdown menu behavior

The system SHALL open the form card on trigger click, close it on outside
click, Escape, or button re-click, and keep only one menu open at a time.

#### Scenario: Open and close the menu

- **GIVEN** the trigger button with `aria-haspopup="menu"`
- **WHEN** the user clicks the trigger
- **THEN** the menu SHALL open, directly below the button, LEFT-aligned
  (white card, min-width 320px, padding 0, shadow
  `0px 10px 34px -20px rgba(0,0,0,.41)`, brand-olive caret triangle near its
  top-left at `left: 30px`, per the reference)
- **AND** `aria-expanded` SHALL become `true`
- **WHEN** the user clicks outside the menu, presses Escape, or clicks the
  trigger again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`

### Requirement: Consultation header

The system SHALL render the olive header strip with the title "Consultation"
at the top of the open card.

#### Scenario: Header strip

- **GIVEN** the dropdown menu is open
- **THEN** the menu SHALL show a header strip at the top with brand-olive
  background `#94aa2a` and rounded TOP corners only (4px 4px 0 0)
- **AND** the strip SHALL contain the heading "Consultation" in white,
  20px, weight 700
- **AND** the strip SHALL have 1.5rem padding and a 20px bottom margin
  separating it from the form body

### Requirement: Quote request form fields

The system SHALL render the four stacked form controls (Full Name, Email
Address, Subject, Message) with the reference styling.

#### Scenario: Form controls

- **GIVEN** the dropdown menu is open
- **THEN** the form SHALL show four stacked controls, in order: Full Name
  (text input), Email Address (email input), Subject (text input), and a
  Message textarea
- **AND** each control SHALL be 48px tall (textarea auto-height), white
  background, 16px text, `border-radius: 4px`, and a 2px border in
  `rgba(0,0,0,.05)`
- **AND** each control SHALL show its placeholder in `rgba(0,0,0,.4)`
- **AND** on focus the control border SHALL darken to `rgba(0,0,0,.1)`
  with no box shadow or outline

### Requirement: Form submission

The system SHALL submit the quote request client-side and show a success
state (the source demo has no backend — the monorepo convention is a
client-side success message, never a dead button).

#### Scenario: Successful submission

- **GIVEN** the user has filled all four fields with valid values
- **WHEN** the user presses the "Send A Message" submit button
- **THEN** the form SHALL show a success message (e.g. "Thank you — your
  request has been sent") and the fields SHALL be cleared or disabled

#### Scenario: Validation

- **GIVEN** the form is incomplete or the email is invalid
- **WHEN** the user presses the "Send A Message" submit button
- **THEN** the form SHALL NOT submit and SHALL show per-field error messages
- **AND** the invalid fields SHALL be indicated (e.g. aria-invalid + error
  text), matching the monorepo form conventions (zod validation)

### Requirement: Mobile menu behavior

The system SHALL center the menu card under the button on small viewports,
mirroring the reference media query.

#### Scenario: Menu centers on mobile

- **GIVEN** the viewport is narrower than 768px (max-width: 767.98px
  equivalent)
- **WHEN** the menu is open
- **THEN** the menu SHALL be horizontally centered under the button
  (left 50% + translateX(-50%) equivalent) with `margin-top: 70px`
- **AND** the caret SHALL move to the horizontal center of the card
  (left 50%, margin-left -.7em equivalent)

### Requirement: Accessibility

The system SHALL expose dropdown semantics and labeled form controls to
assistive technology (the source markup uses placeholder-only inputs — the
recreation SHALL add real labels/aria-labels per conventions).

#### Scenario: Screen reader exposure

- **GIVEN** the trigger button, menu, and form are rendered
- **WHEN** assistive technology inspects the dropdown
- **THEN** the trigger SHALL expose `aria-haspopup="menu"` and reflect the
  open state via `aria-expanded`
- **AND** the menu SHALL be associated with the trigger (e.g. `aria-controls`
  / `id` pairing)
- **AND** every form control SHALL be programmatically labeled (e.g.
  `aria-label` matching its placeholder: Full Name, Email Address, Subject,
  Message)

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

- [ ] `npm run verify:app inquire` passes (typecheck + lint + knip + fallow +
      100% coverage tests + build)
- [ ] Page renders heading "Dropdown #10" (BLACK, 28px Roboto, centered,
      mb-4/1.5rem bottom margin) on flat light-gray `#fafafa` background
- [ ] Section padding is **3em 0** (NOT Glimpse's 7em, NOT Marquee's 5em)
- [ ] Centered "Request A Quote" button is olive `#94aa2a` (bg AND border),
      white text, radius 5px, padding 12px 16px, 14px, shadow
      `0px 10px 20px -6px rgba(0,0,0,.12)`, margin-bottom 20px, hover
      `#708120`, with the standard WHITE caret (present, NOT suppressed)
- [ ] Menu opens LEFT-aligned under the button (margin-top 20px), white
      card min-width 320px, **padding 0**, shadow
      `0px 10px 34px -20px rgba(0,0,0,.41)`, brand-olive caret near top-left
      (`left: 30px`)
- [ ] Olive header strip: `#94aa2a` bg, rounded top corners only, "Consultation"
      white 20px/700, 1.5rem padding, 20px bottom margin
- [ ] Four stacked controls (Full Name text, Email Address email, Subject
      text, Message textarea): 48px (textarea auto), 2px `rgba(0,0,0,.05)`
      borders, radius 4px, placeholder `rgba(0,0,0,.4)`, focus border
      `rgba(0,0,0,.1)` no shadow
- [ ] "Send A Message" submit: olive `#94aa2a`, white; submit shows
      client-side success message; invalid/incomplete submits show per-field
      errors (zod validation per conventions)
- [ ] On mobile (<768px) the menu centers under the button
      (translateX(-50%) equivalent) with margin-top 70px and centered caret
- [ ] `aria-haspopup`/`aria-expanded` flip on open/close; menu closes on
      outside click, Escape, and trigger re-click; all controls labeled
- [ ] No icons in the demo (ionicons loaded but unused in the source)
- [ ] No images/placeholders needed (this demo is purely CSS-driven — no
      picsum seeds required)
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib reference
      anywhere in `apps/inquire` (provenance lives only here + TEMPLATES.md + PR)
