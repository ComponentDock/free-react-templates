# Template: Chunky (Button / UI Kit Showcase)

## Purpose

Chunky is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 15" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-15/), built under a
DIFFERENT name (**Chunky** — the template's signature is its CHUNKY hard
3D "press" shadow: every button rests on a hard, unblurred offset shadow
`box-shadow: 3px 5px 0px 0px <darker-shade>` (plain `.btn` gets
`0px 5px 0px 0px #ebebeb`) that makes each button look like a chunky
stamped keycap; the shadow is KEPT on hover/focus (only the fill darkens)
— the opposite of the Buoy/BB11 + Levitate/BB14 siblings' soft floating
shadow that lifts off on hover; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

The original is a **LIGHT** (white `#fff` background) single-column
Bootstrap 4 UI-kit page: a 32px near-black heading **"Button #05"** at the
top (see the heading-number artifact note below), then **eight blocks** —
two UNCAPTIONED button blocks (solid icon buttons + outlines; round solid

- round outline), an UNCAPTIONED full-width social grid (Twitter /
  Facebook / Dribbble in four variants), then captioned blocks **Dropdown
  Buttons**, **Group Buttons**, **Checkboxes + Radios Buttons + Slide
  Button** (captions inside the three `col-md-4` columns), **Social
  Buttons** (five brands × seven buttons), and an UNCAPTIONED closing
  action row. Unlike the Stencil/BB13 sibling the first blocks carry NO
  captions and there are no "Pick Your …" captions at all (BB14/Levitate
  had them; BB15 dropped them); BB15 also ADDS a **Slide Button** block
  (two iOS-style toggle switches) that BB14 does not have. Every button is
  **rounded-5px**, `border-width: 1px` solid in the button's own color,
  **14px / weight 500 / padding `12px 16px`**, title-case labels (NO
  `text-transform`), and rests on the **chunky hard offset shadow** — the
  signature. The custom palette replaces Bootstrap's defaults entirely:
  primary is STEEL BLUE `#4f81c7` (hover `#3768ac`), secondary is TEAL
  `#40bfc1` (hover `#329a9c`), tertiary is GREEN `#48da79` (hover
  `#28c75d`), quarternary is PINK `#ff78ae` (hover `#ff458f`); each solid
  variant casts `3px 5px 0px 0px <darker-shade>` (primary `#3d73c0`,
  secondary `#39adaf`, tertiary `#33d669`, quarternary `#ff5f9f`), outline
  variants cast a LIGHTER shade (`#769dd3`, `#67cccd`, `#72e398`,
  `#ffabcd`). `btn-round` is a pill (`border-radius: 40px`); `btn-outline`
  is a light ghost — `1px solid rgba(0,0,0,0.1)` with **BLACK text** (light
  theme); `btn-link` is borderless, shadowless, BLACK text with padding
  KEPT at `12px 16px`. Social brand buttons (Facebook `#4f69a2`, Twitter
  `#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`)
  come in solid / outline / round / round-outline icon-only variants plus
  solid / outline / link labeled variants with Ionicons logos. The page
  also showcases Bootstrap dropdowns, joined button groups, custom colored
  checkboxes/radios (checked glyph in the variant color), and the
  signature **Slide Button** iOS toggles (blue `#03A9F4` ON knob on a
  light-blue `#ebf7fc` track; red `#F44336` OFF knob on a pink `#fcebeb`
  track). There is NO navbar, NO hero, NO images, and NO footer in the
  original — the whole page is the kit showcase itself. Chunky recreates
  the structure section-for-section with matching layout, tokens,
  typography, and content kinds (no ColorLib assets copied; Ionicons
  replaced by `lucide-react` equivalents).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 15" is
> FORBIDDEN as the app name. **Chunky** is the new, original name —
> single lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-14). Source slug +
> preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-15/` returns
> **404**; the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/` (HTTP
> 200 — the same nested `/bb/` subpath pattern as "Bootstrap Buttons
> 01"–14). The page `<title>` is "Button 05".

> ⚠ HEADING NUMBER ARTIFACT: the live `h2` renders **"Button #05"** (with
> a leading space in the source: `<h2 class="heading-section"> Button
#05</h2>`; the `<title>` is likewise "Button 05") — the number was
> copy-pasted from the "Bootstrap Buttons 05" sibling and never updated
> (same kind of artifact as Levitate/14's "Button #04", Stencil/13's
> "Button #03", Capsule/12's "Button #02" and Buoy/11's "#01 — Bootstrap
> 4 Buttons"). Fidelity mandate = render the heading exactly as the
> reference renders it: **"Button #05"**. Do NOT "fix" it to "Button
> #15". (The leading source whitespace is a text node and is invisible
> in the render; it does not need to be reproduced.)

> ⚠ CAPTION TYPO: the radio column caption reads **"Radios Buttons"**
> (plural "Radios") in the source — keep as authored.

> ⚠ SLIDE BUTTON COPY QUIRK: switch #1 is unchecked and shows the blue
> "ON" knob with description **"Toggle is on"**; switch #2 is CHECKED
> (red "OFF" knob per the CSS mechanics — the span text is "ON" in the
> HTML but renders gray while the `:after` "OFF" turns white, so the
> visible knob reads "OFF") and its description reads **"Toggle is
> Off"**. The descriptions are mismatched with the visual states in the
> source (switch #2 shows ON state but says "Toggle is Off") — replicate
> the VISIBLE result: switch 1 = unchecked (blue ON knob left, light
> track), switch 2 = checked (red OFF knob right, pink track), with the
> descriptions exactly as authored ("Toggle is on" / "Toggle is Off").

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 15". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 676). Free UI-kit button-component
  template. The `bootstrap-buttons-15` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-15/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/` (HTTP 200,
  27.3KB HTML, `<title>Button 05</title>`, heading `Button #05` — the
  "#05" copy-paste artifact, see above). Stylesheets: `css/style.css`
  (232KB — Bootstrap 4 base + the custom light theme; the token source),
  `css/ionicons.min.css` (glyph font — used by the heart/social/checkbox
  icons). JS: jQuery + Popper + Bootstrap bundle — only the Bootstrap
  dropdown behavior is actually used on this page (four dropdown toggles).
  Structure, copy, and tokens below are from the live DOM + both
  stylesheets + the TEMPLATES.md screenshot (2026-08-14).
- **Screenshot (TEMPLATES.md `bootstrap-buttons-15.jpg`, 1200×972) —
  viewed 2026-08-14:** CONSISTENT with the live page — white background,
  bold dark "Button #05" heading, the blue/teal/green/pink palette, icon
  buttons with a "slight 3D effect" (the chunky hard shadow), outline +
  round rows, social grid, dropdown + group sections. The static
  screenshot reads slightly flatter than the live page (hard offset
  shadows are subtle in the image); the LIVE computed styles are
  AUTHORITATIVE for the shadow (same situation as the Levitate/BB14 and
  Buoy/BB11 siblings). Both references AGREE on structure and colors.
- **Visual design (live DOM + computed styles):** LIGHT `#fff` page
  background (Bootstrap default — the custom `body` rule only sets
  `font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal;` — NO background override, so
  the page stays white). One `section.ftco-section#buttons` (padding
  `7em 0` = 105px top/bottom) > `div.container`. Title row
  (`div.row.mb-4`): `h2.heading-section` "Button #05" — **32px,
  near-black `#212529`**, weight 400 (inherited). Block captions =
  `h2.heading-section > small` — **16px `#212529`**, weight 400, NO
  uppercase. Button anatomy: `<button type="button" class="btn mb-2
mb-m-0 btn-<color> btn-block">` — labels are DIRECT text nodes in
  **title-case** (NO `text-transform`); icons are `<i class="ion-*"></i>`
  (Ionicons glyph font). Buttons are **NOT flat and NOT softly floating**
  — the signature is a **chunky HARD offset shadow** (no blur radius):
  base `.btn` = `box-shadow: 0px 5px 0px 0px #ebebeb`; each colored
  solid variant overrides with `3px 5px 0px 0px <darker-shade>`; outline
  variants with a lighter shade; `.btn-round` keeps the same chunky
  shadow. On hover/focus the shadow is KEPT (no shadow-removal rule in
  this template — the per-color `:hover/:focus` rules only darken
  background + border with `!important`).
- **Section order (1:1 from live DOM):** (row classes in parentheses)
  1. **Title** — `div.row.mb-4` > `col-md-12` > `h2.heading-section`
     **"Button #05"** (32px `#212529`, weight 400, left-aligned).
  2. **Block A — solid icon buttons + outlines** (row `mb-5`,
     UNCAPPED):
     a. `col-md-12 mb-3` > nested `row` of 4 × `col-md-3`: solid
     `btn-block` buttons with a **right-side icon strip**
     (`<div class="icon d-flex align-items-center justify-content-center">`,
     CSS: absolute, `top:0; right:0; width:50px; bottom:0;
   background: rgba(0,0,0,0.1)`): **Like** (`btn-primary`, heart),
     **Delete** (`btn-secondary`, trash), **Send** (`btn-tertiary`,
     paper-plane), **Download** (`btn-quarternary`, cloud-download).
     b. `col-md-12 mb-2` > nested `row` of 4 × `col-md-3`: outline
     `btn-block` **"Default"** ×4 (`btn-outline-primary`,
     `btn-outline-secondary`, `btn-outline-tertiary`,
     `btn-outline-quarternary`).
  3. **Block B — round solid + round outline** (row `mb-5`, UNCAPPED):
     a. `col-md-12 mb-3`: 4 × `col-md-3` **"Default"** ×4
     (`btn-round btn-primary`, `btn-round btn-secondary`,
     `btn-round btn-tertiary`, `btn-round btn-quarternary`).
     b. `col-md-12 mb-2`: 4 × `col-md-3` **"Default"** ×4
     (`btn-round btn-outline`).
  4. **Full-width social grid** (`div.row`, UNCAPPED) — nested row of 4
     `col-md-3` columns; each stacks 3 buttons (`mb-3 text-left w-100`):
     "Twitter" / "Facebook" / "Find us on Dribbble" with brand icon
     `mr-2`. Columns: solid, `btn-outline`, `btn-round`,
     `btn-round btn-outline` (12 buttons total).
  5. **Dropdown Buttons** (row `mb-5`, captioned) — nested row of 4
     `col-md-3` dropdowns (`div.dropdown.d-block`), toggles **"Dropdown
     button"** in primary / secondary / tertiary / quarternary
     (`btn-block dropdown-toggle`), menu items Action / Another action /
     Something else here.
  6. **Group Buttons** (row `mb-5`, captioned) — nested row of 2
     `col-md-6` joined groups (`btn-group mb-2 mb-md-0 btn-block`):
     group 1 primary **"Button 1"** / outline-primary **"Outline
     Button"** / **"Button 1"**; group 2 secondary **"Button 2"** /
     outline-secondary **"Outline Button"** / **"Button 2"**.
  7. **Checkboxes + Radios Buttons + Slide Button** (row `mb-5`,
     captions INSIDE the columns) — 3 × `col-md-4`:
     a. **Checkboxes** column — 5 checked checkboxes
     `checkbox-{primary,secondary,tertiary,quarternary,dark}`, labels
     Primary / Success / Danger / Warning / Disabled (label-variant
     mismatch is source copy, keep); Disabled also disabled.
     b. **Radios Buttons** column — 5 radios
     `radio-{primary,secondary,tertiary,quarternary,dark}`, labels
     Primary / Success / Danger / Warning / Disabled; first 4 checked,
     Disabled disabled.
     c. **Slide Button** column — two iOS-style toggles
     (`slide-button` > 2 × `toggle-button-cover` > `button-cover
   d-flex align-items-center` > `.button.r` (74×36px) with hidden
     checkbox + `.knobs` + `.layer` + `ml-2` description): switch #1
     UNCHECKED, blue ON knob (left), description **"Toggle is on"**;
     switch #2 CHECKED, red OFF knob (right), description **"Toggle
     is Off"** (see copy quirk above).
  8. **Social Buttons** (row `mb-5`, captioned) — `col-md-12` caption,
     then 5 rows (`col-md-12 mb-4`), each 7 buttons: 4 icon-only (solid,
     round solid, outline, round outline) + 3 labeled (solid
     `btn-<brand>`, `btn-outline`, **`btn-link ml-2`** — note: the link
     variant has NO brand class → BLACK text): FB "Share - 8.2k /
     8.5k / 8k", Twitter "Connect with Twitter" ×3, Linkedin "Connect
     with Linkedin" ×3, Pinterest "Pin it - 1k" ×3, Dribbble "Find us on
     Dribbble" ×3.
  9. **Action row** — `div.row` (NO mb-5) > col-md-12: 7 round buttons,
     6 `btn-round btn-outline` + 1 `btn-round btn-primary`: **"Watch
     Photos"** (images icon), **"Download"** (download icon), icon-only
     download (NO label), **"Add Comment"** (NO icon — quirk), icon-only
     chat (NO label), **"Like"** + `small.ml-4.rounded` "2" badge
     (heart icon), **"Create Account"** (primary, no icon).
  - Footer: NONE in original → add minimal Component Dock footer.

## Design tokens

- **Page:** `#fff` background (no override), Poppins body font
  (`font-family: "Poppins", Arial, sans-serif; font-size: 15px;
line-height: 1.8; font-weight: normal`). Section padding `7em 0`
  (105px).
- **Heading:** 32px, `#212529` (near black), weight 400. Captions
  (`small`): 16px `#212529`, weight 400, no uppercase.
- **Button anatomy:** 14px, weight 500, padding `12px 16px`,
  `border-radius: 5px`, `border-width: 1px` solid in the button's own
  color, `cursor: pointer`, title-case labels (NO `text-transform`),
  `transition: all 0.3s ease`, `overflow: hidden`, `position: relative`.
  **Signature shadow (chunky hard press, no blur):** base
  `box-shadow: 0px 5px 0px 0px #ebebeb`; per-color solid variants
  `3px 5px 0px 0px <darker>`; KEPT on hover/focus (fill darkens only).
  `.btn-round` = `border-radius: 40px` (PILL). `.btn-block` =
  `display: block; width: 100%`.
- **Custom palette (replaces Bootstrap defaults):**
  - primary `#4f81c7` STEEL BLUE, text `#fff`, shadow `3px 5px 0px
#3d73c0`, hover/focus `#3768ac` — NOT Bootstrap blue
  - secondary `#40bfc1` TEAL, text `#fff`, shadow `3px 5px 0px #39adaf`,
    hover/focus `#329a9c` — NOT Bootstrap gray
  - tertiary `#48da79` GREEN, text `#fff`, shadow `3px 5px 0px
#33d669`, hover/focus `#28c75d` — custom class
  - quarternary `#ff78ae` PINK, text `#fff`, shadow `3px 5px 0px
#ff5f9f`, hover/focus `#ff458f` — custom class
  - outline-<color>: WHITE bg, colored text + 1px solid border, LIGHTER
    shadow (`#769dd3` / `#67cccd` / `#72e398` / `#ffabcd`); hover fills
    with the base color + white text (`#4f81c7` / `#40bfc1` / `#48da79`
    / `#ff78ae`)
  - plain `btn-outline`: transparent/white bg, **BLACK text**, 1px solid
    `rgba(0,0,0,0.1)` — LIGHT ghost (NOT the translucent-white ghost of
    the dark-theme siblings)
  - `btn-link` (template override): `border: none`, `box-shadow: none`,
    **BLACK text**, padding KEPT at `12px 16px` (social link variant has
    NO brand class — black text with brand icon `mr-1`; `ml-2` margin
    before it)
  - Social: facebook `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`,
    pinterest `#d03940`, dribbble `#ea6294` (same 5 as the rest of the
    series)
- **Icon strip (Block A solid buttons):** `.btn .icon` = absolute right
  strip, `width: 50px`, `background: rgba(0,0,0,0.1)` — a dark translucent
  band at the right end of the solid icon buttons, icon centered in it.
- **Checkboxes (custom, from CSS):** native input hidden (`visibility:
hidden`, absolute); replaced by a large Ionicons glyph — unchecked
  `\f15c` (square outline, 37px, `rgba(0,0,0,0.2)`), checked `\f148`
  (checkmark, 30px, variant color); label `<span>` `margin-left: 35px`.
  Variants set the checked glyph color: primary `#4f81c7`, secondary
  `#40bfc1`, tertiary `#48da79`, quarternary `#ff78ae` (NOTE: matches
  the BUTTON colors here — unlike BB14, NO mint quirk), dark `#343a40`.
  Disabled: `opacity: 0.65`. Recreate with a visually-hidden native
  checkbox + a custom box/check element (lucide `Square`/`Check` or CSS)
  — same visual result, no Ionicons font.
- **Radios (custom, from CSS):** native input off-screen (`left:
-9999px`); label `padding-left` ~28px; `::before` = 18px circle,
  `border: 2px solid rgba(0,0,0,0.1)`, `background: #fff` (WHITE fill —
  light theme); `::after` = 12px dot in variant color, hidden (opacity 0,
  scale 0) until `:checked` (opacity 1, scale 1, `transition: all 0.2s
ease`); when checked the ring `border-color` also turns the variant
  color. Variants: primary `#4f81c7`, secondary `#40bfc1`, tertiary
  `#48da79`, quarternary `#ff78ae`, dark `#343a40`.
- **Slide Button (iOS toggle, from CSS):** `.button` = 74×36px, overflow
  hidden; `.layer` track = full width, `background: #ebf7fc` (light
  blue), `border-radius: 100px`; knob = 28px circle, `#03A9F4` blue,
  white bold 10px text, `border-radius: 50%`, top 4px, left 4px
  (unchecked). CHECKED: knob moves to `left: 42px`, bg `#F44336` red,
  text "OFF" white, track `#fcebeb` (pink). Unchecked knob label "ON".
  Transition 0.3s ease (cubic-bezier knob). Descriptions 15px body text.
- **Dropdown (from CSS):** `.dropdown .dropdown-menu` = white bg,
  `border: none`, `box-shadow: 0px 10px 34px -20px rgba(0,0,0,0.41)`;
  items 13px-ish `rgba(0,0,0,0.7)`, hover bg `rgba(0,0,0,0.05)` +
  `#000`. Toggle caret is Bootstrap's `::after` triangle. Recreate with
  React state.
- **Group join:** Bootstrap `-1px` margin trick — members touch; first
  member radius `5px 0 0 5px`, inner members radius 0, last `0 5px 5px 0`.
- **Spacing:** kit-row buttons `mb-2 mb-md-0` (0.5rem bottom below md);
  Block A/B nested rows `mb-3` / `mb-2` on the col wrappers; full-width
  social grid buttons `mb-3`; social brand rows `mb-4`; icon gap `mr-1`
  (0.25rem), social icon gap `mr-2` (0.5rem), link variant `ml-2`;
  block rows `mb-5` (3rem), title row `mb-4`; social grid + action rows
  NO bottom margin.

## Requirements

### Requirement: Page structure

The system SHALL render the Chunky page as a single-column, centered
document on a white background, in this order: the "Button #05" title,
the eight showcase blocks (Block A [uncaptioned], Block B [uncaptioned],
full-width social grid [uncaptioned], Dropdown Buttons, Group Buttons,
Checkboxes + Radios Buttons + Slide Button, Social Buttons), the
uncaptioned action row, and a minimal footer. The page SHALL NOT render
a navbar or hero (none exist in the reference).

#### Scenario: Default render

- **GIVEN** the Chunky page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`) with the
  Poppins font
- **AND** a left-aligned title SHALL read "Button #05" (32px, near-black
  `#212529`; the "#05" number is a reference artifact and MUST be kept
  as-is — do NOT "fix" it to "#15")
