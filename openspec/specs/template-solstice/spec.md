# Template: Solstice (Calendar / Utility Widget — Single-Calendar Event Planner)

## Purpose

Solstice is a single-page interactive calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar 04" free template (source:
https://colorlib.com/wp/template/calendar-04/), built under a DIFFERENT name
(**Solstice** — a solstice is one of the two days of the year that anchor the
calendar, a semantic echo of the widget's date-keeping function; per the
monorepo naming mandate — never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **minimalist single-widget page**: no navbar, no hero, no
images, no other sections — one title plus a single interactive event-planner
widget on a very light grey-blue background (from the live reference DOM):

1. **Title** — **"Calendar #04"**, 28px near-black sans-serif, centered above
   the widget.
2. **The widget** (`div.content`, 790px max-width, fixed 500px tall, deep
   violet `#7e0cf5` background) split into two halves:
   - **Left — the calendar card** (`.calendar-container`, white, 50% width):
     - **Year header** (`.year-header`, 40px tall) — the current **year**
       (e.g. "2020") centered in 20px black, flanked by **chevron buttons**
       (`.left-button`/`.right-button`, Font Awesome `fa-chevron-left` /
       `fa-chevron-right`, 14px, light gray `#cccccc`, hover → violet
       `#7e0cf5`) that step the year ±1.
     - **Month strip** (`.months-table`) — all twelve months
       **Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec** in one row,
       uppercase 11px; the current month carries `.active-month` (bold black),
       idle months are light gray `#cccccc` (hover → magenta `#cd4dcc`);
       clicking a month re-renders the grid for that month.
     - **Weekday row** (`.days-table`) — **Sun Mon Tue Wed Thu Fri Sat**,
       uppercase 10px black.
     - **Date grid** (`.dates-table` → `.tbody`) — `35 + firstDay` cells
       (up to 6 rows × 7 columns), rows starting on Sunday; leading blank
       cells align the 1st of the month; each date is a **circle**
       (`border-radius: 50%`, 26px box) in dark gray `#2b2b2b`; hover draws a
       2px magenta `#cd4dcc` ring.
     - **Add Event button** (`button.button#add-button`, pill, violet
       `#7e0cf5` background, white text) — absolutely positioned at the
       card's bottom-right.
   - **Right — the events panel** (`.events-container`, transparent so the
     violet wrapper shows through, scrollable): renders one **white event
     card** per event of the selected date — `"<occasion>:"` +
     `"<N> Invited"` (violet); cancelled events show **"Cancelled"** in
     magenta with a 10px `#FF1744` red left border; dates with no events show
     a red-bordered card reading **"There are no events planned for <Month>
     <day>."**
   - **Dialog** (`.dialog`, black, right half of the widget, hidden by
     default) — the **"Add New Event"** form: "Event name" text input
     (maxlength 36) + "Number of people to invite" number input (0–1,000,000)
     - **Cancel** (magenta) / **OK** (white) buttons. The Add Event button
       opens it only when a date is selected; OK validates (name non-empty,
       count numeric) and adds the event, which then renders on the grid as a
       violet circle with a small green `#28a745` dot.
3. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **single-calendar event
planner**: a white calendar card + a violet events panel side by side inside
one fixed-height violet frame, TWO accent colors (deep violet `#7e0cf5` for
frame/buttons/events, magenta `#cd4dcc` for the active date, month hover and
Cancel), pill buttons, circular date cells, and a black slide-in dialog for
adding events. Flat design, no gradients, no photography. Recreate the widget
1:1 with matching tokens, typography, and interactions.

> NAMING NOTE: the ColorLib source name "Calendar 04" is FORBIDDEN as the
> app name. **Solstice** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-14: no
> `apps/solstice` on origin/main, no `template-solstice` spec, no `solstice`
> in `docs/templates/`, and zero `solstice` matches in TEMPLATES.md). Source
> slug + preview URL are recorded below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-04/` returns
> **HTTP 404** (verified 2026-08-14 via curl; the sibling "Calendar 03" prep
> Almanac established that the whole Calendar family lives under
> `/theme/bootstrap/`). The REAL live preview lives at
> **`https://preview.colorlib.com/theme/bootstrap/calendar-04/`** (HTTP 200).
> Full reference material was captured from the live preview 2026-08-14: the
> rendered DOM (`/tmp/cal04/preview-bootstrap.html`, ~5.7KB), the template
> stylesheet `css/style.css` (`/tmp/cal04/style.css`, ~225KB Bootstrap
> bundle; the template's own rules at the tail, lines ~8135–8486), and the
> interaction script `js/main.js` (`/tmp/cal04/main.js`, ~9.9KB vanilla
> jQuery). Design tokens below are extracted from the live stylesheet — the
> current ground truth. The TEMPLATES.md screenshot (`calendar-04.jpg`,
> 1200×972) was additionally analyzed (browser visual inspection, incl. a
> magnified grid crop) for the visual design and to pin the screenshot-date
> render (see Design reference).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 04". Listed in TEMPLATES.md under
  **Bootstrap Calendars (20)** (line 688). Free Bootstrap calendar widget
  template (author Colorlib; the screenshot renders December 2020 — the
  2020-era capture). The `calendar-04` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark). The 20-item Bootstrap Calendars
  category is a family: "Calendar 01" was prepped as **Planner**
  (`openspec/specs/template-planner/`), "Calendar 02" as **Monthly**
  (`openspec/specs/template-monthly/`), "Calendar 03" as **Almanac**
  (`openspec/specs/template-almanac/`) — this prep is the FOURTH of the
  family; each sibling gets its own prep. Unlike the siblings (Planner =
  single card + blue weekday bar; Monthly = two-panel green/white vertical
  card; Almanac = dual-calendar date-range picker), Calendar 04 is a
  **single-calendar event planner with an events list and an add-event
  dialog**.
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-04/`**
  (captured 2026-08-14, ~5.7KB HTML): `section.ftco-section` (padding 7em 0)
  → `.container` → `.row.justify-content-center` → `.col-md-6.text-center
