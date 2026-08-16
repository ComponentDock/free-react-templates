# Template: Postern (Photo Newsletter Modal)

## Purpose

Postern is a single-page photo newsletter-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 12" free
template (source: https://colorlib.com/wp/template/modal-12/), built under a
DIFFERENT name (**Postern** — a back or secondary entrance; the twelfth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex (Modal 08), Mezzanine
(Modal 09), Ingress (Modal 10), and Vestry (Modal 11) — postern is literally a
small side/back gateway, fitting for a series of entry/transition dialogs — per
the monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light
(`.content` height `100vh`) launch section with a centered heading "Modal #2"
and a blue `#007bff` button ("Launch modal", `border-radius: 4px`) that opens a
centered Bootstrap modal (`modal-dialog-centered`) whose dialog is a
**ROUNDED (7px)** card whose entire body is a **photographic background
(`images/hero_1.jpg` — a leather/wallet close-up, warm tan/brown lower-left and
deep blue/near-black upper-right) with a dark `rgba(0,0,0,0.5)` overlay**, and
white text on top. It is a "free ebook / exclusive offer" email-subscribe
modal: a header row (a Google-drive-style colored-triangle logo on the left, a
centered "Exclusive Offer" `h2`, and a close × on the right, separated by a
thin translucent white divider), then a body with a big "Get a free a Ebook"
`h3`, a short gray-paraphrased quote paragraph, a horizontal email
`form-control` + blue "Subscribe" `btn-primary` form, and a dim "Maybe later"
cancel link. The whole template is ONE interactive surface — the launch button
and the subscribe/offer modal. Postern recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied; the close × is recreated with a lucide icon; the Google Drive logo is a
brand trademark and is replaced with a neutral generic logo/icon). It belongs
to the same newsletter-modal family as Ingress (Modal 10) but is distinct: it
uses a **full-body photo background with overlay + a header logo bar**, not
Ingress's photo-band-overlapping-circle composition.

> NAMING NOTE: the ColorLib source name `modal-12` / "Modal 12" is FORBIDDEN as
> the app name. **Postern** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 12". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 811). Free
  photo-newsletter modal component template. The `modal-12` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-12/` returns 404; the REAL
  preview URL (same `/theme/bootstrap/` prefix as the rest of the Bootstrap UI
  series) is `https://preview.colorlib.com/theme/bootstrap/modal-12/` (HTTP
  200, ~17.9KB HTML, `<title>` "Modal #2" — the template's demo title uses the
  generic "Modal #2" copy). Stylesheets: `css/style.css` (2.7KB — the
  template's custom styles; token source), `css/bootstrap.min.css` (Bootstrap
  4.3.1 — `#007bff` primary, `.modal`, `.form-control`, `.btn`),
  `fonts/icomoon/style.css` (the close × `icon-close2` glyph). **Roboto**
  (system font stack: `body { font-family: "Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
sans-serif, ... }`, also on all headings) — loaded from the browser/system
  (the source has NO Google-Fonts or cf-fonts link). NO custom `js/` behavior
  beyond Bootstrap's data-API (`data-toggle="modal"
