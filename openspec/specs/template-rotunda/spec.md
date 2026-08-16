# Template: Rotunda (Instagram Newsletter Modal)

## Purpose

Rotunda is a single-page newsletter-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 13" free
template (source: https://colorlib.com/wp/template/modal-13/), built under a
DIFFERENT name (**Rotunda** — a round building or hall, especially a large
circular hall or dome-crowned entrance space; the thirteenth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex (Modal 08), Mezzanine
(Modal 09), Ingress (Modal 10), Vestry (Modal 11), and Postern (Modal 12) — a
rotunda is a wide circular entrance/assembly hall, fitting for a series of
entry/transition dialogs — per the monorepo naming mandate: never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light
(`.content` height `100vh`) launch section with a centered heading "Modal #3"
and a **gray (`#6c757d`)** button ("Launch modal", `border-radius: 4px`) that
opens a centered Bootstrap modal (`modal-dialog-centered`) whose dialog is a
**ROUNDED (7px) card** on a **solid light-pink background (`#f9eaf2`,
`.bg-3`)** — there is NO photo background and NO dark overlay (unlike Postern/
Modal 12). It is an "exclusives offer from Instagram" email-subscribe modal
with an **Instagram gradient camera logo** centered on top, an **Instagram
magenta-pink primary (`#c13584`)** "Subscribe" button (the template ships a
custom Bootstrap where `.btn-primary` is overridden from the default `#007bff`
to Instagram pink), and a gray "No, thanks" secondary button. The whole
template is ONE interactive surface — the launch button and the
subscribe/offer modal. Rotunda recreates that structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied; the
close × is recreated with a lucide icon; the Instagram logo is a brand
trademark and is replaced with a neutral generic camera/social logo, and the
Instagram brand name in the heading is paraphrased to a neutral brand). It
belongs to the same newsletter-modal family as Postern (Modal 12) and Ingress
(Modal 10 / photo-band composition) but is distinct: it is a **LIGHT, solid
pink card** with a centered Instagram logo (NOT Postern's full-body photo
background + dark overlay + header logo-bar, and NOT the blue `#007bff` of the
default Bootstrap series).

> NAMING NOTE: the ColorLib source name `modal-13` / "Modal 13" is FORBIDDEN as
> the app name. **Rotunda** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 13". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 812). Free
  Instagram-newsletter modal component template. The `modal-13` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark). Demo `<title>` uses the
  generic "Modal #3" copy.
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-13/` returns 404; the REAL
  preview URL (same `/theme/bootstrap/` prefix as the rest of the Bootstrap UI
  series) is `https://preview.colorlib.com/theme/bootstrap/modal-13/` (HTTP
  200, ~18.0KB HTML, `<title>` "Modal #3"). Stylesheets:
  `css/style.css` (2.9KB — the template's custom styles; token source),
  `css/bootstrap.min.css` (Bootstrap 4.3.1 — **CUSTOMIZED for the Instagram
  theme: `.btn-primary` is overridden to `#c13584`**, `.modal`, `.form-control`,
  `.btn`), `fonts/icomoon/style.css` (the close × `icon-close2` glyph). CFFonts
  `@font-face` rules load **Roboto** (300/400/500), **Poppins** (300/400/500)
  and **Source Serif Pro** (400/600) — but `css/style.css` assigns the
  **Roboto** stack to `body` AND to all headings, so the rendered text is
  Roboto; Poppins/Source Serif Pro are loaded but not applied to the visible
  text. NO custom `js/` behavior: `js/main.js` is empty except a commented-out
  auto-open line (`// $('#exampleModalCenter').modal();`), so the modal opens
  ONLY via the launch button's Bootstrap data-API (`data-toggle="modal"
data-target="#exampleModalCenter"`) and closes via `data-dismiss="modal"`.
  Live render + screenshot verified in-browser 2026-08-16 (clicked "Launch
  modal"): the modal opens ROUNDED (7px) over a light page, on a **solid pale
  pink `#f9eaf2`** card; centered **Instagram gradient camera logo**; black
  "Exclusives offer from Instagram" heading; small gray quote paragraph; a
  white rounded full-width email input; then two split buttons — left gray
  "No, thanks" (`btn-secondary`, dismisses) and right **magenta-pink
  "Subscribe" (`#c13584`)**; and a small faint gray repeated line at the bottom.
- **Visual design (screenshot `modal-13.jpg` 1200×972, verified 2026-08-16):**
  a light, airy offer modal on a flat light-gray page. A rounded card with a
  **pale-pink / light-lavender background**. Top center: the **Instagram
  camera icon with its signature purple–pink–orange–yellow gradient**. A small
  × close in the top-right. Below: bold black "Exclusives offer from
  instagram", a lighter-gray placeholder paragraph, a white rounded email
  input ("Enter your email address"), then two side-by-side buttons — left a
  muted slate-gray "No, thanks", right a vibrant magenta/pink "Subscribe" —
  and a final faint-gray small line of text at the bottom. Brand accent:
  Instagram magenta-pink `#c13584`.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (**height: 100vh** —
     full-viewport; no bg color set → light page) →
     `div.row.align-items-center.content` (vertically centered, full height)
     → `div.col-12.text-center` (centered column):
     - `h3.mb-4` — "Modal #3" (Bootstrap h3; Roboto; no custom color override
       → dark `#212529`).
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal" (`type="button"`,
       `data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       `.btn-secondary`: bg **`#6c757d`**, color **#fff**, border `#6c757d`;
       custom `.btn { border-radius: 4px; border: none; }` → **slightly
       rounded corners (4px)**, no border; padding px-4 py-3; hover `#5a6268`).
       NOTE: the launch button here is the GRAY secondary color, NOT the blue
       primary used by Postern/Modal 12.
  2. **Instagram offer/newsletter modal** — `div.modal.fade#exampleModalCenter`
     (tabindex "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; hidden until the launch button toggles it; Bootstrap
     backdrop `#000` (default ~50% opacity via `.modal-backdrop`) →
     `div.modal-dialog.modal-dialog-centered` (Bootstrap default max-width
     **500px**, vertically centered) →
     `div.modal-content.rounded-0` (custom `.modal .modal-content {
background-color: transparent; border: none; border-radius: 7px; }` →
     **RADIUS 7px** on the modal shell, no border, transparent bg) →
     `div.modal-body.bg-3` (custom `.bg-3 { background: #f9eaf2; }` → **solid
     LIGHT-PINK background**; custom `.modal .modal-content .modal-body`:
     `border-radius: 7px; overflow: hidden; color: #fff; padding-left/right:
0;` and `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)` (a **dark** soft large
     shadow). NOTE: this modal does NOT use the `.bg-image`/`.overlay`
     photo+overlay treatment of Modal 12 — it is a plain solid-color card. The
     `p-4`/`px-3` wrappers carry `to-front` (`.to-front { z-index: 2;
position: relative }`) but with no overlay:before there is nothing behind
     them. Contains:
     - `div.px-3.to-front` — top row: `div.row.align-items-center` →
       `div.col.text-right` → `<a class="close-btn" data-dismiss="modal"
aria-label="Close"><span aria-hidden><span class="icon-close2">` — the close
       × (custom `.modal .modal-body .close-btn { color: #000 }` → **BLACK
       ×**, right-aligned alone — there is NO header logo bar / centered
       "Exclusive Offer" / divider here, unlike Postern; the only top-row
       element is the close ×). Recreate with a lucide `X` icon, black,
       ~1.25–1.5rem.
     - `div.p-4.to-front` → `div.text-center`:
       - `div.logo` — `<img src="images/instagram-2-1.svg" alt="Image"
class="img-fluid mb-4">` (custom `.logo img { width: 70px }`,
         `.logo img` 70px) — the **Instagram camera icon with its purple/
         pink/orange/yellow gradient**. This is a brand trademark — DO NOT
         reproduce the Instagram mark; use a neutral logo placeholder (e.g.
         a generic camera or envelope/social lucide icon, or a neutral
         multi-color circle SVG) sized ~70px with `mb-4` spacing.
       - `h3` — "Exclusives offer from Instagram" (custom `.modal
.modal-content .modal-body h3 { color: #000; font-size: 22px; }` → **22px
         BLACK**). The brand name "Instagram" is a trademark — paraphrase to
         a neutral equivalent that keeps the content kind (an exclusive
         offer from a brand/store), e.g. "Exclusives offer for our
         subscribers" or "Exclusive offers from our store".
       - `p.mb-4` — "All their equipment and instruments are alive. The sky
         was cloudless and of a deep dark blue." (custom `.modal .modal-content
.modal-body p { color: #777; }` → **GRAY `#777`** (overrides the global
         `p { color:#b3b3b3 }`), font-weight 300 from the global `p` rule).
       - `form.mb-4` — vertical subscribe form (NOT `.d-flex` like Postern):
         - `div.form-group` → `input[type=email].form-control.w-100.mr-3` —
           "Enter your email address" placeholder. Bootstrap `.form-control`
           (white bg, ~4px rounded, one full-width row, `w-100`); custom
           `form-control { border: transparent;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1); }` → **no border, a faint bottom
           shadow `0 2px 2px 0 rgba(0,0,0,0.1)`**; no box-shadow on
           focus/hover (`box-shadow: none !important`).
         - `div.row` → two `col-6` split buttons side-by-side:
           - `button.btn.btn-secondary.btn-block` — "No, thanks"
             (`data-dismiss="modal"`; `.btn-secondary` gray **`#6c757d`**,
             white text, full-width `btn-block`, radius 4px) → dismisses.
           - `button.btn.btn-primary.btn-block` — "Subscribe"
             (custom-template `.btn-primary`: bg **`#c13584`** (Instagram
             magenta-pink), white text, full-width `btn-block`, radius 4px;
             hover `#a32d6f`, focus shadow `rgba(202,83,150,0.5)`).
       - `p.mb-0.cancel` — `<small>` "The sky was cloudless and of a deep
         dark blue." (a repeating credit/placeholder line). This is a `<small>`
         inside `.modal-body p` → gray `#777`, ~small (Bootstrap `.small`,
         ~80% of 1rem). NOTE: unlike Postern there is NO clickable "Maybe
         later" `<a>` here — the dismiss action is the "No, thanks" button;
         the bottom line is inert small text.
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap): the dialog gets Bootstrap mobile margin
    (`margin: 0.5rem` on `.modal-dialog`) and shrinks to fit; the two `col-6`
    buttons stay side-by-side at small widths (Bootstrap cols), the pink card
    scales normally, text wraps. The launch section stays full-viewport. No
    custom media queries in this template's CSS.
