# Template: Float (Button / UI Kit Showcase)

## Purpose

Float is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 03" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-03/), built under a
DIFFERENT name (**Float** — evoking the page's signature hover effect where
the button fill and label "float" 4px up-left out from under the button's
2px border; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a flat, white, two-full-screen-section Bootstrap 4 UI-kit
page. Section 1 is headed **"#03 — Bootstrap 4 Buttons (Solid)"** and
Section 2 **"#03 — Bootstrap 4 Buttons (Outline)"** (both `h2`, 20px,
Roboto, left-aligned inside a centered 10/12 column). Each section has the
same four blocks: (1) a size row — three solid blue "Button" buttons
(`Large` / `Medium` / `Small`, captions above, `btn-lg` / base / `btn-sm`),
(2) a centered **"Button Colors"** caption, (3) a row of **18** color
buttons (`Primary` `Secondary` `Success` `Info` `Warning` `Danger` `Light`
`Orange` `Indigo` `Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple`
`Blue` `Brown` `Blue Gray`), and (4) a centered **"Full width button"**
caption + one `btn-block` "Button". The Solid section uses filled buttons;
the Outline section uses white-filled buttons with a 2px colored border and
colored text. Every button carries the template's signature internals: a
`.bg-float` fill span (z-index 1) and a `.text` label span (z-index 2);
on hover both shift to `top:-4px; left:-4px` over `.1s ease`, so the fill
slides out from under the 2px colored `:before` border and the button
appears to float. There is NO navbar, NO hero, NO images, and NO footer in
the original. Float recreates the structure section-for-section with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 03" is FORBIDDEN
> as the app name. **Float** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-03/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath — same pattern as the sibling "Bootstrap Buttons 01"
> (Palette) and "Bootstrap Buttons 02" (Toggle) preps). The page `<title>`
> is "Button #3", but the visible `h2` headings render the full
> "#03 — Bootstrap 4 Buttons (Solid)" / "(Outline)" (em dash `&mdash;`).
> Fidelity mandate = render the headings exactly as the reference renders
> them.

> STACKING QUIRK: each section is `height: 100vh` (`.content` class), so
> the page is two full-viewport blocks stacked vertically, content
> vertically centered per section (`row align-items-center
justify-content-center`). On small screens the reference's fixed 100vh
> would clip — relax per repo conventions (see Responsive requirement).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 03". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 664). Free UI-kit button-component
  template. The `bootstrap-buttons-03` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-03/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-03/` (HTTP 200,
  23.5KB HTML, `<title>Button #3</title>`). Stylesheets:
  `css/style.css` (11KB — ftco custom button/theme rules, THE token source),
  `css/bootstrap.min.css` (Bootstrap 4), `fonts/icomoon/style.css`
  (unused glyph font on this page). JS: jQuery 3.3.1 + popper +
  `bootstrap.min.js` (bundle) + `js/main.js` — none of it drives this page
  (pure static showcase; hover is CSS-only). Structure, copy, and tokens
  below are from the live DOM + `style.css`. Screenshot
  (`bootstrap-buttons-03.jpg`, 1200×972, browser-verified 2026-08-14)
  confirms the aesthetic: white page; dark "#03 — Bootstrap 4 Buttons
  (Solid)" heading top-left; three blue size buttons (Large/Medium/Small
  captions); "Button Colors" caption; 18 colored solid buttons wrapping to
  ~3 rows; "Full width button" caption + wide blue block button. The
  screenshot only shows the Solid section (the first 100vh screen); the
  Outline section is confirmed from the live DOM.
