# Template: Warp (Bootstrap Teleport Toggle Switch Demo)

## Purpose

Warp is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 20"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-20/), built under a
DIFFERENT name (**Warp** — "warp" = to move/transport instantly, matching the
demo's **teleport-switch** widget whose two dots teleport across the track when
toggled; per the monorepo naming mandate — never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #9" and four
stacked codrops **teleport-switch** custom toggle switches that demonstrate
every switch state: one checked, one unchecked, one disabled, and one
disabled-and-checked. The widget is the codrops **teleport-switch** toggle
pattern (`label.custom-control.teleport-switch` + `display: none`
`input[type=checkbox]` + `span.teleport-switch-control-indicator` + "Off"/"On"
description spans): a 32×20px white track with a **2px `#ccc` border** (16px
radius) and **`overflow: hidden`**, containing TWO 12×12px grey `#ccc` dots
(pseudoelements `::after` at `top: 2px; left: 2px` and `::before` at
`top: 2px; right: -14px` — the right one parked off-track, invisible thanks to
the overflow clip). When checked, the track's border color turns **`#4cd964`**
(iOS green), the left grey dot teleports OUT of view (`left: -14px`) while the
right dot teleports IN from the right (`right: 2px`) and turns green — the
"teleport" effect. Disabled rows fade the whole track+dots to `opacity: .4`.
This is NOT the codrops `ios-switch` toggle of sibling Checkbox #19 (Nonet —
single white 16×16 knob with grey shadow on a 2px `#ddd` track whose border
EXPANDS to 10px solid green when checked), NOT the codrops `material-switch`
toggle of #8 (Octet, green `#52de97` knob-on-grey-track), NOT the codrops
`.control` widget of #2/#3/#4/#6 (Duo/Trio/Quartet/Sextet), NOT the Material
_checkbox_ widget of #5 (Quintet, hot pink `#e13a9d`), NOT the overflow
_checkbox_ widget of #7 (Septet, teal `#00909e`), and NOT the Bootstrap
`custom-control` widget of #1 (Quadly) — it is the **teleport-switch** toggle
variant with its own two-dot swap animation, its own `#ccc` 2px track border
that turns green WITHOUT expanding, its own overflow-hidden track, and its own
"Off … On" two-sided label layout.

> NAMING NOTE: the ColorLib source name "Checkbox 20" is FORBIDDEN as the app
> name. **Warp** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 20" — the twentieth (and last) of the
  "Bootstrap Checkboxes (20)" series in TEMPLATES.md (line 750 — mark that
  line `[x]` when done; single row, no duplicate rows). Sibling items Checkbox
  11–19 were prepped as Quadly / Duo / Trio / Quartet / Quintet / Sextet /
  Septet / Octet / Nonet.
- **NUMBERING QUIRK (verified 2026-08-15, continuing the Nonet research):**
  the preview server hosts TWO sub-series. Entries 01–10 map to
  `/theme/bootstrap/checkbox-01/`…`/checkbox-10/` and serve custom designs
  branded "Checkbox #01"…"#10". Entries 11–20 map to
  `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and serve a SEPARATE
  sub-series of codrops-sourced demos branded "Checkbox #1"…"#9": checkbox-11
  → "#1" (Quadly, Bootstrap `custom-control` widget), checkbox-12 → "#2"
  (Duo, codrops `.control` widget, blue `#007bff`), checkbox-13 → "#3" (Trio),
  checkbox-14 → "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`),
  checkbox-15 → "#5" (Quintet, MATERIAL _checkbox_ widget, hot pink `#e13a9d`),
  checkbox-16 → "#6" (Sextet, codrops `.control` widget, blue `#007bff`),
  checkbox-17 → "#7" (Septet, codrops OVERFLOW _checkbox_ widget, teal
  `#00909e`), checkbox-18 → "#8" (Octet, codrops MATERIAL-SWITCH _toggle_
  widget, green `#52de97`), checkbox-19 → "#9" (Nonet, codrops IOS-SWITCH
  _toggle_ widget, green `#4cd964`), **checkbox-20 → ALSO branded "#9" (THIS
  template) but with a DIFFERENT widget: the codrops TELEPORT-SWITCH _toggle_
  widget, green `#4cd964`**.
