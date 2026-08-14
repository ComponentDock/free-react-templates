# Template: Oregano (Bootstrap Accordion / FAQ)

## Purpose

Oregano is a single-page FAQ accordion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 12"
free template (source: https://colorlib.com/wp/template/accordion-12/), built
under a DIFFERENT name (**Oregano** — the culinary herb, same botanical naming
family as the other Accordion recreations: Pleat (01), Forkful (02), Mentha
(03), Stash (04), Kelp (05), Clover (06), Gusset (07), Crimp (08), Sprig (09),
Thyme (10), Basil (11) — per the monorepo naming mandate, never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a LIGHT, minimal FAQ accordion in the SAME source series as
Accordion 11 (Basil) — but a DIFFERENT visual treatment: on a WHITE `#fff`
page, a centered dark "Bootstrap Accordion #2" heading sits above THREE white
cards (radius 4px, 10px gaps), each bordered `1px solid #efefef`. Each card
is a full-width text button with a CHEVRON ICON on the left, holding a
question, with a collapsible body of placeholder copy beneath. State is
signalled by the header BACKGROUND COLOR + icon direction: the OPEN card's
header turns GREEN `#72c02c` with WHITE text and an UP chevron
(`keyboard_arrow_up`); CLOSED cards keep white headers with GRAY `#999`
question text, a `1px #efefef` border, and a DOWN chevron
(`keyboard_arrow_down`). The FIRST card — **"How to download and register?"**
— is OPEN by default. The other two — **"How to create your paypal
account?"** and **"How to link your paypal and bank account?"** — are closed,
each holding the same placeholder paragraph ("Anim pariatur cliche
reprehenderit…" — the classic Bootstrap 4 accordion example copy, 602 chars,
identical in all three bodies). Oregano recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Accordion 12" is FORBIDDEN as the
> app name. **Oregano** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 12". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 650). Free FAQ-style accordion
  component template. The `accordion-12` slug appears exactly once in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/accordion-12/` returns
  404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bac/accordion-12/` (HTTP 200, 19,415
  bytes HTML — same `/bac/` subpath pattern as Accordion 01–11).
  Stylesheets: `css/style.css` (2,091B — the accordion tokens, see below) +
  `css/bootstrap.min.css` (base button/collapse/typography) +
  `css/owl.carousel.min.css` (loaded but UNUSED by this template's markup —
  no carousel elements) + `fonts/icomoon/style.css` (USED — the chevron
  glyphs `\e313`/`\e316` come from the icomoon icon font). Scripts:
  `js/jquery-3.3.1.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`,
  `js/main.js` (the `.active` toggle). Structure, copy, and tokens below are
  from the live DOM + `style.css`, cross-checked against browser-computed
  styles (exact values recorded) AND the rendered screenshot.
- **Visual design (screenshot `accordion-12.jpg`, 1200×972 JPG —
  browser-verified 2026-08-14):** pure white page, centered dark sans-serif
  heading "Bootstrap Accordion #2", THREE cards stacked vertically with
  slightly rounded corners and 10px gaps. The TOP card (open) has a GREEN
  `#72c02c` header bar with WHITE question text and a white UP chevron on
  the left, with a paragraph of dark-gray body copy below on white. The two
  cards below are white with a thin light-gray border (`1px #efefef`), GRAY
  question text, and a gray DOWN chevron on the left. No drop shadows
  anywhere. Clean, flat, modern minimal-Bootstrap aesthetic — a
  support/FAQ accordion. (The screenshot frame shows a
  `preview.codyhouse.co` address bar — a historical artifact of the original
  capture; the rendered design matches the live `preview.colorlib.com`
  page exactly.)
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding 7rem 0 = 112px) →
     `div.container` (max-width 1140px at ≥1200px viewport) → centered
     `h2.my-5.text-center` "Bootstrap Accordion #2" (20px, weight 500,
     color `#212529`, margin 48px top AND bottom via `my-5`).
  2. **Accordion container** — a SECOND `div.container` (same 1140px max
     width — there is NO `col-*` wrapper, the accordion spans the FULL
     container width, like Basil) → `div.custom-accordion#accordion_1`.
  3. **Card 1 — "How to download and register?"** — `div.accordion-item`
     → `h2.mb-0` → `button.btn.btn-link` (`type="button"`,
     `data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="true"`, `aria-controls="collapseOne"`, NO `.collapsed`)
     → body `div#collapseOne.collapse.show` (**OPEN BY DEFAULT**) →
     `div.accordion-body` with a single 602-char placeholder paragraph (see
     copy below).
  4. **Card 2 — "How to create your paypal account?"** — same structure
     but `button.collapsed`, `aria-expanded="false"`; body
     `div#collapseTwo.collapse` (CLOSED) → `div.accordion-body` with the
     SAME placeholder paragraph.
  5. **Card 3 — "How to link your paypal and bank account?"** — same as
     Card 2, closed; identical body paragraph.
  6. **Footer** — the original has NO footer; per monorepo convention add
     a minimal attribution footer linking
     `https://www.componentdock.com/` ("Component Dock") so every shipped
     template carries the required link.
- **Card/button details:** `.accordion-item` is `background-color: #fff`,
  `margin-bottom: 10px` (the gap between cards), `border-radius: 4px`,
  `position: relative`. The button (`.custom-accordion .accordion-item
.btn-link`) is `display: block; width: 100%; padding: 15px 15px 15px 40px`
  (40px left padding = the icon gutter), `text-align: left; color: #999`,
  `border: 1px solid #efefef`, font Roboto 16px/400 (computed), `position:
relative`, `text-decoration: none`. The heading `h2.mb-0` wraps the button
  (the source uses an `h2` as the accordion header element). Each button has
  a `::before` chevron icon at `left: 15px`, vertically centered
  (`top: 50%; transform: translateY(-50%)`).
- **State styling (the `.active` mechanism):** `js/main.js` adds the
  `.active` class to the `.accordion-item` whose collapse is showing:
  ```js
  $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active')
  $('.collapse').on('show.bs.collapse', function () {
    $(this).closest('.accordion-item').addClass('active')
  })
  $('.collapse').on('hidden.bs.collapse', function () {
    $(this).closest('.accordion-item').removeClass('active')
  })
  ```
  `.custom-accordion .accordion-item.active` (computed-verified): `z-index:
2` — the active item stacks above its siblings. Its button becomes
  `.custom-accordion .accordion-item.active .btn-link { border: 1px solid
transparent; color: #fff; background: #72c02c }` (computed: green
  `rgb(114,192,44)`, white text, transparent border ✓) — a SOLID GREEN
  header, the template's only accent. **NO box-shadow exists anywhere in
  this template's CSS** (computed `none` on active AND closed items ✓ —
  unlike Basil's shadow-based open state). The icon flips with state:
  closed `::before` content `"\e313"` = icomoon `keyboard_arrow_down`
  (color `#999`); open `::before` content `"\e316"` = icomoon
  `keyboard_arrow_up` (color `#fff`, via the
  `.btn-link[aria-expanded="true"]:before { color: #fff }` rule). Recreate
  with React state: one `openIndex` (default 0), the active card gets the
  green header + white text + up chevron, `aria-expanded` flips, panels are
  `role="region"` / labelled by their header button. Content is static
  presentational data (no backend).
- **Body copy (verbatim, all three bodies IDENTICAL — 602 chars):**
  "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
  helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
  beer farm-to-table, raw denim aesthetic synth nesciunt you probably
  haven't heard of them accusamus labore sustainable VHS." (Paraphrase
  freely — keep the "same kind" of content: ~2 short paragraphs of
  generic support-copy placeholder.)
