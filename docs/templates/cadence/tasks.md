# Cadence (ColorLib Calendar 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cadence`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 20" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-20/). Single occurrence
  in TEMPLATES.md (line 704, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Cadence** (series renames so far:
  chronos, metronome, kalends, span, equinox, interval, lunar, epoch, dyad,
  timescape → cadence is next).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-20/`
  — HTTP 200, 14.9KB DOM (no nav, no footer, no images). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/calendar-20/` 404s — the
  Bootstrap series is served under the `/theme/bootstrap/` prefix; the
  demo's page title is "Calendar #10" (series numbering is inconsistent).
  `js/main.js` is an EMPTY jQuery stub — the real init is an inline script
  creating a FullCalendar instance.
- **What this demo IS:** a FULL-SCREEN FullCalendar v4 EVENT CALENDAR with
  ALL FOUR view plugins — `dayGrid` (month, default), `timeGrid` (week +
  day), `list` (week list). It is the flagship multi-view calendar of the
  series, the full-screen successor to timescape (calendar-19, month-grid
  only, centered 900px card) and distinct from the date-picker demos
  (chronos…dyad). Distinctive features:
  - `#calendar-container`: `position: fixed; top: 0; left: 20px; right:
20px; bottom: 20px` — the sheet fills the viewport with a 20px gutter
    (Tailwind `fixed inset-x-5 top-0 bottom-5`). NOT a centered card.
  - Toolbar: `left: 'prev,next today'`, `center: 'title'` (CENTERED title —
    timescape's was left-aligned), `right: 'dayGridMonth,timeGridWeek,
timeGridDay,listWeek'` (view switcher; ACTIVE view = `#f67280`).
  - `defaultView: 'dayGridMonth'`, `defaultDate: '2020-02-12'`,
    `plugins: ['interaction', 'dayGrid', 'timeGrid', 'list']`,
    `height: 'parent'`, `navLinks: true`, `editable: true`,
    `eventLimit: true`.
  - Events: the SAME 12-event February 2020 dataset as timescape (All Day
    Event, Long Event, Repeating Event ×2, Conference, 5 timed events on
    Feb 12, Birthday Party, Click for Google).
- **Screenshot:** `calendar-20.jpg` (1024×829 JPEG, viewed in browser) —
  full-viewport calendar on `#efefef`; toolbar: prev/next + salmon "today"
  left, "February 2020" centered, month/week/day/list right with "month"
  active in salmon; 7-col month grid, faint `#f9f9f9` borders, salmon event
  bars (white text), "+3 more" under Feb 12's events (fewer visible than
  timescape's "+5 more" because the screenshot cell height differs — N is
  height-dependent, implement a sensible `eventLimit`). No other page
  furniture.
- **Live tokens (from `css/style.css` + FullCalendar `main.css`):**
  - Brand/event: `#f67280` (salmon pink) — events + nav/today buttons +
    ACTIVE view button.
  - Today highlight: `#40e0d0` (turquoise).
  - Page bg `#efefef`; text `#212529`; grid/list borders `#f9f9f9`.
  - Sheet: `#fff` + `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`.
  - Font: Roboto (300/400/500/700), body stack in style.css.
  - Buttons: `border-radius: .25em`, `padding: .4em .65em`, focus ring
    `0 0 0 .2rem rgba(76,91,106,.5)`; inactive view buttons transparent +
    `#212529`.
  - Event bars: radius 3px, font-size .85em, line-height 1.4, padding 4px.
  - "+N more": `#007bff`, .85em; popover `#fff` +
    `box-shadow: 0 2px 6px rgba(0,0,0,.15)`, width 220px.
  - Mobile <768px: toolbar stacks (block, centered, `.fc-center` 20px
    vertical margins).
- **Recreation notes:** pure-React calendar — no FullCalendar, no jQuery,
  no Bootstrap. Use lucide-react ChevronLeft/ChevronRight/X for the icon
  glyphs. No images anywhere in the source DOM → zero placeholder images.
  Event data can be paraphrased but keep the same kinds (all-day, multi-day,
  timed with `h:mma` prefix, repeating, linked).
- **Closest sibling to copy:** `apps/chronos` (Calendar 10, shipped) or
  `apps/timescape` (Calendar 19, shipped) for repo plumbing + the event
  calendar logic; cadence ADDS the week/day/list views, the view switcher,
  and the fixed full-screen container on top of timescape's month grid.
  Check `apps/` for the simplest app to scaffold from; build the calendar
  grid + views from scratch.

## Tasks (implementation outline)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/chronos`) to
   `apps/cadence`; rename package `@free-react-templates/cadence`; set
   `public/CNAME` = `cadence.free.componentdock.com` and `"homepage"` =
   `https://cadence.free.componentdock.com`; `npm install` at root so
   package-lock.json registers the workspace; `vite.config.ts` keeps
   `injectUiSource()`.
2. **Data model** — `src/calendar.ts`: `Event` type (`title`, `start`,
   `end?`, `allDay?`, `url?`, `groupId?`), the 12-event Feb 2020 dataset,
   date helpers (month grid matrix with adjacent-month fill, week/day
   ranges, `h:mma` formatter, leap-year awareness). Pure functions, TDD.
3. **Month view** — weekday header Sun…Sat; 7-col grid; day numbers
   floated right; adjacent-month 30% opacity; `#f9f9f9` borders; event bars
   `#f67280`; today cell `#40e0d0`; "+N more" overflow + popover (close
   button + outside click); drag-to-move; linked event opens new tab.
4. **Week + day views (timeGrid)** — 24h time axis, 7 day columns (week) /
   1 (day); timed events positioned by start/end; all-day lane on top.
5. **List view** — chronological rows of the current week's events (date
   headings + time + title).
