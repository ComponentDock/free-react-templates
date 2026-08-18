# Template: Mesmerize (Split-Panel Sign-Up Wizard)

## Purpose

Mesmerize is a single-page FOUR-STEP SIGN-UP WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 17" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-17/), built under a
DIFFERENT name (**Mesmerize**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery Steps wizard (`vendor/jquery-steps/jquery.steps.min.js`)
with a SPLIT-PANEL layout: a 1400px `#efeeff` (soft lavender) container sits
on a dark `#222` page. The LEFT panel (495px, white) is a BRAND panel —
"AuCreative" logo (accent-colored "Au" + dark "Creative"), headline "Sign up
now to try undraw 30 days for free", a one-line subtext, and a flat VECTOR
illustration (`images/signup-img.jpg`: a man with crossed arms next to a
large tablet showing a dashboard with blue/purple bar charts — unDraw
style). The RIGHT panel (905px, lavender) holds the FORM: a 4-step wizard
with ONE FIELD PER STEP — **Your Name → Your Email → Your Password →
Confirm your password** — each a 24px bold Poppins input with ONLY a
bottom border and a FLOATING LABEL that rises above the line on
focus/valid. The two password fields carry an eye toggle (zmdi-eye ↔
zmdi-eye-off) that switches the input between visible text and masked. A
Montserrat 800 uppercase "STEP X / 4" indicator sits at the top right of
each step; NO step-tab navigation is rendered (`display: none`) — the only
nav is Previous / Next / Finish buttons, bottom-right: white Previous
(grey text) + 140×50 `#7c7cdd` (periwinkle) Next/Finish. Steps transition
with a fade. The form has `required` attributes and loads jquery.validate
BUT NEVER INITIALIZES IT — verified in the browser: Next advances with
empty required fields (no gating, free navigation). Finish calls
`alert('Sumited')`.

Source slug: `colorlib-wizard-17` (TEMPLATES.md line 854; the section
"## Bootstrap Wizards (30)" starts at line 844; the slug appears exactly
ONCE — verified `grep -c 'wp/template/colorlib-wizard-17'` = 1 — no dup
rows to reconcile).

Preview URL (REACHABLE, verified 2026-08-18 by direct fetch + browser):
the naive `https://preview.colorlib.com/theme/colorlib-wizard-17/` returns
404 (the whole 30-member family 404s on the standard path — do NOT
re-probe it); the REAL preview is the family path
**`https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html`**
(HTTP 200, 4,220 bytes, 98 lines, `<title>Sign Up Form</title>`). Same
`/etc/bwiz/` pattern as wizard-1/10/11/12/13/14/15/16 — preps for those
exist (Conjure, Banish, Dispel, Abjure, Bewitch, Enthrall, Spellbind,
Beguile), same lookup, do not redo this research.

Section order (1:1 with the source):

1. Page shell (dark `#222` page, 50px padding, 1400px lavender container)
2. Left brand panel (white bg: logo, headline, subtext, flat vector illustration)
3. Right form panel (lavender bg: the wizard)
4. Step indicator ("STEP X / 4", Montserrat 800 uppercase, accent color, top right)
5. Fields (one per step, floating-label, bottom-border-only, 24px Poppins bold)
6. Password reveal toggles (eye icons on steps 3 and 4)
7. Step actions (Previous / Next / Finish, bottom right)
8. Success state (inline confirmation on finish; source uses `alert('Sumited')`)
9. Component Dock footer (recreation addition; source has no footer)

## Naming

The ColorLib source name "Colorlib Wizard 17" is FORBIDDEN as the app name
(and "wizard" itself must not be reused). **Mesmerize** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-08-18: zero hits for `mesmerize` in TEMPLATES.md,
`ls apps/`, `openspec/specs/`, `docs/templates/`). It continues the
magic-practice word chain established by the wizard family preps: Conjure
(1) → Evoke (2, reserved) → Summon (3, reserved) → Invoke (4, reserved) →
Enchant (5, reserved) → Charm (6, reserved) → Hex (7, reserved) → Bless
(8, reserved) → Curse (9, reserved) → Banish (10) → Dispel (11) → Abjure
(12) → Bewitch (13) → Enthrall (14) → Spellbind (15) → Beguile (16) →
**Mesmerize (17) = wizard-17, the 17th member**. The names reserved by
the chain for members 2–9 are NOT reused for this prep. Source slug +
preview URL are recorded in Purpose above.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 17" (page title: "Sign Up
  Form"). Member 17 of colorlib-wizard-1 … 30, listed in TEMPLATES.md
  under **Bootstrap Wizards (30)**. Mesmerize's scheme is a SEVENTH
  family scheme: split-panel brand + form (white brand panel LEFT, form
  RIGHT on lavender), NOT a centered card like Beguile (w16) — it is the
  family's closest sibling: both use jQuery Steps + jquery.validate
  loaded-but-unused, both single-purpose wizard pages, but w17 hides the
  step nav entirely, uses PERRYWINKLE `#7c7cdd` (not teal), fade (not
  slideLeft), one field per step, floating labels, and a flat vector
  illustration instead of a photo backdrop. Sibling schemes: Conjure (w1:
  cream/olive, dot nav), Banish (w10: photo bg, #333, progress bar),
  Dispel (w11: coral page, square tiles, gated), Abjure (w12: sky-blue
  page, hidden nav, single-field steps), Bewitch (w13: photo bg, orange
  #f65300, accordion panels, un-gated), Beguile (w16: photo bg, teal
  #1abc9c, numbered-circle nav, gated).
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch +
  browser):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html` (HTTP
  200, 4,220 bytes, 98 lines). Stylesheets: `css/style.css` (15,961
  bytes, 433 lines — ALL custom styling, SCSS-compiled),
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi
  icon font — glyph `\f2c9` eye / `\f2cb` eye-off (password toggles);
  REPLACE with lucide Eye/EyeOff, do NOT ship the font). Fonts: local
  @font-face **Poppins** 300–900, **Muli** 400/800, **Montserrat**
  300–900 → **Google Fonts `<link>` (Poppins 400;500;700 — body/labels/
  inputs; Montserrat 700;800 — buttons + step indicator; Muli 400;800 —
  logo h2; other weights loaded by the CSS are unused by the demo)**.
  Scripts: `vendor/jquery/jquery.min.js`, `vendor/jquery-validation/
dist/jquery.validate.min.js` + `additional-methods.min.js` (LOADED BUT
  NEVER INITIALIZED — no validation gating; the inputs' `required`
  attributes only apply to a native submit that never happens),
  `vendor/jquery-steps/jquery.steps.min.js` (the step engine),
  `js/main.js` (815 bytes: steps init + password toggle handler +
  `alert('Sumited')` on finish).
- **Live DOM structure (from the fetched HTML; the served HTML is the raw
  pre-wizard markup, jQuery Steps wraps the fieldsets at runtime):**
  - `body` (bg `#222`, Poppins 13px/1.6, `#222`, weight 400) →
    `div.main` (padding 50px 0) → `div.container` (width 1400px, `margin:
0 auto`, bg `#efeeff`; ≤992px: `calc(100% - 40px)`, max-width 100%)
    → `div.signup-content` (flex; the two panels side by side).
  - **Left panel** `div.signup-desc` (bg `#fff`, width 495px) →
    `div.signup-desc-content` (padding 45px 55px) → `h2` (Muli 800,
    27px, `#222`, margin 0, padding-bottom 65px): `<span>Au</span>
Creative` (span color `#7c7cdd`) → `p.title` (bold, padding-bottom
    7px) "Sign up now to try undraw 30 days for free" → `p.desc`
    (`#999`, line-height 1.92, padding-bottom 330px) "MIT licensed
    illustrations for every project you can imagine and create" → `img.
signup-img` (padding-bottom 43px; `images/signup-img.jpg` — flat
    vector illustration, man with crossed arms + tablet dashboard with
    blue/purple bar charts).
  - **Right panel** `div.signup-form-conent` (width 905px) →
    `form#signup-form.signup-form` (padding 55px 110px, method POST,
    enctype multipart/form-data; NO action → would POST to the same URL)
    → four `h3` step titles (EMPTY — no titles; jQuery Steps'
    `titleTemplate` uses them but the rendered step nav is hidden) each
    followed by a `fieldset` (no border, padding 0):
    - **Fieldset 1 — Your Name:** `span.step-current` "Step 1 / 4"
      (absolute, right 0, top 0, Montserrat 800, uppercase, `#7c7cdd`) →
      `div.form-group` (relative): `input#your_name` (text, required,
      display block, width 100%, borderless except bottom 1px solid
      `#bfbfbf`, Poppins bold 24px, padding 30px 0 5px, transparent bg)
      - `label[for=your_name]` "Your Name" (absolute, left 0, top 25px,
        24px bold `#888`; on `:focus` or `:valid` → top −7px, 14px, weight
        500).
    - **Fieldset 2 — Your Email:** same structure, `input#email`
      (type=text — NOT type=email — required), label "Your Email".
    - **Fieldset 3 — Your Password:** `input#your_password` (type=TEXT
      in the source HTML! — the password is VISIBLE by default and the
      toggle masks it — required) + label "Your Password" + `span.
toggle-password` (`toggle="#your_password"`, class `zmdi zmdi-eye
field-icon`: 24px, float right, margin-top −37px, z-index 2).
    - **Fieldset 4 — Confirm your password:** `input#confirm_password`
      (type=text, required) + label "Confirm your password" + `span.
toggle-password` (`toggle="#confirm_password"`, zmdi-eye).
  - **jQuery Steps runtime chrome** (generated): `.content` (padding
    340px 0 315px 0 — tall vertical centering of the active fieldset;
    `.content h3` display none) wraps the current fieldset; `.steps` nav
    is `display: none` (**no step tabs rendered** — the ONLY progress
    indicator is the per-fieldset "STEP X / 4" span); `.actions` (flex,
    justify-content flex-end) with one `li` per button: Previous (bg
    `#fff`, color `#999`) + Next/Finish (bg `#7c7cdd`, color `#fff`;
    140×50, Montserrat bold 13px, `li` margin-left 20px). `.disabled`
    actions are `display: none` (Previous hidden on step 1).
  - **No h1, no nav element, no footer, no links** in the flow. The only
    images: the left-panel illustration + the zmdi icon font.
