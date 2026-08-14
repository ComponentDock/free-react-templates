# Template: Bevel (Button / UI Kit Showcase)

## Purpose

Bevel is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 08" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-08/), built under a
DIFFERENT name (**Bevel** — evoking the sharp, square-cut edge of the
reference's 0-radius buttons; per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a 20px
heading "#08 — Bootstrap 4 Buttons" (left-aligned, top of a `col-md-10`
content column), then three showcase blocks stacked vertically — "Large /
Medium / Small" (three blue "Button" buttons, each with a small size label
above it), "Button Colors" (a grid of **18** solid buttons: Bootstrap semantic
colors + 11 custom extended colors), and "Full width button" (one wide
`btn-block` blue "Button"). There is NO navbar, NO footer, NO images, NO
forms, and NO interactive components in the original — the whole page is the
button showcase itself. Unlike its sibling "Bootstrap Buttons 07" (Spectrum),
the 08 variant uses **square buttons** (`border-radius: 0`), **uppercase bold
12px labels**, and a **white left-to-right sweep overlay** on hover that flips
the button text to black (no lift, no hard 3D shadow). Bevel recreates the
structure section-for-section with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 08" is FORBIDDEN
> as the app name. **Bevel** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-08/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-08/` (HTTP 200 —
> same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–07, discovered
> by scraping the ColorLib template page, which links to the `/bb/` path).
> The page `<title>` is "Button #8". Fidelity mandate = render the heading
> exactly as the reference renders it: **"#08 — Bootstrap 4 Buttons"**.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 08". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 669). Free UI-kit button-component
  template. The `bootstrap-buttons-08` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-08/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-08/` (HTTP 200,
  18.5KB HTML, `<title>Button #8</title>`, heading
  `#08 &mdash; Bootstrap 4 Buttons`). Stylesheets: `css/bootstrap.min.css`
  (160KB — Bootstrap 4 base, the semantic color + border source),
  `css/style.css` (4.2KB — custom square-button theme + extended colors +
  hover sweep; the token source), `fonts/icomoon/style.css` (glyph font,
  loaded but UNUSED — no icons on the page). JS: jQuery + Popper + Bootstrap
  bundle + `js/main.js` (vestigial — the page has no interactive components;
  do NOT replicate the JS). Structure, copy, and tokens below are from the
  live DOM + both stylesheets + live computed styles (browser-verified:
  `border-radius: 0px`, `text-transform: uppercase`, `font-weight: 700` on a
  rendered button). Screenshot (`bootstrap-buttons-08.jpg`, 1200×972,
  browser-verified 2026-08-14) confirms the aesthetic: white page, heading
  top-left, three blue size buttons with small labels, an 18-button color
  grid wrapping in 3 rows (7 + 8 + 3 at 1200px), one full-width blue button
  at the bottom; no navbar/footer/images. NOTE: the vision model described
  the corners as "rounded", but the LIVE computed style is
  `border-radius: 0px` — the buttons are SQUARE; trust the computed style.
- **Visual design (screenshot + live DOM):** clean, flat, single-column kit
  page on a white (`#fff`) background. One content container
  (`div.container.content`, padding `7rem 0` = 112px) with a centered row
  and a `col-md-10` left-aligned column holding the heading and all three
  showcase blocks. The heading `h2.mb-5` is 20px text colored `#212529`
  (Bootstrap default text color) with `margin-bottom: 3rem`. Size/block
  labels are `<small>` elements (12.8px = 80% of 16px, `#212529`, weight 400) centered above their buttons. Buttons are square (`border-radius:
0`), bold (`font-weight: 700`), 12px text, `8px 25px` padding, UPPERCASE
  via `text-transform`, `letter-spacing: .05rem`, with a `1px solid` border
  matching each button's background color (Bootstrap default), and the label
  wrapped in an inner `<span>` (`position: relative; z-index: 5`). Hover
  behavior (from `style.css`): a white overlay pseudo-element
  (`.btn:before`, absolute, inset `1px`, `background: #fff`, `width: 0`)
  **sweeps left-to-right** to `width: calc(100% - 2px)` on hover, while the
  span text flips to black (`color: #000 !important`); the background also
  darkens to each color's hover shade (e.g. Primary `#007bff` → `#006adb`).
  There is NO `top: -1px` lift and NO hard box-shadow (unlike BB 07); focus
  shadows are removed (`.btn:hover, .btn:active, .btn:focus { box-shadow:
none }`). Typography: **Roboto** (body + headings). No navbar, no hero, no
  images, no footer.
