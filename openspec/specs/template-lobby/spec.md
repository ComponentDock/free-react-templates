# Template: Lobby (Appointment Booking Modal)

## Purpose

Lobby is a single-page appointment-booking modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 07" free template (source: https://colorlib.com/wp/template/modal-07/),
built under a DIFFERENT name (**Lobby** — the seventh of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), and Gateway (Modal 06); a lobby is the reception hall where a
guest books an appointment — per the monorepo naming mandate: never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 07" and an
olive/mustard **`#afa939`** 4px-radius button "Launch Modal 07" that opens a
centered Bootstrap modal (`modal-dialog-centered`, max-width **950px**,
SQUARE corners) split into two equal panels: a **LEFT photo panel** (a
full-bleed background portrait of a lawyer in a black robe holding a gavel
and law book, `images/bg-1.jpg`, `background-size: cover`) and a **RIGHT
olive `#afa939` form panel** with the eyebrow "Booking an Appointment", the
heading "Free Consultation", and a contact form — "Full Name" / "Email
address" / "Subject" text inputs plus a "Message" textarea (all with a
subtle `rgba(255,255,255,0.05)` fill, NO borders, radius 0, placeholders
`rgba(255,255,255,0.4)`) and a full-width dark-charcoal **`#2b2b28`**
"Send Message" submit button (52px tall, 4px radius). The whole template is
ONE interactive surface — the launch button and the booking modal. Lobby
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied; the lawyer photo is replaced with
a screened picsum seed).

