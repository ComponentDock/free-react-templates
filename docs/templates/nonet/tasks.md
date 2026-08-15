# Nonet (ColorLib Checkbox 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-nonet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 19" — nineteenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-19/).
  TEMPLATES.md line 749 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-19/`
  is **404** (verified 2026-08-15) — these demos live under the Bootstrap
  mega-theme. Use `https://preview.colorlib.com/theme/bootstrap/checkbox-19/`
  (HTTP 200, 18.1 KB HTML, verified 2026-08-15). Page stylesheet (contains
  the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-19/css/style.css`
  (2,365 bytes / 69 lines — fully extracted for tokens). libs: bootstrap 4,
  jquery, popper. **Toggle is pure CSS** (track + knob pseudoelement — no
  icon font). Google Font **Roboto** (system stack — NOT Poppins). Document
  title: "Checkbox #9". Cross-checked with the TEMPLATES.md screenshot
  (`checkbox-19.jpg` 1200×972, browser-viewed 2026-08-15) AND live computed
  styles — all match.
- **NUMBERING QUIRK (verified 2026-08-15, from the Quartet research):** the
  preview server hosts TWO sub-series. Entries 01–10 = custom designs
  "Checkbox #01"–"#10" (Tickbox/Picks/Ticktag/Checkly/Tickwell/Toggly/
  Switchly/Soluna/Taskly/Moodly). Entries 11–20 = codrops-sourced demos
  "BS4 Custom Checkbox #1"–"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), 12 → "#2" (Duo, codrops `.control` widget, blue
  `#007bff`), 13 → "#3" (Trio, codrops `.control` widget, blue `#007bff`),
  14 → "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), 15 → "#5"
  (Quintet, MATERIAL _checkbox_ widget, hot pink `#e13a9d`), 16 → "#6"
  (Sextet, codrops `.control` widget, blue `#007bff`), 17 → "#7" (Septet,
  codrops OVERFLOW _checkbox_ widget, teal `#00909e`), 18 → "#8" (Octet,
  codrops MATERIAL-SWITCH _toggle_ widget, green `#52de97`), **19 → "#9"
  (THIS template, codrops IOS-SWITCH _toggle_ widget, green `#4cd964`)**, 20
  → duplicate "#9". Each 11–20 entry has its OWN heading AND its own
  widget/checked color — do NOT reuse the Octet (material-switch, green
  `#52de97`), Sextet (blue `.control`), Quintet (Material checkbox, pink) or
  Septet (overflow checkbox, teal) components. Nonet's widget is the codrops
  **ios-switch** toggle: Bootstrap `custom-control` label (padding-left: 0) +
  "Off" span + hidden input + `ios-switch-control-indicator` (track) + "On"
  span. It is a TOGGLE SWITCH, not a checkbox — the knob slides left↔right,
  and the CHECKED state turns the whole TRACK solid green (unlike Octet,
  where only the knob turns green on a grey track).
- **Visual design (DOM + CSS tokens + screenshot + live computed styles):**
  minimal demo page on pure white. One centered narrow column (col-lg-3 ≈
  255–280px) with 112px vertical padding: left-aligned 20px dark heading
  "Checkbox #9" (48px vertical margins), then FOUR stacked `div.mb-4` rows
  (24px gap), each a small muted caption (`span.text-muted.small`, grey
  `#6c757d`, 80% size) above a `label.custom-control.ios-switch` toggle
  row "Off [track] On":
  1. **Switch 1** — checked → track SOLID green `#4cd964` (10px green
     border trick), white knob centered on the green pill
  2. **Switch 2** — unchecked → white track, 2px `#ddd` border, white knob
     left, grey shadow
  3. **Switch disabled** — unchecked + disabled → track+knob at `opacity:
.4`, white knob left, not interactive
  4. **Switch disabled & checked** — checked + disabled → green track at
     `opacity: .4` (pale/muted green), not interactive
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #9" (NOT "#19") — keep it verbatim; the
     checklist row "Checkbox 19" is the mapping record, not on-screen copy.
     Captions "Switch 1"/"Switch 2"/"Switch disabled"/"Switch disabled &
     checked" verbatim — they ARE the design.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #9" (20px, dark, left-aligned, 48px
     top+bottom margins) →
  5. 4 × `div.mb-4` (margin-bottom 1.5rem = 24px), each:
     `span.text-muted.small` caption (outside the label!) +
     `label.custom-control.ios-switch` (padding-left: 0):
     - `span.ios-switch-control-description` "Off"
     - `input[type=checkbox].ios-switch-control-input`
       (`checked`/`disabled` per state, `display: none` in source)
     - `span.ios-switch-control-indicator` (32×20px track)
     - `span.ios-switch-control-description` "On".
- **Design tokens (from `css/style.css` + live computed styles):**
  - Accent: **`#4cd964`** (iOS green) — `--color` custom property on
    `.ios-switch`; applied to the whole TRACK when checked
  - Track `.ios-switch-control-indicator`: **32×20px**, `inline-block`,
    `position: relative`, **`margin: 0 10px`** (10px gap to Off/On labels),
    `top: 4px`, **bg `#fff`**, **radius 16px** (full pill), **border 2px
    solid `#ddd`**, `transition: .3s`
  - Knob `::after`: **16×16px** circle, `border-radius: 16px`, absolute
    **`top: 0px; left: 0px`** (unchecked — flush left), **bg `#fff`**,
    **shadow `0 0 2px #aaa, 0 2px 5px #999`** (grey shadow)
  - Checked (`:checked ~ …indicator`): **`border: 10px solid var(--color)`**
    → the 2px grey border is REPLACED by a 10px green border, so the whole
    track reads SOLID `#4cd964` green; knob repositions to **`top: -8px;
left: 4px`** (the inner box shrinks to 12×0 → knob centers on the green
    pill, slightly toward "On"); knob stays white with its grey shadow —
    only the TRACK changes color (NOT the knob, unlike Octet)
  - Pressed (`:active ~ …::after`): knob **widens 16→20px** while held
    (classic iOS growing-knob affordance); checked+active also sets
    **`left: 0px`**. Transient — implement with `active:` variant if at all
  - Disabled (`:disabled ~ …indicator`): **`opacity: .4`** on track+knob
    (Off/On text stays full opacity)
  - Input: `display: none` (source) → recreation uses the repo
    visually-hidden-but-focusable pattern (see spec) — a DELIBERATE a11y
    improvement over the source, keep visuals identical
  - Caption: `text-muted small` → `#6c757d`, 80% (~12.8px)
  - Row label: `custom-control` base with `padding-left: 0`; Off/On spans
    16px dark `#212529` Roboto
  - Page: `#fff` bg, Roboto stack, `.content` padding 7rem 0, `h2` 20px
    weight 500 dark
- **Recreation decisions (from spec):** pure-CSS toggle (track + knob
  pseudoelements with box-shadow shadow; checked color via border-expansion —
  e.g. Tailwind `border-2 border-[#ddd]` ↔ `border-[10px] border-[#4cd964]`
  with `peer-checked:`), Roboto via Google Fonts `<link>`, plain React state
  per switch, `disabled` variants not toggleable, captions + Off/On labels +
  heading verbatim, minimal footer with https://www.componentdock.com/ (demo
  has no footer — repo mandate). A11y: native input visually-hidden but
  focusable + `peer`/`peer-checked:` wiring, accessible name from caption
  (`aria-label` or `aria-labelledby` — the caption sits OUTSIDE the label in
  the source), focus-visible ring. The press-to-widen knob (`:active`) is an
  optional fidelity nicety — the four static states are the visible design.

