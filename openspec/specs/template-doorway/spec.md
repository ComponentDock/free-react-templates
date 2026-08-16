# Template: Doorway (Signup Form Modal)

## Purpose

Doorway is a single-page signup-form modal demo in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 05" free template (source: https://colorlib.com/wp/template/modal-05/),
built under a DIFFERENT name (**Doorway** — the entrance point; the fifth of
the architectural-entrance names for this UI series, after Portico (Modal 01),
Vestibule (Modal 02), Portal (Modal 03), and Threshold (Modal 04); a signup
modal is the doorway a new user crosses into an account — per the monorepo
naming mandate: never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimal, centered demo page: a full-viewport white
`section.ftco-section` with a centered heading "Modal 05" and a blue pill
button "Launch Modal 05" that opens a centered Bootstrap modal
(`modal-dialog-centered`, max-width **450px**) containing a **signup form**:
a "Create Your Account" heading, a row of three circular social signup icons
(Twitter / Facebook / Instagram, tooltips on hover), then a labeled form —
"Full Name" / "Email Address" / "Password" text inputs (52px tall, rounded
5px, light grey border) and a full-width blue pill "Sign Up" submit button,
plus an underlined "I'm already a member" login link. The whole template is
ONE interactive surface — the launch button and the signup modal. Doorway
recreates that structure 1:1 with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Modal 05" is FORBIDDEN as the app
> name. **Doorway** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-16). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 05". Listed in TEMPLATES.md under **Bootstrap
  Modals (20)** (section header line 798; row at line 804). Free signup-form
  modal component template. The `modal-05` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-16):** the default
  preview URL `https://preview.colorlib.com/theme/modal-05/` returns 404;
  the REAL preview URL (same `/theme/bootstrap/` prefix as the rest of the
  Bootstrap UI series, e.g. Modal 01–04) is
  `https://preview.colorlib.com/theme/bootstrap/modal-05/` (HTTP 200, 9.9KB
  HTML, `<title>` "Modal 05"). Stylesheets: `css/style.css` (224.3KB —
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~5KB,
  starting at the `body { font-family: "Poppins" ... }` rule; token source),
  `css/ionicons.min.css` (close × + the three logo glyphs). Poppins
  (300/400/500/600/700/800/900) webfonts via cf-fonts @font-face blocks in
  the head. `js/main.js`: `$('[data-toggle="tooltip"]').tooltip()` (the
  social icons get hover tooltips); `fullHeight()` sets `.js-fullheight`
  height to the window height; the `$('#exampleModalCenter').modal('show')`
  line is COMMENTED OUT — the modal opens only via the launch button.
  Structure, copy, and tokens below are from the live DOM + `style.css`.
  Screenshot (`modal-05.jpg`, 1200×972, browser-verified 2026-08-16) shows
  the modal OPEN: flat grey backdrop over the white page, a centered WHITE
  card with slightly rounded corners — "CREATE YOUR ACCOUNT" heading in dark
  text, three small circular dark-grey social icons in a row beneath it, then
  three input fields with tiny uppercase light-grey labels (FULL NAME filled
  with "John Doe", EMAIL ADDRESS with "johndoe@gmail.com", PASSWORD
  placeholder), a prominent wide solid-blue rounded "SIGN UP" button, and a
  small light-grey underlined "I'm already a member" link below; a small ×
  close icon sits at the card's top-right corner.
- **Visual design (screenshot + live render):** clean and minimal — one
  centered rectangular CTA on a white page, then one centered signup dialog.
  The ONLY brand color is blue **`#3e64ff`** (launch button, Sign Up button,
  link color, input focus border, social-icon hover). The modal is white with
  dark `#212529` heading, `rgba(0,0,0,0.8)` input text, and
  `rgba(0,0,0,0.3)` labels/link. Sans-serif Poppins throughout (300–900); no
  script/display font. No photos or images anywhere — pure form UI.
