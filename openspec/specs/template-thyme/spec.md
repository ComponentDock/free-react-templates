# Template: Thyme (Bootstrap Accordion / Goals & Steps)

## Purpose

Thyme is a single-page accordion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 10"
free template (source: https://colorlib.com/wp/template/accordion-10/), built
under a DIFFERENT name (**Thyme** — the culinary herb, same botanical naming
family as the other Accordion recreations: Pleat (01), Forkful (02), Mentha
(03), Stash (04), Kelp (05), Clover (06), Gusset (07), Crimp (08), Sprig (09)
— per the monorepo naming mandate, never reuse the ColorLib source name),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a DARK, minimalist goal-setting accordion on a slate
blue-gray `#4e5e6c` page: a centered WHITE "Accordion #10" heading and FOUR
stacked dark-navy `#1c2938` step bars with a small uppercase "STEP 0N" label
over a white step title. Unlike the beige/light Accordion 09 (Sprig), there
is NO state color inversion — every bar stays dark navy; the OPEN bar is
signalled by its right-side glyph turning sky blue `#38ade0` and pointing UP
(arrow-up) while closed bars show a WHITE arrow-down, plus a deeper shadow.
The FIRST card — **"Step 01 Identify Your Goals"** — is OPEN by default and
its body is a checklist: four rows, each a sky-blue checkmark-circle icon
plus light placeholder text, on a slightly lighter navy `#253447` panel. The
other three cards — **"Step 02 Write Your Goals"**, **"Step 03 Need
Analysis"**, **"Step 04 List Objectives"** — are closed and each holds a
single paragraph of body copy. Thyme recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Accordion 10" is FORBIDDEN as the
> app name. **Thyme** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 10". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 648). Free goals-and-steps accordion
  component template. The `accordion-10` slug appears exactly once in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/accordion-10/` returns
  404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bac/accordion-10/` (HTTP 200, 12,823
  bytes HTML — same `/bac/` subpath pattern as Accordion 01–09).
  Stylesheets: `css/style.css` (222.8KB — bootstrap + custom; token
  source) + `https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css`
  (glyphs via the Ionicons font-family trick on `<i class="fa">`).
  Structure, copy, and tokens below are from the live DOM + `style.css`,
  cross-checked against browser-computed styles (exact values recorded)
  AND the rendered screenshot.
- **Visual design (screenshot `accordion-10.jpg`, 1200×972 AVIF —
  browser-verified 2026-08-14):** muted slate blue-gray page, centered
  white "Accordion #10" heading, FOUR stacked dark navy bars with
  two-line text (small uppercase "STEP 01…" label over a white
  sentence-case title). Bar 1 (open): UP arrow on the right, open panel
  below showing four rows of placeholder text each led by a circular
  checkmark icon. Bars 2–4 (closed): DOWN arrows. Subtle container
  shadow, faint 1px separators between bars. Flat, modern, dark-mode
  minimalist aesthetic — a "how to" / goal-planning checklist.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0 = 105px) →
     `div.container` → `div.row` → `div.col-md-12.text-center` → centered
     `h2.heading-section.mb-5.pb-md-4` "Accordion #10" (28px, `#fff`,
     text-center, margin-bottom 48px, padding-bottom 24px, weight 400).
  2. **Accordion container** — `div.row.justify-content-center` →
     `div.col-md-7.col-lg-6.col-xl-5` (centered; ≈445px wide at a 1280px
     viewport — NOTE the extra `col-xl-5`, NARROWER than Sprig's
     `col-md-7 col-lg-6`) → `div#accordion.myaccordion.w-100`: margin
     auto, `border-radius: 0`, `overflow: hidden`. Cards are FLUSH
     (margin-bottom 0) — no 20px gaps like Sprig; the bars' own
     `border-bottom` acts as the separator.
  3. **Card 1 — "Step 01 Identify Your Goals"** — `div.card` (no border,
     transparent bg) → `div.card-header.p-0` → `button.d-flex.px-4.py-3.align-items-center.justify-content-between.btn.btn-link`
     (`data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="true"`, `aria-controls="collapseOne"`, NO
     `.collapsed`) → left `div.heading.d-flex.align-items-center` with
     `h3.mb-0` containing TWO `span`s (`<span>Step 01</span>
<span>Identify Your Goals</span>`) → right
     `div.icon.d-flex.align-items-center.justify-content-center` with
     `<i class="fa">` glyph. Body `div#collapseOne.collapse.show`
     (**OPEN BY DEFAULT**) → `div.card-body.p-0.py-3` (navy `#253447`,
     16px vertical padding, no horizontal) → `ul` with FOUR `li` rows:
     each `a.d-flex` (padding 15px 30px) → `span.icon.ion-ios-checkmark-circle-outline`
     (24px, `#38ade0`, margin-right 10px, margin-top -5px) + `p`
     (`rgba(255,255,255,0.8)`, 15px, margin-bottom 0). Row separators:
     `border-bottom: 1px solid #1c2938`, `border-top: 1px solid
rgba(255,255,255,0.03)`; first child has no top border, last child
     no bottom border. Copy (verbatim): "Far far away, behind the word
     mountains." / "A small river named Duden flows by their." / "When
     she reached the first hills of the Italic." / "Separated they live
     in Bookmarksgrove."
  4. **Card 2 — "Step 02 Write Your Goals"** — same bar structure but
     with `.collapsed`, `aria-expanded="false"`; body `div#collapseTwo.collapse`
     (CLOSED) → `div.card-body.p-4` (24px padding) with a single
     paragraph (same placeholder kind of copy, `rgba(255,255,255,0.8)`).
  5. **Card 3 — "Step 03 Need Analysis"** — same as Card 2, closed;
     single-paragraph body.
  6. **Card 4 — "Step 04 List Objectives"** — same as Card 2, closed;
     single-paragraph body.
  7. **Footer** — the original has NO footer; per monorepo convention add
     a minimal attribution footer linking
     `https://www.componentdock.com/` ("Component Dock") so every shipped
     template carries the required link.
