# Template: Toggly (Bootstrap Checkbox / Switch Toggle)

## Purpose

Toggly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 06"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-06/), built under a
DIFFERENT name (**Toggly** — a toggle switch; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a light `#fafafa` page with a
centered black heading "Checkbox #06", a small centered sub-heading "Switch
Toggle", and TWO iOS-style toggle switches stacked vertically — the first
UNCHECKED (light-gray track, white circular knob on the left), the second
CHECKED (pale-pink `#ffe1ed` track, vivid-pink `#ff7bb0` knob slid to the
right). Clicking a switch slides its knob and swaps the track/knob colors with
a springy 0.2s cubic-bezier transition and a brief expanding pink halo puff.
This is the switch-toggle variant — the sixth of the "Bootstrap Checkboxes
(20)" series.

> NAMING NOTE: the ColorLib source name "Checkbox 06" is FORBIDDEN as the app
> name. **Toggly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 06" — the sixth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 736 — mark that line `[x]`
  when done; single row, no duplicates). Sibling items Checkbox 01/02/03/04/05
  were prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell; each item in
  the series is a DIFFERENT design variant (this one is the switch-toggle
  variant — NOT the Tickwell notification-filter pill variant with count
  badges, NOT the Checkly mint sports-card design).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-06/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-06/`
  (HTTP 200, 8.1 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~221 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-06/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (loaded in the head but
  NOT used on this page — the toggle is pure CSS, no icon glyphs). Google
  Font **Poppins** (300–500+, @font-face in the head). Cross-checked against
  the TEMPLATES.md screenshot (`checkbox-06.jpg`, 1200×972,
  browser-verified 2026-08-15) — all match. The demo brands itself "Checkbox
  #06"; the recreation uses the NEW name **Toggly**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a `#fafafa` background. Centered black 28px heading "Checkbox
  #06", then a centered 18px sub-heading "Switch Toggle" in
  `rgba(0,0,0,0.5)`, then a narrow (col-md-4 ≈ 350px) centered column with
  TWO stacked toggle switches, each centered in its own full-width flex row:
  1. `#cbx` — UNCHECKED: `#e6e6e6` track, white 20px circular knob at left.
  2. `#cbx2` — CHECKED (the live DOM carries the `checked` attribute): pale
     pink `#ffe1ed` track, vivid pink `#ff7bb0` knob slid 20px to the right.
     The screenshot (1200×972) confirms: white/`#fafafa` page, black heading,
     gray sub-label, a pill toggle with light-gray track + white thumb in the
     OFF position, and a faint pinkish circular hint near the thumb (the halo).
     No navbar, no footer, no images — pure form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #06" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (≈350px
     centered column) → `h5.heading-section` → `<small>Switch Toggle</small>`
     (18px, `rgba(0,0,0,0.5)`).
  4. Two toggle rows, each `div.w-100.d-flex.justify-content-center` →
     `div.checkbox` → `<input type="checkbox">` (`style="display:none"`) +
     `<label class="toggle"><span></span></label>`:
     - `id="cbx"` — NOT checked (toggle 1).
     - `id="cbx2"` — CHECKED (toggle 2; note the source's malformed
       `style="display:none"/ checked` — the stray `/` is ignored by the
       HTML parser, the `checked` attribute is what counts).
       The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none beyond native checkboxes — `js/main.js`
  is only an unused full-height helper (`.js-fullheight`, no such element on
  this page). Clicking a label toggles the hidden native input; the
  `#cbx:checked + .toggle` / `#cbx2:checked + .toggle` CSS selectors swap the
  track background (`#e6e6e6` → `#ffe1ed`), the knob background + shadow
  (white → `#ff7bb0`, shadow tints pink) and translate the knob
  `translateX(20px)`; the knob's `::before` halo (56px, `rgba(255,123,176,0.5)`)
  puffs from `scale(0)` to `scale(1)` while fading to `opacity: 0` over 0.4s
  (a transient click-ripple on check). Recreate with React state: one
  `checked` state per toggle (default: false for toggle 1, true for toggle 2),
  clicking a switch toggles it, and the knob slides + colors swap via
  Tailwind `transition-*` classes with the reference's timings.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#ff7bb0` — vivid pink/magenta, THE brand accent: the CHECKED knob
    background (`#cbx:checked + .toggle span { background: #ff7bb0 }`) AND the
    page link color (`a { color: #ff7bb0 }`).
  - `#ffe1ed` — pale pink, the CHECKED track background
    (`#cbx:checked + .toggle:before { background: #ffe1ed }`).
  - `#e6e6e6` — light gray, the UNCHECKED track background
    (`.toggle:before { background: #e6e6e6 }`).
  - `#ffffff` — the knob (unchecked; `.toggle span { background: white }`).
  - `#fafafa` — page background (`body { background: #fafafa }`).
  - `#000000` — page heading (`.heading-section`, 28px).
  - `rgba(0,0,0,0.5)` — sub-heading "Switch Toggle" (`.heading-section small`,
    18px).
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #06" 28px;
  sub-heading "Switch Toggle" 18px.
