# Template: Moodly (Bootstrap Checkbox / Mood Toggle)

## Purpose

Moodly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 10"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-10/), built under a
DIFFERENT name (**Moodly** — "mood" + the "-ly" suffix used across this
Checkbox series; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a tiny, self-contained demo: a near-white `#fafafa` page with a
centered black heading "Checkbox #10" and a narrow centered column containing a
single custom checkbox widget — a big 100px smiley-face icon with a 20px
"mood word" label beneath it. The demo loads CHECKED (the live DOM carries
`checked="checked"`): a golden-yellow `#f1bc31` smiley (FontAwesome `\f118`
fa-smile-o) with the word "happy" underneath, also in `#f1bc31`. Clicking
toggles to the UNCHECKED state: the icon flips to a slate-blue-gray `#6c7b95`
frown (FontAwesome `\f119` fa-frown-o) with the word "sad" beneath it, and
clicking again spins the icon back to the yellow smiley with a -360deg
rotation, all on a 0.3s ease transition. This is the happy/sad mood-toggle
variant — the tenth of the "Bootstrap Checkboxes (20)" series.

> NAMING NOTE: the ColorLib source name "Checkbox 10" is FORBIDDEN as the app
> name. **Moodly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 10" — the tenth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 740 — mark that line `[x]`
  when done; single row, no duplicates). Sibling items Checkbox 01–09 were
  prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly / Soluna / Taskly; each item in the series is a DIFFERENT design
  variant (this one is the happy/sad MOOD-TOGGLE variant with a big smiley
  icon — NOT the Taskly strikethrough task-checklist variant, NOT the Soluna
  day/night switch variant, NOT the Toggly pink switch variant).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-10/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-10/`
  (HTTP 200, 7.8 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~221 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-10/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (loaded in the head —
  **USED on this page**: the mood icons are font-awesome glyphs `\f118`
  fa-smile-o (smiley) and `\f119` fa-frown-o (frown)). Google Font
  **Poppins** (300–500, @font-face in the head). Cross-checked against the
  TEMPLATES.md screenshot (`checkbox-10.jpg`, 1200×972, browser-verified
  2026-08-15) — the screenshot shows the CHECKED state (yellow smiley +
  "happy" label), which matches the live DOM's default `checked` attribute.
  The demo brands itself "Checkbox #10"; the recreation uses the NEW name
  **Moodly**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a near-white **`#fafafa`** background (the custom ftco `body`
  override; renders visually white in the screenshot). Centered black 28px
  heading "Checkbox #10" (`.heading-section`, `mb-5` = 3rem bottom margin;
  NOTE: no sub-heading/small label in this variant — the demo HTML has no
  `small` element), then a narrow (col-md-4 ≈ 350px) centered column
  (`row.justify-content-center` + `div.wrap.d-flex.justify-content-center`)
  containing ONE `label.checkbox-wrap` with a visually-hidden checked
  `<input type="checkbox">`, an empty `<p>` (the mood-word slot, 85px wide,
  centered) and a `span.checkmark` (the icon slot). The screenshot confirms:
  white page, black centered heading, a big thin-outline smiley in
  golden-yellow `#f1bc31` with the word "happy" (also `#f1bc31`, 20px, weight 500) beneath it, generous whitespace, nothing else. No navbar, no footer,
  no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #10" (28px, `#000`, centered, margin-bottom 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column, no text-center) → `div.wrap.d-flex.justify-content-center`
     (flex container centering the widget horizontally):
  4. `label.checkbox-wrap` (display block, position relative, cursor
     pointer) containing `<input type="checkbox" checked>` (absolute,
     opacity 0, 0×0) + `<p></p>` (85px wide, centered — the "sad"/"happy"
     mood-word slot via `::before` content) + `<span class="checkmark">`
     (absolute top:0 left:0 — the big icon slot via `::after` content).
     The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none beyond the native checkbox — `js/main.js`
  is only an unused full-height helper (`.js-fullheight`, no such element on
  this page). Clicking the label toggles the hidden native input; the
  `input:checked ~ .checkmark:after` / `input:checked + p:before` CSS
  selectors flip the icon glyph (`\f119` frown → `\f118` smile), its color
  (`#6c7b95` → `#f1bc31`), the word content ('sad' → 'happy') and the word
  color, with a 0.3s ease transition and a `rotate(-360deg)` spin on the
  checked icon. Recreate with React state: one `checked` state (default
  true, matching the live DOM), clicking toggles it, styling flips via
  Tailwind conditional classes with the reference's 0.3s transition + the
  -360deg rotate animation on the checked icon.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#f1bc31` — golden yellow, THE brand accent: the CHECKED mood icon
    (`input:checked ~ .checkmark:after { color: #f1bc31 }`), the CHECKED
    mood word (`input:checked + p:before { color: #f1bc31 }`), AND the page
    link color (`a { color: #f1bc31 }`).
  - `#6c7b95` — slate blue-gray, the UNCHECKED state: mood icon
    (`.checkmark:after { color: #6c7b95 }`) and mood word
    (`.checkbox-wrap p:before { color: #6c7b95 }`).
  - `#000000` — the page heading (`.heading-section`, 28px) and all
    headings (h1–h6 `color: #000`).
  - `#fafafa` — page background (`body { background: #fafafa }` — near-white,
    the custom ftco override).
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #10" 28px;
  mood word 20px weight 500; `.checkbox-wrap` base font-size 16px.
