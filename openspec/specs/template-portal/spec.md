# Template: Portal (Winter Sale Modal)

## Purpose

Portal is a single-page winter-sale promo modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 03" free template (source: https://colorlib.com/wp/template/modal-03/),
built under a DIFFERENT name (**Portal** — a grand doorway; the third of the
architectural-entrance names for this UI series, after Portico (Modal 01) and
Vestibule (Modal 02); a promo modal is the portal into a sale — per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 03" and a teal
rectangular button "Launch Modal 03" that opens a centered Bootstrap modal
(`modal-dialog-centered`, max-width **700px**) split into TWO columns: a
**teal left column** (`#39bdc8`) with a large translucent snowflake watermark,
the uppercase kicker "WINTER" (black), a giant black Pacifico script "Sale"
with two white snowflake ornaments and a short white divider, a huge white
"40" with "%" and "off" stacked beside it, and "TO ALL COLORLIB PRODUCTS" in
small white uppercase; and a **right column** over a winter-photo background
(people in snow) with a full-width teal "SHOP NOW" button (`color #000` per
the template's own cascade — see token notes). The whole template is ONE
interactive surface — the launch button and the promo modal. Portal recreates
that structure 1:1 with matching layout, tokens, typography, and content
kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 03" is FORBIDDEN as the app
> name. **Portal** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 03". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 802). Free winter-sale
  promo-modal component template. The `modal-03` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default preview
  URL `https://preview.colorlib.com/theme/modal-03/` returns 404; the REAL
  preview URL (same `/theme/bootstrap/` prefix as the rest of the Bootstrap
  UI series, e.g. Modal 01/02) is
  `https://preview.colorlib.com/theme/bootstrap/modal-03/` (HTTP 200, 6.1KB
  HTML, `<title>` "Modal 03"). Stylesheets: `css/style.css` (223.7KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~4KB,
  starting at the `.ftco-section h2` rule; token source), `css/ionicons.min.css`
  (46.8KB — close × glyph), `css/flaticon.css` (snowflake glyph). Lato
  (300/400/700) + Pacifico (400) webfonts via cf-fonts @font-face blocks in
  the head. `js/main.js`: `fullHeight()` sets `.js-fullheight` height to the
  window height; the `$('#exampleModalCenter').modal('show')` line is
  COMMENTED OUT — the modal opens only via the launch button. Structure,
  copy, and tokens below are from the live DOM + `style.css` + the rendered
  page (computed styles read via CDP 2026-08-16). Screenshot
  (`modal-03.jpg`, 1200×972, browser-verified 2026-08-16) shows the page with
  the modal OPEN: flat grey backdrop over the white page, the split promo
  dialog — teal left column (WINTER / Sale script / white 40% / TO ALL
  COLORLIB PRODUCTS) and the snow-photo right column with a teal SHOP NOW
  button vertically centered, close × top-right.
- **Visual design (screenshot + live render):** clean and minimal — one
  centered rectangular CTA on a white page, then one split promo dialog. The
  ONLY brand color is teal `#39bdc8` (left column fill, both buttons). The
  design deliberately mixes black and white text on the teal: kicker WINTER,
  the Pacifico "Sale" script, and the SHOP NOW button text are BLACK
  (`color: #000` in the template CSS, confirmed via computed styles — the
  `.modal-body .btn-primary { color: #000 !important }` rule overrides the
  base `.btn-primary { color: #fff !important }`); the big "40 % off" and the
  bottom line are WHITE (inherited from `.modal-content { color: white }`).
  Sans-serif Lato throughout except the Pacifico script accent. One
  background photo (winter scene); no other images anywhere else.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 03" (Lato, `#212529`-ish default; `.ftco-section h2`
       sets margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 03"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; computed:
       bg `#39bdc8`, 1px `#39bdc8` border, WHITE text, radius 4px
       (Bootstrap `.btn` 0.25rem), padding 16px 24px, Lato 15px — NOT a pill,
       NOT uppercase).
  2. **Modal dialog** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (max-width **700px**, vertically centered) → `div.modal-content`
     (border none, border-radius **0**, `color: white`, font-size 14px,
     `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close` — absolute top-right, 40×40, bg
       `rgba(0,0,0,0.1)`, `ion-ios-close` glyph, `aria-label="Close"`.
     - `div.row.no-gutters` (two columns, no gutters):
       - `div.col-md-5.d-flex` → `div.modal-body.p-5.color-1.d-flex`
         (bg **`#39bdc8`**, 48px padding):
         - `span.icon-2.flaticon-snowflake` — 120px snowflake, absolute
           top-right, `color: rgba(255,255,255,0.3)` (watermark), z-index -1.
         - `div.w-100.text.text-center` (white text, 14px inherits from
           `.modal-content`):
           - `span.subheading` — "Winter" (14px, uppercase, `#000`,
             letter-spacing 1px; rendered BLACK on teal).
           - `h3.sale` — "Sale" (105px, **Pacifico cursive**, `#000`,
             margin-bottom 30px, position relative) with
             `span.icon.flaticon-snowflake` 60px white, absolute top-left,
             z-index 1, and `h3.sale:after` — 50px × 2px WHITE divider,
             centered, `margin: 0 auto`, at the bottom of the heading
             (the `subheading` sits above, floats over the ornament).
           - `h2` — inline-block, line-height 1, position relative:
             `span` "40" (130px, weight 700, white, margin-left -40px),
             `sup` "%" (30px, weight 700, absolute top 50% right -30px,
             margin-top 10px), `sub` "off" (16px, weight 700, uppercase,
             absolute bottom 50% right -30px, margin-bottom -35px).
           - `p.upper` — "To all colorlib products" (uppercase; 14px,
             WHITE).
       - `div.col-md-7.d-flex` → `div.modal-body.p-5.img.d-flex.align-items-center`
         (id="modal-right" bg image `images/bg-1.jpg`, cover center —
         winter photo of people in snow; the `.img` utility sets
         `background-size: cover; no-repeat; center center`): the column is
         as tall as the teal column (row stretch); the body content is
         vertically centered by `align-items-center`, so the button floats
         MIDDLE of the photo, not bottom.
         - `div.text.w-100` → `a.btn.btn-primary.d-block.py-3` — "Shop now"
           (full-width; bg `#39bdc8`, 1px `#39bdc8` border, text color
           **`#000`** per `.modal-body .btn-primary { color:#000 !important }`
           (computed rgb(0,0,0)) — matches the screenshot's dark glyphs on
           teal; uppercase, letter-spacing 1px, 14px, radius 4px — a
           rectangle, NOT a pill).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): columns stack (col-md-* → full
    width); `.modal-content .img { height: 300px }` — the right photo column
    gets a fixed 300px height; text/button order follows the DOM (teal panel
    first, then photo + button).
- **Design tokens:**
  - Brand teal **#39bdc8** (`rgb(57,189,200)`; 3× in custom CSS) —
    `.modal-body.color-1` fill, `.btn-primary` (launch + SHOP NOW) bg +
    border.
  - Black **#000** — `.subheading` ("Winter"), `.sale` (Pacifico), and
    `.modal-body .btn-primary` text ("Shop now": `color:#000 !important`
    overrides the base `#fff !important`; confirmed via computed styles).
  - White **#fff** — `.modal-body h2 span` "40" (130px/700), `sup` "%",
    `sub` "off", `p.upper`, snowflake ornaments (60px solid / 120px at
    `rgba(255,255,255,0.3)`), the 2px `:after` divider; `.modal-content`
    base text color `white`.
  - Launch button text: WHITE (computed rgb(255,255,255)) — NOT overridden,
    because the launch button is outside `.modal-body`.
  - Backgrounds: page **#fff** (`section.ftco-section`); modal backdrop
    Bootstrap `#000` fade; modal header transparent; close `rgba(0,0,0,0.1)`.
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`.
  - Fonts: **Lato** (300/400/700, body + buttons, 14–15px) and **Pacifico**
    (400, the "Sale" display at 105px) — load both via Google Fonts `<link>`
    (Pacifico has exactly one weight). Never copy the cf-fonts woff2 files.
  - Buttons: radius 4px (Bootstrap `.btn` 0.25rem) — explicitly NOT a pill;
    launch = padding 16px 24px; SHOP NOW = `d-block` full width, `py-3`
    (16px vertical). Only SHOP NOW is uppercase + letter-spacing 1px
    (`.modal-body .btn-primary`), the launch button is sentence case.
  - Rhythm: kicker (14px upper) → script display (105px) → giant number
    (130px) → offer line → CTA; divider detail between script and number.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a teal launch button.

#### Scenario: Launch page

- **GIVEN** the Portal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 03" (recreated as "Portal" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a teal rectangular button labeled "Launch Modal 03"
  (recreate as "Launch Winter Sale" / "Launch Promo" with the same kind:
  single primary CTA)
- **AND** the button text SHALL be white on teal `#39bdc8`
- **AND** the button SHALL have radius 4px (NOT a pill) and padding ~16px
  24px

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the promo modal SHALL open centered over a dark backdrop

### Requirement: Promo modal

The system SHALL render a 700px centered modal dialog with a close button and
a two-column body.

#### Scenario: Dialog shell

- **GIVEN** the Portal app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 700px) with square corners
  (radius 0)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit absolutely at the top-right with a
  `rgba(0,0,0,0.1)` background and an × icon (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop) SHALL close the dialog

