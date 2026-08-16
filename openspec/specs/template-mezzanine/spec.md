# Template: Mezzanine (Sign In / Sign Up Modal)

## Purpose

Mezzanine is a single-page sign-in/sign-up modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 09" free template (source: https://colorlib.com/wp/template/modal-09/),
built under a DIFFERENT name (**Mezzanine** — the ninth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), Lobby (Modal 07), and Narthex (Modal 08); a
mezzanine is the intermediate landing/storey between floors of a building —
the transitional level where a visitor is received, fitting for an
entry/auth dialog — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 09" and a GOLD
**`#e3b04b`** button (border-radius **4px**) "Launch Modal 09" that opens a
centered Bootstrap modal (`modal-dialog-centered`, **max-width 900px**,
**SQUARE corners** — border-radius 0) whose content is a two-column
`row no-gutters`: the LEFT column is a background PHOTO
(`images/bg-1.jpg` — a black-and-white bass-guitar shot in the screenshot;
`background-size: cover`) and the RIGHT column is a CHARCOAL `#2b2b28`
panel (`modal-body.color-2`) holding a **Sign In / Sign Up tabbed auth
form**: two underline-style inputs (transparent bg, `border-bottom: 1px
solid rgba(255,255,255,0.1)`, uppercase 12px letter-spaced labels), a
full-width GOLD 52px-tall submit button, a gold-filled custom checkbox
(Remember Me / agree-to-terms) and gold links, all on the dark panel with a
white `×` close button (40×40, `rgba(0,0,0,0.1)` square) top-right. The
whole template is ONE interactive surface — the launch button and the auth
modal. Mezzanine recreates that structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied; the background
photo is replaced with a seeded picsum placeholder).

> NAMING NOTE: the ColorLib source name "Modal 09" is FORBIDDEN as the app
> name. **Mezzanine** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 09". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 808). Free
  sign-in/sign-up auth modal component template. The `modal-09` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-09/` returns 404 (9
  bytes, "Not Found"); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series, e.g. Modal 01–08) is
  `https://preview.colorlib.com/theme/bootstrap/modal-09/` (HTTP 200, ~19KB
  HTML, `<title>` "Modal 09"). Stylesheets: `css/style.css` (225KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~4.9KB,
  starting at the `.btn { cursor: pointer; border-radius: 4px ... }` rule;
  token source), `css/ionicons.min.css` (close × glyph), `css/flaticon.css`
  (loaded but NO flaticon classes in the DOM — unused). **Roboto** (300)
  via cf-fonts @font-face blocks in the head; the body uses the Bootstrap
  system stack (`-apple-system, ..., Roboto, ...`). `js/main.js`:
  `$('[data-toggle="tooltip"]').tooltip()` (NO tooltip elements exist in
  this template — dead code), `fullHeight()` sets `.js-fullheight` to the
  window height (recreate with `min-h-screen` flex centering), and the
  `$('#exampleModalCenter').modal('show')` line is COMMENTED OUT — the modal
  opens only via the launch button. Structure, copy, and tokens below are
  from the live DOM + `style.css`. Screenshot (`modal-09.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the modal OPEN: medium-grey backdrop
  over the white page, a SQUARE-cornered card with a black-and-white
  bass-guitar photo on the LEFT and a dark charcoal panel on the RIGHT
  ("Sign In | Sign Up" tabs, bold "Sign In" heading, USERNAME/PASSWORD
  uppercase-spaced labels over underline inputs, a full-width mustard-gold
  "Sign In" button, "Remember Me" checkbox + gold "Forgot Password" link,
  gold "Not a member? Sign Up" footer link, white × top-right).
- **Visual design (screenshot + live render):** clean, flat, modern,
  minimalist dark-mode auth dialog — one gold CTA on a white page, then one
  SQUARE 900px split dialog: artistic B&W photo left, charcoal form panel
  right. Brand accents: gold **`#e3b04b`** (launch button, submit buttons,
  active tab, links, checked checkbox) on charcoal **`#2b2b28`**. Sans-serif
  Roboto/system stack throughout (body 14px inside the modal; labels
  uppercase 12px letter-spacing 1px). The ONLY image is the left-column
  background photo. Pure UI — one button + one dialog + the close × icon.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 09" (`.ftco-section h2` sets margin-bottom 0, so
       the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 09"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 4px; box-shadow: none !important; font-size:
