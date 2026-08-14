# Template: Glaze (Button / UI Kit Showcase — Glazed Stat Buttons)

## Purpose

Glaze is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 19" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-19/), built under a
DIFFERENT name (**Glaze** — evoking the page's signature: the stat-card
buttons carry SOLID, saturated color blocks — the "Pick Your Color" swatch
buttons and the full-color icon boxes on the white cards look _glazed_, a
glossy color coating, unlike Tally/16's tinted transparent icon boxes; per
the monorepo naming mandate — never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, light-gray (`#f8f8f8`) single-section Bootstrap 4
UI-kit page with NO navbar, NO hero, NO images, NO footer. It is the
**stat-card sibling of the "Bootstrap Buttons" series** (Tally/16 is the
other stat-card sibling — see the distinction note below). The page has ONE
section (`section.ftco-section#buttons`, padding `7em 0` → `div.container`)
with four stacked blocks:

1. **Page header** — `div.row.mb-4` > `div.col-md-12` >
   `h2.heading-section` **" Button #09"** (32px Poppins, dark,
   left-aligned; the leading space is in the source HTML — render the text
   as "Button #09"). The `#09` is a copy-paste ARTIFACT: the slug is
   `bootstrap-buttons-19` but the `<title>` says "Button 09" and the
   visible heading says `#09`.
2. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
   `h2.heading-section` containing ONLY a `<small>` (16px — the custom CSS
   `.heading-section { font-size: 32px }` is overridden by
   `.heading-section small { font-size: 16px }`, so this block heading
   renders SMALL, see the artifact note below) + **4 solid color buttons**
   (`<button type="button" class="btn mb-2 mb-md-0 py-3 px-4 btn-...">`):
   `Default Primary` (`btn-primary` `#6c5ce7`), `Default Secondary`
   (`btn-secondary` `#1ee3cf`), `Default Tertiary` (`btn-tertiary`
   `#ff00c8`), `Default Gradient` (`btn-quarternary` — labeled "Gradient"
   but the CSS is a FLAT lime `#a1dd70`; another copy artifact, keep the
   label).
3. **White stat buttons** — a plain `div.row` (no `mb-5`) of **8**
   `div.col-md-3.mb-3` items (4-column grid, two visual rows), each a
   `<button type="button" class="btn btn-white w-100 align-items-stretch
d-flex">`: the first 4 put the icon box on the LEFT with right-aligned
   text (`icon icon-left icon-{color}` + `text text-right py-2 pr-3`), the
   last 4 put the icon box on the RIGHT with left-aligned text (`icon
icon-right icon-{color}` + `text text-left py-2 pl-3`). The icon box is
   SOLID accent color with a WHITE 30px glyph. Content:
   - icon-left: `275 New Posts` (brush / icon-primary), `109 New Comment`
     (chatboxes / icon-secondary), `68 % Bounce Rate` (pulse /
     icon-tertiary), `343 Total Visits` (people / icon-quarternary).
   - icon-right: `275 New Projects` (brush / icon-quarternary), `109 New
Clients` (chatboxes / icon-primary), `68 % Conversion Rate` (pulse /
     icon-secondary), `343 Support Tickets` (pricetag / icon-tertiary).
4. **Colored stat buttons** — a plain `div.row` of **8**
   `div.col-md-3.mb-3` items, each `<button type="button" class="btn
btn-{color} w-100 align-items-stretch d-flex">` (btn-primary /
   btn-secondary / btn-tertiary / btn-quarternary). The icon box here has
   NO `icon-{color}` class — it gets the default dark translucent box
   (`background: rgba(0,0,0,0.1)`) and the white glyph inherits from the
   button text:
   - icon-left: `275 New Posts` (btn-primary / brush), `109 New Comment`
     (btn-secondary / chatboxes), `68 % Bounce Rate` (btn-tertiary /
     pulse), `343 Total Visits` (btn-quarternary / people).
   - icon-right: `275 New Projects` (btn-quarternary / **briefcase** —
     NOTE: the icon differs from the white row, which uses brush),
     `109 New Clients` (btn-primary / **people** — differs from the white
     row, which uses chatboxes), `68 % Conversion Rate` (btn-secondary /
     pulse), `343 Support Tickets` (btn-tertiary / pricetag).

All buttons are plain `<button type="button" class="btn ...">` elements —
there is NO nested interactive content (the label block is a `div.text`
with an `h4` number + `span` label). Icons come from the **Ionicons** icon
font (`css/ionicons.min.css`) — the glyphs are font characters, NOT images;
the recreation must map them to `lucide-react` icons (see Design tokens).
JS bundle (jquery 3.3.1 + popper + bootstrap.min.js + `js/main.js`) drives
NOTHING on this page — it is a pure static showcase (hover is CSS-only).

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **glazed stat-card button**:
`.btn` has `border-radius: 4px`, `padding: 0` (inner spacing comes from
Bootstrap utilities on the button or the inner `.text`), `font-size:
14px`, `font-weight: 500`, `border: none`, `overflow: hidden`, and the
soft drop shadow `0px 7px 15px -13px rgba(0, 0, 0, 0.17)` (the ONLY
sibling besides Tally/16 with a shadow, but 4px radius vs Tally's 2px); a
60px icon box pinned to either side (`bottom: 0`); and the `div.text`
filling `calc(100% - 60px)` with a 22px `h4` number and a muted `span`
label (`rgba(0,0,0,0.3)` on white buttons, `rgba(255,255,255,0.8)` on
colored buttons). The four accent colors are CUSTOM (NOT Bootstrap
defaults): primary `#6c5ce7` (violet), secondary `#1ee3cf` (teal),
tertiary `#ff00c8` (hot magenta), quarternary `#a1dd70` (lime). On the
white buttons the icon box is SOLID accent color with a white glyph
(`icon-{color}` background = accent hex); on the colored buttons the icon
box is `rgba(0,0,0,0.1)` and the glyph inherits white. There is NO
text-transform, NO skew (that's Slant's signature), NO double-ring bezel
(that's Bezel's), NO asymmetric paddle radius (that's Paddle's), and NO
tinted transparent icon boxes (that's Tally's). Hover darkens the colored
buttons to their `-hover` hexes (`#4430e0` / `#17b7a7` / `#cc00a0` /
`#86d347`); white buttons have no custom hover. Glaze recreates the
structure block-for-block with matching layout, tokens, typography, and
content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 19" is FORBIDDEN
> as the app name. **Glaze** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14:
> no `apps/glaze` on origin/main, no `template-glaze` spec, no `glaze`
> in `docs/templates/`, no `[glaze](...)` shipped link in TEMPLATES.md).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-19/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/` (HTTP 200 —
> same nested `/bb/` subpath pattern as the sibling preps: Palette/01,
> Toggle/02, Float/03, Swell/04, Slant/05, Bezel/10, Tally/16, Pill/17,
> Paddle/18). The page `<title>` is "Button 09" and the visible `h2`
> heading renders **"Button #09"** (with a leading space in the source) — a
> copy-paste ARTIFACT: the slug is `bootstrap-buttons-19` but the heading
> says `#09`. Fidelity mandate = render the heading exactly as the
> reference renders it (the artifact is part of the template; do NOT "fix"
> it to #19).

> HEADING ARTIFACT (keep it): the only block heading ("Pick Your Color") is
> an `h2.heading-section` whose ONLY content is a `<small>` — the custom
> CSS `.heading-section { font-size: 32px }` is overridden by
> `.heading-section small { font-size: 16px }`, so the block heading
> renders at **16px** while the page header "Button #09" (no small)
> renders at **32px**. Recreate this exactly (a 16px Poppins
> subtitle-style heading for the Pick Your Color block).

> ICON ARTIFACTS (keep them): the white row uses `brush` for "New
> Projects" and `chatboxes` for "New Clients", but the colored row uses
> `briefcase` for "New Projects" and `people` for "New Clients" — the
> source's icon choices are inconsistent between the two rows. Recreate
> each row exactly as listed (do NOT "unify" the icons).

> SCREENSHOT NOTE: the TEMPLATES.md screenshot
> (`bootstrap-buttons-19.jpg`, 1200×972, browser-verified 2026-08-14)
> MATCHES the live render (light-gray page, "Button #09" heading, the
> purple/teal/pink/lime "Pick Your Color" row, and the 4×4 stat-card grid
> — white cards with solid color icon boxes on top, solid colored cards
> below). The static screenshot reads slightly "flatter" (shadows less
> prominent) than the live render — the live DOM + CSS is authoritative.

> REFERENCE QUIRK: the reference `body` rule sets
> `min-width: 992px !important` — the original is effectively a
> desktop-only showcase. The recreation SHALL still be responsive
> (per repo convention): columns stack below `md`, no horizontal
> overflow, section padding reduced on phones.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 19". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 680). Free UI-kit button
  component template. The `bootstrap-buttons-19` slug appears exactly once
  in TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-19/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/` (HTTP 200,
  14.6KB HTML, `<title>Button 09</title>`). Stylesheets:
  `css/ionicons.min.css` (Ionicons icon font — the brush/chatboxes/pulse/
  people/briefcase/pricetag glyphs; NOT copyable — map to lucide-react),
  `css/style.css` (224KB — Bootstrap 4.3.1 + custom ftco rules; the custom
  rules at the end of the file are the token source). JS: jquery 3.3.1 +
  popper + bootstrap.min.js + `js/main.js` — none of it drives this page
  (pure static showcase; hover is CSS-only). Structure, copy, and tokens
  below are from the live DOM + `style.css` + a browser render (verified
  2026-08-14).
- **Visual design (live browser render + screenshot, verified
  2026-08-14):** clean, flat, light-gray (`#f8f8f8`) page. One section
  (`section.ftco-section#buttons`, padding `7em 0` = 112px top/bottom) →
  `div.container` (1140px at xl). Page header row `div.row.mb-4` →
  `div.col-md-12` → `h2.heading-section` **"Button #09"** (32px Poppins,
  dark, left-aligned). Then the "Pick Your Color" row (`row.mb-5`, 16px
  small heading + 4 solid buttons: violet `#6c5ce7`, teal `#1ee3cf`, hot
  magenta `#ff00c8`, lime `#a1dd70`), then TWO `div.row` grids of
  `col-md-3` (4 columns at md+, stacking below md; `mb-3` gaps): row 1 =
  8 WHITE stat buttons, row 2 = 8 SOLID-COLOR stat buttons. Every button
  is a full-width flex card with a 60px icon box on one side and a 22px
  number + small muted label on the other. The page reads like a compact
  analytics dashboard in a vivid candy palette; the white cards carry
  SOLID glazed color icon boxes, the colored cards carry dark translucent
  icon boxes with white glyphs.
- **Section order (1:1 from live DOM) — single section `#buttons`:**
  1. **Page header** — `div.row.mb-4` > `div.col-md-12` >
     `h2.heading-section` **"Button #09"** (32px Poppins, dark; `mb-4` =
     1.5rem bottom margin; the ONLY `mb-4` row).
  2. **Pick Your Color** — `div.row.mb-5` > `div.col-md-12` >
     `h2.heading-section` > `<small>` "Pick Your Color" (16px) + 4
     buttons `btn mb-2 mb-md-0 py-3 px-4 btn-{primary,secondary,tertiary,
quarternary}`: `Default Primary` / `Default Secondary` / `Default
Tertiary` / `Default Gradient` (flat lime, not a real gradient).
  3. **White stat buttons** — plain `div.row` > 8 × `div.col-md-3.mb-3`
     > `button.btn.btn-white.w-100.align-items-stretch.d-flex`; first 4
     > icon-left (`icon icon-left icon-{color}` + `text text-right py-2
pr-3`), last 4 icon-right (`icon icon-right icon-{color}` + `text
text-left py-2 pl-3`). Numbers/labels per the Purpose list above.
  4. **Colored stat buttons** — plain `div.row` > 8 × `div.col-md-3.mb-3`
     > `button.btn.btn-{color}.w-100.align-items-stretch.d-flex`; icon
     > box has NO `icon-{color}` class (default `rgba(0,0,0,0.1)` box,
     > white glyph); first 4 icon-left, last 4 icon-right, content per the
     > Purpose list above (incl. the briefcase/people icon switches).
- **Copy is fixed and minimal:** page header "Button #09"; block heading
  "Pick Your Color"; the four `Default ...` labels; the eight metrics
  (`275`, `109`, `68 %`, `343` — note the space before `%` in `68 %`) and
  eight labels (`New Posts`, `New Comment`, `Bounce Rate`, `Total Visits`,
  `New Projects`, `New Clients`, `Conversion Rate`, `Support Tickets`).
  No uppercase, no lorem.

## Design tokens

### Colors

Brand palette (custom `style.css` overrides — the token source; ALL are
flat, no gradients despite the "Default Gradient" label):

| Token       | Base hex  | Hover hex | Notes                                                                                                           |
| ----------- | --------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| primary     | `#6c5ce7` | `#4430e0` | violet/indigo; solid buttons + `icon-primary` boxes (white glyph)                                               |
| secondary   | `#1ee3cf` | `#17b7a7` | teal; `icon-secondary` boxes                                                                                    |
| tertiary    | `#ff00c8` | `#cc00a0` | hot magenta/pink; `icon-tertiary` boxes                                                                         |
| quarternary | `#a1dd70` | `#86d347` | lime; `icon-quarternary` boxes; "Default Gradient" label (flat)                                                 |
| white       | `#ffffff` | —         | `btn-white` (black text `#000`, label `rgba(0,0,0,0.3)`); card background                                       |
| icon-box    | —         | —         | on colored buttons: `rgba(0,0,0,0.1)` box with white glyph; on white buttons: solid accent box with white glyph |

Page background `#f8f8f8` (the custom body rule); default page text
`#212529` (Bootstrap). Muted label colors: white buttons
`rgba(0,0,0,0.3)`, colored buttons `rgba(255,255,255,0.8)`.

### Fonts

- **Poppins** (body AND headings — `style.css` sets
  `font-family: "Poppins", Arial, sans-serif` on `body` and `h1–h6`).
  Load Poppins via Google Fonts `<link>` in `index.html`.
- Body: 15px, `line-height: 1.8`, weight 400.
- Headings: `line-height: 1.5`, weight 400; page header 32px; block
  heading 16px (h2 > small artifact); stat number `h4` 22px
  (`margin-bottom: 0`).

### Radii / shapes

- **Base button = 4px radius** (`border-radius: 4px`), `border-width:
1px` (but `border: none` — no visible border on solid buttons).
- **Stat-card icon box**: 60px wide, pinned to the bottom, `overflow:
hidden` on the button clips it flush with the card corners.
- No pills, no tags, no asymmetric corners — this sibling is flat
  rectangles only.

### Shadows / effects

- Base: `0px 7px 15px -13px rgba(0, 0, 0, 0.17)` (soft, subtle lift).
- Hover: NO shadow change (unlike Paddle/18); colored buttons darken to
  their `-hover` hex; white buttons have no custom hover.
- Transition: `all 0.3s ease` on buttons.

### Layout

- Section `#buttons`: `padding: 7em 0` (112px), background `#f8f8f8`,
  `div.container` (1140px max at xl).
- Page header row `mb-4`; "Pick Your Color" row `mb-5`; the two stat rows
  are plain `div.row` (no bottom margin).
- Stat grid: `col-md-3` (4 columns at md+, stacks below md), `mb-3` gap
  between items.
- "Pick Your Color" buttons: `py-3 px-4` (16px/24px padding) + `mb-2
mb-md-0` spacing; stat `.text` block: `py-2 pr-3` (icon-left) or
  `py-2 pl-3` (icon-right).
- Reference quirk: `body { min-width: 992px !important }` — desktop-only
  original; the recreation SHALL be responsive instead (see Requirements).

## Requirements

### Requirement: Page structure

The system SHALL render the Glaze page as one section on a light-gray
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Glaze page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be light gray (`#f8f8f8`)
- **AND** a single section SHALL be headed **"Button #09"** (32px Poppins,
  dark, left-aligned, `mb-4`)
- **AND** the section SHALL contain, in order: the "Pick Your Color"
  block (16px small heading + 4 solid buttons), the 8 white stat buttons,
  and the 8 colored stat buttons
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Pick Your Color block

The system SHALL render the "Pick Your Color" block with four solid color
buttons and the artifact heading.

#### Scenario: Swatch row

- **GIVEN** the Glaze page is rendered
- **WHEN** the user views the "Pick Your Color" block
- **THEN** the block heading SHALL read **"Pick Your Color"** at 16px
  Poppins (the `h2 > small` artifact — NOT 32px)
- **AND** four buttons SHALL render in order: `Default Primary`
  (`#6c5ce7`), `Default Secondary` (`#1ee3cf`), `Default Tertiary`
  (`#ff00c8`), `Default Gradient` (`#a1dd70` — flat lime, NOT a real
  gradient)
- **AND** each button SHALL have white text, 4px radius, the base shadow
  `0px 7px 15px -13px rgba(0,0,0,0.17)`, and `py-3 px-4` padding

### Requirement: White stat buttons

The system SHALL render 8 white stat-card buttons in a 4-column grid.

#### Scenario: White cards

- **GIVEN** the Glaze page is rendered
- **WHEN** the user views the white stat-button grid
- **THEN** 8 buttons SHALL render on white (`#ffffff`) cards in a 4-column
  grid (2 rows)
- **AND** the first 4 SHALL have a solid accent icon box on the LEFT with
  right-aligned text: `275 New Posts` (brush / `#6c5ce7`), `109 New
Comment` (chatboxes / `#1ee3cf`), `68 % Bounce Rate` (pulse /
  `#ff00c8`), `343 Total Visits` (people / `#a1dd70`)
- **AND** the last 4 SHALL have a solid accent icon box on the RIGHT with
  left-aligned text: `275 New Projects` (brush / `#a1dd70`), `109 New
Clients` (chatboxes / `#6c5ce7`), `68 % Conversion Rate` (pulse /
  `#1ee3cf`), `343 Support Tickets` (pricetag / `#ff00c8`)
- **AND** each icon box SHALL be solid accent color with a WHITE glyph
  (the glazed signature — NOT a tinted transparent box like Tally/16)
- **AND** the number SHALL be 22px Poppins with the label in muted
  `rgba(0,0,0,0.3)`

### Requirement: Colored stat buttons

The system SHALL render 8 solid-color stat-card buttons in a 4-column
grid.

#### Scenario: Colored cards

- **GIVEN** the Glaze page is rendered
- **WHEN** the user views the colored stat-button grid
- **THEN** 8 buttons SHALL render with solid brand backgrounds in a
  4-column grid (2 rows): `#6c5ce7`, `#1ee3cf`, `#ff00c8`, `#a1dd70` in
  the same color rotation as the white row
- **AND** the first 4 SHALL have the icon box on the LEFT: `275 New
Posts` (brush / primary), `109 New Comment` (chatboxes / secondary),
  `68 % Bounce Rate` (pulse / tertiary), `343 Total Visits` (people /
  quarternary)
- **AND** the last 4 SHALL have the icon box on the RIGHT: `275 New
Projects` (briefcase / quarternary), `109 New Clients` (people /
  primary), `68 % Conversion Rate` (pulse / secondary), `343 Support
Tickets` (pricetag / tertiary)
- **AND** the icon box SHALL be dark translucent (`rgba(0,0,0,0.1)`) with
  a white glyph (no `icon-{color}` class)
- **AND** the label SHALL be `rgba(255,255,255,0.8)` on white numbers
- **AND** the icon choices SHALL match the source's inconsistent pairing
  (briefcase/people here vs brush/chatboxes in the white row — do NOT
  unify them)

### Requirement: Stat-card button anatomy

Every stat button SHALL be a flat 4px-radius flex card with the signature
shadow and the 60px icon box.

#### Scenario: Shared anatomy

- **GIVEN** any stat button is displayed
- **WHEN** the user inspects its styling
- **THEN** the button SHALL be full-width, `display: flex`, stretched, with
  `border-radius: 4px`, `border: none`, 14px/500 Poppins text, and the
  signature shadow `0px 7px 15px -13px rgba(0,0,0,0.17)`
- **AND** the icon box SHALL be 60px wide, pinned to the bottom edge, with
  a 30px glyph
- **AND** the text block SHALL fill `calc(100% - 60px)` with a 22px `h4`
  number over a small muted label
- **AND** on hover the colored buttons SHALL darken to their `-hover`
  hexes (`#4430e0` / `#17b7a7` / `#cc00a0` / `#86d347`) and white buttons
  SHALL NOT change background

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths (the
reference is desktop-only with `body { min-width: 992px !important }` —
the recreation must improve on that).

#### Scenario: Mobile layout

- **GIVEN** the Glaze page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the container SHALL be full width without horizontal overflow
- **AND** the 4-column stat grids SHALL stack to a single column
- **AND** the section padding SHALL be reduced (`7em` is excessive on
  phones)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Glaze page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-glaze`
- [ ] `scripts/verify-app.sh glaze` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): "Button #09" header →
      "Pick Your Color" (16px heading + 4 solid buttons) → 8 white stat
      buttons → 8 colored stat buttons → minimal Component Dock footer;
      light-gray `#f8f8f8` page, no navbar/hero/images
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#6c5ce7`, secondary `#1ee3cf`, tertiary `#ff00c8`, quarternary
      `#a1dd70` (+ hover hexes `#4430e0`/`#17b7a7`/`#cc00a0`/`#86d347`),
      white `#ffffff`, page `#f8f8f8`, muted labels `rgba(0,0,0,0.3)` /
      `rgba(255,255,255,0.8)`, icon-box `rgba(0,0,0,0.1)`
- [ ] Font: Poppins (body + headings) via Google Fonts `<link>` in
      `index.html`; body 15px; page header 32px; block heading 16px;
      stat number 22px; title uses the app's own title per repo
      convention (reference `<title>` "Button 09" is a generic artifact)
- [ ] Anatomy: flat 4px-radius full-width flex buttons, `border: none`,
      shadow `0px 7px 15px -13px rgba(0,0,0,0.17)`, 60px icon box with
      30px glyph, text block `calc(100% - 60px)`, h4 22px; hover darkens
      colored buttons to `-hover` hexes, white buttons unchanged
- [ ] Artifacts rendered EXACTLY: page header "Button #09" (slug 19 — do
      NOT "fix"); "Pick Your Color" heading at 16px via h2 > small;
      "Default Gradient" is flat lime `#a1dd70` (no real gradient);
      `68 %` keeps the space before `%`; colored-row icon switches
      (briefcase for New Projects, people for New Clients)
- [ ] Copy exact: `Default Primary` / `Default Secondary` / `Default
    Tertiary` / `Default Gradient`; numbers `275` / `109` / `68 %` /
      `343`; labels `New Posts` / `New Comment` / `Bounce Rate` / `Total
    Visits` / `New Projects` / `New Clients` / `Conversion Rate` /
      `Support Tickets`
- [ ] Icons from `lucide-react` mapped from Ionicons: brush →
      Paintbrush, chatboxes → MessageSquare, pulse → Activity, people →
      Users, briefcase → Briefcase, pricetag → Tag; NO Ionicons font, NO
      copied CSS/HTML
- [ ] `focus-visible` rings added (repo a11y convention); icon-only
      elements accessible
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` only where they fit the
      stat-card anatomy (the reference button is custom — check how
      shipped sibling apps handle it; hostelry imports `cn` from the ui
      barrel)
- [ ] Responsive: columns stack below `md`, no horizontal overflow,
      reduced section padding on phones (reference is `min-width: 992px`
      desktop-only — recreation must be responsive)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 19"
      row, line 680 — Bootstrap Buttons (20) category; single row, no
      dups)
