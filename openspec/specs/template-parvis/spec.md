# Template: Parvis (Log-In Modal)

## Purpose

Parvis is a single-page login-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 17" free
template (source: https://colorlib.com/wp/template/modal-17/), built under a
DIFFERENT name (**Parvis** — the enclosed court or open space in front of a
church or other large building's entrance, from Old French; the seventeenth
of the architectural-entrance names for this UI series, after Portico
(Modal 01), Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04),
Doorway (Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex (Modal 08),
Mezzanine (Modal 09), Ingress (Modal 10), Vestry (Modal 11), Postern
(Modal 12), Rotunda (Modal 13), Concourse (Modal 14), Promenade (Modal 15),
and Peristyle (Modal 16) — a parvis is the open gathering space that fronts a
church door, fitting for this series of entry/transition dialogs — per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light launch
section (`.content` height `100vh`) with a centered heading "Modal #7" and a
**gray (`#6c757d`) button** ("Launch modal", `px-4 py-3`, `border-radius: 4px`)
that opens a centered **medium** Bootstrap modal (`modal-dialog-centered` with
`modal-md` — which has NO rule in this bundle's Bootstrap 4.3.1, so the
dialog falls back to the default **max-width 500px**, unlike Peristyle/Modal
16's 800px `modal-lg`) whose dialog is a **SQUARE (`.rounded-0`) LIGHT-GRAY
card** (`background-color: #efefef`, radius 0, `overflow: hidden`) topped
with a **4px burnt-orange `#ed5107` border** and a heavy drop shadow
(`0 10px 50px -10px rgba(0,0,0,0.9)`) on a dark blurred backdrop. It is a
**"Log In" modal** split into a SINGLE content column (`.content-text.p-4` —
unlike Peristyle/Modal 16, Modal 15, and Modal 14, this demo has NO image
column): heading **"Log In"** (black, 22px), a small gray intro paragraph
(`#777`, 14px), and a **2-field login form** (label + `form-control` inputs
with NO visible border and instead a soft shadow `0 1px 3px 0 rgba(0,0,0,0.2)`):
**Username/Email** and **Password**, then a row with a full-width-margin
**burnt-orange "Login" submit** (`btn btn-primary mr-3 px-5` —
**`#ed5107`**, this bundle's Bootstrap is customized so `.btn-primary` is
burnt-orange, NOT the default blue) plus a "Forgot password" note-link, and a
final small line "If you don't have account yet / **Sign up here**"
(`.custom-note` `#999`, links `#555` weight 900). Distinguishing features vs
the rest of the Bootstrap Modal family:

- **Burnt-orange accent family** — shares the `#ed5107` orange of
  Peristyle/Modal 16 (the same customized Bootstrap bundle), NOT the rose
  `#fb8691` of Portico/Modal 01.
- **500px dialog** — `modal-md` has no CSS rule → default 500px (narrower
  than Peristyle's 800px, wider than Portico's 450px).
- **SQUARE corners** (`.rounded-0` on modal-content AND 0px radius on the
  modal/body) — no rounding anywhere, unlike the 7px-rounded card of
  Peristyle.
- **4px burnt-orange top border** on the modal body — the signature visual
  of this demo (the orange bar seen in the screenshot).
- **Gray `btn-secondary` launch button** with `px-4 py-3` — NOT the rose
  pill (`btn-primary py-3 px-4`) of Modal 01; the launch page uses the
  secondary gray for the CTA.
- **2-field login form with LABELS** (Username/Email + Password) — no
  icon circle (Modal 01), no full country dropdown (Modal 16), no checkbox
  row (Modal 01) — the simplest form in the family so far.
- **NO close × button, NO header, NO icons** — the only dismiss path is
  the backdrop click / Escape (Bootstrap default). `main.js` auto-open is
  commented out — the modal opens ONLY via the launch button's data-API.
- **Font ROBOTO** (not Poppins) — `/cf-fonts/` @font-face blocks in the
  head (300 weight loaded) + `font-family: "Roboto", ...` on body and
  headings.
- SOURCE QUIRKS: the password input's placeholder is **"Full Name"** (a
  copy-paste bug from another demo — visually wrong); the labels point at
  `for="name"` / `for="password"` while the inputs carry `id="email"` /
  `id="password"` (broken label-input association). The recreation MUST use
  a sensible password placeholder ("Enter password") and CORRECT label
  associations (visible design otherwise unchanged).

The whole template is ONE interactive surface — the launch button and the
login modal. Parvis recreates the structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied; the intro
paragraph paraphrased as the same kind of two-sentence filler line).

> NAMING NOTE: the ColorLib source name `modal-17` / "Modal 17" is FORBIDDEN
> as the app name. **Parvis** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 17". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 816). Free
  login-modal component template. The `modal-17` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-17/` returns 404;
  the ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bootstrap/modal-17/` (HTTP 200, 17.8KB
  HTML — the whole Bootstrap UI series lives under the `/theme/bootstrap/`
  prefix). Stylesheets: `css/style.css` (2.9KB — the demo's custom styles,
  token source), `css/bootstrap.min.css` (178KB — Bootstrap 4.3.1
  CUSTOMIZED: `.btn-primary{color:#fff;background-color:#ed5107;border-color:#ed5107}`,
  `.btn-secondary` standard `#6c757d`), `fonts/icomoon/style.css` (icon font
  — linked but NOT used in the body), Roboto via cf-fonts @font-face blocks
  (300/400; `-apple-system` fallback stack). Structure, copy, and tokens
  below are from the live DOM + both stylesheets. Screenshot
  (`modal-17.jpg`, 1200×972, browser-verified 2026-08-16) shows the page
  with the modal OPEN: grayish blurred backdrop over the light page, a
  centered light-gray square-corner dialog with a prominent rust-orange top
  bar (the 4px `#ed5107` border), "Log In" heading in dark text, two white
  inputs, a rectangular rust-orange "Login" button (white text), a
  dark-gray "Forgot password" link beside it, and the small footer line
  "If you don't have account yet? Sign up here". (Vision read the card as
  white; the CSS authority is `#efefef` — a light gray that reads
  near-white in the compressed screenshot.)
- **Visual design (screenshot + live DOM):** clean and minimal. Light page,
  single centered gray CTA, and one floating light-gray square dialog on a
  dark backdrop. The ONLY accent color is the burnt orange **#ed5107**
  (login button fill + the modal-body top border). Sans-serif (Roboto)
  throughout. No images anywhere — pure typography + labels + form +
  dialog.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (height `100vh` via
     `.content`; recreate with a full-viewport flex container `min-h-screen`)
     → `div.row.align-items-center.content` → `div.col-12.text-center`:
     - `h3.mb-4` — "Modal #7" (light heading; recreation uses the new brand
       name "Parvis").
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; solid gray
       `#6c757d` fill, white text, radius 4px).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it with `display:none` until the
     launch button toggles it; dark backdrop) →
     `div.modal-dialog.modal-md.modal-dialog-centered` (**NO `.modal-md`
     rule in Bootstrap 4.3.1 → falls back to the default max-width 500px**;
     vertically centered) → `div.modal-content.rounded-0` (bg transparent,
     border none, radius 0 → square):
     - `div.modal-body.py-0` (custom: bg **#efefef**, `border-top: 4px solid
#ed5107`, radius 0, `overflow: hidden`, padding-left/right 0,
       `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`):
       - `div.d-flex.main-content` → `div.content-text.p-4` (single column —
         NO promo-image column in this demo):
         - `h3` — "Log In" (color **#000**, font-size **22px**).
         - `p` — "All their equipment and instruments are alive. The sky was
           cloudless and of a deep dark blue." (color **#777**, font-size
           14px; ColorLib generic filler — paraphrase as the same kind of
           intro line).
         - `form action="#"`:
           - `.form-group` → `label[for="name"]` "Username/Email" +
             `input#email.form-control[type="email"][placeholder="Enter
email"]` (SOURCE QUIRK: label `for` mismatches input id —
             fix the association).
           - `.form-group` → `label[for="password"]` "Password" +
             `input#password.form-control[type="password"][placeholder="Full
Name"]` (SOURCE QUIRK: placeholder is a copy-paste bug — use
             "Enter password" in the recreation).
           - `.form-group.d-flex.align-items-center` →
             `input[type="submit"][value="Login"].btn.btn-primary.mr-3.px-5`
             (burnt orange `#ed5107`, white text, radius 4px, padding
             10px vertical via custom CSS ≈ 42px tall) + `p.custom-note.mb-0`
             > `a` "Forgot password" (`#999` note text, `#555` link weight
             > 900).
           - `.form-group` → `p.custom-note` > `small` "If you don't have
             account yet" + `a` "Sign up here" (`#555` weight 900).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Accent burnt orange **#ed5107** (theme-color) — `.btn-primary` fill +
    border (white text) AND the modal-body `border-top: 4px` bar; the ONLY
    accent on the page.
  - Launch CTA gray **#6c757d** (`.btn-secondary` fill + border, white
    text).
  - Backgrounds: page **#fff** (default body/section); modal-body **#efefef**
    (light gray card); modal backdrop `#000` with Bootstrap fade
    (`rgba(0,0,0,0.5)`); form-control bg white.
  - Shadows: modal `0 10px 50px -10px rgba(0,0,0,0.9)`; form controls
    `0 1px 3px 0 rgba(0,0,0,0.2)` (no visible border — `border: none` +
    shadow instead).
  - Text: h3 **#000** (22px); modal p **#777** (14px, weight 300); global p
    **#b3b3b3** (weight 300 — the base paragraph color, visible in the
    launch section context); `.custom-note` **#999** with links **#555**
    (weight **900**).
  - Font: **Roboto** (weight 300 loaded via cf-fonts; body/headings
    `font-family: "Roboto", -apple-system, ...`). Recreation: Google Fonts
    Roboto `<link>` (300/400/700/900) in index.html.
  - Buttons: `.btn` base radius **4px** (all buttons — NOT the 40px pill);
    launch `px-4 py-3` (≈48px tall); login submit `px-5` + 10px vertical
    padding ≈ 42px tall.
  - Form controls: `.form-control` border none + shadow
    `0 1px 3px 0 rgba(0,0,0,0.2)` (no border/focus-ring change — shadow
    stays constant on hover/focus).
  - Modal: dialog max-width **500px** (default — `modal-md` has no rule in
    this bundle); content radius **0** (square); body padding `p-4`
    (1.5rem); card `#efefef` + 4px orange top border + heavy shadow.
  - Rhythm: single centered column `col-12`, `.content` = full viewport
    height (recreate with `min-h-screen` flex centering, no JS resize
    needed). NO header/close button/icon circle — the simplest modal body
    in the family.
