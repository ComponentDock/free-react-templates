# Template: Quintet (Bootstrap Checkbox States Demo)

## Purpose

Quintet is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 15"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-15/), built under a
DIFFERENT name (**Quintet** — "quintet" = a group of five, matching the demo's
branding "Checkbox #5" and the five states the Material-style demo showcases,
and continuing the codrops sub-series naming pattern Duo (#2) → Trio (#3) →
Quartet (#4) → Quintet (#5); per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white page with a centered
narrow column containing a dark left-aligned heading "Checkbox #5" and four
stacked CSS-only **Material Design** custom checkboxes that demonstrate every
checkbox state: one checked, one unchecked, one disabled, and one
disabled-and-checked. The widget is the classic Material-style custom checkbox
pattern (`label.custom-control.material-checkbox` + hidden
`input.material-control-input` + `span.material-control-indicator` +
`span.material-control-description`) — the tick is drawn in pure CSS by
rotating the indicator's border (an L-shaped tick from the right+bottom
borders), NOT the codrops `.control` widget of sibling Checkbox #4 (Quartet,
purple `#7e0cf5`) and NOT Bootstrap's `custom-control` widget of Checkbox #1
(Quadly). The checked color is hot pink **`#e13a9d`**.

> NAMING NOTE: the ColorLib source name "Checkbox 15" is FORBIDDEN as the app
> name. **Quintet** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15 against `git ls-tree origin/main`).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 15" — the fifteenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 745 — mark that line `[x]`
  when done; single row, no duplicate rows). Sibling items Checkbox 11–14
  were prepped as Quadly / Duo / Trio / Quartet.
  **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  distinct sub-series. Entries 01–10 map to `/theme/bootstrap/checkbox-01/`…
  `/checkbox-10/` and serve custom designs branded "Checkbox #01"…"#10".
  Entries 11–20 map to `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` and
  serve a SEPARATE sub-series of codrops-sourced demos branded
  "BS4 Custom Checkbox #1"…"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), checkbox-12 → "#2" (Duo, codrops `.control`
  widget, Bootstrap blue `#007bff`), checkbox-13 → "#3" (Trio), checkbox-14 →
  "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), **checkbox-15 →
  "#5" (this template, Material widget, hot pink `#e13a9d`)**, … checkbox-19 →
  "#9", checkbox-20 → duplicate "#9". So entry "Checkbox 15" = the demo
  branded "Checkbox #5" — a DIFFERENT widget AND color from every sibling;
  do NOT reuse Quartet's `.control` component or any other sibling app
  blindly. Each 11–20 entry is its own demo with its own heading AND its own
  checked color.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-15/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-15/`
  (HTTP 200, 17.3 KB HTML, verified 2026-08-15). The ColorLib template page
  (https://colorlib.com/wp/template/checkbox-15/) links this exact sub-path.
  Page stylesheet (small, page-specific — contains the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-15/css/style.css`
  (1,715 bytes / 50 lines — body/font/heading overrides + the complete
  `.material-checkbox` widget CSS; fully extracted for tokens). The page ALSO
  links `css/bootstrap.min.css`, `css/owl.carousel.min.css` and
  `fonts/icomoon/style.css`, and the head preloads Poppins + Source Serif Pro
  cf-fonts, but the body uses zero `owl-`/`icon-`/Poppins/Serif classes — the
  shell loads them for the surrounding ColorLib theme; only `style.css`
  styles the demo content. libs: bootstrap 4, jquery, popper. **Google Font
  Roboto** (body font stack — NOT Poppins). Document title: "Checkbox #5".