- **AND** the page SHALL contain, in order, the blocks listed above
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block captions

- **GIVEN** the showcase blocks are displayed
- **WHEN** the user inspects a block
- **THEN** the captioned blocks SHALL be labelled by a 16px caption
  reading `Dropdown Buttons`, `Group Buttons`, `Checkboxes`, `Radios
Buttons`, `Slide Button`, or `Social Buttons` respectively
- **AND** Block A, Block B, the full-width social grid and the action
  row SHALL have NO caption
- **AND** the radio column caption SHALL read "Radios Buttons" (the
  source typo — keep as authored)

### Requirement: Chunky hard press shadow signature

The system SHALL render every button with the Chunky signature: a hard,
unblurred 3D offset shadow at rest that is KEPT on hover/focus while the
fill darkens.

#### Scenario: Rest shadow

- **GIVEN** any button is displayed (not hovered/focused)
- **WHEN** the user inspects it
- **THEN** the button SHALL render its variant's hard offset shadow —
  solid variants `box-shadow: 3px 5px 0px 0px <darker-shade>` (primary
  `#3d73c0`, secondary `#39adaf`, tertiary `#33d669`, quarternary
  `#ff5f9f`), plain/round outline `0px 5px 0px 0px #ebebeb`, colored
  outline variants their lighter shade (`#769dd3`, `#67cccd`,
  `#72e398`, `#ffabcd`) — NO blur radius, NO soft floating shadow
  (unlike the Levitate/Buoy siblings)