## Tasks (implementation checklist — do in order)

1. [ ] `apps/nonet` scaffold: copy the simplest existing app (e.g.
       `apps/octet`), rename package to `@free-react-templates/nonet`,
       update `public/CNAME` → `nonet.free.componentdock.com`, `homepage` →
       `https://nonet.free.componentdock.com`; `npm install` at root so the
       lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): heading, four-state
       list, checked/unchecked/disabled visuals, track-color flip + knob
       recenter, toggle-by-click/Space, disabled no-toggle, a11y (accessible
       name from caption, focus ring), footer with Component Dock link,
       document title.
3. [ ] `src/index.css`: `@theme` tokens — accent `#4cd964` (iOS green),
       track `#fff`, border `#ddd`, caption grey `#6c757d`; Roboto via Google
       Fonts `<link>` in `index.html`.
4. [ ] `SwitchRow` component: caption span (text-muted small) + visually-
       hidden-but-focusable native input with `aria-label`/`aria-labelledby`
       = caption + `peer`-wired track; unchecked → white track, 2px `#ddd`
       border, knob 16×16 flush left (`top: 0`, `left: 0`) with grey shadow;
       checked → track solid `#4cd964` (border-expansion trick), knob
       recentered (`top: -8px`, `left: 4px` geometry); disabled → `opacity:
    .4` per state; optional `active:` knob-widen 16→20px.
5. [ ] `DemoSection`: `.content` (112px padding) → centered container →
       centered narrow column → `h2` "Checkbox #9" + four rows in order
       (Switch 1 checked / Switch 2 unchecked / Switch disabled / Switch
       disabled & checked).
6. [ ] `App.tsx`: DemoSection + minimal footer (Component Dock link) in a
       `<main>` landmark; title "Nonet — iOS Toggle Switch UI Template".
7. [ ] `scripts/verify-app.sh nonet` (typecheck + lint + 100% coverage +
       build); PR `feat/template-nonet` → merge immediately
       (`gh pr merge --squash --delete-branch`).
8. [ ] Bookkeeping: TEMPLATES.md line 749 `[~]`→`[x]` + surge URL,
       `npm run readme:status`, push. (Implementer's job — NOT the prep
       stream.)
