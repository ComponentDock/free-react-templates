# Template: Gateway (Signup Form Modal)

## Purpose

Gateway is a single-page signup-form modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 06" free template (source: https://colorlib.com/wp/template/modal-06/),
built under a DIFFERENT name (**Gateway** — the sixth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), and Doorway
(Modal 05); a signup modal is the gateway a new user passes through into an
account — per the monorepo naming mandate: never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 06" and a teal
4px-radius button "Launch Modal 06" that opens a centered Bootstrap modal
(`modal-dialog-centered`, max-width **900px**, SQUARE corners) split into
two equal panels: a **teal `#5eb7b7` left panel** with a small beer glyph
top-left, the headline "Plan your activities and control your progress
online", and a huge white bicycle line-icon below; and a **navy `#1b2a49`
right panel** with a "Create Your Account" heading and a signup form —
"Full Name" / "Email Address" / "Password" underline-style inputs (no
borders, only a 1px translucent-white bottom rule), a small square
"fill-checkbox" ("I agree all statements") that fills mint `#47e4bb` when
checked, a full-width teal "Sign Up" submit button, and an underlined
teal "I'm already a member" login link. The whole template is ONE
interactive surface — the launch button and the signup modal. Gateway
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 06" is FORBIDDEN as the app
> name. **Gateway** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 06". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 805). Free signup-form
  modal component template. The `modal-06` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-06/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–05) is
  `https://preview.colorlib.com/theme/bootstrap/modal-06/` (HTTP 200, 16.9KB
  HTML, `<title>` "Modal 06"). Stylesheets: `css/style.css` (224.5KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB,
  starting at the `body { font-family: "Roboto" ... }` rule; token source),
  `css/ionicons.min.css` (close × + the beer/bicycle glyphs),
  `css/flaticon.css` (loaded, no flaticon classes used — dead include).
  Roboto (300/400/700) via cf-fonts @font-face blocks in the head. `js/main.js`:
  `$('[data-toggle="tooltip"]').tooltip()` (NO tooltip elements exist in this
  template — dead code), `fullHeight()` sets `.js-fullheight` to the window
  height (recreate with `min-h-screen` flex centering), and the
  `$('#exampleModalCenter').modal('show')` line is COMMENTED OUT — the modal
  opens only via the launch button. Structure, copy, and tokens below are
  from the live DOM + `style.css`. Screenshot (`modal-06.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the modal OPEN: flat dark-grey backdrop
  over the white page, a SQUARE-cornered ~900px card split vertically 50/50 —
  LEFT teal `#5eb7b7` panel: small white glyph top-left, white sentence
  "Plan your activities and control your progress online.", large white
  bicycle line-icon centered below; RIGHT navy `#1b2a49` panel: white
  "Create Your Account" heading, three underline-style inputs (FULL NAME
  "John Doe", EMAIL ADDRESS "john@doe@gmail.com", PASSWORD placeholder), a
  small square outline checkbox "I agree all statements", a full-width teal
  "Sign Up" button, and the "I'm already a member" link below; a white ×
  close button sits at the card's top-right corner on a translucent black
  square.
- **Visual design (screenshot + live render):** clean, flat, modern — one
  centered CTA on a white page, then one two-tone signup dialog. Brand color
  is teal **`#5eb7b7`** (launch + Sign Up buttons, left panel background,
  link color, link hover) against deep navy **`#1b2a49`** (right panel), with
  a mint **`#47e4bb`** checkbox fill. Sans-serif Roboto throughout
  (300/400/700; body 14px/1.8, headings weight 400/line-height 1.5). No
  photos — the "img" class on both panels carries NO background image
  (renders solid color). Pure form UI + two line icons (beer, bicycle).
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 06" (Roboto; `.ftco-section h2` sets
       margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 06"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 4px }` → **4px radius (NOT a 40px pill like
       Modal 05)**, bg `#5eb7b7`, 1px `#5eb7b7` border, WHITE text, padding
       16px 24px, Roboto 15px, sentence case — NOT uppercase).
  2. **Signup modal** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; default dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (max-width **900px** — wide, vs Modal 05's 450px; vertically centered)
     → `div.modal-content` (border none, padding 0, **border-radius 0 —
     SQUARE corners**, `font-size: 14px`, `box-shadow: 0px 10px 34px -15px
rgba(0,0,0,0.24)`, bg `#fff`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close.d-flex.align-items-center.justify-content-center` —
       absolute top 0 right 0, 40×40, z-index 1, **background
       `rgba(0,0,0,0.1)`, WHITE `ion-ios-close` glyph** (DIFFERENT from
       Modal 05's translucent-black × with no background), `aria-label="Close"`.
     - `div.row.no-gutters` (two equal columns, no gutters):
       - **Left panel** — `div.col-md-6.d-flex` →
         `div.modal-body.p-5.img.d-flex.color-1.text-center.d-flex.align-items-center`
         (bg **`#5eb7b7`**; `.img` class sets `background-size: cover` etc.
         but NO background-image is set anywhere → renders SOLID teal;
         padding 3rem (p-5); content centered) → `div.text.w-100`:
         - `span.icon-2.ion-ios-beer` — absolute top 0 left 20px, font-size
           30px, glyph color inherited `rgba(255,255,255,0.8)` (renders as a
           small clipboard-like mark; source class is ion-ios-beer).
         - `h5` — "Plan your activities and control your progress online"
           (Roboto, weight 400, line-height 1.5, inherited
           `rgba(255,255,255,0.8)`).
         - `div.icon` → `span.ion-ios-bicycle` — font-size **10vw** (100px
           on ≤767.98px), line-height 1, white line icon centered.
       - **Right panel** — `div.col-md-6.d-flex` →
         `div.modal-body.p-5.img.d-flex.align-items-center.color-2` (bg
         **`#1b2a49`**) → `div.text.w-100.py-0.py-md-5` (no vertical padding
         on mobile, 3rem on md+):
         - `h3.mb-4` — "Create Your Account" (Roboto, weight 400,
           `rgba(255,255,255,0.8)`, margin-bottom 1.5rem).
         - `form.signup-form`:
           - 3 × `div.form-group.mb-3` (margin-bottom 1rem):
             - `label.label[for="name"]` "Full Name" (uppercase, 12px,
               letter-spacing 1px, inherited `rgba(255,255,255,0.8)`) +
               `input.form-control` (type text, placeholder "John Doe").
             - `label.label[for="email"]` "Email Address" + `input.form-control`
               (type text — NOT `type="email"` — placeholder
               "john@doe@gmail.com" per the screenshot).
             - `label.label[for="password"]` "Password" + `input.form-control`
               (type password, placeholder "Password").
             - CASCADE NOTE: inside the modal, `.modal-content .form-control`
               (specificity 0-3-0, beats Bootstrap's `.form-control:focus`
               0-2-0) → **transparent background, border: none, border-radius
               0, color `rgba(255,255,255,0.7)`, padding 0, height 30px,
               border-bottom: 1px solid `rgba(255,255,255,0.1)`** — underline
               inputs; placeholders `rgba(255,255,255,0.2)`; NO visible focus
               ring/border change on focus (custom focus rule sets border
               `1px solid transparent` + `box-shadow: none`).
           - `div.form-group.d-md-flex` → `div.form-check.w-100.text-left` →
             `label.custom-control.fill-checkbox` (checkbox + description;
             `--color: #47e4bb`): `input.fill-control-input` (type checkbox,
             DISPLAYED: none — visually hidden but checkable) +
             `span.fill-control-indicator` (16×16, border-radius 3px,
             position absolute top 5px left 0, border 1px solid
             `rgba(255,255,255,0.4)`, background transparent w/ white check
             SVG data-URI at background-size 0%; when `:checked` →
             background-color `var(--color)` #47e4bb, border-color
             `var(--color)`, background-size 80% → mint square + white check)
             - `span.fill-control-description` "I agree all statements"
               (color `rgba(255,255,255,0.3)`; stays 0.3 when checked).
           - `div.form-group` →
             `button[type="submit"].form-control.btn.btn-primary.rounded.submit.px-3`
             "Sign Up" (full-width — form-control is width 100%; **52px
             tall** via `.modal-content .btn-primary { height: 52px }`; bg
             `#5eb7b7` !important, 1px `#5eb7b7` border, WHITE text;
             border-radius: custom `.btn { border-radius: 4px }` is the LAST
             rule → **4px, NOT a pill**).
           - `a[href="#"]` — "I'm already a member" (global custom
             `a { color: #5eb7b7 }` → **teal link on navy**; hover also
             `#5eb7b7` per `.modal-content .modal-body a:hover`; a login
             link, not an input).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): the `row.no-gutters` collapses —
    `col-md-6` stacks the LEFT teal panel on top and the navy form below; the
    big icon snaps to 100px; the right panel's inner text wrapper loses its
    vertical padding (`py-0`); the dialog keeps Bootstrap's mobile modal
    margins. No other layout changes — single column stack.
