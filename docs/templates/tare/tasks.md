# Tare (ColorLib Multiselect 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tare`. Recreation name: **Tare** (NEW name — the
> ColorLib source keeps its name "Multiselect 19").

## Source mapping

- **ColorLib item:** "Multiselect 19" (TEMPLATES.md line 841; section
  "## Bootstrap Multiselect (20)" at line 821). The `multiselect-19` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Source URL:** https://colorlib.com/wp/template/multiselect-19/
- **Preview URL — REACHABLE (verified 2026-08-18):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-19/`**
  (HTTP 200, 16,518 bytes, 66 lines, `<title>Multi Select #9</title>`).
  **The naive `https://preview.colorlib.com/theme/multiselect-19/` returns
  404** — the multiselect family lives under the `/theme/bootstrap/` prefix
  (same as 16/17/18). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (2,235 bytes — the per-demo token tail;
  full list: `fonts/icomoon/style.css` (loaded, UNUSED — skip),
  `css/chosen.css` (12.2KB — **Harvest Chosen v1.8.7** base),
  `css/bootstrap.min.css` (Bootstrap 4 grid only), `css/style.css`). Fonts:
  cf-fonts inline @font-face — Roboto 300/400 (used), Poppins + Source
  Serif Pro (LOADED, UNUSED — ignore). Site is jQuery 3.3.1 + Chosen
  v1.8.7 + Popper; `js/main.js` is the canonical one-liner
  `$(function(){ $(".chosen-select").chosen(); })` — ALL behavior is
  Chosen defaults (no options object, no `data-` config).

## Reference research (done — do not redo)

### Screenshot (`multiselect-19.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18. Light-gray page; centered dark
20px heading "Multi-Select #9"; ONE widget — a white rounded box (soft
shadow) with a single flat light-gray chip "CSS3" + small ×, and the OPEN
white dropdown below listing Design, HTML5, CSS3, jQuery, SASS, Bootstrap,
WordPress (BLUE-highlighted row), Frontend. **The screenshot's "SASS" row
is an OLD build — the LIVE DOM has "BS4". Use the live DOM's 8 options:
Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd.** Chip
color is the default light gray (no color-N tint). Matches the live widget.

### Family shape (series context)

Series 09–20 are single-widget demos with rotating plugins. **19 → Tare is
the FIRST Harvest Chosen member:** 01–08 Semantic UI, 09–13 Select2,
14/15 jQuery-MultiSelect, 16–18 bootstrap-select. Do NOT cross-contaminate:
no comma-joined button text, no green accent, no optgroups, no limits, no
search-inside-menu — Chosen's interactions are the inline input filter,
flat `#eeeeee` chips, blue `#3875d7` row highlight, dimmed-but-present
picked rows, and **close-on-real-click-select** (verified with real browser
clicks 2026-08-18 — unlike bootstrap-select members which stay open).

### Design tokens (live stylesheet + computed styles, verified 2026-08-18)

| Token           | Value                                  | Use                                                              |
| --------------- | -------------------------------------- | ---------------------------------------------------------------- |
| Page bg         | `#efefef`                              | body (custom style.css)                                          |
| Ink             | `#212529`                              | heading (20px, centered)                                         |
| Widget bg       | `#fff`                                 | widget box; NO border, radius 4px                                |
| Widget shadow   | `0 1px 4px rgba(0,0,0,.1)`             | widget box drop shadow (inner pad 7px)                           |
| Chip bg         | `#eeeeee` flat                         | chips; NO border/shadow, radius 3px                              |
| Chip text       | `#333`                                 | chip label; padding `7px 26px 7px 10px`                          |
| Chip ×          | 12×12 sprite, `top:9px; right:8px`     | removes chip, restores row                                       |
| Input           | `#999`, 32px tall, 14px                | inline search; placeholder "Select Categories" as VALUE          |
| Row text        | `#444`                                 | unpicked rows; `5px 6px`, 13px, lh 15px                          |
| Row picked      | `#ccc`                                 | picked rows STAY in list, dimmed                                 |
| Row highlight   | `#3875d7→#2a62bc` gradient, white text | hover/keyboard-active row (Chosen blue)                          |
| No-results      | `#777` on `#f4f4f4`                    | "No results match <query>" row                                   |
| Menu            | white, NO border, radius 4px, mt 3px   | `0 15px 30px rgba(0,0,0,.2)` shadow                              |
| Menu max height | `240px`                                | internal scroll (ul.chosen-results)                              |
| Font            | Roboto (300/400)                       | Google Fonts `<link>` in index.html                              |
| Options         | 8, ungrouped, no limits                | Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd |

Unused in the demo (skip): icomoon stylesheet, Poppins, Source Serif Pro,
and the `.color-1` `#e5e4cc` / `.color-2` `#c7f0db` / `.color-3` `#d3f4ff`
chip-tint classes (defined in style.css but never applied — the page uses
default gray chips; could be noted in a comment, never shipped as the
primary look).

