# Template: Bezel (Button / UI Kit Showcase)

## Purpose

Bezel is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 10" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-10/), built under a
DIFFERENT name (**Bezel** — evoking the page's signature look: every button is
a white panel framed by a DOUBLE colored border — a 1px outer ring at the
button edge plus a second 1px ring inset 3px, and on hover the 3px band
between the two rings fills solid with the button's color, exactly like a
picture-frame bezel; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-section Bootstrap 4 UI-kit page. The
section is headed **"#10 — Bootstrap 4 Buttons"** (`h2`, 20px, Roboto,
left-aligned inside a centered 10/12 column, `mb-5` = 3rem bottom margin)
and contains the same four blocks as its sibling "Bootstrap Buttons 05"
(Slant): (1) a size row — three solid-outlined "Button" buttons (`Large` /
`Medium` / `Small` captions above, `btn-lg` / base / `btn-sm`), (2) a
centered **"Button Colors"** caption, (3) a row of **18** frame buttons
(`Primary` `Secondary` `Success` `Info` `Warning` `Danger` `Light` `Orange`
`Indigo` `Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown`
`Blue Gray`), and (4) a centered **"Full width button"** caption + one
`btn-block` "Button". There is ONLY one section (no navbar, no hero, no
images, no footer in the original). The buttons are plain
`<button class="btn ...">Label</button>` — NO inner `<span>` (unlike the
Slant sibling): there is no transform here, so the label sits directly in
the button.

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **bezel frame**: `.btn` carries
`border-radius: 0px` (SQUARE — the LAST `border-radius` declaration in
`style.css` wins; the intermediate `4px` is dead), `border: none`,
`background: transparent !important`, `color: #000 !important` (text is
ALWAYS black, at rest AND on hover — no white text on colored buttons
anywhere), `position: relative`, and two pseudo-element rings:
`.btn:before` is a white panel (`background: #fff`, `z-index: -1`) inset 3px
from every edge (`top/right/bottom/left: 3px`) with `border: 1px solid
<color>` — the INNER ring; `.btn:after` (`z-index: -2`) is `border: 1px
solid <color>` at the button's exact edge — the OUTER ring. On
`.btn:hover:after, .btn:focus:after` the outer ring's `background` fills
with `<color>` (e.g. `#007bff` for Primary), so the 3px band between the
two rings becomes a solid colored bezel around the white panel; the inner
white panel and the black text stay unchanged. There is NO drop shadow
(`box-shadow: none` on hover/active/focus), NO white-wash `:before` (that
is Swell's signature), NO slant/transform (that is Slant's signature) and
NO `text-transform: uppercase` (labels render title-case as written).
Base button: 14px bold / `8px 25px` padding, sm 10px / `5px 15px`, lg 16px
/ `15px 30px`, `.3s all ease` transition on the pseudo-elements. Bezel
recreates the structure section-for-section with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 10" is FORBIDDEN
> as the app name. **Bezel** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-10/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath — same pattern as the sibling "Bootstrap Buttons
> 01" (Palette), "02" (Toggle), "03" (Float), "04" (Swell) and "05" (Slant)
> preps). The page `<title>` is "Button #10", and the visible `h2` heading
> renders the full "#10 — Bootstrap 4 Buttons" (em dash `&mdash;`). Unlike
> the 05 sibling (whose heading says "#02" — a copy-paste artifact), the
> heading number HERE correctly matches the slug. Fidelity mandate = render
> the heading exactly as the reference renders it.

