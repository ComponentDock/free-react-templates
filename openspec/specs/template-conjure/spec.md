# Template: Conjure (Registration Form Wizard)

## Purpose

Conjure is a single-page multi-step registration FORM WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 1" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-1/), built under a DIFFERENT
name (**Conjure**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a jQuery-Steps-driven form wizard (`jquery.steps.js` + jQuery
3.3.1): one 920px-wide white card centered on a warm-cream `#f9f6f1` page,
split 40/60 into a left product photo and a right registration form, with a
row of three clickable step DOTS (no titles — the `h2` step headers are
empty and the `.number`/`.current-info` elements are hidden) hovering above
the card and a Backward/Forward/Submit button row overlaid at the card's
bottom-right. It is the FIRST member of the 30-template "Bootstrap Wizards"
family (`colorlib-wizard-1` … `colorlib-wizard-30`): every sibling is the
same jQuery-Steps skeleton with a different color scheme and product images
per step. No other ColorLib Wizard spec exists yet — Conjure is the chain
seed; do not cross-contaminate its tokens with any later wizard sibling.

**WHAT MAKES CONJURE DISTINCT (signature behaviors):**

1. **Clickable step dots instead of labeled tabs.** The three steps have NO
   titles — the header `h2` elements are empty and jQuery Steps' `.number`
   and `.current-info` are `display: none`. Navigation is three 12px circles
   (`#e9e0cf`), the first + every checked dot colored olive `#6d7f52`,
   connected by 58×2px hairline segments (the segment right of a checked dot
   fills olive via a 0.6s width transition). `enableAllSteps: true` — every
   dot is clickable and navigates directly to its step (the click handler
   marks the clicked dot and all previous `checked`, later dots unchecked).
2. **`enableAllSteps: true` — NO validation gating.** Unlike typical
   wizard-forms, the original never blocks navigation between steps (no
   required-field validation anywhere in `main.js`); the forms are
   decorative. Recreate that: navigation always succeeds.
3. **Button color state machine.** The button row (bottom-right, overlaid)
   has three `<a>` buttons — Backward, Forward, Submit. Backward is
   `aria-disabled` on step 1 and rendered TRANSPARENT (`opacity: 0`,
   `transition: all 1s`) — the source keeps it in the DOM, invisible.
   While Backward is disabled, Forward is BEIGE `#e9e0cf` with `#666` text
   (step 1). The moment Backward is enabled (`li[aria-disabled="false"]`),
   EVERY button after it (Forward, and Submit on the last step) turns OLIVE
   `#6d7f52` with white text. So: step 1 shows a single beige Forward;
   steps 2–3 show a beige Backward plus a green Forward/Submit. Labels are
   CUSTOM: "Backward" / "Forward" / "Submit" (not the jQuery-Stapes
   defaults). Icons: chevron-left on Backward, chevron-right on Forward,
   check on Submit — Material Design Iconic Font glyphs in the original →
   lucide `ChevronLeft` / `ChevronRight` / `Check` in the recreation.
4. **Custom country dropdown (step 2).** Not a `<select>`: a
   `.select-control` box (37px, 2px underline) showing "Your country" in
   `#999` with a caret-down icon at the right, toggling a white
   `ul.dropdown` (1px `#81acee` border) with three options — United States,
   United Kingdom, Viet Nam. Clicking an option swaps the control text
   (from the `rel` attribute) and closes the list; clicking anywhere on the
   page closes it (`(html).click` handler); the open list itself stops
   propagation. This is a bespoke dropdown, NOT Bootstrap's.
5. **Two custom radio/checkbox styles.** Step 1 gender radios
   (`.checkbox-tick`): 13px circles with a `#999` ring; the checked one
   fills `#999` and shows a WHITE check glyph (Material `\f26b`); label
   padding-left 23px, Male/Female with a 26px gap, "Male" preselected. Step
   1+3 consent checkboxes (`.checkbox-circle`): 13px ring that gets a 7px
   solid `#999` inner dot when checked, label text 13px/1.9, 63% of the form
   width (margin-top 41px; 24px on step 3 via `.mt-24`). Inputs are
   invisible (opacity 0) but clickable.
6. **Underline-only inputs.** Every `.form-control` is 37px tall, borderless
   except a 2px bottom rule `#e6e6e6`; text `#666`, placeholder `#999`;
   focus turns the underline `#e9e0cf` (sand). No boxes, no radii. The
   original removes ALL focus outlines (`:focus { outline: none }`) — the
   recreation must restore accessible focus-visible rings per repo
   conventions (documented deviation).

## Naming

The ColorLib source name "Colorlib Wizard 1" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Conjure** is the new, original
name — single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-08-18: zero hits for `conjure` in those listings). It is the FIRST of
the 30-member Bootstrap Wizards family and opens a magic-practice verb chain
for the series (matching the verb-chain precedent of the Multiselect family:
Husk/Groat/Chaff/Tare/Sift…): **Conjure (1) → Evoke (2) → Summon (3) →
Invoke (4) → Enchant (5) → Charm (6) → Hex (7) → Bless (8) → Curse (9) →
Banish (10) → …** (proposal for later siblings; only Conjure is established
here — implementers of wizard-2+ should follow whatever the chain has become
by then, keeping single-word verbs). Sibling candidates considered and
rejected for #1: "Spell", "Ritual", "Coven", "Talisman", "Sigil" (all nouns —
the chain is verb-based like the winnowing chain), "Wizard" (source-name
reuse, forbidden). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 1" (page title: "FormWizard_v1").
  Listed in TEMPLATES.md under **Bootstrap Wizards (30)** (section header
  line 844; the one and only row at line 846 — `wp/template/colorlib-wizard-1/`
  appears exactly ONCE; wizard-10..19 are separate rows). The 30-member
  family: colorlib-wizard-1 … 30. **This is the chain seed — no sibling
  spec exists yet.**
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch AND
  real-browser interaction — Forward/Backward clicks through all three
  steps, dropdown open/select, computed layout):** the naive
  `https://preview.colorlib.com/theme/colorlib-wizard-1/` returns 404 (9
  bytes); the REAL preview is
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-1/index.html`** (HTTP
  200, 5,437 bytes, 143 lines, `<title>FormWizard_v1</title>` — confirmed
  via a public reference: twbs/bootstrap issue #31520 links the same
  `colorlib.com/etc/bwiz/` path for this family). Stylesheets:
  `css/style.css` (9,381 bytes — ALL styling, no Bootstrap, custom written),
  `fonts/material-design-iconic-font/css/material-design-iconic-font.css`
  (icon font — glyphs `\f2ff` chevron-left, `\f301` chevron-right, `\f26b`
  check; replace with lucide icons, do NOT ship the font). Scripts:
  `js/jquery-3.3.1.min.js`, `js/jquery.steps.js` (the wizard plugin),
  `js/main.js` (9-line init: `$("#wizard").steps({ headerTag: "h2",
bodyTag: "section", transitionEffect: "fade", enableAllSteps: true,
transitionEffectSpeed: 500, labels: { finish: "Submit", next: "Forward",
previous: "Backward" } })` plus a dot-click checked-state handler, the
  Forward/Backward click handlers calling `steps('next')`/`steps('previous')`,
  and the bespoke dropdown toggle/select/outside-close handlers). Fonts:
  local `@font-face` **Muli-Regular** + **Muli-SemiBold** (Muli is a Google
  Font — load 400 + 600 via `<link>` in index.html).
- **Live DOM structure (1:1, verified against the rendered page):**
  - `div.wrapper` (`height: 100vh`, `background: #f9f6f1`, flex
    align/justify center) → `form#wizard` (`width: 920px`, `position:
relative`) containing THREE `h2` (empty step titles) + `section`
    pairs, then jQuery Steps transforms it at load into:
    - `ul[role=tablist]` (the STEP DOTS — `position: absolute; top:
27.44%; right: 30%; transform: translateX(50%)`, `z-index: 9`,
      flex centered) → 3 `li[role=tab]` → `a` (12×12px circle,
      `border-radius: 50%`, bg `#e9e0cf`, `margin-right: 78px`; the
      `span.number` + `.current-info` inside are `display: none`). The
      first `li` carries `.first` (dot bg `#6d7f52`); each `a:before`
      draws the 58×2px `#e9e0cf` connector to the RIGHT (hidden on the
      first), each `a:after` is the 0-width `#6d7f52` 58×2px fill that
      expands (`transition: all .6s`) when its `li` gains `.checked`
      (dot bg `#6d7f52` too). Dots are the ONLY step labels.
    - `div.content` (`height: 521px`, relative) → the three sections as
      `role=tabpanel` sections, each: `div.inner` (display flex, bg
      `#fff`, `box-shadow: 0 0 5px 0 rgba(0,0,0,.2)`):
      - `div.image-holder` (`width: 40%`, `height: 521px`) → `img`
        (`images/form-wizard-{1,2,3}.jpg` — per-step product photo of a
        shoe against a cream wall with a cactus prop; 368px wide at
        desktop = 40% of 920px).
      - `div.form-content` (`width: 60%`, `padding: 65px 51px 0`) →
        `div.form-header` → `h3` **"Registration"** (Muli SemiBold 22px,
        uppercase, `letter-spacing: 7px`, color `#453e79`, `border: 1px
solid #dad8e4`, `padding: 5px 15px`, inline-block, `margin-bottom:
75px`) → `p` step subtitle (Muli SemiBold 20px, color `#6d7f52`,
        centered, `margin-bottom: 26px`) → `div.form-row` groups.
    - `div.actions` (position absolute, `bottom: 55px; right: 51px`) →
      `ul` (flex, 20px gap) → `li[role=menuitem][aria-disabled]` × 2–3:
      `a.previous/.next/.finish` — **41px tall, 135–144px wide**; beige
      `#e9e0cf` bg + `#666` text (hover `#cfc7b8`) for Backward/Forward
      while back is disabled; `li[aria-disabled="true"] a { opacity: 0;
transition: all 1s }` (invisible Backward on step 1);
      `li[aria-disabled="false"] ~ li a` → olive `#6d7f52` + WHITE text
      (hover `#849963`) for every button after an enabled Backward. Icons
      via the icon font: `\f2ff` (chevron-left) on Backward's left,
      `\f301` (chevron-right) on Forward's right, `\f26b` (check) on
      Submit's right + on checked radio ticks.
  - The original has NO footer; per monorepo convention add a minimal
    attribution footer linking `https://www.componentdock.com/`
    ("Component Dock") so every shipped template carries the required link.
