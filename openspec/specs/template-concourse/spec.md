# Template: Concourse (Coupon Offer Modal)

## Purpose

Concourse is a single-page coupon-modal demo in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 14" free
template (source: https://colorlib.com/wp/template/modal-14/), built under a
DIFFERENT name (**Concourse** — a large open area inside a public building,
especially an entrance hall or central hall; the fourteenth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex (Modal 08), Mezzanine
(Modal 09), Ingress (Modal 10), Vestry (Modal 11), Postern (Modal 12), and
Rotunda (Modal 13) — a concourse is a broad central passage/hall, fitting for
this series of entry/transition dialogs — per the monorepo naming mandate:
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport light
(`.content` height `100vh`) launch section with a centered heading "Modal #4"
and a **gray (`#6c757d`)** button ("Launch modal", `border-radius: 4px`) that
opens a centered Bootstrap modal (`modal-dialog-centered`) whose dialog is a
**ROUNDED (7px) card** on a **solid light-cream/peach background (`#fff4e4`,
`.bg-4`)** — there is NO full-body photo background and NO dark overlay
(like Rotunda/Modal 13, but the fill color is PEACH `#fff4e4`, NOT Rotunda's
light-pink `#f9eaf2`). It is a **"60% off coupon"** offer modal split into a
TWO-COLUMN `.d-flex` layout: a **left image column** (`.bg-image.promo-img`,
`flex: 0 0 200px`, `mr-3` — a full-height cover photo on the left, here a
black camera on a bright yellow background) and a **right content column** —
centered heading "60% off coupon", a small gray quote paragraph, a **dashed
white coupon box** (`.coupon`: white bg, `2px dashed #6c757d` border, centered
black text "SUMMER60") with `mb-4` spacing, an **orange primary "Use a coupon"
button** (custom-template `.btn-primary` overridden from the default `#007bff`
to **`#ed5107`** burnt orange), and a gray "Sorry, I don't want this." cancel
link that dismisses the modal. Distinguishing features vs the rest of the
Bootstrap Modal family:

- **TWO-COLUMN split layout** (left image column + right text/coupon/button
  column) via `.d-flex.main-content` — unlike Rotunda (Modal 13, single
  centered column with Instagram logo) and Postern (Modal 12, full-body photo).
- **Dashed coupon-code box** (`.coupon`) instead of Rotunda's email input /
  "No, thanks"+"Subscribe" split buttons.
- **Burnt-orange `#ed5107` primary** ("Use a coupon") — NOT the Instagram
  magenta-pink `#c13584` of Modal 13, NOT the blue `#007bff` of the default
  Bootstrap series.
- **NO close × button** and NO email input — the dismiss action is the gray
  "Sorry, I don't want this." cancel link at the bottom.

The whole template is ONE interactive surface — the launch button and the
coupon/offer modal. Concourse recreates the structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied; the
left cover photo is replaced with a picsum placeholder of the same vertical-
image kind; the coupon code text is recreated as a coupon-code placeholder).

> NAMING NOTE: the ColorLib source name `modal-14` / "Modal 14" is FORBIDDEN as
> the app name. **Concourse** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 14". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 813). Free coupon-offer
  modal component template. The `modal-14` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark). Demo `<title>` uses the generic
  "Modal #4" copy.
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-14/` returns 404; the REAL
  preview URL (same `/theme/bootstrap/` prefix as the rest of the Bootstrap UI
  series) is `https://preview.colorlib.com/theme/bootstrap/modal-14/` (HTTP
  200, ~17.3KB HTML, `<title>` "Modal #4"). Stylesheets:
  `css/style.css` (2.5KB — the template's custom styles; token source),
  `css/bootstrap.min.css` (Bootstrap 4.3.1 — **CUSTOMIZED for the coupon
  theme: `.btn-primary` is overridden to `#ed5107`**), `fonts/icomoon/style.css`
  (loaded but the modal has NO icon glyphs in use). cf-fonts `@font-face` rules
  load Roboto/Poppins/Source Serif Pro — but `css/style.css` assigns the
  **Roboto** stack to `body` AND to all headings, so the rendered text is
  Roboto (Poppins/Source Serif Pro are loaded but not applied to the visible
  text). NO custom `js/` behavior: `js/main.js` is empty except a commented-out
  auto-open line, so the modal opens ONLY via the launch button's Bootstrap
  data-API (`data-toggle="modal" data-target="#exampleModalCenter"`) and closes
  via `data-dismiss="modal"`.
- **Visual design (screenshot `modal-14.jpg` 1200×972, verified 2026-08-16):**
  a light, airy coupon offer modal on a flat light-gray page. A rounded card
  with a **light cream / peach background** (`#fff4e4`). The card is split
  left/right: on the LEFT a **vertical cover image** (a black DSLR camera
  close-up on a bright solid-yellow background) fills the column; on the RIGHT
  a centered bold-black "60% off coupon" heading, a small light-gray quote
  paragraph, a **white dashed-bordered coupon box** ("SUMMER60" code), a
  **burnt-orange "Use a coupon" button**, and a small gray "Sorry, I don't
  want this." cancel link. Confirm the heading reads "60% off coupon" (the
  DOM text — the screenshot render shows the same layout; the heading is the
  DOM's `60% off coupon`). Brand accent: burnt orange `#ed5107`.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `div.container.content` (**height: 100vh** —
     full-viewport; no bg color set → light page) →
     `div.row.align-items-center.content` (vertically centered, full height)
     → `div.col-12.text-center` (centered column):
     - `h3.mb-4` — "Modal #4" (Bootstrap h3; Roboto; no custom color override
       → dark `#212529`).
     - `button.btn.btn-secondary.px-4.py-3` — "Launch modal" (`type="button"`,
       `data-toggle="modal" data-target="#exampleModalCenter"`; Bootstrap
       `.btn-secondary`: bg **`#6c757d`**, color **#fff**, border `#6c757d`;
       custom `.btn { border-radius: 4px; border: none; }` → **slightly
       rounded corners (4px)**, no border; padding px-4 py-3; hover `#5a6268`).
       NOTE: the launch button here is the GRAY secondary color, NOT a blue or
       orange primary — consistent with the other Modal series templates.
  2. **Coupon offer modal** — `div.modal.fade#exampleModalCenter` (tabindex
     "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; hidden until the launch button toggles it; Bootstrap
     backdrop `#000` (default ~50% opacity via `.modal-backdrop`) →
     `div.modal-dialog.modal-dialog-centered` (Bootstrap default max-width
     **500px**, vertically centered) →
     `div.modal-content.rounded-0` (custom `.modal .modal-content {
background-color: transparent; border: none; border-radius: 7px; }` →
     **RADIUS 7px** on the modal shell, no border, transparent bg) →
     `div.modal-body.bg-4` (custom `.bg-4 { background: #fff4e4; }` → **solid
     LIGHT-CREAM/PEACH background**; custom `.modal .modal-content .modal-body`:
     `border-radius: 7px; overflow: hidden; color: #fff; padding-left/right:
0;` and `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)` (a **dark** soft large
     shadow). NOTE: this modal does NOT use a `.bg-image`/`.overlay`
     full-body photo treatment — it is a plain solid-color card with a
     two-column interior. Contains:
     - `div.d-flex.main-content` — the two-column split layout (custom
       `.modal .main-content { padding-left: 20px; padding-right: 20px; }`).
       Inside:
       - `div.bg-image.promo-img.mr-3` — custom `.modal .modal-content
.modal-body .promo-img { flex: 0 0 200px; }` with `.bg-image {
background-size: cover; background-position: center; background-repeat:
no-repeat; }` — the **LEFT image column**, `flex: 0 0 200px` (fixed 200px
         wide), `mr-3` right margin, `background-image: url('images/img_1.jpg')`
         (a full-height cover photo — the camera-on-yellow shot). In the
         recreation this becomes a `<div>` (or `<img>`) LEFT column ~200px
         wide with the img `object-cover` (full height) — use a picsum
         placeholder (vertical crop) of the same kind (a product/object
         photo). No text in this column.
       - `div` (right content column) →
         - `div.text-center` — centered:
           - `h3` — "60% off coupon" (custom `.modal .modal-content
.modal-body h3 { color: #000; font-size: 22px; }` → **22px BLACK**).
           - `p` — "All their equipment and instruments are alive. The sky
             was cloudless and of a deep dark blue." (custom `.modal
.modal-content .modal-body p { color: #777; font-size: 14px; }` → **GRAY
             `#777`, 14px**, font-weight 300 from the global `p` rule — note
             the 14px differs from Rotunda which didn't set p font-size in its
             custom css).
         - `div.coupon` — the coupon box (custom `.modal .coupon { padding:
10px; color: #000; text-align: center; background-color: #fff;
border: 2px dashed #6c757d; margin-bottom: 20px; }` →
           **WHITE bg, 2px DASHED gray `#6c757d` border, 10px padding,
           centered BLACK text, 20px bottom margin; width stretches full**)
           — contains the coupon code text "SUMMER60" (a coupon-code
           placeholder, centered; recreated as a generic coupon code, e.g.
           keep "SUMMER60" copy kind).
         - `p` → `a.btn.py-3.btn-primary.btn-block` — "Use a coupon"
           (custom-template `.btn-primary`: bg **`#ed5107`** (burnt orange),
           white text, full-width `btn-block`, radius 4px, border none; hover
           `#c84406`, active `#bb4006`, focus shadow `rgba(240,107,44,0.5)`).
           Recreate as a full-width orange button.
         - `p.text-center` → `a.cancel` — "Sorry, I don't want this."
           (custom `.modal .cancel { color: gray; font-size: 14px; }`, and
           `data-dismiss="modal"` → **GRAY 14px, clickable, dismisses** the
           modal; `text-decoration: none`).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap): the dialog gets Bootstrap mobile margin (`margin:
0.5rem` on `.modal-dialog`) and shrinks; the d-flex two-column layout can
    compress — the 200px image column stays fixed and the right text/button
    column shrinks/wraps at small widths (verify the coupon box + button stay
    full-width and readable; consider whether the image should hide/stack on
    the narrowest widths to avoid crushing the text column — the source has no
    custom media queries, so keep the d-flex layout on desktop and verify
    mobile legibility). Launch section stays full-viewport. No custom media
    queries in this template's CSS.
- **Design tokens:**
  - Light-cream/peach **#fff4e4** — the modal body background (`.bg-4`); the
    signature solid fill of the modal (NO full-body photo, NO dark overlay).
  - Burnt orange **#ed5107** — the PRIMARY/brand accent: the "Use a coupon"
    button bg (custom-template `.btn-primary`), white text, border `#ed5107`,
    hover `#c84406`, active `#bb4006`, focus shadow `rgba(240,107,44,0.5)`.
    (This REPLACES the default Bootstrap `#007bff`; use `#ed5107` for
    fidelity.)
  - Gray **#6c757d** — SECONDARY: launch button (`.btn-secondary`, white text,
    hover `#5a6268`) AND the coupon box dashed border (`2px dashed #6c757d`).
  - Black **#000** — heading "60% off coupon" (`.modal-body h3`, 22px) and the
    coupon-code text (`.coupon` color #000).
  - Gray **#777** — paragraph inside the modal (`.modal-body p`, 14px, weight
    300). Global `p { color:#b3b3b3 }` outside the modal.
  - gray (CSS keyword) — the "Sorry, I don't want this." cancel link
    (`.modal .cancel { color: gray; font-size: 14px; }`).
  - White **#fff** — button text, coupon box background (`.coupon` bg), modal
    `color: #fff` (unused directly since no unsized text sits on the peach
    directly).
  - Dark modal shadow **0 10px 50px -10px rgba(0,0,0,0.9)** on the modal body;
    backdrop `#000` (Bootstrap default ~50% opacity).
  - Rounded corners: modal shell + body **radius 7px** (`.modal`,
    `.modal-content`, `.modal-body` all `border-radius: 7px`); buttons
    **radius 4px** (`.btn { border-radius: 4px }`), border none.
  - Fonts: **Roboto** system stack (body + all headings per `css/style.css`);
    load Roboto via Google Fonts `<link>` in `index.html`. (The source also
    declares Poppins + Source Serif Pro via cf-fonts but never applies them to
    the visible text — ignore; never copy the icomoon woff font.)
  - Left cover image: `.promo-img` ~ **200px fixed width** (`flex: 0 0 200px`),
    full-height `object-cover` photo — replace with a picsum placeholder
    `https://picsum.photos/seed/concourse-1/400/600` (a vertical product/object
    photo) sized ~200px wide by the modal's full height; `mr-3` right margin.
    Recreate as a `<div class="promo-img">` or `<img>` with `object-cover`
    (keep the same fixed-200px column). The close × icon (icomoon) is NOT used
    in this template — there is no close button; dismiss is the cancel link.
  - Content kinds: launch heading "Modal #4" (generic demo copy) → recreated
    as "Concourse" (the NEW name); launch button "Launch modal" → "Launch
    Concourse"; coupon heading "60% off coupon" → keep the discount-coupon
    heading kind; quote paragraph keeps placeholder-copy kind; coupon box code
    "SUMMER60" → keep a coupon-code placeholder (a code like "SUMMER60" or a
    paraphrased code); "Use a coupon" button keeps label; "Sorry, I don't want
    this." cancel link keeps label. NO email input, NO "No, thanks"/"Subscribe"
    split (unlike Rotunda) — dismiss is the cancel link only.
  - Rhythm: light full-viewport launch page (heading → gray rounded button) →
    one ROUNDED (7px) 500px **light-cream/peach** card with a **two-column
    split**: left ~200px cover image column, right column (centered black
    "60% off coupon" h3 → gray 14px quote → white dashed coupon box with the
    code → full-width orange "Use a coupon" button → centered gray "Sorry, I
    don't want this." cancel link) → minimal Component Dock footer. No navbar,
    no other sections.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading
and a GRAY rounded launch button.

#### Scenario: Launch page

- **GIVEN** the Concourse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a light full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal #4" (recreated as "Concourse" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a GRAY button labeled "Launch modal" (recreate as
  "Launch Concourse" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on gray `#6c757d` (the custom
  `.btn-secondary` color, matching the rest of the Modal series)
- **AND** the button SHALL have **slightly rounded corners (border-radius
  4px)**, no border, and comfortable padding (Bootstrap `px-4 py-3`)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the coupon offer modal SHALL open centered over a dark backdrop
  (`#000`, ~50% opacity)

### Requirement: Offer modal shell

The system SHALL render a centered (max-width 500px) ROUNDED (7px) modal dialog
with a **solid light-cream/peach background** (no full-body photo, no dark
overlay).

#### Scenario: Dialog shell

- **GIVEN** the Concourse app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **500px**) with **ROUNDED
  corners (border-radius 7px — NOT square)** on the shell and body