- **Responsive (source CSS):** NO accordion-specific media queries exist
  in `style.css` — the `.container` (fluid below 576px, max-width steps
  540/720/960/1140px) simply narrows; cards stay full-width of the
  container at all breakpoints. Section padding stays `7rem 0`; scale down
  for mobile per repo conventions.

## Design tokens (verified from live stylesheet `css/style.css` + browser-computed styles, 2026-08-14)

- **Brand colors:**
  - `#ffffff` — PAGE background (`body { background-color: #fff }`;
    computed `rgb(255,255,255)` ✓ exact) — NOTE: WHITE, unlike Basil's
    `#efefef` gray page.
  - `#72c02c` — GREEN accent: the OPEN card's header background
    (`.custom-accordion .accordion-item.active .btn-link { background:
#72c02c }`; computed `rgb(114,192,44)` ✓) — the template's ONLY accent
    color. (Approx. lime/green — used for active state only.)
  - `#ffffff` — text on the active header (`.active .btn-link { color: #fff
}`; computed `rgb(255,255,255)` ✓).
  - `#999999` — CLOSED card question text + closed chevron color
    (`.btn-link { color: #999 }`; computed `rgb(153,153,153)` ✓).
  - `#efefef` — CLOSED card border color (`border: 1px solid #efefef`;
    computed `rgb(239,239,239)` ✓). NOT a background here (unlike Basil's
    page).
  - `#212529` — near-black heading text (Bootstrap default body color;
    computed on the `h2` heading ✓).
  - `#888888` — body-copy text (`.accordion-body { color: #888 }`;
    computed `rgb(136,136,136)` ✓). (The sheet's `p { color: #b3b3b3;
font-weight: 300 }` does NOT apply — the body copy is bare text inside
    `.accordion-body`, not a `<p>`.)
- **Fonts:** **Roboto** (`body { font-family: "Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", … }`) — loaded via Google Fonts `<link>`
  in `index.html`. Heading "Bootstrap Accordion #2" 20px/500; question
  buttons 16px/400; body copy 16px/400 (Bootstrap `.btn`/body base — no
  size overrides in the custom sheet).
- **Buttons:** the question header IS the button — full width, padding
  `15px 15px 15px 40px` (left padding = icon gutter), `border-radius: 4px`,
  `border: 1px solid #efefef` (closed) / `1px solid transparent` (open),
  `text-align: left`, no text-decoration, color `#999` (closed) / `#fff`
  (open, on green), Roboto 16px/400. The header ALWAYS carries a chevron
  icon at `left: 15px`, vertically centered: down `#999` when closed, up
  `#fff` when open.
