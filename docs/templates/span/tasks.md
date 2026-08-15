# Span (ColorLib Calendar 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-span`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 13" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-13/). Single occurrence
  in TEMPLATES.md (line 697, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Span** (a span of dates — keeps the
  date/calendar theme; direct sibling of Kalends = Calendar 12).
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-13/` — HTTP 200,
  13,425 bytes, `<title>Calendar #3</title>`. **Gotcha:** the unprefixed
  `https://preview.colorlib.com/theme/calendar-13/` 404s — the Bootstrap
  series is served under `/theme/bootstrap/` (same as Calendar 10/11/12).
- **Static DOM (the WHOLE page):** `.content` → `.container.text-left` →
  `.row.justify-content-center` → `.col-lg-7` → `<h2 class="mb-5 text-center">`
  "Calendar #3 (Date Range)" → `<form class="row">` → TWO `.col-md-6`
  `.form-group`s:
  1. `<label for="input_from">From</label>` +
     `<input type="text" class="form-control" id="input_from" placeholder="Start Date">`
  2. `<label for="input_to">To</label>` +
     `<input type="text" class="form-control" id="input_to" placeholder="End Date">`
     No navbar, no footer, no images, no icons. Scripts: jquery-3.3.1,
     popper, bootstrap.min, `picker.js`, `picker.date.js`, `main.js`.
- **Label quirk:** the h2 says "Calendar **#3** (Date Range)" although the
  slug is calendar-13 — the label is stale in the source (same quirk as
  Calendar 11's "#1" / Calendar 12's "#2"). Paraphrase as "Pick a Date
  Range". Do NOT reproduce the wrong number.
- **Same classic theme as Kalends (Calendar 12):** links
  `css/classic.css` + `css/classic.date.css` (pickadate **classic** theme),
  same accent palette (`#f78b65`/`#f2d1c5`/`#f5f5f5`), same popup SHELL:
  holder = the white box, `border: 1px solid #aaa` (top/bottom width 0
  until opened), `border-radius: 0 0 5px 5px`, `min-width: 176px;
max-width: 466px`, open shadow `0 6px 18px 1px rgba(0,0,0,.12)`, **NO
  dimmed backdrop**. Do NOT copy Metronome's (Calendar 11) default-theme
  values: shadow `0 12px 36px 16px rgba(0,0,0,.24)`, max-width 666px,
  backdrop `rgba(0,0,0,.32)`.
- **The RANGE logic (what makes this different from Kalends):** `main.js`
  wires the two pickadate instances:
  - From selected → `to_picker.set('min', from value)`; From cleared →
    `to_picker.set('min', false)`.
  - To selected → `from_picker.set('max', to value)`; To cleared →
    `from_picker.set('max', false)`.
    So From ≤ To is enforced; out-of-range days show as disabled cells.
    Recreation: shared state in a small `DateRangePicker` component; a
    `getMin/getMax` passed to each picker's grid.
- **The picker popup is NOT in the static HTML.** pickadate.js injects the
  whole popup (header, table, footer) at runtime. Recreation builds it as
  React state — a small date-grid component shared by both pickers. NO
  pickadate/jQuery/Bootstrap dependency; use `new Date()` + a tiny helper
  set (see tasks below).
- **Screenshot:** `calendar-13.jpg` (1200×972, viewed in browser) — flat
  minimalist: light-neutral page, centered heading "Calendar #3 (Date
  Range)", a row of TWO light-grey-bordered inputs — left "From" ("Start
  Date", inactive), right "To" ("End Date", FOCUSED with blue outline) —
  and a floating WHITE rounded popup anchored below the "To" input:
  "February 2021" header + black `<`/`>` triangles, grey Sun–Sat weekday
  row, day grid with faint grey out-of-month days, selected day 16 on
  salmon `#f78b65`, footer Today/Clear/Close. Visually identical to the
  Calendar 12 screenshot except the second input + stale label.

## Token cheat sheet

- Accent `#f78b65` (salmon) · hover `#f2d1c5` (peach) · page `#fff` ·
  text `#000` · muted `#999` · outfocus `#ddd` · disabled `#f5f5f5` ·
  input active border `#0089ec` · input border `#ced4da` · focus ring
  `rgba(0,123,255,.25)` · placeholder `#b3b3b3` · clear icon `#e20` ·
  close glyph `#777`.
- Font: Roboto (300/400/500/700) via Google Fonts link in index.html.
- Section `py-28`; column ≈58% on lg+ (col-lg-7), full width below; h2
  20px `mb-5`; inputs = Bootstrap 4 `.form-control` (radius `.25rem`),
  two `col-md-6` groups side-by-side on ≥768px; labels 12px `#000`
  `mb-2`-ish.

## Task outline (implementation order, TDD)

1. Scaffold `apps/span` from the simplest existing app (copy pattern; e.g.
   `apps/kalends` once shipped, else `apps/aurora`-style minimal):
   - package `@free-react-templates/span`, `public/CNAME` =
     `span.free.componentdock.com`, `homepage` =
     `https://span.free.componentdock.com`, `vite.config.ts` registers
     `injectUiSource()`.
   - index.html: `<title>Span</title>`, Google Fonts Roboto link.
   - jsdom 30 quirk: copy the `MemoryStorage` polyfill from
     `apps/cura/src/test/setup.ts` into `src/test/setup.ts` if the
     scaffold needs it.
2. Tests first (red), then implementation (green), 100% coverage:
   - `App` composes `<DateRangePage />` (section) — heading + two inputs +
     footer link.
   - `DateRangePicker` component: two inputs (From/To) with labels +
     placeholders; each opens its own picker on focus (input border
     `#0089ec`), closes on day select / Close / Esc / outside click; only
     one open at a time; range constraint shared state (From → To min,
     To → From max, clear lifts it).
   - `CalendarGrid` (shared by both pickers): month/year header + prev/next
     nav + 6×7 grid; weekday row Sun–Sat; out-of-month days `#ddd`;
     today triangle; hover `#f2d1c5`; selected `#f78b65` bg + white text;
     range-disabled cells `#f5f5f5`/`#ddd` not selectable.
   - Footer actions per picker: Today (jump + fill), Clear (empty + lift
     limit), Close (close).
   - Formatting helper: "d mmmm, yyyy" via `Intl.DateTimeFormat` or manual
     month-name array (deterministic tests with `vi.setSystemTime`).
   - All state via `useState` + `useEffect` for outside-click/Esc; cleanup
     in effects; no new dependencies.
3. Footer: "Component Dock" → https://www.componentdock.com/.
4. Verify: `npm run verify:app -- span` passes (typecheck + lint + knip
   - fallow + 100% coverage + build).
5. PR: `feat: Span — Date Range Picker widget template (ColorLib Calendar 13)`,
   squash-merge immediately; PR description cites source slug, preview URL,
   tokens, classic-vs-default shell difference, range logic, renames.
6. Post-merge bookkeeping: TEMPLATES.md `[ ]` → `[x]` + surge URL, `npm run
readme:status`, deploy via CI.

## Gotchas

- Use the `/theme/bootstrap/` preview prefix; the unprefixed URL 404s.
- Classic theme shell ≠ Metronome's default theme shell (border #aaa,
  shadow `0 6px 18px 1px rgba(0,0,0,.12)`, max-width 466px, no backdrop).
- The range constraint is the DIFFERENCE vs Kalends — do not ship two
  independent single pickers; the From/To limits must cross-constrain.
- Do not reproduce the stale "#3" label; paraphrase the heading.
- No ColorLib strings in app code; provenance only in spec/TEMPLATES/PR.