- **Bar layout details:** the button has `padding: 16px 24px` (computed
  from `px-4 py-3` + Bootstrap `.btn` padding; left/right 24px, top/bottom
  16px) — NOT the 60×60-icon-square height trick of Sprig; bar height is
  driven by the two-line h3 + padding. The icon square has NO background
  box (`.myaccordion .btn .icon { z-index: 0 }` only) — the glyph sits
  directly on the navy bar, flush right. Button font Poppins 18px
  (Bootstrap `.btn`), `border-radius: 0 !important`, no border,
  `border-bottom: 1px solid rgba(255,255,255,0.1)` (bar separator),
  letter-spacing 0, width 100%, shadow `0 7px 24px -19px
rgba(0,0,0,0.32)`. h3 is 16px white, weight 400, `margin-bottom: 0`,
  `text-align: left`; its spans are `display: block` and the FIRST span
  ("Step 01") is 14px `text-transform: uppercase` (the small label). The
  `.heading` wrapper is `font-weight: 300` / `position: relative; z-index:
0`.
- **JS behaviors (original):** Bootstrap collapse with `data-parent`
  (only ONE panel open at a time; default = the first card). State is
  driven by `aria-expanded` attributes:
  - OPEN (`button[aria-expanded="true"]`): background STAYS `#1c2938`
    (`!important` — no inversion), shadow deepens to `rgba(0,0,0,0.5)`
    (`!important`), and the glyph turns sky blue:
    `button[aria-expanded="true"] .fa { color: #38ade0 !important }`.
  - CLOSED (`button[aria-expanded="false"]`): `background-color: #fff`
    rule exists in the sheet but LOSES the specificity war to
    `.myaccordion .btn { background: #1c2938 }` (0,1,1 vs 0,2,0) —
    computed style confirms closed bars render `#1c2938`. Glyph is white
    (`.myaccordion .btn .icon i { font-size: 20px; color: #fff }`).
  - Glyph swap: `[data-toggle="collapse"] .fa:before { content: "\f3d8" }`
    (Ionicons `ios-arrow-up` = UP arrow, shown on the OPEN bar) vs
    `[data-toggle="collapse"].collapsed .fa:before { content: "\f3d0" }`
    (Ionicons `ios-arrow-down` = DOWN arrow, shown on CLOSED bars) —
    codepoints verified against the ionicons.min.css CDN. Recreate with
    lucide-react `ChevronUp` (open) / `ChevronDown` (closed) at 20px — do
    NOT copy the icon font.
  - Recreate with React state: one `openIndex` (default 0), buttons
    toggle, panels are `role="region"` / labelled by their header button.
    Content is static presentational data (no backend).