- **Toggle switch anatomy (`.toggle`, from the CSS):**
  - wrapper: `position: relative; display: block; width: 34px; height: 20px;
cursor: pointer`.
  - track (`.toggle:before`): `position: relative; top: 3px; left: 3px;
width: 34px; height: 14px; background: #e6e6e6; border-radius: 8px;
transition: background 0.2s ease`.
  - knob (`.toggle span`): `position: absolute; top: 0; left: 0; width: 20px;
height: 20px; background: white; border-radius: 10px; box-shadow:
0 3px 8px rgba(0,0,0,0.2); transition: all 0.2s ease`.
  - CHECKED (`#cbx:checked + .toggle`): track → `#ffe1ed`; knob →
    `#ff7bb0` + `translateX(20px)` with `transition: all 0.2s
cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease`; knob shadow →
    `0 3px 8px rgba(255,123,176,0.2)`.
  - halo (`.toggle span:before`): `position: absolute; display: block;
margin: -18px; width: 56px; height: 56px; background:
rgba(255,123,176,0.5); border-radius: 50%; transform: scale(0);
opacity: 1; pointer-events: none`; CHECKED → `scale(1); opacity: 0;
transition: all 0.4s ease` (transient pink ripple puff on check).
- **Radii:** track `border-radius: 8px`; knob `border-radius: 10px` (fully
  round circle); halo `border-radius: 50%`.
- **Shadows:** knob `0 3px 8px rgba(0,0,0,0.2)` (unchecked); knob
  `0 3px 8px rgba(255,123,176,0.2)` (checked, pink-tinted).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5 pb-md-4`
  (3rem + 1.5rem); centered column `col-md-4` (~350px, centered); the two
  toggles each sit in their own full-width `d-flex justify-content-center`
  row, stacked vertically (≈30px apart via the row/column padding of the
  reference grid).
- **Icons:** NONE — the toggle is pure CSS (font-awesome 4.7 is loaded by the
  page but unused; no icon glyphs anywhere in this variant, unlike Checkbox
  05's status circles). No lucide icons needed.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #06" on a light `#fafafa` background.

#### Scenario: Section and heading

- **GIVEN** the Toggly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #06" in black
  (28px) on the light `#fafafa` background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Switch Toggle sub-heading

The system SHALL render a small centered sub-heading "Switch Toggle" below the
main heading.

#### Scenario: Sub-heading

- **GIVEN** the Toggly page is rendered
- **WHEN** the user views the centered column
- **THEN** a sub-heading "Switch Toggle" SHALL appear under the main heading
  in 18px `rgba(0,0,0,0.5)` (muted dark gray), centered

### Requirement: Toggle switches

The system SHALL render TWO toggle switches, stacked vertically and centered;
toggle 1 UNCHECKED and toggle 2 CHECKED by default, matching the live
reference DOM.

