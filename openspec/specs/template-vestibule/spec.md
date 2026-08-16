# Template: Vestibule (Split Sign-In/Sign-Up Modal)

## Purpose

Vestibule is a single-page split sign-in/sign-up modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 02" free template (source:
https://colorlib.com/wp/template/modal-02/), built under a DIFFERENT name
(**Vestibule** — an architectural entrance hall/antechamber, the threshold
into a building; a natural sibling to Portico, the recreation of the
series' Modal 01 — per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 02" and a single gold
pill button "Launch Modal 02" that opens a wide centered Bootstrap modal
(`modal-dialog-centered`, max-width **900px**) whose content is a **45°
purple→peach gradient card** split by a hairline vertical divider into TWO
columns: **Sign In** (Username + Password underline inputs, gold "Sign In"
submit, "Remember Me" checkbox + "Forgot Password" link, "— Or Sign In With
—" + Facebook/Twitter white social buttons) and **Sign Up** (First Name,
Last Name, Email address, Password underline inputs, a gold submit that the
source mislabels "Login", and the terms line "By creating an account, your
agree to our terms." — original typo preserved). The whole template is ONE
interactive surface — the launch button and the split modal. Vestibule
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 02" is FORBIDDEN as the app
> name. **Vestibule** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 02". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 801). Free split
  sign-in/sign-up modal component template. The `modal-02` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-02/` returns 404;
  the REAL preview URL (same `/theme/bootstrap/` prefix as the rest of the
  Bootstrap UI series, e.g. Modal 01) is
  `https://preview.colorlib.com/theme/bootstrap/modal-02/` (HTTP 200,
  11.0KB HTML). Stylesheets: `css/style.css` (225.2KB — Bootstrap 4.3.1 +
  the template's custom ftco styles in the last ~4.4KB, starting around char
  220803, token source), `css/ionicons.min.css` (46.8KB — close ×,
  Facebook/Twitter logo icons), Poppins via cf-fonts @font-face blocks in
  the head. Structure, copy, and tokens below are from the live DOM +
  `style.css`. Screenshot (`modal-02.jpg`, 1200×972 AVIF,
  browser-verified 2026-08-16) shows the page with the modal OPEN: dark
  backdrop, wide gradient (purple→peach) card with the two-column split —
  "Sign In" left (Username/Password underline fields, gold button, Remember
  Me + Forgot Password, social buttons), "Sign Up" right (4 underline
  fields, gold button, terms line), close × top-right.
- **Visual design (screenshot + live DOM):** clean but vibrant. White page,
  single centered gold pill CTA, and one large floating gradient dialog on a
  dark backdrop. The modal is a 45° diagonal gradient from deep purple
  `#c859ff` (left/bottom) to peach `#ffab8c` (right/top) with gold `#f9e090`
  accents (buttons, checkbox, focus borders) and white headings/underline
  inputs. Poppins throughout. No images anywhere — pure typography + forms +
  dialog.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` — `fullHeight()` sets
     `height: $(window).height()`; recreate with a full-viewport flex
     container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 02" (Poppins, weight 400).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 02"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; solid gold
       pill, dark text).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it with `display:none` until the
     launch button toggles it; `.modal { background: rgba(0,0,0,0.5) }` dark
     backdrop) → `div.modal-dialog.modal-dialog-centered` (max-width
     **900px**, vertically centered) → `div.modal-content` (border none;
     **padding: 50px**; font-size 14px; color `rgba(255,255,255,0.8)`;
     background 45° gradient `#c859ff` → `#ffab8c`):
     - `div.modal-header` (padding 0, border none): close button
       `button.close.d-flex.align-items-center.justify-content-center` —
       absolute top-right, 40×40, bg `rgba(0,0,0,0.1)`, `ion-ios-close`
       icon, `aria-label="Close"`.
     - `div.modal-body.p-0` (border none) → `div.row`:
       - **Left column** `div.col-md.mb-md-0.mb-5`:
         - `h3.mb-4` — "Sign In" (`#fff`, font-weight 300).
         - `form.signin-form`:
           - `.form-group` → `input.form-control` placeholder "Username"
             (transparent bg, border none, height **40px**, color
             `rgba(255,255,255,0.8)`, **border-bottom 1px
             rgba(255,255,255,0.2)**, radius 0 — underline style).
           - `.form-group` → `input.form-control` placeholder "Password"
             (type password).
           - `.form-group` → submit `button.form-control.btn.btn-primary.rounded.submit.px-3`
             — **"Sign In"** (full-width; height **52px** via
             `.modal-content .btn`, font-weight 500; gold `#f9e090` bg,
             dark text).
           - `.form-group.d-md-flex` → `div.form-check.w-50` custom
             `label.fill-checkbox` (`--color: #f9e090`): hidden
             `input.fill-control-input` + `span.fill-control-indicator` +
             `span.fill-control-description` "Remember Me" (description
             `rgba(255,255,255,0.6)`, checked → fill `#f9e090` + text `#fff`)
             - `div.w-50.text-md-right` link `a` "Forgot Password" (inline
               `style="color:#fff"`).
           - `.form-group` → `p.w-100.text-center` "— Or Sign In With —".
           - `div.social.d-flex.text-center` → two `a.px-2.py-3.rounded`
             (width 100%, bg `#fff`, color `#000`, 1px border
             `rgba(255,255,255,0.4)`, hover transparent + white text):
             `span.ion-logo-facebook.mr-2` + "Facebook" and
             `span.ion-logo-twitter.mr-2` + "Twitter".
       - **Divider** `div.col-md-1.divider` — `.divider:after` = 1px
         vertical line, `background: rgba(255,255,255,0.2)`, centered
         (`width:1px; height:100%; margin: 0 auto`).
       - **Right column** `div.col-md`:
         - `h3.mb-4` — "Sign Up" (`#fff`, font-weight 300).
         - `form.signup-form`:
           - `.form-group` → `input.form-control` placeholder "First Name".
           - `.form-group` → `input.form-control` placeholder "Last Name".
           - `.form-group` → `input.form-control` placeholder "Email
             address".
           - `.form-group` → `input.form-control` placeholder "Password"
             (type password).
           - `.form-group` → submit `button.form-control.btn.btn-primary.rounded.submit.px-3`
             — **"Login"** (the ORIGINAL labels the Sign Up submit "Login" —
             a source quirk; match it 1:1).
           - `.form-group` → `div.w-100` → `p.mb-0` "By creating an account,
             your agree to our terms." (original text INCLUDING the "your"
             typo — keep the kind of content; the implementer may fix the
             typo or keep it, but must note the choice in the PR).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Modal gradient (primary surface): 45° `linear-gradient(45deg, #c859ff
0%, #ffab8c 100%)` — deep purple → peach. Tailwind: `bg-gradient-to-tr`
    (45deg = bottom-left → top-right).
  - Accent gold **#f9e090** (theme-color) — `.btn-primary` fill + 1px border
    with dark `#000` text (hover: transparent bg + gold text),
    `.fill-checkbox` `--color` (checked state + checked label `#fff`),
    launch-page `.form-control:focus` border.
  - Backgrounds: page `#fff` (`section.ftco-section`); modal backdrop
    `rgba(0,0,0,0.5)`; modal card = the gradient; social buttons white;
    close button `rgba(0,0,0,0.1)`.
  - Text on gradient: headings `#fff` (weight 300), body/inputs
    `rgba(255,255,255,0.8)`, checkbox description `rgba(255,255,255,0.6)`,
    dark `#000` on gold buttons, `#000` on white social buttons.
  - Font: **Poppins** (300–900 loaded) — body 14px inside the modal;
    headings Poppins weight 300 (line-height 1.5).
  - Buttons: launch pill `btn.btn-primary` base radius **40px**, `py-3 px-4`
    (≈48px tall), gold bg + dark text. In-modal submits:
    `form-control btn btn-primary rounded submit` — full-width, height
    **52px**, font-weight 500, `.rounded` utility (0.25rem !important)
    overrides the pill radius → only slightly rounded.
  - Form controls (modal): transparent bg, NO box border, height **40px**,
    radius 0, **underline** = `border-bottom: 1px solid rgba(255,255,255,0.2)`.
    (Launch page has no visible inputs — the `.form-control` 52px/5px/1px
    `rgba(0,0,0,0.1)` rules are series leftovers unused by this page.)
  - Modal: dialog max-width **900px**; content padding **50px**; close
    button 40×40 absolute top-right; `modal-dialog-centered` = flex vertical
    centering; divider 1px `rgba(255,255,255,0.2)` centered in a
    `col-md-1`.
  - Rhythm: two equal columns (`.col-md` flex halves, stack on mobile with
    `mb-md-0 mb-5` spacing); 45° gradient; no shadows specified on the card.
