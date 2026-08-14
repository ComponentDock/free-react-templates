# Template: Pill (Button / UI Kit Showcase — Classic Buttons)

## Purpose

Pill is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 17" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-17/), built under a
DIFFERENT name (**Pill** — evoking the page's signature: every button is a
_borderless pill_ — `border-radius: 30px`, `border: none`, a strong soft
drop shadow `0 15px 30px 0 rgba(0, 0, 0, 0.2)`, and a press-down hover that
kills the shadow and nudges the button 1px down; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, white, single-section Bootstrap 4 UI-kit page with
NO navbar, NO hero, NO images, NO footer. The section is a full-viewport
(`height: 100vh`) vertically-centered container (`div.container.content` →
`div.row.align-items-center.content.justify-content-center` →
`div.col-md-10.text-left`) headed **"#02 — Bootstrap 4 Buttons"**
(`h2.mb-5`, 20px Roboto — a copy-paste ARTIFACT: the slug is
`bootstrap-buttons-17`, the `<title>` says "Button #1", and the visible
heading says `#02`; none of the numbers match the slug). The page contains
exactly three showcase blocks:

1. **Button sizes** — a flex row (`div.d-block.mb-5.d-flex`) of three
   groups, each `div.mb-3.mr-3` with a centered `<small>` label above a
   primary button: **Large** (`btn-primary btn-lg`), **Medium**
   (`btn-primary`), **Small** (`btn-primary btn-sm`); every button reads
   "Button".
2. **Button Colors** — a centered `<small>` label ("Button Colors") above a
   `div.mb-5` of **18 solid-color buttons** (`btn mb-3 mr-3 btn-{color}`),
   in this exact order: Primary, Secondary, Success, Info, Warning, Danger,
   Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple,
   Blue, Brown, Blue Gray (wrapping into ~3 rows of 8/8/2 at desktop
   widths).
3. **Full width button** — a centered `<small>` label ("Full width button")
   above a single `btn btn-primary btn-block` "Button" spanning the column.

All buttons are plain `<button type="button" class="btn ...">` text
elements — there are NO icons on this page (the `fonts/icomoon/style.css`
icon font is loaded but unused: no `<i>` elements exist in the DOM).

The defining signature of this template (what makes it distinct from every
other Bootstrap-Buttons sibling) is the **borderless pill button**:
`.btn` has `border-radius: 30px` (style.css overrides Bootstrap's 4px —
this is the ONLY sibling built on the pill shape), `border: none`,
`font-size: 13px`, `padding: 8px 25px`, `letter-spacing: .02rem`, and the
signature drop shadow `0 15px 30px 0 rgba(0, 0, 0, 0.2)`; on
hover/active/focus the shadow is removed and the button "presses down"
(`top: 1px`) with a `.3s all ease` transition. Sizes: `.btn-lg` = 16px /
`15px 30px`, `.btn-sm` = 12px / `5px 15px`, both keeping the pill radius
(the later `.btn` rule in style.css wins the radius for all sizes). The
palette mixes the 7 Bootstrap 4.3.1 defaults (Primary `#007bff`, Secondary
`#6c757d`, Success `#28a745`, Info `#17a2b8`, Warning `#ffc107`, Danger
`#dc3545`, Light `#f8f9fa`, Dark base overridden to `#393e46`) with 11
custom colors (Orange, Indigo, Pink, Deep Orange, Aqua, Black, Purple,
Blue, Brown, Blue Gray) — every custom color and most standard hovers are
defined in the small custom `css/style.css` (3.8KB; the token source).
Warning and Light carry Bootstrap's dark text (`#212529`); everything else
is white text. There is NO text-transform, NO skew (that's Slant's
signature), NO double-ring bezel (that's Bezel's), NO white-wash `:before`
(that's Swell's), and NO stat-card anatomy (that's Tally's — stat buttons
with 60px icon boxes, 2px radius, tiny shadow). Pill is the plain classic
text-button showcase of the series. Pill recreates the structure
section-for-section with matching layout, tokens, typography, and content
kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 17" is FORBIDDEN
> as the app name. **Pill** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> the shipped-app names embedded in TEMPLATES.md (verified 2026-08-14:
> no `apps/pill` on origin/main, no `template-pill` spec, no `pill` in
> `docs/templates/`, no `[pill](...)` shipped link in TEMPLATES.md).
> Source slug + preview URL are recorded below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-17/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-17/` (HTTP 200 —
> same nested `/bb/` subpath pattern as the sibling "Bootstrap Buttons 01"
> (Palette), "02" (Toggle), "03" (Float), "04" (Swell), "05" (Slant), "10"
> (Bezel) and "16" (Tally) preps). The page `<title>` is "Button #1", and
> the visible `h2` heading renders **"#02 — Bootstrap 4 Buttons"** — a
> copy-paste ARTIFACT: the slug is `bootstrap-buttons-17` but the heading
> says `#02` and the title says `#1`. Fidelity mandate = render the heading
> exactly as the reference renders it (the artifact is part of the
> template; do NOT "fix" it to #17).

> SCREENSHOT NOTE: the TEMPLATES.md screenshot
> (`bootstrap-buttons-17.jpg`, 1200×972, browser-verified 2026-08-14)
> MATCHES the live render (white page, "#02 – Bootstrap 4 Buttons" heading,
> three blue size pills, an 8/8/2 grid of 18 color buttons, and a full-width
> blue pill at the bottom; no navbar, no footer). Minor nuance: the static
> screenshot reads slightly "flatter" (shadows less prominent) than the
> live render — the live DOM + CSS is authoritative (the shadow is real:
> `0 15px 30px 0 rgba(0,0,0,0.2)`), and the screenshot corroborates the
> structure and colors.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 17". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 678). Free UI-kit button-component
  template. The `bootstrap-buttons-17` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-17/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-17/` (HTTP 200,
  18.2KB HTML, `<title>Button #1</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — loaded but UNUSED on this page:
  zero `<i>`/icon elements in the DOM), `css/bootstrap.min.css` (Bootstrap
  4.3.1 — standard button colors, `.btn-lg/.btn-sm/.btn-block` utilities),
  and `css/style.css` (3.8KB — the custom rules are the token source: pill
  radius, shadow, press-down hover, 11 custom colors + hover overrides for
  the standard ones). JS: jQuery 3.3.1 + popper + `bootstrap.min.js` +
  `js/main.js` — none of it drives this page (pure static showcase; hover
  is CSS-only). Structure, copy, and tokens below are from the live DOM +
  `style.css` + `bootstrap.min.css` + a browser render (verified
  2026-08-14).
- **Visual design (live browser render, verified 2026-08-14):** extremely
  clean, flat, white (`#fff`) page. One section
  (`div.container.content` = full viewport height) → vertically centered
  row (`align-items-center justify-content-center`) → `col-md-10.text-left`.
  Heading `h2.mb-5` **"#02 — Bootstrap 4 Buttons"** (20px Roboto, black,
  left-aligned). Then, top to bottom: three blue pills (Large/Medium/Small)
  with centered small labels, the "Button Colors" label + 18 color pills
  wrapping in ~3 rows (8/8/2), and a full-width blue pill ("Full width
  button" label). Every button has the same soft, broad drop shadow and a
  rounded-pill silhouette; the page reads like a classic Bootstrap 4 button
  style guide.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `div.container.content` > `div.row.align-items-center
content.justify-content-center` > `div.col-md-10.text-left` >
     `h2.mb-5` **"#02 — Bootstrap 4 Buttons"** (20px Roboto; `mb-5` =
     3rem bottom margin).
  2. **Button sizes** — `div.d-block.mb-5.d-flex` (flex row; the
     conflicting `d-block` loses — `.d-flex` comes later in the Bootstrap
     display-utility order) with **3** groups, each `div.mb-3.mr-3` >
     `div.text-center` > `<small>` label + `<button type="button">`:
     1. **Large** — `btn btn-primary btn-lg` "Button"
     2. **Medium** — `btn btn-primary` "Button"
     3. **Small** — `btn btn-primary btn-sm` "Button"
  3. **"Button Colors" label** — `div.mb-3` (note the leading-space class
     artifact `" mb-3"` in the source) > `div.text-center` > `<small>`
     **Button Colors**.
  4. **Color grid** — `div.mb-5` with **18** buttons, each
     `class="btn mb-3 mr-3 btn-{color}"` (wrap in the `col-md-10` column;
     ~3 rows of 8/8/2 at desktop): **Primary, Secondary, Success, Info,
     Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua,
     Dark, Black, Purple, Blue, Brown, Blue Gray**.
  5. **Full-width button** — `div.mb-3.mr-3` > `div.text-center` >
     `<small>` **Full width button** + `button.btn.btn-primary.btn-block`
     "Button" (full column width).
- **Button anatomy (all 22 buttons):** plain `<button type="button"
class="btn ...">` text buttons — no icons, no nested content, no stat
  cards. Base `.btn` (style.css, wins over Bootstrap where they conflict):
  `border-radius: 30px` (pill), `border: none`, `font-size: 13px`,
  `padding: 8px 25px`, `letter-spacing: .02rem`, `box-shadow: 0 15px 30px 0
rgba(0,0,0,0.2)`, `transition: all .3s ease`, `position: relative; top:
0`. Hover/active/focus: `box-shadow: none` + `top: 1px` (press-down) +
  the per-color background darken/lighten.
- **Sizes:** `.btn-lg` (style.css): `font-size: 16px`, `padding: 15px 30px`
  (overrides Bootstrap's `.5rem 1rem / 1.25rem`); `.btn-sm` (style.css):
  `font-size: 12px`, `padding: 5px 15px` (overrides `.25rem .5rem /
.875rem`). Both keep the pill radius (`.btn`'s `30px` wins the cascade
  over Bootstrap's `.btn-lg/.btn-sm` radii for equal specificity). `.btn-block`
  (Bootstrap): `display: block; width: 100%`.
- **Color palette (18) — base + hover/focus.** Standard colors: base from
  Bootstrap 4.3.1 (`bootstrap.min.css`), hover from `style.css` (all with
  `!important`-free overrides; text white unless noted):

  | #   | Button      | Base      | Hover/Focus | Text      | Source of base                               |
  | --- | ----------- | --------- | ----------- | --------- | -------------------------------------------- |
  | 1   | Primary     | `#007bff` | `#3395ff`   | `#fff`    | Bootstrap                                    |
  | 2   | Secondary   | `#6c757d` | `#868e96`   | `#fff`    | Bootstrap                                    |
  | 3   | Success     | `#28a745` | `#34ce57`   | `#fff`    | Bootstrap                                    |
  | 4   | Info        | `#17a2b8` | `#1fc8e3`   | `#fff`    | Bootstrap                                    |
  | 5   | Warning     | `#ffc107` | `#ffce3a`   | `#212529` | Bootstrap                                    |
  | 6   | Danger      | `#dc3545` | `#e4606d`   | `#fff`    | Bootstrap                                    |
  | 7   | Light       | `#f8f9fa` | `#e2e6ea`   | `#212529` | Bootstrap (hover = BS4 default, no override) |
  | 8   | Orange      | `#fd7e14` | `#fd9a47`   | `#fff`    | style.css                                    |
  | 9   | Indigo      | `#6610f2` | `#8540f5`   | `#fff`    | style.css                                    |
  | 10  | Pink        | `#e83e8c` | `#ed6ca7`   | `#fff`    | style.css                                    |
  | 11  | Deep Orange | `#ffac8e` | `#ffd1c1`   | `#fff`    | style.css                                    |
  | 12  | Aqua        | `#3fc5f0` | `#6ed3f4`   | `#fff`    | style.css                                    |
  | 13  | Dark        | `#393e46` | `#505762`   | `#fff`    | style.css (OVERRIDES Bootstrap `#343a40`)    |
  | 14  | Black       | `#000000` | `#1a1a1a`   | `#fff`    | style.css                                    |
  | 15  | Purple      | `#6f42c1` | `#8c68ce`   | `#fff`    | style.css                                    |
  | 16  | Blue        | `#007bff` | `#3395ff`   | `#fff`    | style.css                                    |
  | 17  | Brown       | `#a0855b` | `#b49d7a`   | `#fff`    | style.css                                    |
  | 18  | Blue Gray   | `#3f4d71` | `#516392`   | `#fff`    | style.css                                    |

- **Layout tokens:** page `background: #fff` (Bootstrap body default);
  `.content { height: 100vh }` (both the container and the row carry the
  `content` class) → the showcase is vertically centered in the viewport;
  content column `col-md-10` (10/12 at md+, full width below); heading
  `mb-5` (3rem), size row `mb-5`, color grid `mb-5`, labels `text-center`;
  small labels are Bootstrap `<small>` (80% font-size, muted via `.text-
center` only — the reference does NOT mute them further). Gaps: `mb-3`
  (1rem) + `mr-3` (1rem) on every color button; `mb-3 mr-3` on the size
  groups and the full-width group.
- **Fonts:** **Roboto** for body AND headings (style.css sets the same
  Roboto-first system stack on `body` and `h1–h6`; `h2` is overridden to
  `font-size: 20px`). Load Roboto via Google Fonts `<link>` in
  `index.html` (repo rule: system/Google fonts only, no copied font files).
  The icomoon icon font is loaded in the original but UNUSED — do not copy
  it and do not add icons (this page has none; unlike Tally there is no
  icon mapping requirement).
- **JS behaviors (original):** none — the page is a static showcase (the
  jQuery/popper/bootstrap/main.js bundle is inert; no dropdowns, no
  toggles). Hover is pure CSS. Recreate with CSS transitions; add
  repo-convention `focus-visible` rings (the reference only removes the
  shadow + nudges 1px on `:focus` — not a sufficient a11y focus
  indicator).
- **NOT uppercase:** no `text-transform` anywhere — labels and button text
  render exactly as written ("Button Colors", "Full width button", "Blue
  Gray", "Deep Orange").
- **NOT a stat-card kit:** unlike Tally (sibling 16), buttons are plain
  text pills — no 60px icon boxes, no `h4` numbers, no `span` labels inside
  buttons, no `calc(100% - 60px)` text blocks.
- **NOT Slant's skew / NOT Bezel's bezel / NOT Swell's wash:** no
  `transform`, no double pseudo-element rings, no white-wash `:before`.
  The button is a borderless pill with a broad soft shadow and a press-down
  hover. Keep the siblings' signatures distinct.
- **Heading artifact is REAL:** `h2` renders "#02 — Bootstrap 4 Buttons"
  (slug is 17, `<title>` is "Button #1"). Same artifact class as the
  siblings (Tally's 16 slug rendered "Button #06"; Bezel's 10 slug rendered
  "02"). Render "#02 — Bootstrap 4 Buttons" EXACTLY (with the em dash) — do
  NOT "fix" it to #17.
- **Copy is minimal and fixed:** every size + full-width button reads
  "Button"; labels are "Large", "Medium", "Small", "Button Colors", "Full
  width button"; the 18 color labels are the color names themselves.

## Requirements

### Requirement: Page structure

The system SHALL render the Pill page as one centered section on a white
background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Pill page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single section SHALL be headed **"#02 — Bootstrap 4 Buttons"**
  (20px Roboto, left-aligned)
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Centered content column

- **GIVEN** the section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered container column (10/12
  width at md+), vertically centered in the viewport (reference
  `height: 100vh` + `align-items-center`)
- **AND** the section SHALL contain, in order: the heading, the button
  sizes row, the "Button Colors" label + 18-color grid, and the full-width
  button

### Requirement: Heading

The system SHALL render the reference heading exactly, including the
copy-paste `#02` artifact and the em dash.

#### Scenario: Exact heading text

- **GIVEN** the Pill page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"#02 — Bootstrap 4 Buttons"** — exactly
  as the reference renders it (the number `02` is a copy-paste artifact of
  the `bootstrap-buttons-17` slug; do NOT "fix" it to #17)
- **AND** the heading SHALL be 20px Roboto, black, left-aligned, with a
  3rem bottom margin (`mb-5`)

### Requirement: Button sizes

The system SHALL render the three size variants as primary pills with
centered labels, in the reference order.

#### Scenario: Large, Medium, Small

- **GIVEN** the sizes row is displayed
- **WHEN** the user views it
- **THEN** a flex row SHALL render three groups in order — **Large**
  (`btn-lg`: 16px text, `15px 30px` padding), **Medium** (base: 13px text,
  `8px 25px` padding), **Small** (`btn-sm`: 12px text, `5px 15px` padding)
- **AND** each group SHALL show its label ("Large" / "Medium" / "Small")
  centered above a primary (`#007bff`) button reading "Button"
- **AND** all three SHALL keep the pill radius (30px) and the signature
  shadow

### Requirement: Color palette grid

The system SHALL render the 18 color buttons in the exact reference order
with the exact base colors, wrapping in the column.

#### Scenario: All 18 colors

- **GIVEN** the color grid is displayed
- **WHEN** the user views the buttons
- **THEN** 18 buttons SHALL render in this exact order with these base
  colors:
  1. Primary `#007bff` 2. Secondary `#6c757d` 3. Success `#28a745`
  2. Info `#17a2b8` 5. Warning `#ffc107` 6. Danger `#dc3545`
  3. Light `#f8f9fa` 8. Orange `#fd7e14` 9. Indigo `#6610f2`
  4. Pink `#e83e8c` 11. Deep Orange `#ffac8e` 12. Aqua `#3fc5f0`
  5. Dark `#393e46` 14. Black `#000000` 15. Purple `#6f42c1`
  6. Blue `#007bff` 17. Brown `#a0855b` 18. Blue Gray `#3f4d71`
- **AND** every button SHALL show its color name as the label
- **AND** all buttons SHALL be white text EXCEPT Warning and Light, which
  SHALL use Bootstrap's dark text `#212529`
- **AND** the grid SHALL be preceded by the centered label "Button Colors"

#### Scenario: Hover state

- **GIVEN** any color button is displayed
- **WHEN** the user hovers or keyboard-focuses it
- **THEN** the button background SHALL change to its hover hex (Primary
  `#3395ff`, Secondary `#868e96`, Success `#34ce57`, Info `#1fc8e3`,
  Warning `#ffce3a`, Danger `#e4606d`, Light `#e2e6ea`, Orange `#fd9a47`,
  Indigo `#8540f5`, Pink `#ed6ca7`, Deep Orange `#ffd1c1`, Aqua `#6ed3f4`,
  Dark `#505762`, Black `#1a1a1a`, Purple `#8c68ce`, Blue `#3395ff`,
  Brown `#b49d7a`, Blue Gray `#516392`)
- **AND** the shadow SHALL disappear and the button SHALL shift down 1px
  (press-down)
- **AND** the button SHALL show a visible focus indication (repo convention
  `focus-visible` ring; the reference's shadow-off + 1px nudge alone is not
  a sufficient a11y focus indicator)

### Requirement: Full-width button

The system SHALL render the full-width primary button with its centered
label.

#### Scenario: Block button

- **GIVEN** the full-width group is displayed
- **WHEN** the user views it
- **THEN** a centered label "Full width button" SHALL render above a
  primary (`#007bff`) button reading "Button"
- **AND** the button SHALL span the full content-column width
  (`display: block; width: 100%`) with the same pill styling and shadow

### Requirement: Pill button anatomy

Every button SHALL be a borderless pill with the signature shadow and
press-down hover.

#### Scenario: Shared anatomy

- **GIVEN** any button is displayed
- **WHEN** the user inspects its styling
- **THEN** the button SHALL have `border-radius: 30px` (pill), `border:
none`, `letter-spacing: .02rem`, and the base size styling (13px /
  `8px 25px` unless overridden by `lg`/`sm`)
- **AND** the button SHALL cast the signature drop shadow `0 15px 30px 0
rgba(0, 0, 0, 0.2)` with a `.3s all ease` transition
- **AND** on hover/active/focus the shadow SHALL be removed and the button
  SHALL shift down 1px (`top: 1px`)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Pill page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the content column SHALL be full width (Bootstrap `col-md-10`
  collapses below md) without horizontal overflow
- **AND** the sizes row SHALL wrap (the reference's flex row does not wrap
  — allow wrapping so the three size pills never overflow the viewport)
- **AND** the color grid SHALL wrap naturally and remain fully readable
- **AND** the full-height vertical centering SHALL be relaxed (auto height
  or reduced) so content is not cramped on small screens

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Pill page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-pill`
- [ ] `scripts/verify-app.sh pill` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("#02 —
      Bootstrap 4 Buttons" heading → sizes row (Large/Medium/Small) →
      "Button Colors" label + 18-color grid → full-width button) → minimal
      Component Dock footer; white page, no navbar/hero/images/icons
- [ ] Brand tokens in `@theme`, used via Tailwind classes: 18 base colors + 18 hover hexes per the token table in this spec; white `#fff`;
      page `#ffffff`; warning/light text `#212529`
- [ ] Font: Roboto (body + headings) via Google Fonts `<link>` in
      `index.html`; heading 20px; title "Pill — Button Showcase"
      (reference `<title>` "Button #1" is a generic artifact — use the
      app's own title per repo convention)
- [ ] 22 buttons total, exact copy + order: 3 sizes ("Button" ×3 with
      Large/Medium/Small labels), 18 color buttons (Primary … Blue Gray in
      the exact reference order), 1 full-width "Button"
- [ ] Anatomy: borderless pill — `border-radius: 30px`, `border: none`,
      13px/`8px 25px` base, `letter-spacing: .02rem`, signature shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)`, `.3s all ease`; press-down hover
      (shadow → none + `top: 1px`); lg = 16px/`15px 30px`, sm =
      12px/`5px 15px` (both keep the pill radius)
- [ ] Heading artifact rendered EXACTLY: "#02 — Bootstrap 4 Buttons" with
      em dash (slug 17 — do NOT "fix" to #17)
- [ ] Hover: each color darkens/lightens to its hover hex; NO skew
      (Slant's signature), NO double-ring bezel (Bezel's), NO white-wash
      `:before` (Swell's), NO stat-card anatomy (Tally's), NO
      text-transform, NO icons
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` only where they fit the pill
      anatomy (the reference button is custom — check how shipped sibling
      apps handle it; hostelry imports `cn` from the ui barrel)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 17"
      row, line 678 — Bootstrap Buttons (20) category; single row, no dups)
