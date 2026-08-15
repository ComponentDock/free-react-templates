# Moodly (ColorLib Checkbox 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-moodly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 10" — tenth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-10/).
  TEMPLATES.md line 740 — mark that line `[x]` when done (single row, no
  duplicates). NOTE: each item in this series is a DIFFERENT variant design —
  Checkbox 10 is the **happy/sad MOOD-TOGGLE** variant (one big smiley icon
  with a "happy"/"sad" word), NOT the Taskly strikethrough task-checklist
  variant, NOT the Soluna day/night switch variant, NOT the Toggly pink
  switch variant. Do not reuse the Soluna/Toggly/Taskly app blindly; verify
  the live DOM for each new item.
- **Sibling mapping:** Checkbox 01→Tickbox, 02→Picks, 03→Ticktag, 04→Checkly,
  05→Tickwell, 06→Toggly, 07→Switchly, 08→Soluna, 09→Taskly. Checkbox 10 →
  **Moodly** (mood + the series' "-ly" suffix).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-10/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-10/` (HTTP 200,
  7.8 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-10/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (**USED on this page** — the mood icons `\f118`
  fa-smile-o / `\f119` fa-frown-o are font-awesome glyphs). Google Font
  **Poppins** 300–500 (@font-face in head). Cross-checked with the
  TEMPLATES.md screenshot (`checkbox-10.jpg` 1200×972, browser-viewed
  2026-08-15) — the screenshot shows the CHECKED state (yellow smiley +
  "happy"), matching the live DOM's default `checked` attribute. Demo brands
  itself "Checkbox #10"; recreation uses the NEW name **Moodly**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  near-white **`#fafafa`** (custom ftco `body` override; renders visually
  white). Centered black 28px heading "Checkbox #10" (`.heading-section`,
  `mb-5` = 3rem bottom margin; **NO sub-heading** in this variant — the demo
  HTML has no `small` element), then a narrow col-md-4 (~350px) centered
  column (`row.justify-content-center` + `div.wrap.d-flex.justify-content-center`)
  with ONE `label.checkbox-wrap`:
  1. `<input type="checkbox" checked>` — visually hidden (absolute, opacity
     0, 0×0), default CHECKED.
  2. `<p></p>` — 85px wide, centered; the mood-word slot via `::before`
     content ('sad' → 'happy').
  3. `<span class="checkmark">` — absolute top:0 left:0; the icon slot via
     `::after` content (`\f119` frown → `\f118` smile, 100px).
     Screenshot confirms: white page, black heading, a big thin-outline
     golden-yellow smiley with the word "happy" (also golden-yellow) beneath
     it, generous whitespace, nothing else. No navbar, no footer, no images.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #10" (28px, `#000`, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (≈350px centered
     column, no text-center) → `div.wrap.d-flex.justify-content-center`
     (flex centering the widget horizontally):
  4. `label.checkbox-wrap` (block, relative, cursor pointer, 16px) → hidden
     `<input type="checkbox" checked>` + `<p></p>` (85px centered mood-word
     slot) + `<span class="checkmark">` (100px icon slot).
- **Design tokens (from `css/style.css`):**
  - Brand accent `#f1bc31` (golden yellow) — CHECKED mood icon + CHECKED
    mood word AND the page link color (`a { color: #f1bc31 }`).
  - Unchecked `#6c7b95` (slate blue-gray) — mood icon + mood word.
  - Icon (`.checkmark:after`): font-awesome `\f119` fa-frown-o (unchecked) /
    `\f118` fa-smile-o (checked), 100px, `margin-top: -4px`, 0.3s
    transition; CHECKED adds `color: #f1bc31` + `transform: rotate(-360deg)`
    (spin-in).
  - Mood word (`p:before`): content 'sad' / 'happy', 20px, weight 500, 0.3s
    transition, `width: 85px` centered; colors mirror the icon
    (`#6c7b95` → `#f1bc31`).
  - Page: body `#fafafa`, Poppins 14px / lh 1.8 / gray; heading 28px `#000`;
    section padding `7em 0`; label `margin-bottom: 12px`.
  - `prefers-reduced-motion: reduce` suppresses the 0.3s transitions.
- **Recreation decisions:** pure CSS widget → React state (one `checked`
  state, default true — matches the live DOM); replace font-awesome glyphs
  with lucide-react `Smile` (checked) and `Frown` (unchecked) icons at
  ≈100px (probe both exports with the typeof check — they exist in current
  lucide-react, but verify); Poppins via Google Fonts `<link>`; keep the
  visually-hidden native `<input type="checkbox">` (opacity-0, 0×0,
  focusable, label-associated — the visible mood word names the control;
  add `aria-label` only if the word swap leaves the input unnamed); add a
  focus-visible ring (repo a11y convention, documented deviation); timings
  via Tailwind `transition-*` (0.3s) + the -360deg rotate spin-in on check
  (arbitrary property or keyframe); honor `prefers-reduced-motion`. Layout:
  flex column centered — icon on top, mood word below (visually equivalent
  to the reference's absolute icon + centered 85px word). Demo has no
  footer — add a MINIMAL footer with the mandated Component Dock link
  (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/moodly`; rename package to
   `@free-react-templates/moodly`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `moodly.free.componentdock.com`, `"homepage"` =
   `https://moodly.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fafafa` page bg, `#f1bc31` golden
   accent (checked icon + word + link), `#6c7b95` slate unchecked icon +
   word, `#000` heading; Poppins font stack.
3. `src/App.tsx`: single `DemoSection` — centered `h2` "Checkbox #10" (28px,
   `#000`, `mb-12` ≈ 3rem) + `MoodToggle` inside a `max-w-[350px] mx-auto`
   column; section `py-[112px]`.
4. `src/components/MoodToggle.tsx`: one widget = `<label>` (block, relative,
   cursor-pointer, 16px) wrapping a visually-hidden real
   `<input type="checkbox" defaultChecked>` (`opacity-0 absolute h-0 w-0`)
   - the mood word (85px wide, centered, 20px weight 500) + the icon
     (lucide `Smile`/`Frown` at ≈100px); checked classes: icon `Smile` +
     `#f1bc31` with a -360deg rotate spin-in animation, word "happy"
     `#f1bc31`; unchecked classes: icon `Frown` + `#6c7b95`, word "sad"
     `#6c7b95`; 0.3s transitions; focus-visible ring; `prefers-reduced-motion`
     respected. Simplest faithful layout: flex column centered (icon above,
     word below).
5. Minimal footer with Component Dock link (`packages/ui` Button/ButtonLink +
   `cn()` used somewhere — knip gate).
6. Tests (100% coverage): heading renders, widget renders with default
   CHECKED state (Smile icon + "happy" in `#f1bc31`), click toggles
   (Frown + "sad" in `#6c7b95`), toggle back (Smile + "happy", rotation
   applied), keyboard (Space) toggle, label-associated input accessible
   name, responsive column, footer link.
7. Gate: `scripts/verify-app.sh moodly`; PR description with source (ColorLib
   Checkbox 10), preview URL, tokens, diffs; mark TEMPLATES.md line 740
   `[x]` + surge URL + `npm run readme:status`.
