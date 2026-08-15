# Template: Switchly (Bootstrap On/Off Switch Toggle)

## Purpose

Switchly is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 07"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-07/), built under a
DIFFERENT name (**Switchly** — an on/off switch you flick; per the monorepo
naming mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a tiny, self-contained demo: a light-gray page with a centered
black heading "Checkbox #07", a centered muted sub-heading "On Off Switch
Toggle", and TWO pill-style on/off toggle switches stacked vertically — the
first UNCHECKED (gray track, white knob at left, "OFF" inside the track), the
second CHECKED (lavender track, purple knob slid right, "ON" inside the track).

> NAMING NOTE: the ColorLib source name "Checkbox 07" is FORBIDDEN as the app
> name. **Switchly** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-15). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 07" — the seventh of the "Bootstrap
  Checkboxes (20)" series in TEMPLATES.md (line 737 — mark that line `[x]`
  when done; single row). Sibling items Checkbox 01–06 were prepped as
  Tickbox / Picks / Ticktag / Checkly / Tickwell / Toggly; each item in the
  series is a DIFFERENT design variant (this one is the two-switch
  on/off-toggle variant with in-track "ON/OFF" labels, NOT the Checkly
  sports-pills or the Toggly mini-switch design).
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-07/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-07/`
  (HTTP 200, 8.2 KB HTML, verified 2026-08-15). Master stylesheet
  `css/style.css` (~222 KB, fully extracted for tokens) is relative to that
  sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-07/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (loaded but UNUSED in
  this variant — no icon glyphs anywhere). Google Font **Poppins** (300–500,
  @font-face in the head via Cloudflare fonts). Cross-checked against the
  TEMPLATES.md screenshot (`checkbox-07.jpg`, 1200×972, browser-verified
  2026-08-15) — all match. The demo brands itself "Checkbox #07"; the
  recreation uses the NEW name **Switchly**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a `#fafafa` background. Centered black 28px heading "Checkbox
  #07", below it a centered 18px muted sub-heading "On Off Switch Toggle"
  (`rgba(0,0,0,0.5)`), then a narrow (col-md-4 ≈ 350px) centered column with
  TWO toggle switches, each centered in its own full-width row, stacked
  vertically:
  1. **Toggle 1 — OFF (unchecked):** 50×22px track `#e6e6e6`, 30px pill
     radius, tiny 10px "OFF" text right-aligned inside the track; 24×24px
     white circular knob at the LEFT end (soft shadow
     `0 3px 8px rgba(0,0,0,0.2)`).
  2. **Toggle 2 — ON (checked):** same track shape but `#d0a8dc` (lavender)
     with "ON" text left-aligned in `#fff`; knob `#bd83ce` (muted purple)
     slid 31px to the RIGHT (purple-tinted shadow
     `0 3px 8px rgba(189,131,206,0.7)`).
     No navbar, no footer, no images, no icons — pure form-component typography
     with two custom-styled native checkboxes.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #07" (28px, `#000`, centered; margin-bottom 3rem + padding).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (≈350px
     centered column) → `h5.heading-section` → `<small>On Off Switch
Toggle</small>` (18px, `rgba(0,0,0,0.5)`, centered).
  4. Two `div.w-100.d-flex.justify-content-center` rows, each holding one
     `div.checkbox` → `<input type="checkbox" id="cbx" style="display:none"
[checked]>` + `<label for="cbx" class="toggle"><span></span></label>`.
     Toggle 1 (`#cbx`) unchecked; toggle 2 (`#cbx2`) has the `checked`
     attribute (ON by default).
     The demo page has NO navbar and NO footer — just this single section.