- **Responsive (source CSS):** NO accordion-specific media queries exist
  (unlike Sprig's 200px-image rule) — the `col-md-7 col-lg-6 col-xl-5`
  column simply collapses to full viewport width below `md`. Section
  padding stays `7em 0` at all breakpoints in the source; scale down for
  mobile per repo conventions.

## Design tokens (verified from live stylesheet `css/style.css` + browser-computed styles, 2026-08-14)

- **Brand colors:**
  - `#4e5e6c` — slate blue-gray PAGE background
    (`body { background: #4e5e6c }`; computed `rgb(78,94,108)` ✓ exact).
  - `#1c2938` — dark navy: THE bar color, used for BOTH open and closed
    state buttons (`.myaccordion .btn { background: #1c2938 }` +
    `button[aria-expanded="true"] { background: #1c2938 !important }`;
    computed `rgb(28,41,56)` both states), and for the checklist row
    separators (`li { border-bottom: 1px solid #1c2938 }`).
  - `#253447` — lighter navy CARD-BODY background (`.card-body {
background: #253447 }`; computed `rgb(37,52,71)`), slightly lighter
    than the bars.
  - `#38ade0` — sky blue ACCENT: the OPEN bar's glyph
    (`button[aria-expanded="true"] .fa { color: #38ade0 !important }`;
    computed `rgb(56,173,224)`) and the checklist checkmark icons
    (`a .icon { color: #38ade0 }`).
  - `#ffffff` — page heading (`.heading-section { color: #fff }`), bar h3
    text (`.myaccordion .btn h3 { color: #fff }`), and CLOSED-bar glyphs
    (`.myaccordion .btn .icon i { color: #fff }`).
  - `rgba(255,255,255,0.8)` — body/paragraph + list-row copy
    (`.card-body p`, `.card-body ul li a p`).
  - `rgba(255,255,255,0.5)` — the `p span` variant (unused in this
    template's markup; keep if needed).
  - `rgba(255,255,255,0.1)` — button `border-bottom` separator;
    `rgba(255,255,255,0.03)` — checklist row `border-top`.
  - Shadow tints: `rgba(0,0,0,0.32)` closed bar shadow
    (`0 7px 24px -19px`), `rgba(0,0,0,0.5)` open bar shadow (!important),
    `rgba(0,0,0,0.22)` card-body shadow (`0 7px 24px -19px`).
- **Fonts:** **Poppins** (`body { font-family: "Poppins", Arial,
sans-serif; font-size: 15px; line-height: 1.8 }`) — loaded via Google
  Fonts `<link>` in `index.html` (the preview head embeds Poppins 300/400/
  500 woff2 via cf-fonts). Heading "Accordion #10" 28px/400; bar button
  18px; h3 step title 16px; "STEP 0N" label 14px uppercase; body copy
  15px / 27px line-height; toggle glyphs 20px; checklist icons 24px.
- **Buttons:** the bar IS the button — full width, padding `16px 24px`,
  `border-radius: 0`, no border, `border-bottom: 1px solid
rgba(255,255,255,0.1)`, letter-spacing 0, Poppins 18px; bg `#1c2938` in
  BOTH states; shadow `0 7px 24px -19px rgba(0,0,0,0.32)` closed /
  `rgba(0,0,0,0.5)` open; hover/focus `text-decoration: none`. The glyph
  on the right has no background box — it is a bare 20px icon.
- **Radii:** everything square — `border-radius: 0` on the accordion
  container and buttons.
- **Shadows:** bars `0 7px 24px -19px rgba(0,0,0,0.32)` (closed) /
  `rgba(0,0,0,0.5)` (open); card-body `0 7px 24px -19px rgba(0,0,0,0.22)`.
- **Spacing rhythm:** section padding `7em 0` (105px); heading `mb-5
pb-md-4` (margin-bottom 48px / padding-bottom 24px); cards FLUSH
  (margin-bottom 0 — the bars' border-bottom separates them); bar padding
  16px 24px (`py-3 px-4`); open card-body `p-0 py-3` (16px vertical, 0
  horizontal) with list rows at `padding: 15px 30px`; closed card-bodies
  `p-4` (24px all around); glyph 20px flush right; checklist icon
  margin-right 10px, margin-top -5px.
- **Icons:** lucide-react `ChevronUp` (open bar, sky blue `#38ade0`) /
  `ChevronDown` (closed bars, white) at 20px — the original's Ionicons
  glyph font (`\f3d8` arrow-up / `\f3d0` arrow-down via the `.fa` class
  hack) is NOT copied. Checklist rows use lucide-react
  `CheckCircle2`/`CircleCheck` at 24px `#38ade0` — the original's
  `ion-ios-checkmark-circle-outline` (glyph `\f149`).
- **Images:** NONE — this template has no image assets (the open panel is
  a text checklist, not Sprig's image|text row). No picsum placeholders
  needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading at the top of the page,
styled 28px `#fff` Poppins with generous bottom spacing, on the `#4e5e6c`
slate page background.

#### Scenario: Heading layout

- **GIVEN** the Thyme page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #10" centered at the top
  of the slate page
- **AND** the heading SHALL be 28px, `#fff`, weight 400, with a large
  bottom margin (48px) plus bottom padding (24px), matching the reference
- **AND** the heading text SHALL be "Accordion #10" verbatim (the `h2`
  carries the `#`; the source `<title>` tag drops it — "Accordion 10" —
  so use the `h2` form in the page and a Thyme-branded document title)

### Requirement: Accordion container

The system SHALL render the accordion in a centered `col-md-7 col-lg-6
col-xl-5` column (NARROWER than Sprig's `col-lg-6`-only on xl screens),
square corners, with cards stacked flush (no gaps).

#### Scenario: Container layout

- **GIVEN** the Thyme page is rendered
- **WHEN** the user views below the heading
- **THEN** the accordion SHALL be centered in a `col-md-7`/`col-lg-6`/
  `col-xl-5`-equivalent column (≈445px at a 1280px viewport)
- **AND** the container SHALL have `border-radius: 0` and `overflow:
hidden`
- **AND** four cards SHALL stack with NO vertical gap (margin-bottom 0),
  no borders, transparent card backgrounds — the bars' own
  `border-bottom: 1px solid rgba(255,255,255,0.1)` SHALL act as the
  separators

### Requirement: Step cards and default state

The system SHALL render an accordion with four step cards — "Step 01
Identify Your Goals" (OPEN by default), "Step 02 Write Your Goals"
(closed), "Step 03 Need Analysis" (closed), and "Step 04 List Objectives"
(closed) — with only one panel open at a time.

#### Scenario: Four cards with default states

- **GIVEN** the accordion is rendered
- **WHEN** the page loads
- **THEN** card 1 SHALL show the label "Step 01" over the title "Identify
  Your Goals" and be OPEN (matching the reference's `collapse show` on
  collapseOne)
- **AND** card 2 SHALL show "Step 02" / "Write Your Goals" and be CLOSED
- **AND** card 3 SHALL show "Step 03" / "Need Analysis" and be CLOSED
- **AND** card 4 SHALL show "Step 04" / "List Objectives" and be CLOSED

#### Scenario: Single-open behavior

- **GIVEN** card 1 is open and the others are closed
- **WHEN** the user activates the "Write Your Goals" toggle
- **THEN** the "Write Your Goals" panel SHALL open and the "Identify Your
  Goals" panel SHALL close (only one panel open at a time, per the
  reference's `data-parent` behavior)

### Requirement: Toggle bars and state styling

Each card header SHALL be a full-width dark-navy bar that toggles its
panel, with correct `aria-expanded` / `aria-controls` and the reference's
state treatment: closed = `#1c2938` bar, two-line white text, WHITE
arrow-down glyph, `rgba(0,0,0,0.32)` shadow; open = SAME `#1c2938` bar
(no inversion), SKY BLUE `#38ade0` arrow-up glyph, deeper
`rgba(0,0,0,0.5)` shadow.

#### Scenario: Closed bar styling

- **GIVEN** a closed card is displayed
- **WHEN** the user views its bar
- **THEN** the bar SHALL be `#1c2938` with 24px horizontal / 16px
  vertical padding, `border-radius: 0`, `border-bottom: 1px solid
rgba(255,255,255,0.1)`, and shadow `0 7px 24px -19px rgba(0,0,0,0.32)`
- **AND** the bar SHALL show a 14px UPPERCASE "STEP 0N" label (block,
  white) over a 16px white step title (both left-aligned)
- **AND** the bar SHALL show a WHITE 20px `ChevronDown` glyph flush right
  with NO background box

#### Scenario: Open bar styling

- **GIVEN** the open card is displayed
- **WHEN** the user views its bar
- **THEN** the bar SHALL remain `#1c2938` (the reference does NOT invert
  colors — verified via computed styles both states) with shadow `0 7px
24px -19px rgba(0,0,0,0.5)`
- **AND** the bar SHALL show a SKY BLUE `#38ade0` 20px `ChevronUp` glyph
  flush right (the blue-up-arrow is the reference's signature open-state
  signal)

#### Scenario: Toggling a panel

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks a card header button
- **THEN** the panel SHALL toggle open/closed, the button's
  `aria-expanded` SHALL flip, and the glyph SHALL swap between white
  arrow-down (closed) and blue arrow-up (open)

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion is displayed
- **WHEN** the user tabs to a card header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)
- **AND** the open button SHALL carry `aria-expanded="true"` and the
  closed buttons `aria-expanded="false"` (never omit them)

### Requirement: Open panel bodies

The open panel SHALL render its body on the lighter navy `#253447`
card-body. Card 1's body SHALL be a four-row checklist (checkmark icon +
text per row, hairline separators); cards 2–4 SHALL be single paragraphs.

#### Scenario: Card 1 body — checklist

- **GIVEN** the "Step 01 Identify Your Goals" panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL render a list of FOUR rows, each a full-width
  link row (padding 15px 30px) with a SKY BLUE `#38ade0` 24px
  `CheckCircle2` icon (margin-right 10px) followed by placeholder text in
  `rgba(255,255,255,0.8)` at 15px
- **AND** rows SHALL be separated by `border-bottom: 1px solid #1c2938`
  - `border-top: 1px solid rgba(255,255,255,0.03)` (first row no top
    border, last row no bottom border)
- **AND** the body SHALL have 16px vertical padding and NO horizontal
  padding (`p-0 py-3`), with shadow `0 7px 24px -19px rgba(0,0,0,0.22)`

#### Scenario: Cards 2–4 bodies

- **GIVEN** the "Step 02 Write Your Goals", "Step 03 Need Analysis", or
  "Step 04 List Objectives" panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL render a single paragraph of copy styled
  `rgba(255,255,255,0.8)` 15px/27px on `#253447` with 24px padding
  (`p-4`) and shadow `0 7px 24px -19px rgba(0,0,0,0.22)`

### Requirement: Responsive behavior

The system SHALL adapt the accordion column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Thyme page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the viewport width (the
  `col-md-7 col-lg-6 col-xl-5` centering collapses to a single column)
- **AND** the checklist rows and bar text SHALL remain readable (rows
  keep their 15px/30px padding; no source media queries change the bars —
  only scale section padding down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Thyme page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the dark minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-thyme`
- [ ] `scripts/verify-app.sh thyme` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion
      #10" (white 28px on `#4e5e6c`) → accordion (col-md-7/col-lg-6/
      col-xl-5 width, radius 0, cards flush) → card 1 "Step 01 Identify
      Your Goals" (OPEN: `#1c2938` bar, blue arrow-up, checklist body of
      4 checkmark rows) → card 2 "Step 02 Write Your Goals" (closed:
      white arrow-down, paragraph body) → card 3 "Step 03 Need Analysis"
      (closed, same) → card 4 "Step 04 List Objectives" (closed, same) →
      minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#4e5e6c`
      slate page, `#1c2938` navy bars (both states) + row separators,
      `#253447` card-body, `#38ade0` sky-blue accent (open glyph +
      checkmarks), `#fff` heading/h3/closed glyphs, `rgba(255,255,255,.8)`
      copy; shadows `0 7px 24px -19px` at `rgba(0,0,0,.32)` (closed bar) /
      `.5` (open bar) / `.22` (card-body)
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Thyme — Goals & Steps Accordion"; heading 28px, bar 18px, h3 16px,
      STEP label 14px uppercase, body 15px/27px
- [ ] State signal is exact: NO color inversion (both states `#1c2938`);
      open = sky-blue `ChevronUp` 20px + deeper shadow; closed = white
      `ChevronDown` 20px (lucide-react — no copied icon font)
- [ ] Only one panel open at a time (default = card 1); `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable
- [ ] No image assets anywhere in this template (the open panel is a text
      checklist) — no picsum placeholders needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 10" row, line 648 —
      Bootstrap Accordions category)
- [ ] PR description MUST note: (a) the REAL preview URL
      (`preview.colorlib.com/theme/bac/accordion-10/` — the default URL
      404s), (b) design tokens, (c) the DARK aesthetic difference from the
      light Accordion 09/Sprig, (d) paraphrased checklist/body copy
