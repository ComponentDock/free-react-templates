# Template: Fillet (Button / UI Kit Showcase)

## Purpose

Fillet is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 09" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-09/), built under a
DIFFERENT name (**Fillet** — a fillet is a rounded interior corner in design,
evoking the reference's 4px-rounded buttons; per the monorepo naming mandate
— never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a 20px
heading "#09 — Bootstrap 4 Buttons" (left-aligned, top of a `col-md-10`
content column), then three showcase blocks stacked vertically — "Large /
Medium / Small" (three blue "Button" buttons, each with a small size label
above it), "Button Colors" (a grid of **18** solid buttons: Bootstrap
semantic colors + 11 custom extended colors), and "Full width button" (one
wide `btn-block` blue "Button"). There is NO navbar, NO footer, NO images,
NO forms, and NO interactive components in the original — the whole page is
the button showcase itself. Unlike its sibling "Bootstrap Buttons 08"
(Bevel), the 09 variant uses **rounded buttons** (`border-radius: 4px`),
**title-case 14px bold labels** (NO uppercase, NO letter-spacing), and a
**fill→outline hover inversion**: on hover the background flips to white and
the label flips to black while a 2px solid color border stays (no sweep
overlay, no darkened background, no lift, no shadow). Fillet recreates the
structure section-for-section with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 09" is FORBIDDEN
> as the app name. **Fillet** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-09/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-09/` (HTTP 200 —
> same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–08, discovered
> by scraping the ColorLib template page, which links to the `/bb/` path).
> The page `<title>` is "Button #9". Fidelity mandate = render the heading
> exactly as the reference renders it: **"#09 — Bootstrap 4 Buttons"**.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 09". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 670). Free UI-kit button-component
  template. The `bootstrap-buttons-09` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-09/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-09/` (HTTP 200,
  18.2KB HTML, `<title>Button #9</title>`, heading
  `#09 &mdash; Bootstrap 4 Buttons`). Stylesheets: `css/bootstrap.min.css`
  (160KB — Bootstrap 4 base, **byte-identical to the 08 variant's copy**, the
  semantic color + border source), `css/style.css` (4.5KB — custom
  rounded-button theme + 2px borders + extended colors + fill→outline hover;
  the token source), `fonts/icomoon/style.css` (glyph font, loaded but
  UNUSED — no icons on the page). JS: jQuery + Popper + Bootstrap bundle +
  `js/main.js` (vestigial — the page has no interactive components; do NOT
  replicate the JS). Structure, copy, and tokens below are from the live DOM
  - both stylesheets + the browser-verified screenshot. Screenshot
    (`bootstrap-buttons-09.jpg`, 1200×972, browser-verified 2026-08-14)
    confirms the aesthetic: white page, "#09 – Bootstrap 4 Buttons" heading
    top-left, three blue size buttons with small labels, an 18-button color
    grid wrapping in 3 rows (7 + 7 + 4 at 1200px), one full-width blue button
    at the bottom; no navbar/footer/images. Vision-model note: corners read
    slightly rounded in the screenshot, which MATCHES the CSS
    `border-radius: 4px` (unlike BB 08's square 0px — do not copy Bevel's
    tokens).
