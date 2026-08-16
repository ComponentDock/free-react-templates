# Template: Threshold (Promo-Code Sale Modal)

## Purpose

Threshold is a single-page promo-code sale modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 04" free template (source: https://colorlib.com/wp/template/modal-04/),
built under a DIFFERENT name (**Threshold** — the entry point of a doorway;
the fourth of the architectural-entrance names for this UI series, after
Portico (Modal 01), Vestibule (Modal 02), and Portal (Modal 03); a promo
modal is the threshold the shopper crosses into a sale — per the monorepo
naming mandate: never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 04" and a teal
rectangular button "Launch Modal 04" that opens a centered Bootstrap modal
(`modal-dialog-centered`, max-width **700px**) split into TWO equal columns
(`row no-gutters`, `col-md-6` each): a **LEFT photo column** over a
lifestyle photograph (a black vintage road bicycle leaning on a white wall
— `images/bg-1.jpg`, cover), and a **RIGHT white column** with a giant
uppercase "50% Off" headline (the "%" is weight 400), a smaller uppercase
subheadline "On all Colorlib Brands", a promo-code text input ("Enter
code"), and a full-width teal "Start Shopping" button with BLACK text; the
text block sits inside a subtle oversized 1px outline frame (`.text:after`,
inset −30px, `rgba(0,0,0,0.1)`), and a square **teal close button** (40×40,
white ×) sits at the dialog's top-right corner. The whole template is ONE
interactive surface — the launch button and the promo modal. Threshold
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 04" is FORBIDDEN as the app
> name. **Threshold** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 04". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 803). Free promo-code
  sale-modal component template. The `modal-04` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-04/` returns 404;
  the REAL preview URL (same `/theme/bootstrap/` prefix as the rest of the
  Bootstrap UI series, e.g. Modal 01/02/03) is
  `https://preview.colorlib.com/theme/bootstrap/modal-04/` (HTTP 200, 6.6KB
  HTML, `<title>` "Modal 04"). Stylesheets: `css/style.css` (222.5KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB,
  starting at the `body { font-family: "Josefin Sans" ... }` rule; token
  source), `css/ionicons.min.css` (close × glyph), `css/flaticon.css`
  (defines ONLY the snowflake glyph `\f100` — linked but NOT used anywhere
  in the modal-04 body; do not replicate). Josefin Sans (300/400/600/700)
  webfonts via cf-fonts @font-face blocks in the head. `js/main.js`:
  `fullHeight()` sets `.js-fullheight` height to the window height; the
  `$('#exampleModalCenter').modal('show')` line is COMMENTED OUT — the modal
  opens only via the launch button. Structure, copy, and tokens below are
  from the live DOM + `style.css` + the rendered page (computed styles read
  via CDP 2026-08-16). Screenshot (`modal-04.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the modal OPEN: flat grey backdrop over
  the white page, the split dialog — LEFT half a photo of a black vintage
  road bicycle leaning against a white wall on a light wood floor, RIGHT
  half white with black "50% OFF", uppercase "ON ALL COLORLIB BRANDS",
  "Enter code" input, teal START SHOPPING button, teal square close × at the
  top-right corner.
- **Visual design (screenshot + live render):** clean and minimal — one
  centered rectangular CTA on a white page, then one split promo dialog. The
  ONLY brand color is teal **`#12d3cf`** (both buttons + the close button +
  link/focus accents). The right column is white with dark `#212529` text;
  the "Start Shopping" button text is BLACK (`color: #000 !important` in the
  modal-body rule, confirmed via computed styles — same deliberate quirk as
  the Modal 03 SHOP NOW button), while the launch button text is WHITE.
  Sans-serif Josefin Sans throughout (300–700); no script/display font.
  One background photo (bicycle); no other images anywhere else.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 04" (Josefin Sans; `.ftco-section h2` sets
       margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 04"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; computed:
       bg `#12d3cf`, 1px `#12d3cf` border, WHITE text, radius 4px
       (Bootstrap `.btn` 0.25rem), padding 16px 24px, Josefin Sans 15px,
       letter-spacing NORMAL, sentence case — NOT uppercase, NOT a pill).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (max-width **700px**, vertically centered) → `div.modal-content`
     (border none, border-radius **0**, padding 0, font-size 14px,
     `color: #212529`, `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close` — absolute top 0 right 0, 40×40, bg **`#12d3cf`**,
       `ion-ios-close` glyph in WHITE, radius 0, `aria-label="Close"` (NOTE:
       teal-filled — NOT the translucent-black close of Modal 03).
     - `div.row.no-gutters` (two equal columns, no gutters):
       - `div.col-md-6.d-flex` → `div.modal-body.p-5.img.d-flex`
         (bg image `images/bg-1.jpg` — lifestyle photo of a black vintage
         road bicycle leaning on a white wall, light wood floor; `.img`
         utility = `background-size: cover; no-repeat; center center`;
         `p-5` = 48px padding; `d-flex` makes the column stretch to the
         row height). No content inside — purely the photo panel.
       - `div.col-md-6.d-flex` → `div.modal-body.p-5.d-flex.align-items-center`
         (white panel, 48px padding, content vertically centered):
         - `div.text.w-100.text-center.py-5` (48px vertical padding;
           `position: relative`, z-index 0 — the `.text:after` frame sits
           behind it, z-index -1):
           - `h2.mb-0` — "50<span>%</span> Off" (58px, weight **700**,
             uppercase, `#212529`; the `span` "%" is weight **400**, same
             58px, inline).
           - `h4.mb-4` — "On all Colorlib Brands" (16px, weight 400,
             uppercase, `#212529`, margin-bottom 24px; text-transform makes
             the rendered copy uppercase).
           - `form.code-form` → `div.form-group.d-flex` → `input.form-control`
             (height **52px**, bg `#fff`, `color: #000`, 15px, radius **5px**,
             border `1px solid rgba(0,0,0,0.1)`, placeholder "Enter code";
             focus/active border flips to `#12d3cf`. No submit button —
             the CTA below is a link, not a submit).
           - `a.btn.btn-primary.d-block.py-3` — "Start Shopping" (full-width;
             bg `#12d3cf`, 1px `#12d3cf` border, text color **`#000`** per
             `.modal-content .modal-body .btn-primary { color:#000 !important }`
             (computed rgb(0,0,0)) — matches the screenshot's dark glyphs on
             teal; uppercase, letter-spacing 1px, 14px, radius 4px, `py-3`
             (16px vertical) — a rectangle, NOT a pill).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): columns stack (col-md-* → full
    width); `.modal-content .img { height: 300px }` — the left photo column
    gets a fixed 300px height; text/button order follows the DOM (photo
    first, then text panel).