data-target="#exampleModalCenter"` opens; `data-dismiss="modal"` closes).
  Live render verified in-browser 2026-08-16 (clicked "Launch modal"): the
  modal opens ROUNDED (7px) over the dimmed page, the whole body is the
  leather photo with a dark overlay, white "Get a free a Ebook" heading,
  white quote text, a white rounded email input + bright-blue rounded
  "Subscribe" button, and a faint grey "Maybe later" link; Google Drive
  tri-color logo top-left; "Exclusive Offer" centered in the dark header bar;
  close × top-right.
- **Visual design (screenshot `modal-12.jpg` 1200×972, AVIF, verified
  2026-08-16):** a dark, premium offer modal. A photographic leather/wallet
  background is split diagonally — warm tan/brown on the lower-left, deep
  blue/near-black on the upper-right — covered by a translucent dark overlay.
  A header bar carries the Google Drive logo (left), "Exclusive Offer"
  (center), and a close × (right), under a thin white divider. The body shows
  large white "Get a free a Ebook", a short light-white quote paragraph, then a
  horizontal white email input + bright-blue "Subscribe" button, and a dim
  "Maybe later" cancel link centered below. Brand accent blue `#007bff`.
  Sans-serif Roboto everywhere. Rounded (7px) dialog and controls.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (**height: 100vh** —
     full-viewport; no bg color set → light page per screenshot) →
     `div.row.align-items-center.content` (vertically centered, full height)
     → `div.col-12.text-center` (centered column):
     - `h3.mb-4` — "Modal #2" (Bootstrap h3; Roboto; no custom color override
       → dark `#212529`).
     - `button.btn.btn-primary.px-4.py-3` — "Launch modal" (`type="button"`,
       `data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       `.btn-primary`: bg **`#007bff`**, color **#fff**, border `#007bff`;
       custom `.btn { border-radius: 4px; border: none; }` → **slightly
       rounded corners (4px)**, no border; padding px-4 py-3; hover `#0069d9`).
  2. **Offer/newsletter modal** — `div.modal.fade#exampleModalCenter`
     (tabindex "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; hidden until the launch button toggles it; Bootstrap
     backdrop `#000` (default ~50% opacity via `.modal-backdrop`) →
     `div.modal-dialog.modal-dialog-centered` (Bootstrap default max-width
     **500px**, vertically centered) →
     `div.modal-content.rounded-0` (custom `.modal .modal-content {
background-color: transparent; border: none; border-radius: 7px; }` →
     **RADIUS 7px** on the modal shell, no border, transparent bg):
     - `div.modal-body.bg-image.overlay` — with `style="background-image:
url('images/hero_1.jpg');"` → the photo background, `background-size:
cover; background-position: center` (from `.bg-image`); `border-radius:
7px; overflow: hidden; color: #fff; padding-left/right: 0;` and
       `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)` (a **dark** soft large
       shadow). The `.overlay:before` pseudo-element paints a full-body dark
       `background-color: rgba(0, 0, 0, 0.5)` overlay over the photo; `.to-front`
       children (`z-index: 2; position: relative`) sit above it. Contains:
       - `div.line.px-3.to-front` — header row; custom `.line { border-bottom:
1px solid rgba(255,255,255,0.3); padding-bottom: 10px }` → a thin
         translucent-white divider under the header →
         `div.row.align-items-center`:
         - `div.col.logo` — `<a href="#"><img src="images/google-drive.svg"
width 30px>` (custom `.modal .logo a img { width: 30px }`) — the
           **Google Drive tri-color (green/yellow/blue) triangle logo**. This
           is a brand trademark — DO NOT reproduce the Google/Drive mark; use a
           neutral logo placeholder (a simple multi-color triangle SVG or a
           generic document/envelope lucide icon) of similar size.
         - `div.col-md-8.text-center` — `h2` "Exclusive Offer" (custom
           `.modal-body h2 { font-size: 18px; }` → **18px**, white,
           centered).
         - `div.col.text-right` — `<a class="close-btn" data-dismiss="modal"
aria-label="Close"><span aria-hidden><span class="icon-close2">` —
           the close × (custom `.modal .modal-body .close-btn { color: #fff }`
           → WHITE ×, right-aligned; `.modal a { color: #fff }`; recreate with
           a lucide `X` icon, white, ~1.25–1.5rem).
       - `div.p-4.to-front` — body padding 1rem(x4): `div.text-center`:
         - `h3` "Get a free a Ebook" (custom `.modal-body h3 { color: #fff;
font-size: 22px; }` → **22px white**).
         - `p.mb-4` — "All their equipment and instruments are alive. The sky
           was cloudless and of a deep dark blue." (custom `.modal-body p {
color: #fff; }` → WHITE (overrides the global `p { color:#b3b3b3 }`
           inside the modal), font-weight 300 from the global `p` rule).
         - `form.d-flex.mb-4` — horizontal (`d-flex`) subscribe form; two
           controls side by side:
           - `input[type=email].form-control.mr-3` — "Enter your email
             address" placeholder (Bootstrap `.form-control`; custom
             `form-control { border: transparent }` + no box-shadow on
             focus/hover; white input with **~4px rounded** corners, ~40px
             height; text dark `#495057`).
           - `input[type=submit].btn.btn-primary` — "Subscribe"
             (`.btn-primary` blue `#007bff`, white text, radius 4px).
         - `p.mb-0.cancel` — `<a data-dismiss="modal">` "Maybe later" (custom
           `.modal .cancel a { color: rgba(255,255,255,0.5); font-size: 13px;
font-weight: bold; }`, hover `#fff` → a dim (white @ 50%), bold,
           13px cancel/dismiss link).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap): the dialog gets Bootstrap mobile margin
    (`margin: 0.5rem` on `.modal-dialog`) and shrinks to fit; photo
    `background-size: cover` scales down; header `row` stacks/compresses via
    Bootstrap cols (`col`/`col-md-8`); text wraps normally. The launch section
    stays full-viewport. No custom media queries in this template's CSS.
