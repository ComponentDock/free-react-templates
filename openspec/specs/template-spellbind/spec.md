# Template: Spellbind (Vertical Bank-Onboarding Wizard)

## Purpose

Spellbind is a single-page THREE-STEP VERTICAL WIZARD in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Colorlib Wizard 15" free template (source:
https://colorlib.com/wp/template/colorlib-wizard-15/), built under a
DIFFERENT name (**Spellbind**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a jQuery-Steps wizard (`vendor/jquery-steps/jquery.steps.min.js`,
`headerTag: "h3"`, `bodyTag: "fieldset"`, `transitionEffect: "fade"`,
**`stepsOrientation: "vertical"`**): a **1400px WHITE container** centered on
a DARK page (`body background: #222`), with a LEFT-SIDE vertical step
TIMELINE (numbered circles connected by a line) and a LIGHT-GREY
(`#f8f8f8`) content + actions area on the right. It recreates a **fintech
bank-account onboarding flow** — the first BANKING theme in the prepped
part of the 30-member wizard family:

- **Step 1 — Personal info:** heading "Personal information", a
  description line, a Name row (First + Last side by side), Email (with
  an "Example : …" helper caption), Phone, Birth Date (three selects
  MM/DD/YYYY populated by the minimalist-picker dobPicker plugin), and
  SSN.
- **Step 2 — Connect Bank Account:** a "Find Your Bank" search input
  with a grey **Search** submit button and a search icon, a divider, and
  "Or choose from these popular bank" with **EIGHT bank radio tiles**
  (223×133 cards with bank-logos images; bank_1 checked by default).
- **Step 3 — Set Financial Goals:** a noUiSlider money-range slider
  ("Your money you can spend per month : $ 1,100", range $100–$2,000,
  step 100, single handle starting at 1100) with a value readout.

The accent color is a **MEDIUM BLUE `#4966b1`**: current step circle +
title, checked bank tile border, slider connect bar + handle border +
tooltip text, and the Next/Finish buttons. Validation is minimal: ONLY
the Email field has a rule (`email: true` — format check, no required
rules anywhere), error messages are ALL BLANK (main.js zeroes
jquery.validate's message table), and the only visible error feedback is
a **1px red `#f63726` input border + a red alert icon** floated at the
field's top-right. Finishing pops `alert('Submited')` (sic); the
recreation uses an inline success state instead.

**WHAT MAKES SPELLBIND DISTINCT (signature behaviors):**

1. **VERTICAL orientation — the family's only vertical wizard so far.**
   jQuery-Steps `stepsOrientation: "vertical"`: the step list is a
   LEFT column (`.steps` width 310px, float left, flex-column, padding
   40px/60px) while `.content` + `.actions` (width 1090px) float
   right. A 2px `#ebebeb` vertical connector line (180px tall,
   centered) runs down the nav column behind the circles
   (`ul:after`, left 64px, `transform: translateY(-50%)`). Contrast
   with Conjure (dot nav), Banish (progress bar), Dispel (square
   tiles), Abjure (hidden nav), Bewitch (accordion) and Enthrall
   (flat tab strip) — those are all horizontal/compact navs.
2. **Numbered-circle timeline.** Custom `titleTemplate`:
   `<div class="title"><span class="step-number">#index#</span><span
class="step-text">#title#</span></div>` — each step is a **40×40
   circle** (radius 50%, `#ebebeb` bg, `#999` number, **5px solid
   white border** — the border separates the circle from the connector
   line) with a bold title to its right. Current step: circle bg
   **`#4966b1`** + white number, title `#4966b1`; idle: grey circle,
   `#999` title (including hover — no separate hover rule; the whole
   `a` is just `color: #222`).
3. **Banking/fintech content — first money-themed member.** Personal
   info (SSN, birth date), bank search + bank logo tiles, and a
   monthly-spend money slider. The dark `#222` page + wide white
   1400px container + medium-blue `#4966b1` accent is the family's
   first blue-on-dark scheme (Conjure cream/olive, Dispel coral,
   Abjure sky-blue, Bewitch orange-on-photo, Enthrall mint-green).
4. **Near-zero validation — email format only, BLANK messages.** Rules:
   `email: { email: true }` — nothing else, no required rules at all.
   `jQuery.extend(jQuery.validator.messages, …)` blanks EVERY default
   message. `onfocusout` re-validates the blurred field. Errors:
   `input.error` = 1px `#f63726` border; `label.error` = absolutely
   positioned top-right of the `.form-group` with an `:after` zmdi
   alert-circle glyph (`\f135`, 13px, `#f63726`) at right 20px / top
   50px — **no text is ever shown**. (jquery-steps still gates
   navigation on `form.valid()` via `onStepChanging` /
   `onFinishing`.) Recreation: red border + red `AlertCircle` icon,
   plus `aria-invalid`/`aria-describedby` for announcement
   (documented a11y improvement); a malformed email blocks Next.
5. **dobPicker-selects for Birth Date.** The minimalist-picker plugin
   fills three empty `<select>`s: days 1–31 (numeric), months
   **Jan … Dec** (source has a typo "Octr" — fix to "Oct",
   documented), years **current year down to current year − 120**
   (descending; maximumAge 120 / minimumAge 0 → an age 0..120
   window). Each select gets a leading empty option; the caption
   spans "MM" / "DD" / "YYYY" render BELOW the fields as 12px `#999`
   hints. Selects are native, 100px wide each, 1px `#ebebeb` border,
   50px tall, bold `#222` text.
6. **Bank search + EIGHT 223×133 logo tiles, first checked.**
   `#find_bank` (680px, padding 0 55px) + a 150px `Search` submit
   (bg `#666`, hover `#4d4d4d`) + floating search icon (zmdi-search →
   lucide `Search`, absolute top 12 left 20, 18px, `#999`), the whole
   `.form-find` row separated by a 1px `#ebebeb` bottom border. Below:
   "Or choose from these popular bank" (`#666`) and 8 radio cards
   (`input` 0×0 offscreen at left -9999px; `label` 223×133,
   transparent bg, 1px transparent border, img fills the card;
   `:checked + label` = 1px solid `#4966b1`). The CSS hover rule
   targets the 0×0 input (`input:hover`) and is DEAD — put the hover
   affordance on the label (documented). The logo images
   (`images/bank-1.jpg` … `bank-8.jpg`) are NOT shipped — recreate
   the 8 tiles as text/vault-icon bank cards (see docs/templates/
   spellbind for the plan) or lucide `Landmark` glyphs on white.
7. **noUiSlider money range.** Single handle, start 1100, step 100,
   range 100–2000, `connect: [true, false]` (bar fills from the min
   to the handle), tooltip on, pips at [$100, $2000]. Track 9px
   `#e8e8e8`, radius 0, margin-top 110px; connect bar `#4966b1`;
   handle 15×30 `#e8e8e8` with 1px `#4966b1` border, radius 0,
   positioned above the track (top −12); floating tooltip above the
   handle (bottom 33px, transparent, 16px, `#4966b1`); pip labels
   $100 / $2000 at 16px `#666` (16px values top −50). Formatting:
   wNumb `$ ` prefix, 0 decimals, NO thousands separator ("$ 1100" up
   to "$ 2000"). The update handler writes handle 0's value into
   `#value-lower` (28px bold) under "Your money you can spend per
   month :"; `#value-upper` stays EMPTY (single handle → the
   `if (handle)` branch never fires) — recreate with ONE readout.
   Recreation: a styled native `<input type="range">` (or a small
   custom slider) is acceptable; tests must cover $100–$2000 bounds,
   100-steps, and the "$ NNNN" formatting.
8. **Inert container-height hack.** main.js appends/class-swaps a
   `<div class="footer footer-0|1|2|3">` inside `.container` on step
   changes, but the stylesheet has ZERO `.footer` rules (verified:
   grep count 0) — the hack is inert. Content height is a fixed
   `.content` 800px (900px ≤992px, 1050px ≤480px). Recreation: use
   `min-height` instead of fixed heights so nothing clips on small
   screens (documented improvement), and skip the footer divs.

## Naming

The ColorLib source name "Colorlib Wizard 15" is FORBIDDEN as the app
name (and "wizard" itself must not be reused). **Spellbind** is the new,
original name — single lowercase word, kebab-case (`spellbind`), no
collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-08-18: zero hits for `spellbind` /
`spellbound` / `mesmerize` in all four locations). It continues the
magic-practice verb chain established by the wizard family preps:
**Conjure (1) → … → Banish (10) → Dispel (11) → Abjure (12) → Bewitch
(13) → Enthrall (14) → Spellbind (15) → …** — "spellbind" is a direct
synonym of "enthrall" ("to hold spellbound, to captivate"), marking
wizard-15 as the 15th member. Source slug + preview URL are recorded
below. (Note: TEMPLATES.md sorts the wizard rows as strings, so file
order is 1, 10, 11, 12, 13, **14, 15**, 16, … 19, 2, 20 … — wizard-2..9
rows sort later and will be prepped after >19; do not get confused by
the numbering.)

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Wizard 15" (page title: "Sign Up
  Form"). Listed in TEMPLATES.md under **## Bootstrap Wizards (30)**
  (section header at line 844; the one and only row at line 852 —
  `wp/template/colorlib-wizard-15/` appears exactly ONCE). Member 15 of
  colorlib-wizard-1 … 30. Sibling preps: Conjure (wizard-1, chain seed
  — cream/olive, horizontal dot nav), Banish (wizard-10 — photo bg,
  `#333` monochrome, progress bar), Dispel (wizard-11 — solid coral
  page, square tile nav), Abjure (wizard-12 — solid sky-blue page,
  hidden nav, circular chevron buttons), Bewitch (wizard-13 — photo bg,
  accordion panels, orange `#f65300`), Enthrall (wizard-14 — mint-green
  page, flat tab strip, electric green). Spellbind's tokens are a
  SEVENTH scheme: DARK `#222` page, 1400px white container, VERTICAL
  numbered-circle timeline, medium blue `#4966b1` accent, near-zero
  validation (email format only, blank messages), dobPicker select
  row, bank search + 8 logo tiles, noUiSlider money range.
