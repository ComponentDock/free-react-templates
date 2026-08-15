# Equinox (ColorLib Calendar 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-equinox`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 14" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-14/). Single occurrence
  in TEMPLATES.md (line 698, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Equinox** (a calendar/date word;
  direct sibling of Kalends = Calendar 12 and Span = Calendar 13).
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-14/` — HTTP 200,
  13,006 bytes, `<title>Calendar #4</title>`. **Gotcha:** the unprefixed
  `https://preview.colorlib.com/theme/calendar-14/` 404s — the Bootstrap
  series is served under `/theme/bootstrap/` (same as Calendar 10–13).
- **Static DOM (the WHOLE page):** `.content` → `.container.text-left` →
  `.row.justify-content-center` → `.col-lg-3` → `<h2 class="mb-5 text-center">`
  "Calendar #4" → `<form class="row">` → `.col-md-12` → `.form-group`:
  1. `<label for="input_from">Select Date</label>` +
     `<input type="text" class="form-control" id="input">` (NO placeholder)
     No navbar, no footer, no images, no icons. Scripts: jquery-3.3.1,
     popper, bootstrap.min, `rome.js` (v2.1.22), `main.js`.
- **Label quirk:** the h2 says "Calendar **#4**" although the slug is
  calendar-14 — the label is stale in the source (same quirk as Calendar
  11's "#1" / 12's "#2" / 13's "#3"). Paraphrase as "Pick a Date". Do NOT
  reproduce the wrong number.
- **for/id quirk:** the label's `for="input_from"` does NOT match the
  input's `id="input"` — the label is not actually linked in the source.
  Recreation SHALL use a matching `for`/`id` pair (a11y fix).
- **DIFFERENT picker library than the siblings — do NOT copy pickadate
  values:** Calendar 12/13 use pickadate (classic theme, SQUARE selected
  day, footer Today/Clear/Close, `#f78b65` accent, shell border/shadow).
  Calendar 14 uses **rome** (`rome(input, { time: false })` — bevacqua/rome
  v2.1.22, "no jQuery"):
  - Floating WHITE popup `.rd-container`: `padding: 10px`, `text-align:
center`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`, **NO border** (the
    `border: 1px solid #333` is commented out in rome.css), **NO backdrop**.
  - Selected day = **CIRCLE** `#f67280` bg + white text
    (`border-radius: 50%`), 50×50px cells.
  - **NO footer buttons** (no Today/Clear/Close).
  - Month nav = `←`/`→` (`\2190`/`\2192` CSS `:before` content), no icons.
  - Weekday row: Su Mo Tu We Th Fr Sa (Sunday first, `weekdaysMin`).
  - Month label `MMMM YYYY` ("February 2021"); `monthsInCalendar: 1`.
  - Input value format: `YYYY-MM-DD` (date-only default).
  - `autoClose: true` (closes on day pick), `autoHideOnClick: true` (closes
    on outside click). No Esc handling in rome — don't invent one.
  - No min/max → nav always enabled, no disabled days (style `.rd-day-disabled`
    = `#fcc` anyway for the component).
- **Focus treatment DIFFERS from pickadate demos:** `style.css` strips the
  Bootstrap focus ring (`.form-control:focus { outline: none; box-shadow:
none }`) and rome adds no active-input class. So NO `#80bdff` border, NO
  blue ring, NO `#0089ec` active border. Keep focus minimal (subtle
  accessible outline at most).
- **Screenshot:** `calendar-14.jpg` (1200×972, viewed in browser) — flat
  minimalist: white page, centered "Calendar #4" heading, "Select Date"
  label + grey-bordered input in a narrow column, floating WHITE popup
  below: "February 2021" header + black `<`/`>` triangles, grey
  "Su Mo Tu We Th Fr Sa" row, day grid (faint grey out-of-month days, black
  current month), selected day 16 on a salmon-PINK `#f67280` **CIRCLE**
  with white text, NO footer buttons.

## Token cheat sheet

- Accent `#f67280` (salmon-pink, selected circle) · disabled `#fcc` ·
  out-of-month `#999` · page `#fff` · text `#000` · muted `#b3b3b3` ·
  input border `#ced4da` · input text `#495057` · popup shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`.
- Font: Roboto via Google Fonts link in index.html.
- Section `py-28`; column ≈25% on lg+ (col-lg-3), full width below; h2 20px
  `mb-5`; input = Bootstrap 4 `.form-control` (radius `.25rem`); label 12px
  `#000` `mb-2`-ish; rome popup padding 10px; day cells 50×50px.

## Task outline (implementation order, TDD)

1. Scaffold `apps/equinox` from the simplest existing app (copy pattern;
   e.g. `apps/kalends` or `apps/span` once shipped, else `apps/aurora`-style
   minimal):
   - package `@free-react-templates/equinox`, `public/CNAME` =
     `equinox.free.componentdock.com`, `homepage` =
     `https://equinox.free.componentdock.com`, `vite.config.ts` registers
     `injectUiSource()`.
   - index.html: `<title>Equinox</title>`, Google Fonts Roboto link.
   - jsdom 30 quirk: copy the `MemoryStorage` polyfill from
     `apps/cura/src/test/setup.ts` into `src/test/setup.ts` if the
     scaffold needs it.
2. Tests first (red), then implementation (green), 100% coverage:
   - `App` composes `<DatePickerPage />` (section) — heading + single input
     - footer link.
   - `DatePicker` component: one input (label "Select Date", no
     placeholder) that opens its own picker on focus/click (no active-input
     border change), closes on day select / outside click; value persists
     when closed without selection.
   - `CalendarGrid` (rome-style, NOT pickadate-style): month+year header
     `MMMM YYYY` + `←`/`→` nav (always enabled) + single-month grid;
     weekday row Su Mo Tu We Th Fr Sa; 50×50px cells; out-of-month days
     `#999`; selected day = CIRCLE `#f67280` bg + white text
     (`border-radius: 50%`); disabled-day style `#fcc` (unused by default).
   - NO footer buttons on the picker (unlike Kalends/Span).
   - Formatting helper: `YYYY-MM-DD` output; month label `MMMM YYYY`
     (deterministic tests with `vi.setSystemTime`).
   - All state via `useState` + `useEffect` for outside-click; cleanup in
     effects; no new dependencies.
3. Footer: "Component Dock" → https://www.componentdock.com/.
4. Verify: `npm run verify:app -- equinox` passes (typecheck + lint + knip
   - fallow + 100% coverage + build).
5. PR: `feat: Equinox — Single-Date Picker widget template (ColorLib Calendar 14)`,
   squash-merge immediately; PR description cites source slug, preview URL,
   tokens, the rome-vs-pickadate difference vs siblings, label/for-id
   quirks, renames.
6. Post-merge bookkeeping: TEMPLATES.md `[ ]` → `[x]` + surge URL, `npm run
readme:status`, deploy via CI.

## Gotchas

- Use the `/theme/bootstrap/` preview prefix; the unprefixed URL 404s.
- This is a ROME picker, NOT pickadate: circle selection `#f67280`, NO
  footer buttons, NO backdrop, NO border (soft shadow only), `←`/`→` nav,
  `YYYY-MM-DD` value, `MMMM YYYY` month label. Do NOT copy the pickadate
  shell/button/format values from the Kalends/Span specs.
- No Bootstrap blue focus ring on the input (source strips it); no
  active-input border change (rome adds no class).
- The source label's `for` doesn't match the input `id` — use a matching
  pair in the recreation.
- Do not reproduce the stale "#4" label; paraphrase the heading.
- No Esc-to-close in rome (don't invent it; outside-click close only).
- No ColorLib strings in app code; provenance only in spec/TEMPLATES/PR.
