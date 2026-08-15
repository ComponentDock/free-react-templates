# Template: Tickbox (Bootstrap Checkbox UI Component)

## Purpose

Tickbox is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 01"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-01/), built under a
DIFFERENT name (Tickbox — a checkbox) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a
minimal showcase of styled checkbox variants (one heading + six toggleable
labeled checkboxes) — a tiny, self-contained demo.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 01" — the first of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 731 — mark that line `[x]`
  when done). Sibling items Checkbox 02–20 are the same design with a
  different heading number ("Checkbox #02" … "#20"); the Tickbox app can be
  reused for those (change the heading + new name per item).
- **Preview URL caveat:** the naive pattern `https://preview.colorlib.com/theme/checkbox-01/`
  returns **HTTP 404**. These "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme, so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-01/`
  (HTTP 200, 8.5 KB HTML). Master stylesheet `css/style.css` (~221 KB, fully
  extracted for tokens) is relative to that sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-01/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (checkbox icons are
  FontAwesome glyphs `\f0c8` square-o / `\f14a` check-square). Google Font
  **Poppins** (300–900 via Cloudflare-hosted @font-face in the head).
  Cross-checked against the TEMPLATES.md screenshot (`checkbox-01.jpg`,
  1200×972, browser-viewed) — all match. The demo brands itself "Checkbox
  #01"; the recreation uses the NEW name **Tickbox**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a white/`#fafafa` background. Centered column: a black
  28px heading "Checkbox #01" (`h2.heading-section`), then a narrow
  (col-md-4 ≈ 350px) single-column list of six stacked checkboxes, each a
  colored square icon with a white checkmark plus a same-colored label to the
  right (35px left padding, ~16px/500-weight label, 12px gap between rows):
  1. **Primary** — blue `#0075f6`, checked
  2. **Success** — green `#28a745`, checked
  3. **Danger** — red `#dc3545`, checked
  4. **Warning** — yellow `#ffc107`, checked
  5. **Info** — cyan `#17a2b8`, checked
  6. **Primary** — plain/grey (unchecked icon `rgba(0,0,0,0.1)` → checked
     `rgba(0,0,0,0.2)`), checked + `disabled` (greyed out, not toggleable)
     All six render checked in the demo; the icon is a FontAwesome square that
     swaps to a filled check-square when checked (0.3s transition). Recreate
     with lucide-react `Square` / `SquareCheck` icons colored per variant.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #01" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column) → six `label.checkbox-wrap` blocks, each:
     - label text (e.g. "Primary") — color inherited from variant class
       (`checkbox-primary` → `#0075f6`, etc.; plain wrap → default text color)
     - `<input type="checkbox" checked>` (hidden: absolute, opacity 0,
       width/height 0) — the sixth one adds `disabled`
     - `<span class="checkmark">` → `:after` FontAwesome glyph (20px square;
       unchecked `\f0c8` color rgba(0,0,0,0.1); checked `\f14a` color
       rgba(0,0,0,0.2) default, overridden per variant class to the variant
       color), transition 0.3s.
       The demo page has NO navbar and NO footer — just this single section.