- **Visual design (screenshot + live DOM):** extremely clean, flat, white
  (`#fff`) page. Two full-viewport sections stacked; each is
  `div.container.content` → `div.row.align-items-center.content
justify-content-center` → `div.col-md-10.text-left` (10/12 column,
  left-aligned text, vertically centered). Section heading `h2.mb-5`
  (20px, Roboto, dark) reads "#03 — Bootstrap 4 Buttons (Solid)" /
  "#03 — Bootstrap 4 Buttons (Outline)". Block captions are Bootstrap
  `<small>` in centered `div.text-center` (e.g. "Button Colors", "Full
  width button"); the size captions ("Large"/"Medium"/"Small") sit centered
  above their buttons. Spacing: `mb-5` (3rem) under the heading and the
  color row, `mb-3 mr-3` (1rem) on individual size/color items, `mb-3` on
  the caption rows. Buttons are square (`border-radius: 0`), borderless,
  13px/8px-25px (base), white text on the palette fill. No navbar, no hero,
  no images, no footer.
- **Section order (1:1 from live DOM) — Section 1 "Solid":**
  1. **Heading** — `h2.mb-5` **"#03 — Bootstrap 4 Buttons (Solid)"**
     (20px Roboto, left-aligned, `text-left` column).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three
     `div.mb-3.mr-3` items, each a centered `<small>` caption (`Large` /
     `Medium` / `Small`) above a solid blue button labelled "Button":
     `btn-primary btn-lg` / `btn-primary` / `btn-primary btn-sm`.
  3. **Button Colors caption** — centered `<small>` **"Button Colors"**.
  4. **Color row** — `div.mb-5` with **18** solid buttons labelled
     `Primary` `Secondary` `Success` `Info` `Warning` `Danger` `Light`
     `Orange` `Indigo` `Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple`
     `Blue` `Brown` `Blue Gray`, each `btn mb-3 mr-3 btn-{color}`.
  5. **Full width** — centered `<small>` **"Full width button"** + one
     `btn btn-primary btn-block` "Button" (display:block, width:100%).
- **Section order — Section 2 "Outline":** identical structure; every
  button additionally carries `btn-outline` (`btn btn-outline btn-primary
btn-lg` etc., `btn-outline btn-primary btn-block` for the full-width).
- **Button anatomy (all buttons, both sections):**
  `<button class="btn ..."><span class="bg-float"></span><span class="text">Button</span></button>`
  — the fill span `.bg-float` (absolute, inset 0, `background: <color>`,
  z-index 1) and the label span `.text` (relative, z-index 2). A `:before`
  pseudo-element (absolute, inset 0, `2px solid <color>`) draws the 2px
  border. Solid = fill in the palette color (border same color → invisible
  at rest). Outline = fill `#fff !important` + `2px solid <color>` border +
  text in the palette color.
- **Hover "float" animation (signature):** `.btn:hover > .bg-float,
.btn:hover > .text { top: -4px; left: -4px; }` with `.1s all ease`
  transitions — fill AND label shift 4px up-left; the fill slides out from
  under the static 2px border, so the button appears to float off its
  outline. Same effect on `.btn-outline:hover`.
- **JS behaviors (original):** none — the page is a static showcase (the
  Bootstrap bundle + main.js are inert here; no dropdowns, no toggles).
  Hover is pure CSS. Recreate with CSS transitions; add repo-convention
  `focus-visible` rings (the reference relies on Bootstrap's default focus
  outline only).
- **Design tokens (from `style.css` + bootstrap.min.css):**

  | Token                | Value                                                                                                                          | Usage                                                                                                                    |
  | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
  | Page background      | `#ffffff`                                                                                                                      | `body`                                                                                                                   |
  | Section height       | `100vh`                                                                                                                        | `.content` (one per section, stacked)                                                                                    |
  | Column width         | 10/12 centered, `text-left`                                                                                                    | `.col-md-10` inside `row align-items-center justify-content-center`                                                      |
  | Section heading      | 20px, Roboto, dark text                                                                                                        | `h2` (custom `font-size: 20px`)                                                                                          |
  | Captions             | Bootstrap `<small>` (80% = 12.8px)                                                                                             | centered `div.text-center` captions                                                                                      |
  | Font                 | Roboto                                                                                                                         | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...` |
  | Button base          | 13px, `8px 25px`, `border-radius: 0`, no border, `letter-spacing: .01rem`, `position: relative`, `background: none !important` | `.btn`                                                                                                                   |
  | Button border        | `2px solid <color>`                                                                                                            | `.btn:before` absolute inset-0 pseudo-element                                                                            |
  | Small button (`sm`)  | 12px, `5px 15px`                                                                                                               | `.btn-sm` override                                                                                                       |
  | Large button (`lg`)  | 16px, `15px 30px`                                                                                                              | `.btn-lg` override                                                                                                       |
  | Block button         | `display:block; width:100%`                                                                                                    | `.btn-block` (Bootstrap)                                                                                                 |
  | Float hover          | fill+label shift `top:-4px; left:-4px`, `.1s all ease`                                                                         | `.btn:hover > .bg-float` + `.btn:hover > .text`                                                                          |
  | Fill span            | absolute inset-0, z-index 1                                                                                                    | `.bg-float` (solid: palette color; outline: `#fff` + 2px color border)                                                   |
  | Label span           | relative, z-index 2                                                                                                            | `.text`                                                                                                                  |
  | **Solid colors**     | bg / text                                                                                                                      | `btn-{color}` solid (text = white unless noted)                                                                          |
  | Primary              | `#007bff` / `#ffffff`                                                                                                          | blue                                                                                                                     |
  | Secondary            | `#6c757d` / `#ffffff`                                                                                                          | grey                                                                                                                     |
  | Success              | `#28a745` / `#ffffff`                                                                                                          | green                                                                                                                    |
  | Info                 | `#17a2b8` / `#ffffff`                                                                                                          | teal/cyan                                                                                                                |
  | Warning              | `#ffc107` / `#212529`                                                                                                          | amber, DARK text (Bootstrap default)                                                                                     |
  | Danger               | `#dc3545` / `#ffffff`                                                                                                          | red                                                                                                                      |
  | Light                | `#dae0e5` / `#212529`                                                                                                          | light grey (custom — NOT Bootstrap `#f8f9fa`), DARK text                                                                 |
  | Orange               | `#fd7e14` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Indigo               | `#6610f2` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Pink                 | `#e83e8c` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Deep Orange          | `#ffac8e` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Aqua                 | `#3fc5f0` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Dark                 | `#393e46` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Black                | `#000000` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Purple               | `#6f42c1` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Blue                 | `#007bff` / `#ffffff`                                                                                                          | (same hex as Primary)                                                                                                    |
  | Brown                | `#a0855b` / `#ffffff`                                                                                                          |                                                                                                                          |
  | Blue Gray            | `#3f4d71` / `#ffffff`                                                                                                          |                                                                                                                          |
  | **Outline variants** | fill `#fff`, `2px solid <color>` border, text `<color>`                                                                        | `btn-outline btn-{color}`; Light outline text = `#657a8e`                                                                |

- **Fonts:** **Roboto** is the theme family (`body` and all headings).
  Load Roboto (weights 300–700) via Google Fonts `<link>` in `index.html`;
  no icon font needed (no icons on this page — implement with plain text
  labels only, `lucide-react` not required here).

## Requirements

### Requirement: Page structure

The system SHALL render the Float page as two stacked full-viewport
sections on a white background, in order: the Solid section, then the
Outline section, then a minimal footer.

#### Scenario: Default render

- **GIVEN** the Float page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a first full-viewport section SHALL be headed **"#03 — Bootstrap
  4 Buttons (Solid)"** (em dash, 20px Roboto, left-aligned in a centered
  10/12 column)