- **Step-by-step field inventory (verbatim placeholders, live-verified by
  walking all three steps in a real browser):**
  - **Step 1 — "Please fill with your details":** rows (1) `First Name` |
    `Last Name`; (2) `Your Email` | `Phone Number`; (3) `Age` | gender
    radios: **Male** (checked) / **Female** (`.checkbox-tick` circles,
    white check on `#999` fill when checked, label gap 26px; the holder is
    bottom-aligned via inline `align-self: flex-end; transform:
translateY(4px)`); then `.checkbox-circle` (width 63%, margin-top 41px,
    label 13px/1.9): **"Nor again is there anyone who loves or pursues or
    desires to obtaini."** (lorem-ish line, checkbox PRE-CHECKED, 13px ring
    - 7px `#999` inner dot).
  - **Step 2 — "Please fill with additional info":** rows (1) `Address`
    (`.w-100`); (2) `City` | `Zip Code`; (3) the custom country dropdown
    ("Your country" — `.select-control` 37px underline box, text `#999`,
    caret-down icon right, dropdown options **United States, United
    Kingdom, Viet Nam**; hover row `#81acee` bg + white text, border 1px
    `#81acee`) | an empty `.form-holder` spacer.
  - **Step 3 — "Send an optional message":** (1) `textarea` `.w-100`
    (inline `style="height: 99px"`, placeholder **"Your messagere here!"**
    — typo verbatim in the source; paraphrase is allowed but keep the
    kind of content a message placeholder); (2) `.checkbox-circle.mt-24`
    (margin-top 24px): **"Please accept terms and conditions ?"** with an
    inline link (color `#6d7f52`, hover `#89b843`), PRE-CHECKED.
  - All text inputs are `type=text` with `class="form-control"` (37px,
    underline-only, `#666`, placeholder `#999`, focus underline `#e9e0cf`);
    `textarea.form-control` adds `padding: 8px 0` and `resize: none`.
