# Octet (ColorLib Checkbox 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-octet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 18" — eighteenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-18/).
  TEMPLATES.md line 748 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-18/`
  is **404** (verified 2026-08-15) — these demos live under the Bootstrap
  mega-theme. Use `https://preview.colorlib.com/theme/bootstrap/checkbox-18/`
  (HTTP 200, 18.1 KB HTML, verified 2026-08-15). Page stylesheet (contains
  the WHOLE widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-18/css/style.css`
  (2,157 bytes / 60 lines — fully extracted for tokens). libs: bootstrap 4,
  jquery, popper. **Toggle is pure CSS** (track + knob pseudoelement — no
  icon font). Google Font **Roboto** (system stack — NOT Poppins). Document
  title: "Checkbox #8". Cross-checked with the TEMPLATES.md screenshot
  (`checkbox-18.jpg` 1200×972, browser-viewed 2026-08-15) AND live computed
  styles (rows=4, track 32×16 `rgb(239,239,239)` radius 16px, knob 20×20
  `rgb(253,253,253)` → checked `rgb(82,222,151)` left 17px, input
  display:none, label padding-left 0, h2 20px/48px margins, .content 112px
  padding) — all match.
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
  codrops OVERFLOW _checkbox_ widget, teal `#00909e`), **18 → "#8" (THIS
  template, codrops MATERIAL-SWITCH _toggle_ widget, green `#52de97`)**, 19 →
  "#9", 20 → duplicate "#9". Each 11–20 entry has its OWN heading AND its own
  widget/checked color — do NOT reuse the Sextet (blue `.control`), Quintet
  (Material checkbox, pink) or Septet (overflow checkbox, teal) components.
  Octet's widget is the codrops **material-switch** toggle: Bootstrap
  `custom-control` label (padding-left: 0) + "Off" span + hidden input +
  `material-switch-control-indicator` (track) + "On" span. It is a TOGGLE
  SWITCH, not a checkbox — the knob slides left↔right.
- **Visual design (DOM + CSS tokens + screenshot + live computed styles):**
  minimal demo page on pure white. One centered narrow column (col-lg-3 ≈
  255–280px) with 112px vertical padding: left-aligned 20px dark heading
  "Checkbox #8" (48px vertical margins), then FOUR stacked `div.mb-4` rows
  (24px gap), each a small muted caption (`span.text-muted.small`, grey
  `#6c757d`, 80% size) above a `label.custom-control.material-switch` toggle
  row "Off [track] On":
  1. **Switch 1** — checked → green `#52de97` knob on the right (17px) with
     green glow; track stays `#efefef`
  2. **Switch 2** — unchecked → white `#fdfdfd` knob on the left (-1px) with
     grey glow `rgba(170,170,170,.7)`
  3. **Switch disabled** — unchecked + disabled → track+knob at `opacity:
.4`, white knob left, not interactive
  4. **Switch disabled & checked** — checked + disabled → track+knob at
     `opacity: .4`, green knob right, not interactive
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #8" (NOT "#18") — keep it verbatim; the
     checklist row "Checkbox 18" is the mapping record, not on-screen copy.
     Captions "Switch 1"/"Switch 2"/"Switch disabled"/"Switch disabled &
     checked" verbatim — they ARE the design.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #8" (20px, dark, left-aligned, 48px
     top+bottom margins) →
  5. 4 × `div.mb-4` (margin-bottom 1.5rem = 24px), each:
     `span.text-muted.small` caption (outside the label!) +
     `label.custom-control.material-switch` (padding-left: 0):
     - `span.material-switch-control-description` "Off"
     - `input[type=checkbox].material-switch-control-input`
       (`checked`/`disabled` per state, `display: none` in source)
     - `span.material-switch-control-indicator` (32×16px pill track)
     - `span.material-switch-control-description` "On".