- **Live preview — REACHABLE (verified 2026-08-18 by direct fetch):**
  the naive `https://preview.colorlib.com/theme/colorlib-wizard-15/`
  returns 404; the REAL preview is the family path
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-15/index.html`**
  (HTTP 200, 10,076 bytes, 181 lines, `<title>Sign Up Form</title>` —
  same `/etc/bwiz/` path as wizard-1/10/11/12/13/14; do not redo this
  lookup). Stylesheets: `css/style.css` (15,014 bytes, 567 lines — ALL
  custom styling, SCSS-compiled, **NO Bootstrap at all** — jQuery-Steps
  - noUiSlider only: no bootstrap css/js, no acc-wizard) and the
    `material-design-iconic-font.min.css` zmdi icon font (glyphs used:
    `\f2cb` caret-down on date selects' caption area — actually only the
    ALERT `\f135` error icon and `\f21a` search icon are visible; the
    date selects' carets are native; REPLACE all with lucide, do NOT ship
    the font). Fonts: local @font-face **Roboto Slab 300/400/700** →
    **Google Fonts `<link>` (400, 700 — the demo only uses weight 400
    body + bold headings/labels)**. Scripts: jQuery, jquery.validate +
    additional-methods (**ACTIVE but minimal**), jquery.steps.min.js
    (**ACTIVE, vertical**), minimalist-picker dobpicker.js (**ACTIVE**),
    nouislider.min.js + wNumb.js (**ACTIVE**), js/main.js (3,931 bytes —
    validate init + steps init + dobPicker init + noUiSlider init).
- **Live DOM structure (from the fetched HTML; jQuery Steps renders the
  nav/content/actions wrappers dynamically around this markup):**
  - `body` (bg **`#222`**, Roboto Slab 14px/1.6, `#222`, weight 400)
    → `div.main` (padding 50px 0, position relative, z-index 99)
    → `div.container` (width **1400px**, `margin: 0 auto`, bg `#fff`;
    ≤1024px: `calc(100% - 40px)`, max-width 100%) → `form#signup-form`
    (method POST, action "#") → `div` (jQuery Steps root).
    - **Vertical nav** — `div.steps` (float left, width 310px) → `ul`
      (flex column, padding-left 40px, padding-top 60px; `ul:after` =
      the 2px `#ebebeb` connector, 180px tall, left 64px, top 50%,
      translateY(-50%), z-index 9; li padding-bottom 40px, z-index 99)
      → each `li > a` (no decoration, `color: #222`) → the custom
      `div.title` (flex, align-center): `span.step-number`
      (40×40, radius 50%, bg `#ebebeb`, color `#999`, border **5px
      solid #fff**, bold, margin-right 15px) + `span.step-text` (bold,
      `#999`). Current (`li.current .title`): step-number bg
      **`#4966b1`** + `#fff`; step-text `#4966b1`; the finished-step
      state keeps the default `a` color (no extra rule).
    - **Content + actions** — `div.content, div.actions` (float right,
      width 1090px, bg **`#f8f8f8`**); `.content` height 800px (900px
      ≤992px, 1050px ≤480px). In-body step titles are `h3`s with
      `display: none` (.content h3) — the nav timeline is the only
      heading layer; the visible headings are the per-step `h2`
      (30px, margin 0) with `p.desc` (0 margin, margin-bottom 40px,
      color `#555`) beneath. `fieldset`: border none, padding 45px
      55px 0 45px (left 45 / right 55 / top 45). Steps fade ~400ms
      (`transitionEffect: "fade"`).
      - **Step 1 fieldset (Personal info):** `h2` "Personal
        information" + `p.desc` "Please enter your infomation and
        proceed to next step so we can build your account" (source
        typo "infomation" → fix "information", documented) →
        `div.fieldset-content` → `div.form-row` (width 680px) →
        `label.form-label` "Name" (16px, block, width 100%,
        margin-bottom 10px) + `div.form-flex` (flex, margin 0 -10px)
        → two `div.form-group` (width 50%, padding 0 10px) →
        `input` `first_name` / `last_name` (text; 100% width, 1px
        `#ebebeb` border, height 50px, padding 0 20px, `#222` bold,
        14px) + `span.text-input` "First" / "Last" (12px `#999`,
        block, margin-top 5px — captions INSIDE the group under each
        input, acting as hints); then `div.form-group` (width 680px)
        with `label` "Email" + `input type=email` `name=email` +
        `span.text-input` "Example : <email>" (the inner `<span>`
        inside text-input is `#222` bold — 12px grey caption with a
        bold dark email); `div.form-group` "Phone" `input type=text`
        (NO caption span); `div.form-date` — `label.form-label`
        "Birth Date" + `div.form-date-group` (flex; border 1px
        transparent, radius 5px) → three `div.form-date-item`
        (relative, overflow hidden, width 100px, margin-right 10px)
        each: `select` `birth_month` / `birth_date` / `birth_year`
        (native, border 1px `#ebebeb`, 100%, height 50px, padding 0
        20px, z-index 10, pointer cursor, **background #fff**, `#222`
        bold; first option EMPTY) + `span.text-input` "MM" / "DD" /
        "YYYY" below; `div.form-group` "SSN" `input type=text` (no
        caption).
      - **Step 2 fieldset (Connect Bank Account):** `h2` "Connect
        Bank Account" + same `p.desc` → `div.form-group` → `label`
        "Find Your Bank" + `div.form-find` (flex, position relative,
        padding-bottom 70px, **border-bottom 1px `#ebebeb`**):
        `input#find_bank` (padding 0 55px, width 680px, margin-right
        20px; placeholder "Ex. Techcombank" weight 400) + `input
type=submit` value "Search" `.submit` (150px, bg `#666`,
        `#fff`, weight 400, pointer; hover bg `#4d4d4d`) +
        `span.form-icon` (absolute top 12px left 20px, 18px, `#999`;
        `<i class="zmdi zmdi-search">` → lucide `Search`); then
        `div.choose-bank` → `p.choose-bank-desc` "Or choose from
        these popular bank" (`#666`, margin 0, padding 30px 0 35px)
        → `div.form-radio-flex` (flex wrap, margin 0 -15px) → EIGHT
        `div.form-radio-item` (padding 0 15px, margin-bottom 25px):
        `input[type=radio]` (`name=choose_bank`, values bank_1..
        bank_8; **bank_1 `checked`**) 0×0 offscreen (absolute,
        left -9999px) + `label[for=bank_n]` (margin 0, width 223px,
        height 133px, inline-block, centered, transparent bg, 1px
        transparent border; `<img src="images/bank-N.jpg">` fills
        100%/100%; `:checked + label` = 1px solid `#4966b1`). The
        `input:focus + label { outline: none }` and dead `input:hover
{ border }` rules — hover/checked visuals go on the label.
      - **Step 3 fieldset (Set Financial Goals):** `h2` "Set
        Financial Goals" + `p.desc` "Set up your money limit to reach
        the future plan" (no typo) → `div.fieldset-content` →
        `div.donate-us` → `div.price_slider.ui-slider` → `div#slider-margin`
        (noUiSlider target; track 9px `#e8e8e8`, radius 0,
        margin-top 110px) + `p.your-money` (16px `#222`, margin 0,
        padding-top 62px): "Your money you can spend per month : "
        - `span.money#value-lower` (28px bold) + `span.money
#value-upper` (28px bold; **stays EMPTY** — single handle).
  - **No navbar, no page footer in the source** — the actions row
    (Previous/Next) is the only bottom chrome; the monorepo's
    Component Dock footer is a recreation addition (see Footer).
  - **Actions** (`div.actions`, bg `#f8f8f8`, padding-bottom 90px):
    `ul` (padding-left 45px, padding-right 55px; `.disabled` →
    display none) → `li:first-child` Previous (`a`: 140×50, bg
    `#e8e8e8`, color `#999`, flex-centered, float left; hidden on
    step 1) + `li` Next|Finish (`a`: 140×50, bg **`#4966b1`**,
    `#fff`, flex-centered, float right; label "Next" on steps 1–2,
    "Finish" on step 3). ≤480px: buttons 100px wide.
