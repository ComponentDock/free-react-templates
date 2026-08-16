# Template: Vestry (Information Modal)

## Purpose

Vestry is a single-page information-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 11" free
template (source: https://colorlib.com/wp/template/modal-11/), built under a
DIFFERENT name (**Vestry** — the eleventh of the architectural-entrance names
for this UI series, after Portico (Modal 01), Vestibule (Modal 02), Portal
(Modal 03), Threshold (Modal 04), Doorway (Modal 05), Gateway (Modal 06),
Lobby (Modal 07), Narthex (Modal 08), Mezzanine (Modal 09), and Ingress
(Modal 10); a vestry is a small room or anteroom attached to a house of
worship — an entry/antechamber, fitting for a series of entry/transition
dialogs — per the monorepo naming mandate: never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a minimal, centered demo page: a full-viewport light
(`.content` height `100vh`) launch section with a centered heading "Modal #1"
and a SQUARE-cornered BLUE **`#007bff`** button ("Launch modal", `border-radius:
0px !important`) that opens a centered Bootstrap modal
(`modal-dialog-centered`) whose content is a SQUARE-cornered
(`.modal-content.rounded-0`) card: a `modal-header` holding only a bold
title "Modal title" and a close × (`icon-close2` glyph), and a `modal-body`
with two short paragraphs of gray placeholder text. The whole template is ONE
interactive surface — the launch button and the information modal. Vestry
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied; the close glyph is recreated with a
lucide icon). Unlike the image-header newsletter modals (Ingress/Modal 10,
Mezzanine/Modal 09), this modal is a plain text-content dialog with SQUARE
corners — no photo band, no overlapping circle, no form.

> NAMING NOTE: the ColorLib source name "Modal 11" is FORBIDDEN as the app
> name. **Vestry** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 11". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 810). Free
  information-modal component template. The `modal-11` slug appears exactly
  ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-11/` returns 404; the
  REAL preview URL (same `/theme/bootstrap/` prefix as the rest of the
  Bootstrap UI series) is
  `https://preview.colorlib.com/theme/bootstrap/modal-11/` (HTTP 200, ~17KB
  HTML, `<title>` "Modal #1" — the template's demo title uses the generic
  "Modal #1" copy). Stylesheets: `css/style.css` (1.9KB — the template's
  custom styles; token source), `css/bootstrap.min.css` (Bootstrap 4.3.1 —
  `#007bff` primary, `.close`, `.modal-content.rounded-0`),
  `fonts/icomoon/style.css` (the close × `icon-close2` glyph). **Roboto**
  (system font stack: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe
UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`) — set on
  `body` and all headings; loaded from the browser/system (the source has NO
  Google-Fonts or cf-fonts link — Roboto falls back to the system stack).
  `css/style.css` has NO `js/` custom behavior beyond Bootstrap's data-API
  (`data-toggle="modal" data-target="#exampleModalCenter"` opens the modal;
  `data-dismiss="modal"` closes it) — no fullHeight script, NOTHING commented
  out. Structure, copy, and tokens below are from the live DOM + the two
  stylesheets. Screenshot (`modal-11.jpg`, 1200×972, browser-verified
  2026-08-16) shows the launch page as a light-gray full-viewport area and the
  modal OPEN (centered over a medium-gray backdrop): a WHITE SQUARE-cornered
  card with a bold "Modal title" heading at top-left, two gray paragraphs of
  placeholder text below, and no buttons inside the modal body (the close ×
  is in the header).
- **Visual design (screenshot + live render):** clean, flat, minimal
  information dialog — one blue SQUARE CTA on a light page, then one SQUARE
  500px-ish dialog: a simple header (bold title + close ×) and a body of two
  gray placeholder paragraphs. Brand accent: Bootstrap primary blue
  **`#007bff`** (launch button). Body paragraph text is light gray **`#b3b3b3`**
  (font-weight 300). Sans-serif Roboto everywhere. The ONLY non-text element
  is the close × glyph. Pure UI — one button + one dialog + the close ×.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (**height: 100vh** —
     full-viewport; no bg color set → light page per screenshot) →
     `div.row.align-items-center.content` (vertically centered, full height)
     → `div.col-12.text-center` (centered column):
     - `h3.mb-4` — "Modal #1" (Bootstrap h3 heading; Roboto; no custom color
       override → dark `#212529`).
     - `button.btn.btn-primary` — "Launch modal" (`type="button"`,
       `data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 0px !important; border: none; box-shadow: 0
7px 0px -2px rgba(0, 123, 255, 0.3); padding: 10px 20px !important;
}` → **SQUARE corners (radius 0)**, padding 10px 20px, and a soft
       blue UNDER-shadow (`rgba(0,123,255,0.3)`, offset 7px down, -2px
       blur) — a subtle "lifted" 3D accent; Bootstrap `.btn-primary` gives
       bg **`#007bff`**, border none, WHITE text; focus/active: `outline:
none` + `box-shadow: none !important`; hover darkens to `#0069d9`).
  2. **Information modal** — `div.modal.fade#exampleModalCenter` (tabindex
     "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; hidden until the launch button toggles it; default
     dark backdrop `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
     (Bootstrap default max-width **500px**, vertically centered) →
     `div.modal-content.rounded-0` (**SQUARE corners — Bootstrap `rounded-0`
     zeroes the 0.3rem default radius**; border none via custom
     `.modal .modal-content { border: none; box-shadow: 0 10px 50px -10px
rgba(0,0,0,0.3); }` → a soft large drop shadow; bg #fff):
     - `div.modal-header` — custom: `border-bottom: none`, `padding-bottom:
0 !important`, `padding-left/right: 30px`; contains:
       - `h5.modal-title#exampleModalCenterTitle` — "Modal title" (Bootstrap
         h5, `.modal-title` line-height 1.5; dark).
       - `button.close` — `data-dismiss="modal"`, `aria-label="Close"`,
         white-space nowrap, right-aligned (Bootstrap `.close` floats right,
         font-size 1.5rem, font-weight 700, opacity .5); contains
         `span[aria-hidden=true] > span.icon-close2` — a black/neutral close
         × glyph from `fonts/icomoon/style.css` (the source × is the
         default `.close` color, effectively near-black; recreate with a
         lucide `X` icon, sized ~1.25–1.5rem).
     - `div.modal-body` — custom: `padding-left/right: 30px` (no custom
       padding-top override beyond Bootstrap default ~1rem); two
       `p` paragraphs ("Mist enveloped the ship three hours out from port…"
       and "All their equipment and instruments are alive…"), styled by the
       custom `p { color: #b3b3b3; font-weight: 300; }` → light-gray 300-weight
       text.
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap): the dialog gets the Bootstrap mobile margin
    (`margin: 0.5rem`) and shrinks to fit; header/body paddings stay 30px;
    text wraps normally. The launch section stays full-viewport. No custom
    media queries in this template's CSS.
