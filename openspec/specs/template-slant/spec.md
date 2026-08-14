# Template: Slant (Button / UI Kit Showcase)

## Purpose

Slant is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 05" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-05/), built under a
DIFFERENT name (**Slant** — evoking the page's signature look: every button is
a slanted parallelogram, `transform: skew(-21deg)`, with its label un-skewed
back to horizontal via an inner `<span style="transform: skew(21deg)">`; per
the monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-full-screen-section Bootstrap 4 UI-kit
page. The section is headed **"#02 — Bootstrap 4 Buttons"** (`h2`, 20px,
Roboto, left-aligned inside a centered 10/12 column) and contains the same
four blocks as its sibling "Bootstrap Buttons 04" (Swell): (1) a size row —
three solid blue "Button" buttons (`Large` / `Medium` / `Small` captions
above, `btn-lg` / base / `btn-sm`), (2) a centered **"Button Colors"**
caption, (3) a row of **18** color buttons (`Primary` `Secondary` `Success`
`Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink` `Deep Orange`
`Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`), and (4) a
centered **"Full width button"** caption + one `btn-block` "Button". There is
ONLY one section (no Solid/Outline split, no navbar, no hero, no images, no
footer in the original). The buttons are
`<button class="btn ..."><span>Button</span></button>` — every label sits in
an inner `<span>` because the button itself is skewed and the span un-skews
the text.

The defining signature of this template (what makes it distinct from the
Swell / Bootstrap Buttons 04 sibling) is the **slant**: `.btn` carries
`transform: skew(-21deg)` at rest (a parallelogram leaning left, top edge
shifted left), `.btn > span` carries `transform: skew(21deg)` with
`display: inline-block` to straighten the label, and on hover/active/focus
the button keeps its skew but lightens its background color per-color AND
gains a diagonal drop shadow `-14px 14px 30px 0 rgba(0,0,0,.15)` (declared
`!important`, replacing Bootstrap's default focus shadow). There is NO
white-wash `:before` hover (that is Swell's signature, not this template's)
and NO `text-transform: uppercase` (the labels render title-case as written:
"Button", "Primary", ...). Buttons are `5px` border radius (the LAST
`border-radius` declaration in `style.css` wins — the intermediate `4px` is
dead), `13px` base font / `8px 25px` padding (sm `12px`/`5px 15px`, lg
`16px`/`15px 30px`), no border, `letter-spacing: .02rem`, and a `.3s all
ease` transition. Slant recreates the structure section-for-section with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 05" is FORBIDDEN
> as the app name. **Slant** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-05/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-05/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath — same pattern as the sibling "Bootstrap Buttons
> 01" (Palette), "02" (Toggle), "03" (Float) and "04" (Swell) preps). The
> page `<title>` is "Button #1", and the visible `h2` heading renders the
> full "#02 — Bootstrap 4 Buttons" (em dash `&mdash;`). Fidelity mandate =
> render the heading exactly as the reference renders it.

> HEADING-NUMBER QUIRK (copy-paste artifact): although this is the
> `bootstrap-buttons-05` slug, the `h2` reads **"#02 — Bootstrap 4 Buttons"**
> and the `<title>` reads "Button #1" — the template author copied an earlier
> sibling and never updated the numbers. Do NOT "correct" the heading to
> "#05": the reference renders "#02 — Bootstrap 4 Buttons" and fidelity means
> reproducing exactly what the reference shows. Note it in the PR
> description.

> SCREENSHOT QUIRK (skew not visible in the static preview image): the
> TEMPLATES.md screenshot (`bootstrap-buttons-05.jpg`, 1200×972) shows the
> same layout, palette and copy but renders the buttons as PLAIN RECTANGLES —
> the screenshot predates (or was captured without) the skew transform. The
> LIVE preview (verified 2026-08-14 via browser + computed styles:
> `matrix(1, 0, -0.383864, 1, 0, 0)` on `.btn`, `matrix(1, 0, 0.383864, 1,
0, 0)` on `.btn > span`) renders every button as a left-leaning
> parallelogram with straight text. The live DOM + CSS is authoritative: the
> slant IS the template's signature and MUST be implemented.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 05". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 666). Free UI-kit button-component
  template. The `bootstrap-buttons-05` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-05/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-05/` (HTTP 200,
  18.5KB HTML, `<title>Button #1</title>`). Stylesheets:
  `css/style.css` (4.0KB — ftco custom button/theme rules, THE token source),
  `css/bootstrap.min.css` (Bootstrap 4 — rest-state colors + `.btn-block`),
  `fonts/icomoon/style.css` (unused glyph font on this page). JS: jQuery
  3.3.1 + popper + `bootstrap.min.js` (bundle) + `js/main.js` — none of it
  drives this page (pure static showcase; hover is CSS-only). Structure,
  copy, and tokens below are from the live DOM + `style.css` (+ computed
  styles verified in a real browser). The screenshot
  (`bootstrap-buttons-05.jpg`, 1200×972, browser-verified 2026-08-14) shows
  the same page layout but WITHOUT the skew (see screenshot quirk above).
- **Visual design (live browser render, verified 2026-08-14):** extremely
  clean, flat, white (`#fff`) page. One full-viewport section:
  `div.container.content` → `div.row.align-items-center.content
justify-content-center` → `div.col-md-10.text-left` (10/12 column,
  left-aligned text, vertically centered). Section heading `h2.mb-5` (20px,
  Roboto, dark) reads **"#02 — Bootstrap 4 Buttons"**. Block captions are
  Bootstrap `<small>` in centered `div.text-center` (e.g. "Button Colors",
  "Full width button"); the size captions ("Large"/"Medium"/"Small") sit
  centered above their buttons. ALL 22 buttons (3 sizes + 18 colors + 1
  block) render as left-leaning parallelograms (skew −21°), labels straight.
  Spacing: `mb-5` (3rem) under the heading and the color row, `mb-3 mr-3`
  (1rem) on individual size/color items, `mb-3` on the caption rows.
  Buttons are `5px`-radius (final declaration wins; the intermediate `4px`
  in the block is dead), borderless, `13px` base font / `8px 25px` padding,
  `letter-spacing: .02rem`, no shadow at rest, `.3s all ease` transition.
  No navbar, no hero, no images, no footer.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `h2.mb-5` **"#02 — Bootstrap 4 Buttons"** (20px Roboto,
     left-aligned, `text-left` column).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three `div.mb-3.mr-3`
     items, each a centered `<small>` caption (`Large` / `Medium` / `Small`)
     above a solid blue button labelled "Button": `btn-primary btn-lg` /
     `btn-primary` / `btn-primary btn-sm`.
  3. **Button Colors caption** — centered `<small>` **"Button Colors"**.
  4. **Color row** — `div.mb-5` with **18** solid buttons labelled
     `Primary` `Secondary` `Success` `Info` `Warning` `Danger` `Light`
     `Orange` `Indigo` `Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple`
     `Blue` `Brown` `Blue Gray`, each `btn mb-3 mr-3 btn-{color}`.
  5. **Full width** — `div.mb-3.mr-3` with centered `<small>` **"Full width
     button"** + one `btn btn-primary btn-block` "Button" (display:block,
     width:100%).
- **Button anatomy (all buttons):**
  `<button class="btn ..."><span>Button</span></button>` — the label is
  wrapped in a plain inner `<span>` (no classes) because the button is
  skewed and the span un-skews the text. REQUIRED structure: without the
  inner span the label would render skewed too.
- **Slant transform (signature — name source):** `.btn { transform:
skew(-21deg); position: relative; }` — every button is a parallelogram
  leaning LEFT (top edge shifted left; computed
  `matrix(1, 0, -0.383864, 1, 0, 0)`). `.btn > span { display: inline-block;
transform: skew(21deg); }` — the label is straightened back to horizontal
  (computed `matrix(1, 0, 0.383864, 1, 0, 0)`). The skew applies at REST
  (not only on hover) and persists through hover/active/focus.
- **Hover/focus/active behavior:** `.btn:hover, .btn:active, .btn:focus`
  remove Bootstrap's default focus shadow (`box-shadow: none`, dead
  declaration) and apply `-14px 14px 30px 0 rgba(0,0,0,.15)` `!important`
  (both `-webkit-box-shadow` and `box-shadow`) — a soft diagonal drop shadow
  offset down-right. Simultaneously the background lightens per-color (see
  token table). Standard Bootstrap colors have explicit lighter hover bgs in
  `style.css` (e.g. Primary `#007bff` → `#3395ff`); custom colors likewise
  (Orange `#fd7e14` → `#fd9a47`, etc.); `Light` has no custom rule so the
  Bootstrap hover `#e2e6ea` applies. No white-wash `:before` (that's Swell);
  no `!important` bg overrides (hover bg simply replaces the rest bg).
- **JS behaviors (original):** none — the page is a static showcase (the
  Bootstrap bundle + main.js are inert here; no dropdowns, no toggles).
  Hover is pure CSS. Recreate with CSS transitions; add repo-convention
  `focus-visible` rings (the reference's skew applies on `:focus` too, and
  Bootstrap's default focus outline is replaced by the diagonal shadow —
  repo a11y conventions require an additional visible focus indicator).
- **Design tokens (from `style.css` + bootstrap.min.css + computed styles):**

  | Token                     | Value                                                                                                                                                                                                                  | Usage                                                                                                                    |
  | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
  | Page background           | `#ffffff`                                                                                                                                                                                                              | `body`                                                                                                                   |
  | Section height            | `100vh`                                                                                                                                                                                                                | `.content` (ONE section, vertically centered)                                                                            |
  | Column width              | 10/12 centered, `text-left`                                                                                                                                                                                            | `.col-md-10` inside `row align-items-center justify-content-center`                                                      |
  | Section heading           | 20px, Roboto, dark text                                                                                                                                                                                                | `h2` (custom `font-size: 20px`)                                                                                          |
  | Captions                  | Bootstrap `<small>` (80% = 12.8px)                                                                                                                                                                                     | centered `div.text-center` captions                                                                                      |
  | Font                      | Roboto                                                                                                                                                                                                                 | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...` |
  | Button base               | 13px, `8px 25px`, `border-radius: 5px` (last declaration wins — the intermediate `4px` is dead), `border: none`, `letter-spacing: .02rem`, `position: relative`, `transform: skew(-21deg)`, `transition: .3s all ease` | `.btn`                                                                                                                   |
  | Button label span         | `display: inline-block; transform: skew(21deg)`                                                                                                                                                                        | `.btn > span` (un-skews the label)                                                                                       |
  | Rest shadow               | none (Bootstrap `.btn` has no rest shadow; `style.css` adds none)                                                                                                                                                      | `.btn`                                                                                                                   |
  | Hover/active/focus        | `-14px 14px 30px 0 rgba(0,0,0,.15)` `!important` (preceded by a dead `box-shadow: none`)                                                                                                                               | `.btn:hover, .btn:active, .btn:focus`                                                                                    |
  | Small button (`sm`)       | 12px, `5px 15px`                                                                                                                                                                                                       | `.btn.btn-sm` override                                                                                                   |
  | Large button (`lg`)       | 16px, `15px 30px`                                                                                                                                                                                                      | `.btn.btn-lg` override                                                                                                   |
  | Block button              | `display:block; width:100%`                                                                                                                                                                                            | `.btn-block` (Bootstrap)                                                                                                 |
  | **Colors (rest → hover)** | bg / text (text = Bootstrap default unless noted)                                                                                                                                                                      | `btn-{color}` solid                                                                                                      |
  | Primary                   | `#007bff` → `#3395ff` / `#ffffff`                                                                                                                                                                                      | blue (Bootstrap rest; custom hover)                                                                                      |
  | Secondary                 | `#6c757d` → `#868e96` / `#ffffff`                                                                                                                                                                                      | grey (Bootstrap rest; custom hover)                                                                                      |
  | Success                   | `#28a745` → `#34ce57` / `#ffffff`                                                                                                                                                                                      | green (Bootstrap rest; custom hover)                                                                                     |
  | Info                      | `#17a2b8` → `#1fc8e3` / `#ffffff`                                                                                                                                                                                      | teal/cyan (Bootstrap rest; custom hover)                                                                                 |
  | Warning                   | `#ffc107` → `#ffce3a` / `#212529` (DARK text, Bootstrap default)                                                                                                                                                       | amber (Bootstrap rest; custom hover)                                                                                     |
  | Danger                    | `#dc3545` → `#e4606d` / `#ffffff`                                                                                                                                                                                      | red (Bootstrap rest; custom hover)                                                                                       |
  | Light                     | `#f8f9fa` → `#e2e6ea` / `#212529` (DARK text; hover from Bootstrap, no custom rule)                                                                                                                                    | light grey (Bootstrap rest + hover), DARK text                                                                           |
  | Orange                    | `#fd7e14` → `#fd9a47` / `#ffffff`                                                                                                                                                                                      | custom (style.css)                                                                                                       |
  | Indigo                    | `#6610f2` → `#8540f5` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Pink                      | `#e83e8c` → `#ed6ca7` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Deep Orange               | `#ffac8e` → `#ffd1c1` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Aqua                      | `#3fc5f0` → `#6ed3f4` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Dark                      | `#393e46` → `#505762` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Black                     | `#000000` → `#1a1a1a` / `#ffffff`                                                                                                                                                                                      | custom (`#000`)                                                                                                          |
  | Purple                    | `#6f42c1` → `#8c68ce` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Blue                      | `#007bff` → `#3395ff` / `#ffffff`                                                                                                                                                                                      | custom (same hex as Primary)                                                                                             |
  | Brown                     | `#a0855b` → `#b49d7a` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |
  | Blue Gray                 | `#3f4d71` → `#516392` / `#ffffff`                                                                                                                                                                                      | custom                                                                                                                   |

- **Fonts:** **Roboto** is the theme family (`body` and all headings).
  Load Roboto (weights 300–700) via Google Fonts `<link>` in `index.html`;
  no icon font needed (no icons on this page — implement with plain text
  labels only, `lucide-react` not required here).
- **NOT uppercase:** unlike the Swell / Bootstrap Buttons 04 sibling, this
  template has NO `text-transform: uppercase` — labels render exactly as
  written in the DOM ("Button", "Primary", "Secondary", ..., "Blue Gray").
  Do not add uppercase styling.
- **NOT Swell's hover:** there is NO `.btn:before` white-wash rising
  animation. The hover treatment is (a) per-color lightened background and
  (b) the diagonal `!important` drop shadow. Keep the two templates'
  signatures distinct.

## Requirements

### Requirement: Page structure

The system SHALL render the Slant page as one full-viewport section on a
white background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Slant page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single full-viewport section SHALL be headed **"#02 — Bootstrap
  4 Buttons"** (em dash, 20px Roboto, left-aligned in a centered 10/12
  column)
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Content column

