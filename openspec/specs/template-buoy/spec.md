# Template: Buoy (Button / UI Kit Showcase)

## Purpose

Buoy is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 11" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-11/), built under a
DIFFERENT name (**Buoy** — a buoy is a floating object; every button rests
on a soft 30px-blur drop shadow (`0 15px 30px 0 rgba(0, 0, 0, 0.2)`) that
makes it appear to FLOAT above the white page like a buoy on water, and on
hover the shadow lifts off while the fill deepens to a darker shade — like
the button settling; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a 20px
heading "#01 — Bootstrap 4 Buttons" (left-aligned, top of a `col-md-10`
content column), then three showcase blocks stacked vertically — "Large /
Medium / Small" (three blue "Button" buttons, each with a small size label
above it), "Button Colors" (a grid of **18** solid buttons: Bootstrap
semantic colors + 11 custom extended colors), and "Full width button" (one
wide `btn-block` blue "Button"). There is NO navbar, NO footer, NO images,
NO forms, and NO interactive components in the original — the whole page is
the button showcase itself. Unlike its siblings, the 11 variant's signature
is the **floating soft drop shadow at rest** (`box-shadow: 0 15px 30px 0
rgba(0,0,0,0.2)`) combined with a **hover that removes the shadow and
darkens the fill** to a fixed darker shade per color — NO fill→outline white
inversion (Fillet/09), NO bezel frame (Bezel/10), NO skew/uppercase (Slant/05).
The buttons are **rounded (`border-radius: 4px`)**, **13px** base text,
**`letter-spacing: .02rem`**, **font-weight 400** (NOT bold), **no border**,
**title-case labels** (NO uppercase). Buoy recreates the structure
section-for-section with matching layout, tokens, typography, and content
kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 11" is FORBIDDEN
> as the app name. **Buoy** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-11/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-11/` (HTTP 200 —
> same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–10, discovered
> by scraping the ColorLib template page, which links to the `/bb/` path).
> The page `<title>` is "Button #1".

> ⚠ HEADING NUMBER ARTIFACT: the live `h2` renders **"#01 — Bootstrap 4
> Buttons"** (em dash) — the number was copy-pasted from the "Bootstrap
> Buttons 01" sibling and never updated (the `<title>` is likewise "Button
> #1"). This is a REAL artifact in the reference (same kind as Slant/05's
> "#02"), NOT a typo in this spec. Fidelity mandate = render the heading
> exactly as the reference renders it: **"#01 — Bootstrap 4 Buttons"**.
> Do NOT "fix" it to "#11" — that would deviate from the reference.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 11". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 672). Free UI-kit button-component
  template. The `bootstrap-buttons-11` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-11/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-11/` (HTTP 200,
  18.2KB HTML, `<title>Button #1</title>`, heading
  `#01 &mdash; Bootstrap 4 Buttons` — the "#01" copy-paste artifact, see
  above). Stylesheets: `css/bootstrap.min.css` (160KB — Bootstrap 4 base,
  the semantic color + `.btn-block` source), `css/style.css` (3.7KB — the
  custom floating-shadow theme + letter-spacing + per-color hover darken;
  the token source), `fonts/icomoon/style.css` (glyph font, loaded but
  UNUSED — no icons on the page). JS: jQuery + Popper + Bootstrap bundle +
  `js/main.js` (vestigial — the page has no interactive components; do NOT
  replicate the JS). Structure, copy, and tokens below are from the live DOM
  - both stylesheets + browser-verified computed styles (2026-08-14).
- **⚠ Screenshot quirk (outdated asset):** the TEMPLATES.md screenshot
  (`bootstrap-buttons-11.jpg`, 1200×972, captured from the OLD
  `ui-preview.colorlib.com`) shows an OLDER iteration: FLAT buttons with NO
  drop shadows. The LIVE page renders every button with the soft floating
  shadow. The live DOM + CSS is AUTHORITATIVE — the soft shadow IS the
  signature and MUST be implemented. The static screenshot simply predates
  the current `style.css` (same discrepancy as Bezel/"Bootstrap Buttons 10").
