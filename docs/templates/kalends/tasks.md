# Kalends (ColorLib Calendar 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kalends`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 12" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-12/). Single occurrence
  in TEMPLATES.md (line 696, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Kalends** (Roman calendar's first
  day — keeps the date/calendar theme, distinct from Metronome's
  timekeeping angle).
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-12/` — HTTP 200,
  13,024 bytes, `<title>Calendar #2</title>`. **Gotcha:** the unprefixed
  `https://preview.colorlib.com/theme/calendar-12/` 404s — the Bootstrap
  series is served under `/theme/bootstrap/` (same as Calendar 10/11).
- **Static DOM (the WHOLE page):** `.content` → `.container.text-left` →
  `.row.justify-content-center` → `.col-lg-3` → `<h2 class="mb-5 text-center">`
  "Calendar #2 (Date Picker)" → `<form>` → `.form-group` →
  `<input type="text" class="form-control" id="pick-date" placeholder="Pick A Date">`.
  No navbar, no footer, no images, no icons. Scripts: jquery-3.3.1,
  popper, bootstrap.min, `picker.js`, `picker.date.js`, `main.js`
  (`$('#pick-date').pickadate()` — default options, so the input format is
  the pickadate default "d mmmm, yyyy").
- **Label quirk:** the h2 says "Calendar **#2** (Date Picker)" although the
  slug is calendar-12 — the label is stale in the source (same quirk as
  Calendar 11's "#1"). Paraphrase as "Pick a Date". Do NOT reproduce the
  wrong number.
- **CRITICAL — classic theme, not default:** Calendar 12 links
  `css/classic.css` + `css/classic.date.css` (pickadate **classic** theme),
  whereas Calendar 11 (Metronome) used `default.css` + `default.date.css`.
  Same accent palette (`#f78b65`/`#f2d1c5`/`#f5f5f5`) but the popup SHELL
  differs:
  - classic: holder = the white box, `border: 1px solid #aaa` (top/bottom
    width 0 until opened), `border-radius: 0 0 5px 5px`,
    `min-width: 176px; max-width: 466px`, open shadow
    `0 6px 18px 1px rgba(0,0,0,.12)`, **NO dimmed backdrop**.
  - default (Metronome): shadow `0 12px 36px 16px rgba(0,0,0,.24)`,
    max-width 666px, backdrop `rgba(0,0,0,.32)`.
    When implementing, follow THIS spec's shell values — do not copy
    Metronome's. If the backdrop question comes up in review: classic theme
    has none; clicking outside closes the picker.
- **The picker popup is NOT in the static HTML.** pickadate.js injects the
  whole popup (header, table, footer) at runtime. Recreation builds it as
  React state — a small date-grid component. NO pickadate/jQuery/Bootstrap
  dependency; use `new Date()` + a tiny helper set (see tasks below).
- **Screenshot:** `calendar-12.jpg` (1200×972, viewed in browser) — flat
  minimalist: light-neutral page, centered heading "Calendar #2 (Date
  Picker)", one light-grey-bordered input ("Pick A Date"), and a floating
  WHITE rounded popup with subtle shadow: "February 2021" header + black
  `<`/`>` triangles, grey Sun–Sat weekday row, day grid with faint grey
  out-of-month days, selected day 16 on salmon `#f78b65` (with the coral
  today-triangle under the 16), footer Today/Clear/Close with small red
  accent icons. Visually the same as the Calendar 11 screenshot except the
  stale label.

## Token cheat sheet

- Accent `#f78b65` (salmon) · hover `#f2d1c5` (peach) · page `#fff` ·
  text `#000` · muted `#999` · outfocus `#ddd` · disabled `#f5f5f5` ·
  input active border `#0089ec` · input border `#ced4da` · focus ring
  `rgba(0,123,255,.25)` · placeholder `#b3b3b3` · clear icon `#e20` ·
  close glyph `#777`.
- Font: Roboto (300/400/500/700) via Google Fonts link in index.html.
- Section `py-28`; column ≈25% on lg+, full width below; h2 20px `mb-5`;
  input = Bootstrap 4 `.form-control` (radius `.25rem`).

## Task outline (implementation order, TDD)

1. Scaffold `apps/kalends` from the simplest existing app (copy pattern;
   e.g. `apps/metronome` if shipped, else `apps/aurora`-style minimal):
   - package `@free-react-templates/kalends`, `public/CNAME` =
     `kalends.free.componentdock.com`, `homepage` =
     `https://kalends.free.componentdock.com`, `vite.config.ts` registers
     `injectUiSource()`.
   - index.html: `<title>Kalends</title>`, Google Fonts Roboto link.
   - jsdom 30 quirk: copy the `MemoryStorage` polyfill from
     `apps/cura/src/test/setup.ts` into `src/test/setup.ts` if the
     scaffold needs it.
2. Tests first (red), then implementation (green), 100% coverage:
   - `App` composes `<DatePickerPage />` (section) — heading + input +
     footer link.
   - `DatePicker` component: opens on focus, closes on day select / Close /
     Esc / outside click; input border `#0089ec` while open.
   - `CalendarGrid` (or inline): month/year header + prev/next nav +
     6×7 grid; weekday row Sun–Sat; out-of-month days `#ddd`; today
     triangle; hover `#f2d1c5`; selected `#f78b65` bg + white text.
   - Footer actions: Today (jump + fill), Clear (empty), Close (close).
   - Formatting helper: "d mmmm, yyyy" via `Intl.DateTimeFormat` or manual
     month-name array (deterministic tests with `vi.setSystemTime`).
   - All state via `useState` + `useEffect` for outside-click/Esc; cleanup
     in effects; no new dependencies.
3. Footer: "Component Dock" → https://www.componentdock.com/.
4. Verify: `npm run verify:app -- kalends` passes (typecheck + lint + knip
   - fallow + 100% coverage + build).
5. PR: `feat: Kalends — Date Picker widget template (ColorLib Calendar 12)`,
   squash-merge immediately; PR description cites source slug, preview URL,
   tokens, classic-vs-default shell difference, renames.
6. Post-merge bookkeeping: TEMPLATES.md `[ ]` → `[x]` + surge URL, `npm run
readme:status`, deploy via CI.

## Gotchas

- Use the `/theme/bootstrap/` preview prefix; the unprefixed URL 404s.
- Classic theme shell ≠ Metronome's default theme shell (border #aaa,
  shadow `0 6px 18px 1px rgba(0,0,0,.12)`, max-width 466px, no backdrop).
- Do not reproduce the stale "#2" label; paraphrase the heading.
- No ColorLib strings in app code; provenance only in spec/TEMPLATES/PR.
