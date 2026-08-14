# Template: Sprig (Bootstrap Accordion / FAQ Help Center)

## Purpose

Sprig is a single-page FAQ accordion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 09"
free template (source: https://colorlib.com/wp/template/accordion-09/), built
under a DIFFERENT name (**Sprig** — "a small shoot or twig of a plant",
evoking the help-center branches; same naming family as the other Accordion
recreations: Pleat (01), Forkful (02), Mentha (03), Stash (04), Kelp (05),
Clover (06), Gusset (07), Crimp (08) — per the monorepo naming mandate, never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean FAQ-style accordion on a WARM BEIGE `#d8cbbb` page:
a centered black "Accordion #09" heading and THREE white accordion cards
(rounded shadow bars, 20px gap, no borders) with green `#37c46f` accent
squares. The FIRST card — **"How to manage account?"** — is OPEN by default:
its bar turns solid green with white text and a WHITE 60×60 icon square
holding a GREEN minus glyph, and its body is a two-column row (an image on
the left, a paragraph of copy on the right). The other two cards — **"How to
become Pro"** and **"How to create an account?"** — are closed: white bars
with black text, a green 60×60 icon square holding a WHITE plus glyph, and a
single-paragraph body. Sprig recreates that structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 09" is FORBIDDEN as the
> app name. **Sprig** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 09". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 647). Free FAQ/help accordion
  component template. The `accordion-09` slug appears exactly once in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/accordion-09/` returns
  404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bac/accordion-09/` (HTTP 200, 11,126
  bytes HTML — same `/bac/` subpath pattern as Accordion 01–08).
  Stylesheets: `css/style.css` (221.9KB — bootstrap + custom; token
  source) + `https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css`
  (plus/minus glyphs via the Ionicons font-family trick on `<i class="fa">`).
  Structure, copy, and tokens below are from the live DOM + `style.css`,
  cross-checked against browser-computed styles AND the rendered
  screenshot.
- **Visual design (screenshot `accordion-09.jpg`, 1200×972 — browser-
  verified 2026-08-14):** warm beige page, centered black "Accordion #09"
  heading, three stacked white accordion bars with soft shadows and a green
  60×60 square on the right of each. Bar 1 OPEN: solid green bar, white
  text, white icon square with minus; body = square image (wine bottles on
  wooden racks) left + placeholder paragraph right. Bars 2–3 CLOSED: white
  bars, black text, green icon squares with plus. Clean, minimalist,
  high-contrast help-center aesthetic.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0 → 105px) →
     `div.container` → `div.row` → `div.col-md-12.text-center` → centered
     `h2.heading-section.mb-5.pb-md-4` "Accordion #09" (28px, `#000`,
     text-center, margin-bottom 48px, padding-bottom 24px).
  2. **Accordion container** — `div.row.justify-content-center` →
     `div.col-md-7.col-lg-6` (centered, ~58% width desktop) →
     `div#accordion.myaccordion.w-100`: margin auto, `border-radius: 0`,
     `overflow: hidden`. **NOTE the wider column** — `col-md-7 col-lg-6`,
     NOT the `col-md-6` used by Crimp (Accordion 08).
  3. **Card 1 — "How to manage account?"** — `div.card` (no border,
     transparent bg, `margin-bottom: 20px`) → `div.card-header.p-0` →
     `button.d-flex.pl-4.align-items-center.justify-content-between.btn.btn-link`
     (`data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="true"`, `aria-controls="collapseOne"`, NO
     `.collapsed`) → left `div.heading` with `h3.mb-0` (16px) → right
     `div.icon.d-flex.align-items-center.justify-content-center` (60×60px)
     with `<i class="fa">` glyph. Body `div#collapseOne.collapse.show`
     (**OPEN BY DEFAULT**) → `div.card-body.p-4` (white bg, 24px padding,
     `margin-bottom: 1px`, shadow `0 7px 24px -19px rgba(0,0,0,0.22)`) →
     `div.row` → `div.col-md-6.d-flex.align-items-stretch` with
     `div.img.w-100.d-flex` (background-image `images/img.jpg`, 800×800,
     `background-size: cover`, centered) + `div.col-md-6` with one
     paragraph (gray, 15px/27px, margin-bottom 16px): "Far far away, behind
     the word mountains…" placeholder copy.
  4. **Card 2 — "How to become Pro"** — same bar structure but with
     `.collapsed`, `aria-expanded="false"`; body `div#collapseTwo.collapse`
     (CLOSED) → `div.card-body.p-4` with a single paragraph (same
     placeholder kind of copy).
  5. **Card 3 — "How to create an account?"** — same as Card 2, closed;
     single-paragraph body.
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking
     `https://www.componentdock.com/` ("Component Dock") so every shipped
     template carries the required link.
- **Bar layout details:** the button has `padding: 0 0 0 24px` (`pl-4` —
  left padding only; the 60×60 icon square drives the bar height ≈60px via
  `d-flex align-items-center`). `h3` is 16px, `margin-bottom: 0`,
  `text-align: left`, weight 400 (inherited 300 on the heading wrapper is
  overridden by the button's weight-normal). Button font: Poppins 18px,
  `color: #000`, `border-radius: 0`, no border, letter-spacing 0, width
  100%, shadow `0px 7px 24px -19px rgba(0,0,0,0.32)` (closed) /
  `rgba(0,0,0,0.5)` (open). Hover/focus remove underline.
- **JS behaviors (original):** Bootstrap collapse with `data-parent`
  (only ONE panel open at a time; default = the first card). State is
  driven by `aria-expanded` attributes — the CSS inverts the whole bar:
  - OPEN (`button[aria-expanded="true"]`): background `#37c46f` (green,
    `!important`), `h3` → WHITE, `.icon` → `#fff` (white square,
    `!important`), glyph → `#37c46f` (green). Shadow deepens to
    `rgba(0,0,0,0.5)`. 0.3s transition.
  - CLOSED (`button[aria-expanded="false"]`): `background-color: #fff`,
    black `h3`, green 60×60 icon square, white glyph.
  - Glyph swap: `[data-toggle="collapse"] .fa:before { content: "\f1fc" }`
    (Ionicons `ios-remove` = MINUS, shown on the OPEN bar) vs
    `[data-toggle="collapse"].collapsed .fa:before { content: "\f102" }`
    (Ionicons `ios-add` = PLUS, shown on CLOSED bars) — rendered through
    the Ionicons font-family trick on the `.fa` element. Recreate with
    lucide-react `Minus` (open) / `Plus` (closed) at 20px — do NOT copy
    the icon font. NOTE: in the rendered preview the open bar's green
    glyph sits on the white square (verified via computed styles:
    `iconBg: rgb(255,255,255)`, `glyphColor: rgb(55,196,111)`), which
    matches the screenshot (white square + green minus reads as a dark
    minus at a glance).
  - Recreate with React state: one `openIndex` (default 0), buttons
    toggle, panels are `role="region"` / labelled by their header button.
    Content is static presentational data (no backend).
- **Responsive (source CSS):** `@media (max-width: 767.98px)` →
  `.card-body .img { height: 200px; margin-bottom: 20px }` — the open
  panel's image collapses to a 200px-tall block ABOVE the text on mobile
  (the `col-md-6` row stacks). The accordion container column fills the
  viewport width (col-md-7 → single column).

## Design tokens (verified from live stylesheet `css/style.css` + browser-computed styles)

- **Brand colors:**
  - `#37c46f` — THE brand accent (vibrant medium green): OPEN bar
    background (`button[aria-expanded="true"]`), closed-bar icon squares
    (`.myaccordion .btn .icon { background: #37c46f }`), `a` link color,
    and the OPEN bar's glyph color (`button[aria-expanded="true"] .fa`).
  - `#d8cbbb` — warm beige PAGE background (`body { background: #d8cbbb }`).
    Computed: `rgb(216,203,187)` ✓ exact match.
  - `#ffffff` — closed bar background (`button[aria-expanded="false"] {
background-color: #fff }`), card-body background, and the OPEN bar's
    icon square (`button[aria-expanded="true"] .icon { background: #fff
!important }`).
  - `#000000` — page heading (`.heading-section`, 28px), closed-bar h3 /
    button text (`color: #000`), and the open button's base color
    (`button[aria-expanded="true"] { color: #000 !important }` — the h3 is
    forced WHITE by its own rule, so the visible open text is white).
  - `#ffffff` — OPEN bar h3 text (`button[aria-expanded="true"] h3 { color:
#fff }`).
  - `gray` (`#808080` computed) — body copy color (`body { color: gray }`,
    Poppins 15px / line-height 27px).
  - Shadow tints: `rgba(0,0,0,0.32)` closed bar shadow
    (`0 7px 24px -19px`), `rgba(0,0,0,0.5)` open bar shadow, `rgba(0,0,0,0.22)`
    card-body shadow (`0 7px 24px -19px`), `rgba(0,0,0,0.3)` default `.fa`
    color (never visible — overridden by the state rules).
- **Fonts:** **Poppins** (`body { font-family: "Poppins", Arial,
sans-serif; font-size: 15px; line-height: 1.8 }`) — loaded via Google
  Fonts `<link>` in `index.html` (the preview head embeds Poppins 300/400/
  500 woff2 via cf-fonts). Heading "Accordion #09" 28px/400; bar button
  18px; `h3` label 16px; body copy 15px / 27px line-height; icon glyphs
  20px.
- **Buttons:** the bar IS the button — full width, `padding: 0 0 0 24px`
  (height driven by the 60×60 icon square), `border-radius: 0`, no border,
  letter-spacing 0, Poppins 18px, `color: #000`; closed bg `#fff` / open
  bg `#37c46f`; shadow `0 7px 24px -19px rgba(0,0,0,0.32)` closed /
  `rgba(0,0,0,0.5)` open; hover/focus `text-decoration: none`; 0.3s
  transition on state change. The 60×60 icon square sits flush right
  (`justify-content-between`), square corners (no radius).
- **Radii:** everything square — `border-radius: 0` on the accordion
  container, buttons, and icon squares (unlike Crimp's rounded card).
- **Shadows:** bars `0 7px 24px -19px rgba(0,0,0,0.32)` (closed) /
  `rgba(0,0,0,0.5)` (open); card-body `0 7px 24px -19px rgba(0,0,0,0.22)`.
- **Spacing rhythm:** section padding `7em 0` (105px); heading `mb-5
pb-md-4` (margin-bottom 48px / padding-bottom 24px); cards
  `margin-bottom: 20px`; bar left padding 24px (`pl-4`); icon square
  60×60px; card-body padding 24px (`p-4`), `margin-bottom: 1px`; body
  paragraph `margin-bottom: 16px`; two-column body gap via Bootstrap
  `col-md-6` gutters (24px).
- **Icons:** lucide-react `Plus` (closed bars, white on green square) /
  `Minus` (open bar, green on white square) at 20px — the original's
  Ionicons glyph font (`\f102` add / `\f1fc` remove via the `.fa` class
  hack) is NOT copied.
- **Image:** the open panel's left image is `images/img.jpg` (800×800,
  wine bottles on wooden racks, `background-size: cover` centered, full
  height of the row on desktop, 200px + 20px margin on mobile). Recreate
  with a deterministic picsum placeholder:
  `https://picsum.photos/seed/sprig-1/800/800` (per repo convention; the
  exact subject is a wine rack but a warm still-life-style photo is the
  right KIND of content — note the swap in the PR).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading at the top of the page,
styled 28px `#000` Poppins with generous bottom spacing, on the `#d8cbbb`
beige page background.

#### Scenario: Heading layout

- **GIVEN** the Sprig page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #09" centered at the top
  of the beige page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (48px) plus bottom padding (24px), matching the reference
- **AND** the heading text SHALL be "Accordion #09" verbatim (the source
  title tag and `h2` agree this time — no stale-number artifact like
  Crimp/Accordion 08)

### Requirement: Accordion container

The system SHALL render the accordion in a centered `col-md-7 col-lg-6`
column (WIDER than Crimp's `col-md-6`), square corners, with cards stacked
20px apart.

#### Scenario: Container layout

- **GIVEN** the Sprig page is rendered
- **WHEN** the user views below the heading
- **THEN** the accordion SHALL be centered in a `col-md-7`/`col-lg-6`-
  equivalent column (≈58% width desktop)
- **AND** the container SHALL have `border-radius: 0` and `overflow:
hidden`
- **AND** three cards SHALL stack with `margin-bottom: 20px`, no borders,
  transparent backgrounds

### Requirement: Accordion structure and default state

The system SHALL render an accordion with three FAQ cards — "How to manage
account?" (OPEN by default), "How to become Pro" (closed), and "How to
create an account?" (closed) — with only one panel open at a time.

#### Scenario: Three cards with default states

- **GIVEN** the accordion is rendered
- **WHEN** the page loads
- **THEN** card 1 SHALL be titled "How to manage account?" and be OPEN
  (matching the reference's `collapse show` on collapseOne)
- **AND** card 2 SHALL be titled "How to become Pro" and be CLOSED
- **AND** card 3 SHALL be titled "How to create an account?" and be CLOSED

#### Scenario: Single-open behavior

- **GIVEN** card 1 is open and the others are closed
- **WHEN** the user activates the "How to become Pro" toggle
- **THEN** the "How to become Pro" panel SHALL open and the "How to manage
  account?" panel SHALL close (only one panel open at a time, per the
  reference's `data-parent` behavior)

### Requirement: Toggle bars and state styling

Each card header SHALL be a full-width bar that toggles its panel, with
correct `aria-expanded` / `aria-controls` and the reference's INVERTED
state styling: closed = white bar with black text and a green square with
white plus; open = green bar with white text and a white square with green
minus.

#### Scenario: Closed bar styling

- **GIVEN** a closed card is displayed
- **WHEN** the user views its bar
- **THEN** the bar SHALL be white (`#fff`) with black 16px `h3` text, left
  padding 24px, `border-radius: 0`, and shadow
  `0 7px 24px -19px rgba(0,0,0,0.32)`
- **AND** the bar SHALL show a 60×60px green `#37c46f` square flush right
  containing a WHITE 20px `Plus` glyph

#### Scenario: Open bar styling

- **GIVEN** the open card is displayed
- **WHEN** the user views its bar
- **THEN** the bar SHALL be green `#37c46f` with WHITE 16px `h3` text and
  shadow `0 7px 24px -19px rgba(0,0,0,0.5)`
- **AND** the bar SHALL show a 60×60px WHITE square flush right containing
  a GREEN 20px `Minus` glyph (the inverted-icon treatment is the
  reference's signature state signal — verified via computed styles:
  `iconBg rgb(255,255,255)`, glyph `rgb(55,196,111)`)

#### Scenario: Toggling a panel

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks a card header button
- **THEN** the panel SHALL toggle open/closed, the button's
  `aria-expanded` SHALL flip, and the bar + icon square SHALL swap to the
  opposite state styling (green↔white inversion, plus↔minus)

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion is displayed
- **WHEN** the user tabs to a card header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)
- **AND** the open button SHALL carry `aria-expanded="true"` and the
  closed buttons `aria-expanded="false"` (the CSS state rules depend on
  these attributes — never omit them)

### Requirement: Open panel bodies

The open panel SHALL render its body on a white card-body (24px padding,
shadow `0 7px 24px -19px rgba(0,0,0,0.22)`, `margin-bottom: 1px`). Card 1's
body SHALL be a two-column row (image left, paragraph right); cards 2–3
SHALL be single paragraphs.

#### Scenario: Card 1 body — image + text row

- **GIVEN** the "How to manage account?" panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL render a two-column row: a full-height
  background image (picsum `seed/sprig-1/800/800`, `object-cover`,
  centered) in the left half and a paragraph of help-copy in the right
  half
- **AND** the paragraph SHALL be gray (`#808080`-ish), 15px / 27px
  line-height, with the reference's kind of copy (a short help/FAQ answer
  — the source's "Far far away…" placeholder may be paraphrased)

#### Scenario: Cards 2–3 bodies

- **GIVEN** the "How to become Pro" or "How to create an account?" panel
  is open
- **WHEN** the user views its body
- **THEN** the body SHALL render a single paragraph of help/FAQ copy with
  the same gray 15px/27px styling

### Requirement: Responsive behavior

The system SHALL adapt the accordion column and the open panel's image for
mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Sprig page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the viewport width (the `col-md-7`
  centering collapses to a single column)
- **AND** the open panel's image SHALL become a 200px-tall block ABOVE the
  text with a 20px bottom margin (per the reference media query), and the
  two body columns SHALL stack
- **AND** section padding SHALL reduce (the reference's 7em is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sprig page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sprig`
- [ ] `scripts/verify-app.sh sprig` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion
      #09" → accordion (col-md-7/col-lg-6 width, radius 0) → card 1 "How
      to manage account?" (OPEN: green bar, white text, white square +
      green minus; body = image left + paragraph right) → card 2 "How to
      become Pro" (closed: white bar, black text, green square + white
      plus; single-paragraph body) → card 3 "How to create an account?"
      (closed, same) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#37c46f` green
      (open bar / closed icon squares), `#d8cbbb` beige page, `#fff` bars &
      open icon square & card-body, `#000` heading & closed text; shadows
      `0 7px 24px -19px` at `rgba(0,0,0,.32)` (closed bar) / `.5` (open
      bar) / `.22` (card-body)
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Sprig — FAQ Accordion"; heading 28px, bar 18px, h3 16px, body 15px/
      27px
- [ ] Icon inversion is exact: closed = `Plus` white on green 60×60 square;
      open = `Minus` green on white 60×60 square (lucide-react, 20px) —
      no copied icon font
- [ ] Only one panel open at a time (default = card 1); `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable; state styling
      driven by `aria-expanded` like the reference
- [ ] Open panel image: picsum `seed/sprig-1/800/800`, cover, full height
      desktop / 200px above text on mobile (≤768px)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 09" row, line 647 —
      Bootstrap Accordions category)
- [ ] PR description MUST note: (a) the REAL preview URL
      (`preview.colorlib.com/theme/bac/accordion-09/` — the default URL
      404s), (b) design tokens, (c) the image swap (wine-rack photo →
      picsum seed), (d) paraphrased FAQ copy
