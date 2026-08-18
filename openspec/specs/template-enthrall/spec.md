# Template: Enthrall (Linear Step-Tab Sign-Up Wizard)

## Purpose

Enthrall is a single-page THREE-STEP LINEAR WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 14" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-14/), built under a
DIFFERENT name (**Enthrall**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps wizard (`vendor/jquery-steps/jquery.steps.min.js`,
`headerTag: "h3"`, `bodyTag: "fieldset"`, `transitionEffect: "fade"`): a
990px white card (10px radius, soft shadow) centered on a SOLID MINT-GREEN
page (`#8be7ac` — no photo, unlike siblings). A centered uppercase heading
"Build your profile" tops the card, then three FLAT step tabs —
**About**, **Account**, **Address** — rendered as equal 330px pill-less
bars (`#f8f8f8` idle, solid green `#1ed760` current/hover, titles 18px
bold). The steps fade in/out inside a fixed-height content area; the
in-body step titles are hidden (the tabs are the only titles).

- **Step 1 — About:** a circular 154px avatar uploader (invisible
  `<input type=file>` + clickable `<label>`: `figure` circle with a
  silhouette placeholder + uppercase **"choose picture"**) beside three
  stacked fields: First Name, Last Name, Email (jQuery Steps sections
  paired in a `.form-row`). All three are REQUIRED; Email must be an
  email (jquery.validate active: `onStepChanging` returns `form.valid()`).
  Invalid inputs get a 1px `#f63726` red border + a 12px red message
  placed BEFORE the input; valid focus border is green `#1ed760`.
- **Step 2 — Account:** centered bold uppercase question **"What are you
  doing ?"** and three 100px CIRCULAR icon medallions — **Designer,
  Coder, Developer** — as radio tiles (inputs 0x0 offscreen). The circle
  has a 2px `#222` border + a dark-silhouette icon idle; the checked
  circle (Coder by default) turns 2px `#1ed760` with a full-color icon
  and a green bold label. No rules are registered for this step — always
  valid.
- **Step 3 — Address:** two two-column rows: Street Name + Street
  Number, then City + Country. Country is a NATIVE select (transparent
  bg, `#999` text, caret-down glyph floating at its right edge) with
  "Country" placeholder option, "Viet Nam", "USA". The main.js custom
  dropdown rebuild for it is COMMENTED OUT (unlike wizard-13's active
  rebuild) — the select stays native. No rules on this step.

Navigation (jQuery Steps `.actions`): a left-floating OUTLINED
**Previous** button (`#999999` text, 1px `#ebebeb` border; `display:
none` on step 1) and a right-floating SOLID GREEN 140×50 **Next** button
(becoming **Finish** on the last step). Tabs are clickable and jump
between steps. Completing the wizard pops `alert('Sumited')` (commented
bug "Sumited"); the recreation uses an inline success state instead.

**WHAT MAKES ENTHRALL DISTINCT (signature behaviors):**

1. **jQuery-Steps LINEAR TAB wizard — the family's tabbed member.**
   Unlike Conjure (dot nav), Banish (progress bar), Dispel (square
   tiles), Abjure (hidden nav + circular buttons) and Bewitch
   (accordion panels), Enthrall uses jQuery-Steps' default FLAT TAB
   strip: three equal-width bars in a flex row, each a `#f8f8f8` bar
   with an 18px bold title. Current **and** hover share the solid green
   `#1ed760` background with white title. The in-body `h3.title`
   headings are `display: none` — the tab bar is the only heading
   layer. Transitions are jQuery-Steps "fade" (~400ms).
2. **Mint-green page + ELECTRIC-GREEN accent — the family's first
   green scheme.** Solid `#8be7ac` page background (NO photograph) and
   a vivid `#1ed760` accent (same green family as the mint — a
   eucalyptus/spotify palette) for: current/hover tabs, Next/Finish
   buttons, input focus borders, checked-radio circles/labels. No other
   wizard in the family preps uses green (Conjure cream/olive, Banish
   `#333`, Dispel coral, Abjure sky-blue, Bewitch orange-on-photo).
3. **Real, active validation — but gated to step 1 only.**
   jquery.validate IS wired: `first_name` / `last_name` required,
   `email` required + email-format; `onfocusout` re-validates on blur;
   `onStepChanging`/`onFinishing` return `form.valid()` with
   `ignore: ":disabled,:hidden"`. Error UI: `input.error` = 1px
   `#f63726` border + 20px bottom margin; `label.error` = 12px
   `#f63726` placed `element.before(error)` (ABOVE the field, absolute
   at the group's bottom-left). Steps 2–3 register no rules — they can
   never block. Recreation must gate ONLY step 1 (required
   first/last/email + email format) and never invent rules for the
   radio/country fields.
4. **Circular AVATAR uploader with live FileReader preview.**
   `.inputfile` is a 0.1px/opacity-0/`z-index:-1` file input; its
   `<label>` (uppercase) wraps a 154×154 circle (`figure`, 50% radius)
   showing the `your-picture.png` silhouette placeholder and the
   "choose picture" caption. `onchange="readURL(this)"` swaps the
   circle's image to the picked file via FileReader data URL. The
   filename-caption swap logic in main.js is COMMENTED OUT — the label
   ALWAYS reads "choose picture". Recreation: hidden input + label,
   live object-URL/data-URL preview, caption stays "choose picture".
5. **Job medallions: 100px CIRCULAR radio icons (Designer / Coder /
   Developer), Coder default.** The 0x0 offscreen radios are
   `label:checked`-driven: idle circle = 2px `#222` border + icon
   CSS-filtered to a dark silhouette
   (`invert(30%) grayscale(100%) brightness(70%) contrast(4)`); checked
   = 2px `#1ed760` border + full-color icon + `#1ed760` bold label. The
   `.form-radio input:hover` rules target the offscreen input and never
   fire — recreation puts hover affordance on the label (documented).
   Note the +25px negative margin that pulls the medallion row up under
   the question label (label has 70px bottom padding).
6. **NATIVE Country select with a floating caret — the family's only
   native dropdown kept native.** The comment-blocked custom `ul`
   rebuild means the browser `<select>` renders (transparent bg,
   `z-index 10`, `#999` text, pointer cursor) with a separate
   `.select-icon` caret overlay (zmdi `\f2cb` caret-down, 30px `#999`,
   70×40 area, `z-index 0`, `pointer-events` untouched — clicks pass
   through to the field below the transparent select; recreation should
   make the caret `pointer-events-none`). Contrast with Bewitch, whose
   Nationality WAS rebuilt into a custom list.
7. **Outlined Previous vs solid next.** Previous (first `li`, float
   left): transparent bg, `#999999` text, 1px `#ebebeb` border, 140×50 —
   hidden on step 1 via `.disabled { display: none }`. Next/Finish
   (right): solid `#1ed760`, white, 140×50, 5px radius. `alert('Sumited')`
   on finish → inline success message, no alert, no fake network.

## Naming

The ColorLib source name "Colorlib Wizard 14" is FORBIDDEN as the app
name (and "wizard" itself must not be reused). **Enthrall** is the new,
original name — single lowercase word, kebab-case, no collision with
`apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-08-18: zero hits for `enthrall` in TEMPLATES.md, `ls
apps/`, `openspec/specs/`, `docs/templates/`). It continues the
magic-practice verb chain established by the wizard family preps:
**Conjure (1) → Evoke (2) → Summon (3) → Invoke (4) → Enchant (5) →
Charm (6) → Hex (7) → Bless (8) → Curse (9) → Banish (10) → Dispel (11)
→ Abjure (12) → Bewitch (13) → Enthrall (14) → …** (Enthrall =
wizard-14, the 14th member, matching the chain position; "enthrall" is
a synonym of "bewitch" — "to hold under a spell"). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 14" (page title: "Sign Up
  Form"). Listed in TEMPLATES.md under **Bootstrap Wizards (30)**
  (section header line 844; the one and only row at line 851 —
  `wp/template/colorlib-wizard-14/` appears exactly ONCE). Member 14 of
  colorlib-wizard-1 … 30 (file order 1, 10, 11, 12, 13, 14; numeric
  member = 14). Sibling preps: Conjure (wizard-1, chain seed — cream/
  olive, 920px card, dot nav), Banish (wizard-10 — photo bg, `#333`
  monochrome, progress bar), Dispel (wizard-11 — solid coral page,
  630px card, square tile nav, validation-gated), Abjure (wizard-12 —
  solid sky-blue page, 665px pill card, hidden step nav), Bewitch
  (wizard-13 — photo bg, 1070px card, accordion panels, orange `#f65300`,
  un-gated). Enthrall's tokens are a SIXTH scheme: solid mint-green
  page, 990px white card, jQuery-Steps flat tab nav, electric-green
  `#1ed760` accent, step-1-only validation, avatar uploader, circular
  job medallions, native country select.
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch):**
  the naive `https://preview.colorlib.com/theme/colorlib-wizard-14/`
  returns 404; the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-14/index.html`**
  (HTTP 200, 6,333 bytes, 139 lines, `<title>Sign Up Form</title>` —
  same `/etc/bwiz/` path as wizard-1/10/11/12/13/15; do not redo this
  lookup). Stylesheets: `css/style.css` (19,055 bytes, 547 lines — ALL
  custom styling, SCSS-compiled, NO Bootstrap at all — this member is
  jQuery-Steps only: no bootstrap css/js, no acc-wizard),
  `fonts/material-icon/css/material-design-iconic-font.min.css` (zmdi
  icon font — only glyph used: `\f2cb` caret-down on the country
  select; REPLACE with lucide, do NOT ship the font). Fonts: local
  @font-face **Poppins 300–900** → **Google Fonts `<link>` (400, 700 —
  the demo only uses weight 400 body + bold 700 headings/labels)**.
- **Live DOM structure (from the fetched HTML; jQuery Steps renders the
  nav/content/actions wrappers dynamically around this markup):**
  - `body` (solid `#8be7ac` bg, Poppins 14px/1.6, `#222`, weight 400)
    → `div.main` (padding 160px 0) → `div.container` (width 990px,
    `margin: 0 auto`, bg `#fff`, **border-radius 10px**, shadow
    `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`; ≤992px:
    `calc(100% - 40px)`, max-width 100%) → `h2` (24px, bold, uppercase,
    centered, padding-top 30px) **"Build your profile"** →
    `form#signup-form.signup-form` (method POST,
    enctype multipart/form-data, padding 30px 0 52px).
    - **jQuery Steps template output** (per plugin defaults with
      `headerTag: "h3"`, `titleTemplate: '<h3 class="title">#title#</h3>'`):
      `div.steps > ul` (flex `space-between`; three `li` width 330px,
      classes first/current|disabled/last)
      → each `li > a` (block, bg `#f8f8f8`, 8px 0 padding, centered)
      → `h3.title` (18px bold; idle `#999999`; current/hover: a bg
      `#1ed760` + h3 `#fff`); then `div.content` (padding: 0 100px 0
      81px, height 335px) wrapping each step as `h3.title` (display:
      none) + `fieldset` (border none; `fieldset.current` padding-top
      85px; non-current fieldsets hidden; steps fade ~400ms); then
      `div.actions` (same 81/100px padding; ul inline-block width 100%)
      → `li:first-child` Previous (`a`: transparent bg, `#999999`, 1px
      `#ebebeb` border, 140×50, radius 5px; float left; `.disabled`
      → display:none on step 1) + `li:last-child` Next|Finish (`a`:
      solid `#1ed760`, `#fff`, 140×50, radius 5px, flex-centered;
      float right; label "Next" on steps 1–2, "Finish" on step 3).
      - **Step 1 fieldset (About):** `div.form-row` (flex
        space-between, align-items center) → `div.form-file`:
        `input.inputfile[type=file]` (0.1px, opacity 0, absolute,
        z-index -1; `multiple` attribute present but unused —
        caption-swap JS commented out) + `label[for=your_picture]`
        (uppercase, bold, centered, cursor pointer) → `figure` (154×154,
        radius 50%, margin 0 auto 6px; `img.your_picture_image` 100%
        radius 50%, src `images/your-picture.png` — user silhouette) +
        `span.file-button` **"choose picture"** (no dedicated CSS rule —
        inherits label styling); and `div.form-group-flex` (width 510px)
        → three `div.form-group` (position relative, padding-bottom 20px)
        → `input` (transparent bg, 1px `#ebebeb` border, radius 5px,
        padding 15px 25px, 14px; focus: 1px solid `#1ed760`, no shadow;
        placeholder `#999`): `first_name` "First Name", `last_name`
        "Last Name", `email` "Email" (type=email).
      - **Step 2 fieldset (Account):** `div.form-radio` (margin-top
        -25px) → `label.label-radio[for=job]` (uppercase, bold,
        centered, padding-bottom 70px) **"What are you doing ?"** →
        `div.form-flex` (flex space-around, padding 0 140px) → three
        `div.form-radio` (100px): `input[type=radio].form-radio` (0x0,
        absolute, left -9999px; `name=job` values designer/coder/
        developer; **coder `checked`**) + `label[for=designer|coder|
developer]` (inline-block, centered, radius 5px) → `figure`
        (100×100, radius 50%, border 2px solid `#222`, flex-centered;
        `img` 100% with filter `invert(30%) grayscale(100%)
brightness(70%) contrast(4)` = dark silhouette) + `span` (bold;
        "Designer" / "Coder" / "Developer"). Checked state: figure
        border 2px `#1ed760`, img filter NONE (full color), span color
        `#1ed760`. `.form-radio input:hover` styles a 0x0 input — dead
        rule; put the hover affordance on the label.
      - **Step 3 fieldset (Address):** two `div.form-row.form-input-flex`
        (flex space-between, margin 0 -10px) each with two
        `div.form-input` (width 50%, padding 0 10px 20px, position
        relative): `street_name` "Street Name", `street_number` "Street
        Number"; `city` "City", `select#country` (transparent bg,
        z-index 10, pointer cursor, `#999` text; options: "" "Country",
        "Viet Nam", "USA"; `option` color `#999999`) wrapped with
        `span.select-icon` (absolute, top 0 right 0 bottom 20px,
        z-index 0, 70×40 flex-centered; `i.zmdi.zmdi-caret-down` 30px
        `#999`).
  - **No h1, no navbar, no footer, no photos in the page.** The only
    images are the avatar placeholder + 3 job icons (PNGs — recreated
    with lucide, do not ship).
