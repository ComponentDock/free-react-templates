# Template: Forkful (Bootstrap Accordion / Restaurant Menu)

## Purpose

Forkful is a single-page accordion restaurant-menu template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 02" free template (source:
https://colorlib.com/wp/template/accordion-02/), built under a DIFFERENT name
(**Forkful** — a bite-sized portion, evoking the fork-and-spoon category icons
and the menu-list nature of the design; per the monorepo naming mandate —
never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The original is a clean restaurant price menu: a white page with a centered
white card (soft shadow, 5px radius) whose top strip is a **purple banner
(`#866ec7`) with a white "Our Specialties" heading**, followed by a five-panel
accordion — **Breakfast** (open by default), **Lunch**, **Dinner**, **Drink**,
**Wine** (closed). Each panel holds 3 dish rows (15 rows total): a circular
dish photo, dish name, ingredient list, and a price underlined in **yellow
(`#feba2c`)**. Category headers pair a 36px flaticon glyph sitting on a small
yellow circle badge with a chevron toggle (up when open, down when closed).
Forkful recreates that structure 1:1 with matching layout, tokens, typography,
and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 02" is FORBIDDEN as the
> app name. **Forkful** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 02". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 640). Free accordion/restaurant-menu
  component template. The `accordion-02` slug appears exactly once (no dup
  rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-02/` returns 404; the
  REAL preview URL (same `/bac/` subpath pattern as Accordion 01) is
  `https://preview.colorlib.com/theme/bac/accordion-02/` (HTTP 200, 21.4KB
  HTML). Stylesheets: `css/style.css` (223.7KB — bootstrap + custom; token
  source), `css/flaticon.css` (1.4KB — category icon glyphs), and the
  IonIcons 4.5.6 CDN (`ionicons.min.css`) which supplies the chevron toggle
  glyphs via `.fa:before` content rules. Structure, copy, and tokens below
  are from the live DOM + `style.css` + `flaticon.css`.
- **Screenshot (`accordion-02.jpg`, 1200×972, served as AVIF; converted to
  PNG and browser-verified 2026-08-14):** confirms the aesthetic — purple
  "Our Specialties" banner (white text) at the top of a white rounded card;
  below it the accordion: **Breakfast open** (black fork/spoon icon, up
  chevron) and Lunch/Dinner/Drink/Wine collapsed (yellow-circle icon badges,
  down chevrons); open panel shows 3 dish rows with circular food photos,
  bold black dish names, gray ingredient text, and black prices with a
  yellow underline; light-gray panel body on white page.
- **Visual design (screenshot + live DOM):** clean, modern, minimal
  restaurant menu. White page (`#fff`, Bootstrap default — NOTE: unlike
  Accordion 01 there is NO `#fafafa` body override; the pale gray look comes
  from the card-body tint `rgba(0,0,0,0.02)`), dark charcoal/black primary
  text, gray secondary text (ingredients), **brand purple `#866ec7`**
  (intro banner) and **brand yellow `#feba2c`** (icon badges + price
  underlines) as the only two accents. Sans-serif (Poppins — declared in
  `style.css` on `body` and `h1–h6`; the preview page itself never loads the
  font file so it falls back to Arial, but the design intent is Poppins —
  load it via Google Fonts `<link>` in `index.html` per repo convention).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0, white page
     bg) → `div.container` → `div.row` → `div.col-md-12.text-center` →
     `h2.heading-section.mb-5.pb-md-4` "Accordion #02" (28px, `#000`,
     text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md-8.col-lg-6` (centered, ~2/3 width desktop) →
     `div#accordion.myaccordion.w-100`: white `#fff` bg, `border-radius: 5px`,
     `overflow: hidden`, `box-shadow: 0px 10px 29px -16px rgba(0,0,0,0.12)`,
     margin auto.
  3. **Intro banner** — `div.p-4.wrap.pt-5.text-center` (background
     `#866ec7` purple): `h3` "Our Specialties" in **white** (`#fff`, Bootstrap
     h3 ~28px). NO paragraph here (unlike Accordion 01).
  4. **Accordion panel — Breakfast** — `div.card` → `div.card-header.p-0`
     (transparent bg, no border, text-left) → `h2.mb-0` → full-width toggle
     button (`d-flex.py-4.px-4.align-items-center.justify-content-between
.btn.btn-link`, color `#000`, font-size 18px, radius 0, shadow
     `0 8px 18px -16px rgba(0,0,0,0.19)`, letter-spacing 0, padding 0 via
     `.myaccordion .btn`):
     - left: `p.mb-0` with `span.icon.flaticon-breakfast.mr-3` (36px glyph,
       inherits `#000`) + "Breakfast"
     - right: `<i class="fa" aria-hidden="true">` — 16px chevron in
       `rgba(0,0,0,0.3)`; open = up (`\f3d8` ion-ios-arrow-up), collapsed =
       down (`\f3d0` ion-ios-arrow-down) via the
       `[data-toggle="collapse"] .fa:before` / `.collapsed .fa:before` rules.
     - Panel body `div.card-body.py-5.px-4` (bg `rgba(0,0,0,0.02)`): 3 dish
       rows (see #6). **OPEN by default** (`collapse show`,
       `aria-expanded="true"`).
  5. **Panels — Lunch, Dinner, Drink, Wine** — same card structure, all
     CLOSED by default; icons `flaticon-serving-dish`, `flaticon-turkey`,
     `flaticon-cocktail`, `flaticon-wine`; 3 dish rows each.
  6. **Dish row** — `div.menus.d-md-flex` (width 100%, padding-bottom 20px,
     margin-bottom 20px, `border-bottom: 1px solid rgba(0,0,0,0.05)`,
     radius 5px):
     - `div.menu-img.img` — 100×100px, `border-radius: 50%` (circle),
       `background-image: url(images/<category>-N.jpg)` (food photo).
     - `div.text` — `width: calc(100% - 100px)`, `padding-left: 20px`:
       - `div.d-flex` row: `div.one-half` (`width: calc(100% - 110px)`)
         `h3` dish name (22px, weight 500, `#000`) + `div.one-forth`
         (`width: 110px`, `text-align: right`) `span.price` ($29, 20px,
         weight 600, `#000`, `border-bottom: 2px solid #feba2c`).
       - `p` — ingredient list: gray, comma-separated spans, e.g. "Meat,
         Potatoes, Rice, Tomatoe".
  7. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion"`
  (only ONE panel open at a time), `aria-expanded` on the toggle button,
  `.collapsed` class flips the chevron (IonIcons `\f3d8` up → open, `\f3d0`
  down → closed; verified against ionicons.css: `ion-ios-arrow-up` /
  `ion-ios-arrow-down`; screenshot confirms up/down chevrons). Recreate with
  React state: one `openIndex` (default 0), buttons toggle, icon swaps
  between `ChevronUp`/`ChevronDown` (lucide-react), `aria-expanded` +
  `aria-controls`, panels `role="region"` labelled by their header button.
  Dish rows are static presentational content (no backend).
- **Demo copy caveat:** in the live preview ALL 15 dish rows repeat the same
  placeholder ("Grilled Beef with potatoes" — $29 — "Meat, Potatoes, Rice,
  Tomatoe"). The implementer should write varied, plausible dish names per
  category (breakfast/lunch/dinner/drink/wine kinds of food) — the same
  _kind_ of content, not the same repeated string.

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#866ec7` — BRAND PURPLE: intro banner background (`.wrap`). Only
    colored surface on the page.
  - `#feba2c` — BRAND YELLOW: category-icon circle badge
    (`.card-header p .icon:after`, 20px circle) AND the price underline
    (`border-bottom: 2px solid #feba2c` on `.price`).
  - `#ffffff` — page background (Bootstrap `body` default; no override) and
    accordion card (`.myaccordion { background: #fff }`); intro heading text
    (`.wrap h3 { color: #fff }`).
  - `#000000` — page heading (`.heading-section`, 28px), category button
    text (`.myaccordion .btn`), dish names + prices (`.price` final color).
  - `rgba(0,0,0,0.02)` — card-body background (subtle tinted panel — this is
    what reads as "light gray" in the screenshot).
  - `rgba(0,0,0,0.05)` — dish-row bottom border (`border-bottom: 1px solid`).
  - `rgba(0,0,0,0.3)` — toggle chevron color (`.myaccordion .fa`, 16px).
  - `rgba(0,0,0,0.12)` — card shadow tint (`0px 10px 29px -16px`).
  - `rgba(0,0,0,0.19)` — category header shadow tint
    (`0px 8px 18px -16px`, subtle separator under each header).
  - gray — ingredient list (`p` spans), Bootstrap default body color
    (`#212529` family).
- **Fonts:** **Poppins** (declared on `body` and `h1–h6` in `style.css`;
  preview never loads the file — load via Google Fonts `<link>` in
  `index.html`). Sizes: page heading 28px; intro h3 Bootstrap-default ~28px;
  category buttons 18px; dish names 22px weight 500; price 20px weight 600;
  ingredients default body size; body line-height 1.5.
- **Buttons:** the accordion header IS the button — full width, transparent
  bg, `#000` text, 18px, letter-spacing 0, `border-radius: 0`, padding 0
  (header padding comes from `py-4 px-4` on the button itself = 1.5rem),
  `box-shadow: 0 8px 18px -16px rgba(0,0,0,0.19)` (kept on hover); left side
  = icon + label, right side = chevron (`justify-content-between`).
- **Radii:** card `border-radius: 5px` (+ `overflow: hidden`); dish images
  `border-radius: 50%` (circles); icon badge circle 20px; dish rows 5px; no
  pill buttons.
- **Shadows:** card `0px 10px 29px -16px rgba(0,0,0,0.12)`; category header
  `0px 8px 18px -16px rgba(0,0,0,0.19)`.
- **Spacing rhythm:** section padding `7em 0`; page heading `mb-5 pb-md-4`;
  intro banner `p-4 pt-5` (purple); header button `py-4 px-4`; card body
  `py-5 px-4`; dish rows `padding-bottom: 20px; margin-bottom: 20px` +
  bottom border; text block `padding-left: 20px`; centered column
  `col-md-8 col-lg-6` (~66%/50% of container, centered).
- **Dish-row layout:** image 100×100 circle | text `calc(100% - 100px)` with
  20px left padding; inside text, name `calc(100% - 110px)` + price column
  110px right-aligned. On viewports <768px: `.text` becomes 100% wide with
  `padding-left: 0` and `.menu-img` gets `margin-bottom: 20px` (photo stacks
  above the text) — recreate with a flex-col stacking layout.
- **Icons:** lucide-react — `ChevronUp` (open panel) / `ChevronDown`
  (collapsed panel), 16px, `rgba(0,0,0,0.3)`; category icons: use
  lucide-react food glyphs (e.g. `UtensilsCrossed` for Breakfast, `Sandwich`/
  `Croissant` etc. for the others) — the original's flaticon icon FONT is
  NOT copied. Each category icon renders at 36px with a 20px `#feba2c` circle
  badge behind it (absolute-positioned, vertically centered).
- **Images:** 15 dish photos (100×100 circle crops of food). Replace with
  picsum placeholders: `https://picsum.photos/seed/forkful-<n>/200/200`
  (deterministic per template, per repo convention).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Accordion #02" at the top of
the page, styled 28px `#000` Poppins with generous bottom spacing, on the
white page background.

#### Scenario: Heading layout

- **GIVEN** the Forkful page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #02" centered at the top of
  the page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference

### Requirement: Intro banner

The system SHALL render a purple banner at the top of the accordion card with
the white heading "Our Specialties" centered.

#### Scenario: Banner content

- **GIVEN** the accordion card is displayed
- **WHEN** the user views the top of the card
- **THEN** a banner with background `#866ec7` SHALL show the heading "Our
  Specialties" in white (`#fff`), centered
- **AND** the banner SHALL be padded (`p-4 pt-5` equivalent) and contain NO
  paragraph text (the original has none)

### Requirement: Accordion structure and default state

The system SHALL render an accordion card with five panels — Breakfast, Lunch,
Dinner, Drink, Wine — with Breakfast open by default and only one panel open
at a time.

#### Scenario: Five panels with default states

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "Breakfast" and be OPEN
- **AND** panels 2–5 SHALL be titled "Lunch", "Dinner", "Drink", "Wine" and
  be CLOSED
- **AND** the open panel SHALL show a `ChevronUp` icon and the closed panels
  a `ChevronDown` icon at the right of each header

#### Scenario: Single-open behavior

- **GIVEN** the Breakfast panel is open and the others are closed
- **WHEN** the user activates the "Lunch" toggle
- **THEN** the Lunch panel SHALL open and the Breakfast panel SHALL close
  (only one panel open at a time, per the reference's `data-parent` behavior)

### Requirement: Category header rows

Each panel header SHALL be a full-width button showing a category icon on a
small yellow circle badge + the category name on the left and a chevron
toggle on the right.

#### Scenario: Header composition

- **GIVEN** the accordion card is displayed
- **WHEN** the user views a category header
- **THEN** the header SHALL be a full-width button with transparent
  background, `#000` text, 18px, no border-radius, and a subtle bottom
  shadow (`0 8px 18px -16px rgba(0,0,0,0.19)` equivalent)
- **AND** the left side SHALL show a 36px category icon with a 20px `#feba2c`
  circle badge behind it, followed by the category name
- **AND** the right side SHALL show a 16px chevron in `rgba(0,0,0,0.3)`
- **AND** each panel SHALL use a distinct food icon matching its category
  (breakfast/lunch/dinner/drink/wine)

### Requirement: Toggle interaction

Each panel header SHALL be a full-width button that toggles its panel, with
correct `aria-expanded` / `aria-controls` and a swapping chevron.

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's `aria-expanded`
  SHALL flip accordingly
- **AND** the chevron SHALL swap between `ChevronUp` (open) and `ChevronDown`
  (closed)
- **AND** only one panel SHALL be open at a time

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Dish rows

Each open panel SHALL render 3 dish rows; each row SHALL show a circular dish
photo, the dish name, an ingredient list, and a price with a yellow
underline.

#### Scenario: Dish row content and layout

- **GIVEN** a panel is open
- **WHEN** the user views its body
- **THEN** the panel SHALL list 3 dishes, each row containing:
  - a 100×100 circular photo (picsum placeholder, e.g.
    `https://picsum.photos/seed/forkful-<n>/200/200`)
  - a dish name `h3` (22px, weight 500, `#000`)
  - a gray, comma-separated ingredient list (`<p>` with spans)
  - a price (20px, weight 600, `#000`) right-aligned in its own 110px column
    with a 2px `#feba2c` bottom border (yellow underline)
- **AND** the row SHALL be a flex row (image 100px | text
  `calc(100% - 100px)` with 20px left padding) separated from the next row by
  a `1px solid rgba(0,0,0,0.05)` bottom border with 20px top/bottom rhythm
- **AND** dish names SHALL be varied, plausible menu items per category
  (the original's demo repeats one placeholder string — recreate the same
  kind of content, not the repetition)

### Requirement: Responsive behavior

The system SHALL adapt the card column and dish rows for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Forkful page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (single column;
  the `col-md-8 col-lg-6` centering collapses)
- **AND** each dish row SHALL stack the photo above the text (photo 100px
  with a 20px bottom margin, text full width with no left padding), matching
  the reference's <768px rules
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Forkful page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-forkful`
- [ ] `scripts/verify-app.sh forkful` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion #02"
      → white accordion card (5px radius, soft shadow) → purple "Our
      Specialties" banner → Breakfast panel (open, up chevron) → Lunch /
      Dinner / Drink / Wine panels (closed, down chevrons) → minimal
      Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#866ec7` banner,
      `#feba2c` accents (icon badges + price underlines), `#fff` card/page,
      `#000` headings/names/prices, `rgba(0,0,0,0.02)` panel tint,
      `rgba(0,0,0,0.05)` row separators, `rgba(0,0,0,0.3)` chevrons; card
      radius 5px; shadows `0 10px 29px -16px rgba(0,0,0,.12)` (card) and
      `0 8px 18px -16px rgba(0,0,0,.19)` (headers)
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Forkful — Restaurant Menu"
- [ ] 5 category panels with distinct lucide food icons (36px) on 20px
      `#feba2c` circle badges; chevrons `ChevronUp`/`ChevronDown` 16px
      `rgba(0,0,0,0.3)` — no copied icon fonts
- [ ] 3 dish rows per panel (15 total), circular picsum photos
      (`picsum.photos/seed/forkful-<n>/200/200`), 22px/500 names, gray
      ingredient lists, 20px/600 prices with 2px `#feba2c` underline in a
      110px right-aligned column
- [ ] Only one panel open at a time; `aria-expanded`/`aria-controls` +
      `role="region"`; keyboard operable
- [ ] Mobile ≤768px: card full width, dish rows stack (photo above text,
      20px gap, no left padding)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 02" row, line 640 —
      Bootstrap Accordions category; slug appears once, no dup rows)