- **Design tokens:**
  - Light-pink **#f9eaf2** — the modal body background (`.bg-3`); this is the
    signature "rustic/light" fill of the modal (NO photo, NO dark overlay).
  - Instagram magenta-pink **#c13584** — the PRIMARY/brand accent: the
    "Subscribe" button bg (custom-template `.btn-primary`), white text, border
    `#c13584`, hover `#a32d6f`, active `#992a69`, focus shadow
    `rgba(202,83,150,0.5)`. (This REPLACES the default Bootstrap `#007bff`;
    use `#c13584` for fidelity.)
  - Gray **#6c757d** — SECONDARY buttons: launch button + "No, thanks"
    (`.btn-secondary`), white text, hover `#5a6268`.
  - Black **#000** — close × (`.close-btn`) and the h3 heading.
  - Gray **#777** — paragraph + bottom small text inside the modal
    (`.modal-body p`). Global `p { color:#b3b3b3 }` outside the modal.
  - White **#fff** — button text (both buttons), email input bg, `.modal a`.
  - Faint shadow **0 2px 2px 0 rgba(0,0,0,0.1)** on the email input; dark modal
    shadow **0 10px 50px -10px rgba(0,0,0,0.9)** on the modal body; backdrop
    `#000` (Bootstrap default ~50% opacity).
  - Rounded corners: modal shell + body **radius 7px** (`.modal`,
    `.modal-content`, `.modal-body` all `border-radius: 7px`);
    `.modal-content.rounded-0` zeroes Bootstrap's default but the custom 7px
    rule wins visually → **round 7px dialog**. Buttons **radius 4px**
    (`.btn { border-radius: 4px }`), border none; email input ~4px rounded
    (`.form-control`), border transparent.
  - Fonts: **Roboto** system stack (body + all headings per `css/style.css`);
    load Roboto via Google Fonts `<link>` in `index.html`. (The source also
    declares Poppins + Source Serif Pro via cf-fonts but never applies them to
    the visible text — ignore; never copy the icomoon woff font.)
  - Instagram logo `.logo img { width: 70px }` with `mb-4` spacing — replace
    with a neutral ~70px placeholder. Close × → lucide `X`, black.
  - Content kinds: launch heading "Modal #3" (generic demo copy) → recreated
    as "Rotunda" (the NEW name); launch button "Launch modal" → "Launch
    Rotunda"; header/offer h3 "Exclusives offer from Instagram" → neutral
    exclusive-offer heading (no Instagram brand); quote paragraph + bottom
    small line keep their placeholder-copy kind; "No, thanks" + "Subscribe"
    buttons keep labels; no "Maybe later" link (dismiss is "No, thanks").
  - Rhythm: light full-viewport launch page (heading → gray rounded button) →
    one ROUNDED (7px) 500px **light-pink** card: close × alone top-right →
    centered Instagram logo → black "exclusive offer" h3 → gray quote →
    white email input → split [No, thanks | Subscribe] gray+magenta buttons →
    faint gray small line → minimal Component Dock footer. No navbar, no other
    sections.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading
