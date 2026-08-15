# Template: Nonet (Bootstrap Checkbox iOS Switch Demo)

## Purpose

Nonet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 19"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-19/), built under a
DIFFERENT name (**Nonet** — "nonet" = a group of nine, matching the demo's
branding "Checkbox #9" and continuing the codrops sub-series naming pattern
Duo (#2) → Trio (#3) → Quartet (#4) → Quintet (#5) → Sextet (#6) → Septet
(#7) → Octet (#8) → Nonet (#9); per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #9" and four
stacked **codrops "ios-switch"** custom toggle switches that demonstrate every
switch state: one checked, one unchecked, one disabled, and one
disabled-and-checked. The widget is the classic codrops **ios-switch** toggle
pattern (`label.custom-control.ios-switch` + `display: none`
`input[type=checkbox]` + `span.ios-switch-control-indicator` + "Off"/"On"
description spans): a 32×20px white track with a **2px `#ddd` border** (16px
radius) and a 16×16px white circular knob with a grey shadow that sits at
`left: 0` when unchecked; when checked, the track's border grows to **10px
solid `#4cd964`** (iOS green) so the whole track turns green with the white
knob centered in it; while pressed, the knob widens from 16px to 20px (the
classic iOS "growing knob" drag affordance). Disabled rows fade the whole
track+knob to `opacity: .4`. This is NOT the codrops `material-switch` toggle
of sibling Checkbox #8 (Octet, green `#52de97` knob-on-grey-track), NOT the
codrops `.control` widget of #2/#3/#4/#6 (Duo/Trio/Quartet/Sextet), NOT the
Material _checkbox_ widget of #5 (Quintet, hot pink `#e13a9d`), NOT the
overflow _checkbox_ widget of #7 (Septet, teal `#00909e`), and NOT the
Bootstrap `custom-control` widget of #1 (Quadly) — it is the **ios-switch**
toggle variant with its own solid-green-track checked state, its own white
bordered track, its own press-to-widen knob, and its own "Off … On" two-sided
label layout.

> NAMING NOTE: the ColorLib source name "Checkbox 19" is FORBIDDEN as the app
> name. **Nonet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 19" — the nineteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 749 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 11–18
  were prepped as Quadly / Duo / Trio / Quartet / Quintet / Sextet / Septet /
  Octet.
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
  _checkbox_ widget, teal `#00909e`), checkbox-18 → "#8" (Octet, codrops
  MATERIAL-SWITCH _toggle_ widget, green `#52de97`), **checkbox-19 → "#9"
  (THIS template, codrops IOS-SWITCH _toggle_ widget, green `#4cd964`)**,
  checkbox-20 → duplicate "#9" (same demo served twice). So entry "Checkbox
  19" = the demo branded "Checkbox #9" — its OWN widget (iOS-style toggle
  switch, NOT a checkbox) AND its own accent color (iOS green `#4cd964`),
  DIFFERENT from every sibling; do NOT reuse a sibling app's component.
  NOTE: Octet (#8) is also a codrops toggle switch but it is the
  material-switch variant (grey `#efefef` track + knob that turns green) —
  Nonet is the ios-switch variant (white track + 2px grey border that turns
  SOLID green when checked via the border-expansion trick); different
  anatomy, different color, different checked mechanism.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-19/` returns **HTTP 404**
  (verified 2026-08-15). These "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme, so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-19/`
  (HTTP 200, 18.1 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-19/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-19/css/style.css`
  (2,365 bytes / 69 lines — body/font/heading overrides + the complete
  `.ios-switch` widget CSS; fully extracted for tokens). The page ALSO links
  `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, but the body uses zero `owl-`/icomoon classes —
  the shell loads them for the surrounding ColorLib theme; only `style.css`
  styles the demo content. libs: bootstrap 4, jquery, popper. **Google Font
  Roboto** (body font stack — NOT Poppins). Document title: "Checkbox #9".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-19.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #9" + four caption rows ("Switch 1", "Switch 2", "Switch
  disabled", "Switch disabled & checked") each with an "Off [pill toggle] On"
  row; the checked rows show a SOLID GREEN track with a white knob on the
  right (On side), the unchecked rows a WHITE track with a thin grey border
  and a white knob on the left (Off side); the disabled rows look faded. The
  demo brands itself "Checkbox #9"; the recreation uses the NEW name **Nonet**.
- **Visual design (from DOM + CSS tokens + screenshot + live computed
  styles):** clean, minimalist demo page on a pure **white** background.
  Centered narrow column (`col-lg-3`, ≈255–280px) with generous vertical
  padding (112px, `7rem 0`): an `h2.my-5.text-left` heading "Checkbox #9"
  (20px, dark `#212529`, weight 500, left-aligned within the centered column,
  3rem=48px top+bottom margins) followed by FOUR stacked `div.mb-4` rows
  (24px gap), each composed of a small muted caption
  (`span.text-muted.small` — Bootstrap grey `#6c757d` at 80% size, ≈12.8px)
  above a `label.custom-control.ios-switch` toggle row:
  1. **Switch 1** — checked → solid green `#4cd964` track, white knob on the
     right (centered within the green track)
  2. **Switch 2** — unchecked → white track, 2px `#ddd` border, white knob on
     the left
  3. **Switch disabled** — unchecked + `disabled` → whole track+knob at
     `opacity: .4`, not interactive
  4. **Switch disabled & checked** — checked + `disabled` → green track at
     `opacity: .4` (pale/muted green), not interactive
     Each toggle row reads, left to right: `Off` text — pill track with knob —
     `On` text (the knob slides toward "On" when checked). The demo page has NO
     navbar and NO footer — just the single `.content` block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #9" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. 4 × `div.mb-4` (margin-bottom 1.5rem = 24px) rows, each:
     - `span.text-muted.small` caption: "Switch 1" / "Switch 2" / "Switch
       disabled" / "Switch disabled & checked"
     - `label.custom-control.ios-switch` (padding-left: 0 — overrides
       Bootstrap's 1.5rem custom-control padding):
       - `span.ios-switch-control-description` "Off"
       - `<input type="checkbox" class="ios-switch-control-input">`
         with `checked` / `disabled` attributes per state — `display: none`
         in the source (NOT keyboard-accessible; see Recreation decisions)
       - `span.ios-switch-control-indicator` (32×20px track)
       - `span.ios-switch-control-description` "On"
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Accent color: **`#4cd964`** (iOS green) — set as `--color: #4cd964` on
    `.custom-control.ios-switch`; applied to the whole TRACK when checked via
    the border-expansion trick (`border: 10px solid var(--color)` — the
    track's 2px grey border is replaced by a 10px green border, so the track
    reads as a SOLID green pill; NOT a knob-color change like Octet)
  - Track (`.ios-switch-control-indicator`): **32×20px**,
    `display: inline-block`, `position: relative`, `margin: 0 10px` (10px gap
    to both "Off"/"On" labels), `top: 4px` (vertically centered against the
    16px label text), **background `#fff`**, **border-radius: 16px** (full
    pill), **border: 2px solid `#ddd`** (unchecked), `transition: .3s`
  - Knob (`::after`): **16×16px** circle, `border-radius: 16px`,
    `position: absolute`, **`top: 0px`; `left: 0px`** (unchecked — flush
    against the track's left edge), **background `#fff`**, **box-shadow `0 0
2px #aaa, 0 2px 5px #999`** (grey shadow), `transition: .3s`; the knob
    fills the inner area of the 2px-bordered track exactly (28×16 inner box)
  - Checked (`input:checked ~ .ios-switch-control-indicator`):
    **`border: 10px solid var(--color)`** → the whole track turns solid
    **`#4cd964`** green; the knob repositions to **`top: -8px`; `left: 4px`**
    (the inner box shrinks to 12×0, so the knob centers itself on the green
    pill — visually a white circle in the middle of the green track, slightly
    right-of-center toward "On"). The knob keeps its white color and grey
    shadow — only the border/color of the track changes
  - Pressed/active (`input:active ~ .ios-switch-control-indicator::after`):
    the knob **widens to 20px** (height stays 16px) while the input is being
    pressed — the classic iOS "growing knob" drag affordance; when
    checked+active the knob also slides back to **`left: 0px`** (`input:
checked:active ~ …::after`). Transient state — fires only while held
  - Disabled (`input:disabled ~ .ios-switch-control-indicator`):
    **`opacity: .4`** on the whole track+knob (verified live: opacity 0.4);
    "Off"/"On" label text stays full opacity
  - Input: `display: none` (source) — see Recreation decisions
  - Row: `label.custom-control.ios-switch` — Bootstrap 4 `.custom-control`
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
  (track + knob pseudoelement, box-shadow shadow, border-expansion color
  trick on `peer-checked:`, knob widen on press), Roboto via Google Fonts
  `<link>` in `index.html`; no external libs (plain React state per switch;
  `disabled` variants not toggleable). The press-to-widen knob is a transient
  `:active` state in the source — the recreation MAY implement it with
  Tailwind's `active:` variant on the switch wrapper (optional fidelity
  nicety; the static states are the visible design). **Accessibility note:**
  the source hides the native input with `display: none` — it is NOT exposed
  to assistive tech and NOT keyboard-focusable, and the caption ("Switch
  1"…) sits OUTSIDE the label so the control has no accessible name. Per the
  repo accessibility conventions, the recreation keeps the native input in
  the DOM visually-hidden but focusable (e.g. `sr-only`-style: absolute, 1px
  clip, or `opacity: 0` + `z-index: -1` like the Sextet spec) wired to the
  indicator via `peer` + `peer-checked:` sibling selectors, gives each input
  an accessible name from its caption (e.g. `aria-label="Switch 1"` or an
  `aria-labelledby` to the caption span), and adds a `focus-visible` ring on
  the indicator (e.g. `ring-2 ring-offset-1`) — deliberate, documented
  improvements over the source; visuals unchanged. Demo copy: keep the four
  captions verbatim ("Switch 1", "Switch 2", "Switch disabled", "Switch
  disabled & checked") and the "Off"/"On" labels — they are the design
  itself; keep the heading "Checkbox #9" exactly as the reference renders it
  (this is the demo's own branding; the checklist row "Checkbox 19" is the
  mapping record, not on-screen copy). The demo has no footer; per repo rules
  every template MUST still include a minimal footer with the mandated
  Component Dock link (https://www.componentdock.com/).

Nonet lives in `apps/nonet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #9" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Nonet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈255–280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #9" (20px, dark
  `#212529`, weight 500, left-aligned within the column, ≈48px vertical
  margins)

### Requirement: Four-state toggle list

The system SHALL render four stacked codrops-style iOS toggle switches
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
- **THEN** its track SHALL be a 32×20px white `#fff` pill (16px radius) with
  a 2px `#ddd` border
- **AND** its knob SHALL be a 16×16px white `#fff` circle flush at the left
  (`top: 0`, `left: 0`)
- **AND** the knob SHALL cast a grey shadow (`0 0 2px #aaa, 0 2px 5px #999`)

#### Scenario: Checked state visuals

- **GIVEN** the "Switch 1" row
- **WHEN** it is checked
- **THEN** its track SHALL turn solid green `#4cd964` (source: the 2px `#ddd`
  border is replaced by a 10px `#4cd964` border so the whole track reads
  green)
- **AND** its knob SHALL stay white and recenter on the green track
  (`top: -8px`, `left: 4px` in the source geometry — visually a white circle
  in the middle of the green pill, slightly toward the "On" side)
- **AND** the knob SHALL keep its grey shadow (only the track border color
  changes, NOT the knob color)
- **AND** the transition SHALL animate over ≈0.3s

#### Scenario: Disabled states

- **GIVEN** the "Switch disabled" row
- **WHEN** it is rendered
- **THEN** its track and knob SHALL be at `opacity: .4` (white track, knob
  left), and the user SHALL NOT be able to toggle it (native disabled
  attribute)
- **GIVEN** the "Switch disabled & checked" row
- **WHEN** it is rendered
- **THEN** its track and knob SHALL be at `opacity: .4` with a pale/muted
  green track (the checked green at 40% opacity) and the white knob centered
  (checked styles still apply)
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
  track SHALL flip between the white 2px-bordered state (knob left) and the
  solid green state (knob centered/right)
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

- **GIVEN** the Nonet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Nonet — iOS Toggle Switch UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh nonet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #9" heading + four caption rows)
- [ ] Design tokens in `@theme`: accent `#4cd964` (iOS green), track `#fff`,
      border `#ddd`, knob `#fff`, page bg `#fff`, caption grey `#6c757d`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Toggle anatomy: 32×20px track (16px radius, 2px `#ddd` border), 16×16px
      circular knob (flush `top:0 left:0`), `margin: 0 10px` gap to the
      "Off"/"On" labels; knob = pure CSS pseudoelement — NOT an icon font,
      NOT a copied asset
- [ ] Four rows in order: Switch 1 (checked), Switch 2 (unchecked), Switch
      disabled, Switch disabled & checked; captions + "Off"/"On" labels and
      heading "Checkbox #9" kept verbatim from the reference
- [ ] Checked state: track solid `#4cd964` green (border-expansion trick —
      NOT a knob-color change like Octet), white knob recentered, ≈0.3s
      transition
- [ ] Disabled rows at `opacity: .4` and cannot toggle; enabled rows toggle
      by click and Space
- [ ] (Optional fidelity) Pressed state widens the knob 16→20px while held
      (`active:` variant)
- [ ] Accessible: visually-hidden-but-focusable native input + accessible
      name from the caption (source's `display: none` and missing name are
      deliberately fixed); add a focus-visible ring (source has none)
- [ ] No copied assets, no icon font (pure CSS track + knob with box-shadow
      shadow)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 749 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
