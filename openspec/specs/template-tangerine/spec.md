# Template: Tangerine (Signup Form)

## Purpose

Tangerine is a single-page sign-up form in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Signup Form 04"
template design (see TEMPLATES.md line 2818; `grep -c
'wp/template/signup-form-04/'` = 1 — single row, no duplicates), built under
a DIFFERENT name (Tangerine — a single lowercase word evoking the burnt-orange
`#fb771a` brand accent of the design; no collision with `apps/` or existing
spec folders) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/signup-form-04/
(https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-04.jpg).
Category: Signup Form — one of the 20 ColorLib "Signup Form" mini-templates.

Preview URL: https://preview.colorlib.com/theme/signup-form-04/ — **404**
(returned HTTP 404 / 9-byte body). The real demo lives at
https://preview.colorlib.com/theme/bootstrap/signup-form-04/ (HTTP 200,
~11.3 KB HTML, `<title>Sign Up #4</title>`). **The signup-form demos mirror
under the `/theme/bootstrap/` path prefix — note this for all future
`signup-form-*` preps.** Stylesheets: `fonts/icomoon/style.css` (icon font),
`css/owl.carousel.min.css` (loaded, not used by this template), `css/
bootstrap.min.css` (~178 KB, Bootstrap 4), `css/style.css` (~3.3 KB, the
template's own styles — parsed for tokens). Stack is Bootstrap 4 + jQuery +
icomoon icon font — NOT Tailwind. Recreate all behavior client-side in React
(no jQuery, no Bootstrap, no icon font).

## Design reference (replication findings)

- **Original:** ColorLib "Signup Form 04" — a clean, minimalist split-screen
  signup page. The full-height page (`.half`, `height: 100vh; min-height:
900px`) is a flex row: a left photo panel (25% width) showing a lifestyle
  kitchen photo (white subway-tile wall with dark wood floating shelves —
  potted plant, red enamelled pot, ceramic pitcher, kitchen scale, wire
  basket) and a right panel (75% width) painted `#f6f7fc` that vertically and
  horizontally centers a single white form card. The card (`.form-block`,
  max-width 400px, padding 40px, drop shadow `0 15px 30px rgba(0,0,0,0.2)`)
  holds a centered "Sign Up" heading and a stacked form: email + password +
  re-type-password inputs, a custom square checkbox ("Agree our Terms and
  Conditions", checked by default) and a full-width burnt-orange "Register"
  submit button. All interactive accents (checkbox check, button) use the
  same brand orange `#fb771a`. The typography is Roboto, body weight 300,
  light-grey secondary text. Warm, domestic, modern-minimal aesthetic.
- **Preview DOM analyzed:**
  https://preview.colorlib.com/theme/bootstrap/signup-form-04/ (HTTP 200,
  ~11.3 KB HTML, `<title>Sign Up #4</title>`). Structure: `div.d-md-flex.half`
  → `div.bg` (inline `background-image: url('images/bg_1.jpg')`) + `div.
contents` → `.container > .row.align-items-center.justify-content-center >
.col-md-12 > .form-block.mx-auto` → `div.text-center.mb-5` (h3 "Sign Up") →
  `form[method=post][action=#]` with three `.form-group`s (labels "Your
  Email" / "Password" / "Re-type Password"; inputs `#username` type=text
  placeholder "your-email@gmail.com", two type=password placeholders "Your
  Password"), a `div.d-sm-flex.mb-5.align-items-center` row holding the custom
  checkbox (`label.control.control--checkbox`, caption link "Terms and
  Conditions", `input type=checkbox checked`, `.control__indicator`), and an
  `input[type=submit].btn.btn-block.btn-primary` value "Register". No nav, no
  footer, no hero — the form IS the whole page. The only asset is
  `images/bg_1.jpg` (CSS `css/style.css` parsed; `js/main.js` not present in
  this demo — the form posts to `#`, no client-side logic).
- **Screenshot note:** `signup-form-04.jpg` (1200×972, viewed in the
  browser): left slim vertical kitchen photo (subway tiles, dark shelves),
  right light-grey panel (`#f6f7fc`) with a white card, shadow, centered
  dark "Sign Up" heading, three grey pill-ish inputs (light grey fill,
  rounded), a checked orange checkbox with small dark text, and a wide
  burnt-orange "Register" button with white text. Matches the live demo DOM.
  Labels sit above each input in the DOM (visible in the source), so the
  recreation must render visible labels + grey placeholders.

### Design tokens (from css/style.css + css/bootstrap.min.css)

- **Brand orange:** `#fb771a` — submit button background and checked
  checkbox background; button hover `#eb6304` (border `#de5e04`), active
  `#de5e04`; checkbox checked-hover `#fb8633`. Recreate in `@theme` as
  `--color-brand` / `--color-brand-hover`.
- **Page background:** body `#fff`; right contents panel `#f6f7fc`; left
  panel = cover image (`images/bg_1.jpg`, `background-size: cover;
background-position: center`) — use a picsum seed placeholder.
- **Form card:** `#fff`, `max-width: 400px`, `padding: 40px` (25px on
  ≤768px), centered with auto margins; `box-shadow: 0 15px 30px 0
rgba(0,0,0,0.2)`; no explicit border-radius in style.css (screenshot shows
  very slight corner rounding — use ~4px to match the Bootstrap feel, or 0
  to be literal; implementers should eyeball the screenshot).
- **Inputs:** `.form-control` height 54px, `border: none`, `border-radius:
4px`, `background: #efefef`, full width; focus/active: `outline: none`,
  no box-shadow (the grey fill is the only affordance); placeholders light
  grey (Bootstrap default ≈ `#6c757d`/grey; `p` color in style.css is
  `#b3b3b3` — pair with `#b3b3b3` for the muted text tone).
- **Custom checkbox:** `.control__indicator` 20×20, `border-radius: 4px`,
  `background: #e6e6e6`; hover/focus `#ccc`; checked `#fb771a` with a white
  check glyph (icomoon `\e5ca` — recreate with a lucide Check icon); label
  caption 14px, color `#888`, link underline; checkbox checked by default.
- **Buttons:** `.btn` height 54px, `padding-left/right: 30px`,
  `border-radius: 0.25rem` (Bootstrap default) — `.btn-block` makes it full
  width; primary = brand orange bg + white text; hover `#eb6304`;
  active `#de5e04`.
- **Typography:** Roboto (Google Font, load via `<link>` in index.html —
  source ships @font-face 300/400/500/700): body weight 300, paragraph /
  muted text `#b3b3b3`; h3 "Sign Up" dark, bold, centered (Bootstrap h3
  ≈ 1.75rem); small text (checkbox caption, links) 14px `#888`; links
  underlined with `.3s all ease` transition, hover no underline.
- **Radii:** 4px inputs/checkbox, 0.25rem buttons, ~none card (see above).
- **Layout:** full-height split 25/75 (`.half { height: 100vh; min-height:
900px }`; `.bg` 25% / `.contents` 75%). Form content vertically centered
  in the right panel. Card content: heading (centered, mb-5) → 3 stacked
  `.form-group`s → checkbox row (mb-5) → full-width submit.
- **Responsive (≤767.98px):** `.bg` becomes `width: 100%; height: 200px`
  (the photo becomes a top banner above the form); `.contents` takes the
  full width; `.form-block` padding drops to 25px.

## Requirements

### Requirement: Page shell

The system SHALL render a full-height split-screen page with a photo panel
on the left and a light-grey form panel on the right, per the source layout.

#### Scenario: Split-screen page renders

- **GIVEN** the user opens the template
- **THEN** the page SHALL fill the viewport height (short screens receive a
  min-height fallback, e.g. `min-h-screen` + `py` so content never clips)
- **AND** a left panel SHALL occupy ~25% of the width and show a full-bleed
  cover image (placeholder image, not the source asset)
- **AND** a right panel SHALL occupy the remaining ~75% and have the
  background `#f6f7fc`
- **AND** the right panel SHALL vertically and horizontally center a single
  white form card

### Requirement: Form card and heading

The system SHALL render the sign-up card with its heading and stacked form.

#### Scenario: Sign-up card renders

- **GIVEN** the split-screen page is shown
- **THEN** a white card SHALL be centered in the right panel with
  `max-width: 400px`, ~40px padding and shadow
  `0 15px 30px rgba(0,0,0,0.2)`
- **AND** the card SHALL show a centered dark "Sign Up" heading
- **AND** the card SHALL contain the email, password, re-type-password
  fields, the terms checkbox and the Register button, in that order

### Requirement: Credential inputs

The system SHALL render three stacked credential inputs with visible labels
and grey placeholder text, styled as 54px rounded light-grey fields.

#### Scenario: Email and password fields render

- **GIVEN** the sign-up card is shown
- **THEN** the first field SHALL be labelled "Your Email" and SHALL have
  placeholder "your-email@gmail.com"
- **AND** the second field SHALL be labelled "Password" with placeholder
  "Your Password" and SHALL mask its input
- **AND** the third field SHALL be labelled "Re-type Password" with
  placeholder "Your Password" and SHALL mask its input
- **AND** every input SHALL be full width, ~54px tall, with a 4px radius,
  no border and a light grey `#efefef` fill
- **AND** focusing/typing SHALL NOT add a browser outline or shadow
  (the grey fill is the sole affordance)

### Requirement: Terms checkbox

The system SHALL render a custom square checkbox, checked by default,
agreeing to terms, with an orange checked state.

#### Scenario: Terms checkbox renders checked

- **GIVEN** the sign-up card is shown
- **THEN** a 20×20 custom square checkbox SHALL render next to the caption
  "Agree our" with a linked "Terms and Conditions" text
- **AND** the checkbox SHALL be checked by default, with the brand orange
  `#fb771a` fill and a white check mark
- **AND** unchecked the fill SHALL be light grey `#e6e6e6` (hovering/focus
  `#ccc`, checked hover `#fb8633`)
- **AND** the checkbox and caption SHALL be toggled by clicking either the
  box or the caption

### Requirement: Register button

The system SHALL render a full-width burnt-orange Register submit button.

#### Scenario: Register button renders and submits

- **GIVEN** the sign-up card is shown
- **THEN** a full-width button SHALL read "Register", be ~54px tall, use
  the brand orange `#fb771a` background with white text and a 4px radius
- **AND** hovering SHALL darken the background to `#eb6304`
- **AND** pressing it SHALL submit the form (the source posts to `#` with no
  handler — the recreation SHALL show an in-page success/confirmation state
  so the action is testable and visible)
- **AND** the checkbox state and field values SHALL be included in the
  submission state

### Requirement: Responsive layout

The system SHALL adapt the split layout to narrow viewports.

#### Scenario: Page adapts to small screens

- **GIVEN** the viewport is 768px or narrower
- **THEN** the photo panel SHALL become a full-width banner ~200px tall
  above the form
- **AND** the form panel SHALL take the full width
- **AND** the card padding SHALL reduce to ~25px and the card SHALL not
  overflow the viewport

### Requirement: Accessibility

The system SHALL be keyboard and screen-reader accessible.

#### Scenario: Form is accessible

- **GIVEN** the sign-up form is rendered
- **THEN** every input SHALL have an accessible name matching its visible
  label (label `htmlFor` + input `id`)
- **AND** the terms checkbox SHALL be a real `<input type="checkbox">`
  (visually custom, functionally native) with an accessible name
- **AND** the Register control SHALL be a native `<button>` or submit input
  with the visible text as its accessible name
- **AND** all controls SHALL have visible focus rings and be operable by
  keyboard
- **AND** the visible labels SHALL remain visible next to the inputs (the
  source renders them above the fields)

## Verification checklist

- [ ] Full-height split page: ~25% cover-image panel left, `#f6f7fc` panel
      right, form card vertically + horizontally centered.
- [ ] Left image is a placeholder (picsum seed), not the source `bg_1.jpg`.
- [ ] White card: max-width 400px, ~40px padding, shadow
      `0 15px 30px rgba(0,0,0,0.2)`, subtle corner rounding.
- [ ] Centered dark "Sign Up" heading (Roboto, bold).
- [ ] Three stacked inputs — labels "Your Email" / "Password" /
      "Re-type Password" + placeholders "your-email@gmail.com" /
      "Your Password" / "Your Password"; 54px tall, `#efefef` fill, no
      border, 4px radius, no focus outline; password fields masked.
- [ ] Custom checkbox 20×20: `#e6e6e6` unchecked, brand orange `#fb771a` + white check when checked, checked by default, caption "Agree our
      Terms and Conditions" with linked terms text.
- [ ] Full-width "Register" button: `#fb771a` bg, white text, 54px, 4px
      radius, hover `#eb6304`; submit shows an in-page success state.
- [ ] Roboto loaded via Google Fonts link; brand tokens (`#fb771a`,
      `#f6f7fc`, `#efefef`, greys) in `@theme`.
- [ ] ≤768px: photo becomes a 200px top banner, form panel full width,
      card padding 25px.
- [ ] Native checkbox input, label/input pairing, visible labels, focus
      rings, keyboard-operable.
- [ ] No icon font — any icons via lucide-react (check glyph).
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock").
- [ ] No ColorLib references in app code; provenance only in this spec,
      TEMPLATES.md and the PR.
- [ ] Placeholder-free; no asset copies from the source.