#### Scenario: Hover deepens fill, shadow stays

- **GIVEN** any solid color button
- **WHEN** the user hovers or focuses it
- **THEN** the background SHALL change to the hover shade (primary
  `#3768ac`, secondary `#329a9c`, tertiary `#28c75d`, quarternary
  `#ff458f`)
- **AND** the hard shadow SHALL remain unchanged (no lift-off — the
  reference has no shadow-removal rule)

### Requirement: Button anatomy

The system SHALL render all buttons with the shared anatomy: 14px,
weight 500, padding `12px 16px`, `border-radius: 5px`, 1px solid border
in the button's own color, title-case labels with NO
`text-transform`, and a `0.3s` transition. Pill variants SHALL use
`border-radius: 40px`; block variants SHALL fill their column width.

#### Scenario: Round and block variants

- **GIVEN** a button is displayed
- **WHEN** the user inspects it
- **THEN** regular buttons SHALL have a 5px radius and 1px border
- **AND** `btn-round` buttons SHALL be pills (40px radius)
- **AND** `btn-block` buttons SHALL be full-width
- **AND** labels SHALL be title-case (`Like`, `Delete`, `Send`,
  `Download`, `Default`, `Create Account`) — never upper-cased

### Requirement: Block A — solid icon buttons and outlines

