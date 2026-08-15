# Template: Picks (Bootstrap Checkbox UI Component)

## Purpose

Picks is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 02"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-02/, TEMPLATES.md line 732
under **Bootstrap Checkboxes (20)** — single row, no duplicates; mark line 732
`[x]` when done), built under a DIFFERENT name ("Picks" — what you pick / your
favorites, matching the demo's "Choose your favorite sports" picker) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The page is a minimal showcase of a small checkbox form:
one heading + a "Choose your favorite sports" sub-heading + three toggleable
labeled checkboxes (Basketball checked by default) — a tiny, self-contained
demo.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 02" — the second of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md. NOTE: the sibling assumption in the
  Tickbox spec (that Checkbox 02–20 are the same design as Checkbox 01 with
  only the heading number changed) is **WRONG for Checkbox 02** — this demo is
  a completely different page (sports-picker checkboxes, no color variants, no
  disabled state). Each "Checkbox NN" item has its own design; re-run the
  reference-gathering per item, never reuse another item's findings.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-02/` returns **HTTP 404**. These
  "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme, so the
  real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-02/`
  (HTTP 200, ~8 KB HTML). Master stylesheet `css/style.css` (~220 KB, Bootstrap
  4.3.1 base + custom theme, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-02/css/style.css`.
  libs: bootstrap 4.3.1, jquery, popper, font-awesome 4.7 (checkbox icons are
  FontAwesome glyphs `\f1db` circle-o unchecked / `\f058` check-circle checked).
  Google Font **Poppins** (300–900 via Cloudflare-hosted @font-face in the
  head). Cross-checked against the TEMPLATES.md screenshot (`checkbox-02.jpg`,
  1200×972, browser-viewed) — matches: the screenshot shows the red filled
  icon with a white checkmark for Basketball; the live DOM/CSS is authoritative
  (the icon is a CIRCLE, not a square). The demo brands itself "Checkbox #02";
  the recreation uses the NEW name **Picks**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a light `#fafafa` background. Centered column: a black 28px
  heading "Checkbox #02" (`h2.heading-section`, centered), then a narrow
  (col-md-4 ≈ 350px) single-column group: a 20px/500-weight sub-heading
  "Choose your favorite sports" (`h3.h5` inside `div.heading-title.mb-4`), then
  three stacked checkboxes (circle icon + label, 35px left padding,
  ~16px/500-weight label, 12px gap between rows):
  1. **Basketball** — checked (red `#f76262` filled circle with white
     checkmark)
  2. **Baseball** — unchecked (light-grey `rgba(0,0,0,0.3)` circle outline)
  3. **Badminton** — unchecked (same grey circle outline)
     The demo page has NO navbar and NO footer — just this single section.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #02" (28px, `#000`, centered; margin-bottom 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column):
     - `div.heading-title.mb-4` (margin-bottom 1.5rem) → `h3.h5`
       "Choose your favorite sports" (1.25rem = 20px, font-weight 500,
       line-height 1.2, color inherits body gray).
     - three `label.checkbox-wrap` blocks, each: label text (e.g.
       "Basketball") + `<input type="checkbox">` (hidden: absolute, opacity 0,
       0×0; the first one adds `checked`) + `<span class="checkmark">` →
       `:after` FontAwesome glyph (20px; unchecked `\f1db` color
       rgba(0,0,0,0.3); checked `\f058` color `#f76262` with
       `transform: rotate(-360deg)` — a 0.3s spin on check).
       The demo page has NO navbar and NO footer — just this single section.
- **Design tokens extracted from `css/style.css` + DOM:**
  - Checked icon color **#f76262** (coral red) — `.checkbox-wrap
input:checked ~ .checkmark:after` (also the theme's link/button accent:
    `a { color: #f76262 }`).
  - Unchecked icon color **rgba(0, 0, 0, 0.3)** — `.checkmark:after`.
  - Base theme: body font **"Poppins", Arial, sans-serif**, 14px, line-height
    1.8, font-weight normal, color `gray` (#808080), background **#fafafa**
    (the custom `body` override; Bootstrap's own body rule is #fff/系统-stack —
    the Poppins one wins in the cascade). `.ftco-section` padding **7em 0**;
    `.heading-section` 28px color **#000**; `a` color `#f76262`, transition
    `.3s all ease`.
  - Sub-heading (`h3.h5`): 1.25rem (20px), font-weight 500, line-height 1.2,
    margin-bottom 0.5rem (bootstrap `.h1–.h6` rule); wrapper
    `.heading-title.mb-4` adds margin-bottom 1.5rem; color inherits body gray.
  - Checkbox anatomy (`.checkbox-wrap`): display block, position relative,
    padding-left **35px**, margin-bottom **12px**, cursor pointer, font-size
    **16px**, user-select none; native input hidden (absolute, opacity 0,
    0×0); `.checkmark` absolute top 0 left 0; `.checkmark:after` icon
    font-size **20px**, margin-top -4px, transition **0.3s**; checked state
    adds `transform: rotate(-360deg)` (spin).
  - Bootstrap 4.3.1 `:root` vars (reference only): --primary #007bff, --red
    #dc3545, --light #f8f9fa etc. — NOT used by this demo.
- **Recreation decisions:** no copied assets — FontAwesome glyphs → lucide-react
  (`Circle` for unchecked, 20px, stroke color rgba(0,0,0,0.3); checked = filled
  `#f76262` circle with a white check — e.g. a 20px `rounded-full` span
  `bg-[#f76262]` centering a white lucide `Check` (12–14px), or lucide
  `CheckCircle2` filled `#f76262` with white stroke; 0.3s transition + spin via
  Tailwind `transition-transform`); Poppins via Google Fonts `<link>` in
  `index.html` (300–900); no external libs (plain React state per checkbox);
  the hidden native checkbox pattern is kept for accessibility (real
  `<input type="checkbox">` visually hidden inside the label — keyboard
  focusable + screen-reader friendly; Basketball starts `checked`). Demo copy
  is the design itself — keep "Checkbox #02", "Choose your favorite sports",
  Basketball / Baseball / Badminton. The demo has no footer; per repo rules
  every template MUST still include a minimal footer with the mandated
  Component Dock link (https://www.componentdock.com/).

Picks lives in `apps/picks` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #02" on a light background.

#### Scenario: Section and heading

- **GIVEN** the Picks page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #02" in black
  (28px) on a light `#fafafa`/white background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop)

### Requirement: Sports-picker sub-heading

The system SHALL render a "Choose your favorite sports" sub-heading above the
checkbox list.

#### Scenario: Sub-heading present

- **GIVEN** the demo section is displayed
- **WHEN** the user views the content column
- **THEN** the column SHALL show the sub-heading "Choose your favorite sports"
  (20px, weight 500, body-gray color) above the checkboxes

### Requirement: Checkbox list

The system SHALL render exactly three stacked labeled checkboxes — Basketball,
Baseball, Badminton — with Basketball checked by default.

#### Scenario: All three sports present

- **GIVEN** the demo section is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly three checkboxes in this order:
  Basketball, Baseball, Badminton
- **AND** each checkbox SHALL show a circular icon followed by its label text
  (16px, body color)
- **AND** the Basketball checkbox SHALL be checked on first render
- **AND** the Baseball and Badminton checkboxes SHALL be unchecked on first
  render

#### Scenario: Checked vs unchecked visuals

- **GIVEN** a checkbox row is rendered
- **WHEN** the checkbox is checked
- **THEN** the icon SHALL be a filled `#f76262` circle with a white checkmark
- **WHEN** the checkbox is unchecked
- **THEN** the icon SHALL be a light-grey (`rgba(0,0,0,0.3)`) circle outline
- **AND** the icon SHALL transition smoothly (0.3s, with a spin on check)
  between the two states

### Requirement: Checkbox interaction and accessibility

The system SHALL make every checkbox toggleable via click and keyboard, with
the hidden native input kept for accessibility.

#### Scenario: Toggle by click and keyboard

- **GIVEN** a checkbox row (e.g. Baseball)
- **WHEN** the user clicks the label/icon
- **THEN** the checkbox SHALL toggle between checked and unchecked
- **WHEN** the user focuses the checkbox and presses Space
- **THEN** the checkbox SHALL toggle between checked and unchecked

#### Scenario: Accessible control

- **GIVEN** the checkbox list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each checkbox SHALL be exposed as a checkbox control with an
  accessible name equal to its label text (hidden native input inside the
  label, visually replaced by the icon)

### Requirement: Page composition

The system SHALL compose the demo section and a minimal footer in a single
page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Picks app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo section in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Picks — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh picks` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (single ftco-section: centered
      "Checkbox #02" heading + centered col-md-4 column: "Choose your favorite
      sports" sub-heading + three checkboxes)
- [ ] Design tokens in `@theme`: checked icon `#f76262`, unchecked icon
      rgba(0,0,0,0.3), page bg `#fafafa`, heading `#000`, body gray
- [ ] Font: Poppins (300–900) via Google Fonts
- [ ] Checkbox anatomy: 35px left padding, 16px label, 20px icon, 12px row
      gap, 0.3s transition (spin on check)
- [ ] Three sports in order Basketball (checked by default) / Baseball /
      Badminton; unchecked rows show grey circle outlines
- [ ] Checkboxes toggle by click and Space; checked icon is a filled
      `#f76262` circle with white checkmark
- [ ] Accessible: hidden native input + label (accessible name = label text)
- [ ] Icons: lucide-react (no FontAwesome, no copied assets)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 732 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