15px }` → **4px SQUARE-ish radius (NOT the 40px pill of Modal 08)**,
       bg **`#e3b04b`** !important, 1px `#e3b04b` border, WHITE text,
       padding 16px 24px, sentence case — NOT uppercase). Hover inverts:
       transparent bg + `#e3b04b` text.
  2. **Auth modal** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; default dark backdrop `rgba(0,0,0,0.5)`) →
     `div.modal-dialog.modal-dialog-centered` (**max-width 900px** — custom,
     wider than Modal 08's 600px, narrower than Modal 07's 950px, same as
     Modal 06's 900px; vertically centered) → `div.modal-content`
     (border none, `padding: 0 !important`, **border-radius 0 — SQUARE
     corners** (like Modal 07/Lobby, NOT Modal 08's rounded 0.3rem),
     font-size **14px**, `max-height: calc(100vh - 1rem)`, overflow hidden,
     `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`):
     - `div.modal-header` — padding 0, border none. Contains ONLY the close
       button: `button.close` — absolute top 0 right 0, **40×40**, padding
       0, margin 0, z-index 1, `text-shadow: none`, **background
       `rgba(0,0,0,0.1)`, color #fff** (white × on a FAINT DARK square —
       like Modal 06/07, NOT Modal 08's plain white × with no background;
       `ion-ios-close` glyph; `aria-label="Close"`).
     - `div.row.no-gutters` — two equal columns:
       - `div.col-md-6.d-flex` → `div.modal-body.p-5.img.d-flex.img.text-center.d-flex.align-items-center`
         with INLINE `style="background-image: url(images/bg-1.jpg)"`
         (Bootstrap `.img` utility: `background-size: cover` +
         `background-position: center`; the screenshot shows a black-and-white
         bass-guitar photo; recreate with a seeded picsum placeholder;
         mobile `@media (max-width: 767.98px)` sets `.modal-content .img {
height: 300px }` — the photo collapses to a 300px banner ABOVE the
         form column).
       - `div.col-md-6.d-flex` → `div.modal-body.p-4.p-md-5.align-items-center.color-2`
         (bg **`#2b2b28`** charcoal; `.modal-content .modal-body` sets
         `color: rgba(255,255,255,0.8)` — light text) →
         `div.tabulation.tabulation2`:
         - `ul.nav.nav-tabs.border-0` (custom `.tabulation2 .nav-tabs {
margin-bottom: 20px }`): `li.nav-item` → `a.nav-link.active`
           (data-toggle="tab" href="#signin") "Sign In" and `a.nav-link`
           (href="#signup") "Sign Up" — `border: none`, font-size **16px**,
           font-weight 400, padding `0 10px 0 0`, inactive color
           **`rgba(255,255,255,0.1)`** (nearly invisible), active color
           **`#e3b04b`** (gold).
         - `div.tab-content.border-0` (custom: background transparent,
           box-shadow none):
           - `div.tab-pane.p-0.container.active#signin` → `div.text.w-100`:
             - `h3.mb-4` — "Sign In" (large bold heading on the dark panel).
             - `form.signin-form` (action="#"):
               - `div.form-group.mb-3`: `label.label` "Username" +
                 `input.form-control[type=text placeholder="Username"]`
               - `div.form-group.mb-3`: `label.label` "Password" +
                 `input.form-control[type=password placeholder="Password"]`
               - `div.form-group`: `button.form-control.btn.btn-primary.rounded.submit.px-3`
                 "Sign In" (custom `.modal-content .form-control`:
                 `background: transparent; border: none; border-radius: 0;
padding: 0; height: 30px; border-bottom: 1px solid
rgba(255,255,255,0.1); color: rgba(255,255,255,0.7)` —
                 underline-style dark input; custom `.modal-content
.btn-primary`: **background `#e3b04b` !important; height
                 52px** → the submit is a FULL-WIDTH square gold button,
                 52px tall, white text)
               - `div.form-group.d-md-flex`:
                 - `div.form-check.w-50.text-left`: `label.custom-control.fill-checkbox`
                   → `input.fill-control-input` (hidden checkbox; `--color:
#e3b04b`) + `span.fill-control-indicator` (16×16,
                   border-radius **3px**, border `rgba(255,255,255,0.4)`,
                   white check-mark SVG fill when checked) +
                   `span.fill-control-description` "Remember Me" (color
                   `rgba(255,255,255,0.3)`)
                 - `div.w-50.text-md-right` → `a[href="#"]` "Forgot
                   Password" (gold link, 0.3s ease transition)
               - `p` — "Not a member? " + `a[data-toggle="tab" href="#signup"]`
                 "Sign Up" (gold link that switches to the Sign Up tab)
           - `div.tab-pane.p-0.container.fade#signup` → `div.text.w-100`:
             - `h3.mb-4` — "Sign Up"
             - `form.signup-form` (action="#"):
               - `label.label` "Full Name" + `input.form-control` (placeholder
                 "John Doe")
               - `label.label` "Email Address" + `input.form-control` (placeholder
                 "johndoe@gmail.com")
               - `label.label` "Password" + `input.form-control[type=password]`
                 (placeholder "Password")
               - `div.form-check.w-100`: `label.custom-control.fill-checkbox` →
                 checkbox + `span.fill-control-description` "I agree all
                 statements in " + `a[href="#"]` "terms of service"
               - `div.form-group`: `button.form-control.btn.btn-primary.rounded.submit.px-3`
                 "Sign Up" (same full-width gold 52px square submit)
               - `p` — "I'm already a member! " + `a[data-toggle="tab"
href="#signin"]` "Sign In" (gold link back to Sign In)
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): the two modal columns STACK —
    the image column collapses to a **300px-tall banner** (`.modal-content
.img { height: 300px }`), the charcoal form panel renders below it; the
    modal keeps Bootstrap's mobile margins (0.5rem); the launch section
    stays full-viewport with the centered column. Verify no horizontal
    overflow.