- **Design tokens:**
  - Brand teal **#12d3cf** (`rgb(18,211,207)`; 10× in the custom CSS) —
    `.btn-primary` bg + border (launch + Start Shopping), `button.close`
    bg, `a` link color, `.form-control:focus` border.
  - Black **#000** — Start Shopping text (`.modal-content .modal-body
.btn-primary { color:#000 !important }` overrides the base
    `#fff !important`; confirmed via computed styles), `.form-control` text.
  - Dark grey **#212529** (`rgb(33,37,41)`) — `.modal-content` base color,
    h2 "50% Off", h4 subheadline.
  - White **#fff** — page (`section.ftco-section`), launch-button text,
    close-button × glyph, input bg.
  - Border grey `rgba(0,0,0,0.1)` — input border, `.text:after` frame
    border; `.btn-primary:hover` = transparent bg + teal text.
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`.
  - Fonts: **Josefin Sans** (300/400/600/700, body 15px / line-height 1.8;
    headings weight 400, line-height 1.5; h2 override weight 700) — load via
    Google Fonts `<link>` (weights 300;400;600;700). Never copy the cf-fonts
    woff2 files.
  - Buttons: radius 4px (Bootstrap `.btn` 0.25rem) — explicitly NOT a pill;
    launch = padding 16px 24px, WHITE text, sentence case; Start Shopping =
    `d-block` full width, `py-3` (16px vertical), BLACK text, uppercase,
    letter-spacing 1px, 14px. `.btn-primary:hover` inverts to transparent
    bg + teal text (BOTH buttons).
  - Input: height 52px, radius 5px, border 1px `rgba(0,0,0,0.1)`, focus
    border `#12d3cf`.
  - Frame: `.text:after` — 1px `rgba(0,0,0,0.1)` border inset −30px on all
    four sides (top/left/right/bottom −30px), z-index −1 behind the text
    block (a subtle oversized rectangle around the promo copy).
  - Rhythm: 58px headline (mb 0) → 16px subhead (mb 24px) → 52px input →
    full-width CTA; the 50/50 photo/text split dominates.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a teal launch button.

#### Scenario: Launch page

- **GIVEN** the Threshold app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 04" (recreated as "Threshold" —
  the NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a teal rectangular button labeled "Launch Modal 04"
  (recreate as "Launch Threshold" / "Launch Promo" with the same kind:
  single primary CTA)
