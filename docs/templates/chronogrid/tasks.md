# ChronoGrid — Tasks

> **SHIPPED** — this prep's design shipped as `apps/chronogrid`
> (<https://chronogrid.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source: **Calendar 02** — https://colorlib.com/wp/template/calendar-02/ (`TEMPLATES.md` row 688)
Live preview: https://preview.colorlib.com/theme/bootstrap/calendar-02/ (HTTP 200, 4,370 B, sha256 `929d60ec0752ebcaafbb…`)
Sheet: `css/style.css?v=7d4a7424` (10,994 B, sha256 `d5d1e3bf00aa2cbba711…`) · Script: `js/snippet.js?v=15e86eb9` (5,604 B, sha256 `60889b5b40e24a5590cf…`)
Spec: `openspec/specs/template-chronogrid/spec.md` · Notes: `docs/templates/chronogrid/design-notes.md`

New name: `chronogrid` · package `@free-react-templates/chronogrid` · deploy target `chronogrid.free.componentdock.com`

## Prep (done — do not redo)

- [x] Resolve the real preview through the host catalog (`theme/bootstrap/calendar-02/`, 200) — the slug-only path 404s
- [x] Read `css/style.css` and `js/snippet.js` from the live demo; census colours, type, radii, behaviour
- [x] Correct the spec: the item is a single-band calendar widget, not a multi-section landing page
- [x] Re-record the palette (`#39cb75` green, `#2a3246` selection, `#f8f9fd` page, Lato) — the previous palette belonged to a sibling design
- [x] Write design notes (DOM skeleton, interaction model, adaptation table)

## Implementation (for the implementer)

- [ ] Scaffold `apps/chronogrid` from the simplest existing snippet-family app; package name, `CNAME`, `homepage`
- [ ] `@theme` tokens: `--color-brand: #39cb75`, `--color-selected: #2a3246`, `--color-page: #f8f9fd`, `--color-surface: #fff`, `--color-ink: #000`, `--color-body: gray`, `--color-disabled: #c9c9c9`, `--color-rule: #dee2e6`
- [ ] Load **Lato** (400/700) in `index.html`; add a static footer credit line linking `https://www.componentdock.com/` ("Component Dock")
- [ ] Implement the single-band page shell: centred heading naming the recreation, 700 px card centred in the viewport, 5px radius, `0 19px 27px -20px rgba(0,0,0,.16)` shadow
- [ ] Implement the split card: 45% green panel + white calendar panel side by side from `md` up, stacked below
- [ ] Implement the green panel: `reset` control (top-right, 11px uppercase, translucent border, radius 4px), two round chevron buttons, 8em day number, uppercase `Month - Year` label
- [ ] Implement the calendar table: 7 Sun…Sat headers, 42 mapped cells, 14% width, 44 px circular fill behind each numeral
- [ ] Implement today (`#39cb75` circle), selection (`#2a3246` circle, white text, exclusive), empty-cell disabled treatment (`#c9c9c9` hover, no circle)
- [ ] Implement month navigation with year wrap and header reset to 1
- [ ] Implement `reset` (current month, today's date, selection cleared)
- [ ] Persist the selection across reloads (one-day expiry; `localStorage` instead of the source's cookie)
- [ ] Add accessibility the source lacks: `role="grid"`, `aria-selected`, per-cell `aria-label` with the full date, keyboard arrow navigation
- [ ] Tests: 42 cells, today mark, exclusive selection, month/year wrap, reset, persisted selection, credit link, no provenance strings

## Follow-up on the shipped app (predates the correction)

- [ ] Replace `--color-accent` / `--color-month` / `--color-chevron` / `--color-past` / `--color-future` / `--color-gridline` / `--color-page` with the corrected tokens and swap Poppins for Lato — the shipped page shape is right, the colour and type layer is the sibling design's
