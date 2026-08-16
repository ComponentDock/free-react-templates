# Template: Peristyle (Registration Form Modal)

## Purpose

Peristyle is a single-page registration-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 16" free
template (source: https://colorlib.com/wp/template/modal-16/), built under a
DIFFERENT name (**Peristyle** — a row of columns surrounding a courtyard,
temple, or building, or the covered walkway/porch those columns form; the
sixteenth of the architectural-entrance names for this UI series, after
Portico (Modal 01), Vestibule (Modal 02), Portal (Modal 03), Threshold
(Modal 04), Doorway (Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex
(Modal 08), Mezzanine (Modal 09), Ingress (Modal 10), Vestry (Modal 11),
Postern (Modal 12), Rotunda (Modal 13), Concourse (Modal 14), and Promenade
(Modal 15) — a peristyle is the columned walkway that leads into and around a
courtyard, fitting for this series of entry/transition dialogs — per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light
(`.content` height `100vh`) launch section with a centered heading "Modal #6"
and a **gray (`#6c757d`)** button ("Launch modal", `border-radius: 4px`) that
opens a centered **LARGE** Bootstrap modal (`modal-lg modal-dialog-centered`
— this template's Bootstrap 4.3.1 CSS **DOES ship `.modal-lg`** → the dialog
renders at **max-width 800px**, unlike Promenade/Modal 15 whose bootstrap
lacked the rule and fell back to 500px) whose dialog is a **ROUNDED (7px)
LIGHT-GRAY card** (`background-color: #efefef` — NOT the plain white `#fff`
of Modal 15, NOT Modals 13/14's colored fills) on a dark blurred backdrop. It
is a **"Registration form"** modal split into a TWO-COLUMN `.d-flex` layout:
a **left image column** (`.bg-image.promo-img`, `flex: 0 0 50%`, `mr-3` — a
full-height cover photo filling HALF the dialog, here a globular dark-green
cactus in a small square white pot with white gravel, on a seamless
light-gray backdrop, 800×1422 vertical) and a **right content column**
(`.content-text.p-4`) — heading "Registration form" (black, 22px), a small
gray quote paragraph (`#777`, 14px), and a **4-field registration form**
(**Country** select with the full world-country list, **Full Name**,
**Email Address**, **Date of Birth** split MM/DD/YYYY — labeled `.form-group`
inputs with **NO visible border on the input** and instead a soft shadow
`0 1px 3px 0 rgba(0,0,0,0.2)`; focus gets the ORANGE ring
`rgba(237,81,7,0.25)` + `border-color: #fba278`), a full-width
**burnt-orange "Sign up" submit** (custom-template `.btn-primary` overridden
from the default `#007bff` to **`#ed5107`**), and a tiny gray note "By signing
up you will agree to our Privacy Policy" (`.custom-note` `#999`, link `#555`).
Distinguishing features vs the rest of the Bootstrap Modal family:

- **LARGE 800px dialog** — this template's customized Bootstrap 4.3.1 ships
  `.modal-lg { max-width: 800px }` (Promenade/Modal 15's bootstrap did NOT, so
  its `modal-lg` fell back to the default 500px; here the dialog is genuinely
  BIG — the widest in the prepped series so far).
- **LIGHT-GRAY card fill** (`#efefef`) — NOT the white `#fff` (Modal 15), NOT
  the peach `#fff4e4` (Modal 14), NOT the pink `#f9eaf2` (Modal 13).
- **4-part registration form** (Country select → Full Name → Email Address →
  Date of Birth MM/DD/YYYY) — the richest form in the series so far; NOT the
  3-field signup (Modal 15), NOT a coupon box (Modal 14), NOT an
  email/Subscribe split (Modal 13).
- **Borderless inputs with a soft shadow** (`border: none` +
  `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2)` on `.form-control` and
  `.custom-select`) — NOT the `1px solid #ccc` borders of Modal 15.
- **"Registration form" heading kind** (with a full country dropdown) — a
  registration/join demo, not an "access resources" gated-content signup.
- **NO close × button** and NO icon glyphs — the only dismiss path is the
  backdrop click / Escape (Bootstrap default). `main.js` auto-open is
  commented out — the modal opens ONLY via the launch button's data-API.
- SOURCE QUIRK: the original HTML has a malformed form — `</form>` closes
  right after the Country select (the Full Name / Email / DOB / submit fields
  sit outside the form in the parsed tree, with a stray `</form>` the browser
  ignores). The recreation MUST render ONE proper `<form>` wrapping ALL
  fields (visible design unchanged).

The whole template is ONE interactive surface — the launch button and the
registration modal. Peristyle recreates the structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied; the
left cover photo is replaced with a picsum placeholder of the same vertical
minimal-photo kind; input labels/placeholders recreated as the same form-field
kinds; the country list recreated as a representative select of the same
kind).

> NAMING NOTE: the ColorLib source name `modal-16` / "Modal 16" is FORBIDDEN
> as the app name. **Peristyle** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 16". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 799; row at line 815). Free
  registration-form modal component template ("Modal V16 - Free Registration
  From Pop-Up" per the ColorLib page `<title>`). The `modal-16` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark). Demo `<title>` uses the
  generic "Modal #6" copy, matching the launch heading.
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-16/` returns 404; the REAL
  preview URL (same `/theme/bootstrap/` prefix as the rest of the Bootstrap UI
  series) is `https://preview.colorlib.com/theme/bootstrap/modal-16/` (HTTP
  200, ~34.7KB HTML, `<title>` "Modal #6"). Stylesheets:
  `css/style.css` (2.9KB — the template's custom styles; token source),
  `css/bootstrap.min.css` (Bootstrap 4.3.1 — **CUSTOMIZED for this theme:
  `.btn-primary` is overridden to `#ed5107`, `.form-control:focus` gets the
  orange ring `rgba(237,81,7,0.25)` + border `#fba278`, and `.modal-lg` /
  `.modal-xl` ship with `max-width: 800px`**), `fonts/icomoon/style.css`
  (loaded but the modal has NO icon glyphs in use). NO custom `js/` behavior:
  `js/main.js` only contains a commented-out auto-open line, so the modal
  opens ONLY via the launch button's Bootstrap data-API
  (`data-toggle="modal" data-target="#exampleModalCenter"`).
- **Visual design (screenshot `modal-16.jpg` 1200×972, verified 2026-08-16):**
  a clean light-gray registration modal on a flat light page. A **light-gray
  rounded card** split left/right: on the LEFT a **half-width vertical cover
  photo** (a small globular dark-green cactus in a small square white pot,
  white gravel on the soil, seamless light-gray backdrop, soft diffused
  light); on the RIGHT a bold black "Registration form" heading, a small
  light-gray quote paragraph, the labeled inputs (Country dropdown, Full
  Name, Email Address, Date of Birth MM/DD/YYYY), a full-width
  **burnt-orange "Sign up" button**, and a tiny gray "By signing up you will
  agree to our Privacy Policy" note with a darker link. Brand accent: burnt
  orange `#ed5107`.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (**height: 100vh** —
     full-viewport; no bg color set → light page) →
     `div.row.align-items-center.content` (vertically centered, full height)
     → `div.col-12.text-center` (centered column):
     - `h3.mb-4` — "Modal #6" (Bootstrap h3; Roboto; no custom color override
       → dark `#212529`).
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal" (`type="button"`,
       `data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       `.btn-secondary`: bg **`#6c757d`**, color **#fff**, border `#6c757d`;
       custom `.btn { border-radius: 4px; border: none; }` → **slightly
       rounded corners (4px)**, no border; padding px-4 py-3; hover `#5a6268`).
       NOTE: the launch button here is the GRAY secondary color, NOT a blue or
       orange primary — consistent with the other Modal series templates.
  2. **Registration modal** — `div.modal.fade#exampleModalCenter` (tabindex
     "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; hidden until the launch button toggles it; Bootstrap
     backdrop `#000` (default ~50% opacity via `.modal-backdrop`) →
     `div.modal-dialog.modal-lg.modal-dialog-centered` (**`.modal-lg` ships in
     this template's Bootstrap: `max-width: 800px`** → the dialog is LARGE,
     horizontally centered via `modal-dialog-centered`) →
     `div.modal-content.rounded-0` (custom `.modal .modal-content {
background-color: transparent; border: none; border-radius: 7px; }` →
     **RADIUS 7px** on the modal shell, no border, transparent bg) →
     `div.modal-body.py-0` (custom `.modal .modal-content .modal-body`:
     `border-radius: 7px; overflow: hidden; background-color: #efefef;
padding-left/right: 0;` and `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`
     (a **dark** soft large shadow) → **LIGHT-GRAY card**). Contains:
     - `div.d-flex.main-content` — the two-column split layout (custom
       `.modal .main-content { padding-left: 20px; padding-right: 20px; }`).
       Inside:
       - `div.bg-image.promo-img.mr-3` — custom `.modal .modal-content
.modal-body .promo-img { flex: 0 0 50%; }` with `.bg-image {
background-size: cover; background-position: center; background-repeat:
no-repeat; }` — the **LEFT image column**, `flex: 0 0 50%` (**HALF the
         dialog width**), `mr-3` right margin, `background-image: url('images/
img_1.jpg')` (a full-height cover photo — the cactus-in-white-pot shot,
         800×1422). In the recreation this becomes a `<div>` (or `<img>`)
         LEFT column ~50% wide with the img `object-cover` (full height) —
         use a picsum placeholder (vertical crop) of the same kind (a
         minimal object-plant photo). No text in this column.
       - `div.content-text.p-4` (right content column) →
         - `h3` — "Registration form" (custom `.modal .modal-content
.modal-body h3 { color: #000; font-size: 22px; }` → **22px BLACK**).
         - `p` — "All their equipment and instruments are alive. The sky was
           cloudless and of a deep dark blue." (custom `.modal
.modal-content .modal-body p { color: #777; font-size: 14px; }` → **GRAY
           `#777`, 14px**, font-weight 300 from the global `p` rule).
         - `form[action="#"]` — the registration form (SOURCE QUIRK: the
           `</form>` closes after the Country select; every field below sits
           outside the form in the parsed tree with a stray closing tag — the
           recreation wraps ALL fields in ONE proper form):
           - `div.form-group` → `label[for=country]` — "Country" +
             `select#country.custom-select[name=country]` — the **full world
             country list** (~250 `<option>`s, "Afghanistan" as the selected
             default; custom `.custom-select { border: none; box-shadow:
0 1px 3px 0 rgba(0,0,0,0.2); }` → **borderless with soft shadow**; focus
             keeps the ORANGE ring). Recreate as a `<select>` with a
             representative country list of the same kind (full list is fine
             as static data; never copy the source assets — option text is
             just data).
           - `div.form-group` → `label[for=fname]` — "Full Name" +
             `input#fname.form-control[type=text][placeholder="Full Name"]`
             (custom `.form-control { border: transparent; box-shadow:
0 1px 3px 0 rgba(0,0,0,0.2); border: none; }` → **BORDERLESS with soft
             shadow** — NOT the `#ccc` borders of Modal 15).
           - `div.form-group` → `label[for=email]` — "Email Address" +
             `input#email.form-control[type=email][placeholder="Enter email"]`
             (same borderless treatment).
           - `div.form-group.row.mb-4` → `div.col-12` →
             `label[for=mm]` — "Date of Birth" + THREE `col-md-4` inputs:
             `input#mm.form-control[placeholder="MM"]`,
             `input#dd.form-control[placeholder="DD"]`,
             `input#yyyy.form-control[placeholder="YYYY"]` (one row, three
             columns; same borderless treatment).
           - `div.form-group` → `input[type=submit][value="Sign up"]` — styled
             `.btn.btn-primary.btn-block` (custom-template `.btn-primary`: bg
             **`#ed5107`** (burnt orange), white text, full-width `btn-block`,
             radius 4px, border none, `padding-top/bottom: 10px` from custom
             css; hover `#c84406`, active `#bb4006`, focus shadow
             `rgba(240,107,44,0.5)`). Recreate as a full-width orange submit
             button.
           - `div.form-group` → `p.custom-note` → `small` — "By signing up you
             will agree to our [Privacy Policy](#)" (custom `.custom-note {
color: #999; }` and `.custom-note a { color: #555; font-weight: 900; }` →
             **TINY GRAY `#999` note, `#555` bold link**).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap): the dialog gets Bootstrap mobile margin (`margin:
0.5rem` on `.modal-dialog`) and shrinks; the d-flex two-column layout can
    compress — the 50% image column stays half and the right form column
    shrinks/wraps at small widths (verify inputs + submit stay readable;
    consider stacking the image above the form at the narrowest widths to
    avoid crushing the form — the source has no custom media queries, so keep
    the d-flex layout on desktop and verify mobile legibility). Launch section
    stays full-viewport. No custom media queries in this template's CSS.
- **Design tokens:**
  - Light gray **#efefef** — the modal body background (`.modal-body {
background-color: #efefef }`); the signature card fill of this modal (NOT
    white `#fff` like Modal 15, NOT Modals 13/14's colored fills; only the
    left HALF is the photo column).
  - Burnt orange **#ed5107** — the PRIMARY/brand accent: the "Sign up" submit
    bg (custom-template `.btn-primary`), white text, border `#ed5107`, hover
    `#c84406`, active `#bb4006`, focus shadow `rgba(240,107,44,0.5)`, and the
    form input focus ring `rgba(237,81,7,0.25)` + focus border `#fba278`.
    (This REPLACES the default Bootstrap `#007bff`; use `#ed5107` for
    fidelity.)
  - Gray **#6c757d** — SECONDARY: the launch button (`.btn-secondary`, white
    text, hover `#5a6268`).
  - Black **#000** — the modal heading "Registration form" (`.modal-body h3`,
    22px).
  - Gray **#777** — the quote paragraph inside the modal (`.modal-body p`,
    14px, weight 300). Global `p { color:#b3b3b3 }` outside the modal.
  - **None (transparent)** — input/select borders are `border: none` (NOT
    Modal 15's `#ccc`); instead each input/select gets the **soft shadow
    `0 1px 3px 0 rgba(0,0,0,0.2)`** (`.form-control`, `.custom-select`).
  - **#999** — the "By signing up…" note text (`.custom-note`); **#555** bold
    — the Privacy Policy link (`.custom-note a`, weight 900).
  - Dark modal shadow **0 10px 50px -10px rgba(0,0,0,0.9)** on the modal body;
    backdrop `#000` (Bootstrap default ~50% opacity).
  - Rounded corners: modal shell + body **radius 7px** (`.modal`,
    `.modal-content`, `.modal-body` all `border-radius: 7px`); buttons
    **radius 4px** (`.btn { border-radius: 4px }`), border none.
  - Fonts: **Roboto** system stack (body + all headings per `css/style.css`);
    load Roboto via Google Fonts `<link>` in `index.html`. (The source also
    declares Poppins + Source Serif Pro via cf-fonts but never applies them to
    the visible text — ignore; never copy the icomoon woff font — it is loaded
    but no glyphs render in this modal.)
  - Left cover image: `.promo-img` **50% flex width** (`flex: 0 0 50%`),
    full-height `object-cover` photo — replace with a picsum placeholder
    `https://picsum.photos/seed/peristyle-1/600/900` (a vertical minimal
    object/plant photo; the source shot is an 800×1422 vertical cactus-in-pot
    photo) sized ~50% of the dialog width by the modal's full height; `mr-3`
    right margin. Recreate as a `<div class="promo-img">` or `<img>` with
    `object-cover` (keep the same half-width column). The close × icon
    (icomoon) is NOT used in this template — there is no close button; dismiss
    is backdrop/Escape only.
  - Content kinds: launch heading "Modal #6" (generic demo copy) → recreated
    as "Peristyle" (the NEW name); launch button "Launch modal" → "Launch
    Peristyle"; modal heading "Registration form" → keep the registration
    heading kind; quote paragraph keeps placeholder-copy kind; form fields
    Country (full list select) / Full Name / Email Address / Date of Birth
    (MM/DD/YYYY) keep the same field kinds; "Sign up" submit keeps label; "By
    signing up you will agree to our Privacy Policy" note keeps kind with the
    Privacy Policy link. NO coupon box (Modal 14), NO "No, thanks"/"Subscribe"
    split (Modal 13), NO gated-resources 3-field signup (Modal 15) — this is
    a 4-field registration form with a country dropdown and DOB.
  - Rhythm: light full-viewport launch page (heading → gray rounded button) →
    one ROUNDED (7px) **LARGE 800px LIGHT-GRAY** card with a **two-column
    split**: left ~50% cover image column, right column (LEFT-aligned within
    the padded column: black 22px "Registration form" h3 → gray 14px quote →
    4 labeled fields (Country select, Full Name, Email Address, Date of Birth
    MM/DD/YYYY) with borderless inputs + soft shadow + orange focus ring →
    full-width orange "Sign up" submit → tiny gray "By signing up you will
    agree to our Privacy Policy" note with bold `#555` link) → minimal
    Component Dock footer. No navbar, no other sections.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading
and a GRAY rounded launch button.

#### Scenario: Launch page

- **GIVEN** the Peristyle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a light full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal #6" (recreated as "Peristyle" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a GRAY button labeled "Launch modal" (recreate as
  "Launch Peristyle" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on gray `#6c757d` (the custom
  `.btn-secondary` color, matching the rest of the Modal series)
- **AND** the button SHALL have **slightly rounded corners (border-radius
  4px)**, no border, and comfortable padding (Bootstrap `px-4 py-3`)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the registration modal SHALL open centered over a dark backdrop
  (`#000`, ~50% opacity)

### Requirement: Modal shell

The system SHALL render a centered **LARGE (max-width 800px)** ROUNDED (7px)
modal dialog with a **solid LIGHT-GRAY background** (no full-body photo, no
colored card fill).

#### Scenario: Dialog shell

- **GIVEN** the Peristyle app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **800px** — this
  template's Bootstrap ships `.modal-lg`; do NOT fall back to 500px) with
  **ROUNDED corners (border-radius 7px — NOT square)** on the shell and body
- **AND** its whole body SHALL be covered by a **solid LIGHT-GRAY background
  `#efefef`** (the `.modal-body` fill — NOT white `#fff`, NOT pink/peach; only
  the left-half image column sits inside it)
- **AND** it SHALL cast the dark shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** there SHALL be NO close × button (dismiss is backdrop/Escape only,
  like the rest of the series)
- **AND** clicking the backdrop or pressing Escape SHALL close the dialog

### Requirement: Modal body — two-column registration form

The system SHALL render a two-column split modal body with a left
half-width cover-image column and a right content column (heading, quote,
registration form, orange submit, note).

#### Scenario: Two-column layout

- **GIVEN** the modal is open
- **THEN** the modal body SHALL use a horizontal (d-flex) two-column split with
  20px padding on both horizontal edges:
  - a LEFT column **50% of the dialog width** (`flex: 0 0 50%`) showing a
    full-height cover photo (`object-cover`; replace the source's
    cactus-in-white-pot image with a picsum placeholder
    `https://picsum.photos/seed/peristyle-1/600/900`)
  - a RIGHT content column (`p-4`) containing the text, form, and submit

#### Scenario: Right column content — heading and quote

- **GIVEN** the modal is open
- **THEN** the right column SHALL show the heading "Registration form" in
  BLACK ~22px (keep the registration heading kind)
- **AND** it SHALL show one short gray `#777` 14px placeholder/paraphrase
  paragraph (recreate the source's "All their equipment and instruments are
  alive…" line as equivalent muted gray prose — same kind: short quote)

#### Scenario: Registration form fields

- **GIVEN** the modal is open
- **THEN** the right column SHALL show ONE form wrapping FOUR labeled fields
  (the source's malformed HTML — `</form>` closing after the Country select —
  SHALL be fixed: all fields inside a single proper `<form>`), each with a
  visible label and a white **BORDERLESS input with the soft shadow
  `0 1px 3px 0 rgba(0,0,0,0.2)`** (NOT `#ccc` borders like Modal 15):
  - "Country" — a `<select>` with a representative world-country list (the
    source ships the ~250-entry full country list with "Afghanistan" as the
    selected default; a full static list or a representative subset of the
    same kind is acceptable)
  - "Full Name" — `type="text"`, placeholder "Full Name"
  - "Email Address" — `type="email"`, placeholder "Enter email"
  - "Date of Birth" — one row of THREE `col-md-4` inputs labeled "MM", "DD",
    "YYYY" (placeholders MM / DD / YYYY; the group SHALL have the
    "Date of Birth" label above it)
- **AND** each input/select SHALL get its own unique `id` with the matching
  `for` on the label (a11y — the source's DOB label points at only the first
  field; give each of the three DOB inputs its own accessible name)
- **AND** on focus each input SHALL show the orange focus treatment:
  `border-color: #fba278` + ring `0 0 0 0.2rem rgba(237,81,7,0.25)`

#### Scenario: Submit and note

- **GIVEN** the modal is open
- **THEN** the form SHALL show a full-width **burnt-orange submit button**
  labeled "Sign up" (custom-template `.btn-primary` = **`#ed5107`**, white
  text, radius 4px, border none, `padding-block: 10px`, hover `#c84406`,
  active `#bb4006`, focus ring `rgba(240,107,44,0.5)` — NOT the default blue)
- **AND** below the button it SHALL show a tiny gray **`#999`** note "By
  signing up you will agree to our Privacy Policy" with the **Privacy Policy**
  link in **`#555` bold (weight 900)**
- **AND** submitting with invalid input (e.g. bad email, missing required
  fields) SHALL block submission and show a per-field error (monorepo form
  convention — the source is a static `form[action="#"]` with no validation,
  so the recreation adds minimal client-side validation per conventions.md
  without changing the visual design)

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Peristyle app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Peristyle app is rendered
- **WHEN** the document loads
- **AND** the document title SHALL be "Peristyle — Registration Form Modal"

## Verification checklist

- [ ] `openspec/specs/template-peristyle/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/peristyle/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 16 preview DOM 1:1
      (full-viewport centered launch section → GRAY rounded launch button →
      centered **LARGE 800px** ROUNDED (7px) **LIGHT-GRAY (`#efefef`)**
      modal: two-column d-flex split with a 50% LEFT cover-image column and a
      RIGHT `p-4` column (black 22px "Registration form" h3 → gray 14px quote
      → 4 labeled fields Country select / Full Name / Email Address /
      Date of Birth MM/DD/YYYY → full-width orange "Sign up" submit → tiny
      gray "By signing up you will agree to our Privacy Policy" note with bold
      `#555` Privacy Policy link) → minimal Component Dock footer). NO close ×
      button, NO coupon box (Modal 14), NO "No, thanks"/"Subscribe" split
      (Modal 13), NO gated-resources 3-field signup (Modal 15).
- [ ] Tokens used in the app: light gray `#efefef` (modal bg — the ONLY card
      fill, no photo/overlay on the whole body), burnt orange `#ed5107` (Sign
      up submit, hover `#c84406`, active `#bb4006`, focus `rgba(240,107,44,0.5)`),
      gray `#6c757d` (launch button), black `#000` (heading, 22px), gray `#777`
      (quote, 14px), borderless inputs with soft shadow
      `0 1px 3px 0 rgba(0,0,0,0.2)` (NOT `#ccc` borders), `#999` (custom-note) + `#555` bold-900 (Privacy Policy link), dark modal shadow
      `0 10px 50px -10px rgba(0,0,0,0.9)`, backdrop `#000`; **Roboto** via
      Google Fonts `<link>`; dialog radius **7px (round)**, buttons radius
      **4px**, border none; input focus ring `rgba(237,81,7,0.25)` + border
      `#fba278`; left image column **50% width** (`object-cover`); dialog
      **max-width 800px** (`modal-lg` — do NOT fall back to 500px).
- [ ] No ColorLib references in `apps/peristyle` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Brands/assets: the left cover photo is replaced with a picsum
      placeholder (`https://picsum.photos/seed/peristyle-1/600/900` or
      similar — verify it renders a suitable vertical minimal object/plant
      photo); never copy `images/img_1.jpg` or any source font/asset; no
      lucide brand icons needed here (no brand marks present, no close ×; the
      icomoon font is loaded by the source but renders NO glyphs in this
      modal).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`, a
      labelled title, Escape-to-close, backdrop click closes; conditional
      render (not in DOM when closed); each form input/select has a UNIQUE
      `id` with matching `for` on its label (the source's form is malformed —
      `</form>` after the Country select — and its DOB label points at only
      one field; the recreation wraps ALL fields in ONE proper form with
      per-field labels).
- [ ] Form: Country `<select>` (representative world-country list), "Full
      Name" `type="text"` (placeholder "Full Name"), "Email Address"
      `type="email"` (placeholder "Enter email"), "Date of Birth" MM/DD/YYYY
      three-input row (placeholder MM / DD / YYYY) — all with visible labels;
      invalid submit blocked with per-field errors per conventions.md (the
      source is a static `form[action="#"]` with no validation — minimal
      client-side validation only, visual design unchanged); submit keeps the
      orange full-width style.
- [ ] Content: black 22px heading "Registration form", gray 14px quote,
      Country / Full Name / Email Address / Date of Birth labeled fields,
      full-width orange "Sign up" submit, tiny gray "By signing up you will
      agree to our Privacy Policy" note with bold `#555` link, gray rounded
      "Launch Peristyle" button on the full-viewport launch page.
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap `margin: 0.5rem`),
      the two-column split stays legible (50% image + form column; consider
      stacking the image above the form on the narrowest widths to avoid
      crushing the form — no custom media queries in the source), inputs +
      submit stay readable, launch section stays full-viewport.
- [ ] Source uses Bootstrap's data-API only (`data-toggle`/`data-dismiss`;
      `main.js` auto-open is commented out) — recreate open/close with React
      state (launch-to-open, backdrop/Escape-to-close); no auto-open on load.
