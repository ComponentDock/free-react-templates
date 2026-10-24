# Template: BtnSpark (Button Showcase / UI Kit)

## Purpose

A single-page **button showcase** recreating ColorLib's **Bootstrap Buttons 02**
design — which presents itself as "Button #07": four colour columns of button
states, dropdowns, segmented groups, checkbox/radio/slide toggles and social
buttons, all inside one white padded section with no navbar, no hero and no
footer.

- **Source:** https://colorlib.com/wp/template/bootstrap-buttons-02/ — HTTP 200, 114,634 B (re-read 2026-10-24)
- **Preview:** https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/ — HTTP 200, 51,199 B, `<title>` "Button 07", sha256 `5bf46576…` (re-read 2026-10-24)
- **Source slug:** `bootstrap-buttons-02`
- **New name:** `btnspark`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript, `packages/ui`, Lucide icons
- **Category:** UI kit / button library
- **Archive:** `downloads/free/bootstrap-buttons-02.zip` — HTTP 200, 110,958 B, sha256 `cb99a1ee…`; its `README.md` is titled "Button 07", so the archive agrees with the live `<title>`. It self-hosts Poppins 300–900 + an Ionicons subset as woff2.

**Corrected 2026-10-24.** This spec previously named `bootstrap-buttons-14`
("Button 04") and a `#4f46e5` / `#7c3aed` indigo palette. That is a **different
design** — its live page opens with "Button #04", its four action colours are
violet `#5635ea`, violet-2 `#a15bf0`, cyan `#32c5f6` and green `#48da79`, and its
band list is Pick Your Style / Pick Your Size / Pick Your Color / Social /
Dropdown / Group / Checkboxes / Radios. `TEMPLATES.md`, the brief and the app all
name `-02`, so the spec was the stale layer (`docs/docs-source-drift.md`,
SPEC-STALE).

## Source map (live preview, re-read 2026-10-24)

| page | status | bytes | notes |
| --- | --- | --- | --- |
| `index.html` | 200 | 51,199 | the whole template: `<body>` holds one `.ftco-section#buttons` inside a `.cl-container` |
| `css/style.css?v=a49d0296` | 200 | 30,764 | sha256 `4226c4972240661fcba188a4b7a86c9c1ed5f3763072c2ba32ba83e59cf25f67` — the only stylesheet (Bootstrap-4 base + the theme layer) |
| `js/snippet.js?v=2a58a2fe` | 200 | 2,677 | dropdown toggles + the two slide switches; no jQuery, no framework |
| `/theme/bb/` (parent directory) | 404 | 9 | no listing page |
| `downloads/free/bootstrap-buttons-02.zip` | 200 | 110,958 | same markup + self-hosted Poppins/Ionicons |

- **Fonts:** body `"Poppins", Arial, sans-serif`, `15px / 1.8`. No Google Fonts `<link>` — the page ships woff2 files (`poppins-300/400/500/600/700/800/900`, latin + latin-ext) and an Ionicons subset. Load Poppins 300–700 from Google Fonts in the recreation.
- **Structure, in document order:** `h2.heading-section` "Button #07" (32px) → the 4-column state matrix → `h2 small` "Dropdown Buttons" → 4 dropdowns → `h2 small` "Group Buttons" → 2 segmented triples → one 3-column row: "Checkboxes" (5) · "Radios Buttons" (5) · "Slide Button" (2 toggles) → `h2 small` "Social Buttons" → 5 brand blocks × 7 buttons + a closing 7-button round-outline action row.
- **Chrome: none.** No `<nav>`, no `<header>`, no `<footer>`, no logo, no hero, no carousel, no form. One section, `.ftco-section { padding: 7em 0 }`.
- **Counts:** 72 `<button>` elements, 12 `<a>` elements — **all 12 are dropdown items with a dead `href="#"`**. 15 `.cl-row` wrappers.
- **Heading scale:** `.heading-section` 32px, its `small` 16px, weight 400 (`h2` rule: `line-height 1.5, font-weight 400, Poppins`).

