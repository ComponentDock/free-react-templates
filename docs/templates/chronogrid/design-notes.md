# ChronoGrid — Design Notes

Reference: **Calendar 02** — https://colorlib.com/wp/template/calendar-02/ (`TEMPLATES.md` row 688)
Live preview (catalog-resolved): https://preview.colorlib.com/theme/bootstrap/calendar-02/ — HTTP 200, 4,370 B, sha256 `929d60ec0752ebcaafbb…`, `<title>Calendar 02</title>` (fetched 2026-10-23)
Slug-only path: https://preview.colorlib.com/theme/calendar-02/ — HTTP 404, 9 B (this slug lives in the host's `theme/bootstrap/` family; the 404 is not a dead design)
Design sheet: `css/style.css?v=7d4a7424` — 10,994 B, sha256 `d5d1e3bf00aa2cbba711…`, 107 rules
Behaviour script: `js/snippet.js?v=15e86eb9` — 5,604 B, sha256 `60889b5b40e24a5590cf…`
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-02.jpg
Shipped: https://chronogrid.free.componentdock.com

> **Prep correction (2026-10-23p).** The first capture of this item stopped at the
> slug-only 404, worked from the screenshot, borrowed the *sibling* calendar
> design's palette (the entry shipped as `planner`) and listed five sections the
> source does not have. Everything below is re-read from the live demo. The app
> that shipped from the old capture (blue `#3d88f7` / `#1371e6`, Poppins) carries
> the wrong colours and typeface against a correct page shape — see
> "App delta" at the bottom.

## What the source actually is

A **snippet page, not a landing page**. One band, one card, no chrome:

```
<body>
  section.ftco-section
    div.cl-container
      div.cl-row.cl-justify-content-center
        div.cl-col-md-6.cl-text-center.cl-mb-5
          h2.heading-section          "Calendar #02"   (28px, #000, centred)
      div.cl-row > div.cl-col-md-12
        div.elegant-calencar.cl-d-md-flex          (max-width 700px, radius 5px, shadow)
          div.wrap-header                          (45% wide, background #39cb75)
            p#reset                                "reset" (uppercased by CSS)
            div#header
              div.pre-button  > i.fa-chevron-left
              div.head-info
                div.head-day                       (8em, #fff)
                div.head-month                     "October - 2026" (18px, #fff, uppercase)
              div.next-button > i.fa-chevron-right
          div.calendar-wrap                        (background #fff, padding 40px 20px 20px)
            table#calendar
              thead > tr > th ×7                   Sun…Sat (#000, 700)
              tbody > tr ×6 > td ×7                (42 cells, width 14%)
```

`cl-d-md-flex` means the two panels sit side by side from Bootstrap's `md`
breakpoint up and stack below it. No `.navbar`, no hero, no sidebar, no form.

## Design tokens

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#39cb75` | green header panel; today's circle |
| `--color-selected` | `#2a3246` | selected / hovered day circle |
| `--color-page` | `#f8f9fd` | page background (`body`) |
| `--color-surface` | `#ffffff` | calendar panel |
| `--color-ink` | `#000000` | headings, weekday labels, day numerals |
| `--color-body` | `#808080` (`gray`) | body text default |
| `--color-disabled` | `#c9c9c9` | hover text on an empty cell |
| `--color-rule` | `#dee2e6` | table borders (reboot) |
| `--font-family-sans` | `Lato, Arial, sans-serif` | body 16px / 1.8 / 400; headings 400 |
| radii | `5px` card · `4px` reset · `50%` chevrons + day circles | sheet census (`50%` ×3) |
| card shadow | `0 19px 27px -20px rgba(0, 0, 0, 0.16)` | `.elegant-calencar` |
| day circle | 44 × 44 px, `margin: 0 auto`, `z-index: -1` | `tbody td:after` |

The sheet declares **one** green: `#39cb75` is a *fill* (header panel, today
circle), never text. `#2a3246` is the only navy and only appears as a circle
fill under white text. There is no past/future date colour, no gridline colour
and no second accent — an earlier capture invented all three.

## Interaction model (from `js/snippet.js`)