#### Scenario: Two-column layout

- **WHEN** the dialog displays
- **THEN** the left column SHALL be a teal `#39bdc8` panel (~5/12 width,
  48px padding) with the sale content
- **AND** the right column SHALL be the remaining width over a winter photo
  background with the CTA

### Requirement: Winter sale content

The system SHALL render the teal panel: kicker, script headline with
ornaments, giant discount, and offer line.

#### Scenario: Teal panel copy

- **GIVEN** the Portal app is rendered and the modal is open
- **WHEN** the left column displays
- **THEN** it SHALL show the uppercase kicker "Winter" (14px, letter-spacing
  1px, BLACK `#000`)
- **AND** it SHALL show the display headline "Sale" in Pacifico (~105px,
  BLACK) with a white snowflake ornament on its left and a larger
  translucent snowflake watermark (white at ~30% opacity, ~120px) at the
  panel's top-right
- **AND** a short white divider (~50px × 2px, centered) SHALL separate the
  headline from the discount
- **AND** it SHALL show the discount "40" (white, ~130px, weight 700) with
  "%" (30px) and "off" (16px uppercase) positioned beside/above it, all
  WHITE
- **AND** it SHALL show the offer line "To all colorlib products" in white
  uppercase under the discount

### Requirement: Shop now CTA