- **GIVEN** the section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered 10/12-width column with
  left-aligned text and vertically centered rows
- **AND** the section SHALL contain, in order: heading, size row, "Button
  Colors" caption + color row, "Full width button" caption + block button

### Requirement: Heading

The system SHALL render the reference heading exactly, including its
copy-paste artifact number.

#### Scenario: Exact heading text

- **GIVEN** the Slant page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"#02 — Bootstrap 4 Buttons"** (em dash
  between "#02" and "Bootstrap") — exactly as the reference renders it,
  even though the source slug is `bootstrap-buttons-05` (the reference
  author copied an earlier sibling and never updated the number; do NOT
  "correct" it to "#05")
- **AND** the heading SHALL be 20px Roboto, dark text, left-aligned

### Requirement: Size row

The system SHALL render the size row with three solid blue buttons in the
reference order and sizes.

#### Scenario: Size variants

- **GIVEN** the Slant section is displayed
- **WHEN** the user views the size row
- **THEN** three solid blue (`#007bff`) buttons labelled "Button" SHALL
  render, with centered `Large` / `Medium` / `Small` captions above them
- **AND** the Large button SHALL use the large size (16px font, `15px
30px` padding), the Medium the base size (13px, `8px 25px`), and the
  Small the small size (12px, `5px 15px`)
