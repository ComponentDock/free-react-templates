# Template: Narthex (Email Confirmation Modal)

## Purpose

Narthex is a single-page email-confirmation modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 08" free template (source: https://colorlib.com/wp/template/modal-08/),
built under a DIFFERENT name (**Narthex** — the eighth of the
architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), Threshold (Modal 04), Doorway
(Modal 05), Gateway (Modal 06), and Lobby (Modal 07); a narthex is the
entrance vestibule of a church — the threshold hall where a visitor is
received, fitting for a confirmation/notification dialog — per the monorepo
naming mandate: never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 08" and a SALMON
**`#fb8691`** PILL button (border-radius **40px**) "Launch Modal 08" that
opens a centered Bootstrap modal (`modal-dialog-centered`, max-width
**600px**, rounded corners) whose `modal-header` is a **230px-tall diagonal
gradient from purple `#915eff` to coral `#ff8e59` (45deg)** with a
white skewed "degree-cut" bottom edge (`ftco-degree-bg`: two white 60px
flaps, skewY ±10deg, hanging 30px below the header) and a plain WHITE ×
close button (40×40, absolute top-right, NO background). The `modal-body`
is pulled UP **-180px** over the header (`margin-top: -180px`, z-index 2) so
the content straddles the gradient: a bold white "You've Got Mail!" heading
(weight 700, WHITE — it sits ON the gradient), a **200px circular** mail
illustration (`images/email.svg` — a mustard-yellow `#FFD15C` envelope with
a white triangular flap and an orange `@` badge; the circle itself is
transparent), then below in the white zone: "We sent confirmation link to:"
(18px) and the address "johndoe@gmail.com" (22px, weight **800**, with the
`@` at weight **300**). The whole template is ONE interactive surface — the
launch button and the confirmation modal. Narthex recreates that structure
1:1 with matching layout, tokens, typography, and content kinds (no
ColorLib assets copied; the envelope SVG is recreated with a lucide-react
icon or inline SVG).

> NAMING NOTE: the ColorLib source name "Modal 08" is FORBIDDEN as the app
> name. **Narthex** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 08". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 807). Free
  email-confirmation ("You've Got Mail!") modal component template. The
  `modal-08` slug appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-08/` returns 404 (9
  bytes); the REAL preview URL (same `/theme/bootstrap/` prefix as the rest
  of the Bootstrap UI series, e.g. Modal 01–07) is
  `https://preview.colorlib.com/theme/bootstrap/modal-08/` (HTTP 200, 8.6KB
  HTML, `<title>` "Modal 08"). Stylesheets: `css/style.css` (223.5KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB,
  starting at the `body { font-family: "Poppins" ... }` rule; token source),
  `css/ionicons.min.css` (close × glyph). **Poppins** (300/400/500/600/700/
  800/900) via cf-fonts @font-face blocks in the head. `js/main.js`:
  `$('[data-toggle="tooltip"]').tooltip()` (NO tooltip elements exist in this
  template — dead code), `fullHeight()` sets `.js-fullheight` to the window
  height (recreate with `min-h-screen` flex centering), and the
  `$('#exampleModalCenter').modal('show')` line is COMMENTED OUT — the modal
  opens only via the launch button. Structure, copy, and tokens below are
  from the live DOM + `style.css`. Screenshot (`modal-08.jpg`, 1200×972,
  browser-verified 2026-08-16) shows the modal OPEN: medium-grey backdrop
  (`rgba(0,0,0,0.5)`) over the white page, a rounded-corner card with a
  purple→salmon diagonal gradient header, white "You've Got Mail!" ON the
  gradient, a mustard-yellow envelope illustration (white triangular flap +
  orange `@` badge), "We sent confirmation link to:" in small dark grey,
  "johndoe@gmail.com" in bold black, and a faint white × top-right.