6. **Toolbar** — prev/next/today (left), centered title, view switcher
   month/week/day/list (right, active = `#f67280`); nav links: day number
   → day view, weekday name → week view; year-boundary rollover; "Today"
   jumps to current month.
7. **Shell** — `#efefef` page bg, Roboto Google Fonts link in index.html,
   fixed full-screen sheet (`inset-x-5 top-0 bottom-5`, white, shadow),
   mobile toolbar stacking (<768px), minimal footer linking "Component
   Dock" → https://www.componentdock.com/.
8. **Tests** — scenario-style `it` blocks mirroring the spec Gherkin: all
   four views + switcher, nav + today (mocked clock via
   `vi.setSystemTime`), month-grid edge cases (Sunday/Saturday start,
   5-row vs 6-row, leap Feb 2020, Dec→Jan + Jan→Dec), multi-day spans +
   `h:mma` prefixes, "+N more" popover open/dismiss, drag-to-move, footer
   link. 100% coverage required.
9. **Gate + ship** — `scripts/verify-app.sh cadence`; PR
   `feat/template-cadence` with source slug + preview URL + tokens + what
   differs (renames, placeholders, no FullCalendar); squash-merge
   immediately; bookkeeping `[x]` on TEMPLATES.md line 704 + surge URL
   `https://cadence.free.componentdock.com` + `npm run readme:status`.

## Verification checklist

- [ ] Live preview reachable at
      `https://preview.colorlib.com/theme/bootstrap/calendar-20/`
      (bootstrap prefix, NOT the standard path)
- [ ] Section order 1:1: fixed full-screen sheet → toolbar (prev/next/
      today + centered title + month/week/day/list switcher) → active view
      (month grid / week time-grid / day time-grid / list) → footer
- [ ] Tokens: `#f67280`, `#40e0d0` today, `#efefef`, `#fff` sheet +
      `0 15px 30px 0 rgba(0,0,0,0.2)` shadow, `#212529`, `#f9f9f9` borders,
      Roboto, fixed inset-x-5 top-0 bottom-5 container
- [ ] Events match the demo kinds (all-day, multi-day spans, `h:mma`
      timed prefixes, repeating, linked); Feb 12 shows "+N more" popover
      with the hidden events
- [ ] Today cell `#40e0d0`; "Today" button jumps to current month
- [ ] View switcher: month (default) / week / day / list all render;
      active button `#f67280`; nav links work
- [ ] Event bars draggable to other days; linked event opens in new tab
- [ ] No colorlib strings in app code; footer → componentdock.com
- [ ] `scripts/verify-app.sh cadence` green; 100% coverage