- **Widget anatomy (`.checkbox-wrap`, from the CSS):**
  - `label.checkbox-wrap`: `display: block; position: relative;
margin-bottom: 12px; cursor: pointer; font-size: 16px; user-select:
none` — the whole widget is one clickable label.
  - `input[type="checkbox"]`: `position: absolute; opacity: 0; cursor:
pointer; height: 0; width: 0` (visually hidden, still focusable and
    label-wired).
  - `.checkmark` (icon slot): `position: absolute; top: 0; left: 0`; its
    `::after` holds the glyph: content `\f119` (fa-frown-o), `font-family:
"FontAwesome"`, `color: #6c7b95`, `font-size: 100px`, `margin-top: -4px`,
    `transition: 0.3s` (all states).
  - CHECKED (`input:checked ~ .checkmark:after`): content `\f118`
    (fa-smile-o), `color: #f1bc31`, `transform: rotate(-360deg)` (the icon
    spins in as it turns yellow).
  - `p` (mood-word slot): `position: relative; text-align: center; width:
85px`; its `::before` holds the word: content 'sad', `color: #6c7b95`,
    `font-weight: 500; font-size: 20px`, `transition: 0.3s`.
  - CHECKED (`input:checked + p:before`): content 'happy', `color: #f1bc31`.
  - `@media (prefers-reduced-motion: reduce)`: the 0.3s transitions are
    suppressed (state still flips).
- **Radii:** none — this variant has no boxes/buttons, only the round icon
  glyphs (smiley/frown are circular 100px font glyphs).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5` (3rem
  bottom margin); centered column `col-md-4` (~350px, centered via
  `justify-content-center` + the wrap's `d-flex justify-content-center`);
  mood-word slot 85px wide, centered; `margin-bottom: 12px` under the label.
- **Icons:** the mood icons are font-awesome 4.7 glyphs (`\f118` fa-smile-o,
  `\f119` fa-frown-o) rendered at 100px. Per repo convention use
  lucide-react `Smile` and `Frown` icons at ~100px — NOT font-awesome (both
  exports exist in current lucide-react; verify with the typeof probe before
  shipping).
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #10" on a near-white `#fafafa` background.

#### Scenario: Section and heading

- **GIVEN** the Moodly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #10" in black
  (28px) on the near-white `#fafafa` background
- **AND** the heading SHALL carry a ≈3rem bottom margin (the reference's
  `mb-5`)
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Mood toggle widget

