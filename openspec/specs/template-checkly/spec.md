# Template: Checkly (Bootstrap Checkbox / Sports Pick List)

## Purpose

Checkly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 04"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-04/), built under a
DIFFERENT name (**Checkly** — a checkbox you tick; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a light-gray page with a centered
black heading "Checkbox #04", then a narrow centered column holding a mint-teal
card titled "Choose your sports" with three white pill-tag checkboxes
(Volleyball checked by default; Swimming and Surfing unchecked). Each pill
shows its label text plus a round status icon at the right end — a hollow
circle when unchecked, a filled check-circle in the card's mint color when
checked.

> NAMING NOTE: the ColorLib source name "Checkbox 04" is FORBIDDEN as the app
> name. **Checkly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 04" — the fourth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 734 — mark that line `[x]`
  when done). Sibling items Checkbox 01/02/03 were prepped as Tickbox / Picks
  / Ticktag; each item in the series is a DIFFERENT design variant (this one
  is the sports tag-pill variant, NOT the Tickbox six-variant design).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-04/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-04/`
  (HTTP 200, 8.2 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~221 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-04/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (the pill status icons
  are FontAwesome glyphs `\f1db` circle-thin / `\f058` check-circle). Google
  Font **Poppins** (300–900, @font-face in the head). Cross-checked against
  the TEMPLATES.md screenshot (`checkbox-04.jpg`, 1200×972,
  browser-verified 2026-08-15) — all match. The demo brands itself "Checkbox
  #04"; the recreation uses the NEW name **Checkly**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a `#fafafa` background. Centered black 28px heading "Checkbox
  #04", then a narrow (col-md-4 ≈ 350px) centered column with a mint-teal
  card (`#7ecfc0`, 4px radius, 30px padding) titled "Choose your sports" in
  white 24px. Inside, a list of three white pill-tag labels
  (bg `rgba(255,255,255,0.9)`, text `#333333`, 18px, 4px radius, 10px 20px
  padding, 10px gap): **Volleyball** (checked — green mint check-circle icon),
  **Swimming** (unchecked — light-gray hollow circle icon), **Surfing**
  (unchecked — same). Icons sit at the right end of each pill; the checked
  icon is the only colored element besides the card. No navbar, no footer,
  no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #04" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column) → `div.wrap.w-100` (mint card) →
     `div.heading-title.mb-4.text-center` → `h3` "Choose your sports" (24px,
     `#fff`, centered) → `ul.ks-cboxtags.p-0.m-0` (list-style none, padding
     20px) → three `li` items, each:
     - `<input type="checkbox" id="checkboxOne|Two|Three" checked?>`
       (hidden: position absolute, opacity 0; only the first — Volleyball —
       has `checked`)
     - `<label for="checkboxOne|Two|Three">` — the white pill; `::before`
       holds the status icon (FontAwesome 24px, absolutely positioned at the
       right end of the pill, margin-top -5px; unchecked `\f1db` color
       `rgba(0,0,0,0.2)`, checked `\f058` color `#7ecfc0`), 0.3s transition
       (honors `prefers-reduced-motion`).
       The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** plain Bootstrap/native checkboxes — clicking
  the label toggles the hidden input; the `:checked + label::before` CSS
  selector swaps the icon glyph and color with a 0.3s transition. Recreate
  with React state: one `checked` state per pill (default: Volleyball true),
  clicking a pill toggles it, and the icon swaps between `Circle`
  (unchecked) and `CircleCheck` (checked) with `transition-colors`.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#fafafa` — page background (`body { background: #fafafa }`).
  - `#7ecfc0` — mint/seafoam teal, THE brand accent: the card background
    (`.wrap { background: #7ecfc0 }`) AND the checked icon color
    (`input:checked + label::before { color: #7ecfc0 }`).
  - `#ffffff`/`rgba(255,255,255,0.9)` — pill label background
    (`ul.ks-cboxtags li label { background-color: rgba(255,255,255,0.9) }`).
  - `#333333` — pill label text (`color: #333333`).
  - `#000000` — page heading (`.heading-section`, 28px).
  - `#ffffff` — card title (`.heading-title h3 { color: #fff }`).
  - `rgba(0,0,0,0.2)` — unchecked icon color (hollow circle).
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–900). Heading "Checkbox #04" 28px; card
  title "Choose your sports" 24px; pill labels 18px.