- **Screenshot cross-check:** TEMPLATES.md screenshot `checkbox-15.jpg`
  (1200×972, browser-viewed 2026-08-15) matches the live DOM exactly:
  heading "Checkbox #5" + four 4-state checkboxes with a hot-pink
  (#e13a9d) tick on the checked rows (the screenshot's browser chrome shows
  a `ui-preview.colorlib.com` component-preview origin, confirming this
  sub-series is codrops-sourced). The demo brands itself "Checkbox #5"; the
  recreation uses the NEW name **Quintet**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a pure **white** background. Centered narrow column
  (`col-lg-3`, ≈280px) with generous vertical padding (112px, `7rem 0`):
  an `h2.my-5.text-left` heading "Checkbox #5" (20px, dark, left-aligned
  within the centered column, 3rem top+bottom margins) followed by FOUR
  stacked Material-style custom-checkbox rows (each a 16×16px bordered
  square indicator + label text):
  1. **First checkbox** — `checked`, enabled → pink `#e13a9d` border +
     pink L-shaped tick
  2. **Second checkbox** — unchecked, enabled → light grey `#ccc` border,
     no tick
  3. **Disabled** — unchecked + `disabled` → grey border at 40% opacity,
     greyed label, not interactive
  4. **Disabled & checked** — checked + `disabled` → pink border + pink
     tick at 40% opacity (faded pink), greyed label, not interactive
     The demo page has NO navbar and NO footer — just the single `.content`
     block.
- **Section order (1:1, from live demo DOM):**
  1. `<body>` → `div.content` (padding 7rem 0 = 112px vertical):
  2. `div.container.text-left` (Bootstrap container, centered):
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column):
  4. `h2.my-5.text-left` "Checkbox #5" (20px, dark, left-aligned, 3rem
     vertical margins)
  5. Four `label.custom-control.material-checkbox` rows, each:
     - `<input type="checkbox" class="material-control-input">` with
       `checked` / `disabled` attributes per state — `display: none` in the
       source (see Recreation decisions for the a11y deviation)
     - `<span class="material-control-indicator">` (16×16px, 2px border,
       absolute top 4px left 0)
     - `<span class="material-control-description">` (the label text)
- **Design tokens extracted from `css/style.css` + DOM:**
  - Checked color: **`#e13a9d`** (hot pink) — CSS custom property
    `--color: #e13a9d` on `.custom-control.material-checkbox`; applied as
    `border-color` on the indicator when checked
  - Indicator: **16×16px**, inline-block, absolute `top: 4px`, `left: 0`,
    **2px solid `#ccc`** border, **transition .3s** ease
  - Checked state: `border-color: var(--color)` (`#e13a9d`) +
    `transform: rotateZ(45deg) translate(1px,-5px)`, **width: 10px**,
    `border-top: 0`, `border-left: 0` — the right+bottom borders form the
    classic Material **L-shaped tick** (2px thick, pink, rotated 45°)
  - Disabled: indicator **`opacity: .4`** (both grey and pink variants
    fade); disabled label text renders grey in the preview (screenshot)
  - Row: `label.custom-control` (Bootstrap base: position relative, display
    block, min-height 1.5rem, **padding-left 1.5rem** = 24px)
  - Page: body background **`#fff`**, font **Roboto** system stack
    (`"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif`); `.content` padding
    **7rem 0**; `h2` **20px** (Bootstrap default weight 500, dark);
    `h2.my-5` = 3rem vertical margins; `p` (unused in demo) `#b3b3b3`
    weight 300.
