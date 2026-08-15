# Duo — prep notes (ColorLib Checkbox 12)

> Prepped by stream 3 (2026-08-15). Implementer: read `docs/replication.md`
>
> - `openspec/specs/template-duo/spec.md` FIRST, then this file. This template
>   is part of the "Bootstrap Checkboxes (20)" series; the line to mark `[x]`
>   in TEMPLATES.md is 742.

## Source

- TEMPLATES.md: **Checkbox 12** — https://colorlib.com/wp/template/checkbox-12/
  (line 742; single row, no duplicate rows)
- Preview: `https://preview.colorlib.com/theme/bootstrap/checkbox-12/` — HTTP
  200, 16,837 bytes. **The naive `https://preview.colorlib.com/theme/checkbox-12/`
  returns HTTP 404** — the "Checkbox NN" demos are sub-pages of ColorLib's
  big Bootstrap theme (sub-path `/theme/bootstrap/checkbox-NN/`).
- Screenshot: `checkbox-12.jpg` (1200×972) — matches the live DOM exactly
  (heading "Checkbox #2" + four 4-state checkboxes; component-preview origin
  in the browser chrome confirms codrops sourcing).

## Naming

- New name: **Duo** ("duo" = two/pair — the SECOND entry of the "Checkbox #N"
  sub-series, branded "Checkbox #2"). Single lowercase word; verified free in
  `apps/`, `openspec/specs/`, `docs/templates/`, TEMPLATES.md (2026-08-15).
- Source name "Checkbox 12" is FORBIDDEN in app code (provenance lives only
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
  - checkbox-12 → "Checkbox #2" = **codrops `.control` custom-checkbox
    widget** → prepped as **Duo** (this template).
- Do NOT reuse the Quadly app/component. Widget anatomy differs: 20×20px
  indicator (not 16px), 15px row gap (not min-height 1.5rem), 30px left
  padding slot, sharp square (no 4px radius), no transition, icomoon glyph
  checkmark (not an SVG data-URI), hover `#ccc`/`#1a88ff` (not Bootstrap's
  focus ring).

## Live DOM (order 1:1)

```
div.content                      (padding: 7rem 0 = 112px vertical)
└─ div.container.text-left
   └─ div.row.justify-content-center
      └─ div.col-lg-3            (≈25% of container on lg+, full-width below)
         ├─ h2.my-5.text-left    "Checkbox #2" (20px, dark)
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

## Design tokens (from live `css/style.css`, 2,217 bytes)

- Page: `body { font-family: Roboto stack; background-color: #fff }`;
  `h2 { font-size: 20px }`; `.content { padding: 7rem 0 }`.
- `.control`: block, relative, `padding-left: 30px`, `margin-bottom: 15px`,
  `cursor: pointer`, `font-size: 18px`.
- `.control input`: absolute, `z-index: -1`, `opacity: 0` (focusable,
  label-wired).
- `.control__indicator`: absolute, `top: 2px; left: 0`, **20×20px**,
  `background: #e6e6e6`. NO border, NO radius (square).
- Checkmark `.control__indicator:after`: icomoon `\e5ca`, `display: none`;
  checked → `display: block; color: #fff`, centered
  `translate(-50%, -52%)` → replicate with lucide-react `Check` (strokeWidth
  ~3, ~12px, white, absolutely centered in the indicator).
- Colors:
  - unchecked / disabled bg: `#e6e6e6` (disabled adds `opacity: 0.6` +
    `pointer-events: none`)
  - checked bg: `#007bff`; disabled+checked bg: `#007bff` at `opacity: .2`
  - hover/focus bg: `#ccc`; checked hover/focus bg: `#1a88ff`
- NO transition on the indicator (state flips instantly) — do not add one.

## Implementation tasks (TDD, 100% coverage)

1. Copy the simplest existing app (e.g. `apps/quadly` is the closest sibling
   — same series, single-section checkbox demo; or `apps/checkly`) to
   `apps/duo`; rename package to `@free-react-templates/duo`.
2. `public/CNAME` → `duo.free.componentdock.com`; `"homepage"` →
   `https://duo.free.componentdock.com`.
3. `index.html`: Roboto Google Fonts link (400 + 500); title "Duo — Checkbox
   #2" (or similar).
4. Component: one section (`py-28` ≈ 112px) → centered narrow column
   (`max-w-…` ≈ 25% of 1140px container = ~285px on lg+, full-width below)
   → heading "Checkbox #2" (`my-12` ≈ 3rem) → four rows.
5. Row component (label-wrapped): visually-hidden real `<input
type="checkbox">` (sr-only, focusable, label-associated) + 20×20px square
   indicator div + label text; Tailwind conditional classes:
   - default `bg-[#e6e6e6]`; checked `bg-[#007bff]`; disabled `opacity-60
pointer-events-none`; disabled+checked `bg-[#007bff] opacity-20`
   - hover/focus-within: `bg-[#ccc]` unchecked, `bg-[#1a88ff]` checked
   - `Check` icon white, ~12px, absolutely centered in the indicator, shown
     only when checked
6. Model rows 1–2 as controlled state (row 1 `defaultChecked`), rows 3–4
   static `disabled`.
7. Footer per repo mandate: links https://www.componentdock.com/
   (see docs/conventions.md). NO ColorLib references anywhere in app code.
8. Tests (vitest + testing-library): heading renders; four rows with verbatim
   labels in order; state colors per scenario; toggle behavior on rows 1–2;
   disabled rows ignore clicks; no navbar/footer/images. **100% coverage
   (lines/functions/branches/statements)** via `scripts/verify-app.sh duo`.
9. PR to main, squash-merge immediately; TEMPLATES.md line 742 `[ ]`→`[x]`
   - surge URL + `npm run readme:status` (implementer stream does this).

## Pitfalls

- The naive preview URL 404s — always use `/theme/bootstrap/checkbox-12/`.
- This is NOT Quadly's widget — codrops `.control`, 20px square, no radius,
  no transition, 15px gap.
- The checkmark must be a lucide `Check` (repo convention) — do NOT load
  icomoon or copy the SVG data-URI.
- Heading is "Checkbox #2" — NOT "BS4 Custom Checkbox #2" (that's Checkbox
  11/Quadly's heading). Title tag is "Checkbox #2" too.