- **Design tokens (all verified 2026-08-18 from the live stylesheet +
  browser-rendered colors):**
  - **Page:** `#f9f6f1` warm cream, full-viewport height, flex-centered
    card. Mobile (<768px): wrapper height becomes 1201px, background NONE.
  - **Card:** white `#fff`, `0 0 5px rgba(0,0,0,.2)` shadow, 920px wide
    (≤991px: max-width 768px). Inner: 40% image (521px tall, mobile 100%
    width) + 60% form (padding 65px 51px 0; mobile 50px 20px 30px, inner
    loses the shadow and stacks).
  - **Fonts:** Muli — 400 regular (body, inputs, dropdown, checkbox text)
    - 600 semi-bold (h3, subtitle `p`, nav buttons). Google Fonts `<link>`
      (Muli 400,600).
  - **Title:** 22px uppercase Muli SemiBold, `letter-spacing: 7px`, color
    `#453e79` (deep indigo), 1px `#dad8e4` border all around, padding
    5px 15px, centered, margin-bottom 75px.
  - **Subtitle:** 20px Muli SemiBold, `#6d7f52` olive, centered, mb 26px.
  - **Accent olive:** `#6d7f52` (active/checked dots, Forward/Submit while
    Backward enabled, step subtitle, terms link) — hover `#849963`;
    link-hover `#89b843`.
  - **Sand/beige:** `#e9e0cf` (idle dots + connector lines, Backward/Forward
    buttons while Backward disabled, focus underline) — hover `#cfc7b8`.
  - **Inputs:** 37px, underline-only 2px `#e6e6e6`, text `#666`,
    placeholder `#999`, focus underline `#e9e0cf`; textarea height 99px,
    padding 8px 0.
  - **Dropdown:** control 37px underline; list white, 1px `#81acee`
    border, option rows `padding: 5px 10px`, hover row `#81acee` + white.
  - **Radio/checkbox:** 13px circle, 1px `#999` ring; checked: filled
    `#999` + white check (radio) or 7px `#999` inner dot (checkbox);
    labels 13px / line-height 1.9 for the circle type (checkbox text,
    `translateY(-5px)`), check font-size 11px.
  - **Buttons:** 41px tall; Backward 144px (icon LEFT at 26px),
    Forward 135px (icon RIGHT at 28px), Submit 124px (check icon RIGHT);
    20px gap; beige `#e9e0cf`/`#666` vs olive `#6d7f52`/white per the
    state machine; disabled Backward `opacity: 0` (1s transition) but
    STILL IN THE LAYOUT (flex gap keeps its 144px slot).
  - **Step dots:** 12px circles, `#e9e0cf`, 78px gap (last 0), connectors
    58×2px; active/checked `#6d7f52`; header overlay at card top
    (`top: 27.44%` of the 521px content, centered over the card). Card
    height 521px; form content height effectively 521px with buttons
    overlaid at bottom 55px right 51px.
