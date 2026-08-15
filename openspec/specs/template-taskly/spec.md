# Template: Taskly (Bootstrap Checkbox / Task Checklist)

## Purpose

Taskly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 09"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-09/), built under a
DIFFERENT name (**Taskly** — "task" + the "-ly" suffix used across this
Checkbox series; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a tiny, self-contained demo: a white `#fff` page with a
centered black heading "Checkbox #09" and a narrow centered column containing
a 3-item checklist ("ks-cboxtags" variant): three block rows ("Task One",
"Task Two", "Task Three"), each a white-ish pill (`rgba(255,255,255,0.9)`
background, 1px `rgba(0,0,0,0.1)` border, 4px radius, 18px Poppins text) with
a 24px circular status icon pinned at the row's right edge. The FIRST row is
CHECKED by default: green `#52de97` solid check-circle icon (`fa-check-circle`
`\f058`), light-mint `#7de6b1` border, `#bfbfbf` faded text with a
line-through strikethrough (completed-task look). The other two rows are
UNCHECKED: empty gray circle outline (`fa-circle-thin` `\f1db` in
`rgba(0,0,0,0.2)`), `rgba(0,0,0,0.1)` border, `#333333` dark text. Clicking a
row toggles it: border + icon color + strikethrough + text color flip with a
0.2s `all` transition. This is the task-checklist variant — the ninth of the
"Bootstrap Checkboxes (20)" series.

> NAMING NOTE: the ColorLib source name "Checkbox 09" is FORBIDDEN as the app
> name. **Taskly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 09" — the ninth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 739 — mark that line `[x]`
  when done; single row, no duplicates). Sibling items Checkbox 01–08 were
  prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna; each item in the series is a DIFFERENT design variant
  (this one is the ks-cboxtags TASK-CHECKLIST variant with strikethrough —
  NOT the Soluna day/night switch variant, NOT the Toggly pink switch
  variant, NOT the Tickwell notification-filter pill variant).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-09/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-09/`
  (HTTP 200, 8.1 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~222 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-09/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (loaded in the head —
  **USED on this page**: the status icons are font-awesome glyphs `\f1db`
  fa-circle-thin (empty circle) and `\f058` fa-check-circle (solid check
  circle)). Google Font **Poppins** (300–500, @font-face in the head).
  Cross-checked against the TEMPLATES.md screenshot (`checkbox-09.jpg`,
  1200×972, browser-verified 2026-08-15) and a LIVE browser render of the
  preview (verified 2026-08-15) — all match. The demo brands itself
  "Checkbox #09"; the recreation uses the NEW name **Taskly**.
- **Visual design (from DOM + CSS tokens + screenshot + live render):**
  clean, minimalist demo page on a **white `#fff`** background (`body {
background: #fff }` — same as the Soluna/checkbox-08 sibling). Centered
  black 28px heading "Checkbox #09" (`.heading-section`, `mb-5` = 3rem
  bottom margin; NOTE: NO sub-heading/small label in this variant — the
  Soluna sibling's "Day & Night Switch Toggle" line does NOT exist here),
  then a narrow (col-md-4 ≈ 350px) centered column containing `ul.ks-cboxtags`
  with THREE stacked block rows, each a full-width rounded pill:
  1. `#checkboxOne` + label "Task One" — CHECKED (live DOM carries the
     `checked` attribute): light-mint `#7de6b1` border, faded `#bfbfbf` text
     with line-through strikethrough, solid green `#52de97` circle-with-check
     at the right.
  2. `#checkboxTwo` + label "Task Two" — UNCHECKED: light-gray
     `rgba(0,0,0,0.1)` border, dark `#333333` text, empty gray
     `rgba(0,0,0,0.2)` circle outline at the right.
  3. `#checkboxThree` + label "Task Three" — UNCHECKED (identical styling;
     note the source's `value="Order Two"` typo duplicated on items 2–3 —
     the `value` is irrelevant to the visual; labels are Task One/Two/Three).
     The screenshot confirms: white page, black heading, three stacked rounded
     rows, top row faded/struck-through with a solid green check circle, lower
     two rows with empty gray circle outlines. The live render confirms the
     checked row's mint border + strikethrough + green check icon, and gray
     borders + gray outline circles on the unchecked rows. No navbar, no
     footer, no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #09" (28px, `#000`, centered, margin-bottom 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column, NO text-center here) → `ul.ks-cboxtags` (list-style none,
     padding 20px):
  4. 3 × `li` (display block) → `<input type="checkbox" id="checkboxOne"
value="Order one" checked>` + `<label for="checkboxOne">Task One</label>`
     (and checkboxTwo/Task Two, checkboxThree/Task Three, both unchecked).
     The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none beyond native checkboxes — `js/main.js`
  is only an unused full-height helper (`.js-fullheight`, no such element on
  this page). Clicking a row toggles its hidden native input; the
  `input[type="checkbox"]:checked + label` CSS selectors flip the label's
  border (`rgba(0,0,0,0.1)` → `#7de6b1`), text color (`#333333` →
  `#bfbfbf`), add `text-decoration: line-through`, and swap the `::before`
  icon content (`\f1db` empty circle → `\f058` check-circle in green
  `#52de97`) with a 0.2s `all` ease transition. Recreate with React state:
  one `checked` state per row (default: true for row 1, false for rows 2–3),
  clicking a row toggles it, styling flips via Tailwind conditional classes
  with the reference's 0.2s transition.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#52de97` — vivid green, THE brand accent: the CHECKED row's check
    icon (`:checked + label::before { color: #52de97 }`) AND the page link
    color (`a { color: #52de97 }`).
  - `#7de6b1` — light mint green, the CHECKED row's border
    (`:checked + label { border: 1px solid #7de6b1 }`).
  - `rgba(255, 255, 255, 0.9)` — label/row background (near-white; over the
    `#fff` page this renders white).
  - `rgba(0, 0, 0, 0.1)` — UNCHECKED row border (light gray).
  - `#333333` — row label text (UNCHECKED, dark).
  - `#bfbfbf` — row label text (CHECKED, faded) + line-through.
  - `rgba(0, 0, 0, 0.2)` — UNCHECKED icon color (empty circle outline).
  - `#000000` — the page heading (`.heading-section`, 28px).
  - `#fff` — page background (`body { background: #fff }`).
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #09" 28px; row
  label text 18px.