The system SHALL render the first uncaptioned block: four solid block
buttons with a right-side dark icon strip (Like / Delete / Send /
Download in the four colors) above four outline block buttons labeled
"Default" in the four outline colors.

#### Scenario: Solid icon buttons

- **GIVEN** Block A row 1
- **WHEN** the user views it
- **THEN** four buttons SHALL render labeled `Like` (primary, heart),
  `Delete` (secondary, trash), `Send` (tertiary, paper-plane),
  `Download` (quarternary, cloud-download)
- **AND** each SHALL have a right-side icon strip (50px wide,
  `rgba(0,0,0,0.1)` background) with the matching lucide icon centered
  in it
- **AND** each SHALL cast the chunky hard shadow of its solid variant

#### Scenario: Outline row

- **GIVEN** Block A row 2
- **WHEN** the user views it
- **THEN** four buttons SHALL render, each labeled `Default`
- **AND** each SHALL have a white background, 1px solid colored border,
  colored text, and the lighter outline shadow shade

### Requirement: Block B — round solid and round outline

The system SHALL render the second uncaptioned block: four pill solid
buttons labeled "Default" in the four colors above four pill outline
buttons labeled "Default".

#### Scenario: Round solid row

- **GIVEN** Block B row 1
- **WHEN** the user views it
- **THEN** four pill buttons SHALL render with the four solid colors and
  their chunky hard shadows