- **Behaviors (all verified 2026-08-18 from the fetched HTML/CSS/JS + the
  browser):**
  - **Step engine:** jQuery Steps (`headerTag: h3`, `bodyTag: fieldset`,
    `transitionEffect: fade`, labels Previous/Next/Finish(`Finish`),
    `titleTemplate: '<h3 class="title">#title#</h3>'`). **NO VALIDATION
    GATING: jquery.validate is loaded but never initialized in main.js —
    verified live by clicking Next with empty required fields and
    advancing through all four steps.** The inputs' `required` attributes
    are inert (no native submit ever occurs; the step buttons intercept).
    Recreation: mirror the source — free navigation, no gating, no error
    states.
  - **Password toggle:** `.toggle-password` click toggles the zmdi-eye ↔
    zmdi-eye-off classes and flips the target input between
    type=password and type=text. **The source HTML ships the password
    fields as type=text — i.e. the password STARTS VISIBLE and the toggle
    MASKS it.** Recreation: start MASKED (type=password) with the toggle
    revealing — documented usability deviation (password-first is the
    sane default for a signup wizard; the toggle behavior itself is
    identical).
  - **Floating labels:** labels live INSIDE the input area (absolute,
    left 0, top 25px, 24px, weight 700, `#888`) and rise to the top of
    the field (top −7px, 14px, weight 500) on `:focus` OR `:valid` (any
    non-empty required input). Since fields are un-gated, labels remain
    up once the user types. Recreation: same pattern (peer-selector or
    state-based float on focus / non-empty value).
  - **Titles/headers:** h3 titles are EMPTY in the source and the step
    nav is hidden — nothing renders step names. The ONLY per-step text is
    "STEP X / 4" (uppercase in the source's CSS, lower-case "Step X / 4"
    in the HTML text). Recreation: render the same "STEP 1 / 4" …
    "STEP 4 / 4" indicator (uppercase per the CSS).
  - **Finish:** `onFinished` = `alert('Sumited')`; form method POST with
    no action (would POST to the same URL if submitted natively).
    Recreation: inline success state (form replaced by a confirmation
    message), no alert, no fake network (per monorepo convention).
  - **Previous:** hidden (`.disabled` display none) on step 1; on steps
    2–4 it returns to the previous step (no re-validation — nothing
    validates).
  - **Source spelling is content, not corruption:** "try undraw 30 days
    for free" (stylized lowercase "undraw", a reference to the unDraw
    illustration site) and "Signup" (class names). The recreation keeps
    the same KIND of copy but SHOULD paraphrase the headline to avoid the
    third-party "unDraw" brand reference (e.g. "Sign up now to try our
    illustration library 30 days for free") — documented deviation.
- **Screenshot (`colorlib-free-wizard-17.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** a browser window showing the page: a split-screen layout —
  LEFT: a stark WHITE panel with "AuCreative" at the top (purple "Au" +
  dark "Creative"), below it the bold headline "Sign up now to try undraw
  30 days for free", smaller grey subtext, and at the bottom a FLAT VECTOR
  illustration of a person (blue shirt, dark trousers) with crossed arms
  standing next to a large tablet/monitor displaying a dashboard with
  blue and purple bar charts. RIGHT: a solid LAVENDER/PERIWINKLE panel
  with a small purple uppercase "STEP 1 / 4" in the top right, a
  minimalist input in the center (floating grey label "Your Name" above a
  thin grey underline — no box border), and at the bottom right a solid
  PURPLE/PERIWINKLE "Next" button (white text, slightly rounded corners)
  — with a white "Previous" button appearing on later steps. The dark
  `#222` page background frames the card top and bottom. Aesthetic:
  modern, minimal, airy — a SaaS-style split onboarding screen; the
  family's periwinkle counterpart to Beguile's teal. **Exactly ONE
  illustration (the left-panel vector) — everything else is CSS + the
  zmdi icon font.** No navbar, no footer content in the source.

## Design tokens

| Token              | Value                           | Notes                                                                                      |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------ |
| `--color-accent`   | `#7c7cdd`                       | Periwinkle: logo span ("Au"), Next/Finish button bg, "STEP X / 4" indicator                |
| `--color-page`     | `#222`                          | Body background (dark frame around the card; `.main` padding 50px 0)                       |
| `--color-panel`    | `#efeeff`                       | Container bg (soft lavender) — the right form panel background; container 1400px           |
|                    |                                 | `margin: 0 auto`; ≤992px `calc(100% - 40px)`, max-width 100%                               |
| `--color-card`     | `#fff`                          | Left brand panel bg (`.signup-desc` 495px; ≤992px 465px; ≤768px 100%)                      |
| `--color-ink`      | `#222`                          | Body text, h2 logo text (creative part), headings                                          |
| `--color-muted`    | `#999`                          | Left-panel subtext (`p.desc`), Previous button text                                        |
| `--color-label`    | `#888`                          | Floating labels (idle state)                                                               |
| `--color-line`     | `#bfbfbf`                       | Input bottom border (1px, the ONLY input border)                                           |
| `--font-logo`      | 'Muli', sans-serif              | Google Fonts 400;800 (h2 uses 800; 400 unused by demo)                                     |
| `--font-body`      | 'Poppins', sans-serif           | Google Fonts 400;500;700 — body 13px/1.6 400; inputs 24px 700; focused label 500           |
| `--font-head`      | 'Montserrat', sans-serif        | Google Fonts 700;800 — buttons 13px 700; "STEP X / 4" indicator 800 uppercase              |
| `--field`          | bottom-border only              | Input: display block, width 100%, `border: none; border-bottom: 1px solid #bfbfbf`,        |
|                    |                                 | Poppins bold 24px, padding-top 30px, padding-bottom 5px, transparent bg; focus: no         |
|                    |                                 | outline/shadow (source) + recreation adds a focus-visible ring/indicator (a11y,            |
|                    |                                 | documented); keep the floating label placement invariant                                   |
| `--floating-label` | idle 24px/700/`#888` top 25px   | Absolute left 0; on focus OR valid: top −7px, 14px, weight 500; transition 0.25s ease      |
| `--panel-left`     | 495px white + padding 45px 55px | ≤992px: 465px; ≤768px: 100% (panels stack vertically, `.signup-content` column)            |
| `--panel-right`    | 905px + form padding 55px 110px | ≤992px: form padding 55px 30px; ≤768px: 100%                                               |
| `--step-indicator` | Montserrat 800 uppercase        | Absolute right 0 top 0, `#7c7cdd`; text "STEP X / 4" (X = current step)                    |
| `--btn`            | 140×50px                        | `li` margin-left 20px, actions flex-end; Next/Finish: accent bg, `#fff`, Montserrat 700    |
|                    |                                 | 13px; Previous: white bg, `#999` text; (no border-radius declared in the source CSS —      |
|                    |                                 | the rendered button shows a slight rounding; use a small radius ~4px to match the          |
|                    |                                 | visual, documented); `.disabled` → display none (Previous hidden on step 1)                |     |
| `--eye-toggle`     | 24px, float right, mt −37px     | z-index 2, sits inside the field at the right; toggles input type password ↔ text;         |
|                    |                                 | lucide Eye/EyeOff (source uses zmdi `\f2c9`/`\f2cb`); starts MASKED in the recreation      |
| `--content`        | padding 340px 0 315px 0         | jQuery Steps `.content` — tall vertical centering of the active fieldset; `.steps` nav     |
|                    |                                 | is `display: none` (no step tabs)                                                          |
| `--transition`     | fade                            | jQuery Steps `transitionEffect: fade` between steps (no slide, no animation library)       |
| `--success`        | inline confirmation             | Source: `alert('Sumited')` on finish. Recreation: inline success state, no alert,          |
|                    |                                 | no fake network                                                                            |
| `--responsive`     | 992 / 768 / 480                 | ≤992: container fluid, form padding 30px sides, left panel 465px, illustration width 100%; |
|                    |                                 | ≤768: panels stack full-width column; ≤480: action buttons 100px; no horizontal overflow   |

## Requirements

### Requirement: Page shell

The system SHALL render the dark page with the centered 1400px lavender
container holding the split brand/form panels.

#### Scenario: Page and container

- **GIVEN** the Mesmerize app is rendered on a desktop viewport
- **THEN** the page background SHALL be `#222`
- **AND** the container SHALL be 1400px wide, centered with `margin: 0
auto`, background `#efeeff`, with 50px vertical padding above and below
  it (`.main`)
- **AND** the container SHALL hold two side-by-side panels: the left
  brand panel (white, 495px) and the right form panel (lavender, 905px)
- **AND** the page font SHALL be Poppins (400 via Google Fonts),
  13px/1.6, `#222`

#### Scenario: Responsive container

- **GIVEN** a viewport at or below 992px
- **THEN** the container SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow
- **AND** the form padding SHALL shrink to 55px 30px and the left panel
  to 465px, with the illustration at full width
- **AND** at or below 768px the two panels SHALL stack vertically at full
  width

### Requirement: Left brand panel

The system SHALL render the white branding panel with logo, headline,
subtext and a flat vector illustration.

#### Scenario: Brand content

- **GIVEN** the Mesmerize app is rendered
- **THEN** the left panel SHALL render (background `#fff`, padding
  45px 55px) with, in order:
  - the logo (Muli 800, 27px, `#222`) reading "Mesmerize" with the first
    three characters in the accent color `#7c7cdd` (the source splits
    "Au"+"Creative"; the recreation splits the NEW name — documented
    rename)
  - the headline (bold, padding-bottom 7px) — a paraphrase of the
    source's "Sign up now to try undraw 30 days for free" that keeps the
    same kind of copy but drops the "unDraw" brand reference
  - the subtext (`#999`, line-height 1.92): paraphrase of "MIT licensed
    illustrations for every project you can imagine and create"
  - the illustration (full panel width, bottom of the panel): a FLAT
    VECTOR illustration in the source's style — person + tablet with a
    bar-chart dashboard in blues/purples — recreated as an inline SVG
    (preferred; the source is vector, NOT a photo — a picsum photo would
    break the flat aesthetic; see docs/templates/mesmerize)
  - a 43px padding below the illustration

### Requirement: Step indicator

The system SHALL display the current step as "STEP X / 4" in the accent
color at the top right of the form area, and SHALL NOT render any step-tab
navigation (the source hides it).

#### Scenario: Indicator only

- **GIVEN** the Mesmerize app is rendered on any step
- **THEN** the text SHALL read "STEP X / 4" where X is the current step
  number (Montserrat 800, uppercase, `#7c7cdd`, positioned at the top
  right of the form area above the field)
- **AND** NO step tabs/navigation SHALL be visible (the source sets
  `.steps { display: none }`)

### Requirement: Floating-label fields

The system SHALL render one input per step with the source's
bottom-border-only style and a floating label.

#### Scenario: Field rendering

- **GIVEN** any step is current
- **THEN** exactly ONE field SHALL render, full width of the form panel:
  an input with no box border, only a 1px `#bfbfbf` bottom border,
  Poppins bold 24px, transparent background, padding 30px top / 5px
  bottom
- **AND** its label SHALL float inside the input area (absolute, left 0,
  top 25px, 24px, bold, `#888`) — on focus OR once the input has a value,
  it SHALL float up (top −7px, 14px, weight 500, 0.25s transition)
- **AND** the fields SHALL appear in order: step 1 "Your Name", step 2
  "Your Email", step 3 "Your Password", step 4 "Confirm your password"

#### Scenario: Label interactivity

- **GIVEN** a field is empty and unfocused
- **WHEN** the user focuses it
- **THEN** the label SHALL float up
- **WHEN** the user types a value and blurs
- **THEN** the label SHALL STAY floated (the source keys the float to
  `:valid`, i.e. non-empty required input)
- **WHEN** the user clears the field and blurs
- **THEN** the label SHALL return to its idle position (the source's
  `:valid` stops matching an empty input — documented behavior)

### Requirement: Password reveal toggles

Steps 3 and 4 SHALL provide an eye toggle that reveals/masks the
password.

#### Scenario: Toggle behavior

- **GIVEN** the user is on step 3 or step 4
- **THEN** a 24px eye icon SHALL render at the right side of the field
  (lucide Eye, replacing the source's zmdi glyph)
- **WHEN** the user activates the toggle while the input is masked
- **THEN** the input SHALL become visible text and the icon SHALL switch
  to the "eye-off" variant (lucide EyeOff)
- **WHEN** the user activates it again
- **THEN** the input SHALL return to masked and the icon SHALL switch
  back
- **NOTE:** the source HTML ships the password inputs as type=text
  (visible by default; the toggle masks). The recreation starts MASKED
  (type=password) — documented usability deviation; toggle mechanics are
  identical

### Requirement: Step navigation

The system SHALL move through the four steps with a fade transition,
un-gated (mirroring the source, which loads jquery.validate but never
initializes it).

#### Scenario: Advancing and returning

- **GIVEN** any step, including step 1 with empty fields
- **WHEN** the user activates "Next"
- **THEN** the wizard SHALL advance to the next step with a fade, and MAY
  do so even when the current field is empty (NO validation gating —
  verified live on the source)
- **AND** "Previous" SHALL be hidden on step 1 and visible on steps 2–4
- **WHEN** the user activates "Previous" on steps 2–4
- **THEN** the wizard SHALL return to the previous step (no
  re-validation)
- **AND** on step 4 the action buttons SHALL read "Previous" and
  "Finish" (the source's finish label; Next on steps 1–3)

#### Scenario: Step indicator updates

- **GIVEN** the user advances from step X to step X+1
- **THEN** the indicator SHALL read "STEP X+1 / 4"

### Requirement: Finish and success

The system SHALL finish the wizard with an inline success state (the
source shows `alert('Sumited')`).

#### Scenario: Finish

- **GIVEN** the user is on step 4
- **WHEN** the user activates "Finish"
- **THEN** the wizard SHALL complete and an inline confirmation message
  SHALL render (replacing or above the form, e.g. "Thanks — your signup
  was submitted!")
- **AND** no alert dialog and no fake network request SHALL occur

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source removes focus outlines and ships no ARIA).

#### Scenario: Semantics

- **GIVEN** the Mesmerize app is rendered
- **THEN** every field SHALL have a programmatic label (`<label
htmlFor>`) whose text doubles as the floating label
- **AND** the password toggles SHALL be buttons with an accessible name
  (`aria-label="Show password"` / `"Hide password"`, updating with
  state) and focus-visible rings
- **AND** the wizard region SHALL be labelled ("Mesmerize sign-up
  wizard") and the steps SHALL be exposed as a list with `aria-current`
  on the active step
- **AND** visible focus-visible rings SHALL appear on the inputs and
  buttons (the source removes outlines; recreation adds rings per a11y
  convention, documented)

### Requirement: Footer

The system SHALL include the required attribution footer (the source has
no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Mesmerize app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- mesmerize` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html:
      dark `#222` page, 1400px lavender `#efeeff` container, white left
      brand panel (logo with accent span, headline, subtext, flat vector
      illustration), lavender right panel, purple "STEP X / 4" top right,
      minimalist bottom-border input + floating label, white Previous
      (steps 2–4) + purple 140×50 Next/Finish bottom right, eye toggle on
      steps 3–4, no step tabs, fade between steps.
- [ ] Behavior check: Next advances with EMPTY fields on every step (no
      gating); Previous returns; indicator updates; eye toggle masks/
      reveals; Finish shows the inline success message; labels float on
      focus and stay floated with a value; no alerts, no network calls.
- [ ] Responsive check at 992px / 768px / 480px (container fluid, panels
      stack ≤768, buttons 100px ≤480, no horizontal overflow).
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR.
