# Taskly (ColorLib Checkbox 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-taskly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 09" — ninth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-09/).
  TEMPLATES.md line 739 — mark that line `[x]` when done (single row, no
  duplicates). NOTE: each item in this series is a DIFFERENT variant design —
  Checkbox 09 is the **ks-cboxtags TASK-CHECKLIST** variant (3 strikethrough
  task rows with green check circles), NOT the Soluna day/night switch
  variant, NOT the Toggly pink switch variant, NOT the Tickwell
  notification-filter pill variant. Do not reuse the Soluna/Toggly app
  blindly; verify the live DOM for each new item.
- **Sibling mapping:** Checkbox 01→Tickbox, 02→Picks, 03→Ticktag, 04→Checkly,
  05→Tickwell, 06→Toggly, 07→Switchly, 08→Soluna. Checkbox 09 → **Taskly**
  (task + the series' "-ly" suffix).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-09/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-09/` (HTTP 200,
  8.1 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-09/css/style.css`
  (~222 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (**USED on this page** — the status icons `\f1db`
  fa-circle-thin / `\f058` fa-check-circle are font-awesome glyphs). Google
  Font **Poppins** 300–500 (@font-face in head). Cross-checked with the
  TEMPLATES.md screenshot (`checkbox-09.jpg` 1200×972, browser-viewed
  2026-08-15) AND a live browser render (2026-08-15) — all match. Demo
  brands itself "Checkbox #09"; recreation uses the NEW name **Taskly**.
- **Visual design (DOM + CSS tokens + screenshot + live render):** minimal
  demo page on **white `#fff`** (body `#fff` — same as Soluna/checkbox-08).
  Centered black 28px heading "Checkbox #09" (`.heading-section`, `mb-5` =
  3rem bottom margin; **NO sub-heading** in this variant — Soluna's
  "Day & Night Switch Toggle" line does NOT exist here), then a narrow
  col-md-4 (~350px) centered column with `ul.ks-cboxtags` — THREE stacked
  full-width rounded rows:
  1. `#checkboxOne` + "Task One" — CHECKED: light-mint `#7de6b1` border,
     faded `#bfbfbf` text with line-through, solid green `#52de97`
     circle-with-check at the right.
  2. `#checkboxTwo` + "Task Two" — UNCHECKED: `rgba(0,0,0,0.1)` gray border,
     `#333333` dark text, empty gray `rgba(0,0,0,0.2)` circle outline.
  3. `#checkboxThree` + "Task Three" — UNCHECKED (same; source has a
     duplicated `value="Order Two"` typo on 2–3 — irrelevant to the visual,
     labels are Task One/Two/Three).
     Screenshot + live render confirm: white page, black heading, 3 stacked
     rounded rows; top row struck-out with solid green check circle; lower two
     with empty gray circles. No navbar, no footer, no images.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #09" (28px, `#000`, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column, NO text-center) → `ul.ks-cboxtags` (list-style none,
     padding 20px):
  4. 3 × `li` → `<input type="checkbox" id="checkboxOne" value="Order one"
checked>` + `<label for="checkboxOne">Task One</label>` (and
     checkboxTwo/Task Two, checkboxThree/Task Three, both unchecked).