### Live-verified behaviors

Open via widget click or by typing in the inline input; **real-click pick
adds chip AND CLOSES the dropdown**; picked rows dim to `#ccc` but stay in
the list (`.result-selected`, not clickable); × removes chip and restores
row; live filter (case-insensitive substring, auto-opens while typing,
auto-highlights the sole match, "No results match <query>" on no match —
verified typing "word" and "zzz"); outside click / Escape / Enter close;
filter value cleared after pick; input keeps focus after pick; chips
persist across close/reopen/filter cycles; keyboard arrows move the blue
highlight, Enter picks; NO select-all, NO optgroups, NO limits, NO
comma-joined text.

## Implementation checklist

1. [ ] Scaffold `apps/tare` (copy the simplest existing app, e.g.
       `apps/chaff` when it ships, or `apps/husk`; package
       `@free-react-templates/tare`; CNAME `tare.free.componentdock.com`;
       homepage `https://tare.free.componentdock.com`); `npm install` at
       root to register the workspace.
2. [ ] `src/index.css` — `@theme` tokens: page `#efefef`, ink `#212529`,
       widget shadow, chip `#eeeeee`, chip-text `#333`, input `#999`, row
       `#444`, row-picked `#ccc`, no-results-fg `#777`, no-results-bg
       `#f4f4f4`, highlight `#3875d7`→`#2a62bc`; Roboto Google Fonts
       `<link>` (300/400). NO ColorLib strings in any file.
3. [ ] Components: `Navbar` (site name "Tare", Home link, dark-mode
       toggle) → `MultiselectDemo` (centered heading + widget) → `Footer`
       (tagline, social links, Component Dock credit).
4. [ ] Data: plain `.ts` file with the 8 options in exact order — Design,
       HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd (generic
       web-stack terms, kept verbatim). No values/optgroups/limits.
5. [ ] Widget (custom state, Chosen-shaped): box = white, NO border, 4px
       radius, `0 1px 4px rgba(0,0,0,.1)` shadow, 7px padding, cursor text,
       role="combobox" / aria-expanded / aria-haspopup="listbox"; chips =
       flat `#eeeeee` (no border/shadow, 3px radius, `7px 26px 7px 10px`
       padding, `#333`) in pick order, each with an × button (lucide `X`
       12px or CSS) at top 9px right 8px; inline `<input>` 32px/14px/`#999`
       after the chips, placeholder "Select Categories" (as VALUE when zero
       chips — mirror Chosen — or the native placeholder attribute; keep
       the visible behavior identical), keeps focus after pick.
6. [ ] Menu = absolutely positioned below the box (3px gap), white, NO
       border, 4px radius, `0 15px 30px rgba(0,0,0,.2)`, same width,
       max-height 240px + overflow-y auto; rows 5px 6px/13px/`#444`,
       `aria-selected` on picked, dimmed `#ccc` for picked-but-listed,
       blue-gradient highlight for hover/keyboard-active (white text),
       "No results match <query>" row (`#777` on `#f4f4f4`) when filter
       yields nothing; outside-click + Escape close.
7. [ ] Interactions: click box / type → open; real CLICK on row → add chip + CLOSE dropdown (close-on-select — do NOT mirror bootstrap-select
       stay-open); × → remove chip + restore row; typing filters rows live
       (case-insensitive substring, auto-open, auto-highlight single
       match); filter input cleared after pick; arrows move highlight,
       Enter picks (== click: chip + close), Escape closes; selections
       persist across cycles.
8. [ ] Tests (TDD, 100% coverage): Navbar; MultiselectDemo (heading,
       placeholder, open on click/type, 8 options in order, click-pick
       closes dropdown, chip add, picked rows dimmed-but-listed, ×
       removes, all-chips-removed → placeholder back, live filter
       including "No results match", filter doesn't remove chips, keyboard
       arrows/Enter/Escape, aria state); Footer (Component Dock credit);
       App composition (landmarks, document title "Tare — Multiselect
       Dropdown"). jsdom notes: the inline input is a real `<input>` — use
       `userEvent.type` for filter and `fireEvent.click` for chip ×;
       MemoryStorage polyfill from `apps/cura/src/test/setup.ts` if
       localStorage is needed.
9. [ ] Run `npm run verify:app -- tare` (typecheck → lint → vitest 100% →
       build) and fix until green.
10. [ ] Open PR `feat/template-tare` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/theme/bootstrap/` one),
        token list, what differs (renames, paraphrased heading, no icomoon,
        no color-N chip tints, Roboto Google Font, lucide/CSS close ×,
        Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 841 `[x]` + surge
        URL, `npm run readme:status`, push.