- **AND** a second full-viewport section SHALL follow, headed **"#03 —
  Bootstrap 4 Buttons (Outline)"**
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Content column

- **GIVEN** a section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered 10/12-width column with
  left-aligned text and vertically centered rows
- **AND** each section SHALL contain, in order: heading, size row, "Button
  Colors" caption + color row, "Full width button" caption + block button

### Requirement: Solid section

The system SHALL render the Solid section with filled buttons in the
reference order.

#### Scenario: Size row

- **GIVEN** the Solid section is displayed
- **WHEN** the user views the size row
- **THEN** three solid blue (`#007bff`) buttons labelled "Button" SHALL
  render, with centered `Large` / `Medium` / `Small` captions above them
- **AND** the Large button SHALL use the large size (16px font, `15px
30px` padding), the Medium the base size (13px, `8px 25px`), and the
  Small the small size (12px, `5px 15px`)

#### Scenario: Color row

- **GIVEN** the Solid section is displayed
- **WHEN** the user views the color row
- **THEN** a centered "Button Colors" caption SHALL render
- **AND** 18 labelled solid buttons SHALL render: `Primary` `Secondary`
  `Success` `Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink`
  `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`
- **AND** each button SHALL use its palette background
  (`#007bff` `#6c757d` `#28a745` `#17a2b8` `#ffc107` `#dc3545` `#dae0e5`
  `#fd7e14` `#6610f2` `#e83e8c` `#ffac8e` `#3fc5f0` `#393e46` `#000000`
  `#6f42c1` `#007bff` `#a0855b` `#3f4d71`)
