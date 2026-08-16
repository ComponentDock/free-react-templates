# Template: Portico (Sign-In Modal)

## Purpose

Portico is a single-page sign-in modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 01" free
template (source: https://colorlib.com/wp/template/modal-01/), built under a
DIFFERENT name (**Portico** — an architectural entrance/porch, evoking the
modal doorway into a sign-in dialog; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 01" and a single
rose-pink pill button "Launch Modal 01" that opens a centered Bootstrap modal
(`modal-dialog-centered`, max-width 450px) containing a sign-in form: a
pink-bordered circular user icon, "Sign In" heading, Username + Password
inputs, a full-width rose "Login" submit, a "Remember Me" custom checkbox with
a "Forgot Password" link, and a light-grey modal footer ("Not a member?
Create an account"). The whole template is ONE interactive surface — the
launch button and the modal dialog. Portico recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Modal 01" is FORBIDDEN as the app
> name. **Portico** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 01". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 800). Free sign-in-modal
  component template. The `modal-01` slug appears exactly ONCE in TEMPLATES.md
  (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-01/` returns 404; the
  ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bootstrap/modal-01/` (HTTP 200, 9.6KB
  HTML — the whole Bootstrap UI series lives under the `/theme/bootstrap/`
  prefix). Stylesheets: `css/style.css` (223.2KB — Bootstrap 4.3.1 + the
  template's custom ftco styles in the last ~90 lines, token source),
  `css/ionicons.min.css` (46.8KB — close/user icons), Poppins via cf-fonts
  @font-face blocks in the head. Structure, copy, and tokens below are from
  the live DOM + `style.css`. Screenshot (`modal-01.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the page with the modal OPEN: flat
  grey backdrop (Bootstrap modal fade over the white page), centered white
  dialog with a subtle drop shadow, rose-pink circular user icon, "Sign In"
  heading, Username/Password fields with thin light-grey borders, a wide
  rose-pink rounded Login button, a "Remember Me" checkbox + "Forgot
  Password" link (rose) on one row, and the footer line "Not a member?
  Create an account" (rose link), with a close × in the dialog's top-right
  corner.
- **Visual design (screenshot + live DOM):** extremely clean and minimal.
  White page, single centered pill CTA, and one floating white dialog on a
  dark backdrop. The ONLY accent color is the rose/salmon pink `#fb8691`
  (button fill, links, icon border, checkbox, focus borders). Sans-serif
  (Poppins) throughout. No images anywhere — pure typography + form +
  dialog.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` — `fullHeight()` sets
     `height: $(window).height()`; recreate with a full-viewport flex
     container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 01" (Poppins, weight 400, `#212529`-ish default).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 01"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; solid rose
       pill, white text).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it with `display:none` until the
     launch button toggles it; dark backdrop) →
     `div.modal-dialog.modal-dialog-centered` (max-width **450px**,
     vertically centered) → `div.modal-content` (border none,
     `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close` — absolute top-right, 40×40, `ion-ios-close` icon,
       `aria-label="Close"`.
     - `div.modal-body.p-4.p-md-5`:
       - `div.icon` — 80×80 circle, 1px solid `#fb8691` border, radius 50%,
         margin auto, `span.ion-ios-person` icon in `#fb8691`.
       - `h3.text-center.mb-4` — "Sign In".
       - `form.login-form`:
         - `.form-group` → `input.form-control.rounded-left` placeholder
           "Username" (height 52px, radius 5px, white bg, 1px
           `rgba(0,0,0,0.1)` border; focus border `#fb8691`).
         - `.form-group.d-flex` → `input.form-control.rounded-left`
           placeholder "Password" (type password).
         - `.form-group` → submit `button.form-control.btn.btn-primary.rounded.submit.px-3`
           — "Login" (full-width; `form-control` 52px height + `rounded`
           utility 0.25rem radius override the pill `.btn` 40px radius;
           solid rose bg, white text).
         - `.form-group.d-md-flex` → `div.form-check.w-50` custom
           `label.custom-control.fill-checkbox`: hidden
           `input.fill-control-input` + `span.fill-control-indicator` +
           `span.fill-control-description` "Remember Me" (checkbox fills
           `#fb8691` when checked, description turns `#fb8691`) + `div.w-50.text-md-right`
           link `a` "Forgot Password" (rose `#fb8691`).
     - `div.modal-footer.justify-content-center` (custom: border none, bg
       `#f8f8f8`): `p` "Not a member?" + `a` "Create an account" (rose).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Brand rose **#fb8691** (theme-color; 13× in custom CSS) — `.btn-primary`
    fill + 1px border (white text; hover inverts to transparent bg + rose
    text), `a` link color (Forgot Password, Create an account),
    `.form-control:focus` border, `.modal-body .icon` border + icon color,
    `.fill-checkbox` `--color` (checked state + checked label text).
  - Backgrounds: page **#fff** (`section.ftco-section`); modal footer
    **#f8f8f8**; modal backdrop `#000` with Bootstrap fade (rgba fade);
    form-control bg white.
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`.
  - Text: body `#212529` (Bootstrap body color), input text `#000`, muted
    checkbox description `rgba(0,0,0,0.4)`, white on buttons.
  - Font: **Poppins** (300–900 loaded) — body 15px/1.8; headings Poppins
    weight 400 (line-height 1.5); inputs 16px.
  - Buttons: `.btn` base radius **40px** (pill), font-size 15px; launch CTA
    `py-3 px-4` (≈48px tall). Login submit: `form-control` height **52px** +
    `.rounded` utility (0.25rem !important) → full-width, slightly rounded.
  - Form controls: height **52px**, radius **5px**, 1px `rgba(0,0,0,0.1)`
    border, focus border `#fb8691`.
  - Modal: dialog max-width **450px**; content border none + shadow; body
    padding `p-4 p-md-5` (1.5rem / 3rem); icon 80px circle; close button
    40×40 absolute top-right; `modal-dialog-centered` = flex vertical
    centering (min-height calc(100% - 1rem)).
  - Rhythm: single centered column `col-md-6`; `js-fullheight` = full
    viewport height (recreate with `min-h-screen` flex centering, no JS
    resize needed).
- **Recreation approach:** white full-viewport centered page (h2 "Portico" +
  rose pill "Launch Sign-In"); the modal is a state-driven overlay (open on
  button click, close on ×/backdrop/Escape) — no Bootstrap dependency:
  `role="dialog"` `aria-modal="true"` semantics, dark backdrop fade, centered
  450px white card with the source's shadow, 80px rose-bordered circle with a
  lucide `User` icon, "Sign In" heading, Username/Password inputs, full-width
  rose Login button, custom rose checkbox "Remember Me" + "Forgot Password"
  link, light `#f8f8f8` footer ("Not a member? Create an account"), and the
  mandatory minimal Component Dock footer. Icons: lucide-react `X` (close)
  and `User` (probe exports before use — see tasks.md). No images anywhere
  (the source has none). Google Fonts Poppins via `<link>` in index.html.

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Portico app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Portico" — the new brand name in place of "Modal 01")
- **AND** it SHALL show a rose-pink (`#fb8691`) pill button labeled "Launch
  Sign-In" (py-3 px-4 proportions)
- **AND** the launch button SHALL have white text and a 40px (pill) border
  radius

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Portico app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered white dialog (max-width ~450px) SHALL appear with a
  subtle shadow (`0px 10px 34px -15px rgba(0,0,0,0.24)`)
- **AND** the dialog SHALL have `role="dialog"` and `aria-modal="true"` and a
  close button (`aria-label="Close"`) in the top-right corner

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the close ×, clicking the backdrop, or pressing Escape
  SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close

### Requirement: Modal content

The system SHALL render the sign-in dialog contents.

#### Scenario: Sign-in form

- **GIVEN** the modal is open
- **THEN** it SHALL show an 80px circular icon with a 1px rose `#fb8691`
  border and a rose user icon centered above the form
- **AND** it SHALL show the heading "Sign In"
- **AND** it SHALL show a Username text input and a Password input (52px
  tall, 5px radius, light-grey border; rose border on focus)
- **AND** it SHALL show a full-width rose "Login" submit button (white text)

#### Scenario: Remember me row

- **WHEN** the sign-in form displays
- **THEN** it SHALL show a custom "Remember Me" checkbox that fills rose
  `#fb8691` when checked
- **AND** it SHALL show a "Forgot Password" link in rose on the right of the
  same row

#### Scenario: Modal footer

- **WHEN** the sign-in form displays
- **THEN** the dialog footer SHALL have a light `#f8f8f8` background
- **AND** it SHALL show "Not a member?" with a rose "Create an account" link

### Requirement: Form behavior

The system SHALL validate the sign-in form client-side without a backend.

#### Scenario: Submit

- **GIVEN** the modal is open
- **WHEN** the user submits the form with both fields filled
- **THEN** the form SHALL NOT navigate (client-side only) and SHALL show a
  success state (e.g. the dialog switches to a signed-in confirmation)
- **AND** submitting with an empty field SHALL show a validation message and
  block submission

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Portico app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Portico app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Portico — Sign-In Modal"

## Verification checklist

- [ ] `openspec/specs/template-portico/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/portico/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Modal 01 preview DOM 1:1 (full-viewport
      centered launch section → rose pill CTA → centered 450px sign-in modal:
      header close × / icon circle + "Sign In" / Username + Password / Login
      submit / Remember Me + Forgot Password / `#f8f8f8` footer "Not a
      member? Create an account") → minimal Component Dock footer.
- [ ] Tokens used in the app: rose `#fb8691` (primary), page `#fff`, modal
      footer `#f8f8f8`, modal shadow `0 10px 34px -15px rgba(0,0,0,0.24)`,
      text `#212529`, muted `rgba(0,0,0,0.4)`; Poppins via Google Fonts
      `<link>`; pill launch button (40px radius) + 52px/5px-radius form
      controls.
- [ ] No ColorLib references in `apps/portico` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No images required (the source has none) — no picsum seeds needed.
- [ ] lucide icons probed (`X`, `User` exist in current lucide-react) before
      use.
- [ ] Implementer gate: `scripts/verify-app.sh portico` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