- **Section order (1:1 from live DOM):**
  1. **Launch section** — `section.ftco-section` (bg `#fff`) →
     `div.container` → `div.row.justify-content-center.js-fullheight` (row
     height set to the window height by `js/main.js` `fullHeight()`; recreate
     with a full-viewport flex container) → `div.col-md-6.text-center.d-flex.align-items-center`
     (centered column, vertically centered) → `div.wrap.w-100`:
     - `h2.mb-2` — "Modal 05" (Poppins; `.ftco-section h2` sets
       margin-bottom 0, so the mb-2 utility (0.5rem) governs spacing).
     - `button.btn.btn-primary.py-3.px-4` — "Launch Modal 05"
       (`data-toggle="modal" data-target="#exampleModalCenter"`; custom
       `.btn { border-radius: 40px }` → **PILL**, bg `#3e64ff`, 1px `#3e64ff`
       border, WHITE text, padding 16px 24px, Poppins 15px, sentence case —
       NOT uppercase).
  2. **Signup modal** — `div.modal.fade#exampleModalCenter` (tabindex="-1",
     `role="dialog"`, `aria-labelledby="exampleModalCenterTitle"`,
     `aria-hidden="true"`; Bootstrap hides it until the launch button toggles
     it; dark backdrop) → `div.modal-dialog.modal-dialog-centered`
     (max-width **450px**, vertically centered) → `div.modal-content`
     (border none, padding 0, radius 0.3rem — Bootstrap default, NOT
     overridden; `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`,
     bg `#fff`):
     - `div.modal-header` (custom: padding 0, border none): close button
       `button.close` — absolute top 0 right 0, 40×40, z-index 1,
       `ion-ios-close` glyph, `aria-label="Close"` (NOTE: NO custom
       background — the Bootstrap default `.close` styling applies:
       translucent-black ×, `color: #000`, `opacity: 0.5`. DIFFERENT from
       Modal 04's teal-filled square close).
     - `div.modal-body.p-4.py-5.p-md-5` (24px sides / 48px vertical, 48px on
       md+):
       - `h3.text-center.mb-3` — "Create Your Account" (Poppins, weight 400,
         `#212529`, centered).
       - `ul.ftco-footer-social.p-0.text-center` — three `li.ftco-animate`
         items, each `a` with `data-toggle="tooltip" data-placement="top"`
         and `title="Twitter"` / `"Facebook"` / `"Instagram"` wrapping a
         `span.ion-logo-twitter` / `ion-logo-facebook` / `ion-logo-instagram`
         glyph. CASCADE NOTE: the stylesheet defines `.ftco-footer-social`
         TWICE; the LATER block (line ~8252) wins — 50×50 WHITE circles,
         `border-radius: 50%`, `border: 1px solid rgba(0,0,0,0.05)`, the
         glyph 20px at `rgba(0,0,0,0.8)` centered, hover → `#3e64ff`.
       - `form.signup-form` → four `div.form-group.mb-2` blocks:
         - `label[for="name"]` "Full Name" (uppercase, 12px,
           `rgba(0,0,0,0.3)`) + `input.form-control` (type text, placeholder
           "John Doe").
         - `label[for="email"]` "Email Address" + `input.form-control` (type
           text — NOT `type="email"` in the source — placeholder
           "johndoe@gmail.com").
         - `label[for="password"]` "Password" + `input.form-control` (type
           password, placeholder "Password").
         - `button[type="submit"].form-control.btn.btn-primary.rounded.submit.px-3`
           "Sign Up" (full-width — form-control is width 100%; 52px tall;
           CASCADE NOTE: `.form-control { border-radius: 5px }` comes BEFORE
           the later `.btn { border-radius: 40px }`, and Bootstrap's
           `.rounded` (0.25rem) is earlier still — the LAST rule wins, so the
           button renders as a **40px-radius PILL**, bg `#3e64ff`, 1px
           `#3e64ff` border, WHITE text).
         - `div.form-group.d-md-flex` → `div.w-100.text-center` →
           `a.forgot` "I'm already a member" (class `forgot`;
           `rgba(0,0,0,0.3)`, `text-decoration: underline`; a login link, not
           an input).
  3. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
  - Mobile (Bootstrap `max-width: 767.98px`): the dialog stays centered and
    scales down; form fields stack as block elements (they already are full
    width). No column collapse needed — single-column layout at all sizes.
- **Design tokens:**
  - Brand blue **#3e64ff** (`rgb(62,100,255)`; 12× in the custom CSS) —
    `.btn-primary` bg + border (launch + Sign Up), `a` link color,
    `.form-control:focus` border, `.ftco-footer-social a:hover` color.
  - White **#fff** — page (`section.ftco-section`), modal content bg, button
    text, input bg, social circle bg.
  - Dark **#212529** (`rgb(33,37,41)`) — body/heading default text.
  - Input text `rgba(0,0,0,0.8)` — `.form-control` text + placeholder
    (`!important`), social glyphs.
  - Muted `rgba(0,0,0,0.3)` — labels (uppercase 12px), `.forgot` link.
  - Border greys: `rgba(0,0,0,0.1)` (input border 1px),
    `rgba(0,0,0,0.05)` (social circle border).
  - Shadows: modal `0px 10px 34px -15px rgba(0,0,0,0.24)`; inputs have NO
    box-shadow (explicitly none).
  - Fonts: **Poppins** (300/400/500/600/700/800/900; body 15px /
    line-height 1.8; headings weight 400, line-height 1.5) — load via Google
    Fonts `<link>` (weights 300;400;500;600;700;800;900). Never copy the
    cf-fonts woff2 files.
  - Buttons: **40px-radius PILLS** (custom `.btn { border-radius: 40px }`
    beats Bootstrap's 0.25rem AND `.form-control`'s 5px because it is the
    LAST rule in the cascade) — launch = padding 16px 24px, WHITE text,
    sentence case; Sign Up = full-width, 52px tall, WHITE text.
    `.btn-primary:hover` inverts to transparent bg + `#3e64ff` text.
  - Inputs: height 52px, radius 5px (`.form-control`), border
    `1px solid rgba(0,0,0,0.1)`, focus border `#3e64ff`, font-size 16px.
  - Labels: uppercase, 12px, `rgba(0,0,0,0.3)`.
  - Social circles: 50×50 white, radius 50%, 1px `rgba(0,0,0,0.05)` border,
    20px glyph `rgba(0,0,0,0.8)`, hover `#3e64ff`; tooltips on hover
    ("Twitter"/"Facebook"/"Instagram" — recreate with `title` attribute).
  - Close ×: 40×40 absolute top-right, Bootstrap-default translucent black
    (`color:#000; opacity:.5`) — NOT teal-filled (that was Modal 04).
  - Rhythm: 450px-wide centered card → heading (mb 16px) → social row →
    3 inputs (mb 8px each) → full-width Sign Up → centered login link.

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a
heading and a blue pill launch button.

#### Scenario: Launch page

- **GIVEN** the Doorway app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered
  column
- **AND** it SHALL show the heading "Modal 05" (recreated as "Doorway" —
  the NEW name; keep the content kind: demo heading)
- **AND** it SHALL show a blue pill button labeled "Launch Modal 05"
  (recreate as "Launch Doorway" / "Launch Signup" with the same kind:
  single primary CTA)
- **AND** the button text SHALL be white on blue `#3e64ff`
- **AND** the button SHALL be a pill (border-radius ~40px), padding ~16px
  24px, and sentence-case text (NOT uppercase)

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the signup modal SHALL open centered over a dark backdrop

### Requirement: Signup modal shell

The system SHALL render a 450px centered modal dialog with a close button
and a single-column signup body.

#### Scenario: Dialog shell

- **GIVEN** the Doorway app is rendered and the modal is open
- **THEN** the dialog SHALL be centered (max-width 450px) with slightly
  rounded corners (Bootstrap default 0.3rem)
- **AND** it SHALL cast the shadow `0 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a 40×40 close button SHALL sit at the top-right corner with a
  translucent-black × glyph (`aria-label="Close"`)
- **AND** clicking the close button (or the backdrop) SHALL close the dialog

#### Scenario: Heading and social row

- **WHEN** the dialog displays
- **THEN** the body SHALL show the centered heading "Create Your Account"
  (Poppins, weight 400, `#212529`)
- **AND** directly beneath it a row of three circular social icons for
  Twitter, Facebook, and Instagram SHALL appear (white circles, 50×50,
  radius 50%, 1px `rgba(0,0,0,0.05)` border, dark-grey 20px glyphs)
- **AND** hovering each icon SHALL turn it blue `#3e64ff` and SHALL expose
  its tooltip name (Twitter / Facebook / Instagram)

### Requirement: Signup form

The system SHALL render the labeled three-field signup form with a Sign Up
submit button and a login link.

#### Scenario: Form fields

- **GIVEN** the Doorway app is rendered and the modal is open
- **WHEN** the body displays
- **THEN** three inputs SHALL appear, each with a tiny uppercase
  light-grey label: "Full Name" (placeholder "John Doe"), "Email Address"
  (placeholder "johndoe@gmail.com"), and "Password" (type password,
  placeholder "Password")
- **AND** each input SHALL be 52px tall with radius 5px and a
  `1px solid rgba(0,0,0,0.1)` border
- **AND** focusing an input SHALL flip its border to blue `#3e64ff`

#### Scenario: Sign Up button

- **THEN** a full-width blue PILL button labeled "Sign Up" SHALL appear
  below the password field (white text on `#3e64ff`, 52px tall,
  border-radius ~40px)
- **AND** an underlined muted link "I'm already a member" SHALL appear
  centered below the button (color `rgba(0,0,0,0.3)`)

#### Scenario: Submit behavior

- **WHEN** the user fills the form and submits
- **THEN** the form SHALL acknowledge the submission (e.g. swap to a
  success/confirmation message) so the interactive behavior is testable

### Requirement: Responsive behavior

The system SHALL keep the signup modal usable on narrow viewports.

#### Scenario: Mobile layout

- **GIVEN** the Doorway app is rendered
- **WHEN** the viewport is narrower than ~768px
- **THEN** the launch heading/button and the modal SHALL remain centered
- **AND** the form fields SHALL stay full-width and stacked in order
  (no horizontal overflow)

### Requirement: Footer

The system SHALL render the standard Component Dock attribution footer.

#### Scenario: Footer content

- **GIVEN** the Doorway app is rendered
- **WHEN** the page bottom is visible
- **THEN** the footer SHALL link to `https://www.componentdock.com/`
  (branded "Component Dock" — the source template has no footer, this is the
  repo convention)

### Requirement: Page metadata

The system SHALL set a descriptive document title.

#### Scenario: Document title

- **GIVEN** the Doorway app is rendered
- **WHEN** the document loads
- **THEN** the document title SHALL be "Doorway — Signup Form Modal"

## Verification checklist

- [ ] `openspec/specs/template-doorway/spec.md` exists on main with the
      full section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/doorway/tasks.md` exists on main with design notes
      and the implementation task outline.
- [ ] Fidelity: structure matches the Modal 05 preview DOM 1:1
      (full-viewport centered launch section → blue pill launch button →
      centered 450px signup modal: close × / "Create Your Account" heading /
      social icon row / labeled Full Name + Email Address + Password inputs /
      full-width Sign Up pill / "I'm already a member" link) → minimal
      Component Dock footer. Mobile: centered, stacked, no overflow.
- [ ] Tokens used in the app: brand blue `#3e64ff` (primary — buttons,
      link color, focus border, social hover), white `#fff` (page, modal,
      button text, inputs, social circles), `#212529` (heading/body text),
      `rgba(0,0,0,0.8)` (input text + placeholders, social glyphs),
      `rgba(0,0,0,0.3)` (labels, login link), `rgba(0,0,0,0.1)` (input
      border), `rgba(0,0,0,0.05)` (social circle border), modal shadow
      `0 10px 34px -15px rgba(0,0,0,0.24)`; Poppins 300–900 via Google Fonts
      `<link>`; PILL buttons (radius ~40px) for BOTH launch and Sign Up;
      inputs 52px/radius-5 with blue focus border; uppercase 12px muted
      labels; 50×50 circular social icons with tooltips; Bootstrap-default
      translucent-black close × (NOT teal — that was Modal 04).
- [ ] No ColorLib references in `apps/doorway` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] No images needed (the template is pure form UI — no picsum seeds, no
      ColorLib assets); icons from lucide-react or inline SVG brand glyphs
      (lucide removed brand icons — probe
      `node -e "console.log(typeof require('lucide-react').Facebook)"` and
      use inline SVG simple-icons paths for Twitter/Facebook/Instagram if
      undefined; `X` for the close, probed likewise).
- [ ] Modal a11y: `role="dialog"`, `aria-modal="true"`, `aria-label`,
      Escape-to-close, backdrop click closes, close × with
      `aria-label="Close"`; labels wired to inputs (`htmlFor`/`id` — the
      source's `for=` attrs point at missing ids; wire them properly);
      conditional render (not in DOM when closed).