> NAMING NOTE: the ColorLib source name "Modal 07" is FORBIDDEN as the app
> name. **Lobby** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 07". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 806). Free
  appointment-booking modal component template. The `modal-07` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-07/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–06) is
  `https://preview.colorlib.com/theme/bootstrap/modal-07/` (HTTP 200, 9.7KB
  HTML, `<title>` "Modal 07"). Stylesheets: `css/style.css` (223.5KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB,
  starting at the `body { font-family: "Poppins" ... }` rule; token source),
  `css/ionicons.min.css` (close × glyph), `css/flaticon.css` (loaded, no
  flaticon classes used — dead include). **Poppins** (300/400/500/600/700/
  800/900) via cf-fonts @font-face blocks in the head. `js/main.js`:
  `$('[data-toggle="tooltip"]').tooltip()` (NO tooltip elements exist in this
  template — dead code), `fullHeight()` sets `.js-fullheight` to the window
  height (recreate with `min-h-screen` flex centering), and the
  `$('#exampleModalCenter').modal('show')` line is COMMENTED OUT — the modal
  opens only via the launch button. Structure, copy, and tokens below are
  from the live DOM + `style.css`. Screenshot (`modal-07.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the modal OPEN: flat dark-grey backdrop
  over the white page, a SQUARE-cornered ~950px card split vertically 50/50 —
  LEFT photo panel: full-bleed portrait of a lawyer (black robe, red sash,
  wooden gavel in right hand, open law book in left, dark grey textured
  wall background); RIGHT olive `#afa939` panel: small bold eyebrow "Booking
  an Appointment", larger bold heading "Free Consultation", four
  white-tinted filled inputs (FULL NAME / EMAIL ADDRESS / SUBJECT
  placeholders + a MESSAGE textarea), and a full-width dark-grey/black
  "Send Message" button; a white × close button sits at the card's top-right
  corner on a translucent-black square.
- **Visual design (screenshot + live render):** clean, flat, modern — one
  centered CTA on a white page, then one two-tone booking dialog (photo |
  olive form). Brand color is olive/mustard **`#afa939`** (launch button,
  right panel background, link color, link hover) against a dark charcoal
  **`#2b2b28`** submit button. Sans-serif Poppins throughout (body
  14px/line-height 1.8; the modal's subheading and heading are weight 700,
  color `rgba(255,255,255,0.8)`). One photograph (the lawyer) — the ONLY
  image in the template; the left panel is otherwise empty. Pure form UI +
  one photo + the close × icon.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 07" (Poppins; `.ftco-section h2` sets
       margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 07"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 4px }` → **4px radius**, bg `#afa939`
       !important, 1px `#afa939` border, WHITE text, padding 16px 24px,
       Poppins 15px, sentence case — NOT uppercase). Hover inverts:
       transparent bg + `#afa939` text.
  2. **Booking modal** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; default dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (max-width **950px** — slightly wider than Modal 06's 900px; vertically
     centered) → `div.modal-content` (border none, padding 0, **border-radius
     0 — SQUARE corners**, `font-size: 14px`, `box-shadow: 0px 10px 34px
-15px rgba(0,0,0,0.24)`, bg `#fff`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close.d-flex.align-items-center.justify-content-center` —
       absolute top 0 right 0, 40×40, z-index 1, **background
       `rgba(0,0,0,0.1)`, WHITE `ion-ios-close` glyph**, `aria-label="Close"`
       (same pattern as Modal 06).
     - `div.row.no-gutters` (two equal columns, no gutters):
       - **Left photo panel** — `div.col-md-6.d-flex` →
         `div.modal-body.p-5.img.d-flex.text-center.align-items-center`
         with INLINE `style="background-image: url(images/bg-1.jpg);"` (the
         `.img` class sets `background-size: cover; background-repeat:
no-repeat; background-position: center center;` — THIS panel
         carries a REAL background image, unlike Modal 06's solid-color
         panels). No text content. Mobile (≤767.98px): `height: 300px;
background-position: top center`.
       - **Right form panel** — `div.col-md-6.d-flex` →
         `div.modal-body.p-4.p-md-5.d-flex.align-items-center.color-1` (bg
         **`#afa939`** via `.modal-content .modal-body.color-1 { background:
#afa939; }`; padding 1.5rem mobile / 3rem md+) →
         `div.text.w-100.py-3`:
         - `span.subheading` — "Booking an Appointment" (Poppins, **weight
           700**, color inherited `rgba(255,255,255,0.8)`; small eyebrow
           line).
         - `h3.mb-4.heading` — "Free Consultation" (Poppins, **weight 700**,
           `rgba(255,255,255,0.8)`, margin-bottom 1.5rem).
         - `form.contact-form`:
           - 2 × `div.form-group.mb-3` (margin-bottom 1rem): `input.form-control`
             (type text, placeholders "Full Name" then "Email address").
           - 1 × `div.form-group`: `input.form-control` (type text,
             placeholder "Subject").
           - 1 × `div.form-group`: `textarea.form-control` (cols 30, rows 4,
             placeholder "Message"; `.modal-content textarea { padding:
20px 15px !important; }` — taller padding than the inputs).
           - 1 × `div.form-group` → `button[type="submit"].form-control.btn.btn-secondary.rounded.submit.px-3`
             "Send Message" (full-width — form-control is width 100%;
             **52px tall** via `.modal-content .btn-secondary { height:
52px }`; bg **`#2b2b28`** !important, 1px `#2b2b28` border,
             WHITE text; **4px radius** via the custom `.btn { border-radius:
4px }`; hover inverts to transparent + `#2b2b28` text).
           - CASCADE NOTE: inside the modal, `.modal-content .form-control`
             → **background `rgba(255,255,255,0.05)` (subtle white fill),
             border: none, border-radius: 0, color `rgba(255,255,255,0.7)`
             !important, padding 0 15px** — FILLED inputs, NOT the
             underline style of Modal 06; placeholders
             `rgba(255,255,255,0.4)` !important (translucent white, 0.4 —
             brighter than Modal 06's 0.2).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): the `row.no-gutters` collapses —
    `col-md-6` stacks the LEFT photo panel on top (**fixed height 300px**,
    `background-position: top center` — the portrait's head stays visible)
    and the olive form below (inner wrapper padding drops to 1.5rem via
    `p-4`); the dialog keeps Bootstrap's mobile modal margins. No other
    layout changes — single column stack.
- **Design tokens:**
  - Brand olive/mustard **#afa939** (`rgb(175,169,57)`) — `.btn-primary` bg +
    border (launch button), `a` link color + hover, `.color-1` right panel bg.
  - Dark charcoal **#2b2b28** (`rgb(43,43,40)`) — `.btn-secondary` bg +
    border (the "Send Message" submit button).
  - White **#fff** — launch page (`section.ftco-section`), modal content bg,
    button text, close glyph.
  - Panel text layers (on the olive panel): `rgba(255,255,255,0.8)`
    (`.modal-content .modal-body` color — subheading, heading, body text),
    `rgba(255,255,255,0.7)` (input text, !important), `rgba(255,255,255,0.4)`
    (input placeholders, !important).
  - Input fill: **`rgba(255,255,255,0.05)`** background, NO borders,
    border-radius 0, padding 0 15px (inputs) / **20px 15px** (textarea) —
    filled inputs, NOT underline.
  - Close ×: 40×40 absolute top-right, **bg `rgba(0,0,0,0.1)` + WHITE glyph**
    (same as Modal 06).
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`; inputs have NO
    box-shadow (Bootstrap's default focus shadow is removed by the custom
    `.btn` rule for buttons; `.form-control` inside the modal has no focus
    ring treatment defined — see a11y note).
  - Fonts: **Poppins** (300–900 available in the source head; body 14px /
    line-height 1.8, subheading + heading weight 700) — load via Google
    Fonts `<link>` (weights 300;400;700). Never copy the cf-fonts woff2
    files.
  - Buttons: **4px radius** (custom `.btn { border-radius: 4px }`, font-size
    15px) — launch = padding 16px 24px, WHITE text, sentence case; Send
    Message = full-width, 52px tall, WHITE text. Hover on both inverts to
    transparent bg + brand-color text.
  - Modal: max-width **950px** (vs Modal 06's 900px), SQUARE corners
    (border-radius 0), font-size 14px.
  - Labels: NONE — the source form uses placeholders only (no `<label>`
    elements); recreation should add accessible `aria-label`s / visually
    hidden labels wired to the inputs (a11y improvement; `getByLabelText`
    needs them for tests).
  - Rhythm: 950px-wide SQUARE card → two equal columns: olive form panel
    (p-4/p-md-5, eyebrow → bold heading → 3 inputs + textarea → full-width
    dark "Send Message" button) | photo panel (cover portrait, empty of
    text). Close × floats top-right over both panels.
  - Photo: the LEFT panel's `bg-1.jpg` is a LAWYER portrait (black robe,
    red sash, gavel, law book, dark textured wall) — the only image in the
    template. picsum has NO such subject; use a screened professional/
    portrait-adjacent seed (see Pitfalls) and note the substitution in the
    PR.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and an olive 4px-radius launch button.

#### Scenario: Launch page

- **GIVEN** the Lobby app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 07" (recreated as "Lobby" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show an olive button labeled "Launch Modal 07" (recreate
  as "Launch Lobby" / "Book Appointment" with the same kind: single primary
  CTA)
- **AND** the button text SHALL be white on olive `#afa939`
- **AND** the button SHALL have a 4px border radius (NOT a pill), padding
  ~16px 24px, and sentence-case text (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the booking modal SHALL open centered over a dark backdrop

### Requirement: Booking modal shell

The system SHALL render a wide (950px) centered modal dialog with a close
button, square corners, and a two-panel body.

#### Scenario: Dialog shell

- **GIVEN** the Lobby app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 950px) with SQUARE
  corners (border-radius 0)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  white × glyph on a `rgba(0,0,0,0.1)` background (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop) SHALL close the dialog

#### Scenario: Two-panel layout

- **WHEN** the dialog displays
- **THEN** the body SHALL split into two equal columns side by side (no
  gutter): a photo panel on the left and an olive `#afa939` form panel on
  the right

### Requirement: Left photo panel

The system SHALL render the left panel as a full-bleed background
photograph (the source's lawyer portrait, replaced with a screened picsum
seed) with no text content.

#### Scenario: Panel content

- **GIVEN** the Lobby app is rendered and the modal is open
- **WHEN** the left panel displays
- **THEN** it SHALL show a background photograph (cover, centered) filling
  the panel — a professional/portrait-style subject (screened picsum seed;
  the source's lawyer-with-gavel photo is not reproducible on picsum —
  documented substitution)
- **AND** it SHALL contain no text content (matching the source's empty
  `.modal-body`)

### Requirement: Right olive form panel

The system SHALL render the olive form panel with an eyebrow, a heading, a
placeholder-labeled contact form, and a dark Send Message button.

#### Scenario: Heading and fields

- **GIVEN** the Lobby app is rendered and the modal is open
- **WHEN** the right panel displays
- **THEN** it SHALL have a solid olive `#afa939` background
- **AND** it SHALL show the eyebrow "Booking an Appointment" (Poppins,
  weight 700, white-ish)
- **AND** it SHALL show the heading "Free Consultation" beneath it (Poppins,
  weight 700, white-ish)
- **AND** four fields SHALL appear, each filled with a subtle white tint
  (`rgba(255,255,255,0.05)`), NO borders, radius 0, text
  `rgba(255,255,255,0.7)`, placeholders `rgba(255,255,255,0.4)`: "Full
  Name", "Email address", "Subject" (text inputs) and "Message" (a 4-row
  textarea with taller 20px vertical padding)

#### Scenario: Send Message button

- **THEN** a full-width dark-charcoal `#2b2b28` button labeled "Send
  Message" SHALL appear below the fields (white text, 52px tall,
  border-radius ~4px)

#### Scenario: Submit behavior

- **WHEN** the user fills the form and submits
- **THEN** the form SHALL acknowledge the submission (e.g. swap to a
  success/confirmation message) so the interactive behavior is testable

### Requirement: Responsive behavior

The system SHALL keep the two-panel booking modal usable on narrow
viewports.

#### Scenario: Mobile layout

- **GIVEN** the Lobby app is rendered
- **WHEN** the viewport is narrower than ~768px
- **THEN** the launch heading/button and the modal SHALL remain centered
- **AND** the modal SHALL stack its two panels vertically (photo panel on
  top — fixed ~300px tall, `background-position: top center` — olive form
  below) with no horizontal overflow
- **AND** the form fields SHALL stay full-width

### Requirement: Footer

The system SHALL render the standard Component Dock attribution footer.

#### Scenario: Footer content

- **GIVEN** the Lobby app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Lobby app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Lobby — Appointment Booking Modal"

## Verification checklist

- [ ] `openspec/specs/template-lobby/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/lobby/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 07 preview DOM 1:1
      (full-viewport centered launch section → olive 4px-radius launch
      button → centered 950px SQUARE two-panel modal: LEFT photo panel
      (cover portrait, no text) | RIGHT olive `#afa939` panel (close ×
      top-right / "Booking an Appointment" eyebrow / "Free Consultation"
      heading / 3 filled text inputs + 4-row Message textarea / full-width
      dark `#2b2b28` "Send Message" button) → minimal Component Dock
      footer. Mobile: panels stack, photo panel 300px, no overflow.