- **AND** its whole body SHALL be covered by a **solid light-cream/peach
  background `#fff4e4`** (the `.bg-4` fill — there is NO photographic
  full-body background and NO `rgba(0,0,0,0.5)` overlay, but there IS a
  left-side image column inside)
- **AND** it SHALL cast the dark shadow `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** there SHALL be NO close × button (unlike Rotunda/Modal 13 — dismiss
  is the bottom cancel link)
- **AND** clicking the backdrop or pressing Escape SHALL close the dialog

### Requirement: Modal body — two-column coupon offer

The system SHALL render a two-column split modal body with a left cover-image
column and a right content column (heading, quote, dashed coupon box, orange
button, cancel link).

#### Scenario: Two-column layout

- **GIVEN** the modal is open
- **THEN** the modal body SHALL use a horizontal (d-flex) two-column split with
  20px padding on both horizontal edges:
  - a LEFT column ~**200px fixed width** showing a full-height cover photo
    (`object-cover`; replace the source's camera-on-yellow image with a picsum
    placeholder `https://picsum.photos/seed/concourse-1/400/600`)
  - a RIGHT content column containing the text, coupon, and button

#### Scenario: Right column content

- **GIVEN** the modal is open
- **THEN** the right column SHALL show, centered:
  - the heading "60% off coupon" in BLACK (~22px)
