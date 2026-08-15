# Warp (ColorLib Checkbox 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-warp`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 20" — twentieth (and last) of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-20/).
  TEMPLATES.md line 750 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-20/`
  is **404** (verified 2026-08-15) — these demos live under the Bootstrap
  mega-theme. Use `https://preview.colorlib.com/theme/bootstrap/checkbox-20/`
  (HTTP 200, 18,156 bytes HTML, verified 2026-08-15). Page stylesheet (contains
  the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-20/css/style.css`
  (2,623 bytes — fully extracted for tokens). libs: bootstrap 4, jquery
  3.3.1, popper. **Toggle is pure CSS** (overflow-hidden track + two
  pseudoelement dots that swap sides — no icon font). Google Font **Roboto**
  (system stack — NOT Poppins). Document title: "Checkbox #9". Cross-checked
  with the TEMPLATES.md screenshot (`checkbox-20.jpg` 1200×972,
  browser-viewed 2026-08-15) AND live computed styles — all match.
- **CORRECTION to the Nonet research (verified 2026-08-15):** the Nonet spec
  called checkbox-20 "duplicate #9 (same demo served twice)" — that is WRONG.
  Diffing the two live pages shows checkbox-19 (`ios-switch`) and checkbox-20
  (`teleport-switch`) share the same page shell (heading "Checkbox #9", four
  captions, 404 naive URL) but serve DIFFERENT widget classes with DIFFERENT
  checked-state mechanics. The Warp spec documents both widgets; do NOT reuse
  the Nonet app's toggle component.
- **NUMBERING QUIRK (from the Nonet research, confirmed):** entries 11–20 =
  codrops-sourced demos branded "Checkbox #1"–"#9": 11 → "#1" (Quadly,
  Bootstrap `custom-control`), 12 → "#2" (Duo), 13 → "#3" (Trio), 14 → "#4"
  (Quartet, purple `#7e0cf5`), 15 → "#5" (Quintet, MATERIAL checkbox, hot pink
  `#e13a9d`), 16 → "#6" (Sextet), 17 → "#7" (Septet, OVERFLOW checkbox, teal
  `#00909e`), 18 → "#8" (Octet, MATERIAL-SWITCH toggle, green `#52de97`), 19 →
  "#9" (Nonet, IOS-SWITCH toggle, green `#4cd964`), **20 → "#9" (THIS
  template, TELEPORT-SWITCH toggle, green `#4cd964`)**. Each entry has its OWN
  widget + checked color — do NOT reuse a sibling app's component. Warp's
  widget is the codrops **teleport-switch** toggle: Bootstrap `custom-control`
  label (padding-left: 0) + "Off" span + hidden input +
  `teleport-switch-control-indicator` (track) + "On" span.
- **Visual design (DOM + CSS tokens + screenshot + live computed styles):**
  minimal demo page on pure white. One centered narrow column (col-lg-3 ≈
  255–280px) with 112px vertical padding: left-aligned 20px dark heading
  "Checkbox #9" (48px vertical margins), then FOUR stacked `div.mb-4` rows
  (24px gap), each a small muted caption (`span.text-muted.small`, grey
  `#6c757d`, 80% size) above a `label.custom-control.teleport-switch` toggle
  row "Off [track] On":
  1. **Switch 1** — checked → white track, 2px green `#4cd964` border, green
     12px dot right (2px from right edge)
  2. **Switch 2** — unchecked → white track, 2px `#ccc` border, grey `#ccc`
     12px dot left
  3. **Switch disabled** — unchecked + disabled → track+dots at `opacity:
.4`, grey dot left, not interactive
  4. **Switch disabled & checked** — checked + disabled → green-bordered
     track at `opacity: .4` (muted), green dot right, not interactive
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #9" (NOT "#20") — keep it verbatim; the
     checklist row "Checkbox 20" is the mapping record, not on-screen copy.
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
     `label.custom-control.teleport-switch` (padding-left: 0):
     - `span.teleport-switch-control-description` "Off"
     - `input[type=checkbox].teleport-switch-control-input`
       (`checked`/`disabled` per state, `display: none` in source)
     - `span.teleport-switch-control-indicator` (32×20px track)
     - `span.teleport-switch-control-description` "On".