#### Scenario: Default states

- **GIVEN** the Toggly page is rendered
- **WHEN** the user views the centered column
- **THEN** two toggle switches SHALL be stacked vertically, each centered in
  its own row
- **AND** toggle 1 SHALL be UNCHECKED — a light-gray `#e6e6e6` track
  (34×14px, 8px radius) with a white 20×20px circular knob at the LEFT end
  (soft shadow `0 3px 8px rgba(0,0,0,0.2)`)
- **AND** toggle 2 SHALL be CHECKED — a pale-pink `#ffe1ed` track with a
  vivid-pink `#ff7bb0` knob slid 20px to the RIGHT (pink-tinted shadow
  `0 3px 8px rgba(255,123,176,0.2)`)

### Requirement: Toggle interaction

Each switch SHALL be a label wrapping a real (visually hidden) checkbox input;
activating a switch toggles its checked state and swaps the track/knob
styling with the reference transitions.

#### Scenario: Click toggles a switch

- **GIVEN** a switch is unchecked (gray track, white knob at left)
- **WHEN** the user clicks the switch (its label)
- **THEN** the switch SHALL become checked — the hidden input SHALL be
  checked, the track SHALL flip from `#e6e6e6` to `#ffe1ed`, and the knob
  SHALL flip from white to `#ff7bb0` and slide 20px to the right, with the
  reference timings (knob `0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25)` spring,
  track `0.2s ease`)
- **AND** a pink halo (56px circle, `rgba(255,123,176,0.5)`) SHALL briefly
  puff out behind the knob and fade away (0.4s) — the reference's transient
  click ripple
- **AND** clicking the checked switch again SHALL uncheck it, restoring the
  gray track, white knob at left, and dark shadow (toggle semantics)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** a switch is toggled
- **THEN** the state change SHALL still occur (track/knob colors and knob
  position swap instantly) with the springy slide/halo animations suppressed

### Requirement: Keyboard accessibility

Each switch SHALL expose a real, focusable, hidden checkbox input so the
toggle works from the keyboard and is screen-reader friendly.

#### Scenario: Keyboard toggle

- **GIVEN** a switch is rendered
- **WHEN** the user focuses the hidden checkbox input (Tab) and presses
  Space/Enter
- **THEN** the switch SHALL toggle the same way as a click
- **AND** each input SHALL carry an accessible name (the source labels have no
  text — only the visual track/knob — so provide `aria-label` on the input,
  e.g. "Toggle 1" / "Toggle 2", per repo accessibility conventions)
- **AND** a visible focus indicator (focus-visible ring) SHALL be shown on
  the switch when focused

### Requirement: Responsive behavior

The system SHALL adapt the centered column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Toggly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the toggle column SHALL fill the viewport width (the `col-md-4`
  centering collapses to full width)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Toggly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-toggly`
- [ ] `scripts/verify-app.sh toggly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #06"
      → sub-heading "Switch Toggle" → 2 toggle switches (toggle 1 unchecked,
      toggle 2 checked, 34×20px, 30px-ish vertical gap) → minimal Component
      Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#ff7bb0` pink accent (checked knob + link color), `#ffe1ed` checked
      track, `#e6e6e6` unchecked track, `#000` heading, `rgba(0,0,0,0.5)`
      sub-heading; radii 8px (track) + 10px (knob); shadows `0 3px 8px`
      gray/pink-tinted
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Toggly — Switch Toggle"
- [ ] No images and NO icons needed (pure CSS toggle — faithful); no copied
      assets
- [ ] Real hidden `<input type="checkbox">` inside each label (keyboard
      focusable + `aria-label` named); toggle swaps track/knob colors + knob
      `translateX(20px)` with the reference timings (0.2s spring, 0.2s track,
      0.4s halo puff); honors `prefers-reduced-motion`
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 06" row, line 736 —
      Bootstrap Checkboxes category, single row)