- **Behaviors (all live-verified 2026-08-18 in a real browser):**
  - **Step navigation:** clicking Forward advances one step (fade
    transition 500ms); Backward goes back; on step 1 Backward is
    transparent/disabled, on step 3 Forward is replaced by Submit.
    Navigation is NEVER blocked (enableAllSteps, no validation anywhere).
    Field values persist across steps (the sections remain in the DOM,
    hidden/shown).
  - **Dot navigation:** clicking any of the three dots jumps straight to
    that step and marks it + all previous dots `checked` (olive), later
    dots idle. (jQuery Steps re-renders the tablist; the custom handler
    adds the checked classes.)
  - **Button color state:** step 1 → single beige Forward; steps 2–3 →
    beige Backward + olive Forward/Submit. Live-checked: on step 2 the
    Forward button is olive `#6d7f52` with white text and a `→` icon.
  - **Country dropdown:** click the control toggles the white list;
    clicking an option sets the control text to that option and closes
    the list; clicking anywhere else closes it; the list click does not
    bubble (stopPropagation). Live-checked: options United States, United
    Kingdom, Viet Nam; picking Viet Nam replaces "Your country" with
    "Viet Nam".
  - **Checkbox/radios:** all four (Male radio, step-1 consent, step-3
    consent) load CHECKED; clicking toggles visual state freely (no
    required semantics — decorative).
  - **No form submission:** the form has `action=""` and no submit
    handler; Submit just sits on step 3. The recreation should render
    Submit as a non-navigating button (no fake submit either).
