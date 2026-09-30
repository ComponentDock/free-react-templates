# Headlock — Design Notes & Replication Research

## Source identification

- **ColorLib item:** "Fixed Header Table"
- **Source URL:** https://colorlib.com/wp/template/fixed-header-table/
- **Page title:** "Fixed Header Table - Free HTML/CSS Table Template 2026 -
  Colorlib"
- **Meta description:** "HTML5 & CSS3 based table example that can be used
  as a template for your website. Works with Bootstrap 4, 5 and 6, or on
  its own."
- **TEMPLATES.md screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/fixed-header-table-example.jpg
  (HTTP 200, 53,369 bytes, 1200×662)

## Preview reachability

Both preview paths return **HTTP 404** (verified 2026-09-30):

- `https://preview.colorlib.com/theme/fixed-header-table/` → 404 (9 bytes)
- `https://preview.colorlib.com/theme/bootstrap/fixed-header-table/` → 404

NOTE: the `bootstrap/` path works for the css-table-12..20 family but NOT
for this slug — do not re-derive it. The source page offers a ZIP download
which IS reachable:

- `https://preview.colorlib.com/downloads/free/fixed-header-table.zip` →
  HTTP 200, 73,693 bytes

The ZIP was extracted and is the authoritative reference for this prep
(same precedent as Fixstack / fixed-column-table).

## Source ZIP contents

| File                       | Size         | Notes                                                                                                         |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `index.html`               | 38,826 bytes | Full markup: FIVE variant blocks (`table100 ver1` … `ver5`), each with header table + body table              |
| `css/style.css`            | 9,900 bytes  | Single self-contained sheet ("Every style this snippet uses, and nothing else. No framework, no build step.") |
| `fonts/Lato-Regular.woff2` | 32,652 bytes | Body-cell font (`font-family: Lato-Regular`)                                                                  |
| `fonts/Lato-Bold.woff2`    | 32,228 bytes | Header-label font (`font-family: Lato-Bold`)                                                                  |
| `images/icons/favicon.ico` | 32,038 bytes | Favicon (generic ColorLib favicon)                                                                            |
| `README.md`                | 1,261 bytes  | Title "**Table V04**" — STALE copy-pasted title from a sibling snippet; ignore it                             |

**NO JavaScript file ships in the ZIP** (no `js/` folder at all) — the
fixed-header behavior is 100% CSS. The README template text mentions
`js/snippet.js`, but the ZIP does not contain one.

## Screenshot analysis (1200×662, pixel-sampled 2026-09-30)

The TEMPLATES.md screenshot shows ONLY the **ver1** card:

- **Page:** pure WHITE `#ffffff` (sampled). No gradient, no texture.
- **Card:** a wide rounded card (radius ~10px) centered on the page with a
  SOFT WIDE SHADOW beneath it (sampled shadow band ~`#f5f4f7`; CSS
  confirms `box-shadow: 0 0 40px 0 rgba(0,0,0,0.15)`).
- **Header row:** solid PERIWINKLE/INDIGO band (sampled `#6d7ae0`; CSS
  canonical `#6c7ae0`) with WHITE bold labels: Class name · Type · Hours ·
  Trainer · Spots.
- **Body rows:** fitness-class schedule (Like a butterfly / Boxing /
  9:00 AM - 11:00 AM / Aaron Chapman / 10 …). Body text medium gray
  (sampled ~`#7c7c7c`; CSS canonical `#808080`), Lato-Regular 15px.
- **Zebra striping:** even rows carry a faint LAVENDER tint (sampled
  `#f8f7ff`; CSS canonical `#f8f6ff`); odd rows are white.
- **Scrollbar:** a vertical scrollbar is visible along the card's RIGHT
  EDGE — the signature of the scrollable body container (22 rows overflow
  the 585px max-height; ~11 rows visible in the screenshot).
- **No navbar, no heading, no footer** in the source snippet — just the
  table card on white.

## Structure (section by section, DOM order)