- **Design tokens:**
  - Blue **#007bff** (`rgb(0,123,255)`) — the brand accent: launch button bg
    (`.btn-primary`), border none, with hover `#0069d9`; the button's soft
    under-shadow `box-shadow: 0 7px 0px -2px rgba(0,123,255,0.3)` (blue-tinted).
  - White **#fff** — launch page, modal content bg, button text.
  - Dark **#212529** — Bootstrap default text/headings ("Modal #1", "Modal
    title").
  - Light gray **#b3b3b3** — body paragraph text (`.modal-body p`), font-weight 300.
  - Close ×: Bootstrap `.close` default color (near-black), opacity .5,
    font-size 1.5rem, font-weight 700, floats right.
  - Buttons: `.btn` radius **0px (SQUARE — NOT rounded)**, border none,
    `box-shadow: 0 7px 0px -2px rgba(0,123,255,0.3)`, padding **10px 20px**,
    font-weight 400 (Bootstrap default), white text on `#007bff`; on click,
    `box-shadow: none` + `outline: none`.
  - Modal: default **max-width 500px**, **SQUARE corners (`rounded-0`) —
    radius 0**, border none, bg #fff, shadow `0 10px 50px -10px
rgba(0,0,0,0.3)`, backdrop `rgba(0,0,0,0.5)`.
  - Modal header: `border-bottom: none`, `padding-bottom: 0 !important`,
    padding-left/right **30px**. Modal body: padding-left/right **30px**.
  - Fonts: **Roboto** system stack (body + all headings) — load Roboto via
    Google Fonts `<link>` in `index.html` (the source relies on the system
    stack; loading the font keeps the same look everywhere). Never copy the
    icomoon woff font file.
  - The launch heading "Modal #1" is the generic demo copy — recreated as
    "Vestry" (the NEW name; keep the content kind: demo heading). Button
    "Launch modal" → "Launch Vestry".
  - Rhythm: light full-viewport launch page (heading → blue SQUARE button) →
    one SQUARE 500px dialog: simple header (bold "Modal title" + close ×) +
    body of two gray paragraphs. No navbar, no other sections, no footer in
    the original.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a blue square launch button.

#### Scenario: Launch page

- **GIVEN** the Vestry app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a light full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal #1" (recreated as "Vestry" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a blue button labeled "Launch modal" (recreate as
  "Launch Vestry" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on blue `#007bff`