- **Screenshot (`colorlib-free-wizard-1.jpg`, 1200×972, viewed 2026-08-18):**
  warm cream `#f9f6f1` page; centered white card with a soft shadow; left
  40% photo — a pair of sneakers (blue/purple + white/green) with a cactus
  pot on a cream wall; right 60% — centered **"REGISTRATION"** in uppercase
  spaced lettering with thin lines above/below (the h3's 1px `#dad8e4`
  border), the three small dots below it (first dot filled sage green
  `#6d7f52`, the others pale `#e9e0cf`), the olive subtitle "Please fill
  with your details", five underline-only fields (First Name/Last
  Name/Your Email/Phone Number/Age) with the Male radio filled, the long
  checked consent line, and a single BEIGE "Forward →" button at bottom
  right (Backward invisible — step-1 state). Matches the live DOM/CSS
  exactly; the images are demo photography replaced by picsum placeholders
  in the recreation. Do NOT hard-code any field VALUES as initial data
  (the pre-checked checkboxes/radios ARE initial state; the text inputs
  start empty).

## Design tokens

| Token                    | Value                     | Notes                                                                           |
| ------------------------ | ------------------------- | ------------------------------------------------------------------------------- |
| `--color-page`           | `#f9f6f1`                 | Warm cream page background (wrapper, 100vh flex center)                         |
| `--color-card`           | `#fff`                    | Card background                                                                 |
| `--color-card-shadow`    | `0 0 5px rgba(0,0,0,.2)`  | Card drop shadow (removed <768px)                                               |
| `--color-accent`         | `#6d7f52`                 | Olive/sage: active dots, enabled Forward/Submit, subtitle, links                |
| `--color-accent-hover`   | `#849963`                 | Olive button hover                                                              |
| `--color-accent-link-hv` | `#89b843`                 | Terms link hover                                                                |
| `--color-sand`           | `#e9e0cf`                 | Pale beige: idle dots + connectors, beige buttons, focus underline              |
| `--color-sand-hover`     | `#cfc7b8`                 | Beige button hover                                                              |
| `--color-title`          | `#453e79`                 | Deep indigo — h3 "Registration"                                                 |
| `--color-title-border`   | `#dad8e4`                 | h3 1px border                                                                   |
| `--color-text`           | `#999`                    | Body/placeholder/dropdown-display/checkbox text                                 |
| `--color-input`          | `#666`                    | Input text + beige-button text                                                  |
| `--color-line`           | `#e6e6e6`                 | 2px input bottom rule                                                           |
| `--color-dropdown`       | `#81acee`                 | Dropdown border + hover row bg (white text on hover)                            |
| `--color-tick`           | `#999`                    | Radio/checkbox ring + checked fill                                              |
| `--font-body`            | Muli, sans-serif          | 400 Regular (Google Fonts)                                                      |
| `--font-head`            | Muli, sans-serif          | 600 SemiBold (h3, subtitle, buttons)                                            |
| `--card-w`               | `920px`                   | Card width (≤991px: 768px)                                                      |
| `--card-h`               | `521px`                   | Card/content/image height                                                       |
| `--col-image`            | `40%`                     | Left image column (mobile 100%)                                                 |
| `--col-form`             | `60%`                     | Right form column; padding 65px 51px 0 (mobile 50px 20px 30px)                  |
| `--title-size`           | `22px` / `7px`            | h3 size + letter-spacing (uppercase, border, pad 5px 15px)                      |
| `--subtitle-size`        | `20px`                    | Step subtitle p (olive, centered, mb 26px)                                      |
| `--input-h`              | `37px`                    | Input/dropdown-control height (underline 2px)                                   |
| `--btn-h`                | `41px`                    | Nav button height                                                               |
| `--btn-w`                | `144/135/124px`           | Backward / Forward / Submit widths; 20px gap                                    |
| `--dot`                  | `12px` / `78px`           | Step-dot size + gap; connector 58×2px; checked fill 0.6s ease                   |
| `--tick`                 | `13px`                    | Radio/checkbox circle size (ring 1px; radio check 11px white; checkbox dot 7px) |
| `--radios-gap`           | `26px`                    | Male/Female label gap; label pad-left 23px                                      |
| `--consent-w`            | `63%` / `41px`            | Consent line width; margin-top 41px (24px on step 3 via `.mt-24`)               |
| `--textarea-h`           | `99px`                    | Step-3 textarea height (padding 8px 0, resize none)                             |
| `--overlay`              | `bottom 55px; right 51px` | Button row overlay anchor (mobile: bottom 3%, centered)                         |
| `--steps-overlay`        | `top 27.44%; right 30%`   | Dot-row overlay anchor (mobile: top 52%, centered)                              |
| `--fade`                 | `500ms`                   | Step transition effect                                                          |