## Design tokens

Measured from `css/style.css` (30,764 B, sha256 `4226c497…`), case-folded hex
hits in parentheses. The sheet is a Bootstrap-4 build with a four-colour theme
layer appended, so the theme selectors (`.cl-btn-primary`, `.cl-btn-secondary`,
`.btn-tertiary`, `.btn-quarternary`) win over the framework defaults.

| Token | Value | Usage |
| --- | --- | --- |
| `--brand-primary` | `#ec8f6a` (13 hits) · hover `#e66d3d` | column 1 solids, icon glyphs, checkbox/radio "Primary" |
| `--brand-secondary` | `#8bbabb` (13 hits) · hover `#6ba7a8` | column 2 solids, checkbox/radio "Success" |
| `--brand-tertiary` | `#e2c275` (13 hits) · hover `#d9af4b` | column 3 solids, checkbox/radio "Danger" |
| `--brand-quarternary` | `#b96b9f` (13 hits) · hover `#a44d87` | column 4 solids, checkbox/radio "Warning" |
| `--ink` | `#000` / `#212529` | outline pill label, `.cl-btn` default text |
| `--hairline` | `rgba(0,0,0,0.1)` 1px | the white pill row's whole border, unchecked radio ring |
| `--surface` | `#fff` | page, icon panels, radio fills |
| `--toggle-on` | `#03A9F4` on `#ebf7fc` | slide switch ON |
| `--toggle-off` | `#f44336` on `#fcebeb` | slide switch OFF |
| social `facebook` | `#4f69a2` | brand solid |
| social `twitter` | `#69b6f0` | brand solid |
| social `linkedin` | `#2884ba` | brand solid |
| social `pinterest` | `#d03940` | brand solid |
| social `dribbble` | `#ea6294` | brand solid |
| `font-family` | `"Poppins", Arial, sans-serif` | everything |
| body type | `15px / 1.8`, weight `400`, colour `#212529` | global |
| `border-radius` | `5px` (all `.cl-btn`) · `40px` (`.btn-round` pills) · `50%` (`.icon.icon-round`) | button shape |
| button box | `padding: 12px 16px · border: 1px solid · font-size 14px · weight 500` | every button |
| button shadow | `0px 10px 20px -6px rgba(0,0,0,0.12)` | every button |
| icon panel | `45px` wide, full height, `background:#fff`, glyph `20px` in the column colour | the Like/Delete/Send/Download buttons |
| icon panel (pill) | same 45px panel with `border-radius: 50%` | the round icon buttons |
| block width | `.cl-btn-block` = `width: 100%`; siblings stack at `0.5rem` | the matrix + dropdown columns |
| container | `.cl-container` `max-width: 1140px`, `15px` gutter | the section |
| section rhythm | `.ftco-section` `7em 0`; row spacing `.cl-mb-4` 1.5rem / `.cl-mb-5` 3rem / `.cl-mb-3` 1rem | band spacing |
| hover | solid: colour darkens to the `-hover` hex; outline: fills with its colour, label turns `#fff`; no transform, no size change | interaction |
| focus | `box-shadow: 0 0 0 0.2rem rgba(colour, 0.5)` | keyboard ring |
| disabled | `opacity: 0.65`, keeps its colour | checkbox/radio "Disabled" rows |

### Color palette summary

- **Coral** `#ec8f6a` — primary column, checkbox/radio "Primary"
- **Sage teal** `#8bbabb` — secondary column, "Success"
- **Gold** `#e2c275` — tertiary column, "Danger"
- **Mauve** `#b96b9f` — quaternary column, "Warning"
- White page, black 32px heading, Poppins throughout — the palette is the whole visual identity; there are no images, gradients or illustrations.

## Visual design notes (TEMPLATES.md screenshot + live preview)