- **CORRECTION to the Nonet research:** the Nonet spec claimed "checkbox-20 →
  duplicate '#9' (same demo served twice)". That is WRONG (verified 2026-08-15
  by diffing the two live pages): checkbox-19 and checkbox-20 share the SAME
  page shell — identical heading "Checkbox #9", identical four captions
  ("Switch 1", "Switch 2", "Switch disabled", "Switch disabled & checked"),
  identical 404 on the naive preview URL — but serve DIFFERENT widget classes:
  checkbox-19 = `ios-switch` (`ios-switch-control-*` classes; single 16×16
  white knob, 2px `#ddd` track border that EXPANDS to 10px solid green when
  checked), checkbox-20 = `teleport-switch` (`teleport-switch-control-*`
  classes; TWO 12×12px grey dots that swap sides, 2px `#ccc` track border that
  turns green WITHOUT expanding). Do NOT reuse the Nonet app's toggle
  component — the checked-state mechanics and the dot anatomy are different.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-20/` returns **HTTP 404**
  (verified 2026-08-15). These "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme, so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-20/`
  (HTTP 200, 18,156 bytes HTML, verified 2026-08-15). The ColorLib template
  page (https://colorlib.com/wp/template/checkbox-20/, HTTP 200) links this
  exact sub-path. Page stylesheet (small, page-specific — contains the WHOLE
  widget): `https://preview.colorlib.com/theme/bootstrap/checkbox-20/css/style.css`
  (2,623 bytes — body/font/heading overrides + the complete
  `.teleport-switch` widget CSS; fully extracted for tokens). The page ALSO
  links `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, but the body uses zero `owl-`/icomoon classes —
  the shell loads them for the surrounding ColorLib theme; only `style.css`
  styles the demo content. libs: bootstrap 4, jquery 3.3.1, popper. **Google
  Font Roboto** (body font stack — NOT Poppins). Document title: "Checkbox #9".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-20.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #9" + four caption rows ("Switch 1", "Switch 2", "Switch
  disabled", "Switch disabled & checked") each with an "Off [pill toggle] On"
  row; the checked rows show a WHITE track with a green border and a GREEN dot
  on the right (On side), the unchecked rows a WHITE track with a grey `#ccc`
  border and a GREY dot on the left (Off side); the disabled rows look faded.
  The demo brands itself "Checkbox #9"; the recreation uses the NEW name
  **Warp**.
- **Visual design (from DOM + CSS tokens + screenshot + live computed
  styles):** clean, minimalist demo page on a pure **white** background.
  Centered narrow column (`col-lg-3`, ≈255–280px) with generous vertical
  padding (112px, `7rem 0`): an `h2.my-5.text-left` heading "Checkbox #9"
  (20px, dark `#212529`, weight 500, left-aligned within the centered column,
  3rem=48px top+bottom margins) followed by FOUR stacked `div.mb-4` rows
  (24px gap), each composed of a small muted caption
  (`span.text-muted.small` — Bootstrap grey `#6c757d` at 80% size, ≈12.8px)
  above a `label.custom-control.teleport-switch` toggle row:
  1. **Switch 1** — checked → white track with 2px green `#4cd964` border,
     green 12px dot on the right (2px from the right edge)
  2. **Switch 2** — unchecked → white track, 2px `#ccc` border, grey `#ccc`
     12px dot on the left
  3. **Switch disabled** — unchecked + `disabled` → whole track+dots at
     `opacity: .4`, not interactive
  4. **Switch disabled & checked** — checked + `disabled` → green-bordered
     track at `opacity: .4` (pale/muted), green dot on the right, not
     interactive
     Each toggle row reads, left to right: `Off` text — pill track with dot —
     `On` text (the dot teleports toward "On" when checked). The demo page has
     NO navbar and NO footer — just the single `.content` block.
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
     - `label.custom-control.teleport-switch` (padding-left: 0 — overrides
       Bootstrap's 1.5rem custom-control padding):
       - `span.teleport-switch-control-description` "Off"
       - `<input type="checkbox" class="teleport-switch-control-input">`
         with `checked` / `disabled` attributes per state — `display: none`
         in the source (NOT keyboard-accessible; see Recreation decisions)
       - `span.teleport-switch-control-indicator` (32×20px track)
       - `span.teleport-switch-control-description` "On"
- **Design tokens extracted from `css/style.css` + live computed styles:**
  - Accent color: **`#4cd964`** (iOS green) — set as `--color: #4cd964` on
    `.custom-control.teleport-switch`; applied to the CHECKED TRACK BORDER
    (`border-color: var(--color)`) AND to the incoming right dot
    (`background-color: var(--color)`)
  - Track (`.teleport-switch-control-indicator`): **32×20px**,
    `display: inline-block`, `position: relative`, `margin: 0 10px` (10px gap
    to both "Off"/"On" labels), `top: 4px` (vertically centered against the
    16px label text), **background `#fff`**, **border-radius: 16px** (full
    pill), **border: 2px solid `#ccc`** (unchecked — NOTE: `#ccc`, NOT `#ddd`
    like the ios-switch), **`overflow: hidden`** (clips the off-track dots —
    the "teleport" trick), `transition: .3s`
  - Dots (pseudoelements — `::after` = left dot, `::before` = right dot):
    **12×12px** circles (SMALLER than the ios-switch's 16×16 knob),
    `border-radius: 50%`, `position: absolute`, **`top: 2px`**,
    **background `#ccc`** (grey — NO white knob, NO shadow, unlike the
    ios-switch), `transition: .3s`
    - `::after` (left dot, unchecked): **`left: 2px`** (grey, sits inside the
      track's left side)
    - `::before` (right dot, unchecked): **`right: -14px`** (parked off-track
      to the right — invisible thanks to `overflow: hidden`)
  - Checked (`input:checked ~ .teleport-switch-control-indicator`):
    - **`border-color: var(--color)`** → the 2px track border turns
      **`#4cd964`** green (the track background STAYS white — unlike the
      ios-switch there is NO border expansion and NO solid-green track)
    - `::after` → **`left: -14px`** (the left grey dot teleports OUT to the
      left, clipped by overflow)
    - `::before` → **`right: 2px`** + **`background-color: var(--color)`**
      (the right dot teleports IN from the right, lands 2px from the right
      edge, and turns green)
    - Net checked effect: white pill with a 2px green border and a green dot
      on the right (On side)
  - Disabled (`input:disabled ~ .teleport-switch-control-indicator`):
    **`opacity: .4`** on the whole track+dots (verified live: opacity 0.4);
    "Off"/"On" label text stays full opacity
  - Input: `display: none` (source) — see Recreation decisions. NOTE: unlike
    the ios-switch widget there is NO `:active` press state (no knob-widen)
    in the teleport-switch CSS — nothing to replicate
  - Row: `label.custom-control.teleport-switch` — Bootstrap 4
    `.custom-control` base with `padding-left: 0` override; the "Off"/"On"
    description spans inherit body size 16px (1rem), dark `#212529`, Roboto
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
  (overflow-hidden track + two 12px pseudoelement dots that swap sides via
  `peer-checked:` left/right transitions), Roboto via Google Fonts `<link>` in
  `index.html`; no external libs (plain React state per switch; `disabled`
  variants not toggleable). **Accessibility note:** the source hides the
  native input with `display: none` — it is NOT exposed to assistive tech and
  NOT keyboard-focusable, and the caption ("Switch 1"…) sits OUTSIDE the label
  so the control has no accessible name. Per the repo accessibility
  conventions, the recreation keeps the native input in the DOM
  visually-hidden but focusable (e.g. `sr-only`-style: absolute, 1px clip, or
  `opacity: 0` + `z-index: -1` like the Sextet spec) wired to the indicator
  via `peer` + `peer-checked:` sibling selectors, gives each input an
  accessible name from its caption (e.g. `aria-label="Switch 1"` or an
  `aria-labelledby` to the caption span), and adds a `focus-visible` ring on
  the indicator (e.g. `ring-2 ring-offset-1`) — deliberate, documented
  improvements over the source; visuals unchanged. Demo copy: keep the four
  captions verbatim ("Switch 1", "Switch 2", "Switch disabled", "Switch
  disabled & checked") and the "Off"/"On" labels — they are the design
  itself; keep the heading "Checkbox #9" exactly as the reference renders it
  (this is the demo's own branding; the checklist row "Checkbox 20" is the
  mapping record, not on-screen copy). The demo has no footer; per repo rules
  every template MUST still include a minimal footer with the mandated
  Component Dock link (https://www.componentdock.com/).

Warp lives in `apps/warp` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #9" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Warp page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈255–280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #9" (20px, dark
  `#212529`, weight 500, left-aligned within the column, ≈48px vertical
  margins)

### Requirement: Four-state toggle list

The system SHALL render four stacked codrops-style teleport toggle switches
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
  a 2px `#ccc` border
- **AND** its left dot SHALL be a 12×12px grey `#ccc` circle at the top-left
  (`top: 2px`, `left: 2px`)
- **AND** its right dot SHALL be parked off-track to the right
  (`right: -14px`) and invisible (clipped by the track's `overflow: hidden`)
- **AND** the dots SHALL have no shadow (unlike the ios-switch's
  grey-shadowed white knob)

#### Scenario: Checked state visuals

- **GIVEN** the "Switch 1" row
- **WHEN** it is checked
- **THEN** its track SHALL keep the white background and 2px border, but the
  border color SHALL turn green `#4cd964` (the border does NOT expand — there
  is NO solid-green-track effect, unlike Nonet's ios-switch)
- **AND** its left grey dot SHALL teleport out of view (`left: -14px`,
  clipped)
- **AND** a green `#4cd964` 12×12px dot SHALL appear on the right side
  (`right: 2px` — teleported in from off-track)
- **AND** the transition SHALL animate over ≈0.3s

#### Scenario: Disabled states

- **GIVEN** the "Switch disabled" row
- **WHEN** it is rendered
- **THEN** its track and dots SHALL be at `opacity: .4` (white track with
  grey `#ccc` border, grey dot left), and the user SHALL NOT be able to
  toggle it (native disabled attribute)
- **GIVEN** the "Switch disabled & checked" row
- **WHEN** it is rendered
- **THEN** its track and dots SHALL be at `opacity: .4` with a muted green
  border and a muted green dot on the right (the checked styles at 40%
  opacity)
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
  track SHALL flip between the white 2px `#ccc`-bordered state (grey dot
  left) and the green-bordered state (green dot right)
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

- **GIVEN** the Warp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Warp — Teleport Toggle Switch UI
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh warp` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #9" heading + four caption rows)
- [ ] Design tokens in `@theme`: accent `#4cd964` (iOS green), track `#fff`,
      border `#ccc`, dot `#ccc`, page bg `#fff`, caption grey `#6c757d`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Toggle anatomy: 32×20px track (16px radius, 2px `#ccc` border,
      `overflow: hidden`), TWO 12×12px dots (grey `#ccc`; left at `top: 2px
    left: 2px`, right parked at `right: -14px`), `margin: 0 10px` gap to
      the "Off"/"On" labels; dots = pure CSS pseudoelements — NOT an icon
      font, NOT a copied asset
- [ ] Four rows in order: Switch 1 (checked), Switch 2 (unchecked), Switch
      disabled, Switch disabled & checked; captions + "Off"/"On" labels and
      heading "Checkbox #9" kept verbatim from the reference
- [ ] Checked state: 2px border turns green `#4cd964` (NO border expansion —
      differs from Nonet's ios-switch), left dot exits left (`left: -14px`),
      green dot enters right (`right: 2px`), ≈0.3s transition
- [ ] Disabled rows at `opacity: .4` and cannot toggle; enabled rows toggle
      by click and Space
- [ ] No `:active` press state exists in the source widget — nothing to
      replicate (unlike Nonet's knob-widen)
- [ ] Accessible: visually-hidden-but-focusable native input + accessible
      name from the caption (source's `display: none` and missing name are
      deliberately fixed); add a focus-visible ring (source has none)
- [ ] No copied assets, no icon font (pure CSS track + dots with the
      overflow-clip teleport trick)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 750 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