- [ ] Tokens used in the app: brand olive `#afa939` (primary — launch
      button, links, right panel bg), charcoal `#2b2b28` (Send Message
      button), white `#fff` (launch page, modal bg, button text, close
      glyph), text layers `rgba(255,255,255,0.8/0.7/0.4)` (body+headings /
      input text / placeholders), input fill `rgba(255,255,255,0.05)`,
      close bg `rgba(0,0,0,0.1)`, modal shadow
      `0 10px 34px -15px rgba(0,0,0,0.24)`; Poppins (300;400;700) via
      Google Fonts `<link>`; BUTTONS radius **4px**; FILLED inputs (no
      borders, subtle white fill — NOT Modal 06's underline style);
      modal max-width **950px** (not 900).
- [ ] No ColorLib references in `apps/lobby` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: ONE background photo on the left panel (screened picsum
      seed — professional/portrait subject; probe the seed's rendered image
      per the seed-screening method before committing, and document the
      lawyer-photo substitution in the PR). Icons: `X` from lucide-react or
      an inline SVG for the close (probe
      `node -e "console.log(typeof require('lucide-react').X)"`).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; form fields have accessible labels (the source
      uses placeholders only — add visually-hidden labels or `aria-label`s
      wired to the inputs, required for `getByLabelText`); conditional
      render (not in DOM when closed). A11y deviation allowed: add a
      subtle focus-visible treatment on the filled inputs (the source
      leaves `.form-control:focus` at Bootstrap defaults inside the modal
      but the flat filled style benefits from a visible focus ring).