.mb-5` → centered `h2.heading-section` **"Calendar #04"** → `.row` →
  `.col-md-12` → `div.content.w-100` (the violet frame) containing:
  - `div.calendar-container` → `div.calendar`:
    - `div.year-header` — `span.left-button.fa.fa-chevron-left#prev` ·
      `span.year#label` (JS-filled year) · `span.right-button.fa.fa-chevron-
right#next`
    - `table.months-table.w-100` → `tbody` → `tr.months-row` with twelve
      `td.month` (Jan…Dec)
    - `table.days-table.w-100` → seven `td.day` (Sun…Sat)
    - `div.frame` → `table.dates-table.w-100` → `tbody.tbody` (JS-filled)
    - `button.button#add-button` **"Add Event"**
  - `div.events-container` (JS-filled)
  - `div.dialog#dialog` (hidden) → `h2.dialog-header` **"Add New Event"** →
    `form#form` → `div.form-container` — `label.form-label` **"Event name"**
    - `input.input#name` (text, maxlength 36) · `label.form-label`
      **"Number of people to invite"** + `input.input#count` (number, min 0,
      max 1000000) · `input.button#cancel-button` **"Cancel"** ·
      `input.button.button-white#ok-button` **"OK"**
  - Scripts: jquery + popper + bootstrap + `js/main.js`.
