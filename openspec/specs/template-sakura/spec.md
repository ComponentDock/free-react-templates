# Template: Sakura (Calendar / Events Widget — Pink-Branded Monthly Calendar with Event Management)

## Purpose

Sakura is a single-page interactive calendar-with-events widget template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 08" design (see TEMPLATES.md, **Bootstrap Calendars
(20)** category, line 692 — the `calendar-08` slug appears exactly once, no
duplicate rows), built under a DIFFERENT name (**Sakura** — cherry blossom,
evoking the template's signature pink `#fc7fb2` accent; per the monorepo
naming mandate — never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

The original is a **single-widget page**: no navbar, no hero — one centered
white calendar card on a very light grey-blue background with a pink
event-management panel below it. ColorLib's own description (from the
template landing page): "A trendy free calendar with events Bootstrap
template that offers a user to add an event to their desired date." The page
renders ONE interactive widget (from the live reference DOM + render):

1. **Title** — **"Calendar #08"**, 28px near-black sans-serif, centered
   above the widget.
2. **White calendar card** (`.calendar-container`, 500×500px, white, padding
   20px):
   - **Year header** (`.year-header`, 40px tall, margin-top 20px) — the
     current year centered in dark 20px text, flanked by grey `#cccccc`
     chevron icons (Font Awesome in the original; `lucide-react` in the
     recreation) at the card's top corners. **NOTE: the chevrons navigate
     YEARS** (the JS calls `date.setFullYear(year±1)`), unlike the month
     chevrons of sibling Calendar 07 (Twilight) — month selection is done by
     the month strip.
   - **Month strip** (`.months-table`) — one row of 12 abbreviated months
     `Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec`, 11px uppercase, grey
     `#cccccc`; the viewed month renders **bold pink `#fc7fb2`**
     (`.active-month`); hover → pink. Clicking a month switches the view.
   - **Weekday header** (`.days-table`) — `Sun Mon Tue Wed Thu Fri Sat`,
     10px uppercase, near-black.
   - **Date grid** (`.frame` → `.dates-table`, tbody filled by JS) — the
     viewed month rendered as `35 + firstDay` cells (6 rows × 7 columns),
     leading/trailing overflow cells blank (`.nil`, NOT clickable — the
     original's blank cells have no handlers attached, matching the family
     convention), dates 15px `#2b2b2b`.
   - **"Add Event" button** (`#add-button`) — pill-shaped, pink `#fc7fb2`,
     white 1rem text, `border-radius: 25px`, absolutely positioned at the
     card's bottom-right (`right: 20px; bottom: 20px`). Opens the Add Event
     dialog.
3. **Events panel** (`.events-container`, directly BELOW the white card,
   full width) — a stack of pink `#fc7fb2` event cards (`border-radius: 4px`,
   `padding: 20px 0`, white 1rem text):
   - **No events** → a single card reading **"There are no events planned for
     <Month> <day>."** (the JS also sets a red `#FF1744` left border, but the
     stylesheet's `.event-card { border: none !important }` kills it —
     verified in the live render: the stripe does NOT display; do NOT
     reproduce it).
   - **With events** → one card per event: `<name>:` + `<n> Invited` (a
     cancelled event would render `Cancelled` instead — the source's
     `.event-count`/`.event-cancelled` text is colored `#fc7fb2` (pink on
     pink, invisible — a source bug); the recreation SHALL render these
     labels in white, documented deviation).
4. **Add Event dialog** (`.dialog`, absolute overlay covering the whole
   widget, pink `#fc7fb2` background, hidden by default) — header **"Add New
   Event"** (28px white), two centered inputs ("Event name" text, maxlength
   36; "Number of people to invite" number, min 0 max 1000000) with
   uppercase 13px labels, a black **Cancel** pill and a white **OK** pill
   (`.button.button-white`). Validation: empty name → error on the name
   input; non-numeric count → error on the count input (source error color
   is `#fc7fb2` — invisible on the pink dialog; recreation SHALL use a
   visible error indication, documented deviation). OK adds the event to the
   active date, re-renders the grid (the date now carries the event style)
   and the events panel.
5. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **pink-branded
calendar-with-events**: a single pink `#fc7fb2` accent used everywhere (active
month, active-date circle, event-date fill, Add Event button, dialog, event
cards, chevron hover), an amber `#ffc107` 10px dot marking dates that have
events, year-navigation chevrons (NOT month chevrons), month selection via a
12-month strip, and the events panel with its empty-state card. Flat design,
NO card shadow (unlike sibling Calendar 07), NO hover circle on plain dates
(unlike Calendar 07's navy hover). Recreate the widget 1:1 with matching
tokens, typography, and interaction (year nav + month select + date select +
add-event dialog — all functional in the original jQuery build; the
recreation SHALL make them functional in React).

> NAMING NOTE: the ColorLib source name "Calendar 08" is FORBIDDEN as the
> app name. **Sakura** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-15: no
> `apps/sakura` on origin/main, no `template-sakura` spec, no `sakura` in
> `docs/templates/`, no `[sakura](...)` shipped link in TEMPLATES.md, and no
> ColorLib source slug `sakura`). Source slug + preview URL are recorded
> below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-08/` returns
> **HTTP 404** (verified 2026-08-15 via curl). The REAL live preview lives
> at **`https://preview.colorlib.com/theme/bootstrap/calendar-08/`** — the
> family path used by the sibling "Bootstrap Calendars" preps (Calendar 02 →
> `template-monthly`, Calendar 05–07 → Triptych/Ephemeris/Twilight). Full
> reference material was captured from the live preview 2026-08-15: the
> rendered DOM (`/tmp/cal08.html`, ~5.7KB), the template stylesheet
> `css/style.css` (~225KB Bootstrap 4.3.1 bundle; the template's own rules
> are at the tail, lines 8164+), the interaction script `js/main.js`
> (~9.9KB, jQuery `Calendar`-style engine), plus a headless-browser render
> of the live page (computed styles + geometry) and the TEMPLATES.md
> screenshot (`calendar-08.jpg`, 1200×972, analyzed in the browser). Design
> tokens below are extracted from the live stylesheet + live render — the
> current ground truth.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 08" — free Bootstrap calendar-with-events
  widget template (author Colorlib; source:
  https://colorlib.com/wp/template/calendar-08/; the template page's meta
  description: "A trendy free calendar with events Bootstrap template that
  offers a user to add an event to their desired date."). TEMPLATES.md line
  692,
  **Bootstrap Calendars (20)** category (header at line 683). The
  `calendar-08` slug appears exactly once in TEMPLATES.md. The 20-item
  category is a family: siblings prepped as **Planner** (Calendar 01),
  **Monthly** (Calendar 02), **Almanac** (03), **Solstice** (04),
  **Triptych** (05), **Ephemeris** (06), **Twilight** (07) — this prep is
  the eighth; each sibling is a DIFFERENT widget layout (do not copy a
  sibling's).
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-08/`**
  (captured 2026-08-15, ~5.7KB HTML): `section.ftco-section` (padding 7em 0)
  → `.container` → centered `h2.heading-section` **"Calendar #08"** →
  `.col-md-12` → `.content.w-100` (the pink `#fc7fb2` 500×500px frame box,
  `max-width: 500px; margin: 20px auto`) containing:
  - `div.calendar-container` — white 500×500px, `padding: 20px`, `float:
right` (renders as the visible white card, EXACTLY covering the pink
    frame box), `font: 13px Helvetica, Arial, sans-serif`. Inside:
    `div.calendar` → `div.year-header` (`span.left-button.fa.fa-chevron-left
#prev` + `span.year #label` + `span.right-button.fa.fa-chevron-right
#next`), `table.months-table` (12 `td.month` cells Jan..Dec),
    `table.days-table` (7 `td.day` cells Sun..Sat), `div.frame` →
    `table.dates-table` → `tbody.tbody` (filled by JS), `button.button
#add-button` **"Add Event"**.
  - `div.events-container` (renders BELOW the white card, overflowing the
    pink frame box — `.content` has `height: 500px` and the invalid
    `overflow: none` → visible; the event cards are the only pink in that
    area).
  - `div.dialog #dialog` (hidden by default; absolute overlay covering the
    whole widget): `h2.dialog-header` **"Add New Event"**, `form.form` →
    `label.form-label` "Event name" + `input.input #name` (text, maxlength
    36), `label.form-label` "Number of people to invite" + `input.input
#count` (number, min 0 max 1000000, maxlength 7), `input.button
#cancel-button` "Cancel", `input.button.button-white #ok-button` "OK".
    Scripts: jquery + popper + bootstrap + `js/main.js`.
- **Template stylesheet (css/style.css, ~225KB Bootstrap bundle; custom
  rules at the tail, lines 8164–8500) — tokens below extracted from the
  custom rules** (the ONLY authoritative token source; the live render and
  the 2020 screenshot agree on all values):
  - `.ftco-section { padding: 7em 0; }` · `.heading-section { font-size:
28px; color: #000; }`
  - `.content { overflow: none; width: 100%; max-width: 500px; height:
500px; position: relative; margin: 20px auto; background: #fc7fb2; }`
    (the pink frame box — note the invalid `overflow: none`; the recreation
    SHALL NOT fix a 500px height, see Layout)
  - `.events-container { overflow-y: scroll; height: 100%; width: 100%;
float: left; border-bottom-right-radius: 3px; border-top-right-radius:
3px; }` (transparent bg — the pink comes from the cards; `height: 100%`
    of the 500px frame is a source quirk — recreation uses natural height)
  - `.event-card { padding: 20px 0; max-width: 100%; background: #fc7fb2;
border: none !important; color: #fff; border-radius: 4px; margin: 0; }`
    (final `margin: 0` — cards stack flush) · `.event-count, .event-name,
.event-cancelled { display: inline; padding: 0 10px; font-size: 1rem;
}` · `.event-count { color: #fc7fb2; }` (pink-on-pink source bug —
    render white) · `.event-name { padding-right: 0; text-align: left; }`
  - `.calendar-container { position: relative; margin: 0 auto; height: 100%;
width: 100%; background: #fff; font: 13px Helvetica, Arial, sans-serif;
padding: 20px; float: right; }` (+ `@media (max-width: 991.98px) { .calendar-container
{ padding: 0; } }` and `@media (max-width: 767.98px) { .calendar-container
{ padding: 0; width: 100%; } }`)
  - `.calendar { width: 100%; padding: 0; }` (no `position` — so `#add-button`
    positions against `.calendar-container`)
  - `.year-header { background: #fff; height: 40px; text-align: center;
position: relative; color: #fff; border-top-left-radius: 3px; margin-top:
20px; }` · `.year-header span { display: inline-block; font-size: 20px;
line-height: 40px; color: #000; }`
  - `.left-button, .right-button { cursor: pointer; width: 28px; text-align:
center; position: absolute; color: #cccccc !important; transition: 0.3s;
font-size: 14px !important; }` · hover → `#fc7fb2` ·
    `.left-button { left: 0; }` · `.right-button { right: 0; top: 0; }`
  - `.button { cursor: pointer; appearance: none; outline: none; font-size:
1rem; border-radius: 25px; padding: 0.65rem 1.9rem; transition: .2s ease
all; color: white; border: none; background: #fc7fb2; }` ·
    `.button.button-white { background: #fff; color: #000; }` ·
    `#cancel-button { background: #000; }` · `#add-button { display: block;
position: absolute; right: 20px; bottom: 20px; }` ·
    `#add-button:hover, #ok-button:hover, #cancel-button:hover { transform:
scale(1.03); }` · `:active { transform: translateY(3px) scale(0.97); }`
  - `.days-table, .dates-table, .months-table { border-collapse: separate;
text-align: center; }`
  - `.day { height: 26px; width: 26px; padding: 0 10px; line-height: 26px;
border: 2px solid transparent; text-transform: uppercase; font-size:
10px; color: #000; }` (weekday header cells)
  - `.month { cursor: default; height: 26px; width: 26px; padding: 0 2px;
padding-top: 10px; line-height: 26px; text-transform: uppercase;
font-size: 11px; color: #cccccc; transition: all 250ms; }` (+ `@media
(max-width: 991.98px) { .month { font-size: 8px; } }` / `@media
(max-width: 767.98px) { .month { font-size: 10.5px; } }`) ·
    `.active-month { font-weight: 700; color: #fc7fb2; }` · `.month:hover {
color: #fc7fb2; }`
  - `.table-date { cursor: default; color: #2b2b2b; height: 26px; width:
26px; font-size: 15px; padding: 10px; line-height: 26px; text-align:
center; border-radius: 50%; border: 1px solid transparent; transition:
all 250ms; position: relative; z-index: 0; }` · `.table-date:before {
position: absolute; top: 50%; left: 0; right: 0; bottom: 0; transform:
translateY(-50%); width: 40px; height: 40px; content: ''; margin: 0
auto; border-radius: 50%; z-index: -1; }` (the 40px circle behind the
    active date)
  - `.event-date { border-color: #fc7fb2; background: #fc7fb2; color: #fff;
}` · `.event-date:after { position: absolute; top: 0; left: 0; width:
10px; height: 10px; border-radius: 50%; content: ''; background:
#ffc107; border: 1px solid white; }` (the amber event dot at the cell's
    top-left) · `.active-date { color: #fff; }` · `.active-date:before {
background: #fc7fb2; }` · `.event-date.active-date { background:
transparent; border: none; }` (event date that is ALSO active → only the
    pink circle shows)
  - `.dialog { z-index: 5; background: #fc7fb2; position: absolute; width:
100%; height: 100%; bottom: 0; left: 0; display: none; }` ·
    `.dialog-header { margin: 20px; margin-top: 30px; color: #fff;
text-align: center; font-size: 28px; }` · `.form-container { margin-top:
20%; }` · `.form-label { text-transform: uppercase; font-size: 13px;
letter-spacing: 1px; color: rgba(255, 255, 255, 0.9); }` ·
    `.input { border: none; background: none; border: 1px
rgba(255, 255, 255, 0.2) solid; display: block; margin-bottom: 30px;
width: 300px; height: 40px; text-align: center; transition: border-color
250ms; border-radius: 40px; color: #fff; }` · `.input:focus { outline:
none; border-color: #fff; }` · `.error-input { border-color: #fc7fb2; }`
    (invisible on pink — recreation uses a visible error indication)
  - **NO box-shadow anywhere in the custom rules** (all 170 `box-shadow`
    matches in the bundle are Bootstrap's own, lines < 8164) — the widget
    sits FLAT on the page, no card shadow (differs from Calendar 07).
  - **NO hover rule for plain dates** (no `.table-date:hover`) — plain
    dates have no hover circle (differs from Calendar 07's navy hover); the
    only hover colors in the widget are the chevrons and the month strip
    (both → `#fc7fb2`) and the button scale(1.03).
  - `body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...;
background-color: #fff; }` (Bootstrap's default body) — but the RENDERED
    page background is `#f8f9fd` (computed `rgb(248, 249, 253)` on the live
    preview; the screenshot shows the same pale cool grey, ≈`#f4f6f8`) —
    the preview portal supplies it; the recreation SHALL use `#f8f9fd`
    (matches the rendered reference and the family).
- **Interaction script (js/main.js, captured 2026-08-15) — behavior to
  reproduce:** a jQuery engine with an `event_data` array (seeded with 11
  demo events in **May 2020**: ten "Repeated Test Event" entries on May 10
  (mostly `cancelled: true`) + one "Test Event" on May 11, invited_count 120
  — invisible in the default December view; the recreation seeds a small
  paraphrased sample dataset in the same spirit, see below).
  - **Init:** on load, `date = new Date()` (real current date); the current
    month's cell gets `.active-month`; `init_calendar(date)` empties the
    grid + events panel and renders `35 + firstDay` cells (`firstDay = new
Date(y, m, 1).getDay()`), new `<tr class="table-row">` every 7 cells;
    cells before the first day or past the month end render blank `.nil`;
    the day matching `date.getDate()` renders `.active-date` (white text +
    pink 40px circle) and its events are shown in the panel; dates with
    events render `.event-date` (pink fill + amber dot); the year label
    shows `date.getFullYear()`.
  - **Date click** (`date_click`): hides the dialog, removes `.active-date`
    from the previous cell, adds it to the clicked cell, shows that date's
    events.
  - **Month click** (`month_click`): `date.setMonth(index)` (keeps the
    day-of-month), re-inits the grid; the `.active-month` moves to the
    clicked month. The active-date rule after re-init: the cell matching
    `date.getDate()` becomes active again IF the viewed month contains it —
    i.e. the **day-of-month (18 in the reference view) persists through
    month navigation** (18 exists in every month, so the circle always
    re-renders on the 18th of the viewed month unless the user clicked
    another date).
  - **Year chevrons** (`next_year`/`prev_year`): `date.setFullYear(year±1)`,
    re-init. (The `$("year").html(new_year)` line is a source bug — missing
    the `.` selector — dead code; the year label still updates via
    `init_calendar`'s `$(".year").text(year)`.)
  - **Add Event** (`new_event`): does NOTHING if no date is active (in the
    recreation a date is always active — the day-of-month persistence rule);
    otherwise clears the inputs, hides the events panel, shows the dialog;
    clicking any input clears its error class. **Cancel**: hides the dialog,
    shows the events panel. **OK**: trims the name (empty → `.error-input`
    on the name field), parses the count (`isNaN` → `.error-input` on the
    count field); on valid input: hides the dialog, pushes
    `{occasion, invited_count, year, month, day}` into `event_data`,
    `date.setDate(day)`, re-inits the grid (the date now renders
    `.event-date`).
  - **Events display** (`show_events`): no events → ONE card
    **"There are no events planned for <Month> <day>."** (with the dead red
    stripe, see above); with events → one card per event:
    `"<occasion>:"` + `"<count> Invited"` (or `"Cancelled"`).
  - **Source quirks NOT to reproduce:** `.event-card { border: none
!important }` overriding the JS's red stripe (render it WITHOUT the
    stripe); `.event-count`/`.event-cancelled` pink-on-pink (render white);
    `.error-input` pink border on pink dialog (use a visible error color);
    duplicate `id="valueFromMyButton"` on both dialog labels (use proper
    `htmlFor`); the invalid `overflow: none` + fixed 500px heights (use
    natural height); jQuery animation calls (`.show(250)`/`.hide(250)` — the
    recreation may transition quickly or not at all; a subtle fade is fine).
- **Visual design (screenshot calendar-08.jpg, 1200×972, verified 2026-08-15
  via browser visual inspection):** a Safari window (URL bar
  `preview.colorlib.com`) showing the single centered widget on the pale
  cool-grey `#f8f9fd` page. Top to bottom: centered dark title
  **"Calendar #08"**; the white card — year **"2020"** centered dark with
  small GREY chevrons at the top corners; the month strip with **"DEC"**
  bold PINK; a `SUN MON TUE WED THU FRI SAT` light-grey uppercase header; the
  December 2020 grid (starts Tuesday), **18 circled in solid pink
  (`#fc7fb2`) with white text** (the capture date / today indicator), all
  other dates plain dark, NO amber dots; below the grid, a right-aligned
  **pink pill "Add Event"** button; below the card, a solid pink bar with
  white text **"There are no events planned for December 19."** (note: the
  screenshot's bar text says 19 while the circle is on 18 — an artifact of
  the preview capture; the live render shows the bar always matching the
  active date, e.g. "August 15" with the circle on 15 — the recreation
  SHALL keep the bar text in sync with the active date, i.e. initial
  "December 18"). No navbar, no hero, no footer (add the Component Dock
  footer per repo convention).
- **Live preview confirmation (2026-08-15, headless browser render +
  computed styles of `.../theme/bootstrap/calendar-08/`):** page bg computed
  `rgb(248, 249, 253)`; `.content` = `#fc7fb2` 500×500 at the page center;
  `.calendar-container` = white 500×500, EXACTLY overlapping the pink box
  (top/left identical — no pink frame visible around the card); `.events-container`
  transparent, positioned DIRECTLY below the card (top = card bottom); the
  empty-state `.event-card` = `#fc7fb2`, width 500, radius 4px, white text,
  NO red border-left (computed `0px none` — the `!important` override
  confirmed); `#add-button` = `#fc7fb2`, radius 25px, absolute
  right/bottom 20px of the card; `.active-month` color `#fc7fb2`; the year
  label "2026"; the active date = the 15th (real today) with white text on
  the pink circle; bar text "There are no events planned for August 15."
- **Section order (1:1 from the reference render):** single widget — title
  → year header (chevrons + year) → month strip → weekday header → date
  grid → Add Event button → events panel → (Component Dock footer appended
  per repo convention).
- **December 2020 layout facts (for the initial render):** 1 December 2020
  was a **Tuesday** → the grid's first row has two leading blank cells (Sun,
  Mon) followed by 1–5; **18 December 2020 was a Friday** (the screenshot's
  circled date); 31 December 2020 was a Thursday → the month occupies 5 full
  rows (27–31 end row 5) plus a 6th row with two trailing blank cells
  (Fri, Sat) — 37 cells total (`35 + firstDay` with firstDay = 2), 6 rows.
  Adjacent months for nav scenarios: November 2020 — 30 days, 1 Nov was a
  Sunday (no leading blanks); January 2021 — 31 days, 1 Jan was a Friday
  (five leading blanks Sun–Thu).
- **Copy is fixed and minimal:** "Calendar #08" (title — keep the `#08`
  suffix source-exact), the year numeral, `Jan..Dec` month abbreviations,
  `Sun..Sat` day abbreviations, "Add Event", "There are no events planned
  for <Month> <day>.", dialog copy ("Add New Event", "Event name", "Number
  of people to invite", "Cancel", "OK"), event cards ("<name>:", "<n>
  Invited"). No lorem, no other body text.

## Design tokens

### Colors

Palette (extracted from the live preview stylesheet `css/style.css` custom
rules + the live render computed styles — the current ground truth; the
2020-era screenshot and the live render agree on all values):

| Token           | Hex                     | Usage                                                                                                                          |
| --------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| brand pink      | `#fc7fb2`               | active-month text, active-date circle, event-date fill + border, Add Event button, dialog bg, event cards, chevron/month hover |
| page background | `#f8f9fd`               | very light grey-blue page bg around the widget (rendered value; screenshot ≈`#f4f6f8`)                                         |
| card background | `#ffffff`               | white calendar card                                                                                                            |
| ink             | `#000000`               | title, year, weekday header, Cancel button bg                                                                                  |
| date text       | `#2b2b2b`               | date numbers in the grid                                                                                                       |
| muted grey      | `#cccccc`               | chevron icons, inactive month labels                                                                                           |
| event dot       | `#ffc107`               | amber 10px dot on event dates (1px white border)                                                                               |
| on-accent text  | `#ffffff`               | active-date number, button labels, dialog text, event cards                                                                    |
| dialog label    | `rgba(255,255,255,0.9)` | dialog field labels                                                                                                            |
| dialog border   | `rgba(255,255,255,0.2)` | dialog input outlines (solid white on focus)                                                                                   |
| event text      | `#ffffff`               | event-card name/count text (source uses `#fc7fb2` for count — pink-on-pink bug; render white)                                  |
| error           | `#ff1744` (recommended) | form validation error indication (source's `#fc7fb2` is invisible on the pink dialog — documented deviation)                   |

No gradients, no photography, no card shadow — the design is flat
white-plus-pink-plus-amber, with ONE brand pink used everywhere.

### Fonts

- **Lato** (weights 300/400/700) — the reference page's inline head loads
  Lato via Cloudflare cf-fonts (the sibling Calendar preps use the same
  family); body font-family per the stylesheet is Bootstrap's system stack.
  Load Lato via Google Fonts `<link>` in `index.html` for the page; the
  widget's own rule is `font: 13px Helvetica, Arial, sans-serif`
  (`.calendar-container`) — a single Lato face for the widget is an
  acceptable simplification (note in PR).
- Title "Calendar #08": 28px, weight 400, near-black, centered.
- Year label: 20px, weight 400, near-black, centered (line-height 40px).
- Month cells: 11px, weight 400, uppercase, `#cccccc` (active: bold 700,
  pink).
- Weekday header: 10px, uppercase, near-black.
- Date numbers: 15px, weight 400, `#2b2b2b`.
- Button: 1rem, white, weight 400 (no text-transform in the source).
- Dialog header: 28px, white, centered.
- Dialog labels: 13px, uppercase, `letter-spacing: 1px`,
  `rgba(255,255,255,0.9)`.
- Event text: 1rem, white.

### Radii / shapes

- **Date cells** = full circle (`border-radius: 50%`); the active-date
  circle is a fixed **40px** circle (`:before`) vertically centered behind
  the number; the event-date cell is a solid pink FILL (radius 50%) with a
  10px amber `#ffc107` dot (1px white border) at its top-left corner.
- Buttons (Add Event / Cancel / OK): pill, `border-radius: 25px`, padding
  `0.65rem 1.9rem`; hover scale(1.03), press `translateY(3px) scale(0.97)`.
- Event cards: `border-radius: 4px`.
- Dialog inputs: `border-radius: 40px`.
- No card shadow, no other radii.

### Layout

- Page: `#f8f9fd` background; the widget column is centered horizontally
  with `padding: 7em 0` (~`py-28`).
- Widget column: `max-width: 500px`, `margin: 20px auto`. The recreation
  SHALL NOT fix a 500px height (the source's `.content { height: 500px;
overflow: none }` is a quirk — the pink frame is fully covered by the
  white card; the visible layout is just: white card on top, pink event
  cards below).
- White card: white bg, `padding: 20px` (drop to 0 below `lg` per the
  source's media queries), full column width.
- Year header: 40px tall, `margin-top: 20px`, centered; chevrons
  absolutely positioned at the row's left/right edges (28px hit targets,
  14px icons, grey → pink on hover).
- Month strip: one row of 12 equal cells (`padding-top: 10px` on each).
- Weekday header + grid: `border-collapse: separate`, centered; 7 equal
  columns; date cells ~46px tall (`26px + 2×10px padding`), numbers
  centered; leading/trailing blank cells render empty and are NOT
  clickable.
- Add Event button: absolute, `right: 20px; bottom: 20px` of the card
  (sits below the grid rows; the grid occupies ~440px of the 500px card).
- Events panel: directly below the card, full width; pink cards stack
  flush (`margin: 0`), each `padding: 20px 0`; no fixed height/scroll (the
  source's 500px scroll container is a quirk — natural height, responsive).
- Dialog: absolute overlay covering the entire widget area (`inset: 0`),
  pink bg, `z-index` above everything; header margin `20px/30px`, form
  content centered with `margin-top: 20%`; inputs 300px wide / 40px tall,
  centered text.
- Reference is a desktop widget; the recreation SHALL be responsive:
  card padding 0 below `lg`, 7 grid columns preserved at all widths (cells
  shrink), month font shrinks (8px ≤991px / 10.5px ≤767px per source), no
  horizontal overflow.

## Requirements

### Requirement: Page structure

The system SHALL render the Sakura page as a single centered
calendar-with-events widget on the `#f8f9fd` background, with a minimal
footer appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Sakura page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** a white calendar card SHALL be centered horizontally (max-width
  500px) with generous vertical padding (`py-28` equivalent)
- **AND** the page SHALL contain, in order: the title **"Calendar #08"**,
  the white card (year header → month strip → weekday header → date grid →
  Add Event button), the events panel, and the footer
- **AND** there SHALL be no navbar, no hero, and no other sections
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #08"** centered above
the calendar card.

#### Scenario: Title render

- **GIVEN** the Sakura page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #08"** (source-exact, including
  the `#08` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, near-black, sans-serif, 28px

### Requirement: Year header

The system SHALL render a year header row at the top of the white card: the
viewed year centered in dark 20px text with grey chevron buttons at the
row's edges that navigate YEARS (this template's chevrons change the year,
NOT the month).

#### Scenario: Initial year render

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user views the top of the card
- **THEN** the year **"2020"** SHALL render centered, 20px, near-black
- **AND** a chevron-left icon (`#cccccc`, 14px, hover → `#fc7fb2`) SHALL
  render at the row's left edge
- **AND** a chevron-right icon (`#cccccc`, 14px, hover → `#fc7fb2`) SHALL
  render at the row's right edge

#### Scenario: Next year

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user clicks the right chevron
- **THEN** the year SHALL read **"2021"**
- **AND** the grid SHALL re-render December 2021 (1 December 2021 was a
  Wednesday → three leading blank cells Sun–Tue)

#### Scenario: Previous year

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user clicks the left chevron
- **THEN** the year SHALL read **"2019"**
- **AND** the grid SHALL re-render December 2019 (1 December 2019 was a
  Sunday → no leading blank cells)

- **AND** both chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous year" / "Next year" and a visible `focus-visible`
  ring

### Requirement: Month strip

The system SHALL render a 12-cell month strip (`Jan`–`Dec`, uppercase
abbreviations) below the year; the viewed month is bold pink, hover turns
pink, clicking switches the viewed month.

#### Scenario: Initial month strip

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user views the month strip
- **THEN** 12 cells SHALL read `Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov
Dec` in order
- **AND** each cell SHALL render uppercase, 11px, `#cccccc`
- **AND** the **Dec** cell SHALL render bold 700 in pink `#fc7fb2`

#### Scenario: Month hover

- **GIVEN** the Sakura page is rendered
- **WHEN** the user hovers an inactive month cell
- **THEN** the cell text SHALL turn pink `#fc7fb2`

#### Scenario: Switch month

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user clicks the **Nov** cell
- **THEN** the grid SHALL re-render November 2020 (30 days; 1 November 2020
  was a Sunday → no leading blank cells)
- **AND** the **Nov** cell SHALL become the bold pink active month
- **AND** the **Dec** cell SHALL return to grey `#cccccc`

### Requirement: Calendar grid

The system SHALL render the viewed month as a `35 + firstDay`-cell grid (6
rows × 7 columns) with a weekday header, blank leading/trailing cells, the
active-date circle, and event-date styling.

#### Scenario: December 2020 initial grid

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user views the grid
- **THEN** the weekday header SHALL read `Sun Mon Tue Wed Thu Fri Sat`
  (uppercase via CSS, 10px, near-black, 7 equal columns)
- **AND** the grid SHALL render 6 rows of 7 cells
- **AND** the first row SHALL have two blank cells (Sun, Mon — 1 December
  2020 was a Tuesday) followed by 1–5
- **AND** days 1–31 SHALL render centered, 15px, `#2b2b2b`
- **AND** the 37th–42nd cells (after 31: the 6th row's Fri/Sat) SHALL
  render blank
- **AND** the date **18** SHALL render as white text on a solid `#fc7fb2`
  pink 40px circle (the reference "today" — the screenshot's capture date;
  recreated as a FIXED reference today so the initial render matches the
  screenshot 1:1)
- **AND** no date SHALL carry an amber event dot (the reference December
  2020 view has no events — matches the screenshot)
- **AND** blank cells SHALL NOT be clickable

#### Scenario: Event-date styling

- **GIVEN** the Sakura page is rendered viewing a month that contains a
  seeded event date (e.g. May 2020 — the reference's own seed month)
- **WHEN** the user views that date's cell
- **THEN** the cell SHALL render as a solid pink `#fc7fb2` fill with white
  text
- **AND** a 10px amber `#ffc107` dot with a 1px white border SHALL render
  at the cell's top-left corner

### Requirement: Date selection

The system SHALL let the user select a date: clicking moves the pink circle
and updates the events panel to that date.

#### Scenario: Click to select

- **GIVEN** the Sakura page is rendered with the reference view (December 2020)
- **WHEN** the user clicks the date 5
- **THEN** a solid `#fc7fb2` pink 40px circle SHALL appear behind 5 with
  white text
- **AND** the events panel SHALL show **"There are no events planned for
  December 5."**
- **AND** clicking another date SHALL move the circle and update the panel
  text to that date

### Requirement: Events panel

The system SHALL render the events panel directly below the white card: a
stack of flush pink cards showing the active date's events, or the
empty-state card.

#### Scenario: Empty state

- **GIVEN** the Sakura page is rendered with the reference view (December 2020) and the active date has no events
- **WHEN** the user views the events panel
- **THEN** a single pink `#fc7fb2` card (radius 4px, padding 20px 0) SHALL
  render below the white card
- **AND** the card SHALL read **"There are no events planned for December
  18."** in white 1rem text (the bar text SHALL always match the active
  date — the screenshot's "19" is a capture artifact, do NOT reproduce it)

#### Scenario: Events list

- **GIVEN** the Sakura page is rendered viewing a date that has seeded
  events
- **WHEN** the user views the events panel
- **THEN** one pink card SHALL render per event: the event name followed by
  a colon, then the invited count and "Invited" (e.g. **"Product review:
  6 Invited"**), all in white text
- **AND** cards SHALL stack flush (`margin: 0`) with no gaps

### Requirement: Add Event dialog

The system SHALL provide an "Add Event" flow: the pink pill button opens a
full-widget pink dialog with name/count fields; validation blocks invalid
submission; OK adds the event to the active date.

#### Scenario: Open dialog

- **GIVEN** the Sakura page is rendered
- **WHEN** the user clicks the **Add Event** button
- **THEN** a pink `#fc7fb2` overlay SHALL cover the entire widget area
- **AND** the overlay SHALL show the header **"Add New Event"** (28px
  white, centered)
- **AND** a field labeled **"Event name"** with a text input (maxlength 36)
  SHALL render
- **AND** a field labeled **"Number of people to invite"** with a number
  input (min 0, max 1000000) SHALL render
- **AND** a black pill button **Cancel** and a white pill button **OK**
  SHALL render below the fields

#### Scenario: Cancel

- **GIVEN** the Add Event dialog is open
- **WHEN** the user clicks **Cancel**
- **THEN** the dialog SHALL close
- **AND** the events panel SHALL be visible again

#### Scenario: Validation — empty name

- **GIVEN** the Add Event dialog is open
- **WHEN** the user submits with an empty event name and a valid count
- **THEN** the name input SHALL show a visible error indication
- **AND** no event SHALL be added

#### Scenario: Validation — non-numeric count

- **GIVEN** the Add Event dialog is open
- **WHEN** the user submits a valid name with a non-numeric count
- **THEN** the count input SHALL show a visible error indication
- **AND** no event SHALL be added

#### Scenario: Add event

- **GIVEN** the Add Event dialog is open with the active date 18 December
  2020
- **WHEN** the user enters "Team standup" and 8 and clicks **OK**
- **THEN** the dialog SHALL close
- **AND** the grid cell 18 SHALL re-render with the event-date style (pink
  fill + amber dot)
- **AND** the events panel SHALL show a card reading **"Team standup: 8
  Invited"**

#### Scenario: Error clears on input

- **GIVEN** the Add Event dialog is open with an error on the name input
- **WHEN** the user types in the name input
- **THEN** the error indication SHALL clear

- **AND** the form fields SHALL have proper labels (no duplicate `id`s),
  and the Cancel/OK buttons SHALL be keyboard-focusable with
  `focus-visible` rings

### Requirement: Navigation persistence

The system SHALL preserve the day-of-month of the active date across month
and year navigation (the reference's `date.setMonth()`/`setFullYear()`
keep the day): the pink circle re-renders on the active day in every viewed
month (18 exists in every month, so the circle is always present unless the
user clicks another date).

#### Scenario: Day persists across month navigation

- **GIVEN** the Sakura page is rendered with the reference view (December
  2020, circle on 18)
- **WHEN** the user clicks **Nov** then **Dec** again
- **THEN** the circle SHALL render on **18** of November 2020 and then back
  on **18** of December 2020
- **AND** the events panel SHALL show each viewed date's events
  ("There are no events planned for November 18." → back to December 18)

#### Scenario: Day persists across year navigation

- **GIVEN** the Sakura page is rendered with the reference view (December
  2020, circle on 18)
- **WHEN** the user clicks the right chevron (year → 2021)
- **THEN** the circle SHALL render on **18** of December 2021

#### Scenario: Clicked date survives a round-trip

- **GIVEN** the Sakura page is rendered with the reference view (December 2020) and the user clicked date 5
- **WHEN** the user navigates to another month and back to December 2020
- **THEN** the circle SHALL render on **5** (the clicked date is kept, not
  reset to 18)

### Requirement: Responsive behavior

The system SHALL keep the calendar usable at all viewport widths (the
reference is a desktop widget; the recreation must not overflow on phones).

#### Scenario: Mobile layout

- **GIVEN** the Sakura page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the card SHALL span the full width with no padding
- **AND** the grid SHALL keep 7 columns with shrinking cells and no
  horizontal overflow
- **AND** the month cells SHALL shrink to ~10.5px text (source's ≤767px
  rule)
- **AND** the widget SHALL remain centered with reduced page padding

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Sakura page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimalist widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sakura`
- [ ] `scripts/verify-app.sh sakura` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #08" title → white
      card (year header → month strip → weekday header → grid → Add Event)
      → events panel → minimal Component Dock footer; `#f8f9fd` page bg, NO
      navbar/hero/other sections, NO card shadow
- [ ] Year header: centered dark year "2020", grey `#cccccc` chevrons at
      the row's edges (hover → pink), chevrons navigate YEARS (2021 / 2019
      scenarios verified with correct grids)
- [ ] Month strip: `Jan..Dec` 11px uppercase grey; "Dec" bold pink in the
      initial view; hover pink; click switches month (Nov 2020 = no leading
      blanks)
- [ ] Grid: `Sun..Sat` 10px uppercase header; 37-cell December 2020 grid (6
      rows; two leading blanks — 1 Dec 2020 was a Tuesday; 1–31 `#2b2b2b`
      15px; two trailing blanks), blanks NOT clickable
- [ ] Active-date circle: solid `#fc7fb2` 40px circle, white text, on **18**
      December 2020 (fixed reference today — screenshot 1:1); click moves
      it; day-of-month persists across month/year navigation; clicked date
      survives round-trips
- [ ] Events panel: flush pink cards below the card; empty state
      "There are no events planned for December 18." (text always matches
      the active date); event cards "<name>: <n> Invited" in white (NOT the
      source's pink-on-pink count color); NO red left stripe (source's
      `border: none !important` kills it — verified live)
- [ ] Event dates: solid pink fill + 10px amber `#ffc107` dot (1px white
      border) top-left; seeded sample events visible when navigating to
      their month (e.g. May 2020, like the source's own seed)
- [ ] Add Event dialog: pink full-widget overlay, "Add New Event" 28px
      white, Event name (text, maxlength 36) + Number of people (number,
      min 0 max 1000000) with proper `htmlFor` labels (no duplicate ids),
      black Cancel + white OK pills (radius 25px); validation errors
      visible (use `#ff1744`-class indication — the source's `#fc7fb2`
      error border is invisible on pink; documented deviation); error
      clears on input; OK adds the event (grid + panel update); Cancel
      closes
- [ ] Brand tokens in `@theme`, used via Tailwind classes: brand `#fc7fb2`,
      page `#f8f9fd`, ink `#000000`, date `#2b2b2b`, muted `#cccccc`, dot
      `#ffc107`; radii: circles `rounded-full` (40px), buttons `rounded-[25px]`,
      cards `rounded` 4px, inputs `rounded-[40px]`
- [ ] Font: Lato 300/400/700 via Google Fonts `<link>` in `index.html`
      (page font; widget 13px Helvetica/Arial per source, or Lato — note
      the simplification in the PR)
- [ ] Interactions functional (per the reference main.js): year chevrons
      (±1 year, correct grid re-render), month strip (switch month + active
      month moves), date click (circle + panel), Add Event (validation +
      add + re-render), Cancel/OK; no jQuery, no Bootstrap, no copied
      CSS/HTML — re-implemented with Tailwind tokens; no ColorLib strings
      anywhere in `apps/sakura`
- [ ] A11y: chevrons `aria-label` "Previous year"/"Next year"; month cells
      and date cells are buttons with accessible labels ("December 2020",
      "18 December 2020"); Add Event / Cancel / OK are real buttons with
      `focus-visible` rings; dialog fields labeled
- [ ] Responsive: card padding 0 below `lg`, 7 columns preserved, no
      horizontal overflow at ≤480px, month font shrinks, widget centered
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` reused where they fit
- [ ] No localStorage/sessionStorage used (no MemoryStorage polyfill needed)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Calendar 08" row, line
      692 — Bootstrap Calendars (20) category; single row, no dups)
