# Timescape (ColorLib Calendar 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-timescape`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 19" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-19/). Single occurrence
  in TEMPLATES.md (line 703, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Timescape** (series renames so far:
  chronos, metronome, kalends, span, equinox, interval, lunar, epoch, dyad).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-19/`
  — HTTP 200, tiny 14.5KB DOM (no nav, no footer, no images). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/calendar-19/` 404s — the
  Bootstrap series is served under the `/theme/bootstrap/` prefix; the
  demo's page title is "Calendar #9" (series numbering is inconsistent).
  `js/main.js` is an EMPTY jQuery stub — the real init is an inline script
  creating a FullCalendar instance.
- **What this demo IS:** a FullCalendar v4 MONTH-GRID EVENT CALENDAR
  (dayGrid plugin only) — the event-calendar variant of the series. It is
  NOT a date picker (that was dyad/calendar-18 and the other picker demos).
  Distinctive features vs the rest of the series:
  - Events rendered as salmon-pink bars on a month grid (12 events, Feb 2020).
  - `editable: true` → event bars are draggable/resizable.
  - `eventLimit: true` → "+N more" overflow link + click popover.
  - Toolbar: title + "today"/prev/next ONLY (no week/day view switcher).
  - `defaultDate: '2020-02-12'`, `plugins: ['interaction', 'dayGrid']`.
- **Screenshot:** `calendar-19.jpg` (1200×972 AVIF, converted + pixel-sampled
  - viewed in browser) — very light grey page (`#efefef`), one white rounded
    card on a soft drop shadow, toolbar "February 2020" + salmon-pink today/
    arrows, weekday header Sun…Sat, 7-col grid with faint `#f9f9f9` borders,
    salmon-pink event bars (white text), blue "+5 more" under Feb 12's events,
    adjacent-month numbers faint. No other page furniture.
- **Live interaction verified end-to-end (browser):**
  - "today" button from Feb 2020 → jumps to August 2026; the today cell
    renders with background `rgb(64, 224, 208)` = **#40e0d0** turquoise
    (confirmed via computed style — NOT the pink used in the picker demos).
  - Feb 12 cell shows "7a Birthday Party" + "+5 more"; clicking the link
    opens a white popover (`box-shadow: 0 2px 6px rgba(0,0,0,.15)`) listing
    Conference, 10:30a Meeting, 12p Lunch, 2:30p Meeting, 5:30p Happy Hour,
    8p Dinner (6 events total that day).
  - Prev/next navigate months (title + grid update); the demo's defaultDate
    is Feb 2020 (leap year, starts Saturday → 6 rows, Jan 26–31 leading,
    Mar 1–7 trailing).
  - Event bar computed style: bg `#f67280`, border `1px solid #f67280`,
    radius 3px, font-size 13.6px (0.85em), white text; "+5 more" link color
    `#007bff`; weekday headers 16px weight 700 `#212529`; grid borders
    `1px solid #f9f9f9`.
- **Recreation notes:** pure-React month grid — no FullCalendar, no jQuery,
  no Bootstrap. Use lucide-react ChevronLeft/ChevronRight/X for the icon
  glyphs. No images anywhere in the source DOM (icons are the embedded
  `fcicons` font) → recreation needs zero placeholder images. Event data can
  be paraphrased but keep the same kinds (all-day, multi-day, timed with
  `h:mma` prefix, repeating, linked).
- **Closest sibling to copy:** no prior prep is an event calendar. The
  picker demos (chronos…dyad) share the tokens/card/page shell but NOT the
  month-grid-with-events logic. Scaffold from the simplest existing app
  (e.g. `apps/chronos` or any minimal app) for the repo plumbing; build the
  calendar grid + events from scratch. (Check `apps/` for the simplest
  sibling at implementation time.)

## Design tokens (from `css/style.css` + FullCalendar `main.css` + live computed styles)

| Token               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| Brand / events      | `#f67280` salmon pink (event bars, toolbar buttons)                                                       |
| Today highlight     | `#40e0d0` turquoise (`td.fc-today` background)                                                            |
| Page bg             | `#efefef` very light grey                                                                                 |
| Card bg             | `#ffffff`, padding 30px                                                                                   |
| Card shadow         | `0 15px 30px 0 rgba(0,0,0,0.2)`                                                                           |
| Text                | `#212529` (title, headers, day numbers, event text)                                                       |
| Grid borders        | `1px solid #f9f9f9` (faint light grey)                                                                    |
| Adjacent-month nums | `opacity: 0.3` (faint)                                                                                    |
| Toolbar title       | 28px, weight 500, `#212529`, left-aligned                                                                 |
| Toolbar buttons     | `#f67280` bg + border, `#fff` text, radius 4px, padding `.375rem .75rem`, focus ring `rgba(76,91,106,.5)` |
| Weekday headers     | 16px, weight 700, `#212529`                                                                               |
| Event bars          | `#f67280` bg + 1px border, `#fff`, radius 3px, `.85em` (13.6px), margin `1px 2px 0`, padding `0 1px`      |
| Timed event prefix  | lowercase `h:mma` — "10:30a", "12p", "2:30p", "5:30p", "8p", "7a"                                         |
| "+N more" link      | `#007bff` blue, `.85em`, underline on hover                                                               |
| More popover        | `#fff` bg, `box-shadow: 0 2px 6px rgba(0,0,0,0.15)`                                                       |
| Font                | Roboto (300/400/500/700 via Google Fonts link)                                                            |
| Section padding     | `7rem 0` (Tailwind `py-28`)                                                                               |
| Card width          | `max-width: 900px`, centered (`mx-auto`)                                                                  |

## Implementation tasks (in order)

1. **Scaffold** — `cp -r apps/<simplest-sibling> apps/timescape`; rename
   package to `@free-react-templates/timescape` in package.json;
   `public/CNAME` = `timescape.free.componentdock.com`; homepage =
   `https://timescape.free.componentdock.com`; register workspace
   (`npm install --package-lock-only`).
2. **Theme** — index.css `@theme`: `--color-brand: #f67280;` and
   `--color-today: #40e0d0;`; neutral greys via Tailwind defaults; index.html:
   Google Fonts Roboto 300/400/500/700 link; remove any copied assets.
3. **Calendar core** — pure-React month grid:
   - `CalendarGrid` component: given `viewDate` (year+month) + event list,
     compute the 7-col grid (first-day weekday Sunday-start, days-in-month,
     leading/trailing adjacent-month days, 5–6 rows).
   - Day cell: day number floated right, `#f9f9f9` borders, today cell
     `#40e0d0` bg, adjacent-month `opacity: 0.3`.
   - Event bar: `#f67280`, white text, radius 3px, `.85em`, timed prefix
     `h:mma` lowercase helper (e.g. `10:30` → "10:30a", `12:00` → "12p").
   - Multi-day events: render a bar on every spanned day.
4. **Toolbar** — title "<Month> <Year>" + "Today" text button +
   ChevronLeft/ChevronRight icon buttons (aria-labels); month navigation
   with year rollover; "Today" resets to the current month (clock-aware).
5. **Events data** — static typed `Event[]` (title, start, end?, groupId?,
   allDay?, url?), paraphrasing the Feb 2020 demo set; keep the same kinds
   (all-day, long multi-day, repeating ×2, conference multi-day, 5 timed on
   Feb 12, birthday, linked "Click for Google").
6. **Overflow** — per-day event limit (e.g. 4 bars) → "+N more" link
   (`#007bff`, `.85em`); click opens a dismissible popover (white, shadow)
   listing the hidden events with time prefixes.
7. **Interactions** — click event with `url` opens it in a new tab;
   drag-and-drop an event bar onto another day updates its date (HTML5
   drag or pointer events; keep it simple + tested).
8. **Tests** — grid math (Sunday-start, Saturday-start, 5-row vs 6-row,
   leap February 2020, Dec→Jan / Jan→Dec rollover), toolbar navigation,
   today button + `#40e0d0` highlight (mock clock), event rendering incl.
   multi-day spans + `h:mma` prefixes, "+5 more" overflow + popover open/
   dismiss, drag-to-move, footer link. 100% coverage required.
9. **Gate + ship** — `scripts/verify-app.sh timescape`; PR
   `feat/template-timescape` with source slug + preview URL + tokens + what
   differs (renames, placeholders, no FullCalendar); squash-merge
   immediately; bookkeeping `[x]` on TEMPLATES.md line 703 + surge URL
   `https://timescape.free.componentdock.com` + `npm run readme:status`.

## Verification checklist

- [ ] Live preview reachable at
      `https://preview.colorlib.com/theme/bootstrap/calendar-19/`
      (bootstrap prefix, NOT the standard path)
- [ ] Section order 1:1: card → toolbar (title + today/prev/next) →
      weekday header → month grid with events → footer
- [ ] Tokens: `#f67280`, `#40e0d0` today, `#efefef`, `#fff` card + 30px
      padding + shadow, `#212529`, `#f9f9f9` borders, Roboto, `py-28`,
      max-w-900 centered
- [ ] Events match the demo kinds (all-day, multi-day spans, `h:mma`
      timed prefixes, repeating, linked); Feb 12 shows "+5 more" popover
      with the hidden events
- [ ] Today cell `#40e0d0`; "Today" button jumps to current month
- [ ] Event bars draggable to other days; linked event opens in new tab
- [ ] No colorlib strings in app code; footer → componentdock.com
- [ ] `scripts/verify-app.sh timescape` green; 100% coverage