> SCREENSHOT QUIRK (outdated asset — black text + double frame not visible
> in the static preview image): the TEMPLATES.md screenshot
> (`bootstrap-buttons-10.jpg`, 1200×972, browser-verified 2026-08-14)
> shows an OLDER iteration of this page: the buttons render with COLORED
> text matching their border color (like Bootstrap `.btn-outline-*`
> buttons) and a single-border outline look. The LIVE page (verified
> 2026-08-14 via browser + computed styles: `color: rgb(0,0,0)`,
> `background: rgba(0,0,0,0)`, `border-radius: 0px` on `.btn`;
> `::before` white panel inset 3px with `1px solid rgb(0,123,255)` border;
> `::after` `1px solid rgb(0,123,255)` border, transparent at rest) renders
> every button with BLACK text and the double-ring bezel frame. The live
> DOM + CSS is authoritative: black text + double frame IS the template's
> signature and MUST be implemented (the static screenshot predates the
> current `style.css`).

> CORNER-SHAPE NOTE: both vision-model passes described the buttons as
> "slightly rounded"; the computed style is `border-radius: 0px` (the last
> declaration in `style.css` wins over the intermediate `4px`) — the
> buttons are SQUARE. The perceived roundness is a rendering artifact of
> the 1px outer ring + 3px-inset inner ring at the corners (tiny notches)
> plus anti-aliasing in compressed screenshots. CSS is authoritative: 0px.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 10". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 671). Free UI-kit button-component
  template. The `bootstrap-buttons-10` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-10/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-10/` (HTTP 200,
  18.2KB HTML, `<title>Button #10</title>`). Stylesheets:
  `css/style.css` (5.3KB — ftco custom button/theme rules, THE token
  source), `css/bootstrap.min.css` (Bootstrap 4 — `.btn` base reset,
  `.btn-block`), `fonts/icomoon/style.css` (unused glyph font on this
  page). JS: jQuery 3.3.1 + popper + `bootstrap.min.js` (bundle) +
  `js/main.js` — none of it drives this page (pure static showcase; hover
  is CSS-only). Structure, copy, and tokens below are from the live DOM +
  `style.css` (+ computed styles verified in a real browser). The
  screenshot (`bootstrap-buttons-10.jpg`, 1200×972, browser-verified
  2026-08-14) shows the same page layout but an OLDER button treatment
  (colored text / single border — see screenshot quirk above).