- **Recreation approach:** light full-viewport centered page (h3 "Parvis" +
  gray "Launch modal" button); the modal is a state-driven overlay (open on
  button click, close on backdrop/Escape) — no Bootstrap dependency:
  `role="dialog"` `aria-modal="true"` semantics, dark backdrop fade,
  centered 500px SQUARE light-gray (`#efefef`) card with the 4px
  `#ed5107` top bar and the source's heavy shadow, "Log In" heading,
  two LABELED inputs (Username/Email + Password, borderless with soft
  shadow), row with burnt-orange "Login" submit + "Forgot password" link,
  small "If you don't have account yet / Sign up here" line, and the
  mandatory minimal Component Dock footer. Icons: NONE (the source has no
  glyphs — skip lucide entirely). No images anywhere (the source has none).
  Google Fonts Roboto via `<link>` in index.html.

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Parvis app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Parvis" — the new brand name in place of "Modal #7")
- **AND** it SHALL show a gray (`#6c757d`) button labeled "Launch modal"
  with 4px radius and `px-4 py-3` proportions
- **AND** the button SHALL have white text

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Parvis app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered dialog (max-width ~500px) SHALL appear with `role="dialog"`
  and `aria-modal="true"` semantics
- **AND** the dialog SHALL be a square-cornered (radius 0) light-gray
  (`#efefef`) card topped with a 4px solid burnt-orange (`#ed5107`) border
