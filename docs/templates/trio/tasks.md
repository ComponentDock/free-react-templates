# Trio — prep notes (ColorLib Checkbox 13)

> Prepped by stream 3 (2026-08-15). Implementer: read `docs/replication.md`
>
> - `openspec/specs/template-trio/spec.md` FIRST, then this file. This template
>   is part of the "Bootstrap Checkboxes (20)" series; the line to mark `[x]`
>   in TEMPLATES.md is 743.

## Source

- TEMPLATES.md: **Checkbox 13** — https://colorlib.com/wp/template/checkbox-13/
  (line 743; single row, no duplicate rows)
- Preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-13/` — HTTP
  200, 16,837 bytes. **The naive `https://preview.colorlib.com/theme/checkbox-13/`
  returns HTTP 404** — the "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme (sub-path `/theme/bootstrap/checkbox-NN/`).
- Screenshot: `checkbox-13.jpg` (1200×972) — matches the live DOM exactly
  (heading "Checkbox #3" + four ROUND 4-state checkboxes with coral checked
  circles; component-preview origin in the browser chrome confirms codrops
  sourcing).

## Naming

- New name: **Trio** ("trio" = group of three — the THIRD entry of the
  "Checkbox #N" sub-series, branded "Checkbox #3"). Single lowercase word;
  verified free in `apps/`, `openspec/specs/`, `docs/templates/`, TEMPLATES.md
  (2026-08-15).
- Source name "Checkbox 13" is FORBIDDEN in app code (provenance lives only
  in spec/TEMPLATES.md/PR).

## Series context (verified 2026-08-15)

- Entries 01–10 of "Bootstrap Checkboxes (20)" → `/theme/bootstrap/checkbox-01/`
  …`/checkbox-10/` (custom designs: Tickbox, Picks, Ticktag, Checkly, Tickwell,
  Toggly, Switchly, Soluna, Taskly, Moodly).
- Entries 11–20 → `/theme/bootstrap/checkbox-11/`…`/checkbox-20/` — a separate
  codrops-sourced sub-series. **Each entry is its OWN demo with its own
  heading and widget — verify each DOM individually, do NOT assume siblings
  are identical:**
  - checkbox-11 → "BS4 Custom Checkbox #1" = Bootstrap `custom-control
custom-checkbox` widget → prepped as **Quadly** (NOT the same widget as
    this template).
  - checkbox-12 → "Checkbox #2" = codrops `.control` widget, SQUARE 20×20px
    indicators, Bootstrap blue `#007bff`, no transition → prepped as **Duo**.
  - checkbox-13 → "Checkbox #3" = codrops `.control` widget, **ROUND**
    indicators (`border-radius: 50%`), drop shadow, coral `#f67280`, 14px
    checkmark with `.3s` transition → prepped as **Trio** (this template).
- Do NOT reuse the Quadly app/component (different widget entirely) and do NOT
  copy Duo's indicator styling: Trio's indicators are ROUND circles with a
  drop shadow and CORAL checked color — Duo is square + Bootstrap blue. The
  widget anatomy (20px indicator, 15px row gap, 30px left padding slot,
  label-wraps-input+indicator, icomoon glyph checkmark, hover
  `#ccc`/`#f88a96`) is otherwise shared.

## Live DOM (order 1:1)

```
div.content                      (padding: 7rem 0 = 112px vertical)
└─ div.container.text-left
   └─ div.row.justify-content-center
      └─ div.col-lg-3            (≈25% of container on lg+, full-width below)
         ├─ h2.my-5.text-left    "Checkbox #3" (20px, dark)
         ├─ label.control.control--checkbox  "First checkbox"
         │    ├─ input[type=checkbox checked]
         │    └─ div.control__indicator
         ├─ label.control.control--checkbox  "Second checkbox"
         │    ├─ input[type=checkbox]
         │    └─ div.control__indicator
         ├─ label.control.control--checkbox  "Disabled"
         │    ├─ input[type=checkbox disabled]
         │    └─ div.control__indicator
         └─ label.control.control--checkbox  "Disabled & checked"
              ├─ input[type=checkbox disabled checked]
              └─ div.control__indicator
```