- **Visual design (screenshot + live render):** clean, flat, modern — one
  centered CTA on a white page, then one rounded confirmation dialog whose
  top third is a vivid purple→coral diagonal gradient. Brand accents:
  salmon **`#fb8691`** (launch button) and the gradient pair **`#915eff`** →
  **`#ff8e59`** (modal header). Sans-serif Poppins throughout (body
  14px/line-height 1.8; "You've Got Mail!" weight 700 WHITE on the
  gradient; email 22px weight 800, `@` weight 300). The ONLY image is the
  envelope illustration inside a transparent 200px circle. Pure UI — one
  button + one dialog + the close × icon.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 08" (Poppins; `.ftco-section h2` sets
       margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 08"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 40px }` → **40px PILL radius**, bg **`#fb8691`**
       !important, 1px `#fb8691` border, WHITE text, padding 16px 24px,
       Poppins 15px, `box-shadow: none !important`, sentence case — NOT
       uppercase). Hover inverts: transparent bg + `#fb8691` text.
  2. **Confirmation modal** — `div.modal.fade#exampleModalCenter`
     (tabindex="-1", `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; default dark backdrop `rgba(0,0,0,0.5)`) → `div.modal-dialog.modal-dialog-centered`
     (max-width **600px** — wider than Bootstrap's 500px default, narrower
     than Modal 07's 950px; vertically centered) → `div.modal-content`
     (border none, padding 0, **overflow hidden**, **rounded corners**
     (Bootstrap `.modal-content` default border-radius 0.3rem — NOT square
     like Modal 07), bg `#fff`, `box-shadow: 0px 10px 34px -15px
rgba(0,0,0,0.24)`):
     - `div.modal-header.ftco-degree-bg` — **height 230px**, padding 0,
       border none, `background: linear-gradient(45deg, #915eff 0%, #ff8e59
100%)` (diagonal purple→coral; `-moz`/`-webkit` prefixed equivalents);
       `.ftco-degree-bg` adds position relative + TWO WHITE skewed bottom
       flaps (`:before` left:0 / `:after` right:0, each width 50%, height
       60px, bottom -30px, z-index 1, **background #fff**, `skewY(±10deg)`)
       — together they form the angled/chevron "degree cut" at the
       gradient's bottom edge (recreate with a clip-path polygon on the
       header or two skewed white divs). Contains ONLY the close button:
       `button.close` — absolute top 0 right 0, 40×40, padding/margin 0,
       z-index 1, **color #fff — plain WHITE × glyph, NO background**
       (`ion-ios-close`; `aria-label="Close"`). NOTE: unlike Modal 06/07's
       close (white glyph on `rgba(0,0,0,0.1)`), Modal 08's close has NO
       background square.
     - `div.modal-body.pt-md-0.pb-md-5.text-center` — border none,
       overflow hidden, **margin-top: -180px**, z-index 2 (the body is
       pulled UP 180px over the gradient header, so the top of the body
       content renders ON the gradient), text-center:
       - `h2` — "You've Got Mail!" (**font-weight 700, color #fff — WHITE,
         rendered ON the gradient**; Poppins).
       - `div.icon.d-flex.align-items-center.justify-content-center` —
         **width/height 200px, border-radius 50%** (transparent circle),
         font-size 30px, margin 0 auto, margin-bottom 10px →
         `img.img-fluid` src `images/email.svg` (the envelope
         illustration: mustard-yellow `#FFD15C` envelope body, white
         triangular flap, orange `@` badge; viewBox 0 0 502 502).
       - `h4.mb-2` — "We sent confirmation link to:" (font-size **18px**,
         dark `#212529`-ish, margin-bottom 0.5rem).
       - `h3` — "johndoe`<span>`@`</span>`gmail.com" (font-weight **800**,
         font-size **22px**, near-black; the `@` span is font-weight
         **300**).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): nothing collapses inside the
    dialog — the modal keeps Bootstrap's mobile margins (`0.5rem`), the
    header stays 230px, the body overlap stays -180px; the launch section
    stays full-viewport with the centered column. Single-column demo, no
    layout changes. Verify no horizontal overflow.