- **Design tokens (from `css/style.css`):**
  - Brand accent `#52de97` (vivid green) — CHECKED row's icon AND the page
    link color (`a { color: #52de97 }`); CHECKED border `#7de6b1` (light
    mint).
  - Row label: `display: block; background: rgba(255,255,255,0.9); border:
1px solid rgba(0,0,0,0.1); color: #333333; font-size: 18px;
border-radius: 4px; white-space: nowrap; margin: 0 0 10px 0;
user-select: none; transition: all .2s; padding: 10px 20px; cursor:
pointer`.
  - Icon (`label::before`): font-awesome `\f1db` empty circle outline, 24px,
    `color: rgba(0,0,0,0.2)`, `position: absolute; right: 40px;
margin-top: -5px` (sits at each row's static vertical position — pinned
    near the row's right edge; the `.3s transform` transition is vestigial).
  - CHECKED: icon → `\f058` fa-check-circle, `color: #52de97`; label →
    `border: 1px solid #7de6b1; text-decoration: line-through;
color: #bfbfbf`.
  - input: `position: absolute; opacity: 0` (visually hidden, focusable).
  - Page: body `#fff`, Poppins 14px / lh 1.8 / gray; heading 28px `#000`;
    section padding `7em 0`; ul padding 20px; rows 10px apart; radius 4px.
- **Recreation decisions:** pure CSS checklist → React state (three `checked`
  states: true / false / false); replace font-awesome glyphs with
  lucide-react `Circle` (unchecked outline) and `CircleCheck` (checked solid;
  older lucide-react exports `CheckCircle2`) icons at 24px; Poppins via
  Google Fonts `<link>`; keep the visually-hidden native
  `<input type="checkbox">` per row (opacity-0, focusable, label-associated —
  the visible label text names each input, so no `aria-label` needed); add a
  focus-visible ring (repo a11y convention, documented deviation); timings
  via Tailwind `transition-*` (0.2s all); honor `prefers-reduced-motion`
  (state flips instantly, transitions suppressed). Demo has no footer — add a
  MINIMAL footer with the mandated Component Dock link
  (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/taskly`; rename package to
   `@free-react-templates/taskly`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `taskly.free.componentdock.com`, `"homepage"` =
   `https://taskly.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fff` page bg, `#52de97` green accent
   (checked icon + link), `#7de6b1` checked border, `rgba(0,0,0,0.1)`
   unchecked border, `#333333` unchecked text, `#bfbfbf` checked text,
   `rgba(0,0,0,0.2)` unchecked icon; radius 4px; Poppins font stack.
3. `src/App.tsx`: single `DemoSection` — centered `h2` "Checkbox #09" (28px,
   `#000`, `mb-12` ≈ 3rem) + `Checklist` inside a `max-w-[350px] mx-auto`
   column; section `py-[112px]`.
4. `src/components/ChecklistRow.tsx` (or `TaskRow.tsx`): props `{ id,
label, defaultChecked }`; data = `[{ id: 'task-1', label: 'Task One',
defaultChecked: true }, { id: 'task-2', label: 'Task Two',
defaultChecked: false }, { id: 'task-3', label: 'Task Three',
defaultChecked: false }]`; each row = `<li>` → `<label>` (block,
   `px-5 py-2.5` ≈ 10px/20px, `rounded` 4px, cursor-pointer) wrapping a
   visually-hidden real `<input type="checkbox">` (`opacity-0 absolute`) +
   text (18px) + right-pinned 24px lucide icon that swaps `Circle` ↔
   `CircleCheck` on checked; checked classes: border `#7de6b1`, text
   `#bfbfbf` + `line-through`, icon `#52de97`; unchecked classes: border
   `rgba(0,0,0,0.1)`, text `#333333`, icon `rgba(0,0,0,0.2)`; simplest
   faithful layout: flex row `justify-between` with the icon at the right
   (visually equivalent to the reference's `right: 40px` absolute pin);
   focus-visible ring; `prefers-reduced-motion` respected.
5. Minimal footer with Component Dock link (`packages/ui` Button/ButtonLink +
   `cn()` used somewhere — knip gate).
6. Tests (100% coverage): heading renders, 3 rows render with labels, default
   states (row 1 checked → mint border + strikethrough + `CircleCheck` green
   icon; rows 2–3 unchecked → gray border + dark text + `Circle` gray icon),
   click toggles a row (border/icon/text/strikethrough flip), toggle back,
   keyboard (Space) toggle, label-associated input names, responsive column,
   footer link.
7. Gate: `scripts/verify-app.sh taskly`; PR description with source (ColorLib
   Checkbox 09), preview URL, tokens, diffs; mark TEMPLATES.md line 739
   `[x]` + surge URL + `npm run readme:status`.