- **Page frame** — plain white, no chrome at all: no navbar, no hero, no footer. The content is a centred 1140px column with large empty margins (7em top/bottom).
- **Heading** — "Button #07" in black Poppins, 32px, weight 400, left-aligned above the matrix. Every later band uses a 16px `small` heading of the same weight (Dropdown Buttons · Group Buttons · Checkboxes · Radios Buttons · Slide Button · Social Buttons).
- **The matrix** — four equal columns of full-width buttons, one column per colour: coral · sage · gold · mauve. Each column repeats the same five states top to bottom: (1) solid "Default", (2) solid with label + a **white icon panel bleeding to the right edge** (Like ♥ / Delete 🗑 / Send ✈ / Download ⬇ — the glyph sits in the colour, the panel is white), (3) the same button as a **40px pill** whose white icon panel is a **circle**, (4) an outline button tinted with the column colour, (5) a white pill with a `rgba(0,0,0,.1)` hairline and a black label — the only state that ignores the column colour.
- **Dropdown Buttons** — four full-width colour toggles ("Dropdown button ▾", one per colour), each opening a white menu of three plain items (Action · Another action · Something else here). All menu links are dead.
- **Group Buttons** — two segmented triples: `[Button 1 | Outline Button | Button 1]` in coral and `[Button 2 | Outline Button | Button 2]` in sage. Outer corners rounded, inner corners square (`.cl-btn-block` first/last rules), so each triple reads as one bar.
- **Checkboxes** — five labelled rows: Primary · Success · Danger · Warning · Disabled, each glyph drawn with the Ionicons `\f148`/`\f15c` characters and coloured per row (coral / sage / gold / mauve / `#343a40` grey), all checked on load; "Disabled" is checked + `disabled` at 0.65 opacity.
- **Radios Buttons** — five rows with a 18px ring that fills with the row colour when checked (coral / sage / gold / mauve / grey), all checked on load; the fifth is disabled.
- **Slide Button** — two iOS-style 74×36 switches, laid side by side with a caption each: "Toggle is on" (blue `#03A9F4` knob reading **ON** on a `#ebf7fc` track) and "Toggle is Off" (red `#f44336` knob reading **OFF** on a `#fcebeb` track). Both are pure checkbox + CSS siblings, no library.
- **Social Buttons** — five brand blocks (Facebook `#4f69a2`, Twitter `#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`). Each block repeats seven shapes: solid · solid pill · white outline · white outline pill · solid with a white icon panel · outline with a white icon panel · a bare text link ("Share - 8.2k", "Connect with Twitter", "Connect with Linkedin", "Pin it - 1k", "Find us on Dribbble"). A closing 7-button row of white pills ("Watch Photos", "Download", ✦, "Add Comment", ✦, "Like 2", "Create Account" — the last one solid coral with a white icon circle) ends the page.
- **Nothing else** — no cards, no copy, no marketing text, no footer. The page is a swatch sheet, and that is exactly what the recreation should be.

## Requirements

### Requirement: Page frame

The page SHALL render as a single white showcase section with no site chrome.

#### Scenario: Bare showcase page

- **WHEN** the page loads
- **THEN** I see one section with a 1140px content column and 7em vertical padding
- **AND** there is no navbar, no hero, no logo and no marketing copy
- **AND** the only page furniture is the footer attribution required by AGENTS.md rule 5

#### Scenario: Section headings

- **WHEN** I read the page top to bottom
- **THEN** the first heading is "Button #07" at 32px, weight 400
- **AND** the following headings are 16px: Dropdown Buttons, Group Buttons, Checkboxes, Radios Buttons, Slide Button, Social Buttons

### Requirement: Button state matrix

The section SHALL display four colour columns, each with the same five button states.

#### Scenario: Four colour columns

- **WHEN** I look at the matrix
- **THEN** I see four equal full-width columns in coral `#ec8f6a`, sage `#8bbabb`, gold `#e2c275` and mauve `#b96b9f`
- **AND** each column stacks five buttons: solid, solid with icon panel, pill with round icon panel, outline, white pill