- **Recreation approach:** white full-viewport centered page (h2 "Vestibule"
  - gold pill "Launch Sign-In"); the modal is a state-driven overlay (open
    on button click, close on ×/backdrop/Escape) — no Bootstrap dependency:
    `role="dialog"` `aria-modal="true"` semantics, dark backdrop fade,
    centered 900px gradient card (`bg-gradient-to-tr from-[#c859ff] to-[#ffab8c]`,
    50px padding), close × top-right, `grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]`
    (or flex) two-column split with the hairline divider: left Sign In form
    (underline inputs, gold submit "Sign In", gold Remember Me checkbox +
    white "Forgot Password" link, "— Or Sign In With —", two white rounded
    social buttons w/ lucide `Facebook`/`Twitter` icons), right Sign Up form
    (4 underline inputs, gold submit "Login" [source quirk], terms line), and
    the mandatory minimal Component Dock footer. Icons: lucide-react `X`,
    `Facebook`, `Twitter` (probe exports before use — see tasks.md). No images
    anywhere (the source has none). Google Fonts Poppins via `<link>` in
    index.html.

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Vestibule app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Vestibule" — the new brand name in place of "Modal 02")
- **AND** it SHALL show a gold (`#f9e090`) pill button labeled "Launch
  Sign-In" (py-3 px-4 proportions)
