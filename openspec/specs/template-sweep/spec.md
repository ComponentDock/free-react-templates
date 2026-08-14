# Template: Sweep (Button / UI Kit Showcase — Social Buttons with Sweep-Fill Hover)

## Purpose

Sweep is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 20" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-20/), built under a
DIFFERENT name (**Sweep** — evoking the page's signature: every button's
`:after` pseudo-element sweeps in from the left edge on hover, painting the
hover color across the button face like a sweep; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, WHITE (`#ffffff`) single-section Bootstrap 4 UI-kit
page with NO navbar, NO hero, NO images, NO footer — the **social-button
sibling of the "Bootstrap Buttons" series** (Glaze/19 is the stat-card
sibling; see the distinction note below). The page has ONE section
(`section.ftco-section`, padding `7em 0` → `div.container`) with five
stacked blocks:

1. **Page header** — `div.row.mb-4` > `div.col-md-12` >
   `h2.heading-section` **" Button #10"** (32px Poppins, dark,
   left-aligned; the leading space is in the source HTML — render the text
   as "Button #10"). The `#10` is a copy-paste ARTIFACT: the slug is
   `bootstrap-buttons-20` but the `<title>` says "Button 10" and the
   visible heading says `#10`.
2. **Pick Your Style** — `div.row.mb-5` > `div.col-md-12` >
   `h2.heading-section` containing ONLY a `<small>` "Pick Your Style"
   (16px — the `.heading-section { font-size: 32px }` custom rule is
   overridden by `.heading-section small { font-size: 16px }`, so this and
   every other block heading renders SMALL) + two `div.w-100` rows:
   - `div.w-100.mb-3` — 3 SOLID primary buttons
     (`btn mb-2 mb-md-0 btn-primary`): `Default Primary` (text only),
     `Default with icon` (`<i class="ion-ios-heart mr-3">` + label),
     icon-only (`<i class="ion-ios-heart">`, no label).
   - `div.w-100` — the same 3 buttons as `btn-outline-primary`
     (outline style): `Default Primary`, `Default with icon`, icon-only.
3. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
   `h2.heading-section > small` "Pick Your Color" (16px) + two `div.w-100`
   rows:
   - `div.w-100.mb-3` — 4 SOLID buttons: `Default Primary`
     (`btn-primary` `#3e64ff`), `Default Secondary` (`btn-secondary`
     `#5edfff`), `Default Tertiary` (`btn-tertiary` `#ff4893`), `Default
Quarternary` (`btn-quarternary` `#01d28e`) — note the source spelling
     "Quarternary".
   - `div.w-100` — the same 4 labels as `btn-outline-{color}` (white
     background, colored text + border).
4. **UNHEADED social grid** — `div.row.mb-5` > `div.col-md-12` with NO
   heading (see the heading-order artifact note below) > `div.row` of 4
   `div.col-md-3` columns. Each column stacks 3 full-width left-aligned
   buttons (`btn mb-2 {variant} {brand} text-left w-100 mb-md-3`): `Twitter`
   (`ion-logo-twitter mr-2`), `Facebook` (`ion-logo-facebook mr-2`), `Find
us on Dribbble` (`ion-logo-dribbble mr-2`). The 4 columns apply the
   style variants in order:
   - col 1: solid brand (`btn-twitter` / `btn-fb` / `btn-dribbble`)
   - col 2: outline (`btn-outline btn-{brand}` — faint black border,
     black text)
   - col 3: round (`btn-round btn-{brand}` — 40px pill radius)
   - col 4: round + outline (`btn-round btn-outline btn-{brand}`)
5. **Social Buttons** — `div.row.mb-5` > `div.col-md-12` >
   `h2.heading-section > small` "Social Buttons" (16px), followed by FIVE
   `div.col-md-12.mb-4` brand rows (siblings of the heading's col inside
   the same row), one per brand in order: Facebook, Twitter, LinkedIn,
   Pinterest, Dribbble. Each row has 7 buttons (`btn mb-2 mb-md-0 ...`):
   1. icon-only solid (`btn-fb` + `ion-logo-facebook`),
   2. icon-only round (`btn-round btn-fb`),
   3. icon-only outline (`btn-outline btn-fb`),
   4. icon-only round+outline (`btn-outline btn-fb btn-round`),
   5. labeled solid (`btn-fb` + `ion-logo-facebook mr-1` + label),
   6. labeled outline (`btn-outline btn-fb` + label),
   7. labeled link (`btn-link ml-2` + label).
      Labels per brand (source-exact): Facebook `Share - 8.2k` / `Share -
8.5k` / `Share - 8k`; Twitter `Connect with Twitter` (×3); LinkedIn
      `Connect with Linkedin` (×3 — source spelling); Pinterest `Pin it - 1k`
      (×3); Dribbble `Find us on Dribbble` (×3).

All 61 buttons are plain `<button type="button" class="btn ...">` elements.
Icons come from the **Ionicons** icon font (`css/ionicons.min.css`) — the
glyphs are font characters, NOT images; the recreation must map them to
`lucide-react` icons (see Design tokens; NOTE: lucide has no Pinterest
brand glyph — see the icon note below). JS bundle (jquery 3.3.1 + popper +
bootstrap.min.js + `js/main.js`) drives NOTHING on this page — it is a pure
static showcase (hover is CSS-only).

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **sweep-fill hover**: the custom
`.btn` base has `padding: 12px 16px`, `border-width: 1px`,
`border-radius: 5px`, `font-size: 14px`, `font-weight: 500`, the soft drop
shadow `0px 10px 20px -6px rgba(0, 0, 0, 0.12)`, `overflow: hidden`,
`position: relative`, `z-index: 0` and `transition: all 0.3s ease`; a
`.btn:after` pseudo-element (absolutely positioned, `top: 0; left: -100%;
bottom: 0; width: 100%; height: 100%; z-index: -1; transition: all 0.2s
ease`) sits off-canvas left and slides to `left: 0` on `:hover`, painting
the hover color across the button (content sits above via `.btn span {
z-index: 1 }`). Hover fills per variant: SOLID color buttons sweep their
darker hover hex (`#002ad7` / `#00c6f7` / `#e1005c` / `#016c49`) and swap
border-color to it; OUTLINE color buttons sweep the brand color and flip
text to white; SOCIAL buttons (solid AND outline) sweep WHITE and flip text
to the brand color. The four accent colors are CUSTOM (NOT Bootstrap
defaults): primary `#3e64ff` (vivid blue), secondary `#5edfff` (light
cyan), tertiary `#ff4893` (pink), quarternary `#01d28e` (green) — a
DIFFERENT palette from Glaze/19's violet/teal/magenta/lime. Social brand
colors: Twitter `#69b6f0`, Facebook `#4f69a2`, Dribbble `#ea6294`,
LinkedIn `#2884ba`, Pinterest `#d03940`. Shape modifiers: `btn-round`
(40px pill), generic `btn-outline` (transparent bg, black text,
`1px solid rgba(0,0,0,0.1)` border), `btn-link` (no border, no shadow,
black text, no underline). There is NO stat-card anatomy (that's
Glaze/19), NO tinted icon boxes (Tally/16), NO asymmetric paddle radius
(Paddle/18), NO double-ring bezel (Bezel/10), NO skew (Slant/05). Sweep
recreates the structure block-for-block with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 20" is FORBIDDEN
> as the app name. **Sweep** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14:
> no `apps/sweep` on origin/main, no `template-sweep` spec, no `sweep`
> in `docs/templates/`, no `[sweep](...)` shipped link in TEMPLATES.md).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-20/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/` (HTTP 200 —
> same nested `/bb/` subpath pattern as the sibling preps: Palette/01,
> Toggle/02, Float/03, Swell/04, Slant/05, Bezel/10, Tally/16, Pill/17,
> Paddle/18, Glaze/19). The page `<title>` is "Button 10" and the visible
> `h2` heading renders **"Button #10"** (with a leading space in the
> source) — a copy-paste ARTIFACT: the slug is `bootstrap-buttons-20` but
> the heading says `#10` (one further than Glaze/19's `#09` — the series
> numbering drifted). Fidelity mandate = render the heading exactly as the
> reference renders it (the artifact is part of the template; do NOT "fix"
> it to #20).

> HEADING-ORDER ARTIFACT (keep it): the 4-column social grid block
> (block 4) has **NO heading at all** — the DOM order is: "Pick Your
> Color" block → unheaded social grid → "Social Buttons" heading + the
> five brand rows. The "Social Buttons" heading therefore FOLLOWS the grid
> it names. Recreate the DOM order exactly (grid before its heading); do
> NOT move the heading above the grid.

> HEADING-SIZE ARTIFACT (keep it): all three block headings ("Pick Your
> Style", "Pick Your Color", "Social Buttons") are `h2.heading-section`
> whose ONLY content is a `<small>` — the custom CSS
> `.heading-section { font-size: 32px }` is overridden by
> `.heading-section small { font-size: 16px }`, so they render at **16px**
> while the page header "Button #10" (no small) renders at **32px**.
> Recreate this exactly.

> SCREENSHOT NOTE: the TEMPLATES.md screenshot
> (`bootstrap-buttons-20.jpg`, 1200×972, browser-verified 2026-08-14)
> MATCHES the live render (white page, "Button #10" heading, the blue
> solid/outline "Pick Your Style" rows, the blue/cyan/pink/green "Pick
> Your Color" rows, the 3-row × 4-column social grid, and the five
> per-brand rows of square/round/outline/link buttons). The live DOM + CSS
> is authoritative for exact colors (the screenshot renders the secondary
> cyan as purplish in the preview's antialiasing — the CSS hexes are
> ground truth).

> REFERENCE QUIRK: the reference CSS sets `min-width: 992px !important` on
> BOTH `body` and `.container` — the original is effectively a
> desktop-only showcase. The recreation SHALL still be responsive (per
> repo convention): columns stack below `md`, no horizontal overflow,
> section padding reduced on phones.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 20". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 681). Free UI-kit button
  component template. The `bootstrap-buttons-20` slug appears exactly once
  in TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-20/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/` (HTTP 200,
  18.1KB HTML, `<title>Button 10</title>`). Stylesheets:
  `css/ionicons.min.css` (Ionicons icon font — the heart/twitter/facebook/
  dribbble/linkedin/pinterest glyphs; NOT copyable — map to lucide-react),
  `css/style.css` (226KB — Bootstrap 4.3.1 + custom ftco rules; the custom
  rules at the end of the file are the token source; VERIFIED template-
  specific — bb-19's style.css has different `.btn` rules). JS: jquery
  3.3.1 + popper + bootstrap.min.js + `js/main.js` — none of it drives
  this page (pure static showcase; hover is CSS-only). Structure, copy,
  and tokens below are from the live DOM + `style.css` + a browser render
  (verified 2026-08-14).
- **Visual design (live browser render + screenshot, verified
  2026-08-14):** clean, flat, WHITE page. One section
  (`section.ftco-section`, padding `7em 0` = 112px top/bottom) →
  `div.container` (1140px at xl). Page header row `div.row.mb-4` →
  `div.col-md-12` → `h2.heading-section` **"Button #10"** (32px Poppins,
  dark, left-aligned). Then three `row.mb-5` blocks with 16px small
  headings ("Pick Your Style", "Pick Your Color", "Social Buttons") plus
  one UNHEADED `row.mb-5` (the 4-column social grid between the Pick Your
  Color block and the Social Buttons heading). All buttons share the
  signature: 5px radius, 12px/16px padding, 14px/500 Poppins, soft shadow,
  and the sweep-fill hover. The page reads like a button-design catalog:
  blue primary row, then the four-accent color row (vivid blue / light
  cyan / pink / green), then the social-brand grid and per-brand rows
  (light blue Twitter, navy Facebook, pink Dribbble, blue LinkedIn, red
  Pinterest), then the labeled share/connect/pin rows.
- **Section order (1:1 from live DOM) — single section:**
  1. **Page header** — `div.row.mb-4` > `div.col-md-12` >
     `h2.heading-section` **"Button #10"** (32px Poppins, dark; `mb-4` =
     1.5rem bottom margin; the ONLY `mb-4` row).
  2. **Pick Your Style** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Pick Your Style" (16px) +
     `div.w-100.mb-3` (3 solid `btn-primary`) + `div.w-100` (3
     `btn-outline-primary`): `Default Primary` / `Default with icon`
     (heart, `mr-3`) / icon-only (heart).
  3. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Pick Your Color" (16px) +
     `div.w-100.mb-3` (4 solid `btn-{primary,secondary,tertiary,
quarternary}`) + `div.w-100` (4 `btn-outline-{color}`): `Default
Primary` / `Default Secondary` / `Default Tertiary` / `Default
Quarternary` (source spelling).
  4. **Unheaded social grid** — `div.row.mb-5` > `div.col-md-12` (NO
     heading) > `div.row` > 4 × `div.col-md-3`, each column 3 full-width
     left-aligned buttons `btn mb-2 {variant} text-left w-100 mb-md-3`
     (`Twitter` / `Facebook` / `Find us on Dribbble`, logo icon `mr-2`):
     col 1 solid `btn-{brand}`, col 2 `btn-outline btn-{brand}`, col 3
     `btn-round btn-{brand}`, col 4 `btn-round btn-outline btn-{brand}`.
  5. **Social Buttons** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Social Buttons" (16px), then 5 ×
     `div.col-md-12.mb-4` brand rows (Facebook, Twitter, LinkedIn,
     Pinterest, Dribbble), each 7 buttons `btn mb-2 mb-md-0`: icon-only
     solid / icon-only round / icon-only outline / icon-only round+outline
     / labeled solid / labeled outline / labeled link (`ml-2`). Labels:
     `Share - 8.2k` / `Share - 8.5k` / `Share - 8k` (fb), `Connect with
Twitter` (×3), `Connect with Linkedin` (×3), `Pin it - 1k` (×3),
     `Find us on Dribbble` (×3).
- **Copy is fixed and minimal:** page header "Button #10"; block headings
  "Pick Your Style" / "Pick Your Color" / "Social Buttons"; labels
  `Default Primary` / `Default Secondary` / `Default Tertiary` / `Default
Quarternary`; brand labels as listed above. No uppercase, no lorem.

## Design tokens

### Colors

Brand palette (custom `style.css` overrides — the token source; ALL flat,
no gradients):

| Token       | Base hex  | Hover fill hex | Notes                                                  |
| ----------- | --------- | -------------- | ------------------------------------------------------ |
| primary     | `#3e64ff` | `#002ad7`      | vivid blue; solid buttons, outline-primary text/border |
| secondary   | `#5edfff` | `#00c6f7`      | light cyan; solid + outline-secondary                  |
| tertiary    | `#ff4893` | `#e1005c`      | pink; solid + outline-tertiary                         |
| quarternary | `#01d28e` | `#016c49`      | green; solid + outline-quarternary                     |
| twitter     | `#69b6f0` | — (white fill) | social brand; hover: white sweep + text `#69b6f0`      |
| fb          | `#4f69a2` | — (white fill) | social brand; hover: white sweep + text `#4f69a2`      |
| dribbble    | `#ea6294` | — (white fill) | social brand; hover: white sweep + text `#ea6294`      |
| linkedin    | `#2884ba` | — (white fill) | social brand; hover: white sweep + text `#2884ba`      |
| pinterest   | `#d03940` | — (white fill) | social brand; hover: white sweep + text `#d03940`      |
| white       | `#ffffff` | —              | page background + outline-{color} button background    |
| black       | `#000000` | —              | generic `btn-outline` text + `btn-link` text           |

Hover fills: solid color buttons sweep the hover hex (`#002ad7` /
`#00c6f7` / `#e1005c` / `#016c49`); outline color buttons sweep the brand
base hex and flip text to white; social buttons (solid or outline) sweep
`#ffffff` and flip text to the brand hex. Generic `btn-outline` border:
`1px solid rgba(0,0,0,0.1)`.

### Fonts

- **Poppins** (body AND headings — `style.css` sets
  `font-family: "Poppins", Arial, sans-serif` on `body` and `h1–h6`).
  Load Poppins via Google Fonts `<link>` in `index.html`.
- Body: 15px, `line-height: 1.8`, weight 400.
- Headings: `line-height: 1.5`, weight 400; page header 32px; block
  headings 16px (h2 > small artifact).
- Buttons: 14px, weight 500.

### Radii / shapes

- **Base button = 5px radius** (`border-radius: 5px`), `border-width:
1px`.
- **`btn-round` = 40px pill radius** (`border-radius: 40px`).
- No asymmetric corners, no stat-card icon boxes — this sibling is simple
  rectangle + pill buttons only.

### Shadows / effects

- Base: `0px 10px 20px -6px rgba(0, 0, 0, 0.12)` (soft lift).
- **The sweep-fill signature:** `.btn:after` is `position: absolute; top:
0; left: -100%; bottom: 0; width: 100%; height: 100%; z-index: -1;
transition: all 0.2s ease` — off-canvas left, slides to `left: 0` on
  `:hover` (0.2s) painting the fill color across the button; `.btn span`
  sits at `z-index: 1` above it. Button transition: `all 0.3s ease`.
- Reference `:focus` shows Bootstrap's default ring; the recreation adds
  proper `focus-visible` rings per repo a11y convention.

### Layout

- Section: `padding: 7em 0` (112px), background white (`#ffffff`),
  `div.container` (1140px max at xl).
- Page header row `mb-4`; all block rows `mb-5` (3rem); brand rows inside
  the Social Buttons block are `col-md-12 mb-4` (1.5rem gap).
- "Pick Your Style"/"Pick Your Color" buttons: `mb-2 mb-md-0` spacing
  (buttons wrap on mobile, sit inline at md+); wrapper divs `w-100 mb-3`
  (first row) and `w-100` (second row).
- Social grid: `col-md-3` (4 columns at md+, stacks below md); buttons
  full-width `w-100`, `text-left`, `mb-2 mb-md-3`.
- Brand rows: 7 buttons per row with `mb-2 mb-md-0`; the link button has
  `ml-2` (0.5rem left margin).
- Icon–label gaps: `mr-3` (0.75rem, "Default with icon"), `mr-2` (0.5rem,
  social grid), `mr-1` (0.25rem, brand-row labels).
- Reference quirk: `body { min-width: 992px !important }` AND
  `.container { min-width: 992px !important }` — desktop-only original;
  the recreation SHALL be responsive instead (see Requirements).

## Requirements

### Requirement: Page structure

The system SHALL render the Sweep page as one section on a white
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Sweep page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single section SHALL be headed **"Button #10"** (32px Poppins,
  dark, left-aligned, `mb-4`)
- **AND** the section SHALL contain, in order: the "Pick Your Style"
  block (16px small heading + 3 solid + 3 outline buttons), the "Pick
  Your Color" block (16px small heading + 4 solid + 4 outline buttons),
  the UNHEADED 4-column social grid, and the "Social Buttons" block (16px
  small heading + 5 brand rows)
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Pick Your Style block

The system SHALL render the "Pick Your Style" block with three solid and
three outline primary buttons.

#### Scenario: Style row

- **GIVEN** the Sweep page is rendered
- **WHEN** the user views the "Pick Your Style" block
- **THEN** the block heading SHALL read **"Pick Your Style"** at 16px
  Poppins (the `h2 > small` artifact — NOT 32px)
- **AND** the first row SHALL render three SOLID primary buttons in
  order: `Default Primary` (text only), `Default with icon` (heart icon
  with `mr-3` gap), and an icon-only heart button
- **AND** the second row SHALL render the same three buttons in OUTLINE
  style (`btn-outline-primary`: white background, `#3e64ff` text/border)
- **AND** all six buttons SHALL have white/colored text, 5px radius, the
  base shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`, and `12px 16px`
  padding

### Requirement: Pick Your Color block

The system SHALL render the "Pick Your Color" block with the four accent
colors in solid and outline variants.

#### Scenario: Color row

- **GIVEN** the Sweep page is rendered
- **WHEN** the user views the "Pick Your Color" block
- **THEN** the block heading SHALL read **"Pick Your Color"** at 16px
  Poppins
- **AND** the first row SHALL render four SOLID buttons in order:
  `Default Primary` (`#3e64ff`), `Default Secondary` (`#5edfff`),
  `Default Tertiary` (`#ff4893`), `Default Quarternary` (`#01d28e` —
  source spelling kept)
- **AND** the second row SHALL render the same four labels as OUTLINE
  buttons (white background, brand-colored text/border)
- **AND** each solid button SHALL have white text, 5px radius, the base
  shadow, and `12px 16px` padding

### Requirement: Social grid (unheaded)

The system SHALL render the 4-column social button grid with NO heading,
positioned between the Pick Your Color block and the "Social Buttons"
heading (DOM order preserved).

#### Scenario: Four style columns

- **GIVEN** the Sweep page is rendered
- **WHEN** the user views the social grid
- **THEN** the grid SHALL have NO heading (the "Social Buttons" heading
  SHALL come AFTER it)
- **AND** four columns SHALL render at md+ (stacking below md), each with
  three full-width left-aligned buttons: `Twitter` (twitter logo icon,
  `mr-2`), `Facebook` (facebook logo icon), `Find us on Dribbble`
  (dribbble logo icon)
- **AND** column 1 SHALL use solid brand buttons (`#69b6f0` / `#4f69a2` /
  `#ea6294` with white text)
- **AND** column 2 SHALL use outline buttons (`btn-outline`: transparent
  background, black text, `1px solid rgba(0,0,0,0.1)` border, brand icon)
- **AND** column 3 SHALL use round (40px pill) solid brand buttons
- **AND** column 4 SHALL use round outline buttons (pill + outline)

### Requirement: Social Buttons brand rows

The system SHALL render five per-brand rows (Facebook, Twitter, LinkedIn,
Pinterest, Dribbble) under the "Social Buttons" heading, each with seven
buttons.

#### Scenario: Brand row anatomy

- **GIVEN** the Sweep page is rendered
- **WHEN** the user views the "Social Buttons" block
- **THEN** the block heading SHALL read **"Social Buttons"** at 16px
  Poppins
- **AND** five brand rows SHALL render in order: Facebook, Twitter,
  LinkedIn, Pinterest, Dribbble
- **AND** each row SHALL contain 7 buttons in order: icon-only solid,
  icon-only round, icon-only outline, icon-only round+outline, labeled
  solid, labeled outline, labeled link (with `ml-2`)
- **AND** the labels SHALL be source-exact: Facebook `Share - 8.2k` /
  `Share - 8.5k` / `Share - 8k`; Twitter `Connect with Twitter` (×3);
  LinkedIn `Connect with Linkedin` (×3 — source spelling, no "d");
  Pinterest `Pin it - 1k` (×3); Dribbble `Find us on Dribbble` (×3)
- **AND** labeled buttons SHALL show the brand logo icon with an `mr-1`
  gap; icon-only buttons SHALL show only the logo icon
- **AND** each brand SHALL use its brand color: Twitter `#69b6f0`,
  Facebook `#4f69a2`, LinkedIn `#2884ba`, Pinterest `#d03940`, Dribbble
  `#ea6294`
- **AND** link buttons SHALL have no border, no shadow, and black text

### Requirement: Sweep-fill hover anatomy

Every button SHALL be a 5px-radius button with the signature sweep-fill
hover: a full-height pseudo-element slides in from the left on hover.

#### Scenario: Shared anatomy

- **GIVEN** any Sweep button is displayed
- **WHEN** the user inspects its styling
- **THEN** the button SHALL have `border-radius: 5px`, `padding: 12px
16px`, `border-width: 1px`, 14px/500 Poppins text, `overflow: hidden`,
  and the signature shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`
- **AND** a fill layer SHALL sit off-canvas left (`left: -100%`, full
  height/width, behind the content) and SHALL slide to `left: 0` on hover
  with a 0.2s transition
- **AND** on hover: solid color buttons SHALL sweep their hover hex
  (`#002ad7` / `#00c6f7` / `#e1005c` / `#016c49`) keeping white text;
  outline color buttons SHALL sweep the brand hex and flip text to white;
  social buttons (solid and outline) SHALL sweep white and flip text to
  the brand hex
- **AND** the button content (text span) SHALL render above the fill
  layer

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths (the
reference is desktop-only with `min-width: 992px !important` on `body`
and `.container` — the recreation must improve on that).

#### Scenario: Mobile layout

- **GIVEN** the Sweep page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the container SHALL be full width without horizontal overflow
- **AND** the 4-column social grid SHALL stack to a single column
- **AND** the button rows SHALL wrap with vertical gaps (`mb-2` spacing)
- **AND** the section padding SHALL be reduced (`7em` is excessive on
  phones)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sweep page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sweep`
- [ ] `scripts/verify-app.sh sweep` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): "Button #10" header → "Pick
      Your Style" (3 solid + 3 outline primary) → "Pick Your Color" (4
      solid + 4 outline) → UNHEADED 4-column social grid → "Social
      Buttons" heading + 5 brand rows → minimal Component Dock footer;
      white `#ffffff` page, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#3e64ff`, secondary `#5edfff`, tertiary `#ff4893`, quarternary
      `#01d28e` (+ hover hexes `#002ad7`/`#00c6f7`/`#e1005c`/`#016c49`),
      twitter `#69b6f0`, fb `#4f69a2`, dribbble `#ea6294`, linkedin
      `#2884ba`, pinterest `#d03940`, white `#ffffff`, black `#000000`,
      outline border `rgba(0,0,0,0.1)`
- [ ] Font: Poppins (body + headings) via Google Fonts `<link>` in
      `index.html`; body 15px; page header 32px; block headings 16px;
      buttons 14px/500; title uses the app's own title per repo
      convention (reference `<title>` "Button 10" is a generic artifact)
- [ ] Anatomy: 5px-radius buttons, `padding: 12px 16px`, border-width
      1px, `overflow: hidden`, shadow `0px 10px 20px -6px
    rgba(0,0,0,0.12)`; `btn-round` = 40px pill; `btn-outline` =
      transparent bg + black text + faint border; `btn-link` = no
      border/shadow, black text
- [ ] Sweep-fill hover implemented: fill layer slides from `left: -100%`
      to `0` on hover (0.2s); solid → hover hex fill, outline-color →
      brand fill + white text, social → white fill + brand-colored text;
      content above the fill
- [ ] Artifacts rendered EXACTLY: page header "Button #10" (slug 20 — do
      NOT "fix"); block headings at 16px via h2 > small; "Social Buttons"
      heading AFTER the unheaded social grid (DOM order kept); `Default
    Quarternary` and `Connect with Linkedin` source spellings kept;
      `Share - 8.2k` / `Share - 8.5k` / `Share - 8k` / `Pin it - 1k`
      labels exact
- [ ] Copy exact: `Default Primary` / `Default Secondary` / `Default
    Tertiary` / `Default Quarternary`; `Twitter` / `Facebook` / `Find us
    on Dribbble`; `Connect with Twitter` / `Connect with Linkedin` /
      `Pin it - 1k`
- [ ] Icons from `lucide-react` mapped from Ionicons: heart →
      Heart, logo-twitter → Twitter, logo-facebook → Facebook, logo-
      dribbble → Dribbble, logo-linkedin → Linkedin; **Pinterest has NO
      lucide brand glyph — use an inline SVG of the Pinterest "P" (or a
      close lucide stand-in) and note the substitution in the PR**; NO
      Ionicons font, NO copied CSS/HTML
- [ ] Icon–label gaps match: `mr-3` (Default with icon), `mr-2` (social
      grid), `mr-1` (brand rows); link button `ml-2`
- [ ] `focus-visible` rings added (repo a11y convention); icon-only
      buttons get accessible labels (`aria-label` — the reference has
      empty-text icon buttons); the sweep-fill hover alone is not a
      sufficient a11y indicator
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` only where they fit the
      anatomy (the reference button is custom — precedent: hostelry
      imports `cn` from the ui barrel)
- [ ] Responsive: columns stack below `md`, button rows wrap, no
      horizontal overflow, reduced section padding on phones (reference
      is `min-width: 992px` desktop-only — recreation must be responsive)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 20"
      row, line 681 — Bootstrap Buttons (20) category; single row, no
      dups)