- **Design tokens:**
  - Gold **#e3b04b** (`rgb(227,176,75)`) — the brand accent: launch button
    bg/border, submit buttons (`.modal-content .btn-primary` bg !important),
    ACTIVE tab text, links (`a { color: #e3b04b }`), checked checkbox fill
    (`--color: #e3b04b`), and `.modal-body.color-1` panel bg (NOT used in
    this template's DOM — only `.color-2` is).
  - Charcoal **#2b2b28** (`rgb(43,43,40)`) — the form panel
    (`.modal-body.color-2` / `.color-2`).
  - White **#fff** — launch page (`section.ftco-section`), button text,
    close × glyph (on the faint `rgba(0,0,0,0.1)` square).
  - Dark **#212529** — Bootstrap default text (launch heading "Modal 09").
  - Text-on-dark layers (rgba whites): modal-body text `rgba(255,255,255,0.8)`;
    input text 0.7; placeholder 0.2; checkbox/description labels 0.3;
    inactive tab 0.1; input underline `rgba(255,255,255,0.1)`.
  - Underline inputs: `background: transparent`, `border: none`,
    `border-radius: 0`, `padding: 0`, `height: 30px`,
    `border-bottom: 1px solid rgba(255,255,255,0.1)` — dark-theme underline
    style, NOT white Bootstrap boxes.
  - Labels: `text-transform: uppercase`, font-size **12px**,
    `letter-spacing: 1px`.
  - Buttons: radius **4px** (custom `.btn`; NOT the 40px pill of Modal 08,
    NOT 0), `box-shadow: none !important`, font-size **15px**, sentence
    case; launch = padding 16px 24px (py-3 px-4), WHITE text, gold
    bg/border, hover inverts to transparent + gold text; submit = full-width
    (`form-control` block), **height 52px**, square, gold bg.
  - Modal: **max-width 900px**, **SQUARE corners (border-radius 0)**,
    font-size **14px**, border none, padding 0, `max-height: calc(100vh -
1rem)`, overflow hidden, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`,
    backdrop `rgba(0,0,0,0.5)`.
  - Close ×: **40×40**, absolute top-right, padding/margin 0, z-index 1,
    `text-shadow: none`, **white × on `rgba(0,0,0,0.1)` square** (differs
    from Modal 08's plain white ×).
  - Tabs: font-size 16px, weight 400, border none, padding `0 10px 0 0`;
    inactive `rgba(255,255,255,0.1)` → active gold; tab list
    `margin-bottom: 20px`; tab-content transparent, no shadow.
  - Checkbox: 16×16, border-radius **3px**, border `rgba(255,255,255,0.4)`;
    checked = gold `#e3b04b` fill + white check-mark SVG (data-URI, ~80%
    size); description `rgba(255,255,255,0.3)`.
  - Fonts: **Roboto** (300 loaded via cf-fonts in the source head; the body
    falls back to the system stack which includes Roboto; modal body
    14px / line-height 1.5) — load Roboto 300;400;500 via Google Fonts
    `<link>`. Never copy the cf-fonts woff2 files.
  - Image: LEFT column = background photo (B&W bass guitar per screenshot),
    `background-size: cover`, center; mobile height **300px**. Recreate with
    `https://picsum.photos/seed/mezzanine-1/900/600` (deterministic) — never
    copy `images/bg-1.jpg`.
  - Rhythm: white full-viewport launch page (heading → gold 4px button) →
    one 900px SQUARE dialog: 40×40 close × (faint dark square) top-right →
    two columns (B&W photo LEFT / charcoal auth panel RIGHT) → Sign In /
    Sign Up tabs → underline inputs → full-width gold submit → checkbox +
    gold links. No navbar, no other sections, ONE background image, no
    footer in the original.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a gold launch button.