- **Template stylesheet (css/style.css, ~225KB Bootstrap bundle; custom
  rules at the tail, lines 8135–8486) — tokens below extracted from the
  custom rules** (the ONLY authoritative token source):
  - `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; font-weight: normal; background: #f8f9fd; color: gray;
}` (no `min-width` crutch in this copy — the recreation must be responsive).
  - `a { transition: .3s all ease; color: #7e0cf5; }` ·
    `h1..h5 { line-height: 1.5; font-weight: 400; font-family: "Lato",
Arial, sans-serif; color: #000; }` · `.bg-primary { background: #7e0cf5
!important; }` · `.ftco-section { padding: 7em 0; }` ·
    `.heading-section { font-size: 28px; color: #000; }`
  - `.content { overflow: none; width: 100%; max-width: 790px; padding:
0px 0; height: 500px; position: relative; margin: 20px auto; background:
#7e0cf5; }` — the **fixed-height violet frame** (the events side shows
    through it).
  - `.events-container { overflow-y: scroll; height: 100%; width: 50%;
float: right; margin: 0px auto; display: inline-block; border-bottom-right-
radius: 3px; border-top-right-radius: 3px; }` (NO background — the violet
    frame shows through) · `@media (max-width: 767.98px) { width: 100%;
height: auto; }`
  - `.event-card { padding: 20px 0; max-width: 100%; display: block;
background: #fff; border: none !important; margin: 20px; margin-left: 12px;
}` · `@media (max-width: 991.98px) { margin: 10px; }` ·
    `@media (max-width: 767.98px) { margin: 0; background: #e6e6e6; }`
  - `.event-count, .event-name, .event-cancelled { display: inline;
padding: 0 10px; font-size: 1rem; }` · `.event-count { color: #7e0cf5;
text-align: right; }` · `.event-name { padding-right: 0; text-align: left;
}` · `.event-cancelled { color: #cd4dcc; text-align: right; }`
  - `.calendar-container { position: relative; margin: 0 auto; height:
100%; width: 50%; background: #fff; font: 13px Helvetica, Arial, san-serif;
display: inline-block; padding: 20px; float: left; }` ·
    `@media (max-width: 991.98px) { padding: 0; }` ·
    `@media (max-width: 767.98px) { padding: 0; width: 100%; }`
  - `.calendar { width: 100%; padding: 0; }` — note: NO min-width here, so
    the 7-column grid must shrink responsively.
  - `.year-header { background: #fff; height: 40px; text-align: center;
position: relative; color: #fff; border-top-left-radius: 3px; margin-top:
20px; }` · `.year-header span { display: inline-block; font-size: 20px;
line-height: 40px; color: #000; }`
  - `.left-button, .right-button { cursor: pointer; width: 28px; text-align:
center; position: absolute; color: #cccccc !important; transition: 0.3s;
font-size: 14px !important; }` · hover → `color: #7e0cf5 !important` ·
    `.left-button { left: 0; }` · `.right-button { right: 0; top: 0; }`
  - `.button { cursor: pointer; appearance: none; outline: none; font-size:
1rem; border-radius: 25px; padding: 0.65rem 1.9rem; transition: .2s ease
all; color: white; border: none; background: #7e0cf5; }` ·
    `.button.button-white { background: #fff; color: #000; }` ·
    `#cancel-button { background: #cd4dcc; }` · `#add-button { display:
block; position: absolute; right: 20px; bottom: 20px; }` ·
    `#add-button:hover, #ok-button:hover, #cancel-button:hover { transform:
scale(1.03); }` · `:active { transform: translateY(3px) scale(0.97); }`
  - `.days-table, .dates-table, .months-table { border-collapse: separate;
text-align: center; }`
  - `.day { height: 26px; width: 26px; padding: 0 10px; line-height: 26px;
border: 2px solid transparent; text-transform: uppercase; font-size: 10px;
color: #000; }`
  - `.month { cursor: default; height: 26px; width: 26px; padding: 0 2px;
padding-top: 10px; line-height: 26px; text-transform: uppercase; font-size:
11px; color: #cccccc; transition: all 250ms; }` ·
    `@media (max-width: 991.98px) { font-size: 8px; }` ·
    `@media (max-width: 767.98px) { font-size: 10.5px; }` ·
    `.active-month { font-weight: 700; color: #000; }` ·
    `.month:hover { color: #cd4dcc; }`
  - `.table-date { cursor: default; color: #2b2b2b; height: 26px; width:
26px; font-size: 15px; padding: 10px; line-height: 26px; text-align:
center; border-radius: 50%; border: 2px solid transparent; transition: all
250ms; position: relative; }` · `.table-date:not(.nil):hover { border-color:
#cd4dcc; }`
  - `.event-date { border-color: #7e0cf5; background: #7e0cf5; color: #fff;
}` · `.event-date:after { position: absolute; top: 0; left: 0; width: 10px;
height: 10px; border-radius: 50%; content: ''; background: #28a745; }` ·
    `.active-date { background: #cd4dcc; color: #fff; }` ·
    `.event-date.active-date { background: #7e0cf5; }`
  - `.dialog { z-index: 5; background: #000; position: absolute; width: 50%;
height: 500px; top: 0; right: 0; display: none; }` ·
    `@media (max-width: 767.98px) { width: 100%; }` ·
    `.dialog-header { margin: 20px; color: #fff; text-align: center;
font-size: 28px; }` · `.form-container { margin-top: 25%; }` ·
    `.form-label { text-transform: uppercase; font-size: 13px;
letter-spacing: 1px; color: rgba(255,255,255,0.9); }` ·
    `.input { border: none; background: none; border-bottom: 1px
rgba(255,255,255,0.2) solid; display: block; margin-bottom: 50px; width:
300px; height: 20px; text-align: center; transition: border-color 250ms;
color: #fff; }` · `.input:focus { outline: none; border-color: #fff; }` ·
    `.error-input { border-color: #cd4dcc; }`