- **Buttons/pills:** label-as-pill: display block, background
  `rgba(255,255,255,0.9)`, `#333333` text, 18px, border-radius 4px, padding
  10px 20px, margin 0 0 10px 0 (10px vertical gap between pills), cursor
  pointer, user-select none, transition all 0.3s.
- **Radii:** card `border-radius: 4px`; pills `border-radius: 4px`; no pill
  buttons beyond the tags.
- **Shadows:** none (flat design — card and pills have no shadow).
- **Spacing rhythm:** section padding `7em 0`; heading `mb-5 pb-md-4`
  (3rem + 1.5rem); card `.wrap` padding 30px; card title `mb-4` (1.5rem),
  text-center; list `ul.ks-cboxtags` padding 20px; pill margin-bottom 10px;
  centered column `col-md-4` (~350px, centered).
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
heading "Checkbox #04" on a light `#fafafa` background.

#### Scenario: Section and heading

- **GIVEN** the Checkly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #04" in black
  (28px) on the light `#fafafa` background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Sport card

The system SHALL render a mint-teal card titled "Choose your sports" inside
the centered column.

#### Scenario: Card anatomy

- **GIVEN** the Checkly page is rendered
- **WHEN** the user views the centered column
- **THEN** a card SHALL be displayed with background `#7ecfc0`, border-radius
  4px, and ~30px padding
- **AND** the card SHALL show a centered white heading "Choose your sports"
  (24px) above the checkbox list

### Requirement: Checkbox pill list

The system SHALL render three white pill-tag checkboxes — Volleyball
(checked by default), Swimming (unchecked), Surfing (unchecked) — stacked
vertically with a 10px gap.

#### Scenario: Default states

- **GIVEN** the Checkly page is rendered
- **WHEN** the user views the card
- **THEN** the card SHALL list three pills: "Volleyball", "Swimming",
  "Surfing", each a white pill (`rgba(255,255,255,0.9)` background,
  `#333333` 18px text, 4px radius, 10px 20px padding)
- **AND** the "Volleyball" pill SHALL be CHECKED — its icon SHALL be a filled
  check-circle in `#7ecfc0`
- **AND** the "Swimming" and "Surfing" pills SHALL be UNCHECKED — each icon
  SHALL be a hollow circle in `rgba(0,0,0,0.2)`

### Requirement: Toggle interaction

Each pill SHALL be a label wrapping a real (visually hidden) checkbox input;
activating a pill toggles its checked state and swaps its icon.

#### Scenario: Click toggles a pill

- **GIVEN** a pill is unchecked
- **WHEN** the user clicks the pill (its label)
- **THEN** the pill SHALL become checked — the hidden input SHALL be checked
  and the icon SHALL swap from hollow `Circle` to filled `CircleCheck` in
  `#7ecfc0` with a 0.3s transition
- **AND** clicking a checked pill SHALL uncheck it again (toggle semantics)

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

- **GIVEN** the Checkly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the card SHALL fill the viewport width (the `col-md-4` centering
  collapses to full width)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Checkly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-checkly`
- [ ] `scripts/verify-app.sh checkly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #04"
      → mint `#7ecfc0` card (4px radius, 30px padding) → centered white title
      "Choose your sports" → 3 pill tags (Volleyball checked, Swimming +
      Surfing unchecked, 10px gap) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#7ecfc0` card + checked icon, `rgba(255,255,255,0.9)` pill bg,
      `#333333` pill text, `#000` heading, `#fff` card title,
      `rgba(0,0,0,0.2)` unchecked icon; radii 4px
- [ ] Font: Poppins (300–900) via Google Fonts `<link>` in `index.html`;
      title "Checkly — Sports Pick List"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`Circle`/`CircleCheck` — probe `CircleCheck` export) —
      no copied assets
- [ ] Real hidden `<input type="checkbox">` inside each label (keyboard
      focusable + screen-reader friendly); toggle swaps icon + color with a
      0.3s transition
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 04" row, line 734 —
      Bootstrap Checkboxes category)