- **Recreation decisions:** no copied assets — the CSS-drawn tick is
  reproduced with the same pure-CSS technique (indicator span + rotated
  L-shaped tick via `border-r-2 border-b-2` + `rotate-45`; no icon library
  needed); Roboto via Google Fonts `<link>` in `index.html`; no external
  libs (plain React state per checkbox; `disabled` variants not toggleable).
  **Accessibility deviation (documented):** the source sets the native input
  to `display: none`, which removes it from keyboard focus. The recreation
  keeps the native `<input type="checkbox">` in the DOM, visually hidden but
  focusable (sr-only / absolute + opacity 0 pattern), wired to the indicator
  with `peer` + `peer-checked:` sibling selectors — keyboard-focusable +
  screen-reader friendly, matching the repo's accessibility conventions
  while preserving the exact visuals. Demo copy: keep the four labels
  verbatim ("First checkbox", "Second checkbox", "Disabled", "Disabled &
  checked") — they are the design itself; keep the heading "Checkbox #5"
  exactly as the reference renders it (this is the demo's own branding; the
  checklist row "Checkbox 15" is the mapping record, not on-screen copy).
  The demo has no footer; per repo rules every template MUST still include a
  minimal footer with the mandated Component Dock link
  (https://www.componentdock.com/).

Quintet lives in `apps/quintet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo block with a dark left-aligned
heading "Checkbox #5" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Quintet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one content block with generous vertical
  padding (≈112px top and bottom)
- **AND** the block SHALL contain a centered narrow column (≈280px on
  desktop)
- **AND** the column SHALL show a heading "Checkbox #5" (20px, dark,
  left-aligned within the column, ≈3rem vertical margins)

### Requirement: Four-state checkbox list

The system SHALL render four stacked Material-style custom checkboxes
demonstrating every state: checked, unchecked, disabled, and
disabled-and-checked.

#### Scenario: All four states present

- **GIVEN** the demo column is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly four rows in this order: "First
  checkbox" (checked), "Second checkbox" (unchecked), "Disabled"
  (unchecked, disabled), "Disabled & checked" (checked, disabled)
- **AND** each row SHALL show a 16×16px square indicator with a 2px border
  followed by its label text (≈24px left padding)

#### Scenario: Checked state visuals

- **GIVEN** the "First checkbox" row
- **WHEN** it is checked
- **THEN** its indicator SHALL show a 2px hot-pink `#e13a9d` border
- **AND** a 2px hot-pink L-shaped tick SHALL appear inside it (10px wide,
  rotated 45°), drawn from the right+bottom borders — no icon glyph
- **AND** the indicator SHALL animate to the checked state with a 0.3s
  transition

#### Scenario: Unchecked state visuals

- **GIVEN** the "Second checkbox" row
- **WHEN** it is unchecked
- **THEN** its indicator SHALL show a 2px light grey `#ccc` border
- **AND** SHALL contain no tick

#### Scenario: Disabled states

- **GIVEN** the "Disabled" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL be grey `#ccc` at 40% opacity
- **AND** its label text SHALL be greyed out
- **AND** the user SHALL NOT be able to toggle it (native disabled attribute)
- **GIVEN** the "Disabled & checked" row
- **WHEN** it is rendered
- **THEN** its indicator SHALL show the hot-pink border and tick at 40%
  opacity (faded pink look)
- **AND** its label text SHALL be greyed out
- **AND** the user SHALL NOT be able to toggle it

### Requirement: Checkbox interaction and accessibility

The system SHALL make every enabled checkbox toggleable via click and
keyboard, with the visually-hidden native input kept for accessibility
(documentedly deviating from the source's `display: none` input).

#### Scenario: Toggle by click and keyboard

- **GIVEN** an enabled checkbox row ("First checkbox" / "Second checkbox")
- **WHEN** the user clicks the label or indicator
- **THEN** the checkbox SHALL toggle between checked and unchecked, and the
  indicator SHALL switch between the pink checked style and the grey
  unchecked style (0.3s transition)
- **WHEN** the user focuses the hidden input and presses Space
- **THEN** the checkbox SHALL toggle between checked and unchecked
- **WHEN** the user attempts to toggle a disabled row
- **THEN** the checkbox SHALL NOT change state

#### Scenario: Accessible control

- **GIVEN** the checkbox list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each checkbox SHALL be exposed as a checkbox control with an
  accessible name equal to its label text (visually-hidden native input
  inside the label, keyboard-focusable, visually replaced by the indicator)

### Requirement: Page composition

The system SHALL compose the demo block and a minimal footer in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Quintet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo block in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Quintet — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh quintet` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (`.content` → centered container →
      `col-lg-3` narrow column: "Checkbox #5" heading + four-state list)
- [ ] Design tokens in `@theme`: checked `#e13a9d` (hot pink), unchecked
      border `#ccc`, disabled opacity 0.4, disabled label grey; page bg
      `#fff`
- [ ] Font: Roboto (system stack) via Google Fonts
- [ ] Checkbox anatomy: 16×16px indicator, 2px border, 24px left padding,
      18px-ish label, 0.3s transition; tick = pure-CSS L-shape (10px,
      rotate 45°, right+bottom borders, no icon glyph)
- [ ] Four rows in order: First checkbox (checked), Second checkbox
      (unchecked), Disabled, Disabled & checked; heading copy "Checkbox #5"
      kept verbatim from the reference
- [ ] Disabled rows cannot toggle; enabled rows toggle by click and Space
- [ ] Accessible: visually-hidden native input + label (accessible name =
      label text, keyboard-focusable — source's `display: none` input
      deviated from for a11y, documented above)
- [ ] No copied assets, no icon library needed (CSS border tick)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 745 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
