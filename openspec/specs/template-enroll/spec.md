# Template: Enroll (Registration Signup Form)

## Purpose

Enroll is a single-page REGISTRATION SIGNUP FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Signup Form 03"
free template (source: https://colorlib.com/wp/template/signup-form-03/), built
under a DIFFERENT name (**Enroll**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a static Bootstrap 4 page (`<title>Sign Up #3</title>`): a
plain white body with a full-width 200px photograph band at the top and, below
it, a light blue-grey (`#f6f7fc`) registration area that vertically centers a
WHITE form card **pulled up 300px over the photo band** (`margin-top: -300px`),
so the card straddles the photo/grey boundary. The card holds a centered
"Register" heading and a 4-field form — Name, Email Address, Password,
Re-type Password — plus an "Agree our Terms and Conditions" custom checkbox,
a "Have an account? Login" link, and a full-width orange **Register** submit
button. The brand accent is a warm ORANGE `#fb771a` (the button and the checked
checkbox); inputs are borderless light-grey `#efefef` fields with 4px radius;
the font is Roboto (300 weight body).

**Source behavior (signature of the page):**

- **No JavaScript behavior at all.** The form posts to `#` (page reload); the
  page's `main.js` only wires Bootstrap accordion collapse handlers — there is
  NO accordion/collapse element on this page, so it is fully inert. jQuery,
  popper and bootstrap.min.js are loaded but unused. The owl.carousel CSS is
  loaded but no carousel exists. The recreation therefore defines its own
  client-side validation + success state (see Requirements) following the
  repo's form conventions — the source has ZERO validation.
- **Custom checkbox.** The "Agree our Terms and Conditions" checkbox uses the
  classic Bootstrap-4-style custom control: a 20×20 rounded-4px indicator
  (`#e6e6e6` idle, `#fb771a` checked with a WHITE check glyph from the
  icomoon font, codepoint `\e5ca` — a material "check"; lucide `Check` in the
  recreation). The native input is visually hidden (opacity 0, z-index -1).
- **Dead weight in the source.** `.bg` carries `order-1 order-md-2` and
  `.contents` `order-2 order-md-1`, but `.half` is NOT a flex container — the
  two divs are plain block children, so the order classes do nothing. The
  layout is always VERTICAL (photo band on top, form area below), never a
  side-by-side split. The inner `.row` + `col-md-6` does real work: it centers
  the card and caps its width at 50% of the container (~540px at 1280px
  viewport width).
- **Image band is exactly 200px tall at every breakpoint.** `.half .bg` sets
  `height: 200px` in the base rule AND in the ≤991.98px media query (the
  author's SCSS nested the same value twice). `background-size: cover` +
  `background-position: center` on `images/bg_1.jpg`. The recreation uses a
  picsum placeholder with the same treatment.

**WHAT MAKES ENROLL DISTINCT (signature behaviors):**

1. **The straddling card.** The 300px upward pull (`margin-top: -300px` on
   `.form-block`) is the design's signature: the white card overlaps the photo
   band by ~250px instead of floating fully inside the grey area. Most other
   ColorLib forms keep the card inside its section; Enroll deliberately
   overlaps the hero image boundary.
2. **Orange-on-neutral accent scheme.** `#fb771a` appears exactly twice on the
   page: the submit button and the checked checkbox indicator (hover
   `#eb6304` button / `#fb8633` checkbox). Everything else is monochrome —
   white card, `#f6f7fc` form area, `#efefef` inputs, `#888` links/captions,
   `#b3b3b3` paragraph text — so the orange is the single focal point.
3. **Zero-javascript original.** Unlike the wizard family (jQuery-Steps,
   validation plugins, sliders), this source has NO JS behavior: no validation,
   no effects, no navigation. The recreation must ADD usable behavior
   (validation, success feedback) without changing the visual design.
4. **Borderless flat inputs.** `border: none; border-radius: 4px; height:
54px; background: #efefef` — no outline, no shadow, no focus ring in the
   source (focus just removes the default; the recreation adds an accessible
   focus-visible ring instead). Contrast with Framely-style bordered inputs.

## Naming

- NEW name: **Enroll** (single lowercase word; verb meaning "register");
  package `@free-react-templates/enroll`, app folder `apps/enroll`,
  deploy target `https://enroll.free.componentdock.com` (`public/CNAME`),
  homepage `https://enroll.free.componentdock.com`.
- Source keeps its name "Signup Form 03" — the mapping lives ONLY in this
  spec, TEMPLATES.md, and the PR (no ColorLib strings in app files).
- Name check: no collision with any `apps/` folder or `openspec/specs/`
  folder on origin/main (verified 2026-08-18); no `feat:` commit on
  origin/main references this slug; no open PR claims it.

## Design reference (replication findings)

Verified 2026-08-18 by the prep stream (direct fetch + live browser render):

- **Preview URL — REACHABLE:** the naive
  `https://preview.colorlib.com/theme/signup-form-03/` returns **404**. The
  correct URL is
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-03/`** (HTTP
  200, 11,710 bytes, 83 lines, `<title>Sign Up #3</title>`). The whole
  signup-form family lives under the `/theme/bootstrap/` path — do not redo
  this lookup.
- **Stylesheets:** `css/style.css` (3,274 B, 152 lines — ALL custom CSS,
  SCSS-compiled) + `css/bootstrap.min.css` (178 KB; supplies the grid, btn,
  form-control skeletons) + `css/owl.carousel.min.css` (loaded, UNUSED) +
  `fonts/icomoon/style.css` (icon font; the ONLY glyph used is the checkbox
  check `\e5ca` → lucide `Check`; do NOT ship the font).
- **Scripts:** `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/main.js` (354 B — accordion collapse handlers
  ONLY; INERT on this page; no validation, no effects, no nav).
- **Live DOM structure (verbatim):** `<div class="half">` →
  `div.bg.order-1.order-md-2` (background-image `images/bg_1.jpg`) →
  `div.contents.order-2.order-md-1` → `div.container` → `div.row
align-items-center justify-content-center` → `div.col-md-6` →
  `div.form-block` → `div.text-center.mb-5 > h3 "Register"` → `<form>` with
  four `.form-group`s (labels Name / Email Address / Password / Re-type
  Password; inputs with placeholders "John Doe" / "your-email@gmail.com" /
  "Your Password" / "Re-type Your Password"; `id`s name/username/
  password/re-password; `.form-group.first` on the first two) → checkbox row
  (`label.control.control--checkbox` with `<span class="caption">Agree our
<a href="#">Terms and Conditions</a></span>`, native checkbox
  `checked="checked"`, `.control__indicator`, `d-sm-flex mb-5
align-items-center`) → `<span class="ml-auto">` with
  `<a href="#" class="forgot-pass">Have an account? Login</a>` →
  `<input type="submit" value="Register" class="btn btn-block btn-primary">`.
- **Computed layout (live browser probe, 1280×577 viewport):** body
  `#fff`; `.half` 700px tall (min-height 700, 100vh); `.bg` **200px × full
  width** at top 0 (block child — NOT a flex column, so the order-* classes
  are dead); `.contents` 200px→900px, full width, bg `rgb(246,247,252)` (=
  `#f6f7fc`), height 700; `.form-block` card 540px wide × ~696px tall, bg
  white, `margin-top: -300px` → card top lands at ~52px, straddling the photo
  band. Font: `Roboto, sans-serif`. No box-shadow on the card (flat).
- **Screenshot** (`signup-form-03.jpg`, 1200×972, AVIF on the CDN):
  confirms the vertical arrangement — bright interior photo (kitchen shelf
  with white teapot + round white clock, sheer-curtained window with bright
  light, blurred greenery right side; soft dreamy aesthetic) across the top,
  light grey form area below, white card centered over the boundary, orange
  full-width Register button, four grey inputs with pre-filled values (John
  Doe / your-email@gmail.com), checked orange checkbox.
- **Visual design note:** minimalist, modern, card-based registration page.
  Neutral monochrome palette with ONE warm-orange focal point. Generous
  whitespace around a flat white card; soft light-grey inputs; clean Roboto
  sans-serif; tiny 14px grey caption links. No decorations, no gradients, no
  imagery in the form side.

## Design tokens

| Token             | Value                                 | Notes                                                                               |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `--color-brand`   | `#fb771a`                             | Warm orange: submit button bg + border, checked checkbox indicator; hover `#eb6304` |
|                   |                                       | (btn) / `#fb8633` (checkbox); the ONLY accent on the page                           |
| `--color-area`    | `#f6f7fc`                             | Form-section background (below the photo band), full width                          |
| `--color-card`    | `#fff`                                | White form card, FLAT (no border, no shadow, no radius), padding 40px               |
|                   |                                       | (25px ≤991.98px), `margin-top: -300px` (straddles the photo band)                   |
| `--color-field`   | bg `#efefef`                          | Inputs: bor derless, radius **4px**, height **54px**, width 100%; focus/active      |
|                   |                                       | removes outline + shadow (source); recreation adds a focus-visible ring             |
| `--color-ink`     | inherited Bootstrap (`#212529` label) | Labels above inputs (name/email/password/re-type), `h3` heading (centered, mb-5);   |
|                   |                                       | placeholder Bootstrap default `#6c757d`                                             |
| `--color-caption` | `#888`                                | `a` links (underline, `0.3s all ease` transition) + checkbox `.caption` +           |
|                   |                                       | `.forgot-pass` (14px, relative top 2px); paragraph text `#b3b3b3` weight 300        |
| `--checkbox`      | 20×20, radius 4px                     | Native input visually hidden (opacity 0, z-index −1); indicator idle `#e6e6e6`,     |
|                   |                                       | hover `#ccc`, checked `#fb771a` with WHITE check glyph (icomoon `\e5ca` → lucide    |
|                   |                                       | `Check`), label 14px, padding-left 30px, cursor pointer                             |
| `--btn-submit`    | 54px tall, padding 0 30px, radius 4px | Full width (`btn-block`), bg `#fb771a`, white text, hover `#eb6304` / border        |
|                   |                                       | `#de5e04`; `0.15s ease-in-out` transition                                           |
| `--font-body`     | 'Roboto', sans-serif                  | Google Fonts (source local @font-face weight 300 only — body weight 300); `h3`      |
|                   |                                       | heading uses Roboto too; base size 1rem                                             |
| `--layout`        | 200px photo band + 700px area         | `.half` 100vh min-height 700px; `.bg` ALWAYS 200px tall at every breakpoint,        |
|                   |                                       | full width, `background-size: cover` center; `.contents` bg `#f6f7fc` below; card   |
|                   |                                       | centered via inner row `align-items-center justify-content-center` + `col-md-6`     |
|                   |                                       | (card ~540px at 1280px viewport); card pulled up with `margin-top: -300px`          |
| `--responsive`    | 991.98 / 767.98px                     | ≤991.98px: card padding 25px; <768px: col-md-6 row still centers the card; the      |
|                   |                                       | photo band stays 200px — layout never side-by-side (order classes are dead weight)  |
| `--behavior`      | source has ZERO JS                    | Recreation adds: required-field + email-format + password-match + terms-required    |
|                   |                                       | validation, and an inline success state (repo conventions; see Requirements)        |

## Requirements

### Requirement: Page shell

The system SHALL render the white page with the 200px photo band on top and
the light grey `#f6f7fc` registration area below, with the white form card
straddling the boundary between them.

#### Scenario: Photo band and form area

- **GIVEN** the Enroll app is rendered on any viewport
- **THEN** the page background SHALL be white `#fff` and the font SHALL be
  Roboto (Google Fonts link, 300 weight body text)
- **AND** a full-width photo band SHALL render at the top of the page,
  exactly 200px tall, with a cover-positioned background image (picsum
  placeholder in the recreation)
- **AND** below the band a full-width section SHALL render with background
  `#f6f7fc` and a minimum height of 700px (view-height aware, like the
  source's `100vh` / `min-height: 700px`)
- **AND** the section SHALL center its content both horizontally and
  vertically (flex row with `align-items-center` + `justify-content-center`)

#### Scenario: Straddling card

- **GIVEN** the page shell is rendered
- **THEN** a flat white card SHALL render centered, up to ~540px wide (50% of
  the container), with 40px padding and NO border, radius, or shadow
- **AND** the card SHALL be pulled upward with a 300px negative top margin so
  its top edge overlaps the photo band by roughly 250px
- **AND** at ≤991.98px the card padding SHALL shrink to 25px and the layout
  SHALL stay vertical (photo band on top; never side-by-side)

### Requirement: Heading and form

The system SHALL render the card with a centered "Register" heading and the
four-field registration form.

#### Scenario: Heading

- **GIVEN** the card is rendered
- **THEN** a `Register` heading SHALL render centered at the top of the card
  with spacing below it equivalent to the source's `mb-5` (2rem)
- **AND** the heading SHALL use the Roboto font with an `h3`-level size and
  its default weight

#### Scenario: Input fields

- **GIVEN** the form is rendered
- **THEN** the form SHALL contain exactly four labelled inputs in order:
  Name (placeholder "John Doe"), Email Address (placeholder
  "your-email@gmail.com"), Password (type password, placeholder
  "Your Password"), Re-type Password (type password, placeholder
  "Re-type Your Password")
- **AND** each input SHALL render full-width with background `#efefef`, no
  border, 4px border radius, and 54px height
- **AND** each label SHALL render above its input with margin below it (the
  source's `.form-group` rhythm, ~1rem), and the first two fields SHALL carry
  the source's `.form-group.first` extra margin
- **AND** labels SHALL be linked to their inputs (`<label htmlFor>`) so the
  field is focused when the label is clicked
- **AND** focused inputs SHALL show an accessible focus-visible ring
  (recreation improvement — the source removes the default outline and shows
  nothing; a visible ring is required by the repo a11y conventions)

### Requirement: Terms checkbox and login link

The system SHALL render the custom orange-checked "Agree our Terms and
Conditions" checkbox row with the right-aligned "Have an account? Login" link,
all on one row on desktop widths.

#### Scenario: Custom checkbox

- **GIVEN** the form fields are rendered
- **THEN** a row SHALL render below the fields containing a custom-styled
  checkbox: a 20×20 indicator with 4px radius, background `#e6e6e6` when
  unchecked, turning `#fb771a` with a white lucide `Check` glyph when checked
- **AND** the native checkbox input SHALL be visually hidden but remain
  keyboard-accessible and linked to its label
- **AND** the label SHALL read "Agree our [Terms and Conditions]" with the
  Terms link styled as a grey underlined link
- **AND** the checkbox SHALL be checked by default on first render (the
  source ships `checked="checked"`)
- **AND** hovering the row SHALL lighten the unchecked indicator to `#ccc`

#### Scenario: Login link

- **GIVEN** the checkbox row is rendered
- **THEN** a "Have an account? Login" link SHALL render right-aligned on the
  same row (flex row, link pushed right), styled 14px grey `#888` with
  underline and a 0.3s ease color transition
- **AND** on narrow widths the row SHALL stack without clipping (the checkbox
  row and the link wrap onto separate lines as the source's `d-sm-flex`
  does)

### Requirement: Submit button

The system SHALL render the full-width orange Register button at the bottom
of the card.

#### Scenario: Button appearance

- **GIVEN** the form is rendered
- **THEN** a full-width submit button SHALL render labelled "Register" with
  background `#fb771a`, white text, 54px height, 30px horizontal padding, and
  4px radius
- **AND** hovering the button SHALL darken it to `#eb6304` with border
  `#de5e04` and a 0.15s ease-in-out transition

### Requirement: Validation (recreation improvement)

The system SHALL validate the form client-side and block submission until
valid (the source has ZERO validation — this follows repo form conventions:
zod schema, per-field errors, submit blocked until valid).

#### Scenario: Required fields and formats

- **GIVEN** the user submits the form
- **WHEN** the submit button is activated
- **THEN** submission SHALL be blocked with per-field error messages shown
  when: Name is empty, Email Address is empty or not a valid email format,
  Password is empty or shorter than the repo-minimum length (e.g. 8 chars),
  or Re-type Password does not match Password
- **AND** the Terms checkbox is unchecked
- **AND** errors SHALL be announced accessibly (aria-describedby / role alert)
  and clear as the user corrects each field

#### Scenario: Success state

- **GIVEN** all fields are valid and the Terms checkbox is checked
- **WHEN** the user activates the Register button
- **THEN** the form SHALL NOT reload or navigate away (the source posts to
  `#`; the recreation intercepts submit)
- **AND** an inline success message SHALL replace the form content (e.g. a
  confirmation panel with a lucide success icon and a "You're registered"
  style message) — no alert, no fake network

### Requirement: Accessibility and semantics

The system SHALL provide semantic, keyboard-accessible structure (recreation
improvement over the source's plain Bootstrap markup).

#### Scenario: Semantics

- **GIVEN** the Enroll app is rendered
- **THEN** the page SHALL use semantic elements: `<main>` wrapping the shell,
  `<form>` with a submit button, `<label htmlFor>` for every field, and
  `aria-invalid` + `aria-describedby` wired to error messages
- **AND** the hidden checkbox SHALL remain focusable via keyboard with a
  visible focus indication on the indicator

### Requirement: Footer

The system SHALL render the required Component Dock footer.

#### Scenario: Component Dock credit

- **GIVEN** the Enroll app is rendered at the bottom of the page
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded as
  "Component Dock" (e.g. a "Made with Component Dock" line), replacing any
  external/attribution links from the source (the source has no footer
  content — this is the repo's standard footer)

## Verification checklist

- [ ] `npm run verify:app -- enroll` green: typecheck → lint → vitest (100%
      coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/signup-form-03/:
      white page, 200px full-width cover photo band on top, `#f6f7fc` area
      below (≥700px), flat white card centered and straddling the band
      (~250px overlap via −300px pull), centered "Register" heading, four
      borderless `#efefef` 54px inputs with the exact placeholders ("John
      Doe", "your-email@gmail.com", "Your Password", "Re-type Your
      Password"), custom checkbox checked orange by default, grey "Have an
      account? Login" right-aligned, full-width orange `#fb771a` Register
      button (hover `#eb6304`); Roboto everywhere; no side-by-side arrangement
      at any width.
- [ ] Behavior check: label clicks focus their inputs; focus-visible ring on
      inputs, checkbox indicator, and button; submit with empty/invalid
      fields → per-field error messages, no navigation; email format checked;
      password match enforced; unchecking Terms blocks submit; valid submit
      → inline success panel replaces the form (no alert, no reload).
- [ ] Responsive check at 992px (card padding 25px, checkbox row stacks) and
      mobile widths (photo band stays 200px, card full-width-ish with margin,
      no horizontal overflow) — verify the card still overlaps the band and
      nothing clips.
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this spec,
      TEMPLATES.md, and the PR; no source images/fonts shipped (picsum +
      Google Fonts + lucide only).