- **Behaviors (all verified 2026-08-18 from live fetch + source JS):**
  - **Step navigation:** jQuery Steps renders the three tabs; clicking
    a tab sets it current (green) and fades the matching fieldset in.
    `onInit` adds class `test` to `.actions` on step 0 (no CSS for it —
    inert). `onStepChanging` runs `form.validate().settings.ignore =
":disabled,:hidden"` then returns `form.valid()` — moving forward,
    backward, or tab-jumping validates the CURRENT step's visible
    fields (step 1 only has rules; steps 2–3 always pass).
  - **Validation:** rules first_name/last_name required;
    email required + email format. Messages: "Please enter your first
    name", "Please enter your last name", email required message is a
    copy-paste bug ("Please enter your first name" — recreation
    replaces with "Please enter your email", documented typo fix),
    email format "Please enter a valid email address!". `onfocusout`
    validates the blurred field (errors appear on tab-out). highlight →
    `.form-group` gets `form-error` (no CSS for it — inert), element
    gets `.error`; unhighlight removes it and adds `.valid`.
    `errorPlacement` inserts `label.error` BEFORE the element; CSS:
    `label.error` 12px `#f63726`, absolute bottom 17px left 0;
    `input.error` 1px `#f63726` border + margin-bottom 20px. Final
    `onFinishing` validates with `ignore: ":disabled"` once more.
  - **File preview:** `readURL(input)` (inline onchange) reads
    `files[0]` via FileReader and swaps `img.your_picture_image` src to
    the data URL. The caption (label `span` → filename) swap code is
    COMMENTED OUT — caption always stays "choose picture".
  - **Country select:** plain native select; the custom `ul` rebuild
    block in main.js is fully commented out. Caret is a separate
    absolutely-positioned overlay (clicks fall through the transparent
    select above it — recreation: `pointer-events-none` caret).
  - **Finish:** `onFinished` → `alert('Sumited')` (sic — commented
    bug). Recreation: inline success message (form hidden / replaced by
    a confirmation), no alert, no fake network.
