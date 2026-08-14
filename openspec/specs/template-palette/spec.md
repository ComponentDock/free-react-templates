# Template: Palette (Button / UI Kit Showcase)

## Purpose

Palette is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 01" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-01/), built under a
DIFFERENT name (**Palette** — a swatch board of colors and styles, evoking
the page's button-style/color showcase; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a
large centered "Button #01" title, then 12 stacked showcase blocks
("Pick your style", "Pick your size", "Pick your color", "Buttons with
icons", "Social Buttons", "Links", "Disabled Buttons", "Buttons with
Dropdown", "Buttons Groups", "Checkboxes", "Radio Buttons", "Block Level
Buttons"), each headed by a 16px grey `<small>` subheading under the 32px
title, and each showing rows of button variants: solid + outline + round
(pill) shapes in a custom 7-color palette (blue `#3e64ff`, olive `#94aa2a`,
crimson `#f0134d`, amber `#f1bc31`, sky `#64c4ed`, light `#f8f9fa`, dark
`#343a40`), three sizes (small/regular/large + full-width block), icon
buttons, 5 social brand buttons (Facebook, Twitter, LinkedIn, Pinterest,
Dribbble), link-style buttons, disabled buttons, dropdown menus, segmented
button groups, and custom-colored checkbox/radio toggles. There is NO
navbar and NO footer in the original. Palette recreates the structure
section-for-section with matching layout, tokens, typography, and content
kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 01" is FORBIDDEN
> as the app name. **Palette** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-01/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath). The page title is "Button 01". Fidelity mandate =
> render the heading exactly as the reference renders it: **"Button #01"**.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 01". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 662). Free UI-kit button-component
  template. The `bootstrap-buttons-01` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-01/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/` (HTTP 200,
  25.7KB HTML, `<title>Button 01</title>`). Stylesheets:
  `css/style.css` (230KB — Bootstrap 4 + ftco custom button/theme rules),
  `css/ionicons.min.css` (icons). JS: Bootstrap 4 bundle (dropdowns,
  collapse) + `js/main.js`. Structure, copy, and tokens below are from the
  live DOM + `style.css`. Screenshot (`bootstrap-buttons-01.jpg`, 1200×972,
  browser-verified 2026-08-14) confirms the aesthetic: white page, centered
  vertical stack of sections; large bold black "Button #01" title; smaller
  grey subheadings; rows of blue solid/outline/pill buttons, size rows,
  a 7-color solid + outline row, icon buttons, and brand-colored social
  buttons.
- **Visual design (screenshot + live DOM):** extremely clean, flat,
  centered single-column kit page on a white (`#fff`) background with a
  thin `2px #dee2e6` top border on the body. One content section
  (`section.ftco-section#buttons`, padding `7em 0`) containing the heading
  and all 12 showcase blocks stacked vertically, each block = one
  `h2.heading-section` (32px bold `#212529`; the block subheadings are
  wrapped in `<small>` = 16px grey) + one or more rows of buttons. No
  navbar, no hero, no images, no footer. The whole page is the button
  showcase itself. Typography: **Poppins** (the ftco theme family —
  `"Poppins", Arial, sans-serif`). The showcase blocks use the ftco custom
  palette (NOT the Bootstrap defaults — see tokens table).
- **Section order (1:1 from live DOM):**
  1. **Title block** — `h2.heading-section` **"Button #01"** (32px, bold,
     `#212529`; NO `<small>` — it is the page title).
  2. **Pick your style** — row: `Default` (solid primary), `Default
Outline` (`btn-outline-primary`), `Default Round` (`btn-primary
btn-round`), `Outline Round` (`btn-outline-primary btn-round`).
  3. **Pick your size** — two rows: solid `Small Size`/`Regular Size`/
     `Large Size` (`btn-sm` / default / `btn-lg`) and the same three in
     outline style.
  4. **Pick your color** — two rows: solid `Primary` `Success` `Danger`
     `Warning` `Info` `Light` `Dark` and the same seven as outlines.
  5. **Buttons with icons** — row: `Primary` / `Outline primary` / `Success`
     / `Outline Success` / `Danger` / `Outline danger`, each an icon + label
     (Ionicons heart/checkmark glyphs; implement with lucide-react).
  6. **Social Buttons** — five brand rows, each ×3 variants (solid, round,
     outline-round per the DOM classes `btn-{brand}`, `btn-round
btn-{brand}`, `btn-outline-{brand} btn-round`):
     `Share - 8.2k` (fb), `Share - 8.5k` (twitter), `Share - 8k`
     (pinterest), `Connect with Twitter` (×3), `Connect with Linkedin`
     (×3), `Pin it - 1k` (×3), `Find us on Dribbble` (×3). Brand colors:
     fb `#4f69a2`, twitter `#69b6f0`, linkedin `#2884ba`, pinterest
     `#d03940`, dribbble `#ea6294`.
  7. **Links** — row: `Primary link` `Secondary link` `Success link`
     `Danger link` `Warning link` `Info link` `Dark link` (`btn-link`
     style — text-colored links with per-color hover).
  8. **Disabled Buttons** — row: `Primary link`, `Secondary Link`
     (`btn-lg disabled`, `aria-disabled="true"`).
  9. **Buttons with Dropdown** — three dropdowns (`Dropdown button` in
     primary/success/danger), each with menu items `Action` / `Another
action` / `Something else here`.
  10. **Buttons Groups** — five segmented groups: `Primary` + `Outline
Primary` (Large), `Success` + `Outline Success` (Medium), `Danger` +
      `Outline Danger` (Medium), `Warning` + `Outline Warning` (Medium),
      `Info` + `Outline Info` (Medium) — adjacent buttons joined as one
      control.
  11. **Checkboxes Colors** — column of custom colored checkboxes
      (`Primary` `Success` `Danger` `Warning` `Info` `Disabled`), all
      checked by default except the Disabled one; the check glyph and label
      take the row's palette color.
  12. **Radio Buttons Colors** — same six rows as radio toggles (one
      selected by default).
  13. **Block Level Buttons** — full-width stacked buttons (`Block Level
info`, `Block Level Success`, …) — `btn-block`, width 100%,
      `margin-top 0.5rem`.
  14. **Footer** — the original has NO footer; per monorepo convention add
      a minimal attribution footer linking
      `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** Bootstrap dropdowns (`data-toggle` +
  `dropdown-menu`, close on outside click / Escape) and `js/main.js` (used
  for the navbar none of these pages use; checkboxes/radios are static
  styled inputs). Recreate with React state: one open dropdown at a time
  (or independent), `aria-haspopup` + `aria-expanded` on the toggle,
  `role="menu"`/`menuitem` on menu, close on outside click and Escape.
- **Design tokens (from `style.css` + bootstrap defaults):**

  | Token               | Value                         | Usage                                              |
  | ------------------- | ----------------------------- | -------------------------------------------------- |
  | Page background     | `#ffffff`                     | `body` (thin `2px solid #dee2e6` top border)       |
  | Title text          | `#212529`                     | `h2.heading-section` "Button #01" (32px bold)      |
  | Subheading text     | grey (smaller)                | `<small>` block subheadings (16px)                 |
  | Primary             | `#3e64ff`                     | `btn-primary` / `btn-outline-primary` (brand blue) |
  | Success             | `#94aa2a`                     | `btn-success` / outline (olive green)              |
  | Danger              | `#f0134d`                     | `btn-danger` / outline (crimson)                   |
  | Warning             | `#f1bc31`                     | `btn-warning` / outline (amber)                    |
  | Info                | `#64c4ed`                     | `btn-info` / outline (sky blue)                    |
  | Light               | `#f8f9fa`                     | `btn-light` / outline (near-white)                 |
  | Dark                | `#343a40`                     | `btn-dark` / outline (charcoal)                    |
  | Facebook            | `#4f69a2`                     | `btn-fb` social                                    |
  | Twitter             | `#69b6f0`                     | `btn-twitter` social                               |
  | LinkedIn            | `#2884ba`                     | `btn-linkedin` social                              |
  | Pinterest           | `#d03940`                     | `btn-pinterest` social                             |
  | Dribbble            | `#ea6294`                     | `btn-dribbble` social                              |
  | Solid button text   | `#ffffff`                     | all solid buttons (warning/light use `#212529`)    |
  | Outline button text | the palette color             | `btn-outline-*` — 1px border + colored text,       |
  |                     |                               | transparent bg; hover fills with the color         |
  | Round (pill)        | `border-radius: 40px`         | `.btn-round` variant                               |
  | Base button         | padding `0.375rem 0.75rem`,   | `.btn` — 1px solid transparent border, radius      |
  |                     | font-size `1rem`, line-height | `0.25rem`, transition `0.15s ease-in-out`          |
  |                     | `1.5`, radius `0.25rem`       |                                                    |
  | Small button (`sm`) | padding `0.25rem 0.5rem`,     | `.btn-sm` (custom override: 5px 10px, 12px)        |
  |                     | font-size `0.875rem`, radius  |                                                    |
  |                     | `0.2rem`                      |                                                    |
  | Large button (`lg`) | padding `0.5rem 1rem`,        | `.btn-lg` (custom override: 17px 24px, 16px)       |
  |                     | font-size `1.25rem`, radius   |                                                    |
  |                     | `0.3rem`                      |                                                    |
  | Block button        | `display:block; width:100%`   | `.btn-block`, `margin-top 0.5rem`                  |
  | Link button         | no border/bg, colored text    | `btn-link` — per-color text link style             |
  | Disabled            | `opacity`/muted,              | `.disabled`, `aria-disabled="true"`                |
  |                     | `pointer-events:none`         |                                                    |
  | Section padding     | `7em 0`                       | `.ftco-section`                                    |
  | Font                | Poppins                       | `"Poppins", Arial, sans-serif` (Google Fonts)      |

- **Fonts:** **Poppins** is the theme family used by the ftco custom rules
  (the `ionicons` font is only for glyphs). Load Poppins (weights 300–700)
  via Google Fonts `<link>` in `index.html`; icons via `lucide-react` (no
  ionicons font file).

## Requirements

### Requirement: Page structure

The system SHALL render the Palette page as a single-column, centered
document on a white background with a thin top border, in this order: the
"Button #01" title, the twelve showcase blocks, and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Palette page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white with a `2px solid #dee2e6`
  top border
- **AND** a centered title SHALL read "Button #01" (32px, bold, `#212529`)
- **AND** the page SHALL contain, in order, the blocks: Pick your style,
  Pick your size, Pick your color, Buttons with icons, Social Buttons,
  Links, Disabled Buttons, Buttons with Dropdown, Buttons Groups,
  Checkboxes Colors, Radio Buttons Colors, Block Level Buttons
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block headings

- **GIVEN** the showcase blocks are displayed
- **WHEN** the user inspects a block heading
- **THEN** each block SHALL be headed by a 16px grey subheading matching
  the reference copy ("Pick your style", "Pick your size", "Pick your
  color", "Buttons with icons", "Social Buttons", "Links", "Disabled
  Buttons", "Buttons with Dropdown", "Buttons Groups")
- **AND** the Checkboxes and Radio Buttons blocks SHALL read "Checkboxes
  Colors" and "Radio Buttons Colors" (title + "Colors" sub-line)

### Requirement: Button style variants

The system SHALL render the "Pick your style" block with the four primary
variants of the brand blue button.

#### Scenario: Style row

- **GIVEN** the "Pick your style" block is displayed
- **WHEN** the user views its row
- **THEN** a solid `Default` button SHALL render (bg `#3e64ff`, white text,
  radius `0.25rem`)
- **AND** a `Default Outline` button SHALL render (transparent bg, 1px
  `#3e64ff` border, `#3e64ff` text)
- **AND** a `Default Round` button SHALL render (solid `#3e64ff`, pill
  radius `40px`)
- **AND** an `Outline Round` button SHALL render (outline `#3e64ff`, pill
  radius `40px`)

### Requirement: Button sizes

The system SHALL render the "Pick your size" block with small, regular, and
large sizes in both solid and outline styles.

#### Scenario: Size rows

- **GIVEN** the "Pick your size" block is displayed
- **WHEN** the user views its two rows
- **THEN** the first row SHALL contain solid `Small Size`, `Regular Size`,
  and `Large Size` buttons (`btn-sm` 5px 10px/12px, default, `btn-lg`
  17px 24px/16px)
- **AND** the second row SHALL contain the same three sizes in outline
  style

### Requirement: Color palette buttons

The system SHALL render the "Pick your color" block with the seven solid
and seven outline palette colors.

#### Scenario: Color rows

- **GIVEN** the "Pick your color" block is displayed
- **WHEN** the user views its two rows
- **THEN** the first row SHALL contain solid `Primary` `Success` `Danger`
  `Warning` `Info` `Light` `Dark` buttons with the palette backgrounds
  (`#3e64ff` `#94aa2a` `#f0134d` `#f1bc31` `#64c4ed` `#f8f9fa` `#343a40`)
- **AND** solid buttons SHALL use white text, except Warning and Light
  which SHALL use dark text `#212529`
- **AND** the second row SHALL contain the same seven labels as outline
  buttons (transparent bg, 1px border + text in the palette color)

#### Scenario: Outline hover

- **GIVEN** an outline color button (e.g. `Outline Primary`)
- **WHEN** the user hovers it
- **THEN** the button SHALL fill with its palette color and the text SHALL
  flip to white (matches the reference `btn-outline-*:hover`)

### Requirement: Icon buttons

The system SHALL render the "Buttons with icons" block with icon + label
buttons in primary, success, and danger (solid + outline).

#### Scenario: Icon row

- **GIVEN** the "Buttons with icons" block is displayed
- **WHEN** the user views its row
- **THEN** the row SHALL contain `Primary`, `Outline primary`, `Success`,
  `Outline Success`, `Danger`, and `Outline danger` buttons, each with a
  lucide icon (e.g. Heart / Check) before its label
- **AND** the icon and label SHALL be vertically centered

### Requirement: Social buttons

The system SHALL render the "Social Buttons" block with the five brand
buttons (Facebook, Twitter, LinkedIn, Pinterest, Dribbble) in solid, round,
and outline-round variants with share counts.

#### Scenario: Brand rows

- **GIVEN** the "Social Buttons" block is displayed
- **WHEN** the user views its rows
- **THEN** a `Share - 8.2k` row SHALL render in Facebook blue `#4f69a2`
- **AND** a `Share - 8.5k` row SHALL render in Twitter blue `#69b6f0`
- **AND** a `Share - 8k` row SHALL render in Pinterest red `#d03940`
- **AND** rows SHALL read `Connect with Twitter`, `Connect with Linkedin`
  (`#2884ba`), `Pin it - 1k`, and `Find us on Dribbble` (`#ea6294`)
- **AND** each brand SHALL be shown in three variants: solid, round
  (pill), and outline-round

### Requirement: Link-style buttons

The system SHALL render the "Links" block with per-color text link buttons.

#### Scenario: Link row

- **GIVEN** the "Links" block is displayed
- **WHEN** the user views its row
- **THEN** the row SHALL contain `Primary link`, `Secondary link`,
  `Success link`, `Danger link`, `Warning link`, `Info link`, and `Dark
link` buttons styled as borderless text links in their palette colors
- **AND** hovering a link SHALL switch it to a darker shade of its color

### Requirement: Disabled buttons

The system SHALL render the "Disabled Buttons" block with non-interactive
large disabled buttons.

#### Scenario: Disabled row

- **GIVEN** the "Disabled Buttons" block is displayed
- **WHEN** the user views its row
- **THEN** the row SHALL contain `Primary link` and `Secondary Link` large
  disabled buttons (`aria-disabled="true"`, visually muted, no hover
  effect, not focusable/activatable)

### Requirement: Dropdown buttons

The system SHALL render the "Buttons with Dropdown" block with three
working dropdown menus.

#### Scenario: Opening a dropdown

- **GIVEN** the "Buttons with Dropdown" block is displayed
- **WHEN** the user activates the `Dropdown button` (primary)
- **THEN** a menu SHALL open below the button with items `Action`,
  `Another action`, and `Something else here`
- **AND** the toggle SHALL expose `aria-haspopup="true"` and
  `aria-expanded="true"` while open

#### Scenario: Closing a dropdown

- **GIVEN** a dropdown menu is open
- **WHEN** the user clicks outside it, presses Escape, or activates the
  toggle again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to
  `false`
- **AND** the other two dropdowns (success, danger) SHALL behave
  identically and independently

### Requirement: Button groups

The system SHALL render the "Buttons Groups" block with five segmented
groups of two joined buttons.

#### Scenario: Segmented groups

- **GIVEN** the "Buttons Groups" block is displayed
- **WHEN** the user views the rows
- **THEN** a large group SHALL join `Primary` + `Outline Primary`
- **AND** four medium groups SHALL join `Success` + `Outline Success`,
  `Danger` + `Outline Danger`, `Warning` + `Outline Warning`, and `Info` +
  `Outline Info`
- **AND** the two buttons in each group SHALL sit flush together as one
  segmented control

### Requirement: Checkbox toggles

The system SHALL render the "Checkboxes Colors" block with six custom
colored checkbox rows.

#### Scenario: Checkbox rows

- **GIVEN** the "Checkboxes Colors" block is displayed
- **WHEN** the user views the rows
- **THEN** rows SHALL read `Primary`, `Success`, `Danger`, `Warning`,
  `Info`, and `Disabled`
- **AND** each row SHALL be a custom checkbox (label + visually-hidden
  input) whose box and check glyph take the row's palette color when
  checked (`#3e64ff` `#94aa2a` `#f0134d` `#f1bc31` `#64c4ed`)
- **AND** all rows SHALL be checked by default except `Disabled`, which
  SHALL be disabled and muted

### Requirement: Radio toggles

The system SHALL render the "Radio Buttons Colors" block with six custom
colored radio rows (same palette), one selected.

#### Scenario: Radio rows

- **GIVEN** the "Radio Buttons Colors" block is displayed
- **WHEN** the user views the rows
- **THEN** the rows SHALL match the checkbox rows' colors and labels
- **AND** the first radio SHALL be selected by default, with the selection
  dot in the row's palette color

### Requirement: Block-level buttons

The system SHALL render the "Block Level Buttons" block with full-width
stacked buttons.

#### Scenario: Full-width rows

- **GIVEN** the "Block Level Buttons" block is displayed
- **WHEN** the user views the rows
- **THEN** full-width (100%) buttons SHALL stack vertically, e.g.
  `Block Level info` and `Block Level Success`
- **AND** each block button SHALL use its palette background with a
  `0.5rem` gap between rows

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all
viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Palette page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the button rows SHALL wrap onto multiple lines without
  horizontal overflow
- **AND** the section padding SHALL scale down sensibly (the reference's
  `7em` is large; reduce for small screens per repo conventions)
- **AND** the title and subheadings SHALL remain centered and readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Palette page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-palette`
- [ ] `scripts/verify-app.sh palette` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "Button #01" title → Pick
      your style → Pick your size → Pick your color → Buttons with icons →
      Social Buttons → Links → Disabled Buttons → Buttons with Dropdown →
      Buttons Groups → Checkboxes Colors → Radio Buttons Colors → Block
      Level Buttons → minimal Component Dock footer; white page, 2px
      `#dee2e6` top border, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#3e64ff`
      primary, `#94aa2a` success, `#f0134d` danger, `#f1bc31` warning,
      `#64c4ed` info, `#f8f9fa` light, `#343a40` dark, `#212529` title
      text, `#ffffff` page; social `#4f69a2` `#69b6f0` `#2884ba`
      `#d03940` `#ea6294`; pill radius 40px; base/sm/lg paddings per
      tokens table
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Palette — Button Showcase"
- [ ] Buttons: solid/outline/round variants; 3 sizes + block; icon
      buttons (lucide); link-style; disabled (`aria-disabled`, no
      interaction); working dropdowns (ARIA + Escape/outside click);
      segmented groups; custom colored checkbox + radio toggles
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 01"
      row, line 662 — Bootstrap Buttons category)
