# Chaff (ColorLib Multiselect 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-chaff`. Recreation name: **Chaff** (NEW name — the
> ColorLib source keeps its name "Multiselect 18").

## Source mapping

- **ColorLib item:** "Multiselect 18" (TEMPLATES.md line 840; section
  "## Bootstrap Multiselect (20)" at line 821). The `multiselect-18` slug
  appears exactly ONCE in TEMPLATES.md (no dup rows to mark).
- **Source URL:** https://colorlib.com/wp/template/multiselect-18/
- **Preview URL — REACHABLE (verified 2026-08-18):**
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-18/`**
  (HTTP 200, 18,825 bytes, 117 lines, `<title>Multi Select #8</title>`).
  **The naive `https://preview.colorlib.com/theme/multiselect-18/` returns
  404** — the multiselect family lives under the `/theme/bootstrap/` prefix
  (same as 16/17). Do not redo this lookup.
- **Preview CSS:** `css/style.css` (932 bytes — the per-demo token tail;
  full list: `fonts/icomoon/style.css` (loaded, UNUSED — skip),
  `css/bootstrap-select.min.css` (10.7KB widget base),
  `css/bootstrap.min.css` (Bootstrap 4.6), `css/style.css`). Fonts: cf-fonts
  inline @font-face — Roboto 300/400 (used), Poppins + Source Serif Pro
  (LOADED, UNUSED — ignore). Site is jQuery 3.3.1 + bootstrap-select v1.13.9
  (SnapAppointments) + Popper; `js/main.js` is EMPTY — all behavior is
  plugin defaults + the optgroup `data-max-options` attributes.

## Reference research (done — do not redo)

### Screenshot (`multiselect-18.jpg`, 1200×972 AVIF)

Browsed visually in the browser 2026-08-18. Light-gray page; centered dark
20px heading "Multi-Select #8 (Limit selection on groups)"; light-gray
input-style widget button showing comma-joined selections
("Alaska, Arizona, Colorado, Connecticut, Delaware, Florida, …") + dark
caret; open white dropdown below with FOUR groups — headers "Group A (Limit
2)", "Group B (Limit 4)", "Group C (Limit 7)", "Group D (Limit 4)" — green
checkmarks + green text on selected rows (Alaska+Arizona in A, four in B at
its limit, seven in C at its limit); no search box, no select-all, no row
backgrounds. Matches the live widget.

### Family shape (series context)

Series 09–20 are single-widget demos; bootstrap-select members: 16 → Husk
(no accent, no limit), 17 → Groat (green `#8cba51` accent + SELECT-level
`data-max-options="7"`), **18 → Chaff (Groat's green accent + FOUR optgroups
with PER-GROUP limits A:2, B:4, C:7, D:4)**. Do NOT cross-contaminate with
Husk (all-dark selection) or Groat (single-column list, select-level limit,
no group headers).

### Design tokens (live stylesheet + computed styles, verified 2026-08-18)

| Token           | Value                                                                          | Use                                                    |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Page bg         | `#efefef`                                                                      | body (custom style.css)                                |
| Ink             | `#212529`                                                                      | heading, values, unselected rows, caret                |
| Muted           | `#999`                                                                         | placeholder "Nothing selected" (`bs-placeholder`)      |
| Field bg        | `#f8f9fa` / open `#dae0e5`                                                     | button resting / while menu open                       |
| Field border    | `#d3d9df` (1px)                                                                | button border; radius 4px; 38px tall; 6px 12px padding |
| Menu border     | `rgba(0,0,0,.15)` (1px)                                                        | menu border; radius 4px; padding 8px 0; NO shadow      |
| Menu max height | `373px`                                                                        | internal scroll (inner div)                            |
| Row pad         | `4px 24px`                                                                     | option rows; 16px; hover `#f8f9fa`                     |
| Keyboard active | `#007bff` bg + white text                                                      | Bootstrap `.dropdown-item.active`                      |
| Group header    | `#6c757d`, `8px 24px`                                                          | dropdown-header rows; divider `#e9ecef` between groups |
| Accent green    | `#8cba51`                                                                      | selected row TEXT + checkmark (custom style.css)       |
| Check glyph     | rotated square `width:.5em; height:1em; border:0 .26em .26em 0; rotate(45deg)` | bs-ok-default; right 15px top 5px, 12px                |
| Font            | Roboto (300/400)                                                               | Google Fonts `<link>` in index.html                    |
| Group limits    | A:2 B:4 C:7 D:4                                                                | optgroup `data-max-options`; reject over-limit picks   |