| behaviour | source |
| --- | --- |
| 42 cells | `for (var k = 0; k < 42; k++)` clears every cell, then numbers from `startDay` |
| empty cells | trailing/leading blanks get `id="disabled"` (`#fff`, no circle, `#c9c9c9` hover) |
| today | the cell matching today's date gets `id="today"` (green circle) |
| selection | clicked cell gets `className = "cl-selected"`; the previous one is cleared first (single selection) |
| header | `drawHeader(n)` writes the day number; the label is `monthTag[month] + " - " + year` |
| prev / next | month ±1 with year wrap (`month < 1 → 11, year-1`; `month >= 11 → 0, year+1`), then `drawHeader(1)` |
| reset | restores `today`'s month/year/day and clears `options` |
| persistence | `setCookie('selected_day', 1)` (one-day expiry) and `getCookie` on draw |

React equivalent: `useState` for `{year, month, selectedDay}`, `useMemo` for the
42-cell array (`startDay = new Date(year, month, 1).getDay()`,
`nDays = new Date(year, month + 1, 0).getDate()`), `localStorage` for the
selection, and `aria-selected` / `aria-label="12 October 2026"` on each cell
(the source ships no ARIA and no keyboard support — add it, it does not change
the visual layer).

## Section-by-section fidelity

### Band (`.ftco-section`)
- Vertical rhythm comes from `ftco-section` padding; reproduce ~100px top/bottom
  at desktop, less at mobile, and keep `min-h-screen` on the page shell so the
  single card is centred in the viewport as the demo is.
- The heading is centred and limited to `cl-col-md-6` (half the container).

### Card (`.elegant-calencar`)
- `max-width: 700px`, `margin: 0 auto`, `overflow: hidden` (so the green panel's
  corners are clipped by the card's 5px radius), `border-radius: 5px`.
- Shadow is soft and *downward only*: `0 19px 27px -20px rgba(0,0,0,.16)`.

### Green panel (`.wrap-header`)
- 45% of the card at `md`+; full width when stacked.
- `#reset` is absolutely positioned at `top: 0.5em; right: 0.5em`, 11px,
  uppercase, translucent white text and a translucent 1px border, radius 4px.
- Chevrons are 1em round buttons, 18px glyphs, white, vertically centred with
  `translateY(-50%)`, sitting at the panel's left/right edges.
- `.head-day` is **8em** with `line-height: 1` — the number dominates the panel;
  `.head-month` is 18px uppercase below it.

### Calendar panel (`.calendar-wrap`)
- White, `padding: 40px 20px 20px` — the 40px top gap is what separates the table
  from the card's split line.
- `thead` labels are black and bold; `tbody td` is 14% wide, pointer cursor,
  `transition: all .2s ease-in`.
- The circle is a pseudo-element behind the numeral (`z-index: -1`), so the
  numeral stays crisp over it; reproduce with a wrapping span or a `::after`
  equivalent that keeps the text above the fill.

## Source → React adaptation

| source | recreation |
| --- | --- |
| `i.fa.fa-chevron-*` (FontAwesome) | `ChevronLeft` / `ChevronRight` from `lucide-react` |
| `<table>` with `id="calendar"` and DOM-mutated cells | `<table>` with a mapped 42-cell array; keep semantic `thead`/`tbody` |
| `document.cookie` (`selected_day`, 1 day) | `localStorage['chronogrid:selected-day']` (+ expiry timestamp) |
| `innerHTML` day numbers | React text nodes |
| `#disabled` id for blanks | `disabled` state on the cell, `aria-disabled`, no pointer handler |
| Google-hosted nothing — sheet self-hosts `Lato` | `Lato` via Google Fonts `<link>` in `index.html` |
| heading text "Calendar #02" | own name ("ChronoGrid") — the numbered title is the source's label |
| no footer | minimal credit bar linking `https://www.componentdock.com/` ("Component Dock") |

## Sibling comparison (why the first capture went wrong)

The calendar family shares markup and differs in **one token**: this entry's
panel is the lime-green `#39cb75` with a `#2a3246` selection circle, while the
sibling entry shipped as `planner` is blue (`#1371e6` month label, `#b9cae7`
chevrons) and additionally invents past/future date colours. Copying the
sibling's row silently swaps the brand colour of the whole card — always census
the sheet you actually fetched.

## App delta (implementer follow-up, not a prep task)

`apps/chronogrid` was built from the old capture and still declares
`--color-accent: #3d88f7`, `--color-month: #1371e6`, `--color-chevron: #b9cae7`,
`--color-past`, `--color-future`, `--color-gridline`, `--color-page: #f7f8fc`
and `Poppins`. Against this corrected spec: palette → `#39cb75` / `#2a3246` /
`#f8f9fd`, typeface → `Lato`, and drop the three roles the source never defines.
Page shape (single band + calendar + footer credit) already matches.