- **Icons:** YES — chevron arrows, NOT text-only (unlike Basil). Source
  uses icomoon font glyphs (`keyboard_arrow_down` `\e313` closed /
  `keyboard_arrow_up` `\e316` open). Recreate with lucide-react
  `ChevronDown` / `ChevronUp` (exports verified present 2026-08-14), sized
  ~16–20px, positioned in the 40px left gutter, color matching the
  question text (`#999` closed / `#fff` open).
- **Radii:** cards + buttons `4px` (`.accordion-item { border-radius: 4px
}` + Bootstrap `.btn` base).
- **Shadows:** NONE anywhere — active item gets `z-index: 2` only
  (computed `box-shadow: none` on both states ✓). Do NOT add Basil's
  `0 15px 30px` shadow.
- **Spacing rhythm:** section padding `7rem 0` (112px); heading margin
  `48px 0` (`my-5`); cards separated by `margin-bottom: 10px` (gap between
  stacked cards); button padding `15px 15px 15px 40px`; body padding
  `20px` ALL sides (`20px 20px 20px 20px` — computed ✓, unlike Basil's
  `0 20px 20px`); container max-width 1140px at desktop (full width, no
  `col-*` narrowing).
- **Images:** NONE — no image assets, no picsum placeholders needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading at the top of the page,
styled 20px weight-500 `#212529` Roboto with 48px top and bottom margins,
on the WHITE `#fff` page background.

#### Scenario: Heading layout

- **GIVEN** the Oregano page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Bootstrap Accordion #2" centered at
  the top of the white page
- **AND** the heading SHALL be 20px, weight 500, color `#212529`, with 48px
  margins above and below, matching the reference
- **AND** the heading text SHALL be "Bootstrap Accordion #2" verbatim (the
  `h2` carries "Bootstrap "; the `<title>` tag is "Accordion #2" — use the
  `h2` form in the page and an Oregano-branded document title)

### Requirement: Accordion container

The system SHALL render the accordion inside a full-width container (max
1140px at desktop, NO `col-*` narrowing), with three cards stacked
vertically and 10px gaps between them.

#### Scenario: Container layout

- **GIVEN** the Oregano page is rendered
- **WHEN** the user views below the heading
- **THEN** the accordion SHALL span the FULL container width (up to
  1140px at ≥1200px viewport; fluid below)
- **AND** three cards SHALL stack vertically with a 10px gap between them
  (`margin-bottom: 10px` on all but the last)

### Requirement: FAQ cards and default state

The system SHALL render an accordion with three FAQ cards — "How to
download and register?" (OPEN by default), "How to create your paypal
account?" (closed), and "How to link your paypal and bank account?"
(closed) — with only one panel open at a time.

#### Scenario: Three cards with default states

