# Planner (ColorLib Calendar 01) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Planner** (NEW name —
> the ColorLib source keeps its name "Calendar 01"). Implementation ships on
> `feat/template-planner` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 01" — free minimalist Bootstrap calendar
  widget template (source: https://colorlib.com/wp/template/calendar-01/).
  TEMPLATES.md row: line 685 (**Bootstrap Calendars (20)**). The
  `calendar-01` slug appears exactly once (no dup rows to mark). ColorLib
  description: "A simple and straightforward free Bootstrap calendar
  template that keeps things clear and easily manageable."
- **⚠ Preview UNREACHABLE (verified 2026-08-14):** the default
  `https://preview.colorlib.com/theme/calendar-01/` returns **HTTP 404**
  (curl AND headless browser; empty page). Probed nested subpaths
  (`/theme/cal/calendar-01/`, `/theme/calendar/calendar-01/`,
  `/theme/calendars/calendar-01/`), `colorlib.com/preview/...` and
  trailing-slash variants — all 404. Wayback Machine has NO snapshot of the
  preview (only the colorlib.com landing page). **Per docs/replication.md
  the TEMPLATES.md screenshot is the sole reference** — say so in the PR
  description. No stylesheet could be fetched, so token hexes below come
  from pixel-sampling the screenshot (browser-verified 2026-08-14).
- **✅ Screenshot analysis (calendar-01.jpg, 1200×972):** a Safari window
  showing ONE centered widget on a very light grey-blue page. Structure top
  to bottom: centered dark title **"Calendar #01"** → month nav row (grey
  chevrons flanking blue **"December 2020"**) → solid blue weekday bar
  `Sun Mon Tue Wed Thu Fri Sat` (white text, 7 equal columns) → white
  7×5 date grid with thin grey cell lines; dates 1–18 light grey, **19 in a
  solid blue circle (white text)**, 20–31 near-black. Page ends after the
  grid — no navbar, no hero, no images, no footer (add the Component Dock
  footer per repo convention).
- **✅ Screenshot-date "today":** 19 December 2020 (a Saturday, last
  column) is circled — that was the capture date. Recreate it as the
  **selected date** (initial selection = 19) so the initial render matches
  the screenshot 1:1; clicking a date moves the circle; past/future colors
  recompute around the selection.
- **✅ December 2020 layout facts:** 1 Dec 2020 = **Tuesday** → first grid
  row has two leading blank cells (Sun, Mon) then 1–5; 31 Dec 2020 =
  Thursday; month fills 5 rows. Use these to verify the initial grid in
  tests.
- **Signature:** MINIMALISM — one widget, one accent blue (`#3d88f7`)
  used in exactly two places (weekday bar + selected circle), darker blue
  month label (`#1371e6`), flat design, no gradients/shadows/photography.
  This is the first template in the **Bootstrap Calendars (20)** category;
  siblings (Calendar 02–20) likely share the family look but each gets its
  own prep.
- **Exact structure (1:1 from the reference render):**
  1. **Title** — "Calendar #01" (source-exact, keep the `#01`), centered,
     dark near-black, ~28–32px/600 sans-serif.
  2. **Month nav** — left chevron `‹` (light periwinkle grey `#b9cae7`),
     centered label "December 2020" (`#1371e6`, `MMMM yyyy`), right
     chevron `›`. Clickable: prev/next month, label + grid update, year
     rollover across December→January.
  3. **Weekday bar** — solid `#3d88f7`, `Sun Mon Tue Wed Thu Fri Sat` in
     white, centered, 7 equal columns.
  4. **Date grid** — white, 7 columns × 5 rows, `#e6e6e6` 1px cell
     separators, dates centered; blank leading cells; dates before the
     selection `#7c7d81`, after `#111111`; selected date = solid `#3d88f7`
     circle with white text. Clicking a date selects it.
  5. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (pixel-sampled):** page bg `#f7f8fc` · card `#ffffff` · accent
  blue `#3d88f7` · month label `#1371e6` · chevron `#b9cae7` · past dates
  `#7c7d81` · future/title near-black `#111111` (sampled `#000003`) · grid
  lines `#e6e6e6` · on-accent text `#ffffff`.
- **Font:** clean geometric sans-serif (Helvetica/Arial-like per the
  screenshot); exact family unverifiable (preview 404). Recommend
  **Poppins** via Google Fonts `<link>` (repo default for ColorLib
  recreations, era-appropriate for the 2020 Bootstrap line); note the
  substitution in the PR.
- **Implementation pointers (Tailwind v4):**
  - One `Calendar` widget component (e.g. `src/components/Calendar.tsx`)
    with `App.tsx` rendering it centered on the `#f7f8fc` page + the muted
    footer. No Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-accent: #3d88f7`,
    `--color-month: #1371e6`, `--color-chevron: #b9cae7`,
    `--color-past: #7c7d81`, `--color-future: #111111`,
    `--color-gridline: #e6e6e6`, `--color-page: #f7f8fc`.
  - State: `viewDate` (year/month) + `selectedDate` (Date); `useState`
    with derived grid (blank leading cells via
    `new Date(y, m, 1).getDay()`; days-in-month via
    `new Date(y, m+1, 0).getDate()`). Chevrons:
    `setViewDate(addMonths(viewDate, ±1))`. Selection: click cell →
    `setSelectedDate(new Date(y, m, d))`. Persist selection across month
    round-trips by storing the full date, not the day number.
  - Grid: `grid grid-cols-7` with `divide`/`border` `#e6e6e6` separators
    (`border-gridline`), square-ish cells (`aspect-square` or fixed
    heights), dates centered (`flex items-center justify-center`).
  - Selected circle: `rounded-full bg-accent text-white` (a fixed-size
    circle, ~36–40px, centered in the cell).
  - Chevrons: `lucide-react` `ChevronLeft`/`ChevronRight` in `#b9cae7`,
    `aria-label="Previous month"`/`"Next month"`, padded hit targets.
  - Dates: `<button>` per cell with `aria-label` like "19 December 2020"
    and `aria-selected` on the selected one; `focus-visible` rings.
  - Card: `max-w-[480px] mx-auto bg-white`, page `min-h-screen bg-page
flex items-center justify-center px-4 py-16`.
  - Footer: minimal muted "More templates at Component Dock" → https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency, no jquery.
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate).

## Tasks (implementer checklist)

1. [ ] `feat/template-planner` branch from latest main
2. [ ] Scaffold `apps/planner` (copy the simplest existing app; package
       `@free-react-templates/planner`; `public/CNAME` =
       `planner.free.componentdock.com`; `"homepage"` =
       `https://planner.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/planner"`
       package-lock.json
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-planner/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements); the calendar logic
       (leading blanks, days-in-month, addMonths rollover) is easy to
       unit-test as pure functions
7. [ ] Run `scripts/verify-app.sh planner` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Calendar
       01"), preview URL
       (https://preview.colorlib.com/theme/calendar-01/ — **404,
       screenshot-only reference, per docs/replication.md fallback**),
       design tokens used (accent `#3d88f7`, month `#1371e6`, chevron
       `#b9cae7`, past `#7c7d81`, future `#111111`, gridline `#e6e6e6`,
       page `#f7f8fc`), font substitution (Poppins recommended — family
       unverifiable), interactions added (month nav + date selection),
       "Calendar #01" title kept source-exact
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`planner.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 685 — Bootstrap Calendars (20) category; single row, no
        dups)
