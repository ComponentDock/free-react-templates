# Template: Octet (Bootstrap Checkbox Material Switch Demo)

## Purpose

Octet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 18"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-18/), built under a
DIFFERENT name (**Octet** — "octet" = a group of eight, matching the demo's
branding "Checkbox #8" and continuing the codrops sub-series naming pattern
Duo (#2) → Trio (#3) → Quartet (#4) → Quintet (#5) → Sextet (#6) → Septet
(#7) → Octet (#8); per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #8" and four
stacked **codrops "material-switch"** custom toggle switches that demonstrate
every switch state: one checked, one unchecked, one disabled, and one
disabled-and-checked. The widget is the classic codrops **material-switch**
toggle pattern (`label.custom-control.material-switch` + `display: none`
`input[type=checkbox]` + `span.material-switch-control-indicator` + "Off"/"On"
description spans): a 32×16px `#efefef` pill track (16px radius) with a 20×20px
circular knob (`#fdfdfd` white, grey glow) that slides from `left: -1px` to
`left: 17px` when checked, turning the **green `#52de97`** knob color with a
matching green glow (`rgba(82, 222, 151, .5)`). Disabled rows fade the whole
track+knob to `opacity: .4`. This is NOT the codrops `.control` widget of
siblings Checkbox #2/#3/#6 (Duo/Trio/Sextet, Bootstrap blue `#007bff`), NOT the
Bootstrap `custom-control` widget of #1 (Quadly), NOT the Material
_checkbox_ widget of #5 (Quintet, hot pink `#e13a9d` — a square tick checkbox,
NOT a toggle), and NOT the overflow _checkbox_ widget of #7 (Septet, teal
`#00909e`) — it is the **material-switch** toggle variant with its own green
accent, its own knob-and-track anatomy, and its own "Off … On" two-sided label
layout.

> NAMING NOTE: the ColorLib source name "Checkbox 18" is FORBIDDEN as the app
> name. **Octet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 18" — the eighteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 748 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 11–17
  were prepped as Quadly / Duo / Trio / Quartet / Quintet / Sextet / Septet.
  **NUMBERING QUIRK (verified 2026-08-15, from the Quartet research):** the
  preview server hosts TWO distinct sub-series. Entries 01–10 map to
  `/theme/bootstrap/checkbox-01/`…`/checkbox-10/` and serve custom designs
  branded "Checkbox #01"…"#10". Entries 11–20 map to
  `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and serve a SEPARATE
  sub-series of codrops-sourced demos branded "BS4 Custom Checkbox #1"…"#9":
  checkbox-11 → "#1" (Quadly, Bootstrap `custom-control` widget),
  checkbox-12 → "#2" (Duo, codrops `.control` widget, blue `#007bff`),
  checkbox-13 → "#3" (Trio), checkbox-14 → "#4" (Quartet, codrops `.control`
  widget, purple `#7e0cf5`), checkbox-15 → "#5" (Quintet, MATERIAL _checkbox_
  widget, hot pink `#e13a9d`), checkbox-16 → "#6" (Sextet, codrops `.control`
  widget, blue `#007bff`), checkbox-17 → "#7" (Septet, codrops OVERFLOW
  _checkbox_ widget, teal `#00909e`), **checkbox-18 → "#8" (THIS template,
  codrops MATERIAL-SWITCH _toggle_ widget, green `#52de97`)**, checkbox-19 →
  "#9", checkbox-20 → duplicate "#9". So entry "Checkbox 18" = the demo
  branded "Checkbox #8" — its OWN widget (toggle switch, not a checkbox) AND
  its own accent color (green), DIFFERENT from every sibling; do NOT reuse a
  sibling app's component. NOTE: Quintet (#5) is also "Material" but it is a
  Material-style _checkbox_ with an L-shaped tick — Octet is a Material-style
  _toggle switch_ with a sliding knob; different anatomy, different color.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-18/` returns **HTTP 404**
  (verified 2026-08-15). These "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme, so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-18/`
  (HTTP 200, 18.1 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-18/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-18/css/style.css`
  (2,157 bytes / 60 lines — body/font/heading overrides + the complete
  `.material-switch` widget CSS; fully extracted for tokens). The page ALSO
  links `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, but the body uses zero `owl-`/icomoon classes —
  the shell loads them for the surrounding ColorLib theme; only `style.css`
  styles the demo content. libs: bootstrap 4, jquery, popper. **Google Font
  Roboto** (body font stack — NOT Poppins). Document title: "Checkbox #8".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-18.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #8" + four caption rows ("Switch 1", "Switch 2", "Switch
  disabled", "Switch disabled & checked") each with an "Off [pill toggle] On"
  row; the checked rows show a GREEN knob on the right (On side), the
  unchecked row a white knob on the left (Off side); the disabled rows look
  faded. The browser chrome shows a `ui-preview.codepen.io` component-preview
  origin, confirming this sub-series is codrops-sourced. The demo brands
  itself "Checkbox #8"; the recreation uses the NEW name **Octet**.
- **Visual design (from DOM + CSS tokens + screenshot + live computed
  styles):** clean, minimalist demo page on a pure **white** background.
  Centered narrow column (`col-lg-3`, ≈255–280px) with generous vertical
  padding (112px, `7rem 0`): an `h2.my-5.text-left` heading "Checkbox #8"
  (20px, dark `#212529`, weight 500, left-aligned within the centered column,
  3rem=48px top+bottom margins) followed by FOUR stacked `div.mb-4` rows
  (24px gap), each composed of a small muted caption
  (`span.text-muted.small` — Bootstrap grey `#6c757d` at 80% size, ≈12.8px)
  above a `label.custom-control.material-switch` toggle row:
  1. **Switch 1** — checked → green `#52de97` knob on the right (17px) with
     green glow, white `#fdfdfd` knob on the left (-1px) when unchecked
  2. **Switch 2** — unchecked → white knob on the left, grey glow
  3. **Switch disabled** — unchecked + `disabled` → whole track+knob at
     `opacity: .4`, not interactive
  4. **Switch disabled & checked** — checked + `disabled` → green knob at
     `opacity: .4`, not interactive
     Each toggle row reads, left to right: `Off` text — pill track with knob —
     `On` text (the knob slides toward "On" when checked). The demo page has NO
     navbar and NO footer — just the single `.content` block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #8" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. 4 × `div.mb-4` (margin-bottom 1.5rem = 24px) rows, each:
     - `span.text-muted.small` caption: "Switch 1" / "Switch 2" / "Switch
       disabled" / "Switch disabled & checked"
     - `label.custom-control.material-switch` (padding-left: 0 — overrides
       Bootstrap's 1.5rem custom-control padding):
       - `span.material-switch-control-description` "Off"
       - `<input type="checkbox" class="material-switch-control-input">`
         with `checked` / `disabled` attributes per state — `display: none`
         in the source (NOT keyboard-accessible; see Recreation decisions)
       - `span.material-switch-control-indicator` (32×16px pill)
       - `span.material-switch-control-description` "On"
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Accent color: **`#52de97`** (green) — set as `--color: #52de97` on
    `.custom-control.material-switch`; applied to the KNOB when checked
    (`::after { background-color: var(--color) }`) — the track stays grey
  - Track (`.material-switch-control-indicator`): **32×16px**, `display:
inline-block`, `position: relative`, `margin: 0 10px` (10px gap to both
    "Off"/"On" labels), `top: 4px` (vertically centered against the 16px
    label text), **background `#efefef`**, **border-radius: 16px** (full
    pill), `transition: .3s`
  - Knob (`::after`): **20×20px** circle, `border-radius: 50%`,
    `position: absolute`, **`top: -2px`; `left: -1px`** (unchecked),
    **background `#fdfdfd`** (near-white), **box-shadow `0 2px 10px
rgba(170, 170, 170, 0.7)`** (grey glow), `transition: .3s`; the knob is
    TALLER than the track (20px vs 16px) and overhangs the left edge by 1px
  - Checked (`input:checked ~ .material-switch-control-indicator::after`):
    `background-color: var(--color)` → **`#52de97`** green, **`left: 17px`**
    (slides right — 17px + 20px knob = 37px, overhanging the 32px track by
    5px on the right), **box-shadow `0 2px 10px rgba(82, 222, 151, 0.5)`**
    (green glow). The TRACK background stays `#efefef` in both states — the
    "green pill" look in the screenshot is the green knob + green glow
    reading as a pale green track
  - Disabled (`input:disabled ~ .material-switch-control-indicator`):
    `opacity: .4` on the whole track+knob (verified live: opacity 0.4);
    "Off"/"On" label text stays full opacity
  - Input: `display: none` (source) — see Recreation decisions
  - Row: `label.custom-control.material-switch` — Bootstrap 4 `.custom-control`
    base with `padding-left: 0` override; the "Off"/"On" description spans
    inherit body size 16px (1rem), dark `#212529`, Roboto
  - Caption: `span.text-muted.small` — Bootstrap 4 `.text-muted` =
    `color: #6c757d`, `.small` = `font-size: 80%` (≈12.8px)
  - No hover/focus rule in the source (the source input is `display: none`
    so it cannot receive focus) — the recreation ADDS a focus-visible ring
    per the repo a11y conventions (see Recreation decisions)
  - Page: body background **`#fff`**, font **Roboto** system stack
    (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif`); `.content` padding
    **7rem 0** (112px); `h2` **20px** (weight 500, dark `#212529`);
    `h2.my-5` = 48px vertical margins; `p` (unused in demo) `#b3b3b3`
    weight 300
- **Recreation decisions:** no copied assets — the toggle is pure CSS
  (track + knob pseudoelement, box-shadow glow, `left` slide on
  `peer-checked:`), Roboto via Google Fonts `<link>` in `index.html`; no
  external libs (plain React state per switch; `disabled` variants not
  toggleable). **Accessibility note:** the source hides the native input with
  `display: none` — it is NOT exposed to assistive tech and NOT
  keyboard-focusable, and the caption ("Switch 1"…) sits OUTSIDE the label so
  the control has no accessible name. Per the repo accessibility conventions,
  the recreation keeps the native input in the DOM visually-hidden but
  focusable (e.g. `sr-only`-style: absolute, 1px clip, or `opacity: 0` +
  `z-index: -1` like the Sextet spec) wired to the indicator via `peer` +
  `peer-checked:` sibling selectors, gives each input an accessible name from
  its caption (e.g. `aria-label="Switch 1"` or an `aria-labelledby` to the
  caption span), and adds a `focus-visible` ring on the indicator (e.g.
  `ring-2 ring-offset-1`) — deliberate, documented improvements over the
  source; visuals unchanged. Demo copy: keep the four captions verbatim
  ("Switch 1", "Switch 2", "Switch disabled", "Switch disabled & checked")
  and the "Off"/"On" labels — they are the design itself; keep the heading
  "Checkbox #8" exactly as the reference renders it (this is the demo's own
  branding; the checklist row "Checkbox 18" is the mapping record, not
  on-screen copy). The demo has no footer; per repo rules every template
  MUST still include a minimal footer with the mandated Component Dock link
  (https://www.componentdock.com/).

Octet lives in `apps/octet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #8" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Octet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈255–280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #8" (20px, dark
  `#212529`, weight 500, left-aligned within the column, ≈48px vertical
  margins)

### Requirement: Four-state toggle list

The system SHALL render four stacked codrops-style material toggle switches
demonstrating every state: checked, unchecked, disabled, and
disabled-and-checked — each with its caption and an "Off … On" label row.

#### Scenario: All four states present

- **GIVEN** the demo column is displayed
- **WHEN** the user views the toggle list
- **THEN** the list SHALL show exactly four rows in this order: "Switch 1"
  (checked), "Switch 2" (unchecked), "Switch disabled" (unchecked, disabled),
  "Switch disabled & checked" (checked, disabled)
- **AND** each row SHALL show a small muted caption (Bootstrap `text-muted`
  grey `#6c757d` at 80% size) above a toggle row reading "Off", the switch
  track, and "On" left to right

#### Scenario: Unchecked state visuals

- **GIVEN** the "Switch 2" row
- **WHEN** it is unchecked
- **THEN** its track SHALL be a 32×16px `#efefef` pill (16px radius)
- **AND** its knob SHALL be a 20×20px white `#fdfdfd` circle positioned at
  the left (`left: -1px`, `top: -2px`, overhanging the track edges)
- **AND** the knob SHALL cast a grey glow (`rgba(170, 170, 170, 0.7)`)

#### Scenario: Checked state visuals

- **GIVEN** the "Switch 1" row
- **WHEN** it is checked
- **THEN** its knob SHALL turn green `#52de97`
- **AND** the knob SHALL slide right to `left: 17px` (overhanging the 32px
  track by 5px on the right — toward the "On" label)
- **AND** the knob SHALL cast a green glow (`rgba(82, 222, 151, 0.5)`)
- **AND** the track SHALL stay `#efefef` (only the knob changes color)
- **AND** the transition SHALL animate over ≈0.3s

#### Scenario: Disabled states

- **GIVEN** the "Switch disabled" row
- **WHEN** it is rendered
- **THEN** its track and knob SHALL be at 50%→40% opacity (source:
  `opacity: .4`), knob white on the left, and the user SHALL NOT be able to
  toggle it (native disabled attribute)
- **GIVEN** the "Switch disabled & checked" row
- **WHEN** it is rendered
- **THEN** its track and knob SHALL be at `opacity: .4` with a green knob on
  the right (checked styles still apply)
- **AND** the user SHALL NOT be able to toggle it

### Requirement: Toggle interaction and accessibility

The system SHALL make every enabled switch toggleable via click and keyboard,
with the native input kept visually-hidden but focusable (the source's
`display: none` is NOT accessible — the recreation uses the repo's
visually-hidden pattern instead, preserving exact visuals) and an accessible
name taken from the row's caption.

#### Scenario: Toggle by click and keyboard

- **GIVEN** an enabled switch row ("Switch 1" / "Switch 2")
- **WHEN** the user clicks the track or its "Off"/"On" labels
- **THEN** the switch SHALL toggle between checked and unchecked, and the
  knob SHALL slide between the left position (white knob, grey glow) and the
  right position (green knob, green glow)
- **WHEN** the user focuses the hidden input and presses Space
- **THEN** the switch SHALL toggle between checked and unchecked
- **WHEN** the user attempts to toggle a disabled row
- **THEN** the switch SHALL NOT change state

#### Scenario: Accessible control

- **GIVEN** the toggle list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each switch SHALL be exposed as a checkbox control with an
  accessible name matching its caption (e.g. "Switch 1") — the caption span
  lives OUTSIDE the label in the source, so the recreation must wire the name
  explicitly (visually-hidden native input + `aria-label`/`aria-labelledby` +
  label association)
- **AND** the focused switch SHALL show a visible focus indication (e.g.
  focus-visible ring on the track) — the source has none (its input is
  `display: none`); this is a deliberate a11y improvement

### Requirement: Page composition

The system SHALL compose the demo block and a minimal footer in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Octet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Octet — Toggle Switch UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh octet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #8" heading + four caption rows)
- [ ] Design tokens in `@theme`: accent `#52de97` (green), track `#efefef`,
      knob `#fdfdfd`, page bg `#fff`, caption grey `#6c757d`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Toggle anatomy: 32×16px pill track (16px radius), 20×20px circular
      knob (`top: -2px`), `margin: 0 10px` gap to the "Off"/"On" labels;
      knob = pure CSS pseudoelement — NOT an icon font, NOT a copied asset
- [ ] Four rows in order: Switch 1 (checked), Switch 2 (unchecked), Switch
      disabled, Switch disabled & checked; captions + "Off"/"On" labels and
      heading "Checkbox #8" kept verbatim from the reference
- [ ] Checked state: knob `#52de97` green, `left: 17px` (5px overhang right),
      green glow `rgba(82,222,151,.5)`; track stays `#efefef`; ≈0.3s
      transition
- [ ] Disabled rows at `opacity: .4` and cannot toggle; enabled rows toggle
      by click and Space
- [ ] Accessible: visually-hidden-but-focusable native input + accessible
      name from the caption (source's `display: none` and missing name are
      deliberately fixed); add a focus-visible ring (source has none)
- [ ] No copied assets, no icon font (pure CSS track + knob with box-shadow
      glow)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 748 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
