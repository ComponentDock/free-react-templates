# Template: Ingress (Newsletter Signup Modal)

## Purpose

Ingress is a single-page newsletter-signup modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 10" free template (source: https://colorlib.com/wp/template/modal-10/),
built under a DIFFERENT name (**Ingress** — the tenth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), Lobby (Modal 07), Narthex (Modal 08), and
Mezzanine (Modal 09); "ingress" is the act or place of entering — a doorway,
threshold, or entryway — the point where a visitor comes in, fitting for a
series of entry/transition dialogs — per the monorepo naming mandate: never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 10" and a BLUE
**`#3e64ff`** PILL button (border-radius **40px**) "Launch Modal 10" that
opens a centered Bootstrap modal (`modal-dialog-centered`, **max-width
500px**, **ROUNDED corners — Bootstrap default border-radius 0.3rem**)
whose content is a stacked layout: a **230px-tall HEADER BAND**
(`div.modal-header.img` with inline `background-image: url(images/bg-1.jpg)`
— a snow-capped-mountain / twilight-sky photo in the screenshot,
`background-size: cover`) tinted by a **45° gradient overlay
`#dd00ff → #3e65ff` at 30% opacity** (`:after`), a **40×40 WHITE × close
button** top-right (Bootstrap `.close` opacity .5), and a BODY that is
pulled **180px UP over the image** (`margin-top: -180px`): the WHITE bold
(700) "Newsletter" `h2` sits ON the image band, a **200×200 circular icon**
(bg `rgba(255,255,255,0.2)`, an email/envelope glyph inside — the source
`images/email.svg`) straddles the image/white boundary, the dark
"Subscribe to our newsletter" `h4` (18px) follows, and the
`subscribe-form` — one joined 52px-tall control: a light-gray
(`rgba(0,0,0,0.05)`) email input (`rounded-left`) + a **`#3e64ff`**
"Subscribe" submit (**130×52**, `rounded-right`). The whole template is ONE
interactive surface — the launch button and the newsletter modal. Ingress
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied; the header photo and the email
glyph are replaced with a seeded picsum placeholder / a lucide icon).

> NAMING NOTE: the ColorLib source name "Modal 10" is FORBIDDEN as the app
> name. **Ingress** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 10". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 809). Free
  newsletter-signup modal component template. The `modal-10` slug appears
  exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-10/` returns 404 (9
  bytes, "Not Found"); the REAL preview URL (same `/theme/bootstrap/` prefix
  as the rest of the Bootstrap UI series, e.g. Modal 01–09) is
  `https://preview.colorlib.com/theme/bootstrap/modal-10/` (HTTP 200, ~9KB
  HTML, `<title>` "Modal 10"). Stylesheets: `css/style.css` (225KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~210
  lines, from the `button { transition: .3s all ease }` rule onward; token
  source), `css/ionicons.min.css` (close × glyph). **Poppins** (300;400;500)
  via cf-fonts @font-face blocks in the head; headings use
  `font-family: "Poppins", Arial, sans-serif`; the body uses the Bootstrap
  system stack. `js/main.js`: `$('[data-toggle="tooltip"]').tooltip()` (NO
  tooltip elements exist in this template — dead code), `fullHeight()` sets
  `.js-fullheight` to the window height (recreate with `min-h-screen` flex
  centering), and the `$('#exampleModalCenter').modal('show')` line is
  COMMENTED OUT — the modal opens only via the launch button. Structure,
  copy, and tokens below are from the live DOM + `style.css`. Screenshot
  (`modal-10.jpg`, 1200×972, browser-verified 2026-08-16) shows the modal
  OPEN over a medium-grey backdrop: a ROUNDED-corner card with a 230px
  header band of a snow-capped-mountain / twilight-sky photo washed by a
  purple-indigo gradient, "Newsletter" in white bold near the top of the
  image, a small white × top-right, a white 200px circle (envelope + @
  email glyph) straddling the image/white boundary, the dark
  "Subscribe to our newsletter" line, and a light-grey email input +
  vibrant-blue "Subscribe" button joined in one row.
