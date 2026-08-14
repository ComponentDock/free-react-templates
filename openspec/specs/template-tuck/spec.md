# Template: Tuck (Bootstrap Accordion / FAQ List)

## Purpose

Tuck is a single-page accordion/FAQ-list template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Accordion 20" free template (source:
https://colorlib.com/wp/template/accordion-20/), built under a DIFFERENT name
(**Tuck** — a fold sewn into fabric, evoking the accordion's folded panels;
per the monorepo naming mandate — never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a flat, minimal FAQ accordion: a pale-blue page
(`#dcf1ff`) with a centered "Bootstrap Accordion #10" heading and a single
white card (soft drop shadow) holding three full-width Q&A rows ("How to
download and register?" open by default; "How to create your paypal
account?" and "How to link your paypal and bank account?" closed). Closed
rows are light grey (`#f1f4f8`) headers with black text; the OPEN row's
header flips to a terracotta-orange `#e76739` fill with white text. There
are NO chevrons and NO row separators — the open/closed state is signalled
purely by the header color fill. Tuck recreates that structure 1:1 with
matching layout, tokens, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Accordion 20" is FORBIDDEN as the
> app name. **Tuck** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below.

> NUMBERING QUIRK: the live preview and the official screenshot BOTH render
> the heading as **"Bootstrap Accordion #10"** (not #20) — the ColorLib source
> numbers its own preview inconsistently with the TEMPLATES.md row name
> ("Accordion 20"; same -10 offset as sibling "Accordion 19" → "#9").
> Fidelity mandate = render exactly what the reference renders:
> **"Bootstrap Accordion #10"**. Do NOT "fix" it to #20.

## Design reference (replication findings)

- **Original:** ColorLib "Accordion 20". Listed in TEMPLATES.md under
  **Bootstrap Accordions (20)** (line 658). Free FAQ accordion component
  template. The `accordion-20` slug appears exactly once in TEMPLATES.md (no
  duplicate rows to mark).
- **Live preview DOM — REACHABLE (verified 2026-08-14):** the default preview
  URL `https://preview.colorlib.com/theme/accordion-20/` returns 404; the
  REAL preview URL is `https://preview.colorlib.com/theme/bac/accordion-20/`
  (HTTP 200, 19.5KB HTML; same `/bac/` subpath as the sibling
  `accordion-19`). Stylesheets: `css/style.css` (1.4KB — the accordion
  tokens), `css/bootstrap.min.css` (160.4KB), `fonts/icomoon/style.css`
  (loaded but UNUSED — no glyph elements in the page), `css/owl.carousel.min.css`
  (unused by this page). JS: `js/main.js` toggles an `.active` class on the
  closest `.accordion-item` on panel show/hide. Structure, copy, and tokens
  below are from the live DOM + `style.css` + bootstrap defaults. Screenshot
  (`accordion-20.jpg`, 1200×972, browser-verified 2026-08-14) confirms the
  aesthetic: pale-blue page, centered dark heading, white shadowed card with
  three flush header rows — first row terracotta-orange with white text and
  an expanded white answer panel beneath, other two rows light grey with
  black text, no chevrons anywhere, no footer.
- **Visual design (screenshot + live DOM):** extremely clean, flat,
  color-block-driven. Pale-blue page (`#dcf1ff`), dark charcoal heading/text
  (`#212529` Bootstrap default), white card (`#fff`) with a soft drop shadow
  (`0 5px 30px 0 rgba(0,0,0,0.3)`), closed rows light grey-blue
  (`#f1f4f8`) with black (`#000`) text, the open row's header terracotta
  orange (`#e76739`) with white (`#fff`) text, answer text light gray
  (`#b3b3b3`, weight 300; body base `#888`). No images, no icons, no
  borders, no radius — pure filled bands on a white card. Sans-serif
  (Roboto) throughout.
- **Section order (1:1 from live DOM):**
  1. **Page wrapper** — `div.content` (padding `7rem 0`; pale-blue page bg
     `#dcf1ff`).
  2. **Heading** — `div.container` → `h2.my-5.text-center` "Bootstrap
     Accordion #10" (20px, `#212529`, `my-5` = 3rem top/bottom margin,
     centered).
  3. **Accordion card** — second `div.container` → `div#accordion_1.custom-accordion`
     (white `#fff`, `border-radius: 0`, `box-shadow: 0 5px 30px 0
rgba(0,0,0,0.3)`). Three `div.accordion-item`s (margin-bottom 0,
     radius 0, overflow hidden, bg `#fff`), flush against each other (NO
     separators), each:
     - `h2.mb-0` → `button.btn.btn-link` — display block, width 100%,
       `padding: 15px` / `padding-left: 20px`, text-left, color `#000`, bg
       `#f1f4f8`, `border: none`, `border-radius: 0`, `position: relative`,
       `transition: .3s all ease`. Closed buttons also carry Bootstrap's
       `collapsed` class. NO chevron pseudo-element (unlike the
       `accordion-19` sibling — this design signals state by fill color
       only).
     - Panel body `div.collapse` → `div.accordion-body` (padding
       `20px 20px 20px 20px`, color `#888`) containing one `p` of lorem
       ipsum (color `#b3b3b3`, weight 300).
  4. **Accordion items (exact copy/titles):**
     1. "How to download and register?" — **open by default**
        (`collapse show`, `aria-expanded="true"`, `.active` on the item →
        header bg `#e76739`, text `#fff`).
     2. "How to create your paypal account?" — closed (`collapsed`,
        `aria-expanded="false"`, header bg `#f1f4f8`, text `#000`).
     3. "How to link your paypal and bank account?" — closed (same).
        Answer bodies: the original's long lorem-ipsum paragraphs ("Anim
        pariatur cliche reprehenderit…") — paraphrase freely, keep the same
        content kind (a few sentences of muted placeholder text per answer).
  5. **Footer** — the original has NO footer; per monorepo convention add a
     minimal attribution footer linking `https://www.componentdock.com/`
     ("Component Dock") so every shipped template carries the required link.
- **JS behaviors (original):** Bootstrap collapse with
  `data-parent="#accordion_1"` (opening a panel closes any other open one;
  clicking the OPEN panel's header collapses it, leaving NONE open — state
  can be -1/empty) and `js/main.js` toggling `.active` on the closest
  `.accordion-item` on `show.bs.collapse` / `hidden.bs.collapse` (drives the
  orange header fill). Recreate with React state: `openIndex` (default 0,
  `null` allowed when all collapsed), buttons toggle, `aria-expanded` +
  `aria-controls`, body `role="region"` + `aria-labelledby`. NO chevron
  swap is needed — the color fill IS the state signal (lucide not required
  for this template).
- **Design tokens (from `style.css` + bootstrap defaults):**

  | Token               | Value                          | Usage                                                 |
  | ------------------- | ------------------------------ | ----------------------------------------------------- |
  | Page background     | `#dcf1ff`                      | `body` — pale blue page                               |
  | Heading text        | `#212529`                      | `h2` "Bootstrap Accordion #10" (20px, centered, my-5) |
  | Card background     | `#ffffff`                      | `.custom-accordion` / `.accordion-item`               |
  | Card shadow         | `0 5px 30px 0 rgba(0,0,0,0.3)` | `.custom-accordion` drop shadow                       |
  | Closed row bg       | `#f1f4f8`                      | `.btn-link` (light grey-blue)                         |
  | Closed row text     | `#000000`                      | `.btn-link` color                                     |
  | Active row bg       | `#e76739`                      | `.active .btn-link` (terracotta orange)               |
  | Active row text     | `#ffffff`                      | `.active .btn-link` color                             |
  | Body base text      | `#888888`                      | `.accordion-body`                                     |
  | Body paragraph text | `#b3b3b3`                      | `p` in body (font-weight 300)                         |
  | Font                | Roboto                         | body 16px/1.5/400; h2 20px (Google Fonts `<link>`)    |
  | Radius              | `0` everywhere                 | no rounded corners                                    |
  | Button padding      | `15px` (`padding-left: 20px`)  | `.btn-link`                                           |
  | Body padding        | `20px 20px 20px 20px`          | `.accordion-body`                                     |
  | Wrapper padding     | `7rem 0`                       | `div.content`                                         |
  | Transition          | `.3s all ease`                 | `.btn-link` hover/fill                                |

- **Fonts:** Roboto is the only family actually used by the reference
  (`style.css` + bootstrap). The preview HTML also preloads Poppins and
  Source Serif Pro kits but neither appears in any rule — do NOT load them.

## Requirements

### Requirement: Page structure

The system SHALL render the Tuck page as a single-viewport-flow document
with, in order: a pale-blue page wrapper, a centered heading, the accordion
card, and a minimal footer.

#### Scenario: Default render

- **GIVEN** the Tuck page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be pale blue `#dcf1ff`
- **AND** a centered heading SHALL read "Bootstrap Accordion #10" (20px,
  `#212529`, 3rem top/bottom margin)
- **AND** a white accordion card SHALL sit below the heading, carrying a
  soft drop shadow (`0 5px 30px 0 rgba(0,0,0,0.3)`) and square corners
- **AND** the accordion SHALL contain exactly three Q&A rows
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

#### Scenario: Card styling

- **GIVEN** the accordion card is displayed
- **WHEN** the user inspects it
- **THEN** the card SHALL be white with radius 0
- **AND** the three rows SHALL sit flush against each other with NO
  separators, borders, or gaps
- **AND** NO chevron/arrow icon SHALL appear on any row header (the state
  signal is the fill color only — do not add chevrons, unlike sibling
  Ruffle)

### Requirement: Accordion behavior

The system SHALL implement single-open accordion behavior with the first
item open by default, and SHALL allow all items to be collapsed.

#### Scenario: First item open by default

- **GIVEN** the Tuck page is rendered
- **WHEN** the accordion is displayed
- **THEN** the first item ("How to download and register?") SHALL be open
- **AND** its header SHALL have background `#e76739` with white text
- **AND** its answer body SHALL be visible
- **AND** the other two items SHALL be closed with `#f1f4f8` backgrounds
  and black text

#### Scenario: Opening a closed item

- **GIVEN** a closed accordion item (e.g. "How to create your paypal
  account?")
- **WHEN** the user activates its header button
- **THEN** the item SHALL open and display its answer body
- **AND** its header SHALL flip to background `#e76739` with white text
- **AND** any previously open item SHALL close and return to `#f1f4f8`
  with black text (only one item open at a time)

#### Scenario: Collapsing the open item

- **GIVEN** an open accordion item
- **WHEN** the user activates its header button again
- **THEN** the item SHALL collapse and NO item SHALL remain open (state
  `null` allowed — matches the reference's `data-parent` collapse)
- **AND** the header SHALL return to `#f1f4f8` with black text

#### Scenario: Accessibility attributes

- **GIVEN** the accordion is rendered
- **WHEN** the user inspects it with assistive technology
- **THEN** each header SHALL be a `<button>` with `aria-expanded` and
  `aria-controls` pointing at its panel
- **AND** each panel SHALL be `role="region"` with `aria-labelledby`
  referencing its header
- **AND** the accordion SHALL be fully keyboard-operable (headers reachable
  via Tab, toggle via Enter/Space)

### Requirement: Answer body styling

The system SHALL render answer bodies with the reference's muted styling.

#### Scenario: Answer body appearance

- **GIVEN** an open accordion item
- **WHEN** the answer body is displayed
- **THEN** the body SHALL have padding `20px` on all sides and base text
  color `#888`
- **AND** the paragraph text SHALL be `#b3b3b3` at font-weight 300

### Requirement: Responsive behavior

The system SHALL keep the single-column layout at all viewport widths (the
reference has no special breakpoints — the accordion card is full container
width on every screen).

#### Scenario: Mobile layout

- **GIVEN** the Tuck page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the accordion SHALL fill the container width with the same
  15px-button-padding rows and the card shadow intact
- **AND** the page wrapper padding SHALL scale down sensibly (the
  reference's `7rem` is large; reduce for small screens per repo
  conventions)
- **AND** the heading SHALL remain centered and readable

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Tuck page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the flat minimal reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-tuck`
- [ ] `scripts/verify-app.sh tuck` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): centered heading "Bootstrap
      Accordion #10" (20px, my-5) → white shadowed accordion card of 3 items
      → minimal Component Dock footer; square corners, no separators, no
      chevrons (flat color-block design)
- [ ] Default states: item 1 ("How to download and register?") open with
      terracotta `#e76739` header + white text; items 2/3 closed, `#f1f4f8`
      headers + black text; expanded answer panel white with muted text
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#dcf1ff` page,
      `#212529` heading, `#ffffff` card, `#f1f4f8` closed rows, `#000000`
      closed text, `#e76739` active row, `#888888` body base, `#b3b3b3`
      answer text; card shadow `0 5px 30px 0 rgba(0,0,0,0.3)`; radius 0
      everywhere
- [ ] Font: Roboto via Google Fonts `<link>` in `index.html` (NOT Poppins /
      Source Serif Pro — preloaded in the reference but unused); title
      "Tuck — Bootstrap Accordion"
- [ ] No images and no icons needed (pure color-block template — faithful);
      NO chevron swap (unlike Ruffle) — open state is the `#e76739` fill
- [ ] Only one panel open at a time; clicking the open panel collapses it
      (none open); `aria-expanded`/`aria-controls` + `role="region"`;
      keyboard operable
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Accordion 20" row, line 658 —
      Bootstrap Accordions category)