- **Visual design (screenshot + live DOM):** clean, flat, single-column kit
  page on a white (`#fff`) background. One content container
  (`div.container.content`, padding `7rem 0` = 112px) with a centered row
  and a `col-md-10` left-aligned column holding the heading and all three
  showcase blocks. The heading `h2.mb-5` is 20px text colored `#212529`
  (Bootstrap default text color) with `margin-bottom: 3rem`. Size/block
  labels are `<small>` elements (12.8px = 80% of 16px, `#212529`, weight
  normal) centered above their buttons. Buttons are rounded
  (`border-radius: 4px`), **13px** text, `8px 25px` padding, **weight 400**,
  **no border**, **`letter-spacing: .02rem`** (0.32px at 16px root),
  title-case text (NO `text-transform`), with a **soft drop shadow at rest**
  (`box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2)`) and a `.3s all ease`
  transition. Button text is a direct text node (no inner span, no
  `::before`/`::after` pseudo-elements). Hover behavior (from `style.css`):
  every `.btn:hover/:active/:focus` sets `box-shadow: none` (the shadow
  lifts off); each color's hover rule sets a fixed DARKER `background-color`
  (listed in the tokens table) while the text color stays unchanged. There
  is NO white fill→outline inversion, NO bezel rings, NO skew, NO
  translate/lift offset, NO `top: -1px`. Typography: **Roboto** (body +
  headings). No navbar, no hero, no images, no footer.