- **Design tokens:**
  - Blue **#007bff** — the brand accent: launch button bg + "Subscribe"
    button bg (`.btn-primary`), white text, border `#007bff`, hover `#0069d9`.
  - White **#fff** — modal text (headings, paragraph, close ×), button text,
    email input bg. Header/body `color: #fff`.
  - Dark overlay **rgba(0,0,0,0.5)** — `.modal-body.overlay:before` full-body
    layer over the photo (`.to-front` content sits above it).
  - Photo background — `images/hero_1.jpg` (leather/wallet close-up: warm
    tan/brown lower-left, deep blue/near-black upper-right), `background-size:
cover`, `background-position: center`. Recreate with a picsum seed photo,
    e.g. `https://picsum.photos/seed/postern-1/600/600` (a rich textured
    image), NOT copying the source asset.
  - Modal shadow — `0 10px 50px -10px rgba(0,0,0,0.9)` (dark soft large
    shadow). Backdrop `#000` (Bootstrap default ~50% opacity).
  - Rounded corners: modal shell + body **radius 7px** (`.modal`,
    `.modal-content`, `.modal-body` all `border-radius: 7px`);
    `.modal-content.rounded-0` zeroes Bootstrap's default but the custom
    7px rule wins visually → **round 7px dialog** (NOT square like Vestry/
    Modal 11). Buttons + input **radius 4px** (`.btn { border-radius: 4px }`),
    border none.
  - Fonts: **Roboto** system stack (body + all headings) — load Roboto via
    Google Fonts `<link>` in `index.html` (the source relies on the system
    stack; loading keeps the look identical). Never copy the icomoon woff font.
  - Header divider `.line`: `border-bottom: 1px solid rgba(255,255,255,0.3)`,
    `padding-bottom: 10px`. Header h2 "Exclusive Offer" 18px white; logo:
    neutral 30px placeholder. Body h3 "Get a free a Ebook" 22px white; quote
    paragraph white 300-weight; email input (transparent border, no shadow)
    - blue Subscribe; cancel link "Maybe later" `rgba(255,255,255,0.5)`,
      13px bold, hover white.
  - Launch heading "Modal #2" is the generic demo copy — recreated as
    "Postern" (the NEW name; keep the content kind: demo heading). Button
    "Launch modal" → "Launch Postern". Header "Exclusive Offer" and body
    "Get a free a Ebook" keep their kinds (offer/newsletter content).
  - Rhythm: light full-viewport launch page (heading → blue rounded button) →
    one ROUNDED (7px) 500px dialog with a full photo background + dark overlay:
    logo-bar header ("Exclusive Offer" + close × under a white divider) → white
    "Get a free a Ebook" → quote → email + Subscribe form → dim "Maybe later"
    cancel → minimal Component Dock footer. No navbar, no other sections.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading
and a blue rounded launch button.

#### Scenario: Launch page

- **GIVEN** the Postern app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a light full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal #2" (recreated as "Postern" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a blue button labeled "Launch modal" (recreate as
  "Launch Postern" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on blue `#007bff`
- **AND** the button SHALL have **slightly rounded corners (border-radius
  4px)**, no border, and comfortable padding (Bootstrap `px-4 py-3`)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the offer modal SHALL open centered over a dark backdrop
  (`#000`, ~50% opacity)

### Requirement: Offer modal shell

The system SHALL render a centered (max-width 500px) ROUNDED (7px) modal dialog
with a photo background and dark overlay.

#### Scenario: Dialog shell

- **GIVEN** the Postern app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **500px**) with **ROUNDED
  corners (border-radius 7px — NOT square)** on the shell and body
