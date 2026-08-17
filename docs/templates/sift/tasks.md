# Sift (ColorLib Multiselect 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sift`. Recreation name: **Sift** (NEW name — the
> ColorLib source keeps its name "Multiselect 20").

## Source mapping

- **ColorLib item:** "Multiselect 20" (TEMPLATES.md line 842; section
  "## Bootstrap Multiselect (20)" at line 821). The `multiselect-20` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Source URL:** https://colorlib.com/wp/template/multiselect-20/
- **Preview URL — REACHABLE (verified 2026-08-18):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-20/`**
  (HTTP 200, 17,832 bytes, 99 lines, `<title>Multi Select #10</title>`).
  **The naive `https://preview.colorlib.com/theme/multiselect-20/` returns
  404** — the multiselect family lives under the `/theme/bootstrap/` prefix
  (same as 16/17/18/19). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (2,095 bytes — the per-demo token tail;
  full list: `fonts/icomoon/style.css` (loaded, UNUSED — skip),
  `css/chosen.css` (12.2KB — **Harvest Chosen v1.8.7** base),
  `css/bootstrap.min.css` (Bootstrap 4 grid only), `css/style.css`). Fonts:
  cf-fonts inline @font-face — Roboto 300/400 (used), Poppins + Source
  Serif Pro (LOADED, UNUSED — ignore). Site is jQuery 3.3.1 + Chosen
  v1.8.7 + Popper; `js/main.js`:
  `$(function(){ $(".chosen-select").chosen({ max_selected_options: 5,
width: '100%' }); })` — **limit 5 + full-width widget**; the ONLY Chosen
  member with a configured limit.

## Reference research (done — do not redo)

### Screenshot (`multiselect-20.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18. Light-gray page; centered dark
20px heading "Multi-Select #10 (Limit to 5)"; **THREE stacked widgets** in a
centered column: top widget with two chips (**CSS3, jQuery**), middle with
one (**Design**), bottom with three (**jQuery, CSS3, FrontEnd**) and its
dropdown OPEN beneath it (rows Design, HTML5, CSS3, jQuery, Bootstrap,
WordPress, FrontEnd, one highlighted). Chips are pale pastel tags with small
× icons; boxes white, rounded, soft shadow. Per the stylesheet (which IS
applied here — unlike Multiselect 19) the tint order is widget 1 beige
`#e5e4cc`, widget 2 mint `#c7f0db`, widget 3 sky `#d3f4ff`. The pre-picked
chip sets are just a demo state — the live page loads with zero picks; do
NOT hard-code them as initial state.

### Family shape (series context)

Series 09–20 are single-widget demos with rotating plugins; **19 → Tare is
the FIRST Harvest Chosen member, 20 → Sift is the SECOND**. Nearest sibling
is Tare — the plugin, tokens, and interaction model are IDENTICAL except
for: (a) THREE tinted widgets instead of one, (b) `max_selected_options: 5`
(limit verified live: the 6th pick is SILENTLY ignored — no UI feedback,
input stays enabled), (c) `width: '100%'` (widget fills the col-md-5), (d)
heading "Multi-Select #10 (Limit to 5)" with a `<label for>` bound to the
first select. Do NOT cross-contaminate: no comma-joined button text, no
optgroups, no green accent — Chosen's interactions are the inline input
filter, flat tinted chips, blue `#3875d7` row highlight, dimmed-but-present
picked rows, and close-on-real-click-select.

### Design tokens (live stylesheet + computed styles, verified 2026-08-18)

