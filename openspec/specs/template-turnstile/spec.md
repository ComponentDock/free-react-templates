# Template: Turnstile (Password-Protected Link Modal)

## Purpose

Turnstile is a single-page password-protected-link modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 20" free template (source:
https://colorlib.com/wp/template/modal-20/), built under a DIFFERENT name
(**Turnstile** — the twentieth of the architectural-entrance names for this
UI series, after Portico (Modal 01), Vestibule (Modal 02), Portal (Modal 03),
Threshold (Modal 04), Doorway (Modal 05), Gateway (Modal 06), Lobby (Modal
07), Narthex (Modal 08), Mezzanine (Modal 09), Ingress (Modal 10), Vestry
(Modal 11), Postern (Modal 12), Rotunda (Modal 13), Concourse (Modal 14),
Promenade (Modal 15), Peristyle (Modal 16), Parvis (Modal 17), Propylaeum
(Modal 18), and Wicket (Modal 19); a turnstile is a controlled-access gate
that lets only authorized people through — exactly what a password-protected
link modal does — per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`div.container.content` with a centered heading "Modal #10" (see quirk note
below) and a Bootstrap **secondary-gray** `btn-secondary` "Launch modal"
button that opens a **centered** Bootstrap modal (`modal-dialog
modal-dialog-centered`, default max-width 500px, SQUARE outer via
`rounded-0`) whose rounded **WHITE** (`#fff`, 7px radius, deep shadow) body
holds a password-protected-link dialog: a top-right close × (invisible until
hover, `#ccc` → `#000`), an **80px circular lock badge** (`warp-icon`,
background `rgba(62, 100, 255, 0.05)`, blue `#3e64ff` lock glyph), the dark
label "This link is password protected", a gray description paragraph, a
centered **underline-only password input** (`border-bottom: 1px solid #ccc`,
focus → `#000`), and a centered **pill** (30px radius) blue `btn-primary`
"Submit" button — and this bootstrap bundle is CUSTOMIZED, so the primary
blue is the same brand blue as the lock: **`#3e64ff`** (not stock Bootstrap
`#007bff`). The whole template is ONE interactive surface — the launch
button and the password modal. Turnstile recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Modal 20" is FORBIDDEN as the app
> name. **Turnstile** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 20". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 819). Free
  password-protected-link modal component template. The `modal-20` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-20/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–19) is
  `https://preview.colorlib.com/theme/bootstrap/modal-20/` (HTTP 200,
  17.5KB HTML). Stylesheets: `css/bootstrap.min.css` (178.1KB — **a
  CUSTOMIZED Bootstrap 4.3.1** whose primary color is `#3e64ff`, NOT stock
  `#007bff` — the brand-blue consistency between lock icon and Submit
  button is intentional), `css/style.css` (**3.1KB — this template's full
  custom token source**; read it all, it is short), `fonts/icomoon/style.css`
  (79.8KB — glyphs: `icon-lock2` \e5cd, `icon-close2` \e897). Roboto (300 + 400) via cf-fonts @font-face blocks in the head (Poppins + Source Serif
  Pro also load — series-shared dead includes; the ACTIVE font is Roboto).
  `js/main.js` (59 bytes): ONLY a COMMENTED-OUT `$('#exampleModalCenter').modal()`
  — dead code, the modal opens purely via the launch button's
  `data-toggle="modal"`. Screenshot (`modal-20.jpg`, 1200×972,
  browser-verified 2026-08-16): the modal OPEN over a gray backdrop — a
  centered WHITE rounded card with a soft deep shadow holding: a blue
  padlock icon at top-center inside its circle, bold near-black "This link
  is password protected", the small gray quote sentence, an "Enter
  password" input with ONLY a thin gray underline, and a pill-shaped
  medium-blue (#3e64ff family) "Submit" button with white text. Launch page
  behind: white, centered, with a dark-gray button.
- **QUIRK — heading says "Modal #10":** the live DOM's `<title>` AND the
  launch heading `<h3>` both read "Modal #10" (the series copy-pasted Modal
  10's markup into the 20 slot). The heading is only a demo label — replace
  with the new brand name ("Turnstile") + demo label like the sibling
  recreations (Portico → "Portico" + "Launch Sign-In"). Do NOT replicate
  the "Modal #10" typo literally.
- **QUIRK — label has an empty `for=""`:** the "This link is password
  protected" label's `for` attribute is empty — no programmatic association
  with the input. In the recreation, associate it properly
  (`htmlFor` on the input's id) for a11y (documented fix).
- **Visual design (screenshot + live DOM):** clean, minimal access-gate
  promo. White launch page with a single gray 4px-radius button and ONE
  floating dialog. Signature elements: centered WHITE 500px card (7px body
  radius showing through the square outer), circular lock badge in a
  very-light-blue tint, only-an-underline input, pill blue Submit. The
  design system color is the brand blue **`#3e64ff`** (lock icon + Submit
  - 5% tint backgrounds). Grays carry the rest: `#6c757d` launch button,
    `#ccc` underline/close, `#777` body text, `#b3b3b3` muted, `#000`
    focus/close-hover.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (`.content { height:
100vh }` — full viewport) → `div.row.align-items-center.content` →
     `div.col-12.text-center`:
     - `h3.mb-4` — "Modal #10" (quirk — use "Turnstile").
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       secondary **`#6c757d`** fill, white text, custom 4px radius,
       24px/16px padding — NOT a pill).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button
     toggles; standard dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (**max-width 500px** at ≥576px — NO modal-lg here, unlike Modal 19's
     800px; margin 1.75rem auto) → `div.modal-content.rounded-0` (SQUARE —
     `.rounded-0 { border-radius: 0 !important }` wins over the custom
     7px) → `div.modal-body.p-4.px-5` (radius **7px**, `overflow: hidden`,
     background **`#fff`** — WHITE, unlike Modal 19's `#efefef`,
     `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`; padding 1.5rem
     vertical / 3rem horizontal — this white rounded body IS the visible
     card):
     - `a.close-btn` — `data-dismiss="modal"`, `aria-label="Close"`
       (position absolute, right **20px** top **20px**, font-size 20px;
       the glyph `span.icon-close2` is **`#ccc`**, hover → **`#000`**).
     - `div.warp-icon.mb-4` — **80×80** circle (`width/height 80px`, `margin:
0 auto`, `border-radius: 50%`, background **`rgba(62, 100, 255,
0.05)`**, color **`#3e64ff`**; the centered 40px `span.icon-lock2`
       glyph is absolutely positioned at 50%/50% with translate(-50%,-50%)).
     - `form action="#"`:
       - `label` — "This link is password protected" (plain label, NO
         custom styling — inherits default body `#212529`; it is the
         dialog's prominent dark text; `for=""` empty quirk).
       - `p.mb-4` — description: "All their equipment and instruments
         are alive. The sky was cloudless and of a deep dark blue."
         (color **`#777`**, font-size **14px** via
         `.modal .modal-content .modal-body p`, weight 300 from the page
         `p` rule).
       - `div.form-group.mb-4` — `input[type="password"].form-control.text-center`
         — placeholder **"Enter password"**; `.form-control` custom:
         `border: none; border-radius: 0; border-bottom: 1px solid #ccc;
padding-left: 0; padding-right: 0` (underline-only field, no
         box); `:active/:focus/:hover` → **`border-bottom: 1px solid
#000`**, `box-shadow: none; outline: none`; `text-center`
         centers the typed dots/placeholder.
       - `div.d-flex` → `div.mx-auto` → `a.btn.btn-primary` — "Submit"
         (background **`#3e64ff`** — the CUSTOM bootstrap primary,
         `border-color: #3e64ff`, white text; hover → **`#1845ff`**,
         focus ring `rgba(91,123,255,0.5)`, active → `#0b3bff`; the
         in-modal `.modal .btn { border-radius: 30px }` makes it a
         **PILL**; padding 10px 30px from the custom global `.btn` — no
         utility overrides on this one).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Design tokens:**
  - Brand/primary: **`#3e64ff`** (blue — lock icon color, Submit button
    fill/border, the 5%-alpha `rgba(62,100,255,0.05)` warp-icon tint).
    Button states: hover `#1845ff`, active `#0b3bff`, focus ring
    `rgba(91,123,255,0.5)`.
  - Launch button: Bootstrap secondary **`#6c757d`** fill, WHITE text,
    custom `.btn { border-radius: 4px; border: none }` (NOT a pill),
    `px-4 py-3` = 24px/16px (utility !important wins over the custom
    10px/30px), no shadow. Hover `#5a6268`.
  - Card: modal-body bg **`#fff`** (white), radius **7px**, overflow hidden,
    shadow **`0 10px 50px -10px rgba(0,0,0,0.9)`**; modal-content
    transparent bg, border none, SQUARE (`rounded-0 !important`); dialog
    max-width **500px** (default Bootstrap, NOT modal-lg), centered both
    axes; body padding 1.5rem / 3rem.
  - Lock badge: 80×80 circle, `bg rgba(62,100,255,0.05)`, glyph `#3e64ff`
    at 40px, centered via absolute 50%+translate.
  - Input: underline-only — `border-bottom: 1px solid #ccc`, radius 0, no
    box/outline; focus/hover underline → `#000`; text centered; placeholder
    "Enter password" (gray default `#6c757d`-ish from Bootstrap form-control
    — `#495057` stock; keep a muted gray).
  - Close ×: absolute right/top 20px, 20px glyph, `#ccc` → hover `#000`.
  - Text: launch heading default `#212529`; dialog label inherits body
    (`#212529`); description `#777` **14px** weight 300; label/description
    centered (form is inside `text-center` main-content).
  - Font: **Roboto** (300/400 — the active family). Poppins + Source Serif
    Pro are loaded but UNUSED by this template's CSS (series-shared head
    includes) — do NOT load them in the recreation.
  - Rhythm: single centered column `col-12` inside a `height: 100vh`
    container (recreate with `min-h-screen` flex centering, no JS resize
    needed).
- **Recreation approach:** white full-viewport centered page (h3 "Turnstile"
  - gray 4px-radius "Launch Modal" button); the modal is a state-driven
    overlay (open on button click, close on × / backdrop / Escape) — no
    Bootstrap dependency: `role="dialog"` `aria-modal="true"` semantics, dark
    backdrop fade, centered max-w-500px SQUARE-outside/7px-round WHITE body
    with the source's deep shadow. Inside: `X` close top-right (`#ccc` →
    hover `#000`, `aria-label="Close"`), the 80px circular `Lock` badge (5%
    blue tint bg + `#3e64ff`), the dark label ("This link is password
    protected", proper `htmlFor` association), the gray `#777` 14px quote
    description, the centered underline-only password input (border-b `#ccc`
    → focus `#000`), and a centered pill `#3e64ff` "Submit" button (hover
    `#1845ff`) that does NOT navigate (decorative form per the source's
    `action="#"`). Plus the mandatory minimal Component Dock footer. Icons:
    lucide-react (`X`, `Lock` — probe exports before use — see tasks.md).
    No images at all (the source has none in this modal).

## Requirements

### Requirement: Launch page

The system SHALL render a full-viewport centered page with a heading and a
launch button.

#### Scenario: Centered launch section

- **GIVEN** the Turnstile app is rendered
- **WHEN** the page loads
- **THEN** a white full-viewport section SHALL show a centered heading
  ("Turnstile" — the new brand name in place of the source's "Modal #10"
  quirk)
- **AND** it SHALL show a gray (`#6c757d`) button labeled "Launch Modal"
  with white text and a 4px border radius
- **AND** the launch button SHALL have generous padding (px-4 py-3
  proportions, ~24px horizontal / 16px vertical)

### Requirement: Modal dialog

The system SHALL open a centered modal dialog on launch and dismiss it on
close.

#### Scenario: Open modal

- **GIVEN** the Turnstile app is rendered
- **WHEN** the user clicks the launch button
- **THEN** a dark backdrop SHALL fade in over the page
- **AND** a centered dialog (max-width ~500px) SHALL appear whose body is a
  WHITE (`#fff`) rounded card (7px radius) with the shadow `0 10px 50px
-10px rgba(0,0,0,0.9)`
- **AND** the dialog SHALL have `role="dialog"` and `aria-modal="true"` and
  an accessible close control (`aria-label="Close"`)
- **AND** opacity/transform SHALL animate in over ~0.3s (Bootstrap `.fade`
  behavior — fade + slight -50px→0 translate)

#### Scenario: Close modal

- **WHEN** the modal is open
- **THEN** clicking the × close button, the backdrop, or pressing Escape
  SHALL dismiss the modal
- **AND** focus SHALL be moved into the dialog on open and restored to the
  launch button on close

### Requirement: Password-protected link content

The system SHALL render the lock badge, label, description, password input,
and submit button inside the dialog.

#### Scenario: Lock badge and copy

- **GIVEN** the modal is open
- **THEN** the dialog SHALL show a centered 80×80 circular lock badge whose
  background is `rgba(62, 100, 255, 0.05)` and whose lock glyph (`Lock`) is
  `#3e64ff` at ~40px
- **AND** it SHALL show the label "This link is password protected" in
  default body text color (prominent dark text, ~16–18px)
- **AND** it SHALL show the gray (`#777`, 14px, weight 300) description
  paragraph below the label

#### Scenario: Password input

- **WHEN** the password field displays
- **THEN** it SHALL be a `type="password"` input with placeholder "Enter
  password", horizontally centered text, and NO visible box — only a thin
  `#ccc` bottom border
- **AND** on focus/hover the bottom border SHALL turn `#000` with no
  outline/shadow
- **AND** the label SHALL be associated with the input (`htmlFor` — the
  source's empty `for=""` quirk is fixed)

#### Scenario: Submit button

- **WHEN** the dialog content displays
- **THEN** a centered pill-shaped (30px radius) blue button labeled "Submit"
  SHALL show with white text on a `#3e64ff` fill (hover `#1845ff`, active
  `#0b3bff`)
- **AND** the button SHALL have ~10px/30px padding proportions

### Requirement: Form/interaction behavior

The system SHALL keep the dialog's interactions client-side only.

#### Scenario: Submit is decorative

- **GIVEN** the modal is open
- **WHEN** the user types a password and clicks Submit (or presses Enter in
  the password field)
- **THEN** the page SHALL NOT navigate or reload (the source's `action="#"`
  form is decorative — prevent default; the input value may be read but no
  validation/submission is required)

#### Scenario: Close button is decorative-free

- **WHEN** the user clicks the × close icon
- **THEN** the dialog SHALL close and the input value SHALL be cleared (or
  reset on next open)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Turnstile app is rendered
- **WHEN** the footer displays
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text)

### Requirement: Page composition

The system SHALL compose the page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Turnstile app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render the launch section in the main landmark and
  the Component Dock footer in the contentinfo landmark
- **AND** the document title SHALL be "Turnstile — Password-Protected Link
  Modal"

## Verification checklist

- [ ] `openspec/specs/template-turnstile/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/turnstile/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 20 preview DOM 1:1
      (full-viewport centered launch section → gray 4px-radius launch
      button → centered max-w-500px dialog: `X` close top-right #ccc→#000,
      80px circular lock badge (5% blue tint + #3e64ff), "This link is
      password protected" label, gray #777 14px description, centered
      underline-only password input (#ccc → #000 focus), centered pill
      #3e64ff Submit) → minimal Component Dock footer.
- [ ] Tokens used in the app: launch button `#6c757d` (white text, 4px
      radius), card body `#fff` (7px radius, shadow `0 10px 50px -10px
    rgba(0,0,0,0.9)`), brand blue `#3e64ff` (lock + Submit, tint
      `rgba(62,100,255,0.05)`), Submit hover `#1845ff` / active `#0b3bff`,
      description `#777` (14px), underline `#ccc` → focus `#000`, close
      `#ccc` → hover `#000`; Roboto via Google Fonts `<link>` (NO
      Poppins/Source Serif Pro — dead includes in the source).
- [ ] No ColorLib references in `apps/turnstile` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] NO images (the source modal has none); icons only via lucide-react.
- [ ] Source quirks honored: "Modal #10" typo NOT copied (new brand name
      used); empty `for=""` label fixed with proper `htmlFor` association
      (both documented deviations).
- [ ] lucide icons probed (`X`, `Lock` exist in current lucide-react)
      before use.
- [ ] Implementer gate: `scripts/verify-app.sh turnstile` (typecheck +
      lint + 100% coverage tests + build) and `npm run spec:validate`.