NO navbar, NO footer, NO images. Label WRAPS text + input + indicator div.

## Design tokens (from live `css/style.css`, 2,453 bytes)

- Page: `body { font-family: Roboto stack; background-color: #fff }`;
  `h2 { font-size: 20px }`; `.content { padding: 7rem 0 }`.
- `.control`: block, relative, `padding-left: 30px`, `margin-bottom: 15px`,
  `cursor: pointer`, `font-size: 18px`.
- `.control input`: absolute, `z-index: -1`, `opacity: 0` (focusable,
  label-wired).
- `.control__indicator`: absolute, `top: 2px; left: 0`, **20×20px**,
  `background: #e6e6e6`, **`border-radius: 50%` (ROUND)**, `box-shadow:
0 1px 2px 0 rgba(0,0,0,.5)`. NO border.
- Checkmark `.control__indicator:after`: icomoon `\e5ca` (`icon-check2`),
  `display: none`, **font-size: 14px**, **transition: .3s all ease**; checked →
  `display: block; color: #fff`, centered `translate(-50%, -50%)` → replicate
  with lucide-react `Check` (strokeWidth ~3, ~12px, white, absolutely centered
  in the indicator, fade-in ~.3s).
- Colors:
  - unchecked / disabled bg: `#e6e6e6` (disabled adds `opacity: 0.6` +
    `pointer-events: none`)
  - checked bg: **`#f67280` (coral)**; disabled+checked bg: `#f67280` at
    `opacity: .2`
  - hover/focus bg: `#ccc`; checked hover/focus bg: `#f88a96`
- Vestigial rule `.control--checkbox input:disabled ~ .control__indicator:after
{ border-color: #7b7b7b }` — no visual effect on the font glyph; ignore.

## Implementation tasks (TDD, 100% coverage)

1. Copy the simplest existing app — `apps/duo` is the closest sibling (same
   series, same codrops `.control` widget, single-section checkbox demo).
   Rename package to `@free-react-templates/trio`. Adapt the indicator
   styling from square+blue to ROUND+coral (see tokens above) — do NOT
   blindly copy Duo's `@theme` colors.
2. `public/CNAME` → `trio.free.componentdock.com`; `"homepage"` →
   `https://trio.free.componentdock.com`.
3. `index.html`: Roboto Google Fonts link (400 + 500); title "Trio — Checkbox
   #3" (or similar).
4. Component: one section (`py-28` ≈ 112px) → centered narrow column
   (`max-w-…` ≈ 25% of 1140px container = ~285px on lg+, full-width below)
   → heading "Checkbox #3" (`my-12` ≈ 3rem) → four rows.
5. Row component (label-wrapped): visually-hidden real `<input
type="checkbox">` (sr-only, focusable, label-associated) + 20×20px ROUND
   indicator div (`rounded-full` + shadow-sm) + label text; Tailwind
   conditional classes:
   - default `bg-[#e6e6e6]`; checked `bg-[#f67280]`; disabled `opacity-60
pointer-events-none`; disabled+checked `bg-[#f67280] opacity-20`
   - hover/focus-within: `bg-[#ccc]` unchecked, `bg-[#f88a96]` checked
   - `Check` icon white, ~12px, absolutely centered in the indicator, shown
     only when checked, ~.3s fade-in
6. Model rows 1–2 as controlled state (row 1 `defaultChecked`), rows 3–4
   static `disabled`.
7. Footer per repo mandate: links https://www.componentdock.com/
   (see docs/conventions.md). NO ColorLib references anywhere in app code.
8. Tests (vitest + testing-library): heading renders; four rows with verbatim
   labels in order; state colors per scenario; toggle behavior on rows 1–2;
   disabled rows ignore clicks; no navbar/footer/images. **100% coverage**
   (lines/functions/branches/statements) in `apps/trio/src/**`.
9. Local gate: `scripts/verify-app.sh trio` (typecheck + lint + knip + fallow
   - 100% coverage tests + build).
10. Branch `feat/template-trio`, PR, immediate squash merge; then mark
    TEMPLATES.md line 743 `[x]` with surge URL + homepage,
    `npm run readme:status`, push.