#### Scenario: Solid buttons

- **WHEN** I hover a solid button
- **THEN** its background darkens to the column's hover hex (coral `#e66d3d`, sage `#6ba7a8`, gold `#d9af4b`, mauve `#a44d87`)
- **AND** pressing it does not move or resize it

#### Scenario: Icon-panel buttons

- **WHEN** I look at the second and third rows of each column
- **THEN** the label sits left and a 45px white panel holding a coloured glyph sits flush with the right edge
- **AND** in the pill row that white panel is a circle
- **AND** the glyphs are heart, trash, paper-plane and cloud-download for the four columns

#### Scenario: Outline and white-pill rows

- **WHEN** I look at the fourth row
- **THEN** each button is transparent with a 1px border and label in the column colour
- **AND** hovering fills it with that colour and turns the label white
- **WHEN** I look at the fifth row
- **THEN** each button is a white 40px pill with a `rgba(0,0,0,0.1)` hairline and a black label

#### Scenario: Button geometry

- **WHEN** any button is rendered
- **THEN** it uses `padding: 12px 16px`, `font-size: 14px`, `font-weight: 500`, a 5px radius (40px when pill), and the `0 10px 20px -6px rgba(0,0,0,0.12)` shadow

### Requirement: Dropdown buttons

The section SHALL display four dropdown buttons, one per colour.

#### Scenario: Dropdown opens a three-item menu

- **WHEN** I click a dropdown toggle
- **THEN** a white menu opens with Action, Another action and Something else here
- **AND** the toggle fills the full column width and carries a trailing caret
- **AND** only one menu is open at a time and it closes on outside click or Escape

### Requirement: Group buttons

The section SHALL display two segmented button groups.

#### Scenario: Segmented triple

- **WHEN** I look at the Group Buttons band
- **THEN** I see `Button 1 · Outline Button · Button 1` in coral beside `Button 2 · Outline Button · Button 2` in sage
- **AND** each triple is one bar: rounded outer corners, square inner corners, shared borders

### Requirement: Checkboxes

The section SHALL display five checkbox rows.

#### Scenario: Coloured checkbox rows

- **WHEN** I look at the Checkboxes column
- **THEN** I see Primary, Success, Danger, Warning and Disabled, all checked on load
- **AND** each row's tick is drawn in its colour (coral, sage, gold, mauve, grey `#343a40`)
- **AND** clicking a row toggles its tick, and the Disabled row cannot be toggled and renders at 0.65 opacity

### Requirement: Radio buttons

The section SHALL display five radio rows.

#### Scenario: Coloured radio rows

- **WHEN** I look at the Radios Buttons column
- **THEN** I see Primary, Success, Danger, Warning and Disabled with an 18px ring each
- **AND** the checked radio's ring and dot take the row colour
- **AND** the Disabled row is unselectable

### Requirement: Slide switch

The section SHALL display two toggle switches with captions.

#### Scenario: On and off switches

- **WHEN** I look at the Slide Button column
- **THEN** I see a 74×36 switch captioned "Toggle is on", blue `#03A9F4` knob reading ON over a `#ebf7fc` track
- **AND** a second switch captioned "Toggle is Off", red `#f44336` knob reading OFF over a `#fcebeb` track
- **AND** clicking either switch flips its state, colour and label

### Requirement: Social buttons

The section SHALL display five social brand blocks and a closing action row.

#### Scenario: Brand block shapes

- **WHEN** I look at the Social Buttons band
- **THEN** I see Facebook `#4f69a2`, Twitter `#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940` and Dribbble `#ea6294`
- **AND** each block shows seven shapes: solid, solid pill, outline, outline pill, solid with icon panel, outline with icon panel, and a bare text link
- **AND** the captions read Share - 8.2k, Connect with Twitter, Connect with Linkedin, Pin it - 1k, Find us on Dribbble

#### Scenario: Closing action row

