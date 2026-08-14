# Template: Ruffle (Bootstrap Accordion / FAQ List)

## Purpose

Ruffle is a single-page accordion/FAQ-list template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 19" free template (source:
https://colorlib.com/wp/template/accordion-19/), built under a DIFFERENT name
(**Ruffle** — a gathered/pleated strip of fabric, evoking the accordion's
folded panels; per the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a flat, minimal FAQ accordion: a white page with a centered
"Bootstrap Accordion #9" heading and a single column of three Q&A items
("How to download and register?" open by default; "How to create your paypal
account?" and "How to link your paypal and bank account?" closed), each row a
full-width text-left toggle with a chevron on the right (down = closed, up =
open) and a lorem-ipsum answer body. The ONLY accent color on the page is a
green `#72c02c` applied to the open item's title and chevron. Ruffle recreates
that structure 1:1 with matching layout, tokens, typography, and content
kinds (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Accordion 19" is FORBIDDEN as the
> app name. **Ruffle** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> NUMBERING QUIRK: the live preview and the official screenshot BOTH render
> the heading as **"Bootstrap Accordion #9"** (not #19) — the ColorLib source
> numbers its own preview inconsistently with the TEMPLATES.md row name
> ("Accordion 19"). Fidelity mandate = render exactly what the reference
> renders: **"Bootstrap Accordion #9"**. Do NOT "fix" it to #19.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 19". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 657). Free FAQ accordion component
  template. The `accordion-19` slug appears exactly once in TEMPLATES.md (no
  duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-19/` returns 404; the
  ColorLib template page reveals the REAL preview URL:
  `https://preview.colorlib.com/theme/bac/accordion-19/` (HTTP 200, 19.4KB
  HTML). Stylesheets: `css/style.css` (2.2KB — custom accordion tokens),
  `css/bootstrap.min.css` (160.4KB), `fonts/icomoon/style.css` (chevron
  glyphs only), `css/owl.carousel.min.css` (unused by this page). JS:
  `js/main.js` toggles an `.active` class on show/hide of a panel. Structure,
  copy, and tokens below are from the live DOM + `style.css` + bootstrap
  defaults. Screenshot (`accordion-19.jpg`, 1200×972, browser-verified
  2026-08-14) confirms the aesthetic: white page, centered dark heading,
  three flat accordion rows separated by faint hairlines, first item open
  with green title + green up-chevron, the other two gray with down-chevrons,
  no shadows anywhere.
- **Visual design (screenshot + live DOM):** extremely clean, flat,
  typography-driven. White page (`#fff`), dark charcoal heading/text
  (`#212529` Bootstrap default), closed titles light gray (`#999`), open
  title + open chevron in the single accent green `#72c02c`, faint row
  separators (`#f9f9f9`), answer text light gray (`#b3b3b3`, weight 300).
  No images, no shadows, no cards — pure text rows on white. Sans-serif
  (Roboto) throughout.
- **Section order (1:1 from live DOM):**
  1. **Page wrapper** — `div.content` (padding `7rem 0`; white page bg).
  2. **Heading** — `div.container` → `h2.my-5.text-center` "Bootstrap
     Accordion #9" (20px, `#212529`, `my-5` = 3rem top/bottom margin,
     centered).
  3. **Accordion** — second `div.container` → `div#accordion_1.custom-accordion`
     (no card wrapper — items sit directly on the page, full container
     width). Three `div.accordion-item`s (margin-bottom 0, radius 0, overflow
     hidden), each:
     - `h2.mb-0` → `button.btn.btn-link` — full width, `padding: 15px` /
       `padding-left: 0`, text-left, color `#999`, bg `#fff`, `border: none`,
       `border-radius: 0`, `border-bottom: 1px solid #f9f9f9` (the row
       separator), `position: relative`; chevron via `::before` (icomoon
       glyph, 18px, absolutely positioned right: 0, vertically centered).
     - Panel body `div.collapse` → `div.accordion-body` (padding
       `0 0 20px 0`, color `#888`) containing one `p` of lorem ipsum
       (color `#b3b3b3`, weight 300).
  4. **Accordion items (exact copy/titles):**
     1. "How to download and register?" — **open by default**
        (`collapse show`, `aria-expanded="true"`, `.active` on the item →
        title `#72c02c`, up-chevron `#72c02c`, border-bottom transparent).
     2. "How to create your paypal account?" — closed (`collapsed`,
        `aria-expanded="false"`, title `#999`, down-chevron).
     3. "How to link your paypal and bank account?" — closed (same).
        Answer bodies: the original's long lorem-ipsum paragraphs ("Anim pariatur
        cliche reprehenderit…") — paraphrase freely, keep the same content kind
        (a few sentences of muted placeholder text per answer).
  5. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with
  `data-parent="#accordion_1"` (opening a panel closes any other open one;
  clicking the OPEN panel's header collapses it, leaving NONE open — state
  can be -1/empty) and `js/main.js` toggling `.active` on the closest
  `.accordion-item` on `show.bs.collapse` / `hidden.bs.collapse` (drives the
  green title + up-chevron). Recreate with React state: `openIndex` (default
  0, `null` allowed when all collapsed), buttons toggle, chevron swaps
  between `ChevronDown`/`ChevronUp` (lucide-react), `aria-expanded` +
  `aria-controls` on buttons, panel bodies `role="region"` labelled by their
  header button. Answer bodies are static text (no backend).

## Design tokens (verified from live stylesheet `css/style.css` + Bootstrap)

- **Brand colors:**
  - `#ffffff` — page background (`body { background-color: #fff }`).
  - `#212529` — body/heading default text color (Bootstrap `body` default;
    the centered h2 inherits it).
  - `#72c02c` — the ONLY accent: open item's title AND its up-chevron
    (`[aria-expanded="true"]:before` and `.accordion-item.active .btn-link`).
  - `#999999` — closed accordion title color (`.custom-accordion .btn-link`).
  - `#f9f9f9` — row separator hairline (`border-bottom: 1px solid #f9f9f9`
    on every toggle button; the active item's becomes transparent).
  - `#888888` — `.accordion-body` base color (div-level).
  - `#b3b3b3` — answer paragraph text (`p { color: #b3b3b3; font-weight: 300 }`).
  - `#dee2e6` — 2px top border on `body` (appended rule inside
    `bootstrap.min.css`; renders as a thin light-gray bar across the very top
    of the viewport — optional detail; skip if it looks like preview chrome,
    or keep as a subtle 2px top border to be faithful).
- **Fonts:** **Roboto** (body + headings; `font-family: "Roboto",
-apple-system, …, sans-serif`) — loaded via Google Fonts `<link>` in
  `index.html`. Body 16px (Bootstrap `1rem`) / 1.5 / weight 400; headings
  (`h2`) 20px (custom override); answer paragraphs weight 300; chevron
  glyphs 18px (replaced by lucide icons, see below). The preview HTML also
  preloads Poppins and Source Serif Pro @font-face kits, but `style.css`
  never uses them — do NOT load them.
- **Buttons:** the accordion header IS the button — full width, `#fff` bg,
  text-left, padding `15px` (left 0), `border-radius: 0`, no border except
  the `#f9f9f9` bottom hairline; closed color `#999`, open color `#72c02c`;
  no hover color change (only the 0.3s all-ease transition from Bootstrap).
- **Radii:** 0 everywhere (flat design — items, buttons, bodies all
  `border-radius: 0`). No pills, no rounded cards.
- **Shadows:** none. Flat design.
- **Spacing rhythm:** page wrapper padding `7rem 0`; heading `my-5`
  (3rem top + bottom); toggle button padding `15px` (15px right/bottom too,
  left 0); answer body padding `0 0 20px 0`; items margin-bottom 0 (rows
  stack with only the hairline between them).
- **Chevron layout:** absolutely positioned at `right: 0`, `top: 50%`,
  `translateY(-50%)`, 18px — right-aligned vertically-centered indicator;
  title text does not reserve space for it.
- **Icons:** lucide-react `ChevronDown` (closed, `#999`) / `ChevronUp`
  (open, `#72c02c`), 18px — the original's icomoon icon font is NOT copied
  (glyphs `\e313` keyboard_arrow_down / `\e316` keyboard_arrow_up).
- **No images** in this template — pure typography/text rows, so no picsum
  seeds are needed (no imagery to be faithful to).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Bootstrap Accordion #9" at
the top of the page, styled 20px `#212529` Roboto with `my-5` spacing (3rem
top/bottom), on the white page background.

#### Scenario: Heading layout

- **GIVEN** the Ruffle page is rendered
- **WHEN** the page loads
- **THEN** an `h2` SHALL show the text "Bootstrap Accordion #9" centered at
  the top of the white page
- **AND** the heading SHALL be 20px, `#212529`, with 3rem top and bottom
  margins (my-5 equivalent), matching the reference
- **AND** the heading SHALL read "Bootstrap Accordion #9" exactly (the
  source's own numbering — NOT "Accordion 19", see Numbering Quirk above)

### Requirement: Accordion structure and default state

The system SHALL render an accordion with exactly three items, titled (1)
"How to download and register?" — open by default, (2) "How to create your
paypal account?" — closed, (3) "How to link your paypal and bank account?" —
closed. Items SHALL sit directly on the white page (no card wrapper), full
container width, separated by `#f9f9f9` hairlines.

#### Scenario: Three items with default states

- **GIVEN** the Ruffle page is rendered
- **WHEN** the page loads
- **THEN** item 1 SHALL be titled "How to download and register?" and be OPEN
- **AND** item 2 SHALL be titled "How to create your paypal account?" and be
  CLOSED
- **AND** item 3 SHALL be titled "How to link your paypal and bank account?"
  and be CLOSED
- **AND** the items SHALL be stacked vertically at full container width with
  no card wrapper and no shadows (flat, per the reference)

#### Scenario: Open-item visual state

- **GIVEN** item 1 is open
- **WHEN** the page loads
- **THEN** item 1's title SHALL be `#72c02c` and its chevron SHALL be an
  up-chevron (`ChevronUp`) in `#72c02c`
- **AND** item 1's answer body SHALL be visible below the title
- **AND** closed items' titles SHALL be `#999` with a down-chevron
  (`ChevronDown`) in `#999`

### Requirement: Toggle interaction

Each item header SHALL be a full-width text-left button that toggles its
panel. Opening a panel SHALL close any other open panel (per the reference's
`data-parent` behavior); clicking the currently-open panel's header SHALL
collapse it, leaving NO panel open. `aria-expanded` / `aria-controls` SHALL
be correct, and panel bodies SHALL be `role="region"` labelled by their
header button.

#### Scenario: Opening a closed item

- **GIVEN** item 1 is open and items 2 and 3 are closed
- **WHEN** the user activates the "How to create your paypal account?" toggle
- **THEN** item 2 SHALL open and item 1 SHALL close (only one open at a time)
- **AND** item 2's title and chevron SHALL turn `#72c02c` and item 1's SHALL
  revert to `#999` with down-chevrons

#### Scenario: Collapsing the open item

- **GIVEN** item 1 is the only open item
- **WHEN** the user activates the "How to download and register?" toggle
- **THEN** item 1 SHALL collapse and NO item SHALL be open (state = none)
- **AND** item 1's title and chevron SHALL revert to the closed `#999` +
  down-chevron style

#### Scenario: Keyboard accessibility

- **GIVEN** the Ruffle page is rendered
- **WHEN** the user tabs to an item header button and presses Enter/Space
- **THEN** the panel SHALL toggle the same way as a click
- **AND** each button SHALL expose `aria-expanded` and `aria-controls`
- **AND** the open panel body SHALL be exposed to assistive tech
  (`role="region"` with `aria-labelledby` pointing at its header button)

### Requirement: Answer bodies

Each panel SHALL render a short muted placeholder paragraph (paraphrased
lorem-ipsum-style copy, same content kind as the original — a few sentences
of generic placeholder text), styled `#b3b3b3`, weight 300, padding
`0 0 20px 0`.

#### Scenario: Answer content per item

- **GIVEN** an item is open
- **WHEN** the user views its body
- **THEN** a paragraph of muted placeholder copy SHALL be visible under the
  title
- **AND** the paragraph SHALL be `#b3b3b3`, weight 300, with 20px bottom
  padding (matching the reference's `.accordion-body`)

### Requirement: Responsive behavior

The system SHALL keep the single-column layout at all viewport widths (the
reference has no special breakpoints — the accordion is full container width
on every screen).

#### Scenario: Mobile layout

- **GIVEN** the Ruffle page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the container width with the same
  hairline-separated rows and 15px button padding
- **AND** the page wrapper padding SHALL scale down sensibly (the reference's
  `7rem` is large; reduce for small screens per repo conventions)
- **AND** the heading SHALL remain centered and readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Ruffle page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the flat minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-ruffle`
- [ ] `scripts/verify-app.sh ruffle` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #9" (20px, my-5) → accordion of 3 items → minimal Component
      Dock footer; no card wrapper, no shadows (flat)
- [ ] Default states: item 1 ("How to download and register?") open with
      green `#72c02c` title + up-chevron; items 2/3 closed, `#999` titles +
      down-chevrons; `#f9f9f9` hairline separators
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#fff` page,
      `#212529` heading/text, `#72c02c` accent, `#999` closed titles,
      `#f9f9f9` hairlines, `#b3b3b3` answer text; radius 0 everywhere; no
      shadows
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html` (NOT Poppins /
      Source Serif Pro — those are preloaded but unused in the reference);
      title "Ruffle — Bootstrap Accordion"
- [ ] No images needed (pure typography template — faithful); chevrons from
      lucide-react (`ChevronDown`/`ChevronUp`, 18px, right-aligned
      vertically-centered) — no copied icon fonts
- [ ] Only one panel open at a time; clicking the open panel collapses it
      (none open); `aria-expanded`/`aria-controls` + `role="region"`;
      keyboard operable
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 19" row, line 657 —
      Bootstrap Accordions category)