#### Scenario: Round outline row

- **GIVEN** Block B row 2
- **WHEN** the user views it
- **THEN** four pill ghost buttons SHALL render with black text and a
  1px `rgba(0,0,0,0.1)` border

### Requirement: Full-width social grid

The system SHALL render an uncaptioned four-column grid after Block B:
Twitter, Facebook and "Find us on Dribbble", each in solid, outline,
round and round-outline variants (12 buttons), left-aligned full-width
with the brand icon before the label.

#### Scenario: Grid columns and variants

- **GIVEN** the social grid is displayed
- **WHEN** the user inspects it
- **THEN** each brand SHALL appear four times (solid, outline, round,
  round-outline)
- **AND** the copy SHALL read `Twitter`, `Facebook`, `Find us on
Dribbble`
- **AND** the grid SHALL have no caption

### Requirement: Dropdown buttons

The system SHALL render a captioned Dropdown Buttons block with four
block dropdown toggles labeled "Dropdown button" in primary / secondary
/ tertiary / quarternary, each opening a menu with Action, Another
action and Something else here.

#### Scenario: Opening a dropdown

- **GIVEN** the Dropdown Buttons block is displayed
- **WHEN** the user activates a dropdown toggle
- **THEN** a menu SHALL open below it with the items `Action`, `Another
action`, `Something else here`
- **AND** the toggle SHALL expose `aria-expanded="true"` and
  `aria-haspopup="menu"`

