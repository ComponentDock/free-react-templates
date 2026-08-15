# Template: Soluna (Bootstrap Checkbox / Day-Night Toggle)

## Purpose

Soluna is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 08"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-08/), built under a
DIFFERENT name (**Soluna** — "sol" (sun) + "luna" (moon), the day/night toggle
pair; per the monorepo naming mandate — never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a white `#fff` page with a
centered black heading "Checkbox #08", a small centered sub-heading "Day &
Night Switch Toggle", and TWO pill toggle switches stacked vertically — the
first UNCHECKED (light-gray `#e6e6e6` track, white circular knob at the left
carrying a BLACK MOON glyph), the second CHECKED (pale-gold `#f6d379` track,
vivid-gold `#f1bc31` knob slid to the right carrying a dark SUN glyph).
Clicking a switch slides its knob and swaps the track/knob colors AND the
sun/moon glyph with a springy 0.2s cubic-bezier transition. This is the
day/night switch variant — the eighth of the "Bootstrap Checkboxes (20)"
series.

> NAMING NOTE: the ColorLib source name "Checkbox 08" is FORBIDDEN as the app
> name. **Soluna** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 08" — the eighth of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 738 — mark that line `[x]`
  when done; single row, no duplicates). Sibling items Checkbox 01–07 were
  prepped as Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly /
  Switchly; each item in the series is a DIFFERENT design variant (this one
  is the day/night sun-moon switch variant — NOT the Toggly pink switch
  variant, NOT the Checkly mint sports-card variant).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-08/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-08/`
  (HTTP 200, 8.2 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~222 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-08/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (loaded in the head —
  **USED on this page**: the sun/moon glyphs are font-awesome icons `\f185`
  fa-sun-o and `\f186` fa-moon-o). Google Font **Poppins** (300–500+,
  @font-face in the head). Cross-checked against the TEMPLATES.md screenshot
  (`checkbox-08.jpg`, 1200×972, browser-verified 2026-08-15) — all match. The
  demo brands itself "Checkbox #08"; the recreation uses the NEW name
  **Soluna**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a **white `#fff`** background (NOTE: `body { background: #fff }`
  here — NOT `#fafafa` like the Toggly/checkbox-06 sibling). Centered black
  28px heading "Checkbox #08", then a centered 18px sub-heading "Day & Night
  Switch Toggle" in `rgba(0,0,0,0.5)`, then a narrow (col-md-4 ≈ 350px)
  centered column with TWO stacked toggle switches, each centered in its own
  full-width flex row:
  1. `#cbx` — UNCHECKED: `#e6e6e6` pill track, white 24px circular knob at
     LEFT carrying a black circular MOON glyph (`\f186`).
  2. `#cbx2` — CHECKED (the live DOM carries the `checked` attribute): pale
     gold `#f6d379` track, vivid gold `#f1bc31` knob slid 31px to the RIGHT
     carrying a dark SUN glyph (`\f185`).
     The screenshot (1200×972) confirms: white page, black heading, gray
     sub-label, top switch in OFF position (light-gray track, dark knob with
     a small light circle), bottom switch in ON position (gold knob slid
     right with a small dark circle). No navbar, no footer, no images — pure
     form-component typography.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #08" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (≈350px
     centered column) → `h5.heading-section` → `<small>Day & Night Switch
Toggle</small>` (18px, `rgba(0,0,0,0.5)`).
  4. Two toggle rows, each `div.w-100.d-flex.justify-content-center` →
     `div.checkbox` → `<input type="checkbox">` (`style="display:none"`) +
     `<label class="toggle" for="cbx"><span></span></label>`:
     - `id="cbx"` — NOT checked (toggle 1).
     - `id="cbx2"` — CHECKED (toggle 2; note the source's malformed
       `style="display:none"/ checked` — the stray `/` is ignored by the
       HTML parser, the `checked` attribute is what counts).
       The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** none beyond native checkboxes — `js/main.js`
  is only an unused full-height helper (`.js-fullheight`, no such element on
  this page). Clicking a label toggles the hidden native input; the
  `#cbx:checked + .toggle` / `#cbx2:checked + .toggle` CSS selectors swap the
  track background (`#e6e6e6` → `#f6d379`), the knob background + shadow
  (white → `#f1bc31`, shadow tints gold) and translate the knob
  `translateX(31px)`; the knob's `::before` glyph swaps from the MOON
  (`\f186`, black circle, white glyph) to the SUN (`\f185`, gold circle,
  black glyph) with a 0.4s ease transition. **Unlike the Toggly (checkbox-06)
  sibling there is NO expanding halo puff** — here `span:before` IS the
  sun/moon glyph itself (24×24, no scale animation). Recreate with React
  state: one `checked` state per toggle (default: false for toggle 1, true
  for toggle 2), clicking a switch toggles it, and the knob slides + colors +
  glyph swap via Tailwind `transition-*` classes with the reference's
  timings.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#f1bc31` — vivid gold/yellow, THE brand accent: the CHECKED knob
    background (`#cbx:checked + .toggle span { background: #f1bc31 }`) AND
    the page link color (`a { color: #f1bc31 }`).
  - `#f6d379` — pale gold, the CHECKED track background
    (`#cbx:checked + .toggle:before { background: #f6d379 }`).
  - `#e6e6e6` — light gray, the UNCHECKED track background
    (`.toggle:before { background: #e6e6e6 }`).
  - `#ffffff` — the knob (unchecked; `.toggle span { background: #fff }`).
  - `#000000` — the knob glyph circle (unchecked, `.toggle span:before`
    background) and the page heading (`.heading-section`, 28px).
  - `#fff` — page background (`body { background: #fff }`).
  - `rgba(0,0,0,0.5)` — sub-heading "Day & Night Switch Toggle"
    (`.heading-section small`, 18px).
  - `gray` — default body copy color (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #08" 28px;
  sub-heading "Day & Night Switch Toggle" 18px.
- **Toggle switch anatomy (`.toggle`, from the CSS):**
  - wrapper: `position: relative; display: block; width: 50px; height: 30px;
cursor: pointer` (BIGGER than the Toggly sibling's 34×20 — this variant
    is 50×30).
  - track (`.toggle:before`): `position: relative; top: 3px; left: 3px;
width: 50px; height: 22px; background: #e6e6e6; border-radius: 30px;
transition: background 0.2s ease; padding: 2px 8px; text-align: right`.
  - knob (`.toggle span`): `position: absolute; top: 2px; left: 0;
width: 24px; height: 24px; background: #fff; border-radius: 50%;
box-shadow: 0 3px 8px rgba(0,0,0,0.2); transition: all 0.2s ease`.
  - glyph (`.toggle span:before`): `font-family: 'Fontawesome'; content:
'\f186'` (fa-moon-o, UNCHECKED); `position: absolute; width: 24px;
height: 24px; background: #000; border-radius: 50%; color: #fff;
pointer-events: none` (black circle with white moon glyph).
  - CHECKED (`#cbx:checked + .toggle`): track → `#f6d379` + `text-align:
left`; knob → `#f1bc31` + `translateX(31px)` with `transition: all 0.2s
cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease`; knob shadow →
    `0 3px 8px rgba(241,188,49,0.7)`.
  - glyph CHECKED (`.toggle span:before`): `content: '\f185'` (fa-sun-o);
    background → `#f1bc31`; color → `#000`; `transition: all 0.4s ease`
    (gold circle with black sun glyph).
- **Radii:** track `border-radius: 30px` (full pill); knob `border-radius:
50%` (fully round circle); glyph `border-radius: 50%`.
- **Shadows:** knob `0 3px 8px rgba(0,0,0,0.2)` (unchecked); knob
  `0 3px 8px rgba(241,188,49,0.7)` (checked, gold-tinted).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5 pb-md-4`
  (3rem + 1.5rem); centered column `col-md-4` (~350px, centered); the two
  toggles each sit in their own full-width `d-flex justify-content-center`
  row, stacked vertically (≈30px apart via the row/column padding of the
  reference grid).
- **Icons:** the sun/moon glyphs are font-awesome 4.7 icons (`\f185` fa-sun-o,
  `\f186` fa-moon-o) rendered inside the knob. Per repo convention use
  lucide-react `Sun` and `Moon` icons (≈14px — the reference renders the
  glyph at font-size 10px inside the 24px knob).
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #08" on a white `#fff` background.

#### Scenario: Section and heading

- **GIVEN** the Soluna page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #08" in black
  (28px) on the white `#fff` background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: Day & Night sub-heading

The system SHALL render a small centered sub-heading "Day & Night Switch
Toggle" below the main heading.

#### Scenario: Sub-heading

- **GIVEN** the Soluna page is rendered
- **WHEN** the user views the centered column
- **THEN** a sub-heading "Day & Night Switch Toggle" SHALL appear under the
  main heading in 18px `rgba(0,0,0,0.5)` (muted dark gray), centered

### Requirement: Toggle switches

The system SHALL render TWO toggle switches, stacked vertically and centered;
toggle 1 UNCHECKED (moon) and toggle 2 CHECKED (sun) by default, matching the
live reference DOM.

#### Scenario: Default states

- **GIVEN** the Soluna page is rendered
- **WHEN** the user views the centered column
- **THEN** two toggle switches SHALL be stacked vertically, each centered in
  its own row
- **AND** toggle 1 SHALL be UNCHECKED — a light-gray `#e6e6e6` pill track
  (50×22px, 30px radius) with a white 24×24px circular knob at the LEFT end
  (soft shadow `0 3px 8px rgba(0,0,0,0.2)`) carrying a black circular MOON
  glyph (white moon icon on black circle)
- **AND** toggle 2 SHALL be CHECKED — a pale-gold `#f6d379` track with a
  vivid-gold `#f1bc31` knob slid 31px to the RIGHT (gold-tinted shadow
  `0 3px 8px rgba(241,188,49,0.7)`) carrying a dark SUN glyph (black sun icon
  on gold circle)

### Requirement: Toggle interaction

Each switch SHALL be a label wrapping a real (visually hidden) checkbox input;
activating a switch toggles its checked state and swaps the track/knob
styling and the sun/moon glyph with the reference transitions.

#### Scenario: Click toggles a switch

- **GIVEN** a switch is unchecked (gray track, white knob at left with moon
  glyph)
- **WHEN** the user clicks the switch (its label)
- **THEN** the switch SHALL become checked — the hidden input SHALL be
  checked, the track SHALL flip from `#e6e6e6` to `#f6d379`, and the knob
  SHALL flip from white to `#f1bc31` and slide 31px to the right, with the
  reference timings (knob `0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25)` spring,
  track `0.2s ease`)
- **AND** the glyph SHALL swap from the black MOON to the gold SUN (gold
  circle, black sun icon) with the reference 0.4s ease transition
- **AND** clicking the checked switch again SHALL uncheck it, restoring the
  gray track, white knob at left, black moon glyph and dark shadow (toggle
  semantics)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** a switch is toggled
- **THEN** the state change SHALL still occur (track/knob colors, knob
  position and sun/moon glyph swap instantly) with the springy slide and
  glyph transitions suppressed

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
  e.g. "Day mode toggle" / "Night mode toggle" or "Toggle 1" / "Toggle 2",
  per repo accessibility conventions)