The system SHALL render a single mood-toggle widget: a big 100px smiley/frown
icon with a 20px mood word beneath it, wrapped in one clickable label that
hides a real checkbox input. The widget SHALL be CHECKED by default (yellow
smiley + "happy"), matching the live reference DOM's `checked` attribute.

#### Scenario: Default (checked) state

- **GIVEN** the Moodly page is rendered
- **WHEN** the user views the centered column
- **THEN** a single widget SHALL be centered horizontally
- **AND** the widget SHALL show a large golden-yellow `#f1bc31` smiley icon
  (≈100px)
- **AND** the word "happy" SHALL appear beneath the icon in `#f1bc31`
  (20px, weight 500)
- **AND** the hidden checkbox input SHALL be checked

### Requirement: Toggle interaction

Activating the widget (click or keyboard) SHALL toggle the checked state and
flip the icon glyph + color and the mood word + color with the reference
0.3s transition; checking SHALL spin the icon in with the reference -360deg
rotation.

#### Scenario: Click toggles the mood

- **GIVEN** the widget is checked (yellow smiley + "happy")
- **WHEN** the user clicks the widget (its label)
- **THEN** the widget SHALL become unchecked — the icon SHALL swap to a
  slate-blue-gray `#6c7b95` frown and the word SHALL flip to "sad" in
  `#6c7b95`, with the reference 0.3s ease transition
- **AND** clicking again SHALL check it — the icon SHALL swap back to the
  golden-yellow `#f1bc31` smiley (with the -360deg rotate spin-in) and the
  word SHALL flip back to "happy" in `#f1bc31` (toggle semantics)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** the widget is toggled
- **THEN** the state change SHALL still occur (icon glyph, colors and mood
  word flip instantly) with the transitions and rotation suppressed

### Requirement: Keyboard accessibility

The widget SHALL expose a real, focusable, visually-hidden checkbox input
wired to its visible label, so the toggle works from the keyboard and is
screen-reader friendly.

#### Scenario: Keyboard toggle

- **GIVEN** the widget is rendered
- **WHEN** the user focuses the hidden checkbox input (Tab) and presses
  Space/Enter
- **THEN** the widget SHALL toggle the same way as a click
- **AND** the input SHALL carry an accessible name (the visible mood word
  "happy"/"sad" names the control — the reference label has the `<p>` word
  as its text, so the visible text association is enough; add an
  `aria-label` only if the word swap leaves the input unnamed)
- **AND** a visible focus indicator (focus-visible ring) SHALL be shown on
  the widget when the input is focused (repo accessibility convention; the
  reference has none)

### Requirement: Responsive behavior

The system SHALL adapt the centered column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Moodly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the widget column SHALL fill the viewport width (the `col-md-4`
  centering collapses to full width)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Moodly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-moodly`
- [ ] `scripts/verify-app.sh moodly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #10"
      (28px, `#000`, 3rem bottom margin) → single centered mood widget
      (≈100px icon + 20px mood word, checked by default) → minimal Component
      Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#f1bc31` golden-yellow accent (checked icon + word + link color),
      `#6c7b95` slate-blue-gray unchecked icon + word, `#000` heading
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Moodly — Mood Toggle" (or similar)
- [ ] Mood icons: lucide-react `Smile` (checked) and `Frown` (unchecked) at
      ≈100px — NOT font-awesome (repo convention); probe both exports with
      the typeof check before shipping; no copied assets
- [ ] No images (pure CSS widget — faithful); no picsum seeds needed
- [ ] Real hidden `<input type="checkbox">` (opacity-0, 0×0, focusable +
      label-associated); default CHECKED (matches live DOM); click + keyboard
      toggle flips icon glyph + color + mood word ("happy" ↔ "sad") with the
      reference 0.3s transition and the -360deg rotate spin-in on check;
      honors `prefers-reduced-motion`
- [ ] NO strikethrough/task rows (that is the Taskly sibling), NO day/night
      switch (Soluna), NO pink switch (Toggly) — this variant is the
      happy/sad mood toggle with the 100px smiley
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 10" row, line 740 —
      Bootstrap Checkboxes category, single row)