## Requirements

### Requirement: Page shell

The system SHALL render a full-viewport warm-cream page with the wizard card
flex-centered, the step-dot row overlaid on the card top, and the nav button
row overlaid on the card bottom-right.

#### Scenario: Full-viewport cream page

- **GIVEN** the Conjure app is rendered on a desktop viewport
- **THEN** the page background SHALL be `#f9f6f1`
- **AND** the page SHALL be exactly viewport height with the card
  vertically and horizontally centered
- **AND** the page font SHALL be Muli (400/600 from Google Fonts)

#### Scenario: Responsive stacking

- **GIVEN** a viewport below 768px
- **THEN** the page SHALL scroll (height ~1201px, no fixed viewport), the
  card SHALL stack (image full-width above the form), the shadow SHALL be
  removed, and the dot row + button row SHALL switch to horizontal centering
  over the card

### Requirement: Wizard card layout

The system SHALL render the white 920px card split 40/60 into a left image
column and a right form column.

#### Scenario: Card with image and form columns

- **GIVEN** the Conjure app is rendered
- **THEN** a white card SHALL render at 920px (768px max below 992px) with
  the `0 0 5px rgba(0,0,0,.2)` shadow
- **AND** the left column SHALL be 40% wide, 521px tall, showing a
  step-specific image (`picsum.photos/seed/conjure-<step>/368/521`)
- **AND** the right column SHALL be 60% wide with `65px 51px 0` padding,
  containing the heading, subtitle, and form rows

#### Scenario: Heading and subtitle per step

- **GIVEN** any step of the wizard
- **THEN** the heading SHALL read **"Registration"** in Muli 600, 22px,
  uppercase, `7px` letter-spacing, color `#453e79`, with a 1px `#dad8e4`
  border and `5px 15px` padding, centered
- **AND** the subtitle below it SHALL be the step's exact text (step 1:
  "Please fill with your details"; step 2: "Please fill with additional
  info"; step 3: "Send an optional message") in Muli 600 20px, color
  `#6d7f52`, centered

### Requirement: Step indicator dots

The system SHALL render three clickable 12px dots above the card instead of
labeled tabs, reflecting progress with the olive/sand color pair and
58px connector lines.

#### Scenario: Dot row rendering

- **GIVEN** the Conjure app is rendered on the first step
- **THEN** exactly three 12px circular dots SHALL render, centered over the
  card top, connected by 58×2px hairline segments
- **AND** the first dot SHALL be olive `#6d7f52` and the other two sand
  `#e9e0cf`
- **AND** no textual step labels SHALL render (dots are the only labels)

#### Scenario: Progress marking

