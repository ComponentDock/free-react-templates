# Template: Capsule (Button / UI Kit Showcase)

## Purpose

Capsule is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 12" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-12/), built under a
DIFFERENT name (**Capsule** — a capsule is a small rounded/pill-shaped
container; the template's signature is its PILL-shaped buttons: `btn-round`
and every `btn-lg` button render with `border-radius: 40px`, so the large
buttons and round variants look like capsules lying on a near-black surface,
while the base/default buttons stay perfectly square — the capsule/square
contrast is the template's identity; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a **dark** (`#111` background), single-column Bootstrap 4
UI-kit page: a 32px white heading "Button #02" at the top, followed by
**twelve** showcase blocks, each labelled by a 16px white `<small>` caption
("Pick your style", "Pick your size", "Pick your color", "Buttons with
icons", "Social Buttons", "Links", "Disabled Buttons", "Buttons with
Dropdown", "Buttons Groups", "Checkboxes", "Radio Buttons", "Block Level
Buttons"). Every button is **flat** (computed `box-shadow: none` — the
author's soft-shadow declarations are dead code overridden by
`box-shadow: none !important`), **14px**, weight **400**, padding `11px
16px`, `border-width: 1px` solid in the button's own color, `border-radius:
0px` (SQUARE) at base. The custom palette replaces Bootstrap's defaults:
primary is INDIGO `#494ca2`, success OLIVE `#94aa2a`, danger PINK-RED
`#f0134d`, warning AMBER `#f1bc31` (**white text** — not Bootstrap's dark
text), info SKY `#64c4ed`, dark `#343a40`; each solid has a darker `:focus`
shade. `btn-round` and `btn-lg` are pills (`border-radius: 40px`); `btn-sm`
is 12px/`5px 10px`. Social brand buttons (Facebook `#4f69a2`, Twitter
`#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`)
come in solid / outline / link variants with Ionicons logos. The page also
showcases colored text links, disabled buttons, Bootstrap dropdowns, button
groups, colored checkboxes/radios, and block-level buttons. There is NO
navbar, NO hero, NO images, and NO footer in the original — the whole page
is the kit showcase itself. Capsule recreates the structure section-for-
section with matching layout, tokens, typography, and content kinds (no
ColorLib assets copied; Ionicons replaced by `lucide-react` equivalents).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 12" is FORBIDDEN
> as the app name. **Capsule** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-12/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/` (HTTP 200 —
> the same nested `/bb/` subpath pattern as "Bootstrap Buttons 01"–11). The
> page `<title>` is "Button 02".

> ⚠ HEADING NUMBER ARTIFACT: the live `h2` renders **"Button #02"** (with a
> leading space in the source: `<h2 class="heading-section"> Button
#02</h2>`; the `<title>` is likewise "Button 02") — the number was
> copy-pasted from the "Bootstrap Buttons 02" sibling and never updated
> (same kind of artifact as Buoy/11's "#01 — Bootstrap 4 Buttons").
> Fidelity mandate = render the heading exactly as the reference renders
> it: **"Button #02"**. Do NOT "fix" it to "Button #12" — that would deviate
> from the reference. (The leading source whitespace is a text node and is
> invisible in the render; it does not need to be reproduced.)

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 12". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 673). Free UI-kit button-component
  template. The `bootstrap-buttons-12` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-12/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-12/` (HTTP 200,
  25.9KB HTML, `<title>Button 02</title>`, heading `Button #02` — the
  "#02" copy-paste artifact, see above). Stylesheets: `css/style.css`
  (230KB — Bootstrap 4 base + the custom dark theme; the token source),
  `css/ionicons.min.css` (46.8KB glyph font — used by the heart + social
  logo icons). JS: jQuery + Popper + Bootstrap bundle + `js/main.js` —
  only the Bootstrap dropdown behavior is actually used on this page
  (three dropdown toggles). Structure, copy, and tokens below are from the
  live DOM + both stylesheets + browser-verified computed styles
  (2026-08-14).
- **Screenshot (TEMPLATES.md `bootstrap-buttons-12.jpg`, 1200×972) —**
  viewed 2026-08-14: matches the live page — dark (`≈#111`) background,
  white headings, flat buttons, indigo primary, pill-shaped Large buttons,
  the same section order (Pick your style → Pick your size → Pick your
  color → Buttons with icons → Social Buttons …). The screenshot is
  CONSISTENT with the live DOM (unlike the outdated Buoy/BB11 screenshot),
  so both references agree: **dark, flat, capsule/pill large buttons**.
- **Visual design (live DOM + computed styles):** near-black `#111` page
  background (`body { background: #111; font-family: "Poppins", Arial,
sans-serif; font-size: 15px; line-height: 1.8; }` — Poppins is the theme
  family). One `section.ftco-section#buttons` (padding `7em 0` = 105px
  top/bottom, transparent bg) > `div.container` > rows. Top heading
  `h2.heading-section` "Button #02" — **32px, `#fff`, weight 400**,
  `margin-bottom 1.5rem` (Bootstrap `mb-4`). Every subsequent block starts
  with `h2.heading-section > small` — **16px `#fff`** caption text. Blocks
  are separated by `div.row.mb-5` (3rem). Buttons sit in `col-md-12` rows
  with `mr-md-2 mb-md-0 mb-2` spacing (0.5rem right margin on md+, 0.5rem
  bottom below md). Button anatomy: `<button type="button" class="btn …
btn-<color>">Label</button>` — label is a DIRECT text node; icons are
  `<i class="ion-ios-heart mr-1"></i>` / `<i class="ion-logo-*"></i>`
  (Ionicons glyph font) placed before or after the label. Buttons are
  FLAT — computed `box-shadow: none` on every button (the custom `.btn`
  rule's `0px 10px 20px -6px rgba(0,0,0,0.12)` and the `:hover`
  `0px 12px 20px -6px rgba(0,0,0,0.21)` shadow declarations are DEAD CODE:
  the same rule declares `box-shadow: none !important` which wins at
  computed-value time; hover changes NO shadow and NO background — the
  only per-color `:focus` rules darken the fill slightly). This is the
  opposite of the Buoy/11 floating-shadow signature — Capsule is flat.
- **Section order (1:1 from live DOM):**
  1. **Title** — `h2.heading-section` **"Button #02"** (32px white, weight
     400, left-aligned; `mb-4`).
  2. **Pick your style** — `h2 > small` caption; four buttons: `Default`
     (`btn-primary`, square), `Default Outline` (`btn-outline-primary`,
     square), `Default Round` (`btn-primary btn-round`, pill), `Outline
Round` (`btn-outline-primary btn-round`, pill).
  3. **Pick your size** — `h2 > small` caption (source has a stray `<br>`
     inside the h2 — invisible, do not reproduce); row 1: solid primary
     `Small Size` (`btn-sm`, square), `Regular Size` (base, square),
     `Large Size` (`btn-lg`, **pill**); row 2: the same three in outline
     primary.
  4. **Pick your color** — `h2 > small` caption; row 1: seven SOLID
     buttons `Primary`, `Success`, `Danger`, `Warning`, `Info`, `Light`,
     `Dark`; row 2: the same seven labels as OUTLINE buttons.
  5. **Buttons with icons** — `h2 > small` caption; six buttons with a
     heart icon: `Primary` (icon before label), `Outline primary` (icon
     before), `Success` (icon after label), `Outline Success` (icon
     after), `Danger` (icon before), `Outline danger` (icon before).
  6. **Social Buttons** — `h2 > small` caption; FIVE brand rows, each with
     four icon-only buttons (solid → `btn-fb`, solid round →
     `btn-round btn-fb`, outline → `btn-outline-fb`, outline round →
     `btn-outline-fb btn-round`) followed by three labelled buttons
     (solid / outline / link): Facebook (`Share - 8.2k` / `Share - 8.5k` /
     `Share - 8k`), Twitter (`Connect with Twitter` ×3), Linkedin
     (`Connect with Linkedin` ×3), Pinterest (`Pin it - 1k` ×3), Dribbble
     (`Find us on Dribbble` ×3). Each row is its own `col-md-12 mb-4`.
  7. **Links** — `h2 > small` caption; seven `<a role="button" class="btn
btn-link btn-<color>">` text links: `Primary link`, `Secondary
link`, `Success link`, `Danger link`, `Warning link`, `Info link`,
     `Dark link` (no border, transparent bg, colored text, `padding: 0`).
  8. **Disabled Buttons** — `h2 > small` caption; two `btn-lg disabled`
     anchor buttons: `Primary link` (primary) and `Secondary Link`
     (dark — note the capital "L" in "Link", a source typo; keep as
     authored), `aria-disabled="true"`, `opacity: 0.65`.
  9. **Buttons with Dropdown** — `h2 > small` caption; three Bootstrap
     dropdowns (`btn-primary`, `btn-success`, `btn-danger`), each a
     `Dropdown button` toggle with a caret + a menu of three items
     (`Action`, `Another action`, `Something else here`). Menu: white bg,
     `border: none`, soft shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`,
     items 13px `rgba(0,0,0,0.7)`.
  10. **Buttons Groups** — `h2 > small` caption; FIVE joined groups, each
      solid + outline + "Large"/"Medium" button: primary (`btn-group-lg`:
      `Primary` / `Outline Primary` / `Large`), success (`Success` /
      `Outline Success` / `Medium`), danger (`Danger` / `Outline Danger` /
      `Medium`), warning (`Warning` / `Outline Warning` / `Medium`), info
      (`Info` / `Outline Info` / `Medium`). Group members touch
      (Bootstrap `margin-left: -1px` on non-first members).
  11. **Checkboxes (Colors)** — `col-md-4` beside Radio Buttons; `h2`
      "Checkboxes" + `small` "Colors"; six custom checkboxes: `Primary`,
      `Success`, `Danger`, `Warning`, `Info` (all checked), `Disabled`
      (dark variant, checked, disabled, `opacity: 0.65`). Custom style:
      native input hidden (`visibility: hidden`, absolutely positioned), a
      large glyph "box"/"check" in the variant color (`font-size: 37px`
      unchecked / `30px` checked), label `<span>` with `margin-left:
35px`.
  12. **Radio Buttons (Colors)** — `col-md-4` beside Checkboxes; `h2`
      "Radio Buttons" + `small` "Colors"; six custom radios: `Primary`,
      `Success`, `Danger`, `Warning`, `Info` (checked), `Disabled` (dark,
      disabled). Custom style: native input off-screen (`left: -9999px`),
      `label { padding-left: 28px; line-height: 20px }`, an 18px circle
      (border `2px solid rgba(255,255,255,0.2)`, bg `#000`), and a 12px
      inner dot in the variant color that scales in when checked
      (`transition: all 0.2s ease`).
  13. **Block Level Buttons** — `h2 > small` caption; `col-md-6` with two
      `btn-lg btn-block` buttons (block, width 100%): `Block Level info`
      (warning amber) and `Block Level Success` (info sky) — note the
      mismatched labels are source copy (keep as authored).
  14. **Footer** — the original has NO footer; per monorepo convention add
      a minimal attribution footer linking
      `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** only Bootstrap's dropdown toggle — clicking
  a `Dropdown button` opens its menu; clicking again (or outside) closes
  it; menus are `position: absolute` white panels. Recreate with React
  state (one open dropdown at a time, `aria-expanded` on the toggle,
  `aria-haspopup="menu"`, close on outside click or Escape per repo
  conventions). Everything else is static — hover/focus effects via CSS
  only (no jQuery).
- **Design tokens (from `style.css` custom overrides + Bootstrap defaults +
  computed styles):**

  | Token               | Value                                  | Usage                                             |
  | ------------------- | -------------------------------------- | ------------------------------------------------- |
  | Page background     | `#111` (near-black)                    | `body` — dark theme page                          |
  | Body font           | **Poppins**, Arial, sans-serif         | body + headings (`"Poppins", Arial, sans-serif`)  |
  | Body text           | 15px, `line-height: 1.8`, weight 400   | body                                              |
  | Section padding     | `7em 0` (105px top/bottom)             | `.ftco-section`                                   |
  | Title heading       | 32px, `#fff`, weight **400**           | `h2.heading-section` "Button #02"                 |
  | Block captions      | 16px, `#fff`                           | `h2.heading-section small` (Pick your style, …)   |
  | Button base         | 14px, weight **400**, `11px 16px`,     | `.btn` — `border-width: 1px` solid = button color |
  |                     | `border-radius: 0px` (SQUARE),         | (e.g. `border: 1px solid #494ca2` on primary),    |
  |                     | `cursor: pointer`, `overflow: hidden`, | NO shadow (flat)                                  |
  |                     | **NO box-shadow (FLAT — computed       |                                                   |
  |                     | `none`; author's soft-shadow rules     |                                                   |
  |                     | are dead code)**, no transition        |                                                   |
  | Round variant       | `border-radius: 40px` (PILL)           | `.btn-round` — and ALL `btn-lg` buttons           |
  | Small button (`sm`) | 12px, padding `5px 10px`, SQUARE       | `.btn-sm`                                         |
  | Large button (`lg`) | 16px, padding `17px 24px`, **PILL**    | `.btn-lg` (radius 40px even without `btn-round`)  |
  | Block button        | `display: block; width: 100%`          | `.btn-block` (Bootstrap)                          |
  | Link buttons        | transparent bg, `border: none`,        | `.btn.btn-link` — colored text, `padding: 0`      |
  |                     | `box-shadow: none`                     |                                                   |
  | Disabled            | `opacity: 0.65`                        | `.disabled` / `:disabled` (Bootstrap)             |
  | Primary (indigo)    | bg `#494ca2`, text `#fff`; focus       | `btn-primary` — NOT Bootstrap blue                |
  |                     | `#414490`                              |                                                   |
  | Secondary           | `#6c757d` / white; focus `#60686f`     | `btn-secondary`                                   |
  | Success (olive)     | `#94aa2a` / white; focus `#829625`     | `btn-success` — NOT Bootstrap green               |
  | Danger (pink-red)   | `#f0134d` / white; focus `#dc0e44`     | `btn-danger`                                      |
  | Warning (amber)     | `#f1bc31` / **white text**; focus      | `btn-warning` — white text, NOT Bootstrap dark    |
  |                     | `#efb419`                              |                                                   |
  | Info (sky)          | `#64c4ed` / white; focus `#4dbbea`     | `btn-info`                                        |
  | Light               | `#f8f9fa` / text `#212529` (dark)      | `btn-light` (Bootstrap default, readable on dark) |
  | Dark                | `#343a40` / white; focus `#292d32`     | `btn-dark`                                        |
  | Outline variant     | colored text + 1px colored border,     | `btn-outline-<color>` — hover/focus: fill solid + |
  |                     | transparent bg                         | white text (Light hover keeps `#f8f9fa` + dark    |
  |                     |                                        | text per Bootstrap)                               |
  | Social Facebook     | `#4f69a2` / white                      | `btn-fb`, `btn-outline-fb`, `btn-link-fb`         |
  | Social Twitter      | `#69b6f0` / white                      | `btn-twitter`, `btn-outline-twitter`,             |
  |                     |                                        | `btn-link-twitter`                                |
  | Social Linkedin     | `#2884ba` / white                      | `btn-linkedin`, `btn-outline-linkedin`,           |
  |                     |                                        | `btn-link-linkedin`                               |
  | Social Pinterest    | `#d03940` / white                      | `btn-pinterest`, `btn-outline-pinterest`,         |
  |                     |                                        | `btn-link-pinterest`                              |
  | Social Dribbble     | `#ea6294` / white                      | `btn-dribbble`, `btn-outline-dribbble`,           |
  |                     |                                        | `btn-link-dribbble`                               |
  | Checkbox color      | per variant (same palette)             | `.checkbox-<color>` — checked glyph colored;      |
  |                     |                                        | disabled `opacity: 0.65`                          |
  | Radio color         | per variant (same palette)             | `.radio-<color>` — ring border 2px                |
  |                     |                                        | `rgba(255,255,255,0.2)` on `#000` circle, 12px    |
  |                     |                                        | dot scales in on check                            |
  | Dropdown menu       | white bg, `border: none`, shadow       | `0px 10px 34px -20px rgba(0,0,0,0.41)`; items     |
  |                     |                                        | 13px `rgba(0,0,0,0.7)`                            |
  | Button spacing      | `mr-md-2 mb-md-0 mb-2` (0.5rem right   | on md+; 0.5rem bottom below md)                   |
  | Row spacing         | `mb-5` (3rem) between blocks           | `div.row.mb-5`                                    |

- **Fonts:** **Poppins** is the theme family (body + headings). Load
  Poppins via Google Fonts `<link>` in `index.html`. Icons: the original
  uses the Ionicons glyph font (`ion-ios-heart`, `ion-logo-facebook`,
  `ion-logo-twitter`, `ion-logo-linkedin`, `ion-logo-pinterest`,
  `ion-logo-dribbble`) — replace with `lucide-react` equivalents
  (`Heart`, `Facebook`, `Twitter`, `Linkedin`, `Pinterest`, `Dribbble`);
  NO icon font files copied.

## Requirements

### Requirement: Page structure

The system SHALL render the Capsule page as a single-column, centered
document on a near-black background, in this order: the "Button #02"
title, the twelve showcase blocks (Pick your style, Pick your size, Pick
your color, Buttons with icons, Social Buttons, Links, Disabled Buttons,
Buttons with Dropdown, Buttons Groups, Checkboxes, Radio Buttons, Block
Level Buttons), and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Capsule page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be near-black (`#111`)
- **AND** a left-aligned title SHALL read "Button #02" (32px, white; the
  "#02" number is a reference artifact and MUST be kept as-is — do NOT
  "fix" it to "#12")
- **AND** the page SHALL contain, in order, the twelve blocks listed
  above, each introduced by its 16px white caption
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block captions

- **GIVEN** the showcase blocks are displayed
- **WHEN** the user inspects a block
- **THEN** each block SHALL be labelled by a 16px white caption reading
  `Pick your style`, `Pick your size`, `Pick your color`, `Buttons with
icons`, `Social Buttons`, `Links`, `Disabled Buttons`, `Buttons with
Dropdown`, `Buttons Groups`, `Checkboxes`, `Radio Buttons`, or `Block
Level Buttons` respectively

### Requirement: Style variants

The system SHALL render the "Pick your style" block with four primary
buttons demonstrating square vs pill shapes in solid and outline forms.

#### Scenario: Style row

- **GIVEN** the Pick your style block is displayed
- **WHEN** the user views its four buttons
- **THEN** a `Default` button SHALL render square (`border-radius: 0`),
  solid indigo `#494ca2` with white text
- **AND** a `Default Outline` button SHALL render square with a 1px
  `#494ca2` border, transparent background, and `#494ca2` text
- **AND** a `Default Round` button SHALL render as a pill
  (`border-radius: 40px`), solid indigo
- **AND** an `Outline Round` button SHALL render as a pill with a 1px
  `#494ca2` border, transparent background, and `#494ca2` text
- **AND** all four SHALL be 14px, weight 400, padding `11px 16px`, flat
  (no box-shadow)

### Requirement: Size variants

The system SHALL render the "Pick your size" block with two rows (solid
and outline) of small, regular, and large primary buttons.

#### Scenario: Size rows

- **GIVEN** the Pick your size block is displayed
- **WHEN** the user views the rows
- **THEN** a first row SHALL contain solid indigo buttons `Small Size`
  (12px, `5px 10px`, square), `Regular Size` (14px, `11px 16px`, square),
  and `Large Size` (16px, `17px 24px`, **pill** radius 40px)
- **AND** a second row SHALL contain the same three labels as outline
  primary buttons with identical sizing
- **AND** every button SHALL be flat (no box-shadow)

### Requirement: Color palette

The system SHALL render the "Pick your color" block with two rows of
seven buttons (solid and outline) using the custom Capsule palette.

#### Scenario: Color rows

- **GIVEN** the Pick your color block is displayed
- **WHEN** the user views the rows
- **THEN** a first row SHALL contain solid buttons `Primary`, `Success`,
  `Danger`, `Warning`, `Info`, `Light`, `Dark`
- **AND** each solid button SHALL use its reference background (Primary
  `#494ca2`, Success `#94aa2a`, Danger `#f0134d`, Warning `#f1bc31`, Info
  `#64c4ed`, Light `#f8f9fa`, Dark `#343a40`)
- **AND** all solid buttons SHALL use white text EXCEPT `Light`, which
  SHALL use dark text `#212529` (Bootstrap default — the reference does
  NOT override Light's text)
- **AND** a second row SHALL contain the same seven labels as outline
  buttons (transparent background, 1px border + colored text in the
  variant color)
- **AND** all buttons SHALL be 14px, weight 400, square, flat, with a 1px
  solid border in the button's own color

#### Scenario: Focus shade

- **GIVEN** a solid color button is focused
- **WHEN** the user tabs to it
- **THEN** the button SHALL darken to its reference focus shade (Primary
  `#414490`, Secondary `#60686f`, Success `#829625`, Danger `#dc0e44`,
  Warning `#efb419`, Info `#4dbbea`, Dark `#292d32`)
- **AND** no other visual change SHALL occur (no shadow, no border change)

### Requirement: Icon buttons

The system SHALL render the "Buttons with icons" block with six buttons
pairing a heart icon with solid/outline variants.

#### Scenario: Icon row

- **GIVEN** the Buttons with icons block is displayed
- **WHEN** the user views the six buttons
- **THEN** buttons SHALL read `Primary`, `Outline primary`, `Success`,
  `Outline Success`, `Danger`, and `Outline danger`
- **AND** `Primary`, `Outline primary`, `Danger`, and `Outline danger`
  SHALL place the heart icon BEFORE the label
- **AND** `Success` and `Outline Success` SHALL place the heart icon AFTER
  the label
- **AND** the icon SHALL use the button's text color and sit at the
  reference gap (≈0.25rem) from the label

### Requirement: Social buttons

The system SHALL render the "Social Buttons" block with five brand rows —
Facebook, Twitter, Linkedin, Pinterest, Dribbble — each with four
icon-only buttons and three labelled buttons in solid, outline, and link
variants.

#### Scenario: Brand rows

- **GIVEN** the Social Buttons block is displayed
- **WHEN** the user views each brand row
- **THEN** each row SHALL contain four icon-only buttons (solid, solid
  round, outline, outline round) using the brand icon
- **AND** three labelled buttons (solid, outline, link) with the brand's
  copy: Facebook `Share - 8.2k` / `Share - 8.5k` / `Share - 8k`, Twitter
  `Connect with Twitter` ×3, Linkedin `Connect with Linkedin` ×3,
  Pinterest `Pin it - 1k` ×3, Dribbble `Find us on Dribbble` ×3
- **AND** each brand SHALL use its reference color (Facebook `#4f69a2`,
  Twitter `#69b6f0`, Linkedin `#2884ba`, Pinterest `#d03940`, Dribbble
  `#ea6294`)
- **AND** solid buttons SHALL be filled with the brand color + white text;
  outline buttons SHALL be transparent with a 1px brand-colored border and
  brand-colored text; link buttons SHALL be borderless brand-colored text
- **AND** the round icon-only buttons SHALL be pills (`border-radius:
40px`); all others SHALL be square

### Requirement: Link buttons

The system SHALL render the "Links" block with seven colored text links.

#### Scenario: Link row

- **GIVEN** the Links block is displayed
- **WHEN** the user views the row
- **THEN** links SHALL read `Primary link`, `Secondary link`, `Success
link`, `Danger link`, `Warning link`, `Info link`, `Dark link`
- **AND** each SHALL render as an `<a>` with no border, transparent
  background, no shadow, `padding: 0`, and text in its variant color
  (Primary `#494ca2`, Secondary `#6c757d`, Success `#94aa2a`, Danger
  `#f0134d`, Warning `#f1bc31`, Info `#64c4ed`, Dark `#343a40`)

### Requirement: Disabled buttons

The system SHALL render the "Disabled Buttons" block with two disabled
large buttons.

#### Scenario: Disabled row

- **GIVEN** the Disabled Buttons block is displayed
- **WHEN** the user views the row
- **THEN** two large (pill) buttons SHALL read `Primary link` (primary)
  and `Secondary Link` (dark — capital "L" is a reference typo, keep as
  authored)
- **AND** both SHALL be disabled with `opacity: 0.65` and
  `aria-disabled="true"` (non-interactive)

### Requirement: Dropdown buttons

The system SHALL render the "Buttons with Dropdown" block with three
dropdown toggles (primary, success, danger) whose menus open on click.

#### Scenario: Opening a dropdown

- **GIVEN** the Buttons with Dropdown block is displayed
- **WHEN** the user clicks a `Dropdown button` toggle
- **THEN** a white menu SHALL open below the toggle with items `Action`,
  `Another action`, and `Something else here` (13px, `rgba(0,0,0,0.7)`,
  soft shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`)
- **AND** the toggle SHALL carry `aria-expanded="true"` and
  `aria-haspopup="menu"`

#### Scenario: Closing a dropdown

- **GIVEN** a dropdown menu is open
- **WHEN** the user clicks the toggle again, clicks outside, or presses
  Escape
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to
  `false`

### Requirement: Button groups

The system SHALL render the "Buttons Groups" block with five joined
groups, each a solid + outline + labelled button.

#### Scenario: Group rows

- **GIVEN** the Buttons Groups block is displayed
- **WHEN** the user views the five groups
- **THEN** the groups SHALL be, in order: primary (`Primary` / `Outline
Primary` / `Large`, large size), success (`Success` / `Outline Success`
  / `Medium`), danger (`Danger` / `Outline Danger` / `Medium`), warning
  (`Warning` / `Outline Warning` / `Medium`), info (`Info` / `Outline
Info` / `Medium`)
- **AND** the buttons in each group SHALL be joined (touching, no gap,
  shared border-radius treatment like Bootstrap's `-1px` margin trick)
- **AND** the primary group SHALL use large sizing (16px, pill radius);
  the others SHALL use base sizing (14px, square)

### Requirement: Checkboxes

The system SHALL render the "Checkboxes" column with six custom
color-coded checkboxes.

#### Scenario: Checkbox list

- **GIVEN** the Checkboxes column is displayed
- **WHEN** the user views the list
- **THEN** checkboxes SHALL be labelled `Primary`, `Success`, `Danger`,
  `Warning`, `Info`, and `Disabled`
- **AND** each SHALL show a colored check glyph in its variant color
  (Primary `#494ca2`, Success `#94aa2a`, Danger `#f0134d`, Warning
  `#f1bc31`, Info `#64c4ed`, Disabled `#343a40`)
- **AND** the first five SHALL be checked; `Disabled` SHALL be checked and
  disabled with `opacity: 0.65`
- **AND** the label SHALL sit ≈35px to the right of the check glyph

### Requirement: Radio buttons

The system SHALL render the "Radio Buttons" column with six custom
color-coded radios.

#### Scenario: Radio list

- **GIVEN** the Radio Buttons column is displayed
- **WHEN** the user views the list
- **THEN** radios SHALL be labelled `Primary`, `Success`, `Danger`,
  `Warning`, `Info`, and `Disabled`
- **AND** each SHALL show an 18px circle (2px ring
  `rgba(255,255,255,0.2)` on a `#000` fill) with a 12px inner dot in the
  variant color (same palette as checkboxes)
- **AND** the first five SHALL be checked (dot visible); `Disabled` SHALL
  be disabled with `opacity: 0.65`
- **AND** the label SHALL sit ≈28px to the right of the circle

### Requirement: Block-level buttons

The system SHALL render the "Block Level Buttons" block with two
full-width large buttons.

#### Scenario: Block row

- **GIVEN** the Block Level Buttons block is displayed
- **WHEN** the user views the row
- **THEN** two buttons SHALL render at `display: block; width: 100%`,
  large size (pill), reading `Block Level info` (warning amber `#f1bc31`)
  and `Block Level Success` (info sky `#64c4ed`) — the mismatched labels
  are reference copy, keep as authored

### Requirement: Flat styling

The system SHALL render every button flat — no drop shadows — matching
the reference's computed styles.

#### Scenario: No shadows

- **GIVEN** any button is displayed
- **WHEN** the user inspects it
- **THEN** the button SHALL have `box-shadow: none` at rest, on hover, and
  on focus (this is the template's signature — the opposite of the Buoy/11
  floating-shadow sibling; do NOT add shadows)

### Requirement: Responsive behavior

The system SHALL keep the single-column kit layout usable at all viewport
widths.

#### Scenario: Mobile layout

- **GIVEN** the Capsule page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** button rows SHALL wrap without horizontal overflow (the
  reference's `mb-2` bottom margin on small screens)
- **AND** the Checkboxes and Radio Buttons columns SHALL stack
  (full width each)
- **AND** the block-level buttons SHALL keep spanning the content width
- **AND** the section padding SHALL scale down sensibly (the reference's
  `7em 0` is tall; reduce for small screens per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Capsule page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the dark kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-capsule`
- [ ] `scripts/verify-app.sh capsule` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "Button #02" title → Pick
      your style → Pick your size → Pick your color → Buttons with icons →
      Social Buttons → Links → Disabled Buttons → Buttons with Dropdown →
      Buttons Groups → Checkboxes → Radio Buttons → Block Level Buttons →
      minimal Component Dock footer; near-black `#111` page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#494ca2` (focus `#414490`), secondary `#6c757d` (`#60686f`),
      success `#94aa2a` (`#829625`), danger `#f0134d` (`#dc0e44`),
      warning `#f1bc31` (`#efb419`, WHITE text), info `#64c4ed`
      (`#4dbbea`), light `#f8f9fa` (dark text `#212529`), dark `#343a40`
      (`#292d32`), social fb `#4f69a2` / twitter `#69b6f0` / linkedin
      `#2884ba` / pinterest `#d03940` / dribbble `#ea6294`
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Capsule — Button Showcase"
- [ ] Buttons: base 14px weight 400 `11px 16px` SQUARE `border-radius: 0`,
      1px solid border in button color, FLAT (`box-shadow: none` — do NOT
      add shadows; unlike Buoy/11); `btn-sm` 12px `5px 10px` square;
      `btn-lg` 16px `17px 24px` PILL (40px); `btn-round` = pill; outline =
      transparent bg + colored border/text, hover fills; link = borderless
      colored text `padding: 0`; disabled = `opacity: 0.65`
- [ ] Interactions: three dropdowns open/close on click (React state,
      aria-expanded/haspopup, close on outside click/Escape); everything
      else static CSS (hover/focus only) — NO jQuery/Bootstrap JS
- [ ] Icons from `lucide-react` (Heart, Facebook, Twitter, Linkedin,
      Pinterest, Dribbble) — NO Ionicons font, NO copied glyph CSS
- [ ] Checkboxes/radios: custom colored variants with the Capsule palette
      (native inputs visually hidden per reference), Disabled variant with
      `opacity: 0.65`
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 12"
      row, line 673 — Bootstrap Buttons category; slug appears exactly
      once, no dup rows)
