# Template: Kern (Button / UI Kit Showcase)

## Purpose

Kern is a single-page button/UI-kit showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bootstrap Buttons 06" free template (source:
https://colorlib.com/wp/template/bootstrap-buttons-06/), built under a
DIFFERENT name (**Kern** — evoking the page's signature hover trait: the
button label's letter-spacing (kerning) visibly expands from `.1rem` to
`.2rem` while the button white-washes to a white background with black text
and a soft drop shadow; per the monorepo naming mandate — never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a flat, white, single-full-screen-section Bootstrap 4 UI-kit
page. The section is headed **"#06 — Bootstrap 4 Buttons"** (`h2`, 20px,
Roboto, color `#212529`, left-aligned inside a centered 10/12 column) and
contains the same four blocks as its sibling "Bootstrap Buttons 05" (Slant):
(1) a size row — three solid blue "Button" buttons (`Large` / `Medium` /
`Small` captions above, `btn-lg` / base / `btn-sm`), (2) a centered
**"Button Colors"** caption, (3) a color row of **19** buttons (`Primary`
`Secondary` `Success` `Info` `Warning` `Danger` `Light` `Orange` `Indigo`
`Pink` `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue
Gray` **`White`** — one MORE than the 05 sibling: this template adds a
`btn-white`), and (4) a centered **"Full width button"** caption + one
`btn-block` "Button". There is ONLY one section (no navbar, no hero, no
images, no footer in the original). Unlike the 05 sibling there is NO skew
and NO inner `<span>` — every button is a plain
`<button class="btn ...">Button</button>`.

The defining signature of this template (what makes it distinct from the
Swell / Bootstrap Buttons 04 and Slant / 05 siblings) is the **kerning
white-wash hover**: `.btn:hover, .btn:active, .btn:focus` turns EVERY
button (regardless of its color class — `.btn:hover` specificity (0,2,0)
beats `.btn-{color}` (0,1,0)) **white** (`background: #fff`) with **black
text** (`color: #000`), expands the label's letter-spacing from `.1rem` to
`.2rem`, and applies a soft drop shadow `0 15px 30px 0 rgba(0,0,0,.2)`. All
labels render UPPERCASE via `text-transform: uppercase` (computed-verified
in the live browser: the a11y names are "PRIMARY", "SECONDARY", ...,
"BLUE GRAY", "WHITE", and the size buttons read "BUTTON"). Buttons are
`4px` border radius (the LAST `border-radius` declaration in `style.css`
wins — the intermediate `0px` is dead), `13px` base font / `8px 25px`
padding (sm `12px`/`5px 15px`, lg `16px`/`15px 30px`), no border,
`letter-spacing: .1rem` at rest, `position: relative; top: 0`,
`text-align: center`, white text, and a `.3s all ease` transition (which
animates the letter-spacing + color + background + shadow on hover). Kern
recreates the structure section-for-section with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Bootstrap Buttons 06" is FORBIDDEN
> as the app name. **Kern** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> PREVIEW URL QUIRK: the default preview URL
> `https://preview.colorlib.com/theme/bootstrap-buttons-06/` returns **404**;
> the REAL preview URL is
> `https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/` (HTTP 200,
> 18.5KB HTML — discovered by scraping the ColorLib template page, which
> links to the nested `/bb/` subpath — same pattern as the sibling
> "Bootstrap Buttons 01" (Palette), "02" (Toggle), "03" (Float), "04"
> (Swell) and "05" (Slant) preps). The page `<title>` is "Button #6", and
> the visible `h2` heading renders the full "#06 — Bootstrap 4 Buttons" (em
> dash `&mdash;`). Fidelity mandate = render the heading exactly as the
> reference renders it. NOTE: unlike the 05 sibling, this template's heading
> number ("#06") correctly matches its slug (`bootstrap-buttons-06`) — the
> author updated the copy-pasted heading this time. No "correction" needed;
> just render "#06 — Bootstrap 4 Buttons" as-is.

> SCREENSHOT NOTE (consistent with live): the TEMPLATES.md screenshot
> (`bootstrap-buttons-06.jpg`, 1200×972, browser-verified 2026-08-14) shows
> the same page: white background, heading "#06 – Bootstrap 4 Buttons" (en
> dash in the JPEG — the LIVE DOM uses the em dash `&mdash;`, which is
> authoritative), three blue rectangular size buttons with uppercase
> "BUTTON" labels, the "Button Colors" caption, 19 color buttons arranged in
> three rows (6 + 6 + 7 — the WHITE button is invisible against the white
> background except for its black "WHITE" label), and the full-width blue
> button at the bottom. The screenshot renders PLAIN RECTANGLES — consistent
> with the live render (this template has no skew, unlike the 05 sibling).
> The live DOM + CSS is authoritative.

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Buttons 06". Listed in TEMPLATES.md
  under **Bootstrap Buttons (20)** (line 667). Free UI-kit button-component
  template. The `bootstrap-buttons-06` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-06/`
  returns 404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/` (HTTP 200,
  18.5KB HTML, `<title>Button #6</title>`). Stylesheets:
  `css/style.css` (2.7KB — ftco custom button/theme rules, THE token source),
  `css/bootstrap.min.css` (Bootstrap 4 — rest-state colors + `.btn-block` +
  `.btn-sm`/`.btn-lg` layout helpers), `fonts/icomoon/style.css` (unused
  glyph font on this page). JS: jQuery 3.3.1 + popper + `bootstrap.min.js`
  (bundle) + `js/main.js` — none of it drives this page (pure static
  showcase; hover is CSS-only). Structure, copy, and tokens below are from
  the live DOM + `style.css` + computed styles verified in a real browser.
  The screenshot (`bootstrap-buttons-06.jpg`, 1200×972, browser-verified
  2026-08-14) matches the live render (see screenshot note above).
- **Visual design (live browser render, verified 2026-08-14):** extremely
  clean, flat, white (`#fff`) page. One full-viewport section:
  `div.container.content.text-center` → `div.row.align-items-center.content
justify-content-center` → `div.col-md-10.text-left` (10/12 column,
  left-aligned text, vertically centered). Section heading `h2.mb-5` (20px,
  Roboto, color `#212529`) reads **"#06 — Bootstrap 4 Buttons"** (em dash).
  Block captions are Bootstrap `<small>` in centered `div.text-center`
  (e.g. "Button Colors", "Full width button"); the size captions
  ("Large"/"Medium"/"Small") sit centered above their buttons. ALL 22
  buttons (3 sizes + 19 colors + 1 block) render as PLAIN RECTANGLES with
  UPPERCASE labels. Spacing: `mb-5` (3rem) under the heading and the color
  row, `mb-3 mr-3` (1rem) on individual size/color items, `mb-3` on the
  caption rows. Buttons are `4px`-radius (final declaration wins; the
  intermediate `0px` is dead), borderless, `13px` base font / `8px 25px`
  padding, `letter-spacing: .1rem` (= 1.6px computed), white text, no
  shadow at rest, `.3s all ease` transition. No navbar, no hero, no images,
  no footer.
- **Section order (1:1 from live DOM) — single section:**
  1. **Heading** — `h2.mb-5` **"#06 — Bootstrap 4 Buttons"** (20px Roboto,
     color `#212529`, left-aligned, `text-left` column).
  2. **Sizes** — `div.d-block.mb-5.d-flex` with three `div.mb-3.mr-3`
     items, each a centered `<small>` caption (`Large` / `Medium` / `Small`)
     above a solid blue button labelled "Button" (rendered "BUTTON" via
     uppercase): `btn-primary btn-lg` / `btn-primary` / `btn-primary btn-sm`.
  3. **Button Colors caption** — `div.mb-3` with centered `<small>`
     **"Button Colors"**.
  4. **Color row** — `div.mb-5` with **19** solid buttons labelled
     `Primary` `Secondary` `Success` `Info` `Warning` `Danger` (first
     `div.d-block`), `Light` `Orange` `Indigo` `Pink` `Deep Orange` `Aqua`
     (second `div.d-block`), then `Dark` `Black` `Purple` `Blue` `Brown`
     `Blue Gray` `White` as loose siblings — each `btn mb-3 mr-3
btn-{color}`. (The two `d-block` groups + 7 loose buttons render as
     three visual rows of 6 / 6 / 7.)
  5. **Full width** — `div.mb-3.mr-3` with centered `<small>` **"Full width
     button"** + one `button.btn.btn-primary.btn-block` "Button"
     (display:block, width:100% — computed 904px at the column width). The
     source markup has a harmless double-space artifact in the class
     attribute (`class="btn  btn-primary btn-block"`).
- **Button anatomy (all buttons):** plain
  `<button class="btn ...">Button</button>` — NO inner `<span>` (the inner
  span exists only in the Slant/05 sibling to un-skew its labels; this
  template has no skew, so no span). Labels are uppercased purely by CSS
  `text-transform: uppercase` (computed-verified; the DOM text is
  title-case).
- **Kerning white-wash hover (signature — name source):**
  `.btn:hover, .btn:active, .btn:focus { color: #000; background: #fff;
letter-spacing: .2rem; -webkit-box-shadow: 0 15px 30px 0 rgba(0,0,0,.2);
box-shadow: 0 15px 30px 0 rgba(0,0,0,.2); }` (a dead `box-shadow: none`
  precedes the shadow declaration inside the same rule). On hover/active/
  focus EVERY button — whatever its color class — turns WHITE with BLACK
  text, its label letter-spacing expands from `.1rem` to `.2rem` (the
  kerning animation, `.3s all ease` transition), and it gains a soft drop
  shadow `0 15px 30px 0 rgba(0,0,0,.2)`. Specificity note: `.btn:hover`
  (0,2,0) beats `.btn-{color}` (0,1,0), so the white-wash overrides the
  per-color backgrounds on hover. There is NO `:before` layer (that is
  Swell's / Bootstrap Buttons 04 signature) and NO skew (that is Slant's /
  05 signature) — keep the three siblings' signatures distinct.
- **JS behaviors (original):** none — the page is a static showcase (the
  Bootstrap bundle + main.js are inert here; no dropdowns, no toggles).
  Hover is pure CSS. Recreate with CSS transitions; add repo-convention
  `focus-visible` rings (the reference applies the white-wash on `:focus`
  too, which alone is not a sufficient a11y focus indicator — a white
  button with black text on a white page needs a visible outline).
- **Design tokens (from `style.css` + bootstrap.min.css + computed styles):**

  | Token                                                | Value                                                                                                                                                                                                                                                                                                                 | Usage                                                                                                                    |
  | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
  | Page background                                      | `#ffffff`                                                                                                                                                                                                                                                                                                             | `body`                                                                                                                   |
  | Section height                                       | `100vh`                                                                                                                                                                                                                                                                                                               | `.content` (ONE section, vertically centered)                                                                            |
  | Column width                                         | 10/12 centered, `text-left`                                                                                                                                                                                                                                                                                           | `.col-md-10` inside `row align-items-center justify-content-center`                                                      |
  | Section heading                                      | 20px, Roboto, color `#212529`                                                                                                                                                                                                                                                                                         | `h2` (custom `font-size: 20px`)                                                                                          |
  | Captions                                             | Bootstrap `<small>` (80% = 12.8px)                                                                                                                                                                                                                                                                                    | centered `div.text-center` captions                                                                                      |
  | Font                                                 | Roboto                                                                                                                                                                                                                                                                                                                | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...` |
  | Button base                                          | 13px, `8px 25px`, `border-radius: 4px` (LAST declaration wins — the intermediate `0px` is dead), `border: none`, `letter-spacing: .1rem` (computed 1.6px; the earlier `.01rem` is dead), `text-transform: uppercase`, `color: #fff`, `position: relative`, `top: 0`, `text-align: center`, `transition: .3s all ease` | `.btn`                                                                                                                   |
  | Rest shadow                                          | none (computed `box-shadow: none`)                                                                                                                                                                                                                                                                                    | `.btn`                                                                                                                   |
  | Hover/active/focus                                   | `color: #000; background: #fff; letter-spacing: .2rem; box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (preceded by a dead `box-shadow: none`)                                                                                                                                                                              | `.btn:hover, .btn:active, .btn:focus` — applies to EVERY color (specificity (0,2,0) beats `.btn-{color}` (0,1,0))        |
  | Small button (`sm`)                                  | 12px, `5px 15px`                                                                                                                                                                                                                                                                                                      | `.btn.btn-sm` override                                                                                                   |
  | Large button (`lg`)                                  | 16px, `15px 30px`                                                                                                                                                                                                                                                                                                     | `.btn.btn-lg` override                                                                                                   |
  | Block button                                         | `display:block; width:100%` (computed 904px at column width)                                                                                                                                                                                                                                                          | `.btn-block` (Bootstrap)                                                                                                 |
  | **Colors (rest bg → hover is WHITE `#fff` for ALL)** | text = `#fff` unless noted (computed-verified: ALL color buttons have white text, INCLUDING Warning and Light — `style.css` loads after bootstrap.min.css, so its `.btn { color: #fff }` overrides Bootstrap's dark defaults)                                                                                         | `btn-{color}` solid                                                                                                      |
  | Primary                                              | `#007bff` / `#fff`                                                                                                                                                                                                                                                                                                    | blue (Bootstrap rest; NO custom rule — custom hover is the shared white-wash)                                            |
  | Secondary                                            | `#6c757d` / `#fff`                                                                                                                                                                                                                                                                                                    | grey (Bootstrap fallback — `style.css` has only a `/* Secondary */` comment, no rule)                                    |
  | Success                                              | `#28a745` / `#fff`                                                                                                                                                                                                                                                                                                    | green (Bootstrap rest)                                                                                                   |
  | Info                                                 | `#17a2b8` / `#fff`                                                                                                                                                                                                                                                                                                    | teal/cyan (Bootstrap rest)                                                                                               |
  | Warning                                              | `#ffc107` / `#fff` (computed — WHITE text, NOT Bootstrap's dark `#212529`)                                                                                                                                                                                                                                            | amber (Bootstrap rest; white text via `.btn` override)                                                                   |
  | Danger                                               | `#dc3545` / `#fff`                                                                                                                                                                                                                                                                                                    | red (Bootstrap rest)                                                                                                     |
  | Light                                                | `#dae0e5` / `#fff` (computed — CUSTOM light grey, NOT Bootstrap's `#f8f9fa`; white text, NOT Bootstrap's dark)                                                                                                                                                                                                        | custom (style.css)                                                                                                       |
  | Orange                                               | `#fd7e14` / `#fff`                                                                                                                                                                                                                                                                                                    | custom (style.css)                                                                                                       |
  | Indigo                                               | `#6610f2` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Pink                                                 | `#e83e8c` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Deep Orange                                          | `#ffac8e` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Aqua                                                 | `#3fc5f0` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Dark                                                 | `#393e46` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Black                                                | `#000000` / `#fff`                                                                                                                                                                                                                                                                                                    | custom (`#000`)                                                                                                          |
  | Purple                                               | `#6f42c1` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Blue                                                 | `#007bff` / `#fff`                                                                                                                                                                                                                                                                                                    | custom (same hex as Primary)                                                                                             |
  | Brown                                                | `#a0855b` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | Blue Gray                                            | `#3f4d71` / `#fff`                                                                                                                                                                                                                                                                                                    | custom                                                                                                                   |
  | White                                                | `#ffffff` / `#000` (BLACK text — the ONLY button with non-white text at rest)                                                                                                                                                                                                                                         | custom (style.css `color: #000`) — blends into the white page except for its label                                       |

- **Fonts:** **Roboto** is the theme family (`body` and all headings). The
  preview page does NOT load Roboto from Google Fonts (no `<link>` — it
  falls back to system sans); per repo convention, load Roboto (weights
  300–700) via Google Fonts `<link>` in `index.html`. No icon font needed
  (no icons on this page — implement with plain text labels only,
  `lucide-react` not required here).
- **UPPERCASE:** this template HAS `text-transform: uppercase` (unlike the
  Slant/05 sibling which has none) — the DOM text is title-case
  ("Primary", "Blue Gray", "Button") but every label renders UPPERCASE
  (computed-verified; a11y names are "PRIMARY", "BLUE GRAY", "WHITE",
  "BUTTON"). Implement uppercase styling on the buttons.
- **NOT Swell's hover:** there is NO `.btn:before` white-wash rising
  animation. The hover treatment is a DIRECT property swap on the button
  itself (bg → `#fff`, text → `#000`, letter-spacing → `.2rem`, shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`). Keep the two templates' signatures
  distinct.
- **NOT Slant's skew:** there is NO `transform: skew(-21deg)` and NO inner
  un-skewing `<span>`. Buttons are plain rectangles at rest and on hover.
  Keep the two templates' signatures distinct.

## Requirements

### Requirement: Page structure

The system SHALL render the Kern page as one full-viewport section on a
white background, with a minimal footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Kern page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be white (`#ffffff`)
- **AND** a single full-viewport section SHALL be headed **"#06 — Bootstrap
  4 Buttons"** (em dash, 20px Roboto, left-aligned in a centered 10/12
  column)
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Content column

- **GIVEN** the section is displayed
- **WHEN** the user inspects its layout
- **THEN** the content SHALL sit in a centered 10/12-width column with
  left-aligned text and vertically centered rows
- **AND** the section SHALL contain, in order: heading, size row, "Button
  Colors" caption + color row, "Full width button" caption + block button

### Requirement: Heading

The system SHALL render the reference heading exactly.

#### Scenario: Exact heading text

- **GIVEN** the Kern page is rendered
- **WHEN** the user reads the heading
- **THEN** the heading SHALL read **"#06 — Bootstrap 4 Buttons"** (em dash
  between "#06" and "Bootstrap") — exactly as the reference renders it
  (this template's heading number correctly matches its slug, so no
  artifact handling is needed, unlike the 05 sibling)
- **AND** the heading SHALL be 20px Roboto, color `#212529`, left-aligned

### Requirement: Size row

The system SHALL render the size row with three solid blue buttons in the
reference order and sizes.

#### Scenario: Size variants

- **GIVEN** the Kern section is displayed
- **WHEN** the user views the size row
- **THEN** three solid blue (`#007bff`) buttons labelled "Button" SHALL
  render with UPPERCASE labels ("BUTTON"), with centered `Large` / `Medium`
  / `Small` captions above them
- **AND** the Large button SHALL use the large size (16px font, `15px
30px` padding), the Medium the base size (13px, `8px 25px`), and the
  Small the small size (12px, `5px 15px`)

### Requirement: Color row

The system SHALL render the "Button Colors" caption and all 19 color
buttons with their palette backgrounds and white text.

#### Scenario: Color palette

- **GIVEN** the Kern section is displayed
- **WHEN** the user views the color row
- **THEN** a centered "Button Colors" caption SHALL render
- **AND** 19 labelled solid buttons SHALL render: `Primary` `Secondary`
  `Success` `Info` `Warning` `Danger` `Light` `Orange` `Indigo` `Pink`
  `Deep Orange` `Aqua` `Dark` `Black` `Purple` `Blue` `Brown` `Blue Gray`
  `White`
- **AND** the buttons SHALL be laid out in the reference grouping: a row of
  6 (`Primary`…`Danger`), a row of 6 (`Light`…`Aqua`), then a row of 7
  (`Dark`…`White`) — three visual rows total (the reference uses two
  `d-block` groups + 7 loose buttons)
- **AND** each button SHALL use its palette background: `Primary` `#007bff`,
  `Secondary` `#6c757d`, `Success` `#28a745`, `Info` `#17a2b8`, `Warning`
  `#ffc107`, `Danger` `#dc3545`, `Light` `#dae0e5`, `Orange` `#fd7e14`,
  `Indigo` `#6610f2`, `Pink` `#e83e8c`, `Deep Orange` `#ffac8e`, `Aqua`
  `#3fc5f0`, `Dark` `#393e46`, `Black` `#000000`, `Purple` `#6f42c1`,
  `Blue` `#007bff`, `Brown` `#a0855b`, `Blue Gray` `#3f4d71`, `White`
  `#ffffff`
- **AND** button text SHALL be white (`#ffffff`) on EVERY color button —
  INCLUDING Warning and Light (computed-verified: `style.css`'s `.btn {
color: #fff }` overrides Bootstrap's dark defaults because it loads after
  bootstrap.min.css) — EXCEPT the White button, whose text SHALL be black
  (`#000000`)
- **AND** all buttons SHALL be `4px` radius, borderless, UPPERCASE labels
  with `letter-spacing: .1rem`, with NO shadow at rest
- **AND** there SHALL be NO outline variants on this page (single solid
  section, like the 05 sibling)

#### Scenario: Full-width button

- **GIVEN** the Kern section is displayed
- **WHEN** the user views the bottom of the section
- **THEN** a centered "Full width button" caption SHALL render
- **AND** a solid blue `#007bff` button labelled "Button" SHALL span the
  full column width (`display:block; width:100%`)

### Requirement: Kerning white-wash hover

The system SHALL reproduce the signature hover: every button white-washes
(white background, black text) while its label letter-spacing expands.

#### Scenario: Hover state

- **GIVEN** any button is displayed
- **WHEN** the user hovers it
- **THEN** the button's background SHALL turn white (`#ffffff`) and its
  text SHALL turn black (`#000000`) — for EVERY color button, including
  White (the shared `.btn:hover` rule overrides the per-color backgrounds)
- **AND** the label's letter-spacing SHALL expand from `.1rem` to `.2rem`
- **AND** the button SHALL gain a drop shadow `0 15px 30px 0
rgba(0,0,0,.2)`
- **AND** the transition SHALL animate these changes over `.3s` with `ease`
  timing (the `.3s all ease` transition covers color, background,
  letter-spacing and shadow)

#### Scenario: Active and focus state

- **GIVEN** a button is pressed or keyboard-focused
- **WHEN** the user activates it
- **THEN** the same white-wash SHALL apply (`background: #fff`, `color:
#000`, `letter-spacing: .2rem`, shadow `0 15px 30px 0 rgba(0,0,0,.2)`)
  — the reference applies it on `:hover`, `:active` and `:focus`
- **AND** the button SHALL show a visible focus indication (repo convention
  `focus-visible` ring; the reference's white-wash alone is not a
  sufficient a11y focus indicator on a white page)

### Requirement: Responsive behavior

The system SHALL keep the showcase usable at all viewport widths.

#### Scenario: Mobile layout

- **GIVEN** the Kern page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the button rows SHALL wrap onto multiple lines without
  horizontal overflow
- **AND** the fixed `100vh` section height SHALL be relaxed (auto
  min-height or similar) so the section's content is not clipped or forces
  an empty scroll gap (reference uses `height: 100vh`, which clips on
  small screens)
- **AND** the heading and captions SHALL remain left/center aligned as in
  the reference and fully readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Kern page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the flat kit-page reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-kern`
- [ ] `scripts/verify-app.sh kern` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Section in order (1:1 with reference): single section ("#06 —
      Bootstrap 4 Buttons": sizes → Button Colors → 19 color buttons in
      6/6/7 grouping → Full width button) → minimal Component Dock footer;
      white page, no navbar/hero/images, no outline variants
- [ ] Brand tokens in `@theme`, used via Tailwind classes: primary
      `#007bff`, secondary `#6c757d`, success `#28a745`, info `#17a2b8`,
      warning `#ffc107`, danger `#dc3545`, light `#dae0e5` (custom — NOT
      Bootstrap `#f8f9fa`), orange `#fd7e14`, indigo `#6610f2`, pink
      `#e83e8c`, deep-orange `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`,
      black `#000000`, purple `#6f42c1`, blue `#007bff`, brown `#a0855b`,
      blue-gray `#3f4d71`, white `#ffffff`; page `#ffffff`
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title "Kern
      — Button Showcase" (reference `<title>` "Button #6" is the ColorLib
      preview label — use the app's own title per repo convention)
- [ ] Buttons: 4px radius (NOT 0px — last declaration wins), 13px/8px-25px
      base, sm 12px/5px-15px, lg 16px/15px-30px, block = full width;
      UPPERCASE labels (`text-transform: uppercase`), `letter-spacing:
    .1rem` at rest; white text on ALL color buttons EXCEPT White (black
      `#000000`); no rest shadow
- [ ] Signature hover: on hover/active/focus EVERY button → bg `#fff`,
      text `#000`, `letter-spacing: .2rem`, shadow `0 15px 30px 0
    rgba(0,0,0,.2)`, `.3s all ease`; NO `:before` layer (that's Swell's
      signature) and NO skew/inner span (that's Slant's signature — keep
      the three siblings distinct)
- [ ] `focus-visible` rings added (repo a11y convention)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Bootstrap Buttons 06"
      row, line 667 — Bootstrap Buttons category)