```
body
└─ .limiter                 width 1366px, margin 0 auto
   └─ .container-table100   white #fff, min-height 100vh, flex center
      │                     (both axes), padding 33px 30px
      └─ .wrap-table100     width 1170px
         ├─ .table100.ver1.m-b-110   ← variant card 1 (screenshot)
         │   ├─ .table100-head       ← ABSOLUTE header <table> (thead, 5 th)
         │   └─ .table100-body.js-pscroll  ← scrollable body <table> (tbody, 22 tr)
         ├─ .table100.ver2.m-b-110   ← variant card 2
         ├─ .table100.ver3.m-b-110   ← variant card 3
         ├─ .table100.ver4.m-b-110   ← variant card 4
         └─ .table100.ver5.m-b-110   ← variant card 5
```

### The fixed-header mechanism (SIGNATURE — document carefully)

- `.table100 { position: relative; padding-top: 60px }` — the block is the
  positioning context; 60px reserves space for the absolute header.
- `.table100-head { position: absolute; width: 100%; top: 0; left: 0 }` —
  a WRAPPER DIV containing a FULL `<table><thead>…5 th…</thead></table>`.
  It is absolutely positioned OVER the body, OUTSIDE the scroll container,
  so it can never scroll.
- `.table100-body { max-height: 585px; overflow: auto; }` (+ `.js-pscroll`
  adds `overflow: auto; -webkit-overflow-scrolling: touch`) — a WRAPPER DIV
  containing a FULL `<table><tbody>…22 tr…</tbody></table>`. The user
  scrolls THIS div; the header stays put.
- Column widths are applied identically to BOTH tables (column1 33%,
  column2 13%, column3 22%, column4 19%, column5 13%) so the header labels
  line up over the body cells. column1 has `padding-left: 40px` in ver1/2/3/5
  and `7px` in ver4.
- `th, td { font-weight: unset; padding-right: 10px }`; header cells
  `.table100-head th { padding-top: 18px; padding-bottom: 18px }`; body
  cells `.table100-body td { padding-top: 16px; padding-bottom: 16px }`.
- `.m-b-110 { margin-bottom: 110px }` — vertical rhythm between cards.
- The Bootstrap remnants in the sheet (`html { font-family: sans-serif }`,
  reboot `body { color: #212529; background-color: #fff }`, `a { color:
#007bff }`, print block) do not affect the snippet tables — the tables
  carry NO `.table` class, so the `.table td/th { padding: .75rem }` rules
  never apply.

### Per-variant fidelity notes

**ver1 — the screenshot variant (periwinkle card):**

- `th`: Lato-Bold 18px, `#fff`, bg `#6c7ae0`, line-height 1.4.
- `td`: Lato-Regular 15px, `#808080`, line-height 1.4.
- `.table100-body tr:nth-child(even)` → bg `#f8f6ff` (zebra).
- Card: `border-radius: 10px; overflow: hidden; box-shadow: 0 0 40px 0
rgba(0,0,0,0.15)`.

**ver2 — red header, floating header shadow:**

- Card: radius 10px + the same `0 0 40px` shadow.
- `.table100-head` gets an EXTRA `box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1)`
  — the header row appears to float over the rows beneath it.
- `th`: Lato-Bold 18px, `#fa4251` (red), bg transparent.
- `td`: Lato-Regular 15px, `#808080`; body rows `border-bottom: 1px solid
#f2f2f2`.

**ver3 — dark card:**

- `.table100 { background-color: #393939 }` (the whole card is dark) +
  radius 10px + the same `0 0 40px` shadow.
- `th`: Lato-Bold 15px, `#00ad5f` (green), `text-transform: uppercase`,
  bg `#393939`.
- `td`: Lato-Regular 15px, `#808080`, bg `#222222`.

**ver4 — blue hairlines + scrollbar gutter trick:**

- NO radius, NO shadow, NO card background (transparent on white).
- `th`: Lato-Bold 18px, `#4272d7` (blue), bg transparent,
  `border-bottom: 2px solid #f2f2f2`.