- **Behaviors (all verified 2026-08-18 from live fetch + source JS):**
  - **Step navigation:** jQuery Steps vertical renders 3 steps; the
    nav `<li>`s are links (`href="#steps-uid-0-h-0"` etc.) — clicking a
    step jumps to it; the current step's circle/title turn blue.
    `onStepChanging`/`onFinishing` return `form.valid()` (`ignore:
":disabled,:hidden"` / `":disabled"`) — navigation is gated by the
    EMAIL field's validity on every step (the only rule). The
    `.footer-*` divs appended by main.js have NO CSS (grep count 0) —
    inert; do not recreate.
  - **Validation:** `rules: { email: { email: true } }` — NO required
    rules, NO rules on any other field. All validator messages are
    blanked via `jQuery.extend(jQuery.validator.messages, {…})`.
    `onfocusout` validates the blurred field. `errorPlacement:
element.before(error)`. `label.error` = absolute top 0 right 0
    with `:after` zmdi alert-circle `\f135` (13px `#f63726`, right
    20px, top 50px); `input.error` = 1px `#f63726` border. So the ONLY
    visible feedback is a red border + a small red alert icon at the
    field's top-right (no message text). Recreation: red border + red
    `AlertCircle` icon + `aria-invalid` + an (visually-hidden or
    visible) `aria-describedby` message for screen readers (documented
    a11y improvement).
  - **dobPicker (Birth Date):** `$.dobPicker({ daySelector:
'#birth_date', monthSelector: '#birth_month', yearSelector:
'#birth_year', dayDefault: '', monthDefault: '', yearDefault: '',
minimumAge: 0, maximumAge: 120 })`. Prepend an empty option to each
    select, then fill: days 1–31 (numeric), months **Jan, Feb, Mar,
    Apr, May, Jun, Jul, Aug, Sep, Octr (sic — typo for Oct), Nov,
    Dec**, years **currentYear … currentYear − 120** (descending).
    Recreation: same ranges; month list uses "Oct" (typo fixed,
    documented).
  - **Slider:** `noUiSlider.create('#slider-margin', { start: [1100],
step: 100, connect: [true, false], tooltips: [true], range: { min:
100, max: 2000 }, pips: { mode: 'values', values: [100, 2000],
density: 4 }, format: wNumb({ decimals: 0, thousand: '', prefix:
'$ ' }) })`. `on('update')` writes handle-0 value to `#value-lower`
    (handle 1 never fires — `#value-upper` stays empty). Pips render
    "$100" / "$2000" (16px `#666`, top −50px; `:before` content '$').
    Recreation: single-money readout "Your money you can spend per
    month : **$ 1,100**"→"$ 2,000", formatted `$ ` + no thousands
    separator; slider a11y: label the range control (documented
    improvement — the source has none).
  - **Finish:** `onFinished` → `alert('Submited')` (sic; another
    spelling bug — wizard-14 says "Sumited", this one "Submited").
    Recreation: inline success message (form replaced by a
    confirmation), no alert, no fake network.