- **WHEN** I reach the end of the band
- **THEN** I see seven white round-outline pills: Watch Photos, Download, an icon, Add Comment, an icon, Like 2 and Create Account
- **AND** Create Account is the only solid button in that row, in coral with a white icon circle

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the page
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
add navigation, marketing copy or a second band.

#### Scenario: Footer attribution

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: Accessibility

Every interactive element SHALL be operable from the keyboard and named for assistive technology.

#### Scenario: Focus and labels

- **WHEN** I tab through the showcase
- **THEN** each button, dropdown toggle, checkbox, radio and switch shows a visible focus ring (`0 0 0 0.2rem` in its colour)
- **AND** checkboxes, radios and switches expose their checked state and their visible label text

## App deltas (as shipped, `apps/btnspark`)

Recorded 2026-10-24 while re-reading the live reference — these are **app-side**
deviations, not spec errors, and the app is not changed by this prep:

1. **Palette replaced.** `apps/btnspark/src/index.css` sets the Bootstrap-5
   default set — `#0d6efd` primary, `#6c757d` secondary, `#198754` success,
   `#dc3545` danger, `#ffc107` warning, `#0dcaf0` info, `#f8f9fa` light,
   `#212529` dark — plus `Inter`. The reference has no Bootstrap default blue at
   all: its colours are the four-column coral/sage/gold/mauve theme and Poppins.
2. **Chrome invented.** The app renders `Navbar` + `Hero` ("BtnSpark — Modern
   Bootstrap Button Showcase", two CTAs) + `Footer`. The reference is a bare
   `#buttons` section: no navbar, no hero, no footer copy.
3. **Band set replaced.** The app ships SolidButtons · OutlineButtons ·
   ShapeVariants · SizesAndStates · IconButtons · Playground (a gradient/loading
   playground). The reference's bands are the four-colour state matrix,
   Dropdowns, Groups, Checkboxes + Radios + Slide switch, and Social buttons —
   there are no gradient or loading buttons in the source.
4. **Geometry.** The app uses `rounded-lg` (8px) and pill CTAs with `gap`-based
   spacing; the reference is 5px radius / 40px pill, `12px 16px` padding, 14px
   label, and the `0 10px 20px -6px rgba(0,0,0,.12)` drop shadow.
5. **No icon panels.** The reference's signature detail — a 45px white panel
   bleeding to the button's right edge, coloured glyph inside, circular in the
   pill row — has no counterpart in the app.

## Verification checklist

- [ ] Sections rendered in source order: heading "Button #07" → state matrix → Dropdown Buttons → Group Buttons → Checkboxes / Radios / Slide Button → Social Buttons
- [ ] Design tokens match the stylesheet: `#ec8f6a` / `#8bbabb` / `#e2c275` / `#b96b9f` with their hover hexes, black `#000` outline pill labels, Poppins 15px/1.8
- [ ] Buttons are `12px 16px`, 14px, weight 500, radius 5px (40px pill), shadow `0 10px 20px -6px rgba(0,0,0,.12)`
- [ ] Icon buttons render the 45px white right-edge panel (circular in the pill row) with a coloured 20px glyph
- [ ] Matrix shows 4 columns × 5 states; the fifth row is the white hairline pill with a black label
- [ ] Dropdowns open one at a time, close on outside click and Escape, all 12 items are inert
- [ ] Group band shows two segmented triples with rounded outer / square inner corners
- [ ] Checkboxes and radios show five coloured rows each, checked on load, Disabled at 0.65 opacity
- [ ] Slide band shows the blue ON and red OFF switches, both toggling
- [ ] Social band shows 5 brands × 7 shapes plus the closing 7-pill action row
- [ ] No navbar, no hero, no marketing copy — chrome is limited to the Component Dock credit
- [ ] Footer links to `https://www.componentdock.com/`
- [x] No references to ColorLib in any app source files
- [ ] Tests at 100% coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app btnspark` passes
