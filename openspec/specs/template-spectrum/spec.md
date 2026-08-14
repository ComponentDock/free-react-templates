# Template: Spectrum (Button / UI Kit Showcase)

## Purpose

Spectrum is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 07" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-07/), built under a
DIFFERENT name (**Spectrum** — a full range of colors shown as buttons,
evoking the page's 18-color showcase; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a
20px heading "#07 — Bootstrap 4 Buttons" (left-aligned, top of a
`col-md-10` content column), then three showcase blocks stacked vertically —
"Large / Medium / Small" (three blue "Button" buttons, each with a 16px
grey `<small>` size label above it), "Button Colors" (a grid of **18**
solid buttons: Bootstrap semantic colors + 11 custom extended colors), and
"Full width button" (one wide `btn-block` blue "Button"). There is NO
navbar, NO footer, NO images, NO forms, and NO interactive components in the
original — the whole page is the button showcase itself. Spectrum recreates
the structure section-for-section with matching layout, tokens, typography,
and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 07" is FORBIDDEN
> as the app name. **Spectrum** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-07/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-07/` (HTTP 200 —
> same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–06, discovered
> by scraping the ColorLib template page, which links to the `/bb/` path).
> The page `<title>` is "Button #7". Fidelity mandate = render the heading
> exactly as the reference renders it: **"#07 — Bootstrap 4 Buttons"**.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 07". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 668). Free UI-kit button-component
  template. The `bootstrap-buttons-07` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-07/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-07/` (HTTP 200,
  18.2KB HTML, `<title>Button #7</title>`, heading
  `#07 &mdash; Bootstrap 4 Buttons`). Stylesheets: `css/bootstrap.min.css`
  (160KB — Bootstrap 4 base, the semantic color source), `css/style.css`
  (5.7KB — custom button theme + extended colors; the token source),
  `fonts/icomoon/style.css` (glyph font, loaded but UNUSED — no icons on the
  page). JS: jQuery + Popper + Bootstrap bundle + `js/main.js` (vestigial —
  the page has no interactive components; do NOT replicate the JS). Structure,
  copy, and tokens below are from the live DOM + both stylesheets.
  Screenshot (`bootstrap-buttons-07.jpg`, 1200×972, browser-verified
  2026-08-14) confirms the aesthetic: white page, heading top-left, three
  blue size buttons with small grey labels, a 3-row grid of 18 colored
  buttons (8 + 8 + 2), one full-width blue button at the bottom; no
  navbar/footer/images.
- **Visual design (screenshot + live DOM):** clean, flat, single-column kit
  page on a white (`#fff`) background. One content container
  (`div.container.content`, padding `7rem 0`) with a centered row and a
  `col-md-10` left-aligned column holding the heading and all three
  showcase blocks. The heading `h2.mb-5` is 20px (custom `h2` rule) black
  text. Size labels and block labels are `<small>` elements (16px grey)
  centered above their buttons. Buttons are solid, borderless, pill-shaped
  (`border-radius: 30px`), 13px text, `8px 25px` padding; hover lifts the
  button `1px` (`top: -1px`), adds a hard 3D shadow in a darker shade
  (`0 2px 0 0 <color>`), and sweeps a white translucent sheen
  (`rgba(255,255,255,.15)`) over the top half via a `:before` overlay.
  Typography: **Roboto** (body + headings). No navbar, no hero, no images,
  no footer.
- **Section order (1:1 from live DOM):**
  1. **Title** — `h2.mb-5` **"#07 — Bootstrap 4 Buttons"** (20px black,
     left-aligned, `margin-bottom 3rem`).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three
     `div.mb-3.mr-3` groups side by side, each a centered `<small>` label
     above one blue button: `Large` → `btn btn-primary btn-lg` "Button",
     `Medium` → `btn btn-primary` "Button", `Small` → `btn btn-primary
btn-sm` "Button".
  3. **Button Colors** — label row (`div.text-center > small` "Button
     Colors"), then a `div.mb-5` with **18** solid buttons, each
     `btn mb-3 mr-3 btn-<color>`: `Primary`, `Secondary`, `Success`,
     `Info`, `Warning`, `Danger`, `Light`, `Orange`, `Indigo`, `Pink`,
     `Deep Orange`, `Aqua`, `Dark`, `Black`, `Purple`, `Blue`, `Brown`,
     `Blue Gray`.
  4. **Full width button** — `div.mb-3.mr-3` with centered `<small>` label
     "Full width button" above one `btn btn-primary btn-block` "Button"
     (display block, width 100%).
  5. **Footer** — the original has NO footer; per monorepo convention add
     a minimal attribution footer linking
     `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** none — the page is fully static (the loaded
  Bootstrap bundle powers nothing on this page). Recreate as static React;
  hover effects via Tailwind.
- **Design tokens (from `bootstrap.min.css` + `style.css`):**

  | Token               | Value                       | Usage                                            |
  | ------------------- | --------------------------- | ------------------------------------------------ |
  | Page background     | `#ffffff`                   | `body` (Bootstrap default)                       |
  | Content padding     | `7rem 0`                    | `.content` (container block)                     |
  | Heading text        | black                       | `h2` — 20px, "#07 — Bootstrap 4 Buttons"         |
  | Label text          | grey `<small>`              | 16px labels above button rows                    |
  | Font                | Roboto                      | body + headings (`"Roboto", -apple-system, ...`) |
  | Button radius       | `30px`                      | `.btn` custom pill (overrides Bootstrap 4px)     |
  | Button base         | 13px, padding `8px 25px`,   | `.btn` — borderless, `letter-spacing .02rem`,    |
  |                     | `top: 0`, transition `.3s`  | `overflow: hidden`, `position: relative`         |
  | Small button (`sm`) | 12px, padding `5px 15px`    | `.btn.btn-sm`                                    |
  | Large button (`lg`) | 16px, padding `15px 30px`   | `.btn.btn-lg`                                    |
  | Block button        | `display:block; width:100%` | `.btn-block` (Bootstrap)                         |
  | Hover lift          | `top: -1px`                 | `.btn:hover`                                     |
  | Hover sheen         | `rgba(255,255,255,.15)`     | `.btn:before` overlay sweeping to 50% height     |
  | Hover shadow        | `0 2px 0 0 <darker shade>`  | hard 3D press shadow in each color's dark shade  |
  | Primary             | `#007bff` (hover `#0f83ff`) | `btn-primary` / `btn-blue` (shadow `#0062cc`)    |
  | Secondary           | `#6c757d` (hover `#737d85`) | `btn-secondary` (shadow `#545b62`)               |
  | Success             | `#28a745` (hover `#2bb34a`) | `btn-success` (shadow `#1e7e34`)                 |
  | Info                | `#17a2b8` (hover `#19aec6`) | `btn-info` (shadow `#117a8b`)                    |
  | Warning             | `#ffc107` (hover `#ffc516`) | `btn-warning`, white text (shadow `#d39e00`)     |
  | Danger              | `#dc3545` (hover `#de4251`) | `btn-danger`, white text (shadow `#bd2130`)      |
  | Light               | `#f8f9fa` (text `#000`)     | `btn-light` (hover shadow `#dae0e5`)             |
  | Orange              | `#fd7e14` (hover `#fd8623`) | `btn-orange` (shadow `#dc6502`)                  |
  | Indigo              | `#6610f2` (hover `#6f1ff3`) | `btn-indigo` (shadow `#510bc4`)                  |
  | Pink                | `#e83e8c` (hover `#ea4c94`) | `btn-pink` (shadow `#d91a72`)                    |
  | Deep Orange         | `#ffac8e` (hover `#ffb79d`) | `btn-deep-orange` (shadow `#ff875b`)             |
  | Aqua                | `#3fc5f0` (hover `#4dc9f1`) | `btn-aqua` (shadow `#12b5ea`)                    |
  | Dark                | `#393e46` (hover `#40454e`) | `btn-dark` (shadow `#22252a`)                    |
  | Black               | `#000` (hover `#080808`)    | `btn-black` (shadow black)                       |
  | Purple              | `#6f42c1` (hover `#784ec5`) | `btn-purple` (shadow `#59339d`)                  |
  | Brown               | `#a0855b` (hover `#a78c64`) | `btn-brown` (shadow `#7f6a49`)                   |
  | Blue Gray           | `#3f4d71` (hover `#44547b`) | `btn-blue-gray` (shadow `#2d3750`)               |
  | Solid button text   | `#ffffff`                   | all solid buttons; Light uses `#000`             |

- **Fonts:** **Roboto** is the theme family (body + headings). Load Roboto
  via Google Fonts `<link>` in `index.html`. No icon font needed — the page
  has no icons (the original's `icomoon` font is loaded but unused).

## Requirements

### Requirement: Page structure

The system SHALL render the Spectrum page as a single-column, centered
document on a white background, in this order: the "#07 — Bootstrap 4
Buttons" title, the three showcase blocks (Sizes, Button Colors, Full width
button), and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Spectrum page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "#07 — Bootstrap 4 Buttons"
  (20px, black, in a centered `col-md-10`-style content column)
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
  (13px text, `8px 25px` padding)
- **AND** a `Small`-labelled button SHALL render with the small sizing
  (12px text, `5px 15px` padding)
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
- **AND** all buttons SHALL use white text except `Light`, which SHALL use
  black text (`#000`)
- **AND** every button SHALL be borderless with the pill radius `30px`

#### Scenario: Color grid wrap

- **GIVEN** the color grid is displayed on a desktop viewport
- **WHEN** the buttons do not fit on one line
- **THEN** the buttons SHALL wrap onto multiple rows without horizontal
  overflow, matching the reference's 3-row arrangement (8 + 8 + 2)

### Requirement: Full-width button

The system SHALL render the Full width button block with one block-level
primary button spanning the full content width.

#### Scenario: Block button

- **GIVEN** the Full width button block is displayed
- **WHEN** the user views it
- **THEN** a single `Button` button SHALL render at `display: block`,
  `width: 100%` with the primary blue `#007bff` background and white text

### Requirement: Hover behavior

The system SHALL reproduce the reference hover effect on every button:
lift, hard shadow in the color's darker shade, and a white sheen sweep.

#### Scenario: Hovering a button

- **GIVEN** any solid button is displayed
- **WHEN** the user hovers it
- **THEN** the button SHALL lift `1px` (`top: -1px`)
- **AND** a hard shadow SHALL appear below it in its reference dark shade
  (e.g. Primary `#0062cc`, Danger `#bd2130`, Orange `#dc6502`, Indigo
  `#510bc4`, Blue Gray `#2d3750`, Black `#000`)
- **AND** a translucent white sheen (`rgba(255,255,255,0.15)`) SHALL cover
  the top half of the button
- **AND** the background SHALL shift to the reference hover color (e.g.
  Primary `#0f83ff`, Warning `#ffc516`, Dark `#40454e`)

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Spectrum page is rendered on a viewport ≤768px
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

- **GIVEN** the Spectrum page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-spectrum`
- [ ] `scripts/verify-app.sh spectrum` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "#07 — Bootstrap 4 Buttons"
      title → Sizes (Large/Medium/Small) → Button Colors (18 buttons) →
      Full width button → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#007bff`
      primary/blue, `#6c757d` secondary, `#28a745` success, `#17a2b8`
      info, `#ffc107` warning, `#dc3545` danger, `#f8f9fa` light,
      `#fd7e14` orange, `#6610f2` indigo, `#e83e8c` pink, `#ffac8e` deep
      orange, `#3fc5f0` aqua, `#393e46` dark, `#000` black, `#6f42c1`
      purple, `#a0855b` brown, `#3f4d71` blue gray; pill radius 30px;
      base/sm/lg paddings per tokens table; hover dark shades + sheen
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Spectrum — Button Showcase"
- [ ] Buttons: three sizes + 18 colors + full-width block; borderless,
      pill radius, white text (Light = black); hover lift + hard shadow +
      sheen per tokens table
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 07"
      row, line 668 — Bootstrap Buttons category)