- **Section order (1:1 from live DOM):**
  1. **Title** — `h2.mb-5` **"#01 — Bootstrap 4 Buttons"** (20px `#212529`,
     left-aligned, `margin-bottom 3rem`).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three `div.mb-3.mr-3`
     groups side by side, each a centered `<small>` label above one blue
     button: `Large` → `btn btn-primary btn-lg` "Button", `Medium` →
     `btn btn-primary` "Button", `Small` → `btn btn-primary btn-sm`
     "Button". Button text is a direct text node (no inner span).
  3. **Button Colors** — label row (`div.text-center > small` "Button
     Colors"), then a `div.mb-5` with **18** solid buttons, each
     `btn mb-3 mr-3 btn-<color>` with direct text label: `Primary`,
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
  hover effects via CSS only (Tailwind `hover:` utilities — no JS).
- **Design tokens (from `bootstrap.min.css` + `style.css` + computed
  styles):**

  | Token               | Value                                    | Usage                                             |
  | ------------------- | ---------------------------------------- | ------------------------------------------------- |
  | Page background     | `#ffffff`                                | `body` (Bootstrap default)                        |
  | Content padding     | `7rem 0` (112px)                         | `.content` (container block)                      |
  | Heading text        | `#212529`                                | `h2` — 20px, "#01 — Bootstrap 4 Buttons", mb 3rem |
  | Label text          | `#212529`, 12.8px, w400                  | `<small>` labels above button rows (80% of base)  |
  | Font                | Roboto                                   | body + headings (`"Roboto", -apple-system, ...`)  |
  | Button radius       | `4px` (ROUNDED)                          | `.btn` (Bootstrap default radius)                 |
  | Button base         | 13px, weight **400** (NOT bold),         | `.btn` — padding `8px 25px`, `border: none`,      |
  |                     | `letter-spacing: .02rem` (0.32px),       | title-case (NO uppercase), transition `.3s all    |
  |                     | title-case text                          | ease`; direct text node, NO inner span, NO        |
  |                     |                                          | pseudo-elements                                   |
  | Rest shadow (KEY)   | `0 15px 30px 0 rgba(0,0,0,0.2)`          | `.btn` — soft floating drop shadow AT REST        |
  | Hover shadow        | `none`                                   | `.btn:hover/:active/:focus` — shadow lifts off    |
  | Hover fill          | fixed DARKER shade per color (see        | `.btn-<color>:hover/:focus` — `background-color`  |
  |                     | table below)                             | darkens; text color UNCHANGED                     |
  | Small button (`sm`) | 12px, padding `5px 15px`                 | `.btn.btn-sm`                                     |
  | Large button (`lg`) | 16px, padding `15px 30px`                | `.btn.btn-lg`                                     |
  | Block button        | `display:block; width:100%`              | `.btn-block` (Bootstrap)                          |
  | Primary (rest)      | bg `#007bff`, text `#fff`                | `btn-primary` (Bootstrap default)                 |
  | Primary (hover)     | bg `#006adb`                             | `btn-primary:hover/:focus` (shadow → none too)    |
  | Secondary           | `#6c757d` bg/white text; hover `#5b636a` | `btn-secondary`                                   |
  | Success             | `#28a745` bg/white text; hover `#218a39` | `btn-success`                                     |
  | Info                | `#17a2b8` bg/white text; hover `#138698` | `btn-info`                                        |
  | Warning             | `#ffc107` bg, text `#212529` (dark);     | `btn-warning` — dark text at rest, stays dark     |
  |                     | hover `#e2aa00`                          |                                                   |
  | Danger              | `#dc3545` bg/white text; hover `#ca2333` | `btn-danger`                                      |
  | Light               | `#f8f9fa` bg, text `#212529` (dark)      | `btn-light` — Bootstrap default, NOT overridden   |
  |                     | (NO hover rule — stays)                  | in style.css                                      |
  | Orange              | `#fd7e14` bg/white text; hover `#eb6c02` | `btn-orange` — explicit bg + white text           |
  | Indigo              | `#6610f2` bg/white text; hover `#570bd3` | `btn-indigo`                                      |
  | Pink                | `#e83e8c` bg/white text; hover `#e41e79` | `btn-pink`                                        |
  | Deep Orange         | `#ffac8e` bg/white text; hover `#ff926a` | `btn-deep-orange`                                 |
  | Aqua                | `#3fc5f0` bg/white text; hover `#1ebbed` | `btn-aqua`                                        |
  | Dark                | `#393e46` bg/white text; hover `#292d32` | `btn-dark`                                        |
  | Black               | `#000` bg/white text; hover `#000`       | `btn-black` — hover stays black (no visible       |
  |                     |                                          | darkening)                                        |
  | Purple              | `#6f42c1` bg/white text; hover `#5f37a8` | `btn-purple`                                      |
  | Blue                | `#007bff` bg/white text; hover `#006adb` | `btn-blue` (same values as Primary)               |
  | Brown               | `#a0855b` bg/white text; hover `#89724e` | `btn-brown`                                       |
  | Blue Gray           | `#3f4d71` bg/white text; hover `#323d5a` | `btn-blue-gray`                                   |

- **Fonts:** **Roboto** is the theme family (body + headings). Load Roboto
  via Google Fonts `<link>` in `index.html`. No icon font needed — the page
  has no icons (the original's `icomoon` font is loaded but unused).

## Requirements

### Requirement: Page structure

The system SHALL render the Buoy page as a single-column, centered document
on a white background, in this order: the "#01 — Bootstrap 4 Buttons" title,
the three showcase blocks (Sizes, Button Colors, Full width button), and a
minimal footer.

#### Scenario: Default render

- **GIVEN** the Buoy page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "#01 — Bootstrap 4 Buttons"
  (20px, `#212529`, in a centered `col-md-10`-style content column; the
  "#01" number is a reference artifact and MUST be kept as-is — do NOT
  "fix" it to "#11")
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
- **AND** every button SHALL be rounded (`border-radius: 4px`), weight 400
  (NOT bold), 13px, with `letter-spacing: .02rem`, no border, and a soft
  drop shadow at rest (`0 15px 30px 0 rgba(0,0,0,0.2)`)
- **AND** all buttons SHALL use white text (`#fff`) EXCEPT `Warning` and
  `Light`, which SHALL use dark text (`#212529`)
- **AND** button labels SHALL be title-case (e.g. "Primary", "Blue Gray"),
  NOT uppercase

#### Scenario: Color grid wrap

- **GIVEN** the color grid is displayed on a desktop viewport
- **WHEN** the buttons do not fit on one line
- **THEN** the buttons SHALL wrap onto multiple rows without horizontal
  overflow, matching the reference's responsive wrap

### Requirement: Full-width button

The system SHALL render the Full width button block with one block-level
primary button spanning the full content width.

#### Scenario: Block button

- **GIVEN** the Full width button block is displayed
- **WHEN** the user views it
- **THEN** a single `Button` button SHALL render at `display: block`,
  `width: 100%` with the primary blue `#007bff` background and white text

### Requirement: Rest-state shadow

The system SHALL render every button with the reference's signature soft
floating shadow at rest.

#### Scenario: Shadow at rest

- **GIVEN** any button is displayed at rest
- **WHEN** the user inspects it
- **THEN** the button SHALL cast a soft drop shadow
  (`0 15px 30px 0 rgba(0,0,0,0.2)`) that makes it appear to float above the
  page (this is the template's signature look — unlike Fillet/09's flat
  buttons and Bezel/10's framed buttons)

### Requirement: Hover behavior

The system SHALL reproduce the reference hover effect on every button: the
soft shadow lifts off (`box-shadow: none`) and the fill darkens to the
button color's fixed hover shade, with the text color unchanged — no white
fill→outline inversion, no bezel rings, no skew, no translate/lift offset.

#### Scenario: Hovering a button

- **GIVEN** any solid button is displayed
- **WHEN** the user hovers it
- **THEN** the button's drop shadow SHALL be removed (`box-shadow: none`)
- **AND** the button background SHALL darken to its color's hover shade
  (Primary `#006adb`, Secondary `#5b636a`, Success `#218a39`, Info
  `#138698`, Warning `#e2aa00`, Danger `#ca2333`, Orange `#eb6c02`, Indigo
  `#570bd3`, Pink `#e41e79`, Deep Orange `#ff926a`, Aqua `#1ebbed`, Dark
  `#292d32`, Black `#000` (unchanged), Purple `#5f37a8`, Blue `#006adb`,
  Brown `#89724e`, Blue Gray `#323d5a`)
- **AND** the button text color SHALL stay unchanged (white, except Warning
  and Light which stay dark)
- **AND** the button SHALL NOT flip its background to white, gain rings,
  skew, or move (unlike Fillet/Bezel/Slant siblings)

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Buoy page is rendered on a viewport ≤768px
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

- **GIVEN** the Buoy page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-buoy`
- [ ] `scripts/verify-app.sh buoy` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "#01 — Bootstrap 4 Buttons"
      title → Sizes (Large/Medium/Small) → Button Colors (18 buttons) →
      Full width button → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#007bff`
      primary/blue, `#6c757d` secondary, `#28a745` success, `#17a2b8`
      info, `#ffc107` warning, `#dc3545` danger, `#f8f9fa` light,
      `#fd7e14` orange, `#6610f2` indigo, `#e83e8c` pink, `#ffac8e` deep
      orange, `#3fc5f0` aqua, `#393e46` dark, `#000` black, `#6f42c1`
      purple, `#a0855b` brown, `#3f4d71` blue gray + all hover shades
      (see hover requirement); ROUNDED radius 4px; base/sm/lg paddings per
      tokens table; no borders
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Buoy — Button Showcase"
- [ ] Buttons: three sizes + 18 colors + full-width block; rounded, weight
      400 (NOT bold), 13px, `letter-spacing: .02rem`, title-case (NOT
      uppercase), white text (Warning/Light = dark text); REST shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)` on every button; hover = shadow →
      none + fill darkens to fixed shade, text unchanged — NO white
      inversion, NO rings, NO skew (do NOT copy Fillet/Bezel/Slant hovers)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 11"
      row, line 672 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