- **Design tokens (from `css/style.css` + live computed styles):**
  - Accent: **`#4cd964`** (iOS green) — `--color` custom property on
    `.teleport-switch`; applied to the CHECKED TRACK BORDER (`border-color`)
    AND the incoming right dot (`background-color`)
  - Track `.teleport-switch-control-indicator`: **32×20px**, `inline-block`,
    `position: relative`, **`margin: 0 10px`** (10px gap to Off/On labels),
    `top: 4px`, **bg `#fff`**, **radius 16px** (full pill), **border 2px
    solid `#ccc`** (NOT `#ddd` like the ios-switch), **`overflow: hidden`**
    (clips the off-track dots — the teleport trick), `transition: .3s`
  - Dots `::after` (left) + `::before` (right): **12×12px** circles (SMALLER
    than the ios-switch's 16×16 knob), `border-radius: 50%`, absolute
    **`top: 2px`**, **bg `#ccc`** (grey — NO white knob, NO shadow), `left:
2px` / `right: -14px` (parked off-track right), `transition: .3s`
  - Checked (`:checked ~ …indicator`): **`border-color: var(--color)`** → the
    2px border turns green `#4cd964` (border does NOT expand — the track
    STAYS white; NO solid-green-track effect, unlike Nonet); `::after` →
    **`left: -14px`** (left grey dot teleports out, clipped); `::before` →
    **`right: 2px`** + **`background-color: var(--color)`** (right dot
    teleports in and turns green). Net: white pill, green border, green dot
    right
  - Disabled (`:disabled ~ …indicator`): **`opacity: .4`** on track+dots
    (Off/On text stays full opacity)
  - Input: `display: none` (source) → recreation uses the repo
    visually-hidden-but-focusable pattern (see spec) — a DELIBERATE a11y
    improvement over the source, keep visuals identical
  - Caption: `text-muted small` → `#6c757d`, 80% (~12.8px)
  - Row label: `custom-control` base with `padding-left: 0`; Off/On spans
    16px dark `#212529` Roboto
  - Page: `#fff` bg, Roboto stack, `.content` padding 7rem 0, `h2` 20px
    weight 500 dark
  - **No `:active` press state** in this widget (unlike the ios-switch's
    knob-widen) — nothing to replicate
- **Recreation decisions (from spec):** pure-CSS toggle (overflow-hidden
  track + two 12px pseudoelement dots; checked = border-color flip + dots
  swap sides via `peer-checked:` left/right transitions — e.g. Tailwind
  `border-2 border-[#ccc] overflow-hidden` ↔ `border-[#4cd964]` with
  `peer-checked:` plus dot translate transitions), Roboto via Google Fonts
  `<link>`, plain React state per switch, `disabled` variants not toggleable,
  captions + Off/On labels + heading verbatim, minimal footer with
  https://www.componentdock.com/ (demo has no footer — repo mandate). A11y:
  native input visually-hidden but focusable + `peer`/`peer-checked:` wiring,
  accessible name from caption (`aria-label` or `aria-labelledby` — the
  caption sits OUTSIDE the label in the source), focus-visible ring.

## Tasks (implementation checklist — do in order)

1. [ ] `apps/warp` scaffold: copy the simplest existing app (e.g.
       `apps/nonet` once it ships, or `apps/octet`), rename package to
       `@free-react-templates/warp`, update `public/CNAME` →
       `warp.free.componentdock.com`, `homepage` →
       `https://warp.free.componentdock.com`; `npm install` at root so the
       lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): heading, four-state
       list, checked/unchecked/disabled visuals, border-color flip + dot
       teleport (left out / right in), toggle-by-click/Space, disabled
       no-toggle, a11y (accessible name from caption, focus ring), footer
       with Component Dock link, document title.
3. [ ] `src/index.css`: `@theme` tokens — accent `#4cd964` (iOS green),
       track `#fff`, border `#ccc`, dot `#ccc`, caption grey `#6c757d`;
       Roboto via Google Fonts `<link>` in `index.html`.
4. [ ] `SwitchRow` component: caption span (text-muted small) + visually-
       hidden-but-focusable native input with `aria-label`/`aria-labelledby`
       = caption + `peer`-wired track; unchecked → white track, 2px `#ccc`
       border, grey 12×12 dot left (`top: 2px`, `left: 2px`) + second dot
       parked off-track right (`right: -14px`, clipped by overflow-hidden);
       checked → border turns `#4cd964` (NO expansion), left dot exits left,
       green dot enters right (`right: 2px`); disabled → `opacity: .4` per
       state. No `:active` press state (source has none).
5. [ ] `DemoSection`: `.content` (112px padding) → centered container →
       centered narrow column → `h2` "Checkbox #9" + four rows in order
       (Switch 1 checked / Switch 2 unchecked / Switch disabled / Switch
       disabled & checked).
6. [ ] `App.tsx`: DemoSection + minimal footer (Component Dock link) in a
       `<main>` landmark; title "Warp — Teleport Toggle Switch UI Template".
7. [ ] `scripts/verify-app.sh warp` (typecheck + lint + 100% coverage +
       build); PR `feat/template-warp` → merge immediately
       (`gh pr merge --squash --delete-branch`).
8. [ ] Bookkeeping: TEMPLATES.md line 750 `[~]`→`[x]` + surge URL,
       `npm run readme:status`, push. (Implementer's job — NOT the prep
       stream.)
