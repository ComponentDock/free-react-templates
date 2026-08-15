# Template: Tickwell (Bootstrap Checkbox / Notification Filter Pills)

## Purpose

Tickwell is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 05"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-05/), built under a
DIFFERENT name (**Tickwell** — a checkbox you tick, and "well" evoking the
pill-shaped tags; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a light `#fafafa` page with a
centered black heading "Checkbox #05", then a narrow centered column holding
three white pill-tag checkboxes — **News** (200), **Direct Message** (234),
**Followers** (1,189) — each with a pale-yellow count badge and a round status
icon at the right end (a hollow circle when unchecked; the whole pill flips to
a vivid magenta `#c400c6` fill with a white check-circle icon when checked).
This is a notification-filter pick-list variant — the fifth of the
"Bootstrap Checkboxes (20)" series.

> NAMING NOTE: the ColorLib source name "Checkbox 05" is FORBIDDEN as the app
> name. **Tickwell** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 05" — the fifth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 735 — mark that line `[x]`
  when done; single row). Sibling items Checkbox 01/02/03/04 were prepped as
  Tickbox / Picks / Ticktag / Checkly; each item in the series is a DIFFERENT
  design variant (this one is the notification-filter pill variant with count
  badges and a magenta checked state — NOT the Tickbox six-variant design,
  NOT the Checkly mint sports-card design).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-05/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-05/`
  (HTTP 200, 8.1 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~221 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-05/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (the status icons are
  FontAwesome glyphs `\f1db` circle-thin / `\f058` check-circle). Google
  Font **Poppins** (300–500+, @font-face in the head). Cross-checked against
  the TEMPLATES.md screenshot (`checkbox-05.jpg`, 1200×972,
  browser-verified 2026-08-15) — all match. The demo brands itself "Checkbox
  #05"; the recreation uses the NEW name **Tickwell**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a `#fafafa` background. Centered black 28px heading "Checkbox
  #05", then a narrow (col-md-4 ≈ 350px) centered column with a plain list of
  three white pill-tag labels (bg `rgba(255,255,255,0.9)`, text
  `rgba(0,0,0,0.8)`, 18px, 4px radius, 10px 20px padding, 10px gap, hairline
  border `rgba(0,0,0,0.1)`): **News** with badge **200**, **Direct Message**
  with badge **234**, **Followers** with badge **1,189**. Each pill has a
  hollow-circle icon at its right end (light gray, `rgba(0,0,0,0.2)`). The
  badges are pale-yellow pills (`#f9e090`, white 12px text, 30px pill radius)
  right after the label text. The screenshot shows all three pills
  UNCHECKED (the static shot never shows the magenta state — the `#c400c6`
  checked fill is interactive-only, captured from the CSS). No navbar, no
  footer, no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #05" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column) → `ul.ks-cboxtags` (list-style none, padding 20px) → three `li`
     items, each:
     - `<input type="checkbox" id="checkboxOne|Two|Three">` (hidden:
       position absolute, opacity 0; NONE have `checked` — all three pills
       start unchecked, unlike Checkbox 04)
     - `<label for="checkboxOne|Two|Three">` — the white pill; text label
       ("News" / "Direct Message" / "Followers") + `<span>` count badge
       ("200" / "234" / "1,189"); `::before` holds the status icon
       (FontAwesome 24px, absolutely positioned at the right end of the
       pill, `right: 40px`, margin-top -5px; unchecked `\f1db` color
       `rgba(0,0,0,0.2)`, checked `\f058` color `#fff`), 0.3s transition
       (honors `prefers-reduced-motion`).
       The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** plain Bootstrap/native checkboxes — clicking
  the label toggles the hidden input; the `:checked + label::before` CSS
  selector swaps the icon glyph and color, and `:checked + label` swaps the
  pill background/border/text color, with a 0.3s transition. Recreate with
  React state: one `checked` state per pill (default: all false), clicking a
  pill toggles it, and the icon swaps between `Circle` (unchecked) and
  `CircleCheck` (checked) with `transition-colors`.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#fafafa` — page background (`body { background: #fafafa }`).
  - `#c400c6` — vivid magenta/purple, THE brand accent, interactive-only: the
    CHECKED pill background + border (`input:checked + label { border: 1px
solid #c400c6; background-color: #c400c6; color: #fff }`) and the checked
    icon color (`input:checked + label::before { color: #fff }` — white
    check-circle ON the magenta fill).
  - `#f9e090` — pale yellow, the count badge background (`label span {
background: #f9e090 }`).
  - `rgba(255,255,255,0.9)` — pill label background (unchecked).
  - `rgba(0,0,0,0.1)` — pill hairline border (unchecked).
  - `rgba(0,0,0,0.8)` — pill label text (unchecked).
  - `rgba(0,0,0,0.2)` — unchecked icon color (hollow circle).
  - `#000000` — page heading (`.heading-section`, 28px).
  - `#ffffff` — badge text + checked-pill text + checked icon.
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #05" 28px; pill
  labels 18px; badge text 12px.