- **GIVEN** the wizard is on step N
- **THEN** dots 1..N SHALL render olive `#6d7f52` and dots N+1..3 sand
  `#e9e0cf`
- **AND** the connector to the right of each checked dot SHALL be filled
  olive (animated width fill ~0.6s)

#### Scenario: Direct dot navigation

- **GIVEN** the wizard is on any step
- **WHEN** the user clicks a dot
- **THEN** the wizard SHALL switch to the clicked dot's step immediately
- **AND** the clicked dot and every earlier dot SHALL become olive, later
  dots sand

### Requirement: Registration step (step 1)

The system SHALL render the registration step: two two-column input rows, an
Age/gender row, and a pre-checked consent line.

#### Scenario: Registration fields

- **GIVEN** the wizard is on step 1
- **THEN** the fields SHALL render in order: `First Name` + `Last Name`;
  `Your Email` + `Phone Number`; `Age` + the gender radios
- **AND** every input SHALL be underline-only (37px, 2px `#e6e6e6` bottom
  rule, no border box), text `#666`, placeholder `#999`
- **AND** the underline SHALL turn sand `#e9e0cf` when the input is focused

#### Scenario: Gender radios

- **GIVEN** the wizard is on step 1
- **THEN** the labels **Male** and **Female** SHALL render with a 26px gap,
  Male preselected
- **AND** each option SHALL be a 13px circle with a 1px `#999` ring whose
  checked state fills `#999` and shows a small white check glyph
- **AND** the radio group SHALL be bottom-aligned with the Age input

#### Scenario: Consent line

- **GIVEN** the wizard is on step 1
- **THEN** a consent checkbox SHALL render at 63% of the form width with
  margin-top 41px and 13px text: **"Nor again is there anyone who loves or
  pursues or desires to obtaini."**
- **AND** it SHALL be PRE-CHECKED: 13px ring with a 7px `#999` inner dot

### Requirement: Additional-info step (step 2)

The system SHALL render the additional-info step: a full-width address
input, City/Zip row, and the bespoke country dropdown.

#### Scenario: Fields

- **GIVEN** the wizard is on step 2
- **THEN** the fields SHALL render in order: `Address` (full width), `City`
  - `Zip Code`, and the country dropdown with an empty spacer beside it

#### Scenario: Country dropdown closed state

- **GIVEN** the wizard is on step 2
- **THEN** the dropdown SHALL render as a 37px underline box containing
  **"Your country"** in `#999` with a caret-down icon at its right edge
- **AND** clicking the box SHALL open the list

#### Scenario: Country dropdown open state

- **GIVEN** the dropdown is open
- **THEN** a white list SHALL render below the box with a 1px `#81acee`
  border listing exactly **United States, United Kingdom, Viet Nam**
- **AND** hovering an option SHALL highlight it `#81acee` with white text
- **AND** clicking an option SHALL replace the box text with that option
  and close the list
- **AND** clicking anywhere outside the list SHALL close it

### Requirement: Message step (step 3)

The system SHALL render the message step: a full-width textarea and a
pre-checked terms consent with a link.

#### Scenario: Textarea

- **GIVEN** the wizard is on step 3
- **THEN** a full-width textarea SHALL render at 99px height with the
  placeholder **"Your messagere here!"** (or an equivalent message
  placeholder), underlined style, non-resizable

#### Scenario: Terms consent

- **GIVEN** the wizard is on step 3
- **THEN** a consent checkbox SHALL render (margin-top 24px, 63% width):
  **"Please accept terms and conditions ?"**
- **AND** the "terms and conditions" part SHALL be a link in `#6d7f52`
  (hover `#89b843`)
- **AND** the checkbox SHALL be PRE-CHECKED (7px `#999` inner dot)

### Requirement: Wizard navigation

The system SHALL provide Backward/Forward/Submit navigation with the
source's color state machine and overlay position, never blocking
navigation between steps.

#### Scenario: Button row

- **GIVEN** the wizard is rendered
- **THEN** the button row SHALL be overlaid at the card's bottom-right
  (bottom 55px, right 51px) with 41px-tall buttons and a 20px gap
