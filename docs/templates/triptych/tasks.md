# Triptych (ColorLib "Calendar 05") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-triptych` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 05" — free HTML calendar widget page
  (page `<title>` "Calendar 05"; source:
  https://colorlib.com/wp/template/calendar-05/). Listed in TEMPLATES.md
  under **Bootstrap Calendars (20)** (line 689; no duplicate row). Part of a
  20-item Calendar N series (01–20) — the others are separate templates and
  must NOT be mixed in.
- **Preview gotcha:** `https://preview.colorlib.com/theme/calendar-05/`
  returns **HTTP 404**. The real live preview is a sub-page of the bootstrap
  theme preview:
  `https://preview.colorlib.com/theme/bootstrap/calendar-05/` (HTTP 200).
  DOM fetched (`/tmp/cal05.html`, 3,952 bytes) + stylesheet `css/style.css`
  (`/tmp/cal05.css`, 220,623 bytes) + `js/main.js` + TEMPLATES.md screenshot
  (`calendar-05.jpg`, 1200×972, viewed in browser). Screenshot cross-checks
  the DOM: light gray-lavender page, centered dark heading, horizontal
  three-panel purple gradient widget (Year `#7e0cf5` / Month `#983df7` /
  Day `#a555f8`), each panel a 3-cell stack (prev faded on dark overlay /
  current big white value + uppercase label / next faded on dark overlay).
- **Aesthetic:** minimal productivity-tool page. No imagery, no buttons, no
  links, no forms — just the heading + widget. Do NOT invent extra sections.
- **Behavior:** `js/main.js` renders today ± 1 for year/month/day via
  moment.js (YYYY / zero-padded MM / zero-padded DD). **No click handlers**
  — the widget is static. Recreate as a static render from the current date
  (fake timers / `vi.setSystemTime` in tests). Do not add navigation.
- **Footer:** source has NO footer. Add the mandatory repo-convention
  footer (Component Dock link) — it is an addition, note in PR.

## Structure (top → bottom, single page)

1. **Section** (`.ftco-section`, `padding: 7em 0`, page bg `#f8f9fd`) —
   centered h2 `.heading-section` "Calendar #05" (28px Lato, `#000`;
   recreate as "Calendar" — drop the series-index suffix) then the widget.
2. **Widget** (`.box`, `margin: 0 auto`; source wraps in Bootstrap
   `col-md-6` → ~570px max on md+, full width below) — `.calendar`
   (`text-align: center`, white text, `overflow: hidden`):
   - Three equal columns `width: 33.333%` side by side at ALL widths (the
     component has NO media queries — never stack).
   - **Year column** bg `#7e0cf5`: `.previous` p `YYYY−1` (40px, opacity
     .3, on `rgba(0,0,0,0.5)` bg, padding 2.6em 0) → `.current` p `YYYY`
     (40px, white, padding 2em 0) + span "Year" (14px uppercase) →
     `.next` p `YYYY+1` (same faded style).
   - **Month column** bg `#983df7`: `MM−1` / `MM` / `MM+1` (zero-padded),
     span "Month".
   - **Day column** bg `#a555f8`: `DD−1` / `DD` / `DD+1` (zero-padded),
     span "Day".
   - Rollover is moment-style unit arithmetic: subtract(1)/add(1) per unit
     (Jan prev month = `12`, Jan 31 next day = `01`, year boundary rolls
     year ± 1). Implement with `new Date(y, m−1, d∓1)`-style math.
3. **Footer** (repo-convention addition, source has none) — minimal
   centered line "Made with Component Dock" with
   https://www.componentdock.com/ link.

## Implementation tasks (TDD, in order)

- [ ] `apps/triptych` scaffold: copy the simplest existing app, rename
      package to `@free-react-templates/triptych`, `public/CNAME` =
      `triptych.free.componentdock.com`, `homepage` =
      `https://triptych.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: `--color-year: #7e0cf5`,
      `--color-month: #983df7`, `--color-day: #a555f8`,
      `--color-page: #f8f9fd`, `--color-ink: #000`, `--color-overlay:
    rgba(0,0,0,0.5)`; Google Fonts `<link>` Lato (300/400/700) in
      `index.html`
- [ ] Section + heading: `#f8f9fd` bg, ~7em vertical padding, centered
      28px "Calendar" h2 — content tests
- [ ] Widget layout: three equal 33.333% columns in a single row at every
      viewport width, gradient order Year/Month/Day with the three purple
      backgrounds; max ~570px centered wrapper — layout/content tests
- [ ] Date values: current `YYYY`/`MM`/`DD` from today's date; prev = −1
      unit, next = +1 unit (zero-padded MM/DD); rollover cases (Jan prev
      month 12, Jan 31 next day 01, Dec 31 next year) — fake-timer tests
- [ ] Cell styling: prev/next `rgba(0,0,0,0.5)` + 2.6em padding + 40px
      value at opacity .3; current 2em padding + 40px white value +
      14px uppercase label — style/class assertions
- [ ] No interactions: clicking any cell does nothing (no handlers) —
      interaction test
- [ ] A11y: widget group `aria-label` "Today's date: <Month> <D>, <YYYY>";
      prev/next values `aria-hidden` — accessibility tests
- [ ] Footer: "Made with Component Dock" line with
      https://www.componentdock.com/ link
- [ ] `bash scripts/verify-app.sh triptych` (typecheck + lint + 100%
      coverage + build) — FAST_MODE gate
- [ ] PR: source template, preview URL (note `/theme/bootstrap/calendar-05/`
      — direct URL 404s), tokens, deviations (name, heading paraphrase,
      added footer, static widget, no images needed)