- **Screenshot (`colorlib-free-wizard-15.jpg`, 1200×972; the
  TEMPLATES.md row embeds a downscaled copy), viewed 2026-08-18 in the
  browser:** the browser window shows a clean, light-looking page (the
  white 1400px container fills the viewport — per the CSS the page edge
  is dark `#222`): LEFT a vertical stepper — a SOLID BLUE circle
  containing "1" next to bold "Personal info" (active), grey circles
  "2 Connect Bank Account" and "3 Set Financial Goals" beneath, thin
  faint vertical line connecting the circles; RIGHT the "Personal
  information" heading with the subtitle line, First/Last inputs side
  by side, Email with the example hint, Phone, Birth Date (three boxes
  labelled MM / DD / YYYY), SSN; bottom-right a SOLID BLUE rectangular
  "NEXT" button with white text; inputs are white with subtle light
  grey borders; typography clean serif-ish (Roboto Slab). Aesthetic:
  professional, secure, uncluttered fintech/banking onboarding.
  **The only photos in the template are the 8 tiny bank-logo cards on
  step 2 — recreate as text/lucide bank cards; no picsum placeholders
  needed.**

## Design tokens

| Token               | Value                                  | Notes                                                                                   |
| ------------------- | -------------------------------------- | --------------------------------------------------------------------------------------- |
| `--color-page`      | `#222`                                 | DARK charcoal body background (solid, no image); `.main` padding 50px 0, z-index 99     |
| `--color-container` | `#fff`, 1400px                         | `margin: 0 auto`; NO radius, NO shadow; ≤1024px: `calc(100% - 40px)`, max-width 100%    |
| `--color-accent`    | `#4966b1`                              | Medium blue: current step circle bg + title, checked bank-tile border (1px), slider     |
|                     |                                        | connect bar + handle border + tooltip text, Next/Finish button bg                       |
| `--color-panel`     | `#f8f8f8`                              | Content + actions background (right 1090px column)                                      |
| `--color-ink`       | `#222`                                 | Body text, h2, input text (bold), `.text-input` inner `<span>` (bold caption value),    |
|                     |                                        | "Your money" label, `.your-money`                                                       |
| `--color-muted`     | `#999` / `#666` / `#555`               | `#999`: step number/text idle, `.text-input` captions, search icon, Previous button     |
|                     |                                        | text; `#666`: Search button bg, choose-bank desc, slider pip labels; `#555`: `p.desc`   |
| `--color-line`      | `#ebebeb`                              | Input/select borders (1px), connector line (2px), step circle idle bg, `.form-find`     |
|                     |                                        | bottom border (1px)                                                                     |
| `--color-btn-prev`  | bg `#e8e8e8`, text `#999`              | Previous button (140×50, flex-centered, float left; hidden on step 1 via `.disabled`)   |
| `--color-slider`    | track/handle `#e8e8e8`                 | Slider track 9px (radius 0, margin-top 110px), handle 15×30 (1px accent border, radius  |
|                     |                                        | 0, top −12), float tooltip above (bottom 33px, transparent bg, 16px accent)             |
| `--color-error`     | `#f63726`                              | `input.error` 1px border; `label.error:after` zmdi alert-circle 13px icon (right 20px,  |
|                     |                                        | top 50px) — NO message text (all validator messages blanked)                            |
| `--font-body`       | 'Roboto Slab', serif                   | Google Fonts 400/700 (source local @font-face 300–700; demo uses 400 + bold); base      |
|                     |                                        | 14px/1.6, weight 400; `h2` 30px; `form-label` 16px; `.text-input` 12px `#999`           |
| `--step-circle`     | 40×40, radius 50%                      | Idle: bg `#ebebeb`, number `#999`, border **5px solid #fff** (separates from connector  |
|                     |                                        | line), bold, margin-right 15px; current: bg `--color-accent`, number `#fff`             |
| `--step-title`      | bold                                   | Idle `#999`; current `--color-accent`; connector: `ul:after` 2px × 180px `#ebebeb`,     |
|                     |                                        | left 64px, top 50% translateY(-50%); nav ul flex-column, padding 60px 0 0 40px; li      |
|                     |                                        | padding-bottom 40px                                                                     |
| `--field`           | 680px (step 1)                         | input: 100%, 1px line border, height 50px, padding 0 20px, `#222` bold 14px; `.form-    |
|                     |                                        | group`/`.form-date`margin-bottom 18px, relative;`.form-flex` (First/Last) margin        |
|                     |                                        | 0 -10px, children 50% + padding 0 10px; ≤768px: children 100%, flex column              |
| `--date-select`     | 3 × 100px native selects               | 1px line border, height 50px, padding 0 20px, z-index 10, pointer cursor, bg `#fff`,    |
|                     |                                        | `#222` bold; caption "MM"/"DD"/"YYYY" below (12px `#999`); dobPicker: days 1–31, months |
|                     |                                        | Jan..Dec (source typo "Octr" → "Oct"), years current..current−120 DESC; leading empty   |
|                     |                                        | option; `.form-date-group` flex (border 1px transparent, radius 5px); item width 100px, |
|                     |                                        | margin-right 10px, overflow hidden; ≤480px: column                                      |
| `--bank-search`     | `#find_bank` 680px, pad 0 55px         | placeholder weight 400; `.submit` 150px bg `#666` `#fff` weight 400 (hover `#4d4d4d`);  |
|                     |                                        | search icon absolute top 12 left 20 18px `#999` (zmdi-search → lucide `Search`);        |
|                     |                                        | `.form-find` flex, padding-bottom 70px, border-bottom 1px line; ≤480px: column +        |
|                     |                                        | find_bank margin-bottom 20px, width 100% (≤1024px)                                      |
| `--bank-tile`       | 223×133 (ration 8:5)                   | radio input 0×0 offscreen (left -9999px); label 1px transparent border, transparent bg, |
|                     |                                        | img fills 100%/100%; `:checked + label` border 1px accent; dead `input:hover` rule —    |
|                     |                                        | hover on the label; 8 tiles, bank_1 checked; flex wrap, margin 0 -15px, item padding    |
|                     |                                        | 0 15px + margin-bottom 25px; ≤1024px: 190×120; ≤992px: 100×65; ≤480px: 90×61, margins   |
|                     |                                        | 0 -5px / 5px                                                                            |
| `--slider`          | range 100–2000, step 100, start 1100   | single handle, connect [true,false]; pips $100/$2000 (16px `#666`, top −50, `$` via     |
|                     |                                        | `:before`); tooltip shows formatted value above handle (16px accent); margin-top 110px  |
| `--money-text`      | "Your money you can spend per month :" | 16px `#222`, padding-top 62px; value span 28px bold (`$ ` prefix, no thousands          |
|                     |                                        | separator, 0 decimals); ONE readout (`#value-upper` stays empty in the source)          |
| `--btn-next`        | 140×50px                               | Solid accent bg, `#fff`, flex-centered, float right; label "Next" (steps 1–2) /         |
|                     |                                        | "Finish" (step 3); ≤480px: width 100px                                                  |
| `--btn-prev`        | 140×50px                               | bg `#e8e8e8`, `#999` text, flex-centered, float left; `display: none` on step 1         |
| `--validate`        | email-format only                      | `email: { email: true }`, NO required rules; messages blanked; `onfocusout` checks on   |
|                     |                                        | blur; error = red border + red alert icon top-right (no text); navigation gated by      |
|                     |                                        | `form.valid()` on every step change (email is the only possible blocker)                |
| `--success`         | inline confirmation                    | Source: `alert('Submited')` (sic). Recreation: inline success state, no alert,          |
|                     |                                        | no fake network                                                                         |
| `--responsive`      | 1024 / 992 / 768 / 480px               | ≤1024: container `calc(100% - 40px)`, steps/content/actions stack full-width,           |
|                     |                                        | find_bank 100%, tiles 190×120; ≤992: content 900px, tiles 100×65; ≤768: step-1 fields   |
|                     |                                        | 100%, form-flex column, fieldset/actions padding 30px, pips 94%; ≤480: date group +     |
|                     |                                        | form-find columns, content 1050px, buttons 100px, tiles 90×61                           |