The system SHALL render the photo column with a full-width Shop Now button.

#### Scenario: Photo + button

- **GIVEN** the Portal app is rendered and the modal is open
- **WHEN** the right column displays
- **THEN** it SHALL sit on a cover winter-photo background (picsum-seeded,
  e.g. people/snow scene)
- **AND** a full-width teal button labeled "Shop now" SHALL be vertically
  centered on the photo
- **AND** the button text SHALL be BLACK `#000`, uppercase, letter-spacing
  1px, 14px (per modal-body rule) with teal `#39bdc8` fill and radius 4px

### Requirement: Responsive behavior

The system SHALL stack the modal columns on narrow viewports.

#### Scenario: Mobile layout

- **GIVEN** the Portal app is rendered
- **WHEN** the viewport is narrower than ~768px
- **THEN** the teal panel SHALL stack above the photo column
- **AND** the photo column SHALL have a fixed height of 300px

### Requirement: Footer

The system SHALL render the standard Component Dock attribution footer.

#### Scenario: Footer content

- **GIVEN** the Portal app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Portal app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Portal — Winter Sale Modal"

## Verification checklist

- [ ] `openspec/specs/template-portal/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/portal/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: structure matches the Modal 03 preview DOM 1:1 (full-viewport
      centered launch section → teal launch button → centered 700px promo
      modal: header close × / teal column with WINTER + Sale script + white
      snowflakes + divider + giant white 40% + offer line / photo column with
      centered SHOP NOW button) → minimal Component Dock footer. Mobile:
      stacked columns + 300px photo height.
- [ ] Tokens used in the app: teal `#39bdc8` (primary), black `#000`
      (kicker/Sale/SHOP NOW text), white `#fff` (40 % off, offer line,
      ornaments), modal shadow `0 10px 34px -15px rgba(0,0,0,0.24)`, square
      dialog (radius 0); Lato + Pacifico via Google Fonts `<link>`; 4px-radius
      rectangular buttons (launch white text, SHOP NOW black text).
- [ ] No ColorLib references in `apps/portal` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: exactly ONE picsum seed for the right-column winter photo
      (`picsum.photos/seed/portal-1/600/600` or similar); no ColorLib asset
      copied; no flaticon/ionicons font files — lucide icons only
      (`Snowflake`, `X`; probe before use).
- [ ] Implementer gate: `scripts/verify-app.sh portal` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