- **AND** the buttons SHALL be labeled **Backward** (chevron-left icon),
  **Forward** (chevron-right icon), and **Submit** (check icon) on the last
  step

#### Scenario: Step-1 button state

- **GIVEN** the wizard is on step 1
- **THEN** only the Forward button SHALL be visible (beige `#e9e0cf` with
  `#666` text), and Backward SHALL be transparent but keep its 144px layout
  slot

#### Scenario: Later-step button states

- **GIVEN** the wizard is on step 2 or 3
- **THEN** Backward SHALL be visible and beige
- **AND** Forward (step 2) / Submit (step 3) SHALL be olive `#6d7f52` with
  white text
- **AND** beige buttons SHALL hover `#cfc7b8` and olive buttons `#849963`

#### Scenario: Free navigation

- **GIVEN** any step
- **WHEN** the user clicks Forward / Backward / a dot
- **THEN** navigation SHALL always succeed (no validation gating, exactly
  like the source)
- **AND** the current step SHALL fade in over ~500ms
- **AND** field values SHALL persist when leaving and returning to a step
- **AND** Submit on the last step SHALL perform no submission (decorative,
  like the source)

### Requirement: Accessibility

The system SHALL expose the wizard accessibly (the source's a11y is poor —
tabs with empty titles, `<a>` buttons, outlines removed — the recreation
improves it while keeping visible behavior identical).

#### Scenario: Semantics

- **GIVEN** the Conjure app is rendered
- **THEN** the step indicator SHALL expose `role="tablist"` with
  `role="tab"` entries carrying `aria-selected` and `aria-controls` to
  their panels
- **AND** each step panel SHALL expose `role="tabpanel"` with a labelled
  heading
- **AND** each form field SHALL have a programmatic label (`aria-label` or
  `<label htmlFor>` with the placeholder text)
- **AND** the gender radios SHALL be a labelled radio group (fieldset +
  legend or equivalent)
- **AND** the country dropdown SHALL expose `aria-expanded`,
  `role="listbox"`/`role="option"` with `aria-selected`, and the box SHALL
  be a button

#### Scenario: Keyboard and focus

- **GIVEN** the Conjure app is rendered
- **THEN** the nav buttons SHALL be real `<button>` elements (keyboard
  reachable), the disabled-stealth Backward on step 1 SHALL be excluded
  from the tab order (unlike the source's opaque-but-focusable `<a>`)
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (documented deviation: the source removes outlines)
- **AND** Enter/Space SHALL activate dots, buttons, and dropdown options

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Conjure app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded
  as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- conjure` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-1/index.html: cream
      `#f9f6f1` page, centered white 920px card, 40/60 image/form split,
      centered "REGISTRATION" heading (`#453e79`, uppercase, 7px tracking,
      bordered), olive 20px subtitles, underline-only fields with `#999`
      placeholders, dot row (first/checked olive, idle sand, connectors),
      button row overlay bottom-right (step 1: single beige Forward; steps
      2–3: beige Backward + olive Forward/Submit), custom country
      dropdown, 13px radio/checkbox ticks.
- [ ] Live behavior: dot click jumps steps + marks progress; Forward/
      Backward never blocked; step 3 shows Submit; dropdown opens/closes/
      selects; values persist across steps; no submit action.
- [ ] No ColorLib strings anywhere under `apps/conjure` (source/provenance
      lives only in this spec + TEMPLATES.md + the PR). Footer links
      https://www.componentdock.com/.
- [ ] `public/CNAME` = `conjure.free.componentdock.com`; `"homepage"` =
      `https://conjure.free.componentdock.com`.
- [ ] Workspace registered in `package-lock.json` (`grep -c
  "free-react-templates/conjure" package-lock.json` ≥ 1) after `npm
  install` at root.
- [ ] PR `feat/template-conjure` description includes: source URL
      (https://colorlib.com/wp/template/colorlib-wizard-1/), preview URL
      (the `/etc/bwiz/` one), the token list, and what differs
      (renamed "Conjure", Muli via Google Fonts, lucide icons, picsum
      placeholders, footer, accessible semantics + focus rings, no
      ColorLib strings).