- **Visual design (screenshot + live DOM):** clean, flat, single-column kit
  page on a white (`#fff`) background. One content container
  (`div.container.content`, padding `7rem 0` = 112px) with a centered row
  and a `col-md-10` left-aligned column holding the heading and all three
  showcase blocks. The heading `h2.mb-5` is 20px text colored `#212529`
  (Bootstrap default text color) with `margin-bottom: 3rem`. Size/block
  labels are `<small>` elements (12.8px = 80% of 16px, `#212529`, weight
  normal) centered above their buttons. Buttons are rounded
  (`border-radius: 4px`), bold (`font-weight: bold`), 14px text (base),
  `8px 25px` padding, title-case text (NO `text-transform`), with a **2px
  solid border** — `transparent` at base, per-color for most variants — and
  a `.3s all ease` transition. There is NO `<span>` wrapper inside the
  buttons and NO `:before` pseudo-element (unlike BB 08's sweep overlay).
  Hover behavior (from `style.css`): for every button
  `.btn:hover/:active/:focus` sets `box-shadow: none` and `color: #000`;
  each color's hover rule sets `background: #fff` (and `color: #000`) — the
  fill **inverts to an outline**: background goes white, text goes black,
  and the 2px color border remains. Primary is the one special case: at
  rest its border is the transparent base (Bootstrap bg `#007bff`), and on
  hover it gains `border: 2px solid #007bff; background: #fff` — the border
  appears with the white fill. Extended colors (Orange…Blue Gray) declare
  explicit `background-color`, `color: #fff`, and `border: 2px solid
<color>` at rest; `btn-light` is `#f8f9fa` bg with `#000` text (Bootstrap
  dark text, not white). There is NO `top: -1px` lift and NO hard
  box-shadow. Typography: **Roboto** (body + headings). No navbar, no hero,
  no images, no footer.
- **Section order (1:1 from live DOM):**
  1. **Title** — `h2.mb-5` **"#09 — Bootstrap 4 Buttons"** (20px `#212529`,
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
- **Design tokens (from `bootstrap.min.css` + `style.css` + screenshot):**

  | Token               | Value                                  | Usage                                             |
  | ------------------- | -------------------------------------- | ------------------------------------------------- |
  | Page background     | `#ffffff`                              | `body` (Bootstrap default)                        |
  | Content padding     | `7rem 0` (112px)                       | `.content` (container block)                      |
  | Heading text        | `#212529`                              | `h2` — 20px, "#09 — Bootstrap 4 Buttons", mb 3rem |
  | Label text          | `#212529`, 12.8px, w400                | `<small>` labels above button rows (80% of base)  |
  | Font                | Roboto                                 | body + headings (`"Roboto", -apple-system, ...`)  |
  | Button radius       | `4px` (ROUNDED)                        | `.btn` custom (overrides Bootstrap 4px — same)    |
  | Button base         | 14px bold, padding `8px 25px`          | `.btn` — title-case (NO uppercase),               |
  |                     | `border: 2px solid transparent`,       | transition `.3s all ease`; text is a direct       |
  |                     | `box-shadow: none` on hover            | text node (no inner span, no `:before`)           |
  | Small button (`sm`) | 10px, padding `5px 15px`               | `.btn.btn-sm`                                     |
  | Large button (`lg`) | 16px, padding `15px 30px`              | `.btn.btn-lg`                                     |
  | Block button        | `display:block; width:100%`            | `.btn-block` (Bootstrap)                          |
  | Hover inversion     | bg → `#fff`, text → `#000`             | every `.btn:hover/:active/:focus` — `color: #000` |
  |                     |                                        | + per-color `background: #fff`; border stays 2px  |
  |                     |                                        | solid color; `box-shadow: none`; NO sweep, NO     |
  |                     |                                        | darken, NO lift                                   |
  | Primary (rest)      | bg `#007bff`, text `#fff`,             | `btn-primary` — transparent 2px border at rest    |
  |                     | border transparent                     |                                                   |
  | Primary (hover)     | `border: 2px solid #007bff;`           | `btn-primary:hover/:focus` — border appears with  |
  |                     | `background: #fff`                     | the white fill                                    |
  | Secondary           | `#6c757d` bg/white text,               | `btn-secondary` — 2px grey border at rest         |
  |                     | `border: 2px solid #6c757d`            |                                                   |
  | Success             | `#28a745`, `border: 2px solid #28a745` | `btn-success` (rest border in color)              |
  | Info                | `#17a2b8`, `border: 2px solid #17a2b8` | `btn-info` (rest border in color)                 |
  | Warning             | `#ffc107`, `border: 2px solid #ffc107` | `btn-warning`, rest text `#212529` (dark)         |
  | Danger              | `#dc3545`, `border: 2px solid #dc3545` | `btn-danger` (rest border in color)               |
  | Light               | `#f8f9fa` bg, text `#000`,             | `btn-light` — dark text at rest (not white)       |
  |                     | `border: 2px solid #f8f9fa`            |                                                   |
  | Orange              | `#fd7e14`, text `#fff`,                | `btn-orange` — explicit bg + 2px border           |
  | Indigo              | `#6610f2`, text `#fff`,                | `btn-indigo` — explicit bg + 2px border           |
  | Pink                | `#e83e8c`, text `#fff`,                | `btn-pink` — explicit bg + 2px border             |
  | Deep Orange         | `#ffac8e`, text `#fff`,                | `btn-deep-orange` — explicit bg + 2px border      |
  | Aqua                | `#3fc5f0`, text `#fff`,                | `btn-aqua` — explicit bg + 2px border             |
  | Dark                | `#393e46`, text `#fff`,                | `btn-dark` — explicit bg + 2px border             |
  | Black               | `#000`, text `#fff`,                   | `btn-black` — explicit bg + 2px border            |
  | Purple              | `#6f42c1`, text `#fff`,                | `btn-purple` — explicit bg + 2px border           |
  | Blue                | `#007bff`, text `#fff`,                | `btn-blue` — explicit bg + 2px border (same as    |
  |                     |                                        | Primary values)                                   |
  | Brown               | `#a0855b`, text `#fff`,                | `btn-brown` — explicit bg + 2px border            |
  | Blue Gray           | `#3f4d71`, text `#fff`,                | `btn-blue-gray` — explicit bg + 2px border        |

- **Fonts:** **Roboto** is the theme family (body + headings). Load Roboto
  via Google Fonts `<link>` in `index.html`. No icon font needed — the page
  has no icons (the original's `icomoon` font is loaded but unused).

## Requirements

### Requirement: Page structure

The system SHALL render the Fillet page as a single-column, centered
document on a white background, in this order: the "#09 — Bootstrap 4
Buttons" title, the three showcase blocks (Sizes, Button Colors, Full width
button), and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Fillet page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a left-aligned title SHALL read "#09 — Bootstrap 4 Buttons"
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
  (14px text, `8px 25px` padding)
- **AND** a `Small`-labelled button SHALL render with the small sizing
  (10px text, `5px 15px` padding)
- **AND** all three SHALL read "Button" and use the primary blue `#007bff`
  with white text

### Requirement: Button color palette

The system SHALL render the Button Colors block with all 18 solid color
buttons from the reference, in order, with matching backgrounds, borders,
and labels.

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
- **AND** every button SHALL be rounded (`border-radius: 4px`), bold, with
  a 2px solid border (transparent for Primary at rest, in the button color
  for every other variant)
- **AND** all buttons SHALL use white text (`#fff`) EXCEPT `Warning` and
  `Light`, which SHALL use dark text (`#212529` / `#000`)
- **AND** button labels SHALL be title-case (e.g. "Primary", "Blue Gray"),
  NOT uppercase

#### Scenario: Color grid wrap

- **GIVEN** the color grid is displayed on a desktop viewport
- **WHEN** the buttons do not fit on one line
- **THEN** the buttons SHALL wrap onto multiple rows without horizontal
  overflow, matching the reference's responsive wrap (7 + 7 + 4 at 1200px)

### Requirement: Full-width button

The system SHALL render the Full width button block with one block-level
primary button spanning the full content width.

#### Scenario: Block button

- **GIVEN** the Full width button block is displayed
- **WHEN** the user views it
- **THEN** a single `Button` button SHALL render at `display: block`,
  `width: 100%` with the primary blue `#007bff` background and white text

### Requirement: Hover behavior

The system SHALL reproduce the reference hover effect on every button: the
fill inverts to an outline — background flips to white, label flips to
black, and the 2px color border stays (for Primary the border appears on
hover) — with no lift, no shadow, no sweep overlay, and no darkened
background.

#### Scenario: Hovering a button

- **GIVEN** any solid button is displayed
- **WHEN** the user hovers it
- **THEN** the button background SHALL flip to white (`#fff`)
- **AND** the button label SHALL flip to black (`#000`)
- **AND** the 2px solid border SHALL remain in the button's color (for
  Primary, `border: 2px solid #007bff` SHALL appear on hover)
- **AND** the button SHALL NOT lift, gain a box-shadow, show a sweep
  overlay, or darken its background (unlike Bevel/BB 08)

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Fillet page is rendered on a viewport ≤768px
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

- **GIVEN** the Fillet page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-fillet`
- [ ] `scripts/verify-app.sh fillet` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "#09 — Bootstrap 4 Buttons"
      title → Sizes (Large/Medium/Small) → Button Colors (18 buttons) →
      Full width button → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#007bff`
      primary/blue, `#6c757d` secondary, `#28a745` success, `#17a2b8`
      info, `#ffc107` warning, `#dc3545` danger, `#f8f9fa` light,
      `#fd7e14` orange, `#6610f2` indigo, `#e83e8c` pink, `#ffac8e` deep
      orange, `#3fc5f0` aqua, `#393e46` dark, `#000` black, `#6f42c1`
      purple, `#a0855b` brown, `#3f4d71` blue gray; ROUNDED radius 4px;
      base/sm/lg paddings per tokens table; 2px solid borders
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Fillet — Button Showcase"
- [ ] Buttons: three sizes + 18 colors + full-width block; rounded, bold,
      title-case (NOT uppercase), white text (Warning/Light = dark text);
      hover = fill→outline inversion (bg `#fff`, text `#000`, border
      stays; Primary gains its border on hover) — NO sweep, NO darken,
      NO lift/shadow (do NOT copy Bevel/BB 08 hover)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 09"
      row, line 670 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