## Requirements

### Requirement: Page shell

The system SHALL render the dark page with the wide white container
holding the vertical step timeline, the step content, and the actions.

#### Scenario: Container, page and background

- **GIVEN** the Spellbind app is rendered on a desktop viewport
- **THEN** the page background SHALL be the solid dark `#222` (flat
  color, no background image) with 50px top and bottom padding
- **AND** a white 1400px container SHALL render centered with no border
  radius and no shadow
- **AND** the page font SHALL be Roboto Slab (400/700 via Google
  Fonts), 14px/1.6, `#222`
- **AND** at or below 1024px the container SHALL widen to
  `calc(100% - 40px)` with `max-width: 100%` and no horizontal overflow

#### Scenario: Two-column layout

- **GIVEN** a desktop viewport wider than 1024px
- **THEN** the step timeline SHALL render in a left column (~310px) and
  the content + actions SHALL render in a right column (~1090px) on the
  light grey `#f8f8f8` background
- **AND** at or below 1024px the columns SHALL stack vertically with the
  timeline full-width on top

### Requirement: Vertical step timeline

The system SHALL render the numbered-circle vertical timeline with
exactly three steps — Personal info, Connect Bank Account, Set Financial
Goals — connected by a vertical line, with the current step highlighted
blue.

#### Scenario: Timeline structure and states