- **Interaction script (js/main.js, ~9.9KB, vanilla jQuery) — behavior to
  reproduce:**
  - On load: `date = new Date()` (reference capture: December 2020), the
    month at `date.getMonth()` gets `.active-month`, `init_calendar(date)`
    builds the grid, and `show_events` renders the selected date's events.
  - `init_calendar`: clears `.tbody` + events container; computes
    `day_count` (days in month), `first_day = new Date(y, m, 1).getDay()`
    (Sunday=0); builds **`35 + first_day` cells** in rows that start on
    Sunday (`i % 7 === 0` starts a new row); cells with `i < first_day` or
    `day > day_count` are `.nil` blanks; the year label is set to the year.
  - The date matching the persisted day-of-month (`date.getDate()`, = **19**
    in the reference view) gets `.active-date` (magenta circle) if no
    active date exists yet, and its events are shown immediately.
  - Dates with events (in `event_data`) get `.event-date` (violet circle +
    green dot). Seed data: **10 May 2020** has 10 "Repeated Test Event" /
    120-invited events (6 cancelled, 4 active) and **11 May 2020** has one
    active "Test Event" / 120 invited — so in the May 2020 view, dates 10
    and 11 render as violet circles with green dots.
  - **Date click** (`date_click`): shows the events panel, hides the
    dialog, moves `.active-date` to the clicked cell, shows that date's
    events.
  - **Month click** (`month_click`): moves `.active-month`, sets the date's
    month (`setMonth(index)` — same year), re-inits the grid.
  - **Year nav** (`next_year`/`prev_year`): `setFullYear(±1)` (month and
    day preserved), re-inits; the year label updates via the grid build.
    (The original's `$("year").html(...)` is a typo'd no-op selector — the
    real update is `$(".year").text(year)` inside `init_calendar`; the
    recreation simply renders the view year.)
  - **Re-render quirk (faithful):** because `date.setMonth/setFullYear`
    preserve the day-of-month (19) and `date_click` does NOT persist the
    clicked day, every month/year re-render re-activates the 19th of the
    new view (if present). Documented as reference behavior; tests pin it.
  - **Add Event** (`new_event`): **no-op unless a date is active**; clears
    the inputs, hides the events panel, shows the dialog. Cancel hides the
    dialog and shows the panel. OK validates: empty name → `.error-input`
    on the name field; non-numeric count → `.error-input` on the count
    field; otherwise hide dialog, push `{occasion, invited_count, year,
month+1, day}` into `event_data`, `date.setDate(day)`, re-init (the new
    event's date now renders `.event-date` with the green dot and stays
    active).
  - `show_events`: no events → one card with `border-left: 10px solid
#FF1744` reading **"There are no events planned for <Month> <day>."**
    (e.g. "There are no events planned for December 19."); else one white
    card per event: `<occasion>:` + `<N> Invited` (violet); a cancelled
    event shows **"Cancelled"** (magenta) instead of the count and its card
    gets the `#FF1744` left border.
- **Screenshot analysis (calendar-04.jpg, 1200×972, browser visual
  inspection incl. magnified grid crop):** a browser window showing the
  widget on the very light cool-gray `#f8f9fd` background. Title
  **"Calendar #04"** centered in dark near-black. The widget: LEFT white
  calendar card and RIGHT solid violet panel (the `.content` frame showing
  through the transparent events container). The card shows year **"2020"**
  centered with faint `<` `>` chevrons, a faint Jan–Dec month strip, Sun–Sat
  day labels, and the December 2020 grid: **row 1 = blank, blank, 1, 2, 3,
  4, 5** (1 Dec 2020 = Tuesday → 2 leading blanks — verified against the
  real calendar math), dates 1–31, with **19 as a solid magenta-purple
  circle with white text** in the third row under SAT (19 Dec 2020 =
  Saturday ✓). At the card's bottom-right, a violet **pill "Add Event"
  button**. In the violet panel, one white card at the top reads **"There
  are no events planned for December 19."** (matches `show_events` with no
  seed events on that date); the rest of the panel is empty. No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).

## Design tokens

### Colors

Palette (extracted from the live preview stylesheet `css/style.css` — the
current ground truth):