- **AND** it SHALL show one short gray `#777` 14px placeholder/paraphrase
  paragraph (recreate the source's "All their equipment and instruments are
  alive…" line as equivalent muted gray prose — same kind: short quote)
- **AND** it SHALL show a **coupon box**: white background, **2px DASHED gray
  `#6c757d` border**, ~10px padding, centered BLACK coupon-code text (a
  placeholder code like "SUMMER60"), ~20px bottom margin, full width
- **AND** it SHALL show a full-width **burnt-orange "Use a coupon" button**
  (custom-template `.btn-primary` = **`#ed5107`**, white text, radius 4px,
  hover `#c84406` — NOT the default blue, NOT Rotunda's pink)
- **AND** it SHALL show below the button a centered gray ~14px **"Sorry, I
  don't want this."** cancel link that DISMISSES the modal (the only dismiss
  control in this template — there is NO email input and NO close ×)

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Concourse app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Concourse app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Concourse — Coupon Offer Modal"

## Verification checklist

- [ ] `openspec/specs/template-concourse/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/concourse/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 14 preview DOM 1:1
      (full-viewport centered launch section → GRAY rounded launch button →
      centered 500px ROUNDED (7px) light-cream/peach modal: two-column
      d-flex split with a ~200px LEFT cover-image column and a RIGHT column
      (centered black "60% off coupon" h3 → gray 14px quote → white dashed
      coupon box with the code → full-width orange "Use a coupon" button →
      centered gray "Sorry, I don't want this." cancel link) → minimal
      Component Dock footer). NO close × button, NO email input, NO
      "No, thanks"/"Subscribe" split (unlike Rotunda).
- [ ] Tokens used in the app: light-cream/peach `#fff4e4` (modal bg — NO
      full-body photo/overlay), burnt orange `#ed5107` (Use a coupon button,
      hover `#c84406`, active `#bb4006`, focus `rgba(240,107,44,0.5)`), gray
      `#6c757d` (launch button + coupon box dashed border), black `#000`
      (heading + coupon-code text), gray `#777` (paragraph, 14px), CSS `gray`
      (cancel link, 14px), white `#fff` (button text, coupon box bg), dark
      modal shadow `0 10px 50px -10px rgba(0,0,0,0.9)`, backdrop `#000`;
      **Roboto** via Google Fonts `<link>`; dialog radius **7px (round)**,
      buttons radius **4px**, border none; heading "60% off coupon" 22px
      black; left image column ~200px (`object-cover`).