- **AND** the card SHALL carry the source's shadow
  (`0 10px 50px -10px rgba(0,0,0,0.9)`)

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the backdrop or pressing Escape SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close
- **AND** the dialog SHALL have NO close button (matching the source — no
  header, no × glyph)

### Requirement: Modal content

The system SHALL render the login dialog contents.

#### Scenario: Log in heading

- **GIVEN** the modal is open
- **THEN** it SHALL show the heading "Log In" in black (#000, ~22px)
- **AND** it SHALL show a small gray (#777, 14px) intro paragraph beneath it
  (paraphrased two-sentence filler of the same kind)

#### Scenario: Login form

- **WHEN** the login form displays
- **THEN** it SHALL show a "Username/Email" label above an email input with
  placeholder "Enter email"
- **AND** it SHALL show a "Password" label above a password input
  (placeholder "Enter password" — FIXES the source's copy-paste bug
  "Full Name")
- **AND** the inputs SHALL be borderless with the soft shadow
  `0 1px 3px 0 rgba(0,0,0,0.2)` (no visible border)
- **AND** the labels SHALL be correctly associated with their inputs
  (FIXES the source's mismatched `for`/`id`)

#### Scenario: Login row

- **WHEN** the login form displays
- **THEN** it SHALL show a burnt-orange (`#ed5107`) "Login" submit button
  with white text and 4px radius
- **AND** the "Forgot password" link SHALL sit on the same row to the right
  (gray `#999` note, `#555` link, weight 900)

#### Scenario: Sign-up line

- **WHEN** the login form displays
- **THEN** it SHALL show the small line "If you don't have account yet" with
  a "Sign up here" link (gray `#999` note text, `#555` link, weight 900)

### Requirement: Form behavior

The system SHALL validate the login form client-side without a backend.

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

- **GIVEN** the Parvis app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Parvis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Parvis — Log-In Modal"

## Verification checklist

- [ ] `openspec/specs/template-parvis/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/parvis/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Modal 17 preview DOM 1:1
      (full-viewport centered launch section → gray "Launch modal" CTA →
      centered 500px SQUARE `#efefef` card with 4px `#ed5107` top bar:
      "Log In" / intro line / Username/Email + Password / Login submit +
      Forgot password / "If you don't have account yet — Sign up here")
      → minimal Component Dock footer. NO close button, NO header, NO icons.
- [ ] Tokens used in the app: burnt orange `#ed5107` (primary + top bar),
      launch gray `#6c757d`, card `#efefef`, page `#fff`, h3 `#000`
      (22px), modal p `#777` (14px), notes `#999` / links `#555` w900,
      modal shadow `0 10px 50px -10px rgba(0,0,0,0.9)`, control shadow
      `0 1px 3px 0 rgba(0,0,0,0.2)`; Roboto via Google Fonts `<link>`;
      all buttons 4px radius (NO pill).
- [ ] Source quirks handled: password placeholder reworded to "Enter
      password"; label `htmlFor` associations corrected; single `<form>`
      wrapping all fields (the source already has one form — keep it).
- [ ] No ColorLib references in `apps/parvis` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No images required (the source has none) — no picsum seeds needed.
- [ ] No lucide icons (the source uses no glyphs).
- [ ] Implementer gate: `scripts/verify-app.sh parvis` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