- **Checklist row anatomy (`.ks-cboxtags`, from the CSS):**
  - `ul.ks-cboxtags`: `list-style: none; padding: 20px`.
  - `li`: `display: block` (rows stack with `margin: 0 0 10px 0` on labels).
  - `label`: `display: block; background-color: rgba(255,255,255,0.9);
border: 1px solid rgba(0,0,0,0.1); color: #333333; font-size: 18px;
border-radius: 4px; white-space: nowrap; margin: 0 0 10px 0;
user-select: none; transition: all .2s; padding: 10px 20px;
cursor: pointer`.
  - icon (`label::before`): font-awesome `\f1db` (fa-circle-thin, empty
    circle outline); `font-size: 24px; color: rgba(0,0,0,0.2); position:
absolute; right: 40px; margin-top: -5px; transition: transform .3s
ease-in-out` (the transform transition is vestigial — nothing transforms;
    the visual swap comes from the content/color change; the label's own
    `all .2s` transition carries the border/color flip). The icon anchors to
    the row's static vertical position (no `top` set) and `right: 40px` of
    the containing block — visually: 24px icon pinned near the right edge of
    each full-width row.
  - CHECKED (`input:checked + label::before`): content `\f058`
    (fa-check-circle), `color: #52de97` (solid green circle + white check).
  - CHECKED (`input:checked + label`): `border: 1px solid #7de6b1;
text-decoration: line-through; color: #bfbfbf` (mint border, struck-out
    faded text).
  - input: `position: absolute; opacity: 0` (visually hidden, still
    focusable/label-wired).
- **Radii:** row `border-radius: 4px` (slightly rounded rectangle — NOT a
  full pill); icons are 24px font glyphs (round check-circle shape).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5` (3rem
  bottom margin); centered column `col-md-4` (~350px, centered, no
  text-center); `ul` padding 20px; rows `margin: 0 0 10px 0` (10px vertical
  gap); row inner padding `10px 20px`.
- **Icons:** the status icons are font-awesome 4.7 glyphs (`\f1db`
  fa-circle-thin empty outline, `\f058` fa-check-circle solid circle with
  check) rendered at 24px. Per repo convention use lucide-react `Circle`
  (empty outline) and `CircleCheck` (solid circle with check; older
  lucide-react exports it as `CheckCircle2`) icons at 24px — NOT
  font-awesome.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #09" on a white `#fff` background.

#### Scenario: Section and heading

- **GIVEN** the Taskly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #09" in black
  (28px) on the white `#fff` background
- **AND** the heading SHALL carry a ≈3rem bottom margin (the reference's
  `mb-5`)
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Task checklist rows