- **AND** the launch button SHALL have dark text and a 40px (pill) border
  radius

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Vestibule app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered white-bordered dialog (max-width ~900px) SHALL appear
  with a 45° purple→peach gradient card (`#c859ff` → `#ffab8c`) and ~50px
  content padding
- **AND** the dialog SHALL have `role="dialog"` and `aria-modal="true"` and a
  close button (`aria-label="Close"`) in the top-right corner (40×40,
  semi-transparent bg)

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the close ×, clicking the backdrop, or pressing Escape
  SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close

### Requirement: Sign In column

The system SHALL render the left split column with a sign-in form.

#### Scenario: Sign-in form

- **GIVEN** the modal is open
- **THEN** the left column SHALL show the heading "Sign In" in white
  (weight 300)
- **AND** it SHALL show a Username text input and a Password input with
  underline styling (transparent background, no box border, bottom border
  `rgba(255,255,255,0.2)`, ~40px tall, placeholder `rgba(255,255,255,0.8)`)
- **AND** it SHALL show a full-width gold "Sign In" submit button (52px
  tall, slightly rounded, dark text)

#### Scenario: Remember me row

- **WHEN** the sign-in form displays
- **THEN** it SHALL show a custom "Remember Me" checkbox that fills gold
  `#f9e090` when checked
- **AND** it SHALL show a "Forgot Password" link in white on the right of
  the same row

#### Scenario: Social sign-in

- **WHEN** the sign-in form displays
- **THEN** it SHALL show the divider text "— Or Sign In With —"
- **AND** it SHALL show two full-width white rounded buttons with the
  Facebook and Twitter icons + labels, each with a 1px
  `rgba(255,255,255,0.4)` border

### Requirement: Sign Up column

The system SHALL render the right split column with a registration form.

#### Scenario: Sign-up form

- **GIVEN** the modal is open
- **THEN** the right column SHALL show the heading "Sign Up" in white
  (weight 300)
- **AND** it SHALL show First Name, Last Name, Email address, and Password
  inputs in the same underline style as the sign-in column
- **AND** it SHALL show a full-width gold submit button labeled "Login"
  (matching the original source's mislabeled submit) and the terms line
  "By creating an account, your agree to our terms."

### Requirement: Column divider

The system SHALL separate the two columns with a hairline vertical divider.

#### Scenario: Divider line

- **GIVEN** the modal is open at desktop width
- **THEN** a 1px vertical line (`rgba(255,255,255,0.2)`) SHALL run between
  the Sign In and Sign Up columns
- **AND** on narrow/mobile widths the columns SHALL stack vertically with
  spacing (divider hidden)

### Requirement: Form behavior

The system SHALL validate both forms client-side without a backend.

#### Scenario: Submit

- **GIVEN** the modal is open
- **WHEN** the user submits either form with all fields filled
- **THEN** the form SHALL NOT navigate (client-side only) and SHALL show a
  success state (e.g. the column switches to a signed-in confirmation)
- **AND** submitting with an empty required field SHALL show a validation
  message and block submission

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Vestibule app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Vestibule app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Vestibule — Split Sign-In/Sign-Up
  Modal"

## Verification checklist

- [ ] `openspec/specs/template-vestibule/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/vestibule/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 02 preview DOM 1:1
      (full-viewport centered launch section → gold pill CTA → centered
      900px gradient modal: header close × / left Sign In column (Username +
      Password / gold "Sign In" submit / Remember Me + Forgot Password /
      "— Or Sign In With —" + Facebook + Twitter) / hairline divider / right
      Sign Up column (First Name + Last Name + Email + Password / gold
      "Login" submit [source quirk] / terms line)) → minimal Component Dock
      footer.
- [ ] Tokens used in the app: gradient `#c859ff` → `#ffab8c` (45°, via
      `bg-gradient-to-tr`), accent gold `#f9e090` (primary), page `#fff`,
      backdrop `rgba(0,0,0,0.5)`, text `rgba(255,255,255,0.8)`, headings
      `#fff` weight 300, muted `rgba(255,255,255,0.6)`; Poppins via Google
      Fonts `<link>`; launch pill button (40px radius) + in-modal 52px
      submits (0.25rem radius) + 40px underline inputs.
- [ ] No ColorLib references in `apps/vestibule` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No images required (the source has none) — no picsum seeds needed.
- [ ] lucide icons probed (`X`, `Facebook`, `Twitter` exist in current
      lucide-react) before use.
- [ ] Implementer gate: `scripts/verify-app.sh vestibule` (typecheck + lint + 100% coverage tests + build) and `npm run spec:validate`.
