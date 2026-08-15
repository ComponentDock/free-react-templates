# Quartet (ColorLib Checkbox 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-quartet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 14" — fourteenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-14/).
  TEMPLATES.md line 744 — mark that line `[x]` when done (single row).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-14/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-14/` (HTTP 200,
  16.8 KB HTML, verified 2026-08-15). Page stylesheet (contains the WHOLE
  widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-14/css/style.css`
  (2,353 bytes — fully extracted for tokens). libs: bootstrap 4, jquery,
  popper. Check glyph = icomoon `\e5ca` (Material "check"). Google Font
  **Roboto** (system stack — NOT Poppins). Cross-checked with the
  TEMPLATES.md screenshot (`checkbox-14.jpg` 1200×972, browser-viewed) —
  all match.
- **NUMBERING QUIRK (verified 2026-08-15):** the preview server hosts TWO
  sub-series. Entries 01–10 = custom designs "Checkbox #01"–"#10"
  (Tickbox/Picks/Ticktag/Checkly/Tickwell/Toggly/Switchly/Soluna/Taskly/
  Moodly). Entries 11–20 = codrops-sourced demos "BS4 Custom Checkbox
  #1"–"#9": checkbox-11 → "#1" (Quadly, Bootstrap `custom-control` widget),
  12 → "#2" (Duo, codrops `.control` widget, blue `#007bff`), 13 → "#3"
  (Trio), **14 → "#4" (this template, purple `#7e0cf5`)** … 19 → "#9",
  20 → duplicate "#9". Each 11–20 entry has its OWN heading and its OWN
  checked color — fetch the page before reusing a sibling app.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  pure white. One centered narrow column (col-lg-3 ≈ 280px) with 112px
  vertical padding: left-aligned 20px dark heading "Checkbox #4" (3rem
  vertical margins), then FOUR stacked codrops custom-checkbox rows — each a
  20×20px rounded (4px) square indicator + 18px label, 30px left padding,
  15px row gap:
  1. **First checkbox** — checked → solid purple `#7e0cf5` square + white
     check (hover/focus `#8b24f6`)
  2. **Second checkbox** — unchecked → grey `#e6e6e6` square, no glyph
     (hover/focus `#ccc`)
  3. **Disabled** — unchecked + disabled → `#e6e6e6` at 0.9 opacity
  4. **Disabled & checked** — checked + disabled → `#7e0cf5` at 0.2 opacity
     (faded lavender) + white check
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #4" (NOT "#14") — keep it verbatim; the
     checklist row "Checkbox 14" is the mapping record, not on-screen copy.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #4" (20px, dark, left-aligned, 3rem
     top+bottom margins) →
  5. 4 × `label.control.control--checkbox`:
     label text (18px) + `<input type="checkbox">` (absolute, z-index -1,
     opacity 0; `checked`/`disabled` per state) + `div.control__indicator`
     (20×20px, radius 4px, top 2px left 0; icomoon `\e5ca` 14px white
     glyph, absolutely centered via translate(-50%,-50%), shown only when
     checked, 0.3s transition).
- **Design tokens (from `css/style.css`):**
  - Checked `#7e0cf5` (purple) · checked-hover/focus `#8b24f6`
  - Unchecked `#e6e6e6` · unchecked-hover/focus `#ccc`
  - Disabled `#e6e6e6` + opacity .9 + pointer-events none
  - Disabled+checked `#7e0cf5` + opacity .2; glyph `#fff`
  - Indicator 20×20px, border-radius 4px; glyph 14px, transition .3s ease
  - Row: padding-left 30px, margin-bottom 15px, font-size 18px, cursor
    pointer; input hidden (absolute, z-index -1, opacity 0)
  - Page: body bg `#fff`, font Roboto stack, `.content` 7rem 0 padding,
    h2 20px (weight 500)
  - Note: the `border-color: #7b7b7b` rule on disabled `:after` is
    vestigial (glyph is a font char) — ignore; screenshot shows white glyph.
- **Recreation decisions:** icomoon glyph → lucide-react `Check` (14px,
  white, stroke-width ~3); Roboto via Google Fonts `<link>`; keep the
  hidden native `<input type="checkbox">` inside the label for a11y (click +
  Space toggle; `disabled` blocks toggling) with the indicator as a sibling
  `div` styled via `input:checked ~ .control__indicator` sibling selectors
  (codrops pattern, no external libs); keep the four labels + heading copy
  verbatim. Demo has no footer — add a MINIMAL footer with the mandated
  Component Dock link (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/quartet`; rename package to
   `@free-react-templates/quartet`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `quartet.free.componentdock.com`, `"homepage"` =
   `https://quartet.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: checked `#7e0cf5`, checked-hover
   `#8b24f6`, unchecked `#e6e6e6`, unchecked-hover `#ccc` (opacity values
   can be Tailwind opacity modifiers); page bg `#fff`; Roboto via Google
   Fonts in `index.html`.
3. Components (src/components/): `CheckboxRow` (label + hidden input +
   indicator div with lucide `Check`, props: label, defaultChecked,
   disabled) and `Footer` (minimal Component Dock link). Optional:
   `DemoHeading`.
4. `src/App.tsx` composes: heading + four-state list in one centered
   `.content` block + footer; document title "Quartet — Checkbox UI
   Template".
5. Tests FIRST (red) per spec scenarios (four states, checked/unchecked/
   disabled visuals, toggle by click/Space, disabled not toggleable, a11y
   name, footer link); then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh quartet`; `npm run spec:validate`.
7. PR: `feat/template-quartet` → squash-merge to main; PR description
   includes source template, preview URL (incl. the /theme/bootstrap/
   sub-path caveat + the "#4" heading quirk), design tokens, what differs
   (lucide Check instead of icomoon, footer added per repo mandate).