- **Design tokens:**
  - Gradient brand pair **#915eff** (purple, `rgb(145,94,255)`) →
    **#ff8e59** (coral/orange, `rgb(255,142,89)`) — 45deg diagonal; the
    230px modal header background; white "You've Got Mail!" text sits on it.
  - Salmon accent **#fb8691** (`rgb(251,134,145)`) — `.btn-primary` bg +
    border (the LAUNCH button), white text; hover inverts to transparent +
    `#fb8691` text.
  - White **#fff** — launch page (`section.ftco-section`), modal content bg,
    launch-button text, "You've Got Mail!" heading (on the gradient), the ×
    close glyph, the two degree-cut flaps.
  - Dark text (Bootstrap `#212529` default) — "Modal 08" launch heading,
    "We sent confirmation link to:" (18px), "johndoe@gmail.com" (22px,
    weight 800; `@` span weight 300).
  - Mustard **#FFD15C** — the envelope illustration's body (asset color;
    recreated, never copied).
  - Close ×: 40×40 absolute top-right, **plain WHITE glyph, NO background
    square** (differs from Modal 06/07's `rgba(0,0,0,0.1)`).
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`; buttons
    `box-shadow: none !important`; backdrop `rgba(0,0,0,0.5)`.
  - Fonts: **Poppins** (300–900 available in the source head; body 14px /
    line-height 1.8; "You've Got Mail!" weight 700; email 22px weight 800)
    — load via Google Fonts `<link>` (weights 300;400;700;800). Never copy
    the cf-fonts woff2 files.
  - Buttons: **40px PILL radius** (custom `.btn { border-radius: 40px }`,
    font-size 15px) — launch = padding 16px 24px, WHITE text, sentence
    case; hover inverts to transparent bg + salmon text. (PILL, NOT the 4px
    radius of Modal 07.)
  - Modal: max-width **600px**, ROUNDED corners (0.3rem Bootstrap default),
    font-size inherited, `overflow: hidden`, border none, padding 0.
  - Header: 230px, diagonal gradient, white chevron/degree-cut bottom edge
    (two skewed white flaps).
  - Body: margin-top **-180px** (straddles the gradient), z-index 2,
    text-center, padding-top 0 / padding-bottom 3rem (`pb-md-5`).
  - Icon: 200×200 transparent circle, margin 0 auto, margin-bottom 10px.
  - Rhythm: white full-viewport launch page (heading → pill button) → one
    600px rounded dialog: 230px gradient header ("You've Got Mail!" white +
    × close) → body pulled up 180px (200px mail icon ON the gradient) →
    confirmation line → bold email address. No navbar, no other sections,
    ONE illustration, no footer in the original.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a salmon pill launch button.

#### Scenario: Launch page

- **GIVEN** the Narthex app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 08" (recreated as "Narthex" — the
  NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a salmon button labeled "Launch Modal 08" (recreate
  as "Launch Narthex" with the same kind: single primary CTA)
- **AND** the button text SHALL be white on salmon `#fb8691`
- **AND** the button SHALL have a **40px pill border radius** (NOT 4px),
  padding ~16px 24px, no box-shadow, and sentence-case text (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the confirmation modal SHALL open centered over a dark backdrop
  (`rgba(0,0,0,0.5)`)

### Requirement: Confirmation modal shell

The system SHALL render a centered (max-width 600px) rounded modal dialog
with a close button and a gradient header.

#### Scenario: Dialog shell

- **GIVEN** the Narthex app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 600px) with ROUNDED
  corners (0.3rem — NOT square)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  plain WHITE × glyph (`aria-label="Close"`), with NO background square
- **AND** clicking the close button (or the backdrop, or pressing Escape)
  SHALL close the dialog

#### Scenario: Gradient header

- **GIVEN** the modal is open
- **THEN** the modal header SHALL be 230px tall with a diagonal gradient
  from purple `#915eff` (left) to coral `#ff8e59` (right)
- **AND** the header's bottom edge SHALL have the white angled
  "degree-cut" (chevron) treatment
- **AND** the heading "You've Got Mail!" SHALL render in bold white text
  ON the gradient

### Requirement: Mail icon

The system SHALL render a 200px circular mail illustration (the source's
mustard-yellow envelope SVG, recreated with an icon — no asset copied).

#### Scenario: Icon content

- **GIVEN** the Narthex app is rendered and the modal is open
- **WHEN** the dialog displays
- **THEN** a 200×200 circular icon area SHALL sit centered below the
  "You've Got Mail!" heading, straddling the gradient/white boundary
- **AND** it SHALL display a mail/envelope illustration (mustard-yellow
  `#FFD15C` envelope with a white flap and an orange `@` badge in the
  original — recreated via a lucide-react `Mail`/`MailCheck` icon or an
  inline SVG, sized ~120–160px)

### Requirement: Confirmation message

The system SHALL render the confirmation line and the recipient email
address below the icon.

#### Scenario: Message content

- **GIVEN** the Narthex app is rendered and the modal is open
- **THEN** the line "We sent confirmation link to:" SHALL render centered
  below the icon (18px, dark text)
- **AND** the address "johndoe@gmail.com" SHALL render below it (22px,
  weight 800, near-black) with the `@` character at weight 300
- **AND** the text content SHALL sit in the white area below the gradient

### Requirement: Footer

The system SHALL render the mandatory attribution footer.

#### Scenario: Footer content

- **GIVEN** the Narthex app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Narthex app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Narthex — Email Confirmation Modal"

## Verification checklist

- [ ] `openspec/specs/template-narthex/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/narthex/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 08 preview DOM 1:1
      (full-viewport centered launch section → salmon 40px-pill launch
      button → centered 600px ROUNDED modal: 230px diagonal gradient
      header (#915eff → #ff8e59) with white chevron degree-cut bottom edge
      and plain WHITE × close (no bg) / body pulled up -180px: bold white
      "You've Got Mail!" ON the gradient, 200px circular mail icon, "We
      sent confirmation link to:" 18px, "johndoe@gmail.com" 22px/800 with
      `@` at 300 → minimal Component Dock footer).
- [ ] Tokens used in the app: gradient pair `#915eff` → `#ff8e59` (45deg —
      modal header), salmon `#fb8691` (launch button), white `#fff` (launch
      page, modal bg, button text, "You've Got Mail!" heading, close glyph,
      degree-cut flaps), dark `#212529`-ish text (launch heading, message
      lines), mustard `#FFD15C` (envelope recreation); Poppins
      (300;400;700;800) via Google Fonts `<link>`; BUTTON radius **40px
      PILL**; modal max-width **600px**, ROUNDED corners (0.3rem); header
      230px; body margin-top **-180px**; icon 200×200 circle; modal shadow
      `0 10px 34px -15px rgba(0,0,0,0.24)`; backdrop `rgba(0,0,0,0.5)`.
- [ ] No ColorLib references in `apps/narthex` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] Images: NO background photos in this template — the only graphic is
      the mail icon. Recreate the mustard-yellow envelope with a
      lucide-react `Mail`/`MailCheck` icon (probe
      `node -e "console.log(typeof require('lucide-react').MailCheck)"`) or
      an inline SVG; NEVER copy `images/email.svg`.
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; conditional render (not in DOM when closed).
- [ ] Degree-cut recreation: verify the gradient header's bottom edge shows
      the white chevron/angled cut (clip-path polygon or two skewed white
      divs) — check visually in the browser at desktop AND mobile widths.