- **Design tokens:**
  - Brand teal **#5eb7b7** (`rgb(94,183,183)`) — `.btn-primary` bg + border
    (launch + Sign Up), `a` link color + hover, `.color-1` left panel bg.
  - Deep navy **#1b2a49** (`rgb(27,42,73)`) — `.color-2` right panel bg.
  - Mint accent **#47e4bb** (`rgb(71,228,187)`) — `.fill-checkbox --color`
    (checked checkbox fill).
  - White **#fff** — launch page (`section.ftco-section`), modal content bg,
    button text, close glyph.
  - Panel text layers (on the colored panels): `rgba(255,255,255,0.8)`
    (`.modal-content .modal-body` color — headings, labels, body text),
    `rgba(255,255,255,0.7)` (input text), `rgba(255,255,255,0.3)`
    (checkbox description), `rgba(255,255,255,0.2)` (input placeholders).
  - Panel borders: `rgba(255,255,255,0.1)` (input bottom rule),
    `rgba(255,255,255,0.4)` (checkbox border).
  - Close ×: 40×40 absolute top-right, **bg `rgba(0,0,0,0.1)` + WHITE glyph**
    (NOT the translucent-black × of Modal 05).
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`; inputs have NO
    box-shadow (explicitly none).
  - Fonts: **Roboto** (300/400/700; body 14px / line-height 1.8, headings
    weight 400 / line-height 1.5) — load via Google Fonts `<link>` (weights
    300;400;700). Never copy the cf-fonts woff2 files.
  - Buttons: **4px radius** (custom `.btn { border-radius: 4px }` — NOT the
    40px pill of Modal 05) — launch = padding 16px 24px, WHITE text, 15px,
    sentence case; Sign Up = full-width, 52px tall, WHITE text.
    `.btn-primary:hover` inverts to transparent bg + teal text.
  - Inputs (inside modal): underline style — transparent bg, no side
    borders, radius 0, 30px tall, `border-bottom: 1px solid