- `td`: Lato-Regular 15px, `#808080`; body rows `border-bottom: 1px solid
#f2f2f2`.
- Gutter trick: `.table100 { margin-right: -20px }`, head wrapper
  `padding-right: 20px`, body wrapper `padding-right: 20px` — the body's
  scrollbar lands in the 20px gutter to the RIGHT of the header row, so
  the header visually spans the full width while the scrollbar sits beside
  it.
- `.column1 { padding-left: 7px }` (narrower indent than the other
  variants).

**ver5 — gray card-rows + hover:**

- `.table100 { margin-right: -30px; overflow: hidden }`; head wrapper
  `padding-right: 30px`; body wrapper `padding-right: 30px` (same gutter
  trick, 30px).
- `th`: Lato-Bold 14px, `#555555`, `text-transform: uppercase`, bg
  transparent, `padding-top/bottom: 25px`.
- `td`: Lato-Regular 15px, `#808080`, bg `#f7f7f7`, `padding-top/bottom:
10px`, `border: solid 1px transparent` with only LEFT/RIGHT styles
  visible (`border-style: solid none`) — first cell gets the left border +
  `border-top-left-radius/border-bottom-left-radius: 10px`, last cell the
  right border + right radii → each ROW looks like a detached rounded card.
- Rows: `border-bottom: 10px solid #fff; border-radius: 10px;
overflow: hidden`; the body table `border-collapse: separate;
border-spacing: 0 10px` (10px gutters between the card-rows).
- **ONLY hover in the whole page:** `tr:hover td { background-color:
#ebebeb; cursor: pointer }`.

## Data (verbatim from the source, all five variants identical)

Headers: Class name · Type · Hours · Trainer · Spots.
22 rows per variant = the 11-row list below rendered TWICE (rows 12–22
duplicate rows 1–11 exactly):

| #   | Class name                 | Type   | Hours              | Trainer       | Spots |
| --- | -------------------------- | ------ | ------------------ | ------------- | ----- |
| 1   | Like a butterfly           | Boxing | 9:00 AM - 11:00 AM | Aaron Chapman | 10    |
| 2   | Mind & Body                | Yoga   | 8:00 AM - 9:00 AM  | Adam Stewart  | 15    |
| 3   | Crit Cardio                | Gym    | 9:00 AM - 10:00 AM | Aaron Chapman | 10    |
| 4   | Wheel Pose Full Posture    | Yoga   | 7:00 AM - 8:30 AM  | Donna Wilson  | 15    |
| 5   | Playful Dancer's Flow      | Yoga   | 8:00 AM - 9:00 AM  | Donna Wilson  | 10    |
| 6   | Zumba Dance                | Dance  | 5:00 PM - 7:00 PM  | Donna Wilson  | 20    |
| 7   | Cardio Blast               | Gym    | 5:00 PM - 7:00 PM  | Randy Porter  | 10    |
| 8   | Pilates Reformer           | Gym    | 8:00 AM - 9:00 AM  | Randy Porter  | 10    |
| 9   | Supple Spine and Shoulders | Yoga   | 6:30 AM - 8:00 AM  | Randy Porter  | 15    |
| 10  | Yoga for Divas             | Yoga   | 9:00 AM - 10:00 AM | Donna Wilson  | 20    |
| 11  | Virtual Cycle              | Gym    | 8:00 AM - 9:00 AM  | Randy Porter  | 20    |

(Rows 12–22 = rows 1–11 repeated.)

## What the implementer must NOT copy / must change

- **Never copy assets:** no woff2 fonts (load Lato 400/700 via Google
  Fonts `<link>`), no favicon, no CSS files. Icons: none needed.
- **Zero images:** this template has no photos — no picsum placeholders
  required.
- **Zero ColorLib references** anywhere in the app (comments included) —
  provenance lives only in this spec, TEMPLATES.md, and the PR.
- **New name only:** app folder `apps/headlock`, package
  `@free-react-templates/headlock`. The source keeps its name "Fixed
  Header Table".
- **Add the Component Dock footer** (`https://www.componentdock.com/`,
  "Component Dock") — the source snippet has no footer.
- **Stale source artifacts to ignore:** README title "Table V04"; the
  README's mention of `js/snippet.js` (no JS ships). The signature is
  purely CSS.