- **AND** its whole body SHALL be covered by a photographic background with a
  dark overlay `rgba(0,0,0,0.5)` (`background-size: cover`,
  `background-position: center`)
- **AND** it SHALL cast the dark shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** text content SHALL render WHITE on top of the overlay
- **AND** a close button SHALL sit at the top-right of the header with a ×
  glyph (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

### Requirement: Modal header

The system SHALL render a header bar with a logo, an offer title, and the close
button, separated from the body by a thin white divider.

#### Scenario: Header content

- **GIVEN** the modal is open
- **THEN** the modal header SHALL show a neutral logo placeholder on the left
  (~30px — replace the source's Google Drive trademark with a neutral generic
  mark; DO NOT reproduce the Google/Drive logo)
- **AND** it SHALL show the centered title "Exclusive Offer" in white (~18px)
- **AND** it SHALL show the close × on the right
- **AND** the header SHALL be separated from the body by a thin
  translucent-white divider line (`border-bottom: 1px solid
rgba(255,255,255,0.3)`, `padding-bottom: 10px`)

### Requirement: Modal body — offer + subscribe form

The system SHALL render the ebook offer heading, a short quote, and a
horizontal email subscribe form with a cancel link.

#### Scenario: Body content

- **GIVEN** the modal is open
- **THEN** the modal body SHALL show the heading "Get a free a Ebook" in white
  (~22px)
- **AND** it SHALL show one short white placeholder/paraphrase paragraph
  (recreate the source's Little-Prince quote "All their equipment and
  instruments are alive…" as equivalent white muted prose — same kind:
  short quote)
- **AND** it SHALL show a horizontal subscribe form with an email input
  (placeholder "Enter your email address"; white bg, transparent border, no
  focus shadow, ~4px radius) and a blue `#007bff` "Subscribe" button (white
  text, 4px radius)
- **AND** it SHALL show a dim "Maybe later" cancel link below the form
  (`rgba(255,255,255,0.5)`, ~13px bold, hover white) that dismisses the modal

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Postern app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Postern app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Postern — Photo Newsletter Modal"

## Verification checklist

- [ ] `openspec/specs/template-postern/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/postern/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 12 preview DOM 1:1
      (full-viewport centered launch section → blue rounded launch button →
      centered 500px ROUNDED (7px) modal: photo background + `rgba(0,0,0,0.5)`
      overlay → header bar [logo + "Exclusive Offer" + close ×] under a white
      divider → body ["Get a free a Ebook" h3 + white quote + email/Subscribe
      form + "Maybe later" cancel] → minimal Component Dock footer).
- [ ] Tokens used in the app: blue `#007bff` (launch + Subscribe buttons,
      hover `#0069d9`), white `#fff` (modal text, close ×, button text, email
      input bg), dark overlay `rgba(0,0,0,0.5)`, shadow `0 10px 50px -10px
    rgba(0,0,0,0.9)`, backdrop `#000`; **Roboto** via Google Fonts `<link>`;
      dialog radius **7px (round)**, buttons/input radius **4px**, border
      none; header h2 "Exclusive Offer" 18px, body h3 "Get a free a Ebook"
      22px, cancel link `rgba(255,255,255,0.5)` 13px bold; header divider
      `1px solid rgba(255,255,255,0.3)`.
- [ ] No ColorLib references in `apps/postern` (provenance lives in this spec,
      TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: recreate the photo background with a picsum seed image
      (`https://picsum.photos/seed/postern-1/<w>/<h>`, `background-size:
    cover`) — NEVER copy `images/hero_1.jpg`; the close × is a lucide `X`
      icon (never the icomoon `icon-close2` font); the header logo is a
      NEUTRAL placeholder — NEVER reproduce the Google Drive trademark.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`, a
      labelled title, Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Form: email input + Subscribe button; "Maybe later" cancel link
      dismisses the modal.
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap `margin: 0.5rem`),
      photo scales via `background-size: cover`, header cols stack/compress,
      text wraps, launch section stays full-viewport.
- [ ] Source uses Bootstrap's data-API only (`data-toggle`/`data-dismiss`) —
      recreate open/close with React state (launch-to-open,
      close/backdrop/Escape-to-close); no auto-open on load.
