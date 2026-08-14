# Template: Tarragon (Bootstrap Accordion — Pill Rows)

## Purpose

Tarragon is a single-page accordion FAQ template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 16" free template (source:
https://colorlib.com/wp/template/accordion-16/), built under a DIFFERENT name
(**Tarragon** — an aromatic culinary herb, continuing the herb/spice naming
run of the accordion series: thyme, basil, oregano, anise, rosemary, dill…;
per the monorepo naming mandate — never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Accordion 16" is FORBIDDEN as the
> app name. **Tarragon** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

The original is a minimal, clean FAQ accordion with a distinctive PILL shape:
a light-gray `#efefef` page with a centered "Bootstrap Accordion #6" heading
and a three-panel accordion — **How to download and register?** (open by
default), **How to create your paypal account?** (closed), and **How to link
your paypal and bank account?** (closed). Each panel holds a block of muted
placeholder copy. The items are highly rounded pills (`border-radius: 40px`,
`#f9f9f9` background, no borders, no shadows) with white header bars; the
toggle icon is a **plus that swaps to a minus** when open, and the ONLY color
accent on the page is the green `#72c02c` used for the open item's label and
minus icon. Tarragon recreates that structure 1:1 with matching layout,
tokens, typography, and content kinds (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 16". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 654). Free accordion/FAQ component
  template. The slug appears exactly once (no dup rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-16/` returns 404; the
  REAL preview is `https://preview.colorlib.com/theme/bac/accordion-16/`
  (HTTP 200, 19.4KB HTML, `<title>Accordion #6</title>`; the `/bac/` subpath
  = the "bootstrap accordions" demo index — same pattern as accordion-13 →
  Anise, accordion-14 → Rosemary, accordion-15 → Dill). Stylesheets:
  `css/style.css` (2.1KB — bootstrap + custom; token source),
  `css/bootstrap.min.css`, `css/owl.carousel.min.css` (unused on this page),
  `fonts/icomoon/style.css` (plus/minus glyphs). Structure, copy, and tokens
  below are from the live DOM + `style.css`. Screenshot
  (`accordion-16.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: light-gray page, centered "Bootstrap Accordion #6" heading,
  THREE pill-shaped accordion rows — first expanded with a green minus icon,
  the other two collapsed with plus icons, white headers, no navbar, no
  footer, no imagery.
- **Visual design (screenshot + live DOM):** extremely clean, minimal,
  typography-driven. Light-gray `#efefef` page, dark-gray heading, three
  PILL-shaped items (`#f9f9f9` on `#efefef`, radius 40px) with WHITE header
  bars and `#999` labels. The open item's label + toggle icon turn green
  `#72c02c`. Body copy is muted gray. No images anywhere — pure text + one
  accordion. Sans-serif (Roboto) throughout, light weights (300).
- **Section order (1:1 from live DOM):**
  1. **Page heading** — `div.content` (padding `7rem 0`) → `div.container` →
     centered `h2.my-5.text-center` "Bootstrap Accordion #6" (20px Roboto,
     dark gray/black, `my-5` = 3rem vertical margins).
  2. **Accordion** — `div.container` → `div.custom-accordion#accordion_1`:
     three `div.accordion-item` blocks stacked with `margin-bottom: 10px`
     (`background-color: #f9f9f9`, `border-radius: 40px`, `overflow: hidden`;
     NO border, NO shadow). Each item: `h2.mb-0` → full-width
     `button.btn.btn-link` (`display: block`, `width: 100%`, `padding: 15px`
     with `padding-left: 40px`, `text-align: left`, `color: #999`,
     `background: #fff`, `border: none`, `border-radius: 0`, `.3s all ease`
     transition) with a plus icon (`:before`, icomoon `\f067` = `icon-plus`)
     absolutely positioned at `left: 15px`, vertically centered.
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
  class flips the icon (icomoon `\f067` plus → collapsed, `\f068` minus →
  expanded with `color: #72c02c`; the active item's `.btn-link` ALSO gets
  `color: #72c02c`). Recreate with React state: one `openIndex` (default 0),
  buttons toggle, icon swaps between `Plus`/`Minus` (lucide-react), the open
  item's minus icon + label turn green `#72c02c`, `aria-expanded` +
  `aria-controls`, panels are `role="region"` / labelled by their header
  button. FAQ copy is static presentational text (no backend).
- **KEY DIFFERENCES from Anise (accordion-13) — do NOT copy Anise tokens:**
  (a) page bg is `#efefef` (Anise: `#fff`); (b) items are PILL-SHAPED —
  `border-radius: 40px`, `background-color: #f9f9f9`, and have NO `1px solid
#efefef` border (Anise: 4px radius, white bg, 1px border); (c) the toggle
  icon is a PLUS/MINUS pair (`\f067`/`\f068` = `icon-plus`/`icon-minus`),
  NOT chevrons (`\e313`/`\e316` = keyboard_arrow_down/up) — and it sits in
  the SAME `#999` color as the label when collapsed (Anise's collapsed
  chevron has no explicit color either, but the active-state treatment
  differs); (d) active state colors label + minus icon `#72c02c` but there
  is NO green BORDER on the active item (Anise adds `border: 1px solid
#72c02c`); (e) header button bg is `#fff` on the `#f9f9f9` pill (Anise:
  `#fff` on `#fff` — indistinguishable there); (f) same three FAQ questions
  and same placeholder body copy as Anise. The heading number differs:
  "Bootstrap Accordion #6" (Anise: "#3").

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand colors:**
  - `#72c02c` — the ONLY accent: active panel label text and the expanded
    minus icon (`.accordion-item.active .btn-link`,
    `.btn-link[aria-expanded="true"]:before`). A fresh leaf-green.
  - `#efefef` — page background (`body { background-color: #efefef }`).
  - `#f9f9f9` — accordion item (pill) background
    (`.accordion-item { background-color: #f9f9f9 }`).
  - `#ffffff` — toggle header button background (`.btn-link { background:
#fff }`).
  - `#999` — collapsed toggle label text (`.btn-link { color: #999 }`); the
    collapsed plus icon inherits this.
  - `#888` — accordion body text (`.accordion-body { color: #888 }`).
  - `#b3b3b3` — generic paragraph color (`p { color: #b3b3b3 }`, weight 300).
  - dark gray/black — page heading "Bootstrap Accordion #6" (default heading
    color, 20px).
- **Fonts:** **Roboto** (body + all headings; `font-family: "Roboto",
-apple-system, BlinkMacSystemFont, "Segoe UI", …`) — loaded via Google
  Fonts `<link>` in `index.html`. Body/paragraph weight 300; page heading
  `h2` 20px; accordion toggle inherits Roboto (Bootstrap `.btn-link` base).
- **Buttons:** the accordion header IS the button — `display: block`, `width:
100%`, `padding: 15px` (with `padding-left: 40px` for the icon gutter),
  `text-align: left`, color `#999`, `background: #fff`, NO border, no
  underline (`.3s all ease` transition). Active state: text `#72c02c`. No
  radius on the button itself (the 40px radius lives on the `.accordion-item`
  pill, clipped via `overflow: hidden`).
- **Radii:** accordion item `border-radius: 40px` (PILL); button radius 0.
- **Shadows:** none (flat design — no card shadow, no drop shadows).
- **Spacing rhythm:** section padding `7rem 0` (`.content`); heading
  `my-5 text-center` (3rem top/bottom); items stacked with `margin-bottom:
10px`; toggle padding 15px (left 40px for icon); body padding 20px all
  around; icon absolutely positioned at `left: 15px`, vertically centered.
- **Icons:** lucide-react `Plus` (collapsed, `#999`) / `Minus` (expanded,
  `#72c02c`), ~16–20px, at the LEFT of the toggle label (the original's
  icomoon icon font is NOT copied). Probe `Plus`/`Minus` exports with the
  typeof check before committing to the icon map (lucide-react has renamed/
  removed icons silently before).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading above the accordion on a
light-gray page.

#### Scenario: Heading content

- **GIVEN** the Tarragon page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a centered heading (20px, dark gray, Roboto)
  as the only text above the accordion
- **AND** the page background SHALL be `#efefef`
- **AND** the heading text SHALL be a simple page title in the same kind as
  the reference ("Bootstrap Accordion #6"; may be adapted to the new-name
  context per conventions, e.g. "Bootstrap Accordion — Tarragon")

### Requirement: Accordion pill items

The system SHALL render exactly three accordion items as PILL-shaped rows
(40px radius, `#f9f9f9` background, no borders/shadows), each with a white
full-width header button, a `#999` label, and a plus icon on the left.

#### Scenario: Pill rows and header buttons

- **GIVEN** the page is rendered
- **WHEN** the accordion is displayed
- **THEN** it SHALL show three stacked items with `margin-bottom: 10px`
- **AND** each item SHALL have a 40px border radius (pill), `#f9f9f9`
  background, and NO border or shadow
- **AND** each header SHALL be a full-width left-aligned button with white
  background, 15px padding (40px left gutter for the icon), `#999` label
  text, and labels: **How to download and register?**, **How to create your
  paypal account?**, **How to link your paypal and bank account?**

#### Scenario: Toggle icons

- **GIVEN** the accordion is displayed
- **WHEN** a panel is collapsed
- **THEN** its header SHALL show a plus icon (`#999`) at the left of the
  label
- **AND** when the panel is expanded, the icon SHALL swap to a minus icon in
  green `#72c02c`

### Requirement: Single-open accordion behavior

The system SHALL keep only one panel open at a time, with the first panel
open by default.

#### Scenario: Default state

- **GIVEN** the Tarragon page loads
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

The system SHALL color the open item's label and minus icon green `#72c02c`
(no border change — unlike Anise).

#### Scenario: Active item styling

- **GIVEN** a panel is expanded
- **WHEN** the accordion renders the active state
- **THEN** the open header's label text SHALL be `#72c02c`
- **AND** its minus icon SHALL be `#72c02c`
- **AND** the item SHALL NOT gain a border (the pill keeps its `#f9f9f9`
  background and 40px radius)

### Requirement: Panel bodies

The system SHALL render each expanded panel with muted `#888` body text on
the pill's `#f9f9f9` background.

#### Scenario: Body content

- **GIVEN** a panel is expanded
- **WHEN** the panel body is displayed
- **THEN** it SHALL show a block of muted placeholder copy (same _kind_ as
  the reference's "Anim pariatur cliche reprehenderit…" text; paraphrasing
  allowed)
- **AND** the body text SHALL be `#888` on the `#f9f9f9` pill background
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

- **GIVEN** the Tarragon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the heading, accordion, and footer in order
  inside a `main` landmark
- **AND** the document title SHALL be "Tarragon — Accordion Template" (or
  similar new-name title)

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/tarragon`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/tarragon`)
- [ ] Section order matches the reference 1:1 (heading → accordion → footer)
- [ ] Design tokens from the reference used in `@theme` (accent #72c02c, page #efefef, pill #f9f9f9, header #fff, label #999, body #888, paragraph mute #b3b3b3; Roboto Google Font)
- [ ] Page: `#efefef` bg, centered 20px heading with 3rem vertical margins, `7rem 0` section padding
- [ ] Items: THREE pills, radius 40px, `#f9f9f9` bg, margin-bottom 10px, NO border, NO shadow, overflow hidden
- [ ] Headers: full-width, text-left, white bg, 15px padding + 40px left gutter, `#999` labels; questions match the reference (download/register, paypal account, link paypal+bank)
- [ ] Icons: lucide Plus (collapsed, #999) / Minus (expanded, #72c02c) at left, ~16–20px (probe exports first)
- [ ] Accordion: single-open (openIndex state, default 0), `aria-expanded`/`aria-controls`/`role="region"`, keyboard activation
- [ ] Active state: label + minus icon `#72c02c`, NO green border (differs from Anise on purpose)
- [ ] Bodies: `#888` text, 20px padding, same placeholder copy in all three
- [ ] Footer: Component Dock attribution link (repo convention; not in original)
- [ ] Document title set; no ColorLib strings anywhere in app code