- **Visual design (live browser render, verified 2026-08-14):** extremely
  clean, flat, white (`#fff`) page. One section:
  `div.container.content` (padding `7rem 0` = 112px top/bottom — NOT
  `100vh`, unlike the 04/05 siblings) → `div.row.align-items-center
justify-content-center` → `div.col-md-10.text-left` (10/12 column, 975px
  wide in a 1140px container at xl, left-aligned text). Section heading
  `h2.mb-5` (20px, Roboto, dark, margin-bottom 3rem) reads **"#10 —
  Bootstrap 4 Buttons"**. Block captions are Bootstrap `<small>` (80% =
  12.8px) in centered `div.text-center` (e.g. "Button Colors", "Full width
  button"); the size captions ("Large"/"Medium"/"Small") sit centered above
  their buttons. ALL 22 buttons (3 sizes + 18 colors + 1 block) render as
  SQUARE (0px radius) white-panel buttons with a double colored ring and
  BLACK text. Spacing: `mb-5` (3rem) under the heading, `mb-5` on the
  color row, `mb-3 mr-3` (1rem) on individual size/color items and the
  full-width block, `mb-3` on the caption rows. Buttons are borderless
  (the rings come from pseudo-elements), 14px bold base font / `8px 25px`
  padding, no letter-spacing, no shadow at rest or hover, `.3s all ease`
  transition. No navbar, no hero, no images, no footer.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `h2.mb-5` **"#10 — Bootstrap 4 Buttons"** (20px Roboto,
     left-aligned, `text-left` column).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three `div.mb-3.mr-3`
     items, each a centered `<small>` caption (`Large` / `Medium` /
     `Small`) above a blue-framed button labelled "Button":
     `btn-primary btn-lg` / `btn-primary` / `btn-primary btn-sm`.
  3. **Button Colors caption** — `div class=" mb-3"` (sloppy leading
     space in the class attribute, as authored) > `div.text-center` >
     centered `<small>` **"Button Colors"**.
  4. **Color row** — `div.mb-5` with **18** frame buttons labelled
     `Primary` `Secondary` `Success` `Info` `Warning` `Danger` `Light`
     `Orange` `Indigo` `Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple`
     `Blue` `Brown` `Blue Gray`, each `btn mb-3 mr-3 btn-{color}`.
  5. **Full width** — `div.mb-3.mr-3` with centered `<small>` **"Full
     width button"** + one `btn btn-primary btn-block` "Button"
     (display:block, width:100%).
- **Button anatomy (all buttons):**
  `<button class="btn ...">Label</button>` — the label is a DIRECT text
  node (NO inner `<span>`, NO transform — unlike the Slant sibling). The
  double frame is built purely from `::before`/`::after` pseudo-elements,
  so the markup stays minimal.
- **Bezel frame (signature — name source):** `.btn { position: relative;
border: none; background: transparent !important; color: #000
!important; }` — every button is a transparent box with black text.
  `.btn:before` = `position: absolute; top: 3px; right: 3px; bottom: 3px;
left: 3px; background: #fff; z-index: -1; border: 1px solid <color>;` —
  a white panel with a 1px colored border, inset 3px from every button
  edge (the INNER ring; the 3px margin shows the button's "true" bounds).
  `.btn:after` = `position: absolute; top: 0; right: 0; bottom: 0; left:
0; z-index: -2; border: 1px solid <color>;` — a 1px colored border at
  the button's exact edge (the OUTER ring). Both rings use the SAME color
  per button (`.btn-{color}:before { border-color: <c> }`,
  `.btn-{color}:after { border-color: <c> }`). Because the pseudo-elements
  sit behind the button content (negative z-index, transparent button bg),
  the black label renders on top of the white panel. Hover/focus:
  `.btn-{color}:hover:after, .btn-{color}:focus:after { background:
<c> }` — the outer ring's box fills solid with the color, turning the
  3px band between the two rings into a solid colored bezel frame around
  the white panel (the `::before` white panel + inner ring stay
  unchanged; text stays black).
- **Hover/focus/active behavior:** `.btn:hover, .btn:active, .btn:focus`
  set `box-shadow: none` and `color: #000` (black text is guaranteed in
  every state). The ONLY visual change on hover/focus is the `::after`
  background filling with the per-color value (see token table). NO drop
  shadow anywhere, NO background change on the button itself, NO white
  wash, NO transform.
- **JS behaviors (original):** none — the page is a static showcase (the
  Bootstrap bundle + main.js are inert here; no dropdowns, no toggles).
  Hover is pure CSS. Recreate with CSS transitions; add repo-convention
  `focus-visible` rings (the reference fills the bezel on `:focus` too,
  but the color fill alone is not a sufficient a11y focus indicator).
- **Design tokens (from `style.css` + bootstrap.min.css + computed styles):**

  | Token                                | Value                                                                                                                                                                                                                                                                             | Usage                                                                                                                    |
  | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
  | Page background                      | `#ffffff`                                                                                                                                                                                                                                                                         | `body`                                                                                                                   |
  | Section padding                      | `7rem 0` (112px top/bottom; NOT `100vh` — differs from the 04/05 siblings)                                                                                                                                                                                                        | `.content` (ONE section)                                                                                                 |
  | Column width                         | 10/12 centered, `text-left`                                                                                                                                                                                                                                                       | `.col-md-10` inside `row align-items-center justify-content-center`                                                      |
  | Section heading                      | 20px, Roboto, dark text, `margin-bottom: 3rem` (`mb-5`)                                                                                                                                                                                                                           | `h2` (custom `font-size: 20px`)                                                                                          |
  | Captions                             | Bootstrap `<small>` (80% = 12.8px)                                                                                                                                                                                                                                                | centered `div.text-center` captions                                                                                      |
  | Font                                 | Roboto                                                                                                                                                                                                                                                                            | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...` |
  | Button base                          | 14px, `font-weight: 700` (bold), `8px 25px`, `border-radius: 0px` (LAST declaration wins — the intermediate `4px` is dead), `border: none`, `background: transparent !important`, `color: #000 !important`, `position: relative`, NO letter-spacing, NO text-transform, NO shadow | `.btn`                                                                                                                   |
  | Button rings                         | `::before` inset `3px` (all sides), `background: #fff`, `z-index: -1`, `border: 1px solid <color>`; `::after` full-bleed, `z-index: -2`, `border: 1px solid <color>`; both `transition: .3s all ease`                                                                             | `.btn:before`, `.btn:after` (the double bezel frame)                                                                     |
  | Hover/active/focus                   | `box-shadow: none; color: #000` on the button; `::after` background fills with `<color>`; `::before` unchanged                                                                                                                                                                    | `.btn:hover, .btn:active, .btn:focus` + `.btn-{color}:hover:after, .btn-{color}:focus:after`                             |
  | Small button (`sm`)                  | 10px, `5px 15px`                                                                                                                                                                                                                                                                  | `.btn.btn-sm` override                                                                                                   |
  | Large button (`lg`)                  | 16px, `15px 30px`                                                                                                                                                                                                                                                                 | `.btn.btn-lg` override                                                                                                   |
  | Block button                         | `display:block; width:100%`                                                                                                                                                                                                                                                       | `.btn-block` (Bootstrap)                                                                                                 |
  | **Colors (ring color = hover fill)** | border color (both rings) → `::after` hover/focus fill                                                                                                                                                                                                                            | `btn-{color}`                                                                                                            |
  | Primary                              | `#007bff`                                                                                                                                                                                                                                                                         | blue (Bootstrap default)                                                                                                 |
  | Secondary                            | `#6c757d`                                                                                                                                                                                                                                                                         | grey (Bootstrap default)                                                                                                 |
  | Success                              | `#28a745`                                                                                                                                                                                                                                                                         | green (Bootstrap default)                                                                                                |
  | Info                                 | `#17a2b8`                                                                                                                                                                                                                                                                         | teal/cyan (Bootstrap default)                                                                                            |
  | Warning                              | `#ffc107`                                                                                                                                                                                                                                                                         | amber (Bootstrap default)                                                                                                |
  | Danger                               | `#dc3545`                                                                                                                                                                                                                                                                         | red (Bootstrap default)                                                                                                  |
  | Light                                | `#dae0e5`                                                                                                                                                                                                                                                                         | light grey — CUSTOM (style.css; NOT Bootstrap's `#f8f9fa`)                                                               |
  | Orange                               | `#fd7e14`                                                                                                                                                                                                                                                                         | custom (style.css)                                                                                                       |
  | Indigo                               | `#6610f2`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Pink                                 | `#e83e8c`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Deep Orange                          | `#ffac8e`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Aqua                                 | `#3fc5f0`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Dark                                 | `#393e46`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Black                                | `#000000`                                                                                                                                                                                                                                                                         | custom (`#000`)                                                                                                          |
  | Purple                               | `#6f42c1`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Blue                                 | `#007bff`                                                                                                                                                                                                                                                                         | custom (same hex as Primary)                                                                                             |
  | Brown                                | `#a0855b`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |
  | Blue Gray                            | `#3f4d71`                                                                                                                                                                                                                                                                         | custom                                                                                                                   |

- **Fonts:** **Roboto** is the theme family (`body` and all headings).
  Load Roboto (weights 300–700) via Google Fonts `<link>` in `index.html`;
  no icon font needed (no icons on this page — implement with plain text
  labels only, `lucide-react` not required here).
- **NOT uppercase:** like the Slant sibling, this template has NO
  `text-transform: uppercase` — labels render exactly as written in the
  DOM ("Button", "Primary", "Secondary", ..., "Blue Gray"). Do not add
  uppercase styling.
- **NOT Slant's skew:** there is NO `transform: skew(-21deg)` and NO inner
  `<span>` wrapper. The button box is a plain square; the double frame is
  pseudo-element-only. Do not port the skew.
- **NOT Swell's hover:** there is NO `.btn:before` white-wash rising
  animation (here `::before` is a STATIC white panel). The hover treatment
  is solely the `::after` fill (a solid colored bezel band). Keep the
  three templates' signatures distinct.
- **Text is ALWAYS black:** unlike the 05/04 siblings (white text on
  colored buttons), NO button ever gets white text — `color: #000
!important` at rest and `.btn:hover, .btn:active, .btn:focus { color:
#000 }`. The colored element is the FRAME, never the label.

## Requirements

### Requirement: Page structure

The system SHALL render the Bezel page as one section on a white
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Bezel page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single section SHALL be headed **"#10 — Bootstrap 4 Buttons"**
  (em dash, 20px Roboto, left-aligned in a centered 10/12 column)
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Content column

- **GIVEN** the section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered 10/12-width column with
  left-aligned text and centered rows (the reference uses `padding: 7rem
0` on the section — NOT a fixed `100vh`, unlike the 04/05 siblings)
- **AND** the section SHALL contain, in order: heading, size row, "Button
  Colors" caption + color row, "Full width button" caption + block button

### Requirement: Heading

The system SHALL render the reference heading exactly, including the em
dash. (Unlike the 05 sibling, the number here matches the slug — "#10",
no copy-paste artifact to preserve.)

#### Scenario: Exact heading text

- **GIVEN** the Bezel page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"#10 — Bootstrap 4 Buttons"** (em dash
  between "#10" and "Bootstrap") — exactly as the reference renders it
- **AND** the heading SHALL be 20px Roboto, dark text, left-aligned, with
  a 3rem bottom margin (`mb-5`)

### Requirement: Size row

The system SHALL render the size row with three blue-framed buttons in the
reference order and sizes.

#### Scenario: Size variants

- **GIVEN** the Bezel section is displayed
- **WHEN** the user views the size row
- **THEN** three buttons labelled "Button" with blue (`#007bff`) frames
  SHALL render, with centered `Large` / `Medium` / `Small` captions above
  them
- **AND** the Large button SHALL use the large size (16px font, `15px
30px` padding), the Medium the base size (14px bold, `8px 25px`), and
  the Small the small size (10px, `5px 15px`)
- **AND** every button SHALL render the bezel frame (see "Bezel frame"
  requirement) with black text

### Requirement: Color row

The system SHALL render the "Button Colors" caption and all 18 color
buttons with their per-color frame rings and hover fills.

#### Scenario: Color palette

- **GIVEN** the Bezel section is displayed
- **WHEN** the user views the color row
- **THEN** a centered "Button Colors" caption SHALL render
- **AND** 18 labelled frame buttons SHALL render: `Primary` `Secondary`
  `Success` `Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink`
  `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`
- **AND** each button's double ring SHALL use its palette color:
  `Primary` `#007bff`, `Secondary` `#6c757d`, `Success` `#28a745`, `Info`
  `#17a2b8`, `Warning` `#ffc107`, `Danger` `#dc3545`, `Light` `#dae0e5`
  (CUSTOM — NOT Bootstrap's `#f8f9fa`), `Orange` `#fd7e14`, `Indigo`
  `#6610f2`, `Pink` `#e83e8c`, `Deep Orange` `#ffac8e`, `Aqua` `#3fc5f0`,
  `Dark` `#393e46`, `Black` `#000000`, `Purple` `#6f42c1`, `Blue`
  `#007bff`, `Brown` `#a0855b`, `Blue Gray` `#3f4d71`
- **AND** the label of EVERY button SHALL be black (`#000`) — including
  Warning and Light (no dark-text exceptions needed: ALL text is black)
- **AND** all buttons SHALL be square (0px radius), borderless, with NO
  shadow at rest and no `text-transform: uppercase` (labels render
  title-case as written)
- **AND** there SHALL be NO outline variants on this page (single solid
  frame section, like the 05 sibling)

#### Scenario: Full-width button

- **GIVEN** the Bezel section is displayed
- **WHEN** the user views the bottom of the section
- **THEN** a centered "Full width button" caption SHALL render
- **AND** a blue-framed (`#007bff`) button labelled "Button" SHALL span
  the full column width (`display:block; width:100%`)

### Requirement: Bezel frame

The system SHALL reproduce the signature double frame: every button is a
white panel with two colored rings and black text, and the outer ring
fills on hover.

#### Scenario: Double ring at rest

- **GIVEN** any button is displayed
- **WHEN** the user inspects its shape
- **THEN** the button SHALL be square (`border-radius: 0px` — the last
  declaration wins over the intermediate `4px`), transparent, with black
  text
- **AND** an outer 1px ring in the button's color SHALL render at the
  button's exact edge (`::after`)
- **AND** an inner 1px ring in the same color SHALL render inset 3px from
  every edge, with a white panel filling the interior (`::before` —
  `background: #fff`, `z-index: -1`)
- **AND** the rings SHALL transition over `.3s` with `ease` timing

#### Scenario: Hover and focus fill

- **GIVEN** any button is displayed
- **WHEN** the user hovers or keyboard-focuses it
- **THEN** the band between the outer and inner rings SHALL fill solid
  with the button's color (the `::after` background fills; e.g. Primary →
  `#007bff`)
- **AND** the inner white panel, both rings' borders, and the black label
  SHALL remain unchanged
- **AND** the button SHALL show a visible focus indication (repo
  convention `focus-visible` ring; the reference's color fill alone is
  not a sufficient a11y focus indicator)
- **AND** there SHALL be NO drop shadow and NO background change on the
  button itself in any state

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Bezel page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the button rows SHALL wrap onto multiple lines without
  horizontal overflow
- **AND** the section's `7rem` vertical padding SHALL be relaxed (auto or
  reduced) so the section is not overly tall on small screens
- **AND** the 10/12 column SHALL become full width below `md`
- **AND** the heading and captions SHALL remain left/center aligned as in
  the reference and fully readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Bezel page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-bezel`
- [ ] `scripts/verify-app.sh bezel` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("#10 —
      Bootstrap 4 Buttons": sizes → Button Colors → 18 color buttons →
      Full width button) → minimal Component Dock footer; white page, no
      navbar/hero/images, no outline variants
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#007bff`, secondary `#6c757d`, success `#28a745`, info `#17a2b8`,
      warning `#ffc107`, danger `#dc3545`, light `#dae0e5` (CUSTOM — NOT
      `#f8f9fa`), orange `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`,
      deep-orange `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black
      `#000000`, purple `#6f42c1`, blue `#007bff`, brown `#a0855b`,
      blue-gray `#3f4d71`; page `#ffffff`
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Bezel — Button Showcase" (reference `<title>` "Button #10" is a
      generic artifact — use the app's own title per repo convention)
- [ ] Buttons: square 0px radius (NOT 4px — last declaration wins), 14px
      bold/8px-25px base, sm 10px/5px-15px, lg 16px/15px-30px, block =
      full width; NO text-transform: uppercase (labels title-case); ALL
      text black `#000` in every state; no shadow anywhere; `.3s all
    ease` transitions
- [ ] Signature bezel frame: `::before` white panel inset 3px with 1px
      colored border (z-index −1), `::after` 1px colored border at the
      button edge (z-index −2); on hover/focus `::after` background fills
      with the button color (solid bezel band); NO skew (that's Slant's
      signature), NO white-wash `:before` (that's Swell's), NO inner
      `<span>` wrapper (labels are direct text nodes)
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 10"
      row, line 671 — Bootstrap Buttons category; single row, no dups)