- **AND** a visible focus indicator (focus-visible ring) SHALL be shown on
  the switch when focused

### Requirement: Responsive behavior

The system SHALL adapt the centered column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Soluna page is rendered on a viewport ≤768px
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

- **GIVEN** the Soluna page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-soluna`
- [ ] `scripts/verify-app.sh soluna` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #08"
      → sub-heading "Day & Night Switch Toggle" → 2 toggle switches (toggle 1
      unchecked/moon, toggle 2 checked/sun, 50×30px, 30px-ish vertical gap)
      → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fff` page,
      `#f1bc31` gold accent (checked knob + link color), `#f6d379` checked
      track, `#e6e6e6` unchecked track, `#000` heading + glyph circle,
      `rgba(0,0,0,0.5)` sub-heading; radii 30px (pill track) + 50% (knob);
      shadows `0 3px 8px` gray/gold-tinted
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Soluna — Day & Night Switch Toggle"
- [ ] Sun/moon glyphs: lucide-react `Sun` / `Moon` icons (≈14px) inside the
      knob — NOT font-awesome (repo convention); no copied assets
- [ ] No images (pure CSS toggle — faithful); no picsum seeds needed
- [ ] Real hidden `<input type="checkbox">` inside each label (keyboard
      focusable + `aria-label` named); toggle swaps track/knob colors + knob
      `translateX(31px)` + moon→sun glyph with the reference timings (0.2s
      spring, 0.2s track, 0.4s glyph); honors `prefers-reduced-motion`
- [ ] NO halo ripple (unlike the Toggly sibling — this variant's knob glyph
      IS the sun/moon icon, no 56px puff)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 08" row, line 738 —
      Bootstrap Checkboxes category, single row)