- **Visual design (screenshot + live render):** clean, flat, modern,
  minimal newsletter opt-in dialog — one blue PILL CTA on a white page, then
  one ROUNDED 500px dialog: a photo header band with a purple-blue gradient
  wash, an overlapping white circular email icon, and a joined grey/blue
  email+Subscribe control. Brand accents: blue **`#3e64ff`** (launch button,
  subscribe submit, focus borders) + magenta **`#dd00ff`** (gradient partner
  in the header wash). Sans-serif Poppins headings / system body. The ONLY
  images are the header background photo and the small email glyph inside
  the circle. Pure UI — one button + one dialog + the close ×.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 10" (`.ftco-section h2` sets margin-bottom 0, so
       the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 10"
       (`type="button"`, `data-toggle="modal" data-target="#exampleModalCenter"`;
       custom `.btn { border-radius: 40px; box-shadow: none !important;
font-size: 15px }` → **40px PILL radius** (like Modal 08/Narthex, NOT
       the 4px of Modal 09), bg **`#3e64ff`** !important, 1px `#3e64ff`
       border, WHITE text, padding 16px 24px, sentence case). Hover
       inverts: transparent bg + `#3e64ff` text.
  2. **Newsletter modal** — `div.modal.fade#exampleModalCenter` (tabindex
     "-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; default dark backdrop `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
     (**max-width 500px** — custom rule, the narrowest of the series so far;
     vertically centered) → `div.modal-content` (border none, `padding:
0 !important`, **Bootstrap default border-radius 0.3rem — ROUNDED
     corners** (like Modal 08, NOT Modal 09's square 0), `box-shadow: 0px
10px 34px -15px rgba(0,0,0,0.24)`, bg #fff):
     - `div.modal-header.img` — `position: relative; padding: 0; border:
none; height: 230px; z-index: 0`, with INLINE
       `style="background-image: url(images/bg-1.jpg)"` (Bootstrap `.img`
       utility: `background-size: cover; background-position: center`;
       screenshot shows a snow-capped-mountain / twilight-sky photo; recreate
       with a seeded picsum placeholder). A `:after` pseudo-element paints
       the brand wash over the photo: `background: linear-gradient(45deg,
#dd00ff 0%, #3e65ff 100%)` (note the `#3e65ff` variant of the brand
       blue in the gradient stop), `opacity: .3`, z-index -1 (behind the
       header content, above the header's own background image).
       - `button.close.d-flex.align-items-center.justify-content-center` —
         absolute top 0 right 0, **40×40**, padding/margin 0, z-index 1,
         `color: #fff` (white × glyph `ion-ios-close`, centered by the d-flex
         utilities; Bootstrap `.close` opacity .5 is NOT overridden → renders
         at 50% white; `aria-label="Close"`).
     - `div.modal-body.pt-md-0.pb-5.px-4.px-md-5.text-center` — border none,
       overflow hidden, **`margin-top: -180px`** (pulls the body content 180px
       UP over the header band), z-index 2; `text-align: center`:
       - `h2` — "Newsletter" (`.modal-content .modal-body h2`: font-weight
         **700**, color **#fff** — WHITE bold heading sitting ON the image
         band thanks to the -180px pull-up; Poppins).
       - `div.icon.d-flex.align-items-center.justify-content-center` —
         **200×200**, `border-radius: 50%`, margin 0 auto + margin-bottom
         10px, bg **`rgba(255,255,255,0.2)`**, font-size 30px; contains
         `img.img-fluid[src=images/email.svg]` (max-width **70%** of the
         circle; the screenshot shows an envelope + @ email glyph; recreate
         with a lucide icon — never copy the SVG).
       - `h4.mb-2` — "Subscribe to our newsletter" (`.modal-content
.modal-body h4`: font-size **18px**; no color override → dark
         Bootstrap heading color on the white page).
       - `form.subscribe-form` (action="#"): `div.form-group.d-flex`
         (margin-bottom 0, border-radius 0) →
         - `input.form-control.rounded-left` — placeholder "Enter email
           address"; custom input: bg **`rgba(0,0,0,0.05)`** !important,
           border none !important, outline none, color AND placeholder
           **`rgba(0,0,0,0.3)`** !important, font-size **16px**, radius 0
           (the `.rounded-left` utility adds 0.25rem on the LEFT corners);
           focus: outline none + no box-shadow. The custom `.form-control`
           base sets height **52px**.
         - `input.form-control.submit.px-3.rounded-right[type=submit value="Subscribe"]`
           — custom `.submit`: `color: #fff !important; display: block;
width: 130px; height: 52px; font-size: 16px; background:
#3e64ff !important; border: none; border-radius: 0` + the
           `.rounded-right` utility adds 0.25rem on the RIGHT corners → one
           joined 52px control: flex-1 grey email field (rounded-left) + fixed
           130px blue "Subscribe" button (rounded-right).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 575.98px`): `.modal-dialog` gets the
    Bootstrap mobile margin (`margin: 0.5rem`) and the dialog shrinks to fit;
    the header band stays 230px (no custom media rules in this template's
    CSS); the -180px body pull-up and the 200px circle keep their geometry —
    the circle overlaps the image/white boundary on ALL viewports. The
    joined form row does NOT wrap (`d-flex`): the 130px submit + flex-1
    input must be verified for horizontal overflow at the narrowest widths.
    The launch section stays full-viewport.
- **Design tokens:**
  - Blue **#3e64ff** (`rgb(62,100,255)`) — the brand accent: launch button
    bg/border (`.btn.btn-primary`), subscribe submit bg, `.form-control`
    focus border, generic link color (`a { color: #3e64ff }` — no links in
    this template's DOM).
  - Magenta **#dd00ff** — gradient partner: header wash `linear-gradient(45deg,
#dd00ff 0%, #3e65ff 100%)` at **opacity .3** (the gradient's blue stop is
    the near-identical `#3e65ff` variant).
  - White **#fff** — launch page (`section.ftco-section`), modal content bg,
    button text, close × glyph, modal-body h2, submit text.
  - Dark **#212529** — Bootstrap default text (launch heading "Modal 10",
    the h4 "Subscribe to our newsletter").
  - Text-on-light layers: subscribe inputs color AND placeholder
    `rgba(0,0,0,0.3)` on bg `rgba(0,0,0,0.05)`.
  - Icon circle: 200×200, `border-radius: 50%`, bg `rgba(255,255,255,0.2)`;
    inner glyph max-width 70%.
  - Buttons: `.btn` radius **40px** (PILL — NOT Modal 09's 4px), `box-shadow:
none !important`, font-size **15px**, sentence case; launch = padding
    16px 24px (py-3 px-4), WHITE text on blue `#3e64ff` bg/border, hover
    inverts to transparent + blue text; submit = fixed **130×52**, white
    text, blue bg, radius 0 + rounded-right utility (0.25rem right corners).
  - Modal: **max-width 500px**, **ROUNDED corners (Bootstrap 0.3rem — NOT
    Modal 09's square 0)**, border none, padding 0, bg #fff, shadow
    `0px 10px 34px -15px rgba(0,0,0,0.24)`, backdrop `rgba(0,0,0,0.5)`.
  - Header band: **height 230px**, padding 0, border none, `background-size:
cover`, centered; `:after` gradient `#dd00ff → #3e65ff` 45° at opacity
    .3. Body pull-up: `margin-top: -180px`.
  - Close ×: **40×40**, absolute top-right, padding/margin 0, z-index 1,
    **white at Bootstrap `.close` opacity .5**, glyph centered.
  - Fonts: **Poppins** (300;400;500 loaded via cf-fonts in the source head;
    headings `font-family: "Poppins", Arial, sans-serif`, line-height 1.5,
    weight 400 default, h2 overridden to 700; h4 18px; modal body inherits
    the Bootstrap system stack at 16px) — load Poppins 300;400;500 via
    Google Fonts `<link>`. Never copy the cf-fonts woff2 files.
  - Images: header band = background photo (snow-capped mountains / twilight
    sky per screenshot), cover + center; recreate with
    `https://picsum.photos/seed/ingress-1/500/230` (deterministic, 500×230 ≈
    the 500px dialog × 230px band) — never copy `images/bg-1.jpg`. The icon
    glyph = `images/email.svg` (envelope + @) — never copy; use a lucide
    icon (e.g. `Mail`) sized ~70% of the 200px circle.
  - Rhythm: white full-viewport launch page (heading → blue 40px-pill
    button) → one ROUNDED 500px dialog: 230px photo header band with
    purple-blue 30% gradient wash + 40×40 white × top-right → body pulled
    180px up: white bold "Newsletter" on the image → 200px white circle with
    email glyph straddling the boundary → dark 18px "Subscribe to our
    newsletter" → joined 52px form row (grey rounded-left email input +
    130px blue rounded-right Subscribe). No navbar, no other sections, no
    footer in the original.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a blue pill launch button.

#### Scenario: Launch page

- **GIVEN** the Ingress app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 10" (recreated as "Ingress" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a blue button labeled "Launch Modal 10" (recreate as
  "Launch Ingress" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on blue `#3e64ff`
- **AND** the button SHALL have a **40px pill border radius** (NOT the 4px
  radius of Modal 09), padding ~16px 24px, no box-shadow, and sentence-case
  text

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the newsletter modal SHALL open centered over a dark backdrop
  (`rgba(0,0,0,0.5)`)

### Requirement: Newsletter modal shell

The system SHALL render a centered (max-width 500px) ROUNDED modal dialog
with a close button.

#### Scenario: Dialog shell

- **GIVEN** the Ingress app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width **500px**) with **ROUNDED
  corners** (Bootstrap 0.3rem — NOT Modal 09's square 0)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  white × glyph (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

### Requirement: Modal header band

The system SHALL render a 230px-tall image header band with the brand
gradient wash and the close button.

#### Scenario: Header band

- **GIVEN** the modal is open
- **THEN** the top of the dialog SHALL show a **230px-tall** band filled by a
  cover-cropped background photo (the source's snow-capped-mountain /
  twilight-sky shot — recreated with a seeded picsum placeholder, never the
  source asset)
- **AND** a **45° gradient wash `#dd00ff → #3e65ff` at 30% opacity** SHALL
  tint the photo
- **AND** the 40×40 close button SHALL overlay the band's top-right corner

### Requirement: Newsletter body

The system SHALL render the modal body pulled up over the header band: a
white bold heading on the image, a circular email icon, and a subheading.

#### Scenario: Overlapping body content

- **GIVEN** the modal is open
- **THEN** the body SHALL be pulled **180px up over the header band**
  (source `margin-top: -180px`)
- **AND** a bold (700) WHITE "Newsletter" heading SHALL sit on the image band
- **AND** a **200×200 white circle** (bg `rgba(255,255,255,0.2)`, border-radius
  50%) with an email glyph (source `images/email.svg` — recreated with a
  lucide `Mail` icon sized ~70% of the circle) SHALL straddle the
  image/white boundary below the heading
- **AND** a dark "Subscribe to our newsletter" subheading SHALL render at
  18px below the circle

### Requirement: Subscribe form

The system SHALL render the joined email + Subscribe control.

#### Scenario: Subscribe row

- **GIVEN** the modal is open and the newsletter body is visible
- **THEN** a single **52px-tall joined row** SHALL show a light-gray email
  input (`bg rgba(0,0,0,0.05)`, no border, `color/placeholder
rgba(0,0,0,0.3)`, font-size 16px, left corners rounded 0.25rem) with
  placeholder "Enter email address"
- **AND** a **130×52 blue `#3e64ff`** submit button labeled "Subscribe"
  (white text, right corners rounded 0.25rem) SHALL sit directly beside it
- **AND** focusing the input SHALL NOT add a box-shadow or outline
- **AND** submitting the form SHALL keep the demo behavior (source
  `action="#"` — no real backend; a typed controlled input is required so
  tests can exercise typing/submit)

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Ingress app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Ingress app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Ingress — Newsletter Signup Modal"

## Verification checklist

- [ ] `openspec/specs/template-ingress/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/ingress/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] `npm run spec:validate` passes.
- [ ] Fidelity: structure matches the Modal 10 preview DOM 1:1
      (full-viewport centered launch section → blue 40px-pill launch button
      → centered 500px ROUNDED modal: 230px photo header band with
      `#dd00ff → #3e65ff` 45° gradient wash at 30% opacity + 40×40 white ×
      top-right / body pulled 180px up: white bold "Newsletter" on the image
      → 200px `rgba(255,255,255,0.2)` circle with email glyph → dark 18px
      "Subscribe to our newsletter" → joined 52px form row: grey
      rounded-left email input + 130×52 blue rounded-right Subscribe →
      minimal Component Dock footer).
- [ ] Tokens used in the app: blue `#3e64ff` (launch + submit buttons,
      focus border), magenta `#dd00ff` + blue `#3e65ff` (header gradient
      wash at 30% opacity), white `#fff` (launch page, modal bg, button
      text, close ×, h2, submit text), dark `#212529` (headings);
      `rgba(0,0,0,0.05)` input bg / `rgba(0,0,0,0.3)` input text+placeholder;
      `rgba(255,255,255,0.2)` icon circle; Poppins (300;400;500) via Google
      Fonts `<link>`; BUTTON radius **40px** (pill); modal max-width
      **500px**, ROUNDED 0.3rem, shadow `0 10px 34px -15px rgba(0,0,0,0.24)`,
      backdrop `rgba(0,0,0,0.5)`; header band **230px**; body pull-up
      **-180px**; submit **130×52**; close 40×40 (white, opacity .5); icon
      circle 200×200; inputs 16px radius-0 + rounded-left/right 0.25rem.
- [ ] No ColorLib references in `apps/ingress` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: the ONLY images are the header background photo and the email
      glyph — recreate with `https://picsum.photos/seed/ingress-1/500/230`
      and a lucide `Mail` icon (~70% of the circle); NEVER copy
      `images/bg-1.jpg` or `images/email.svg`.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Mobile: verify the dialog fits at ≤575.98px (Bootstrap mobile margin
      ≈ `mx-2`) and the joined form row (flex-1 input + 130px submit) has NO
      horizontal overflow; header band stays 230px; launch section stays
      full-viewport.
- [ ] Source's `js/main.js` auto-show line is commented out — the modal
      opens ONLY on launch-button click; recreate with conditional render.