- **Buttons/pills:** label-as-pill: display block, background
  `rgba(255,255,255,0.9)`, border 1px solid `rgba(0,0,0,0.1)`, text
  `rgba(0,0,0,0.8)`, 18px, border-radius 4px, padding 10px 20px, margin 0 0
  10px 0 (10px vertical gap between pills), cursor pointer, user-select none,
  transition all 0.2s (icon swap 0.3s).
- **Count badge:** `<span>` inside label — background `#f9e090`, font-size
  12px, padding 2px 5px, border-radius 30px (pill), color `#fff`,
  margin-left 10px. Checked state: background `#fff`, color `#000`.
- **Radii:** pills `border-radius: 4px`; badges `border-radius: 30px` (pill).
- **Shadows:** none (flat design — pills and badges have no shadow).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5 pb-md-4`
  (3rem + 1.5rem); list `ul.ks-cboxtags` padding 20px; pill margin-bottom
  10px; centered column `col-md-4` (~350px, centered).
- **Icons (FontAwesome → lucide-react):** unchecked `\f1db` (circle-thin) →
  lucide `Circle`; checked `\f058` (check-circle) → lucide `CircleCheck`
  (current canonical name; older alias `CheckCircle` may also exist — probe
  `node -e "console.log(typeof require('lucide-react').CircleCheck)"`
  before importing, per the lucide-rename pitfall). 24px, stroke-width ~2,
  color per state, 0.3s transition. The original's FontAwesome icon font is
  NOT copied.
- **No images** in this template — pure typography/cards, so no picsum seeds
  are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #05" on a light `#fafafa` background.

#### Scenario: Section and heading

- **GIVEN** the Tickwell page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #05" in black
  (28px) on the light `#fafafa` background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Notification-filter pill list

The system SHALL render three white pill-tag checkboxes — News (200),
Direct Message (234), Followers (1,189) — stacked vertically with a 10px gap,
ALL unchecked by default.

#### Scenario: Default states

- **GIVEN** the Tickwell page is rendered
- **WHEN** the user views the centered column
- **THEN** the column SHALL list three pills: "News", "Direct Message",
  "Followers", each a white pill (`rgba(255,255,255,0.9)` background, hairline
  border `rgba(0,0,0,0.1)`, `rgba(0,0,0,0.8)` 18px text, 4px radius, 10px 20px
  padding)
- **AND** each pill SHALL show its count badge after the label text: 200,
  234, 1,189
- **AND** all three pills SHALL be UNCHECKED — each icon SHALL be a hollow
  circle in `rgba(0,0,0,0.2)` at the right end of the pill

#### Scenario: Count badges

- **GIVEN** a pill with a count is rendered
- **WHEN** the user views the pill
- **THEN** the count SHALL be displayed in a pale-yellow pill badge
  (`#f9e090` background, white 12px text, 30px radius, ~2px 5px padding,
  margin-left 10px) immediately after the label text

### Requirement: Toggle interaction

Each pill SHALL be a label wrapping a real (visually hidden) checkbox input;
activating a pill toggles its checked state and swaps the pill and icon
styling.

#### Scenario: Click checks a pill

- **GIVEN** a pill is unchecked (hollow circle icon, white background)
- **WHEN** the user clicks the pill (its label)
- **THEN** the pill SHALL become checked — the hidden input SHALL be checked,
  the pill SHALL flip to the magenta `#c400c6` background with a 1px
  `#c400c6` border and white text, and the icon SHALL swap from hollow
  `Circle` to filled `CircleCheck` in white, with a 0.2–0.3s transition
- **AND** the count badge SHALL flip to a white background with black text
- **AND** clicking the checked pill again SHALL uncheck it, restoring the
  white pill, hollow circle icon, yellow badge and dark text (toggle
  semantics)

#### Scenario: Keyboard accessibility

- **GIVEN** a pill is rendered
- **WHEN** the user focuses the hidden checkbox input (Tab) and presses
  Space/Enter
- **THEN** the pill SHALL toggle the same way as a click
- **AND** each input SHALL be accessible by its label text (real
  `<input type="checkbox">` inside a `<label>`, visually hidden per the
  reference pattern — absolute, opacity 0)

### Requirement: Responsive behavior

The system SHALL adapt the centered column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Tickwell page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the pill list SHALL fill the viewport width (the `col-md-4`
  centering collapses to full width)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Tickwell page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-tickwell`
- [ ] `scripts/verify-app.sh tickwell` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #05"
      → 3 pill tags with count badges (News 200, Direct Message 234,
      Followers 1,189 — all unchecked, 10px gap) → minimal Component Dock
      footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#c400c6` magenta checked state (bg + border + icon), `#f9e090` badge,
      `rgba(255,255,255,0.9)` pill bg, `rgba(0,0,0,0.8)` pill text,
      `rgba(0,0,0,0.1)` pill border, `#000` heading, white checked text/badge
      flip; radii 4px (pill) + 30px (badge)
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Tickwell — Notification Filter Pills"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`Circle`/`CircleCheck` — probe `CircleCheck` export) —
      no copied assets
- [ ] Real hidden `<input type="checkbox">` inside each label (keyboard
      focusable + screen-reader friendly); toggle swaps pill bg/border/text +
      icon + badge colors with a 0.2–0.3s transition
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 05" row, line 735 —
      Bootstrap Checkboxes category)