- **GIVEN** the Spellbind app is rendered
- **THEN** the timeline SHALL list exactly three steps in order:
  "Personal info", "Connect Bank Account", "Set Financial Goals"
- **AND** each step SHALL show a 40×40 numbered circle (radius 50%)
  with a 5px white border and a bold title beside it
- **AND** idle circles SHALL be grey `#ebebeb` with `#999` numbers and
  `#999` bold titles
- **AND** the step circles SHALL be connected by a 2px `#ebebeb`
  vertical line running behind them
- **AND** the first step SHALL be current on load: circle `#4966b1`
  with a white number and the title `#4966b1`
- **AND** the timeline SHALL expose `role="tablist"` / `role="tab"` /
  `aria-selected` semantics (recreation improvement over the source's
  un-annotated plugin output)

#### Scenario: Step switching

- **GIVEN** any step is current
- **WHEN** the user activates another timeline step
- **THEN** that step's content SHALL be shown (fade transition ~400ms)
  and the activated step's circle/title SHALL become blue while the
  previous returns to grey
- **AND** leaving a step SHALL validate the email field (the only
  rule); if invalid, navigation SHALL be blocked and the email field
  SHALL show the error treatment (see Validation)

### Requirement: Personal info step

The first step SHALL contain the "Personal information" heading, the
description, and the name/email/phone/birth-date/SSN fields in the
source's 680px layout.

