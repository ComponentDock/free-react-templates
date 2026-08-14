# Template: Toggle (Button / UI Kit Showcase)

## Purpose

Toggle is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 02" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-02/), built under a
DIFFERENT name (**Toggle** — evoking the page's signature iOS-style "Slide
Button" toggle switches; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-column Bootstrap 4 UI-kit page: a
large centered "Button #07" title, then 5 unlabeled button-showcase rows,
then 6 labeled blocks ("Dropdown Buttons", "Group Buttons", "Checkboxes",
"Radios Buttons", "Slide Button", "Social Buttons"), each headed by a 16px
grey `<small>` subheading under the 32px title, plus a trailing unlabeled
row of round-outline action buttons. The kit uses a custom 4-color palette
(coral `#ec8f6a`, dusty teal `#8bbabb`, pale gold `#e2c275`, mauve
`#b96b9f`) for solid/outline/pill buttons, icon buttons with white circular
icon badges, 4 working dropdowns, 2 segmented button groups, 5 custom
colored checkboxes, 5 custom colored radios, 2 iOS-style slide toggles, 5
social brand button rows, and a final action row. There is NO navbar and NO
footer in the original. Toggle recreates the structure section-for-section
with matching layout, tokens, typography, and content kinds (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 02" is FORBIDDEN
> as the app name. **Toggle** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-02/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/` (HTTP 200 —
> discovered by scraping the ColorLib template page, which links to the
> nested `/bb/` subpath — same pattern as the sibling "Bootstrap Buttons 01"
> prep, Palette). The page title is "Button 07". Fidelity mandate = render
> the heading exactly as the reference renders it: **"Button #07"**.

> TITLE QUIRK: the "Bootstrap Buttons 02" slug's preview renders the kit
> numbered **#07** (the ColorLib numbering of these button pages does not
> match the slug number). The reference is the live preview: render "Button
> #07".

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 02". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 663). Free UI-kit button-component
  template. The `bootstrap-buttons-02` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-02/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/` (HTTP 200,
  26KB HTML, `<title>Button 07</title>`). Stylesheets:
  `css/style.css` (231KB — Bootstrap 4 + ftco custom button/theme rules;
  the token source), `css/ionicons.min.css` (glyph icons). JS: Bootstrap 4
  bundle (dropdowns) + `js/main.js`. Structure, copy, and tokens below are
  from the live DOM + `style.css`. Screenshot (`bootstrap-buttons-02.jpg`,
  1200×972, browser-verified 2026-08-14) confirms the aesthetic: white
  page, "Button #07" heading, coral/teal/gold/mauve solid + outline button
  rows, icon buttons, dropdown buttons, segmented groups, colored
  checkboxes/radios, a blue ON toggle and a red OFF toggle, and social
  buttons.
- **Visual design (screenshot + live DOM):** extremely clean, flat,
  centered single-column kit page on a white (`#fff`) background. One
  content section (`section.ftco-section#buttons`, padding `7em 0`)
  containing the heading and all showcase rows/blocks stacked vertically.
  No navbar, no hero, no images, no footer. The whole page is the button
  showcase itself. Typography: **Poppins** (the ftco theme family —
  `"Poppins", Arial, sans-serif`; body 15px/1.8, headings 400 weight,
  line-height 1.5). Buttons use the ftco custom styles (NOT the Bootstrap
  defaults): padding `12px 16px`, font-size `14px`, weight `500`, radius
  `5px`, subtle shadow, 0.3s transitions.
- **Section order (1:1 from live DOM):**
  1. **Title block** — `row mb-4` → `h2.heading-section` **"Button #07"**
     (32px, Poppins 400, `#212529`; NO `<small>` — it is the page title).
  2. **Top showcase (NO subheading)** — `row mb-5` with three
     `col-md-12 mb-3` rows:
     - Solid row — 4 `btn-block` buttons in `col-md-3` each: `Default`
       (primary `#ec8f6a`), `Round` (secondary `#8bbabb`, pill via
       `btn-round`), `Default` (tertiary `#e2c275`), `Default` (quarternary
       `#b96b9f`).
     - Icon row (solid) — 4 `btn-block` icon buttons: `Like` (heart,
       primary), `Delete` (trash, secondary), `Send` (paper-plane,
       tertiary), `Download` (cloud-download, quarternary); each button =
       `<span>` label + `.icon` white 45px circle (right-aligned) holding
       the glyph.
     - Icon row (round) — same 4 buttons with `btn-round` + `icon icon-round`
       (circular badge).
       Then `row mb-5` with two `col-md-12 mb-2` rows:
     - Outline row — 4 `btn-block` outline buttons: `Default` ×4
       (`btn-outline-primary/secondary/tertiary/quarternary`).
     - Round-outline row — 4 `btn-block` `btn-round btn-outline` buttons:
       `Default` ×4 (1px black-ish border, transparent, black text).
  3. **Dropdown Buttons** — `h2.heading-section` + `<small>Dropdown
Buttons</small>`; row of 4 `col-md-3` dropdowns (primary, secondary,
     tertiary, quarternary), each: `div.dropdown.d-block` → `button.btn
btn-{color} btn-block dropdown-toggle` "Dropdown button" →
     `div.dropdown-menu.dropdown-menu-left` with `a.dropdown-item` `Action`
     / `Another action` / `Something else here`.
  4. **Group Buttons** — `h2` + `<small>Group Buttons</small>`; two
     `col-md-6` `div.btn-group.btn-block` groups: group 1 =
     `Button 1` (primary) + `Outline Button` (outline-primary) + `Button 1`
     (primary); group 2 = `Button 2` (secondary) + `Outline Button`
     (outline-secondary) + `Button 2` (secondary) — buttons joined flush as
     one segmented control.
  5. **Checkboxes** — `h2` + `<small>Checkboxes</small>`; `div.checkbox-wrap`
     with 5 rows (`div.checkbox.checkbox-{primary|secondary|tertiary|
quarternary|dark}` → `<label><input type="checkbox" checked
class="styled"><span>Primary/Success/Danger/Warning/Disabled</span>
</label>`): all checked, the last (`Disabled`, `checkbox-dark`)
     additionally `disabled`.
  6. **Radios Buttons** — `h2` + `<small>Radios Buttons</small>`; 5 rows
     (`div.radio.radio-{primary|secondary|tertiary|quarternary|dark}` →
     `<input type="radio">` + `<label><span>…</span></label>`): Primary /
     Success / Danger / Warning all `checked`, Disabled `disabled`
     unchecked.
  7. **Slide Button** — `h2` + `<small>Slide Button</small>`; two
     `div.toggle-button-cover` iOS toggles (see JS/toggle notes below):
     - Toggle A (`div.button.r#button-1`, input **unchecked**) renders the
       **ON** state: blue `#03A9F4` round knob with white "ON" on the left,
       light-blue `#ebf7fc` track; description span "Toggle is on".
     - Toggle B (`div.button.r#button-10`, input **checked**) renders the
       **OFF** state: red `#F44336` knob (grey/white OFF text), pink
       `#fcebeb` track; description span "Toggle is Off".
  8. **Social Buttons** — `h2` + `<small>Social Buttons</small>`; five
     `col-md-12 mb-4` brand rows (Facebook `btn-fb`, Twitter `btn-twitter`,
     LinkedIn `btn-linkedin`, Pinterest `btn-pinterest`, Dribbble
     `btn-dribbble`), each with 7 buttons: 4 icon-only (`btn-{brand}` solid,
     `btn-round btn-{brand}`, `btn-outline`, `btn-outline btn-round`) + 3
     labeled (`btn-{brand}` solid, `btn-outline`, `btn-link ml-2`):
     Facebook row labels `Share - 8.2k` / `Share - 8.5k` / `Share - 8k`;
     Twitter `Connect with Twitter` ×3; LinkedIn `Connect with Linkedin`
     ×3; Pinterest `Pin it - 1k` ×3; Dribbble `Find us on Dribbble` ×3.
  9. **Trailing action row (NO subheading)** — final `row` (no `mb-5`):
     `Watch Photos` (images icon), `Download` (download icon), a
     download-icon-only button, `Add Comment` (no icon), a chatboxes-icon-
     only button, `Like` (heart icon) with a grey `<small>2</small>` badge,
     and `Create Account` (`btn-round btn-primary` solid coral pill) — all
     `btn-round btn-outline` except Create Account.
  10. **Footer** — the original has NO footer; per monorepo convention add
      a minimal attribution footer linking
      `https://www.componentdock.com/` ("Component Dock").
- **JS behaviors (original):** Bootstrap dropdowns (`data-toggle` +
  `dropdown-menu`, close on outside click / Escape) and the iOS toggle
  checkboxes. Recreate with React state: one open dropdown at a time (or
  independent), `aria-haspopup` + `aria-expanded` on the toggle,
  `role="menu"`/`menuitem` on menu, close on outside click and Escape;
  toggles as controlled switches (see toggle note below).
- **Toggle semantics note (from CSS):** the source CSS has INVERTED
  checkbox logic (`#button-1 .knobs:before` shows "ON" while UNCHECKED;
  `#button-10` checked → red OFF knob). Recreate the RENDERED reference
  states with standard semantics: checked = ON (blue `#03A9F4` knob left +
  white "ON", track `#ebf7fc`), unchecked = OFF (red `#F44336` knob right,
  track `#fcebeb`). Toggle A renders ON (default checked), label "Toggle is
  on"; Toggle B renders OFF (default unchecked), label "Toggle is Off".
- **Design tokens (from `style.css` — ftco overrides replace the Bootstrap
  defaults):**

  | Token               | Value                            | Usage                                              |
  | ------------------- | -------------------------------- | -------------------------------------------------- |
  | Page background     | `#ffffff`                        | `body` (white kit page, no top border rule here)   |
  | Body text           | `#212529`                        | Bootstrap body color                               |
  | Font                | Poppins                          | `"Poppins", Arial, sans-serif`; body 15px/1.8;     |
  |                     |                                  | headings 400 weight, line-height 1.5               |
  | Primary             | `#ec8f6a` (hover `#e66d3d`)      | `btn-primary` coral — solid bg / outline border    |
  | Secondary           | `#8bbabb` (hover `#6ba7a8`)      | `btn-secondary` dusty teal                         |
  | Tertiary            | `#e2c275` (hover `#d9af4b`)      | `btn-tertiary` pale gold                           |
  | Quarternary         | `#b96b9f` (hover `#a44d87`)      | `btn-quarternary` mauve                            |
  | Dark                | `#343a40`                        | `checkbox-dark` / `radio-dark` (Disabled rows)     |
  | Facebook            | `#4f69a2`                        | `btn-fb` social                                    |
  | Twitter             | `#69b6f0`                        | `btn-twitter` social                               |
  | LinkedIn            | `#2884ba`                        | `btn-linkedin` social                              |
  | Pinterest           | `#d03940`                        | `btn-pinterest` social                             |
  | Dribbble            | `#ea6294`                        | `btn-dribbble` social                              |
  | Solid button text   | `#ffffff`                        | all solid palette + brand buttons                  |
  | Base button (ftco)  | padding `12px 16px`, font-size   | `.btn` — 1px border, radius `5px`, weight 500,     |
  |                     | `14px`, weight `500`, radius     | shadow `0px 10px 20px -6px rgba(0,0,0,0.12)`,      |
  |                     | `5px`, `overflow:hidden`         | `transition all .3s ease`                          |
  | Small button (`sm`) | padding `5px 20px`, font-size    | `.btn-sm` ftco override (12px)                     |
  |                     | `12px`                           |                                                    |
  | Large button (`lg`) | padding `17px 24px`, font-size   | `.btn-lg` ftco override (16px)                     |
  |                     | `16px`                           |                                                    |
  | Round (pill)        | `border-radius: 40px`            | `.btn-round` variant                               |
  | Block button        | `display:block; width:100%`      | `.btn-block` (all top-showcase buttons)            |
  | Outline button      | 1px `rgba(0,0,0,0.1)` border,    | `.btn-outline` generic (top row 5, icon-only,      |
  |                     | text `#000`, transparent bg;     | labeled social variants); hover: text              |
  |                     | hover `rgba(0,0,0,0.5)`          | `rgba(0,0,0,0.5)` + border `rgba(0,0,0,0.05)`      |
  | Palette outlines    | text + 1px border in color       | `.btn-outline-{color}`; hover fills with the       |
  |                     |                                  | palette color + white text                         |
  | Link button         | borderless, no shadow, `#000`    | `.btn-link` (social labeled "link" variants)       |
  | Icon badge          | 45px white block, right side,    | `.btn .icon` — glyph 20px colored per button;      |
  |                     | `border-radius:50%` on round     | label `<span>` slides `-20px` → `-10px` on hover   |
  | Badge (`small`)     | bg `#e6e6e6`, padding `2px 8px`, | `.btn small` — the "Like 2" count badge            |
  |                     | color `rgba(0,0,0,0.3)`          |                                                    |
  | Section padding     | `7em 0`                          | `.ftco-section`                                    |
  | Heading             | `32px` (`.heading-section`),     | h2; block subheadings `<small>` 16px               |
  |                     | `#212529`, Poppins 400           |                                                    |
  | Dropdown menu       | white, borderless, shadow        | `.dropdown .dropdown-menu` — `0px 10px 34px -20px` |
  |                     |                                  | `rgba(0,0,0,0.41)`; items 13px `rgba(0,0,0,0.7)`,  |
  |                     |                                  | hover bg `rgba(0,0,0,0.05)` + `#000`               |
  | Checkbox (custom)   | hidden input; Ionicons glyph     | circle-outline glyph unchecked, palette-colored    |
  |                     |                                  | check glyph when checked; label span `margin-left` |
  |                     |                                  | `35px`; disabled `opacity .65`                     |
  | Radio (custom)      | input off-screen; label          | 18px circle, 2px `rgba(0,0,0,0.1)` border, white   |
  |                     | padding-left `28px`              | bg; 12px dot; checked: dot + border in palette     |
  |                     |                                  | color; disabled `opacity .65`                      |
  | Toggle track        | `#ebf7fc` (on) / `#fcebeb`(off)  | `.slide-button .layer`, 74×36px pill (r 100px)     |
  | Toggle knob         | `#03A9F4` on / `#F44336` off     | 28×28px circle, white "ON" (on) / grey "OFF" (off) |

- **Fonts:** **Poppins** is the ftco theme family (body + headings). Load
  Poppins (weights 300–700) via Google Fonts `<link>` in `index.html`;
  icons via `lucide-react` where available, inline SVG (simple-icons paths)
  for the 5 brand glyphs (Facebook/Twitter/LinkedIn/Pinterest/Dribbble are
  NOT in lucide-react — see the colorlib-template-replication skill).

## Requirements

### Requirement: Page structure

The system SHALL render the Toggle page as a single-column, centered
document on a white background, in this order: the "Button #07" title, the
five unlabeled showcase rows, the six labeled blocks, the trailing action
row, and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Toggle page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white
- **AND** a centered title SHALL read "Button #07" (32px, Poppins, `#212529`)
- **AND** the page SHALL contain, in order: the 5 unlabeled top rows
  (solid, solid icons, round icons, outline, round-outline), the blocks
  Dropdown Buttons, Group Buttons, Checkboxes, Radios Buttons, Slide
  Button, Social Buttons, and the trailing action row
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Block headings

- **GIVEN** the showcase blocks are displayed
- **WHEN** the user inspects a block heading
- **THEN** each labeled block SHALL be headed by a 16px grey subheading
  matching the reference copy ("Dropdown Buttons", "Group Buttons",
  "Checkboxes", "Radios Buttons", "Slide Button", "Social Buttons")
- **AND** the page title "Button #07" SHALL have no subheading

### Requirement: Solid color row

The system SHALL render the first showcase row with the four solid palette
buttons, one per color, the second being the pill "Round" variant.

#### Scenario: Four-color solid row

- **GIVEN** the top showcase is displayed
- **WHEN** the user views the first row
- **THEN** a `Default` button SHALL render in primary coral `#ec8f6a`
  (white text)
- **AND** a `Round` button SHALL render in secondary teal `#8bbabb` with
  pill radius `40px`
- **AND** a `Default` button SHALL render in tertiary gold `#e2c275`
- **AND** a `Default` button SHALL render in quarternary mauve `#b96b9f`
- **AND** all four SHALL be full-width block buttons (equal `col-md-3`
  columns) with the ftco base styling (radius 5px, 12px 16px padding,
  14px/500 text, subtle shadow)

### Requirement: Icon buttons

The system SHALL render the two icon rows (solid and round) with the four
icon buttons Like, Delete, Send, Download, each carrying a white circular
icon badge on the right.

#### Scenario: Solid icon row

- **GIVEN** the top showcase is displayed
- **WHEN** the user views the second row
- **THEN** a `Like` button SHALL render with a heart icon in primary
  `#ec8f6a`
- **AND** a `Delete` button SHALL render with a trash icon in secondary
  `#8bbabb`
- **AND** a `Send` button SHALL render with a paper-plane icon in tertiary
  `#e2c275`
- **AND** a `Download` button SHALL render with a download icon in
  quarternary `#b96b9f`
- **AND** each button SHALL show a white 45px icon circle on its right edge
  (radius 50% on the round variant) whose glyph is colored with the
  button's palette color
- **AND** the icon and label SHALL be vertically centered

#### Scenario: Round icon row

- **GIVEN** the top showcase is displayed
- **WHEN** the user views the third row
- **THEN** the same Like / Delete / Send / Download buttons SHALL render in
  pill shape (`btn-round`) with circular icon badges (`icon-round`)

### Requirement: Outline rows

The system SHALL render the two outline rows (flat and round) with the four
palette outline buttons and four generic round-outline buttons.

#### Scenario: Outline color row

- **GIVEN** the top showcase is displayed
- **WHEN** the user views the fourth row
- **THEN** four `Default` buttons SHALL render as outlines with text and 1px
  border in `#ec8f6a` / `#8bbabb` / `#e2c275` / `#b96b9f` (transparent
  background)
- **AND** hovering an outline button SHALL fill it with its palette color
  and flip the text to white

#### Scenario: Round outline row

- **GIVEN** the top showcase is displayed
- **WHEN** the user views the fifth row
- **THEN** four `Default` buttons SHALL render as generic outlines (1px
  `rgba(0,0,0,0.1)` border, black text, transparent background) in pill
  shape (`40px` radius)

### Requirement: Dropdown buttons

The system SHALL render the "Dropdown Buttons" block with four working
dropdown menus in the four palette colors.

#### Scenario: Opening a dropdown

- **GIVEN** the "Dropdown Buttons" block is displayed
- **WHEN** the user activates the primary `Dropdown button`
- **THEN** a menu SHALL open below the button with items `Action`, `Another
action`, and `Something else here`
- **AND** the toggle SHALL expose `aria-haspopup="true"` and
  `aria-expanded="true"` while open

#### Scenario: Closing a dropdown

- **GIVEN** a dropdown menu is open
- **WHEN** the user clicks outside it, presses Escape, or activates the
  toggle again
- **THEN** the menu SHALL close and `aria-expanded` SHALL return to `false`
- **AND** the four dropdowns (primary, secondary, tertiary, quarternary)
  SHALL behave identically and independently

### Requirement: Button groups

The system SHALL render the "Group Buttons" block with two segmented groups
of three joined buttons.

#### Scenario: Segmented groups

- **GIVEN** the "Group Buttons" block is displayed
- **WHEN** the user views the rows
- **THEN** a group SHALL join `Button 1` + `Outline Button` + `Button 1`
  (primary solid / outline / solid)
- **AND** a second group SHALL join `Button 2` + `Outline Button` +
  `Button 2` (secondary solid / outline / solid)
- **AND** the buttons in each group SHALL sit flush together as one
  segmented control

### Requirement: Checkbox toggles

The system SHALL render the "Checkboxes" block with five custom colored
checkbox rows.

#### Scenario: Checkbox rows

- **GIVEN** the "Checkboxes" block is displayed
- **WHEN** the user views the rows
- **THEN** rows SHALL read `Primary`, `Success`, `Danger`, `Warning`, and
  `Disabled`
- **AND** each row SHALL be a custom checkbox whose check glyph takes the
  row's palette color when checked (`#ec8f6a` `#8bbabb` `#e2c275` `#b96b9f`
  `#343a40`)
- **AND** all five SHALL be checked by default
- **AND** the `Disabled` row SHALL additionally be non-interactive and
  visually muted (opacity `0.65`)

### Requirement: Radio toggles

The system SHALL render the "Radios Buttons" block with five custom colored
radio rows (same palette), four selected.

#### Scenario: Radio rows

- **GIVEN** the "Radios Buttons" block is displayed
- **WHEN** the user views the rows
- **THEN** the rows SHALL match the checkbox rows' colors and labels
- **AND** the Primary, Success, Danger, and Warning radios SHALL be
  selected by default, with the selection dot and ring in the row's palette
  color
- **AND** the `Disabled` radio SHALL be disabled and unchecked

### Requirement: Slide toggles

The system SHALL render the "Slide Button" block with two iOS-style toggle
switches reproducing the reference's rendered states.

#### Scenario: Toggle states

- **GIVEN** the "Slide Button" block is displayed
- **WHEN** the user views the toggles
- **THEN** the first toggle SHALL render in the ON state: blue `#03A9F4`
  28px round knob with white "ON" text on the left, `#ebf7fc` track, and a
  description reading "Toggle is on"
- **AND** the second toggle SHALL render in the OFF state: red `#F44336`
  knob on the right, `#fcebeb` track, and a description reading "Toggle is
  Off"
- **AND** each toggle SHALL be a real switch: activating it SHALL flip the
  state (checked = ON blue knob left + white "ON"; unchecked = OFF red knob
  right) and update the knob/track colors accordingly

### Requirement: Social buttons

The system SHALL render the "Social Buttons" block with the five brand
button rows (Facebook, Twitter, LinkedIn, Pinterest, Dribbble), each with
four icon-only variants and three labeled variants with share counts.

#### Scenario: Brand rows

- **GIVEN** the "Social Buttons" block is displayed
- **WHEN** the user views its rows
- **THEN** a Facebook row SHALL render in `#4f69a2` with labels `Share -
8.2k`, `Share - 8.5k`, `Share - 8k`
- **AND** a Twitter row SHALL render in `#69b6f0` with `Connect with
Twitter` ×3
- **AND** a LinkedIn row SHALL render in `#2884ba` with `Connect with
Linkedin` ×3
- **AND** a Pinterest row SHALL render in `#d03940` with `Pin it - 1k` ×3
- **AND** a Dribbble row SHALL render in `#ea6294` with `Find us on
Dribbble` ×3
- **AND** each brand SHALL be shown in seven variants: icon-only solid,
  icon-only round, icon-only outline, icon-only outline-round, and labeled
  solid / outline / link

### Requirement: Trailing action row

The system SHALL render the final unlabeled row of round-outline action
buttons and the solid "Create Account" pill.

#### Scenario: Action buttons

- **GIVEN** the Toggle page is rendered
- **WHEN** the user scrolls to the bottom of the section
- **THEN** round-outline buttons SHALL read `Watch Photos` (images icon),
  `Download` (download icon), a download-icon-only button, `Add Comment`
  (no icon), a chatboxes-icon-only button, and `Like` (heart icon) with a
  grey `2` badge
- **AND** a solid `Create Account` pill SHALL render in primary coral
  `#ec8f6a`

### Requirement: Responsive behavior

The system SHALL keep the centered single-column kit layout at all
viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Toggle page is rendered on a viewport ≤768px
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

- **GIVEN** the Toggle page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-toggle`
- [ ] `scripts/verify-app.sh toggle` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): "Button #07" title → solid
      row (Default/Round/Default/Default) → solid icon row → round icon
      row → outline row → round-outline row → Dropdown Buttons → Group
      Buttons → Checkboxes → Radios Buttons → Slide Button → Social
      Buttons → trailing action row → minimal Component Dock footer; white
      page, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#ec8f6a`
      primary, `#8bbabb` secondary, `#e2c275` tertiary, `#b96b9f`
      quarternary, `#343a40` dark; social `#4f69a2` `#69b6f0` `#2884ba`
      `#d03940` `#ea6294`; toggle `#03A9F4` / `#F44336` / `#ebf7fc` /
      `#fcebeb`; pill radius 40px; ftco base button (12px 16px, 14px/500,
      radius 5px, shadow)
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Toggle — Button Showcase"
- [ ] Buttons: solid/outline/round variants; icon buttons with 45px white
      badge circles (lucide icons); 4 working dropdowns (ARIA + Escape/
      outside click); segmented groups; custom colored checkbox + radio
      rows; 2 interactive iOS toggles with ON/OFF states; 5 social brand
      rows (inline SVG brand glyphs — NOT lucide-react, brand icons were
      removed); trailing action row with "2" badge
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 02"
      row, line 663 — Bootstrap Buttons category)
