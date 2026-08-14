# Template: Tally (Button / UI Kit Showcase — Stat Buttons)

## Purpose

Tally is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 16" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-16/), built under a
DIFFERENT name (**Tally** — evoking the page's signature: every button is a
dashboard-style _stat tally_ — a full-width flex button holding a 60px icon
box on one side and a large number (`h4`) over a small label (`span`) on the
other, like analytics counters; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-section Bootstrap 4 UI-kit page. The
section is headed **"Button #06"** (`h2.heading-section`, 32px Poppins,
left-aligned, inside `row.mb-4` → `col-md-12`; the `#06` is a copy-paste
ARTIFACT — the slug is `bootstrap-buttons-16`, and the heading number does
NOT match it) and contains **16 stat buttons in two rows of 8** (each row a
`div.row` of `col-md-3` columns = a 4-column grid, two rows): the first row
of 8 white buttons (`btn btn-white`) and the second row of 8 solid-color
buttons (`btn btn-primary / btn-secondary / btn-tertiary /
btn-quarternary`). Within each row, the first 4 buttons place the icon box
on the LEFT with text right-aligned (`icon-left` + `text-right`), the last 4
place the icon box on the RIGHT with text left-aligned (`icon-right` +
`text-left`). Each button pairs one of four accent colors with one of six
ionicons (brush, chatboxes, pulse, people, briefcase, pricetag) and a
metric: `275 New Posts`, `109 New Comment`, `68 % Bounce Rate`, `343 Total
Visits`, `275 New Projects`, `109 New Clients`, `68 % Conversion Rate`,
`343 Support Tickets`. There is ONLY one section (no navbar, no hero, no
images, no footer in the original). The buttons are plain
`<button type="button" class="btn ...">` elements — the label block is a
`div.text` with an `h4` (number) + `span` (label); there is NO nested
interactive content.

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **stat-card button anatomy**:
`.btn` is a full-width (`w-100`) flex row (`d-flex align-items-stretch`)
with `border-radius: 2px`, `padding: 15px 30px`, 14px/500 text, and a soft
drop shadow (`0px 7px 15px -13px rgba(0,0,0,0.17)` — the ONLY sibling with a
shadow); a 60px icon box pinned to either side (`bottom: 0`); and the
`div.text` filling `calc(100% - 60px)` with a 22px `h4` number and a muted
`span` label (`rgba(0,0,0,0.3)` on white buttons, `rgba(255,255,255,0.8)` on
colored buttons). The four accent colors are CUSTOM (NOT Bootstrap
defaults): primary `#1fbbd3` (cyan), secondary `#fb582f` (orange),
tertiary `#159688` (teal), quarternary `#e92465` (magenta); on the white
buttons the icon box is tinted with the accent (`icon-{color} i { color:
<accent> }`), on the colored buttons the icon inherits white. There is NO
text-transform, NO skew (that's Slant's signature), NO double-ring bezel
(that's Bezel's), NO white-wash `:before` (that's Swell's), and NO
uppercase labels. Hover darkens the colored buttons to their `-hover`
hexes (`#1894a7` / `#f23405` / `#0f695f` / `#c6144f`); white buttons only
lose the shadow slightly via Bootstrap's default hover state. Tally
recreates the structure section-for-section with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 16" is FORBIDDEN
> as the app name. **Tally** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-16/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/` (HTTP 200 —
> same nested `/bb/` subpath pattern as the sibling "Bootstrap Buttons 01"
> (Palette), "02" (Toggle), "03" (Float), "04" (Swell), "05" (Slant) and
> "10" (Bezel) preps). The page `<title>` is "Button 06", and the visible
> `h2` heading renders **"Button #06"** — a copy-paste ARTIFACT: the slug is
> `bootstrap-buttons-16` but the heading (and `<title>`) say `06`. Fidelity
> mandate = render the heading exactly as the reference renders it (the
> artifact is part of the template; do NOT "fix" it to #16).

> SCREENSHOT NOTE: the TEMPLATES.md screenshot
> (`bootstrap-buttons-16.jpg`, 1200×972, browser-verified 2026-08-14)
> MATCHES the live render 1:1 (white page, "Button #06" heading, 16 stat
> cards in a 4×4 grid — white cards on top, colored cards below). Unlike
> the Bezel sibling (whose static screenshot predates the current CSS), no
> screenshot-vs-live discrepancy exists here; the live DOM + CSS is
> authoritative and the screenshot corroborates it.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 16". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 677). Free UI-kit button-component
  template. The `bootstrap-buttons-16` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-16/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-16/` (HTTP 200,
  13.9KB HTML, `<title>Button 06</title>`). Stylesheets:
  `css/ionicons.min.css` (the icon font — brush/chatboxes/pulse/people/
  briefcase/pricetag glyphs) and `css/style.css` (224KB — Bootstrap 4.3.1
  minified + the ftco custom section at the end; the custom rules are the
  token source). JS: jQuery 3 + popper + `bootstrap.min.js` + `js/main.js`
  — none of it drives this page (pure static showcase; hover is CSS-only).
  Structure, copy, and tokens below are from the live DOM + `style.css` +
  a browser render (verified 2026-08-14).
- **Visual design (live browser render, verified 2026-08-14):** extremely
  clean, flat, white (`#fff`) page. One section
  (`section.ftco-section#buttons`, padding `7em 0` = 112px top/bottom) →
  `div.container` (1140px at xl). Heading row `div.row.mb-4` →
  `div.col-md-12` → `h2.heading-section` **"Button #06"** (32px Poppins,
  left-aligned). Then TWO `div.row` grids of `col-md-3` (4 columns at
  md+, stacking below md; `mb-3` gaps): row 1 = 8 WHITE stat buttons, row
  2 = 8 SOLID-COLOR stat buttons. Every button is a full-width flex card
  with a 60px icon box on one side and a 22px number + small label on the
  other. The page reads like a compact analytics dashboard: 4 accent
  colors (cyan `#1fbbd3`, orange `#fb582f`, teal `#159688`, magenta
  `#e92465`), white cards with tinted icon boxes on top, solid saturated
  cards with white icons below.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `div.row.mb-4` > `div.col-md-12` > `h2.heading-section`
     **"Button #06"** (32px Poppins; `mb-4` = 1.5rem bottom margin).
  2. **White stat buttons (row 1)** — `div.row` with **8** `div.col-md-3
mb-3` items, each `<button type="button" class="btn btn-white w-100
align-items-stretch d-flex">`:
     - 4 with `icon-left` + `text-right` (icon box on the LEFT):
       1. `icon-primary` + ion-ios-brush → `275` **New Posts**
       2. `icon-secondary` + ion-ios-chatboxes → `109` **New Comment**
       3. `icon-tertiary` + ion-ios-pulse → `68 %` **Bounce Rate**
       4. `icon-quarternary` + ion-ios-people → `343` **Total Visits**
     - 4 with `text-left` + `icon-right` (icon box on the RIGHT): 5. `275` **New Projects** + `icon-quarternary` + ion-ios-brush 6. `109` **New Clients** + `icon-primary` + ion-ios-chatboxes 7. `68 %` **Conversion Rate** + `icon-secondary` + ion-ios-pulse 8. `343` **Support Tickets** + `icon-tertiary` + ion-ios-pricetag
  3. **Colored stat buttons (row 2)** — `div.row` with **8** `div.col-md-3
mb-3` items, each `<button type="button" class="btn btn-{color} w-100
align-items-stretch d-flex">` (NO `icon-{color}` class — the icon
     inherits white):
     - 4 with `icon-left` + `text-right` (same metric set as row-1 left):
       1. `btn-primary` + ion-ios-brush → `275` **New Posts**
       2. `btn-secondary` + ion-ios-chatboxes → `109` **New Comment**
       3. `btn-tertiary` + ion-ios-pulse → `68 %` **Bounce Rate**
       4. `btn-quarternary` + ion-ios-people → `343` **Total Visits**
     - 4 with `text-left` + `icon-right`: 5. `btn-quarternary` + ion-ios-briefcase → `275` **New Projects** 6. `btn-primary` + ion-ios-people → `109` **New Clients** 7. `btn-secondary` + ion-ios-pulse → `68 %` **Conversion Rate** 8. `btn-tertiary` + ion-ios-pricetag → `343` **Support Tickets**
- **Button anatomy (all 16 buttons):**
  `<button type="button" class="btn btn-{variant} w-100 align-items-stretch
d-flex">` — a full-width flex row (icon box + text block), NOT a
  bare-label button. Children:
  - `div.icon.icon-{left|right} d-flex align-items-center
justify-content-center` — the 60px icon box, pinned to the left or
    right edge (`left: 0` / `right: 0`, `bottom: 0`); on white buttons it
    ALSO carries `icon-{color}` (tinted icon), on colored buttons it does
    not (icon inherits the white text color). Contains `<i
class="ion-ios-{name}">` (empty element, glyph from the ionicons
    font, `font-size: 30px`).
  - `div.text.text-{left|right}` — fills `calc(100% - 60px)`; contains
    `h4` (the number, 22px, `margin-bottom: 0`) + `span` (the label,
    muted: `rgba(0,0,0,0.3)` on white, `rgba(255,255,255,0.8)` on
    colored).
- **Colored button variants:** `.btn-primary { background: #1fbbd3;
border-color: #1fbbd3; color: #fff }`, `.btn-secondary { background:
#fb582f; ... }`, `.btn-tertiary { background: #159688; ... }`,
  `.btn-quarternary { background: #e92465; ... }`. Hover/focus darken the
  background + border to `#1894a7` / `#f23405` / `#0f695f` / `#c6144f`
  (`!important`). White button: `background: #fff; border-color: #fff;
color: #000`.
- **Hover/focus/active behavior:** `.btn:hover, .btn:active, .btn:focus {
outline: none !important }`. Colored buttons darken to their hover hex
  (see token table). White buttons rely on Bootstrap's `.btn:hover`
  (slightly stronger shadow; `box-shadow: none !important` is only on
  `.btn-link`). The `.3s all ease` transition applies to the button as a
  whole. NO transform/skew, NO pseudo-element frames, NO ripple.
- **JS behaviors (original):** none — the page is a static showcase (the
  jQuery/popper/bootstrap/main.js bundle is inert here; no dropdowns, no
  toggles). Hover is pure CSS. Recreate with CSS transitions; add
  repo-convention `focus-visible` rings (the reference only darkens the
  background on `:focus` — not a sufficient a11y focus indicator).
- **Design tokens (from `style.css` + computed styles):**

  | Token                               | Value                                                                                                                                                                                                | Usage                                               |
  | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
  | Page background                     | `#ffffff`                                                                                                                                                                                            | `body`                                              |
  | Section padding                     | `7em 0` (112px top/bottom)                                                                                                                                                                           | `.ftco-section` (ONE section)                       |
  | Container                           | Bootstrap container (1140px at xl)                                                                                                                                                                   | `div.container`                                     |
  | Grid                                | 4 columns at md+ (`col-md-3` = 25%), stacked below md; `mb-3` (1rem) gaps between cards; heading row `mb-4` (1.5rem)                                                                                 | `div.row` + `col-md-3 mb-3`                         |
  | Section heading                     | **"Button #06"** (32px Poppins, weight 400, `line-height: 1.5`, left-aligned) — `#06` is the copy-paste artifact, render it EXACTLY                                                                  | `h2.heading-section`                                |
  | Headings font                       | Poppins (h1–h5: `line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif`)                                                                                                     | `h1,h2,h3,h4,h5`                                    |
  | Body font                           | Bootstrap system stack (Roboto-first)                                                                                                                                                                | `body` (buttons inherit it)                         |
  | Button base                         | `padding: 15px 30px`, `border-width: 1px`, `border-radius: 2px`, `font-size: 14px`, `font-weight: 500`, `overflow: hidden`, `position: relative`, `transition: all 0.3s ease`, `cursor: pointer`     | `.btn`                                              |
  | Button shadow                       | `0px 7px 15px -13px rgba(0, 0, 0, 0.17)` — the ONLY Bootstrap-Buttons sibling with a drop shadow                                                                                                     | `.btn` (box-shadow)                                 |
  | Icon box                            | `width: 60px`, `bottom: 0`; `icon-left { left: 0 }`, `icon-right { right: 0 }`; icon glyph `font-size: 30px`; icon box itself `display:flex; align-items:center; justify-content:center` (utilities) | `.btn .icon`                                        |
  | Text block                          | `width: calc(100% - 60px)`; `h4` = 22px, `margin-bottom: 0`; `span` = muted label                                                                                                                    | `.btn .text`                                        |
  | White button                        | `background: #fff; border-color: #fff; color: #000`; `span` color `rgba(0, 0, 0, 0.3)`                                                                                                               | `.btn-white`                                        |
  | Colored button                      | `color: #fff`; `span` color `rgba(255, 255, 255, 0.8)`; icon inherits white (no `icon-{color}` class)                                                                                                | `.btn-{color}`                                      |
  | Primary (cyan)                      | `#1fbbd3` — hover/focus `#1894a7`                                                                                                                                                                    | `btn-primary`, `icon-primary` (white-row icon tint) |
  | Secondary (orange)                  | `#fb582f` — hover/focus `#f23405`                                                                                                                                                                    | `btn-secondary`, `icon-secondary`                   |
  | Tertiary (teal)                     | `#159688` — hover/focus `#0f695f`                                                                                                                                                                    | `btn-tertiary`, `icon-tertiary`                     |
  | Quarternary (magenta)               | `#e92465` — hover/focus `#c6144f`                                                                                                                                                                    | `btn-quarternary`, `icon-quarternary`               |
  | **Icons (ionicons → lucide-react)** | `ion-ios-brush` → `Paintbrush`, `ion-ios-chatboxes` → `MessageSquare`, `ion-ios-pulse` → `Activity`, `ion-ios-people` → `Users`, `ion-ios-briefcase` → `Briefcase`, `ion-ios-pricetag` → `Tag`       | `<i class="ion-ios-*">` → lucide icons at 30px      |

- **Fonts:** **Poppins** for headings (h1–h5, weight 400; the heading is
  32px Poppins); body/buttons use the Bootstrap system stack (Roboto-first
  sans). Load Poppins (weight 400 at minimum; the reference loads 300/400)
  via Google Fonts `<link>` in `index.html`. The ionicons glyph font is an
  asset — do NOT copy it; use `lucide-react` icons instead (repo rule).
- **NOT uppercase:** no `text-transform: uppercase` anywhere — labels
  render exactly as written ("New Posts", "Bounce Rate", ...). Do not add
  uppercase styling.
- **NOT a bare-label kit:** unlike the Bezel/Slant siblings, every button
  has an icon box + number + label (stat-card anatomy). The heading says
  "Button #06" but the content is dashboard-style stat buttons.
- **NOT Slant's skew / NOT Bezel's bezel / NOT Swell's wash:** no
  `transform`, no double pseudo-element rings, no white-wash `:before`.
  The button is a plain flex card with a soft shadow. Keep the siblings'
  signatures distinct.
- **Heading artifact is REAL:** `h2` renders "Button #06" (slug is 16).
  The Bezel sibling note documents the same artifact class (05's heading
  said "#02"). Render "Button #06" EXACTLY — do not "fix" it to #16.

## Requirements

### Requirement: Page structure

The system SHALL render the Tally page as one section on a white
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Tally page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single section SHALL be headed **"Button #06"** (32px Poppins,
  left-aligned)
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Content column

- **GIVEN** the section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered Bootstrap container with
  `7em` (112px) vertical section padding
- **AND** the section SHALL contain, in order: the heading row, a row of 8
  white stat buttons, and a row of 8 colored stat buttons

### Requirement: Heading

The system SHALL render the reference heading exactly, including the
copy-paste `#06` artifact.

#### Scenario: Exact heading text

- **GIVEN** the Tally page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"Button #06"** — exactly as the
  reference renders it (the number `06` is a copy-paste artifact of the
  `bootstrap-buttons-16` slug; do NOT "fix" it to #16)
- **AND** the heading SHALL be 32px Poppins, dark text, left-aligned, with
  a 1.5rem bottom margin (`mb-4`)

### Requirement: Stat button anatomy

Every stat button SHALL be a full-width flex card with a 60px icon box on
one side and a number + label on the other.

#### Scenario: Shared anatomy

- **GIVEN** any stat button is displayed
- **WHEN** the user inspects its structure
- **THEN** the button SHALL span the full column width (`w-100`), be
  `display: flex` with `align-items: stretch`, and use the base button
  styling (14px/500 text, `15px 30px` padding, `2px` radius, `0.3s ease`
  transition, `cursor: pointer`)
- **AND** a 60px icon box SHALL render at one side, vertically centered,
  containing a 30px line icon
- **AND** a text block SHALL fill the remaining `calc(100% - 60px)` width,
  containing a 22px number (`h4`, no bottom margin) over a small muted
  label (`span`)
- **AND** the label SHALL be muted (`rgba(0,0,0,0.3)` on white buttons,
  `rgba(255,255,255,0.8)` on colored buttons)

#### Scenario: Soft shadow

- **GIVEN** any stat button is displayed
- **WHEN** the user inspects its shadow
- **THEN** the button SHALL cast the signature soft drop shadow `0px 7px
15px -13px rgba(0, 0, 0, 0.17)` (unique to this Bootstrap-Buttons
  sibling)

### Requirement: White stat buttons (row 1)

The system SHALL render the first row of 8 white buttons with tinted icon
boxes, in the reference order and icon/text alignment.

#### Scenario: Icon-left buttons

- **GIVEN** the white-button row is displayed
- **WHEN** the user views the first four buttons
- **THEN** four white buttons (`#fff` background, black text) SHALL render
  with the icon box on the LEFT and right-aligned text, showing:
  1. cyan (`#1fbbd3`) brush icon — `275` **New Posts**
  2. orange (`#fb582f`) chat icon — `109` **New Comment**
  3. teal (`#159688`) pulse icon — `68 %` **Bounce Rate**
  4. magenta (`#e92465`) users icon — `343` **Total Visits**
- **AND** each icon SHALL be tinted with its accent color

#### Scenario: Icon-right buttons

- **GIVEN** the white-button row is displayed
- **WHEN** the user views the last four buttons
- **THEN** four white buttons SHALL render with left-aligned text and the
  icon box on the RIGHT, showing: 5. `275` **New Projects** — magenta brush icon 6. `109` **New Clients** — cyan chat icon 7. `68 %` **Conversion Rate** — orange pulse icon 8. `343` **Support Tickets** — teal tag icon
- **AND** each icon SHALL be tinted with its accent color

### Requirement: Colored stat buttons (row 2)

The system SHALL render the second row of 8 solid-color buttons with white
text and white icons, in the reference order and icon/text alignment.

#### Scenario: Solid color palette

- **GIVEN** the colored-button row is displayed
- **WHEN** the user views the buttons
- **THEN** four solid buttons SHALL render with the icon box on the LEFT
  and right-aligned text: cyan (`#1fbbd3`) — `275` **New Posts**; orange
  (`#fb582f`) — `109` **New Comment**; teal (`#159688`) — `68 %` **Bounce
  Rate**; magenta (`#e92465`) — `343` **Total Visits**
- **AND** four solid buttons SHALL render with left-aligned text and the
  icon box on the RIGHT: magenta (`#e92465`) briefcase — `275` **New
  Projects**; cyan (`#1fbbd3`) users — `109` **New Clients**; orange
  (`#fb582f`) pulse — `68 %` **Conversion Rate**; teal (`#159688`) tag —
  `343` **Support Tickets**
- **AND** every colored button SHALL have white text (`#fff`), a muted
  white label (`rgba(255,255,255,0.8)`), and a WHITE icon (the icon box
  carries no tint class on colored buttons)

#### Scenario: Hover state

- **GIVEN** any colored button is displayed
- **WHEN** the user hovers or keyboard-focuses it
- **THEN** the button background SHALL darken to its hover hex: cyan →
  `#1894a7`, orange → `#f23405`, teal → `#0f695f`, magenta → `#c6144f`
- **AND** the text, label, and icon SHALL remain white
- **AND** the button SHALL show a visible focus indication (repo
  convention `focus-visible` ring; the reference's background darkening
  alone is not a sufficient a11y focus indicator)

### Requirement: Icon mapping

The system SHALL render the reference ionicons as lucide-react icons at
30px, mapping each glyph to its semantic equivalent.

#### Scenario: Lucide equivalents

- **GIVEN** any stat button is displayed
- **WHEN** the user inspects its icon
- **THEN** the icon SHALL be a lucide-react icon at 30px mapped from the
  reference glyph: `ion-ios-brush` → `Paintbrush`, `ion-ios-chatboxes` →
  `MessageSquare`, `ion-ios-pulse` → `Activity`, `ion-ios-people` →
  `Users`, `ion-ios-briefcase` → `Briefcase`, `ion-ios-pricetag` → `Tag`
- **AND** the icon SHALL be tinted with the accent color on white buttons
  and white on colored buttons

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Tally page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the 4-column grid SHALL collapse to single-column (each stat
  button full width) without horizontal overflow
- **AND** the icon box and text block SHALL keep their alignment (icon
  left/right per button) and remain fully readable
- **AND** the section's `7em` vertical padding SHALL be relaxed (auto or
  reduced) so the section is not overly tall on small screens

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Tally page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-tally`
- [ ] `scripts/verify-app.sh tally` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("Button #06"
      heading → row of 8 white stat buttons → row of 8 colored stat
      buttons) → minimal Component Dock footer; white page, no
      navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#1fbbd3`, secondary `#fb582f`, tertiary `#159688`, quarternary
      `#e92465`; hovers `#1894a7` / `#f23405` / `#0f695f` / `#c6144f`;
      white `#fff`; page `#ffffff`
- [ ] Font: Poppins (headings, 32px section heading) via Google Fonts
      `<link>` in `index.html`; body uses the default sans stack; title
      "Tally — Stat Button Showcase" (reference `<title>` "Button 06" is a
      generic artifact — use the app's own title per repo convention)
- [ ] 16 stat buttons, exact copy + order (275 New Posts / 109 New
      Comment / 68 % Bounce Rate / 343 Total Visits / 275 New Projects /
      109 New Clients / 68 % Conversion Rate / 343 Support Tickets) — note
      the reference renders "68 %" with a space before the percent; keep
      the artifact or normalize consistently (spec says keep reference
      copy)
- [ ] Anatomy: full-width flex button, 60px icon box (30px lucide icon,
      tinted accent on white rows, white on colored rows), text block
      `calc(100% - 60px)` with 22px `h4` + muted `span` (`rgba(0,0,0,0.3)`
      white / `rgba(255,255,255,0.8)` colored); base 14px/500, `15px 30px`
      padding, 2px radius, `.3s all ease` transition, signature shadow
      `0 7px 15px -13px rgba(0,0,0,0.17)`
- [ ] Icon/alignment matrix matches reference 1:1 (row 1: 4 icon-left +
      4 icon-right; row 2: same; icon colors per the matrix in the spec)
- [ ] Hover: colored buttons darken to hover hex; NO skew (Slant's
      signature), NO double-ring bezel (Bezel's), NO white-wash `:before`
      (Swell's), NO text-transform (labels title-case as written)
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
      — or use them only where they fit the stat-button anatomy
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 16"
      row, line 677 — Bootstrap Buttons category; single row, no dups)
