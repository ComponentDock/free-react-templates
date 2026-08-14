# Template: Paddle (Button / UI Kit Showcase — Paddle Buttons)

## Purpose

Paddle is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 18" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-18/), built under a
DIFFERENT name (**Paddle** — evoking the page's signature: every base button
is a _paddle_ shape, `border-radius: 0 40px 0 40px` — top-right and
bottom-left corners rounded 40px, top-left and bottom-right squared — with a
soft drop shadow `0 10px 20px -6px rgba(0, 0, 0, 0.12)` that deepens to
`0 12px 20px -6px rgba(0, 0, 0, 0.21)` on hover; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-section Bootstrap 4 UI-kit page with
NO navbar, NO hero, NO images, NO footer. It is the **most complete** of the
"Bootstrap Buttons" series: one page header (`h2.heading-section`
**"Button #08"**, 32px Poppins — a copy-paste ARTIFACT: the slug is
`bootstrap-buttons-18` and the `<title>` says "Button 08", but the visible
heading says `#08`), then **10 stacked blocks** (`div.row.mb-5` inside
`div.container` inside `section.ftco-section#buttons`), each headed by an
`h2.heading-section` containing only a `<small>` (16px — the subsection
headings render SMALL, see the artifact note below):

1. **Tags & Pointers** — four small buttons: `New` (red pill
   `btn-secondary btn-sm btn-round`), `Sale` (orange ribbon/tag
   `btn-tertiary btn-sm btn-tag` — a CSS triangle pointer on the right
   edge), `Read more` (blue `btn-primary btn-sm` with a hidden arrow icon
   `.icon-effect` that slides in on hover), `278,645` (ghost
   `btn-outline btn-sm`).
2. **Pick Your Style** — five buttons: `Default` (solid primary), `Default`
   (ghost outline), `Default with icon` (round primary + heart icon),
   `Like` (solid primary + heart icon + `<span class="sr-only">`), `Default
with icon` (ghost outline + heart icon).
3. **Pick Your Size** — two rows of three: primary (Small/Regular/Large)
   then outline (Small/Regular/Large), labeled `Default Small`, `Default
Regular`, `Default Large`.
4. **Pick Your Color** — four buttons: `Default Primary` (`#4ba1fa`),
   `Default Secondary` (`#f9243f`), `Default Tertiary` (`#fc6946`), `Default
Gradient` (`btn-quarternary` — labeled "Gradient" but the CSS is a FLAT
   lime `#a7e52d`; another copy artifact, keep the label).
5. **Pagination Button** — `.block-27` circular pagination: `<` `1` `2`
   `3` `4` `5` `>`; 40px circles, 1px `#e6e6e6` border, gray text; page 1
   active = `#4ba1fa` fill, white text, transparent border.
6. **Dropdown Buttons** — four full-width round dropdown toggles (`Dropdown
button`) in primary/secondary/tertiary/quarternary colors, each with a
   borderless white dropdown menu (`Action` / `Another action` / `Something
else here`), shadow `0 10px 34px -20px rgba(0,0,0,0.41)`.
7. **Group Buttons** — two joined button groups: `Button 1` /
   `Outline Button` / `Button 1` (primary), `Button 2` / `Outline Button` /
   `Button 2` (secondary).
8. **Checkboxes** — five custom checkboxes (`Primary` / `Success` /
   `Danger` / `Warning` / `Disabled`) in the five brand colors (primary,
   secondary, tertiary, quarternary, dark); first four checked, last one
   checked + disabled.
9. **Radios Buttons** (sic — no "Button" on the plural) — five custom
   radios with the same five labels/colors, all checked (one per row, each
   its own `name` group).
10. **Social Buttons** — an UNHEADED row of four 3-button columns (solid /
    outline / round / round-outline) of full-width left-aligned `Twitter`,
    `Facebook`, `Find us on Dribbble` buttons (logo icon + label), followed
    by the headed "Social Buttons" block with five networks × seven
    variants: icon-only solid / icon-only round / icon-only outline /
    icon-only round-outline / solid with count text / outline with count
    text / link-style with count text — Facebook (`Share - 8.2k` / `8.5k` /
    `8k`), Twitter (`Connect with Twitter` ×3), Linkedin (`Connect with
Linkedin` ×3), Pinterest (`Pin it - 1k` ×3), Dribbble (`Find us on
Dribbble` ×3).

All buttons are plain `<button type="button" class="btn ...">` elements.
Icons come from the **Ionicons** icon font (`css/ionicons.min.css`) — the
logo glyphs, the heart, and the checkbox glyphs are font characters, NOT
images; the recreation must map them to `lucide-react` icons (see Design
tokens). JS bundle (jquery 3.3.1 + popper + bootstrap.min.js + `js/main.js`)
drives only the dropdowns (Bootstrap's dropdown plugin).

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **asymmetric paddle button**:
`.btn` has `border-radius: 0 40px 0 40px` (TL 0 / TR 40px / BR 0 / BL 40px —
the only sibling with opposite-corner rounding; Pill/17 is a full pill
`30px`, Slant/05 skews, Bezel/10 has a double ring, Swell/04 white-washes,
Tally/16 is stat cards), `padding: 12px 20px`, `font-size: 14px`,
`font-weight: 500`, `border-width: 1px`, and the signature soft shadow
`0 10px 20px -6px rgba(0, 0, 0, 0.12)`; on hover/focus the shadow deepens
(`0 12px 20px -6px rgba(0, 0, 0, 0.21)`) and the background shifts to the
per-color hover hex. `.btn-round` = full pill `40px`. `.btn-tag` =
`border-radius: 2px` + a ribbon: a white 5px dot at the right edge
(`:before`) and a CSS triangle pointer (`:after`, `border: 14px 0 14px 10px`
in the tertiary color) hanging off the right side. `.btn-sm` = `5px 20px` /
12px, `.btn-lg` = `17px 24px` / 16px (both KEEP the asymmetric radius — the
later `.btn` rule wins). `.icon-effect` = `opacity: 0`, slides to
`opacity: 1; margin-left: 10px` on hover (used on the "Read more" arrow).
The brand palette is four flat colors — sky blue `#4ba1fa`, red `#f9243f`,
orange `#fc6946`, lime `#a7e52d` — on **white** `#ffffff`, **Poppins**
font family, and a clean flat UI-kit aesthetic. Paddle recreates the
structure section-for-section with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 18" is FORBIDDEN
> as the app name. **Paddle** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14:
> no `apps/paddle` on origin/main, no `template-paddle` spec, no `paddle`
> in `docs/templates/`, no `[paddle](...)` shipped link in TEMPLATES.md).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-18/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-18/` (HTTP 200 —
> same nested `/bb/` subpath pattern as the sibling preps: Palette/01,
> Toggle/02, Float/03, Swell/04, Slant/05, Bezel/10, Tally/16, Pill/17).
> The page `<title>` is "Button 08" and the visible `h2` heading renders
> **"Button #08"** — a copy-paste ARTIFACT: the slug is
> `bootstrap-buttons-18` but the heading says `#08` and the title `08`.
> Fidelity mandate = render the heading exactly as the reference renders
> it (the artifact is part of the template; do NOT "fix" it to #18).

> HEADING ARTIFACT (keep it): every subsection heading is an
> `h2.heading-section` whose ONLY content is a `<small>` — the custom CSS
> `.heading-section { font-size: 32px }` is overridden by
> `.heading-section small { font-size: 16px }`, so the subsection headings
> ("Tags & Pointers", "Pick Your Style", …) actually render at **16px**
> while the page header "Button #08" (no small) renders at **32px**.
> Recreate this exactly (a 16px Poppins subtitle-style heading per block).

> SCREENSHOT NOTE: the TEMPLATES.md screenshot
> (`bootstrap-buttons-18.jpg`, 1200×972, browser-verified 2026-08-14)
> MATCHES the live render (white page, "Button #08" heading, pill/paddle
> buttons, the blue active pagination circle, no navbar, no footer). The
> static screenshot reads slightly "flatter" (shadows less prominent) than
> the live render — the live DOM + CSS is authoritative.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 18". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 679). Free UI-kit button
  component template. The `bootstrap-buttons-18` slug appears exactly once
  in TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-18/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-18/` (HTTP 200,
  24.9KB HTML, `<title>Button 08</title>`). Stylesheets:
  `css/ionicons.min.css` (Ionicons icon font — the logo/heart/checkbox
  glyphs; NOT copyable — map to lucide-react), `css/style.css` (229KB —
  Bootstrap 4.3.1 + custom ftco rules; the custom rules at the end of the
  file are the token source). JS: jquery 3.3.1 + popper + bootstrap.min.js
  - `js/main.js` — only the dropdowns are interactive (Bootstrap dropdown
    plugin); everything else is a pure static showcase (hover is CSS-only).
    Structure, copy, and tokens below are from the live DOM + `style.css` +
    computed styles in a live browser render (verified 2026-08-14).
- **Visual design (live browser render + screenshot, verified
  2026-08-14):** extremely clean, flat, white (`#fff`) page. One section
  (`section.ftco-section#buttons`, padding `7em 0` = 105px top/bottom) →
  `div.container` → page header `row.mb-4` > `col-md-12` >
  `h2.heading-section` **"Button #08"** (32px Poppins, dark, left-aligned).
  Then ten `row.mb-5` blocks, each headed by a 16px small-styled heading,
  each showing its component variant set: tag/pointer buttons, icon
  variants, size matrix, color matrix, circular pagination, dropdowns,
  button groups, checkboxes, radios, and the big social section. Every
  base button has the same soft drop shadow and the asymmetric paddle
  silhouette; the full pill (`btn-round`) and the tag ribbon
  (`btn-tag`) are the two variant shapes. The page reads like a complete
  Bootstrap 4 component style guide.
- **Section order (1:1 from live DOM) — single section `#buttons`:**
  1. **Page header** — `div.container` > `div.row.mb-4` > `div.col-md-12`
     > `h2.heading-section` **"Button #08"** (32px Poppins; the ONLY
     > `mb-4` row — all blocks below are `mb-5`).
  2. **Tags & Pointers** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section > small` "Tags & Pointers" (16px) + 4 buttons:
     `New` (`btn-secondary btn-sm btn-round`), `Sale`
     (`btn-tertiary btn-sm btn-tag`), `Read more` (`btn-primary btn-sm` +
     `<i class="icon-effect ion-ios-arrow-round-forward">`), `278,645`
     (`btn-outline btn-sm`). Buttons use `mb-2 mb-md-0 mr-3`/`mr-4`
     spacing.
  3. **Pick Your Style** — 5 buttons: `Default` (`btn-primary`), `Default`
     (`btn-outline`), `Default with icon` (`btn-primary btn-round` +
     `<i class="ion-ios-heart mr-1">`), `Like` (`btn-primary` +
     `<i class="ion-ios-heart">` + `<span class="sr-only">`), `Default
with icon` (`btn-outline` + `<i class="ion-ios-heart mr-1">`).
  4. **Pick Your Size** — two `div.d-block.mb-3` rows: (a) `btn-primary
btn-sm` / `btn-primary` / `btn-primary btn-lg`; (b) `btn-outline
btn-sm` / `btn-outline` / `btn-outline btn-lg` — all labeled
     `Default Small` / `Default Regular` / `Default Large`.
  5. **Pick Your Color** — 4 buttons: `Default Primary` (`btn-primary`),
     `Default Secondary` (`btn-secondary`), `Default Tertiary`
     (`btn-tertiary`), `Default Gradient` (`btn-quarternary` — flat lime,
     NOT a real gradient).
  6. **Pagination Button** — `div.block-27` > `ul` > `li`: `<` (`a`), `1`
     (`span`, `li.active`), `2`..`5` (`a`), `>` (`a`). 40×40 circles,
     `border: 1px solid #e6e6e6`, gray text; `li.active` = background
     `#4ba1fa`, white text, transparent border.
  7. **Dropdown Buttons** — `div.col-md-12` (heading) + 4 ×
     `div.col-md-3` > `div.dropdown.d-block` > `button.btn btn-block
btn-round dropdown-toggle#dropdownMenuButton{1..4}` ("Dropdown
     button", primary/secondary/tertiary/quarternary) + `div.dropdown-menu
.dropdown-menu-left` with 3 `a.dropdown-item`s: `Action`, `Another
action`, `Something else here`.
  8. **Group Buttons** — `div.col-md-12` (heading) + 2 × `div.col-md-6` >
     `div.btn-group.mb-2.mb-md-0.btn-block`: group 1 = `Button 1`
     (`btn-primary`) / `Outline Button` (`btn-outline-primary`) /
     `Button 1` (`btn-primary`); group 2 = `Button 2` (`btn-secondary`) /
     `Outline Button` (`btn-outline-secondary`) / `Button 2`
     (`btn-secondary`). (End buttons repeat the same label — copy artifact,
     keep.)
  9. **Checkboxes + Radios Buttons** — one `row.mb-5` with exactly TWO
     `col-md-4` columns (no col-md-12 wrapper): col 1 =
     `h2 > small` "Checkboxes" + 5 `div.checkbox.checkbox-{primary,
secondary, tertiary, quarternary, dark}` > `label` >
     `input.styled[type=checkbox][checked]` + `span` (labels `Primary` /
     `Success` / `Danger` / `Warning` / `Disabled` — the last is
     `checked disabled`); col 2 = `h2 > small` "Radios Buttons" + 5
     `div.radio.radio-{same colors}` > `input[type=radio][checked]` (each
     its own `name=radio{n}`) + `label[for=radio{n}]` > `span` (same five
     labels).
  10. **Social Buttons — UNHEADED w-100 blocks** — `div.col-md-12` >
      `div.row` > 4 × `div.col-md-3` (solid / `btn-outline` / `btn-round` /
      `btn-round btn-outline` styles), each with 3 full-width left-aligned
      buttons (`btn-twitter` / `btn-fb` / `btn-dribbble`, `text-left
w-100 mb-3`, logo icon `mr-2`): `Twitter`, `Facebook`, `Find us on
Dribbble`. (The heading "Social Buttons" comes AFTER this block — the
      block is unheaded; keep that order.)
  11. **Social Buttons (headed block)** — `div.row.mb-5` > `div.col-md-12`
      > `h2 > small` "Social Buttons" + 5 × `div.col-md-12.mb-4`, one per
      > network, each with 7 buttons:
      - Facebook (`btn-fb`): icon-only solid, icon-only round, icon-only
        outline, icon-only round-outline, `Share - 8.2k` (solid),
        `Share - 8.5k` (outline), `Share - 8k` (`btn-link ml-2`).
      - Twitter (`btn-twitter`): icon-only ×4 + `Connect with Twitter`
        ×3 (solid/outline/link).
      - Linkedin (`btn-linkedin`): icon-only ×4 + `Connect with Linkedin`
        ×3.
      - Pinterest (`btn-pinterest`): icon-only ×4 + `Pin it - 1k` ×3.
      - Dribbble (`btn-dribbble`): icon-only ×4 + `Find us on Dribbble`
        ×3.
- **Copy is fixed and minimal:** page header "Button #08"; block headings
  "Tags & Pointers", "Pick Your Style", "Pick Your Size", "Pick Your
  Color", "Pagination Button", "Dropdown Buttons", "Group Buttons",
  "Checkboxes", "Radios Buttons", "Social Buttons"; button labels as
  listed above. No uppercase, no lorem.

## Design tokens

### Colors

Brand palette (custom `style.css` overrides — the token source; ALL are
flat, no gradients despite the "Default Gradient" label):

| Token       | Base hex  | Hover hex | Notes                                                                                                     |
| ----------- | --------- | --------- | --------------------------------------------------------------------------------------------------------- |
| primary     | `#4ba1fa` | `#1987f9` | sky blue; also link color and active pagination                                                           |
| secondary   | `#f9243f` | `#e40622` | red; outline hover bg `#fa3d55`                                                                           |
| tertiary    | `#fc6946` | `#fb4014` | orange; tag-ribbon triangle color                                                                         |
| quarternary | `#a7e52d` | `#a7e52d` | lime (hover unchanged); "Default Gradient" label                                                          |
| white       | `#ffffff` | —         | `btn-white` (black text); page background                                                                 |
| dark        | `#343a40` | —         | checkbox/radio dark variant (Bootstrap dark)                                                              |
| outline     | —         | —         | `1px solid rgba(0,0,0,0.1)` border, `#000` text; hover: text `rgba(0,0,0,0.5)`, border `rgba(0,0,0,0.05)` |
| link        | —         | —         | `border: none; box-shadow: none; color: #000`; colored links use the brand color                          |

Social brand colors (solid variants):

| Network   | Hex       |
| --------- | --------- |
| Facebook  | `#4f69a2` |
| Twitter   | `#69b6f0` |
| Linkedin  | `#2884ba` |
| Pinterest | `#d03940` |
| Dribbble  | `#ea6294` |

Bootstrap 4.3.1 standard button colors also present in the CSS (used by the
outline-primary/secondary in Group Buttons): primary `#007bff`, secondary
`#6c757d` (overridden to `#f9243f` by the custom rule), success `#28a745`,
danger `#dc3545`, warning `#ffc107` (dark text `#212529`), info `#17a2b8`,
light `#f8f9fa` (dark text). Page text `#212529`; muted gray `#e6e6e6`
(pagination borders, `.btn small` chip), gray (pagination numbers), `gray`
dropdown item icons `rgba(0,0,0,0.4)`.

### Fonts

- **Poppins** (body AND headings — `style.css` sets
  `font-family: "Poppins", Arial, sans-serif` on `body` and `h1–h6`).
  Load Poppins via Google Fonts `<link>` in `index.html`.
- Body: 15px, `line-height: 1.8`, weight 400.
- Headings: `line-height: 1.5`, weight 400; page header 32px; subsection
  headings render at 16px (h2 > small artifact); dropdown items 13px.

### Radii / shapes

- **Base button = paddle:** `border-radius: 0 40px 0 40px` (top-left 0,
  top-right 40px, bottom-right 0, bottom-left 40px) — the signature.
  Computed-style-verified on `.btn-primary.btn-sm` and `.btn-lg`.
- `.btn-round` = full pill `border-radius: 40px` (used by "New", "Default
  with icon" (round), dropdown toggles, and the round social variants).
- `.btn-tag` = `border-radius: 2px` + ribbon: white 5px dot `:before` at
  right edge; CSS triangle `:after` (`border-width: 14px 0 14px 10px`,
  `border-color: transparent transparent transparent #fc6946`) hanging
  right; triangle recolors on hover.
- Pagination circles: `border-radius: 50%`, 40×40.
- Radios: 18px ring (`border: 2px solid rgba(0,0,0,0.1)`) + 12px fill dot,
  `border-radius: 100%`, scale-in transition.

### Shadows / effects

- Base: `0 10px 20px -6px rgba(0, 0, 0, 0.12)`; hover/focus:
  `0 12px 20px -6px rgba(0, 0, 0, 0.21)` (shadow DEEPENS, no press-down —
  the opposite of Pill/17). Transition `.3s all ease` on `a` and `button`.
- Dropdown menu: `0 10px 34px -20px rgba(0, 0, 0, 0.41)`, borderless,
  full-width (`width: 100%`), white; item hover `background:
rgba(0,0,0,0.05)`, `color: #000`.
- `.icon-effect`: `opacity: 0` → `opacity: 1; margin-left: 10px` on
  hover (the "Read more" arrow slides in).
- Checkbox glyphs (Ionicons font chars — recreate with lucide):
  unchecked square `\f15c` 37px, checked check `\f148` 30px, colored per
  variant class; label `span` gets `margin-left: 35px`; inputs hidden
  (`position: absolute; visibility: hidden`).

### Layout

- Section `#buttons`: `padding: 7em 0` (105px), white background,
  `div.container` (1140px max at lg).
- Page header row `mb-4` (3rem? no — 1.5rem); all 10 blocks `row mb-5`
  (3rem bottom margin).
- Button spacing inside blocks: `mb-2 mb-md-0` + `mr-3` (or `mr-4`).
- Checkboxes/radios: two equal `col-md-4` columns side by side.
- Dropdowns: four `col-md-3` columns. Groups: two `col-md-6` columns.
- Social w-100 blocks: four `col-md-3` columns; share rows: full-width
  `col-md-12.mb-4` rows of inline buttons.

## Requirements

### Requirement: Page structure

The system SHALL render the Paddle page as one section on a white
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Paddle page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single section SHALL be headed **"Button #08"** (32px Poppins,
  left-aligned, `mb-4`)
- **AND** the section SHALL contain, in order: Tags & Pointers, Pick Your
  Style, Pick Your Size, Pick Your Color, Pagination Button, Dropdown
  Buttons, Group Buttons, Checkboxes + Radios Buttons, the unheaded social
  w-100 block, and the headed Social Buttons block
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: No chrome

- **GIVEN** the Paddle page is rendered
- **WHEN** the user inspects the page
- **THEN** there SHALL be no navbar, no hero, no images, and no
  carousel (the reference is a pure component-showcase page)

### Requirement: Heading artifacts

The system SHALL render the reference headings exactly, including the
copy-paste artifacts.

#### Scenario: Page header number

- **GIVEN** the Paddle page is rendered
- **WHEN** the user reads the page header
- **THEN** the header SHALL read **"Button #08"** — exactly as the
  reference renders it (the slug is `bootstrap-buttons-18` and the
  `<title>` is "Button 08", but the visible heading is `#08`; do NOT "fix"
  it to #18 or #08)

#### Scenario: Subsection headings render small

- **GIVEN** any block heading is displayed
- **WHEN** the user reads it
- **THEN** each block heading SHALL render at **16px** Poppins (the
  reference wraps the text in `h2.heading-section > small`, and the custom
  CSS renders `.heading-section small` at 16px despite the 32px `h2`) —
  the page header "Button #08" stays 32px
- **AND** the headings SHALL read exactly: "Tags & Pointers", "Pick Your
  Style", "Pick Your Size", "Pick Your Color", "Pagination Button",
  "Dropdown Buttons", "Group Buttons", "Checkboxes", "Radios Buttons",
  "Social Buttons" (note "Radios Buttons" — no "Button" on the plural;
  keep as-is)

### Requirement: Tags & Pointers

The system SHALL render the four small tag/pointer buttons with the exact
labels, shapes, and colors.

#### Scenario: Four buttons

- **GIVEN** the Tags & Pointers block is displayed
- **WHEN** the user views it
- **THEN** four small buttons SHALL render in order: `New` (red `#f9243f`
  full pill `btn-round`, white text), `Sale` (orange `#fc6946` tag shape —
  `border-radius: 2px` with a white dot on the right edge and a CSS
  triangle pointer extending right, white text), `Read more` (blue
  `#4ba1fa` paddle shape with an arrow icon that is hidden by default and
  slides in on hover), `278,645` (ghost — transparent bg, `1px solid
rgba(0,0,0,0.1)` border, black text)

### Requirement: Pick Your Style

The system SHALL render the five style-variant buttons with exact labels
and icon placement.

#### Scenario: Five variants

- **GIVEN** the Pick Your Style block is displayed
- **WHEN** the user views it
- **THEN** five buttons SHALL render in order: `Default` (solid primary),
  `Default` (ghost outline), `Default with icon` (round primary pill with
  heart icon before the label), `Like` (solid primary with heart icon),
  `Default with icon` (ghost outline with heart icon)
- **AND** the heart icons SHALL be accessible (the reference adds
  `<span class="sr-only">` on the `Like` button — replicate an accessible
  name for icon-only/icon buttons per repo a11y conventions)

### Requirement: Pick Your Size

The system SHALL render the two size trios (solid + outline) with the
correct paddings and font sizes.

#### Scenario: Size matrix

- **GIVEN** the Pick Your Size block is displayed
- **WHEN** the user views it
- **THEN** a primary trio SHALL render: `Default Small` (`btn-sm`: 12px
  text, `5px 20px` padding), `Default Regular` (base: 14px, `12px 20px`),
  `Default Large` (`btn-lg`: 16px, `17px 24px`)
- **AND** an outline trio SHALL render below with the same three labels
  and sizes in ghost style
- **AND** all six SHALL keep the asymmetric paddle radius and the
  signature shadow

### Requirement: Pick Your Color

The system SHALL render the four brand-color buttons with exact colors and
labels.

#### Scenario: Four colors

- **GIVEN** the Pick Your Color block is displayed
- **WHEN** the user views it
- **THEN** four buttons SHALL render in order: `Default Primary`
  (`#4ba1fa`), `Default Secondary` (`#f9243f`), `Default Tertiary`
  (`#fc6946`), `Default Gradient` (`#a7e52d`)
- **AND** the "Default Gradient" button SHALL be a FLAT lime
  (`#a7e52d`) — the reference labels it "Gradient" but its CSS is a solid
  color; keep the label and the flat fill (do NOT add an actual gradient)

#### Scenario: Hover state

- **GIVEN** any color button is displayed
- **WHEN** the user hovers or keyboard-focuses it
- **THEN** the button background SHALL change to its hover hex (Primary
  `#1987f9`, Secondary `#e40622`, Tertiary `#fb4014`, Quarternary
  `#a7e52d` — unchanged)
- **AND** the shadow SHALL deepen to `0 12px 20px -6px rgba(0,0,0,0.21)`
- **AND** the button SHALL show a visible focus indication (repo convention
  `focus-visible` ring)

### Requirement: Pagination

The system SHALL render the circular pagination with the blue active state.

#### Scenario: Pagination circle row

- **GIVEN** the Pagination Button block is displayed
- **WHEN** the user views it
- **THEN** a row of seven 40px circles SHALL render: `<`, `1`, `2`, `3`,
  `4`, `5`, `>`
- **AND** inactive circles SHALL have a `1px solid #e6e6e6` border and
  gray text
- **AND** the `1` circle SHALL be active: background `#4ba1fa`, white
  text, transparent border

### Requirement: Dropdown buttons

The system SHALL render four full-width round dropdown toggles with
working menus.

#### Scenario: Four toggles and menus

- **GIVEN** the Dropdown Buttons block is displayed
- **WHEN** the user views it
- **THEN** four `Dropdown button` toggles SHALL render in a 4-column row
  (primary `#4ba1fa`, secondary `#f9243f`, tertiary `#fc6946`,
  quarternary `#a7e52d`), full-width (`btn-block`) with the full pill
  radius (`btn-round`) and a caret
- **AND** each toggle SHALL open a borderless white menu containing
  `Action`, `Another action`, `Something else here` (13px items,
  `rgba(0,0,0,0.7)`, hover `background: rgba(0,0,0,0.05)`, shadow
  `0 10px 34px -20px rgba(0,0,0,0.41)`)
- **AND** clicking the toggle again SHALL close the menu, and only one
  menu SHALL be open at a time

### Requirement: Group buttons

The system SHALL render the two joined button groups with the repeated
end labels.

#### Scenario: Two groups

- **GIVEN** the Group Buttons block is displayed
- **WHEN** the user views it
- **THEN** group 1 SHALL render `Button 1` (primary `#4ba1fa`) /
  `Outline Button` (outline primary) / `Button 1` (primary) joined as one
  full-width bar
- **AND** group 2 SHALL render `Button 2` (secondary `#f9243f`) /
  `Outline Button` (outline secondary) / `Button 2` (secondary) joined as
  one full-width bar
- **AND** the repeated `Button 1`/`Button 2` end labels SHALL be kept
  exactly (copy artifact of the reference)

### Requirement: Checkboxes

The system SHALL render five custom checkboxes in the brand colors with
the exact labels and checked states.

#### Scenario: Five checkboxes

- **GIVEN** the Checkboxes column is displayed
- **WHEN** the user views it
- **THEN** five checkbox rows SHALL render with labels and colors:
  `Primary` (`#4ba1fa`), `Success` (`#f9243f`), `Danger` (`#fc6946`),
  `Warning` (`#a7e52d`), `Disabled` (`#343a40`)
- **AND** the first four SHALL be checked; `Disabled` SHALL be checked AND
  disabled (non-interactive, dimmed)
- **AND** each row SHALL show a visible custom box/check in its brand
  color (the reference draws the glyphs with the Ionicons font — map to
  `lucide-react` icons or CSS; do NOT copy the font)

#### Scenario: Toggle interaction

- **GIVEN** an enabled checkbox is displayed
- **WHEN** the user clicks its label
- **THEN** the checked state SHALL toggle and the visible glyph SHALL
  update accordingly

### Requirement: Radio buttons

The system SHALL render five custom radios in the brand colors with the
exact labels and checked states.

#### Scenario: Five radios

- **GIVEN** the Radios Buttons column is displayed
- **WHEN** the user views it
- **THEN** five radio rows SHALL render with the same labels/colors as the
  checkboxes (`Primary`, `Success`, `Danger`, `Warning`, `Disabled`)
- **AND** each SHALL be checked, showing an 18px ring (`2px solid
rgba(0,0,0,0.1)`) with a 12px brand-color fill dot
- **AND** each SHALL be its own radio group (`name="radio{n}"`) so they
  toggle independently (the reference puts every radio in its own name
  group, all pre-checked — replicate, do not make them mutually
  exclusive)

### Requirement: Social buttons — w-100 blocks

The system SHALL render the unheaded 4×3 grid of full-width social
buttons.

#### Scenario: Twelve full-width social buttons

- **GIVEN** the unheaded social block is displayed
- **WHEN** the user views it
- **THEN** four columns SHALL render, each with three full-width
  left-aligned buttons with a logo icon before the label: `Twitter`
  (`#69b6f0`), `Facebook` (`#4f69a2`), `Find us on Dribbble` (`#ea6294`)
- **AND** the four columns SHALL use the four styles in order: solid,
  outline (ghost), round (full pill), round + outline
- **AND** this block SHALL have NO heading (the "Social Buttons" heading
  belongs to the block below — keep the reference order)

### Requirement: Social share rows

The system SHALL render the five per-network variant rows with the exact
labels and counts.

#### Scenario: Five networks × seven variants

- **GIVEN** the headed Social Buttons block is displayed
- **WHEN** the user views it
- **THEN** a 16px heading "Social Buttons" SHALL render above five rows,
  one per network, each with seven buttons:
  - Facebook: icon-only solid, icon-only round, icon-only outline,
    icon-only round+outline, `Share - 8.2k` (solid), `Share - 8.5k`
    (outline), `Share - 8k` (link style)
  - Twitter: icon-only ×4, then `Connect with Twitter` (solid), `Connect
with Twitter` (outline), `Connect with Twitter` (link)
  - Linkedin: icon-only ×4, then `Connect with Linkedin` ×3 (same
    pattern)
  - Pinterest: icon-only ×4, then `Pin it - 1k` ×3
  - Dribbble: icon-only ×4, then `Find us on Dribbble` ×3
- **AND** all icon-only buttons SHALL carry an accessible name (the
  reference is icon-font-only — add `aria-label` per repo a11y
  conventions)

### Requirement: Paddle button anatomy

Every base button SHALL be a paddle-shaped button with the signature
shadow and deep-on-hover effect.

#### Scenario: Shared anatomy

- **GIVEN** any base button is displayed
- **WHEN** the user inspects its styling
- **THEN** the button SHALL have the asymmetric radius
  `border-radius: 0 40px 0 40px` (top-right + bottom-left rounded 40px,
  top-left + bottom-right square), `border-width: 1px`, and the base size
  (14px / `12px 20px` unless overridden by `lg`/`sm`)
- **AND** the button SHALL cast the signature drop shadow `0 10px 20px
-6px rgba(0, 0, 0, 0.12)` with a `.3s all ease` transition
- **AND** on hover/active/focus the shadow SHALL deepen to `0 12px 20px
-6px rgba(0, 0, 0, 0.21)` and the background SHALL shift to the
  per-color hover hex
- **AND** `.btn-round` variants SHALL be full pills (`border-radius:
40px`) and `.btn-tag` SHALL be the 2px tag with the white dot + triangle
  ribbon

#### Scenario: Size variants

- **GIVEN** a small or large button is displayed
- **WHEN** the user inspects its styling
- **THEN** `.btn-sm` SHALL be 12px / `5px 20px` and `.btn-lg` SHALL be
  16px / `17px 24px`
- **AND** both SHALL keep the asymmetric paddle radius (the custom `.btn`
  rule wins over Bootstrap's size radii)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Paddle page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the container SHALL be full width without horizontal overflow
- **AND** the multi-column rows (dropdowns 4×, groups 2×, checkboxes/radios
  2×, social w-100 4×) SHALL stack vertically
- **AND** the block rows SHALL allow button wrapping (`flex-wrap`) so no
  button overflows the viewport
- **AND** the section padding SHALL be reduced (`7em` is excessive on
  phones)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Paddle page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-paddle`
- [ ] `scripts/verify-app.sh paddle` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): "Button #08" header →
      Tags & Pointers → Pick Your Style → Pick Your Size → Pick Your
      Color → Pagination Button → Dropdown Buttons → Group Buttons →
      Checkboxes + Radios Buttons → unheaded w-100 social grid → headed
      "Social Buttons" share rows → minimal Component Dock footer; white
      page, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#4ba1fa`, secondary `#f9243f`, tertiary `#fc6946`, quarternary
      `#a7e52d` (+ hover hexes `#1987f9`/`#e40622`/`#fb4014`/`#a7e52d`),
      dark `#343a40`, social five (`#4f69a2`/`#69b6f0`/`#2884ba`/
      `#d03940`/`#ea6294`), outline border `rgba(0,0,0,0.1)`, page
      `#ffffff`
- [ ] Font: Poppins (body + headings) via Google Fonts `<link>` in
      `index.html`; body 15px; page header 32px; subsection headings 16px;
      title "Paddle — Button Showcase" (reference `<title>` "Button 08" is
      a generic artifact — use the app's own title per repo convention)
- [ ] Anatomy: asymmetric paddle — `border-radius: 0 40px 0 40px`, 14px /
      `12px 20px` base, weight 500, shadow `0 10px 20px -6px
    rgba(0,0,0,0.12)` → hover `0 12px 20px -6px rgba(0,0,0,0.21)` +
      per-color hover bg; sm = 12px/`5px 20px`, lg = 16px/`17px 24px`
      (both keep the paddle radius); `btn-round` = `40px` full pill;
      `btn-tag` = 2px radius + white dot + triangle ribbon (recolor on
      hover)
- [ ] Heading artifacts rendered EXACTLY: page header "Button #08" (slug
      18 — do NOT "fix"); subsection headings at 16px via h2 > small;
      "Radios Buttons" (sic); "Default Gradient" is flat lime `#a7e52d`
      (no real gradient); group buttons repeat `Button 1`/`Button 2` end
      labels; the w-100 social grid has NO heading
- [ ] Copy exact: `New`, `Sale`, `Read more`, `278,645`, `Default` ×2,
      `Default with icon` ×2, `Like`, `Default Small/Regular/Large` ×2
      trios, `Default Primary/Secondary/Tertiary/Gradient`, `Dropdown
    button` ×4, `Action`/`Another action`/`Something else here`,
      `Button 1`/`Outline Button`/`Button 2`, checkbox/radio labels
      `Primary`/`Success`/`Danger`/`Warning`/`Disabled`, social labels +
      counts (`Share - 8.2k`/`8.5k`/`8k`, `Connect with Twitter`,
      `Connect with Linkedin`, `Pin it - 1k`, `Find us on Dribbble`)
- [ ] Icons from `lucide-react` (hearts, social logos, checkbox/radio
      glyphs, "Read more" arrow); NO Ionicons font, NO copied CSS/HTML;
      icon-only buttons have accessible names; "Read more" arrow hidden
      until hover (`.icon-effect` slide-in)
- [ ] Dropdowns open/close on click with one-open-at-a-time behavior;
      checkbox toggling works; disabled checkbox non-interactive
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` only where they fit the
      paddle anatomy (the reference button is custom — check how shipped
      sibling apps handle it; hostelry imports `cn` from the ui barrel)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 18"
      row, line 679 — Bootstrap Buttons (20) category; single row, no
      dups)
