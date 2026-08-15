# Template: Ticktag (Bootstrap Checkbox UI Component)

## Purpose

Ticktag is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 03"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-03/), built under a
DIFFERENT name (Ticktag — a tick/tag chip checkbox) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript. The page is a minimal showcase of pill-shaped "tag" checkboxes
(one heading + two toggleable chips) — a tiny, self-contained demo.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 03" — third of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 733 — mark that line `[x]` when done).
  NOTE: the Checkbox 01/02 demos (prepped as Tickbox/Picks) use a different
  visual (`label.checkbox-wrap` colored square list); Checkbox 03 is a
  DIFFERENT design — a `ul.ks-cboxtags` pill/tag chip list. Do not reuse the
  Tickbox component; this is its own app.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/checkbox-03/` returns **HTTP 404**.
  These "Checkbox NN" demos are sub-pages of ColorLib's big Bootstrap theme,
  so the real live preview is
  `https://preview.colorlib.com/theme/bootstrap/checkbox-03/`
  (HTTP 200, 7.9 KB HTML). Master stylesheet `css/style.css` (~221 KB, fully
  extracted for tokens) is relative to that sub-path:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-03/css/style.css`.
  libs: bootstrap 4, jquery, popper, font-awesome 4.7 (chip icons are
  FontAwesome glyphs `\f067` plus / `\f00c` check). Google Font **Poppins**
  (300–900 via Cloudflare-hosted @font-face in the head).
  Cross-checked against the TEMPLATES.md screenshot (`checkbox-03.jpg`,
  1200×972, browser-viewed) — all match. The demo brands itself "Checkbox
  #03"; the recreation uses the NEW name **Ticktag**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, minimalist
  demo page on a white background. Centered column: a black 28px heading
  "Checkbox #03" (`h2.heading-section`), then a col-md-5 (~475px) centered
  area holding an inline flow of two pill-shaped checkbox chips
  (`ul.ks-cboxtags`): **"Confirm Order One"** and **"Confirm Order Two"**.
  Unchecked chip = white pill, thin light-gray border, gray text (`#adadad`),
  small **plus** icon on the left; checked chip = warm amber/gold pill
  (`#fec771`, no visible border — fills the shape), white text, **check**
  icon that rotates in (−360deg). The screenshot shows the first chip
  unchecked and the second checked (the amber state); the LIVE demo DOM has
  BOTH inputs unchecked by default — start both unchecked, toggling flips
  each chip to the amber checked visual. No navbar, no footer — just the
  single `ftco-section`.