- **AND** the button SHALL have **SQUARE corners (border-radius 0)**, padding
  ~10px 20px, no border, and a soft blue under-shadow `0 7px 0 -2px
rgba(0,123,255,0.3)`

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the information modal SHALL open centered over a dark backdrop
  (`rgba(0,0,0,0.5)`)

### Requirement: Information modal shell

The system SHALL render a centered (max-width 500px) SQUARE modal dialog with
a close button.

#### Scenario: Dialog shell

- **GIVEN** the Vestry app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **500px**) with **SQUARE
  corners (border-radius 0 — Bootstrap `rounded-0`, NOT the 0.3rem default)**
- **AND** it SHALL cast the shadow `0 10px 50px -10px rgba(0,0,0,0.3)`
- **AND** a close button SHALL sit at the top-right of the header with a ×
  glyph (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

### Requirement: Modal header

The system SHALL render a simple modal header with a bold title and the close
button.

#### Scenario: Header content

- **GIVEN** the modal is open
- **THEN** the modal header SHALL show a bold title "Modal title" (recreated
  as "Vestry" — keep the content kind: dialog title)
- **AND** the header SHALL have no bottom border and right-aligned close ×
  (Bootstrap `.close` floats right)
- **AND** the header and body SHALL share **30px** left/right padding (match
  the source's `padding-left/right: 30px`)

### Requirement: Modal body

The system SHALL render a body with two short gray placeholder paragraphs.

#### Scenario: Body content

- **GIVEN** the modal is open
- **THEN** the modal body SHALL show two short paragraphs of muted,
  light-gray (`#b3b3b3`, font-weight 300) placeholder copy (recreate the
  source's "Mist enveloped the ship three hours out from port…" passage as
  equivalent muted placeholder text — same kind: introductory prose)
- **AND** the body SHALL have **30px** left/right padding matching the header

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Vestry app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Vestry app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Vestry — Information Modal"

## Verification checklist

- [ ] `openspec/specs/template-vestry/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/vestry/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 11 preview DOM 1:1
      (full-viewport centered launch section → blue SQUARE launch button →
      centered 500px SQUARE modal: simple header "Modal title" + close × /
      body of two light-gray 300-weight placeholder paragraphs → minimal
      Component Dock footer).
- [ ] Tokens used in the app: blue `#007bff` (launch button bg, hover
      `#0069d9`; under-shadow `rgba(0,123,255,0.3)`), white `#fff` (launch
      page, modal bg, button text), dark `#212529` (headings), light gray
      `#b3b3b3` (body paragraphs, weight 300); **Roboto** via Google Fonts
      `<link>`; BUTTON radius **0px (square)**, padding 10px 20px, border
      none; modal max-width **500px**, **SQUARE corners (rounded-0)**, shadow
      `0 10px 50px -10px rgba(0,0,0,0.3)`, backdrop `rgba(0,0,0,0.5)`;
      header/body padding-left/right **30px**; header border-bottom none.
- [ ] No ColorLib references in `apps/vestry` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: there are NO images in this template (unlike Ingress/Modal 10's
      photo band) — the only glyph is the close ×, recreated with a lucide
      `X` icon (never copy the icomoon `icon-close2` font). No picsum seed
      needed for the modal itself.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`, a
      labelled title, Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap mobile margin ≈
      `mx-2`), 30px paddings preserved, text wraps, launch section stays
      full-viewport.
- [ ] Source uses Bootstrap's data-API only (`data-toggle`/`data-dismiss`) —
      recreate the open/close with React state (launch-to-open,
      close/backdrop/Escape-to-close); no auto-open on load.