#### Scenario: Closing a dropdown

- **GIVEN** a dropdown menu is open
- **WHEN** the user presses Escape, clicks outside, or activates a
  different dropdown toggle
- **THEN** the open menu SHALL close (only one menu open at a time)

### Requirement: Group buttons

The system SHALL render a captioned Group Buttons block with two joined
button groups: group 1 joins primary "Button 1" / outline-primary
"Outline Button" / primary "Button 1"; group 2 joins secondary "Button
2" / outline-secondary "Outline Button" / secondary "Button 2".

#### Scenario: Joined groups

- **GIVEN** the Group Buttons block is displayed
- **WHEN** the user views it
- **THEN** group members SHALL join visually (first member left-rounded,
  inner members square, last member right-rounded)
- **AND** the outline members SHALL use the variant colors (`#4f81c7`,
  `#40bfc1`) — NOT Bootstrap blue

### Requirement: Checkboxes column

The system SHALL render a captioned Checkboxes column with five checked
custom checkboxes: labels Primary / Success / Danger / Warning /
Disabled in primary / secondary / tertiary / quarternary / dark colors,
each showing a checked glyph in its variant color; Disabled SHALL be
disabled.

#### Scenario: Checkbox list

- **GIVEN** the Checkboxes column is displayed
- **WHEN** the user views it
- **THEN** five checked checkboxes SHALL render with the labels above
- **AND** each checked glyph SHALL be colored primary `#4f81c7`,
  secondary `#40bfc1`, tertiary `#48da79`, quarternary `#ff78ae`, dark
  `#343a40`