- **Section order (1:1, from live demo DOM):**
  1. `section.ftco-section` (padding 7em 0 = 112px vertical) → `div.container`
     (Bootstrap container, centered, max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
     "Checkbox #03" (28px, `#000`, centered).
  3. `div.row.justify-content-center` → `div.col-md-5` (~475px centered
     column) → `ul.ks-cboxtags` (list-style none, padding 20px) → two `li`
     (display inline) blocks, each:
     - `<input type="checkbox" id="checkboxOne|Two" value="Order one|Two">`
       (hidden: position absolute, opacity 0)
     - `<label for="checkboxOne|Two">Confirm Order One|Two</label>`
       (pill chip; the `:checked + label` sibling selector drives the visuals)
- **Design tokens extracted from `css/style.css` + DOM:**
  - Checked chip (`.ks-cboxtags li input:checked + label`): border **1px
    solid #fec771**, background **#fec771**, color **#fff** — brand accent
    **#fec771** (warm amber/gold).
  - Unchecked chip (`ul.ks-cboxtags li label`): background
    **rgba(255,255,255,0.9)**, border **1px solid rgba(139,139,139,0.3)**,
    color **#adadad**, border-radius **25px** (pill), white-space nowrap,
    padding **8px 12px**, margin **3px 0**, font-weight **400**, cursor
    pointer, user-select none, transition **all .2s**.
  - Chip icon (`label::before`): FontAwesome 12px, padding **2px 6px 2px 2px**,
    content `\f067` (plus) unchecked → `\f00c` (check) when checked, with
    **rotate(-360deg)** + transition **transform .3s ease-in-out**.
  - `ul.ks-cboxtags`: list-style none, padding **20px**; `li`: display inline.
  - Hidden input: position absolute, opacity 0 (kept for accessibility).
  - Base theme: body font **"Poppins", Arial, sans-serif**, 14px, line-height
    1.8, color `gray` (#808080), background **#fff**; `.ftco-section` padding
    7em 0; `.heading-section` 28px color **#000**; container max-width
    1140px; col-md-5 ≈ 41.67% width.
- **Recreation decisions:** no copied assets — FontAwesome glyphs → lucide-react
  (`Plus` for unchecked, `Check` for checked, ~12px, the check with a
  -360°→0 rotate transition on check); Poppins via Google Fonts `<link>` in
  `index.html` (300/400/500/600/700/800/900); no external libs (plain React
  state per checkbox); the hidden native checkbox pattern is kept for
  accessibility (real `<input type="checkbox">` visually hidden inside the
  label — keyboard focusable + screen-reader friendly, label `for`/input `id`
  pairing like the demo); demo copy kept as-is ("Confirm Order One" /
  "Confirm Order Two") since the labels ARE the design. Both chips start
  unchecked (matches the live DOM; the screenshot's checked chip documents
  the amber checked state). The demo has no footer; per repo rules every
  template MUST still include a minimal footer with the mandated Component
  Dock link (https://www.componentdock.com/).

Ticktag lives in `apps/ticktag` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Demo section with heading

The system SHALL render a single centered demo section with a large black
heading "Checkbox #03" on a white background.

#### Scenario: Section and heading

- **GIVEN** the Ticktag page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show one section with generous vertical padding
  (≈112px top and bottom)
- **AND** the section SHALL show a centered heading "Checkbox #03" in black
  (28px) on a white background
- **AND** the content SHALL be confined to a centered column
  (≈475px on desktop)

### Requirement: Tag-style checkbox chip list

The system SHALL render two pill-shaped checkbox chips — "Confirm Order One"
and "Confirm Order Two" — as an inline flow of tags, each with a hidden native
checkbox and a label chip.

#### Scenario: Both chips present

- **GIVEN** the demo section is displayed
- **WHEN** the user views the checkbox list
- **THEN** the list SHALL show exactly two chips in this order: "Confirm
  Order One", "Confirm Order Two"
- **AND** each chip SHALL be a pill (25px radius) with the label text and a
  small leading icon
- **AND** each chip SHALL be toggleable independently

#### Scenario: Unchecked chip visuals

- **GIVEN** a chip is unchecked
- **THEN** the chip SHALL show a white pill background
- **AND** the chip SHALL have a thin light-gray border
  (1px solid rgba(139,139,139,0.3))
- **AND** the label text SHALL be gray (#adadad)
- **AND** the leading icon SHALL be a plus icon

#### Scenario: Checked chip visuals

- **GIVEN** a chip is checked
- **THEN** the chip SHALL show the brand amber background (#fec771) with a
  matching border
- **AND** the label text SHALL be white
- **AND** the leading icon SHALL be a check icon
- **AND** the icon SHALL transition smoothly into place (rotate −360°, 0.3s)

### Requirement: Checkbox interaction and accessibility

The system SHALL make every chip toggleable via click and keyboard, with the
hidden native input kept for accessibility.

#### Scenario: Toggle by click and keyboard

- **GIVEN** a chip is rendered
- **WHEN** the user clicks the chip/label
- **THEN** the chip SHALL toggle between checked and unchecked
- **WHEN** the user focuses the hidden checkbox and presses Space
- **THEN** the chip SHALL toggle between checked and unchecked

#### Scenario: Accessible control

- **GIVEN** the chip list is rendered
- **WHEN** an accessibility tree is inspected
- **THEN** each chip SHALL be exposed as a checkbox control with an
  accessible name equal to its label text ("Confirm Order One" /
  "Confirm Order Two") via the hidden native input + label `for`/`id` pairing

### Requirement: Page composition

The system SHALL compose the demo section and a minimal footer in a single
page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Ticktag app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the demo section in the main landmark
- **AND** the page SHALL show a minimal footer with a link to
  https://www.componentdock.com/ ("Component Dock")
- **AND** the document title SHALL be "Ticktag — Checkbox UI Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh ticktag` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (single ftco-section: centered
      "Checkbox #03" heading + centered col-md-5 area with the two chips)
- [ ] Design tokens in `@theme`: brand accent `#fec771`; unchecked chip bg
      rgba(255,255,255,0.9) + border rgba(139,139,139,0.3) + text `#adadad`;
      checked text `#fff`; page bg `#fff`; heading `#000`
- [ ] Font: Poppins (300–900) via Google Fonts
- [ ] Chip anatomy: 25px pill radius, 8px 12px padding, 3px 0 margin, 12px
      leading icon (Plus/Check from lucide-react), 0.2s pill transition,
      0.3s icon rotate transition
- [ ] Both chips start unchecked (matches live demo DOM); toggling flips to
      the amber checked visual
- [ ] Chips toggle by click and Space; accessible name = label text (hidden
      native input + label for/id)
- [ ] Icons: lucide-react Plus/Check (no FontAwesome, no copied assets)
- [ ] Footer: minimal, links https://www.componentdock.com/ (repo mandate —
      the demo itself has no footer)
- [ ] `TEMPLATES.md` line 733 updated by the implementer (`[~]` → `[x]` +
      surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