- **Section order (1:1 from live DOM):**
  1. **Title** — `h2.mb-5` **"#08 — Bootstrap 4 Buttons"** (20px `#212529`,
     left-aligned, `margin-bottom 3rem`).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three
     `div.mb-3.mr-3` groups side by side, each a centered `<small>` label
     above one blue button: `Large` → `btn btn-primary btn-lg` "Button",
     `Medium` → `btn btn-primary` "Button", `Small` → `btn btn-primary
btn-sm` "Button". Every button's label is wrapped in `<span>`.
  3. **Button Colors** — label row (`div.text-center > small` "Button
     Colors"), then a `div.mb-5` with **18** solid buttons, each
     `btn mb-3 mr-3 btn-<color>` with `<span>` label: `Primary`,
     `Secondary`, `Success`, `Info`, `Warning`, `Danger`, `Light`, `Orange`,
     `Indigo`, `Pink`, `Deep Orange`, `Aqua`, `Dark`, `Black`, `Purple`,
     `Blue`, `Brown`, `Blue Gray`.
  4. **Full width button** — `div.mb-3.mr-3` with a centered `<small>` label
     "Full width button" above one `btn btn-primary btn-block` "Button"
     (display block, width 100%).
  5. **Footer** — the original has NO footer; per monorepo convention add
     a minimal attribution footer linking
     `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** none — the page is fully static (the loaded
  Bootstrap bundle powers nothing on this page). Recreate as static React;
  hover effects via CSS only (Tailwind `before:`/`group-hover:` utilities or
  an overlay span — no JS).
- **Design tokens (from `bootstrap.min.css` + `style.css` + live computed
  styles):**

  | Token               | Value                         | Usage                                             |
  | ------------------- | ----------------------------- | ------------------------------------------------- |
  | Page background     | `#ffffff`                     | `body` (Bootstrap default)                        |
  | Content padding     | `7rem 0` (112px)              | `.content` (container block)                      |
  | Heading text        | `#212529`                     | `h2` — 20px, "#08 — Bootstrap 4 Buttons", mb 3rem |
  | Label text          | `#212529`, 12.8px, w400       | `<small>` labels above button rows (80% of base)  |
  | Font                | Roboto                        | body + headings (`"Roboto", -apple-system, ...`)  |
  | Button radius       | `0px` (SQUARE)                | `.btn` custom (overrides Bootstrap 4px; verified) |
  | Button base         | 12px bold, padding `8px 25px` | `.btn` — `text-transform: uppercase`,             |
  |                     | `letter-spacing: .05rem`,     | `border: 1px solid <bg color>`, `position:        |
  |                     | transition `.3s all ease`     | relative`; label wrapped in `<span>` (z-index 5)  |
  | Small button (`sm`) | 10px, padding `5px 15px`      | `.btn.btn-sm`                                     |
  | Large button (`lg`) | 16px, padding `15px 30px`     | `.btn.btn-lg`                                     |
  | Block button        | `display:block; width:100%`   | `.btn-block` (Bootstrap)                          |
  | Hover sweep         | `#fff` overlay, `width 0 →    | `.btn:before` — absolute, inset 1px, sweeps       |
  |                     | calc(100% - 2px)`             | left→right on hover (`.3s all ease`)              |
  | Hover text          | `#000 !important`             | `.btn:hover span` — flips black under the sweep   |
  | Hover focus         | `box-shadow: none`            | `.btn:hover/:active/:focus` — no focus shadows    |
  | Primary             | `#007bff` (hover `#006adb`)   | `btn-primary` / `btn-blue`                        |
  | Secondary           | `#6c757d` (hover `#5b636a`)   | `btn-secondary`                                   |
  | Success             | `#28a745` (hover `#218a39`)   | `btn-success`                                     |
  | Info                | `#17a2b8` (hover `#138698`)   | `btn-info`                                        |
  | Warning             | `#ffc107` (hover `#e2aa00`)   | `btn-warning`, text `#212529` (not white)         |
  | Danger              | `#dc3545` (hover `#ca2333`)   | `btn-danger`                                      |
  | Light               | `#f8f9fa` (hover `#f8f9fa`)   | `btn-light`, text `#212529` (no hover override)   |
  | Orange              | `#fd7e14` (hover `#eb6c02`)   | `btn-orange`                                      |
  | Indigo              | `#6610f2` (hover `#570bd3`)   | `btn-indigo`                                      |
  | Pink                | `#e83e8c` (hover `#e41e79`)   | `btn-pink`                                        |
  | Deep Orange         | `#ffac8e` (hover `#ff926a`)   | `btn-deep-orange`                                 |
  | Aqua                | `#3fc5f0` (hover `#1ebbed`)   | `btn-aqua`                                        |
  | Dark                | `#393e46` (hover `#292d32`)   | `btn-dark`                                        |
  | Black               | `#000` (hover `#000`)         | `btn-black` (hover bg stays black)                |
  | Purple              | `#6f42c1` (hover `#5f37a8`)   | `btn-purple`                                      |
  | Blue                | `#007bff` (hover `#006adb`)   | `btn-blue` (same values as Primary)               |
  | Brown               | `#a0855b` (hover `#89724e`)   | `btn-brown`                                       |
  | Blue Gray           | `#3f4d71` (hover `#323d5a`)   | `btn-blue-gray`                                   |
  | Solid button text   | `#ffffff`                     | all solid buttons EXCEPT Warning and Light,       |
  |                     |                               | which use Bootstrap's dark `#212529`              |

- **Fonts:** **Roboto** is the theme family (body + headings). Load Roboto
  via Google Fonts `<link>` in `index.html`. No icon font needed — the page
  has no icons (the original's `icomoon` font is loaded but unused).

## Requirements

### Requirement: Page structure

The system SHALL render the Bevel page as a single-column, centered document
on a white background, in this order: the "#08 — Bootstrap 4 Buttons" title,
the three showcase blocks (Sizes, Button Colors, Full width button), and a
minimal footer.

#### Scenario: Default render

- **GIVEN** the Bevel page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "#08 — Bootstrap 4 Buttons"
  (20px, `#212529`, in a centered `col-md-10`-style content column)
- **AND** the page SHALL contain, in order, the blocks: Sizes, Button
  Colors, Full width button
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block labels

- **GIVEN** the showcase blocks are displayed
- **WHEN** the user inspects a block
- **THEN** the Sizes block SHALL be labelled by the three per-button
  `<small>` labels `Large`, `Medium`, and `Small` (centered above each
  button)
- **AND** the color grid block SHALL be labelled by a centered `Button
Colors` `<small>` label
- **AND** the last block SHALL be labelled by a centered `Full width
button` `<small>` label

### Requirement: Button size variants

The system SHALL render the Sizes block with three blue "Button" buttons at
small, medium, and large sizes, each labelled above.

#### Scenario: Size row

- **GIVEN** the Sizes block is displayed
- **WHEN** the user views its three buttons
- **THEN** a `Large`-labelled button SHALL render with the large sizing
  (16px text, `15px 30px` padding)
- **AND** a `Medium`-labelled button SHALL render with the base sizing
  (12px text, `8px 25px` padding)
- **AND** a `Small`-labelled button SHALL render with the small sizing
  (10px text, `5px 15px` padding)
- **AND** all three SHALL read "Button" and use the primary blue `#007bff`
  with white text

### Requirement: Button color palette

The system SHALL render the Button Colors block with all 18 solid color
buttons from the reference, in order, with matching backgrounds and labels.

#### Scenario: Color grid

- **GIVEN** the Button Colors block is displayed
- **WHEN** the user views the grid
- **THEN** the grid SHALL contain, in order, the buttons `Primary`,
  `Secondary`, `Success`, `Info`, `Warning`, `Danger`, `Light`, `Orange`,
  `Indigo`, `Pink`, `Deep Orange`, `Aqua`, `Dark`, `Black`, `Purple`,
  `Blue`, `Brown`, and `Blue Gray`
- **AND** each button SHALL use its reference background color (Primary
  `#007bff`, Secondary `#6c757d`, Success `#28a745`, Info `#17a2b8`,
  Warning `#ffc107`, Danger `#dc3545`, Light `#f8f9fa`, Orange `#fd7e14`,
  Indigo `#6610f2`, Pink `#e83e8c`, Deep Orange `#ffac8e`, Aqua `#3fc5f0`,
  Dark `#393e46`, Black `#000`, Purple `#6f42c1`, Blue `#007bff`, Brown
  `#a0855b`, Blue Gray `#3f4d71`)
- **AND** all buttons SHALL use white text (`#fff`) EXCEPT `Warning` and
  `Light`, which SHALL use Bootstrap's dark text `#212529`
- **AND** every button SHALL be square (`border-radius: 0`), bold
  (`font-weight: 700`), UPPERCASE, with a `1px solid` border matching its
  background color

#### Scenario: Color grid wrap

- **GIVEN** the color grid is displayed on a desktop viewport
- **WHEN** the buttons do not fit on one line
- **THEN** the buttons SHALL wrap onto multiple rows without horizontal
  overflow, matching the reference's responsive wrap (7 + 8 + 3 at 1200px)

### Requirement: Full-width button

The system SHALL render the Full width button block with one block-level
primary button spanning the full content width.

#### Scenario: Block button

- **GIVEN** the Full width button block is displayed
- **WHEN** the user views it
- **THEN** a single `Button` button SHALL render at `display: block`,
  `width: 100%` with the primary blue `#007bff` background and white text

### Requirement: Uppercase button labels

The system SHALL render every button label in uppercase (matching the
reference's `text-transform: uppercase`), while the size/block labels stay
title-case as in the reference.

#### Scenario: Label casing

- **GIVEN** any button is displayed
- **WHEN** the user reads its label
- **THEN** the label SHALL be displayed in uppercase (e.g. "BUTTON",
  "PRIMARY", "SUCCESS") via `text-transform: uppercase`
- **AND** the `<small>` block labels SHALL remain `Large`, `Medium`,
  `Small`, `Button Colors`, `Full width button` (title case)

### Requirement: Hover behavior

The system SHALL reproduce the reference hover effect on every button: a
white overlay sweeping left-to-right, the label flipping to black, and the
background darkening to the color's hover shade — with no lift and no
shadow.

#### Scenario: Hovering a button

- **GIVEN** any solid button is displayed
- **WHEN** the user hovers it
- **THEN** a white overlay (`#fff`) SHALL sweep from the left edge across
  the button to `calc(100% - 2px)` (1px inset, `.3s` transition)
- **AND** the button's label SHALL flip to black (`#000`) as the sweep
  passes (the label sits above the overlay)
- **AND** the background SHALL shift to the reference hover color (e.g.
  Primary/Blue `#006adb`, Success `#218a39`, Warning `#e2aa00`, Indigo
  `#570bd3`, Brown `#89724e`, Blue Gray `#323d5a`)
- **AND** the button SHALL NOT lift or gain a box-shadow

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Bevel page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the size buttons SHALL stack or wrap without horizontal overflow
- **AND** the color buttons SHALL wrap onto multiple lines with the labels
  remaining centered and readable
- **AND** the full-width button SHALL keep spanning the content width
- **AND** the content padding SHALL scale down sensibly (the reference's
  `7rem 0` is large; reduce for small screens per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Bevel page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-bevel`
- [ ] `scripts/verify-app.sh bevel` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "#08 — Bootstrap 4 Buttons"
      title → Sizes (Large/Medium/Small) → Button Colors (18 buttons) →
      Full width button → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#007bff`
      primary/blue, `#6c757d` secondary, `#28a745` success, `#17a2b8`
      info, `#ffc107` warning, `#dc3545` danger, `#f8f9fa` light,
      `#fd7e14` orange, `#6610f2` indigo, `#e83e8c` pink, `#ffac8e` deep
      orange, `#3fc5f0` aqua, `#393e46` dark, `#000` black, `#6f42c1`
      purple, `#a0855b` brown, `#3f4d71` blue gray + their hover shades
      (see tokens table); SQUARE radius 0; base/sm/lg paddings per tokens
      table
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Bevel — Button Showcase"
- [ ] Buttons: three sizes + 18 colors + full-width block; square,
      uppercase bold, 1px border in bg color, white text (Warning/Light =
      `#212529`); hover = white sweep overlay + black label + darkened bg
      (NO lift/shadow)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 08"
      row, line 669 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