#### Scenario: Heading, description and name row

- **GIVEN** the Personal info step is current
- **THEN** a heading SHALL read "Personal information" (30px bold) with
  the description "Please enter your information and proceed to next
  step so we can build your account" beneath it in `#555`
  (the source typo "infomation" is corrected — documented deviation)
- **AND** the "Name" label SHALL sit above a two-column row with
  "First" and "Last" text inputs (50% each), each with a 12px `#999`
  caption under it
- **AND** each input SHALL be 50px tall with a 1px `#ebebeb` border,
  20px horizontal padding, bold `#222` text, and a focus-visible
  ring (a11y addition, documented)

#### Scenario: Email, phone, birth date and SSN

- **GIVEN** the Personal info step is current
- **THEN** an Email input (type=email) SHALL render with the hint
  caption "Example : <email address>" (bold dark address, grey
  caption) beneath it
- **AND** a Phone text input SHALL render with no caption
- **AND** a "Birth Date" group SHALL render three native selects
  labelled by the captions "MM", "DD", "YYYY": months Jan–Dec ("Oct"
  — source typo "Octr" corrected), days 1–31, years from the current
  year down to current year − 120 (descending), each with an empty
  leading option
- **AND** an SSN text input SHALL render with no caption

### Requirement: Connect Bank Account step

The second step SHALL contain the bank search row and the eight radio
tiles with the first selected.

#### Scenario: Bank search

- **GIVEN** the Connect Bank Account step is current
- **THEN** a "Find Your Bank" label SHALL sit above a search row: a
  wide input (placeholder "Ex. Techcombank") with a search icon at its
  left edge, and a grey "Search" button (150px, bg `#666`, white text,
  hover `#4d4d4d`)
- **AND** the row SHALL be separated from the tiles by a 1px `#ebebeb`
  bottom border

#### Scenario: Bank tiles

- **GIVEN** the Connect Bank Account step is current
- **THEN** the text "Or choose from these popular bank" SHALL render
  followed by EIGHT selectable bank tiles in a wrapping row
- **AND** each tile SHALL be an ~223×133 labelled card (the source's
  `bank-1.jpg`…`bank-8.jpg` logo images are NOT shipped; recreation
  uses a lucide `Landmark`/building glyph + a bank name on white —
  see docs/templates/spellbind)
- **AND** the first tile SHALL be selected on load: 1px solid
  `#4966b1` border (radio semantics; `aria-checked`)
- **WHEN** the user activates another tile
- **THEN** it SHALL become selected (blue border) and the previous
  SHALL return to the transparent-border idle state
- **AND** hovering an idle tile SHALL show the blue border (the
  source's hover rule targets the offscreen 0×0 input and never fires —
  the recreation puts hover on the label, documented)
- **AND** the tiles SHALL behave as radios (`getByRole('radio', { name:
… })`, `aria-checked`)

### Requirement: Set Financial Goals step

The third step SHALL contain the monthly-spend money slider and the
live readout.

#### Scenario: Money slider

- **GIVEN** the Set Financial Goals step is current
- **THEN** the description "Set up your money limit to reach the future
  plan" SHALL render followed by an accessible range slider labelled
  "Your money you can spend per month" (recreation improvement — the
  source control has no label)
- **AND** the slider SHALL start at $1,100 and range from $100 to
  $2,000 in $100 steps
- **AND** the track SHALL be a thin grey `#e8e8e8` bar with the filled
  portion from the minimum to the handle in blue `#4966b1`, a
  rectangular blue-bordered handle, and "$100" / "$2000" end-point
  labels
- **WHEN** the user moves the handle
- **THEN** the readout SHALL update to the current value formatted
  "$ " with no thousands separator ("$ 1100" … "$ 2000"; 400-step
  values such as "$ 1200", "$ 1900" reachable) with the value in 28px
  bold
- **AND** a floating value tooltip SHALL follow the handle
- **AND** only ONE readout SHALL be shown (the source's second
  `#value-upper` span is never written — single-handle widget,
  documented)

### Requirement: Validation

The system SHALL validate only the Email field's format with the
source's minimal error treatment and gate navigation until it is valid.

#### Scenario: Email format validation

- **GIVEN** the Email field holds a value that is not a valid email
  address
- **WHEN** the user leaves the field (blur) or attempts to move to
  another step
- **THEN** the field SHALL show a 1px red `#f63726` border and a small
  red alert icon at its top-right (lucide `AlertCircle` — the source
  shows an zmdi glyph; all message texts are blanked in the source)
- **AND** the field SHALL be announced as invalid with a descriptive
  message via `aria-invalid` / `aria-describedby` (recreation a11y
  improvement — the source provides none)