The system SHALL render a 3-item checklist ("Task One", "Task Two",
"Task Three"), each item a full-width rounded row (4px radius, near-white
background, 1px light-gray border, 18px text) with a 24px status icon pinned
at the row's right edge; the FIRST row SHALL be CHECKED by default and the
other two UNCHECKED, matching the live reference DOM.

#### Scenario: Default states

- **GIVEN** the Taskly page is rendered
- **WHEN** the user views the centered column
- **THEN** three checklist rows SHALL be stacked vertically (10px gaps),
  each a full-width block with `padding: 10px 20px`
- **AND** row 1 ("Task One") SHALL be CHECKED — light-mint `#7de6b1` border,
  faded `#bfbfbf` text with line-through strikethrough, and a solid green
  `#52de97` circle-with-check icon (white check) at the right
- **AND** rows 2–3 ("Task Two", "Task Three") SHALL be UNCHECKED —
  `rgba(0,0,0,0.1)` light-gray border, dark `#333333` text (no
  strikethrough), and an empty gray circle outline (`rgba(0,0,0,0.2)`) at
  the right

### Requirement: Toggle interaction

Each row SHALL be a label wrapping a real (visually hidden, `opacity: 0`)
checkbox input; activating a row toggles its checked state and flips the
border, icon, text color and strikethrough with the reference 0.2s
transition.

#### Scenario: Click toggles a row

- **GIVEN** a row is unchecked (gray border, dark text, empty gray circle)
- **WHEN** the user clicks the row (its label)
- **THEN** the row SHALL become checked — the hidden input SHALL be checked,
  the border SHALL flip from `rgba(0,0,0,0.1)` to `#7de6b1`, the text SHALL
  flip from `#333333` to `#bfbfbf` with a line-through, and the icon SHALL
  swap from the empty gray circle to the solid green `#52de97`
  circle-with-check, with the reference 0.2s ease transition
- **AND** clicking the checked row again SHALL uncheck it, restoring the
  gray border, dark unstruck text and empty gray circle (toggle semantics)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** a row is toggled
- **THEN** the state change SHALL still occur (border, icon, text color and
  strikethrough flip instantly) with the transitions suppressed

### Requirement: Keyboard accessibility

Each row SHALL expose a real, focusable, visually-hidden checkbox input wired
to its visible label text, so the toggle works from the keyboard and is
screen-reader friendly.

#### Scenario: Keyboard toggle

- **GIVEN** a row is rendered
- **WHEN** the user focuses the hidden checkbox input (Tab) and presses
  Space/Enter
- **THEN** the row SHALL toggle the same way as a click
- **AND** each input SHALL carry an accessible name from its visible label
  text ("Task One" / "Task Two" / "Task Three" — the reference labels DO
  have text, so no `aria-label` is needed, but the input SHALL be properly
  associated with its label)
- **AND** a visible focus indicator (focus-visible ring) SHALL be shown on
  the row when the input is focused (repo accessibility convention; the
  reference has none)

### Requirement: Responsive behavior

The system SHALL adapt the centered column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Taskly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the checklist column SHALL fill the viewport width (the `col-md-4`
  centering collapses to full width)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Taskly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-taskly`
- [ ] `scripts/verify-app.sh taskly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #09"
      (28px, `#000`, 3rem bottom margin) → 3-item checklist (Task One
      checked/mint+strikethrough+green check, Task Two & Task Three
      unchecked/gray+empty circle, 18px text, 4px radius, 10px gaps, 24px
      right-pinned icons) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fff` page,
      `#52de97` green accent (checked icon + link color), `#7de6b1` checked
      border, `rgba(0,0,0,0.1)` unchecked border, `#333333` unchecked text,
      `#bfbfbf` checked text, `rgba(0,0,0,0.2)` unchecked icon; radius 4px
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Taskly — Task Checklist" (or similar)
- [ ] Status icons: lucide-react `Circle` (empty outline, unchecked) and
      `CircleCheck`/`CheckCircle2` (solid check, checked) at 24px — NOT
      font-awesome (repo convention); no copied assets
- [ ] No images (pure CSS checklist — faithful); no picsum seeds needed
- [ ] Real hidden `<input type="checkbox">` per row (opacity-0,
      focusable + label-associated; no extra `aria-label` needed — visible
      label text names each input); click + keyboard toggle flips border +
      icon + text color + line-through with the reference 0.2s transition;
      honors `prefers-reduced-motion`
- [ ] NO strikethrough/icon-color change on UNCHECKED rows; NO sun/moon
      switch or halo (that is the Soluna/Toggly siblings — this variant is
      the ks-cboxtags task checklist)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 09" row, line 739 —
      Bootstrap Checkboxes category, single row)