- **AND** the button text SHALL be white on teal `#12d3cf`
- **AND** the button SHALL have radius 4px (NOT a pill), padding ~16px
  24px, and sentence-case text (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the promo modal SHALL open centered over a dark backdrop

### Requirement: Promo modal shell

The system SHALL render a 700px centered modal dialog with a teal close
button and a two-column body.

#### Scenario: Dialog shell

- **GIVEN** the Threshold app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 700px) with square
  corners (radius 0)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 square close button SHALL sit at the top-right corner
  with a TEAL `#12d3cf` background and a white × icon
  (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop) SHALL close the dialog

#### Scenario: Two-column layout

- **WHEN** the dialog displays
- **THEN** the left column SHALL be a cover photo panel (~6/12 width)
  with no content inside
- **AND** the right column SHALL be the remaining width, white, with the
  promo content vertically centered

### Requirement: Promo copy

The system SHALL render the right-column headline, subheadline, and the
decorative frame around the text block.

#### Scenario: Headline and subheadline

- **GIVEN** the Threshold app is rendered and the modal is open
- **WHEN** the right column displays
- **THEN** it SHALL show the headline "50% Off" (58px, weight 700,
  uppercase, `#212529`) with the "%" at weight 400
- **AND** it SHALL show the subheadline "On all Colorlib Brands" (16px,
  weight 400, uppercase, `#212529`, ~24px below the headline)
- **AND** a subtle 1px `rgba(0,0,0,0.1)` outline frame SHALL surround the
  whole text block, offset ~30px beyond its edges (the `.text:after`
  frame)

### Requirement: Promo code form

The system SHALL render a single-field promo-code input.

#### Scenario: Code input

- **GIVEN** the Threshold app is rendered and the modal is open
- **WHEN** the right column displays
- **THEN** an input with placeholder "Enter code" SHALL appear between the
  subheadline and the CTA
- **AND** the input SHALL be 52px tall with radius 5px and a
  `1px solid rgba(0,0,0,0.1)` border
- **AND** focusing the input SHALL flip its border to teal `#12d3cf`

### Requirement: Start Shopping CTA

The system SHALL render a full-width Start Shopping button.

#### Scenario: CTA button

- **GIVEN** the Threshold app is rendered and the modal is open
- **WHEN** the right column displays
- **THEN** a full-width teal button labeled "Start Shopping" SHALL appear
  below the input
- **AND** the button text SHALL be BLACK `#000`, uppercase, letter-spacing
  1px, 14px (per the modal-body rule) with teal `#12d3cf` fill, radius 4px,
  and ~16px vertical padding

### Requirement: Responsive behavior

The system SHALL stack the modal columns on narrow viewports.

#### Scenario: Mobile layout

- **GIVEN** the Threshold app is rendered
- **WHEN** the viewport is narrower than ~768px
- **THEN** the photo column SHALL stack above the white text column
- **AND** the photo column SHALL have a fixed height of 300px

### Requirement: Footer

The system SHALL render the standard Component Dock attribution footer.

#### Scenario: Footer content

- **GIVEN** the Threshold app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Threshold app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Threshold — Promo-Code Sale Modal"

## Verification checklist

- [ ] `openspec/specs/template-threshold/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/threshold/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 04 preview DOM 1:1
      (full-viewport centered launch section → teal launch button →
      centered 700px promo modal: teal close × / left photo column / right
      white column with framed "50% Off" + subheadline + code input +
      START SHOPPING button) → minimal Component Dock footer. Mobile:
      stacked columns + 300px photo height.
- [ ] Tokens used in the app: teal `#12d3cf` (primary — buttons, close,
      focus border), black `#000` (Start Shopping text), `#212529`
      (headline/subheadline), white `#fff` (page, launch text, ×),
      `rgba(0,0,0,0.1)` (input + frame borders), modal shadow
      `0 10px 34px -15px rgba(0,0,0,0.24)`, square dialog (radius 0); Josefin
      Sans 300/400/600/700 via Google Fonts `<link>`; 4px-radius rectangular
      buttons (launch white text sentence case, Start Shopping black text
      uppercase ls 1px); 52px/radius-5 input with teal focus border; the
      `.text:after`-equivalent −30px outline frame.
- [ ] No ColorLib references in `apps/threshold` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: exactly ONE picsum seed for the left photo column
      (`picsum.photos/seed/threshold-1/<w>/<h>` or similar — the source
      `bg-1.jpg` shows a black vintage road bicycle against a white wall on
      a light wood floor; pick a seed that reads as a minimal lifestyle
      product scene and verify visually); no ColorLib asset copied; no
      flaticon/ionicons font files — lucide icons only (`X`; probe before
      use).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Implementer gate: `scripts/verify-app.sh threshold` (typecheck + lint + 100% coverage tests + build) and `npm run spec:validate`.
