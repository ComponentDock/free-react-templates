# Template: Marjoram (Bootstrap Accordion — FAQ Accordion)

## Purpose

Marjoram is a single-page accordion FAQ template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 18" free template (source:
https://colorlib.com/wp/template/accordion-18/), built under a DIFFERENT name
(**Marjoram** — an aromatic culinary herb, continuing the herb/spice naming
run of the accordion series: thyme, basil, oregano, anise, rosemary, dill,
tarragon, quorly…; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NAMING NOTE: the ColorLib source name "Accordion 18" is FORBIDDEN as the
> app name. **Marjoram** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

The original is a minimal, clean FAQ accordion: a WHITE page with a centered
"Bootstrap Accordion #8" heading and a three-panel accordion — **How to
download and register?** (open by default), **How to create your paypal
account?** (closed), and **How to link your paypal and bank account?**
(closed). Each panel holds a block of muted placeholder copy. The items are
SQUARE (radius 0, `#f9f9f9` background, no borders, no shadows) with white
header bars; the toggle icon is a small chevron CHIP on the RIGHT edge of
each header — a `#efefef` chip with a dark chevron when collapsed, swapping
to a green `#72c02c` chip with a white chevron when open. The ONLY color
accent on the page is the green `#72c02c`, used for the open item's label
and its icon chip. Marjoram recreates that structure 1:1 with matching
layout, tokens, typography, and content kinds (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 18". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 656). Free accordion/FAQ component
  template. The slug appears exactly once (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-18/` returns 404; the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-18/`
  (HTTP 200, 19.4KB HTML, `<title>Accordion #8</title>`; the `/bac/` subpath
  = the "bootstrap accordions" demo index — same pattern as accordion-16 →
  Tarragon, accordion-17 → Quorly). Stylesheets: `css/style.css` (2.2KB —
  bootstrap + custom; token source), `css/bootstrap.min.css`,
  `css/owl.carousel.min.css` (unused on this page), `fonts/icomoon/style.css`
  (chevron glyphs). Structure, copy, and tokens below are from the live DOM +
  `style.css`. Screenshot (`accordion-18.jpg`, 1200×972, browser-verified
  2026-08-14) confirms the aesthetic: WHITE page, centered "Bootstrap
  Accordion #8" heading, THREE square accordion rows — first expanded with a
  green chevron chip, the other two collapsed with grey chevron chips, white
  header bars, no navbar, no footer, no imagery.
- **Visual design (screenshot + live DOM):** extremely clean, minimal,
  typography-driven. White `#fff` page, dark-gray heading, three square items
  (`#f9f9f9` on `#fff`, radius 0) with WHITE header bars and `#999` labels.
  The open item's label turns green `#72c02c` and its right-edge chevron chip
  flips from `#efefef`/dark to `#72c02c`/white. Body copy is muted gray. No
  images anywhere — pure text + one accordion. Sans-serif (Roboto)
  throughout, light weights (300).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding `7rem 0`) → `div.container` →
     centered `h2.my-5.text-center` "Bootstrap Accordion #8" (20px Roboto,
     dark gray/black, `my-5` = 3rem vertical margins).
  2. **Accordion** — `div.container` → `div.custom-accordion#accordion_1`:
     three `div.accordion-item` blocks stacked with `margin-bottom: 10px`
     (`background-color: #f9f9f9`, `border-radius: 0px`, `overflow: hidden`;
     NO border, NO shadow). Each item: `h2.mb-0` → full-width
     `button.btn.btn-link` (`display: block`, `width: 100%`, `padding: 15px`
     with `padding-left: 0px`, `text-align: left`, `color: #999`,
     `background: #fff`, `border: none`, `border-radius: 0`, `.3s all ease`
     transition) with a chevron icon chip (`:before`, icomoon `\e313` =
     keyboard_arrow_down) absolutely positioned at `right: 0`, vertically
     centered — a small chip (`background: #efefef`, `padding: 1px 5px`,
     `font-size: 18px`, `border-radius: 4px`).
  3. **Panel 1 — "How to download and register?"** — OPEN by default
     (`div#collapseOne.collapse.show`, `aria-expanded="true"`); body
     `div.accordion-body` (padding 20px, color `#888`) with placeholder copy
     ("Anim pariatur cliche reprehenderit…").
  4. **Panel 2 — "How to create your paypal account?"** — same structure,
     CLOSED by default (`aria-expanded="false"`, `.collapsed`), same body
     copy.
  5. **Panel 3 — "How to link your paypal and bank account?"** — same
     structure, CLOSED by default, same body copy.
  6. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with `data-parent="#accordion_1"`
  (only ONE panel open at a time), `aria-expanded` on the toggle, `.collapsed`
  class flips the chip glyph (icomoon `\e313` chevron-down → collapsed,
  `\e316` chevron-up → expanded with `color: #fff`, `background: #72c02c`;
  the active item's `.btn-link` ALSO gets `color: #72c02c`). Recreate with
  React state: one `openIndex` (default 0), buttons toggle, icon swaps
  between `ChevronDown`/`ChevronUp` (lucide-react), the open item's chip
  turns `#72c02c` with a white chevron and its label turns `#72c02c`,
  `aria-expanded` + `aria-controls`, panels are `role="region"` / labelled by
  their header button. FAQ copy is static presentational text (no backend).
- **KEY DIFFERENCES from Quorly (accordion-17) — do NOT copy Quorly tokens:**
  (a) page bg is `#fff` (Quorly: `#efefef`); (b) the toggle icon is a
  RIGHT-EDGE chevron CHIP (`:before` at `right: 0`, `background: #efefef`,
  `padding: 1px 5px`, `font-size: 18px`, `border-radius: 4px`, glyphs
  `\e313`/`\e316` = keyboard_arrow_down/up), NOT a left-side plus/minus pair
  (Quorly: `Plus`/`Minus` at `left: 15px`, no chip); (c) header button has
  `padding-left: 0px` (Quorly: 40px left gutter); (d) the active item has NO
  box-shadow (Quorly adds `0 1px 10px 0 rgba(0,0,0,0.1)`); (e) active chip is
  `#72c02c` bg with WHITE chevron + `#72c02c` label (Quorly: `#72c02c` minus
  icon + label only, no chip); (f) same three FAQ questions and same
  placeholder body copy as Quorly. The heading number differs: "Bootstrap
  Accordion #8" (Quorly: "#7"). Also differs from Tarragon (accordion-16):
  radius 0 (not 40px pill), page `#fff` (not `#efefef`).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#72c02c` — the ONLY accent: active panel label text
    (`.accordion-item.active .btn-link`) and the expanded icon chip
    (`.btn-link[aria-expanded="true"]:before` background with a WHITE
    chevron). A fresh leaf-green.
  - `#ffffff` — page background (`body { background-color: #fff }`) AND
    toggle header button background (`.btn-link { background: #fff }`).
  - `#f9f9f9` — accordion item background
    (`.accordion-item { background-color: #f9f9f9 }`).
  - `#efefef` — collapsed icon chip background
    (`.btn-link:before { background: #efefef }`).
  - `#999` — collapsed toggle label text (`.btn-link { color: #999 }`); the
    collapsed chevron inherits this.
  - `#888` — accordion body text (`.accordion-body { color: #888 }`).
  - `#b3b3b3` — generic paragraph color (`p { color: #b3b3b3 }`, weight 300).
  - dark gray/black — page heading "Bootstrap Accordion #8" (default heading
    color, 20px).
- **Fonts:** **Roboto** (body + all headings; `font-family: "Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", …`) — loaded via Google
  Fonts `<link>` in `index.html`. Body/paragraph weight 300; page heading
  `h2` 20px; accordion toggle inherits Roboto (Bootstrap `.btn-link` base).
- **Buttons:** the accordion header IS the button — `display: block`, `width:
100%`, `padding: 15px` (`padding-left: 0px` — icon lives at the RIGHT edge,
  no left gutter), `text-align: left`, color `#999`, `background: #fff`, NO
  border, no underline (`.3s all ease` transition). Active state: text
  `#72c02c`. No radius on the button itself (items are square, radius 0).
- **Radii:** icon chip `border-radius: 4px`; accordion item + button radius
  **0** (square, unlike Tarragon's 40px pills).
- **Shadows:** none on items — flat design. NOTE: NO active box-shadow
  (differs from Quorly's `0 1px 10px 0 rgba(0,0,0,0.1)` on purpose).
- **Spacing rhythm:** section padding `7rem 0` (`.content`); heading
  `my-5 text-center` (3rem top/bottom); items stacked with `margin-bottom:
10px`; toggle padding 15px all around (no left gutter); body padding 20px
  all around; icon chip absolutely positioned at `right: 0`, vertically
  centered, `padding: 1px 5px`, `font-size: 18px`.
- **Icons:** lucide-react `ChevronDown` (collapsed, `#999` on `#efefef`
  chip) / `ChevronUp` (expanded, `#fff` on `#72c02c` chip), ~18px, at the
  RIGHT of the toggle label (the original's icomoon icon font is NOT copied).
  Probe `ChevronDown`/`ChevronUp` exports with the typeof check before
  committing to the icon map (lucide-react has renamed/removed icons silently
  before).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading above the accordion on a
white page.

#### Scenario: Heading content

- **GIVEN** the Marjoram page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a centered heading (20px, dark gray, Roboto)
  as the only text above the accordion
- **AND** the page background SHALL be `#fff`
- **AND** the heading text SHALL be a simple page title in the same kind as
  the reference ("Bootstrap Accordion #8"; may be adapted to the new-name
  context per conventions, e.g. "Bootstrap Accordion — Marjoram")

### Requirement: Accordion square items

The system SHALL render exactly three accordion items as SQUARE rows (radius
0, `#f9f9f9` background, no borders/shadows), each with a white full-width
header button, a `#999` label, and a chevron chip on the right edge.

#### Scenario: Square rows and header buttons

- **GIVEN** the page is rendered
- **WHEN** the accordion is displayed
- **THEN** it SHALL show three stacked items with `margin-bottom: 10px`
- **AND** each item SHALL have a 0 border radius (square), `#f9f9f9`
  background, and NO border or shadow
- **AND** each header SHALL be a full-width left-aligned button with white
  background, 15px padding (NO left gutter), `#999` label text, and labels:
  **How to download and register?**, **How to create your paypal account?**,
  **How to link your paypal and bank account?**

#### Scenario: Toggle icon chips

- **GIVEN** the accordion is displayed
- **WHEN** a panel is collapsed
- **THEN** its header SHALL show a small chip at the right edge
  (`#efefef` background, ~4px radius, 1px 5px padding) containing a
  chevron-down icon in `#999`
- **AND** when the panel is expanded, the chip SHALL turn `#72c02c` and the
  icon SHALL swap to a chevron-up in `#fff`

### Requirement: Single-open accordion behavior

The system SHALL keep only one panel open at a time, with the first panel
open by default.

#### Scenario: Default state

- **GIVEN** the Marjoram page loads
- **THEN** the first panel ("How to download and register?") SHALL be
  expanded
- **AND** the other two panels SHALL be collapsed

#### Scenario: Switching panels

- **GIVEN** the first panel is open
- **WHEN** the user clicks a collapsed header (e.g. "How to create your
  paypal account?")
- **THEN** that panel SHALL expand and the previously open panel SHALL
  collapse (only one panel open at a time)
- **AND** clicking the open panel's header SHALL collapse it

### Requirement: Active state accent

The system SHALL color the open item's label green `#72c02c` and its icon
chip green with a white chevron (no shadow — differs from Quorly on purpose).

#### Scenario: Active item styling

- **GIVEN** a panel is expanded
- **WHEN** the accordion renders the active state
- **THEN** the open header's label text SHALL be `#72c02c`
- **AND** its icon chip SHALL be `#72c02c` with a white chevron-up
- **AND** the item SHALL NOT gain a shadow or border (the square keeps its
  `#f9f9f9` background and 0 radius)

### Requirement: Panel bodies

The system SHALL render each expanded panel with muted `#888` body text on
the item's `#f9f9f9` background.

#### Scenario: Body content

- **GIVEN** a panel is expanded
- **WHEN** the panel body is displayed
- **THEN** it SHALL show a block of muted placeholder copy (same _kind_ as
  the reference's "Anim pariatur cliche reprehenderit…" text; paraphrasing
  allowed)
- **AND** the body text SHALL be `#888` on the `#f9f9f9` item background
  with 20px padding

#### Scenario: Bodies share the same copy

- **GIVEN** any panel is expanded
- **WHEN** the user switches between panels
- **THEN** every panel SHALL show the same kind of placeholder body copy
  (per the reference, all three bodies are identical)

### Requirement: Footer

The system SHALL render a minimal footer with the Component Dock attribution
(absent in the original — repo convention).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a muted attribution line linking to
  `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Marjoram app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the heading, accordion, and footer in order
  inside a `main` landmark
- **AND** the document title SHALL be "Marjoram — Accordion Template" (or
  similar new-name title)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/marjoram`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/marjoram`)
- [ ] Section order matches the reference 1:1 (heading → accordion → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #72c02c, page #fff, item #f9f9f9, chip #efefef, header #fff, label #999, body #888, paragraph mute #b3b3b3; Roboto Google Font)
- [ ] Page: `#fff` bg, centered 20px heading with 3rem vertical margins, `7rem 0` section padding
- [ ] Items: THREE square rows, radius 0, `#f9f9f9` bg, margin-bottom 10px, NO border, NO shadow, overflow hidden
- [ ] Headers: full-width, text-left, white bg, 15px padding (NO left gutter), `#999` labels; questions match the reference (download/register, paypal account, link paypal+bank)
- [ ] Icons: lucide ChevronDown/ChevronUp in a right-edge chip (~4px radius, 1px 5px padding, 18px) — collapsed `#999` on `#efefef`, expanded `#fff` on `#72c02c` (probe exports first)
- [ ] Accordion: single-open (openIndex state, default 0), `aria-expanded`/`aria-controls`/`role="region"`, keyboard activation
- [ ] Active state: label `#72c02c` + green chip with white chevron, NO shadow (differs from Quorly on purpose)
- [ ] Bodies: `#888` text, 20px padding, same placeholder copy in all three
- [ ] Footer: Component Dock attribution link (repo convention; not in original)
- [ ] Document title set; no ColorLib strings anywhere in app code