- **WHEN** the user fixes the email to a valid format
- **THEN** the red styling SHALL clear
- **AND** NO other field SHALL ever be validated (the source registers
  no rules besides `email: { email: true }` — do NOT invent required
  checks on name/phone/birth date/SSN/bank/slider)

#### Scenario: Gated navigation

- **GIVEN** the Email field is invalid
- **WHEN** the user activates Next or a timeline step
- **THEN** navigation SHALL be blocked and the email error SHALL show
- **GIVEN** the Email field is valid or empty on later steps
- **WHEN** the user activates Next
- **THEN** the next step SHALL open (fade)

### Requirement: Action buttons

The system SHALL render the grey Previous (hidden on the first step)
and the solid blue Next/Finish buttons in the source's layout.

#### Scenario: Previous and Next/Finish

- **GIVEN** the Personal info step is current
- **THEN** NO Previous button SHALL be visible and a solid blue "Next"
  button (140×50px, white text, bottom-right of the light grey actions
  area) SHALL render
- **GIVEN** the Connect Bank Account step is current
- **THEN** a grey "Previous" button (140×50px, bg `#e8e8e8`, `#999`
  text, bottom-left) SHALL render and the blue "Next" button SHALL
  render bottom-right
- **WHEN** the user activates Previous
- **THEN** the Personal info step SHALL return (fade)
- **GIVEN** the Set Financial Goals step is current
- **THEN** the right button SHALL read "Finish" (solid blue) and
  Previous SHALL remain
- **WHEN** the user activates Finish with a valid form (valid or empty
  email)
- **THEN** the inline success state SHALL render (see Success state)

### Requirement: Success state

The system SHALL complete the wizard with an inline confirmation.

#### Scenario: Inline completion

- **GIVEN** the Set Financial Goals step is current and the user
  activates Finish
- **THEN** the wizard SHALL NOT reload, navigate, or pop an alert
  (source: `alert('Submited')` — replaced per monorepo convention)
- **AND** an inline success message SHALL render (e.g. "Thanks — your
  account setup is complete!") replacing the form content
- **AND** no fake network request SHALL occur
- **AND** the wizard SHALL reset or offer a restart option (single-page
  demo behavior, documented)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (recreation improvement:
the source strips focus outlines and provides almost no ARIA).

#### Scenario: Semantics

- **GIVEN** the Spellbind app is rendered
- **THEN** every input, select, radio, slider and button SHALL have a
  programmatic label (`<label htmlFor>`, `<legend>`, or accessible name)
- **AND** the timeline SHALL expose tab semantics (`role="tablist"` /
  `role="tab"` / `aria-selected`, panels wired with `aria-controls` /
  `aria-labelledby`)
- **AND** the bank tiles SHALL expose radio semantics (`role="radio"`,
  `aria-checked`) and the slider SHALL expose range semantics
  (`role="slider"`, `aria-valuemin/max/now`)
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements (timeline steps, inputs, selects, tiles, search button,
  slider, Previous/Next buttons)

### Requirement: Footer

The system SHALL include the required attribution footer (the source
has no footer content).

#### Scenario: Component Dock credit

- **GIVEN** the Spellbind app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- spellbind` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://colorlib.com/etc/bwiz/colorlib-wizard-15/index.html: dark
      `#222` page, white 1400px container, left vertical timeline with
      three number circles (grey idle / blue `#4966b1` current, 5px
      white border) + connector line, right light-grey `#f8f8f8`
      column; step 1 Personal info (First/Last, Email + example hint,
      Phone, MM/DD/YYYY selects, SSN); step 2 Find Your Bank search +
      Search button + 8 bank tiles (first checked, 1px blue border);
      step 3 money slider ($100–$2,000, blue fill, "$ 1100" readout);
      grey Previous bottom-left (hidden on step 1), blue Next/Finish
      bottom-right; Roboto Slab everywhere.
- [ ] Behavior check: Personal info current on load (blue circle "1");
      timeline clicks switch steps with fade + blue highlight; blur or
      step change with an invalid email → red 1px border + red alert
      icon top-right (no text); navigation blocked until email valid;
      NO validation on name/phone/birth/SSN/bank/slider ever; Birth
      Date selects populated (months Jan–Dec incl. Oct, days 1–31,
      years current→current−120 descending, empty leading option);
      bank tiles radio-wired (first checked, click swaps);
      "Search" button + search icon present; slider moves in $100 steps
      from $100 to $2,000, readout updates "$ NNNN" (no thousands
      separator), tooltip follows, pips show $100/$2000; Previous
      returns to the prior step; Finish shows the inline success message
      (no alert, no reload).
- [ ] Responsive check at 1024px (container `calc(100% - 40px)`,
      columns stack, tiles 190×120), 992px (tiles 100×65), 768px
      (fields full-width, First/Last stacked, 30px paddings), 480px
      (date selects + search row column, buttons 100px, tiles 90×61) —
      no horizontal overflow; content uses `min-height` so nothing clips
      on small screens.
- [ ] No ColorLib strings in any app file; footer links
      https://www.componentdock.com/; provenance lives only in this
      spec, TEMPLATES.md, and the PR; no picsum/source images shipped
      (bank tiles are text/lucide cards).
