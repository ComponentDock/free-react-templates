# Toggly (ColorLib Checkbox 06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-toggly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 06" — sixth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-06/).
  TEMPLATES.md line 736 — mark that line `[x]` when done (single row, no
  duplicates). NOTE: each item in this series is a DIFFERENT variant design —
  Checkbox 06 is the SWITCH-TOGGLE variant (two iOS-style toggle switches),
  NOT the Tickwell notification-filter pill variant, NOT the Checkly mint
  sports-card variant, NOT the Tickbox six-variant list. Do not reuse the
  Tickbox/Checkly/Tickwell app blindly; verify the live DOM for each new
  item.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-06/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-06/` (HTTP 200,
  8.1 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-06/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (LOADED but UNUSED on this page — the toggle is pure CSS,
  no icon glyphs). Google Font **Poppins** 300–500 (@font-face in head).
  Cross-checked with the TEMPLATES.md screenshot (`checkbox-06.jpg` 1200×972,
  browser-viewed 2026-08-15) — all match. Demo brands itself "Checkbox #06";
  recreation uses the NEW name **Toggly**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`. Centered black 28px heading "Checkbox #06", then centered
  18px sub-heading "Switch Toggle" (`rgba(0,0,0,0.5)`), then a narrow
  col-md-4 (~350px) centered column with TWO stacked toggle switches, each
  centered in its own full-width flex row:
  1. `#cbx` — UNCHECKED: `#e6e6e6` track, white 20px circular knob at left.
  2. `#cbx2` — CHECKED (live DOM carries `checked`): pale pink `#ffe1ed`
     track, vivid pink `#ff7bb0` knob slid 20px right.
     The screenshot confirms: white page, black heading, gray sub-label, one
     pill toggle in the OFF position (light-gray track, white thumb), faint
     pinkish halo hint near the thumb. No navbar, no footer, no images.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #06" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (~350px
     centered column) → `h5.heading-section` → `<small>Switch Toggle</small>`
     (18px, `rgba(0,0,0,0.5)`).
  4. 2 × `div.w-100.d-flex.justify-content-center` → `div.checkbox` →
     `<input type="checkbox">` (`style="display:none"`) + `<label
class="toggle"><span></span></label>`: `#cbx` unchecked, `#cbx2` checked
     (source markup `style="display:none"/ checked` has a stray `/` — the
     parser ignores it; `checked` wins).
- **Design tokens (from `css/style.css`):**
  - Brand accent `#ff7bb0` (vivid pink) — CHECKED knob background AND the
    page link color (`a { color: #ff7bb0 }`).
  - CHECKED track `#ffe1ed` (pale pink); UNCHECKED track `#e6e6e6`; knob
    white; page bg `#fafafa`; heading `#000` 28px; sub-heading
    `rgba(0,0,0,0.5)` 18px; body copy gray, "Poppins", Arial, sans-serif,
    14px, lh 1.8.
  - Toggle anatomy: wrapper 34×20px relative; track 34×14px (top/left 3px),
    radius 8px, `transition: background .2s ease`; knob 20×20px white circle
    (radius 10px), shadow `0 3px 8px rgba(0,0,0,0.2)`, `transition: all .2s
ease`.
  - CHECKED: track `#ffe1ed`; knob `#ff7bb0` + `translateX(20px)` with
    `transition: all .2s cubic-bezier(.8,.4,.3,1.25), background .15s ease`;
    knob shadow `0 3px 8px rgba(255,123,176,.2)`.
  - HALO (`.toggle span:before`): 56×56px, `rgba(255,123,176,.5)`, radius
    50%, margin -18px, `scale(0)` opacity 1 → CHECKED `scale(1)` opacity 0,
    `transition: all .4s ease` — transient pink ripple puff on check.
- **Recreation decisions:** pure CSS toggle → React state (two `checked`
  states: false / true); no lucide icons needed (font-awesome unused on the
  page); Poppins via Google Fonts `<link>`; keep the hidden native
  `<input type="checkbox">` inside the label for a11y — BUT the source labels
  have NO text, so add `aria-label` ("Toggle 1"/"Toggle 2") + a focus-visible
  ring (repo accessibility convention, documented deviation); timings via
  Tailwind `transition-*`/`ease-[cubic-bezier(...)]`; honor
  `prefers-reduced-motion` (state flips instantly, animations suppressed).
  Demo has no footer — add a MINIMAL footer with the mandated Component Dock
  link (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/toggly`; rename package to
   `@free-react-templates/toggly`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `toggly.free.componentdock.com`, `"homepage"` =
   `https://toggly.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fafafa` page bg, `#ff7bb0` pink
   accent (checked knob + link), `#ffe1ed` checked track, `#e6e6e6`
   unchecked track, `#000` heading, `rgba(0,0,0,0.5)` sub-heading; radii
   8px (track) / 10px (knob); Poppins font stack.
3. `src/App.tsx`: single `DemoSection` — centered `h2` "Checkbox #06" (28px,
   `#000`) + `h5`/small "Switch Toggle" (18px muted) + `ToggleList` inside a
   `max-w-[350px] mx-auto` column; section `py-[112px]`.
4. `src/components/ToggleSwitch.tsx`: props `{ id, label, defaultChecked }`;
   data = `[{ id: 'toggle-1', defaultChecked: false }, { id: 'toggle-2',
defaultChecked: true }]`; each switch = `<label>` wrapping a visually
   hidden real `<input type="checkbox">` (`sr-only` or `display:none` per
   reference) + the visual track/knob: track `w-[34px] h-[14px] rounded-lg`
   (`#e6e6e6` ↔ `#ffe1ed`) with knob `w-5 h-5 rounded-full bg-white`
   absolutely positioned, `translate-x-5` when checked, shadow per state;
   halo = an absolutely-positioned 56px `bg-[rgba(255,123,176,0.5)]`
   rounded-full span that puffs (scale 0→1, fade 0) on check via a transient
   state or keyframe; `aria-label` on the input; focus-visible ring;
   `prefers-reduced-motion` respected.
5. Minimal footer with Component Dock link (`packages/ui` Button/ButtonLink +
   `cn()` used somewhere — knip gate).
6. Tests (100% coverage): heading + sub-heading render, default states
   (toggle 1 unchecked → gray track + white knob left; toggle 2 checked →
   pink track + pink knob right), click toggles (colors + knob slide), toggle
   back, keyboard (Space) toggle, aria-label, responsive column, footer link.
7. Gate: `scripts/verify-app.sh toggly`; PR description with source (ColorLib
   Checkbox 06), preview URL, tokens, diffs; mark TEMPLATES.md line 736
   `[x]` + surge URL + `npm run readme:status`.