- **AND** the `Disabled` checkbox SHALL be non-interactive and rendered
  at `opacity: 0.65`

### Requirement: Radios Buttons column

The system SHALL render a captioned Radios Buttons column (caption typo
preserved) with five custom radios — labels Primary / Success / Danger /
Warning / Disabled in the five variant colors — the first four checked,
Disabled disabled.

#### Scenario: Radio list

- **GIVEN** the Radios Buttons column is displayed
- **WHEN** the user views it
- **THEN** the caption SHALL read `Radios Buttons` (typo kept as
  authored)
- **AND** five radios SHALL render with the labels above
- **AND** each checked radio SHALL show a dot in its variant color with
  the ring border in the same color (white ring fill — light theme)
- **AND** the `Disabled` radio SHALL be non-interactive

### Requirement: Slide Button column

The system SHALL render a captioned Slide Button column with two
iOS-style toggle switches on rounded light-blue tracks: switch 1
unchecked (blue "ON" knob on the left, description "Toggle is on");
switch 2 checked (red "OFF" knob on the right on a pink track,
description "Toggle is Off").

#### Scenario: Toggle states

- **GIVEN** the Slide Button column is displayed
- **WHEN** the user views it
- **THEN** switch 1 SHALL show the ON state — blue `#03A9F4` knob left
  on the `#ebf7fc` track — with the description `Toggle is on`
- **AND** switch 2 SHALL show the OFF state — red `#F44336` knob right
  on the `#fcebeb` track — with the description `Toggle is Off`

#### Scenario: Toggle interaction

- **GIVEN** either toggle switch
- **WHEN** the user clicks it
- **THEN** the knob SHALL slide to the opposite side and the track/knob
  colors SHALL swap to the other state

### Requirement: Social buttons

The system SHALL render a captioned Social Buttons block with five brand
rows (Facebook, Twitter, Linkedin, Pinterest, Dribbble), each with 7
buttons: 4 icon-only (solid, round solid, outline, round outline) + 3
labeled (solid brand, outline, black link variant with `ml-2`), with the
exact reference labels.

#### Scenario: Brand rows

- **GIVEN** the Social Buttons block is displayed
- **WHEN** the user views it
- **THEN** Facebook SHALL render `Share - 8.2k`, `Share - 8.5k`, `Share
  - 8k`; Twitter `Connect with Twitter`×3; Linkedin`Connect with
    Linkedin`×3; Pinterest`Pin it - 1k`×3; Dribbble`Find us on
    Dribbble` ×3