- **AND** every button label SHALL render inside an un-skewed inner span
  (see "Slant transform" requirement)

### Requirement: Color row

The system SHALL render the "Button Colors" caption and all 18 color
buttons with their palette backgrounds, hover backgrounds, and text colors.

#### Scenario: Color palette

- **GIVEN** the Slant section is displayed
- **WHEN** the user views the color row
- **THEN** a centered "Button Colors" caption SHALL render
- **AND** 18 labelled solid buttons SHALL render: `Primary` `Secondary`
  `Success` `Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink`
  `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`
- **AND** each button SHALL use its palette background: `Primary` `#007bff`,
  `Secondary` `#6c757d`, `Success` `#28a745`, `Info` `#17a2b8`, `Warning`
  `#ffc107`, `Danger` `#dc3545`, `Light` `#f8f9fa`, `Orange` `#fd7e14`,
  `Indigo` `#6610f2`, `Pink` `#e83e8c`, `Deep Orange` `#ffac8e`, `Aqua`
  `#3fc5f0`, `Dark` `#393e46`, `Black` `#000000`, `Purple` `#6f42c1`,
  `Blue` `#007bff`, `Brown` `#a0855b`, `Blue Gray` `#3f4d71`
- **AND** button text SHALL be white, except Warning (`#ffc107`) and Light
  (`#f8f9fa`) which SHALL use dark text `#212529`