- **Design tokens (from `css/style.css` + live computed styles):**
  - Accent: **`#52de97`** (green) — `--color` custom property on
    `.material-switch`; applied to the KNOB only when checked
  - Track `.material-switch-control-indicator`: **32×16px**,
    `inline-block`, `position: relative`, **`margin: 0 10px`** (10px gap to
    Off/On labels), `top: 4px`, **bg `#efefef`**, **radius 16px** (full
    pill), `transition: .3s`
  - Knob `::after`: **20×20px** circle, `border-radius: 50%`, absolute
    **`top: -2px; left: -1px`** (unchecked), **bg `#fdfdfd`**,
    **shadow `0 2px 10px rgba(170,170,170,.7)`**; taller than the track and
    overhangs the left edge 1px
  - Checked (`:checked ~ …::after`): **bg `#52de97`**, **`left: 17px`**
    (overhangs the 32px track 5px on the right — toward "On"),
    **shadow `0 2px 10px rgba(82,222,151,.5)`** (green glow); track bg stays
    `#efefef` in BOTH states
  - Disabled (`:disabled ~ .material-switch-control-indicator`):
    **`opacity: .4`** on track+knob (Off/On text stays full opacity)
  - Input: `display: none` (source) → recreation uses the repo
    visually-hidden-but-focusable pattern (see spec) — a DELIBERATE a11y
    improvement over the source, keep visuals identical
  - Caption: `text-muted small` → `#6c757d`, 80% (~12.8px)
  - Row label: `custom-control` base with `padding-left: 0`; Off/On spans
    16px dark `#212529` Roboto
  - Page: `#fff` bg, Roboto stack, `.content` padding 7rem 0, `h2` 20px
    weight 500 dark
- **Recreation decisions (from spec):** pure-CSS toggle (track + knob
  pseudoelements with box-shadow glow — no assets, no icon font), Roboto via
  Google Fonts `<link>`, plain React state per switch, `disabled` variants
  not toggleable, captions + Off/On labels + heading verbatim, minimal footer
  with https://www.componentdock.com/ (demo has no footer — repo mandate).
  A11y: native input visually-hidden but focusable + `peer`/`peer-checked:`
  wiring, accessible name from caption (`aria-label` or `aria-labelledby` —
  the caption sits OUTSIDE the label in the source), focus-visible ring.

## Tasks (implementation checklist — do in order)

1. [ ] `apps/octet` scaffold: copy the simplest existing app (e.g.
       `apps/septet`), rename package to `@free-react-templates/octet`,
       update `public/CNAME` → `octet.free.componentdock.com`, `homepage` →
       `https://octet.free.componentdock.com`; `npm install` at root so the
       lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): heading, four-state
       list, checked/unchecked/disabled visuals, knob slide + green glow
       classes, toggle-by-click/Space, disabled no-toggle, a11y (accessible
       name from caption, focus ring), footer with Component Dock link,
       document title.
3. [ ] `src/index.css`: `@theme` tokens — accent `#52de97` (green), track
       `#efefef`, knob `#fdfdfd`, caption grey `#6c757d`; Roboto via Google
       Fonts `<link>` in `index.html`.
4. [ ] `SwitchRow` component: caption span (text-muted small) + visually-
       hidden-but-focusable native input with `aria-label`/`aria-labelledby`
       = caption + `peer`-wired track; checked → knob `#52de97` green +
       `left: 17px` + green glow (exact geometry: knob 20×20, `top: -2px`,
       unchecked `left: -1px`, checked `left: 17px`, 0.3s transition);
       disabled → `opacity: .4` per state.
5. [ ] `DemoSection`: `.content` (112px padding) → centered container →
       centered narrow column → `h2` "Checkbox #8" + four rows in order
       (Switch 1 checked / Switch 2 unchecked / Switch disabled / Switch
       disabled & checked).
6. [ ] `App.tsx`: DemoSection + minimal footer (Component Dock link) in a
       `<main>` landmark; title "Octet — Toggle Switch UI Template".
7. [ ] `scripts/verify-app.sh octet` (typecheck + lint + 100% coverage +
       build); PR `feat/template-octet` → merge immediately
       (`gh pr merge --squash --delete-branch`).
8. [ ] Bookkeeping: TEMPLATES.md line 748 `[~]`→`[x]` + surge URL,
       `npm run readme:status`, push. (Implementer's job — NOT the prep
       stream.)
