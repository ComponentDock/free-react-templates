# Interval (ColorLib Calendar 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-interval`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 15" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-15/). Single occurrence
  in TEMPLATES.md (line 699, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Interval** (a range-of-dates word;
  direct sibling of Equinox = Calendar 14 and Span = Calendar 13).
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-15/` — HTTP 200,
  13,307 bytes, `<title>Calendar #5</title>`. **Gotcha:** the unprefixed
  `https://preview.colorlib.com/theme/calendar-15/` 404s — the Bootstrap
  series is served under `/theme/bootstrap/` (same as Calendar 10–14).
- **Static DOM (the WHOLE page):** `.content` → `.container.text-left` →
  `.row.justify-content-center` → `.col-lg-10` → `<h2 class="mb-5
text-center">` "Calendar #5 (Calendar Range)" → `<form class="row">` →
  two `.col-md-6` groups:
  1. `<label for="input_from">From</label>` +
     `<input class="form-control" id="input_from" placeholder="Start Date">`
  2. `<label for="input_from">To</label>` +
     `<input class="form-control" id="input_to" placeholder="Start Date">`
     No navbar, no footer, no images, no icons. Scripts: jquery-3.3.1,
     popper, bootstrap.min, `rome.js` (v2.1.22), `main.js`.
- **Label quirk:** the h2 says "Calendar **#5**" although the slug is
  calendar-15 — the label is stale in the source (same quirk as Calendar
  11–14). Paraphrase as "Pick a Date Range". Do NOT reproduce the wrong
  number.
- **for/id quirk (VERIFIED live in the a11y tree):** BOTH labels'
  `for="input_from"` — the From textbox's accessible name is "From To" and
  the To textbox falls back to its placeholder (no real label). Recreation
  SHALL use matching `for`/`id` pairs (a11y fix; clicking "To" must focus
  the To input).
- **Placeholder quirk (VERIFIED in DOM + screenshot):** BOTH inputs ship
  "Start Date" (copy-paste bug; sibling Calendar 13/Span ships "End Date"
  on To). Recreation SHALL use "Start Date" (From) / "End Date" (To) —
  deliberate fix; mention it in the PR.
- **SAME rome picker as Calendar 14 (Equinox) — do NOT copy pickadate
  values:** bevacqua/rome v2.1.22 (jQuery-independent; the demo still loads
  jQuery/Bootstrap but rome itself needs neither):
  - Floating WHITE popup `.rd-container`: `padding: 10px`, `text-align:
center`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`, **NO border** (the
    `border: 1px solid #333` is commented out in rome.css), **NO backdrop**.
  - Selected day = **CIRCLE** `#f67280` bg + white text
    (`border-radius: 50%`), 50×50px cells.
  - **NO footer buttons** (no Today/Clear/Close — unlike Kalends/Span).
  - Month nav = `←`/`→` (`\2190`/`\2192` CSS `:before` content), no icons.
  - Weekday row: Su Mo Tu We Th Fr Sa (Sunday first, `weekdaysMin`).
  - Month label `MMMM YYYY` ("August 2026"); `monthsInCalendar: 1`.
  - Input value format: `YYYY-MM-DD` (date-only default).
  - `autoClose: true` (closes on day pick — VERIFIED live: after picking,
    both `.rd-container`s end up `display: none`), `autoHideOnClick: true`
    (closes on outside click). No Esc handling in rome — don't invent one.
- **RANGE wiring (the difference vs Equinox) — VERIFIED live with trusted
  clicks:** `main.js` runs `rome(input_from, { dateValidator:
rome.val.beforeEq(input_to), time: false })` and `rome(input_to,
{ dateValidator: rome.val.afterEq(input_from), time: false })`.
  - After From = 2026-08-16, the To picker disabled EXACTLY 21 cells (all
    days strictly before From: Jul 26–31 + Aug 1–15) as `.rd-day-disabled`
    — computed color `rgb(255,204,204)` = `#fcc`, `cursor: default`;
    clicking a disabled day left the value unchanged (inert).
  - After To = 2026-08-20, the From picker disabled Aug 21–31 + Sep 1–5.
  - Equality allowed (beforeEq/afterEq); nothing disabled when the
    counterpart input is empty.
  - The From value keeps `.rd-day-selected` when its picker reopens; the To
    picker also marks the From value as selected (rome marks the range
    endpoint).
- **Focus treatment DIFFERS from pickadate demos:** `style.css` strips the
  Bootstrap focus ring (`.form-control:focus { outline: none; box-shadow:
none }`) and rome adds no active-input class. So NO `#80bdff` border, NO
  blue ring, NO `#0089ec` active border. Keep focus minimal (subtle
  accessible outline at most).
- **DIFFERS from Equinox in three places (do NOT copy Equinox's values):**
  1. Page background is `#efefef` (LIGHT GREY), not `#fff` (verified by
     fetching both demos' `css/style.css`).
  2. Column is `col-lg-10` (≈83%), not `col-lg-3` (≈25%).
  3. Out-of-month days are `#ccc`, not `#999` (the two demos' rome.css
     files differ ONLY in this line — verified by diffing both).
- **Screenshot:** `calendar-15.jpg` (1200×972, viewed in browser) — flat
  minimalist, light-grey page: centered "Calendar #5 (Calendar Range)"
  heading, TWO side-by-side inputs (From/Start Date, To/Start Date),
  floating WHITE popup below the From input: "February 2021" header + black
  `<`/`>` triangles, grey "Su Mo Tu We Th Fr Sa" row, day grid (faint grey
  out-of-month days, dark current-month), selected day 16 on a salmon-PINK
  `#f67280` **CIRCLE** with white text (17 shows a lighter pink hover
  state), NO footer buttons.

## Token cheat sheet

- Accent `#f67280` (salmon-pink, selected circle) · disabled `#fcc` ·
  out-of-month `#ccc` (NOT Equinox's `#999`) · page `#efefef` (light grey,
  NOT white) · text `#212529` (Bootstrap body color) · muted `#b3b3b3` ·
  input border `#ced4da` · input text `#495057` · popup shadow
  `0 15px 30px 0 rgba(0,0,0,.2)`.
- Font: Roboto via Google Fonts link in index.html.
- Section `py-28`; column ≈83% on lg+ (col-lg-10), full width below; h2 20px
  `mb-5`; two equal `col-md-6` groups on md+, stacked below; input =
  Bootstrap 4 `.form-control` (radius `.25rem`); label 12px `#212529`
  `mb-2`-ish; rome popup padding 10px; day cells 50×50px; `.rd-days`
  margin-top 20px.

## Task outline (implementation order, TDD)

1. Scaffold `apps/interval` from the simplest existing app (copy pattern;
   `apps/equinox` is the closest sibling once shipped — same rome-style
   picker, but with TWO inputs + range logic + grey page bg + wider column;
   else `apps/aurora`-style minimal):
   - package `@free-react-templates/interval`, `public/CNAME` =
     `interval.free.componentdock.com`, `homepage` =
     `https://interval.free.componentdock.com`, `vite.config.ts` registers
     `injectUiSource()`.
   - index.html: `<title>Interval</title>`, Google Fonts Roboto link.
   - jsdom 30 quirk: copy the `MemoryStorage` polyfill from
     `apps/cura/src/test/setup.ts` into `src/test/setup.ts` if the
     scaffold needs it.
2. Tests first (red), then implementation (green), 100% coverage:
   - `App` composes `<DateRangePickerPage />` (section) — heading + two
     inputs + footer link.
   - `DateRangePicker` component: two inputs (labels "From"/"To" with
     MATCHING for/id pairs, placeholders "Start Date"/"End Date"), each
     opening its OWN picker on focus/click (no active-input border change),
     closing on day pick / outside click; values persist when closed
     without selection.
   - Range state: From picker disables days strictly AFTER To; To picker
     disables days strictly BEFORE From; equality allowed; nothing disabled
     when the counterpart is empty; disabled cells `#fcc` + `cursor:
default` + inert clicks.
   - `CalendarGrid` (rome-style, NOT pickadate-style): month+year header
     `MMMM YYYY` + `←`/`→` nav (always enabled) + single-month grid;
     weekday row Su Mo Tu We Th Fr Sa; 50×50px cells; out-of-month days
     `#ccc`; selected day = CIRCLE `#f67280` bg + white text
     (`border-radius: 50%`); picked endpoint stays marked when reopened.
   - NO footer buttons on the pickers (unlike Kalends/Span).
   - Formatting helper: `YYYY-MM-DD` output; month label `MMMM YYYY`
     (deterministic tests with `vi.setSystemTime`).
   - All state via `useState` + `useEffect` for outside-click; cleanup in
     effects; no new dependencies.
3. Footer: "Component Dock" → https://www.componentdock.com/.
4. Verify: `npm run verify:app -- interval` passes (typecheck + lint + knip
   - fallow + 100% coverage + build).
5. PR: `feat: Interval — Date Range Picker widget template (ColorLib Calendar 15)`,
   squash-merge immediately; PR description cites source slug, preview URL,
   tokens, the rome-vs-pickadate difference vs siblings, the verified range
   behavior, the for/id + placeholder quirks and their fixes, renames.
6. Post-merge bookkeeping: TEMPLATES.md `[ ]` → `[x]` + surge URL, `npm run
readme:status`, deploy via CI.

## Gotchas

- Use the `/theme/bootstrap/` preview prefix; the unprefixed URL 404s.
- This is a ROME range picker, NOT pickadate: circle selection `#f67280`,
  NO footer buttons, NO backdrop, NO border (soft shadow only), `←`/`→` nav,
  `YYYY-MM-DD` value, `MMMM YYYY` month label. Do NOT copy the pickadate
  shell/button/format values from the Kalends/Span specs.
- THREE values differ from Equinox (Calendar 14): page bg `#efefef` (not
  `#fff`), column `col-lg-10` ≈83% (not `col-lg-3` ≈25%), out-of-month days
  `#ccc` (not `#999`). Verify against THIS demo's files, not Equinox's.
- Range: two pickers, one per input (rome keeps BOTH containers in the DOM,
  hidden). Disabled = days rejected by the counterpart validator (`#fcc`,
  inert). Equality is allowed. Nothing disabled when counterpart empty.
- No Bootstrap blue focus ring on the inputs (source strips it); no
  active-input border change (rome adds no class).
- Source quirks to FIX (both verified): the To label's `for` points at the
  From input (use matching pairs), and both placeholders say "Start Date"
  (use "End Date" on To). Mention both fixes in the PR.
- Do not reproduce the stale "#5" label; paraphrase the heading.
- No Esc-to-close in rome (don't invent it; outside-click close only).
- No ColorLib strings in app code; provenance only in spec/TEMPLATES/PR.