### Live-verified behaviors

Open/close via click, outside click, Escape; stay-open while picking;
deselect stays open; comma-joined button text in selection order across
groups; **per-group limit rejection** (A at 2: third click rejected, button
text unchanged; groups independent; deselect frees quota); selections
persist; NO search/select-all/actions box; keyboard arrow/Enter/Escape with
`#007bff` active row.

## Implementation checklist

1. [ ] Scaffold `apps/chaff` (copy the simplest existing app, e.g.
       `apps/groat` after it ships, or `apps/husk`; package
       `@free-react-templates/chaff`; CNAME `chaff.free.componentdock.com`;
       homepage `https://chaff.free.componentdock.com`); `npm install` at
       root to register the workspace.
2. [ ] `src/index.css` — `@theme` tokens: page `#efefef`, ink `#212529`,
       muted `#999`, field `#f8f9fa`, field-open `#dae0e5`, border
       `#d3d9df`, menu-border `rgba(0,0,0,.15)`, hover `#f8f9fa`, active
       `#007bff`, accent `#8cba51`, group-header `#6c757d`, divider
       `#e9ecef`; Roboto Google Fonts `<link>` (300/400).
3. [ ] Components: `Navbar` (site name "Chaff", Home link, dark-mode
       toggle) → `MultiselectDemo` (centered heading + widget) → `Footer`
       (tagline, social links, Component Dock credit).
4. [ ] Data: 4 groups `[{id:'A', label:'Group A (Limit 2)', limit:2,
    states:[{code:'AL',name:'Alabama'},…4]}, …B(11), C(13), D(22)]` —
       50 states total, exact membership per spec; plain .ts data file.
5. [ ] Widget (single open menu, custom state): button = `<button
    aria-haspopup="listbox" aria-expanded>` 38px input-look (field bg,
       `#d3d9df` 1px, 4px radius, 16px, caret at right); text = placeholder
       "Nothing selected" `#999` or comma-joined names `#212529` (selection
       order, no group marks); menu = absolutely positioned white box, 1px
       `rgba(0,0,0,.15)`, 4px radius, no shadow, same width, max-height
       373px + overflow-y auto, outside-click + Escape close.
6. [ ] Menu rows: per group — header row (`#6c757d`, 8px 24px) + divider +
       state rows (4px 24px, 16px, hover `#f8f9fa`, keyboard-focus
       `#007bff` bg white text); selected row = green `#8cba51` text + green
       check glyph (CSS rotated square or lucide `Check` 12px) at right
       15px/top 5px; `aria-selected` on options; arrow/Enter/Escape
       keyboard support.
7. [ ] Selection state: `Set` of selected codes + order array; per-group
       count = selections in that group; clicking a row: if selected →
       deselect (remove, menu stays open); if not selected AND group count
       < group limit → select (append to order, menu stays open); if group
       at limit → reject (no state change; optional transient
       "Limit reached (N items max)" notice or aria-live hint).
8. [ ] Tests (TDD, 100% coverage): Navbar; MultiselectDemo (heading,
       placeholder, open/close, outside-click/Escape close, select-stays-
       open, comma-joined order, deselect, per-group limit rejection at
       A=2/B=4/C=7/D=4, cross-group independence, quota freed on deselect,
       no search/select-all, keyboard nav, aria state); Footer (Component
       Dock credit); App composition (landmarks, document title "Chaff —
       Multiselect Dropdown"). jsdom note: copy the MemoryStorage polyfill
       from `apps/cura/src/test/setup.ts` if localStorage is needed.
9. [ ] Run `npm run verify:app -- chaff` (typecheck → lint → vitest 100% →
       build) and fix until green.
10. [ ] Open PR `feat/template-chaff` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (the `/theme/bootstrap/` one),
        token list, what differs (renames, group labels kept verbatim,
        Roboto Google Font, lucide/CSS checkmark, no icomoon, paraphrased
        heading, Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 840 `[x]` + surge
        URL, `npm run readme:status`, push.