and a GRAY rounded launch button.

#### Scenario: Launch page

- **GIVEN** the Rotunda app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a light full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal #3" (recreated as "Rotunda" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a GRAY button labeled "Launch modal" (recreate as
  "Launch Rotunda" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on gray `#6c757d` (the custom
  `.btn-secondary` color — NOT blue like Postern/Modal 12)
- **AND** the button SHALL have **slightly rounded corners (border-radius
  4px)**, no border, and comfortable padding (Bootstrap `px-4 py-3`)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the offer modal SHALL open centered over a dark backdrop
  (`#000`, ~50% opacity)

### Requirement: Offer modal shell

The system SHALL render a centered (max-width 500px) ROUNDED (7px) modal dialog
with a **solid light-pink background** (no photo, no dark overlay).

#### Scenario: Dialog shell

- **GIVEN** the Rotunda app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **500px**) with **ROUNDED
  corners (border-radius 7px — NOT square)** on the shell and body
- **AND** its whole body SHALL be covered by a **solid light-pink background
  `#f9eaf2`** (the `.bg-3` fill — there is NO photographic background and NO
  `rgba(0,0,0,0.5)` overlay here, unlike Postern/Modal 12)
- **AND** it SHALL cast the dark shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** a BLACK close button SHALL sit at the top-right with a × glyph
  (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

### Requirement: Modal body — social offer + subscribe form

The system SHALL render a centered neutral logo, an exclusive-offer heading, a
short quote, and a subscribe form with split dismiss/subscribe buttons.

#### Scenario: Body content

- **GIVEN** the modal is open
- **THEN** the modal body SHALL show a neutral logo placeholder centered on
  top (~70px with `mb-4` spacing — replace the source's Instagram camera
  trademark with a neutral generic camera/social/mail logo; DO NOT reproduce
  the Instagram mark)
- **AND** it SHALL show the heading "Exclusives offer from Instagram"
  recreated as a neutral exclusive-offer heading (e.g. "Exclusives offer for
  our subscribers" — same kind: exclusive offer from a brand), in BLACK
  (~22px)
- **AND** it SHALL show one short gray `#777` placeholder/paraphrase paragraph
  (recreate the source's "All their equipment and instruments are alive…"
  line as equivalent muted gray prose — same kind: short quote)
- **AND** it SHALL show a full-width email input (placeholder "Enter your
  email address"; white bg, transparent border, faint bottom shadow
  `0 2px 2px 0 rgba(0,0,0,0.1)`, no focus shadow, ~4px rounded)
- **AND** it SHALL show below the input two SPLIT buttons side-by-side
  (`col-6` each, full-width):
  - a gray `#6c757d` "No, thanks" button that dismisses the modal
  - a magenta-pink `#c13584` "Subscribe" button (Instagram brand color —
    custom-template `.btn-primary`, NOT the default blue)
- **AND** it SHALL show a small faint gray line of text at the bottom
  (recreate the source's repeated gray prose as inert small text; there is NO
  clickable cancel link in this template — the dismiss action is "No, thanks")

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Rotunda app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Rotunda app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Rotunda — Instagram Newsletter Modal"

## Verification checklist

- [ ] `openspec/specs/template-rotunda/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/rotunda/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 13 preview DOM 1:1
      (full-viewport centered launch section → GRAY rounded launch button →
      centered 500px ROUNDED (7px) light-pink modal: close × alone top-right →
      centered neutral 70px logo → black "exclusive offer" h3 → gray quote →
      full-width email input → split [gray "No, thanks" | magenta "Subscribe"]
      buttons → faint gray small line → minimal Component Dock footer).
- [ ] Tokens used in the app: light-pink `#f9eaf2` (modal bg — NO photo/NO
      overlay), Instagram magenta-pink `#c13584` (Subscribe button, hover
      `#a32d6f`), gray `#6c757d` (launch + "No, thanks" buttons, hover
      `#5a6268`), black `#000` (close × + heading), gray `#777` (paragraph +
      small line), white `#fff` (button text, email input bg), faint shadow
      `0 2px 2px 0 rgba(0,0,0,0.1)` (email input), dark modal shadow
      `0 10px 50px -10px rgba(0,0,0,0.9)`, backdrop `#000`; **Roboto** via
      Google Fonts `<link>`; dialog radius **7px (round)**, buttons radius
      **4px**, border none; h3 "exclusive offer" 22px black, close × black.
- [ ] No ColorLib references in `apps/rotunda` (provenance lives in this spec,
      TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Brands/assets: the Instagram logo trademark is replaced with a NEUTRAL
      ~70px placeholder (generic camera/social/mail icon or neutral SVG) —
      NEVER reproduce the Instagram mark; the brand name in the heading is
      paraphrased neutrally; the close × is a lucide `X` (never the icomoon
      `icon-close2` font); never copy `images/instagram-2-1.svg` or any source
      font/asset.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`, a
      labelled title, Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Form: full-width email input + split "No, thanks" (dismisses) /
      "Subscribe" buttons; the inert bottom small line is non-interactive.
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap `margin: 0.5rem`),
      the two `col-6` buttons stay side-by-side, pink card scales, text wraps,
      launch section stays full-viewport.
- [ ] Source uses Bootstrap's data-API only (`data-toggle`/`data-dismiss`;
      `main.js` auto-open is commented out) — recreate open/close with React
      state (launch-to-open, close/backdrop/Escape-to-close); no auto-open on
      load.