- **JS behaviors (original):** plain Bootstrap/native checkboxes — clicking
  the label toggles the hidden input; the `:checked + .toggle` CSS sibling
  selector restyles the track/knob. The only page JS (`js/main.js`, 249
  bytes) is a full-height helper for `.js-fullheight` — NOT used on this
  page. All toggle behavior is pure CSS, so the recreation needs no JS
  beyond React state.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#fafafa` — page background (`body { background: #fafafa }`, the
    template's Poppins override block).
  - `#bd83ce` — muted lavender-purple, THE brand accent: the CHECKED knob
    (`#cbx:checked + .toggle span { background: #bd83ce }`).
  - `#d0a8dc` — lighter lavender: the CHECKED track
    (`#cbx:checked + .toggle:before { background: #d0a8dc }`).
  - `#e6e6e6` — the UNCHECKED (OFF) track.
  - `#ffffff` — the knob (unchecked state).
  - `#000000` — page heading (`.heading-section`, 28px).
  - `rgba(0,0,0,0.5)` — sub-heading "On Off Switch Toggle"
    (`.heading-section small`, 18px).
  - `rgba(189,131,206,0.5)` — transient halo puff behind the knob when
    toggled (`span:before`, 56px circle).
  - `rgba(189,131,206,0.7)` — checked knob shadow
    (`0 3px 8px rgba(189,131,206,0.7)`).
  - `rgba(0,0,0,0.2)` — unchecked knob shadow (`0 3px 8px rgba(0,0,0,0.2)`).
  - `#ffffff` — "ON" text color on the checked track; default body copy is
    `gray` (Poppins 14px / 1.8).
- **Fonts:** **Poppins** (body + headings; `font-family: "Poppins", Arial,
sans-serif`, body 14px, line-height 1.8, weight normal) — loaded via Google
  Fonts `<link>` in `index.html` (300–500). Heading "Checkbox #07" 28px;
  sub-heading "On Off Switch Toggle" 18px; in-track "OFF"/"ON" label 10px.
- **Toggle anatomy (the whole design):**
  - wrapper `label.toggle`: `position: relative; display: block; width: 50px;
height: 30px; cursor: pointer`.
  - track (`.toggle:before`): `position: relative; top: 3px; left: 3px;
width: 50px; height: 22px; background: #e6e6e6; border-radius: 30px;
font-size: 10px; padding: 2px 8px; transition: background 0.2s ease`;
    content "OFF", `text-align: right`.
  - knob (`.toggle span`): `position: absolute; top: 2px; left: 0; width:
24px; height: 24px; background: #fff; border-radius: 50%; box-shadow:
0 3px 8px rgba(0,0,0,0.2); transition: all 0.2s ease`.
  - CHECKED (`#cbx:checked + .toggle`): track → `#d0a8dc`, content "ON",
    `text-align: left`, `color: #fff`; knob → `#bd83ce` +
    `translateX(31px)` with `transition: all 0.2s cubic-bezier(0.8, 0.4,
0.3, 1.25), background 0.15s ease`; knob shadow →
    `0 3px 8px rgba(189,131,206,0.7)`.
  - halo (`.toggle span:before`): `position: absolute; display: block;
margin: -16px; width: 56px; height: 56px; background:
rgba(189,131,206,0.5); border-radius: 50%; transform: scale(0);
opacity: 1; pointer-events: none`; CHECKED → `scale(1); opacity: 0;
transition: all 0.4s ease` (transient lavender ripple puff on check).
- **Radii:** track `border-radius: 30px` (pill); knob `border-radius: 50%`
  (fully round circle); halo `border-radius: 50%`.
- **Shadows:** knob `0 3px 8px rgba(0,0,0,0.2)` (unchecked); knob
  `0 3px 8px rgba(189,131,206,0.7)` (checked, lavender-tinted).
- **Spacing rhythm:** section padding `7em 0` (≈112px); heading `mb-5 pb-md-4`
  (3rem + 1.5rem); centered column `col-md-4` (~350px, centered); the two
  toggles each sit in their own full-width `d-flex justify-content-center`
  row, stacked vertically (≈30px apart via the row/column padding of the
  reference grid).
- **Icons:** NONE — the toggle is pure CSS (font-awesome 4.7 is loaded by the
  page but unused; the "OFF"/"ON" labels are `::before` content, not icons).
  No lucide icons needed.
- **No images** in this template — pure form-component typography, so no
  picsum seeds are needed.

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #07" on a light `#fafafa` background.

#### Scenario: Section and heading

- **GIVEN** the Switchly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #07" in black
  (28px) on the light `#fafafa` background
- **AND** the content SHALL be confined to a centered narrow column
  (≈350px on desktop, matching the reference `col-md-4`)

### Requirement: On/Off sub-heading