- **Screenshot (`colorlib-free-wizard-14.jpg`, 1200×972 AVIF; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** a LIGHT MINT-GREEN page filling the window; a centered
  WHITE card with rounded corners and a soft drop shadow; "BUILD YOUR
  PROFILE" bold black uppercase centered at the card top; directly
  below, a horizontal three-segment tab bar — "About" filled SOLID
  GREEN with white text (active), "Account" and "Address" light grey
  (`#f8f8f8`) with grey text; content split into two columns: LEFT a
  circular avatar placeholder (thin dark user silhouette on white) with
  "CHOOSE PICTURE" in small bold uppercase beneath it, RIGHT three
  vertically stacked inputs ("First Name", "Last Name", "Email") with
  light grey borders; bottom-right a solid medium-green rectangular
  "NEXT" button (white text). No photo imagery anywhere — everything is
  flat color + thin borders. Aesthetic: clean, airy, pastel-green
  fitness/spotify-like palette. **ZERO photos in the whole template —
  no picsum placeholders needed** (see docs/templates/enthrall).

## Design tokens

| Token              | Value                           | Notes                                                                                   |
| ------------------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| `--color-page`     | `#8be7ac`                       | SOLID mint-green page background (no image); `.main` padding 160px 0                    |
| `--color-accent`   | `#1ed760`                       | Electric green: current/hover tab bg, Next/Finish bg, input focus border,               |
|                    |                                 | checked radio circle border + label, checked icon color                                 |
| `--color-card`     | `#fff`, 990px                   | `margin: 0 auto`; radius **10px**; shadow `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`;       |
|                    |                                 | ≤992px: `calc(100% - 40px)`, max-width 100%                                             |
| `--color-tab-idle` | `#f8f8f8`                       | Idle step-tab bar background (flat, no pill — full-width 330px bars)                    |
| `--color-ink`      | `#222`                          | Body text, h2, idle radio circle border (2px)                                           |
| `--color-muted`    | `#999999` / `#999`              | Idle tab title, select text, caret icon, placeholders, Previous button text             |
| `--color-line`     | `#ebebeb`                       | Input borders (1px), Previous button border (1px)                                       |
| `--color-error`    | `#f63726`                       | Invalid input border (1px) + 12px error message text                                    |
| `--font-body`      | 'Poppins', sans-serif           | Google Fonts 400/700 (source local @font-face 300–900; demo uses 400 + bold);           |
|                    |                                 | base 14px/1.6, weight 400, `#222`                                                       |
| `--h2`             | 24px, bold, uppercase, center   | Padding-top 30px; no margin                                                             |
| `--tab`            | 330px wide bar                  | `a` block, bg `--color-tab-idle`, padding 8px 0, centered; title 18px bold `#999999`;   |
|                    |                                 | current **and** hover: bg `--color-accent` + title `#fff`; li flex row space-between    |
| `--content`        | height 335px                    | Padding 0 100px 0 81px (≤768px: 0 30px, height 550px); `fieldset.current` padding-top   |
|                    |                                 | 85px; steps fade ~400ms. Recreation: `min-height` 335px so validation errors never clip |
| `--input`          | transparent bg, 1px line border | radius 5px, padding 15px 25px, 14px; focus: 1px solid accent, box-shadow none;          |
|                    |                                 | placeholder `#999`; select: color `#999`, pointer cursor, z-index 10, option `#999999`  |
| `--input-error`    | 1px `--color-error` border      | `input.error` also gets margin-bottom 20px; `label.error` 12px `--color-error`,         |
|                    |                                 | absolute bottom 17px left 0 (placed BEFORE the input per errorPlacement)                |
| `--avatar`         | 154×154 circle, radius 50%      | Hidden file input (0.1px, opacity 0, absolute, z-index -1) + clickable uppercase bold   |
|                    |                                 | label; figure margin 0 auto 6px; img 100% radius 50% (silhouette placeholder → live     |
|                    |                                 | FileReader preview); caption ALWAYS "choose picture" (source swap JS commented out)     |
| `--medallion`      | 100×100 circle, radius 50%      | border 2px `--color-ink` idle; img icon CSS-filtered to dark silhouette; checked:       |
|                    |                                 | border 2px accent + icon full color + bold label accent; label inline-block centered;   |
|                    |                                 | `.form-radio` margin-top -25px; `.form-flex` flex space-around padding 0 140px;         |
|                    |                                 | `label-radio` uppercase bold centered padding-bottom 70px; NO rules on this step        |
| `--select-caret`   | zmdi caret-down `\f2cb` 30px    | `.select-icon` absolute top 0 right 0 bottom 20px, 70×40 flex-centered, z-index 0,      |
|                    |                                 | `#999`; recreation: lucide `ChevronDown` + `pointer-events-none` (source relies on the  |
|                    |                                 | transparent select above it to catch clicks)                                            |
| `--btn-next`       | 140×50px, radius 5px            | Solid accent bg, `#fff`, flex-centered, float right; label "Next" (steps 1–2) /         |
|                    |                                 | "Finish" (step 3)                                                                       |
| `--btn-prev`       | 140×50px, radius 5px            | Transparent bg, `#999999` text, 1px `--color-line` border, float left; `display: none`  |
|                    |                                 | on step 1 (`.disabled`)                                                                 |
| `--success`        | inline confirmation             | Source: `alert('Sumited')` (sic). Recreation: inline success state, no alert,           |
|                    |                                 | no fake network; final `onFinishing` validates once more before showing it              |
| `--validate`       | step-1 only                     | first_name/last_name required; email required + email format; steps 2–3 ungated;        |
|                    |                                 | errors appear on blur (onfocusout) and on step change; navigate blocked until valid     |
| `--responsive`     | 992 / 768 / 480px               | ≤992: card `calc(100% - 40px)`, form-group-flex 310px; ≤768: tabs + rows column, li     |
|                    |                                 | 100%, content 550px + 30px padding, form-file mb 20, form-flex 0 40px, form-input/group |
|                    |                                 | 100%; ≤480: signup-form padding 0 30px                                                  |

## Requirements

### Requirement: Page shell

The system SHALL render the solid mint-green page with the centered white
card holding the heading, tab bar, wizard content and actions.

#### Scenario: Background, card and heading

- **GIVEN** the Enthrall app is rendered on a desktop viewport
- **THEN** the page background SHALL be the solid mint-green `#8be7ac`
  (flat color — no background image)
- **AND** a white 990px card SHALL render centered with 160px vertical
  padding above and below it
- **AND** the card SHALL have a 10px radius and the shadow
  `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`
- **AND** a heading SHALL read "Build your profile" — 24px, bold,
  uppercase, centered, with 30px top padding
- **AND** the page font SHALL be Poppins (400/700 via Google Fonts),
  14px/1.6, `#222`

#### Scenario: Responsive card

- **GIVEN** a viewport at or below 992px
- **THEN** the card SHALL widen to `calc(100% - 40px)` with
  `max-width: 100%` and no horizontal overflow
- **AND** at or below 480px the form padding SHALL narrow to 30px left
  and right

### Requirement: Step tab navigation

The system SHALL render exactly three flat step tabs — About, Account,
Address — with the current tab highlighted green and hover feedback.

#### Scenario: Tab strip and states

- **GIVEN** the Enthrall app is rendered
- **THEN** three equal-width tabs SHALL render in order in a single row:
  "About", "Account", "Address"
- **AND** each tab SHALL be a flat `#f8f8f8` bar with an 18px bold
  title in `#999999` (no border radius, no pill shape)
- **AND** the first tab (About) SHALL be current on load: solid green
  `#1ed760` background with white title
- **WHEN** the user hovers an idle tab
- **THEN** it SHALL show the same green background with white title
- **AND** the tab strip SHALL expose tab semantics (`role="tablist"`,
  `role="tab"`, `aria-selected`, `aria-controls`) — recreation
  improvement over the source's un-annotated plugin output

#### Scenario: Tab switching

- **GIVEN** any tab is current
- **WHEN** the user activates another tab
- **THEN** that step's content SHALL be shown (fade transition ~400ms)
  and the activated tab SHALL become current (green) while the previous
  returns to idle grey
- **AND** moving to a tab SHALL validate the leaving step's visible
  fields (matching the source's `onStepChanging` → `form.valid()`); if
  invalid, navigation SHALL be blocked and the errors SHALL show (see
  Validation)

### Requirement: About step (profile + name/email)

The first step SHALL contain the circular avatar uploader and the three
required personal fields in the source's layout.

#### Scenario: Avatar uploader

- **GIVEN** the About step is current
- **THEN** a 154px circular avatar placeholder SHALL render on the left
  (a user-silhouette glyph on white — lucide icon; the source's
  `your-picture.png` asset is not shipped) with the caption "choose
  picture" in small bold uppercase below it
- **WHEN** the user activates the label (circle or caption)
- **THEN** a file picker SHALL open (the input itself is visually
  hidden)
- **WHEN** the user picks an image file
- **THEN** the circle SHALL show a live preview of that image (source:
  FileReader data-URL swap via `readURL`; recreation may use
  `URL.createObjectURL`) and the caption SHALL remain "choose picture"
  (the source's filename-swap code is commented out — faithful)
- **AND** no image is picked, the silhouette placeholder SHALL remain

#### Scenario: Required fields

- **GIVEN** the About step is current
- **THEN** three stacked inputs SHALL render to the right of the
  uploader, in order: "First Name" (text), "Last Name" (text), "Email"
  (type=email)
- **AND** each SHALL be a transparent input with a 1px `#ebebeb`
  border, 5px radius, 15px 25px padding, and a `#999` placeholder
  matching its label
- **AND** focusing an input SHALL turn its border green (`#1ed760`)
  with the field's label announced

### Requirement: Account step (job medallions)

The second step SHALL contain the "What are you doing ?" question and
three circular icon radios with Coder selected by default.

#### Scenario: Medallion radios

- **GIVEN** the Account step is current
- **THEN** the centered bold uppercase question "What are you doing ?"
  SHALL render above three 100px circular tiles in a row: Designer,
  Coder, Developer
- **AND** each tile SHALL be a circle with a 2px `#222` border and a
  dark-silhouette icon (lucide: `PenTool`, `Code`, `AppWindow` — the
  source's PNG icons are not shipped) with a bold label under it
- **AND** the Coder tile SHALL be selected by default: green `#1ed760`
  2px border, full-color icon, green bold label
- **WHEN** the user activates another tile
- **THEN** it SHALL become selected (green border, color icon, green
  label) and the previous SHALL return to the idle black-border
  silhouette state
- **AND** the tiles SHALL behave as radios (`getByRole('radio',
{ name: 'Coder' })`, `aria-checked`) — recreation improvement (the
  source's hover rules target an offscreen 0x0 input and never fire;
  the recreation puts hover feedback on the tile)
- **AND** no validation SHALL apply to this step (the source registers
  no rules — never block on it)

### Requirement: Address step (street/city/country)

The third step SHALL contain the two two-column rows with the native
country select.

#### Scenario: Address fields

- **GIVEN** the Address step is current
- **THEN** the fields SHALL render in two rows: "Street Name" +
  "Street Number", then "City" + "Country"
- **AND** the Country control SHALL be a NATIVE select (transparent
  background, `#999` text, pointer cursor) with a visible caret icon at
  its right edge (lucide `ChevronDown`, `#999`, `pointer-events-none` —
  the source's underlying select catches the clicks)
- **AND** the select SHALL offer "Country" (placeholder option),
  "Viet Nam", and "USA"
- **AND** no validation SHALL apply to this step (source registers no
  rules)

### Requirement: Validation

The system SHALL validate the About step's three fields (required;
email format) with the source's error treatment, and SHALL gate
navigation until they are valid.

#### Scenario: Required and email validation

- **GIVEN** the About step is current and a field is empty
- **WHEN** the user tabs out of it (or attempts to move to the next
  step/tab)
- **THEN** the field SHALL show a 1px `#f63726` red border and a 12px
  red message — "Please enter your first name" / "Please enter your
  last name" / "Please enter your email" (the email-required message
  in the source is a copy-paste bug reading "Please enter your first
  name" — corrected here, documented deviation)
- **WHEN** the user types a non-email value in the Email field and tabs
  out
- **THEN** the message SHALL read "Please enter a valid email address!"
  with the same red styling
- **WHEN** the user fixes the field (valid value, focus leaves or step
  change)
- **THEN** the red styling and message SHALL clear
- **AND** the messages SHALL be associated with their fields
  (`aria-describedby`) and the fields announced as invalid — recreation
  improvement (the source inserts a bare `label.error` before the
  input)

#### Scenario: Gated navigation

- **GIVEN** the About step has invalid fields
- **WHEN** the user activates Next or another tab
- **THEN** navigation SHALL be blocked and the errors SHALL display on
  the offending fields
- **GIVEN** the About step is valid
- **WHEN** the user activates Next
- **THEN** the Account step SHALL open (fade) and About SHALL mark
  complete
- **AND** steps 2–3 SHALL never block navigation regardless of their
  contents (no rules registered)

### Requirement: Action buttons

The system SHALL render the outlined Previous (hidden on the first
step) and the solid green Next/Finish buttons in the source's layout.

#### Scenario: Previous and Next/Finish

- **GIVEN** the About step is current
- **THEN** NO Previous button SHALL be visible (source hides it via
  `.disabled { display: none }`) and a solid green "Next" button
  (140×50px, white text, 5px radius, bottom-right) SHALL render
- **GIVEN** the Account step is current
- **THEN** an outlined "Previous" button SHALL render bottom-left
  (transparent bg, `#999999` text, 1px `#ebebeb` border, 140×50px) and
  the green "Next" button SHALL render bottom-right
- **WHEN** the user activates Previous
- **THEN** the About step SHALL return (fade)
- **GIVEN** the Address step is current
- **THEN** the right button SHALL read "Finish" (solid green) and
  Previous SHALL remain
- **WHEN** the user activates Finish with a valid form
- **THEN** the inline success state SHALL render (see Success state)

### Requirement: Success state

The system SHALL complete the wizard with an inline confirmation.

#### Scenario: Inline completion

- **GIVEN** the Address step is current and the user activates Finish
- **THEN** the wizard SHALL NOT reload, navigate, or pop an alert
  (source: `alert('Sumited')` — replaced per monorepo convention)
- **AND** an inline success message SHALL render (e.g. "Thanks — your
  profile was submitted!") replacing the form content
- **AND** no fake network request SHALL occur

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source removes all focus outlines and provides no ARIA).

#### Scenario: Semantics

- **GIVEN** the Enthrall app is rendered
- **THEN** every input, radio, select and button SHALL have a
  programmatic label (`<label htmlFor>`) or accessible name
- **AND** the tab strip SHALL expose `role="tablist"` / `role="tab"` /
  `aria-selected` with panels wired via `aria-controls` and
  `aria-labelledby`
- **AND** the radio tiles SHALL expose accessible names and states
  (`aria-checked`)
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (tabs, inputs, select, medallions, uploader label, buttons)

### Requirement: Footer

The system SHALL include the required attribution footer (the source has
no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Enthrall app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- enthrall` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-14/index.html:
      solid mint-green `#8be7ac` page, white 990px card (10px radius,
      `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`), "Build your profile" h2,
      three flat tabs (`#f8f8f8` idle / green `#1ed760` current + hover,
      white title), About = avatar circle + "choose picture" + First
      Name/Last Name/Email inputs; Account = "What are you doing ?" +
      three 100px circles (Designer/Coder/Developer, Coder checked,
      green border + color icon); Address = Street Name/Number, City,
      native Country select (Country/Viet Nam/USA) with floating caret;
      outlined Previous bottom-left (hidden on step 1), green
      Next/Finish bottom-right.
- [ ] Behavior check: About current on load; tab clicks switch steps
      with fade and green highlight; validation on About only — empty
      fields show red 1px border + 12px red message on blur/next, email
      format message "Please enter a valid email address!", errors clear
      when fixed; blocked navigation until About valid; Account/Address
      never block; file picker opens via the label, picked image
      previews in the circle, caption stays "choose picture"; Previous
      returns to About; Finish shows the inline success message (no
      alert, no reload) — country select functional (options selectable).
- [ ] Responsive check at 992px / 768px / 600px / 480px (card
      `calc(100% - 40px)`, tabs stack to 100% width, form rows stack to
      one column, `form-flex` padding narrows, no horizontal overflow,
      validation errors never clipped — content uses `min-height`).
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR.