rgba(255,255,255,0.1)`, text `rgba(255,255,255,0.7)`, placeholders
    `rgba(255,255,255,0.2)`; NO focus ring (source removes it; a subtle
    focus-visible underline brighten is an acceptable a11y deviation).
  - Labels: uppercase, 12px, letter-spacing 1px.
  - Checkbox: 16×16, radius 3px, border `1px solid rgba(255,255,255,0.4)`,
    checked → mint `#47e4bb` fill + white check; description
    `rgba(255,255,255,0.3)`.
  - Icons: beer glyph 30px absolute top-left (`icon-2`), bicycle glyph
    **10vw** (100px mobile) centered in the teal panel — both white line
    icons; close × 40×40 white.
  - Rhythm: 900px-wide SQUARE card → two equal columns: teal panel (p-5,
    centered: small top-left glyph → headline → huge icon) | navy panel
    (p-5, py-0 mobile: heading → 3 underline inputs (mb 1rem each) →
    checkbox → full-width Sign Up → teal login link). Close × floats
    top-right over both panels.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a teal 4px-radius launch button.

#### Scenario: Launch page

- **GIVEN** the Gateway app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 06" (recreated as "Gateway" —
  the NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a teal button labeled "Launch Modal 06" (recreate as
  "Launch Gateway" / "Launch Signup" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on teal `#5eb7b7`
- **AND** the button SHALL have a 4px border radius (NOT a pill), padding
  ~16px 24px, and sentence-case text (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the signup modal SHALL open centered over a dark backdrop

### Requirement: Signup modal shell

The system SHALL render a wide (900px) centered modal dialog with a close
button, square corners, and a two-panel body.

#### Scenario: Dialog shell

- **GIVEN** the Gateway app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 900px) with SQUARE
  corners (border-radius 0)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  white × glyph on a `rgba(0,0,0,0.1)` background (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop) SHALL close the dialog

#### Scenario: Two-panel layout

- **WHEN** the dialog displays
- **THEN** the body SHALL split into two equal columns side by side (no
  gutter): a teal `#5eb7b7` left panel and a navy `#1b2a49` right panel

### Requirement: Left teal panel

The system SHALL render the teal brand panel with its headline and large
bicycle icon.

#### Scenario: Panel content

- **GIVEN** the Gateway app is rendered and the modal is open
- **WHEN** the left panel displays
- **THEN** it SHALL have a solid teal `#5eb7b7` background (no image)
- **AND** it SHALL show a small white glyph (beer icon, ~30px) at the
  top-left corner
- **AND** it SHALL show the centered white headline "Plan your activities
  and control your progress online" (Roboto, weight 400)
- **AND** beneath the headline a large white bicycle line-icon SHALL appear
  (~10vw / 100px on mobile)

### Requirement: Right navy panel signup form

The system SHALL render the navy form panel with three underline inputs, an
agreement checkbox, a Sign Up button, and a login link.

#### Scenario: Heading and fields

- **GIVEN** the Gateway app is rendered and the modal is open
- **WHEN** the right panel displays
- **THEN** it SHALL show the heading "Create Your Account" (white, Roboto
  weight 400)
- **AND** three underline-style inputs SHALL appear, each with a tiny
  uppercase label: "Full Name" (placeholder "John Doe"), "Email Address"
  (placeholder "john@doe@gmail.com"), and "Password" (type password,
  placeholder "Password")
- **AND** each input SHALL be transparent with NO side borders, only a
  `1px solid rgba(255,255,255,0.1)` bottom rule, ~30px tall, white-ish text
  (`rgba(255,255,255,0.7)`), and `rgba(255,255,255,0.2)` placeholders

#### Scenario: Agreement checkbox

- **THEN** a small square checkbox labeled "I agree all statements" SHALL
  appear below the fields (16×16, radius 3px, border
  `1px solid rgba(255,255,255,0.4)`, description
  `rgba(255,255,255,0.3)`)
- **AND** checking it SHALL fill the box mint `#47e4bb` with a white check

#### Scenario: Sign Up button

- **THEN** a full-width teal button labeled "Sign Up" SHALL appear below the
  checkbox (white text on `#5eb7b7`, 52px tall, border-radius ~4px)
- **AND** a teal link "I'm already a member" SHALL appear below the button
  (a login link, not an input)

#### Scenario: Submit behavior

- **WHEN** the user fills the form and submits
- **THEN** the form SHALL acknowledge the submission (e.g. swap to a
  success/confirmation message) so the interactive behavior is testable

### Requirement: Responsive behavior

The system SHALL keep the two-panel signup modal usable on narrow
viewports.

#### Scenario: Mobile layout

- **GIVEN** the Gateway app is rendered
- **WHEN** the viewport is narrower than ~768px
- **THEN** the launch heading/button and the modal SHALL remain centered
- **AND** the modal SHALL stack its two panels vertically (teal panel on
  top, navy form below) with no horizontal overflow
- **AND** the large bicycle icon SHALL render at 100px and the form fields
  SHALL stay full-width

### Requirement: Footer

The system SHALL render the standard Component Dock attribution footer.

#### Scenario: Footer content

- **GIVEN** the Gateway app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Gateway app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Gateway — Signup Form Modal"

## Verification checklist

- [ ] `openspec/specs/template-gateway/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/gateway/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 06 preview DOM 1:1
      (full-viewport centered launch section → teal 4px-radius launch
      button → centered 900px SQUARE two-panel modal: teal left panel
      (small top-left glyph / "Plan your activities..." headline / huge
      bicycle icon) | navy right panel (close × top-right / "Create Your
      Account" heading / 3 underline inputs / "I agree all statements"
      fill-checkbox / full-width teal "Sign Up" pill-less button /
      "I'm already a member" link) → minimal Component Dock footer.
      Mobile: panels stack, icon 100px, no overflow.
- [ ] Tokens used in the app: brand teal `#5eb7b7` (primary — buttons,
      links, left panel bg), navy `#1b2a49` (right panel bg), mint
      `#47e4bb` (checkbox fill), white `#fff` (launch page, modal bg,
      button text, close glyph), text layers `rgba(255,255,255,0.8/0.7/0.3/0.2)`
      (body+labels / input text / checkbox description / placeholders),
      borders `rgba(255,255,255,0.1)` (input underline) and
      `rgba(255,255,255,0.4)` (checkbox), close bg `rgba(0,0,0,0.1)`, modal
      shadow `0 10px 34px -15px rgba(0,0,0,0.24)`; Roboto 300/400/700 via
      Google Fonts `<link>`; BUTTONS radius **4px** (NOT the 40px pill of
      Modal 05); underline inputs (transparent, bottom rule only, 30px);
      uppercase 12px letter-spacing-1 labels; 16×16 mint-fill checkbox.
- [ ] No ColorLib references in `apps/gateway` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No images needed (both panels render SOLID color — the source's `.img`
      class carries no background image; no picsum seeds); icons from
      lucide-react or inline SVG: `Beer` + `Bike` for the panel glyphs,
      `X` for the close (probe
      `node -e "console.log(typeof require('lucide-react').Beer)"` etc. and
      fall back to inline SVG paths if undefined).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; labels wired to inputs (`htmlFor`/`id` — the
      source's `for=` attrs point at missing ids; wire them properly);
      checkbox is a real checkable `<input type="checkbox">` (visually
      hidden but keyboard-accessible — the source uses `display:none` +
      sibling indicator, recreate with `sr-only`/peer pattern);
      conditional render (not in DOM when closed). A11y deviation allowed:
      the source kills the input focus ring — add a subtle focus-visible
      treatment (e.g. brighten the bottom rule) while keeping the
      underline look.