- [ ] No ColorLib references in `apps/concourse` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Brands/assets: the left cover photo is replaced with a picsum
      placeholder (`https://picsum.photos/seed/concourse-1/400/600` or
      similar — verify it renders a suitable vertical product/object photo);
      never copy `images/img_1.jpg` or any source font/asset; no lucide brand
      icons needed here (no brand marks present, no close ×).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`, a
      labelled title, Escape-to-close, backdrop click closes, the cancel link
      dismisses; conditional render (not in DOM when closed).
- [ ] Content: black heading "60% off coupon" (22px), gray 14px quote, white
      dashed coupon box with a coupon-code placeholder, full-width orange
      "Use a coupon" button, centered gray "Sorry, I don't want this." cancel
      link (the only dismiss control).
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap `margin: 0.5rem`),
      the two-column split stays legible (the fixed ~200px image column + text
      column; consider stacking/hiding the image on the narrowest widths to
      avoid crushing the text — no custom media queries in the source), coupon
      box + button stay readable, launch section stays full-viewport.
- [ ] Source uses Bootstrap's data-API only (`data-toggle`/`data-dismiss`;
      `main.js` auto-open is commented out) — recreate open/close with React
      state (launch-to-open, backdrop/Escape/cancel-link-to-close); no auto-
      open on load.