- **Design tokens extracted from `css/style.css` + DOM:**
  - Variant colors (label text + checked icon):
    - Primary **#0075f6** (blue) — `.checkbox-primary`
    - Success **#28a745** (green) — `.checkbox-success`
    - Danger **#dc3545** (red) — `.checkbox-danger`
    - Warning **#ffc107** (yellow) — `.checkbox-warning`
    - Info **#17a2b8** (cyan) — `.checkbox-info`
    - Plain/disabled: unchecked icon rgba(0,0,0,0.1), checked icon
      rgba(0,0,0,0.2) — greyed out.
  - Base theme: body font **"Poppins", Arial, sans-serif**, 14px, line-height
    1.8, color `gray` (#808080), background **#fafafa**; `.ftco-section`
    padding 7em 0; `.heading-section` 28px color **#000**.
  - Checkbox anatomy (`.checkbox-wrap`): display block, position relative,
    padding-left **35px**, margin-bottom **12px**, cursor pointer, font-size
    **16px**, font-weight **500**, user-select none; native input hidden
    (absolute, opacity 0, 0×0); `.checkmark:after` icon font-size **20px**,
    margin-top -4px, transition **0.3s**.
  - Bootstrap 4 palette (from `:root` vars, only for reference):
    --primary #007bff, --success #28a745, --danger #dc3545, --warning
    #ffc107, --info #17a2b8, --gray #6c757d.
- **Recreation decisions:** no copied assets — FontAwesome glyphs → lucide-react
  (`Square` for unchecked, `SquareCheck` for checked, stroke-width ~2, 20px,
  colored per variant); Poppins via Google Fonts `<link>` in `index.html`
  (300/400/500/600/700/800/900); no external libs (plain React state per
  checkbox; `disabled` variant not toggleable); the hidden native checkbox
  pattern is kept for accessibility (real `<input type="checkbox">` visually
  hidden inside the label — keyboard focusable + screen-reader friendly);
  demo copy is just the variant labels — keep them (Primary/Success/Danger/
  Warning/Info) as they are the design itself. The demo has no footer; per
  repo rules every template MUST still include a minimal footer with the
  mandated Component Dock link (https://www.componentdock.com/).

Tickbox lives in `apps/tickbox` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #01" on a light background.

#### Scenario: Section and heading

- **GIVEN** the Tickbox page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #01" in black
  (28px) on a light `#fafafa`/white background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop)

### Requirement: Checkbox variant list

The system SHALL render six stacked labeled checkboxes — Primary, Success,
Danger, Warning, Info, and a disabled Primary — each with a square icon and a
same-colored label.

#### Scenario: All variants present

- **GIVEN** the demo section is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly six checkboxes in this order: Primary,
  Success, Danger, Warning, Info, Primary (disabled)
- **AND** each checkbox SHALL show a square icon followed by its label text
- **AND** each checkbox label SHALL be colored to match its variant (Primary
  `#0075f6`, Success `#28a745`, Danger `#dc3545`, Warning `#ffc107`, Info
  `#17a2b8`; the sixth, plain, SHALL be greyed out)

#### Scenario: Checked state visuals

- **GIVEN** a variant checkbox is rendered
- **WHEN** the checkbox is checked
- **THEN** the icon SHALL be a filled square with a white checkmark in the
  variant's color
- **AND** the icon SHALL transition smoothly (0.3s) between unchecked and
  checked visuals

#### Scenario: Disabled checkbox

- **GIVEN** the sixth (plain) checkbox
- **WHEN** the user attempts to toggle it
- **THEN** it SHALL remain checked and SHALL NOT toggle (disabled state)

### Requirement: Checkbox interaction and accessibility

The system SHALL make every non-disabled checkbox toggleable via click and
keyboard, with the hidden native input kept for accessibility.

#### Scenario: Toggle by click and keyboard

- **GIVEN** a non-disabled variant checkbox
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

- **GIVEN** the Tickbox app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo section in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Tickbox — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh tickbox` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (single ftco-section: centered
      "Checkbox #01" heading + centered col-md-4 column of six checkboxes)
- [ ] Design tokens in `@theme`: variant colors `#0075f6`, `#28a745`,
      `#dc3545`, `#ffc107`, `#17a2b8`; unchecked icon rgba(0,0,0,0.1);
      disabled/plain checked rgba(0,0,0,0.2); page bg `#fafafa`; heading `#000`
- [ ] Font: Poppins (300–900) via Google Fonts
- [ ] Checkbox anatomy: 35px left padding, 16px/500 label, 20px icon,
      12px row gap, 0.3s transition
- [ ] Six variants in order Primary/Success/Danger/Warning/Info/Plain-disabled;
      colored labels match icon colors
- [ ] Disabled checkbox cannot toggle; others toggle by click and Space
- [ ] Accessible: hidden native input + label (accessible name = label text)
- [ ] Icons: lucide-react Square/SquareCheck (no FontAwesome, no copied assets)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 731 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
