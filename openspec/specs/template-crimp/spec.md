# Template: Crimp (Bootstrap Accordion / Account Menu)

## Purpose

Crimp is a single-page accordion menu template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Accordion 08"
free template (source: https://colorlib.com/wp/template/accordion-08/), built
under a DIFFERENT name (**Crimp** — "to press into small regular folds or
ridges", evoking the accordion's folded panels; same naming family as the
Accordion 07 recreation "Gusset"; per the monorepo naming mandate — never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a clean account-settings-style accordion menu: a WHITE page
with a centered "Accordion #04" heading and a single white accordion card
(rounded corners, soft floating shadow) containing THREE coral-red toggle
bars — **Account** (count badge 10), **Messages** (count badge 89, OPEN by
default), and **Cloud** (count badge 102). Each toggle is solid coral
`#db624e` with white text, a white circular icon (User/Mail/Cloud) and a
lighter-coral pill count badge; the open panel drops a dark charcoal
`#453f3e` body below its toggle with a list of link rows (label + right
chevron). Crimp recreates that structure 1:1 with matching layout, tokens,
typography, and content kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 08" is FORBIDDEN as the
> app name. **Crimp** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> ⚠️ STALE-HEADING ARTIFACT (read before implementing): the source pack's
> title tag AND its `h2` heading BOTH read "Accordion #04" (the pack author
> copied Accordion 04's file and never updated the number), and the OFFICIAL
> TEMPLATES.md screenshot (`accordion-08.jpg`) shows the same. The page is
> nonetheless the genuine Accordion 08 design — its panels (Account/Messages/
> Cloud with counts 10/89/102) differ from the real Accordion 04 page (My
> Files/Mail/Cloud) and from Accordion 05 (Manage/Location/Hobbies).
> **Fidelity decision: recreate the heading VERBATIM as "Accordion #04"** —
> that is what the live preview and the official screenshot render, and the
> user's phone-side visual QA compares against the live preview. Do NOT
> "correct" it to "#08"; instead document this artifact in the PR
> description. The app's `index.html` `<title>` is our own and should be
> "Crimp — Account Menu Accordion" (the source title "Accordion 04" is also
> stale).

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 08". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 646). Free accordion/menu component
  template. The `accordion-08` slug appears exactly once in TEMPLATES.md
  (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default
  preview URL `https://preview.colorlib.com/theme/accordion-08/` returns
  404; the REAL preview URL is
  `https://preview.colorlib.com/theme/bac/accordion-08/` (HTTP 200, 13,600
  bytes HTML — same `/bac/` subpath pattern as Accordion 01–07). Stylesheets:
  `css/style.css` (222.9KB — bootstrap + custom; token source) +
  `https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css`
  (menu glyphs via the Ionicons font-family trick). Structure, copy, and
  tokens below are from the live DOM + `style.css`, cross-checked against
  pixel samples of the rendered screenshot.
- **Visual design (screenshot `accordion-08.jpg`, 1200×972 AVIF —
  browser-verified + pixel-sampled 2026-08-14):** white page, centered dark
  "Accordion #04" heading, single white card (radius 5, soft shadow,
  `col-md-6` ≈ half-width centered) containing three stacked SOLID CORAL
  toggle bars separated by hairline separators. Each bar: white glyph in a
  circular badge on the left, white label, and a pill count badge at the
  right. The middle bar ("Messages") is EXPANDED — its dark charcoal
  `#453f3e` dropdown panel shows three link rows (New / Sent / Trash) with
  right chevrons. Flat, modern, high-contrast admin/menu aesthetic. No
  images anywhere — pure typography + the accordion card.
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `section.ftco-section` (padding 7em 0) →
     `div.container` → `div.row` → `div.col-md-12.text-center` → centered
     `h2.heading-section.mb-5.pb-md-4` "Accordion #04" (28px, `#000`,
     text-center).
  2. **Accordion card** — `div.row.justify-content-center` →
     `div.col-md-6` (centered, ~50% width desktop) →
     `div#accordion.myaccordion.w-100`: margin auto, `background: #fff`,
     `border-radius: 5px`, `box-shadow: 0px 10px 38px -19px rgba(0,0,0,0.66)`,
     `overflow: hidden`.
  3. **Panel 1 — "Account"** — `div.card` (border none, transparent bg) →
     `div.card-header.p-0` → `h2.mb-0` → full-width toggle button
     `d-flex py-3 px-4 align-items-center justify-content-between btn btn-link`
     (`data-toggle="collapse"`, `data-target="#collapseOne"`,
     `aria-expanded="false"`, `aria-controls="collapseOne"`, NO `.collapsed`)
     → left `div.heading d-flex align-items-center` with `div.icon
d-flex align-items-center justify-content-center` (40px circle, Ionicons
     `ion-ios-person`) + `h3.mb-0.ml-3` "Account" → right `p.mb-0.num`
     "10" (pill count badge). Body `div#collapseOne.collapse` (CLOSED) →
     `div.card-body.p-0.py-3` (bg `#453f3e`) → `ul` with 5 rows: Dropbox,
     Skydrive, FTP Server, Dropbox, Skyrdrive (source has a duplicate
     "Dropbox" and a "Skyrdrive" typo — paraphrase/dedupe freely, keep 5
     storage-service rows).
  4. **Panel 2 — "Messages"** — same structure, Ionicons `ion-ios-mail`,
     badge "89"; body `div#collapseTwo.collapse.show` (**OPEN BY DEFAULT**)
     with 3 rows: New, Sent, Trash. (Source markup quirk: this button keeps
     a stale `.collapsed` class while `aria-expanded="true"` — recreate with
     CORRECT semantics: open button = `aria-expanded="true"`, no
     `.collapsed`.)
  5. **Panel 3 — "Cloud"** — same structure, Ionicons `ion-ios-cloud`,
     badge "102"; body `div#collapseThree.collapse` (CLOSED) with 4 rows:
     iCloud, Skydrive, FTP Server, Dropbox.
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **Row markup inside open bodies:** `ul` (padding 0) → `li` (list-style
  none, `border-bottom: 1px solid rgba(255,255,255,0.05)`, last-child none)
  → `a.d-flex.justify-content-between.align-items-center` (padding
  `15px 30px`) → `p` (color `rgba(255,255,255,0.8)`, font-weight 600,
  margin 0) + `span.icon` (color `#fff`, 16px, Ionicons
  `ion-ios-arrow-forward`).
- **JS behaviors (original):** Bootstrap collapse with `data-parent` (only
  ONE panel open at a time; default = the Messages panel), `aria-expanded`
  on the toggle. All three toggle bars stay coral in BOTH states — there is
  NO color swap on open/close (the open/closed distinction is purely the
  dark body's visibility). Recreate with React state: one `openIndex`
  (default 1 = Messages), buttons toggle, panels are `role="region"` /
  labelled by their header button. Content is static presentational data
  (no backend).

## Design tokens (verified from live stylesheet `css/style.css` + rendered pixels)

- **Brand colors:**
  - `#db624e` — THE brand accent (coral red): toggle bar background
    (`.myaccordion .btn { background: #db624e }`) and `a` link color.
    Rendered pixel sample ≈ (205,104,85) ✓.
  - `#df7563` — lighter coral: the count badge background
    (`.myaccordion .card-header .num { background: #df7563 }`). Rendered
    badge pixels ≈ (206–209, 111–112, 91–92) ✓ (lighter than the button).
  - `#ffffff` — page background (`body { background: #fff }`), card
    background, and open-body text (chevrons, glyphs).
  - `#000000` — page heading color (`.heading-section`, 28px).
  - `#453f3e` — dark charcoal: OPEN panel body background
    (`.card-body { background: #453f3e }`). Rendered pixels (68,61,62) ✓
    exact match.
  - `rgba(255,255,255,0.5)` — icon circle border (`.heading .icon { border:
1px solid rgba(255,255,255,0.5) }`).
  - `rgba(255,255,255,0.8)` — body row label color (`.card-body ul li a p`).
  - `rgba(255,255,255,0.05)` — body row separator
    (`border-bottom: 1px solid rgba(255,255,255,0.05)`).
  - `rgba(0,0,0,0.1)` — toggle bar separator
    (`.myaccordion .btn { border-bottom: 1px solid rgba(0,0,0,0.1) }`).
  - `gray` — default body copy color (Poppins 14px / 1.8).
  - Shadow tint `rgba(0,0,0,0.66)` — card shadow (`0px 10px 38px -19px`).
- **Fonts:** **Poppins** (body + headings; `body { font-family: "Poppins",
Arial, sans-serif; font-size: 14px; line-height: 1.8; font-weight:
normal }`) — loaded via Google Fonts `<link>` in `index.html` (the
  original head has no font `<link>`; it relies on an inherited Poppins,
  same as the Accordion 07 page). Heading "Accordion #04" 28px; toggle
  button 18px; panel label `h3` 16px; body rows 14px/600 (p) with 16px
  chevrons; badge 16px.
- **Buttons:** the toggle bar IS the button — full width, `background:
#db624e`, `color: #000` (overridden to WHITE by the label/icon rules),
  18px, padding `py-3 px-4` (0.75rem / 1.5rem), letter-spacing 0,
  `border-radius: 0`, no border except `border-bottom: 1px solid
rgba(0,0,0,0.1)`; hover/focus remove underline (`text-decoration: none`).
  NO state color change when open/closed.
- **Radii:** card `border-radius: 5px`; icon circle 50% (40×40px); count
  badge pill `border-radius: 40px`; buttons square (radius 0).
- **Shadows:** card `0px 10px 38px -19px rgba(0,0,0,0.66)` (soft floating
  shadow).
- **Spacing rhythm:** section padding `7em 0`; heading `mb-5 pb-md-4`;
  toggle padding `py-3 px-4`; icon circle 40×40px with `ml-3` label gap;
  badge padding `4px 15px`; body rows `padding: 15px 30px`; body wrapper
  `p-0 py-3` (0 / 0.75rem).
- **Icons:** lucide-react `User` (Account), `Mail` (Messages), `Cloud`
  (Cloud) at 20px inside the 40px circular badge; `ChevronRight` at 16px
  for body rows — the original's Ionicons glyph font (`ion-ios-person` /
  `ion-ios-mail` / `ion-ios-cloud` / `ion-ios-arrow-forward`) is NOT copied.
- **CSS-defined but NOT visible in the render:** `.card-body:after` — a
  15px coral triangle (`border-color: #db624e transparent transparent
transparent`, positioned top:0 left:30px) intended as a speech-bubble
  tail on the open body; in the rendered preview it is stacked BEHIND the
  toggle bar and invisible (confirmed by pixel sampling: no coral pixels at
  the top of the dark panel). **Omit it** to match the rendered reference.
- **No images** in this template — pure typography/cards, so no picsum
  seeds are needed.

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading at the top of the page,
styled 28px `#000` Poppins with generous bottom spacing, on the `#fff` page
background.

#### Scenario: Heading layout

- **GIVEN** the Crimp page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Accordion #04" centered at the top
  of the white page
- **AND** the heading SHALL be 28px, `#000`, with a large bottom margin
  (mb-5 + pb-md-4 equivalent), matching the reference
- **AND** the heading text SHALL be "Accordion #04" verbatim (stale-number
  artifact of the source — the live preview and official screenshot both
  render it this way; do NOT "correct" it)

### Requirement: Accordion card container

The system SHALL render a single white accordion card, centered at ~50%
container width on desktop, with the reference rounded corners and soft
floating shadow.

#### Scenario: Card layout

- **GIVEN** the Crimp page is rendered
- **WHEN** the user views below the heading
- **THEN** a single card SHALL be centered in a `col-md-6`-equivalent column
  with `border-radius: 5px` and
  `box-shadow: 0px 10px 38px -19px rgba(0,0,0,0.66)`
- **AND** the card SHALL be white (`#fff`), `overflow: hidden`, and contain
  three stacked toggle bars with no outer borders

### Requirement: Accordion structure and default state

The system SHALL render an accordion with three panels — "Account" (badge
10), "Messages" (badge 89), and "Cloud" (badge 102) — with the Messages
panel OPEN by default and only one panel open at a time.

#### Scenario: Three panels with default states

- **GIVEN** the accordion card is rendered
- **WHEN** the page loads
- **THEN** panel 1 SHALL be titled "Account" with count badge "10" and be
  CLOSED
- **AND** panel 2 SHALL be titled "Messages" with count badge "89" and be
  OPEN (matching the reference's `collapse show` on collapseTwo)
- **AND** panel 3 SHALL be titled "Cloud" with count badge "102" and be
  CLOSED

#### Scenario: Single-open behavior

- **GIVEN** the Messages panel is open and the others are closed
- **WHEN** the user activates the "Account" toggle
- **THEN** the Account panel SHALL open and the Messages panel SHALL close
  (only one panel open at a time, per the reference's `data-parent`
  behavior)

### Requirement: Toggle bars

Each panel header SHALL be a full-width coral toggle bar that toggles its
panel, with correct `aria-expanded` / `aria-controls` and the reference's
icon + badge layout. The bar SHALL NOT change color between open and closed
states (the reference keeps all bars coral).

#### Scenario: Toggling a panel

- **GIVEN** the accordion card is displayed
- **WHEN** the user clicks a panel header button
- **THEN** the panel SHALL toggle open/closed and the button's
  `aria-expanded` SHALL flip accordingly
- **AND** the button SHALL remain coral `#db624e` in both states (no active
  color swap — open/closed is signaled only by the dark body's visibility)

#### Scenario: Bar layout and styling

- **GIVEN** the accordion card is displayed
- **WHEN** the user views a toggle bar
- **THEN** the bar SHALL be full width with background `#db624e`, white
  text, 18px, `border-radius: 0`, and a `1px rgba(0,0,0,0.1)` bottom
  separator
- **AND** the bar SHALL show, left to right: a 40px circular icon badge
  (white 1px `rgba(255,255,255,0.5)` border + white 20px glyph — `User` /
  `Mail` / `Cloud`), the white 16px panel label, and a right-aligned pill
  count badge (background `#df7563`, white 16px text, padding 4px 15px,
  radius 40px)

#### Scenario: Keyboard accessibility

- **GIVEN** the accordion card is displayed
- **WHEN** the user tabs to a panel header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)
- **AND** the open button SHALL carry `aria-expanded="true"` with NO
  `.collapsed` class (the source markup's stale `.collapsed` on the open
  button is an authoring bug — recreate with correct semantics)

### Requirement: Open panel body

The open panel SHALL render a dark charcoal dropdown listing its rows —
each row a full-width link with a label (white, 600) and a right chevron —
on the reference `#453f3e` background with hairline separators.

#### Scenario: Body content and styling

- **GIVEN** a panel is open
- **WHEN** the user views its body
- **THEN** the body SHALL have background `#453f3e` and render its rows as
  links with padding `15px 30px`
- **AND** each row SHALL show a label (`rgba(255,255,255,0.8)`, weight 600)
  on the left and a white 16px `ChevronRight` icon on the right
- **AND** rows SHALL be separated by `1px rgba(255,255,255,0.05)` bottom
  borders (none on the last row)

#### Scenario: Per-panel rows

- **GIVEN** the Account panel is open
- **THEN** it SHALL list five storage-service rows (e.g. Dropbox, OneDrive,
  FTP Server, Google Drive, iCloud — paraphrase freely; the source repeats
  "Dropbox" and contains a "Skyrdrive" typo)
- **GIVEN** the Messages panel is open
- **THEN** it SHALL list three mail-folder rows: New, Sent, Trash
- **GIVEN** the Cloud panel is open
- **THEN** it SHALL list four cloud-service rows: iCloud, OneDrive, FTP
  Server, Dropbox (paraphrase allowed)

### Requirement: Responsive behavior

The system SHALL adapt the card column for mobile viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Crimp page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion card SHALL fill the viewport width (the
  `col-md-6` centering collapses to a single column)
- **AND** section padding SHALL reduce (the reference's `7em` is large;
  scale down for mobile per repo conventions)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Crimp page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-crimp`
- [ ] `scripts/verify-app.sh crimp` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Accordion
      #04" → white accordion card (radius 5, soft shadow) → Account bar
      (closed, badge 10) → Messages bar (OPEN, badge 89) with dark
      `#453f3e` body (New / Sent / Trash) → Cloud bar (closed, badge 102)
      → minimal Component Dock footer
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#db624e` coral
      bars, `#df7563` badges, `#453f3e` open-body, `#fff` page/card,
      `#000` heading; card shadow `0 10px 38px -19px rgba(0,0,0,.66)`;
      separators `rgba(0,0,0,0.1)` (bars) + `rgba(255,255,255,0.05)` (rows)
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; title
      "Crimp — Account Menu Accordion"
- [ ] No images needed (pure typography template — faithful); icons from
      lucide-react (`User`/`Mail`/`Cloud`/`ChevronRight`) — no copied
      assets
- [ ] Only one panel open at a time (default = Messages); `aria-expanded`/
      `aria-controls` + `role="region"`; keyboard operable; open button has
      NO `.collapsed` class
- [ ] Toggle bars stay coral in both states (no active color swap); the
      CSS `:after` coral triangle is OMITTED (invisible in the rendered
      reference)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 08" row, line 646 —
      Bootstrap Accordions category)
- [ ] PR description MUST note: (a) the REAL preview URL
      (`preview.colorlib.com/theme/bac/accordion-08/` — the default URL
      404s), (b) the stale "Accordion #04" heading artifact (recreated
      verbatim by design), (c) design tokens, (d) paraphrased row labels