- **AND** button text SHALL be white, except Warning (`#ffc107`) and Light
  (`#dae0e5`) which SHALL use dark text `#212529`
- **AND** all buttons SHALL be square (`border-radius: 0`), borderless,
  with white text centered

#### Scenario: Full-width button

- **GIVEN** the Solid section is displayed
- **WHEN** the user views the bottom of the section
- **THEN** a centered "Full width button" caption SHALL render
- **AND** a solid blue `#007bff` button labelled "Button" SHALL span the
  full column width (`display:block; width:100%`)

### Requirement: Outline section

The system SHALL render the Outline section mirroring the Solid section,
with outline-styled buttons.

#### Scenario: Outline variants

- **GIVEN** the Outline section is displayed
- **WHEN** the user views its rows
- **THEN** every button SHALL be an outline variant: white (`#fff`) fill,
  `2px solid <palette color>` border, and text in the palette color
- **AND** the size row SHALL contain Large/Medium/Small outline blue
  buttons with the same captions and sizes as the Solid section
- **AND** the color row SHALL contain the same 18 labels as outline
  variants with their palette-colored borders and text
- **AND** the Light outline button SHALL use text `#657a8e`
- **AND** the full-width button SHALL be an outline blue block button
  (`btn-block`, width 100%)

### Requirement: Floating hover animation

The system SHALL reproduce the signature "float" hover: the button fill and
label shift 4px up-left while the 2px border stays put.

#### Scenario: Hover shift

- **GIVEN** any button (solid or outline) is displayed
- **WHEN** the user hovers it
- **THEN** the button's fill and label SHALL move to `top:-4px;
left:-4px` with a `.1s` ease transition
- **AND** the button's 2px border SHALL remain in its original position,
  so the fill slides out from under it (the "floating" effect)
- **AND** on mouse leave the fill and label SHALL return to `0, 0`

#### Scenario: Focus

- **GIVEN** a button is keyboard-focused
- **WHEN** the user tabs to it
- **THEN** the button SHALL show a visible focus indication (repo
  convention `focus-visible` ring; the reference's default Bootstrap focus
  outline is replaced per repo a11y conventions)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Float page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the button rows SHALL wrap onto multiple lines without
  horizontal overflow
- **AND** the fixed `100vh` section height SHALL be relaxed (auto
  min-height or similar) so neither section's content is clipped or forces
  an empty scroll gap (reference uses `height: 100vh`, which clips on
  small screens)
- **AND** the headings and captions SHALL remain left/center aligned as in
  the reference and fully readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Float page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-float`
- [ ] `scripts/verify-app.sh float` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): Solid section ("#03 —
      Bootstrap 4 Buttons (Solid)": sizes → Button Colors → 18 color
      buttons → Full width button) → Outline section (same, all `btn-
    outline` variants) → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#007bff`, secondary `#6c757d`, success `#28a745`, info `#17a2b8`,
      warning `#ffc107`, danger `#dc3545`, light `#dae0e5`, orange
      `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep-orange `#ffac8e`,
      aqua `#3fc5f0`, dark `#393e46`, black `#000000`, purple `#6f42c1`,
      blue `#007bff`, brown `#a0855b`, blue-gray `#3f4d71`; outline Light
      text `#657a8e`; heading `#212529`; page `#ffffff`
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title "Float
      — Button Showcase"
- [ ] Buttons: square (radius 0), 13px/8px-25px base, sm 12px/5px-15px,
      lg 16px/15px-30px, block = full width; white text except Warning and
      Light (dark `#212529`); outline = white fill + 2px colored border +
      colored text; float hover shift `-4px` with `.1s` ease on fill+label;
      `focus-visible` rings
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 03"
      row, line 664 — Bootstrap Buttons category)
