# Template: Basil (Bootstrap Accordion / FAQ)

## Purpose

Basil is a single-page FAQ accordion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 11"
free template (source: https://colorlib.com/wp/template/accordion-11/), built
under a DIFFERENT name (**Basil** — the culinary herb, same botanical naming
family as the other Accordion recreations: Pleat (01), Forkful (02), Mentha
(03), Stash (04), Kelp (05), Clover (06), Gusset (07), Crimp (08), Sprig (09),
Thyme (10) — per the monorepo naming mandate, never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a LIGHT, minimal FAQ accordion — the visual OPPOSITE of the
dark Accordion 10 (Thyme). On a light gray `#efefef` page, a centered dark
"Bootstrap Accordion #1" heading sits above THREE white cards (radius 4px,
10px gaps). Each card is a full-width text-only button (NO icon) holding a
question, with a collapsible body of placeholder copy beneath. State is
signalled by TEXT COLOR + a drop shadow, not by icons: the OPEN card's
question turns Bootstrap blue `#007bff` and the card gains a soft shadow
(`0 15px 30px 0 rgba(0,0,0,0.2)`); CLOSED cards keep gray `#999` question
text and NO shadow. The FIRST card — **"How to download and register?"** — is
OPEN by default. The other two — **"How to create your paypal account?"** and
**"How to link your paypal and bank account?"** — are closed, each holding the
same placeholder paragraph ("Anim pariatur cliche reprehenderit…" — the
classic Bootstrap 4 accordion example copy, 602 chars, identical in all three
bodies). Basil recreates that structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 11" is FORBIDDEN as the
> app name. **Basil** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 11". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 649). Free FAQ-style accordion
  component template. The `accordion-11` slug appears exactly once in
  TEMPLATES.md (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/accordion-11/` returns
  404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bac/accordion-11/` (HTTP 200, 19,415
  bytes HTML — same `/bac/` subpath pattern as Accordion 01–10).
  Stylesheets: `css/style.css` (1.5KB — the accordion tokens, see below) +
  `css/bootstrap.min.css` (160KB — base button/collapse/typography) +
  `fonts/icomoon/style.css` (loaded but UNUSED by this template's markup —
  no icon elements exist). Scripts: `js/jquery-3.3.1.min.js`,
  `js/popper.min.js`, `js/bootstrap.min.js`, `js/main.js` (the `.active`
  toggle). Structure, copy, and tokens below are from the live DOM +
  `style.css`, cross-checked against browser-computed styles (exact values
  recorded) AND the rendered screenshot.
- **Visual design (screenshot `accordion-11.jpg`, 1200×972 JPG —
  browser-verified 2026-08-14):** very light gray page, centered dark
  sans-serif heading "Bootstrap Accordion #1", THREE white cards stacked
  vertically with slightly rounded corners and 10px gaps. The TOP card
  (open) has a soft drop shadow and BLUE question text with a paragraph of
  body copy visible; the two cards below are flat (no shadow) with darker
  gray question text and no body visible. NO icons anywhere — state is
  communicated purely by text color + shadow. Clean, flat, modern
  minimal-Bootstrap aesthetic — a support/FAQ accordion.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding 7rem 0 = 112px) →
     `div.container` (max-width 1140px at ≥1200px viewport) → centered
     `h2.my-5.text-center` "Bootstrap Accordion #1" (20px, weight 500,
     color `#212529`, margin 48px top AND bottom via `my-5`).
  2. **Accordion container** — a SECOND `div.container` (same 1140px max
     width — there is NO `col-*` wrapper, the accordion spans the FULL
     container width, unlike Thyme's narrow `col-xl-5` column) →
     `div.custom-accordion#accordion_1`.
  3. **Card 1 — "How to download and register?"** — `div.accordion-item`
     → `h2.mb-0` → `button.btn.btn-link` (`type="button"`,
     `data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="true"`, `aria-controls="collapseOne"`, NO
     `.collapsed`) → body `div#collapseOne.collapse.show`
     (**OPEN BY DEFAULT**) → `div.accordion-body` with a single 602-char
     placeholder paragraph (see copy below).
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
.btn-link`) is `display: block; width: 100%; padding: 15px;
text-align: left; color: #999`, font Roboto 16px/400 (Bootstrap `.btn`
  base: `font-weight: 400`, `border-radius: 4px` computed), `text-decoration:
none`, hover → `color: #000` (`.btn-link:hover { color: #000 }`). The
  heading `h2.mb-0` wraps the button (the source uses an `h2` as the
  accordion header element). The card is a TEXT-ONLY button — NO icon
  element, NO glyph, NO background box (unlike the arrow glyphs in
  Thyme). State is signaled by text color + shadow only.
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
2`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)` — the ONLY card with a
  shadow (closed items compute `box-shadow: none` ✓), and its button color
  becomes `#007bff` (`.custom-accordion .accordion-item.active .btn-link {
color: #007bff }`; computed `rgb(0,123,255)` on the open card vs
  `rgb(153,153,153)` = `#999` on the two closed cards ✓). Recreate with
  React state: one `openIndex` (default 0), the active card gets the
  blue question + shadow classes, `aria-expanded` flips, panels are
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
  - `#efefef` — light gray PAGE background (`body { background-color:
#efefef }`; computed `rgb(239,239,239)` ✓ exact).
  - `#ffffff` — CARD background (`.accordion-item { background-color: #fff
}`; computed `rgb(255,255,255)`).
  - `#007bff` — Bootstrap primary blue: the OPEN card's question text
    (`.custom-accordion .accordion-item.active .btn-link { color: #007bff
}`; computed `rgb(0,123,255)` ✓) — the template's only accent color.
  - `#999999` — CLOSED card question text (`.btn-link { color: #999 }`;
    computed `rgb(153,153,153)` ✓); hover → `#000`.
  - `#212529` — near-black body/heading text (Bootstrap default body color;
    computed on `body` and the `h2` heading ✓).
  - `#888888` — body-copy text (`.accordion-body { color: #888 }`;
    computed `rgb(136,136,136)` ✓). (The sheet's `p { color: #b3b3b3;
font-weight: 300 }` does NOT apply — the body copy is bare text inside
    `.accordion-body`, not a `<p>`.)
  - `rgba(0,0,0,0.2)` — the OPEN card's drop shadow (`0 15px 30px 0
rgba(0,0,0,0.2)`).
- **Fonts:** **Roboto** (`body { font-family: "Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", … }`) — loaded via Google Fonts `<link>`
  in `index.html` (the preview head embeds Roboto 300/400/500 woff2 via
  cf-fonts). Heading "Bootstrap Accordion #1" 20px/500; question buttons
  16px/400; body copy 16px/400 (Bootstrap `.btn`/body base — no size
  overrides in the custom sheet).
- **Buttons:** the question header IS the button — full width, padding
  `15px` all around, `border-radius: 4px`, no border, `text-align: left`,
  no text-decoration, color `#999` (closed) / `#007bff` (open) / `#000`
  (hover), Roboto 16px/400. NO icon inside (text-only — unlike Thyme's
  glyphs).
- **Radii:** cards + buttons `4px` (Bootstrap `.btn` / custom
  `.accordion-item`).
- **Shadows:** ONLY the open/active card: `0 15px 30px 0 rgba(0,0,0,0.2)`;
  closed cards have NO shadow (computed `none` ✓).
- **Spacing rhythm:** section padding `7rem 0` (112px); heading margin
  `48px 0` (`my-5`); cards separated by `margin-bottom: 10px` (gap between
  stacked cards); button padding `15px`; body padding `0 20px 20px`
  (20px horizontal + 20px bottom, 0 top — computed ✓); container max-width
  1140px at desktop (full width, no `col-*` narrowing).
- **Icons:** NONE — text-only question headers. Do NOT add any icon
  (lucide-react not needed for this template; the state signal is color +
  shadow).
- **Images:** NONE — no image assets, no picsum placeholders needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading at the top of the page,
styled 20px weight-500 `#212529` Roboto with 48px top and bottom margins,
on the `#efefef` light gray page background.

#### Scenario: Heading layout

- **GIVEN** the Basil page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Bootstrap Accordion #1" centered at
  the top of the light gray page
- **AND** the heading SHALL be 20px, weight 500, color `#212529`, with 48px
  margins above and below, matching the reference
- **AND** the heading text SHALL be "Bootstrap Accordion #1" verbatim (the
  `h2` carries "Bootstrap "; the `<title>` tag is "Accordion #1" — use the
  `h2` form in the page and a Basil-branded document title)

### Requirement: Accordion container

The system SHALL render the accordion inside a full-width container (max
1140px at desktop, NO `col-*` narrowing — unlike Thyme's narrow
`col-md-7 col-lg-6 col-xl-5`), with three cards stacked vertically and
10px gaps between them.

#### Scenario: Container layout

- **GIVEN** the Basil page is rendered
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

Each card header SHALL be a full-width white rounded button that toggles
its panel, with correct `aria-expanded` / `aria-controls` and the
reference's state treatment: closed = gray `#999` question text, NO
shadow; open = Bootstrap blue `#007bff` question text + soft shadow
`0 15px 30px 0 rgba(0,0,0,0.2)`. NO icons on either state.

#### Scenario: Closed card styling

- **GIVEN** a closed card is displayed
- **WHEN** the user views its header
- **THEN** the header SHALL be a full-width white button with 15px padding,
  `border-radius: 4px`, left-aligned gray `#999` question text at
  16px/400, and NO box shadow
- **AND** the header SHALL contain NO icon (text-only, like the reference)

#### Scenario: Open card styling

- **GIVEN** the open card is displayed
- **WHEN** the user views its header
- **THEN** the header question text SHALL be Bootstrap blue `#007bff`
- **AND** the card SHALL carry the soft shadow
  `0 15px 30px 0 rgba(0,0,0,0.2)` (the only card with a shadow)

#### Scenario: Toggling a panel

- **GIVEN** the accordion is displayed
- **WHEN** the user clicks a card header button
- **THEN** the panel SHALL toggle open/closed, the button's
  `aria-expanded` SHALL flip, and the blue-text + shadow styling SHALL
  move to the newly open card

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
horizontal and bottom padding (0 top).

#### Scenario: Body content and padding

- **GIVEN** a card's panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL render placeholder copy (paraphrase of the
  reference's "Anim pariatur cliche reprehenderit…" — a couple of short
  generic support paragraphs) in `#888` at 16px/400
- **AND** the body SHALL have padding `0 20px 20px` (no top padding)

### Requirement: Responsive behavior

The system SHALL adapt the accordion for mobile viewports.

#### Scenario: Mobile layout (≤576px)

- **GIVEN** the Basil page is rendered on a viewport ≤576px
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

- **GIVEN** the Basil page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the clean light minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-basil`
- [ ] `scripts/verify-app.sh basil` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #1" (20px/500 `#212529` on `#efefef`, my-5 margins) →
      full-width accordion (max 1140px container, cards 4px radius, 10px
      gaps) → card 1 "How to download and register?" (OPEN: blue `#007bff`
      question + shadow) → card 2 "How to create your paypal account?"
      (closed: gray `#999` question, no shadow) → card 3 "How to link your
      paypal and bank account?" (closed, same) → minimal Component Dock
      footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#efefef` page,
      `#fff` cards, `#007bff` open-question blue, `#999` closed-question
      gray (hover `#000`), `#212529` heading, `#888` body copy; open-card
      shadow `0 15px 30px 0 rgba(0,0,0,0.2)` ONLY on the active card
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html`; title
      "Basil — FAQ Accordion"; heading 20px/500, questions 16px/400, body
      16px/400
- [ ] State signal is exact: NO icons anywhere; open = blue text + shadow,
      closed = gray text + no shadow (React `openIndex` state, default 0)
- [ ] Only one panel open at a time (default = card 1); `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable
- [ ] LIGHT theme — do NOT copy Thyme's (Accordion 10) dark navy/slate
      palette; this is the light FAQ counterpart
- [ ] No image assets anywhere in this template — no picsum placeholders
      needed
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 11" row, line 649 —
      Bootstrap Accordions category)
- [ ] PR description MUST note: (a) the REAL preview URL
      (`preview.colorlib.com/theme/bac/accordion-11/` — the default URL
      404s), (b) design tokens, (c) the LIGHT FAQ aesthetic (opposite of
      Thyme's dark goals accordion — same source series, different
      visual), (d) paraphrased placeholder body copy
