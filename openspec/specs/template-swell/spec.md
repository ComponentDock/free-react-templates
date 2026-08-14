# Template: Swell (Button / UI Kit Showcase)

## Purpose

Swell is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 04" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-04/), built under a
DIFFERENT name (**Swell** — evoking the page's signature hover effect where a
translucent white wash "swells" up from the bottom edge of the button,
covering the fill, with a soft drop shadow and uppercase labels; per the
monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-full-screen-section Bootstrap 4 UI-kit
page. The section is headed **"#04 — Bootstrap 4 Buttons"** (`h2`, 20px,
Roboto, left-aligned inside a centered 10/12 column) and contains the same
four blocks as its sibling "Bootstrap Buttons 03" (Float): (1) a size row —
three solid blue "Button" buttons (`Large` / `Medium` / `Small`, captions
above, `btn-lg` / base / `btn-sm`), (2) a centered **"Button Colors"**
caption, (3) a row of **18** color buttons (`Primary` `Secondary` `Success`
`Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink` `Deep Orange`
`Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`), and (4) a
centered **"Full width button"** caption + one `btn-block` "Button". Unlike
its 03 sibling there is only ONE section (no Solid/Outline split) and the
buttons are plain `<button class="btn ...">Button</button>` elements (no
`.bg-float`/`.text` inner spans). Every button carries the template's
signature internals: a `.btn:before` pseudo-element — an absolute
`rgba(255,255,255,.2)` white overlay pinned to `bottom:0; left:0;
width:100%` whose `height` animates `0% → 100%` on hover over `.2s all
ease-in-out`, so a white wash rises from the button's bottom edge (the
"swell"). Buttons are **uppercase** (`text-transform: uppercase`), have a
`4px` border radius (the LAST `border-radius` declaration in `style.css`
wins — the intermediate `0px` is dead), a soft drop shadow
(`0 2px 5px -1px rgba(0,0,0,.2)` removed on `:active`/`:focus`), `12px`
font, `8px 25px` padding, no border, and `letter-spacing: .03rem`. There is
NO navbar, NO hero, NO images, and NO footer in the original. Swell
recreates the structure section-for-section with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 04" is FORBIDDEN
> as the app name. **Swell** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-04/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath — same pattern as the sibling "Bootstrap Buttons
> 01" (Palette), "02" (Toggle) and "03" (Float) preps). The page `<title>`
> is "Buttons #4", and the visible `h2` heading renders the full
> "#04 — Bootstrap 4 Buttons" (em dash `&mdash;`). Fidelity mandate =
> render the heading exactly as the reference renders it.

> SINGLE-SECTION QUIRK: unlike the 03 sibling (two `100vh` sections:
> Solid + Outline), this template is ONE `div.container.content` section
> (`height: 100vh`, content vertically centered via
> `row align-items-center justify-content-center`). The color row holds 18
> SOLID buttons only — there are no outline variants on this page.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 04". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 665). Free UI-kit button-component
  template. The `bootstrap-buttons-04` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-04/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/` (HTTP 200,
  18.2KB HTML, `<title>Buttons #4</title>`). Stylesheets:
  `css/style.css` (4.7KB — ftco custom button/theme rules, THE token source),
  `css/bootstrap.min.css` (Bootstrap 4 — rest-state colors + `.btn-block`),
  `fonts/icomoon/style.css` (unused glyph font on this page). JS: jQuery
  3.3.1 + popper + `bootstrap.min.js` (bundle) + `js/main.js` — none of it
  drives this page (pure static showcase; hover is CSS-only). Structure,
  copy, and tokens below are from the live DOM + `style.css`. Screenshot
  (`bootstrap-buttons-04.jpg`, 1200×972, browser-verified 2026-08-14)
  confirms the aesthetic: white page; dark "#04 — Bootstrap 4 Buttons"
  heading top-left; three blue size buttons (Large/Medium/Small captions,
  uppercase "BUTTON" labels); "Button Colors" caption; 18 colored solid
  buttons wrapping to ~3 rows (all uppercase labels, `4px` rounded corners,
  subtle drop shadows); "Full width button" caption + wide blue block
  button. The screenshot shows the whole page (single 100vh screen).