| Token           | Value                                  | Use                                                              |
| --------------- | -------------------------------------- | ---------------------------------------------------------------- |
| Page bg         | `#efefef`                              | body (custom style.css)                                          |
| Ink             | `#212529`                              | heading (20px, centered; label-wrapped text)                     |
| Widget bg       | `#fff`                                 | widget box; NO border, radius 4px                                |
| Widget shadow   | `0 1px 4px rgba(0,0,0,.1)`             | widget box drop shadow (inner pad 7px)                           |
| Chip bg w1      | `#e5e4cc`                              | widget 1 chips (`.color-1` pale beige)                           |
| Chip bg w2      | `#c7f0db`                              | widget 2 chips (`.color-2` pale mint)                            |
| Chip bg w3      | `#d3f4ff`                              | widget 3 chips (`.color-3` pale sky blue)                        |
| Chip text       | `#333`                                 | chip label; padding `7px 26px 7px 10px`                          |
| Chip ×          | 12×12 sprite, `top:9px; right:8px`     | removes chip, restores row, frees a limit slot                   |
| Input           | `#999` (active `#222`), 32px, 14px     | inline search; placeholder "Select Categories" as VALUE          |
| Row text        | `#444`                                 | unpicked rows; `5px 6px`, 13px, lh 15px                          |
| Row picked      | `#ccc`                                 | picked rows STAY in list, dimmed                                 |
| Row highlight   | `#3875d7→#2a62bc` gradient, white text | hover/keyboard-active row (Chosen blue)                          |
| No-results      | `#777` on `#f4f4f4`                    | "No results match <query>" row                                   |
| Menu            | white, NO border, radius 4px, mt 3px   | `0 15px 30px rgba(0,0,0,.2)` shadow                              |
| Menu max height | `240px`                                | internal scroll (ul.chosen-results)                              |
| Active box      | `0 0 5px rgba(0,0,0,.3)`               | focus state (the #5897fb border is suppressed by `!important`)   |
| Font            | Roboto (300/400)                       | Google Fonts `<link>` in index.html                              |
| Limit           | `5` per widget                         | 6th pick silently ignored; input stays enabled                   |
| Options         | 8, ungrouped                           | Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd |

Unused in the demo (skip): icomoon stylesheet, Poppins, Source Serif Pro.

### Live-verified behaviors (2026-08-18, real browser)

Open via widget click or typing; **real-click pick adds chip AND CLOSES the
dropdown**; picked rows dim to `#ccc` but stay in the list
(`.result-selected`, not clickable); × removes chip and restores row; live
filter (case-insensitive substring, auto-opens while typing, "No results
match <query>" on no match); outside click / Escape / Enter close; filter
value cleared after pick; input keeps focus after pick; chips persist
across close/reopen/filter cycles; keyboard arrows move the blue highlight,
Enter picks; **at 5 chips the 6th pick is silently ignored (verified:
clicked Bootstrap with 5 present → still 5 selected, no chip, no error,
input NOT disabled); removing a chip frees the slot**; the three widgets
are fully independent; widget 2 chips render rgb(199,240,219) = `#c7f0db`,
widget 3 rgb(211,244,255) = `#d3f4ff`; empty widgets show placeholder
"Select Categories" as input VALUE at rgb(153,153,153) = `#999`.

## Implementation checklist

1. [ ] Scaffold `apps/sift` (copy the simplest existing app, e.g.
       `apps/tare` when it ships, or `apps/chaff`/`apps/husk`; package
       `@free-react-templates/sift`; CNAME `sift.free.componentdock.com`;
       homepage `https://sift.free.componentdock.com`); `npm install` at
       root to register the workspace.
2. [ ] `src/index.css` — `@theme` tokens: page `#efefef`, ink `#212529`,
       widget shadow, chip tints `#e5e4cc` / `#c7f0db` / `#d3f4ff`,
       chip-text `#333`, input `#999` (active `#222`), row `#444`,
       row-picked `#ccc`, no-results-fg `#777`, no-results-bg `#f4f4f4`,
       highlight `#3875d7`→`#2a62bc`, active-box shadow; Roboto Google
       Fonts `<link>` (300/400). NO ColorLib strings in any file — replace
       provenance comments with token notes (e.g. "chip tints: #e5e4cc
       beige / #c7f0db mint / #d3f4ff sky").
3. [ ] Components: `Navbar` (site name "Sift", Home link, dark-mode
       toggle) → `MultiselectDemo` (centered heading + THREE widgets)
       → `Footer` (tagline, social links, Component Dock credit). Reuse
       `packages/ui` components (`cn()`, Button, etc.) where sensible.
4. [ ] Data: plain `.ts` file with the 8 options in exact order — Design,
       HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd (generic
       web-stack terms, kept verbatim). No values/optgroups.
5. [ ] Widget component (one component, used 3× with a `tint` prop):
       box = white, NO border, 4px radius, `0 1px 4px rgba(0,0,0,.1)`
       shadow, 7px padding, cursor text, role="combobox" / aria-expanded /
       aria-haspopup="listbox"; chips flat on the widget's tint
       (no border/shadow, 3px radius, `7px 26px 7px 10px` padding, `#333`)
       in pick order, each with an accessible × button (lucide `X` 12px or
       CSS; aria-label "Remove <option>") at top 9px right 8px; inline
       `<input>` 32px/14px/`#999` (active `#222`) after the chips,
       placeholder "Select Categories" (as VALUE when zero chips — mirror
       Chosen — or the native placeholder attribute; keep the visible
       behavior identical), keeps focus after pick.
6. [ ] Menu = absolutely positioned below the box (3px gap), white, NO
       border, 4px radius, `0 15px 30px rgba(0,0,0,.2)`, same width as the
       box, max-height 240px + overflow-y auto; rows 5px 6px/13px/`#444`,
       `aria-selected` on picked, dimmed `#ccc` for picked-but-listed,
       blue-gradient highlight for hover/keyboard-active (white text),
       "No results match <query>" row (`#777` on `#f4f4f4`) when filter
       yields nothing; outside-click + Escape close.
7. [ ] Limit: `MAX_SELECTIONS = 5`. When 5 chips are present, an activation
       on a 6th row SHALL be a silent no-op (no chip, no error, no flash)
       and the input SHALL stay enabled. Removing a chip SHALL free a slot.
       (Mirror Chosen: it fires an internal event the demo ignores; there
       is NO disabled state in the UI.)
8. [ ] Interactions: click box / type → open; real CLICK on row → add chip + CLOSE dropdown (close-on-select — do NOT mirror bootstrap-select
       stay-open); × → remove chip + restore row; typing filters rows live
       (case-insensitive substring, auto-open, auto-highlight single
       match); filter input cleared after pick; arrows move highlight,
       Enter picks (== click: chip + close), Escape closes; selections
       persist across cycles; THREE independent widget instances (state per
       instance — no shared selection state).
9. [ ] Heading: centered h2 "Sift (Limit to 5)" (20px, `#212529`) whose
       text SHALL be wrapped in `<label htmlFor="<first-widget-id>">`;
       give widget 1's combobox that id. Clicking the heading focuses
       widget 1.
10. [ ] Tests (TDD, 100% coverage): Navbar; Widget (heading bind, open on
        click/type, 8 options in order, click-pick closes dropdown, chip
        add with per-tint class, picked rows dimmed-but-listed, × removes,
        all-chips-removed → placeholder back, live filter including "No
        results match", filter doesn't remove chips, keyboard
        arrows/Enter/Escape, aria state, LIMIT: 5 picks then 6th blocked
        silently and input enabled, removal frees slot); MultiselectDemo
        (three widgets render, each tint class applied once, widgets
        independent); Footer (Component Dock credit); App composition
        (landmarks, document title "Sift — Multiselect Dropdown"). jsdom
        notes: the inline input is a real `<input>` — use `userEvent.type`
        for filter and `fireEvent.click` for chip × (user.click simulates
        hover first and would toggle the dropdown); MemoryStorage polyfill
        from `apps/cura/src/test/setup.ts` if localStorage is needed.
11. [ ] Run `npm run verify:app -- sift` (typecheck → lint → vitest 100% →
        build) and fix until green.
12. [ ] Open PR `feat/template-sift` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/theme/bootstrap/` one),
        token list, limit behavior, and what differs (renames, paraphrased
        heading "Sift (Limit to 5)", no icomoon, Roboto Google Font,
        lucide/CSS close ×, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 842 `[x]` + surge
        URL, `npm run readme:status`, push.