#### Scenario: Launch page

- **GIVEN** the Mezzanine app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 09" (recreated as "Mezzanine" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a gold button labeled "Launch Modal 09" (recreate
  as "Launch Mezzanine" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on gold `#e3b04b`
- **AND** the button SHALL have a **4px border radius** (NOT the 40px pill
  of Modal 08), padding ~16px 24px, no box-shadow, and sentence-case text
  (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the auth modal SHALL open centered over a dark backdrop
  (`rgba(0,0,0,0.5)`)

### Requirement: Auth modal shell

The system SHALL render a centered (max-width 900px) SQUARE-cornered modal
dialog with a close button.

#### Scenario: Dialog shell

- **GIVEN** the Mezzanine app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **900px**) with **SQUARE
  corners** (border-radius 0 — NOT rounded like Modal 08)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  white × glyph (`aria-label="Close"`) on a faint `rgba(0,0,0,0.1)` square
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

### Requirement: Two-column modal body

The system SHALL render the modal body as two equal columns: a background
photo on the left and a charcoal form panel on the right.

#### Scenario: Split body

- **GIVEN** the modal is open
- **THEN** the LEFT column SHALL show a full-bleed background photo
  (cover-cropped; the source's black-and-white bass-guitar shot — recreated
  with a seeded picsum placeholder, never the source asset)
- **AND** the RIGHT column SHALL have a charcoal `#2b2b28` background
- **AND** on mobile widths (≤767.98px) the columns SHALL stack, with the
  photo column collapsing to a **300px-tall banner** above the form panel

### Requirement: Sign In / Sign Up tabs

The system SHALL render a Sign In / Sign Up tab switch at the top of the
form panel with a gold active state.

#### Scenario: Tab switch

- **GIVEN** the modal is open
- **THEN** the panel SHALL show two tabs, "Sign In" (active by default) and
  "Sign Up", 16px, no underline border
- **AND** the active tab SHALL render in gold `#e3b04b`
- **AND** the inactive tab SHALL render in the near-invisible
  `rgba(255,255,255,0.1)` (source behavior)
- **WHEN** the other tab is clicked
- **THEN** the corresponding form SHALL display and the active tab SHALL
  switch to gold