- **AND** all buttons SHALL be `5px` radius, borderless, with NO shadow at
  rest and no `text-transform: uppercase` (labels render title-case as
  written)
- **AND** there SHALL be NO outline variants on this page (single solid
  section, like the 04 sibling)

#### Scenario: Full-width button

- **GIVEN** the Slant section is displayed
- **WHEN** the user views the bottom of the section
- **THEN** a centered "Full width button" caption SHALL render
- **AND** a solid blue `#007bff` button labelled "Button" SHALL span the
  full column width (`display:block; width:100%`)

### Requirement: Slant transform

The system SHALL reproduce the signature slant: every button is a
left-leaning parallelogram and its label stays horizontal.

#### Scenario: Skewed button shape

- **GIVEN** any button is displayed
- **WHEN** the user inspects its shape
- **THEN** the button SHALL be skewed `-21deg` (`transform: skew(-21deg)`,
  a parallelogram leaning left — computed matrix `matrix(1, 0, -0.383864,
1, 0, 0)`)
- **AND** the label SHALL be wrapped in an inner span with
  `display: inline-block; transform: skew(21deg)` so the text renders
  straight (computed matrix `matrix(1, 0, 0.383864, 1, 0, 0)`)
- **AND** the skew SHALL apply at rest (not only on hover) and persist
  through hover/active/focus states