The system SHALL render a small centered sub-heading "On Off Switch Toggle"
below the main heading.

#### Scenario: Sub-heading

- **GIVEN** the Switchly page is rendered
- **WHEN** the user views the centered column
- **THEN** a sub-heading "On Off Switch Toggle" SHALL appear under the main
  heading in 18px `rgba(0,0,0,0.5)` (muted dark gray), centered

### Requirement: Toggle switches

The system SHALL render TWO on/off toggle switches, stacked vertically and
centered; toggle 1 UNCHECKED and toggle 2 CHECKED by default, matching the
live reference DOM.

#### Scenario: Default states

- **GIVEN** the Switchly page is rendered
- **WHEN** the user views the centered column
- **THEN** two toggle switches SHALL be stacked vertically, each centered in
  its own row
- **AND** toggle 1 SHALL be UNCHECKED — a light-gray `#e6e6e6` track
  (50×22px, 30px pill radius) with a white 24×24px circular knob at the LEFT
  end (soft shadow `0 3px 8px rgba(0,0,0,0.2)`) and a tiny "OFF" label
  right-aligned inside the track
- **AND** toggle 2 SHALL be CHECKED — a lavender `#d0a8dc` track with a
  white "ON" label left-aligned, and a muted-purple `#bd83ce` knob slid 31px
  to the RIGHT (purple-tinted shadow `0 3px 8px rgba(189,131,206,0.7)`)

### Requirement: Toggle interaction

Each switch SHALL be a label wrapping a real (visually hidden) checkbox input;
activating a switch toggles its checked state and swaps the track/knob
styling with the reference transitions.

#### Scenario: Click toggles a switch

- **GIVEN** a switch is unchecked (gray track, "OFF" label, white knob at left)
- **WHEN** the user clicks the switch (its label)
- **THEN** the switch SHALL become checked — the hidden input SHALL be
  checked, the track SHALL flip from `#e6e6e6` to `#d0a8dc` and the label
  SHALL flip from right-aligned "OFF" to left-aligned white "ON", and the
  knob SHALL flip from white to `#bd83ce` and slide 31px to the right, with
  the reference timings (knob `0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25)`
  spring, track `0.2s ease`)
- **AND** a lavender halo (56px circle, `rgba(189,131,206,0.5)`) SHALL briefly
  puff out behind the knob and fade away (0.4s) — the reference's transient
  click ripple
- **AND** clicking the checked switch again SHALL uncheck it, restoring the
  gray track, "OFF" label, white knob at left, and dark shadow (toggle
  semantics)

#### Scenario: Reduced motion

- **GIVEN** the page is rendered with `prefers-reduced-motion: reduce`
- **WHEN** a switch is toggled
- **THEN** the state change SHALL still occur (track/knob colors, ON/OFF
  label, and knob position swap instantly) with the springy slide/halo
  animations suppressed

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

- **GIVEN** the Switchly page is rendered on a viewport ≤768px
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

- **GIVEN** the Switchly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-switchly`
- [ ] `scripts/verify-app.sh switchly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Checkbox #07"
      → sub-heading "On Off Switch Toggle" → 2 toggle switches (toggle 1
      unchecked/OFF, toggle 2 checked/ON, 50×30px, ~30px vertical gap) →
      minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fafafa` page,
      `#bd83ce` purple accent (checked knob), `#d0a8dc` checked track,
      `#e6e6e6` unchecked track, `#000` heading, `rgba(0,0,0,0.5)`
      sub-heading; radii 30px pill (track) + full circle (knob); shadows
      `0 3px 8px` gray/lavender-tinted
- [ ] Font: Poppins (300–500) via Google Fonts `<link>` in `index.html`;
      title "Switchly — On Off Switch Toggle"
- [ ] No images and NO icons needed (pure CSS toggle — faithful); no copied
      assets
- [ ] Real hidden `<input type="checkbox">` inside each label (keyboard
      focusable + `aria-label` named); toggle swaps track/knob colors + knob
      `translateX(31px)` with the reference timings (0.2s spring, 0.2s track,
      0.4s halo puff); honors `prefers-reduced-motion`
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Checkbox 07" row, line 737 —
      Bootstrap Checkboxes category, single row)
