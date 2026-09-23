# Template: Passwell (Login Form)

## Purpose

Passwell is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form 03" free
template (source: https://colorlib.com/wp/template/login-form-03/), built
under a DIFFERENT name (**Passwell**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 split-layout login page: a FULL-VIEWPORT
height layout (`.half`, `height: 100vh; min-height: 700px`) split into a
LEFT background-image panel (kitchen/lifestyle photo, 200px height on
desktop via `.half .bg { height: 200px }`) and a RIGHT light-gray content
area (`#f6f7fc`). A white FORM BLOCK card (`.form-block`, `#fff`,
padding 40px, `margin-top: -300px` — overlapping upward into the image
area) is centered vertically in the right panel via a Bootstrap row
(`align-items-center justify-content-center`). The card contains:

1. **Title:** `h3` "Login to **Colorlib**" (centered, bold brand name)
2. **Username field:** `<label>` "Username" + `<input type="text">`
   (placeholder "your-email@gmail.com"), bg `#efefef`, no border,
   radius 4px, height 54px
3. **Password field:** `<label>` "Password" + `<input type="password">`
   (placeholder "Your Password"), same styling
4. **Row:** custom checkbox "Remember me" (checked by default, orange
   `#fb771a` indicator) on the left + "Forgot Password" link (`#888`,
   underlined) on the right
5. **Submit button:** full-width "Log In" button (`btn-block btn-primary`),
   bg `#fb771a` (orange), white text, height 54px, hover `#fb8633`

The page has NO navbar, NO footer in the source, NO additional sections.
It is a pure single-purpose login page. Font is **Roboto** (Google Fonts,
weights 300/400).

**WHAT MAKES PASSWELL DISTINCT (signature behaviors):**

1. **Split viewport with overlapping card.** The left panel is a
   background image (kitchen scene); the right panel is `#f6f7fc`. The
   white form card uses negative margin (`margin-top: -300px`) to
   visually overlap the image — this is the signature layout of this
   template family. On mobile (≤991.98px), the layout stacks vertically
   with the image on top (200px height) and the form below.
2. **Minimal form with no social logins.** Unlike many login templates,
   this one has NO social buttons (no Google/Facebook/Twitter), NO
   registration link, NO "or" divider. Just username, password,
   remember-me checkbox, forgot-password link, and submit.
3. **Custom checkbox styling.** The "Remember me" checkbox is a custom
   `.control--checkbox` with a hidden native input, a `#e6e6e6`
   unchecked indicator (20×20px, radius 4px), and a `#fb771a` checked
   state with an icomoon checkmark glyph. The recreation should use a
   styled native checkbox or a headless checkbox component.
4. **Orange brand accent.** The button (`#fb771a`) and checked checkbox
   share the same warm orange. No gradient, no hover animation beyond
   a subtle color shift to `#fb8633`.

## Naming

The ColorLib source name "Login Form 03" is FORBIDDEN as the app name.
**Passwell** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `passwell` in any of those).
Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Login Form 03" (page title: "Login #3"). Listed
  in TEMPLATES.md under **Login Forms (18)** (section at ~line 2143; the
  first unchecked item at line 2149 — `wp/template/login-form-03/`).
  Sibling completed items: Login Form 01 → portico, Login Form 02 →
  threshold, Creative Login Form → keycard. Passwell is the 3rd login
  form in the series.
- **Live preview — REACHABLE (verified by direct fetch):**
  The naive `https://preview.colorlib.com/theme/login-form-03/` returns
  404. The REAL preview is the bootstrap path:
  **`https://preview.colorlib.com/theme/bootstrap/login-form-03/`**
  (HTTP 200, 11,333 bytes HTML). Stylesheets:
  `css/style.css` (3,274 bytes, 152 lines — ALL custom styling),
  `css/bootstrap.min.css` (Bootstrap 4), `fonts/icomoon/style.css`
  (icomoon icon font — checkbox checkmark glyph; REPLACE with lucide).
  Font: **Roboto** via Cloudflare @font-face (weights 300, 400) —
  use Google Fonts `<link>` in the recreation.
- **Live DOM structure (from fetched HTML + CSS):**
  - `body` (font-family: Roboto, bg: #fff, 14px, #b3b3b3) → `div.half`
    (height: 100vh, min-height: 700px) → two children:
    - `div.bg.order-1.order-md-2` (background-image: url('images/bg_1.jpg'),
      height: 200px, bg-size: cover, bg-position: center) — the
      left/image panel. On mobile it becomes order-1 (top).
    - `div.contents.order-2.order-md-1` (bg: #f6f7fc) — the right/content
      panel → `div.container` → `div.row.align-items-center.justify-content-center`
      → `div.col-md-6` → `div.form-block` (bg: #fff, padding: 40px,
      margin-top: -300px):
      - `div.text-center.mb-5` → `h3` "Login to **Colorlib**"
      - `form` →
        - `div.form-group.first` → `label[for=username]` "Username" +
          `input.form-control#username[type=text]`
          (placeholder: "your-email@gmail.com")
        - `div.form-group.last.mb-3` → `label[for=password]` "Password" +
          `input.form-control#password[type=password]`
          (placeholder: "Your Password")
        - `div.d-sm-flex.mb-5.align-items-center` →
          - `label.control.control--checkbox.mb-3.mb-sm-0` (custom checkbox
            with hidden input, checked by default) → `span.caption`
            "Remember me" + `div.control__indicator` (20×20px, radius 4px,
            bg: #e6e6e6 unchecked → #fb771a checked)
          - `span.ml-auto` → `a.forgot-pass[href=#]` "Forgot Password"
            (color: #888, text-decoration: underline, font-size: 14px)
        - `input.submit.btn.btn-block.btn-primary[value="Log In"]`
          (height: 54px, padding: 0 30px)
  - **Field inventory (verbatim from the fetched HTML):**
    1. `username` — text input, label "Username", placeholder
       "your-email@gmail.com"
    2. `password` — password input, label "Password", placeholder
       "Your Password"
    3. `remember` — custom checkbox (checked), label "Remember me"
    4. `forgot-pass` — link "Forgot Password" (href="#", no action)
    5. Submit — button "Log In" (full-width, orange)
  - No selects, no file inputs, no hidden fields beyond the checkbox
    input, no images in the form area.
  - **Per monorepo convention:** add a minimal attribution footer linking
    https://www.componentdock.com/ ("Component Dock") — the source has
    no footer content.

- **Screenshot (login-form-03.jpg, 1200×972 AVIF; viewed via vision):**
  Top ~30% of viewport: a lifestyle/kitchen photograph (white tiles,
  wooden shelf, pot, vintage scale) spanning full width with slight
  frosted/blurred edges. Below: large light-gray (#f6f7fc) area with a
  centered white card. The card shows "Login to Colorlib" (dark text,
  centered), "Username" label above a light-gray input box, "Password"
  label above a matching input, a row with an orange-checked "Remember
  me" checkbox on the left and a "Forgot Password" link on the right,
  and a full-width orange "Log In" button at the bottom. The card has
  a subtle shadow. The image panel appears to bleed above the card via
  negative margin overlap. Overall aesthetic: clean, minimal, modern,
  warm orange accent on neutral gray/white.

## Design tokens

| Token                | Value                       | Notes                                                                   |
| -------------------- | --------------------------- | ----------------------------------------------------------------------- |
| `--color-page`       | `#f6f7fc`                   | Light grayish content panel background (`.half .contents`)              |
| `--color-brand`      | `#fb771a`                   | Orange — submit button bg, checked checkbox indicator                   |
| `--color-brand-hover`| `#fb8633`                   | Lighter orange — button hover, checked checkbox hover                   |
| `--color-card`       | `#fff`                      | White — `.form-block` background                                       |
| `--color-input-bg`   | `#efefef`                   | Light gray — input field background (borderless, radius 4px)           |
| `--color-text`       | `#b3b3b3`                   | Paragraph / muted text color                                            |
| `--color-label`      | inherited (dark/default)     | Form labels — standard dark text                                       |
| `--color-link`       | `#888`                      | Links and checkbox caption text                                        |
| `--color-checkbox-unchecked` | `#e6e6e6`            | Custom checkbox indicator when unchecked (20×20px, radius 4px)         |
| `--font-body`        | 'Roboto', sans-serif         | Google Fonts 300/400; base 14px                                        |
| `--input-h`          | `54px`                      | Input and button height                                                |
| `--input-radius`     | `4px`                       | Input border-radius                                                    |
| `--card-padding`     | `40px` (25px mobile ≤992px) | `.form-block` padding                                                  |
| `--card-margin-top`  | `-300px`                    | Negative margin overlapping the image panel                            |
| `--image-h`          | `200px`                     | `.half .bg` height (both desktop and mobile per the CSS media query)   |
| `--viewport`         | `100vh`, min 700px           | `.half` height                                                         |

## Requirements

### Requirement: Split-viewport layout

The system SHALL render a full-viewport split layout with a background
image panel on the left and a light-gray content panel on the right,
with a white form card overlapping the image via negative margin.

#### Scenario: Desktop split layout

- **GIVEN** the Passwell app is rendered on a desktop viewport (>992px)
- **THEN** the page SHALL display at full viewport height (100vh, min 700px)
- **AND** the left panel SHALL show a background image (use
  `https://picsum.photos/seed/passwell-kitchen/1200/400` as placeholder)
  at 200px height, cover-sized and centered
- **AND** the right panel SHALL have background `#f6f7fc` and contain
  the centered white form card
- **AND** the form card SHALL overlap the image area via
  `margin-top: -300px`

#### Scenario: Mobile stacked layout

- **GIVEN** the viewport is at or below 992px
- **THEN** the layout SHALL stack vertically: image on top (200px),
  content panel below
- **AND** the form card SHALL remain centered with 25px padding
- **AND** there SHALL be no horizontal overflow

### Requirement: Form card structure

The form card SHALL contain the title, username field, password field,
remember-me checkbox row, and submit button in that exact order.

#### Scenario: Card rendering

- **GIVEN** the Passwell app is rendered
- **THEN** a white card (`#fff`) SHALL render centered in the content
  panel with 40px padding
- **AND** the card SHALL display an `h3` title "Login to **Passwell**"
  (centered, bold brand name — "Colorlib" replaced per naming rules)
- **AND** a "Username" label SHALL precede a text input with placeholder
  "your-email@gmail.com"
- **AND** a "Password" label SHALL precede a password input with
  placeholder "Your Password"
- **AND** below the password field, a row SHALL contain a "Remember me"
  checkbox (checked by default) on the left and a "Forgot Password"
  link on the right

#### Scenario: Input styling

- **GIVEN** any form input is rendered
- **THEN** it SHALL have background `#efefef`, no visible border,
  border-radius 4px, height 54px, and full width within the card
- **AND** focusing the input SHALL remove the default outline/box-shadow
  (matching the source's `outline: none; box-shadow: none` on focus)

#### Scenario: Submit button

- **GIVEN** the form is rendered
- **THEN** a full-width "Log In" button SHALL display with background
  `#fb771a` (orange), white text, height 54px
- **WHEN** the user hovers the button
- **THEN** the background SHALL shift to `#fb8633` (lighter orange)

### Requirement: Custom checkbox

The "Remember me" checkbox SHALL use custom styling matching the source's
`.control--checkbox` pattern.

#### Scenario: Checkbox states

- **GIVEN** the checkbox is unchecked
- **THEN** the indicator SHALL be a 20×20px square with radius 4px and
  background `#e6e6e6`
- **WHEN** the checkbox is checked
- **THEN** the indicator SHALL turn `#fb771a` (orange) and show a
  white checkmark
- **AND** the checkbox SHALL be checked by default on page load

#### Scenario: Forgot Password link

- **GIVEN** the form card is rendered
- **THEN** a "Forgot Password" link SHALL render on the right side of
  the checkbox row with color `#888`, underlined, font-size 14px
- **AND** clicking it SHALL NOT navigate (the source href is "#")

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Passwell app is rendered
- **THEN** every input SHALL have a programmatic label (`<label
  htmlFor>`)
- **AND** the form SHALL use semantic `<form>`, `<input>`, `<label>`
  elements
- **AND** the checkbox SHALL expose `aria-checked` or use a native
  checkbox with proper labeling
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (inputs, button, link)
- **AND** the submit button SHALL have accessible text ("Log In")

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Passwell app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- passwell` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bootstrap/login-form-03/:
      split viewport, kitchen photo left, #f6f7fc right, white card
      overlapping image, "Login to Passwell" title, Username/Password
      fields, orange checkbox + Forgot Password row, orange Log In button.
- [ ] Behavior check: checkbox toggles checked/unchecked with correct
      colors; button hover shifts to #fb8633; form submits with
      preventDefault; inputs show focus states.
- [ ] Responsive check at 992px (stacked layout, 25px card padding, no
      overflow).
