# Plisse — Interactive Accordion (Bootstrap Accordion #2)

Recreation of ColorLib Accordion 12 (https://colorlib.com/wp/template/accordion-12/)

## Provenance and replication note

| Field          | Value                                                                      |
| -------------- | -------------------------------------------------------------------------- |
| Source design  | ColorLib **Accordion 12** — https://colorlib.com/wp/template/accordion-12/ |
| Source slug    | `accordion-12`                                                             |
| Source preview | https://preview.colorlib.com/theme/bac/accordion-12/                       |
| Preview title  | `Accordion #2` (rendered heading: "Bootstrap Accordion #2")                |
| Recreated as   | `plisse` (`apps/plisse`, `@free-react-templates/plisse`)                   |
| Deploy target  | https://plisse.free.componentdock.com                                      |

**Why this spec exists.** `TEMPLATES.md` carried a bare `- [x]` row for
Accordion 12 with no app link, and no `apps/*` folder recreated the design —
the checklist claimed a template that did not exist (the same failure mode as
the earlier Gricklo row that had to be rebuilt as `locale`). This spec
re-establishes the recreation under a fresh, unused name and the bookkeeping
row is corrected with it. The prep-stream proposal
(`openspec/specs/template-accordion-twelve/spec.md`) supplied the first token
survey; the naming rule forbids reusing the source name, hence `plisse`
(pleated fabric — same family as the sibling accordion recreations
`pleat`, `fanfold`, `lamina`).

**Reference availability.** The live reference was fetched successfully via
IPv4 (`curl -4`) this time. `preview.colorlib.com` answers Cloudflare
"Error 1106 — the owner of this website has banned your IP address" for every
IPv6 request (403, 17 bytes) while plain IPv4 requests return 200; the same is
true of the checklist screenshot on `colorlib.com`. All replication evidence
below comes from the IP-v4 fetch plus that screenshot
(`/wp-content/uploads/sites/2/accordion-12.jpg`).

## Purpose

The source is a self-contained Bootstrap 4 component snippet, not a full page:
a centred page heading above a three-row vertical accordion in which exactly
one row is open at a time. The open row's header is a solid green bar with
white text and an up-chevron; the closed rows are white with a hairline border,
grey text and a down-chevron; the open row's body is white with grey copy. The
recreation renders it on a white page with the source's vertical rhythm, adds
the mandatory Component Dock footer (the snippet ships none) and is built from
scratch — no assets copied — with React 19, Tailwind CSS 4 and TypeScript.

## Design tokens

Extracted from the snippet's own stylesheet
(`https://preview.colorlib.com/theme/bac/accordion-12/css/style.css?v=dd8c4315`,
fetched 2026-10-13):

| Token          | Value                                 | Source rule                                                      |
| -------------- | ------------------------------------- | ---------------------------------------------------------------- |
| `page`         | `#ffffff`                             | `body { background-color: #fff }`                                |
| `item-bg`      | `#ffffff`                             | `.custom-accordion .cl-accordion-item`                           |
| `accent`       | `#72c02c`                             | `.cl-accordion-item.active .cl-btn-link { background: #72c02c }` |
| `border-row`   | `#efefef`                             | `.cl-btn-link { border: 1px solid #efefef }`                     |
| `muted`        | `#999999`                             | `.cl-btn-link { color: #999 }`                                   |
| `body-text`    | `#888888`                             | `.cl-accordion-body { color: #888 }`                             |
| `heading`      | `#212529`                             | `body { color: #212529 }`                                        |
| font family    | `"Roboto", -apple-system, …`          | `body` font stack (Google Fonts `<link>`)                        |
| radius         | `4px`                                 | `border-radius: 4px` on each item                                |
| item gap       | `10px`                                | `margin-bottom: 10px`                                            |
| header padding | `15px` (left `40px` for the label)    | `.cl-btn-link { padding: 15px 15px 15px 40px }`                  |
| icon offset    | `left: 15px`, vertically centred      | `.cl-btn-link:before { left: 15px; top: 50% }`                   |
| panel padding  | `20px`                                | `.cl-accordion-body { padding: 20px }`                           |
| page padding   | `7rem 0`                              | `.content { padding: 7rem 0 }`                                   |
| container      | `cl-container` (Bootstrap max-widths) | `.cl-container { max-width: …960px/1140px }`                     |
| icons          | icomoon glyphs `\e313` / `\e316`      | down-chevron / up-chevron (recreated with lucide chevrons)       |

**Layout note.** The snippet pins `body { min-width: 992px !important }` so it
always lays out at the desktop breakpoint; the accordion column therefore uses
the Bootstrap `lg` container width (`960px` minus its `15px` gutters) centred on
the page.

## Requirements

### Requirement: Page heading

The page SHALL render the source heading "Bootstrap Accordion #2" centred above
the accordion, and SHALL set the document title to the template name.

#### Scenario: Heading renders

- **WHEN** the page loads
- **THEN** a level-1 heading reading "Bootstrap Accordion #2" is shown
- **AND** it is centred

### Requirement: Accordion rows

The accordion SHALL render three rows, in source order, labelled
"How to download and register?", "How to create your paypal account?" and
"How to link your paypal and bank account?", each a `button` with
`aria-expanded`, `aria-controls` pointing at its panel id and a panel whose
`aria-labelledby` points back at the button. Each row SHALL carry a 4px radius
and an absolute chevron glyph 15px from its left edge.

#### Scenario: All rows render

- **WHEN** the page loads
- **THEN** all three question buttons are present
- **AND** each is a `button` element

#### Scenario: Wiring is complete

- **WHEN** a row's button is inspected
- **THEN** its `aria-controls` is `<id>-panel`
- **AND** the matching panel's `aria-labelledby` is `<id>-toggle`

### Requirement: Single-open accordion behaviour

Exactly one row MAY be expanded at a time (the source passes
`data-parent="#accordion_1"`). The first row SHALL be expanded on load; opening
a row SHALL close whichever row was open; clicking the open row SHALL close it
and leave every row collapsed.

#### Scenario: First row open on load

- **WHEN** the page loads
- **THEN** the "How to download and register?" button reads `aria-expanded="true"`
- **AND** its panel is rendered
- **AND** the other two buttons read `aria-expanded="false"`

#### Scenario: Opening a closed row

- **WHEN** the visitor clicks "How to create your paypal account?"
- **THEN** that row reads `aria-expanded="true"` and renders its panel
- **AND** the previously open row reads `aria-expanded="false"` and its panel is gone

#### Scenario: Closing the open row

- **WHEN** the visitor clicks the currently open row
- **THEN** it reads `aria-expanded="false"`
- **AND** no panel is rendered

#### Scenario: Keyboard operation

- **WHEN** a row button has focus and the visitor presses Enter or Space
- **THEN** the row toggles exactly as it does on click

### Requirement: Active and inactive styling

The open row's header SHALL be a solid `#72c02c` bar with white text, no
visible border, an up-chevron and a raised stacking order; closed rows SHALL be
white with a `1px` `#efefef` border, `#999` text and a down-chevron. The open
row's panel SHALL use `#888` copy on a `20px` padding box.

#### Scenario: Open row styling

- **WHEN** a row is open
- **THEN** its header carries the accent background and white text tokens
- **AND** it shows an up-chevron

#### Scenario: Closed row styling

- **WHEN** a row is closed
- **THEN** its header carries the hairline row-border token and the muted text token
- **AND** it shows a down-chevron

### Requirement: Component Dock footer

The page SHALL end with a footer carrying a copyright line and a link labelled
"More templates at Component Dock" pointing at
`https://www.componentdock.com/` (no external attribution links).

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** a footer link to `https://www.componentdock.com/` is present
- **AND** the current year appears in the copyright line

## Verification Checklist

- [x] Vite + React 19 + Tailwind CSS 4 setup typechecks clean
- [x] All three rows toggle with single-open accordion behaviour
- [x] Active row matches the tokens (`#72c02c` fill, white text, up-chevron)
- [x] Panel copy is `#888` on a 20px padding box
- [x] Footer links to Component Dock
- [x] 100% test coverage with Vitest & Testing Library
- [x] Passes per-app verification (`scripts/verify-app.sh plisse`)