- **Visual design (screenshot + live DOM):** extremely clean, flat, white
  (`#fff`) page. One full-viewport section:
  `div.container.content` → `div.row.align-items-center.content
justify-content-center` → `div.col-md-10.text-left` (10/12 column,
  left-aligned text, vertically centered). Section heading `h2.mb-5`
  (20px, Roboto, dark) reads **"#04 — Bootstrap 4 Buttons"**. Block
  captions are Bootstrap `<small>` in centered `div.text-center` (e.g.
  "Button Colors", "Full width button"); the size captions
  ("Large"/"Medium"/"Small") sit centered above their buttons. Spacing:
  `mb-5` (3rem) under the heading and the color row, `mb-3 mr-3` (1rem) on
  individual size/color items, `mb-3` on the caption rows. Buttons are
  `4px`-radius (`border-radius: 4px` — final declaration wins; the
  intermediate `0px` in the block is dead), borderless, uppercase, `12px`
  font / `8px 25px` padding, with `0 2px 5px -1px rgba(0,0,0,.2)` shadow.
  No navbar, no hero, no images, no footer.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `h2.mb-5` **"#04 — Bootstrap 4 Buttons"** (20px Roboto,
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
  5. **Full width** — centered `<small>` **"Full width button"** + one
     `btn btn-primary btn-block` "Button" (display:block, width:100%).
- **Button anatomy (all buttons):** plain
  `<button class="btn ...">Button</button>` — NO inner spans (unlike the 03
  sibling's `.bg-float`/`.text`). The hover wash lives on a `:before`
  pseudo-element.
- **Swell hover animation (signature):** `.btn:before` — `position:
absolute; content: ""; background: rgba(255,255,255,0.2); height: 0%;
bottom: 0; left: 0; width: 100%;` with `transition: .2s all ease-in-out`.
  `.btn:hover:before { height: 100%; }` — the translucent white wash rises
  from the bottom edge of the button to cover the whole fill (the
  "swell"). Standard-color buttons ALSO keep their background on hover
  (`background-color: <color> !important` — e.g. `.btn-primary:hover,
.btn-primary:focus { background-color: #007bff !important; }`); custom
  colors keep white text. `:active`/`:focus` drop the box shadow
  (`box-shadow: none`).
- **JS behaviors (original):** none — the page is a static showcase (the
  Bootstrap bundle + main.js are inert here; no dropdowns, no toggles).
  Hover is pure CSS. Recreate with CSS transitions; add repo-convention
  `focus-visible` rings (the reference relies on Bootstrap's default focus
  outline only).
- **Design tokens (from `style.css` + bootstrap.min.css):**

  | Token               | Value                                                                                                                                                                                                                        | Usage                                                                                                                    |
  | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
  | Page background     | `#ffffff`                                                                                                                                                                                                                    | `body`                                                                                                                   |
  | Section height      | `100vh`                                                                                                                                                                                                                      | `.content` (ONE section, vertically centered)                                                                            |
  | Column width        | 10/12 centered, `text-left`                                                                                                                                                                                                  | `.col-md-10` inside `row align-items-center justify-content-center`                                                      |
  | Section heading     | 20px, Roboto, dark text                                                                                                                                                                                                      | `h2` (custom `font-size: 20px`)                                                                                          |
  | Captions            | Bootstrap `<small>` (80% = 12.8px)                                                                                                                                                                                           | centered `div.text-center` captions                                                                                      |
  | Font                | Roboto                                                                                                                                                                                                                       | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...` |
  | Button base         | 12px, `8px 25px`, `border-radius: 4px` (last declaration wins), `border: none`, `letter-spacing: .03rem`, `position: relative`, `overflow: hidden`, `text-transform: uppercase`, `box-shadow: 0 2px 5px -1px rgba(0,0,0,.2)` | `.btn`                                                                                                                   |
  | Button shadow       | `0 2px 5px -1px rgba(0,0,0,0.2)`; removed on `:active`/`:focus` (`box-shadow: none`)                                                                                                                                         | `.btn` / `.btn:active, .btn:focus`                                                                                       |
  | Small button (`sm`) | 11px, `5px 15px`                                                                                                                                                                                                             | `.btn-sm` override                                                                                                       |
  | Large button (`lg`) | 16px, `15px 30px`                                                                                                                                                                                                            | `.btn-lg` override                                                                                                       |
  | Block button        | `display:block; width:100%`                                                                                                                                                                                                  | `.btn-block` (Bootstrap)                                                                                                 |
  | Swell hover         | `:before` white wash `rgba(255,255,255,.2)` pinned bottom-left, `height: 0% → 100%`, `.2s all ease-in-out`                                                                                                                   | `.btn:before` / `.btn:hover:before`                                                                                      |
  | **Colors (rest)**   | bg / text (text = Bootstrap default unless noted)                                                                                                                                                                            | `btn-{color}` solid                                                                                                      |
  | Primary             | `#007bff` / `#ffffff`                                                                                                                                                                                                        | blue (Bootstrap)                                                                                                         |
  | Secondary           | `#6c757d` / `#ffffff`                                                                                                                                                                                                        | grey (Bootstrap)                                                                                                         |
  | Success             | `#28a745` / `#ffffff`                                                                                                                                                                                                        | green (Bootstrap)                                                                                                        |
  | Info                | `#17a2b8` / `#ffffff`                                                                                                                                                                                                        | teal/cyan (Bootstrap)                                                                                                    |
  | Warning             | `#ffc107` / `#212529`                                                                                                                                                                                                        | amber, DARK text (Bootstrap default)                                                                                     |
  | Danger              | `#dc3545` / `#ffffff`                                                                                                                                                                                                        | red (Bootstrap)                                                                                                          |
  | Light               | `#f8f9fa` / `#212529` (rest); hover bg `#dae0e5` (style.css `!important`)                                                                                                                                                    | light grey (Bootstrap rest color; custom hover), DARK text                                                               |
  | Orange              | `#fd7e14` / `#ffffff`                                                                                                                                                                                                        | custom (style.css)                                                                                                       |
  | Indigo              | `#6610f2` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Pink                | `#e83e8c` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Deep Orange         | `#ffac8e` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Aqua                | `#3fc5f0` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Dark                | `#393e46` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Black               | `#000000` / `#ffffff`                                                                                                                                                                                                        | custom (`#000`)                                                                                                          |
  | Purple              | `#6f42c1` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Blue                | `#007bff` / `#ffffff`                                                                                                                                                                                                        | custom (same hex as Primary)                                                                                             |
  | Brown               | `#a0855b` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |
  | Blue Gray           | `#3f4d71` / `#ffffff`                                                                                                                                                                                                        | custom                                                                                                                   |

- **Fonts:** **Roboto** is the theme family (`body` and all headings).
  Load Roboto (weights 300–700) via Google Fonts `<link>` in `index.html`;
  no icon font needed (no icons on this page — implement with plain text
  labels only, `lucide-react` not required here).

## Requirements

### Requirement: Page structure

The system SHALL render the Swell page as one full-viewport section on a
white background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Swell page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single full-viewport section SHALL be headed **"#04 — Bootstrap
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

The system SHALL render the reference heading exactly.

#### Scenario: Exact heading text

- **GIVEN** the Swell page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"#04 — Bootstrap 4 Buttons"** (em dash
  between "#04" and "Bootstrap", no Solid/Outline suffix — this template
  has a single section, unlike its 03 sibling)
- **AND** the heading SHALL be 20px Roboto, dark text, left-aligned

### Requirement: Size row

The system SHALL render the size row with three solid blue buttons in the
reference order and sizes.

#### Scenario: Size variants

- **GIVEN** the Swell section is displayed
- **WHEN** the user views the size row
- **THEN** three solid blue (`#007bff`) buttons labelled "Button" SHALL
  render, with centered `Large` / `Medium` / `Small` captions above them
- **AND** the Large button SHALL use the large size (16px font, `15px
30px` padding), the Medium the base size (12px, `8px 25px`), and the
  Small the small size (11px, `5px 15px`)
- **AND** every button label SHALL render uppercase ("BUTTON") per the
  reference's `text-transform: uppercase`

### Requirement: Color row

The system SHALL render the "Button Colors" caption and all 18 color
buttons with their palette backgrounds and text colors.

#### Scenario: Color palette

- **GIVEN** the Swell section is displayed
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
- **AND** all buttons SHALL be uppercase, `4px` radius, borderless, with a
  `0 2px 5px -1px rgba(0,0,0,.2)` drop shadow
- **AND** there SHALL be NO outline variants on this page (single solid
  section, unlike the 03 sibling)

#### Scenario: Full-width button

- **GIVEN** the Swell section is displayed
- **WHEN** the user views the bottom of the section
- **THEN** a centered "Full width button" caption SHALL render
- **AND** a solid blue `#007bff` button labelled "Button" SHALL span the
  full column width (`display:block; width:100%`)

### Requirement: Swell hover animation

The system SHALL reproduce the signature "swell" hover: a translucent white
wash rises from the bottom edge of the button over the fill.

#### Scenario: Hover wash

- **GIVEN** any button is displayed
- **WHEN** the user hovers it
- **THEN** a `rgba(255,255,255,.2)` overlay SHALL rise from the button's
  bottom edge (`bottom: 0; left: 0; width: 100%`) from `height: 0%` to
  `height: 100%` over `.2s` with `ease-in-out`
- **AND** the button's background color SHALL stay the palette color
  (standard colors: `background-color: <color> !important` on hover; custom
  colors: white text preserved)
- **AND** on mouse leave the overlay SHALL shrink back to `height: 0%`

#### Scenario: Active and focus shadow

- **GIVEN** a button is pressed or keyboard-focused
- **WHEN** the user activates it
- **THEN** the button's drop shadow SHALL be removed (`box-shadow: none`)
- **AND** the button SHALL show a visible focus indication (repo convention
  `focus-visible` ring; the reference's Bootstrap default focus outline is
  replaced per repo a11y conventions)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Swell page is rendered on a viewport ≤768px
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

- **GIVEN** the Swell page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-swell`
- [ ] `scripts/verify-app.sh swell` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("#04 —
      Bootstrap 4 Buttons": sizes → Button Colors → 18 color buttons →
      Full width button) → minimal Component Dock footer; white page, no
      navbar/hero/images, no outline variants
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#007bff`, secondary `#6c757d`, success `#28a745`, info `#17a2b8`,
      warning `#ffc107`, danger `#dc3545`, light `#f8f9fa` (hover `#dae0e5`),
      orange `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep-orange
      `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black `#000000`, purple
      `#6f42c1`, blue `#007bff`, brown `#a0855b`, blue-gray `#3f4d71`;
      dark text `#212529`; page `#ffffff`
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title "Swell
      — Button Showcase"
- [ ] Buttons: 4px radius, 12px/8px-25px base, sm 11px/5px-15px, lg
      16px/15px-30px, block = full width; uppercase labels; white text
      except Warning and Light (dark `#212529`); shadow
      `0 2px 5px -1px rgba(0,0,0,.2)` (removed on active/focus); swell
      hover = white wash `rgba(255,255,255,.2)` 0%→100% height bottom-up,
      `.2s ease-in-out`; `focus-visible` rings
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 04"
      row, line 665 — Bootstrap Buttons category)