- **GIVEN** the accordion is rendered
- **WHEN** the page loads
- **THEN** card 1 SHALL show the question "How to download and register?"
  and be OPEN (matching the reference's `collapse show` on collapseOne)
- **AND** card 2 SHALL show "How to create your paypal account?" and be
  CLOSED
- **AND** card 3 SHALL show "How to link your paypal and bank account?"
  and be CLOSED

#### Scenario: Single-open behavior

- **GIVEN** card 1 is open and the others are closed
- **WHEN** the user activates the "How to create your paypal account?"
  toggle
- **THEN** the "How to create your paypal account?" panel SHALL open and
  the "How to download and register?" panel SHALL close (only one panel
  open at a time, per the reference's `data-parent` behavior)

### Requirement: Toggle bars and state styling

Each card header SHALL be a full-width white rounded button with a
`1px solid #efefef` border and a left chevron icon, toggling its panel with
correct `aria-expanded` / `aria-controls` and the reference's state
treatment: closed = gray `#999` question text + gray DOWN chevron + white
background + `#efefef` border; open = GREEN `#72c02c` background + white
question text + white UP chevron + transparent border. NO drop shadow on
either state.

#### Scenario: Closed card styling

- **GIVEN** a closed card is displayed
- **WHEN** the user views its header
- **THEN** the header SHALL be a full-width white button with padding
  `15px 15px 15px 40px`, `border-radius: 4px`, a `1px solid #efefef`
  border, and left-aligned gray `#999` question text at 16px/400
- **AND** the header SHALL show a gray `#999` DOWN chevron (lucide
  `ChevronDown`) in the left gutter (the 40px left padding area)
- **AND** the header SHALL have NO box shadow

#### Scenario: Open card styling

- **GIVEN** the open card is displayed
- **WHEN** the user views its header
- **THEN** the header background SHALL be green `#72c02c` and the question
  text SHALL be white `#fff`
- **AND** the border SHALL become `1px solid transparent`
- **AND** the icon SHALL flip to a white `#fff` UP chevron (lucide
  `ChevronUp`)
- **AND** the card SHALL carry `z-index` above its siblings (matching
  `.accordion-item.active { z-index: 2 }`) with NO box shadow

#### Scenario: Toggling a panel

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks a card header button
- **THEN** the panel SHALL toggle open/closed, the button's
  `aria-expanded` SHALL flip, and the green-header + white-text + up-icon
  styling SHALL move to the newly open card

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion is displayed
- **WHEN** the user tabs to a card header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)
- **AND** the open button SHALL carry `aria-expanded="true"` and the
  closed buttons `aria-expanded="false"` (never omit them)

### Requirement: Open panel bodies

The open panel SHALL render its body as a paragraph of placeholder
support copy on the same white card, styled `#888` at 16px with 20px
padding on ALL sides.

#### Scenario: Body content and padding

- **GIVEN** a card's panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL render placeholder copy (paraphrase of the
  reference's "Anim pariatur cliche reprehenderit…" — a couple of short
  generic support paragraphs) in `#888` at 16px/400
- **AND** the body SHALL have padding `20px` on all four sides
  (matching `20px 20px 20px 20px`, NOT Basil's `0 20px 20px`)

### Requirement: Responsive behavior

The system SHALL adapt the accordion for mobile viewports.

#### Scenario: Mobile layout (≤576px)

- **GIVEN** the Oregano page is rendered on a viewport ≤576px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the fluid container width (the
  `.container` max-width steps collapse; cards stay full-width)
- **AND** the question buttons and body copy SHALL remain readable (no
  source media queries change the cards — only scale section padding down
  for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Oregano page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the clean light minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-oregano`
- [ ] `scripts/verify-app.sh oregano` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #2" (20px/500 `#212529` on WHITE `#fff`, my-5 margins) →
      full-width accordion (max 1140px container, cards 4px radius, 10px
      gaps, `1px solid #efefef` borders) → card 1 "How to download and
      register?" (OPEN: green `#72c02c` header, white text, up chevron) →
      card 2 "How to create your paypal account?" (closed: white header,
      gray `#999` text, down chevron) → card 3 "How to link your paypal and
      bank account?" (closed, same) → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fff` page +
      closed headers, `#72c02c` active green, `#999` closed-question gray,
      `#efefef` closed border, `#212529` heading, `#888` body copy
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Oregano — FAQ Accordion"; heading 20px/500, questions 16px/400, body
      16px/400
- [ ] State signal is exact: GREEN header + white text + UP chevron on the
      open card; white header + gray text + DOWN chevron on closed cards
      (React `openIndex` state, default 0; lucide `ChevronUp`/`ChevronDown`)
- [ ] NO box shadow on ANY card (active gets `z-index` only — do NOT copy
      Basil's shadow-based open state)
- [ ] Only one panel open at a time (default = card 1); `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable
- [ ] LIGHT theme — do NOT copy Thyme's (Accordion 10) dark navy/slate
      palette AND do NOT copy Basil's (Accordion 11) `#efefef`-page /
      blue-text / shadow treatment: this variant is white-page + green
      header + chevron icons
- [ ] No image assets anywhere in this template — no picsum placeholders
      needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 12" row, line 650 —
      Bootstrap Accordions category)
- [ ] PR description MUST note: (a) the REAL preview URL
      (`preview.colorlib.com/theme/bac/accordion-12/` — the default URL
      404s), (b) design tokens, (c) how this differs from Basil/Accordion 11
      (white page + green active header + chevrons vs gray page + blue text + shadow — same source series, different visual), (d) paraphrased
      placeholder body copy