### Requirement: Sign In form

The system SHALL render the Sign In form (username, password, submit,
remember-me, forgot-password, sign-up link).

#### Scenario: Sign In content

- **GIVEN** the modal is open and the Sign In tab is active
- **THEN** the form SHALL show an uppercase 12px letter-spaced label and an
  underline-style input (transparent bg, `border-bottom: 1px solid
rgba(255,255,255,0.1)`, light text, placeholder `rgba(255,255,255,0.2)`)
  for "Username" and for "Password"
- **AND** a FULL-WIDTH square gold `#e3b04b` submit button **52px tall**
  labeled "Sign In" SHALL sit below the fields
- **AND** a gold-filled custom checkbox (16×16, 3px radius) with a
  `rgba(255,255,255,0.3)` "Remember Me" description SHALL render next to a
  gold "Forgot Password" link
- **AND** a gold "Not a member? Sign Up" link SHALL switch to the Sign Up
  tab when clicked

### Requirement: Sign Up form

The system SHALL render the Sign Up form (full name, email, password,
terms checkbox, submit, sign-in link).

#### Scenario: Sign Up content

- **GIVEN** the modal is open and the Sign Up tab is active
- **THEN** the form SHALL show underline-style inputs with uppercase labels
  for "Full Name" (placeholder "John Doe"), "Email Address" (placeholder
  "johndoe@gmail.com"), and "Password"
- **AND** a gold-filled custom checkbox with the description "I agree all
  statements in terms of service" (with a gold "terms of service" link)
  SHALL render above a FULL-WIDTH square gold 52px-tall "Sign Up" submit
  button
- **AND** a gold "I'm already a member! Sign In" link SHALL switch back to
  the Sign In tab when clicked

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Mezzanine app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Mezzanine app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Mezzanine — Sign In / Sign Up Modal"

## Verification checklist

- [ ] `openspec/specs/template-mezzanine/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/mezzanine/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 09 preview DOM 1:1
      (full-viewport centered launch section → gold 4px-radius launch
      button → centered 900px SQUARE modal: 40×40 close × on
      `rgba(0,0,0,0.1)` square top-right / two-column `row no-gutters`:
      background photo LEFT (cover, 300px banner on mobile) + charcoal
      `#2b2b28` form panel RIGHT: Sign In / Sign Up tabs → underline inputs
      with uppercase labels → full-width gold 52px submit → gold checkbox +
      links → minimal Component Dock footer).
- [ ] Tokens used in the app: gold `#e3b04b` (launch + submit buttons,
      active tab, links, checked checkbox fill), charcoal `#2b2b28` (form
      panel), white `#fff` (launch page, button text, close ×), dark
      `#212529` (launch heading); rgba-white text layers 0.8/0.7/0.3/0.2/0.1;
      Roboto (300;400;500) via Google Fonts `<link>`; BUTTON radius **4px**;
      modal max-width **900px**, SQUARE (radius 0), shadow
      `0 10px 34px -15px rgba(0,0,0,0.24)`, backdrop `rgba(0,0,0,0.5)`;
      submit height **52px**; close 40×40; underline inputs
      (`border-bottom: 1px solid rgba(255,255,255,0.1)`); labels uppercase
      12px/1px; tabs 16px; checkbox 16×16/3px radius.
- [ ] No ColorLib references in `apps/mezzanine` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: the ONLY image is the left-column background photo — recreate
      with `https://picsum.photos/seed/mezzanine-1/<w>/<h>` (deterministic
      seed); NEVER copy `images/bg-1.jpg`.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Tabs a11y: tablist/tab/tabpanel roles or equivalent accessible
      switching (aria-selected / aria-controls), and the cross-tab links
      ("Not a member? Sign Up" / "I'm already a member! Sign In") switch
      tabs.
- [ ] Mobile: verify the two modal columns stack (photo → 300px banner,
      form below) with no horizontal overflow at ≤767.98px; launch section
      stays full-viewport.
- [ ] Source's `js/main.js` auto-show line is commented out — the modal
      opens ONLY on launch-button click; recreate with conditional render.