| Token             | Hex / value             | Usage                                                                                                                          |
| ----------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| page background   | `#f8f9fd`               | very light grey-blue page bg around the widget                                                                                 |
| brand violet      | `#7e0cf5`               | the widget frame (`.content`) + links + buttons + event-date circles + event count + chevron hover + active-date-on-event-date |
| accent magenta    | `#cd4dcc`               | active date circle + month hover + Cancel button + "Cancelled" text + error-input border + date-cell hover ring                |
| card background   | `#ffffff`               | calendar card + event cards + OK (white) button                                                                                |
| ink               | `#000000`               | title, year label, active month, day labels, dialog text (white-on-black dialog uses #fff)                                     |
| date ink          | `#2b2b2b`               | date numbers in the grid                                                                                                       |
| idle gray         | `#cccccc`               | chevrons + idle month labels                                                                                                   |
| event dot         | `#28a745`               | 10px green dot on the top-left of event-date circles                                                                           |
| event alert red   | `#FF1744`               | 10px left border of empty/cancelled event cards                                                                                |
| dialog background | `#000000`               | the Add New Event dialog (right half of the frame)                                                                             |
| dialog label      | `rgba(255,255,255,0.9)` | form labels on the black dialog                                                                                                |
| dialog input line | `rgba(255,255,255,0.2)` | bottom border of the dialog inputs (focus → `#ffffff`)                                                                         |
| body copy         | `gray`                  | generic body text (little used on this page)                                                                                   |
| mobile event card | `#e6e6e6`               | event-card background below `767.98px`                                                                                         |

No gradients, no photography — flat design: white card + deep violet frame +
magenta accents, with pill buttons and circular date cells.

### Fonts

- **Lato** (weights 300/400/700) — the live stylesheet's page family
  (`font-family: "Lato", Arial, sans-serif`, served via Cloudflare cf-fonts
  in the original). Load via Google Fonts `<link>` in `index.html`. Used
  for: the title, the event cards, the dialog (labels, inputs, buttons).
- **Helvetica / Arial** — the calendar widget itself:
  `font: 13px Helvetica, Arial, san-serif` on `.calendar-container` (a
  system stack — no webfont needed; the recreation may keep a
  `Helvetica, Arial, sans-serif` stack for the year/month/day/date cells and
  Add Event button, which is what the original renders).
- Title "Calendar #04": 28px, weight 400, near-black, centered.
- Year label (`.year-header span`): 20px, `line-height: 40px`, near-black.
- Month cells (`.month`): 11px uppercase, `#cccccc` (active: 700 bold
  `#000`; hover `#cd4dcc`); responsive 8px ≤992px / 10.5px ≤768px.
- Day labels (`.day`): 10px uppercase, near-black.
- Date numbers (`.table-date`): 15px, `#2b2b2b`.
- Event cards (`.event-count/.event-name/.event-cancelled`): 16px (1rem).
- Dialog header: 28px white; labels: 13px uppercase, `letter-spacing: 1px`,
  `rgba(255,255,255,0.9)`.

### Radii / shapes

- **Date cells**: `border-radius: 50%` — circular day cells (26px box,
  `padding: 10px`, `line-height: 26px`, 2px transparent border → magenta
  `#cd4dcc` on hover). This is the signature shape of the template.
- **Buttons** (Add Event / Cancel / OK): `border-radius: 25px` — pill
  buttons, `padding: 0.65rem 1.9rem`, no border; hover `scale(1.03)`, active
  `translateY(3px) scale(0.97)`.
- **Frame corners**: `.content` has NO radius; its right-half children add
  `border-top-right-radius: 3px` + `border-bottom-right-radius: 3px`
  (events container) and the year header has `border-top-left-radius: 3px`.
- **Event dot**: 10×10px circle, `#28a745`, absolutely positioned at
  `top: 0; left: 0` of an event-date cell.

### Layout

- Page: `#f8f9fd` background; `section.ftco-section` `padding: 7em 0`
  (~`py-28`); title centered with `margin-bottom: 5` (Bootstrap `mb-5`).
- Widget frame (`.content`): `max-width: 790px`, fixed `height: 500px`,
  `margin: 20px auto`, `position: relative`, violet `#7e0cf5`; centered in
  the page.
- Inside the frame, two 50%-wide columns: `.calendar-container` (white,
  `padding: 20px`, `float: left`) and `.events-container` (transparent,
  `float: right`, `overflow-y: scroll`). Below `767.98px` both go full-width
  (`width: 100%`), the events container's height becomes `auto`, and the
  calendar's padding drops to 0.
- Calendar internals: year header 40px tall (chevrons absolutely positioned
  left: 0 / right: 0, 28px-wide hit areas, vertically centered); month strip
  and day row are 7-/12-column tables centered; date grid cells are 26px
  circles with `padding: 10px`.
- Add Event button: absolutely positioned `right: 20px; bottom: 20px` of the
  white card.
- Dialog: absolutely positioned `top: 0; right: 0`, `width: 50%; height:
500px` (100% width below `767.98px`), black; `form-container` pushed down
  `margin-top: 25%`; inputs 300px wide, centered, `margin-bottom: 50px`.
- Event cards: white, `margin: 20px` (12px left), `padding: 20px 0`;
  below `767.98px` margin 0 + `#e6e6e6` background.
- Reference is a desktop widget; the recreation SHALL be responsive: frame
  width scales down, the two halves stack below `md`/768px, the 7-column
  grid keeps its columns at all widths (cells shrink; no min-width in the
  original's `.calendar`), no horizontal overflow.

## Requirements

### Requirement: Page structure

The system SHALL render the Solstice page as a single centered event-planner
widget on the `#f8f9fd` background, with a minimal footer appended (repo
convention).

#### Scenario: Default render

- **GIVEN** the Solstice page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** the page SHALL contain, in order: the title **"Calendar #04"**, the
  widget frame, and the footer
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #04"** centered above
the widget frame.

#### Scenario: Title render

- **GIVEN** the Solstice page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #04"** (source-exact, including
  the `#04` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, near-black, sans-serif, 28px

### Requirement: Widget frame

The system SHALL render the widget as a fixed-height (500px) violet `#7e0cf5`
frame, max-width 790px, centered, holding the white calendar card (left half)
and the events panel (right half), with the add-event dialog layered over the
right half.

#### Scenario: Frame render

- **GIVEN** the Solstice page is rendered
- **WHEN** the user views the widget
- **THEN** a frame SHALL render centered with `max-width: 790px`, `height:
500px`, violet `#7e0cf5` background, and `margin: 20px auto`
- **AND** the left half SHALL be the white calendar card (`.calendar-
container`: white, 50% width, `padding: 20px`)
- **AND** the right half SHALL be the events panel (50% width, transparent
  background so the violet frame shows through, vertically scrollable)
- **AND** the dialog SHALL be hidden by default

### Requirement: Year header

The system SHALL render the current view year centered in the calendar card,
flanked by prev/next year chevrons.

#### Scenario: Initial year label

- **GIVEN** the Solstice page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the calendar header
- **THEN** the year label SHALL read **"2020"**, centered, 20px, near-black,
  in a 40px-tall header
- **AND** a chevron-left button SHALL sit at the header's left edge and a
  chevron-right button at the right edge, both 28px-wide hit targets with
  `#cccccc` icons (hover → violet `#7e0cf5`)

#### Scenario: Next year

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user clicks the right chevron
- **THEN** the year label SHALL read **"2021"** and the grid SHALL re-render
  for December 2021 (31 days; 1 Dec 2021 = Wednesday, 3 leading blanks)

#### Scenario: Previous year

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user clicks the left chevron
- **THEN** the year label SHALL read **"2019"** and the grid SHALL re-render
  for December 2019 (31 days)

- **AND** both chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous year" / "Next year" and a visible `focus-visible`
  ring

### Requirement: Month strip

The system SHALL render the twelve months Jan–Dec in one row; the view month
SHALL be bold black (`.active-month`), idle months light gray, and clicking a
month SHALL re-render the grid for that month (same year).

#### Scenario: Initial month strip

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user views the month strip
- **THEN** the strip SHALL list **Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov
  Dec** in order, uppercase, 11px
- **AND** **Dec** SHALL carry the active-month state (bold, near-black)
- **AND** all other months SHALL render `#cccccc` (hover → magenta `#cd4dcc`)

#### Scenario: Switch month

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user clicks **May**
- **THEN** **May** SHALL become the active month (bold black)
- **AND** the grid SHALL re-render May 2020 (31 days; 1 May 2020 = Friday,
  5 leading blanks)

### Requirement: Weekday row

The system SHALL render the weekday labels **Sun Mon Tue Wed Thu Fri Sat**
above the date grid.

#### Scenario: Day labels render

- **GIVEN** the Solstice page is rendered
- **WHEN** the user views the calendar card
- **THEN** seven day labels SHALL render in order **Sun Mon Tue Wed Thu Fri
  Sat**, uppercase, 10px, near-black, centered in 7 equal columns

### Requirement: Date grid

The system SHALL render the month's dates in a Sunday-starting grid of
`35 + firstDay` cells (up to 6 rows × 7 columns), with blank cells for the
days before the 1st and after the last day of the month.

#### Scenario: Reference grid (December 2020)

- **GIVEN** the Solstice page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the date grid
- **THEN** the grid SHALL contain 37 cells (2 leading blanks + 31 days + 4
  trailing blanks) in 6 rows
- **AND** row 1 SHALL read blank, blank, 1, 2, 3, 4, 5 (1 Dec 2020 =
  Tuesday)
- **AND** dates 1–31 SHALL render as circular cells (`border-radius: 50%`),
  15px, dark gray `#2b2b2b`
- **AND** blank cells SHALL render empty and SHALL NOT be clickable

#### Scenario: Hover state

- **GIVEN** the Solstice page is rendered
- **WHEN** the user hovers a date cell
- **THEN** a 2px magenta `#cd4dcc` ring SHALL appear around the cell
- **AND** blank cells SHALL NOT show the hover ring

### Requirement: Date states

The system SHALL render the active date (the reference "today") and
event-bearing dates with the reference's distinct states.

#### Scenario: Active date (reference today)

- **GIVEN** the Solstice page is rendered with the reference view
  (reference "today" = 19 December 2020)
- **WHEN** the user views the December 2020 grid
- **THEN** the date **19** SHALL render as a solid magenta `#cd4dcc` circle
  with white text (the `.active-date` state)
- **AND** the events panel SHALL show the empty-state card for that date
  (see "Events panel")

#### Scenario: Click a date

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user clicks the date **5** in the December grid
- **THEN** the cell 5 SHALL become the active date (magenta circle, white
  text) and 19 SHALL lose the active state
- **AND** the events panel SHALL re-render for December 5

#### Scenario: Event dates (seed data)

- **GIVEN** the Solstice page is rendered
- **WHEN** the user navigates to **May 2020** (click May)
- **THEN** dates **10** and **11** SHALL render as violet `#7e0cf5` circles
  with white text, each carrying a small 10px green `#28a745` dot at its
  top-left (the `.event-date` state)
- **AND** clicking **10** SHALL show its event cards (see "Events panel")

#### Scenario: Event date + active date

- **GIVEN** the Solstice page is rendered
- **WHEN** the user navigates to May 2020 and clicks the date **10**
- **THEN** the cell SHALL render as an event-date with the active-date
  background `#7e0cf5` (per `.event-date.active-date`, the violet wins over
  magenta)

#### Scenario: Re-render quirk (reference behavior)

- **GIVEN** the Solstice page is rendered with the reference view and the
  user has clicked the date **5** (active)
- **WHEN** the user clicks **May** (month change) and then **Dec**
- **THEN** the date **19** SHALL become active again in the December view
  (the reference re-activates the persisted day-of-month — 19 — on every
  re-render; `date_click` does not persist the clicked day)

### Requirement: Events panel

The system SHALL render one white event card per event of the selected date
in the right-hand panel; dates with no events SHALL show the empty-state
card.

#### Scenario: Empty state (reference view)

- **GIVEN** the Solstice page is rendered with the reference view
  (December 19 selected)
- **WHEN** the user views the events panel
- **THEN** exactly one card SHALL render reading **"There are no events
  planned for December 19."**
- **AND** the card SHALL have a 10px `#FF1744` red left border

#### Scenario: Events for a seeded date

- **GIVEN** the Solstice page is rendered
- **WHEN** the user navigates to May 2020 and clicks the date **11**
- **THEN** one card SHALL render reading **"Test Event:"** followed by
  **"120 Invited"** (violet)
- **AND** the card SHALL have a white background and NO red left border

#### Scenario: Mixed cancelled events

- **GIVEN** the Solstice page is rendered
- **WHEN** the user navigates to May 2020 and clicks the date **10**
- **THEN** 10 cards SHALL render, each reading **"Repeated Test Event:"**
- **AND** the 4 non-cancelled events SHALL show **"120 Invited"** (violet)
- **AND** the 6 cancelled events SHALL show **"Cancelled"** (magenta) instead
  of the count
- **AND** each cancelled-event card SHALL have the 10px `#FF1744` red left
  border (non-cancelled cards SHALL NOT)

### Requirement: Add Event dialog

The system SHALL open the black "Add New Event" dialog from the Add Event
button ONLY when a date is active, and SHALL add a validated event to the
calendar on OK.

#### Scenario: Add button without a selected date

- **GIVEN** the Solstice page is rendered with no date selected
- **WHEN** the user clicks **Add Event**
- **THEN** nothing SHALL happen (the dialog SHALL remain hidden — reference
  no-op)

#### Scenario: Open the dialog

- **GIVEN** the Solstice page is rendered with the reference view (19
  December 2020 active)
- **WHEN** the user clicks **Add Event**
- **THEN** the dialog SHALL render over the right half of the frame: black
  background, `width: 50%`, full frame height, `z-index` above the events
  panel
- **AND** the dialog SHALL show the header **"Add New Event"** (28px white),
  a label **"Event name"** with a text input (maxlength 36), a label
  **"Number of people to invite"** with a number input (0–1,000,000), a
  **Cancel** button (magenta `#cd4dcc`) and an **OK** button (white
  background, black text)
- **AND** both inputs SHALL be empty, borderless with a faint white bottom
  border, centered

#### Scenario: Cancel closes the dialog

- **GIVEN** the Add Event dialog is open
- **WHEN** the user clicks **Cancel**
- **THEN** the dialog SHALL close and the events panel SHALL be visible again

#### Scenario: Validation — empty name

- **GIVEN** the Add Event dialog is open
- **WHEN** the user clicks **OK** with the name left empty and count filled
- **THEN** the name input SHALL get the magenta `#cd4dcc` error border
- **AND** no event SHALL be added and the dialog SHALL stay open

#### Scenario: Validation — non-numeric count

- **GIVEN** the Add Event dialog is open
- **WHEN** the user clicks **OK** with a name filled and a non-numeric count
- **THEN** the count input SHALL get the magenta `#cd4dcc` error border
- **AND** no event SHALL be added and the dialog SHALL stay open

#### Scenario: Add a valid event

- **GIVEN** the Add Event dialog is open with the reference view (19
  December 2020 active)
- **WHEN** the user types "Team standup" and "8" and clicks **OK**
- **THEN** the dialog SHALL close
- **AND** the date **19** SHALL re-render as a violet event-date circle with
  the green `#28a745` dot (still active)
- **AND** clicking **19** SHALL show a card reading **"Team standup:"** +
  **"8 Invited"**

### Requirement: Year/month navigation

The system SHALL navigate years (±1 via chevrons) and months (via the month
strip) per the reference behavior, re-rendering the grid each time.

#### Scenario: Month navigation keeps the year

- **GIVEN** the Solstice page is rendered with the reference view
  (December 2020)
- **WHEN** the user clicks **Jan**
- **THEN** the grid SHALL re-render January 2020 (31 days; 1 Jan 2020 =
  Wednesday, 3 leading blanks) and the year label SHALL stay **"2020"**
- **AND** **Jan** SHALL become the active month

#### Scenario: Year navigation keeps the month

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user clicks the right chevron twice
- **THEN** the grid SHALL re-render December 2022 and the year label SHALL
  read **"2022"** (month preserved)

#### Scenario: Re-render re-activates the 19th

- **GIVEN** the Solstice page is rendered with the reference view
- **WHEN** the user navigates to a month that contains the 19th (e.g. May 2020)
- **THEN** the date **19** SHALL render as the active date in the new view
  (reference re-render behavior)

### Requirement: Responsive behavior

The system SHALL keep the widget usable at all viewport widths (the
reference is a desktop widget; the recreation must not overflow on phones).

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Solstice page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the calendar card and the events panel SHALL stack full-width
  (calendar on top, events below, each `width: 100%`)
- **AND** the dialog SHALL be `width: 100%`
- **AND** the date grid SHALL keep its 7 columns with shrinking cells and no
  horizontal overflow
- **AND** the month labels SHALL shrink (10.5px at ≤768px, 8px at ≤992px per
  the reference media queries)

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Solstice page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-solstice`
- [ ] `scripts/verify-app.sh solstice` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #04" title →
      violet frame widget → minimal Component Dock footer; `#f8f9fd` page
      bg, NO navbar/hero/images
- [ ] Frame: `max-w-[790px]`, fixed `h-[500px]`, violet `#7e0cf5`, centered;
      left half white calendar card (50%, padding 20px), right half
      transparent scrollable events panel (50%)
- [ ] Year header: "2020" centered 20px near-black in a 40px bar; chevrons
      (lucide `ChevronLeft`/`ChevronRight`, `#cccccc` → hover `#7e0cf5`,
      28px hit targets) step year ±1
- [ ] Month strip: Jan–Dec uppercase 11px, Dec active (bold `#000`), idle
      `#cccccc` hover `#cd4dcc`; clicking re-renders that month (same year)
- [ ] Weekday row: Sun–Sat, 10px uppercase near-black, 7 equal columns
- [ ] Grid: `35 + firstDay` cells, Sunday-start rows, blanks not clickable;
      December 2020 = 37 cells / 6 rows, row 1 = blank blank 1 2 3 4 5;
      circular cells (radius 50%, 15px `#2b2b2b`), hover 2px `#cd4dcc` ring
      (blank cells excluded)
- [ ] Date states: 19 Dec 2020 active (magenta `#cd4dcc` circle, white
      text); seed event dates 10/11 May 2020 = violet `#7e0cf5` circles +
      10px `#28a745` green dot; event+active = violet; re-render re-activates
      the 19th (reference quirk)
- [ ] Events panel: empty state "There are no events planned for December
      19." with `#FF1744` left border; May 11 → "Test Event:" + "120
      Invited"; May 10 → 10 "Repeated Test Event:" cards, 4 with "120
      Invited", 6 with "Cancelled" (magenta) + red border
- [ ] Add Event: no-op without an active date; dialog black right-half,
      "Add New Event" header, Event name + invite-count inputs, Cancel
      (magenta) / OK (white); validation (empty name / non-numeric count →
      `#cd4dcc` error border); valid add re-renders the date as an
      event-date with the green dot
- [ ] Brand tokens in `@theme`, used via Tailwind classes: violet `#7e0cf5`,
      magenta `#cd4dcc`, page `#f8f9fd`, date ink `#2b2b2b`, idle
      `#cccccc`, dot `#28a745`, alert `#FF1744`, dialog `#000000`; pill
      radius 25px; cell radius 50%
- [ ] Fonts: Lato 300/400/700 via Google Fonts `<link>` in `index.html`
      (page chrome); Helvetica/Arial system stack for the calendar widget
      (year/month/day/date cells + Add Event button, per the reference)
- [ ] Interactions functional: date click moves the active date + shows its
      events; month click re-renders; year chevrons ±1; add-event flow adds
      a working event
- [ ] A11y: chevrons `aria-label` "Previous year"/"Next year"; month strip
      buttons with accessible labels; date cells are buttons with accessible
      labels (e.g. "19 December 2020") and `aria-current="date"`/pressed
      state on the active date; dialog inputs have `<label htmlFor>`;
      `focus-visible` rings everywhere; events panel has an accessible
      region role