- **AND** the link variant SHALL have black text, no border, no shadow,
  padding kept at `12px 16px`, brand icon before the label

### Requirement: Action row

The system SHALL render the uncaptioned closing action row with seven
round buttons: Watch Photos (images icon), Download (download icon),
icon-only download (no label), Add Comment (no icon), icon-only chat (no
label), Like with a "2" badge, and Create Account (round primary).

#### Scenario: Action buttons

- **GIVEN** the action row is displayed
- **WHEN** the user views it
- **THEN** six `btn-round btn-outline` buttons and one
  `btn-round btn-primary` `Create Account` SHALL render in order:
  `Watch Photos`, `Download`, icon-only download, `Add Comment`
  (no icon — source quirk), icon-only chat, `Like` + `2` badge (heart
  icon), `Create Account`
- **AND** the two icon-only buttons SHALL carry an `aria-label` (repo
  a11y convention; visual result identical to the reference)

### Requirement: Responsive behavior

The system SHALL stack all multi-column rows vertically on narrow
viewports and reduce the section padding to a mobile-friendly value.

#### Scenario: Mobile layout

- **GIVEN** a narrow viewport (mobile)
- **WHEN** the user views the page
- **THEN** block button rows SHALL stack vertically with the reference's
  bottom margins (`mb-2` between stacked buttons, `mb-5` between blocks)
- **AND** the four-column grids (Block A/B, social grid, dropdowns)
  SHALL collapse to single-column stacks
- **AND** the Checkboxes / Radios Buttons / Slide Button columns SHALL
  stack vertically
- **AND** the section top/bottom padding SHALL be reduced from the
  reference's 105px to a mobile-friendly value (repo pattern
  `py-16`/`py-12`-ish)

### Requirement: Footer

The system SHALL render a minimal muted footer at the bottom of the page
linking to https://www.componentdock.com/ ("Component Dock"), replacing
any external attribution links.

#### Scenario: Component Dock attribution

- **GIVEN** the page is fully rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL render with a link to
  `https://www.componentdock.com/`
- **AND** no app code SHALL reference ColorLib (provenance lives only in
  this spec, TEMPLATES.md, and the PR)

## Verification checklist

- [ ] `scripts/verify-app.sh chunky` green: typecheck + lint + vitest
      100% coverage (lines/functions/branches/statements) + build
- [ ] `npm run spec:validate` passes for `template-chunky`
- [ ] Section order 1:1 with the live reference (title → Block A →
      Block B → social grid → Dropdown → Group → Checkboxes/Radios/Slide
      → Social → action row)
- [ ] Heading renders "Button #05" (artifact preserved), captions
      "Radios Buttons" typo preserved, "Toggle is on"/"Toggle is Off"
      descriptions as authored
- [ ] Chunky hard 3D shadow implemented and KEPT on hover/focus; fills
      darken per color
- [ ] Custom palette tokens in `@theme`: 4 solid colors + 4 hover shades + 4 outline shades + black ghost border + 5 social colors +
      toggle blue/red/track colors
- [ ] Custom checkboxes/radios (visually-hidden native inputs + colored
      glyphs), Disabled states, `opacity: 0.65`
- [ ] Dropdowns: React state, one open at a time, outside-click/Escape,
      `aria-expanded`/`aria-haspopup`
- [ ] Joined button groups with the `-1px` margin join
- [ ] Icon strip on the right of Block A solid buttons
- [ ] Like "2" badge, Add Comment without icon, icon-only buttons with
      `aria-label`
- [ ] No ColorLib references in app code; footer links
      https://www.componentdock.com/
- [ ] `public/CNAME` = `chunky.free.componentdock.com`; `"homepage"` =
      `https://chunky.free.componentdock.com`; `injectUiSource()` present
      in vite.config.ts; `package-lock.json` registers the workspace
- [ ] lucide-react icons only (Heart, Trash2, Send, Download,
      CloudDownload, Image, MessageCircle, Facebook, Twitter, Linkedin,
      Pinterest, Dribbble, Check, Square, etc.) — NO Ionicons font