#### Scenario: Transition

- **GIVEN** any button is displayed
- **WHEN** the user hovers it
- **THEN** the button SHALL transition its properties over `.3s` with
  `ease` timing

### Requirement: Hover and focus behavior

The system SHALL reproduce the reference hover treatment: lightened
background per color plus a diagonal drop shadow; and add a visible focus
indicator per repo a11y conventions.

#### Scenario: Hover state

- **GIVEN** any button is displayed
- **WHEN** the user hovers it
- **THEN** the button's background SHALL lighten to its hover color:
  `Primary` `#3395ff`, `Secondary` `#868e96`, `Success` `#34ce57`, `Info`
  `#1fc8e3`, `Warning` `#ffce3a`, `Danger` `#e4606d`, `Light` `#e2e6ea`,
  `Orange` `#fd9a47`, `Indigo` `#8540f5`, `Pink` `#ed6ca7`, `Deep Orange`
  `#ffd1c1`, `Aqua` `#6ed3f4`, `Dark` `#505762`, `Black` `#1a1a1a`,
  `Purple` `#8c68ce`, `Blue` `#3395ff`, `Brown` `#b49d7a`, `Blue Gray`
  `#516392`
- **AND** the button SHALL gain a diagonal drop shadow `-14px 14px 30px 0
rgba(0,0,0,.15)` (offset down-right, `!important` in the reference)
- **AND** the button SHALL keep its slant and its text color

#### Scenario: Active and focus shadow

- **GIVEN** a button is pressed or keyboard-focused
- **WHEN** the user activates it
- **THEN** the diagonal drop shadow `-14px 14px 30px 0 rgba(0,0,0,.15)`
  SHALL apply (reference applies the same shadow on `:hover`, `:active`
  and `:focus`)
- **AND** the button SHALL show a visible focus indication (repo convention
  `focus-visible` ring; the reference replaces Bootstrap's default focus
  outline with the diagonal shadow, which alone is not a sufficient a11y
  focus indicator)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Slant page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the button rows SHALL wrap onto multiple lines without
  horizontal overflow
- **AND** the fixed `100vh` section height SHALL be relaxed (auto
  min-height or similar) so the section's content is not clipped or forces
  an empty scroll gap (reference uses `height: 100vh`, which clips on
  small screens)
- **AND** the heading and captions SHALL remain left/center aligned as in
  the reference and fully readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Slant page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-slant`
- [ ] `scripts/verify-app.sh slant` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("#02 —
      Bootstrap 4 Buttons": sizes → Button Colors → 18 color buttons →
      Full width button) → minimal Component Dock footer; white page, no
      navbar/hero/images, no outline variants
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#007bff`, secondary `#6c757d`, success `#28a745`, info `#17a2b8`,
      warning `#ffc107`, danger `#dc3545`, light `#f8f9fa`, orange
      `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep-orange `#ffac8e`,
      aqua `#3fc5f0`, dark `#393e46`, black `#000000`, purple `#6f42c1`,
      blue `#007bff`, brown `#a0855b`, blue-gray `#3f4d71`; hover variants
      as listed; dark text `#212529`; page `#ffffff`
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title "Slant
      — Button Showcase" (reference `<title>` "Button #1" is a copy-paste
      artifact — use the app's own title per repo convention)
- [ ] Buttons: 5px radius (NOT 4px — last declaration wins), 13px/8px-25px
      base, sm 12px/5px-15px, lg 16px/15px-30px, block = full width; NO
      text-transform: uppercase (labels title-case); white text except
      Warning and Light (dark `#212529`); no rest shadow; hover = lightened
      bg + `-14px 14px 30px 0 rgba(0,0,0,.15)` shadow, `.3s all ease`
- [ ] Signature slant: every button `transform: skew(-21deg)` (parallelogram
      leaning left), label inside `<span>` with `transform: skew(21deg)`;
      skew present at rest and on hover/active/focus; NO white-wash `:before`
      hover (that's Swell's signature — keep them distinct)
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 05"
      row, line 666 — Bootstrap Buttons category)
